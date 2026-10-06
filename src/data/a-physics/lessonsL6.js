// A Level Physics lessons for Lower Sixth (MINESEC Modules 1 to 4).
// Original text written for this app. **double asterisks** mark key terms
// (rendered bold). `examples` are worked examples. g = 9.8 N/kg unless stated.

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

export const LESSONS_L6 = [
  // ---------- 1. Quantities and measurement ----------
  L('ap-measure-1', 'ap-measure', '1.1', 'SI units, dimensions, scalars and vectors', 13, ['Units', 'Dimensions'], [
    'Every physical quantity is a **number times a unit**. The SI system has seven **base quantities** and units: mass (kilogram, kg), length (metre, m), time (second, s), electric current (ampere, A), thermodynamic temperature (kelvin, K), amount of substance (mole, mol) and luminous intensity (candela, cd). All other units are **derived**: for example the newton, N = kg m s⁻², and the joule, J = kg m² s⁻². Prefixes scale units: p (10⁻¹²), n (10⁻⁹), μ (10⁻⁶), m (10⁻³), k (10³), M (10⁶), G (10⁹).',
    'The **dimensions** of a quantity show how it depends on the base quantities, written with M, L, T, I and Θ. Velocity is [LT⁻¹], acceleration [LT⁻²], force [MLT⁻²], energy [ML²T⁻²], pressure [ML⁻¹T⁻²]. A correct equation must be **homogeneous**: every term has the same dimensions. Dimensional analysis checks equations and can predict the form of a relationship, but it cannot find dimensionless constants such as 2π or ½.',
    'A **scalar** has magnitude only (mass, time, energy, speed, temperature). A **vector** has magnitude and direction (displacement, velocity, acceleration, force, momentum, field strength). Vectors are added by the **triangle** or **parallelogram** rule, taking direction into account; two forces of 3 N and 4 N at right angles have a resultant of 5 N.',
    'A vector can be **resolved** into two perpendicular **components**: a force F at angle θ to the horizontal has a horizontal component F cos θ and a vertical component F sin θ. Resolving is the key step in problems on slopes, projectiles and equilibrium.',
  ], 'vector-parallelogram', 'To check homogeneity, write the dimensions of each term separately; if any term differs, the equation is wrong.',
  ['The dimensions of pressure are:', ['ML⁻¹T⁻²', 'MLT⁻²', 'ML²T⁻²', 'ML⁻³'], 'Pressure = force ÷ area = MLT⁻² ÷ L².'],
  [['Base quantity', 'One of the seven quantities from which all others are derived.'], ['Homogeneous equation', 'An equation whose terms all have the same dimensions.'], ['Vector', 'A quantity with both magnitude and direction.']],
  [
    { q: 'Show that the equation v² = u² + 2as is homogeneous.', steps: ['[v²] = [u²] = (LT⁻¹)² = **L²T⁻²**.', '[2as] = [a][s] = LT⁻² × L = **L²T⁻²** (the 2 has no dimensions).', 'All three terms have the same dimensions, so the equation is **homogeneous**.'] },
    { q: 'A force of 50 N pulls a box at 30° above the horizontal. Find its horizontal and vertical components.', steps: ['Horizontal = 50 cos 30° = 50 × 0.866 = **43.3 N**.', 'Vertical = 50 sin 30° = 50 × 0.5 = **25 N**.'] },
  ]),

  L('ap-measure-2', 'ap-measure', '1.2', 'Errors, uncertainties and experimental skills', 13, ['Measurement', 'Practical'], [
    'No measurement is exact. **Random errors** scatter readings either side of the true value (reaction time with a stopwatch, judging a reading); they are reduced by **repeating** and averaging, and by measuring larger quantities (timing 20 oscillations, not one). **Systematic errors** shift every reading the same way (a zero error, a wrongly calibrated meter, parallax from the same side); repeating does not remove them, so the instrument must be checked or corrected.',
    '**Accuracy** is how close a result is to the true value; **precision** is how close repeated readings are to each other. The **uncertainty** of a reading is usually half the smallest division of an analogue scale, or the smallest digit of a digital meter. Instruments: metre rule (±1 mm), vernier calipers (±0.1 mm), micrometer screw gauge (±0.01 mm).',
    'Combining uncertainties: for **sums and differences**, add the **absolute** uncertainties; for **products and quotients**, add the **percentage (fractional)** uncertainties; for a **power**, multiply the percentage uncertainty by the power. Quote the final answer to a number of **significant figures** that matches the data, usually the least precise measurement.',
    'Results are analysed with **graphs**: choose the variables so the expected relationship gives a **straight line** (y = mx + c), plot with sensible scales covering most of the grid, draw the line of best fit, and find the **gradient** with a large triangle. Logarithmic graphs (ln y against ln x) reveal power laws: the gradient is the power.',
  ], 'micrometer', 'In practical questions, give a specific way to reduce each error, for example "time 20 oscillations and divide by 20".',
  ['The radius of a wire is 0.50 ± 0.01 mm. The percentage uncertainty in its cross-sectional area is:', ['4%', '2%', '1%', '0.01%'], 'A = πr²: 2 × (0.01 ÷ 0.50 × 100) = 2 × 2% = 4%.'],
  [['Random error', 'An error that scatters readings unpredictably about the true value.'], ['Systematic error', 'An error that shifts all readings in the same direction.'], ['Precision', 'How close repeated readings are to each other.']],
  [
    { q: 'g is found from a pendulum using g = 4π²l/T². l = 0.800 ± 0.002 m and T = 1.80 ± 0.01 s. Find g and its uncertainty.', steps: ['g = 4π² × 0.800 ÷ 1.80² = **9.75 m/s²**.', '% uncertainty in l = 0.002 ÷ 0.800 × 100 = 0.25%; in T = 0.01 ÷ 1.80 × 100 = 0.56%, doubled for T² = 1.11%.', 'Total = 0.25 + 1.11 = 1.36%, so Δg = 0.0136 × 9.75 = 0.13.', 'g = **9.75 ± 0.13 m/s²**.'] },
  ]),

  // ---------- 2. Kinematics ----------
  L('ap-kin-1', 'ap-kinematics', '2.1', 'Displacement, velocity, acceleration and the equations of motion', 14, ['Kinematics'], [
    '**Displacement** is distance in a given direction; **velocity** is the rate of change of displacement; **acceleration** is the rate of change of velocity. Speed and distance are their scalar versions. Average velocity = total displacement ÷ total time; instantaneous velocity is the gradient of the displacement-time graph at that moment.',
    'Graphs: on a **displacement-time** graph the gradient is the velocity. On a **velocity-time** graph the **gradient is the acceleration** and the **area under the graph is the displacement**. A curved v-t graph means the acceleration is changing.',
    'For **uniform acceleration** a, with initial velocity u, final velocity v, displacement s and time t: **v = u + at**; **s = ut + ½at²**; **v² = u² + 2as**; **s = ½(u + v)t**. Choose a positive direction and keep to it: in vertical motion, if up is positive, g = −9.8 m/s².',
    'In **free fall** (no air resistance) all bodies near the Earth fall with the same acceleration g ≈ 9.8 m/s², independent of their mass. With air resistance, the drag grows with speed until it equals the weight: the body then falls at constant **terminal velocity**, as a raindrop or a parachutist does.',
  ], 'speed-time', 'List the five suvat symbols, fill in the three you know, mark the one you want, and choose the equation without the fifth.',
  ['A ball is thrown straight up at 15 m/s. How high does it rise? (g = 9.8 m/s²)', ['11.5 m', '15 m', '23 m', '1.5 m'], 'v² = u² + 2as: 0 = 225 − 19.6s, so s = 11.5 m.'],
  [['Displacement', 'The distance moved in a stated direction.'], ['Acceleration', 'The rate of change of velocity.'], ['Terminal velocity', 'The constant velocity reached when drag equals weight.']],
  [
    { q: 'A taxi moving at 25 m/s brakes uniformly and stops in 50 m. Find its deceleration and the time taken.', steps: ['u = 25, v = 0, s = 50. Use v² = u² + 2as: 0 = 625 + 100a.', 'a = −6.25 m/s², a deceleration of **6.25 m/s²**.', 'v = u + at: 0 = 25 − 6.25t, so t = **4.0 s**.'] },
    { q: 'A stone is dropped from a bridge and hits the water after 2.5 s. How high is the bridge, and how fast is the stone moving? (Ignore air resistance.)', steps: ['u = 0, a = 9.8, t = 2.5 (taking down as positive).', 's = ut + ½at² = 0 + ½ × 9.8 × 2.5² = **30.6 m**.', 'v = u + at = 9.8 × 2.5 = **24.5 m/s**.'] },
  ]),

  L('ap-kin-2', 'ap-kinematics', '2.2', 'Projectile motion', 13, ['Kinematics', 'Projectiles'], [
    'A **projectile** moves under gravity alone after it is launched. Its horizontal and vertical motions are **independent**: horizontally there is **no force**, so the horizontal velocity u cos θ stays constant; vertically there is a constant acceleration **g downwards**, starting from u sin θ.',
    'Solve each direction separately, linked by the **time of flight**. Horizontal: x = (u cos θ) t. Vertical: y = (u sin θ) t − ½gt², and v_y = u sin θ − gt. The path is a **parabola**.',
    'Useful results on level ground: time to the top t = u sin θ / g; **maximum height H = u² sin² θ / 2g**; time of flight T = 2u sin θ / g; **range R = u² sin 2θ / g**, which is greatest at **45°**. Angles that add up to 90° (such as 30° and 60°) give the same range.',
    'For an object projected **horizontally** from a height h (a ball rolling off a table, a parcel dropped from a moving plane), the time of fall is found from h = ½gt², exactly as if it were dropped; the horizontal distance is then u × t. Air resistance in reality reduces both range and height and makes the path asymmetric.',
  ], 'projectile-path', 'Draw a table with two columns, horizontal and vertical, and write u, a, s, v and t for each. Time is the only quantity shared by both.',
  ['A ball rolls off a 1.25 m high table at 3.0 m/s. How far from the table does it land? (g = 10 m/s²)', ['1.5 m', '3.0 m', '0.5 m', '3.75 m'], 'Fall time: 1.25 = 5t², t = 0.5 s; distance = 3.0 × 0.5.'],
  [['Projectile', 'A body moving freely under gravity after being launched.'], ['Range', 'The horizontal distance travelled by a projectile.'], ['Time of flight', 'The total time a projectile spends in the air.']],
  [
    { q: 'A football is kicked at 20 m/s at 30° above the horizontal on level ground. Find the time of flight, the range and the maximum height. (g = 9.8 m/s²)', steps: ['Components: horizontal 20 cos 30° = 17.3 m/s; vertical 20 sin 30° = 10 m/s.', 'Time of flight: T = 2 × 10 ÷ 9.8 = **2.04 s**.', 'Range = 17.3 × 2.04 = **35.3 m**.', 'Maximum height = 10² ÷ (2 × 9.8) = **5.1 m**.'] },
  ]),

  // ---------- 3. Dynamics ----------
  L('ap-dyn-1', 'ap-dynamics', '3.1', 'Forces and Newton’s laws of motion', 14, ['Dynamics', 'Newton'], [
    'Forces are vectors. A **free-body diagram** shows all the forces acting **on one body**: weight (mg), normal reaction, tension, friction, drag, upthrust, applied forces. The vector sum is the **resultant force**.',
    '**Newton’s first law**: a body stays at rest or moves with constant velocity unless a resultant force acts on it. **Inertia** is the reluctance of a body to change its motion; mass measures it. **Newton’s second law**: the rate of change of momentum is proportional to the resultant force and in its direction; for constant mass, **F = ma**. One newton is the force giving 1 kg an acceleration of 1 m/s².',
    '**Newton’s third law**: when body A exerts a force on body B, B exerts an equal and opposite force of the same type on A. The pair act on **different bodies**, so they never cancel each other. The weight of a book and the table’s reaction on it are **not** a third-law pair (both act on the book).',
    '**Friction** opposes relative motion between surfaces. The limiting (maximum) static friction is **F = μR**, where μ is the coefficient of friction and R the normal reaction; kinetic friction is usually a little less. On a slope of angle θ, resolve the weight into mg sin θ down the slope and mg cos θ into the slope. In lifts, the apparent weight (reaction) is m(g + a) accelerating upwards and m(g − a) accelerating downwards.',
  ], 'forces-car', 'Draw the free-body diagram first, then write "resultant force = ma" along the direction of acceleration.',
  ['A 60 kg person stands in a lift accelerating upwards at 2.0 m/s². The floor pushes on them with: (g = 9.8)', ['708 N', '588 N', '468 N', '120 N'], 'R − mg = ma, so R = 60(9.8 + 2.0).'],
  [['Resultant force', 'The single force with the same effect as all the forces acting.'], ['Inertia', 'The reluctance of a body to change its state of motion.'], ['Coefficient of friction', 'The ratio of limiting friction to the normal reaction.']],
  [
    { q: 'A 1200 kg car accelerates from rest to 15 m/s in 10 s against a constant resistance of 600 N. Find the driving force.', steps: ['a = (15 − 0) ÷ 10 = 1.5 m/s².', 'Resultant force = ma = 1200 × 1.5 = 1800 N.', 'Driving force − resistance = 1800, so driving force = 1800 + 600 = **2400 N**.'] },
  ]),

  L('ap-dyn-2', 'ap-dynamics', '3.2', 'Momentum, impulse and collisions', 14, ['Momentum', 'Collisions'], [
    '**Linear momentum** p = mv is a vector, measured in kg m s⁻¹. Newton’s second law in its general form is **F = Δp/Δt**. The **impulse** of a force is FΔt, equal to the **change in momentum**; it is the area under a force-time graph.',
    'Reducing the force in a collision means increasing the time over which the momentum changes: seat belts, airbags, crumple zones, cycle helmets, bending the knees on landing and catching a fast ball with moving hands all do this.',
    'The **principle of conservation of momentum**: in a closed system with no external resultant force, the total momentum before an interaction equals the total momentum after it. It applies to all collisions and to **explosions**, where bodies initially at rest fly apart with equal and opposite momenta (gun recoil, rockets).',
    'In an **elastic collision** total kinetic energy is also conserved; for two bodies in a head-on elastic collision, the **relative speed of approach equals the relative speed of separation**. In an **inelastic collision** some kinetic energy becomes heat, sound and deformation; when the bodies stick together it is **perfectly (completely) inelastic**. Total energy is always conserved.',
  ], null, 'In collision problems, take one direction as positive and give velocities in the other direction a minus sign before you substitute.',
  ['A 0.15 kg ball hits a wall at 20 m/s and rebounds at 15 m/s. The change in momentum is:', ['5.25 kg m s⁻¹', '0.75 kg m s⁻¹', '3.0 kg m s⁻¹', '2.25 kg m s⁻¹'], 'Δp = 0.15 × (15 − (−20)) = 0.15 × 35.'],
  [['Momentum', 'Mass × velocity.'], ['Impulse', 'Force × time, equal to the change in momentum.'], ['Elastic collision', 'A collision in which total kinetic energy is conserved.']],
  [
    { q: 'A 3.0 kg trolley at 4.0 m/s hits a 1.0 kg trolley at rest. After the collision the 1.0 kg trolley moves at 4.5 m/s. Find the velocity of the 3.0 kg trolley and say whether the collision is elastic.', steps: ['Momentum before = 3.0 × 4.0 = 12 kg m s⁻¹.', 'After: 3.0v + 1.0 × 4.5 = 12, so v = **2.5 m/s** (same direction).', 'KE before = ½ × 3 × 16 = 24 J; after = ½ × 3 × 6.25 + ½ × 1 × 20.25 = 9.375 + 10.125 = 19.5 J.', 'KE is lost (4.5 J), so the collision is **inelastic**.'] },
  ]),

  // ---------- 4. Moments, work and energy ----------
  L('ap-stat-1', 'ap-statics-energy', '4.1', 'Moments, couples and equilibrium', 13, ['Statics'], [
    'The **moment** of a force about a point is the force multiplied by the **perpendicular distance** from the point to its line of action, in N m. A **couple** is a pair of equal, opposite, parallel forces whose lines of action are separated; its **torque** is one force × the perpendicular distance between them. A couple causes rotation but no linear acceleration (turning a steering wheel or a tap).',
    'The **centre of gravity** is the point through which the whole weight appears to act. For a uniform rod it is at the middle. A body is stable when its centre of gravity is low and its base is wide; it topples when the vertical line through its centre of gravity falls outside the base.',
    'For a body to be in **equilibrium**: (1) the **resultant force is zero** (sum of forces in any direction is zero), and (2) the **resultant moment about any point is zero** (the **principle of moments**: sum of clockwise moments = sum of anticlockwise moments).',
    'When three non-parallel forces keep a body in equilibrium, their lines of action **meet at a point** and the forces form a closed **triangle of forces**. Take moments about the point where an unknown force acts, so that it disappears from the equation.',
  ], 'moments-beam', 'Take moments about the point where the force you do not know (and do not need) acts; its moment is then zero.',
  ['A spanner 0.25 m long is turned with a force of 40 N at right angles at its end. The moment is:', ['10 N m', '160 N m', '0.16 N m', '40 N m'], 'Moment = 40 × 0.25.'],
  [['Moment', 'Force × perpendicular distance from the pivot to the line of action.'], ['Couple', 'Two equal, opposite, parallel forces not in the same line.'], ['Centre of gravity', 'The point through which the weight of a body appears to act.']],
  [
    { q: 'A uniform 4.0 m plank of weight 200 N rests on supports at its ends. A 600 N man stands 1.0 m from the left end. Find the force from each support.', steps: ['Moments about the left support: R_right × 4.0 = 600 × 1.0 + 200 × 2.0 = 1000, so R_right = **250 N**.', 'Vertical forces balance: R_left + 250 = 600 + 200, so R_left = **550 N**.'] },
  ]),

  L('ap-work-1', 'ap-statics-energy', '4.2', 'Work, energy, power and efficiency', 13, ['Energy', 'Power'], [
    '**Work done** = force × displacement in the direction of the force: **W = Fs cos θ**, in joules. No work is done if the displacement is at right angles to the force. Work done is the area under a force-displacement graph. Energy is the capacity to do work; when work is done, energy is transferred.',
    '**Kinetic energy** Ek = ½mv² (derived from v² = u² + 2as and F = ma). **Gravitational potential energy** change ΔEp = mgΔh near the Earth’s surface. **Elastic potential energy** in a stretched spring = ½kx² = ½Fx. The principle of **conservation of energy**: energy cannot be created or destroyed, only transferred; in a system with no friction, the loss of Ep equals the gain of Ek.',
    '**Power** is the rate of doing work or transferring energy: P = W/t, in watts. For a force moving at constant velocity, **P = Fv**: a car’s maximum speed is reached when the driving force (P/v) equals the resistive forces.',
    '**Efficiency** = useful energy (or power) output ÷ total input × 100%. Energy that is not useful is usually wasted as heat by friction and electrical resistance. No machine can be 100% efficient.',
  ], 'pulley-system', 'When friction acts, use: loss of Ep = gain of Ek + work done against friction.',
  ['A car’s engine produces 30 kW when it moves at a steady 20 m/s. The total resistive force is:', ['1500 N', '600 N', '600 kN', '150 N'], 'At steady speed the driving force equals the resistance: F = P/v = 30 000 ÷ 20.'],
  [['Work done', 'Force × displacement in the direction of the force.'], ['Power', 'The rate of doing work.'], ['Efficiency', 'Useful output divided by total input.']],
  [
    { q: 'A 50 kg child slides from rest down a slide 3.0 m high and reaches the bottom at 6.0 m/s. How much energy is lost to friction? (g = 9.8)', steps: ['Loss of Ep = mgh = 50 × 9.8 × 3.0 = 1470 J.', 'Gain of Ek = ½ × 50 × 6.0² = 900 J.', 'Energy lost to friction = 1470 − 900 = **570 J**.'] },
  ]),

  // ---------- 5. Circular motion and SHM ----------
  L('ap-circ-1', 'ap-circular-shm', '5.1', 'Circular motion', 13, ['Circular motion'], [
    'Angles are measured in **radians**: θ = arc length ÷ radius, and 2π rad = 360°. For a body moving in a circle of radius r, the **angular speed** ω = Δθ/Δt = 2π/T = 2πf, and its linear speed **v = rω**.',
    'Even at constant speed, the velocity changes direction, so the body **accelerates towards the centre**: the **centripetal acceleration a = v²/r = rω²**. By Newton’s second law, a resultant force towards the centre is needed: **F = mv²/r = mrω²**. This **centripetal force** is not a new kind of force; it is provided by tension, friction, gravity or a reaction force.',
    'Examples: a stone whirled on a string (tension); a car on a flat bend (friction between tyres and road: if v²/r is too large the car skids outwards); a car on a **banked** road (the horizontal component of the normal reaction, so less friction is needed: tan θ = v²/rg for no friction); a satellite (gravity); an electron in a magnetic field (magnetic force).',
    'In a **vertical circle** (a bucket of water swung over the head, a loop-the-loop), the speed and the tension vary. At the top, T + mg = mv²/r; the water stays in the bucket only if v² ≥ rg. At the bottom, T − mg = mv²/r, where the tension is greatest.',
  ], null, 'Never draw "centripetal force" as an extra force on a free-body diagram. Identify which real force (or resultant) points to the centre.',
  ['A wheel turns at 300 revolutions per minute. Its angular speed is about:', ['31 rad/s', '300 rad/s', '5 rad/s', '1885 rad/s'], 'f = 5 Hz; ω = 2πf = 31.4 rad/s.'],
  [['Angular speed', 'The angle turned per unit time, in rad/s.'], ['Centripetal acceleration', 'The acceleration towards the centre of a circle, v²/r.'], ['Banking', 'Tilting a road or track so the normal reaction helps provide the centripetal force.']],
  [
    { q: 'A 900 kg car rounds a flat bend of radius 50 m. The maximum friction force is 6300 N. Find the greatest safe speed.', steps: ['Friction provides the centripetal force: mv²/r ≤ 6300.', 'v² = 6300 × 50 ÷ 900 = 350.', 'v = **18.7 m/s** (about 67 km/h).'] },
  ]),

  L('ap-shm-1', 'ap-circular-shm', '5.2', 'Simple harmonic motion, damping and resonance', 15, ['Oscillations', 'SHM'], [
    'An oscillation is **simple harmonic** when the acceleration is **proportional to the displacement** from equilibrium and **directed towards** it: **a = −ω²x**. The motion is then x = A sin ωt (or A cos ωt), where A is the **amplitude** and ω = 2πf. The **period** T = 2π/ω is independent of the amplitude.',
    'Velocity v = ±ω√(A² − x²): **greatest (ωA) at the equilibrium position**, zero at the extremes. Acceleration is **greatest (ω²A) at the extremes**, zero at the equilibrium position. On graphs against time, velocity is a quarter-cycle (π/2) ahead of displacement, and acceleration is in antiphase with displacement.',
    'Two standard systems: the **mass on a spring**, **T = 2π√(m/k)**; and the **simple pendulum** for small swings, **T = 2π√(l/g)**, which is why a pendulum measures g. The total energy E = ½mω²A² is constant and continually exchanged between kinetic and potential energy.',
    'Real oscillations are **damped**: energy is removed by friction and the amplitude decreases. Light damping gives slowly decaying oscillations; **critical damping** returns the system to equilibrium in the shortest time without oscillating (car suspension); heavy damping returns it slowly. When a periodic force drives a system (**forced oscillation**), the amplitude is greatest when the driving frequency equals the natural frequency: **resonance**. Resonance is useful (tuning a radio, microwave ovens, musical instruments) or harmful (bridges, buildings in earthquakes, vibrating car parts); damping reduces the peak and broadens it.',
  ], 'shm-graphs', 'To prove a motion is SHM, show that the restoring force (or acceleration) is proportional to the displacement and opposite to it.',
  ['A simple pendulum has a period of 2.0 s on Earth. On a planet where g is four times as large, its period would be:', ['1.0 s', '4.0 s', '0.5 s', '2.0 s'], 'T ∝ 1/√g, so T halves.'],
  [['Simple harmonic motion', 'Motion in which acceleration is proportional to displacement and directed towards equilibrium.'], ['Amplitude', 'The maximum displacement from equilibrium.'], ['Resonance', 'Large amplitude oscillation when the driving frequency equals the natural frequency.']],
  [
    { q: 'A 0.50 kg mass oscillates on a spring with amplitude 0.040 m and period 0.80 s. Find ω, the maximum speed, the maximum acceleration and the total energy.', steps: ['ω = 2π ÷ 0.80 = **7.85 rad/s**.', 'v(max) = ωA = 7.85 × 0.040 = **0.31 m/s**.', 'a(max) = ω²A = 61.7 × 0.040 = **2.5 m/s²**.', 'E = ½mω²A² = ½ × 0.50 × 61.7 × 0.0016 = **0.025 J**.'] },
  ]),

  // ---------- 6. Thermal physics ----------
  L('ap-therm-1', 'ap-thermal', '6.1', 'Temperature, thermometers and internal energy', 13, ['Thermal physics', 'Temperature'], [
    '**Temperature** decides the direction of heat flow: heat flows from higher to lower temperature until **thermal equilibrium** is reached. The **thermodynamic (kelvin) scale** has its zero at **absolute zero**, where the internal energy is least; T(K) = θ(°C) + 273.15. A change of 1 K equals a change of 1 °C. (On the Fahrenheit scale, F = 1.8θ + 32.)',
    'A thermometer uses a **thermometric property** that changes steadily with temperature: the length of a liquid column (liquid-in-glass), the resistance of a metal wire (**resistance thermometer**), the pressure of a gas at constant volume (**gas thermometer**, the standard), or the e.m.f. of two metal junctions (**thermocouple**). Different thermometers agree only at the fixed points, because their properties do not vary in exactly the same way.',
    'Choosing a thermometer: liquid-in-glass is cheap and direct but limited in range; the resistance thermometer is accurate over a wide range but slow (large heat capacity); the **thermocouple** has a tiny junction and small heat capacity, so it responds fast, can be read remotely and works up to very high temperatures (furnaces); the gas thermometer is very accurate but bulky, used for calibration.',
    'The **internal energy** of a body is the sum of the random **kinetic energies** and the **potential energies** of its molecules. Raising the temperature increases the molecular kinetic energy; changing state (melting, boiling) increases the potential energy at constant temperature. Heat is energy transferred because of a temperature difference.',
  ], 'clinical-thermometer', 'Always convert to kelvin in gas-law and thermodynamics equations; temperature differences can stay in °C.',
  ['A thermocouple is chosen to measure the temperature of a small flame because it:', ['Has a small heat capacity and responds quickly to high temperatures', 'Contains mercury', 'Is very large', 'Works only below 100 °C'], 'Its junction can be very small.'],
  [['Absolute zero', 'The lowest possible temperature, 0 K, where internal energy is least.'], ['Thermometric property', 'A property that changes steadily with temperature.'], ['Internal energy', 'The total random kinetic and potential energy of the molecules.']],
  [
    { q: 'A platinum resistance thermometer has resistance 4.00 Ω at 0 °C and 5.50 Ω at 100 °C. Its resistance in a liquid is 4.90 Ω. Find the temperature on this scale.', steps: ['θ = (R − R₀) ÷ (R₁₀₀ − R₀) × 100.', '= (4.90 − 4.00) ÷ (5.50 − 4.00) × 100 = 0.90 ÷ 1.50 × 100.', '= **60 °C** on the platinum resistance scale.'] },
  ]),

  L('ap-therm-2', 'ap-thermal', '6.2', 'Specific heat capacity, latent heat and heat transfer', 15, ['Thermal physics', 'Heat transfer'], [
    'The **specific heat capacity** c is the energy needed to raise the temperature of 1 kg of a substance by 1 K: **Q = mcΔθ**. Water’s high value (4200 J kg⁻¹ K⁻¹) makes it a good coolant and moderates coastal climates. It is measured electrically: a heater supplies energy **VIt** to a lagged block or liquid, and c = VIt ÷ (mΔθ); in the **method of mixtures**, heat lost by a hot body = heat gained by the cold water and calorimeter.',
    'The **specific latent heat** l is the energy needed to change the state of 1 kg without a temperature change: **Q = ml**. For water, latent heat of fusion = 3.3 × 10⁵ J/kg and of vaporisation = 2.26 × 10⁶ J/kg. Vaporisation needs more energy than melting because the molecules must be separated completely and work is done pushing back the atmosphere.',
    'Heat travels by **conduction** (in solids: lattice vibrations, and free electrons in metals), **convection** (bulk movement of fluids caused by density differences), **radiation** (infrared electromagnetic waves, needing no medium) and **evaporation**. The rate of conduction through a slab is **Q/t = kA(θ₁ − θ₂)/x**, where k is the **thermal conductivity** (copper 385, glass 1, air 0.025 W m⁻¹ K⁻¹).',
    'Applications: double glazing and roof insulation trap air; cooking pots have copper or aluminium bases; houses in hot regions use thick earth walls and light-coloured roofs; solar water heaters have black absorbers behind glass. Dull black surfaces are the best absorbers and emitters of radiation; shiny surfaces are the poorest.',
  ], 'heat-transfer', 'In heating curves, sloping parts use Q = mcΔθ; flat parts (changes of state) use Q = ml.',
  ['Steam at 100 °C scalds more badly than water at 100 °C because steam:', ['Releases its latent heat of vaporisation as it condenses on the skin', 'Is hotter', 'Has a lower specific heat capacity', 'Is a gas that cannot condense'], 'Each kilogram condensing gives out 2.26 × 10⁶ J before it even starts to cool.'],
  [['Specific heat capacity', 'The energy to raise 1 kg of a substance by 1 K.'], ['Specific latent heat', 'The energy to change the state of 1 kg without a change in temperature.'], ['Thermal conductivity', 'The rate of heat flow per unit area per unit temperature gradient.']],
  [
    { q: 'How much energy is needed to turn 0.50 kg of ice at −10 °C into water at 20 °C? (c(ice) = 2100, c(water) = 4200 J kg⁻¹ K⁻¹, l(fusion) = 3.3 × 10⁵ J/kg)', steps: ['Warm the ice to 0 °C: 0.50 × 2100 × 10 = 10 500 J.', 'Melt it: 0.50 × 3.3 × 10⁵ = 165 000 J.', 'Warm the water to 20 °C: 0.50 × 4200 × 20 = 42 000 J.', 'Total = **217 500 J ≈ 2.2 × 10⁵ J**.'] },
  ]),

  // ---------- 7. Current electricity ----------
  L('ap-elec-1', 'ap-current', '7.1', 'Charge, current, potential difference and resistance', 14, ['Electricity'], [
    '**Electric current** is the rate of flow of charge: **I = Q/t**, so one coulomb is one ampere-second. In metals the charge carriers are free electrons; in electrolytes and gases they are ions. The current in a conductor is I = **nAvq**, where n is the number of carriers per m³, A the cross-section, v the **drift velocity** (often less than 1 mm/s) and q the charge on each carrier.',
    '**Potential difference** is the energy transferred per unit charge from electrical to other forms: **V = W/Q**, so 1 V = 1 J/C. **Resistance** R = V/I, in ohms. **Ohm’s law**: the current in a metallic conductor is proportional to the p.d. across it, provided the temperature is constant. I-V graphs: a straight line through the origin for an ohmic resistor; a curve for a **filament lamp** (resistance rises as it heats); for a **diode**, current flows only above about 0.6 V in the forward direction.',
    'The resistance of a wire is **R = ρL/A**, where ρ is the **resistivity** of the material (copper 1.7 × 10⁻⁸ Ω m). The resistance of a metal rises with temperature, as vibrating ions obstruct the electrons; that of a **thermistor** (NTC) falls, as more charge carriers are freed.',
    'Electrical **power**: P = VI = I²R = V²/R, and energy W = VIt. Resistors in **series** add: R = R₁ + R₂ + …; in **parallel**, 1/R = 1/R₁ + 1/R₂ + …, and the combined resistance is less than the smallest. Household energy is sold in kilowatt-hours (1 kWh = 3.6 × 10⁶ J).',
  ], 'series-parallel', 'For resistivity, convert the diameter to a radius in metres and use A = πr²; mm² errors are the commonest mistake.',
  ['A 2.0 m length of wire of cross-section 1.0 × 10⁻⁷ m² has resistance 0.34 Ω. Its resistivity is:', ['1.7 × 10⁻⁸ Ω m', '6.8 × 10⁻⁸ Ω m', '1.7 × 10⁻⁶ Ω m', '3.4 × 10⁻⁸ Ω m'], 'ρ = RA/L = 0.34 × 1.0 × 10⁻⁷ ÷ 2.0.'],
  [['Electric current', 'The rate of flow of charge.'], ['Potential difference', 'The energy transferred per unit charge.'], ['Resistivity', 'A property of a material: ρ = RA/L.']],
  [
    { q: 'A 2.0 kW kettle runs on 220 V for 3 minutes. Find the current, its resistance and the energy used.', steps: ['I = P/V = 2000 ÷ 220 = **9.1 A**.', 'R = V/I = 220 ÷ 9.1 = **24 Ω** (or V²/P).', 'Energy = Pt = 2000 × 180 = **3.6 × 10⁵ J** (0.10 kWh).'] },
  ]),

  L('ap-elec-2', 'ap-current', '7.2', 'E.m.f., internal resistance and Kirchhoff’s laws', 14, ['Electricity', 'Circuits'], [
    'The **electromotive force (e.m.f.)** of a source is the energy converted from other forms to electrical energy per unit charge passing through it. Real sources have **internal resistance r**, so some energy is wasted inside. **E = V + Ir**, so the terminal p.d. **V = E − Ir** falls as the current rises. Plotting V against I gives a straight line with intercept E and gradient −r.',
    '**Maximum power** is delivered to an external load when its resistance equals the internal resistance (R = r), but the efficiency is then only 50%. Car batteries have very small internal resistance so they can supply the large current to the starter motor.',
    '**Kirchhoff’s first law** (conservation of **charge**): the sum of currents into any junction equals the sum of currents out. **Kirchhoff’s second law** (conservation of **energy**): around any closed loop, the sum of the e.m.f.s equals the sum of the p.d.s (IR terms).',
    'Using Kirchhoff’s laws: label unknown currents with assumed directions, apply the first law at junctions, write the second law for enough independent loops, and solve the simultaneous equations. A negative answer simply means the current flows the other way.',
  ], 'circuit-symbols', 'Go round each loop in one direction; count an IR term as positive when you travel in the direction of the assumed current.',
  ['A battery of e.m.f. 12 V and internal resistance 0.50 Ω is connected to a 5.5 Ω resistor. The current is:', ['2.0 A', '2.4 A', '24 A', '1.0 A'], 'I = E ÷ (R + r) = 12 ÷ 6.0.'],
  [['E.m.f.', 'The energy converted to electrical energy per unit charge by a source.'], ['Internal resistance', 'The resistance inside a source, which wastes some energy.'], ['Kirchhoff’s second law', 'Around any loop, the sum of e.m.f.s equals the sum of p.d.s.']],
  [
    { q: 'When a cell drives 0.50 A, its terminal p.d. is 1.40 V; when it drives 1.0 A, the terminal p.d. is 1.30 V. Find its e.m.f. and internal resistance.', steps: ['E = V + Ir gives E = 1.40 + 0.50r and E = 1.30 + 1.0r.', 'Subtract: 0 = 0.10 − 0.50r, so r = **0.20 Ω**.', 'E = 1.40 + 0.50 × 0.20 = **1.50 V**.'] },
  ]),

  L('ap-elec-3', 'ap-current', '7.3', 'Potential dividers, the potentiometer and the Wheatstone bridge', 14, ['Electricity', 'Practical'], [
    'A **potential divider** is two resistors in series across a supply; the output across one is **Vout = Vin × R₂/(R₁ + R₂)**. Replacing a resistor with a **thermistor** or an **LDR** makes a sensor circuit whose output changes with temperature or light, used to switch on fans, alarms or street lights.',
    'The **potentiometer** is a long uniform resistance wire carrying a steady current from a driver cell, so the p.d. along it is proportional to length. To measure an e.m.f., a jockey is moved along the wire until the galvanometer in the test circuit reads **zero (balance)**. Because no current flows from the cell under test at balance, the potentiometer measures its **e.m.f.** exactly, unlike a voltmeter. Comparing two cells: E₁/E₂ = l₁/l₂. It can also measure internal resistance: r = R(l₀ − l)/l.',
    'The **Wheatstone bridge** has four resistors P, Q, R and S with a galvanometer between the middle points. At balance no current flows through the galvanometer and **P/Q = R/S**. The **metre bridge** is a practical form using a 1 m wire: an unknown resistance X is found from X/R = l/(100 − l).',
    'Null (balance) methods are accurate because they do not depend on the calibration of the meter: the galvanometer only has to show zero. Errors come from the end resistances of the wire and non-uniformity; reversing the resistors and averaging reduces them.',
  ], 'wheatstone-bridge', 'At balance, no current flows in the galvanometer branch. Write that sentence before using the ratio.',
  ['A potential divider has 2.0 kΩ and 3.0 kΩ resistors across 10 V. The p.d. across the 3.0 kΩ resistor is:', ['6.0 V', '4.0 V', '10 V', '3.0 V'], '10 × 3.0 ÷ 5.0.'],
  [['Potential divider', 'Resistors in series used to provide a fraction of a supply voltage.'], ['Balance point', 'The position at which the galvanometer reads zero.'], ['Null method', 'A measurement made by adjusting until a meter reads zero.']],
  [
    { q: 'On a potentiometer, a standard cell of e.m.f. 1.018 V balances at 50.9 cm, and a test cell at 74.5 cm. Find the e.m.f. of the test cell.', steps: ['E is proportional to the balance length: E₂ = E₁ × l₂/l₁.', 'E₂ = 1.018 × 74.5 ÷ 50.9.', '= **1.49 V**.'] },
  ]),

  // ---------- 8. Properties of matter ----------
  L('ap-matter-1', 'ap-matter', '8.1', 'Elasticity: Hooke’s law, stress, strain and the Young modulus', 14, ['Matter', 'Elasticity'], [
    'In solids, atoms are held at an equilibrium separation where attractive and repulsive forces balance; the **force-separation** and **potential energy-separation** curves explain why solids resist both stretching and compression. Solids may be **crystalline** (regular lattice, metals), **amorphous** or **glassy** (no long-range order) or **polymeric** (long chain molecules, rubber).',
    '**Hooke’s law**: the extension of a spring or wire is proportional to the load, F = kx, up to the **limit of proportionality**. Beyond the **elastic limit** the material is permanently (plastically) deformed. Springs in series: 1/k = 1/k₁ + 1/k₂; in parallel: k = k₁ + k₂.',
    'To compare materials rather than particular samples: **stress** σ = F/A (Pa), **strain** ε = extension/original length (no units), and the **Young modulus E = stress/strain = FL/(Ax)**. It is measured by hanging loads on a long thin wire and measuring the extension with a vernier against a reference wire (Searle’s apparatus), the diameter with a micrometer at several places.',
    'A **stress-strain graph** for a ductile metal shows the straight Hooke’s-law region, the elastic limit, the **yield point**, a plastic region, the **ultimate tensile stress** (maximum) and necking before **fracture**. **Brittle** materials (glass, cast iron) break with little plastic flow. The **strain energy** stored = ½Fx = area under the force-extension graph (energy per unit volume = ½σε). Rubber shows **hysteresis**: some energy is turned into heat on each stretch-and-release cycle.',
  ], 'stress-strain', 'The Young modulus is a property of the material; the spring constant depends also on the sample’s length and cross-section.',
  ['Two identical springs of k = 200 N/m are joined in series. The combined spring constant is:', ['100 N/m', '400 N/m', '200 N/m', '50 N/m'], '1/k = 1/200 + 1/200.'],
  [['Stress', 'Force per unit cross-sectional area.'], ['Strain', 'Extension divided by original length.'], ['Young modulus', 'Stress divided by strain in the Hooke’s law region.']],
  [
    { q: 'A steel wire 2.0 m long with diameter 0.50 mm stretches 2.0 mm under a load of 40 N. Find the Young modulus.', steps: ['Cross-section: A = π(0.25 × 10⁻³)² = 1.96 × 10⁻⁷ m².', 'Stress = 40 ÷ 1.96 × 10⁻⁷ = 2.04 × 10⁸ Pa.', 'Strain = 2.0 × 10⁻³ ÷ 2.0 = 1.0 × 10⁻³.', 'E = stress ÷ strain = **2.0 × 10¹¹ Pa**, the usual value for steel.'] },
  ]),

  L('ap-matter-2', 'ap-matter', '8.2', 'Density, pressure in fluids and surface tension', 13, ['Matter', 'Fluids'], [
    'The **kinetic model** explains the states: in solids molecules vibrate about fixed positions; in liquids they are still close but can move past each other, so liquids flow and are nearly incompressible; in gases they are far apart and move randomly at high speed. **Density** ρ = m/V; a gas is about a thousand times less dense than its liquid.',
    '**Pressure** is force per unit area, p = F/A, in pascals. In a fluid at rest, the pressure at depth h below the surface is **p = hρg** (plus atmospheric pressure at the surface), acting equally in all directions. This is the basis of manometers, barometers, hydraulic machines (pressure is transmitted equally through a liquid) and the need for thick dam walls.',
    'Molecules at a liquid surface are pulled inwards by their neighbours, so the surface behaves like a stretched skin with **surface tension** γ, the force per unit length acting along the surface (N/m). It explains spherical drops, insects walking on water and capillary rise. The excess pressure inside a drop is **2γ/r**, and inside a soap bubble (two surfaces) **4γ/r**. Surface tension **decreases as temperature rises** and is lowered by detergents.',
    'Whether a liquid wets a surface depends on the balance between **cohesion** (liquid-liquid attraction) and **adhesion** (liquid-solid attraction): water wets clean glass and rises in a capillary tube; mercury does not, and is depressed. The capillary rise is h = 2γ cos θ/(ρgr), larger in narrower tubes, which is how water moves through soil and fabric.',
  ], 'manometer', 'For drops and bubbles, count the surfaces: a drop has one, a soap bubble two.',
  ['The excess pressure inside a soap bubble of radius 2.0 cm (γ = 0.025 N/m) is:', ['5.0 Pa', '2.5 Pa', '1.25 Pa', '50 Pa'], 'Δp = 4γ/r = 4 × 0.025 ÷ 0.020.'],
  [['Density', 'Mass per unit volume.'], ['Surface tension', 'The force per unit length acting in the surface of a liquid.'], ['Adhesion', 'The attraction between molecules of a liquid and those of a solid.']],
  [
    { q: 'Find the total pressure on a diver 15 m below the surface of the sea (ρ = 1030 kg/m³, atmospheric pressure 1.01 × 10⁵ Pa, g = 9.8).', steps: ['Pressure due to the water = hρg = 15 × 1030 × 9.8 = 1.51 × 10⁵ Pa.', 'Total = 1.01 × 10⁵ + 1.51 × 10⁵ = **2.52 × 10⁵ Pa**, about 2.5 times atmospheric pressure.'] },
  ]),

  // ---------- 9. Gases and thermodynamics ----------
  L('ap-gas-1', 'ap-gases', '9.1', 'The gas laws, the ideal gas equation and kinetic theory', 15, ['Gases', 'Kinetic theory'], [
    'For a fixed mass of gas: **Boyle’s law**, pV = constant at constant temperature; **Charles’s law**, V/T = constant at constant pressure; the **pressure law**, p/T = constant at constant volume, with T in kelvin. Extrapolating V or p against θ to zero gives absolute zero, about −273 °C. Combined: pV/T = constant.',
    'An **ideal gas** obeys **pV = nRT** exactly, where n is the number of moles and R = 8.31 J mol⁻¹ K⁻¹. In terms of molecules, **pV = NkT**, where N is the number of molecules and the **Boltzmann constant** k = R/N_A = 1.38 × 10⁻²³ J K⁻¹. Real gases behave most like ideal gases at low pressure and high temperature.',
    'The **kinetic theory** assumes that a gas consists of a very large number of molecules in random motion, of negligible volume, with no forces between them except during collisions, which are perfectly elastic and of negligible duration. Each collision with a wall changes the molecule’s momentum; the force per unit area gives **pV = ⅓Nm⟨c²⟩**, where ⟨c²⟩ is the **mean square speed**.',
    'Comparing with pV = NkT gives **½m⟨c²⟩ = (3/2)kT**: the mean kinetic energy of a molecule is proportional to the thermodynamic temperature. The **root mean square speed** c(rms) = √(3kT/m) = √(3RT/M); at the same temperature, lighter molecules move faster, which is why hydrogen escapes from the Earth’s atmosphere. **Brownian motion** of smoke particles is evidence for this random molecular motion.',
  ], 'boyle-apparatus', 'Write down the conditions (fixed mass, constant T or p or V) and convert to kelvin before using any gas law.',
  ['The r.m.s. speed of the molecules of a gas is doubled. Its thermodynamic temperature has been multiplied by:', ['4', '2', '√2', '8'], 'T ∝ ⟨c²⟩.'],
  [['Ideal gas', 'A gas that obeys pV = nRT exactly.'], ['Boltzmann constant', 'k = R/N_A, the gas constant per molecule.'], ['Root mean square speed', 'The square root of the mean of the squares of the molecular speeds.']],
  [
    { q: 'A tyre holds air at 200 kPa and 27 °C. After a journey the air is at 57 °C. Assuming the volume is constant, find the new pressure.', steps: ['T₁ = 300 K, T₂ = 330 K.', 'Pressure law: p₂ = p₁ × T₂/T₁ = 200 × 330 ÷ 300.', 'p₂ = **220 kPa**.'] },
    { q: 'Find the r.m.s. speed of nitrogen molecules (M = 0.028 kg/mol) at 300 K.', steps: ['c(rms) = √(3RT/M) = √(3 × 8.31 × 300 ÷ 0.028).', '= √(2.67 × 10⁵).', '= **517 m/s**.'] },
  ]),

  L('ap-gas-2', 'ap-gases', '9.2', 'Internal energy and the first law of thermodynamics', 14, ['Thermodynamics'], [
    'For an **ideal gas**, there are no intermolecular forces, so its internal energy is entirely the random kinetic energy of its molecules and depends **only on its temperature**: U = (3/2)nRT for a monatomic gas.',
    'The **first law of thermodynamics** is the conservation of energy applied to heat and work: **ΔU = Q + W**, where ΔU is the increase in internal energy, Q the heat supplied **to** the system and W the work done **on** the system. (Some books write ΔU = Q − W, with W the work done **by** the gas; be clear which convention is used.)',
    'When a gas expands at constant pressure, the work it does is **pΔV**; generally, work is the **area under the p-V graph**. Special changes: **isothermal** (constant temperature, ΔU = 0, so heat in = work done by the gas; slow changes in good thermal contact); **adiabatic** (no heat exchange, Q = 0: rapid compression warms the gas, as in a bicycle pump or a diesel engine; rapid expansion cools it, as when gas escapes from a cylinder); **isovolumetric** (constant volume, W = 0, ΔU = Q).',
    'A **heat engine** takes heat from a hot source, converts part of it to work and rejects the rest to a cold sink: efficiency = work out ÷ heat in, and it can never be 100% (the second law). Petrol and diesel engines, steam turbines in thermal power stations and refrigerators (heat pumps run in reverse) are all applications.',
  ], null, 'Write the first law with the sign convention stated, then substitute with signs: heat given out and work done by the gas are negative in ΔU = Q + W.',
  ['A gas is supplied with 500 J of heat and does 200 J of work expanding. Its internal energy changes by:', ['+300 J', '+700 J', '−300 J', '−700 J'], 'ΔU = Q + W = 500 + (−200).'],
  [['First law of thermodynamics', 'ΔU = Q + W: internal energy change = heat supplied + work done on the system.'], ['Isothermal change', 'A change at constant temperature.'], ['Adiabatic change', 'A change with no heat exchanged with the surroundings.']],
  [
    { q: 'A gas at a constant pressure of 1.0 × 10⁵ Pa expands from 2.0 × 10⁻³ m³ to 5.0 × 10⁻³ m³ while 800 J of heat is supplied. Find the work done by the gas and the change in internal energy.', steps: ['Work done by the gas = pΔV = 1.0 × 10⁵ × 3.0 × 10⁻³ = **300 J**.', 'Work done on the gas W = −300 J.', 'ΔU = Q + W = 800 − 300 = **+500 J**: the gas also gets hotter.'] },
  ]),
];
