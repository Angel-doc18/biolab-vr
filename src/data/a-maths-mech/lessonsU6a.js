// A Level Mechanics lessons (0765), Upper Sixth (part 1): statics, centres of
// mass and friction, kinematics in a line and in a plane, projectiles,
// relative velocity and circular motion. Original text written for this app.
// g = 9.8 m s⁻² unless a question says otherwise.

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

export const LESSONS_M6A = [
  // ---------- 3. Forces, moments and equilibrium ----------
  L('me-stat-1', 'mm-u6-statics', '3.1', 'Resolving forces; equilibrium of a particle and Lami’s theorem', 17, ['Statics'], [
    'A force is a vector: it has a magnitude in newtons (N), a direction and a line of action. A force F at angle θ to the x-axis has **components F cos θ and F sin θ**. The **resultant** of several forces is their vector sum: add the x-components (X) and the y-components (Y); then R = √(X² + Y²) and tan α = Y/X.',
    'A particle is in **equilibrium** when the resultant force on it is zero: **the components in any two perpendicular directions each add up to zero**. Choose directions that keep the working short, for example along and perpendicular to a slope.',
    'Three forces in equilibrium form a closed **triangle of forces**. **Lami’s theorem**: if three forces P, Q and R keep a particle in equilibrium, each is proportional to the sine of the angle between the other two: **P/sin α = Q/sin β = R/sin γ**.',
    'The usual forces: the **weight** W = mg, vertically down (take g = 9.8 m s⁻² unless told otherwise); the **normal reaction** R, at right angles to a surface; the **tension** in a string, pulling away from the particle; and **friction**, along a rough surface.',
  ], 'am-forces-resolve', 'Resolve in two directions at right angles and set each sum to zero.',
  ['A force of 10 N at 30° above the horizontal has horizontal component:', ['8.66 N', '5 N', '10 N', '17.3 N'], '10 cos 30°.'],
  [['Resultant', 'The single force with the same effect as several forces together.'], ['Equilibrium', 'A state in which the resultant force (and moment) is zero.'], ['Lami’s theorem', 'For three forces in equilibrium, each force ÷ the sine of the angle between the other two is the same.']],
  [
    { q: 'A particle of weight 20 N hangs from two strings making 30° and 60° with the horizontal. Find the tensions.', steps: ['Horizontally: T₁ cos 30° = T₂ cos 60°, so T₂ = √3 T₁.', 'Vertically: T₁ sin 30° + T₂ sin 60° = 20, so ½T₁ + (3/2)T₁ = 20 and T₁ = 10 N.', '**T₁ = 10 N and T₂ = 10√3 ≈ 17.3 N**; Lami’s theorem agrees: T₁ = 20 sin 150° ÷ sin 90° = 10.'] },
    { q: 'Find the resultant of 5 N along the x-axis, 8 N at 60° to the x-axis and 3 N along the negative y-axis.', steps: ['X = 5 + 8 cos 60° = 9; Y = 8 sin 60° − 3 = 3.93.', 'R = √(81 + 15.4) = 9.82 N.', '**R ≈ 9.82 N at 23.6° to the x-axis** (tan α = 3.93/9).'] },
  ]),

  L('me-stat-2', 'mm-u6-statics', '3.2', 'Moments, couples and the equilibrium of a rigid body', 17, ['Statics'], [
    'The **moment** of a force F about a point O is **F × d**, where d is the perpendicular distance from O to the line of action of F. It measures the turning effect, in N m, clockwise or anticlockwise. **Varignon’s theorem**: the moment of a force about a point equals the sum of the moments of its components.',
    'A **couple** is a pair of equal, opposite, parallel forces with different lines of action. It has no resultant force, but a turning moment **F × d** (d the distance between the lines), the same about every point.',
    'A **rigid body** is in equilibrium under coplanar forces when (1) the resultant force is zero, so the components add to zero in two directions, and (2) the total moment about **any** point is zero. Taking moments about a point where an unknown force acts removes it from that equation.',
    'For a beam on supports, the upward reactions balance the loads, and moments about one support give the reaction at the other. The weight of a **uniform** beam acts at its mid-point.',
  ], 'am-beam', 'Take moments about the point where the most unknown forces act.',
  ['A 12 N force acts at right angles to a door, 0.5 m from the hinge. Its moment about the hinge is:', ['6 N m', '24 N m', '12.5 N m', '0.5 N m'], '12 × 0.5.'],
  [['Moment', 'Force × perpendicular distance from the point to its line of action.'], ['Couple', 'Two equal, opposite, parallel forces: a turning effect with no resultant force.'], ['Rigid body', 'A body whose shape does not change, so forces at different points can turn it.']],
  [
    { q: 'A uniform beam AB, 4 m long and of weight 200 N, rests on supports at A and at C, 1 m from B. A load of 150 N hangs at B. Find the reactions R₁ at A and R₂ at C.', steps: ['Moments about A: 3R₂ = 200 × 2 + 150 × 4 = 1000, so R₂ = 333 N.', 'Resolving vertically: R₁ + R₂ = 200 + 150 = 350.', '**R₁ = 16.7 N and R₂ = 333 N**.'] },
    { q: 'Forces of 6 N act at the ends of a rod 0.8 m long, at right angles to it and in opposite directions. Describe their effect.', steps: ['They are equal, opposite and parallel: a couple.', 'Its moment is 6 × 0.8 = 4.8 N m, and the resultant force is zero.', 'The rod **turns, but its centre is not pushed anywhere**.'] },
  ]),

  L('me-stat-3', 'mm-u6-statics', '3.3', 'Hooke’s law: elastic strings and springs', 15, ['Statics'], [
    '**Hooke’s law**: the tension in an elastic string or spring is proportional to its extension: **T = λx/l**, where l is the natural length, x the extension and λ the **modulus of elasticity** (in newtons). Equivalently **T = kx**, with stiffness k = λ/l.',
    'A spring can also be compressed, and then pushes with a thrust λx/l. An elastic string goes **slack** (tension 0) when it is shorter than its natural length.',
    'In equilibrium problems, find the extension from the geometry, use T = λx/l, then resolve. The work done stretching from extension 0 to x is **λx²/(2l)**: the energy stored in the string.',
  ], 'am-spring', 'Extension = stretched length − natural length.',
  ['A string of natural length 0.5 m and modulus 20 N is stretched by 0.1 m. The tension is:', ['4 N', '10 N', '2 N', '40 N'], '20 × 0.1 ÷ 0.5.'],
  [['Natural length', 'The length of a string or spring with no tension.'], ['Modulus of elasticity', 'λ in T = λx/l, measured in newtons.'], ['Elastic potential energy', 'λx²/(2l), the energy stored in a stretched string.']],
  [
    { q: 'A 2 kg particle hangs at rest on an elastic string of natural length 0.8 m and modulus 98 N. Find the extension.', steps: ['In equilibrium T = mg = 19.6 N.', '98x/0.8 = 19.6.', '**x = 0.16 m**, so the string is 0.96 m long.'] },
    { q: 'A spring of natural length 0.3 m is compressed to 0.25 m by a force of 15 N. Find its modulus and the energy stored.', steps: ['x = 0.05 m: 15 = λ × 0.05 ÷ 0.3, so **λ = 90 N**.', 'Energy = λx²/(2l) = 90 × 0.0025 ÷ 0.6.', '= **0.375 J**.'] },
  ]),

  // ---------- 4. Centre of mass and friction ----------
  L('me-com-1', 'mm-u6-com-friction', '4.1', 'Centres of mass of particles and laminae', 17, ['Statics'], [
    'For particles of masses mᵢ at points (xᵢ, yᵢ), the **centre of mass** (x̄, ȳ) satisfies **x̄ Σmᵢ = Σmᵢxᵢ** and **ȳ Σmᵢ = Σmᵢyᵢ**; with position vectors, r̄ = Σmᵢrᵢ ÷ Σmᵢ. It is the point where the whole weight can be taken to act.',
    'Uniform laminae, by symmetry: a rectangle at its centre; a triangle at the mean of its vertices (two-thirds of the way down each median); a semicircular lamina of radius r at **4r/(3π)** from its straight edge.',
    '**Composite bodies**: treat each part as a particle at its own centre of mass, with mass proportional to its area for a uniform lamina, and use the formula. A **hole** counts as a negative mass.',
    'A lamina **suspended** freely from a point A hangs with its centre of mass G vertically below A. The angle between AG and an edge gives the angle that edge makes with the vertical.',
  ], 'am-composite-lamina', 'Split the body into simple parts, then treat each part as a particle.',
  ['Masses of 2 kg at x = 0 and 3 kg at x = 5 have their centre of mass at x =', ['3', '2.5', '2', '5'], '15 ÷ 5.'],
  [['Centre of mass', 'The point where the whole weight of a body acts.'], ['Lamina', 'A flat plate whose thickness can be ignored.'], ['Composite body', 'A body made of simple parts, each with a known centre of mass.']],
  [
    { q: 'An L-shaped lamina is a 6 × 2 rectangle (0 ≤ x ≤ 6, 0 ≤ y ≤ 2) with a 2 × 4 rectangle on top of it (0 ≤ x ≤ 2, 2 ≤ y ≤ 6). Find its centre of mass.', steps: ['Areas 12 at (3, 1) and 8 at (1, 4); total 20.', 'x̄ = (12 × 3 + 8 × 1) ÷ 20 = 2.2 and ȳ = (12 × 1 + 8 × 4) ÷ 20 = 2.2.', 'The centre of mass is **(2.2, 2.2)**.'] },
    { q: 'The lamina above hangs freely from the corner O. Find the angle that the edge along the x-axis makes with the vertical.', steps: ['OG hangs vertically, with G = (2.2, 2.2).', 'OG makes an angle tan⁻¹(2.2/2.2) = 45° with the x-axis edge.', 'So that edge makes **45° with the vertical**.'] },
  ]),

  L('me-com-2', 'mm-u6-com-friction', '4.2', 'Friction and particles on rough planes', 17, ['Statics'], [
    '**Friction** acts along the surface, opposing motion or the tendency to move. It takes any value up to a maximum, **limiting friction**: **F ≤ μR**, where μ is the **coefficient of friction** and R the normal reaction. When the body slides, F = μR.',
    'On a rough plane inclined at α, with no other force across the slope, R = mg cos α. A particle on the point of slipping down has friction μR acting up the slope, so mg sin α = μ mg cos α: **μ = tan α**. The angle λ with tan λ = μ is the **angle of friction**.',
    'With a pulling force P, decide which way the particle tends to move and put friction the other way; resolve along and perpendicular to the plane; and use F = μR only when the particle is moving or on the point of moving.',
  ], 'am-rough-slope', 'Use F = μR only at the point of slipping or when sliding.',
  ['A 5 kg block rests on a rough horizontal floor with μ = 0.4. The least horizontal force that will move it is:', ['19.6 N', '49 N', '2 N', '12.25 N'], 'μR = 0.4 × 49.'],
  [['Coefficient of friction', 'μ, with limiting friction F = μR.'], ['Limiting equilibrium', 'The state of being on the point of slipping.'], ['Angle of friction', 'λ, with tan λ = μ.']],
  [
    { q: 'A 4 kg box on a plane inclined at 30° is on the point of slipping down. Find μ.', steps: ['R = 4g cos 30° and F = 4g sin 30°, with F = μR.', 'μ = tan 30°.', '**μ = 0.577**.'] },
    { q: 'A 10 kg crate on a rough horizontal floor (μ = 0.3) is pulled by a rope at 20° above the horizontal. Find the tension that makes it just move.', steps: ['Vertically: R + T sin 20° = 98, so R = 98 − 0.342T.', 'Just moving: T cos 20° = 0.3R = 0.3(98 − 0.342T).', '0.940T + 0.103T = 29.4, so **T = 28.2 N**.'] },
  ]),

  L('me-com-3', 'mm-u6-com-friction', '4.3', 'Rigid bodies with friction: ladders, sliding and toppling', 17, ['Statics'], [
    'A **ladder** resting against a wall: write three equations, resolving horizontally, resolving vertically and taking moments (usually about the foot). In limiting equilibrium, friction at a rough contact equals μ × the reaction there.',
    'A uniform ladder of length 2a and weight W leans at angle θ to the horizontal against a **smooth** wall, on rough ground with coefficient μ. Moments about the foot: S × 2a sin θ = W × a cos θ, so S = ½W cot θ. Resolving: F = S and R = W. It is about to slip when ½W cot θ = μW, that is when **tan θ = 1/(2μ)**.',
    '**Sliding or toppling**: a block on a plane topples when the vertical line through its centre of mass falls outside its base, and slides when friction reaches μR first. Work out the angle (or force) for each; the smaller one happens first.',
  ], 'am-ladder', 'Three unknowns need three equations: resolve twice and take moments once.',
  ['A ladder on rough ground rests against a smooth wall. The wall pushes on the ladder:', ['horizontally', 'vertically', 'along the ladder', 'not at all'], 'A smooth surface gives only a normal reaction.'],
  [['Smooth', 'Having no friction: the only contact force is the normal reaction.'], ['Toppling', 'Tipping over about an edge when the weight acts outside the base.'], ['Limiting friction', 'F = μR at the point of slipping.']],
  [
    { q: 'A uniform ladder rests against a smooth wall on ground with μ = 0.4. Find the least angle with the horizontal at which it can rest.', steps: ['On the point of slipping, tan θ = 1/(2μ).', 'tan θ = 1/0.8 = 1.25.', '**θ = 51.3°**; any steeper angle is safe.'] },
    { q: 'A cube of side 0.4 m rests on a rough plane (μ = 0.8) whose angle is slowly increased. Does it slide or topple first?', steps: ['Toppling: the weight passes the lower edge when tan α = half-width ÷ half-height = 1, at 45°.', 'Sliding: tan α = μ = 0.8, at 38.7°.', '38.7° comes first, so the cube **slides** before it can topple.'] },
  ]),

  // ---------- 8. Motion in a straight line ----------
  L('me-kin-1', 'mm-u6-kinematics', '8.1', 'Constant acceleration, graphs and motion under gravity', 17, ['Kinematics'], [
    'Displacement s, velocity v and acceleration a are vectors along the line; their signs give their directions. For **constant acceleration** a, initial velocity u and time t:\n- v = u + at\n- s = ½(u + v)t\n- s = ut + ½at²\n- v² = u² + 2as\n- s = vt − ½at².',
    'On a **velocity–time graph** the gradient is the acceleration and the **area under the graph is the displacement**. On a displacement–time graph the gradient is the velocity.',
    '**Motion under gravity** (no air resistance): a = g = 9.8 m s⁻² downwards. Take one direction as positive and keep to it. A stone thrown up at 14.7 m s⁻¹ rises for 14.7 ÷ 9.8 = 1.5 s, to a height of u²/(2g) = 11.0 m.',
  ], 'am-vt-graph', 'Choose a positive direction and give every vector its sign.',
  ['A car accelerates from 10 m s⁻¹ at 2 m s⁻² for 5 s. Its final speed is:', ['20 m s⁻¹', '12 m s⁻¹', '25 m s⁻¹', '15 m s⁻¹'], 'v = u + at.'],
  [['Displacement', 'The change of position, with direction.'], ['Uniform acceleration', 'Acceleration that stays constant.'], ['Velocity–time graph', 'A graph whose gradient is acceleration and whose area is displacement.']],
  [
    { q: 'A train starts from rest, accelerates uniformly to 20 m s⁻¹ in 40 s, runs at that speed for 2 minutes, then slows uniformly to rest in 50 s. Find the total distance.', steps: ['Area of the velocity–time graph: ½ × 40 × 20 = 400 m.', 'Then 120 × 20 = 2400 m and ½ × 50 × 20 = 500 m.', 'Total **3300 m**.'] },
    { q: 'A ball is thrown vertically upwards at 19.6 m s⁻¹ from the edge of a cliff 24.5 m above the sea. When does it hit the sea?', steps: ['Upwards positive: s = −24.5, u = 19.6, a = −9.8.', '−24.5 = 19.6t − 4.9t², so t² − 4t − 5 = 0 and (t − 5)(t + 1) = 0.', '**t = 5 s**.'] },
  ]),

  L('me-kin-2', 'mm-u6-kinematics', '8.2', 'Variable acceleration: using calculus', 17, ['Kinematics'], [
    'When the acceleration is not constant, use calculus: **v = ds/dt** and **a = dv/dt = d²s/dt²**; going back, **v = ∫ a dt** and **s = ∫ v dt**, with the constants found from the starting values.',
    'When a is given in terms of v, separate the variables: a = dv/dt = f(v) gives ∫ dv/f(v) = ∫ dt. When a is given in terms of the displacement x, use **a = v dv/dx**, so ∫ v dv = ∫ f(x) dx.',
    'Example: a particle has velocity v = 3t² − 12t + 9 m s⁻¹. It is at rest when 3(t − 1)(t − 3) = 0, at t = 1 s and t = 3 s, and its acceleration a = 6t − 12 is zero at t = 2 s. From t = 0 to t = 3 its displacement is 0, but the **distance travelled** is ∫ (0 to 1) v dt + |∫ (1 to 3) v dt| = 4 + 4 = 8 m.',
  ], 'am-variable-motion', 'Distance: split the time where v = 0 and add the sizes of the pieces.',
  ['If s = 4t³, the acceleration at t = 1 is:', ['24', '12', '4', '36'], 'v = 12t², a = 24t.'],
  [['Variable acceleration', 'Acceleration that changes with time, speed or position.'], ['a = v dv/dx', 'The form of the acceleration used when it depends on displacement.'], ['Distance travelled', 'The total length of path, counting every part as positive.']],
  [
    { q: 'A particle starts from the origin with velocity 2 m s⁻¹ and has acceleration a = 6t m s⁻². Find v and s when t = 2.', steps: ['v = ∫ 6t dt = 3t² + c; v = 2 at t = 0, so v = 3t² + 2.', 's = t³ + 2t (s = 0 at t = 0).', 'At t = 2: **v = 14 m s⁻¹ and s = 12 m**.'] },
    { q: 'A particle has acceleration −4x m s⁻² and speed 6 m s⁻¹ at x = 0. Find v in terms of x and its greatest displacement.', steps: ['v dv/dx = −4x, so ½v² = −2x² + c; at x = 0, v = 6, so c = 18.', 'v² = 36 − 4x².', 'v = 0 when x = 3: the greatest displacement is **3 m**.'] },
  ]),

  L('me-kin-3', 'mm-u6-kinematics', '8.3', 'Position, velocity and acceleration vectors', 16, ['Kinematics'], [
    'In two dimensions the position vector r = x i + y j is a function of time. Differentiate each component: **v = dr/dt** and **a = dv/dt**; integrate each component to go back, using r and v at t = 0 for the constants.',
    'The **speed** is |v|, and the direction of motion is that of v. The particle moves parallel to i when the j-component of v is zero, and its path (the Cartesian equation) comes from eliminating t between x(t) and y(t).',
    'Example: r = (t² − 4t) i + (2t + 1) j. Then v = (2t − 4) i + 2 j and a = 2 i. At t = 0 the speed is √(16 + 4) = 2√5 m s⁻¹; the particle moves parallel to j when 2t − 4 = 0, at t = 2 s.',
  ], 'am-vector-motion', 'Differentiate or integrate each component separately.',
  ['If r = 3t i + t² j, the velocity at t = 2 is:', ['3i + 4j', '3i + 2j', '6i + 4j', '3i + 4tj'], 'v = 3i + 2t j.'],
  [['Position vector', 'The vector from the origin to the particle.'], ['Velocity vector', 'dr/dt, giving both speed and direction.'], ['Path', 'The curve traced by the particle, found by eliminating t.']],
  [
    { q: 'A particle has acceleration a = 6t i − 2 j; it starts at the origin with velocity 2i + 3j. Find r when t = 1.', steps: ['v = (3t² + 2) i + (3 − 2t) j.', 'r = (t³ + 2t) i + (3t − t²) j, since r = 0 at t = 0.', 'At t = 1: **r = 3i + 2j**.'] },
    { q: 'Find the speed of the same particle at t = 1.', steps: ['v = 5i + 1j at t = 1.', '|v| = √(25 + 1).', '**√26 ≈ 5.10 m s⁻¹**.'] },
  ]),

  // ---------- 9. Projectiles ----------
  L('me-proj-1', 'mm-u6-projectiles', '9.1', 'Time of flight, greatest height and range', 17, ['Kinematics'], [
    'A projectile moves under gravity alone (no air resistance). Treat the two motions separately: **horizontally**, the velocity u cos α stays constant, so x = ut cos α; **vertically**, the initial velocity is u sin α and the acceleration −g, so y = ut sin α − ½gt² and v_y = u sin α − gt.',
    'At the **greatest height** v_y = 0: t = u sin α/g and **H = u² sin²α/(2g)**. The **time of flight** on level ground is **T = 2u sin α/g**, and the **range** is **R = u² sin 2α/g**, greatest when **α = 45°**, where R = u²/g.',
    'The velocity at time t has components (u cos α, u sin α − gt): its size is the speed and tan θ = v_y/v_x gives its direction. Complementary angles α and 90° − α give the same range.',
  ], 'am-projectile', 'Find the time first: it links the horizontal and vertical motions.',
  ['A projectile is fired at 20 m s⁻¹ at 45° (g = 9.8). Its range on level ground is about:', ['40.8 m', '20.4 m', '81.6 m', '28.9 m'], 'u²/g = 400/9.8.'],
  [['Projectile', 'A body moving freely under gravity after being thrown.'], ['Time of flight', 'The time a projectile spends in the air.'], ['Range', 'The horizontal distance travelled before it lands.']],
  [
    { q: 'A ball is kicked at 25 m s⁻¹ at 30° above the horizontal. Find its time of flight, greatest height and range.', steps: ['T = 2 × 25 × sin 30° ÷ 9.8 = 2.55 s.', 'H = 25² × sin²30° ÷ 19.6 = 7.97 m.', 'R = 25² × sin 60° ÷ 9.8 = **55.2 m** (T = 2.55 s, H = 7.97 m).'] },
    { q: 'Find the velocity of the same ball after 2 s.', steps: ['v_x = 25 cos 30° = 21.65 m s⁻¹; v_y = 12.5 − 9.8 × 2 = −7.1 m s⁻¹.', 'Speed = √(21.65² + 7.1²) = 22.8 m s⁻¹.', '**22.8 m s⁻¹ at 18.2° below the horizontal** (it is coming down).'] },
  ]),

  L('me-proj-2', 'mm-u6-projectiles', '9.2', 'The trajectory equation and projection from a height', 16, ['Kinematics'], [
    'Eliminating t (t = x/(u cos α)) gives the **equation of the trajectory**: **y = x tan α − gx²/(2u² cos²α)**, a parabola. Writing 1/cos²α = 1 + tan²α makes it a quadratic in tan α, so for a given target there are usually **two angles of projection**.',
    '**Projection from a height** h: the stone lands when y = −h, so solve ut sin α − ½gt² = −h and take the positive root. A stone thrown horizontally (α = 0) from height h lands after t = √(2h/g), the same time as one dropped from rest.',
  ], 'am-projectile-cliff', 'Measure y from the point of projection, so the ground below a cliff is at y = −h.',
  ['A stone is thrown horizontally at 10 m s⁻¹ from a cliff 19.6 m high (g = 9.8). It lands after:', ['2 s', '1 s', '4 s', '1.96 s'], 't = √(2h/g) = √4.'],
  [['Trajectory', 'The path of a projectile, a parabola.'], ['Two angles', 'For a target within range, a low and a high angle of projection reach it.'], ['Horizontal projection', 'Projection with α = 0.']],
  [
    { q: 'A particle is projected at 30 m s⁻¹. Find the angles at which it hits a point on level ground 60 m away.', steps: ['R = u² sin 2α/g: sin 2α = 60 × 9.8 ÷ 900 = 0.653.', '2α = 40.8° or 139.2°.', '**α = 20.4° or 69.6°**.'] },
    { q: 'A stone is thrown at 15 m s⁻¹, 40° above the horizontal, from the top of a cliff 30 m high. How far from the foot of the cliff does it land?', steps: ['Vertically (up positive): −30 = 9.64t − 4.9t², so 4.9t² − 9.64t − 30 = 0 and t = 3.65 s.', 'Horizontally: x = 15 cos 40° × 3.65 = 11.49 × 3.65.', '**x ≈ 41.9 m**.'] },
  ]),

  // ---------- 10. Relative velocity and circular motion ----------
  L('me-rel-1', 'mm-u6-relative-circular', '10.1', 'Relative velocity, interception and closest approach', 17, ['Kinematics'], [
    'The **velocity of A relative to B** is **v_A − v_B**: the way A appears to move to an observer moving with B. Likewise the position of A relative to B is r_A − r_B.',
    '**Interception**: A meets B if r_A = r_B at some time t; with constant velocities, the velocity of A relative to B must point straight at B. **Closest approach**: write the relative position as a function of t and make its length least, which happens when it is perpendicular to the relative velocity.',
    'Rivers, wind and rain are relative velocity problems. A boat’s true velocity is its velocity relative to the water plus the velocity of the water, so a boat heading straight across a river is carried downstream.',
  ], 'am-river', 'True velocity = velocity relative to the water + velocity of the water.',
  ['A moves at 5i m s⁻¹ and B at 2i + 4j m s⁻¹. The velocity of A relative to B is:', ['3i − 4j', '7i + 4j', '−3i + 4j', '3i + 4j'], 'v_A − v_B.'],
  [['Relative velocity', 'v_A − v_B, the velocity of A as seen from B.'], ['Interception', 'Two bodies being at the same place at the same time.'], ['Closest approach', 'The least distance between two moving bodies.']],
  [
    { q: 'A river 60 m wide flows at 1.5 m s⁻¹. A swimmer who swims at 2.5 m s⁻¹ in still water heads straight across. When and where does she land?', steps: ['Across: 60 ÷ 2.5 = 24 s.', 'Downstream drift: 1.5 × 24 = 36 m.', 'She lands after **24 s, 36 m downstream** of the point opposite.'] },
    { q: 'At noon ship A is at the origin with velocity 10j km h⁻¹ and ship B is at 20i km with velocity −10i km h⁻¹. Find their least distance apart.', steps: ['r_B − r_A = (20 − 10t) i − 10t j.', '|r_B − r_A|² = (20 − 10t)² + 100t² = 200t² − 400t + 400, least at t = 1.', 'Least distance = √200 = **14.1 km, at 1 p.m.**'] },
  ]),

  L('me-circ-1', 'mm-u6-relative-circular', '10.2', 'Motion in a circle at constant speed', 17, ['Kinematics'], [
    'For motion in a circle of radius r, the **angular speed** ω (rad s⁻¹) is the rate at which the radius turns, and the **speed is v = rω**. A body making n revolutions per second has ω = 2πn; the period is T = 2π/ω.',
    'At constant speed the velocity still changes direction, so there is an **acceleration towards the centre** of size **v²/r = rω²**. By Newton’s second law a resultant force **mv²/r** towards the centre is needed: friction on a car turning a corner, the tension in a whirled string, gravity on a satellite.',
    'The **conical pendulum**: a bob of mass m on a string of length l moves in a horizontal circle, the string at angle θ to the vertical. Vertically T cos θ = mg; horizontally T sin θ = mrω² with r = l sin θ, so **T = mlω²** and **cos θ = g/(lω²)**.',
  ], 'am-conical-pendulum', 'The resultant force points to the centre: it is not an extra force.',
  ['A point on a wheel of radius 0.3 m turning at 10 rad s⁻¹ has speed:', ['3 m s⁻¹', '30 m s⁻¹', '0.03 m s⁻¹', '33 m s⁻¹'], 'v = rω.'],
  [['Angular speed', 'ω, the angle turned per second, in rad s⁻¹.'], ['Centripetal acceleration', 'v²/r = rω², towards the centre.'], ['Conical pendulum', 'A bob on a string moving in a horizontal circle below the point of support.']],
  [
    { q: 'A car of mass 1200 kg rounds a bend of radius 50 m on a level road at 15 m s⁻¹. Find the friction needed and the least possible μ.', steps: ['F = mv²/r = 1200 × 225 ÷ 50 = 5400 N.', 'F ≤ μR with R = 1200 × 9.8 = 11 760 N.', '**F = 5400 N; μ ≥ 0.459**.'] },
    { q: 'A conical pendulum has a string of length 0.5 m and a bob of mass 0.2 kg making one revolution per second. Find the tension and the angle of the string.', steps: ['ω = 2π rad s⁻¹, so T = mlω² = 0.2 × 0.5 × 4π² = 3.95 N.', 'cos θ = g/(lω²) = 9.8 ÷ 19.74 = 0.496.', '**T = 3.95 N, θ = 60.2°** to the vertical.'] },
  ]),
];
