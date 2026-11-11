# Deep Network Development – Theory Test 1 – MOCK EXAM

**Set up exactly like the real test:**
- 15 questions (9 theory + 6 NumPy). About 6 of 15 are NumPy in the real test.
- Time: **45 minutes**. No notes, no code running, no calculator.
- Each question has 3–6 statements. **At least one is true.** Select ALL true statements.
- Scoring: all correct = 1 point. Exactly one mistake = 0.5 points. Two or more mistakes = 0 points.
  (Wrongly selecting a statement and missing a true one count as two mistakes.)
- **Pass: 7 / 15.**

> Important: I cannot know the real questions. This exam follows the professor's example list very closely (topics, wording, and style), so it is my best guess.
> Do NOT look at the answer key before you finish. Write your answers like `Q1: A, B, D`.

---

## PART 1 – Theory (Lectures 1–6)

### Q1
We want to predict the cholesterol level of patients from their weight, age, height, and sex. The hypothesis is y = θ₄x₄ + θ₃x₃ + θ₂x₂ + θ₁x₁ + θ₀, where y is a scalar. Which statements are true?
- A. θ₀ is a scalar.
- B. The age of a patient is assigned to one of the xᵢ values.
- C. The age of a patient is assigned to one of the θᵢ values.
- D. The value of y can be any real number.
- E. With 2 input variables (3D plot), the hypothesis function is a plane.
- F. With 1 input variable (2D plot), the hypothesis function is a parabola.

### Q2
Which statements are true?
- A. Regression and classification are supervised learning tasks.
- B. Clustering needs labeled data.
- C. Dimensionality reduction and denoising can be solved without labels.
- D. In reinforcement learning, the environment gives a reward (possibly negative), often sparse, not the correct label.
- E. Linear regression is an unsupervised method.

### Q3
We want to distinguish ill from healthy persons using 3 laboratory values. The training set has 150 patients, and each has a label (ill or healthy). We use logistic regression ŷ = g(Xθ) with the dummy column x₀ = 1. Which statements are true?
- A. Logistic regression is more suitable than linear regression here.
- B. The model has 4 parameters.
- C. X is 150×4.
- D. The estimate ŷ is between 0 and 1.
- E. MSE is the best choice of loss function.

### Q4
An MLP solves a binary classification task with 12 input variables, 5 neurons in the first layer, and 1 output neuron. Which statements are true?
- A. The first layer has 65 parameters.
- B. The whole network has 71 parameters.
- C. g₂ should be a sigmoid.
- D. g₁ (the first activation) can be omitted without a loss in expressive power.
- E. The loss function should be binary cross-entropy.

### Q5
During training, the validation loss keeps increasing while the training loss keeps decreasing. Which statements are true?
- A. This is a sign of overfitting.
- B. According to early stopping, we should stop around the minimum of the validation loss.
- C. Obtaining more training data tends to reduce overfitting.
- D. Decreasing the number of test examples makes overfitting more severe.
- E. Increasing the number of parameters tends to make overfitting more severe.

### Q6
We use linear regression with MSE and the regularized normal equation θ = (XᵀX + λI)⁻¹Xᵀy. There are m = 300 patients and n = 6 input variables (with the dummy column x₀ = 1). Which statements are true?
- A. X is 300×7.
- B. y is 300×1.
- C. θ has 7 elements.
- D. I is 300×300.
- E. I is 7×7.
- F. The cholesterol levels are in y.

### Q7
Feature scaling. Which statements are true?
- A. Its purpose is to bring the input variables to the same order of magnitude.
- B. Without it, gradient descent may converge more slowly.
- C. Min-max scaling is more robust to outliers than standardization.
- D. In x′ = (x − μ)/σ, μ is the mean and σ is the standard deviation.
- E. Standardized values are always in [0, 1].

### Q8
Training neural networks. Which statements are true?
- A. The parameters (weights) are usually trained with a gradient-descent-based algorithm.
- B. The hyperparameters are usually not trained with gradient descent.
- C. A larger batch size in mini-batch SGD needs more memory.
- D. A smaller batch size gives a noisier gradient estimate.
- E. A larger batch size gives a higher-variance gradient estimate.

### Q9
Backpropagation. The computational graph of J contains these nodes. Which statements are true?
- A. Node c = b², with b = −2 and grad_c = 3: grad_b = −12.
- B. Node c = b², with b = −2 and grad_c = 3: grad_b = 12.
- C. Node c = a + b, with grad_c = 3: grad_a = grad_b = 3.
- D. Node c = a·b, with a = 2, b = 5, and grad_c = 3: grad_a = 15.
- E. Node c = a·b, with a = 2, b = 5, and grad_c = 3: grad_b = 6.

---

## PART 2 – NumPy

### Q10
`my_array` is a numpy.ndarray with shape (32, 5). Which statements are true?
- A. `my_array[:, 2:4].shape == (32, 2)`
- B. `my_array[-1].shape == (1, 5)`
- C. `my_array[::2, :].shape == (16, 5)`
- D. `my_array[[3], [1]].shape == (1,)`
- E. `my_array[:, [0, 0, 1]].shape == (32, 3)`
- F. `my_array[None, :, :].shape == (1, 32, 5)`

### Q11
`a` has shape (32, 5), `b5` has shape (5,), `c` has shape (32, 1), and `d` has shape (1, 32). Which expressions raise "ValueError: operands could not be broadcast together"?
- A. `a + b5`
- B. `a * c`
- C. `a + d`
- D. `a - a.mean(axis=0)`
- E. `a - a.mean(axis=1)`

### Q12
`my_array = np.arange(6).reshape(3, -1)`. Which statements are true?
- A. `my_array.shape == (3, 2)`
- B. `my_array.sum(axis=0)` equals `[6, 9]`
- C. `my_array[my_array % 2 == 1]` equals `[1, 3, 5]`
- D. `(my_array > 2).sum(axis=1)` equals `[0, 1, 2]`
- E. `np.all(my_array >= 0, axis=0)` equals `[True, True]`
- F. `np.any(my_array > 4)` is False.

### Q13
`my_array = np.arange(6).reshape(2, 3)`. Then `my_array2` is created in one of the ways below, and we run `my_array2[:] = 99`. In which cases will the elements of `my_array` be affected?
- A. `my_array2 = my_array.T`
- B. `my_array2 = my_array[0]`
- C. `my_array2 = my_array[:, 1:]`
- D. `my_array2 = my_array[:, [0, 2]]`
- E. `my_array2 = my_array.flatten()`
- F. `my_array2 = my_array + 0`

### Q14
`v = np.array([2, 0, 2, 1, 0, 2])`. Which statements are true?
- A. `np.unique(v)` equals `[0, 1, 2]`
- B. `np.bincount(v)` equals `[2, 1, 3]`
- C. `np.count_nonzero(v == 2) == 3`
- D. `v[v != 0]` equals `[2, 1, 2]`
- E. `np.unique(v != 0)` equals `[False, True]`
- F. `np.bincount(v)` has length 2.

### Q15
`my_array = np.ones((4, 3))` and `my_array2 = np.ones(3)`. Which statements are true?
- A. `(my_array + my_array2).shape == (4, 3)`
- B. `(my_array[:, None, :] + my_array2).shape == (4, 1, 3)`
- C. `(my_array[:, None, :] + my_array[None, :, :]).shape == (4, 4, 3)`
- D. `np.sum(my_array, axis=1).shape == (3,)`
- E. `np.mean(my_array, axis=0, keepdims=True).shape == (1, 3)`
- F. `(my_array @ my_array2).shape == (4,)`

---

## My answer sheet

| Q | My answer | Q | My answer | Q | My answer |
|---|-----------|---|-----------|---|-----------|
| 1 |           | 6 |           | 11 |          |
| 2 |           | 7 |           | 12 |          |
| 3 |           | 8 |           | 13 |          |
| 4 |           | 9 |           | 14 |          |
| 5 |           | 10 |          | 15 |          |

---
---

# ANSWER KEY (do not read before finishing)

| Q | Correct answer | Reason |
|---|----------------|--------|
| 1 | **A, B, D, E** | θ₀ is a scalar (bias). Age is an input xᵢ. θ are the parameters. y has no activation, so any real value. 2 inputs give a plane. 1 input gives a line, not a parabola. |
| 2 | **A, C, D** | Clustering is unsupervised. Linear regression is supervised. |
| 3 | **A, B, C, D** | 3 inputs + 1 bias = 4 parameters. X is 150×4. Sigmoid output is in (0, 1). Binary cross-entropy is the right loss, not MSE. |
| 4 | **A, B, C, E** | First layer: 12·5 + 5 = 65. Second layer: 5 + 1 = 6. Total 71. Without g₁ the network is just linear. |
| 5 | **A, B, C, E** | Test-set size does not change overfitting. |
| 6 | **A, B, C, E, F** | X is m×(n+1) = 300×7. I is (n+1)×(n+1) = 7×7. |
| 7 | **A, B, D** | Min-max is MORE sensitive to outliers. Standardized values are not limited to [0, 1]. |
| 8 | **A, B, C, D** | A larger batch gives LESS noise (lower variance). |
| 9 | **A, C, D, E** | Square: grad_b = grad_c·2b = 3·2·(−2) = −12. Addition copies the gradient. Multiplication swaps: grad_a = grad_c·b = 15, grad_b = grad_c·a = 6. |
| 10 | **A, C, D, E, F** | `my_array[-1]` is (5,), not (1, 5). |
| 11 | **C, E** | (32,5) + (1,32): trailing 5 ≠ 32. `a.mean(axis=1)` has shape (32,), which does not match the trailing 5. |
| 12 | **A, B, C, D, E** | m = [[0,1],[2,3],[4,5]]. `my_array > 4` includes 5, so F is False... wait: F says "is False", and `np.any(my_array > 4)` is True, so F is false. |
| 13 | **A, B, C** | Transpose, an integer row index, and a basic slice are views. Fancy indexing, `flatten()`, and arithmetic make copies. |
| 14 | **A, B, C, E** | `v[v != 0]` is `[2, 2, 1, 2]`. `np.bincount(v)` has length 3 (max value 2, plus 1). |
| 15 | **A, B, C, E, F** | `np.sum(my_array, axis=1)` has shape (4,), so D is false. |

## Scoring
- Mark each question: 1 point (exactly right), 0.5 (one mistake), 0 (two or more mistakes).
- Total: ___ / 15.
- **7 or more = pass.** 11 or more = comfortable.

## If you lose points, check these first
- Q4, Q6: parameter counts and matrix shapes (always include the +1 for the bias).
- Q9: gradient rules (square: ×2b; add: copy; multiply: swap).
- Q13: view vs copy (basic slice / transpose = view; fancy index / flatten / arithmetic = copy).
- Q11, Q15: broadcasting (align trailing dimensions; each pair must be equal or 1).
