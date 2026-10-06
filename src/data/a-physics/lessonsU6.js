// A Level Physics lessons for Upper Sixth (MINESEC Modules 5 and 6, atomic and
// nuclear physics, electronics and the options). Original text written for this
// app. **double asterisks** mark key terms (rendered bold). `examples` are
// worked examples.

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

export const LESSONS_U6 = [
  // ---------- 1. Gravitational fields ----------
  L('ap-grav-1', 'ap-gravity', '1.1', 'Newton’s law of gravitation, field strength and potential', 14, ['Fields', 'Gravitation'], [
    'A **field** is a region in which a body experiences a force. **Newton’s law of gravitation**: two point masses attract each other with a force proportional to the product of their masses and inversely proportional to the square of their separation: **F = Gm₁m₂/r²**, with G = 6.67 × 10⁻¹¹ N m² kg⁻². Spherical bodies such as planets act as if their mass were at their centre.',
    '**Gravitational field strength** g is the force per unit mass: g = F/m. Outside a sphere of mass M, **g = GM/r²**, an inverse-square law. Near the Earth’s surface g is about 9.8 N/kg; it decreases with height. Field lines point towards the mass; near the surface the field is nearly uniform.',
    '**Gravitational potential** V at a point is the work done per unit mass in bringing a small mass from infinity to that point: **V = −GM/r**. It is zero at infinity and **negative** everywhere else, because the field is attractive. The change in potential energy when a mass m moves between two points is mΔV; near the surface this reduces to mgΔh.',
    'Field strength is the negative of the potential gradient: g = −dV/dr. Equipotential surfaces around a planet are concentric spheres, at right angles to the field lines. The area under a g-r graph gives the potential difference between two radii.',
  ], null, 'Gravitational potential is always negative; a body moving away from a planet gains potential energy (it becomes less negative).',
  ['The Earth’s radius is 6.4 × 10⁶ m and g at the surface is 9.8 N/kg. The Earth’s mass is about:', ['6.0 × 10²⁴ kg', '6.0 × 10¹⁸ kg', '9.8 × 10¹² kg', '4.0 × 10²⁶ kg'], 'M = gR²/G = 9.8 × (6.4 × 10⁶)² ÷ 6.67 × 10⁻¹¹.'],
  [['Gravitational field strength', 'The force per unit mass at a point in a gravitational field.'], ['Gravitational potential', 'The work done per unit mass in bringing a mass from infinity to a point.'], ['Inverse square law', 'A quantity proportional to 1/r².']],
  [
    { q: 'Find the gravitational force between the Earth (6.0 × 10²⁴ kg) and the Moon (7.4 × 10²² kg), 3.8 × 10⁸ m apart.', steps: ['F = Gm₁m₂/r² = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ × 7.4 × 10²² ÷ (3.8 × 10⁸)².', 'Numerator = 2.96 × 10³⁷; denominator = 1.44 × 10¹⁷.', 'F = **2.1 × 10²⁰ N**.'] },
  ]),

  L('ap-grav-2', 'ap-gravity', '1.2', 'Satellites, orbits and escape velocity', 14, ['Fields', 'Satellites'], [
    'A satellite in a circular orbit of radius r moves under gravity alone, which provides the centripetal force: **GMm/r² = mv²/r**, so **v = √(GM/r)**: higher orbits are slower. The period is T = 2πr/v, which leads to **T² = (4π²/GM) r³**, **Kepler’s third law** (T² ∝ r³), true for all bodies orbiting the same central mass.',
    'A **geostationary** satellite orbits above the equator, in the same direction as the Earth spins, with a **period of 24 hours**, so it stays above the same point. Its orbital radius is about 4.2 × 10⁷ m (about 36 000 km above the surface). These satellites carry television and communications; dish antennas in Cameroon point at fixed satellites. **Low polar orbits** (a period of about 90 minutes) are used for weather, mapping and observation, since the Earth turns beneath them.',
    'The total energy of an orbiting satellite is E = Ek + Ep = ½GMm/r − GMm/r = **−GMm/2r**. Astronauts feel weightless because they and their craft are in free fall together, not because gravity is absent.',
    'The **escape velocity** is the minimum launch speed for an object to escape a planet’s gravity entirely: ½mv² = GMm/R, so **v(esc) = √(2GM/R) = √(2gR)**, about 11.2 km/s for the Earth, independent of the object’s mass. Gas molecules with speeds approaching it can leak away, which is why the Moon has no atmosphere.',
  ], null, 'For orbit questions start from "gravitational force = centripetal force" and cancel the satellite’s mass.',
  ['Two satellites orbit the Earth; one has twice the orbital radius of the other. The ratio of their periods (outer to inner) is:', ['2√2', '2', '4', '√2'], 'T ∝ r^(3/2), and 2^(3/2) = 2.83.'],
  [['Geostationary orbit', 'An equatorial orbit with a 24-hour period, so the satellite stays above one point.'], ['Kepler’s third law', 'For orbits about the same body, T² is proportional to r³.'], ['Escape velocity', 'The minimum speed needed to escape from a planet’s gravitational field.']],
  [
    { q: 'Show that the radius of a geostationary orbit is about 4.2 × 10⁷ m. (GM for the Earth = 4.0 × 10¹⁴ N m² kg⁻¹, T = 8.64 × 10⁴ s)', steps: ['r³ = GMT²/(4π²) = 4.0 × 10¹⁴ × (8.64 × 10⁴)² ÷ 39.5.', '= 4.0 × 10¹⁴ × 7.46 × 10⁹ ÷ 39.5 = 7.56 × 10²².', 'r = ∛(7.56 × 10²²) = **4.2 × 10⁷ m**, about 36 000 km above the surface.'] },
  ]),

  // ---------- 2. Electric fields and capacitors ----------
  L('ap-efield-1', 'ap-electric', '2.1', 'Coulomb’s law, electric field strength and potential', 15, ['Fields', 'Electrostatics'], [
    'Charges exert forces on each other: like charges repel, unlike charges attract. **Coulomb’s law**: the force between two point charges is **F = Q₁Q₂/(4πε₀r²)**, where ε₀ = 8.85 × 10⁻¹² F/m is the permittivity of free space (1/(4πε₀) ≈ 9.0 × 10⁹ N m² C⁻²). Like gravity it is an inverse-square law, but much stronger and it can be attractive or repulsive.',
    '**Electric field strength** E is the force per unit positive charge: **E = F/Q** (N/C). For a point charge, **E = Q/(4πε₀r²)**, pointing away from positive and towards negative charge. Between two parallel plates with p.d. V and separation d, the field is **uniform**: **E = V/d** (V/m), with straight, parallel, equally spaced field lines.',
    '**Electric potential** V at a point is the work done per unit positive charge in bringing a charge from infinity to that point: for a point charge **V = Q/(4πε₀r)**, positive near a positive charge. The work done moving a charge q through a p.d. V is **W = qV**. Field strength is the negative potential gradient, E = −dV/dr; equipotentials are perpendicular to field lines.',
    'A charged particle between parallel plates feels a constant force qE, so it accelerates uniformly: entering at right angles to the field, it follows a **parabola**, like a projectile. Applications: inkjet printers, the cathode ray tube, electrostatic precipitators that remove soot from factory chimneys, and photocopiers.',
  ], 'electroscope', 'Compare with gravitation: same inverse-square form, but charge can be negative and the constant is about 10²⁰ times larger in strength.',
  ['The p.d. between two plates 5.0 mm apart is 1000 V. The force on an electron (1.6 × 10⁻¹⁹ C) between them is:', ['3.2 × 10⁻¹⁴ N', '1.6 × 10⁻¹⁶ N', '2.0 × 10⁵ N', '3.2 × 10⁻¹⁷ N'], 'E = V/d = 2.0 × 10⁵ V/m; F = eE.'],
  [['Electric field strength', 'The force per unit positive charge.'], ['Electric potential', 'The work done per unit positive charge in bringing a charge from infinity to a point.'], ['Uniform field', 'A field of the same strength and direction everywhere, as between parallel plates.']],
  [
    { q: 'Find the electric field strength and potential 0.10 m from a point charge of +2.0 × 10⁻⁹ C.', steps: ['E = Q/(4πε₀r²) = 9.0 × 10⁹ × 2.0 × 10⁻⁹ ÷ 0.10² = **1800 N/C**, directed away from the charge.', 'V = Q/(4πε₀r) = 9.0 × 10⁹ × 2.0 × 10⁻⁹ ÷ 0.10 = **180 V**.'] },
  ]),

  L('ap-cap-1', 'ap-electric', '2.2', 'Capacitors: capacitance, energy and discharge', 15, ['Capacitors'], [
    'A **capacitor** stores charge on two conducting plates separated by an insulator (**dielectric**). When connected to a supply, equal and opposite charges +Q and −Q build up on the plates. **Capacitance** C = Q/V, in farads; practical capacitors are measured in μF, nF and pF. For a parallel-plate capacitor, **C = ε₀εᵣA/d**: larger plates, closer plates and a dielectric with higher relative permittivity εᵣ all increase C.',
    'The **energy stored** is the area under the Q-V graph: **W = ½QV = ½CV² = Q²/2C**. Capacitors in **parallel** add: C = C₁ + C₂; in **series**, 1/C = 1/C₁ + 1/C₂ (and each carries the same charge).',
    'When a charged capacitor **discharges** through a resistor R, the current, charge and p.d. all decay **exponentially**: **Q = Q₀e^(−t/RC)**. The **time constant** τ = RC is the time for the charge to fall to 1/e (37%) of its starting value; the half-life is 0.69RC. When **charging** through R, Q = Q₀(1 − e^(−t/RC)) and the current falls exponentially.',
    'Uses: smoothing the output of rectifiers, camera flash units (charge slowly, discharge quickly), timing circuits (a larger RC gives a longer delay), back-up power for memory, tuning circuits and touch screens.',
  ], 'capacitor-discharge', 'After a time t, the fraction left is e^(−t/RC). Take natural logs to find t: t = RC ln(Q₀/Q).',
  ['A 2200 μF capacitor is charged to 12 V. The energy stored is:', ['0.16 J', '0.026 J', '0.32 J', '26 J'], 'W = ½CV² = ½ × 2.2 × 10⁻³ × 144.'],
  [['Capacitance', 'Charge stored per unit potential difference, C = Q/V.'], ['Time constant', 'RC: the time for the charge on a discharging capacitor to fall to 37%.'], ['Dielectric', 'The insulating material between the plates of a capacitor.']],
  [
    { q: 'A 470 μF capacitor charged to 9.0 V discharges through a 10 kΩ resistor. Find the time constant, the initial current and the p.d. after 10 s.', steps: ['τ = RC = 1.0 × 10⁴ × 4.7 × 10⁻⁴ = **4.7 s**.', 'Initial current = V/R = 9.0 ÷ 1.0 × 10⁴ = **0.90 mA**.', 'V = V₀e^(−t/RC) = 9.0 × e^(−10/4.7) = 9.0 × 0.119 = **1.1 V**.'] },
  ]),

  // ---------- 3. Magnetism and induction ----------
  L('ap-mag-1', 'ap-magnetic', '3.1', 'Magnetic fields and forces on currents and charges', 15, ['Magnetism'], [
    'Magnetic fields are produced by magnets and by **moving charges** (currents). Field patterns: concentric circles round a straight wire (right-hand grip rule); a field like a bar magnet’s from a **solenoid**, very uniform inside it. The field strength, **magnetic flux density** B, is measured in **teslas**. For a long straight wire B = μ₀I/(2πr); inside a long solenoid B = μ₀nI, where n is turns per metre and μ₀ = 4π × 10⁻⁷ H/m.',
    'A current-carrying conductor in a magnetic field feels a force **F = BIL sin θ**, greatest when the wire is at right angles to the field; its direction is given by **Fleming’s left-hand rule**. This is the principle of the **electric motor** and the moving-coil meter. Two parallel wires carrying currents in the same direction attract.',
    'A charge q moving at speed v at right angles to a field feels **F = Bqv**, always perpendicular to its velocity, so it moves in a **circle**: Bqv = mv²/r gives **r = mv/(Bq)**. This is used in mass spectrometers, cyclotrons and to deflect electron beams. In crossed electric and magnetic fields, only particles with v = E/B pass undeflected (a velocity selector).',
    'In the **Hall effect**, the magnetic force pushes moving charge carriers to one side of a conducting slab, setting up a **Hall voltage** across it. In equilibrium the electric and magnetic forces balance; V_H = BI/(ntq). Semiconductors give larger Hall voltages (smaller n), and Hall probes are used to measure flux density.',
  ], 'magnetic-field', 'For Fleming’s left-hand rule: First finger = Field, seCond finger = Current (conventional), thuMb = Motion (force).',
  ['An electron moves at 2.0 × 10⁷ m/s at right angles to a 1.0 × 10⁻³ T field. The radius of its path is about (m = 9.1 × 10⁻³¹ kg):', ['0.11 m', '11 m', '1.1 × 10⁻⁴ m', '0.011 m'], 'r = mv/(Be) = 9.1 × 10⁻³¹ × 2.0 × 10⁷ ÷ (1.0 × 10⁻³ × 1.6 × 10⁻¹⁹).'],
  [['Magnetic flux density', 'The strength of a magnetic field, in teslas: B = F/(IL).'], ['Hall voltage', 'The p.d. across a conductor carrying a current in a magnetic field.'], ['Solenoid', 'A long coil of wire that produces a uniform field inside when current flows.']],
  [
    { q: 'A 0.15 m wire carries 3.0 A at 60° to a uniform 0.40 T field. Find the force on it.', steps: ['F = BIL sin θ = 0.40 × 3.0 × 0.15 × sin 60°.', '= 0.18 × 0.866.', '= **0.16 N**, perpendicular to both the wire and the field.'] },
  ]),

  L('ap-induct-1', 'ap-magnetic', '3.2', 'Electromagnetic induction, generators and transformers', 15, ['Induction'], [
    '**Magnetic flux** through an area A at right angles to a field B is **Φ = BA** (webers); for a coil of N turns, the **flux linkage** is NΦ. An e.m.f. is **induced** whenever the flux linking a circuit changes: a magnet moved into a coil, a coil rotating in a field, a conductor cutting field lines, or a changing current in a nearby coil.',
    '**Faraday’s law**: the induced e.m.f. is equal to the **rate of change of flux linkage**. **Lenz’s law**: the induced current flows in such a direction as to **oppose the change** that produces it; this is a consequence of the conservation of energy. Together: **E = −N dΦ/dt**. A straight rod of length L moving at speed v across a field B has E = BLv.',
    'An **a.c. generator** has a coil rotating at angular speed ω in a magnetic field; the flux linkage varies sinusoidally, and the e.m.f. is **E = BANω sin ωt**, with peak value BANω. The direction is given by **Fleming’s right-hand rule**. Most of Cameroon’s electricity comes from generators turned by water at the dams.',
    'A **transformer** has primary and secondary coils on an iron core; the alternating current in the primary produces changing flux that induces an e.m.f. in the secondary: **Vs/Vp = Ns/Np**, and for an ideal transformer VpIp = VsIs. Losses come from coil resistance, **eddy currents** in the core (reduced by laminating it), hysteresis and flux leakage. Electricity is transmitted at high voltage so that the current, and the I²R loss in the cables, is small. Eddy currents are also useful, in induction cookers and magnetic braking.',
  ], 'transformer', 'In induction problems, ask: what is changing (B, A or the angle)? Then find the rate of change of NBA.',
  ['A coil of 200 turns and area 4.0 × 10⁻³ m² is in a field that falls uniformly from 0.50 T to zero in 0.10 s. The induced e.m.f. is:', ['4.0 V', '0.40 V', '40 V', '0.020 V'], 'E = NΔΦ/Δt = 200 × 0.50 × 4.0 × 10⁻³ ÷ 0.10.'],
  [['Magnetic flux', 'Φ = BA, the product of flux density and area at right angles.'], ['Lenz’s law', 'An induced current flows so as to oppose the change causing it.'], ['Eddy currents', 'Currents induced in a solid conductor by a changing magnetic field.']],
  [
    { q: 'A transformer steps 220 V down to 11 V for a phone charger. The primary has 2000 turns. Find the secondary turns, and the primary current when the output is 1.1 A (assume 100% efficiency).', steps: ['Ns = Np × Vs/Vp = 2000 × 11 ÷ 220 = **100 turns**.', 'Power out = 11 × 1.1 = 12.1 W = power in.', 'Ip = 12.1 ÷ 220 = **0.055 A**.'] },
  ]),

  // ---------- 4. Alternating currents ----------
  L('ap-ac-1', 'ap-ac', '4.1', 'Alternating current: r.m.s. values, reactance and impedance', 14, ['a.c.'], [
    'An alternating current varies sinusoidally: **I = I₀ sin ωt**, with ω = 2πf. Its average over a cycle is zero, so we use the **root mean square (r.m.s.)** value: the steady current that would produce the **same heating effect** in a resistor. For a sinusoidal wave, **I(rms) = I₀/√2** and **V(rms) = V₀/√2**. The Cameroon mains is about 220 V r.m.s. at 50 Hz, so its peak is about 311 V.',
    'Mean power in a resistor: **P = I(rms)V(rms) = I(rms)²R = ½I₀²R**. Meters normally read r.m.s. values. On an oscilloscope, the peak voltage is read from the vertical sensitivity (V/div) and the period from the time base (ms/div), giving f = 1/T.',
    'In a **capacitor**, the current **leads** the p.d. by 90° (π/2), and the opposition to a.c. is its **reactance Xc = 1/(2πfC)**: it blocks d.c. and passes high frequencies easily. In an **inductor**, the current **lags** the p.d. by 90°, and its reactance **XL = 2πfL** increases with frequency. A pure capacitor or inductor uses no average power.',
    'For a resistor and a reactive component in series, the total opposition is the **impedance Z**: Z = √(R² + X²), with V(rms) = I(rms) Z, and the phase angle φ given by tan φ = X/R. In an RLC series circuit, Z = √(R² + (XL − Xc)²), and at **resonance** XL = Xc, so f₀ = 1/(2π√(LC)): the principle of tuning a radio.',
  ], null, 'Mains values (220 V) are r.m.s.; multiply by √2 for the peak when insulation or diode ratings are asked for.',
  ['The reactance of a 10 μF capacitor at 50 Hz is about:', ['320 Ω', '3.1 × 10⁻³ Ω', '3140 Ω', '0.32 Ω'], 'Xc = 1/(2π × 50 × 10 × 10⁻⁶).'],
  [['R.m.s. value', 'The steady value giving the same heating effect as the alternating quantity.'], ['Reactance', 'The opposition of a capacitor or inductor to alternating current.'], ['Impedance', 'The total opposition of a circuit to alternating current.']],
  [
    { q: 'A 100 Ω resistor and a capacitor of reactance 75 Ω are in series across a 220 V r.m.s. supply. Find the impedance, the current and the phase angle.', steps: ['Z = √(100² + 75²) = √15 625 = **125 Ω**.', 'I(rms) = 220 ÷ 125 = **1.76 A**.', 'tan φ = 75 ÷ 100 = 0.75, so φ = **37°** (the current leads the supply voltage).'] },
  ]),

  L('ap-ac-2', 'ap-ac', '4.2', 'Rectification and smoothing', 12, ['a.c.', 'Electronics'], [
    '**Rectification** converts a.c. into d.c. using **diodes**, which conduct in one direction only. **Half-wave rectification**: one diode in series with the load lets through only one half of each cycle; the output is unidirectional but pulsing, with large gaps, and half the power is lost.',
    '**Full-wave rectification** uses a **bridge rectifier** of four diodes: during each half-cycle two diodes conduct, and the current flows the same way through the load in both halves. The output is a series of positive half-sine pulses at twice the supply frequency (100 Hz from 50 Hz mains).',
    '**Smoothing**: a capacitor connected across the load charges up to the peak voltage and then discharges slowly through the load between peaks, filling the gaps. The variation left is the **ripple**. Smoothing is better (smaller ripple) when the **time constant RC is much greater than the time between peaks**: a larger capacitor or a larger load resistance.',
    'Phone chargers, radios and laptop power supplies combine a step-down transformer, a bridge rectifier, a smoothing capacitor and often a **Zener diode** or voltage regulator to give a steady d.c. output. Each silicon diode drops about 0.7 V when conducting, so a bridge loses about 1.4 V.',
  ], 'rectification', 'Sketch rectification graphs on the same time axis as the input so the examiner can see which halves are kept.',
  ['The frequency of the ripple after full-wave rectification of a 50 Hz supply is:', ['100 Hz', '50 Hz', '25 Hz', '200 Hz'], 'There are two pulses per cycle.'],
  [['Rectification', 'Converting alternating current into direct current.'], ['Bridge rectifier', 'Four diodes arranged to give full-wave rectification.'], ['Ripple', 'The remaining variation in a smoothed d.c. output.']],
  [
    { q: 'A full-wave rectified 50 Hz output feeds a 1000 Ω load with a smoothing capacitor. What capacitance gives a time constant ten times the time between peaks?', steps: ['Peaks occur every 1 ÷ 100 = 0.010 s.', 'Required RC = 10 × 0.010 = 0.10 s.', 'C = 0.10 ÷ 1000 = 1.0 × 10⁻⁴ F = **100 μF**.'] },
  ]),

  // ---------- 5. Waves ----------
  L('ap-wave-1', 'ap-waves', '5.1', 'Progressive waves and the Doppler effect', 14, ['Waves'], [
    'A **progressive wave** transfers energy without transferring matter. In **transverse** waves the vibrations are perpendicular to the direction of travel (waves on strings, all electromagnetic waves); in **longitudinal** waves they are parallel, forming compressions and rarefactions (sound). Only transverse waves can be **polarised**.',
    'Terms: **amplitude** A, **wavelength** λ, **period** T, **frequency** f = 1/T, **phase difference** (in degrees or radians, 2π for one wavelength) and **wave speed v = fλ**. **Intensity**, the power per unit area, is proportional to the **square of the amplitude**, and from a point source it falls as 1/r².',
    'The speed of a wave depends on the medium: on a string under tension T with mass per unit length μ, **v = √(T/μ)**; sound travels at about 340 m/s in air, faster in water (1500 m/s) and in solids, and its speed in air increases with temperature.',
    'The **Doppler effect**: when a source of sound moves **towards** an observer, the waves are squashed and the observed frequency is **higher**; moving away, it is **lower**: f′ = f v/(v ∓ u(s)) for a moving source. Examples: the changing pitch of a passing ambulance or motorbike, police radar speed guns, ultrasound measurement of blood flow, and the **red shift** of light from receding galaxies.',
  ], 'transverse-wave', 'Phase difference between two points = 2π × (path separation ÷ λ).',
  ['Points on a wave 0.25λ apart have a phase difference of:', ['π/2 rad (90°)', 'π rad', '2π rad', 'π/4 rad'], '2π × 0.25 = π/2.'],
  [['Progressive wave', 'A wave that transfers energy from one place to another.'], ['Intensity', 'Power per unit area, proportional to amplitude squared.'], ['Doppler effect', 'The change in observed frequency when a source and observer move relative to each other.']],
  [
    { q: 'An ambulance siren of 800 Hz approaches at 30 m/s. What frequency does a person at the roadside hear? (speed of sound 340 m/s)', steps: ['For a source moving towards the observer: f′ = f × v/(v − u).', 'f′ = 800 × 340 ÷ (340 − 30) = 800 × 340 ÷ 310.', 'f′ = **877 Hz**, higher than emitted. As it moves away it falls to 800 × 340 ÷ 370 = 735 Hz.'] },
  ]),

  L('ap-wave-2', 'ap-waves', '5.2', 'Superposition, interference, stationary waves and beats', 15, ['Waves', 'Superposition'], [
    'The **principle of superposition**: when two waves meet, the resultant displacement at any point is the **vector sum** of their individual displacements. **Interference** patterns are stable only with **coherent** sources (a constant phase difference, same frequency). Where the **path difference** is a whole number of wavelengths, nλ, waves arrive in phase: **constructive** interference (maximum). Where it is (n + ½)λ, they cancel: **destructive** interference (minimum). Two loudspeakers driven by one signal generator give loud and quiet regions as you walk past.',
    'A **stationary (standing) wave** forms when two waves of the same frequency and amplitude travel in opposite directions, usually a wave and its reflection. There are **nodes** (zero amplitude) and **antinodes** (maximum amplitude); adjacent nodes are **λ/2 apart**. All points between two nodes vibrate in phase; energy is not transferred along the wave.',
    'On a **string** fixed at both ends (guitar, local harp), there are nodes at both ends: the fundamental has L = λ/2, so **f₀ = v/(2L) = (1/2L)√(T/μ)**, and all harmonics f₀, 2f₀, 3f₀ ... are possible. In an **open pipe** (flute) there are antinodes at both ends and all harmonics occur; in a pipe **closed at one end** there is a node at the closed end and an antinode at the open end, so L = λ/4 for the fundamental and only **odd harmonics** occur. A resonance tube with a tuning fork measures the speed of sound: L₂ − L₁ = λ/2 (end correction cancels).',
    '**Beats**: two notes of slightly different frequency sound together and the loudness rises and falls regularly; the **beat frequency = |f₁ − f₂|**. Musicians use beats to tune instruments: they adjust until the beats disappear.',
  ], 'stationary-wave', 'Draw stationary-wave diagrams with nodes and antinodes marked, then read the wavelength from them; do not use formulae blindly.',
  ['A pipe closed at one end has a fundamental of 200 Hz. The next resonant frequency is:', ['600 Hz', '400 Hz', '300 Hz', '800 Hz'], 'Only odd harmonics occur: 3 × 200.'],
  [['Coherent sources', 'Sources with the same frequency and a constant phase difference.'], ['Node', 'A point of zero amplitude on a stationary wave.'], ['Beat frequency', 'The difference between two frequencies sounding together.']],
  [
    { q: 'A guitar string 0.65 m long has a fundamental frequency of 110 Hz. Find the wave speed on the string, and the frequency of the third harmonic.', steps: ['Fundamental: L = λ/2, so λ = 1.30 m.', 'v = fλ = 110 × 1.30 = **143 m/s**.', 'Third harmonic = 3 × 110 = **330 Hz**.'] },
  ]),

  // ---------- 6. Light ----------
  L('ap-light-1', 'ap-light', '6.1', 'Electromagnetic waves: interference, diffraction and polarisation', 15, ['Light', 'Waves'], [
    'All **electromagnetic waves** are transverse waves of oscillating electric and magnetic fields and travel at **c = 3.0 × 10⁸ m/s** in a vacuum. In order of increasing frequency: radio, microwaves, infrared, visible (red 700 nm to violet 400 nm), ultraviolet, X-rays and gamma rays. Their properties and uses depend on wavelength.',
    '**Young’s double-slit experiment** showed that light is a wave. Light from a single slit illuminates two narrow slits a small distance a apart, which act as coherent sources; bright and dark **fringes** appear on a screen a distance D away. The fringe spacing is **x = λD/a**, so measuring x, a and D gives the wavelength of light.',
    '**Diffraction** is the spreading of waves through a gap or round an obstacle; it is greatest when the gap is about the size of the wavelength. A **diffraction grating** has many equally spaced lines (spacing d = 1/N, where N is lines per metre). Maxima occur where **d sin θ = nλ**, giving sharp, bright, widely spaced orders; white light is split into spectra, used to measure wavelengths and analyse light from stars.',
    '**Polarisation**: in unpolarised light the electric field vibrates in all planes perpendicular to the direction of travel; a Polaroid filter lets through vibrations in one plane only (plane-polarised light). Two crossed Polaroids block light completely. Polarisation proves light is **transverse**. Light reflected from water and roads is partly polarised, so polarising sunglasses reduce glare; it is also used in LCD screens and stress analysis.',
  ], 'double-slit', 'For a grating, the highest order visible is the largest whole number n with n ≤ d/λ (since sin θ cannot exceed 1).',
  ['A grating has 500 lines per mm. The highest order seen with light of 600 nm is:', ['3', '2', '4', '5'], 'd = 2.0 × 10⁻⁶ m; d/λ = 3.3, so n = 3.'],
  [['Diffraction grating', 'A plate with many equally spaced parallel lines that diffracts light into sharp maxima.'], ['Plane-polarised', 'Light whose oscillations are in one plane only.'], ['Fringe spacing', 'The distance between adjacent bright fringes.']],
  [
    { q: 'In a Young’s slit experiment, the slits are 0.50 mm apart and the screen is 1.2 m away. Ten fringe spacings measure 14.4 mm. Find the wavelength.', steps: ['Fringe spacing x = 14.4 ÷ 10 = 1.44 mm = 1.44 × 10⁻³ m.', 'λ = ax/D = 0.50 × 10⁻³ × 1.44 × 10⁻³ ÷ 1.2.', 'λ = **6.0 × 10⁻⁷ m** (600 nm, orange light).'] },
  ]),

  L('ap-optics-1', 'ap-light', '6.2', 'Refraction, lenses and optical instruments', 14, ['Optics'], [
    'Light travels in straight lines (rays). **Refraction** is the change of direction when light passes between media of different optical density, because its speed changes. **Snell’s law**: n₁ sin θ₁ = n₂ sin θ₂, and the refractive index of a medium n = c/v. When light goes from a denser to a less dense medium at more than the **critical angle** c (sin c = 1/n), it is **totally internally reflected**: used in optical fibres, endoscopes, prisms in binoculars and the sparkle of diamonds.',
    'Thin **lenses** form images. A **converging (convex)** lens brings parallel rays to a real **principal focus** F; a **diverging (concave)** lens spreads them as if from a virtual focus. The lens formula (real-is-positive convention) is **1/f = 1/u + 1/v**, and the linear **magnification m = v/u** = image height/object height. The **power** of a lens is P = 1/f (dioptres, f in metres).',
    'Images by a converging lens: object beyond 2F gives a real, inverted, diminished image (camera, eye); between F and 2F, a real, inverted, magnified image (projector); inside F, a virtual, upright, magnified image (**magnifying glass**). Ray diagrams use three rays: parallel to the axis then through F; through the optical centre undeviated; through F then parallel.',
    'Optical instruments: the **eye** focuses by changing the shape of its lens (accommodation); short sight is corrected with diverging lenses and long sight with converging lenses. The **compound microscope** uses a short-focus objective and an eyepiece; the **astronomical telescope** uses a long-focus objective and short-focus eyepiece, with angular magnification f(objective)/f(eyepiece) in normal adjustment.',
  ], 'converging-lens', 'State the sign convention you use and keep to it; with real-is-positive, a virtual image has a negative v.',
  ['An object 10 cm from a converging lens of focal length 15 cm gives an image that is:', ['Virtual, upright and magnified, 30 cm from the lens on the same side', 'Real and inverted at 6 cm', 'Real at 30 cm', 'At infinity'], '1/v = 1/15 − 1/10 = −1/30, so v = −30 cm (virtual); m = 3.'],
  [['Critical angle', 'The angle of incidence in the denser medium for which the angle of refraction is 90°.'], ['Principal focus', 'The point where rays parallel to the axis meet, or appear to come from, after passing through a lens.'], ['Power of a lens', 'The reciprocal of its focal length in metres, measured in dioptres.']],
  [
    { q: 'A slide 4.0 cm tall is 12 cm from a projector lens of focal length 10 cm. Find the image distance and the image height.', steps: ['1/v = 1/f − 1/u = 1/10 − 1/12 = 1/60, so v = **60 cm** (real image on the screen).', 'm = v/u = 60 ÷ 12 = 5.', 'Image height = 5 × 4.0 = **20 cm**, inverted.'] },
  ]),

  // ---------- 7. Quantum physics ----------
  L('ap-quant-1', 'ap-quantum', '7.1', 'Photons and the photoelectric effect', 15, ['Quantum'], [
    'Light energy comes in discrete packets called **photons**. The energy of a photon is **E = hf = hc/λ**, where the **Planck constant** h = 6.63 × 10⁻³⁴ J s. The **electron-volt** (1 eV = 1.6 × 10⁻¹⁹ J) is a convenient unit: a visible photon carries about 2 to 3 eV.',
    'In the **photoelectric effect**, electrons are emitted from a metal surface when light of high enough frequency shines on it (zinc releases electrons with ultraviolet light, not visible light). Observations: (1) no electrons are emitted below a **threshold frequency f₀**, however intense the light; (2) above f₀, emission is **instantaneous**; (3) the **maximum kinetic energy** of the electrons depends on the frequency, not the intensity; (4) the **number** of electrons per second is proportional to the intensity.',
    'The wave theory cannot explain these results, but the photon theory can: each photon gives all its energy to **one** electron. **Einstein’s equation**: **hf = φ + ½mv²(max)**, where the **work function** φ is the minimum energy needed to free an electron from the surface, and **φ = hf₀**. A graph of Ek(max) against f is a straight line of gradient h, crossing the frequency axis at f₀.',
    'Ek(max) is measured by the **stopping potential** V_s: the reverse p.d. that just stops the fastest electrons, so **eV_s = ½mv²(max)**. Applications include photocells, light meters, solar cells and the photomultipliers in medical scanners.',
  ], 'photoelectric-graph', 'If the light’s intensity doubles at the same frequency, double the number of electrons, but keep the maximum kinetic energy the same.',
  ['Light of frequency 1.0 × 10¹⁵ Hz falls on a metal of work function 2.6 eV. The maximum kinetic energy of the electrons is about:', ['1.5 eV', '4.1 eV', '2.6 eV', '6.7 eV'], 'hf = 6.63 × 10⁻¹⁹ J = 4.1 eV; 4.1 − 2.6 = 1.5 eV.'],
  [['Photon', 'A packet of electromagnetic energy, E = hf.'], ['Work function', 'The minimum energy needed to remove an electron from a metal surface.'], ['Threshold frequency', 'The minimum frequency of light that releases electrons from a metal.']],
  [
    { q: 'Ultraviolet light of wavelength 250 nm shines on zinc (φ = 4.3 eV). Find the photon energy in eV, the maximum kinetic energy and the stopping potential.', steps: ['E = hc/λ = 6.63 × 10⁻³⁴ × 3.0 × 10⁸ ÷ 2.5 × 10⁻⁷ = 7.96 × 10⁻¹⁹ J = **4.97 eV**.', 'Ek(max) = 4.97 − 4.3 = **0.67 eV** (1.07 × 10⁻¹⁹ J).', 'Stopping potential = **0.67 V**.'] },
  ]),

  L('ap-quant-2', 'ap-quantum', '7.2', 'Energy levels, wave-particle duality and X-rays', 14, ['Quantum'], [
    'Electrons in atoms occupy only certain **energy levels**. When an electron falls from a higher level E₂ to a lower level E₁, it emits a photon of frequency given by **hf = E₂ − E₁**; when it absorbs a photon of exactly that energy it rises to the higher level. This explains **line emission spectra** (bright lines from hot gases, such as sodium street lamps) and **absorption spectra** (dark lines in the spectrum of the Sun, crossing its continuous spectrum). Each element has its own pattern of lines, used to identify elements in stars.',
    'Levels are often given in eV with the ionisation level at zero, so bound levels are negative: hydrogen’s ground state is −13.6 eV, so its **ionisation energy** is 13.6 eV. **Excitation** by collisions with electrons occurs in fluorescent tubes and neon signs.',
    '**Wave-particle duality**: light shows wave properties (interference, diffraction) and particle properties (photoelectric effect). De Broglie proposed that particles also have a wavelength **λ = h/p = h/(mv)**. **Electron diffraction** through thin graphite produces rings, confirming that electrons behave as waves; electron microscopes use this short wavelength to see much finer detail than light microscopes.',
    '**X-rays** are produced when fast electrons, accelerated through a high p.d. V in an X-ray tube, strike a metal target (usually tungsten): most of their energy becomes heat (so the target is cooled), and a small fraction is emitted as X-rays. The spectrum is a continuous **braking radiation** background with a **minimum wavelength** where one electron gives all its energy to one photon, **eV = hc/λ(min)**, plus sharp **characteristic lines** of the target. X-rays are used in medical imaging, CT scans and crystal structure studies.',
  ], 'hydrogen-spectrum', 'For each line in a spectrum, find the energy difference between two levels; the largest gap gives the shortest wavelength.',
  ['The de Broglie wavelength of an electron (9.1 × 10⁻³¹ kg) moving at 1.0 × 10⁶ m/s is about:', ['7.3 × 10⁻¹⁰ m', '7.3 × 10⁻⁴ m', '1.5 × 10⁻¹⁹ m', '6.6 × 10⁻³⁴ m'], 'λ = h/(mv) = 6.63 × 10⁻³⁴ ÷ 9.1 × 10⁻²⁵, about the spacing of atoms.'],
  [['Energy level', 'One of the fixed energies an electron in an atom can have.'], ['De Broglie wavelength', 'The wavelength of a moving particle, λ = h/p.'], ['Line spectrum', 'Light of only certain wavelengths, emitted or absorbed by atoms.']],
  [
    { q: 'An electron in hydrogen falls from the −1.51 eV level to the −3.40 eV level. Find the wavelength of the photon emitted.', steps: ['Energy of photon = −1.51 − (−3.40) = 1.89 eV = 1.89 × 1.6 × 10⁻¹⁹ = 3.02 × 10⁻¹⁹ J.', 'λ = hc/E = 6.63 × 10⁻³⁴ × 3.0 × 10⁸ ÷ 3.02 × 10⁻¹⁹.', 'λ = **6.6 × 10⁻⁷ m** (656 nm), the red line of the Balmer series.'] },
  ]),

  // ---------- 8. Nuclear physics ----------
  L('ap-nuc-1', 'ap-nuclear', '8.1', 'The nucleus and the law of radioactive decay', 15, ['Nuclear', 'Radioactivity'], [
    'In the **Rutherford scattering** experiment, alpha particles were fired at thin gold foil: most passed straight through, some were deflected and about 1 in 8000 bounced back. Rutherford concluded that the atom has a tiny (about 10⁻¹⁴ m), dense, **positively charged nucleus** containing most of the mass, surrounded by mostly empty space. A nucleus is written ᴬ_Z X, where Z is the proton number and A the nucleon number; nuclear radius r = r₀A^(1/3).',
    'Unstable nuclei decay **randomly** and **spontaneously**: it is impossible to predict when one nucleus will decay, but for large numbers the rate is predictable. Alpha (⁴₂He), beta-minus (an electron, with an antineutrino; a neutron becomes a proton), beta-plus (a positron, with a neutrino) and gamma emission. Light stable nuclei have N ≈ Z; heavier ones need more neutrons.',
    'The **activity** A (decays per second, becquerels) is proportional to the number of undecayed nuclei: **A = λN**, where λ is the **decay constant**. Hence **N = N₀e^(−λt)** and A = A₀e^(−λt). The **half-life** t½ is the time for half the nuclei to decay: **t½ = ln 2/λ = 0.693/λ**. Graphs of ln A against t are straight lines of gradient −λ.',
    'Background radiation (rocks, soil, the air, cosmic rays, food) must be measured and subtracted from count rates. Uses: carbon-14 dating, medical tracers (technetium-99m), cancer therapy (cobalt-60), thickness gauges in factories and smoke detectors. Safety: keep exposure time short, distance large and use shielding.',
  ], 'decay-curve', 'Convert half-life to seconds before calculating λ when the activity is in becquerels.',
  ['A sample has 8.0 × 10²⁰ nuclei and a decay constant of 2.0 × 10⁻⁹ s⁻¹. Its activity is:', ['1.6 × 10¹² Bq', '4.0 × 10²⁹ Bq', '1.6 × 10¹¹ Bq', '4.0 × 10¹¹ Bq'], 'A = λN.'],
  [['Activity', 'The number of nuclei decaying per second, in becquerels.'], ['Decay constant', 'The probability per unit time that a nucleus decays, λ.'], ['Half-life', 'The time for half the undecayed nuclei to decay.']],
  [
    { q: 'Iodine-131 has a half-life of 8.0 days. A hospital receives a sample of activity 400 MBq. Find λ and the activity after 20 days.', steps: ['λ = 0.693 ÷ (8.0 × 86 400 s) = **1.0 × 10⁻⁶ s⁻¹** (or 0.0866 per day).', 'A = A₀e^(−λt) = 400 × e^(−0.0866 × 20) = 400 × e^(−1.73).', 'A = 400 × 0.177 = **71 MBq**.'] },
  ]),

  L('ap-nuc-2', 'ap-nuclear', '8.2', 'Mass defect, binding energy, fission and fusion', 15, ['Nuclear', 'Energy'], [
    'The mass of a nucleus is always **less** than the total mass of its separate protons and neutrons. The difference is the **mass defect** Δm. By Einstein’s **E = mc²**, it corresponds to the **binding energy**: the energy needed to separate the nucleus completely into its nucleons. Masses are given in **unified atomic mass units**, u (1 u = 1.66 × 10⁻²⁷ kg), and **1 u ≡ 931 MeV**.',
    'The **binding energy per nucleon** measures stability. It rises steeply for light nuclei, peaks at about **8.8 MeV for iron-56**, and falls slowly for heavy nuclei. Any reaction that moves nuclei towards the peak **releases energy**: joining light nuclei (**fusion**) or splitting heavy ones (**fission**). The energy released equals the increase in total binding energy, or equivalently the loss of mass.',
    '**Fission**: a uranium-235 nucleus absorbs a slow (thermal) neutron, becomes unstable and splits into two medium nuclei and 2 or 3 neutrons, releasing about 200 MeV. The neutrons can cause further fissions: a **chain reaction**. In a nuclear reactor, a **moderator** (water or graphite) slows the neutrons, **control rods** (boron or cadmium) absorb neutrons to keep the reaction steady, a **coolant** carries the heat to a steam turbine, and thick concrete shields the workers. Radioactive waste must be stored safely for thousands of years.',
    '**Fusion**: light nuclei such as hydrogen isotopes join, for example ²H + ³H → ⁴He + n, releasing about 17.6 MeV. Very high temperatures (about 10⁸ K) are needed for nuclei to overcome their electrostatic repulsion, so fusion happens naturally in the **Sun and stars**, which is the origin of almost all the energy on Earth. Controlled fusion for power stations is still being developed.',
  ], 'binding-energy-curve', 'Mass defect calculations need many significant figures; keep all the digits of the masses until the final subtraction.',
  ['Why do both fission of uranium and fusion of hydrogen release energy?', ['The products have a higher binding energy per nucleon than the reactants', 'Mass is created', 'Neutrons are destroyed', 'The products are heavier'], 'Both move towards the iron-56 peak of the curve.'],
  [['Mass defect', 'The difference between the mass of the separate nucleons and the mass of the nucleus.'], ['Binding energy', 'The energy needed to separate a nucleus into its individual nucleons.'], ['Chain reaction', 'A self-sustaining series of fissions caused by the neutrons released.']],
  [
    { q: 'Find the binding energy per nucleon of helium-4. Masses: proton 1.00728 u, neutron 1.00867 u, ⁴He nucleus 4.00151 u.', steps: ['Mass of separate nucleons = 2(1.00728) + 2(1.00867) = 4.03190 u.', 'Mass defect = 4.03190 − 4.00151 = 0.03039 u.', 'Binding energy = 0.03039 × 931 = 28.3 MeV.', 'Per nucleon = 28.3 ÷ 4 = **7.1 MeV**.'] },
  ]),

  // ---------- 9. Electrons and electronics ----------
  L('ap-elect-1', 'ap-electronics', '9.1', 'The electron: thermionic emission, e/m and the oscilloscope', 14, ['Electrons'], [
    'When a metal is heated strongly, some of its free electrons gain enough energy to escape from the surface: **thermionic emission**. In an evacuated tube, the electrons from a heated cathode are accelerated to an anode through a p.d. V, gaining kinetic energy **½mv² = eV**. Beams of such electrons (**cathode rays**) travel in straight lines, carry negative charge, are deflected by electric and magnetic fields and cause fluorescence.',
    'In an **electric field** between parallel plates, an electron beam follows a parabola; in a **magnetic field** at right angles to it, a circle of radius r = mv/(Be). Combining these (J. J. Thomson’s method), the **specific charge e/m** of the electron was measured: 1.76 × 10¹¹ C/kg, about 1840 times that of the hydrogen ion.',
    '**Millikan’s oil-drop experiment** measured the charge itself. Tiny charged oil drops between horizontal plates were balanced by adjusting the p.d. so that the electric force equalled the weight: **qV/d = mg**. Every charge found was a whole-number multiple of **e = 1.6 × 10⁻¹⁹ C**, showing that charge is **quantised**. Hence the electron mass, 9.1 × 10⁻³¹ kg.',
    'The **cathode ray oscilloscope** (and its modern digital form) displays how a p.d. varies with time. Its electron beam is deflected vertically by the input signal and swept horizontally by the **time base**. It measures peak voltages (from the Y-gain, V/div), periods and frequencies (from the time base, s/div), and phase differences between two signals.',
  ], 'circuit-symbols', 'For an oscilloscope trace: peak voltage = number of divisions × V/div; period = divisions for one cycle × time/div.',
  ['On an oscilloscope set at 5 ms/div, one cycle of a wave covers 4 divisions. Its frequency is:', ['50 Hz', '20 Hz', '200 Hz', '5 Hz'], 'T = 4 × 5 ms = 20 ms; f = 1/T.'],
  [['Thermionic emission', 'The release of electrons from a heated metal surface.'], ['Specific charge', 'Charge divided by mass, e/m for the electron.'], ['Time base', 'The control that sweeps an oscilloscope beam across the screen at a set rate.']],
  [
    { q: 'An oil drop of mass 1.6 × 10⁻¹⁴ kg is held still between plates 1.0 cm apart with a p.d. of 2450 V. Find its charge and the number of electronic charges. (g = 9.8)', steps: ['qV/d = mg, so q = mgd/V = 1.6 × 10⁻¹⁴ × 9.8 × 0.010 ÷ 2450.', 'q = **6.4 × 10⁻¹⁹ C**.', 'Number of electrons = 6.4 × 10⁻¹⁹ ÷ 1.6 × 10⁻¹⁹ = **4**.'] },
  ]),

  L('ap-elect-2', 'ap-electronics', '9.2', 'Semiconductors, diodes, transistors, op-amps and logic gates', 15, ['Electronics'], [
    '**Semiconductors** such as silicon have a conductivity between conductors and insulators that rises with temperature. **Doping** adds impurities: a Group V element (phosphorus) gives **n-type** material with extra free electrons; a Group III element (boron) gives **p-type** material with **holes** (positive carriers). A **p-n junction** forms a **depletion layer** with no free carriers.',
    'A **diode** conducts when **forward biased** (p side positive, above about 0.6 V for silicon) and blocks current when **reverse biased**. Light-emitting diodes (LEDs) emit light when forward biased; **Zener diodes** break down at a fixed reverse voltage and are used as voltage regulators; photodiodes and solar cells generate current from light. Sensors: the **LDR** (resistance falls in light) and the **thermistor** (resistance falls as temperature rises).',
    'A bipolar **transistor** has a base, collector and emitter. A small base current controls a much larger collector current (current gain β = Ic/Ib, often 100 or more). As a **switch**, it turns a lamp, buzzer, relay or motor on when the base voltage passes about 0.7 V, often fed from a potential divider with a sensor: a light-activated or temperature-activated switch. As a **common-emitter amplifier**, it magnifies small signals in radios and phones. Integrated circuits contain millions of transistors.',
    'An **operational amplifier** has very high open-loop gain and very high input resistance. As a **comparator** it switches its output fully positive or negative depending on which input is larger. With negative feedback it makes an **inverting amplifier**, gain = −Rf/Rin, or a non-inverting amplifier, gain = 1 + Rf/R. **Logic gates** (NOT, AND, OR, NAND, NOR) process binary signals according to **truth tables**; NAND and NOR gates can be combined to make any other gate, the basis of computers.',
  ], 'circuit-symbols', 'For a sensor switching circuit, explain the chain: environment changes → sensor resistance changes → base voltage changes → transistor switches → output device on or off.',
  ['An inverting amplifier has Rin = 10 kΩ and Rf = 100 kΩ. An input of 0.20 V gives an output of:', ['−2.0 V', '+2.0 V', '−0.02 V', '+20 V'], 'Gain = −Rf/Rin = −10.'],
  [['Doping', 'Adding small amounts of impurity to a semiconductor to change its conductivity.'], ['Forward bias', 'Connecting a diode so that it conducts: p side positive.'], ['Truth table', 'A table giving the output of a logic gate for every combination of inputs.']],
  [
    { q: 'Write the truth table of a NOR gate and show that joining its two inputs makes a NOT gate.', steps: ['NOR = NOT(A OR B): inputs 00 → 1; 01 → 0; 10 → 0; 11 → 0.', 'Joining the inputs means A = B: input 0 gives 00 → **1**; input 1 gives 11 → **0**.', 'The output is always the opposite of the input, so it acts as a **NOT gate**.'] },
  ]),

  // ---------- 10. Options ----------
  L('ap-option-1', 'ap-applied', '10.1', 'Energy resources and environmental physics', 14, ['Options', 'Energy'], [
    'Societies need energy for homes, industry and transport. **Non-renewable** sources (coal, oil, natural gas, uranium) are finite; burning fossil fuels releases CO₂, contributing to the **greenhouse effect** and global warming, and pollutants such as SO₂ and particulates. **Renewable** sources (solar, wind, hydroelectric, biomass, geothermal, tidal) are replenished naturally.',
    '**Hydroelectric power** converts the gravitational potential energy of stored water: P = efficiency × ρgQh, where Q is the flow rate (m³/s) and h the head. Cameroon has great hydroelectric potential (Song Loulou, Edéa, Lom Pangar, Memve’ele, Nachtigal). **Wind power**: the kinetic energy of air passing through blades of area A gives **P = ½ρAv³**; doubling the wind speed gives eight times the power, but a turbine can extract at most about 59% of it.',
    '**Solar energy**: the Sun delivers about 1.4 kW/m² above the atmosphere and up to about 1 kW/m² at the ground on a clear day. Photovoltaic cells convert 15 to 22% of it into electricity; solar water heaters use black absorbers, glass covers (the greenhouse principle) and insulation. Solar is ideal for northern Cameroon and remote villages, with batteries for night-time storage.',
    'Energy efficiency is as important as new sources: insulation, efficient appliances, LED lighting, public transport and combined heat and power. **Environmental physics** also covers the **energy balance of the Earth**: incoming solar radiation, reflection (albedo), and infrared emission from the warm Earth, partly trapped by greenhouse gases.',
  ], 'em-spectrum', 'For power calculations, check the units: flow in m³/s, head in m, and P = ρgQh gives watts before efficiency.',
  ['A wind turbine gives 200 kW at a wind speed of 8 m/s. At 4 m/s it would give about:', ['25 kW', '100 kW', '50 kW', '200 kW'], 'P ∝ v³: (1/2)³ = 1/8.'],
  [['Renewable energy', 'Energy from sources that are naturally replenished.'], ['Head', 'The height through which water falls in a hydroelectric scheme.'], ['Albedo', 'The fraction of incoming radiation reflected by a surface.']],
  [
    { q: 'Water flows through a dam’s turbines at 200 m³/s falling through 40 m. If the station is 85% efficient, find its electrical output. (ρ = 1000 kg/m³, g = 9.8)', steps: ['Power of falling water = ρgQh = 1000 × 9.8 × 200 × 40 = 7.84 × 10⁷ W.', 'Electrical output = 0.85 × 7.84 × 10⁷.', '= **6.7 × 10⁷ W (67 MW)**.'] },
  ]),

  L('ap-option-2', 'ap-applied', '10.2', 'Communication and medical physics', 15, ['Options', 'Communication', 'Medical physics'], [
    '**Communication**: information is carried by a **carrier wave** that is **modulated**. In **amplitude modulation (AM)** the carrier’s amplitude follows the signal; in **frequency modulation (FM)** its frequency does, giving better quality with less noise but needing more **bandwidth**. **Digital** signals (binary pulses) can be regenerated to remove noise and can be compressed and encrypted; an analogue signal is converted by **sampling** (at least twice its highest frequency).',
    'Channels: **radio waves** (ground and sky waves reflected by the ionosphere for long distances), **microwaves** for line-of-sight links and **satellites** (geostationary satellites relay television and telephone signals), copper cables and **optical fibres**, which carry pulses of light by total internal reflection with very large bandwidth, low loss and no electrical interference. Signals weaken (attenuation, measured in decibels) and need amplifiers or repeaters. Mobile phone networks divide areas into **cells**, each with its own mast.',
    '**Medical physics**: **X-ray imaging** relies on bone absorbing X-rays more than soft tissue (absorption increases with atomic number); contrast media (barium) show soft organs, and **CT scanning** builds 3D images from many X-ray slices. **Ultrasound** (1 to 10 MHz) is reflected at boundaries between tissues of different **acoustic impedance** (Z = ρc); a coupling gel prevents reflection at the skin; it is safe for imaging babies before birth. The Doppler shift of ultrasound measures blood flow.',
    '**Nuclear medicine** uses **tracers** such as technetium-99m (gamma emitter, half-life 6 hours) detected by a gamma camera, and **radiotherapy** destroys tumours with gamma rays or high-energy X-rays aimed from several directions. **MRI** uses strong magnetic fields and radio waves to image soft tissue without ionising radiation. The dose of ionising radiation is always kept as low as possible.',
  ], 'em-spectrum', 'For ultrasound, the fraction reflected at a boundary is ((Z₂ − Z₁)/(Z₂ + Z₁))²: the bigger the impedance difference, the stronger the echo.',
  ['A signal is sampled for digital transmission. Its highest frequency is 4 kHz. The minimum sampling rate is:', ['8 kHz', '4 kHz', '2 kHz', '16 kHz'], 'At least twice the highest frequency.'],
  [['Modulation', 'Varying a carrier wave so that it carries a signal.'], ['Bandwidth', 'The range of frequencies occupied by a signal.'], ['Acoustic impedance', 'Density × speed of sound in a material; it decides how much ultrasound is reflected.']],
  [
    { q: 'An ultrasound pulse returns from a boundary inside the body 65 μs after it is sent. The speed of sound in tissue is 1540 m/s. How deep is the boundary?', steps: ['The pulse travels to the boundary and back: total distance = 1540 × 65 × 10⁻⁶ = 0.100 m.', 'Depth = half of this = **0.050 m (5.0 cm)**.'] },
  ]),
];
