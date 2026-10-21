// A Level Pure Mathematics lessons, Lower Sixth (part 4): the calculus of the
// Pure Mathematics with Mechanics scheme (differentiation, its applications and
// integration), and the Lower Sixth items of the MINESEC syllabus that the
// schemes leave out (the sine and cosine rules, factor and half-angle formulae,
// loci and parametric equations, matrices as transformations, direction
// cosines and the vector product). Original text written for this app.
// Integrals between limits are written ∫ (a to b) f(x) dx.

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

export const LESSONS_L6D = [
  // ---------- 5. Lines: division, loci, parametric equations ----------
  L('pm-line-3', 'mm-l6-lines', '5.3', 'Dividing a segment, loci and parametric equations', 16, ['Coordinate geometry'], [
    'The point P dividing AB **internally** in the ratio m : n (AP : PB = m : n, P between A and B) is **((nx₁ + mx₂)/(m + n), (ny₁ + my₂)/(m + n))**. It divides AB **externally** in the ratio m : n (P on AB extended, still with AP : PB = m : n) when **P = ((mx₂ − nx₁)/(m − n), (my₂ − ny₁)/(m − n))**.',
    'A **locus** is the set of all points that satisfy a condition. To find its Cartesian equation, let P = (x, y), write the condition algebraically and simplify. Points equidistant from A(1, 2) and B(5, 4): (x − 1)² + (y − 2)² = (x − 5)² + (y − 4)², which simplifies to **2x + y = 9**, the perpendicular bisector of AB.',
    'A curve can also be given **parametrically**, as x = f(t) and y = g(t). Eliminate t to get the Cartesian equation: x = t², y = 2t gives t = y/2, so **y² = 4x**, a parabola; x = 3 cos t, y = 3 sin t gives x² + y² = 9, a circle.',
    '**Reduction to linear form**: y = axⁿ becomes lg y = n lg x + lg a, a straight line when lg y is plotted against lg x; y = abˣ becomes lg y = (lg b)x + lg a, a straight line when lg y is plotted against x. The gradient and intercept of the line of best fit give the constants.',
  ], 'am-locus', 'For a locus, call the moving point (x, y), write the condition, then simplify.',
  ['The mid-point of A(2, 6) and B(8, −2) is:', ['(5, 2)', '(3, 4)', '(10, 4)', '(6, −8)'], 'Average the coordinates.'],
  [['Locus', 'The set of all points satisfying a given condition.'], ['Parametric equations', 'Equations giving x and y in terms of a third variable, the parameter t.'], ['External division', 'Division of AB at a point P on AB extended, with AP : PB = m : n.']],
  [
    { q: 'Find the point dividing A(1, 2) and B(7, 11) internally in the ratio 1 : 2, and the point dividing it externally in the ratio 1 : 2.', steps: ['Internal: ((2 × 1 + 1 × 7)/3, (2 × 2 + 1 × 11)/3) = **(3, 5)**.', 'External: ((1 × 7 − 2 × 1)/(1 − 2), (1 × 11 − 2 × 2)/(1 − 2)) = **(−5, −7)**.', 'Check: AP = √117 and PB = √468 = 2√117, so AP : PB = 1 : 2 ✓.'] },
    { q: 'P moves so that its distance from (0, 3) equals its distance from the line y = −3. Find its locus.', steps: ['Distance to (0, 3): √(x² + (y − 3)²); distance to the line: |y + 3|.', 'Square both: x² + y² − 6y + 9 = y² + 6y + 9.', '**x² = 12y**, a parabola.'] },
  ]),

  // ---------- 13. Solving triangles ----------
  L('pm-rad-3', 'mm-l6-radians', '13.3', 'Solving triangles: the sine rule, the cosine rule and the area', 15, ['Trigonometry'], [
    'In any triangle ABC, with sides a, b and c opposite the angles A, B and C:\n- the **sine rule**: a/sin A = b/sin B = c/sin C\n- the **cosine rule**: a² = b² + c² − 2bc cos A, or cos A = (b² + c² − a²)/(2bc)\n- the **area**: ½ab sin C (two sides and the angle between them).',
    'Choosing the rule: with **two sides and the included angle**, the cosine rule gives the third side; with **three sides**, it gives any angle. With a side and the angle **opposite** it known, use the sine rule.',
    'The **ambiguous case**: given two sides and an angle that is not between them, the sine rule may give two triangles, because sin θ = sin(180° − θ). Test the obtuse answer: it is possible only if the angles still add up to less than 180°.',
    'Problems on heights, distances and bearings reduce to these rules once a clear sketch shows the known sides and angles. Find the largest angle first (opposite the longest side): if it is obtuse, the cosine rule shows it with a negative cosine.',
  ], 'am-sine-cosine', 'Two sides and the included angle: use the cosine rule.',
  ['In triangle ABC, b = 5, c = 8 and A = 60°. Then a² equals:', ['49', '89', '129', '39'], '25 + 64 − 2 × 5 × 8 × 0.5 = 49.'],
  [['Sine rule', 'a/sin A = b/sin B = c/sin C in any triangle.'], ['Cosine rule', 'a² = b² + c² − 2bc cos A in any triangle.'], ['Ambiguous case', 'Two possible triangles from two sides and a non-included angle.']],
  [
    { q: 'Triangle ABC has a = 7, b = 5 and c = 8. Find angle A and the area.', steps: ['cos A = (b² + c² − a²)/(2bc) = (25 + 64 − 49)/80 = 0.5.', '**A = 60°**.', 'Area = ½bc sin A = ½ × 5 × 8 × (√3/2) = **10√3 ≈ 17.3 square units**.'] },
    { q: 'In triangle ABC, a = 6, b = 8 and A = 40°. Find the possible values of B.', steps: ['sin B = b sin A ÷ a = 8 × sin 40° ÷ 6 = 0.857.', 'B = 59.0° or B = 180° − 59.0° = 121.0°.', 'Both fit (40° + 121° < 180°), so there are **two triangles: B = 59.0° or B = 121.0°**.'] },
  ]),

  // ---------- 14. Factor formulae and general solutions ----------
  L('pm-trig-3', 'mm-l6-trig-identities', '14.3', 'Factor formulae, the t-formulae and general solutions', 16, ['Trigonometry'], [
    'The **factor formulae** turn sums into products:\n- sin P + sin Q = 2 sin ½(P + Q) cos ½(P − Q)\n- sin P − sin Q = 2 cos ½(P + Q) sin ½(P − Q)\n- cos P + cos Q = 2 cos ½(P + Q) cos ½(P − Q)\n- cos P − cos Q = −2 sin ½(P + Q) sin ½(P − Q).\nThey come from adding and subtracting the compound angle formulae, and they are used to solve equations such as sin 3θ + sin θ = 0.',
    'The **t-formulae** (half-angle substitution): with t = tan(θ/2), **sin θ = 2t/(1 + t²)**, **cos θ = (1 − t²)/(1 + t²)** and **tan θ = 2t/(1 − t²)**. They turn a cos θ + b sin θ = c into a quadratic in t. Multiple angles: **cos 3θ = 4cos³θ − 3 cos θ** and **sin 3θ = 3 sin θ − 4 sin³θ**.',
    '**General solutions** (n any integer, angles in radians):\n- sin θ = sin α gives **θ = nπ + (−1)ⁿα**\n- cos θ = cos α gives **θ = 2nπ ± α**\n- tan θ = tan α gives **θ = nπ + α**.\nIn degrees, replace π by 180°. Particular solutions in an interval come from giving n the values 0, ±1, ±2, …',
  ], 'am-trig-graphs', 'When a sum of two sines or two cosines equals zero, use a factor formula.',
  ['The general solution of cos θ = ½ is:', ['θ = 2nπ ± π/3', 'θ = nπ + π/3', 'θ = nπ + (−1)ⁿπ/3', 'θ = π/3 only'], 'cos θ = cos α gives θ = 2nπ ± α.'],
  [['Factor formulae', 'Formulae that write a sum or difference of two sines or cosines as a product.'], ['t-formulae', 'sin θ, cos θ and tan θ written in terms of t = tan(θ/2).'], ['General solution', 'A formula that gives every solution of a trigonometric equation.']],
  [
    { q: 'Solve sin 3θ + sin θ = 0 for 0 ≤ θ ≤ π.', steps: ['Factor formula: sin 3θ + sin θ = 2 sin 2θ cos θ.', 'sin 2θ = 0 gives θ = 0, π/2, π; cos θ = 0 gives θ = π/2.', '**θ = 0, π/2 or π**.'] },
    { q: 'Find the general solution of tan 2θ = 1.', steps: ['tan 2θ = tan(π/4), so 2θ = nπ + π/4.', '**θ = nπ/2 + π/8**, n any integer.', 'n = 0 and n = 1 give θ = π/8 and 5π/8.'] },
  ]),

  // ---------- 15. Matrices as transformations ----------
  L('pm-mat-3', 'mm-l6-matrices', '15.3', 'Matrices as transformations of the plane', 16, ['Matrices'], [
    'A 2 × 2 matrix M maps the point (x, y), written as a column, to M(x, y). The images of (1, 0) and (0, 1) are the **columns of M**, so to find the matrix of a transformation, find where these two points go.',
    'Standard matrices (about the origin):\n- rotation through θ anticlockwise: [cos θ −sin θ; sin θ cos θ]\n- reflection in the x-axis: [1 0; 0 −1]; in the line y = x: [0 1; 1 0]\n- reflection in the line y = x tan θ: [cos 2θ sin 2θ; sin 2θ −cos 2θ]\n- enlargement with scale factor k: [k 0; 0 k]\n- stretch parallel to the x-axis, factor k: [k 0; 0 1]; shear with the x-axis fixed: [1 k; 0 1].',
    'The **area scale factor** is |det M|: a shape of area A has an image of area |det M| × A. A negative determinant means the orientation is reversed, as in a reflection; det M = 0 squashes the whole plane onto a line.',
    'Doing M first and then N is the single transformation **NM** (the first matrix is on the right). The inverse matrix M⁻¹ undoes M. In three dimensions, |det| of a 3 × 3 matrix is the volume scale factor.',
  ], 'am-matrix-transform', 'The columns of M are the images of (1, 0) and (0, 1).',
  ['The matrix [0 −1; 1 0] represents:', ['a rotation of 90° anticlockwise about O', 'a reflection in y = x', 'a rotation of 90° clockwise about O', 'an enlargement'], '(1, 0) goes to (0, 1).'],
  [['Transformation matrix', 'A matrix whose product with a position vector gives the image point.'], ['Area scale factor', '|det M|, the factor by which the transformation multiplies areas.'], ['Composite transformation', 'NM: the transformation M followed by N.']],
  [
    { q: 'The unit square is mapped by M = [3 1; 1 2]. Find the image of each vertex and the area of the image.', steps: ['(1, 0) → (3, 1), (0, 1) → (1, 2), (1, 1) → (4, 3), and O stays at O.', 'det M = 3 × 2 − 1 × 1 = 5.', 'The image is a parallelogram of **area 5 square units**.'] },
    { q: 'Find the single matrix for a rotation of 90° anticlockwise about O followed by a reflection in the x-axis, and describe it.', steps: ['Rotation R = [0 −1; 1 0]; reflection X = [1 0; 0 −1].', 'R first, then X: XR = [0 −1; −1 0].', '(1, 0) → (0, −1) and (0, 1) → (−1, 0): a **reflection in the line y = −x**.'] },
  ]),

  // ---------- 18. Direction cosines and the vector product ----------
  L('pm-vec-3', 'mm-l6-vectors', '18.3', 'Direction cosines, the vector product and the triple product', 17, ['Vectors'], [
    'If a makes angles α, β and γ with the x, y and z axes, its **direction cosines** are cos α = a₁/|a|, cos β = a₂/|a| and cos γ = a₃/|a|: the components of the unit vector â. They satisfy **cos²α + cos²β + cos²γ = 1**. For a = 2i + 3j + 6k, with |a| = 7, they are 2/7, 3/7 and 6/7.',
    'The **vector (cross) product** a × b is a vector **perpendicular to both a and b**, of magnitude **|a||b| sin θ**, in the direction given by the right-hand rule (a, b and a × b like i, j and k). In components: a × b = (a₂b₃ − a₃b₂)i − (a₁b₃ − a₃b₁)j + (a₁b₂ − a₂b₁)k, the determinant with first row i, j, k.',
    'Properties: **b × a = −(a × b)**; a × b = 0 when a and b are parallel; i × j = k, j × k = i and k × i = j. Uses: a vector perpendicular to two given vectors, the **area of a parallelogram** |a × b|, and the area of a triangle ½|a × b|.',
    'The **scalar triple product** a·(b × c) equals the determinant with rows a, b and c. Its size is the **volume of the parallelepiped** with edges a, b and c, and it is zero exactly when the three vectors are **coplanar**.',
  ], 'am-cross-product', 'b × a = −(a × b): with vector products the order matters.',
  ['i × j equals:', ['k', '−k', '0', 'i'], 'The right-hand rule.'],
  [['Direction cosines', 'The cosines of the angles a vector makes with the x, y and z axes.'], ['Vector product', 'a × b: perpendicular to a and b, of size |a||b| sin θ.'], ['Scalar triple product', 'a·(b × c): the volume of the parallelepiped on a, b and c.']],
  [
    { q: 'For a = 2i + j − k and b = i + 3j + 2k, find a × b and the area of the triangle with a and b as two sides.', steps: ['a × b = (1 × 2 − (−1) × 3)i − (2 × 2 − (−1) × 1)j + (2 × 3 − 1 × 1)k.', '= **5i − 5j + 5k**; check: a·(a × b) = 10 − 5 − 5 = 0 ✓.', 'Area = ½|a × b| = ½√75 = **(5√3)/2 ≈ 4.33 square units**.'] },
    { q: 'Show that a = i + 2j + 3k, b = 2i − j + k and c = 3i + j + 4k are coplanar.', steps: ['b × c = (−1 × 4 − 1 × 1)i − (2 × 4 − 1 × 3)j + (2 × 1 − (−1) × 3)k = −5i − 5j + 5k.', 'a·(b × c) = −5 − 10 + 15 = 0.', 'The triple product is zero, so the vectors are **coplanar** (indeed c = a + b).'] },
  ]),

  // ---------- 21. Differentiation ----------
  L('pm-diff-1', 'mm-l6-differentiation', '21.1', 'The derivative from first principles', 16, ['Calculus'], [
    'The gradient of a curve at a point P is the gradient of the **tangent** there. Take a nearby point Q on the curve: the **chord** PQ has gradient [f(x + h) − f(x)]/h. As Q slides towards P (h → 0), the chord turns into the tangent, so the gradient of the curve is **f′(x) = lim (h → 0) [f(x + h) − f(x)]/h**. This limit is the **derivative**, also written dy/dx.',
    'Differentiating **from first principles** means working out this limit directly. For f(x) = x²: f(x + h) − f(x) = 2xh + h², so the quotient is 2x + h, which tends to **2x**. For f(x) = x³ the quotient is 3x² + 3xh + h², which tends to 3x².',
    'The general rule, for any rational n: **d/dx (xⁿ) = nxⁿ⁻¹**. A constant has derivative 0, constant multiples stay, and sums are differentiated term by term: d/dx (3x⁴ − 5x + 7) = 12x³ − 5. Write roots and fractions as powers first: √x = x^½ gives ½x^(−½), and 1/x² = x⁻² gives −2x⁻³.',
    'A function is **differentiable** at a point when this limit exists there. A differentiable function is continuous, but not the other way round: y = |x| is continuous at 0, yet the chord gradients from the left (−1) and from the right (+1) disagree, so it has no derivative at the corner x = 0.',
  ], 'am-tangent-chord', 'Write roots and fractions as powers of x before differentiating.',
  ['The derivative of 4x³ − 2x + 9 is:', ['12x² − 2', '12x³ − 2', '4x² − 2', '12x² + 9'], 'Multiply by the power and lower it by one; the constant vanishes.'],
  [['Derivative', 'The limit of the gradient of a chord as its two points come together: the gradient of the tangent.'], ['First principles', 'Finding a derivative directly from the limit definition.'], ['Differentiable', 'Having a derivative at the point, because the limit exists there.']],
  [
    { q: 'Differentiate f(x) = 1/x from first principles.', steps: ['f(x + h) − f(x) = 1/(x + h) − 1/x = −h/(x(x + h)).', 'Divide by h: −1/(x(x + h)).', 'As h → 0 this tends to **−1/x²**, as the power rule gives for x⁻¹.'] },
    { q: 'Find dy/dx for y = (x² + 3)/√x.', steps: ['Split into powers: y = x^(3/2) + 3x^(−½).', 'dy/dx = (3/2)x^½ − (3/2)x^(−3/2).', '= **(3/2)(√x − 1/(x√x))**.'] },
  ]),

  L('pm-diff-2', 'mm-l6-differentiation', '21.2', 'Standard derivatives; the chain, product and quotient rules', 18, ['Calculus'], [
    'Standard derivatives, with x in radians: **d/dx (eˣ) = eˣ**, **d/dx (ln x) = 1/x**, **d/dx (sin x) = cos x**, **d/dx (cos x) = −sin x** and **d/dx (tan x) = sec²x**. The result for sin x follows from first principles, using sin(x + h) = sin x cos h + cos x sin h with (sin h)/h → 1 and (1 − cos h)/h → 0.',
    'The **chain rule**, for a function of a function: if y = f(u) and u = g(x), then **dy/dx = dy/du × du/dx**. So d/dx (3x + 1)⁵ = 5(3x + 1)⁴ × 3 = 15(3x + 1)⁴; d/dx e^(x²) = 2x e^(x²); d/dx sin 5x = 5 cos 5x; and d/dx ln f(x) = f′(x)/f(x).',
    'The **product rule**: d/dx (uv) = **u dv/dx + v du/dx**. The **quotient rule**: d/dx (u/v) = **(v du/dx − u dv/dx)/v²**. For example, d/dx (x² sin x) = x² cos x + 2x sin x.',
    'Choose the rule from the outermost structure: two factors multiplied, the product rule; a fraction with x in the denominator, the quotient rule; one function inside another, the chain rule. Many questions combine them.',
  ], 'am-derivatives', 'Name the outer structure first, then choose the rule.',
  ['d/dx (e^(3x)) equals:', ['3e^(3x)', 'e^(3x)', '3xe^(3x − 1)', 'e^(3x)/3'], 'Chain rule: the derivative of 3x is 3.'],
  [['Chain rule', 'dy/dx = dy/du × du/dx for a function of a function.'], ['Product rule', 'd(uv)/dx = u dv/dx + v du/dx.'], ['Quotient rule', 'd(u/v)/dx = (v du/dx − u dv/dx)/v².']],
  [
    { q: 'Differentiate y = x²e^(−x).', steps: ['Product rule with u = x², v = e^(−x): du/dx = 2x and dv/dx = −e^(−x).', 'dy/dx = x²(−e^(−x)) + e^(−x)(2x).', '= **xe^(−x)(2 − x)**.'] },
    { q: 'Differentiate y = (ln x)/x.', steps: ['Quotient rule with u = ln x, v = x: du/dx = 1/x and dv/dx = 1.', 'dy/dx = (x × 1/x − ln x × 1)/x².', '= **(1 − ln x)/x²**.'] },
    { q: 'Differentiate y = √(1 + sin 2x).', steps: ['y = (1 + sin 2x)^½, and the inside has derivative 2 cos 2x.', 'dy/dx = ½(1 + sin 2x)^(−½) × 2 cos 2x.', '= **cos 2x / √(1 + sin 2x)**.'] },
  ]),

  L('pm-diff-3', 'mm-l6-differentiation', '21.3', 'Second derivatives, implicit and parametric differentiation', 17, ['Calculus'], [
    'Differentiating dy/dx again gives the **second derivative** d²y/dx² (or f″(x)), the rate at which the gradient changes. For y = x³ − 6x: dy/dx = 3x² − 6 and d²y/dx² = 6x. In motion, if s is the displacement, ds/dt is the velocity and d²s/dt² the acceleration.',
    '**Implicit differentiation**: when x and y are linked by an equation that is not solved for y, differentiate every term with respect to x, treating y as a function of x: d/dx (y²) = 2y dy/dx and d/dx (xy) = x dy/dx + y. Then collect the dy/dx terms and solve for dy/dx.',
    '**Parametric differentiation**: when x = f(t) and y = g(t), **dy/dx = (dy/dt) ÷ (dx/dt)**. For x = t², y = 2t, dy/dx = 2 ÷ 2t = 1/t.',
    'The **inverse trigonometric functions**: if y = sin⁻¹x, then sin y = x, so cos y dy/dx = 1 and **dy/dx = 1/√(1 − x²)**. In the same way, **d/dx (cos⁻¹x) = −1/√(1 − x²)** and **d/dx (tan⁻¹x) = 1/(1 + x²)**.',
  ], 'am-circle', 'In implicit work, every y term picks up a factor dy/dx.',
  ['If x = 3t and y = t³, then dy/dx equals:', ['t²', '3t²', 't³/3', '1/t²'], '3t² ÷ 3.'],
  [['Second derivative', 'The derivative of the derivative, d²y/dx²: how fast the gradient changes.'], ['Implicit differentiation', 'Differentiating an equation in x and y term by term, treating y as a function of x.'], ['Parameter', 'A third variable t through which x and y are both given.']],
  [
    { q: 'Find the gradient of the circle x² + y² − 2x − 4y − 20 = 0 at P(4, 6).', steps: ['Differentiate: 2x + 2y dy/dx − 2 − 4 dy/dx = 0.', 'dy/dx (2y − 4) = 2 − 2x, so dy/dx = (1 − x)/(y − 2).', 'At (4, 6): **dy/dx = −¾**, the gradient of the tangent found with the radius in the circle lesson ✓.'] },
    { q: 'A curve is given by x = 2 cos t, y = 3 sin t. Find dy/dx at t = π/4.', steps: ['dx/dt = −2 sin t and dy/dt = 3 cos t.', 'dy/dx = 3 cos t ÷ (−2 sin t) = −(3/2) cot t.', 'At t = π/4, cot t = 1, so **dy/dx = −3/2**.'] },
    { q: 'Show that y = sin 3x satisfies d²y/dx² + 9y = 0.', steps: ['dy/dx = 3 cos 3x.', 'd²y/dx² = −9 sin 3x.', 'So d²y/dx² + 9y = −9 sin 3x + 9 sin 3x = **0** ✓.'] },
  ]),

  // ---------- 22. Applications of differentiation ----------
  L('pm-dapp-1', 'mm-l6-diff-applications', '22.1', 'Tangents, normals, rates of change and small changes', 17, ['Calculus'], [
    'At the point (x₁, y₁) of a curve, the gradient of the tangent is m = dy/dx worked out there. The **tangent** is y − y₁ = m(x − x₁), and the **normal**, perpendicular to it, has gradient −1/m. For y = x³ − 2x at (1, −1): dy/dx = 3x² − 2 = 1, so the tangent is **y = x − 2** and the normal is **y = −x**.',
    'A derivative is a **rate of change**: dV/dt is how fast V changes with time. When quantities are linked, the chain rule connects their rates: **dA/dt = dA/dr × dr/dt**. If the radius of a circular oil patch grows at 2 cm s⁻¹, then when r = 10 cm, dA/dt = 2πr × 2 = 40π ≈ 126 cm² s⁻¹.',
    '**Small changes**: for a small change δx in x, **δy ≈ (dy/dx) δx**. The **percentage change** is (δy/y) × 100. For y = xⁿ, δy/y ≈ n(δx/x): a 1% error in the radius of a sphere gives about a 3% error in its volume.',
  ], 'am-tangent-normal', 'Write the chain first: the rate you want = a derivative × the rate you know.',
  ['Where dy/dx = 4, the gradient of the normal is:', ['−¼', '4', '−4', '¼'], 'Perpendicular gradients multiply to −1.'],
  [['Normal', 'The line through a point of a curve perpendicular to the tangent there.'], ['Rate of change', 'A derivative, usually with respect to time.'], ['Small change', 'δy ≈ (dy/dx)δx for a small change δx.']],
  [
    { q: 'Water is poured at 6 cm³ s⁻¹ into a cone, vertex down, with semi-vertical angle 45°. How fast is the depth rising when it is 3 cm?', steps: ['With a 45° angle the radius of the water surface equals the depth h, so V = ⅓πh³ and dV/dh = πh².', 'dh/dt = (dV/dt) ÷ (dV/dh) = 6 ÷ (πh²).', 'At h = 3: dh/dt = 6/(9π) = **2/(3π) ≈ 0.212 cm s⁻¹**.'] },
    { q: 'The side of a cube is measured as 10 cm with a possible error of 0.05 cm. Estimate the possible error in its volume.', steps: ['V = x³, so dV/dx = 3x² = 300 when x = 10.', 'δV ≈ 300 × 0.05 = **15 cm³**.', 'As a percentage, 15/1000 = 1.5%: three times the 0.5% error in the side.'] },
  ]),

  L('pm-dapp-2', 'mm-l6-diff-applications', '22.2', 'Stationary points, increasing functions and optimisation', 18, ['Calculus'], [
    'A function is **increasing** where f′(x) > 0 and **decreasing** where f′(x) < 0. Points where **f′(x) = 0** are **stationary points**: there the tangent is horizontal.',
    'The nature of a stationary point:\n- **second derivative test**: f″(x) > 0 gives a **minimum** and f″(x) < 0 a **maximum**; if f″(x) = 0 the test gives no answer\n- **sign test**: f′ changes from + to − at a maximum and from − to + at a minimum, and keeps its sign at a **stationary point of inflexion**.',
    'A **point of inflexion** is where the curve changes from bending one way (f″ > 0) to bending the other (f″ < 0). For f(x) = x³ − 3x² − 9x + 5: f′(x) = 3x² − 6x − 9 = 3(x − 3)(x + 1), giving a **maximum (−1, 10)** and a **minimum (3, −22)**; f″(x) = 6x − 6 changes sign at x = 1, the **point of inflexion (1, −6)**.',
    '**Optimisation**: write the quantity to be made largest or smallest as a function of ONE variable (use the given condition to remove the other), differentiate, set the derivative to zero, check the nature, and answer the question asked, usually a size and the best value.',
  ], 'am-stationary', 'Always state the nature of a stationary point, with the reason.',
  ['At a stationary point where f″(x) = −3, the point is:', ['a maximum', 'a minimum', 'a point of inflexion', 'impossible to decide'], 'A negative second derivative.'],
  [['Stationary point', 'A point where dy/dx = 0.'], ['Point of inflexion', 'A point where the curve changes the way it bends; f″ changes sign there.'], ['Optimisation', 'Finding the largest or smallest value of a quantity.']],
  [
    { q: 'Squares of side x cm are cut from the corners of a 12 cm square sheet, which is folded into an open box. Find the greatest volume.', steps: ['V = x(12 − 2x)² = 4x³ − 48x² + 144x, for 0 < x < 6.', 'dV/dx = 12x² − 96x + 144 = 12(x − 2)(x − 6) = 0 gives x = 2 (x = 6 leaves no box).', 'd²V/dx² = 24x − 96 = −48 < 0 at x = 2, a maximum: **V = 2 × 8² = 128 cm³**.'] },
    { q: 'Find where f(x) = x³ − 3x² − 9x + 5 is decreasing.', steps: ['f′(x) = 3(x − 3)(x + 1).', 'f′(x) < 0 between the roots −1 and 3.', 'f is decreasing for **−1 < x < 3**.'] },
  ]),

  L('pm-dapp-3', 'mm-l6-diff-applications', '22.3', 'Curve sketching, Rolle’s theorem and the mean value theorem', 17, ['Calculus'], [
    'To sketch y = f(x), find:\n- the domain and any **vertical asymptotes** (where a denominator is zero)\n- the intercepts with the axes\n- the stationary points and their nature, and the points of inflexion\n- the behaviour as x → ±∞ (a **horizontal asymptote** y = L when f(x) → L)\n- a **table of variations**: the sign of f′(x) in each interval, with arrows showing where f rises and falls.',
    'Example: f(x) = x/(x² + 1) is defined for every x and is odd. f′(x) = (1 − x²)/(x² + 1)², so it has a **maximum (1, ½)** and a **minimum (−1, −½)**. As x → ±∞, f(x) → 0, so the x-axis is a horizontal asymptote, and the curve passes through the origin.',
    '**Rolle’s theorem**: if f is continuous on [a, b], differentiable on (a, b) and f(a) = f(b), then f′(c) = 0 for at least one c between a and b. The **mean value theorem** extends it: there is a c in (a, b) with **f′(c) = (f(b) − f(a))/(b − a)**, so somewhere the tangent is parallel to the chord.',
    'The equation **dy/dx = ky** (a rate of change proportional to the amount) is satisfied by **y = Ae^(kx)**: growth when k > 0, as for bacteria or compound interest, and decay when k < 0, as for radioactivity.',
  ], 'am-curve-sketch', 'A table of variations shows the shape and the nature of each turning point at once.',
  ['For f(x) = x² on [1, 3], the mean value theorem gives c =', ['2', '1', '3', '4'], 'f′(c) = 2c must equal (9 − 1)/(3 − 1) = 4.'],
  [['Asymptote', 'A line that a curve approaches more and more closely.'], ['Table of variations', 'A table of the sign of f′ in each interval, showing where f increases and decreases.'], ['Mean value theorem', 'Between a and b there is a point where the tangent is parallel to the chord.']],
  [
    { q: 'Sketch y = (x + 1)/(x − 2), giving the asymptotes and the intercepts.', steps: ['Vertical asymptote x = 2; as x → ±∞, y → 1, so y = 1 is a horizontal asymptote.', 'Intercepts: (−1, 0) and (0, −½).', 'dy/dx = −3/(x − 2)² < 0 for every x ≠ 2: the curve falls on both sides of x = 2 and has **no stationary points**.'] },
    { q: 'Verify Rolle’s theorem for f(x) = x² − 4x + 3 on [1, 3].', steps: ['f(1) = 0 = f(3), and a polynomial is continuous and differentiable.', 'f′(c) = 2c − 4 = 0 gives c = 2.', '**c = 2 lies between 1 and 3** ✓.'] },
  ]),

  // ---------- 23. Integration ----------
  L('pm-int-1', 'mm-l6-integration', '23.1', 'Integration as the reverse of differentiation', 16, ['Calculus'], [
    'Integration reverses differentiation. If F′(x) = f(x), then **∫ f(x) dx = F(x) + c**, the **indefinite integral**. The **constant of integration** c is there because every constant differentiates to 0, so a whole family of curves has the same gradient function. A known point on the curve (a **boundary condition**) fixes c.',
    'Standard integrals (each + c): **∫ xⁿ dx = xⁿ⁺¹/(n + 1)** for n ≠ −1; **∫ 1/x dx = ln|x|**; **∫ eˣ dx = eˣ**; **∫ cos x dx = sin x**; **∫ sin x dx = −cos x**; **∫ sec²x dx = tan x**. With a linear expression inside, divide by its coefficient: ∫ e^(3x) dx = ⅓e^(3x), ∫ cos(2x + 1) dx = ½ sin(2x + 1), ∫ (2x − 5)⁴ dx = (2x − 5)⁵/10.',
    'Integrate term by term after expanding or splitting: ∫ (x² + 1)² dx = ∫ (x⁴ + 2x² + 1) dx = x⁵/5 + 2x³/3 + x + c, and ∫ (x + 1)/√x dx = ∫ (x^½ + x^(−½)) dx = ⅔x^(3/2) + 2x^½ + c. There is no product rule for integrals: never integrate two factors separately.',
  ], 'am-integral-family', 'Check every integral by differentiating your answer.',
  ['∫ 6x² dx equals:', ['2x³ + c', '12x + c', '6x³ + c', '3x² + c'], 'Raise the power by one and divide by the new power.'],
  [['Indefinite integral', 'The general antiderivative F(x) + c of f(x).'], ['Constant of integration', 'The arbitrary constant c, fixed by a boundary condition.'], ['Antiderivative', 'A function whose derivative is the given function.']],
  [
    { q: 'A curve has gradient dy/dx = 3x² − 4x and passes through (2, 5). Find its equation.', steps: ['y = ∫ (3x² − 4x) dx = x³ − 2x² + c.', 'At (2, 5): 5 = 8 − 8 + c, so c = 5.', '**y = x³ − 2x² + 5**.'] },
    { q: 'Find ∫ (3e^(2x) − 4/x + sin 3x) dx.', steps: ['∫ 3e^(2x) dx = (3/2)e^(2x).', '∫ 4/x dx = 4 ln|x| and ∫ sin 3x dx = −⅓ cos 3x.', '= **(3/2)e^(2x) − 4 ln|x| − ⅓ cos 3x + c**.'] },
  ]),

  L('pm-int-2', 'mm-l6-integration', '23.2', 'Definite integrals and the area under a curve', 17, ['Calculus'], [
    'The **definite integral** ∫ (a to b) f(x) dx = [F(x)] (a to b) = **F(b) − F(a)**; the constant cancels, so none is written. For example, ∫ (1 to 3) x² dx = [x³/3] (1 to 3) = 9 − ⅓ = 26/3.',
    'For a curve above the x-axis, the **area** between the curve, the x-axis and the lines x = a and x = b is ∫ (a to b) y dx. The reason: cut the region into thin strips of width δx and height y; the total Σ y δx of their areas tends to the integral as δx → 0.',
    'Where the curve is **below** the axis, the integral is negative. Find the areas above and below separately and add their sizes: ∫ (0 to 2π) sin x dx = 0, yet the area between y = sin x and the axis from 0 to 2π is 4.',
    'The area **between two curves**, y = f(x) above and y = g(x) below, from x = a to x = b, is ∫ (a to b) (f(x) − g(x)) dx; a and b are usually where the curves meet. Useful properties: ∫ (b to a) = −∫ (a to b), and ∫ (a to b) + ∫ (b to c) = ∫ (a to c).',
  ], 'am-area-under', 'Sketch first: parts below the x-axis give negative integrals.',
  ['∫ (0 to 2) 3x² dx equals:', ['8', '12', '6', '4'], '[x³] from 0 to 2.'],
  [['Definite integral', 'F(b) − F(a): a number, with no constant.'], ['Limits of integration', 'The values a and b between which the integral is taken.'], ['Area under a curve', 'The definite integral of y between two values of x, for a curve above the x-axis.']],
  [
    { q: 'Find the area enclosed by y = 4x − x² and the x-axis.', steps: ['The curve meets the axis at x = 0 and x = 4 and lies above it in between.', 'Area = ∫ (0 to 4) (4x − x²) dx = [2x² − x³/3] (0 to 4).', '= 32 − 64/3 = **32/3 square units**.'] },
    { q: 'Find the area enclosed by y = x² and y = x + 2.', steps: ['They meet where x² = x + 2: x = −1 and x = 2; the line is above the curve between them.', 'Area = ∫ (−1 to 2) (x + 2 − x²) dx = [x²/2 + 2x − x³/3] (−1 to 2).', '= 10/3 − (−7/6) = **9/2 square units**.'] },
  ]),

  L('pm-int-3', 'mm-l6-integration', '23.3', 'Techniques: partial fractions, substitution and integration by parts', 18, ['Calculus'], [
    '**The form f′(x)/f(x)**: ∫ f′(x)/f(x) dx = ln|f(x)| + c, so ∫ 2x/(x² + 1) dx = ln(x² + 1) + c and ∫ tan x dx = −ln|cos x| + c. **Partial fractions** break a rational function into such pieces: ∫ (x + 5)/((x − 1)(x + 1)) dx = ∫ (3/(x − 1) − 2/(x + 1)) dx = 3 ln|x − 1| − 2 ln|x + 1| + c.',
    '**Substitution**: choose u = g(x), find du = g′(x) dx, and rewrite everything in terms of u, including the limits of a definite integral. For ∫ x(x² + 3)⁵ dx, put u = x² + 3, so du = 2x dx: ∫ ½u⁵ du = u⁶/12 = (x² + 3)⁶/12 + c.',
    '**Integration by parts**, from the product rule: **∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx**. Let u be the factor that becomes simpler when differentiated (a power of x, or ln x) and dv/dx a factor you can integrate: ∫ x eˣ dx = x eˣ − ∫ eˣ dx = eˣ(x − 1) + c.',
    'For ∫ ln x dx take u = ln x and dv/dx = 1: x ln x − ∫ x × (1/x) dx = x ln x − x + c. Integrals such as ∫ x² eˣ dx need parts twice.',
  ], 'am-integration-methods', 'In integration by parts, let u be the factor that simplifies when differentiated.',
  ['∫ 3/(3x + 2) dx equals:', ['ln|3x + 2| + c', '3 ln|3x + 2| + c', '⅓ ln|3x + 2| + c', '−3/(3x + 2)² + c'], 'The numerator is the derivative of the denominator.'],
  [['Substitution', 'Changing the variable to u = g(x) to simplify an integral.'], ['Integration by parts', '∫ u v′ dx = uv − ∫ v u′ dx.'], ['The f′/f form', 'An integrand whose numerator is the derivative of its denominator; it integrates to ln|f(x)| + c.']],
  [
    { q: 'Evaluate ∫ (1 to e) x ln x dx.', steps: ['Parts with u = ln x and dv/dx = x: du/dx = 1/x and v = x²/2.', '∫ x ln x dx = (x²/2) ln x − ∫ x/2 dx = (x²/2) ln x − x²/4.', 'From 1 to e: (e²/2 − e²/4) − (0 − ¼) = **(e² + 1)/4 ≈ 2.10**.'] },
    { q: 'Evaluate ∫ (0 to 1) x√(1 − x²) dx.', steps: ['Let u = 1 − x², so du = −2x dx; x = 0 gives u = 1 and x = 1 gives u = 0.', 'The integral becomes ∫ (1 to 0) √u × (−½) du = ½ ∫ (0 to 1) u^½ du.', '= ½ × [⅔u^(3/2)] (0 to 1) = **⅓**.'] },
  ]),
];
