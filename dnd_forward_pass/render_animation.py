"""network.json 을 읽어서 순전파 애니메이션을 동영상(mp4) 또는 GIF 로 만듭니다.

실행 예:
    python render_animation.py                 # forward_pass_animation.mp4
    python render_animation.py --sample 1      # Adelie 펭귄으로
    python render_animation.py --gif           # GIF 로 저장
    python render_animation.py --fast          # 뉴런 단위로 (프레임 수 1/3)

왼쪽에는 7개 층(입력 6 -> 은닉 8·8·6·5·4 -> 출력 1)과 214개 가중치 화살표가 보이고,
오른쪽에는 지금 계산 중인 뉴런의 '앞 층에서 온 값 x 가중치 -> 곱 -> 전부 더한 값 z
-> 활성화 함수 -> 다음 층으로' 과정이 강의 화면처럼 차례대로 나타납니다.
"""

import argparse
import os
import sys
import warnings

import numpy as np

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch

import cv2

from forward_pass import ACTIVATION_LABEL, forward, load_network

sys.stdout.reconfigure(encoding="utf-8")

HERE = os.path.dirname(os.path.abspath(__file__))
VIDEO_PATH = os.path.join(HERE, "forward_pass_animation.mp4")
GIF_PATH = os.path.join(HERE, "forward_pass_animation.gif")

BG = "#0d1017"
PANEL = "#141824"
LINE = "#333c55"
TEXT = "#e8ecf5"
MUTED = "#8d97ad"
ACCENT = "#7c6cf0"
ACCENT_SOFT = "#4b3fa7"
ACCENT_BRIGHT = "#b9a8ff"
GREEN = "#2fbf71"
GREEN_BG = "#10331f"
ORANGE = "#f0a53f"
ORANGE_BG = "#3a2606"
NEGATIVE = "#6d3040"
BLUE = "#4f9cf5"


def pick_font():
    """한글이 나오는 폰트를 고릅니다."""
    from matplotlib import font_manager
    for name in ("Malgun Gothic", "Apple SD Gothic Neo", "NanumGothic", "DejaVu Sans"):
        try:
            font_manager.findfont(name, fallback_to_default=False)
            return name
        except Exception:
            continue
    return "DejaVu Sans"


FONT = pick_font()
plt.rcParams["font.family"] = FONT
plt.rcParams["axes.unicode_minus"] = False


def node_xy(column, index, count):
    """층(column) 안에서 index 번째 뉴런의 좌표 (축 좌표계 0~1)."""
    x = 0.045 + column * 0.152
    if count <= 1:
        return x, 0.52
    span = 0.88
    step = span / (count - 1)
    y = 0.52 + (index - (count - 1) / 2) * step
    return x, y


def build_frames(trace, fast):
    """애니메이션 프레임 목록을 만듭니다. 프레임마다 '지금 무엇을 계산 중인지'가 담깁니다."""
    frames = []
    for layer_info in trace["layers"]:
        layer = layer_info["layer"]
        frames.append({"kind": "layer", "layer": layer})
        for neuron in layer_info["neurons"]:
            if not fast:
                for k in range(len(neuron["terms"])):
                    frames.append({"kind": "term", "layer": layer,
                                   "neuron": neuron, "term": k})
            frames.append({"kind": "z", "layer": layer, "neuron": neuron})
            frames.append({"kind": "act", "layer": layer, "neuron": neuron})
    frames.append({"kind": "done", "layer": trace["layers"][-1]["layer"],
                   "neuron": trace["layers"][-1]["neurons"][0]})
    return frames


def layer_label(layer, net):
    if layer == 0:
        return "입력층"
    if layer == len(net["arch"]) - 1:
        return "출력층"
    return f"은닉층 {layer}"


def num(value, digits=3):
    """-0.000 처럼 보이지 않게 부호를 정리해서 숫자를 문자열로 만듭니다."""
    text = f"{value:+.{digits}f}"
    return text[1:] if text.startswith(("+0.", "-0.")) and float(value) == 0 else text


def box(ax, x, y, w, h, text, face, edge, color, fontsize=9, alpha=1.0, weight="normal"):
    ax.add_patch(FancyBboxPatch(
        (x, y), w, h, boxstyle="round,pad=0.004,rounding_size=0.014",
        transform=ax.transAxes, facecolor=face, edgecolor=edge, lw=1.0,
        alpha=alpha, zorder=3))
    ax.text(x + w / 2, y + h / 2, text, transform=ax.transAxes, ha="center",
            va="center", color=color, fontsize=fontsize, alpha=alpha, zorder=4,
            weight=weight)


def draw_network(ax, net, trace, frame):
    """왼쪽: 7개 층과 214개 가중치 화살표. 지금 계산 중인 뉴런만 밝게 표시합니다."""
    from matplotlib.collections import LineCollection
    ax.clear()
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis("off")
    arch = net["arch"]
    active_layer = frame.get("layer", -1)

    for column in range(len(arch)):
        x, _ = node_xy(column, 0, arch[column])
        on = column == active_layer
        ax.add_patch(FancyBboxPatch(
            (x - 0.072, 0.03), 0.144, 0.94,
            boxstyle="round,pad=0.002,rounding_size=0.03", transform=ax.transAxes,
            facecolor=ACCENT if on else "#191e2c", edgecolor="none",
            alpha=0.20 if on else 0.55, zorder=0))
        ax.text(x, 0.975, layer_label(column, net), transform=ax.transAxes,
                ha="center", color=ACCENT_BRIGHT if on else MUTED, fontsize=10,
                weight="bold", zorder=5)
        sub = "x1~x6" if column == 0 else ACTIVATION_LABEL[net["activations"][column - 1]]
        ax.text(x, 0.955, sub, transform=ax.transAxes, ha="center",
                color=MUTED, fontsize=8, zorder=5)

    segments = []
    for L in range(len(arch) - 1):
        for i in range(arch[L]):
            x1, y1 = node_xy(L, i, arch[L])
            for j in range(arch[L + 1]):
                x2, y2 = node_xy(L + 1, j, arch[L + 1])
                segments.append([(x1 + 0.022, y1), (x2 - 0.022, y2)])
    ax.add_collection(LineCollection(segments, colors=LINE, linewidths=0.6,
                                     alpha=0.45, zorder=1))

    neuron = frame.get("neuron")
    if neuron is not None:
        for term in neuron["terms"]:
            i = term["from_index"] - 1
            x1, y1 = node_xy(active_layer - 1, i, arch[active_layer - 1])
            x2, y2 = node_xy(active_layer, neuron["neuron"] - 1, arch[active_layer])
            done = frame["kind"] in ("z", "act", "done") or term["from_index"] - 1 < frame.get("term", -1)
            ax.plot([x1 + 0.022, x2 - 0.022], [y1, y2],
                    color=ACCENT_BRIGHT if not done else "#6f68b8",
                    lw=2.0 if not done else 1.2, alpha=0.95, zorder=2)
            ax.text((x1 + x2) / 2, (y1 + y2) / 2 + 0.012, "× " + num(term["w"], 2),
                    transform=ax.transAxes, ha="center", va="bottom", fontsize=7,
                    color="#ffffff", zorder=6,
                    bbox=dict(boxstyle="round,pad=0.18", facecolor=ACCENT_SOFT,
                              edgecolor="none", alpha=0.95))

    for column in range(len(arch)):
        for j in range(arch[column]):
            x, y = node_xy(column, j, arch[column])
            state = "pending"
            if column == 0:
                state = "input"
            elif column < active_layer:
                state = "done"
            elif column == active_layer and neuron is not None:
                if j < neuron["neuron"] - 1:
                    state = "done"
                elif j == neuron["neuron"] - 1:
                    state = "done" if frame["kind"] in ("act", "done") else "current"
            face = {"input": "#16233a", "pending": "#141824", "done": "#1b2030",
                    "current": "#26224a"}[state]
            edge = {"input": "#2b4a72", "pending": "#232a3b", "done": "#5a6491",
                    "current": ACCENT_BRIGHT}[state]
            if column == len(arch) - 1:
                face, edge = ORANGE_BG, ORANGE
            ax.scatter([x], [y], s=430, facecolor=face, edgecolor=edge,
                       linewidths=1.4, zorder=3)
            text = "?"
            if state == "input":
                text = num(frame["x"][j], 2)
            elif state in ("done", "current"):
                text = num(frame["a"][column][j], 2)
            ax.text(x, y, text, transform=ax.transAxes, ha="center", va="center",
                    fontsize=7.5, color=ORANGE if column == len(arch) - 1 else "#dbe2f0",
                    zorder=4, weight="bold" if state == "current" else "normal")
            name = ("x" + str(j + 1) if column == 0
                    else ("y_hat" if column == len(arch) - 1 else f"h{column}_{j + 1}"))
            ax.text(x, y + 0.035, name, transform=ax.transAxes, ha="center",
                    color=MUTED, fontsize=6.5, zorder=4)


def prepare_frames(trace, frames):
    """프레임마다 '각 뉴런에 지금 표시할 값'을 미리 계산해 둡니다."""
    columns = [list(trace["x"])]
    for layer_info in trace["layers"]:
        columns.append([n["a"] for n in layer_info["neurons"]])

    for frame in frames:
        frame["x"] = trace["x"]
        active = frame.get("layer", -1)
        neuron = frame.get("neuron")
        shown = []
        for c, values in enumerate(columns):
            column_values = []
            for j, final in enumerate(values):
                if c == 0 or c < active:
                    column_values.append(final)
                elif c == active and neuron is not None and j < neuron["neuron"] - 1:
                    column_values.append(final)
                elif c == active and neuron is not None and j == neuron["neuron"] - 1:
                    if frame["kind"] in ("act", "done"):
                        column_values.append(neuron["a"])
                    elif frame["kind"] == "z":
                        column_values.append(neuron["z"])
                    else:
                        k = frame.get("term", -1)
                        column_values.append(sum(t["product"] for t in neuron["terms"][:k + 1]))
                else:
                    column_values.append(None)
            shown.append(column_values)
        frame["a"] = shown
    return frames


def draw_panel(panel, net, trace, frame):
    """오른쪽: 강의 화면처럼 '앞 층에서 온 값 x 가중치 -> 곱 -> 전부 더한 값 -> 활성화'."""
    panel.clear()
    panel.set_xlim(0, 1)
    panel.set_ylim(0, 1)
    panel.axis("off")
    panel.add_patch(FancyBboxPatch(
        (0.004, 0.004), 0.992, 0.992, boxstyle="round,pad=0.006,rounding_size=0.03",
        transform=panel.transAxes, facecolor=PANEL, edgecolor=LINE, lw=1, zorder=0))

    kind = frame["kind"]
    layer = frame.get("layer", -1)

    if kind == "layer":
        panel.text(0.05, 0.93, f"{layer_label(layer, net)} 계산 시작",
                   transform=panel.transAxes, color=ACCENT_BRIGHT, fontsize=13, weight="bold")
        panel.text(0.05, 0.87, f"뉴런 {net['arch'][layer]}개 · 활성화 함수 "
                   f"{ACTIVATION_LABEL[net['activations'][layer - 1]]}",
                   transform=panel.transAxes, color=TEXT, fontsize=10)
        panel.text(0.05, 0.81, "앞 층에서 온 값 (a) 부터 확인합니다:",
                   transform=panel.transAxes, color=MUTED, fontsize=9)
        for j, value in enumerate(frame["a"][layer - 1]):
            box(panel, 0.16, 0.72 - j * 0.062, 0.22, 0.05, f"{value:+.3f}",
                "#1b2030", "#2f3850", TEXT, fontsize=9)
            panel.text(0.40, 0.745 - j * 0.062, f"a({layer - 1},{j + 1})",
                       transform=panel.transAxes, color=MUTED, fontsize=8, va="center")
        return

    neuron = frame["neuron"]
    terms = neuron["terms"]
    count = len(terms)
    label = ACTIVATION_LABEL[neuron["activation"]]

    panel.text(0.05, 0.955, f"{layer_label(layer, net)} · {neuron['neuron']}번 뉴런",
               transform=panel.transAxes, color=TEXT, fontsize=13, weight="bold")
    panel.text(0.05, 0.915, "앞 층에서 온 값            가중치                 곱한 값",
               transform=panel.transAxes, color=MUTED, fontsize=8)

    row_h = min(0.075, 0.55 / (count + 1))     # 편향 줄 + z 줄 자리까지 남겨 둡니다
    current = frame.get("term", count - 1)
    for i, term in enumerate(terms):
        y = 0.845 - i * row_h - 0.05
        alpha = 1.0 if (kind in ("z", "act", "done") or i <= current) else 0.28
        hot = (kind == "term" and i == current)
        box(panel, 0.13, y, 0.20, row_h * 0.76, num(term["a_in"]), "#1b2030",
            ACCENT_BRIGHT if hot else "#2f3850", TEXT, alpha=alpha)
        panel.text(0.355, y + row_h * 0.38, "×", transform=panel.transAxes, color=MUTED,
                   fontsize=10, ha="center", va="center", alpha=alpha)
        box(panel, 0.37, y, 0.19, row_h * 0.76, num(term["w"], 2),
            NEGATIVE if term["w"] < 0 else ACCENT_SOFT, "none", "#ffffff",
            alpha=alpha, weight="bold")
        panel.text(0.585, y + row_h * 0.38, "=", transform=panel.transAxes, color=MUTED,
                   fontsize=10, ha="center", va="center", alpha=alpha)
        box(panel, 0.60, y, 0.22, row_h * 0.76, num(term["product"]), "#1b2030",
            ACCENT_BRIGHT if hot else "#2f3850", TEXT, alpha=alpha)
        panel.text(0.02, y + row_h * 0.38, f"a({layer - 1},{i + 1})",
                   transform=panel.transAxes, color=MUTED, fontsize=7, va="center", alpha=alpha)

    y_bias = 0.845 - count * row_h - 0.05
    bias_alpha = 1.0 if kind in ("z", "act", "done") else 0.28
    box(panel, 0.13, y_bias, 0.20, row_h * 0.76, "1.000", "#16233a", "#2b4a72", TEXT,
        alpha=bias_alpha)
    panel.text(0.355, y_bias + row_h * 0.38, "×", transform=panel.transAxes, color=MUTED,
               fontsize=10, ha="center", va="center", alpha=bias_alpha)
    box(panel, 0.37, y_bias, 0.19, row_h * 0.76, f"b {num(neuron['bias'], 2)}", "#1d3a5c",
        "none", "#cfe2ff", alpha=bias_alpha)
    panel.text(0.585, y_bias + row_h * 0.38, "=", transform=panel.transAxes, color=MUTED,
               fontsize=10, ha="center", va="center", alpha=bias_alpha)
    box(panel, 0.60, y_bias, 0.22, row_h * 0.76, num(neuron["bias"]), "#1b2030",
        "#2f3850", TEXT, alpha=bias_alpha)
    panel.text(0.02, y_bias + row_h * 0.38, "편향 1", transform=panel.transAxes,
               color=BLUE, fontsize=7, va="center", alpha=bias_alpha)

    products = sum(t["product"] for t in terms)
    if kind in ("z", "act", "done"):
        box(panel, 0.04, 0.155, 0.92, 0.075,
            f"z = {num(products)} (곱한 값의 합) + {num(neuron['bias'])} (편향) "
            f"= {num(neuron['z'])}", "#221d47", ACCENT_SOFT, TEXT, fontsize=9.5)
    else:
        partial = sum(t["product"] for t in terms[:current + 1])
        box(panel, 0.04, 0.155, 0.92, 0.075,
            f"지금까지 더한 값(누적) = {num(partial)}", "#1b2030", "#2f3850", MUTED,
            fontsize=9.5, alpha=0.9)

    if kind in ("act", "done"):
        note = "  ← ReLU 는 음수를 0 으로 만듭니다" if (
            neuron["activation"] == "relu" and neuron["a"] == 0) else ""
        box(panel, 0.04, 0.07, 0.92, 0.075,
            f"{label}(z) = {label}({num(neuron['z'])}) = {num(neuron['a'])}{note}",
            GREEN_BG, "#1d5c37", GREEN, fontsize=9.5)
    else:
        box(panel, 0.04, 0.07, 0.92, 0.075, f"{label}(z) = ?  (아직 활성화 전)",
            GREEN_BG, "#1d5c37", MUTED, fontsize=9.5, alpha=0.45)

    if kind == "done":
        box(panel, 0.04, 0.004, 0.92, 0.055,
            f"최종 답: {net['target_name']} = {neuron['a'] * 100:.2f} %",
            ORANGE_BG, ORANGE, ORANGE, fontsize=11, weight="bold")


def main():
    parser = argparse.ArgumentParser(description="순전파 애니메이션 동영상 만들기")
    parser.add_argument("--sample", type=int, default=0,
                        help="network.json 안의 예시 번호 (0 = Gentoo, 1 = Adelie)")
    parser.add_argument("--fast", action="store_true",
                        help="뉴런 단위로 건너뛰기 (프레임 수 1/3)")
    parser.add_argument("--gif", action="store_true", help="GIF 로 저장")
    parser.add_argument("--png", action="store_true",
                        help="동영상 대신 장면 3개를 PNG 로 저장 (빠른 확인용)")
    parser.add_argument("--fps", type=int, default=12, help="초당 프레임 (기본 12)")
    args = parser.parse_args()

    net = load_network()
    sample = net["samples"][args.sample % len(net["samples"])]
    trace = forward(net, sample["x"])

    fast = args.fast or args.gif          # GIF 는 용량 때문에 뉴런 단위로
    frames = prepare_frames(trace, build_frames(trace, fast))

    width, height = (1280, 720) if not args.gif else (880, 495)
    dpi = 100 if not args.gif else 69
    fig = plt.figure(figsize=(width / dpi, height / dpi), dpi=dpi, facecolor=BG)
    ax = fig.add_axes([0.01, 0.055, 0.60, 0.85])
    panel = fig.add_axes([0.625, 0.055, 0.365, 0.85])
    fig.text(0.015, 0.978, "순전파(forward pass) 애니메이션 · 입력 6개 → 은닉층 5개 → 출력 1개",
             color=TEXT, fontsize=13, weight="bold")
    fig.text(0.015, 0.950, f"입력: {sample['label']}   "
             + "   ".join(f"x{i + 1}={v:+.3f}" for i, v in enumerate(trace["x"])),
             color=MUTED, fontsize=9)
    fig.text(0.015, 0.012, "보라 상자 = 가중치 w · 파란 원 = 항상 1 인 편향항 · "
             "초록 상자 = 활성화 함수 통과 후 값", color=MUTED, fontsize=8)

    if args.png:
        def first_index(predicate):
            return next(i for i, f in enumerate(frames) if predicate(f))
        picks = [
            first_index(lambda f: f["kind"] == "term" and f["layer"] == 1 and f.get("term") == 2),
            first_index(lambda f: f["kind"] == "z" and f["layer"] == 3),
            first_index(lambda f: f["kind"] == "act" and f["layer"] == len(net["arch"]) - 1),
            len(frames) - 1,
        ]
        for number, index in enumerate(picks, start=1):
            draw_network(ax, net, trace, frames[index])
            draw_panel(panel, net, trace, frames[index])
            fig.savefig(os.path.join(HERE, f"preview_{number}.png"), facecolor=BG)
        print("미리보기 PNG 4장 저장 완료 (preview_1..4.png)")
        return

    print(f"프레임 {len(frames)}개 그리는 중 ... (구조 {net['arch']})")
    images = []
    if args.gif:
        from PIL import Image
    else:
        writer = cv2.VideoWriter(VIDEO_PATH, cv2.VideoWriter_fourcc(*"mp4v"),
                                 args.fps, (width, height))

    missing_glyph = 0
    with warnings.catch_warnings(record=True) as caught:
        warnings.simplefilter("always")
        for index, frame in enumerate(frames):
            draw_network(ax, net, trace, frame)
            draw_panel(panel, net, trace, frame)
            fig.canvas.draw()
            buffer = np.asarray(fig.canvas.buffer_rgba())[:, :, :3]
            if args.gif:
                images.append(Image.fromarray(buffer).convert("P", palette=Image.ADAPTIVE))
            else:
                writer.write(cv2.cvtColor(buffer, cv2.COLOR_RGB2BGR))
            if (index + 1) % 50 == 0:
                print(f"  {index + 1} / {len(frames)}")
        missing_glyph = sum(1 for w in caught if "missing from font" in str(w.message))

    if args.gif:
        images[0].save(GIF_PATH, save_all=True, append_images=images[1:],
                       duration=int(1000 / args.fps), loop=0, optimize=True)
        print(f"저장 완료: {GIF_PATH} ({os.path.getsize(GIF_PATH) / 1e6:.1f} MB)")
    else:
        writer.release()
        print(f"저장 완료: {VIDEO_PATH} ({os.path.getsize(VIDEO_PATH) / 1e6:.1f} MB)")

    if missing_glyph:
        print(f"글자 누락 경고 {missing_glyph}건 (폰트: {FONT})")


if __name__ == "__main__":
    main()
