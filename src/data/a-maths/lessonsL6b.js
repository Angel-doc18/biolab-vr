// A Level Pure Mathematics lessons, Lower Sixth (part 2): sets and relations,
// functions, sequences and series, sums, the binomial theorem, circular
// measure and trigonometry. Original text written for this app.

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

export const LESSONS_L6B = [
  // ---------- 8. Sets and relations ----------
  L('pm-set-1', 'mm-l6-sets', '8.1', 'Sets, power sets and Cartesian products', 14, ['Sets'], [
    'A **set** is a well-defined collection of objects (its elements). Notation: x ∈ A (x belongs to A), A ⊆ B (A is a subset of B), ∅ (the empty set), A ∪ B (union), A ∩ B (intersection), A′ or Aᶜ (complement within a universal set U) and A \\ B (elements of A not in B). Standard sets: ℕ (natural numbers), ℤ (integers), ℚ (rationals) and ℝ (reals).',
    'The **power set** P(A) is the set of all subsets of A, including ∅ and A itself. A set with n elements has **2ⁿ subsets**, because each element is either in or out of a subset: P({a, b}) = {∅, {a}, {b}, {a, b}}.',
    'The **Cartesian product** A × B is the set of all **ordered pairs** (a, b) with a ∈ A and b ∈ B. If n(A) = m and n(B) = k, then n(A × B) = mk. ℝ × ℝ = ℝ² is the coordinate plane, which is why points are written (x, y).',
    'Counting with sets: **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**, so the overlap is not counted twice; for three sets, n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(A ∩ C) + n(A ∩ B ∩ C). De Morgan’s laws: (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′.',
  ], 'am-venn', 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B).',
  ['If n(A) = 3 and n(B) = 4, then n(A × B) is:', ['12', '7', '81', '64'], '3 × 4 ordered pairs.'],
  [['Power set', 'The set of all subsets of a set.'], ['Cartesian product', 'The set of all ordered pairs (a, b) with a in A and b in B.'], ['Universal set', 'The set containing every element under consideration.']],
  [
    { q: 'In a class of 40, 25 study Physics, 18 study Chemistry and 8 study both. How many study neither?', steps: ['n(P ∪ C) = 25 + 18 − 8 = **35**.', 'Neither = 40 − 35 = **5**.'] },
    { q: 'List P({1, 2, 3}) and state how many elements it has.', steps: ['∅, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}.', '**2³ = 8 elements**.'] },
  ]),

  L('pm-set-2', 'mm-l6-sets', '8.2', 'Relations: properties, equivalence relations and mappings', 15, ['Sets', 'Relations'], [
    'A **binary relation** R from A to B is a subset of A × B; we write aRb when (a, b) ∈ R. It can be shown as a set of pairs, an **arrow diagram** or a graph. A relation on a single set A may have these properties:\n- **reflexive**: aRa for every a in A\n- **symmetric**: aRb ⇒ bRa\n- **transitive**: aRb and bRc ⇒ aRc\n- **antisymmetric**: aRb and bRa ⇒ a = b.',
    'An **equivalence relation** is reflexive, symmetric and transitive. It divides the set into disjoint **equivalence classes**: "has the same remainder on division by 3" splits ℤ into three classes {…, 0, 3, 6, …}, {…, 1, 4, 7, …}, {…, 2, 5, 8, …}. "Is congruent to" on triangles and "is parallel to" on lines are equivalence relations; "is less than" is not (it is neither reflexive nor symmetric).',
    'A relation that is reflexive, antisymmetric and transitive is an **order relation**, such as "≤" on ℝ or "divides" on the positive integers.',
    'A **mapping** (function) from A to B relates **each element of A to exactly one element of B**. A is the **domain**, B the **codomain**, and the set of images actually reached is the **range** (a subset of the codomain). In an arrow diagram, a mapping has exactly one arrow leaving every element of the domain.',
  ], 'am-mapping', 'Equivalence relation: reflexive, symmetric and transitive, all three.',
  ['The relation "x − y is even" on the integers is:', ['an equivalence relation', 'not reflexive', 'not symmetric', 'not transitive'], 'x − x = 0 is even; the other two properties hold too.'],
  [['Binary relation', 'A set of ordered pairs relating elements of one set to another.'], ['Equivalence relation', 'A relation that is reflexive, symmetric and transitive.'], ['Codomain', 'The set in which the images of a mapping lie; the range is the part actually reached.']],
  [
    { q: 'On A = {1, 2, 3}, R = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)}. Is R an equivalence relation?', steps: ['Reflexive: (1, 1), (2, 2), (3, 3) are all present. ✓', 'Symmetric: (1, 2) and (2, 1) both present. ✓ Transitive: (1, 2), (2, 1) ⇒ (1, 1) present; no other chains fail. ✓', '**Yes**; its classes are {1, 2} and {3}.'] },
    { q: 'Is "a divides b" on {1, 2, 3, 4, 6} an equivalence relation?', steps: ['It is reflexive and transitive.', 'It is **not symmetric**: 2 divides 4, but 4 does not divide 2.', 'So it is **not** an equivalence relation; it is an order relation.'] },
  ]),

  // ---------- 9. Functions ----------
  L('pm-func-1', 'mm-l6-functions', '9.1', 'Functions: composition, symmetry and transformations of graphs', 15, ['Functions'], [
    'A function f: A → B gives each x in the domain exactly one image f(x). The **range** is the set of all images. When a formula is given without a domain, take the largest set of real numbers for which it makes sense: f(x) = √(x − 2) needs x ≥ 2; g(x) = 1/(x + 1) needs x ≠ −1.',
    'The **composite function** fg (or f ∘ g) means "apply g, then f": fg(x) = f(g(x)). It exists only when the range of g lies inside the domain of f. In general **fg ≠ gf**: with f(x) = 2x + 1 and g(x) = x², fg(x) = 2x² + 1 but gf(x) = (2x + 1)².',
    'Symmetry: an **even** function satisfies f(−x) = f(x) and its graph is symmetric in the y-axis (x², cos x); an **odd** function satisfies f(−x) = −f(x) and its graph has rotational symmetry about the origin (x³, sin x). A **periodic** function repeats: f(x + T) = f(x).',
    'Transformations of y = f(x):\n- y = f(x) + a: translation a units up\n- y = f(x + a): translation a units to the **left**\n- y = af(x): stretch parallel to the y-axis, scale factor a\n- y = f(ax): stretch parallel to the x-axis, scale factor 1/a\n- y = −f(x): reflection in the x-axis; y = f(−x): reflection in the y-axis.',
  ], 'am-transform', 'fg(x) = f(g(x)): the function nearer x acts first.',
  ['The graph of y = (x − 3)² + 1 is the graph of y = x²:', ['translated 3 right and 1 up', 'translated 3 left and 1 up', 'translated 3 right and 1 down', 'stretched by 3'], 'Vertex moves from (0, 0) to (3, 1).'],
  [['Composite function', 'fg(x) = f(g(x)), formed by applying g then f.'], ['Even function', 'A function with f(−x) = f(x), symmetric in the y-axis.'], ['Odd function', 'A function with f(−x) = −f(x), symmetric about the origin.']],
  [
    { q: 'f(x) = 3x − 2 and g(x) = 1/(x + 1), x ≠ −1. Find fg(x) and solve gf(x) = ½.', steps: ['fg(x) = 3/(x + 1) − 2 = **(1 − 2x)/(x + 1)**.', 'gf(x) = 1/(3x − 2 + 1) = 1/(3x − 1).', '1/(3x − 1) = ½ gives 3x − 1 = 2, so **x = 1**.'] },
    { q: 'Is f(x) = x³ − x odd, even or neither?', steps: ['f(−x) = (−x)³ − (−x) = −x³ + x.', '= −(x³ − x) = −f(x).', 'So f is **odd**.'] },
  ]),

  L('pm-func-2', 'mm-l6-functions', '9.2', 'Injective, surjective and bijective functions; inverse functions', 16, ['Functions'], [
    'A function f: A → B is:\n- **injective** (one-to-one) if different inputs give different outputs: f(x₁) = f(x₂) ⇒ x₁ = x₂; on a graph, every horizontal line meets it at most once\n- **surjective** (onto) if every element of the codomain B is an image: the range equals B\n- **bijective** if it is both.',
    'Only a **bijective** function has an **inverse function** f⁻¹: B → A, with f⁻¹(f(x)) = x and f(f⁻¹(y)) = y. To find it, write y = f(x), solve for x in terms of y, then rename: for f(x) = (2x + 3)/(x − 1), y(x − 1) = 2x + 3 gives x = (y + 3)/(y − 2), so f⁻¹(x) = (x + 3)/(x − 2), x ≠ 2.',
    'The **domain of f⁻¹ is the range of f**, and the range of f⁻¹ is the domain of f. The graph of y = f⁻¹(x) is the **reflection** of the graph of y = f(x) in the line **y = x**, because the roles of x and y are exchanged.',
    'A function that is not injective can be made so by **restricting its domain**: f(x) = x² is not injective on ℝ (f(2) = f(−2)), but on x ≥ 0 it is, with inverse √x. Likewise f(x) = (x − 1)² + 3 for x ≥ 1 has inverse 1 + √(x − 3), x ≥ 3.',
  ], 'am-inverse-graph', 'Domain of f⁻¹ = range of f; the graphs mirror in y = x.',
  ['f(x) = eˣ from ℝ to ℝ is:', ['injective but not surjective', 'surjective but not injective', 'bijective', 'neither'], 'Different inputs give different outputs, but negative numbers are never reached.'],
  [['Injective', 'One-to-one: different inputs always give different outputs.'], ['Surjective', 'Onto: every element of the codomain is an image.'], ['Inverse function', 'The function f⁻¹ that undoes f, existing only when f is bijective.']],
  [
    { q: 'f(x) = (x − 1)² + 3 with domain x ≥ 1. Find f⁻¹ and state its domain.', steps: ['Range of f: f(x) ≥ 3.', 'y = (x − 1)² + 3 ⇒ x − 1 = √(y − 3) (positive root, since x ≥ 1).', '**f⁻¹(x) = 1 + √(x − 3), for x ≥ 3**.'] },
    { q: 'Show that f: ℝ → ℝ, f(x) = 2x + 5 is bijective.', steps: ['Injective: 2x₁ + 5 = 2x₂ + 5 ⇒ x₁ = x₂.', 'Surjective: for any y, x = (y − 5)/2 is real and f(x) = y.', 'So f is **bijective**, with f⁻¹(x) = (x − 5)/2.'] },
  ]),

  // ---------- 10. Sequences and series ----------
  L('pm-seq-1', 'mm-l6-sequences', '10.1', 'Arithmetic and geometric progressions', 16, ['Sequences'], [
    'An **arithmetic progression** (AP) adds a constant **common difference** d each time: a, a + d, a + 2d, … Its nth term is **uₙ = a + (n − 1)d** and the sum of the first n terms is **Sₙ = ½n(2a + (n − 1)d) = ½n(a + l)**, where l is the last term. Three numbers x, y, z are in AP when y − x = z − y, so the middle one is the **arithmetic mean** (x + z)/2 of the other two.',
    'A **geometric progression** (GP) multiplies by a constant **common ratio** r: a, ar, ar², … Its nth term is **uₙ = arⁿ⁻¹** and the sum is **Sₙ = a(1 − rⁿ)/(1 − r)** (r ≠ 1). Three numbers are in GP when y/x = z/y, that is y² = xz, so the middle one is the **geometric mean** √(xz) (for positive terms).',
    'Problems usually give two facts that become two simultaneous equations in a and d (or a and r). To find how many terms are needed for a sum to exceed a value, solve an inequality; with a GP this needs logarithms: 2ⁿ > 1000 gives n > lg 1000 ÷ lg 2 = 9.97, so n = 10.',
    'Applications: savings with simple interest grow as an AP; with compound interest, as a GP (P(1 + i)ⁿ); depreciation of a machine by 15% a year is a GP with r = 0.85; the total length of a pattern of stacked tins or seats in rows is an AP sum.',
  ], 'am-ap-gp', 'AP: add d. GP: multiply by r. Write two facts as two equations.',
  ['The 10th term of 5, 8, 11, … is:', ['32', '35', '29', '50'], '5 + 9 × 3.'],
  [['Arithmetic progression', 'A sequence with a constant difference between consecutive terms.'], ['Geometric progression', 'A sequence with a constant ratio between consecutive terms.'], ['Common ratio', 'The constant r by which each term of a GP is multiplied.']],
  [
    { q: 'The 3rd term of an AP is 11 and the 8th term is 31. Find the sum of the first 20 terms.', steps: ['a + 2d = 11 and a + 7d = 31, so 5d = 20: d = 4, a = 3.', 'S₂₀ = ½ × 20 × (2 × 3 + 19 × 4) = 10 × 82.', '**S₂₀ = 820**.'] },
    { q: 'A machine bought for 2 000 000 FCFA loses 15% of its value each year. Find its value after 5 years.', steps: ['Values form a GP with a = 2 000 000 and r = 0.85.', 'After 5 years: 2 000 000 × 0.85⁵ = 2 000 000 × 0.4437.', '**About 887 000 FCFA**.'] },
  ]),

  L('pm-seq-2', 'mm-l6-sequences', '10.2', 'Convergence, the sum to infinity and recurrence relations', 15, ['Sequences'], [
    'For a GP with **|r| < 1**, rⁿ → 0 as n → ∞, so Sₙ approaches a limit, the **sum to infinity**: **S∞ = a/(1 − r)**. The series is then **convergent**. If |r| ≥ 1, the terms do not shrink to zero and the series has no finite sum (it **diverges**). An AP with d ≠ 0 always diverges.',
    'Recurring decimals are GPs: 0.272727… = 0.27 + 0.0027 + … = 0.27/(1 − 0.01) = 27/99 = 3/11. A ball dropped from 10 m that rebounds to 60% of its height each time travels 10 + 2(6 + 3.6 + …) = 10 + 2 × 6/(1 − 0.6) = 40 m in total.',
    'A **recurrence relation** defines each term from the one before: uₙ₊₁ = f(uₙ) with a first term u₁. For example uₙ₊₁ = 0.5uₙ + 3 with u₁ = 2 gives 2, 4, 5, 5.5, 5.75, … If the sequence **converges to a limit L**, then L = f(L): L = 0.5L + 3 gives L = 6.',
    'Sequences can be **increasing**, **decreasing**, **periodic** (repeating) or **oscillating**. A first-order linear recurrence uₙ₊₁ = kuₙ + c converges when |k| < 1; with |k| > 1 it diverges unless it starts exactly at the limit.',
  ], 'am-recurrence', 'S∞ = a/(1 − r) only when |r| < 1.',
  ['The sum to infinity of 12 − 6 + 3 − … is:', ['8', '24', '6', '4'], 'a = 12, r = −½: 12 ÷ 1.5.'],
  [['Convergent', 'Approaching a finite limit as the number of terms grows.'], ['Sum to infinity', 'The limit a/(1 − r) of the sums of a GP with |r| < 1.'], ['Recurrence relation', 'A rule giving each term of a sequence from the previous term or terms.']],
  [
    { q: 'Express the recurring decimal 0.545454… as a fraction.', steps: ['0.545454… = 0.54 + 0.0054 + … , a GP with a = 0.54 and r = 0.01.', 'S∞ = 0.54 ÷ 0.99 = 54/99.', '= **6/11**.'] },
    { q: 'uₙ₊₁ = (uₙ + 6)/uₙ with u₁ = 1 converges to a positive limit. Find it.', steps: ['At the limit L = (L + 6)/L, so L² = L + 6.', 'L² − L − 6 = 0, (L − 3)(L + 2) = 0.', 'The positive limit is **L = 3**.'] },
  ]),

  // ---------- 11. Series and sums ----------
  L('pm-sum-1', 'mm-l6-series', '11.1', 'Sigma notation and the standard sums', 15, ['Series'], [
    '**Sigma notation** writes a sum compactly: Σ (r = 1 to n) f(r) means f(1) + f(2) + … + f(n). The variable r is a dummy: Σ r² and Σ k² are the same sum. Sums can be split and constants taken out: Σ (af(r) + bg(r)) = aΣ f(r) + bΣ g(r), and Σ (r = 1 to n) 1 = n.',
    'The standard sums:\n- **Σ r = ½n(n + 1)**\n- **Σ r² = ⅙n(n + 1)(2n + 1)**\n- **Σ r³ = ¼n²(n + 1)²**, the square of Σ r.\nAll three can be proved by induction.',
    'To sum a polynomial expression, expand it and use the standard sums: Σ r(r + 2) = Σ r² + 2Σ r = ⅙n(n + 1)(2n + 1) + n(n + 1) = ⅙n(n + 1)(2n + 7).',
    'Sums that do not start at r = 1: Σ (r = 11 to 20) r² = Σ (1 to 20) − Σ (1 to 10) = 2870 − 385 = 2485. Always check the number of terms: from r = a to r = b there are b − a + 1 terms.',
  ], 'am-sums', 'Expand, split, use Σr, Σr², Σr³, then factorise.',
  ['Σ (r = 1 to 10) r³ equals:', ['3025', '385', '55', '1000'], '¼ × 100 × 121 = 55².'],
  [['Sigma notation', 'Notation Σ for a sum of terms following a rule.'], ['Dummy variable', 'The counting variable in a sum, whose name does not matter.']],
  [
    { q: 'Find Σ (r = 1 to n) (2r − 1)², simplifying fully.', steps: ['(2r − 1)² = 4r² − 4r + 1, so the sum is 4Σr² − 4Σr + n.', '= ⅔n(n + 1)(2n + 1) − 2n(n + 1) + n = ⅓n[2(n + 1)(2n + 1) − 6(n + 1) + 3].', '= ⅓n(4n² − 1) = **⅓n(2n − 1)(2n + 1)**.'] },
    { q: 'Evaluate Σ (r = 11 to 20) r².', steps: ['Σ (1 to 20) r² = ⅙ × 20 × 21 × 41 = 2870.', 'Σ (1 to 10) r² = ⅙ × 10 × 11 × 21 = 385.', 'Difference: **2485**.'] },
  ]),

  L('pm-sum-2', 'mm-l6-series', '11.2', 'The method of differences and convergence of series', 16, ['Series'], [
    'If each term can be written as a **difference** uᵣ = f(r) − f(r + 1), then most terms **cancel in pairs** (the series "telescopes"): Σ (r = 1 to n) uᵣ = f(1) − f(n + 1). Partial fractions are the usual way to produce the difference.',
    'Example: 1/(r(r + 1)) = 1/r − 1/(r + 1). Writing out the terms: (1 − ½) + (½ − ⅓) + … + (1/n − 1/(n + 1)), and everything cancels except **1 − 1/(n + 1) = n/(n + 1)**. As n → ∞ this tends to 1, so Σ (r = 1 to ∞) 1/(r(r + 1)) = 1.',
    'When the partial fractions differ by 2 places, more terms survive: 1/(r(r + 2)) = ½(1/r − 1/(r + 2)) leaves ½(1 + ½ − 1/(n + 1) − 1/(n + 2)), and the infinite sum is ¾. Write out the first three and last three terms to see which survive.',
    'Convergence: an infinite series can converge only if its terms tend to zero. This condition is **necessary but not sufficient**: the terms of 1 + ½ + ⅓ + ¼ + … tend to zero, yet the sum grows without limit (it diverges). A GP converges exactly when |r| < 1, and comparison with a known convergent series (all terms positive and smaller) proves convergence.',
  ], 'am-telescope', 'Write out the first few and last few terms to see what survives.',
  ['Σ (r = 1 to n) (1/r − 1/(r + 1)) equals:', ['1 − 1/(n + 1)', '1/(n + 1)', '1 + 1/(n + 1)', 'n'], 'The middle terms cancel.'],
  [['Method of differences', 'Summing a series by writing each term as a difference so that terms cancel.'], ['Telescoping series', 'A series in which consecutive terms cancel, leaving only a few.'], ['Divergent', 'Having no finite sum: the partial sums grow without limit or do not settle.']],
  [
    { q: 'Find Σ (r = 1 to n) 2/((r + 1)(r + 2)) and its sum to infinity.', steps: ['2/((r + 1)(r + 2)) = 2/(r + 1) − 2/(r + 2).', 'Sum = (2/2 − 2/3) + (2/3 − 2/4) + … + (2/(n + 1) − 2/(n + 2)) = **1 − 2/(n + 2)**.', 'As n → ∞, the sum tends to **1**.'] },
    { q: 'Show that Σ (r = 1 to n) (r³ − (r − 1)³) = n³ and hence find Σ (3r² − 3r + 1).', steps: ['Telescoping: (1 − 0) + (8 − 1) + … + (n³ − (n − 1)³) = n³.', 'r³ − (r − 1)³ = 3r² − 3r + 1.', 'So **Σ (3r² − 3r + 1) = n³**, a quick check of the standard sums.'] },
  ]),

  // ---------- 12. Binomial theorem ----------
  L('pm-bin-1', 'mm-l6-binomial', '12.1', 'The binomial expansion for positive integers', 15, ['Algebra'], [
    'The **binomial coefficients** nCr = n! ÷ (r!(n − r)!) count the ways of choosing r items from n, and form **Pascal’s triangle**: each entry is the sum of the two above it, because nCr + nC(r + 1) = (n + 1)C(r + 1). Row 4 is 1 4 6 4 1.',
    '**Binomial theorem** (n a positive integer): (a + b)ⁿ = aⁿ + nC1 aⁿ⁻¹b + nC2 aⁿ⁻²b² + … + bⁿ. There are n + 1 terms, the powers of a fall as the powers of b rise, and each term’s powers add up to n. The **general term** (the (r + 1)th term) is **nCr aⁿ⁻ʳ bʳ**.',
    'Particular terms: for the coefficient of x⁷ in (2x − 3)¹⁰, the term is 10Cr (2x)¹⁰⁻ʳ(−3)ʳ with 10 − r = 7, so r = 3: 120 × 2⁷ × (−27) = −414 720. For the **term independent of x** in (x² + 1/x)⁶, the power of x is 2(6 − r) − r = 12 − 3r = 0, so r = 4: 6C4 = 15.',
    'Approximations: (1 + x)ⁿ ≈ 1 + nx + ½n(n − 1)x² for small x, so 1.02⁸ = (1 + 0.02)⁸ ≈ 1 + 0.16 + 28 × 0.0004 = 1.1712 (the true value is 1.1717).',
  ], 'am-pascal', 'General term: nCr aⁿ⁻ʳ bʳ; set the power of x you want and solve for r.',
  ['The coefficient of x³ in (1 + x)⁶ is:', ['20', '15', '6', '120'], '6C3 = 20.'],
  [['Binomial coefficient', 'nCr = n!/(r!(n − r)!), the number of ways of choosing r from n.'], ['Pascal’s triangle', 'A triangular array of binomial coefficients, each the sum of the two above.'], ['General term', 'The term nCr aⁿ⁻ʳ bʳ of the expansion of (a + b)ⁿ.']],
  [
    { q: 'Expand (2 − x)⁴ fully.', steps: ['Coefficients 1, 4, 6, 4, 1.', '16 + 4(8)(−x) + 6(4)(x²) + 4(2)(−x³) + x⁴.', '= **16 − 32x + 24x² − 8x³ + x⁴**.'] },
    { q: 'Find the term independent of x in (2x − 1/x²)⁹.', steps: ['General term: 9Cr (2x)⁹⁻ʳ(−1/x²)ʳ, with power of x: 9 − r − 2r = 9 − 3r = 0, so r = 3.', 'Term = 9C3 × 2⁶ × (−1)³ = 84 × 64 × (−1).', '= **−5376**.'] },
  ]),

  L('pm-bin-2', 'mm-l6-binomial', '12.2', 'The binomial series for rational indices', 15, ['Algebra'], [
    'For any rational n (negative or fractional), **(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + n(n − 1)(n − 2)x³/3! + …**. The series does not stop, and it is **valid only for |x| < 1**. For example (1 + x)⁻¹ = 1 − x + x² − x³ + … and (1 − x)^(−2) = 1 + 2x + 3x² + 4x³ + …',
    'For (a + bx)ⁿ, first take out the factor aⁿ: (4 + x)^½ = 2(1 + x/4)^½ = 2(1 + x/8 − x²/128 + …), valid for |x/4| < 1, that is |x| < 4.',
    'Approximations: choose x so that the bracket gives the number wanted. √(1.04) = (1 + 0.04)^½ ≈ 1 + 0.02 − 0.0002 = 1.0198. To find √17, write √17 = 4(1 + 1/16)^½ ≈ 4(1 + 1/32 − 1/2048) ≈ 4.1231.',
    'Rational functions can be expanded by splitting into partial fractions first: (5 − x)/((1 + x)(2 − x)) = 2/(1 + x) + 1/(2 − x), and each part is expanded as a binomial series; the result is valid where both expansions are, here |x| < 1.',
  ], 'am-pascal', 'Make the bracket start with 1, then |x| < 1 for the series to be valid.',
  ['The expansion of (1 + 2x)⁻¹ is valid for:', ['|x| < ½', '|x| < 1', '|x| < 2', 'all x'], '|2x| < 1.'],
  [['Binomial series', 'The infinite expansion of (1 + x)ⁿ for non-integer or negative n.'], ['Range of validity', 'The values of x for which an infinite expansion converges.']],
  [
    { q: 'Expand (1 − 3x)^(−⅓) up to the term in x², and state the range of validity.', steps: ['n = −⅓: 1 + (−⅓)(−3x) + (−⅓)(−4/3)(−3x)²/2.', '= 1 + x + (4/9)(9x²)/2 = **1 + x + 2x²**.', 'Valid for |3x| < 1, that is **|x| < ⅓**.'] },
    { q: 'Use the expansion of (1 + x)^½ to find √1.02 to 4 decimal places.', steps: ['(1 + 0.02)^½ ≈ 1 + ½(0.02) − ⅛(0.02)² + (1/16)(0.02)³.', '= 1 + 0.01 − 0.00005 + 0.0000005.', '≈ **1.0100**.'] },
  ]),

  // ---------- 13. Radians and trigonometric functions ----------
  L('pm-rad-1', 'mm-l6-radians', '13.1', 'Radians, arc length and the area of a sector', 15, ['Trigonometry'], [
    'One **radian** is the angle at the centre of a circle subtended by an arc equal in length to the radius. Since the whole circumference is 2πr, **2π radians = 360°**, so π rad = 180°, 1 rad ≈ 57.3°, π/6 = 30°, π/4 = 45°, π/3 = 60° and π/2 = 90°.',
    'With θ in radians: **arc length s = rθ**, **area of a sector A = ½r²θ**. The triangle formed by the two radii has area ½r² sin θ, so the **area of the segment** (between the chord and the arc) is **½r²(θ − sin θ)**. The chord length is 2r sin(θ/2).',
    'Exact values to know: sin π/6 = ½, cos π/6 = √3/2, tan π/6 = 1/√3; sin π/4 = cos π/4 = 1/√2, tan π/4 = 1; sin π/3 = √3/2, cos π/3 = ½, tan π/3 = √3.',
    'For small angles in radians, **sin θ ≈ θ, tan θ ≈ θ and cos θ ≈ 1 − θ²/2**. These approximations are used in physics (the simple pendulum) and in limits.',
  ], 'am-sector', 'Arc rθ and sector ½r²θ work only with θ in radians.',
  ['A sector of radius 6 cm has area 27 cm². Its angle is:', ['1.5 rad', '0.75 rad', '3 rad', '4.5 rad'], '27 = ½ × 36 × θ.'],
  [['Radian', 'The angle subtended at the centre by an arc equal in length to the radius.'], ['Sector', 'The region between two radii and the arc between them.'], ['Segment', 'The region between a chord and the arc it cuts off.']],
  [
    { q: 'A chord subtends 2π/3 at the centre of a circle of radius 10 cm. Find the area of the minor segment.', steps: ['Sector = ½ × 100 × 2π/3 = 100π/3 = **104.72 cm²**.', 'Triangle = ½ × 100 × sin(2π/3) = 50 × 0.866 = **43.30 cm²**.', 'Segment = 104.72 − 43.30 = **61.4 cm²**.'] },
    { q: 'Find the perimeter of a sector of radius 8 cm and angle 0.75 rad.', steps: ['Arc = rθ = 8 × 0.75 = 6 cm.', 'Perimeter = 8 + 8 + 6 = **22 cm**.'] },
  ]),

  L('pm-rad-2', 'mm-l6-radians', '13.2', 'Graphs of the trigonometric functions and their inverses', 15, ['Trigonometry'], [
    'The graphs of **y = sin x** and **y = cos x** are waves of **period 2π** and amplitude 1, with cos x the sine curve shifted π/2 to the left. **y = tan x** has period π and vertical asymptotes at x = π/2 + nπ, where cos x = 0.',
    'Transformations: **y = a sin(bx + c) + d** has amplitude |a|, period 2π/b, a horizontal shift of −c/b and a vertical shift d. So y = 3 sin 2x has amplitude 3 and period π; y = cos(x − π/4) is y = cos x moved π/4 to the right.',
    'The **reciprocal functions** are sec x = 1/cos x, cosec x = 1/sin x and cot x = 1/tan x. Their graphs have asymptotes wherever the original function is zero.',
    'The **inverse trigonometric functions** need restricted domains so that each is a function: **sin⁻¹ x** (arcsin) has range −π/2 to π/2, **cos⁻¹ x** has range 0 to π, and **tan⁻¹ x** has range −π/2 to π/2 (its graph approaches the horizontal asymptotes y = ±π/2). These are the **principal values** given by a calculator.',
  ], 'am-trig-graphs', 'Period of sin bx and cos bx is 2π/b; of tan bx it is π/b.',
  ['The period of y = tan 3x is:', ['π/3', '2π/3', 'π', '3π'], 'π ÷ 3.'],
  [['Period', 'The length of one complete cycle of a repeating graph.'], ['Amplitude', 'Half the distance between the maximum and minimum values of a wave.'], ['Principal value', 'The value of an inverse trigonometric function within its restricted range.']],
  [
    { q: 'State the amplitude, period and maximum value of y = 2 − 3 cos(x/2).', steps: ['Amplitude **3**.', 'Period 2π ÷ ½ = **4π**.', 'Maximum = 2 + 3 = **5**, when cos(x/2) = −1.'] },
    { q: 'Find the exact value of cos(sin⁻¹(3/5)).', steps: ['Let θ = sin⁻¹(3/5), so sin θ = 3/5 with −π/2 ≤ θ ≤ π/2.', 'cos θ ≥ 0 in this range, and cos θ = √(1 − 9/25).', '**cos θ = 4/5**.'] },
  ]),

  // ---------- 14. Trigonometric identities and equations ----------
  L('pm-trig-1', 'mm-l6-trig-identities', '14.1', 'Trigonometric identities: Pythagorean, compound and double angles', 16, ['Trigonometry'], [
    'Pythagorean identities: **sin²θ + cos²θ = 1**; dividing by cos²θ gives **1 + tan²θ = sec²θ**; dividing by sin²θ gives **1 + cot²θ = cosec²θ**.',
    'Compound angle formulae:\n- **sin(A ± B) = sin A cos B ± cos A sin B**\n- **cos(A ± B) = cos A cos B ∓ sin A sin B**\n- **tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)**.\nFor example, sin 75° = sin(45° + 30°) = (√6 + √2)/4.',
    'Double angle formulae (put B = A): **sin 2A = 2 sin A cos A**; **cos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A**; **tan 2A = 2 tan A/(1 − tan²A)**. Rearranged, cos²A = ½(1 + cos 2A) and sin²A = ½(1 − cos 2A).',
    'Proving an identity: start from the more complicated side and work towards the other, using the identities above, a common denominator or factorising; never treat the identity as an equation and do the same thing to both sides. For example (1 − cos 2A)/sin 2A = 2 sin²A/(2 sin A cos A) = tan A.',
  ], 'am-trig-graphs', 'Start from the harder side of an identity and work towards the other.',
  ['cos 2A expressed in terms of sin A is:', ['1 − 2 sin²A', '2 sin²A − 1', '1 + 2 sin²A', '2 sin A cos A'], 'From cos²A − sin²A with cos²A = 1 − sin²A.'],
  [['Identity', 'An equation true for all values of the variable.'], ['Compound angle formula', 'A formula for a trigonometric function of A + B or A − B.'], ['Double angle formula', 'A formula for sin 2A, cos 2A or tan 2A.']],
  [
    { q: 'Find the exact value of cos 15°.', steps: ['cos 15° = cos(45° − 30°) = cos 45° cos 30° + sin 45° sin 30°.', '= (1/√2)(√3/2) + (1/√2)(½) = (√3 + 1)/(2√2).', '= **(√6 + √2)/4**.'] },
    { q: 'Prove that (sin 2θ)/(1 + cos 2θ) = tan θ.', steps: ['Left side = 2 sin θ cos θ ÷ (1 + 2cos²θ − 1).', '= 2 sin θ cos θ ÷ 2cos²θ = sin θ/cos θ.', '= **tan θ**, as required.'] },
  ]),

  L('pm-trig-2', 'mm-l6-trig-identities', '14.2', 'Solving trigonometric equations and the form R cos(θ − α)', 17, ['Trigonometry'], [
    'Solving sin θ = k, cos θ = k or tan θ = k in an interval: find the **principal value** with the inverse function, then use symmetry: if sin θ = k, the other solution is 180° − θ (π − θ); if cos θ = k, the other is 360° − θ (2π − θ); tan repeats every 180° (π). Then add or subtract whole periods to get every solution in the interval.',
    'Harder equations: use identities to get **one trigonometric function**, then solve as a quadratic. 2cos²θ + 3 sin θ = 3 becomes 2(1 − sin²θ) + 3 sin θ − 3 = 0, that is 2sin²θ − 3 sin θ + 1 = 0, so sin θ = 1 or ½. Factorise rather than divide by a trigonometric function, which can lose solutions (from sin θ cos θ = sin θ, dividing by sin θ loses sin θ = 0).',
    '**a cos θ + b sin θ = R cos(θ − α)**, where **R = √(a² + b²)** and **tan α = b/a** (with a, b > 0, α acute). Expanding R cos(θ − α) = R cos θ cos α + R sin θ sin α and comparing coefficients gives R cos α = a and R sin α = b. Other forms, R sin(θ + α) and so on, follow the same way.',
    'Uses of the R form: the maximum value of a cos θ + b sin θ is R and the minimum −R; equations such as 3 cos θ + 4 sin θ = 2 become 5 cos(θ − 53.13°) = 2, so θ − 53.13° = ±66.42° + 360°n, giving θ = 119.6° or 346.7° in 0° ≤ θ < 360°.',
  ], 'am-rcos', 'Get one trig function, then factorise; never divide by sin θ or cos θ.',
  ['The solutions of tan θ = 1 for 0 ≤ θ < 2π are:', ['π/4 and 5π/4', 'π/4 and 3π/4', 'π/4 only', 'π/4 and 7π/4'], 'tan has period π.'],
  [['Principal value', 'The solution given by the inverse function, used as a starting point.'], ['R form', 'Writing a cos θ + b sin θ as R cos(θ − α) or R sin(θ + α).']],
  [
    { q: 'Solve 2cos²θ + 3 sin θ = 3 for 0° ≤ θ < 360°.', steps: ['2(1 − sin²θ) + 3 sin θ − 3 = 0, so 2sin²θ − 3 sin θ + 1 = 0.', '(2 sin θ − 1)(sin θ − 1) = 0: sin θ = ½ or sin θ = 1.', '**θ = 30°, 90°, 150°**.'] },
    { q: 'Express √3 cos θ + sin θ as R cos(θ − α) and find its maximum value.', steps: ['R = √(3 + 1) = **2**; tan α = 1/√3, so **α = 30°** (π/6).', '√3 cos θ + sin θ = **2 cos(θ − 30°)**.', 'Maximum **2**, when θ = 30°.'] },
  ]),
];
