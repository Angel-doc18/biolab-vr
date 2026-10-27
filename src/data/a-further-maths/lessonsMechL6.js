// A Level Further Mathematics lessons (0775), Further Mechanics, Lower Sixth:
// acceleration depending on velocity or displacement, the envelope of
// trajectories, inclined-plane projectiles, variable forces and constant
// power, elastic energy, conical pendulums and banked tracks, centres of mass
// by integration, toppling and sliding, resisted motion and practical work.
// Original text written for this app; g = 9.8 m s⁻² unless a question says otherwise.

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

export const LESSONS_FML6 = [
  // ---------- 5. Variable acceleration ----------
  L('fme-va-1', 'fm-l6-variable-accel', '5.2', 'Acceleration as a function of velocity or displacement', 18, ['Kinematics'], [
    'When the acceleration is given in terms of t, integrate with respect to t. When it depends on the velocity or the displacement, write it so that only two variables appear: **a = dv/dt** to link v and t, or **a = v dv/dx** to link v and x, since dv/dt = (dv/dx)(dx/dt).',
    '**a = f(v)**: separate the variables, ∫ dv/f(v) = ∫ dt, or ∫ v dv/f(v) = ∫ dx. For example a = −kv gives v = ue^(−kt), and then x = (u/k)(1 − e^(−kt)).',
    '**a = f(x)**: v dv/dx = f(x), so ½v² = ∫ f(x) dx + c. An acceleration such as a = −9x, always towards O and proportional to x, gives the simple harmonic motion met in the Upper Sixth.',
    'If x is wanted in terms of t, the result v = dx/dt can be separated and integrated once more. Each integration has its own constant, fixed by the given conditions.',
  ], 'am-variable-motion', 'Choose dv/dt when the question is about time and v dv/dx when it is about distance.',
  ['To link velocity and displacement, the acceleration is written as:', ['v dv/dx', 'dv/dt', 'dx/dt', 'x dv/dx'], 'The chain rule: dv/dt = v dv/dx.'],
  [['a = v dv/dx', 'The acceleration written to link velocity and displacement.'], ['Separating the variables', 'Collecting each variable on its own side before integrating.'], ['Initial conditions', 'Given values, such as v = 8 when t = 0, that fix the constants.']],
  [
    { q: 'A particle has acceleration −0.5v m s⁻², with v = 8 m/s at x = 0 when t = 0. Find v and x in terms of t, and the total distance it travels.', steps: ['dv/dt = −0.5v, so ∫ dv/v = −0.5 ∫ dt: ln v = −0.5t + ln 8, v = 8e^(−0.5t).', 'x = ∫ 8e^(−0.5t) dt = −16e^(−0.5t) + c; x = 0 at t = 0 gives c = 16, so x = 16(1 − e^(−0.5t)).', 'As t → ∞, e^(−0.5t) → 0: **v = 8e^(−0.5t), x = 16(1 − e^(−0.5t)), and it travels at most 16 m**.'] },
    { q: 'A particle has acceleration 6x m s⁻² and is at x = 1 m with v = 2 m/s. Find its speed at x = 3 m.', steps: ['v dv/dx = 6x, so ½v² = 3x² + c.', 'x = 1, v = 2: 2 = 3 + c, c = −1, so v² = 6x² − 2.', 'At x = 3: v² = 52, **v = 2√13 ≈ 7.21 m/s**.'] },
    { q: 'A car’s deceleration is 0.05v² m s⁻². How far does it travel while slowing from 20 m/s to 10 m/s?', steps: ['v dv/dx = −0.05v², so dv/v = −0.05 dx.', 'ln(v/20) = −0.05x, so x = 20 ln(20/v).', 'At v = 10: **x = 20 ln 2 ≈ 13.9 m**.'] },
  ]),

  // ---------- 11. Oblique projectiles ----------
  L('fme-proj-1', 'fm-l6-oblique-projectiles', '11.3', 'The envelope of trajectories: which points can be reached', 17, ['Kinematics'], [
    'The equation of the path, y = x tan α − gx²(1 + tan²α)/(2u²), is a quadratic in T = tan α: (gx²/(2u²))T² − xT + (y + gx²/(2u²)) = 0. For a given point (x, y) it gives the angles of projection that pass through that point.',
    'Two real roots: two possible paths, a high one and a low one. A repeated root: the point can only just be reached. No real roots: the point is out of reach at that speed.',
    'Setting the discriminant to zero, x² − 4(gx²/(2u²))(y + gx²/(2u²)) = 0 simplifies to **y = u²/(2g) − gx²/(2u²)**. This parabola is the **envelope**, or bounding parabola, of all the paths: each path touches it, and none goes beyond it.',
    'Its vertex (0, u²/(2g)) is the height reached by throwing straight up, and it meets level ground at x = ±u²/g, the greatest range. It marks the safety boundary round fountains, fireworks and athletic throwing events.',
  ], 'am-envelope', 'Write the path as a quadratic in tan α: its discriminant tells you whether a point can be reached.',
  ['The highest point of the envelope y = u²/(2g) − gx²/(2u²) is at height:', ['u²/(2g)', 'u²/g', 'u/g', 'u²'], 'At x = 0: the height reached by throwing straight up.'],
  [['Envelope', 'The curve touched by every path; no path goes beyond it.'], ['Bounding parabola', 'y = u²/(2g) − gx²/(2u²) for launch speed u.'], ['Discriminant', 'b² − 4ac, which decides how many angles hit a point.']],
  [
    { q: 'A ball is thrown at 20 m/s (take g = 10 m/s²). Find the angles of projection that hit a point 30 m away horizontally and 5 m up.', steps: ['gx²/(2u²) = 10 × 900 ÷ 800 = 11.25, so 11.25T² − 30T + 16.25 = 0, that is 9T² − 24T + 13 = 0.', 'T = (24 ± √(576 − 468))/18 = (24 ± 10.39)/18, so tan α = 1.911 or 0.756.', '**α ≈ 62.4° or 37.1°**: a high path and a low path.'] },
    { q: 'At the same speed, can the ball reach the point (30, 20)?', steps: ['On the envelope at x = 30: y = 400/20 − 10 × 900/800 = 20 − 11.25.', 'The envelope is at 8.75 m there.', '**No**: 20 m is above the envelope, so no angle reaches it.'] },
  ]),

  // ---------- 12. Inclined-plane projectiles ----------
  L('fme-proj-2', 'fm-l6-inclined-projectiles', '12.1', 'Projection up and down an inclined plane', 18, ['Kinematics'], [
    'Take axes along the plane (up the slope) and perpendicular to it. Gravity then has components **g sin β down the slope** and **g cos β into the plane**. A particle projected up the slope with speed u at angle θ to the plane has initial components u cos θ along it and u sin θ away from it.',
    'Perpendicular to the plane the motion is like vertical motion on level ground with g cos β in place of g. The particle lands when that coordinate returns to 0: **T = 2u sin θ/(g cos β)**; it is furthest from the plane at half that time, at a distance u²sin²θ/(2g cos β).',
    'Along the plane, s = ut cos θ − ½g sin β t². At t = T this gives the range up the slope, **R = 2u² sin θ cos(θ + β)/(g cos²β)**. Since 2 sin θ cos(θ + β) = sin(2θ + β) − sin β, R is greatest when 2θ + β = 90°, that is θ = 45° − β/2, and the greatest range up the plane is **u²/(g(1 + sin β))**.',
    'Down the slope, replace β by −β: the greatest range is u²/(g(1 − sin β)), at θ = 45° + β/2. In both cases the best direction bisects the angle between the plane and the upward vertical.',
  ], 'am-inclined-projectile', 'Use axes along and perpendicular to the plane: the time of flight then comes from the perpendicular motion alone.',
  ['Up a plane inclined at β, the best angle to the plane for the greatest range is:', ['45° − β/2', '45° + β/2', '45°', '90° − β'], 'It bisects the angle between the plane and the vertical.'],
  [['Inclined plane', 'A plane sloping at angle β to the horizontal.'], ['Range on the plane', 'The distance along the slope to where the particle lands.'], ['Components of g', 'g sin β along the plane and g cos β perpendicular to it.']],
  [
    { q: 'A ball is projected up a plane inclined at 30°, at 20 m/s and 30° to the plane (take g = 10 m/s²). Find the time of flight and the range up the plane.', steps: ['T = 2 × 20 × sin 30° ÷ (10 cos 30°) = 20 ÷ 8.660 ≈ 2.31 s.', 'R = 2 × 400 × sin 30° × cos 60° ÷ (10 × cos²30°) = 200 ÷ 7.5.', '**T ≈ 2.31 s, R ≈ 26.7 m**: the greatest possible, since θ = 45° − 15°.'] },
    { q: 'For the same projection, find the greatest distance of the ball from the plane.', steps: ['d = u²sin²θ/(2g cos β).', '= 400 × 0.25 ÷ (20 × 0.866).', '**d ≈ 5.77 m**.'] },
    { q: 'Projected down the same plane at 20 m/s, what is the greatest range, and at what angle to the plane?', steps: ['Down the slope the greatest range is u²/(g(1 − sin β)).', '= 400 ÷ (10 × 0.5).', '**80 m, at 45° + 15° = 60° to the plane**.'] },
  ]),

  // ---------- 13. Work and power ----------
  L('fme-work-1', 'fm-l6-variable-work', '13.3', 'Work by a variable force and motion at constant power', 18, ['Dynamics'], [
    'A force that varies with position does work **W = ∫ F dx** over a displacement: the area under the force–displacement graph. Along a path in two dimensions, W = ∫ F · dr.',
    'The work–energy principle still holds: the total work done on a body equals its change in kinetic energy.',
    '**Power** is the rate of doing work: **P = dW/dt = F · v**, which is Fv for a force along the motion. A vehicle whose engine works at constant power P has driving force P/v: large at low speeds and falling as the speed rises.',
    'At constant power P against a constant resistance R, m dv/dt = P/v − R. The greatest speed is reached when P/v = R, so v = P/R. For a time, separate: ∫ mv/(P − Rv) dv = ∫ dt; for a distance, use v dv/dx: ∫ mv²/(P − Rv) dv = ∫ dx.',
  ], 'am-variable-force', 'With constant power the driving force is P/v, not a constant: write m dv/dt = P/v − R.',
  ['A force F = (6x − x²) N does work from x = 0 to x = 3 m of:', ['18 J', '9 J', '27 J', '6 J'], '[3x² − x³/3] (0 to 3).'],
  [['Variable force', 'A force whose size depends on position or time.'], ['Work as an integral', 'W = ∫ F dx, the area under the F–x graph.'], ['Constant power', 'P fixed, so the driving force P/v falls as the speed rises.']],
  [
    { q: 'A force F = (6x − x²) N acts along the x-axis on a 2 kg body that starts from rest at x = 0. Find the work done as it moves to x = 3 m, and its speed there.', steps: ['W = ∫ (0 to 3) (6x − x²) dx = [3x² − x³/3] (0 to 3) = 27 − 9 = 18 J.', 'By the work–energy principle, ½ × 2 × v² = 18.', '**W = 18 J and v = 3√2 ≈ 4.24 m/s**.'] },
    { q: 'A 1200 kg car’s engine works at a constant 24 kW against a constant resistance of 800 N. Find its greatest speed and its acceleration at 15 m/s.', steps: ['Greatest speed when P/v = R: v = 24 000 ÷ 800 = 30 m/s.', 'At 15 m/s the driving force is 24 000 ÷ 15 = 1600 N, so the resultant is 1600 − 800 = 800 N.', '**30 m/s; a = 800 ÷ 1200 ≈ 0.67 m s⁻²**.'] },
    { q: 'A 1000 kg car starts from rest with its engine at a constant 20 kW. Ignoring resistance, find its speed after 10 s.', steps: ['m dv/dt = P/v, so mv dv = P dt.', '½mv² = Pt, so v = √(2Pt/m) = √(2 × 20 000 × 10 ÷ 1000).', '**v = 20 m/s**.'] },
  ]),

  // ---------- 16. Elasticity ----------
  L('fme-el-1', 'fm-l6-elasticity', '16.2', 'Elastic potential energy and energy problems', 18, ['Dynamics'], [
    'Stretching an elastic string or spring from extension 0 to x takes work ∫ (0 to x) (λs/l) ds = **λx²/(2l)**, the area of the triangle under the tension–extension graph. It is stored as **elastic potential energy** (EPE) and given back as the string shortens.',
    'With no friction or air resistance, **kinetic energy + gravitational potential energy + elastic potential energy** stays the same. Where friction acts, the work it does is the energy lost.',
    'An elastic string shorter than its natural length is **slack**: no tension and no EPE. A spring can also be compressed, storing λx²/(2l) for a compression x.',
    '**Combining springs** of stiffness k = λ/l: in series, 1/k = 1/k₁ + 1/k₂; side by side (in parallel), k = k₁ + k₂.',
  ], 'am-elastic-energy', 'List every energy at the start and at the end (kinetic, gravitational and elastic), and check whether the string is slack.',
  ['A spring of natural length 0.5 m and modulus 50 N is compressed by 0.1 m. It stores:', ['0.5 J', '1 J', '0.25 J', '5 J'], '50 × 0.01 ÷ (2 × 0.5).'],
  [['Elastic potential energy', 'λx²/(2l), the energy stored in a stretched or compressed string or spring.'], ['Slack', 'An elastic string shorter than its natural length, with no tension.'], ['Conservation of energy', 'KE + GPE + EPE is constant when no friction or resistance acts.']],
  [
    { q: 'A 0.5 kg particle hangs from an elastic string of natural length 1 m and modulus 20 N. It is pulled 0.4 m below its equilibrium position and released. Find its speed as it passes the equilibrium position.', steps: ['Equilibrium: 20e/1 = 0.5 × 9.8, so e = 0.245 m; the particle is released at extension 0.645 m.', 'EPE given up: 10(0.645² − 0.245²) = 3.56 J; GPE gained in rising 0.4 m: 0.5 × 9.8 × 0.4 = 1.96 J.', 'KE = 3.56 − 1.96 = 1.6 J, so v² = 6.4: **v ≈ 2.53 m/s**.'] },
    { q: 'A 70 kg bungee jumper falls from a bridge on a rope of natural length 20 m and modulus 1400 N. Ignoring air resistance, find the greatest extension.', steps: ['At the lowest point the jumper is at rest: GPE lost = EPE stored, 70 × 9.8 × (20 + x) = 1400x² ÷ 40.', '686(20 + x) = 35x², so x² − 19.6x − 392 = 0.', 'x = (19.6 + √1952.16)/2 = (19.6 + 44.18)/2: **x ≈ 31.9 m**, 51.9 m below the bridge.'] },
  ]),

  // ---------- 21. Conical pendulums and banked tracks ----------
  L('fme-circ-2', 'fm-l6-conical-banked', '21.1', 'Conical pendulums and banked tracks', 18, ['Dynamics'], [
    '**Conical pendulum**: a particle on a string of length l moves in a horizontal circle with the string at angle θ to the vertical. Vertically, T cos θ = mg; horizontally, T sin θ = mrω² with r = l sin θ. So **T = mlω²** and **cos θ = g/(lω²)**, and the period is 2π√(l cos θ/g).',
    '**Level bends**: a vehicle going round a bend of radius r needs a force mv²/r towards the centre. On a level road friction provides it, so v² ≤ μrg: the greatest speed is **√(μrg)**.',
    '**Smooth banked track** at angle θ: the normal reaction R provides it. R cos θ = mg and R sin θ = mv²/r, so **tan θ = v²/(rg)**: at that speed there is no tendency to slip.',
    '**Rough banked track**: faster, friction acts down the slope; slower, up the slope. At the greatest speed (μR down the slope), R cos θ − μR sin θ = mg and R sin θ + μR cos θ = mv²/r, so **v² = rg(tan θ + μ)/(1 − μ tan θ)**; for the least speed change the signs of μ.',
  ], 'am-banked', 'Resolve vertically (no acceleration) and horizontally (towards the centre), not along the slope.',
  ['On a level road, the force towards the centre on a car going round a bend comes from:', ['friction', 'the weight', 'the engine', 'the normal reaction'], 'Sideways friction between the tyres and the road.'],
  [['Conical pendulum', 'A particle on a string moving in a horizontal circle, the string tracing a cone.'], ['Banking', 'Tilting a track so that the normal reaction helps to provide the force towards the centre.'], ['Limiting friction', 'F = μR, when the vehicle is about to slip.']],
  [
    { q: 'A 0.2 kg particle on a string 0.5 m long moves as a conical pendulum at 6 rad/s. Find the tension and the angle of the string to the vertical.', steps: ['T = mlω² = 0.2 × 0.5 × 36 = 3.6 N.', 'cos θ = g/(lω²) = 9.8 ÷ 18 = 0.544.', '**T = 3.6 N, θ ≈ 57°**.'] },
    { q: 'A bend of radius 80 m is banked at 20°, with μ = 0.3. Find the greatest and least speeds without slipping.', steps: ['tan 20° = 0.364. Greatest: v² = 80 × 9.8 × (0.364 + 0.3) ÷ (1 − 0.3 × 0.364) = 520.6 ÷ 0.891 = 584.', 'Least: v² = 784 × (0.364 − 0.3) ÷ (1 + 0.109) = 45.2.', '**Greatest ≈ 24.2 m/s, least ≈ 6.7 m/s**.'] },
  ]),

  // ---------- 22. Centres of mass ----------
  L('fme-com-1', 'fm-l6-com-calculus', '22.2', 'Centres of mass by integration', 18, ['Statics'], [
    'For a uniform lamina bounded by y = f(x), the x-axis and x = a, x = b, divide it into thin strips of width δx, each with its centre at (x, ½y): **x̄ = ∫ xy dx ÷ ∫ y dx** and **ȳ = ∫ ½y² dx ÷ ∫ y dx**.',
    'For a uniform solid of revolution about the x-axis, divide it into thin discs of volume πy²δx: **x̄ = ∫ xy² dx ÷ ∫ y² dx** (the π cancels), and the centre of mass lies on the axis.',
    'Results worth knowing: semicircular lamina, 4r/(3π) from the centre; semicircular arc, 2r/π; sector of angle 2α, 2r sin α/(3α); arc of angle 2α, r sin α/α; solid hemisphere, 3r/8 from the plane face; hollow hemisphere, r/2; solid cone, h/4 above the base; hollow cone, h/3.',
    'By symmetry, a uniform body has its centre of mass on every axis of symmetry: use this first, and integrate only for the coordinate that is still unknown.',
  ], 'am-com-calculus', 'Draw one typical strip or disc, write its mass and the position of its own centre, then integrate both.',
  ['The uniform lamina under y = x² from x = 0 to 2 has x̄ =', ['1.5', '1', '1.2', '2'], '∫ x³ dx ÷ ∫ x² dx = 4 ÷ 8/3.'],
  [['Centre of mass', 'The point where the whole weight can be taken to act.'], ['Strip method', 'Dividing a lamina into thin strips, each with a known centre.'], ['Disc method', 'Dividing a solid of revolution into thin discs.']],
  [
    { q: 'Find the centre of mass of the uniform lamina under y = x² from x = 0 to x = 2.', steps: ['Area ∫ (0 to 2) x² dx = 8/3.', '∫ x³ dx = 4, so x̄ = 4 ÷ 8/3 = 1.5; ∫ ½x⁴ dx = [x⁵/10] (0 to 2) = 3.2, so ȳ = 3.2 ÷ 8/3 = 1.2.', '**(1.5, 1.2)**.'] },
    { q: 'Show that the centre of mass of a uniform solid hemisphere of radius r is 3r/8 from its plane face.', steps: ['Turn y² = r² − x², 0 ≤ x ≤ r, about the x-axis.', '∫ (0 to r) x(r² − x²) dx = r⁴/4 and ∫ (0 to r) (r² − x²) dx = 2r³/3.', '**x̄ = (r⁴/4) ÷ (2r³/3) = 3r/8**.'] },
  ]),

  // ---------- 23. Rigid bodies ----------
  L('fme-com-2', 'fm-l6-rigid-equilibrium', '23.3', 'Composite bodies, suspended laminae and toppling or sliding', 18, ['Statics'], [
    '**Composite bodies**: treat each part as a particle at its own centre of mass, so x̄ = Σmx ÷ Σm. A hole counts as a negative mass; for a uniform lamina, areas stand in for masses.',
    '**Suspended bodies**: a body hanging freely from a point rests with its centre of mass vertically below that point. The angle an edge makes with the vertical comes from the right-angled triangle formed by the point, the centre of mass and that edge.',
    '**Toppling or sliding** on a rough plane at angle α: on the point of toppling, the centre of mass is vertically above the lower edge of the base; on the point of sliding, tan α = μ. A uniform cuboid of width w and height h topples when tan α = w/h, so it slides first if μ < w/h and topples first if μ > w/h.',
    'The same idea applies to a box on a level floor pushed by a horizontal force P at height d: it slides when P = μmg and is about to topple, about the far bottom edge, when Pd = mg × w/2.',
  ], 'am-topple', 'For toppling, find when the vertical through the centre of mass passes through the edge the body would turn about.',
  ['A hole cut from a lamina is treated as:', ['a negative mass at its own centre', 'a positive mass', 'nothing', 'a point at the corner'], 'Subtract its moment.'],
  [['Composite body', 'A body made of simple parts whose centres of mass are known.'], ['Point of suspension', 'The point from which a body hangs freely.'], ['On the point of toppling', 'The centre of mass is vertically above the edge the body would turn about.']],
  [
    { q: 'A uniform rectangular lamina occupies 0 ≤ x ≤ 6, 0 ≤ y ≤ 4 (cm). The square 4 ≤ x ≤ 6, 2 ≤ y ≤ 4 is cut away. Find the centre of mass.', steps: ['Whole: area 24 at (3, 2). Square: area 4 at (5, 3). Remainder: area 20.', 'x̄ = (24 × 3 − 4 × 5) ÷ 20 = 2.6; ȳ = (24 × 2 − 4 × 3) ÷ 20 = 1.8.', '**(2.6, 1.8)**.'] },
    { q: 'That lamina hangs freely from the corner (0, 4). Find the angle the edge x = 0 makes with the vertical.', steps: ['From (0, 4) to G(2.6, 1.8) is 2.6 across and 2.2 down.', 'tan φ = 2.6 ÷ 2.2.', '**φ ≈ 49.8°**.'] },
    { q: 'A uniform cube rests on a rough plane, μ = 0.8, whose angle is slowly increased. Does it slide or topple first?', steps: ['For a cube w/h = 1, so it would topple at tan α = 1 (45°).', 'It slides when tan α = 0.8, which comes first.', '**It slides first, at α ≈ 38.7°**.'] },
  ]),

  // ---------- 25. Resisted motion ----------
  L('fme-res-1', 'fm-l6-resisted', '25.1', 'Resisted motion and terminal velocity', 18, ['Dynamics'], [
    'Air and water resistance depend on the speed. Two common models are **R = kv** (small, slow objects) and **R = kv²** (larger, faster ones). Newton’s second law becomes a differential equation, solved by separating the variables.',
    '**Horizontal motion** against resistance alone: m dv/dt = −kv gives v = ue^(−kt/m) and x = (mu/k)(1 − e^(−kt/m)); in this model the body never quite stops but travels at most mu/k. With R = kv², mv dv/dx = −kv² gives v = ue^(−kx/m).',
    '**Falling from rest** with R = kv: m dv/dt = mg − kv gives **v = (mg/k)(1 − e^(−kt/m))**, rising towards the **terminal velocity mg/k**, at which the resistance balances the weight.',
    'With R = kv² the terminal velocity is **√(mg/k)**, and v dv/dx gives v² = (mg/k)(1 − e^(−2kx/m)). For a body thrown upwards, weight and resistance both act downwards: m dv/dt = −mg − kv.',
  ], 'am-terminal', 'Use dv/dt for questions about time and v dv/dx for questions about distance; find a terminal velocity by setting the acceleration to zero.',
  ['A boat slowing against resistance kv loses speed with distance:', ['at a steady rate (linearly)', 'exponentially', 'not at all', 'as 1/x'], 'mv dv/dx = −kv gives dv/dx = −k/m.'],
  [['Resistance', 'A force opposing the motion, modelled as kv or kv².'], ['Terminal velocity', 'The steady speed at which the resistance balances the weight or driving force.'], ['Separating the variables', 'Rearranging so that each variable is integrated on its own.']],
  [
    { q: 'A 2 kg particle falls from rest against a resistance of 0.5v N. Find its terminal velocity and its speed after 4 s.', steps: ['Terminal velocity mg/k = 19.6 ÷ 0.5 = 39.2 m/s.', 'v = 39.2(1 − e^(−0.5t/2)); at t = 4, v = 39.2(1 − e^(−1)).', '**39.2 m/s; v(4) ≈ 24.8 m/s**.'] },
    { q: 'A 400 kg boat moving at 6 m/s cuts its engine; the water resistance is 100v N. How far does it travel before its speed falls to 1 m/s?', steps: ['400v dv/dx = −100v, so dv/dx = −0.25.', 'v = 6 − 0.25x.', '**v = 1 when x = 20 m**.'] },
    { q: 'A 75 kg skydiver falls against a resistance of 0.3v² N. Find the terminal speed.', steps: ['At terminal speed 0.3v² = 75 × 9.8.', 'v² = 2450.', '**v ≈ 49.5 m/s**.'] },
  ]),

  // ---------- 26. The papers ----------
  L('fme-l6-paper', 'fm-l6-papers', '26.3', 'Further Mechanics in the papers: drills, practical work and uncertainties', 15, ['Examination'], [
    'Further Mechanics questions run through the Further Mathematics papers. Begin each with a clear diagram showing every force, the positive direction and the axes, and state the model used (particle, light string, smooth surface).',
    'Lower Sixth Paper 1 drills: relative velocity, elastic energy λx²/(2l), centres of mass of standard shapes, the envelope and inclined-plane results, and terminal velocities mg/k and √(mg/k).',
    'The scheme also asks for practical work in mechanics: record readings in a table with units, plot a straight-line graph (period² against length for a pendulum, extension against load for a spring), find the gradient from a large triangle on the best-fit line, and estimate the uncertainty from the spread of repeated readings.',
    'The percentage uncertainty of a product or quotient is about the sum of the percentage uncertainties of its parts; for a square it is twice that of the quantity.',
  ], 'am-gce-further', 'In mechanics answers, a clear force diagram earns credit before any equation does.',
  ['The uncertainty in a period T is 1%. The uncertainty in T² is about:', ['2%', '1%', '0.5%', '4%'], 'Squaring doubles the percentage uncertainty.'],
  [['Force diagram', 'A sketch showing every force acting on the body.'], ['Gradient', 'The slope of a straight-line graph, read from a large triangle.'], ['Percentage uncertainty', 'The uncertainty as a percentage of the measured value.']],
  [
    { q: 'Loads of 1 N to 5 N give extensions of 2.1, 4.0, 6.1, 7.9 and 10.0 mm on a spring. Find its stiffness.', steps: ['The best-fit line rises about (10.0 − 2.1) ÷ (5 − 1) ≈ 1.98 mm per newton.', 'Stiffness = load per unit extension = 1 ÷ 1.98 N/mm ≈ 0.506 N/mm.', '**k ≈ 506 N/m**.'] },
    { q: 'A pendulum of length 1.000 m ± 0.005 m has period 2.00 s ± 0.02 s. Find g = 4π²l/T² and its uncertainty.', steps: ['g = 4π² × 1.000 ÷ 4.00 = 9.87 m s⁻².', 'Uncertainties: l 0.5%, T 1%, so T² 2%, and g about 0.5% + 2% = 2.5%.', '**g = 9.87 ± 0.25 m s⁻²**.'] },
  ]),
];
