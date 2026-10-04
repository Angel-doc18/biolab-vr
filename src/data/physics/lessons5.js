// Form 5 Physics lessons for the topics of the MINESEC Form 5 syllabus that the
// first lessons did not cover: fields, transformers and the grid, nuclear energy,
// vectors, the equations of motion, collisions and equilibrium. Original text
// written for this app. **double asterisks** mark key terms (rendered bold).
// `examples` are worked examples.

export const LESSONS_5 = [
  {
    id: 'ph-fields-1',
    unit: 'ph-f5-magnets',
    n: '1.2',
    title: 'Fields: gravitational, electric and magnetic',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Fields', 'Field lines'],
    body: [
      'A **field** is a region in which a force acts on something placed there, without any contact. It is drawn with **field lines**: they show the direction of the force, and where they are close together the field is strong. Field lines never cross.',
      'A **gravitational field** surrounds every mass and attracts other masses. Its strength **g** is the force on each kilogram: about **10 N/kg** at the Earth’s surface and 1.6 N/kg on the Moon, so **W = mg**. Gravity keeps the Moon and the satellites that carry television and telephone signals in orbit round the Earth.',
      'An **electric field** surrounds electric charges and acts on other charges. Its lines run from **positive to negative**; between two parallel charged plates the field is uniform. Electric fields guide the electron beam in old television tubes and the toner in photocopiers.',
      'A **magnetic field** surrounds magnets and electric currents and acts on magnetic materials and on currents. Its lines run from the **north pole to the south pole** and can be plotted with a small compass. The **Earth** has a magnetic field like that of a huge bar magnet; a compass needle lines up with it, and the field shields the Earth from charged particles from the sun.',
      'A current also makes a magnetic field. Round a **straight wire** the lines are circles, whose direction is given by the **right-hand grip rule**. A **solenoid** (a long coil) gives a field like a bar magnet’s, made stronger by more current, more turns and a **soft-iron core**: this is an electromagnet.',
    ],
    figure: 'magnetic-field',
    examples: [
      {
        q: 'An astronaut has a mass of 70 kg. Find her weight on Earth (g = 10 N/kg) and on the Moon (g = 1.6 N/kg).',
        steps: [
          'On Earth: W = mg = 70 × 10 = 700 N.',
          'On the Moon: W = 70 × 1.6 = 112 N.',
          'Her mass is 70 kg in both places; only the field strength is different.',
        ],
      },
    ],
    tip: 'When drawing field lines, put **arrows** on them, never let them **cross**, and draw them closer together where the field is stronger.',
    check: {
      q: 'Which field makes a compass needle turn?',
      a: ['A magnetic field', 'A gravitational field', 'An electric field', 'A sound wave'],
      why: 'The needle is a small magnet, so it turns to line up with a magnetic field.',
    },
    terms: [
      ['Field', 'A region in which a force acts at a distance.'],
      ['Field line', 'A line showing the direction of the force in a field.'],
      ['Gravitational field strength', 'The force on each kilogram of mass, in N/kg.'],
    ],
  },
  {
    id: 'ph-transformer-2',
    unit: 'ph-magnetism',
    n: '2.3',
    title: 'Transformers and the transmission of electricity',
    minutes: 10,
    paper: 'Paper 2',
    tags: ['Transformers', 'Calculation'],
    body: [
      'A **transformer** has a **primary** and a **secondary** coil wound on a soft-iron core. Alternating current in the primary makes a changing magnetic field in the core, which **induces** an alternating voltage in the secondary. It does not work with direct current, because a steady field induces nothing.',
      'The voltages are in the ratio of the turns: **Vs ÷ Vp = Ns ÷ Np**. A **step-up** transformer has more turns on the secondary; a **step-down** transformer has fewer. If no energy is wasted, power in equals power out: **Vp × Ip = Vs × Is**, so stepping the voltage up steps the current down.',
      'Real transformers waste a little energy: as heat in the resistance of the coils, and through **eddy currents** induced in the core, which is therefore made of thin insulated sheets (**laminated**). Large transformers are about 98% efficient.',
      'Electricity is sent across the country through the **national grid**, managed in Cameroon by SONATREL. Power stations step the voltage **up** to 90 000 V or 225 000 V, so that the current in the long cables is **small** and less energy is lost as heat (power lost = I²R). Substations step the voltage **down** in stages to 220 V for homes. A phone charger contains a small step-down transformer.',
    ],
    figure: 'transformer',
    examples: [
      {
        q: 'A phone charger steps 220 V down to 11 V. Its primary coil has 2000 turns. How many turns are on the secondary?',
        steps: [
          'Ns = Np × Vs ÷ Vp = 2000 × 11 ÷ 220.',
          '= 100 turns.',
        ],
      },
      {
        q: 'A power of 1 000 000 W is sent through cables of total resistance 5 Ω. Find the power lost if it is sent at 10 000 V, and at 200 000 V.',
        steps: [
          'At 10 000 V: I = P ÷ V = 100 A; power lost = I²R = 100² × 5 = 50 000 W.',
          'At 200 000 V: I = 5 A; power lost = 5² × 5 = 125 W.',
          'Raising the voltage cuts the loss enormously.',
        ],
      },
    ],
    tip: 'For transmission losses, first find the **current in the cable** with I = P ÷ V, then use **power lost = I²R**.',
    check: {
      q: 'Why is the core of a transformer laminated?',
      a: ['To reduce the energy lost through eddy currents', 'To make it heavier', 'To increase the current', 'So that it works with d.c.'],
      why: 'Thin insulated sheets stop large eddy currents circulating in the core and heating it.',
    },
    terms: [
      ['Step-up transformer', 'A transformer whose output voltage is higher than its input.'],
      ['Eddy currents', 'Currents induced in the core of a transformer, which waste energy.'],
      ['National grid', 'The network of cables and transformers that carries electricity across a country.'],
    ],
  },
  {
    id: 'ph-nuclear-1',
    unit: 'ph-atomic',
    n: '3.4',
    title: 'Nuclear energy, radiation safety and the environment',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Fission and fusion', 'Safety'],
    body: [
      'In **nuclear fission**, a heavy nucleus such as **uranium-235** absorbs a slow neutron and splits into two smaller nuclei, releasing two or three neutrons and a large amount of energy. The new neutrons can split more nuclei: a **chain reaction**. In a nuclear reactor it is kept steady by **control rods** that absorb neutrons; a **moderator** (graphite or water) slows the neutrons, and a **coolant** carries the heat away to make steam for the turbines.',
      'In **nuclear fusion**, light nuclei such as hydrogen join to form helium, releasing even more energy for each kilogram of fuel. Fusion powers the **sun** and the stars, but it needs enormous temperatures and pressures and is not yet a working source of electricity on Earth. In both fission and fusion the products have slightly less mass than the starting nuclei; the lost mass becomes energy.',
      'Nuclear power stations give out no carbon dioxide while working, but they produce **radioactive waste** that stays dangerous for thousands of years and must be stored safely, and accidents such as those at Chernobyl (1986) and Fukushima (2011) spread radioactive material. Cameroon has no nuclear power station, but radioactive sources are used in hospitals for cancer treatment and in industry, under the control of the National Radiation Protection Agency.',
      'Protection from radiation relies on **time**, **distance** and **shielding**: spend as little time as possible near a source, handle it with long tongs, store it in a lead-lined box, never eat or drink near it, and wear a **film badge** that records the dose received. Everyone receives a small **background** dose from rocks, soil, cosmic rays and food.',
    ],
    figure: null,
    examples: [
      {
        q: 'Radioactive waste gives 800 counts per minute and has a half-life of 30 years. What will its count rate be after 90 years?',
        steps: [
          '90 years = 90 ÷ 30 = 3 half-lives.',
          '800 → 400 → 200 → 100 counts per minute.',
        ],
      },
    ],
    tip: 'Keep the two apart: **fission** splits **heavy** nuclei; **fusion** joins **light** nuclei. Both release energy.',
    check: {
      q: 'What is the job of the control rods in a nuclear reactor?',
      a: ['To absorb neutrons and so control the rate of fission', 'To slow the neutrons down', 'To carry the heat away', 'To produce more neutrons'],
      why: 'Lowering the rods absorbs more neutrons, slowing the chain reaction; raising them speeds it up.',
    },
    terms: [
      ['Fission', 'The splitting of a heavy nucleus, releasing energy.'],
      ['Fusion', 'The joining of light nuclei, releasing energy.'],
      ['Chain reaction', 'A reaction in which the neutrons released cause further fissions.'],
    ],
  },
  {
    id: 'ph-vectors-1',
    unit: 'ph-f5-vectors',
    n: '4.2',
    title: 'Adding and resolving vectors',
    minutes: 10,
    paper: 'Paper 2',
    tags: ['Vectors', 'Calculation'],
    body: [
      'Vectors in the same line are added with signs: choose one direction as positive. Two forces of 8 N east and 3 N west give 5 N east.',
      'Vectors at an angle are added by a **scale drawing**. In the **parallelogram** method, draw both vectors from the same point to scale and complete the parallelogram: the **diagonal** is the resultant. In the **triangle** method, draw the second vector from the end of the first: the line from the start to the finish is the resultant. Measure its length and its angle.',
      'When two vectors are at **right angles**, calculate the resultant with **Pythagoras**: R = √(A² + B²), and its direction with tan θ = opposite ÷ adjacent.',
      'A single vector can be split (**resolved**) into two parts at right angles. A force F at an angle θ to the horizontal has a horizontal component **F cos θ** and a vertical component **F sin θ**. Pulling a cart with a sloping rope, only the horizontal component moves the cart forward.',
      'Velocity is a vector too. A canoe paddled straight across the Wouri while the river flows downstream ends up moving at an angle: its resultant velocity is the vector sum of its own velocity and the current.',
    ],
    figure: 'vector-parallelogram',
    examples: [
      {
        q: 'A boat heads straight across a river at 4 m/s while the current flows at 3 m/s. Find its resultant velocity.',
        steps: [
          'The velocities are at right angles: R = √(4² + 3²) = √25 = 5 m/s.',
          'Direction: tan θ = 3 ÷ 4, so θ = 37° downstream from straight across.',
        ],
      },
      {
        q: 'A rope pulls a cart with a force of 200 N at 30° above the horizontal. Find the horizontal and vertical components.',
        steps: [
          'Horizontal = 200 × cos 30° = 200 × 0.866 = 173 N.',
          'Vertical = 200 × sin 30° = 200 × 0.5 = 100 N.',
        ],
      },
    ],
    tip: 'In a scale drawing, **state your scale** (for example 1 cm = 10 N) and give the **direction** of the resultant as well as its size.',
    check: {
      q: 'Forces of 3 N and 4 N act on an object in any directions. Which resultant is impossible?',
      a: ['8 N', '1 N', '5 N', '7 N'],
      why: 'The resultant lies between 4 − 3 = 1 N (opposite directions) and 4 + 3 = 7 N (same direction).',
    },
    terms: [
      ['Resultant', 'The single vector with the same effect as several vectors together.'],
      ['Component', 'The part of a vector in a given direction.'],
      ['Parallelogram of forces', 'A scale drawing that finds the resultant of two forces.'],
    ],
  },
  {
    id: 'ph-equations-1',
    unit: 'ph-f5-kinematics',
    n: '5.2',
    title: 'The equations of motion and free fall',
    minutes: 11,
    paper: 'Paper 2',
    tags: ['Kinematics', 'Calculation'],
    body: [
      'For motion with **uniform acceleration**, four equations link the initial velocity **u**, final velocity **v**, acceleration **a**, time **t** and displacement **s**: **v = u + at**; **s = (u + v)t ÷ 2**; **s = ut + ½at²**; **v² = u² + 2as**.',
      'They agree with the graphs: the **gradient** of a velocity-time graph is the acceleration, and the **area** under it is the displacement. On a distance-time graph, the gradient is the speed and a curve shows that the speed is changing.',
      'Slowing down is a **negative** acceleration (deceleration). From v² = u² + 2as, the **braking distance** grows with the **square** of the speed: doubling the speed makes it four times as long. **Stopping distance = thinking distance + braking distance**; it increases with speed, tiredness, alcohol and drugs, wet or sandy roads and worn tyres.',
      'With no air resistance, every object falls with the same acceleration **g ≈ 10 m/s²** (9.8 m/s²): a feather and a coin fall together in a vacuum. In air, a falling object speeds up until air resistance equals its weight, then falls at a steady **terminal velocity**. g can be measured with a pendulum, a ticker timer or light gates.',
    ],
    figure: 'speed-time',
    examples: [
      {
        q: 'A taxi moving at 20 m/s brakes and stops in 4 s. Find its deceleration and braking distance.',
        steps: [
          'a = (v − u) ÷ t = (0 − 20) ÷ 4 = −5 m/s², a deceleration of 5 m/s².',
          's = (u + v)t ÷ 2 = (20 + 0) × 4 ÷ 2 = 40 m.',
        ],
      },
      {
        q: 'A stone dropped from a bridge hits the water 2 s later. Find its speed on impact and the height of the bridge. (g = 10 m/s²)',
        steps: [
          'v = u + at = 0 + 10 × 2 = 20 m/s.',
          's = ut + ½at² = 0 + ½ × 10 × 2² = 20 m.',
        ],
      },
      {
        q: 'A motorbike speeds up from 5 m/s to 15 m/s over 50 m. Find its acceleration.',
        steps: [
          'v² = u² + 2as: 15² = 5² + 2 × a × 50.',
          '225 = 25 + 100a, so a = 2 m/s².',
        ],
      },
    ],
    tip: 'List **u, v, a, s and t**, write down the three you know, and choose the equation that contains the unknown and no other unknown.',
    check: {
      q: 'Which equation finds s when u, a and t are known?',
      a: ['s = ut + ½at²', 'v = u + at', 'v² = u² + 2as', 'F = ma'],
      why: 'It is the only one of the equations listed that contains s, u, a and t without v.',
    },
    terms: [
      ['Uniform acceleration', 'Acceleration that stays the same.'],
      ['Deceleration', 'Slowing down; a negative acceleration.'],
      ['Terminal velocity', 'The steady speed reached when air resistance equals weight.'],
    ],
  },
  {
    id: 'ph-momentum-2',
    unit: 'ph-motion',
    n: '6.3',
    title: 'Collisions, explosions and impulse',
    minutes: 10,
    paper: 'Paper 2',
    tags: ['Momentum', 'Calculation'],
    body: [
      '**Momentum = mass × velocity** (kg m/s) and is a vector. The **principle of conservation of momentum**: in any collision or explosion, the total momentum before equals the total momentum after, provided no outside force acts.',
      'In a **collision**, bodies may stick together or bounce apart. Kinetic energy is usually lost as heat, sound and in bending the bodies, but momentum is always conserved. In an **explosion** the total momentum before is zero, so the parts fly apart with **equal and opposite** momenta: a rifle recoils, a rocket is pushed forward as it throws hot gas backwards, and a canoe moves back when someone jumps forward from it.',
      'Newton’s second law can be written **F = change in momentum ÷ time**. The product **F × t** is the **impulse**. For a given change in momentum, a longer time means a smaller force. Seat belts, airbags, the crumple zones of cars, padded crash helmets for motorbike riders, bending the knees on landing and drawing the hands back when catching a ball all work by making the stopping time longer.',
    ],
    figure: null,
    examples: [
      {
        q: 'A 0.02 kg bullet leaves a 4 kg rifle at 300 m/s. Find the recoil velocity of the rifle.',
        steps: [
          'Total momentum before = 0.',
          '0 = 0.02 × 300 + 4 × v, so v = −6 ÷ 4 = −1.5 m/s.',
          'The rifle recoils at 1.5 m/s, opposite to the bullet.',
        ],
      },
      {
        q: 'A 1000 kg car moving at 20 m/s hits a wall and stops in 0.1 s. Find the average force. What is the force if a crumple zone makes the stop last 0.5 s?',
        steps: [
          'Change in momentum = 1000 × 20 = 20 000 kg m/s.',
          'In 0.1 s: F = 20 000 ÷ 0.1 = 200 000 N.',
          'In 0.5 s: F = 20 000 ÷ 0.5 = 40 000 N, five times smaller.',
        ],
      },
    ],
    tip: 'Momentum is a vector: choose one direction as **positive** and give velocities in the other direction a **minus** sign.',
    check: {
      q: 'Why does a crash helmet have a soft lining?',
      a: ['It makes the impact last longer, so the force on the head is smaller', 'It makes the helmet lighter', 'It increases the momentum', 'It stops the head at once'],
      why: 'Force = change in momentum ÷ time; the lining crushes slowly and increases the time.',
    },
    terms: [
      ['Conservation of momentum', 'Total momentum stays the same when no outside force acts.'],
      ['Impulse', 'Force multiplied by the time it acts; equal to the change in momentum.'],
      ['Recoil', 'The backward movement of a gun when it fires.'],
    ],
  },
  {
    id: 'ph-equilibrium-1',
    unit: 'ph-forces',
    n: '7.2',
    title: 'Equilibrium, centre of gravity and stability',
    minutes: 10,
    paper: 'Paper 2 & 3',
    tags: ['Moments', 'Calculation'],
    body: [
      'A body is in **equilibrium** when it neither starts to move nor starts to turn. Two conditions must hold: the **resultant force is zero** (upward forces equal downward forces, and so on), and the **resultant moment is zero** about any point (the principle of moments).',
      'The **centre of gravity** is the point where the whole weight seems to act. For a uniform, regular object it is at the geometric centre. For an irregular flat card, hang it from a pin with a **plumb line** beside it and draw the vertical line; repeat from a second hole: the centre of gravity is where the lines cross. It can lie outside the material, as in a ring or a chair.',
      'A body is in **stable** equilibrium if its centre of gravity rises when it is tilted, so it falls back (a cone on its base); **unstable** if its centre of gravity falls when tilted, so it topples (a cone on its point); **neutral** if its centre of gravity stays at the same height (a ball, or a cone on its side).',
      'A body is more stable with a **low centre of gravity** and a **wide base**: racing cars are low and wide, Bunsen burners have heavy bases, and a woman carrying a load on her head keeps it straight above her feet. A lorry or bus loaded high topples easily on a bend, because its weight soon acts outside its base.',
    ],
    figure: 'moments-beam',
    examples: [
      {
        q: 'A uniform metre rule of weight 1 N is pivoted at the 30 cm mark. Where must a 2 N weight hang to balance it?',
        steps: [
          'The rule’s weight acts at its centre, the 50 cm mark, 20 cm from the pivot: its moment is 1 × 20 = 20 N cm clockwise.',
          'The 2 N weight must give 20 N cm anticlockwise: 2 × d = 20, so d = 10 cm.',
          'It hangs 10 cm on the other side of the pivot, at the 20 cm mark.',
        ],
      },
      {
        q: 'A plank 4 m long of weight 200 N rests on supports at its ends. A 600 N man stands 1 m from the left end. Find the force from each support.',
        steps: [
          'Take moments about the left support: R × 4 = 600 × 1 + 200 × 2 = 1000, so the right support gives 250 N.',
          'Upward forces = downward forces: left support = 800 − 250 = 550 N.',
        ],
      },
    ],
    tip: 'Take moments about the point where an **unknown force** acts: that force then has no moment and drops out of the equation.',
    check: {
      q: 'A cone standing on its flat base is in:',
      a: ['Stable equilibrium', 'Unstable equilibrium', 'Neutral equilibrium', 'No equilibrium'],
      why: 'Tilting it raises its centre of gravity, so it falls back to its base.',
    },
    terms: [
      ['Equilibrium', 'A state with no resultant force and no resultant moment.'],
      ['Centre of gravity', 'The point where the whole weight of a body seems to act.'],
      ['Stability', 'How hard it is to topple a body.'],
    ],
  },
];
