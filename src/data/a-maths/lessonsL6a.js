// A Level Pure Mathematics lessons, Lower Sixth (part 1): quadratics, moduli
// and polynomials, partial fractions, logic and proof, straight lines, the
// circle, indices and logarithms. Original text written for this app.

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

export const LESSONS_L6A = [
  // ---------- 1. Quadratics ----------
  L('pm-quad-1', 'mm-l6-quadratics', '1.1', 'Quadratic functions: completing the square, roots and the discriminant', 16, ['Algebra'], [
    'A quadratic function f(x) = ax² + bx + c can be written in **completed-square form** a(x − p)² + q by halving the coefficient of x: x² − 6x + 11 = (x − 3)² − 9 + 11 = (x − 3)² + 2. The graph is a parabola with **vertex (p, q)** and axis of symmetry x = p; it opens upwards when a > 0 (q is then the minimum value) and downwards when a < 0 (q is the maximum).',
    'The roots of ax² + bx + c = 0 are **x = (−b ± √(b² − 4ac)) / 2a**. The **discriminant** Δ = b² − 4ac decides their nature:\n- Δ > 0: two distinct real roots (the graph cuts the x-axis twice)\n- Δ = 0: one repeated root (the graph touches the x-axis)\n- Δ < 0: no real roots (the graph does not meet the x-axis).',
    'If α and β are the roots, then **α + β = −b/a** and **αβ = c/a**. Useful expressions follow from these without solving: α² + β² = (α + β)² − 2αβ, and (α − β)² = (α + β)² − 4αβ. An equation whose roots are α and β is x² − (α + β)x + αβ = 0.',
    'Conditions on a parameter: "x² + kx + 9 = 0 has equal roots" gives k² − 36 = 0, so k = ±6; "the line y = mx − 1 is a tangent to y = x²" means the equation x² − mx + 1 = 0 has Δ = 0, so m = ±2.',
  ], 'am-quad-graph', 'α + β = −b/a and αβ = c/a: use them instead of solving.',
  ['For x² + 4x + k = 0 to have no real roots, k must satisfy:', ['k > 4', 'k < 4', 'k = 4', 'k > −4'], 'Δ = 16 − 4k < 0.'],
  [['Discriminant', 'b² − 4ac, which decides the number of real roots of a quadratic equation.'], ['Vertex', 'The turning point of a parabola, (p, q) in a(x − p)² + q.'], ['Completing the square', 'Writing a quadratic as a(x − p)² + q.']],
  [
    { q: 'The roots of 2x² − 3x − 4 = 0 are α and β. Find α² + β² and form an equation with roots α² and β².', steps: ['α + β = 3/2, αβ = −2.', 'α² + β² = (3/2)² − 2(−2) = 9/4 + 4 = **25/4**; α²β² = (αβ)² = **4**.', 'The equation is x² − (25/4)x + 4 = 0, or **4x² − 25x + 16 = 0**.'] },
    { q: 'Find the range of k for which kx² + 4x + k = 0 has two distinct real roots (k ≠ 0).', steps: ['Δ = 16 − 4k² > 0, so k² < 4.', '**−2 < k < 2, with k ≠ 0** (if k = 0 the equation is not quadratic).'] },
  ]),

  L('pm-quad-2', 'mm-l6-quadratics', '1.2', 'Quadratic and rational inequalities with sign diagrams', 16, ['Algebra', 'Inequalities'], [
    'To solve a quadratic inequality, find the **critical values** (the roots), then decide where the expression has the required sign. For an upward parabola, (x − a)(x − b) < 0 between the roots (a < x < b) and > 0 outside them (x < a or x > b). Always rearrange so that one side is zero first.',
    'A **sign diagram** handles products and quotients: mark every value that makes a factor zero on a number line, then record the sign of each factor in each interval and multiply. For (x − 1)(x + 2)/(x − 3): the critical values are −2, 1 and 3; the expression is negative for x < −2, positive for −2 < x < 1, negative for 1 < x < 3, and positive for x > 3.',
    '**Never multiply both sides of an inequality by an expression that may be negative**: with (x + 1)/(x − 2) ≥ 3, subtract 3 to get (x + 1 − 3x + 6)/(x − 2) ≥ 0, that is (7 − 2x)/(x − 2) ≥ 0, then use a sign diagram. Values that make the denominator zero are always **excluded**; zeros of the numerator are included when the inequality is ≥ or ≤.',
    'Applications include finding the range of values of a parameter (from the discriminant) and the values of x for which a profit P(x) = −2x² + 40x − 150 is positive: −2(x − 5)(x − 15) > 0 gives 5 < x < 15.',
  ], 'am-sign-diagram', 'Rearrange to "something > 0", find critical values, then use a sign diagram.',
  ['The solution of x² − 4x − 5 ≥ 0 is:', ['x ≤ −1 or x ≥ 5', '−1 ≤ x ≤ 5', 'x ≥ 5', 'x ≤ −5 or x ≥ 1'], '(x − 5)(x + 1) ≥ 0 outside the roots.'],
  [['Critical value', 'A value of x at which an expression in an inequality is zero or undefined.'], ['Sign diagram', 'A number line showing the sign of an expression in each interval between critical values.']],
  [
    { q: 'Solve (x + 1)/(x − 2) ≥ 3.', steps: ['Rearrange: (x + 1)/(x − 2) − 3 ≥ 0, so (7 − 2x)/(x − 2) ≥ 0.', 'Critical values x = 2 (excluded) and x = 3.5 (included).', 'Sign diagram: negative for x < 2, positive for 2 < x < 3.5, negative for x > 3.5. So **2 < x ≤ 3.5**.'] },
    { q: 'Solve 2x² + x − 6 < 0.', steps: ['Factorise: (2x − 3)(x + 2) < 0.', 'Critical values −2 and 1.5; the parabola opens upwards.', 'So **−2 < x < 1.5**.'] },
  ]),

  // ---------- 2. Moduli and polynomials ----------
  L('pm-poly-1', 'mm-l6-polynomials', '2.1', 'The modulus function and radical equations', 15, ['Algebra'], [
    'The **modulus** |x| is the distance of x from zero: |x| = x when x ≥ 0 and |x| = −x when x < 0. Key results: **|x| < a ⇔ −a < x < a**, and **|x| > a ⇔ x < −a or x > a** (for a > 0). So |x − 3| < 2 gives 1 < x < 5: the numbers within 2 of 3.',
    'Equations: |2x − 1| = 5 gives 2x − 1 = 5 or 2x − 1 = −5, so x = 3 or x = −2. For |f(x)| = |g(x)|, square both sides (both are non-negative): f(x)² = g(x)². For |f(x)| = g(x), solve f(x) = ±g(x) and keep only answers with g(x) ≥ 0.',
    'The graph of **y = |f(x)|** is the graph of y = f(x) with every part below the x-axis reflected in it, giving V-shapes; the graph of y = f(|x|) is the part for x ≥ 0 reflected in the y-axis. Sketching both sides of |2x − 3| < x shows where one graph lies below the other: here 1 < x < 3.',
    '**Radical equations** contain square roots. Isolate a root, square both sides, and repeat if necessary. Squaring can create **extra roots**, so every answer must be checked in the original equation: √(x + 6) = x gives x² − x − 6 = 0, so x = 3 or x = −2, but √4 = 2 ≠ −2, so only x = 3.',
  ], 'am-modulus', 'After squaring, always check every answer in the original equation.',
  ['The solution set of |x + 1| ≥ 3 is:', ['x ≤ −4 or x ≥ 2', '−4 ≤ x ≤ 2', 'x ≥ 2', 'x ≤ −2 or x ≥ 4'], 'x + 1 ≤ −3 or x + 1 ≥ 3.'],
  [['Modulus', 'The absolute value of a number: its distance from zero.'], ['Radical equation', 'An equation in which the unknown appears under a root sign.'], ['Extraneous root', 'A value produced by squaring that does not satisfy the original equation.']],
  [
    { q: 'Solve |2x − 3| < x.', steps: ['The graphs y = |2x − 3| and y = x cross where 2x − 3 = x (x = 3) and where −(2x − 3) = x (x = 1).', 'Between these, the V-shape lies below the line.', '**1 < x < 3**.'] },
    { q: 'Solve √(2x + 3) − √(x + 1) = 1.', steps: ['√(2x + 3) = 1 + √(x + 1); square: 2x + 3 = 1 + 2√(x + 1) + x + 1, so x + 1 = 2√(x + 1).', 'Square again: (x + 1)² = 4(x + 1), so (x + 1)(x − 3) = 0: x = −1 or x = 3.', 'Check: x = −1 gives √1 − √0 = 1 ✓; x = 3 gives √9 − √4 = 1 ✓. **Both x = −1 and x = 3**.'] },
  ]),

  L('pm-poly-2', 'mm-l6-polynomials', '2.2', 'Polynomials: division, the remainder and factor theorems', 16, ['Algebra'], [
    'A polynomial of degree n divided by (x − a) gives a quotient of degree n − 1 and a constant remainder: **f(x) = (x − a)q(x) + R**. Long division works like ordinary long division: divide the leading terms, multiply back, subtract and bring down the next term. Missing powers are written with a zero coefficient (x³ + 0x² − 2x + 4).',
    '**Remainder theorem**: the remainder when f(x) is divided by (x − a) is **f(a)**; when divided by (ax − b) it is **f(b/a)**. **Factor theorem**: (x − a) is a factor of f(x) if and only if **f(a) = 0**.',
    'Factorising a cubic: try small integer factors of the constant term (±1, ±2, ±3, …) until f(a) = 0, then divide by (x − a) (or compare coefficients) to find the quadratic factor, and factorise or solve that. For x³ − 7x + 6: f(1) = 0, so x³ − 7x + 6 = (x − 1)(x² + x − 6) = (x − 1)(x − 2)(x + 3).',
    'Unknown coefficients: if (x − 2) is a factor of x³ + px² − x − 2 and the remainder on division by (x + 1) is 4, then f(2) = 8 + 4p − 2 − 2 = 0 gives p = −1, and the second condition can be used to check or to find a second unknown.',
  ], 'am-cubic-graph', 'Test factors of the constant term first: ±1, ±2, ±3, …',
  ['When f(x) = 2x³ − x² + 3 is divided by (2x + 1), the remainder is:', ['2.5', '3', '−2.5', '0'], 'f(−½) = −¼ − ¼ + 3 = 2.5.'],
  [['Remainder theorem', 'The remainder on dividing f(x) by (x − a) is f(a).'], ['Factor theorem', '(x − a) is a factor of f(x) exactly when f(a) = 0.'], ['Quotient', 'The polynomial obtained by division, q(x) in f(x) = (x − a)q(x) + R.']],
  [
    { q: 'Factorise f(x) = 2x³ + x² − 13x + 6 and solve f(x) = 0.', steps: ['f(2) = 16 + 4 − 26 + 6 = 0, so **(x − 2)** is a factor.', 'Divide: 2x³ + x² − 13x + 6 = (x − 2)(2x² + 5x − 3) = (x − 2)(2x − 1)(x + 3).', 'Roots: **x = 2, x = ½, x = −3**.'] },
    { q: 'f(x) = x³ + ax² + bx − 6 has a factor (x − 1) and leaves remainder −20 on division by (x + 2). Find a and b.', steps: ['f(1) = 0: 1 + a + b − 6 = 0, so a + b = 5.', 'f(−2) = −20: −8 + 4a − 2b − 6 = −20, so 4a − 2b = −6, that is 2a − b = −3.', 'Adding: 3a = 2, so **a = ⅔, b = 13/3**.'] },
  ]),

  // ---------- 3. Partial fractions ----------
  L('pm-pf-1', 'mm-l6-partial-fractions', '3.1', 'Partial fractions with linear and repeated factors', 16, ['Algebra'], [
    'A **rational function** is a fraction of two polynomials. Splitting it into **partial fractions** reverses the process of adding fractions, and makes later work (summing series, integrating) much easier. First make sure the fraction is **proper** (numerator of lower degree than the denominator) and that the denominator is fully factorised.',
    'Forms to use:\n- distinct linear factors: (px + q)/((x − a)(x − b)) = A/(x − a) + B/(x − b)\n- a repeated factor: f(x)/((x − a)²(x − b)) = A/(x − a) + B/(x − a)² + C/(x − b).\nMultiply through by the denominator to get an identity, then find the constants.',
    'Finding the constants: **substitute** values of x that make factors zero (the "cover-up" idea: for 3/((x − 1)(x + 2)), put x = 1 to get A = 3/3 = 1, and x = −2 to get B = 3/(−3) = −1); for the remaining constants, **compare coefficients** of the highest power or substitute any convenient value such as x = 0.',
    'Check the answer by recombining the fractions, or by testing one value of x in both forms.',
  ], 'am-partial-fractions', 'Repeated factor (x − a)²: include both A/(x − a) and B/(x − a)².',
  ['In (5x + 1)/((x − 1)(x + 2)) = A/(x − 1) + B/(x + 2), the value of A is:', ['2', '3', '1', '6'], 'Put x = 1: 6 = 3A.'],
  [['Partial fractions', 'Simpler fractions whose sum equals a given rational function.'], ['Proper fraction', 'A rational function whose numerator has lower degree than its denominator.'], ['Identity', 'An equation true for every value of the variable.']],
  [
    { q: 'Express (x + 5)/((x − 1)(x + 1)) in partial fractions.', steps: ['x + 5 ≡ A(x + 1) + B(x − 1).', 'x = 1: 6 = 2A, so A = 3. x = −1: 4 = −2B, so B = −2.', '**3/(x − 1) − 2/(x + 1)**.'] },
    { q: 'Express (2x² + 1)/((x − 1)²(x + 2)) in partial fractions.', steps: ['2x² + 1 ≡ A(x − 1)(x + 2) + B(x + 2) + C(x − 1)².', 'x = 1: 3 = 3B, B = 1. x = −2: 9 = 9C, C = 1. Coefficients of x²: 2 = A + C, so A = 1.', '**1/(x − 1) + 1/(x − 1)² + 1/(x + 2)**.'] },
  ]),

  L('pm-pf-2', 'mm-l6-partial-fractions', '3.2', 'Partial fractions with quadratic factors and improper fractions', 15, ['Algebra'], [
    'A quadratic factor that cannot be factorised (negative discriminant, such as x² + 1 or x² + x + 1) gets a **linear numerator**: f(x)/((x − a)(x² + b)) = A/(x − a) + (Bx + C)/(x² + b). Find A by substitution, then compare coefficients for B and C.',
    'An **improper** fraction (numerator of equal or higher degree) must be divided first: (x² + 1)/(x² − 1) = 1 + 2/(x² − 1) = 1 + 1/(x − 1) − 1/(x + 1). In general, write the fraction as a polynomial plus a proper fraction, then split the proper part.',
    'A useful check on the form: the number of unknown constants must equal the degree of the denominator. For (x − 1)²(x² + 1), the degree is 4, and the form A/(x − 1) + B/(x − 1)² + (Cx + D)/(x² + 1) has four constants.',
    'Partial fractions are used in the method of differences (Σ 1/(r(r + 1)) = Σ (1/r − 1/(r + 1))), in binomial expansions of rational functions, and later in integration.',
  ], 'am-partial-fractions', 'Number of constants = degree of the denominator.',
  ['The correct form for (3x + 2)/((x + 1)(x² + 4)) is:', ['A/(x + 1) + (Bx + C)/(x² + 4)', 'A/(x + 1) + B/(x² + 4)', 'A/(x + 1) + B/(x + 2) + C/(x − 2)', '(Ax + B)/(x + 1)'], 'x² + 4 cannot be factorised over the reals.'],
  [['Irreducible quadratic', 'A quadratic with no real factors (negative discriminant).'], ['Improper fraction', 'A rational function whose numerator has degree at least that of the denominator.']],
  [
    { q: 'Express (x² + 2x + 3)/((x + 1)(x² + 1)) in partial fractions.', steps: ['x² + 2x + 3 ≡ A(x² + 1) + (Bx + C)(x + 1).', 'x = −1: 2 = 2A, A = 1. x² terms: 1 = A + B, so B = 0. Constants: 3 = A + C, so C = 2.', '**1/(x + 1) + 2/(x² + 1)**.'] },
    { q: 'Express (x³ + 2)/(x² − 1) as a polynomial plus partial fractions.', steps: ['Divide: x³ + 2 = x(x² − 1) + x + 2, so the fraction is x + (x + 2)/(x² − 1).', '(x + 2)/((x − 1)(x + 1)) = A/(x − 1) + B/(x + 1): x = 1 gives A = 3/2; x = −1 gives B = −1/2.', '**x + 3/(2(x − 1)) − 1/(2(x + 1))**.'] },
  ]),

  // ---------- 4. Logic and proof ----------
  L('pm-logic-1', 'mm-l6-logic', '4.1', 'Propositions, connectives and truth tables', 15, ['Logic'], [
    'A **proposition** is a statement that is either true (T) or false (F). Propositions are combined with **connectives**: negation ¬p (not p), conjunction p ∧ q (p and q), disjunction p ∨ q (p or q, or both), implication p ⇒ q (if p then q) and equivalence p ⇔ q (p if and only if q).',
    'A **truth table** lists every combination of truth values: with two propositions there are 4 rows, with three there are 8. p ∧ q is true only when both are true; p ∨ q is false only when both are false; **p ⇒ q is false only when p is true and q is false**; p ⇔ q is true when p and q have the same truth value.',
    'Related implications of p ⇒ q: the **converse** q ⇒ p, the **inverse** ¬p ⇒ ¬q and the **contrapositive** ¬q ⇒ ¬p. Only the contrapositive is equivalent to the original. "If n² is even then n is even" has the same truth as "if n is odd then n² is odd", which is easier to prove.',
    'A **tautology** is always true (p ∨ ¬p); a **contradiction** is always false (p ∧ ¬p). **De Morgan’s laws**: ¬(p ∧ q) ≡ ¬p ∨ ¬q and ¬(p ∨ q) ≡ ¬p ∧ ¬q. Two statements are equivalent when their truth tables are identical.',
  ], 'am-truth-table', 'p ⇒ q fails only when p is true and q is false.',
  ['Which statement is equivalent to "if it rains, the ground is wet"?', ['If the ground is not wet, it did not rain', 'If the ground is wet, it rained', 'If it does not rain, the ground is not wet', 'It rains and the ground is wet'], 'The contrapositive.'],
  [['Proposition', 'A statement that is either true or false.'], ['Contrapositive', 'The implication ¬q ⇒ ¬p, equivalent to p ⇒ q.'], ['Tautology', 'A compound statement true for every combination of truth values.']],
  [
    { q: 'Use a truth table to show that p ⇒ q is equivalent to ¬p ∨ q.', steps: ['Rows (p, q): TT, TF, FT, FF.', 'p ⇒ q: T, F, T, T. ¬p: F, F, T, T, so ¬p ∨ q: T, F, T, T.', 'The columns are identical, so **p ⇒ q ≡ ¬p ∨ q**.'] },
    { q: 'Write the negation of "every student passed".', steps: ['The negation of "for all, P" is "there exists one for which not P".', '**"At least one student did not pass."** (Not "every student failed".)'] },
  ]),

  L('pm-logic-2', 'mm-l6-logic', '4.2', 'Methods of proof and mathematical induction', 17, ['Logic', 'Proof'], [
    'Methods of proof:\n- **direct proof**: start from what is known and reason step by step to the result\n- **proof by contradiction**: assume the result is false and deduce something impossible (√2 is irrational: if √2 = p/q in lowest terms, then p² = 2q², so p is even, then q is even too, a contradiction)\n- **disproof by counter-example**: one case where a statement fails shows it is false ("n² + n + 41 is always prime" fails at n = 40).',
    '**Mathematical induction** proves a statement P(n) for every positive integer n:\n- **base case**: show P(1) is true\n- **inductive step**: assume P(k) is true for some k, and use it to show P(k + 1) is true\n- **conclusion**: since P(1) is true and P(k) ⇒ P(k + 1), P(n) is true for all n ≥ 1.\nLike a row of dominoes: the first falls, and each one knocks over the next.',
    'Induction proves sum formulas (Σ r = ½n(n + 1)), divisibility results (7ⁿ − 1 is divisible by 6), inequalities (2ⁿ > n for all n ≥ 1) and formulas for sequences given by recurrence relations.',
    'Writing it up: state P(n) clearly; show the base case with numbers; write "Assume P(k) is true, that is …"; show the step to k + 1 with every line of algebra; end with the conclusion sentence. Each part carries marks.',
  ], 'am-induction', 'Base case, assumption, step to k + 1, conclusion: write all four.',
  ['In an induction proof, after showing P(1) and that P(k) ⇒ P(k + 1), we may conclude that P(n) is true for:', ['every positive integer n', 'n = 1 and n = 2 only', 'even n only', 'no n'], 'The dominoes argument.'],
  [['Mathematical induction', 'A proof that a statement holds for n = 1 and that each case implies the next.'], ['Counter-example', 'A single case showing that a general statement is false.'], ['Proof by contradiction', 'Assuming a statement is false and deducing something impossible.']],
  [
    { q: 'Prove by induction that Σ (r = 1 to n) r² = ⅙n(n + 1)(2n + 1).', steps: ['**n = 1**: left side 1; right side ⅙ × 1 × 2 × 3 = 1. True.', '**Assume** Σ (r = 1 to k) r² = ⅙k(k + 1)(2k + 1). Then the sum to k + 1 = ⅙k(k + 1)(2k + 1) + (k + 1)² = ⅙(k + 1)[k(2k + 1) + 6(k + 1)] = ⅙(k + 1)(2k² + 7k + 6) = ⅙(k + 1)(k + 2)(2k + 3), the formula with n = k + 1.', '**Conclusion**: true for n = 1, and true for k ⇒ true for k + 1, so it is true for all positive integers n.'] },
    { q: 'Prove by induction that 7ⁿ − 1 is divisible by 6 for all n ≥ 1.', steps: ['n = 1: 7 − 1 = 6, divisible by 6.', 'Assume 7ᵏ − 1 = 6m. Then 7ᵏ⁺¹ − 1 = 7 × 7ᵏ − 1 = 7(6m + 1) − 1 = 42m + 6 = 6(7m + 1), divisible by 6.', 'So by induction **7ⁿ − 1 is divisible by 6 for all n ≥ 1**.'] },
  ]),

  // ---------- 5. Straight lines ----------
  L('pm-line-1', 'mm-l6-lines', '5.1', 'Gradients, equations of lines, parallel and perpendicular lines', 15, ['Coordinate geometry'], [
    'For points A(x₁, y₁) and B(x₂, y₂): the **gradient** m = (y₂ − y₁)/(x₂ − x₁), the **length** AB = √((x₂ − x₁)² + (y₂ − y₁)²) and the **mid-point** ((x₁ + x₂)/2, (y₁ + y₂)/2).',
    'Equations of a straight line: **y = mx + c** (gradient m, y-intercept c); **y − y₁ = m(x − x₁)** through a known point; the general form **ax + by + c = 0**, whose gradient is −a/b; and the two-point form (y − y₁)/(y₂ − y₁) = (x − x₁)/(x₂ − x₁).',
    '**Parallel** lines have equal gradients. **Perpendicular** lines have gradients whose product is −1 (m₁m₂ = −1), so the perpendicular to a line of gradient m has gradient −1/m. The **perpendicular bisector** of AB passes through the mid-point of AB at right angles to it.',
    'The **intersection** of two lines is found by solving their equations simultaneously. Three points are **collinear** if the gradients AB and BC are equal. The area of a triangle with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃) is ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|.',
  ], 'am-lines', 'Perpendicular gradients multiply to −1.',
  ['The perpendicular bisector of A(1, 3) and B(5, 7) has equation:', ['x + y = 8', 'y = x + 2', 'x − y = 8', 'y = −x + 4'], 'Mid-point (3, 5), gradient of AB 1, so perpendicular gradient −1.'],
  [['Gradient', 'The rate of change of y with x along a line: rise ÷ run.'], ['Perpendicular bisector', 'The line through the mid-point of a segment at right angles to it.'], ['Collinear', 'Lying on the same straight line.']],
  [
    { q: 'Find the equation of the line through (2, −1) perpendicular to 3x − 2y + 5 = 0.', steps: ['Gradient of the given line: 3/2.', 'Perpendicular gradient: −2/3.', 'y + 1 = −⅔(x − 2), so 3y + 3 = −2x + 4: **2x + 3y − 1 = 0**.'] },
    { q: 'Find the area of the triangle with vertices (0, 0), (4, 1) and (1, 3).', steps: ['Area = ½|0(1 − 3) + 4(3 − 0) + 1(0 − 1)|.', '= ½|0 + 12 − 1| = **5.5 square units**.'] },
  ]),

  L('pm-line-2', 'mm-l6-lines', '5.2', 'The angle between two lines and the distance from a point to a line', 15, ['Coordinate geometry'], [
    'A line making an angle θ with the positive x-axis has gradient m = tan θ. If two lines have gradients m₁ = tan θ₁ and m₂ = tan θ₂, the angle between them is θ₁ − θ₂, and from the formula for tan(A − B), the **acute angle** α between them satisfies **tan α = |(m₁ − m₂)/(1 + m₁m₂)|**. When 1 + m₁m₂ = 0 the lines are perpendicular.',
    'The **perpendicular distance** from the point P(x₁, y₁) to the line ax + by + c = 0 is **d = |ax₁ + by₁ + c| ÷ √(a² + b²)**. It is the shortest distance from P to the line. The sign of ax₁ + by₁ + c (before taking the modulus) shows which side of the line P lies on.',
    'The distance between two parallel lines ax + by + c₁ = 0 and ax + by + c₂ = 0 is |c₁ − c₂| ÷ √(a² + b²). The **foot of the perpendicular** from P can be found by intersecting the given line with the perpendicular line through P.',
    'These results are used to find the radius of a circle that touches a line (the distance from the centre to the line), the height of a triangle, and the bisectors of the angles between two lines (the points equidistant from both lines).',
  ], 'am-lines', 'Distance from (x₁, y₁) to ax + by + c = 0: put the point into the left side, take the modulus, divide by √(a² + b²).',
  ['The acute angle between y = 2x and y = −x is about:', ['71.6°', '45°', '18.4°', '90°'], 'tan α = |(2 + 1)/(1 − 2)| = 3.'],
  [['Perpendicular distance', 'The shortest distance from a point to a line, measured at right angles.'], ['Foot of the perpendicular', 'The point where the perpendicular from a point meets a line.']],
  [
    { q: 'Find the perpendicular distance from (3, −2) to the line 5x − 12y + 4 = 0.', steps: ['d = |5(3) − 12(−2) + 4| ÷ √(25 + 144).', '= |15 + 24 + 4| ÷ 13 = 43 ÷ 13.', '**d ≈ 3.31 units**.'] },
    { q: 'Find the distance between the parallel lines 3x + 4y = 2 and 3x + 4y = 12.', steps: ['Write them as 3x + 4y − 2 = 0 and 3x + 4y − 12 = 0.', 'Distance = |−2 − (−12)| ÷ √(9 + 16) = 10 ÷ 5 = **2 units**.'] },
  ]),

  // ---------- 6. The circle ----------
  L('pm-circle-1', 'mm-l6-circles', '6.1', 'The equation of a circle: centre, radius and the general form', 15, ['Coordinate geometry'], [
    'A circle is the set of points at a fixed distance r (the radius) from a fixed point C(a, b) (the centre). By Pythagoras, its equation is **(x − a)² + (y − b)² = r²**. The circle centred at the origin is x² + y² = r².',
    'Expanding gives the **general form x² + y² + 2gx + 2fy + c = 0**, with **centre (−g, −f)** and **radius √(g² + f² − c)**. It represents a real circle only when g² + f² − c > 0. A circle’s equation has equal coefficients of x² and y² and no xy term; divide through if the coefficients are not 1.',
    'Finding a circle from conditions:\n- centre and a point: the radius is the distance between them\n- the ends of a diameter: the centre is the mid-point and the radius half the length\n- three points: substitute each into x² + y² + 2gx + 2fy + c = 0 and solve for g, f and c, or intersect two perpendicular bisectors of chords, which meet at the centre.',
    'A point (x₁, y₁) lies inside, on or outside the circle according as (x₁ − a)² + (y₁ − b)² is less than, equal to or greater than r².',
  ], 'am-circle', 'General form: centre (−g, −f), radius √(g² + f² − c).',
  ['The circle x² + y² + 6x − 8y = 0 has radius:', ['5', '10', '25', '√14'], 'Centre (−3, 4); r = √(9 + 16 − 0).'],
  [['General equation of a circle', 'x² + y² + 2gx + 2fy + c = 0, with centre (−g, −f).'], ['Radius', 'The fixed distance from the centre of a circle to any point on it.']],
  [
    { q: 'Find the equation of the circle with diameter AB, where A(−1, 2) and B(5, 10).', steps: ['Centre = mid-point = **(2, 6)**.', 'Radius = ½ × √(36 + 64) = ½ × 10 = **5**.', 'Equation: **(x − 2)² + (y − 6)² = 25**.'] },
    { q: 'Find the circle through (0, 0), (4, 0) and (0, 2).', steps: ['Through (0, 0): c = 0. Through (4, 0): 16 + 8g = 0, so g = −2. Through (0, 2): 4 + 4f = 0, so f = −1.', 'Equation: **x² + y² − 4x − 2y = 0**.', 'Centre (2, 1), radius √(4 + 1) = **√5**.'] },
  ]),

  L('pm-circle-2', 'mm-l6-circles', '6.2', 'Tangents, chords and intersections of lines and circles', 16, ['Coordinate geometry'], [
    'The **tangent** at a point P on a circle is perpendicular to the radius CP. To find it: work out the gradient of CP, take the negative reciprocal, and write the line through P. The **normal** at P is the line through P and the centre.',
    'Intersections of a line and a circle: substitute the line into the circle to get a quadratic. Its discriminant decides the case: **Δ > 0, two points (a secant); Δ = 0, one point (a tangent); Δ < 0, no points**. Alternatively, compare the distance from the centre to the line with the radius.',
    'The **length of the tangent** from an external point T(x₁, y₁) to the circle is √(CT² − r²), which simplifies to **√(x₁² + y₁² + 2gx₁ + 2fy₁ + c)** for the general form. The two tangents from an external point are equal in length.',
    'A **chord** is bisected at right angles by the line from the centre. Two circles with centres a distance d apart and radii r₁ and r₂ touch externally when d = r₁ + r₂ and internally when d = |r₁ − r₂|.',
  ], 'am-circle', 'Tangent ⊥ radius: use the negative reciprocal of the gradient of CP.',
  ['For which value of c is y = x + c a tangent to x² + y² = 8?', ['c = ±4', 'c = ±2', 'c = ±8', 'c = 0'], 'Distance from the origin |c|/√2 must equal √8.'],
  [['Tangent', 'A line that touches a circle at exactly one point, perpendicular to the radius there.'], ['Secant', 'A line that cuts a circle at two points.'], ['Chord', 'A line segment joining two points of a circle.']],
  [
    { q: 'Find the equation of the tangent to x² + y² − 2x − 4y − 20 = 0 at the point P(4, 6).', steps: ['Centre C(1, 2); gradient of CP = (6 − 2)/(4 − 1) = 4/3.', 'Tangent gradient = −3/4.', 'y − 6 = −¾(x − 4): **3x + 4y − 36 = 0**.'] },
    { q: 'Find where the line y = 2x − 5 meets the circle x² + y² = 10.', steps: ['x² + (2x − 5)² = 10, so 5x² − 20x + 15 = 0, that is x² − 4x + 3 = 0.', 'x = 1 or x = 3.', 'Points **(1, −3) and (3, 1)**: two points, so the line is a secant.'] },
  ]),

  // ---------- 7. Indices and logarithms ----------
  L('pm-log-1', 'mm-l6-logs', '7.1', 'Indices and surds', 14, ['Numbers'], [
    'Laws of indices: **aᵐ × aⁿ = aᵐ⁺ⁿ**, **aᵐ ÷ aⁿ = aᵐ⁻ⁿ**, **(aᵐ)ⁿ = aᵐⁿ**, a⁰ = 1, **a⁻ⁿ = 1/aⁿ** and **a^(m/n) = (ⁿ√a)ᵐ**. So 8^(2/3) = (∛8)² = 4 and 27^(−1/3) = 1/3. Exponential equations can sometimes be solved by writing both sides with the same base: 4ˣ⁺¹ = 8ˣ gives 2²ˣ⁺² = 2³ˣ, so x = 2.',
    'A **surd** is an irrational root such as √2 or ∛5. Simplify by taking out square factors: √72 = √(36 × 2) = 6√2. Like surds add: 3√2 + 5√2 = 8√2. Multiply: √a × √b = √(ab), and (√a)² = a.',
    '**Rationalising the denominator**: for 1/√a multiply top and bottom by √a; for 1/(a + √b) multiply by the **conjugate** a − √b, since (a + √b)(a − √b) = a² − b, which is rational. For example, (2 + √3)/(2 − √3) = (2 + √3)²/(4 − 3) = 7 + 4√3.',
    'Equations of the form a^(2x) + b·aˣ + c = 0 become quadratics with the substitution y = aˣ: 4ˣ − 3 × 2ˣ⁺¹ + 8 = 0 becomes y² − 6y + 8 = 0, so 2ˣ = 2 or 4, giving x = 1 or 2.',
  ], 'am-exp-log', 'Multiply by the conjugate to clear a surd from a denominator.',
  ['(√5 + √3)(√5 − √3) equals:', ['2', '8', '√2', '2√15'], '5 − 3.'],
  [['Surd', 'An irrational root of a rational number, left in root form.'], ['Conjugate', 'a − √b for a + √b; their product is rational.'], ['Exponential equation', 'An equation with the unknown in an index.']],
  [
    { q: 'Simplify (3 + √2)/(3 − √2), giving the answer in the form a + b√2.', steps: ['Multiply top and bottom by 3 + √2: (3 + √2)²/(9 − 2).', '(9 + 6√2 + 2)/7 = (11 + 6√2)/7.', '= **11/7 + (6/7)√2**.'] },
    { q: 'Solve 9ˣ − 4 × 3ˣ + 3 = 0.', steps: ['Let y = 3ˣ: y² − 4y + 3 = 0, so y = 1 or y = 3.', '3ˣ = 1 gives x = 0; 3ˣ = 3 gives x = 1.', '**x = 0 or x = 1**.'] },
  ]),

  L('pm-log-2', 'mm-l6-logs', '7.2', 'Logarithms, change of base and exponential equations', 16, ['Numbers'], [
    'By definition, **logₐ x = y ⇔ aʸ = x** (a > 0, a ≠ 1, x > 0). So log₂ 8 = 3, log₁₀ 0.01 = −2 and logₐ 1 = 0, logₐ a = 1. lg means log₁₀ and **ln** means logₑ, where e ≈ 2.718 is the base of natural logarithms.',
    'Laws: **log(xy) = log x + log y**, **log(x/y) = log x − log y**, **log(xⁿ) = n log x**. **Change of base**: logₐ x = log_b x ÷ log_b a, so log₃ 20 = lg 20 ÷ lg 3 ≈ 2.73. Note that log(x + y) has no simple rule.',
    'Solving **aˣ = b**: take logs of both sides, x log a = log b, so **x = log b ÷ log a**; for 3²ˣ⁻¹ = 20, (2x − 1) lg 3 = lg 20 gives x = 1.86. Equations with logs: combine into a single log and remove it: lg x + lg(x − 3) = 1 gives x(x − 3) = 10, so x = 5 (x = −2 is rejected, since logs of negative numbers are undefined).',
    'Experimental laws become straight lines: **y = axⁿ** gives lg y = n lg x + lg a (plot lg y against lg x: gradient n, intercept lg a); **y = abˣ** gives lg y = x lg b + lg a (plot lg y against x). The graphs of y = aˣ and y = logₐ x are reflections of each other in y = x.',
  ], 'am-exp-log', 'To solve aˣ = b, take logs: x = log b ÷ log a.',
  ['If log₂ x = 5, then x equals:', ['32', '10', '25', '2.5'], '2⁵ = 32.'],
  [['Logarithm', 'logₐ x is the power to which a must be raised to give x.'], ['Natural logarithm', 'ln x, the logarithm to base e ≈ 2.718.'], ['Change of base', 'logₐ x = log_b x ÷ log_b a.']],
  [
    { q: 'Solve 5^(2x + 1) = 3^(x + 2).', steps: ['Take logs: (2x + 1) lg 5 = (x + 2) lg 3.', 'x(2 lg 5 − lg 3) = 2 lg 3 − lg 5, so x = (0.9542 − 0.6990) ÷ (1.3979 − 0.4771).', 'x = 0.2552 ÷ 0.9208 = **0.277** (to 3 s.f.).'] },
    { q: 'Values of x and y follow y = axⁿ. A graph of lg y against lg x has gradient 1.5 and intercept 0.30. Find a and n.', steps: ['lg y = n lg x + lg a, so **n = 1.5**.', 'lg a = 0.30, so a = 10^0.30 = **2.0**.', 'So y ≈ 2x^1.5.'] },
  ]),
];
