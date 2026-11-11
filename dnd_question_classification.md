# DND Theory Test 1 — Question Classification (317 questions)

Every question of `dnd_theory_test1_ALL_QUESTIONS.md` is placed in exactly **one** of three groups, checked against the professor's DOCX and the 7 lecture PDFs (including the red ✗ "not in the exams/tests" slides).

| Group | Meaning | Theory | NumPy | Total |
|---|---|---|---|---|
| **1 – DOCX** | The topic is a bullet of the professor's DOCX | 94 | 55 | 149 |
| **2A – Lecture (L1–L6)** | In a lecture slide that is NOT marked ✗, but not a DOCX bullet | 95 | 6 | 101 |
| **2B – Lecture 7** | In an unmarked Lecture 7 slide, but the DOCX says "Lectures 1–6" | 23 | 0 | 23 |
| **3 – Extra** | In neither (or only on a ✗ slide) → extra study only | 7 | 37 | 44 |

## How I decided

- **Unit = the whole question's topic.** If a question mixes sources, I put it where most of its statements belong and wrote the exceptions in the *Note* column (⚠ = a statement that is extra or on a ✗ slide).
- **✗ slides found (Lecture 4 slide 2 explains the mark):** L4 s29 (logistic regression NumPy code), L4 s31–43 (polynomial regression), L4 s52–53 (polynomial interpolation), L4 s95–98 and s103–105 (biological neuron), L5 s73 (SGD variants: Momentum/Adam/RMSprop…), L7 s92–95 (multi-channel convolution).
- **NumPy:** a question is Group 1 only if it uses only functions/attributes that appear in the DOCX NumPy list. Lecture code (`np.dot`, `np.matmul`, `np.linalg.pinv`, the sigmoid and BCE lines on L5 s17–20, tensor attributes) is Group 2. Anything else (`keepdims`, `np.where`, `np.eye`, `np.zeros`-as-topic, `.std`, `concatenate`, `.copy()`, `argmax`, `astype`…) or the ✗ gradient code is Group 3. If ≥40 % of a question's options need extra functions it goes to Group 3; otherwise Group 1 with a ⚠ note.
- The old ⭐/📘/➕ badges on the site were not always right (for example `np.eye` was 📘, `np.where` and `dtype` questions were ⭐). This file replaces them.

---

# GROUP 1 — Content in the DOCX

## 1-A. Theory (94)

| ID | Title | Source | Note |
|---|---|---|---|
| L1-01 | 지도학습 정의, 가설함수, 손실함수 | L1 |  |
| L1-02 | 머신러닝 3대 분류와 과제 매핑 | L1 |  |
| L1-04 | 지도학습의 구성요소와 학습 절차 | L1 | 일부 보기(학습 절차)는 강의 슬라이드 내용 |
| L1-05 | 비지도학습 과제와 압축/차원축소 | L1 | 압축(차원축소) 정식화 보기는 강의 슬라이드 내용 |
| L1-06 | 강화학습 | L1 |  |
| L1-08 | 회귀 vs 분류, 레이블 형태 | L1 |  |
| S1-01 | 지도·비지도 학습과 회귀/분류의 구분 | L1 |  |
| S2-01 | 비지도학습 과제의 종류 | L1 |  |
| M-02 | 지도·비지도·강화학습 과제 분류 | L1 |  |
| D-01 | 가설함수의 입력과 출력 | L1 |  |
| D-02 | 레이블의 형태(스칼라·벡터) | L1 |  |
| D-03 | 데이터 포인트의 구성요소 | L1 |  |
| D-04 | 손실함수의 역할과 값의 형태 | L1 |  |
| D-05 | 강화학습의 피드백 특성 | L1 |  |
| D-06 | 지도학습에 속하는 과제 | L1 |  |
| D-07 | 각 과제의 목표 | L1 |  |
| D-08 | 선형·로지스틱 회귀의 과제와 학습 유형 | L1 |  |
| L2-06 | 전역 최적해 보장 여부 | L2 |  |
| L2-10 | 손실함수 수식의 구성요소 | L2 |  |
| L2-11 | 손실함수의 성질 | L2 |  |
| S1-09 | MSE 손실함수 수식의 구성요소 | L2 |  |
| D-16 | 경사하강법의 전역 최적 보장 여부 | L2 |  |
| D-23 | MSE 손실 J(Θ) = 1/(2m) Σ (ŷ − y)² 의 구성요소 | L2 |  |
| L3-01 | 다변량 선형 회귀의 차원(Shape) | L3 |  |
| L3-02 | 다변량 선형 회귀와 벡터/행렬 표기 | L3 |  |
| L3-03 | 특징 스케일링의 필요성 | L3 |  |
| L3-04 | 특징 스케일링 공식과 기호 | L3 |  |
| L3-07 | 로지스틱 회귀의 차원과 학습 대상 | L3 |  |
| L3-16 | 손실함수 선택 | L3 | 과제-손실 짝 (DOCX: "what loss function should we use?") |
| L3-18 | 단변량 로지스틱 회귀에서 θ와 z의 형태 | L3 |  |
| S1-03 | 다변량 선형 회귀의 차원(X, θ, y) | L3 |  |
| S1-04 | 선형 회귀 선택과 손실·최적화 대상 | L3 |  |
| M-01 | 가설함수의 입력·파라미터·기하학적 해석 | L3 |  |
| M-03 | 로지스틱 회귀 설정(파라미터·차원·손실) | L3 |  |
| M-07 | 특징 스케일링의 목적과 성질 | L3 |  |
| D-09 | 콜레스테롤 예측 과제: 모델·파라미터·손실 선택 | L3 |  |
| D-10 | y = Xθ 의 각 행렬 shape | L3 |  |
| D-11 | 학습에서 최소화하는 대상 | L3 |  |
| D-12 | 스칼라 가설 y = θ₄x₄ + … + θ₀ | L3 |  |
| D-13 | 선형 회귀 가설함수의 기하학적 해석 | L3 |  |
| D-17 | 특징 스케일링의 목적과 효과 | L3 |  |
| D-18 | 특징 스케일링 공식의 기호 | L3 |  |
| D-19 | 질병 분류 과제: 모델과 손실 선택 | L3 |  |
| D-20 | y = g(Xθ), g = 시그모이드의 shape과 범위 | L3 |  |
| D-21 | y = g(Xθ) 학습에서 최소화하는 대상 | L3 |  |
| D-22 | 스칼라 시그모이드 가설의 성질 | L3 |  |
| D-24 | 여러 손실함수의 용도 | L3/L5 | BCE·CE 수식 자체는 강의 내용; DOCX가 "similar questions with other loss functions" 로 예고 |
| L4-01 | 과소적합/과대적합의 진단 | L4 | A·B(손실 곡선 패턴)는 강의 슬라이드; C·D·E가 DOCX |
| L4-03 | 조기 종료와 검증집합 | L4 | C·E는 강의 슬라이드; A·B·D가 DOCX |
| L4-05 | 정규방정식의 차원 | L4 |  |
| S1-05 | 볼록 문제와 전역 최솟값 보장 | L2/L3 | S1-05의 B(로지스틱+BCE)는 강의 내용; 선형회귀·MLP가 DOCX |
| S1-06 | 이진 분류 문제 설정(모델·차원·손실) | L2/L3 | S1-05의 B(로지스틱+BCE)는 강의 내용; 선형회귀·MLP가 DOCX |
| S1-08 | 정규화된 정규방정식 | L4 |  |
| S1-13 | 과대적합을 심하게 만드는 변화 | L4 |  |
| S1-14 | 조기 종료(early stopping) | L4 |  |
| S2-03 | 정규방정식의 차원(m=50, n=3) | L4 |  |
| M-05 | 과대적합 진단과 조기 종료·대응 | L4 |  |
| M-06 | 정규방정식의 차원(m=300, n=6) | L4 |  |
| M2-01 | 정규방정식의 차원 (m=120, n=4) | L4 |  |
| D-14 | 정규화된 정규방정식의 차원 | L4 |  |
| D-15 | 정규방정식에서 λ와 I의 역할 | L4 | λ의 역할은 강의 내용; "I 행렬이 무엇인가"는 DOCX |
| D-29 | 과대적합을 더 심하게 만드는 변화 | L4 |  |
| D-30 | 조기 종료의 기준과 시점 | L4 |  |
| D-31 | 훈련 손실 감소 + 검증 손실 증가의 해석 | L4 |  |
| D-32 | 파라미터와 하이퍼파라미터의 구분 | L4 |  |
| L5-02 | MLP 구조와 활성함수 | L5 |  |
| L5-03 | MLP 파라미터 개수 계산 | L5 |  |
| L5-04 | 배치 경사하강법과 SGD | L5 | ⚠ 보기 E(Momentum/AdaGrad/Adam/RMSprop)는 ✗ 슬라이드(L5 s73) → 시험 제외 |
| L5-06 | 파라미터 표기(Θ, W, b)와 가설함수 | L5 |  |
| L5-07 | 회귀에서의 출력 활성함수 | L5 |  |
| L5-08 | 활성함수의 종류와 출력 범위 | L5 |  |
| L5-12 | 미니배치 크기의 실무적 선택 | L5 |  |
| L5-17 | 과제별 마지막 활성함수와 손실함수 | L5 |  |
| L5-18 | MNIST MLP의 파라미터 수 계산 | L5 | 784→(100/800)→10 숫자는 사이트가 만든 예시; 주제 "파라미터 수 세기"는 DOCX |
| S1-10 | 회귀 MLP의 활성함수 선택 | L5 |  |
| S1-19 | 미니배치 SGD의 특성 | L5 |  |
| S2-11 | MLP 파라미터 수(입력 3, 은닉 2, 출력 1) | L5 |  |
| S2-12 | MNIST MLP(784→100→10) 파라미터 수 | L5 | 784→(100/800)→10 숫자는 사이트가 만든 예시; 주제 "파라미터 수 세기"는 DOCX |
| S2-13 | MLP 파라미터 수(4→8→4→3) | L5 |  |
| S2-24 | MLP 활성함수의 역할 | L5 |  |
| M-04 | MLP 파라미터 계산과 활성함수·손실 | L5 |  |
| M-08 | 파라미터 학습과 배치 크기의 영향 | L5 |  |
| M2-06 | 2층 MLP의 행렬 shape과 파라미터 수 | L5 |  |
| D-25 | 회귀 MLP(20→10→1)의 파라미터와 활성함수 | L5 |  |
| D-26 | 이진 분류 MLP(20→10→1)의 설정 | L5 |  |
| D-27 | 다중 클래스 MLP(20→10→5)의 shape과 파라미터 | L5 |  |
| D-28 | 활성함수의 모양과 출력 범위 | L5 |  |
| D-33 | SGD와 미니배치의 정의 | L5 |  |
| D-34 | 배치 크기를 늘리면 생기는 변화 | L5 |  |
| D-35 | 배치 크기를 줄이면 생기는 변화 | L5 |  |
| L6-02 | 게이트별 그래디언트 계산 | L6 | 곱셈 노드(D·E)는 강의 내용; 제곱·덧셈 노드가 DOCX |
| M-09 | 계산 그래프 노드별 그래디언트 계산 | L6 | 곱셈 노드(D·E)는 강의 내용; 제곱·덧셈 노드가 DOCX |
| D-36 | 제곱 노드의 그래디언트 | L6 |  |
| D-37 | 덧셈 노드의 그래디언트 | L6 |  |

## 1-B. NumPy (55)

| ID | Title | Source | Note |
|---|---|---|---|
| N-01 | shape / dtype / size / ndim 의 자료형 | NumPy |  |
| N-02 | 배열 속성과 슬라이싱 shape | NumPy | np.zeros 는 배열을 만들기 위해서만 사용 |
| N-03 | 인덱싱 방식에 따른 차원 유지/제거 | NumPy |  |
| N-04 | 슬라이싱 결과 shape 계산 | NumPy |  |
| N-05 | 브로드캐스팅 규칙 | NumPy | np.ones 는 배열을 만들기 위해서만 사용 |
| N-06 | 브로드캐스팅 결과 shape 계산 | NumPy |  |
| N-07 | 브로드캐스팅 규칙의 세부사항 | NumPy | 보기 E(복사 여부) 설명은 DOCX 밖 |
| N-08 | 연산 결과의 shape | NumPy |  |
| N-09 | 집계 함수의 axis와 반환형 | NumPy |  |
| N-11 | 뷰(View)와 복사본(Copy) | NumPy | ⚠ 보기 E: .copy() 는 자료에 없음 |
| N-12 | 뷰/복사 심화 (역순, 전치, append) | NumPy | ⚠ 보기 A: arr[::-1] 뷰는 DOCX에 없음 (np.sort(..)[::-1]만 있음) |
| N-13 | 불리언 마스킹과 평탄화 | NumPy | ⚠ 보기 D: np.where 는 자료에 없음 |
| N-14 | 3차원 배열의 axis 집계 | NumPy | 보기 D: axis=-1 (음수 axis)은 자료에 없음 |
| N-17 | reshape(2, -1) 배열의 연산 | NumPy |  |
| N-18 | 불리언 집계 (count_nonzero, any, all) | NumPy |  |
| N-20 | 고유값/빈도/정렬 (unique, bincount, sort, argsort) | NumPy |  |
| N-25 | 인덱싱 방식별 복사/뷰 특성 | NumPy |  |
| N-27 | 비교 연산과 논리 연산자 | NumPy | \| 와 ~ 는 & 의 형제 연산자 (DOCX엔 & 만) |
| S1-26 | 브로드캐스팅 오류 판별 (a + b) | NumPy |  |
| S1-27 | 뷰(view) 인 경우: x 가 수정됨 | NumPy |  |
| S1-28 | 복사본(copy) 인 경우: x 가 수정되지 않음 | NumPy |  |
| S1-29 | 브로드캐스팅 오류 판별 (shape 조합) | NumPy |  |
| S2-31 | 브로드캐스팅 ValueError 판별 | NumPy | np.zeros 는 배열을 만들기 위해서만 사용 |
| S2-36 | 뷰와 복사본 판별(X 수정 여부) | NumPy | ⚠ 보기 C: .flatten() 은 자료에 없음 |
| S2-37 | 논리 연산과 불리언 인덱싱 | NumPy | ~ 와 and 보기 포함 (& 는 DOCX) |
| S2-38 | 손실 계산의 조용한 브로드캐스팅 버그 | NumPy | (m,)-(m,1) 버그는 DOCX 개념(None 인덱싱·브로드캐스팅)의 응용 |
| S2-40 | newaxis와 외적(outer product) | NumPy |  |
| M-10 | 슬라이싱·정수배열·newaxis 의 shape | NumPy |  |
| M-11 | 브로드캐스팅 오류 판별(여러 shape) | NumPy |  |
| M-12 | reshape(3,-1) 배열의 집계와 마스킹 | NumPy |  |
| M-13 | 뷰와 복사본 판별(my_array 수정 여부) | NumPy | ⚠ 보기 E: .flatten() 은 자료에 없음 |
| M-14 | unique / bincount / 불리언 집계 | NumPy |  |
| M-15 | 브로드캐스팅·집계·행렬곱의 shape | NumPy | ⚠ 보기 E: keepdims, F: @ 는 DOCX에 없음 |
| M2-10 | MSE와 np.mean(d)\*\*2 함정 | NumPy | ⚠ 보기 F: np.argmax/np.abs 는 자료에 없음 |
| D-38 | ndarray 의 shape / dtype / size | NumPy |  |
| D-39 | ndarray 의 size 와 ndim | NumPy |  |
| D-40 | (32, 5) 배열의 슬라이싱 shape | NumPy |  |
| D-41 | 정수 인덱싱이 차원을 제거하는지 | NumPy |  |
| D-42 | 브로드캐스팅 오류 판별 | NumPy |  |
| D-43 | 연산 결과의 shape (전치·브로드캐스팅) | NumPy |  |
| D-44 | axis 방향과 반환형 | NumPy |  |
| D-45 | reshape(2,-1) 배열의 마스킹과 shape | NumPy |  |
| D-46 | 뷰(view)인 경우: my_array 가 바뀐다 | NumPy |  |
| D-47 | 복사본(copy)인 경우: my_array 가 안 바뀐다 | NumPy |  |
| D-48 | 불리언 집계 (count_nonzero, any, all) | NumPy |  |
| D-49 | unique / bincount / 정렬 / argsort | NumPy |  |
| NP-01 | ndarray 속성 (shape·size·ndim·dtype) | NumPy |  |
| NP-02 | (32, 5) 배열의 슬라이싱 shape | NumPy |  |
| NP-04 | 연산 결과의 shape (전치·집계·브로드캐스팅) | NumPy |  |
| NP-05 | 집계의 반환형과 keepdims | NumPy | ⚠ 보기 D: keepdims 는 자료에 없음 |
| NP-07 | 뷰(view)인 경우: my_array 가 바뀐다 | NumPy |  |
| NP-08 | 복사본(copy)인 경우: my_array 가 안 바뀐다 | NumPy |  |
| NP-17 | 텐서/배열 속성 (dtype·itemsize·nbytes) | NumPy | itemsize 는 L6 텐서 슬라이드; ⚠ nbytes 는 자료에 없음 |
| NP-20 | 불리언 마스크 연산자 (& · \\| · ~) | NumPy | \| 와 ~ 는 & 의 형제 연산자 (DOCX엔 & 만) |
| NP-26 | reshape 의 -1 사용 | NumPy |  |

---

# GROUP 2 — Content in the lectures (not marked ✗, not a DOCX bullet)

## 2A-1. Theory, Lectures 1–6 (95)

| ID | Title | Source | Note |
|---|---|---|---|
| L1-03 | 머신러닝이 필요한 이유 / 부적합한 과제 | L1 |  |
| L1-07 | AI의 핵심 질문: 일반화·설명가능성·안전성 | L1 |  |
| L1-09 | 지도학습의 응용과 한계 | L1 |  |
| L1-10 | 용어 동의어와 AI 내성 분야 | L1 |  |
| L1-11 | 입력 차원의 크기(초상화 예시) | L1 |  |
| L1-12 | 비지도학습 응용: 표본 생성과 LLM | L1 |  |
| S1-02 | 설명가능성과 안전성(적대적 예제·배경 학습) | L1 |  |
| S2-02 | 지도학습의 목표와 2단계 절차 | L1 |  |
| L2-01 | 선형 회귀와 최소제곱법 | L2 |  |
| L2-02 | 편향 파라미터와 볼록성 | L2 |  |
| L2-03 | 도함수의 정의와 미분 | L2 |  |
| L2-04 | 경사하강법의 동작 | L2 |  |
| L2-05 | 편향(절편) 파라미터의 역할 | L2 |  |
| L2-07 | 최적 파라미터를 찾는 단순한 접근들 | L2 |  |
| L2-08 | 경사하강법 계산 예시(도시 인구 → 자동차 수) | L2 |  |
| L2-09 | 학습된 선형 회귀 모델의 사용 | L2 |  |
| L2-12 | 학습 과정의 관찰과 수렴 | L2 |  |
| S2-09 | 선형 회귀·경사하강법의 성질 | L2 |  |
| M2-02 | MSE 손실값과 그래디언트 수치 계산 | L2 |  |
| M2-03 | 다중 출력 MSE (1/(2mk) 정규화) | L5 | 다중 출력 MSE(1/(2mk)) — DOCX는 "other loss functions"만 언급 |
| M2-07 | 경사하강법 갱신 수치 계산 | L2 |  |
| L3-05 | 로지스틱 회귀와 시그모이드 | L3 |  |
| L3-06 | 로지스틱 회귀의 손실함수(BCE) | L3 |  |
| L3-08 | 결정경계의 기하학적 형태 | L3 |  |
| L3-09 | 분류를 선형 회귀로 풀 때의 문제 | L3 |  |
| L3-10 | 로지스틱 회귀의 그래디언트 | L3/L4 | 수식은 L3 s85-86; Xᵀ(h−y)/m 코드 형태는 ✗ 슬라이드(L4 s29) |
| L3-11 | 선형 회귀 vs 로지스틱 회귀 비교 | L3 |  |
| L3-12 | 다변량 로지스틱 회귀 | L3 |  |
| L3-13 | 로지스틱 회귀 학습 결과의 해석 | L3 |  |
| L3-14 | 이진 분류에서의 확률 추정 | L3 |  |
| L3-15 | 다변량 경사하강법 | L3 |  |
| L3-17 | 로지스틱 회귀의 정리와 주의점 | L3 |  |
| S1-07 | 분류를 선형 회귀로 풀 때의 문제 | L3 |  |
| S2-05 | BCE를 쓰는 이유(MSE의 비볼록성) | L3 |  |
| S2-07 | 특징 스케일링 수치 계산 | L3 |  |
| M2-04 | 이진 교차엔트로피(BCE) 수치 계산 | L3 |  |
| L4-02 | 과대적합의 대응 기법 | L4 |  |
| L4-04 | 정규방정식 | L4 |  |
| L4-07 | 데이터셋 분할(훈련/검증/테스트) | L4 |  |
| L4-08 | 하이퍼파라미터와 그 최적화 | L4 |  |
| L4-09 | 모델 학습 절차(하이퍼파라미터 + 파라미터) | L4 |  |
| L4-10 | 교차검증 | L4 |  |
| L4-11 | 인공 뉴런 모델(퍼셉트론) | L4 | 인공 뉴런=로지스틱 회귀(포함). 보기 A의 생물학적 뉴런 언급은 ✗ 슬라이드 맥락 |
| L4-13 | 과소적합/과대적합의 정의 | L4 |  |
| L4-14 | 분류에서의 과대적합 | L4 |  |
| L4-15 | 심층 신경망에서의 과대적합 | L4 |  |
| L4-16 | 손실 곡선 패턴 해석 | L4 |  |
| L4-17 | L2 정규화의 강도와 효과 | L4 |  |
| L4-18 | 시험 범위: 포함/제외 (교수님 명시) | L4 | 교수님이 슬라이드에 적은 "시험 포함/제외" 안내 자체 |
| S1-12 | L2 정규화의 효과 | L4 |  |
| S1-15 | 손실값으로 과소/과대적합 진단 | L4 |  |
| S1-16 | 과대적합을 줄이는 방법 | L4/L7 | 보기 D(드롭아웃)는 Lecture 7 내용 |
| S1-17 | 데이터 분할(훈련/검증/테스트) | L4 |  |
| S1-18 | 하이퍼파라미터 식별 | L4 |  |
| S2-04 | 정규방정식·유사역행렬의 안정성 | L4 |  |
| S2-15 | L2 정규화 수식과 효과 | L4 |  |
| S2-16 | 과대적합 진단과 대응(훈련 0.05 / 검증 0.60) | L4 |  |
| S2-17 | 과소적합 진단(훈련 0.90 / 검증 0.95) | L4 |  |
| S2-18 | 검증집합과 테스트집합의 역할 | L4 |  |
| S2-19 | 하이퍼파라미터 탐색 방법 | L4 |  |
| S2-20 | 하이퍼파라미터를 포함한 학습 절차 | L4 |  |
| S2-23 | 인공 뉴런(퍼셉트론)의 성질 | L4 | ⚠ 보기 D(헤비사이드 단계함수)는 ✗ 슬라이드(L4 s103-105) 내용 |
| L5-01 | 단일 뉴런의 한계와 MLP의 표현력 | L5 |  |
| L5-05 | 다중 레이블 회귀와 다중 클래스 분류 | L5 |  |
| L5-09 | MNIST 데이터셋과 입력 차원 | L5 |  |
| L5-10 | 소프트맥스 함수 | L5 |  |
| L5-11 | 교차엔트로피와 one-hot 레이블 | L5 |  |
| L5-13 | NumPy와 PyTorch 비교 | L5 |  |
| L5-14 | 뉴런 조합과 논리함수(XOR 문제) | L5 |  |
| L5-15 | MLP 학습과 자동 미분 | L5 |  |
| L5-16 | 다중 클래스 분류의 출력과 예측 | L5 |  |
| S1-11 | 소프트맥스의 성질과 갱신 규칙 | L5 |  |
| S1-20 | MLP 층 구성과 과제별 출력 | L5 |  |
| S2-08 | 다중 클래스를 정수 회귀로 푸는 문제 | L5 |  |
| S2-10 | 다중 클래스 교차엔트로피 수치 계산 | L5 |  |
| S2-14 | 소프트맥스 수치 계산 | L5 |  |
| S2-21 | 에폭·스텝 계산과 최적화 알고리즘 | L5 | ⚠ 보기 E(Adam/RMSprop)는 ✗ 슬라이드(L5 s73); 에폭/스텝 계산은 강의 내용 |
| S2-22 | 단일 뉴런의 한계와 XOR 문제 | L5 |  |
| M2-05 | 다중 클래스 교차엔트로피 수치 계산 | L5 |  |
| M2-08 | 시그모이드의 도함수 계산 | L6 | 시그모이드 도함수 (L6 연쇄법칙 예제) |
| L6-01 | 계산 그래프와 역전파 | L6 |  |
| L6-03 | 역전파 알고리즘의 6단계 | L6 |  |
| L6-04 | 역전파의 순전파/역전파 대입 | L6 |  |
| L6-05 | 연쇄법칙과 중간 변수 | L6 |  |
| L6-06 | 계산 그래프의 미분 최소화 | L6 |  |
| L6-07 | 학습 반복의 종료 조건 | L6 |  |
| L6-08 | PyTorch 텐서의 속성 | L6 |  |
| L6-09 | PyTorch 텐서의 장점 | L6 |  |
| L6-10 | 역전파가 필요한 이유 | L6 |  |
| L6-11 | 계산 그래프 예시(선형 회귀 MSE) | L6 |  |
| L6-12 | 그래디언트와 파라미터 갱신 | L6 |  |
| L6-13 | 역전파의 계산 순서와 규칙 | L6 | 보기 C(여러 경로의 그래디언트를 더함)는 슬라이드에 없음 |
| S1-21 | 역전파의 원리(계산 그래프·연쇄법칙) | L6 |  |
| S2-25 | 역전파 알고리즘의 절차 | L6 |  |
| M2-09 | 역전파 그래디언트 수치 계산 | L6 |  |

## 2A-2. NumPy / lecture code (6)

| ID | Title | Source | Note |
|---|---|---|---|
| N-15 | reshape(-1,-1), newaxis, np.dot | NumPy/L3-L5 | np.dot 은 강의 코드; ⚠ 보기 A: reshape(-1,-1) 은 자료에 없음; [:,None]·[None,:] 은 DOCX |
| N-16 | reshape / transpose / 행렬곱 | NumPy/L3-L5 | 행렬곱(@)은 강의의 np.dot/np.matmul 수준; reshape/.T 는 DOCX |
| NP-11 | 강의 코드: y_pred = np.dot(X, theta) | L3 s31 · L4 s7 | y_pred = np.dot(X, theta) |
| NP-12 | 강의 코드: theta = np.matmul(np.linalg.pinv(X), y) (정규방정식) | L4 s21 | theta = np.matmul(np.linalg.pinv(X), y) |
| NP-13 | 강의 코드: 1 / (1 + np.exp(-z) + eps) 시그모이드 | L5 s17-18 | 시그모이드 코드 (eps 는 분모에) |
| NP-14 | 강의 코드: 이진 교차엔트로피 손실과 브로드캐스팅 함정 | L5 s19-20 | BCE 손실 코드; 브로드캐스팅 함정은 추가 내용 |

## 2B. Lecture 7 (23)

> Lecture 7 is not ✗-marked (except s92–95), but the DOCX scope says *Example questions related to Lectures 1 – 6*. Study after Groups 1 and 2A.

| ID | Title | Source | Note |
|---|---|---|---|
| L7-01 | 성능 평가 지표 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-02 | 합성곱 신경망(CNN)의 구조 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-03 | 혼동행렬과 균형 지표 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-04 | 모델 성능 측정 방법 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-05 | 불균형 데이터에서의 지표 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-06 | 2차원 합성곱(convolution) | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-07 | 합성곱 층에서 학습되는 파라미터 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-10 | 풀링(pooling) 층 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-11 | LeNet-5 구조 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-12 | 합성곱 신경망의 계층적 패턴 인식 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-13 | 1차원 합성곱과 응용 분야 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-14 | 이동 불변성과 이동 등변성 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-15 | ImageNet과 MLP의 한계 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-16 | 데이터 증강(data augmentation) | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-17 | 노이즈 추가와 과대적합 완화 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| L7-18 | 드롭아웃(dropout) | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| S1-22 | 정밀도·재현율·혼동행렬 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| S1-23 | 노이즈·드롭아웃·데이터 증강 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| S1-24 | CNN의 필터·풀링·채널 | L7 | Lecture 7. ⚠ 보기 D(P→Q 다채널)는 ✗ 슬라이드(L7 s92-95) |
| S2-27 | 다중 클래스 균형 지표 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| S2-28 | 데이터 증강의 적절성 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| S2-29 | 합성곱·풀링 크기 계산 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |
| S2-30 | CNN과 MLP의 비교 | L7 | Lecture 7: ✗ 아님. 단 DOCX는 "Lectures 1–6" 범위로 명시 |

---

# GROUP 3 — Not in the DOCX or the exam-eligible slides (extra study)

## 3-A. Theory (7)

| ID | Title | Source | Note |
|---|---|---|---|
| S2-06 | 경사하강법 NumPy 구현의 차원 | L4 | ✗ 슬라이드(L4 s29): 로지스틱 회귀 NumPy 그래디언트 코드 |
| L4-06 | 다항식 회귀 | L4 | ✗ 슬라이드(L4 s31-43): 다항식 회귀 — 시험 제외 |
| L4-12 | 생물학적 뉴런과 인공 뉴런의 차이 | L4 | ✗ 슬라이드(L4 s95-98, s103-105): 생물학적 vs 인공 뉴런 — 시험 제외 |
| S2-26 | PyTorch 코드의 의미 | - | nn.Sequential / Linear 가중치 shape 은 어떤 자료에도 없음 (BCELoss만 L5) |
| L7-08 | 합성곱 층의 채널(channel) | L7 | ✗ 슬라이드(L7 s92-95): 다채널 합성곱(P→Q 채널, 편향/파라미터 수) |
| L7-09 | 다채널 합성곱(P → Q 채널) | L7 | ✗ 슬라이드(L7 s92-95): 다채널 합성곱(P→Q 채널, 편향/파라미터 수) |
| S1-25 | 합성곱 층 파라미터 수 계산 | L7 | ✗ 슬라이드(L7 s92-95): 다채널 합성곱(P→Q 채널, 편향/파라미터 수) |

## 3-B. NumPy (37)

| ID | Title | Source | Note |
|---|---|---|---|
| N-10 | keepdims 파라미터 | NumPy | 자료에 없음/제외: keepdims |
| N-19 | 빈 배열에서의 any / all | NumPy | 자료에 없음/제외: 빈 배열의 any/all 동작 |
| N-21 | bincount 제약과 정렬 함수의 동작 | NumPy | 자료에 없음/제외: bincount 제약·arr.sort()·return_counts |
| N-22 | NaN 처리 | NumPy | 자료에 없음/제외: NaN 처리(nanmean/isnan) |
| N-23 | 브로드캐스팅을 이용한 스케일링 | NumPy | 자료에 없음/제외: min/max/keepdims 스케일링 구현 |
| N-24 | searchsorted | NumPy | 자료에 없음/제외: searchsorted |
| N-26 | 배열 생성 함수 | NumPy | 자료에 없음/제외: np.zeros/np.ones/arange(step) |
| N-28 | argmax / argmin | NumPy | 자료에 없음/제외: argmax/argmin |
| N-29 | 인덱싱을 이용한 값 수정 | NumPy | 자료에 없음/제외: 인덱스/마스크 값 대입 |
| N-30 | one-hot 인코딩 구현 | NumPy | 자료에 없음/제외: np.eye(원-핫) |
| N-31 | 다중 클래스 정확도 계산 | NumPy | 자료에 없음/제외: argmax 정확도 |
| N-32 | 히스토그램 직접 구현 | NumPy | 자료에 없음/제외: histogram/searchsorted |
| N-33 | 이상치 탐지와 조건부 통계 | NumPy | 자료에 없음/제외: abs/std 이상치 통계 |
| N-34 | 정수 배열 인덱싱으로 이미지 복원 | NumPy | 자료에 없음/제외: 정수 배열 인덱싱(팔레트) |
| S2-32 | np.where와 불리언 마스킹 | NumPy | 자료에 없음/제외: np.where |
| S2-33 | dtype과 연산 결과 | NumPy | 자료에 없음/제외: dtype 연산(/, //, astype) |
| S2-34 | 배열 생성 함수(arange/linspace/reshape) | NumPy | 자료에 없음/제외: linspace/np.ones |
| S2-35 | concatenate / stack / append | NumPy | 자료에 없음/제외: concatenate/stack |
| S2-39 | NumPy로 소프트맥스 구현(axis/keepdims) | NumPy | 자료에 없음/제외: 소프트맥스 keepdims (코드는 자료에 없음) |
| M2-11 | 정규방정식의 NumPy 구현 | NumPy | 자료에 없음/제외: np.linalg.inv/np.eye (강의는 pinv) |
| M2-12 | 로지스틱 회귀의 그래디언트 계산 | NumPy | 자료에 없음/제외: ✗ L4 s29 계열: Xᵀ(h−y) 그래디언트 코드 |
| M2-13 | 특징 스케일링 수치 계산(std/axis) | NumPy | 자료에 없음/제외: std/min/max 스케일링 |
| M2-14 | 소프트맥스 keepdims 함정 | NumPy | 자료에 없음/제외: 소프트맥스 keepdims |
| M2-15 | 선형 회귀의 한 스텝(그래디언트·손실) | NumPy | 자료에 없음/제외: ✗ L4 s29 계열: 그래디언트 코드·np.zeros |
| NP-15 | 강의 코드: gradient = np.dot(X.T, (h - y)) / y.size; theta -= lr \* gradient | NumPy | 자료에 없음/제외: ✗ 슬라이드(L4 s29): gradient = np.dot(X.T,(h-y))/y.size; theta -= lr*gradient |
| NP-16 | 로지스틱 회귀 한 스텝 계산 | NumPy | 자료에 없음/제외: ✗ L4 s29 계열: 로지스틱 한 스텝 |
| NP-18 | NumPy 로 표준화 (특징 스케일링) | NumPy | 자료에 없음/제외: .std 표준화 |
| NP-19 | 이상치와 스케일링 수치 | NumPy | 자료에 없음/제외: .std/.min/.max |
| NP-21 | NumPy 로 정확도와 예측 계산 | NumPy | 자료에 없음/제외: argmax/astype |
| NP-22 | 원-핫 레이블 만들기 (np.eye + fancy 인덱싱) | NumPy | 자료에 없음/제외: np.eye 원-핫 |
| NP-23 | NumPy 로 교차엔트로피 계산 | NumPy | 자료에 없음/제외: NumPy 교차엔트로피 코드 (수식만 강의에 있음) |
| NP-24 | NumPy 로 소프트맥스 계산 | NumPy | 자료에 없음/제외: NumPy 소프트맥스 코드 |
| NP-25 | NumPy 로 MLP 한 층 계산 | NumPy | 자료에 없음/제외: np.maximum / NumPy MLP 층 코드 |
| NP-27 | 더미 열 x₀ = 1 붙이기 (concatenate / hstack) | NumPy | 자료에 없음/제외: concatenate/hstack |
| NP-28 | dtype 과 나눗셈 (/, //) | NumPy | 자료에 없음/제외: dtype 연산(/, //) |
| NP-29 | 제자리 연산과 별칭 (theta -= lr \* gradient) | NumPy | 자료에 없음/제외: 제자리 연산(-=)·.copy |
| NP-30 | 뷰와 복사본 (마스크 대입·슬라이스·fancy) | NumPy | 자료에 없음/제외: 마스크 대입·.copy |
