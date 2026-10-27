// A Level Further Mathematics lessons (0775), Lower Sixth: roots of polynomial
// equations, polar coordinates, roots of complex numbers, hyperbolic functions
// and their calculus, Leibniz's theorem, and the papers. Original text written
// for this app. Integrals between limits are written ∫ (a to b) f(x) dx.

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

export const LESSONS_FL6 = [
  // ---------- 2. Roots of polynomial equations ----------
  L('fp-roots-1', 'fm-l6-roots', '2.1', 'Roots of polynomial equations: symmetric functions and new equations', 18, ['Algebra'], [
    'For the cubic ax³ + bx² + cx + d = 0 with roots α, β, γ: **Σα = −b/a, Σαβ = c/a, αβγ = −d/a**. For the quartic ax⁴ + bx³ + cx² + dx + e = 0 with roots α, β, γ, δ: Σα = −b/a, Σαβ = c/a, Σαβγ = −d/a and αβγδ = e/a. The signs alternate, starting with minus.',
    '**Symmetric functions** of the roots are found from these without solving the equation: α² + β² + γ² = (Σα)² − 2Σαβ; 1/α + 1/β + 1/γ = Σαβ ÷ αβγ; α³ + β³ + γ³ = (Σα)³ − 3ΣαΣαβ + 3αβγ.',
    '**A new equation** whose roots are related to the old ones comes from a substitution. For roots 2α, 2β, 2γ put y = 2x, so x = y/2, into the original equation; for roots α + 1, β + 1, γ + 1 put x = y − 1; for roots α², β², γ² put x = √y and square to remove the root.',
    'When the coefficients are real, non-real roots come in **conjugate pairs**, so a cubic always has at least one real root. If α² + β² + γ² turns out negative for real coefficients, the roots cannot all be real.',
  ], 'am-cubic-graph', 'Write down Σα, Σαβ and αβγ, with their signs, before anything else: most errors here are sign errors.',
  ['For x³ + 2x² − 5x + 1 = 0, Σαβ =', ['−5', '5', '−2', '1'], 'Σαβ = c/a = −5.'],
  [['Symmetric function', 'An expression in the roots that is unchanged when the roots are swapped, such as α² + β² + γ².'], ['Conjugate pair', 'Non-real roots a + bi and a − bi of an equation with real coefficients.'], ['Transformed equation', 'An equation whose roots are related to the roots of a given one, found by a substitution.']],
  [
    { q: 'The roots of 2x³ − 3x² + 4x − 5 = 0 are α, β, γ. Find α² + β² + γ² and 1/α + 1/β + 1/γ.', steps: ['Σα = 3/2, Σαβ = 4/2 = 2, αβγ = 5/2.', 'α² + β² + γ² = (3/2)² − 2 × 2 = 9/4 − 4 = **−7/4**: negative, so not all the roots are real.', '1/α + 1/β + 1/γ = Σαβ ÷ αβγ = 2 ÷ 5/2 = **4/5**.'] },
    { q: 'For the same equation, find the equation whose roots are 2α, 2β, 2γ.', steps: ['Put y = 2x, so x = y/2: 2(y/2)³ − 3(y/2)² + 4(y/2) − 5 = 0.', 'y³/4 − 3y²/4 + 2y − 5 = 0; multiply by 4.', '**y³ − 3y² + 8y − 20 = 0**. Check: the new roots add to 3 (twice 3/2) and multiply to 20 (8 × 5/2).'] },
  ]),

  // ---------- 9. Polar coordinates ----------
  L('fp-polar-1', 'fm-l6-polar', '9.1', 'Polar coordinates and polar equations', 16, ['Coordinate geometry'], [
    'A point P has **polar coordinates (r, θ)**: r is the distance OP from the **pole** O, and θ is the angle from the **initial line** (the positive x-axis), measured anticlockwise. Usually r ≥ 0 and −π < θ ≤ π.',
    'Changing coordinates: **x = r cos θ, y = r sin θ**, and **r² = x² + y², tan θ = y/x**, with θ chosen in the quadrant where the point lies.',
    'Some polar equations: r = a is a circle with centre O; θ = α is a half-line from the pole; r = a sec θ is the straight line x = a; r = 2a cos θ is a circle of radius a through the pole, since r² = 2ar cos θ gives x² + y² = 2ax.',
    'A Cartesian equation becomes polar when x = r cos θ and y = r sin θ are substituted: x² − y² = 4 becomes r² cos 2θ = 4. A polar equation becomes Cartesian by multiplying by r where this produces r cos θ, r sin θ or r².',
  ], 'am-polar-point', 'Draw the point before finding θ: tan⁻¹ alone gives the wrong quadrant for half of the plane.',
  ['The polar coordinates (4, π/3) give x =', ['2', '2√3', '4', '√3'], 'x = 4 cos π/3 = 2.'],
  [['Pole', 'The fixed point O from which r is measured.'], ['Initial line', 'The half-line from the pole from which θ is measured.'], ['Polar coordinates', 'The distance r from the pole and the angle θ from the initial line.']],
  [
    { q: 'Convert the point (−1, √3) to polar coordinates.', steps: ['r = √(1 + 3) = 2.', 'The point is in the second quadrant; tan θ = −√3 there gives θ = 2π/3.', '**(2, 2π/3)**. Check: 2 cos 2π/3 = −1 and 2 sin 2π/3 = √3.'] },
    { q: 'Find the Cartesian equation of r = 4 sin θ.', steps: ['Multiply by r: r² = 4r sin θ.', 'x² + y² = 4y, so x² + (y − 2)² = 4.', '**A circle with centre (0, 2) and radius 2**, passing through the pole.'] },
  ]),

  L('fp-polar-2', 'fm-l6-polar', '9.2', 'Sketching polar curves and finding areas', 18, ['Coordinate geometry'], [
    'To sketch r = f(θ): look for symmetry (if f(−θ) = f(θ) the curve is symmetric about the initial line); find where r = 0, where the curve meets the pole, with the half-line at that angle as its tangent; find the greatest and least values of r; and tabulate r for key angles. With r ≥ 0, no points are drawn where f(θ) < 0.',
    'Families to know: the **cardioid** r = a(1 + cos θ), heart-shaped and through the pole at θ = π; the curves r = a + b cos θ with a > b > 0, which never reach the pole and are dimpled when a < 2b and egg-shaped when a ≥ 2b; the **rose** r = a sin 3θ with three petals, each where sin 3θ ≥ 0; the **spiral** r = aθ; the **lemniscate** r² = a² cos 2θ, a figure of eight that exists only where cos 2θ ≥ 0.',
    'The area of the region bounded by r = f(θ) and the half-lines θ = α and θ = β is **A = ½ ∫ (α to β) r² dθ**, because a thin sector has area about ½r²δθ.',
    'Before integrating, change cos²θ and sin²θ with the double-angle formulae: cos²θ = ½(1 + cos 2θ), sin²θ = ½(1 − cos 2θ).',
  ], 'am-polar-curves', 'For areas use ½ ∫ r² dθ, and remove squares of sines and cosines with the double-angle formulae first.',
  ['The area of the region enclosed by r = 2 is:', ['4π', '2π', 'π', '8π'], '½ ∫ (0 to 2π) 4 dθ = 4π.'],
  [['Cardioid', 'The heart-shaped curve r = a(1 + cos θ).'], ['Rose curve', 'A curve such as r = a sin 3θ made of equal petals.'], ['Sector area', 'A thin sector of radius r and angle δθ has area about ½r²δθ.']],
  [
    { q: 'Find the area enclosed by the cardioid r = 2(1 + cos θ).', steps: ['A = ½ ∫ (0 to 2π) 4(1 + cos θ)² dθ = 2 ∫ (0 to 2π) (1 + 2 cos θ + cos²θ) dθ.', '∫ 1 dθ = 2π, ∫ cos θ dθ = 0, ∫ cos²θ dθ = π over a full turn.', 'A = 2(2π + 0 + π) = **6π**, which agrees with 3πa²/2 for a = 2.'] },
    { q: 'Find the area of one petal of r = 3 sin 3θ.', steps: ['One petal is traced for 0 ≤ θ ≤ π/3, where sin 3θ ≥ 0.', 'A = ½ ∫ (0 to π/3) 9 sin²3θ dθ = (9/4) ∫ (0 to π/3) (1 − cos 6θ) dθ.', 'A = (9/4)[θ − (sin 6θ)/6] (0 to π/3) = (9/4)(π/3) = **3π/4**.'] },
  ]),

  // ---------- 11. De Moivre's theorem and roots of unity ----------
  L('fp-dm-1', 'fm-l6-de-moivre', '11.2', 'Roots of complex numbers and factorising polynomials', 18, ['Complex numbers'], [
    'To solve zⁿ = w, write w = R(cos φ + i sin φ). Then **z = R^(1/n)[cos((φ + 2kπ)/n) + i sin((φ + 2kπ)/n)], k = 0, 1, …, n − 1**. The n roots have the same modulus and are equally spaced round a circle, 2π/n apart: the vertices of a regular n-sided polygon centred at O.',
    'The **nth roots of unity** are 1, ω, ω², …, ωⁿ⁻¹ with ω = e^(2πi/n). For n > 1 their sum is 0: 1 + ω + … + ωⁿ⁻¹ = (ωⁿ − 1)/(ω − 1) = 0. For the cube roots, 1 + ω + ω² = 0 and ω³ = 1.',
    'Factorising: a polynomial with real coefficients has its non-real roots in conjugate pairs, and each pair e^(±iθ) gives the **real quadratic factor z² − 2z cos θ + 1**. So z⁴ + 1 = (z² − √2z + 1)(z² + √2z + 1).',
    'Roots of w other than unity are the roots of unity scaled and turned: if z₀ is one root of zⁿ = w, the others are z₀ω, z₀ω², …, z₀ωⁿ⁻¹.',
  ], 'am-roots', 'List all n roots, k = 0 to n − 1, and give the arguments in the range the question asks for.',
  ['How many distinct roots has z⁶ = 1?', ['6', '1', '2', '3'], 'An equation zⁿ = w (w ≠ 0) has n distinct roots.'],
  [['nth roots of unity', 'The n solutions of zⁿ = 1, equally spaced round the unit circle.'], ['Regular polygon of roots', 'The roots of zⁿ = w are the vertices of a regular n-gon centred at O.'], ['Real quadratic factor', 'z² − 2z cos θ + 1, from the conjugate roots e^(iθ) and e^(−iθ).']],
  [
    { q: 'Solve z³ = 8i.', steps: ['8i = 8(cos π/2 + i sin π/2), so |z| = 2 and arg z = π/6 + 2kπ/3.', 'k = 0, 1, 2 give the arguments π/6, 5π/6 and 3π/2 (that is, −π/2).', '**z = √3 + i, −√3 + i, −2i**. Check: (−2i)³ = −8i³ = 8i.'] },
    { q: 'Express z⁵ − 1 as a product of real factors.', steps: ['The roots are 1 and the pairs e^(±2πi/5), e^(±4πi/5).', 'Each pair gives z² − 2z cos θ + 1.', '**z⁵ − 1 = (z − 1)(z² − 2z cos(2π/5) + 1)(z² − 2z cos(4π/5) + 1)**.'] },
  ]),

  // ---------- 12. Hyperbolic functions ----------
  L('fp-hyp-1', 'fm-l6-hyperbolic', '12.1', 'Hyperbolic functions and their identities', 17, ['Calculus'], [
    '**sinh x = (eˣ − e⁻ˣ)/2, cosh x = (eˣ + e⁻ˣ)/2, tanh x = sinh x/cosh x = (e²ˣ − 1)/(e²ˣ + 1)**. Their reciprocals are sech x = 1/cosh x, cosech x = 1/sinh x and coth x = 1/tanh x.',
    'Graphs: cosh x is even, with least value 1 at x = 0; it is the shape of a hanging chain or cable, the **catenary**. sinh x is odd and increasing, through the origin. tanh x is odd and increasing, between the asymptotes y = −1 and y = 1.',
    'Identities follow from the definitions: cosh²x − sinh²x = 1; sinh 2x = 2 sinh x cosh x; cosh 2x = cosh²x + sinh²x = 2cosh²x − 1 = 1 + 2sinh²x. **Osborn’s rule** turns a trigonometric identity into a hyperbolic one: replace each function by its hyperbolic version and change the sign of every product of two sines. 1 + tan²x = sec²x becomes 1 − tanh²x = sech²x.',
    'To solve an equation, change to exponentials or use an identity to reach a quadratic. Reject impossible values: eˣ > 0 and cosh x ≥ 1.',
  ], 'am-hyperbolic', 'When an equation mixes sinh and cosh, change to eˣ and solve a quadratic in eˣ; reject any value of eˣ that is not positive.',
  ['cosh 0 =', ['1', '0', '−1', 'e'], '(e⁰ + e⁰)/2 = 1.'],
  [['Catenary', 'The curve of a hanging chain, y = a cosh(x/a).'], ['Osborn’s rule', 'Change a trigonometric identity to a hyperbolic one, changing the sign of each product of two sines.'], ['Hyperbolic identity', 'An identity such as cosh²x − sinh²x = 1, true for every x.']],
  [
    { q: 'Prove that cosh²x − sinh²x = 1.', steps: ['cosh²x = (e²ˣ + 2 + e⁻²ˣ)/4 and sinh²x = (e²ˣ − 2 + e⁻²ˣ)/4.', 'Subtract: (2 + 2)/4.', '**cosh²x − sinh²x = 1**.'] },
    { q: 'Solve 2 cosh x + sinh x = 2.', steps: ['(eˣ + e⁻ˣ) + ½(eˣ − e⁻ˣ) = 2; multiply by 2: 3eˣ + e⁻ˣ = 4.', 'Multiply by eˣ: 3e²ˣ − 4eˣ + 1 = 0, so (3eˣ − 1)(eˣ − 1) = 0.', 'eˣ = 1/3 or eˣ = 1: **x = −ln 3 or x = 0**. Check x = −ln 3: 2(5/3) − 4/3 = 2.'] },
  ]),

  L('fp-hyp-2', 'fm-l6-hyperbolic', '12.2', 'Inverse hyperbolic functions in logarithmic form', 17, ['Calculus'], [
    '**arsinh x** is the inverse of sinh x, defined for all x. If y = arsinh x then x = (eʸ − e⁻ʸ)/2, so e²ʸ − 2xeʸ − 1 = 0 and, taking the positive root, eʸ = x + √(x² + 1): **arsinh x = ln(x + √(x² + 1))**.',
    'cosh x is not one-to-one, so its inverse uses only x ≥ 0: **arcosh x = ln(x + √(x² − 1)) for x ≥ 1**, and its values are never negative. So cosh x = k (k > 1) has the two solutions x = ±arcosh k.',
    '**artanh x = ½ ln((1 + x)/(1 − x)) for −1 < x < 1**, found in the same way from x = (e²ʸ − 1)/(e²ʸ + 1).',
    'Each graph is the reflection of the original in y = x: arsinh x passes through the origin and rises ever more slowly; arcosh x starts at (1, 0); artanh x has vertical asymptotes x = ±1.',
  ], 'am-inverse-hyperbolic', 'cosh x = k (k > 1) has two solutions, x = ±arcosh k; arcosh itself gives only the positive one.',
  ['arsinh 0 =', ['0', '1', 'ln 2', 'undefined'], 'ln(0 + √1) = 0.'],
  [['Inverse function', 'The function that undoes another; its graph is the reflection in y = x.'], ['Principal value', 'arcosh x gives the value that is not negative.'], ['Logarithmic form', 'An inverse hyperbolic function written with ln, such as arsinh x = ln(x + √(x² + 1)).']],
  [
    { q: 'Express arsinh(3/4) as a logarithm.', steps: ['arsinh(3/4) = ln(3/4 + √(9/16 + 1)).', '√(25/16) = 5/4, so the bracket is 3/4 + 5/4 = 2.', '**arsinh(3/4) = ln 2**. Check: sinh(ln 2) = (2 − ½)/2 = 3/4.'] },
    { q: 'Solve cosh x = 5/3.', steps: ['x = ±arcosh(5/3) = ±ln(5/3 + √(25/9 − 1)).', '√(16/9) = 4/3, so the bracket is 3.', '**x = ±ln 3**. Check: cosh(ln 3) = (3 + 1/3)/2 = 5/3.'] },
    { q: 'Show that artanh(½) = ½ ln 3.', steps: ['artanh(½) = ½ ln((1 + ½)/(1 − ½)).', '(3/2) ÷ (1/2) = 3.', '**artanh(½) = ½ ln 3**.'] },
  ]),

  // ---------- 14. Calculus of hyperbolic functions ----------
  L('fp-hcalc-1', 'fm-l6-hyperbolic-calculus', '14.1', 'Differentiating hyperbolic and inverse hyperbolic functions', 17, ['Calculus'], [
    'From the exponential definitions: **d/dx sinh x = cosh x, d/dx cosh x = sinh x** (no minus sign, unlike cos), **d/dx tanh x = sech²x**. Also d/dx sech x = −sech x tanh x, d/dx cosech x = −cosech x coth x and d/dx coth x = −cosech²x.',
    'The inverses come from implicit differentiation. If y = arsinh x then sinh y = x, so cosh y dy/dx = 1, and cosh y = √(1 + sinh²y) = √(1 + x²): **d/dx arsinh x = 1/√(x² + 1)**. In the same way **d/dx arcosh x = 1/√(x² − 1)** (x > 1) and **d/dx artanh x = 1/(1 − x²)** (|x| < 1).',
    'With the chain rule: d/dx cosh 3x = 3 sinh 3x and d/dx arsinh(x/a) = 1/√(x² + a²).',
    'Stationary points work as usual. y = 5 cosh x − 3 sinh x has dy/dx = 5 sinh x − 3 cosh x = 0 when tanh x = 3/5, that is x = ½ ln 4 = ln 2.',
  ], 'am-hyperbolic', 'Hyperbolic derivatives are like the trigonometric ones without the minus signs for sinh and cosh; check the signs for sech, cosech and coth.',
  ['d/dx (cosh 3x) =', ['3 sinh 3x', '−3 sinh 3x', 'sinh 3x', '3 cosh 3x'], 'The chain rule brings out the 3, with no minus sign.'],
  [['Implicit differentiation', 'Differentiating an equation in x and y term by term, treating y as a function of x.'], ['sech²x', 'The derivative of tanh x, equal to 1 − tanh²x.'], ['Stationary point', 'A point where dy/dx = 0.']],
  [
    { q: 'Differentiate y = x² sinh 2x.', steps: ['Product rule with u = x², v = sinh 2x.', 'u′ = 2x, v′ = 2 cosh 2x.', '**dy/dx = 2x sinh 2x + 2x² cosh 2x**.'] },
    { q: 'Find the least value of y = 5 cosh x − 3 sinh x.', steps: ['dy/dx = 5 sinh x − 3 cosh x = 0, so tanh x = 3/5 and x = artanh(3/5) = ½ ln 4 = ln 2.', 'cosh(ln 2) = 5/4 and sinh(ln 2) = 3/4, so y = 25/4 − 9/4 = 4.', 'd²y/dx² = 5 cosh x − 3 sinh x = 4 > 0: **the least value is 4, at x = ln 2**.'] },
    { q: 'Differentiate y = arcosh 2x for x > ½.', steps: ['Chain rule: dy/dx = 2 × 1/√((2x)² − 1).', '(2x)² = 4x².', '**dy/dx = 2/√(4x² − 1)**.'] },
  ]),

  L('fp-hcalc-2', 'fm-l6-hyperbolic-calculus', '14.2', 'Differentiation from first principles and Leibniz’s theorem', 18, ['Calculus'], [
    '**From first principles**, f′(x) = lim (h → 0) [f(x + h) − f(x)]/h. For f(x) = x³: [(x + h)³ − x³]/h = 3x² + 3xh + h², which tends to 3x². For sin x the proof uses (sin h)/h → 1 and (cos h − 1)/h → 0.',
    'The rules: product (uv)′ = u′v + uv′; quotient (u/v)′ = (u′v − uv′)/v²; chain dy/dx = dy/du × du/dx.',
    '**Leibniz’s theorem** gives the nth derivative of a product: **(uv)⁽ⁿ⁾ = u⁽ⁿ⁾v + nC1 u⁽ⁿ⁻¹⁾v′ + nC2 u⁽ⁿ⁻²⁾v″ + … + uv⁽ⁿ⁾**, with the binomial coefficients of Pascal’s triangle. Choose v as the factor whose derivatives soon become zero, usually a polynomial.',
    'Useful nth derivatives: (e^(ax))⁽ⁿ⁾ = aⁿe^(ax); (sin ax)⁽ⁿ⁾ = aⁿ sin(ax + nπ/2); (xᵐ)⁽ⁿ⁾ = 0 when n > m.',
  ], 'am-pascal', 'In Leibniz’s theorem let v be the polynomial: its derivatives vanish after a few terms.',
  ['By Leibniz’s theorem, the 10th derivative of x³eˣ has how many non-zero terms?', ['4', '10', '11', '3'], 'x³ has only three non-zero derivatives, so the terms stop after v‴.'],
  [['First principles', 'Finding f′(x) as the limit of [f(x + h) − f(x)]/h.'], ['Leibniz’s theorem', 'The nth derivative of a product, with binomial coefficients.'], ['Binomial coefficient', 'nCr, the numbers in row n of Pascal’s triangle.']],
  [
    { q: 'Differentiate x³ from first principles.', steps: ['[(x + h)³ − x³]/h = (3x²h + 3xh² + h³)/h.', '= 3x² + 3xh + h².', 'As h → 0, **f′(x) = 3x²**.'] },
    { q: 'Find the fourth derivative of x²e^(2x).', steps: ['Let u = e^(2x), so u⁽ᵏ⁾ = 2ᵏe^(2x), and v = x², with v′ = 2x, v″ = 2, v‴ = 0.', 'y⁽⁴⁾ = 1 × 16e^(2x) × x² + 4 × 8e^(2x) × 2x + 6 × 4e^(2x) × 2.', '**y⁽⁴⁾ = 16e^(2x)(x² + 4x + 3)**.'] },
  ]),

  L('fp-hcalc-3', 'fm-l6-hyperbolic-calculus', '14.3', 'Integrals giving hyperbolic and inverse hyperbolic functions', 18, ['Calculus'], [
    'Reversing the derivatives: ∫ cosh x dx = sinh x + c, ∫ sinh x dx = cosh x + c, ∫ sech²x dx = tanh x + c. Squares are changed with the identities first: ∫ sinh²x dx = ∫ ½(cosh 2x − 1) dx = ¼ sinh 2x − ½x + c.',
    'The standard results, for a > 0: **∫ 1/√(x² + a²) dx = arsinh(x/a) + c**; **∫ 1/√(x² − a²) dx = arcosh(x/a) + c** for x > a; ∫ 1/(a² − x²) dx = (1/a) artanh(x/a) + c for |x| < a. In logarithmic form, arsinh(x/a) = ln(x + √(x² + a²)) − ln a, and the ln a joins the constant.',
    '**Completing the square** brings other quadratics to these forms: x² + 4x + 13 = (x + 2)² + 9.',
    'Hyperbolic substitutions remove square roots: x = a sinh u turns √(x² + a²) into a cosh u, since 1 + sinh²u = cosh²u; x = a cosh u turns √(x² − a²) into a sinh u.',
  ], 'am-inverse-hyperbolic', 'Complete the square first; then match the form √(x² + a²), √(x² − a²) or a² − x².',
  ['∫ cosh 2x dx =', ['½ sinh 2x + c', '2 sinh 2x + c', 'sinh 2x + c', '½ cosh 2x + c'], 'Divide by the 2 from the chain rule.'],
  [['Standard integral', 'A result such as ∫ 1/√(x² + a²) dx = arsinh(x/a) + c, quoted without proof.'], ['Completing the square', 'Writing x² + bx + c as (x + b/2)² plus a constant.'], ['Hyperbolic substitution', 'Putting x = a sinh u or x = a cosh u to remove a square root.']],
  [
    { q: 'Evaluate ∫ (0 to 4) 1/√(x² + 9) dx.', steps: ['= [arsinh(x/3)] (0 to 4) = arsinh(4/3).', 'arsinh(4/3) = ln(4/3 + √(16/9 + 1)) = ln(4/3 + 5/3).', '**= ln 3**.'] },
    { q: 'Find ∫ 1/√(x² + 4x + 13) dx.', steps: ['x² + 4x + 13 = (x + 2)² + 9.', 'This is ∫ 1/√(u² + 3²) du with u = x + 2.', '**= arsinh((x + 2)/3) + c**.'] },
  ]),

  // ---------- 15. The papers ----------
  L('fp-l6-paper1', 'fm-l6-papers', '15.1', 'The GCE Further Mathematics papers and Paper 1 drills', 14, ['Examination'], [
    'GCE Advanced Level Further Mathematics (0775) is sat in three papers. In 2026, Paper 1 (1½ hours, multiple choice) and Paper 2 (3 hours) were on Saturday 13 June, and Paper 3 (2½ hours) on Monday 15 June. Papers 2 and 3 are structured questions, answered in full.',
    'Paper 1 rewards quick, reliable methods: test an identity by substituting a simple value, use sums of roots instead of solving, check eigenvalues with the trace and the determinant, and estimate before choosing.',
    'Work in the margin, but do not spend more than about two minutes on one question: mark it and come back to it.',
    'Lower Sixth drill list: truth tables and the contrapositive; Σα, Σαβ and αβγ; partial fractions by cover-up; determinants and inverses; dot and cross products; lines and planes; polar and Cartesian forms; modulus and argument; De Moivre’s theorem; hyperbolic identities and logarithmic forms; derivatives and standard integrals.',
  ], 'am-gce-further', 'In Paper 1, check a formula answer by substituting a simple value into each option.',
  ['The contrapositive of p ⇒ q is:', ['¬q ⇒ ¬p', 'q ⇒ p', '¬p ⇒ ¬q', 'p ⇒ ¬q'], 'It is logically equivalent to p ⇒ q.'],
  [['Paper 1', 'The multiple-choice paper, 1½ hours.'], ['Contrapositive', '¬q ⇒ ¬p, equivalent to p ⇒ q.'], ['Margin check', 'A quick check by substituting a value or estimating.']],
  [
    { q: 'Which is the contrapositive of “if n is even, then n² is even”?', steps: ['The contrapositive of p ⇒ q is ¬q ⇒ ¬p.', 'Not (n² even) is “n² is odd”; not (n even) is “n is odd”.', '**If n² is odd, then n is odd**, true like the original statement.'] },
    { q: 'x³ − 2x² + kx − 6 = 0 has roots α, β, γ with α² + β² + γ² = 2. Find k.', steps: ['Σα = 2 and Σαβ = k.', 'α² + β² + γ² = 4 − 2k = 2.', '**k = 1**.'] },
    { q: 'Find |(i + 2j) × (3i − k)|.', steps: ['(i + 2j) × (3i − k) = i(2 × (−1) − 0) − j(1 × (−1) − 0) + k(0 − 6) = −2i + j − 6k.', '|−2i + j − 6k| = √(4 + 1 + 36).', '**= √41**.'] },
  ]),

  L('fp-l6-paper2', 'fm-l6-papers', '15.2', 'Structured answers: induction, planes and hyperbolic equations', 18, ['Examination'], [
    'Structured questions are marked on the method as well as the answer: write each step, name the result you use, and keep exact values (surds, π, logarithms) unless told otherwise.',
    '**Induction**, in four parts: the basis (n = 1); the assumption for n = k; the step proving it for n = k + 1, showing where the assumption is used; and the conclusion: true for n = 1, and true for n = k + 1 whenever true for n = k, so true for all positive integers n.',
    '**Planes**: find a normal vector with the vector product, write the equation as r · n = d, and check that the given points satisfy it. To find where a line meets a plane, substitute the line’s parametric form into the plane’s equation.',
    '**Hyperbolic equations**: change to exponentials or use an identity, solve, and reject impossible values (eˣ > 0, cosh x ≥ 1).',
  ], 'am-gce-further', 'Write the conclusion of an induction proof in full: it carries a mark.',
  ['In an induction proof, the inductive step uses the assumption for:', ['n = k to prove n = k + 1', 'n = k + 1 to prove n = k', 'every n at once', 'n = 1 only'], 'Show clearly where the assumption is used.'],
  [['Basis', 'The first case, usually n = 1, checked directly.'], ['Inductive step', 'Proving the case n = k + 1 from the assumed case n = k.'], ['Normal vector', 'A vector perpendicular to a plane.']],
  [
    { q: 'Prove by induction that 7ⁿ − 1 is divisible by 6 for every positive integer n.', steps: ['n = 1: 7 − 1 = 6, divisible by 6.', 'Assume 7ᵏ − 1 = 6m for an integer m. Then 7ᵏ⁺¹ − 1 = 7 × 7ᵏ − 1 = 7(6m + 1) − 1 = 42m + 6 = 6(7m + 1).', '**True for n = 1, and true for n = k + 1 whenever true for n = k, so true for every positive integer n.**'] },
    { q: 'Find the equation of the plane through A(1, 0, 2), B(3, 1, 1) and C(2, −1, 4).', steps: ['AB = (2, 1, −1) and AC = (1, −1, 2); n = AB × AC = (1 × 2 − (−1)(−1), (−1)(1) − 2 × 2, 2(−1) − 1 × 1) = (1, −5, −3).', 'r · n = a · n = 1 − 0 − 6 = −5.', '**x − 5y − 3z = −5**. Check B: 3 − 5 − 3 = −5; C: 2 + 5 − 12 = −5.'] },
  ]),
];
