// A Level Pure Mathematics lessons, Upper Sixth (part 1): further integration,
// applications of integration and differential equations. Original text
// written for this app. Integrals between limits are written ∫ (a to b) f(x) dx.

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

export const LESSONS_U6A = [
  // ---------- 6. Further integration ----------
  L('pu-int-1', 'mm-u6-integration', '6.1', 'Integration by parts and by substitution, extended', 18, ['Calculus'], [
    '**By parts**: ∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx. Used twice, it handles ∫ x²eˣ dx = eˣ(x² − 2x + 2) + c. For ∫ eˣ sin x dx, two applications bring back the original integral I: I = eˣ sin x − eˣ cos x − I, so **I = ½eˣ(sin x − cos x) + c**.',
    '**Substitution**: a good choice of u is often the inside of a power or a root, or a function whose derivative is also present. In a definite integral, change the limits along with the variable.',
    '**Trigonometric substitutions** remove square roots: for √(a² − x²) put x = a sin θ, so that √(a² − x²) = a cos θ and dx = a cos θ dθ; for a² + x² put x = a tan θ, since 1 + tan²θ = sec²θ.',
    'Example: ∫ (0 to 1) √(1 − x²) dx with x = sin θ becomes ∫ (0 to π/2) cos²θ dθ = π/4: a quarter of the area of a circle of radius 1, as the graph shows.',
  ], 'am-quarter-circle', 'If the derivative of an inside function is present, substitute for the inside function.',
  ['∫ x cos x dx equals:', ['x sin x + cos x + c', 'x sin x − cos x + c', '−x sin x + c', '½x² sin x + c'], 'Parts with u = x: x sin x − ∫ sin x dx.'],
  [['Integration by parts', '∫ u v′ dx = uv − ∫ v u′ dx, from the product rule.'], ['Trigonometric substitution', 'Putting x = a sin θ or x = a tan θ to remove √(a² − x²) or a² + x².'], ['Limits', 'In a definite integral by substitution, the limits change to values of the new variable.']],
  [
    { q: 'Find ∫ x²eˣ dx.', steps: ['Parts with u = x²: ∫ x²eˣ dx = x²eˣ − ∫ 2x eˣ dx.', 'Parts again: ∫ 2x eˣ dx = 2x eˣ − 2eˣ.', 'So ∫ x²eˣ dx = **eˣ(x² − 2x + 2) + c**.'] },
    { q: 'Evaluate ∫ (0 to 3) x/√(x + 1) dx.', steps: ['Let u = x + 1, so x = u − 1 and dx = du; x = 0 gives u = 1 and x = 3 gives u = 4.', '∫ (1 to 4) (u − 1)u^(−½) du = [⅔u^(3/2) − 2u^½] (1 to 4).', '= (16/3 − 4) − (⅔ − 2) = **8/3**.'] },
  ]),

  L('pu-int-2', 'mm-u6-integration', '6.2', 'Partial fractions and the inverse trigonometric integrals', 17, ['Calculus'], [
    'Two standard integrals: **∫ 1/(a² + x²) dx = (1/a) tan⁻¹(x/a) + c** and **∫ 1/√(a² − x²) dx = sin⁻¹(x/a) + c** (for |x| < a). They come from the substitutions x = a tan θ and x = a sin θ, and can be checked by differentiating.',
    'Completing the square brings other quadratics to these forms: ∫ 1/(x² + 4x + 13) dx = ∫ 1/((x + 2)² + 9) dx = ⅓ tan⁻¹((x + 2)/3) + c.',
    'Rational functions: make the fraction proper, split it into partial fractions, and integrate each part. Linear factors give logarithms; a repeated factor 1/(x − a)² gives −1/(x − a); a part (Bx + C)/(x² + k) splits into a logarithm and an inverse tangent: ∫ (2x + 3)/(x² + 1) dx = ln(x² + 1) + 3 tan⁻¹x + c.',
  ], 'am-integrals-table', 'Complete the square to reach a standard tan⁻¹ or sin⁻¹ form.',
  ['∫ 1/(9 + x²) dx equals:', ['⅓ tan⁻¹(x/3) + c', 'tan⁻¹(x/3) + c', '⅓ ln(9 + x²) + c', 'sin⁻¹(x/3) + c'], 'a = 3.'],
  [['Inverse tangent integral', '∫ 1/(a² + x²) dx = (1/a) tan⁻¹(x/a) + c.'], ['Inverse sine integral', '∫ 1/√(a² − x²) dx = sin⁻¹(x/a) + c.'], ['Proper fraction', 'A fraction whose numerator has lower degree than its denominator.']],
  [
    { q: 'Find ∫ (x² + 2x + 3)/((x + 1)(x² + 1)) dx.', steps: ['From the partial fractions lesson: (x² + 2x + 3)/((x + 1)(x² + 1)) = 1/(x + 1) + 2/(x² + 1).', '∫ 1/(x + 1) dx = ln|x + 1| and ∫ 2/(x² + 1) dx = 2 tan⁻¹x.', '= **ln|x + 1| + 2 tan⁻¹x + c**.'] },
    { q: 'Evaluate ∫ (0 to 1) 1/√(4 − x²) dx.', steps: ['A standard form with a = 2: [sin⁻¹(x/2)] (0 to 1).', '= sin⁻¹(½) − sin⁻¹0.', '= **π/6**.'] },
  ]),

  L('pu-int-3', 'mm-u6-integration', '6.3', 'Integrals of trigonometric functions', 16, ['Calculus'], [
    'Squares are integrated with the double angle formulae: **cos²x = ½(1 + cos 2x)** and **sin²x = ½(1 − cos 2x)**, so ∫ sin²x dx = ½x − ¼ sin 2x + c and ∫ cos²x dx = ½x + ¼ sin 2x + c. Also ∫ tan²x dx = ∫ (sec²x − 1) dx = tan x − x + c.',
    'Products of sines and cosines: use the factor formulae backwards, for example 2 sin A cos B = sin(A + B) + sin(A − B). So ∫ sin 3x cos x dx = ½ ∫ (sin 4x + sin 2x) dx = −⅛ cos 4x − ¼ cos 2x + c.',
    'Odd powers: take out one factor and use sin²x + cos²x = 1: ∫ sin³x dx = ∫ (1 − cos²x) sin x dx = −cos x + ⅓cos³x + c. In general ∫ sin x cosⁿx dx = −cosⁿ⁺¹x/(n + 1) + c, an f′ × fⁿ form.',
  ], 'am-integrals-table', 'Even powers: double angles. Odd powers: take one factor out.',
  ['∫ cos²x dx equals:', ['½x + ¼ sin 2x + c', '⅓cos³x + c', '½x − ¼ sin 2x + c', 'sin²x + c'], 'cos²x = ½(1 + cos 2x).'],
  [['Double angle method', 'Replacing sin²x or cos²x by ½(1 ∓ cos 2x) before integrating.'], ['Factor formulae', 'Rules that turn a product of sines and cosines into a sum.'], ['Odd power', 'sinⁿx or cosⁿx with n odd: keep one factor for the substitution.']],
  [
    { q: 'Evaluate ∫ (0 to π) sin²x dx.', steps: ['sin²x = ½(1 − cos 2x).', '∫ (0 to π) = [½x − ¼ sin 2x] (0 to π).', '= **π/2**.'] },
    { q: 'Find ∫ sin 3x cos x dx.', steps: ['2 sin 3x cos x = sin 4x + sin 2x.', '∫ ½(sin 4x + sin 2x) dx.', '= **−⅛ cos 4x − ¼ cos 2x + c**.'] },
  ]),

  // ---------- 7. Applications of integration ----------
  L('pu-iapp-1', 'mm-u6-integration-apps', '7.1', 'Areas and volumes of revolution', 18, ['Calculus'], [
    'Areas: ∫ (a to b) y dx between a curve and the x-axis; **∫ (c to d) x dy** between a curve and the y-axis; ∫ (a to b) (upper − lower) dx between two curves.',
    'Rotating the region under y = f(x), from x = a to x = b, through 360° about the x-axis makes a **solid of revolution**. A thin slice of thickness δx is a disc of radius y and volume πy²δx, so **V = π ∫ (a to b) y² dx**. About the y-axis: **V = π ∫ (c to d) x² dy**.',
    'Rotating y = √(r² − x²) from −r to r gives a sphere: V = π ∫ (−r to r) (r² − x²) dx = 4πr³/3. A cone of height h and base radius r comes from y = (r/h)x: V = π ∫ (0 to h) (r²/h²)x² dx = ⅓πr²h. For a region between two curves, subtract the volumes (a washer): V = π ∫ (y₁² − y₂²) dx.',
  ], 'am-volume-revolution', 'Volumes of revolution square the radius: π∫ y² dx, never π∫ y dx.',
  ['The region under y = x from 0 to 3 is rotated about the x-axis. The volume is:', ['9π', '3π', '27π', '4.5π'], 'π∫ x² dx from 0 to 3 = 9π.'],
  [['Solid of revolution', 'The solid swept out when a region is rotated through 360° about a line.'], ['Disc method', 'Adding thin discs of volume πy²δx.'], ['Washer', 'A disc with a hole, used when the region lies between two curves.']],
  [
    { q: 'The region under y = √x from x = 0 to x = 4 is rotated about the x-axis. Find the volume.', steps: ['V = π ∫ (0 to 4) (√x)² dx = π ∫ (0 to 4) x dx.', '= π[x²/2] (0 to 4).', '= **8π ≈ 25.1 cubic units**.'] },
    { q: 'The region between y = x², the y-axis and the line y = 4 (x ≥ 0) is rotated about the y-axis. Find the volume.', steps: ['About the y-axis: V = π ∫ (0 to 4) x² dy, with x² = y.', '= π ∫ (0 to 4) y dy = π[y²/2] (0 to 4).', '= **8π cubic units**.'] },
  ]),

  L('pu-iapp-2', 'mm-u6-integration-apps', '7.2', 'Centroids, centres of mass and mean values by integration', 17, ['Calculus'], [
    'The **centroid** (x̄, ȳ) of the region under y = f(x) from a to b, of area A, is given by **A x̄ = ∫ x y dx** and **A ȳ = ∫ ½y² dx**: each thin strip has area y δx and its centre is at (x, ½y).',
    'For a uniform **solid of revolution** about the x-axis, the centre of mass lies on the axis at **x̄ = ∫ x y² dx ÷ ∫ y² dx** (the π cancels). A solid hemisphere of radius r has its centre of mass **3r/8** from its flat face; a solid cone has it **h/4** above its base.',
    'The **mean value** of f(x) over [a, b] is **(1/(b − a)) ∫ (a to b) f(x) dx**: the height of the rectangle on [a, b] with the same area. The mean value of sin x over [0, π] is 2/π ≈ 0.64.',
  ], 'am-centroid', 'Each strip acts at its own centre: x across, ½y up.',
  ['The mean value of x² over [0, 3] is:', ['3', '9', '4.5', '1'], '(1/3) × ∫ (0 to 3) x² dx = (1/3) × 9.'],
  [['Centroid', 'The centre of area of a plane region.'], ['Centre of mass', 'The point where the whole weight of a body can be taken to act.'], ['Mean value', 'The average height of a function over an interval.']],
  [
    { q: 'Find the centroid of the region under y = x² from x = 0 to x = 2.', steps: ['A = ∫ (0 to 2) x² dx = 8/3.', 'A x̄ = ∫ x³ dx = 4, so x̄ = 3/2; A ȳ = ∫ ½x⁴ dx = 16/5, so ȳ = 6/5.', 'The centroid is **(1.5, 1.2)**.'] },
    { q: 'Show that the centre of mass of a uniform solid hemisphere of radius r is 3r/8 from its flat face.', steps: ['Rotate y² = r² − x², 0 ≤ x ≤ r, about the x-axis.', '∫ (0 to r) x(r² − x²) dx = r⁴/4 and ∫ (0 to r) (r² − x²) dx = 2r³/3.', 'x̄ = (r⁴/4) ÷ (2r³/3) = **3r/8** ✓.'] },
  ]),

  // ---------- 11. Differential equations ----------
  L('pu-de-1', 'mm-u6-diff-equations', '11.1', 'First order equations with separable variables', 17, ['Calculus'], [
    'A **differential equation** links a function with its derivatives. Its **order** is that of the highest derivative. The **general solution** contains arbitrary constants (as many as the order); a **particular solution** uses given conditions to fix them.',
    'If dy/dx = f(x)g(y), the variables **separate**: ∫ 1/g(y) dy = ∫ f(x) dx, with one constant. For dy/dx = xy: ∫ dy/y = ∫ x dx, so ln|y| = ½x² + c and **y = Ae^(x²/2)**.',
    'Modelling: "the rate of change is proportional to the amount" gives dN/dt = kN, so **N = N₀e^(kt)**: growth when k > 0, decay when k < 0. **Newton’s law of cooling**: dθ/dt = −k(θ − θₛ), where θₛ is the temperature of the surroundings, gives **θ = θₛ + (θ₀ − θₛ)e^(−kt)**.',
  ], 'am-cooling', 'Put all the y terms with dy and all the x terms with dx, then integrate both sides.',
  ['The general solution of dy/dx = 2y is:', ['y = Ae^(2x)', 'y = 2x + c', 'y = x² + c', 'y = e^(2x) + c'], 'ln|y| = 2x + c.'],
  [['Order', 'The highest derivative in a differential equation.'], ['General solution', 'The solution with its arbitrary constants.'], ['Particular solution', 'The solution that also satisfies the given conditions.']],
  [
    { q: 'Solve dy/dx = y cos x, given that y = 2 when x = 0.', steps: ['Separate: ∫ dy/y = ∫ cos x dx, so ln|y| = sin x + c.', 'y = Ae^(sin x); x = 0, y = 2 gives A = 2.', '**y = 2e^(sin x)**.'] },
    { q: 'Tea at 90 °C cools in a room at 20 °C; after 5 minutes it is at 60 °C. When will it reach 40 °C?', steps: ['θ = 20 + 70e^(−kt).', 'At t = 5: 60 = 20 + 70e^(−5k), so e^(−5k) = 4/7 and k = ⅕ ln(7/4) = 0.112.', 'θ = 40 when e^(−kt) = 2/7: t = ln 3.5 ÷ 0.112 ≈ **11.2 minutes**.'] },
  ]),

  L('pu-de-2', 'mm-u6-diff-equations', '11.2', 'Homogeneous equations and the integrating factor', 17, ['Calculus'], [
    'A first order equation is **homogeneous** if it can be written dy/dx = F(y/x). Put **y = vx**, so dy/dx = v + x dv/dx; the equation then separates in v and x. For dy/dx = (x + y)/x = 1 + y/x: v + x dv/dx = 1 + v, so dv/dx = 1/x, v = ln|x| + c and **y = x ln|x| + cx**.',
    'A **linear** first order equation has the form **dy/dx + P(x)y = Q(x)**. Multiply through by the **integrating factor I = e^(∫P dx)**: the left side becomes the derivative of a product, d/dx (Iy) = IQ, so **Iy = ∫ IQ dx**.',
    'Example: dy/dx + 2y/x = x (x > 0). I = e^(∫2/x dx) = e^(2 ln x) = x². Then d/dx (x²y) = x³, so x²y = ¼x⁴ + c and **y = ¼x² + c/x²**.',
  ], 'am-if-steps', 'Write the equation as dy/dx + P y = Q before finding the integrating factor.',
  ['The integrating factor of dy/dx + 3y = eˣ is:', ['e^(3x)', 'eˣ', '3x', 'e^(−3x)'], 'e^(∫3 dx).'],
  [['Homogeneous equation', 'An equation dy/dx = F(y/x), solved with y = vx.'], ['Linear equation', 'dy/dx + P(x)y = Q(x).'], ['Integrating factor', 'e^(∫P dx), which makes the left side the derivative of Iy.']],
  [
    { q: 'Solve dy/dx − y = eˣ, given that y = 1 when x = 0.', steps: ['I = e^(−x): d/dx (e^(−x)y) = 1.', 'e^(−x)y = x + c, so y = (x + c)eˣ.', 'x = 0, y = 1 gives c = 1: **y = (x + 1)eˣ**.'] },
    { q: 'Solve dy/dx = (x² + y²)/(xy).', steps: ['Homogeneous: with y = vx, v + x dv/dx = (1 + v²)/v = 1/v + v.', 'So x dv/dx = 1/v, that is ∫ v dv = ∫ dx/x: ½v² = ln|x| + c.', 'With v = y/x: **y² = 2x²(ln|x| + c)**.'] },
  ]),

  L('pu-de-3', 'mm-u6-diff-equations', '11.3', 'Second order linear equations with constant coefficients', 18, ['Calculus'], [
    'The equation **a d²y/dx² + b dy/dx + cy = 0** is solved by trying y = e^(mx), which gives the **auxiliary equation am² + bm + c = 0**.',
    'Three cases:\n- two real roots m₁ ≠ m₂: **y = Ae^(m₁x) + Be^(m₂x)**\n- a repeated root m: **y = (A + Bx)e^(mx)**\n- complex roots p ± qi: **y = e^(px)(A cos qx + B sin qx)**.\nThe two constants are fixed by two conditions, such as the values of y and dy/dx at x = 0.',
    'The equation d²y/dx² + ω²y = 0 has roots ±ωi and solution y = A cos ωx + B sin ωx: **simple harmonic motion**, an oscillation of period 2π/ω. A damping term b dy/dx (b > 0) gives complex roots with p < 0: oscillations that die away.',
  ], 'am-damped', 'Write the auxiliary equation first; its roots decide the form of the answer.',
  ['The auxiliary equation of y″ − 5y′ + 6y = 0 has roots:', ['2 and 3', '−2 and −3', '1 and 6', '5 and 6'], 'm² − 5m + 6 = (m − 2)(m − 3).'],
  [['Auxiliary equation', 'am² + bm + c = 0, from trying y = e^(mx).'], ['Simple harmonic motion', 'An oscillation y = A cos ωx + B sin ωx, from y″ + ω²y = 0.'], ['Damping', 'A resistance that makes oscillations die away.']],
  [
    { q: 'Solve y″ − 5y′ + 6y = 0 with y = 2 and y′ = 5 when x = 0.', steps: ['Roots 2 and 3: y = Ae^(2x) + Be^(3x).', 'A + B = 2 and 2A + 3B = 5, so B = 1 and A = 1.', '**y = e^(2x) + e^(3x)**.'] },
    { q: 'Solve y″ + 2y′ + 5y = 0.', steps: ['m² + 2m + 5 = 0 gives m = −1 ± 2i.', 'Complex roots p ± qi with p = −1, q = 2.', '**y = e^(−x)(A cos 2x + B sin 2x)**.'] },
    { q: 'Solve y″ + 4y′ + 4y = 0.', steps: ['m² + 4m + 4 = (m + 2)² = 0: a repeated root −2.', 'The repeated-root form applies.', '**y = (A + Bx)e^(−2x)**.'] },
  ]),
];
