// Physics lessons, units 1 to 6. Original text written for this app.
// **double asterisks** mark key terms (rendered bold).

export const LESSONS_1 = [
  // ---------------- Unit 1: Measurement ----------------
  {
    id: 'ph-measure-1',
    unit: 'ph-measure',
    n: '1.1',
    title: 'Physical quantities and SI units',
    minutes: 7,
    paper: 'Paper 1 & 2',
    tags: ['SI units', 'Scalars and vectors'],
    body: [
      'A **physical quantity** is something that can be measured, written as a number and a **unit**: 2.5 m, 30 s. Scientists use the **SI system**, whose base units include the **metre** (length), **kilogram** (mass), **second** (time), **ampere** (current) and **kelvin** (temperature).',
      'Other units are **derived** from the base units: speed in m/s, density in kg/m³, force in newtons (kg m/s²) and energy in joules. **Prefixes** show multiples: kilo (k) = 1000, centi (c) = 1/100, milli (m) = 1/1000, micro (µ) = one millionth, mega (M) = one million.',
      'Large and small numbers are written in **standard form**: 0.000 45 m = 4.5 × 10⁻⁴ m, and 3 000 000 m/s = 3 × 10⁶ m/s.',
      'A **scalar** quantity has size only (mass, speed, distance, time, energy). A **vector** quantity has size and **direction** (force, velocity, displacement, acceleration, momentum). Vectors are drawn as arrows; their length shows the size.',
    ],
    figure: null,
    tip: 'Always give a **unit** with every answer; a number without a unit loses the mark. Convert to base units (m, kg, s) before using a formula.',
    check: {
      q: 'Which of these is a vector quantity?',
      a: ['Force', 'Mass', 'Time', 'Energy'],
      why: 'Force has a direction as well as a size. Mass, time and energy are scalars.',
    },
    terms: [
      ['SI unit', 'An internationally agreed unit, such as the metre or kilogram.'],
      ['Scalar', 'A quantity with size only.'],
      ['Vector', 'A quantity with size and direction.'],
    ],
  },
  {
    id: 'ph-measure-2',
    unit: 'ph-measure',
    n: '1.2',
    title: 'Measuring length, time and volume',
    minutes: 9,
    paper: 'Paper 1, 2 & 3',
    tags: ['Micrometer', 'Errors'],
    body: [
      'A **metre rule** measures to 1 mm. For smaller lengths, a **vernier caliper** reads to 0.1 mm and a **micrometer screw gauge** to 0.01 mm. On a micrometer, read the sleeve (whole and half millimetres), then add the thimble reading (hundredths of a millimetre).',
      'Check for a **zero error** by closing the jaws: if the reading is not zero, subtract the error from every reading. Read scales with your eye level with the mark to avoid **parallax error**.',
      'A **stopwatch** measures time to 0.01 s, but human **reaction time** (about 0.2 s) is much bigger. To time something short and repeating, such as the swing of a pendulum, time **many** cycles and divide.',
      'The volume of a liquid is read from a **measuring cylinder** at the bottom of the **meniscus**. The volume of an irregular solid is found by **displacement**: the rise in water level when it is lowered in.',
    ],
    figure: 'micrometer',
    tip: 'To measure a small thing accurately, **measure many and divide**: the thickness of one sheet = thickness of 100 sheets ÷ 100; the period = time for 20 swings ÷ 20.',
    check: {
      q: 'A micrometer sleeve shows 6.5 mm and the thimble reads 23. The reading is:',
      a: ['6.73 mm', '6.523 mm', '29.5 mm', '6.23 mm'],
      why: '6.5 mm + 23 × 0.01 mm = 6.5 + 0.23 = 6.73 mm.',
    },
    terms: [
      ['Parallax error', 'An error caused by reading a scale from an angle.'],
      ['Zero error', 'A reading given by an instrument when it should read zero.'],
      ['Meniscus', 'The curved surface of a liquid in a narrow tube.'],
    ],
  },
  {
    id: 'ph-measure-3',
    unit: 'ph-f3-density',
    n: '1.3',
    title: 'Mass, weight and density',
    minutes: 8,
    paper: 'Paper 1, 2 & 3',
    tags: ['Density', 'Floating'],
    body: [
      '**Mass** is the amount of matter in an object, measured in kilograms with a balance; it is the same everywhere. **Weight** is the gravitational force on it, measured in newtons with a spring balance: **W = mg**, where g is about 10 N/kg on Earth but only 1.6 N/kg on the Moon.',
      '**Density** is mass per unit volume: **ρ = m ÷ V**, in kg/m³ or g/cm³. Water has a density of 1000 kg/m³ (1.0 g/cm³); iron about 7900 kg/m³; air about 1.3 kg/m³.',
      'For a regular solid, find the volume by measuring its sides; for an irregular one, use **displacement**. For a liquid, weigh an empty measuring cylinder, add a known volume of liquid and weigh again.',
      'An object **floats** in a liquid if it is less dense than the liquid, and sinks if it is denser. Ice (920 kg/m³) floats on water; a steel ship floats because its hollow shape gives it a low average density.',
    ],
    figure: 'density-apparatus',
    examples: [
      {
        q: 'A stone of mass 75 g is lowered into a measuring cylinder, and the water rises from 40 cm³ to 70 cm³. Find the density of the stone.',
        steps: [
          'Volume of the stone = 70 − 40 = 30 cm³.',
          'Density = mass ÷ volume = 75 ÷ 30 = 2.5 g/cm³ = 2500 kg/m³.',
        ],
      },
    ],
    tip: 'Check the units: 1 g/cm³ = **1000 kg/m³**. Weight is a **force** in newtons; mass is in kilograms. They are not the same.',
    check: {
      q: 'A block of mass 540 g has a volume of 200 cm³. Its density is:',
      a: ['2.7 g/cm³', '0.37 g/cm³', '108 000 g/cm³', '340 g/cm³'],
      why: 'ρ = m ÷ V = 540 ÷ 200 = 2.7 g/cm³, the density of aluminium.',
    },
    terms: [
      ['Mass', 'The amount of matter in an object, in kilograms.'],
      ['Weight', 'The gravitational force on a mass, in newtons.'],
      ['Density', 'Mass per unit volume.'],
    ],
  },

  // ---------------- Unit 2: Forces ----------------
  {
    id: 'ph-forces-1',
    unit: 'ph-f5-vectors',
    n: '2.1',
    title: 'Forces and resultant force',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Types of force', 'Resultant'],
    body: [
      'A **force** is a push or a pull, measured in **newtons (N)**. Forces can change an object’s speed, direction of motion or shape. Examples are weight, friction, air resistance, tension, upthrust and the normal reaction from a surface.',
      'When several forces act, they combine into one **resultant force**. Forces along the same line add if they point the same way and subtract if they point in opposite directions. Forces at right angles combine by **Pythagoras**: 3 N and 4 N at 90° give 5 N.',
      'If the resultant force is **zero**, the forces are **balanced**: a still object stays still, and a moving object keeps moving at constant velocity. If there is a resultant force, the object accelerates in its direction.',
      '**Friction** acts between surfaces and opposes motion. It wastes energy as heat and wears surfaces, but is also essential, for example for gripping, walking and braking. Lubrication reduces friction.',
    ],
    figure: 'forces-car',
    tip: 'Draw a **free-body diagram**: one arrow for each force acting on the object, labelled with its name and size, starting from the object.',
    check: {
      q: 'A 10 N force pushes a box to the right and friction of 4 N acts to the left. The resultant force is:',
      a: ['6 N to the right', '14 N to the right', '6 N to the left', '0 N'],
      why: 'Opposite forces subtract: 10 − 4 = 6 N, in the direction of the bigger force.',
    },
    terms: [
      ['Newton', 'The unit of force.'],
      ['Resultant force', 'The single force with the same effect as all the forces together.'],
      ['Friction', 'A force that opposes motion between surfaces.'],
    ],
  },
  {
    id: 'ph-forces-2',
    unit: 'ph-forces',
    n: '2.2',
    title: 'Moments, centre of mass and stability',
    minutes: 9,
    paper: 'Paper 1, 2 & 3',
    tags: ['Moments', 'Stability'],
    body: [
      'The **moment** of a force is its turning effect: **moment = force × perpendicular distance from the pivot**, measured in **N m**. A longer spanner turns a nut more easily because the distance is larger.',
      'The **principle of moments**: when an object is in equilibrium, the sum of the **clockwise** moments about any point equals the sum of the **anticlockwise** moments. For complete equilibrium there must also be no resultant force.',
      'The **centre of mass** (centre of gravity) is the point where the whole weight seems to act. For a flat card it is found by hanging the card from two points and drawing vertical plumb lines: they cross at the centre of mass.',
      'An object is **stable** if its centre of mass is low and its base is wide. It topples when its weight acts outside the base, because the weight then has a moment that turns it over. This is why buses and lorries are built with heavy parts low down.',
    ],
    figure: 'moments-beam',
    examples: [
      {
        q: 'A 300 N girl sits 1.5 m from the pivot of a see-saw. Where must a 450 N boy sit to balance her?',
        steps: [
          'Anticlockwise moment = 300 × 1.5 = 450 N m.',
          'Clockwise moment must equal it: 450 × d = 450, so d = 1.0 m on the other side.',
        ],
      },
    ],
    tip: 'In moment calculations, take moments about the **pivot** and use the **perpendicular** distance from the pivot to the line of the force.',
    check: {
      q: 'A 400 N child sits 1.5 m from the pivot of a see-saw. Where must a 600 N adult sit to balance it?',
      a: ['1.0 m from the pivot on the other side', '2.25 m from the pivot', '1.5 m from the pivot', '0.67 m from the pivot'],
      why: '400 × 1.5 = 600 × d, so d = 600 ÷ 600 = 1.0 m.',
    },
    terms: [
      ['Moment', 'Force × perpendicular distance from the pivot.'],
      ['Equilibrium', 'No resultant force and no resultant moment.'],
      ['Centre of mass', 'The point where the whole weight seems to act.'],
    ],
  },
  {
    id: 'ph-forces-3',
    unit: 'ph-f3-elastic',
    n: '2.3',
    title: 'Elasticity and Hooke’s law',
    minutes: 8,
    paper: 'Paper 1, 2 & 3',
    tags: ['Hooke’s law', 'Spring constant'],
    body: [
      'Forces can change the shape of an object. An **elastic** material returns to its original shape when the force is removed; a **plastic** deformation is permanent.',
      '**Hooke’s law**: the **extension** of a spring is **directly proportional** to the load, provided the **limit of proportionality** is not exceeded. **F = kx**, where k is the **spring constant** in N/m.',
      'A graph of extension against load is a straight line through the origin up to the limit of proportionality; beyond it the line curves. Past the **elastic limit** the spring is permanently stretched.',
      'Extension = new length − original length. A stiff spring has a large k and stretches only a little. Springs are used in spring balances, car suspensions and mattresses.',
    ],
    figure: ['hooke-graph', 'hooke-apparatus'],
    examples: [
      {
        q: 'A spring stretches 2 cm under a load of 4 N. Find its spring constant and the load that stretches it 5 cm.',
        steps: [
          'k = F ÷ e = 4 ÷ 2 = 2 N/cm = 200 N/m.',
          'Load for 5 cm: F = ke = 2 × 5 = 10 N (if the limit of proportionality is not passed).',
        ],
      },
    ],
    tip: 'Do not confuse **extension** with **length**. In a graph question, say the line is straight **and passes through the origin** to show proportionality.',
    check: {
      q: 'A spring with k = 40 N/m is stretched by a 2 N load. Its extension is:',
      a: ['0.05 m', '80 m', '20 m', '0.5 m'],
      why: 'x = F ÷ k = 2 ÷ 40 = 0.05 m (5 cm).',
    },
    terms: [
      ['Extension', 'The increase in length of a stretched object.'],
      ['Limit of proportionality', 'The point beyond which extension is no longer proportional to load.'],
      ['Spring constant', 'Force per unit extension, k = F ÷ x.'],
    ],
  },

  // ---------------- Unit 3: Motion ----------------
  {
    id: 'ph-motion-1',
    unit: 'ph-f5-kinematics',
    n: '3.1',
    title: 'Speed, velocity, acceleration and motion graphs',
    minutes: 10,
    paper: 'Paper 1, 2 & 3',
    tags: ['Motion graphs', 'Equations'],
    body: [
      '**Speed = distance ÷ time**, in m/s. **Velocity** is speed in a stated direction. **Acceleration** is the rate of change of velocity: **a = (v − u) ÷ t**, in m/s², where u is the starting velocity and v the final velocity. A negative acceleration is a deceleration.',
      'On a **distance-time graph**, the **gradient** is the speed. A straight sloping line means constant speed; a horizontal line means the object is stationary; a curve means the speed is changing.',
      'On a **speed-time graph**, the **gradient** is the acceleration and the **area under the line** is the distance travelled. A horizontal line means constant speed.',
      'An object falling freely near the Earth, without air resistance, has a constant acceleration **g = 9.8 m/s²** (about 10 m/s²), whatever its mass.',
    ],
    figure: ['speed-time', 'distance-time'],
    examples: [
      {
        q: 'A bus accelerates steadily from rest to 12 m/s in 6 s, then travels at 12 m/s for 10 s. Find its acceleration and the total distance.',
        steps: [
          'Acceleration = change in velocity ÷ time = 12 ÷ 6 = 2 m/s².',
          'Distance = area under the speed-time graph = (½ × 6 × 12) + (12 × 10) = 36 + 120 = 156 m.',
        ],
      },
    ],
    tip: 'Read graph questions carefully: **gradient** of distance-time is speed; **gradient** of speed-time is acceleration; **area** under speed-time is distance.',
    check: {
      q: 'A car accelerates uniformly from rest to 20 m/s in 10 s. How far does it travel in that time?',
      a: ['100 m', '200 m', '2 m', '20 m'],
      why: 'Area under the speed-time graph = ½ × 10 × 20 = 100 m.',
    },
    terms: [
      ['Velocity', 'Speed in a given direction.'],
      ['Acceleration', 'Change in velocity ÷ time taken.'],
      ['Gradient', 'The steepness of a graph line: change in y ÷ change in x.'],
    ],
  },
  {
    id: 'ph-motion-2',
    unit: 'ph-motion',
    n: '3.2',
    title: 'Newton’s laws of motion',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['F = ma', 'Terminal velocity'],
    body: [
      '**Newton’s first law**: an object stays at rest, or moves at constant velocity, unless a resultant force acts on it. This tendency to keep doing what it is doing is called **inertia**.',
      '**Newton’s second law**: a resultant force causes an acceleration: **F = ma**. A bigger force gives a bigger acceleration; a bigger mass gives a smaller acceleration for the same force. One newton accelerates 1 kg at 1 m/s².',
      '**Newton’s third law**: when body A exerts a force on body B, B exerts an equal and opposite force on A. The two forces act on **different** objects, so they never cancel each other.',
      'A falling object speeds up until **air resistance** equals its weight; then the resultant force is zero and it falls at a steady **terminal velocity**. Opening a parachute increases air resistance, so the skydiver slows to a lower terminal velocity.',
    ],
    figure: 'forces-car',
    examples: [
      {
        q: 'The engine of a 1200 kg car gives a forward force of 3000 N while friction and air resistance total 600 N. Find its acceleration.',
        steps: [
          'Resultant force = 3000 − 600 = 2400 N.',
          'a = F ÷ m = 2400 ÷ 1200 = 2 m/s².',
        ],
      },
    ],
    tip: 'Use **resultant** force in F = ma, not just one of the forces. At terminal velocity the forces are **balanced**, but the object is still moving.',
    check: {
      q: 'A 1200 kg car has a driving force of 3000 N and resistive forces of 600 N. Its acceleration is:',
      a: ['2 m/s²', '2.5 m/s²', '0.5 m/s²', '3 m/s²'],
      why: 'Resultant = 3000 − 600 = 2400 N; a = F ÷ m = 2400 ÷ 1200 = 2 m/s².',
    },
    terms: [
      ['Inertia', 'The tendency of an object to resist changes in its motion.'],
      ['Terminal velocity', 'The constant speed reached when drag equals weight.'],
      ['Resultant force', 'The overall force acting on an object.'],
    ],
  },
  {
    id: 'ph-motion-3',
    unit: 'ph-motion',
    n: '3.3',
    title: 'Momentum and safety',
    minutes: 8,
    paper: 'Paper 2',
    tags: ['Momentum', 'Impulse'],
    body: [
      '**Momentum = mass × velocity**, p = mv, in kg m/s. It is a vector, so its direction matters.',
      'The **principle of conservation of momentum**: in a collision or explosion with no external forces, the total momentum before equals the total momentum after. A gun recoils backwards because the bullet gains forward momentum.',
      'A force changes momentum: **force = change in momentum ÷ time taken**. The product force × time is the **impulse**. Making a collision last longer reduces the force for the same change in momentum.',
      'Car safety features use this idea: **crumple zones**, **seat belts** and **air bags** increase the time it takes a passenger to stop, so the force on them is smaller. Bending your knees when landing from a jump does the same.',
    ],
    figure: null,
    examples: [
      {
        q: 'A 3 kg ball moving at 4 m/s hits a 1 kg ball at rest. Afterwards the 3 kg ball moves on at 2 m/s. Find the velocity of the 1 kg ball.',
        steps: [
          'Momentum before = 3 × 4 + 1 × 0 = 12 kg m/s.',
          'Momentum after = 3 × 2 + 1 × v = 6 + v.',
          '6 + v = 12, so v = 6 m/s in the same direction.',
        ],
      },
    ],
    tip: 'In conservation of momentum problems, choose one direction as positive and give velocities in the opposite direction a **minus sign**.',
    check: {
      q: 'A 2 kg trolley moving at 3 m/s collides with and sticks to a stationary 1 kg trolley. Their speed afterwards is:',
      a: ['2 m/s', '3 m/s', '1 m/s', '6 m/s'],
      why: 'Momentum before = 2 × 3 = 6 kg m/s. After, 3 kg moves at v: 3v = 6, so v = 2 m/s.',
    },
    terms: [
      ['Momentum', 'Mass × velocity.'],
      ['Impulse', 'Force × time, equal to the change in momentum.'],
      ['Crumple zone', 'Part of a car designed to crush slowly in a crash.'],
    ],
  },

  // ---------------- Unit 4: Energy ----------------
  {
    id: 'ph-energy-1',
    unit: 'ph-f3-work',
    n: '4.1',
    title: 'Energy stores, transfers and efficiency',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Conservation of energy', 'Efficiency'],
    body: [
      'Energy is stored in different ways: **kinetic** (moving objects), **gravitational potential** (raised objects), **chemical** (fuels, food, batteries), **elastic** (stretched springs), **thermal** (hot objects) and **nuclear**. It is transferred by forces doing work, by electric currents, by heating and by waves such as light and sound.',
      'The **principle of conservation of energy**: energy cannot be created or destroyed, only transferred from one store to another. The total amount stays the same.',
      'In every real transfer some energy is **wasted**, usually spread into the surroundings as thermal energy. **Efficiency = useful energy output ÷ total energy input × 100%**. A filament lamp is only about 5% efficient; an LED is much better.',
      'A **Sankey diagram** shows energy transfers with arrows whose widths are proportional to the amounts of energy: the useful output goes straight on and the waste branches off.',
    ],
    figure: null,
    tip: 'Never write that energy is "used up" or "lost". Say it is **transferred**, often as wasted thermal energy to the surroundings.',
    check: {
      q: 'A motor is given 2000 J of electrical energy and does 1500 J of useful work. Its efficiency is:',
      a: ['75%', '133%', '25%', '50%'],
      why: '1500 ÷ 2000 × 100 = 75%. The other 500 J is wasted as heat and sound.',
    },
    terms: [
      ['Conservation of energy', 'Energy cannot be created or destroyed.'],
      ['Efficiency', 'Useful output ÷ total input × 100%.'],
      ['Sankey diagram', 'A diagram showing energy flows to scale.'],
    ],
  },
  {
    id: 'ph-energy-2',
    unit: 'ph-f3-work',
    n: '4.2',
    title: 'Work, power, kinetic and potential energy',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Work done', 'Power'],
    body: [
      '**Work done = force × distance moved in the direction of the force**, W = Fd, in joules. One joule of work is done when a force of 1 N moves 1 m. Work done equals the energy transferred.',
      '**Kinetic energy** Ek = ½mv². Doubling the speed makes the kinetic energy four times as big, which is why speed is so dangerous on the road.',
      '**Gravitational potential energy** gained when an object is raised: Ep = mgh. When it falls, potential energy is transferred to kinetic energy: if there is no air resistance, mgh = ½mv².',
      '**Power** is the rate of doing work or transferring energy: **P = W ÷ t**, in watts (1 W = 1 J/s). A 60 W lamp transfers 60 J every second.',
    ],
    figure: null,
    examples: [
      {
        q: 'A 50 kg student climbs stairs 4 m high in 8 s. Find the potential energy gained and the power developed. (g = 10 N/kg)',
        steps: [
          'Ep = mgh = 50 × 10 × 4 = 2000 J.',
          'Power = energy ÷ time = 2000 ÷ 8 = 250 W.',
        ],
      },
      {
        q: 'Find the kinetic energy of a 1000 kg car moving at 20 m/s.',
        steps: [
          'Ek = ½mv² = ½ × 1000 × 20² = 200 000 J.',
        ],
      },
    ],
    tip: 'In energy-change questions, state which store **decreases** and which **increases**, and check the units: mass in kg, height in m, speed in m/s.',
    check: {
      q: 'A 50 kg student climbs 4 m of stairs in 8 s (g = 10 N/kg). Their power is:',
      a: ['250 W', '2000 W', '1600 W', '25 W'],
      why: 'Work = mgh = 50 × 10 × 4 = 2000 J; power = 2000 ÷ 8 = 250 W.',
    },
    terms: [
      ['Work', 'Force × distance moved in the direction of the force.'],
      ['Power', 'Rate of doing work, in watts.'],
      ['Kinetic energy', 'Energy of motion, ½mv².'],
    ],
  },
  {
    id: 'ph-energy-3',
    unit: 'ph-energy',
    n: '4.3',
    title: 'Simple machines and energy resources',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Machines', 'Renewable energy'],
    body: [
      'A **machine** lets a small **effort** move a large **load**. **Mechanical advantage (MA) = load ÷ effort**. **Velocity ratio (VR) = distance moved by effort ÷ distance moved by load**. **Efficiency = MA ÷ VR × 100%**.',
      'Levers, pulleys, inclined planes and gears are machines. A pulley system with n rope sections supporting the load has a velocity ratio of n. No machine is 100% efficient because of friction and the weight of moving parts.',
      '**Non-renewable** resources will run out: coal, oil and natural gas (fossil fuels) and nuclear fuel. Burning fossil fuels releases carbon dioxide, which adds to climate change.',
      '**Renewable** resources are replaced naturally: **hydroelectric** power (important in Cameroon, as at Edea and Song Loulou), solar, wind, biomass and geothermal energy. Each has costs and limits, such as needing sunlight, wind or suitable rivers.',
    ],
    figure: ['pulley-system', 'pulley-apparatus'],
    examples: [
      {
        q: 'A pulley system of velocity ratio 5 lifts an 800 N load with an effort of 200 N. Find its mechanical advantage and efficiency.',
        steps: [
          'MA = load ÷ effort = 800 ÷ 200 = 4.',
          'Efficiency = MA ÷ VR × 100% = 4 ÷ 5 × 100% = 80%.',
        ],
      },
    ],
    tip: 'Machines reduce the **force** needed, never the **work**: the effort moves further than the load.',
    check: {
      q: 'A machine has MA 3 and VR 4. Its efficiency is:',
      a: ['75%', '133%', '12%', '7%'],
      why: 'Efficiency = MA ÷ VR × 100 = 3 ÷ 4 × 100 = 75%.',
    },
    terms: [
      ['Mechanical advantage', 'Load ÷ effort.'],
      ['Velocity ratio', 'Distance moved by effort ÷ distance moved by load.'],
      ['Renewable resource', 'An energy source that is replaced naturally.'],
    ],
  },

  // ---------------- Unit 5: Pressure ----------------
  {
    id: 'ph-pressure-1',
    unit: 'ph-pressure',
    n: '5.1',
    title: 'Pressure in solids and liquids',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['p = F/A', 'p = hρg'],
    body: [
      '**Pressure = force ÷ area**, p = F ÷ A, measured in **pascals** (1 Pa = 1 N/m²). The same force on a smaller area gives a bigger pressure: a sharp knife cuts easily; wide tyres and snow shoes spread weight to reduce pressure.',
      'In a liquid, pressure increases with **depth** and with the **density** of the liquid: **p = hρg**. It acts equally in all directions at a given depth and does not depend on the shape of the container.',
      'This is why dams are built thicker at the bottom, and why divers feel greater pressure the deeper they go.',
      '**Hydraulic** machines use the fact that liquids are almost incompressible and transmit pressure. A small force on a small piston creates a pressure that acts on a large piston and produces a large force: car brakes, jacks and presses work this way.',
    ],
    figure: 'hydraulic-press',
    examples: [
      {
        q: 'A 50 kg girl stands on one stiletto heel of area 1 cm². Find the pressure on the floor. (g = 10 N/kg)',
        steps: [
          'Force = weight = 50 × 10 = 500 N; area = 1 cm² = 0.0001 m².',
          'p = F ÷ A = 500 ÷ 0.0001 = 5 000 000 Pa, which is why such heels dent soft floors.',
        ],
      },
      {
        q: 'Find the pressure of the water at the bottom of a tank 2 m deep. (ρ = 1000 kg/m³, g = 10 N/kg)',
        steps: [
          'p = ρgh = 1000 × 10 × 2 = 20 000 Pa.',
        ],
      },
    ],
    tip: 'Area must be in **m²** to get pascals: 1 cm² = 0.0001 m². In hydraulics, the **pressure** is the same on both pistons, not the force.',
    check: {
      q: 'A force of 20 N acts on a small piston of area 0.002 m². The pressure in the liquid is:',
      a: ['10 000 Pa', '0.04 Pa', '40 Pa', '100 Pa'],
      why: 'p = F ÷ A = 20 ÷ 0.002 = 10 000 Pa.',
    },
    terms: [
      ['Pressure', 'Force per unit area.'],
      ['Pascal', 'One newton per square metre.'],
      ['Hydraulic', 'Using a liquid to transmit pressure.'],
    ],
  },
  {
    id: 'ph-pressure-2',
    unit: 'ph-pressure',
    n: '5.2',
    title: 'Atmospheric pressure, barometers and manometers',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Barometer', 'Manometer'],
    body: [
      'The air above us has weight, so it presses on everything: **atmospheric pressure** is about 100 000 Pa at sea level. It is less at higher altitudes, such as on Mount Cameroon, because there is less air above.',
      'A **mercury barometer** is a long tube filled with mercury and turned upside down in a dish. Atmospheric pressure holds up a column of mercury about **760 mm** high; above it is a vacuum.',
      'A **manometer** is a U-tube containing liquid. Connected to a gas supply, it shows how much the gas pressure exceeds atmospheric pressure by the **difference in levels h**: excess pressure = hρg.',
      'Drinking with a straw, using a suction cup and a syringe all depend on atmospheric pressure pushing where the pressure inside is lower.',
    ],
    figure: ['barometer', 'manometer'],
    examples: [
      {
        q: 'A water manometer joined to a gas supply shows a difference in levels of 30 cm. By how much is the gas pressure above atmospheric pressure?',
        steps: [
          'p = ρgh = 1000 × 10 × 0.30.',
          '= 3000 Pa above atmospheric pressure.',
        ],
      },
    ],
    tip: 'A barometer measures **atmospheric** pressure; a manometer measures the **difference** between a gas pressure and atmospheric pressure.',
    check: {
      q: 'The levels in a water manometer differ by 0.20 m (ρ = 1000 kg/m³, g = 10 N/kg). The excess pressure of the gas is:',
      a: ['2000 Pa', '200 Pa', '20 000 Pa', '50 Pa'],
      why: 'Excess pressure = hρg = 0.20 × 1000 × 10 = 2000 Pa.',
    },
    terms: [
      ['Atmospheric pressure', 'The pressure caused by the weight of the air above.'],
      ['Barometer', 'An instrument that measures atmospheric pressure.'],
      ['Manometer', 'A U-tube that measures gas pressure.'],
    ],
  },
  {
    id: 'ph-pressure-3',
    unit: 'ph-pressure',
    n: '5.3',
    title: 'Gas pressure and Boyle’s law',
    minutes: 8,
    paper: 'Paper 1, 2 & 3',
    tags: ['Boyle’s law', 'Kinetic theory'],
    body: [
      'A gas exerts pressure because its molecules move randomly at high speed and **collide with the walls** of the container. Each collision exerts a tiny force; together they make the pressure.',
      'If the gas is squeezed into a smaller volume at the same temperature, the molecules hit the walls **more often**, so the pressure rises.',
      '**Boyle’s law**: for a fixed mass of gas at constant temperature, pressure is **inversely proportional** to volume: **pV = constant**, or p₁V₁ = p₂V₂. Halving the volume doubles the pressure.',
      'If a gas is heated at constant volume, its molecules move faster and hit the walls harder and more often, so the pressure rises. This is why aerosol cans must not be heated.',
    ],
    figure: 'boyle-apparatus',
    examples: [
      {
        q: '200 cm³ of air at 100 kPa is squeezed to 50 cm³ at the same temperature. Find its new pressure.',
        steps: [
          'Boyle’s law: p₁V₁ = p₂V₂.',
          'p₂ = 100 × 200 ÷ 50 = 400 kPa.',
        ],
      },
    ],
    tip: 'State the conditions for Boyle’s law: **fixed mass** and **constant temperature**. Use p₁V₁ = p₂V₂ with the same units on both sides.',
    check: {
      q: 'A gas occupies 60 cm³ at 100 kPa. At constant temperature it is compressed to 20 cm³. Its pressure becomes:',
      a: ['300 kPa', '33 kPa', '200 kPa', '120 kPa'],
      why: 'p₂ = p₁V₁ ÷ V₂ = 100 × 60 ÷ 20 = 300 kPa.',
    },
    terms: [
      ['Boyle’s law', 'pV is constant for a fixed mass of gas at constant temperature.'],
      ['Inversely proportional', 'When one doubles, the other halves.'],
      ['Gas pressure', 'Force per unit area from molecules hitting a surface.'],
    ],
  },

  // ---------------- Unit 6: Thermal physics ----------------
  {
    id: 'ph-thermal-1',
    unit: 'ph-f4-temperature',
    n: '6.1',
    title: 'The kinetic model, expansion and thermometers',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Expansion', 'Thermometers'],
    body: [
      'All matter is made of particles in constant motion. **Temperature** measures the average kinetic energy of the particles: the hotter, the faster they move. At **absolute zero** (0 K, −273 °C) they have the least possible energy.',
      'Most substances **expand** when heated because their particles vibrate or move more and take up more space. Gases expand most, then liquids, then solids. Gaps in railway lines and bridges, and sagging power cables, allow for expansion.',
      'A **bimetallic strip** is made of two metals that expand by different amounts; when heated it bends. It is used in thermostats and fire alarms.',
      'A **liquid-in-glass thermometer** uses the expansion of mercury or alcohol. It is calibrated with two **fixed points**: the melting point of pure ice (0 °C) and the boiling point of pure water (100 °C). A **clinical thermometer** has a narrow constriction so the reading stays after it is removed from the mouth.',
    ],
    figure: null,
    tip: 'Temperature in kelvin = temperature in °C **+ 273**. Expansion questions need the idea that particles **move more** and take up more space; the particles themselves do not get bigger.',
    check: {
      q: 'Why are small gaps left between sections of a concrete bridge?',
      a: ['To allow the sections to expand in hot weather', 'To let rain drain', 'To save concrete', 'To make the bridge lighter'],
      why: 'Without gaps, expansion would create large forces that could crack the bridge.',
    },
    terms: [
      ['Temperature', 'A measure of the average kinetic energy of the particles.'],
      ['Absolute zero', '0 K or −273 °C, the lowest possible temperature.'],
      ['Fixed point', 'A standard temperature used to calibrate a thermometer.'],
    ],
  },
  {
    id: 'ph-thermal-2',
    unit: 'ph-thermal',
    n: '6.2',
    title: 'Specific heat capacity and latent heat',
    minutes: 10,
    paper: 'Paper 1, 2 & 3',
    tags: ['Specific heat capacity', 'Latent heat'],
    body: [
      'The **specific heat capacity** c of a substance is the energy needed to raise the temperature of **1 kg** by **1 °C**. **Energy = mass × specific heat capacity × temperature change**: Q = mcΔθ. Water has a high c (4200 J/(kg °C)), so it heats and cools slowly; it is used in radiators and for cooling engines.',
      'When a substance changes state, energy is taken in or given out **without a change in temperature**. This is **latent heat**: it is used to break (or released when forming) the bonds between particles.',
      '**Specific latent heat of fusion** is the energy to melt 1 kg of solid at its melting point (334 000 J/kg for ice). **Specific latent heat of vaporisation** is the energy to boil 1 kg of liquid (2 260 000 J/kg for water). Q = mL.',
      'A **heating curve** rises, flattens while the substance melts, rises again, then flattens while it boils. Steam burns are worse than boiling-water burns because steam releases its latent heat as it condenses on the skin.',
    ],
    figure: ['heating-curve', 'shc-apparatus'],
    examples: [
      {
        q: 'How much energy is needed to heat 0.5 kg of water from 25 °C to 100 °C and then boil it all away? (c = 4200 J/(kg °C), L = 2 260 000 J/kg)',
        steps: [
          'Heating: Q = mcΔθ = 0.5 × 4200 × 75 = 157 500 J.',
          'Boiling: Q = mL = 0.5 × 2 260 000 = 1 130 000 J.',
          'Total = 1 287 500 J; boiling the water away takes far more energy than heating it.',
        ],
      },
    ],
    tip: 'Use **Q = mcΔθ** when the temperature changes and **Q = mL** when the state changes. On a heating curve, the flat parts are changes of state.',
    check: {
      q: 'How much energy is needed to melt 0.5 kg of ice at 0 °C? (L = 334 000 J/kg)',
      a: ['167 000 J', '668 000 J', '334 000 J', '1670 J'],
      why: 'Q = mL = 0.5 × 334 000 = 167 000 J.',
    },
    terms: [
      ['Specific heat capacity', 'Energy to raise 1 kg by 1 °C.'],
      ['Latent heat', 'Energy for a change of state at constant temperature.'],
      ['Heating curve', 'A graph of temperature against time while heating.'],
    ],
  },
  {
    id: 'ph-thermal-3',
    unit: 'ph-thermal',
    n: '6.3',
    title: 'Conduction, convection and radiation',
    minutes: 9,
    paper: 'Paper 1, 2 & 3',
    tags: ['Heat transfer', 'Vacuum flask'],
    body: [
      '**Conduction** is the transfer of thermal energy through a material without the material moving. Particles at the hot end vibrate more and pass energy to their neighbours. Metals are the best conductors because their **free electrons** carry energy quickly. Poor conductors (insulators) include wood, plastic, glass and air.',
      '**Convection** happens in liquids and gases. The heated fluid expands, becomes **less dense** and rises; cooler, denser fluid sinks to replace it, forming a **convection current**. Sea breezes, the heating of water in a kettle and the cooling of a fridge all depend on convection.',
      '**Radiation** is the transfer of energy by **infrared** electromagnetic waves. It needs no medium and travels through a vacuum, which is how heat reaches us from the Sun. **Dull black** surfaces are the best absorbers and emitters; **shiny silver** surfaces are the worst and reflect radiation.',
      'A **vacuum flask** reduces all three: the vacuum stops conduction and convection, the silvered walls reduce radiation, and the stopper stops convection and evaporation.',
    ],
    figure: 'heat-transfer',
    tip: 'Explain convection in steps: **heated, expands, less dense, rises**; cool fluid **sinks**. Name the type of transfer for each part of a vacuum flask.',
    check: {
      q: 'Why are the inside walls of a vacuum flask silvered?',
      a: ['To reduce heat transfer by radiation', 'To stop conduction', 'To stop convection', 'To make the flask stronger'],
      why: 'Shiny surfaces are poor emitters and absorbers of infrared, so they reflect radiation back.',
    },
    terms: [
      ['Conduction', 'Energy transfer through a material by particle vibration and free electrons.'],
      ['Convection current', 'Circulation of a fluid caused by density differences.'],
      ['Infrared radiation', 'Electromagnetic waves that carry thermal energy.'],
    ],
  },
];
