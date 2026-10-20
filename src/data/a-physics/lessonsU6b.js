// A Level Physics lessons added for the 2026/2027 Upper Sixth scheme of work:
// equipotentials and field mapping, capacitor practicals, the current balance,
// inductance, LCR resonance, Kepler’s laws and comparing fields, the wave
// equation and the resonance tube, gratings, lenses, measuring the Planck
// constant, decay practicals, op-amps, optical fibres and the Upper Sixth
// revision lessons. Original text written for this app. g = 9.8 N/kg.

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

export const LESSONS_U6B = [
  // ---------- Electric fields and capacitors ----------
  L('ap-efield-2', 'ap-electric', '1.2', 'Equipotentials, field mapping and uniform fields', 15, ['Fields', 'Practical'], [
    'An **equipotential** is a line or surface joining points at the same potential. No work is done moving a charge along an equipotential, so field lines always cross equipotentials at **right angles**, and the field points from high to low potential. Around a point charge the equipotentials are concentric circles, spaced further apart as r increases, because V = Q/(4πε₀r) changes more slowly; between parallel plates they are equally spaced parallel lines.',
    'Field strength is the **potential gradient**: **E = −dV/dr**, so E is large where the equipotentials are close together. In the uniform field between plates a distance d apart with a p.d. V, **E = V/d**, which is why E can be given in V m⁻¹ as well as N C⁻¹.',
    'Practical: **mapping a field on conducting paper**. Paint two electrodes with conducting silver paint on resistive (Teledeltos) paper and connect them to a 6 V supply. With one voltmeter lead on the negative electrode, move a probe on the other lead over the paper and mark points with the same reading, every 1 V: joining them gives the equipotentials, and lines drawn at right angles to them give the field lines. Two parallel bar electrodes give a uniform field in the middle with curved fringing near the ends; a central point inside a ring gives a radial field.',
    'A charge q moved through a p.d. V gains or loses energy qV. An electron accelerated from rest through 1 V gains **1 eV = 1.6 × 10⁻¹⁹ J**; through V volts, ½mv² = eV, so v = √(2eV/m).',
  ], 'ap-equipotentials', 'Field lines cross equipotentials at right angles and point downhill in potential.',
  ['Field lines and equipotentials always meet at:', ['right angles', '45°', 'zero angle (they run parallel)', 'any angle'], 'No work is done along an equipotential.'],
  [['Equipotential', 'A line or surface joining points at the same potential.'], ['Potential gradient', 'The rate of change of potential with distance; E = −dV/dr.'], ['Electron-volt', 'The energy gained by an electron accelerated through 1 V: 1.6 × 10⁻¹⁹ J.']],
  [
    { q: 'Plates 4.0 cm apart have a p.d. of 2000 V between them. Find E and the force on an electron between them.', steps: ['E = V/d = 2000 ÷ 0.040 = **5.0 × 10⁴ V m⁻¹**.', 'F = eE = 1.6 × 10⁻¹⁹ × 5.0 × 10⁴ = **8.0 × 10⁻¹⁵ N**.'] },
    { q: 'An electron is accelerated from rest through 500 V. Find its speed (m = 9.11 × 10⁻³¹ kg).', steps: ['½mv² = eV, so v = √(2eV/m).', 'v = √(2 × 1.6 × 10⁻¹⁹ × 500 ÷ 9.11 × 10⁻³¹) = √(1.76 × 10¹⁴).', 'v = **1.3 × 10⁷ m s⁻¹**.'] },
  ]),

  L('ap-cap-2', 'ap-electric', '1.4', 'Charging and discharging in practice: measuring the time constant', 16, ['Capacitors', 'Practical'], [
    'Practical: **discharging a capacitor**. Charge a large capacitor (for example 1000 μF) from a 6 V supply, then switch it to discharge through a large resistor (for example 47 kΩ, so RC ≈ 47 s), with a voltmeter of very high resistance across it. Read V every 10 s with a stopwatch, or use a data logger. Plot V against t: an exponential decay. Then plot **ln V against t**: a straight line of gradient **−1/RC**, which gives C if R is known.',
    'Useful results: after one time constant RC the p.d. has fallen to 37% of V₀; after 0.69RC it has halved; after about 5RC the capacitor is almost completely discharged. While **charging** through R, V = V₀(1 − e^(−t/RC)) and the current I = I₀e^(−t/RC) falls as the capacitor fills; at t = RC, V has reached 63% of V₀.',
    'Capacitor networks: capacitors in parallel have the same p.d. and their charges add; in series they carry the same charge and their p.d.s add. When a charged capacitor is connected to an uncharged one, charge flows until both have the same p.d.: the total charge is conserved, but some energy is lost as heat in the connecting wires.',
    '**Dielectrics**: an insulator between the plates is polarised by the field, its molecules lining up so that their charges partly cancel the field. This reduces V for the same Q, increasing C by the relative permittivity εᵣ (air about 1, paper about 3, water about 80). A dielectric also keeps the plates apart while allowing them to be very close. Electrolytic capacitors have very thin oxide dielectrics, giving large capacitance, but must be connected the right way round.',
  ], 'ap-rc-discharge', 'For discharge, plot ln V against t: a straight line of gradient −1/RC.',
  ['A graph of ln V against t for a discharging capacitor has a gradient of:', ['−1/RC', '−RC', 'RC', '1/V₀'], 'ln V = ln V₀ − t/RC.'],
  [['Time constant', 'RC, the time for the p.d. on a discharging capacitor to fall to 37% of its starting value.'], ['Dielectric', 'An insulator between capacitor plates that increases the capacitance.'], ['Relative permittivity', 'The factor εᵣ by which a dielectric increases the capacitance compared with a vacuum.']],
  [
    { q: 'A 1000 μF capacitor discharges through 47 kΩ from 6.0 V. Find the time constant and the p.d. after 60 s.', steps: ['RC = 47 × 10³ × 1000 × 10⁻⁶ = **47 s**.', 'V = 6.0 e^(−60/47) = 6.0 × e^(−1.28).', '= 6.0 × 0.279 = **1.7 V**.'] },
    { q: 'A 20 μF capacitor charged to 100 V is connected to an uncharged 30 μF capacitor. Find the common p.d. and the energy lost.', steps: ['Charge Q = 20 × 10⁻⁶ × 100 = **2.0 × 10⁻³ C**, now shared by 50 μF: V = 2.0 × 10⁻³ ÷ 50 × 10⁻⁶ = **40 V**.', 'Energy before = ½ × 20 × 10⁻⁶ × 100² = 0.10 J; after = ½ × 50 × 10⁻⁶ × 40² = 0.040 J.', 'Energy lost = **0.060 J**, as heat in the wires.'] },
  ]),

  // ---------- Magnetic fields and induction ----------
  L('ap-mag-2', 'ap-magnetic', '2.2', 'Measuring magnetic fields: the current balance, wires and solenoids', 15, ['Magnetism', 'Practical'], [
    'Practical: **the current balance**. A horseshoe magnet stands on a top-pan balance, and a straight copper rod, clamped above it, passes between the poles at right angles to the field. When a current I flows in the rod, the magnet is pushed down (or up) by the reaction to the force on the wire, and the balance reading changes by Δm. So **BIL = Δm × g**: plotting Δm against I gives a straight line of gradient BL/g, from which B is found, where L is the length of rod in the field (about the width of the poles).',
    'Fields of currents (μ₀ = 4π × 10⁻⁷ H m⁻¹):\n- a long straight wire: **B = μ₀I/(2πr)**, in circles round the wire\n- a long solenoid with n turns per metre: **B = μ₀nI**, uniform inside\n- the centre of a flat circular coil of N turns and radius r: B = μ₀NI/(2r).\nAn iron core multiplies the field of a solenoid many times, which is why electromagnets have iron cores.',
    '**Force between parallel currents**: each wire lies in the field of the other, so two parallel wires carrying currents in the **same** direction **attract**, and in opposite directions **repel**, with a force per unit length F/L = μ₀I₁I₂/(2πr). This interaction was used to define the ampere.',
    'A **Hall probe** measures B directly: its Hall voltage is proportional to B, so after calibration in a known field it can map the field of a magnet or solenoid. Turn it until the reading is greatest: the field is then at right angles to the face of the probe.',
  ], 'ap-current-balance', 'In the current balance, the change of reading × g is the force BIL.',
  ['In the current balance, doubling the current in the rod makes the change in the balance reading:', ['double', 'four times as large', 'halve', 'stay the same'], 'F = BIL ∝ I.'],
  [['Current balance', 'An arrangement that measures the force on a current-carrying wire, here with a top-pan balance.'], ['Permeability of free space', 'μ₀ = 4π × 10⁻⁷ H m⁻¹, the constant in the formulas for magnetic fields.'], ['Hall probe', 'A semiconductor sensor whose Hall voltage is proportional to the magnetic flux density.']],
  [
    { q: 'A 5.0 cm length of rod carrying 3.0 A at right angles to a field changes a balance reading by 1.53 g. Find B.', steps: ['F = Δm g = 1.53 × 10⁻³ × 9.8 = **0.0150 N**.', 'B = F ÷ (IL) = 0.0150 ÷ (3.0 × 0.050).', '= **0.10 T**.'] },
    { q: 'Find B inside a solenoid of 500 turns, 0.25 m long, carrying 2.0 A.', steps: ['n = 500 ÷ 0.25 = **2000 turns per metre**.', 'B = μ₀nI = 4π × 10⁻⁷ × 2000 × 2.0.', '= **5.0 × 10⁻³ T**.'] },
  ]),

  L('ap-induct-2', 'ap-magnetic', '2.4', 'Lenz’s law in action, self-inductance and mutual inductance', 16, ['Induction', 'Practical'], [
    'Practical: **a magnet falling through a coil**. Connect a coil to an oscilloscope or data logger and drop a bar magnet through it. The trace shows two pulses of opposite sign: as the magnet enters, the flux linkage increases; as it leaves, it decreases. The second pulse is **taller and narrower**, because the magnet is moving faster as it leaves, but the areas under the two pulses are equal, since each is the total change of flux linkage NΔΦ.',
    'Lenz’s law in practice: a magnet falls slowly down a copper or aluminium tube, because the currents induced in the tube (**eddy currents**) produce a field that opposes its motion. Eddy currents brake some trains and lorries, damp the swing of meter needles, heat the pan in an induction cooker, and waste energy in transformers, whose cores are **laminated** (made of thin insulated sheets) to reduce them.',
    '**Self-inductance**: a changing current in a coil changes its own flux linkage and induces a **back e.m.f.** that opposes the change: **E = −L dI/dt**, where L is the self-inductance in henries. A lamp in series with a large inductor lights slowly at switch-on, and breaking the circuit suddenly can produce a large e.m.f. and a spark, which car ignition coils use. The energy stored in an inductor carrying a current I is ½LI².',
    '**Mutual inductance**: a changing current in one coil induces an e.m.f. in a nearby coil: E₂ = −M dI₁/dt, where M is the mutual inductance. Transformers, wireless phone chargers and metal detectors all depend on it; an iron core increases M by linking more of the flux.',
  ], 'ap-falling-magnet', 'Equal areas under the two pulses: the same flux change in and out.',
  ['A magnet dropped through a coil gives a second pulse that is taller than the first because:', ['the magnet is moving faster as it leaves', 'the coil warms up', 'the magnet loses its magnetism', 'Lenz’s law stops applying'], 'A faster change of flux gives a larger e.m.f.'],
  [['Eddy currents', 'Currents induced in a solid conductor by a changing magnetic flux.'], ['Self-inductance', 'The back e.m.f. in a coil per unit rate of change of its own current, in henries.'], ['Mutual inductance', 'The e.m.f. induced in one coil per unit rate of change of current in another.']],
  [
    { q: 'A coil of inductance 0.50 H carries a current that falls from 2.0 A to zero in 0.010 s. Find the average induced e.m.f.', steps: ['E = L × ΔI/Δt = 0.50 × 2.0 ÷ 0.010.', '= **100 V**, far more than the supply voltage.'] },
    { q: 'A 200-turn coil of area 4.0 × 10⁻⁴ m² is pulled out of a 0.30 T field in 0.050 s. Find the average e.m.f.', steps: ['Change of flux linkage = NBA = 200 × 0.30 × 4.0 × 10⁻⁴ = **0.024 Wb**.', 'E = 0.024 ÷ 0.050 = **0.48 V**.'] },
  ]),

  // ---------- Alternating current ----------
  L('ap-ac-3', 'ap-ac', '3.2', 'Series LCR circuits, resonance and power factor', 16, ['Alternating current', 'Practical'], [
    'In a series LCR circuit the same current flows through every component, but the p.d.s are out of phase: V(R) is in phase with I, V(L) leads I by 90° and V(C) lags I by 90°. Added as **phasors**, **V = √(V(R)² + (V(L) − V(C))²)**, and the impedance is **Z = √(R² + (X(L) − X(C))²)**, with X(L) = 2πfL and X(C) = 1/(2πfC). The phase angle φ between the supply p.d. and the current is given by tan φ = (X(L) − X(C))/R.',
    '**Resonance**: X(L) rises with frequency and X(C) falls, so at one frequency they are equal and cancel: **f₀ = 1/(2π√(LC))**. There Z = R, its smallest value, and the current is greatest and in phase with the supply. A small R gives a sharp peak. Radio tuning circuits use a variable capacitor to bring f₀ to the frequency of the wanted station; LC circuits are also used as filters.',
    '**Power**: only resistance dissipates energy; inductors and capacitors store energy and return it each cycle. The mean power is **P = V(rms) I(rms) cos φ**, where **cos φ = R/Z** is the **power factor**. Factories with many motors (inductive loads) add capacitors to bring the power factor close to 1, which reduces the current drawn for the same useful power.',
    'Practicals: on a **dual-trace oscilloscope**, display the supply p.d. and the p.d. across a resistor in series (which follows the current); the time shift Δt between the traces gives the phase difference, φ = 360° × Δt/T. To find **resonance**, connect a signal generator, an inductor, a capacitor and a resistor in series, vary the frequency, and record the p.d. across the resistor: it peaks at f₀. Plot current against frequency to draw the resonance curve.',
  ], 'ap-lcr-resonance', 'At resonance X(L) = X(C), so Z = R and the current peaks.',
  ['At resonance in a series LCR circuit:', ['X(L) = X(C) and the impedance equals R', 'the current is zero', 'X(L) is zero', 'the impedance is greatest'], 'The reactances cancel.'],
  [['Impedance', 'The total opposition of an a.c. circuit, Z = V(rms)/I(rms), in ohms.'], ['Resonant frequency', 'f₀ = 1/(2π√(LC)), where the inductive and capacitive reactances are equal.'], ['Power factor', 'cos φ = R/Z, the fraction of V(rms)I(rms) that is actually dissipated.']],
  [
    { q: 'Find the resonant frequency of an inductor of 0.10 H in series with a 1.0 μF capacitor.', steps: ['f₀ = 1/(2π√(LC)) = 1/(2π√(1.0 × 10⁻⁷)).', '= 1/(2π × 3.16 × 10⁻⁴) = **503 Hz**.'] },
    { q: 'A series circuit has R = 30 Ω, X(L) = 80 Ω and X(C) = 40 Ω, with a 50 V rms supply. Find Z, the current, the power factor and the power.', steps: ['Z = √(30² + (80 − 40)²) = √(900 + 1600) = **50 Ω**.', 'I = 50 ÷ 50 = **1.0 A**; power factor = R/Z = **0.60**.', 'P = VI cos φ = 50 × 1.0 × 0.60 = **30 W**, equal to I²R.'] },
  ]),

  // ---------- Gravitational fields ----------
  L('ap-grav-3', 'ap-gravity', '4.3', 'Kepler’s laws from data, and comparing fields', 16, ['Fields', 'Data analysis'], [
    '**Kepler’s laws** of planetary motion: (1) each planet moves in an **ellipse** with the Sun at one focus; (2) the line from the Sun to a planet sweeps out **equal areas in equal times**, so planets move fastest when nearest the Sun; (3) **T² ∝ r³**, where r is the mean orbital radius. Newton’s law of gravitation explains all three; for a circular orbit, T² = (4π²/GM) r³.',
    'Data analysis: in years (y) and astronomical units (AU; 1 AU = 1.50 × 10¹¹ m, the Earth’s orbital radius), Mercury is at 0.387 AU with T = 0.241 y; Venus 0.723 AU, 0.615 y; Earth 1.00 AU, 1.00 y; Mars 1.52 AU, 1.88 y; Jupiter 5.20 AU, 11.9 y. A graph of lg T against lg r is a straight line of gradient **1.5**; in SI units, the gradient of T² against r³ gives the mass of the Sun, M = 4π²/(G × gradient).',
    '**Comparing fields**:\n- force laws: gravitational F = Gm₁m₂/r², always attractive; electric F = Q₁Q₂/(4πε₀r²), attractive or repulsive\n- field strength: g = GM/r² and E = Q/(4πε₀r²), both inverse-square for a point source\n- potential: V = −GM/r, always negative, and V = Q/(4πε₀r), with the sign of Q; in both, the field is minus the potential gradient\n- uniform fields: near the Earth’s surface (g constant) and between parallel plates (E = V/d).\nMagnetic fields are different: the force acts only on moving charges or currents, at right angles to the field (F = Bqv), and there are no single magnetic poles.',
    'Between a proton and an electron, the electric force is about 10³⁹ times their gravitational attraction. Gravity dominates for planets and stars only because large bodies are electrically neutral overall, while their masses add up.',
  ], 'ap-kepler', 'Log-log plot of T against r: a gradient of 1.5 confirms T² ∝ r³.',
  ['If a planet’s orbital radius were 4 times the Earth’s, its period would be:', ['8 years', '4 years', '16 years', '2 years'], 'T ∝ r^1.5, and 4^1.5 = 8.'],
  [['Kepler’s third law', 'The square of the orbital period is proportional to the cube of the mean orbital radius.'], ['Astronomical unit', 'The mean distance from the Earth to the Sun, 1.50 × 10¹¹ m.']],
  [
    { q: 'The Earth orbits the Sun at 1.50 × 10¹¹ m with T = 3.16 × 10⁷ s. Find the mass of the Sun (G = 6.67 × 10⁻¹¹ N m² kg⁻²).', steps: ['M = 4π²r³ ÷ (GT²).', '= 39.5 × (1.50 × 10¹¹)³ ÷ (6.67 × 10⁻¹¹ × (3.16 × 10⁷)²).', '= 1.33 × 10³⁵ ÷ 6.66 × 10⁴ = **2.0 × 10³⁰ kg**.'] },
    { q: 'Jupiter is 5.20 AU from the Sun. Use Kepler’s third law to find its period.', steps: ['With T in years and r in AU, T² = r³.', 'T = 5.20^1.5 = √140.6 = **11.9 years**.'] },
  ]),

  // ---------- Waves ----------
  L('ap-wave-3', 'ap-waves', '5.3', 'The wave equation, phase difference and the resonance tube', 16, ['Waves', 'Practical'], [
    'A progressive wave travelling in the +x direction can be written **y = A sin(ωt − kx)**, where ω = 2πf is the angular frequency and **k = 2π/λ** is the wave number; the wave speed is v = ω/k = fλ. At a fixed point (fixed x) the medium oscillates in SHM; at a fixed instant (fixed t) the shape is a sine curve.',
    'Two points a distance Δx apart along a wave oscillate with a **phase difference Δφ = 2πΔx/λ** radians (or 360° × Δx/λ). Points a whole wavelength apart are **in phase**; points half a wavelength apart are in **antiphase** (Δφ = π). Two oscillations of the same frequency displaced in time by Δt have Δφ = 2πΔt/T.',
    'Air columns: in a tube **closed at one end**, the stationary wave has a node at the closed end and an antinode near the open end. The first resonance occurs when L₁ + e = λ/4, the second when L₂ + e = 3λ/4, where e is the **end correction** (about 0.3 × the diameter of the tube), because the antinode forms a little beyond the open end. Subtracting removes e: **λ = 2(L₂ − L₁)**, and v = fλ.',
    'Practical: **the resonance tube**. A long tube stands in a tall jar of water so that the length of its air column can be changed. Hold a sounding tuning fork over the open end and raise the tube slowly until the sound is loudest: record L₁. Raise it further to find the second, quieter resonance, L₂. Repeat with forks of different frequencies; a graph of L₁ against 1/f is a straight line of gradient v/4 and intercept −e.',
  ], 'ap-resonance-tube', 'λ = 2(L₂ − L₁): the end correction cancels.',
  ['Points half a wavelength apart on a progressive wave oscillate:', ['in antiphase', 'in phase', '90° apart', 'at different frequencies'], 'Δφ = 2π × (λ/2) ÷ λ = π.'],
  [['Wave number', 'k = 2π/λ, the phase change per metre along a wave.'], ['End correction', 'The small distance beyond the open end of a tube at which the antinode forms.'], ['Antiphase', 'A phase difference of 180°, or π radians.']],
  [
    { q: 'With a 512 Hz tuning fork, resonances occur at L₁ = 16.0 cm and L₂ = 49.5 cm. Find the speed of sound and the end correction.', steps: ['λ = 2(L₂ − L₁) = 2 × 0.335 = **0.670 m**.', 'v = fλ = 512 × 0.670 = **343 m s⁻¹**.', 'L₁ + e = λ/4 = 0.1675 m, so e = 0.1675 − 0.160 = **0.0075 m (0.75 cm)**.'] },
    { q: 'A wave is described by y = 0.020 sin(400t − 5.0x) in SI units. Find its amplitude, frequency, wavelength and speed.', steps: ['A = **0.020 m**; ω = 400 rad s⁻¹, so f = 400 ÷ 2π = **64 Hz**.', 'k = 5.0 m⁻¹, so λ = 2π ÷ 5.0 = **1.26 m**.', 'v = ω/k = 400 ÷ 5.0 = **80 m s⁻¹**.'] },
  ]),

  // ---------- Light and optics ----------
  L('ap-light-2', 'ap-light', '6.2', 'Huygens’ principle and measuring wavelength with a grating', 16, ['Light', 'Practical'], [
    '**Huygens’ principle**: every point on a wavefront acts as a source of secondary wavelets that spread out at the wave speed, and the new wavefront is the surface that touches them all. It explains reflection, refraction (the wavelets travel more slowly in the denser medium) and **diffraction**: through a narrow gap only a few wavelets pass, and they spread out into the region behind.',
    '**Double slit** in practice: shine a laser on a double slit (slit separation a, about 0.5 mm) and view the fringes on a wall a distance D of several metres away. Measure across several fringes, for example 10 fringe spacings, and divide, to reduce the percentage uncertainty: **λ = ax/D**. The fringes are equally spaced, and their brightness is shaped by the diffraction at each slit.',
    '**Diffraction grating**: light through many equally spaced slits gives very sharp, bright maxima at angles θ given by **d sin θ = nλ**, where d = 1/N is the slit spacing and n the order. The highest order is the largest whole number below d/λ. With a laser, measure the distance between the two first-order spots on a screen at a distance D: tan θ = (half that distance) ÷ D. Gratings with more lines per mm spread the orders more widely and give greater accuracy; white light gives spectra, with red diffracted most.',
    'Safety: never look into a laser beam or its reflection from a shiny surface; use a Class 2 laser (1 mW or less) and keep the beam below eye level.',
  ], 'ap-grating', 'd sin θ = nλ, with d = 1/N; find θ from tan θ = (half the spot separation) ÷ D.',
  ['A grating with 500 lines per mm gives a first-order maximum at 17.5° for a laser. The wavelength is about:', ['600 nm', '300 nm', '1200 nm', '500 nm'], 'd = 2.0 × 10⁻⁶ m; λ = d sin 17.5°.'],
  [['Huygens’ principle', 'Every point on a wavefront is a source of secondary wavelets that form the next wavefront.'], ['Grating spacing', 'The distance between neighbouring slits of a grating, d = 1/N.'], ['Order', 'The number n of a diffraction maximum, counted from the central (zero-order) beam.']],
  [
    { q: 'A laser on a grating of 300 lines per mm gives first-order spots 0.80 m apart on a screen 2.00 m away. Find λ.', steps: ['d = 1 ÷ 300 000 = **3.33 × 10⁻⁶ m**.', 'tan θ = 0.40 ÷ 2.00 = 0.200, so θ = **11.3°**.', 'λ = d sin θ = 3.33 × 10⁻⁶ × 0.196 = **6.5 × 10⁻⁷ m (650 nm)**.'] },
    { q: 'What is the highest order seen for 600 nm light with d = 2.0 × 10⁻⁶ m?', steps: ['n must be less than d/λ = 2.0 × 10⁻⁶ ÷ 6.0 × 10⁻⁷ = 3.3.', 'So the highest order is **n = 3**.'] },
  ]),

  L('ap-optics-2', 'ap-light', '6.4', 'The lens maker’s equation, aberrations and measuring focal length', 16, ['Optics', 'Practical'], [
    'The **lens maker’s equation** links the focal length of a thin lens to its shape and material: **1/f = (n − 1)(1/R₁ + 1/R₂)** for a lens with radii of curvature R₁ and R₂, each taken as positive for a convex (outward-bulging) surface. A biconvex glass lens (n = 1.5) with both radii 20 cm has 1/f = 0.5 × (1/20 + 1/20), so f = 20 cm. In water the same lens has a much longer focal length, because the refractive index of glass relative to water is only about 1.13.',
    '**Aberrations**: in **spherical aberration**, rays through the edge of a lens focus closer to it than rays near the axis, blurring the image; it is reduced by using only the central part of the lens or by specially shaped surfaces. In **chromatic aberration**, the lens refracts violet light more than red, so colours focus at different points and images have coloured fringes; it is reduced with an **achromatic doublet**, a converging lens cemented to a weaker diverging lens of a different glass.',
    'Instruments in normal adjustment: in the **astronomical telescope** the objective and eyepiece are a distance f(o) + f(e) apart and the angular magnification is **M = f(o)/f(e)**; in the **compound microscope** the objective forms a magnified real image that the eyepiece magnifies again, so the total magnification is the product of the two.',
    'Practicals for the focal length of a converging lens:\n- **u-v method**: on an optical bench, find the sharp image of an illuminated object on a screen for several object distances u; plot 1/v against 1/u: a straight line with both intercepts equal to 1/f\n- **displacement method**: with object and screen a fixed distance D apart (D more than 4f), there are two lens positions, a distance d apart, that give sharp images; then **f = (D² − d²)/(4D)**, which avoids measuring from the centre of a thick lens.',
  ], 'ap-uv-graph', 'In the u-v method, both intercepts of the 1/v against 1/u graph equal 1/f.',
  ['In the displacement method, D = 100 cm and the two lens positions are 40 cm apart. The focal length is:', ['21 cm', '25 cm', '15 cm', '40 cm'], 'f = (100² − 40²) ÷ 400.'],
  [['Spherical aberration', 'Blurring because rays far from the axis focus at a different point from rays near it.'], ['Chromatic aberration', 'Coloured fringes because a lens focuses different colours at different points.'], ['Normal adjustment', 'The final image of a telescope is at infinity, so the eye is relaxed.']],
  [
    { q: 'A biconvex lens has radii of 15 cm and 30 cm and n = 1.5. Find f.', steps: ['1/f = (1.5 − 1)(1/15 + 1/30) = 0.5 × 0.100.', '1/f = 0.0500 cm⁻¹, so f = **20 cm**.'] },
    { q: 'A telescope has an objective of focal length 90 cm and an eyepiece of 3.0 cm. Find its length and angular magnification in normal adjustment.', steps: ['Length = f(o) + f(e) = **93 cm**.', 'M = f(o)/f(e) = 90 ÷ 3.0 = **30**.'] },
  ]),

  // ---------- Quantum physics ----------
  L('ap-quant-3', 'ap-quantum', '7.3', 'Measuring the Planck constant, and electron diffraction', 16, ['Quantum', 'Practical'], [
    'From Einstein’s equation, **eV(s) = hf − φ**. Measuring the stopping potential V(s) with light of several frequencies (using filters or monochromatic sources on a photocell) and plotting V(s) against f gives a straight line: the **gradient is h/e**, the intercept on the f-axis is the **threshold frequency** f₀, and the intercept on the V-axis is −φ/e. The gradient is the same for every metal; only the intercepts change.',
    'A second method uses **LEDs**: an LED begins to glow when the p.d. across it reaches a threshold V for which eV ≈ hc/λ, the energy of each photon it emits. Measuring the threshold voltage for LEDs of several known wavelengths and plotting V against 1/λ gives a straight line of gradient hc/e.',
    '**Electron diffraction**: electrons accelerated through a p.d. V have momentum p = √(2meV), so their **de Broglie wavelength is λ = h/√(2meV)**. When they pass through a thin layer of graphite they spread into rings on a fluorescent screen, just as X-rays are diffracted by crystals: evidence that particles behave as waves. Raising V shortens λ, and the rings get smaller.',
    'Typical numbers: electrons accelerated through 5000 V have λ ≈ 1.7 × 10⁻¹¹ m, comparable with the spacing of atoms in a crystal, which is why crystals diffract them. A moving cricket ball has a de Broglie wavelength far too small ever to detect.',
  ], 'ap-planck-graph', 'Gradient of V(s) against f is h/e for every metal; the intercept depends on the metal.',
  ['On a graph of stopping potential against frequency, the gradient is:', ['h/e', 'h', 'e/h', 'φ'], 'eV(s) = hf − φ.'],
  [['Stopping potential', 'The reverse p.d. that just stops the fastest photoelectrons.'], ['Threshold frequency', 'The lowest frequency of light that releases photoelectrons from a metal.'], ['Electron diffraction', 'The spreading of an electron beam by a crystal, showing that electrons behave as waves.']],
  [
    { q: 'Stopping potentials are 0.50 V at 6.0 × 10¹⁴ Hz and 1.74 V at 9.0 × 10¹⁴ Hz. Find h and the work function.', steps: ['Gradient = (1.74 − 0.50) ÷ (3.0 × 10¹⁴) = **4.13 × 10⁻¹⁵ V s**, which equals h/e.', 'h = 4.13 × 10⁻¹⁵ × 1.60 × 10⁻¹⁹ = **6.6 × 10⁻³⁴ J s**.', 'φ = hf − eV(s) = 6.6 × 10⁻³⁴ × 6.0 × 10¹⁴ − 1.60 × 10⁻¹⁹ × 0.50 = **3.2 × 10⁻¹⁹ J, about 2.0 eV**.'] },
    { q: 'Find the de Broglie wavelength of electrons accelerated through 5000 V.', steps: ['λ = h ÷ √(2meV) = 6.63 × 10⁻³⁴ ÷ √(2 × 9.11 × 10⁻³¹ × 1.60 × 10⁻¹⁹ × 5000).', '= 6.63 × 10⁻³⁴ ÷ 3.82 × 10⁻²³ = **1.7 × 10⁻¹¹ m**.'] },
  ]),

  // ---------- Nuclear physics ----------
  L('ap-nuc-3', 'ap-nuclear', '8.3', 'Radioactive decay in practice: simulations, half-life and counting', 16, ['Nuclear', 'Practical'], [
    'Practical: **a dice model of decay**. Throw 300 dice, remove every die showing a six (it has "decayed") and record the number left; repeat many times. Each die has a 1/6 chance of decaying per throw, so the number falls exponentially, N = N₀(5/6)ⁿ after n throws, with a "half-life" of about 3.8 throws. A graph of ln N against the number of throws is a straight line. As with real nuclei, no single die can be predicted, but large numbers behave smoothly; small samples show more random scatter.',
    'Practical: **the half-life of protactinium-234m**. A protactinium generator (a sealed bottle holding a uranium salt solution under an organic liquid) is shaken so that protactinium collects in the top layer; a Geiger-Müller tube above it records the count every 10 s. After subtracting the **background count**, plot ln(count rate) against time: the gradient is −λ, and t½ = 0.693/λ, about 70 s. The bottle is handled with tongs, kept in a tray and returned to its store straight after use.',
    'Counting is random: a count N has an uncertainty of about √N, so counting for longer gives a larger N and a smaller percentage uncertainty. Always measure the background count rate (from rocks, building materials, radon gas and cosmic rays) for several minutes and subtract it.',
    'Calculations: number of nuclei N = (mass ÷ molar mass) × N_A; activity A = λN; λ = 0.693/t½. **Carbon-14 dating** uses the decay of ¹⁴C (t½ = 5730 years) in once-living material: comparing its activity with that of living material gives the age through A = A₀e^(−λt).',
  ], 'ap-ln-decay', 'Subtract the background first; then ln(count rate) against t has gradient −λ.',
  ['On a graph of ln(count rate) against time, the gradient is:', ['−λ, minus the decay constant', 'the half-life', '−t½', 'the background count'], 'ln A = ln A₀ − λt.'],
  [['Background radiation', 'Radiation that is always present from natural and artificial sources, measured and subtracted.'], ['Decay constant', 'The probability per second that a nucleus decays; λ = 0.693/t½.'], ['Random', 'Unpredictable for a single nucleus, though predictable on average for large numbers.']],
  [
    { q: 'Find the activity of 1.0 μg of iodine-131 (t½ = 8.0 days, molar mass 131 g mol⁻¹).', steps: ['N = (1.0 × 10⁻⁶ ÷ 131) × 6.02 × 10²³ = **4.6 × 10¹⁵ nuclei**.', 'λ = 0.693 ÷ (8.0 × 24 × 3600) = **1.0 × 10⁻⁶ s⁻¹**.', 'A = λN = **4.6 × 10⁹ Bq**.'] },
    { q: 'Wood from an old fire has a carbon-14 activity 25% of that of living wood. How old is it?', steps: ['25% = (½)², so two half-lives have passed.', 'Age = 2 × 5730 = **11 460 years**.'] },
  ]),

  // ---------- Options ----------
  L('ap-elect-3', 'ap-electronics', '9.3', 'Option: operational amplifier circuits and logic control', 16, ['Electronics', 'Option', 'Practical'], [
    'An ideal **operational amplifier** has infinite open-loop gain and infinite input resistance, so no current flows into its inputs. Its output can never go beyond the supply voltages (typically ±9 V or ±15 V): if it tries to, it **saturates**. With **negative feedback**, part of the output is fed back to the inverting input, which reduces and stabilises the gain and widens the range of frequencies amplified.',
    '**Inverting amplifier**: the input resistor R(in) goes to the inverting input, a feedback resistor R(f) runs from the output back to it, and the non-inverting input is earthed. Because the gain is so high, the inverting input stays at almost 0 V, a **virtual earth**, so the current through R(in) equals the current through R(f): **V(out)/V(in) = −R(f)/R(in)**.\n**Non-inverting amplifier**: the input goes to the non-inverting input and a potential divider (R(f) and R₁) feeds back from the output: **V(out)/V(in) = 1 + R(f)/R₁**, with a very high input resistance. With R(f) = 0 it becomes a **voltage follower** (gain 1), used as a buffer.',
    'Practical: build each amplifier on a breadboard with a dual supply, feed in a small sine wave from a signal generator, and display input and output on a dual-trace oscilloscope. Measure the gain for several values of R(f), check that the inverting amplifier’s output is in antiphase with its input, and increase the input until the output **clips** at the supply limits.',
    '**Logic control**: sensors (an LDR or a thermistor in a potential divider) feed a comparator or logic gates, whose output drives a transistor, a relay or a motor. For example, a greenhouse heater that should run only when it is cold AND dark takes both sensor signals into an AND gate. Truth tables list the output for every combination of inputs; a NAND gate with its inputs joined acts as a NOT gate.',
  ], 'ap-opamp', 'Inverting gain −R(f)/R(in); non-inverting gain 1 + R(f)/R₁; never beyond the supply.',
  ['An inverting amplifier has R(in) = 10 kΩ and R(f) = 100 kΩ. Its voltage gain is:', ['−10', '+10', '−0.1', '+11'], '−R(f)/R(in).'],
  [['Negative feedback', 'Feeding part of the output back to the inverting input to reduce and stabilise the gain.'], ['Virtual earth', 'The inverting input of an op-amp with negative feedback, held at almost 0 V.'], ['Saturation', 'The output reaching its limit, close to the supply voltage.']],
  [
    { q: 'A non-inverting amplifier has R(f) = 47 kΩ and R₁ = 4.7 kΩ, with ±12 V supplies. Find the output for inputs of 0.50 V and 1.5 V.', steps: ['Gain = 1 + 47 ÷ 4.7 = **11**.', '0.50 V × 11 = **5.5 V**.', '1.5 V × 11 = 16.5 V, beyond the supply, so the output **saturates at about +12 V**.'] },
    { q: 'Design the logic for an alarm that sounds when a door is open (A = 1) or a window is open (B = 1), but only when the system is armed (C = 1).', steps: ['A and B go into an **OR** gate.', 'Its output and C go into an **AND** gate: alarm = (A OR B) AND C.'] },
  ]),

  L('ap-option-3', 'ap-applied', '10.3', 'Option: optical fibres, attenuation and decibels', 15, ['Communication', 'Option', 'Practical'], [
    'An **optical fibre** has a glass **core** surrounded by **cladding** of slightly lower refractive index. Light entering the end within the acceptance angle meets the core-cladding boundary at more than the critical angle (sin c = n(cladding)/n(core)) and is **totally internally reflected** along the fibre. The cladding protects the core surface and keeps the light in, even where fibres touch.',
    'Limits on fibres: **multipath (modal) dispersion**: rays taking zigzag paths travel further than rays along the axis, so short pulses spread out and may overlap; very thin **monomode** fibres reduce it. **Material dispersion**: different wavelengths travel at different speeds; monochromatic laser light reduces it. Fibres carry very large bandwidths, are immune to electrical interference, are hard to tap and are light; undersea fibre cables link Cameroon to the international network.',
    '**Attenuation** is the loss of signal power along a channel, measured in **decibels**: **attenuation = 10 lg(P₁/P₂) dB**. A loss of 3 dB halves the power, 10 dB divides it by 10 and 20 dB by 100. Good fibres lose only about 0.2 dB per km at the best infrared wavelengths, much less than copper cables, so the **repeaters** that amplify and regenerate the signal can be spaced much further apart. The signal-to-noise ratio is also given in decibels: 10 lg(P(signal)/P(noise)).',
    'Practical: send a steady LED or laser signal into fibres of different lengths (or a long fibre looped several times) and measure the received power with a photodiode and meter; plot the attenuation in dB against length: a straight line whose gradient is the attenuation per kilometre.',
  ], 'ap-optical-fibre', 'Every 10 dB of loss divides the power by 10.',
  ['A signal of 10 mW falls to 1.0 mW along a cable. The attenuation is:', ['10 dB', '1 dB', '9 dB', '100 dB'], '10 lg(10 ÷ 1.0).'],
  [['Cladding', 'The glass layer of lower refractive index around the core of an optical fibre.'], ['Decibel', 'A logarithmic unit of power ratio: 10 lg(P₁/P₂).'], ['Repeater', 'A device that amplifies and regenerates a signal along a long link.']],
  [
    { q: 'The core of a fibre has n = 1.50 and the cladding n = 1.48. Find the critical angle at the boundary.', steps: ['sin c = 1.48 ÷ 1.50 = 0.987.', 'c = **80.6°**: rays must strike the boundary almost along it.'] },
    { q: 'A 50 km fibre loses 0.20 dB per km. If 2.0 mW enters, what power comes out?', steps: ['Total loss = 50 × 0.20 = **10 dB**.', '10 dB is a factor of 10, so the output is **0.20 mW**.'] },
  ]),

  // ---------- Upper Sixth revision ----------
  L('ap-u6-paper1', 'ap-u6-papers', '11.1', 'Paper 1 drills: fields, capacitors, waves and nuclear physics', 13, ['Examination'], [
    'Paper 1 (multiple choice, 1½ hours) covers both years. Upper Sixth items often test field equations, capacitor networks, induction, a.c., waves and optics, quantum and nuclear physics. Work the answer out before reading the options, then check that the option you choose has the right units.',
    'Quick checks:\n- inverse-square fields: doubling r quarters the field strength but only halves the potential\n- capacitors: a series combination is smaller than the smallest; parallel capacitances add\n- time constants: after RC, 37% remains; after 0.69RC, 50%\n- induction: e.m.f. = rate of change of flux linkage, so doubling the speed doubles the e.m.f.\n- a.c.: V(peak) = √2 × V(rms); X(L) rises and X(C) falls with frequency\n- decay: after n half-lives, (½)ⁿ remains.',
    'Graph items: identify gradients and areas (the area under an I-t graph is charge, under an F-x graph is work, under a g-r graph is a potential difference) and recognise exponential curves and their straight-line log plots.',
    'Practise in timed sets of 10 items in about 20 minutes, mixing Lower and Upper Sixth topics as the real paper does.',
  ], 'ap-gce-0780', 'Inverse-square for field strength, inverse for potential.',
  ['Doubling the distance from a point charge changes the electric potential by a factor of:', ['½', '¼', '2', '4'], 'V ∝ 1/r.'],
  [['Inverse-square law', 'A quantity that falls as 1/r², such as the field strength of a point mass or charge.']],
  [
    { q: 'Item: three 6 μF capacitors are joined in series. The combined capacitance is: A 18 μF, B 6 μF, C 2 μF, D 0.5 μF.', steps: ['1/C = 1/6 + 1/6 + 1/6 = 1/2, so C = 2 μF.', '**Answer C.**'] },
  ]),

  L('ap-u6-paper2', 'ap-u6-papers', '11.2', 'Paper 2 drills: derivations, fields and waves', 15, ['Examination'], [
    'Derivations often asked in Upper Sixth: v = √(GM/r) and T² = (4π²/GM)r³ for orbits; the escape velocity √(2GM/R); E = V/d between parallel plates; r = mv/(Bq) for a charge in a magnetic field; ½CV² from the area under a Q-V graph; Q = Q₀e^(−t/RC); E = BANω sin ωt for a generator; I(rms) = I₀/√2; λ = ax/D; d sin θ = nλ; t½ = ln 2/λ. Write each one with every step justified.',
    'Field questions: give the definition (field strength is force per unit mass or charge; potential is the work done per unit mass or charge in bringing it from infinity), then the equation with its symbols defined, then the calculation. Sketch field lines and equipotentials neatly and at right angles.',
    'Wave and optics questions: draw the arrangement, label the distances and state the condition (path difference nλ for constructive interference, (n + ½)λ for destructive). Keep wavelengths in one unit throughout.',
    'Option questions (two chosen from four, each out of 15): answer the options your school taught, with definitions, labelled diagrams and a worked calculation wherever one is asked for.',
  ], 'ap-fields-compared', 'Definition, equation with symbols, then the numbers.',
  ['Gravitational potential is defined as the work done per unit mass in bringing a small mass:', ['from infinity to the point', 'from the point to infinity', 'from the Earth’s surface to the point', 'round a closed path'], 'Which is why it is negative.'],
  [['Derivation', 'A step-by-step argument from definitions and laws to a result.']],
  [
    { q: 'Derive an expression for the radius of the path of a charge q of mass m moving at speed v at right angles to a magnetic field B.', steps: ['The magnetic force is perpendicular to v, so it provides the centripetal force: **Bqv = mv²/r**.', 'Cancelling one v: **r = mv/(Bq)**.', 'A faster or heavier particle moves in a larger circle; a stronger field gives a smaller one.'] },
  ]),

  L('ap-u6-practical', 'ap-u6-papers', '11.3', 'Paper 3: the practical examination', 15, ['Examination', 'Practical'], [
    'Paper 3 tests practical skills under time pressure: setting up apparatus from instructions, taking readings, recording them in tables, plotting graphs, finding gradients and intercepts, estimating uncertainties and drawing conclusions. In 2026 the A Level Physics practical ran from 21 to 23 May.',
    'Standard experiments to practise: the simple pendulum (g), the mass-spring system (k), the Young modulus of a wire, specific heat capacity by the electrical method, Boyle’s law, the discharge of a capacitor (RC), the potentiometer or metre bridge, the current balance (B), the resonance tube (speed of sound), the diffraction grating (λ), lenses (u-v or displacement method), and the stopping potential or LED method (h).',
    'Recording results: each column heading gives the quantity and its unit, for example "t / s"; raw readings are recorded to the precision of the instrument (a metre rule to the nearest mm; a stopwatch to 0.01 s, though reaction time limits its real precision); derived quantities are given to the same number of significant figures as the raw data, or one more.',
    'Evaluating: identify the largest source of uncertainty and suggest a specific improvement ("time 20 oscillations instead of 5", "use a light gate and data logger", "repeat and take the mean"). Say whether the results support the expected relationship, judging from the straightness of the graph and whether it passes through the origin within the uncertainties.',
  ], 'ap-best-fit', 'Every column heading: quantity / unit.',
  ['A correctly written column heading in a results table is:', ['t / s', 'time', 's', 'seconds (t)'], 'Quantity, then a stroke, then the unit.'],
  [['Precision', 'How fine the scale of a reading is, and how close repeated readings are to each other.'], ['Systematic error', 'An error that shifts every reading by the same amount, such as a zero error.']],
  [
    { q: 'A student times one oscillation of a pendulum (about 1.5 s) with a stopwatch. Suggest an improvement and explain it.', steps: ['Reaction time (about 0.2 s) is a large fraction of one period: an uncertainty of about **13%**.', 'Time **20 oscillations** (about 30 s) and divide by 20: the uncertainty falls to about **0.7%**.', 'Use a fixed marker at the centre of the swing, and repeat the timing.'] },
  ]),
];
