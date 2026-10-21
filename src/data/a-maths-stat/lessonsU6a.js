// A Level Statistics lessons (0770), Upper Sixth (part 1): measures of
// central tendency and of dispersion, the presentation of data, correlation
// and regression, and discrete random variables. Original text written for
// this app; every data set is made up for teaching.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Paper 1 and Paper 2',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_S6A = [
  // ---------- 9. Measures of central tendency ----------
  L('st-ct-1', 'ms-u6-central-tendency', '9.1', 'Mean, median and mode; frequency distributions and coding', 16, ['Statistics'], [
    'The **mean** x̄ = Σx/n uses every value; the **median** is the middle value of the ordered data (the mean of the middle two when n is even); the **mode** is the most frequent value. For a frequency distribution, **x̄ = Σfx ÷ Σf**.',
    'Choosing an average: the mean is pulled by extreme values (outliers) but the median is not; the mode suits non-numerical data or questions about the most common size.',
    '**Coding**: if y = (x − a)/b, then **x̄ = a + bȳ**. Taking a near the middle of the data and b as the common gap keeps the arithmetic small.',
  ], 'am-frequency-bars', 'For a frequency table, multiply each value by its frequency before adding.',
  ['The mean of 4, 8, 15 and 13 is:', ['10', '8', '11', '40'], '40 ÷ 4.'],
  [['Mean', 'The sum of the values divided by their number.'], ['Median', 'The middle value of the ordered data.'], ['Mode', 'The value that occurs most often.']],
  [
    { q: 'The numbers of children in 20 families: 0 (2 families), 1 (5), 2 (7), 3 (4), 4 (2). Find the mean, median and mode.', steps: ['Σf = 20 and Σfx = 0 + 5 + 14 + 12 + 8 = 39, so the mean is **1.95**.', 'The median is the mean of the 10th and 11th values; the cumulative frequencies are 2, 7, 14, …, so both are 2: **median 2**.', 'The most frequent value is 2: **mode 2**.'] },
    { q: 'Using y = (x − 150)/5, the values 140, 145, 150, 160, 165 become −2, −1, 0, 2, 3. Find x̄.', steps: ['ȳ = 2 ÷ 5 = 0.4.', 'x̄ = 150 + 5 × 0.4.', '**x̄ = 152** (check: 760 ÷ 5 = 152 ✓).'] },
  ]),

  L('st-ct-2', 'ms-u6-central-tendency', '9.2', 'Grouped data: the estimated mean, the median and the modal class', 17, ['Statistics'], [
    'Grouping loses the exact values. Each class has **boundaries** (for the whole-number class 20–29 they are 19.5 and 29.5), a **width** and a **mid-point** (24.5). The **estimated mean** is Σfx ÷ Σf with x the mid-points.',
    '**Median by interpolation**: find the median class, the one containing the (n/2)th value; then **median ≈ L + ((n/2 − F) ÷ f) × w**, where L is the lower boundary of the median class, F the cumulative frequency before it, f its frequency and w its width. The quartiles come the same way from n/4 and 3n/4.',
    'The **modal class** is the class with the greatest frequency density. Estimates from grouped data assume that the values are spread evenly within each class.',
  ], 'am-grouped-median', 'Find the median class from the cumulative frequencies first.',
  ['The mid-point of the class 30 ≤ x < 40 is:', ['35', '30', '40', '34.5'], 'Half-way between the boundaries.'],
  [['Class boundaries', 'The values that separate neighbouring classes.'], ['Mid-point', 'The value half-way between the boundaries of a class.'], ['Interpolation', 'Estimating a value inside a class by assuming an even spread.']],
  [
    { q: 'The masses (kg) of 50 students: 40–50: 6, 50–60: 14, 60–70: 20, 70–80: 8, 80–90: 2. Estimate the mean.', steps: ['Mid-points 45, 55, 65, 75, 85; Σfx = 270 + 770 + 1300 + 600 + 170 = 3110.', 'Σf = 50.', 'Estimated mean = **62.2 kg**.'] },
    { q: 'Estimate the median and quartiles of the same masses.', steps: ['Cumulative frequencies 6, 20, 40, 48, 50: the 25th value is in 60–70.', 'Median ≈ 60 + ((25 − 20) ÷ 20) × 10 = **62.5 kg**; Q₁ ≈ 50 + ((12.5 − 6) ÷ 14) × 10 = 54.6 kg; Q₃ ≈ 60 + ((37.5 − 20) ÷ 20) × 10 = 68.75 kg.', 'The modal class is **60–70 kg**.'] },
  ]),

  // ---------- 10. Dispersion and presentation ----------
  L('st-disp-1', 'ms-u6-dispersion', '10.1', 'Range, quartiles, variance and standard deviation', 17, ['Statistics'], [
    'The **range** (largest − smallest) depends only on the two extremes. The **quartiles** Q₁, Q₂ (the median) and Q₃ split the ordered data into four equal parts, and the **interquartile range** Q₃ − Q₁ is the spread of the middle half, unaffected by outliers.',
    'The **variance** is the mean of the squared deviations from the mean: **σ² = Σ(x − x̄)²/n = Σx²/n − x̄²**; for a frequency distribution, Σfx²/Σf − x̄². The **standard deviation** σ is its square root, in the same units as the data.',
    'Coding: adding a constant to every value does not change the spread; multiplying every value by b multiplies the standard deviation by |b|. So if y = (x − a)/b, then σₓ = |b|σᵧ.',
  ], 'am-boxplot', 'Variance: the mean of the squares minus the square of the mean.',
  ['The variance of 1, 2, 3, 4, 5 is:', ['2', '√2', '3', '10'], 'Σx²/n − x̄² = 55/5 − 9.'],
  [['Interquartile range', 'Q₃ − Q₁, the spread of the middle half of the data.'], ['Variance', 'The mean squared deviation from the mean.'], ['Standard deviation', 'The square root of the variance.']],
  [
    { q: 'Find the mean and standard deviation of 5, 7, 8, 9, 11.', steps: ['x̄ = 40 ÷ 5 = 8.', 'Σx² = 25 + 49 + 64 + 81 + 121 = 340, so σ² = 340/5 − 8² = 4.', '**x̄ = 8, σ = 2**.'] },
    { q: 'Estimate the standard deviation of the grouped masses (mean 62.2 kg).', steps: ['Σfx² = 6 × 45² + 14 × 55² + 20 × 65² + 8 × 75² + 2 × 85² = 198 450.', 'σ² = 198 450 ÷ 50 − 62.2² = 3969 − 3868.84 = 100.16.', '**σ ≈ 10.0 kg**.'] },
  ]),

  L('st-disp-2', 'ms-u6-dispersion', '10.2', 'Histograms, cumulative frequency, box plots and skewness', 17, ['Statistics'], [
    'In a **histogram** the **area** of each bar represents the frequency, so when the classes have unequal widths the height is the **frequency density = frequency ÷ class width**.',
    'A **cumulative frequency curve** (ogive) plots cumulative frequency against the **upper class boundaries**; the median and quartiles are read at n/2, n/4 and 3n/4. A **box plot** shows the minimum, Q₁, the median, Q₃ and the maximum. A **stem-and-leaf diagram** keeps every value while showing the shape: 4 | 2 7 means 42 and 47.',
    '**Skewness**: a distribution with a long tail to the right is **positively skewed** and usually has mean > median > mode; negative skew is the reverse. **Pearson’s coefficient of skewness** is 3(mean − median) ÷ standard deviation.',
  ], 'am-histogram', 'With unequal widths, plot frequency density, never frequency.',
  ['A class of width 5 with frequency 20 has frequency density:', ['4', '100', '25', '0.25'], '20 ÷ 5.'],
  [['Frequency density', 'Frequency ÷ class width, the height of a histogram bar.'], ['Ogive', 'A cumulative frequency curve.'], ['Skewness', 'The lack of symmetry of a distribution.']],
  [
    { q: 'Waiting times (minutes): 0–10: 10, 10–15: 15, 15–20: 20, 20–30: 10, 30–50: 8. Find the frequency densities for a histogram.', steps: ['Widths 10, 5, 5, 10, 20.', 'Densities: 10 ÷ 10, 15 ÷ 5, 20 ÷ 5, 10 ÷ 10, 8 ÷ 20.', '**1, 3, 4, 1 and 0.4** people per minute.'] },
    { q: 'For the masses, the mean is 62.2 kg, the median 62.5 kg and the standard deviation 10.0 kg. Find Pearson’s coefficient of skewness.', steps: ['3(mean − median) ÷ σ = 3(62.2 − 62.5) ÷ 10.0.', '= −0.09.', 'The distribution is **almost symmetrical**, very slightly negatively skewed.'] },
  ]),

  // ---------- 11. Correlation and regression ----------
  L('st-biv-1', 'ms-u6-bivariate', '11.1', 'Scatter diagrams and the product-moment correlation coefficient', 17, ['Statistics'], [
    'A **scatter diagram** plots pairs of values (x, y). Points close to a rising line show **positive correlation**, close to a falling line **negative correlation**; a shapeless cloud shows little or no correlation.',
    'With **Sxx = Σx² − (Σx)²/n**, **Syy = Σy² − (Σy)²/n** and **Sxy = Σxy − (Σx)(Σy)/n**, the **product-moment correlation coefficient** is **r = Sxy ÷ √(Sxx Syy)**, with −1 ≤ r ≤ 1. Values near 1 or −1 mean strong linear correlation; values near 0, little linear correlation.',
    'Correlation does not prove causation: both variables may depend on a third. And r measures only **linear** association; a strong curved pattern can still give r near 0.',
  ], 'am-correlation-types', 'Find Sxx, Syy and Sxy first; r follows in one line.',
  ['r = 0.12 suggests:', ['very little linear correlation', 'strong positive correlation', 'strong negative correlation', 'a perfect fit'], 'Close to 0.'],
  [['Scatter diagram', 'A plot of paired values as points.'], ['Correlation', 'The strength of the linear relationship between two variables.'], ['Product-moment correlation coefficient', 'r = Sxy ÷ √(Sxx Syy).']],
  [
    { q: 'Hours of study x and marks y for six students: (2, 40), (4, 50), (5, 58), (7, 65), (8, 70), (10, 82). Find r.', steps: ['n = 6: Σx = 36, Σy = 365, Σx² = 258, Σy² = 23 313, Σxy = 2405.', 'Sxx = 258 − 36²/6 = 42; Syy = 23 313 − 365²/6 = 1108.8; Sxy = 2405 − 36 × 365/6 = 215.', 'r = 215 ÷ √(42 × 1108.8) = **0.996**: very strong positive correlation.'] },
  ]),

  L('st-biv-2', 'ms-u6-bivariate', '11.2', 'Spearman’s rank correlation and regression lines', 17, ['Statistics'], [
    '**Spearman’s rank correlation coefficient**: rank each variable (1 for the largest, consistently for both), find the difference d between the two ranks of each item, then **rₛ = 1 − 6Σd² ÷ (n(n² − 1))**. It measures how well the two orders agree, and suits data that are already ranks, such as judges’ placings.',
    'The **least-squares regression line of y on x**, y = a + bx, makes the sum of the squared vertical distances from the points as small as possible: **b = Sxy/Sxx** and **a = ȳ − bx̄**, so it passes through (x̄, ȳ). Use it to estimate y from x; to estimate x from y, use the line of x on y, with gradient Sxy/Syy.',
    'Estimates inside the range of the data (**interpolation**) are reasonable when the correlation is strong; estimates outside it (**extrapolation**) are unreliable, because the pattern may not continue.',
  ], 'am-scatter', 'A regression line always passes through the mean point (x̄, ȳ).',
  ['The regression line y = 30.1 + 5.12x predicts, for x = 6:', ['60.8', '35.2', '30.7', '66.1'], '30.1 + 30.72.'],
  [['Rank', 'The position of an item in an ordered list.'], ['Regression line', 'The least-squares line used to predict one variable from another.'], ['Extrapolation', 'Predicting outside the range of the data.']],
  [
    { q: 'Find the regression line of y on x for the study data (x̄ = 6, ȳ = 60.83, Sxx = 42, Sxy = 215), and estimate the mark for 6 hours.', steps: ['b = 215 ÷ 42 = 5.12.', 'a = 60.83 − 5.12 × 6 = 30.1, so y = 30.1 + 5.12x.', 'For x = 6: **y ≈ 60.8 marks**; each extra hour adds about 5 marks.'] },
    { q: 'Two judges rank five dancers: judge A 1, 2, 3, 4, 5; judge B 2, 1, 4, 3, 5. Find rₛ.', steps: ['d = −1, 1, −1, 1, 0, so Σd² = 4.', 'rₛ = 1 − 6 × 4 ÷ (5 × 24).', '**rₛ = 0.8**: the judges largely agree.'] },
  ]),

  // ---------- 13. Discrete random variables ----------
  L('st-drv-1', 'ms-u6-discrete-rv', '13.1', 'Probability distributions and expectation', 16, ['Probability'], [
    'A **discrete random variable** X takes separate values with probabilities P(X = x). Its **probability distribution** lists them; the probabilities are never negative and **add up to 1**. The **cumulative distribution function** is F(x) = P(X ≤ x).',
    'The **expectation** (mean) is **E(X) = Σ x P(X = x)**, the long-run average value of X. More generally E(g(X)) = Σ g(x) P(X = x); for example E(X²) = Σ x² P(X = x).',
    'Example: a fair die has E(X) = (1 + 2 + … + 6)/6 = 3.5. A game that pays 1000 FCFA with probability 0.1 and costs 150 FCFA to play has expected gain 100 − 150 = −50 FCFA per game: in the long run, players lose.',
  ], 'am-pmf', 'Check first that the probabilities add up to 1.',
  ['If P(X = 1) = 0.3 and P(X = 2) = 0.7, then E(X) =', ['1.7', '1.5', '2', '0.7'], '0.3 + 1.4.'],
  [['Random variable', 'A quantity whose value is decided by chance.'], ['Probability distribution', 'The list of values and their probabilities.'], ['Expectation', 'E(X) = Σ x P(X = x), the long-run mean.']],
  [
    { q: 'X has P(X = x) = kx for x = 1, 2, 3, 4. Find k and E(X).', steps: ['k(1 + 2 + 3 + 4) = 10k = 1, so k = 0.1.', 'E(X) = 0.1(1 × 1 + 2 × 2 + 3 × 3 + 4 × 4) = 0.1 × 30.', '**k = 0.1, E(X) = 3**.'] },
    { q: 'Two fair coins are tossed and X is the number of heads. Find the distribution of X and P(X ≤ 1).', steps: ['P(X = 0) = ¼, P(X = 1) = ½, P(X = 2) = ¼.', 'P(X ≤ 1) = ¼ + ½.', '**P(X ≤ 1) = ¾**.'] },
  ]),

  L('st-drv-2', 'ms-u6-discrete-rv', '13.2', 'Variance and the rules for aX + b', 16, ['Probability'], [
    'The **variance** is **Var(X) = E(X²) − [E(X)]²**, the mean of the squares minus the square of the mean; the standard deviation is √Var(X).',
    'Rules: **E(aX + b) = aE(X) + b** and **Var(aX + b) = a²Var(X)**: adding a constant moves the distribution without changing its spread. For two random variables, E(X + Y) = E(X) + E(Y), and if X and Y are independent, **Var(X ± Y) = Var(X) + Var(Y)**.',
    'Example: for a fair die, E(X²) = 91/6, so Var(X) = 91/6 − 3.5² = 35/12 ≈ 2.92.',
  ], 'am-pmf', 'Constants added do not change the variance; multipliers come out squared.',
  ['If Var(X) = 4, then Var(3X − 2) =', ['36', '12', '10', '34'], '3² × 4.'],
  [['Variance', 'Var(X) = E(X²) − [E(X)]².'], ['Linear transformation', 'Y = aX + b.'], ['Independent variables', 'Random variables whose values do not affect each other.']],
  [
    { q: 'For P(X = x) = 0.1x (x = 1, 2, 3, 4), find Var(X).', steps: ['E(X) = 3 and E(X²) = 0.1(1 + 8 + 27 + 64) = 10.', 'Var(X) = 10 − 3².', '**Var(X) = 1**.'] },
    { q: 'A shop’s daily profit is Y = 500X − 2000 FCFA, where X items are sold, with E(X) = 12 and Var(X) = 9. Find E(Y) and the standard deviation of Y.', steps: ['E(Y) = 500 × 12 − 2000 = **4000 FCFA**.', 'Var(Y) = 500² × 9 = 2 250 000.', 'Standard deviation = **1500 FCFA**.'] },
  ]),
];
