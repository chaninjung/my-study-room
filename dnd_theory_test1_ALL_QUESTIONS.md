# DND Theory Test 1 — 전체 문항 317 (질문 · 보기 · 해설)

> **Deep Network Development 2026 가을학기 · 이론 테스트 1** 대비 문제은행 전체 정리본
> 총 **317문항** (이론 219 + NumPy 98) · 실제 시험: 15문항 · 45분 · 통과 7점 · 보기 3~6개 중 최소 1개가 참
> 채점: 정답 조합 **완전 일치 = 1.0점 / 실수 1개 = 0.5점 / 실수 2개 이상 = 0.0점**
> 연습 앱: https://chaninjung.github.io/my-study-room/  (문항 id 로 오답노트·기록이 연결됩니다)

**읽는 법** — 각 문항은 `지문 → 보기(A~F) → 정답 → 해설` 순서이고, 영어 원문은 접이식 블록(`English`) 안에 있습니다. 모든 문항에 **출처 그룹** 배지가 붙습니다.

**출처 그룹** (교수님 DOCX + 강의 PDF 대조 · `dnd_question_classification.md`)

- 1️⃣ **DOCX** — 교수님 DOCX 의 bullet = **시험 범위** : **149문항**
- 2️⃣A **강의 L1–6** — ✗ 표시가 없는 Lecture 1~6 슬라이드 (DOCX bullet 은 아님) : **101문항**
- 2️⃣B **Lecture 7** — ✗ 표시가 없는 Lecture 7 슬라이드 (DOCX 는 Lectures 1–6 이라 범위 밖일 수 있음) : **23문항**
- 3️⃣ **참고** — 자료에 없거나 ✗ 시험 제외 슬라이드에만 있는 내용 (참고용) : **44문항**

**중요도 티어** (교수님이 낼 가능성이 높은 순서 · `dnd_likely_exam_questions.md`)

- ⭐ **티어 A** — 교수님 DOCX bullet **그대로** (가장 먼저 풀 것) : **49문항**
- **티어 B** — ✗ 표시 없는 슬라이드 중 교수님이 강조한 내용 (그다음) : **47문항**
- **티어 C** — 우선순위 낮음 (같은 주제 반복 · 다른 강의 · Lecture 7 · 그룹 3) : **221문항**

> 해설 끝의 `⚠️ 함정:` 은 **거짓 보기가 단어 하나 때문에 틀린 경우** 그 단어가 바뀌면 참이 된다는 표시입니다.

## 목차

| 중요도 티어 | 문항 수 | 문항 id 구성 |
|---|---|---|
| **⭐ 티어 A (DOCX 그대로)** | 49 | D(49) |
| **티어 B (강조된 슬라이드)** | 47 | L1(4) · L2(3) · L3(6) · L4(9) · L5(8) · L6(8) · N(2) · S1(1) · M2(1) · NP(5) |
| **티어 C (우선순위 낮음)** | 221 | L1(8) · L2(9) · L3(12) · L4(9) · L5(10) · L6(5) · L7(18) · N(32) · S1(28) · S2(40) · M(15) · M2(14) · NP(21) |

| 출처 그룹 | 문항 수 | 문항 id 구성 |
|---|---|---|
| **1️⃣ DOCX (시험 범위)** | 149 | L1(6) · L2(3) · L3(7) · L4(3) · L5(9) · L6(1) · N(18) · S1(15) · S2(11) · M(15) · M2(3) · D(49) · NP(9) |
| **2️⃣A 강의 L1–6** | 101 | L1(6) · L2(9) · L3(11) · L4(13) · L5(9) · L6(12) · N(2) · S1(10) · S2(18) · M2(7) · NP(4) |
| **2️⃣B Lecture 7** | 23 | L7(16) · S1(3) · S2(4) |
| **3️⃣ 참고 (자료에 없음)** | 44 | L4(2) · L7(2) · N(14) · S1(1) · S2(7) · M2(5) · NP(13) |

| 강의 | 문항 수 | 범위 | 문항 id 구성 |
|---|---|---|---|
| **Lecture 1** | 25 | 지도학습 기초 · 비지도/강화학습 | L1(12) · S1(2) · S2(2) · M(1) · D(8) |
| **Lecture 2** | 19 | 선형 회귀 · 최소제곱 · 경사하강법 | L2(12) · S1(1) · S2(1) · M2(3) · D(2) |
| **Lecture 3** | 40 | 다변량 회귀 · 로지스틱 회귀 · 특징 스케일링 | L3(18) · S1(3) · S2(3) · M(3) · M2(1) · D(12) |
| **Lecture 4** | 46 | 과대/과소적합 · 정규화 · 검증 · 하이퍼파라미터 | L4(18) · S1(10) · S2(9) · M(2) · M2(1) · D(6) |
| **Lecture 5** | 43 | MLP · 활성함수 · SGD · 파라미터 계산 | L5(18) · S1(4) · S2(9) · M(2) · M2(3) · D(7) |
| **Lecture 6** | 20 | 역전파 · 계산 그래프 · PyTorch | L6(13) · S1(1) · S2(2) · M(1) · M2(1) · D(2) |
| **Lecture 7** | 26 | 평가 지표 · 드롭아웃 · CNN | L7(18) · S1(4) · S2(4) |
| **NumPy** | 98 | NumPy 배열/인덱싱/브로드캐스팅/집계 | N(34) · S1(4) · S2(10) · M(6) · M2(6) · D(12) · NP(26) |

---

# Lecture 1 — 지도학습 기초 · 비지도/강화학습 (25문항)

## L1-01 · 지도학습 정의, 가설함수, 손실함수 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 지도학습(supervised learning)의 기본 개념에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 가설함수(hypothesis function)의 입력은 입력 변수(특징)들이고, 출력은 레이블의 추정값(estimate)이다.
- **B.** 손실함수(loss function)의 값은 항상 하나의 스칼라(single number)여야 한다.
- **C.** 레이블은 스칼라만 될 수 있으며 벡터나 행렬은 될 수 없다.
- **D.** 지도학습의 목표는 참 레이블과 추정값의 차이를 나타내는 손실을 최소화하는 파라미터를 찾는 것이다.
- **E.** 강화학습에서 환경이 주는 피드백은 지도학습의 레이블처럼 모든 스텝에서 즉시 주어진다.

**정답: A, B, D**

**해설** — 가설함수 입력은 특징 x, 출력은 추정 레이블 ŷ (A 참). 손실은 반드시 스칼라, 레이블이 여러 개면 norm 등으로 하나의 수로 만든다 (B 참). 레이블은 스칼라·벡터·행렬 모두 가능 (C 거짓). 목표는 J를 최소화하는 θ를 찾는 것 (D 참). 강화학습 보상은 희소·지연되며 credit assignment 문제를 만든다 (E 거짓). ⚠️ 함정: C — "스칼라만 될 수 있으며" → "벡터·행렬도 될 수 있다"이면 참. ⚠️ 함정: E — "모든 스텝에서 즉시 주어진다" → "보상은 희소·지연된다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the basic concepts of supervised learning are true?

- **A.** The inputs of the hypothesis function are the input variables (features), and its output is an estimate of the label.
- **B.** The value of the loss function must always be a single scalar number.
- **C.** A label can only be a scalar; it cannot be a vector or a matrix.
- **D.** The goal of supervised learning is to find the parameters that minimize the loss, which measures the difference between the true label and our estimate.
- **E.** In reinforcement learning the environment provides feedback at every step immediately, just like the labels in supervised learning.

**Answer: A, B, D**

**Explanation** — Input of the hypothesis function = features x, output = estimated label (A true). The loss must be a scalar; if the label has several variables, a norm is used to reduce it to one number (B true). Labels can be scalars, vectors or matrices (C false). The goal is to find theta that minimizes J (D true). RL rewards are sparse and delayed, which creates the credit assignment problem (E false). ⚠️ Trap: C — "can only be a scalar" → "can also be a vector or a matrix" would make it TRUE. ⚠️ Trap: E — "at every step immediately" → "rewards are sparse and delayed" would make it TRUE.

</details>

---

## L1-02 · 머신러닝 3대 분류와 과제 매핑 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 머신러닝 과제의 분류에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 머신러닝 방법은 지도학습, 비지도학습, 강화학습의 세 그룹으로 나눌 수 있다.
- **B.** 군집화(clustering)와 차원 축소(dimensionality reduction)는 비지도학습 과제다.
- **C.** 선형 회귀는 분류(classification) 문제를 풀기 위한 지도학습 방법이다.
- **D.** 로지스틱 회귀는 이진 분류 문제를 풀기 위한 지도학습 방법이다.
- **E.** 노이즈 제거(denoising)와 표본 생성(sample generation)은 비지도학습 과제로 볼 수 있다.

**정답: A, B, D, E**

**해설** — 3대 분류 = 지도/비지도/강화 (A 참). 군집화·차원축소는 비지도 (B 참). 선형 회귀는 회귀용이며 분류에는 부적합(이상치 민감) (C 거짓). 로지스틱 회귀는 이진 분류용 지도학습 (D 참). 디노이징·표본 생성·이상치 탐지·인페인팅은 비지도 (E 참). ⚠️ 함정: C — 선형 회귀는 "회귀"용 — "분류"를 "회귀"로 바꾸면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the classification of machine learning tasks are true?

- **A.** Machine learning methods can be divided into three main groups: supervised learning, unsupervised learning and reinforcement learning.
- **B.** Clustering and dimensionality reduction are unsupervised learning tasks.
- **C.** Linear regression is a supervised learning method used to solve classification problems.
- **D.** Logistic regression is a supervised learning method used to solve binary classification problems.
- **E.** Denoising and sample generation can be regarded as unsupervised learning tasks.

**Answer: A, B, D, E**

**Explanation** — The three main groups are supervised / unsupervised / reinforcement learning (A true). Clustering and dimensionality reduction are unsupervised (B true). Linear regression is used for regression and is not suitable for classification, because it is very sensitive to outliers (C false). Logistic regression is used for binary classification (D true). Denoising, sample generation, anomaly detection and inpainting are unsupervised tasks (E true). ⚠️ Trap: C — linear regression is for "regression" — swap "classification" for "regression" and it is TRUE.

</details>

---

## L1-03 · 머신러닝이 필요한 이유 / 부적합한 과제 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 컴퓨터로 문제를 푸는 방식에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 같은 과제의 조금씩 다른 변형을 많이 풀어야 할 때는 알고리즘을 직접 작성하는 방식이 이상적이지 않을 수 있다.
- **B.** 알고리즘 해법이 알려져 있지 않거나 계산하기 어려운 문제는 머신러닝이 적합할 수 있다.
- **C.** 과제를 예시를 보여주는 방식으로만 정의할 수 있을 때(예: 개가 어떻게 생겼는가) 머신러닝을 사용할 수 있다.
- **D.** 정렬 알고리즘처럼 효율적 해법이 알려져 있고 쉽게 알고리즘화할 수 있는 문제도 머신러닝으로 푸는 것이 일반적으로 권장된다.
- **E.** 근사적인 결과로 충분하지 않은 문제는 머신러닝에 적합하지 않다.

**정답: A, B, C, E**

**해설** — 알고리즘 작성이 부적합한 3가지 경우: 변형이 많은 과제, 해법을 모르는 과제, 예시로만 정의 가능한 과제 (A, B, C 참). 정렬·무손실 압축처럼 해법이 명확한 문제는 ML 부적합 (D 거짓). 근사 결과로 충분하지 않은 문제도 부적합 (E 참). ⚠️ 함정: D — "권장된다" → "권장되지 않는다"이면 참.

> 티어 근거: Professor lists when NOT to use ML (sorting, lossless compression)

<details><summary>English</summary>

**Q.** Which of the following statements about solving problems with computers are true?

- **A.** Writing an algorithm by hand is often not ideal when we need to solve many slightly different varieties of the same task.
- **B.** Machine learning can be a good choice when the algorithmic solution is unknown or hard to compute.
- **C.** Machine learning can be used when the task can only be formulated by showing examples (for instance, "what does a dog look like?").
- **D.** Problems such as sorting, for which an efficient solution is known and easy to algorithmize, are generally recommended to be solved with machine learning.
- **E.** Tasks for which an approximate result is not satisfactory are not suitable for machine learning.

**Answer: A, B, C, E**

**Explanation** — Writing an algorithm is not ideal in three cases: many slightly different varieties of the same task, an unknown or hard-to-compute solution, and tasks that can only be defined by examples (A, B, C true). Problems with a known, easily algorithmized solution (sorting, lossless compression) are not suitable for ML (D false). Tasks where an approximate result is not satisfactory are also unsuitable (E true). ⚠️ Trap: D — "are generally recommended" → "are not recommended" would make it TRUE.

</details>

---

## L1-04 · 지도학습의 구성요소와 학습 절차 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 지도학습의 구성요소와 절차에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 훈련 표본은 (입력, 레이블) 쌍들의 집합이며, 하나의 데이터 포인트는 입력 변수들과 참 레이블로 구성된다.
- **B.** 지도학습의 과제는 입력으로부터 레이블(기대 출력)을 추정하는 것이다.
- **C.** 레이블이 여러 개인 경우 손실함수는 norm 등을 사용해 하나의 스칼라로 만든다.
- **D.** 학습 절차는 훈련집합에서 최적 파라미터를 찾은 뒤, 학습된 모델로 새로운 미분류 예시의 레이블을 추정하는 것이다.
- **E.** 학습이 끝난 모델은 훈련집합에 포함된 예시에 대해서만 레이블을 추정할 수 있다.

**정답: A, B, C, D**

**해설** — 데이터 포인트 = 입력 + 참 레이블 (A 참). 과제 = 입력에서 레이블 추정 (B 참). 다중 레이블이면 norm으로 스칼라화 (C 참). ① 학습 ② 새 데이터 추정 (D 참). 목적은 훈련 중 보지 못한 새 예시를 잘 추정하는 것이므로 E는 거짓. ⚠️ 함정: E — "훈련집합의 예시에 대해서만" → "새로운 예시에 대해서도"이면 참.

> 출처 메모: 일부 보기(학습 절차)는 강의 슬라이드 내용

<details><summary>English</summary>

**Q.** Which of the following statements about the components and the procedure of supervised learning are true?

- **A.** The training sample is a set of (input, label) pairs, and a single data point consists of the input variables and the true label.
- **B.** The task of supervised learning is to estimate the label (the expected output) from the input.
- **C.** If the label consists of several variables, the loss function uses a norm to reduce it to a single scalar.
- **D.** The procedure is: find the optimal parameters on the training set, then use the trained model to estimate labels for new, unlabeled examples.
- **E.** A trained model can only estimate labels for the examples that were part of the training set.

**Answer: A, B, C, D**

**Explanation** — A data point consists of the inputs plus the true label (A true). The task is to estimate the label from the input (B true). With multiple label variables a norm is used to obtain a scalar (C true). Step 1: learn on the training set; step 2: estimate labels for new data (D true). The purpose is to estimate labels for examples unseen during training, so E is false. ⚠️ Trap: E — "only for the training examples" → "also for new examples" would make it TRUE.

</details>

---

## L1-05 · 비지도학습 과제와 압축/차원축소 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 비지도학습(unsupervised learning)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 레이블이 없으면 과제가 명확하지 않지만, 군집화·압축(차원 축소)·표본 생성 등의 과제로 정식화할 수 있다.
- **B.** 압축(차원 축소) 과제는 입력 x, 압축을 수행하는 가설함수 h, 그리고 x와 복원값 x̂의 norm 차이인 J로 정식화할 수 있다.
- **C.** 압축된 표현은 변수 수가 적어 다루기 쉽고, 2~3차원이면 시각화도 가능하다.
- **D.** 비지도학습은 항상 지도학습보다 좋은 성능을 낸다.
- **E.** 이미지 분할, 이상치 탐지, 인페인팅(inpainting)은 비지도학습의 응용 예로 볼 수 있다.

**정답: A, B, C, E**

**해설** — 레이블이 없을 때 가능한 과제: 군집화·압축/차원축소·표본 생성 (A 참). 오토인코더 정식화 J = \|\|x − x̂\|\| 최소화 (B 참). 압축 표현의 이점: 저장/대역폭 절약, 다루기 쉬움, 2~3차원 시각화 (C 참). 우열을 말할 수 없음 (D 거짓). 이미지 분할·이상치 탐지·인페인팅·디노이징은 비지도 응용 (E 참). ⚠️ 함정: D — "항상 지도학습보다 좋다" → "과제에 따라 다르다"이면 참.

> 출처 메모: 압축(차원축소) 정식화 보기는 강의 슬라이드 내용

<details><summary>English</summary>

**Q.** Which of the following statements about unsupervised learning are true?

- **A.** Without labels the task is not well defined, but it can be formulated as clustering, compression (dimensionality reduction), sample generation, and so on.
- **B.** The compression task can be formulated with the input x, a hypothesis function h that performs the compression, and a loss J defined as the normed difference between x and the reconstruction.
- **C.** A compressed representation consists of fewer variables, which makes it easier to work with, and in 2-3 dimensions it can even be visualized.
- **D.** Unsupervised learning always achieves better performance than supervised learning.
- **E.** Image segmentation, anomaly detection and inpainting can be regarded as applications of unsupervised learning.

**Answer: A, B, C, E**

**Explanation** — Possible unsupervised tasks: clustering, compression / dimensionality reduction, sample generation (A true). Autoencoder: minimize the normed difference between x and its reconstruction (B true). A compressed representation needs less storage and can be visualized in 2-3 dimensions (C true). No method is always better (D false). Segmentation, anomaly detection, inpainting and denoising are unsupervised applications (E true). ⚠️ Trap: D — "always better than supervised" → "depends on the task" would make it TRUE.

</details>

---

## L1-06 · 강화학습 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 강화학습(reinforcement learning)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 에이전트는 환경의 상태를 관찰하고 행동을 수행해 환경에 영향을 준다.
- **B.** 미리 정의된 목표가 환경에서 달성되면 에이전트는 (음수가 될 수도 있는) 보상을 받는다.
- **C.** 에이전트의 목표는 미래에 받을 총 보상의 합을 최대화하는 행동을 선택하는 것이다.
- **D.** 환경의 피드백이 희소(sparse)하기 때문에 어떤 행동이 결과에 기여했는지 판단하기 어려운 credit assignment 문제가 생긴다.
- **E.** 강화학습에서는 지도학습처럼 모든 스텝마다 정답 레이블이 즉시 제공된다.

**정답: A, B, C, D**

**해설** — 에이전트는 상태를 관찰하고 행동으로 환경을 변화시킨다 (A 참). 목표 달성 시 보상(음수 가능) (B 참). 목표 = 미래 총 보상 최대화 (C 참). 피드백이 희소해 credit assignment 문제 발생 (D 참). 지도학습처럼 매 스텝 레이블이 주어지지 않는다 (E 거짓). ⚠️ 함정: E — "모든 스텝마다 정답 레이블이 즉시" → "보상이 희소하고 지연"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about reinforcement learning are true?

- **A.** The agent observes the state of the environment and modifies it by performing actions.
- **B.** If certain predefined goals are met in the environment, the agent receives a reward, which may be negative.
- **C.** The goal of the agent is to choose actions that are expected to maximize the total amount of rewards received in the future.
- **D.** Because the feedback of the environment is sparse, it is hard to tell which action contributed to the result; this is the credit assignment problem.
- **E.** In reinforcement learning a correct label is provided immediately at every step, just like in supervised learning.

**Answer: A, B, C, D**

**Explanation** — The agent observes the state and influences the environment through actions (A true). A reward is given when predefined goals are met, and it may be negative (B true). The goal is to maximize the future total reward (C true). Sparse feedback creates the credit assignment problem (D true). No correct label is given at every step (E false). ⚠️ Trap: E — "a correct label at every step" → "sparse and delayed rewards" would make it TRUE.

</details>

---

## L1-07 · AI의 핵심 질문: 일반화·설명가능성·안전성 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 인공지능의 핵심 질문(일반화, 설명가능성, 안전성)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 일반화(generalization) 문제는 모델이 훈련 예시를 하나하나 외우는지, 실제로 유용한 것을 학습하는지를 묻는다.
- **B.** 결정트리(decision tree)는 해석 가능한 모델의 예이지만 표현력이 매우 제한적이다.
- **C.** 적대적 공격(adversarial attack)은 신경망의 구조와 파라미터를 알지 못해도 이미지의 작은 섭동으로 레이블 추정을 크게 바꿀 수 있으며 실제 환경에서도 통한다.
- **D.** 딥러닝 모델은 형식적 검증(formal verification)을 통해 완전히 검증할 수 있다.
- **E.** 신경망이 학습한 지식은 해석하기 어렵다.

**정답: A, B, C, E**

**해설** — 일반화 = 외우기 vs 유용한 학습 (A 참). 결정트리는 해석 가능하나 표현력 제한 (B 참). 적대적 공격은 구조·파라미터 없이도 동작하며 현실에서도 유효 (C 참). 중요 소프트웨어는 형식 검증이 가능하지만 딥러닝은 경험적으로만 테스트 가능 (D 거짓). 신경망 지식은 해석이 어렵다 (E 참). ⚠️ 함정: D — "완전히 검증할 수 있다" → "검증하기 어렵다"이면 참.

> 티어 근거: "Key questions of AI": generalization, explainability, adversarial attacks

<details><summary>English</summary>

**Q.** Which of the following statements about the key questions of artificial intelligence are true?

- **A.** The generalization question asks whether a model memorizes the training examples one by one or actually learns something useful.
- **B.** Decision trees are an example of an easily interpretable model, but their expressive power is very limited.
- **C.** Adversarial attacks can dramatically change the estimated labels by a small perturbation of the image, even without knowledge of the network architecture and parameters, and they work in reality as well.
- **D.** Deep learning models can be fully verified by formal verification.
- **E.** The knowledge learned by artificial neural networks is difficult to interpret.

**Answer: A, B, C, E**

**Explanation** — Generalization: memorizing versus learning something useful (A true). Decision trees are interpretable but limited (B true). Adversarial attacks work without knowing the architecture or parameters, and they also work in reality (C true). Critical software can be formally verified, but deep learning can only be tested empirically (D false). Knowledge learned by neural networks cannot be explained well (E true). ⚠️ Trap: D — "can be fully verified" → "is hard to verify" would make it TRUE.

</details>

---

## L1-08 · 회귀 vs 분류, 레이블 형태 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 지도학습의 두 가지 주요 과제 유형에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 회귀(regression)는 레이블 집합이 무한한 연속형 레이블을 다룬다.
- **B.** 분류(classification)는 레이블 집합이 유한한 이산형 레이블을 다룬다.
- **C.** 도시의 인구로부터 자동차 수를 예측하는 문제는 회귀 문제다.
- **D.** 사진 속 인물의 직업을 맞히는 문제는 회귀 문제다.
- **E.** 회귀에서 레이블은 반드시 스칼라여야 하며 벡터가 될 수 없다.

**정답: A, B, C**

**해설** — 회귀 = 연속 레이블(무한), 분류 = 이산 레이블(유한) (A, B 참). 인구→자동차 수는 회귀 (C 참). 직업 맞히기는 범주 분류이므로 분류 (D 거짓). 회귀에서도 레이블이 여러 개면 벡터가 될 수 있다 (E 거짓). ⚠️ 함정: E — "반드시 스칼라여야 하며 벡터가 될 수 없다" → "벡터도 될 수 있다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the two main types of supervised learning tasks are true?

- **A.** In regression the label is continuous, so the set of possible labels is infinite.
- **B.** In classification the label is discrete, so the set of possible labels is finite.
- **C.** Predicting the number of cars in a city from its population is a regression problem.
- **D.** Predicting the profession of the person in a picture is a regression problem.
- **E.** In regression the label must be a scalar; it can never be a vector.

**Answer: A, B, C**

**Explanation** — Regression: continuous labels, infinite set; classification: discrete labels, finite set (A, B true). Population to number of cars is regression (C true). Predicting a profession is a categorization task, so it is classification (D false). With several label variables the label can be a vector (E false). ⚠️ Trap: E — "must be a scalar; never a vector" → "can also be a vector" would make it TRUE.

</details>

---

## L1-09 · 지도학습의 응용과 한계 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 지도학습의 응용과 한계에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 객체 검출(object detection)에서 레이블 y는 객체를 둘러싼 바운딩 박스 좌표일 수 있다.
- **B.** 2D/3D 자세 추정(pose estimation)에서 레이블은 이미지 속 인물의 관절 좌표일 수 있다.
- **C.** 감정 분석(sentiment analysis)에서 입력 x는 문자/단어의 시퀀스이고 레이블은 감정 범주다.
- **D.** 지도학습은 항상 모든 가능한 정답을 제공할 수 있다(예: '삶의 의미는 무엇인가'에 대한 y를 정의할 수 있다).
- **E.** 레이블 데이터를 만드는 데는 많은 인적 노동이 필요하지만, 레이블이 없는 데이터는 방대하게 존재한다.

**정답: A, B, C, E**

**해설** — 검출 = 바운딩 박스 좌표/픽셀 윤곽 (A 참). 자세 추정 = 관절 좌표 (B 참). 감정 분석 = 문자/단어 시퀀스 → 감정 범주 (C 참). 모든 정답을 정의할 수는 없다 (D 거짓). 레이블 생성은 비싸고 비레이블 데이터는 풍부 (E 참). ⚠️ 함정: D — "항상 모든 가능한 정답을 제공" → "모든 정답을 제공할 수 없다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the applications and limitations of supervised learning are true?

- **A.** In object detection the label y can be the coordinates of the bounding boxes around the objects.
- **B.** In 2D/3D human pose estimation the label can be the joint coordinates of the persons in the image.
- **C.** In text sentiment analysis the input x is a sequence of characters or words and the label is a sentiment category.
- **D.** Supervised learning can always provide all possible correct outputs; for example, y can be defined for the question "what is the meaning of life?".
- **E.** Producing labeled data requires a great deal of human labor, but a vast amount of unlabeled data is available.

**Answer: A, B, C, E**

**Explanation** — Detection: bounding box coordinates or pixel-level outlines (A true). Pose estimation: joint coordinates (B true). Sentiment analysis maps a sequence of characters or words to a sentiment category (C true). It is not always possible to provide all correct outputs (D false). Labeling is expensive while unlabeled data is abundant (E true). ⚠️ Trap: D — "can always provide all possible outputs" → "cannot provide them all" would make it TRUE.

</details>

---

## L1-10 · 용어 동의어와 AI 내성 분야 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 머신러닝 용어와 실무 조언에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** example, data sample, data point, observation은 같은 의미로 쓰인다.
- **B.** ground truth와 estimates는 같은 의미다.
- **C.** 모델 파라미터(model parameters)와 가중치(weights)는 같은 의미로 쓰인다.
- **D.** loss function과 cost function은 같은 의미로 쓰인다.
- **E.** 보안/안전이 최우선인 분야나 물리 세계와 상호작용이 많은 분야는 AI에 의해 대체되기 어려운 응용으로 언급된다.

**정답: A, C, D, E**

**해설** — example ≈ sample ≈ data point ≈ observation (A 참). ground truth = 참 레이블, estimates = 추정 레이블로 서로 다르다 (B 거짓). parameters ≈ weights (C 참). loss function ≈ cost function (D 참). 보안/안전(의료·교통·사이버보안·인프라), 물리 상호작용(로봇·산업제어·건축), 데이터 부족·예외 많음(금융·경제·위협탐지·바이오)은 AI 내성 분야 (E 참). ⚠️ 함정: B — "같은 의미" → "다른 의미"이면 참.

> 티어 근거: Synonym slide (example = data point, parameters = weights, loss = cost)

<details><summary>English</summary>

**Q.** Which of the following statements about machine learning terminology and career advice are true?

- **A.** Example, data sample, data point and observation mean the same thing.
- **B.** Ground truth and estimates mean the same thing.
- **C.** Model parameters and weights mean the same thing.
- **D.** Loss function and cost function mean the same thing.
- **E.** Fields where security or safety is a priority, or where there is a lot of interaction with the physical world, are mentioned as applications that are hard to replace by AI.

**Answer: A, C, D, E**

**Explanation** — Example = sample = data point = observation (A true). Ground truth is the true label while estimates are the predicted labels (B false). Parameters = weights (C true). Loss function = cost function (D true). Safety-critical fields (medical, transportation, cybersecurity, infrastructure) and fields with heavy physical interaction (robotics, industrial control, architecture) are considered AI-resistant (E true). ⚠️ Trap: B — "mean the same thing" → "mean different things" would make it TRUE.

</details>

---

## L1-11 · 입력 차원의 크기(초상화 예시) · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 고정 해상도 컬러 초상화 이미지로부터 사람의 나이를 추정하는 지도학습 과제에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 입력 변수는 각 픽셀 각 색상 채널의 밝기이며, 예시는 고차원 벡터 공간의 점으로 해석된다.
- **B.** 65536 픽셀의 RGB 이미지라면 입력 변수는 196608개가 된다.
- **C.** 이 과제의 레이블 y는 나이(연속값)이다.
- **D.** 선형 가설함수 h(x) = θ·x 만으로도 이 과제를 충분히 잘 풀 수 있다.
- **E.** 이런 복잡한 과제에는 수백만 개의 파라미터를 가진 심층 신경망을 사용할 수 있다.

**정답: A, B, C, E**

**해설** — 각 픽셀·채널의 밝기가 입력 변수이며 예시는 고차원 벡터공간의 점 (A 참). 65536 × 3 = 196608 (+1 레이블) (B 참). 레이블은 나이 = 연속값 (C 참). 선형 모델은 픽셀 밝기의 선형 결합만 표현하므로 이 과제에는 심하게 과소적합된다 (D 거짓). CNN 등 수백만 파라미터 모델을 사용 (E 참). ⚠️ 함정: D — "선형 가설함수만으로 충분히 잘 풀 수 있다" → "선형만으로는 부족하다"이면 참.

> 티어 근거: Portrait example: 196,608 input variables

<details><summary>English</summary>

**Q.** Consider a supervised learning task that estimates a person's age from a fixed-resolution color portrait. Which statements are true?

- **A.** The input variables are the brightness values of each color channel of each pixel, and the examples can be interpreted as points in a high-dimensional vector space.
- **B.** For a 65536-pixel RGB image the number of input variables is 196608.
- **C.** The label y of this task is the age, which is a continuous value.
- **D.** The linear hypothesis function h(x) = dot(x, theta) alone can already solve this task well.
- **E.** For such a complex task a deep neural network with millions of parameters can be used.

**Answer: A, B, C, E**

**Explanation** — Each pixel and color channel is an input variable and examples are points in a high-dimensional space (A true). 65536 x 3 = 196608 input variables (plus 1 label) (B true). The label is the age, a continuous value (C true). A linear model can only produce a linear combination of pixel brightness, so it is severely underfitted on this task (D false). A network with millions of parameters (e.g. a CNN) can be used (E true). ⚠️ Trap: D — "a linear hypothesis alone solves it well" → "a linear model is not enough" would make it TRUE.

</details>

---

## L1-12 · 비지도학습 응용: 표본 생성과 LLM · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 비지도학습 응용(표본 생성, LLM)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 표본 생성(sample generation)은 훈련집합의 데이터 분포를 학습해 그와 유사한 새 예시를 만드는 과제다.
- **B.** IRIS 데이터(꽃잎 길이/너비 2변수)에서 꽃잎이 지나치게 큰 새 표본은 학습된 분포상 가능성이 낮은 표본으로 볼 수 있다.
- **C.** 대규모 언어모델(LLM)은 대량 데이터로 비지도 학습(다음 토큰 예측)을 한 뒤 부분적인 지도 과제로 파인튜닝할 수 있다.
- **D.** 반복적 디노이징(iterative denoising)은 생성 모델의 한 방식으로 사용된다.
- **E.** 압축(차원 축소)은 반드시 손실이 전혀 없는(lossless) 방식으로만 수행되어야 한다.

**정답: A, B, C, D**

**해설** — 표본 생성 = 데이터 분포 학습 후 새 예시 생성 (A 참). 분포에서 멀리 떨어진 표본은 가능성이 낮다고 판단 (B 참). LLM: 비지도 사전학습 + 지도 파인튜닝 (C 참). Stable Diffusion 등은 반복적 디노이징 생성 모델 (D 참). 이미지 압축은 손실 압축(lossy) 방식도 널리 사용된다 (E 거짓). ⚠️ 함정: E — "반드시 손실 없는 방식으로만" → "손실이 있는 압축도 허용"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about unsupervised applications (sample generation, LLMs) are true?

- **A.** Sample generation learns the distribution of the data in the training set and creates new examples that are similar to it.
- **B.** In the IRIS dataset (two variables: petal length and width) a new sample with extremely large petals can be considered unlikely according to the learned distribution.
- **C.** A large language model (LLM) can be trained in an unsupervised way (next token prediction) on a large amount of data and then fine-tuned on partially supervised language tasks.
- **D.** Iterative denoising is used as one type of generative model.
- **E.** Compression (dimensionality reduction) must always be performed in a completely lossless way.

**Answer: A, B, C, D**

**Explanation** — Sample generation learns the data distribution and creates new examples (A true). A sample far from the distribution is unlikely (B true). LLMs: unsupervised pre-training plus supervised fine-tuning (C true). Stable Diffusion and similar models use iterative denoising (D true). Image compression often uses lossy methods (E false). ⚠️ Trap: E — "must always be lossless" → "lossy compression is also allowed" would make it TRUE.

</details>

---

## S1-01 · 지도·비지도 학습과 회귀/분류의 구분 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 회귀(regression)·분류(classification)와 지도·비지도 학습의 구분에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 선형 회귀는 회귀 문제를 푸는 지도학습 방법이다.
- **B.** 로지스틱 회귀는 분류 문제를 푸는 지도학습 방법이다.
- **C.** 로지스틱 회귀는 출력이 연속값이므로 어떤 회귀 문제든 풀 수 있다.
- **D.** 선형 회귀는 비지도학습 방법이다.
- **E.** 오토인코더로 데이터를 압축하는 데에는 레이블이 필요 없다.

**정답: A, B, E**

**해설** — 선형 회귀 = 회귀를 위한 지도학습 (A 참). 로지스틱 회귀 = 분류를 위한 지도학습 (B 참). 로지스틱 회귀의 출력은 시그모이드로 (0,1) 확률값에 제한되므로 일반적인 회귀 문제를 풀 수 없다 (C 거짓). 선형 회귀는 레이블이 필요하므로 지도학습 (D 거짓). 압축·차원축소는 레이블 없이 가능한 비지도학습 (E 참). ⚠️ 함정: C — 로지스틱 출력은 0~1 제한 — "어떤 회귀든" → "이진 분류만"이면 참. ⚠️ 함정: D — "비지도학습" → "지도학습"이면 참.

<details><summary>English</summary>

**Q.** Which statements about regression, classification and the supervised/unsupervised distinction are true?

- **A.** Linear regression is a supervised method for regression.
- **B.** Logistic regression is a supervised method for classification.
- **C.** Logistic regression can solve any regression task, because its output is continuous.
- **D.** Linear regression is an unsupervised method.
- **E.** Compressing data with an autoencoder needs no labels.

**Answer: A, B, E**

**Explanation** — Linear regression = supervised regression (A true). Logistic regression = supervised classification (B true). The logistic output is squeezed into (0,1), so it cannot solve general regression tasks (C false). Linear regression needs labels, so it is supervised (D false). Compression / dimensionality reduction needs no labels (E true). ⚠️ Trap: C — the logistic output is limited to 0-1 — "any regression" → "binary classification only" would make it TRUE. ⚠️ Trap: D — "unsupervised" → "supervised" would make it TRUE.

</details>

---

## S1-02 · 설명가능성과 안전성(적대적 예제·배경 학습) · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 설명가능성(explainability)과 안전성(safety)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 이미지의 아주 작은 특정 변경만으로도 신경망의 레이블 추정이 크게 바뀔 수 있다.
- **B.** 신경망의 결정은 형식적으로 검증(formal verification)하기 쉽다.
- **C.** 신경망은 동물이 아니라 배경(background)을 학습할 수 있다.
- **D.** 적대적 공격(adversarial attack)은 항상 네트워크 구조와 파라미터를 알아야만 가능하다.

**정답: A, C**

**해설** — 적대적 예제는 픽셀 몇 개만 바꿔도 추정을 뒤집을 수 있다 (A 참). 신경망 결정의 형식적 검증은 매우 어렵다 (B 거짓). 배경·상관관계를 지름길로 학습하는 경우가 흔하다 (C 참). 적대적 공격은 구조를 모르는 black-box 상황에서도 가능하다 (D 거짓). ⚠️ 함정: D — "항상 구조와 파라미터를 알아야" → "black-box 로도 가능"이면 참.

<details><summary>English</summary>

**Q.** Which statements about explainability and safety are true?

- **A.** A small, specific change to an image can change a network's label estimate a lot.
- **B.** Neural network decisions are easy to formally verify.
- **C.** A network can learn the background of a picture instead of the animal.
- **D.** Adversarial attacks always need the network's architecture and parameters.

**Answer: A, C**

**Explanation** — A few changed pixels can flip the estimate (A true). Formal verification of network decisions is very hard (B false). Learning the background is a common shortcut (C true). Attacks work even without knowing the architecture (D false). ⚠️ Trap: D — "always need the architecture and parameters" → "black-box attacks work too" would make it TRUE.

</details>

---

## S2-01 · 비지도학습 과제의 종류 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 비지도학습 과제에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 군집화(clustering)는 레이블 없이 비슷한 예제를 묶는다.
- **B.** 차원축소에서는 입력 x 와 복원값 x̂ 의 차이를 최소화한다.
- **C.** 노이즈 제거(denoising)는 사람이 만든 레이블 없이 정식화할 수 있다.
- **D.** 표본 생성(sample generation)은 데이터의 분포를 학습하려 한다.
- **E.** 분류(classification)에는 레이블이 필요 없다.

**정답: A, B, C, D**

**해설** — 군집화는 레이블 없이 유사도로 묶는 비지도학습 (A 참). 오토인코더류의 차원축소는 재구성 오차를 최소화한다 (B 참). 노이즈 제거는 목표를 입력에서 만들 수 있어 레이블이 필요 없다 (C 참). 생성 모델은 데이터 분포를 학습한다 (D 참). 분류는 레이블이 필요하므로 지도학습이다 (E 거짓). ⚠️ 함정: E — "필요 없다" → "필요하다"이면 참.

<details><summary>English</summary>

**Q.** Which statements about unsupervised learning tasks are true?

- **A.** Clustering groups similar examples without labels.
- **B.** In dimensionality reduction, we minimize the difference between the input x and its reconstruction x̂.
- **C.** Denoising can be formulated without human-made labels.
- **D.** Sample generation tries to learn the distribution of the data.
- **E.** Classification needs no labels.

**Answer: A, B, C, D**

**Explanation** — Clustering groups similar examples without labels (A true). Autoencoder-style dimensionality reduction minimizes the reconstruction error (B true). Denoising can be formulated from the input itself (C true). Generative models learn the data distribution (D true). Classification needs labels, so it is supervised (E false). ⚠️ Trap: E — "needs no labels" → "needs labels" would make it TRUE.

</details>

---

## S2-02 · 지도학습의 목표와 2단계 절차 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 지도학습의 목표와 절차에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 목표는 손실 J 를 최소화하는 θ\* 를 찾는 것이다.
- **B.** 1단계는 훈련집합에서 파라미터를 학습하는 것이다.
- **C.** 2단계는 새롭고 레이블 없는 예제의 레이블을 추정하는 것이다.
- **D.** 목표는 J 를 최대화하는 것이다.
- **E.** 레이블이 있는 데이터를 만드는 데 많은 사람의 노동이 필요할 수 있다.

**정답: A, B, C, E**

**해설** — 손실 최소화가 목표 (A 참). 학습 단계에서 θ 를 찾는다 (B 참). 이후 새 입력의 레이블을 추정(추론)한다 (C 참). 최대화가 아니라 최소화한다 (D 거짓). 주석(annotation)에는 큰 인적 비용이 든다 (E 참). ⚠️ 함정: D — "최대화" → "최소화"이면 참.

<details><summary>English</summary>

**Q.** Which statements about the goal and the two steps of supervised learning are true?

- **A.** Supervised learning goal: find θ\* that minimizes the loss J.
- **B.** Step 1 is learning the parameters on the training set.
- **C.** Step 2 is estimating labels for new, unlabeled examples.
- **D.** The goal is to maximize J.
- **E.** Producing labeled data can need a lot of human work.

**Answer: A, B, C, E**

**Explanation** — The goal is to minimize the loss (A true). Step 1 learns θ on the training set (B true). Step 2 estimates labels for new inputs (C true). We minimize J, not maximize it (D false). Annotating data is expensive (E true). ⚠️ Trap: D — "maximize J" → "minimize J" would make it TRUE.

</details>

---

## M-02 · 지도·비지도·강화학습 과제 분류 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 지도·비지도·강화학습의 과제 분류에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 회귀와 분류는 지도학습 과제다.
- **B.** 군집화에는 레이블이 있는 데이터가 필요하다.
- **C.** 차원축소와 노이즈 제거는 레이블 없이 풀 수 있다.
- **D.** 강화학습에서 환경은 (음수일 수도 있는) 보상을 주며, 희소한 경우가 많고 정답 레이블을 주지는 않는다.
- **E.** 선형 회귀는 비지도학습 방법이다.

**정답: A, C, D**

**해설** — 회귀·분류는 레이블이 필요하므로 지도학습 (A 참). 군집화는 레이블 없이 유사도로 묶는 비지도학습 (B 거짓). 차원축소·노이즈 제거는 레이블 없이 정식화 가능 (C 참). 강화학습의 피드백은 보상이며 희소·지연되고 credit assignment 문제를 만든다 (D 참). 선형 회귀는 레이블을 쓰므로 지도학습 (E 거짓). ⚠️ 함정: B — "필요하다" → "필요 없다"이면 참. ⚠️ 함정: E — "비지도학습" → "지도학습"이면 참.

<details><summary>English</summary>

**Q.** Which statements about supervised, unsupervised and reinforcement learning tasks are true?

- **A.** Regression and classification are supervised learning tasks.
- **B.** Clustering needs labeled data.
- **C.** Dimensionality reduction and denoising can be solved without labels.
- **D.** In reinforcement learning, the environment gives a reward (possibly negative), often sparse, not the correct label.
- **E.** Linear regression is an unsupervised method.

**Answer: A, C, D**

**Explanation** — Regression and classification need labels, so they are supervised (A true). Clustering is unsupervised (B false). Dimensionality reduction and denoising need no labels (C true). RL feedback is a reward, often sparse and delayed (D true). Linear regression is supervised (E false). ⚠️ Trap: B — "needs labeled data" → "needs no labels" would make it TRUE. ⚠️ Trap: E — "unsupervised" → "supervised" would make it TRUE.

</details>

---

## D-01 · 가설함수의 입력과 출력 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 가설함수(hypothesis function)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 입력은 예시의 입력 변수 x 이며 파라미터 θ 를 사용한다.
- **B.** 입력은 참 레이블 y 다.
- **C.** 출력(값)은 레이블의 추정값 ŷ 다.
- **D.** 출력은 손실함수의 값이다.

**정답: A, C**

**해설** — 가설함수 h 는 입력 x(와 파라미터 θ)를 받아 추정값 ŷ 를 출력한다 (A 참, C 참). 참 레이블 y 는 손실함수가 사용한다 (B 거짓). 손실값은 J 의 출력이지 h 의 출력이 아니다 (D 거짓). ⚠️ 함정: B — "참 레이블 y" → "입력 변수 x"이면 참. ⚠️ 함정: D — "손실값" → "추정값 ŷ"이면 참.

<details><summary>English</summary>

**Q.** Which statements about the hypothesis function are true?

- **A.** Its input is the input variables x of an example (it uses the parameters θ).
- **B.** Its input is the true label y.
- **C.** Its output (value) is the estimate ŷ of the label.
- **D.** Its output is the value of the loss.

**Answer: A, C**

**Explanation** — h takes x (with the parameters θ) and gives the estimate ŷ (A true, C true). The true label y is used by the loss function (B false). The loss value is the output of J, not of h (D false). ⚠️ Trap: B — "the true label y" → "the input variables x" would make it TRUE. ⚠️ Trap: D — "the loss value" → "the estimate ŷ" would make it TRUE.

</details>

---

## D-02 · 레이블의 형태(스칼라·벡터) · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 레이블(label)의 형태로 가능한 것을 모두 고르시오.

- **A.** 스칼라 (예: 콜레스테롤 수치)
- **B.** 벡터 (예: 콜레스테롤 + 혈당, 또는 10개 클래스 확률)
- **C.** 레이블은 항상 하나의 숫자다.
- **D.** 레이블은 항상 그림이다.

**정답: A, B**

**해설** — 레이블은 스칼라일 수도, 벡터일 수도 있다 (A·B 참). '항상 하나의 숫자'나 '항상 그림'이라는 제한은 없다 (C·D 거짓). ⚠️ 함정: C — "항상 하나의 숫자" → "벡터도 될 수 있다"이면 참. ⚠️ 함정: D — "항상 그림" → "스칼라·벡터도 가능"이면 참.

<details><summary>English</summary>

**Q.** What can be the format of a label?

- **A.** A scalar (e.g., the cholesterol level)
- **B.** A vector (e.g., cholesterol + blood sugar; or 10 class probabilities)
- **C.** A label is always a single number.
- **D.** A label is always a picture.

**Answer: A, B**

**Explanation** — A label can be a scalar or a vector (A and B true). There is no rule that it must always be a single number or always a picture (C and D false). ⚠️ Trap: C — "always a single number" → "can also be a vector" would make it TRUE. ⚠️ Trap: D — "always a picture" → "a scalar or a vector is also possible" would make it TRUE.

</details>

---

## D-03 · 데이터 포인트의 구성요소 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 지도학습에서 하나의 데이터 포인트(data point)를 구성하는 것을 모두 고르시오.

- **A.** 입력 변수 x
- **B.** 레이블 y
- **C.** 파라미터 θ
- **D.** 손실함수 J

**정답: A, B**

**해설** — 데이터 포인트 = (입력, 레이블) 쌍이다 (A·B 참). 파라미터 θ 와 손실함수 J 는 모델의 구성요소이며 데이터가 아니다 (C·D 거짓). ⚠️ 함정: C — "파라미터 θ" → "레이블 y"이면 참. ⚠️ 함정: D — "손실함수 J" → "레이블 y"이면 참.

<details><summary>English</summary>

**Q.** What are the constituents of a data point in supervised learning?

- **A.** The input variables x
- **B.** The label y
- **C.** The parameters θ
- **D.** The loss function J

**Answer: A, B**

**Explanation** — A data point is an (input, label) pair (A and B true). The parameters θ and the loss J belong to the model, not to the data (C and D false). ⚠️ Trap: C — "the parameters θ" → "the label y" would make it TRUE. ⚠️ Trap: D — "the loss function J" → "the label y" would make it TRUE.

</details>

---

## D-04 · 손실함수의 역할과 값의 형태 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 손실함수(loss function)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 추정값 ŷ 가 레이블 y 와 얼마나 다른지 측정하는 역할이다.
- **B.** 학습 중에 이 값을 최소화한다.
- **C.** 그 값은 스칼라다.
- **D.** 그 값은 벡터가 될 수 있다.
- **E.** 그 값은 행렬이 될 수 있다.

**정답: A, B, C**

**해설** — 손실은 추정과 정답의 차이를 측정한다 (A 참). 학습은 손실을 최소화한다 (B 참). 손실값은 항상 스칼라다 — 레이블이 벡터여도 평균 등으로 하나의 수로 만든다 (C 참, D·E 거짓). ⚠️ 함정: D — "벡터가 될 수 있다" → "항상 스칼라"이면 참. ⚠️ 함정: E — "행렬이 될 수 있다" → "항상 스칼라"이면 참.

<details><summary>English</summary>

**Q.** Which statements about the loss function are true?

- **A.** Its role is to measure how different the estimate ŷ is from the label y.
- **B.** We minimize it during training.
- **C.** Its value is a scalar.
- **D.** Its value can be a vector.
- **E.** Its value can be a matrix.

**Answer: A, B, C**

**Explanation** — The loss measures the difference between the estimate and the label (A true). Training minimizes it (B true). The loss value is always a scalar — even for vector labels it is reduced to a single number (e.g. by averaging) (C true, D and E false). ⚠️ Trap: D — "can be a vector" → "is always a scalar" would make it TRUE. ⚠️ Trap: E — "can be a matrix" → "is always a scalar" would make it TRUE.

</details>

---

## D-05 · 강화학습의 피드백 특성 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 강화학습에서 환경이 주는 피드백에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 보상(reward)이며 숫자이고 음수가 될 수도 있다.
- **B.** 자주 희소하다(매 행동마다 주어지지는 않는다).
- **C.** 지도학습처럼 모든 입력에 대한 정답 레이블이다.
- **D.** 목표는 미래 보상의 기대 총합을 최대화하는 것이다.

**정답: A, B, D**

**해설** — 강화학습의 피드백은 (음수도 가능한) 보상이다 (A 참). 보상은 희소한 경우가 많아 credit assignment 문제를 만든다 (B 참). 정답 레이블이 아니므로 C 는 거짓. 목표는 기대 총 보상 최대화 (D 참). ⚠️ 함정: C — "정답 레이블" → "보상(reward)"이면 참.

<details><summary>English</summary>

**Q.** In reinforcement learning, which statements are true about the feedback from the environment?

- **A.** It is a reward (a number, possibly negative).
- **B.** It is often sparse (we do not get it after every action).
- **C.** It is the correct label for every input, like in supervised learning.
- **D.** The goal is to maximize the total expected future reward.

**Answer: A, B, D**

**Explanation** — RL feedback is a reward (a number that may be negative) (A true). It is often sparse, which creates the credit assignment problem (B true). It is not the correct label, so C is false. The goal is to maximize the total expected future reward (D true). ⚠️ Trap: C — "the correct label" → "a reward" would make it TRUE.

</details>

---

## D-06 · 지도학습에 속하는 과제 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 다음 과제 중 지도학습(supervised learning)에 속하는 것을 모두 고르시오.

- **A.** 회귀(regression)
- **B.** 분류(classification)
- **C.** 군집화(clustering)
- **D.** 차원 축소(dimensionality reduction)
- **E.** 노이즈 제거(denoising)

**정답: A, B**

**해설** — 회귀와 분류는 레이블이 필요하므로 지도학습 (A·B 참). 군집화·차원축소·노이즈 제거는 레이블 없이 정식화할 수 있는 비지도학습 (C·D·E 거짓). ⚠️ 함정: C — "군집화" → "회귀"이면 참. ⚠️ 함정: D — "차원 축소" → "분류"이면 참. ⚠️ 함정: E — "노이즈 제거" → "분류"이면 참.

<details><summary>English</summary>

**Q.** Which of these tasks belong to supervised learning?

- **A.** Regression
- **B.** Classification
- **C.** Clustering
- **D.** Dimensionality reduction
- **E.** Denoising

**Answer: A, B**

**Explanation** — Regression and classification need labels, so they are supervised (A and B true). Clustering, dimensionality reduction and denoising can be formulated without labels (C, D and E false). ⚠️ Trap: C — "clustering" → "regression" would make it TRUE. ⚠️ Trap: D — "dimensionality reduction" → "classification" would make it TRUE. ⚠️ Trap: E — "denoising" → "classification" would make it TRUE.

</details>

---

## D-07 · 각 과제의 목표 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 각 과제의 목표에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 회귀: 연속값을 추정한다.
- **B.** 분류: 범주(클래스)를 추정한다.
- **C.** 군집화: 비슷한 예시를 함께 묶는다.
- **D.** 차원 축소: 입력을 복원할 수 있는 압축 표현을 찾는다.
- **E.** 노이즈 제거: 노이즈가 있는 입력의 깨끗한 버전을 복원한다.

**정답: A, B, C, D, E**

**해설** — 회귀=연속값 추정 (A 참). 분류=범주 추정 (B 참). 군집화=유사 예시 묶기 (C 참). 차원축소=복원 가능한 압축 표현 (D 참). 노이즈 제거=깨끗한 입력 복원 (E 참).

<details><summary>English</summary>

**Q.** Which statements about the goal of the tasks are true?

- **A.** Regression: estimate a continuous value.
- **B.** Classification: estimate a category (class).
- **C.** Clustering: group similar examples together.
- **D.** Dimensionality reduction: find a compact representation from which the input can be reconstructed.
- **E.** Denoising: restore the clean version of a noisy input.

**Answer: A, B, C, D, E**

**Explanation** — Regression estimates a continuous value (A true). Classification estimates a class (B true). Clustering groups similar examples (C true). Dimensionality reduction finds a reconstructable compact representation (D true). Denoising restores the clean input (E true).

</details>

---

## D-08 · 선형·로지스틱 회귀의 과제와 학습 유형 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 선형 회귀와 로지스틱 회귀의 용도와 학습 유형에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 선형 회귀는 회귀 과제를 푸는 데 사용한다.
- **B.** 선형 회귀는 지도학습 방법이다.
- **C.** 로지스틱 회귀는 분류 과제를 푸는 데 사용한다.
- **D.** 로지스틱 회귀는 지도학습 방법이다.
- **E.** 로지스틱 회귀는 비지도학습 방법이다.
- **F.** 선형 회귀는 분류 과제에 사용한다.

**정답: A, B, C, D**

**해설** — 선형 회귀=회귀용 지도학습 (A·B 참). 로지스틱 회귀=분류용 지도학습 (C·D 참, E 거짓). 선형 회귀는 분류용이 아니다 (F 거짓). ⚠️ 함정: E — "비지도학습" → "지도학습"이면 참. ⚠️ 함정: F — "분류 과제" → "회귀 과제"이면 참.

<details><summary>English</summary>

**Q.** Which statements about linear and logistic regression are true?

- **A.** Linear regression is used to solve regression tasks.
- **B.** Linear regression is a supervised learning method.
- **C.** Logistic regression is used to solve classification tasks.
- **D.** Logistic regression is a supervised learning method.
- **E.** Logistic regression is an unsupervised method.
- **F.** Linear regression is used for classification tasks.

**Answer: A, B, C, D**

**Explanation** — Linear regression solves regression tasks and is supervised (A, B true). Logistic regression solves classification tasks and is supervised (C, D true, E false). Linear regression is not a classifier (F false). ⚠️ Trap: E — "unsupervised" → "supervised" would make it TRUE. ⚠️ Trap: F — "classification tasks" → "regression tasks" would make it TRUE.

</details>

---

# Lecture 2 — 선형 회귀 · 최소제곱 · 경사하강법 (19문항)

## L2-01 · 선형 회귀와 최소제곱법 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 선형 회귀(linear regression)와 최소제곱법(least squares)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 최소제곱법의 손실함수는 참 레이블과 추정값 차이의 제곱을 훈련집합 전체에 대해 평균한 MSE이다.
- **B.** 그래디언트 벡터는 손실함수가 가장 가파르게 증가하는 방향을 가리킨다.
- **C.** 경사하강법은 현재 파라미터에서 그래디언트를 더하는 방향으로 파라미터를 갱신한다.
- **D.** 격자탐색(grid search)은 파라미터 수가 늘어날수록 평가해야 할 조합 수가 지수적으로 증가한다.
- **E.** 학습률 α(alpha)는 스텝(step)의 크기를 조절한다.

**정답: A, B, D, E**

**해설** — MSE = 제곱 오차의 평균 (A 참). 그래디언트는 최대 증가 방향 (B 참). 경사하강법은 그래디언트를 빼는 방향으로 갱신한다 (C 거짓). 격자탐색은 차원이 늘면 조합 수가 지수적으로 폭발 (D 참). α는 스텝 크기 = 학습률 (E 참). ⚠️ 함정: C — "더하는 방향" → "빼는 방향"이면 참.

> 티어 근거: Least-squares loss definition

<details><summary>English</summary>

**Q.** Which of the following statements about linear regression and the least squares method are true?

- **A.** The loss function of the least squares method is the MSE: the average of the squared differences between the true labels and the estimates over the whole training set.
- **B.** The gradient vector points in the direction in which the loss function increases most steeply.
- **C.** Gradient descent updates the parameters by adding the gradient to the current parameter values.
- **D.** In grid search the number of parameter combinations to evaluate grows exponentially with the number of parameters.
- **E.** The learning rate alpha controls the size of the steps.

**Answer: A, B, D, E**

**Explanation** — A true. B true. C false: gradient descent subtracts the gradient. D true. E true. ⚠️ Trap: C — "adding the gradient" → "subtracting the gradient" would make it TRUE.

</details>

---

## L2-02 · 편향 파라미터와 볼록성 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 선형 회귀의 편향(bias) 파라미터와 손실함수의 볼록성(convexity)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 원점을 지나는 직선만으로는 모든 데이터를 잘 설명할 수 없어 편향(절편) 파라미터 θ0를 추가한다.
- **B.** 파라미터가 2개인 선형 회귀의 MSE 손실함수 그래프는 타원형 포물면(elliptic paraboloid)이다.
- **C.** 선형 회귀 + MSE의 손실함수는 볼록하므로, 학습률이 충분히 작으면 경사하강법으로 전역 최적해를 찾는 것이 보장된다.
- **D.** 임의의 비볼록(non-convex) 손실함수에 대해서도 경사하강법은 항상 전역 최소점을 찾는다.
- **E.** 편미분(partial derivative)을 계산할 때는 미분 대상이 아닌 변수들을 상수로 취급한다.

**정답: A, B, C, E**

**해설** — 아파트 가격 예시처럼 직선이 원점을 지나야 하면 잘 맞지 않아 θ0를 추가 (A 참). 파라미터 2개 → 타원형 포물면, 여전히 볼록 (B, C 참). 비볼록 함수에서는 국소 최소점에 도달할 수 있고 전역 최소는 보장되지 않는다 (D 거짓). 편미분은 다른 변수를 상수 취급 (E 참). ⚠️ 함정: D — "항상 전역 최소점을 찾는다" → "보장되지 않는다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the bias parameter of linear regression and the convexity of the loss function are true?

- **A.** A straight line through the origin cannot describe all data well, so a bias (intercept) parameter theta0 is added.
- **B.** For a linear regression with two parameters the MSE loss surface is an elliptic paraboloid.
- **C.** The MSE loss of linear regression is convex, so with a small enough learning rate gradient descent is guaranteed to find the global optimum.
- **D.** For any non-convex loss function gradient descent always finds the global minimum.
- **E.** When computing a partial derivative, the variables that we are not differentiating with respect to are treated as constants.

**Answer: A, B, C, E**

**Explanation** — A true (apartment price example). B true. C true. D false: a non-convex function may have local minima. E true. ⚠️ Trap: D — "always finds" → "is not guaranteed to find" would make it TRUE.

</details>

---

## L2-03 · 도함수의 정의와 미분 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 도함수(derivative)의 정의와 계산에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 차분몫(difference quotient)은 두 점 (z, f(z))와 (z+a, f(z+a))를 잇는 현(chord)의 기울기다.
- **B.** 도함수는 차분몫의 a→0 극한이며, 이 극한이 존재하고 유한할 때 접선의 기울기와 같아진다.
- **C.** 합성함수의 미분에는 연쇄법칙 f(g(x))' = f'(g(x))·g'(x) 를 사용할 수 있다.
- **D.** 손실함수의 도함수를 구할 때 훈련집합의 x와 y는 미지수로 취급한다.
- **E.** 손실함수 최소점에서는 모든 편미분 값이 0이 된다.

**정답: A, B, C, E**

**해설** — 차분몫 = 현의 기울기, 극한 = 접선의 기울기 (A, B 참). 연쇄법칙 (C 참). x와 y는 데이터에서 오는 알려진 상수이며 미지수는 θ뿐이다 (D 거짓). 최소점에서 모든 편미분이 0 → n+1개 방정식으로 파라미터를 구할 수 있다 (E 참). ⚠️ 함정: D — "미지수" → "상수"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the definition and computation of the derivative are true?

- **A.** The difference quotient is the slope of the chord connecting the points (z, f(z)) and (z+a, f(z+a)).
- **B.** The derivative is the limit of the difference quotient as a approaches zero; if this limit exists and is finite, it equals the slope of the tangent at that point.
- **C.** The chain rule f(g(x))' = f'(g(x)) \* g'(x) can be used to differentiate composite functions.
- **D.** When differentiating the loss function, the x and y values of the training set are treated as unknowns.
- **E.** At the minimum of the loss function all partial derivatives are zero.

**Answer: A, B, C, E**

**Explanation** — A true (slope of the chord). B true (slope of the tangent). C true. D false: x and y are known constants from the data. E true. ⚠️ Trap: D — "unknowns" → "constants" would make it TRUE.

</details>

---

## L2-04 · 경사하강법의 동작 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 경사하강법(gradient descent)의 동작에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 손실함수가 가장 가파르게 감소하는 방향은 그래디언트의 반대 방향이다.
- **B.** 그래디언트 벡터의 각 원소는 손실함수의 각 파라미터에 대한 편미분이다.
- **C.** 초기 파라미터 값은 무작위로 선택할 수 있다.
- **D.** 학습률 α가 작을수록 항상 더 적은 반복으로 최적해에 도달한다.
- **E.** 선형 회귀의 MSE 손실은 볼록하므로 적절한 학습률에서 전역 최소점에 도달하는 것이 보장된다.

**정답: A, B, C, E**

**해설** — 그래디언트는 최대 증가 방향이므로 반대 방향이 최속강하 방향 (A 참). 그래디언트 원소 = 편미분 (B 참). 초기값은 랜덤 선택 가능 (C 참). α가 너무 작으면 수렴이 매우 느려지고, 너무 크면 발산/진동할 수 있다 (D 거짓). 선형 회귀 + MSE는 볼록 → 전역 최적 보장 (E 참). ⚠️ 함정: D — "더 적은 반복" → "더 많은 반복"이면 참.

> 티어 근거: Gradient descent: subtract the gradient, learning rate α

<details><summary>English</summary>

**Q.** Which of the following statements about how gradient descent works are true?

- **A.** The direction in which the loss function decreases most steeply is the opposite of the gradient.
- **B.** Each element of the gradient vector is the partial derivative of the loss function with respect to one parameter.
- **C.** The initial parameter values can be chosen randomly.
- **D.** The smaller the learning rate alpha, the fewer iterations are always needed to reach the optimum.
- **E.** The MSE loss of linear regression is convex, so with an appropriate learning rate reaching the global minimum is guaranteed.

**Answer: A, B, C, E**

**Explanation** — A true. B true. C true. D false: a very small alpha makes convergence slow; a very large one may diverge. E true. ⚠️ Trap: D — "fewer iterations" → "more iterations" would make it TRUE.

</details>

---

## L2-05 · 편향(절편) 파라미터의 역할 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 선형 회귀 가설함수 h(x) = θ0 + θ1·x 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** θ1은 직선의 기울기(slope)다.
- **B.** θ0는 직선이 y축과 만나는 값(편향, bias/intercept)이다.
- **C.** 편향 항이 없는 h(x) = θ1·x 모델은 원점을 지나는 직선만 표현할 수 있어 데이터에 잘 맞지 않을 수 있다.
- **D.** 아파트 가격 예시에서 면적이 작은 아파트의 ㎡당 가격이 더 높은 경향은 원점을 지나는 직선으로 잘 설명되지 않는다.
- **E.** θ0를 추가하면 손실함수는 더 이상 볼록하지 않게 된다.

**정답: A, B, C, D**

**해설** — θ1 = 기울기, θ0 = 편향/절편 (A, B 참). 원점 통과 직선은 표현력이 제한적 (C 참). 아파트 가격 예시에서 직선이 원점을 지나야 하면 잘 맞지 않았다 (D 참). θ0를 추가해도 MSE 손실은 여전히 2차식이고 볼록하다 (E 거짓). ⚠️ 함정: E — "더 이상 볼록하지 않게 된다" → "여전히 볼록하다"이면 참.

<details><summary>English</summary>

**Q.** Consider the linear regression hypothesis h(x) = theta0 + theta1\*x. Which statements are true?

- **A.** theta1 is the slope of the line.
- **B.** theta0 is the value where the line intersects the y-axis (the bias / intercept).
- **C.** The model h(x) = theta1\*x without a bias term can only represent lines through the origin, which may fit the data poorly.
- **D.** In the apartment price example, the fact that smaller apartments have a higher price per square meter is not explained well by a line through the origin.
- **E.** Adding theta0 makes the loss function non-convex.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the MSE loss stays quadratic and convex. ⚠️ Trap: E — "makes it non-convex" → "keeps it convex" would make it TRUE.

</details>

---

## L2-06 · 전역 최적해 보장 여부 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 경사하강법이 전역 최적해를 찾는 것이 보장되는지에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 손실함수가 볼록(convex)하고 학습률이 충분히 작다면 전역 최적해를 찾는 것이 보장된다.
- **B.** 선형 회귀 + MSE 손실함수는 볼록하므로 전역 최적해를 찾는 것이 보장된다.
- **C.** 손실함수가 비볼록하면 국소 최소점(local minimum)에 도달할 수 있고 전역 최소는 보장되지 않는다.
- **D.** 파라미터가 1개일 때 선형 회귀의 MSE 손실함수는 포물선 형태다.
- **E.** 학습률이 매우 크면 경사하강법은 항상 더 빠르고 정확하게 최적해에 도달한다.

**정답: A, B, C, D**

**해설** — 볼록 + 충분히 작은 α → 전역 최적 보장 (A 참). 선형 회귀 MSE는 볼록 (B 참). 비볼록에서는 국소 최소점 가능 (C 참). 파라미터 1개면 MSE는 포물선, 2개면 타원형 포물면 (D 참). 학습률이 너무 크면 진동·발산할 수 있다 (E 거짓). ⚠️ 함정: E — "더 빠르고 정확하게 도달" → "발산하거나 진동"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about whether gradient descent is guaranteed to find the global optimum are true?

- **A.** If the loss function is convex and the learning rate is small enough, finding the global optimum is guaranteed.
- **B.** The MSE loss of linear regression is convex, so finding the global optimum is guaranteed.
- **C.** If the loss function is non-convex, gradient descent may reach a local minimum and the global minimum is not guaranteed.
- **D.** With a single parameter the MSE loss of linear regression is a parabola.
- **E.** With a very large learning rate gradient descent always reaches the optimum faster and more accurately.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: a too large learning rate may oscillate or diverge. ⚠️ Trap: E — "faster and more accurately" → "diverge or oscillate" would make it TRUE.

</details>

---

## L2-07 · 최적 파라미터를 찾는 단순한 접근들 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 최적 파라미터를 찾기 위한 단순한(naive) 접근법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 격자탐색(grid search)은 각 파라미터에 대해 유한한 개수의 값을 정하고 모든 조합을 평가한다.
- **B.** 격자탐색은 파라미터 공간이 다차원이 되면 평가해야 할 조합 수가 지수적으로 증가한다.
- **C.** 현재 파라미터의 이웃을 살펴 손실이 감소하는 방향으로 이동하는 방법은 격자탐색보다 효율적이지만, 파라미터 수가 늘면 시험해야 할 방향 수가 지수적으로 증가한다.
- **D.** 우리는 손실함수의 공식(미분 가능한 형태)을 알고 있으므로 미분을 이용해 더 효율적으로 최적 파라미터를 찾을 수 있다.
- **E.** 격자탐색은 파라미터 수가 많아져도 계산 비용이 거의 증가하지 않는다.

**정답: A, B, C, D**

**해설** — 격자탐색의 정의와 차원의 저주 (A, B 참). 이웃 탐색도 방향 수가 지수적으로 증가 (C 참). 손실함수 공식을 알므로 미분·경사하강법을 사용 (D 참). 파라미터가 늘면 격자탐색 비용은 지수적으로 폭발한다 (E 거짓). ⚠️ 함정: E — "계산 비용이 거의 증가하지 않는다" → "지수적으로 증가한다"이면 참.

> 티어 근거: Grid search and "check the neighbors" – why they fail

<details><summary>English</summary>

**Q.** Which of the following statements about the naive approaches to finding the optimal parameters are true?

- **A.** Grid search defines a finite set of values for each parameter and evaluates every combination.
- **B.** In grid search the number of combinations to evaluate grows exponentially when the parameter space becomes multidimensional.
- **C.** Looking at the neighbours of the current parameters and moving in the direction where the loss decreases is more efficient than grid search, but the number of directions to test grows exponentially with the number of parameters.
- **D.** Since we know the formula of the loss function and it is differentiable, we can find the optimal parameters more efficiently using derivatives.
- **E.** Grid search becomes cheaper as the number of parameters grows.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the cost grows exponentially. ⚠️ Trap: E — "hardly grows" → "grows exponentially" would make it TRUE.

</details>

---

## L2-08 · 경사하강법 계산 예시(도시 인구 → 자동차 수) · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 인구로 자동차 수를 추정하는 단변량 선형 회귀에서 경사하강법을 적용했더니 θ\* = 0.6768, J(θ\*) = 669.51 이 되었다. 이에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 학습 과정에서 손실값은 209135.18 → 34818.94 → 669.51 처럼 감소했다.
- **B.** 인구 550000인 도시의 자동차 수는 약 0.6768 × 550000 = 372240 대로 추정된다.
- **C.** θ\* = 0.6768 은 손실함수를 최소화하는 파라미터(기울기)다.
- **D.** 학습된 모델은 훈련집합에 없던 새로운 도시의 자동차 수를 추정하는 데 사용할 수 있다.
- **E.** 학습 후에도 손실값이 0이 아니므로 이 모델은 아무 의미가 없다.

**정답: A, B, C, D**

**해설** — 경사하강법 단계별 손실 감소 (A 참). 0.6768 × 550000 = 372240 (B 참). θ\*는 MSE를 최소화하는 기울기 (C 참). 학습 목적은 새 데이터에 대한 추정 (D 참). 실제 데이터에는 잡음이 있으므로 손실 0이 아니어도 유용한 모델이 될 수 있다 (E 거짓). ⚠️ 함정: E — "아무 의미가 없다" → "여전히 쓸모 있는 모델이다"이면 참.

<details><summary>English</summary>

**Q.** In a univariate linear regression that estimates the number of cars from the population, gradient descent produced theta\* = 0.6768 and J(theta\*) = 669.51. Which statements are true?

- **A.** During training the loss decreased like 209135.18, then 34818.94, then 669.51.
- **B.** For a city with 550000 inhabitants the estimated number of cars is about 0.6768 \* 550000 = 372240.
- **C.** theta\* = 0.6768 is the parameter (slope) that minimizes the loss function.
- **D.** The trained model can be used to estimate the number of cars of a new city that was not part of the training set.
- **E.** Since the loss value after training is not zero, the model is useless.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: real data contains noise, so a small non-zero loss can still be a useful model. ⚠️ Trap: E — "the model is useless" → "the model is still useful" would make it TRUE.

</details>

---

## L2-09 · 학습된 선형 회귀 모델의 사용 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 아파트 면적으로 가격을 추정하는 선형 회귀를 학습한 결과 θ0\* = 23.159, θ1\* = 0.6681 이 되었다. 이에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 100 m² 아파트의 가격은 약 23.159 + 100 × 0.6681 = 89.97 로 추정된다.
- **B.** θ0\* = 23.159 는 면적이 0일 때 추정되는 가격(편향 항)이다.
- **C.** θ1\* = 0.6681 은 면적이 1 증가할 때 가격 추정치의 증가량이다.
- **D.** 이 모델은 훈련집합에 포함되지 않은 새로운 아파트의 가격도 추정할 수 있다.
- **E.** θ0\* 와 θ1\* 는 훈련집합의 데이터가 아니라 사람이 직접 지정한 하이퍼파라미터다.

**정답: A, B, C, D**

**해설** — 23.159 + 66.81 = 89.97 (A 참). θ0 = 절편, θ1 = 기울기 (B, C 참). 학습된 모델은 새 데이터 추정에 사용 (D 참). θ0, θ1은 학습으로 결정되는 모델 파라미터이며 하이퍼파라미터가 아니다 (E 거짓). ⚠️ 함정: E — "사람이 지정한 하이퍼파라미터" → "데이터로 학습된 파라미터"이면 참.

<details><summary>English</summary>

**Q.** A linear regression that estimates apartment prices from the floor area was trained and gave theta0\* = 23.159 and theta1\* = 0.6681. Which statements are true?

- **A.** The price of a 100 m2 apartment is estimated as about 23.159 + 100 \* 0.6681 = 89.97.
- **B.** theta0\* = 23.159 is the estimated price when the floor area is zero (the bias term).
- **C.** theta1\* = 0.6681 is the increase of the estimated price when the floor area increases by one unit.
- **D.** The model can also estimate the price of a new apartment that was not part of the training set.
- **E.** theta0\* and theta1\* are hyperparameters specified by a human, not learned from the training data.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: they are model parameters learned from the data. ⚠️ Trap: E — "specified by a human" → "learned from the data" would make it TRUE.

</details>

---

## L2-10 · 손실함수 수식의 구성요소 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 최소제곱법의 손실함수 J(θ) = (1/m) · Σ (h_θ(x_j) − y_j)² 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** m은 훈련집합의 예시(데이터 포인트) 개수다.
- **B.** j는 훈련 예시의 인덱스이며, 합은 모든 훈련 예시에 대해 계산한다.
- **C.** 1/m 을 곱하는 것은 오차 제곱의 평균(mean)을 구하기 위해서다.
- **D.** J(θ)의 값은 스칼라다.
- **E.** J(θ)의 값은 각 훈련 예시마다 하나씩 있는 벡터다.

**정답: A, B, C, D**

**해설** — m = 예시 개수 (A 참). j = 예시 인덱스, 합은 전체 예시에 대해 (B 참). 1/m은 평균 (C 참). 손실은 항상 스칼라 (D 참, E 거짓). 참고: 개별 오차는 예시마다 있지만 손실함수는 이를 하나의 수로 집계한다. ⚠️ 함정: E — "벡터" → "스칼라"이면 참.

<details><summary>English</summary>

**Q.** Consider the least squares loss J(theta) = (1/m) \* sum over j of (h(x_j) - y_j)^2. Which statements are true?

- **A.** m is the number of examples (data points) in the training set.
- **B.** j is the index of the training example, and the sum is computed over all training examples.
- **C.** Multiplying by 1/m computes the mean of the squared errors.
- **D.** The value of J(theta) is a scalar.
- **E.** The value of J(theta) is a vector with one element per training example.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: individual errors exist per example, but the loss function aggregates them into one number. ⚠️ Trap: E — "a vector" → "a scalar" would make it TRUE.

</details>

---

## L2-11 · 손실함수의 성질 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 손실함수(loss function)의 성질에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 손실함수는 주어진 파라미터 값에서 실제 레이블과 추정값이 얼마나 다른지를 나타낸다.
- **B.** 대부분의 손실함수에서 손실값이 0이면 완벽한 추정을 의미한다.
- **C.** 추정 오차가 클수록 손실값도 커진다.
- **D.** 레이블이 여러 변수로 구성된 경우 절댓값 대신 norm 등을 사용해 하나의 수로 만든다.
- **E.** 손실함수의 값은 벡터나 행렬이 될 수 있다.

**정답: A, B, C, D**

**해설** — 손실 = 오차의 크기를 나타내는 지표 (A 참). 0이면 완벽한 추정 (B 참). 오차가 크면 손실도 크다 (C 참). 다중 레이블이면 norm 등으로 스칼라화 (D 참). 손실은 반드시 스칼라 (E 거짓). ⚠️ 함정: E — "벡터나 행렬이 될 수 있다" → "스칼라여야 한다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the properties of the loss function are true?

- **A.** The loss function indicates how much the true label differs from the estimate for given parameter values.
- **B.** For most loss functions a loss value of zero means a perfect estimate.
- **C.** The greater the estimation error, the greater the loss value.
- **D.** If the label consists of several variables, a norm is used instead of the absolute value to obtain a single number.
- **E.** The value of the loss function can be a vector or a matrix.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the loss must always be a scalar. ⚠️ Trap: E — "can be a vector or a matrix" → "must be a scalar" would make it TRUE.

</details>

---

## L2-12 · 학습 과정의 관찰과 수렴 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 선형 회귀를 경사하강법으로 학습하는 과정에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 반복이 진행되면서 손실값이 점차 감소하는지 관찰할 수 있다.
- **B.** 파라미터 업데이트는 모든 파라미터에 대해 그래디언트를 이용해 동시에 수행된다.
- **C.** 초기 파라미터를 다르게 선택해도 볼록한 손실함수에서는 결국 같은 최소점(전역 최적해)에 도달한다.
- **D.** 학습을 언제 멈출지는 반복 횟수를 정하거나 조기 종료(early stopping)로 결정할 수 있다.
- **E.** 경사하강법은 단 한 번의 스텝으로 항상 정확한 최적 파라미터를 얻는다.

**정답: A, B, C, D**

**해설** — 손실 감소 관찰 (A 참). 모든 파라미터를 동시에 갱신 (B 참). 볼록 함수에서는 초기값과 무관하게 전역 최소점에 수렴(단, 도달 경로는 다름) (C 참). 종료 조건 = 반복 횟수 또는 조기 종료 (D 참). 경사하강법은 반복적 근사 방법이며 한 번에 정확한 해를 주지 않는다 (E 거짓). ⚠️ 함정: E — "단 한 번의 스텝" → "여러 번의 반복"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about training a linear regression with gradient descent are true?

- **A.** During the iterations we can observe whether the loss value gradually decreases.
- **B.** The parameter update is performed for all parameters at the same time using the gradient.
- **C.** With a convex loss function, different initial parameters still lead to the same (global) minimum.
- **D.** When to stop training can be decided by a fixed number of iterations or by early stopping.
- **E.** Gradient descent obtains the exact optimal parameters in a single step.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: it is an iterative method that only approximates the optimum. ⚠️ Trap: E — "in a single step" → "after many iterations" would make it TRUE.

</details>

---

## S1-09 · MSE 손실함수 수식의 구성요소 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** J(Θ) = 1/(2m) Σⱼ₌₁ᵐ (ŷ⁽ʲ⁾ − y⁽ʲ⁾)² 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 회귀를 위한 MSE 형태의 손실함수다.
- **B.** j 는 훈련 예제의 인덱스다.
- **C.** m 은 훈련 예제의 개수다.
- **D.** J(Θ) 는 스칼라다.
- **E.** 이진 분류에 가장 적합한 선택이다.

**정답: A, B, C, D**

**해설** — 제곱오차의 평균이므로 MSE (A 참). 위첨자 (j) 는 j번째 훈련 예제 (B 참). m 은 예제 개수 (C 참). 모든 예제의 오차를 하나의 수로 합치므로 스칼라 (D 참). 이진 분류에는 교차엔트로피가 적합하다 (E 거짓). ⚠️ 함정: E — "이진 분류" → "회귀"이면 참.

<details><summary>English</summary>

**Q.** About J(Θ) = 1/(2m) Σⱼ₌₁ᵐ (ŷ⁽ʲ⁾ − y⁽ʲ⁾)². Which are true?

- **A.** It is an MSE-type loss for regression.
- **B.** j indexes the training examples.
- **C.** m is the number of training examples.
- **D.** J(Θ) is a scalar.
- **E.** It is the best choice for binary classification.

**Answer: A, B, C, D**

**Explanation** — It is the mean squared error (A true). The superscript (j) indexes the j-th example (B true). m is the number of examples (C true). Everything is reduced to a single number, so J is a scalar (D true). Binary classification should use cross-entropy (E false). ⚠️ Trap: E — "binary classification" → "regression" would make it TRUE.

</details>

---

## S2-09 · 선형 회귀·경사하강법의 성질 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 선형 회귀와 경사하강법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** MSE 손실은 θ 에 대해 이차식이며 볼록하다.
- **B.** 파라미터가 2개면 손실 곡면은 타원 포물면(elliptic paraboloid)이다.
- **C.** 격자탐색(grid search)은 파라미터 수가 늘면 평가 횟수가 지수적으로 증가한다.
- **D.** 그래디언트는 가장 가파르게 증가하는 방향을 가리킨다.
- **E.** 학습률 α 가 매우 커도 수렴이 보장된다.

**정답: A, B, C, D**

**해설** — MSE 는 θ 의 이차식이라 볼록하다 (A 참). 파라미터 2개면 그릇 모양의 타원 포물면 (B 참). 격자탐색은 차원이 늘면 조합이 지수적으로 늘어난다 (C 참). 그래디언트는 최대 증가 방향이다 (D 참). α 가 너무 크면 발산하거나 진동한다 (E 거짓). ⚠️ 함정: E — "매우 커도 수렴이 보장" → "발산할 수 있다"이면 참.

<details><summary>English</summary>

**Q.** Linear regression and gradient descent. Which are true?

- **A.** The MSE loss is quadratic and convex in θ.
- **B.** With 2 parameters, the loss surface is an elliptic paraboloid.
- **C.** Grid search needs exponentially more evaluations as parameters increase.
- **D.** The gradient gives the direction of the steepest increase.
- **E.** With a very large α, convergence is still guaranteed.

**Answer: A, B, C, D**

**Explanation** — MSE is quadratic in θ and convex (A true). With two parameters the surface is a bowl-shaped elliptic paraboloid (B true). Grid search grows exponentially with the number of parameters (C true). The gradient points in the steepest increase direction (D true). A large α can diverge (E false). ⚠️ Trap: E — "convergence is still guaranteed" → "it can diverge" would make it TRUE.

</details>

---

## M2-02 · MSE 손실값과 그래디언트 수치 계산 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** MSE 손실 J(Θ) = 1/(2m) Σⱼ₌₁ᵐ (ŷ⁽ʲ⁾ − y⁽ʲ⁾)² 에서 m = 3, ŷ = [2, 4, 6], y = [1, 5, 9] 일 때 옳은 것을 모두 고르시오.

- **A.** J = 11/6 이다.
- **B.** 제곱 오차의 합은 11이다.
- **C.** 1/(2m) 대신 1/m 을 쓰면 손실은 11/3 이 된다.
- **D.** J = 11/3 이다.
- **E.** J 는 음수가 될 수 있다.
- **F.** ∂J/∂ŷ⁽¹⁾ = (ŷ⁽¹⁾ − y⁽¹⁾)/m = 1/3 이다.

**정답: A, B, C, F**

**해설** — 오차는 1, −1, −3 이고 제곱합은 1+1+9 = 11 (B 참). J = 11/(2·3) = 11/6 (A 참, D 거짓). 1/m 을 쓰면 11/3 (C 참). 제곱합이므로 음수가 될 수 없다 (E 거짓). ∂J/∂ŷ⁽¹⁾ = (1/(2m))·2·(ŷ−y) = (ŷ−y)/m = 1/3 (F 참). ⚠️ 함정: E — "음수가 될 수 있다" → "항상 0 이상이다"이면 참.

<details><summary>English</summary>

**Q.** MSE loss: J(Θ) = 1/(2m) Σⱼ₌₁ᵐ (ŷ⁽ʲ⁾ − y⁽ʲ⁾)². We have m = 3, ŷ = [2, 4, 6], y = [1, 5, 9]. Which statements are true?

- **A.** J = 11/6.
- **B.** The sum of the squared errors is 11.
- **C.** If the factor 1/(2m) were replaced by 1/m, the loss would be 11/3.
- **D.** J = 11/3.
- **E.** J can be negative.
- **F.** ∂J/∂ŷ⁽¹⁾ = (ŷ⁽¹⁾ − y⁽¹⁾)/m = 1/3.

**Answer: A, B, C, F**

**Explanation** — The errors are 1, −1, −3, so the sum of squares is 1+1+9 = 11 (B true). J = 11/(2·3) = 11/6 (A true, D false). With 1/m it would be 11/3 (C true). A sum of squares is never negative (E false). ∂J/∂ŷ⁽¹⁾ = (1/(2m))·2·(ŷ−y) = (ŷ−y)/m = 1/3 (F true). ⚠️ Trap: E — "can be negative" → "is always ≥ 0" would make it TRUE.

</details>

---

## M2-03 · 다중 출력 MSE (1/(2mk) 정규화) · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 다중 출력 회귀의 손실 J(Θ) = 1/(2mk) Σⱼ₌₁ᵐ Σᵢ₌₁ᵏ (ŷᵢ⁽ʲ⁾ − yᵢ⁽ʲ⁾)² 에서 m = 2, k = 2 이고 ŷ = [[1, 2], [3, 4]], y = [[1, 0], [1, 4]] 일 때 옳은 것을 모두 고르시오.

- **A.** J = 1 이다.
- **B.** 모든 제곱 오차의 합은 8이다.
- **C.** 분모 2mk 는 8이다.
- **D.** J = 2 이다.
- **E.** 손실은 레이블 벡터의 원소들에 대해서도 평균을 낸다.
- **F.** J 는 2개 원소를 갖는 벡터다.

**정답: A, B, C, E**

**해설** — 오차는 [[0, 2], [2, 0]] 이고 제곱합은 4+4 = 8 (B 참). 2mk = 2·2·2 = 8 (C 참). J = 8/8 = 1 (A 참, D 거짓). 출력이 여러 개면 원소별로도 평균을 낸다 (E 참). J 는 스칼라다 (F 거짓). ⚠️ 함정: F — "벡터" → "스칼라"이면 참.

> 출처 메모: 다중 출력 MSE(1/(2mk)) — DOCX는 "other loss functions"만 언급

<details><summary>English</summary>

**Q.** Multi-output regression: J(Θ) = 1/(2mk) Σⱼ₌₁ᵐ Σᵢ₌₁ᵏ (ŷᵢ⁽ʲ⁾ − yᵢ⁽ʲ⁾)². We have m = 2 examples and k = 2 outputs. ŷ = [[1, 2], [3, 4]] and y = [[1, 0], [1, 4]]. Which statements are true?

- **A.** J = 1.
- **B.** The sum of all squared errors is 8.
- **C.** The denominator 2mk is 8.
- **D.** J = 2.
- **E.** The loss is averaged over the elements of the label vector too.
- **F.** J is a vector with 2 elements.

**Answer: A, B, C, E**

**Explanation** — The errors are [[0, 2], [2, 0]] and the squares sum to 4+4 = 8 (B true). 2mk = 2·2·2 = 8 (C true). J = 8/8 = 1 (A true, D false). With several outputs the loss is also averaged over the elements (E true). J is a scalar (F false). ⚠️ Trap: F — "a vector" → "a scalar" would make it TRUE.

</details>

---

## M2-07 · 경사하강법 갱신 수치 계산 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 갱신 규칙 θ := θ − α·∂J/∂θ 에서 J(θ) = (θ − 3)² 이고 θ = 1 일 때 옳은 것을 모두 고르시오.

- **A.** ∂J/∂θ = −4 다.
- **B.** α = 0.25 이면 갱신 후 θ 는 2 다.
- **C.** α = 0.25 이면 J 는 4 에서 1 로 감소한다.
- **D.** α = 1.5 이면 갱신 후 θ 는 7 이고 J 는 16 으로 증가한다.
- **E.** 올바른 갱신 규칙은 θ := θ + α·∂J/∂θ 다.

**정답: A, B, C, D**

**해설** — ∂J/∂θ = 2(θ−3) = −4 (A 참). θ_new = 1 − 0.25·(−4) = 2 (B 참). J(1) = 4, J(2) = 1 (C 참). α = 1.5 이면 θ_new = 1 + 6 = 7 이고 J(7) = 16 으로 증가한다 (D 참). 그래디언트를 '더하는' 규칙은 손실을 증가시킨다 (E 거짓).

<details><summary>English</summary>

**Q.** Gradient descent update: θ := θ − α·∂J/∂θ. Let J(θ) = (θ − 3)², with θ = 1. Which statements are true?

- **A.** ∂J/∂θ = −4.
- **B.** With α = 0.25, the new θ is 2.
- **C.** With α = 0.25, J decreases from 4 to 1.
- **D.** With α = 1.5, the new θ is 7, and J increases to 16.
- **E.** The correct update rule is θ := θ + α·∂J/∂θ.

**Answer: A, B, C, D**

**Explanation** — ∂J/∂θ = 2(θ−3) = −4 (A true). θ_new = 1 − 0.25·(−4) = 2 (B true). J(1) = 4 and J(2) = 1 (C true). With α = 1.5, θ_new = 1 + 6 = 7 and J(7) = 16, so the loss grows (D true). Adding the gradient increases the loss (E false).

</details>

---

## D-16 · 경사하강법의 전역 최적 보장 여부 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 충분히 작은 스텝 크기를 쓸 때 경사하강법으로 (근사적으로) 전역 최적 파라미터를 찾는 것이 보장되는 경우를 모두 고르시오.

- **A.** MSE 손실을 쓰는 선형 회귀
- **B.** MSE 손실을 쓰는 다층 퍼셉트론(MLP)
- **C.** MSE 손실을 쓰는 MLP 는 보장되지 않는다 (손실이 볼록하지 않다).
- **D.** 이진 교차엔트로피 손실을 쓰는 로지스틱 회귀

**정답: A, C, D**

**해설** — 선형 회귀 + MSE 는 볼록 → 보장 (A 참). 로지스틱 회귀 + BCE 도 볼록 → 보장 (D 참). MLP + MSE 는 비볼록이라 지역 최솟값이 생길 수 있어 보장되지 않는다 (B 거짓, C 참). ⚠️ 함정: B — "보장된다" → "보장되지 않는다"이면 참.

<details><summary>English</summary>

**Q.** Given a small enough step size, are we guaranteed to (approximately) find the globally optimal parameters by gradient descent?

- **A.** Yes, for linear regression with the MSE loss.
- **B.** Yes, for a Multi-Layer Perceptron with the MSE loss.
- **C.** No, for a Multi-Layer Perceptron with the MSE loss (the loss is not convex).
- **D.** Yes, for logistic regression with the binary cross-entropy loss.

**Answer: A, C, D**

**Explanation** — Linear regression + MSE is convex, so it is guaranteed (A true). Logistic regression + BCE is convex too (D true). An MLP + MSE is non-convex, so local minima may appear and there is no guarantee (B false, C true). ⚠️ Trap: B — "Yes, ... guaranteed" → "No, not guaranteed" would make it TRUE.

</details>

---

## D-23 · MSE 손실 J(Θ) = 1/(2m) Σ (ŷ − y)² 의 구성요소 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** J(Θ) = 1/(2m) Σⱼ₌₁ᵐ (ŷ⁽ʲ⁾ − y⁽ʲ⁾)² 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 회귀 과제에 더 적합하다.
- **B.** 분류 과제에 더 적합하다.
- **C.** 변수 j 는 훈련 예제의 인덱스다.
- **D.** m 은 훈련 예제의 개수다.
- **E.** J(Θ) 는 스칼라다.
- **F.** J(Θ) 는 m개 원소를 갖는 벡터다.

**정답: A, C, D, E**

**해설** — 제곱오차 평균이므로 회귀용 (A 참, B 거짓). j 는 예제 인덱스 (C 참), m 은 예제 수 (D 참). 모든 예제를 합쳐 하나의 수로 만들므로 J 는 스칼라 (E 참, F 거짓). ⚠️ 함정: B — "분류" → "회귀"이면 참. ⚠️ 함정: F — "벡터" → "스칼라"이면 참.

<details><summary>English</summary>

**Q.** Consider J(Θ) = 1/(2m) Σⱼ₌₁ᵐ (ŷ⁽ʲ⁾ − y⁽ʲ⁾)². Which statements are true?

- **A.** It is more suitable for a regression task.
- **B.** It is more suitable for a classification task.
- **C.** The variable j indexes the training examples.
- **D.** m is the number of training examples.
- **E.** J(Θ) is a scalar.
- **F.** J(Θ) is a vector with m elements.

**Answer: A, C, D, E**

**Explanation** — It is a mean squared error, so it is for regression (A true, B false). j indexes the examples (C true) and m is their number (D true). Everything is reduced to one number, so J is a scalar (E true, F false). ⚠️ Trap: B — "classification" → "regression" would make it TRUE. ⚠️ Trap: F — "a vector" → "a scalar" would make it TRUE.

</details>

---

# Lecture 3 — 다변량 회귀 · 로지스틱 회귀 · 특징 스케일링 (40문항)

## L3-01 · 다변량 선형 회귀의 차원(Shape) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 환자 20명의 특징 3개(체중, 나이, 혈압)로 콜레스테롤 수치를 예측하는 선형 회귀 모델 ŷ = Xθ 를 만들려고 한다. 편향 항 x0 = 1 을 포함할 때, 옳은 것을 모두 고르시오.

- **A.** 입력 행렬 X의 shape은 (20, 4)이다.
- **B.** 파라미터 벡터 θ의 shape은 (4, 1)이며, θ0는 편향(절편) 파라미터다.
- **C.** 추정값 ŷ = Xθ 의 shape은 (4, 1)이다.
- **D.** ŷ의 값의 범위에는 제한이 없으며 임의의 실수가 될 수 있다.
- **E.** 환자의 특징 값들은 θ 벡터 안에 저장된다.

**정답: A, B, D**

**해설** — 특징 3개 + 편향 1개 = 4열이므로 X는 (20, 4) (A 참). θ는 (4, 1), θ0는 편향 (B 참). ŷ은 훈련 예시마다 1개이므로 (20, 1)이다 (C 거짓). 선형 결합이므로 값 범위는 실수 전체 (D 참). 특징 값은 X(데이터)에 있고 θ에는 파라미터만 있다 (E 거짓). ⚠️ 함정: E — "특징 값들은 θ에 저장된다" → "X에 저장된다"이면 참.

<details><summary>English</summary>

**Q.** We want to predict the cholesterol level of 20 patients from three features (weight, age, blood pressure) using y_hat = X\*theta. Including the bias term x0 = 1, which statements are true?

- **A.** The shape of the input matrix X is (20, 4).
- **B.** The shape of the parameter vector theta is (4, 1), and theta0 is the bias (intercept) parameter.
- **C.** The shape of the estimate y_hat = X\*theta is (4, 1).
- **D.** The value of y_hat has no restriction: it can be any real number.
- **E.** The feature values of the patients are stored inside the theta vector.

**Answer: A, B, D**

**Explanation** — 3 features plus the bias column give 4 columns, so X is (20, 4) (A true). theta is (4, 1) (B true). y_hat has one value per example, so (20, 1) (C false). A linear combination can be any real number (D true). Features live in X, parameters in theta (E false). ⚠️ Trap: E — "stored in theta" → "stored in X" would make it TRUE.

</details>

---

## L3-02 · 다변량 선형 회귀와 벡터/행렬 표기 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 다변량 선형 회귀(multivariate linear regression)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 입력 변수가 n개일 때 학습해야 하는 파라미터는 편향을 포함해 n+1개다.
- **B.** 입력 변수가 1개면 가설함수는 2차원 평면 위의 직선으로 표현된다.
- **C.** 입력 변수가 2개면 3차원 공간에서 가설함수는 평면(plane)으로 표현된다.
- **D.** 입력 변수가 n개면 가설함수는 n+1차원 공간의 n차원 초평면(hyperplane)으로 표현된다.
- **E.** 추정 레이블은 입력 변수 벡터와 파라미터 벡터의 내적(dot product)으로 계산할 수 있다.

**정답: A, B, C, D, E**

**해설** — n개 특징 → n+1개 파라미터(편향 포함) (A 참). 1변수 → 직선, 2변수 → 평면, n변수 → n+1차원 공간의 n차원 초평면 (B, C, D 참). ŷ = x·θ (내적) (E 참). (참고: 입력 변수 수 + 레이블 변수 수가 3을 넘으면 시각화할 수 없다.)

<details><summary>English</summary>

**Q.** Which of the following statements about multivariate linear regression are true?

- **A.** With n input variables the number of parameters to learn is n+1, including the bias.
- **B.** With one input variable the hypothesis function is a straight line in the 2D plane.
- **C.** With two input variables the hypothesis function is a plane in 3D space.
- **D.** With n input variables the hypothesis function is an n-dimensional hyperplane in an (n+1)-dimensional space.
- **E.** The estimated label can be computed as the dot product of the input vector and the parameter vector.

**Answer: A, B, C, D, E**

**Explanation** — n features give n+1 parameters (A true). One variable: line, two: plane, n: hyperplane (B, C, D true). y_hat = dot(x, theta) (E true).

</details>

---

## L3-03 · 특징 스케일링의 필요성 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 특징 스케일링(feature scaling)의 필요성에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 특징 스케일링의 목적은 입력 변수들을 같은 크기(order of magnitude)로 맞추는 것이다.
- **B.** 입력 변수들의 크기가 크게 다르면 손실함수가 극도로 길쭉한(elongated) 형태가 되어 수렴이 매우 느려질 수 있다.
- **C.** 특징 스케일링을 하면 경사하강법이 손실면에서 더 효율적으로 이동할 수 있다.
- **D.** min-max 스케일링은 표준화(standardization)보다 이상치(outlier)에 더 민감하다.
- **E.** 특징 스케일링은 모든 변수에 동일한 변환을 한꺼번에 적용해야 한다.

**정답: A, B, C, D**

**해설** — 같은 크기로 맞추는 것이 목적 (A 참). 스케일 차이가 크면 손실면이 길쭉해져 수렴이 느려진다 (B, C 참). min-max는 최소/최대에 영향받으므로 이상치에 더 민감 → 표준화가 더 강건 (D 참). 스케일링은 각 변수마다 독립적으로 수행한다 (E 거짓). ⚠️ 함정: E — "모든 변수에 동일한 변환을 한꺼번에" → "변수마다 다른 변환"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the necessity of feature scaling are true?

- **A.** The purpose of feature scaling is to bring the input variables to the same order of magnitude.
- **B.** If the input variables differ greatly in magnitude, the loss function becomes extremely elongated and convergence can become very slow.
- **C.** Feature scaling allows gradient descent to move more efficiently on the loss surface.
- **D.** Min-max scaling is more sensitive to outliers than standardization.
- **E.** Feature scaling must be applied with the same transformation to all variables at once.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true (min-max depends on min and max, so outliers hurt it more). E false: each variable is scaled independently. ⚠️ Trap: E — "the same transformation for all variables" → "a different one per variable" would make it TRUE.

</details>

---

## L3-04 · 특징 스케일링 공식과 기호 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 특징 스케일링 기법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** min-max 스케일링 (x − min) / (max − min) 은 데이터를 [0, 1] 구간으로 변환한다.
- **B.** 표준화 (x − μ) / σ 는 데이터를 평균 0, 표준편차 1로 변환한다.
- **C.** 표준화 공식에서 μ는 해당 변수의 평균, σ는 해당 변수의 표준편차다.
- **D.** 스케일링은 각 입력 변수에 대해 개별적으로(독립적으로) 수행한다.
- **E.** 표준화는 데이터를 반드시 [0, 1] 구간으로 변환한다.

**정답: A, B, C, D**

**해설** — min-max → [0,1] (A 참). 표준화 → 평균 0, 표준편차 1 (B 참). μ = 평균, σ = 표준편차 (C 참). 각 변수마다 독립적으로 수행 (D 참). 표준화 결과는 [0,1]로 제한되지 않는다(음수/1 초과 가능) (E 거짓). ⚠️ 함정: E — "반드시 [0, 1] 구간으로 변환" → "범위 제한이 없다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about feature scaling techniques are true?

- **A.** Min-max scaling (x - min) / (max - min) maps the data to the [0, 1] interval.
- **B.** Standardization (x - mu) / sigma transforms the data to mean 0 and standard deviation 1.
- **C.** In the standardization formula mu is the mean of the variable and sigma is its standard deviation.
- **D.** Scaling is performed for each input variable independently.
- **E.** Standardization always maps the data to the [0, 1] interval.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: standardized values are not restricted to [0, 1]. ⚠️ Trap: E — "always maps to [0, 1]" → "is not limited to [0, 1]" would make it TRUE.

</details>

---

## L3-05 · 로지스틱 회귀와 시그모이드 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 로지스틱 회귀(logistic regression)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 시그모이드 함수는 입력을 0과 1 사이의 값으로 매핑한다.
- **B.** 로지스틱 회귀의 가설함수는 시그모이드와 선형 회귀의 합성(composition)이다.
- **C.** 로지스틱 회귀는 확률을 추정하므로 임의의 회귀 문제(예: 나이 추정)에 그대로 사용할 수 있다.
- **D.** 결정경계(decision boundary)는 가설함수의 출력이 0.5가 되는 입력들의 집합이다.
- **E.** 선형 회귀는 이상치에 민감하여 분류 과제에 사용하면 결정경계가 크게 흔들릴 수 있다.

**정답: A, B, D, E**

**해설** — 시그모이드는 (0,1)로 매핑 → 확률 추정에 적합 (A 참). 로지스틱 회귀 = 시그모이드 ∘ 선형 회귀 (B 참). 출력이 0~1로 제한되므로 임의의 회귀 문제에는 쓸 수 없다 (C 거짓). 결정경계 = h(x)=0.5가 되는 입력 집합 (D 참). 선형 회귀는 이상치에 민감해 방사선 예시에서 데이터 1개 추가로 결정경계가 크게 이동했다 (E 참). ⚠️ 함정: C — "임의의 회귀 문제에 그대로 쓸 수 있다" → "0~1 제한 때문에 쓸 수 없다"이면 참.

> 티어 근거: Sigmoid and logistic regression

<details><summary>English</summary>

**Q.** Which of the following statements about logistic regression are true?

- **A.** The sigmoid function maps its input to a value between 0 and 1.
- **B.** The hypothesis function of logistic regression is the composition of the sigmoid and linear regression.
- **C.** Since the output of logistic regression is limited to 0-1, it can be used directly for arbitrary regression problems such as age estimation.
- **D.** The decision boundary is the set of inputs for which the output of the hypothesis function is exactly 0.5.
- **E.** Linear regression is very sensitive to outliers, so the decision boundary can shift a lot when it is used for a classification task.

**Answer: A, B, D, E**

**Explanation** — A true. B true. C false: the output is restricted, so it cannot solve arbitrary regression problems. D true. E true (the radiation example). ⚠️ Trap: C — "can be used for arbitrary regression" → "cannot, because the output is limited to 0-1" would make it TRUE.

</details>

---

## L3-06 · 로지스틱 회귀의 손실함수(BCE) · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 로지스틱 회귀의 손실함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 로지스틱 회귀에 MSE 손실을 사용하면 시그모이드가 볼록하지 않아 국소 최소점이 생길 수 있다.
- **B.** 로지스틱 손실(이진 교차엔트로피, BCE)은 볼록하므로 경사하강법으로 전역 최적해를 찾을 수 있다.
- **C.** BCE의 결합형에서 참 레이블 y = 1 인 경우 두 번째 항이 0이 된다.
- **D.** BCE의 결합형에서 참 레이블 y = 0 인 경우 첫 번째 항이 0이 된다.
- **E.** BCE 손실함수의 값 J는 각 훈련 예시마다 하나의 원소를 갖는 벡터다.

**정답: A, B, C, D**

**해설** — MSE를 쓰면 시그모이드가 비볼록 → 국소 최소점 (A 참). BCE는 볼록(2계도함수 항상 양수) (B 참). y=1이면 두 번째 항이, y=0이면 첫 번째 항이 0이 된다 (C, D 참). 손실은 항상 스칼라 (E 거짓). ⚠️ 함정: E — "벡터" → "스칼라"이면 참.

> 티어 근거: MSE is not convex for logistic regression → BCE

<details><summary>English</summary>

**Q.** Which of the following statements about the loss function of logistic regression are true?

- **A.** If MSE is used for logistic regression, the sigmoid is not convex and local minima can appear.
- **B.** The logistic loss (binary cross-entropy, BCE) is convex, so gradient descent finds the global optimum.
- **C.** In the combined form of BCE, the second term is zero when the true label is y = 1.
- **D.** In the combined form of BCE, the first term is zero when the true label is y = 0.
- **E.** The value of the BCE loss J is a vector with one element per training example.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the loss is always a scalar. ⚠️ Trap: E — "a vector" → "a scalar" would make it TRUE.

</details>

---

## L3-07 · 로지스틱 회귀의 차원과 학습 대상 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 혈액 검사 결과 2개(특징 2개)로 질병 유무(0/1)를 예측하는 로지스틱 회귀를 100명의 환자 데이터로 학습할 때, 옳은 것을 모두 고르시오.

- **A.** 학습해야 하는 전체 파라미터(가중치 + 편향)의 개수는 3개다.
- **B.** 입력 행렬 X의 shape은 (100, 3)이다.
- **C.** 시그모이드를 통과한 출력 g(Xθ)의 값 범위는 [0, 1]이고, 통과하기 전 Xθ의 값 범위는 실수 전체다.
- **D.** 학습 과정에서 최소화하는 대상은 시그모이드 함수 g 자체다.
- **E.** 학습 과정에서 최소화하는 대상은 손실함수 J이며, X와 y는 상수로 취급한다.

**정답: A, B, C, E**

**해설** — 특징 2개 + 편향 = 3개 파라미터 (A 참). X는 (100, 3) (B 참). Xθ는 실수 전체, g(Xθ)는 [0,1] (C 참). 최소화 대상은 손실 J이며 g나 X를 최소화하는 것이 아니다 (D 거짓, E 참). ⚠️ 함정: D — "시그모이드 함수 g 자체" → "파라미터 θ"이면 참.

<details><summary>English</summary>

**Q.** We train a logistic regression on 100 patients using two blood test values (2 features) to predict whether they have a disease (0/1). Which statements are true?

- **A.** The total number of parameters (weights + bias) is 3.
- **B.** The shape of the input matrix X is (100, 3).
- **C.** The output of the sigmoid g(X\*theta) is in [0, 1], while X\*theta itself can be any real number.
- **D.** During learning the quantity that is minimized is the sigmoid function g itself.
- **E.** During learning the quantity that is minimized is the loss function J, while X and y are treated as constants.

**Answer: A, B, C, E**

**Explanation** — 2 features plus bias give 3 parameters (A true). X is (100, 3) (B true). X\*theta is unbounded, g(X\*theta) is in [0, 1] (C true). The minimized quantity is the loss J (D false, E true). ⚠️ Trap: D — "the sigmoid function g itself" → "the parameters theta" would make it TRUE.

</details>

---

## L3-08 · 결정경계의 기하학적 형태 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 로지스틱 회귀의 결정경계(decision boundary)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 시그모이드 함수는 g(0) = 0.5 이므로, z = W·x + b = 0 인 지점이 결정경계가 된다.
- **B.** 입력 변수가 1개일 때 결정경계는 x축 위의 한 점(또는 몇 개의 점)으로 나타난다.
- **C.** 입력 변수가 2개일 때 결정경계는 입력 평면 위의 직선(또는 곡선)으로 나타난다.
- **D.** 입력 변수가 N개일 때 결정경계는 N−1차원 초평면으로 N차원 입력공간을 분할한다.
- **E.** 결정경계는 가설함수의 출력이 최대가 되는 입력들의 집합이다.

**정답: A, B, C, D**

**해설** — g(0)=0.5 → z=0이 결정경계 (A 참). 1변수 → 점, 2변수 → 직선/곡선, N변수 → N−1차원 초평면 (B, C, D 참). 결정경계는 h(x)=0.5가 되는 집합이며 출력이 최대인 집합이 아니다 (E 거짓). ⚠️ 함정: E — "출력이 최대가 되는 입력들의 집합" → "g(z) = 0.5 가 되는 지점"이면 참.

> 티어 근거: Decision boundary (h = 0.5)

<details><summary>English</summary>

**Q.** Which of the following statements about the decision boundary of logistic regression are true?

- **A.** Since the sigmoid satisfies g(0) = 0.5, the decision boundary is where z = W\*x + b = 0.
- **B.** With one input variable the decision boundary appears as a single point (or a few points) on the x axis.
- **C.** With two input variables the decision boundary appears as a line (or a curve) in the input plane.
- **D.** With N input variables the decision boundary is an (N-1)-dimensional hyperplane that partitions the N-dimensional input space.
- **E.** The decision boundary is the set of inputs for which the output of the hypothesis function is maximal.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: it is the set where h(x) = 0.5. ⚠️ Trap: E — "where the output is maximal" → "where g(z) = 0.5" would make it TRUE.

</details>

---

## L3-09 · 분류를 선형 회귀로 풀 때의 문제 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 분류 과제를 선형 회귀로 해결하려 할 때의 문제점에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 범주에 숫자를 부여하면(예: 개=1, 고양이=2) 범주 사이에 존재하지 않는 순서 관계를 가정하게 된다.
- **B.** 여러 범주에 숫자를 부여하면 '½마리 개 + ½마리 앵무새 = 1마리 고양이'와 같은 무의미한 해석이 가능해진다.
- **C.** 선형 회귀는 이상치에 매우 민감하므로, 새 데이터 1개가 추가되어도 결정경계가 크게 이동할 수 있다.
- **D.** 선형 회귀의 출력은 확률이 아니며 [0,1] 범위로 제한되지 않는다.
- **E.** 분류에서는 각 범주에 속할 확률을 추정하는 것이 자연스러운 접근이다.

**정답: A, B, C, D, E**

**해설** — 범주에 숫자를 매기면 순서 관계를 잘못 가정 (A 참). 중간값의 무의미한 해석 (B 참). 이상치에 민감해 결정경계가 흔들림 (C 참). 출력이 확률이 아니고 범위 제한도 없다 (D 참). 그래서 확률 추정(로지스틱 회귀)이 자연스럽다 (E 참).

> 티어 근거: Classification with linear regression: ordering problem + outlier counterexample

<details><summary>English</summary>

**Q.** Which of the following statements about the problems of using linear regression for a classification task are true?

- **A.** Assigning numbers to categories (e.g. dog = 1, cat = 2) assumes an ordering between the categories that does not exist.
- **B.** With several categories assigned to numbers, meaningless interpretations such as "half a dog plus half a parrot equals one cat" become possible.
- **C.** Linear regression is very sensitive to outliers, so a single new data point can shift the decision boundary a lot.
- **D.** The output of linear regression is not a probability and is not restricted to the [0, 1] interval.
- **E.** In classification it is natural to estimate the probability of belonging to each category.

**Answer: A, B, C, D, E**

**Explanation** — A true. B true. C true. D true. E true: this is why logistic regression estimates probabilities.

</details>

---

## L3-10 · 로지스틱 회귀의 그래디언트 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 로지스틱 회귀의 경사하강법 구현(그래디언트 계산)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 그래디언트는 Xᵀ(h − y) 형태로 계산할 수 있으며, 여기서 h는 추정 확률 벡터다.
- **B.** 그래디언트를 훈련 예시 수로 나누어 평균 그래디언트를 사용한다.
- **C.** 파라미터 갱신은 θ ← θ − α·(그래디언트) 형태로 수행한다.
- **D.** 로지스틱 회귀의 가설함수는 선형이 아니지만, 그래디언트는 선형 회귀와 유사한 형태로 정리된다.
- **E.** 로지스틱 회귀에서는 그래디언트를 계산할 필요가 없으며 파라미터를 직접 해석적으로 구한다.

**정답: A, B, C, D**

**해설** — gradient = Xᵀ(h−y)/m 형태 (A, B 참). θ ← θ − α·gradient (C 참). 시그모이드 합성 덕분에 그래디언트가 (h−y) 형태로 정리된다 (D 참). 로지스틱 회귀는 경사하강법으로 학습하며 그래디언트가 필요하다 (E 거짓).

> 출처 메모: 수식은 L3 s85-86; Xᵀ(h−y)/m 코드 형태는 ✗ 슬라이드(L4 s29)

<details><summary>English</summary>

**Q.** Which of the following statements about the gradient descent implementation of logistic regression are true?

- **A.** The gradient can be computed as X^T (h - y), where h is the vector of estimated probabilities.
- **B.** The gradient is divided by the number of training examples to obtain the mean gradient.
- **C.** The parameter update has the form theta <- theta - alpha \* gradient.
- **D.** Although the hypothesis function of logistic regression is not linear, the gradient can be rearranged into a form similar to linear regression.
- **E.** Logistic regression does not need gradients; the parameters are obtained directly in closed form.

**Answer: A, B, C, D**

**Explanation** — gradient = X^T (h - y) / m (A, B true). theta <- theta - alpha \* gradient (C true). Thanks to the sigmoid the gradient simplifies to the (h - y) form (D true). Logistic regression is trained by gradient descent, so E is false.

</details>

---

## L3-11 · 선형 회귀 vs 로지스틱 회귀 비교 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 선형 회귀와 로지스틱 회귀를 비교한 설명 중 옳은 것을 모두 고르시오.

- **A.** 선형 회귀의 출력 범위에는 제한이 없고, 로지스틱 회귀의 출력은 0과 1 사이로 제한된다.
- **B.** 선형 회귀는 회귀 과제에, 로지스틱 회귀는 (이진) 분류 과제에 사용한다.
- **C.** 선형 회귀에 MSE를 쓰면 볼록하지만, 로지스틱 회귀에 MSE를 쓰면 볼록하지 않다.
- **D.** 로지스틱 회귀에 BCE(로지스틱 손실)를 쓰면 볼록하므로 경사하강법으로 전역 최적해를 찾을 수 있다.
- **E.** 두 모델 모두 비지도학습 방법이다.

**정답: A, B, C, D**

**해설** — 출력 범위 차이 (A 참). 용도 차이 (B 참). 선형+MSE는 볼록, 로지스틱+MSE는 비볼록 (C 참). 로지스틱+BCE는 볼록 (D 참). 둘 다 지도학습 방법이다 (E 거짓). ⚠️ 함정: E — "비지도학습" → "지도학습"이면 참.

> 티어 근거: Linear vs logistic regression comparison

<details><summary>English</summary>

**Q.** Which of the following statements comparing linear regression and logistic regression are true?

- **A.** The output of linear regression is unbounded, while the output of logistic regression is restricted to between 0 and 1.
- **B.** Linear regression is used for regression tasks and logistic regression for (binary) classification tasks.
- **C.** Linear regression with MSE is convex, but logistic regression with MSE is not convex.
- **D.** Logistic regression with BCE is convex, so gradient descent can find the global optimum.
- **E.** Both models are unsupervised learning methods.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: both are supervised learning methods. ⚠️ Trap: E — "unsupervised" → "supervised" would make it TRUE.

</details>

---

## L3-12 · 다변량 로지스틱 회귀 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 다변량 로지스틱 회귀(multivariate logistic regression)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 입력 변수가 2개일 때 가설함수는 g(θ0 + θ1x1 + θ2x2) 형태다.
- **B.** 입력 변수가 2개일 때 결정경계는 입력 평면 위의 직선이다.
- **C.** 결정경계의 한쪽은 범주 0, 다른 쪽은 범주 1로 분류된다.
- **D.** 입력 변수가 N개일 때 결정경계는 N−1차원 초평면이다.
- **E.** 다변량 로지스틱 회귀에서는 결정경계가 항상 곡선 형태가 된다.

**정답: A, B, C, D**

**해설** — 2변수 가설함수 (A 참). 2변수 결정경계 = 직선 (B 참). 직선 양쪽이 각 범주 (C 참). N변수 → N−1차원 초평면 (D 참). 로지스틱 회귀는 선형 결정면을 학습하므로 (입력 특징 자체를 쓰면) 경계가 직선/초평면이다 (E 거짓). ⚠️ 함정: E — "항상 곡선" → "직선이 될 수도 있다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about multivariate logistic regression are true?

- **A.** With two input variables the hypothesis function has the form g(theta0 + theta1\*x1 + theta2\*x2).
- **B.** With two input variables the decision boundary is a straight line in the input plane.
- **C.** One side of the decision boundary is classified as category 0 and the other side as category 1.
- **D.** With N input variables the decision boundary is an (N-1)-dimensional hyperplane.
- **E.** In multivariate logistic regression the decision boundary is always a curve.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: with the raw features the boundary is a line / hyperplane. ⚠️ Trap: E — "always a curve" → "it can also be a straight line" would make it TRUE.

</details>

---

## L3-13 · 로지스틱 회귀 학습 결과의 해석 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 방사선 노출 시간으로 생존 여부를 예측하는 단변량 로지스틱 회귀를 학습했더니 결정경계가 x ≈ 1.9시간이 되었다. 이에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** h(x) < 0.5 이면 범주 0으로 추정한다.
- **B.** h(x) ≥ 0.5 이면 범주 1로 추정한다.
- **C.** x < 1.9 시간이면 범주 0, x ≥ 1.9 시간이면 범주 1로 추정한다.
- **D.** 결정경계 값 1.9시간은 h(x) = 0.5 가 되는 입력값이다.
- **E.** 로지스틱 회귀는 확률을 추정하므로 임계값 0.5를 사용할 필요가 없다.

**정답: A, B, C, D**

**해설** — 0.5를 임계값으로 범주를 결정 (A, B 참). 결정경계 1.9시간을 기준으로 분류 (C 참). 결정경계 = h(x)=0.5 지점 (D 참). 이진 분류에서는 확률을 0.5 기준으로 범주로 바꿔야 한다 (E 거짓). ⚠️ 함정: E — "임계값 0.5를 쓸 필요가 없다" → "0.5로 범주를 정한다"이면 참.

<details><summary>English</summary>

**Q.** A univariate logistic regression predicting survival from the radiation exposure time was trained and its decision boundary is at x ≈ 1.9 hours. Which statements are true?

- **A.** If h(x) < 0.5 we predict class 0.
- **B.** If h(x) ≥ 0.5 we predict class 1.
- **C.** If x < 1.9 hours we predict class 0, and if x ≥ 1.9 hours we predict class 1.
- **D.** The decision boundary value 1.9 hours is the input at which h(x) = 0.5.
- **E.** Since logistic regression estimates a probability, the threshold 0.5 does not have to be used.

**Answer: A, B, C, D**

**Explanation** — The class is decided with the 0.5 threshold (A, B true). Classification uses the boundary at 1.9 hours (C true). The decision boundary is where h(x) = 0.5 (D true). In binary classification the probability must be turned into a class using a threshold such as 0.5 (E false). ⚠️ Trap: E — "the threshold 0.5 does not have to be used" → "the class is decided with 0.5" would make it TRUE.

</details>

---

## L3-14 · 이진 분류에서의 확률 추정 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 이진 분류(binary classification)에서 확률을 추정하는 방식에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 가장 단순한 경우는 두 개의 범주를 다루는 이진 분류이며, 추정값은 연속적인 확률값이다.
- **B.** 추정 확률이 0.5보다 크면 양성 범주로, 작으면 음성 범주로 판정할 수 있다.
- **C.** 가설함수가 [0,1] 밖의 값을 출력하면, 0보다 작은 값은 0으로, 1보다 큰 값은 1로 간주하는 방법이 있다.
- **D.** 범주에 1, 2, 3 같은 숫자를 부여하고 회귀를 적용하는 방식은 범주 간 순서 관계를 잘못 가정하게 된다.
- **E.** 로지스틱 회귀는 두 범주에 대한 확률의 합이 반드시 1이 되도록 강제한다.

**정답: A, B, C, D**

**해설** — 이진 분류 = 추정값이 연속 확률 (A 참). 0.5 임계값 (B 참). 범위 밖 값은 0/1로 클리핑하는 접근 (C 참). 숫자 부여 방식의 문제 (D 참). 시그모이드 출력은 한 범주(양성)의 확률이며, 두 범주의 확률 합이 1이 되도록 '강제'하는 것은 소프트맥스(다중 클래스)의 역할이다 (E 거짓). ⚠️ 함정: E — "두 범주 확률의 합이 1이 되도록 강제한다" → "강제하지 않는다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the way probabilities are estimated in binary classification are true?

- **A.** The simplest case is binary classification with two categories, and the estimate is a continuous probability value.
- **B.** If the estimated probability is greater than 0.5 we can decide on the positive class, and if it is smaller, on the negative class.
- **C.** If the hypothesis function outputs a value outside [0, 1], one approach is to treat values below 0 as 0 and values above 1 as 1.
- **D.** Assigning numbers such as 1, 2, 3 to the categories and applying regression wrongly assumes an ordering between the categories.
- **E.** Logistic regression forces the probabilities of the two categories to sum to exactly 1.

**Answer: A, B, C, D**

**Explanation** — Binary classification gives a continuous probability estimate (A true). The 0.5 threshold (B true). Clipping out-of-range values to 0/1 is a known approach (C true). Assigning numbers to categories is problematic (D true). The sigmoid output is the probability of one (positive) class; forcing the two probabilities to sum to 1 is the job of softmax (multiclass) (E false). ⚠️ Trap: E — "forces the two probabilities to sum to 1" → "does not force it" would make it TRUE.

</details>

---

## L3-15 · 다변량 경사하강법 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 다변량 선형/로지스틱 회귀의 경사하강법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 1단계로 그래디언트 벡터를 계산한다(각 파라미터에 대한 편미분).
- **B.** 2단계로 θ ← θ − α·(그래디언트) 로 파라미터를 갱신한다.
- **C.** 그래디언트 벡터는 현재 파라미터 위치에서 손실함수가 가장 많이 증가하는 방향을 가리킨다.
- **D.** 다변량 선형 회귀에서도 손실함수는 여전히 2차식이므로 볼록성이 유지된다.
- **E.** 파라미터가 여러 개가 되면 선형 회귀의 손실함수는 비볼록해진다.

**정답: A, B, C, D**

**해설** — 그래디언트 계산 → 갱신의 2단계 (A, B 참). 그래디언트 = 최대 증가 방향 (C 참). 다변량이어도 MSE는 2차식·볼록 (D 참). 파라미터 수가 늘어도 볼록성은 유지된다 (E 거짓). ⚠️ 함정: E — "비볼록해진다" → "볼록성이 유지된다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about gradient descent for multivariate linear / logistic regression are true?

- **A.** Step 1 computes the gradient vector (the partial derivatives with respect to each parameter).
- **B.** Step 2 updates the parameters as θ ← θ − α·(gradient).
- **C.** The gradient vector points in the direction in which the loss function increases the most at the current parameter values.
- **D.** In multivariate linear regression the loss is still a quadratic function, so convexity is preserved.
- **E.** Once there are several parameters, the loss function of linear regression becomes non-convex.

**Answer: A, B, C, D**

**Explanation** — The two steps are: compute the gradient, then update (A, B true). The gradient is the direction of steepest increase (C true). With more parameters MSE is still quadratic and convex (D true). Convexity is preserved no matter how many parameters there are (E false). ⚠️ Trap: E — "becomes non-convex" → "stays convex" would make it TRUE.

</details>

---

## L3-16 · 손실함수 선택 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 과제 유형과 손실함수의 짝에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 회귀 과제에는 MSE(최소제곱) 손실이 적합하다.
- **B.** 이진 분류 과제에는 로지스틱 손실(BCE)이 적합하다.
- **C.** 이진 분류에 MSE를 쓰면 비볼록 손실이 되어 국소 최소점 문제가 생길 수 있다.
- **D.** 로지스틱 손실은 볼록하기 때문에 경사하강법의 전역 최적 보장이 성립한다.
- **E.** 회귀 과제에는 교차엔트로피 손실을 사용하는 것이 표준이다.

**정답: A, B, C, D**

**해설** — 회귀 → MSE (A 참). 이진 분류 → BCE (B 참). 분류에 MSE는 비볼록 → 국소 최소점 (C 참). BCE는 볼록 → 전역 최적 보장 (D 참). 회귀에는 MSE를 쓰며 교차엔트로피는 분류용이다 (E 거짓). ⚠️ 함정: E — "회귀에는 교차엔트로피가 표준" → "MSE가 표준"이면 참.

> 출처 메모: 과제-손실 짝 (DOCX: "what loss function should we use?")

<details><summary>English</summary>

**Q.** Which of the following statements about pairing a task type with a loss function are true?

- **A.** The MSE (least squares) loss is suitable for regression tasks.
- **B.** The logistic loss (BCE) is suitable for binary classification tasks.
- **C.** Using MSE for binary classification gives a non-convex loss, which can cause local minima problems.
- **D.** Because the logistic loss is convex, gradient descent is guaranteed to reach the global optimum.
- **E.** Cross-entropy is the standard loss for regression tasks.

**Answer: A, B, C, D**

**Explanation** — Regression → MSE (A true). Binary classification → BCE (B true). MSE for classification is non-convex, so local minima may appear (C true). BCE is convex, so the global optimum is guaranteed (D true). Regression uses MSE; cross-entropy is for classification (E false). ⚠️ Trap: E — "cross-entropy is standard for regression" → "MSE is standard" would make it TRUE.

</details>

---

## L3-17 · 로지스틱 회귀의 정리와 주의점 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 로지스틱 회귀에 관한 정리와 주의점으로 옳은 것을 모두 고르시오.

- **A.** 로지스틱 회귀는 이진 분류를 수행하는 데 사용할 수 있다.
- **B.** 로지스틱 회귀의 손실함수는 볼록하므로 경사하강법으로 전역 최적해를 찾을 수 있다.
- **C.** 로지스틱 회귀는 범주에 속할 확률(연속값)을 추정하지만, 출력이 0~1로 제한되므로 임의의 회귀 문제를 풀 수는 없다.
- **D.** 로지스틱 회귀의 출력값은 확률로 해석된다.
- **E.** 로지스틱 회귀는 출력이 임의의 실수가 될 수 있으므로 연속값 예측(예: 나이 추정)에도 적합하다.

**정답: A, B, C, D**

**해설** — 이진 분류에 사용 (A 참). 볼록 → 전역 최적 (B 참). 확률을 추정하지만 0~1로 제한되어 임의 회귀는 불가 (C 참). 출력은 확률로 해석 (D 참). 임의의 실수를 출력할 수 없으므로 일반 회귀에 부적합 (E 거짓). ⚠️ 함정: E — "출력이 임의의 실수 → 연속값 예측에 적합" → "0~1로 제한되어 부적합"이면 참.

> 티어 근거: "Don't get confused" slide: logistic regression cannot solve arbitrary regression

<details><summary>English</summary>

**Q.** Which of the following statements are correct summaries and caveats of logistic regression?

- **A.** Logistic regression can be used to perform binary classification.
- **B.** The loss function of logistic regression is convex, so gradient descent can find the global optimum.
- **C.** Logistic regression estimates the probability of belonging to a category (a continuous value), but since the output is limited to 0-1 it cannot solve arbitrary regression problems.
- **D.** The output of logistic regression is interpreted as a probability.
- **E.** Since the output of logistic regression can be an arbitrary real number, it is also suitable for continuous value prediction such as age estimation.

**Answer: A, B, C, D**

**Explanation** — It is used for binary classification (A true). Convex → global optimum (B true). It estimates a probability but is limited to 0-1, so general regression is impossible (C true). The output is a probability (D true). It cannot output an arbitrary real number, so it is unsuitable for general regression (E false). ⚠️ Trap: E — "can output any real number" → "limited to 0-1, so unsuitable" would make it TRUE.

</details>

---

## L3-18 · 단변량 로지스틱 회귀에서 θ와 z의 형태 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 특징이 2개인 로지스틱 회귀 가설함수 h = g(Xθ) 에서 z = Xθ 가 각 예시에 대해 스칼라 값을 갖는 형태를 생각하자. 이에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** θ는 여러 파라미터를 담은 벡터다.
- **B.** z = Xθ 는 각 훈련 예시마다 하나의 스칼라 값을 갖는다.
- **C.** g(z)의 값의 범위는 [0, 1]이다.
- **D.** z의 값의 범위에는 제한이 없다(실수 전체).
- **E.** 환자의 검사 결과 값들은 θ가 아니라 X에 들어간다.

**정답: A, B, C, D, E**

**해설** — θ는 파라미터 벡터(특징 수 + 1) (A 참). z는 예시별 스칼라 (B 참). g는 시그모이드이므로 [0,1] (C 참). z는 선형 결합이므로 실수 전체 (D 참). 데이터는 X, 파라미터는 θ (E 참).

<details><summary>English</summary>

**Q.** Consider a logistic regression hypothesis h = g(Xθ) with 2 features, where z = Xθ takes a scalar value for each example. Which statements are true?

- **A.** θ is a vector containing several parameters.
- **B.** z = Xθ takes a single scalar value for each training example.
- **C.** The range of the value of g(z) is [0, 1].
- **D.** The value of z has no restriction (it can be any real number).
- **E.** The patient's test result values go into X, not into θ.

**Answer: A, B, C, D, E**

**Explanation** — θ is the parameter vector (number of features + 1) (A true). z is a scalar per example (B true). g is the sigmoid, so its range is [0,1] (C true). z is a linear combination, so it can be any real number (D true). The data is in X and the parameters are in θ (E true).

</details>

---

## S1-03 · 다변량 선형 회귀의 차원(X, θ, y) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 환자의 체중·나이·키·성별로 콜레스테롤 수치를 예측하려 한다. 환자는 200명이고, 더미 변수 x₀ = 1 을 포함한 y = Xθ 표기를 쓸 때 옳은 것을 모두 고르시오.

- **A.** X 는 200×4 이다.
- **B.** X 는 200×5 이다.
- **C.** θ 는 5개 원소를 갖는다.
- **D.** y 는 200개 원소(200×1)를 갖는다.
- **E.** 콜레스테롤 값은 X 나 θ 가 아니라 y 에 들어 있다.

**정답: B, C, D, E**

**해설** — 더미 변수 x₀ = 1 을 포함하면 X 는 m×(n+1) = 200×5 (A 거짓, B 참). θ 도 (n+1) = 5개 원소 (C 참). 레이블 y 는 예제마다 하나씩 200개 (D 참). 정답 레이블(콜레스테롤)은 y 에 있고, X 에는 입력 특징, θ 에는 가중치가 있다 (E 참).

<details><summary>English</summary>

**Q.** Task: predict cholesterol from weight, age, height and sex. There are 200 patients. Using y = Xθ with the dummy variable x₀ = 1, which statements are true?

- **A.** X is 200×4.
- **B.** X is 200×5.
- **C.** θ has 5 elements.
- **D.** y has 200 elements (200×1).
- **E.** The cholesterol values are in y, not in X or θ.

**Answer: B, C, D, E**

**Explanation** — With the dummy variable, X is m×(n+1) = 200×5 (A false, B true). θ has n+1 = 5 elements (C true). There is one label per example, so y has 200 elements (D true). The labels live in y; X holds the inputs and θ the parameters (E true).

</details>

---

## S1-04 · 선형 회귀 선택과 손실·최적화 대상 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 같은 문제(200명 환자의 콜레스테롤 예측)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 로지스틱 회귀보다 선형 회귀가 더 적절하다.
- **B.** MSE 가 적절한 손실함수다.
- **C.** 학습은 θ 에 대해 J 를 최소화하는 것이다.
- **D.** 학습은 X 를 최소화하는 것이다.
- **E.** 환자의 나이 값은 θ 에 저장된다.

**정답: A, B, C**

**해설** — 콜레스테롤은 연속값이므로 회귀 문제 → 선형 회귀가 적절 (A 참). 연속 레이블에는 MSE (B 참). 최적화 대상은 파라미터 θ (C 참). X 는 주어진 데이터이므로 최소화 대상이 아니다 (D 거짓). 나이 같은 입력 특징은 X 에 있고 θ 에는 가중치가 있다 (E 거짓). ⚠️ 함정: D — "X 를 최소화" → "θ 에 대해 J 를 최소화"이면 참.

<details><summary>English</summary>

**Q.** Same task (predicting cholesterol for 200 patients). Which statements are true?

- **A.** Linear regression is a better choice than logistic regression.
- **B.** MSE is a suitable loss.
- **C.** We minimize J with respect to θ.
- **D.** We minimize X.
- **E.** The patients' ages are stored in θ.

**Answer: A, B, C**

**Explanation** — Cholesterol is continuous, so this is regression and linear regression fits (A true). MSE is the loss for continuous labels (B true). We optimize the parameters θ (C true). X is given data, not something we minimize (D false). Inputs such as age are in X; θ holds weights (E false). ⚠️ Trap: D — "minimize X" → "minimize J with respect to θ" would make it TRUE.

</details>

---

## S1-07 · 분류를 선형 회귀로 풀 때의 문제 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 분류 문제를 선형 회귀로 풀지 않는 이유로 옳은 것을 모두 고르시오.

- **A.** 선형 회귀는 이상치(outlier)에 민감하다.
- **B.** 멀리 떨어진 정답 데이터 하나가 결정경계를 크게 움직일 수 있다.
- **C.** 선형 회귀는 [0, 1] 밖의 값을 출력할 수 없다.
- **D.** 로지스틱 회귀는 대신 0과 1 사이의 확률을 출력한다.

**정답: A, B, D**

**해설** — 선형 회귀는 제곱오차를 쓰므로 이상치에 민감하다 (A 참). 멀리 떨어진 올바른 점 하나가 경계를 끌어당겨 결정경계가 흔들린다 (B 참). 선형 회귀는 오히려 [0,1] 밖의 값도 출력하며, 잘라내면 되므로 이것은 결정적 문제가 아니다 (C 거짓). 로지스틱 회귀는 시그모이드로 확률을 출력한다 (D 참). ⚠️ 함정: C — "출력할 수 없다" → "출력할 수 있다"이면 참.

<details><summary>English</summary>

**Q.** Why not use linear regression for classification?

- **A.** It is sensitive to outliers.
- **B.** A far-away correct point can move the decision boundary.
- **C.** It cannot output values outside [0, 1].
- **D.** Logistic regression instead outputs a probability between 0 and 1.

**Answer: A, B, D**

**Explanation** — Squared error makes linear regression sensitive to outliers (A true). One far-away correct point can drag the boundary (B true). Linear regression does output values outside [0,1], and clipping is possible, so C is not the real problem (C false). Logistic regression outputs a probability (D true). ⚠️ Trap: C — "cannot output" → "can output" would make it TRUE.

</details>

---

## S2-05 · BCE를 쓰는 이유(MSE의 비볼록성) · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 로지스틱 회귀에 MSE 대신 이진 교차엔트로피(BCE)를 쓰는 이유로 옳은 것을 모두 고르시오.

- **A.** 시그모이드 + 제곱오차는 볼록하지 않다.
- **B.** 이 경우 MSE 는 지역 최솟값을 여러 개 가질 수 있다.
- **C.** 로지스틱 가설함수와 BCE 조합은 볼록하다.
- **D.** y = 1 인데 ŷ → 0 이면 BCE 는 매우 커진다.
- **E.** BCE 는 미분이 불가능하다.

**정답: A, B, C, D**

**해설** — 시그모이드 + 제곱오차는 비볼록이다 (A 참). 비볼록이면 지역 최솟값이 생길 수 있다 (B 참). 시그모이드 + BCE 는 볼록이라 전역 최솟값으로 수렴한다 (C 참). −log(ŷ) 는 ŷ → 0 에서 발산하므로 잘못된 확신에 큰 벌점을 준다 (D 참). BCE 는 미분 가능하고 그래디언트가 깔끔하다 (E 거짓). ⚠️ 함정: E — "미분이 불가능" → "미분 가능"이면 참.

<details><summary>English</summary>

**Q.** Why do we use binary cross-entropy (BCE) and not MSE for logistic regression?

- **A.** Sigmoid + squared error is not convex.
- **B.** MSE here may have several local minima.
- **C.** BCE with the logistic hypothesis is convex.
- **D.** For y = 1 and ŷ → 0, BCE becomes very large.
- **E.** BCE is not differentiable.

**Answer: A, B, C, D**

**Explanation** — Sigmoid + squared error is non-convex (A true), so it can have local minima (B true). Sigmoid + BCE is convex (C true). −log(ŷ) diverges as ŷ → 0, heavily penalizing confident mistakes (D true). BCE is differentiable and convex for logistic regression (E false). ⚠️ Trap: E — "not differentiable" → "differentiable" would make it TRUE.

</details>

---

## S2-06 · 경사하강법 NumPy 구현의 차원 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 강의의 NumPy 코드 (h = sigmoid(np.dot(X, theta)), gradient = np.dot(X.T, (h - y)) / y.size, theta -= lr \* gradient, X 는 (m, n+1), y 와 h 는 (m,)) 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** gradient 의 shape 은 (n+1,) 이다.
- **B.** 마지막 줄은 경사하강법의 한 스텝이다.
- **C.** eps 는 log(0) 과 0으로 나누기를 피하기 위해 쓴다.
- **D.** X 를 전치하지 않고 np.dot(X, (h - y)) 로도 같은 결과가 나온다.
- **E.** 평균 손실은 스칼라다.

**정답: A, B, C, E**

**해설** — Xᵀ(m, n+1) · (h−y)(m,) → (n+1,) (A 참). θ 를 그래디언트 반대 방향으로 갱신하는 한 스텝 (B 참). eps 는 log(0) 과 0 나누기를 막는다 (C 참). (m, n+1)·(m,) 는 shape 이 맞지 않아 Xᵀ 가 반드시 필요하다 (D 거짓). 평균 손실은 하나의 수, 즉 스칼라 (E 참). ⚠️ 함정: D — "전치하지 않고" → "전치하면(X.T)"이면 참.

> 출처 메모: ✗ 슬라이드(L4 s29): 로지스틱 회귀 NumPy 그래디언트 코드

<details><summary>English</summary>

**Q.** NumPy code from the lecture: `h = sigmoid(np.dot(X, theta))`, `gradient = np.dot(X.T, (h - y)) / y.size`, `theta -= lr \* gradient`. X is (m, n+1), y and h are (m,).

- **A.** gradient has shape (n+1,).
- **B.** The last line is one step of gradient descent.
- **C.** `eps` avoids log(0) and division by zero.
- **D.** `np.dot(X, (h - y))` without transposing X would also work.
- **E.** The mean loss is a scalar.

**Answer: A, B, C, E**

**Explanation** — Xᵀ(m, n+1) · (h−y)(m,) → (n+1,) (A true). The last line is one gradient step (B true). eps avoids log(0) and division by zero (C true). (m, n+1)·(m,) is a shape mismatch, so Xᵀ is required (D false). The mean loss is a single number (E true). ⚠️ Trap: D — "without transposing X" → "with X.T" would make it TRUE.

</details>

---

## S2-07 · 특징 스케일링 수치 계산 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 특징값 [1, 2, 3, 10] (평균 4, 모표준편차 σ ≈ 3.54) 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** min-max 스케일링한 3 의 값은 약 0.22 이다.
- **B.** min-max 스케일링 후 네 값 중 셋이 0.23 미만이다.
- **C.** 평균은 4 이다.
- **D.** 표준화한 10 의 값은 약 1.70 이다.
- **E.** 표준화 값은 항상 [0, 1] 범위다.

**정답: A, B, C, D**

**해설** — (3−1)/(10−1) = 0.222 (A 참). 값은 0, 0.11, 0.22, 1 이므로 셋이 0.23 미만 (B 참). (1+2+3+10)/4 = 4 (C 참). (10−4)/3.54 ≈ 1.70 (D 참). 표준화 값은 범위 제한이 없어 음수나 1 초과도 가능하다 (E 거짓). ⚠️ 함정: E — "항상 [0, 1]" → "범위 제한이 없다"이면 참.

<details><summary>English</summary>

**Q.** Feature values: [1, 2, 3, 10]. (Use the population standard deviation σ ≈ 3.54 and mean 4.)

- **A.** Min-max scaling of the value 3 is about 0.22.
- **B.** After min-max scaling, three of the four values are below 0.23.
- **C.** The mean is 4.
- **D.** The standardized value of 10 is about 1.70.
- **E.** Standardized values are always in [0, 1].

**Answer: A, B, C, D**

**Explanation** — (3−1)/(10−1) = 0.222 (A true). The values become 0, 0.11, 0.22, 1, so three are below 0.23 (B true). (1+2+3+10)/4 = 4 (C true). (10−4)/3.54 ≈ 1.70 (D true). Standardized values are not limited to [0, 1] (E false). ⚠️ Trap: E — "always in [0, 1]" → "not limited to [0, 1]" would make it TRUE.

</details>

---

## M-01 · 가설함수의 입력·파라미터·기하학적 해석 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 환자의 체중·나이·키·성별로 콜레스테롤 수치를 예측한다. 가설함수가 y = θ₄x₄ + θ₃x₃ + θ₂x₂ + θ₁x₁ + θ₀ 이고 y 가 스칼라일 때 옳은 것을 모두 고르시오.

- **A.** θ₀ 는 스칼라다.
- **B.** 환자의 나이는 xᵢ 중 하나에 들어간다.
- **C.** 환자의 나이는 θᵢ 중 하나에 들어간다.
- **D.** y 는 임의의 실수값이 될 수 있다.
- **E.** 입력 변수가 2개(3D 그래프)이면 가설함수는 평면이다.
- **F.** 입력 변수가 1개(2D 그래프)이면 가설함수는 포물선이다.

**정답: A, B, D, E**

**해설** — θ₀ 는 편향 파라미터(스칼라)다 (A 참). 나이 같은 입력 특징은 x 에 들어간다 (B 참, C 거짓). 출력에 활성함수가 없으므로 y 는 임의의 실수값 (D 참). 입력 2개면 가설함수는 평면 (E 참). 입력 1개면 직선이며 포물선이 아니다 (F 거짓). ⚠️ 함정: F — "포물선" → "직선"이면 참.

<details><summary>English</summary>

**Q.** We want to predict the cholesterol level of patients from their weight, age, height, and sex. The hypothesis is y = θ₄x₄ + θ₃x₃ + θ₂x₂ + θ₁x₁ + θ₀, where y is a scalar. Which statements are true?

- **A.** θ₀ is a scalar.
- **B.** The age of a patient is assigned to one of the xᵢ values.
- **C.** The age of a patient is assigned to one of the θᵢ values.
- **D.** The value of y can be any real number.
- **E.** With 2 input variables (3D plot), the hypothesis function is a plane.
- **F.** With 1 input variable (2D plot), the hypothesis function is a parabola.

**Answer: A, B, D, E**

**Explanation** — θ₀ is the bias parameter (a scalar) (A true). Input features such as age live in x (B true, C false). With no output activation, y can be any real number (D true). Two inputs give a plane (E true). One input gives a line, not a parabola (F false). ⚠️ Trap: F — "a parabola" → "a straight line" would make it TRUE.

</details>

---

## M-03 · 로지스틱 회귀 설정(파라미터·차원·손실) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 검사값 3개로 병(ill)/건강(healthy)을 구분하려 한다. 훈련집합은 150명이고 각자 레이블이 있다. 더미 열 x₀ = 1 을 포함한 ŷ = g(Xθ) 로지스틱 회귀를 쓸 때 옳은 것을 모두 고르시오.

- **A.** 여기서는 선형 회귀보다 로지스틱 회귀가 더 적절하다.
- **B.** 모델의 파라미터는 4개다.
- **C.** X 는 150×4 다.
- **D.** 추정값 ŷ 는 0과 1 사이에 있다.
- **E.** 손실함수로 MSE 가 가장 좋은 선택이다.

**정답: A, B, C, D**

**해설** — 이진 분류에는 로지스틱 회귀 (A 참). 입력 3개 + 더미 → 파라미터 4개 (B 참). X = m×(n+1) = 150×4 (C 참). 시그모이드 출력은 (0,1) (D 참). 이진 분류의 손실은 이진 교차엔트로피이며 MSE 는 비볼록이 되어 부적합하다 (E 거짓).

<details><summary>English</summary>

**Q.** We want to distinguish ill from healthy persons using 3 laboratory values. The training set has 150 patients, and each has a label (ill or healthy). We use logistic regression ŷ = g(Xθ) with the dummy column x₀ = 1. Which statements are true?

- **A.** Logistic regression is more suitable than linear regression here.
- **B.** The model has 4 parameters.
- **C.** X is 150×4.
- **D.** The estimate ŷ is between 0 and 1.
- **E.** MSE is the best choice of loss function.

**Answer: A, B, C, D**

**Explanation** — Binary classification calls for logistic regression (A true). Three inputs plus the dummy give 4 parameters (B true). X is m×(n+1) = 150×4 (C true). The sigmoid output is in (0,1) (D true). The loss should be binary cross-entropy; MSE becomes non-convex here (E false).

</details>

---

## M-07 · 특징 스케일링의 목적과 성질 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 특징 스케일링(feature scaling)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 목적은 입력 변수들을 같은 크기(order of magnitude)로 맞추는 것이다.
- **B.** 하지 않으면 경사하강법의 수렴이 느려질 수 있다.
- **C.** min-max 스케일링이 표준화(standardization)보다 이상치에 더 강건하다.
- **D.** x′ = (x − μ)/σ 에서 μ 는 평균, σ 는 표준편차다.
- **E.** 표준화 값은 항상 [0, 1] 범위다.

**정답: A, B, D**

**해설** — 스케일링의 목적은 입력들의 크기를 맞추는 것 (A 참). 스케일 차이가 크면 손실 곡면이 길쭉해져 수렴이 느려진다 (B 참). min-max 는 최솟값·최댓값에 의존하므로 이상치에 더 \*\*민감\*\*하다 (C 거짓). x′ = (x − μ)/σ 에서 μ 는 평균, σ 는 표준편차 (D 참). 표준화 값은 제한이 없어 음수·1 초과도 가능하다 (E 거짓). ⚠️ 함정: C — "더 강건" → "더 민감"이면 참. ⚠️ 함정: E — "항상 [0, 1]" → "범위 제한이 없다"이면 참.

<details><summary>English</summary>

**Q.** Which statements about feature scaling are true?

- **A.** Its purpose is to bring the input variables to the same order of magnitude.
- **B.** Without it, gradient descent may converge more slowly.
- **C.** Min-max scaling is more robust to outliers than standardization.
- **D.** In x′ = (x − μ)/σ, μ is the mean and σ is the standard deviation.
- **E.** Standardized values are always in [0, 1].

**Answer: A, B, D**

**Explanation** — Scaling aligns the magnitudes of the inputs (A true). Very different scales make the loss surface elongated and slow down convergence (B true). Min-max scaling depends on the min/max, so it is MORE sensitive to outliers (C false). In x′ = (x − μ)/σ, μ is the mean and σ the standard deviation (D true). Standardized values are not limited to [0,1] (E false). ⚠️ Trap: C — "more robust" → "more sensitive" would make it TRUE. ⚠️ Trap: E — "always in [0, 1]" → "not limited to [0, 1]" would make it TRUE.

</details>

---

## M2-04 · 이진 교차엔트로피(BCE) 수치 계산 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 한 예시에 대한 이진 교차엔트로피 L = −[y·ln ŷ + (1 − y)·ln(1 − ŷ)] 에서 (ln 0.8 ≈ −0.22, ln 0.5 ≈ −0.69) 옳은 것을 모두 고르시오.

- **A.** y = 1, ŷ = 0.8 이면 L ≈ 0.22 다.
- **B.** y = 0, ŷ = 0.2 이면 L ≈ 0.22 다.
- **C.** y = 1, ŷ = 0.5 이면 L ≈ 0.69 다.
- **D.** y = 1 이고 ŷ → 0 이면 L → ∞ 다.
- **E.** y = 0 일 때는 y·ln ŷ 항만 의미가 있다.
- **F.** 로지스틱 회귀에서 BCE 손실은 볼록하다.

**정답: A, B, C, D, F**

**해설** — y = 1 이면 L = −ln ŷ = −ln 0.8 ≈ 0.22 (A 참). y = 0 이면 L = −ln(1 − ŷ) = −ln 0.8 ≈ 0.22 (B 참). y = 1, ŷ = 0.5 → 0.69 (C 참). ŷ → 0 이면 −ln ŷ → ∞ (D 참). y = 0 일 때 의미가 있는 것은 두 번째 항 (1−y)·ln(1−ŷ) 이다 (E 거짓). 시그모이드 + BCE 는 볼록 (F 참).

<details><summary>English</summary>

**Q.** Binary cross-entropy for one example: L = −[y·ln ŷ + (1 − y)·ln(1 − ŷ)]. (ln 0.8 ≈ −0.22, ln 0.5 ≈ −0.69.) Which statements are true?

- **A.** For y = 1 and ŷ = 0.8, L ≈ 0.22.
- **B.** For y = 0 and ŷ = 0.2, L ≈ 0.22.
- **C.** For y = 1 and ŷ = 0.5, L ≈ 0.69.
- **D.** For y = 1 and ŷ → 0, L → ∞.
- **E.** For y = 0, only the term y·ln ŷ matters.
- **F.** With logistic regression, the BCE loss is convex.

**Answer: A, B, C, D, F**

**Explanation** — With y = 1, L = −ln ŷ = −ln 0.8 ≈ 0.22 (A true). With y = 0, L = −ln(1 − ŷ) = −ln 0.8 ≈ 0.22 (B true). y = 1 and ŷ = 0.5 give 0.69 (C true). As ŷ → 0, −ln ŷ → ∞ (D true). For y = 0 the meaningful term is the second one, (1 − y)·ln(1 − ŷ) (E false). Sigmoid + BCE is convex (F true).

</details>

---

## D-09 · 콜레스테롤 예측 과제: 모델·파라미터·손실 선택 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 환자의 체중·나이·키·성별로 콜레스테롤 수치를 예측한다. 훈련집합은 200명이고 각자 4개 속성과 콜레스테롤 값이 있다. 옳은 것을 모두 고르시오.

- **A.** 선형 회귀가 로지스틱 회귀보다 더 적절하다.
- **B.** 선형 회귀를 쓰면 파라미터는 5개(가중치 4개 + 편향 1개)다.
- **C.** 선형 회귀를 쓰면 파라미터는 4개다.
- **D.** 적절한 손실함수는 MSE(최소제곱)다.
- **E.** 적절한 손실함수는 이진 교차엔트로피다.

**정답: A, B, D**

**해설** — 콜레스테롤은 연속값이므로 회귀 → 선형 회귀 (A 참). 4개 속성 + 편향 = 5개 파라미터 (B 참, C 거짓). 연속 레이블에는 MSE (D 참). 이진 교차엔트로피는 분류용 (E 거짓). ⚠️ 함정: C — "4개" → "5개(편향 포함)"이면 참. ⚠️ 함정: E — "이진 교차엔트로피" → "MSE"이면 참.

<details><summary>English</summary>

**Q.** We predict the cholesterol level of patients from weight, age, height, and sex. The training set has 200 patients, each with the 4 attributes plus the cholesterol value. Which statements are true?

- **A.** Linear regression is a more suitable choice than logistic regression.
- **B.** With linear regression, we have 5 parameters (4 weights + 1 bias).
- **C.** With linear regression, we have 4 parameters.
- **D.** A suitable loss function is MSE (least squares).
- **E.** A suitable loss function is binary cross-entropy.

**Answer: A, B, D**

**Explanation** — Cholesterol is continuous, so this is regression and linear regression fits (A true). 4 attributes + a bias give 5 parameters (B true, C false). A continuous label calls for MSE (D true). Binary cross-entropy is for classification (E false). ⚠️ Trap: C — "4 parameters" → "5 (4 weights + bias)" would make it TRUE. ⚠️ Trap: E — "binary cross-entropy" → "MSE" would make it TRUE.

</details>

---

## D-10 · y = Xθ 의 각 행렬 shape · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 가설이 y = Xθ 이고 X 는 모든 훈련 예시의 행렬(더미 열 x₀ = 1 포함)이다. 콜레스테롤 과제(200명, 속성 4개)에서 옳은 것을 모두 고르시오.

- **A.** X 의 shape 은 200×5 다.
- **B.** θ 의 shape 은 5×1 이다.
- **C.** y 의 shape 은 200×1 이다.
- **D.** y 의 값은 임의의 실수가 될 수 있다.
- **E.** 환자의 나이 값은 X 안에 있다.
- **F.** 환자의 나이 값은 θ 안에 있다.

**정답: A, B, C, D, E**

**해설** — X = m×(n+1) = 200×5 (A 참). θ = (n+1)×1 = 5×1 (B 참). y = m×1 = 200×1 (C 참). 출력에 활성함수가 없으므로 임의의 실수 (D 참). 나이는 입력 데이터이므로 X 에 있다 (E 참, F 거짓). ⚠️ 함정: F — "θ 안에 있다" → "X 안에 있다"이면 참.

<details><summary>English</summary>

**Q.** The hypothesis is y = Xθ, where X is a matrix of all training examples (with the dummy column x₀ = 1). For the cholesterol task (200 patients, 4 attributes), which statements are true?

- **A.** X has shape 200×5.
- **B.** θ has shape 5×1.
- **C.** y has shape 200×1.
- **D.** The values in y can be any real number.
- **E.** The age values of the patients are inside X.
- **F.** The age values of the patients are inside θ.

**Answer: A, B, C, D, E**

**Explanation** — X = m×(n+1) = 200×5 (A true). θ = (n+1)×1 = 5×1 (B true). y = m×1 = 200×1 (C true). With no output activation the values can be any real number (D true). Age is input data, so it lives in X (E true, F false). ⚠️ Trap: F — "inside θ" → "inside X" would make it TRUE.

</details>

---

## D-11 · 학습에서 최소화하는 대상 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 가설 y = Xθ (X 는 훈련 예시 행렬, 더미 열 x₀ = 1 포함) 로 학습할 때 옳은 것을 모두 고르시오.

- **A.** θ 에 대해 손실을 최소화한다.
- **B.** θ 를 바꾼다.
- **C.** X 를 최소화한다.
- **D.** y 를 최소화한다.

**정답: A, B**

**해설** — 학습은 θ 를 바꿔 손실 J 를 최소화한다 (A·B 참). X 와 y 는 주어진 데이터이므로 최소화 대상이 아니다 (C·D 거짓). ⚠️ 함정: C — "X를 최소화" → "손실 J를 최소화"이면 참. ⚠️ 함정: D — "y를 최소화" → "손실 J를 최소화"이면 참.

<details><summary>English</summary>

**Q.** With the hypothesis y = Xθ (X is the matrix of training examples, including the dummy column x₀ = 1), during learning:

- **A.** We want to minimize the loss with respect to θ.
- **B.** We want to change θ.
- **C.** We want to minimize X.
- **D.** We want to minimize y.

**Answer: A, B**

**Explanation** — Learning changes θ to minimize the loss J (A and B true). X and y are the given data, not something we minimize (C and D false). ⚠️ Trap: C — "minimize X" → "minimize the loss J" would make it TRUE. ⚠️ Trap: D — "minimize y" → "minimize the loss J" would make it TRUE.

</details>

---

## D-12 · 스칼라 가설 y = θ₄x₄ + … + θ₀ · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 가설이 y = θ₄x₄ + θ₃x₃ + θ₂x₂ + θ₁x₁ + θ₀ 이고 y 가 스칼라일 때 옳은 것을 모두 고르시오.

- **A.** θ₀ 는 스칼라다.
- **B.** θ₀ 는 벡터다.
- **C.** y 의 값은 임의의 실수가 될 수 있다.
- **D.** 환자의 나이 값은 xᵢ 중 하나에 들어간다.
- **E.** 환자의 나이 값은 θᵢ 중 하나에 들어간다.

**정답: A, C, D**

**해설** — θ₀ 는 편향 파라미터(스칼라) (A 참, B 거짓). 출력에 활성함수가 없으므로 y 는 임의의 실수 (C 참). 나이 같은 입력 특징은 x 에 들어간다 (D 참, E 거짓). ⚠️ 함정: B — "벡터" → "스칼라"이면 참. ⚠️ 함정: E — "θᵢ" → "xᵢ"이면 참.

<details><summary>English</summary>

**Q.** Here y is a scalar. Which statements are true?

- **A.** θ₀ is a scalar.
- **B.** θ₀ is a vector.
- **C.** The value of y can be any real number.
- **D.** The age value of a patient is assigned to one of the xᵢ values.
- **E.** The age value of a patient is assigned to one of the θᵢ values.

**Answer: A, C, D**

**Explanation** — θ₀ is the bias parameter, a scalar (A true, B false). With no output activation y can be any real number (C true). Input features such as age live in x (D true, E false). ⚠️ Trap: B — "a vector" → "a scalar" would make it TRUE. ⚠️ Trap: E — "the θᵢ values" → "the xᵢ values" would make it TRUE.

</details>

---

## D-13 · 선형 회귀 가설함수의 기하학적 해석 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 선형 회귀 가설함수의 기하학적 해석에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 입력 변수가 1개(2D 그래프)이면 직선이다.
- **B.** 입력 변수가 2개(3D 그래프)이면 평면이다.
- **C.** 입력 변수가 1개이면 포물선이다.
- **D.** 입력 변수가 2개이면 구(sphere)다.
- **E.** 입력 변수가 n개이면 (n+1)차원 공간의 초평면이다.

**정답: A, B, E**

**해설** — 입력 1개 → 직선 (A 참, C 거짓). 입력 2개 → 평면 (B 참, D 거짓). 입력 n개 → (n+1)차원 초평면 (E 참). ⚠️ 함정: C — "포물선" → "직선"이면 참. ⚠️ 함정: D — "구" → "평면"이면 참.

<details><summary>English</summary>

**Q.** Which statements are true about the hypothesis function of linear regression?

- **A.** With 1 input variable (2D plot with axes x, y), it is a line.
- **B.** With 2 input variables (3D plot with axes x₁, x₂, y), it is a plane.
- **C.** With 1 input variable, it is a parabola.
- **D.** With 2 input variables, it is a sphere.
- **E.** With n input variables, it is a hyperplane in (n+1)-dimensional space.

**Answer: A, B, E**

**Explanation** — One input gives a line (A true, C false). Two inputs give a plane (B true, D false). n inputs give a hyperplane in (n+1)-dimensional space (E true). ⚠️ Trap: C — "a parabola" → "a line" would make it TRUE. ⚠️ Trap: D — "a sphere" → "a plane" would make it TRUE.

</details>

---

## D-17 · 특징 스케일링의 목적과 효과 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 특징 스케일링(feature scaling)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 목적은 입력 변수들을 같은 크기로 맞추는 것이다.
- **B.** 하지 않으면 경사하강법의 수렴이 느려지기 쉽다.
- **C.** 하지 않으면 손실 등고선이 길쭉해질 수 있다.
- **D.** 표준화(standardization)가 min-max 스케일링보다 이상치에 더 강건하다.
- **E.** min-max 스케일링이 표준화보다 이상치에 더 강건하다.

**정답: A, B, C, D**

**해설** — 스케일링은 입력들의 크기를 맞춘다 (A 참). 스케일 차이가 크면 손실 곡면이 길쭉해져 수렴이 느려진다 (B·C 참). min-max 는 최솟값·최댓값에 의존하므로 이상치에 더 민감하고, 표준화가 더 강건하다 (D 참, E 거짓). ⚠️ 함정: E — "min-max가 더 강건" → "표준화가 더 강건"이면 참.

<details><summary>English</summary>

**Q.** Which statements about feature scaling are true?

- **A.** The purpose is to bring the input variables to the same order of magnitude.
- **B.** Without it, gradient descent is likely to converge more slowly.
- **C.** Without it, the loss contours can be elongated.
- **D.** Standardization is more robust to outliers than min-max scaling.
- **E.** Min-max scaling is more robust to outliers than standardization.

**Answer: A, B, C, D**

**Explanation** — Scaling aligns the magnitudes of the inputs (A true). Very different scales elongate the loss contours and slow convergence down (B and C true). Min-max depends on the min/max, so it is more sensitive to outliers and standardization is more robust (D true, E false). ⚠️ Trap: E — "min-max is more robust" → "standardization is more robust" would make it TRUE.

</details>

---

## D-18 · 특징 스케일링 공식의 기호 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 표준화 x′ = (x − μ)/σ, min-max 스케일링 x′ = (x − x_min)/(x_max − x_min) 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** μ 는 그 변수의 평균이다.
- **B.** σ 는 그 변수의 표준편차다.
- **C.** x′ 는 스케일링된 값이다.
- **D.** x_min 과 x_max 는 그 변수의 최솟값과 최댓값이다.
- **E.** 스케일링은 입력 변수마다 독립적으로 수행한다.
- **F.** min-max 스케일링 후에는 평균이 항상 0이 된다.

**정답: A, B, C, D, E**

**해설** — μ=평균, σ=표준편차, x′=변환된 값, x_min·x_max=최솟값·최댓값 (A, B, C, D 참). 스케일링은 변수별로 따로 한다 (E 참). min-max 후 값은 [0,1] 이지만 평균은 0이 아니다 (F 거짓). ⚠️ 함정: F — "평균이 0" → "평균은 0이 아니다"이면 참.

<details><summary>English</summary>

**Q.** Standardization: x′ = (x − μ)/σ. Min-max scaling: x′ = (x − x_min)/(x_max − x_min). Which statements are true?

- **A.** μ is the mean of the variable.
- **B.** σ is the standard deviation of the variable.
- **C.** x′ is the scaled value.
- **D.** x_min and x_max are the smallest and largest values of the variable.
- **E.** The scaling is done independently for each input variable.
- **F.** After min-max scaling, the mean is always 0.

**Answer: A, B, C, D, E**

**Explanation** — μ is the mean, σ the standard deviation, x′ the scaled value, and x_min/x_max the smallest and largest values (A, B, C, D true). Scaling is done per variable (E true). After min-max scaling the values are in [0,1] but the mean is not 0 (F false). ⚠️ Trap: F — "the mean is always 0" → "the mean is not 0" would make it TRUE.

</details>

---

## D-19 · 질병 분류 과제: 모델과 손실 선택 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 혈액 검사값 2개로 병이 있는 환자와 건강한 사람을 구분한다. 훈련집합은 100명이고 각자 2개 속성과 레이블(ill/healthy)이 있다. 옳은 것을 모두 고르시오.

- **A.** 선형 회귀보다 로지스틱 회귀가 더 적절하다.
- **B.** 로지스틱 회귀를 쓰면 파라미터는 3개(가중치 2개 + 편향 1개)다.
- **C.** 적절한 손실함수는 이진 교차엔트로피(로지스틱 손실)다.
- **D.** 적절한 손실함수는 회귀용 MSE 다.

**정답: A, B, C**

**해설** — 이진 분류에는 로지스틱 회귀 (A 참). 2개 속성 + 편향 = 3개 파라미터 (B 참). 이진 분류에는 BCE (C 참). MSE 는 회귀용이며 분류에 쓰면 비볼록이 된다 (D 거짓). ⚠️ 함정: D — "MSE" → "이진 교차엔트로피"이면 참.

<details><summary>English</summary>

**Q.** We distinguish patients with an illness from healthy persons using two laboratory blood test values. The training set has 100 patients, each with the 2 attributes plus a label (ill / healthy). Which statements are true?

- **A.** Logistic regression is a more suitable choice than linear regression.
- **B.** With logistic regression we have 3 parameters (2 weights + 1 bias).
- **C.** A suitable loss function is binary cross-entropy (logistic loss).
- **D.** A suitable loss function is MSE for regression.

**Answer: A, B, C**

**Explanation** — Binary classification calls for logistic regression (A true). 2 attributes + a bias give 3 parameters (B true). Binary classification uses BCE (C true). MSE is for regression and becomes non-convex for classification (D false). ⚠️ Trap: D — "MSE for regression" → "binary cross-entropy" would make it TRUE.

</details>

---

## D-20 · y = g(Xθ), g = 시그모이드의 shape과 범위 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 가설이 y = g(Xθ), g = 시그모이드 이고 질병 분류 과제(100명, 속성 2개, 더미 열 포함)일 때 옳은 것을 모두 고르시오.

- **A.** X 의 shape 은 100×3 이다.
- **B.** θ 의 shape 은 3×1 이다.
- **C.** y 의 shape 은 100×1 이다.
- **D.** y 의 값은 (0, 1) 범위에 있다.
- **E.** 검사값들은 X 안에 있다.
- **F.** 검사값들은 θ 안에 있다.

**정답: A, B, C, D, E**

**해설** — X = m×(n+1) = 100×3 (A 참). θ = 3×1 (B 참). y = 100×1 (C 참). 시그모이드 출력은 (0,1) (D 참). 검사값(입력 데이터)은 X 에 있다 (E 참, F 거짓). ⚠️ 함정: F — "θ 안에 있다" → "X 안에 있다"이면 참.

<details><summary>English</summary>

**Q.** The hypothesis is y = g(Xθ), g = sigmoid, for the ill/healthy task (100 patients, 2 attributes, with the dummy column). Which statements are true?

- **A.** X has shape 100×3.
- **B.** θ has shape 3×1.
- **C.** y has shape 100×1.
- **D.** The values in y are in the range (0, 1).
- **E.** The lab values are inside X.
- **F.** The lab values are inside θ.

**Answer: A, B, C, D, E**

**Explanation** — X = m×(n+1) = 100×3 (A true). θ is 3×1 (B true). y is 100×1 (C true). The sigmoid output is in (0,1) (D true). The lab values (input data) are in X (E true, F false). ⚠️ Trap: F — "inside θ" → "inside X" would make it TRUE.

</details>

---

## D-21 · y = g(Xθ) 학습에서 최소화하는 대상 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** y = g(Xθ) 로 학습할 때 옳은 것을 모두 고르시오.

- **A.** θ 에 대해 손실을 최소화한다.
- **B.** X 를 최소화한다.
- **C.** y 를 최소화한다.
- **D.** g 를 최소화한다.
- **E.** 최소화하는 대상은 손실함수 J 다.

**정답: A, E**

**해설** — 학습은 θ 를 바꿔 손실 J 를 최소화한다 (A·E 참). X·y 는 데이터이고 g 는 고정된 활성함수이므로 최소화 대상이 아니다 (B·C·D 거짓). ⚠️ 함정: B — "X를 최소화" → "θ에 대해 J를 최소화"이면 참. ⚠️ 함정: C — "y를 최소화" → "θ에 대해 J를 최소화"이면 참. ⚠️ 함정: D — "g를 최소화" → "g는 고정"이면 참.

<details><summary>English</summary>

**Q.** With the hypothesis y = g(Xθ) (g = sigmoid), during learning:

- **A.** We want to minimize the loss with respect to θ.
- **B.** We want to minimize X.
- **C.** We want to minimize y.
- **D.** We want to minimize g.
- **E.** What we minimize is the loss function J.

**Answer: A, E**

**Explanation** — Learning changes θ to minimize the loss J (A and E true). X and y are data and g is a fixed activation, so they are not minimized (B, C and D false). ⚠️ Trap: B — "minimize X" → "minimize J w.r.t. θ" would make it TRUE. ⚠️ Trap: C — "minimize y" → "minimize J w.r.t. θ" would make it TRUE. ⚠️ Trap: D — "minimize g" → "g is fixed" would make it TRUE.

</details>

---

## D-22 · 스칼라 시그모이드 가설의 성질 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 가설이 y = g(θ₂x₂ + θ₁x₁ + θ₀), g = 시그모이드 이고 y 가 스칼라일 때 옳은 것을 모두 고르시오.

- **A.** θ₀ 는 스칼라다.
- **B.** θ₀ 는 벡터다.
- **C.** y 의 범위는 (0, 1)이다.
- **D.** g(θ₂x₂ + θ₁x₁ + θ₀) 의 범위는 (0, 1)이다.
- **E.** 검사값들은 xᵢ 값에 대응된다.
- **F.** 검사값들은 θᵢ 값에 대응된다.

**정답: A, C, D, E**

**해설** — θ₀ 는 편향(스칼라) (A 참, B 거짓). 시그모이드 출력이므로 y 와 g(…) 의 범위는 (0,1) (C·D 참). 검사값은 입력 특징이므로 x 에 들어간다 (E 참, F 거짓). ⚠️ 함정: B — "벡터" → "스칼라"이면 참. ⚠️ 함정: F — "θᵢ" → "xᵢ"이면 참.

<details><summary>English</summary>

**Q.** The hypothesis is y = g(θ₂x₂ + θ₁x₁ + θ₀), g = sigmoid, and y is a scalar. Which statements are true?

- **A.** θ₀ is a scalar.
- **B.** θ₀ is a vector.
- **C.** The range of y is (0, 1).
- **D.** The range of g(θ₂x₂ + θ₁x₁ + θ₀) is (0, 1).
- **E.** The lab values are assigned to the xᵢ values.
- **F.** The lab values are assigned to the θᵢ values.

**Answer: A, C, D, E**

**Explanation** — θ₀ is the bias, a scalar (A true, B false). As a sigmoid output, both y and g(…) are in (0,1) (C and D true). The lab values are input features, so they go into x (E true, F false). ⚠️ Trap: B — "a vector" → "a scalar" would make it TRUE. ⚠️ Trap: F — "the θᵢ values" → "the xᵢ values" would make it TRUE.

</details>

---

## D-24 · 여러 손실함수의 용도 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 이진 교차엔트로피 J(Θ) = −(1/m) Σⱼ [ y⁽ʲ⁾ ln ŷ⁽ʲ⁾ + (1 − y⁽ʲ⁾) ln(1 − ŷ⁽ʲ⁾) ], 다중 출력 MSE J(Θ) = 1/(2mk) Σⱼ Σᵢ (ŷᵢ⁽ʲ⁾ − yᵢ⁽ʲ⁾)², 다중 클래스 교차엔트로피 J(Θ) = −(1/m) Σⱼ Σᵢ yᵢ⁽ʲ⁾ ln ŷᵢ⁽ʲ⁾ 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 이진 교차엔트로피는 분류용이다.
- **B.** 다중 출력 MSE 는 회귀용이다.
- **C.** 다중 클래스 교차엔트로피는 소프트맥스 출력과 one-hot 레이블과 함께 쓴다.
- **D.** 다중 출력 MSE 에서 k 는 레이블 벡터의 원소 개수다.
- **E.** 다중 클래스 교차엔트로피에서 i 는 클래스의 인덱스다.
- **F.** 세 손실 모두 J 의 값으로 벡터를 준다.

**정답: A, B, C, D, E**

**해설** — BCE 는 분류 (A 참). 다중 출력 MSE 는 회귀 (B 참). 다중 클래스 CE 는 소프트맥스 + one-hot (C 참). k = 레이블 벡터 원소 수 (D 참). i = 클래스 인덱스 (E 참). 세 손실 모두 스칼라를 준다 (F 거짓). ⚠️ 함정: F — "벡터" → "스칼라"이면 참.

> 출처 메모: BCE·CE 수식 자체는 강의 내용; DOCX가 "similar questions with other loss functions" 로 예고

<details><summary>English</summary>

**Q.** Binary cross-entropy J(Θ) = −(1/m) Σⱼ [ y⁽ʲ⁾ ln ŷ⁽ʲ⁾ + (1 − y⁽ʲ⁾) ln(1 − ŷ⁽ʲ⁾) ], multi-output MSE J(Θ) = 1/(2mk) Σⱼ Σᵢ (ŷᵢ⁽ʲ⁾ − yᵢ⁽ʲ⁾)², and multi-class cross-entropy J(Θ) = −(1/m) Σⱼ Σᵢ yᵢ⁽ʲ⁾ ln ŷᵢ⁽ʲ⁾. Which statements are true?

- **A.** Binary cross-entropy is for classification.
- **B.** Multi-output MSE is for regression.
- **C.** Multi-class cross-entropy is used with softmax outputs and one-hot labels.
- **D.** In the multi-output MSE, k is the number of elements of the label vector.
- **E.** In the multi-class cross-entropy, i indexes the classes.
- **F.** All three losses give a vector as the value of J.

**Answer: A, B, C, D, E**

**Explanation** — BCE is for classification (A true). Multi-output MSE is for regression (B true). Multi-class CE goes with softmax and one-hot labels (C true). k is the number of label elements (D true) and i indexes the classes (E true). All three give a scalar, so F is false. ⚠️ Trap: F — "a vector" → "a scalar" would make it TRUE.

</details>

---

# Lecture 4 — 과대/과소적합 · 정규화 · 검증 · 하이퍼파라미터 (46문항)

## L4-01 · 과소적합/과대적합의 진단 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 학습 곡선을 관찰한 과소적합(underfitting)과 과대적합(overfitting) 진단에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 훈련 손실과 테스트 손실이 둘 다 크고 서로 비슷한 상태는 과소적합의 전형이다.
- **B.** 훈련 손실은 계속 감소하지만 검증 손실이 증가하기 시작하는 것은 과대적합의 전형적 징후다.
- **C.** 훈련 예시 수를 줄이면 과대적합의 위험이 커진다.
- **D.** 테스트 예시 수를 줄이면 과대적합이 더 심해진다.
- **E.** 모델의 파라미터 수를 줄이면 과대적합이 완화되는 경향이 있다.

**정답: A, B, C, E**

**해설** — 둘 다 크고 비슷함 = high bias, low variance = 과소적합 (A 참). 훈련↓·검증↑ = low bias, high variance = 과대적합 (B 참). 훈련 데이터를 줄이면 과대적합이 더 심해진다 (C 참). 테스트 예시 수를 줄이는 것은 과대적합 자체를 심화시키지 않는다(성능 추정의 신뢰도만 낮아짐) (D 거짓). 파라미터 수 감소 → 완화 (E 참). ⚠️ 함정: D — "테스트 예제 수를 줄이면 과대적합이 심해진다" → "과대적합 자체는 변하지 않는다"이면 참.

> 출처 메모: A·B(손실 곡선 패턴)는 강의 슬라이드; C·D·E가 DOCX

<details><summary>English</summary>

**Q.** Which of the following statements about diagnosing underfitting and overfitting from the learning curves are true?

- **A.** When the training loss and the test loss are both large and similar to each other, that is typical of underfitting.
- **B.** When the training loss keeps decreasing but the validation loss starts to increase, that is a typical sign of overfitting.
- **C.** Reducing the number of training examples increases the risk of overfitting.
- **D.** Reducing the number of test examples makes overfitting more severe.
- **E.** Reducing the number of model parameters tends to mitigate overfitting.

**Answer: A, B, C, E**

**Explanation** — Both large and similar = high bias, low variance = underfitting (A true). Training loss down, validation loss up = low bias, high variance = overfitting (B true). Less training data makes overfitting worse (C true). Reducing the number of test examples does not make overfitting itself worse (it only makes the performance estimate less reliable) (D false). Fewer parameters → less overfitting (E true). ⚠️ Trap: D — "makes overfitting more severe" → "does not change overfitting itself" would make it TRUE.

</details>

---

## L4-02 · 과대적합의 대응 기법 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 과대적합(overfitting)을 완화하는 방법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 더 많은 훈련 데이터를 확보하는 것은 과대적합 완화에 도움이 된다.
- **B.** 더 단순한 모델(파라미터 수가 적은 모델)을 사용하면 과대적합이 완화될 수 있다.
- **C.** L2 정규화는 손실함수에 파라미터 제곱합(Σθj²)에 λ를 곱한 벌점(penalty)을 추가한다.
- **D.** L2 정규화에서 편향 파라미터 θ0는 벌점을 받지 않는다.
- **E.** 정규화 강도 λ를 매우 크게 하면 과대적합이 완전히 사라지고 항상 최적의 모델을 얻는다.

**정답: A, B, C, D**

**해설** — 데이터 추가 (A 참). 단순한 모델 (B 참). L2 = MSE + λ·Σθj² (C 참). 편향 θ0는 정규화하지 않는다 (D 참). λ가 너무 크면 모든 파라미터를 0으로 학습하는 것이 더 쉬워져 과소적합이 된다 (E 거짓). ⚠️ 함정: E — "λ를 매우 크게 하면 항상 최적의 모델" → "λ가 너무 크면 과소적합"이면 참.

> 티어 근거: Overfitting remedies: simpler model, more data, L2, early stopping

<details><summary>English</summary>

**Q.** Which of the following statements about ways to mitigate overfitting are true?

- **A.** Obtaining more training data helps to mitigate overfitting.
- **B.** Using a simpler model (one with fewer parameters) can mitigate overfitting.
- **C.** L2 regularization adds a penalty term to the loss: the sum of the squared parameters (Σθj²) multiplied by λ.
- **D.** In L2 regularization the bias parameter θ0 is not penalized.
- **E.** Making the regularization strength λ very large removes overfitting completely and always gives the optimal model.

**Answer: A, B, C, D**

**Explanation** — More data (A true). Simpler model (B true). L2 = MSE + λ·Σθj² (C true). The bias θ0 is not regularized (D true). If λ is too large it becomes easier to drive all parameters to 0, which leads to underfitting (E false). ⚠️ Trap: E — "a very large lambda always gives the optimal model" → "an overly large lambda causes underfitting" would make it TRUE.

</details>

---

## L4-03 · 조기 종료와 검증집합 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 조기 종료(early stopping)와 검증집합(validation set)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 조기 종료는 훈련 손실이 더 이상 감소하지 않을 때 학습을 즉시 중단하는 기법이다.
- **B.** 조기 종료는 검증 손실 J_val이 더 이상 개선되지 않을 때 멈추고, 그 시점의 파라미터를 사용한다.
- **C.** 테스트 손실 J_test를 기준으로 조기 종료를 하면 테스트 집합에 모델을 맞추는 셈이 되어 올바르지 않다.
- **D.** 훈련 손실은 감소하는데 검증 손실이 계속 증가한다면 과대적합이 심해지는 신호로 볼 수 있다.
- **E.** 검증 손실이 처음 평탄해지는 순간 바로 멈추는 것이 가장 좋은 전략이다.

**정답: B, C, D**

**해설** — 조기 종료의 기준은 훈련 손실이 아니라 검증 손실 (A 거짓, B 참). J_test 기준은 cheating (C 참). 훈련↓·검증↑은 과대적합 심화 신호 (D 참). 첫 평탄 구간에서 바로 멈추지 말고 어느 정도 참을성 있게 기다리는 것이 좋다 (E 거짓). ⚠️ 함정: A — "훈련 손실이 더 이상 감소하지 않을 때" → "검증 손실이 개선되지 않을 때"이면 참. ⚠️ 함정: E — "처음 평탄해지는 순간 바로 멈추는 것이 최선" → "인내심을 갖고 기다리는 것이 좋다"이면 참.

> 출처 메모: C·E는 강의 슬라이드; A·B·D가 DOCX

<details><summary>English</summary>

**Q.** Which of the following statements about early stopping and the validation set are true?

- **A.** Early stopping is a technique that stops training immediately when the training loss no longer decreases.
- **B.** Early stopping stops when the validation loss J_val no longer improves, and uses the parameters from that point.
- **C.** Using the test loss J_test as the criterion for early stopping means fitting the model to the test set, which is incorrect.
- **D.** If the training loss decreases while the validation loss keeps increasing, that can be seen as a sign that overfitting is getting worse.
- **E.** Stopping the very moment the validation loss first flattens out is the best strategy.

**Answer: B, C, D**

**Explanation** — The criterion of early stopping is the validation loss, not the training loss (A false, B true). Using J_test is cheating (C true). Training loss down with validation loss up is a sign of worsening overfitting (D true). You should be somewhat patient instead of stopping at the first flat region (E false). ⚠️ Trap: A — "when the training loss stops decreasing" → "when the validation loss stops improving" would make it TRUE. ⚠️ Trap: E — "stop at the first flat moment" → "be patient for a while" would make it TRUE.

</details>

---

## L4-04 · 정규방정식 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 최소제곱 문제의 정규방정식(normal equation)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 정규방정식 θ = (XᵀX)⁻¹Xᵀy 는 최적 파라미터를 한 단계로 계산한다.
- **B.** 실제로는 (XᵀX + λI)⁻¹Xᵀy 형태의 정규화된(L2) 정규방정식을 사용한다.
- **C.** 정규방정식에서 I는 단위행렬(identity matrix)이다.
- **D.** λ 값을 적절히 선택하면 해의 안정성(역행렬 계산 가능성)이 보장된다.
- **E.** 정규방정식은 경사하강법과 달리 여러 번의 반복이 반드시 필요하다.

**정답: A, B, C, D**

**해설** — 한 단계로 정확한 해를 준다 (A 참). 실무에서는 정규화 버전 사용 (B 참). I = 단위행렬 (C 참). λ로 특이행렬 문제를 피해 안정성 확보 (D 참). 정규방정식은 반복 없이 한 번에 해를 구한다(경사하강법이 반복이 필요함) (E 거짓). ⚠️ 함정: E — "여러 번의 반복이 반드시 필요" → "반복 없이 한 번에 해를 구한다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the normal equation for the least squares problem are true?

- **A.** The normal equation θ = (XᵀX)⁻¹Xᵀy computes the optimal parameters in one step.
- **B.** In practice the regularized (L2) normal equation θ = (XᵀX + λI)⁻¹Xᵀy is used.
- **C.** In the normal equation I is the identity matrix.
- **D.** Choosing λ appropriately guarantees that the solution is stable (the inverse can be computed).
- **E.** Unlike gradient descent, the normal equation necessarily requires many iterations.

**Answer: A, B, C, D**

**Explanation** — It gives the exact solution in one step (A true). The regularized version is used in practice (B true). I = identity matrix (C true). λ avoids the singular-matrix problem and provides stability (D true). The normal equation solves the problem at once without iteration (gradient descent is the one that needs iterations) (E false). ⚠️ Trap: E — "requires many iterations" → "solves it in one step" would make it TRUE.

</details>

---

## L4-05 · 정규방정식의 차원 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 환자 200명의 특징 4개(체중, 나이, 키, 성별)로 콜레스테롤을 예측하는 선형 회귀에서, 최소제곱 해를 정규방정식으로 구하려 한다. 이에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** X의 shape은 (200, 5)이며, 편향 항을 위한 열이 포함된다.
- **B.** y의 shape은 (200,) 또는 (200, 1)이고 콜레스테롤 값이 여기에 들어간다.
- **C.** θ의 shape은 (5,) 또는 (5, 1)이다.
- **D.** I는 (5, 5) 크기의 단위행렬로 사용된다.
- **E.** 콜레스테롤 수치 값들은 θ에 들어간다.

**정답: A, B, C, D**

**해설** — 특징 4개 + 편향 열 = 5열 → X는 (200, 5) (A 참). y는 레이블 벡터 (B 참). θ는 (5,) (C 참). XᵀX가 (5,5)이므로 I도 (5,5) (D 참). 콜레스테롤(레이블)은 y에 들어가고 θ에는 파라미터만 있다 (E 거짓). ⚠️ 함정: E — "콜레스테롤 값들은 θ에 들어간다" → "y에 들어간다"이면 참.

<details><summary>English</summary>

**Q.** A linear regression predicts cholesterol for 200 patients from 4 features (weight, age, height, sex), and we want to obtain the least squares solution with the normal equation. Which statements are true?

- **A.** The shape of X is (200, 5) and it contains a column for the bias term.
- **B.** The shape of y is (200,) or (200, 1) and the cholesterol values go here.
- **C.** The shape of θ is (5,) or (5, 1).
- **D.** I is used as the identity matrix of size (5, 5).
- **E.** The cholesterol values go into θ.

**Answer: A, B, C, D**

**Explanation** — 4 features + a bias column = 5 columns, so X is (200, 5) (A true). y is the label vector (B true). θ is (5,) (C true). Since XᵀX is (5,5), I is also (5,5) (D true). The cholesterol (label) is in y; θ contains only the parameters (E false). ⚠️ Trap: E — "the cholesterol values are in theta" → "they are in y" would make it TRUE.

</details>

---

## L4-06 · 다항식 회귀 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 다항식 회귀(polynomial regression)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 가설함수에 x의 거듭제곱 항(θ0 + θ1x + θ2x² + …)이 포함된다.
- **B.** 손실함수는 MSE를 사용할 수 있으며 손실함수는 미분 가능하므로 경사하강법을 적용할 수 있다.
- **C.** 파라미터 θ에 지수를 씌우는 것이 아니므로 손실함수 J는 θ에 대해 여전히 2차식(볼록)이다.
- **D.** x, x², x³ … 를 새로운 변수로 미리 계산하면 선형 회귀와 동일한 방식으로 풀 수 있다.
- **E.** 고차항의 값 범위가 달라 그래디언트 스케일 차이가 생기므로 특징 스케일링이 필요하다.

**정답: A, B, C, D, E**

**해설** — 다항식 가설함수 (A 참). MSE는 미분 가능 → 경사하강법 사용 (B 참). θ에 지수가 없으므로 J는 θ에 대해 2차식·볼록 (C 참). 새 변수로 취급해 선형 회귀로 변환 (D 참). 고차항 스케일 차이 때문에 스케일링 필요 (E 참).

> 출처 메모: ✗ 슬라이드(L4 s31-43): 다항식 회귀 — 시험 제외

<details><summary>English</summary>

**Q.** Which of the following statements about polynomial regression are true?

- **A.** The hypothesis function contains powers of x (θ0 + θ1x + θ2x² + …).
- **B.** MSE can be used as the loss, and since the loss is differentiable gradient descent can be applied.
- **C.** The parameters θ are not exponentiated, so the loss J is still quadratic (convex) in θ.
- **D.** If x, x², x³ … are precomputed as new variables, the problem can be solved in exactly the same way as linear regression.
- **E.** The range of the higher-order terms differs, which creates differences in gradient scale, so feature scaling is needed.

**Answer: A, B, C, D, E**

**Explanation** — A polynomial hypothesis function (A true). MSE is differentiable, so gradient descent can be used (B true). θ is not exponentiated, so J is quadratic and convex in θ (C true). Treating the powers as new variables reduces it to linear regression (D true). Feature scaling is needed because of the scale differences of the higher-order terms (E true).

</details>

---

## L4-07 · 데이터셋 분할(훈련/검증/테스트) · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 데이터셋 분할에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 모델의 수명주기는 훈련집합에서 학습하고 테스트집합에서 평가하는 두 단계로 볼 수 있다.
- **B.** 훈련집합과 테스트집합은 서로소(disjoint)여야 하며 테스트집합을 학습에 사용하면 안 된다.
- **C.** 테스트집합은 학습 중에 보지 못한 데이터에 대한 성능을 추정하는 데 사용한다.
- **D.** 훈련/검증/테스트를 50% / 25% / 25% 처럼 나눌 수 있고, 중요 응용에서는 20% / 10% / 70% 처럼 다르게 나눌 수도 있다.
- **E.** 테스트집합의 성능을 보고 하이퍼파라미터를 조정하는 것은 올바른 사용법이다.

**정답: A, B, C, D**

**해설** — 학습 → 평가의 수명주기 (A 참). 두 집합은 서로소여야 함 (B 참). 테스트집합의 목적 (C 참). 분할 비율 예시 (D 참). 테스트집합을 튜닝에 쓰면 데이터 누출(data leakage)이며, 하이퍼파라미터는 검증집합으로 조정해야 한다 (E 거짓). ⚠️ 함정: E — "테스트집합을 보고 하이퍼파라미터를 조정하는 것은 올바르다" → "데이터 누출이므로 틀렸다"이면 참.

> 티어 근거: Train/validation/test split; test set must not be used for learning

<details><summary>English</summary>

**Q.** Which of the following statements about splitting the dataset are true?

- **A.** The life cycle of a model can be seen as two stages: learning on the training set and evaluating on the test set.
- **B.** The training set and the test set must be disjoint, and the test set must not be used for learning.
- **C.** The test set is used to estimate the performance on data that was not seen during training.
- **D.** The data can be split as 50% / 25% / 25% for training / validation / test, and in important applications it can be split differently, e.g. 20% / 10% / 70%.
- **E.** Looking at the test-set performance and tuning the hyperparameters accordingly is correct usage.

**Answer: A, B, C, D**

**Explanation** — The learn → evaluate life cycle (A true). The two sets must be disjoint (B true). The purpose of the test set (C true). Example split ratios (D true). Tuning on the test set is data leakage; hyperparameters must be tuned on the validation set (E false). ⚠️ Trap: E — "tuning on the test set is correct" → "it is data leakage" would make it TRUE.

</details>

---

## L4-08 · 하이퍼파라미터와 그 최적화 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 하이퍼파라미터(hyperparameter)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 학습률 α, 다항식 차수, 신경망 구조(층 수·뉴런 수), 반복 횟수(조기 종료) 등은 하이퍼파라미터다.
- **B.** 하이퍼파라미터는 검증집합의 성능을 기준으로 선택한다.
- **C.** 하이퍼파라미터는 일반적으로 경사하강법으로 최적화할 수 없다.
- **D.** 하이퍼파라미터 최적화 기법으로 격자탐색, 랜덤 탐색, 베이지안 최적화, 진화/유전 알고리즘 등이 있다.
- **E.** 모델 파라미터 θ도 검증집합에서 학습된다.

**정답: A, B, C, D**

**해설** — 하이퍼파라미터 예시 (A 참). 검증집합으로 선택 (B 참). 하이퍼파라미터에 대한 미분 가능한 손실을 항상 정의할 수 없어 경사하강법을 쓸 수 없다 (C 참). 대표적 탐색 기법들 (D 참). 모델 파라미터 θ는 훈련집합에서 경사하강법으로 학습한다 (E 거짓). ⚠️ 함정: E — "θ도 검증집합에서 학습된다" → "훈련집합에서 학습된다"이면 참.

> 티어 근거: Hyperparameters and how they are chosen

<details><summary>English</summary>

**Q.** Which of the following statements about hyperparameters are true?

- **A.** The learning rate α, the polynomial degree, the network architecture (number of layers and neurons) and the number of iterations (early stopping) are hyperparameters.
- **B.** Hyperparameters are selected based on the performance on the validation set.
- **C.** Hyperparameters generally cannot be optimized by gradient descent.
- **D.** Hyperparameter optimization techniques include grid search, random search, Bayesian optimization and evolutionary / genetic algorithms.
- **E.** The model parameters θ are also learned on the validation set.

**Answer: A, B, C, D**

**Explanation** — Examples of hyperparameters (A true). Selected on the validation set (B true). A differentiable loss with respect to the hyperparameters cannot always be defined, so gradient descent cannot be used (C true). The standard search techniques (D true). The model parameters θ are learned on the training set by gradient descent (E false). ⚠️ Trap: E — "theta is also learned on the validation set" → "on the training set" would make it TRUE.

</details>

---

## L4-09 · 모델 학습 절차(하이퍼파라미터 + 파라미터) · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 하이퍼파라미터와 파라미터를 함께 다루는 모델 학습 절차에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 새 하이퍼파라미터 구성 Ψ를 선택해 모델을 만든다.
- **B.** 훈련집합에서 경사하강법으로 모델 파라미터 θ를 최적화한다.
- **C.** 훈련된 모델을 검증집합에서 평가하고, 다시 1단계로 돌아가 다른 Ψ를 시도한다.
- **D.** 최종적으로 검증집합 성능이 가장 좋았던 Ψ\*와 그때의 θ\*를 테스트집합에서 평가한다.
- **E.** 모델 학습은 하이퍼파라미터와 파라미터를 동시에 경사하강법으로 최적화하는 단일 문제다.

**정답: A, B, C, D**

**해설** — ① Ψ 선택 ② θ 최적화 ③ 검증 평가 후 반복 (A, B, C 참). 최종적으로 Ψ\*·θ\*를 테스트집합에서 평가 (D 참). 최적화 문제가 두 개(파라미터는 경사하강법, 하이퍼파라미터는 탐색)로 분리된다 (E 거짓). ⚠️ 함정: E — "동시에 경사하강법으로 최적화하는 단일 문제" → "두 문제로 분리된다"이면 참.

> 티어 근거: Model training procedure (Ψ, θ, validation, test)

<details><summary>English</summary>

**Q.** Which of the following statements about the model training procedure that handles hyperparameters and parameters together are true?

- **A.** We choose a new hyperparameter configuration Ψ and build the model with it.
- **B.** We optimize the model parameters θ on the training set with gradient descent.
- **C.** We evaluate the trained model on the validation set and go back to step 1 to try a different Ψ.
- **D.** Finally we evaluate the Ψ\* with the best validation performance and the corresponding θ\* on the test set.
- **E.** Model training is a single problem in which the hyperparameters and the parameters are optimized by gradient descent at the same time.

**Answer: A, B, C, D**

**Explanation** — ① choose Ψ ② optimize θ ③ evaluate on validation and repeat (A, B, C true). Finally Ψ\* and θ\* are evaluated on the test set (D true). The problem splits into two (parameters by gradient descent, hyperparameters by search) (E false). ⚠️ Trap: E — "a single problem optimized together" → "two separate problems" would make it TRUE.

</details>

---

## L4-10 · 교차검증 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 교차검증(cross validation)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 교차검증은 하이퍼파라미터를 평가하는 데 널리 쓰이는 기법이다.
- **B.** 훈련/검증에 사용할 데이터가 적을 때 특히 유용하다.
- **C.** 데이터를 여러 부분으로 나누어 검증을 반복함으로써 검증 결과의 신뢰성을 높인다.
- **D.** 교차검증은 테스트집합을 학습에 사용하는 것을 정당화하는 기법이다.
- **E.** 교차검증은 하이퍼파라미터 선택과 무관하게 최종 성능 평가만을 위한 것이다.

**정답: A, B, C**

**해설** — 하이퍼파라미터 평가 기법 (A 참). 데이터가 적을 때 유용 (B 참). 여러 분할로 반복 평가해 신뢰성 향상 (C 참). 테스트집합을 학습에 쓰는 것을 정당화하지 않는다 (D 거짓). 하이퍼파라미터 선택에 사용된다 (E 거짓). ⚠️ 함정: D — "테스트집합을 학습에 쓰는 것을 정당화" → "정당화하지 않는다"이면 참. ⚠️ 함정: E — "최종 성능 평가만을 위한 것" → "하이퍼파라미터 선택에도 쓴다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about cross validation are true?

- **A.** Cross validation is a widely used technique for evaluating hyperparameters.
- **B.** It is especially useful when there is little data available for training and validation.
- **C.** Splitting the data into several parts and repeating the validation makes the validation result more reliable.
- **D.** Cross validation is a technique that justifies using the test set for training.
- **E.** Cross validation is only for the final performance evaluation and has nothing to do with hyperparameter selection.

**Answer: A, B, C**

**Explanation** — A hyperparameter evaluation technique (A true). Useful when data is scarce (B true). Repeated evaluation over several splits increases reliability (C true). It does not justify using the test set for training (D false). It is used for hyperparameter selection (E false). ⚠️ Trap: D — "justifies using the test set for training" → "does not justify it" would make it TRUE. ⚠️ Trap: E — "only for the final evaluation" → "also used for hyperparameter selection" would make it TRUE.

</details>

---

## L4-11 · 인공 뉴런 모델(퍼셉트론) · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 인공 뉴런(artificial neuron, 퍼셉트론) 모델에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 인공 뉴런은 생물학적 뉴런의 단순화되고 이산화된 모델이다.
- **B.** 활성함수 g가 시그모이드이면 인공 뉴런은 (다변량) 로지스틱 회귀와 같다.
- **C.** 활성함수 g는 시그모이드 외의 다른 활성함수가 될 수도 있다.
- **D.** 인공 뉴런은 기본적인 인공 신경망(MLP)의 구성 요소다.
- **E.** 인공 뉴런은 입력의 가중합을 계산하지 않고 입력을 그대로 출력한다.

**정답: A, B, C, D**

**해설** — 단순화·이산화된 생물학적 뉴런 모델 (A 참). g=시그모이드 → 로지스틱 회귀 (B 참). 다른 활성함수도 가능 (C 참). MLP의 구성 요소 (D 참). 인공 뉴런은 가중합 + 활성함수를 계산한다 (E 거짓). ⚠️ 함정: E — "가중합을 계산하지 않고 입력을 그대로 출력" → "가중합 + 활성함수를 계산"이면 참.

> 티어 근거: Artificial neuron (perceptron) — slide s106 says it MAY be on the test

> 출처 메모: 인공 뉴런=로지스틱 회귀(포함). 보기 A의 생물학적 뉴런 언급은 ✗ 슬라이드 맥락

<details><summary>English</summary>

**Q.** Which of the following statements about the artificial neuron (perceptron) model are true?

- **A.** An artificial neuron is a simplified and discretized model of a biological neuron.
- **B.** If the activation function g is the sigmoid, the artificial neuron is the same as (multivariate) logistic regression.
- **C.** The activation function g can also be an activation function other than the sigmoid.
- **D.** An artificial neuron is a building block of a basic artificial neural network (MLP).
- **E.** An artificial neuron does not compute a weighted sum of its inputs; it outputs the inputs unchanged.

**Answer: A, B, C, D**

**Explanation** — A simplified and discretized model of a biological neuron (A true). g = sigmoid → logistic regression (B true). Other activation functions are possible (C true). A building block of an MLP (D true). An artificial neuron computes a weighted sum plus an activation (E false). ⚠️ Trap: E — "does not compute a weighted sum" → "computes a weighted sum plus an activation" would make it TRUE.

</details>

---

## L4-12 · 생물학적 뉴런과 인공 뉴런의 차이 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 생물학적 뉴런과 인공 뉴런의 차이에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 생물학적 뉴런은 연속적인 신호를 다루므로 합이 아니라 적분의 관점으로 볼 수 있다.
- **B.** 생물학적 뉴런의 비선형성은 불연속적(예: 계단 함수)이어도 되지만, 인공 뉴런에서는 연속적이고 미분 가능한 비선형성이 요구된다.
- **C.** 인공 뉴런의 활성함수는 도함수가 모든 곳에서 0이면 안 된다.
- **D.** 생물학적 뉴런의 가중치는 부호가 바뀌지 않는(흥분성/억제성) 경우가 있지만, 인공 뉴런의 가중치는 부호가 바뀔 수 있다.
- **E.** 생물학적 뉴런과 인공 뉴런은 완전히 동일한 수학적 모델이다.

**정답: A, B, C, D**

**해설** — 생물학적 뉴런 = 연속 신호(적분), 인공 뉴런 = 이산 합 (A 참). 생물학적은 비연속 비선형성도 가능하지만 인공 뉴런은 미분 가능해야 한다 (B, C 참). 생물학적 가중치 부호는 고정될 수 있고 인공 뉴런은 자유롭게 변한다 (D 참). 두 모델은 동일하지 않다 (E 거짓). ⚠️ 함정: E — "완전히 동일한 수학적 모델" → "동일하지 않다"이면 참.

> 출처 메모: ✗ 슬라이드(L4 s95-98, s103-105): 생물학적 vs 인공 뉴런 — 시험 제외

<details><summary>English</summary>

**Q.** Which of the following statements about the differences between biological and artificial neurons are true?

- **A.** Biological neurons process continuous signals, so they can be viewed in terms of an integral rather than a sum.
- **B.** The nonlinearity of a biological neuron may be discontinuous (e.g. a step function), but an artificial neuron requires a continuous and differentiable nonlinearity.
- **C.** The derivative of the activation function of an artificial neuron must not be zero everywhere.
- **D.** The weights of a biological neuron sometimes do not change sign (excitatory / inhibitory), while the weights of an artificial neuron can change sign.
- **E.** Biological neurons and artificial neurons are exactly the same mathematical model.

**Answer: A, B, C, D**

**Explanation** — Biological neuron = continuous signal (integral), artificial neuron = discrete sum (A true). A biological neuron may use a discontinuous nonlinearity, but an artificial one must be differentiable (B, C true). The sign of a biological weight can be fixed while an artificial weight changes freely (D true). The two models are not identical (E false). ⚠️ Trap: E — "exactly the same model" → "not the same model" would make it TRUE.

</details>

---

## L4-13 · 과소적합/과대적합의 정의 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 과소적합(underfitting)과 과대적합(overfitting)의 정의에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 과소적합은 모델의 복잡도가 너무 낮아 입력으로부터 레이블을 정확히 근사하지 못하는 상태다.
- **B.** 과대적합은 모델이 훈련집합의 개별 요소의 특성을 정확히 학습해 일반화 능력을 잃는 상태다.
- **C.** 과대적합된 모델은 테스트집합에서 좋지 않은 성능을 보인다.
- **D.** 두 경우 모두 훈련 중 보지 못한 새 데이터에 대한 성능이 나빠지므로 피해야 한다.
- **E.** 과소적합은 과대적합보다 항상 더 심각한 문제이며 해결할 필요가 없다.

**정답: A, B, C, D**

**해설** — 과소적합 = 표현력 부족 (A 참). 과대적합 = 암기로 인한 일반화 상실 (B 참). 과대적합 모델은 테스트 성능이 나쁘다 (C 참). 둘 다 새 데이터 성능을 악화시킨다 (D 참). 과소적합도 반드시 해결해야 하는 문제다(더 복잡한 모델 필요) (E 거짓). ⚠️ 함정: E — "항상 더 심각하며 해결할 필요가 없다" → "반드시 해결해야 한다"이면 참.

> 티어 근거: Underfitting / overfitting definitions

<details><summary>English</summary>

**Q.** Which of the following statements about the definition of underfitting and overfitting are true?

- **A.** Underfitting is the state in which the complexity of the model is too low to approximate the label from the input accurately.
- **B.** Overfitting is the state in which the model learns the individual characteristics of the training set so precisely that it loses its ability to generalize.
- **C.** An overfitted model performs badly on the test set.
- **D.** Both cases degrade the performance on new data that was not seen during training, so both must be avoided.
- **E.** Underfitting is always a more serious problem than overfitting and does not need to be fixed.

**Answer: A, B, C, D**

**Explanation** — Underfitting = lack of capacity (A true). Overfitting = loss of generalization due to memorization (B true). An overfitted model has bad test performance (C true). Both worsen the performance on new data (D true). Underfitting is also a problem that must be fixed (a more complex model is needed) (E false). ⚠️ Trap: E — "always more serious and needs no fixing" → "must also be fixed" would make it TRUE.

</details>

---

## L4-14 · 분류에서의 과대적합 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 분류 과제에서의 과대적합에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 과도하게 복잡한 모델은 개별 훈련 예시를 외우듯 결정경계를 정교하게 만들어 심한 과대적합을 일으킬 수 있다.
- **B.** 로지스틱 회귀는 선형 결정면을 학습하므로 (훈련집합 크기가 극단적으로 작지 않다면) 과대적합이 기대되지 않는다.
- **C.** 모델의 표현력이 너무 낮으면 과소적합되어 결정경계가 단순해진다.
- **D.** 적절한 표현력의 모델은 과소적합과 과대적합 사이의 균형을 이룬다.
- **E.** 로지스틱 회귀는 매우 복잡한 비선형 결정경계를 만들 수 있으므로 항상 과대적합되기 쉽다.

**정답: A, B, C, D**

**해설** — 복잡한 모델은 훈련 예시를 외워 과대적합 (A 참). 로지스틱 회귀는 선형 결정면이므로 과대적합이 기대되지 않는다 (B 참). 표현력 부족 → 과소적합 (C 참). 균형이 목표 (D 참). 로지스틱 회귀는 선형 경계만 만들 수 있어 복잡한 경계로 인한 과대적합은 기대되지 않는다 (E 거짓). ⚠️ 함정: E — "항상 과대적합되기 쉽다" → "선형 경계라 기대되지 않는다"이면 참.

> 티어 근거: Over/underfitting in classification

<details><summary>English</summary>

**Q.** Which of the following statements about overfitting in classification tasks are true?

- **A.** An overly complex model can make the decision boundary so elaborate that it memorizes the individual training examples and causes severe overfitting.
- **B.** Logistic regression learns a linear decision surface, so overfitting is not expected (unless the training set is extremely small).
- **C.** If the expressive power of the model is too low it underfits and the decision boundary becomes too simple.
- **D.** A model with an appropriate expressive power balances underfitting and overfitting.
- **E.** Logistic regression can create very complex non-linear decision boundaries, so it is always prone to overfitting.

**Answer: A, B, C, D**

**Explanation** — A complex model memorizes the training examples and overfits (A true). Logistic regression has a linear decision surface, so overfitting is not expected (B true). Lack of capacity → underfitting (C true). Balance is the goal (D true). Logistic regression can only make linear boundaries, so overfitting through complex boundaries is not expected (E false). ⚠️ Trap: E — "always prone to overfitting" → "not expected, since the boundary is linear" would make it TRUE.

</details>

---

## L4-15 · 심층 신경망에서의 과대적합 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 심층 신경망에서의 과대적합에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 충분히 강력하고 학습 가능한 파라미터가 많은 신경망은 과제를 바람직하지 않은 방식으로 학습할 수 있다.
- **B.** 신경망이 훈련집합의 각 이미지를 특정 패턴으로 외울 수 있으며, 심지어 JPEG 압축 아티팩트까지 학습할 수 있다.
- **C.** 수억 개 파라미터의 심층 신경망에서 과대적합을 막을 만큼 충분한 레이블 데이터를 확보하는 것은 일반적으로 어렵다.
- **D.** 데이터를 늘릴 수 없을 때는 정규화나 조기 종료 같은 대안적 방법이 필요하다.
- **E.** 파라미터가 많은 신경망은 데이터가 부족해도 과대적합되지 않는다.

**정답: A, B, C, D**

**해설** — 강력한 모델의 바람직하지 않은 학습 (A 참). JPEG 아티팩트까지 암기 (B 참). 대규모 모델에 충분한 레이블 데이터 확보는 어렵다 (C 참). 정규화·조기 종료 등 대안 필요 (D 참). 파라미터가 많고 데이터가 적으면 과대적합되기 쉽다 (E 거짓). ⚠️ 함정: E — "데이터가 부족해도 과대적합되지 않는다" → "과대적합되기 쉽다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about overfitting in deep neural networks are true?

- **A.** A network that is powerful enough and has many trainable parameters can learn the task in an undesirable way.
- **B.** A neural network can memorize each image of the training set as a specific pattern, and can even learn JPEG compression artifacts.
- **C.** For a deep network with hundreds of millions of parameters it is generally difficult to obtain enough labeled data to prevent overfitting.
- **D.** When the data cannot be increased, alternative methods such as regularization or early stopping are needed.
- **E.** A network with many parameters does not overfit even when the data is scarce.

**Answer: A, B, C, D**

**Explanation** — Undesirable learning by a powerful model (A true). Memorizing even JPEG artifacts (B true). Enough labeled data for a huge model is hard to obtain (C true). Regularization, early stopping and other alternatives are needed (D true). Many parameters with little data easily leads to overfitting (E false). ⚠️ Trap: E — "does not overfit even with little data" → "easily overfits" would make it TRUE.

</details>

---

## L4-16 · 손실 곡선 패턴 해석 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 학습 중 훈련 손실(J_train)과 테스트 손실(J_test)의 관찰 패턴에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** J_train ≈ 700, J_test ≈ 700 처럼 둘 다 크고 비슷하면 과소적합으로 볼 수 있다.
- **B.** J_train ≈ 400, J_test ≈ 400 처럼 둘 다 작고 함께 감소하면 균형 잡힌 상태로 볼 수 있다.
- **C.** J_train ≈ 250 인데 J_test ≈ 800 처럼 훈련 손실은 작고 테스트 손실이 크면 과대적합으로 볼 수 있다.
- **D.** 과대적합 상태에서는 학습을 계속할수록 테스트 손실이 증가하는 경향이 나타난다.
- **E.** J_train이 0에 가까우면 항상 좋은 모델이다.

**정답: A, B, C, D**

**해설** — 둘 다 큼 = high bias, low variance (A 참). 둘 다 작고 함께 감소 = 균형 (B 참). 훈련↓·테스트↑ = low bias, high variance (C, D 참). J_train = 0은 훈련 데이터를 외운 과대적합일 수 있으며 테스트 성능이 매우 나쁠 수 있다 (E 거짓). ⚠️ 함정: E — "J_train이 0에 가까우면 항상 좋은 모델" → "과대적합일 수 있다"이면 참.

> 티어 근거: Loss-curve patterns (700/700, 400/400, 250/800)

<details><summary>English</summary>

**Q.** Which of the following statements about the observed pattern of the training loss (J_train) and the test loss (J_test) during training are true?

- **A.** If both are large and similar, such as J_train ≈ 700 and J_test ≈ 700, it can be seen as underfitting.
- **B.** If both are small and decrease together, such as J_train ≈ 400 and J_test ≈ 400, it can be seen as a balanced state.
- **C.** If the training loss is small but the test loss is large, such as J_train ≈ 250 and J_test ≈ 800, it can be seen as overfitting.
- **D.** In the overfitting state the test loss tends to increase as training continues.
- **E.** If J_train is close to 0 the model is always good.

**Answer: A, B, C, D**

**Explanation** — Both large = high bias, low variance (A true). Both small and decreasing together = balanced (B true). Training loss low, test loss high = low bias, high variance (C, D true). J_train = 0 may mean the training data was memorized (overfitting) and the test performance can be very bad (E false). ⚠️ Trap: E — "J_train near 0 always means a good model" → "it may be overfitting" would make it TRUE.

</details>

---

## L4-17 · L2 정규화의 강도와 효과 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** L2 정규화(regularization)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** λ = 0 이면 정규화가 없는 원래 모델과 같다.
- **B.** λ를 적절히 키우면 과대적합이 완화되어 더 좋은 일반화 성능을 얻을 수 있다.
- **C.** λ가 너무 크면 모든 파라미터를 0으로 학습하는 것이 손실을 줄이기 쉬워져 과소적합이 된다.
- **D.** 다항식 회귀에서 차수를 높여 정확히 맞출수록 계수(θ)가 커지는 경향이 관찰되며, 정규화는 이를 억제한다.
- **E.** L2 정규화는 훈련 데이터가 충분히 많을 때만 사용할 수 있다.

**정답: A, B, C, D**

**해설** — λ=0 → 정규화 없음 (A 참). 적절한 λ → 과대적합 완화 (B 참). λ 과대 → 과소적합 (C 참). 고차 다항식에서 계수가 커지는 경향을 벌점으로 억제 (D 참). L2는 훈련 데이터가 부족할 때도 도움이 된다 (E 거짓). ⚠️ 함정: E — "훈련 데이터가 충분히 많을 때만 사용" → "데이터가 적을 때도 도움이 된다"이면 참.

> 티어 근거: L2 regularization (λ)

<details><summary>English</summary>

**Q.** Which of the following statements about L2 regularization are true?

- **A.** If λ = 0 the model is the same as the original model without regularization.
- **B.** Increasing λ appropriately mitigates overfitting and can give better generalization performance.
- **C.** If λ is too large it becomes easy to reduce the loss by driving all parameters to 0, which leads to underfitting.
- **D.** In polynomial regression the coefficients (θ) tend to grow as the degree is increased to fit the data exactly, and regularization suppresses this.
- **E.** L2 regularization can only be used when there is plenty of training data.

**Answer: A, B, C, D**

**Explanation** — λ = 0 → no regularization (A true). A suitable λ → less overfitting (B true). λ too large → underfitting (C true). The penalty suppresses the growth of the coefficients in high-degree polynomials (D true). L2 also helps when there is little training data (E false). ⚠️ Trap: E — "only with plenty of training data" → "also helps with little data" would make it TRUE.

</details>

---

## L4-18 · 시험 범위: 포함/제외 (교수님 명시) · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 교수님이 슬라이드에서 시험 범위 포함/제외를 명시한 내용에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 다항식 보간(polynomial interpolation)은 시험 범위에 포함된다.
- **B.** 생물학적 뉴런 모델과 인공 뉴런 모델의 차이점은 시험 범위에 포함된다.
- **C.** 인공 뉴런(퍼셉트론) 모델은 시험 범위에 포함된다.
- **D.** 과소·과대적합의 식별과 대응 방법은 시험 범위에 포함된다.
- **E.** 검증집합(validation set)과 하이퍼파라미터는 시험 범위에 포함된다.

**정답: C, D, E**

**해설** — Lecture 4 요약 슬라이드에 명시된 시험 범위: 포함 = 인공 뉴런(퍼셉트론) 모델(C 참), 과소·과대적합의 식별과 대응(D 참), 검증집합과 하이퍼파라미터(E 참). 제외 = 다항식 보간(A 거짓), 생물학적 뉴런 모델과 인공 모델의 차이(B 거짓). ⚠️ 함정: A — "다항식 보간은 포함된다" → "제외된다"이면 참. ⚠️ 함정: B — "생물학적·인공 뉴런의 차이는 포함된다" → "제외된다"이면 참.

> 출처 메모: 교수님이 슬라이드에 적은 "시험 포함/제외" 안내 자체

<details><summary>English</summary>

**Q.** Which of the following statements about what the professor stated on the slides as included in or excluded from the exam scope are true?

- **A.** Polynomial interpolation is included in the exam scope.
- **B.** The differences between the biological neuron model and the artificial neuron model are included in the exam scope.
- **C.** The artificial neuron (perceptron) model is included in the exam scope.
- **D.** Identifying and handling underfitting / overfitting are included in the exam scope.
- **E.** The validation set and hyperparameters are included in the exam scope.

**Answer: C, D, E**

**Explanation** — The Lecture 4 summary slide states the exam scope: included = the artificial neuron (perceptron) model (C true), identifying and handling under- and overfitting (D true), the validation set and hyperparameters (E true). Excluded = polynomial interpolation (A false), the differences between the biological neuron model and the artificial model (B false). ⚠️ Trap: A — "polynomial interpolation is included" → "it is excluded" would make it TRUE. ⚠️ Trap: B — "the difference between the neuron models is included" → "it is excluded" would make it TRUE.

</details>

---

## S1-05 · 볼록 문제와 전역 최솟값 보장 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 충분히 작은 스텝 크기(학습률)를 쓰면 경사하강법이 전역 최솟값을 찾는 것이 보장되는 경우를 모두 고르시오.

- **A.** MSE 를 쓰는 선형 회귀
- **B.** 이진 교차엔트로피를 쓰는 로지스틱 회귀
- **C.** MSE 를 쓰는 MLP
- **D.** 시그모이드 출력에 MSE 를 쓰는 로지스틱 회귀
- **E.** 위 보기 중 비볼록(non-convex) 문제는 없다

**정답: A, B**

**해설** — MSE + 선형 회귀는 볼록이므로 전역 최솟값이 보장된다 (A 참). 시그모이드 + BCE 도 볼록 (B 참). MLP + MSE 는 비볼록이라 지역 최솟값이 생길 수 있다 (C 거짓). 시그모이드 + MSE 조합도 비볼록 (D 거짓). 비볼록 문제가 있으므로 E 거짓.

> 출처 메모: S1-05의 B(로지스틱+BCE)는 강의 내용; 선형회귀·MLP가 DOCX

<details><summary>English</summary>

**Q.** Gradient descent is guaranteed (with a small enough step size) to find the global minimum for:

- **A.** Linear regression with MSE.
- **B.** Logistic regression with binary cross-entropy.
- **C.** An MLP with MSE.
- **D.** Logistic regression with MSE loss on the sigmoid output.
- **E.** None of the above are non-convex problems.

**Answer: A, B**

**Explanation** — MSE + linear regression is convex, so the global minimum is guaranteed (A true). Sigmoid + BCE is convex too (B true). An MLP with MSE is non-convex and may have local minima (C false). Sigmoid + MSE is also non-convex (D false). An MLP and sigmoid-with-MSE are non-convex, so E is false.

</details>

---

## S1-06 · 이진 분류 문제 설정(모델·차원·손실) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 환자 100명의 혈액 검사값 2개로 병이 있는지(ill / healthy)를 예측하려 한다. 옳은 것을 모두 고르시오.

- **A.** 선형 회귀보다 로지스틱 회귀가 더 적절하다.
- **B.** 모델의 파라미터는 3개다.
- **C.** 더미 열을 포함하면 X 는 100×3 이다.
- **D.** 손실함수는 이진 교차엔트로피(BCE)가 적절하다.
- **E.** ŷ 는 임의의 실수값이 될 수 있다.

**정답: A, B, C, D**

**해설** — 출력이 두 클래스이므로 로지스틱 회귀 (A 참). 입력 2개 + 더미 변수 → 파라미터 3개 (B 참). X = m×(n+1) = 100×3 (C 참). 이진 분류에는 BCE (D 참). 로지스틱 회귀의 출력은 시그모이드를 거쳐 (0,1) 사이로 제한된다 (E 거짓). ⚠️ 함정: E — "임의의 실수" → "(0, 1) 사이의 확률"이면 참.

> 출처 메모: S1-05의 B(로지스틱+BCE)는 강의 내용; 선형회귀·MLP가 DOCX

<details><summary>English</summary>

**Q.** Task: 100 patients, 2 blood-test values, label = ill or healthy. Which statements are true?

- **A.** Logistic regression is more suitable than linear regression.
- **B.** The model has 3 parameters.
- **C.** X is 100×3 with the dummy column.
- **D.** The loss should be binary cross-entropy.
- **E.** ŷ can be any real number.

**Answer: A, B, C, D**

**Explanation** — With two classes, logistic regression is the right choice (A true). Two inputs plus the dummy give 3 parameters (B true). X is m×(n+1) = 100×3 (C true). Binary classification uses BCE (D true). ŷ is squeezed into (0,1) by the sigmoid (E false). ⚠️ Trap: E — "any real number" → "a probability in (0, 1)" would make it TRUE.

</details>

---

## S1-08 · 정규화된 정규방정식 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 정규화된 정규방정식 θ = (XᵀX + λI)⁻¹Xᵀy 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 한 번의 계산으로 최소제곱 해를 구한다.
- **B.** I 는 (n+1)×(n+1) 단위행렬이다.
- **C.** λ = 0 이면 정규화가 없는 정규방정식이 된다.
- **D.** X 에는 입력이, y 에는 레이블이 들어 있다.
- **E.** 로지스틱 회귀를 학습하는 데 쓰인다.
- **F.** 많은 반복(iteration)이 필요하다.

**정답: A, B, C, D**

**해설** — 정규방정식은 반복 없이 한 번에 최소제곱 해를 준다 (A 참, F 거짓). I 는 파라미터 개수와 같은 (n+1)×(n+1) 단위행렬 (B 참). λ = 0 이면 θ = (XᵀX)⁻¹Xᵀy 로 원래 정규방정식 (C 참). X = 입력 행렬, y = 레이블 벡터 (D 참). 로지스틱 회귀는 비선형 가설함수라 정규방정식으로 풀 수 없다 (E 거짓). ⚠️ 함정: E — "로지스틱 회귀" → "선형 회귀"이면 참. ⚠️ 함정: F — "많은 반복이 필요" → "한 번에 계산한다"이면 참.

<details><summary>English</summary>

**Q.** Which statements about the regularized normal equation θ = (XᵀX + λI)⁻¹Xᵀy are true?

- **A.** It gives the least-squares solution in one step.
- **B.** I is the identity matrix, (n+1)×(n+1).
- **C.** λ = 0 gives the non-regularized normal equation.
- **D.** X holds the inputs and y holds the labels.
- **E.** It is used to train logistic regression.
- **F.** It needs many iterations.

**Answer: A, B, C, D**

**Explanation** — The normal equation solves least squares in one step (A true, F false). I is the (n+1)×(n+1) identity matrix (B true). λ = 0 gives the plain normal equation (C true). X holds inputs and y holds labels (D true). Logistic regression is non-linear, so the normal equation does not apply (E false). ⚠️ Trap: E — "logistic regression" → "linear regression" would make it TRUE. ⚠️ Trap: F — "needs many iterations" → "solves it in one step" would make it TRUE.

</details>

---

## S1-12 · L2 정규화의 효과 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** L2 정규화(페널티 λ·Σθⱼ²)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** λ = 0 이면 원래 모델이 된다.
- **B.** λ 가 매우 크면 파라미터가 0 쪽으로 밀려 과소적합이 된다.
- **C.** 편향 θ₀ 는 페널티에 포함되지 않는다.
- **D.** 과대적합을 줄이는 데 도움이 된다.

**정답: A, B, C, D**

**해설** — λ = 0 이면 페널티가 사라져 원래 모델 (A 참). λ 가 크면 가중치가 0으로 수축해 모델이 단순해지고 과소적합이 될 수 있다 (B 참). 관례적으로 편향 θ₀ 는 정규화하지 않는다 (C 참). 가중치 크기를 제한하면 분산이 줄어 과대적합이 완화된다 (D 참).

<details><summary>English</summary>

**Q.** L2 regularization (penalty λ·Σθⱼ²). Which are true?

- **A.** λ = 0 gives the original model.
- **B.** A very large λ pushes the parameters toward 0 (underfitting).
- **C.** The bias θ₀ is not penalized.
- **D.** It helps reduce overfitting.

**Answer: A, B, C, D**

**Explanation** — With λ = 0 the penalty vanishes (A true). A large λ shrinks the weights toward 0 and can cause underfitting (B true). By convention the bias θ₀ is not penalized (C true). Limiting the weight magnitude reduces variance and overfitting (D true).

</details>

---

## S1-13 · 과대적합을 심하게 만드는 변화 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 과대적합(overfitting)을 더 심하게 만드는 변화를 모두 고르시오.

- **A.** 훈련 예제 수를 줄인다.
- **B.** 테스트 예제 수를 줄인다.
- **C.** 훈련 예제 수를 늘린다.
- **D.** 모델 파라미터 수를 줄인다.
- **E.** 모델 파라미터 수를 늘린다.

**정답: A, E**

**해설** — 훈련 데이터가 적을수록 과대적합 위험이 커진다 (A 참). 테스트 예제 수는 과대적합 정도를 바꾸지 않는다(평가의 신뢰도만 변한다) (B 거짓). 훈련 데이터가 많으면 일반화가 좋아져 완화된다 (C 거짓). 파라미터를 줄이면 모델이 단순해져 완화된다 (D 거짓). 파라미터가 많으면 표현력이 커져 과대적합이 심해진다 (E 참). ⚠️ 함정: B — 테스트 예제 수는 과대적합 자체를 바꾸지 않는다. ⚠️ 함정: C — 훈련 예제를 "늘린다" → "줄인다"이면 참. ⚠️ 함정: D — 파라미터를 "줄인다" → "늘린다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following changes make overfitting MORE severe?

- **A.** Fewer training examples
- **B.** Fewer test examples
- **C.** More training examples
- **D.** Fewer model parameters
- **E.** More model parameters

**Answer: A, E**

**Explanation** — Less training data increases the overfitting risk (A true). The test-set size does not change how much the model overfits; it only affects how reliable the estimate is (B false). More training data improves generalization (C false). Fewer parameters make the model simpler (D false). More parameters increase capacity and overfitting (E true). ⚠️ Trap: B — the test-set size does not change overfitting itself. ⚠️ Trap: C — "more training examples" → "fewer training examples" would make it TRUE. ⚠️ Trap: D — "fewer parameters" → "more parameters" would make it TRUE.

</details>

---

## S1-14 · 조기 종료(early stopping) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 조기 종료(early stopping)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 과대적합을 줄인다.
- **B.** 검증 손실이 더 이상 좋아지지 않으면 멈춘다.
- **C.** 훈련 손실이 증가하기 시작하면 멈춘다.
- **D.** 언제 멈출지 결정하는 데 테스트 손실을 쓰는 것이 올바르다.
- **E.** 가장 좋았던 검증 상태의 파라미터를 유지한다.

**정답: A, B, E**

**해설** — 검증 성능이 나빠지기 전에 멈추면 과대적합이 완화된다 (A 참). 기준은 검증 손실 (B 참). 훈련 손실은 보통 계속 감소하므로 기준이 될 수 없다 (C 거짓). 테스트셋을 결정에 쓰면 정보가 새어 낙관적 편향이 생긴다 (D 거짓). 최적 검증 시점의 파라미터를 저장한다 (E 참). ⚠️ 함정: C — "훈련 손실이 증가" → "검증 손실이 개선되지 않을 때"이면 참. ⚠️ 함정: D — "테스트 손실" → "검증 손실"이면 참.

<details><summary>English</summary>

**Q.** Which statements about early stopping are true?

- **A.** It reduces overfitting.
- **B.** Stop when the validation loss stops improving.
- **C.** Stop when the training loss starts to increase.
- **D.** Using the test loss to decide when to stop is correct.
- **E.** We keep the parameters from the best validation state.

**Answer: A, B, E**

**Explanation** — Stopping before validation performance degrades reduces overfitting (A true). The criterion is the validation loss (B true). The training loss normally keeps falling, so it is not a good criterion (C false). Using the test set for decisions leaks information (D false). We keep the parameters of the best validation state (E true). ⚠️ Trap: C — "when the training loss increases" → "when the validation loss stops improving" would make it TRUE. ⚠️ Trap: D — "test loss" → "validation loss" would make it TRUE.

</details>

---

## S1-15 · 손실값으로 과소/과대적합 진단 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 훈련/테스트 손실 값으로 진단한 다음 설명 중 옳은 것을 모두 고르시오.

- **A.** J_train ≈ 700, J_test ≈ 700 → 과소적합
- **B.** J_train ≈ 250, J_test ≈ 800 → 과대적합
- **C.** J_train = 0, J_test 가 매우 큼 → 과대적합
- **D.** J_train ≈ J_test ≈ 400 이고 둘 다 감소 중 → 적절한 상태
- **E.** 훈련 손실은 감소하는데 검증 손실이 증가 → 정상적인 학습 동작

**정답: A, B, C, D**

**해설** — 둘 다 높으면 과소적합(높은 편향) (A 참). 훈련은 낮은데 테스트가 높으면 과대적합(높은 분산) (B 참). 훈련 데이터를 완전히 외운 극단적 과대적합 (C 참). 둘 다 낮고 함께 감소하면 적절한 상태 (D 참). 검증 손실 증가는 과대적합의 신호이며 정상 동작이 아니다 (E 거짓). ⚠️ 함정: E — 검증 손실 증가는 과대적합의 신호이며 정상 동작이 아니다.

<details><summary>English</summary>

**Q.** Which cases show overfitting or underfitting?

- **A.** J_train ≈ 700, J_test ≈ 700: underfitting
- **B.** J_train ≈ 250, J_test ≈ 800: overfitting
- **C.** J_train = 0, J_test huge: overfitting
- **D.** J_train ≈ J_test ≈ 400, both decreasing: "just right"
- **E.** Validation loss rising while training loss falls: normal behavior

**Answer: A, B, C, D**

**Explanation** — Both high means underfitting / high bias (A true). Low training loss with high test loss means overfitting / high variance (B true). Memorizing the training set is extreme overfitting (C true). Both low and decreasing together is a good state (D true). Rising validation loss is the overfitting sign, not normal behavior (E false). ⚠️ Trap: E — rising validation loss is the overfitting sign, not normal behaviour.

</details>

---

## S1-16 · 과대적합을 줄이는 방법 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 과대적합을 줄이는 방법을 모두 고르시오.

- **A.** 더 단순한 모델
- **B.** 더 많은 훈련 데이터
- **C.** L2 정규화
- **D.** 드롭아웃(dropout)
- **E.** 층을 더 추가

**정답: A, B, C, D**

**해설** — 단순한 모델은 분산을 낮춘다 (A 참). 데이터가 많으면 일반화가 좋아진다 (B 참). L2 정규화는 가중치 크기를 제한한다 (C 참). 드롭아웃은 강한 정규화 효과가 있다 (D 참). 층을 추가하면 복잡도가 올라가 과대적합이 심해진다 (E 거짓). ⚠️ 함정: E — "층을 더 추가" → "층을 줄인다"이면 참.

> 출처 메모: 보기 D(드롭아웃)는 Lecture 7 내용

<details><summary>English</summary>

**Q.** Which of the following reduce overfitting?

- **A.** A simpler model
- **B.** More training data
- **C.** L2 regularization
- **D.** Dropout
- **E.** Adding more layers

**Answer: A, B, C, D**

**Explanation** — A simpler model has lower variance (A true). More data improves generalization (B true). L2 limits the weight magnitude (C true). Dropout is a strong regularizer (D true). More layers add complexity (E false). ⚠️ Trap: E — "adding more layers" → "removing layers" would make it TRUE.

</details>

---

## S1-17 · 데이터 분할(훈련/검증/테스트) · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 훈련/검증/테스트 데이터 분할에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 검증집합은 하이퍼파라미터를 조정하는 데 쓴다.
- **B.** 테스트집합은 최종 평가에만 쓴다.
- **C.** 세 집합은 서로 겹치지 않아야 한다.
- **D.** 하이퍼파라미터는 보통 경사하강법으로 학습한다.
- **E.** 파라미터 θ(W, b) 는 경사하강법으로 학습한다.

**정답: A, B, C, E**

**해설** — 검증집합은 하이퍼파라미터 선택과 조기 종료에 쓴다 (A 참). 테스트집합은 마지막 성능 추정에만 쓴다 (B 참). 데이터 누출을 막기 위해 서로소여야 한다 (C 참). 하이퍼파라미터는 학습되지 않으며 탐색(grid/random 등)으로 고른다 (D 거짓). θ 는 경사하강법으로 최적화한다 (E 참). ⚠️ 함정: D — "경사하강법으로 학습" → "탐색으로 선택"이면 참.

<details><summary>English</summary>

**Q.** Which statements about splitting the data into training, validation and test sets are true?

- **A.** The validation set is used to tune hyperparameters.
- **B.** The test set is used only for the final evaluation.
- **C.** The three sets must be disjoint.
- **D.** Hyperparameters are usually trained by gradient descent.
- **E.** Parameters θ (W, b) are trained by gradient descent.

**Answer: A, B, C, E**

**Explanation** — The validation set is used for hyperparameter choice and early stopping (A true). The test set is only for the final estimate (B true). The sets must be disjoint to avoid leakage (C true). Hyperparameters are not trained; they are searched (D false). θ is optimized by gradient descent (E true). ⚠️ Trap: D — "trained by gradient descent" → "chosen by search" would make it TRUE.

</details>

---

## S1-18 · 하이퍼파라미터 식별 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 다음 중 하이퍼파라미터인 것을 모두 고르시오.

- **A.** 학습률 α
- **B.** 층별 뉴런 수
- **C.** 가중치 행렬 W₁
- **D.** L2 정규화 강도 λ
- **E.** 편향 벡터 b₂

**정답: A, B, D**

**해설** — 학습률은 사람이 정하는 하이퍼파라미터 (A 참). 구조(뉴런 수)도 하이퍼파라미터 (B 참). W₁ 은 데이터로 학습되는 파라미터 (C 거짓). λ 는 정규화 강도를 정하는 하이퍼파라미터 (D 참). b₂ 도 학습되는 파라미터 (E 거짓). ⚠️ 함정: C — W₁ 은 학습되는 파라미터 — "학습률 α"라면 참.

<details><summary>English</summary>

**Q.** Which of the following are hyperparameters?

- **A.** Learning rate α
- **B.** Number of neurons per layer
- **C.** The weight matrix W₁
- **D.** L2 strength λ
- **E.** The bias vector b₂

**Answer: A, B, D**

**Explanation** — The learning rate is set by the engineer (A true). Architecture choices such as the number of neurons are hyperparameters (B true). W₁ is learned from data (C false). λ sets the regularization strength (D true). b₂ is also learned (E false). ⚠️ Trap: C — W₁ is a learned parameter — "the learning rate α" would make it TRUE.

</details>

---

## S2-03 · 정규방정식의 차원(m=50, n=3) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 정규방정식을 예제 수 m = 50, 입력 변수 n = 3 (더미 열 x₀ = 1 포함) 으로 쓸 때 옳은 것을 모두 고르시오.

- **A.** XᵀX 는 4×4 이다.
- **B.** I 는 50×50 이다.
- **C.** θ 는 4개 원소를 갖는다.
- **D.** Xᵀy 는 4개 원소를 갖는다.
- **E.** XᵀX 는 3×3 이다.

**정답: A, C, D**

**해설** — X 는 50×4 이므로 XᵀX 는 4×4 (A 참, E 거짓). I 는 (n+1)×(n+1) = 4×4 (B 거짓). θ 도 4개 원소 (C 참). Xᵀy 도 4개 원소 (D 참).

<details><summary>English</summary>

**Q.** Normal equation with m = 50 examples and n = 3 input variables (with the dummy column x₀ = 1).

- **A.** XᵀX is 4×4.
- **B.** I is 50×50.
- **C.** θ has 4 elements.
- **D.** Xᵀy has 4 elements.
- **E.** XᵀX is 3×3.

**Answer: A, C, D**

**Explanation** — X is 50×4, so XᵀX is 4×4 (A true, E false). I is (n+1)×(n+1) = 4×4 (B false). θ has 4 elements (C true). Xᵀy has 4 elements (D true).

</details>

---

## S2-04 · 정규방정식·유사역행렬의 안정성 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** θ = (XᵀX + λI)⁻¹Xᵀy 와 NumPy 구현 np.matmul(np.linalg.pinv(X), y) 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** λI 는 역행렬 계산을 안정적으로 만든다.
- **B.** 정규화가 없으면 XᵀX 가 역행렬을 갖지 않을 수 있다.
- **C.** 유사역행렬(Moore–Penrose pseudoinverse)도 정확한 해를 얻는 또 다른 방법이다.
- **D.** λ 가 크면 파라미터가 더 작은 값으로 밀린다.
- **E.** 이 방법은 반복적이며 학습률이 필요하다.

**정답: A, B, C, D**

**해설** — λI 를 더하면 특이(singular)에 가까운 행렬도 안정적으로 역행렬을 구한다 (A 참). XᵀX 가 특이하면 역행렬이 존재하지 않는다 (B 참). pinv 로도 최소제곱 해를 얻을 수 있다 (C 참). λ 는 가중치를 0 방향으로 수축시킨다 (D 참). 정규방정식과 pinv 는 한 번에 푸는 방법이며 반복이 없다 (E 거짓). ⚠️ 함정: E — "반복적" → "한 번에 계산"이면 참.

<details><summary>English</summary>

**Q.** About θ = (XᵀX + λI)⁻¹Xᵀy and its NumPy form `np.matmul(np.linalg.pinv(X), y)`:

- **A.** λI helps to keep the inverse stable.
- **B.** Without regularization, XᵀX may not be invertible.
- **C.** The pseudoinverse (Moore–Penrose) is another way to get an exact solution.
- **D.** A large λ pushes the parameters toward smaller values.
- **E.** The method is iterative and needs a learning rate.

**Answer: A, B, C, D**

**Explanation** — Adding λI stabilizes the inverse of a nearly singular matrix (A true). If XᵀX is singular it has no inverse (B true). pinv also gives the least-squares solution (C true). λ shrinks the weights toward 0 (D true). The normal equation and the pseudoinverse are one-step solutions, not iterative (E false). ⚠️ Trap: E — "iterative" → "one-step" would make it TRUE.

</details>

---

## S2-15 · L2 정규화 수식과 효과 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** L2 정규화 J_reg = J_MSE + (λ/2m) Σⱼ θⱼ² 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 합은 보통 j = 1 부터 시작한다(θ₀ 는 페널티 없음).
- **B.** λ = 0 이면 원래 모델이 된다.
- **C.** λ 가 매우 크면 과소적합이 될 수 있다.
- **D.** 큰 파라미터 값에 벌점을 준다.
- **E.** 합에 편향 θ₀ 도 포함된다.

**정답: A, B, C, D**

**해설** — 관례적으로 편향 θ₀ 는 정규화하지 않으므로 j = 1 부터 시작한다 (A 참, E 거짓). λ = 0 이면 정규화가 사라진다 (B 참). λ 가 너무 크면 가중치가 0으로 수축해 과소적합이 된다 (C 참). 큰 가중치에 벌점을 주어 작은 값을 선호하게 만든다 (D 참). ⚠️ 함정: E — "합에 θ₀ 도 포함" → "θ₀ 는 제외된다"이면 참.

<details><summary>English</summary>

**Q.** L2 regularization: J_reg = J_MSE + (λ/2m) Σⱼ θⱼ².

- **A.** The sum usually starts at j = 1 (θ₀ is not penalized).
- **B.** λ = 0 gives the original model.
- **C.** A very large λ can cause underfitting.
- **D.** It penalizes large parameter values.
- **E.** The sum includes the bias θ₀.

**Answer: A, B, C, D**

**Explanation** — By convention the bias θ₀ is not regularized, so the sum starts at j = 1 (A true, E false). With λ = 0 the penalty vanishes (B true). A huge λ shrinks the weights toward 0 and causes underfitting (C true). Large weights are penalized (D true). ⚠️ Trap: E — "the sum includes θ₀" → "θ₀ is excluded" would make it TRUE.

</details>

---

## S2-16 · 과대적합 진단과 대응(훈련 0.05 / 검증 0.60) · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 훈련 손실 0.05, 검증 손실 0.60 일 때 옳은 것을 모두 고르시오.

- **A.** 과대적합일 가능성이 높다.
- **B.** 훈련 데이터를 늘리면 도움이 될 수 있다.
- **C.** 드롭아웃이 도움이 될 수 있다.
- **D.** 모델을 훨씬 크게 만들면 도움이 될 것이다.
- **E.** 조기 종료가 도움이 될 수 있다.

**정답: A, B, C, E**

**해설** — 훈련 손실은 매우 낮고 검증 손실은 높은 전형적 과대적합 (A 참). 데이터를 늘리면 분산이 줄어든다 (B 참). 드롭아웃은 정규화 효과가 있다 (C 참). 모델을 키우면 과대적합이 더 심해진다 (D 거짓). 조기 종료도 완화책이 된다 (E 참). ⚠️ 함정: D — "훨씬 크게 만들면 도움" → "더 단순하게 만들면 도움"이면 참.

<details><summary>English</summary>

**Q.** With training loss 0.05 and validation loss 0.60, which statements are true?

- **A.** The model is probably overfitting.
- **B.** More training data may help.
- **C.** Dropout may help.
- **D.** Using a much larger model will probably help.
- **E.** Early stopping may help.

**Answer: A, B, C, E**

**Explanation** — Very low training loss with a high validation loss is classic overfitting (A true). More data reduces variance (B true). Dropout regularizes (C true). A larger model makes overfitting worse (D false). Early stopping also helps (E true). ⚠️ Trap: D — "a much larger model helps" → "a simpler model helps" would make it TRUE.

</details>

---

## S2-17 · 과소적합 진단(훈련 0.90 / 검증 0.95) · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 훈련 손실 0.90, 검증 손실 0.95 로 둘 다 높을 때 옳은 것을 모두 고르시오.

- **A.** 과소적합(높은 편향)일 가능성이 높다.
- **B.** 더 복잡한 모델이 도움이 될 수 있다.
- **C.** 정규화를 더 강하게 하면 도움이 될 것이다.
- **D.** 훈련 데이터를 늘리는 것만으로 해결된다.

**정답: A, B**

**해설** — 둘 다 높으면 과소적합, 즉 높은 편향이다 (A 참). 표현력을 키우면 도움이 된다 (B 참). 정규화를 강하게 하면 더 단순해져 과소적합이 악화된다 (C 거짓). 데이터만 늘리는 것으로는 편향 문제가 해결되지 않는다 (D 거짓). ⚠️ 함정: D — "데이터만 늘리면 해결" → "모델 복잡도를 높여야"이면 참.

<details><summary>English</summary>

**Q.** Training loss 0.90 and validation loss 0.95, both high.

- **A.** The model is probably underfitting (high bias).
- **B.** A more complex model may help.
- **C.** Stronger regularization will help.
- **D.** More training data alone will fix it.

**Answer: A, B**

**Explanation** — Both high means underfitting / high bias (A true). Increasing capacity helps (B true). Stronger regularization makes underfitting worse (C false). More data alone does not fix a bias problem (D false). ⚠️ Trap: D — "more data alone fixes it" → "a more complex model is needed" would make it TRUE.

</details>

---

## S2-18 · 검증집합과 테스트집합의 역할 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 검증집합과 테스트집합의 역할에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 테스트집합으로 하이퍼파라미터를 조정하면 테스트 성능 추정이 낙관적으로 편향된다.
- **B.** 검증 손실은 조기 종료에 사용된다.
- **C.** 테스트집합은 학습과 하이퍼파라미터 선택에 영향을 주면 안 된다.
- **D.** 데이터가 적을 때는 교차검증이 유용하다.
- **E.** 분할 비율은 항상 정확히 50% / 25% / 25% 여야 한다.

**정답: A, B, C, D**

**해설** — 테스트셋을 튜닝에 쓰면 정보가 새어 낙관적 편향이 생긴다 (A 참). 검증 손실로 조기 종료 시점을 정한다 (B 참). 테스트셋은 마지막 평가 전용이다 (C 참). 데이터가 적으면 k-fold 교차검증이 유용하다 (D 참). 비율은 자유롭게 정할 수 있다 (E 거짓). ⚠️ 함정: E — "항상 50/25/25" → "비율은 자유롭게 정한다"이면 참.

<details><summary>English</summary>

**Q.** Which statements about the roles of the validation set and the test set are true?

- **A.** Tuning hyperparameters on the test set makes the test estimate too optimistic.
- **B.** The validation loss is used for early stopping.
- **C.** The test set must not influence training or hyperparameter choice.
- **D.** Cross-validation is useful when we have little data.
- **E.** The split must always be exactly 50% / 25% / 25%.

**Answer: A, B, C, D**

**Explanation** — Tuning on the test set leaks information and biases the estimate (A true). The validation loss drives early stopping (B true). The test set is only for the final estimate (C true). With little data, k-fold cross-validation helps (D true). The proportions can change (e.g. 70/20/10) (E false). ⚠️ Trap: E — "always 50/25/25" → "the proportions are free" would make it TRUE.

</details>

---

## S2-19 · 하이퍼파라미터 탐색 방법 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 하이퍼파라미터 탐색 방법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 격자탐색(grid search)
- **B.** 무작위탐색(random search)
- **C.** 베이지안 최적화(Bayesian optimization)
- **D.** 진화/유전 알고리즘
- **E.** 보통 훈련 손실에 대한 일반적인 경사하강법

**정답: A, B, C, D**

**해설** — 대표적인 하이퍼파라미터 탐색 방법: 격자탐색(A 참), 무작위탐색(B 참), 베이지안 최적화(C 참), 진화/유전 알고리즘(D 참). 하이퍼파라미터에 대한 그래디언트는 일반적으로 구할 수 없어 경사하강법을 쓸 수 없다 (E 거짓). ⚠️ 함정: E — "경사하강법" → "격자·랜덤 탐색"이면 참.

<details><summary>English</summary>

**Q.** Which statements about hyperparameter search methods are true?

- **A.** Grid search
- **B.** Random search
- **C.** Bayesian optimization
- **D.** Evolutionary / genetic algorithms
- **E.** Usually plain gradient descent on the training loss

**Answer: A, B, C, D**

**Explanation** — The standard hyperparameter search methods are grid search (A true), random search (B true), Bayesian optimization (C true) and evolutionary/genetic algorithms (D true). A gradient with respect to the hyperparameters generally cannot be computed, so plain gradient descent cannot be used (E false). ⚠️ Trap: E — "gradient descent" → "grid / random search" would make it TRUE.

</details>

---

## S2-20 · 하이퍼파라미터를 포함한 학습 절차 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 하이퍼파라미터 Ψ 를 포함한 모델 학습 절차에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** θ 는 훈련집합에서 최적화한다.
- **B.** 각 Ψ 는 검증집합에서 평가한다.
- **C.** 검증 성능으로 최적의 Ψ\* 를 고른다.
- **D.** 테스트집합은 최종 성능 추정에 쓴다.
- **E.** Ψ 는 θ 와 함께 SGD 로 최적화한다.

**정답: A, B, C, D**

**해설** — θ 는 훈련집합에서 경사하강법으로 최적화한다 (A 참). Ψ 후보를 검증집합에서 평가한다 (B 참). 검증 성능이 가장 좋은 Ψ 를 고른다 (C 참). 테스트집합은 마지막 성능 추정에 쓴다 (D 참). Ψ 는 미분 대상이 아니며 탐색으로 고른다 (E 거짓). ⚠️ 함정: E — "θ 와 함께 SGD 로 최적화" → "탐색으로 선택"이면 참.

<details><summary>English</summary>

**Q.** Model training procedure with hyperparameters Ψ.

- **A.** θ is optimized on the training set.
- **B.** Each Ψ is evaluated on the validation set.
- **C.** The best Ψ\* is chosen by validation performance.
- **D.** The test set is used for the final estimate.
- **E.** Ψ is optimized with SGD together with θ.

**Answer: A, B, C, D**

**Explanation** — θ is optimized on the training set (A true). Each Ψ candidate is evaluated on the validation set (B true). The best Ψ\* is picked by validation performance (C true). The test set gives the final estimate (D true). Ψ is not differentiable and is searched (E false). ⚠️ Trap: E — "optimized with SGD together with θ" → "chosen by search" would make it TRUE.

</details>

---

## S2-23 · 인공 뉴런(퍼셉트론)의 성질 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 인공 뉴런(퍼셉트론)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 가중합 + 편향을 계산한 뒤 활성함수를 적용한다.
- **B.** 시그모이드를 쓰면 (다변량) 로지스틱 회귀와 같다.
- **C.** 가중치는 양수도 음수도 될 수 있다.
- **D.** 헤비사이드 계단함수는 그래디언트 학습에 좋은 활성함수다.
- **E.** 이 모델은 Rosenblatt(1958) 에서 나왔다.

**정답: A, B, C, E**

**해설** — 뉴런은 가중합 + 편향을 계산한 뒤 활성함수를 적용한다 (A 참). 시그모이드 뉴런은 로지스틱 회귀와 같다 (B 참). 가중치 부호는 자유롭다 (C 참). 계단함수는 거의 모든 곳에서 미분이 0이라 경사하강법에 부적합하다 (D 거짓). 퍼셉트론은 Rosenblatt(1958) 에서 제안되었다 (E 참). ⚠️ 함정: D — "계단함수가 좋다" → "미분 가능한 활성함수가 좋다"이면 참.

> 출처 메모: ⚠ 보기 D(헤비사이드 단계함수)는 ✗ 슬라이드(L4 s103-105) 내용

<details><summary>English</summary>

**Q.** Which statements about the artificial neuron (perceptron) are true?

- **A.** It computes a weighted sum plus a bias, then an activation.
- **B.** With sigmoid, it is a (multivariate) logistic regression.
- **C.** Its weights can be positive or negative.
- **D.** A Heaviside step function is a good activation for gradient training.
- **E.** The model is from Rosenblatt, 1958.

**Answer: A, B, C, E**

**Explanation** — A neuron computes a weighted sum plus bias and applies an activation (A true). A sigmoid neuron equals logistic regression (B true). Weights may be positive or negative (C true). The step function has zero derivative almost everywhere, so it is unusable for gradient training (D false). The perceptron is from Rosenblatt (1958) (E true). ⚠️ Trap: D — "the step function is good" → "a differentiable activation is good" would make it TRUE.

</details>

---

## M-05 · 과대적합 진단과 조기 종료·대응 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 학습 중 검증 손실은 계속 증가하고 훈련 손실은 계속 감소한다. 옳은 것을 모두 고르시오.

- **A.** 이것은 과대적합의 신호다.
- **B.** 조기 종료(early stopping) 기준으로는 검증 손실이 최소인 지점에서 멈추는 것이 좋다.
- **C.** 훈련 데이터를 더 모으면 과대적합이 줄어드는 경향이 있다.
- **D.** 테스트 예제 수를 줄이면 과대적합이 더 심해진다.
- **E.** 파라미터 수를 늘리면 과대적합이 더 심해지는 경향이 있다.

**정답: A, B, C, E**

**해설** — 훈련 손실은 감소하는데 검증 손실이 증가하면 과대적합 (A 참). 검증 손실 최소 지점에서 멈추는 것이 조기 종료의 원리 (B 참). 훈련 데이터가 많으면 일반화가 좋아져 완화된다 (C 참). 테스트 예제 수는 과대적합 정도를 바꾸지 않는다(평가 신뢰도만 변함) (D 거짓). 파라미터가 많으면 표현력이 커져 과대적합이 심해진다 (E 참). ⚠️ 함정: D — 테스트 예제 수는 과대적합 자체를 바꾸지 않는다.

<details><summary>English</summary>

**Q.** During training, the validation loss keeps increasing while the training loss keeps decreasing. Which statements are true?

- **A.** This is a sign of overfitting.
- **B.** According to early stopping, we should stop around the minimum of the validation loss.
- **C.** Obtaining more training data tends to reduce overfitting.
- **D.** Decreasing the number of test examples makes overfitting more severe.
- **E.** Increasing the number of parameters tends to make overfitting more severe.

**Answer: A, B, C, E**

**Explanation** — Falling training loss with rising validation loss means overfitting (A true). Early stopping stops near the minimum of the validation loss (B true). More training data improves generalization (C true). The test-set size does not change overfitting (D false). More parameters increase capacity and overfitting (E true). ⚠️ Trap: D — the test-set size does not change overfitting itself.

</details>

---

## M-06 · 정규방정식의 차원(m=300, n=6) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** MSE 와 정규화된 정규방정식 θ = (XᵀX + λI)⁻¹Xᵀy 를 쓴다. 환자 m = 300, 입력 변수 n = 6 (더미 열 x₀ = 1 포함)일 때 옳은 것을 모두 고르시오.

- **A.** X 는 300×7 이다.
- **B.** y 는 300×1 이다.
- **C.** θ 는 7개 원소를 갖는다.
- **D.** I 는 300×300 이다.
- **E.** I 는 7×7 이다.
- **F.** 콜레스테롤 수치는 y 에 들어 있다.

**정답: A, B, C, E, F**

**해설** — X = m×(n+1) = 300×7 (A 참). 레이블 y 는 예제마다 하나씩 300×1 (B 참). θ 는 (n+1) = 7개 (C 참). I 는 파라미터 개수와 같은 (n+1)×(n+1) = 7×7 이며 300×300 이 아니다 (D 거짓, E 참). 정답 레이블(콜레스테롤)은 y 에 있다 (F 참).

<details><summary>English</summary>

**Q.** We use linear regression with MSE and the regularized normal equation θ = (XᵀX + λI)⁻¹Xᵀy. There are m = 300 patients and n = 6 input variables (with the dummy column x₀ = 1). Which statements are true?

- **A.** X is 300×7.
- **B.** y is 300×1.
- **C.** θ has 7 elements.
- **D.** I is 300×300.
- **E.** I is 7×7.
- **F.** The cholesterol levels are in y.

**Answer: A, B, C, E, F**

**Explanation** — X is m×(n+1) = 300×7 (A true). There is one label per example, so y is 300×1 (B true). θ has n+1 = 7 elements (C true). I is (n+1)×(n+1) = 7×7, not 300×300 (D false, E true). The labels (cholesterol levels) are in y (F true).

</details>

---

## M2-01 · 정규방정식의 차원 (m=120, n=4) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 정규방정식 θ = (XᵀX + λI)⁻¹Xᵀy 를 환자 m = 120명, 입력 변수 n = 4개(더미 열 x₀ = 1 포함)로 쓸 때 옳은 것을 모두 고르시오.

- **A.** XᵀX 는 5×5 행렬이다.
- **B.** Xᵀy 는 5개 원소를 갖는다.
- **C.** I 는 120×120 단위행렬이다.
- **D.** λ = 0 이면 정규화가 없는 정규방정식이 된다.
- **E.** θ 는 4개 원소를 갖는다.
- **F.** y 는 120개 원소를 갖는다.

**정답: A, B, D, F**

**해설** — X 는 120×5 이므로 XᵀX 는 5×5 (A 참). Xᵀy 도 5개 원소 (B 참). I 는 (n+1)×(n+1) = 5×5 이며 120×120 이 아니다 (C 거짓). λ = 0 이면 θ = (XᵀX)⁻¹Xᵀy (D 참). θ 는 n+1 = 5개 (E 거짓). 레이블 y 는 예제마다 하나씩 120개 (F 참). ⚠️ 함정: C — "120×120" → "5×5"이면 참.

<details><summary>English</summary>

**Q.** Normal equation: θ = (XᵀX + λI)⁻¹Xᵀy. We have m = 120 patients and n = 4 input variables (with the dummy column x₀ = 1). Which statements are true?

- **A.** XᵀX is a 5×5 matrix.
- **B.** Xᵀy has 5 elements.
- **C.** I is a 120×120 identity matrix.
- **D.** With λ = 0, we get the non-regularized normal equation.
- **E.** θ has 4 elements.
- **F.** y has 120 elements.

**Answer: A, B, D, F**

**Explanation** — X is 120×5, so XᵀX is 5×5 (A true). Xᵀy has 5 elements (B true). I is (n+1)×(n+1) = 5×5, not 120×120 (C false). With λ = 0 we get the plain normal equation (D true). θ has n+1 = 5 elements (E false). There is one label per example, so y has 120 elements (F true). ⚠️ Trap: C — "120×120" → "5×5" would make it TRUE.

</details>

---

## D-14 · 정규화된 정규방정식의 차원 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** θ = (XᵀX + λI)⁻¹Xᵀy 를 콜레스테롤 과제(200명, 속성 4개, 더미 열 포함)에 쓸 때 옳은 것을 모두 고르시오.

- **A.** X 의 shape 은 200×5 다.
- **B.** y 의 shape 은 200×1 이다.
- **C.** θ 의 shape 은 5×1 이다.
- **D.** 콜레스테롤 수치는 y 에 들어간다.
- **E.** 콜레스테롤 수치는 X 에 들어간다.
- **F.** I 는 단위행렬이며 shape 은 5×5 다.

**정답: A, B, C, D, F**

**해설** — X = 200×5 (A 참). y = 200×1 (B 참). θ = 5×1 (C 참). 레이블(콜레스테롤)은 y 에 있다 (D 참, E 거짓). XᵀX 가 5×5 이므로 I 도 5×5 (F 참). ⚠️ 함정: E — "X에 들어간다" → "y에 들어간다"이면 참.

<details><summary>English</summary>

**Q.** Using θ = (XᵀX + λI)⁻¹Xᵀy for the cholesterol task (200 patients, 4 attributes, with the dummy column). Which statements are true?

- **A.** X has shape 200×5.
- **B.** y has shape 200×1.
- **C.** θ has shape 5×1.
- **D.** The cholesterol levels are placed in y.
- **E.** The cholesterol levels are placed in X.
- **F.** I is the identity matrix, with shape 5×5.

**Answer: A, B, C, D, F**

**Explanation** — X is 200×5 (A true). y is 200×1 (B true). θ is 5×1 (C true). The labels (cholesterol) are in y (D true, E false). Since XᵀX is 5×5, I is 5×5 too (F true). ⚠️ Trap: E — "placed in X" → "placed in y" would make it TRUE.

</details>

---

## D-15 · 정규방정식에서 λ와 I의 역할 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** θ = (XᵀX + λI)⁻¹Xᵀy 를 콜레스테롤 과제(환자 200명, 속성 4개 + 더미 열 → X 는 200×5)에 쓸 때 옳은 것을 모두 고르시오.

- **A.** MSE(최소제곱) 손실을 사용한다.
- **B.** λ = 0 이면 정규화가 없는 정규방정식이 된다.
- **C.** 반복 없이 한 단계로 파라미터를 구한다.
- **D.** 학습률 α 가 필요하다.
- **E.** I 는 200×200 단위행렬이다.

**정답: A, B, C**

**해설** — 최소제곱 해를 구하는 식이므로 MSE 를 사용한다 (A 참). λ = 0 이면 정규화가 사라진다 (B 참). 반복 없이 한 번에 해를 구한다 (C 참). 학습률은 경사하강법에 필요하며 정규방정식에는 불필요하다 (D 거짓). I 는 (n+1)×(n+1) = 5×5 이다 (E 거짓). ⚠️ 함정: D — "학습률 α가 필요하다" → "필요 없다"이면 참. ⚠️ 함정: E — "200×200" → "5×5"이면 참.

> 출처 메모: λ의 역할은 강의 내용; "I 행렬이 무엇인가"는 DOCX

<details><summary>English</summary>

**Q.** Using θ = (XᵀX + λI)⁻¹Xᵀy for the cholesterol task (200 patients, 4 attributes plus the dummy column, so X is 200×5), which statements are true?

- **A.** It uses the MSE (least squares) loss.
- **B.** With λ = 0, it is the non-regularized normal equation.
- **C.** It finds the parameters in one step, without iterations.
- **D.** It needs a learning rate α.
- **E.** I is a 200×200 identity matrix.

**Answer: A, B, C**

**Explanation** — It computes the least squares solution, so it uses MSE (A true). With λ = 0 the regularization disappears (B true). It finds the solution in one step without iterations (C true). A learning rate belongs to gradient descent, not to the normal equation (D false). I is (n+1)×(n+1) = 5×5 (E false). ⚠️ Trap: D — "needs a learning rate α" → "needs no learning rate" would make it TRUE. ⚠️ Trap: E — "200×200" → "5×5" would make it TRUE.

</details>

---

## D-29 · 과대적합을 더 심하게 만드는 변화 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 다음 중 과대적합을 더 심하게 만드는 변화를 모두 고르시오.

- **A.** 훈련 예제 수를 줄인다.
- **B.** 테스트 예제 수를 줄인다.
- **C.** 훈련 예제 수를 늘린다.
- **D.** 모델 파라미터 수를 줄인다.
- **E.** 모델 파라미터 수를 늘린다.

**정답: A, E**

**해설** — 훈련 데이터가 적을수록 과대적합이 심해진다 (A 참). 테스트 예제 수는 과대적합 자체를 바꾸지 않는다 (B 거짓). 훈련 데이터를 늘리면 완화된다 (C 거짓). 파라미터를 줄이면 단순해져 완화된다 (D 거짓). 파라미터가 많으면 과대적합이 심해진다 (E 참). ⚠️ 함정: B — "테스트 예제 수" → "훈련 예제 수"이면 참. ⚠️ 함정: C — "늘린다" → "줄인다"이면 참. ⚠️ 함정: D — "파라미터 수를 줄인다" → "늘린다"이면 참.

<details><summary>English</summary>

**Q.** Do we expect overfitting to become more severe if we:

- **A.** Decrease the number of training examples?
- **B.** Decrease the number of test examples?
- **C.** Increase the number of training examples?
- **D.** Decrease the number of parameters of the model?
- **E.** Increase the number of parameters of the model?

**Answer: A, E**

**Explanation** — Less training data makes overfitting worse (A true). The test-set size does not change overfitting itself (B false). More training data mitigates it (C false). Fewer parameters make the model simpler (D false). More parameters increase overfitting (E true). ⚠️ Trap: B — "test examples" → "training examples" would make it TRUE. ⚠️ Trap: C — "increase" → "decrease" would make it TRUE. ⚠️ Trap: D — "decrease the parameters" → "increase them" would make it TRUE.

</details>

---

## D-30 · 조기 종료의 기준과 시점 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 조기 종료(early stopping)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 과대적합을 줄이기 위해 사용한다.
- **B.** 검증 손실이 더 이상 개선되지 않을 때(증가하기 시작할 때) 멈춘다.
- **C.** 훈련 손실이 증가하기 시작할 때 멈춘다.
- **D.** 테스트 손실이 증가하기 시작할 때 멈춘다.
- **E.** 가장 좋았던 검증 손실 시점의 파라미터를 유지한다.

**정답: A, B, E**

**해설** — 조기 종료는 과대적합 완화 기법 (A 참). 기준은 검증 손실이며 더 이상 개선되지 않을 때 멈춘다 (B 참). 훈련 손실은 보통 계속 감소하므로 기준이 될 수 없고 (C 거짓), 테스트 손실을 쓰면 데이터 누출이다 (D 거짓). 최적 검증 시점의 파라미터를 유지한다 (E 참). ⚠️ 함정: C — "훈련 손실" → "검증 손실"이면 참. ⚠️ 함정: D — "테스트 손실" → "검증 손실"이면 참.

<details><summary>English</summary>

**Q.** Which statements about early stopping are true?

- **A.** We use early stopping to reduce overfitting.
- **B.** We should stop training when the validation loss stops improving (starts to increase).
- **C.** We should stop training when the training loss begins to increase.
- **D.** We should stop training when the test loss begins to increase.
- **E.** We should keep the parameters from the point of the best validation loss.

**Answer: A, B, E**

**Explanation** — Early stopping reduces overfitting (A true). The criterion is the validation loss, stopping when it no longer improves (B true). The training loss normally keeps falling (C false) and using the test loss is data leakage (D false). We keep the parameters of the best validation point (E true). ⚠️ Trap: C — "the training loss" → "the validation loss" would make it TRUE. ⚠️ Trap: D — "the test loss" → "the validation loss" would make it TRUE.

</details>

---

## D-31 · 훈련 손실 감소 + 검증 손실 증가의 해석 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 검증 손실이 계속 증가하는 동안 훈련 손실이 계속 감소한다. 옳은 것을 모두 고르시오.

- **A.** 과대적합의 신호로 해석할 수 있다.
- **B.** 과대적합이 점점 심해지고 있다.
- **C.** 과소적합의 신호다.
- **D.** 모델이 점점 더 잘 일반화되고 있다.

**정답: A, B**

**해설** — 훈련 손실은 감소하는데 검증 손실이 증가하면 과대적합의 전형적 신호이며 그 정도가 심해지는 것이다 (A·B 참). 과소적합은 둘 다 높은 경우이고 (C 거짓), 일반화가 좋아지고 있다는 해석은 반대다 (D 거짓). ⚠️ 함정: C — "과소적합" → "과대적합"이면 참. ⚠️ 함정: D — "일반화가 좋아진다" → "나빠진다"이면 참.

<details><summary>English</summary>

**Q.** The validation loss keeps increasing while the training loss keeps decreasing. Which statements are true?

- **A.** This can be interpreted as a sign of overfitting.
- **B.** The overfitting is getting more severe.
- **C.** This is a sign of underfitting.
- **D.** The model is generalizing better and better.

**Answer: A, B**

**Explanation** — Falling training loss with rising validation loss is the classic overfitting sign and it is getting worse (A and B true). Underfitting is when both losses are high (C false), and the model is definitely not generalizing better (D false). ⚠️ Trap: C — "underfitting" → "overfitting" would make it TRUE. ⚠️ Trap: D — "generalizing better" → "generalizing worse" would make it TRUE.

</details>

---

## D-32 · 파라미터와 하이퍼파라미터의 구분 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 파라미터와 하이퍼파라미터에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 신경망의 파라미터는 보통 경사하강법 계열 알고리즘(SGD 등)으로 학습한다.
- **B.** 신경망의 하이퍼파라미터도 보통 경사하강법 계열 알고리즘으로 학습한다.
- **C.** 학습률과 층 수는 하이퍼파라미터다.
- **D.** 가중치 행렬 W 와 편향 벡터 b 는 파라미터다.

**정답: A, C, D**

**해설** — 파라미터(W, b)는 경사하강법으로 학습한다 (A 참, D 참). 하이퍼파라미터는 미분 대상이 아니며 탐색으로 고른다 (B 거짓). 학습률·층 수는 대표적인 하이퍼파라미터 (C 참). ⚠️ 함정: B — "하이퍼파라미터도 경사하강법으로" → "탐색으로 고른다"이면 참.

<details><summary>English</summary>

**Q.** Which statements about parameters and hyperparameters are true?

- **A.** The parameters of a neural network are usually trained with a gradient-descent-based algorithm (like SGD).
- **B.** The hyperparameters of a neural network are usually trained with a gradient-descent-based algorithm.
- **C.** The learning rate and the number of layers are hyperparameters.
- **D.** The weight matrices W and bias vectors b are parameters.

**Answer: A, C, D**

**Explanation** — The parameters (W, b) are trained by gradient descent (A and D true). Hyperparameters are not differentiable and are chosen by search (B false). The learning rate and the number of layers are typical hyperparameters (C true). ⚠️ Trap: B — "hyperparameters are trained by gradient descent" → "chosen by search" would make it TRUE.

</details>

---

# Lecture 5 — MLP · 활성함수 · SGD · 파라미터 계산 (43문항)

## L5-01 · 단일 뉴런의 한계와 MLP의 표현력 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 인공 뉴런 1개와 다층 퍼셉트론(MLP)의 표현력에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 활성함수가 시그모이드인 인공 뉴런 1개는 다변량 로지스틱 회귀와 같다.
- **B.** 단일 뉴런은 선형 분리 가능한 문제만 풀 수 있으며 XOR 문제를 표현할 수 없다.
- **C.** IRIS 데이터에서 versicolor 품종을 직선 하나로 분리할 수 없다면 단일 뉴런으로는 부족하다.
- **D.** 시그모이드를 사용하는 2층 신경망이라도 뉴런이 충분하면 임의의 함수를 임의 정밀도로 근사할 수 있다.
- **E.** 보편 근사 정리에 따르면 그 가중치를 찾는 것도 항상 다항 시간에 보장된다.

**정답: A, B, C, D**

**해설** — 시그모이드 뉴런 1개 = 다변량 로지스틱 회귀 = 하나의 선형 결정면 (A 참). XOR은 선형 분리 불가 (B 참). 직선으로 분리 불가능하면 단일 뉴런 부족 (C 참). 보편 근사 정리 (D 참). 가중치를 지수시간보다 빠르게 찾는 것은 보장되지 않는다 (E 거짓). ⚠️ 함정: E — "항상 다항 시간에 보장된다" → "보장되지 않는다"이면 참.

> 티어 근거: Single neuron limits, AND/OR with 2 layers, MLP expressive power

<details><summary>English</summary>

**Q.** Which of the following statements about the expressive power of a single artificial neuron and of a multilayer perceptron (MLP) are true?

- **A.** A single artificial neuron with a sigmoid activation is the same as multivariate logistic regression.
- **B.** A single neuron can only solve linearly separable problems and cannot represent the XOR problem.
- **C.** If the versicolor class of the IRIS dataset cannot be separated with a single straight line, then a single neuron is not enough.
- **D.** Even a two-layer neural network using sigmoid can approximate any function to any precision if it has enough neurons.
- **E.** According to the universal approximation theorem, finding those weights is also guaranteed to be possible in polynomial time.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: finding the weights is not guaranteed to be faster than exponential time. ⚠️ Trap: E — "guaranteed in polynomial time" → "not guaranteed" would make it TRUE.

</details>

---

## L5-02 · MLP 구조와 활성함수 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 다층 퍼셉트론(MLP)의 구조와 활성함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 완전 연결(fully connected / dense) 층에서는 각 뉴런이 다음 층의 모든 뉴런과 연결된다.
- **B.** 은닉층의 활성함수(비선형성)를 제거하면 신경망의 표현력이 선형 회귀와 동일해진다.
- **C.** 선형 함수의 합성은 여전히 선형이므로 중간 활성함수는 MLP에 필수적이다.
- **D.** 회귀 문제에서는 출력층의 활성함수로 시그모이드를 반드시 사용해야 한다.
- **E.** 입력층과 출력층에는 전통적인 의미의 뉴런과 가중치가 존재한다.

**정답: A, B, C**

**해설** — 완전 연결의 정의 (A 참). 선형함수 합성은 선형 → 비선형성 없으면 표현력이 선형 회귀와 같아진다 (B, C 참). 회귀에서는 마지막 활성함수를 생략(항등)하는 것이 일반적이다 (D 거짓). 입력/출력 층에는 뉴런·가중치가 없다 (E 거짓).

<details><summary>English</summary>

**Q.** Which of the following statements about the structure and the activation functions of an MLP are true?

- **A.** In a fully connected (dense) layer every neuron is connected to all the neurons of the next layer.
- **B.** If the activation function (non-linearity) of the hidden layer is removed, the expressive power of the network becomes the same as linear regression.
- **C.** The composition of linear functions is still linear, so the intermediate activation function is essential for an MLP.
- **D.** For a regression problem the output layer must use a sigmoid activation function.
- **E.** The input and output layers contain neurons and weights in the traditional sense.

**Answer: A, B, C**

**Explanation** — A true. B true. C true. D false: for regression the last activation is usually omitted (identity). E false: the input/output layers have no neurons or weights.

</details>

---

## L5-03 · MLP 파라미터 개수 계산 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 입력 특성 20개를 받아 연속값 1개를 예측하는 MLP가 있고, 은닉층 뉴런이 10개이며 출력층 뉴런이 1개다. 학습 가능한 파라미터 개수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 은닉층의 학습 가능한 파라미터 수는 210개다.
- **B.** 출력층의 학습 가능한 파라미터 수는 11개다.
- **C.** 전체 네트워크의 학습 가능한 파라미터 수는 221개다.
- **D.** 출력층의 학습 가능한 파라미터 수는 10개다.
- **E.** 이 모델에서 은닉층 활성함수 g1을 생략해도 표현력에는 변화가 없다.

**정답: A, B, C**

**해설** — 은닉층: 20×10 + 10(bias) = 210 (A 참). 출력층: 10×1 + 1 = 11 (B 참, D 거짓). 전체 = 210 + 11 = 221 (C 참). 은닉층 활성함수는 비선형성을 담당하므로 생략하면 표현력이 선형 회귀와 같아진다 (E 거짓). ⚠️ 함정: D — "출력층의 파라미터는 10개" → "11개(편향 포함)"이면 참.

<details><summary>English</summary>

**Q.** An MLP receives 20 input features and predicts one continuous value. It has 10 hidden neurons and 1 output neuron. Which statements about the number of trainable parameters are true?

- **A.** The hidden layer has 210 trainable parameters.
- **B.** The output layer has 11 trainable parameters.
- **C.** The whole network has 221 trainable parameters.
- **D.** The output layer has 10 trainable parameters.
- **E.** Omitting the hidden activation g1 does not change the expressive power of this model.

**Answer: A, B, C**

**Explanation** — Hidden: 20x10 + 10 = 210 (A true). Output: 10x1 + 1 = 11 (B true, D false). Total 221 (C true). E false: without the non-linearity the model collapses to linear regression. ⚠️ Trap: D — "10 parameters" → "11 (including the bias)" would make it TRUE.

</details>

---

## L5-04 · 배치 경사하강법과 SGD · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 배치 경사하강법과 확률적 경사하강법(SGD)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 배치 경사하강법은 한 스텝마다 전체 훈련집합에 대한 그래디언트를 계산하므로 계산 비용이 크다.
- **B.** SGD는 무작위로 선택한 소수의 데이터(미니배치)로 다음 스텝을 계산해 근사적인 그래디언트를 얻는다.
- **C.** 미니배치 크기를 작게 하면 갱신 방향의 분산이 커져 잘못된 방향으로 이동할 확률이 높아진다.
- **D.** 미니배치 크기를 크게 하면 계산량과 메모리 요구량이 줄어든다.
- **E.** Momentum, AdaGrad, Adam, RMSprop은 SGD의 변형 알고리즘들이다.

**정답: A, B, C, E**

**해설** — 배치 GD는 스텝마다 전체 데이터셋 그래디언트 → 비용 큼 (A 참). SGD는 미니배치 사용 (B 참). 미니배치가 작으면 분산이 커져 방향이 흔들리고, 수렴을 위해 학습률을 낮춰야 한다 (C 참). 미니배치는 클수록 계산·메모리 요구량이 커진다 (D 거짓). Momentum/AdaGrad/Adam/Adamax/RMSprop은 SGD 변형 (E 참). ⚠️ 함정: D — "배치를 크게 하면 계산량·메모리가 줄어든다" → "늘어난다"이면 참.

> 출처 메모: ⚠ 보기 E(Momentum/AdaGrad/Adam/RMSprop)는 ✗ 슬라이드(L5 s73) → 시험 제외

<details><summary>English</summary>

**Q.** Which of the following statements about batch gradient descent and stochastic gradient descent (SGD) are true?

- **A.** Batch gradient descent computes the gradient over the whole training set at every step, so it is expensive.
- **B.** SGD uses a small randomly chosen subset (mini-batch) to compute the next step and obtains an approximate gradient.
- **C.** With a small mini-batch the variance of the update direction grows, so the probability of moving in a wrong direction increases.
- **D.** With a large mini-batch the computation and memory requirements decrease.
- **E.** Momentum, AdaGrad, Adam and RMSprop are variants of SGD.

**Answer: A, B, C, E**

**Explanation** — A true. B true. C true. D false: a larger mini-batch increases the computation and memory requirements. E true. ⚠️ Trap: D — "a large batch decreases computation and memory" → "it increases them" would make it TRUE.

</details>

---

## L5-05 · 다중 레이블 회귀와 다중 클래스 분류 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 여러 레이블을 다루는 회귀와 다중 클래스 분류에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 다중 레이블 회귀에서는 y를 벡터로 취급하고 마지막 활성함수를 생략(항등)하는 것이 일반적이다.
- **B.** 다중 레이블 회귀의 MSE는 레이블 벡터의 원소들에 대해서도 평균을 취한다.
- **C.** 다중 클래스 분류에서는 마지막 활성함수로 소프트맥스를 사용한다.
- **D.** 다중 클래스 분류의 손실함수로 교차엔트로피(CE)를 사용하며, 참 레이블은 one-hot으로 표현한다.
- **E.** 다중 클래스 분류에서는 출력층 뉴런이 1개면 충분하다.

**정답: A, B, C, D**

**해설** — 다중 레이블 회귀: y 벡터, 항등 활성함수 (A 참). MSE는 원소들에 대해서도 평균 (B 참). 다중 클래스 → 소프트맥스 (C 참). CE + one-hot (D 참). 다중 클래스에서는 클래스마다 출력 뉴런이 필요하다 (E 거짓).

> 티어 근거: Multi-label regression + multi-class classification setup

<details><summary>English</summary>

**Q.** Which of the following statements about regression with several labels and multiclass classification are true?

- **A.** In multi-label regression y is treated as a vector and the last activation function is usually omitted (identity).
- **B.** The MSE of multi-label regression also averages over the elements of the label vector.
- **C.** In multiclass classification the last activation function is softmax.
- **D.** Multiclass classification uses the cross-entropy (CE) loss and the true label is represented as one-hot.
- **E.** In multiclass classification one output neuron is enough.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: one output neuron per class is needed.

</details>

---

## L5-06 · 파라미터 표기(Θ, W, b)와 가설함수 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** MLP의 파라미터 표기와 가설함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** Θ는 모든 가중치 행렬과 편향 벡터를 포함하는 파라미터 집합을 나타낸다.
- **B.** 가중치 행렬은 W, 편향 벡터는 b로 표기하며, 이는 선형/로지스틱 회귀의 θ에 해당한다.
- **C.** b는 선형 회귀의 상수항(θ0) 역할을 대체한다.
- **D.** 2층 MLP의 가설함수는 h = g2(W2·g1(W1·x + b1) + b2) 형태로 쓸 수 있다.
- **E.** 출력층의 활성함수 g2는 과제와 무관하게 항상 시그모이드로 고정된다.

**정답: A, B, C, D**

**해설** — Θ = 전체 파라미터 집합 (A 참). W = 가중치 행렬, b = 편향 벡터 (B 참). b가 θ0 역할 (C 참). 2층 MLP 가설함수 (D 참). g2는 과제에 따라 달라진다(회귀는 항등, 이진분류는 시그모이드, 다중분류는 소프트맥스) (E 거짓). ⚠️ 함정: E — "과제와 무관하게 항상 시그모이드로 고정" → "과제에 따라 달라진다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the parameter notation of an MLP and its hypothesis function are true?

- **A.** Theta denotes the set of parameters that contains all weight matrices and bias vectors.
- **B.** Weight matrices are written W and bias vectors b; they correspond to theta in linear/logistic regression.
- **C.** b replaces the role of the constant term (theta0) of linear regression.
- **D.** The hypothesis function of a two-layer MLP can be written as h = g2(W2\*g1(W1\*x + b1) + b2).
- **E.** The output activation g2 is always fixed to sigmoid regardless of the task.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: g2 depends on the task (identity for regression, sigmoid for binary, softmax for multiclass). ⚠️ Trap: E — "always fixed to sigmoid regardless of the task" → "it depends on the task" would make it TRUE.

</details>

---

## L5-07 · 회귀에서의 출력 활성함수 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 회귀 과제를 위한 신경망의 출력층 활성함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 회귀에서는 마지막 활성함수를 생략(항등함수로 사용)하는 것이 일반적이다.
- **B.** 출력층에 시그모이드를 사용하면 출력이 0과 1 사이로 제한되어 나이 추정 같은 과제에 부적합할 수 있다.
- **C.** 출력층에 소프트맥스를 사용하면 출력의 합이 1이 되어 임의의 연속값 추정에 적합하다.
- **D.** 출력층 활성함수를 시그모이드로 두면 출력이 항상 음수가 될 수 없다.
- **E.** 회귀에서는 출력층에 어떤 활성함수를 쓰든 결과가 동일하다.

**정답: A, B, D**

**해설** — 회귀는 마지막 활성함수 생략(항등) (A 참). 시그모이드는 출력을 0~1로 제한해 나이 추정 등에 부적합 (B, D 참). 소프트맥스는 확률분포를 만들므로 회귀에 부적합 (C 거짓). 활성함수 선택에 따라 출력 범위와 성능이 달라진다 (E 거짓). ⚠️ 함정: C — "합이 1이 되어 임의의 연속값 추정에 적합" → "확률 분포용이라 부적합"이면 참. ⚠️ 함정: E — "어떤 활성함수를 쓰든 결과가 동일" → "활성함수에 따라 달라진다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the output activation function of a neural network used for a regression task are true?

- **A.** For regression it is usual to omit the last activation function (use the identity).
- **B.** Using a sigmoid in the output layer limits the output to between 0 and 1, which may be unsuitable for tasks such as age estimation.
- **C.** Using softmax in the output layer makes the outputs sum to 1, which is suitable for estimating arbitrary continuous values.
- **D.** If the output activation is sigmoid, the output can never be negative.
- **E.** For regression the result is the same no matter which output activation function is used.

**Answer: A, B, D**

**Explanation** — A true. B true. C false: softmax produces a probability distribution, which is unsuitable for regression. D true. E false: the choice of activation changes the output range and the performance. ⚠️ Trap: C — "sums to 1, so suitable for continuous values" → "it is for probability distributions" would make it TRUE. ⚠️ Trap: E — "the result is the same for any activation" → "it depends on the activation" would make it TRUE.

</details>

---

## L5-08 · 활성함수의 종류와 출력 범위 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 활성함수(activation function)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 시그모이드의 출력 범위는 (0, 1)이다.
- **B.** tanh의 출력 범위는 (−1, 1)이다.
- **C.** ReLU(Rectified Linear Unit)는 max(0, x) 형태이며 출력 범위는 [0, ∞)이다.
- **D.** ReLU는 계산이 간단하고 대부분의 경우 잘 동작한다.
- **E.** 항등함수(identity)의 출력 범위는 [0, 1]로 제한된다.

**정답: A, B, C, D**

**해설** — 시그모이드 (0,1), tanh (−1,1), ReLU [0,∞) (A, B, C 참). ReLU는 계산이 쉽고 대체로 잘 동작한다 (D 참). 항등함수는 입력을 그대로 출력하므로 범위 제한이 없다 (E 거짓). ⚠️ 함정: E — 항등함수의 출력은 실수 전체 — "[0, 1]로 제한된다"를 지우면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about activation functions are true?

- **A.** The output range of the sigmoid is (0, 1).
- **B.** The output range of tanh is (-1, 1).
- **C.** ReLU (Rectified Linear Unit) has the form max(0, x) and its output range is [0, infinity).
- **D.** ReLU is simple to compute and works well in most cases.
- **E.** The output range of the identity function is restricted to [0, 1].

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the identity function returns its input unchanged, so its range is not restricted. ⚠️ Trap: E — the identity output is unbounded — drop "restricted to [0, 1]" and it is TRUE.

</details>

---

## L5-09 · MNIST 데이터셋과 입력 차원 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** MNIST 손글씨 숫자 데이터셋에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 28 × 28 크기의 그레이스케일 이미지로 구성된다.
- **B.** 분류 범주는 10개(숫자 0 ~ 9)다.
- **C.** 훈련 예시는 60000개, 테스트 예시는 10000개다.
- **D.** 각 픽셀의 밝기가 입력 변수가 되므로 입력 변수는 784개다.
- **E.** 각 이미지의 레이블은 784차원 벡터다.

**정답: A, B, C, D**

**해설** — 28×28 그레이스케일 (A 참). 10개 범주 (B 참). 60k/10k (C 참). 28×28 = 784 입력 변수 (D 참). 레이블은 0~9 범주(one-hot으로는 10차원)이며 784차원이 아니다 (E 거짓).

> 티어 근거: MNIST: 784 inputs, 10 classes, 60k/10k

<details><summary>English</summary>

**Q.** Which of the following statements about the MNIST handwritten digit dataset are true?

- **A.** It consists of 28 x 28 grayscale images.
- **B.** There are 10 classes (the digits 0-9).
- **C.** There are 60000 training examples and 10000 test examples.
- **D.** The brightness of each pixel is an input variable, so there are 784 input variables.
- **E.** The label of each image is a 784-dimensional vector.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the label is a class (0-9); one-hot would be 10-dimensional, not 784.

</details>

---

## L5-10 · 소프트맥스 함수 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 소프트맥스(softmax) 함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 각 원소를 지수화한 뒤 그 합으로 나눈다.
- **B.** 출력 벡터의 원소 합이 1이 되므로 확률분포로 해석할 수 있다.
- **C.** 각 예시가 정확히 하나의 범주에 속한다는 가정에 부합한다.
- **D.** 다중 클래스 분류의 출력층 활성함수로 사용된다.
- **E.** 소프트맥스의 출력 원소는 음수가 될 수 있다.

**정답: A, B, C, D**

**해설** — 지수화 후 합으로 나눔 (A 참). 합 = 1 → 확률분포 (B 참). 한 범주에만 속한다는 가정 (C 참). 다중 클래스 출력층에서 사용 (D 참). 지수함수는 항상 양수이므로 출력도 항상 양수다 (E 거짓). ⚠️ 함정: E — "출력 원소는 음수가 될 수 있다" → "항상 양수다"이면 참.

> 티어 근거: Softmax

<details><summary>English</summary>

**Q.** Which of the following statements about the softmax function are true?

- **A.** Each element is exponentiated and then divided by the sum.
- **B.** The elements of the output vector sum to 1, so it can be interpreted as a probability distribution.
- **C.** It matches the assumption that each example belongs to exactly one class.
- **D.** It is used as the output activation of multiclass classification.
- **E.** The output elements of softmax can be negative.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the exponential is always positive, so the outputs are always positive. ⚠️ Trap: E — "outputs can be negative" → "they are always positive" would make it TRUE.

</details>

---

## L5-11 · 교차엔트로피와 one-hot 레이블 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 교차엔트로피(cross-entropy) 손실과 레이블 인코딩에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 교차엔트로피는 이진 교차엔트로피(BCE)의 일반화로 볼 수 있다.
- **B.** one-hot 인코딩에서 참 범주에 해당하는 원소는 1, 나머지는 0이다.
- **C.** 다중 클래스 분류에서 모델은 각 범주에 속할 확률을 추정하고, 정답 범주에 부여한 확률이 낮을수록 손실이 커진다.
- **D.** 교차엔트로피는 회귀 과제의 표준 손실함수다.
- **E.** one-hot 레이블은 각 예시가 여러 범주에 동시에 속한다고 가정한다.

**정답: A, B, C**

**해설** — CE는 BCE의 일반화 (A 참). one-hot 정의 (B 참). 정답 범주 확률이 낮으면 손실 증가 (C 참). CE는 분류용이며 회귀에는 MSE를 쓴다 (D 거짓). one-hot은 한 범주만 1이므로 단일 범주 가정에 부합한다 (E 거짓). ⚠️ 함정: E — "여러 범주에 동시에 속한다고 가정" → "하나의 범주만 갖는다"이면 참.

> 티어 근거: Cross-entropy with one-hot labels

<details><summary>English</summary>

**Q.** Which of the following statements about the cross-entropy (CE) loss and label encoding are true?

- **A.** Cross-entropy can be seen as a generalization of binary cross-entropy (BCE).
- **B.** In one-hot encoding the element of the true class is 1 and the others are 0.
- **C.** In multiclass classification the model estimates the probability of each class, and the lower the probability given to the correct class, the larger the loss.
- **D.** Cross-entropy is the standard loss function for regression tasks.
- **E.** One-hot labels assume that each example belongs to several classes at the same time.

**Answer: A, B, C**

**Explanation** — A true. B true. C true. D false: CE is for classification; regression uses MSE. E false: one-hot has a single 1, matching the single-class assumption. ⚠️ Trap: E — "belongs to several classes at once" → "belongs to exactly one" would make it TRUE.

</details>

---

## L5-12 · 미니배치 크기의 실무적 선택 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 미니배치 크기 선택에 관한 실무적 설명 중 옳은 것을 모두 고르시오.

- **A.** 큰 신경망에서는 GPU 메모리에 들어가는 만큼 미니배치를 크게 잡는 것이 효율적이다.
- **B.** 미니배치 크기를 작게만 쓸 수 있는 상황에서는 학습률을 낮춰 수렴을 돕는 것이 좋다.
- **C.** 미니배치가 크면 그래디언트 추정의 분산이 줄어 갱신 방향이 더 안정적이다.
- **D.** 미니배치가 작으면 스텝당 계산량이 줄어 더 자주 파라미터를 갱신할 수 있다.
- **E.** 미니배치 크기는 학습 결과에 전혀 영향을 주지 않는다.

**정답: A, B, C, D**

**해설** — GPU 메모리 기준으로 배치 크기 결정 (A 참). 작은 배치는 학습률을 낮춰야 함 (B 참). 큰 배치 → 분산 감소·안정적 갱신 (C 참). 작은 배치 → 스텝당 계산량 감소·갱신 빈도 증가 (D 참). 배치 크기는 학습 안정성과 속도에 큰 영향을 준다 (E 거짓). ⚠️ 함정: E — "미니배치 크기는 결과에 전혀 영향을 주지 않는다" → "영향을 준다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following practical statements about choosing the mini-batch size are true?

- **A.** For large neural networks it is efficient to use as large a mini-batch as fits in GPU memory.
- **B.** If only a small mini-batch can be used, lowering the learning rate helps convergence.
- **C.** A large mini-batch reduces the variance of the gradient estimate, so the update direction is more stable.
- **D.** A small mini-batch reduces the computation per step, so the parameters can be updated more often.
- **E.** The mini-batch size has no influence on the training result at all.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the batch size strongly affects the stability and the speed of training. ⚠️ Trap: E — "has no influence at all" → "does influence the result" would make it TRUE.

</details>

---

## L5-13 · NumPy와 PyTorch 비교 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** NumPy와 PyTorch를 비교한 설명 중 옳은 것을 모두 고르시오.

- **A.** NumPy는 CPU에서만 동작하지만 PyTorch는 GPU를 포함한 여러 장치를 지원한다.
- **B.** PyTorch는 계산 그래프와 자동 미분(autograd)을 지원한다.
- **C.** 두 라이브러리 모두 배열 프로그래밍(array programming)을 지원한다.
- **D.** PyTorch에서는 torch.nn.Linear, torch.nn.functional.sigmoid, torch.nn.BCELoss 같은 모듈을 사용할 수 있다.
- **E.** NumPy로는 로지스틱 회귀를 구현할 수 없고 PyTorch로만 구현할 수 있다.

**정답: A, B, C, D**

**해설** — NumPy는 CPU 전용, PyTorch는 다중 장치 지원 (A 참). PyTorch의 계산 그래프·자동 미분 (B 참). 둘 다 배열 프로그래밍 지원 (C 참). torch.nn 모듈들 (D 참). NumPy로도 로지스틱 회귀를 충분히 구현할 수 있다(그래디언트를 직접 계산) (E 거짓). ⚠️ 함정: E — "NumPy로는 구현할 수 없고 PyTorch로만" → "NumPy로도 구현할 수 있다"이면 참.

> 티어 근거: NumPy vs PyTorch (unmarked slides)

<details><summary>English</summary>

**Q.** Which of the following statements comparing NumPy and PyTorch are true?

- **A.** NumPy works only on the CPU, whereas PyTorch supports several devices including the GPU.
- **B.** PyTorch supports a computation graph and automatic differentiation (autograd).
- **C.** Both libraries support array programming.
- **D.** In PyTorch you can use modules such as torch.nn.Linear, torch.nn.functional.sigmoid and torch.nn.BCELoss.
- **E.** Logistic regression cannot be implemented with NumPy; only PyTorch can implement it.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: logistic regression can also be implemented with NumPy by computing the gradient yourself. ⚠️ Trap: E — "cannot be implemented with NumPy" → "can be implemented with NumPy" would make it TRUE.

</details>

---

## L5-14 · 뉴런 조합과 논리함수(XOR 문제) · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 뉴런을 조합해 논리함수를 구현하는 것에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 뉴런 2개로 AND, OR 같은 논리함수를 구현할 수 있다.
- **B.** 두 선형 결정면을 조합하면 더 복잡한 영역을 표현할 수 있다.
- **C.** XOR은 선형 분리 불가능하므로 단일 뉴런으로는 표현할 수 없다.
- **D.** XOR 문제는 다층 구조(은닉층)가 필요한 대표적 예시다.
- **E.** AND와 OR도 단일 뉴런으로는 표현할 수 없다.

**정답: A, B, C, D**

**해설** — AND/OR는 선형 분리 가능해 단일 뉴런으로 가능 (A 참). 두 결정면의 조합으로 복잡한 영역 표현 (B 참). XOR은 선형 분리 불가 (C 참). XOR → 은닉층 필요 (D 참). AND/OR는 단일 뉴런으로 표현 가능하다 (E 거짓). ⚠️ 함정: E — "AND와 OR도 단일 뉴런으로 표현할 수 없다" → "표현할 수 있다"이면 참.

> 티어 근거: Logic functions (AND/OR) with neurons / XOR

<details><summary>English</summary>

**Q.** Which of the following statements about implementing logic functions by combining neurons are true?

- **A.** Two neurons can implement logic functions such as AND and OR.
- **B.** Combining two linear decision surfaces allows more complex regions to be represented.
- **C.** XOR is not linearly separable, so it cannot be represented by a single neuron.
- **D.** The XOR problem is the classic example that requires a multilayer structure (a hidden layer).
- **E.** AND and OR also cannot be represented by a single neuron.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: AND and OR are linearly separable and can be represented by a single neuron. ⚠️ Trap: E — "AND and OR cannot be represented" → "they can be represented" would make it TRUE.

</details>

---

## L5-15 · MLP 학습과 자동 미분 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** MLP를 학습시키는 방법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 손실함수를 모든 파라미터에 대해 미분한 그래디언트를 이용해 파라미터를 갱신한다.
- **B.** PyTorch의 자동 미분(autograd)을 사용하면 그래디언트를 손으로 계산하지 않아도 된다.
- **C.** 파라미터 집합 Θ에는 모든 가중치 행렬의 원소와 편향 벡터의 원소가 포함된다.
- **D.** 학습은 훈련집합에서 손실을 줄이는 방향으로 파라미터를 반복 갱신하는 과정이다.
- **E.** MLP는 손실함수를 미분할 수 없으므로 경사하강법을 사용할 수 없다.

**정답: A, B, C, D**

**해설** — 그래디언트로 갱신 (A 참). autograd가 자동 계산 (B 참). Θ = 모든 가중치·편향 (C 참). 손실 최소화 방향으로 반복 갱신 (D 참). MLP의 손실은 미분 가능하며 경사하강법을 사용한다 (E 거짓). ⚠️ 함정: E — "미분할 수 없으므로 경사하강법을 쓸 수 없다" → "미분 가능하므로 쓸 수 있다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about how an MLP is trained are true?

- **A.** The parameters are updated using the gradient of the loss function with respect to all parameters.
- **B.** With PyTorch autograd you do not need to compute the gradients by hand.
- **C.** The parameter set Theta contains all the elements of the weight matrices and of the bias vectors.
- **D.** Training is the process of repeatedly updating the parameters in the direction that reduces the loss on the training set.
- **E.** An MLP cannot be trained with gradient descent because its loss function is not differentiable.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the loss of an MLP is differentiable, so gradient descent is used. ⚠️ Trap: E — "not differentiable, so gradient descent cannot be used" → "differentiable, so it can" would make it TRUE.

</details>

---

## L5-16 · 다중 클래스 분류의 출력과 예측 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 다중 클래스 분류 신경망의 출력과 예측 방식에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 출력층 뉴런 수는 클래스 개수와 같다.
- **B.** 소프트맥스 출력에서 가장 큰 값을 가진 인덱스가 최종 예측 클래스가 된다.
- **C.** 출력 벡터의 각 원소는 해당 클래스에 속할 확률로 해석할 수 있다.
- **D.** 정답 클래스의 one-hot 벡터와 예측 확률 벡터를 비교해 손실을 계산한다.
- **E.** 출력 벡터의 원소 합은 클래스 개수와 같다.

**정답: A, B, C, D**

**해설** — 출력 뉴런 = 클래스 수 (A 참). argmax가 예측 클래스 (B 참). 각 원소는 확률 (C 참). one-hot과 비교해 CE 계산 (D 참). 소프트맥스 출력의 합은 1이다 (E 거짓). ⚠️ 함정: E — "원소의 합은 클래스 개수와 같다" → "합은 1이다"이면 참.

> 티어 근거: Multi-class output and prediction

<details><summary>English</summary>

**Q.** Which of the following statements about the output and the prediction of a multiclass neural network are true?

- **A.** The number of output neurons equals the number of classes.
- **B.** The index with the largest value in the softmax output is the final predicted class.
- **C.** Each element of the output vector can be interpreted as the probability of belonging to that class.
- **D.** The loss is computed by comparing the one-hot vector of the true class with the predicted probability vector.
- **E.** The sum of the elements of the output vector equals the number of classes.

**Answer: A, B, C, D**

**Explanation** — A true. B true (argmax). C true. D true. E false: the sum of a softmax output is 1. ⚠️ Trap: E — "the sum equals the number of classes" → "the sum is 1" would make it TRUE.

</details>

---

## L5-17 · 과제별 마지막 활성함수와 손실함수 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 신경망에서 과제 유형에 따른 마지막 활성함수와 손실함수의 짝에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 회귀: 마지막 활성함수는 항등(생략), 손실은 MSE다.
- **B.** 이진 분류: 마지막 활성함수는 시그모이드, 손실은 로지스틱 손실(BCE)이다.
- **C.** 다중 클래스 분류: 마지막 활성함수는 소프트맥스, 손실은 교차엔트로피다.
- **D.** 다중 레이블 회귀: y는 벡터이며 MSE를 레이블 원소들에 대해서도 평균한다.
- **E.** 모든 과제에서 마지막 활성함수는 시그모이드로 통일하는 것이 표준이다.

**정답: A, B, C, D**

**해설** — 회귀: 항등 + MSE (A 참). 이진 분류: 시그모이드 + BCE (B 참). 다중 분류: 소프트맥스 + CE (C 참). 다중 레이블 회귀 (D 참). 마지막 활성함수는 과제에 따라 달라진다 (E 거짓). ⚠️ 함정: E — "모든 과제에서 마지막 활성함수는 시그모이드로 통일" → "과제에 따라 다르다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the pairing of the last activation function and the loss function are true?

- **A.** Regression: the last activation is identity (omitted) and the loss is MSE.
- **B.** Binary classification: the last activation is sigmoid and the loss is the logistic loss (BCE).
- **C.** Multiclass classification: the last activation is softmax and the loss is cross-entropy.
- **D.** Multi-label regression: y is a vector and the MSE is also averaged over the label elements.
- **E.** For every task the standard is to use sigmoid as the last activation.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the last activation depends on the task. ⚠️ Trap: E — "sigmoid for every task" → "it depends on the task" would make it TRUE.

</details>

---

## L5-18 · MNIST MLP의 파라미터 수 계산 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 784개 입력, 은닉층 800개 뉴런, 출력층 10개 뉴런으로 구성된 MLP(편향 포함)의 파라미터 수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 첫 번째 층(784 → 800)의 파라미터 수는 784 × 800 + 800 = 628000개다.
- **B.** 두 번째 층(800 → 10)의 파라미터 수는 800 × 10 + 10 = 8010개다.
- **C.** 전체 파라미터 수는 636010개다.
- **D.** 전체 파라미터 수는 784 × 800 + 800 × 10 = 635200개다.
- **E.** 이 정도 파라미터 수는 데이터 60000개에 비해 매우 적은 편이다.

**정답: A, B, C**

**해설** — 784×800 + 800(bias) = 628000 (A 참). 800×10 + 10 = 8010 (B 참). 합계 636010 (C 참). 편향을 빼면 635200이지만 편향을 포함해야 하므로 D는 거짓. 60k 데이터 대비 파라미터가 매우 많아 과대적합 위험이 있다 (E 거짓). ⚠️ 함정: E — "데이터에 비해 매우 적은 편" → "매우 많은 편"이면 참.

> 출처 메모: 784→(100/800)→10 숫자는 사이트가 만든 예시; 주제 "파라미터 수 세기"는 DOCX

<details><summary>English</summary>

**Q.** An MLP has 784 inputs, a hidden layer of 800 neurons and an output layer of 10 neurons (biases included). Which statements are true?

- **A.** The number of parameters of the first layer (784 -> 800) is 784 x 800 + 800 = 628000.
- **B.** The number of parameters of the second layer (800 -> 10) is 800 x 10 + 10 = 8010.
- **C.** The total number of parameters is 636010.
- **D.** The total number of parameters is 784 x 800 + 800 x 10 = 635200.
- **E.** This number of parameters is very small compared with the 60000 data points.

**Answer: A, B, C**

**Explanation** — A true. B true. C true. D false: it ignores the 810 biases. E false: 636k parameters for 60k examples makes overfitting a real risk. ⚠️ Trap: E — "very small compared with the data" → "very large" would make it TRUE.

</details>

---

## S1-10 · 회귀 MLP의 활성함수 선택 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 회귀를 위한 2층 MLP(20 입력 → 은닉 10 → 출력 1)의 활성함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** g₁ 은 ReLU 같은 비선형 함수여야 한다.
- **B.** g₂ 는 생략하는 것(항등함수)이 좋다.
- **C.** g₂ 는 시그모이드여야 한다.
- **D.** g₁ 과 g₂ 를 모두 제거하면 선형 회귀와 같은 모델이 된다.

**정답: A, B, D**

**해설** — 은닉층에는 비선형성이 필요하다 (A 참). 회귀의 출력은 범위 제한이 없어야 하므로 마지막 활성함수는 항등함수 (B 참). 시그모이드를 쓰면 출력이 (0,1)로 제한되어 회귀에 부적합하다 (C 거짓). 비선형성이 없으면 층을 쌓아도 하나의 선형변환과 같아진다 (D 참).

<details><summary>English</summary>

**Q.** For a 2-layer MLP for regression (20 inputs → 10 hidden → 1 output), which statements about the activations are true?

- **A.** g₁ should be a nonlinearity such as ReLU.
- **B.** g₂ should be omitted (identity).
- **C.** g₂ should be sigmoid.
- **D.** If both g₁ and g₂ are removed, the model is equivalent to linear regression.

**Answer: A, B, D**

**Explanation** — The hidden layer needs a nonlinearity (A true). A regression output must be unrestricted, so the last activation is the identity (B true). A sigmoid would limit the output to (0,1) (C false). Without nonlinearities the network collapses to a single linear map (D true).

</details>

---

## S1-11 · 소프트맥스의 성질과 갱신 규칙 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 소프트맥스(softmax)와 파라미터 갱신 규칙 θ := θ − α·grad 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 소프트맥스 출력은 항상 양수다.
- **B.** 소프트맥스 출력의 합은 1이다.
- **C.** 그래디언트는 J 가 가장 가파르게 증가하는 방향을 가리킨다.
- **D.** J 를 감소시키고 싶으므로 그래디언트를 뺀다.
- **E.** α 는 학습률(learning rate)이다.

**정답: A, B, C, D, E**

**해설** — 지수함수를 쓰므로 항상 양수 (A 참). 합이 1인 확률분포를 만든다 (B 참). 그래디언트는 최대 증가 방향 (C 참). 감소시키려면 반대 방향으로 이동해야 하므로 뺀다 (D 참). α 는 스텝 크기, 즉 학습률 (E 참).

<details><summary>English</summary>

**Q.** Which are true about softmax and the update rule θ := θ − α·grad?

- **A.** Softmax outputs are positive.
- **B.** Softmax outputs sum to 1.
- **C.** The gradient points toward the steepest increase of J.
- **D.** We subtract the gradient because we want to decrease J.
- **E.** α is the learning rate.

**Answer: A, B, C, D, E**

**Explanation** — The exponential makes every output positive (A true). The outputs form a probability distribution summing to 1 (B true). The gradient points in the direction of the steepest increase (C true). To decrease J we step in the opposite direction (D true). α is the step size, i.e. the learning rate (E true).

</details>

---

## S1-19 · 미니배치 SGD의 특성 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 미니배치 SGD 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 배치가 크면 메모리와 계산량이 더 필요하다.
- **B.** 배치가 크면 그래디언트 추정이 덜 잡음적이다.
- **C.** 배치가 작으면 추정의 분산이 커져 더 잡음적이다.
- **D.** 배치가 작을 때는 학습률을 더 작게 잡아야 할 수 있다.
- **E.** SGD 는 매 스텝마다 전체 데이터셋을 사용한다.

**정답: A, B, C, D**

**해설** — 배치가 크면 한 스텝의 메모리·계산 비용이 커진다 (A 참). 표본이 많을수록 평균 추정의 분산이 작아 그래디언트가 안정적이다 (B 참). 반대로 배치가 작으면 잡음이 커진다 (C 참). 잡음이 크면 발산을 막기 위해 학습률을 줄이는 경우가 있다 (D 참). 전체 데이터셋을 쓰는 것은 배치 경사하강법이다 (E 거짓).

<details><summary>English</summary>

**Q.** Which statements about mini-batch SGD are true?

- **A.** A larger batch needs more memory and compute.
- **B.** A larger batch gives a less noisy gradient estimate.
- **C.** A smaller batch gives a noisier (higher-variance) estimate.
- **D.** With small batches, we may need a smaller learning rate.
- **E.** SGD uses the entire dataset in every step.

**Answer: A, B, C, D**

**Explanation** — A larger batch costs more memory and compute per step (A true). More samples reduce the variance of the mean estimate (B true). Small batches are noisier (C true). Noisier gradients may require a smaller learning rate (D true). Using the whole dataset is batch gradient descent (E false).

</details>

---

## S1-20 · MLP 층 구성과 과제별 출력 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** MLP 의 층 구성에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 입력 '층'과 출력 '층'의 뉴런에는 파라미터가 없고, 파라미터는 층 사이 연결에 있다.
- **B.** 비선형성이 없으면 층을 쌓아도 하나의 선형 층과 같다.
- **C.** 이진 분류에는 시그모이드 출력 + 이진 교차엔트로피를 쓴다.
- **D.** 다중 클래스에는 소프트맥스 출력 + 교차엔트로피를 쓰고 정답 레이블은 one-hot 이다.
- **E.** torch.nn.Linear 는 완전연결층(fully connected)이다.

**정답: A, B, C, D, E**

**해설** — 입력은 데이터 자체이고 출력 뉴런도 값을 받기만 하므로, 파라미터는 층 사이의 가중치·편향에 있다 (A 참). 비선형성이 없으면 합성해도 선형 (B 참). 이진 분류 = 시그모이드 + BCE (C 참). 다중 클래스 = 소프트맥스 + 교차엔트로피 + one-hot (D 참). nn.Linear 는 W·x + b 완전연결층 (E 참).

<details><summary>English</summary>

**Q.** Which statements about the layer structure of an MLP are true?

- **A.** The input "layer" and output "layer" have no parameters.
- **B.** Without nonlinearities, stacked layers equal one linear layer.
- **C.** For binary classification: sigmoid output + binary cross-entropy.
- **D.** For multi-class: softmax output + cross-entropy, with a one-hot true label.
- **E.** `torch.nn.Linear` is a fully connected layer.

**Answer: A, B, C, D, E**

**Explanation** — The input is the data and the output neurons just receive values; the parameters live in the connections between layers (A true). Without nonlinearities the composition is still linear (B true). Binary classification uses sigmoid + BCE (C true). Multi-class uses softmax + cross-entropy with one-hot labels (D true). nn.Linear is a fully connected W·x + b layer (E true).

</details>

---

## S2-08 · 다중 클래스를 정수 회귀로 푸는 문제 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 다중 클래스 분류에서 클래스 이름을 그대로 회귀(예: 개 = 1, 고양이 = 2, 앵무새 = 3)로 예측할 때의 문제에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 회귀 모델은 클래스 사이에 순서와 거리 관계가 있다고 가정한다.
- **B.** ½마리 개 + ½마리 앵무새는 고양이 1마리와 같은 값으로 취급된다.
- **C.** 더 나은 방법은 클래스마다 확률을 하나씩 추정하는 것이다.
- **D.** 클래스 확률의 합은 1이어야 한다.
- **E.** 교차엔트로피와 함께 one-hot 레이블을 사용한다.

**정답: A, B, C, D, E**

**해설** — 정수 레이블은 잘못된 순서·거리 가정을 만든다 (A 참). 1과 3의 중간값 2가 고양이로 해석되는 문제가 생긴다 (B 참). 클래스별 확률 추정이 올바른 접근이다 (C 참). 확률분포이므로 합이 1 (D 참). 다중 클래스는 소프트맥스 + 교차엔트로피 + one-hot 을 쓴다 (E 참).

<details><summary>English</summary>

**Q.** Multi-class classification (dog = 1, cat = 2, parrot = 3 with plain regression).

- **A.** The regression model assumes an order and distances between classes.
- **B.** ½ dog + ½ parrot would be treated like 1 cat.
- **C.** A better way is to estimate one probability per class.
- **D.** The class probabilities should sum to 1.
- **E.** One-hot encoded labels are used with cross-entropy.

**Answer: A, B, C, D, E**

**Explanation** — Integer labels impose a wrong order and distance (A true). The midpoint of 1 and 3 is interpreted as a cat (B true). Estimating one probability per class is the right approach (C true). They form a distribution summing to 1 (D true). Multi-class uses softmax + cross-entropy with one-hot labels (E true).

</details>

---

## S2-10 · 다중 클래스 교차엔트로피 수치 계산 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 교차엔트로피 J = −(1/m) Σⱼ Σᵢ yᵢ log(ŷᵢ) 에서 어떤 예제의 참 레이블 y = [0, 1, 0, 0] 이고 추정값 ŷ = [0.64, 0.21, 0.06, 0.09] 일 때 옳은 것을 모두 고르시오.

- **A.** 이 예제의 손실은 −log(0.21) ≈ 1.56 (자연로그) 이다.
- **B.** 참 클래스의 항만 0이 아니다.
- **C.** 참 클래스의 ŷ 가 1 에 가까워지면 손실은 0 에 가까워진다.
- **D.** 클래스가 2개(K = 2)이면 이진 교차엔트로피와 같아진다.
- **E.** 참 레이블 y 는 소프트맥스 출력이다.

**정답: A, B, C, D**

**해설** — y 가 one-hot 이라 참 클래스 항만 남아 −log(0.21) ≈ 1.56 (A 참, B 참). ŷ → 1 이면 −log(1) = 0 (C 참). 클래스 2개면 BCE 와 같은 형태가 된다 (D 참). y 는 one-hot 정답 레이블이고 소프트맥스 출력은 ŷ 다 (E 거짓). ⚠️ 함정: E — "y 가 소프트맥스 출력" → "y 는 one-hot, ŷ 가 소프트맥스 출력"이면 참.

<details><summary>English</summary>

**Q.** Cross-entropy: J = −(1/m) Σⱼ Σᵢ yᵢ log(ŷᵢ). One example has true label y = [0, 1, 0, 0] and estimate ŷ = [0.64, 0.21, 0.06, 0.09].

- **A.** The loss for this example is −log(0.21) ≈ 1.56 (natural log).
- **B.** Only the true-class term is non-zero.
- **C.** If ŷ for the true class → 1, the loss → 0.
- **D.** For k = 2 it equals binary cross-entropy.
- **E.** The true label y is the softmax output.

**Answer: A, B, C, D**

**Explanation** — With a one-hot y only the true-class term survives: −log(0.21) ≈ 1.56 (A true, B true). As ŷ → 1 the loss → 0 (C true). With K = 2 it reduces to BCE (D true). y is the one-hot label and ŷ is the softmax output (E false). ⚠️ Trap: E — "y is the softmax output" → "y is one-hot and ŷ is the softmax output" would make it TRUE.

</details>

---

## S2-11 · MLP 파라미터 수(입력 3, 은닉 2, 출력 1) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 입력 n 개 → 은닉 뉴런 2개 → 출력 1개인 2층 MLP 에서 n = 3 일 때 옳은 것을 모두 고르시오.

- **A.** W₁ ∈ ℝ^(2×3)
- **B.** W₂ ∈ ℝ^(1×2)
- **C.** b₁ ∈ ℝ¹
- **D.** 전체 파라미터 수는 11개다.
- **E.** Θ 는 모든 가중치 행렬과 편향 벡터를 포함한다.

**정답: A, B, D, E**

**해설** — W₁ 은 (은닉, 입력) = 2×3 (A 참). W₂ 는 (출력, 은닉) = 1×2 (B 참). b₁ 은 은닉 뉴런 수만큼 2개이므로 ℝ² (C 거짓). 6 + 2 + 2 + 1 = 11 (D 참). Θ 는 모든 W 와 b 를 묶은 표기 (E 참).

<details><summary>English</summary>

**Q.** A two-layer MLP has n inputs, 2 hidden neurons, 1 output. Take n = 3.

- **A.** W₁ ∈ ℝ^(2×3)
- **B.** W₂ ∈ ℝ^(1×2)
- **C.** b₁ ∈ ℝ¹
- **D.** The total number of parameters is 11.
- **E.** Θ contains all weight matrices and bias vectors.

**Answer: A, B, D, E**

**Explanation** — W₁ is (hidden, input) = 2×3 (A true). W₂ is (output, hidden) = 1×2 (B true). b₁ has one element per hidden neuron, so it is in ℝ² (C false). 6 + 2 + 2 + 1 = 11 (D true). Θ collects all W and b (E true).

</details>

---

## S2-12 · MNIST MLP(784→100→10) 파라미터 수 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 28×28 이미지를 쓰는 MLP (784 → 100 → 10) 의 파라미터 수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 첫 번째 층은 78,500개다.
- **B.** 두 번째 층은 1,010개다.
- **C.** 전체는 79,510개다.
- **D.** 전체는 784 × 100 × 10 개다.
- **E.** 소프트맥스가 10개의 파라미터를 추가한다.

**정답: A, B, C**

**해설** — 784·100 + 100 = 78,500 (A 참). 100·10 + 10 = 1,010 (B 참). 합계 79,510 (C 참). 파라미터 수는 층별로 더한 값이며 곱이 아니다 (D 거짓). 소프트맥스는 학습 파라미터가 없다 (E 거짓). ⚠️ 함정: E — "소프트맥스가 10개 추가" → "소프트맥스는 학습 파라미터가 없다"이면 참.

> 출처 메모: 784→(100/800)→10 숫자는 사이트가 만든 예시; 주제 "파라미터 수 세기"는 DOCX

<details><summary>English</summary>

**Q.** Which statements about the number of parameters of an MLP for 28×28 images (784 → 100 → 10) are true?

- **A.** The first layer has 78,500 parameters.
- **B.** The second layer has 1,010 parameters.
- **C.** The total is 79,510 parameters.
- **D.** The total is 784 × 100 × 10.
- **E.** Softmax adds 10 extra parameters.

**Answer: A, B, C**

**Explanation** — 784·100 + 100 = 78,500 (A true). 100·10 + 10 = 1,010 (B true). The total is 79,510 (C true). Parameters are summed per layer, not multiplied (D false). Softmax has no learnable parameters (E false). ⚠️ Trap: E — "softmax adds 10 parameters" → "softmax has no learnable parameters" would make it TRUE.

</details>

---

## S2-13 · MLP 파라미터 수(4→8→4→3) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 4 입력 → 8 → 4 → 3 출력인 다중 클래스 MLP 의 파라미터 수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 1층은 40개다.
- **B.** 2층은 36개다.
- **C.** 3층은 15개다.
- **D.** 전체는 91개다.
- **E.** 마지막 활성함수는 소프트맥스가 적절하다.
- **F.** 마지막 활성함수는 항등함수가 적절하다.

**정답: A, B, C, D, E**

**해설** — 4·8 + 8 = 40 (A 참). 8·4 + 4 = 36 (B 참). 4·3 + 3 = 15 (C 참). 합계 91 (D 참). 다중 클래스 출력은 소프트맥스 (E 참, F 거짓). ⚠️ 함정: F — "마지막은 항등함수" → "소프트맥스"이면 참.

<details><summary>English</summary>

**Q.** An MLP with 4 inputs → 8 → 4 → 3 outputs (multi-class).

- **A.** Layer 1 has 40 parameters.
- **B.** Layer 2 has 36 parameters.
- **C.** Layer 3 has 15 parameters.
- **D.** The total is 91 parameters.
- **E.** The last activation should be softmax.
- **F.** The last activation should be the identity.

**Answer: A, B, C, D, E**

**Explanation** — 4·8 + 8 = 40 (A true). 8·4 + 4 = 36 (B true). 4·3 + 3 = 15 (C true). The total is 91 (D true). A multi-class output uses softmax, so E is true and F is false. ⚠️ Trap: F — "the last activation is the identity" → "it is softmax" would make it TRUE.

</details>

---

## S2-14 · 소프트맥스 수치 계산 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 소프트맥스의 계산 결과에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** softmax([0, 0, 0, 0]) = [0.25, 0.25, 0.25, 0.25]
- **B.** softmax([ln 2, 0]) = [2/3, 1/3]
- **C.** 모든 입력에 같은 상수를 더해도 출력은 변하지 않는다.
- **D.** 소프트맥스 출력은 음수가 될 수 있다.
- **E.** 출력의 합은 1이다.

**정답: A, B, C, E**

**해설** — 모든 입력이 같으면 균등분포가 된다 (A 참). e^(ln 2) = 2 이므로 2/3, 1/3 (B 참). 분자·분모에 같은 인수가 곱해져 약분되므로 상수 이동에 불변 (C 참). 지수함수라서 항상 양수 (D 거짓). 확률분포이므로 합이 1 (E 참). ⚠️ 함정: D — "음수가 될 수 있다" → "항상 양수다"이면 참.

<details><summary>English</summary>

**Q.** Which statements about the numerical results of softmax are true?

- **A.** softmax([0, 0, 0, 0]) = [0.25, 0.25, 0.25, 0.25]
- **B.** softmax([ln 2, 0]) = [2/3, 1/3]
- **C.** Adding the same constant to all inputs does not change the output.
- **D.** Softmax outputs can be negative.
- **E.** The outputs sum to 1.

**Answer: A, B, C, E**

**Explanation** — Equal inputs give the uniform distribution (A true). e^(ln 2) = 2, so the outputs are 2/3 and 1/3 (B true). A constant shift cancels in the ratio (C true). The exponential keeps outputs positive (D false). The outputs sum to 1 (E true). ⚠️ Trap: D — "can be negative" → "always positive" would make it TRUE.

</details>

---

## S2-21 · 에폭·스텝 계산과 최적화 알고리즘 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 훈련 예제가 60,000개이고 미니배치 크기가 100 일 때 옳은 것을 모두 고르시오.

- **A.** 1 에폭은 600 스텝이다.
- **B.** 배치 경사하강법은 1 에폭에 1 스텝이다.
- **C.** GPU 메모리가 배치 크기를 제한하는 경우가 많다.
- **D.** 배치가 작으면 스텝당 비용은 싸지만 잡음이 크다.
- **E.** Adam 과 RMSprop 은 SGD 의 변형이다.

**정답: A, B, C, D, E**

**해설** — 60,000 / 100 = 600 스텝 (A 참). 전체를 한 번에 쓰면 1 에폭에 1 스텝 (B 참). 배치가 크면 활성값·그래디언트 메모리가 커져 GPU 메모리가 제한 요인이 된다 (C 참). 작은 배치는 저렴하지만 분산이 크다 (D 참). Adam·RMSprop 은 적응적 학습률을 쓰는 SGD 계열이다 (E 참).

> 출처 메모: ⚠ 보기 E(Adam/RMSprop)는 ✗ 슬라이드(L5 s73); 에폭/스텝 계산은 강의 내용

<details><summary>English</summary>

**Q.** Training set has 60,000 examples, and the mini-batch size is 100.

- **A.** One epoch has 600 steps.
- **B.** Batch gradient descent takes 1 step per epoch.
- **C.** GPU memory often limits the batch size.
- **D.** A smaller batch gives a noisier but cheaper step.
- **E.** Adam and RMSprop are variants of SGD.

**Answer: A, B, C, D, E**

**Explanation** — 60,000 / 100 = 600 steps (A true). Using the whole set gives 1 step per epoch (B true). Large batches need more activation/gradient memory (C true). Small batches are cheap but noisy (D true). Adam and RMSprop are adaptive-learning-rate variants of SGD (E true).

</details>

---

## S2-22 · 단일 뉴런의 한계와 XOR 문제 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 단일 뉴런과 작은 신경망에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 두 개의 선형 결정경계를 2층 뉴런으로 결합할 수 있다(AND).
- **B.** 단일 뉴런은 AND 와 OR 를 표현할 수 있다.
- **C.** 단일 뉴런은 XOR 를 풀 수 있다.
- **D.** 은닉층이 없는 네트워크로 XOR 를 풀 수 있다.
- **E.** iris 예제에서 단일 직선으로 'versicolor' 를 분리할 수 없다.

**정답: A, B, E**

**해설** — 두 선형 경계를 AND 로 결합하면 비선형 영역을 표현할 수 있다 (A 참). AND·OR 는 선형 분리 가능하므로 단일 뉴런으로 표현된다 (B 참). XOR 는 선형 분리 불가라 단일 뉴런으로는 불가능하다 (C 거짓). 은닉층이 없으면 XOR 를 풀 수 없다 (D 거짓). iris 에서 versicolor 는 직선 하나로 분리되지 않는다 (E 참). ⚠️ 함정: C — "단일 뉴런으로 XOR 가능" → "불가능(은닉층 필요)"이면 참. ⚠️ 함정: D — "은닉층 없이 XOR" → "은닉층이 있어야"이면 참.

<details><summary>English</summary>

**Q.** Which statements about a single neuron and small neural networks are true?

- **A.** Two linear decision boundaries can be combined by a second-layer neuron (AND).
- **B.** A single neuron can represent AND and OR.
- **C.** A single neuron can solve XOR.
- **D.** A network without any hidden layer can solve XOR.
- **E.** In the iris example, a single straight line cannot isolate "versicolor".

**Answer: A, B, E**

**Explanation** — Combining two half-planes with AND gives a non-linear region (A true). AND and OR are linearly separable, so one neuron suffices (B true). XOR is not linearly separable, so a single neuron fails (C false). Without a hidden layer XOR cannot be solved (D false). In the iris example versicolor is not isolated by one line (E true). ⚠️ Trap: C — "a single neuron solves XOR" → "it cannot (a hidden layer is needed)" would make it TRUE. ⚠️ Trap: D — "without a hidden layer" → "with a hidden layer" would make it TRUE.

</details>

---

## S2-24 · MLP 활성함수의 역할 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** MLP 의 활성함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 중간층에는 항상 비선형성이 필요하다.
- **B.** 비선형성이 없는 선형층의 적층은 하나의 선형층과 같다.
- **C.** 마지막 활성함수는 과제에 따라 달라진다.
- **D.** ReLU 는 계산이 저렴하다.
- **E.** ReLU 의 출력은 임의의 실수값이 될 수 있다.

**정답: A, B, C, D**

**해설** — 비선형성이 없으면 표현력이 선형 모델과 같아지므로 중간층에 필요하다 (A·B 참). 회귀는 항등, 이진 분류는 시그모이드, 다중 클래스는 소프트맥스를 쓴다 (C 참). ReLU 는 max(0, z) 로 계산이 저렴하다 (D 참). ReLU 의 출력은 0 이상이다 (E 거짓). ⚠️ 함정: E — "임의의 실수" → "0 이상"이면 참.

<details><summary>English</summary>

**Q.** Which statements about activation functions in an MLP are true?

- **A.** We always need intermediate nonlinearities.
- **B.** Stacked linear layers without nonlinearities are equivalent to one linear layer.
- **C.** The last activation depends on the task.
- **D.** ReLU is cheap to compute.
- **E.** ReLU outputs can be any real number.

**Answer: A, B, C, D**

**Explanation** — Without nonlinearity the network is only linear, so intermediate nonlinearities are essential (A true, B true). The output activation depends on the task (C true). ReLU = max(0, z) is cheap (D true). ReLU outputs are ≥ 0 (E false). ⚠️ Trap: E — "any real number" → "≥ 0" would make it TRUE.

</details>

---

## M-04 · MLP 파라미터 계산과 활성함수·손실 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 입력 12개, 첫 층 뉴런 5개, 출력 뉴런 1개인 MLP 로 이진 분류를 한다. 옳은 것을 모두 고르시오.

- **A.** 첫 번째 층의 파라미터는 65개다.
- **B.** 전체 네트워크의 파라미터는 71개다.
- **C.** g₂ 는 시그모이드가 적절하다.
- **D.** 첫 활성함수 g₁ 은 표현력 손실 없이 생략할 수 있다.
- **E.** 손실함수는 이진 교차엔트로피가 적절하다.

**정답: A, B, C, E**

**해설** — 12·5 + 5 = 65 (A 참). 5·1 + 1 = 6 이므로 합계 71 (B 참). 이진 분류의 출력 활성함수는 시그모이드 (C 참). g₁ 을 생략하면 전체가 선형이 되어 표현력이 크게 떨어진다 (D 거짓). 이진 분류에는 BCE (E 참). ⚠️ 함정: D — "생략할 수 있다" → "생략할 수 없다"이면 참.

<details><summary>English</summary>

**Q.** An MLP solves a binary classification task with 12 input variables, 5 neurons in the first layer, and 1 output neuron. Which statements are true?

- **A.** The first layer has 65 parameters.
- **B.** The whole network has 71 parameters.
- **C.** g₂ should be a sigmoid.
- **D.** g₁ (the first activation) can be omitted without a loss in expressive power.
- **E.** The loss function should be binary cross-entropy.

**Answer: A, B, C, E**

**Explanation** — 12·5 + 5 = 65 (A true). The second layer has 5·1 + 1 = 6, so the total is 71 (B true). A binary output uses a sigmoid (C true). Omitting g₁ makes the whole network linear (D false). Binary classification uses BCE (E true). ⚠️ Trap: D — "can be omitted" → "cannot be omitted" would make it TRUE.

</details>

---

## M-08 · 파라미터 학습과 배치 크기의 영향 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 신경망 학습에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 파라미터(가중치)는 보통 경사하강법 계열 알고리즘으로 학습한다.
- **B.** 하이퍼파라미터는 보통 경사하강법으로 학습하지 않는다.
- **C.** 미니배치 SGD 에서 배치가 클수록 메모리가 더 필요하다.
- **D.** 배치가 작으면 그래디언트 추정이 더 잡음적이다.
- **E.** 배치가 크면 그래디언트 추정의 분산이 더 크다.

**정답: A, B, C, D**

**해설** — θ(W, b) 는 경사하강법 계열로 최적화한다 (A 참). 하이퍼파라미터는 미분 대상이 아니며 탐색으로 고른다 (B 참). 배치가 크면 활성값·그래디언트 메모리가 커진다 (C 참). 표본이 적으면 평균 추정의 분산이 커져 잡음이 커진다 (D 참). 배치가 크면 표본이 많아 오히려 분산이 \*\*작아진다\*\* (E 거짓). ⚠️ 함정: E — "분산이 더 크다" → "분산이 더 작다"이면 참.

<details><summary>English</summary>

**Q.** Training neural networks. Which statements are true?

- **A.** The parameters (weights) are usually trained with a gradient-descent-based algorithm.
- **B.** The hyperparameters are usually not trained with gradient descent.
- **C.** A larger batch size in mini-batch SGD needs more memory.
- **D.** A smaller batch size gives a noisier gradient estimate.
- **E.** A larger batch size gives a higher-variance gradient estimate.

**Answer: A, B, C, D**

**Explanation** — θ (W, b) is optimized by gradient descent (A true). Hyperparameters are not differentiable and are searched (B true). Larger batches need more activation/gradient memory (C true). Fewer samples give a higher-variance (noisier) estimate (D true). A larger batch gives LESS noise (lower variance) (E false). ⚠️ Trap: E — "higher-variance" → "lower-variance" would make it TRUE.

</details>

---

## M2-05 · 다중 클래스 교차엔트로피 수치 계산 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 다중 클래스 교차엔트로피 L = −Σᵢ yᵢ ln ŷᵢ 에서 참 레이블이 one-hot y = [0, 0, 1] 이고 추정값이 ŷ = [0.1, 0.2, 0.7] 일 때 (ln 0.7 ≈ −0.36, ln 3 ≈ 1.10) 옳은 것을 모두 고르시오.

- **A.** L ≈ 0.36 이다.
- **B.** 합에서 세 번째 항만 0이 아니다.
- **C.** ŷ = [1/3, 1/3, 1/3] 이면 L ≈ 1.10 이다.
- **D.** ŷ 의 원소 합은 1이어야 한다(소프트맥스 출력).
- **E.** y 의 원소들이 소프트맥스 출력이다.

**정답: A, B, C, D**

**해설** — one-hot 이므로 참 클래스 항만 남아 L = −ln 0.7 ≈ 0.36 (A 참, B 참). 균등 분포면 L = −ln(1/3) = ln 3 ≈ 1.10 (C 참). 소프트맥스 출력은 확률분포이므로 합이 1 (D 참). y 는 one-hot 정답 레이블이며 소프트맥스 출력은 ŷ 다 (E 거짓). ⚠️ 함정: E — "y 가 소프트맥스 출력" → "ŷ 가 소프트맥스 출력"이면 참.

<details><summary>English</summary>

**Q.** Cross-entropy for multi-class classification: L = −Σᵢ yᵢ ln ŷᵢ. The true label is one-hot y = [0, 0, 1], and the estimate is ŷ = [0.1, 0.2, 0.7]. (ln 0.7 ≈ −0.36, ln 3 ≈ 1.10.) Which statements are true?

- **A.** L ≈ 0.36.
- **B.** Only the third term of the sum is non-zero.
- **C.** If ŷ = [1/3, 1/3, 1/3], then L ≈ 1.10.
- **D.** The elements of ŷ should sum to 1 (softmax output).
- **E.** The elements of y are the softmax outputs.

**Answer: A, B, C, D**

**Explanation** — With a one-hot label only the true-class term survives: L = −ln 0.7 ≈ 0.36 (A true, B true). With a uniform estimate L = −ln(1/3) = ln 3 ≈ 1.10 (C true). A softmax output is a probability distribution, so it sums to 1 (D true). y is the one-hot label; the softmax output is ŷ (E false). ⚠️ Trap: E — "y is the softmax output" → "ŷ is the softmax output" would make it TRUE.

</details>

---

## M2-06 · 2층 MLP의 행렬 shape과 파라미터 수 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 2층 MLP h(x) = g₂(W₂ g₁(W₁x + b₁) + b₂) 에서 입력 변수 n = 10, 은닉 뉴런 6개, 출력 클래스 k = 3 (다중 클래스) 일 때 옳은 것을 모두 고르시오.

- **A.** W₁ ∈ ℝ^(6×10)
- **B.** W₂ ∈ ℝ^(3×6)
- **C.** b₂ ∈ ℝ³
- **D.** 네트워크의 전체 파라미터는 87개다.
- **E.** W₁x + b₁ ∈ ℝ¹⁰
- **F.** g₂ 는 항등함수여야 한다.

**정답: A, B, C, D**

**해설** — W₁ 은 (은닉, 입력) = 6×10 (A 참). W₂ 는 (출력, 은닉) = 3×6 (B 참). b₂ 는 출력 뉴런 수만큼 3개 (C 참). 6·10+6 + 3·6+3 = 66+21 = 87 (D 참). W₁x + b₁ 은 은닉층 크기인 ℝ⁶ 이다 (E 거짓). 다중 클래스 출력은 소프트맥스 (F 거짓).

<details><summary>English</summary>

**Q.** Two-layer MLP: h(x) = g₂(W₂ g₁(W₁x + b₁) + b₂). The input has n = 10 variables, the hidden layer has 6 neurons, and the output has k = 3 classes (multi-class classification). Which statements are true?

- **A.** W₁ ∈ ℝ^(6×10)
- **B.** W₂ ∈ ℝ^(3×6)
- **C.** b₂ ∈ ℝ³
- **D.** The network has 87 parameters.
- **E.** W₁x + b₁ ∈ ℝ¹⁰
- **F.** g₂ should be the identity.

**Answer: A, B, C, D**

**Explanation** — W₁ is (hidden, input) = 6×10 (A true). W₂ is (output, hidden) = 3×6 (B true). b₂ has one element per output neuron, so it is in ℝ³ (C true). 6·10+6 + 3·6+3 = 66+21 = 87 (D true). W₁x + b₁ lives in the hidden space ℝ⁶ (E false). A multi-class output uses softmax (F false).

</details>

---

## M2-08 · 시그모이드의 도함수 계산 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 시그모이드 f(x) = 1/(1 + e⁻ˣ) 에 대해 (f(ln 3) = 0.75) 옳은 것을 모두 고르시오.

- **A.** f′(0) = 0.25 다.
- **B.** f′(x) = f(x)(1 − f(x)) 다.
- **C.** f′(ln 3) = 3/16 이다.
- **D.** f′(x) = e⁻ˣ/(1 + e⁻ˣ)² 이다.
- **E.** f′(x) 의 최댓값은 1이다.

**정답: A, B, C, D**

**해설** — f′(0) = 0.5·0.5 = 0.25 (A 참). 시그모이드의 도함수는 f(1−f) (B 참). f′(ln 3) = 0.75·0.25 = 0.1875 = 3/16 (C 참). e⁻ˣ/(1+e⁻ˣ)² 는 f′ 의 동치 표현 (D 참). f′ 의 최댓값은 x = 0 에서 0.25 이다 (E 거짓). ⚠️ 함정: E — "최댓값은 1" → "최댓값은 0.25"이면 참.

> 티어 근거: Derivative of the sigmoid (lecture example) — numbers are mine

> 출처 메모: 시그모이드 도함수 (L6 연쇄법칙 예제)

<details><summary>English</summary>

**Q.** Sigmoid: f(x) = 1/(1 + e⁻ˣ). Which statements are true? (Use f(ln 3) = 0.75.)

- **A.** f′(0) = 0.25.
- **B.** f′(x) = f(x)(1 − f(x)).
- **C.** f′(ln 3) = 3/16.
- **D.** f′(x) = e⁻ˣ/(1 + e⁻ˣ)².
- **E.** The maximum value of f′(x) is 1.

**Answer: A, B, C, D**

**Explanation** — f′(0) = 0.5·0.5 = 0.25 (A true). The derivative of the sigmoid is f(1−f) (B true). f′(ln 3) = 0.75·0.25 = 0.1875 = 3/16 (C true). e⁻ˣ/(1+e⁻ˣ)² is an equivalent form of f′ (D true). The maximum of f′ is 0.25 at x = 0 (E false). ⚠️ Trap: E — "the maximum is 1" → "the maximum is 0.25" would make it TRUE.

</details>

---

## D-25 · 회귀 MLP(20→10→1)의 파라미터와 활성함수 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** h(x) = g₂(W₂·g₁(W₁x + b₁) + b₂) 형태의 MLP 로 20개 입력 변수에서 연속값 하나를 추정하는 회귀 과제를 푼다. 첫 층 뉴런은 10개다. 옳은 것을 모두 고르시오.

- **A.** 네트워크의 전체 파라미터는 221개다.
- **B.** 첫 번째 층의 파라미터는 210개다.
- **C.** g₁ 을 생략하는 것이 좋다.
- **D.** g₂ 를 생략(항등함수)하는 것이 좋다.
- **E.** g₂ 는 시그모이드여야 한다.
- **F.** W₁ 의 shape 은 10×20 이다.

**정답: A, B, D, F**

**해설** — 20·10 + 10 = 210 (B 참), 10 + 1 = 11, 합계 221 (A 참). W₁ 은 (은닉, 입력) = 10×20 (F 참). g₁ 은 비선형성이므로 반드시 필요하다 (C 거짓). 회귀의 출력은 제한이 없어야 하므로 g₂ 는 항등함수 (D 참, E 거짓). ⚠️ 함정: C — "g₁을 생략" → "g₁은 반드시 유지"이면 참. ⚠️ 함정: E — "시그모이드" → "항등함수"이면 참.

<details><summary>English</summary>

**Q.** Consider h(x) = g₂(W₂·g₁(W₁x + b₁) + b₂). We use this MLP for a regression task with 20 input variables, estimating a single continuous value, with 10 neurons in the first layer. Which statements are true?

- **A.** The whole network has 221 parameters.
- **B.** The first layer has 210 parameters.
- **C.** We should omit g₁.
- **D.** We should omit g₂ (use the identity).
- **E.** g₂ should be a sigmoid.
- **F.** W₁ has shape 10×20.

**Answer: A, B, D, F**

**Explanation** — 20·10 + 10 = 210 (B true) and 10 + 1 = 11, so the total is 221 (A true). W₁ is (hidden, input) = 10×20 (F true). g₁ provides the nonlinearity and must stay (C false). A regression output must be unrestricted, so g₂ is the identity (D true, E false). ⚠️ Trap: C — "omit g₁" → "keep g₁" would make it TRUE. ⚠️ Trap: E — "a sigmoid" → "the identity" would make it TRUE.

</details>

---

## D-26 · 이진 분류 MLP(20→10→1)의 설정 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** h(x) = g₂(W₂·g₁(W₁x + b₁) + b₂) 형태의 MLP(입력 20개, 첫 층 뉴런 10개, 출력 뉴런 1개)를 이진 분류에 쓸 때 옳은 것을 모두 고르시오.

- **A.** 네트워크의 전체 파라미터는 221개다.
- **B.** g₂ 는 시그모이드여야 한다.
- **C.** 손실함수는 이진 교차엔트로피가 적절하다.
- **D.** g₁ 을 생략하는 것이 좋다.
- **E.** g₂ 를 생략하는 것이 좋다.

**정답: A, B, C**

**해설** — 파라미터 수는 20·10+10 + 10+1 = 221 (A 참). 이진 분류 출력은 시그모이드 (B 참). 손실은 BCE (C 참). g₁ 은 비선형성으로 필요하고 (D 거짓), g₂ 는 확률로 제한해야 하므로 생략하면 안 된다 (E 거짓). ⚠️ 함정: D — "g₁을 생략" → "g₁은 반드시 유지"이면 참. ⚠️ 함정: E — "g₂를 생략" → "g₂는 시그모이드"이면 참.

<details><summary>English</summary>

**Q.** The MLP h(x) = g₂(W₂·g₁(W₁x + b₁) + b₂) (20 inputs, 10 first-layer neurons, one output neuron) is used for binary classification. Which statements are true?

- **A.** The whole network has 221 parameters.
- **B.** g₂ should be a sigmoid.
- **C.** The loss should be binary cross-entropy.
- **D.** We should omit g₁.
- **E.** We should omit g₂.

**Answer: A, B, C**

**Explanation** — The parameter count is 20·10+10 + 10+1 = 221 (A true). A binary output uses a sigmoid (B true). The loss is BCE (C true). g₁ provides the nonlinearity (D false) and g₂ must limit the output to a probability (E false). ⚠️ Trap: D — "omit g₁" → "keep g₁" would make it TRUE. ⚠️ Trap: E — "omit g₂" → "g₂ is a sigmoid" would make it TRUE.

</details>

---

## D-27 · 다중 클래스 MLP(20→10→5)의 shape과 파라미터 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** h(x) = g₂(W₂·g₁(W₁x + b₁) + b₂) 형태의 MLP 를 다중 클래스 분류에 쓴다. 입력 20개, 첫 층 뉴런 10개, 클래스 5개일 때 옳은 것을 모두 고르시오.

- **A.** W₂ 의 shape 은 5×10 이다.
- **B.** 네트워크의 전체 파라미터는 265개다.
- **C.** g₂ 는 소프트맥스여야 한다.
- **D.** 손실함수는 (범주형) 교차엔트로피가 적절하다.
- **E.** 5개 출력의 합은 1이다.
- **F.** g₂ 는 항등함수여야 한다.

**정답: A, B, C, D, E**

**해설** — W₂ 는 (출력, 은닉) = 5×10 (A 참). 첫 층 210 + 둘째 층(5·10 + 5 = 55) = 265 (B 참). 다중 클래스 출력은 소프트맥스 + 교차엔트로피 (C·D 참) 이므로 출력의 합이 1 (E 참). 항등함수는 아니다 (F 거짓). ⚠️ 함정: F — "항등함수" → "소프트맥스"이면 참.

<details><summary>English</summary>

**Q.** The MLP h(x) = g₂(W₂·g₁(W₁x + b₁) + b₂) is used for multi-class classification with 20 inputs, 10 first-layer neurons and 5 classes. Which statements are true?

- **A.** W₂ has shape 5×10.
- **B.** The whole network has 265 parameters.
- **C.** g₂ should be softmax.
- **D.** The loss should be (categorical) cross-entropy.
- **E.** The 5 outputs sum to 1.
- **F.** g₂ should be the identity.

**Answer: A, B, C, D, E**

**Explanation** — W₂ is (output, hidden) = 5×10 (A true). 210 in the first layer + (5·10 + 5 = 55) in the second = 265 (B true). A multi-class output uses softmax + cross-entropy (C and D true), so the outputs sum to 1 (E true). It is not the identity (F false). ⚠️ Trap: F — "the identity" → "softmax" would make it TRUE.

</details>

---

## D-28 · 활성함수의 모양과 출력 범위 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 활성함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 시그모이드: S자 모양, 범위 (0, 1), g(0) = 0.5 다.
- **B.** tanh: S자 모양, 범위 (−1, 1), g(0) = 0 이다.
- **C.** ReLU: 음수 입력에서는 0, 양수 입력에서는 입력값 그대로이며 범위는 [0, ∞) 다.
- **D.** ReLU 의 범위는 (−1, 1)이다.
- **E.** 시그모이드의 범위는 (−1, 1)이다.

**정답: A, B, C**

**해설** — 시그모이드는 S자, (0,1), g(0)=0.5 (A 참). tanh 는 S자, (−1,1), g(0)=0 (B 참). ReLU 는 max(0,z) 로 범위 [0,∞) (C 참). ReLU 는 (−1,1) 이 아니고 (D 거짓) 시그모이드도 (−1,1) 이 아니다 (E 거짓). ⚠️ 함정: D — "(−1, 1)" → "[0, ∞)"이면 참. ⚠️ 함정: E — "(−1, 1)" → "(0, 1)"이면 참.

<details><summary>English</summary>

**Q.** Which statements about activation functions are true?

- **A.** Sigmoid: S-shaped, range (0, 1), g(0) = 0.5.
- **B.** tanh: S-shaped, range (−1, 1), g(0) = 0.
- **C.** ReLU: 0 for negative inputs, equal to the input for positive inputs, range [0, ∞).
- **D.** ReLU: range (−1, 1).
- **E.** Sigmoid: range (−1, 1).

**Answer: A, B, C**

**Explanation** — The sigmoid is S-shaped with range (0,1) and g(0) = 0.5 (A true). tanh is S-shaped with range (−1,1) and g(0) = 0 (B true). ReLU is max(0,z) with range [0,∞) (C true). ReLU is not (−1,1) (D false) and neither is the sigmoid (E false). ⚠️ Trap: D — "range (−1, 1)" → "range [0, ∞)" would make it TRUE. ⚠️ Trap: E — "range (−1, 1)" → "range (0, 1)" would make it TRUE.

</details>

---

## D-33 · SGD와 미니배치의 정의 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 확률적 경사하강법(SGD)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 전체 훈련집합이 아니라 무작위로 선택한 부분집합에서 그래디언트를 계산한다.
- **B.** 그 부분집합을 미니배치(mini-batch)라고 부른다.
- **C.** SGD 는 항상 정확히 훈련 예시 1개만 사용하며 그보다 많을 수 없다.
- **D.** 매 스텝마다 전체 훈련집합에서 그래디언트를 계산하는 것이 '배치' 경사하강법이다.

**정답: A, B, D**

**해설** — SGD 는 무작위로 뽑은 미니배치에서 그래디언트를 계산한다 (A 참, B 참). 예시 1개는 미니배치 크기가 1인 극단적 경우일 뿐이다 (C 거짓). 전체 집합을 쓰는 것이 배치 경사하강법 (D 참). ⚠️ 함정: C — "정확히 1개만" → "미니배치 크기는 조절 가능"이면 참.

<details><summary>English</summary>

**Q.** Which statements about stochastic gradient descent (SGD) are true?

- **A.** SGD computes the gradient on a randomly selected sub-sample of the data, not on the whole training set.
- **B.** The sub-sample is called a mini-batch.
- **C.** SGD always uses exactly one training example per step, and never more.
- **D.** Computing the gradient on the whole training set at every step is the "batch" gradient descent.

**Answer: A, B, D**

**Explanation** — SGD computes the gradient on a randomly chosen mini-batch (A and B true). A single example is only the extreme case (C false). Using the whole set is batch gradient descent (D true). ⚠️ Trap: C — "exactly one example" → "the batch size is adjustable" would make it TRUE.

</details>

---

## D-34 · 배치 크기를 늘리면 생기는 변화 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 미니배치 SGD 에서 배치 크기를 늘리면 어떻게 되는지 옳은 것을 모두 고르시오.

- **A.** 그래디언트 추정이 덜 잡음적이 된다(분산이 작아진다).
- **B.** 스텝마다 더 많은 계산과 메모리가 필요하다.
- **C.** 그래디언트 추정이 더 잡음적이 된다.
- **D.** 그래디언트 추정이 전체 훈련집합의 그래디언트에 더 가까워진다.

**정답: A, B, D**

**해설** — 배치가 크면 표본이 많아져 분산이 작아지고 추정이 안정적이다 (A 참). 계산·메모리 비용은 커진다 (B 참). 더 잡음적이 된다는 것은 반대 (C 거짓). 배치가 클수록 전체 집합의 그래디언트에 가까워진다 (D 참). ⚠️ 함정: C — "더 잡음적" → "덜 잡음적"이면 참.

<details><summary>English</summary>

**Q.** In mini-batch SGD, if we increase the batch size:

- **A.** The gradient estimate becomes less noisy (lower variance).
- **B.** Each step needs more computation and memory.
- **C.** The gradient estimate becomes noisier.
- **D.** The gradient estimate is closer to the gradient of the full training set.

**Answer: A, B, D**

**Explanation** — More samples reduce the variance and stabilize the estimate (A true). The cost per step grows (B true). 'Noisier' is the opposite (C false). A larger batch gets closer to the full-set gradient (D true). ⚠️ Trap: C — "noisier" → "less noisy" would make it TRUE.

</details>

---

## D-35 · 배치 크기를 줄이면 생기는 변화 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 미니배치 SGD 에서 배치 크기를 줄이면 어떻게 되는지 옳은 것을 모두 고르시오.

- **A.** 그래디언트 추정이 더 잡음적이 된다(분산이 커진다).
- **B.** 스텝당 비용이 싸진다(계산·메모리가 적다).
- **C.** 그래디언트 추정이 더 정확해진다.
- **D.** 더 작은 학습률이 필요할 수 있다.

**정답: A, B, D**

**해설** — 배치가 작으면 분산이 커져 잡음이 커진다 (A 참). 스텝당 비용은 싸진다 (B 참). 추정이 더 정확해지는 것이 아니라 부정확해진다 (C 거짓). 잡음이 크면 발산을 막기 위해 학습률을 줄이는 경우가 있다 (D 참). ⚠️ 함정: C — "더 정확해진다" → "덜 정확해진다"이면 참.

<details><summary>English</summary>

**Q.** In mini-batch SGD, if we decrease the batch size:

- **A.** The gradient estimate becomes noisier (higher variance).
- **B.** Each step is cheaper (less computation and memory).
- **C.** The gradient estimate becomes more exact.
- **D.** A smaller learning rate may be needed.

**Answer: A, B, D**

**Explanation** — A smaller batch has higher variance (A true). Each step is cheaper (B true). The estimate becomes less exact, not more (C false). With more noise a smaller learning rate may be needed (D true). ⚠️ Trap: C — "more exact" → "less exact" would make it TRUE.

</details>

---

# Lecture 6 — 역전파 · 계산 그래프 · PyTorch (20문항)

## L6-01 · 계산 그래프와 역전파 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 계산 그래프(computational graph)와 역전파(backpropagation) 알고리즘에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 역전파는 연쇄법칙을 적용해 손실(Loss)에서 입력 방향으로 그래디언트를 전달한다.
- **B.** 계산 그래프에서 노드는 기본 연산, 간선은 연산들의 연결(합성)을 나타낸다.
- **C.** 덧셈 노드(c = a + b)는 상류에서 전달된 그래디언트를 변형 없이 양쪽으로 전달한다.
- **D.** 역전파는 그래디언트 계산에서 반복되는 부분식을 저장해 재계산을 피한다.
- **E.** 역전파를 사용하면 파라미터별 그래디언트를 순전파보다 훨씬 비효율적으로 계산하게 된다.

**정답: A, B, C, D**

**해설** — 역전파는 연쇄법칙 기반, 출력에서 입력 방향으로 전달 (A 참). 노드 = 기본 연산, 간선 = 연결 (B 참). 덧셈 노드는 그래디언트를 그대로 복사해 전달 (C 참). 같은 항이 여러 도함수에 반복 등장하므로 중간 결과를 저장해 재계산을 피함 = 역전파의 핵심 (D 참). 역전파는 미분 계산을 효율화한다 (E 거짓). ⚠️ 함정: E — "순전파보다 훨씬 비효율적으로 계산" → "훨씬 효율적으로 계산"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the computational graph and the backpropagation algorithm are true?

- **A.** Backpropagation applies the chain rule to pass the gradient from the loss towards the input.
- **B.** In a computation graph the nodes are elementary operations and the edges represent the connections (composition) of those operations.
- **C.** An addition node (c = a + b) passes the upstream gradient unchanged to both inputs.
- **D.** Backpropagation stores the repeated sub-expressions of the gradient computation to avoid recomputing them.
- **E.** Using backpropagation makes the per-parameter gradient computation far less efficient than the forward pass.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: backpropagation makes the derivative computation efficient. ⚠️ Trap: E — "far less efficient than the forward pass" → "far more efficient" would make it TRUE.

</details>

---

## L6-02 · 게이트별 그래디언트 계산 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 계산 그래프에서 상류 그래디언트 grad_c = ∂J/∂c 가 주어졌을 때, 각 노드의 역전파에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** c = b² 인 제곱 노드에서 grad_b = grad_c × 2b 이다.
- **B.** c = b² 인 제곱 노드에서 grad_b = grad_c × 2c 이다.
- **C.** c = a + b 인 덧셈 노드에서 grad_a = grad_b = grad_c 이다.
- **D.** c = a × b 인 곱셈 노드에서 grad_a = grad_c × b 이다.
- **E.** c = a × b 인 곱셈 노드에서 grad_a = grad_c × a 이다.

**정답: A, C, D**

**해설** — 제곱 노드: ∂c/∂b = 2b → grad_b = grad_c × 2b (A 참, B 거짓). 덧셈 노드: ∂c/∂a = ∂c/∂b = 1 → 그대로 전달 (C 참). 곱셈 노드: 상대편 입력값을 곱함 → grad_a = grad_c × b, grad_b = grad_c × a (D 참, E 거짓). ⚠️ 함정: B — "grad_b = grad_c × 2c" → "grad_b = grad_c × 2b"이면 참. ⚠️ 함정: E — "grad_a = grad_c × a" → "grad_a = grad_c × b"이면 참.

> 출처 메모: 곱셈 노드(D·E)는 강의 내용; 제곱·덧셈 노드가 DOCX

<details><summary>English</summary>

**Q.** In a computation graph, given the upstream gradient grad_c = dJ/dc, which statements about the backpropagation of each node are true?

- **A.** For the square node c = b^2, grad_b = grad_c x 2b.
- **B.** For the square node c = b^2, grad_b = grad_c x 2c.
- **C.** For the addition node c = a + b, grad_a = grad_b = grad_c.
- **D.** For the multiplication node c = a x b, grad_a = grad_c x b.
- **E.** For the multiplication node c = a x b, grad_a = grad_c x a.

**Answer: A, C, D**

**Explanation** — Square node: dc/db = 2b (A true, B false). Addition node: dc/da = dc/db = 1 (C true). A multiplication node multiplies by the other input: grad_a = grad_c x b, grad_b = grad_c x a (D true, E false). ⚠️ Trap: B — "grad_c x 2c" → "grad_c x 2b" would make it TRUE. ⚠️ Trap: E — "grad_c x a" → "grad_c x b" would make it TRUE.

</details>

---

## L6-03 · 역전파 알고리즘의 6단계 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 역전파 알고리즘의 절차(6단계)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 1단계는 기호적 미분(symbolic derivation)이다.
- **B.** 2단계는 파라미터 초기화(예: 무작위 값)다.
- **C.** 3단계는 훈련집합에서 예시(또는 미니배치)를 선택하는 것이다.
- **D.** 4단계는 실제 데이터와 현재 파라미터 값을 대입하는 순전파(feed forward)다.
- **E.** 5단계는 순전파이고 6단계가 기호적 미분이다.

**정답: A, B, C, D**

**해설** — 6단계: ① 기호적 미분(A 참) ② 파라미터 초기화(B 참) ③ 예시/미니배치 선택(C 참) ④ 순전파(대입)(D 참) ⑤ 역전파(대입) ⑥ 파라미터 갱신 후 ③으로 반복. 따라서 E는 거짓 — 5단계는 역전파, 6단계는 파라미터 갱신 후 ③으로 돌아가는 단계다.

> 티어 근거: The 6 steps of backpropagation

<details><summary>English</summary>

**Q.** Which of the following statements about the procedure (6 steps) of the backpropagation algorithm are true?

- **A.** Step 1 is symbolic derivation.
- **B.** Step 2 is parameter initialization (for example with random values).
- **C.** Step 3 is selecting an example (or a mini-batch) from the training set.
- **D.** Step 4 is the forward pass (feed forward), substituting the actual data and the current parameter values.
- **E.** Step 5 is the forward pass and step 6 is the symbolic derivation.

**Answer: A, B, C, D**

**Explanation** — Six steps: 1 symbolic derivation (A true), 2 parameter initialization (B true), 3 select an example/mini-batch (C true), 4 forward pass / substitution (D true), 5 backward pass / substitution, 6 update the parameters and go back to step 3. So E is false — step 5 is the backward pass and step 6 is the parameter update followed by returning to step 3.

</details>

---

## L6-04 · 역전파의 순전파/역전파 대입 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 역전파 절차에서의 대입(substitution) 단계에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 순전파 단계에서는 입력/출력 변수에 훈련집합의 실제 데이터를 대입한다.
- **B.** 순전파 단계에서는 파라미터 변수에 현재 파라미터 값을 대입한다.
- **C.** 역전파 단계에서는 미리 기호적으로 구해둔 그래디언트 식에 값을 대입해 그래디언트를 계산한다.
- **D.** 파라미터 갱신 후 새 파라미터로 손실값을 다시 계산하면 손실이 감소했는지 확인할 수 있다.
- **E.** 순전파 단계에서는 파라미터 대신 다음 스텝의 그래디언트 값을 대입한다.

**정답: A, B, C, D**

**해설** — 순전파에서 데이터와 현재 파라미터를 대입 (A, B 참). 역전파에서 그래디언트 식에 값을 대입 (C 참). 갱신 후 손실을 재계산해 감소 확인 (D 참). 순전파에는 현재 파라미터를 대입하며 그래디언트는 역전파 단계에서 계산한다 (E 거짓).

> 티어 근거: Forward / backward substitution steps

<details><summary>English</summary>

**Q.** Which of the following statements about the substitution step of the backpropagation procedure are true?

- **A.** In the forward pass the actual data of the training set is substituted into the input/output variables.
- **B.** In the forward pass the current parameter values are substituted into the parameter variables.
- **C.** In the backward pass values are substituted into the symbolically derived gradient expressions to compute the gradients.
- **D.** After updating the parameters, recomputing the loss with the new parameters shows whether the loss decreased.
- **E.** In the forward pass the next gradient values are substituted instead of the parameters.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the forward pass uses the current parameters; gradients are computed in the backward pass.

</details>

---

## L6-05 · 연쇄법칙과 중간 변수 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 연쇄법칙(chain rule)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 합성함수의 도함수는 바깥 함수의 도함수와 안쪽 함수의 도함수의 곱으로 구할 수 있다.
- **B.** 라이프니츠 표기로는 ∂u/∂x = (∂u/∂v)·(∂v/∂x) 처럼 중간 변수를 거쳐 표현할 수 있다.
- **C.** 복잡한 식을 미분할 때는 중간 변수(intermediate variable)를 정의하면 계산이 쉬워진다.
- **D.** 중간 변수를 정의하면 각 단계의 도함수를 곱해 최종 도함수를 얻을 수 있다.
- **E.** 연쇄법칙은 두 함수가 모두 미분 가능할 때만 적용할 수 있다.

**정답: A, B, C, D, E**

**해설** — 연쇄법칙 f(g(x))' = f'(g(x))·g'(x) (A 참). 라이프니츠 표기 (B 참). 중간 변수 정의로 계산 단순화 (C 참). 단계별 도함수의 곱 (D 참). 연쇄법칙은 관련 함수들이 미분 가능해야 적용된다 (E 참).

> 티어 근거: Chain rule and intermediate variables

<details><summary>English</summary>

**Q.** Which of the following statements about the chain rule are true?

- **A.** The derivative of a composite function is the product of the derivative of the outer function and the derivative of the inner function.
- **B.** In Leibniz notation it can be written through an intermediate variable as du/dx = (du/dv)\*(dv/dx).
- **C.** When differentiating a complicated expression it helps to define intermediate variables.
- **D.** Once intermediate variables are defined, the derivatives of each step can be multiplied to obtain the final derivative.
- **E.** The chain rule can be applied only when both functions are differentiable.

**Answer: A, B, C, D, E**

**Explanation** — A true. B true. C true. D true. E true.

</details>

---

## L6-06 · 계산 그래프의 미분 최소화 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 계산 그래프를 이용한 미분에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 우리가 미분 공식을 알아야 하는 것은 기본 연산(elementary operations)의 도함수뿐이다.
- **B.** 복잡한 식의 도함수는 기본 연산들의 도함수를 간선을 따라 곱해서 얻는다.
- **C.** 계산 그래프는 어떤 변수를 계산하기 위해 어떤 중간 변수를 먼저 평가해야 하는지 알려준다.
- **D.** 계산 그래프는 손실함수의 도함수를 계산할 때 필요하다.
- **E.** 계산 그래프를 사용하면 기본 연산의 도함수조차 알 필요가 없다.

**정답: A, B, C, D**

**해설** — 기본 연산의 도함수만 알면 된다 (A 참). 간선을 따라 곱함(연쇄법칙) (B 참). 평가 순서 정보 제공 (C 참). 그래디언트 계산에 사용 (D 참). 기본 연산의 도함수는 반드시 필요하다 (E 거짓).

> 티어 근거: Computational graph: only elementary derivatives needed

<details><summary>English</summary>

**Q.** Which of the following statements about differentiation using a computation graph are true?

- **A.** The only derivatives we need to know are those of the elementary operations.
- **B.** The derivative of a complicated expression is obtained by multiplying the derivatives of the elementary operations along the edges.
- **C.** A computation graph tells us which intermediate variables must be evaluated first in order to compute a given variable.
- **D.** A computation graph is needed to compute the derivative of the loss function.
- **E.** Using a computation graph removes the need to know even the derivatives of the elementary operations.

**Answer: A, B, C, D**

**Explanation** — A true. B true (chain rule). C true. D true. E false: the derivatives of the elementary operations are still required.

</details>

---

## L6-07 · 학습 반복의 종료 조건 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 역전파/경사하강법 학습 루프의 종료 조건에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 정해진 반복 횟수(iteration 수)에 도달하면 학습을 멈출 수 있다.
- **B.** 조기 종료(early stopping)를 사용해 검증 손실이 개선되지 않을 때 멈출 수 있다.
- **C.** 파라미터 갱신 후 3단계(예시 선택)로 돌아가 반복한다.
- **D.** 학습이 끝난 뒤에도 새 데이터에 대한 추정을 위해 모델을 사용할 수 있다.
- **E.** 역전파 알고리즘은 한 번의 순전파-역전파로 최적 파라미터를 보장한다.

**정답: A, B, C, D**

**해설** — 반복 횟수 제한 (A 참). 조기 종료 (B 참). 3단계로 회귀하는 루프 (C 참). 학습된 모델로 새 데이터 추정 (D 참). 역전파는 반복적 최적화이며 한 번에 최적 파라미터를 보장하지 않는다 (E 거짓).

> 티어 근거: Stop after N iterations OR early stopping

<details><summary>English</summary>

**Q.** Which of the following statements about the termination conditions of the backpropagation / gradient descent training loop are true?

- **A.** Training can be stopped when a fixed number of iterations is reached.
- **B.** Early stopping can be used to stop when the validation loss stops improving.
- **C.** After updating the parameters the algorithm goes back to step 3 (example selection) and repeats.
- **D.** After training the model can still be used to estimate values for new data.
- **E.** The backpropagation algorithm guarantees the optimal parameters in a single forward-backward pass.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: backpropagation is an iterative optimization and does not guarantee the optimum in one pass.

</details>

---

## L6-08 · PyTorch 텐서의 속성 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** PyTorch 텐서 temperatures = torch.tensor([[...], [...]], dtype=torch.float32) (shape 2×12) 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** temperatures.shape 는 torch.Size([2, 12]) 이다.
- **B.** temperatures.ndim 의 값은 정수 2 이다.
- **C.** temperatures.numel() 의 값은 24 이다.
- **D.** temperatures.dtype 는 torch.float32 이고 itemsize 는 4 다.
- **E.** requires_grad 의 기본값은 True 이며 grad 와 grad_fn 은 처음부터 값을 가진다.

**정답: A, B, C, D**

**해설** — shape = torch.Size([2,12]) (A 참). ndim = 2 (B 참). numel = 2×12 = 24 (C 참). dtype float32, itemsize 4 (D 참). requires_grad 기본값은 False이고 grad, grad_fn은 None이다 (E 거짓). ⚠️ 함정: E — "기본값이 True이며 grad에 값이 있다" → "기본값이 False이고 grad는 None"이면 참.

> 티어 근거: PyTorch tensor attributes (numel, shape, dtype, itemsize, requires_grad…)

<details><summary>English</summary>

**Q.** Consider the PyTorch tensor temperatures = torch.tensor([[...], [...]], dtype=torch.float32) with shape 2x12. Which statements are true?

- **A.** temperatures.shape is torch.Size([2, 12]).
- **B.** temperatures.ndim is the integer 2.
- **C.** temperatures.numel() is 24.
- **D.** temperatures.dtype is torch.float32 and itemsize is 4.
- **E.** requires_grad defaults to True and grad and grad_fn already have values.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true (2x12). D true. E false: requires_grad defaults to False and grad / grad_fn are None. ⚠️ Trap: E — "defaults to True and grad has a value" → "defaults to False and grad is None" would make it TRUE.

</details>

---

## L6-09 · PyTorch 텐서의 장점 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** PyTorch 텐서가 NumPy 배열보다 강력한 점에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** CPU 외에 GPU 등 여러 장치를 지원한다.
- **B.** 계산 그래프의 일부가 될 수 있다.
- **C.** torch.autograd 를 이용해 계산 그래프에 대한 그래디언트를 자동으로 계산할 수 있다.
- **D.** 지연 실행(lazy execution)을 지원한다.
- **E.** NumPy 배열과 달리 배열 프로그래밍을 지원하지 않는다.

**정답: A, B, C, D**

**해설** — 다중 장치 지원 (A 참). 계산 그래프 구성 (B 참). autograd 자동 미분 (C 참). 지연 실행 지원 (D 참). NumPy와 PyTorch 텐서 모두 배열 프로그래밍을 지원한다 (E 거짓). ⚠️ 함정: E — "배열 프로그래밍을 지원하지 않는다" → "지원한다"이면 참.

> 티어 근거: Tensors vs NumPy arrays: GPU, graphs, autograd, lazy execution

<details><summary>English</summary>

**Q.** Which of the following statements about the advantages of PyTorch tensors over NumPy arrays are true?

- **A.** They support several devices besides the CPU, such as the GPU.
- **B.** They can be part of a computation graph.
- **C.** torch.autograd can automatically compute gradients over the computation graph.
- **D.** They support lazy execution.
- **E.** Unlike NumPy arrays they do not support array programming.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: both NumPy arrays and PyTorch tensors support array programming. ⚠️ Trap: E — "do not support array programming" → "they do support it" would make it TRUE.

</details>

---

## L6-10 · 역전파가 필요한 이유 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 역전파 알고리즘이 필요한 이유에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 신경망에서는 손실함수의 도함수를 모든 파라미터에 대해 계산해야 하는데, 손으로 계산하면 계산량이 매우 많다.
- **B.** 서로 다른 파라미터의 도함수에 같은 항이 여러 번 등장하므로 이를 재사용하는 것이 효율적이다.
- **C.** 역전파는 경사하강법과 중간 결과 저장을 결합한 방법이다.
- **D.** 역전파를 사용하면 그래디언트를 순전파와 유사한 수준의 연산량으로 계산할 수 있다.
- **E.** 역전파는 그래디언트를 계산하지 않고 파라미터를 무작위로 바꿔가며 최적해를 찾는 방법이다.

**정답: A, B, C, D**

**해설** — 파라미터별 도함수를 손으로 계산하는 것은 비효율적 (A 참). 반복되는 부분식 재사용 (B 참). 경사하강법 + 중간 결과 저장 (C 참). 순전파와 유사한 연산량으로 그래디언트 계산 (D 참). 역전파는 그래디언트를 정확히 계산하는 방법이다 (E 거짓). ⚠️ 함정: E — "그래디언트를 계산하지 않고" → "그래디언트를 이용해"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about why the backpropagation algorithm is needed are true?

- **A.** In a neural network the derivative of the loss must be computed with respect to every parameter, and doing that by hand is a huge amount of work.
- **B.** The same terms appear repeatedly in the derivatives with respect to different parameters, so reusing them is efficient.
- **C.** Backpropagation combines gradient descent with the storage of intermediate results.
- **D.** With backpropagation the gradient can be computed with a cost comparable to that of the forward pass.
- **E.** Backpropagation does not compute gradients; it randomly changes the parameters to find the optimum.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: backpropagation computes the gradients exactly. ⚠️ Trap: E — "does not compute gradients" → "uses the gradients" would make it TRUE.

</details>

---

## L6-11 · 계산 그래프 예시(선형 회귀 MSE) · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 단일 변수, 단일 훈련 예시에 대한 선형 회귀의 MSE 손실(½ 곱을 생략한 형태)을 계산 그래프로 나타낼 때 옳은 것을 모두 고르시오.

- **A.** 손실을 중간 변수들로 나누면 각 단계가 기본 연산(곱셈, 덧셈, 제곱 등)으로 표현된다.
- **B.** 각 중간 변수의 도함수를 이용해 파라미터에 대한 그래디언트를 연쇄법칙으로 구할 수 있다.
- **C.** 순전파에서는 현재 파라미터와 데이터 값을 대입해 손실값을 계산한다.
- **D.** 역전파에서는 손실에서 시작해 파라미터 방향으로 그래디언트를 계산한다.
- **E.** 계산 그래프는 반드시 여러 훈련 예시를 동시에 사용할 때만 구성할 수 있다.

**정답: A, B, C, D**

**해설** — 손실을 기본 연산으로 분해 (A 참). 중간 변수 도함수 + 연쇄법칙 (B 참). 순전파에서 손실 계산 (C 참). 역전파는 손실에서 파라미터 방향으로 (D 참). 단일 예시에 대해서도 계산 그래프를 구성할 수 있다 (E 거짓). ⚠️ 함정: E — "여러 훈련 예시를 동시에 쓸 때만 구성할 수 있다" → "한 예시로도 구성할 수 있다"이면 참.

> 티어 근거: Computational graph of linear-regression MSE

<details><summary>English</summary>

**Q.** Consider the MSE loss of a linear regression with a single variable and a single training example (in the form without the factor 1/2). Which statements are true?

- **A.** Splitting the loss into intermediate variables expresses each step as elementary operations (multiplication, addition, square, and so on).
- **B.** Using the derivatives of the intermediate variables, the gradient with respect to the parameters can be obtained with the chain rule.
- **C.** In the forward pass the loss value is computed by substituting the current parameters and the data values.
- **D.** In the backward pass the gradient is computed starting from the loss and moving towards the parameters.
- **E.** A computation graph can only be built when several training examples are used at the same time.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: a graph can be built even for a single example. ⚠️ Trap: E — "only when several examples are used" → "also with a single example" would make it TRUE.

</details>

---

## L6-12 · 그래디언트와 파라미터 갱신 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 역전파로 구한 그래디언트를 이용한 파라미터 갱신에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 그래디언트는 손실을 증가시키는 방향이므로, 갱신은 그래디언트의 반대 방향으로 수행한다.
- **B.** 학습률 α는 한 스텝에서 파라미터를 얼마나 크게 바꿀지 결정한다.
- **C.** 학습률이 너무 크면 최적점을 지나쳐 진동하거나 발산할 수 있다.
- **D.** 학습률이 너무 작으면 수렴까지 많은 반복이 필요하다.
- **E.** 그래디언트가 0이면 파라미터는 크게 변한다.

**정답: A, B, C, D**

**해설** — 그래디언트 반대 방향으로 갱신 (A 참). α = 스텝 크기 (B 참). α 과대 → 진동/발산 (C 참). α 과소 → 느린 수렴 (D 참). 그래디언트가 0이면 갱신량이 0이 되어 파라미터가 변하지 않는다(최소점 후보) (E 거짓).

<details><summary>English</summary>

**Q.** Which of the following statements about parameter updates using gradients obtained by backpropagation are true?

- **A.** The gradient points in the direction that increases the loss, so the update is performed in the opposite direction.
- **B.** The learning rate alpha determines how much the parameters change in one step.
- **C.** If the learning rate is too large, the iterations may oscillate past the optimum or diverge.
- **D.** If the learning rate is too small, many iterations are needed to converge.
- **E.** If the gradient is zero, the parameters change a lot.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: a zero gradient means a zero update, so the parameters do not change.

</details>

---

## L6-13 · 역전파의 계산 순서와 규칙 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 역전파에서 그래디언트가 전파되는 방식에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 그래디언트는 손실에서 시작해 입력 방향(역방향)으로 전파된다.
- **B.** 각 노드에서는 상류에서 받은 그래디언트에 그 노드의 국소 도함수(local derivative)를 곱해 하류로 전달한다.
- **C.** 여러 경로에서 그래디언트가 도착하면 그 값들을 더한다.
- **D.** 역전파를 위해 먼저 순전파로 중간 변수 값들을 계산해 두어야 한다.
- **E.** 역전파에서는 그래디언트를 입력에서 출력 방향으로 전파한다.

**정답: A, B, C, D**

**해설** — 역방향 전파 (A 참). 상류 그래디언트 × 국소 도함수 (B 참). 여러 경로의 그래디언트는 합산(다변수 연쇄법칙) (C 참). 순전파로 중간 값이 필요 (D 참). 방향이 반대다 (E 거짓).

> 출처 메모: 보기 C(여러 경로의 그래디언트를 더함)는 슬라이드에 없음

<details><summary>English</summary>

**Q.** Which of the following statements about how gradients propagate in backpropagation are true?

- **A.** The gradient propagates from the loss towards the input (in the reverse direction).
- **B.** At each node the upstream gradient is multiplied by the local derivative of that node and passed downstream.
- **C.** When gradients arrive through several paths, the values are added.
- **D.** For backpropagation the intermediate variable values must first be computed by a forward pass.
- **E.** In backpropagation the gradient propagates from the input towards the output.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true (multivariate chain rule). D true. E false: the direction is the opposite.

</details>

---

## S1-21 · 역전파의 원리(계산 그래프·연쇄법칙) · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 역전파(backpropagation)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 계산 그래프의 노드는 기본 연산(elementary operation)들이다.
- **B.** 기본 연산의 미분만 있으면 된다.
- **C.** 간선을 따라 기본 미분을 곱해 나간다(연쇄법칙).
- **D.** 공유되는 중간 결과를 재사용하면 중복 계산을 피할 수 있다.
- **E.** 역방향 계산에는 순방향 계산의 값이 전혀 필요 없다.

**정답: A, B, C, D**

**해설** — 그래프의 각 노드는 덧셈·곱셈 같은 기본 연산이다 (A 참). 미리 알고 있는 기본 미분만 조합하면 된다 (B 참). 연쇄법칙으로 국소 미분을 곱해 나간다 (C 참). 공유 노드의 그래디언트를 모아 한 번만 계산하면 중복이 줄어든다 (D 참). 곱셈 노드의 미분에는 순방향에서 구한 값이 필요하다 (E 거짓). ⚠️ 함정: E — "전혀 필요 없다" → "순방향 값이 필요하다"이면 참.

> 티어 근거: Backprop principles

<details><summary>English</summary>

**Q.** Which statements about backpropagation are true?

- **A.** Nodes of the computational graph are elementary operations.
- **B.** We only need derivatives of elementary operations.
- **C.** We multiply elementary derivatives along edges (chain rule).
- **D.** Reusing shared sub-results avoids repeated computation.
- **E.** The backward pass needs no values from the forward pass.

**Answer: A, B, C, D**

**Explanation** — Each node is an elementary operation (A true). Only known elementary derivatives are needed (B true). Local derivatives are multiplied along the edges (C true). Sharing common sub-results avoids recomputation (D true). The backward pass uses forward values (E false). ⚠️ Trap: E — "needs no values" → "needs the forward values" would make it TRUE.

</details>

---

## S2-25 · 역전파 알고리즘의 절차 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** 역전파 알고리즘의 절차에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 파라미터 초기값은 무작위로 정해도 된다.
- **B.** 순방향 단계에서 데이터와 현재 파라미터를 대입한다.
- **C.** 갱신 단계에서 θ := θ − α·grad 를 적용한다.
- **D.** 실제 구현에서는 미니배치를 사용한다.
- **E.** J = 0 이 될 때까지 반복해야만 멈춘다.

**정답: A, B, C, D**

**해설** — 무작위 초기화로 대칭을 깬다 (A 참). 순방향으로 예측과 손실을 계산한다 (B 참). 갱신 규칙을 적용한다 (C 참). 계산 효율을 위해 미니배치를 쓴다 (D 참). 정해진 반복 횟수나 조기 종료로 멈추며, J = 0 이 될 때까지 반복하는 것은 현실적이지 않다 (E 거짓).

<details><summary>English</summary>

**Q.** Which statements about the procedure of the backpropagation algorithm are true?

- **A.** Initial parameter values can be random.
- **B.** In the forward step, we substitute data and current parameters.
- **C.** In the update step, θ := θ − α·grad.
- **D.** In practice, a mini-batch is used.
- **E.** It stops only when J = 0.

**Answer: A, B, C, D**

**Explanation** — Random initialization breaks the symmetry (A true). The forward pass substitutes data and parameters (B true). The update rule is applied (C true). Mini-batches are used for efficiency (D true). Training stops after a number of iterations or by early stopping; waiting for J = 0 is unrealistic (E false).

</details>

---

## S2-26 · PyTorch 코드의 의미 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 다음 PyTorch 코드에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** torch.nn.Linear(784, 100) 의 가중치 행렬 shape 은 (100, 784) 이다.
- **B.** nn.Sequential(nn.Linear(d, h), nn.ReLU(), nn.Linear(h, 1)) 은 회귀용 2층 MLP 다.
- **C.** torch.nn.BCELoss() 는 이진 분류용이다.
- **D.** torch.nn.Linear 는 ReLU 를 자동으로 적용한다.

**정답: A, B, C**

**해설** — nn.Linear(in, out) 의 weight 는 (out, in) = (100, 784) (A 참). 선형-비선형-선형 구조의 회귀 MLP (B 참). BCELoss 는 이진 교차엔트로피 손실 (C 참). nn.Linear 는 활성함수를 포함하지 않는다 (D 거짓).

> 출처 메모: nn.Sequential / Linear 가중치 shape 은 어떤 자료에도 없음 (BCELoss만 L5)

<details><summary>English</summary>

**Q.** Which statements about the following PyTorch code are true?

- **A.** `torch.nn.Linear(784, 100)` has a weight matrix of shape (100, 784).
- **B.** `nn.Sequential(nn.Linear(d, h), nn.ReLU(), nn.Linear(h, 1))` is a 2-layer MLP for regression.
- **C.** `torch.nn.BCELoss()` is for binary classification.
- **D.** `torch.nn.Linear` applies a ReLU automatically.

**Answer: A, B, C**

**Explanation** — nn.Linear(in, out) stores weight as (out, in) = (100, 784) (A true). The linear–nonlinear–linear stack is a regression MLP (B true). BCELoss is binary cross-entropy (C true). nn.Linear has no activation (D false).

</details>

---

## M-09 · 계산 그래프 노드별 그래디언트 계산 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** J 의 계산 그래프에 다음 노드들이 있다. 옳은 것을 모두 고르시오.

- **A.** 노드 c = b² 에서 b = −2, grad_c = 3 이면 grad_b = −12 다.
- **B.** 노드 c = b² 에서 b = −2, grad_c = 3 이면 grad_b = 12 다.
- **C.** 노드 c = a + b 에서 grad_c = 3 이면 grad_a = grad_b = 3 이다.
- **D.** 노드 c = a·b 에서 a = 2, b = 5, grad_c = 3 이면 grad_a = 15 다.
- **E.** 노드 c = a·b 에서 a = 2, b = 5, grad_c = 3 이면 grad_b = 6 이다.

**정답: A, C, D, E**

**해설** — 제곱 노드는 grad_b = grad_c·2b = 3·2·(−2) = −12 (A 참, B 거짓). 덧셈 노드는 그래디언트를 그대로 전달 (C 참). 곱셈 노드는 서로의 입력을 곱한다: grad_a = grad_c·b = 15, grad_b = grad_c·a = 6 (D·E 참). ⚠️ 함정: B — "12" → "-12"이면 참.

> 출처 메모: 곱셈 노드(D·E)는 강의 내용; 제곱·덧셈 노드가 DOCX

<details><summary>English</summary>

**Q.** Backpropagation. The computational graph of J contains these nodes. Which statements are true?

- **A.** Node c = b², with b = −2 and grad_c = 3: grad_b = −12.
- **B.** Node c = b², with b = −2 and grad_c = 3: grad_b = 12.
- **C.** Node c = a + b, with grad_c = 3: grad_a = grad_b = 3.
- **D.** Node c = a·b, with a = 2, b = 5, and grad_c = 3: grad_a = 15.
- **E.** Node c = a·b, with a = 2, b = 5, and grad_c = 3: grad_b = 6.

**Answer: A, C, D, E**

**Explanation** — The square node gives grad_b = grad_c·2b = 3·2·(−2) = −12 (A true, B false). The addition node passes the gradient through (C true). The multiplication node swaps the other input: grad_a = grad_c·b = 15 and grad_b = grad_c·a = 6 (D and E true). ⚠️ Trap: B — "12" → "−12" would make it TRUE.

</details>

---

## M2-09 · 역전파 그래디언트 수치 계산 · 티어 C (우선순위 낮음) · 2️⃣A 강의 L1–6

**Q.** J = ((wx + b) − y)² 의 계산 그래프가 q = wx, ŷ = q + b, z = y − ŷ, J = z² 이고 x = 1, y = 3, w = 2, b = −1 일 때 옳은 것을 모두 고르시오.

- **A.** J = 4 다.
- **B.** ∂J/∂b = −4 다.
- **C.** ∂J/∂w = −4 다.
- **D.** ∂J/∂x = −8 이다.
- **E.** α = 0.5 로 한 스텝 수행하면 w = 4, b = 1 이 된다.
- **F.** 이 스텝 후 손실은 0이 된다.

**정답: A, B, C, D, E**

**해설** — q = 2, ŷ = 1, z = 2 이므로 J = 4 (A 참). ∂J/∂z = 2z = 4 이므로 ∂J/∂ŷ = −4, ∂J/∂b = −4 (B 참). ∂J/∂w = x·(−4) = −4 (C 참). ∂J/∂x = w·(−4) = −8 (D 참). α = 0.5 → w_new = 2 + 2 = 4, b_new = −1 + 2 = 1 (E 참). 새 ŷ = 5, z = −2 이므로 J = 4 로 그대로다(스텝이 너무 커서 지나침) (F 거짓). ⚠️ 함정: F — "손실 0" → "손실은 4로 그대로(지나침)"이면 참.

<details><summary>English</summary>

**Q.** Backpropagation with J = ((wx + b) − y)². The graph is q = wx, ŷ = q + b, z = y − ŷ, J = z². Values: x = 1, y = 3, w = 2, b = −1. Which statements are true?

- **A.** J = 4.
- **B.** ∂J/∂b = −4.
- **C.** ∂J/∂w = −4.
- **D.** ∂J/∂x = −8.
- **E.** After one step with α = 0.5: w = 4 and b = 1.
- **F.** After this step, the loss is 0.

**Answer: A, B, C, D, E**

**Explanation** — q = 2, ŷ = 1 and z = 2, so J = 4 (A true). ∂J/∂z = 2z = 4, hence ∂J/∂ŷ = −4 and ∂J/∂b = −4 (B true). ∂J/∂w = x·(−4) = −4 (C true). ∂J/∂x = w·(−4) = −8 (D true). With α = 0.5: w_new = 2 + 2 = 4 and b_new = −1 + 2 = 1 (E true). The new ŷ = 5 gives z = −2 and J = 4 again: the step is too large (overshoot), so F is false. ⚠️ Trap: F — "the loss is 0" → "the loss stays 4 (overshoot)" would make it TRUE.

</details>

---

## D-36 · 제곱 노드의 그래디언트 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 노드 c = b² 이다. grad_c = ∂J/∂c, grad_b = ∂J/∂b 일 때 grad_b 를 고르시오.

- **A.** grad_b = grad_c · 2 · c
- **B.** grad_b = grad_c · 2 · b
- **C.** grad_b = grad_c · c²
- **D.** grad_b = grad_c

**정답: B**

**해설** — c = b² 의 미분은 dc/db = 2b 이므로 grad_b = grad_c · 2b 다 (B 참). 2c 를 곱하거나 (A), c² 를 곱하거나 (C), 그대로 두는 것 (D)은 모두 틀리다. ⚠️ 함정: A — "2·c" → "2·b"이면 참. ⚠️ 함정: C — "c²" → "2·b"이면 참. ⚠️ 함정: D — "그대로" → "2·b를 곱한다"이면 참.

<details><summary>English</summary>

**Q.** Node c = b². Let grad_c = ∂J/∂c and grad_b = ∂J/∂b. What is grad_b?

- **A.** grad_b = grad_c · 2 · c
- **B.** grad_b = grad_c · 2 · b
- **C.** grad_b = grad_c · c²
- **D.** grad_b = grad_c

**Answer: B**

**Explanation** — Since dc/db = 2b, we have grad_b = grad_c · 2b (B true). Multiplying by 2c (A), by c² (C) or not multiplying at all (D) are all wrong. ⚠️ Trap: A — "2 · c" → "2 · b" would make it TRUE. ⚠️ Trap: C — "c²" → "2 · b" would make it TRUE. ⚠️ Trap: D — "unchanged" → "multiplied by 2b" would make it TRUE.

</details>

---

## D-37 · 덧셈 노드의 그래디언트 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** 노드 c = a + b 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** grad_a = grad_c + b, grad_b = grad_c + a
- **B.** grad_a = grad_b = grad_c
- **C.** grad_a = grad_c + a, grad_b = grad_c + b
- **D.** 덧셈 노드는 그래디언트를 두 입력에 그대로 전달한다.

**정답: B, D**

**해설** — 덧셈의 편미분은 1 이므로 그래디언트가 두 입력에 그대로 전달된다: grad_a = grad_b = grad_c (B 참, D 참). 그래디언트에 입력값을 더하거나 곱하는 것은 틀리다 (A·C 거짓). ⚠️ 함정: A — "grad_c + b" → "grad_c"이면 참. ⚠️ 함정: C — "grad_c + a" → "grad_c"이면 참.

<details><summary>English</summary>

**Q.** Node c = a + b. Which statements are true?

- **A.** grad_a = grad_c + b, grad_b = grad_c + a
- **B.** grad_a = grad_b = grad_c
- **C.** grad_a = grad_c + a, grad_b = grad_c + b
- **D.** The addition node passes the gradient unchanged to both inputs.

**Answer: B, D**

**Explanation** — The partial derivatives of a sum are 1, so the gradient is passed through unchanged: grad_a = grad_b = grad_c (B and D true). Adding or multiplying by the input values is wrong (A and C false). ⚠️ Trap: A — "grad_c + b" → "grad_c" would make it TRUE. ⚠️ Trap: C — "grad_c + a" → "grad_c" would make it TRUE.

</details>

---

# Lecture 7 — 평가 지표 · 드롭아웃 · CNN (26문항)

## L7-01 · 성능 평가 지표 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 머신러닝 성능 평가 지표에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 클래스 불균형(class imbalance)이 심한 데이터셋에서 accuracy는 성능을 오해하게 만들 수 있다.
- **B.** precision(정밀도)은 실제 양성 중에서 양성으로 식별한 비율이다.
- **C.** recall(재현율)은 실제 양성 중에서 양성으로 식별한 비율이다.
- **D.** 개 98마리, 고양이 2마리인 데이터에서 항상 '개'라고 예측하면 accuracy는 98%가 될 수 있다.
- **E.** 회귀 모델의 평가 지표로 RMSE와 MAE가 있으며, RMSE는 MSE의 제곱근이다.

**정답: A, C, D, E**

**해설** — 불균형 데이터에서 accuracy는 착시를 일으킨다 (A 참). precision = 양성으로 예측한 것 중 실제 양성의 비율이므로 B의 정의는 recall의 정의다 (B 거짓, C 참). 항상 개라고 예측 → 98/100 = 98% accuracy (D 참). 회귀 지표: MSE, RMSE(=√MSE), MAE (E 참). ⚠️ 함정: B — "실제 양성 중 양성으로 식별한 비율"은 recall — precision은 "양성으로 예측한 것 중 실제 양성".

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about machine learning performance metrics are true?

- **A.** On a dataset with severe class imbalance, accuracy can give a misleading picture of the performance.
- **B.** precision is the fraction of the actual positives that were identified as positive.
- **C.** recall is the fraction of the actual positives that were identified as positive.
- **D.** On a dataset with 98 dogs and 2 cats, always predicting "dog" gives an accuracy of 98%.
- **E.** RMSE and MAE are evaluation metrics for regression models, and RMSE is the square root of the MSE.

**Answer: A, C, D, E**

**Explanation** — A true. C true. B false: precision is the fraction of the predicted positives that are actually positive; the definition in B is that of recall. D true (98/100). E true. ⚠️ Trap: B — "the fraction of the actual positives" describes recall, not precision.

</details>

---

## L7-02 · 합성곱 신경망(CNN)의 구조 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 합성곱 신경망(CNN)의 구조적 특징에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** MLP를 고해상도 이미지에 적용하면 패턴을 모든 위치에서 학습해야 하고 파라미터 수가 폭발하는 문제가 있다.
- **B.** 합성곱 층의 필터(커널)는 가중치 공유(parameter sharing)를 통해 파라미터 수를 크게 줄여준다.
- **C.** 풀링 층은 히트맵의 해상도를 낮춰 계산량을 줄이고, 다음 합성곱 층이 더 큰 패턴을 검출할 수 있게 한다.
- **D.** 풀링 층에는 학습을 통해 최적화되는 가중치 파라미터가 많이 포함되어 있다.
- **E.** 데이터 증강(이동, 회전, 노이즈 추가 등)과 드롭아웃은 과대적합을 완화하는 데 사용될 수 있다.

**정답: A, B, C, E**

**해설** — MLP는 공간 정보 손실 + 파라미터 폭발 (A 참). 필터는 모든 위치에서 공유되므로 파라미터가 크게 줄어든다 (B 참). 풀링 = 다운샘플링 → 다음 층의 수용영역 확대 (C 참). 풀링 층에는 학습 가능한 파라미터가 없다 (D 거짓). 데이터 증강·드롭아웃·L2 정규화·조기 종료는 과대적합 완화책 (E 참). ⚠️ 함정: D — "풀링 층에 학습 가중치가 많다" → "학습 파라미터가 없다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about the structural properties of a convolutional neural network (CNN) are true?

- **A.** Applying an MLP to high-resolution images requires learning the pattern at every position and makes the number of parameters explode.
- **B.** The filters (kernels) of a convolutional layer share parameters, which greatly reduces the number of parameters.
- **C.** A pooling layer lowers the resolution of the heatmaps, reducing the computation, and allows the next convolutional layer to detect larger patterns.
- **D.** A pooling layer contains many weight parameters that are optimized during training.
- **E.** Data augmentation (shifting, rotating, adding noise, and so on) and dropout can be used to reduce overfitting.

**Answer: A, B, C, E**

**Explanation** — A true. B true. C true. D false: a pooling layer has no trainable parameters. E true. ⚠️ Trap: D — "pooling layers contain many weight parameters" → "they have no trainable parameters" would make it TRUE.

</details>

---

## L7-03 · 혼동행렬과 균형 지표 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 혼동행렬(confusion matrix)과 균형 지표(balanced metric)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 혼동행렬은 실제 레이블과 추정 레이블의 조합별 개수를 나타내는 표다.
- **B.** 추정이 완벽하면 혼동행렬은 대각행렬(diagonal matrix)이 된다.
- **C.** 균형 정확도(balanced accuracy)는 각 범주를 양성으로 두고 나머지를 음성으로 두어 계산한 지표들을 평균한 것이다.
- **D.** 범주 분포가 균일하지 않을 때는 단순 accuracy보다 균형 지표가 더 유용할 수 있다.
- **E.** 혼동행렬은 회귀 과제에서만 사용할 수 있다.

**정답: A, B, C, D**

**해설** — 혼동행렬의 정의 (A 참). 완벽한 추정 → 대각행렬 (B 참). 균형 정확도 = 범주별 지표의 평균 (C 참). 불균형 데이터에서는 균형 지표가 더 유용 (D 참). 혼동행렬은 분류 과제에서 사용한다 (E 거짓). ⚠️ 함정: E — "회귀 과제에서만 사용할 수 있다" → "분류에서 사용한다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about the confusion matrix and balanced metrics are true?

- **A.** A confusion matrix is a table showing the number of examples for each combination of true label and estimated label.
- **B.** If the estimates are perfect, the confusion matrix is a diagonal matrix.
- **C.** Balanced accuracy is the average of the metrics computed by treating each class as positive and the rest as negative.
- **D.** When the class distribution is not uniform, balanced metrics can be more useful than plain accuracy.
- **E.** A confusion matrix can only be used for regression tasks.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: a confusion matrix is used for classification tasks. ⚠️ Trap: E — "only for regression tasks" → "for classification tasks" would make it TRUE.

</details>

---

## L7-04 · 모델 성능 측정 방법 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 학습된 모델의 성능을 측정하는 방법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 테스트 데이터셋에서 손실함수 값을 계산하는 것이 한 가지 방법이다.
- **B.** 이진 분류에서는 BCE, 다중 클래스 분류에서는 CE를 테스트셋에서 평가할 수 있다.
- **C.** '테스트셋의 교차엔트로피가 0.74'라는 값은 사람이 해석하기 어렵다는 단점이 있다.
- **D.** 회귀에서는 RMSE(평균제곱오차의 제곱근)와 MAE(평균절대오차) 같은 지표를 사용할 수 있다.
- **E.** 테스트셋에서의 손실값이 작으면 클래스 불균형 문제가 자동으로 해결된다.

**정답: A, B, C, D**

**해설** — 테스트셋 손실 평가 (A 참). BCE/CE 사용 (B 참). 손실값 자체는 해석이 어렵다 (C 참). RMSE·MAE (D 참). 손실값이 작아도 불균형 데이터에서 착시가 생길 수 있다(예: 항상 다수 범주 예측) (E 거짓). ⚠️ 함정: E — "자동으로 해결된다" → "해결되지 않는다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about measuring the performance of a trained model are true?

- **A.** One way is to compute the value of the loss function on the test dataset.
- **B.** BCE can be evaluated on the test set for binary classification and CE for multiclass classification.
- **C.** A value such as "the cross-entropy of the test set is 0.74" is hard for a human to interpret.
- **D.** For regression, metrics such as RMSE (the square root of the mean squared error) and MAE (mean absolute error) can be used.
- **E.** If the loss on the test set is small, the class imbalance problem is automatically solved.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: a small loss can still hide a misleading model (for example always predicting the majority class). ⚠️ Trap: E — "is automatically solved" → "is not solved" would make it TRUE.

</details>

---

## L7-05 · 불균형 데이터에서의 지표 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 개 98마리와 고양이 2마리로 구성된 데이터셋에서 모델이 입력과 무관하게 항상 '개'라고 예측할 때, 옳은 것을 모두 고르시오.

- **A.** accuracy(정확도)는 98%가 된다.
- **B.** 양성으로 예측한 것 중 실제 양성인 비율(precision)은 100%가 된다.
- **C.** 이 모델은 실제로는 유용하지 않지만 정확도만 보면 좋은 성능처럼 보인다.
- **D.** 이런 착시 때문에 범주 분포가 불균일할 때는 균형 지표(balanced accuracy 등)를 사용하는 것이 좋다.
- **E.** 이 모델의 recall은 0%가 된다.

**정답: A, B, C, D**

**해설** — 98/100 = 98% (A 참). 양성으로 예측한 98마리가 모두 실제 개 → precision 100% (B 참). 정확도 착시 (C 참). 균형 지표 권장 (D 참). 실제 고양이 2마리를 하나도 찾지 못했으므로 고양이를 양성으로 볼 때 recall은 0%지만, '개'를 양성으로 보면 recall은 100%다. 어느 쪽을 양성으로 보는지 명시되지 않았으므로 E를 참으로 단정할 수 없다.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** On a dataset with 98 dogs and 2 cats, a model always predicts "dog" regardless of the input. Which statements are true?

- **A.** The accuracy is 98%.
- **B.** The precision (of those predicted positive, the fraction that is actually positive) is 100%.
- **C.** The model is not actually useful, but looking only at the accuracy it seems to perform well.
- **D.** Because of this illusion it is better to use balanced metrics (such as balanced accuracy) when the class distribution is not uniform.
- **E.** The recall of this model is 0%.

**Answer: A, B, C, D**

**Explanation** — A true (98/100). B true: the 98 examples predicted positive are all real dogs. C true. D true. E cannot be asserted: if "dog" is the positive class the recall is 100%, and only if "cat" is positive is it 0%.

</details>

---

## L7-06 · 2차원 합성곱(convolution) · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 2차원 이산 합성곱(discrete 2D convolution)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 필터(커널) w를 이미지 x의 모든 가능한 위치에 놓고 내적(scalar product)을 계산해 출력 픽셀 값을 만든다.
- **B.** 필터는 인식하려는 이미지 패턴을 담고 있다.
- **C.** 출력(히트맵)의 크기는 필터를 놓을 수 있는 위치의 개수에 해당한다.
- **D.** 필터가 이미지의 특정 위치와 잘 맞으면 해당 히트맵 위치에서 큰 값이 나온다.
- **E.** 합성곱 연산에서는 필터를 이미지의 한 위치에만 적용한다.

**정답: A, B, C, D**

**해설** — 필터를 모든 위치에 놓고 내적 (A 참). 필터 = 인식할 패턴 (B 참). 히트맵 크기 = 위치 수 (C 참). 잘 맞으면 큰 값 (D 참). 모든 위치를 슬라이딩하며 적용한다 (E 거짓). ⚠️ 함정: E — "필터를 이미지의 한 위치에만 적용" → "모든 위치에 적용"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about the discrete 2D convolution are true?

- **A.** The filter (kernel) w is placed at every possible position of the image x and a scalar product is computed to produce the output pixel value.
- **B.** The filter contains the image pattern that we want to recognize.
- **C.** The size of the output (heatmap) corresponds to the number of positions where the filter can be placed.
- **D.** If the filter matches a particular position of the image well, a large value appears at that position of the heatmap.
- **E.** In a convolution the filter is applied at only one position of the image.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the filter slides over every position. ⚠️ Trap: E — "applied at only one position" → "applied at every position" would make it TRUE.

</details>

---

## L7-07 · 합성곱 층에서 학습되는 파라미터 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 합성곱 층(convolutional layer)에서 학습되는 것에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 합성곱 층에서는 고정된 필터 대신 필터 값을 파라미터로 학습한다.
- **B.** 필터 값과 대응하는 편향(bias)이 학습 대상 파라미터다.
- **C.** 합성곱 층에도 활성함수 g(예: ReLU)를 적용한다.
- **D.** 이미지 편집 소프트웨어의 가우시안 스무딩·엣지 검출 필터는 고정된(pre-defined) 필터의 예시다.
- **E.** 합성곱 층에는 학습 가능한 파라미터가 전혀 없다.

**정답: A, B, C, D**

**해설** — 필터를 학습 (A 참). 필터 값 + 편향이 파라미터 (B 참). 활성함수 적용 (C 참). 고전적 이미지 처리 필터는 고정 (D 참). 합성곱 층에는 필터와 편향이라는 학습 파라미터가 있다 (E 거짓). ⚠️ 함정: E — "학습 가능한 파라미터가 전혀 없다" → "필터가 학습 파라미터다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about what is learned in a convolutional layer are true?

- **A.** In a convolutional layer the filter values are learned as parameters instead of using fixed filters.
- **B.** The filter values and the corresponding bias are the trainable parameters.
- **C.** An activation function g (for example ReLU) is also applied in a convolutional layer.
- **D.** The Gaussian smoothing and edge detection filters of image editing software are examples of pre-defined filters.
- **E.** A convolutional layer has no trainable parameters at all.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: a convolutional layer has filters and biases as trainable parameters. ⚠️ Trap: E — "no trainable parameters at all" → "the filters are the trainable parameters" would make it TRUE.

</details>

---

## L7-08 · 합성곱 층의 채널(channel) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 합성곱 층의 채널에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 필터 하나는 하나의 패턴을 인식하므로, 여러 패턴을 인식하려면 여러 필터를 학습한다.
- **B.** 출력 채널 수(히트맵 수)는 필터의 개수와 같다.
- **C.** 컬러 이미지는 3개의 입력 채널(RGB)을 갖는다.
- **D.** 여러 입력 채널을 다룰 때 필터도 입력 채널 수만큼 채널을 가지며, 채널별 히트맵을 합산하고 편향을 더해 하나의 출력 채널을 만든다.
- **E.** 여러 입력 채널을 다룰 때 편향은 채널 수만큼 따로 학습해 조합 폭발을 허용한다.

**정답: A, B, C, D**

**해설** — 필터 1개 = 패턴 1개 (A 참). 출력 채널 = 필터 수 (B 참). RGB = 3채널 (C 참). 채널별 합산 + 편향으로 출력 채널 생성 (D 참). 편향은 스칼라 하나로 두어 채널 수의 조합적 폭발을 피한다 (E 거짓). ⚠️ 함정: E — "조합 폭발을 허용한다" → "채널별 편향 하나로 충분하다"이면 참.

> 출처 메모: ✗ 슬라이드(L7 s92-95): 다채널 합성곱(P→Q 채널, 편향/파라미터 수)

<details><summary>English</summary>

**Q.** Which of the following statements about the channels of a convolutional layer are true?

- **A.** One filter recognizes one pattern, so several filters are learned in order to recognize several patterns.
- **B.** The number of output channels (heatmaps) equals the number of filters.
- **C.** A color image has 3 input channels (RGB).
- **D.** When several input channels are handled, a filter also has as many channels as the input, and the per-channel heatmaps are summed with a bias added to produce one output channel.
- **E.** When several input channels are handled, a separate bias is learned for each channel, which allows a combinatorial explosion.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the bias is kept as a single scalar to avoid a combinatorial explosion in the number of channels. ⚠️ Trap: E — "allows a combinatorial explosion" → "one bias per output channel is enough" would make it TRUE.

</details>

---

## L7-09 · 다채널 합성곱(P → Q 채널) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 입력 채널이 P개이고 출력 채널이 Q개인 합성곱 층에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** Q개의 필터를 학습한다.
- **B.** 각 필터는 P개의 채널을 갖는다.
- **C.** 출력 히트맵은 Q개가 만들어진다.
- **D.** 입력 채널별 합성곱 결과를 합쳐 하나의 출력 채널을 만든다.
- **E.** 필터 개수와 출력 채널 수는 서로 무관하다.

**정답: A, B, C, D**

**해설** — 출력 채널 수만큼 필터를 학습 (A 참). 각 필터가 입력 채널 수만큼 채널을 가짐 (B 참). 출력 히트맵 = Q개 (C 참). 채널별 결과를 합산 (D 참). 필터 수가 곧 출력 채널 수다 (E 거짓).

> 출처 메모: ✗ 슬라이드(L7 s92-95): 다채널 합성곱(P→Q 채널, 편향/파라미터 수)

<details><summary>English</summary>

**Q.** Which of the following statements about a convolutional layer with P input channels and Q output channels are true?

- **A.** Q filters are learned.
- **B.** Each filter has P channels.
- **C.** Q output heatmaps are produced.
- **D.** The per-input-channel convolution results are summed to produce one output channel.
- **E.** The number of filters and the number of output channels are unrelated.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the number of filters is exactly the number of output channels.

</details>

---

## L7-10 · 풀링(pooling) 층 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 풀링 층에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 풀링은 히트맵의 해상도를 낮추는 다운샘플링 기법이다.
- **B.** 평균 풀링은 블록의 평균값을, 최대 풀링은 블록의 최댓값을 취한다.
- **C.** 2×2 풀링 블록을 사용하면 출력 이미지의 크기가 절반이 된다.
- **D.** 풀링은 객체의 정확한 픽셀 위치까지 알 필요가 없다는 아이디어에 기반한다.
- **E.** 풀링 층은 학습 가능한 가중치를 학습해 패턴을 인식한다.

**정답: A, B, C, D**

**해설** — 다운샘플링 (A 참). 평균/최대 풀링 정의 (B 참). 2×2 → 절반 (C 참). 정확한 위치 정보 불필요 (D 참). 풀링 층에는 학습 파라미터가 없으며 패턴 인식은 합성곱 층의 역할이다 (E 거짓). ⚠️ 함정: E — "풀링 층은 학습 가능한 가중치를 학습" → "학습 파라미터가 없다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about the pooling layer are true?

- **A.** Pooling is a downsampling technique that lowers the resolution of the heatmaps.
- **B.** Average pooling takes the mean of a block and max pooling takes the maximum of a block.
- **C.** Using 2x2 pooling blocks halves the size of the output image.
- **D.** Pooling is based on the idea that the exact pixel position of an object does not need to be known.
- **E.** A pooling layer learns trainable weights in order to recognize patterns.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: a pooling layer has no trainable parameters; pattern recognition is the job of the convolutional layers. ⚠️ Trap: E — "a pooling layer learns weights" → "it has no trainable parameters" would make it TRUE.

</details>

---

## L7-11 · LeNet-5 구조 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 고전적 합성곱 신경망 LeNet-5(1998, Y. LeCun)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 첫 합성곱 층은 엣지·코너·명암 전이 등을 검출하기 위한 필터들을 학습한다.
- **B.** 첫 풀링 층은 이전 층의 히트맵들을 각 채널별로 독립적으로 다운샘플링한다.
- **C.** 두 번째 합성곱 층은 이전 층의 축소된 히트맵에 대해 동작하며 숫자의 부분(parts)을 검출하는 필터를 학습한다.
- **D.** 마지막 풀링 층의 히트맵들은 벡터로 재배열되어 완전연결 층에 입력된다.
- **E.** LeNet-5는 합성곱 층 없이 완전연결 층만으로 구성된 네트워크다.

**정답: A, B, C, D**

**해설** — 첫 합성곱 층의 역할 (A 참). 풀링은 채널별 독립 다운샘플링 (B 참). 두 번째 합성곱 층은 부분 패턴 검출 (C 참). 히트맵 → 벡터 → 완전연결 층 (D 참). LeNet-5는 합성곱과 풀링을 교대로 사용하는 구조다 (E 거짓). ⚠️ 함정: E — "합성곱 층 없이 완전연결 층만으로" → "합성곱 층을 포함한다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about the classical convolutional network LeNet-5 (1998, Y. LeCun) are true?

- **A.** The first convolutional layer learns filters for detecting edges, corners and intensity transitions.
- **B.** The first pooling layer downsamples the heatmaps of the previous layer independently for each channel.
- **C.** The second convolutional layer operates on the reduced heatmaps of the previous layer and learns filters that detect the parts of a digit.
- **D.** The heatmaps of the last pooling layer are rearranged into a vector and fed into a fully connected layer.
- **E.** LeNet-5 is a network made only of fully connected layers without convolutional layers.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: LeNet-5 alternates convolutional and pooling layers. ⚠️ Trap: E — "only fully connected layers, without convolutions" → "it contains convolutional layers" would make it TRUE.

</details>

---

## L7-12 · 합성곱 신경망의 계층적 패턴 인식 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 합성곱 신경망이 패턴을 인식하는 방식에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 합성곱 층과 풀링 층을 교대로 쌓아 계층적 패턴 인식을 수행한다.
- **B.** 네트워크는 여러 개의 작고 단순한 패턴의 조합으로 더 크고 고수준의 패턴을 인식하는 법을 학습한다.
- **C.** 합성곱 층은 패턴 인식을, 풀링 층은 히트맵 축소를 담당한다.
- **D.** 풀링 층은 다음 층 뉴런의 수용영역(receptive field)을 키우는 역할을 한다.
- **E.** 합성곱 신경망은 각 뉴런이 이미지 전체를 한 번에 입력받아야 동작한다.

**정답: A, B, C, D**

**해설** — 합성곱·풀링 교대 → 계층적 인식 (A 참). 작은 패턴의 조합으로 큰 패턴 학습 (B 참). 역할 분담 (C 참). 풀링 → 수용영역 확대 (D 참). 합성곱 층의 뉴런은 국소 영역(수용영역)만 본다 (E 거짓). ⚠️ 함정: E — "이미지 전체를 한 번에 입력받아야" → "국소 패치만 보면 된다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about how a convolutional neural network recognizes patterns are true?

- **A.** Convolutional and pooling layers are stacked alternately to perform hierarchical pattern recognition.
- **B.** The network learns to recognize larger, higher-level patterns as combinations of several small simple patterns.
- **C.** Convolutional layers are responsible for pattern recognition and pooling layers for shrinking the heatmaps.
- **D.** Pooling layers increase the receptive field of the neurons of the next layer.
- **E.** In a convolutional network every neuron must receive the whole image as input at once in order to work.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the neurons of a convolutional layer only see a local region (their receptive field). ⚠️ Trap: E — "must receive the whole image at once" → "it only needs a local patch" would make it TRUE.

</details>

---

## L7-13 · 1차원 합성곱과 응용 분야 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 합성곱의 적용 범위에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 합성곱은 2차원에 국한되지 않으며 1차원 합성곱 층도 존재한다.
- **B.** 입력 변수를 하나 이상의 차원으로 인덱싱할 수 있는 데이터에 합성곱 신경망이 적합하다.
- **C.** 음성 분석·음성 인식은 1D/2D 합성곱의 응용 예가 될 수 있다.
- **D.** MRI·CT 스캔, 3D 모델은 3D 합성곱의 응용 예가 될 수 있다.
- **E.** 합성곱 신경망은 이미지 데이터에만 사용할 수 있다.

**정답: A, B, C, D**

**해설** — 1D 합성곱도 존재 (A 참). 차원을 따라 인덱싱되는 데이터에 적합 (B 참). 음성/음성 인식 (C 참). 3D 의료영상·3D 모델 (D 참). 게임 보드(AlphaGo), 금융·시계열 등에도 쓰인다 (E 거짓). ⚠️ 함정: E — "이미지 데이터에만 사용할 수 있다" → "소리·시계열 등에도 쓸 수 있다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about the range of applications of convolution are true?

- **A.** Convolution is not limited to two dimensions; 1D convolutional layers also exist.
- **B.** Convolutional networks are suitable for data whose input variables can be indexed along one or more dimensions.
- **C.** Speech analysis and speech recognition can be applications of 1D/2D convolution.
- **D.** MRI/CT scans and 3D models can be applications of 3D convolution.
- **E.** Convolutional networks can be used only for image data.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: they are also used for game boards (AlphaGo), finance, time series, and so on. ⚠️ Trap: E — "only for image data" → "also for audio, time series, …" would make it TRUE.

</details>

---

## L7-14 · 이동 불변성과 이동 등변성 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 이동 불변성(invariance)과 이동 등변성(equivariance)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 학습된 합성곱 신경망은 (이상적으로) 이동 불변성을 갖는다.
- **B.** 합성곱 층 자체는 이동 등변성을 갖는다.
- **C.** 이동 불변성은 객체가 이미지에서 이동해도 같은 결론을 내리는 성질이다.
- **D.** 이동 등변성은 입력이 이동하면 출력도 같은 방식으로 이동하는 성질이다.
- **E.** 합성곱 층은 이동 불변성을 갖기 때문에 필터를 모든 위치에 적용할 필요가 없다.

**정답: A, B, C, D**

**해설** — 학습된 ConvNet은 이상적으로 이동 불변 (A 참). 합성곱 층은 이동 등변 (B 참). 불변성의 의미 (C 참). 등변성의 의미 (D 참). 등변성은 바로 필터를 모든 위치에 적용함으로써 얻어진다 (E 거짓). ⚠️ 함정: E — "이동 불변성을 갖기 때문에 모든 위치에 적용할 필요가 없다" → "등변성이라 모든 위치에 적용한다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about invariance and equivariance are true?

- **A.** A trained convolutional network is (ideally) translation invariant.
- **B.** A convolutional layer itself is translation equivariant.
- **C.** Translation invariance means reaching the same conclusion even when the object moves in the image.
- **D.** Translation equivariance means that if the input shifts, the output shifts in the same way.
- **E.** Because a convolutional layer is translation invariant, it does not need to apply the filter at every position.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: equivariance is exactly what applying the filter at every position produces. ⚠️ Trap: E — "translation invariant, so no need to apply it everywhere" → "it is equivariant, so it is applied everywhere" would make it TRUE.

</details>

---

## L7-15 · ImageNet과 MLP의 한계 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** ImageNet 데이터셋과 고해상도 이미지 분류에서 MLP의 한계에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** ImageNet은 1000개가 넘는 범주를 가진 컬러 사진 데이터셋이다.
- **B.** 약 1메가픽셀 컬러 이미지이므로 입력 변수가 약 300만 개 수준이 된다.
- **C.** 고해상도 이미지에서 MLP는 약 0.5% 수준의 성능(랜덤 추측 수준)을 보였다.
- **D.** 인간 전문가는 94.9%, 2019년 최고 모델은 약 98% 수준의 정확도를 보였다.
- **E.** MLP가 이미지에 부적합한 이유는 파라미터 수가 너무 적어서다.

**정답: A, B, C, D**

**해설** — 1000+ 범주 (A 참). 약 3백만 입력 변수 (B 참). MLP ≈ 0.5% (C 참). 인간 94.9%, 최고 모델 98% (D 참). MLP는 파라미터가 부족해서가 아니라 패턴을 모든 위치에서 학습해야 하는 구조적 문제(공간 정보 무시, 파라미터 폭발) 때문에 부적합하다 (E 거짓). ⚠️ 함정: E — "파라미터 수가 너무 적어서" → "너무 많아서"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about the ImageNet dataset and the limits of the MLP on high-resolution image classification are true?

- **A.** ImageNet is a color photo dataset with more than 1000 classes.
- **B.** Since the images are about 1 megapixel color images, the number of input variables is about 3 million.
- **C.** On high-resolution images an MLP showed a performance of about 0.5% (random guessing level).
- **D.** Human experts reached 94.9% and the best model in 2019 reached about 98% accuracy.
- **E.** The MLP is unsuitable for images because the number of parameters is too small.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the problem is structural (ignoring spatial structure, parameter explosion because the pattern must be learned at every position), not a lack of parameters. ⚠️ Trap: E — "because the number of parameters is too small" → "too large" would make it TRUE.

</details>

---

## L7-16 · 데이터 증강(data augmentation) · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 데이터 증강(data augmentation)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 기존 훈련 예시를 변형해 새로운 훈련 예시를 만들어 데이터를 늘리는 방법이다.
- **B.** 이미지에는 이동, 회전, 반전, 왜곡, 색/밝기 변화, 노이즈 추가, 일부 영역 가리기 등이 사용될 수 있다.
- **C.** 소리 데이터에는 늘이기(스트레칭), 주파수 변화, 노이즈 추가 등이 사용될 수 있다.
- **D.** MNIST에는 이동, 약간의 회전, 밝기 조정, 노이즈 추가 등이 적합하다.
- **E.** 모든 변환을 모든 종류의 데이터에 적용할 수 있다.

**정답: A, B, C, D**

**해설** — 증강의 정의 (A 참). 이미지 증강 기법 (B 참). 소리 증강 기법 (C 참). MNIST에 적합한 증강 (D 참). 예를 들어 숫자 '7'을 상하 반전하면 다른 의미가 될 수 있으므로 모든 변환이 모든 데이터에 적합하지는 않다 (E 거짓). ⚠️ 함정: E — "모든 변환을 모든 데이터에 적용할 수 있다" → "데이터 종류에 맞는 변환만 유효하다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about data augmentation are true?

- **A.** It is a method of increasing the data by transforming the existing training examples to create new ones.
- **B.** For images, shifting, rotation, flipping, distortion, color/brightness changes, adding noise and masking out regions can be used.
- **C.** For sound data, stretching, frequency changes and adding noise can be used.
- **D.** For MNIST, shifting, slight rotation, brightness adjustment and adding noise are suitable.
- **E.** Every transformation can be applied to every kind of data.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: for example flipping a digit 7 upside down can change its meaning, so not every transformation suits every dataset. ⚠️ Trap: E — "every transformation for every kind of data" → "only suitable transformations" would make it TRUE.

</details>

---

## L7-17 · 노이즈 추가와 과대적합 완화 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 입력에 노이즈를 추가하는 것에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 입력에 가우시안 노이즈를 추가하면 과대적합이 줄어드는 데 도움이 될 수 있다.
- **B.** 완전연결 층으로 구성된 신경망은 특정 예시를 그대로 외우기 쉽다.
- **C.** 노이즈는 신경망이 훈련 예시의 정밀한 세부 사항을 외우는 것을 방해한다.
- **D.** 검증, 평가, 예측 단계에서는 노이즈를 추가하지 않는다.
- **E.** 노이즈를 추가하면 항상 훈련 손실이 감소한다.

**정답: A, B, C, D**

**해설** — 가우시안 노이즈가 과대적합 완화에 도움 (A 참). 완전연결 층은 암기에 취약 (B 참). 노이즈가 정밀 암기를 방해 (C 참). 노이즈는 훈련에만 사용 (D 참). 노이즈 때문에 훈련 손실이 오히려 높게 보일 수 있다 (E 거짓). ⚠️ 함정: E — "노이즈를 추가하면 항상 훈련 손실이 감소한다" → "증가할 수 있다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about adding noise to the input are true?

- **A.** Adding Gaussian noise to the input can help to reduce overfitting.
- **B.** A neural network made of fully connected layers easily memorizes individual examples.
- **C.** Noise prevents the network from memorizing the fine details of the training examples.
- **D.** Noise is not added during validation, evaluation or prediction.
- **E.** Adding noise always decreases the training loss.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: because of the noise the training loss may look higher. ⚠️ Trap: E — "adding noise always decreases the training loss" → "it can increase it" would make it TRUE.

</details>

---

## L7-18 · 드롭아웃(dropout) · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 드롭아웃(dropout)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 학습 중 입력 변수(뉴런의 출력) 일부를 무작위로 0으로 만드는 기법이다.
- **B.** 보통 은닉 표현(중간 층의 출력)에 적용한다.
- **C.** 훈련 중에만 노이즈를 사용하므로 훈련 손실이 실제보다 높게 보일 수 있다.
- **D.** 훈련 속도를 느리게 만들 수 있지만, 성능을 크게 향상시키는 경우가 많다.
- **E.** 평가 단계에서도 드롭아웃을 그대로 적용해야 한다.

**정답: A, B, C, D**

**해설** — 무작위로 일부를 0으로 (A 참). 은닉 표현에 적용 (B 참). 훈련 손실이 부풀려 보일 수 있다 (C 참). 학습은 느려질 수 있지만 성능 향상이 흔하다 (D 참). 평가/예측 시에는 노이즈를 적용하지 않는다 (E 거짓).

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which of the following statements about dropout are true?

- **A.** It randomly sets part of the input variables (neuron outputs) to 0 during training.
- **B.** It is usually applied to the hidden representations (the outputs of the intermediate layers).
- **C.** Because noise is used only during training, the training loss may look higher than it really is.
- **D.** It can slow down training, but it often improves the performance significantly.
- **E.** Dropout must also be applied as is during the evaluation phase.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: no noise is applied during evaluation/prediction.

</details>

---

## S1-22 · 정밀도·재현율·혼동행렬 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 정밀도(precision)·재현율(recall)·혼동행렬에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 정밀도는 양성으로 예측한 것 중 실제 양성의 비율이다.
- **B.** 재현율은 실제 양성 중 우리가 찾아낸 비율이다.
- **C.** 완벽한 분류기는 대각선 혼동행렬을 갖는다.
- **D.** RMSE 와 MAE 는 분류 지표다.

**정답: A, B, C**

**해설** — 정밀도 = TP/(TP+FP) (A 참). 재현율 = TP/(TP+FN) (B 참). 오류가 없으면 비대각 원소가 0이라 대각선 행렬이 된다 (C 참). RMSE·MAE 는 회귀 지표다 (D 거짓).

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which statements about precision, recall and the confusion matrix are true?

- **A.** Precision is the fraction of predicted positives that are really positive.
- **B.** Recall is the fraction of real positives that we found.
- **C.** A perfect classifier has a diagonal confusion matrix.
- **D.** RMSE and MAE are classification metrics.

**Answer: A, B, C**

**Explanation** — Precision = TP/(TP+FP) (A true). Recall = TP/(TP+FN) (B true). With no errors the off-diagonal entries are zero (C true). RMSE and MAE are regression metrics (D false).

</details>

---

## S1-23 · 노이즈·드롭아웃·데이터 증강 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 노이즈 추가·드롭아웃·데이터 증강에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 노이즈는 학습 중에만 추가한다.
- **B.** 드롭아웃은 일부 값을 0으로 만든다.
- **C.** 드롭아웃을 쓰면 훈련 손실이 실제보다 높게 보일 수 있다.
- **D.** 드롭아웃은 테스트 시에도 적용한다.
- **E.** 데이터 증강은 새로운 훈련 예제를 만들어 낸다.

**정답: A, B, C, E**

**해설** — 노이즈는 훈련 시 정규화 효과로만 사용한다 (A 참). 드롭아웃은 무작위로 뉴런 출력을 0으로 만든다 (B 참). 훈련 중 일부 뉴런이 꺼져 있어 손실이 실제보다 크게 보인다 (C 참). 평가/추론 시에는 전체 뉴런을 사용한다 (D 거짓). 변환으로 훈련 예제를 늘린다 (E 참). ⚠️ 함정: D — "테스트 시에도 적용" → "테스트 시에는 적용하지 않는다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Noise, dropout, augmentation. Which are true?

- **A.** Noise is added only during training.
- **B.** Dropout sets some values to zero.
- **C.** With dropout, the training loss can look higher than it really is.
- **D.** Dropout is also applied at test time.
- **E.** Data augmentation creates new training examples.

**Answer: A, B, C, E**

**Explanation** — Noise is used only while training as a regularizer (A true). Dropout randomly zeroes some activations (B true). While training, some units are off, so the loss looks larger (C true). At evaluation time all units are used (D false). Augmentation creates extra training examples (E true). ⚠️ Trap: D — "also applied at test time" → "not applied at test time" would make it TRUE.

</details>

---

## S1-24 · CNN의 필터·풀링·채널 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 합성곱 신경망(CNN)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 필터는 학습되는 파라미터다.
- **B.** 같은 필터를 모든 위치에 적용한다(이동 등변성).
- **C.** 풀링은 해상도를 낮추고 수용영역(receptive field)을 넓힌다.
- **D.** 입력 채널 P, 필터 Q개이면 출력 채널은 Q개이고 각 필터는 P개 채널을 갖는다.
- **E.** 고해상도 이미지에는 MLP 가 CNN 보다 낫다.

**정답: A, B, C, D**

**해설** — 필터(가중치)는 역전파로 학습된다 (A 참). 가중치 공유로 이동 등변성을 얻는다 (B 참). 풀링은 크기를 줄이고 수용영역을 넓힌다 (C 참). (P, kh, kw) 필터 Q개 → 출력 채널 Q개 (D 참). 고해상도 이미지에는 파라미터 효율적인 CNN 이 유리하다 (E 거짓).

> 출처 메모: Lecture 7. ⚠ 보기 D(P→Q 다채널)는 ✗ 슬라이드(L7 s92-95)

<details><summary>English</summary>

**Q.** Which statements about convolutional neural networks (CNNs) are true?

- **A.** Filters are learned parameters.
- **B.** The same filter is applied at every location (translation equivariance).
- **C.** Pooling reduces resolution and enlarges the receptive field.
- **D.** With P input channels and Q filters: Q output channels, and each filter has P channels.
- **E.** An MLP is better than a CNN for high-resolution images.

**Answer: A, B, C, D**

**Explanation** — Filters are learned by backpropagation (A true). Weight sharing gives translation equivariance (B true). Pooling shrinks the map and enlarges the receptive field (C true). Q filters of shape (P, kh, kw) produce Q output channels (D true). CNNs are much more parameter-efficient for large images (E false).

</details>

---

## S1-25 · 합성곱 층 파라미터 수 계산 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 합성곱 층의 필터가 16개, 입력 채널이 6개, 커널 크기가 5×5 이고 필터마다 편향이 1개일 때 옳은 것을 모두 고르시오.

- **A.** 필터 하나의 가중치는 150개다.
- **B.** 편향은 16개다.
- **C.** 전체 파라미터 수는 2416개다.
- **D.** 출력 채널은 16개다.
- **E.** 출력 채널은 6개다.

**정답: A, B, C, D**

**해설** — 6×5×5 = 150 (A 참). 필터마다 편향 1개 → 16개 (B 참). 16×(150+1) = 2416 (C 참). 필터 수 = 출력 채널 수 = 16 (D 참, E 거짓).

> 출처 메모: ✗ 슬라이드(L7 s92-95): 다채널 합성곱(P→Q 채널, 편향/파라미터 수)

<details><summary>English</summary>

**Q.** A conv layer has 16 filters, 6 input channels, 5×5 kernels and one bias per filter. Which are true?

- **A.** Each filter has 150 weights.
- **B.** There are 16 biases.
- **C.** Total parameters: 2416.
- **D.** There are 16 output channels.
- **E.** There are 6 output channels.

**Answer: A, B, C, D**

**Explanation** — 6×5×5 = 150 weights per filter (A true). One bias per filter gives 16 biases (B true). 16×(150+1) = 2416 (C true). The number of filters equals the number of output channels = 16 (D true, E false).

</details>

---

## S2-27 · 다중 클래스 균형 지표 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 다중 클래스 분류의 균형 지표(balanced metrics)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 각 클래스를 차례로 양성으로, 나머지를 음성으로 취급한다.
- **B.** 결과를 K 개 클래스에 대해 평균낸다.
- **C.** 클래스가 불균형할 때 도움이 된다.
- **D.** 단순 정확도(accuracy)는 항상 신뢰할 수 있다.

**정답: A, B, C**

**해설** — one-vs-rest 로 클래스별 정밀도·재현율을 계산한다 (A 참). 매크로/마이크로 평균을 낸다 (B 참). 불균형 데이터에서 유용하다 (C 참). 98마리 개 / 2마리 고양이 예시처럼 정확도는 불균형에서 오해를 부른다 (D 거짓). ⚠️ 함정: D — "항상 신뢰할 수 있다" → "불균형 데이터에서는 오해를 부른다"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Balanced metrics for multi-class classification.

- **A.** Each class is treated in turn as "positive", the others as "negative".
- **B.** The results are averaged over the K classes.
- **C.** It helps when the classes are imbalanced.
- **D.** Plain accuracy is always reliable.

**Answer: A, B, C**

**Explanation** — One-vs-rest gives per-class precision/recall (A true). The results are macro/micro averaged (B true). This helps with imbalanced data (C true). With 98 dogs and 2 cats, plain accuracy is misleading (D false). ⚠️ Trap: D — "always reliable" → "misleading with imbalanced data" would make it TRUE.

</details>

---

## S2-28 · 데이터 증강의 적절성 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 데이터 증강(data augmentation)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** MNIST 에서는 이동과 약간의 회전이 합리적이다.
- **B.** MNIST 에서 일부 뒤집기는 '7' 처럼 유효하지 않은 숫자를 만들 수 있다.
- **C.** 사진에서는 좌우 반전과 색 변화가 합리적이다.
- **D.** 소리에서는 늘이기(stretch)와 주파수 변화가 합리적이다.
- **E.** 어떤 변환이든 모든 데이터에 유효하다.

**정답: A, B, C, D**

**해설** — 숫자는 이동·미세 회전이 자연스럽다 (A 참). 상하 반전하면 7 등이 깨진다 (B 참). 사진은 반전·색 변환이 자연스럽다 (C 참). 오디오는 시간 늘이기·주파수 변화가 자연스럽다 (D 참). 변환은 데이터 종류에 맞아야 한다 (E 거짓).

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which statements about data augmentation are true?

- **A.** For MNIST, translation and slight rotation are reasonable.
- **B.** For MNIST, some flips can create invalid digits (e.g., a "7").
- **C.** For photos, flipping and color changes are reasonable.
- **D.** For sounds, stretching and frequency changes are reasonable.
- **E.** Any transformation is valid for any data.

**Answer: A, B, C, D**

**Explanation** — Digits tolerate translation and small rotations (A true). Vertical flips can break digits such as 7 (B true). Photos tolerate flips and color changes (C true). Audio tolerates time stretching and pitch shifts (D true). The transformation must match the data type (E false).

</details>

---

## S2-29 · 합성곱·풀링 크기 계산 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** 합성곱과 풀링의 크기 계산에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 7×7 입력에 3×3 필터(패딩 없음)를 적용하면 5×5 가 나온다.
- **B.** 같은 입력에서 7×7 이 나온다.
- **C.** 출력 픽셀 하나는 필터와 이미지 패치의 내적(원소별 곱의 합)이다.
- **D.** 4×4 특징맵에 2×2 최대 풀링을 적용하면 2×2 가 된다.
- **E.** 풀링 층에도 학습되는 필터가 있다.

**정답: A, C, D**

**해설** — 7 − 3 + 1 = 5 이므로 5×5 (A 참, B 거짓). 합성곱은 필터와 패치의 내적이다 (C 참). 4 / 2 = 2 (D 참). 풀링은 학습 파라미터가 없다 (E 거짓). ⚠️ 함정: B — "7×7" → "5×5"이면 참.

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which statements about the size calculations for convolution and pooling are true?

- **A.** A 7×7 input with a 3×3 filter (no padding) gives a 5×5 output.
- **B.** The same input gives a 7×7 output.
- **C.** Each output pixel is a scalar product of the filter and an image patch.
- **D.** 2×2 max pooling on a 4×4 map gives 2×2.
- **E.** Pooling layers have learnable filters.

**Answer: A, C, D**

**Explanation** — 7 − 3 + 1 = 5 (A true, B false). A convolution is the inner product of the filter and a patch (C true). 4 / 2 = 2 (D true). Pooling has no learnable parameters (E false). ⚠️ Trap: B — "7×7" → "5×5" would make it TRUE.

</details>

---

## S2-30 · CNN과 MLP의 비교 · 티어 C (우선순위 낮음) · 2️⃣B Lecture 7

**Q.** CNN 과 MLP 의 비교에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 합성곱 층은 이동 등변성(translation equivariant)을 갖는다.
- **B.** 학습된 ConvNet 은 (이상적으로) 이동 불변(translation invariant)이다.
- **C.** 고해상도 이미지에서 MLP 는 모든 위치마다 패턴을 따로 학습해야 한다.
- **D.** CNN 은 소리, 시계열, MRI 영상에도 쓸 수 있다.
- **E.** CNN 은 이미지에만 동작한다.

**정답: A, B, C, D**

**해설** — 가중치 공유로 합성곱 층은 이동 등변성을 갖는다 (A 참). 풀링과 계층 구조로 이동 불변성을 얻는다 (B 참). MLP 는 위치마다 별도 가중치가 필요하다 (C 참). 1D/2D/3D 합성곱으로 오디오·시계열·의료영상에도 적용된다 (D 참, E 거짓).

> 출처 메모: Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시

<details><summary>English</summary>

**Q.** Which statements comparing CNNs and MLPs are true?

- **A.** A conv layer is translation equivariant.
- **B.** A trained ConvNet is (ideally) translation invariant.
- **C.** An MLP on high-resolution images must learn each pattern at every location.
- **D.** CNNs can be used for sounds, time series, and MRI scans.
- **E.** CNNs work only on images.

**Answer: A, B, C, D**

**Explanation** — Weight sharing makes conv layers translation equivariant (A true). Pooling plus hierarchy gives (ideal) translation invariance (B true). An MLP needs separate weights per location (C true). 1D/2D/3D convolutions apply to audio, time series and medical images (D true, E false).

</details>

---

# NumPy — NumPy 배열/인덱싱/브로드캐스팅/집계 (98문항)

## N-01 · shape / dtype / size / ndim 의 자료형 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** numpy.ndarray 인스턴스 my_array 의 속성에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** my_array.shape 가 (5, 6) 이 될 수 있다.
- **B.** my_array.shape 가 정수 12 가 될 수 있다.
- **C.** my_array.dtype 가 (5, 6) 이 될 수 있다.
- **D.** my_array.size 가 정수 12 가 될 수 있다.
- **E.** my_array.ndim 이 (5, 6) 이 될 수 있다.

**정답: A, D**

**해설** — shape은 항상 튜플이므로 (5,6)은 가능하지만 정수 12는 불가 (A 참, B 거짓). dtype은 자료형(int64, float32 등)이라 튜플이 될 수 없다 (C 거짓). size는 전체 원소 개수인 정수 (D 참). ndim은 차원 개수인 정수이며 튜플이 될 수 없다 (E 거짓). shape이 (1,)이나 (0, 1, 0)인 배열도 가능하다. ⚠️ 함정: B — "shape가 정수 12가 될 수 있다" → "shape는 튜플이다"이면 참. ⚠️ 함정: C — "dtype이 (5, 6)이 될 수 있다" → "dtype은 자료형이다"이면 참. ⚠️ 함정: E — "ndim이 (5, 6)이 될 수 있다" → "ndim은 정수다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the attributes of a numpy.ndarray instance my_array are true?

- **A.** my_array.shape can be (5, 6).
- **B.** my_array.shape can be the integer 12.
- **C.** my_array.dtype can be (5, 6).
- **D.** my_array.size can be the integer 12.
- **E.** my_array.ndim can be (5, 6).

**Answer: A, D**

**Explanation** — shape is always a tuple, so (5, 6) is possible but the integer 12 is not (A true, B false). dtype is a data type (int64, float32, ...) and cannot be a tuple (C false). size is the total number of elements, an integer (D true). ndim is the number of dimensions, an integer, so it cannot be a tuple (E false). ⚠️ Trap: B — "shape can be the integer 12" → "shape is a tuple" would make it TRUE. ⚠️ Trap: C — "dtype can be (5, 6)" → "dtype is a data type" would make it TRUE. ⚠️ Trap: E — "ndim can be (5, 6)" → "ndim is an integer" would make it TRUE.

</details>

---

## N-02 · 배열 속성과 슬라이싱 shape · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 다음과 같이 정의된 배열에 대한 설명 중 옳은 것을 모두 고르시오.

my_array = np.zeros((32, 5))

- **A.** my_array.ndim 의 값은 2 이다.
- **B.** my_array.size 의 값은 정수 160 이다.
- **C.** my_array[:, 1].shape 의 결과는 (32,) 이다.
- **D.** my_array[:, [1]].shape 의 결과는 (32, 1) 이다.
- **E.** my_array[1, :].shape 의 결과는 (1, 5) 이다.

**정답: A, B, C, D**

**해설** — 2차원이므로 ndim=2 (A 참), size=32×5=160 (B 참). 정수 인덱스는 해당 축을 제거하므로 arr[:, 1] → (32,) (C 참). 리스트(팬시) 인덱싱은 축을 유지하므로 arr[:, [1]] → (32, 1) (D 참). arr[1, :] 은 축0이 정수 인덱스라 제거되어 (5,) 이다 (E 거짓).

> 출처 메모: np.zeros 는 배열을 만들기 위해서만 사용

<details><summary>English</summary>

**Q.** my_array = np.zeros((32, 5)). Which of the following statements are true?

- **A.** my_array.ndim is 2.
- **B.** my_array.size is the integer 160.
- **C.** my_array[:, 1].shape is (32,).
- **D.** my_array[:, [1]].shape is (32, 1).
- **E.** my_array[1, :].shape is (1, 5).

**Answer: A, B, C, D**

**Explanation** — A true. B true (32x5=160). C true: an integer index removes that axis. D true: fancy (list) indexing keeps the axis. E false: axis 0 is an integer index, so it is removed and the shape is (5,).

</details>

---

## N-03 · 인덱싱 방식에 따른 차원 유지/제거 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array.shape == (32, 5) 인 배열의 인덱싱 결과에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 정수 인덱스로 접근한 축은 결과에서 제거된다.
- **B.** 슬라이싱(:)은 해당 축을 유지한다.
- **C.** 팬시 인덱싱(리스트)과 불리언 마스크는 축을 유지한다.
- **D.** my_array[[-1, -1], -1].shape 의 결과는 (2,) 이다.
- **E.** my_array[0, :-1].shape 의 결과는 (5,) 이다.

**정답: A, B, C, D**

**해설** — 정수 인덱스 = 축 제거, 슬라이스 = 축 유지, 팬시/불리언 = 축 유지 (A, B, C 참). arr[[-1,-1], -1]: 축0은 리스트(2개)라 크기 2 유지, 축1은 정수라 제거 → (2,) (D 참). arr[0, :-1]: 축0 정수 → 제거, 축1은 5-1=4 → (4,) 이다 (E 거짓).

<details><summary>English</summary>

**Q.** Which of the following statements about the result of indexing an array with my_array.shape == (32, 5) are true?

- **A.** An axis accessed with an integer index is removed from the result.
- **B.** Slicing (:) keeps that axis.
- **C.** Fancy indexing (lists) and boolean masks keep the axis.
- **D.** my_array[[-1, -1], -1].shape is (2,).
- **E.** my_array[0, :-1].shape is (5,).

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true (axis 0 is a list of 2 elements, axis 1 is an integer). E false: axis 0 is removed and axis 1 has 5-1=4 elements, so the shape is (4,).

</details>

---

## N-04 · 슬라이싱 결과 shape 계산 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array.shape == (32, 5) 일 때 각 슬라이싱 결과의 shape에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** my_array[:, :].shape 은 (32, 5) 이다.
- **B.** my_array[1:, :].shape 은 (31, 5) 이다.
- **C.** my_array[1, :].shape 은 (5,) 이다.
- **D.** my_array[:, 1].shape 은 (32,) 이다.
- **E.** my_array[[0], :].shape 은 (5,) 이다.

**정답: A, B, C, D**

**해설** — 전체 슬라이싱은 차원 유지 (A 참). [1:, :]은 32−1=31행 (B 참). [1, :]은 축0 제거 → (5,) (C 참). [:, 1]은 축1 제거 → (32,) (D 참). [[0], :]은 팬시 인덱싱이라 축을 유지해 (1, 5)가 된다 (E 거짓).

<details><summary>English</summary>

**Q.** When my_array.shape == (32, 5), which of the following statements about the shape of each slicing result are true?

- **A.** my_array[:, :].shape is (32, 5).
- **B.** my_array[1:, :].shape is (31, 5).
- **C.** my_array[1, :].shape is (5,).
- **D.** my_array[:, 1].shape is (32,).
- **E.** my_array[[0], :].shape is (5,).

**Answer: A, B, C, D**

**Explanation** — A true. B true (32-1=31). C true. D true. E false: [[0], :] is fancy indexing, which keeps the axis, giving (1, 5).

</details>

---

## N-05 · 브로드캐스팅 규칙 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** A = np.ones((32, 5)) 이고 B = np.ones((32,)) 일 때, 브로드캐스팅(broadcasting)에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** A + B 는 정상적으로 계산되어 (32, 5) 결과를 반환한다.
- **B.** A + B 는 ValueError를 발생시킨다.
- **C.** A + B[:, None] 은 정상적으로 계산되어 (32, 5) 결과를 반환한다.
- **D.** A + 1 은 정상적으로 계산되어 (32, 5) 결과를 반환한다.
- **E.** 브로드캐스팅은 오른쪽(마지막) 축부터 크기를 비교하며, 크기가 같거나 한쪽이 1이면 가능하다.

**정답: B, C, D, E**

**해설** — (32,5)와 (32,)는 마지막 축 5와 32가 충돌하여 ValueError (A 거짓, B 참). B[:, None]은 (32,1)이 되어 열 방향으로 확장 → (32,5) (C 참). 스칼라는 모든 원소에 적용 (D 참). 브로드캐스팅은 뒤쪽 차원부터 비교 (E 참).

> 출처 메모: np.ones 는 배열을 만들기 위해서만 사용

<details><summary>English</summary>

**Q.** A = np.ones((32, 5)) and B = np.ones((32,)). Which of the following statements about broadcasting are true?

- **A.** A + B is computed normally and returns a (32, 5) result.
- **B.** A + B raises a ValueError.
- **C.** A + B[:, None] is computed normally and returns a (32, 5) result.
- **D.** A + 1 is computed normally and returns a (32, 5) result.
- **E.** Broadcasting compares the sizes from the rightmost (last) axis, and it is possible when the sizes are equal or one of them is 1.

**Answer: B, C, D, E**

**Explanation** — (32, 5) and (32,) conflict at the last axis (5 vs 32), so a ValueError is raised (A false, B true). B[:, None] is (32, 1), which expands along the columns -> (32, 5) (C true). A scalar is applied to every element (D true). Broadcasting compares the trailing dimensions first (E true).

</details>

---

## N-06 · 브로드캐스팅 결과 shape 계산 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** NumPy 브로드캐스팅 연산 결과의 shape에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** (3, 4) 배열과 (4,) 배열의 곱셈 결과 shape은 (3, 4)이다.
- **B.** (3, 4) 배열과 (3, 1) 배열의 곱셈 결과 shape은 (3, 4)이다.
- **C.** (3, 4) 배열과 (3,) 배열의 곱셈은 ValueError를 발생시킨다.
- **D.** (2, 2) 배열과 (2, 2, 1) 배열의 곱셈 결과 shape은 (2, 2, 2)이다.
- **E.** (32, 5) 배열과 (32, 1, 5) 배열의 덧셈 결과 shape은 (32, 5)이다.

**정답: A, B, C, D**

**해설** — (3,4)\*(4,) → (3,4) (A 참). (3,4)\*(3,1) → (3,4) (B 참). (3,4)\*(3,)는 마지막 축 4와 3이 충돌 → ValueError (C 참). (2,2)\*(2,2,1) → (2,2,2) (D 참). (32,5)+(32,1,5): (32,5)가 (1,32,5)로 확장되어 (32,1,5)와 결합 → (32,32,5) 이다 (E 거짓). ⚠️ 함정: E — "결과 shape은 (32, 5)" → "(32, 32, 5)"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about the shape of NumPy broadcasting results are true?

- **A.** The product of a (3, 4) array and a (4,) array has shape (3, 4).
- **B.** The product of a (3, 4) array and a (3, 1) array has shape (3, 4).
- **C.** The product of a (3, 4) array and a (3,) array raises a ValueError.
- **D.** The product of a (2, 2) array and a (2, 2, 1) array has shape (2, 2, 2).
- **E.** The sum of a (32, 5) array and a (32, 1, 5) array has shape (32, 5).

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true (4 vs 3 conflict). D true. E false: (32, 5) expands to (1, 32, 5), and combined with (32, 1, 5) the result is (32, 32, 5). ⚠️ Trap: E — "the result shape is (32, 5)" → "(32, 32, 5)" would make it TRUE.

</details>

---

## N-07 · 브로드캐스팅 규칙의 세부사항 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** NumPy 브로드캐스팅 규칙에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 두 배열의 차원 수가 다르면 작은 쪽 배열의 앞쪽에 크기 1인 축이 추가된 것으로 간주한다.
- **B.** 각 축에서 크기가 같거나 한쪽이 1이면 연산이 가능하다.
- **C.** 크기가 1인 축은 다른 배열의 크기에 맞춰 확장된다.
- **D.** 스칼라 값은 배열의 모든 원소에 적용된다.
- **E.** 브로드캐스팅은 항상 원본 배열을 복사해 메모리를 추가로 사용한다.

**정답: A, B, C, D**

**해설** — 차원 수가 다르면 앞에 1축을 추가해 정렬 (A 참). 각 축에서 같거나 1이면 가능 (B 참). 1인 축은 확장 (C 참). 스칼라는 전체 적용 (D 참). 브로드캐스팅은 논리적 확장이며 실제로 데이터를 복사하지 않는 경우가 많다 (E 거짓). ⚠️ 함정: E — "항상 원본을 복사해 메모리를 추가로 사용" → "복사하지 않는다"이면 참.

> 출처 메모: 보기 E(복사 여부) 설명은 DOCX 밖

<details><summary>English</summary>

**Q.** Which of the following statements about the NumPy broadcasting rules are true?

- **A.** If two arrays have different numbers of dimensions, the smaller array is considered to have size-1 axes added in front.
- **B.** On each axis the operation is possible if the sizes are equal or one of them is 1.
- **C.** An axis of size 1 is expanded to match the size of the other array.
- **D.** A scalar value is applied to every element of the array.
- **E.** Broadcasting always copies the original arrays and therefore uses extra memory.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: broadcasting is a logical expansion and often does not actually copy the data. ⚠️ Trap: E — "always copies the arrays" → "it does not copy" would make it TRUE.

</details>

---

## N-08 · 연산 결과의 shape · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 는 shape이 (32, 5) 인 numpy.ndarray 다. 다음 연산 결과의 shape에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** my_array < 0 의 shape은 (32, 5) 이다.
- **B.** my_array.T 의 shape은 (5, 32) 이다.
- **C.** my_array.T.T 의 shape은 (32, 5) 이다.
- **D.** my_array + my_array 의 shape은 (32, 5) 이다.
- **E.** my_array + my_array[:, None, :] 의 shape은 (32, 5) 이다.

**정답: A, B, C, D**

**해설** — 비교 연산은 같은 shape의 불리언 배열 (A 참). 전치는 축 순서를 뒤집음 (B 참). 두 번 전치하면 원래 shape (C 참). 같은 shape끼리의 덧셈 (D 참). (32,5)는 (1,32,5)로 확장되고 (32,1,5)와 결합해 (32,32,5)가 된다 (E 거짓).

<details><summary>English</summary>

**Q.** my_array is a numpy.ndarray with shape (32, 5). Which of the following statements about the shapes of these results are true?

- **A.** my_array < 0 has shape (32, 5).
- **B.** my_array.T has shape (5, 32).
- **C.** my_array.T.T has shape (32, 5).
- **D.** my_array + my_array has shape (32, 5).
- **E.** my_array + my_array[:, None, :] has shape (32, 5).

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: (32, 5) expands to (1, 32, 5), and combined with (32, 1, 5) the result is (32, 32, 5).

</details>

---

## N-09 · 집계 함수의 axis와 반환형 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.arange(4).reshape(2, -1) 이고 arr 은 shape이 (32, 5) 인 배열일 때, 옳은 것을 모두 고르시오.

- **A.** np.mean(arr, axis=0).shape 의 결과는 (5,) 이다.
- **B.** np.mean(arr, axis=1).shape 의 결과는 (32,) 이다.
- **C.** type(np.sum(arr, axis=0)) 은 numpy.ndarray 다.
- **D.** type(np.sum(arr)) 은 numpy.ndarray 다.
- **E.** my_array.sum(axis=1).shape 의 결과는 (2,) 이다.

**정답: A, B, C, E**

**해설** — axis=0은 행 방향으로 축약 → (5,) (A 참). axis=1 → (32,) (B 참). axis를 지정한 집계는 ndarray를 반환 (C 참). axis 없이 전체를 집계하면 스칼라(numpy.int64 등)를 반환하며 ndarray가 아니다 (D 거짓). (2,2)에서 axis=1 집계 → (2,) (E 참). ⚠️ 함정: D — "type(np.sum(arr))은 ndarray" → "스칼라다"이면 참.

<details><summary>English</summary>

**Q.** my_array = np.arange(4).reshape(2, -1) and arr is an array with shape (32, 5). Which of the following statements are true?

- **A.** np.mean(arr, axis=0).shape is (5,).
- **B.** np.mean(arr, axis=1).shape is (32,).
- **C.** type(np.sum(arr, axis=0)) is numpy.ndarray.
- **D.** type(np.sum(arr)) is numpy.ndarray.
- **E.** my_array.sum(axis=1).shape is (2,).

**Answer: A, B, C, E**

**Explanation** — axis=0 reduces over the rows -> (5,) (A true). axis=1 -> (32,) (B true). An aggregation with axis returns an ndarray (C true). Aggregating everything without axis returns a scalar (numpy.int64 etc.), not an ndarray (D false). For a (2,2) array, axis=1 gives (2,) (E true). ⚠️ Trap: D — "type(np.sum(arr)) is numpy.ndarray" → "it is a scalar" would make it TRUE.

</details>

---

## N-10 · keepdims 파라미터 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 집계 함수의 keepdims 파라미터에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** keepdims=True 를 사용하면 축약된 축이 크기 1로 결과에 유지된다.
- **B.** shape이 (2, 2) 인 배열에서 sum(axis=1, keepdims=True) 의 결과 shape은 (2, 1) 이다.
- **C.** keepdims=True 는 브로드캐스팅을 위해 자주 사용된다(예: 열 단위 스케일링).
- **D.** keepdims=True 와 keepdims=False 는 항상 같은 shape을 반환한다.
- **E.** shape이 (32, 5) 인 배열에서 mean(axis=0, keepdims=True) 의 결과 shape은 (1, 5) 이다.

**정답: A, B, C, E**

**해설** — keepdims는 축약 축을 크기 1로 유지 (A 참). (2,2)에서 axis=1 → (2,1) (B 참). 열별 스케일링 등 브로드캐스팅에 유용 (C 참). keepdims 여부에 따라 shape이 달라진다 (D 거짓). (32,5)에서 axis=0 → (1,5) (E 참). ⚠️ 함정: D — "keepdims True/False는 항상 같은 shape" → "다른 shape"이면 참.

> 출처 메모: 자료에 없음/제외: keepdims

<details><summary>English</summary>

**Q.** Which of the following statements about the keepdims parameter of aggregation functions are true?

- **A.** With keepdims=True the reduced axis is kept in the result with size 1.
- **B.** For an array with shape (2, 2), sum(axis=1, keepdims=True) has shape (2, 1).
- **C.** keepdims=True is often used for broadcasting (for example column-wise scaling).
- **D.** keepdims=True and keepdims=False always return the same shape.
- **E.** For an array with shape (32, 5), mean(axis=0, keepdims=True) has shape (1, 5).

**Answer: A, B, C, E**

**Explanation** — A true. B true. C true. D false: the shape differs depending on keepdims. E true. ⚠️ Trap: D — "always the same shape" → "different shapes" would make it TRUE.

</details>

---

## N-11 · 뷰(View)와 복사본(Copy) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 다음 코드에서 sub 을 수정했을 때 원본 배열 arr 의 값이 실제로 바뀌는 경우를 모두 고르시오.

arr = np.array([10, 20, 30, 40, 50])

- **A.** sub = arr[1:4]  →  sub[0] = 99
- **B.** sub = arr[[1, 2]]  →  sub[0] = 99
- **C.** sub = arr[arr > 25]  →  sub[0] = 99
- **D.** sub = arr.reshape(5, 1)  →  sub[0, 0] = 99
- **E.** sub = arr.copy()  →  sub[0] = 99

**정답: A, D**

**해설** — 기본 슬라이싱(arr[1:4])과 reshape는 메모리를 공유하는 뷰를 만들므로 원본이 바뀐다 (A, D 참). 팬시 인덱싱(arr[[1,2]]), 불리언 마스크(arr[arr>25]), copy()는 복사본을 만들므로 원본이 바뀌지 않는다 (B, C, E 거짓). ⚠️ 함정: E — copy() 는 복사본 — "arr[0]" 같은 뷰였다면 참.

> 출처 메모: ⚠ 보기 E: .copy() 는 자료에 없음

<details><summary>English</summary>

**Q.** In the code below, for which cases does modifying sub actually change the original array arr?

arr = np.array([10, 20, 30, 40, 50])

- **A.** sub = arr[1:4] -> sub[0] = 99
- **B.** sub = arr[[1, 2]] -> sub[0] = 99
- **C.** sub = arr[arr > 25] -> sub[0] = 99
- **D.** sub = arr.reshape(5, 1) -> sub[0, 0] = 99
- **E.** sub = arr.copy() -> sub[0] = 99

**Answer: A, D**

**Explanation** — Basic slicing (arr[1:4]) and reshape create views that share memory, so the original changes (A, D true). Fancy indexing (arr[[1, 2]]), boolean masks (arr[arr > 25]) and copy() create copies, so the original does not change (B, C, E false). ⚠️ Trap: E — copy() makes a copy — a view such as "arr[0]" would make it TRUE.

</details>

---

## N-12 · 뷰/복사 심화 (역순, 전치, append) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 1차원 배열 arr = np.array([10, 20, 30, 40, 50]) 에 대한 설명 중 옳은 것을 모두 고르시오.

- **A.** arr[::-1] 은 뷰이며, 이를 수정하면 원본 arr 이 바뀐다.
- **B.** np.append(arr, 42) 는 복사본을 만들므로 수정해도 원본 arr 이 바뀌지 않는다.
- **C.** arr + 0 은 새 배열을 만들므로 수정해도 원본 arr 이 바뀌지 않는다.
- **D.** 1차원 배열에서 arr.T 는 원본과 메모리를 공유하므로, 이를 수정하면 원본 arr 이 바뀐다.
- **E.** arr.reshape(-1) 은 복사본을 반환하므로 수정해도 원본이 바뀌지 않는다.

**정답: A, B, C, D**

**해설** — 역순 슬라이싱은 뷰 (A 참). np.append는 새 배열 (B 참). 산술 연산은 새 배열 (C 참). 1차원 배열의 전치는 데이터를 공유하는 뷰이므로 수정하면 원본이 바뀐다 (D 참). reshape(-1)은 (가능한 경우) 뷰를 반환한다 (E 거짓). ⚠️ 함정: E — "reshape(-1)은 복사본을 반환" → "뷰를 반환"이면 참.

> 출처 메모: ⚠ 보기 A: arr[::-1] 뷰는 DOCX에 없음 (np.sort(..)[::-1]만 있음)

<details><summary>English</summary>

**Q.** Which of the following statements about the 1D array arr = np.array([10, 20, 30, 40, 50]) are true?

- **A.** arr[::-1] is a view, so modifying it changes the original arr.
- **B.** np.append(arr, 42) creates a copy, so modifying it does not change the original arr.
- **C.** arr + 0 creates a new array, so modifying it does not change the original arr.
- **D.** For a 1D array arr.T shares memory with the original, so modifying it changes the original arr.
- **E.** arr.reshape(-1) returns a copy, so modifying it does not change the original.

**Answer: A, B, C, D**

**Explanation** — A true (reverse slicing is a view). B true. C true. D true (the transpose of a 1D array shares the data). E false: reshape(-1) returns a view when possible. ⚠️ Trap: E — "reshape(-1) returns a copy" → "it returns a view" would make it TRUE.

</details>

---

## N-13 · 불리언 마스킹과 평탄화 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** data = np.array([[1, -2, 3], [-4, 5, -6]]) 에 대한 설명 중 옳은 것을 모두 고르시오.

- **A.** (data > 0) 의 결과는 data 와 동일한 shape (2, 3) 을 갖는 불리언 배열이다.
- **B.** data[data > 0] 의 결과 shape은 (2, 3) 으로 유지된다.
- **C.** data[data > 0] 의 결과는 1차원 배열 array([1, 3, 5]) 이며 shape은 (3,) 이다.
- **D.** np.where(data > 0, data, 0) 의 결과는 조건에 맞지 않는 값을 0으로 바꾼 (2, 3) 배열이다.
- **E.** data[data < 0] = 0 을 실행하면 원본 배열 data 의 음수 원소가 0으로 바뀐다.

**정답: A, C, D, E**

**해설** — 비교 연산은 같은 shape의 불리언 배열을 만든다 (A 참). 불리언 인덱싱 결과는 항상 1차원으로 평탄화된다 (B 거짓, C 참). np.where는 원래 shape을 유지하며 값을 대체한다 (D 참). 마스크를 이용한 할당은 원본을 실제로 수정한다 (E 참).

> 출처 메모: ⚠ 보기 D: np.where 는 자료에 없음

<details><summary>English</summary>

**Q.** data = np.array([[1, -2, 3], [-4, 5, -6]]). Which of the following statements are true?

- **A.** (data > 0) gives a boolean array with the same shape (2, 3) as data.
- **B.** data[data > 0] keeps the shape (2, 3).
- **C.** data[data > 0] is the 1D array array([1, 3, 5]) with shape (3,).
- **D.** np.where(data > 0, data, 0) gives a (2, 3) array in which the values that do not satisfy the condition are replaced by 0.
- **E.** Executing data[data < 0] = 0 changes the negative elements of the original array data to 0.

**Answer: A, C, D, E**

**Explanation** — A true. B false: boolean indexing always flattens the result. C true. D true. E true.

</details>

---

## N-14 · 3차원 배열의 axis 집계 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** shape이 (2, 3, 4) 인 3차원 배열 arr3d 에 대한 설명 중 옳은 것을 모두 고르시오.

- **A.** arr3d.sum(axis=0) 의 결과 shape은 (3, 4) 이다.
- **B.** arr3d.sum(axis=1) 의 결과 shape은 (2, 4) 이다.
- **C.** arr3d.sum(axis=2) 의 결과 shape은 (2, 3) 이다.
- **D.** arr3d.sum(axis=-1) 은 arr3d.sum(axis=2) 와 동일한 결과를 준다.
- **E.** 집계 연산에서 axis=k 를 지정하면 k번째 축은 결과에 그대로 유지된다.

**정답: A, B, C, D**

**해설** — axis=k 는 k번째 축을 축약(제거)한다. axis=0 → (3,4) (A 참), axis=1 → (2,4) (B 참), axis=2 → (2,3) (C 참). 음수 축 -1은 마지막 축(2)과 같다 (D 참). 축약된 축은 결과에서 사라진다 (E 거짓).

> 출처 메모: 보기 D: axis=-1 (음수 axis)은 자료에 없음

<details><summary>English</summary>

**Q.** For a 3D array arr3d with shape (2, 3, 4), which of the following statements are true?

- **A.** arr3d.sum(axis=0) has shape (3, 4).
- **B.** arr3d.sum(axis=1) has shape (2, 4).
- **C.** arr3d.sum(axis=2) has shape (2, 3).
- **D.** arr3d.sum(axis=-1) gives the same result as arr3d.sum(axis=2).
- **E.** In an aggregation, specifying axis=k keeps the k-th axis in the result.

**Answer: A, B, C, D**

**Explanation** — axis=k collapses (removes) the k-th axis: axis=0 -> (3,4) (A true), axis=1 -> (2,4) (B true), axis=2 -> (2,3) (C true). The negative axis -1 means the last axis (2) (D true). The collapsed axis disappears from the result (E false).

</details>

---

## N-15 · reshape(-1,-1), newaxis, np.dot · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** NumPy의 차원 추가/추론과 np.dot 사용에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.arange(4).reshape(-1, -1) 은 ValueError를 발생시킨다.
- **B.** np.arange(4)[:, None].shape 의 결과는 (4, 1) 이다.
- **C.** np.arange(4)[None, :].shape 의 결과는 (1, 4) 이다.
- **D.** np.dot(A, B) 에서 A가 (32, 5), B가 (5, 1) 이면 결과 shape은 (32, 1) 이다.
- **E.** np.dot(A, B) 에서 A가 (32, 5), B가 (32,) 이면 결과 shape은 (32,) 이다.

**정답: A, B, C, D**

**해설** — reshape에서 -1은 한 번만 지정할 수 있다 → ValueError (A 참). [:, None]은 (4,1), [None, :]은 (1,4) (B, C 참). np.dot도 행렬곱 규칙을 따르므로 (32,5)·(5,1) → (32,1) (D 참). (32,5)와 (32,)는 5와 32가 정렬되지 않아 ValueError다 (E 거짓).

> 티어 근거: [:, None], [None, :] (DOCX) + np.dot (lecture); ⚠ reshape(-1,-1) is extra

> 출처 메모: np.dot 은 강의 코드; ⚠ 보기 A: reshape(-1,-1) 은 자료에 없음; [:,None]·[None,:] 은 DOCX

<details><summary>English</summary>

**Q.** Which of the following statements about adding/inferring dimensions and using np.dot in NumPy are true?

- **A.** np.arange(4).reshape(-1, -1) raises a ValueError.
- **B.** np.arange(4)[:, None].shape is (4, 1).
- **C.** np.arange(4)[None, :].shape is (1, 4).
- **D.** In np.dot(A, B), if A is (32, 5) and B is (5, 1) the result shape is (32, 1).
- **E.** In np.dot(A, B), if A is (32, 5) and B is (32,) the result shape is (32,).

**Answer: A, B, C, D**

**Explanation** — In reshape, -1 can be specified only once -> ValueError (A true). [:, None] gives (4,1) and [None, :] gives (1,4) (B, C true). np.dot follows the matrix multiplication rule, so (32,5) with (5,1) -> (32,1) (D true). (32,5) and (32,) do not align (5 vs 32), so a ValueError is raised (E false).

</details>

---

## N-16 · reshape / transpose / 행렬곱 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** NumPy의 차원 변경과 행렬 연산에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** shape이 (12,) 인 1차원 배열을 .reshape(3, -1) 하면 shape이 (3, 4) 로 정해진다.
- **B.** shape이 (3, 4) 인 배열 X 의 전치 X.T 의 shape은 (4, 3) 이다.
- **C.** shape이 (32, 5) 인 A 와 (5, 1) 인 B 의 행렬곱 A @ B 의 결과 shape은 (32, 1) 이다.
- **D.** shape이 (3, 4) 인 배열과 (3, 1) 인 배열의 행렬곱 @ 은 안쪽 차원 불일치로 ValueError를 발생시킨다.
- **E.** 요소별 곱셈 연산자 \* 와 행렬곱 연산자 @ 는 동일한 연산을 수행한다.

**정답: A, B, C, D**

**해설** — reshape(3, -1)에서 -1은 12÷3=4로 자동 계산 (A 참). 전치는 축 순서를 뒤집음 (B 참). (32,5)@(5,1) → 바깥 차원 (32,1) (C 참). (3,4)@(3,1)은 안쪽 차원 4≠3 → ValueError (D 참). \* 는 요소별 곱, @ 는 행렬곱으로 서로 다르다 (E 거짓). ⚠️ 함정: E — "\*와 @는 동일한 연산" → "다른 연산(요소별 vs 행렬곱)"이면 참.

> 티어 근거: reshape/.T (DOCX) + matrix product

> 출처 메모: 행렬곱(@)은 강의의 np.dot/np.matmul 수준; reshape/.T 는 DOCX

<details><summary>English</summary>

**Q.** Which of the following statements about changing dimensions and matrix operations in NumPy are true?

- **A.** Reshaping a 1D array with shape (12,) using .reshape(3, -1) gives shape (3, 4).
- **B.** For an array X with shape (3, 4) the transpose X.T has shape (4, 3).
- **C.** The matrix product A @ B of A with shape (32, 5) and B with shape (5, 1) has shape (32, 1).
- **D.** The matrix product @ of an array with shape (3, 4) and one with shape (3, 1) raises a ValueError because the inner dimensions do not match.
- **E.** The element-wise multiplication operator \* and the matrix multiplication operator @ perform the same operation.

**Answer: A, B, C, D**

**Explanation** — A true (-1 is computed as 12/3=4). B true. C true. D true (4 != 3). E false: \* is element-wise and @ is matrix multiplication. ⚠️ Trap: E — "\* and @ perform the same operation" → "they differ (element-wise vs matrix product)" would make it TRUE.

</details>

---

## N-17 · reshape(2, -1) 배열의 연산 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.arange(4).reshape(2, -1) 에 대한 설명 중 옳은 것을 모두 고르시오.

- **A.** my_array.shape 의 결과는 (2, 2) 이다.
- **B.** my_array \* 2 + 1 의 결과 shape은 (2, 2) 이다.
- **C.** my_array[my_array > 0] 의 결과 shape은 (3,) 이며 값은 array([1, 2, 3]) 이다.
- **D.** my_array[(my_array > 0) & (my_array % 2 == 0)] 의 결과 shape은 (1,) 이며 값은 array([2]) 이다.
- **E.** my_array \* my_array.reshape(2, 2, -1) 의 결과 shape은 (2, 2) 이다.

**정답: A, B, C, D**

**해설** — np.arange(4).reshape(2,-1) = [[0,1],[2,3]] → (2,2) (A 참). 요소별 연산은 shape 유지 (B 참). 불리언 마스크는 1차원으로 평탄화 → (3,) (C 참). 두 조건을 & 로 결합 → 값 2만 남아 (1,) (D 참). (2,2)와 (2,2,1)의 연산은 (2,2,2)가 된다 (E 거짓).

<details><summary>English</summary>

**Q.** my_array = np.arange(4).reshape(2, -1). Which of the following statements are true?

- **A.** my_array.shape is (2, 2).
- **B.** my_array \* 2 + 1 has shape (2, 2).
- **C.** my_array[my_array > 0] has shape (3,) with the values array([1, 2, 3]).
- **D.** my_array[(my_array > 0) & (my_array % 2 == 0)] has shape (1,) with the value array([2]).
- **E.** my_array \* my_array.reshape(2, 2, -1) has shape (2, 2).

**Answer: A, B, C, D**

**Explanation** — A true ([[0,1],[2,3]]). B true. C true (flattened). D true. E false: (2,2) and (2,2,1) give (2,2,2).

</details>

---

## N-18 · 불리언 집계 (count_nonzero, any, all) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.arange(4).reshape(2, -1) (즉 [[0, 1], [2, 3]]) 에 대한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.count_nonzero(my_array == 0) 의 결과는 정수 1 이다.
- **B.** np.any(my_array == 0) 의 결과는 True 이다.
- **C.** np.all(my_array == 0, axis=1) 의 결과는 array([False, False]) 이다.
- **D.** np.all(my_array >= 0) 의 결과는 True 이다.
- **E.** np.count_nonzero(my_array) 의 결과는 4 이다.

**정답: A, B, C, D**

**해설** — 0은 원소 하나뿐 → 1 (A 참). any → True (B 참). 각 행에 0이 아닌 값이 있으므로 행 단위 all은 False, False (C 참). 모든 원소가 0 이상 → all True (D 참). 0이 아닌 원소는 1,2,3 세 개이므로 count_nonzero(my_array)는 3이다. 따라서 E는 거짓.

<details><summary>English</summary>

**Q.** my_array = np.arange(4).reshape(2, -1) (that is [[0, 1], [2, 3]]). Which of the following statements are true?

- **A.** np.count_nonzero(my_array == 0) is the integer 1.
- **B.** np.any(my_array == 0) is True.
- **C.** np.all(my_array == 0, axis=1) is array([False, False]).
- **D.** np.all(my_array >= 0) is True.
- **E.** np.count_nonzero(my_array) is 4.

**Answer: A, B, C, D**

**Explanation** — There is only one zero -> 1 (A true). any -> True (B true). Each row contains a non-zero value, so the row-wise all is False, False (C true). All elements are >= 0, so all is True (D true). The non-zero elements are 1, 2 and 3, so count_nonzero(my_array) is 3, not 4 (E false).

</details>

---

## N-19 · 빈 배열에서의 any / all · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 빈 배열(원소 수가 0인 배열)에 대한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.zeros((0, 1, 0)) 의 shape은 (0, 1, 0) 이다.
- **B.** np.zeros((0, 1, 0)) 의 size는 0 이다.
- **C.** np.zeros((0, 1, 0)) 의 ndim은 3 이다.
- **D.** np.all(np.array([])) 의 결과는 True 이다.
- **E.** np.any(np.array([])) 의 결과는 True 이다.

**정답: A, B, C, D**

**해설** — 빈 배열도 shape은 튜플로 표현된다 (A 참). size = 0 (B 참). ndim = 3 (C 참). 원소가 없으므로 '모두 참'은 공허하게 참 → np.all은 True (D 참). np.any는 거짓을 반환한다 (E 거짓). ⚠️ 함정: E — "np.any(np.array([]))는 True" → "False"이면 참.

> 출처 메모: 자료에 없음/제외: 빈 배열의 any/all 동작

<details><summary>English</summary>

**Q.** Which of the following statements about empty arrays (arrays with zero elements) are true?

- **A.** np.zeros((0, 1, 0)).shape is (0, 1, 0).
- **B.** np.zeros((0, 1, 0)).size is 0.
- **C.** np.zeros((0, 1, 0)).ndim is 3.
- **D.** np.all(np.array([])) is True.
- **E.** np.any(np.array([])) is True.

**Answer: A, B, C, D**

**Explanation** — The shape of an empty array is still a tuple (A true). size = 0 (B true). ndim = 3 (C true). Since there are no elements, "all" is vacuously true, so np.all is True (D true). np.any returns False (E false). ⚠️ Trap: E — "np.any of an empty array is True" → "it is False" would make it TRUE.

</details>

---

## N-20 · 고유값/빈도/정렬 (unique, bincount, sort, argsort) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.array([3, 1, 2]) 에 대한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.unique(my_array) 의 결과는 오름차순으로 정렬된 array([1, 2, 3]) 이다.
- **B.** np.bincount(my_array) 의 결과는 array([0, 1, 1, 1]) 이다.
- **C.** np.sort(my_array)[::-1] 의 결과는 내림차순 정렬된 array([3, 2, 1]) 이다.
- **D.** np.argsort(my_array) 의 결과는 정렬 후 원본의 위치 인덱스인 array([1, 2, 0]) 이다.
- **E.** np.unique(my_array == 0) 의 결과는 array([False, True]) 이다.

**정답: A, B, C, D**

**해설** — unique는 중복 제거 + 오름차순 (A 참). bincount는 0부터 최댓값(3)까지의 빈도 → [0,1,1,1] (B 참). 내림차순 (C 참). argsort = 정렬했을 때의 원래 인덱스 [1,2,0] (D 참). my_array == 0 은 전부 False이므로 unique 결과는 array([False]) 하나뿐이다 (E 거짓). ⚠️ 함정: E — my_array == 0 은 모두 False 이므로 unique 는 [False] 다.

<details><summary>English</summary>

**Q.** my_array = np.array([3, 1, 2]). Which of the following statements are true?

- **A.** np.unique(my_array) is array([1, 2, 3]) sorted in ascending order.
- **B.** np.bincount(my_array) is array([0, 1, 1, 1]).
- **C.** np.sort(my_array)[::-1] is the descending order array([3, 2, 1]).
- **D.** np.argsort(my_array) is array([1, 2, 0]), the original indices in sorted order.
- **E.** np.unique(my_array == 0) is array([False, True]).

**Answer: A, B, C, D**

**Explanation** — A true (unique removes duplicates and sorts). B true (counts from 0 up to the maximum 3). C true. D true. E false: my_array == 0 is all False, so the result is array([False]) only. ⚠️ Trap: E — my_array == 0 is all False, so unique is [False].

</details>

---

## N-21 · bincount 제약과 정렬 함수의 동작 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** NumPy 함수들의 동작에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.bincount 는 음수를 포함한 배열에 대해 ValueError를 발생시킨다.
- **B.** np.bincount 는 실수(float) 배열에도 그대로 사용할 수 있으며 각 값의 빈도를 반환한다.
- **C.** np.sort 는 원본 배열을 변경하지 않고 정렬된 새 배열을 반환한다.
- **D.** arr.sort() 는 원본 배열을 제자리에서(in-place) 정렬한다.
- **E.** np.unique(arr, return_counts=True) 는 고유값과 각 고유값의 등장 횟수를 함께 반환한다.

**정답: A, C, D, E**

**해설** — np.bincount는 음수에서 ValueError (A 참). float 배열은 정수로 캐스팅할 수 없어 TypeError가 발생한다 (B 거짓). np.sort는 복사본을 반환 (C 참). ndarray.sort()는 in-place (D 참). return_counts=True로 빈도까지 얻는다 (E 참). ⚠️ 함정: B — "실수 배열에도 그대로 사용할 수 있으며" → "정수 배열에만 쓸 수 있다"이면 참.

> 출처 메모: 자료에 없음/제외: bincount 제약·arr.sort()·return_counts

<details><summary>English</summary>

**Q.** Which of the following statements about the behaviour of NumPy functions are true?

- **A.** np.bincount raises a ValueError for an array that contains negative numbers.
- **B.** np.bincount can be used directly on a float array and returns the frequency of each value.
- **C.** np.sort does not change the original array and returns a new sorted array.
- **D.** arr.sort() sorts the original array in place.
- **E.** np.unique(arr, return_counts=True) returns the unique values together with the number of occurrences of each.

**Answer: A, C, D, E**

**Explanation** — A true. B false: a float array cannot be cast to integers, so a TypeError is raised. C true. D true. E true. ⚠️ Trap: B — "can be used on float arrays" → "only on integer arrays" would make it TRUE.

</details>

---

## N-22 · NaN 처리 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 결측값(NaN)이 포함된 배열을 다루는 방법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.mean 을 NaN이 포함된 배열에 적용하면 NaN이 반환된다.
- **B.** np.nanmean 은 NaN을 무시하고 평균을 계산한다.
- **C.** np.isnan(x) 는 NaN 위치를 True로 표시하는 불리언 배열을 반환한다.
- **D.** NaN이 포함된 데이터에서는 통계량을 계산하기 전에 결측 처리를 고려해야 한다.
- **E.** np.isnan 은 문자열 배열에도 사용할 수 있다.

**정답: A, B, C, D**

**해설** — NaN은 전파되므로 np.mean은 NaN (A 참). np.nanmean은 NaN 무시 (B 참). np.isnan은 불리언 마스크 (C 참). 결측 처리가 필요 (D 참). np.isnan은 수치형(NaN을 가질 수 있는) 배열에 사용한다 (E 거짓). ⚠️ 함정: E — "문자열 배열에도 사용할 수 있다" → "숫자형에만 쓸 수 있다"이면 참.

> 출처 메모: 자료에 없음/제외: NaN 처리(nanmean/isnan)

<details><summary>English</summary>

**Q.** Which of the following statements about dealing with missing values (NaN) in an array are true?

- **A.** Applying np.mean to an array containing NaN returns NaN.
- **B.** np.nanmean ignores NaN and computes the mean.
- **C.** np.isnan(x) returns a boolean array marking the NaN positions with True.
- **D.** For data containing NaN, missing-value handling should be considered before computing statistics.
- **E.** np.isnan can also be used on string arrays.

**Answer: A, B, C, D**

**Explanation** — A true (NaN propagates). B true. C true. D true. E false: np.isnan is used on numeric arrays (arrays that can hold NaN). ⚠️ Trap: E — "can also be used on string arrays" → "only on numeric arrays" would make it TRUE.

</details>

---

## N-23 · 브로드캐스팅을 이용한 스케일링 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 2차원 배열 col 에 대해 열 단위 min-max 스케일링을 구현하는 방법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** col.min(axis=0) 은 각 열의 최솟값을 담은 1차원 배열을 반환한다.
- **B.** col.max(axis=0) - col.min(axis=0) 은 각 열의 범위(range)를 담은 배열이다.
- **C.** col.min(axis=0, keepdims=True) 을 사용하면 브로드캐스팅으로 열별 연산을 할 수 있다.
- **D.** 스케일링 결과는 각 열이 [0, 1] 범위가 되도록 변환된다.
- **E.** 열 단위 스케일링은 axis=1 을 사용해 계산한다.

**정답: A, B, C, D**

**해설** — axis=0 집계로 각 열의 최솟값/최댓값을 구한다 (A, B 참). keepdims=True로 (1, n) 형태를 만들면 브로드캐스팅이 자연스럽다 (C 참). min-max는 각 열을 [0,1]로 변환 (D 참). 열 단위 집계는 axis=0이며, axis=1은 행 단위다 (E 거짓). ⚠️ 함정: E — "열 단위 스케일링은 axis=1" → "axis=0"이면 참.

> 출처 메모: 자료에 없음/제외: min/max/keepdims 스케일링 구현

<details><summary>English</summary>

**Q.** Which of the following statements about implementing column-wise min-max scaling for a 2D array col are true?

- **A.** col.min(axis=0) returns a 1D array containing the minimum of each column.
- **B.** col.max(axis=0) - col.min(axis=0) is an array containing the range of each column.
- **C.** Using col.min(axis=0, keepdims=True) allows column-wise operations through broadcasting.
- **D.** The scaling result transforms each column to the range [0, 1].
- **E.** Column-wise scaling is computed using axis=1.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: column-wise aggregation uses axis=0; axis=1 is row-wise. ⚠️ Trap: E — "column-wise scaling uses axis=1" → "axis=0" would make it TRUE.

</details>

---

## N-24 · searchsorted · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** np.searchsorted 함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 정렬된 배열에서 특정 값을 삽입했을 때 정렬 상태를 유지하는 위치(인덱스)를 반환한다.
- **B.** np.searchsorted([1, 3, 5], 4) 의 결과는 2 다.
- **C.** 배열 형태로 여러 값을 한 번에 전달할 수 있다.
- **D.** 정렬되지 않은 배열에 사용하면 결과가 올바르다는 보장이 없다.
- **E.** np.searchsorted([1, 3, 5], 4) 의 결과는 4 다.

**정답: A, B, C, D**

**해설** — 삽입 위치를 반환 (A 참). 4는 3과 5 사이이므로 인덱스 2 (B 참, E 거짓). 여러 값도 배열로 전달 가능 (C 참). 전제가 정렬된 배열이므로 정렬되지 않으면 신뢰할 수 없다 (D 참).

> 출처 메모: 자료에 없음/제외: searchsorted

<details><summary>English</summary>

**Q.** Which of the following statements about the np.searchsorted function are true?

- **A.** It returns the index at which a value can be inserted into a sorted array so that the sorted order is preserved.
- **B.** np.searchsorted([1, 3, 5], 4) is 2.
- **C.** Several values can be passed at once as an array.
- **D.** If it is used on an unsorted array the result is not guaranteed to be correct.
- **E.** np.searchsorted([1, 3, 5], 4) is 4.

**Answer: A, B, C, D**

**Explanation** — A true. B true (4 lies between 3 and 5, so index 2), and E is false. C true. D true (the input must be sorted).

</details>

---

## N-25 · 인덱싱 방식별 복사/뷰 특성 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** NumPy 인덱싱 방식과 메모리 특성에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 기본 슬라이싱(arr[1:3])은 뷰를 반환한다.
- **B.** 팬시 인덱싱(arr[[1, 2]])은 복사본을 반환한다.
- **C.** 불리언 마스킹(arr[arr > 0])은 복사본을 반환한다.
- **D.** 뷰를 수정하면 원본 배열의 값이 바뀔 수 있다.
- **E.** 팬시 인덱싱으로 얻은 배열을 수정하면 항상 원본도 함께 바뀐다.

**정답: A, B, C, D**

**해설** — 슬라이싱 = 뷰 (A 참). 팬시 인덱싱 = 복사 (B 참). 불리언 마스크 = 복사 (C 참). 뷰 수정은 원본에 영향 (D 참). 팬시 인덱싱은 복사본이므로 원본이 바뀌지 않는다 (E 거짓). ⚠️ 함정: E — "팬시 인덱싱 결과를 수정하면 항상 원본도 바뀐다" → "복사본이라 바뀌지 않는다"이면 참.

<details><summary>English</summary>

**Q.** Which of the following statements about NumPy indexing styles and their memory characteristics are true?

- **A.** Basic slicing (arr[1:3]) returns a view.
- **B.** Fancy indexing (arr[[1, 2]]) returns a copy.
- **C.** Boolean masking (arr[arr > 0]) returns a copy.
- **D.** Modifying a view can change the values of the original array.
- **E.** Modifying an array obtained by fancy indexing always changes the original as well.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: fancy indexing returns a copy, so the original does not change. ⚠️ Trap: E — "always changes the original" → "it is a copy, so the original is unchanged" would make it TRUE.

</details>

---

## N-26 · 배열 생성 함수 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** NumPy 배열 생성 함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.arange(5) 는 0부터 4까지의 정수 배열을 만든다.
- **B.** np.arange(1, 10, 2) 는 1, 3, 5, 7, 9 를 만든다.
- **C.** np.zeros((2, 3)) 은 0으로 채워진 (2, 3) 배열을 만든다.
- **D.** np.ones((3,)) 은 1로 채워진 길이 3의 1차원 배열을 만든다.
- **E.** np.arange(5) 의 dtype은 float64 다.

**정답: A, B, C, D**

**해설** — np.arange(5) = [0,1,2,3,4] (A 참). step 2 (B 참). np.zeros (C 참). np.ones (D 참). 정수 인자를 준 np.arange의 dtype은 정수(int64 등)다 (E 거짓).

> 출처 메모: 자료에 없음/제외: np.zeros/np.ones/arange(step)

<details><summary>English</summary>

**Q.** Which of the following statements about NumPy array creation functions are true?

- **A.** np.arange(5) creates an integer array from 0 to 4.
- **B.** np.arange(1, 10, 2) creates 1, 3, 5, 7, 9.
- **C.** np.zeros((2, 3)) creates a (2, 3) array filled with 0.
- **D.** np.ones((3,)) creates a 1D array of length 3 filled with 1.
- **E.** The dtype of np.arange(5) is float64.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: with integer arguments the dtype of np.arange is an integer type (int64, ...).

</details>

---

## N-27 · 비교 연산과 논리 연산자 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 배열의 비교/논리 연산에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 배열에 대한 비교 연산(arr > 0)의 결과 dtype은 bool 이다.
- **B.** 여러 조건을 결합할 때는 & (AND), \| (OR), ~ (NOT) 연산자를 사용한다.
- **C.** & 와 \| 를 사용할 때는 각 조건을 괄호로 묶어야 연산자 우선순위 문제를 피할 수 있다.
- **D.** and, or 파이썬 키워드는 배열 원소별 논리 연산에 적합하지 않다.
- **E.** 배열 비교 연산의 결과는 항상 스칼라 bool 값이다.

**정답: A, B, C, D**

**해설** — 비교 연산 결과는 bool 배열 (A 참). 원소별 논리 연산에는 &, \|, ~ 사용 (B 참). 괄호로 우선순위를 명확히 (C 참). 파이썬 and/or는 배열 전체에 대한 단일 진리값을 요구해 원소별 연산에 부적합 (D 참). 결과는 배열이며 스칼라가 아니다 (E 거짓). ⚠️ 함정: E — "비교 결과는 항상 스칼라 bool" → "원소별 bool 배열"이면 참.

> 출처 메모: \

<details><summary>English</summary>

**Q.** Which of the following statements about comparison and logical operations on arrays are true?

- **A.** The result dtype of a comparison on an array (arr > 0) is bool.
- **B.** To combine several conditions the operators & (AND), \| (OR) and ~ (NOT) are used.
- **C.** When using & and \|, each condition must be wrapped in parentheses to avoid operator precedence problems.
- **D.** The Python keywords and / or are not suitable for element-wise logical operations on arrays.
- **E.** The result of a comparison on an array is always a scalar bool value.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true (Python's and/or require a single truth value for the whole array). E false: the result is an array, not a scalar. ⚠️ Trap: E — "always a scalar bool" → "an element-wise bool array" would make it TRUE.

</details>

---

## N-28 · argmax / argmin · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** np.argmax / np.argmin 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.argmax 는 최댓값의 인덱스를 반환한다.
- **B.** 2차원 배열에서 axis=0 을 지정하면 각 열에서 최댓값의 행 인덱스를 반환한다.
- **C.** 2차원 배열에서 axis=1 을 지정하면 각 행에서 최댓값의 열 인덱스를 반환한다.
- **D.** np.argmax(arr) 처럼 axis를 지정하지 않으면 배열을 평탄화한 기준의 인덱스를 반환한다.
- **E.** np.argmax 는 최댓값 자체를 반환한다.

**정답: A, B, C, D**

**해설** — argmax = 최댓값의 인덱스 (A 참). axis=0 → 열별 (B 참). axis=1 → 행별 (C 참). axis 생략 시 평탄화 기준 인덱스 (D 참). 최댓값 자체는 np.max가 반환한다 (E 거짓). ⚠️ 함정: E — "최댓값 자체" → "최댓값의 인덱스"이면 참.

> 출처 메모: 자료에 없음/제외: argmax/argmin

<details><summary>English</summary>

**Q.** Which of the following statements about np.argmax / np.argmin are true?

- **A.** np.argmax returns the index of the maximum value.
- **B.** In a 2D array, specifying axis=0 returns the row index of the maximum in each column.
- **C.** In a 2D array, specifying axis=1 returns the column index of the maximum in each row.
- **D.** If axis is not specified, as in np.argmax(arr), the index is based on the flattened array.
- **E.** np.argmax returns the maximum value itself.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: np.max returns the maximum value itself. ⚠️ Trap: E — "the maximum value itself" → "the index of the maximum" would make it TRUE.

</details>

---

## N-29 · 인덱싱을 이용한 값 수정 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 배열의 값을 수정하는 방법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** arr[0] = 5 는 첫 번째 원소를 5로 바꾼다.
- **B.** arr[arr < 0] = 0 은 음수 원소를 모두 0으로 바꾼다.
- **C.** arr[:, 0] = 1 은 2차원 배열의 첫 번째 열 전체를 1로 바꾼다.
- **D.** arr[1:3] = 0 은 슬라이싱으로 선택한 구간을 0으로 바꾼다.
- **E.** arr[arr < 0] = 0 을 실행하면 복사본이 수정되어 원본은 그대로 유지된다.

**정답: A, B, C, D**

**해설** — 정수 인덱스 할당 (A 참). 마스크 할당은 원본을 수정 (B 참). 슬라이스 할당 (C 참). 슬라이스 할당 (D 참). 마스크를 이용한 할당은 원본 배열을 실제로 수정한다 (E 거짓). ⚠️ 함정: E — "복사본이 수정되어" → "원본이 수정되어"이면 참.

> 출처 메모: 자료에 없음/제외: 인덱스/마스크 값 대입

<details><summary>English</summary>

**Q.** Which of the following statements about modifying the values of an array are true?

- **A.** arr[0] = 5 changes the first element to 5.
- **B.** arr[arr < 0] = 0 changes all negative elements to 0.
- **C.** arr[:, 0] = 1 changes the whole first column of a 2D array to 1.
- **D.** arr[1:3] = 0 changes the range selected by the slice to 0.
- **E.** Executing arr[arr < 0] = 0 modifies a copy, so the original stays unchanged.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: assignment through a mask really modifies the original array. ⚠️ Trap: E — "modifies a copy" → "modifies the original" would make it TRUE.

</details>

---

## N-30 · one-hot 인코딩 구현 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 정수 범주 레이블 배열 labels (예: array([2, 0, 1])) 을 one-hot 행렬로 바꾸는 NumPy 구현에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.eye(K)[labels] 처럼 단위행렬을 인덱싱하면 one-hot 행렬을 만들 수 있다.
- **B.** np.eye(3)[labels] 의 결과 shape은 (3, 3) 이 된다.
- **C.** 정수 배열로 2차원 배열을 인덱싱하면 행 단위로 선택된 결과가 만들어진다.
- **D.** one-hot 행렬의 각 행은 하나의 1과 나머지 0으로 구성된다.
- **E.** np.eye(3)[labels] 의 결과 dtype은 bool 이다.

**정답: A, B, C, D**

**해설** — 단위행렬을 정수 배열로 인덱싱하면 one-hot (A 참). labels 길이 3, 클래스 3 → (3,3) (B 참). 정수 배열 인덱싱은 행 선택 (C 참). one-hot의 정의 (D 참). np.eye는 float64를 반환하므로 bool이 아니다 (E 거짓).

> 출처 메모: 자료에 없음/제외: np.eye(원-핫)

<details><summary>English</summary>

**Q.** Which of the following statements about converting an integer class label array labels (for example array([2, 0, 1])) into a one-hot matrix with NumPy are true?

- **A.** Indexing an identity matrix like np.eye(K)[labels] produces a one-hot matrix.
- **B.** The result shape of np.eye(3)[labels] is (3, 3).
- **C.** Indexing a 2D array with an integer array selects rows.
- **D.** Each row of a one-hot matrix consists of one 1 and the rest 0.
- **E.** The result dtype of np.eye(3)[labels] is bool.

**Answer: A, B, C, D**

**Explanation** — A true. B true (labels has length 3 and there are 3 classes). C true. D true. E false: np.eye returns float64.

</details>

---

## N-31 · 다중 클래스 정확도 계산 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 예측 확률 행렬 probs (shape (N, K)) 와 정답 레이블 배열 y (shape (N,)) 가 있을 때 다중 클래스 정확도를 계산하는 방법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.argmax(probs, axis=1) 로 각 예시의 예측 클래스를 얻을 수 있다.
- **B.** 예측 클래스 배열과 y를 비교한 불리언 배열의 평균을 구하면 정확도가 된다.
- **C.** (preds == y).mean() 은 정확도(맞힌 비율)를 반환한다.
- **D.** np.count_nonzero(preds == y) / len(y) 도 같은 값을 준다.
- **E.** 정확도를 구할 때는 반드시 for 반복문을 사용해야 한다.

**정답: A, B, C, D**

**해설** — axis=1 argmax로 예측 클래스 (A 참). 불리언 배열 평균 = 정확도 (B, C 참). count_nonzero/len도 동일 (D 참). NumPy는 벡터화 연산으로 반복문 없이 계산할 수 있다 (E 거짓). ⚠️ 함정: E — "반드시 for 반복문" → "벡터 연산으로도 가능"이면 참.

> 출처 메모: 자료에 없음/제외: argmax 정확도

<details><summary>English</summary>

**Q.** Given a prediction probability matrix probs (shape (N, K)) and the true label array y (shape (N,)), which statements about computing the multiclass accuracy are true?

- **A.** np.argmax(probs, axis=1) gives the predicted class of each example.
- **B.** The accuracy is the mean of the boolean array comparing the predicted classes with y.
- **C.** (preds == y).mean() returns the accuracy (the fraction correct).
- **D.** np.count_nonzero(preds == y) / len(y) gives the same value.
- **E.** A for loop must always be used to compute the accuracy.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: NumPy's vectorized operations compute it without a loop. ⚠️ Trap: E — "must always use a for loop" → "vectorised code works too" would make it TRUE.

</details>

---

## N-32 · 히스토그램 직접 구현 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** np.histogram 을 쓰지 않고 정수 배열의 히스토그램을 직접 구현하는 방법에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.bincount(arr) 를 사용하면 각 정수 값의 등장 횟수를 셀 수 있다.
- **B.** 경계값 배열 edges 에 대해 np.searchsorted(edges, arr) 로 구간 인덱스를 구할 수 있다.
- **C.** 구간 인덱스를 얻은 뒤 np.bincount 로 구간별 개수를 셀 수 있다.
- **D.** (arr >= lo) & (arr < hi) 같은 조건 마스크를 만들어 각 구간의 개수를 셀 수도 있다.
- **E.** np.histogram 은 사용할 수 없으므로 히스토그램은 NumPy로 구현할 수 없다.

**정답: A, B, C, D**

**해설** — bincount로 빈도 계산 (A 참). searchsorted로 구간 인덱스 (B 참). 구간 인덱스 + bincount (C 참). 조건 마스크로 구간별 개수 (D 참). np.histogram 없이도 NumPy로 충분히 구현할 수 있다 (E 거짓). ⚠️ 함정: E — np.histogram 없이도 직접 구현할 수 있다.

> 출처 메모: 자료에 없음/제외: histogram/searchsorted

<details><summary>English</summary>

**Q.** Which of the following statements about implementing the histogram of an integer array by hand, without np.histogram, are true?

- **A.** np.bincount(arr) can be used to count the occurrences of each integer value.
- **B.** For an array of bin edges, np.searchsorted(edges, arr) gives the bin index of each element.
- **C.** After obtaining the bin indices, np.bincount can be used to count the number of elements per bin.
- **D.** Condition masks such as (arr >= lo) & (arr < hi) can also be used to count the elements of each bin.
- **E.** Since np.histogram cannot be used, a histogram cannot be implemented with NumPy.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: it can easily be implemented with NumPy even without np.histogram. ⚠️ Trap: E — a histogram can be implemented by hand without np.histogram.

</details>

---

## N-33 · 이상치 탐지와 조건부 통계 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 1차원 수치 배열 data 에서 이상치(outlier)를 찾는 NumPy 코드에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** mu = data.mean(), sigma = data.std() 로 평균과 표준편차를 구할 수 있다.
- **B.** mask = np.abs(data - mu) > 2 \* sigma 로 평균에서 2 표준편차를 벗어난 값을 찾을 수 있다.
- **C.** np.count_nonzero(mask) 로 이상치 개수를 셀 수 있다.
- **D.** data[mask] 로 이상치 값들만 추출할 수 있다.
- **E.** np.abs(data - mu) > 2 \* sigma 의 결과는 스칼라 bool 값이다.

**정답: A, B, C, D**

**해설** — mean/std로 통계량 계산 (A 참). 절댓값 + 임계값으로 마스크 생성 (B 참). count_nonzero로 개수 (C 참). 마스크로 값 추출 (D 참). 비교 연산 결과는 원소별 bool 배열이며 스칼라가 아니다 (E 거짓).

> 출처 메모: 자료에 없음/제외: abs/std 이상치 통계

<details><summary>English</summary>

**Q.** Which of the following statements about NumPy code that finds outliers in a 1D numeric array data are true?

- **A.** mu = data.mean() and sigma = data.std() give the mean and the standard deviation.
- **B.** mask = np.abs(data - mu) > 2 \* sigma finds the values more than 2 standard deviations away from the mean.
- **C.** np.count_nonzero(mask) counts the number of outliers.
- **D.** data[mask] extracts only the outlier values.
- **E.** The result of np.abs(data - mu) > 2 \* sigma is a scalar bool value.

**Answer: A, B, C, D**

**Explanation** — A true. B true. C true. D true. E false: the result of a comparison is an element-wise bool array, not a scalar.

</details>

---

## N-34 · 정수 배열 인덱싱으로 이미지 복원 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 팔레트(palette) 배열 colors (shape (K, 3)) 와 각 픽셀의 색 인덱스를 담은 2차원 배열 idx (shape (H, W)) 가 있을 때, 정수 배열 인덱싱에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** colors[idx] 는 각 픽셀의 색 인덱스에 해당하는 색을 채워 넣는다.
- **B.** colors[idx] 의 결과 shape은 (H, W, 3) 이다.
- **C.** 정수 배열로 인덱싱하면 인덱스 배열의 shape에 맞춰 결과 차원이 확장된다.
- **D.** colors[idx] 의 결과는 새 배열이며 colors 를 수정하지 않는다.
- **E.** colors[idx] 의 결과 shape은 (K, H, W) 이다.

**정답: A, B, C, D**

**해설** — 정수 배열 인덱싱으로 팔레트 조회 (A 참). (H,W) 인덱스 + 마지막 축 3 → (H,W,3) (B 참). 인덱스 배열 shape + 남은 축이 결과 shape이 된다 (C 참). 결과는 새 배열 (D 참). (K,H,W)가 아니다 (E 거짓).

> 출처 메모: 자료에 없음/제외: 정수 배열 인덱싱(팔레트)

<details><summary>English</summary>

**Q.** Given a palette array colors (shape (K, 3)) and a 2D array idx (shape (H, W)) that holds the color index of each pixel, which statements about integer array indexing are true?

- **A.** colors[idx] fills in the color corresponding to each pixel's color index.
- **B.** The result shape of colors[idx] is (H, W, 3).
- **C.** Indexing with an integer array expands the result dimensions according to the shape of the index array.
- **D.** The result of colors[idx] is a new array and does not modify colors.
- **E.** The result shape of colors[idx] is (K, H, W).

**Answer: A, B, C, D**

**Explanation** — A true. B true (the (H,W) index plus the last axis 3). C true. D true. E false.

</details>

---

## S1-26 · 브로드캐스팅 오류 판별 (a + b) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** a 의 shape 이 (32, 5) 이고 b 의 shape 이 (32,) 일 때 "operands could not be broadcast together" 오류가 발생하는 것을 모두 고르시오.

- **A.** a + b
- **B.** a + b[:, None]
- **C.** a + b[None, :]
- **D.** a + 1

**정답: A, C**

**해설** — 브로드캐스팅은 마지막 축부터 크기를 비교한다. (32,) 은 (5,) 와 맞지 않으므로 a + b 는 오류 (A 참). b[:, None] 은 (32, 1) 이 되어 열 방향으로 확장 가능 (B 거짓). b[None, :] 은 (1, 32) 이므로 (32, 5) 와 맞지 않는다 (C 참). 스칼라는 항상 브로드캐스팅된다 (D 거짓).

<details><summary>English</summary>

**Q.** `a` has shape (32, 5) and `b` has shape (32,). Which raise "operands could not be broadcast together"?

- **A.** `a + b`
- **B.** `a + b[:, None]`
- **C.** `a + b[None, :]`
- **D.** `a + 1`

**Answer: A, C**

**Explanation** — Broadcasting compares the trailing dimensions: (32,) against (5,) fails, so a + b raises (A true). b[:, None] is (32, 1) and broadcasts along columns (B false). b[None, :] is (1, 32) and does not match (32, 5) (C true). Scalars always broadcast (D false).

</details>

---

## S1-27 · 뷰(view) 인 경우: x 가 수정됨 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** x = np.arange(4) 이고 x 로부터 y 를 만든 뒤 y[:] = 99 를 실행할 때, x 가 수정되는 경우를 모두 고르시오.

- **A.** y = x.reshape(2, 2) 후 y[:, :] = 99
- **B.** y = x.T
- **C.** y = np.append(x, 42)
- **D.** y = x[1:2]

**정답: A, B, D**

**해설** — reshape 은 뷰를 돌려준다 (A 참). 전치(.T)도 뷰다 (B 참). np.append 는 새 배열을 만들어 복사하므로 원본이 바뀌지 않는다 (C 거짓). 기본 슬라이싱은 뷰다 (D 참).

<details><summary>English</summary>

**Q.** `x = np.arange(4)`; `y` is made from `x`; then we run `y[:] = 99`. After which operations is `x` modified?

- **A.** `y = x.reshape(2, 2)` (then `y[:, :] = 99`)
- **B.** `y = x.T`
- **C.** `y = np.append(x, 42)`
- **D.** `y = x[1:2]`

**Answer: A, B, D**

**Explanation** — Reshape returns a view (A true). Transpose returns a view (B true). np.append creates a new array, so x is untouched (C false). A basic slice is a view (D true).

</details>

---

## S1-28 · 복사본(copy) 인 경우: x 가 수정되지 않음 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 같은 상황(x = np.arange(4), y[:] = 99)에서 x 가 수정되지 않는 경우를 모두 고르시오.

- **A.** y = x[[1, 2]]
- **B.** y = x[x < 2]
- **C.** y = x + x
- **D.** y = x[1:3]

**정답: A, B, C**

**해설** — 정수 배열(fancy) 인덱싱은 복사본을 만든다 (A 참). 불리언 마스크도 복사본이다 (B 참). 산술 연산은 새 배열을 만든다 (C 참). 기본 슬라이스는 뷰이므로 원본이 수정된다 (D 거짓).

<details><summary>English</summary>

**Q.** Same setup. After which operations is `x` NOT modified?

- **A.** `y = x[[1, 2]]`
- **B.** `y = x[x < 2]`
- **C.** `y = x + x`
- **D.** `y = x[1:3]`

**Answer: A, B, C**

**Explanation** — Integer-array (fancy) indexing returns a copy (A true). A boolean mask returns a copy (B true). Arithmetic creates a new array (C true). A basic slice is a view, so D modifies x (D false).

</details>

---

## S1-29 · 브로드캐스팅 오류 판별 (shape 조합) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 다음 shape 조합 중 브로드캐스팅 오류가 발생하는 것을 모두 고르시오.

- **A.** (3, 4) + (4,)
- **B.** (3, 4) + (3,)
- **C.** (3, 1) + (1, 4)
- **D.** (3,) + (3, 1)
- **E.** (2, 3) + (3, 2)

**정답: B, E**

**해설** — (3,4)+(4,) 는 열 방향 확장으로 (3,4) (A 거짓). (3,4)+(3,) 는 마지막 축 4 대 3 이 맞지 않아 오류 (B 참). (3,1)+(1,4) 는 (3,4) (C 거짓). (3,)+(3,1) 은 (3,3) (D 거짓). (2,3)+(3,2) 는 3 대 2 가 맞지 않아 오류 (E 참).

<details><summary>English</summary>

**Q.** Which of the following shape combinations raise a broadcasting error?

- **A.** (3, 4) + (4,)
- **B.** (3, 4) + (3,)
- **C.** (3, 1) + (1, 4)
- **D.** (3,) + (3, 1)
- **E.** (2, 3) + (3, 2)

**Answer: B, E**

**Explanation** — (3,4)+(4,) broadcasts along the columns to (3,4) (A false). (3,4)+(3,) mismatches the last axis 4 vs 3 (B true). (3,1)+(1,4) gives (3,4) (C false). (3,)+(3,1) gives (3,3) (D false). (2,3)+(3,2) mismatches 3 vs 2 (E true).

</details>

---

## S2-31 · 브로드캐스팅 ValueError 판별 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 다음 중 ValueError("operands could not be broadcast together") 가 발생하는 것을 모두 고르시오.

- **A.** np.zeros((4, 3)) + np.zeros((3, 4))
- **B.** np.zeros((3, 4)) + np.zeros(3)
- **C.** np.zeros((3, 4)) + np.zeros(4)
- **D.** np.zeros((2, 3)) + np.zeros((2, 1))
- **E.** np.zeros((2, 3)) + np.zeros((3, 2))

**정답: A, B, E**

**해설** — 마지막 축부터 비교한다. (4,3)+(3,4) 는 3 대 4 가 맞지 않아 오류 (A 참). (3,4)+(3,) 도 4 대 3 불일치 (B 참). (3,4)+(4,) 는 열 방향 확장으로 가능 (C 거짓). (2,3)+(2,1) 은 1 이 확장되어 가능 (D 거짓). (2,3)+(3,2) 는 3 대 2 불일치 (E 참).

> 출처 메모: np.zeros 는 배열을 만들기 위해서만 사용

<details><summary>English</summary>

**Q.** Which operations raise a ValueError ("operands could not be broadcast together")?

- **A.** `np.zeros((4, 3)) + np.zeros((3, 4))`
- **B.** `np.zeros((3, 4)) + np.zeros(3)`
- **C.** `np.zeros((3, 4)) + np.zeros(4)`
- **D.** `np.zeros((2, 3)) + np.zeros((2, 1))`
- **E.** `np.zeros((2, 3)) + np.zeros((3, 2))`

**Answer: A, B, E**

**Explanation** — Comparing trailing axes: (4,3)+(3,4) mismatches 3 vs 4 (A true). (3,4)+(3,) mismatches 4 vs 3 (B true). (3,4)+(4,) broadcasts along columns (C false). (2,3)+(2,1) broadcasts the 1 (D false). (2,3)+(3,2) mismatches 3 vs 2 (E true).

</details>

---

## S2-32 · np.where와 불리언 마스킹 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** x = np.array([5, -1, 3, -2]) 일 때 옳은 것을 모두 고르시오.

- **A.** np.where(x > 0, x, 0) 은 [5, 0, 3, 0] 이다.
- **B.** np.sum(x > 0) == 2
- **C.** (x > 0).dtype 은 bool 이다.
- **D.** np.where(x > 0) 은 (array([0, 2]),) 를 반환한다.
- **E.** x[x > 0] = 0 을 실행하면 x 는 [0, -1, 3, -2] 이다.

**정답: A, B, C, D**

**해설** — 조건이 참인 위치는 x, 거짓인 위치는 0 (A 참). 양수가 2개 (B 참). 비교 연산 결과는 bool 배열 (C 참). 인자가 하나면 조건을 만족하는 인덱스 튜플을 반환 (D 참). 실행 후 x = [0, -1, 0, -2] 이다 (E 거짓). ⚠️ 함정: E — "실행 후 [0, -1, 3, -2]" → "[0, -1, 0, -2]"이면 참.

> 출처 메모: 자료에 없음/제외: np.where

<details><summary>English</summary>

**Q.** x = np.array([5, -1, 3, -2]). Which statements are true?

- **A.** `np.where(x > 0, x, 0)` equals `[5, 0, 3, 0]`
- **B.** `np.sum(x > 0) == 2`
- **C.** `(x > 0).dtype` is bool.
- **D.** `np.where(x > 0)` returns `(array([0, 2]),)`
- **E.** After `x[x > 0] = 0`, x equals `[0, -1, 3, -2]`

**Answer: A, B, C, D**

**Explanation** — Where the condition holds we keep x, otherwise 0 (A true). There are two positive values (B true). A comparison yields a bool array (C true). With one argument np.where returns index tuples (D true). After the assignment x is [0, −1, 0, −2] (E false). ⚠️ Trap: E — "equals [0, -1, 3, -2]" → "[0, -1, 0, -2]" would make it TRUE.

</details>

---

## S2-33 · dtype과 연산 결과 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** NumPy 자료형(dtype)과 연산에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.array([1, 2.5]).dtype 은 실수형이다.
- **B.** np.array([1, 2, 3]) / 2 는 [0.5, 1., 1.5] 이다.
- **C.** np.array([1, 2, 3]) // 2 는 [0, 1, 1] 이다.
- **D.** np.array([True, False, True]).sum() == 2
- **E.** np.arange(3) + 0.5 의 dtype 은 정수형이다.

**정답: A, B, C, D**

**해설** — 정수와 실수가 섞이면 실수형으로 승격된다 (A 참). / 는 실수 나눗셈 (B 참). // 는 몫 (C 참). bool 은 True=1 로 합산된다 (D 참). 실수를 더하면 실수형이 된다 (E 거짓).

> 출처 메모: 자료에 없음/제외: dtype 연산(/, //, astype)

<details><summary>English</summary>

**Q.** Which statements about NumPy dtypes and operations are true?

- **A.** `np.array([1, 2.5]).dtype` is a float type.
- **B.** `np.array([1, 2, 3]) / 2` equals `[0.5, 1., 1.5]`
- **C.** `np.array([1, 2, 3]) // 2` equals `[0, 1, 1]`
- **D.** `np.array([True, False, True]).sum() == 2`
- **E.** `np.arange(3) + 0.5` has an integer dtype.

**Answer: A, B, C, D**

**Explanation** — Mixing ints and floats promotes to float (A true). / is true division (B true). // is floor division (C true). bools sum as True=1 (D true). Adding a float promotes to float (E false).

</details>

---

## S2-34 · 배열 생성 함수(arange/linspace/reshape) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 배열 생성 함수에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.arange(0, 10, 3) 은 [0, 3, 6, 9] 이다.
- **B.** np.linspace(0, 1, 5) 는 5개 원소를 갖는다.
- **C.** np.arange(5).reshape(5, -1).shape == (5, 1)
- **D.** np.arange(10).reshape(-1, 5).shape == (5, 2)
- **E.** np.ones(3).shape == (3,)

**정답: A, B, C, E**

**해설** — 0, 3, 6, 9 (A 참). linspace 는 개수를 지정한다 (B 참). (5, -1) 은 (5, 1) (C 참). reshape(-1, 5) 는 (2, 5) 이므로 (5, 2) 가 아니다 (D 거짓). ones(3) 은 1차원 (E 참).

> 출처 메모: 자료에 없음/제외: linspace/np.ones

<details><summary>English</summary>

**Q.** Which statements about array creation functions are true?

- **A.** `np.arange(0, 10, 3)` equals `[0, 3, 6, 9]`
- **B.** `np.linspace(0, 1, 5)` has 5 elements.
- **C.** `np.arange(5).reshape(5, -1).shape == (5, 1)`
- **D.** `np.arange(10).reshape(-1, 5).shape == (5, 2)`
- **E.** `np.ones(3).shape == (3,)`

**Answer: A, B, C, E**

**Explanation** — 0, 3, 6, 9 (A true). linspace takes a count (B true). (5, −1) gives (5, 1) (C true). reshape(−1, 5) gives (2, 5) (D false). ones(3) is 1-D (E true).

</details>

---

## S2-35 · concatenate / stack / append · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** p = np.zeros((2, 3)), q = np.ones((2, 3)) 일 때 옳은 것을 모두 고르시오.

- **A.** np.concatenate([p, q], axis=0).shape == (4, 3)
- **B.** np.concatenate([p, q], axis=1).shape == (2, 6)
- **C.** np.stack([p, q]).shape == (2, 2, 3)
- **D.** np.concatenate([p, np.ones((2, 4))], axis=0) 는 동작하며 (2, 7) 을 반환한다.
- **E.** np.append(np.arange(4), 42).shape == (5,)

**정답: A, B, C, E**

**해설** — axis=0 은 행 방향 결합으로 (4, 3) (A 참). axis=1 은 열 방향으로 (2, 6) (B 참). stack 은 새 축을 만들어 (2, 2, 3) (C 참). axis=0 결합은 열 수가 같아야 하므로 (2, 4) 와는 오류가 난다 (D 거짓). append 는 이어 붙여 (5,) (E 참). ⚠️ 함정: D — "동작하며 (2, 7)" → "ValueError 가 난다"이면 참.

> 출처 메모: 자료에 없음/제외: concatenate/stack

<details><summary>English</summary>

**Q.** `p = np.zeros((2, 3))`, `q = np.ones((2, 3))`

- **A.** `np.concatenate([p, q], axis=0).shape == (4, 3)`
- **B.** `np.concatenate([p, q], axis=1).shape == (2, 6)`
- **C.** `np.stack([p, q]).shape == (2, 2, 3)`
- **D.** `np.concatenate([p, np.ones((2, 4))], axis=0)` works and returns shape (2, 7).
- **E.** `np.append(np.arange(4), 42).shape == (5,)`

**Answer: A, B, C, E**

**Explanation** — axis=0 stacks rows giving (4, 3) (A true). axis=1 stacks columns giving (2, 6) (B true). stack adds a new axis giving (2, 2, 3) (C true). Joining along axis=0 requires the same number of columns, so (2, 4) raises (D false). append concatenates giving (5,) (E true). ⚠️ Trap: D — "works and returns (2, 7)" → "raises a ValueError" would make it TRUE.

</details>

---

## S2-36 · 뷰와 복사본 판별(X 수정 여부) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** X = np.arange(6).reshape(2, 3) 일 때, 다음 중 X 를 변경하는 것을 모두 고르시오.

- **A.** y = X[0]; y[0] = 100
- **B.** z = X[:, [0, 1]]; z[0, 0] = -5
- **C.** f = X.flatten(); f[0] = 9
- **D.** r = X.reshape(-1); r[0] = 9
- **E.** m = X[X > 2]; m[:] = 0

**정답: A, D**

**해설** — 기본 인덱스 X[0] 은 뷰다 (A 참). fancy 인덱싱은 복사본 (B 거짓). flatten() 은 복사본 (C 거짓). reshape 은 뷰 (D 참). 불리언 마스크는 복사본 (E 거짓). ⚠️ 함정: C — flatten() 은 복사본 — "X[0]" 같은 뷰였다면 참.

> 출처 메모: ⚠ 보기 C: .flatten() 은 자료에 없음

<details><summary>English</summary>

**Q.** `X = np.arange(6).reshape(2, 3)`. Which of these change X?

- **A.** `y = X[0]; y[0] = 100`
- **B.** `z = X[:, [0, 1]]; z[0, 0] = -5`
- **C.** `f = X.flatten(); f[0] = 9`
- **D.** `r = X.reshape(-1); r[0] = 9`
- **E.** `m = X[X > 2]; m[:] = 0`

**Answer: A, D**

**Explanation** — A basic row index returns a view (A true). Fancy indexing returns a copy (B false). flatten() returns a copy (C false). reshape returns a view (D true). A boolean mask returns a copy (E false). ⚠️ Trap: C — flatten() makes a copy — a view such as "X[0]" would make it TRUE.

</details>

---

## S2-37 · 논리 연산과 불리언 인덱싱 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** v = np.arange(1, 7) 일 때 옳은 것을 모두 고르시오.

- **A.** (v > 2) & (v < 5) 는 [F, F, T, T, F, F] 이다.
- **B.** v[(v > 2) & (v < 5)] 는 [3, 4] 이다.
- **C.** (v > 2) and (v < 5) 는 원소별로 동작한다.
- **D.** ~(v > 2) 는 처음 두 원소에서 True 다.
- **E.** np.count_nonzero(v % 2 == 0) == 3

**정답: A, B, D, E**

**해설** — 3, 4 만 참이므로 [F,F,T,T,F,F] (A 참). 마스크로 뽑으면 [3, 4] (B 참). 파이썬의 and 는 배열에서 ValueError 가 나며 & 를 써야 한다 (C 거짓). ~ 는 논리 부정이라 1, 2 에서 True (D 참). 짝수 2, 4, 6 → 3개 (E 참).

> 출처 메모: ~ 와 and 보기 포함 (& 는 DOCX)

<details><summary>English</summary>

**Q.** v = np.arange(1, 7). Which statements are true?

- **A.** `(v > 2) & (v < 5)` equals `[F, F, T, T, F, F]`
- **B.** `v[(v > 2) & (v < 5)]` equals `[3, 4]`
- **C.** `(v > 2) and (v < 5)` works elementwise.
- **D.** `~(v > 2)` is True for the first two elements.
- **E.** `np.count_nonzero(v % 2 == 0) == 3`

**Answer: A, B, D, E**

**Explanation** — Only 3 and 4 qualify, so [F,F,T,T,F,F] (A true). The mask selects [3, 4] (B true). Python's and raises a ValueError on arrays; use & (C false). ~ negates, so the first two are True (D true). The even numbers 2, 4, 6 give 3 (E true).

</details>

---

## S2-38 · 손실 계산의 조용한 브로드캐스팅 버그 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** yp 의 shape 이 (6,) 이고 yy 의 shape 이 (6, 1) 일 때 손실 계산의 함정에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** (yp - yy).shape == (6, 6)
- **B.** 오류가 발생하지 않는다.
- **C.** np.mean((yp - yy) \*\* 2) 는 스칼라이지만 잘못된 값이다.
- **D.** yp - yy[:, 0] 는 (6,) 이며 의도한 계산이다.
- **E.** yp - yy 는 ValueError 를 발생시킨다.

**정답: A, B, C, D**

**해설** — (6,) − (6,1) 은 브로드캐스팅되어 (6,6) 이 된다 (A 참). 예외 없이 조용히 계산된다 (B 참). 결과는 스칼라이지만 값이 잘못된다 (C 참). yy[:, 0] 로 (6,) 으로 맞추면 의도한 계산이 된다 (D 참). 오류가 나지 않으므로 E 거짓.

> 출처 메모: (m,)-(m,1) 버그는 DOCX 개념(None 인덱싱·브로드캐스팅)의 응용

<details><summary>English</summary>

**Q.** Loss pitfall: `yp` has shape (6,), `yy` has shape (6, 1).

- **A.** `(yp - yy).shape == (6, 6)`
- **B.** It does not raise an error.
- **C.** `np.mean((yp - yy) \*\* 2)` is a scalar, but the wrong value.
- **D.** `yp - yy[:, 0]` has shape (6,) and is the intended computation.
- **E.** `yp - yy` raises a ValueError.

**Answer: A, B, C, D**

**Explanation** — (6,) − (6,1) broadcasts to (6, 6) (A true). No exception is raised (B true). The mean is a scalar but the wrong value (C true). yy[:, 0] restores (6,) and gives the intended result (D true). Since no error is raised, E is false.

</details>

---

## S2-39 · NumPy로 소프트맥스 구현(axis/keepdims) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** Z 의 shape 이 (6, 4) 이고 e = np.exp(Z) 일 때 소프트맥스 구현에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** e / e.sum(axis=1, keepdims=True) 는 각 행의 합이 1이 된다.
- **B.** e.sum(axis=1, keepdims=True).shape == (6, 1)
- **C.** e / e.sum(axis=1) 는 shape 이 호환되어 동작한다.
- **D.** e / e.sum(axis=0) 는 각 열을 정규화하며 행 단위가 아니다.
- **E.** 소프트맥스 출력의 shape 은 (6, 4) 이다.

**정답: A, B, D, E**

**해설** — keepdims 로 (6,1) 을 만들어 행 단위로 나누면 각 행의 합이 1 (A 참). shape 은 (6,1) (B 참). (6,4) / (6,) 는 마지막 축 4 대 6 이 맞지 않아 오류 (C 거짓). axis=0 은 열 합이므로 열 정규화가 된다 (D 참). 출력 shape 은 입력과 같다 (E 참). ⚠️ 함정: C — (6,4)/(6,) 는 오류 — 동작하려면 keepdims=True 가 필요하다.

> 출처 메모: 자료에 없음/제외: 소프트맥스 keepdims (코드는 자료에 없음)

<details><summary>English</summary>

**Q.** Softmax in NumPy: `Z` has shape (6, 4), `e = np.exp(Z)`.

- **A.** `e / e.sum(axis=1, keepdims=True)` has rows that sum to 1.
- **B.** `e.sum(axis=1, keepdims=True).shape == (6, 1)`
- **C.** `e / e.sum(axis=1)` works, because the shapes are compatible.
- **D.** `e / e.sum(axis=0)` normalizes each column, not each row.
- **E.** The softmax output has shape (6, 4).

**Answer: A, B, D, E**

**Explanation** — keepdims gives (6, 1), so row-wise division makes each row sum to 1 (A true). The shape is (6, 1) (B true). (6,4) / (6,) mismatches 4 vs 6 and raises (C false). axis=0 sums columns, so it normalizes columns (D true). The output shape equals the input shape (E true). ⚠️ Trap: C — (6,4)/(6,) raises — keepdims=True is needed for it to work.

</details>

---

## S2-40 · newaxis와 외적(outer product) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** r = np.arange(3) 일 때 옳은 것을 모두 고르시오.

- **A.** r[:, None].shape == (3, 1)
- **B.** r[None, :].shape == (1, 3)
- **C.** (r[:, None] + r[None, :]).shape == (3, 3)
- **D.** r[:, None] \* r[None, :] 의 첫 행은 0으로만 이루어져 있다(외적).
- **E.** r[:, None] 은 r.reshape(1, 3) 과 같다.

**정답: A, B, C, D**

**해설** — newaxis 로 (3,1) (A 참). (1,3) (B 참). 브로드캐스팅으로 (3,3) (C 참). r[0] = 0 이므로 외적의 첫 행은 0 (D 참). r[:, None] 은 (3,1) 이고 reshape(1, 3) 은 (1,3) 이라 서로 다르다 (E 거짓). ⚠️ 함정: E — r[:, None] 은 (3,1) — "reshape(1, 3)"을 "reshape(3, 1)"로 바꾸면 참.

<details><summary>English</summary>

**Q.** r = np.arange(3). Which statements are true?

- **A.** `r[:, None].shape == (3, 1)`
- **B.** `r[None, :].shape == (1, 3)`
- **C.** `(r[:, None] + r[None, :]).shape == (3, 3)`
- **D.** `r[:, None] \* r[None, :]` has a first row of zeros (outer product).
- **E.** `r[:, None]` equals `r.reshape(1, 3)`.

**Answer: A, B, C, D**

**Explanation** — newaxis gives (3, 1) (A true). And (1, 3) (B true). Broadcasting gives (3, 3) (C true). Since r[0] = 0 the first row of the outer product is 0 (D true). r[:, None] is (3,1) while reshape(1, 3) is (1,3), so they differ (E false). ⚠️ Trap: E — r[:, None] is (3,1) — "reshape(1, 3)" → "reshape(3, 1)" would make it TRUE.

</details>

---

## M-10 · 슬라이싱·정수배열·newaxis 의 shape · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 는 shape (32, 5) 인 numpy.ndarray 다. 옳은 것을 모두 고르시오.

- **A.** my_array[:, 2:4].shape == (32, 2)
- **B.** my_array[-1].shape == (1, 5)
- **C.** my_array[::2, :].shape == (16, 5)
- **D.** my_array[[3], [1]].shape == (1,)
- **E.** my_array[:, [0, 0, 1]].shape == (32, 3)
- **F.** my_array[None, :, :].shape == (1, 32, 5)

**정답: A, C, D, E, F**

**해설** — 기본 슬라이스는 축을 유지하므로 (32,2) (A 참). my_array[-1] 은 마지막 행만 뽑아 (5,) 이며 (1,5) 가 아니다 (B 거짓). ::2 는 행 16개를 고른다 (C 참). [[3],[1]] 은 두 축을 동시에 정수 배열로 인덱싱해 (1,) (D 참). 열 인덱스 3개 → (32,3) (E 참). None 은 새 축을 추가해 (1,32,5) (F 참).

<details><summary>English</summary>

**Q.** `my_array` is a numpy.ndarray with shape (32, 5). Which statements are true?

- **A.** `my_array[:, 2:4].shape == (32, 2)`
- **B.** `my_array[-1].shape == (1, 5)`
- **C.** `my_array[::2, :].shape == (16, 5)`
- **D.** `my_array[[3], [1]].shape == (1,)`
- **E.** `my_array[:, [0, 0, 1]].shape == (32, 3)`
- **F.** `my_array[None, :, :].shape == (1, 32, 5)`

**Answer: A, C, D, E, F**

**Explanation** — A basic slice keeps the axis, giving (32,2) (A true). my_array[-1] selects the last row, so it is (5,), not (1,5) (B false). ::2 picks 16 rows (C true). [[3],[1]] indexes two axes with integer arrays, giving (1,) (D true). Three column indices give (32,3) (E true). None inserts a new axis, giving (1,32,5) (F true).

</details>

---

## M-11 · 브로드캐스팅 오류 판별(여러 shape) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** a 는 (32, 5), b5 는 (5,), c 는 (32, 1), d 는 (1, 32) 이다. "ValueError: operands could not be broadcast together" 가 발생하는 식을 모두 고르시오.

- **A.** a + b5
- **B.** a \* c
- **C.** a + d
- **D.** a - a.mean(axis=0)
- **E.** a - a.mean(axis=1)

**정답: C, E**

**해설** — (32,5)+(5,) 는 열 방향으로 확장되어 가능 (A 거짓). (32,5)\*(32,1) 도 가능 (B 거짓). (32,5)+(1,32) 는 마지막 축 5 대 32 가 맞지 않아 오류 (C 참). mean(axis=0) 은 (5,) 이므로 가능 (D 거짓). mean(axis=1) 은 (32,) 이므로 마지막 축 5 와 맞지 않아 오류 (E 참). ⚠️ 함정: D — mean(axis=0) 은 (5,) 라서 가능 — axis=1 이었다면 오류.

<details><summary>English</summary>

**Q.** `a` has shape (32, 5), `b5` has shape (5,), `c` has shape (32, 1), and `d` has shape (1, 32). Which expressions raise "ValueError: operands could not be broadcast together"?

- **A.** `a + b5`
- **B.** `a \* c`
- **C.** `a + d`
- **D.** `a - a.mean(axis=0)`
- **E.** `a - a.mean(axis=1)`

**Answer: C, E**

**Explanation** — (32,5)+(5,) broadcasts along the columns (A false). (32,5)\*(32,1) also broadcasts (B false). (32,5)+(1,32) mismatches the trailing axes 5 vs 32 (C true). mean(axis=0) is (5,) so it works (D false). mean(axis=1) is (32,) which does not match the trailing 5 (E true). ⚠️ Trap: D — mean(axis=0) is (5,) so it works — axis=1 would raise.

</details>

---

## M-12 · reshape(3,-1) 배열의 집계와 마스킹 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.arange(6).reshape(3, -1) 일 때 옳은 것을 모두 고르시오.

- **A.** my_array.shape == (3, 2)
- **B.** my_array.sum(axis=0) 은 [6, 9] 다.
- **C.** my_array[my_array % 2 == 1] 은 [1, 3, 5] 다.
- **D.** (my_array > 2).sum(axis=1) 은 [0, 1, 2] 다.
- **E.** np.all(my_array >= 0, axis=0) 은 [True, True] 다.
- **F.** np.any(my_array > 4) 는 False 다.

**정답: A, B, C, D, E**

**해설** — 6개를 (3, -1) 로 바꾸면 (3,2) (A 참). 행렬은 [[0,1],[2,3],[4,5]] 이고 axis=0 합은 [0+2+4, 1+3+5] = [6,9] (B 참). 홀수만 뽑으면 [1,3,5] (C 참). 행별로 2 초과 개수는 0, 1, 2 (D 참). 모든 원소가 0 이상이므로 [True,True] (E 참). 5 > 4 이므로 np.any(my_array > 4) 는 True 이며 False 가 아니다 (F 거짓). ⚠️ 함정: F — "False" → "True"이면 참.

<details><summary>English</summary>

**Q.** `my_array = np.arange(6).reshape(3, -1)`. Which statements are true?

- **A.** `my_array.shape == (3, 2)`
- **B.** `my_array.sum(axis=0)` equals `[6, 9]`
- **C.** `my_array[my_array % 2 == 1]` equals `[1, 3, 5]`
- **D.** `(my_array > 2).sum(axis=1)` equals `[0, 1, 2]`
- **E.** `np.all(my_array >= 0, axis=0)` equals `[True, True]`
- **F.** `np.any(my_array > 4)` is False.

**Answer: A, B, C, D, E**

**Explanation** — Reshaping 6 elements to (3, -1) gives (3,2) (A true). The matrix is [[0,1],[2,3],[4,5]] and the axis=0 sum is [0+2+4, 1+3+5] = [6,9] (B true). The odd elements are [1,3,5] (C true). The per-row count above 2 is 0, 1, 2 (D true). All elements are ≥ 0 (E true). Since 5 > 4, np.any(my_array > 4) is True, not False (F false). ⚠️ Trap: F — "is False" → "is True" would make it TRUE.

</details>

---

## M-13 · 뷰와 복사본 판별(my_array 수정 여부) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.arange(6).reshape(2, 3) 이고, 아래 방법으로 my_array2 를 만든 뒤 my_array2[:] = 99 를 실행한다. my_array 의 원소가 바뀌는 경우를 모두 고르시오.

- **A.** my_array2 = my_array.T
- **B.** my_array2 = my_array[0]
- **C.** my_array2 = my_array[:, 1:]
- **D.** my_array2 = my_array[:, [0, 2]]
- **E.** my_array2 = my_array.flatten()
- **F.** my_array2 = my_array + 0

**정답: A, B, C**

**해설** — 전치(.T)는 뷰 (A 참). 정수 하나로 인덱싱(my_array[0])도 뷰 (B 참). 기본 슬라이스 [:, 1:] 도 뷰 (C 참). 정수 배열 인덱싱 [:, [0, 2]] 은 복사본 (D 거짓). flatten() 은 복사본 (E 거짓). 산술 연산(+ 0)은 새 배열 (F 거짓). ⚠️ 함정: E — flatten() 은 복사본 — "my_array.T" 같은 뷰였다면 참.

> 출처 메모: ⚠ 보기 E: .flatten() 은 자료에 없음

<details><summary>English</summary>

**Q.** `my_array = np.arange(6).reshape(2, 3)`. Then `my_array2` is created in one of the ways below, and we run `my_array2[:] = 99`. In which cases will the elements of `my_array` be affected?

- **A.** `my_array2 = my_array.T`
- **B.** `my_array2 = my_array[0]`
- **C.** `my_array2 = my_array[:, 1:]`
- **D.** `my_array2 = my_array[:, [0, 2]]`
- **E.** `my_array2 = my_array.flatten()`
- **F.** `my_array2 = my_array + 0`

**Answer: A, B, C**

**Explanation** — Transpose (.T) returns a view (A true). A single integer index also returns a view (B true). A basic slice [:, 1:] is a view (C true). Integer-array indexing [:, [0, 2]] returns a copy (D false). flatten() returns a copy (E false). Arithmetic (+ 0) creates a new array (F false). ⚠️ Trap: E — flatten() makes a copy — a view such as "my_array.T" would make it TRUE.

</details>

---

## M-14 · unique / bincount / 불리언 집계 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** v = np.array([2, 0, 2, 1, 0, 2]) 일 때 옳은 것을 모두 고르시오.

- **A.** np.unique(v) 는 [0, 1, 2] 다.
- **B.** np.bincount(v) 는 [2, 1, 3] 이다.
- **C.** np.count_nonzero(v == 2) == 3
- **D.** v[v != 0] 은 [2, 1, 2] 다.
- **E.** np.unique(v != 0) 은 [False, True] 다.
- **F.** np.bincount(v) 의 길이는 2다.

**정답: A, B, C, E**

**해설** — unique 는 정렬된 고유값 [0,1,2] (A 참). bincount 는 값 i 의 개수를 i번째 원소에 담아 [2,1,3] (B 참). 2가 3개 (C 참). v[v != 0] 은 0을 제외한 [2,2,1,2] 이며 [2,1,2] 가 아니다 (D 거짓). v != 0 은 불리언 배열이고 unique 는 [False,True] (E 참). bincount 길이는 최댓값+1 = 3 (F 거짓). ⚠️ 함정: D — v[v != 0] 은 [2, 2, 1, 2] 다.

<details><summary>English</summary>

**Q.** `v = np.array([2, 0, 2, 1, 0, 2])`. Which statements are true?

- **A.** `np.unique(v)` equals `[0, 1, 2]`
- **B.** `np.bincount(v)` equals `[2, 1, 3]`
- **C.** `np.count_nonzero(v == 2) == 3`
- **D.** `v[v != 0]` equals `[2, 1, 2]`
- **E.** `np.unique(v != 0)` equals `[False, True]`
- **F.** `np.bincount(v)` has length 2.

**Answer: A, B, C, E**

**Explanation** — unique gives the sorted distinct values [0,1,2] (A true). bincount stores the count of value i at index i: [2,1,3] (B true). There are three 2s (C true). v[v != 0] keeps the non-zeros: [2,2,1,2], not [2,1,2] (D false). v != 0 is a boolean array whose unique values are [False,True] (E true). The length of bincount is max+1 = 3 (F false). ⚠️ Trap: D — v[v != 0] is [2, 2, 1, 2].

</details>

---

## M-15 · 브로드캐스팅·집계·행렬곱의 shape · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.ones((4, 3)) 이고 my_array2 = np.ones(3) 일 때 옳은 것을 모두 고르시오.

- **A.** (my_array + my_array2).shape == (4, 3)
- **B.** (my_array[:, None, :] + my_array2).shape == (4, 1, 3)
- **C.** (my_array[:, None, :] + my_array[None, :, :]).shape == (4, 4, 3)
- **D.** np.sum(my_array, axis=1).shape == (3,)
- **E.** np.mean(my_array, axis=0, keepdims=True).shape == (1, 3)
- **F.** (my_array @ my_array2).shape == (4,)

**정답: A, B, C, E, F**

**해설** — (4,3)+(3,) 는 열 방향 확장으로 (4,3) (A 참). (4,1,3)+(3,) → (4,1,3) (B 참). (4,1,3)+(1,4,3) → (4,4,3) (C 참). sum(axis=1) 은 행을 합치므로 (4,) 이며 (3,) 이 아니다 (D 거짓). mean(axis=0, keepdims=True) 은 (1,3) (E 참). (4,3) @ (3,) → (4,) (F 참). ⚠️ 함정: D — sum(axis=1) 은 (4,) — "(3,)"을 "(4,)"로 바꾸면 참.

> 출처 메모: ⚠ 보기 E: keepdims, F: @ 는 DOCX에 없음

<details><summary>English</summary>

**Q.** `my_array = np.ones((4, 3))` and `my_array2 = np.ones(3)`. Which statements are true?

- **A.** `(my_array + my_array2).shape == (4, 3)`
- **B.** `(my_array[:, None, :] + my_array2).shape == (4, 1, 3)`
- **C.** `(my_array[:, None, :] + my_array[None, :, :]).shape == (4, 4, 3)`
- **D.** `np.sum(my_array, axis=1).shape == (3,)`
- **E.** `np.mean(my_array, axis=0, keepdims=True).shape == (1, 3)`
- **F.** `(my_array @ my_array2).shape == (4,)`

**Answer: A, B, C, E, F**

**Explanation** — (4,3)+(3,) broadcasts along the columns giving (4,3) (A true). (4,1,3)+(3,) gives (4,1,3) (B true). (4,1,3)+(1,4,3) gives (4,4,3) (C true). sum(axis=1) collapses the columns, so the shape is (4,), not (3,) (D false). mean(axis=0, keepdims=True) is (1,3) (E true). (4,3) @ (3,) gives (4,) (F true). ⚠️ Trap: D — sum(axis=1) is (4,) — "(3,)" → "(4,)" would make it TRUE.

</details>

---

## M2-10 · MSE와 np.mean(d)\*\*2 함정 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** yp = np.array([2, 4, 6]) 이고 y = np.array([1, 5, 9]) 일 때 옳은 것을 모두 고르시오.

- **A.** np.sum((yp - y) \*\* 2) == 11
- **B.** np.mean((yp - y) \*\* 2) / 2 ≈ 1.83
- **C.** np.mean(yp - y) \*\* 2 은 11/3 이다.
- **D.** (yp - y[:, None]).shape == (3, 3)
- **E.** np.sum(yp > y) == 1
- **F.** np.argmax(np.abs(yp - y)) == 2

**정답: A, B, D, E, F**

**해설** — 오차는 [1, −1, −3] 이고 제곱합은 11 (A 참). 제곱의 평균/2 = (11/3)/2 ≈ 1.83 (B 참). np.mean(yp−y) = −1 이므로 제곱은 1 이며 11/3 이 아니다(고전적 함정) (C 거짓). (3,) − (3,1) 은 브로드캐스팅되어 (3,3) (D 참). yp > y 는 [T, F, F] 이므로 합은 1 (E 참). \|오차\| = [1,1,3] 의 argmax 는 2 (F 참). ⚠️ 함정: C — np.mean(d)\*\*2 는 1 — "np.mean(d\*\*2)"이면 참.

> 출처 메모: ⚠ 보기 F: np.argmax/np.abs 는 자료에 없음

<details><summary>English</summary>

**Q.** `yp = np.array([2, 4, 6])` and `y = np.array([1, 5, 9])`. Which statements are true?

- **A.** `np.sum((yp - y) \*\* 2) == 11`
- **B.** `np.mean((yp - y) \*\* 2) / 2` ≈ 1.83
- **C.** `np.mean(yp - y) \*\* 2` equals 11/3
- **D.** `(yp - y[:, None]).shape == (3, 3)`
- **E.** `np.sum(yp > y) == 1`
- **F.** `np.argmax(np.abs(yp - y)) == 2`

**Answer: A, B, D, E, F**

**Explanation** — The errors are [1, −1, −3] and the squares sum to 11 (A true). mean of squares / 2 = (11/3)/2 ≈ 1.83 (B true). np.mean(yp−y) = −1, so its square is 1, not 11/3 (this is a classic bug) (C false). (3,) − (3,1) broadcasts to (3, 3) (D true). yp > y is [T, F, F], so the sum is 1 (E true). The argmax of \|error\| = [1,1,3] is 2 (F true). ⚠️ Trap: C — np.mean(d)\*\*2 is 1 — "np.mean(d\*\*2)" would make it TRUE.

</details>

---

## M2-11 · 정규방정식의 NumPy 구현 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** 정규방정식을 NumPy로 구현한다. X 의 shape 은 (100, 4), y 의 shape 은 (100,), lam = 0.1 일 때 옳은 것을 모두 고르시오.

- **A.** (X.T @ X).shape == (4, 4)
- **B.** (X.T @ y).shape == (4,)
- **C.** np.linalg.inv(X.T @ X + lam \* np.eye(4)).shape == (4, 4)
- **D.** X.T @ X + lam \* np.eye(100) 은 동작하며 (100, 100) 을 반환한다.
- **E.** (np.linalg.inv(X.T @ X + lam \* np.eye(4)) @ X.T @ y).shape == (4,)

**정답: A, B, C, E**

**해설** — (4,100)@(100,4) → (4,4) (A 참). (4,100)@(100,) → (4,) (B 참). (4,4)+(4,4) 의 역행렬 → (4,4) (C 참). (4,4) + (100,100) 은 브로드캐스팅되지 않아 ValueError (D 거짓). (4,4)@(4,) → (4,) (E 참).

> 출처 메모: 자료에 없음/제외: np.linalg.inv/np.eye (강의는 pinv)

<details><summary>English</summary>

**Q.** Normal equation in NumPy. `X` has shape (100, 4), `y` has shape (100,), and `lam = 0.1`. Which statements are true?

- **A.** `(X.T @ X).shape == (4, 4)`
- **B.** `(X.T @ y).shape == (4,)`
- **C.** `np.linalg.inv(X.T @ X + lam \* np.eye(4)).shape == (4, 4)`
- **D.** `X.T @ X + lam \* np.eye(100)` works and returns shape (100, 100).
- **E.** `(np.linalg.inv(X.T @ X + lam \* np.eye(4)) @ X.T @ y).shape == (4,)`

**Answer: A, B, C, E**

**Explanation** — (4,100)@(100,4) gives (4,4) (A true). (4,100)@(100,) gives (4,) (B true). The inverse of (4,4)+(4,4) is (4,4) (C true). (4,4) + (100,100) does not broadcast and raises a ValueError (D false). (4,4)@(4,) gives (4,) (E true).

</details>

---

## M2-12 · 로지스틱 회귀의 그래디언트 계산 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** z = np.array([0., np.log(3)]), h = 1 / (1 + np.exp(-z)), y = np.array([1, 0]), X = np.array([[1, 0], [1, 1]]) 일 때 옳은 것을 모두 고르시오.

- **A.** h 는 [0.5, 0.75] 다.
- **B.** np.mean(-y \* np.log(h) - (1 - y) \* np.log(1 - h)) ≈ 1.04 다.
- **C.** (X.T @ (h - y) / y.size).shape == (2,)
- **D.** X.T @ (h - y) / y.size 는 [0.125, 0.375] 다.
- **E.** h - y 는 [0.5, 0.75] 다.

**정답: A, B, C, D**

**해설** — z = [0, ln 3] 이므로 h = [0.5, 0.75] (A 참). BCE 평균 = (0.693 + 1.386)/2 ≈ 1.04 (B 참). (2,2)@(2,)/2 → (2,) (C 참). h − y = [−0.5, 0.75] 이므로 Xᵀ(h−y) = [0.25, 0.75], /2 = [0.125, 0.375] (D 참). h − y 는 [−0.5, 0.75] 이며 [0.5, 0.75] 가 아니다 (E 거짓). ⚠️ 함정: E — "h - y 는 [0.5, 0.75]" → "[-0.5, 0.75]"이면 참.

> 출처 메모: 자료에 없음/제외: ✗ L4 s29 계열: Xᵀ(h−y) 그래디언트 코드

<details><summary>English</summary>

**Q.** `z = np.array([0., np.log(3)])`, `h = 1 / (1 + np.exp(-z))`, `y = np.array([1, 0])`, `X = np.array([[1, 0], [1, 1]])`. Which statements are true?

- **A.** `h` equals `[0.5, 0.75]`
- **B.** `np.mean(-y \* np.log(h) - (1 - y) \* np.log(1 - h))` ≈ 1.04
- **C.** `(X.T @ (h - y) / y.size).shape == (2,)`
- **D.** `X.T @ (h - y) / y.size` equals `[0.125, 0.375]`
- **E.** `h - y` equals `[0.5, 0.75]`

**Answer: A, B, C, D**

**Explanation** — z = [0, ln 3] gives h = [0.5, 0.75] (A true). The mean BCE is (0.693 + 1.386)/2 ≈ 1.04 (B true). (2,2)@(2,)/2 gives (2,) (C true). h − y = [−0.5, 0.75], so Xᵀ(h−y) = [0.25, 0.75] and /2 = [0.125, 0.375] (D true). h − y is [−0.5, 0.75], not [0.5, 0.75] (E false). ⚠️ Trap: E — "h - y equals [0.5, 0.75]" → "[-0.5, 0.75]" would make it TRUE.

</details>

---

## M2-13 · 특징 스케일링 수치 계산(std/axis) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** X = np.array([[1., 10.], [2., 20.], [3., 30.], [4., 40.]]) 일 때 (np.std 는 기본적으로 모표준편차를 쓴다) 옳은 것을 모두 고르시오.

- **A.** X.mean(axis=0) 은 [2.5, 25.] 다.
- **B.** X.std(axis=0) ≈ [1.12, 11.18] 다.
- **C.** ((X - X.mean(axis=0)) / X.std(axis=0))[0] ≈ [-1.34, -1.34] 다.
- **D.** ((X - X.min(axis=0)) / (X.max(axis=0) - X.min(axis=0)))[:, 0] 의 두 번째 원소는 1/3 이다.
- **E.** X.mean(axis=1).shape == (2,)
- **F.** X.max(axis=0) - X.min(axis=0) 은 [3., 30.] 다.

**정답: A, B, C, D, F**

**해설** — 열 평균은 [2.5, 25] (A 참). 모표준편차: 첫 열 √1.25 ≈ 1.118, 둘째 열 √125 ≈ 11.18 (B 참). (1−2.5)/1.118 ≈ −1.34 (C 참). min-max 스케일링의 두 번째 값 = (2−1)/3 = 1/3 (D 참). mean(axis=1) 은 각 행의 평균이므로 shape 은 (4,) (E 거짓). max−min = [3, 30] (F 참). ⚠️ 함정: E — mean(axis=1) 은 (4,) — "(2,)"를 "(4,)"로 바꾸면 참.

> 출처 메모: 자료에 없음/제외: std/min/max 스케일링

<details><summary>English</summary>

**Q.** `X = np.array([[1., 10.], [2., 20.], [3., 30.], [4., 40.]])`. (`np.std` uses the population formula by default.) Which statements are true?

- **A.** `X.mean(axis=0)` equals `[2.5, 25.]`
- **B.** `X.std(axis=0)` ≈ `[1.12, 11.18]`
- **C.** `((X - X.mean(axis=0)) / X.std(axis=0))[0]` ≈ `[-1.34, -1.34]`
- **D.** `((X - X.min(axis=0)) / (X.max(axis=0) - X.min(axis=0)))[:, 0]` has 1/3 as its second element.
- **E.** `X.mean(axis=1).shape == (2,)`
- **F.** `X.max(axis=0) - X.min(axis=0)` equals `[3., 30.]`

**Answer: A, B, C, D, F**

**Explanation** — The column means are [2.5, 25] (A true). Population std: √1.25 ≈ 1.118 for the first column and √125 ≈ 11.18 for the second (B true). (1−2.5)/1.118 ≈ −1.34 (C true). The second value of min-max scaling is (2−1)/3 = 1/3 (D true). mean(axis=1) averages each row, so its shape is (4,) (E false). max−min = [3, 30] (F true). ⚠️ Trap: E — mean(axis=1) is (4,) — "(2,)" → "(4,)" would make it TRUE.

</details>

---

## M2-14 · 소프트맥스 keepdims 함정 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** Z = np.array([[0, 0], [np.log(2), 0]]), e = np.exp(Z), P = e / e.sum(axis=1, keepdims=True) 일 때 옳은 것을 모두 고르시오.

- **A.** P[1] ≈ [0.667, 0.333] 다.
- **B.** P.sum(axis=1) 은 [1, 1] 이다.
- **C.** e / e.sum(axis=1) 은 ValueError 를 발생시킨다.
- **D.** e.sum(axis=1, keepdims=True).shape == (2, 1)
- **E.** np.argmax(P, axis=1) 은 [0, 0] 이다.

**정답: A, B, D, E**

**해설** — e = [[1,1],[2,1]] 이고 행 합은 [2,3] 이므로 P[1] = [2/3, 1/3] ≈ [0.667, 0.333] (A 참). 소프트맥스 출력은 행마다 합이 1 (B 참). e / e.sum(axis=1) 은 (2,2)/(2,) 인데 여기서는 마지막 축 크기가 2로 같아 \*\*오류가 나지 않고\*\* 각 열을 잘못 나눈다 (C 거짓). keepdims 로 (2,1) (D 참). 두 행 모두 첫 원소가 크므로 argmax 는 [0, 0] (E 참). ⚠️ 함정: C — 마지막 축이 2로 같아 오류가 나지 않는다 — keepdims=True 를 써야 한다.

> 출처 메모: 자료에 없음/제외: 소프트맥스 keepdims

<details><summary>English</summary>

**Q.** Softmax in NumPy. `Z = np.array([[0, 0], [np.log(2), 0]])`, `e = np.exp(Z)`, `P = e / e.sum(axis=1, keepdims=True)`. Which statements are true?

- **A.** `P[1]` ≈ `[0.667, 0.333]`
- **B.** `P.sum(axis=1)` equals `[1, 1]`
- **C.** `e / e.sum(axis=1)` raises a ValueError.
- **D.** `e.sum(axis=1, keepdims=True).shape == (2, 1)`
- **E.** `np.argmax(P, axis=1)` equals `[0, 0]`

**Answer: A, B, D, E**

**Explanation** — e = [[1,1],[2,1]] with row sums [2,3], so P[1] = [2/3, 1/3] ≈ [0.667, 0.333] (A true). Each row of the softmax output sums to 1 (B true). e / e.sum(axis=1) is (2,2)/(2,) and here the trailing dimension happens to be 2, so it does NOT raise — it silently divides each column by the wrong number (C false). keepdims gives (2,1) (D true). The first element is the largest in both rows, so the argmax is [0, 0] (E true). ⚠️ Trap: C — the trailing dimension happens to be 2, so it does not raise — use keepdims=True.

</details>

---

## M2-15 · 선형 회귀의 한 스텝(그래디언트·손실) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** X = np.array([[1, 0], [1, 1], [1, 2]]), y = np.array([1, 3, 5]), theta = np.zeros(2), lr = 0.1, grad = X.T @ (X @ theta - y) / y.size 일 때 옳은 것을 모두 고르시오.

- **A.** grad ≈ [-3., -4.33] 다.
- **B.** theta = theta - lr \* grad 후 theta ≈ [0.3, 0.43] 이다.
- **C.** 초기 손실 np.sum((X @ theta - y) \*\* 2) / (2 \* y.size) ≈ 5.83 이다.
- **D.** grad.shape == (2,)
- **E.** theta = theta + lr \* grad 도 손실을 감소시킨다.
- **F.** (X @ theta).shape == (3,)

**정답: A, B, C, D, F**

**해설** — X@θ−y = [−1,−3,−5], Xᵀ(…) = [−9,−13], /3 = [−3, −4.33] (A 참). θ_new = [0,0] − 0.1·[−3,−4.33] = [0.3, 0.433] (B 참). 초기 손실 = (1+9+25)/(2·3) = 35/6 ≈ 5.83 (C 참). grad 의 shape 은 (2,) (D 참). 그래디언트를 더하면 손실이 증가한다 (E 거짓). (3,2)@(2,) → (3,) (F 참). ⚠️ 함정: E — "더하면 감소" → "빼면 감소"이면 참.

> 출처 메모: 자료에 없음/제외: ✗ L4 s29 계열: 그래디언트 코드·np.zeros

<details><summary>English</summary>

**Q.** One gradient descent step for linear regression. `X = np.array([[1, 0], [1, 1], [1, 2]])`, `y = np.array([1, 3, 5])`, `theta = np.zeros(2)`, `lr = 0.1`, `grad = X.T @ (X @ theta - y) / y.size`. Which statements are true?

- **A.** `grad` ≈ `[-3., -4.33]`
- **B.** After `theta = theta - lr \* grad`, theta ≈ `[0.3, 0.43]`
- **C.** The initial loss `np.sum((X @ theta - y) \*\* 2) / (2 \* y.size)` ≈ 5.83
- **D.** `grad.shape == (2,)`
- **E.** `theta = theta + lr \* grad` would also decrease the loss.
- **F.** `(X @ theta).shape == (3,)`

**Answer: A, B, C, D, F**

**Explanation** — X@θ−y = [−1,−3,−5], so Xᵀ(…) = [−9,−13] and /3 = [−3, −4.33] (A true). θ_new = [0,0] − 0.1·[−3,−4.33] = [0.3, 0.433] (B true). The initial loss is (1+9+25)/(2·3) = 35/6 ≈ 5.83 (C true). grad has shape (2,) (D true). Adding the gradient increases the loss (E false). (3,2)@(2,) gives (3,) (F true). ⚠️ Trap: E — "adding decreases the loss" → "subtracting decreases the loss" would make it TRUE.

</details>

---

## D-38 · ndarray 의 shape / dtype / size · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 가 numpy.ndarray 인스턴스일 때 옳은 것을 모두 고르시오.

- **A.** my_array.shape 가 (5, 6) 일 수 있다.
- **B.** my_array.shape 가 (1,) 일 수 있다.
- **C.** my_array.shape 가 (0, 1, 0) 일 수 있다.
- **D.** my_array.shape 가 12 일 수 있다.
- **E.** my_array.dtype 이 (5, 6) 일 수 있다.
- **F.** my_array.size 가 (5, 6) 일 수 있다.

**정답: A, B, C**

**해설** — shape 는 튜플이며 (5,6), (1,), (0,1,0) 모두 가능하다 (A·B·C 참). shape 는 정수일 수 없다 (D 거짓). dtype 은 자료형 객체이지 튜플이 아니다 (E 거짓). size 는 전체 원소 개수인 정수다 (F 거짓). ⚠️ 함정: D — "정수 12" → "튜플"이면 참. ⚠️ 함정: E — "dtype이 (5, 6)" → "자료형 객체"이면 참. ⚠️ 함정: F — "size가 (5, 6)" → "정수"이면 참.

<details><summary>English</summary>

**Q.** If my_array is a numpy.ndarray instance, which statements are true?

- **A.** my_array.shape can be equal to (5, 6).
- **B.** my_array.shape can be equal to (1,).
- **C.** my_array.shape can be equal to (0, 1, 0).
- **D.** my_array.shape can be equal to 12.
- **E.** my_array.dtype can be equal to (5, 6).
- **F.** my_array.size can be equal to (5, 6).

**Answer: A, B, C**

**Explanation** — shape is a tuple, so (5,6), (1,) and (0,1,0) are all possible (A, B and C true). shape cannot be an integer (D false). dtype is a data type object, not a tuple (E false). size is an integer, the total number of elements (F false). ⚠️ Trap: D — "the integer 12" → "a tuple" would make it TRUE. ⚠️ Trap: E — "dtype equal to (5, 6)" → "a data type object" would make it TRUE. ⚠️ Trap: F — "size equal to (5, 6)" → "an integer" would make it TRUE.

</details>

---

## D-39 · ndarray 의 size 와 ndim · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 가 numpy.ndarray 인스턴스일 때 옳은 것을 모두 고르시오.

- **A.** my_array.size 가 12 일 수 있다.
- **B.** my_array.ndim 이 (5, 6) 일 수 있다.
- **C.** my_array.ndim 이 2 일 수 있다.
- **D.** my_array.size 는 전체 원소의 개수다.

**정답: A, C, D**

**해설** — size 는 정수이며 전체 원소 개수다 (A·D 참). ndim 은 차원의 개수인 정수이므로 2 는 가능하지만 (C 참) 튜플 (5,6) 은 될 수 없다 (B 거짓). ⚠️ 함정: B — "ndim이 (5, 6)" → "정수 2"이면 참.

<details><summary>English</summary>

**Q.** If my_array is a numpy.ndarray instance, which statements are true?

- **A.** my_array.size can be equal to 12.
- **B.** my_array.ndim can be equal to (5, 6).
- **C.** my_array.ndim can be equal to 2.
- **D.** my_array.size is the total number of elements.

**Answer: A, C, D**

**Explanation** — size is an integer and equals the total number of elements (A and D true). ndim is an integer (the number of dimensions), so 2 is possible (C true) but a tuple such as (5,6) is not (B false). ⚠️ Trap: B — "ndim equal to (5, 6)" → "the integer 2" would make it TRUE.

</details>

---

## D-40 · (32, 5) 배열의 슬라이싱 shape · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 의 shape 이 (32, 5) 일 때 옳은 것을 모두 고르시오.

- **A.** my_array[:, :].shape == (32, 5)
- **B.** my_array[:, 1].shape == (32,)
- **C.** my_array[1, :].shape == (5,)
- **D.** my_array[1:, :].shape == (31, 5)
- **E.** my_array[0, :-1].shape == (4,)
- **F.** my_array[[0], :].shape == (1, 5)

**정답: A, B, C, D, E, F**

**해설** — 전체 슬라이싱은 (32, 5) (A 참). 열 하나를 정수로 인덱싱하면 차원이 제거되어 (32,) (B 참). 행 하나는 (5,) (C 참). 1행부터 끝까지는 (31, 5) (D 참). 마지막 열을 뺀 행은 (4,) (E 참). 정수 배열 [[0]] 로 인덱싱하면 축이 유지되어 (1, 5) (F 참). 여섯 개 모두 맞다.

<details><summary>English</summary>

**Q.** my_array has shape (32, 5). Which statements are true?

- **A.** my_array[:, :].shape == (32, 5)
- **B.** my_array[:, 1].shape == (32,)
- **C.** my_array[1, :].shape == (5,)
- **D.** my_array[1:, :].shape == (31, 5)
- **E.** my_array[0, :-1].shape == (4,)
- **F.** my_array[[0], :].shape == (1, 5)

**Answer: A, B, C, D, E, F**

**Explanation** — The full slice is (32, 5) (A true). A single column indexed by an integer drops the axis, giving (32,) (B true). One row gives (5,) (C true). Rows 1..end give (31, 5) (D true). A row without its last column gives (4,) (E true). The integer-array index [[0]] keeps the axis, giving (1, 5) (F true). All six are correct.

</details>

---

## D-41 · 정수 인덱싱이 차원을 제거하는지 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 의 shape 이 (32, 5) 일 때 옳은 것을 모두 고르시오.

- **A.** my_array[[-1, -1], -1].shape == (2,)
- **B.** my_array[1, :].shape == (1, 5)
- **C.** my_array[:, 1].shape == (32, 1)
- **D.** my_array[0, :-1].shape == (5,)

**정답: A**

**해설** — 정수 배열 인덱싱 [[-1,-1], -1] 은 (2,) (A 참). 정수 하나로 인덱싱하면 그 축이 제거되므로 [1, :] 은 (5,) 이고 (1,5) 가 아니다 (B 거짓). [:, 1] 은 (32,) 이고 (32,1) 이 아니다 (C 거짓). [0, :-1] 은 (4,) 이고 (5,) 가 아니다 (D 거짓). ⚠️ 함정: B — "(1, 5)" → "(5,)"이면 참. ⚠️ 함정: C — "(32, 1)" → "(32,)"이면 참. ⚠️ 함정: D — "(5,)" → "(4,)"이면 참.

<details><summary>English</summary>

**Q.** my_array has shape (32, 5). Which statements are true?

- **A.** my_array[[-1, -1], -1].shape == (2,)
- **B.** my_array[1, :].shape == (1, 5)
- **C.** my_array[:, 1].shape == (32, 1)
- **D.** my_array[0, :-1].shape == (5,)

**Answer: A**

**Explanation** — The integer-array index [[-1,-1], -1] gives (2,) (A true). Indexing with a single integer drops that axis, so [1, :] is (5,), not (1,5) (B false). [:, 1] is (32,), not (32,1) (C false). [0, :-1] is (4,), not (5,) (D false). ⚠️ Trap: B — "(1, 5)" → "(5,)" would make it TRUE. ⚠️ Trap: C — "(32, 1)" → "(32,)" would make it TRUE. ⚠️ Trap: D — "(5,)" → "(4,)" would make it TRUE.

</details>

---

## D-42 · 브로드캐스팅 오류 판별 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array1 은 shape (32, 5), my_array2 는 shape (32,) 이고 둘 다 수치형이다. "ValueError: operands could not be broadcast together" 가 발생하는 식을 모두 고르시오.

- **A.** my_array1 + my_array2
- **B.** my_array1 + my_array2[:, None]
- **C.** my_array1 + my_array2[None, :]
- **D.** my_array1 + 1

**정답: A, C**

**해설** — (32,5)+(32,) 는 마지막 축 5 대 32 가 맞지 않아 오류 (A 참). (32,1) 로 바꾸면 열 방향 확장으로 가능 (B 거짓). (1,32) 는 (32,5) 와 맞지 않아 오류 (C 참). 스칼라 1은 항상 가능 (D 거짓). ⚠️ 함정: B — "(32, 1)" → "(1, 32)"이면 참. ⚠️ 함정: D — "스칼라 1" → shape이 맞지 않는 배열이면 참.

<details><summary>English</summary>

**Q.** my_array1 has shape (32, 5) and my_array2 has shape (32,), both numeric. Which expressions raise "ValueError: operands could not be broadcast together …"?

- **A.** my_array1 + my_array2
- **B.** my_array1 + my_array2[:, None]
- **C.** my_array1 + my_array2[None, :]
- **D.** my_array1 + 1

**Answer: A, C**

**Explanation** — (32,5)+(32,) mismatches the trailing axes 5 vs 32 (A true). Reshaping to (32,1) broadcasts along the columns (B false). (1,32) does not match (32,5) (C true). A scalar always broadcasts (D false). ⚠️ Trap: B — "(32, 1)" → "(1, 32)" would make it TRUE. ⚠️ Trap: D — "the scalar 1" → an array with mismatching shape would make it TRUE.

</details>

---

## D-43 · 연산 결과의 shape (전치·브로드캐스팅) · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 의 shape 이 (32, 5) 일 때 옳은 것을 모두 고르시오.

- **A.** (my_array < 0).shape == (32, 5)
- **B.** my_array.T.shape == (5, 32)
- **C.** my_array.T.T.shape == (32, 5)
- **D.** (my_array + my_array).shape == (32, 5)
- **E.** (my_array + my_array[:, None, :]).shape == (32, 32, 5)
- **F.** (my_array + my_array[:, None, :]).shape == (32, 5)

**정답: A, B, C, D, E**

**해설** — 비교 연산은 원소별이므로 shape 유지 (A 참). 전치는 (5,32), 두 번 전치하면 원래대로 (B·C 참). 같은 shape 끼리의 덧셈은 (32,5) (D 참). (32,1,5) 를 더하면 브로드캐스팅되어 (32,32,5) (E 참, F 거짓). ⚠️ 함정: F — "(32, 5)" → "(32, 32, 5)"이면 참.

<details><summary>English</summary>

**Q.** my_array has shape (32, 5). Which statements are true?

- **A.** (my_array < 0).shape == (32, 5)
- **B.** my_array.T.shape == (5, 32)
- **C.** my_array.T.T.shape == (32, 5)
- **D.** (my_array + my_array).shape == (32, 5)
- **E.** (my_array + my_array[:, None, :]).shape == (32, 32, 5)
- **F.** (my_array + my_array[:, None, :]).shape == (32, 5)

**Answer: A, B, C, D, E**

**Explanation** — A comparison is element-wise, so the shape is unchanged (A true). Transpose gives (5,32) and transposing twice restores the original (B and C true). Adding two arrays of the same shape gives (32,5) (D true). Adding (32,1,5) broadcasts to (32,32,5) (E true, F false). ⚠️ Trap: F — "(32, 5)" → "(32, 32, 5)" would make it TRUE.

</details>

---

## D-44 · axis 방향과 반환형 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 의 shape 이 (32, 5) 일 때 옳은 것을 모두 고르시오.

- **A.** np.mean(my_array, axis=0).shape == (5,)
- **B.** np.mean(my_array, axis=1).shape == (32,)
- **C.** np.sum(my_array, axis=0) 의 type 은 numpy.ndarray 다.
- **D.** np.sum(my_array) 의 type 은 numpy.ndarray 다.
- **E.** np.mean(my_array, axis=1).shape == (5,)

**정답: A, B, C**

**해설** — axis=0 은 행을 합쳐 (5,) (A 참). axis=1 은 열을 합쳐 (32,) (B 참, E 거짓). 축을 지정한 집계는 ndarray 를 반환한다 (C 참). 축을 지정하지 않으면 전체를 합쳐 NumPy 스칼라(numpy.float64 등)를 반환하며 ndarray 가 아니다 (D 거짓). ⚠️ 함정: D — "numpy.ndarray" → "NumPy 스칼라"이면 참. ⚠️ 함정: E — "(5,)" → "(32,)"이면 참.

<details><summary>English</summary>

**Q.** my_array has shape (32, 5). Which statements are true?

- **A.** np.mean(my_array, axis=0).shape == (5,)
- **B.** np.mean(my_array, axis=1).shape == (32,)
- **C.** The type of np.sum(my_array, axis=0) is numpy.ndarray.
- **D.** The type of np.sum(my_array) is numpy.ndarray.
- **E.** np.mean(my_array, axis=1).shape == (5,)

**Answer: A, B, C**

**Explanation** — axis=0 collapses the rows giving (5,) (A true). axis=1 collapses the columns giving (32,) (B true, E false). Aggregation with an axis returns an ndarray (C true). Without an axis everything is collapsed to a NumPy scalar (e.g. numpy.float64), not an ndarray (D false). ⚠️ Trap: D — "numpy.ndarray" → "a NumPy scalar" would make it TRUE. ⚠️ Trap: E — "(5,)" → "(32,)" would make it TRUE.

</details>

---

## D-45 · reshape(2,-1) 배열의 마스킹과 shape · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.arange(4).reshape(2, -1) 일 때 옳은 것을 모두 고르시오.

- **A.** my_array.shape == (2, 2)
- **B.** (my_array \* 2 + 1).shape == (2, 2)
- **C.** my_array[my_array > 0].shape == (3,)
- **D.** my_array[(my_array > 0) & (my_array % 2 == 0)].shape == (1,)
- **E.** (my_array \* my_array.reshape(2, 2, -1)).shape == (2, 2, 2)
- **F.** my_array[my_array > 0].shape == (2, 2)

**정답: A, B, C, D, E**

**해설** — 배열은 [[0,1],[2,3]] 이다. shape (2,2) (A 참). 산술 연산은 shape 유지 (B 참). >0 마스킹은 [1,2,3] 으로 1차원 (3,) (C 참, F 거짓). >0 이고 짝수인 원소는 2 하나뿐이라 (1,) (D 참). (2,2) \* (2,2,1) 은 브로드캐스팅되어 (2,2,2) (E 참). ⚠️ 함정: F — "(2, 2)" → "(3,)"이면 참.

<details><summary>English</summary>

**Q.** my_array = np.arange(4).reshape(2, -1). Which statements are true?

- **A.** my_array.shape == (2, 2)
- **B.** (my_array \* 2 + 1).shape == (2, 2)
- **C.** my_array[my_array > 0].shape == (3,)
- **D.** my_array[(my_array > 0) & (my_array % 2 == 0)].shape == (1,)
- **E.** (my_array \* my_array.reshape(2, 2, -1)).shape == (2, 2, 2)
- **F.** my_array[my_array > 0].shape == (2, 2)

**Answer: A, B, C, D, E**

**Explanation** — The array is [[0,1],[2,3]]. Its shape is (2,2) (A true). Arithmetic keeps the shape (B true). The >0 mask selects [1,2,3], a 1-D array of shape (3,) (C true, F false). Only the value 2 is both >0 and even, giving (1,) (D true). (2,2) \* (2,2,1) broadcasts to (2,2,2) (E true). ⚠️ Trap: F — "(2, 2)" → "(3,)" would make it TRUE.

</details>

---

## D-46 · 뷰(view)인 경우: my_array 가 바뀐다 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.arange(4) 이고, 아래 연산 후 my_array2[...] = 99 를 실행한다. my_array 의 원소가 바뀌는 경우를 모두 고르시오.

- **A.** my_array2 = my_array.reshape(2, 2) 후 my_array2[:, :] = 99
- **B.** my_array2 = my_array.T 후 my_array2[:] = 99
- **C.** my_array2 = np.append(my_array, 42) 후 my_array2[:] = 99
- **D.** my_array2 = my_array[1:2] 후 my_array2[:] = 99

**정답: A, B, D**

**해설** — reshape 은 뷰 (A 참). 전치도 뷰 (B 참). np.append 는 새 배열을 만들어 원본이 바뀌지 않는다 (C 거짓). 기본 슬라이스는 뷰 (D 참). ⚠️ 함정: C — "np.append" → "기본 슬라이스"이면 참.

<details><summary>English</summary>

**Q.** my_array = np.arange(4), and after each operation we execute my_array2[...] = 99. In which cases will the elements of my_array be affected?

- **A.** my_array2 = my_array.reshape(2, 2), then my_array2[:, :] = 99
- **B.** my_array2 = my_array.T, then my_array2[:] = 99
- **C.** my_array2 = np.append(my_array, 42), then my_array2[:] = 99
- **D.** my_array2 = my_array[1:2], then my_array2[:] = 99

**Answer: A, B, D**

**Explanation** — reshape returns a view (A true). Transpose returns a view (B true). np.append creates a new array, so the original is untouched (C false). A basic slice is a view (D true). ⚠️ Trap: C — "np.append" → "a basic slice" would make it TRUE.

</details>

---

## D-47 · 복사본(copy)인 경우: my_array 가 안 바뀐다 · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.arange(4) 이고, 아래 연산 후 my_array2[:] = 99 를 실행한다. my_array 의 원소가 바뀌지 \*\*않는\*\* 경우를 모두 고르시오.

- **A.** my_array2 = my_array[[1, 2]]
- **B.** my_array2 = my_array[my_array < 2]
- **C.** my_array2 = my_array + my_array
- **D.** my_array2 = my_array[1:3]

**정답: A, B, C**

**해설** — 정수 배열(fancy) 인덱싱은 복사본 (A 참). 불리언 마스크도 복사본 (B 참). 산술 연산은 새 배열 (C 참). 기본 슬라이스 [1:3] 은 뷰이므로 원본이 바뀐다 (D 거짓). ⚠️ 함정: D — "my_array[1:3]" → "fancy 인덱싱"이면 참.

<details><summary>English</summary>

**Q.** my_array = np.arange(4), and after each operation we execute my_array2[:] = 99. In which cases will the elements of my_array NOT be affected?

- **A.** my_array2 = my_array[[1, 2]]
- **B.** my_array2 = my_array[my_array < 2]
- **C.** my_array2 = my_array + my_array
- **D.** my_array2 = my_array[1:3]

**Answer: A, B, C**

**Explanation** — Integer-array (fancy) indexing returns a copy (A true). A boolean mask returns a copy (B true). Arithmetic creates a new array (C true). The basic slice [1:3] is a view, so it does modify the original (D false). ⚠️ Trap: D — "my_array[1:3]" → "fancy indexing" would make it TRUE.

</details>

---

## D-48 · 불리언 집계 (count_nonzero, any, all) · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.arange(4).reshape(2, -1) 일 때 옳은 것을 모두 고르시오.

- **A.** np.count_nonzero(my_array == 0) == 1
- **B.** np.any(my_array == 0) 는 True 다.
- **C.** np.all(my_array == 0, axis=1) 은 [False, False] 다.
- **D.** np.all(my_array == 0, axis=1) 은 하나의 불리언 값이다.
- **E.** np.count_nonzero(my_array == 0) == 2

**정답: A, B, C**

**해설** — 배열은 [[0,1],[2,3]] 이므로 0 은 정확히 1개 (A 참, E 거짓). 하나라도 0 이 있으므로 any 는 True (B 참). 행별로 모두 0 인지 보면 두 행 모두 False 이고 결과는 shape (2,) 의 배열이다 (C 참, D 거짓). ⚠️ 함정: D — "하나의 불리언" → "shape (2,) 배열"이면 참. ⚠️ 함정: E — "2개" → "1개"이면 참.

<details><summary>English</summary>

**Q.** my_array = np.arange(4).reshape(2, -1). Which statements are true?

- **A.** np.count_nonzero(my_array == 0) == 1
- **B.** np.any(my_array == 0) is True.
- **C.** np.all(my_array == 0, axis=1) equals [False, False]
- **D.** np.all(my_array == 0, axis=1) is a single boolean value.
- **E.** np.count_nonzero(my_array == 0) == 2

**Answer: A, B, C**

**Explanation** — The array is [[0,1],[2,3]], so there is exactly one 0 (A true, E false). Since at least one element is 0, any is True (B true). Checking each row for 'all zeros' gives [False, False], an array of shape (2,) (C true, D false). ⚠️ Trap: D — "a single boolean" → "an array of shape (2,)" would make it TRUE. ⚠️ Trap: E — "2" → "1" would make it TRUE.

</details>

---

## D-49 · unique / bincount / 정렬 / argsort · ⭐ 티어 A (DOCX 그대로) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.array([3, 1, 2]) 일 때 옳은 것을 모두 고르시오.

- **A.** np.unique(my_array) 는 [1, 2, 3] 이다.
- **B.** np.unique(my_array == 0) 는 [False] 다.
- **C.** np.bincount(my_array) 는 [0, 1, 1, 1] 이다.
- **D.** np.sort(my_array)[::-1] 은 [3, 2, 1] 이다.
- **E.** np.argsort(my_array) 는 [1, 2, 0] 이다.
- **F.** my_array[my_array != 0] 은 [1, 2] 다.

**정답: A, B, C, D, E**

**해설** — unique 는 정렬된 고유값 [1,2,3] (A 참). my_array == 0 은 모두 False 이므로 unique 는 [False] (B 참). bincount 는 값 i 의 개수를 i번째에 담아 [0,1,1,1] (C 참). 내림차순 정렬은 [3,2,1] (D 참). argsort 는 정렬했을 때의 원래 인덱스 [1,2,0] (E 참). 0 이 없으므로 != 0 은 모두 True 이고 결과는 [3,1,2] 다 (F 거짓). ⚠️ 함정: F — "!= 0" → "== 0"이면 참.

<details><summary>English</summary>

**Q.** my_array = np.array([3, 1, 2]). Which statements are true?

- **A.** np.unique(my_array) equals [1, 2, 3]
- **B.** np.unique(my_array == 0) equals [False]
- **C.** np.bincount(my_array) equals [0, 1, 1, 1]
- **D.** np.sort(my_array)[::-1] equals [3, 2, 1]
- **E.** np.argsort(my_array) equals [1, 2, 0]
- **F.** my_array[my_array != 0] equals [1, 2]

**Answer: A, B, C, D, E**

**Explanation** — unique gives the sorted distinct values [1,2,3] (A true). my_array == 0 is all False, so unique is [False] (B true). bincount stores the count of value i at index i: [0,1,1,1] (C true). Descending sort gives [3,2,1] (D true). argsort gives the original indices in sorted order: [1,2,0] (E true). There is no 0, so != 0 is all True and the result is [3,1,2] (F false). ⚠️ Trap: F — "!= 0" → "== 0" would make it TRUE.

</details>

---

## NP-01 · ndarray 속성 (shape·size·ndim·dtype) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 가 numpy.ndarray 일 때 옳은 것을 모두 고르시오.

- **A.** my_array.shape 가 (5, 6) 일 수 있다.
- **B.** my_array.shape 가 (0, 1, 0) 일 수 있다.
- **C.** my_array.shape 가 12 일 수 있다.
- **D.** my_array.size 가 12 일 수 있다.
- **E.** my_array.ndim 이 (5, 6) 일 수 있다.
- **F.** my_array.dtype 이 (5, 6) 일 수 있다.

**정답: A, B, D**

**해설** — shape 는 튜플이라 (5,6), (0,1,0) 모두 가능하다 (A·B 참). shape 가 정수 12 일 수는 없다 (C 거짓). size 는 원소 개수인 정수이므로 12 가능 (D 참). ndim 은 차원 수인 정수 (E 거짓). dtype 은 자료형 객체 (F 거짓). ⚠️ 함정: C — "정수 12" → "튜플"이면 참. ⚠️ 함정: E — "ndim이 (5, 6)" → "정수"이면 참. ⚠️ 함정: F — "dtype이 (5, 6)" → "자료형 객체"이면 참.

<details><summary>English</summary>

**Q.** my_array is a numpy.ndarray. Which statements are true?

- **A.** my_array.shape can be equal to (5, 6).
- **B.** my_array.shape can be equal to (0, 1, 0).
- **C.** my_array.shape can be equal to 12.
- **D.** my_array.size can be equal to 12.
- **E.** my_array.ndim can be equal to (5, 6).
- **F.** my_array.dtype can be equal to (5, 6).

**Answer: A, B, D**

**Explanation** — shape is a tuple, so (5,6) and (0,1,0) are both possible (A, B true). shape can never be the integer 12 (C false). size is an integer (the number of elements), so 12 is possible (D true). ndim is an integer (E false). dtype is a data type object (F false). ⚠️ Trap: C — "the integer 12" → "a tuple" would make it TRUE. ⚠️ Trap: E — "ndim equal to (5, 6)" → "an integer" would make it TRUE. ⚠️ Trap: F — "dtype equal to (5, 6)" → "a data type object" would make it TRUE.

</details>

---

## NP-02 · (32, 5) 배열의 슬라이싱 shape · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 의 shape 이 (32, 5) 일 때 옳은 것을 모두 고르시오.

- **A.** my_array[:, :].shape == (32, 5)
- **B.** my_array[:, 1].shape == (32, 1)
- **C.** my_array[1:, :].shape == (31, 5)
- **D.** my_array[0, :-1].shape == (4,)
- **E.** my_array[[0], :].shape == (1, 5)
- **F.** my_array[[-1, -1], -1].shape == (2,)

**정답: A, C, D, E, F**

**해설** — 전체 (A 참). 열을 정수 하나로 인덱싱하면 그 축이 사라지므로 [:, 1] 은 (32,) 이며 (32,1) 이 아니다 (B 거짓). 1행부터 끝까지 (31,5) (C 참). 마지막 열을 뺀 행은 (4,) (D 참). 정수 '배열' [[0]] 로 인덱싱하면 축이 유지되어 (1,5) (E 참). [[-1,-1], -1] 은 (2,) (F 참). ⚠️ 함정: B — "(32, 1)" → "(32,)"이면 참.

<details><summary>English</summary>

**Q.** my_array has shape (32, 5). Which statements are true?

- **A.** my_array[:, :].shape == (32, 5)
- **B.** my_array[:, 1].shape == (32, 1)
- **C.** my_array[1:, :].shape == (31, 5)
- **D.** my_array[0, :-1].shape == (4,)
- **E.** my_array[[0], :].shape == (1, 5)
- **F.** my_array[[-1, -1], -1].shape == (2,)

**Answer: A, C, D, E, F**

**Explanation** — The whole array is (32,5) (A true). A single integer index drops that axis, so [:, 1] is (32,), not (32,1) (B false). Rows 1..end give (31,5) (C true). A row without its last column gives (4,) (D true). An integer \*array\* index [[0]] keeps the axis, giving (1,5) (E true). [[-1,-1], -1] gives (2,) (F true). ⚠️ Trap: B — "(32, 1)" → "(32,)" would make it TRUE.

</details>

---

## NP-04 · 연산 결과의 shape (전치·집계·브로드캐스팅) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 의 shape 이 (32, 5) 일 때 옳은 것을 모두 고르시오.

- **A.** (my_array < 0).shape == (32, 5)
- **B.** my_array.T.shape == (5, 32)
- **C.** my_array.T.T.shape == (32, 5)
- **D.** (my_array + my_array[:, None, :]).shape == (32, 32, 5)
- **E.** np.mean(my_array, axis=0).shape == (5,)
- **F.** np.mean(my_array, axis=1).shape == (5,)

**정답: A, B, C, D, E**

**해설** — 비교는 원소별이라 shape 유지 (A 참). 전치는 (5,32), 두 번 전치하면 원래대로 (B·C 참). (32,1,5) 를 더하면 (32,32,5) (D 참). axis=0 은 행을 합쳐 열마다 하나 → (5,) (E 참). axis=1 은 열을 합쳐 행마다 하나 → (32,) 이며 (5,) 가 아니다 (F 거짓). ⚠️ 함정: F — "(5,)" → "(32,)"이면 참.

<details><summary>English</summary>

**Q.** my_array has shape (32, 5). Which statements are true?

- **A.** (my_array < 0).shape == (32, 5)
- **B.** my_array.T.shape == (5, 32)
- **C.** my_array.T.T.shape == (32, 5)
- **D.** (my_array + my_array[:, None, :]).shape == (32, 32, 5)
- **E.** np.mean(my_array, axis=0).shape == (5,)
- **F.** np.mean(my_array, axis=1).shape == (5,)

**Answer: A, B, C, D, E**

**Explanation** — A comparison is element-wise, so the shape is unchanged (A true). Transpose is (5,32) and transposing twice restores the original (B, C true). Adding (32,1,5) broadcasts to (32,32,5) (D true). axis=0 collapses the rows into one value per column → (5,) (E true). axis=1 collapses the columns into one value per row → (32,), not (5,) (F false). ⚠️ Trap: F — "(5,)" → "(32,)" would make it TRUE.

</details>

---

## NP-05 · 집계의 반환형과 keepdims · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array 의 shape 이 (32, 5) 일 때 옳은 것을 모두 고르시오.

- **A.** np.sum(my_array, axis=0) 의 type 은 numpy.ndarray 다.
- **B.** np.sum(my_array) 의 type 은 numpy.ndarray 다.
- **C.** np.sum(my_array).shape == ()
- **D.** np.sum(my_array, axis=1, keepdims=True).shape == (32, 1)
- **E.** np.mean(my_array) 의 type 은 numpy.ndarray 다.

**정답: A, C, D**

**해설** — 축을 지정한 집계는 ndarray 를 반환한다 (A 참). 축을 지정하지 않으면 전체를 하나의 NumPy 스칼라(numpy.float64)로 줄이므로 ndarray 가 아니다 (B·E 거짓). 스칼라는 shape 이 () 다 (C 참). keepdims=True 는 축을 남겨 (32,1) (D 참). ⚠️ 함정: B — "numpy.ndarray" → "NumPy 스칼라"이면 참. ⚠️ 함정: E — "numpy.ndarray" → "NumPy 스칼라"이면 참.

> 출처 메모: ⚠ 보기 D: keepdims 는 자료에 없음

<details><summary>English</summary>

**Q.** my_array has shape (32, 5). Which statements are true?

- **A.** The type of np.sum(my_array, axis=0) is numpy.ndarray.
- **B.** The type of np.sum(my_array) is numpy.ndarray.
- **C.** np.sum(my_array).shape == ()
- **D.** np.sum(my_array, axis=1, keepdims=True).shape == (32, 1)
- **E.** The type of np.mean(my_array) is numpy.ndarray.

**Answer: A, C, D**

**Explanation** — Aggregation with an axis returns an ndarray (A true). Without an axis everything is reduced to a single NumPy scalar (numpy.float64), which is not an ndarray (B and E false). A scalar has shape () (C true). keepdims=True keeps the axis, giving (32,1) (D true). ⚠️ Trap: B — "numpy.ndarray" → "a NumPy scalar" would make it TRUE. ⚠️ Trap: E — "numpy.ndarray" → "a NumPy scalar" would make it TRUE.

</details>

---

## NP-07 · 뷰(view)인 경우: my_array 가 바뀐다 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** my_array = np.arange(4) 이고, 아래 연산 후 my_array2[:] = 99 (reshape 는 my_array2[:, :] = 99) 를 실행한다. my_array 의 원소가 바뀌는 경우를 모두 고르시오.

- **A.** my_array2 = my_array.reshape(2, 2)
- **B.** my_array2 = my_array.T
- **C.** my_array2 = np.append(my_array, 42)
- **D.** my_array2 = my_array[1:2]

**정답: A, B, D**

**해설** — reshape 은 뷰를 돌려준다 (A 참). 전치(.T)도 뷰 (B 참). np.append 는 새 배열을 만들어 원본이 바뀌지 않는다 (C 거짓). 기본 슬라이스 [1:2] 는 뷰 (D 참). ⚠️ 함정: C — "np.append" → "기본 슬라이스"이면 참.

<details><summary>English</summary>

**Q.** my_array = np.arange(4). After each operation below we run my_array2[:] = 99 (for the reshape: my_array2[:, :] = 99). In which cases are the elements of my_array affected?

- **A.** my_array2 = my_array.reshape(2, 2)
- **B.** my_array2 = my_array.T
- **C.** my_array2 = np.append(my_array, 42)
- **D.** my_array2 = my_array[1:2]

**Answer: A, B, D**

**Explanation** — reshape returns a view (A true). Transpose returns a view (B true). np.append creates a new array, so the original is untouched (C false). A basic slice is a view (D true). ⚠️ Trap: C — "np.append" → "a basic slice" would make it TRUE.

</details>

---

## NP-08 · 복사본(copy)인 경우: my_array 가 안 바뀐다 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** 같은 설정(my_array = np.arange(4))에서 my_array2[:] = 99 를 실행했을 때 my_array 의 원소가 바뀌지 \*\*않는\*\* 경우를 모두 고르시오.

- **A.** my_array2 = my_array[[1, 2]]
- **B.** my_array2 = my_array[my_array < 2]
- **C.** my_array2 = my_array + my_array
- **D.** my_array2 = my_array[1:3]

**정답: A, B, C**

**해설** — 정수 배열(fancy) 인덱싱은 복사본 (A 참). 불리언 마스크로 '읽는' 것도 복사본 (B 참). 산술 연산은 새 배열 (C 참). 기본 슬라이스 [1:3] 은 뷰이므로 원본이 바뀐다 (D 거짓). ⚠️ 함정: D — "my_array[1:3]" → "fancy 인덱싱"이면 참.

<details><summary>English</summary>

**Q.** Same setup. In which cases are the elements of my_array NOT affected?

- **A.** my_array2 = my_array[[1, 2]]
- **B.** my_array2 = my_array[my_array < 2]
- **C.** my_array2 = my_array + my_array
- **D.** my_array2 = my_array[1:3]

**Answer: A, B, C**

**Explanation** — Integer-array (fancy) indexing returns a copy (A true). Reading with a boolean mask also returns a copy (B true). Arithmetic creates a new array (C true). The basic slice [1:3] is a view, so it does modify the original (D false). ⚠️ Trap: D — "my_array[1:3]" → "fancy indexing" would make it TRUE.

</details>

---

## NP-11 · 강의 코드: y_pred = np.dot(X, theta) · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** X 의 shape 은 (200, 5), theta 의 shape 은 (5,) 일 때 옳은 것을 모두 고르시오.

- **A.** np.dot(X, theta).shape == (200,)
- **B.** theta[:, None] (shape (5, 1)) 을 쓰면 np.dot(X, theta[:, None]).shape == (200, 1)
- **C.** (X \* theta).shape == (200, 5) (원소별 곱이며 내적이 아니다)
- **D.** theta @ X 도 동작한다.
- **E.** (X.T @ X).shape == (5, 5)

**정답: A, B, C, E**

**해설** — (200,5)·(5,) 은 (200,) (A 참). (5,1) 을 쓰면 (200,1) (B 참). \* 는 원소별 곱이라 (5,) 가 행 방향으로 브로드캐스팅되어 (200,5) (C 참). theta @ X 는 (5,) @ (200,5) 로 안쪽 차원 5 와 200 이 맞지 않아 오류 (D 거짓). X.T @ X 는 (5,200)@(200,5) = (5,5) (E 참). ⚠️ 함정: D — "theta @ X" → "X @ theta"이면 참.

> 티어 근거: y_pred = np.dot(X, theta)

> 출처 메모: y_pred = np.dot(X, theta)

<details><summary>English</summary>

**Q.** X has shape (200, 5), and theta has shape (5,). Which statements are true?

- **A.** np.dot(X, theta).shape == (200,)
- **B.** With theta[:, None] (shape (5, 1)), np.dot(X, theta[:, None]).shape == (200, 1)
- **C.** (X \* theta).shape == (200, 5) (elementwise, not a dot product)
- **D.** theta @ X works.
- **E.** (X.T @ X).shape == (5, 5)

**Answer: A, B, C, E**

**Explanation** — (200,5)·(5,) gives (200,) (A true). Using (5,1) gives (200,1) (B true). \* is elementwise, broadcasting (5,) across the rows to give (200,5) (C true). theta @ X is (5,) @ (200,5), whose inner dimensions 5 and 200 do not match, so it raises an error (D false). X.T @ X is (5,200)@(200,5) = (5,5) (E true). ⚠️ Trap: D — "theta @ X" → "X @ theta" would make it TRUE.

</details>

---

## NP-12 · 강의 코드: theta = np.matmul(np.linalg.pinv(X), y) (정규방정식) · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** X 의 shape 은 (200, 5), y 의 shape 은 (200,) 일 때 옳은 것을 모두 고르시오.

- **A.** np.linalg.pinv(X).shape == (5, 200)
- **B.** theta.shape == (5,)
- **C.** 최소제곱 해를 준다 (XᵀX 가 역행렬을 가질 때 λ = 0 인 정규방정식과 같은 해).
- **D.** 학습률(learning rate)이 필요하다.
- **E.** np.linalg.pinv(X).shape == (200, 5)

**정답: A, B, C**

**해설** — pinv(X) 는 의사역행렬로 (5,200) (A 참, E 거짓). (5,200)@(200,) = (5,) (B 참). 한 단계로 최소제곱 해를 준다 (C 참). 정규방정식/의사역행렬에는 학습률이 필요 없다 (D 거짓). ⚠️ 함정: D — "학습률이 필요하다" → "필요 없다"이면 참. ⚠️ 함정: E — "(200, 5)" → "(5, 200)"이면 참.

> 티어 근거: theta = np.matmul(np.linalg.pinv(X), y)

> 출처 메모: theta = np.matmul(np.linalg.pinv(X), y)

<details><summary>English</summary>

**Q.** X has shape (200, 5), and y has shape (200,). Which statements are true?

- **A.** np.linalg.pinv(X).shape == (5, 200)
- **B.** theta.shape == (5,)
- **C.** It gives the least-squares solution (the same as the normal equation with λ = 0 when XᵀX is invertible).
- **D.** It needs a learning rate.
- **E.** np.linalg.pinv(X).shape == (200, 5)

**Answer: A, B, C**

**Explanation** — pinv(X) is the pseudo-inverse with shape (5,200) (A true, E false). (5,200)@(200,) = (5,) (B true). It gives the least-squares solution in one step (C true). The normal equation / pseudo-inverse needs no learning rate (D false). ⚠️ Trap: D — "needs a learning rate" → "needs none" would make it TRUE. ⚠️ Trap: E — "(200, 5)" → "(5, 200)" would make it TRUE.

</details>

---

## NP-13 · 강의 코드: 1 / (1 + np.exp(-z) + eps) 시그모이드 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** 시그모이드 구현 1 / (1 + np.exp(-z) + eps) 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 배열 z 를 넣으면 출력도 z 와 같은 shape 이다.
- **B.** eps = 0 이면 z = 0 에서 값이 0.5 다.
- **C.** 출력은 0 과 1 사이에 있다.
- **D.** 작은 양수 eps 를 더하면 출력이 정확한 시그모이드보다 아주 조금 작아진다.
- **E.** 배열 z 를 넣으면 결과는 하나의 스칼라다.

**정답: A, B, C, D**

**해설** — np.exp 는 원소별이므로 shape 이 유지된다 (A 참). eps = 0 이면 1/(1+1) = 0.5 (B 참). 분모가 항상 1보다 크므로 0 < 출력 < 1 (C 참). 분모에 eps 를 더하면 값이 조금 작아진다 (D 참). 스칼라가 아니라 배열이 나온다 (E 거짓). ⚠️ 함정: E — "스칼라" → "배열"이면 참.

> 티어 근거: Sigmoid code 1/(1+np.exp(-z)+eps)

> 출처 메모: 시그모이드 코드 (eps 는 분모에)

<details><summary>English</summary>

**Q.** Which statements about the sigmoid implementation 1 / (1 + np.exp(-z) + eps) are true?

- **A.** For an array z, the output has the same shape as z.
- **B.** With eps = 0, the sigmoid of 0 is 0.5.
- **C.** The outputs are between 0 and 1.
- **D.** With a small positive eps, the outputs are slightly smaller than the exact sigmoid.
- **E.** For an array z, the function returns a single scalar.

**Answer: A, B, C, D**

**Explanation** — np.exp is element-wise, so the shape is preserved (A true). With eps = 0, 1/(1+1) = 0.5 (B true). The denominator is always greater than 1, so 0 < output < 1 (C true). Adding eps to the denominator makes the values slightly smaller (D true). It returns an array, not a scalar (E false). ⚠️ Trap: E — "a scalar" → "an array" would make it TRUE.

</details>

---

## NP-14 · 강의 코드: 이진 교차엔트로피 손실과 브로드캐스팅 함정 · 티어 B (강조된 슬라이드) · 2️⃣A 강의 L1–6

**Q.** h = np.array([0.9, 0.2]), y = np.array([1, 0]) 일 때 손실 np.mean(-y\*np.log(h+eps) - (1-y)\*np.log(1-h+eps)) 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 손실은 약 0.16 이다.
- **B.** 손실은 스칼라다.
- **C.** h 의 shape 이 (2, 1) 이고 y 가 (2,) 이면 -y \* np.log(h) 의 shape 은 (2, 2) 이다.
- **D.** 그 경우(h 가 (2,1), y 가 (2,))에도 평균은 여전히 0.16 이다.
- **E.** eps 는 log(0) 을 피하기 위해 넣는다.

**정답: A, B, C, E**

**해설** — −ln0.9 = 0.105, −ln0.8 = 0.223 이므로 평균은 약 0.164 (A 참). np.mean 은 스칼라를 돌려준다 (B 참). (2,) 와 (2,1) 이 브로드캐스팅되어 (2,2) 가 된다 (C 참). 그 경우 평균은 약 1.06 으로 완전히 달라진다 (D 거짓). eps 는 log(0) = −inf 를 막는다 (E 참). ⚠️ 함정: D — "0.16" → "약 1.06"이면 참.

> 티어 근거: BCE loss code with np.mean/np.log

> 출처 메모: BCE 손실 코드; 브로드캐스팅 함정은 추가 내용

<details><summary>English</summary>

**Q.** h = np.array([0.9, 0.2]), y = np.array([1, 0]). Which statements are true about the loss np.mean(-y\*np.log(h+eps) - (1-y)\*np.log(1-h+eps))?

- **A.** The loss ≈ 0.16.
- **B.** The loss is a scalar.
- **C.** If h had shape (2, 1) while y has shape (2,), then -y \* np.log(h) would have shape (2, 2).
- **D.** In that case (shape (2, 1) vs (2,)), the mean is still 0.16.
- **E.** eps avoids log(0).

**Answer: A, B, C, E**

**Explanation** — −ln0.9 = 0.105 and −ln0.8 = 0.223, so the mean is about 0.164 (A true). np.mean returns a scalar (B true). (2,) and (2,1) broadcast to (2,2) (C true). In that case the mean becomes about 1.06 — a completely different value (D false). eps prevents log(0) = −inf (E true). ⚠️ Trap: D — "0.16" → "about 1.06" would make it TRUE.

</details>

---

## NP-15 · 강의 코드: gradient = np.dot(X.T, (h - y)) / y.size; theta -= lr \* gradient · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** X 의 shape 은 (6, 3), theta 의 shape 은 (3,) 일 때 옳은 것을 모두 고르시오.

- **A.** h 와 y 가 모두 (6,) 이면 gradient.shape == (3,)
- **B.** theta -= lr \* gradient 는 theta 를 제자리에서(in place) 바꾼다.
- **C.** h 와 y 가 모두 (6, 1) 이면 gradient.shape == (3, 1) 이고 theta -= lr \* gradient 는 ValueError 를 낸다.
- **D.** h 가 (6, 1) 이고 y 가 (6,) 이면 h - y 의 shape 은 (6, 6) 이다 (조용한 버그).
- **E.** y.size 는 특징(feature)의 개수다.

**정답: A, B, C, D**

**해설** — X.T @ (h−y) 는 (3,6)@(6,) = (3,) (A 참). -= 는 제자리 연산 (B 참). (6,1) 이면 gradient 가 (3,1) 이고, (3,) 에 (3,1) 을 제자리로 넣으려 하면 모양이 맞지 않아 ValueError (C 참). (6,1) 과 (6,) 은 브로드캐스팅되어 (6,6) 이 되는 조용한 버그 (D 참). y.size 는 예제 수 m 이다 (E 거짓). ⚠️ 함정: E — "특징의 개수" → "예제 수 m"이면 참.

> 출처 메모: 자료에 없음/제외: ✗ 슬라이드(L4 s29): gradient = np.dot(X.T,(h-y))/y.size; theta -= lr\*gradient

<details><summary>English</summary>

**Q.** X has shape (6, 3), theta has shape (3,). Which statements are true?

- **A.** If h and y both have shape (6,), gradient.shape == (3,).
- **B.** theta -= lr \* gradient changes theta in place.
- **C.** If h and y both have shape (6, 1), then gradient.shape == (3, 1), and theta -= lr \* gradient raises a ValueError.
- **D.** If h has shape (6, 1) and y has shape (6,), then h - y has shape (6, 6) (a silent bug).
- **E.** y.size is the number of features.

**Answer: A, B, C, D**

**Explanation** — X.T @ (h−y) is (3,6)@(6,) = (3,) (A true). -= is an in-place operation (B true). With (6,1) the gradient is (3,1), and assigning that into a (3,) array in place raises a ValueError (C true). (6,1) with (6,) broadcasts to (6,6) — a silent bug (D true). y.size is the number of examples m, not the number of features (E false). ⚠️ Trap: E — "the number of features" → "the number of examples m" would make it TRUE.

</details>

---

## NP-16 · 로지스틱 회귀 한 스텝 계산 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** X = np.array([[1, 2], [1, 0]]), y = np.array([1, 0]), theta = np.zeros(2), lr = 0.1, h = 1 / (1 + np.exp(-X @ theta)) 일 때 옳은 것을 모두 고르시오.

- **A.** h 는 [0.5, 0.5] 다.
- **B.** 손실은 약 0.69 다.
- **C.** X.T @ (h - y) / y.size 는 [0, -0.5] 다.
- **D.** theta -= lr \* gradient 후 theta 는 [0, 0.05] 다.
- **E.** gradient 는 [0, 0.5] 다.

**정답: A, B, C, D**

**해설** — theta 가 0 이므로 X@theta = [0,0], 시그모이드(0) = 0.5 → [0.5, 0.5] (A 참). 손실 = −(ln0.5 + ln0.5)/2 = ln2 ≈ 0.693 (B 참). h−y = [−0.5, 0.5], Xᵀ(h−y) = [0, −1], ÷2 = [0, −0.5] (C 참). theta = 0 − 0.1·[0,−0.5] = [0, 0.05] (D 참). gradient 는 [0, −0.5] 이며 [0, 0.5] 가 아니다 (E 거짓). ⚠️ 함정: E — "[0, 0.5]" → "[0, -0.5]"이면 참.

> 출처 메모: 자료에 없음/제외: ✗ L4 s29 계열: 로지스틱 한 스텝

<details><summary>English</summary>

**Q.** X = np.array([[1, 2], [1, 0]]), y = np.array([1, 0]), theta = np.zeros(2), lr = 0.1, h = 1 / (1 + np.exp(-X @ theta)). Which statements are true?

- **A.** h equals [0.5, 0.5].
- **B.** The loss ≈ 0.69.
- **C.** X.T @ (h - y) / y.size equals [0, -0.5].
- **D.** After theta -= lr \* gradient, theta equals [0, 0.05].
- **E.** The gradient equals [0, 0.5].

**Answer: A, B, C, D**

**Explanation** — With theta = 0, X@theta = [0,0] and sigmoid(0) = 0.5 → [0.5, 0.5] (A true). Loss = −(ln0.5 + ln0.5)/2 = ln2 ≈ 0.693 (B true). h−y = [−0.5, 0.5], Xᵀ(h−y) = [0, −1], divided by 2 = [0, −0.5] (C true). theta = 0 − 0.1·[0,−0.5] = [0, 0.05] (D true). The gradient is [0, −0.5], not [0, 0.5] (E false). ⚠️ Trap: E — "[0, 0.5]" → "[0, -0.5]" would make it TRUE.

</details>

---

## NP-17 · 텐서/배열 속성 (dtype·itemsize·nbytes) · 티어 B (강조된 슬라이드) · 1️⃣ DOCX (시험 범위)

**Q.** a = np.zeros((2, 12), dtype=np.float32) 일 때 옳은 것을 모두 고르시오.

- **A.** a.size == 24
- **B.** a.ndim == 2
- **C.** a.shape == (2, 12)
- **D.** a.itemsize == 4
- **E.** a.nbytes == 96
- **F.** a.dtype 은 float64 다.

**정답: A, B, C, D, E**

**해설** — 원소 24개 (A 참). 차원 2 (B 참). shape (2,12) (C 참). float32 는 원소당 4바이트 (D 참). 24 × 4 = 96 바이트 (E 참). dtype 은 float32 이며 float64 가 아니다 (F 거짓). ⚠️ 함정: F — "float64" → "float32"이면 참.

> 티어 근거: array/tensor attributes (⚠ nbytes is extra)

> 출처 메모: itemsize 는 L6 텐서 슬라이드; ⚠ nbytes 는 자료에 없음

<details><summary>English</summary>

**Q.** a = np.zeros((2, 12), dtype=np.float32). Which statements are true?

- **A.** a.size == 24
- **B.** a.ndim == 2
- **C.** a.shape == (2, 12)
- **D.** a.itemsize == 4
- **E.** a.nbytes == 96
- **F.** a.dtype is float64.

**Answer: A, B, C, D, E**

**Explanation** — 24 elements (A true). 2 dimensions (B true). shape is (2,12) (C true). float32 uses 4 bytes per element (D true). 24 × 4 = 96 bytes (E true). The dtype is float32, not float64 (F false). ⚠️ Trap: F — "float64" → "float32" would make it TRUE.

</details>

---

## NP-18 · NumPy 로 표준화 (특징 스케일링) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** X = np.array([[1., 200.], [2., 400.], [3., 600.]]) 이고 Xs = (X - X.mean(axis=0)) / X.std(axis=0) 일 때 옳은 것을 모두 고르시오.

- **A.** X.mean(axis=0) 는 [2., 400.] 이다.
- **B.** Xs 의 각 열은 평균 0, 표준편차 1 이다.
- **C.** Xs 의 두 열은 서로 완전히 같다.
- **D.** axis=0 대신 axis=1 을 쓰면 특징(열)이 아니라 각 예제(행)를 표준화한다.
- **E.** X.std(axis=0) 는 [1., 200.] 이다.

**정답: A, B, C, D**

**해설** — 열별 평균은 [2, 400] (A 참). (x−평균)/표준편차(numpy 는 모표준편차) 이므로 각 열은 평균 0, 표준편차 1 (B 참). 두 번째 열이 첫 열의 200배라 표준화 후에는 두 열이 완전히 같아진다 (C 참). axis=1 은 행(예제) 방향으로 계산한다 (D 참). 실제 표준편차는 [0.816, 163.3] 이며 [1, 200] 이 아니다 (E 거짓). ⚠️ 함정: E — "[1., 200.]" → "[0.816, 163.3]"이면 참.

> 출처 메모: 자료에 없음/제외: .std 표준화

<details><summary>English</summary>

**Q.** X = np.array([[1., 200.], [2., 400.], [3., 600.]]) and Xs = (X - X.mean(axis=0)) / X.std(axis=0). Which statements are true?

- **A.** X.mean(axis=0) equals [2., 400.]
- **B.** Each column of Xs has mean 0 and standard deviation 1.
- **C.** Both columns of Xs are identical.
- **D.** Using axis=1 instead of axis=0 would standardize each example (row), not each feature.
- **E.** X.std(axis=0) equals [1., 200.]

**Answer: A, B, C, D**

**Explanation** — The per-column mean is [2, 400] (A true). Since we divide by the std (NumPy uses the population std), each column has mean 0 and std 1 (B true). The second column is 200× the first, so after standardization both columns are identical (C true). axis=1 works along the rows (examples) (D true). The actual std is [0.816, 163.3], not [1, 200] (E false). ⚠️ Trap: E — "[1., 200.]" → "[0.816, 163.3]" would make it TRUE.

</details>

---

## NP-19 · 이상치와 스케일링 수치 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** x = np.array([1., 2., 3., 100.]) 일 때 옳은 것을 모두 고르시오.

- **A.** min-max 스케일링 (x - x.min()) / (x.max() - x.min()) 에서 값 3 은 약 0.02 다.
- **B.** min-max 후 처음 세 값은 모두 0.03 미만이다.
- **C.** 값 100 의 표준화 값은 약 1.73 이다.
- **D.** x.std() 는 약 42.4 다.
- **E.** 표준화 값은 항상 [0, 1] 범위에 있다.
- **F.** min-max 스케일링이 표준화보다 이상치에 더 강건하다.

**정답: A, B, C, D**

**해설** — (3−1)/99 = 0.0202 (A 참). 처음 세 값은 0, 0.0101, 0.0202 로 모두 0.03 미만 (B 참). (100−26.5)/42.44 = 1.73 (C 참). 모표준편차는 42.44 (D 참). 표준화 값은 범위 제한이 없다 (E 거짓). min-max 는 최솟값·최댓값에 의존하므로 이상치에 더 민감하다 (F 거짓). ⚠️ 함정: E — "[0, 1] 범위" → "범위 제한 없음"이면 참. ⚠️ 함정: F — "min-max가 더 강건" → "표준화가 더 강건"이면 참.

> 출처 메모: 자료에 없음/제외: .std/.min/.max

<details><summary>English</summary>

**Q.** x = np.array([1., 2., 3., 100.]). Which statements are true?

- **A.** Min-max scaling (x - x.min()) / (x.max() - x.min()) gives about 0.02 for the value 3.
- **B.** After min-max scaling, the first three values are all below 0.03.
- **C.** The standardized value of 100 is about 1.73.
- **D.** x.std() is about 42.4.
- **E.** Standardized values are always in [0, 1].
- **F.** Min-max scaling is more robust to outliers than standardization.

**Answer: A, B, C, D**

**Explanation** — (3−1)/99 = 0.0202 (A true). The first three values become 0, 0.0101, 0.0202, all below 0.03 (B true). (100−26.5)/42.44 = 1.73 (C true). The population std is 42.44 (D true). Standardized values are unbounded (E false). Min-max depends on the min/max, so it is more sensitive to outliers (F false). ⚠️ Trap: E — "always in [0, 1]" → "unbounded" would make it TRUE. ⚠️ Trap: F — "min-max is more robust" → "standardization is more robust" would make it TRUE.

</details>

---

## NP-20 · 불리언 마스크 연산자 (& · \| · ~) · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** m = np.arange(4).reshape(2, -1) 일 때 옳은 것을 모두 고르시오.

- **A.** (m > 0) & (m % 2 == 0) 는 [[False, False], [True, False]] 다.
- **B.** m > 0 & m % 2 == 0 는 ValueError 를 낸다.
- **C.** (m > 0) and (m % 2 == 0) 는 원소별로 잘 동작한다.
- **D.** (m > 0) \| (m == 0) 는 모두 True 다.
- **E.** ~(m > 0) 는 m == 0 과 같다.

**정답: A, B, D, E**

**해설** — 배열은 [[0,1],[2,3]] 이다. (m>0)&(m%2==0) → [[F,F],[T,F]] (A 참). 괄호 없이 쓰면 연산자 우선순위 때문에 비교가 연결되어 배열의 진리값을 묻게 되고 ValueError 가 난다 (B 참). and/or 는 배열에서도 ValueError 를 낸다 (C 거짓). (m>0)\|(m==0) 은 모든 원소가 True (D 참). ~(m>0) 은 m==0 과 정확히 같다 (E 참). ⚠️ 함정: C — "and가 원소별로 동작" → "ValueError"이면 참.

> 출처 메모: NumPy

<details><summary>English</summary>

**Q.** m = np.arange(4).reshape(2, -1). Which statements are true?

- **A.** (m > 0) & (m % 2 == 0) equals [[False, False], [True, False]]
- **B.** m > 0 & m % 2 == 0 raises a ValueError.
- **C.** (m > 0) and (m % 2 == 0) works elementwise.
- **D.** (m > 0) \| (m == 0) is all True.
- **E.** ~(m > 0) equals m == 0.

**Answer: A, B, D, E**

**Explanation** — The array is [[0,1],[2,3]]. (m>0)&(m%2==0) gives [[F,F],[T,F]] (A true). Without parentheses the operator precedence chains the comparisons, which asks for the truth value of an array and raises a ValueError (B true). and/or also raise a ValueError on arrays (C false). (m>0)\|(m==0) is True everywhere (D true). ~(m>0) is exactly m==0 (E true). ⚠️ Trap: C — "and works elementwise" → "raises a ValueError" would make it TRUE.

</details>

---

## NP-21 · NumPy 로 정확도와 예측 계산 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** yp = np.array([1, 0, 2, 2]), yt = np.array([1, 1, 2, 0]) 일 때 옳은 것을 모두 고르시오.

- **A.** (yp == yt).mean() == 0.5
- **B.** (yp == yt).sum() == 2
- **C.** np.count_nonzero(yp != yt) == 2
- **D.** np.argmax(np.array([[.1, .7, .2], [.5, .3, .2]]), axis=1) 는 [1, 0] 이다.
- **E.** (np.array([.7, .2, .5]) >= .5).astype(int) 는 [1, 0, 1] 이다.
- **F.** 정확도는 0.25 다.

**정답: A, B, C, D, E**

**해설** — 맞은 개수는 2개라 비율 0.5 (A 참), 합 2 (B 참), 틀린 개수 2 (C 참). argmax(axis=1) 은 행마다 최댓값 위치라 [1, 0] (D 참). 임계값 비교 후 astype(int) 는 [1, 0, 1] (E 참). 정확도는 0.5 이며 0.25 가 아니다 (F 거짓). ⚠️ 함정: F — "0.25" → "0.5"이면 참.

> 출처 메모: 자료에 없음/제외: argmax/astype

<details><summary>English</summary>

**Q.** yp = np.array([1, 0, 2, 2]) and yt = np.array([1, 1, 2, 0]). Which statements are true?

- **A.** (yp == yt).mean() == 0.5
- **B.** (yp == yt).sum() == 2
- **C.** np.count_nonzero(yp != yt) == 2
- **D.** np.argmax(np.array([[.1, .7, .2], [.5, .3, .2]]), axis=1) equals [1, 0]
- **E.** (np.array([.7, .2, .5]) >= .5).astype(int) equals [1, 0, 1]
- **F.** The accuracy is 0.25.

**Answer: A, B, C, D, E**

**Explanation** — Two of the four match, so the ratio is 0.5 (A true), the sum is 2 (B true) and the number of mistakes is 2 (C true). argmax(axis=1) gives the position of the maximum in each row: [1, 0] (D true). A threshold comparison followed by astype(int) gives [1, 0, 1] (E true). The accuracy is 0.5, not 0.25 (F false). ⚠️ Trap: F — "0.25" → "0.5" would make it TRUE.

</details>

---

## NP-22 · 원-핫 레이블 만들기 (np.eye + fancy 인덱싱) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** np.eye(3)[np.array([0, 2, 1])] 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** 결과의 shape 은 (3, 3) 이다.
- **B.** 두 번째 행은 [0, 0, 1] 이다.
- **C.** .argmax(axis=1) 은 다시 [0, 2, 1] 을 준다.
- **D.** .sum(axis=0) 은 [1, 1, 1] 이다.
- **E.** 결과는 np.eye(3) 의 뷰(view)다.

**정답: A, B, C, D**

**해설** — 3개 인덱스로 3×3 단위행렬의 행을 뽑으므로 (3,3) (A 참). 두 번째 행은 인덱스 2 의 행 [0,0,1] (B 참). argmax 로 되돌리면 [0,2,1] (C 참). 열별 합은 [1,1,1] (D 참). fancy 인덱싱은 복사본을 만든다 (E 거짓). ⚠️ 함정: E — "뷰" → "복사본"이면 참.

> 출처 메모: 자료에 없음/제외: np.eye 원-핫

<details><summary>English</summary>

**Q.** Which statements are true about np.eye(3)[np.array([0, 2, 1])]?

- **A.** The result has shape (3, 3).
- **B.** The second row is [0, 0, 1].
- **C.** .argmax(axis=1) gives back [0, 2, 1].
- **D.** .sum(axis=0) equals [1, 1, 1].
- **E.** The result is a view of np.eye(3).

**Answer: A, B, C, D**

**Explanation** — Picking 3 rows of the 3×3 identity gives (3,3) (A true). The second row is the row with index 2: [0,0,1] (B true). argmax recovers [0,2,1] (C true). The column sums are [1,1,1] (D true). Fancy indexing returns a copy (E false). ⚠️ Trap: E — "a view" → "a copy" would make it TRUE.

</details>

---

## NP-23 · NumPy 로 교차엔트로피 계산 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** Y = np.array([[0, 1], [1, 0]]) (원-핫), P = np.array([[.2, .8], [.5, .5]]) 일 때 옳은 것을 모두 고르시오.

- **A.** -np.sum(Y \* np.log(P)) / 2 는 약 0.46 이다.
- **B.** (Y \* np.log(P)).shape == (2, 2) 다.
- **C.** Y @ np.log(P) 는 Y \* np.log(P) 와 같은 값을 준다.
- **D.** np.sum(Y \* np.log(P), axis=1).shape == (2,) 다.
- **E.** 손실에는 정답 클래스의 로그확률만 기여한다.

**정답: A, B, D, E**

**해설** — −(ln0.8 + ln0.5)/2 = (0.223 + 0.693)/2 = 0.458 (A 참). 원소별 곱이므로 (2,2) (B 참). @ 는 행렬곱이라 완전히 다른 값이 나온다 (C 거짓). 행별로 합치면 (2,) (D 참). 원-핫이므로 1인 위치(=정답 클래스)의 로그확률만 더해진다 (E 참). ⚠️ 함정: C — "Y @ log(P)" → "Y \* log(P)"이면 참.

> 출처 메모: 자료에 없음/제외: NumPy 교차엔트로피 코드 (수식만 강의에 있음)

<details><summary>English</summary>

**Q.** Y = np.array([[0, 1], [1, 0]]) (one-hot), P = np.array([[.2, .8], [.5, .5]]). Which statements are true?

- **A.** -np.sum(Y \* np.log(P)) / 2 ≈ 0.46
- **B.** (Y \* np.log(P)).shape == (2, 2)
- **C.** Y @ np.log(P) gives the same as Y \* np.log(P).
- **D.** np.sum(Y \* np.log(P), axis=1).shape == (2,)
- **E.** Only the log-probabilities of the true classes contribute to the loss.

**Answer: A, B, D, E**

**Explanation** — −(ln0.8 + ln0.5)/2 = (0.223 + 0.693)/2 = 0.458 (A true). The product is element-wise, so the shape is (2,2) (B true). @ is a matrix product and gives completely different values (C false). Summing per row gives (2,) (D true). Because of the one-hot encoding, only the log-probability at the true class (where Y = 1) is added (E true). ⚠️ Trap: C — "Y @ log(P)" → "Y \* log(P)" would make it TRUE.

</details>

---

## NP-24 · NumPy 로 소프트맥스 계산 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** Z = np.array([[1., 1., 1.], [0., 0., np.log(2)]]), e = np.exp(Z), P = e / e.sum(axis=1, keepdims=True) 일 때 옳은 것을 모두 고르시오.

- **A.** P[0] 은 [1/3, 1/3, 1/3] 이다.
- **B.** P[1] 은 [0.25, 0.25, 0.5] 다.
- **C.** e / e.sum(axis=1) 는 ValueError 를 낸다.
- **D.** np.exp 전에 행의 최댓값을 빼도 P 는 변하지 않는다.
- **E.** e.sum(axis=1, keepdims=True).shape == (2, 1) 이다.
- **F.** P.sum(axis=0) 은 [1, 1, 1] 이다.

**정답: A, B, C, D, E**

**해설** — 첫 행은 exp(1) 이 모두 같아 [1/3,1/3,1/3] (A 참). 둘째 행은 [1,1,2]/4 = [0.25,0.25,0.5] (B 참). (2,3) 을 (2,) 로 나누려 하면 브로드캐스팅이 안 되어 ValueError (C 참). 소프트맥스는 상수 이동에 불변이라 최댓값을 빼도 같다 (D 참). keepdims=True 로 (2,1) (E 참). 행의 합이 1 이며 열의 합은 1 이 아니다 (F 거짓). ⚠️ 함정: F — "열의 합" → "행의 합"이면 참.

> 출처 메모: 자료에 없음/제외: NumPy 소프트맥스 코드

<details><summary>English</summary>

**Q.** Z = np.array([[1., 1., 1.], [0., 0., np.log(2)]]), e = np.exp(Z), P = e / e.sum(axis=1, keepdims=True). Which statements are true?

- **A.** P[0] equals [1/3, 1/3, 1/3].
- **B.** P[1] equals [0.25, 0.25, 0.5].
- **C.** e / e.sum(axis=1) raises a ValueError.
- **D.** Subtracting the row maximum before np.exp does not change P.
- **E.** e.sum(axis=1, keepdims=True).shape == (2, 1)
- **F.** P.sum(axis=0) equals [1, 1, 1].

**Answer: A, B, C, D, E**

**Explanation** — In the first row exp(1) is the same everywhere, so [1/3,1/3,1/3] (A true). The second row is [1,1,2]/4 = [0.25,0.25,0.5] (B true). Dividing a (2,3) by a (2,) does not broadcast and raises a ValueError (C true). Softmax is invariant to a constant shift, so subtracting the row max changes nothing (D true). keepdims=True gives (2,1) (E true). The rows sum to 1, not the columns (F false). ⚠️ Trap: F — "the columns" → "the rows" would make it TRUE.

</details>

---

## NP-25 · NumPy 로 MLP 한 층 계산 · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** X 의 shape 은 (4, 3), W 의 shape 은 (3, 2), b 의 shape 은 (2,) 일 때 옳은 것을 모두 고르시오.

- **A.** (X @ W + b).shape == (4, 2)
- **B.** X @ W.T 는 ValueError 를 낸다.
- **C.** np.maximum(0, X @ W + b) 는 ReLU 를 원소별로 적용하며 shape 은 (4, 2) 다.
- **D.** X @ W + b[:, None] 도 동작하고 shape 은 (4, 2) 다.
- **E.** np.dot(W.T, X.T).shape == (2, 4) 다.
- **F.** 이 층의 파라미터는 8개다.

**정답: A, B, C, E, F**

**해설** — (4,3)@(3,2) = (4,2) 이고 b (2,) 가 브로드캐스팅된다 (A 참). W.T 는 (2,3) 이라 (4,3)@(2,3) 은 안쪽 차원이 맞지 않아 오류 (B 참). np.maximum 은 원소별 ReLU 로 shape 유지 (C 참). b[:, None] 은 (2,1) 이고 (4,2)+(2,1) 은 마지막에서 두 번째 차원 4 대 2 가 맞지 않아 오류 (D 거짓). (2,3)@(3,4) = (2,4) (E 참). 파라미터는 3·2 + 2 = 8 (F 참). ⚠️ 함정: D — "b[:, None]" → "b"이면 참.

> 출처 메모: 자료에 없음/제외: np.maximum / NumPy MLP 층 코드

<details><summary>English</summary>

**Q.** X has shape (4, 3), W has shape (3, 2), b has shape (2,). Which statements are true?

- **A.** (X @ W + b).shape == (4, 2)
- **B.** X @ W.T raises a ValueError.
- **C.** np.maximum(0, X @ W + b) applies a ReLU elementwise and has shape (4, 2).
- **D.** X @ W + b[:, None] works and has shape (4, 2).
- **E.** np.dot(W.T, X.T).shape == (2, 4)
- **F.** This layer has 8 parameters.

**Answer: A, B, C, E, F**

**Explanation** — (4,3)@(3,2) = (4,2) and b (2,) broadcasts (A true). W.T is (2,3), so (4,3)@(2,3) has mismatching inner dimensions (B true). np.maximum is an elementwise ReLU and keeps the shape (C true). b[:, None] is (2,1), and (4,2)+(2,1) mismatches the second-to-last axis 4 vs 2 (D false). (2,3)@(3,4) = (2,4) (E true). The parameters are 3·2 + 2 = 8 (F true). ⚠️ Trap: D — "b[:, None]" → "b" would make it TRUE.

</details>

---

## NP-26 · reshape 의 -1 사용 · 티어 C (우선순위 낮음) · 1️⃣ DOCX (시험 범위)

**Q.** r = np.arange(12) 일 때 옳은 것을 모두 고르시오.

- **A.** r.reshape(3, -1).shape == (3, 4)
- **B.** r.reshape(-1, 6).shape == (2, 6)
- **C.** r.reshape(5, -1) 는 ValueError 를 낸다.
- **D.** r.reshape(-1).shape == (12,)
- **E.** r.reshape(2, 2, -1).shape == (2, 2, 3)
- **F.** r.reshape(-1, -1) 도 동작한다.

**정답: A, B, C, D, E**

**해설** — 12/3 = 4 (A 참). 12/6 = 2 (B 참). 12 는 5 로 나누어떨어지지 않아 오류 (C 참). -1 만 쓰면 1차원 (12,) (D 참). 12/(2·2) = 3 (E 참). -1 은 한 번만 쓸 수 있다 (F 거짓). ⚠️ 함정: F — "-1을 두 번" → "한 번만"이면 참.

<details><summary>English</summary>

**Q.** r = np.arange(12). Which statements are true?

- **A.** r.reshape(3, -1).shape == (3, 4)
- **B.** r.reshape(-1, 6).shape == (2, 6)
- **C.** r.reshape(5, -1) raises a ValueError.
- **D.** r.reshape(-1).shape == (12,)
- **E.** r.reshape(2, 2, -1).shape == (2, 2, 3)
- **F.** r.reshape(-1, -1) works.

**Answer: A, B, C, D, E**

**Explanation** — 12/3 = 4 (A true). 12/6 = 2 (B true). 12 is not divisible by 5 (C true). With only -1 you get the 1-D shape (12,) (D true). 12/(2·2) = 3 (E true). -1 may be used only once (F false). ⚠️ Trap: F — "-1 twice" → "-1 once" would make it TRUE.

</details>

---

## NP-27 · 더미 열 x₀ = 1 붙이기 (concatenate / hstack) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** Xd 의 shape 이 (7, 3) 일 때 옳은 것을 모두 고르시오.

- **A.** np.concatenate([np.ones((7, 1)), Xd], axis=1).shape == (7, 4)
- **B.** np.hstack([np.ones((7, 1)), Xd]).shape == (7, 4)
- **C.** np.concatenate([np.ones(7), Xd], axis=1) 는 ValueError(또는 AxisError) 를 낸다 (1차원 vs 2차원).
- **D.** np.ones((7, 1)) + Xd 는 모든 원소에 1을 더하고 shape (7, 3) 을 유지한다.
- **E.** 1로 채운 열은 편향 θ₀ 에 대응한다.
- **F.** np.concatenate([np.ones((7, 1)), Xd], axis=0) 도 동작한다.

**정답: A, B, C, D, E**

**해설** — 열 방향으로 붙이면 (7,4) (A 참). hstack 도 같은 결과 (B 참). 1차원 np.ones(7) 과 2차원 Xd 를 axis=1 로 붙이려 하면 오류 (C 참). (7,1)+(7,3) 은 브로드캐스팅되어 (7,3) (D 참). 1 열은 x₀ = 1 이며 θ₀ 와 곱해진다 (E 참). axis=0 은 행 방향인데 나머지 차원 1 과 3 이 맞지 않아 오류 (F 거짓). ⚠️ 함정: F — "axis=0" → "axis=1"이면 참.

> 출처 메모: 자료에 없음/제외: concatenate/hstack

<details><summary>English</summary>

**Q.** Xd has shape (7, 3). Which statements are true?

- **A.** np.concatenate([np.ones((7, 1)), Xd], axis=1).shape == (7, 4)
- **B.** np.hstack([np.ones((7, 1)), Xd]).shape == (7, 4)
- **C.** np.concatenate([np.ones(7), Xd], axis=1) raises a ValueError (1D vs 2D).
- **D.** np.ones((7, 1)) + Xd adds 1 to every element and keeps shape (7, 3).
- **E.** The column of ones corresponds to the bias θ₀.
- **F.** np.concatenate([np.ones((7, 1)), Xd], axis=0) works.

**Answer: A, B, C, D, E**

**Explanation** — Concatenating along the columns gives (7,4) (A true). hstack does the same (B true). Joining a 1-D np.ones(7) with a 2-D Xd along axis=1 raises an error (C true). (7,1)+(7,3) broadcasts to (7,3) (D true). The column of ones is x₀ = 1 and multiplies θ₀ (E true). axis=0 is the row direction, where the remaining dimensions 1 and 3 do not match (F false). ⚠️ Trap: F — "axis=0" → "axis=1" would make it TRUE.

</details>

---

## NP-28 · dtype 과 나눗셈 (/, //) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** NumPy 의 dtype 과 나눗셈 연산자 (/, //) 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** np.array([1, 2, 3]) / 2 는 [0.5, 1., 1.5] 다.
- **B.** np.array([1, 2.5]).dtype 은 실수형(float)이다.
- **C.** (np.array([.7, .2]) >= .5).dtype 은 bool 이다.
- **D.** np.array([True, False, True]).sum() == 2
- **E.** np.array([1, 2, 3]) // 2 는 [0.5, 1., 1.5] 다.

**정답: A, B, C, D**

**해설** — / 는 실수 나눗셈이라 [0.5,1.,1.5] (A 참). 2.5 가 섞이면 dtype 이 float (B 참). 비교 결과는 bool (C 참). True 는 1, False 는 0 이라 합은 2 (D 참). // 는 정수 나눗셈이라 [0, 1, 1] (E 거짓). ⚠️ 함정: E — "//" → "/"이면 참.

> 출처 메모: 자료에 없음/제외: dtype 연산(/, //)

<details><summary>English</summary>

**Q.** Which statements about NumPy dtypes and the division operators (/ and //) are true?

- **A.** np.array([1, 2, 3]) / 2 equals [0.5, 1., 1.5]
- **B.** np.array([1, 2.5]).dtype is a float type.
- **C.** (np.array([.7, .2]) >= .5).dtype is bool.
- **D.** np.array([True, False, True]).sum() == 2
- **E.** np.array([1, 2, 3]) // 2 equals [0.5, 1., 1.5]

**Answer: A, B, C, D**

**Explanation** — / is true division, so [0.5, 1., 1.5] (A true). A mixed literal makes the dtype float (B true). A comparison yields bool (C true). True counts as 1 and False as 0, so the sum is 2 (D true). // is floor division and gives [0, 1, 1] (E false). ⚠️ Trap: E — "//" → "/" would make it TRUE.

</details>

---

## NP-29 · 제자리 연산과 별칭 (theta -= lr \* gradient) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** NumPy 의 제자리(in-place) 연산과 별칭(alias) 에 관한 설명 중 옳은 것을 모두 고르시오.

- **A.** th = np.zeros(2); t2 = th; th -= 1 → t2 는 [-1., -1.] 이 된다.
- **B.** th = np.zeros(2); t2 = th; th = th - 1 → t2 는 [0., 0.] 을 유지한다.
- **C.** th -= 1 과 th = th - 1 은 항상 완전히 같게 동작한다.
- **D.** self.theta -= self.lr \* gradient 는 배열을 제자리에서 갱신한다.
- **E.** t2 = th.copy(); th -= 1 → t2 는 바뀌지 않는다.

**정답: A, B, D, E**

**해설** — -= 는 같은 객체를 고치므로 별칭 t2 도 바뀐다 (A 참). th = th - 1 은 새 배열을 만들어 이름만 바꾼다 (B 참). 그래서 둘은 별칭이 있을 때 다르게 동작한다 (C 거짓). self.theta -= … 는 제자리 갱신 (D 참). copy() 로 만든 배열은 영향을 받지 않는다 (E 참). ⚠️ 함정: C — "항상 같다" → "별칭이 있으면 다르다"이면 참.

> 출처 메모: 자료에 없음/제외: 제자리 연산(-=)·.copy

<details><summary>English</summary>

**Q.** Which statements about in-place operations and aliases in NumPy are true?

- **A.** th = np.zeros(2); t2 = th; th -= 1 → t2 becomes [-1., -1.].
- **B.** th = np.zeros(2); t2 = th; th = th - 1 → t2 stays [0., 0.].
- **C.** th -= 1 and th = th - 1 always behave the same.
- **D.** self.theta -= self.lr \* gradient updates the array in place.
- **E.** t2 = th.copy(); th -= 1 does not change t2.

**Answer: A, B, D, E**

**Explanation** — -= modifies the same object, so the alias t2 changes too (A true). th = th - 1 creates a new array and only rebinds the name (B true). That is why the two differ when aliases exist (C false). self.theta -= … is an in-place update (D true). A copy() is unaffected (E true). ⚠️ Trap: C — "always the same" → "differ when aliases exist" would make it TRUE.

</details>

---

## NP-30 · 뷰와 복사본 (마스크 대입·슬라이스·fancy) · 티어 C (우선순위 낮음) · 3️⃣ 참고 (자료에 없음)

**Q.** q = np.arange(6) 일 때 옳은 것을 모두 고르시오.

- **A.** q[q > 2] = 0 처럼 마스크로 '대입'하면 q 가 실제로 바뀐다.
- **B.** f = q[q > 2]; f[:] = 0 처럼 마스크로 '읽은' 배열을 고치면 q 는 바뀌지 않는다.
- **C.** s = q[::2]; s[0] = 9 로 q 가 바뀐다.
- **D.** c = q.copy(); c[0] = 9 로 q 는 바뀌지 않는다.
- **E.** q[[0, 1]] 은 뷰를 돌려준다.

**정답: A, B, C, D**

**해설** — 마스크를 인덱스로 쓰는 대입(q[mask] = 값)은 원본을 바꾼다 (A 참). 마스크로 읽으면 복사본이라 그것을 고쳐도 원본은 그대로 (B 참). 기본 슬라이스 q[::2] 는 뷰라 원본이 바뀐다 (C 참). copy() 는 독립적 (D 참). fancy 인덱싱 q[[0,1]] 은 복사본이다 (E 거짓). ⚠️ 함정: E — "뷰" → "복사본"이면 참.

> 출처 메모: 자료에 없음/제외: 마스크 대입·.copy

<details><summary>English</summary>

**Q.** q = np.arange(6). Which statements are true?

- **A.** After q[q > 2] = 0, q is modified.
- **B.** After f = q[q > 2]; f[:] = 0, q is NOT modified.
- **C.** After s = q[::2]; s[0] = 9, q is modified.
- **D.** After c = q.copy(); c[0] = 9, q is NOT modified.
- **E.** q[[0, 1]] returns a view.

**Answer: A, B, C, D**

**Explanation** — Assigning through a mask (q[mask] = value) modifies the original (A true). Reading with a mask returns a copy, so editing it leaves the original untouched (B true). The basic slice q[::2] is a view, so the original changes (C true). copy() is independent (D true). Fancy indexing q[[0,1]] returns a copy (E false). ⚠️ Trap: E — "a view" → "a copy" would make it TRUE.

</details>

---

# 부록 — 모의고사 31세트 구성

| # | 세트 | 문항 수 | 시간 | 통과 | 문항 id |
|---|---|---|---|---|---|
| 1 | 모의고사 1 | 15 | 45분 | 7.0 | `N-13` ~ `L4-08` |
| 2 | 모의고사 2 | 15 | 45분 | 7.0 | `L2-08` ~ `N-17` |
| 3 | 모의고사 3 | 15 | 45분 | 7.0 | `L4-15` ~ `N-01` |
| 4 | 모의고사 4 | 15 | 45분 | 7.0 | `N-25` ~ `N-11` |
| 5 | 모의고사 5 | 15 | 45분 | 7.0 | `L1-12` ~ `L5-09` |
| 6 | 모의고사 6 | 15 | 45분 | 7.0 | `L3-13` ~ `N-10` |
| 7 | 모의고사 7 | 15 | 45분 | 7.0 | `N-29` ~ `N-17` |
| 8 | 모의고사 8 | 15 | 45분 | 7.0 | `L5-04` ~ `N-03` |
| 9 | 모의고사 9 | 15 | 45분 | 7.0 | `N-24` ~ `L3-03` |
| 10 | 모의고사 10 | 15 | 45분 | 7.0 | `N-11` ~ `L4-07` |
| 11 | 추가 세트 1 | 15 | 45분 | 7.0 | `N-06` ~ `N-21` |
| 12 | 추가 세트 2 | 15 | 45분 | 7.0 | `L7-15` ~ `L3-01` |
| 13 | 추가 세트 3 | 15 | 45분 | 7.0 | `L1-10` ~ `L3-01` |
| 14 | 연습 세트 1 | 15 | 45분 | 7.0 | `S1-12` ~ `S2-31` |
| 15 | 연습 세트 2 | 15 | 45분 | 7.0 | `S2-16` ~ `S1-29` |
| 16 | 연습 세트 3 | 15 | 45분 | 7.0 | `S1-07` ~ `S2-34` |
| 17 | 연습 세트 4 | 15 | 45분 | 7.0 | `S1-06` ~ `S2-01` |
| 18 | 연습 세트 5 | 15 | 45분 | 7.0 | `S1-28` ~ `S2-09` |
| 19 | 연습 세트 6 | 15 | 45분 | 7.0 | `S2-40` ~ `S1-16` |
| 20 | 연습 세트 7 | 15 | 45분 | 7.0 | `S1-27` ~ `S2-30` |
| 21 | 최종 모의고사 | 15 | 45분 | 7.0 | `M-01` ~ `M-15` |
| 22 | 최종 모의고사 2 (공식·계산) | 15 | 45분 | 7.0 | `M2-01` ~ `M2-15` |
| 23 | 📄 교수님 DOCX 예시 전체 (49문항) | 49 | 147분 | 23 | `D-01` ~ `D-49` |
| 24 | 🧮 NumPy 집중 (26문항) | 26 | 52분 | 12 | `NP-01` ~ `NP-30` |
| 25 | 1 DOCX (시험 범위) (149문항) | 149 | 298분 | 70 | `D-01` ~ `S2-40` |
| 26 | 2A 강의 L1–6 (101문항) | 101 | 202분 | 47 | `L1-03` ~ `S2-25` |
| 27 | 2B Lecture 7 (23문항) | 23 | 46분 | 11 | `L7-01` ~ `S2-30` |
| 28 | 3 참고 (자료에 없음) (44문항) | 44 | 88분 | 21 | `L4-06` ~ `S2-39` |
| 29 | ⭐ 티어 A (DOCX 그대로) (49문항) | 49 | 98분 | 23 | `D-01` ~ `D-49` |
| 30 | 티어 B (강조된 슬라이드) (47문항) | 47 | 94분 | 22 | `L1-03` ~ `S1-21` |
| 31 | ⭐ 티어 A+B (96문항) (96문항) | 96 | 192분 | 45 | `D-01` ~ `S1-21` |

- 실전 1~13 = 실제 시험 형식(15문항·45분·통과 7점) · 연습 14~20 = 같은 형식의 연습 세트
- 최종 세트 = `M-*`(전 범위) · `M2-*`(공식·계산) · `D-*`(교수님 DOCX 49문항) · `NP-*`(NumPy 집중) · ⭐(NumPy 핵심) · 📘(강의 슬라이드)
