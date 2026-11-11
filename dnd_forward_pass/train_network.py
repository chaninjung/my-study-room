"""DND 2026 Autumn - Lecture 6 (MLP) 따라하기: 작은 MLP를 직접 학습시킵니다.

Week 6 실습에서 쓴 Palmer Penguins 데이터를 그대로 사용합니다.

  입력  x1..x6 : 부리 길이, 부리 깊이, 날개 길이, 몸무게, 성별, 부리 비율  (모두 표준화)
  구조         : 6 -> 8 -> 8 -> 6 -> 5 -> 4 -> 1   (은닉층 5개)
  활성화       : ReLU, ReLU, tanh, tanh, tanh, Sigmoid
  출력         : 이 펭귄이 Gentoo 종일 확률 (0 ~ 1)

학습된 가중치/편향은 network.json 에 저장됩니다. 애니메이션(index.html,
forward_pass.py)은 그 파일을 읽어서 "실제 데이터가 실제 답으로 바뀌는 과정"을
한 단계씩 보여 줍니다.

실행:
    python train_network.py
"""

import csv
import json
import os
import sys
import urllib.request

import numpy as np

sys.stdout.reconfigure(encoding="utf-8")

# ----------------------------------------------------------------------------
# 1. 설정 (여기 값만 바꾸면 네트워크 구조를 바꿀 수 있습니다)
# ----------------------------------------------------------------------------
ARCH = [6, 8, 8, 6, 5, 4, 1]                      # 각 층의 뉴런 수 (은닉층 5개)
ACTIVATIONS = ["relu", "relu", "tanh", "tanh", "tanh", "sigmoid"]
SEED = 20261015                                    # 가중치 초기값 고정
EPOCHS = 600                                       # 전체 데이터를 600번 반복
LEARNING_RATE = 0.05

HERE = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(HERE, "data")
DATA_PATH = os.path.join(DATA_DIR, "penguins.csv")
NETWORK_PATH = os.path.join(HERE, "network.json")
HTML_PATH = os.path.join(HERE, "index.html")

DATA_URL = (
    "https://raw.githubusercontent.com/allisonhorst/palmerpenguins/"
    "156daa4301838d9fdcc5b018b29b9149bf975552/inst/extdata/penguins.csv"
)

FEATURE_NAMES = [
    "부리 길이 (mm)",
    "부리 깊이 (mm)",
    "날개 길이 (mm)",
    "몸무게 (g)",
    "성별 (수컷=1)",
    "부리 비율 (길이/깊이)",
]
FEATURE_KEYS = [
    "bill_length_mm",
    "bill_depth_mm",
    "flipper_length_mm",
    "body_mass_g",
    "sex_male",
    "bill_ratio",
]
TARGET_NAME = "Gentoo 종일 확률"


# ----------------------------------------------------------------------------
# 2. 데이터 읽기 (실습 sheet 와 같은 CSV, 결측치가 있는 행은 제외)
# ----------------------------------------------------------------------------
def download_if_needed():
    """data/penguins.csv 가 없으면 내려받습니다 (실습 sheet 와 같은 URL)."""
    if os.path.exists(DATA_PATH):
        return
    os.makedirs(DATA_DIR, exist_ok=True)
    print("CSV 내려받는 중 ...")
    urllib.request.urlretrieve(DATA_URL, DATA_PATH)


def features_of(row):
    """CSV 한 행 -> 입력 벡터 6개 (원래 단위 그대로)."""
    bill_length = float(row["bill_length_mm"])
    bill_depth = float(row["bill_depth_mm"])
    return [
        bill_length,
        bill_depth,
        float(row["flipper_length_mm"]),
        float(row["body_mass_g"]),
        1.0 if row["sex"] == "male" else 0.0,
        bill_length / bill_depth,
    ]


def load_dataset():
    """(X_raw, y, rows) 를 돌려줍니다. y = 1 이면 Gentoo."""
    download_if_needed()
    with open(DATA_PATH, encoding="utf-8") as f:
        rows = list(csv.DictReader(f))

    x_raw, y, kept = [], [], []
    needed = ["species"] + FEATURE_KEYS[:4] + ["sex"]
    for row in rows:
        if any(row.get(k, "NA") in ("", "NA") for k in needed):
            continue                                    # 결측치는 그냥 건너뜀
        x_raw.append(features_of(row))
        y.append(1.0 if row["species"] == "Gentoo" else 0.0)
        kept.append(row)

    return np.array(x_raw, dtype=np.float64), np.array(y, dtype=np.float64), kept


# ----------------------------------------------------------------------------
# 3. 활성화 함수
# ----------------------------------------------------------------------------
def activate(name, z):
    if name == "relu":
        return np.maximum(z, 0.0)
    if name == "tanh":
        return np.tanh(z)
    if name == "sigmoid":
        return 1.0 / (1.0 + np.exp(-z))
    raise ValueError(name)


def activate_grad(name, z, a):
    """활성화 함수의 도함수 (z: 활성화 전 값, a: 활성화 후 값)."""
    if name == "relu":
        return (z > 0.0).astype(z.dtype)
    if name == "tanh":
        return 1.0 - a ** 2
    if name == "sigmoid":
        return a * (1.0 - a)
    raise ValueError(name)


# ----------------------------------------------------------------------------
# 4. 순전파 / 역전파 (Lecture 6 의 forward / backward 그대로)
# ----------------------------------------------------------------------------
def forward(params, X):
    """X: (N, 6) -> 각 층의 활성화 전 값 Zs 와 활성화 후 값 As."""
    weights, biases = params
    Zs, As = [], [X]
    a = X
    for layer in range(len(weights)):
        z = a @ weights[layer] + biases[layer]
        a = activate(ACTIVATIONS[layer], z)
        Zs.append(z)
        As.append(a)
    return Zs, As


def bce_loss(y_hat, y):
    eps = 1e-12
    p = np.clip(y_hat, eps, 1.0 - eps)
    return float(-np.mean(y * np.log(p) + (1.0 - y) * np.log(1.0 - p)))


def backward(params, Zs, As, y):
    weights, _ = params
    n = y.shape[0]
    grads_w = [None] * len(weights)
    grads_b = [None] * len(weights)

    # sigmoid + BCE 의 출력층 미분은 아주 깔끔합니다: (y_hat - y) / N
    delta = (As[-1] - y.reshape(-1, 1)) / n
    for layer in reversed(range(len(weights))):
        grads_w[layer] = As[layer].T @ delta          # dL/dW = a(앞 층 출력)^T · delta
        grads_b[layer] = delta.sum(axis=0)            # dL/db = delta 의 합
        if layer > 0:
            # delta 를 한 층 뒤로 전달: (delta · W^T) * 활성화 함수의 도함수
            # Zs[layer-1] = 그 층의 활성화 전 값, As[layer] = 그 층의 활성화 후 값
            delta = (delta @ weights[layer].T) * activate_grad(
                ACTIVATIONS[layer - 1], Zs[layer - 1], As[layer]
            )
    return grads_w, grads_b


def init_params(seed):
    """He / Xavier 초기화. 같은 seed 면 항상 같은 결과가 나옵니다."""
    rng = np.random.default_rng(seed)
    weights, biases = [], []
    for layer, (n_in, n_out) in enumerate(zip(ARCH[:-1], ARCH[1:])):
        if ACTIVATIONS[layer] == "relu":
            scale = np.sqrt(2.0 / n_in)     # He
        else:
            scale = np.sqrt(1.0 / n_in)     # Xavier
        weights.append(rng.normal(0.0, scale, size=(n_in, n_out)))
        biases.append(np.zeros(n_out))
    return weights, biases


def train(params, X, y):
    """Batch gradient descent (Lecture 6 slide 의 그 방법)."""
    weights, biases = params
    history = []
    for epoch in range(1, EPOCHS + 1):
        Zs, As = forward((weights, biases), X)
        loss = bce_loss(As[-1][:, 0], y)
        grads_w, grads_b = backward((weights, biases), Zs, As, y)
        for layer in range(len(weights)):
            weights[layer] -= LEARNING_RATE * grads_w[layer]
            biases[layer] -= LEARNING_RATE * grads_b[layer]
        if epoch == 1 or epoch % max(1, EPOCHS // 10) == 0:
            acc = float(np.mean((As[-1][:, 0] >= 0.5) == (y == 1.0)))
            print(f"  epoch {epoch:5d}  loss={loss:.4f}  accuracy={acc:.4f}")
            history.append({"epoch": epoch, "loss": round(loss, 6),
                            "accuracy": round(acc, 6)})
    return (weights, biases), history


# ----------------------------------------------------------------------------
# 5. 실행
# ----------------------------------------------------------------------------
def make_sample(params, mean, std, label, row):
    """실제 CSV 한 행 -> 애니메이션에서 쓸 예시 (원래 값 + 표준화 값 + 정답 확률)."""
    raw_vec = features_of(row)
    x_vec = (np.array(raw_vec) - mean) / std
    _, acts = forward(params, x_vec.reshape(1, -1))
    return {
        "label": label,
        "species": row["species"],
        "raw": {key: round(float(v), 6) for key, v in zip(FEATURE_KEYS, raw_vec)},
        "raw_text": [
            ["부리 길이 (mm)", float(row["bill_length_mm"])],
            ["부리 깊이 (mm)", float(row["bill_depth_mm"])],
            ["날개 길이 (mm)", float(row["flipper_length_mm"])],
            ["몸무게 (g)", float(row["body_mass_g"])],
            ["성별", "수컷" if row["sex"] == "male" else "암컷"],
            ["부리 비율", round(raw_vec[5], 3)],
        ],
        "x": [round(float(v), 6) for v in x_vec],
        "p_gentoo": round(float(acts[-1][0, 0]), 6),
    }


def main():
    X_raw, y, rows = load_dataset()
    print(f"데이터 {len(y)}개 "
          f"(Gentoo {int(y.sum())}개 / 나머지 {int(len(y) - y.sum())}개)")

    # 표준화: (값 - 평균) / 표준편차. 이걸 해 두면 학습이 훨씬 잘 됩니다.
    mean = X_raw.mean(axis=0)
    std = X_raw.std(axis=0)
    X = (X_raw - mean) / std

    print("학습 시작 (batch gradient descent) ...")
    params, history = train(init_params(SEED), X, y)

    _, As = forward(params, X)
    p = As[-1][:, 0]
    loss = bce_loss(p, y)
    accuracy = float(np.mean((p >= 0.5) == (y == 1.0)))
    print(f"학습 끝: loss={loss:.4f}, accuracy={accuracy:.4f}")

    samples = []
    for species, label in (("Gentoo", "Gentoo 펭귄 (실제 데이터)"),
                           ("Adelie", "Adelie 펭귄 (실제 데이터)")):
        row = next(r for r in rows if r["species"] == species)
        sample = make_sample(params, mean, std, label, row)
        samples.append(sample)
        print(f"  {label}: x={np.round(sample['x'], 3).tolist()} "
              f"-> P(Gentoo)={sample['p_gentoo']:.4f}")

    # 애니메이션의 '실제 데이터 랜덤 뽑기' 버튼에서 쓸 실제 측정값 모음
    step = max(1, len(rows) // 12)
    gallery = []
    for row in rows[::step][:12]:
        item = make_sample(params, mean, std, row["species"], row)
        item["label"] = f"{row['species']}, {row['sex']}"
        gallery.append(item)
    print(f"  실제 데이터 모음 {len(gallery)}마리 준비 완료")

    network = {
        "arch": ARCH,
        "activations": ACTIVATIONS,
        "feature_names": FEATURE_NAMES,
        "feature_keys": FEATURE_KEYS,
        "target_name": TARGET_NAME,
        "normalization": {
            "mean": [round(float(v), 6) for v in mean],
            "std": [round(float(v), 6) for v in std],
        },
        "weights": [[[round(float(v), 6) for v in col] for col in layer]
                    for layer in params[0]],
        "biases": [[round(float(v), 6) for v in b] for b in params[1]],
        "training": {
            "seed": SEED,
            "epochs": EPOCHS,
            "learning_rate": LEARNING_RATE,
            "loss": "binary cross-entropy",
            "final_loss": round(loss, 6),
            "accuracy": round(accuracy, 6),
            "dataset_rows": int(len(y)),
            "history": history,
        },
        "samples": samples,
        "gallery": gallery,
    }

    with open(NETWORK_PATH, "w", encoding="utf-8") as f:
        json.dump(network, f, ensure_ascii=False, indent=1)
    print(f"저장 완료: {NETWORK_PATH}")

    sync_html(network)


def sync_html(network):
    """index.html 안의 network.json 블록을 방금 학습한 값으로 교체합니다."""
    if not os.path.exists(HTML_PATH):
        return
    begin = "<!-- BEGIN NETWORK_JSON -->"
    end = "<!-- END NETWORK_JSON -->"
    with open(HTML_PATH, encoding="utf-8") as f:
        html = f.read()
    if begin not in html or end not in html:
        print("index.html 에 NETWORK_JSON 블록이 없어 건너뜁니다.")
        return
    payload = json.dumps(network, ensure_ascii=False, separators=(",", ":"))
    block = (f"{begin}\n"
             f'<script id="net-json" type="application/json">{payload}</script>\n'
             f"{end}")
    head, rest = html.split(begin, 1)
    _, tail = rest.split(end, 1)
    with open(HTML_PATH, "w", encoding="utf-8") as f:
        f.write(head + block + tail)
    print("index.html 안의 네트워크 값도 갱신했습니다.")


if __name__ == "__main__":
    main()
