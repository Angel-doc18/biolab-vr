// A Level Pure Mathematics lessons, Upper Sixth (part 2): complex numbers and
// their loci, planes, numerical methods and the Upper Sixth revision lessons.
// Original text written for this app. Arguments are in radians, with the
// principal value −π < θ ≤ π.

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

export const LESSONS_U6B = [
  // ---------- 12. Complex numbers ----------
  L('pu-cx-1', 'mm-u6-complex', '12.1', 'The algebra of complex numbers', 17, ['Complex numbers'], [
    'The **imaginary unit** i satisfies **i² = −1**. A **complex number** z = x + iy has **real part** x = Re z and **imaginary part** y = Im z. Two complex numbers are **equal** only when their real parts are equal and their imaginary parts are equal: one equation gives two.',
    'Add and subtract part by part; multiply like brackets, then use i² = −1: (2 + 3i)(1 − 4i) = 2 − 8i + 3i − 12i² = 14 − 5i. The **conjugate** of z = x + iy is z̄ = x − iy, and **z z̄ = x² + y²**, a real number. To divide, multiply the top and bottom by the conjugate of the bottom: (3 + i)/(1 − i) = (3 + i)(1 + i)/2 = (2 + 4i)/2 = 1 + 2i.',
    '**Square roots**: to find √(5 + 12i), put (a + ib)² = 5 + 12i, so a² − b² = 5 and 2ab = 12; then a = 3, b = 2 and the roots are ±(3 + 2i). **Polynomial equations**: x² + 4x + 13 = 0 gives x = −2 ± 3i. A polynomial with real coefficients has its non-real roots in **conjugate pairs**.',
    'In the **Argand diagram**, z = x + iy is the point (x, y), or the vector from O to it. Adding complex numbers adds these vectors (the parallelogram rule), and z̄ is the reflection of z in the real axis.',
  ], 'am-argand', 'To divide, multiply the top and bottom by the conjugate of the bottom.',
  ['(1 + i)² equals:', ['2i', '2', '0', '1 + i²'], '1 + 2i + i² = 2i.'],
  [['Imaginary unit', 'i, with i² = −1.'], ['Conjugate', 'z̄ = x − iy for z = x + iy; z z̄ = |z|².'], ['Conjugate pairs', 'Non-real roots of a real polynomial come as a ± bi.']],
  [
    { q: 'Show that 2 + i is a root of z³ − 3z² + z + 5 = 0, and find the other roots.', steps: ['z = 2 + i: z² = 3 + 4i and z³ = 2 + 11i, so z³ − 3z² + z + 5 = (2 + 11i) − (9 + 12i) + (2 + i) + 5 = 0 ✓.', 'The coefficients are real, so 2 − i is a root too, and (z − 2 − i)(z − 2 + i) = z² − 4z + 5.', 'z³ − 3z² + z + 5 = (z² − 4z + 5)(z + 1): the roots are **2 + i, 2 − i and −1**.'] },
    { q: 'Find the square roots of −3 + 4i.', steps: ['(a + ib)² = −3 + 4i gives a² − b² = −3 and 2ab = 4.', 'b = 2/a: a² − 4/a² = −3, so a⁴ + 3a² − 4 = 0, (a² + 4)(a² − 1) = 0 and a = ±1.', 'The square roots are **±(1 + 2i)**; check: (1 + 2i)² = 1 + 4i − 4 = −3 + 4i ✓.'] },
  ]),

  L('pu-cx-2', 'mm-u6-complex', '12.2', 'Modulus, argument and the polar and exponential forms', 17, ['Complex numbers'], [
    'The **modulus** |z| = √(x² + y²) is the distance of z from O. The **argument** arg z = θ is the angle from the positive real axis to the line Oz, with the **principal value −π < θ ≤ π**. Always check the quadrant from a sketch: arg(−1 + i) = 3π/4, not −π/4.',
    '**Polar form**: z = r(cos θ + i sin θ), with r = |z| and θ = arg z. Euler’s relation **e^(iθ) = cos θ + i sin θ** gives the **exponential form z = re^(iθ)**. For example, 1 + i√3 = 2(cos π/3 + i sin π/3) = 2e^(iπ/3).',
    'Multiplying multiplies the moduli and adds the arguments: **|z₁z₂| = |z₁||z₂|** and **arg(z₁z₂) = arg z₁ + arg z₂** (adjusted by 2π if needed); dividing divides the moduli and subtracts the arguments. Multiplying by i rotates a point through π/2 about O, and **|z₁ − z₂| is the distance between z₁ and z₂**.',
  ], 'am-polar', 'Sketch the point first, then find the argument from the right quadrant.',
  ['The modulus of 3 − 4i is:', ['5', '7', '1', '25'], '√(9 + 16).'],
  [['Modulus', '|z| = √(x² + y²), the distance from O.'], ['Argument', 'The angle θ from the positive real axis, with −π < θ ≤ π.'], ['Exponential form', 'z = re^(iθ).']],
  [
    { q: 'Write z = −√3 + i in polar and exponential form.', steps: ['r = √(3 + 1) = 2; the point is in the second quadrant.', 'The angle with the negative real axis is tan⁻¹(1/√3) = π/6, so θ = π − π/6 = 5π/6.', '**z = 2(cos 5π/6 + i sin 5π/6) = 2e^(5πi/6)**.'] },
    { q: 'If z₁ = 2e^(iπ/3) and z₂ = 4e^(iπ/6), find z₁z₂ and z₁/z₂ in the form x + iy.', steps: ['z₁z₂ = 8e^(iπ/2) = **8i**.', 'z₁/z₂ = ½e^(iπ/6) = ½(cos π/6 + i sin π/6).', '= **√3/4 + ¼i**.'] },
  ]),

  L('pu-cx-3', 'mm-u6-complex', '12.3', 'De Moivre’s theorem and the nth roots', 18, ['Complex numbers'], [
    '**De Moivre’s theorem**: **(cos θ + i sin θ)ⁿ = cos nθ + i sin nθ** for every integer n (proved by induction for positive n). In exponential form it is simply (e^(iθ))ⁿ = e^(inθ). Powers become easy: (1 + i)⁸ = (√2 e^(iπ/4))⁸ = 16e^(2πi) = 16.',
    '**Multiple angles**: expand (cos θ + i sin θ)³ by the binomial theorem and compare real parts with cos 3θ: cos 3θ = cos³θ − 3 cos θ sin²θ = 4cos³θ − 3 cos θ. With z = e^(iθ), **z + 1/z = 2 cos θ** and **zⁿ + 1/zⁿ = 2 cos nθ**, which turn powers of cos θ into multiple angles.',
    '**nth roots**: zⁿ = re^(iθ) has n roots **z = r^(1/n) e^(i(θ + 2kπ)/n)**, k = 0, 1, …, n − 1, equally spaced round a circle of radius r^(1/n). The **nth roots of unity** solve zⁿ = 1: z = e^(2kπi/n). The cube roots of unity are 1, ω and ω², with ω = e^(2πi/3) = −½ + (√3/2)i and **1 + ω + ω² = 0**.',
  ], 'am-roots', 'For n roots, add 2kπ to the argument before dividing by n.',
  ['(cos θ + i sin θ)⁵ equals:', ['cos 5θ + i sin 5θ', '5 cos θ + 5i sin θ', 'cos⁵θ + i sin⁵θ', 'cos θ⁵ + i sin θ⁵'], 'De Moivre’s theorem.'],
  [['De Moivre’s theorem', '(cos θ + i sin θ)ⁿ = cos nθ + i sin nθ.'], ['Roots of unity', 'The n solutions of zⁿ = 1, at the vertices of a regular polygon.'], ['ω', 'A non-real cube root of unity, e^(2πi/3).']],
  [
    { q: 'Solve z³ = 8i.', steps: ['8i = 8e^(iπ/2), so z = 2e^(i(π/2 + 2kπ)/3), k = 0, 1, 2.', 'k = 0: 2e^(iπ/6) = √3 + i; k = 1: 2e^(5πi/6) = −√3 + i; k = 2: 2e^(3πi/2) = −2i.', '**z = √3 + i, −√3 + i or −2i**; check: (−2i)³ = −8i³ = 8i ✓.'] },
    { q: 'Use De Moivre’s theorem to show that sin 3θ = 3 sin θ − 4 sin³θ.', steps: ['(c + is)³ = c³ + 3ic²s − 3cs² − is³, with c = cos θ and s = sin θ.', 'Imaginary parts: sin 3θ = 3c²s − s³ = 3(1 − s²)s − s³.', '= **3 sin θ − 4 sin³θ** ✓.'] },
  ]),

  // ---------- 13. Loci in the Argand diagram ----------
  L('pu-loci-1', 'mm-u6-complex-loci', '13.1', 'Circles and perpendicular bisectors', 16, ['Complex numbers'], [
    'Since |z − a| is the distance from z to the point a, the locus **|z − a| = r** is the **circle with centre a and radius r**. |z − 2 + i| = 3 is the circle with centre 2 − i, the point (2, −1), and radius 3; its Cartesian equation is (x − 2)² + (y + 1)² = 9.',
    'The locus **|z − a| = |z − b|** is the set of points equidistant from a and b: the **perpendicular bisector** of the segment joining them. |z − 1| = |z − i| is the line y = x.',
    'Inequalities give regions: |z − a| ≤ r is the disc (the circle and its inside); |z − a| < |z − b| is the half-plane on a’s side of the bisector. Draw a boundary solid when it is included and dashed when it is not.',
    'Greatest and least |z| on a circle |z − a| = r that does not contain O: the line through O and the centre a meets the circle at the nearest and farthest points, so **|z| ranges from |a| − r to |a| + r**.',
  ], 'am-argand-loci', '|z − a| is a distance: read every modulus as "the distance from".',
  ['|z − 3i| = 2 is a circle with:', ['centre (0, 3) and radius 2', 'centre (3, 0) and radius 2', 'centre (0, −3) and radius 2', 'centre (0, 3) and radius 4'], 'a = 3i is the point (0, 3).'],
  [['Locus', 'The set of all points z satisfying a condition.'], ['Perpendicular bisector', 'The line of points equidistant from two given points.'], ['Region', 'The set of points satisfying an inequality, shaded in the Argand diagram.']],
  [
    { q: 'Find the Cartesian equation of the locus |z − 3| = |z + 1 − 2i|.', steps: ['With z = x + iy: (x − 3)² + y² = (x + 1)² + (y − 2)².', 'Expanding: −6x + 9 = 2x − 4y + 5, so 8x − 4y = 4.', '**y = 2x − 1**, the perpendicular bisector of (3, 0) and (−1, 2); it passes through their mid-point (1, 1) ✓.'] },
    { q: 'z lies on |z − 3 − 4i| = 2. Find the greatest and least values of |z|.', steps: ['The centre is 3 + 4i, at distance |3 + 4i| = 5 from O; the radius is 2.', 'Along the line through O and the centre: 5 − 2 and 5 + 2.', '**Least |z| = 3, greatest |z| = 7**.'] },
  ]),

  L('pu-loci-2', 'mm-u6-complex-loci', '13.2', 'Arguments, half-lines and regions', 16, ['Complex numbers'], [
    'arg(z − a) is the angle that the line from a to z makes with the positive real direction. The locus **arg(z − a) = θ** is a **half-line** starting at a; the point a itself is excluded, since arg 0 is not defined.',
    'arg(z − 1 − i) = π/4 is the half-line from (1, 1) with gradient 1: y = x for x > 1. arg z = −π/2 is the negative imaginary axis.',
    'Combined conditions give regions: |z| ≤ 3 together with 0 ≤ arg z ≤ π/3 is a **sector** of the disc of radius 3. Shade only the points that satisfy every condition.',
    'Greatest and least arg z on a circle that does not contain O: draw the two **tangents from O**; their points of contact give the extreme arguments. For |z − 4i| = 2, sin α = 2/4 gives α = π/6, so arg z runs from π/2 − π/6 = **π/3** to π/2 + π/6 = **2π/3**.',
  ], 'am-arg-loci', 'A half-line starts at a, and a itself is not on it.',
  ['arg(z − 2) = π/2 is:', ['the half-line x = 2, y > 0', 'the circle |z − 2| = 1', 'the line y = 2', 'the half-line y = 2, x > 0'], 'Straight up from (2, 0).'],
  [['Half-line', 'A line starting at a point and going on in one direction only.'], ['Sector', 'The part of a disc between two radii.'], ['Tangent from O', 'A line from O touching a circle, giving the extreme arguments on it.']],
  [
    { q: 'Sketch the region where |z − 2 − 2i| ≤ 2 and Re z ≥ 2, and find its area.', steps: ['|z − 2 − 2i| ≤ 2 is the disc with centre (2, 2) and radius 2.', 'Re z ≥ 2 keeps the half to the right of the line x = 2, which passes through the centre.', 'A half disc: area **½π × 2² = 2π square units**.'] },
    { q: 'For z on the circle |z − 4i| = 2, find the range of values of arg z.', steps: ['The centre 4i is 4 from O on the imaginary axis; the radius is 2.', 'The tangents from O make angle α with the imaginary axis, where sin α = 2/4, so α = π/6.', '**π/3 ≤ arg z ≤ 2π/3**.'] },
  ]),

  // ---------- 18. Planes ----------
  L('pu-plane-1', 'mm-u6-planes', '18.1', 'Equations of a plane', 17, ['Vectors'], [
    'A plane through the point A (position vector a) with **normal** n, a vector perpendicular to the plane, consists of the points r with (r − a)·n = 0, that is **r·n = a·n**. With n = ai + bj + ck this is the Cartesian equation **ax + by + cz = d**: the coefficients of x, y and z give a normal.',
    'Through a point with two directions b and c lying in the plane: **r = a + λb + μc** (the parametric form). A normal is then **n = b × c**. For three points A, B and C, use the directions AB and AC.',
    'The **perpendicular distance** from P(x₁, y₁, z₁) to the plane ax + by + cz = d is **|ax₁ + by₁ + cz₁ − d| ÷ √(a² + b² + c²)**: the three-dimensional form of the distance from a point to a line.',
  ], 'am-plane', 'The coefficients of x, y and z in a plane’s equation give its normal.',
  ['A normal to the plane 2x − y + 3z = 7 is:', ['2i − j + 3k', '7k', 'i + j + k', '2i + j + 3k'], 'The coefficients of x, y and z.'],
  [['Normal', 'A vector perpendicular to a plane.'], ['Scalar product form', 'r·n = d, the equation of a plane with normal n.'], ['Parametric form', 'r = a + λb + μc, using two directions in the plane.']],
  [
    { q: 'Find the equation of the plane through A(1, 0, 2), B(2, 1, 1) and C(0, 2, 3).', steps: ['AB = i + j − k and AC = −i + 2j + k.', 'n = AB × AC = 3i + 0j + 3k, so take n = i + k.', 'r·n = a·n: **x + z = 3**; check: B gives 2 + 1 = 3 ✓ and C gives 0 + 3 = 3 ✓.'] },
    { q: 'Find the distance from P(2, 1, −1) to the plane 2x − 2y + z = 5.', steps: ['ax₁ + by₁ + cz₁ − d = 4 − 2 − 1 − 5 = −4.', '√(a² + b² + c²) = √(4 + 4 + 1) = 3.', 'Distance = **4/3 units**.'] },
  ]),

  L('pu-plane-2', 'mm-u6-planes', '18.2', 'Lines meeting planes; angles; intersecting planes', 17, ['Vectors'], [
    '**A line meeting a plane**: substitute the general point of the line, r = a + λd, into the equation of the plane, solve for λ and substitute back. If no λ works, the line is parallel to the plane (d·n = 0) and outside it; if every λ works, the line lies in the plane.',
    '**Angles**: the angle θ between a line with direction d and a plane with normal n satisfies **sin θ = |d·n| ÷ (|d||n|)**, because the line makes the angle 90° − θ with the normal. The angle between two planes is the angle between their normals: **cos θ = |n₁·n₂| ÷ (|n₁||n₂|)**.',
    '**Two planes** that are not parallel meet in a line. Its direction is **n₁ × n₂**, and a point on it is found by giving one coordinate a value (say z = 0) and solving the two equations for the others.',
  ], 'am-line-plane', 'For the angle with a plane, use sine (the normal is at 90°).',
  ['The line r = λ(i + j + k) meets the plane x + y + z = 6 where λ =', ['2', '6', '3', '1'], '3λ = 6.'],
  [['Line of intersection', 'The line common to two non-parallel planes.'], ['Angle between a line and a plane', 'The angle between the line and its projection on the plane.'], ['Parallel line and plane', 'A line whose direction is perpendicular to the normal: d·n = 0.']],
  [
    { q: 'Find where r = (i + 2j) + λ(2i − j + 3k) meets the plane 2x + y + z = 13, and the angle between the line and the plane.', steps: ['2(1 + 2λ) + (2 − λ) + 3λ = 13, so 4 + 6λ = 13 and λ = 1.5: the point is **(4, 0.5, 4.5)**.', 'd·n = 4 − 1 + 3 = 6, |d| = √14, |n| = √6.', 'sin θ = 6/√84 = 0.655, so **θ = 40.9°**.'] },
    { q: 'Find the line of intersection of the planes x + y + z = 6 and x − y + 2z = 5.', steps: ['Direction: n₁ × n₂ = (i + j + k) × (i − j + 2k) = 3i − j − 2k.', 'A point: put z = 0, so x + y = 6 and x − y = 5: x = 5.5, y = 0.5.', '**r = (5.5i + 0.5j) + t(3i − j − 2k)**; check: 3 − 1 − 2 = 0 and 3 + 1 − 4 = 0 ✓.'] },
  ]),

  // ---------- 19. Numerical methods ----------
  L('pu-num-1', 'mm-u6-numerical', '19.1', 'Locating roots and solving equations by iteration', 18, ['Calculus'], [
    'If f is continuous on [a, b] and f(a), f(b) have **opposite signs**, then f(x) = 0 has a root between a and b. A sketch of two simple graphs (for eˣ = 3 − x, draw y = eˣ and y = 3 − x) also shows how many roots there are and roughly where.',
    '**Interval bisection**: test the mid-point and keep the half where the sign changes; each step halves the interval. **Linear interpolation**: the chord joining (a, f(a)) and (b, f(b)) crosses the axis at **x = (a f(b) − b f(a)) ÷ (f(b) − f(a))**, usually a better estimate than the mid-point.',
    'The **Newton–Raphson** method follows the tangent at xₙ down to the axis: **xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)**. From a good start it converges very fast, but it fails if f′(xₙ) is close to 0.',
    '**Simple iteration**: rearrange f(x) = 0 as x = g(x) and use xₙ₊₁ = g(xₙ). It converges near the root α when **|g′(α)| < 1**. To confirm a root to a given accuracy, show a change of sign at the ends of the rounding interval.',
  ], 'am-newton-raphson', 'Confirm the answer with a change of sign across the rounding interval.',
  ['For f(x) = x² − 2 and x₀ = 1, Newton–Raphson gives x₁ =', ['1.5', '2', '1.414', '0.5'], '1 − (−1)/2.'],
  [['Change of sign', 'Opposite signs of f at two points of a continuous graph show a root between them.'], ['Newton–Raphson', 'xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ).'], ['Convergence', 'The iterates settling down to a limit.']],
  [
    { q: 'Show that x³ − 2x − 5 = 0 has a root between 2 and 3, and find it to 3 decimal places by Newton–Raphson.', steps: ['f(2) = −1 < 0 and f(3) = 16 > 0, so there is a root between 2 and 3.', 'f′(x) = 3x² − 2; from x₀ = 2: x₁ = 2 − (−1)/10 = 2.1, x₂ = 2.1 − 0.061/11.23 = 2.0946, x₃ = 2.0946.', 'The root is **x = 2.095** (3 d.p.); check: f(2.0945) < 0 < f(2.0955).'] },
    { q: 'Use linear interpolation once on [2, 3] for the same equation.', steps: ['f(2) = −1 and f(3) = 16.', 'x = (2 × 16 − 3 × (−1)) ÷ (16 − (−1)) = 35/17.', '**x ≈ 2.06**, a first estimate.'] },
  ]),

  L('pu-num-2', 'mm-u6-numerical', '19.2', 'The trapezium rule', 15, ['Calculus'], [
    'Split [a, b] into n strips of width **h = (b − a)/n**, with ordinates y₀, y₁, …, yₙ. Replacing the curve by straight chords gives the **trapezium rule**: ∫ (a to b) y dx ≈ **½h[y₀ + yₙ + 2(y₁ + y₂ + … + yₙ₋₁)]**.',
    'More strips give a better estimate. If the curve is **concave up** (bending upwards, like eˣ), the chords lie above it and the rule **overestimates**; if it is concave down, the rule underestimates.',
    'Use it when an integral cannot be found exactly, such as ∫ e^(−x²) dx, or when the function is known only from a table of measured values.',
  ], 'am-trapezium', 'The two end ordinates count once; every inside ordinate counts twice.',
  ['With 4 strips on [0, 2], the strip width h is:', ['0.5', '2', '0.25', '4'], '(2 − 0)/4.'],
  [['Ordinate', 'A y-value at one of the strip boundaries.'], ['Trapezium rule', '½h[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)].'], ['Concave up', 'Bending upwards, so chords lie above the curve.']],
  [
    { q: 'Estimate ∫ (0 to 1) e^(−x²) dx with 4 strips.', steps: ['h = 0.25; y = 1, 0.93941, 0.77880, 0.56978, 0.36788.', '½ × 0.25 × [1 + 0.36788 + 2(0.93941 + 0.77880 + 0.56978)] = 0.125 × 5.94386.', '≈ **0.743** (the true value is 0.747).'] },
    { q: 'Estimate ∫ (1 to 3) 1/x dx with 4 strips and compare with ln 3.', steps: ['h = 0.5; y = 1, 0.6667, 0.5, 0.4, 0.3333.', '0.25 × [1.3333 + 2(1.5667)] = 0.25 × 4.4667 = 1.117.', 'ln 3 = 1.099: the rule **overestimates by about 1.6%**, since 1/x is concave up.'] },
  ]),

  // ---------- 20. Revision ----------
  L('pu-u6-paper1', 'mm-u6-papers', '20.1', 'Paper 1 sprint drills for the Upper Sixth', 13, ['Examination'], [
    'In June 2026, Paper 1 of 0765 and 0770 (1½ hours, multiple choice) was sat on Thursday 11 June, and the two structured papers (3 hours each) on Friday 12 June. Paper 1 covers the whole two-year course, so the Lower Sixth topics still count.',
    'Fast checks for Upper Sixth items:\n- differentiate a candidate integral instead of integrating\n- substitute the given conditions into each option for a differential equation, and check that it satisfies the equation\n- for complex numbers, test |z| and arg z of each option, or plot it on a quick Argand sketch\n- for a locus, test one point that obviously lies on it.',
    'Pace: a little over 2 minutes per item; mark items that need long working and come back to them; never leave an item blank.',
  ], 'am-gce-maths', 'Differentiate the options: it is quicker than integrating.',
  ['A quick way to test whether F(x) is the answer to ∫ f(x) dx is to:', ['differentiate F(x) and compare it with f(x)', 'integrate F(x)', 'substitute x = 0 only', 'square it'], 'Differentiation is faster.'],
  [['Sprint drill', 'A timed set of multiple-choice items done at examination pace.']],
  [
    { q: 'Item: the solution of dy/dx = 3y with y = 2 when x = 0 is A y = 2e^(3x), B y = 3e^(2x), C y = e^(3x) + 1, D y = 6x + 2.', steps: ['dy/dx = 3y has solutions Ae^(3x).', 'x = 0 gives A = 2.', '**Answer A** (C also gives y = 2 at x = 0, but its derivative 3e^(3x) is not 3y).'] },
  ]),

  L('pu-u6-paper2', 'mm-u6-papers', '20.2', 'Structured pure questions: integration, differential equations and complex numbers', 15, ['Examination'], [
    'Integration: state the method ("by parts with u = …", "let u = …"), change the limits in a substitution, and never leave out + c in an indefinite integral.',
    'Differential equations: separate the variables correctly with one constant, show the integrating factor, and use the conditions to find the constants at the end. Check the answer by substituting it back.',
    'Complex numbers: give arguments in radians with −π < θ ≤ π unless told otherwise; draw a clear Argand diagram for loci, with centres and radii labelled; show the conjugate-pair step for real polynomials.',
    'Time: share the three hours in proportion to the marks shown for each question, and start with the questions you are surest of.',
  ], 'am-integrals-table', 'Check a differential equation’s solution by substituting it back.',
  ['In a definite integral by substitution you should:', ['change the limits to values of the new variable', 'add + c', 'keep the old limits with the new variable', 'differentiate the limits'], 'Or change back to x before substituting.'],
  [['Hence', 'A signal to use the result of the previous part.']],
  [
    { q: 'Solve dy/dx = xy², given that y = 1 when x = 0, and state where the solution is valid.', steps: ['Separate: ∫ y⁻² dy = ∫ x dx, so −1/y = ½x² + c.', 'x = 0, y = 1: c = −1.', '**y = 2/(2 − x²)**, valid for |x| < √2, where the denominator stays positive.'] },
  ]),
];
