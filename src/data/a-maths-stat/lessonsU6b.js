// A Level Statistics lessons (0770), Upper Sixth (part 2): the binomial and
// Poisson distributions, continuous random variables, the normal
// distribution, sampling and estimation, confidence intervals and hypothesis
// tests, and the statistics revision lessons. Original text written for this
// app. Values of Φ(z) are from the standard normal table.

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

export const LESSONS_S6B = [
  // ---------- 14. Binomial and Poisson ----------
  L('st-bin-1', 'ms-u6-binomial-poisson', '14.1', 'The binomial distribution', 17, ['Probability'], [
    'A **binomial** situation has a fixed number n of independent trials, each with two outcomes (success or failure) and the same probability p of success. The number of successes X ~ **B(n, p)** has **P(X = r) = nCr pʳ(1 − p)ⁿ⁻ʳ**, for r = 0, 1, …, n.',
    'Its mean is **E(X) = np** and its variance **Var(X) = np(1 − p)**. For "at least one" questions use the complement: P(X ≥ 1) = 1 − P(X = 0) = 1 − (1 − p)ⁿ.',
    'Check the conditions in context: drawing without replacement from a small batch is not binomial, because p changes from one draw to the next.',
  ], 'am-binomial-poisson', 'Name n and p before using the formula.',
  ['For X ~ B(5, 0.2), P(X = 0) =', ['0.32768', '0.2', '0.8', '0'], '0.8⁵.'],
  [['Binomial distribution', 'The number of successes in n independent trials with constant p.'], ['Trial', 'One repetition of the experiment.'], ['B(n, p)', 'The binomial distribution with n trials and probability p of success.']],
  [
    { q: '10% of seeds fail to germinate. In a packet of 12, find P(exactly 2 fail) and P(at most 1 fails).', steps: ['X ~ B(12, 0.1): P(X = 2) = 66 × 0.1² × 0.9¹⁰ = **0.230**.', 'P(X = 0) = 0.9¹² = 0.2824 and P(X = 1) = 12 × 0.1 × 0.9¹¹ = 0.3766.', 'P(X ≤ 1) = **0.659**.'] },
    { q: 'Find the mean and standard deviation of the number of seeds that fail.', steps: ['E(X) = np = 12 × 0.1 = **1.2**.', 'Var(X) = np(1 − p) = 1.08.', 'Standard deviation = √1.08 ≈ **1.04**.'] },
  ]),

  L('st-poi-1', 'ms-u6-binomial-poisson', '14.2', 'The Poisson distribution', 17, ['Probability'], [
    'The **Poisson distribution** models the number of events in a fixed interval (of time, length or area) when events happen **singly, independently and at random, at a constant average rate** λ: X ~ **Po(λ)** with **P(X = r) = e^(−λ)λʳ/r!**, for r = 0, 1, 2, …',
    'Its **mean and variance are both λ**. The rate scales with the interval: 3 calls per hour means Po(6) for 2 hours. If X ~ Po(λ) and Y ~ Po(μ) are independent, X + Y ~ Po(λ + μ).',
    'When n is large and p is small (say n > 50 and np < 5), **B(n, p) ≈ Po(np)**, which is much easier to work with.',
  ], 'am-binomial-poisson', 'Scale λ to the length of the interval in the question.',
  ['For X ~ Po(1), P(X = 1) =', ['e⁻¹ ≈ 0.368', '1', '0.5', '2e⁻¹'], 'e⁻¹ × 1¹/1!.'],
  [['Poisson distribution', 'The number of random events in an interval at a constant average rate λ.'], ['Rate', 'The mean number of events per unit interval.'], ['Poisson approximation', 'B(n, p) ≈ Po(np) for large n and small p.']],
  [
    { q: 'A switchboard receives on average 4 calls in 10 minutes. Find P(exactly 2 calls in 10 minutes) and P(at least 1 call in 5 minutes).', steps: ['X ~ Po(4): P(X = 2) = e⁻⁴ × 4²/2! = 8e⁻⁴ = **0.147**.', 'In 5 minutes, Y ~ Po(2).', 'P(Y ≥ 1) = 1 − e⁻² = **0.865**.'] },
    { q: 'A machine makes 1 faulty item in 500. Use a Poisson approximation to find the probability of more than 2 faulty items in a batch of 1000.', steps: ['X ~ B(1000, 0.002) ≈ Po(2).', 'P(X ≤ 2) = e⁻²(1 + 2 + 2) = 5e⁻² = 0.677.', 'P(X > 2) ≈ **0.323**.'] },
  ]),

  // ---------- 15. Continuous random variables ----------
  L('st-crv-1', 'ms-u6-continuous-rv', '15.1', 'Probability density functions and the cumulative distribution function', 17, ['Probability'], [
    'A **continuous random variable** can take any value in an interval. It is described by a **probability density function** f(x) ≥ 0 with **∫ f(x) dx = 1** over its whole range; probabilities are areas: **P(a < X < b) = ∫ (a to b) f(x) dx**. A single value has probability 0, so < and ≤ give the same answers.',
    'The **cumulative distribution function** is **F(x) = P(X ≤ x)**, the area under f to the left of x; it rises from 0 to 1, and **f(x) = F′(x)**.',
    'Example: f(x) = 3x²/8 for 0 ≤ x ≤ 2 (and 0 otherwise). Check: ∫ (0 to 2) 3x²/8 dx = 8/8 = 1. Then F(x) = x³/8 on [0, 2], so P(X < 1) = F(1) = 1/8.',
  ], 'am-pdf', 'Probability = area under the density curve.',
  ['If f(x) = kx² for 0 ≤ x ≤ 3, then k =', ['1/9', '1/3', '1/27', '3'], '∫ kx² dx from 0 to 3 = 9k = 1.'],
  [['Probability density function', 'A function f ≥ 0 whose area over an interval gives the probability.'], ['Cumulative distribution function', 'F(x) = P(X ≤ x).'], ['Continuous random variable', 'A random variable that can take any value in an interval.']],
  [
    { q: 'f(x) = k(4 − x²) for 0 ≤ x ≤ 2. Find k and P(X < 1).', steps: ['∫ (0 to 2) (4 − x²) dx = 8 − 8/3 = 16/3, so k = 3/16.', 'P(X < 1) = (3/16) ∫ (0 to 1) (4 − x²) dx = (3/16)(11/3).', '**k = 3/16, P(X < 1) = 11/16 ≈ 0.688**.'] },
    { q: 'For f(x) = 3x²/8 on [0, 2], find the median.', steps: ['F(x) = x³/8.', 'F(m) = ½ gives m³ = 4.', '**m = ∛4 ≈ 1.59**.'] },
  ]),

  L('st-crv-2', 'ms-u6-continuous-rv', '15.2', 'Expectation, variance, median and mode of a continuous variable', 16, ['Probability'], [
    '**E(X) = ∫ x f(x) dx** and **E(X²) = ∫ x² f(x) dx** over the range, so **Var(X) = E(X²) − [E(X)]²**, as for discrete variables.',
    'The **median** m solves F(m) = ½, and the quartiles solve F(q) = ¼ and ¾. The **mode** is where f(x) is greatest: at a turning point of f (f′(x) = 0) or at an end of the range.',
    'For f(x) = 3x²/8 on [0, 2]: E(X) = ∫ 3x³/8 dx = 1.5, E(X²) = ∫ 3x⁴/8 dx = 2.4, Var(X) = 2.4 − 2.25 = 0.15; the median is ∛4 ≈ 1.59 and the mode is 2.',
  ], 'am-pdf', 'Mean, median and mode differ when the density is not symmetrical.',
  ['For f(x) = ½ on 0 ≤ x ≤ 2, E(X) =', ['1', '½', '2', '¼'], 'By symmetry, the middle of the range.'],
  [['Mean of a continuous variable', '∫ x f(x) dx.'], ['Median', 'The value m with F(m) = ½.'], ['Mode', 'The value where the density is greatest.']],
  [
    { q: 'For f(x) = (3/16)(4 − x²) on [0, 2], find E(X) and the mode.', steps: ['E(X) = (3/16) ∫ (0 to 2) (4x − x³) dx = (3/16)(8 − 4).', '= **0.75**.', 'f decreases on [0, 2], so the mode is at **x = 0**.'] },
    { q: 'X is uniform on [0, 6], with f(x) = 1/6. Find E(X) and Var(X).', steps: ['E(X) = 3, by symmetry.', 'E(X²) = ∫ (0 to 6) x²/6 dx = 12.', 'Var(X) = 12 − 9 = **3**.'] },
  ]),

  // ---------- 16. The normal distribution ----------
  L('st-norm-1', 'ms-u6-normal', '16.1', 'The normal distribution and standardising', 17, ['Probability'], [
    'Many measurements (heights, masses, errors) follow the **normal distribution** X ~ **N(μ, σ²)**: a bell-shaped curve, symmetrical about the mean μ, with standard deviation σ. About 68% of values lie within 1σ of μ, 95% within 2σ and 99.7% within 3σ.',
    '**Standardising**: **Z = (X − μ)/σ** has the **standard normal distribution N(0, 1)**. Tables give **Φ(z) = P(Z ≤ z)** for z ≥ 0; for negative z use symmetry: **Φ(−z) = 1 − Φ(z)**. So P(X < x) = Φ((x − μ)/σ).',
    'Values worth knowing: Φ(1) = 0.8413, Φ(1.5) = 0.9332, Φ(1.645) = 0.95, Φ(1.96) = 0.975, Φ(2) = 0.9772, Φ(2.576) = 0.995.',
  ], 'am-normal', 'Sketch the curve and shade the area you want before using the table.',
  ['If X ~ N(20, 9), then P(X < 23) =', ['Φ(1) = 0.8413', 'Φ(3)', 'Φ(1/3)', '0.5'], 'z = (23 − 20)/3; note σ = 3.'],
  [['Normal distribution', 'A symmetrical, bell-shaped distribution N(μ, σ²).'], ['Standardising', 'Changing X to Z = (X − μ)/σ.'], ['Φ(z)', 'P(Z ≤ z) for the standard normal Z.']],
  [
    { q: 'Heights of students are N(165, 8²) in cm. Find the proportion taller than 175 cm and the proportion between 157 cm and 177 cm.', steps: ['P(X > 175) = 1 − Φ(1.25) = 1 − 0.8944 = **0.106**.', 'P(157 < X < 177) = Φ(1.5) − Φ(−1) = 0.9332 − 0.1587.', '= **0.775**.'] },
    { q: 'Masses of bags are N(500, 25²) in g. What percentage weigh less than 450 g?', steps: ['z = (450 − 500)/25 = −2.', 'P = Φ(−2) = 1 − 0.9772 = 0.0228.', 'About **2.3%**.'] },
  ]),

  L('st-norm-2', 'ms-u6-normal', '16.2', 'Inverse problems and the normal approximation to the binomial', 17, ['Probability'], [
    '**Finding μ or σ**: from a given probability, read z backwards from the table, then solve (x − μ)/σ = z. If 10% of X ~ N(μ, 4²) exceed 30, then (30 − μ)/4 = 1.282 and μ = 24.9. With two such conditions, solve two equations together for μ and σ.',
    '**Normal approximation to the binomial**: when n is large and p is not close to 0 or 1 (np > 5 and n(1 − p) > 5), B(n, p) ≈ N(np, np(1 − p)).',
    'A discrete variable is being approximated by a continuous one, so use a **continuity correction**: P(X ≤ 45) ≈ P(Y < 45.5), P(X ≥ 45) ≈ P(Y > 44.5) and P(X = 45) ≈ P(44.5 < Y < 45.5).',
  ], 'am-normal-approx', 'With a continuity correction, each whole number covers half a unit either side.',
  ['With a continuity correction, P(X = 10) for a binomial X is approximated by:', ['P(9.5 < Y < 10.5)', 'P(Y = 10)', 'P(Y < 10)', 'P(10 < Y < 11)'], 'The interval of width 1 around 10.'],
  [['Inverse normal', 'Finding z (and then x, μ or σ) from a probability.'], ['Continuity correction', 'Adjusting by ½ when a discrete distribution is approximated by a continuous one.'], ['Normal approximation', 'B(n, p) ≈ N(np, np(1 − p)) for large n.']],
  [
    { q: 'X ~ N(μ, σ²), with P(X < 40) = 0.1587 and P(X > 70) = 0.0228. Find μ and σ.', steps: ['Φ(−1) = 0.1587, so (40 − μ)/σ = −1; 1 − Φ(2) = 0.0228, so (70 − μ)/σ = 2.', 'Subtracting: 30/σ = 3.', '**σ = 10 and μ = 50**.'] },
    { q: 'A fair coin is tossed 100 times. Estimate the probability of at least 60 heads.', steps: ['X ~ B(100, 0.5) ≈ N(50, 25), σ = 5.', 'P(X ≥ 60) ≈ P(Y > 59.5) = 1 − Φ(1.9).', '= 1 − 0.9713 = **0.0287**.'] },
  ]),

  // ---------- 17. Sampling and estimation ----------
  L('st-samp-1', 'ms-u6-sampling', '17.1', 'Samples, the sampling distribution of the mean and the Central Limit Theorem', 17, ['Statistics'], [
    'A **population** is the whole group of interest; a **sample** is the part examined to learn about it. In a **simple random sample** every possible sample of the chosen size is equally likely, which avoids bias; random numbers or drawing lots achieve this.',
    'The mean X̄ of a random sample of size n varies from sample to sample. Its **sampling distribution** has **E(X̄) = μ** and **Var(X̄) = σ²/n**; its standard deviation **σ/√n** is the **standard error**. If the population is normal, X̄ ~ N(μ, σ²/n) exactly.',
    'The **Central Limit Theorem**: for a large sample (n ≥ 30 is the usual guide), **X̄ is approximately N(μ, σ²/n) whatever the distribution of the population**.',
  ], 'am-clt', 'The spread of sample means is σ/√n, not σ.',
  ['Samples of size 16 from a population with σ = 8 have standard error:', ['2', '0.5', '8', '4'], '8/√16.'],
  [['Population', 'The whole group being studied.'], ['Standard error', 'σ/√n, the standard deviation of the sample mean.'], ['Central Limit Theorem', 'For large n, the sample mean is approximately normal.']],
  [
    { q: 'Bags of rice have mean mass 5.0 kg and standard deviation 0.2 kg. Find the probability that the mean of 36 bags is below 4.95 kg.', steps: ['X̄ ≈ N(5.0, (0.2/6)²) by the Central Limit Theorem; the standard error is 0.0333 kg.', 'z = (4.95 − 5.0)/0.0333 = −1.5.', 'P = 1 − Φ(1.5) = **0.0668**.'] },
    { q: 'How large a sample makes the standard error at most 0.02 kg?', steps: ['0.2/√n ≤ 0.02.', '√n ≥ 10.', '**n ≥ 100**.'] },
  ]),

  L('st-samp-2', 'ms-u6-sampling', '17.2', 'Unbiased estimates of the mean and variance', 16, ['Statistics'], [
    'An **estimator** is **unbiased** if its expected value equals the parameter it estimates. The sample mean x̄ is an unbiased estimate of μ.',
    'Dividing by n gives a sample variance that is too small on average. The **unbiased estimate of the population variance** is **s² = Σ(x − x̄)²/(n − 1) = (Σx² − n x̄²)/(n − 1)**, that is n/(n − 1) times the sample variance.',
    'With s in place of σ, the estimated standard error of the mean is s/√n. State the divisor you used: the wrong one is among the commonest lost marks.',
  ], 'am-clt', 'Unbiased variance: divide by n − 1.',
  ['A sample of 5 has Σ(x − x̄)² = 20. The unbiased estimate of σ² is:', ['5', '4', '20', '2.24'], '20 ÷ (5 − 1).'],
  [['Estimator', 'A rule for estimating a population value from a sample.'], ['Unbiased', 'Having expected value equal to the true value.'], ['s²', 'The unbiased estimate of the population variance, with divisor n − 1.']],
  [
    { q: 'A sample of 10 values has Σx = 52 and Σx² = 290. Find unbiased estimates of μ and σ².', steps: ['x̄ = 52/10 = **5.2**.', 's² = (290 − 10 × 5.2²)/9 = (290 − 270.4)/9.', '**s² = 2.18**.'] },
    { q: 'A random sample of 50 batteries has x̄ = 41.2 hours and s = 4.5 hours. Estimate the standard error of the mean.', steps: ['Standard error ≈ s/√n.', '= 4.5/√50.', '≈ **0.636 hours**.'] },
  ]),

  // ---------- 18. Confidence intervals and hypothesis tests ----------
  L('st-hyp-1', 'ms-u6-hypothesis', '18.1', 'Confidence intervals for a population mean', 17, ['Statistics'], [
    'A **confidence interval** gives a range of plausible values for μ. With σ known (or a large sample, using s), the **95% interval** is **x̄ ± 1.96σ/√n** and the 99% interval x̄ ± 2.576σ/√n. In repeated sampling, 95% of such intervals would contain μ.',
    'For a **small sample from a normal population with σ unknown**, use the **t-distribution** with ν = n − 1 degrees of freedom: **x̄ ± t s/√n**, with t from tables (t = 2.262 for a 95% interval with ν = 9). The t-distribution has heavier tails than the normal, allowing for the uncertainty in s.',
    'Narrower intervals come from larger samples (the width is proportional to 1/√n) or lower confidence levels.',
  ], 'am-confidence', 'Centre the interval on x̄, never on μ.',
  ['A 95% interval with x̄ = 50, σ = 10 and n = 25 is:', ['50 ± 3.92', '50 ± 19.6', '50 ± 1.96', '50 ± 0.392'], '1.96 × 10/5.'],
  [['Confidence interval', 'An interval that contains the true value in a stated proportion of samples.'], ['t-distribution', 'The distribution used for small samples when σ is estimated by s.'], ['Degrees of freedom', 'ν = n − 1 for a single sample mean.']],
  [
    { q: 'A sample of 40 maize cobs has mean mass 210 g; σ = 18 g. Find a 95% confidence interval for the mean mass.', steps: ['Standard error = 18/√40 = 2.846 g.', '1.96 × 2.846 = 5.58.', 'The interval is **(204.4 g, 215.6 g)**.'] },
    { q: 'A sample of 10 from a normal population has x̄ = 12.4 and s = 1.5. Find a 95% confidence interval for μ.', steps: ['ν = 9, t = 2.262; s/√n = 1.5/√10 = 0.474.', '2.262 × 0.474 = 1.07.', 'The interval is **(11.33, 13.47)**.'] },
  ]),

  L('st-hyp-2', 'ms-u6-hypothesis', '18.2', 'Hypothesis tests for a mean: z-tests, t-tests and errors', 18, ['Statistics'], [
    'A **hypothesis test** begins with a **null hypothesis H₀** (for example μ = 500) and an **alternative H₁**: μ ≠ 500 (**two-tailed**) or μ < 500, μ > 500 (**one-tailed**). The **significance level** (often 5%) fixes the **critical region**: for a z-test at 5%, |z| > 1.96 (two-tailed) or z < −1.645 (or z > 1.645) one-tailed.',
    'The **test statistic** is z = (x̄ − μ₀)/(σ/√n) when σ is known or the sample is large; for a small sample from a normal population with σ unknown, t = (x̄ − μ₀)/(s/√n) with ν = n − 1. If it lies in the critical region, **reject H₀**; otherwise there is not enough evidence to reject it. Always state the conclusion in the context of the question.',
    'Errors: a **Type I error** rejects a true H₀ (its probability is the significance level); a **Type II error** fails to reject a false H₀. A smaller significance level makes Type I errors rarer but Type II errors more likely.',
  ], 'am-critical-region', 'Write H₀ and H₁ before any calculation.',
  ['In a two-tailed z-test at 5%, the test statistic is z = 2.3. The decision is:', ['reject H₀', 'do not reject H₀', 'H₁ is proved', 'the test fails'], '2.3 > 1.96.'],
  [['Null hypothesis', 'H₀, the statement tested, assumed true unless the evidence is strong.'], ['Significance level', 'The probability of rejecting H₀ when it is true.'], ['Critical region', 'The values of the test statistic that lead to rejecting H₀.']],
  [
    { q: 'Packets should contain 500 g. A sample of 36 has mean 496 g; σ = 12 g. Test at 5% whether the mean is less than 500 g.', steps: ['H₀: μ = 500; H₁: μ < 500; one-tailed, critical value z = −1.645.', 'z = (496 − 500)/(12/√36) = −4/2 = −2.', '−2 < −1.645: **reject H₀**: there is evidence that the packets are underweight.'] },
    { q: 'A sample of 10 from a normal population has x̄ = 12.4 and s = 1.5. Test H₀: μ = 13 against H₁: μ ≠ 13 at 5%.', steps: ['t = (12.4 − 13)/(1.5/√10) = −1.27, with ν = 9.', 'The critical values are ±2.262.', '|−1.27| < 2.262: **do not reject H₀**; the 95% interval (11.33, 13.47) contains 13, which agrees.'] },
  ]),

  // ---------- 22. Revision ----------
  L('st-u6-paper1', 'ms-u6-stat-papers', '22.1', 'Statistics questions: setting out and common errors', 14, ['Examination'], [
    'Define every random variable in words and state its distribution with its parameters: "Let X be the number of faulty bulbs in a box of 20; X ~ B(20, 0.05)". This line earns marks.',
    'Show the standardising step: P(X > 130) = P(Z > (130 − 100)/15) = 1 − Φ(2) = 0.0228. For a hypothesis test write H₀ and H₁ with the parameter, the significance level, the test statistic, the critical value and a conclusion in context.',
    'Common errors in mock scripts: dividing by n instead of n − 1 for an unbiased variance; leaving out the continuity correction; using P(X < 3) when "at most 3" means P(X ≤ 3); extrapolating a regression line; quoting r without saying what it shows.',
  ], 'am-stat-method', '"At most" includes the end value; "fewer than" does not.',
  ['"At most 3" means:', ['X ≤ 3', 'X < 3', 'X ≥ 3', 'X = 3'], 'It includes 3.'],
  [['Parameter', 'A number such as n, p, λ, μ or σ that fixes a distribution.'], ['In context', 'Stated in the words of the problem, not only in symbols.']],
  [
    { q: 'Faulty bulbs: X ~ B(20, 0.05). Find P(X ≤ 1).', steps: ['P(X = 0) = 0.95²⁰ = 0.3585.', 'P(X = 1) = 20 × 0.05 × 0.95¹⁹ = 0.3774.', 'P(X ≤ 1) = **0.736**.'] },
  ]),

  L('st-u6-paper2', 'ms-u6-stat-papers', '22.2', 'Mixed statistics practice: choosing the model', 14, ['Examination'], [
    'Choosing the distribution: a fixed number of independent trials with constant p → **binomial**; random events at a constant rate → **Poisson**; measured quantities → **normal**; the mean of a large sample → **normal**, by the Central Limit Theorem.',
    'Check the conditions before approximating: Poisson for binomial needs n large and p small; normal for binomial needs np and n(1 − p) both above about 5, with a continuity correction.',
    'In correlation and regression questions, comment in context: what the gradient means ("each extra hour of study adds about 5 marks") and whether a prediction is interpolation or extrapolation.',
  ], 'am-binomial-poisson', 'Ask: trials, events in time, or measurements?',
  ['The number of cars passing a point in one minute is best modelled by:', ['a Poisson distribution', 'a binomial distribution', 'a normal distribution', 'a uniform distribution'], 'Random events at a constant rate.'],
  [['Model', 'A distribution chosen to describe a real situation.']],
  [
    { q: 'The masses of eggs are N(60, 4²) in grams; eggs over 65 g are "large". In a box of 12, find the expected number of large eggs.', steps: ['P(large) = 1 − Φ((65 − 60)/4) = 1 − Φ(1.25) = 0.1056.', 'The number of large eggs is B(12, 0.1056).', 'Expected number = 12 × 0.1056 ≈ **1.27**.'] },
  ]),
];
