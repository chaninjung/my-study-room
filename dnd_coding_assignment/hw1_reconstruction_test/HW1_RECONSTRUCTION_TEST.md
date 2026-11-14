# DND HW1 Reconstruction Test

> HW1의 핵심 흐름을 실제로 이해했는지 확인하기 위한 연습 시험지다.  
> 공식 시험 문제가 아니며, 정답 코드와 객관식 문항은 제공하지 않는다.

## 1. 이 시험의 목적

이 시험은 HW1 notebook을 보면서 코드를 복사하는 연습이 아니다. 빈 notebook에서 다음 전체 흐름을 스스로 다시 구성할 수 있는지 확인한다.

1. noisy CSV를 NumPy 배열로 읽기
2. 결측값을 indicator와 함께 처리하기
3. 데이터를 train/validation/test로 분할하기
4. 같은 입력으로 회귀와 다중 분류용 DataLoader 만들기
5. PyTorch 회귀 모델을 학습하고 평가하기
6. PyTorch 분류 모델을 학습하고 early stopping과 confusion matrix를 적용하기

각 셀을 작성한 이유와 shape, dtype, label의 의미를 설명할 수 있어야 한다. tester를 통과하는 것만으로는 충분하지 않다.

## 2. 시험 설정

- 권장 제한 시간: 180분
- 인터넷: 사용하지 않음
- 사용 가능:
  - 본인의 HW1 solution notebook
  - 수업 슬라이드와 notebook 등 non-video 자료
  - Python, NumPy, pandas, PyTorch 및 설치된 라이브러리 문서
  - 이 폴더의 데이터와 tester
- 사용하지 않음:
  - 검색 엔진, 다른 사람의 solution, 생성형 AI
  - 시험 전에 만든 이 문제의 정답 코드
- 제출물: `hw1_reconstruction_test.ipynb`

실제 시험과 동일한 감각을 연습하려면 시험 시작 후에는 HW1 notebook을 닫고, 본인이 허용할 참고 자료만 다시 여는 방식으로 진행한다.

## 3. 시작 전 준비

### 시험 전에 한 번만 확인

- Python 환경이 준비되어 있는가?
- `requirements.txt`의 패키지가 설치되어 있는가?
- Jupyter Lab에서 새 notebook을 만들 수 있는가?
- PyTorch가 CPU에서 실행되는가?
- 데이터 파일과 tester의 위치를 알고 있는가?

### 시험 시작 직후

1. 새 notebook을 `hw1_reconstruction_test.ipynb`로 저장한다.
2. Kernel을 restart하고 처음부터 실행한다.
3. 필요한 import와 random seed를 직접 작성한다.
4. 데이터 파일의 경로는 현재 notebook 위치를 기준으로 명시한다.
5. 중간 결과를 확인하는 출력은 남기되, 불필요하게 전체 배열을 출력하지 않는다.

## 4. 구현 과제

### Part A — Dataset loading

제공된 noisy CSV 내용을 읽어 `dataset_noisy`를 만든다.

요구사항:

- header를 데이터 행으로 포함하지 않는다.
- 세미콜론(`;`) 구분 형식을 처리한다.
- 빈 필드는 `np.nan`이 된다.
- 결과는 `np.ndarray`, `np.float32`이다.
- 각 행은 하나의 sample이다.
- 행 수, 열 수, 결측값 개수와 결측 열을 확인한다.

노트북에 짧게 기록한다:

- 왜 일반적인 문자열 배열로 두면 안 되는가?
- `NaN`을 읽은 직후와 결측값 처리 후의 dtype은 무엇이어야 하는가?

### Part B — Missing values and indicators

`dataset_noisy`를 사용해 결측값이 없는 `dataset`을 만든다.

요구사항:

- 원본 열은 모두 유지한다.
- 결측 가능성이 있는 세 원본 열마다 indicator 열을 하나씩 만든다.
- 원본 값이 있으면 indicator는 `1`, 결측이면 `0`이다.
- 세 indicator는 원본 열 사이에 끼워 넣지 않고 배열의 마지막에 연속으로 추가한다.
- 결측 원본 값은 `0`으로 대체한다.
- 최종 결과는 `np.float32`이고 `NaN`을 포함하지 않는다.

다음 검사를 직접 수행한다:

- 원본 열의 값이 결측이 아닌 위치에서 바뀌지 않았는가?
- indicator의 값은 정확히 `0`과 `1`뿐인가?
- indicator의 합은 각 원본 열의 non-missing sample 수와 일치하는가?

### Part C — Data split

`dataset`을 무작위로 섞은 뒤 다음 배열을 만든다.

- `dataset_split_train`
- `dataset_split_val`
- `dataset_split_test`

요구사항:

- train/validation/test 비율은 약 50%/25%/25%이다.
- 세 배열의 열 수와 dtype은 동일하다.
- 세 split을 합치면 모든 sample이 정확히 한 번씩 들어간다.
- validation과 test sample을 training에 다시 넣지 않는다.
- 재현 가능한 결과가 필요하면 seed를 사용한다.

확인할 내용:

- 각 split의 shape
- split 전후 sample 수
- 중복 sample 여부
- split이 원본 순서를 그대로 유지하지 않는지

### Part D — Regression DataLoader

최종 성적에 해당하는 연속형 열 하나를 regression label로 정하고, 나머지 열을 input으로 사용한다.

다음 이름의 DataLoader를 만든다.

- `dataloader_reg_train`
- `dataloader_reg_val`
- `dataloader_reg_test`

요구사항:

- 각 batch는 `(inputs, labels)`이다.
- `inputs`는 `torch.float32`이고 2차원이다.
- `labels`는 `torch.float32`이고 `(batch_size, 1)` 형태이다.
- training과 validation은 shuffle한다.
- test는 shuffle하지 않는다.
- batch size는 32 또는 64 중 하나이다.
- label 열이 input에 포함되지 않는다.

첫 batch를 출력해 다음을 기록한다:

- input shape와 label shape
- input dtype과 label dtype
- input feature 수

### Part E — Regression model

`torch.nn.Module`을 상속하는 `reg_model`을 구현한다.

- Linear layer 3개
- hidden size: 25, 25
- output size: 1
- 두 hidden layer 뒤에 ReLU
- output shape: `(batch_size, 1)`

모델에 임의의 batch를 통과시켜 output shape을 확인한다. 학습 전에 trainable parameter 수와 모델 구조도 확인한다.

### Part F — Regression training and evaluation

`reg_model`을 train split으로 학습한다.

요구사항:

- loss는 mean squared error이다.
- gradient-based optimizer를 사용한다.
- epoch별 training loss와 validation loss를 저장한다.
- 두 loss curve를 하나의 plot에 그린다.
- plot에는 legend와 의미 있는 축 이름이 있다.
- `test_mse`에 test set 전체의 평균 MSE를 저장한다.
- test sample 일부의 prediction과 true label을 출력한다.

금지되는 데이터 누수:

- optimizer update에 validation 또는 test sample을 사용하지 않는다.
- test MSE를 epoch 중간의 모델 선택 기준으로 사용하지 않는다.

노트북에 짧게 기록한다:

- training loss와 validation loss를 sample 기준 평균으로 계산했는가?
- test 평가 시 `model.eval()`과 gradient 비활성화를 사용했는가?
- validation loss가 계속 낮아져도 test set을 미리 확인하지 않았는가?

### Part G — Classification labels and DataLoader

성적 열들을 input에서 제외하고, 나머지 변수로 세 등급 범주를 예측한다.

label 규칙:

- 세 성적 중 낮은 값이 둘 이상이면 낮은 성취
- 위 조건이 아니고 성적 평균이 기준값 미만이면 중간 성취
- 나머지는 높은 성취

범주를 `0`, `1`, `2`로 정하고, 다음 DataLoader를 만든다.

- `dataloader_cl_train`
- `dataloader_cl_val`
- `dataloader_cl_test`

요구사항:

- input은 `torch.float32`인 2차원 tensor이다.
- label은 `torch.int64`인 1차원 tensor이다.
- training과 validation은 shuffle한다.
- test는 shuffle하지 않는다.
- label에 사용할 성적 열이 input에 포함되지 않는다.

각 category의 sample 수와 unique label 값을 출력한다. label 규칙의 조건 순서가 바뀌면 결과가 달라질 수 있으므로, 규칙을 코드와 함께 설명한다.

### Part H — Classification model

`torch.nn.Module`을 상속하는 `cl_model`을 구현한다.

- Linear layer 3개
- hidden size: 30, 20
- output size: 3
- 두 hidden layer 뒤에 ReLU
- 마지막 layer는 raw logits를 반환한다.

`CrossEntropyLoss`를 사용할 것이므로 모델 마지막에 softmax를 넣지 않는다. 임의의 batch에 대한 output shape이 `(batch_size, 3)`인지 확인한다.

### Part I — Classification training and evaluation

`cl_model`을 학습하고 다음을 수행한다.

- cross entropy loss 사용
- epoch별 training loss와 validation loss 기록
- validation loss가 일정 epoch 동안 개선되지 않으면 early stopping
- 가장 낮은 validation loss 시점의 weight 복원
- 복원된 모델로 test 평가
- `test_ce`에 test 평균 loss 저장
- `test_acc`에 test accuracy 저장
- true category를 행, predicted category를 열로 하는 `3 x 3` confusion matrix 작성
- confusion matrix에 axis label과 count가 보이도록 plot

노트북에 짧게 기록한다:

- `argmax`가 어떤 축에서 prediction category를 선택하는가?
- early stopping의 best weight를 어떻게 저장하고 복원했는가?
- confusion matrix의 행과 열은 각각 무엇을 의미하는가?

## 5. 종료 전 체크리스트

### 실행 가능성

- [ ] Kernel Restart 후 첫 셀부터 마지막 셀까지 오류 없이 실행된다.
- [ ] 모든 필수 변수 이름이 존재한다.
- [ ] plot이 notebook 안에 남아 있다.
- [ ] 출력이 지나치게 많아 notebook을 읽기 어렵지 않다.

### 데이터와 shape

- [ ] `dataset_noisy`는 `float32`이고 결측값을 포함한다.
- [ ] `dataset`은 `float32`이고 결측값이 없다.
- [ ] indicator 세 열이 배열 마지막에 있다.
- [ ] regression label은 `(batch_size, 1)`이다.
- [ ] classification label은 1차원 `int64`이다.
- [ ] regression/classification input에 label 열이 들어 있지 않다.

### 학습과 평가

- [ ] validation은 model selection에만 사용된다.
- [ ] test는 최종 평가에서만 사용된다.
- [ ] regression output에는 classification용 softmax가 없다.
- [ ] classification output은 raw logits이다.
- [ ] best validation weight를 복원한 뒤 test를 평가한다.
- [ ] `test_mse`, `test_ce`, `test_acc`가 scalar 값으로 저장되어 있다.

## 6. 시험 후 복습 방법

1. tester를 실행해 형식과 기본 결과를 확인한다.
2. tester를 통과한 뒤에도 notebook의 각 셀을 말로 설명한다.
3. 설명하지 못한 셀은 HW1 notebook과 수업 자료를 비교한다.
4. 데이터 누수, label 포함, 잘못된 dtype, 잘못된 shape를 별도로 점검한다.
5. 같은 과정을 새 notebook에서 한 번 더 수행하되, 이번에는 HW1 notebook을 보지 않는다.

복습 기록:

- 총 소요 시간:
- 가장 오래 걸린 Part:
- 첫 실행에서 발생한 오류:
- 가장 헷갈린 shape 또는 dtype:
- tester가 잡지 못할 수 있는 논리적 문제:
- 다시 볼 수업 자료:
- 다음 재시험 날짜:

## 7. 이 시험과 실제 Coding Test의 차이

이 문서는 HW1 이해도를 확인하기 위한 학습용 시험지다. 실제 시험의 데이터, 세부 조건, 함수 이름, 모델 크기, 평가 기준이 동일하다고 가정하지 않는다. 실제 시험에서는 같은 주제가 더 작은 문제로 바뀌거나, 일부 요구사항이 달라질 수 있으므로 특정 숫자나 코드 줄을 암기하기보다 다음을 재현할 수 있어야 한다.

- 배열과 tensor의 dtype 및 shape를 설계하는 능력
- train/validation/test를 분리하고 data leakage를 피하는 능력
- PyTorch Dataset/DataLoader와 학습 loop를 연결하는 능력
- regression과 classification의 출력, loss, 평가 방법 차이
- validation 결과로 모델을 선택하고 test를 마지막에 사용하는 절차
