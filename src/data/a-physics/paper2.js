// Paper 2 bank for GCE Advanced Level Physics (0780). The Board's Paper 2
// (3 hours, 100 marks) has three sections. Section I: five short compulsory
// questions (30 marks in all) and a pair of long questions of which one is
// answered (20 marks). Section II: one compulsory data analysis question (20
// marks). Section III: four option questions (Energy resources and environmental
// physics, Communication, Electronics, Medical physics), of which two are
// answered (15 marks each). `slot` places each question in its group. Written
// for this app, each with a full mark scheme. g = 9.8 N/kg.

const pt = (point, marks = 1) => ({ point, marks });

export const PAPER2 = [
  // ======================= Section I: short questions (6 marks) =======================
  {
    id: 'app-s-units', section: 'A', slot: 'short', unit: 'ap-measure', topic: 'Units and uncertainties',
    stem: 'The period T of a mass m oscillating on a spring of stiffness k is thought to be T = 2π√(m/k).',
    hint: 'Write the base units of each quantity; for uncertainties add percentages and double for a square.',
    parts: [
      { label: 'a', title: 'Homogeneity', prompt: 'Show that the equation is homogeneous.', marks: 3, kind: 'text', scheme: [pt('Units of k: N/m = kg s⁻²'), pt('m/k has units kg ÷ kg s⁻² = s²'), pt('√(m/k) has units s, the same as T (2π has no units)')] },
      { label: 'b', title: 'Uncertainty', prompt: 'm = 0.200 ± 0.002 kg and T = 0.50 ± 0.01 s. Find the percentage uncertainty in k calculated from k = 4π²m/T².', marks: 3, kind: 'text', scheme: [pt('% in m = 1%'), pt('% in T = 2%, doubled for T² = 4%'), pt('% in k = 1 + 4 = 5%')] },
    ],
  },
  {
    id: 'app-s-kinematics', section: 'A', slot: 'short', unit: 'ap-kinematics', topic: 'Kinematics',
    stem: 'A ball is thrown horizontally at 12 m/s from the top of a cliff 45 m high. Air resistance is negligible.',
    hint: 'Treat the horizontal and vertical motions separately; time links them.',
    parts: [
      { label: 'a', title: 'Time of fall', prompt: 'Calculate the time taken to reach the ground.', marks: 2, kind: 'text', scheme: [pt('45 = ½ × 9.8 × t²'), pt('t = 3.0 s')] },
      { label: 'b', title: 'Distance and velocity', prompt: 'Calculate how far from the foot of the cliff the ball lands and its speed just before impact.', marks: 4, kind: 'text', scheme: [pt('Horizontal distance = 12 × 3.0 = 36 m'), pt('Vertical velocity = 9.8 × 3.0 = 29.4 m/s'), pt('Speed = √(12² + 29.4²)'), pt('= 31.8 m/s')] },
    ],
  },
  {
    id: 'app-s-momentum', section: 'A', slot: 'short', unit: 'ap-dynamics', topic: 'Momentum',
    stem: 'A 0.050 kg bullet travelling at 400 m/s embeds itself in a 4.95 kg block of wood resting on a smooth surface.',
    hint: 'Momentum is conserved in every collision; kinetic energy only in elastic ones.',
    parts: [
      { label: 'a', title: 'Common velocity', prompt: 'State the principle of conservation of momentum and calculate the velocity of the block after impact.', marks: 3, kind: 'text', scheme: [pt('Total momentum of a closed system is constant if no external resultant force acts'), pt('0.050 × 400 = 5.00 v'), pt('v = 4.0 m/s')] },
      { label: 'b', title: 'Energy', prompt: 'Calculate the kinetic energy lost and state where it goes.', marks: 3, kind: 'text', scheme: [pt('KE before = ½ × 0.050 × 400² = 4000 J'), pt('KE after = ½ × 5.00 × 4.0² = 40 J; loss = 3960 J'), pt('Becomes heat (and sound) as the bullet deforms the wood')] },
    ],
  },
  {
    id: 'app-s-shm', section: 'A', slot: 'short', unit: 'ap-circular-shm', topic: 'Simple harmonic motion',
    stem: 'A simple pendulum of length 0.90 m swings with a small amplitude of 0.050 m.',
    hint: 'Write the defining equation of SHM, then use T = 2π√(l/g).',
    parts: [
      { label: 'a', title: 'Definition', prompt: 'Define simple harmonic motion.', marks: 2, kind: 'text', scheme: [pt('Acceleration proportional to displacement from a fixed point'), pt('And always directed towards that point (a = −ω²x)')] },
      { label: 'b', title: 'Period and speed', prompt: 'Calculate the period and the maximum speed of the bob.', marks: 4, kind: 'text', scheme: [pt('T = 2π√(0.90 ÷ 9.8)'), pt('T = 1.9 s'), pt('ω = 2π/T = 3.3 rad/s'), pt('v(max) = ωA = 3.3 × 0.050 = 0.17 m/s')] },
    ],
  },
  {
    id: 'app-s-thermal', section: 'A', slot: 'short', unit: 'ap-thermal', topic: 'Thermal energy',
    stem: 'An electric kettle rated 2.2 kW contains 1.5 kg of water at 25 °C (c = 4200 J kg⁻¹ K⁻¹; specific latent heat of vaporisation 2.26 × 10⁶ J/kg).',
    hint: 'Use Q = mcΔθ to the boiling point, then Q = ml for boiling.',
    parts: [
      { label: 'a', title: 'Heating time', prompt: 'Calculate the time to bring the water to 100 °C, assuming no heat losses.', marks: 3, kind: 'text', scheme: [pt('Q = 1.5 × 4200 × 75 = 4.73 × 10⁵ J'), pt('t = Q/P = 4.73 × 10⁵ ÷ 2200'), pt('= 215 s')] },
      { label: 'b', title: 'Boiling away', prompt: 'If the kettle is left on, calculate the mass of water boiled away in a further 2.0 minutes.', marks: 3, kind: 'text', scheme: [pt('Energy = 2200 × 120 = 2.64 × 10⁵ J'), pt('m = Q/l = 2.64 × 10⁵ ÷ 2.26 × 10⁶'), pt('= 0.12 kg')] },
    ],
  },
  {
    id: 'app-s-emf', section: 'A', slot: 'short', unit: 'ap-current', topic: 'E.m.f. and internal resistance',
    stem: 'A battery of e.m.f. 9.0 V and internal resistance 1.5 Ω is connected to a 6.0 Ω resistor.',
    hint: 'E = I(R + r); terminal p.d. = IR.',
    parts: [
      { label: 'a', title: 'Definition', prompt: 'Define the e.m.f. of a source.', marks: 2, kind: 'text', scheme: [pt('Energy converted from other forms to electrical energy'), pt('Per unit charge passing through the source')] },
      { label: 'b', title: 'Calculations', prompt: 'Calculate the current, the terminal p.d. and the power wasted inside the battery.', marks: 4, kind: 'text', scheme: [pt('I = 9.0 ÷ 7.5 = 1.2 A'), pt('Terminal p.d. = 1.2 × 6.0 = 7.2 V'), pt('Power wasted = I²r = 1.44 × 1.5'), pt('= 2.2 W')] },
    ],
  },
  {
    id: 'app-s-capacitor', section: 'A', slot: 'short', unit: 'ap-electric', topic: 'Capacitors',
    stem: 'A 470 μF capacitor is charged to 12 V and then discharged through a 2.0 kΩ resistor.',
    hint: 'Energy = ½CV²; V = V₀e^(−t/RC).',
    parts: [
      { label: 'a', title: 'Energy stored', prompt: 'Calculate the charge and energy stored.', marks: 2, kind: 'text', scheme: [pt('Q = CV = 470 × 10⁻⁶ × 12 = 5.6 × 10⁻³ C'), pt('W = ½CV² = 0.034 J')] },
      { label: 'b', title: 'Discharge', prompt: 'Calculate the time constant and the p.d. after 2.0 s.', marks: 4, kind: 'text', scheme: [pt('τ = RC = 2000 × 470 × 10⁻⁶ = 0.94 s'), pt('V = 12 e^(−2.0/0.94)'), pt('= 12 × 0.119'), pt('= 1.4 V')] },
    ],
  },
  {
    id: 'app-s-photo', section: 'A', slot: 'short', unit: 'ap-quantum', topic: 'Photoelectric effect',
    stem: 'Light of wavelength 400 nm falls on a caesium surface of work function 2.1 eV (h = 6.63 × 10⁻³⁴ J s, c = 3.0 × 10⁸ m/s, e = 1.6 × 10⁻¹⁹ C).',
    hint: 'Convert the photon energy to eV before subtracting the work function.',
    parts: [
      { label: 'a', title: 'Photon energy', prompt: 'Calculate the energy of a photon in eV.', marks: 2, kind: 'text', scheme: [pt('E = hc/λ = 4.97 × 10⁻¹⁹ J'), pt('= 3.1 eV')] },
      { label: 'b', title: 'Electrons', prompt: 'Calculate the maximum kinetic energy of the emitted electrons and explain why increasing the intensity does not change it.', marks: 4, kind: 'text', scheme: [pt('Ek(max) = 3.1 − 2.1 = 1.0 eV'), pt('= 1.6 × 10⁻¹⁹ J'), pt('Each electron absorbs one photon'), pt('Photon energy depends on frequency only; intensity changes the number of photons')] },
    ],
  },
  {
    id: 'app-s-decay', section: 'A', slot: 'short', unit: 'ap-nuclear', topic: 'Radioactive decay',
    stem: 'A source of cobalt-60 has a half-life of 5.3 years and an initial activity of 8.0 × 10¹⁰ Bq.',
    hint: 'λ = ln 2 / t½; A = A₀e^(−λt).',
    parts: [
      { label: 'a', title: 'Decay constant', prompt: 'Calculate the decay constant in s⁻¹ (1 year = 3.15 × 10⁷ s) and the number of undecayed nuclei.', marks: 3, kind: 'text', scheme: [pt('λ = 0.693 ÷ (5.3 × 3.15 × 10⁷)'), pt('= 4.15 × 10⁻⁹ s⁻¹'), pt('N = A/λ = 1.9 × 10¹⁹')] },
      { label: 'b', title: 'Later activity', prompt: 'Calculate the activity after 15.9 years and state one precaution when handling the source.', marks: 3, kind: 'text', scheme: [pt('15.9 years = 3 half-lives'), pt('A = 8.0 × 10¹⁰ ÷ 8 = 1.0 × 10¹⁰ Bq'), pt('Use tongs / keep distance / lead shielding / short exposure')] },
    ],
  },
  {
    id: 'app-s-waves', section: 'A', slot: 'short', unit: 'ap-waves', topic: 'Stationary waves',
    stem: 'A string 0.80 m long, fixed at both ends, vibrates in its second harmonic at 250 Hz.',
    hint: 'Sketch the pattern: adjacent nodes are half a wavelength apart.',
    parts: [
      { label: 'a', title: 'Pattern', prompt: 'Describe the pattern of nodes and antinodes and find the wavelength.', marks: 3, kind: 'text', scheme: [pt('Three nodes (two at the ends, one in the middle)'), pt('Two antinodes'), pt('λ = 0.80 m')] },
      { label: 'b', title: 'Speed', prompt: 'Calculate the wave speed on the string and the fundamental frequency.', marks: 3, kind: 'text', scheme: [pt('v = fλ = 250 × 0.80'), pt('= 200 m/s'), pt('Fundamental = 125 Hz')] },
    ],
  },

  // ======================= Section I: long questions (20 marks, answer one) =======================
  {
    id: 'app-l-mechanics', section: 'B', slot: 'long', unit: 'ap-statics-energy', topic: 'Mechanics: energy, motion in a circle',
    stem: 'A car of mass 1200 kg travels along a road in the Western Highlands that includes hills and bends.',
    hint: 'Identify the force that provides the centripetal force before you calculate.',
    parts: [
      { label: 'a', title: 'Work and power', prompt: 'Define power. The car climbs a slope of 1 in 20 (rising 1 m for every 20 m along the road) at a steady 15 m/s against a resistive force of 600 N. Calculate the power developed by the engine.', marks: 6, kind: 'text', scheme: [pt('Power is the rate of doing work (energy transferred per second)'), pt('Weight component down the slope = mg × 1/20'), pt('= 1200 × 9.8 ÷ 20 = 588 N'), pt('Driving force = 588 + 600 = 1188 N'), pt('P = Fv = 1188 × 15'), pt('= 1.8 × 10⁴ W')] },
      { label: 'b', title: 'Circular motion', prompt: 'The car rounds a level bend of radius 40 m. Explain why it needs a resultant force, and calculate the maximum speed if the maximum friction force is 7200 N.', marks: 6, kind: 'text', scheme: [pt('Direction of velocity changes, so the car accelerates'), pt('Towards the centre of the circle'), pt('Friction between tyres and road provides the centripetal force'), pt('mv²/r = 7200'), pt('v² = 7200 × 40 ÷ 1200 = 240'), pt('v = 15.5 m/s')] },
      { label: 'c', title: 'Banking', prompt: 'Explain how banking a bend allows a higher safe speed.', marks: 3, kind: 'text', scheme: [pt('The normal reaction is tilted towards the centre'), pt('Its horizontal component supplies part of the centripetal force'), pt('So less friction is needed for the same speed')] },
      { label: 'd', title: 'Braking', prompt: 'On a level road the car brakes from 20 m/s to rest in 32 m. Calculate the average braking force and the energy transferred to heat.', marks: 5, kind: 'text', scheme: [pt('a = v²/2s = 400 ÷ 64 = 6.25 m/s²'), pt('F = ma = 1200 × 6.25'), pt('= 7500 N'), pt('Energy = ½mv² = ½ × 1200 × 400'), pt('= 2.4 × 10⁵ J')] },
    ],
  },
  {
    id: 'app-l-gravity', section: 'B', slot: 'long', unit: 'ap-gravity', topic: 'Gravitational fields and satellites',
    stem: 'Communication satellites relay television signals to dish aerials across Cameroon. (G = 6.67 × 10⁻¹¹ N m² kg⁻², mass of Earth = 6.0 × 10²⁴ kg, radius of Earth = 6.4 × 10⁶ m)',
    hint: 'Equate the gravitational force to the centripetal force and cancel the satellite’s mass.',
    parts: [
      { label: 'a', title: 'Definitions', prompt: 'State Newton’s law of gravitation and define gravitational field strength and gravitational potential.', marks: 5, kind: 'text', scheme: [pt('Force between two point masses is proportional to the product of the masses'), pt('And inversely proportional to the square of their separation'), pt('Field strength: force per unit mass'), pt('Potential: work done per unit mass in bringing a mass from infinity to the point'), pt('Potential is negative / zero at infinity')] },
      { label: 'b', title: 'Geostationary orbit', prompt: 'State three features of a geostationary orbit and show that its radius is about 4.2 × 10⁷ m.', marks: 7, kind: 'text', scheme: [pt('Period 24 hours'), pt('Above the equator'), pt('Moves in the same direction as the Earth rotates'), pt('GMm/r² = mω²r, so r³ = GMT²/(4π²)'), pt('r³ = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ × (8.64 × 10⁴)² ÷ 39.5'), pt('= 7.6 × 10²²'), pt('r = 4.2 × 10⁷ m')] },
      { label: 'c', title: 'Field strength', prompt: 'Calculate the gravitational field strength at the geostationary orbit and explain why astronauts in orbit feel weightless.', marks: 4, kind: 'text', scheme: [pt('g = GM/r² = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ ÷ (4.2 × 10⁷)²'), pt('= 0.23 N/kg'), pt('Astronaut and craft fall freely with the same acceleration'), pt('So there is no contact (reaction) force on the astronaut')] },
      { label: 'd', title: 'Escape velocity', prompt: 'Derive an expression for the escape velocity from the Earth’s surface and calculate its value.', marks: 4, kind: 'text', scheme: [pt('½mv² = GMm/R'), pt('v = √(2GM/R)'), pt('= √(2 × 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ ÷ 6.4 × 10⁶)'), pt('= 1.1 × 10⁴ m/s')] },
    ],
  },
  {
    id: 'app-l-induction', section: 'B', slot: 'long', unit: 'ap-magnetic', topic: 'Electromagnetism and transformers',
    stem: 'Electricity from the dams at Edéa and Song Loulou is generated, transformed and transmitted to towns across the country.',
    hint: 'State both laws of induction before using them in explanations.',
    parts: [
      { label: 'a', title: 'Laws of induction', prompt: 'State Faraday’s law and Lenz’s law of electromagnetic induction. Explain how Lenz’s law follows from the conservation of energy.', marks: 5, kind: 'text', scheme: [pt('Induced e.m.f. is proportional to the rate of change of magnetic flux linkage'), pt('The induced current flows in a direction to oppose the change producing it'), pt('If it aided the change, the current would grow without any work being done'), pt('Creating energy from nothing'), pt('Work must be done against the opposing force, which becomes electrical energy')] },
      { label: 'b', title: 'Generator', prompt: 'A coil of 500 turns and area 0.020 m² rotates at 50 revolutions per second in a field of 0.15 T. Calculate the peak e.m.f. and the r.m.s. e.m.f.', marks: 5, kind: 'text', scheme: [pt('ω = 2π × 50 = 314 rad/s'), pt('E₀ = BANω'), pt('= 0.15 × 0.020 × 500 × 314 = 471 V'), pt('E(rms) = E₀/√2'), pt('= 333 V')] },
      { label: 'c', title: 'Transformer', prompt: 'Explain how a transformer works, and why its core is laminated.', marks: 5, kind: 'text', scheme: [pt('Alternating current in the primary produces an alternating magnetic flux'), pt('The iron core links the flux to the secondary coil'), pt('Changing flux induces an alternating e.m.f. in the secondary'), pt('Vs/Vp = Ns/Np'), pt('Laminations (insulated layers) reduce eddy currents and the heat they waste')] },
      { label: 'd', title: 'Transmission', prompt: '10 MW is transmitted through cables of total resistance 5.0 Ω. Compare the power lost at 20 kV and at 200 kV.', marks: 5, kind: 'text', scheme: [pt('At 20 kV: I = P/V = 500 A'), pt('Loss = I²R = 500² × 5.0 = 1.25 MW'), pt('At 200 kV: I = 50 A'), pt('Loss = 50² × 5.0 = 12.5 kW'), pt('Higher voltage gives a smaller current and a hundred times less loss')] },
    ],
  },
  {
    id: 'app-l-light', section: 'B', slot: 'long', unit: 'ap-light', topic: 'Wave optics',
    stem: 'Light from a sodium lamp is used to investigate interference and diffraction.',
    hint: 'State the conditions for interference; for a grating the highest order has sin θ ≤ 1.',
    parts: [
      { label: 'a', title: 'Coherence', prompt: 'Explain what is meant by coherent sources and why two separate lamps cannot produce a stable interference pattern.', marks: 4, kind: 'text', scheme: [pt('Coherent: same frequency (wavelength)'), pt('And a constant phase difference'), pt('Separate lamps emit in random bursts'), pt('So the phase difference changes rapidly and the pattern is not stable')] },
      { label: 'b', title: 'Young’s slits', prompt: 'In a double-slit experiment the slit separation is 0.40 mm and the screen is 1.6 m away. 11 bright fringes span 23.6 mm. Calculate the wavelength.', marks: 5, kind: 'text', scheme: [pt('11 fringes span 10 fringe spacings'), pt('x = 2.36 mm'), pt('λ = ax/D'), pt('= 0.40 × 10⁻³ × 2.36 × 10⁻³ ÷ 1.6'), pt('= 5.9 × 10⁻⁷ m')] },
      { label: 'c', title: 'Grating', prompt: 'The same light falls normally on a grating with 600 lines per mm. Calculate the angle of the second-order maximum and the highest order observable.', marks: 6, kind: 'text', scheme: [pt('d = 1/600 000 = 1.67 × 10⁻⁶ m'), pt('d sin θ = nλ'), pt('sin θ = 2 × 5.9 × 10⁻⁷ ÷ 1.67 × 10⁻⁶ = 0.708'), pt('θ = 45°'), pt('d/λ = 2.8'), pt('Highest order = 2')] },
      { label: 'd', title: 'Polarisation', prompt: 'Describe an experiment to show that light is a transverse wave.', marks: 5, kind: 'text', scheme: [pt('Look at light through two Polaroid sheets'), pt('Rotate one sheet relative to the other'), pt('Intensity falls to zero when the axes are at 90° (crossed)'), pt('Only transverse waves can be polarised'), pt('Longitudinal waves would pass whatever the orientation')] },
    ],
  },

  // ======================= Section II: data analysis (20 marks) =======================
  {
    id: 'app-d-young', section: 'A', slot: 'data', unit: 'ap-matter', topic: 'Data analysis: the Young modulus',
    stem: 'A student loads a copper wire of original length 2.00 m and diameter 0.40 mm and records: load (N): 0, 10, 20, 30, 40, 50; extension (mm): 0, 1.32, 2.65, 3.97, 5.30, 7.20.',
    hint: 'Plot load against extension, use only the straight part for the gradient, and convert all lengths to metres.',
    parts: [
      { label: 'a', title: 'Graph', prompt: 'Describe the graph of load against extension and state the range over which Hooke’s law is obeyed. Explain what happens beyond it.', marks: 5, kind: 'text', scheme: [pt('Straight line through the origin from 0 to 40 N'), pt('Extension proportional to load up to 40 N'), pt('The 50 N point lies off the line (extension larger)'), pt('The limit of proportionality has been passed'), pt('The wire may start to deform plastically')] },
      { label: 'b', title: 'Gradient', prompt: 'Calculate the gradient of the straight part of the graph.', marks: 3, kind: 'text', scheme: [pt('Gradient = 40 N ÷ 5.30 × 10⁻³ m'), pt('= 7.5 × 10³ N/m'), pt('Using a large triangle from the line')] },
      { label: 'c', title: 'Young modulus', prompt: 'Use the gradient to calculate the Young modulus of copper.', marks: 6, kind: 'text', scheme: [pt('Area = π(0.20 × 10⁻³)²'), pt('= 1.26 × 10⁻⁷ m²'), pt('E = (F/x) × L/A'), pt('= 7.5 × 10³ × 2.00 ÷ 1.26 × 10⁻⁷'), pt('= 1.2 × 10¹¹ Pa'), pt('Unit Pa (N m⁻²)')] },
      { label: 'd', title: 'Improvements', prompt: 'Suggest how the student should measure the diameter and the extension accurately, and one source of error.', marks: 6, kind: 'text', scheme: [pt('Diameter with a micrometer screw gauge'), pt('At several places along the wire and in different directions; average'), pt('Extension with a vernier scale against a reference wire (Searle’s apparatus)'), pt('Reference wire cancels sag of the support and temperature changes'), pt('Long thin wire gives a measurable extension'), pt('Error: zero error, kinks in the wire, or exceeding the elastic limit')] },
    ],
  },
  {
    id: 'app-d-capacitor', section: 'A', slot: 'data', unit: 'ap-electric', topic: 'Data analysis: capacitor discharge',
    stem: 'A capacitor discharges through a 100 kΩ resistor. The p.d. across it is recorded: time (s): 0, 10, 20, 30, 40, 50; V (V): 10.0, 6.1, 3.7, 2.2, 1.4, 0.82.',
    hint: 'If V = V₀e^(−t/RC), then ln V = ln V₀ − t/RC: plot ln V against t.',
    parts: [
      { label: 'a', title: 'Linear graph', prompt: 'Show that a graph of ln V against t should be a straight line, and state what its gradient and intercept represent.', marks: 4, kind: 'text', scheme: [pt('ln V = ln V₀ − t/RC'), pt('Compare with y = c + mx'), pt('Gradient = −1/RC'), pt('Intercept = ln V₀')] },
      { label: 'b', title: 'Values', prompt: 'Calculate ln V for each reading.', marks: 3, kind: 'text', scheme: [pt('2.30, 1.81, 1.31'), pt('0.79, 0.34, −0.20'), pt('Values to 2 or 3 significant figures')] },
      { label: 'c', title: 'Capacitance', prompt: 'Find the gradient and hence the capacitance.', marks: 6, kind: 'text', scheme: [pt('Gradient = (−0.20 − 2.30) ÷ 50'), pt('= −0.050 s⁻¹'), pt('RC = 1/0.050 = 20 s'), pt('C = 20 ÷ 1.00 × 10⁵'), pt('= 2.0 × 10⁻⁴ F'), pt('= 200 μF')] },
      { label: 'd', title: 'Half-life and reliability', prompt: 'Find the time for the p.d. to halve, and suggest two ways to make the results more reliable.', marks: 7, kind: 'text', scheme: [pt('t½ = RC ln 2'), pt('= 20 × 0.693 = 13.9 s'), pt('Check from the data: 10 V to 5 V between 10 s and 20 s'), pt('Use a data logger / voltmeter of high resistance'), pt('Repeat the discharge and average the readings'), pt('Take more readings, especially at the start'), pt('Use a stopwatch with readings taken at fixed intervals, or record on video')] },
    ],
  },

  // ======================= Section III: options (15 marks, answer two) =======================
  {
    id: 'app-o-energy', section: 'B', slot: 'option', unit: 'ap-applied', topic: 'Option 1: Energy resources and environmental physics',
    stem: 'Cameroon plans more hydroelectric dams, solar farms in the north and some wind power.',
    hint: 'For each source give the energy change, a calculation where possible and one advantage and disadvantage.',
    parts: [
      { label: 'a', title: 'Hydroelectric power', prompt: 'Water falls through 50 m at 300 m³/s. Calculate the electrical power if the station is 90% efficient (density of water 1000 kg/m³).', marks: 4, kind: 'text', scheme: [pt('Mass per second = 3.0 × 10⁵ kg/s'), pt('Power = mgh per second = 3.0 × 10⁵ × 9.8 × 50 = 1.47 × 10⁸ W'), pt('× 0.90'), pt('= 1.3 × 10⁸ W (130 MW)')] },
      { label: 'b', title: 'Wind power', prompt: 'Show that the power in the wind passing through blades of area A is ½ρAv³, and explain why doubling the wind speed increases the power eightfold.', marks: 5, kind: 'text', scheme: [pt('Volume of air per second = Av'), pt('Mass per second = ρAv'), pt('KE per second = ½(ρAv)v²'), pt('= ½ρAv³'), pt('v³ with v doubled gives 2³ = 8')] },
      { label: 'c', title: 'Solar and environment', prompt: 'Give two advantages of solar power in northern Cameroon and explain how burning fossil fuels contributes to global warming.', marks: 6, kind: 'text', scheme: [pt('High, reliable sunshine'), pt('No fuel cost / no emissions / suits remote villages off the grid'), pt('Burning fuels releases CO₂'), pt('CO₂ absorbs infrared radiation emitted by the Earth'), pt('And re-emits some back towards the surface'), pt('Raising the average temperature (enhanced greenhouse effect)')] },
    ],
  },
  {
    id: 'app-o-communication', section: 'B', slot: 'option', unit: 'ap-applied', topic: 'Option 2: Communication',
    stem: 'Radio stations, mobile networks and optical fibre links carry information across Cameroon.',
    hint: 'Compare AM and FM by bandwidth, noise and range.',
    parts: [
      { label: 'a', title: 'Modulation', prompt: 'Explain amplitude modulation and frequency modulation, and give one advantage of FM over AM.', marks: 5, kind: 'text', scheme: [pt('A carrier wave of high frequency carries the signal'), pt('AM: amplitude of the carrier varies with the signal'), pt('FM: frequency of the carrier varies with the signal'), pt('Amplitude of FM is constant'), pt('FM is less affected by noise/better quality')] },
      { label: 'b', title: 'Bandwidth', prompt: 'An AM station broadcasts audio frequencies up to 4.5 kHz on a 1.0 MHz carrier. State the bandwidth and the frequency range occupied.', marks: 3, kind: 'text', scheme: [pt('Bandwidth = 2 × 4.5 = 9.0 kHz'), pt('From 995.5 kHz'), pt('To 1004.5 kHz')] },
      { label: 'c', title: 'Optical fibres', prompt: 'Explain how an optical fibre carries signals and give three advantages over copper cable.', marks: 7, kind: 'text', scheme: [pt('Light travels in the core by total internal reflection'), pt('The core has a higher refractive index than the cladding'), pt('Angle of incidence exceeds the critical angle'), pt('Larger bandwidth (more data)'), pt('Less attenuation, fewer repeaters'), pt('No electromagnetic interference / more secure'), pt('Lighter and cheaper material')] },
    ],
  },
  {
    id: 'app-o-electronics', section: 'B', slot: 'option', unit: 'ap-electronics', topic: 'Option 3: Electronics',
    stem: 'A street light must switch on automatically at dusk using a light-dependent resistor (LDR) and a transistor.',
    hint: 'Trace the chain: light level → LDR resistance → base voltage → transistor → lamp.',
    parts: [
      { label: 'a', title: 'Sensor circuit', prompt: 'Describe a potential divider and transistor circuit that switches a lamp (through a relay) on when it gets dark, and explain how it works.', marks: 7, kind: 'text', scheme: [pt('LDR and a resistor in series across the supply'), pt('Base of the transistor connected to the junction'), pt('LDR placed so that its p.d. feeds the base (LDR in the lower arm)'), pt('In darkness the LDR resistance rises'), pt('Base voltage rises above about 0.7 V'), pt('Transistor switches on; collector current energises the relay'), pt('Relay switches on the lamp; a diode across the relay protects the transistor')] },
      { label: 'b', title: 'Op-amp', prompt: 'An inverting amplifier has an input resistor of 10 kΩ and a feedback resistor of 220 kΩ, with a supply of ±9 V. Calculate the gain and the output for inputs of 0.20 V and 0.60 V.', marks: 4, kind: 'text', scheme: [pt('Gain = −Rf/Rin = −22'), pt('0.20 V gives −4.4 V'), pt('0.60 V would give −13.2 V'), pt('But the output saturates at about −9 V')] },
      { label: 'c', title: 'Logic', prompt: 'Write the truth table for a NAND gate and explain why NAND gates are called universal.', marks: 4, kind: 'text', scheme: [pt('00 → 1, 01 → 1'), pt('10 → 1, 11 → 0'), pt('Any other gate can be built from NAND gates only'), pt('e.g. joining both inputs gives NOT')] },
    ],
  },
  {
    id: 'app-o-medical', section: 'B', slot: 'option', unit: 'ap-applied', topic: 'Option 4: Medical physics',
    stem: 'Hospitals in Yaoundé and Douala use X-rays, ultrasound and radioactive tracers.',
    hint: 'Compare the techniques by what they show and the risk to the patient.',
    parts: [
      { label: 'a', title: 'X-rays', prompt: 'Explain how X-rays are produced in an X-ray tube and why bones show up clearly on an X-ray image. Calculate the minimum wavelength produced at 50 kV.', marks: 6, kind: 'text', scheme: [pt('Electrons from a heated filament are accelerated by a high p.d.'), pt('They strike a metal (tungsten) target; X-rays are emitted as they decelerate'), pt('Bone absorbs X-rays more than soft tissue (higher atomic number, calcium)'), pt('eV = hc/λmin'), pt('λmin = 6.63 × 10⁻³⁴ × 3.0 × 10⁸ ÷ (1.6 × 10⁻¹⁹ × 5.0 × 10⁴)'), pt('= 2.5 × 10⁻¹¹ m')] },
      { label: 'b', title: 'Ultrasound', prompt: 'Explain how an ultrasound scan forms an image of a fetus and why a gel is used.', marks: 5, kind: 'text', scheme: [pt('Pulses of ultrasound (1 to 10 MHz) are sent into the body'), pt('Reflected at boundaries between tissues'), pt('Time of the echo gives the depth of each boundary'), pt('Large acoustic impedance difference between air and skin would reflect almost all the ultrasound'), pt('Gel matches impedance so the ultrasound enters the body')] },
      { label: 'c', title: 'Tracers', prompt: 'Give two properties of a suitable radioactive tracer such as technetium-99m and explain each.', marks: 4, kind: 'text', scheme: [pt('Gamma emitter'), pt('So radiation escapes the body to be detected, with little ionisation'), pt('Short half-life (6 hours)'), pt('Activity falls quickly, limiting the dose to the patient')] },
    ],
  },
];
