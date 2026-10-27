// A Level Further Mathematics lessons (0775), Upper Sixth (part 2):
// differential equations by substitution, particular integrals and forced
// oscillations, numerical methods, group theory and the papers. Original text
// written for this app. Matrices are written row by row: [a b; c d].

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

export const LESSONS_FU6B = [
  // ---------- 13. First order differential equations ----------
  L('fp-de-1', 'fm-u6-de-first', '13.3', 'Substitutions: homogeneous and Bernoulli equations', 18, ['Differential equations'], [
    'Some first order equations become separable or linear after a substitution. A **homogeneous** equation dy/dx = F(y/x) uses **y = vx**, so that dy/dx = v + x dv/dx; the equation then separates in v and x.',
    'A **Bernoulli** equation dy/dx + P(x)y = Q(x)yⁿ (n ≠ 0, 1) becomes linear with **z = y¹⁻ⁿ**. Divide by yⁿ and use dz/dx = (1 − n)y⁻ⁿ dy/dx: the result is dz/dx + (1 − n)Pz = (1 − n)Q, solved with an integrating factor.',
    'An **exact** equation already has a left side that is the derivative of a product: x² dy/dx + 2xy = d/dx(x²y), so it integrates at once.',
    'After solving for v or z, change back to y, and use any given condition to find the constant.',
  ], 'am-cooling', 'Name the type first (separable, linear, exact, homogeneous or Bernoulli): the type tells you the method.',
  ['For dy/dx + Py = Qy³, substitute:', ['z = y⁻²', 'z = y³', 'y = vx', 'z = y²'], 'z = y¹⁻ⁿ with n = 3.'],
  [['Homogeneous equation', 'dy/dx = F(y/x), solved with y = vx.'], ['Bernoulli equation', 'dy/dx + Py = Qyⁿ, made linear by z = y¹⁻ⁿ.'], ['Exact equation', 'An equation whose left side is the derivative of a product.']],
  [
    { q: 'Solve dy/dx = (x² + y²)/(xy), given y = 2 when x = 1.', steps: ['y = vx: v + x dv/dx = (1 + v²)/v = 1/v + v, so x dv/dx = 1/v.', 'v dv = dx/x, so ½v² = ln x + c; with v = y/x, y² = 2x²(ln x + c).', 'x = 1, y = 2: 4 = 2c, c = 2. **y² = 2x²(ln x + 2)**.'] },
    { q: 'Solve dy/dx + y/x = xy².', steps: ['Bernoulli with n = 2: z = y⁻¹, dz/dx = −y⁻² dy/dx. Dividing by y²: −dz/dx + z/x = x, so dz/dx − z/x = −x.', 'Integrating factor e^(−ln x) = 1/x: d/dx(z/x) = −1, so z/x = −x + c and z = cx − x².', '**y = 1/(cx − x²)**.'] },
  ]),

  // ---------- 14. Second order differential equations ----------
  L('fp-de-2', 'fm-u6-de-second', '14.2', 'Particular integrals, special cases and forced oscillations', 18, ['Differential equations'], [
    'For a y″ + b y′ + c y = f(x) the general solution is **y = complementary function + particular integral**. Try a particular integral of the same form as f(x): a polynomial of the same degree for a polynomial; ke^(px) for e^(px); A cos qx + B sin qx for cos qx or sin qx.',
    '**Special cases**: if the trial PI is already part of the CF, multiply it by x (by x² if p is a repeated root of the auxiliary equation). For y″ − 3y′ + 2y = e^(2x), 2 is a root of m² − 3m + 2 = 0, so try kxe^(2x).',
    '**Forced oscillations**: ẍ + ω²x = F cos pt. For p ≠ ω the PI is (F/(ω² − p²)) cos pt. For p = ω, **resonance**, the PI is (F/(2ω)) t sin ωt, which grows without limit. With damping, ẍ + 2kẋ + ω²x = F cos pt, the CF dies away and the motion settles to the PI, the **steady state**.',
    'In an initial-value problem, find the constants only after adding the CF and the PI.',
  ], 'am-forced-oscillation', 'Write down the CF before choosing a PI: if your trial already appears in it, multiply by x.',
  ['For y″ − 3y′ + 2y = e^(2x), the particular integral is tried as:', ['kxe^(2x)', 'ke^(2x)', 'kx²', 'k sin 2x'], '2 is a root of the auxiliary equation.'],
  [['Particular integral', 'Any one solution of the full equation.'], ['Resonance', 'Forcing at the natural frequency, so the amplitude grows without limit.'], ['Steady state', 'The motion left when the complementary function has died away.']],
  [
    { q: 'Solve y″ − 3y′ + 2y = e^(2x).', steps: ['m² − 3m + 2 = 0 gives m = 1, 2: CF = Aeˣ + Be^(2x).', 'Try y = kxe^(2x): y′ = k(1 + 2x)e^(2x), y″ = k(4 + 4x)e^(2x); substituting, k[(4 + 4x) − 3(1 + 2x) + 2x]e^(2x) = ke^(2x), so k = 1.', '**y = Aeˣ + Be^(2x) + xe^(2x)**.'] },
    { q: 'Solve ẍ + 4x = 3 sin t, with x = 0 and ẋ = 0 when t = 0.', steps: ['CF: A cos 2t + B sin 2t. Try C sin t: −C sin t + 4C sin t = 3 sin t, so C = 1.', 'x = A cos 2t + B sin 2t + sin t. x(0) = 0 gives A = 0; ẋ = 2B cos 2t + cos t, so 2B + 1 = 0 and B = −½.', '**x = sin t − ½ sin 2t**.'] },
  ]),

  // ---------- 17. Numerical methods ----------
  L('fp-num-1', 'fm-u6-numerical', '17.1', 'Euler’s method and the Taylor series method', 17, ['Numerical methods'], [
    'To solve dy/dx = f(x, y) with y(x₀) = y₀ numerically, move along the x-axis in steps of h. **Euler’s method** follows the tangent at the start of each step: **yₙ₊₁ = yₙ + h f(xₙ, yₙ)**, xₙ₊₁ = xₙ + h.',
    'The error in each step is roughly proportional to h², and the total error over a fixed range roughly proportional to h: halving h roughly halves the error, at the cost of twice as many steps.',
    'The **Taylor series method** uses more terms: y(x₀ + h) ≈ y₀ + hy′₀ + (h²/2!)y″₀ + (h³/3!)y‴₀, where y″ and y‴ come from differentiating the differential equation. Each extra term makes the result much more accurate.',
    'Set the working out in a table with columns x, y, f(x, y) and h f(x, y), and keep more figures than the answer needs.',
  ], 'am-euler', 'Set out Euler’s method in a table: x, y, f(x, y), h f(x, y).',
  ['Euler’s method follows:', ['the tangent at the start of each step', 'the chord of each step', 'the normal', 'the exact curve'], 'yₙ₊₁ = yₙ + h f(xₙ, yₙ).'],
  [['Step length', 'The distance h moved along the x-axis at each step.'], ['Euler’s method', 'yₙ₊₁ = yₙ + h f(xₙ, yₙ).'], ['Taylor series method', 'Stepping with y₀ + hy′₀ + (h²/2)y″₀ + …, using derivatives from the equation.']],
  [
    { q: 'dy/dx = x + y with y(0) = 1. Use Euler’s method with h = 0.1 to estimate y(0.2).', steps: ['y₁ = 1 + 0.1(0 + 1) = 1.1.', 'y₂ = 1.1 + 0.1(0.1 + 1.1) = 1.22.', '**y(0.2) ≈ 1.22.** The exact solution y = 2eˣ − x − 1 gives 1.2428, so the error is about 0.023.'] },
    { q: 'For the same equation, use the Taylor series method with one step h = 0.2 and terms up to h³.', steps: ['y′ = x + y, so y′(0) = 1; y″ = 1 + y′, so y″(0) = 2; y‴ = y″, so y‴(0) = 2.', 'y(0.2) ≈ 1 + 0.2(1) + (0.04/2)(2) + (0.008/6)(2).', '**y(0.2) ≈ 1.24267**, within 0.00014 of the exact 1.24281.'] },
  ]),

  L('fp-num-2', 'fm-u6-numerical', '17.2', 'Simpson’s rule and bounds for an integral', 17, ['Numerical methods'], [
    '**Simpson’s rule**, with an even number n of strips of width h: **∫ (a to b) y dx ≈ (h/3)[y₀ + yₙ + 4(y₁ + y₃ + … + yₙ₋₁) + 2(y₂ + y₄ + … + yₙ₋₂)]**. It fits a parabola through each three consecutive points, and it is exact for cubics.',
    'Halving h divides the error of Simpson’s rule by about 16 (the error is roughly proportional to h⁴), against about 4 for the trapezium rule (proportional to h²).',
    '**Bounds from rectangles**: for an increasing function, rectangles with their left-hand heights lie under the curve and give a lower bound; with their right-hand heights they lie above it and give an upper bound. The true value lies between. For a decreasing function the roles swap.',
    'Keep at least two more figures in the working than the answer needs.',
  ], 'am-simpson', 'Check that the number of strips is even before using Simpson’s rule.',
  ['Simpson’s rule with 4 strips on [0, 1] uses h =', ['0.25', '0.5', '0.2', '1'], 'h = (1 − 0)/4.'],
  [['Simpson’s rule', '(h/3)[ends + 4(odds) + 2(evens)], with an even number of strips.'], ['Ordinate', 'A value of y at one of the equally spaced x-values.'], ['Upper and lower bounds', 'Values known to be above and below the true integral.']],
  [
    { q: 'Use Simpson’s rule with 4 strips to estimate ∫ (0 to 1) e^(−x²) dx.', steps: ['h = 0.25: y = 1, 0.939413, 0.778801, 0.569783, 0.367879.', '(0.25/3)[1 + 0.367879 + 4(0.939413 + 0.569783) + 2(0.778801)] = (0.25/3)(8.962265).', '**≈ 0.74686**, against the true value 0.74682.'] },
    { q: 'Find lower and upper bounds for ∫ (1 to 2) 1/x dx with 4 rectangles.', steps: ['1/x is decreasing, so right-hand heights give a lower bound: 0.25(0.8 + 0.666667 + 0.571429 + 0.5) = 0.6345.', 'Left-hand heights give an upper bound: 0.25(1 + 0.8 + 0.666667 + 0.571429) = 0.7595.', '**0.6345 < ∫ (1 to 2) 1/x dx < 0.7595**; the true value is ln 2 = 0.6931.'] },
  ]),

  // ---------- 18. Group theory ----------
  L('fp-grp-1', 'fm-u6-groups', '18.1', 'Binary operations and the group axioms', 18, ['Abstract algebra'], [
    'A **binary operation** ∗ on a set G combines any two elements a and b to give a ∗ b. G is **closed** under ∗ when a ∗ b is always in G.',
    '(G, ∗) is a **group** when four axioms hold: **closure**; **associativity**, (a ∗ b) ∗ c = a ∗ (b ∗ c); an **identity** e with a ∗ e = e ∗ a = a for every a; and an **inverse** a⁻¹ for every a, with a ∗ a⁻¹ = a⁻¹ ∗ a = e. If also a ∗ b = b ∗ a for all a and b, the group is **abelian**.',
    'Examples: (ℤ, +) is a group with identity 0; (ℤ, ×) is not, since 2 has no inverse in ℤ; the non-zero real numbers form a group under ×; {0, 1, 2, 3} under addition modulo 4 is a group; {1, 3, 5, 7} under multiplication modulo 8 is a group in which every element is its own inverse.',
    'A **Cayley table** shows a finite group: each element appears exactly once in each row and each column. The **order** of a group is its number of elements; the order of an element a is the least positive n with aⁿ = e.',
  ], 'am-cayley', 'Check all four axioms in order and state each one; associativity can be quoted for addition and multiplication of numbers and matrices.',
  ['In (ℤ, +), the inverse of 5 is:', ['−5', '⅕', '0', '5'], '5 + (−5) = 0, the identity.'],
  [['Binary operation', 'A rule combining two elements of a set to give one element.'], ['Group axioms', 'Closure, associativity, identity and inverses.'], ['Abelian group', 'A group in which a ∗ b = b ∗ a for all elements.']],
  [
    { q: 'Show that {1, 3, 5, 7} under multiplication modulo 8 is a group.', steps: ['Products modulo 8: 3 × 3 = 9 ≡ 1, 3 × 5 = 15 ≡ 7, 3 × 7 = 21 ≡ 5, 5 × 5 = 25 ≡ 1, 5 × 7 = 35 ≡ 3, 7 × 7 = 49 ≡ 1: always in the set, so it is closed.', 'Multiplication is associative; 1 is the identity; 3² ≡ 5² ≡ 7² ≡ 1, so each element is its own inverse.', '**All four axioms hold: a group of order 4**, abelian, with every element other than 1 of order 2.'] },
    { q: 'Do the 2 × 2 matrices with determinant 1 form a group under matrix multiplication?', steps: ['Closure: det(AB) = det A × det B = 1. Matrix multiplication is associative. The identity I has determinant 1.', 'det A = 1 ≠ 0, so A⁻¹ exists, and det(A⁻¹) = 1/det A = 1.', '**Yes, it is a group**, and it is not abelian, since AB and BA usually differ.'] },
  ]),

  L('fp-grp-2', 'fm-u6-groups', '18.2', 'Cyclic groups, subgroups, Lagrange’s theorem and isomorphism', 18, ['Abstract algebra'], [
    'A group is **cyclic** when one element g **generates** it: every element is a power of g. The cube roots of unity {1, ω, ω²} under multiplication are cyclic, generated by ω; addition modulo n is cyclic, generated by 1. Every cyclic group is abelian.',
    'A **subgroup** is a subset that is itself a group under the same operation. **Lagrange’s theorem**: in a finite group, the order of a subgroup divides the order of the group. So the order of every element divides the order of the group, and a group of prime order is cyclic.',
    '**Permutation groups**: the symmetries of an equilateral triangle (three rotations and three reflections) form a group of order 6, the same as the permutations of three objects. It is not abelian: a reflection followed by a rotation is not the same as the rotation followed by the reflection.',
    'Two groups are **isomorphic** when a one-to-one correspondence between them preserves the operation. They must have the same order and the same number of elements of each order. {1, i, −1, −i} under × is isomorphic to {0, 1, 2, 3} under addition modulo 4 (i matches 1), but not to {1, 3, 5, 7} under multiplication modulo 8, which has no element of order 4.',
  ], 'am-symmetry', 'To show two groups are not isomorphic, find a property one has and the other lacks, such as the number of elements of order 2.',
  ['The order of −1 in ({1, i, −1, −i}, ×) is:', ['2', '4', '1', '3'], '(−1)² = 1.'],
  [['Cyclic group', 'A group in which every element is a power of one generator.'], ['Subgroup', 'A subset that is a group under the same operation.'], ['Isomorphism', 'A one-to-one correspondence between groups that preserves the operation.']],
  [
    { q: 'Find the order of each element of {1, i, −1, −i} under multiplication, and its subgroups.', steps: ['1 has order 1; (−1)² = 1, so −1 has order 2; i² = −1, i³ = −i, i⁴ = 1, so i has order 4, and so has −i.', 'The group is cyclic, generated by i (or by −i).', '**Subgroups: {1}, {1, −1} and the whole group**, of orders 1, 2 and 4, each dividing 4 as Lagrange’s theorem requires.'] },
    { q: 'Explain why a group of order 6 cannot have a subgroup of order 4.', steps: ['By Lagrange’s theorem the order of a subgroup divides the order of the group.', '4 does not divide 6.', '**No subgroup of order 4 is possible.**'] },
  ]),

  // ---------- 21. The papers ----------
  L('fp-u6-paper1', 'fm-u6-papers', '21.1', 'Paper 1 drills: eigenvalues, reduction formulae, groups and polar curves', 14, ['Examination'], [
    'Paper 1 (1½ hours, multiple choice) covers the whole syllabus. In 2026 it was sat with Paper 2 on Saturday 13 June, and Paper 3 followed on Monday 15 June.',
    'Fast checks that save time: the eigenvalues add to the trace and multiply to the determinant; Iₙ = ((n − 1)/n)Iₙ₋₂ for sinⁿx and cosⁿx on [0, π/2]; the order of an element divides the order of the group; polar curves meet where their values of r are equal, but the pole must be checked separately.',
    'For conics: b² = a²(1 − e²) for an ellipse and b² = a²(e² − 1) for a hyperbola. For series: write only the first two or three terms.',
    'Numerical questions: count the strips, check the number is even for Simpson’s rule, and keep four or more figures.',
  ], 'am-gce-further', 'When two polar curves meet, also check the pole: they can pass through it at different values of θ.',
  ['The eigenvalues of [5 2; 2 2] are:', ['1 and 6', '5 and 2', '3 and 4', '2 and 5'], 'λ² − 7λ + 6 = 0.'],
  [['Trace check', 'The eigenvalues add up to the trace and multiply to the determinant.'], ['Intersection at the pole', 'Two polar curves can both pass through the pole at different angles.'], ['Paper 1', 'The multiple-choice paper, 1½ hours.']],
  [
    { q: 'Find the eigenvalues of [5 2; 2 2].', steps: ['Trace 7 and determinant 10 − 4 = 6.', 'λ² − 7λ + 6 = 0, so (λ − 1)(λ − 6) = 0.', '**λ = 1 and λ = 6** (sum 7, product 6).'] },
    { q: 'Where do r = 1 + cos θ and r = 3 cos θ meet?', steps: ['1 + cos θ = 3 cos θ gives cos θ = ½, so θ = ±π/3 and r = 3/2.', 'Both curves also pass through the pole: the first at θ = π, the second at θ = π/2.', '**At (3/2, π/3), (3/2, −π/3) and at the pole.**'] },
    { q: 'Find ∫ (0 to π/2) cos⁴x dx.', steps: ['I₄ = (3/4)I₂ = (3/4)(1/2)I₀.', 'I₀ = π/2.', '**I₄ = 3π/16**.'] },
  ]),

  L('fp-u6-paper2', 'fm-u6-papers', '21.2', 'Structured questions: differential equations, transformations and conics', 18, ['Examination'], [
    'Structured questions reward a complete method. For a second order equation, write the auxiliary equation, the complementary function, the trial particular integral and its substitution, then the general solution, and only then apply the initial conditions.',
    'For a linear transformation, state the matrix and its determinant and say what the determinant means (the area scale factor; singular or not), then find the image or the kernel by solving equations.',
    'For conics, sketch the curve with its foci and directrices or asymptotes marked, and use the parameter to find tangents and normals.',
    'Set out proofs by induction and derivations of reduction formulae in full sentences, and end with a conclusion.',
  ], 'am-gce-further', 'Apply the initial conditions to the full solution y = CF + PI, never to the CF alone.',
  ['For y″ + 2y′ + 5y = 10, the particular integral is:', ['y = 2', 'y = 10', 'y = 10x', 'y = 5'], '5k = 10.'],
  [['Auxiliary equation', 'am² + bm + c = 0, whose roots give the complementary function.'], ['Singular transformation', 'One with determinant 0, which squashes the plane onto a line or a point.'], ['Full method', 'Every step written out, so that method marks can be given.']],
  [
    { q: 'Solve y″ + 2y′ + 5y = 10, with y(0) = 3 and y′(0) = 0.', steps: ['m² + 2m + 5 = 0 gives m = −1 ± 2i: CF = e^(−x)(A cos 2x + B sin 2x). PI: 5k = 10, so y = 2.', 'y(0) = A + 2 = 3, so A = 1. y′ = e^(−x)[(2B − A) cos 2x − (B + 2A) sin 2x], so y′(0) = 2B − 1 = 0 and B = ½.', '**y = e^(−x)(cos 2x + ½ sin 2x) + 2**.'] },
    { q: 'M = [2 1; 4 2]. Show that M maps the whole plane onto a line, and find the line and the kernel.', steps: ['det M = 4 − 4 = 0, so M is singular.', 'M(x, y) = (2x + y, 4x + 2y) = (2x + y)(1, 2): every image lies on y = 2x.', '**Image: the line y = 2x. Kernel: 2x + y = 0, the line y = −2x.** Rank 1, nullity 1.'] },
  ]),
];
