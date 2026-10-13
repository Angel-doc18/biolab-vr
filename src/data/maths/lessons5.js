// Mathematics lessons for Form 5 (the topics that are new in Form 5): functions
// and gradients of curves, collecting and displaying data, averages and spread,
// probability and tree diagrams, polygons and symmetry, logic, three-
// dimensional problems, and the GCE clinics and mock examinations. Original
// text written for this app. **double asterisks** mark key terms; `examples`
// are worked examples. A matrix is written row by row, for example [3 4; 2 2].

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Class work',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_5 = [
  // ---------- Functions and graphs ----------
  L('ma-functions-5', 'ma-f5-functions', '1.1', 'Functions and linear graphs', 12, ['Algebra', 'Graphs'], [
    'A **function** is a rule that gives exactly one output for each input. It is written f(x) = 2x + 3, or f: x ↦ 2x + 3, and f(4) = 2 × 4 + 3 = 11. The set of inputs allowed is the **domain**; the set of outputs is the **range**.',
    'A **linear function** f(x) = mx + c has a straight-line graph with gradient m and y-intercept c. To draw it, work out three points in a table: two are enough for a line, and the third checks them.',
    'Linear functions model many real situations:\n- a cost with a fixed charge and a rate, such as C = 500 + 200n\n- a conversion between units or currencies\n- **break-even**: a business makes neither profit nor loss where the cost line meets the income line.',
  ], 'straight-line', 'f(a) means: put a in place of x everywhere in the rule.',
  ['If g(x) = x² − 4, then g(3) =', ['5', '2', '−1', '13'], '9 − 4 = 5.'],
  [['Function', 'A rule that gives exactly one output for each input.'], ['Domain', 'The set of inputs of a function.'], ['Range', 'The set of outputs of a function.'], ['Break-even point', 'Where income equals cost.']],
  [
    { q: 'f(x) = 3x − 5. Find f(2), f(−1) and the value of x for which f(x) = 16.', steps: ['f(2) = 6 − 5 = **1**.', 'f(−1) = −3 − 5 = **−8**.', '3x − 5 = 16, so **x = 7**.'] },
    { q: 'A tailor’s cost of making n dresses is C = 20 000 + 3 000n FCFA, and each dress sells for 5 000 FCFA. How many dresses must be sold to break even?', steps: ['Income I = 5 000n.', 'Break even when 5 000n = 20 000 + 3 000n.', '2 000n = 20 000, so **n = 10 dresses**.', 'On a graph, this is where the cost and income lines cross.'] },
  ]),

  L('ma-division-5', 'ma-f5-functions', '1.2', 'Dividing a line segment internally and externally', 12, ['Geometry', 'Graphs'], [
    'A point P divides AB **internally** in the ratio m : n when P lies between A and B and AP : PB = m : n. For A(x₁, y₁) and B(x₂, y₂):\n- P = ((nx₁ + mx₂)/(m + n), (ny₁ + my₂)/(m + n)).\nThe midpoint is the case m = n.',
    'P divides AB **externally** in the ratio m : n when P lies on the line AB extended beyond A or B, and AP : PB = m : n. Then, with m ≠ n:\n- P = ((mx₂ − nx₁)/(m − n), (my₂ − ny₁)/(m − n)).',
    'Vectors give the same result: for internal division, AP = m/(m + n) × AB.',
  ], 'straight-line', 'Check a division point by working out AP and PB as vectors.',
  ['The midpoint of a segment divides it internally in the ratio:', ['1 : 1', '1 : 2', '2 : 1', '0 : 1'], 'AP = PB.'],
  [['Internal division', 'Division by a point between the two ends of a segment.'], ['External division', 'Division by a point on the line beyond one end of the segment.']],
  [
    { q: 'A is (1, 2) and B is (7, 11). Find P dividing AB internally in the ratio 2 : 1.', steps: ['x = (1 × 1 + 2 × 7) ÷ 3 = 15 ÷ 3 = 5', 'y = (1 × 2 + 2 × 11) ÷ 3 = 24 ÷ 3 = 8', '**P(5, 8)**. Check: AP = (4, 6) and PB = (2, 3), so AP = 2 PB.'] },
    { q: 'A is (2, 1) and B is (5, 7). Find Q dividing AB externally in the ratio 3 : 2.', steps: ['x = (3 × 5 − 2 × 2) ÷ (3 − 2) = 11', 'y = (3 × 7 − 2 × 1) ÷ 1 = 19', '**Q(11, 19)**. Check: AQ = (9, 18) and BQ = (6, 12), and 9 : 6 = 3 : 2.'] },
  ]),

  L('ma-curvegradient-5', 'ma-f5-functions', '1.3', 'The gradient of a curve and particular points', 12, ['Algebra', 'Graphs'], [
    'A straight line has the same gradient everywhere, but the gradient of a curve changes from point to point. The **gradient of a curve at a point** is the gradient of the **tangent** there: the straight line that just touches the curve at that point.',
    'To estimate it from a graph:\n- draw the tangent carefully with a ruler, so that it touches the curve without cutting it near the point\n- choose two points on the tangent far apart\n- work out rise ÷ run using the numbers on the axes, not centimetres.',
    'The **particular points** of a graph are the y-intercept, the x-intercepts (the roots) and the turning points, where the gradient is 0 (a maximum or a minimum).',
    'The gradient has a meaning: on a distance–time graph it is the **speed**; on a velocity–time graph it is the **acceleration**; on a graph of cost against quantity it is the cost per item.',
  ], 'tangent-gradient', 'Make the tangent long: the two points you choose should be far apart.',
  ['At the turning point of a parabola, the tangent is:', ['Horizontal', 'Vertical', 'The axis of symmetry', 'Impossible to draw'], 'Its gradient is 0.'],
  [['Tangent', 'A straight line that touches a curve at one point.'], ['Gradient of a curve', 'The gradient of the tangent at a point.'], ['Turning point', 'A maximum or minimum point, where the gradient is 0.']],
  [
    { q: 'On the graph of y = x², a tangent is drawn at (2, 4). It passes through (1, 0) and (3, 8). Find the gradient of the curve at x = 2.', steps: ['Gradient = (8 − 0) ÷ (3 − 1) = **4**.', 'The curve is steeper at x = 2 than at x = 1, where the gradient is 2.'] },
    { q: 'A distance–time curve is drawn for a lorry. The tangent at t = 3 h passes through (1, 40) and (5, 240), with distance in km. Estimate the speed at t = 3 h.', steps: ['Gradient = (240 − 40) ÷ (5 − 1) = 50.', 'Speed ≈ **50 km/h**.'] },
  ]),

  // ---------- Displaying data ----------
  L('ma-tables-5', 'ma-f5-data', '3.1', 'Collecting data and frequency tables', 12, ['Statistics'], [
    'Data are **qualitative** (categories, such as favourite subject) or **quantitative** (numbers). Quantitative data are **discrete** when counted (the number of children in a family) or **continuous** when measured (heights, masses, times). Data come from a census, a survey or questionnaire, observation, an experiment or records.',
    'A **frequency table** with tally marks (grouped in fives) organises raw data. When there are many different values, group them into **classes**: usually 5 to 10 classes, with no gaps and no overlaps, such as 0 ≤ x < 10, 10 ≤ x < 20 for continuous data.',
    'Each class has limits, **boundaries**, a **width** and a **mid-point**. For whole-number data the class 10–19 has boundaries 9.5 and 19.5 and width 10.',
    '**Cumulative frequency** tables can be "less than" (add the frequencies from the top) or "more than" (add from the bottom). The "less than" ogive rises; the "more than" ogive falls, and the two curves cross at the median.',
  ], 'histogram-unequal', 'Check that the frequencies add up to the number of data values.',
  ['The height of a pupil is an example of:', ['Continuous data', 'Discrete data', 'Qualitative data', 'A frequency'], 'It is measured, not counted.'],
  [['Discrete data', 'Data that can be counted in separate values.'], ['Continuous data', 'Data that are measured and can take any value in a range.'], ['Frequency table', 'A table showing how often each value or class occurs.'], ['Class interval', 'A group of values in a grouped frequency table.']],
  [
    { q: 'The goals scored in 20 football matches were: 0, 2, 1, 3, 1, 0, 2, 2, 4, 1, 1, 0, 3, 2, 1, 5, 2, 1, 0, 1. Make a frequency table and find the mode and the mean.', steps: ['Goals 0, 1, 2, 3, 4, 5 have frequencies 4, 7, 5, 2, 1, 1 (total 20).', 'The mode is **1 goal**.', 'Mean = (0 × 4 + 1 × 7 + 2 × 5 + 3 × 2 + 4 × 1 + 5 × 1) ÷ 20 = 32 ÷ 20 = **1.6 goals**.'] },
    { q: 'Make a "more than" cumulative frequency table for the masses of 40 pupils (30–34: 4; 35–39: 10; 40–44: 15; 45–49: 8; 50–54: 3).', steps: ['More than 29.5 kg: 40; more than 34.5 kg: 36; more than 39.5 kg: 26.', 'More than 44.5 kg: 11; more than 49.5 kg: 3; more than 54.5 kg: 0.', 'Plotted at the lower class boundaries these give a falling curve, which crosses the "less than" curve at the median.'] },
  ]),

  L('ma-histogram-5', 'ma-f5-data', '3.2', 'Histograms, frequency polygons and the shape of a distribution', 13, ['Statistics'], [
    'In a **histogram** the bars touch, the horizontal axis is a continuous scale, and the **area** of each bar shows the frequency. When all the classes have the same width, the height of each bar can simply be the frequency.',
    'With **unequal class widths**, the height of each bar is the **frequency density** = frequency ÷ class width. Otherwise a wide class would look too important.',
    'A **frequency polygon** joins, with straight lines, the points (mid-point, frequency) for each class, usually closed at zero half a class beyond each end. Two frequency polygons on one graph compare two distributions.',
    'The shape of a distribution:\n- **symmetrical**: the mean, median and mode are about equal\n- **positively skewed**: a long tail to the right (towards large values); the mean is greater than the median\n- **negatively skewed**: a long tail to the left.',
  ], 'histogram-unequal', 'With unequal widths, always plot frequency ÷ width.',
  ['In a histogram with unequal class widths, the frequency of a class is shown by the bar’s:', ['Area', 'Height', 'Width', 'Colour'], 'The height is the frequency density.'],
  [['Histogram', 'A chart for continuous data in which the area of each bar shows the frequency.'], ['Frequency density', 'Frequency ÷ class width.'], ['Frequency polygon', 'Straight lines joining the frequencies plotted at the class mid-points.'], ['Skewed', 'Not symmetrical, with a long tail on one side.']],
  [
    { q: 'The ages of people in a village survey are: 0 ≤ t < 10: 30; 10 ≤ t < 20: 40; 20 ≤ t < 40: 50; 40 ≤ t < 70: 30. Find the bar heights for a histogram.', steps: ['30 ÷ 10 = 3', '40 ÷ 10 = 4', '50 ÷ 20 = 2.5', '30 ÷ 30 = 1', 'Bar heights (frequency densities): **3, 4, 2.5 and 1**.'] },
    { q: 'In a histogram, the bar for 20 ≤ x < 25 has a frequency density of 6. How many values are in the class?', steps: ['Frequency = density × width = 6 × 5 = **30**.'] },
  ]),

  // ---------- Averages and spread ----------
  L('ma-average-5', 'ma-f5-dispersion', '4.1', 'Mean, median, mode and percentiles', 13, ['Statistics'], [
    'For ungrouped data:\n- **mean** = Σx ÷ n, or Σfx ÷ Σf from a frequency table\n- **median** = the middle value when the data are in order, the ((n + 1)/2)th value\n- **mode** = the value that occurs most often.',
    'An **assumed mean** A makes the arithmetic easier: mean = A + Σf(x − A) ÷ Σf.',
    'For grouped data the **median** can be found by interpolation: median = L + ((n/2 − F) ÷ f) × c, where L is the lower boundary of the median class, F the cumulative frequency before it, f its frequency and c its width. The **mode** can be estimated by L + (d₁ ÷ (d₁ + d₂)) × c, where d₁ and d₂ are the differences between the modal frequency and the frequencies of the classes before and after.',
    'A **percentile** is read from the ogive: the 90th percentile is the value below which 90 % of the data lie, read at 0.9n. The median is the 50th percentile; the quartiles are the 25th and 75th.',
  ], 'ogive', 'For grouped data, the mean, median and mode are estimates.',
  ['The median of 7, 2, 9, 4, 5 is:', ['5', '4', '9', '5.4'], 'In order: 2, 4, 5, 7, 9.'],
  [['Median', 'The middle value of ordered data.'], ['Mode', 'The most frequent value.'], ['Percentile', 'The value below which a given percentage of the data lie.'], ['Assumed mean', 'A convenient value used to simplify working out a mean.']],
  [
    { q: 'Using an assumed mean of 42, find the mean mass of the 40 pupils (mid-points 32, 37, 42, 47, 52; frequencies 4, 10, 15, 8, 3).', steps: ['x − 42: −10, −5, 0, 5, 10', 'Σf(x − 42) = −40 − 50 + 0 + 40 + 30 = −20', 'Mean = 42 + (−20 ÷ 40) = **41.5 kg**.'] },
    { q: 'Find the median and an estimate of the mode of the same masses.', steps: ['n/2 = 20; the median class is 40–44 with L = 39.5, F = 14, f = 15, c = 5.', 'Median = 39.5 + (20 − 14) ÷ 15 × 5 = **41.5 kg**.', 'Mode: d₁ = 15 − 10 = 5 and d₂ = 15 − 8 = 7, so mode ≈ 39.5 + 5 ÷ 12 × 5 ≈ **41.6 kg**.'] },
  ]),

  L('ma-spread-5', 'ma-f5-dispersion', '4.2', 'Range, quartiles and the interquartile range', 12, ['Statistics'], [
    'An average describes the centre of the data; a **measure of dispersion** describes how spread out they are. The **range** = largest value − smallest value; it is easy to find but one extreme value changes it a lot.',
    'For ungrouped data in order, the median Q₂ splits the data into two halves; the **lower quartile** Q₁ is the median of the lower half and the **upper quartile** Q₃ the median of the upper half. The **interquartile range** IQR = Q₃ − Q₁ is the spread of the middle half, and the **semi-interquartile range** is (Q₃ − Q₁) ÷ 2. Extreme values do not change them.',
    'For grouped data, read the quartiles from the ogive at n/4 and 3n/4, or work them out by interpolation like the median.',
    'To **compare** two sets of data, compare an average (which is larger?) and a measure of spread (which is more consistent?).',
  ], 'spread-measures', 'Always give one average and one measure of spread when comparing.',
  ['Which measure of spread is not affected by one very large value?', ['The interquartile range', 'The range', 'The mean', 'The total'], 'It uses only the middle half.'],
  [['Dispersion', 'How spread out a set of data is.'], ['Interquartile range', 'The upper quartile minus the lower quartile.'], ['Semi-interquartile range', 'Half of the interquartile range.']],
  [
    { q: 'Find the range, the quartiles and the interquartile range of: 3, 5, 6, 8, 9, 11, 12, 15, 18, 20, 24.', steps: ['n = 11 and the data are in order: range = 24 − 3 = **21**.', 'Median = the 6th value = 11.', 'Q₁ = median of 3, 5, 6, 8, 9 = 6; Q₃ = median of 12, 15, 18, 20, 24 = 18.', 'IQR = 18 − 6 = **12**; semi-interquartile range = **6**.'] },
    { q: 'Farmer A’s daily milk yields have median 12 litres and IQR 3 litres; farmer B’s have median 12 litres and IQR 8 litres. Compare them.', steps: ['The medians are equal, so on average they produce the same amount.', 'A’s IQR is smaller, so **A’s yields are more consistent**.'] },
  ]),

  L('ma-stddev-5', 'ma-f5-dispersion', '4.3', 'Mean deviation, variance and standard deviation', 13, ['Statistics'], [
    'The **mean deviation** is the average distance of the values from the mean: Σ|x − mean| ÷ n.',
    'The **variance** is the mean of the squared deviations: Σ(x − mean)² ÷ n, which is also Σx² ÷ n − mean². The **standard deviation** is the square root of the variance. For a frequency table, use Σf(x − mean)² ÷ Σf, or Σfx² ÷ Σf − mean².',
    'The standard deviation is in the same units as the data. The larger it is, the more spread out the data are; a small standard deviation means the values are close to the mean.',
    'Set the working out in a table with columns x, x − mean and (x − mean)² (with f and fx² for a frequency table).',
  ], 'spread-measures', 'Square the deviations before you add them: otherwise they add up to zero.',
  ['The variance of a set of data is 25. Its standard deviation is:', ['5', '25', '625', '12.5'], 'The square root of the variance.'],
  [['Mean deviation', 'The mean of the distances of the values from their mean.'], ['Variance', 'The mean of the squared deviations from the mean.'], ['Standard deviation', 'The square root of the variance.']],
  [
    { q: 'Find the mean deviation and the standard deviation of 4, 6, 7, 9 and 14.', steps: ['Mean = 40 ÷ 5 = 8.', 'Deviations: −4, −2, −1, 1, 6; mean deviation = (4 + 2 + 1 + 1 + 6) ÷ 5 = **2.8**.', 'Squares: 16, 4, 1, 1, 36; variance = 58 ÷ 5 = 11.6.', 'Standard deviation = √11.6 ≈ **3.41**.'] },
    { q: 'For the goals data (0, 1, 2, 3, 4, 5 with frequencies 4, 7, 5, 2, 1, 1) the mean is 1.6. Find the standard deviation.', steps: ['Σfx² = 0 + 7 + 20 + 18 + 16 + 25 = 86.', 'Variance = 86 ÷ 20 − 1.6² = 4.3 − 2.56 = 1.74.', 'Standard deviation = √1.74 ≈ **1.32 goals**.'] },
  ]),

  // ---------- Probability ----------
  L('ma-samplespace-5', 'ma-f5-probability', '5.1', 'Experimental probability and sample spaces', 12, ['Probability'], [
    'An **experiment** (or trial) has **outcomes**. The **sample space** is the set of all possible outcomes, and an **event** is a set of outcomes. Every probability lies from 0 (impossible) to 1 (certain).',
    'When the outcomes are equally likely, the **theoretical probability** is P(A) = n(A) ÷ n(S). The **experimental probability** (relative frequency) is the number of times A happened ÷ the number of trials; it gets closer to the theoretical value as the number of trials grows.',
    'For two events together, list the sample space in a **possibility diagram**: a grid for two dice (6 × 6 = 36 outcomes), or for a coin and a die (2 × 6 = 12).',
    'The **expected frequency** of an event is its probability × the number of trials.',
  ], 'sample-space', 'Count the outcomes in the grid; do not guess.',
  ['A fair die is thrown 300 times. The expected number of sixes is:', ['50', '6', '100', '300'], '300 × 1/6.'],
  [['Sample space', 'The set of all possible outcomes of an experiment.'], ['Event', 'A set of outcomes.'], ['Relative frequency', 'The number of times an event happened ÷ the number of trials.'], ['Expected frequency', 'Probability × number of trials.']],
  [
    { q: 'Two dice are thrown. Find P(a double) and P(total greater than 9).', steps: ['There are 36 equally likely outcomes.', 'Doubles: 6 outcomes, so P = 6/36 = **1/6**.', 'Totals of 10, 11 or 12: (4, 6), (5, 5), (6, 4), (5, 6), (6, 5), (6, 6), which is 6 outcomes, so P = **1/6**.'] },
    { q: 'A drawing pin landed point up 63 times in 150 throws. Estimate the probability of point up, and the number of times it would land point up in 1 000 throws.', steps: ['P ≈ 63 ÷ 150 = **0.42**.', 'Expected number ≈ 0.42 × 1 000 = **420**.'] },
  ]),

  L('ma-problaws-5', 'ma-f5-probability', '5.2', 'Complementary, mutually exclusive and independent events', 12, ['Probability'], [
    'The **complement** A′ of an event A is "A does not happen": P(A′) = 1 − P(A).',
    'The **addition law**: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). For **mutually exclusive** events, which cannot happen together, P(A ∩ B) = 0 and P(A or B) = P(A) + P(B).',
    'The **multiplication law** for **independent** events, where one does not affect the other: P(A and B) = P(A) × P(B). Do not confuse the two ideas: mutually exclusive events (each with a probability above 0) cannot be independent, because if one happens the other cannot.',
    '"At least one" is easiest through the complement: P(at least one) = 1 − P(none).',
  ], 'sample-space', 'For "at least one", work out "none" and take it from 1.',
  ['A and B are mutually exclusive, P(A) = 0.6 and P(B) = 0.3. P(A or B) =', ['0.9', '0.18', '0.3', '0.72'], 'Add the probabilities.'],
  [['Complementary events', 'An event and the event that it does not happen.'], ['Addition law', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B).'], ['Multiplication law', 'P(A and B) = P(A) × P(B) for independent events.']],
  [
    { q: 'In a class, P(a pupil walks to school) = 0.45 and P(comes by taxi) = 0.35. Find P(walks or comes by taxi) and P(neither).', steps: ['The events are mutually exclusive: 0.45 + 0.35 = **0.8**.', 'P(neither) = 1 − 0.8 = **0.2**.'] },
    { q: 'The probability that a maize seed germinates is 0.8. Three seeds are planted independently. Find P(all three germinate) and P(at least one germinates).', steps: ['P(all three) = 0.8³ = **0.512**.', 'P(none) = 0.2³ = 0.008.', 'P(at least one) = 1 − 0.008 = **0.992**.'] },
  ]),

  L('ma-trees-5', 'ma-f5-trees', '6.1', 'Tree diagrams with and without replacement', 13, ['Probability'], [
    'A **tree diagram** shows the outcomes of events that happen one after another. Write the probability on each branch; the branches from any one point add up to 1. **Multiply** along a path to get the probability of that combination, and **add** the results of different paths that give the same event.',
    '**With replacement**, the first object is put back, so the probabilities on the second set of branches are the same as on the first.',
    '**Without replacement**, the first object is not put back: the numbers in the bag change, so the second-stage probabilities change. The events are **dependent**.',
    'A tree can have three or more stages (for example three tosses of a coin, with 8 paths).',
  ], 'tree-diagram', 'Check that the probabilities of all the paths add up to 1.',
  ['Two cards are drawn from a pack of 52 without replacement. P(both aces) =', ['1/221', '1/169', '4/52', '1/13'], '4/52 × 3/51 = 12/2652 = 1/221.'],
  [['Tree diagram', 'A diagram of branches showing successive events and their probabilities.'], ['With replacement', 'Putting the first object back before the second is chosen.'], ['Dependent events', 'Events where one changes the probability of the other.']],
  [
    { q: 'A bag has 5 red and 3 green sweets. Two are taken without replacement. Find P(both red), P(one of each colour) and P(at least one green).', steps: ['P(RR) = 5/8 × 4/7 = 20/56 = **5/14**.', 'P(RG) + P(GR) = 5/8 × 3/7 + 3/8 × 5/7 = 30/56 = **15/28**.', 'P(at least one green) = 1 − 5/14 = **9/14**.', 'Check: P(GG) = 3/8 × 2/7 = 6/56, and 20 + 30 + 6 = 56.'] },
    { q: 'The probability that a bus is late on any day is 0.2, independently. Find the probability that it is late on exactly one of two days.', steps: ['P(late, not late) + P(not late, late) = 0.2 × 0.8 + 0.8 × 0.2', '= **0.32**.'] },
  ]),

  L('ma-conditional-5', 'ma-f5-trees', '6.2', 'Conditional probability', 12, ['Probability'], [
    'P(B | A) means "the probability of B, given that A has happened". It is **P(B | A) = P(A ∩ B) ÷ P(A)**, so P(A ∩ B) = P(A) × P(B | A): this is what a tree diagram does when it multiplies along the branches.',
    'If A and B are independent, knowing that A happened does not change the chance of B: P(B | A) = P(B).',
    'A **two-way table** makes conditional probability easy: restrict attention to the row or column of the condition, then divide.',
  ], 'tree-diagram', '"Given that" shrinks the sample space to the outcomes where the condition is true.',
  ['If A and B are independent, P(B | A) equals:', ['P(B)', 'P(A)', '0', '1'], 'A happening does not change the chance of B.'],
  [['Conditional probability', 'The probability of an event given that another event has happened.'], ['Two-way table', 'A table that counts outcomes by two features at once.']],
  [
    { q: 'In a school of 200 pupils, 120 are girls; 30 girls and 20 boys wear glasses. A pupil chosen at random wears glasses. Find the probability that the pupil is a girl.', steps: ['50 pupils wear glasses, and 30 of them are girls.', 'P(girl | glasses) = 30 ÷ 50 = **3/5**.'] },
    { q: 'P(A) = 0.6 and P(B | A) = 0.25. Find P(A ∩ B).', steps: ['P(A ∩ B) = 0.6 × 0.25 = **0.15**.'] },
    { q: 'In the sweets example (5 red, 3 green, without replacement), the first sweet is red. Find the probability that the second is green.', steps: ['After a red sweet, 4 red and 3 green are left.', 'P(green second | red first) = **3/7**.'] },
  ]),

  // ---------- Polygons and quadrilaterals ----------
  L('ma-polygons-5', 'ma-f5-polygons', '7.1', 'Angles of polygons', 12, ['Geometry'], [
    'A **polygon** is a closed plane figure with straight sides. It is **convex** when every interior angle is less than 180°. Names: triangle (3 sides), quadrilateral (4), pentagon (5), hexagon (6), heptagon (7), octagon (8), nonagon (9), decagon (10) and dodecagon (12).',
    'From one vertex, a polygon with n sides can be cut into (n − 2) triangles, so the **sum of the interior angles is (n − 2) × 180°**.',
    'The **exterior angles** of any convex polygon add up to **360°**, and at each vertex interior angle + exterior angle = 180°.',
    'A **regular polygon** has equal sides and equal angles: each exterior angle is 360° ÷ n and each interior angle 180° − 360° ÷ n. So n = 360 ÷ (exterior angle). Equilateral triangles, squares and regular hexagons fit together without gaps (they **tessellate**) because their angles divide 360°.',
  ], 'polygon-angles', 'Work with the exterior angle first: it is 360° ÷ n.',
  ['The interior angles of a heptagon add up to:', ['900°', '1 260°', '720°', '1 080°'], '(7 − 2) × 180°.'],
  [['Polygon', 'A closed plane figure with straight sides.'], ['Convex polygon', 'A polygon whose interior angles are all less than 180°.'], ['Regular polygon', 'A polygon with equal sides and equal angles.'], ['Exterior angle', 'The angle between one side and the next side extended.']],
  [
    { q: 'Find each interior angle of a regular decagon.', steps: ['Exterior angle = 360° ÷ 10 = 36°.', 'Interior angle = 180° − 36° = **144°**.', 'Check: sum = 8 × 180° = 1 440° = 10 × 144°.'] },
    { q: 'Each interior angle of a regular polygon is 156°. How many sides has it?', steps: ['Exterior angle = 180° − 156° = 24°.', 'n = 360 ÷ 24 = **15**.'] },
    { q: 'Four angles of a pentagon are 100°, 110°, 95° and 120°. Find the fifth.', steps: ['Sum = 3 × 180° = 540°.', '540° − 425° = **115°**.'] },
  ]),

  L('ma-symmetry-5', 'ma-f5-polygons', '7.2', 'Line and rotational symmetry', 11, ['Geometry'], [
    'A figure has **line symmetry** (reflection symmetry) when a mirror line divides it into two halves that are reflections of each other. It has **rotational symmetry** when it fits onto itself in a rotation of less than a full turn; the **order** of rotational symmetry is the number of times it fits in one full turn.',
    'Symmetries of common shapes:\n- equilateral triangle: 3 lines, order 3; isosceles triangle: 1 line, order 1\n- square: 4 lines, order 4; rectangle and rhombus: 2 lines, order 2\n- parallelogram: no lines, order 2; kite and isosceles trapezium: 1 line, order 1\n- regular polygon with n sides: n lines, order n; circle: every diameter is a line of symmetry.',
    'Symmetry explains properties: the line of symmetry of an isosceles triangle bisects its base at right angles, so the base angles are equal; the diagonals of a rhombus are lines of symmetry, so they cross at right angles; every diameter of a circle is a line of symmetry, so the perpendicular from the centre bisects a chord.',
    'Symmetry is everywhere in design: in the patterns of Ndop cloth, woven baskets, buildings and logos.',
  ], 'polygon-angles', 'Turn the page round a point (or use tracing paper) to find the order of rotational symmetry.',
  ['The order of rotational symmetry of an equilateral triangle is:', ['3', '1', '6', '2'], 'It fits onto itself every 120°.'],
  [['Line of symmetry', 'A mirror line that divides a figure into two matching halves.'], ['Rotational symmetry', 'Fitting onto itself after a rotation of less than a full turn.'], ['Order of symmetry', 'The number of times a figure fits onto itself in one full turn.']],
  [
    { q: 'State the number of lines of symmetry and the order of rotational symmetry of a regular hexagon and of a parallelogram that is not a rectangle or a rhombus.', steps: ['Regular hexagon: **6 lines** of symmetry, rotational order **6**.', 'Parallelogram: **no lines** of symmetry, rotational order **2**.'] },
  ]),

  L('ma-quadrilaterals-5', 'ma-f5-polygons', '7.3', 'Properties and areas of quadrilaterals', 13, ['Geometry', 'Mensuration'], [
    'The properties:\n- **parallelogram**: opposite sides parallel and equal, opposite angles equal, diagonals bisect each other\n- **rectangle**: a parallelogram with right angles; the diagonals are equal\n- **rhombus**: a parallelogram with four equal sides; the diagonals bisect each other at right angles and bisect the angles\n- **square**: all of these properties together\n- **trapezium**: one pair of parallel sides (an isosceles trapezium also has equal non-parallel sides)\n- **kite**: two pairs of equal adjacent sides; one diagonal bisects the other at right angles.\nA trapezium and a kite are not parallelograms: they do not have two pairs of parallel sides.',
    'Areas:\n- parallelogram: base × perpendicular height (or ab sin C)\n- trapezium: ½(a + b) × h, where a and b are the parallel sides\n- rhombus and kite: ½ × d₁ × d₂, half the product of the diagonals\n- any quadrilateral: split it into two triangles.',
    'Land is measured in square metres and **hectares**: 1 ha = 10 000 m².',
  ], 'polygon-angles', 'A diagonal splits any quadrilateral into two triangles: use this when no formula fits.',
  ['Which quadrilateral has diagonals that bisect each other at right angles but are not equal?', ['A rhombus that is not a square', 'A rectangle', 'A square', 'A trapezium'], 'In a square the diagonals are also equal.'],
  [['Parallelogram', 'A quadrilateral with both pairs of opposite sides parallel.'], ['Trapezium', 'A quadrilateral with one pair of parallel sides.'], ['Rhombus', 'A parallelogram with four equal sides.'], ['Kite', 'A quadrilateral with two pairs of equal adjacent sides.']],
  [
    { q: 'A field is a trapezium with parallel sides of 80 m and 120 m, 50 m apart. Find its area in hectares.', steps: ['A = ½ × (80 + 120) × 50 = 5 000 m².', '1 ha = 10 000 m², so the area is **0.5 ha**.'] },
    { q: 'A rhombus has diagonals of 10 cm and 24 cm. Find its area and the length of a side.', steps: ['Area = ½ × 10 × 24 = **120 cm²**.', 'The diagonals bisect each other at 90°: side = √(5² + 12²) = **13 cm**.'] },
    { q: 'A parallelogram has sides of 8 cm and 5 cm with an angle of 60° between them. Find its area.', steps: ['Area = 8 × 5 × sin 60°', '= 40 × 0.866 = **34.6 cm²**.'] },
  ]),

  // ---------- Logic ----------
  L('ma-statements-5', 'ma-f5-logic', '9.1', 'Statements and logical connectives', 13, ['Logic'], [
    'A **statement** (proposition) is a sentence that is either true or false, but not both: "7 is a prime number" is true and "2 + 2 = 5" is false. Questions, commands and exclamations are not statements. Statements are named p, q, r, and their **truth values** are T (true) or F (false).',
    'The connectives:\n- **negation** ~p, "not p": true when p is false\n- **conjunction** p ∧ q, "p and q": true only when both are true\n- **disjunction** p ∨ q, "p or q": true when at least one is true\n- **implication** p ⇒ q, "if p then q": false only when p is true and q is false\n- **equivalence** p ⇔ q, "p if and only if q": true when p and q have the same truth value.',
    'For the implication p ⇒ q:\n- the **converse** is q ⇒ p\n- the **inverse** is ~p ⇒ ~q\n- the **contrapositive** is ~q ⇒ ~p, which always has the same truth value as p ⇒ q.\n"If it is raining, the ground is wet" is true, but its converse, "if the ground is wet, it is raining", may be false: someone may have washed the yard.',
    'Logic is used in computer programs (IF … THEN … ELSE), in law and in every mathematical proof.',
  ], 'truth-table', 'An implication with a false first part is always true.',
  ['p is false and q is true. Which of these is true?', ['p ⇒ q', 'p ∧ q', '~q', 'p ⇔ q'], 'An implication with a false first part is true.'],
  [['Statement', 'A sentence that is either true or false.'], ['Negation', 'The statement "not p".'], ['Conjunction', 'The statement "p and q".'], ['Disjunction', 'The statement "p or q".'], ['Implication', 'The statement "if p then q".']],
  [
    { q: 'p: "Douala is a port." q: "Garoua is in the Far North Region." Give the truth values of p, q, p ∧ q, p ∨ q and p ⇒ q.', steps: ['p is true; q is false (Garoua is the capital of the North Region).', 'p ∧ q is **false** and p ∨ q is **true**.', 'p ⇒ q is **false**, because p is true and q is false.'] },
    { q: 'Write the converse and the contrapositive of "If a number is divisible by 4, then it is even".', steps: ['Converse: "If a number is even, then it is divisible by 4": **false** (6 is even).', 'Contrapositive: "If a number is not even, then it is not divisible by 4": **true**, like the original.'] },
  ]),

  L('ma-truthtables-5', 'ma-f5-logic', '9.2', 'Truth tables, tautologies and arguments', 13, ['Logic'], [
    'A **truth table** lists every combination of truth values: 2 statements need 4 rows, 3 statements need 8 rows (2ⁿ rows for n statements). Add a column for each part of the compound statement and work across.',
    'A **tautology** is true in every row (such as p ∨ ~p); a **contradiction** is false in every row (such as p ∧ ~p). Two statements are **logically equivalent** when their columns are identical: for example p ⇒ q, ~p ∨ q and ~q ⇒ ~p are all equivalent.',
    'De Morgan’s laws: ~(p ∧ q) is equivalent to ~p ∨ ~q, and ~(p ∨ q) to ~p ∧ ~q. They match the set laws (A ∩ B)′ = A′ ∪ B′ and (A ∪ B)′ = A′ ∩ B′.',
    'A **valid argument** has a conclusion that must be true when the premises are true. From "p ⇒ q" and "p" we may conclude "q": "If the rains come, the maize grows. The rains came. So the maize grows."',
  ], 'truth-table', 'Write the rows in the same order every time: TT, TF, FT, FF.',
  ['How many rows has a truth table for three statements p, q and r?', ['8', '6', '3', '9'], '2³ = 8.'],
  [['Truth table', 'A table of the truth values of a statement for every combination of its parts.'], ['Tautology', 'A statement that is true in every case.'], ['Contradiction', 'A statement that is false in every case.'], ['Equivalent statements', 'Statements with identical truth tables.']],
  [
    { q: 'Use a truth table to show that p ⇒ q and ~p ∨ q are equivalent.', steps: ['Rows (p, q): TT, TF, FT, FF.', 'p ⇒ q: T, F, T, T.', '~p: F, F, T, T, so ~p ∨ q: T, F, T, T.', 'The columns are identical, so the statements are **equivalent**.'] },
    { q: 'Show that (p ∧ q) ⇒ p is a tautology.', steps: ['p ∧ q is T only in the first row, where p is T: T ⇒ T is T.', 'In the other rows p ∧ q is F, and an implication with a false first part is T.', 'Every row is T, so it is a **tautology**.'] },
  ]),

  // ---------- Three dimensions ----------
  L('ma-3dangles-5', 'ma-f5-solids3d', '15.1', 'Lines and planes in three dimensions', 13, ['Geometry', 'Mensuration'], [
    'In a three-dimensional problem, draw a clear sketch of the solid, find the right-angled triangle that contains what you need, and redraw that triangle flat with its measurements.',
    'For a cuboid l by w by h: a **face diagonal** is √(l² + w²) and the **space diagonal** is √(l² + w² + h²).',
    'The **angle between a line and a plane**: from a point on the line, drop a perpendicular to the plane. The line joining its foot to the point where the line meets the plane is the **projection** of the line on the plane. The angle between the line and the plane is the angle between the line and its projection.',
    'The **angle between two lines** that meet is found in a triangle that contains both, using the ratios or the cosine rule. Solids can also be drawn to scale, for example a plan of a building at 1 : 100.',
  ], 'cuboid-3d', 'Name the right angle in every triangle you use before you calculate.',
  ['The space diagonal of a cube of side 1 m is:', ['√3 m', '√2 m', '3 m', '1 m'], '√(1 + 1 + 1).'],
  [['Space diagonal', 'A line joining opposite corners of a solid through its inside.'], ['Projection', 'The "shadow" of a line on a plane, made by perpendiculars to the plane.'], ['Angle between a line and a plane', 'The angle between the line and its projection on the plane.']],
  [
    { q: 'A cuboid ABCDEFGH has AB = 8 cm, BC = 6 cm and vertical edge CG = 5 cm. Find the diagonal AG and the angle it makes with the base ABCD.', steps: ['Base diagonal AC = √(8² + 6²) = 10 cm.', 'AG = √(10² + 5²) = √125 ≈ **11.2 cm**.', 'The projection of AG on the base is AC, so tan θ = 5 ÷ 10 = 0.5.', '**θ = 26.6°**.'] },
    { q: 'A flagpole 10 m high stands at one corner of a square playground of side 20 m. Find the angle of elevation of the top of the pole from the opposite corner.', steps: ['The diagonal of the playground = 20√2 ≈ 28.28 m.', 'tan θ = 10 ÷ 28.28 = 0.3536', '**θ = 19.5°**.'] },
  ]),

  L('ma-tetrahedron-5', 'ma-f5-solids3d', '15.2', 'Tetrahedra, frustums and similar solids', 13, ['Mensuration'], [
    'A **tetrahedron** is a pyramid on a triangular base: it has 4 triangular faces, 6 edges and 4 vertices. A regular tetrahedron has four equilateral faces. Its volume is ⅓ × base area × height; for a regular tetrahedron of edge a, the height is a√(2/3) and the volume is a³ ÷ (6√2).',
    'A **frustum** is a cone (or pyramid) with its top cut off parallel to the base, like a bucket or a lampshade. Its volume is the volume of the whole cone minus the volume of the small cone removed; use similar triangles to find the height of the whole cone.',
    'For any solid with flat faces (a **polyhedron**), **F + V − E = 2** (faces + vertices − edges): a tetrahedron has 4 + 4 − 6 = 2 and a cube 6 + 8 − 12 = 2.',
    'Similar solids: lengths in the ratio k give areas in the ratio k² and volumes in the ratio k³.',
  ], 'solid-formulas', 'For a frustum, first complete the cone with similar triangles.',
  ['How many edges has a tetrahedron?', ['6', '4', '8', '12'], 'Three round the base and three up to the top.'],
  [['Tetrahedron', 'A pyramid with a triangular base; it has four triangular faces.'], ['Frustum', 'The part of a cone or pyramid left when its top is cut off parallel to the base.'], ['Polyhedron', 'A solid with flat faces.']],
  [
    { q: 'Find the volume of a regular tetrahedron of edge 6 cm.', steps: ['Base area = ½ × 6 × 6 × sin 60° = 15.59 cm².', 'Height = 6 × √(2/3) = 4.899 cm.', 'V = ⅓ × 15.59 × 4.899 ≈ **25.5 cm³**.', 'Check: a³ ÷ (6√2) = 216 ÷ 8.485 = 25.5.'] },
    { q: 'A bucket is a frustum of a cone with top radius 15 cm, bottom radius 10 cm and depth 20 cm. Find its capacity in litres (π = 3.142).', steps: ['Complete the cone: the radius grows from 10 cm to 15 cm over 20 cm, so the whole cone is 60 cm high and the small cone 40 cm.', 'Whole cone: ⅓ × 3.142 × 15² × 60 = 14 139 cm³.', 'Small cone: ⅓ × 3.142 × 10² × 40 = 4 189 cm³.', 'Capacity = 9 950 cm³ ≈ **9.95 litres**.'] },
  ]),

  // ---------- GCE clinics and mocks ----------
  L('ma-p1clinic-5', 'ma-f5-gce', '18.1', 'Paper 1 clinic: speed and accuracy', 11, ['Exam skills', 'Revision'], [
    'In Term 3 the whole syllabus has been taught, and every lesson is examination practice. Paper 1 (1½ hours) is multiple choice from the whole syllabus. Do one timed set every day, mark it at once, and write down each error with its topic.',
    'Fast methods for frequent topics:\n- number bases: change to base ten to check\n- sets: draw a Venn diagram, starting from the middle\n- variation: write y = kx (or k/x) and find k first\n- factorisation: expand the options\n- logic: write a small truth table\n- indices and logarithms: use the laws, not the calculator.',
    'Accuracy: read each question twice, watch for NOT and EXCEPT, check units and signs, and make sure every question has an answer before time runs out.',
  ], 'gce-maths-papers', 'Mark a question you are unsure of and come back to it; never leave a blank.',
  ['Near the end of Paper 1, the best use of the last minutes is to:', ['Return to the marked questions and make sure every question is answered', 'Start revising a new topic', 'Copy out the questions', 'Leave early'], 'A blank answer can never score.'],
  [['Examination clinic', 'A practice session on the question types that come up most often.']],
  [
    { q: 'What is the truth value of (p ∨ q) ⇒ p when p is false and q is true?', steps: ['p ∨ q is T.', 'T ⇒ F is **F**.'] },
    { q: 'y varies inversely as x², and y = 3 when x = 2. Find y when x = 6.', steps: ['k = 3 × 4 = 12.', 'y = 12 ÷ 36 = **1/3**.'] },
  ]),

  L('ma-p2clinic-5', 'ma-f5-gce', '18.2', 'Paper 2 clinic: structured problems', 12, ['Exam skills', 'Revision'], [
    'Paper 2 (2½ hours) has longer questions in several parts. Share your time by the marks: a question worth m marks out of 100 deserves about m ÷ 100 × 150 minutes.',
    'Checklists for the question types the scheme highlights:\n- linear programming: define the variables, write the constraints, draw the lines accurately, shade as instructed, list the vertices and test them\n- vectors: write every vector in terms of a and b; show parallel lines with a multiple\n- cumulative frequency: table, points at the upper class boundaries, lines drawn for every reading\n- trigonometry: sketch, choose the rule, 3 significant figures, bearings in three figures\n- circle proofs: a reason for every statement\n- matrices: the determinant first, then check A × A⁻¹ = I.',
    'Command words: "show that" gives the answer, so every step must be written; "hence" means use the previous result; "estimate" means use the graph or rounded values.',
  ], 'gce-maths-papers', 'Read all the parts of a question before starting: later parts often show what the first part is for.',
  ['In a vector proof that P, Q and R are collinear, you must show:', ['PQ = k QR for some number k, and that they share the point Q', 'PQ and QR are perpendicular', 'PQ and QR have equal lengths', 'P, Q and R form a triangle'], 'Parallel vectors through a common point lie on one line.'],
  [['Command words', 'Words such as "show that", "hence" and "estimate" that say what kind of answer is needed.']],
  [
    { q: 'OA = a and OB = b. M is the midpoint of AB, and X is on OM with OX : XM = 2 : 1. Express OX in terms of a and b.', steps: ['OM = ½(a + b).', 'OX = ⅔ OM.', '**OX = ⅓(a + b)**.'] },
    { q: 'Plan your time for a question worth 15 marks on a paper of 100 marks lasting 150 minutes.', steps: ['15 ÷ 100 × 150 = **22.5 minutes**.', 'Keep about 10 minutes at the end for checking.'] },
  ]),

  L('ma-mock-5', 'ma-f5-gce', '18.3', 'Mock examinations and remediation', 12, ['Exam skills', 'Revision'], [
    'The scheme places a school or regional **mock examination** in Term 3: a complete Paper 1 and Paper 2 under real time limits. Treat it exactly like the GCE: no notes, a clock, and all your instruments.',
    'After the mock, correct every script and sort each lost mark into one of four kinds:\n- a **knowledge gap**: re-learn the topic and practise it\n- a **method error**: redo the worked examples step by step\n- a **careless slip**: slow down and check by substituting\n- **time trouble**: practise more timed questions.',
    'The scheme’s remediation list: matrix inversion, reading cumulative frequency curves, circle proofs, scale constructions, probability trees and the quadratic formula.',
    'In the last days, write your own formula sheet (areas and volumes, the trigonometry rules, the quadratic formula, AP and GP formulas, the laws of indices and logarithms), sleep well, and check your instruments and calculator.',
  ], 'mock-cycle', 'Every corrected mistake is a mark gained in June.',
  ['After a mock, which kind of error is fixed by reading the questions more slowly?', ['Careless slips', 'Knowledge gaps', 'Time trouble', 'Missing instruments'], 'Slips come from rushing, not from not knowing.'],
  [['Mock examination', 'A full practice examination taken under real conditions.'], ['Remediation', 'Targeted re-teaching and practice of the topics where errors were made.']],
  [
    { q: 'A pupil found det = −2 for [3 4; 2 2] and then wrote the inverse as [2 −4; −2 3]. Correct the answer.', steps: ['det = 3 × 2 − 4 × 2 = −2, which is right.', 'The adjoint [2 −4; −2 3] must still be divided by the determinant.', 'A⁻¹ = −½ × [2 −4; −2 3] = **[−1 2; 1 −1.5]**.', 'Check: [3 4; 2 2] × [−1 2; 1 −1.5] = [1 0; 0 1].'] },
  ]),
];
