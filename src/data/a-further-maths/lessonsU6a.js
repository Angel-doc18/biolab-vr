// A Level Further Mathematics lessons (0775), Upper Sixth (part 1): linear
// transformations, eigenvalues and diagonalisation, Maclaurin and Taylor
// series, reduction formulae, arc length and surfaces of revolution, improper
// integrals and conic sections. Original text written for this app. Matrices
// are written row by row: [a b; c d].

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Papers 1, 2 and 3',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_FU6A = [
  // ---------- 1. Linear transformations ----------
  L('fp-lt-1', 'fm-u6-transformations', '1.1', 'Linear transformations: kernel, image, rank and nullity', 18, ['Linear algebra'], [
    'A transformation T is **linear** when T(u + v) = T(u) + T(v) and T(ku) = kT(u). Every linear transformation of the plane or of space is given by a matrix M, with T(x) = Mx, and **the columns of M are the images of the unit vectors** i, j (and k).',
    'Standard matrices in the plane: rotation through θ about O, [cos θ −sin θ; sin θ cos θ]; reflection in the line y = x tan θ, [cos 2θ sin 2θ; sin 2θ −cos 2θ]; enlargement with scale factor k, [k 0; 0 k]; shear parallel to the x-axis, [1 k; 0 1]. A rotation of space about the z-axis keeps the third column (0, 0, 1). Areas (volumes in space) are multiplied by |det M|.',
    'The **image** of M is the set of all Mx: the space spanned by its columns. The **kernel** is the set of x with Mx = 0. The **rank** is the dimension of the image and the **nullity** the dimension of the kernel; for a matrix with n columns, **rank + nullity = n**.',
    'If det M ≠ 0 the kernel is {0}, the image is the whole space and M has an inverse. If det M = 0, a whole line (or plane) of points is sent to O and the space is squashed onto a plane, a line or a point.',
  ], 'am-kernel-image', 'To write down a matrix, find where i and j (and k) go: their images are the columns.',
  ['A rotation of 90° anticlockwise about O has matrix:', ['[0 −1; 1 0]', '[0 1; −1 0]', '[1 0; 0 −1]', '[−1 0; 0 −1]'], 'i goes to j and j goes to −i; these are the columns.'],
  [['Kernel', 'The set of vectors sent to the zero vector.'], ['Image', 'The set of all images; the span of the columns.'], ['Rank and nullity', 'The dimensions of the image and the kernel; they add up to the number of columns.']],
  [
    { q: 'Find the kernel and the image of M = [1 2; 2 4].', steps: ['Mx = 0 gives x + 2y = 0: the kernel is the line through O in the direction (2, −1), so the nullity is 1.', 'The columns (1, 2) and (2, 4) are parallel: the image is the line y = 2x, so the rank is 1.', '**Kernel: multiples of (2, −1); image: the line y = 2x.** Rank + nullity = 2.'] },
    { q: 'Find the kernel and the image of M = [1 1 2; 0 1 1; 1 2 3].', steps: ['det M = 1(3 − 2) − 1(0 − 1) + 2(0 − 1) = 0, so M is singular.', 'x + y + 2z = 0 and y + z = 0 give y = −z and x = −z; the third row agrees. Kernel: multiples of (−1, −1, 1), nullity 1.', 'The image is spanned by (1, 0, 1) and (1, 1, 2), with normal (1, 0, 1) × (1, 1, 2) = (−1, −1, 1): **the image is the plane z = x + y**, rank 2.'] },
  ]),

  // ---------- 2. Eigenvalues and eigenvectors ----------
  L('fp-eig-1', 'fm-u6-eigen', '2.1', 'Eigenvalues and eigenvectors', 18, ['Linear algebra'], [
    'A non-zero vector x is an **eigenvector** of a square matrix A, with **eigenvalue** λ, when **Ax = λx**: A only stretches x (or reverses it). The line through O in that direction maps onto itself: it is an **invariant line**.',
    '(A − λI)x = 0 has a non-zero solution only when **det(A − λI) = 0**, the **characteristic equation**. For a 2 × 2 matrix it is λ² − (trace)λ + det = 0.',
    'For each eigenvalue, solve (A − λI)x = 0 for the eigenvector; any non-zero multiple will do. Checks: the eigenvalues add up to the trace (the sum of the leading diagonal) and multiply to the determinant.',
    'For a 3 × 3 matrix the characteristic equation is a cubic. Expand along a row with zeros if there is one, look for an integer root among the factors of det A, and factorise.',
  ], 'am-eigenvectors', 'Always check that the eigenvalues add to the trace and multiply to the determinant.',
  ['The characteristic equation of [a b; c d] is:', ['λ² − (a + d)λ + (ad − bc) = 0', 'λ² + (a + d)λ + ad = 0', 'λ² − bc = 0', 'λ − (a + d) = 0'], 'Expand det(A − λI).'],
  [['Eigenvalue', 'A number λ with Ax = λx for some non-zero x.'], ['Eigenvector', 'A non-zero x with Ax = λx.'], ['Characteristic equation', 'det(A − λI) = 0, whose roots are the eigenvalues.']],
  [
    { q: 'Find the eigenvalues and eigenvectors of A = [4 1; 2 3].', steps: ['λ² − 7λ + 10 = 0, so λ = 5 or λ = 2.', 'λ = 5: A − 5I = [−1 1; 2 −2] gives y = x, eigenvector (1, 1). λ = 2: A − 2I = [2 1; 2 1] gives y = −2x, eigenvector (1, −2).', '**λ = 5 with (1, 1); λ = 2 with (1, −2).** Check: 5 + 2 = 7 = trace, 5 × 2 = 10 = det A.'] },
    { q: 'Find the eigenvalues of C = [4 0 1; 0 1 0; 2 0 3] and an eigenvector for the largest.', steps: ['Expand along the second row: det(C − λI) = (1 − λ)[(4 − λ)(3 − λ) − 2] = (1 − λ)(λ² − 7λ + 10).', 'The eigenvalues are 1, 2 and 5 (sum 8 = trace, product 10 = det C).', 'λ = 5: C − 5I = [−1 0 1; 0 −4 0; 2 0 −2] gives y = 0 and z = x: **eigenvector (1, 0, 1)**. Check: C(1, 0, 1) = (5, 0, 5).'] },
  ]),

  L('fp-eig-2', 'fm-u6-eigen', '2.2', 'Diagonalisation and powers of a matrix', 17, ['Linear algebra'], [
    'If an n × n matrix A has n independent eigenvectors (for instance when its n eigenvalues are all different), put the eigenvectors as the columns of P and the eigenvalues, in the same order, on the diagonal of D. Then AP = PD, so **A = PDP⁻¹** and **D = P⁻¹AP**.',
    '**Powers**: Aⁿ = (PDP⁻¹)(PDP⁻¹)…(PDP⁻¹) = **PDⁿP⁻¹**, because each P⁻¹P in the middle cancels, and Dⁿ just raises each diagonal entry to the power n.',
    'A **symmetric** matrix has real eigenvalues and perpendicular eigenvectors. With unit eigenvectors, P is orthogonal (P⁻¹ = Pᵀ), so A = PDPᵀ.',
    'The **Cayley–Hamilton theorem**: a matrix satisfies its own characteristic equation. For A = [4 1; 2 3], A² − 7A + 10I = 0, so A² = 7A − 10I and A⁻¹ = (7I − A)/10.',
  ], 'am-diagonalise', 'Keep the eigenvectors in P in the same order as their eigenvalues in D.',
  ['If A = PDP⁻¹, then D =', ['P⁻¹AP', 'PAP⁻¹', 'AP', 'P⁻¹A'], 'Multiply by P⁻¹ on the left and by P on the right.'],
  [['Diagonal matrix', 'A matrix with zeros everywhere except the leading diagonal.'], ['Diagonalisation', 'Writing A = PDP⁻¹ with D diagonal.'], ['Cayley–Hamilton theorem', 'Every square matrix satisfies its own characteristic equation.']],
  [
    { q: 'Diagonalise A = [4 1; 2 3] and find A³.', steps: ['From the eigenvectors: P = [1 1; 1 −2], D = [5 0; 0 2]; det P = −3, so P⁻¹ = ⅓[2 1; 1 −1].', 'A³ = PD³P⁻¹ = [125 8; 125 −16] × ⅓[2 1; 1 −1] = ⅓[258 117; 234 141].', '**A³ = [86 39; 78 47]**. Check directly: A² = [18 7; 14 11] and A²A = [86 39; 78 47].'] },
    { q: 'Use the Cayley–Hamilton theorem to find the inverse of A = [4 1; 2 3].', steps: ['A² − 7A + 10I = 0, so A(A − 7I) = −10I.', 'Hence A⁻¹ = (7I − A)/10.', '**A⁻¹ = (1/10)[3 −1; −2 4]**, the same as the usual formula with det A = 10.'] },
  ]),

  // ---------- 3. Maclaurin and Taylor series ----------
  L('fp-ser-1', 'fm-u6-series', '3.1', 'Maclaurin series', 18, ['Calculus'], [
    'If f and its derivatives exist at 0, then **f(x) = f(0) + f′(0)x + f″(0)x²/2! + f‴(0)x³/3! + … + f⁽ʳ⁾(0)xʳ/r! + …** for the values of x where the series converges.',
    'Standard series: eˣ = 1 + x + x²/2! + x³/3! + … (all x); sin x = x − x³/3! + x⁵/5! − … (all x); cos x = 1 − x²/2! + x⁴/4! − … (all x); ln(1 + x) = x − x²/2 + x³/3 − … (−1 < x ≤ 1); (1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + … (|x| < 1 unless n is a positive whole number).',
    'New series from old: replace x (e^(−x²) = 1 − x² + x⁴/2! − …), multiply two series (eˣ sin x = x + x² + x³/3 + …), or differentiate and integrate term by term.',
    'This is how a calculator finds sin 0.1 so quickly: 0.1 − 0.001/6 = 0.0998333…, and the next term, 0.1⁵/120, is less than 10⁻⁷.',
  ], 'am-maclaurin', 'Make a table of f(0), f′(0), f″(0), … first, then build the series from it.',
  ['The coefficient of x⁴ in the series for cos x is:', ['1/24', '−1/24', '1/4', '0'], 'The term is +x⁴/4!.'],
  [['Maclaurin series', 'The series of f in powers of x, with coefficients f⁽ʳ⁾(0)/r!.'], ['Interval of convergence', 'The values of x for which a series has a sum.'], ['Term by term', 'Differentiating or integrating a series one term at a time.']],
  [
    { q: 'Find the Maclaurin series of ln(1 + x) up to the term in x³.', steps: ['f(0) = 0; f′ = 1/(1 + x), so f′(0) = 1; f″ = −1/(1 + x)², so f″(0) = −1; f‴ = 2/(1 + x)³, so f‴(0) = 2.', 'f(x) = 0 + x − x²/2! + 2x³/3!.', '**ln(1 + x) = x − x²/2 + x³/3 − …**'] },
    { q: 'Expand eˣ sin x up to the term in x³.', steps: ['(1 + x + x²/2 + x³/6 + …)(x − x³/6 + …).', 'Collect: x + x² + (½ − 1/6)x³.', '**eˣ sin x = x + x² + x³/3 + …**'] },
  ]),

  L('fp-ser-2', 'fm-u6-series', '3.2', 'Taylor series, limits and errors', 17, ['Calculus'], [
    'About x = a, **f(x) = f(a) + f′(a)(x − a) + f″(a)(x − a)²/2! + …**, or with x = a + h, f(a + h) = f(a) + hf′(a) + h²f″(a)/2! + …. It approximates a function near a point other than 0, and works for functions such as ln x and √x that have no Maclaurin series.',
    'Example: about x = 1, ln x = (x − 1) − (x − 1)²/2 + (x − 1)³/3 − …',
    '**Limits** with series: replace each function by enough terms, cancel the lowest power of x, then let x → 0. lim (x → 0) (eˣ − 1 − x)/x² = lim (x²/2 + x³/6 + …)/x² = ½.',
    '**Errors**: cutting a series after the term in xⁿ leaves an error roughly equal to the first term left out. For an alternating series whose terms decrease in size, the error is smaller than that first omitted term.',
  ], 'am-taylor', 'In a limit, expand each function to one term beyond the power you divide by.',
  ['lim (x → 0) (eˣ − 1)/x =', ['1', '0', 'e', '∞'], '(x + x²/2 + …)/x → 1.'],
  [['Taylor series', 'The series of f in powers of (x − a).'], ['Limit by series', 'Finding a limit by replacing functions with their series.'], ['Truncation error', 'The error made by stopping a series after a number of terms.']],
  [
    { q: 'Find the Taylor series of √x about x = 4 up to the term in (x − 4)², and estimate √4.1.', steps: ['f(4) = 2; f′(x) = 1/(2√x), so f′(4) = ¼; f″(x) = −1/(4x√x), so f″(4) = −1/32.', '√x ≈ 2 + (x − 4)/4 − (x − 4)²/64.', 'At x = 4.1: 2 + 0.025 − 0.01/64 = **2.024844**, against √4.1 = 2.024846.'] },
    { q: 'Find lim (x → 0) (1 − cos 2x)/x².', steps: ['cos 2x = 1 − (2x)²/2! + … = 1 − 2x² + …', '1 − cos 2x = 2x² − …', 'Divide by x² and let x → 0: **the limit is 2**.'] },
  ]),

  // ---------- 4. Reduction formulae ----------
  L('fp-red-1', 'fm-u6-reduction', '4.1', 'Reduction formulae', 18, ['Calculus'], [
    'A **reduction formula** links an integral Iₙ, which depends on a whole number n, to one with a smaller index, such as Iₙ₋₁ or Iₙ₋₂. Using it again and again brings the integral down to I₀ or I₁, which are found directly.',
    'Most come from integration by parts. For Iₙ = ∫ (0 to 1) xⁿeˣ dx, take u = xⁿ and dv/dx = eˣ: Iₙ = [xⁿeˣ] (0 to 1) − n ∫ (0 to 1) xⁿ⁻¹eˣ dx, so **Iₙ = e − nIₙ₋₁** for n ≥ 1, with I₀ = e − 1.',
    'For Iₙ = ∫ (0 to π/2) sinⁿx dx, write sinⁿx = sinⁿ⁻¹x · sin x and integrate by parts; the cos²x that appears is replaced by 1 − sin²x, which gives **Iₙ = ((n − 1)/n)Iₙ₋₂**, with I₀ = π/2 and I₁ = 1. The same formula holds for cosⁿx on [0, π/2].',
    'For ∫ tanⁿx dx, tan²x = sec²x − 1 gives Iₙ = tanⁿ⁻¹x/(n − 1) − Iₙ₋₂.',
  ], 'am-reduction', 'Find I₀ and I₁ first, then climb the formula one step at a time.',
  ['With Iₙ = e − nIₙ₋₁ and I₁ = 1, I₂ =', ['e − 2', 'e − 1', '2 − e', 'e'], 'I₂ = e − 2I₁.'],
  [['Reduction formula', 'A formula linking Iₙ to an integral of lower index.'], ['Integration by parts', '∫ u v′ dx = uv − ∫ v u′ dx.'], ['Index', 'The whole number n on which the integral depends.']],
  [
    { q: 'Prove that Iₙ = ((n − 1)/n)Iₙ₋₂ for Iₙ = ∫ (0 to π/2) sinⁿx dx, n ≥ 2.', steps: ['Iₙ = ∫ sinⁿ⁻¹x · sin x dx; by parts with u = sinⁿ⁻¹x and v = −cos x: Iₙ = [−sinⁿ⁻¹x cos x] (0 to π/2) + (n − 1) ∫ sinⁿ⁻²x cos²x dx.', 'The bracket is 0; with cos²x = 1 − sin²x, Iₙ = (n − 1)(Iₙ₋₂ − Iₙ).', 'So nIₙ = (n − 1)Iₙ₋₂: **Iₙ = ((n − 1)/n)Iₙ₋₂**.'] },
    { q: 'Find ∫ (0 to π/2) sin⁶x dx.', steps: ['I₆ = (5/6)I₄ = (5/6)(3/4)I₂ = (5/6)(3/4)(1/2)I₀.', 'I₀ = π/2.', '**I₆ = 15π/96 = 5π/32**.'] },
    { q: 'Find ∫ (0 to 1) x³eˣ dx.', steps: ['I₀ = e − 1, so I₁ = e − I₀ = 1 and I₂ = e − 2I₁ = e − 2.', 'I₃ = e − 3I₂ = e − 3e + 6.', '**I₃ = 6 − 2e**, about 0.563.'] },
  ]),

  // ---------- 5. Arc length and surfaces of revolution ----------
  L('fp-arc-1', 'fm-u6-arc-surface', '5.1', 'Arc length in Cartesian, parametric and polar form', 17, ['Calculus'], [
    'A small piece of a curve, δs, is nearly straight, so δs² ≈ δx² + δy². Dividing by δx² and letting δx → 0 gives the **arc length s = ∫ (a to b) √(1 + (dy/dx)²) dx**.',
    'For a parametric curve x(t), y(t): **s = ∫ √((dx/dt)² + (dy/dt)²) dt**. For a polar curve r(θ), δs² ≈ δr² + r²δθ², so **s = ∫ √(r² + (dr/dθ)²) dθ**.',
    'The square root rarely simplifies unless the curve is chosen to make it a perfect square, so look for one: 1 + sinh²x = cosh²x, (1 − t²)² + 4t² = (1 + t²)², 2(1 + cos θ) = 4cos²(θ/2).',
    'Use symmetry where you can: find the length of half of a symmetric curve and double it.',
  ], 'am-arc-length', 'Square and simplify inside the root before integrating: look for a perfect square.',
  ['The arc length of y = f(x) uses the integrand:', ['√(1 + (dy/dx)²)', '1 + dy/dx', 'πy²', '(dy/dx)²'], 'From δs² = δx² + δy².'],
  [['Arc length', 'The length of a piece of a curve.'], ['Parametric form', 'A curve given by x and y as functions of a parameter t.'], ['Polar form', 'A curve given by r as a function of θ.']],
  [
    { q: 'Find the length of y = cosh x from x = 0 to x = ln 2.', steps: ['dy/dx = sinh x and √(1 + sinh²x) = cosh x.', 's = ∫ (0 to ln 2) cosh x dx = sinh(ln 2).', '**s = (2 − ½)/2 = ¾**.'] },
    { q: 'Find the length of x = t², y = (2/3)t³ from t = 0 to t = √3.', steps: ['dx/dt = 2t and dy/dt = 2t², so √(4t² + 4t⁴) = 2t√(1 + t²).', 's = ∫ (0 to √3) 2t√(1 + t²) dt = [(2/3)(1 + t²)^(3/2)] (0 to √3).', '**s = (2/3)(8 − 1) = 14/3**.'] },
    { q: 'Find the length of the cardioid r = a(1 + cos θ).', steps: ['r² + (dr/dθ)² = a²(1 + cos θ)² + a²sin²θ = 2a²(1 + cos θ) = 4a²cos²(θ/2).', 'By symmetry, s = 2 ∫ (0 to π) 2a cos(θ/2) dθ = 4a[2 sin(θ/2)] (0 to π).', '**s = 8a**.'] },
  ]),

  L('fp-arc-2', 'fm-u6-arc-surface', '5.2', 'Surfaces of revolution', 17, ['Calculus'], [
    'When an arc is turned through a full revolution about the x-axis, each small piece δs sweeps out a band of radius y and area about 2πy δs. So the curved **surface area is S = 2π ∫ y ds**, with ds = √(1 + (dy/dx)²) dx, or √((dx/dt)² + (dy/dt)²) dt for a parametric curve.',
    'About the y-axis the radius of each band is x: **S = 2π ∫ x ds**.',
    'Do not confuse it with the volume of revolution, π ∫ y² dx: the surface area uses ds and the first power of y.',
    'Results to check against: a sphere of radius r has area 4πr², a cylinder of radius r and length h has curved area 2πrh, and a cone of base radius r and slant height l has curved area πrl.',
  ], 'am-surface', 'Area uses 2πy ds; volume uses πy² dx. Read which one the question asks for.',
  ['Rotating y = r, for 0 ≤ x ≤ h, about the x-axis gives a curved area of:', ['2πrh', 'πr²h', '2πr²', 'πrh'], 'A cylinder: 2π ∫ (0 to h) r dx.'],
  [['Surface of revolution', 'The surface swept out when a curve turns about an axis.'], ['Band area', 'A small piece δs at distance y from the axis sweeps out about 2πy δs.'], ['Volume of revolution', 'π ∫ y² dx, not to be confused with the surface area.']],
  [
    { q: 'Show that the surface area of a sphere of radius r is 4πr².', steps: ['Turn the semicircle x = r cos t, y = r sin t (0 ≤ t ≤ π) about the x-axis; ds = r dt.', 'S = 2π ∫ (0 to π) r sin t × r dt = 2πr²[−cos t] (0 to π).', '**S = 2πr² × 2 = 4πr²**.'] },
    { q: 'The arc y = x³, 0 ≤ x ≤ 1, is turned about the x-axis. Find the surface area.', steps: ['S = 2π ∫ (0 to 1) x³√(1 + 9x⁴) dx; put u = 1 + 9x⁴, du = 36x³ dx.', 'S = (2π/36) ∫ (1 to 10) √u du = (π/18)(2/3)[u^(3/2)] (1 to 10).', '**S = (π/27)(10√10 − 1) ≈ 3.56**.'] },
  ]),

  // ---------- 6. Improper integrals ----------
  L('fp-imp-1', 'fm-u6-improper', '6.1', 'Improper integrals', 16, ['Calculus'], [
    'An integral is **improper** when a limit is infinite or when the integrand becomes infinite somewhere in the range. It is defined as a limit of proper integrals, for example ∫ (a to ∞) f(x) dx = lim (b → ∞) ∫ (a to b) f(x) dx. If the limit exists, the integral **converges** to it; otherwise it **diverges**.',
    '∫ (1 to ∞) x⁻ᵖ dx converges, to 1/(p − 1), when p > 1, and diverges when p ≤ 1. ∫ (0 to 1) x⁻ᵖ dx converges when p < 1.',
    'If the integrand is infinite inside the range, split the integral there and treat each part as a limit. ∫ (−1 to 1) 1/x² dx diverges, although the careless working [−1/x] (−1 to 1) gives −2, an impossible negative area.',
    'Useful limits: xⁿe⁻ˣ → 0 as x → ∞ for every n, and x ln x → 0 as x → 0 from above.',
  ], 'am-improper', 'Write the limit explicitly and then find it; never substitute ∞ as if it were a number.',
  ['∫ (1 to ∞) 1/x³ dx =', ['½', '1', '⅓', '∞'], 'lim (b → ∞) (½ − 1/(2b²)) = ½.'],
  [['Improper integral', 'An integral with an infinite limit or an infinite integrand, defined as a limit.'], ['Convergent', 'Having a finite value as the limit.'], ['Divergent', 'Having no finite limit.']],
  [
    { q: 'Evaluate ∫ (0 to ∞) xe^(−2x) dx.', steps: ['By parts: ∫ xe^(−2x) dx = −½xe^(−2x) − ¼e^(−2x).', '∫ (0 to b) = (−½be^(−2b) − ¼e^(−2b)) − (−¼); as b → ∞, be^(−2b) → 0 and e^(−2b) → 0.', '**The integral converges to ¼**.'] },
    { q: 'Evaluate ∫ (0 to 1) ln x dx.', steps: ['∫ ln x dx = x ln x − x.', '∫ (ε to 1) = (0 − 1) − (ε ln ε − ε), and ε ln ε → 0 as ε → 0.', '**The integral converges to −1**.'] },
    { q: 'Does ∫ (1 to ∞) 1/√x dx converge?', steps: ['∫ (1 to b) x^(−½) dx = [2√x] (1 to b) = 2√b − 2.', 'As b → ∞, 2√b − 2 grows without limit.', '**It diverges** (p = ½ ≤ 1).'] },
  ]),

  // ---------- 7. Conic sections ----------
  L('fp-con-1', 'fm-u6-conics', '7.1', 'The parabola and the ellipse', 18, ['Coordinate geometry'], [
    'A **conic** is the set of points P whose distance from a fixed point S, the **focus**, is e times their distance PM from a fixed line, the **directrix**: SP = e × PM. e is the **eccentricity**: e < 1 gives an ellipse, e = 1 a parabola and e > 1 a hyperbola.',
    '**The parabola y² = 4ax**: focus (a, 0), directrix x = −a, parametric point (at², 2at). The gradient at (at², 2at) is 1/t, so the **tangent is ty = x + at²** and the **normal is y + tx = 2at + at³**.',
    '**The ellipse x²/a² + y²/b² = 1** (a > b): **b² = a²(1 − e²)**, foci (±ae, 0), directrices x = ±a/e, parametric point (a cos θ, b sin θ). The tangent at (x₁, y₁) is xx₁/a² + yy₁/b² = 1. For every point of the ellipse, SP + S′P = 2a.',
    'A circle is an ellipse with e = 0. Satellite orbits are ellipses with the Earth at a focus; dish aerials are parabolic, so signals parallel to the axis meet at the focus.',
  ], 'am-conics', 'For a parabola, work with the parameter t; for an ellipse, find e from b² = a²(1 − e²) first.',
  ['The directrix of y² = 12x is:', ['x = −3', 'x = 3', 'y = −3', 'x = −12'], '4a = 12, so a = 3.'],
  [['Focus and directrix', 'The fixed point and the fixed line in SP = e × PM.'], ['Eccentricity', 'The ratio e = SP/PM, which decides the kind of conic.'], ['Parametric point', '(at², 2at) on y² = 4ax, or (a cos θ, b sin θ) on an ellipse.']],
  [
    { q: 'Find the tangent and the normal to y² = 8x at (2, 4).', steps: ['a = 2, and 2at = 4 gives t = 1.', 'Tangent ty = x + at²: y = x + 2. Normal y + tx = 2at + at³: y + x = 6.', '**Tangent y = x + 2; normal x + y = 6.** Their gradients 1 and −1 multiply to −1.'] },
    { q: 'Find the eccentricity, the foci and the directrices of x²/25 + y²/9 = 1.', steps: ['a = 5, b = 3: 9 = 25(1 − e²), so e² = 16/25 and e = 4/5.', 'ae = 4 and a/e = 25/4.', '**e = 4/5; foci (±4, 0); directrices x = ±25/4.** Check at (0, 3): SP + S′P = 5 + 5 = 10 = 2a.'] },
  ]),

  L('fp-con-2', 'fm-u6-conics', '7.2', 'The hyperbola and the rectangular hyperbola', 17, ['Coordinate geometry'], [
    '**The hyperbola x²/a² − y²/b² = 1**: **b² = a²(e² − 1)**, foci (±ae, 0), directrices x = ±a/e, **asymptotes y = ±(b/a)x**, and parametric point (a sec θ, b tan θ), or (a cosh u, b sinh u) for the right-hand branch. For every point, |SP − S′P| = 2a. The tangent at (x₁, y₁) is xx₁/a² − yy₁/b² = 1.',
    'The asymptotes come from replacing the 1 by 0: x²/a² − y²/b² = 0 gives y = ±(b/a)x. Far from O the curve runs close to them.',
    'A **rectangular hyperbola** has perpendicular asymptotes: a = b and e = √2. Turned through 45° it becomes **xy = c²**, with parametric point (ct, c/t) and the axes as asymptotes. Its **tangent at (ct, c/t) is x + t²y = 2ct**.',
    'Recognising conics: Ax² + By² = 1 is an ellipse when A and B are both positive and a hyperbola when they have opposite signs.',
  ], 'am-hyperbola', 'Find the asymptotes by setting the right-hand side to 0: x²/a² − y²/b² = 0.',
  ['The asymptotes of x²/16 − y²/9 = 1 are:', ['y = ±¾x', 'y = ±(4/3)x', 'x = ±4', 'y = ±3'], 'y = ±(b/a)x with a = 4, b = 3.'],
  [['Asymptote', 'A line the curve approaches ever more closely far from the origin.'], ['Rectangular hyperbola', 'A hyperbola with perpendicular asymptotes, such as xy = c².'], ['Branch', 'One of the two separate parts of a hyperbola.']],
  [
    { q: 'For x²/16 − y²/9 = 1, find e, the foci, the directrices and the asymptotes.', steps: ['9 = 16(e² − 1), so e² = 25/16 and e = 5/4.', 'ae = 5 and a/e = 16/5.', '**e = 5/4; foci (±5, 0); directrices x = ±16/5; asymptotes y = ±¾x**.'] },
    { q: 'Find the tangent to xy = 16 at (8, 2), and where it meets the axes.', steps: ['c = 4 and ct = 8, so t = 2.', 'x + t²y = 2ct gives x + 4y = 16.', '**Tangent x + 4y = 16**, meeting the axes at (16, 0) and (0, 4); (8, 2) is the midpoint of these two points.'] },
  ]),
];
