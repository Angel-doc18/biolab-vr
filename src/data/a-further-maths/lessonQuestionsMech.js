// Extra questions for the end of the Further Mechanics lessons (0775), so that
// every lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const MECH_QUESTIONS = {
  // ---------- Lower Sixth ----------
  'fme-va-1': [
    Q('With a = −0.5v and v = 8 m/s at t = 0, v =', ['8e^(−0.5t)', '8 − 0.5t', '8/(1 + 0.5t)', '8e^(0.5t)'], 'Separate: ln v = −0.5t + ln 8.'),
    Q('That particle travels a total distance of:', ['16 m', '8 m', '4 m', 'an unlimited distance'], 'x = 16(1 − e^(−0.5t)) → 16.'),
    Q('With a = 6x, starting at x = 1 m with v = 2 m/s, v² =', ['6x² − 2', '6x²', '3x² + 1', '6x² + 4'], '½v² = 3x² − 1.'),
    Q('With a deceleration of 0.05v², slowing from 20 m/s to 10 m/s takes a distance of:', ['20 ln 2 ≈ 13.9 m', '10 m', '200 m', '20 m'], 'x = 20 ln(20/v).'),
  ],
  'fme-proj-1': [
    Q('At 20 m/s (g = 10 m/s²), the angles that hit the point (30, 5) are about:', ['62.4° and 37.1°', '45° only', '30° and 60°', 'none'], 'Roots of 9T² − 24T + 13 = 0.'),
    Q('At 20 m/s (g = 10 m/s²), the envelope at x = 30 m is at height:', ['8.75 m', '20 m', '11.25 m', '5 m'], '20 − 11.25.'),
    Q('A point exactly on the envelope can be hit by:', ['exactly one angle', 'two angles', 'no angle', 'every angle'], 'A repeated root.'),
    Q('The envelope meets level ground at a distance of:', ['u²/g', 'u²/(2g)', '2u²/g', 'u/g'], 'The greatest range.'),
  ],
  'fme-proj-2': [
    Q('At 20 m/s, 30° to a plane inclined at 30° (g = 10), the time of flight is about:', ['2.31 s', '2 s', '4 s', '1.15 s'], '20 ÷ (10 cos 30°).'),
    Q('The greatest distance from the plane in that case is about:', ['5.77 m', '10 m', '20 m', '2.89 m'], 'u²sin²θ/(2g cos β).'),
    Q('Projected down a plane inclined at 30° at 20 m/s (g = 10), the greatest range is:', ['80 m', '40 m', '26.7 m', '20 m'], 'u²/(g(1 − sin β)).'),
    Q('The direction for the greatest range up the plane bisects the angle between:', ['the plane and the vertical', 'the plane and the horizontal', 'the vertical and the horizontal', 'the plane and the ground'], 'θ = 45° − β/2 to the plane.'),
  ],
  'fme-work-1': [
    Q('A 24 kW car against a resistance of 800 N has greatest speed:', ['30 m/s', '19.2 m/s', '3 m/s', '300 m/s'], 'P/R.'),
    Q('At 15 m/s that 1200 kg car accelerates at about:', ['0.67 m s⁻²', '1.33 m s⁻²', '0', '1.6 m s⁻²'], '(1600 − 800) ÷ 1200.'),
    Q('From rest at a constant 20 kW with no resistance, a 1000 kg car reaches after 10 s:', ['20 m/s', '200 m/s', '10 m/s', '14.1 m/s'], 'v = √(2Pt/m).'),
    Q('At constant power, as the speed rises the driving force:', ['decreases', 'increases', 'stays the same', 'becomes zero at once'], 'It is P/v.'),
  ],
  'fme-el-1': [
    Q('A 0.5 kg mass on a string with λ = 20 N and l = 1 m has equilibrium extension:', ['0.245 m', '0.5 m', '0.1 m', '2.45 m'], 'mgl/λ.'),
    Q('A 70 kg bungee jumper on a 20 m rope with λ = 1400 N reaches a greatest extension of about:', ['31.9 m', '20 m', '9.8 m', '51.9 m'], 'Root of x² − 19.6x − 392 = 0.'),
    Q('Springs of stiffness 40 N/m and 60 N/m in series have stiffness:', ['24 N/m', '100 N/m', '50 N/m', '20 N/m'], '1/k = 1/40 + 1/60.'),
    Q('When an elastic string goes slack, its elastic potential energy is:', ['zero', 'greatest', 'λ/2', 'mgl'], 'There is no extension.'),
  ],
  'fme-circ-2': [
    Q('A 0.2 kg conical pendulum with l = 0.5 m turning at 6 rad/s has tension:', ['3.6 N', '1.96 N', '7.2 N', '0.6 N'], 'mlω².'),
    Q('Its string makes with the vertical an angle of about:', ['57°', '33°', '45°', '60°'], 'cos θ = 9.8/18.'),
    Q('On a bend of radius 80 m banked at 20° with μ = 0.3, the greatest speed is about:', ['24 m/s', '17 m/s', '6.7 m/s', '40 m/s'], 'v² = rg(tan θ + μ)/(1 − μ tan θ).'),
    Q('On that bend, the least speed without slipping down is about:', ['6.7 m/s', '0', '17 m/s', '24 m/s'], 'v² = rg(tan θ − μ)/(1 + μ tan θ).'),
  ],
  'fme-com-1': [
    Q('For the lamina under y = x² from 0 to 2, ȳ =', ['1.2', '1.5', '2', '0.6'], '∫ ½x⁴ dx ÷ ∫ x² dx.'),
    Q('In the disc method for a solid of revolution, the factor π:', ['cancels', 'doubles', 'is squared', 'becomes 2π'], 'It appears above and below.'),
    Q('A uniform hollow hemisphere has its centre of mass from the plane face at:', ['r/2', '3r/8', '2r/π', 'r/3'], 'A standard result.'),
    Q('A uniform hollow cone of height h has its centre of mass above the base at:', ['h/3', 'h/4', 'h/2', '2h/3'], 'Like a triangle.'),
  ],
  'fme-com-2': [
    Q('The 6 cm by 4 cm lamina with a 2 cm square cut from one corner has its centre of mass at:', ['(2.6, 1.8)', '(3, 2)', '(2.5, 2)', '(3.2, 1.6)'], 'Treat the square as negative.'),
    Q('A uniform cube on a slope with μ = 0.8, as the slope steepens:', ['slides first, at about 38.7°', 'topples first, at 45°', 'topples and slides together', 'never moves'], 'tan α reaches 0.8 before 1.'),
    Q('A cuboid 10 cm wide and 30 cm tall on a slope with μ = 0.5:', ['topples first', 'slides first', 'never moves', 'slides and topples together'], 'w/h = ⅓ < μ.'),
    Q('A box of weight W and width w is pushed by a horizontal force P at height d. It is on the point of toppling when:', ['Pd = W × w/2', 'P = μW', 'P = W', 'Pd = W'], 'Moments about the far bottom edge.'),
  ],
  'fme-res-1': [
    Q('A 2 kg particle falling against 0.5v N has terminal velocity:', ['39.2 m/s', '19.6 m/s', '4.9 m/s', '9.8 m/s'], 'mg/k.'),
    Q('Its speed after 4 s is about:', ['24.8 m/s', '39.2 m/s', '19.6 m/s', '14.4 m/s'], '39.2(1 − e^(−1)).'),
    Q('A 400 kg boat at 6 m/s against 100v N slows to 1 m/s after travelling:', ['20 m', '24 m', '5 m', '10 m'], 'v = 6 − 0.25x.'),
    Q('A body thrown upwards against resistance kv has the equation:', ['m dv/dt = −mg − kv', 'm dv/dt = −mg + kv', 'm dv/dt = mg − kv', 'm dv/dt = −kv'], 'Both forces act downwards while it rises.'),
  ],
  'fme-l6-paper': [
    Q('Extensions 2.1, 4.0, 6.1, 7.9 and 10.0 mm for loads of 1 to 5 N give a stiffness of about:', ['506 N/m', '2 N/m', '50 N/m', '1975 N/m'], 'About 1.98 mm per newton.'),
    Q('With T = 2.00 s ± 1% and l = 1.000 m ± 0.5%, g = 4π²l/T² has an uncertainty of about:', ['2.5%', '1.5%', '1%', '0.5%'], '0.5% + 2 × 1%.'),
    Q('Springs of stiffness 30 N/m and 60 N/m in series have stiffness:', ['20 N/m', '90 N/m', '45 N/m', '30 N/m'], '1/k = 1/30 + 1/60.'),
    Q('To find a gradient accurately, use:', ['a large triangle on the best-fit line', 'two neighbouring data points', 'the first point only', 'the intercept'], 'Small triangles magnify reading errors.'),
  ],

  // ---------- Upper Sixth ----------
  'fme-vc-1': [
    Q('With u = 7 m/s on a 0.8 m string, the speed at the top is:', ['4.2 m/s', '7 m/s', '5.77 m/s', '0'], 'v² = 49 − 31.36.'),
    Q('The tension at the top for that 0.5 kg particle is about:', ['6.1 N', '11 N', '4.9 N', '0'], 'mv²/a − mg.'),
    Q('When the string is horizontal, the tension is:', ['mv²/a', 'mg', 'mv²/a + mg', '0'], 'The weight has no component along the string.'),
    Q('In vertical circles, energy is used to find:', ['the speed', 'the tension', 'the period', 'the radius'], 'Then F = ma gives the tension.'),
  ],
  'fme-vc-2': [
    Q('On a 1 m string with u = 6 m/s, the string goes slack when cos θ (from the lowest point) is about:', ['−0.56', '0.56', '−1', '2/3'], '(2ga − u²)/(3ga).'),
    Q('On a light rod of length 0.5 m, the least speed at the bottom to complete the circle is just over:', ['4.43 m/s', '4.95 m/s', '3.13 m/s', '2.21 m/s'], 'u² > 4ga = 19.6.'),
    Q('A particle sliding from rest at the top of a smooth sphere of radius 2 m leaves the surface after dropping:', ['about 0.67 m', '1 m', '2 m', '0.5 m'], 'a(1 − ⅔).'),
    Q('Inside a smooth tube, which can push either way, the condition to complete the circle is:', ['u² > 4ga', 'u² ≥ 5ga', 'u² > 2ga', 'u > 0'], 'Like a rod.'),
  ],
  'fme-rp-1': [
    Q('At 30 m/s and 30° with k = 0.1 s⁻¹, the greatest height is reached after about:', ['1.42 s', '1.53 s', '3.06 s', '10 s'], '10 ln(11.3/9.8).'),
    Q('The greatest height in that case is about:', ['10.4 m', '11.5 m', '15 m', '45.9 m'], '150 − 139.6.'),
    Q('The horizontal distance to the greatest height is about:', ['34.5 m', '39.8 m', '26 m', '259.8 m'], '259.8(1 − e^(−0.1424)).'),
    Q('Without resistance, the greatest height would be:', ['11.5 m', '10.4 m', '22.9 m', '15 m'], '15² ÷ (2 × 9.8).'),
  ],
  'fme-imp-1': [
    Q('In the example, A’s velocity component along the line of centres after impact is:', ['0.25 m/s', '2.5 m/s', '1.5 m/s', '4.33 m/s'], 'From 5 = 5a + 3.75.'),
    Q('B moves off at:', ['1.5 m/s along the line of centres', '2.5 m/s', '4.33 m/s across it', '0.25 m/s'], 'B had no velocity across the line.'),
    Q('The kinetic energy lost in that collision is about:', ['2.81 J', '25 J', '0', '6.25 J'], '25 − 22.19.'),
    Q('For smooth spheres, the impulse on each sphere is:', ['along the line of centres', 'along its velocity', 'perpendicular to the line of centres', 'zero'], 'There is no friction between them.'),
  ],
  'fme-imp-2': [
    Q('In the wall example, the ball rebounds at an angle to the wall of about:', ['16°', '30°', '60°', '45°'], 'tan β = 0.5 tan 30°.'),
    Q('A ball dropped from 5 m with e = 0.6 rises on its second bounce to:', ['0.648 m', '1.8 m', '3 m', '0.36 m'], 'e⁴h.'),
    Q('The total time that ball spends bouncing is about:', ['4.04 s', '1.01 s', '2.02 s', 'unlimited'], 't₀(1 + 2e/(1 − e)).'),
    Q('In the three-sphere example, how many collisions take place in all?', ['three', 'two', 'one', 'four'], 'A catches B a second time.'),
  ],
  'fme-shm-1': [
    Q('SHM with period 4 s and amplitude 0.3 m has greatest speed about:', ['0.47 m/s', '0.3 m/s', '0.74 m/s', '1.57 m/s'], 'aω with ω = π/2.'),
    Q('Starting at the centre, that particle first reaches 0.15 m from the centre after:', ['⅓ s', '1 s', '½ s', '⅙ s'], 'sin(πt/2) = ½.'),
    Q('With v = 3 m/s at x = 1 m and v = 2 m/s at x = 2 m, the amplitude is about:', ['2.53 m', '2 m', '3 m', '1.58 m'], 'a² = 6.4.'),
    Q('The period of SHM does not depend on:', ['the amplitude', 'ω', 'the mass and stiffness', 'the length of a pendulum'], 'Period 2π/ω.'),
  ],
  'fme-shm-2': [
    Q('The greatest speed of that 0.4 kg mass, released 0.1 m from equilibrium, is about:', ['0.99 m/s', '0.1 m/s', '9.9 m/s', '0.31 m/s'], 'aω = 0.1 × 9.9.'),
    Q('For a 1 kg particle on a string with λ = 49 N and l = 1 m, the equilibrium extension is:', ['0.2 m', '0.5 m', '1 m', '0.1 m'], 'mgl/λ.'),
    Q('Released 0.5 m below equilibrium, that string:', ['goes slack 0.2 m above equilibrium', 'never goes slack', 'breaks', 'goes slack at once'], 'The amplitude is more than the equilibrium extension.'),
    Q('A simple pendulum 0.8 m long has period about:', ['1.8 s', '0.29 s', '0.9 s', '5.7 s'], '2π√(0.8/9.8).'),
  ],
  'fme-mi-1': [
    Q('A uniform disc of mass 3 kg and radius 0.4 m has moment of inertia about its axis:', ['0.24 kg m²', '0.48 kg m²', '0.12 kg m²', '1.2 kg m²'], '½ × 3 × 0.16.'),
    Q('Its radius of gyration is about:', ['0.28 m', '0.4 m', '0.2 m', '0.08 m'], '√0.08.'),
    Q('A 20 kg disc flywheel of radius 0.25 m at 300 rev/min has kinetic energy about:', ['308 J', '617 J', '31 J', '9870 J'], '½ × 0.625 × (10π)².'),
    Q('To find I for a uniform disc about its axis, the elements are:', ['thin rings', 'thin rods across the disc', 'small squares', 'thin discs'], 'Each ring is at one distance from the axis.'),
  ],
  'fme-mi-2': [
    Q('A uniform disc about an axis perpendicular to it through a point on its rim:', ['3ma²/2', '½ma²', 'ma²', '5ma²/4'], '½ma² + ma².'),
    Q('A uniform rod of mass m and length l about a perpendicular axis l/4 from its centre:', ['7ml²/48', 'ml²/12', 'ml²/3', 'ml²/16'], 'ml²/12 + ml²/16.'),
    Q('The rod-and-disc pendulum in the example has, about the top of the rod:', ['about 2.34 kg m²', '2.01 kg m²', '0.33 kg m²', '1.34 kg m²'], '⅓ + 2.01.'),
    Q('The perpendicular axes theorem applies only to:', ['laminae', 'solid spheres', 'rods along the axis', 'every body'], 'All the mass must lie in one plane.'),
  ],
  'fme-rot-1': [
    Q('A 2 m uniform rod pivoted at one end and released from horizontal has angular speed at the vertical of about:', ['3.83 rad/s', '2.21 rad/s', '4.43 rad/s', '1.57 rad/s'], 'ω² = 3g/2.'),
    Q('A uniform solid sphere rolling from rest down through 2 m reaches:', ['5.29 m/s', '6.26 m/s', '5.11 m/s', '4.43 m/s'], 'v² = 10gh/7.'),
    Q('In rolling without slipping, the friction at the contact point:', ['does no work', 'does negative work', 'does the most work', 'is always zero'], 'The contact point does not move.'),
    Q('A spinning skater pulls their arms in, reducing I. Their angular speed:', ['increases', 'decreases', 'stays the same', 'becomes zero'], 'Iω is conserved.'),
  ],
  'fme-vw-1': [
    Q('A smooth ladder at θ to the horizontal, held by a horizontal string at its foot, has string tension:', ['½W cot θ', 'W tan θ', '½W', '½W tan θ'], 'From virtual work.'),
    Q('Two jointed rods on a smooth floor, held by a string between their feet, each at θ to the vertical: the tension is:', ['½W tan θ', 'W tan θ', '½W cot θ', 'W'], 'From virtual work.'),
    Q('In virtual work, a weight W whose height rises by δy does work:', ['−W δy', 'W δy', '0', 'W/δy'], 'It acts downwards.'),
    Q('For conservative forces, the principle of virtual work is the same as:', ['dV/dθ = 0', 'V = 0', 'd²V/dθ² > 0', 'V being the same everywhere'], 'δW = −δV.'),
  ],
  'fme-stab-1': [
    Q('For the bead on the hoop with modulus 4W, the stable positions are at about what angle from the top?', ['83.6°', '180°', '41.8°', '90°'], 'sin(θ/2) = 2/3.'),
    Q('For that bead, the lowest point of the hoop is:', ['an unstable position of equilibrium', 'a stable position', 'not a position of equilibrium', 'neutral'], 'V is greatest there.'),
    Q('A solid hemisphere resting on its curved surface on a level table is:', ['stable', 'unstable', 'neutral', 'not in equilibrium'], 'Tilting raises its centre of mass.'),
    Q('If d²V/dθ² = 0 at a position of equilibrium, you should:', ['look at higher derivatives or nearby values of V', 'call it stable', 'call it unstable', 'ignore it'], 'The second derivative does not decide.'),
  ],
  'fme-cat-1': [
    Q('The length of that chain (c = 25 m, supports 20 m apart) is about:', ['20.5 m', '20 m', '25 m', '22 m'], '50 sinh 0.4.'),
    Q('With w = 2 N/m and c = 25 m, the horizontal tension is:', ['50 N', '25 N', '54 N', '2 N'], 'T₀ = wc.'),
    Q('The greatest tension in that chain, at the supports, is about:', ['54 N', '50 N', '100 N', '27 N'], 'T = wy with y ≈ 27.03.'),
    Q('Near its lowest point, a catenary is close to:', ['a parabola', 'a circle', 'a straight line', 'an ellipse'], 'cosh(x/c) ≈ 1 + x²/(2c²).'),
  ],
  'fme-field-1': [
    Q('Along y = 2x² instead of y = 2x, the work done by F = 2xy i + x² j from (0, 0) to (1, 2) is:', ['2, the same', '8', '0', '4'], 'The field is conservative.'),
    Q('F = Pi + Qj (on a region without holes) is conservative when:', ['∂P/∂y = ∂Q/∂x', 'P = Q', '∂P/∂x = ∂Q/∂y', 'P + Q = 0'], 'The test for a conservative field.'),
    Q('The work done by F = y i − x j once round the unit circle, anticlockwise, is:', ['−2π', '0', '2π', 'π'], '∫ (0 to 2π) −dt.'),
    Q('A potential energy exists only for:', ['conservative fields', 'every field', 'friction', 'fields that are zero'], 'The work must not depend on the path.'),
  ],
  'fme-u6-paper': [
    Q('A particle on a 0.5 m string given 4.5 m/s at the bottom:', ['goes slack above the centre', 'completes the circle', 'oscillates', 'stops at once'], '9.8 < 20.25 < 24.5.'),
    Q('Its speed when the string goes slack is about:', ['1.87 m/s', '0', '3.5 m/s', '4.5 m/s'], 'v² = −ga cos θ.'),
    Q('For a compound pendulum, the period of small oscillations depends on:', ['I, m, g and the distance of G from the axis', 'the amplitude', 'the mass only', 'nothing'], 'ω² = mgh/I.'),
    Q('If you cannot finish an early part of a structured question, you should:', ['use the answer the question gives and carry on', 'stop the question', 'guess every later answer', 'leave the paper'], 'Later marks are still available.'),
  ],
};
