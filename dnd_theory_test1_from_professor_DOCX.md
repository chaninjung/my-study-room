# Theory Test 1 – Questions built directly from the professor's DOCX

Every question below comes from one bullet (or a group of bullets) in `theory_test1_examples_26autumn.docx`, **in the same order as the document**. Each bullet is turned into the multiple-choice format used in the real test.

**Rules (copied from the DOCX):**
- Each question has 3–6 statements. **At least one is true.**
- Full score: select all true statements and only those.
- Half score: exactly one mistake. Selecting a wrong statement AND missing a true one = two mistakes = 0 points.
- The same format is used for both theory tests and the retakes.

## The formulas of the DOCX (some are images, some are typed equations)

| Where in DOCX | Formula (written out) |
|---------------|------------------------|
| Typed equation | y = Xθ, where X is a matrix of all training examples |
| Typed equation | y = θ₄x₄ + θ₃x₃ + θ₂x₂ + θ₁x₁ + θ₀, y is a scalar |
| **Image 1** (normal equation) | θ = (XᵀX + λI)⁻¹ Xᵀ y |
| Typed equation | y = g(Xθ), g = sigmoid |
| Typed equation | y = g(θ₂x₂ + θ₁x₁ + θ₀), g = sigmoid, y is a scalar |
| **Image 2** (loss function) | J(Θ) = 1/(2m) Σⱼ₌₁ᵐ (ŷ⁽ʲ⁾ − y⁽ʲ⁾)² |
| **Image 3** (MLP hypothesis) | h(x) = g₂( W₂ · g₁( W₁x + b₁ ) + b₂ ) |
| Not in the DOCX file, but from the lectures ("given the formula of a feature scaling technique") | Min-max: x′ = (x − x_min)/(x_max − x_min). Standardization: x′ = (x − μ)/σ |

Write your answers like `Q1: A, C`. The answer key is at the end.

---

# PART 1 – Example questions related to Lectures 1–6

### Q1 (hypothesis function)
Which statements about the hypothesis function are true?
- A. Its input is the input variables x of an example (it uses the parameters θ).
- B. Its input is the true label y.
- C. Its output (value) is the estimate ŷ of the label.
- D. Its output is the value of the loss.

### Q2 (format of a label)
What can be the format of a label?
- A. A scalar (e.g., the cholesterol level)
- B. A vector (e.g., cholesterol + blood sugar; or 10 class probabilities)
- C. A label is always a single number.
- D. A label is always a picture.

### Q3 (data point)
What are the constituents of a data point in supervised learning?
- A. The input variables x
- B. The label y
- C. The parameters θ
- D. The loss function J

### Q4 (loss function)
Which statements about the loss function are true?
- A. Its role is to measure how different the estimate ŷ is from the label y.
- B. We minimize it during training.
- C. Its value is a scalar.
- D. Its value can be a vector.
- E. Its value can be a matrix.

### Q5 (reinforcement learning)
In reinforcement learning, which statements are true about the feedback from the environment?
- A. It is a reward (a number, possibly negative).
- B. It is often sparse (we do not get it after every action).
- C. It is the correct label for every input, like in supervised learning.
- D. The goal is to maximize the total expected future reward.

### Q6 (tasks)
Which of these tasks belong to **supervised** learning?
- A. Regression
- B. Classification
- C. Clustering
- D. Dimensionality reduction
- E. Denoising

### Q7 (goals of the tasks)
Which statements about the goal of the tasks are true?
- A. Regression: estimate a continuous value.
- B. Classification: estimate a category (class).
- C. Clustering: group similar examples together.
- D. Dimensionality reduction: find a compact representation from which the input can be reconstructed.
- E. Denoising: restore the clean version of a noisy input.

### Q8 (linear / logistic regression type)
Which statements are true?
- A. Linear regression is used to solve regression tasks.
- B. Linear regression is a supervised learning method.
- C. Logistic regression is used to solve classification tasks.
- D. Logistic regression is a supervised learning method.
- E. Logistic regression is an unsupervised method.
- F. Linear regression is used for classification tasks.

---

**Example task for Q9–Q15:** predict the **cholesterol level** of patients from weight, age, height, and sex. The training set has **200 patients**, each with the 4 attributes plus the cholesterol value.

### Q9
Which statements are true?
- A. Linear regression is a more suitable choice than logistic regression.
- B. With linear regression, we have 5 parameters (4 weights + 1 bias).
- C. With linear regression, we have 4 parameters.
- D. A suitable loss function is MSE (least squares).
- E. A suitable loss function is binary cross-entropy.

### Q10 (hypothesis y = Xθ)
The hypothesis is **y = Xθ**, where X is a matrix of all training examples (with the dummy column x₀ = 1). Which statements are true?
- A. X has shape 200×5.
- B. θ has shape 5×1.
- C. y has shape 200×1.
- D. The values in y can be any real number.
- E. The age values of the patients are inside X.
- F. The age values of the patients are inside θ.

### Q11 (what do we minimize?)
Same hypothesis y = Xθ. During learning:
- A. We want to minimize the loss with respect to θ.
- B. We want to change θ.
- C. We want to minimize X.
- D. We want to minimize y.

### Q12 (hypothesis y = θ₄x₄ + θ₃x₃ + θ₂x₂ + θ₁x₁ + θ₀)
Here y is a scalar. Which statements are true?
- A. θ₀ is a scalar.
- B. θ₀ is a vector.
- C. The value of y can be any real number.
- D. The age value of a patient is assigned to one of the xᵢ values.
- E. The age value of a patient is assigned to one of the θᵢ values.

### Q13 (geometric interpretation)
Which statements are true about the hypothesis function of linear regression?
- A. With 1 input variable (2D plot with axes x, y), it is a line.
- B. With 2 input variables (3D plot with axes x₁, x₂, y), it is a plane.
- C. With 1 input variable, it is a parabola.
- D. With 2 input variables, it is a sphere.
- E. With n input variables, it is a hyperplane in (n+1)-dimensional space.

### Q14 (regularized normal equation – IMAGE 1)
Using **θ = (XᵀX + λI)⁻¹ Xᵀ y** for the cholesterol task (200 patients, 4 attributes, with the dummy column). Which statements are true?
- A. X has shape 200×5.
- B. y has shape 200×1.
- C. θ has shape 5×1.
- D. The cholesterol levels are placed in y.
- E. The cholesterol levels are placed in X.
- F. I is the identity matrix, with shape 5×5.

### Q15 (what λ does in the same formula)
Which statements about θ = (XᵀX + λI)⁻¹ Xᵀ y are true?
- A. It uses the MSE (least squares) loss.
- B. With λ = 0, it is the non-regularized normal equation.
- C. It finds the parameters in one step, without iterations.
- D. It needs a learning rate α.
- E. I is a 200×200 identity matrix.

### Q16 (global optimum with gradient descent)
Given a small enough step size, are we guaranteed to (approximately) find the globally optimal parameters by gradient descent?
- A. Yes, for linear regression with the MSE loss.
- B. Yes, for a Multi-Layer Perceptron with the MSE loss.
- C. No, for a Multi-Layer Perceptron with the MSE loss (the loss is not convex).
- D. Yes, for logistic regression with the binary cross-entropy loss.

### Q17 (feature scaling)
Which statements are true?
- A. The purpose is to bring the input variables to the same order of magnitude.
- B. Without it, gradient descent is likely to converge more slowly.
- C. Without it, the loss contours can be elongated.
- D. Standardization is more robust to outliers than min-max scaling.
- E. Min-max scaling is more robust to outliers than standardization.

### Q18 (formula of feature scaling – identify symbols)
Standardization: x′ = (x − μ)/σ. Min-max scaling: x′ = (x − x_min)/(x_max − x_min). Which statements are true?
- A. μ is the mean of the variable.
- B. σ is the standard deviation of the variable.
- C. x′ is the scaled value.
- D. x_min and x_max are the smallest and largest values of the variable.
- E. The scaling is done independently for each input variable.
- F. After min-max scaling, the mean is always 0.

---

**Example task for Q19–Q21:** distinguish patients with an illness from healthy persons based on **two laboratory blood test values**. The training set has **100 patients**, each with the 2 attributes plus a label (ill / healthy).

### Q19
Which statements are true?
- A. Logistic regression is a more suitable choice than linear regression.
- B. With logistic regression we have 3 parameters (2 weights + 1 bias).
- C. A suitable loss function is binary cross-entropy (logistic loss).
- D. A suitable loss function is MSE for regression.

### Q20 (hypothesis y = g(Xθ), g = sigmoid)
Which statements are true?
- A. X has shape 100×3.
- B. θ has shape 3×1.
- C. y has shape 100×1.
- D. The values in y are in the range (0, 1).
- E. The lab values are inside X.
- F. The lab values are inside θ.

### Q21 (what do we minimize?)
For y = g(Xθ), during learning:
- A. We want to minimize the loss with respect to θ.
- B. We want to minimize X.
- C. We want to minimize y.
- D. We want to minimize g.
- E. What we minimize is the loss function J.

### Q22 (hypothesis y = g(θ₂x₂ + θ₁x₁ + θ₀), g = sigmoid, y scalar)
Which statements are true?
- A. θ₀ is a scalar.
- B. θ₀ is a vector.
- C. The range of y is (0, 1).
- D. The range of g(θ₂x₂ + θ₁x₁ + θ₀) is (0, 1).
- E. The lab values are assigned to the xᵢ values.
- F. The lab values are assigned to the θᵢ values.

---

### Q23 (loss function – IMAGE 2)
Consider **J(Θ) = 1/(2m) Σⱼ₌₁ᵐ (ŷ⁽ʲ⁾ − y⁽ʲ⁾)²**. Which statements are true?
- A. It is more suitable for a regression task.
- B. It is more suitable for a classification task.
- C. The variable j indexes the training examples.
- D. m is the number of training examples.
- E. J(Θ) is a scalar.
- F. J(Θ) is a vector with m elements.

### Q24 (similar questions with other loss functions)
Binary cross-entropy: J(Θ) = −(1/m) Σⱼ [ y⁽ʲ⁾ ln ŷ⁽ʲ⁾ + (1 − y⁽ʲ⁾) ln(1 − ŷ⁽ʲ⁾) ].
Multi-output MSE: J(Θ) = 1/(2mk) Σⱼ Σᵢ (ŷᵢ⁽ʲ⁾ − yᵢ⁽ʲ⁾)².
Cross-entropy (multi-class): J(Θ) = −(1/m) Σⱼ Σᵢ yᵢ⁽ʲ⁾ ln ŷᵢ⁽ʲ⁾.
Which statements are true?
- A. Binary cross-entropy is for classification.
- B. Multi-output MSE is for regression.
- C. Multi-class cross-entropy is used with softmax outputs and one-hot labels.
- D. In the multi-output MSE, k is the number of elements of the label vector.
- E. In the multi-class cross-entropy, i indexes the classes.
- F. All three losses give a vector as the value of J.

---

### Q25 (MLP hypothesis – IMAGE 3: regression, 20 inputs, 1 output)
Consider **h(x) = g₂( W₂ · g₁( W₁x + b₁ ) + b₂ )**. We use this MLP to solve a **regression** task with 20 input variables, estimating a single continuous value. We have 10 neurons in the first layer. Which statements are true?
- A. The whole network has 221 parameters.
- B. The first layer has 210 parameters.
- C. We should omit g₁.
- D. We should omit g₂ (use the identity).
- E. g₂ should be a sigmoid.
- F. W₁ has shape 10×20.

### Q26 (similar: binary classification)
The same MLP is used for **binary classification** with 20 inputs and 10 neurons in the first layer, with one output neuron. Which statements are true?
- A. The whole network has 221 parameters.
- B. g₂ should be a sigmoid.
- C. The loss should be binary cross-entropy.
- D. We should omit g₁.
- E. We should omit g₂.

### Q27 (similar: multi-class classification)
The same MLP is used for **multi-class classification** with 20 inputs, 10 neurons in the first layer, and 5 classes. Which statements are true?
- A. W₂ has shape 5×10.
- B. The whole network has 265 parameters.
- C. g₂ should be softmax.
- D. The loss should be (categorical) cross-entropy.
- E. The 5 outputs sum to 1.
- F. g₂ should be the identity.

### Q28 (activation functions from graphs and ranges)
Which statements are true?
- A. Sigmoid: S-shaped, range (0, 1), g(0) = 0.5.
- B. tanh: S-shaped, range (−1, 1), g(0) = 0.
- C. ReLU: 0 for negative inputs, equal to the input for positive inputs, range [0, ∞).
- D. ReLU: range (−1, 1).
- E. Sigmoid: range (−1, 1).

### Q29 (overfitting – effect of the changes)
Do we expect overfitting to become **more severe** if we:
- A. Decrease the number of training examples?
- B. Decrease the number of test examples?
- C. Increase the number of training examples?
- D. Decrease the number of parameters of the model?
- E. Increase the number of parameters of the model?

### Q30 (early stopping)
Which statements are true?
- A. We use early stopping to reduce overfitting.
- B. We should stop training when the validation loss stops improving (starts to increase).
- C. We should stop training when the training loss begins to increase.
- D. We should stop training when the test loss begins to increase.
- E. We should keep the parameters from the point of the best validation loss.

### Q31 (loss curves)
The validation loss keeps increasing while the training loss keeps decreasing. Which statements are true?
- A. This can be interpreted as a sign of overfitting.
- B. The overfitting is getting more severe.
- C. This is a sign of underfitting.
- D. The model is generalizing better and better.

### Q32 (parameters vs hyperparameters)
Which statements are true?
- A. The parameters of a neural network are usually trained with a gradient-descent-based algorithm (like SGD).
- B. The hyperparameters of a neural network are usually trained with a gradient-descent-based algorithm.
- C. The learning rate and the number of layers are hyperparameters.
- D. The weight matrices W and bias vectors b are parameters.

### Q33 (SGD)
Which statements are true?
- A. SGD computes the gradient on a randomly selected sub-sample of the data, not on the whole training set.
- B. The sub-sample is called a mini-batch.
- C. SGD always uses exactly one training example per step, and never more.
- D. Computing the gradient on the whole training set at every step is the "batch" gradient descent.

### Q34 (increase the batch size)
In mini-batch SGD, if we **increase** the batch size:
- A. The gradient estimate becomes less noisy (lower variance).
- B. Each step needs more computation and memory.
- C. The gradient estimate becomes noisier.
- D. The gradient estimate is closer to the gradient of the full training set.

### Q35 (decrease the batch size)
In mini-batch SGD, if we **decrease** the batch size:
- A. The gradient estimate becomes noisier (higher variance).
- B. Each step is cheaper (less computation and memory).
- C. The gradient estimate becomes more exact.
- D. A smaller learning rate may be needed.

### Q36 (backpropagation: square node)
Node c = b². Let grad_c = ∂J/∂c and grad_b = ∂J/∂b. What is grad_b?
- A. grad_b = grad_c · 2 · c
- B. grad_b = grad_c · 2 · b
- C. grad_b = grad_c · c²
- D. grad_b = grad_c

### Q37 (backpropagation: addition node)
Node c = a + b. Which statements are true?
- A. grad_a = grad_c + b, grad_b = grad_c + a
- B. grad_a = grad_b = grad_c
- C. grad_a = grad_c + a, grad_b = grad_c + b
- D. The addition node passes the gradient unchanged to both inputs.

---

# PART 2 – Example questions related to NumPy

*(Based on the "Video to watch before practice" for weeks 3–6. `ndarray.strides` and stride tricks are NOT included.)*

### Q38 (attributes of an ndarray)
If `my_array` is a `numpy.ndarray` instance, which statements are true?
- A. `my_array.shape` can be equal to `(5, 6)`.
- B. `my_array.shape` can be equal to `(1,)`.
- C. `my_array.shape` can be equal to `(0, 1, 0)`.
- D. `my_array.shape` can be equal to `12`.
- E. `my_array.dtype` can be equal to `(5, 6)`.
- F. `my_array.size` can be equal to `(5, 6)`.

### Q39 (more attributes)
If `my_array` is a `numpy.ndarray` instance, which statements are true?
- A. `my_array.size` can be equal to `12`.
- B. `my_array.ndim` can be equal to `(5, 6)`.
- C. `my_array.ndim` can be equal to `2`.
- D. `my_array.size` is the total number of elements.

### Q40 (slicing a (32, 5) array)
`my_array` has shape (32, 5). Which statements are true?
- A. `my_array[:, :].shape == (32, 5)`
- B. `my_array[:, 1].shape == (32,)`
- C. `my_array[1, :].shape == (5,)`
- D. `my_array[1:, :].shape == (31, 5)`
- E. `my_array[0, :-1].shape == (4,)`
- F. `my_array[[0], :].shape == (1, 5)`

### Q41 (more indexing)
`my_array` has shape (32, 5). Which statements are true?
- A. `my_array[[-1, -1], -1].shape == (2,)`
- B. `my_array[1, :].shape == (1, 5)`
- C. `my_array[:, 1].shape == (32, 1)`
- D. `my_array[0, :-1].shape == (5,)`

### Q42 (broadcasting errors)
`my_array1` has shape (32, 5) and `my_array2` has shape (32,), both numeric. Which expressions raise "ValueError: operands could not be broadcast together …"?
- A. `my_array1 + my_array2`
- B. `my_array1 + my_array2[:, None]`
- C. `my_array1 + my_array2[None, :]`
- D. `my_array1 + 1`

### Q43 (shapes of expressions)
`my_array` has shape (32, 5). Which statements are true?
- A. `(my_array < 0).shape == (32, 5)`
- B. `my_array.T.shape == (5, 32)`
- C. `my_array.T.T.shape == (32, 5)`
- D. `(my_array + my_array).shape == (32, 5)`
- E. `(my_array + my_array[:, None, :]).shape == (32, 32, 5)`
- F. `(my_array + my_array[:, None, :]).shape == (32, 5)`

### Q44 (mean along an axis, and types)
`my_array` has shape (32, 5). Which statements are true?
- A. `np.mean(my_array, axis=0).shape == (5,)`
- B. `np.mean(my_array, axis=1).shape == (32,)`
- C. The type of `np.sum(my_array, axis=0)` is `numpy.ndarray`.
- D. The type of `np.sum(my_array)` is `numpy.ndarray`.
- E. `np.mean(my_array, axis=1).shape == (5,)`

### Q45 (`my_array = np.arange(4).reshape(2, -1)`)
Which statements are true?
- A. `my_array.shape == (2, 2)`
- B. `(my_array * 2 + 1).shape == (2, 2)`
- C. `my_array[my_array > 0].shape == (3,)`
- D. `my_array[(my_array > 0) & (my_array % 2 == 0)].shape == (1,)`
- E. `(my_array * my_array.reshape(2, 2, -1)).shape == (2, 2, 2)`
- F. `my_array[my_array > 0].shape == (2, 2)`

### Q46 (view or copy 1: `my_array = np.arange(4)`)
After the given operations, we execute `my_array2[...] = 99`. In which cases will the elements of `my_array` be affected?
- A. `my_array2 = my_array.reshape(2, 2)`, then `my_array2[:, :] = 99`
- B. `my_array2 = my_array.T`, then `my_array2[:] = 99`
- C. `my_array2 = np.append(my_array, 42)`, then `my_array2[:] = 99`
- D. `my_array2 = my_array[1:2]`, then `my_array2[:] = 99`

### Q47 (view or copy 2)
`my_array = np.arange(4)`, and after each operation we execute `my_array2[:] = 99`. In which cases will the elements of `my_array` **NOT** be affected?
- A. `my_array2 = my_array[[1, 2]]`
- B. `my_array2 = my_array[my_array < 2]`
- C. `my_array2 = my_array + my_array`
- D. `my_array2 = my_array[1:3]`

### Q48 (`my_array = np.arange(4).reshape(2, -1)`)
Which statements are true?
- A. `np.count_nonzero(my_array == 0) == 1`
- B. `np.any(my_array == 0)` is True.
- C. `np.all(my_array == 0, axis=1)` equals `[False, False]`
- D. `np.all(my_array == 0, axis=1)` is a single boolean value.
- E. `np.count_nonzero(my_array == 0) == 2`

### Q49 (`my_array = np.array([3, 1, 2])`)
Which statements are true?
- A. `np.unique(my_array)` equals `[1, 2, 3]`
- B. `np.unique(my_array == 0)` equals `[False]`
- C. `np.bincount(my_array)` equals `[0, 1, 1, 1]`
- D. `np.sort(my_array)[::-1]` equals `[3, 2, 1]`
- E. `np.argsort(my_array)` equals `[1, 2, 0]`
- F. `my_array[my_array != 0]` equals `[1, 2]`

---
---

# ANSWER KEY

## Part 1
| Q | Answer | Reason |
|---|--------|--------|
| 1 | **A, C** | h takes x (with parameters θ) and gives the estimate ŷ. The true label is used by the loss, not by h. |
| 2 | **A, B** | A label can be a scalar or a vector. |
| 3 | **A, B** | A data point = (input, label). |
| 4 | **A, B, C** | The loss is always a scalar (even for vector labels, e.g., the multi-output MSE is averaged). |
| 5 | **A, B, D** | RL feedback is a (sparse) reward, not a correct label. |
| 6 | **A, B** | Clustering, dimensionality reduction, and denoising are unsupervised. |
| 7 | **A, B, C, D, E** | All five are the correct goals. |
| 8 | **A, B, C, D** | Logistic regression is supervised and used for classification. |
| 9 | **A, B, D** | 4 attributes + 1 bias = 5 parameters. MSE for a continuous target. |
| 10 | **A, B, C, D, E** | X is m×(n+1) = 200×5. θ is 5×1. y is 200×1. No output activation, so any real value. Ages are data (X). |
| 11 | **A, B** | We minimize the loss J by changing θ. X and y are data. |
| 12 | **A, C, D** | θ₀ is the bias (scalar). Age is an input xᵢ. |
| 13 | **A, B, E** | Line, plane, hyperplane. |
| 14 | **A, B, C, D, F** | (XᵀX + λI) is 5×5, so I is 5×5. y holds the labels. |
| 15 | **A, B, C** | It is an exact one-step formula. I is 5×5, not 200×200. |
| 16 | **A, C, D** | Linear regression + MSE and logistic regression + BCE are convex. An MLP is not. |
| 17 | **A, B, C, D** | Min-max uses x_min and x_max, which are outliers themselves. |
| 18 | **A, B, C, D, E** | After min-max, values are in [0, 1], but the mean is not 0. |
| 19 | **A, B, C** | Classification task: logistic regression and BCE. |
| 20 | **A, B, C, D, E** | X is 100×3 (2 values + dummy). The sigmoid gives values in (0, 1). |
| 21 | **A, E** | We minimize J with respect to θ. g is fixed. |
| 22 | **A, C, D, E** | θ₀ is a scalar. g(…) and y are in (0, 1). Lab values are inputs xᵢ. |
| 23 | **A, C, D, E** | An MSE loss for regression. j indexes the examples, m is their number. J is a scalar. |
| 24 | **A, B, C, D, E** | All the losses give a scalar, so F is false. |
| 25 | **A, B, D, F** | 20·10 + 10 = 210 (first layer). 10 + 1 = 11 (second layer). Total 221. g₁ must stay (nonlinearity). g₂ is the identity for regression. |
| 26 | **A, B, C** | Same 221 parameters. Sigmoid + BCE. g₁ stays. |
| 27 | **A, B, C, D, E** | W₂ is 5×10 = 50, plus b₂ with 5 = 55. 210 + 55 = 265. Softmax + cross-entropy. |
| 28 | **A, B, C** | |
| 29 | **A, E** | Fewer training examples and more parameters make overfitting more severe. The test-set size has no effect. |
| 30 | **A, B, E** | We watch the validation loss, never the training loss or the test loss. |
| 31 | **A, B** | The classic overfitting sign. |
| 32 | **A, C, D** | Hyperparameters are not usually trained by gradient descent. |
| 33 | **A, B, D** | SGD uses a randomly selected mini-batch (a single example is only the extreme case). |
| 34 | **A, B, D** | A larger batch means less noise but more cost. |
| 35 | **A, B, D** | A smaller batch means more noise but is cheaper. |
| 36 | **B** | d(b²)/db = 2b. |
| 37 | **B, D** | Addition passes the gradient unchanged to both inputs. |

## Part 2 (all NumPy answers were checked by running the code)
| Q | Answer | Reason |
|---|--------|--------|
| 38 | **A, B, C** | shape is a tuple (so D is false). dtype is a data type object. size is an int. |
| 39 | **A, C, D** | ndim is an integer. |
| 40 | **A, B, C, D, E, F** | All six shapes are correct: `(32,5)`, `(32,)`, `(5,)`, `(31,5)`, `(4,)`, `(1,5)`. |
| 41 | **A** | A single integer index removes the dimension: `[1, :]` is (5,), `[:, 1]` is (32,), `[0, :-1]` is (4,). |
| 42 | **A, C** | (32,5) + (32,) fails (trailing dims 5 vs 32). (32,5) + (1,32) fails. (32,5) + (32,1) works. |
| 43 | **A, B, C, D, E** | `my_array[:, None, :]` is (32,1,5), and the sum broadcasts to (32,32,5). |
| 44 | **A, B, C** | `np.sum(my_array)` is a NumPy scalar (numpy.float64), not an ndarray. |
| 45 | **A, B, C, D, E** | The array is [[0,1],[2,3]]. Boolean masking gives a 1D array: the mask `>0` keeps 3 elements (1, 2, 3), and `>0 & even` keeps only one element (the value 2). |
| 46 | **A, B, D** | Reshape, transpose, and basic slices are views. `np.append` makes a new array. |
| 47 | **A, B, C** | Fancy indexing, boolean masks, and arithmetic make copies. D is a view, so it is affected. |
| 48 | **A, B, C** | `my_array == 0` has exactly one True. `np.all(…, axis=1)` has shape (2,). |
| 49 | **A, B, C, D, E** | `np.argsort` gives the indices that sort the array. `my_array != 0` is all True, so F gives [3, 1, 2]. |

---

## Formula checklist from this DOCX
1. **y = Xθ:** X is m×(n+1), θ is (n+1)×1, y is m×1. We change θ to minimize J.
2. **θ = (XᵀX + λI)⁻¹Xᵀy:** I is (n+1)×(n+1). The labels are in y. λ = 0 means no regularization.
3. **y = g(Xθ), g = sigmoid:** y ∈ (0, 1). BCE loss. We never minimize X, y, or g.
4. **J(Θ) = 1/(2m) Σ (ŷ − y)²:** a regression loss. j indexes examples, m = number of examples, J is a scalar.
5. **h(x) = g₂(W₂ g₁(W₁x + b₁) + b₂):** keep g₁ always. g₂ is the identity for regression, sigmoid for binary, softmax for multi-class.
6. **Parameter counts (20 inputs, 10 hidden):** 210 in layer 1. 221 for one output. 265 for 5 classes.
