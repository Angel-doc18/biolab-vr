// Extra questions for the end of the A Level Statistics lessons (0770), so
// that every lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'st-ct-1': [
    Q('The median of 3, 8, 1, 9, 5 is:', ['5', '8', '3', '5.2'], 'In order 1, 3, 5, 8, 9.'),
    Q('The values 1, 2 and 3 have frequencies 2, 3 and 5. The mean is:', ['2.3', '2', '3', '6'], 'Σfx = 2 + 6 + 15 = 23, Σf = 10.'),
    Q('An outlier affects which average most?', ['the mean', 'the median', 'the mode', 'all equally'], 'The mean uses every value.'),
  ],
  'st-ct-2': [
    Q('The boundaries of the whole-number class 20–29 are:', ['19.5 and 29.5', '20 and 29', '20 and 30', '19 and 30'], 'Half-way to the neighbouring classes.'),
    Q('In the median formula L + ((n/2 − F)/f) × w, F is:', ['the cumulative frequency before the median class', 'the frequency of the median class', 'the total frequency', 'the class width'], 'Values already counted.'),
    Q('The estimated mean of grouped data uses:', ['the class mid-points', 'the lower boundaries', 'the upper boundaries', 'the widths'], 'Each class is represented by its middle.'),
  ],
  'st-disp-1': [
    Q('The interquartile range is not affected by:', ['a few extreme values', 'the median', 'the middle half of the data', 'Q₁'], 'It uses only the middle half.'),
    Q('If σ² = 16, then σ =', ['4', '16', '8', '256'], 'The square root.'),
    Q('If every value is doubled, the variance is multiplied by:', ['4', '2', '1', '½'], 'The standard deviation doubles.'),
  ],
  'st-disp-2': [
    Q('On a histogram the frequency of a class is shown by:', ['the area of its bar', 'the height of its bar', 'the width of its bar', 'its mid-point'], 'Area = frequency density × width.'),
    Q('A box plot shows:', ['the minimum, quartiles, median and maximum', 'every value', 'the mean and standard deviation', 'the frequencies'], 'A five-number summary.'),
    Q('A long tail to the left means the distribution is:', ['negatively skewed', 'positively skewed', 'symmetrical', 'bimodal'], 'Mean < median usually.'),
  ],
  'st-biv-1': [
    Q('Points close to a falling straight line show:', ['negative correlation', 'positive correlation', 'no correlation', 'a curve'], 'As x rises, y falls.'),
    Q('Syy equals:', ['Σy² − (Σy)²/n', 'Σy²', '(Σy)²', 'Σxy'], 'The corrected sum of squares.'),
    Q('r = 0 means:', ['no linear correlation', 'no relationship of any kind', 'perfect correlation', 'the data are wrong'], 'A curved relation is still possible.'),
  ],
  'st-biv-2': [
    Q('With n = 5 and Σd² = 0, Spearman’s coefficient is:', ['1', '0', '−1', '0.5'], 'The rankings agree completely.'),
    Q('To estimate x from a given y you use:', ['the regression line of x on y', 'the line of y on x', 'r', 'Spearman’s coefficient'], 'Each line is made for one direction.'),
    Q('The intercept of the regression line of y on x is:', ['a = ȳ − bx̄', 'a = x̄ − bȳ', 'a = b', 'a = r'], 'The line passes through (x̄, ȳ).'),
  ],
  'st-drv-1': [
    Q('If P(X = 0) = 0.4 and P(X = 1) = 0.6, then E(X) =', ['0.6', '0.4', '1', '0.5'], '0 × 0.4 + 1 × 0.6.'),
    Q('E(X²) is found as:', ['Σ x² P(X = x)', '[E(X)]²', 'Σ x P(X = x)²', 'E(X) × 2'], 'Square the values, not the probabilities.'),
    Q('F(x) for a discrete variable is:', ['P(X ≤ x)', 'P(X = x)', 'P(X > x)', 'E(X)'], 'The probabilities added up to x.'),
  ],
  'st-drv-2': [
    Q('Var(X + 5) equals:', ['Var(X)', 'Var(X) + 5', 'Var(X) + 25', '5Var(X)'], 'Shifting does not change the spread.'),
    Q('For independent X and Y, Var(X − Y) =', ['Var(X) + Var(Y)', 'Var(X) − Var(Y)', '0', 'Var(X)Var(Y)'], 'Variances add, even for a difference.'),
    Q('E(3X) with E(X) = 4 is:', ['12', '4', '7', '36'], 'Multiply the mean by 3.'),
  ],
  'st-bin-1': [
    Q('For X ~ B(6, 0.5), P(X = 3) =', ['20/64', '1/2', '3/6', '6/64'], '6C3 × (½)⁶ = 20/64.'),
    Q('P(at least one success) in B(n, p) is:', ['1 − (1 − p)ⁿ', 'np', 'pⁿ', '1 − pⁿ'], 'The complement of no successes.'),
    Q('Var(X) for B(20, 0.5) is:', ['5', '10', '2.5', '20'], 'np(1 − p) = 20 × 0.25.'),
  ],
  'st-poi-1': [
    Q('For X ~ Po(3), Var(X) =', ['3', '9', '√3', '1.5'], 'The mean and variance are equal.'),
    Q('If X ~ Po(2) and Y ~ Po(3) are independent, X + Y ~', ['Po(5)', 'Po(6)', 'Po(1)', 'B(5, 0.5)'], 'Rates add.'),
    Q('For X ~ Po(λ), P(X = 0) =', ['e^(−λ)', 'λ', '1 − e^(−λ)', '0'], 'λ⁰/0! = 1.'),
  ],
  'st-crv-1': [
    Q('The total area under a density curve is:', ['1', '0', 'the mean', 'unlimited'], 'The total probability.'),
    Q('If F(x) = x²/4 on [0, 2], then f(x) =', ['x/2', 'x²/4', 'x³/12', '2x'], 'f = F′.'),
    Q('For a continuous variable, P(X ≤ 1) and P(X < 1) are:', ['equal', 'different', 'both 0', 'both 1'], 'A single point has probability 0.'),
  ],
  'st-crv-2': [
    Q('The lower quartile q satisfies:', ['F(q) = ¼', 'F(q) = ½', 'f(q) = ¼', 'q = E(X)/4'], 'A quarter of the area lies below q.'),
    Q('E(X²) for f(x) = ½ on [0, 2] is:', ['4/3', '1', '2', '½'], '∫ x²/2 dx from 0 to 2 = 8/6.'),
    Q('For a density that rises over its whole range, the mode is:', ['at the right-hand end', 'at the left-hand end', 'in the middle', 'at the mean'], 'Where f is largest.'),
  ],
  'st-norm-1': [
    Q('If X ~ N(100, 15²), P(X > 100) =', ['0.5', '0', '1', '0.8413'], 'The mean is the centre of symmetry.'),
    Q('Φ(−1.5) equals:', ['1 − Φ(1.5) = 0.0668', 'Φ(1.5)', '−0.9332', '0.5'], 'By symmetry.'),
    Q('About what proportion of a normal population lies within one standard deviation of the mean?', ['68%', '95%', '50%', '99.7%'], 'Φ(1) − Φ(−1) = 0.6826.'),
  ],
  'st-norm-2': [
    Q('If P(Z < z) = 0.975, then z =', ['1.96', '1.645', '2.576', '0.975'], 'From the table, backwards.'),
    Q('With a continuity correction, P(X ≥ 30) for a binomial X becomes:', ['P(Y > 29.5)', 'P(Y > 30.5)', 'P(Y > 30)', 'P(Y < 29.5)'], '30 is included.'),
    Q('B(100, 0.4) is approximated by:', ['N(40, 24)', 'N(40, 40)', 'N(100, 0.4)', 'Po(40)'], 'np = 40, np(1 − p) = 24.'),
  ],
  'st-samp-1': [
    Q('As the sample size grows, the standard error:', ['decreases', 'increases', 'stays the same', 'becomes σ'], 'It is σ/√n.'),
    Q('For samples of size 50 from any population with mean 20 and σ = 5, X̄ is approximately:', ['N(20, 0.5)', 'N(20, 25)', 'N(20, 5)', 'N(0, 1)'], 'Variance σ²/n = 25/50.'),
    Q('A sample chosen only from volunteers may be:', ['biased', 'random', 'unbiased', 'the population'], 'Volunteers may differ from the rest.'),
  ],
  'st-samp-2': [
    Q('s² equals n/(n − 1) times:', ['the sample variance with divisor n', 'the mean', 'the standard error', 'σ'], 'A slight enlargement.'),
    Q('An unbiased estimate of μ is:', ['x̄', 's²', 'n', 'σ/√n'], 'The sample mean.'),
    Q('The estimated standard error of the mean is:', ['s/√n', 's²/n', 's', '√n/s'], 's replaces σ.'),
  ],
  'st-hyp-1': [
    Q('The z value for a 99% confidence interval is:', ['2.576', '1.96', '1.645', '3'], 'Φ(2.576) = 0.995.'),
    Q('Quadrupling the sample size makes a confidence interval:', ['half as wide', 'a quarter as wide', 'twice as wide', 'the same'], 'Width ∝ 1/√n.'),
    Q('A t-interval is used when:', ['σ is unknown, the sample small and the population normal', 'σ is known', 'the sample is large', 'the data are ranks'], 's replaces σ.'),
  ],
  'st-hyp-2': [
    Q('A one-tailed test at 5% has critical value z =', ['1.645 (or −1.645)', '1.96', '2.576', '0.05'], '5% in one tail.'),
    Q('The probability of a Type I error equals:', ['the significance level', 'the power', '1', 'the p of the population'], 'Rejecting a true H₀.'),
    Q('Not rejecting H₀ means:', ['there is not enough evidence against H₀', 'H₀ is proved true', 'H₁ is true', 'the test was wrong'], 'Absence of evidence is not proof.'),
  ],
  'st-u6-paper1': [
    Q('The first line of a binomial question should be like:', ['Let X be the number of …; X ~ B(n, p)', 'P = 0.5', 'z = 1.96', 'the answer'], 'Define the variable.'),
    Q('"Fewer than 3" means:', ['X ≤ 2', 'X ≤ 3', 'X ≥ 3', 'X = 2'], 'For whole numbers.'),
    Q('A hypothesis test ends with:', ['a conclusion in context', 'the value of z only', 'a diagram', 'the formula'], 'Say what the result means.'),
  ],
  'st-u6-paper2': [
    Q('Heights of adult men are best modelled by:', ['a normal distribution', 'a Poisson distribution', 'a binomial distribution', 'a uniform distribution'], 'A measured quantity.'),
    Q('The number of sixes in 30 throws of a die is:', ['B(30, 1/6)', 'Po(30)', 'N(30, 6)', 'B(6, 1/30)'], 'Fixed trials, constant p.'),
    Q('The mean of 100 waiting times (any distribution) is approximately normal because of:', ['the Central Limit Theorem', 'Bayes’ theorem', 'the binomial theorem', 'Spearman’s coefficient'], 'Large samples.'),
  ],
};
