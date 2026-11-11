# What will the professor most likely ask? — Shortlist from Groups 1 and 2A

This is a ranking, not a prediction I can guarantee. I only know the professor's DOCX, the 7 lecture PDFs, and the course information slide. The ranking uses three pieces of evidence:

1. **The DOCX** lists the topics the questions will be about (it says the list is not exhaustive).
2. **Lecture 4, slide 106 ("Summary")** says what *may* be included: *identifying and handling under- and overfitting, hyperparameters, the validation set, and the artificial neuron (perceptron) model*. Excluded: polynomial regression, polynomial interpolation, the biological neuron.
3. **Lecture 1, slide 5** shows there is also a **Theory test 2** (10 points). That is a hint that later material (Lecture 7: metrics, dropout, CNN) is meant for test 2, but this is my inference, not something the slides state.

**Real test:** 15 questions = about 9 theory + 6 NumPy. Pass = 7/15.

## How the 9 theory questions are probably built

The DOCX bullets fall into about 11 clusters. With 9 theory questions, expect several clusters to be merged. Likely slots:

| Slot | Cluster | Your practice questions |
|---|---|---|
| 1 | Hypothesis function, label format, data point, loss function | D-01 – D-04 |
| 2 | Supervised/unsupervised tasks, goals, reinforcement learning feedback | D-05 – D-08 |
| 3 | Linear regression (cholesterol example): params, shapes of X/θ/y, y=θ₄x₄+…+θ₀, geometry | D-09 – D-13 |
| 4 | Regularized normal equation (image 1): shapes, I matrix, λ | D-14, D-15 |
| 5 | Gradient descent guarantee (global optimum) and feature scaling | D-16 – D-18 |
| 6 | Logistic regression (blood-test example): params, shapes, range of y, what we minimize | D-19 – D-22 |
| 7 | Loss function J(Θ) (image 2) and similar losses | D-23, D-24 |
| 8 | MLP hypothesis (image 3): parameter counts, g₁/g₂, regression/binary/multi-class | D-25 – D-28 |
| 9 | Overfitting changes, early stopping, loss curves, parameters vs hyperparameters | D-29 – D-32 |
| 10 | SGD and batch size | D-33 – D-35 |
| 11 | Backpropagation nodes (square, addition) | D-36, D-37 |

---

# TIER A — Do these first (49 questions: the exact DOCX bullets)

These are the closest to the professor's own wording. If you can get all of these right, you are ready for the large majority of the test.

| ID | Topic |
|---|---|
| D-01 | 가설함수의 입력과 출력 |
| D-02 | 레이블의 형태(스칼라·벡터) |
| D-03 | 데이터 포인트의 구성요소 |
| D-04 | 손실함수의 역할과 값의 형태 |
| D-05 | 강화학습의 피드백 특성 |
| D-06 | 지도학습에 속하는 과제 |
| D-07 | 각 과제의 목표 |
| D-08 | 선형·로지스틱 회귀의 과제와 학습 유형 |
| D-09 | 콜레스테롤 예측 과제: 모델·파라미터·손실 선택 |
| D-10 | y = Xθ 의 각 행렬 shape |
| D-11 | 학습에서 최소화하는 대상 |
| D-12 | 스칼라 가설 y = θ₄x₄ + … + θ₀ |
| D-13 | 선형 회귀 가설함수의 기하학적 해석 |
| D-14 | 정규화된 정규방정식의 차원 |
| D-15 | 정규방정식에서 λ와 I의 역할 |
| D-16 | 경사하강법의 전역 최적 보장 여부 |
| D-17 | 특징 스케일링의 목적과 효과 |
| D-18 | 특징 스케일링 공식의 기호 |
| D-19 | 질병 분류 과제: 모델과 손실 선택 |
| D-20 | y = g(Xθ), g = 시그모이드의 shape과 범위 |
| D-21 | y = g(Xθ) 학습에서 최소화하는 대상 |
| D-22 | 스칼라 시그모이드 가설의 성질 |
| D-23 | MSE 손실 J(Θ) = 1/(2m) Σ (ŷ − y)² 의 구성요소 |
| D-24 | 여러 손실함수의 용도 |
| D-25 | 회귀 MLP(20→10→1)의 파라미터와 활성함수 |
| D-26 | 이진 분류 MLP(20→10→1)의 설정 |
| D-27 | 다중 클래스 MLP(20→10→5)의 shape과 파라미터 |
| D-28 | 활성함수의 모양과 출력 범위 |
| D-29 | 과대적합을 더 심하게 만드는 변화 |
| D-30 | 조기 종료의 기준과 시점 |
| D-31 | 훈련 손실 감소 + 검증 손실 증가의 해석 |
| D-32 | 파라미터와 하이퍼파라미터의 구분 |
| D-33 | SGD와 미니배치의 정의 |
| D-34 | 배치 크기를 늘리면 생기는 변화 |
| D-35 | 배치 크기를 줄이면 생기는 변화 |
| D-36 | 제곱 노드의 그래디언트 |
| D-37 | 덧셈 노드의 그래디언트 |
| D-38 | ndarray 의 shape / dtype / size |
| D-39 | ndarray 의 size 와 ndim |
| D-40 | (32, 5) 배열의 슬라이싱 shape |
| D-41 | 정수 인덱싱이 차원을 제거하는지 |
| D-42 | 브로드캐스팅 오류 판별 |
| D-43 | 연산 결과의 shape (전치·브로드캐스팅) |
| D-44 | axis 방향과 반환형 |
| D-45 | reshape(2,-1) 배열의 마스킹과 shape |
| D-46 | 뷰(view)인 경우: my_array 가 바뀐다 |
| D-47 | 복사본(copy)인 경우: my_array 가 안 바뀐다 |
| D-48 | 불리언 집계 (count_nonzero, any, all) |
| D-49 | unique / bincount / 정렬 / argsort |

---

# TIER B — Likely: lecture content the professor stressed (47 questions)

All are from slides that are NOT marked ✗. The *Evidence* column says why I think the professor may use it.

## B-1. Theory (40)

| ID | Topic | Slides | Evidence |
|---|---|---|---|
| L1-03 | 머신러닝이 필요한 이유 / 부적합한 과제 | L1 s16–24 | Professor lists when NOT to use ML (sorting, lossless compression) |
| L1-07 | AI의 핵심 질문: 일반화·설명가능성·안전성 | L1 s78–87 | "Key questions of AI": generalization, explainability, adversarial attacks |
| L1-10 | 용어 동의어와 AI 내성 분야 | L1 s91 | Synonym slide (example = data point, parameters = weights, loss = cost) |
| L1-11 | 입력 차원의 크기(초상화 예시) | L1 s36–37 | Portrait example: 196,608 input variables |
| L2-01 | 선형 회귀와 최소제곱법 | L2 s21–25 | Least-squares loss definition |
| L2-04 | 경사하강법의 동작 | L2 s62–69 | Gradient descent: subtract the gradient, learning rate α |
| L2-07 | 최적 파라미터를 찾는 단순한 접근들 | L2 s27–37 | Grid search and "check the neighbors" – why they fail |
| L3-05 | 로지스틱 회귀와 시그모이드 | L3 s66–68 | Sigmoid and logistic regression |
| L3-06 | 로지스틱 회귀의 손실함수(BCE) | L3 s79, s83 | MSE is not convex for logistic regression → BCE |
| L3-08 | 결정경계의 기하학적 형태 | L3 s58–60 | Decision boundary (h = 0.5) |
| L3-09 | 분류를 선형 회귀로 풀 때의 문제 | L3 s45–65 | Classification with linear regression: ordering problem + outlier counterexample |
| L3-11 | 선형 회귀 vs 로지스틱 회귀 비교 | L3 s99–100 | Linear vs logistic regression comparison |
| L3-17 | 로지스틱 회귀의 정리와 주의점 | L3 s99–100 | "Don't get confused" slide: logistic regression cannot solve arbitrary regression |
| L4-02 | 과대적합의 대응 기법 | L4 s64–78 | Overfitting remedies: simpler model, more data, L2, early stopping |
| L4-07 | 데이터셋 분할(훈련/검증/테스트) | L4 s44–45, s86–87 | Train/validation/test split; test set must not be used for learning |
| L4-08 | 하이퍼파라미터와 그 최적화 | L4 s88–91, L5 s11 | Hyperparameters and how they are chosen |
| L4-09 | 모델 학습 절차(하이퍼파라미터 + 파라미터) | L4 s90, L5 s13 | Model training procedure (Ψ, θ, validation, test) |
| L4-11 | 인공 뉴런 모델(퍼셉트론) | L4 s99–106 | Artificial neuron (perceptron) — slide s106 says it MAY be on the test |
| L4-13 | 과소적합/과대적합의 정의 | L4 s61–63 | Underfitting / overfitting definitions |
| L4-14 | 분류에서의 과대적합 | L4 s56 | Over/underfitting in classification |
| L4-16 | 손실 곡선 패턴 해석 | L4 s49–51 | Loss-curve patterns (700/700, 400/400, 250/800) |
| L4-17 | L2 정규화의 강도와 효과 | L4 s69–77 | L2 regularization (λ) |
| L5-01 | 단일 뉴런의 한계와 MLP의 표현력 | L5 s29–37, s74–75 | Single neuron limits, AND/OR with 2 layers, MLP expressive power |
| L5-05 | 다중 레이블 회귀와 다중 클래스 분류 | L5 s81–98 | Multi-label regression + multi-class classification setup |
| L5-09 | MNIST 데이터셋과 입력 차원 | L5 s87–89 | MNIST: 784 inputs, 10 classes, 60k/10k |
| L5-10 | 소프트맥스 함수 | L5 s93–95 | Softmax |
| L5-11 | 교차엔트로피와 one-hot 레이블 | L5 s96–98 | Cross-entropy with one-hot labels |
| L5-13 | NumPy와 PyTorch 비교 | L5 s16–20 | NumPy vs PyTorch (unmarked slides) |
| L5-14 | 뉴런 조합과 논리함수(XOR 문제) | L5 s30–37 | Logic functions (AND/OR) with neurons / XOR |
| L5-16 | 다중 클래스 분류의 출력과 예측 | L5 s92–98 | Multi-class output and prediction |
| L6-03 | 역전파 알고리즘의 6단계 | L6 s76 (and L7 s16) | The 6 steps of backpropagation |
| L6-04 | 역전파의 순전파/역전파 대입 | L6 s59–73 | Forward / backward substitution steps |
| L6-05 | 연쇄법칙과 중간 변수 | L6 s22–31 | Chain rule and intermediate variables |
| L6-06 | 계산 그래프의 미분 최소화 | L6 s42–49 | Computational graph: only elementary derivatives needed |
| L6-07 | 학습 반복의 종료 조건 | L6 s76 | Stop after N iterations OR early stopping |
| L6-08 | PyTorch 텐서의 속성 | L6 s77–83 | PyTorch tensor attributes (numel, shape, dtype, itemsize, requires_grad…) |
| L6-09 | PyTorch 텐서의 장점 | L6 s78–83 | Tensors vs NumPy arrays: GPU, graphs, autograd, lazy execution |
| L6-11 | 계산 그래프 예시(선형 회귀 MSE) | L6 s49 | Computational graph of linear-regression MSE |
| M2-08 | 시그모이드의 도함수 계산 | L6 s24–31 | Derivative of the sigmoid (lecture example) — numbers are mine |
| S1-21 | 역전파의 원리(계산 그래프·연쇄법칙) | L6 s42–49 | Backprop principles |

## B-2. NumPy (7)

| ID | Topic | Slides | Note |
|---|---|---|---|
| NP-11 | 강의 코드: y_pred = np.dot(X, theta) | L3 s31, L4 s7 | y_pred = np.dot(X, theta) |
| NP-12 | 강의 코드: theta = np.matmul(np.linalg.pinv(X), y) (정규방정식) | L4 s21 | theta = np.matmul(np.linalg.pinv(X), y) |
| NP-13 | 강의 코드: 1 / (1 + np.exp(-z) + eps) 시그모이드 | L5 s17–18 | Sigmoid code 1/(1+np.exp(-z)+eps) |
| NP-14 | 강의 코드: 이진 교차엔트로피 손실과 브로드캐스팅 함정 | L5 s19–20 | BCE loss code with np.mean/np.log |
| N-15 | reshape(-1,-1), newaxis, np.dot | DOCX + L3-L5 | [:, None], [None, :] (DOCX) + np.dot (lecture); ⚠ reshape(-1,-1) is extra |
| N-16 | reshape / transpose / 행렬곱 | DOCX + L3-L5 | reshape/.T (DOCX) + matrix product |
| NP-17 | 텐서/배열 속성 (dtype·itemsize·nbytes) | L6 s77–83 | array/tensor attributes (⚠ nbytes is extra) |

---

# TIER C — Lower priority (the other 154 questions of Groups 1 and 2A)

- **Same topics as Tier A, only rephrased or with other numbers (99 questions).** Do these only if you want more practice on the same DOCX clusters. Examples: L1-xx, L3-01…, S1-xx, M-xx, N-01…N-09, S1-26…S1-29.
- **Other lecture content (55 questions)**, such as L2-02, L2-03, L2-05, L2-08, L2-09, L2-12, L3-10 to L3-15, L4-04, L4-10, L4-15, L5-15, L6-01, L6-10, L6-12, L6-13, and the numeric practice questions M2-02 to M2-09 (the numbers are mine, not the professor's).
- **Outside the 250:** Lecture 7 (23 questions, probably for Theory test 2)
- **Outside the 250:** Group 3 (44 questions, extra study only)

## Full list of Tier C

**Same topics as Tier A (rephrased):** L1-01, L1-02, L1-04, L1-05, L1-06, L1-08, S1-01, S2-01, M-02, L2-06, L2-10, L2-11, S1-09, L3-01, L3-02, L3-03, L3-04, L3-07, L3-16, L3-18, S1-03, S1-04, M-01, M-03, M-07, L4-01, L4-03, L4-05, S1-05, S1-06, S1-08, S1-13, S1-14, S2-03, M-05, M-06, M2-01, L5-02, L5-03, L5-04, L5-06, L5-07, L5-08, L5-12, L5-17, L5-18, S1-10, S1-19, S2-11, S2-12, S2-13, S2-24, M-04, M-08, M2-06, L6-02, M-09, N-01, N-02, N-03, N-04, N-05, N-06, N-07, N-08, N-09, N-11, N-12, N-13, N-14, N-17, N-18, N-20, N-25, N-27, S1-26, S1-27, S1-28, S1-29, S2-31, S2-36, S2-37, S2-38, S2-40, M-10, M-11, M-12, M-13, M-14, M-15, M2-10, NP-01, NP-02, NP-04, NP-05, NP-07, NP-08, NP-20, NP-26

**Other lecture content (Group 2A):** L1-09, L1-12, S1-02, S2-02, L2-02, L2-03, L2-05, L2-08, L2-09, L2-12, S2-09, M2-02, M2-03, M2-07, L3-10, L3-12, L3-13, L3-14, L3-15, S1-07, S2-05, S2-07, M2-04, L4-04, L4-10, L4-15, L4-18, S1-12, S1-15, S1-16, S1-17, S1-18, S2-04, S2-15, S2-16, S2-17, S2-18, S2-19, S2-20, S2-23, L5-15, S1-11, S1-20, S2-08, S2-10, S2-14, S2-21, S2-22, M2-05, L6-01, L6-10, L6-12, L6-13, S2-25, M2-09

## Honest limits

- The professor may include statements I cannot see, since he says the DOCX list "is not exhaustive" and the NumPy questions are based on videos I do not have.
- Statements in the DOCX are short. In the real test each question has 3–6 statements, so one question can combine several bullets (for example, a bullet about shapes plus one about the loss).

