// A Level Further Mathematics lessons (0775), Further Mechanics, Upper Sixth:
// vertical circles, projectiles with air resistance, oblique impacts and
// successive collisions, simple harmonic motion, moments of inertia, rotation
// of a rigid body, virtual work and stability, the catenary, force fields and
// the papers. Original text written for this app; g = 9.8 m s⁻² unless a
// question says otherwise.

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

export const LESSONS_FMU6 = [
  // ---------- 5. Vertical circles ----------
  L('fme-vc-1', 'fm-u6-vertical-circle', '5.1', 'Motion in a vertical circle: speed and tension', 18, ['Dynamics'], [
    'A particle moving round a vertical circle speeds up as it falls and slows down as it rises, so the motion is not uniform. Two principles solve every problem together: **energy** gives the speed, and **Newton’s second law towards the centre** gives the tension or reaction.',
    'On a string of length a, with speed u at the lowest point, after turning through θ from the lowest point the particle has risen a(1 − cos θ), so **v² = u² − 2ga(1 − cos θ)**.',
    'Towards the centre, T − mg cos θ = mv²/a, so **T = mv²/a + mg cos θ = (m/a)(u² − 2ga + 3ga cos θ)**. At the top (θ = π): v² = u² − 4ga and T = m(u² − 5ga)/a.',
    'The same equations hold for a particle moving on the inside of a smooth vertical hoop or sphere, with the normal reaction in place of the tension.',
  ], 'am-vertical-circle', 'Use energy for the speed and F = ma towards the centre for the tension, never F = ma along the path.',
  ['At the lowest point of a vertical circle on a string, the tension is:', ['mu²/a + mg', 'mu²/a − mg', 'mg', 'mu²/a'], 'T − mg = mu²/a.'],
  [['Vertical circle', 'A circle in a vertical plane, round which the speed changes with height.'], ['Tension', 'The pull of the string, found from F = ma towards the centre.'], ['Energy equation', 'v² = u² − 2ga(1 − cos θ) once the particle has risen a(1 − cos θ).']],
  [
    { q: 'A 0.5 kg particle on a string of length 0.8 m has speed 7 m/s at the lowest point. Find its speed and the tension when the string is horizontal, and at the top.', steps: ['String horizontal (θ = 90°): v² = 49 − 2 × 9.8 × 0.8 = 33.32, v ≈ 5.77 m/s, and T = mv²/a = 0.5 × 33.32 ÷ 0.8 ≈ 20.8 N.', 'Top: v² = 49 − 4 × 9.8 × 0.8 = 17.64, so v = 4.2 m/s, and T + mg = mv²/a: T = 11.03 − 4.9.', '**Horizontal: 5.77 m/s, 20.8 N. Top: 4.2 m/s, 6.1 N.**'] },
    { q: 'Find the tension at the lowest point.', steps: ['T − mg = mu²/a.', 'T = 0.5 × 49 ÷ 0.8 + 0.5 × 9.8 = 30.6 + 4.9.', '**T ≈ 35.5 N**, the greatest tension on the circle.'] },
  ]),

  L('fme-vc-2', 'fm-u6-vertical-circle', '5.2', 'Completing the circle, leaving it, or oscillating', 18, ['Dynamics'], [
    'On a **string**, or inside a smooth hoop, the particle stays on the circle only while T ≥ 0, and T is least at the top. So it completes the circle if **u² ≥ 5ga**. If 2ga < u² < 5ga, the tension falls to zero above the level of the centre: the string goes slack and the particle moves off as a projectile. If u² ≤ 2ga it stops before it is level with the centre and swings back: it **oscillates**.',
    'On a light **rod**, a bead threaded on a smooth wire, or inside a smooth tube, the support can push as well as pull, so the particle completes the circle if it still has speed at the top: **u² > 4ga**.',
    'To find where a string goes slack, set T = 0 in T = (m/a)(u² − 2ga + 3ga cos θ): **cos θ = (2ga − u²)/(3ga)**, θ measured from the lowest point. There v² = −ga cos θ.',
    '**Outside a sphere**: a particle sliding from rest at the top of a smooth sphere of radius a has v² = 2ga(1 − cos θ), θ from the top, and mg cos θ − R = mv²/a, so R = mg(3 cos θ − 2). It leaves the surface when **cos θ = 2/3**, about 48° from the top.',
  ], 'am-vertical-circle', 'String: the condition is T ≥ 0 at the top. Rod: the condition is v > 0 at the top. Do not mix them up.',
  ['A particle on a 1 m string has speed 6 m/s at the bottom. It:', ['leaves the circle above the level of the centre', 'completes the circle', 'oscillates below the centre', 'stays at the bottom'], '2ga = 19.6 < 36 < 5ga = 49.'],
  [['Completing the circle', 'Going right round without the string going slack.'], ['Slack string', 'A string with zero tension: the particle then moves as a projectile.'], ['Oscillating', 'Swinging to and fro without rising above the level of the centre.']],
  [
    { q: 'A particle on a string of length 1 m is given 6 m/s at the lowest point. Show that the string goes slack, and find where and with what speed.', steps: ['2ga = 19.6 and 5ga = 49; 19.6 < 36 < 49, so the string goes slack above the centre.', 'cos θ = (19.6 − 36) ÷ 29.4 = −0.558, so θ ≈ 123.9° from the lowest point, 33.9° above the horizontal through the centre.', 'v² = −ga cos θ = 9.8 × 0.558 = 5.47: **v ≈ 2.34 m/s** when the string goes slack.'] },
    { q: 'Find the least speed at the bottom for a particle on a light rod of length 0.5 m to complete the circle.', steps: ['A rod can push, so the particle only needs speed at the top.', 'u² > 4ga = 4 × 9.8 × 0.5 = 19.6.', '**u > 4.43 m/s**.'] },
    { q: 'A particle slides from rest at the top of a smooth hemisphere of radius 2 m. How far below the top does it leave the surface?', steps: ['It leaves when cos θ = 2/3.', 'It has then dropped a(1 − cos θ) = 2 × ⅓.', '**About 0.67 m below the top**.'] },
  ]),

  // ---------- 6. Projectiles with air resistance ----------
  L('fme-rp-1', 'fm-u6-resisted-projectiles', '6.1', 'Projectiles with linear air resistance', 18, ['Kinematics'], [
    'With a resistance of mk times the velocity (a resistance per unit mass of kv), the horizontal and vertical motions have separate equations: **ẍ = −kẋ** and **ÿ = −g − kẏ**, upwards positive.',
    'Horizontally: ẋ = u cos α e^(−kt), and x = (u cos α/k)(1 − e^(−kt)). The horizontal distance can never exceed u cos α/k.',
    'Vertically: dẏ/dt = −(g + kẏ) gives g + kẏ = (g + ku sin α)e^(−kt), so ẏ = (u sin α + g/k)e^(−kt) − g/k and y = (1/k)(u sin α + g/k)(1 − e^(−kt)) − gt/k. As t grows, ẏ tends to the terminal velocity −g/k.',
    'The greatest height is reached when ẏ = 0, at t = (1/k) ln(1 + ku sin α/g). The path is lower than the parabola without resistance, and comes down more steeply than it went up.',
  ], 'am-resisted-projectile', 'Solve the horizontal and vertical equations separately, each with its own starting velocity.',
  ['With resistance mkv, the greatest height is reached at t =', ['(1/k) ln(1 + ku sin α/g)', 'u sin α/g', '1/k', '(1/k) ln 2'], 'Set ẏ = 0.'],
  [['Linear resistance', 'A resistance proportional to the velocity, mkv.'], ['Terminal velocity', 'The limiting vertical velocity −g/k.'], ['Bounded range', 'The horizontal distance never exceeds u cos α/k.']],
  [
    { q: 'A ball is projected at 30 m/s at 30° above the horizontal with k = 0.1 s⁻¹. Find when it reaches its greatest height, and how far it has then travelled horizontally.', steps: ['u sin α = 15 and u cos α = 25.98. t = 10 ln(1 + 0.1 × 15 ÷ 9.8) = 10 ln(11.3/9.8) ≈ 1.424 s.', 'x = (25.98 ÷ 0.1)(1 − e^(−0.1424)) = 259.8 × 0.1327.', '**t ≈ 1.42 s and x ≈ 34.5 m** (without resistance: 1.53 s and 39.8 m).'] },
    { q: 'Find the greatest height.', steps: ['y = (1/k)(u sin α + g/k)(1 − e^(−kt)) − gt/k, with 1 − e^(−kt) = 1.5/11.3.', 'y = 10 × 113 × (1.5/11.3) − 98 × 1.424 = 150 − 139.6.', '**y ≈ 10.4 m**, against 11.5 m without resistance.'] },
  ]),

  // ---------- 7. Oblique impact ----------
  L('fme-imp-1', 'fm-u6-oblique-impact', '7.2', 'Oblique impact of smooth spheres', 18, ['Dynamics'], [
    'When two smooth spheres collide, the only force between them is a normal reaction along the **line of centres**. So each sphere’s **velocity component perpendicular to the line of centres is unchanged**.',
    'Along the line of centres, use **conservation of momentum** and **Newton’s law of restitution**: the speed of separation is e times the speed of approach, with 0 ≤ e ≤ 1.',
    'Method: draw the line of centres at the moment of impact; resolve each velocity along it and perpendicular to it; solve the two equations along the line; then recombine the components to find the speeds and directions afterwards.',
    'Kinetic energy is lost unless e = 1. When a sphere strikes an equal sphere at rest and e = 1, the two move off at right angles to each other.',
  ], 'am-oblique-impact', 'Resolve along and perpendicular to the line of centres at impact: the perpendicular components pass straight through.',
  ['In an oblique impact of smooth spheres, what stays the same for each sphere?', ['its velocity component perpendicular to the line of centres', 'its speed', 'its direction', 'its momentum along the line of centres'], 'No impulse acts perpendicular to the line of centres.'],
  [['Line of centres', 'The line through the centres of the spheres at impact, along which the impulse acts.'], ['Oblique impact', 'A collision in which the velocities are not along the line of centres.'], ['Coefficient of restitution', 'e, the ratio of the speed of separation to the speed of approach.']],
  [
    { q: 'Sphere A (2 kg) moving at 5 m/s strikes sphere B (3 kg) at rest. At impact the line of centres makes 60° with A’s motion, and e = ½. Find the velocities after impact.', steps: ['Along the line, A has 5 cos 60° = 2.5 m/s; across it, 5 sin 60° ≈ 4.33 m/s, which is unchanged.', 'Momentum: 2 × 2.5 = 2a + 3b; restitution: b − a = ½ × 2.5. So 5 = 5a + 3.75, a = 0.25 and b = 1.5.', '**A: components 0.25 and 4.33, speed ≈ 4.34 m/s at 86.7° to the line of centres. B: 1.5 m/s along the line of centres.**'] },
    { q: 'Find the kinetic energy lost in that collision.', steps: ['Before: ½ × 2 × 25 = 25 J.', 'After: ½ × 2 × (0.25² + 4.33²) + ½ × 3 × 1.5² = 18.81 + 3.38 = 22.19 J.', '**About 2.81 J is lost.**'] },
  ]),

  // ---------- 11. Walls and successive collisions ----------
  L('fme-imp-2', 'fm-u6-wall-successive', '11.1', 'Impacts with fixed surfaces and successive collisions', 18, ['Dynamics'], [
    'A smooth sphere striking a smooth fixed surface, such as a wall or the floor, receives an impulse perpendicular to the surface. The **component parallel to the surface is unchanged**, and the **perpendicular component is reversed and multiplied by e**.',
    'Striking at speed u at angle α to the surface, the sphere rebounds at angle β with **tan β = e tan α**, at speed u√(cos²α + e²sin²α), and the kinetic energy lost is ½mu²sin²α(1 − e²).',
    'A ball dropped from height h onto a floor rebounds at e times its impact speed, so to height e²h; each bounce is e times as fast as the one before. The heights and times form geometric series, so the bouncing ends after a finite time.',
    '**Successive collisions**: take one collision at a time, with momentum and restitution, and then check whether the bodies are now moving so that another collision must follow (one catching another up, or a rebound from a wall).',
  ], 'am-wall-impact', 'After every collision in a problem with several bodies, compare the velocities to see whether another collision follows.',
  ['A ball hits a smooth wall at 10 m/s at 30° to the wall, with e = 0.5. Its speed afterwards is about:', ['9.0 m/s', '5 m/s', '10 m/s', '8.7 m/s'], '√(8.66² + 2.5²).'],
  [['Fixed surface', 'A wall or floor that does not move, so only the sphere’s motion changes.'], ['Angle of rebound', 'The angle β with tan β = e tan α.'], ['Successive collisions', 'A chain of collisions taken one at a time.']],
  [
    { q: 'A smooth ball hits a smooth wall at 10 m/s at 30° to the wall, with e = 0.5. Find its speed and direction afterwards, and the fraction of kinetic energy lost.', steps: ['Parallel component 10 cos 30° = 8.66 (unchanged); perpendicular 10 sin 30° = 5, which becomes 2.5.', 'Speed √(75 + 6.25) ≈ 9.01 m/s; tan β = 2.5 ÷ 8.66, β ≈ 16.1°.', '**9.01 m/s at 16.1° to the wall; it loses sin²α(1 − e²) = 0.1875, about 19% of its kinetic energy.**'] },
    { q: 'A ball is dropped from 5 m onto a floor with e = 0.6. Find the height of the second bounce and the total time until the bouncing stops.', steps: ['The rebound heights are e²h = 1.8 m and then e⁴h = 0.648 m.', 'The first fall takes t₀ = √(2h/g) = 1.010 s; the nth bounce lasts 2eⁿt₀, so the total is t₀(1 + 2e/(1 − e)) = t₀(1 + 3).', '**Second bounce 0.648 m; total time ≈ 4.04 s.**'] },
    { q: 'Equal spheres A, B, C lie in a line. A moves at u towards B; B and C are at rest; e = ½ for every collision. Find the final velocities.', steps: ['A hits B: a + b = u and b − a = u/2, so a = u/4, b = 3u/4. B hits C: b′ + c = 3u/4 and c − b′ = 3u/8, so b′ = 3u/16, c = 9u/16.', 'A (u/4 = 4u/16) now catches B (3u/16): a″ + b″ = 7u/16 and b″ − a″ = u/32, so a″ = 13u/64, b″ = 15u/64.', '**Final: A 13u/64, B 15u/64, C 9u/16 (36u/64)**; they are now separating, so three collisions happen in all. Check: the momenta add to u.'] },
  ]),

  // ---------- 12. Simple harmonic motion ----------
  L('fme-shm-1', 'fm-u6-shm', '12.1', 'Simple harmonic motion: the equation and its solution', 18, ['Dynamics'], [
    'A particle moves with **simple harmonic motion** (SHM) about a point O when its acceleration is always towards O and proportional to its displacement x from O: **ẍ = −ω²x**.',
    'The general solution is **x = A cos ωt + B sin ωt**, or **x = a sin(ωt + ε)**, where a is the **amplitude** and ε the phase. The motion repeats with **period 2π/ω**, whatever the amplitude, and frequency ω/2π.',
    'Writing ẍ = v dv/dx and integrating, v dv/dx = −ω²x gives **v² = ω²(a² − x²)**. The greatest speed aω is at O; the greatest acceleration aω² is at the ends, where v = 0.',
    'Starting at the centre, x = a sin ωt; starting at an end, x = a cos ωt. To find the time between two positions, solve x = a sin ωt (or a cos ωt) for each.',
  ], 'am-shm', 'Write v² = ω²(a² − x²) at once: most questions about speed need only that.',
  ['In SHM, the speed is greatest:', ['at the centre O', 'at the ends', 'half-way to the ends', 'everywhere the same'], 'v² = ω²(a² − x²) is greatest at x = 0.'],
  [['Simple harmonic motion', 'Motion with ẍ = −ω²x.'], ['Amplitude', 'The greatest displacement from the centre.'], ['Period', '2π/ω, the time for one complete oscillation.']],
  [
    { q: 'A particle moves in SHM with period 4 s and amplitude 0.3 m. Find its greatest speed, its speed 0.18 m from the centre, and its greatest acceleration.', steps: ['ω = 2π/4 = π/2; greatest speed aω = 0.3 × π/2 ≈ 0.471 m/s.', 'v² = (π/2)²(0.09 − 0.0324) = 0.142, so v ≈ 0.377 m/s.', '**0.471 m/s, 0.377 m/s, and aω² ≈ 0.740 m s⁻²**.'] },
    { q: 'It starts at the centre. How long does it take to reach 0.15 m from the centre?', steps: ['x = 0.3 sin(πt/2) = 0.15.', 'sin(πt/2) = ½, so πt/2 = π/6.', '**t = ⅓ s**.'] },
    { q: 'A particle in SHM has speed 3 m/s at 1 m from the centre and 2 m/s at 2 m. Find the amplitude and the period.', steps: ['9 = ω²(a² − 1) and 4 = ω²(a² − 4); subtracting, 5 = 3ω², so ω² = 5/3.', 'a² − 1 = 9 × 3/5 = 5.4, so a² = 6.4.', '**a ≈ 2.53 m, period 2π/√(5/3) ≈ 4.87 s**.'] },
  ]),

  L('fme-shm-2', 'fm-u6-shm', '12.2', 'SHM of springs, elastic strings and the simple pendulum', 18, ['Dynamics'], [
    '**Horizontal spring**: a mass m on a smooth table, attached to a spring of stiffness k = λ/l. At extension x, mẍ = −kx, so ω² = k/m and the **period is 2π√(m/k)**.',
    '**Vertical spring or string**: at equilibrium the extension e satisfies ke = mg. Measuring x from the equilibrium position, mẍ = mg − k(e + x) = −kx: SHM with the same ω² = k/m, about the equilibrium position rather than the natural length.',
    'An **elastic string** only pulls, so the motion is SHM only while the string is taut. If the particle rises above the natural length, the string goes slack and the particle moves freely under gravity until the string tightens again.',
    '**Simple pendulum** of length l: for small angles sin θ ≈ θ, so θ̈ = −(g/l)θ and the **period is 2π√(l/g)**, the same for any mass and, for small swings, any amplitude.',
  ], 'am-spring-shm', 'For vertical oscillations, measure x from the equilibrium position, where the tension balances the weight.',
  ['A 0.4 kg mass on a spring of stiffness 39.2 N/m has period about:', ['0.63 s', '1.26 s', '0.1 s', '6.3 s'], '2π√(0.4 ÷ 39.2).'],
  [['Stiffness', 'k = λ/l, the tension per unit extension.'], ['Equilibrium position', 'Where the tension balances the weight: the centre of vertical oscillations.'], ['Simple pendulum', 'A particle on a light string swinging through small angles.']],
  [
    { q: 'A 0.4 kg mass hangs from a spring of natural length 0.5 m and modulus 19.6 N. It is pulled 0.1 m below equilibrium and released. Find the period and the greatest speed.', steps: ['k = λ/l = 39.2 N/m, so ω² = 39.2 ÷ 0.4 = 98 and ω ≈ 9.90 rad/s.', 'Period 2π/ω ≈ 0.635 s; the amplitude is 0.1 m.', '**Period ≈ 0.63 s; greatest speed aω ≈ 0.99 m/s.**'] },
    { q: 'A 1 kg particle hangs on an elastic string (natural length 1 m, modulus 49 N) and is pulled 0.5 m below equilibrium. Does the string go slack, and if so, how much higher does the particle rise?', steps: ['e = mgl/λ = 9.8 ÷ 49 = 0.2 m. The amplitude 0.5 m is more than 0.2 m, so the string goes slack 0.2 m above equilibrium.', 'There, with ω² = λ/(ml) = 49, v² = 49(0.25 − 0.04) = 10.29.', '**Yes; the particle then rises a further v²/(2g) ≈ 0.53 m under gravity alone.**'] },
    { q: 'Find the period of a simple pendulum 0.8 m long.', steps: ['T = 2π√(l/g).', '= 2π√(0.8 ÷ 9.8).', '**T ≈ 1.80 s**.'] },
  ]),

  // ---------- 15. Moments of inertia ----------
  L('fme-mi-1', 'fm-u6-moment-inertia', '15.1', 'Moments of inertia by integration', 18, ['Dynamics'], [
    'A rigid body turning about a fixed axis at angular speed ω has kinetic energy Σ½m(rω)² = ½(Σmr²)ω². The quantity **I = Σmr²** is its **moment of inertia** about that axis: it plays the part that mass plays in straight-line motion.',
    'For a continuous body, divide it into elements each at one distance from the axis and integrate. A **rod** of mass m and length 2a, about a perpendicular axis through its centre: elements (m/2a)δx at distance x give I = ∫ (−a to a) (m/2a)x² dx = **ma²/3**, that is ml²/12 for length l.',
    'A **ring** of radius a about its axis: every element is at distance a, so **I = ma²**. A **disc** of radius a about its axis: thin rings of radius r and mass (2mr/a²)δr give I = ∫ (0 to a) (2m/a²)r³ dr = **½ma²**; a solid cylinder about its axis is a stack of discs, also ½ma².',
    'Standard results also used: solid sphere about a diameter ⅖ma²; hollow sphere ⅔ma². The **radius of gyration** k is defined by I = mk².',
  ], 'am-moment-inertia', 'Choose elements that are all at one distance from the axis: strips for a rod, rings for a disc, discs for a cylinder.',
  ['The radius of gyration k is defined by:', ['I = mk²', 'I = mk', 'k = mI', 'I = k²'], 'The distance at which all the mass would give the same I.'],
  [['Moment of inertia', 'I = Σmr², the rotational counterpart of mass.'], ['Element', 'A small piece of the body, all at one distance from the axis.'], ['Radius of gyration', 'k with I = mk².']],
  [
    { q: 'Find by integration the moment of inertia of a uniform rod of mass m and length l about a perpendicular axis through one end.', steps: ['An element of length δx at distance x has mass (m/l)δx.', 'I = ∫ (0 to l) (m/l)x² dx = (m/l)(l³/3).', '**I = ml²/3**.'] },
    { q: 'A uniform disc has mass 3 kg and radius 0.4 m. Find its moment of inertia about its axis and its radius of gyration.', steps: ['I = ½ma² = ½ × 3 × 0.16.', 'k² = I/m = 0.08.', '**I = 0.24 kg m²; k ≈ 0.283 m** (that is a/√2).'] },
    { q: 'A flywheel is a uniform disc of mass 20 kg and radius 0.25 m. Find its kinetic energy at 300 rev/min.', steps: ['I = ½ × 20 × 0.0625 = 0.625 kg m².', 'ω = 300 × 2π ÷ 60 = 10π rad/s.', '**KE = ½ × 0.625 × (10π)² ≈ 308 J**.'] },
  ]),

  L('fme-mi-2', 'fm-u6-moment-inertia', '15.2', 'The parallel and perpendicular axes theorems', 17, ['Dynamics'], [
    '**Parallel axes theorem**: if I₀ is the moment of inertia about an axis through the centre of mass G, then about a parallel axis at distance d, **I = I₀ + md²**. For a rod about one end: ml²/12 + m(l/2)² = ml²/3.',
    '**Perpendicular axes theorem**, for laminae only: with perpendicular axes Ox and Oy in the plane of the lamina and Oz perpendicular to it, **the moment about Oz equals the moment about Ox plus the moment about Oy**. For a disc, the moment about its axis is ½ma² and the two diameters are equal, so each diameter gives ¼ma².',
    '**Composite bodies**: add the moments of inertia of the parts about the same axis, each moved to that axis with the parallel axes theorem. A hole counts as negative.',
    'Use the theorems in order: first the moment about an axis through G (a standard result or by integration), then the shift to the axis required.',
  ], 'am-parallel-axes', 'The parallel axes theorem only moves from an axis through G; never shift between two axes that both miss G.',
  ['A uniform disc about a tangent in its plane has moment of inertia:', ['5ma²/4', 'ma²', '3ma²/2', '¼ma²'], 'A diameter gives ¼ma²; add ma².'],
  [['Parallel axes theorem', 'I = I₀ + md², from an axis through the centre of mass to a parallel one.'], ['Perpendicular axes theorem', 'For a lamina, the moment about the perpendicular axis is the sum of the moments about two perpendicular axes in its plane.'], ['Composite body', 'A body whose moment of inertia is the sum of those of its parts about the same axis.']],
  [
    { q: 'Find the moment of inertia of a uniform disc of mass m and radius a about a tangent in its plane.', steps: ['About a diameter: ¼ma² (perpendicular axes theorem).', 'The tangent is parallel to a diameter at distance a.', '**I = ¼ma² + ma² = 5ma²/4**.'] },
    { q: 'Find it about an axis perpendicular to the disc through a point on its rim.', steps: ['About its own axis: ½ma².', 'The new axis is parallel to it, at distance a.', '**I = ½ma² + ma² = 3ma²/2**.'] },
    { q: 'A pendulum is a uniform rod of mass 1 kg and length 1 m with a uniform disc of mass 2 kg and radius 0.1 m fixed with its centre at the lower end, in the plane of swing. Find its moment of inertia about a horizontal axis through the top of the rod.', steps: ['Rod about its end: ml²/3 = ⅓ kg m².', 'Disc about its own axis ½ × 2 × 0.01 = 0.01; moved 1 m: 0.01 + 2 × 1² = 2.01 kg m².', '**I ≈ 2.34 kg m²**.'] },
  ]),

  // ---------- 16. Rotation ----------
  L('fme-rot-1', 'fm-u6-rotation', '16.1', 'Rotation about a fixed axis: moments, energy and angular momentum', 18, ['Dynamics'], [
    'For a rigid body turning about a fixed axis, the total moment of the forces about the axis equals **Iθ̈**, the rotational form of F = ma. The angular quantities copy the linear ones: θ for x, ω for v, θ̈ for a, I for m, and moment for force.',
    '**Kinetic energy** is ½Iω², and the **work** done by a constant moment C turning through an angle θ is Cθ. Energy is conserved when only conservative forces do work, so ½Iω² + mgh is constant for a body swinging under gravity, h being the height of its centre of mass.',
    '**Angular momentum** about the axis is Iω. The angular impulse of a moment equals the change in angular momentum, and with no external moment angular momentum is conserved.',
    '**Rolling without slipping**: v = aω, and the kinetic energy is ½mv² + ½I₀ω², the motion of the centre plus the rotation about it. Friction at the contact point does no work while there is no slipping.',
  ], 'am-rolling', 'Write the rotational equation for the turning body and Newton’s second law for each moving mass, linked by a = rθ̈.',
  ['A disc pulley of mass 4 kg and radius 0.2 m carries a hanging 2 kg mass on a light string wound round it. The mass accelerates at:', ['4.9 m/s²', '9.8 m/s²', '3.27 m/s²', '6.53 m/s²'], '2g = (2 + ½ × 4)a.'],
  [['Moment of a force', 'Its turning effect about an axis.'], ['Angular momentum', 'Iω, conserved when no external moment acts.'], ['Rolling without slipping', 'Motion with v = aω, the contact point momentarily at rest.']],
  [
    { q: 'A uniform disc pulley of mass 4 kg and radius 0.2 m turns on a smooth axle. A light string wound round it carries a 2 kg mass hanging freely. Find the acceleration of the mass.', steps: ['I = ½ × 4 × 0.04 = 0.08 kg m². Mass: 2g − T = 2a. Pulley: 0.2T = 0.08 × (a/0.2), so T = 2a.', '19.6 − 2a = 2a.', '**a = 4.9 m s⁻²**.'] },
    { q: 'A uniform rod 2 m long, pivoted at one end, is released from rest horizontal. Find its angular speed as it passes the vertical.', steps: ['I = ⅓m × 2² = 4m/3; the centre of mass falls 1 m.', 'mg × 1 = ½ × (4m/3)ω², so ω² = 3g/2 = 14.7.', '**ω ≈ 3.83 rad/s**.'] },
    { q: 'A uniform solid sphere rolls from rest down a slope, dropping 2 m. Find its speed.', steps: ['KE = ½mv² + ½(⅖ma²)(v/a)² = (7/10)mv².', '(7/10)mv² = mg × 2, so v² = 28.', '**v ≈ 5.29 m/s** (a sliding block would reach 6.26 m/s).'] },
  ]),

  // ---------- 19. Virtual work and stability ----------
  L('fme-vw-1', 'fm-u6-stability', '19.1', 'The principle of virtual work', 17, ['Statics'], [
    'Give a system in equilibrium an imagined (virtual) small displacement that its constraints allow. The **principle of virtual work**: the system is in equilibrium if, and only if, the total work done by the forces in every such displacement is zero.',
    'Its strength is that forces doing no work drop out: the reactions of smooth surfaces, the tensions in light inextensible strings and the internal forces in rigid bodies. One equation then replaces several resolutions and moments.',
    'Method: describe the position by one variable, such as an angle θ; write the height or distance of each point where an external force acts in terms of θ; differentiate to get the small changes; and set the total work to zero, a weight W doing work −W δy when its height rises by δy.',
    'When the forces are conservative, the total work is −δV, so virtual work is the same as **dV/dθ = 0**: the starting point for stability in the next lesson.',
  ], 'am-ladder', 'Measure every height or distance from a fixed point, write it in terms of the angle, then differentiate.',
  ['In virtual work, which of these forces does no work in an allowed small displacement?', ['the reaction of a smooth surface', 'a weight', 'friction', 'the tension in an elastic string'], 'It is perpendicular to the allowed motion.'],
  [['Virtual displacement', 'An imagined small displacement allowed by the constraints.'], ['Principle of virtual work', 'Equilibrium holds when the forces do zero total work in every such displacement.'], ['Constraint', 'A condition the system must obey, such as a rod keeping its length.']],
  [
    { q: 'A uniform ladder AB, length 2a and weight W, stands with A on a smooth floor and B against a smooth wall, at θ to the horizontal. A horizontal string joins A to the foot of the wall. Find the tension.', steps: ['A is 2a cos θ from the wall; the centre G is at height a sin θ. The smooth reactions do no work.', 'Increase θ by δθ: G rises a cos θ δθ, and A moves 2a sin θ δθ towards the wall, in the direction of T. So −Wa cos θ δθ + T × 2a sin θ δθ = 0.', '**T = ½W cot θ**.'] },
    { q: 'Two uniform rods AB and BC, each of length 2a and weight W, are smoothly jointed at B and stand on a smooth floor, each at θ to the vertical, with a light string joining A and C. Find the tension.', steps: ['B is at height 2a cos θ, each rod’s centre at a cos θ, and AC = 4a sin θ.', 'Increase θ by δθ: the weights do work 2Wa sin θ δθ and the tension does −T × 4a cos θ δθ; the total is zero.', '**T = ½W tan θ**.'] },
  ]),

  L('fme-stab-1', 'fm-u6-stability', '19.2', 'Potential energy and the stability of equilibrium', 17, ['Statics'], [
    'When the forces are conservative (weights and elastic tensions), the system has a potential energy V depending on its position, say on an angle θ. **Positions of equilibrium are where dV/dθ = 0.**',
    'An equilibrium is **stable** when V is a minimum there (d²V/dθ² > 0): after a small displacement the forces bring the system back. It is **unstable** when V is a maximum (d²V/dθ² < 0). If d²V/dθ² = 0, look at higher derivatives or at the values of V nearby; a constant V gives neutral equilibrium.',
    'V adds the gravitational energy mgy of each weight, with y measured upwards from a fixed level, and the elastic energy λx²/(2l) of each stretched string or spring.',
    'A uniform solid hemisphere resting with its curved surface on a level table is stable: its centre of mass is 3r/8 below the centre of its flat face, so tilting it raises the centre of mass.',
  ], 'am-stability', 'Write V in terms of one variable, differentiate twice, and test the sign of the second derivative at each position of equilibrium.',
  ['At a position of equilibrium where d²V/dθ² > 0, the equilibrium is:', ['stable', 'unstable', 'neutral', 'impossible'], 'V has a minimum there.'],
  [['Potential energy V', 'The energy of position: mgy for weights plus λx²/(2l) for elastic parts.'], ['Stable equilibrium', 'A minimum of V, to which the system returns after a small displacement.'], ['Unstable equilibrium', 'A maximum of V, from which a small displacement grows.']],
  [
    { q: 'A bead of weight W slides on a smooth vertical hoop of radius a. A light spring of natural length a and modulus 4W joins it to the highest point of the hoop. With θ the angle at the centre between the top and the bead, find the positions of equilibrium and their stability.', steps: ['The spring has length 2a sin(θ/2); the bead is at height a cos θ above the centre. With s = sin(θ/2): V = Wa cos θ + (4W/(2a))(2as − a)² = Wa(6s² − 8s + 3).', 'dV/dθ = Wa(12s − 8) × ½ cos(θ/2) = 0 when s = 2/3, θ ≈ 83.6°, or when cos(θ/2) = 0, θ = 180° (the bottom).', '**At θ ≈ 83.6° on either side V is least: stable. At the bottom V is greatest: unstable.**'] },
    { q: 'Show that a uniform solid hemisphere resting with its curved surface on a level table is in stable equilibrium.', steps: ['The centre O of the flat face stays at height r as it rocks; G is 3r/8 from O.', 'Tilted through θ, G is at height r − (3r/8) cos θ, which is least when θ = 0.', '**V = mg(r − (3r/8) cos θ) has a minimum at θ = 0: stable.**'] },
  ]),

  // ---------- 20. The catenary and force fields ----------
  L('fme-cat-1', 'fm-u6-catenary-fields', '20.1', 'The catenary: a cable hanging under its own weight', 18, ['Statics'], [
    'A uniform flexible cable (a chain, a rope, a power line) of weight w per unit length hangs between two supports. Take the piece from the lowest point, where the tension T₀ is horizontal, to a point where the tension T makes angle ψ with the horizontal. Resolving: **T cos ψ = T₀**, so the horizontal tension is the same everywhere, and **T sin ψ = ws**, s being the length of the piece.',
    'Dividing, tan ψ = s/c with **c = T₀/w**: the intrinsic equation **s = c tan ψ**.',
    'Since tan ψ = dy/dx, this leads to the Cartesian equation **y = c cosh(x/c)**, with the lowest point at (0, c). Then s = c sinh(x/c), y² = c² + s², and the tension is T = T₀ cosh(x/c) = **wy**.',
    'The catenary is not a parabola, though near the lowest point it is close to one, since cosh(x/c) ≈ 1 + x²/(2c²). The main cable of a suspension bridge, which carries a level deck spread evenly along the horizontal, hangs as a parabola instead.',
  ], 'am-catenary', 'Put the lowest point at (0, c) with c = T₀/w; then y = c cosh(x/c), s = c sinh(x/c) and T = wy.',
  ['A chain with c = 25 m hangs between two supports 20 m apart at the same level. Its sag is about:', ['2.03 m', '0.4 m', '5 m', '25 m'], '25(cosh 0.4 − 1).'],
  [['Catenary', 'The curve y = c cosh(x/c) of a uniform cable hanging under its own weight.'], ['Intrinsic equation', 's = c tan ψ, linking arc length and the angle of the tangent.'], ['Sag', 'How far the lowest point is below the supports.']],
  [
    { q: 'A uniform chain hangs between two points at the same level, 20 m apart. At its lowest point the tension equals the weight of 25 m of chain. Find the sag and the length of the chain.', steps: ['c = 25, and the supports are at x = ±10.', 'Sag = 25 cosh(0.4) − 25 = 25 × 0.0811; length = 2 × 25 sinh(0.4) = 50 × 0.4108.', '**Sag ≈ 2.03 m; length ≈ 20.54 m**.'] },
    { q: 'If the chain weighs 2 N per metre, find the tension at the lowest point and at the supports.', steps: ['T₀ = wc = 2 × 25 = 50 N.', 'At the supports y = 25 cosh 0.4 = 27.03 m, and T = wy.', '**50 N at the lowest point, about 54.1 N at the supports.**'] },
  ]),

  L('fme-field-1', 'fm-u6-catenary-fields', '20.2', 'Force fields and work as a line integral', 17, ['Statics'], [
    'A **force field** gives a force F at every point of a region: the weight of a particle, the pull of a spring fixed at the origin, the attraction of a planet. It can be pictured as arrows drawn at many points.',
    'The **work** done by the field on a particle moving along a path C is the line integral **W = ∫ F · dr = ∫ (P dx + Q dy)** along C, where F = Pi + Qj. Write x and y along the path in terms of a parameter t, substitute for x, y, dx and dy, and integrate from the starting value of t to the final one.',
    'A field is **conservative** if the work between two points is the same along every path. Then the work round any closed path is zero, and a potential energy V exists. In two dimensions, F = Pi + Qj (with continuous derivatives, on a region without holes) is conservative exactly when **∂P/∂y = ∂Q/∂x**.',
    'Gravity near the Earth and the force of an ideal spring are conservative, which is why potential energy works for them; friction and air resistance are not, since the work they do depends on the path taken.',
  ], 'am-force-field', 'Parametrise the path, replace x, y, dx and dy, and integrate in t from the start to the end.',
  ['The work done by F = 2xy i + x² j from (0, 0) to (1, 2) is:', ['2', '4', '1', '0'], 'It is conservative, with work x²y between the end points.'],
  [['Force field', 'A force given at every point of a region.'], ['Line integral', '∫ F · dr along a path: the work done by the field.'], ['Conservative field', 'A field whose work between two points does not depend on the path.']],
  [
    { q: 'F = 2xy i + x² j. Find the work done from (0, 0) to (1, 2) along y = 2x and along y = 2x².', steps: ['Along y = 2x (x = t, y = 2t): 2t(2t) dt + t² × 2 dt = 6t² dt, and ∫ (0 to 1) 6t² dt = 2.', 'Along y = 2x² (x = t, y = 2t², dy = 4t dt): 4t³ dt + 4t³ dt = 8t³ dt, and ∫ (0 to 1) 8t³ dt = 2.', '**2 both ways**: the field is conservative, since ∂P/∂y = 2x = ∂Q/∂x.'] },
    { q: 'F = y i − x j. Find the work done once round the circle x = cos t, y = sin t, 0 ≤ t ≤ 2π.', steps: ['dx = −sin t dt and dy = cos t dt.', 'P dx + Q dy = −sin²t dt − cos²t dt = −dt.', '**W = −2π ≠ 0**, so this field is not conservative (∂P/∂y = 1 but ∂Q/∂x = −1).'] },
  ]),

  // ---------- 21. The papers ----------
  L('fme-u6-paper', 'fm-u6-papers', '21.3', 'Further Mechanics in the papers: structured questions', 15, ['Examination'], [
    'Upper Sixth Further Mechanics questions are long and come in stages: a vertical circle followed by projectile motion once the string goes slack; an oblique collision followed by an impact with a wall; a compound pendulum built from a rod and a disc; a potential energy whose positions of equilibrium and their stability are asked for.',
    'Set out each stage with a heading, a diagram, the principle used (energy, momentum along the line of centres, Newton’s second law towards the centre, moments, I = I₀ + md²) and the equation it gives.',
    'Later parts follow from earlier ones: if you cannot finish a part, use the answer the question gives (or your own) and carry on, since the later marks are still available.',
    'Paper 1 drills from the scheme: relative velocity, elastic potential energy, moments of inertia from the theorems, phase and period in SHM, and the sign of d²V/dθ².',
  ], 'am-gce-further', 'Head each stage of a long mechanics question with the principle you use: a clear stage earns its marks even if a later one goes wrong.',
  ['A uniform rod of length 2a swinging about one end has a period of small oscillations of:', ['2π√(4a/(3g))', '2π√(2a/g)', '2π√(a/g)', '2π√(3a/(4g))'], 'I = 4ma²/3 and the restoring moment is about mgaθ.'],
  [['Compound pendulum', 'A rigid body swinging about a fixed horizontal axis.'], ['Multi-stage question', 'A question in parts, each starting from the result of the one before.'], ['Follow-through', 'Using a given or earlier answer to carry on with later parts.']],
  [
    { q: 'A 0.2 kg particle on a 0.5 m string is given 4.5 m/s at the lowest point. Show that the string goes slack, and find the speed when it does.', steps: ['2ga = 9.8 and 5ga = 24.5; u² = 20.25 lies between them, so the string goes slack above the centre.', 'cos θ = (2ga − u²)/(3ga) = (9.8 − 20.25) ÷ 14.7 = −0.711, θ ≈ 135.3° from the lowest point.', 'v² = −ga cos θ = 4.9 × 0.711 = 3.48: **v ≈ 1.87 m/s**.'] },
    { q: 'Find the period of small oscillations of a uniform rod of length 2a swinging about a horizontal axis through one end.', steps: ['I = 4ma²/3 about the end; the centre of mass is a from the axis.', 'Iθ̈ = −mga sin θ ≈ −mgaθ, so ω² = 3g/(4a).', '**Period 2π√(4a/(3g))**.'] },
  ]),
];
