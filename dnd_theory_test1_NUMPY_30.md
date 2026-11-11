# Theory Test 1 – NumPy Focus: 10 Must-Know + 20 Important Questions

**Why NumPy matters:** about 6 of the 15 questions in the real test are NumPy. The DOCX says the NumPy questions are based on the "Video to watch before practice" for weeks 3–6. `ndarray.strides` and stride tricks are **not** included.

**What I used:**
- **Part A (10 must-know):** the exact NumPy bullets of the professor's DOCX. If you only have time for one thing, do these.
- **Part B (20 important):** DOCX-style topics (shapes, broadcasting, view vs copy) plus the **NumPy code that appears in the lecture slides**:
  - `y_pred = np.dot(X, theta)`
  - `theta = np.matmul(np.linalg.pinv(X), y)` (the normal equation)
  - The logistic regression code: `1 / (1 + np.exp(-z) + eps)`, `np.mean(-y * np.log(h + eps) - (1 - y) * np.log(1 - h + eps))`, `gradient = np.dot(X.T, (h - y)) / y.size`, `theta -= lr * gradient`
  - The NumPy vs PyTorch comparison slides (`theta[:, None]`, `torch.mm`, tensor attributes)

**Rules (same as the real test):** 3–6 statements per question, **at least one true**, select all true ones. All correct = 1 point. Exactly one mistake = 0.5. Two or more mistakes = 0.

> Write your answers like `A1: A, B, D`. The answer key is at the end. All answers were checked by running the code.

---

# PART A – 10 MUST-KNOW questions (from the DOCX)

### A1 – ndarray attributes
`my_array` is a `numpy.ndarray`. Which statements are true?
- A. `my_array.shape` can be equal to `(5, 6)`.
- B. `my_array.shape` can be equal to `(0, 1, 0)`.
- C. `my_array.shape` can be equal to `12`.
- D. `my_array.size` can be equal to `12`.
- E. `my_array.ndim` can be equal to `(5, 6)`.
- F. `my_array.dtype` can be equal to `(5, 6)`.

### A2 – slicing a (32, 5) array
`my_array` has shape (32, 5). Which statements are true?
- A. `my_array[:, :].shape == (32, 5)`
- B. `my_array[:, 1].shape == (32, 1)`
- C. `my_array[1:, :].shape == (31, 5)`
- D. `my_array[0, :-1].shape == (4,)`
- E. `my_array[[0], :].shape == (1, 5)`
- F. `my_array[[-1, -1], -1].shape == (2,)`

### A3 – broadcasting errors
`my_array1` has shape (32, 5) and `my_array2` has shape (32,), both numeric. Which expressions raise "ValueError: operands could not be broadcast together …"?
- A. `my_array1 + my_array2`
- B. `my_array1 + my_array2[:, None]`
- C. `my_array1 + my_array2[None, :]`
- D. `my_array1 + 1`

### A4 – shapes of expressions
`my_array` has shape (32, 5). Which statements are true?
- A. `(my_array < 0).shape == (32, 5)`
- B. `my_array.T.shape == (5, 32)`
- C. `my_array.T.T.shape == (32, 5)`
- D. `(my_array + my_array[:, None, :]).shape == (32, 32, 5)`
- E. `np.mean(my_array, axis=0).shape == (5,)`
- F. `np.mean(my_array, axis=1).shape == (5,)`

### A5 – types and scalars
`my_array` has shape (32, 5). Which statements are true?
- A. The type of `np.sum(my_array, axis=0)` is `numpy.ndarray`.
- B. The type of `np.sum(my_array)` is `numpy.ndarray`.
- C. `np.sum(my_array).shape == ()`
- D. `np.sum(my_array, axis=1, keepdims=True).shape == (32, 1)`
- E. The type of `np.mean(my_array)` is `numpy.ndarray`.

### A6 – `my_array = np.arange(4).reshape(2, -1)`
Which statements are true?
- A. `my_array.shape == (2, 2)`
- B. `(my_array * 2 + 1).shape == (2, 2)`
- C. `my_array[my_array > 0].shape == (3,)`
- D. `my_array[(my_array > 0) & (my_array % 2 == 0)].shape == (1,)`
- E. `(my_array * my_array.reshape(2, 2, -1)).shape == (2, 2, 2)`
- F. `my_array[my_array > 0].shape == (2, 2)`

### A7 – view or copy (1)
`my_array = np.arange(4)`. After each operation below we run `my_array2[:] = 99` (for the reshape: `my_array2[:, :] = 99`). In which cases are the elements of `my_array` affected?
- A. `my_array2 = my_array.reshape(2, 2)`
- B. `my_array2 = my_array.T`
- C. `my_array2 = np.append(my_array, 42)`
- D. `my_array2 = my_array[1:2]`

### A8 – view or copy (2)
Same setup. In which cases are the elements of `my_array` **NOT** affected?
- A. `my_array2 = my_array[[1, 2]]`
- B. `my_array2 = my_array[my_array < 2]`
- C. `my_array2 = my_array + my_array`
- D. `my_array2 = my_array[1:3]`

### A9 – count, any, all
`my_array = np.arange(4).reshape(2, -1)`. Which statements are true?
- A. `np.count_nonzero(my_array == 0) == 1`
- B. `np.any(my_array == 0)` is True.
- C. `np.all(my_array == 0, axis=1)` equals `[False, False]`.
- D. `np.all(my_array == 0, axis=1)` is a single boolean value.
- E. `np.count_nonzero(my_array == 0) == 2`

### A10 – unique, bincount, sort, argsort, masks
`my_array = np.array([3, 1, 2])`. Which statements are true?
- A. `np.unique(my_array)` equals `[1, 2, 3]`
- B. `np.unique(my_array == 0)` equals `[False]`
- C. `np.bincount(my_array)` equals `[0, 1, 1, 1]`
- D. `np.sort(my_array)[::-1]` equals `[3, 2, 1]`
- E. `np.argsort(my_array)` equals `[1, 2, 0]`
- F. `my_array[my_array != 0]` equals `[1, 2]`

---

# PART B – 20 IMPORTANT questions (DOCX topics + lecture code)

### B1 – `y_pred = np.dot(X, theta)` (Lectures 3–5)
`X` has shape (200, 5), and `theta` has shape (5,). Which statements are true?
- A. `np.dot(X, theta).shape == (200,)`
- B. With `theta[:, None]` (shape (5, 1)), `np.dot(X, theta[:, None]).shape == (200, 1)`
- C. `(X * theta).shape == (200, 5)` (elementwise, not a dot product)
- D. `theta @ X` works.
- E. `(X.T @ X).shape == (5, 5)`

### B2 – the normal equation in code: `theta = np.matmul(np.linalg.pinv(X), y)` (Lecture 4)
`X` has shape (200, 5), and `y` has shape (200,). Which statements are true?
- A. `np.linalg.pinv(X).shape == (5, 200)`
- B. `theta.shape == (5,)`
- C. It gives the least-squares solution (the same as the normal equation with λ = 0 when XᵀX is invertible).
- D. It needs a learning rate.
- E. `np.linalg.pinv(X).shape == (200, 5)`

### B3 – the lecture's sigmoid: `1 / (1 + np.exp(-z) + eps)`
Which statements are true?
- A. For an array `z`, the output has the same shape as `z`.
- B. With `eps = 0`, the sigmoid of 0 is 0.5.
- C. The outputs are between 0 and 1.
- D. With a small positive `eps`, the outputs are slightly smaller than the exact sigmoid.
- E. For an array `z`, the function returns a single scalar.

### B4 – the lecture's loss: `np.mean(-y * np.log(h + eps) - (1 - y) * np.log(1 - h + eps))`
`h = np.array([0.9, 0.2])`, `y = np.array([1, 0])`. Which statements are true?
- A. The loss ≈ 0.16.
- B. The loss is a scalar.
- C. If `h` had shape (2, 1) while `y` has shape (2,), then `-y * np.log(h)` would have shape (2, 2).
- D. In that case (shape (2, 1) vs (2,)), the mean is still 0.16.
- E. `eps` avoids `log(0)`.

### B5 – the lecture's gradient: `gradient = np.dot(X.T, (h - y)) / y.size`; `theta -= lr * gradient`
`X` has shape (6, 3), `theta` has shape (3,). Which statements are true?
- A. If `h` and `y` both have shape (6,), `gradient.shape == (3,)`.
- B. `theta -= lr * gradient` changes `theta` in place.
- C. If `h` and `y` both have shape (6, 1), then `gradient.shape == (3, 1)`, and `theta -= lr * gradient` raises a ValueError.
- D. If `h` has shape (6, 1) and `y` has shape (6,), then `h - y` has shape (6, 6) (a silent bug).
- E. `y.size` is the number of features.

### B6 – one gradient step (logistic regression)
`X = np.array([[1, 2], [1, 0]])`, `y = np.array([1, 0])`, `theta = np.zeros(2)`, `lr = 0.1`, `h = 1 / (1 + np.exp(-X @ theta))`.
- A. `h` equals `[0.5, 0.5]`.
- B. The loss ≈ 0.69.
- C. `X.T @ (h - y) / y.size` equals `[0, -0.5]`.
- D. After `theta -= lr * gradient`, `theta` equals `[0, 0.05]`.
- E. The gradient equals `[0, 0.5]`.

### B7 – array attributes (tensor attributes slide)
`a = np.zeros((2, 12), dtype=np.float32)`. Which statements are true?
- A. `a.size == 24`
- B. `a.ndim == 2`
- C. `a.shape == (2, 12)`
- D. `a.itemsize == 4`
- E. `a.nbytes == 96`
- F. `a.dtype` is float64.

### B8 – standardization in NumPy (feature scaling)
`X = np.array([[1., 200.], [2., 400.], [3., 600.]])` and `Xs = (X - X.mean(axis=0)) / X.std(axis=0)`. Which statements are true?
- A. `X.mean(axis=0)` equals `[2., 400.]`
- B. Each column of `Xs` has mean 0 and standard deviation 1.
- C. Both columns of `Xs` are identical.
- D. Using `axis=1` instead of `axis=0` would standardize each example (row), not each feature.
- E. `X.std(axis=0)` equals `[1., 200.]`

### B9 – outliers and scaling
`x = np.array([1., 2., 3., 100.])`. Which statements are true?
- A. Min-max scaling `(x - x.min()) / (x.max() - x.min())` gives about 0.02 for the value 3.
- B. After min-max scaling, the first three values are all below 0.03.
- C. The standardized value of 100 is about 1.73.
- D. `x.std()` is about 42.4.
- E. Standardized values are always in [0, 1].
- F. Min-max scaling is more robust to outliers than standardization.

### B10 – boolean masks and `&`
`m = np.arange(4).reshape(2, -1)`. Which statements are true?
- A. `(m > 0) & (m % 2 == 0)` equals `[[False, False], [True, False]]`
- B. `m > 0 & m % 2 == 0` raises a ValueError.
- C. `(m > 0) and (m % 2 == 0)` works elementwise.
- D. `(m > 0) | (m == 0)` is all True.
- E. `~(m > 0)` equals `m == 0`.

### B11 – accuracy and predictions with NumPy
`yp = np.array([1, 0, 2, 2])` and `yt = np.array([1, 1, 2, 0])`. Which statements are true?
- A. `(yp == yt).mean() == 0.5`
- B. `(yp == yt).sum() == 2`
- C. `np.count_nonzero(yp != yt) == 2`
- D. `np.argmax(np.array([[.1, .7, .2], [.5, .3, .2]]), axis=1)` equals `[1, 0]`
- E. `(np.array([.7, .2, .5]) >= .5).astype(int)` equals `[1, 0, 1]`
- F. The accuracy is 0.25.

### B12 – one-hot labels
`np.eye(3)[np.array([0, 2, 1])]`. Which statements are true?
- A. The result has shape (3, 3).
- B. The second row is `[0, 0, 1]`.
- C. `.argmax(axis=1)` gives back `[0, 2, 1]`.
- D. `.sum(axis=0)` equals `[1, 1, 1]`.
- E. The result is a view of `np.eye(3)`.

### B13 – cross-entropy in NumPy
`Y = np.array([[0, 1], [1, 0]])` (one-hot), `P = np.array([[.2, .8], [.5, .5]])`. Which statements are true?
- A. `-np.sum(Y * np.log(P)) / 2` ≈ 0.46
- B. `(Y * np.log(P)).shape == (2, 2)`
- C. `Y @ np.log(P)` gives the same as `Y * np.log(P)`.
- D. `np.sum(Y * np.log(P), axis=1).shape == (2,)`
- E. Only the log-probabilities of the true classes contribute to the loss.

### B14 – softmax in NumPy
`Z = np.array([[1., 1., 1.], [0., 0., np.log(2)]])`, `e = np.exp(Z)`, `P = e / e.sum(axis=1, keepdims=True)`. Which statements are true?
- A. `P[0]` equals `[1/3, 1/3, 1/3]`.
- B. `P[1]` equals `[0.25, 0.25, 0.5]`.
- C. `e / e.sum(axis=1)` raises a ValueError.
- D. Subtracting the row maximum before `np.exp` does not change `P`.
- E. `e.sum(axis=1, keepdims=True).shape == (2, 1)`
- F. `P.sum(axis=0)` equals `[1, 1, 1]`.

### B15 – an MLP layer in NumPy
`X` has shape (4, 3), `W` has shape (3, 2), `b` has shape (2,). Which statements are true?
- A. `(X @ W + b).shape == (4, 2)`
- B. `X @ W.T` raises a ValueError.
- C. `np.maximum(0, X @ W + b)` applies a ReLU elementwise and has shape (4, 2).
- D. `X @ W + b[:, None]` works and has shape (4, 2).
- E. `np.dot(W.T, X.T).shape == (2, 4)`
- F. This layer has 8 parameters.

### B16 – `reshape` with -1
`r = np.arange(12)`. Which statements are true?
- A. `r.reshape(3, -1).shape == (3, 4)`
- B. `r.reshape(-1, 6).shape == (2, 6)`
- C. `r.reshape(5, -1)` raises a ValueError.
- D. `r.reshape(-1).shape == (12,)`
- E. `r.reshape(2, 2, -1).shape == (2, 2, 3)`
- F. `r.reshape(-1, -1)` works.

### B17 – the dummy column x₀ = 1
`Xd` has shape (7, 3). Which statements are true?
- A. `np.concatenate([np.ones((7, 1)), Xd], axis=1).shape == (7, 4)`
- B. `np.hstack([np.ones((7, 1)), Xd]).shape == (7, 4)`
- C. `np.concatenate([np.ones(7), Xd], axis=1)` raises a ValueError (1D vs 2D).
- D. `np.ones((7, 1)) + Xd` adds 1 to every element and keeps shape (7, 3).
- E. The column of ones corresponds to the bias θ₀.
- F. `np.concatenate([np.ones((7, 1)), Xd], axis=0)` works.

### B18 – dtypes
Which statements are true?
- A. `np.array([1, 2, 3]) / 2` equals `[0.5, 1., 1.5]`
- B. `np.array([1, 2.5]).dtype` is a float type.
- C. `(np.array([.7, .2]) >= .5).dtype` is bool.
- D. `np.array([True, False, True]).sum() == 2`
- E. `np.array([1, 2, 3]) // 2` equals `[0.5, 1., 1.5]`

### B19 – in-place updates and aliases (like `theta -= lr * gradient`)
Which statements are true?
- A. `th = np.zeros(2); t2 = th; th -= 1` → `t2` becomes `[-1., -1.]`.
- B. `th = np.zeros(2); t2 = th; th = th - 1` → `t2` stays `[0., 0.]`.
- C. `th -= 1` and `th = th - 1` always behave the same.
- D. `self.theta -= self.lr * gradient` updates the array in place.
- E. `t2 = th.copy(); th -= 1` does not change `t2`.

### B20 – more view vs copy
`q = np.arange(6)`. Which statements are true?
- A. After `q[q > 2] = 0`, `q` is modified.
- B. After `f = q[q > 2]; f[:] = 0`, `q` is NOT modified.
- C. After `s = q[::2]; s[0] = 9`, `q` is modified.
- D. After `c = q.copy(); c[0] = 9`, `q` is NOT modified.
- E. `q[[0, 1]]` returns a view.

---
---

# ANSWER KEY

## Part A (must-know)
| Q | Answer | Reason |
|---|--------|--------|
| A1 | **A, B, D** | `shape` is a tuple (not 12). `ndim` is an int. `dtype` is a type. `size` is an int (12 is possible). |
| A2 | **A, C, D, E, F** | B is false: an integer index removes the axis, so `[:, 1]` is (32,). |
| A3 | **A, C** | (32,5)+(32,): trailing 5 vs 32 fails. (32,5)+(1,32) fails. (32,5)+(32,1) works. |
| A4 | **A, B, C, D, E** | F is false: `axis=1` removes the columns, so it is (32,). `my_array[:, None, :]` is (32,1,5), so the sum is (32,32,5). |
| A5 | **A, C, D** | `np.sum` and `np.mean` of the whole array give a NumPy scalar (`numpy.float64`) with shape `()`. |
| A6 | **A, B, C, D, E** | The array is [[0,1],[2,3]]. Boolean masking gives a 1D array. |
| A7 | **A, B, D** | Reshape, `.T`, and basic slices are views. `np.append` makes a new array. |
| A8 | **A, B, C** | Fancy indexing, boolean masks, and arithmetic make copies. D is a view, so it IS affected. |
| A9 | **A, B, C** | Exactly one zero. `np.all(…, axis=1)` has shape (2,). |
| A10 | **A, B, C, D, E** | `np.argsort` gives the indices that sort. F is false: nothing is removed, so the result is [3, 1, 2]. |

## Part B (important)
| Q | Answer | Reason |
|---|--------|--------|
| B1 | **A, B, C, E** | D raises an error: (5,) @ (200,5) does not match. |
| B2 | **A, B, C** | `pinv(X)` is (5,200). It is a one-step solution, no learning rate. |
| B3 | **A, B, C, D** | `eps` is added to the denominator, so outputs are slightly lower. The function is vectorized (E is false). |
| B4 | **A, B, C, E** | −ln 0.9 = 0.105 and −ln 0.8 = 0.223, so the mean is 0.164. With shapes (2,1) and (2,), broadcasting gives (2,2) and the mean becomes 1.06 (wrong). |
| B5 | **A, B, C, D** | With both (6,1): gradient is (3,1) and the in-place update fails. `y.size` is the number of examples m, not features. |
| B6 | **A, B, C, D** | h − y = [−0.5, 0.5]. Xᵀ(h−y) = [0, −1]. Divided by 2 gives [0, −0.5]. theta = 0 − 0.1·[0, −0.5] = [0, 0.05]. The loss is ln 2 = 0.693. |
| B7 | **A, B, C, D, E** | float32 uses 4 bytes. 24 × 4 = 96 bytes. |
| B8 | **A, B, C, D** | Population std of the first column is 0.816 (not 1), so E is false. The second column is 200 × the first, so after standardization they are identical. |
| B9 | **A, B, C, D** | Min-max: (3−1)/99 = 0.02. The outlier squeezes the other values. Standardization is the more robust one. |
| B10 | **A, B, D, E** | `m > 0 & m % 2 == 0` parses wrongly (`&` binds tighter than `>`), giving a ValueError. `and` also raises a ValueError. |
| B11 | **A, B, C, D, E** | 2 of 4 correct = 0.5. |
| B12 | **A, B, C, D** | Fancy indexing returns a copy, so E is false. |
| B13 | **A, B, D, E** | −(ln 0.8 + ln 0.5)/2 = 0.458. `Y @ np.log(P)` is a matrix product with different values. |
| B14 | **A, B, C, D, E** | C: (2,3)/(2,) does not broadcast. F is false: the rows sum to 1, not the columns. |
| B15 | **A, B, C, E, F** | D fails: (4,2)+(2,1) does not broadcast. Parameters: 3·2 + 2 = 8. |
| B16 | **A, B, C, D, E** | 12 is not divisible by 5. Only one −1 is allowed (F is false). |
| B17 | **A, B, C, D, E** | F fails: the columns must match for axis=0 (1 vs 3). |
| B18 | **A, B, C, D** | `//` on integers gives integers: [0, 1, 1]. |
| B19 | **A, B, D, E** | `th -= 1` modifies the same object, so every alias sees it. `th = th - 1` creates a new array. |
| B20 | **A, B, C, D** | Assigning through a mask modifies q. Reading with a mask, or fancy indexing, makes a copy. `q[::2]` is a view. |

---

## The 10 rules that cover most NumPy questions
1. `shape` is a tuple. `size`, `ndim` are ints. An integer index removes an axis (`a[:, 1]` is (32,)), but a list index keeps it (`a[[0], :]` is (1, 5)).
2. **Broadcasting:** align trailing dimensions. Each pair must be equal or one of them 1. (32,5)+(32,) fails, but (32,5)+(32,1) works.
3. `x[:, None]` adds an axis (n,) → (n,1). `a[:, None, :]` makes pairwise (32,32,5) results.
4. `axis=0` collapses rows (one value per column). `axis=1` collapses columns (one value per row). `keepdims=True` keeps the axis.
5. `np.sum(a)` / `np.mean(a)` return a NumPy scalar (shape `()`), not an ndarray.
6. **Views:** basic slices, `reshape`, `.T`. **Copies:** fancy indexing, boolean masks (reading), arithmetic, `np.append`, `flatten()`, `.copy()`.
7. Use `&`, `|`, `~` with parentheses for boolean masks. `and`/`or` raise a ValueError.
8. `(m,) - (m,1)` gives `(m,m)`: a silent bug in loss code.
9. `X @ W + b` is a layer. `*` is elementwise, `@`/`np.dot` is the matrix product. `X` is (m, n+1) with a column of ones.
10. `theta -= ...` is in place (aliases change too). `theta = theta - ...` makes a new array.
