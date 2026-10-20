// Extra questions for the end of A Level Physics lessons, so that every lesson
// ends with at least five questions on what it teaches (see src/lib/lessonQuiz.js).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'ap-circ-1': [
    Q('An angle of π radians is equal to:', ['180°', '90°', '360°', '57°'], '2π rad = 360°.'),
    Q('Water stays in a bucket swung in a vertical circle at the top of the circle only if:', ['v² ≥ rg', 'v² < rg', 'v = 0', 'The bucket is swung slowly'], 'At the top, gravity alone must not exceed the centripetal force needed.'),
  ],
  'ap-elec-2': [
    Q('Maximum power is delivered to an external load when its resistance:', ['Equals the internal resistance of the source', 'Is zero', 'Is very large', 'Is twice the internal resistance'], 'The efficiency is then only 50%.'),
    Q('On a graph of terminal p.d. V against current I for a cell, the gradient is:', ['−r, minus the internal resistance', 'The e.m.f.', 'The current', 'Zero'], 'V = E − Ir; the intercept is E.'),
  ],
  'ap-elec-3': [
    Q('An LDR is used in a street-light circuit because its resistance:', ['Changes with light intensity', 'Is always zero', 'Depends only on temperature', 'Never changes'], 'In the dark its resistance rises, changing the output of the potential divider.'),
    Q('In a metre bridge with R = 10 Ω, balance is found at l = 40.0 cm. Using X/R = l/(100 − l), X is:', ['6.7 Ω', '15 Ω', '4.0 Ω', '25 Ω'], 'X = 10 × 40 ÷ 60 = 6.7 Ω.'),
  ],
  'ap-matter-2': [
    Q('In a narrow glass capillary tube, mercury:', ['Is depressed below the outside level', 'Rises higher than water', 'Rises to the top', 'Behaves exactly like water'], 'Its cohesion is greater than its adhesion to glass.'),
    Q('Capillary rise is larger in:', ['Narrower tubes', 'Wider tubes', 'Tubes full of air', 'Tubes with detergent added'], 'h = 2γ cos θ/(ρgr): h is inversely proportional to r.'),
  ],
  'ap-gas-2': [
    Q('The internal energy of an ideal gas depends only on its:', ['Temperature', 'Volume', 'Pressure', 'Container'], 'There are no forces between its molecules.'),
    Q('In an isothermal change of an ideal gas, ΔU is:', ['Zero', 'Equal to the heat supplied', 'Always negative', 'Equal to pV'], 'The temperature does not change.'),
  ],
  'ap-ac-2': [
    Q('A conducting silicon diode drops about:', ['0.7 V', '7 V', '0.07 V', '1.4 V'], 'A bridge, with two diodes conducting, loses about 1.4 V.'),
    Q('The variation left in the output after smoothing is called the:', ['Ripple', 'Peak', 'Bias', 'Time constant'], 'A larger RC gives a smaller ripple.'),
  ],
  'ap-option-1': [
    Q('Doubling the wind speed increases the power available from the wind by a factor of:', ['8', '2', '4', '16'], 'P = ½ρAv³, so 2³ = 8.'),
    Q('Which of these is a renewable energy source?', ['Geothermal energy', 'Uranium', 'Natural gas', 'Coal'], 'Renewable sources are replenished naturally.'),
  ],
  // ---------- Lower Sixth, 2026/2027 scheme additions ----------
  'ap-measure-3': [
    Q('The magnitude of the vector 6i + 8j is:', ['10', '14', '48', '2'], '√(36 + 64).'),
    Q('The scalar product of two perpendicular vectors is:', ['zero', 'the product of their magnitudes', 'a vector', 'negative'], 'cos 90° = 0.'),
    Q('i × j equals:', ['k', '−k', '0', 'i'], 'By the right-hand rule.'),
    Q('The cross product of two parallel vectors is:', ['zero', 'the product of their magnitudes', 'a unit vector', 'infinite'], 'sin 0° = 0.'),
  ],
  'ap-measure-4': [
    Q('A vernier caliper usually reads to:', ['0.1 mm', '1 mm', '0.01 mm', '1 cm'], 'A micrometer reads to 0.01 mm.'),
    Q('A zero error is corrected by:', ['subtracting the zero reading from every reading', 'adding 1 mm to each reading', 'ignoring it', 'repeating the reading'], 'A negative zero error is added.'),
    Q('To find n in y = kxⁿ, plot:', ['lg y against lg x', 'y against x', 'y against 1/x', 'y² against x'], 'The gradient is n.'),
    Q('The uncertainty in a gradient is estimated from:', ['the worst acceptable line through the error bars', 'the first point', 'the largest reading', 'the intercept only'], 'Compare it with the best line.'),
  ],
  'ap-kin-3': [
    Q('The area under a velocity-time graph gives:', ['the displacement', 'the acceleration', 'the force', 'the speed'], 's = ∫v dt.'),
    Q('If v = 3t² (v in m s⁻¹, t in s), the acceleration at t = 2 s is:', ['12 m s⁻²', '6 m s⁻²', '3 m s⁻²', '24 m s⁻²'], 'a = 6t.'),
    Q('With light gates, g is found from:', ['(v² − u²) ÷ 2h', 'h ÷ t', 'v × t', 'u ÷ h'], 'From v² = u² + 2gh.'),
    Q('On level ground, the range of a projectile is greatest at a launch angle of:', ['45°', '30°', '60°', '90°'], 'R = u² sin 2θ / g.'),
  ],
  'ap-dyn-3': [
    Q('An air track is used in collision experiments to:', ['make friction negligible', 'increase friction', 'measure mass', 'stop the gliders'], 'The gliders float on air.'),
    Q('In a perfectly inelastic collision, the coefficient of restitution is:', ['0', '1', '0.5', '−1'], 'The bodies move off together.'),
    Q('In an elastic glancing collision between identical balls, one at rest, they move off at:', ['90° to each other', '45° to each other', '180° to each other', 'the same angle'], 'Momentum and kinetic energy are both conserved.'),
    Q('In every collision on the air track, what is conserved (within error)?', ['the total momentum', 'the total kinetic energy', 'the speed of each glider', 'nothing'], 'No external force acts along the track.'),
  ],
  'ap-stat-2': [
    Q('Three forces in equilibrium, drawn head to tail, form:', ['a closed triangle', 'a straight line', 'an open polygon', 'a circle'], 'Their resultant is zero.'),
    Q('Dragging a block at steady speed with a force of 6.0 N when its weight is 20 N gives μ =', ['0.30', '3.3', '0.60', '120'], 'μ = F ÷ R.'),
    Q('The centre of gravity of a flat sheet is found by:', ['hanging it from two points and marking the verticals', 'weighing it', 'measuring its area', 'cutting it in half'], 'The plumb lines cross at the centre of gravity.'),
    Q('Friction in the pulleys of a force table makes the measured forces:', ['not quite balance', 'perfectly balance', 'larger by a factor of 2', 'zero'], 'Tapping the table helps.'),
  ],
  'ap-work-2': [
    Q('The work done by a varying force equals:', ['the area under the force-displacement graph', 'the gradient of the graph', 'force × time', 'zero'], 'W = ∫F dx.'),
    Q('A 60 kg student climbs 4.0 m in 6.0 s. The power is about:', ['390 W', '40 W', '2400 W', '240 W'], '60 × 9.8 × 4.0 ÷ 6.0.'),
    Q('A car moving at 20 m s⁻¹ against a resistive force of 600 N needs a power of:', ['12 kW', '30 W', '600 W', '3.3 kW'], 'P = Fv.'),
    Q('Human muscles are only about 25% efficient, so most of the food energy used:', ['heats the body', 'becomes potential energy', 'is stored as work', 'disappears'], 'Energy is conserved.'),
  ],
  'ap-circ-2': [
    Q('A train on a banked curve travels faster than the design speed. The extra centripetal force comes from:', ['the outer rail pushing on the wheel flanges', 'gravity', 'the inner rail only', 'nothing'], 'Above the design speed, a sideways force is needed.'),
    Q('The period of a conical pendulum of length L with its string at angle θ to the vertical is:', ['2π√(L cos θ / g)', '2π√(L/g)', '2π√(g/L)', 'L cos θ'], 'ω² = g/(L cos θ).'),
    Q('In the whirling-bung experiment, a graph of T² against L (fixed M) is:', ['a straight line through the origin', 'a curve', 'a horizontal line', 'a vertical line'], 'T² = 4π²mL ÷ Mg.'),
    Q('Eye protection is worn in the whirling-bung experiment because:', ['the bung could fly off if the string breaks', 'the glass tube is hot', 'the bung is radioactive', 'light is bright'], 'Whirl it above head height.'),
  ],
  'ap-shm-2': [
    Q('In SHM, the kinetic and potential energies are equal when x equals:', ['A/√2', 'A/2', 'A', '0'], '½mω²(A² − x²) = ½mω²x².'),
    Q('Timing 20 oscillations instead of 1 reduces:', ['the percentage uncertainty in the period', 'the period', 'the amplitude', 'g'], 'The reaction-time error is shared out.'),
    Q('The total energy of an oscillator is proportional to:', ['the square of the amplitude', 'the amplitude', 'the period', 'the mass only'], 'E = ½mω²A².'),
    Q('An MRI scanner makes use of:', ['resonance', 'damping only', 'friction', 'refraction'], 'Nuclear magnetic resonance.'),
  ],
  'ap-therm-3': [
    Q('The steam point must be corrected if:', ['the atmospheric pressure is not 101.3 kPa', 'the water is pure', 'the thermometer is new', 'the room is cold'], 'Boiling point depends on pressure.'),
    Q('A constant-volume gas thermometer uses as its thermometric property:', ['the pressure of the gas', 'the length of a column', 'electrical resistance', 'colour'], 'p ∝ T at constant volume.'),
    Q('On a scale defined by a resistance thermometer, 50 °C may not equal 50 °C on a gas thermometer because:', ['resistance does not vary exactly linearly with thermodynamic temperature', 'gas thermometers are inaccurate', 'resistance is constant', 'the fixed points differ'], 'Only the fixed points must agree.'),
    Q('When two bodies are in thermal equilibrium:', ['no net heat flows between them', 'they have the same mass', 'they have the same internal energy', 'heat flows from the larger to the smaller'], 'They are at the same temperature.'),
  ],
  'ap-therm-4': [
    Q('In the electrical method, the energy supplied by the heater is:', ['VIt', 'VI ÷ t', 'V ÷ I', 'IRt'], 'Power × time.'),
    Q('Starting a few degrees below room temperature and finishing the same amount above it:', ['makes heat gained and lost to the room roughly cancel', 'increases heat loss', 'is unsafe', 'changes c'], 'A simple heat-loss correction.'),
    Q('In the method of mixtures, the main equation is:', ['heat lost by the hot body = heat gained by the cold body', 'heat lost = 0', 'temperature lost = temperature gained', 'mass lost = mass gained'], 'Conservation of energy.'),
    Q('Using two heater powers to find the latent heat of vaporisation removes:', ['the unknown heat-loss term', 'the need for a balance', 'the latent heat', 'the boiling'], 'The losses are the same in both runs.'),
  ],
  'ap-therm-5': [
    Q('Copper conducts heat much better than iron because it has:', ['more free electrons that carry energy', 'heavier atoms', 'a lower density', 'no lattice'], 'k for copper is about 390 W m⁻¹ K⁻¹.'),
    Q('The unit of thermal conductivity is:', ['W m⁻¹ K⁻¹', 'J kg⁻¹ K⁻¹', 'W m⁻²', 'K W⁻¹'], 'From Q/t = kAΔθ/x.'),
    Q('The sea breeze blows from the sea to the land during the day because:', ['the land heats faster, so warm air rises over it and cooler sea air moves in', 'the sea is warmer by day', 'the Earth rotates', 'the tide comes in'], 'Convection.'),
    Q('The Stefan-Boltzmann constant has the value:', ['5.67 × 10⁻⁸ W m⁻² K⁻⁴', '6.67 × 10⁻¹¹ N m² kg⁻²', '1.38 × 10⁻²³ J K⁻¹', '8.31 J mol⁻¹ K⁻¹'], 'P = σAT⁴.'),
  ],
  'ap-matter-3': [
    Q('In Searle’s apparatus, the reference wire cancels:', ['sagging of the support and temperature changes', 'the load', 'the extension', 'the Young modulus'], 'Both wires are affected equally.'),
    Q('The largest percentage uncertainty in a Young modulus experiment usually comes from:', ['the diameter of the wire', 'the length of the wire', 'the load', 'the value of g'], 'And it counts twice through d².'),
    Q('The energy stored per unit volume of a stretched wire is:', ['½ × stress × strain', 'stress × strain', 'stress ÷ strain', '½ × force × length'], 'In the elastic region.'),
    Q('The area of a hysteresis loop for rubber represents:', ['the energy converted to heat per cycle', 'the Young modulus', 'the elastic limit', 'the stiffness'], 'Tyres warm up as they flex.'),
  ],
  'ap-fluid-1': [
    Q('A floating body displaces:', ['its own weight of fluid', 'its own volume of fluid', 'no fluid', 'twice its weight of fluid'], 'Upthrust = weight.'),
    Q('An irregular stone’s volume can be found with:', ['a displacement (eureka) can', 'a metre rule', 'a micrometer', 'a thermometer'], 'It displaces its own volume of water.'),
    Q('Submarines dive by:', ['taking water into tanks to increase their average density', 'heating the water', 'reducing their volume to zero', 'switching off gravity'], 'They blow the tanks out with air to rise.'),
    Q('The upthrust on an immersed body increases if the fluid is:', ['denser', 'less dense', 'colder only', 'shallower'], 'U = ρVg.'),
  ],
  'ap-fluid-2': [
    Q('In streamline flow:', ['the particles follow smooth paths that do not cross', 'eddies form', 'the fluid stops', 'the speed is zero'], 'Steady flow.'),
    Q('Water speeds up where a pipe narrows because:', ['the volume flowing per second must stay the same', 'it gets hotter', 'its density increases', 'gravity pulls it'], 'A₁v₁ = A₂v₂.'),
    Q('In the viscosity experiment, the timing marks are set well below the surface so that:', ['the ball has already reached terminal velocity', 'the ball is easy to see', 'the glycerine is warmer', 'the ball speeds up between them'], 'v must be constant.'),
    Q('Stokes’ drag on a sphere doubles if:', ['its speed doubles', 'its radius halves', 'the viscosity halves', 'its density doubles'], 'F = 6πηrv.'),
  ],
  'ap-gas-3': [
    Q('In the Boyle’s law experiment, you wait after each change of pressure so that:', ['the temperature of the air returns to room temperature', 'the oil evaporates', 'the volume doubles', 'the gauge resets'], 'Boyle’s law needs constant temperature.'),
    Q('In the capillary-tube experiment, the length of the air column is used because it is:', ['proportional to the volume of the trapped air', 'equal to the pressure', 'equal to the temperature', 'constant'], 'The tube has a uniform bore.'),
    Q('For an adiabatic change, pVᵞ is constant with γ for air of about:', ['1.4', '1.0', '5/3 exactly', '2.0'], 'γ = 5/3 for a monatomic gas.'),
    Q('A bicycle pump warms when the air is compressed rapidly because:', ['work is done on the air with little time for heat to escape', 'friction only', 'the air is burning', 'heat flows in from the hand'], 'A nearly adiabatic compression.'),
  ],
  'ap-l6-paper1': [
    Q('Paper 3 of A Level Physics is:', ['the practical examination', 'a second multiple-choice paper', 'an oral test', 'an essay paper'], 'Planning, measuring and analysing.'),
    Q('An option in a calculation item can be ruled out at once if:', ['its units or dimensions are wrong', 'it is the largest', 'it is the smallest', 'it contains π'], 'Check dimensions first.'),
    Q('When quantities are multiplied, their uncertainties are combined by:', ['adding the percentage uncertainties', 'adding the absolute uncertainties', 'multiplying them', 'taking the largest'], 'For sums, add absolute uncertainties.'),
    Q('About how long should each Paper 1 item take?', ['about 2 minutes', 'about 10 minutes', 'about 20 seconds', 'about 30 minutes'], 'Practise in timed sets.'),
  ],
  'ap-l6-paper2': [
    Q('A definition of a quantity should:', ['be exact, stating what is divided by what', 'give an example only', 'state the unit only', 'be as short as possible'], 'Learn definitions word for word.'),
    Q('In a ballistic-pendulum question, momentum is used first because:', ['kinetic energy is lost in the inelastic impact', 'energy is not conserved anywhere', 'momentum is a scalar', 'the block is at rest'], 'Then energy is used for the swing.'),
    Q('Values should be rounded:', ['only at the end of a calculation', 'at every step', 'never', 'to one significant figure'], 'Rounding early adds errors.'),
    Q('Hooke’s law must be stated with the condition:', ['up to the limit of proportionality', 'at constant temperature', 'for gases only', 'at the elastic limit only'], 'F = kx holds only in that region.'),
  ],
};
