// A Level Physics lessons added for the 2026/2027 Lower Sixth scheme of work:
// vector algebra, precision instruments and graphs, calculus kinematics and
// measuring g, coplanar forces and friction, two-dimensional collisions,
// variable forces and human power, banking and the whirling bung, SHM
// practicals and resonance, temperature scales, calorimetry, conductivity and
// radiation, the Young modulus experiment, fluids, gas-law practicals and p-V
// diagrams, and the Lower Sixth revision lessons. Original text written for
// this app. g = 9.8 N/kg unless stated.

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
  // ---------- Physical quantities and measurement ----------
  L('ap-measure-3', 'ap-measure', '1.2', 'Vector algebra: components, unit vectors, dot and cross products', 15, ['Vectors'], [
    'A vector can be written in **component form** with the **unit vectors i, j and k**, each of magnitude 1, along the x, y and z axes: **A = Ax i + Ay j + Az k**. Its magnitude is |A| = √(Ax² + Ay² + Az²); in two dimensions its direction is θ = tan⁻¹(Ay ÷ Ax) from the x-axis. Vectors are added or subtracted **component by component**: if A = 3i + 4j and B = i − 2j, then A + B = 4i + 2j.',
    'Resolving coplanar forces: to find the resultant of several forces, resolve each into x and y components, add the x components and the y components separately (ΣFx and ΣFy), then **R = √(ΣFx² + ΣFy²)** at an angle tan⁻¹(ΣFy ÷ ΣFx). For equilibrium both sums must be zero.',
    'The **scalar (dot) product** of two vectors is a scalar: **A·B = |A||B| cos θ = AxBx + AyBy + AzBz**, where θ is the angle between them. It is zero when the vectors are perpendicular. Work is a dot product, **W = F·s = Fs cos θ**, and so is power, P = F·v.',
    'The **vector (cross) product** is a vector of magnitude **|A × B| = |A||B| sin θ**, at right angles to both A and B, its direction given by the **right-hand rule**: curl the fingers of the right hand from A towards B and the thumb points along A × B. It is zero for parallel vectors, and B × A = −(A × B); for the unit vectors, i × j = k, j × k = i and k × i = j. The moment (torque) of a force is τ = r × F, and the magnetic force on a moving charge is F = qv × B.',
  ], 'ap-dot-cross', 'Dot product: cos θ, gives a scalar. Cross product: sin θ, gives a perpendicular vector.',
  ['For A = 3i + 4j and B = 4i − 3j, A·B equals:', ['0, so the vectors are perpendicular', '25', '7', '24'], '3 × 4 + 4 × (−3) = 0.'],
  [['Unit vector', 'A vector of magnitude 1 that shows a direction, such as i, j and k.'], ['Scalar product', 'A·B = |A||B| cos θ, a scalar.'], ['Vector product', 'A × B, of magnitude |A||B| sin θ and perpendicular to both vectors.']],
  [
    { q: 'Forces of 10 N at 0°, 8.0 N at 90° and 6.0 N at 210° act at a point. Find the resultant.', steps: ['x: 10 + 0 + 6.0 cos 210° = 10 − 5.20 = **4.80 N**.', 'y: 0 + 8.0 + 6.0 sin 210° = 8.0 − 3.00 = **5.00 N**.', 'R = √(4.80² + 5.00²) = **6.9 N**, at tan⁻¹(5.00 ÷ 4.80) = **46°** to the 10 N force.'] },
    { q: 'Find the work done by a force F = (3i + 2j) N that moves a body through s = (4i − j) m.', steps: ['W = F·s = 3 × 4 + 2 × (−1).', '= 12 − 2 = **10 J**.'] },
  ]),

  L('ap-measure-4', 'ap-measure', '1.4', 'Precision instruments, standard deviation and straight-line graphs', 16, ['Measurement', 'Practical'], [
    '**Vernier calipers** read to 0.1 mm (some to 0.02 mm): the main scale gives whole millimetres up to the vernier zero, and the vernier mark that lines up exactly with a main-scale mark gives the tenths. The **micrometer screw gauge** reads to 0.01 mm: the sleeve shows whole and half millimetres, and the thimble, with 50 divisions for each 0.5 mm turn, gives hundredths. Check for and correct any **zero error** (the reading with the jaws closed), and turn the micrometer by its ratchet so that every reading uses the same pressure.',
    'Repeated readings x₁, x₂, … xₙ are summarised by their **mean**, x̄ = Σx ÷ n, and their **standard deviation**, σ = √(Σ(x − x̄)² ÷ (n − 1)), which measures their spread; about two-thirds of the readings lie within one standard deviation of the mean. The **fractional uncertainty** is Δx ÷ x and the percentage uncertainty 100 × Δx ÷ x. Measuring the thickness of 20 sheets of paper together and dividing by 20 makes the percentage uncertainty twenty times smaller.',
    'Straight-line graphs: rearrange the expected relation into **y = mx + c**. For example, T = 2π√(l/g) becomes T² = (4π²/g) l, so plot T² against l and the gradient is 4π²/g. For a power law y = kxⁿ, plot lg y against lg x: the gradient is n and the intercept is lg k. Draw the line of best fit with points scattered evenly on both sides; find the gradient from a triangle covering at least half the line; read the intercept at x = 0, or calculate it from c = y − mx.',
    '**Error bars** show ± the uncertainty of each plotted point. The uncertainty in a gradient is estimated by drawing the **worst acceptable line**, the steepest or shallowest line that still passes through all the error bars, and comparing its gradient with that of the best line.',
  ], 'ap-best-fit', 'Rearrange into y = mx + c before plotting: then the gradient means something.',
  ['A micrometer reads 5.5 mm on the sleeve and 28 divisions (0.01 mm each) on the thimble. The reading is:', ['5.78 mm', '5.28 mm', '33.5 mm', '8.30 mm'], '5.5 + 0.28.'],
  [['Zero error', 'The reading an instrument gives when it should read zero.'], ['Standard deviation', 'A measure of the spread of repeated readings about their mean.'], ['Error bar', 'A line through a plotted point showing ± its uncertainty.']],
  [
    { q: 'Five readings of a wire’s diameter are 0.52, 0.50, 0.53, 0.51 and 0.49 mm. Find the mean and the standard deviation.', steps: ['Mean = 2.55 ÷ 5 = **0.510 mm**.', 'Deviations: +0.01, −0.01, +0.02, 0, −0.02; their squares add up to 0.0010 mm².', 'σ = √(0.0010 ÷ 4) = **0.016 mm**, so d = 0.510 ± 0.016 mm.'] },
    { q: 'Pendulum data give a graph of T² against l with a gradient of 4.02 s² m⁻¹. Find g.', steps: ['T² = (4π²/g) l, so the gradient = 4π²/g.', 'g = 4π² ÷ 4.02 = 39.48 ÷ 4.02 = **9.82 m s⁻²**.'] },
  ]),

  // ---------- Kinematics ----------
  L('ap-kin-3', 'ap-kinematics', '2.3', 'Kinematics with calculus, and measuring g', 16, ['Kinematics', 'Practical'], [
    'Velocity is the rate of change of displacement and acceleration the rate of change of velocity: **v = ds/dt** and **a = dv/dt = d²s/dt²**. Going the other way, displacement is the integral of velocity, s = ∫v dt (the area under the v-t graph), and velocity is the integral of acceleration. For example, if s = 2t³ − 3t² (s in m, t in s), then v = 6t² − 6t and a = 12t − 6: the body is momentarily at rest at t = 1 s, where a = 6 m s⁻².',
    'With a constant acceleration a, integrating twice gives the familiar equations v = u + at and s = ut + ½at². When the acceleration changes, these equations no longer apply: use calculus, or the gradients and areas of graphs.',
    'Practical: **g with light gates**. A card of known length L on a falling mass interrupts two light gates a vertical distance h apart. The data logger gives the speeds u = L ÷ t₁ and v = L ÷ t₂, and g = (v² − u²) ÷ 2h. With a **ticker timer** (50 dots per second), a tape pulled by a falling mass shows the displacement in equal time intervals T; each interval is longer than the one before by gT². Friction at the timer makes ticker-tape values a little low.',
    'Practical: **projectile range**. Fire a ball from a spring launcher at the same speed at angles from 15° to 75°, marking where it lands on carbon paper. On level ground the range is greatest near 45°, and complementary angles (such as 30° and 60°) give nearly equal ranges. Find the launch speed by firing horizontally from a table of height h: the time of fall is t = √(2h/g), so u = range ÷ t. Air resistance makes real ranges a little shorter and the best angle slightly less than 45°.',
  ], 'ap-calculus-graphs', 'Differentiate to go from s to v to a; integrate (area under the graph) to go back.',
  ['If s = 4t² + 2t (s in m, t in s), the velocity at t = 3 s is:', ['26 m s⁻¹', '42 m s⁻¹', '8 m s⁻¹', '24 m s⁻¹'], 'v = ds/dt = 8t + 2.'],
  [['Instantaneous velocity', 'ds/dt, the gradient of the displacement-time graph at an instant.'], ['Light gate', 'A sensor that times how long a card blocks a beam of light.'], ['Ticker timer', 'A device that marks a moving tape with dots at fixed time intervals.']],
  [
    { q: 'For s = 2t³ − 3t², find when the body is at rest and its acceleration at t = 2 s.', steps: ['v = ds/dt = 6t² − 6t = 6t(t − 1): at rest at **t = 0 and t = 1 s**.', 'a = dv/dt = 12t − 6.', 'At t = 2 s, a = 24 − 6 = **18 m s⁻²**.'] },
    { q: 'A 5.0 cm card passes two light gates 0.60 m apart, taking 0.025 s and then 0.0126 s. Find g.', steps: ['u = 0.050 ÷ 0.025 = **2.0 m s⁻¹**; v = 0.050 ÷ 0.0126 = **3.97 m s⁻¹**.', 'g = (v² − u²) ÷ 2h = (15.75 − 4.00) ÷ 1.20.', '= **9.8 m s⁻²**.'] },
  ]),

  // ---------- Dynamics ----------
  L('ap-dyn-3', 'ap-dynamics', '3.3', 'Collisions in two dimensions and the air track', 15, ['Momentum', 'Practical'], [
    'Momentum is a vector, so in a two-dimensional collision it is conserved **separately in each of two perpendicular directions**: the total x-momentum before equals the total x-momentum after, and the same for y. When a moving ball makes an **elastic** glancing collision with an identical ball at rest, the two move off at **90°** to each other, a result seen in snooker and in particle tracks.',
    'Practical: **collisions on a linear air track**. Gliders float on a cushion of air, so friction is almost removed. Each glider carries a card of known length that passes through light gates, giving its velocity before and after the collision. Spring-steel bumpers give nearly elastic collisions; a pin and plasticine make the gliders stick together (perfectly inelastic). Compare the total momentum, and the total kinetic energy, before and after each collision.',
    'Typical results: momentum is conserved within the experimental uncertainty in every collision; kinetic energy is (nearly) conserved only with the spring bumpers. In a perfectly inelastic collision with a target at rest, the fraction of kinetic energy lost is greater when the target is heavier. Sources of error: a track that is not quite level, the remaining friction, and a card that is not perpendicular to the beam.',
    'The **coefficient of restitution**, e = relative speed of separation ÷ relative speed of approach, measures how bouncy a collision is: e = 1 for a perfectly elastic collision and e = 0 when the bodies stick together. A ball dropped from a height h₁ that rebounds to h₂ has e = √(h₂ ÷ h₁).',
  ], 'ap-2d-collision', 'Resolve momentum along two perpendicular directions and conserve each separately.',
  ['In a two-dimensional collision, momentum is conserved:', ['in each of two perpendicular directions separately', 'only along the original direction of motion', 'only if the collision is elastic', 'never'], 'Momentum is a vector.'],
  [['Air track', 'A track whose gliders float on air, so friction is negligible.'], ['Coefficient of restitution', 'Relative speed of separation ÷ relative speed of approach.'], ['Glancing collision', 'A collision after which the bodies move off at angles to the original line.']],
  [
    { q: 'A 0.20 kg puck at 3.0 m s⁻¹ hits an identical puck at rest. Afterwards the first moves at 1.5 m s⁻¹ at 60° to its original direction. Find the velocity of the second.', steps: ['Momentum before: 0.60 kg m s⁻¹ along x, 0 along y.', 'First puck after: x = 0.20 × 1.5 cos 60° = **0.15**; y = 0.20 × 1.5 sin 60° = **0.26 kg m s⁻¹**.', 'Second puck: x = 0.60 − 0.15 = 0.45; y = −0.26; its momentum is √(0.45² + 0.26²) = 0.52 kg m s⁻¹, so v = 0.52 ÷ 0.20 = **2.6 m s⁻¹** at **30°** on the other side of the original line.'] },
    { q: 'A ball dropped from 1.25 m rebounds to 0.80 m. Find the coefficient of restitution.', steps: ['e = √(h₂ ÷ h₁) = √(0.80 ÷ 1.25).', '= √0.64 = **0.80**.'] },
  ]),

  // ---------- Statics, work and energy ----------
  L('ap-stat-2', 'ap-statics-energy', '4.2', 'Coplanar forces in equilibrium, friction and centre of gravity: practical methods', 15, ['Statics', 'Practical'], [
    'For forces acting at one point (concurrent forces) in equilibrium, the force vectors drawn head to tail form a **closed polygon**, and their components in any two perpendicular directions each add up to zero. With three forces, **Lami’s theorem** is a shortcut: each force is proportional to the sine of the angle between the other two, F₁/sin α = F₂/sin β = F₃/sin γ.',
    'Practical: **the force table**. Three strings run over pulleys at the edge of a circular table and carry hangers with masses; adjust the masses and angles until the central ring rests over the centre. Record each tension (mg) and angle. Check that the x components and the y components each add up to nearly zero, or that the three forces drawn to scale close into a triangle. Friction in the pulleys is the main source of error; tap the table to let the ring settle.',
    'The **coefficient of friction**: drag a block at steady speed with a spring balance on a level board, so μ(kinetic) = F ÷ R, with R = mg; adding masses to the block and plotting F against R gives a straight line of gradient μ. Or tilt the board slowly until the block just begins to slide: at that angle λ, mg sin λ = μmg cos λ, so **μ(static) = tan λ**.',
    'The **centre of gravity** of a flat irregular sheet is found by hanging it freely from two different holes beside a plumb line, marking the vertical line each time: the lines cross at the centre of gravity. A body hanging from a point always comes to rest with its centre of gravity vertically below that point.',
  ], 'ap-force-table', 'Three forces in equilibrium close into a triangle when drawn head to tail.',
  ['A block on a board starts to slide when the board is tilted to 31°. The coefficient of static friction is about:', ['0.60', '0.52', '0.86', '1.7'], 'μ = tan 31°.'],
  [['Lami’s theorem', 'For three forces in equilibrium, each force is proportional to the sine of the angle between the other two.'], ['Angle of friction', 'The angle of slope at which a body just begins to slide; μ = tan λ.'], ['Force table', 'A circular table with pulleys used to test the equilibrium of concurrent forces.']],
  [
    { q: 'A 2.0 kg lamp hangs from two cords, each at 30° to the horizontal. Find the tension in each cord.', steps: ['Vertically: 2T sin 30° = mg = 2.0 × 9.8 = 19.6 N.', 'T = 19.6 ÷ (2 × 0.50) = **19.6 N**.', 'The horizontal components, T cos 30°, are equal and opposite, so they balance.'] },
    { q: 'On a force table, 3.0 N acts at 0° and 4.0 N at 90°. What third force keeps the ring in equilibrium?', steps: ['The resultant of the two is √(3.0² + 4.0²) = **5.0 N**, at tan⁻¹(4.0 ÷ 3.0) = 53° from the 0° line.', 'The third force must be equal and opposite: **5.0 N at 233°**.'] },
  ]),

  L('ap-work-2', 'ap-statics-energy', '4.4', 'Work done by a variable force, and measuring human power', 15, ['Energy', 'Practical'], [
    'When a force changes as it moves, the work done is the **area under the force-displacement graph**, or W = ∫F dx. For a spring obeying Hooke’s law, F = kx, the area is a triangle: **W = ½kx²**, the elastic potential energy stored. In the same way, a gas expanding against a changing pressure does work equal to the area under its p-V graph.',
    'Deriving the energy formulas: a constant resultant force F accelerating a mass m from rest through a distance s does work Fs = mas, and v² = 2as, so Fs = ½mv²: **Ek = ½mv²**. Lifting a mass m at steady speed through a height Δh needs a force mg, so the work done, and the gain in **gravitational potential energy**, is mgΔh (in a uniform field).',
    '**Power** P = W ÷ t = Fv. Practical: **your power running upstairs**. Measure your mass m, the vertical height h of the staircase (number of steps × height of one step, measured with a metre rule) and the time t to run up, with a stopwatch. Power = mgh ÷ t. Alternatively, time how long it takes to lift a known load through a measured height with a rope and pulley.',
    'The useful work done is less than the energy used, because muscles are only about 20 to 25% efficient; the rest warms the body. Safety: use a dry staircase with a handrail, and do not race other students.',
  ], 'ap-force-extension-work', 'Work is the area under the force-displacement graph, whatever its shape.',
  ['A spring with k = 200 N m⁻¹ is stretched by 0.10 m. The energy stored is:', ['1.0 J', '2.0 J', '10 J', '20 J'], '½ × 200 × 0.10².'],
  [['Variable force', 'A force whose size changes during the displacement.'], ['Elastic potential energy', 'Energy stored in a stretched or compressed body: ½kx² for a spring.']],
  [
    { q: 'A force rises steadily from 0 to 40 N over 0.50 m, then stays at 40 N for a further 0.30 m. Find the work done.', steps: ['Triangle: ½ × 0.50 × 40 = **10 J**.', 'Rectangle: 0.30 × 40 = **12 J**.', 'Total = **22 J**, the area under the F-x graph.'] },
    { q: 'A 55 kg student runs up 20 steps, each 0.15 m high, in 5.0 s. Find the power developed.', steps: ['Height = 20 × 0.15 = **3.0 m**.', 'Work = mgh = 55 × 9.8 × 3.0 = **1620 J**.', 'P = 1620 ÷ 5.0 ≈ **320 W**.'] },
  ]),

  // ---------- Circular motion ----------
  L('ap-circ-2', 'ap-circular-shm', '5.2', 'Circular motion in practice: banking, the conical pendulum and the whirling bung', 15, ['Circular motion', 'Practical'], [
    '**Banked tracks**: on a road banked at angle θ, at the speed for which no friction is needed, the horizontal component of the normal reaction provides the centripetal force: R sin θ = mv²/r and R cos θ = mg, so **tan θ = v²/(rg)**. Railway curves are banked (the outer rail is raised) for the same reason, and aircraft bank to turn. Above the design speed, friction must also act down the slope.',
    'The **conical pendulum**: a bob on a string of length L moves in a horizontal circle with the string at an angle θ to the vertical. T cos θ = mg and T sin θ = mω²r, with r = L sin θ, so **ω² = g/(L cos θ)** and the period is 2π√(L cos θ / g).',
    'Practical: **the whirling bung**. A rubber bung on a string passes through a short glass tube held vertically; a hanger of mass M on the lower end supplies the tension Mg. Whirl the bung (mass m) in a horizontal circle, keeping a paper marker on the string just below the tube so that the length L of string from the tube to the bung stays fixed, and time 20 revolutions to find the period T. The string droops a little, but the result **Mg = m(4π²/T²)L** is exact, because both the radius and the horizontal component of the tension depend on the same angle. A graph of T² against L (fixed M) is a straight line through the origin.',
    'Safety: wear eye protection, whirl the bung above head height in a clear space, and check that the string is not worn. Friction between the string and the tube is the main source of error.',
  ], 'ap-banked-track', 'On a bend, look for the force with a component towards the centre: that component provides mv²/r.',
  ['A bend of radius 100 m is banked so that cars at 20 m s⁻¹ need no friction. The banking angle is about:', ['22°', '11°', '45°', '68°'], 'tan θ = v²/rg = 400 ÷ 980 = 0.41.'],
  [['Banking', 'Tilting a curved track so that the normal reaction helps to provide the centripetal force.'], ['Conical pendulum', 'A bob moving in a horizontal circle on a string, which traces out a cone.']],
  [
    { q: 'A conical pendulum has L = 0.50 m and its string makes 30° with the vertical. Find its period.', steps: ['T = 2π√(L cos θ / g) = 2π√(0.50 × 0.866 ÷ 9.8).', '= 2π√0.0442 = 2π × 0.210 = **1.32 s**.'] },
    { q: 'In the whirling-bung experiment, m = 0.020 kg, M = 0.10 kg and L = 0.60 m. Predict the period.', steps: ['Mg = m(4π²/T²)L, so T² = 4π²mL ÷ Mg.', 'T² = 39.48 × 0.020 × 0.60 ÷ (0.10 × 9.8) = 0.474 ÷ 0.98 = 0.483 s².', 'T = **0.70 s**.'] },
  ]),

  // ---------- Oscillations ----------
  L('ap-shm-2', 'ap-oscillations', '7.2', 'SHM in practice: the pendulum, springs, energy and resonance', 16, ['Oscillations', 'Practical'], [
    'Practical: **g from a simple pendulum**. Use a small dense bob on a light thread clamped between two small plates, and measure the length l from the point of suspension to the centre of the bob. Displace it by less than about 10°, and time 20 oscillations, starting and stopping the clock as the bob passes the centre (where it moves fastest, so timing errors are smallest), using a fixed (fiducial) marker. Repeat for several lengths and plot T² against l: the gradient is 4π²/g.',
    'Practical: **springs**. Hang increasing loads on a helical spring and record the extensions: load against extension is a straight line of gradient k (Hooke’s law). Then set a mass m oscillating vertically and time 20 oscillations: T² against m is a straight line, since T² = (4π²/k) m, giving k a second way. The two values should agree; the spring’s own mass makes the measured periods slightly longer.',
    'Energy in SHM: Ek = ½mω²(A² − x²) and Ep = ½mω²x², so the total **E = ½mω²A²** is constant and proportional to the square of the amplitude. On graphs against displacement, Ek is an inverted parabola and Ep an upright one; they cross where x = A/√2.',
    '**Forced oscillations and resonance**: a system driven by a periodic force oscillates at the driving frequency; its amplitude is greatest when the driving frequency is close to its **natural frequency** (resonance), and damping lowers and broadens the peak. Resonance is useful in tuning radio circuits, in MRI scanners and in musical instruments, but it is an engineering **hazard**: bridges driven by wind or by marching feet, vibrating machinery, and buildings shaken by earthquakes. The Tacoma Narrows bridge (1940) was destroyed by violent wind-driven oscillations, and soldiers break step on bridges. Engineers add damping and change natural frequencies to avoid it.',
  ], 'ap-resonance-curves', 'Start timing as the bob passes the centre, and time 20 oscillations, not one.',
  ['For a simple pendulum, T² is plotted against l. The gradient is:', ['4π²/g', 'g/4π²', '2π/g', '√g'], 'T² = (4π²/g) l.'],
  [['Natural frequency', 'The frequency at which a system oscillates when it is displaced and left alone.'], ['Forced oscillation', 'An oscillation driven by a periodic external force.'], ['Fiducial marker', 'A fixed reference mark used to start and stop timing at the same point.']],
  [
    { q: 'A mass-spring system has m = 0.50 kg, k = 50 N m⁻¹ and amplitude 0.10 m. Find the maximum speed and the total energy.', steps: ['ω = √(k/m) = √100 = **10 rad s⁻¹**.', 'v(max) = ωA = 10 × 0.10 = **1.0 m s⁻¹**.', 'E = ½kA² = ½ × 50 × 0.010 = **0.25 J**, equal to ½mv(max)².'] },
    { q: 'A pendulum of length 1.00 m makes 20 oscillations in 40.2 s. Find g.', steps: ['T = 40.2 ÷ 20 = **2.01 s**.', 'g = 4π²l ÷ T² = 39.48 × 1.00 ÷ 4.04.', '= **9.77 m s⁻²**.'] },
  ]),

  // ---------- Temperature ----------
  L('ap-therm-3', 'ap-thermal', '8.2', 'The zeroth law, temperature scales and calibrating a thermometer', 15, ['Thermal physics', 'Practical'], [
    'The **zeroth law of thermodynamics**: if two bodies are each in thermal equilibrium with a third body, they are in thermal equilibrium with each other. This is why thermometers work: the thermometer comes to equilibrium with the body and so shares its temperature. There is no net flow of heat between bodies at the same temperature.',
    'A temperature scale needs a **thermometric property** X that changes steadily with temperature, and **fixed points**. A Celsius-type scale uses the **ice point** (pure melting ice, 0 °C) and the **steam point** (steam above water boiling at standard pressure, 100 °C): **θ = (X(θ) − X(0)) ÷ (X(100) − X(0)) × 100 °C**. The thermodynamic scale uses absolute zero and the **triple point of water**, 273.16 K, where ice, water and water vapour are in equilibrium.',
    'Different thermometers agree at the fixed points but may **disagree in between**, because their properties do not all change in the same way with temperature. The constant-volume gas thermometer, which follows the thermodynamic scale closely, is the standard against which the others are calibrated.',
    'Practical: **calibrating a liquid-in-glass thermometer**. Put the bulb in melting ice made from distilled water and mark the end of the column (ice point); then hold it in the steam above boiling water and mark again (steam point, corrected if the pressure is not 101.3 kPa). Divide the distance between the marks into 100 equal parts, or measure the column length at an unknown temperature and use the formula.',
  ], 'ap-thermometer-calibration', 'Temperature on a scale = (X − X at ice point) ÷ (X at steam point − X at ice point) × 100.',
  ['A thermometer column is 3.0 cm long at the ice point and 23.0 cm at the steam point. A length of 12.0 cm corresponds to:', ['45 °C', '60 °C', '52 °C', '40 °C'], '(12.0 − 3.0) ÷ 20.0 × 100.'],
  [['Zeroth law', 'Two bodies each in thermal equilibrium with a third are in thermal equilibrium with each other.'], ['Fixed point', 'A reproducible temperature used to define a scale, such as the ice point.'], ['Triple point of water', 'The single temperature and pressure at which ice, water and water vapour coexist: 273.16 K.']],
  [
    { q: 'A platinum resistance thermometer reads 25.0 Ω at the ice point and 34.8 Ω at the steam point. Find the temperature on its scale when it reads 30.5 Ω.', steps: ['θ = (30.5 − 25.0) ÷ (34.8 − 25.0) × 100.', '= 5.5 ÷ 9.8 × 100 = **56 °C** on the resistance scale.'] },
    { q: 'An unmarked thermometer’s column is 2.0 cm long in melting ice and 22.0 cm in steam. In warm water it is 9.5 cm. Find the temperature.', steps: ['θ = (9.5 − 2.0) ÷ (22.0 − 2.0) × 100.', '= 7.5 ÷ 20.0 × 100 = **37.5 °C**.'] },
  ]),

  // ---------- Heat capacity and heat transfer ----------
  L('ap-therm-4', 'ap-heat', '9.2', 'Calorimetry in practice', 16, ['Thermal physics', 'Practical'], [
    '**Electrical method for specific heat capacity**: a heater of power P = VI, measured with a voltmeter and an ammeter, sits in a hole in a lagged metal block, with a thermometer in a second hole (a drop of oil improves contact). Switch on for a time t and record the temperature rise Δθ: **c = VIt ÷ (mΔθ)**. Heat lost to the surroundings makes c too large; reduce it with lagging, and by starting a few degrees below room temperature and finishing the same amount above it.',
    '**Method of mixtures**: heat a metal of mass m₁ in boiling water to θ₁, transfer it quickly into water (mass m₂, temperature θ₂) in a calorimeter of known heat capacity C, stir, and record the final temperature θ. Heat lost by the metal = heat gained by the water and calorimeter: **m₁c₁(θ₁ − θ) = (m₂c₂ + C)(θ − θ₂)**.',
    '**Specific latent heat of vaporisation**: keep water boiling with an immersion heater in a beaker on a balance, and find the mass boiled away per second at two different heater powers. Subtracting the two energy equations removes the unknown heat-loss term: P₁ − P₂ = (m₁ − m₂)l ÷ t. For the **latent heat of fusion**, melt ice with a heater in a funnel and compare with a second funnel without a heater, which collects the water melted by the surroundings.',
    '**Cooling corrections**: the rate of heat loss is roughly proportional to the excess temperature above the surroundings (Newton’s law of cooling). Plotting temperature against time and extrapolating the cooling part of the graph back corrects the highest temperature for the heat lost during the experiment.',
  ], 'ap-calorimetry', 'Write "heat lost = heat gained" in words first, then put in the numbers.',
  ['A 1.0 kg aluminium block warms by 10.0 K when a 50 W heater runs for 180 s. Its specific heat capacity is about:', ['900 J kg⁻¹ K⁻¹', '1800 J kg⁻¹ K⁻¹', '450 J kg⁻¹ K⁻¹', '9000 J kg⁻¹ K⁻¹'], '50 × 180 ÷ (1.0 × 10.0).'],
  [['Calorimeter', 'An insulated container used to measure exchanges of heat.'], ['Method of mixtures', 'Finding a specific heat capacity from the final temperature when a hot and a cold body are mixed.'], ['Heat capacity', 'The energy needed to raise the temperature of a whole body by 1 K.']],
  [
    { q: 'A 0.20 kg metal at 100 °C is dropped into 0.30 kg of water at 20.0 °C in a calorimeter of negligible heat capacity. The final temperature is 25.0 °C. Find c for the metal (c of water 4200 J kg⁻¹ K⁻¹).', steps: ['Heat gained by water = 0.30 × 4200 × 5.0 = **6300 J**.', 'Heat lost by metal = 0.20 × c × 75.0 = 15.0c.', 'c = 6300 ÷ 15.0 = **420 J kg⁻¹ K⁻¹**.'] },
    { q: 'Water boils away at 0.20 g s⁻¹ with a 500 W heater and at 0.11 g s⁻¹ with a 300 W heater. Find the specific latent heat of vaporisation.', steps: ['P₁ − P₂ = (rate₁ − rate₂) × l.', '200 = (0.20 − 0.11) × 10⁻³ × l.', 'l = 200 ÷ (9.0 × 10⁻⁵) = **2.2 × 10⁶ J kg⁻¹**.'] },
  ]),

  L('ap-therm-5', 'ap-heat', '9.3', 'Thermal conductivity, convection and radiation', 16, ['Thermal physics', 'Heat transfer'], [
    'For steady conduction through a slab or bar of cross-section A and thickness (or length) x, with its faces at θ₁ and θ₂, the rate of heat flow is **Q/t = kA(θ₁ − θ₂)/x**, where k is the **thermal conductivity** in W m⁻¹ K⁻¹: copper about 390, iron about 80, glass about 1, wood about 0.15 and air about 0.025. Metals conduct well because free electrons carry energy as well as the lattice vibrations.',
    'Practical: heat one end of copper and iron bars of the same size, with small pins fixed by wax at equal intervals along each: the pins fall sooner, and further along, on the copper bar. For a good conductor (Searle’s method), a lagged bar is heated at one end and cooled by water flowing through a coil at the other; in the steady state the heat flowing along the bar equals the heat carried away by the water: kA(Δθ/x) = (m/t) c (θ(out) − θ(in)).',
    '**Convection** is the transfer of heat by movement of the fluid itself: warm fluid expands, becomes less dense and rises, while cooler, denser fluid sinks to replace it. It drives the sea breeze by day and the land breeze by night along the Cameroon coast, and the circulation in hot-water systems.',
    '**Radiation**: all bodies emit electromagnetic radiation, mainly infrared at everyday temperatures. A **black body** absorbs all the radiation falling on it and is the best possible emitter. The **Stefan-Boltzmann law**: the total power radiated by a black body is **P = σAT⁴**, with σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴ and T in kelvin; a real surface radiates P = εσAT⁴, where the emissivity ε is less than 1. The net power exchanged with surroundings at T₀ is εσA(T⁴ − T₀⁴).',
  ], 'ap-conductivity', 'Doubling the kelvin temperature multiplies the radiated power by 2⁴ = 16.',
  ['Doubling the kelvin temperature of a black body multiplies the power it radiates by:', ['16', '2', '4', '8'], 'P ∝ T⁴.'],
  [['Thermal conductivity', 'The rate of heat flow per unit area per unit temperature gradient, in W m⁻¹ K⁻¹.'], ['Black body', 'An ideal body that absorbs all radiation falling on it and is the best emitter.'], ['Stefan-Boltzmann law', 'A black body radiates a power P = σAT⁴.']],
  [
    { q: 'A glass window of area 2.0 m² and thickness 4.0 mm has faces at 25 °C and 20 °C (k = 1.0 W m⁻¹ K⁻¹). Find the rate of heat flow through it.', steps: ['Q/t = kA(θ₁ − θ₂)/x = 1.0 × 2.0 × 5.0 ÷ 0.0040.', '= **2.5 × 10³ W**. (In practice, thin layers of still air on each face cut this a great deal.)'] },
    { q: 'A black sphere of surface area 0.010 m² is at 500 K. Find the power it radiates (σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴).', steps: ['P = σAT⁴ = 5.67 × 10⁻⁸ × 0.010 × 500⁴.', '500⁴ = 6.25 × 10¹⁰, so P = **35 W**.'] },
  ]),

  // ---------- Elasticity ----------
  L('ap-matter-3', 'ap-matter', '10.2', 'Measuring the Young modulus, and strain energy', 15, ['Matter', 'Elasticity', 'Practical'], [
    'Practical: **the Young modulus of a metal wire** (Searle’s method). Two long identical wires hang from the same support: a **reference wire** with a fixed load (which cancels any sagging of the support and changes of temperature) and the test wire, loaded in steps. A spirit level and a micrometer screw linking the two measure each extension to 0.01 mm. Measure the original length L (about 2 m) with a metre rule, and the diameter d at several places along the wire with a micrometer.',
    'Plot load F against extension x for the straight part: the gradient is F/x, and **E = (F/x) × L/A**, with A = πd²/4. The **diameter** has the largest percentage uncertainty, and it counts twice because A depends on d². Remove the loads to check that the wire returns to its original length. Copper yields at quite small stresses, so do not overload it, and wear eye protection in case the wire snaps.',
    '**Strain energy** stored in a stretched wire = area under the force-extension graph = **½Fx** in the linear region. Per unit volume, the energy stored is ½ × stress × strain. If a wire is stretched beyond its elastic limit and unloaded, the unloading line is parallel to the loading line, and the area between them is energy dissipated as heat.',
    'For rubber, the loading and unloading curves differ (**hysteresis**): the area of the loop is the energy converted to heat in each cycle, which is why car tyres warm up as they flex.',
  ], 'ap-searle', 'The diameter dominates the uncertainty in E: measure it carefully at several places.',
  ['A wire 2.0 m long with cross-sectional area 1.0 × 10⁻⁷ m² stretches 1.0 mm under 10 N. Its Young modulus is:', ['2.0 × 10¹¹ Pa', '2.0 × 10⁸ Pa', '5.0 × 10¹⁰ Pa', '1.0 × 10¹¹ Pa'], 'E = FL/(Ax) = 10 × 2.0 ÷ (1.0 × 10⁻⁷ × 1.0 × 10⁻³).'],
  [['Reference wire', 'An identical wire with a fixed load, used to cancel support sag and temperature effects.'], ['Strain energy', 'The energy stored in a deformed body: ½Fx in the elastic region.'], ['Hysteresis', 'Different loading and unloading curves; the loop area is the energy lost as heat.']],
  [
    { q: 'A copper wire (L = 2.50 m, d = 0.50 mm) extends 2.1 mm under a load of 20 N. Find its Young modulus.', steps: ['A = πd²/4 = π × (0.50 × 10⁻³)² ÷ 4 = **1.96 × 10⁻⁷ m²**.', 'E = FL/(Ax) = 20 × 2.50 ÷ (1.96 × 10⁻⁷ × 2.1 × 10⁻³).', '= 50 ÷ 4.12 × 10⁻¹⁰ = **1.2 × 10¹¹ Pa**.'] },
    { q: 'Find the energy stored in that wire.', steps: ['Energy = ½Fx = ½ × 20 × 2.1 × 10⁻³.', '= **0.021 J**.'] },
  ]),

  // ---------- Fluids ----------
  L('ap-fluid-1', 'ap-fluids', '11.1', 'Upthrust, Archimedes’ principle and flotation', 15, ['Fluids', 'Practical'], [
    'Pressure in a fluid increases with depth, p = p₀ + ρgh, so the upward push on the bottom of an immersed body is greater than the downward push on its top. The resulting upward force is the **upthrust**. **Archimedes’ principle**: a body wholly or partly immersed in a fluid experiences an upthrust equal to the **weight of fluid displaced**: U = ρ(fluid) × V(displaced) × g.',
    '**Flotation**: a floating body displaces its own weight of fluid. A body sinks if its average density is greater than that of the fluid. Steel ships float because their hollow hulls displace a large volume of water; a ship floats higher in denser sea water than in river water. A **hydrometer** floats lower in a less dense liquid and reads density directly; submarines and fish change their average density to rise or sink.',
    'Practical: **density of an irregular solid**. Weigh it, then lower it into a displacement (eureka) can, or into a measuring cylinder of water, to find its volume: ρ = m/V. Or weigh it in air (W₁) and fully immersed in water (W₂): the loss of weight, W₁ − W₂, is the upthrust, so its **relative density** = W₁ ÷ (W₁ − W₂).',
    'The same weighings give the density of a liquid: weigh a sinker in air, in water and in the liquid; the relative density of the liquid = loss of weight in the liquid ÷ loss of weight in water.',
  ], 'ap-archimedes', 'Upthrust = weight of fluid displaced; floating means upthrust = weight.',
  ['A stone weighs 5.0 N in air and 3.0 N fully immersed in water. Its relative density is:', ['2.5', '1.7', '0.60', '2.0'], '5.0 ÷ (5.0 − 3.0).'],
  [['Upthrust', 'The upward force a fluid exerts on an immersed body.'], ['Archimedes’ principle', 'The upthrust on an immersed body equals the weight of fluid displaced.'], ['Relative density', 'The density of a substance ÷ the density of water.']],
  [
    { q: 'A wooden block of volume 2.0 × 10⁻³ m³ and density 600 kg m⁻³ floats in water (1000 kg m⁻³). What fraction of it is under water?', steps: ['Weight = 600 × 2.0 × 10⁻³ × 9.8 = **11.8 N**.', 'It displaces its own weight: V × 1000 × 9.8 = 11.8 N, so V = **1.2 × 10⁻³ m³**.', 'Fraction under water = 1.2 ÷ 2.0 = **0.60**, the ratio of the densities.'] },
    { q: 'A 3.0 kg block of volume 1.0 × 10⁻³ m³ hangs on a string, fully under water. Find the upthrust and the tension.', steps: ['U = 1000 × 1.0 × 10⁻³ × 9.8 = **9.8 N**.', 'Weight = 3.0 × 9.8 = 29.4 N.', 'Tension = 29.4 − 9.8 = **19.6 N**.'] },
  ]),

  L('ap-fluid-2', 'ap-fluids', '11.2', 'Fluid flow, viscosity and terminal velocity', 16, ['Fluids', 'Practical'], [
    'An **ideal fluid** is incompressible and non-viscous and flows steadily, in **streamline** flow where each particle follows the path of the one before. For such a fluid in a pipe, the **equation of continuity** holds: the volume flowing per second is the same everywhere, **A₁v₁ = A₂v₂**, so the fluid speeds up where the pipe narrows, as at a hose nozzle.',
    'Real fluids have **viscosity**, an internal friction between layers moving at different speeds. Honey and glycerine are very viscous; water and air much less so. The viscosity of a liquid falls sharply as it warms, which is why engine oils are graded by temperature. At high speeds the flow becomes **turbulent**, with eddies, and the drag increases.',
    '**Stokes’ law**: a small sphere of radius r moving slowly at speed v through a fluid of viscosity η feels a drag **F = 6πηrv**. A sphere falling through a liquid accelerates until weight = upthrust + drag, then moves at its **terminal velocity**: (4/3)πr³ρg = (4/3)πr³σg + 6πηrv, so **v = 2r²(ρ − σ)g ÷ 9η**, where ρ is the density of the sphere and σ that of the fluid.',
    'Practical: **viscosity of glycerine**. Drop small steel ball bearings of measured diameter into a tall cylinder of glycerine. Two rubber bands round the cylinder mark a fixed distance well below the surface, where the ball has already reached terminal velocity; time the ball between them. A graph of v against r² is a straight line through the origin of gradient 2(ρ − σ)g/9η, which gives η. Keep the temperature steady, because η depends strongly on it, and drop the balls down the middle, away from the walls.',
  ], 'ap-terminal-velocity', 'At terminal velocity the resultant force is zero: weight = upthrust + drag.',
  ['Water flows at 2.0 m s⁻¹ in a pipe of cross-section 4.0 cm². Where the cross-section is 1.0 cm², its speed is:', ['8.0 m s⁻¹', '0.50 m s⁻¹', '2.0 m s⁻¹', '4.0 m s⁻¹'], 'A₁v₁ = A₂v₂.'],
  [['Viscosity', 'Internal friction in a fluid, which opposes the relative motion of its layers.'], ['Streamline flow', 'Steady flow in which the particles follow smooth paths that do not cross.'], ['Stokes’ law', 'The drag on a small sphere: F = 6πηrv.']],
  [
    { q: 'A steel ball (r = 1.0 mm, ρ = 7800 kg m⁻³) falls through glycerine (σ = 1260 kg m⁻³, η = 1.5 Pa s). Find its terminal velocity.', steps: ['v = 2r²(ρ − σ)g ÷ 9η = 2 × (1.0 × 10⁻³)² × 6540 × 9.8 ÷ (9 × 1.5).', '= 0.128 ÷ 13.5 = **9.5 × 10⁻³ m s⁻¹**, about 1 cm per second.'] },
    { q: 'A ball bearing of radius 2.0 mm takes 8.0 s to fall between marks 0.20 m apart in oil of viscosity 0.80 Pa s. Find its speed and the drag on it.', steps: ['v = 0.20 ÷ 8.0 = **0.025 m s⁻¹**.', 'F = 6πηrv = 6π × 0.80 × 2.0 × 10⁻³ × 0.025.', '= **7.5 × 10⁻⁴ N**.'] },
  ]),

  // ---------- Gases ----------
  L('ap-gas-3', 'ap-gases', '12.3', 'Gas law practicals and p-V diagrams', 16, ['Gases', 'Thermodynamics', 'Practical'], [
    'Practical: **Boyle’s law**. Trap air in a syringe or a thick-walled tube connected to a pressure gauge (for example a Bourdon gauge with an oil column). Change the pressure in steps, waiting each time for the temperature to settle, and read the volume. A graph of p against 1/V is a straight line through the origin, confirming pV = constant for a fixed mass at constant temperature.',
    'Practical: **Charles’s law with a capillary tube**. A short thread of concentrated sulfuric acid (which also keeps the air dry) traps a column of air in a capillary tube sealed at the bottom and fixed to a thermometer in a water bath. Heat the water slowly, stirring, and record the length of the air column, which is proportional to its volume, at several temperatures. Extrapolating the straight line of length against θ back to zero length gives absolute zero, close to −273 °C. The acid is corrosive: wear gloves and eye protection.',
    'On a **p-V diagram** (indicator diagram), the work done by the gas is the area under the curve. An **isothermal** change follows pV = constant. An **adiabatic** change (no heat exchanged, Q = 0) follows **pVᵞ = constant**, where γ = 5/3 for a monatomic gas and about 1.4 for air, so the adiabatic curve through a point is steeper than the isothermal one. In an adiabatic expansion the gas cools, because the work it does comes from its internal energy; a bicycle pump warms on rapid compression for the same reason.',
    'A **cycle** returns the gas to its starting state, so ΔU = 0 over the whole cycle, and the net work done by the gas equals the net heat supplied, which is the **area enclosed by the loop** on the p-V diagram. A loop traced clockwise means net work is done by the gas: the principle of every heat engine.',
  ], 'ap-pv-curves', 'Work by the gas = area under the p-V curve; for a cycle, the area inside the loop.',
  ['On a p-V diagram, the net work done by a gas in a cycle equals:', ['the area enclosed by the loop', 'the highest pressure', 'zero, always', 'the change in internal energy'], 'ΔU = 0 over a cycle.'],
  [['Indicator diagram', 'A graph of pressure against volume for a gas going through changes.'], ['Adiabatic change', 'A change in which no heat is exchanged with the surroundings.'], ['Isothermal change', 'A change at constant temperature.']],
  [
    { q: 'Air at 100 kPa occupying 400 cm³ is compressed isothermally to 250 cm³. Find the new pressure.', steps: ['p₁V₁ = p₂V₂.', 'p₂ = 100 × 400 ÷ 250 = **160 kPa**.'] },
    { q: 'A gas expands at a constant pressure of 2.0 × 10⁵ Pa from 1.0 × 10⁻³ m³ to 3.0 × 10⁻³ m³ while absorbing 700 J of heat. Find the work done by the gas and ΔU.', steps: ['Work done by the gas = pΔV = 2.0 × 10⁵ × 2.0 × 10⁻³ = **400 J**.', 'With ΔU = Q + W, the work done on the gas is W = −400 J.', 'ΔU = 700 − 400 = **300 J**.'] },
  ]),

  // ---------- Lower Sixth revision ----------
  L('ap-l6-paper1', 'ap-l6-papers', '14.1', 'The A Level Physics papers and Paper 1 drills', 13, ['Examination'], [
    'GCE A Level Physics (0780) has three papers. **Paper 1** is multiple choice and lasts 1½ hours. **Paper 2** lasts 3 hours: five compulsory short questions, one long question chosen from two, a data-analysis question, and two questions chosen from the options. **Paper 3** is the practical examination. In 2026 the practical ran from 21 to 23 May, Paper 1 was on 6 June and Paper 2 on 8 June.',
    'Paper 1 technique for physics:\n- check units and dimensions first: options with the wrong dimensions can be ruled out at once\n- estimate before calculating (g ≈ 10 m s⁻² for a rough check)\n- for graphs, decide what the gradient and the area under the line represent\n- in uncertainty items, add percentage uncertainties for products and quotients, and multiply by the power for squares and square roots.',
    'Lower Sixth topics to drill: dimensional analysis and vectors, the equations of motion and projectiles, momentum, moments, energy and power, circular motion, gravitation, SHM, thermal physics, elasticity, fluids, the gas laws and current electricity.',
    'Practise in timed sets of 10 items, allowing about 2 minutes per item, and keep a list of the ideas behind your mistakes.',
  ], 'ap-gce-0780', 'Check the dimensions of every option: wrong dimensions mean a wrong answer.',
  ['Which expression has the dimensions of a speed for a wave on a string (T tension, μ mass per unit length)?', ['√(T/μ)', '√(Tμ)', 'T/μ', 'Tμ'], 'T/μ has units of m² s⁻².'],
  [['Dimensional analysis', 'Checking or predicting an equation by comparing the dimensions of its terms.']],
  [
    { q: 'Item: a pendulum’s period is 2.00 ± 0.02 s and its length 1.000 ± 0.005 m. The percentage uncertainty in g = 4π²l/T² is: A 1.5%, B 2.5%, C 0.5%, D 1.0%.', steps: ['Percentage uncertainty in l = 0.5%; in T = 1%, so in T² = 2%.', 'Total = 0.5 + 2 = **2.5%**: **answer B**.'] },
  ]),

  L('ap-l6-paper2', 'ap-l6-papers', '14.2', 'Paper 2 practice: structured mechanics and thermal questions', 15, ['Examination'], [
    'Structured questions build from a definition or law, through a calculation, to an explanation. Learn exact definitions, for example "the moment of a force is the force multiplied by the perpendicular distance from the pivot to its line of action", and state laws with their conditions (Hooke’s law up to the limit of proportionality; Boyle’s law for a fixed mass of gas at constant temperature).',
    'Multi-step mechanics: draw a diagram showing every force; choose a positive direction; write down the principle you are using (conservation of momentum, conservation of energy, Newton’s second law, the principle of moments) before substituting; keep unrounded values until the end, and give the answer to two or three significant figures with its unit.',
    'Derivations often asked: the equations of uniform acceleration from the definitions of v and a; Ek = ½mv²; the range of a projectile; the centripetal acceleration v²/r; p = ⅓ρ⟨c²⟩ for an ideal gas; the period of a mass-spring system; and the terminal velocity from Stokes’ law. Practise writing each one in full, explaining every step.',
    'The data-analysis question: tabulate the derived quantities with their units, choose sensible scales, plot carefully, draw the best line, use a large triangle for the gradient, and relate the gradient and intercept to the physical quantities asked for.',
  ], 'ap-best-fit', 'Name the principle before you substitute numbers.',
  ['In a structured calculation, what should be written first?', ['the law or principle being used', 'the final answer', 'the units only', 'a guess to check later'], 'Method marks depend on it.'],
  [['Line of best fit', 'The straight line that passes as close as possible to all the plotted points.']],
  [
    { q: 'A 0.050 kg bullet at 400 m s⁻¹ embeds itself in a 1.95 kg block hanging on a string. How high does the block rise?', steps: ['Momentum: 0.050 × 400 = 2.00 × v, so v = **10 m s⁻¹** just after the impact.', 'Then energy: ½mv² = mgh, so h = v² ÷ 2g = 100 ÷ 19.6 = **5.1 m**.', 'Kinetic energy is not conserved in the impact itself (it is inelastic), which is why momentum is used first.'] },
  ]),
];
