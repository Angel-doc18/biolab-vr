// Extra questions for the end of the Further Mathematics lessons (0775), so
// that every lesson ends with at least five questions on what it teaches. The
// Further Mechanics questions are in lessonQuestionsMech.js.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { MECH_QUESTIONS } from './lessonQuestionsMech';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth ----------
  'fp-roots-1': [
    Q('For x³ − 4x + 2 = 0, α² + β² + γ² =', ['8', '−8', '4', '16'], '0² − 2(−4) = 8.'),
    Q('The equation with roots α + 1, β + 1, γ + 1 is found by substituting:', ['x = y − 1', 'x = y + 1', 'x = 1/y', 'x = y²'], 'y = x + 1, so x = y − 1.'),
    Q('For x³ − 6x² + 11x − 6 = 0, 1/α + 1/β + 1/γ =', ['11/6', '6/11', '1', '−11/6'], 'Σαβ ÷ αβγ = 11 ÷ 6.'),
    Q('A cubic with real coefficients has the root 2 + i. Another root is:', ['2 − i', '−2 + i', '−2 − i', '2'], 'Non-real roots come in conjugate pairs.'),
  ],
  'fp-polar-1': [
    Q('r = 5 sec θ in Cartesian form is:', ['x = 5', 'y = 5', 'x² + y² = 25', 'y = 5x'], 'r cos θ = 5.'),
    Q('The point (0, −3) in polar form, with r ≥ 0 and −π < θ ≤ π, is:', ['(3, −π/2)', '(3, π/2)', '(−3, π/2)', '(3, π)'], 'It is 3 units below the pole.'),
    Q('x² + y² = 9 in polar form is:', ['r = 3', 'r = 9', 'θ = 3', 'r = 3 cos θ'], 'r² = 9.'),
    Q('The half-line y = x, x > 0, in polar form is:', ['θ = π/4', 'r = π/4', 'θ = 1', 'r = x'], 'Every point is at angle π/4.'),
  ],
  'fp-polar-2': [
    Q('r = θ, for θ ≥ 0, is:', ['a spiral', 'a circle', 'a cardioid', 'a rose'], 'r grows steadily with θ.'),
    Q('The lemniscate r² = a² cos 2θ exists only where:', ['cos 2θ ≥ 0', 'sin θ ≥ 0', 'θ > 0', 'r > a'], 'r² cannot be negative.'),
    Q('The area enclosed by r = 2a cos θ, from ½ ∫ r² dθ between −π/2 and π/2, is:', ['πa²', '2πa²', '4πa²', 'πa²/2'], 'A circle of radius a.'),
    Q('The greatest value of r on r = 3 + 2 cos θ is:', ['5', '3', '1', '2'], 'At θ = 0.'),
  ],
  'fp-dm-1': [
    Q('If ω is a non-real cube root of unity, 1 + ω + ω² =', ['0', '1', '3', 'ω'], 'The roots of unity add up to 0.'),
    Q('The roots of z⁴ = 16 are:', ['±2 and ±2i', '2 only', '±4', '±2'], 'Modulus 2, arguments 0, π/2, π, 3π/2.'),
    Q('The roots of z⁵ = w are spaced round a circle at angles of:', ['2π/5', 'π/5', '5π', '2π'], 'n roots, 2π/n apart.'),
    Q('The conjugate pair of roots e^(±iθ) gives the real factor:', ['z² − 2z cos θ + 1', 'z² + 1', 'z² − 2z sin θ + 1', 'z − cos θ'], 'Sum 2 cos θ, product 1.'),
  ],
  'fp-hyp-1': [
    Q('sinh 2x =', ['2 sinh x cosh x', 'sinh²x + cosh²x', '2 sinh x', 'cosh²x − 1'], 'From the exponential definitions.'),
    Q('cosh 2x in terms of sinh x is:', ['1 + 2sinh²x', '1 − 2sinh²x', '2sinh²x − 1', 'sinh²x'], 'Osborn’s rule on cos 2x = 1 − 2sin²x.'),
    Q('Osborn’s rule turns 1 + tan²x = sec²x into:', ['1 − tanh²x = sech²x', '1 + tanh²x = sech²x', 'tanh²x − 1 = sech²x', '1 − tanh²x = cosh²x'], 'tan²x hides a product of two sines.'),
    Q('The equation cosh x = ½:', ['has no real solution', 'has the solution x = 0', 'has two solutions', 'has the solution x = ln 2'], 'cosh x ≥ 1 for every x.'),
  ],
  'fp-hyp-2': [
    Q('arcosh x is defined only for:', ['x ≥ 1', 'x ≤ 1', 'all x', '−1 < x < 1'], 'cosh x ≥ 1.'),
    Q('artanh x has vertical asymptotes at:', ['x = ±1', 'y = ±1', 'x = 0', 'x = ±π/2'], 'tanh x lies between −1 and 1.'),
    Q('arsinh(3/4) =', ['ln 2', 'ln 3', '¾', 'ln ¾'], 'ln(3/4 + 5/4).'),
    Q('The graph of y = arsinh x is the reflection of y = sinh x in:', ['the line y = x', 'the x-axis', 'the y-axis', 'the origin'], 'As for every inverse function.'),
  ],
  'fp-hcalc-1': [
    Q('d/dx (sech x) =', ['−sech x tanh x', 'sech x tanh x', 'sech²x', '−cosech²x'], 'Quotient rule on 1/cosh x.'),
    Q('For x > 2, d/dx arcosh(x/2) =', ['1/√(x² − 4)', '1/√(x² + 4)', '2/√(x² − 4)', '1/(4 − x²)'], '(½)/√(x²/4 − 1).'),
    Q('The least value of 5 cosh x − 3 sinh x is:', ['4', '2', '5', '8'], 'At x = ln 2.'),
    Q('The gradient of y = tanh x at x = 0 is:', ['1', '0', '−1', '½'], 'sech²0 = 1.'),
  ],
  'fp-hcalc-2': [
    Q('lim (h → 0) [(x + h)² − x²]/h =', ['2x', 'x²', '2x + h', '0'], '(2xh + h²)/h → 2x.'),
    Q('The nth derivative of e^(−x) is:', ['(−1)ⁿe^(−x)', 'e^(−x)', '−e^(−x)', 'ne^(−x)'], 'Each derivative multiplies by −1.'),
    Q('d²/dx² (x sin x) =', ['2 cos x − x sin x', '−x sin x', '2 cos x + x sin x', 'cos x − x sin x'], 'Differentiate sin x + x cos x.'),
    Q('In Leibniz’s theorem, the coefficient of u′v⁽ⁿ⁻¹⁾ is:', ['n', '1', 'n − 1', 'nC2'], 'nCn−1 = n.'),
  ],
  'fp-hcalc-3': [
    Q('∫ (0 to 4) 1/√(x² + 9) dx =', ['ln 3', 'ln 4', 'arsinh 4', '4/3'], 'arsinh(4/3) = ln 3.'),
    Q('For x > 5, ∫ 1/√(x² − 25) dx =', ['arcosh(x/5) + c', 'arsinh(x/5) + c', 'sin⁻¹(x/5) + c', '(1/5)tan⁻¹(x/5) + c'], 'a = 5.'),
    Q('To integrate 1/√(x² + 6x + 10), first write the quadratic as:', ['(x + 3)² + 1', '(x + 6)² + 10', '(x + 3)² − 1', '(x − 3)² + 1'], 'Complete the square.'),
    Q('The substitution x = 2 sinh u turns √(x² + 4) into:', ['2 cosh u', '2 sinh u', '4 cosh u', 'cosh²u'], '4sinh²u + 4 = 4cosh²u.'),
  ],
  'fp-l6-paper1': [
    Q('For x³ − 2x² + kx − 6 = 0 with α² + β² + γ² = 2, k =', ['1', '2', '−1', '3'], '4 − 2k = 2.'),
    Q('|(i + 2j) × (3i − k)| =', ['√41', '√14', '7', '41'], 'The product is −2i + j − 6k.'),
    Q('The determinant of [2 1; 5 3] is:', ['1', '11', '−1', '6'], '6 − 5.'),
    Q('r = 6 cos θ is a circle of radius:', ['3', '6', '12', '√6'], 'x² + y² = 6x.'),
  ],
  'fp-l6-paper2': [
    Q('The plane x − 5y − 3z = −5 has normal:', ['i − 5j − 3k', 'i + 5j + 3k', '−5k', 'i − j − k'], 'The coefficients of x, y and z.'),
    Q('7ⁿ − 1 is divisible by 6 for every positive integer n. This is proved by:', ['induction', 'a counter-example', 'contradiction alone', 'drawing a graph'], 'Basis, assumption, step, conclusion.'),
    Q('Unless told otherwise, Further Mathematics answers should be:', ['exact', 'to one decimal place', 'whole numbers', 'in standard form'], 'Keep surds, π and logarithms.'),
    Q('To find where a line meets a plane, substitute into the plane’s equation:', ['the parametric form of the line', 'the normal vector', 'the origin', 'only the direction vector'], 'Then solve for the parameter.'),
  ],

  // ---------- Upper Sixth ----------
  'fp-lt-1': [
    Q('The kernel of [1 2; 2 4] is the line through O in the direction of:', ['(2, −1)', '(1, 2)', '(1, 1)', '(2, 4)'], 'x + 2y = 0.'),
    Q('A transformation with det M = 3 multiplies areas by:', ['3', '9', '⅓', '1'], '|det M| is the area scale factor.'),
    Q('The image of [1 1 2; 0 1 1; 1 2 3] is the plane:', ['z = x + y', 'x + y + z = 0', 'z = 0', 'x = y'], 'Each column has third entry equal to the sum of the first two.'),
    Q('Reflection in the x-axis has matrix:', ['[1 0; 0 −1]', '[−1 0; 0 1]', '[0 1; 1 0]', '[1 0; 0 1]'], 'i stays, j goes to −j.'),
  ],
  'fp-eig-1': [
    Q('The eigenvalues of [4 1; 2 3] are:', ['5 and 2', '4 and 3', '7 and 10', '1 and 2'], 'λ² − 7λ + 10 = 0.'),
    Q('An eigenvector of [4 1; 2 3] for λ = 5 is:', ['(1, 1)', '(1, −2)', '(1, 0)', '(2, 1)'], '[4 1; 2 3](1, 1) = (5, 5).'),
    Q('If Ax = 3x, then A²x =', ['9x', '3x', '6x', 'x'], 'A(3x) = 3Ax = 9x.'),
    Q('The eigenvalues of [4 0 1; 0 1 0; 2 0 3] are:', ['1, 2 and 5', '4, 1 and 3', '1, 3 and 4', '2, 3 and 5'], '(1 − λ)(λ² − 7λ + 10) = 0.'),
  ],
  'fp-eig-2': [
    Q('With D = [5 0; 0 2], D³ =', ['[125 0; 0 8]', '[15 0; 0 6]', '[125 8; 0 0]', '[5 0; 0 8]'], 'Cube each diagonal entry.'),
    Q('For A = [4 1; 2 3], A³ =', ['[86 39; 78 47]', '[64 1; 8 27]', '[18 7; 14 11]', '[125 0; 0 8]'], 'PD³P⁻¹.'),
    Q('For a symmetric matrix with unit eigenvectors as the columns of P, P⁻¹ =', ['Pᵀ', 'P', 'D', '−P'], 'P is orthogonal.'),
    Q('The Cayley–Hamilton theorem says that a square matrix satisfies:', ['its own characteristic equation', 'A² = I', 'det A = 0', 'A = Aᵀ'], 'For [4 1; 2 3], A² − 7A + 10I = 0.'),
  ],
  'fp-ser-1': [
    Q('The series for e^(−x) begins:', ['1 − x + x²/2', '1 + x + x²/2', '1 − x − x²/2', '−1 + x'], 'Replace x by −x in eˣ.'),
    Q('Up to x³, eˣ sin x =', ['x + x² + x³/3', 'x + x³/6', '1 + x + x²', 'x − x³/6'], 'Multiply the two series.'),
    Q('The series for ln(1 + 2x) is valid for:', ['−½ < x ≤ ½', '−1 < x ≤ 1', 'all x', '|x| < 2'], '−1 < 2x ≤ 1.'),
    Q('Using sin x ≈ x − x³/6, sin 0.1 ≈', ['0.0998333', '0.1', '0.0983', '0.0999833'], '0.1 − 0.001/6.'),
  ],
  'fp-ser-2': [
    Q('The Taylor series of ln x about x = 1 begins:', ['(x − 1) − (x − 1)²/2', 'x − x²/2', '1 + (x − 1)', 'x + x²/2'], 'f(1) = 0, f′(1) = 1, f″(1) = −1.'),
    Q('lim (x → 0) (1 − cos 2x)/x² =', ['2', '½', '1', '4'], '(2x² − …)/x².'),
    Q('Using √x ≈ 2 + (x − 4)/4, √4.2 ≈', ['2.05', '2.1', '2.02', '2.4'], '2 + 0.2/4.'),
    Q('ln x has no Maclaurin series because:', ['ln 0 is not defined', 'ln x is an odd function', 'its derivatives are all zero', 'it is periodic'], 'A Maclaurin series needs f(0).'),
  ],
  'fp-red-1': [
    Q('∫ (0 to π/2) sin⁶x dx =', ['5π/32', '3π/16', '8/15', 'π/4'], '(5/6)(3/4)(1/2)(π/2).'),
    Q('∫ (0 to 1) x³eˣ dx =', ['6 − 2e', 'e − 2', '2e − 6', '1'], 'I₃ = e − 3I₂ with I₂ = e − 2.'),
    Q('For Iₙ = ∫ (0 to π/2) cosⁿx dx, I₃ =', ['2/3', 'π/4', '1/3', '3π/16'], '(2/3)I₁ with I₁ = 1.'),
    Q('In a reduction formula for ∫ tanⁿx dx, tan²x is replaced by:', ['sec²x − 1', '1 − sec²x', 'cos²x', 'sec x − 1'], 'Then ∫ tanⁿ⁻²x sec²x dx is direct.'),
  ],
  'fp-arc-1': [
    Q('The length of y = cosh x from x = 0 to x = ln 2 is:', ['¾', 'ln 2', '5/4', '1'], 'sinh(ln 2).'),
    Q('For x = t², y = (2/3)t³, √((dx/dt)² + (dy/dt)²) =', ['2t√(1 + t²)', '2t + 2t²', '√(1 + t²)', '4t³'], '√(4t² + 4t⁴).'),
    Q('For the cardioid r = a(1 + cos θ), r² + (dr/dθ)² =', ['2a²(1 + cos θ)', 'a²', 'a²(1 + cos θ)²', '2a² sin θ'], 'cos²θ + sin²θ = 1.'),
    Q('The length of y = 2x from x = 0 to x = 3 is:', ['3√5', '6', '9', '√13'], '√(1 + 4) × 3.'),
  ],
  'fp-arc-2': [
    Q('A sphere of radius 3 has surface area:', ['36π', '9π', '12π', '36'], '4π × 9.'),
    Q('For y = x³ turned about the x-axis, the surface area integrand is:', ['2πx³√(1 + 9x⁴)', 'πx⁶', '2πx³', '√(1 + 9x⁴)'], '2πy ds with ds = √(1 + 9x⁴) dx.'),
    Q('Turning about the y-axis, the radius of each band is:', ['x', 'y', 's', '2π'], 'S = 2π ∫ x ds.'),
    Q('Which uses the first power of y?', ['the surface area 2π ∫ y ds', 'the volume π ∫ y² dx', 'both', 'neither'], 'Area of a band 2πy δs.'),
  ],
  'fp-imp-1': [
    Q('∫ (0 to ∞) xe^(−2x) dx =', ['¼', '½', '1', '2'], 'By parts, as a limit.'),
    Q('∫ (0 to 1) ln x dx =', ['−1', '0', '1', '∞'], '[x ln x − x], with x ln x → 0.'),
    Q('∫ (−1 to 1) 1/x² dx:', ['diverges', 'equals −2', 'equals 2', 'equals 0'], '1/x² is infinite at 0.'),
    Q('As x → 0 from above, x ln x tends to:', ['0', '−∞', '1', '∞'], 'x shrinks faster than ln x grows.'),
  ],
  'fp-con-1': [
    Q('The tangent to y² = 8x at (2, 4) is:', ['y = x + 2', 'y = 2x', 'y = −x + 6', 'y = x − 2'], 'ty = x + at² with t = 1, a = 2.'),
    Q('The eccentricity of x²/25 + y²/9 = 1 is:', ['4/5', '3/5', '5/4', '9/25'], '9 = 25(1 − e²).'),
    Q('The foci of x²/25 + y²/9 = 1 are:', ['(±4, 0)', '(±5, 0)', '(0, ±4)', '(±3, 0)'], '(±ae, 0) with ae = 4.'),
    Q('A parametric form of x²/a² + y²/b² = 1 is:', ['(a cos θ, b sin θ)', '(at², 2at)', '(a sec θ, b tan θ)', '(ct, c/t)'], 'cos²θ + sin²θ = 1.'),
  ],
  'fp-con-2': [
    Q('The eccentricity of x²/16 − y²/9 = 1 is:', ['5/4', '4/5', '3/4', '√2'], '9 = 16(e² − 1).'),
    Q('A rectangular hyperbola has eccentricity:', ['√2', '1', '2', '½'], 'a = b, so e² = 2.'),
    Q('The tangent to xy = 16 at (8, 2) is:', ['x + 4y = 16', 'x + 2y = 12', '4x + y = 34', 'x − 4y = 0'], 'x + t²y = 2ct with c = 4, t = 2.'),
    Q('3x² − 5y² = 15 is:', ['a hyperbola', 'an ellipse', 'a parabola', 'a circle'], 'x²/5 − y²/3 = 1.'),
  ],
  'fp-de-1': [
    Q('With y = vx, dy/dx =', ['v + x dv/dx', 'x dv/dx', 'v dv/dx', 'v + dv/dx'], 'Product rule.'),
    Q('The solution of dy/dx = (x² + y²)/(xy) with y = 2 when x = 1 is:', ['y² = 2x²(ln x + 2)', 'y = 2x', 'y² = x² + 3', 'y = 2 + ln x'], 'From ½v² = ln x + c.'),
    Q('dy/dx + y/x = xy² has the general solution:', ['y = 1/(cx − x²)', 'y = cx − x²', 'y = x² + c', 'y = ce^(−x)'], 'z = 1/y = cx − x².'),
    Q('Which of these is homogeneous?', ['dy/dx = (x + y)/x', 'dy/dx = x + 1', 'dy/dx = y²', 'dy/dx = eˣ'], 'It is a function of y/x only.'),
  ],
  'fp-de-2': [
    Q('The solution of ẍ + 4x = 3 sin t with x = ẋ = 0 at t = 0 is:', ['x = sin t − ½ sin 2t', 'x = sin t', 'x = 3 sin t', 'x = sin 2t − sin t'], 'A = 0, B = −½.'),
    Q('Resonance in ẍ + ω²x = F cos pt happens when:', ['p = ω', 'p = 0', 'F = 0', 'p = 2ω'], 'Forcing at the natural frequency.'),
    Q('If 3 is a repeated root of the auxiliary equation and f(x) = e^(3x), try:', ['kx²e^(3x)', 'kxe^(3x)', 'ke^(3x)', 'kx³'], 'Multiply by x².'),
    Q('With damping, as t grows the solution approaches:', ['the particular integral', 'the complementary function', 'zero in every case', 'infinity'], 'The CF dies away.'),
  ],
  'fp-num-1': [
    Q('For dy/dx = x + y, y(0) = 1 and h = 0.1, Euler’s method gives y(0.2) ≈', ['1.22', '1.2', '1.21', '1.2428'], '1.1, then 1.1 + 0.12.'),
    Q('The exact solution of dy/dx = x + y with y(0) = 1 is:', ['y = 2eˣ − x − 1', 'y = eˣ', 'y = eˣ + x', 'y = 1 + x'], 'Check: y′ = 2eˣ − 1 = x + y.'),
    Q('From dy/dx = x + y, d²y/dx² =', ['1 + dy/dx', 'x + y', '1', 'y'], 'Differentiate the equation.'),
    Q('Compared with Euler’s method, the Taylor series method with the h² term is usually:', ['more accurate', 'less accurate', 'exactly the same', 'impossible to use'], 'It keeps more terms.'),
  ],
  'fp-num-2': [
    Q('Simpson’s rule with 4 strips gives ∫ (0 to 1) e^(−x²) dx ≈', ['0.7469', '0.7314', '0.7778', '0.8556'], '(0.25/3)(8.962265).'),
    Q('For a decreasing function, rectangles with right-hand heights give:', ['a lower bound', 'an upper bound', 'the exact value', 'no bound'], 'They lie under the curve.'),
    Q('Halving h in Simpson’s rule divides the error by about:', ['16', '2', '4', '8'], 'The error is about proportional to h⁴.'),
    Q('The bounds 0.6345 and 0.7595 trap the value of:', ['ln 2', 'e', 'π/4', '½'], '∫ (1 to 2) 1/x dx.'),
  ],
  'fp-grp-1': [
    Q('In {1, 3, 5, 7} under multiplication modulo 8, 3 × 5 =', ['7', '15', '1', '5'], '15 ≡ 7 (mod 8).'),
    Q('In {1, 3, 5, 7} under multiplication modulo 8, the inverse of 7 is:', ['7', '1', '3', '5'], '49 ≡ 1.'),
    Q('The identity for addition modulo 4 on {0, 1, 2, 3} is:', ['0', '1', '4', '3'], 'a + 0 = a.'),
    Q('Which set is not a group under multiplication?', ['the integers', 'the non-zero rationals', 'the non-zero reals', '{1, −1}'], '2 has no inverse among the integers.'),
  ],
  'fp-grp-2': [
    Q('By Lagrange’s theorem, a group of order 6 can only have subgroups of order:', ['1, 2, 3 and 6', '1, 2, 4 and 6', '1 and 6', '1, 3, 4 and 6'], 'The divisors of 6.'),
    Q('The cube roots of unity under multiplication are generated by:', ['ω', '1', '0', '−1'], 'ω, ω² and ω³ = 1.'),
    Q('{1, i, −1, −i} under multiplication is isomorphic to:', ['{0, 1, 2, 3} under addition modulo 4', '{1, 3, 5, 7} under multiplication modulo 8', '{1, −1}', 'the integers under addition'], 'Both are cyclic of order 4.'),
    Q('The symmetries of an equilateral triangle form a group that is:', ['not abelian', 'cyclic', 'of order 3', 'of order 9'], 'Order 6; rotations and reflections do not commute.'),
  ],
  'fp-u6-paper1': [
    Q('r = 1 + cos θ and r = 3 cos θ meet, away from the pole, where θ =', ['±π/3', '±π/6', '0', 'π'], 'cos θ = ½.'),
    Q('∫ (0 to π/2) cos⁴x dx =', ['3π/16', 'π/4', '8/15', '3/8'], '(3/4)(1/2)(π/2).'),
    Q('In a group of order 8, no element can have order:', ['3', '2', '4', '8'], '3 does not divide 8.'),
    Q('For an ellipse with a = 5 and e = 3/5, b =', ['4', '3', '5', '16'], 'b² = 25(1 − 9/25) = 16.'),
  ],
  'fp-u6-paper2': [
    Q('The auxiliary equation m² + 2m + 5 = 0 has roots:', ['−1 ± 2i', '1 ± 2i', '−2 ± i', '−1 and −5'], 'm = (−2 ± √(4 − 20))/2.'),
    Q('The solution of y″ + 2y′ + 5y = 10 with y(0) = 3 and y′(0) = 0 is:', ['y = e^(−x)(cos 2x + ½ sin 2x) + 2', 'y = 3e^(−x) cos 2x', 'y = e^(−x) cos 2x + 2', 'y = 2 + sin 2x'], 'A = 1, B = ½.'),
    Q('[2 1; 4 2] maps the plane onto the line:', ['y = 2x', 'y = −2x', 'y = x/2', 'x = 0'], 'Every image is a multiple of (1, 2).'),
    Q('The kernel of [2 1; 4 2] is the line:', ['y = −2x', 'y = 2x', 'y = x', 'x = 0'], '2x + y = 0.'),
  ],
  ...MECH_QUESTIONS,
};
