"""network.json 을 읽어서 순전파 계산을 '사람이 읽는 형태'로 출력합니다.

Lecture 6 화면(앞 층에서 온 값 -> x w -> 전부 더한 값 -> 활성화 -> 최종 답)을
그대로 따라갑니다.

  1단계  입력 x 를 확인한다
  2단계  각 입력에 가중치 w 를 곱한다                     (w * a)
  3단계  전부 더하고 편향 b 를 더한다                     (z)
  4단계  활성화 함수에 넣는다                             (a = g(z))
  5단계  마지막 층이면 Sigmoid 를 통과한 값이 최종 답      (0 ~ 1)

실행 예:
    python forward_pass.py                 # 예시 1: 실제 Gentoo 펭귄
    python forward_pass.py --sample 1      # 예시 2: 실제 Adelie 펭귄
    python forward_pass.py --quiet         # 층별 요약만
    python forward_pass.py --x -0.9 0.8 -1.4 -0.6 1.0 -1.0

이 스크립트는 forward_pass_trace.json 도 만들어서, 브라우저 애니메이션
(index.html)의 계산과 숫자가 같은지 검사하는 데 씁니다
(verify_forward_pass.mjs 참고).
"""

import argparse
import json
import os
import sys

import numpy as np

sys.stdout.reconfigure(encoding="utf-8")

HERE = os.path.dirname(os.path.abspath(__file__))
NETWORK_PATH = os.path.join(HERE, "network.json")
TRACE_PATH = os.path.join(HERE, "forward_pass_trace.json")

ACTIVATION_LABEL = {
    "relu": "ReLU",
    "tanh": "tanh",
    "sigmoid": "Sigmoid",
}


def activate(name, z):
    """활성화 함수 (train_network.py 와 같은 정의)."""
    if name == "relu":
        return max(0.0, z)
    if name == "tanh":
        return float(np.tanh(z))
    if name == "sigmoid":
        return float(1.0 / (1.0 + np.exp(-z)))
    raise ValueError(name)


def load_network(path=NETWORK_PATH):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def forward(net, x):
    """입력 x 하나에 대한 순전파. 층마다 계산 과정을 자세히 담아 돌려줍니다."""
    weights, biases = net["weights"], net["biases"]
    activations = net["activations"]

    trace = {"x": [float(v) for v in x], "layers": []}
    a_prev = [float(v) for v in x]

    for layer, (matrix, bias_vec, act_name) in enumerate(
        zip(weights, biases, activations)
    ):
        neurons = []
        for neuron, column in enumerate(matrix[0]):      # column = 이 뉴런으로 들어오는 가중치들
            terms = []
            total = 0.0
            for i, (a_in, w) in enumerate(zip(a_prev, [row[neuron] for row in matrix])):
                product = a_in * w
                total += product
                terms.append({
                    "from_index": i + 1,
                    "a_in": a_in,
                    "w": w,
                    "product": product,
                })
            z = total + bias_vec[neuron]
            a_out = activate(act_name, z)
            neurons.append({
                "neuron": neuron + 1,
                "terms": terms,
                "sum_of_products": total,
                "bias": bias_vec[neuron],
                "z": z,
                "activation": act_name,
                "a": a_out,
            })
        trace["layers"].append({
            "layer": layer + 1,
            "activation": act_name,
            "neurons": neurons,
        })
        a_prev = [n["a"] for n in neurons]

    trace["output_z"] = trace["layers"][-1]["neurons"][0]["z"]
    trace["output_p"] = trace["layers"][-1]["neurons"][0]["a"]
    return trace


def fmt(v):
    return f"{v:+.4f}" if v < 0 else f" {v:.4f}"


def print_input(net, sample, x):
    print("=" * 78)
    print(f"입력 데이터: {sample['label'] if sample else '직접 입력'}")
    for i, (name, value) in enumerate(zip(net["feature_names"], x), start=1):
        raw = ""
        if sample and i - 1 < len(sample["raw_text"]):
            raw_key, raw_value = sample["raw_text"][i - 1]
            raw = f"   (원래 값: {raw_key} = {raw_value})"
        print(f"  x{i} = {fmt(value)}   <- {name}{raw}")
    print("[1단계] 위 6개 숫자가 신경망에 들어갑니다. "
          "(표준화: (원래 값 - 평균) / 표준편차)")


def print_neuron(layer, act_name, neuron):
    label = f"{layer}층 {neuron['neuron']}번 뉴런"
    print(f"  ■ {label}")
    print("      앞 층에서 온 값        가중치          곱한 값")
    for term in neuron["terms"]:
        print(f"      a({layer - 1},{term['from_index']}) = {fmt(term['a_in'])}"
              f"   x   {fmt(term['w'])}   = {fmt(term['product'])}")
    print(f"      편향 b = {fmt(neuron['bias'])}")
    print(f"      z = {fmt(neuron['z'])}"
          f"        <-- 3단계: 전부 더한 값 (곱한 값들의 합 = {fmt(neuron['sum_of_products'])})")
    print(f"      {ACTIVATION_LABEL[act_name]}(z) = {fmt(neuron['a'])}"
          f"   <-- 4단계: 활성화 함수를 통과한 값")


def print_trace(net, trace, sample, quiet):
    print_input(net, sample, trace["x"])

    for layer_info in trace["layers"]:
        layer = layer_info["layer"]
        act_name = layer_info["activation"]
        count = len(layer_info["neurons"])
        print()
        print(f"[2단계~4단계] {layer}층  (활성화 함수: {ACTIVATION_LABEL[act_name]}, "
              f"뉴런 {count}개)")
        print("-" * 78)
        if quiet:
            for neuron in layer_info["neurons"]:
                print(f"  {layer}층 {neuron['neuron']}번: "
                      f"z = {fmt(neuron['z'])}  ->  "
                      f"{ACTIVATION_LABEL[act_name]}  ->  a = {fmt(neuron['a'])}")
        else:
            for neuron in layer_info["neurons"]:
                print_neuron(layer, act_name, neuron)

    print()
    print("=" * 78)
    print("[5단계] 출력층: z 를 Sigmoid 에 넣으면 0 과 1 사이의 숫자로 바뀌어요. "
          "이게 최종 답이에요.")
    print(f"        Sigmoid({fmt(trace['output_z'])}) = {trace['output_p']:.4f}")
    print(f"        최종 답: {net['target_name']} = {trace['output_p'] * 100:.2f} %")
    verdict = "Gentoo 종으로 판정 (0.5 이상)" if trace["output_p"] >= 0.5 \
        else "Gentoo 가 아님으로 판정 (0.5 미만)"
    print(f"        판정: {verdict}")
    print()
    print("층별 결과 요약 (a = 각 층을 지난 뒤의 값)")
    names = ["입력층"] + [f"{i + 1}층 ({ACTIVATION_LABEL[l['activation']]})"
                          for i, l in enumerate(trace["layers"])]
    values = [trace["x"]] + [[n["a"] for n in l["neurons"]] for l in trace["layers"]]
    for name, value in zip(names, values):
        pretty = " ".join(f"{v:+.3f}" for v in value)
        print(f"  {name:<14}: [{pretty}]")


def build_trace_payload(net):
    """verify_forward_pass.mjs 에서 비교할 수 있게 모든 예시의 계산 결과를 저장."""
    traces = []
    for sample in net["samples"]:
        trace = forward(net, sample["x"])
        traces.append({
            "label": sample["label"],
            "species": sample["species"],
            "x": [round(v, 6) for v in trace["x"]],
            "z": [[round(n["z"], 6) for n in layer["neurons"]]
                  for layer in trace["layers"]],
            "a": [[round(n["a"], 6) for n in layer["neurons"]]
                  for layer in trace["layers"]],
            "output_p": round(trace["output_p"], 6),
        })
    return {"network": os.path.basename(NETWORK_PATH), "traces": traces}


def main():
    parser = argparse.ArgumentParser(description="순전파 계산을 한 단계씩 출력")
    parser.add_argument("--sample", type=int, default=0,
                        help="network.json 안의 예시 번호 (0 = Gentoo, 1 = Adelie)")
    parser.add_argument("--x", type=float, nargs=6, default=None,
                        help="직접 넣을 입력 6개 (표준화된 값, 예: --x -0.9 0.8 -1.4 -0.6 1.0 -1.0)")
    parser.add_argument("--quiet", action="store_true", help="층별 요약만 출력")
    args = parser.parse_args()

    net = load_network()
    if args.x is not None:
        sample, x = None, list(args.x)
    else:
        sample = net["samples"][args.sample % len(net["samples"])]
        x = sample["x"]

    trace = forward(net, x)
    print_trace(net, trace, sample, args.quiet)

    payload = build_trace_payload(net)
    with open(TRACE_PATH, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=1)
    print()
    print(f"계산 결과 저장: {TRACE_PATH}")
    print(f"학습 기록: loss={net['training']['final_loss']:.4f}, "
          f"accuracy={net['training']['accuracy']:.4f} "
          f"({net['training']['epochs']} epochs, lr={net['training']['learning_rate']})")


if __name__ == "__main__":
    main()
