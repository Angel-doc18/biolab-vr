// Ordinary Level Physics lessons added from the harmonised scheme of work for
// Forms 3 to 5: reading a vernier caliper, school projects, shadows and eclipses,
// kinds of motion, basic electronics, appliances and energy, practical skills
// and the GCE examination. They sit beside the MINESEC lessons. Original text
// written for this app. **double asterisks** mark key terms.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Paper 1 & 2',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_OL = [
  // ---------- Form 3: measurement ----------
  L(
    'ph-vernier-1',
    'ph-measure',
    '1.3',
    'Reading the vernier caliper and the micrometer, and writing numbers in standard form',
    14,
    ['Measurement', 'Practical'],
    [
      'A metre rule can only measure to the nearest **millimetre**. For smaller objects we use instruments that read to a fraction of a millimetre:\n- the **vernier caliper**, to **0.1 mm** (0.01 cm)\n- the **micrometer screw gauge**, to **0.01 mm**',
      'The **vernier caliper** has a main scale in millimetres and a sliding **vernier scale** with ten divisions that fill 9 mm, so each vernier division is 0.9 mm. To read it:\n- close the jaws on the object (the outside jaws for a diameter, the inside jaws for the inside of a tube, the tail for a depth)\n- read the main scale just before the vernier zero: this gives the whole millimetres\n- find the vernier mark that lines up exactly with a main-scale mark: its number gives the tenths of a millimetre\n- add them: for example 23 mm + 0.7 mm = 23.7 mm',
      'The **micrometer screw gauge** measures small thicknesses such as the diameter of a wire. One turn of the thimble moves the spindle 0.5 mm, and the thimble has 50 divisions, so each division is 0.01 mm. Turn the **ratchet** until it clicks, so the object is not squeezed. Read the sleeve (whole and half millimetres), then add the thimble reading.',
      'Always check for a **zero error**: close the jaws with nothing between them. If the reading is not zero, correct every reading by that amount.',
      'Very large and very small numbers are written in **standard form** (scientific notation): a number between 1 and 10 multiplied by a power of ten.\n- the speed of light, 300 000 000 m/s = 3.0 × 10⁸ m/s\n- the thickness of a hair, 0.000 08 m = 8 × 10⁻⁵ m\nThe power of ten counts how many places the decimal point has moved.',
      'Other instruments: a **beam balance** or a top-pan balance measures **mass**; a spring balance (newton meter) measures **weight**; a **stopwatch** measures time to 0.01 s, but human reaction time (about 0.2 s) is much larger, so time many swings or events and divide.',
    ],
    ['vernier-caliper', 'micrometer'],
    'Give vernier readings to 0.1 mm (two decimal places in cm) and micrometer readings to 0.01 mm. A reading of 2.4 cm on a vernier loses a mark: write 2.40 cm.',
    ['A vernier caliper can measure to the nearest:', ['0.1 mm', '1 mm', '0.01 mm', '1 cm'], 'The micrometer screw gauge reads to 0.01 mm.'],
    [
      ['Vernier caliper', 'An instrument for measuring lengths to 0.1 mm using a main scale and a sliding vernier scale.'],
      ['Micrometer screw gauge', 'An instrument for measuring small thicknesses to 0.01 mm.'],
      ['Zero error', 'A reading shown when the instrument should read zero; it must be subtracted from all readings.'],
      ['Standard form', 'A number written as a value between 1 and 10 multiplied by a power of ten.'],
    ],
    [
      {
        q: 'On a vernier caliper, the main scale reading before the vernier zero is 41 mm and the 4th vernier mark lines up with the main scale. What is the reading in cm?',
        steps: ['Main scale: 41 mm.', 'Vernier: 4 × 0.1 mm = 0.4 mm.', 'Reading = 41.4 mm = 4.14 cm.'],
      },
      {
        q: 'Write 0.000 52 m and 6 400 000 m in standard form.',
        steps: ['0.000 52 m: move the point 4 places right to get 5.2, so 5.2 × 10⁻⁴ m.', '6 400 000 m: move the point 6 places left to get 6.4, so 6.4 × 10⁶ m.'],
      },
    ]
  ),
  L(
    'ph-project-f3',
    'ph-measure',
    '1.4',
    'Physics projects with local materials, and working safely',
    10,
    ['Project', 'Safety'],
    [
      'Physics is learned best by making and testing things. Many useful instruments can be built from cheap local materials. Each project ends with a short report: the aim, the materials, how it was made, how it was tested, and what could be improved.',
      'Project ideas for Form 3:\n- a **pinhole camera** from a tin or a box, with tracing paper as the screen, to show that light travels in straight lines\n- a **periscope** from a long box and two mirrors at 45°, to see over a wall\n- a **simple balance** from a ruler, a pivot and two bottle tops, to compare masses\n- a **spring balance** from a rubber band or spring and a paper scale, calibrated with known masses\n- a **water clock** from a bottle with a small hole, marked in minutes against a watch\n- a **raft or boat** from wood or bottles, to test floating and sinking and how much load it carries',
      'Working safely in the laboratory and on projects:\n- follow the teacher’s instructions and read the method first\n- use sharp tools carefully, cutting away from the body\n- never put your fingers into sockets or touch mains electricity; use only low-voltage cells for circuits\n- do not look directly at the Sun, even through a pinhole or a lens\n- clear up broken glass with a brush, never with bare hands\n- know where the first-aid box and the fire extinguisher are',
      'A good project report includes a **labelled diagram**, a **table of results with units**, and a **conclusion** that says whether the device worked and why.',
    ],
    null,
    'In project reports, always state one way to improve your device. It shows you have thought about the physics behind it.',
    ['A pinhole camera shows that:', ['Light travels in straight lines', 'Light bends around corners', 'Light needs air to travel', 'Light is a sound wave'], 'Rays from the top of the object pass through the hole to the bottom of the screen, so the image is inverted.'],
    [
      ['Calibrate', 'To mark the scale of an instrument by comparing it with known values.'],
      ['Project report', 'A written account of the aim, method, results, conclusion and improvements of a project.'],
    ]
  ),
  L(
    'ph-shadows-1',
    'ph-light',
    '7.1',
    'Light travels in straight lines: the pinhole camera, shadows and eclipses',
    12,
    ['Light'],
    [
      'Light travels in **straight lines** (rectilinear propagation). A narrow stream of light is a **ray**; a group of rays is a **beam**. Objects that make their own light are **luminous** (the Sun, a lamp); others, like the Moon, are **non-luminous** and are seen by the light they reflect.',
      'The **pinhole camera** is a box with a tiny hole at the front and a screen of tracing paper at the back:\n- the image is **real**, **upside down** (inverted) and in colour\n- moving the screen further from the hole makes the image larger but dimmer\n- a larger hole makes the image brighter but **blurred**, because each point of the object makes a patch, not a point\n- magnification = height of image ÷ height of object = distance of image ÷ distance of object',
      'A **shadow** forms where an opaque object blocks the light:\n- a small (point) source gives a sharp, completely dark shadow, the **umbra**\n- a large (extended) source gives a dark **umbra** in the centre, surrounded by a lighter, partial shadow, the **penumbra**',
      '**Eclipses** are giant shadows:\n- an **eclipse of the Sun** (solar eclipse) happens when the **Moon** passes between the Sun and the Earth. People in the Moon’s umbra see a total eclipse; those in the penumbra see a partial one.\n- an **eclipse of the Moon** (lunar eclipse) happens when the **Earth** passes between the Sun and the Moon, and the Moon moves into the Earth’s shadow.\nNever look directly at the Sun, even during an eclipse: it can damage the eyes for ever.',
    ],
    ['shadow-formation', 'eclipses'],
    'In a pinhole camera question, show the inverted image with two rays from the top and bottom of the object crossing at the pinhole.',
    ['An eclipse of the Sun happens when:', ['The Moon is between the Sun and the Earth', 'The Earth is between the Sun and the Moon', 'The Sun is between the Earth and the Moon', 'Clouds cover the Sun'], 'The Moon’s shadow falls on part of the Earth.'],
    [
      ['Rectilinear propagation', 'The travel of light in straight lines.'],
      ['Umbra', 'The region of total shadow where no light from the source reaches.'],
      ['Penumbra', 'The region of partial shadow where only some of the light reaches.'],
      ['Luminous', 'Giving out its own light.'],
    ],
    [
      {
        q: 'A tree 6 m tall is 30 m from a pinhole camera whose screen is 10 cm behind the hole. How tall is the image?',
        steps: ['Magnification = image distance ÷ object distance = 0.10 m ÷ 30 m = 1/300.', 'Image height = 6 m ÷ 300 = 0.02 m = 2 cm.', 'The image is 2 cm tall and inverted.'],
      },
    ]
  ),
  L(
    'ph-motiontypes-1',
    'ph-f5-kinematics',
    '5.1',
    'The four kinds of motion',
    8,
    ['Motion'],
    [
      'Things around us move in four main ways:\n- **Linear (translational) motion**: movement along a line, straight or curved, such as a car on a straight road, a falling stone or a lift.\n- **Random motion**: movement in any direction, changing suddenly, such as smoke particles hit by air molecules (Brownian motion), or gas molecules in a container.\n- **Circular (rotational) motion**: movement around a centre, such as a turning wheel, a ceiling fan, or a satellite in orbit.\n- **Oscillatory motion**: movement to and fro about a fixed point, such as a pendulum, a child on a swing or a vibrating guitar string.',
      'Many objects combine kinds of motion. A rolling bicycle wheel turns (circular) while it moves forward (linear). The Earth spins on its axis and also moves round the Sun.',
      'For oscillations, two quantities are useful:\n- the **period**, T: the time for one complete swing, there and back\n- the **frequency**, f: the number of complete swings per second, measured in hertz (Hz)\nThey are linked: f = 1 ÷ T.',
    ],
    'motion-types',
    'When asked to classify a motion, name the kind and give its key feature: for example, "oscillatory, because the pendulum moves to and fro about a fixed point".',
    ['A child on a swing shows:', ['Oscillatory motion', 'Random motion', 'Circular motion only', 'Linear motion only'], 'It moves to and fro about its resting position.'],
    [
      ['Translational motion', 'Movement from one place to another along a line.'],
      ['Oscillation', 'Repeated to-and-fro movement about a fixed point.'],
      ['Period', 'The time for one complete oscillation.'],
      ['Frequency', 'The number of oscillations per second, in hertz.'],
    ],
    [
      {
        q: 'A pendulum makes 20 complete swings in 30 s. Find its period and frequency.',
        steps: ['Period = 30 s ÷ 20 = 1.5 s.', 'Frequency = 1 ÷ 1.5 = 0.67 Hz.'],
      },
    ]
  ),

  // ---------- Form 5: basic electronics ----------
  L(
    'ph-semi-1',
    'ph-f5-electronics',
    '8.1',
    'Semiconductors, the diode and the light-emitting diode',
    12,
    ['Electronics'],
    [
      'Materials are grouped by how well they conduct:\n- **conductors**, such as copper, have many free electrons and very low resistance\n- **insulators**, such as plastic and rubber, have almost no free electrons\n- **semiconductors**, such as **silicon** and germanium, are in between. Unlike metals, they conduct **better when hot**, because more electrons are freed.',
      'Pure silicon conducts poorly. Adding a tiny amount of another element (**doping**) changes this:\n- **n-type** silicon has extra free electrons (negative carriers)\n- **p-type** silicon has "holes", gaps where an electron is missing, which act as positive carriers',
      'A **diode** is made by joining p-type and n-type silicon. It lets current flow in **one direction only**:\n- **forward bias**: p side to the positive terminal, so current flows (after a small voltage, about 0.7 V for silicon)\n- **reverse bias**: connected the other way, its resistance is very high and almost no current flows\nIn the circuit symbol, the arrow shows the direction in which conventional current can flow.',
      'A **light-emitting diode (LED)** gives out light when forward biased. LEDs are used as indicator lamps, in torches, screens and lighting. They use much less energy than filament bulbs and last much longer. An LED needs a **resistor** in series to limit the current.',
      'Electronics is everywhere: phones, radios, computers and solar lamps all depend on semiconductor devices, many of them on tiny chips (integrated circuits).',
    ],
    ['electronic-materials', 'diode-circuits'],
    'In circuit questions with a diode, first check which way it points. If it is reverse biased, no current flows in that branch.',
    ['A diode connected in reverse bias:', ['Lets almost no current flow', 'Lets current flow freely', 'Gives out light', 'Becomes a conductor when cold'], 'Its resistance is very high in the reverse direction.'],
    [
      ['Semiconductor', 'A material, such as silicon, whose conductivity is between that of a conductor and an insulator.'],
      ['Doping', 'Adding a tiny amount of impurity to a semiconductor to change how it conducts.'],
      ['Diode', 'A component that lets current flow in one direction only.'],
      ['Forward bias', 'A diode connected so that current can flow through it.'],
    ]
  ),
  L(
    'ph-rectify-1',
    'ph-f5-electronics',
    '8.2',
    'From a.c. to d.c.: rectification and the phone charger',
    12,
    ['Electronics'],
    [
      '**Direct current (d.c.)** flows in one direction only, as from a cell or battery. **Alternating current (a.c.)** keeps reversing its direction. Mains electricity in Cameroon is a.c. at **220 V** and **50 Hz**: it changes direction 100 times each second.',
      'Many devices, such as phones, radios and laptops, need **low-voltage d.c.** A charger does two jobs:\n- a **transformer** steps the 220 V a.c. down to a low a.c. voltage\n- a **rectifier** made of diodes changes the a.c. into d.c.',
      '**Half-wave rectification** uses one diode. It lets through only the half-cycles in one direction and blocks the others, so the output is a series of bumps with gaps between them.',
      '**Full-wave rectification** uses four diodes arranged as a **bridge**. Both halves of each cycle are used and turned the same way, so the output has no gaps.',
      'The output of a rectifier still goes up and down. A **capacitor** connected across the output **smooths** it: it charges up at the peaks and gives out charge in between, so the voltage stays nearly steady. The small variation left is called **ripple**.',
    ],
    'rectification',
    'Sketch the output graphs: half-wave has gaps, full-wave has no gaps, and smoothing makes the line nearly flat with small ripples.',
    ['Full-wave rectification with a bridge uses:', ['Four diodes', 'One diode', 'One capacitor only', 'A transformer only'], 'Both halves of each a.c. cycle pass through in the same direction.'],
    [
      ['Alternating current', 'Current that keeps reversing direction.'],
      ['Direct current', 'Current that flows in one direction only.'],
      ['Rectification', 'Changing alternating current into direct current.'],
      ['Smoothing', 'Using a capacitor to make a rectified voltage nearly steady.'],
    ]
  ),

  // ---------- Form 5: appliances, energy and the environment ----------
  L(
    'ph-appliance-1',
    'ph-f5-appliances',
    '9.1',
    'Using and caring for electrical appliances',
    12,
    ['Electricity', 'Safety'],
    [
      'Every appliance has a **rating plate** giving its **voltage** (220 V in Cameroon), its **power** in watts and the **frequency** (50 Hz). Using it on the wrong voltage can damage it or cause a fire.',
      'The **fuse** protects the appliance and its cable. Work out the normal current, I = P ÷ V, and choose the fuse rating just above it. For a 1100 W iron on 220 V, I = 1100 ÷ 220 = 5 A, so a fuse of 6 A is suitable; a 30 A fuse would not protect it.',
      'Before use:\n- read the rating plate and the instructions\n- check the cable and plug for cracks, bare wires or burn marks\n- make sure appliances with metal cases are **earthed**',
      'During use:\n- do not overload a socket with many adaptors\n- the mains voltage can rise and fall suddenly, so protect fridges, televisions and computers with a **voltage stabiliser** or surge protector\n- keep appliances and sockets away from water, and never touch them with wet hands\n- switch off and unplug appliances that are not in use',
      'Maintenance:\n- always **unplug** before cleaning\n- remove dust from vents and fans, so the appliance does not overheat\n- replace damaged cables; do not repair them with tape\n- repairs must be done by a qualified **electrician** or technician\nWell-kept appliances last longer, use less energy and are safer.',
    ],
    'appliance-care',
    'For fuse questions, calculate I = P ÷ V and choose the smallest fuse rating that is above that current.',
    ['A 2200 W cooker works on 220 V. Its normal current is:', ['10 A', '2 A', '100 A', '0.1 A'], 'I = P ÷ V = 2200 ÷ 220 = 10 A.'],
    [
      ['Rating plate', 'The label on an appliance giving its voltage, power and frequency.'],
      ['Fuse', 'A thin wire that melts and breaks the circuit when the current is too large.'],
      ['Voltage stabiliser', 'A device that keeps the voltage supplied to an appliance steady.'],
      ['Earthing', 'Connecting the metal case of an appliance to the earth wire, so a fault cannot make it live.'],
    ]
  ),
  L(
    'ph-sustain-1',
    'ph-f5-appliances',
    '9.2',
    'Energy, sustainability and the environment',
    12,
    ['Energy', 'Environment'],
    [
      'Energy sources are **renewable** (they will not run out) or **non-renewable** (they will run out):\n- renewable: water (hydroelectric), the Sun (solar), wind, biomass (wood, biogas), geothermal\n- non-renewable: crude oil, natural gas, coal and nuclear fuels',
      'Most of Cameroon’s electricity comes from **hydroelectric** power stations on rivers, such as Edéa, Song Loulou and Nachtigal on the Sanaga, Lagdo on the Benue and Memve’ele on the Ntem. **Solar** energy is plentiful, especially in the north, and solar panels and lamps bring light to villages far from the grid.',
      'Burning fossil fuels, wood and charcoal releases **carbon dioxide**, which adds to global warming, and smoke that harms health. Cutting trees for firewood causes deforestation and soil erosion. Building large dams floods land and can move people from their homes.',
      'Using energy **efficiently** means getting the same job done with less energy:\n- use **LED** bulbs, which use far less energy than filament bulbs\n- switch off lights, fans and appliances when not needed\n- choose appliances with good energy labels\n- use improved cooking stoves that need less wood\n- insulate buildings and use natural light and ventilation',
      'Old phones, batteries and other electrical waste (**e-waste**) contain metals that poison soil and water. They should be collected and **recycled**, never burned or thrown into rivers.',
      '**Sustainable** energy use meets our needs today without spoiling the environment for future generations.',
    ],
    'energy-saving',
    'In energy questions, give an advantage and a disadvantage of each source. For example, hydroelectric power is renewable and clean, but dams are costly and flood land.',
    ['Which of these is a renewable energy source?', ['Solar energy', 'Crude oil', 'Natural gas', 'Coal'], 'The Sun will keep shining for billions of years.'],
    [
      ['Renewable energy', 'Energy from sources that are not used up, such as the Sun, wind and water.'],
      ['Efficiency', 'The fraction of the energy supplied that is changed into useful energy.'],
      ['E-waste', 'Discarded electrical and electronic equipment.'],
      ['Sustainable', 'Meeting present needs without harming the ability of future generations to meet theirs.'],
    ]
  ),

  // ---------- Form 5: practical skills and the examination ----------
  L(
    'ph-practical-f5',
    'ph-f5-exam',
    '10.1',
    'Practical skills: tables, graphs and accuracy',
    14,
    ['Practical skills'],
    [
      'The practical paper tests how you **measure**, **record**, **process** and **conclude**.',
      'Tables of results:\n- each column heading gives the **quantity and its unit**, for example "length / cm"\n- give all readings of one quantity to the **same number of decimal places**, matching the instrument (a metre rule to 0.1 cm)\n- repeat readings and calculate the **average**',
      'Graphs:\n- put the quantity you changed (independent variable) on the **x-axis**\n- label both axes with the quantity and unit\n- choose a **scale** that uses more than half of the grid, with easy steps (1, 2, 5 or 10 per square)\n- plot points accurately with small crosses\n- draw a single smooth **line of best fit**, not dot to dot',
      'The **gradient** of a straight line:\n- draw a large right-angled triangle on the line, using more than half of it\n- gradient = rise ÷ run, read from the axes, with units\nIf the line passes through the origin, the two quantities are **directly proportional**.',
      'Accuracy:\n- avoid **parallax** by reading scales with the eye level with the mark\n- check for **zero errors** on meters and gauges\n- time many oscillations, not one, to reduce the effect of reaction time\n- state sources of error and how to reduce them',
    ],
    ['hooke-graph', 'pendulum-apparatus'],
    'A graph loses marks for: no units on the axes, a scale using less than half the grid, awkward scales (3 or 7 per square) and joining the points dot to dot.',
    ['The heading of a column in a table of results should give:', ['The quantity and its unit', 'Only the unit', 'Only the number', 'The date'], 'For example, "time / s".'],
    [
      ['Independent variable', 'The quantity changed on purpose in an experiment; it goes on the x-axis.'],
      ['Line of best fit', 'A single smooth line passing as close as possible to all the points.'],
      ['Gradient', 'The steepness of a line: rise divided by run.'],
      ['Parallax error', 'An error in reading a scale caused by not looking at it straight on.'],
    ],
    [
      {
        q: 'On a graph of extension (cm) against load (N), a straight line passes through (0, 0) and (8.0 N, 4.0 cm). Find the gradient and state the relationship.',
        steps: ['Gradient = rise ÷ run = 4.0 cm ÷ 8.0 N = 0.50 cm/N.', 'The line is straight and passes through the origin, so extension is directly proportional to load.'],
      },
    ]
  ),
  L(
    'ph-gceprep-f5',
    'ph-f5-exam',
    '10.2',
    'Answering the GCE Ordinary Level Physics papers',
    12,
    ['Examination'],
    [
      'The GCE Ordinary Level Physics examination has:\n- **Paper 1**: 50 multiple-choice questions in 1 hour 30 minutes\n- **Paper 2**: 2 hours 30 minutes. Section A has three compulsory questions; in Section B you answer two of three longer questions.\n- **Paper 3**: the practical paper',
      'Calculations, every time:\n- write the **formula** in symbols\n- substitute the values with their units\n- work out the answer and give its **unit**\n- convert units first where needed: g to kg, cm to m, minutes to seconds, kW to W',
      'Learn the key formulae and their units, for example:\n- density = mass ÷ volume (kg/m³)\n- pressure = force ÷ area (Pa)\n- v = f λ (m/s)\n- V = I R (V), P = I V (W)\n- E = m c ΔT (J)\n- F = m a (N)\n- moment = force × perpendicular distance (N m)',
      'Diagrams must be drawn with a ruler and labelled: ray diagrams with arrows on the rays, circuits with correct symbols, and field lines with arrows.',
      'Read the command word: **state**, **describe**, **explain**, **calculate**, **suggest**. "Explain" needs the physics reason, not just a description.',
      'Common mistakes: forgetting units, rounding too early, confusing mass and weight, writing "speed" when the answer needs velocity (with direction), and drawing light rays without arrows.',
    ],
    null,
    'Make a one-page sheet of all the formulae and units, and practise past papers under timed conditions.',
    ['In a calculation, the final answer must always include:', ['Its unit', 'A diagram', 'The question number only', 'A long explanation'], 'A number without a unit loses the mark.'],
    [
      ['Formula', 'A relationship between quantities written in symbols, such as V = IR.'],
    ]
  ),
];
