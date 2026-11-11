# Intro to Data Science (ELTE) — Predicted Modular Tests

> Format notes for the database
> - Each exam starts with `# EXAM:` and a metadata block.
> - Each question has a unique ID (`T1-MC-01`, `T1-SA-01`).
> - In MCQs the correct option is checked with `[x]`. There is also an `**Answer:**` line.
> - Short answers use sub-parts (`a`, `b`, `c`) with their own points and an answer key.
> - Test duration: 30 minutes. Grading (percent): 1 = 0–50, 2 = 51–65, 3 = 66–80, 4 = 81–90, 5 = 91–100.

---

# EXAM: Modular Test 1 (Predicted)

- **exam_id:** T1
- **date:** 06.10.2026
- **scope:** Lectures 1–4 — Intro to data science / data mining, data types and quality, univariate statistics, bivariate analysis, visualization, feature selection, linear methods (PCA)
- **duration_min:** 30
- **total_points:** 25
- **status:** predicted

## Part I: Multiple Choice (13 questions, 1 point each)

### T1-MC-01
- **Type:** MCQ
- **Points:** 1
- **Topic:** data basics
- **Difficulty:** easy

**Question:** In a data table, what do the rows and the columns represent?

- [ ] A) Rows are features; columns are examples
- [x] B) Rows are examples (samples, instances); columns are features
- [ ] C) Rows are labels; columns are classes
- [ ] D) Rows are clusters; columns are centroids

**Answer:** B
**Explanation:** Data is a collection of examples and their features. Each row is an example and each column is a feature.

---

### T1-MC-02
- **Type:** MCQ
- **Points:** 1
- **Topic:** feature types
- **Difficulty:** easy

**Question:** Which of the following is an **ordinal** feature?

- [ ] A) City ∈ {Vancouver, Burnaby, Surrey}
- [ ] B) Job? ∈ {yes, no}
- [x] C) Rating ∈ {best (1), good (2), neutral (3), bad (4), worst (5)}
- [ ] D) Height ∈ {173.5, 162.4, 190.2}

**Answer:** C
**Explanation:** Ordinal features come from an ordered set, but the distance between values is not meaningful. City is nominal, Job? is binary and Height is continuous.

---

### T1-MC-03
- **Type:** MCQ
- **Points:** 1
- **Topic:** one-hot encoding
- **Difficulty:** easy

**Question:** The feature City has three values (Van, Bur, Sur) and is converted into three columns (Van, Bur, Sur) with "1 of k" encoding. How is an example from Burnaby encoded?

- [ ] A) (1, 0, 0)
- [x] B) (0, 1, 0)
- [ ] C) (0, 0, 1)
- [ ] D) (2)

**Answer:** B
**Explanation:** One-hot encoding puts 1 in the column of the actual category and 0 in the others.

---

### T1-MC-04
- **Type:** MCQ
- **Points:** 1
- **Topic:** missing values
- **Difficulty:** medium

**Question:** Which of the following is **NOT** a typical way to handle missing values?

- [x] A) Multiply the attribute by its missing ratio
- [ ] B) Eliminate the data objects that have missing values
- [ ] C) Estimate the missing values
- [ ] D) Ignore the missing value during analysis

**Answer:** A
**Explanation:** Standard strategies: eliminate objects, estimate values, ignore the missing value during analysis, or replace with all possible values weighted by their probabilities.

---

### T1-MC-05
- **Type:** MCQ
- **Points:** 1
- **Topic:** bag of words
- **Difficulty:** easy

**Question:** What is true about the "bag of words" representation of a text document?

- [ ] A) It preserves the exact order of the words
- [ ] B) It can only be used for images
- [ ] C) It stores only whether the document is longer than 100 words
- [x] D) It replaces the document by word counts; it ignores order but often captures the general theme

**Answer:** D
**Explanation:** Bag of words is a vector of word counts. We can then compute a distance between documents.

---

### T1-MC-06
- **Type:** MCQ
- **Points:** 1
- **Topic:** data science life cycle
- **Difficulty:** easy

**Question:** In the data science life cycle, which step transforms the acquired raw data into a suitable format so that it can be easily used by the further steps?

- [ ] A) Data Acquisition
- [ ] B) Data Exploration
- [x] C) Data Processing
- [ ] D) Deployment and Optimization

**Answer:** C
**Explanation:** Data Processing transforms raw data into a suitable format. Data Exploration looks for patterns and insights.

---

### T1-MC-07
- **Type:** MCQ
- **Points:** 1
- **Topic:** univariate statistics
- **Difficulty:** medium

**Question:** A distribution is **right-skewed** (long tail to the right). Which statement is most likely true?

- [x] A) Mean > median
- [ ] B) Mean < median
- [ ] C) Mean = median = mode
- [ ] D) The variance is zero

**Answer:** A
**Explanation:** Large values on the right tail pull the mean up more than the median, so the mean is greater than the median.

---

### T1-MC-08
- **Type:** MCQ
- **Points:** 1
- **Topic:** outliers (IQR rule)
- **Difficulty:** medium

**Question:** A variable has Q1 = 10 and Q3 = 20. Using the 1.5 × IQR rule, which value is flagged as an outlier?

- [ ] A) 30
- [ ] B) 33
- [ ] C) 35
- [x] D) 36

**Answer:** D
**Explanation:** IQR = 10, upper fence = 20 + 15 = 35 and lower fence = 10 − 15 = −5. Only values above 35 (or below −5) are flagged, so 36 is an outlier and 35 is not.

---

### T1-MC-09
- **Type:** MCQ
- **Points:** 1
- **Topic:** correlation
- **Difficulty:** easy

**Question:** Two variables have a Pearson correlation of r = −0.92. What does this mean?

- [ ] A) There is almost no relationship
- [x] B) There is a strong negative linear relationship
- [ ] C) There is a strong positive linear relationship
- [ ] D) One variable causes the other to decrease

**Answer:** B
**Explanation:** The sign gives the direction (negative) and |r| close to 1 gives a strong linear relationship. Correlation does not prove causation.

---

### T1-MC-10
- **Type:** MCQ
- **Points:** 1
- **Topic:** correlation
- **Difficulty:** medium

**Question:** Two variables have a Pearson correlation of r ≈ 0. Which conclusion is correct?

- [ ] A) The variables are always statistically independent
- [ ] B) The variables must be identical
- [x] C) There is no linear relationship, but a nonlinear dependence can still exist
- [ ] D) The covariance must be negative

**Answer:** C
**Explanation:** Example: y = x² on a symmetric range has r ≈ 0 but y fully depends on x. Pearson r only measures linear relationships.

---

### T1-MC-11
- **Type:** MCQ
- **Points:** 1
- **Topic:** PCA
- **Difficulty:** medium

**Question:** What is the first principal component in PCA?

- [x] A) The direction in feature space along which the projected data has maximum variance
- [ ] B) The feature with the highest correlation to the label
- [ ] C) The direction along which the data has minimum variance
- [ ] D) The cluster centroid with the most points

**Answer:** A
**Explanation:** PCA finds orthogonal directions (eigenvectors of the covariance matrix) ordered by the variance they explain. PC1 explains the most variance.

---

### T1-MC-12
- **Type:** MCQ
- **Points:** 1
- **Topic:** feature selection
- **Difficulty:** medium

**Question:** Which of the following is a **filter** method for feature selection?

- [ ] A) Recursive feature elimination using a classifier
- [x] B) Ranking features by their correlation with the target, independently of any model
- [ ] C) L1 (Lasso) regularization during model training
- [ ] D) Forward selection evaluated by cross-validation of a model

**Answer:** B
**Explanation:** Filter methods score features using statistics, independent of a learning model. A and D are wrappers; C is embedded.

---

### T1-MC-13
- **Type:** MCQ
- **Points:** 1
- **Topic:** data quality
- **Difficulty:** easy

**Question:** A merged table contains two rows for the same person with different IDs. Which data quality problem is this?

- [ ] A) Noise
- [ ] B) Outlier
- [ ] C) Missing values
- [x] D) Duplicate data

**Answer:** D
**Explanation:** Duplicate or almost-duplicate objects are a significant issue when merging data from heterogeneous sources.

---

## Part II: Short Answer

### T1-SA-01 (4 points) — Univariate statistics
Dataset X = {2, 4, 4, 4, 5, 5, 7, 9}.

**T1-SA-01a (1 pt):** Compute the mean.
**Answer:** (2+4+4+4+5+5+7+9)/8 = 40/8 = **5**.

**T1-SA-01b (1 pt):** Compute the population variance and standard deviation.
**Answer:** Squared deviations: 9, 1, 1, 1, 0, 0, 4, 16, sum = 32. Variance = 32/8 = **4**, std = **2**. (Sample variance = 32/7 ≈ 4.57, std ≈ 2.14.)

**T1-SA-01c (1 pt):** Find the median, Q1, Q3 and IQR.
**Answer:** Median = (4+5)/2 = **4.5**. Lower half {2,4,4,4} → Q1 = **4**. Upper half {5,5,7,9} → Q3 = **6**. IQR = **2**.

**T1-SA-01d (1 pt):** Is 9 an outlier under the 1.5 × IQR rule?
**Answer:** Fences: 4 − 3 = 1 and 6 + 3 = 9. 9 is not greater than 9, so it is **not** an outlier (it is on the boundary).

---

### T1-SA-02 (3 points) — Bivariate analysis
x = {1, 2, 3, 4, 5}, y = {2, 4, 5, 4, 5}.

**T1-SA-02a (1 pt):** Compute the sample covariance of x and y.
**Answer:** mean x = 3, mean y = 4. Products of deviations: (−2)(−2)=4, (−1)(0)=0, 0, 0, (2)(1)=2 → sum = 6. Sample covariance = 6/4 = **1.5**.

**T1-SA-02b (1 pt):** Compute the Pearson correlation r.
**Answer:** Sxx = 10, Syy = 4+0+1+0+1 = 6. r = 6 / √(10·6) = 6/√60 ≈ **0.775**.

**T1-SA-02c (1 pt):** Interpret r, and say how Spearman correlation differs from Pearson.
**Answer:** r ≈ 0.77 is a strong positive linear relationship. Spearman works on ranks, so it measures any monotonic relationship and is less sensitive to outliers. Pearson measures only linear relationships.

---

### T1-SA-03 (2 points) — PCA
**T1-SA-03a (1 pt):** Describe the main steps of PCA.
**Answer:** (1) Center (and usually standardize) the data. (2) Compute the covariance matrix. (3) Compute its eigenvectors and eigenvalues. (4) Sort by eigenvalue and keep the top k eigenvectors. (5) Project the data onto them.

**T1-SA-03b (1 pt):** A 2D dataset has covariance-matrix eigenvalues 3 and 1. What fraction of variance does PC1 explain?
**Answer:** 3 / (3 + 1) = **75 %**.

---

### T1-SA-04 (3 points) — Data quality and preprocessing
**T1-SA-04a (1 pt):** List four typical data quality problems.
**Answer:** Noise, outliers, missing values, duplicate data.

**T1-SA-04b (1 pt):** Why is a categorical feature (e.g. City) converted to numerical features before many ML algorithms are used?
**Answer:** Most algorithms need a real-valued representation so examples can be treated as points in a feature space and distances can be computed. One-hot ("1 of k") encoding avoids creating a fake order.

**T1-SA-04c (1 pt):** A student says "the more data, the better, always." Comment.
**Answer:** More data usually helps, but only as long as quality does not suffer. Noisy, duplicated or biased data can make results worse. A common rule of thumb is about ten times the number of features.

---
---

# EXAM: Modular Test 2 (Full Mock Exam)

- **exam_id:** T2
- **date:** 20.10.2026
- **scope:** Lectures 5–6 — Unsupervised learning, clustering (K-means, hierarchical, DBSCAN), internal and external evaluation (DB, Silhouette, CH, purity), choosing K
- **duration_min:** 30
- **total_points:** 28
- **status:** mock (new questions, same style as the real paper)

## Part I: Multiple Choice (13 questions, 1 point each)

### T2-MC-01
- **Type:** MCQ
- **Points:** 1
- **Topic:** K-means objective
- **Difficulty:** easy

**Question:** What does the K-means algorithm try to minimize?

- [ ] A) The distance between the centroids of different clusters
- [x] B) The sum of squared distances between each point and the centroid of its assigned cluster
- [ ] C) The number of points in each cluster
- [ ] D) The number of clusters

**Answer:** B
**Explanation:** K-means minimizes the within-cluster sum of squared errors (SSE). It decreases monotonically per iteration but may reach a local minimum.

---

### T2-MC-02
- **Type:** MCQ
- **Points:** 1
- **Topic:** K-means initialization
- **Difficulty:** medium

**Question:** What is the main idea of K-means++ initialization?

- [ ] A) Choose all initial centroids at the center of the data
- [ ] B) Run K-means with K+1 clusters and delete one
- [x] C) Choose initial centroids spread far apart, with probability proportional to the squared distance to the nearest centroid already chosen
- [ ] D) Choose the K points with the largest norm

**Answer:** C
**Explanation:** K-means is sensitive to the initial centroids. K-means++ spreads them out, which gives better and more stable local minima.

---

### T2-MC-03
- **Type:** MCQ
- **Points:** 1
- **Topic:** K-medoids
- **Difficulty:** medium

**Question:** Which statement best distinguishes K-medoids from K-means?

- [x] A) The cluster representative is an actual data point (medoid), which makes the method more robust to outliers
- [ ] B) K-medoids always needs fewer iterations than K-means
- [ ] C) K-medoids does not need the number of clusters K
- [ ] D) K-medoids can only be used on binary data

**Answer:** A
**Explanation:** A mean can be pulled by an extreme point; a medoid is a real object and is much less affected.

---

### T2-MC-04
- **Type:** MCQ
- **Points:** 1
- **Topic:** single-linkage
- **Difficulty:** medium

**Question:** In hierarchical clustering, the single-linkage criterion defines the distance between two clusters as:

- [ ] A) The distance between their centroids
- [ ] B) The maximum distance between any two points, one from each cluster
- [ ] C) The increase of the mean squared distance to the centroid after merging
- [x] D) The minimum distance between any two points, one from each cluster; it can handle non-spherical shapes but suffers from the "chaining" effect

**Answer:** D
**Explanation:** Single-linkage uses the closest pair, so elongated clusters can be found, but noise points can chain clusters together.

---

### T2-MC-05
- **Type:** MCQ
- **Points:** 1
- **Topic:** complete-linkage
- **Difficulty:** medium

**Question:** Which statement about complete-linkage HCA is correct?

- [ ] A) It uses the minimum pairwise distance between clusters
- [x] B) It uses the maximum pairwise distance between clusters and tends to produce compact clusters
- [ ] C) It does not produce a dendrogram
- [ ] D) It requires K to be specified before the algorithm runs

**Answer:** B
**Explanation:** Complete-linkage uses the farthest pair, which favors compact clusters of similar diameter.

---

### T2-MC-06
- **Type:** MCQ
- **Points:** 1
- **Topic:** dendrogram
- **Difficulty:** easy

**Question:** How do we get a flat partition from a dendrogram?

- [ ] A) By running K-means on the dendrogram
- [ ] B) By deleting the leaves
- [x] C) By cutting it with a horizontal line at a chosen height; the branches crossed give the clusters
- [ ] D) By always taking the last merge

**Answer:** C
**Explanation:** The height of a merge is the dissimilarity at which two clusters join. Cutting at a height gives a partition.

---

### T2-MC-07
- **Type:** MCQ
- **Points:** 1
- **Topic:** DBSCAN
- **Difficulty:** easy

**Question:** In DBSCAN, which point is a **noise point**?

- [ ] A) A point with at least MinPts points in its Eps-neighborhood
- [x] B) A point that is not a core point and is not within the Eps-neighborhood of any core point
- [ ] C) A point that is the centroid of a cluster
- [ ] D) A point within the Eps-neighborhood of a core point

**Answer:** B
**Explanation:** A is a core point and D is a border point. Noise is neither.

---

### T2-MC-08
- **Type:** MCQ
- **Points:** 1
- **Topic:** DBSCAN limitations
- **Difficulty:** medium

**Question:** What is a typical weakness of DBSCAN?

- [x] A) It has difficulty with clusters of very different densities, since one Eps/MinPts pair is used for all clusters
- [ ] B) It can only find spherical clusters
- [ ] C) It requires the number of clusters K as input
- [ ] D) It cannot detect outliers

**Answer:** A
**Explanation:** DBSCAN finds arbitrary shapes, needs no K and detects noise, but a single density threshold fails on varying densities.

---

### T2-MC-09
- **Type:** MCQ
- **Points:** 1
- **Topic:** Silhouette (calculation)
- **Difficulty:** medium

**Question:** For a point x, the mean distance to its own cluster is a(x) = 2 and the mean distance to the closest other cluster is b(x) = 6. What is its Silhouette value?

- [ ] A) 0.33
- [ ] B) 0.50
- [x] C) 0.67
- [ ] D) 3.00

**Answer:** C
**Explanation:** s = (b − a) / max(a, b) = (6 − 2) / 6 ≈ 0.67. This is a reasonable-to-strong structure for this point.

---

### T2-MC-10
- **Type:** MCQ
- **Points:** 1
- **Topic:** Davies–Bouldin (calculation)
- **Difficulty:** medium

**Question:** A partition has K = 2 clusters with scatters S1 = 1, S2 = 3 and distance between centroids M12 = 8. What is the Davies–Bouldin index?

- [x] A) 0.5
- [ ] B) 0.125
- [ ] C) 2
- [ ] D) 4

**Answer:** A
**Explanation:** For each cluster the ratio is (S1 + S2)/M12 = 4/8 = 0.5. The mean over the two clusters is 0.5. Lower DB is better.

---

### T2-MC-11
- **Type:** MCQ
- **Points:** 1
- **Topic:** purity
- **Difficulty:** medium

**Question:** Cluster C1 has 10 objects (8 from class A, 2 from class B). Cluster C2 has 10 objects (6 from class B, 4 from class A). What is the purity of the partition?

- [ ] A) 0.6
- [x] B) 0.7
- [ ] C) 0.8
- [ ] D) 0.14

**Answer:** B
**Explanation:** Partition purity = (1/N) Σ max class count = (8 + 6) / 20 = 0.7.

---

### T2-MC-12
- **Type:** MCQ
- **Points:** 1
- **Topic:** internal vs external indexes
- **Difficulty:** easy

**Question:** Which of the following is an **external** clustering evaluation index?

- [ ] A) Silhouette Index
- [ ] B) Davies–Bouldin Index
- [ ] C) Calinski–Harabasz Index
- [x] D) Adjusted Rand Index

**Answer:** D
**Explanation:** External indexes compare the partition with ground-truth labels (Rand Index, ARI, purity, accuracy). Silhouette, DB and CH are internal.

---

### T2-MC-13
- **Type:** MCQ
- **Points:** 1
- **Topic:** Calinski–Harabasz
- **Difficulty:** medium

**Question:** Which statement about the Calinski–Harabasz (CH) index is correct?

- [ ] A) It is normalized between −1 and 1
- [x] B) It is the ratio of between-cluster to within-cluster dispersion; a higher value is better and it is not normalized
- [ ] C) A lower value is better
- [ ] D) It requires ground-truth labels

**Answer:** B
**Explanation:** CH(k) = [B/(k−1)] / [W/(N−k)]. It is an internal index and is generally good for balanced clusters.

---

## Part II: Short Answer

### T2-SA-01 (3 points) — K-means calculation
Dataset X = {1, 3, 4, 10, 11, 12, 25}. K-means with K = 2, initial centroids m1 = 1 and m2 = 12.

**T2-SA-01a (1 pt):** Assign points to clusters in iteration 1.
**Answer:** Distances to m1: 0, 2, 3, 9, 10, 11, 24. Distances to m2: 11, 9, 8, 2, 1, 0, 13. C1 = {1, 3, 4}, C2 = {10, 11, 12, 25}.

**T2-SA-01b (1 pt):** Compute the updated centroids.
**Answer:** m1 = (1+3+4)/3 ≈ **2.67**, m2 = (10+11+12+25)/4 = **14.5**.

**T2-SA-01c (1 pt):** Has the algorithm converged? Explain.
**Answer:** With m1 = 2.67 and m2 = 14.5, point 10 is at distance 7.33 from m1 and 4.5 from m2, so it stays in C2. No point changes cluster, so the partition is stable and K-means has **converged** (the stopping criterion is: the partition does not change). It reaches a local minimum, with SSE ≈ 4.67 + 149 = 153.67.

---

### T2-SA-02 (3 points) — DBSCAN
Points X = {1, 2, 3, 5, 8, 9, 10, 20}. DBSCAN with Eps = 1.5 and MinPts = 3 (the point itself counts).

**T2-SA-02a (2 pts):** Classify every point as core, border or noise.
**Answer:** Neighborhood sizes: 1 → {1,2} = 2; 2 → {1,2,3} = 3; 3 → {2,3} = 2; 5 → {5} = 1; 8 → {8,9} = 2; 9 → {8,9,10} = 3; 10 → {9,10} = 2; 20 → {20} = 1.
- **Core:** 2, 9
- **Border:** 1, 3 (near core 2); 8, 10 (near core 9)
- **Noise:** 5, 20

**T2-SA-02b (1 pt):** Give the clusters found.
**Answer:** Cluster 1 = {1, 2, 3}, Cluster 2 = {8, 9, 10}, noise = {5, 20}.

---

### T2-SA-03 (3 points) — Hierarchical clustering
Points X = {1, 2, 6, 11, 13} (1D, Euclidean distance).

**T2-SA-03a (1.5 pts):** Give the merge order and merge heights with single-linkage.
**Answer:** {1,2} at 1; {11,13} at 2; {1,2}+{6} at 4; {1,2,6}+{11,13} at 5.

**T2-SA-03b (1.5 pts):** Give the merge order and merge heights with complete-linkage.
**Answer:** {1,2} at 1; {11,13} at 2; {1,2}+{6} at 5 (max(5,4)); {1,2,6}+{11,13} at 12 (max distance |1−13|). Cutting both dendrograms into 2 clusters gives {1,2,6} and {11,13}.

---

### T2-SA-04 (2 points) — Silhouette
Cluster C1 = {1, 2, 3}, cluster C2 = {8, 9}. Use absolute difference as distance.

**T2-SA-04a (1 pt):** Compute the Silhouette of the point x = 3.
**Answer:** a = (|3−1| + |3−2|)/2 = 1.5; b = (|3−8| + |3−9|)/2 = 5.5. s = (5.5 − 1.5)/5.5 ≈ **0.73**, which means strong structure (S > 0.70).

**T2-SA-04b (1 pt):** Compute the Silhouette of the point x = 8.
**Answer:** a = |8−9| = 1; b = (7 + 6 + 5)/3 = 6. s = (6 − 1)/6 ≈ **0.83**.

---

### T2-SA-05 (2 points) — Purity
Clusters vs. real classes (A, B, C):

| Cluster | A  | B  | C | Size |
|---------|----|----|---|------|
| C1      | 18 | 2  | 0 | 20   |
| C2      | 3  | 12 | 5 | 20   |
| C3      | 0  | 1  | 9 | 10   |

**T2-SA-05a (1 pt):** Compute the purity of each cluster.
**Answer:** C1 = 18/20 = 0.90; C2 = 12/20 = 0.60; C3 = 9/10 = 0.90.

**T2-SA-05b (1 pt):** Compute the purity of the partition.
**Answer:** (18 + 12 + 9)/50 = 39/50 = **0.78**.

---

### T2-SA-06 (2 points) — Concept
**T2-SA-06a (1 pt):** Explain how you would choose the number of clusters K when it is unknown.
**Answer:** Run the algorithm for several K values and evaluate each partition with internal indexes: Davies–Bouldin (lower is better), Silhouette (higher, best 1) and Calinski–Harabasz (higher). Other options: BIC/AIC for probabilistic models, MDL/MML for hierarchical clustering, stability analysis, or the advice of a domain expert.

**T2-SA-06b (1 pt):** Give one dataset type where DBSCAN is better than K-means and explain why.
**Answer:** Non-spherical or nested shapes (e.g. two interleaving half-moons or rings) and data with outliers. DBSCAN follows dense regions of any shape and labels noise, while K-means assumes spherical clusters and is pulled by outliers.

---
---

# EXAM: Modular Test 3 (Predicted)

- **exam_id:** T3
- **date:** 10.11.2026
- **scope:** Lectures 7, 9, 10 — Supervised learning, classification (kNN, decision trees, naive Bayes), overfitting and validation, classification metrics, introduction to regression analysis
- **duration_min:** 30
- **total_points:** 28
- **status:** predicted

## Part I: Multiple Choice (13 questions, 1 point each)

### T3-MC-01
- **Type:** MCQ
- **Points:** 1
- **Topic:** supervised learning
- **Difficulty:** easy

**Question:** What is the main difference between supervised and unsupervised learning?

- [ ] A) Supervised learning is always faster
- [ ] B) Unsupervised learning needs more labels
- [x] C) Supervised learning learns from labeled examples to predict labels of new data; unsupervised learning finds structure in unlabeled data
- [ ] D) Supervised learning cannot be evaluated

**Answer:** C
**Explanation:** Supervised learning (classification, regression) is predictive. Unsupervised learning (clustering, pattern mining) is descriptive.

---

### T3-MC-02
- **Type:** MCQ
- **Points:** 1
- **Topic:** classification vs regression
- **Difficulty:** easy

**Question:** Which task is a **regression** problem?

- [x] A) Predicting the price of a house from its features
- [ ] B) Deciding whether an email is spam
- [ ] C) Deciding whether a tumor is benign or malignant
- [ ] D) Recognizing handwritten digits 0–9

**Answer:** A
**Explanation:** Regression predicts a continuous value. B, C and D predict discrete labels (classification).

---

### T3-MC-03
- **Type:** MCQ
- **Points:** 1
- **Topic:** kNN
- **Difficulty:** medium

**Question:** Which statement about k-Nearest Neighbors is correct?

- [ ] A) It builds an explicit model during training
- [ ] B) A larger k always gives a higher training accuracy
- [ ] C) It does not need a distance measure
- [x] D) It is a lazy learner; with k = 1 it has zero training error (for distinct points) and tends to overfit, while a larger k gives a smoother decision boundary

**Answer:** D
**Explanation:** kNN stores the training data and computes at prediction time. Small k means high variance; large k means higher bias.

---

### T3-MC-04
- **Type:** MCQ
- **Points:** 1
- **Topic:** Gini impurity
- **Difficulty:** medium

**Question:** What is the Gini impurity of a node containing 50 % positive and 50 % negative examples?

- [ ] A) 0
- [x] B) 0.5
- [ ] C) 1
- [ ] D) 0.25

**Answer:** B
**Explanation:** Gini = 1 − (0.5² + 0.5²) = 0.5. A pure node has Gini 0.

---

### T3-MC-05
- **Type:** MCQ
- **Points:** 1
- **Topic:** entropy
- **Difficulty:** medium

**Question:** What is the entropy (in bits) of a node containing 50 % positive and 50 % negative examples?

- [x] A) 1
- [ ] B) 0
- [ ] C) 0.5
- [ ] D) 2

**Answer:** A
**Explanation:** H = −0.5 log₂0.5 − 0.5 log₂0.5 = 1. This is the maximum for two classes.

---

### T3-MC-06
- **Type:** MCQ
- **Points:** 1
- **Topic:** overfitting
- **Difficulty:** easy

**Question:** Which situation describes **overfitting**?

- [ ] A) High training error and high test error
- [ ] B) Low training error but the test error is lower still
- [x] C) Very low training error but high test error
- [ ] D) High training error and low test error

**Answer:** C
**Explanation:** The model memorizes the training data (including noise) and does not generalize. A is underfitting.

---

### T3-MC-07
- **Type:** MCQ
- **Points:** 1
- **Topic:** cross-validation
- **Difficulty:** medium

**Question:** What happens in k-fold cross-validation?

- [ ] A) The model is trained k times on the same data and tested on the same data
- [x] B) The data is split into k folds, and each fold is used once as the validation set while the other k − 1 folds are used for training
- [ ] C) Only one fold is used for training and the rest for testing
- [ ] D) The labels are shuffled k times

**Answer:** B
**Explanation:** The k results are averaged, which gives a more stable estimate of generalization performance.

---

### T3-MC-08
- **Type:** MCQ
- **Points:** 1
- **Topic:** imbalanced data
- **Difficulty:** medium

**Question:** A dataset has 99 % negative and 1 % positive examples. A model that always predicts "negative" has 99 % accuracy. What does this show?

- [ ] A) The model is excellent
- [ ] B) The dataset is too small
- [ ] C) Accuracy is always the best metric
- [x] D) Accuracy can be misleading on imbalanced data; recall, precision or F1 should be checked

**Answer:** D
**Explanation:** The model finds none of the positive cases (recall = 0), although its accuracy is high.

---

### T3-MC-09
- **Type:** MCQ
- **Points:** 1
- **Topic:** precision
- **Difficulty:** easy

**Question:** Which formula defines **precision**?

- [x] A) TP / (TP + FP)
- [ ] B) TP / (TP + FN)
- [ ] C) TN / (TN + FP)
- [ ] D) (TP + TN) / N

**Answer:** A
**Explanation:** Precision = of all predicted positives, how many are truly positive. B is recall, C is specificity, D is accuracy.

---

### T3-MC-10
- **Type:** MCQ
- **Points:** 1
- **Topic:** recall
- **Difficulty:** easy

**Question:** Which formula defines **recall** (sensitivity, TPR)?

- [ ] A) TP / (TP + FP)
- [ ] B) TN / (TN + FP)
- [x] C) TP / (TP + FN)
- [ ] D) 2TP / (2TP + FP + FN)

**Answer:** C
**Explanation:** Recall = of all actual positives, how many are found. D is F1.

---

### T3-MC-11
- **Type:** MCQ
- **Points:** 1
- **Topic:** ROC and AUC
- **Difficulty:** medium

**Question:** What is plotted on a ROC curve, and what does AUC = 0.5 mean?

- [ ] A) Precision vs. recall; the model is perfect
- [x] B) True positive rate vs. false positive rate; the classifier is no better than random guessing
- [ ] C) Accuracy vs. the number of features; the model overfits
- [ ] D) Error vs. k; the best k was found

**Answer:** B
**Explanation:** The ROC curve plots TPR (y-axis) against FPR (x-axis) for all thresholds. AUC = 1 is perfect and 0.5 is random.

---

### T3-MC-12
- **Type:** MCQ
- **Points:** 1
- **Topic:** linear regression
- **Difficulty:** medium

**Question:** What does ordinary least squares (OLS) minimize in linear regression?

- [ ] A) The sum of the absolute values of the coefficients
- [ ] B) The number of features
- [ ] C) The largest single residual only
- [x] D) The sum of squared residuals (SSE)

**Answer:** D
**Explanation:** OLS chooses the coefficients that minimize Σ(yᵢ − ŷᵢ)².

---

### T3-MC-13
- **Type:** MCQ
- **Points:** 1
- **Topic:** naive Bayes
- **Difficulty:** medium

**Question:** What is the "naive" assumption of naive Bayes?

- [x] A) The features are conditionally independent given the class
- [ ] B) All classes have the same prior probability
- [ ] C) The features are normally distributed with variance 1
- [ ] D) The labels are independent of the features

**Answer:** A
**Explanation:** P(x₁…xₙ | c) is factorized as ΠP(xᵢ | c), which makes the model simple and fast.

---

## Part II: Short Answer

### T3-SA-01 (4 points) — Confusion matrix
A classifier on 200 examples gives TP = 40, FN = 10, FP = 20, TN = 130.

**T3-SA-01a (1 pt):** Accuracy.
**Answer:** (40 + 130)/200 = **0.85**.

**T3-SA-01b (1 pt):** Precision.
**Answer:** 40/(40 + 20) = **0.667**.

**T3-SA-01c (1 pt):** Recall.
**Answer:** 40/(40 + 10) = **0.80**.

**T3-SA-01d (1 pt):** F1 score.
**Answer:** 2·P·R/(P + R) = 2·0.667·0.8/1.467 ≈ **0.727** (also 2TP/(2TP + FP + FN) = 80/110).

---

### T3-SA-02 (3 points) — Decision tree split
A node has 16 examples: 8 positive and 8 negative. A split on attribute A gives child 1 = (6+, 2−) and child 2 = (2+, 6−).

**T3-SA-02a (1 pt):** Entropy of the parent.
**Answer:** **1 bit**.

**T3-SA-02b (1 pt):** Information gain of the split.
**Answer:** Each child has entropy H(0.75, 0.25) ≈ 0.811. Weighted entropy = 0.811. Gain = 1 − 0.811 ≈ **0.189 bits**.

**T3-SA-02c (1 pt):** Gini of the parent and the Gini gain of the split.
**Answer:** Parent Gini = 0.5. Each child Gini = 1 − (0.75² + 0.25²) = 0.375. Weighted = 0.375. Gain = 0.5 − 0.375 = **0.125**.

---

### T3-SA-03 (3 points) — kNN
1D training data: 1 (A), 2 (A), 3 (A), 6 (B), 7 (B), 8 (A). Classify the query x = 5.2 with Euclidean distance.

**T3-SA-03a (1 pt):** Result for k = 1.
**Answer:** Nearest is 6 (distance 0.8) → **B**.

**T3-SA-03b (1 pt):** Result for k = 3.
**Answer:** Three nearest: 6 (B), 7 (B), 3 (A) → majority **B**.

**T3-SA-03c (1 pt):** Result for k = 5, and why the prediction changes.
**Answer:** Five nearest: 6 (B), 7 (B), 3 (A), 8 (A), 2 (A) → majority **A**. A larger k includes farther points and the decision becomes smoother. k controls the bias–variance trade-off.

---

### T3-SA-04 (3 points) — Simple linear regression
x = {1, 2, 3, 4}, y = {2, 3, 5, 6}.

**T3-SA-04a (2 pts):** Find the OLS line ŷ = b0 + b1·x.
**Answer:** mean x = 2.5, mean y = 4. Sxy = 7, Sxx = 5 → b1 = 7/5 = **1.4**, b0 = 4 − 1.4·2.5 = **0.5**. So ŷ = 0.5 + 1.4x.

**T3-SA-04b (1 pt):** Predict y for x = 5, and compute the SSE on the training data.
**Answer:** ŷ(5) = 0.5 + 7 = **7.5**. Fitted values: 1.9, 3.3, 4.7, 6.1 → residuals 0.1, −0.3, 0.3, −0.1 → SSE = 0.01 + 0.09 + 0.09 + 0.01 = **0.20**.

---

### T3-SA-05 (2 points) — Concept
**T3-SA-05a (1 pt):** Why do we split data into training, validation and test sets?
**Answer:** The training set fits the model, the validation set tunes hyperparameters (e.g. k, tree depth), and the test set gives an unbiased estimate of performance on unseen data. Evaluating on training data hides overfitting.

**T3-SA-05b (1 pt):** Name two ways to reduce overfitting in a decision tree.
**Answer:** Limit the maximum depth, set a minimum number of samples per leaf or split, prune the tree, or use cross-validation to select these parameters.

---
---

# EXAM: Modular Test 4 (Predicted)

- **exam_id:** T4
- **date:** 01.12.2026
- **scope:** Lectures 11–12 — Evaluation metrics for regression, regularization (Ridge, Lasso, Elastic Net), bias–variance trade-off
- **duration_min:** 30
- **total_points:** 25
- **status:** predicted

## Part I: Multiple Choice (13 questions, 1 point each)

### T4-MC-01
- **Type:** MCQ
- **Points:** 1
- **Topic:** MAE
- **Difficulty:** easy

**Question:** What does the Mean Absolute Error (MAE) compute?

- [x] A) The average of the absolute differences between actual and predicted values
- [ ] B) The average of the squared differences
- [ ] C) The square root of the average squared difference
- [ ] D) The proportion of variance explained by the model

**Answer:** A
**Explanation:** MAE = (1/n) Σ |yᵢ − ŷᵢ|. B is MSE, C is RMSE, D is R².

---

### T4-MC-02
- **Type:** MCQ
- **Points:** 1
- **Topic:** RMSE
- **Difficulty:** easy

**Question:** Why is RMSE often preferred over MSE for reporting?

- [ ] A) It is always smaller than MAE
- [ ] B) It ignores outliers
- [x] C) It is in the same units as the target variable, so it is easier to interpret
- [ ] D) It is always between 0 and 1

**Answer:** C
**Explanation:** MSE has squared units; taking the square root brings the error back to the original units.

---

### T4-MC-03
- **Type:** MCQ
- **Points:** 1
- **Topic:** R²
- **Difficulty:** medium

**Question:** Which statement about R² (coefficient of determination) is correct?

- [ ] A) It must always be between 0 and 1
- [x] B) R² = 1 − SSE/SST; it can be negative when evaluated on test data if the model is worse than predicting the mean
- [ ] C) A higher R² on training data always means a better model on new data
- [ ] D) It measures the average absolute error

**Answer:** B
**Explanation:** R² compares the model with a baseline that always predicts the mean. A model worse than this baseline gives R² < 0.

---

### T4-MC-04
- **Type:** MCQ
- **Points:** 1
- **Topic:** MSE vs MAE
- **Difficulty:** medium

**Question:** Which statement comparing MSE and MAE is correct?

- [ ] A) MAE penalizes large errors more than MSE
- [ ] B) They are always equal
- [ ] C) MSE is never differentiable
- [x] D) MSE is more sensitive to outliers because errors are squared

**Answer:** D
**Explanation:** One large error dominates MSE. MAE grows linearly with the error and is more robust.

---

### T4-MC-05
- **Type:** MCQ
- **Points:** 1
- **Topic:** Ridge
- **Difficulty:** medium

**Question:** What does Ridge regression add to the least-squares cost function?

- [x] A) An L2 penalty λ·Σwⱼ², which shrinks the coefficients toward zero but usually does not set them exactly to zero
- [ ] B) An L1 penalty λ·Σ|wⱼ|, which sets many coefficients exactly to zero
- [ ] C) A penalty on the number of training examples
- [ ] D) A penalty that increases the variance

**Answer:** A
**Explanation:** Ridge reduces variance by shrinking the weights. The L1 penalty in B is Lasso.

---

### T4-MC-06
- **Type:** MCQ
- **Points:** 1
- **Topic:** Lasso
- **Difficulty:** medium

**Question:** Why can Lasso be used for feature selection?

- [ ] A) It adds new features automatically
- [ ] B) It uses an L2 penalty that keeps all features
- [x] C) Its L1 penalty can drive some coefficients exactly to zero, so those features are removed from the model
- [ ] D) It removes all outliers from the data

**Answer:** C
**Explanation:** The L1 penalty has a "corner" at zero that produces sparse solutions.

---

### T4-MC-07
- **Type:** MCQ
- **Points:** 1
- **Topic:** Elastic Net
- **Difficulty:** medium

**Question:** What is Elastic Net?

- [ ] A) A neural network for regression
- [x] B) A regression that combines the L1 and L2 penalties
- [ ] C) A clustering method
- [ ] D) A regression without any penalty

**Answer:** B
**Explanation:** Elastic Net mixes Lasso and Ridge, which helps with correlated features while still giving sparsity.

---

### T4-MC-08
- **Type:** MCQ
- **Points:** 1
- **Topic:** regularization strength
- **Difficulty:** medium

**Question:** What happens when the regularization strength λ becomes very large?

- [ ] A) The model becomes identical to OLS
- [ ] B) The model overfits strongly
- [ ] C) The training error becomes exactly zero
- [x] D) The coefficients are shrunk heavily toward zero and the model underfits (high bias)

**Answer:** D
**Explanation:** λ = 0 gives OLS. A very large λ forces the weights to be nearly zero, so the model is too simple.

---

### T4-MC-09
- **Type:** MCQ
- **Points:** 1
- **Topic:** bias–variance
- **Difficulty:** medium

**Question:** A polynomial regression of very high degree fits the training points almost perfectly. What is the likely situation?

- [x] A) Low bias, high variance (overfitting)
- [ ] B) High bias, low variance (underfitting)
- [ ] C) High bias, high variance
- [ ] D) Low bias, low variance

**Answer:** A
**Explanation:** A flexible model follows the noise of the training set, so predictions change a lot with different training samples.

---

### T4-MC-10
- **Type:** MCQ
- **Points:** 1
- **Topic:** feature scaling
- **Difficulty:** medium

**Question:** Why should features be standardized before applying Ridge or Lasso?

- [ ] A) Because the penalty only works on integer data
- [ ] B) Because it increases the number of features
- [x] C) Because the penalty depends on the size of the coefficients, which depends on the feature scale; unscaled features are penalized unequally
- [ ] D) Because it removes the need for a test set

**Answer:** C
**Explanation:** A feature measured in small units needs a large coefficient and would be penalized more heavily, which is unfair.

---

### T4-MC-11
- **Type:** MCQ
- **Points:** 1
- **Topic:** adjusted R²
- **Difficulty:** medium

**Question:** Why is adjusted R² sometimes preferred over R² when comparing models?

- [ ] A) It is always larger than R²
- [x] B) It penalizes adding predictors that do not improve the model, while R² never decreases when features are added
- [ ] C) It is computed on the test set only
- [ ] D) It ignores the number of observations

**Answer:** B
**Explanation:** Adjusted R² corrects for the number of predictors, so it can decrease when a useless feature is added.

---

### T4-MC-12
- **Type:** MCQ
- **Points:** 1
- **Topic:** multicollinearity
- **Difficulty:** medium

**Question:** What is a typical problem of multicollinearity (highly correlated features) in linear regression, and which method helps?

- [ ] A) The training error becomes infinite; nothing helps
- [ ] B) The model becomes biased toward the intercept; use more clusters
- [ ] C) The model cannot make predictions; remove all features
- [x] D) The coefficient estimates become unstable with high variance; Ridge regularization helps

**Answer:** D
**Explanation:** With correlated features, small changes in the data change the coefficients a lot. The L2 penalty stabilizes them.

---

### T4-MC-13
- **Type:** MCQ
- **Points:** 1
- **Topic:** training error vs λ
- **Difficulty:** medium

**Question:** What typically happens to the **training** error as λ increases?

- [x] A) It increases (or stays equal), because the model is constrained
- [ ] B) It decreases to zero
- [ ] C) It becomes negative
- [ ] D) It is not affected at all

**Answer:** A
**Explanation:** Regularization trades a worse fit on training data for better generalization. The validation error is usually U-shaped in λ.

---

## Part II: Short Answer

### T4-SA-01 (4 points) — Regression metrics
Actual y = [3, 5, 2, 7], predicted ŷ = [2, 6, 2, 9].

**T4-SA-01a (1 pt):** MAE.
**Answer:** Absolute errors 1, 1, 0, 2 → MAE = 4/4 = **1**.

**T4-SA-01b (1 pt):** MSE.
**Answer:** Squared errors 1, 1, 0, 4 → MSE = 6/4 = **1.5**.

**T4-SA-01c (1 pt):** RMSE.
**Answer:** √1.5 ≈ **1.225**.

**T4-SA-01d (1 pt):** R².
**Answer:** mean y = 4.25; SST = 1.5625 + 0.5625 + 5.0625 + 7.5625 = 14.75; SSE = 6. R² = 1 − 6/14.75 ≈ **0.593**.

---

### T4-SA-02 (2 points) — Penalized cost
A model has weights w = [3, −2] (intercept not penalized), training MSE = 1.2 and λ = 0.5.

**T4-SA-02a (1 pt):** Compute the Ridge cost J = MSE + λ·Σw².
**Answer:** 1.2 + 0.5·(9 + 4) = 1.2 + 6.5 = **7.7**.

**T4-SA-02b (1 pt):** Compute the Lasso cost J = MSE + λ·Σ|w|.
**Answer:** 1.2 + 0.5·(3 + 2) = 1.2 + 2.5 = **3.7**.

---

### T4-SA-03 (3 points) — Ridge shrinkage
One feature, no intercept: x = [1, 2, 3], y = [2, 4, 6]. The Ridge solution is w = Σxy / (Σx² + λ).

**T4-SA-03a (1 pt):** Find w for λ = 0 (OLS).
**Answer:** Σxy = 2 + 8 + 18 = 28, Σx² = 14 → w = 28/14 = **2**.

**T4-SA-03b (1 pt):** Find w for λ = 14.
**Answer:** w = 28 / (14 + 14) = **1**. The coefficient is shrunk by half.

**T4-SA-03c (1 pt):** What happens as λ → ∞?
**Answer:** w → **0**. The model predicts a constant (it underfits with high bias).

---

### T4-SA-04 (3 points) — Diagnosis and concepts
**T4-SA-04a (1 pt):** Model A has training error 0.1 and validation error 2.5. Model B has training error 3.0 and validation error 3.1. Diagnose both.
**Answer:** Model A overfits (low bias, high variance). Model B underfits (high bias).

**T4-SA-04b (1 pt):** What would you try for each model?
**Answer:** Model A: increase λ, reduce model complexity (fewer features or lower polynomial degree), or get more data. Model B: decrease λ, add features or use a more flexible model.

**T4-SA-04c (1 pt):** When would you choose Lasso over Ridge?
**Answer:** When you suspect that many features are irrelevant and want a sparse, interpretable model (automatic feature selection). Ridge is better when many features each have a small effect or features are strongly correlated.
