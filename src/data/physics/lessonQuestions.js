// Extra questions for the end of Physics lessons, so that every lesson ends with
// at least five questions on what it teaches (see src/lib/lessonQuiz.js).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'ph-labsafety-1': [
    Q('Broken glass on the bench should be picked up with:', ['A brush and pan', 'Your fingers', 'A wet cloth only', 'A magnet'], 'Glass cuts the skin easily.'),
    Q('Which instrument is used to measure angles?', ['A protractor', 'A balance', 'A stopwatch', 'A measuring cylinder'], 'A balance measures mass and a stopwatch time.'),
  ],
  'ph-measuring-1': [
    Q('How many seconds are there in one hour?', ['3600', '60', '360', '6000'], '60 minutes × 60 seconds = 3600 s.'),
    Q('To time one swing of a pendulum accurately, you should:', ['Time many swings and divide by the number of swings', 'Time half a swing', 'Guess the time', 'Time it with a calendar'], 'Timing many swings makes the reaction-time error small.'),
  ],
  'ph-services-1': [
    Q('The mains voltage shown on appliances in Cameroon is:', ['220 V', '12 V', '1.5 V', '2000 V'], 'A torch cell is 1.5 V; a car battery 12 V.'),
    Q('A gas bottle should be kept:', ['Upright, away from flames, in a ventilated place', 'Lying down near the fire', 'In a closed cupboard', 'In direct sunlight'], 'This reduces the risk of leaks and explosions.'),
  ],
  'ph-energyuse-1': [
    Q('An LED lamp is better than an ordinary filament lamp because it:', ['Wastes less energy as heat', 'Gives out more heat', 'Uses more electricity', 'Is always brighter in daylight'], 'It gives the same light for less electricity.'),
    Q('One watt is equal to:', ['One joule per second', 'One volt per second', 'One newton per metre', 'One joule per hour'], 'Power is the rate of using energy.'),
  ],
  'ph-bodytemp-1': [
    Q('A body temperature of 39 °C is a sign of:', ['Fever', 'Hypothermia', 'Normal health', 'Sleep'], 'A fever is above about 37.5 °C.'),
    Q('A clinical thermometer must never be used to test a hot drink because:', ['It would break: its scale only goes to about 42 °C', 'It would freeze', 'It cannot measure liquids', 'It is too accurate'], 'Its short range is made for body temperatures.'),
    Q('The safe way to lift a heavy load is to:', ['Bend the knees and keep the back straight', 'Bend the back with straight legs', 'Twist while lifting', 'Lift it quickly with one hand'], 'This protects the spine.'),
  ],
  'ph-upkeep-1': [
    Q('Rusty metal contacts in a torch are cleaned with:', ['Sandpaper', 'Water', 'Paint', 'Grease only'], 'Sandpaper removes rust so the current can flow.'),
    Q('Water from a home-made sand and charcoal filter must still be:', ['Boiled before drinking', 'Coloured', 'Frozen', 'Mixed with kerosene'], 'A filter removes dirt but not all germs.'),
  ],
  'ph-calc-1': [
    Q('How many litres are there in 1 m³?', ['1000', '100', '10', '1 000 000'], '1 m³ = 1000 litres.'),
    Q('The volume of a cuboid 5 cm long, 4 cm wide and 2 cm high is:', ['40 cm³', '11 cm³', '20 cm³', '80 cm³'], '5 × 4 × 2 = 40 cm³.'),
  ],
  'ph-exchange-1': [
    Q('A lamp takes in 100 J and gives out 20 J of light. Its efficiency is:', ['20%', '80%', '100%', '5%'], '20 ÷ 100 × 100% = 20%.'),
    Q('In photosynthesis, the energy change is:', ['Light → chemical energy in food', 'Chemical → light', 'Heat → sound', 'Electrical → kinetic'], 'The energy is stored in the food the plant makes.'),
  ],
  'ph-forcesf2-1': [
    Q('The weight of a 50 kg pupil on Earth is about:', ['500 N', '50 N', '5 N', '5000 N'], 'About 10 N for each kilogram.'),
    Q('Friction is a force that:', ['Opposes motion where surfaces rub', 'Always helps motion', 'Acts only in water', 'Pulls bodies towards the Earth'], 'Rough surfaces give more friction.'),
  ],
  'ph-eye-1': [
    Q('The size of the pupil is controlled by the:', ['Iris', 'Retina', 'Optic nerve', 'Cornea'], 'The iris is the coloured part of the eye.'),
    Q('Messages from the retina are carried to the brain by the:', ['Optic nerve', 'Iris', 'Lens', 'Pupil'], 'The brain interprets the upside-down image the right way up.'),
  ],
  'ph-rainfall-1': [
    Q('Debundscha, near Mount Cameroon, is so wet because:', ['Moist sea winds rise up the mountain, cool and drop their water', 'It is in the desert', 'It is far from the sea', 'It has no clouds'], 'It receives about 10 000 mm of rain a year.'),
    Q('Wet soil heats up more slowly than dry soil because:', ['Water needs a lot of heat to warm up', 'Wet soil is darker', 'Water reflects all light', 'Wet soil has no air'], 'Water has a very high specific heat capacity.'),
  ],
  'ph-measure-1': [
    Q('0.000 45 m written in standard form is:', ['4.5 × 10⁻⁴ m', '4.5 × 10⁴ m', '45 × 10⁻³ m', '0.45 × 10⁻² m'], 'Move the decimal point 4 places to the right.'),
    Q('The prefix mega (M) means:', ['One million', 'One thousand', 'One thousandth', 'One hundredth'], 'Kilo means one thousand.'),
  ],
  'ph-measure-3': [
    Q('A 5 kg mass on Earth (g = 10 N/kg) weighs:', ['50 N', '5 N', '0.5 N', '500 N'], 'W = mg = 5 × 10 = 50 N.'),
    Q('A steel ship floats because:', ['Its hollow shape gives it a low average density', 'Steel is less dense than water', 'Water pulls it up', 'It has no weight'], 'The ship plus the air inside is less dense than water.'),
  ],
  'ph-pressure-2': [
    Q('Atmospheric pressure at sea level is about:', ['100 000 Pa', '100 Pa', '10 Pa', '1 000 000 000 Pa'], 'That is about 760 mm of mercury.'),
    Q('Atmospheric pressure on top of Mount Cameroon is:', ['Lower than at sea level', 'Higher than at sea level', 'The same as at sea level', 'Zero'], 'There is less air above to press down.'),
    Q('Drinking through a straw works because:', ['Atmospheric pressure pushes the drink up when the pressure in the straw is lowered', 'The straw pulls the liquid by magnetism', 'Gravity pushes the drink up', 'The drink is lighter than air'], 'Sucking lowers the pressure inside the straw.'),
  ],
  'ph-pressure-3': [
    Q('A gas exerts pressure because its molecules:', ['Collide with the walls of the container', 'Stay still', 'Repel the walls by magnetism', 'Are heavier than air'], 'Each collision exerts a tiny force.'),
    Q('A gas at 200 kPa occupies 30 cm³. At constant temperature its volume becomes 60 cm³. Its pressure is:', ['100 kPa', '400 kPa', '200 kPa', '50 kPa'], 'p₁V₁ = p₂V₂: 200 × 30 = p × 60, so p = 100 kPa.'),
    Q('Aerosol cans must not be heated because:', ['The gas pressure inside rises and the can may burst', 'The gas freezes', 'The can becomes lighter', 'The pressure falls'], 'Faster molecules hit the walls harder and more often.'),
  ],
  'ph-forces-3': [
    Q('A spring is 10 cm long with no load and 13 cm long with a load. Its extension is:', ['3 cm', '13 cm', '23 cm', '10 cm'], 'Extension = new length − original length.'),
    Q('A stiff spring has:', ['A large spring constant, so it stretches only a little', 'A small spring constant', 'No elastic limit', 'No extension at all'], 'F = kx: a large k gives a small x for the same force.'),
  ],
  'ph-energy-1': [
    Q('A raised bucket of water stores energy as:', ['Gravitational potential energy', 'Kinetic energy', 'Nuclear energy', 'Sound energy'], 'It gains this store as it is lifted.'),
    Q('In most energy transfers, the wasted energy ends up as:', ['Thermal energy in the surroundings', 'Nuclear energy', 'Chemical energy in fuels', 'Elastic energy'], 'It spreads out and warms the surroundings.'),
    Q('In a Sankey diagram, the width of each arrow shows:', ['The amount of energy', 'The time taken', 'The speed', 'The temperature'], 'Wide arrows mean large amounts of energy.'),
  ],
  'ph-sources-1': [
    Q('A disadvantage of hydroelectricity in Cameroon is that:', ['Output falls in the dry season and dams flood land', 'It produces a lot of smoke', 'It burns coal', 'It cannot produce electricity'], 'It is clean in use, but depends on river flow.'),
    Q('Cooking with firewood leads to:', ['Deforestation and smoky kitchens', 'Cleaner air', 'More forests', 'No carbon dioxide'], 'Improved stoves burn less wood.'),
  ],
  'ph-light-1': [
    Q('The normal is a line drawn:', ['At 90° to the mirror surface', 'Along the mirror surface', 'At 45° to the mirror', 'Through the image only'], 'Angles of incidence and reflection are measured from it.'),
    Q('If the angle of incidence is 40°, the angle of reflection is:', ['40°', '50°', '80°', '20°'], 'They are always equal.'),
    Q('Lateral inversion in a plane mirror means that:', ['Left and right are swapped', 'The image is upside down', 'The image is larger', 'The image is real'], 'That is why AMBULANCE is written backwards on vehicles.'),
  ],
  'ph-light-3': [
    Q('Which colour of white light is refracted most by a prism?', ['Violet', 'Red', 'Yellow', 'Green'], 'Red is refracted least.'),
    Q('All electromagnetic waves travel in a vacuum at:', ['3 × 10⁸ m/s', '340 m/s', '3 × 10⁶ m/s', '1500 m/s'], '340 m/s is the speed of sound in air.'),
    Q('Which electromagnetic waves are used in television remote controls?', ['Infrared', 'X-rays', 'Gamma rays', 'Ultraviolet'], 'Infrared is invisible but harmless at these levels.'),
    Q('Which electromagnetic waves have the highest frequency?', ['Gamma rays', 'Radio waves', 'Infrared', 'Visible light'], 'Radio waves have the lowest frequency.'),
  ],
  'ph-lens-2': [
    Q('A magnifying glass forms an image that is:', ['Virtual, upright and magnified', 'Real, inverted and diminished', 'Real, upright and the same size', 'Virtual and inverted'], 'The object is placed closer than the principal focus.'),
    Q('Using 1/f = 1/u + 1/v, an object 30 cm from a lens of focal length 10 cm gives an image at:', ['15 cm', '20 cm', '30 cm', '10 cm'], '1/v = 1/10 − 1/30 = 2/30, so v = 15 cm.'),
  ],
  'ph-climate-1': [
    Q('Water in a clay pot stays cool because:', ['Water seeping through the pot evaporates and takes heat away', 'Clay produces cold', 'The pot reflects all light', 'Water cannot take in heat'], 'Evaporation cools.'),
    Q('Thatch, ceiling boards and woollen clothes keep heat in because they:', ['Trap air, which is a poor conductor', 'Are good conductors', 'Are shiny', 'Contain water'], 'Trapped air is a good insulator.'),
    Q('Water is used in car radiators because it:', ['Has a very high specific heat capacity', 'Boils easily', 'Is a poor conductor', 'Freezes at 100 °C'], 'It takes in a lot of heat with a small rise in temperature.'),
  ],
  'ph-waves-2': [
    Q('When water waves reflect from a straight barrier, the angle of incidence:', ['Equals the angle of reflection', 'Is double the angle of reflection', 'Is always 90°', 'Is zero'], 'As with light reflecting from a mirror.'),
    Q('You can hear someone speaking round a corner because sound waves:', ['Diffract through doorways of a similar size to their wavelength', 'Travel faster than light', 'Reflect only from the floor', 'Are electromagnetic'], 'Diffraction is greatest when gap and wavelength are similar.'),
  ],
  'ph-waves-3': [
    Q('A ringing bell in a jar goes quiet as the air is pumped out because:', ['Sound needs a medium to travel through', 'The bell stops vibrating', 'Light cannot pass through glass', 'Air is a solid'], 'Sound cannot travel through a vacuum.'),
    Q('The pitch of a sound depends on its:', ['Frequency', 'Amplitude', 'Speed', 'Colour'], 'Loudness depends on amplitude.'),
  ],
  'ph-electricity-1': [
    Q('Like charges:', ['Repel', 'Attract', 'Have no effect on each other', 'Always cancel'], 'Unlike charges attract.'),
    Q('An ammeter is connected:', ['In series', 'In parallel', 'Across the cell only', 'Without any wires'], 'A voltmeter is connected in parallel.'),
    Q('One volt is equal to:', ['One joule per coulomb', 'One coulomb per second', 'One ampere per ohm', 'One watt per second'], 'V = W ÷ Q.'),
  ],
  'ph-electricity-2': [
    Q('A 12 V supply drives a current of 3 A through a resistor. Its resistance is:', ['4 Ω', '36 Ω', '15 Ω', '0.25 Ω'], 'R = V ÷ I = 12 ÷ 3 = 4 Ω.'),
    Q('Resistors of 4 Ω and 6 Ω are connected in series. Their total resistance is:', ['10 Ω', '2.4 Ω', '24 Ω', '2 Ω'], 'In series, add the resistances.'),
    Q('House lamps are wired in parallel so that:', ['Each lamp can be switched on and off separately', 'They all go off together', 'They share the voltage', 'The current is the same in all of them'], 'Each branch gets the full mains voltage.'),
  ],
  'ph-fields-1': [
    Q('Where field lines are close together, the field is:', ['Strong', 'Weak', 'Zero', 'Reversed'], 'Line spacing shows the strength of the field.'),
    Q('An electromagnet is made stronger by:', ['More current, more turns and a soft-iron core', 'Less current', 'Removing the core', 'A plastic core'], 'Soft iron concentrates the field.'),
  ],
  'ph-magnetism-2': [
    Q('The force on a current-carrying wire is zero when the wire is:', ['Parallel to the magnetic field', 'At 90° to the field', 'Carrying a large current', 'In a strong field'], 'It is largest at 90°.'),
    Q('In Fleming’s left-hand rule, the first finger points along the:', ['Magnetic field', 'Current', 'Motion', 'Force of gravity'], 'The second finger is the current and the thumb the motion.'),
  ],
  'ph-magnetism-3': [
    Q('Electricity is transmitted at a high voltage because:', ['The current in the cables is then small, so less energy is wasted as heat', 'It increases the current', 'It makes the cables lighter', 'It stores energy'], 'Step-up transformers raise the voltage at the power station.'),
    Q('Pushing a magnet faster into a coil:', ['Induces a larger e.m.f.', 'Induces no e.m.f.', 'Reverses gravity', 'Stops the current'], 'A faster change in the field gives a bigger e.m.f.'),
  ],
  'ph-atomic-1': [
    Q('In Rutherford’s experiment, most alpha particles passed straight through the gold foil. This showed that:', ['The atom is mostly empty space', 'The nucleus is large', 'Electrons are heavy', 'Gold is a gas'], 'A very few bounced back from the small, dense nucleus.'),
    Q('Carbon-12 and carbon-14 are:', ['Isotopes of carbon', 'Different elements', 'Ions', 'Molecules'], 'Same number of protons, different numbers of neutrons.'),
  ],
  'ph-atomic-3': [
    Q('The half-life of a radioactive isotope is the time taken for:', ['Half the nuclei in a sample to decay', 'All the nuclei to decay', 'The sample to double', 'The count rate to reach zero'], 'It is the same whatever the starting amount.'),
    Q('Which radiation is used to sterilise medical equipment?', ['Gamma', 'Alpha', 'Beta', 'Radio waves'], 'Gamma rays pass through the packaging and kill germs.'),
  ],
  'ph-nuclear-1': [
    Q('In a nuclear reactor, the moderator:', ['Slows down the neutrons', 'Absorbs all the heat', 'Stops the reaction completely', 'Makes uranium'], 'Control rods absorb neutrons; the moderator slows them.'),
    Q('Nuclear fusion is:', ['Light nuclei joining to form a heavier nucleus', 'A heavy nucleus splitting', 'Burning coal', 'A chemical reaction'], 'It powers the sun and the stars.'),
    Q('A disadvantage of nuclear power is that it:', ['Produces radioactive waste that stays dangerous for thousands of years', 'Releases much carbon dioxide while working', 'Needs a lot of wind', 'Cannot produce electricity'], 'The waste must be stored safely for a very long time.'),
  ],
  'ph-equations-1': [
    Q('The area under a velocity-time graph gives the:', ['Displacement', 'Acceleration', 'Mass', 'Force'], 'The gradient gives the acceleration.'),
    Q('If a car’s speed is doubled, its braking distance becomes about:', ['Four times as long', 'Twice as long', 'Half as long', 'The same'], 'From v² = u² + 2as, braking distance grows with the square of the speed.'),
  ],
  'ph-momentum-2': [
    Q('Momentum is calculated as:', ['Mass × velocity', 'Mass × acceleration', 'Force × distance', 'Mass ÷ velocity'], 'It is measured in kg m/s.'),
    Q('A 2 kg trolley moving at 3 m/s has a momentum of:', ['6 kg m/s', '1.5 kg m/s', '5 kg m/s', '9 kg m/s'], '2 × 3 = 6 kg m/s.'),
    Q('In a collision with no outside force, the total momentum:', ['Stays the same', 'Always increases', 'Always becomes zero', 'Turns into heat'], 'Kinetic energy may be lost, but momentum is conserved.'),
    Q('Airbags in cars reduce injuries because they:', ['Make the stopping time longer, so the force is smaller', 'Stop the car faster', 'Increase the momentum', 'Make the passenger heavier'], 'Force = change in momentum ÷ time.'),
  ],
};
