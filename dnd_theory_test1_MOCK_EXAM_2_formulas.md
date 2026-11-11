# Deep Network Development – Theory Test 1 – MOCK EXAM 2 (Formula Focus)

**Set up exactly like the real test:**
- 15 questions (9 theory + 6 NumPy). About 6 of 15 are NumPy in the real test.
- Time: **45 minutes**. No notes, no code running. A calculator is not needed: all numbers are simple (use ln 2 ≈ 0.69, ln 3 ≈ 1.10).
- Each question has 3–6 statements. **At least one is true.** Select ALL true statements.
- Scoring: all correct = 1 point. Exactly one mistake = 0.5 points. Two or more mistakes = 0 points.
- **Pass: 7 / 15.**

**This exam focuses on formulas:** the normal equation, MSE, binary and categorical cross-entropy, MLP shapes, gradient descent, sigmoid derivative, backprop values, and how these formulas are written in NumPy.

> I cannot know the real questions. The professor's example list contains three formula images (normal equation, MSE loss, MLP hypothesis), so formula questions are very likely.
> Do NOT look at the answer key before you finish. Write your answers like `Q1: A, B, D`.

---

## PART 1 – Theory (formulas)

### Q1
Normal equation: θ = (XᵀX + λI)⁻¹Xᵀy. We have m = 120 patients and n = 4 input variables (with the dummy column x₀ = 1). Which statements are true?
- A. XᵀX is a 5×5 matrix.
- B. Xᵀy has 5 elements.
- C. I is a 120×120 identity matrix.
- D. With λ = 0, we get the non-regularized normal equation.
- E. θ has 4 elements.
- F. y has 120 elements.

### Q2
MSE loss: J(Θ) = 1/(2m) Σⱼ₌₁ᵐ (ŷ⁽ʲ⁾ − y⁽ʲ⁾)². We have m = 3, ŷ = [2, 4, 6], y = [1, 5, 9]. Which statements are true?
- A. J = 11/6.
- B. The sum of the squared errors is 11.
- C. If the factor 1/(2m) were replaced by 1/m, the loss would be 11/3.
- D. J = 11/3.
- E. J can be negative.
- F. ∂J/∂ŷ⁽¹⁾ = (ŷ⁽¹⁾ − y⁽¹⁾)/m = 1/3.

### Q3
Multi-output regression: J(Θ) = 1/(2mk) Σⱼ₌₁ᵐ Σᵢ₌₁ᵏ (ŷᵢ⁽ʲ⁾ − yᵢ⁽ʲ⁾)². We have m = 2 examples and k = 2 outputs. ŷ = [[1, 2], [3, 4]] and y = [[1, 0], [1, 4]]. Which statements are true?
- A. J = 1.
- B. The sum of all squared errors is 8.
- C. The denominator 2mk is 8.
- D. J = 2.
- E. The loss is averaged over the elements of the label vector too.
- F. J is a vector with 2 elements.

### Q4
Binary cross-entropy for one example: L = −[y·ln ŷ + (1 − y)·ln(1 − ŷ)]. (ln 0.8 ≈ −0.22, ln 0.5 ≈ −0.69.) Which statements are true?
- A. For y = 1 and ŷ = 0.8, L ≈ 0.22.
- B. For y = 0 and ŷ = 0.2, L ≈ 0.22.
- C. For y = 1 and ŷ = 0.5, L ≈ 0.69.
- D. For y = 1 and ŷ → 0, L → ∞.
- E. For y = 0, only the term y·ln ŷ matters.
- F. With logistic regression, the BCE loss is convex.

### Q5
Cross-entropy for multi-class classification: L = −Σᵢ yᵢ ln ŷᵢ. The true label is one-hot y = [0, 0, 1], and the estimate is ŷ = [0.1, 0.2, 0.7]. (ln 0.7 ≈ −0.36, ln 3 ≈ 1.10.) Which statements are true?
- A. L ≈ 0.36.
- B. Only the third term of the sum is non-zero.
- C. If ŷ = [1/3, 1/3, 1/3], then L ≈ 1.10.
- D. The elements of ŷ should sum to 1 (softmax output).
- E. The elements of y are the softmax outputs.

### Q6
Two-layer MLP: h(x) = g₂(W₂ g₁(W₁x + b₁) + b₂). The input has n = 10 variables, the hidden layer has 6 neurons, and the output has k = 3 classes (multi-class classification). Which statements are true?
- A. W₁ ∈ ℝ^(6×10)
- B. W₂ ∈ ℝ^(3×6)
- C. b₂ ∈ ℝ³
- D. The network has 87 parameters.
- E. W₁x + b₁ ∈ ℝ¹⁰
- F. g₂ should be the identity.

### Q7
Gradient descent update: θ := θ − α·∂J/∂θ. Let J(θ) = (θ − 3)², with θ = 1. Which statements are true?
- A. ∂J/∂θ = −4.
- B. With α = 0.25, the new θ is 2.
- C. With α = 0.25, J decreases from 4 to 1.
- D. With α = 1.5, the new θ is 7, and J increases to 16.
- E. The correct update rule is θ := θ + α·∂J/∂θ.

### Q8
Sigmoid: f(x) = 1/(1 + e⁻ˣ). Which statements are true? (Use f(ln 3) = 0.75.)
- A. f′(0) = 0.25.
- B. f′(x) = f(x)(1 − f(x)).
- C. f′(ln 3) = 3/16.
- D. f′(x) = e⁻ˣ/(1 + e⁻ˣ)².
- E. The maximum value of f′(x) is 1.

### Q9
Backpropagation with J = ((wx + b) − y)². The graph is q = wx, ŷ = q + b, z = y − ŷ, J = z². Values: x = 1, y = 3, w = 2, b = −1. Which statements are true?
- A. J = 4.
- B. ∂J/∂b = −4.
- C. ∂J/∂w = −4.
- D. ∂J/∂x = −8.
- E. After one step with α = 0.5: w = 4 and b = 1.
- F. After this step, the loss is 0.

---

## PART 2 – NumPy (formulas in code)

### Q10
`yp = np.array([2, 4, 6])` and `y = np.array([1, 5, 9])`. Which statements are true?
- A. `np.sum((yp - y) ** 2) == 11`
- B. `np.mean((yp - y) ** 2) / 2` ≈ 1.83
- C. `np.mean(yp - y) ** 2` equals 11/3
- D. `(yp - y[:, None]).shape == (3, 3)`
- E. `np.sum(yp > y) == 1`
- F. `np.argmax(np.abs(yp - y)) == 2`

### Q11
Normal equation in NumPy. `X` has shape (100, 4), `y` has shape (100,), and `lam = 0.1`. Which statements are true?
- A. `(X.T @ X).shape == (4, 4)`
- B. `(X.T @ y).shape == (4,)`
- C. `np.linalg.inv(X.T @ X + lam * np.eye(4)).shape == (4, 4)`
- D. `X.T @ X + lam * np.eye(100)` works and returns shape (100, 100).
- E. `(np.linalg.inv(X.T @ X + lam * np.eye(4)) @ X.T @ y).shape == (4,)`

### Q12
`z = np.array([0., np.log(3)])`, `h = 1 / (1 + np.exp(-z))`, `y = np.array([1, 0])`, `X = np.array([[1, 0], [1, 1]])`. Which statements are true?
- A. `h` equals `[0.5, 0.75]`
- B. `np.mean(-y * np.log(h) - (1 - y) * np.log(1 - h))` ≈ 1.04
- C. `(X.T @ (h - y) / y.size).shape == (2,)`
- D. `X.T @ (h - y) / y.size` equals `[0.125, 0.375]`
- E. `h - y` equals `[0.5, 0.75]`

### Q13
`X = np.array([[1., 10.], [2., 20.], [3., 30.], [4., 40.]])`. (`np.std` uses the population formula by default.) Which statements are true?
- A. `X.mean(axis=0)` equals `[2.5, 25.]`
- B. `X.std(axis=0)` ≈ `[1.12, 11.18]`
- C. `((X - X.mean(axis=0)) / X.std(axis=0))[0]` ≈ `[-1.34, -1.34]`
- D. `((X - X.min(axis=0)) / (X.max(axis=0) - X.min(axis=0)))[:, 0]` has 1/3 as its second element.
- E. `X.mean(axis=1).shape == (2,)`
- F. `X.max(axis=0) - X.min(axis=0)` equals `[3., 30.]`

### Q14
Softmax in NumPy. `Z = np.array([[0, 0], [np.log(2), 0]])`, `e = np.exp(Z)`, `P = e / e.sum(axis=1, keepdims=True)`. Which statements are true?
- A. `P[1]` ≈ `[0.667, 0.333]`
- B. `P.sum(axis=1)` equals `[1, 1]`
- C. `e / e.sum(axis=1)` raises a ValueError.
- D. `e.sum(axis=1, keepdims=True).shape == (2, 1)`
- E. `np.argmax(P, axis=1)` equals `[0, 0]`

### Q15
One gradient descent step for linear regression. `X = np.array([[1, 0], [1, 1], [1, 2]])`, `y = np.array([1, 3, 5])`, `theta = np.zeros(2)`, `lr = 0.1`, `grad = X.T @ (X @ theta - y) / y.size`. Which statements are true?
- A. `grad` ≈ `[-3., -4.33]`
- B. After `theta = theta - lr * grad`, theta ≈ `[0.3, 0.43]`
- C. The initial loss `np.sum((X @ theta - y) ** 2) / (2 * y.size)` ≈ 5.83
- D. `grad.shape == (2,)`
- E. `theta = theta + lr * grad` would also decrease the loss.
- F. `(X @ theta).shape == (3,)`

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
| 1 | **A, B, D, F** | X is 120×5, so XᵀX is 5×5, I is 5×5, Xᵀy has 5 elements, and θ has 5 elements (E is false). y has 120 elements. |
| 2 | **A, B, C, F** | Errors: 1, −1, −3. Squares: 1 + 1 + 9 = 11. J = 11/(2·3) = 11/6. With 1/m it would be 11/3 (so D is false). A sum of squares is never negative. ∂J/∂ŷ⁽¹⁾ = (1/(2m))·2·(ŷ − y) = (ŷ − y)/m = 1/3. |
| 3 | **A, B, C, E** | Errors: [[0, 2], [2, 0]]. Squares sum: 4 + 4 = 8. J = 8/(2·2·2) = 1. J is a scalar. |
| 4 | **A, B, C, D, F** | y = 1: L = −ln ŷ. y = 0: L = −ln(1 − ŷ), so for y = 0 only the second term matters (E is false). |
| 5 | **A, B, C, D** | L = −ln(0.7) ≈ 0.36. Uniform ŷ gives −ln(1/3) = ln 3 ≈ 1.10. y is the one-hot label, not the output. |
| 6 | **A, B, C, D** | Layer 1: 6·10 + 6 = 66. Layer 2: 3·6 + 3 = 21. Total 87. W₁x + b₁ ∈ ℝ⁶ (E is false). Multi-class needs softmax. |
| 7 | **A, B, C, D** | ∂J/∂θ = 2(θ − 3) = −4. θ_new = 1 − 0.25·(−4) = 2, J = 1. With α = 1.5: θ_new = 1 + 6 = 7, J = 16. We subtract the gradient. |
| 8 | **A, B, C, D** | f′(0) = 0.5·0.5 = 0.25 (this is the maximum, so E is false). f′(ln 3) = 0.75·0.25 = 0.1875 = 3/16. |
| 9 | **A, B, C, D, E** | q = 2, ŷ = 1, z = 2, J = 4. ∂J/∂z = 4, so ∂J/∂ŷ = −4, ∂J/∂b = −4, ∂J/∂w = x·(−4) = −4, ∂J/∂x = w·(−4) = −8. New w = 2 + 2 = 4 and b = −1 + 2 = 1. New ŷ = 5, z = −2, J = 4 again: the step is too large (overshoot), so F is false. |
| 10 | **A, B, D, E, F** | C is false: `np.mean(yp - y)` is −1, and (−1)² = 1, not the mean of the squares. This is a classic bug. |
| 11 | **A, B, C, E** | D raises a ValueError: (4,4) + (100,100) does not broadcast. |
| 12 | **A, B, C, D** | h − y = [0.5 − 1, 0.75 − 0] = [−0.5, 0.75] (E is false). X.T @ (h − y) = [0.25, 0.75], divided by 2 = [0.125, 0.375]. BCE: mean(0.69, 1.39) ≈ 1.04. |
| 13 | **A, B, C, D, F** | `X.mean(axis=1)` has shape (4,), so E is false. Std (population) of the first column = √1.25 ≈ 1.118. (1 − 2.5)/1.118 = −1.34. |
| 14 | **A, B, D, E** | C is false, and this is the trap: because m = k = 2, `e / e.sum(axis=1)` does NOT raise an error. It silently divides each column by the wrong number. Always use `keepdims=True`. |
| 15 | **A, B, C, D, F** | X@theta − y = [−1, −3, −5], so Xᵀ(…) = [−9, −13], and /3 = [−3, −4.33]. New theta = [0.3, 0.433]. The loss goes from 5.83 to about 3.39. Adding the gradient would increase the loss (E is false). |

## Scoring
- Mark each question: 1 point (exactly right), 0.5 (one mistake), 0 (two or more mistakes).
- Total: ___ / 15.
- **7 or more = pass.** 11 or more = comfortable.

## Formula cheat sheet (check what you missed)
1. **Normal equation:** θ = (XᵀX + λI)⁻¹Xᵀy. X is m×(n+1). I is (n+1)×(n+1). θ has n+1 elements.
2. **MSE:** J = 1/(2m) Σ (ŷ − y)². Multi-output: 1/(2mk). ∂J/∂ŷⱼ = (ŷⱼ − yⱼ)/m.
3. **BCE:** −[y ln ŷ + (1 − y) ln(1 − ŷ)]. **CE:** −Σ yᵢ ln ŷᵢ, and only the true-class term survives with a one-hot label.
4. **MLP:** W₁ ∈ ℝ^(h×n), b₁ ∈ ℝ^h, W₂ ∈ ℝ^(k×h), b₂ ∈ ℝ^k. Parameters: h·n + h + k·h + k.
5. **Gradient descent:** θ := θ − α·grad. A very large α can make J increase.
6. **Sigmoid:** f′ = f(1 − f), maximum 0.25 at x = 0.
7. **Backprop:** + copies the gradient; × swaps the other input; z = y − ŷ gives grad_ŷ = −grad_z; z² gives 2z.
8. **NumPy traps:** `np.mean(d) ** 2` ≠ `np.mean(d ** 2)`. `X.T @ (h - y) / y.size` is the gradient. Use `keepdims=True` in softmax.
