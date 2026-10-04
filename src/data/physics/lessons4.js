// Form 4 Physics lessons for the topics of the MINESEC Form 4 syllabus that the
// first lessons did not cover: thermometers and calibration, heat in daily life
// and the climate, stationary waves, notes and echoes, electrostatics, circuit
// calculations and house wiring. Original text written for this app.
// **double asterisks** mark key terms (rendered bold). `examples` are worked
// examples.

export const LESSONS_4 = [
  {
    id: 'ph-thermo-2',
    unit: 'ph-f4-temperature',
    n: '1.2',
    title: 'Thermometers: fixed points, calibration and types',
    minutes: 10,
    paper: 'Paper 1, 2 & 3',
    tags: ['Thermometry', 'Calculation'],
    body: [
      '**Temperature** tells how hot or cold a body is; it depends on the average kinetic energy of its particles. **Heat** is energy that flows from a hotter body to a colder one. A thermometer uses a **thermometric property** that changes steadily with temperature: the expansion of a liquid, the resistance of a wire, or the voltage of a thermocouple.',
      'A scale needs two **fixed points**. The **lower fixed point** (0 °C) is the temperature of pure melting ice; the **upper fixed point** (100 °C) is the temperature of steam above pure water boiling at standard atmospheric pressure. To **calibrate** a thermometer, mark the liquid level at both points and divide the distance into 100 equal parts. Then θ = (l − l₀) ÷ (l₁₀₀ − l₀) × 100.',
      '**Mercury** is used because it is a good conductor, easy to see, expands evenly and works from −39 °C to 357 °C. **Alcohol** freezes only at about −115 °C, so it suits very cold places, but it boils at 78 °C. A thermometer is made **sensitive** with a narrow bore, so that a small expansion gives a long movement of the thread, and **quick** with a thin-walled bulb.',
      'A **clinical thermometer** reads from about 35 °C to 42 °C. A **constriction** in the tube stops the thread falling back, so it can be read after it leaves the patient; it is shaken down before use and cleaned with alcohol. A temperature above about 37.5 °C is a **fever**, a common sign of malaria. Digital thermometers are now common in health centres.',
      'The **Kelvin scale** starts at absolute zero: **T (K) = θ (°C) + 273**.',
    ],
    figure: 'clinical-thermometer',
    examples: [
      {
        q: 'An unmarked thermometer has a column 3.0 cm long in melting ice and 18.0 cm long in steam. What is the temperature when the column is 9.0 cm long?',
        steps: [
          'Length above the ice point = 9.0 − 3.0 = 6.0 cm; length for 100 °C = 18.0 − 3.0 = 15.0 cm.',
          'θ = 6.0 ÷ 15.0 × 100 = 40 °C.',
        ],
      },
      {
        q: 'Convert 27 °C and −73 °C into kelvin.',
        steps: [
          '27 + 273 = 300 K.',
          '−73 + 273 = 200 K.',
        ],
      },
    ],
    tip: 'In calibration questions always **subtract the ice-point length first**: use the length above the 0 °C mark.',
    check: {
      q: 'Why is the bore of a clinical thermometer very narrow?',
      a: ['A small expansion gives a long movement of the thread, so it is sensitive', 'It keeps the mercury cold', 'It makes it cheaper', 'So it can measure 100 °C'],
      why: 'With a narrow bore, each 0.1 °C rise moves the thread a visible distance.',
    },
    terms: [
      ['Fixed point', 'A standard temperature used to mark a thermometer scale.'],
      ['Calibration', 'Marking a scale on an instrument from known values.'],
      ['Thermometric property', 'A property that changes steadily with temperature.'],
    ],
  },
  {
    id: 'ph-climate-1',
    unit: 'ph-thermal',
    n: '2.3',
    title: 'Heat in everyday life and the climate',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Applications', 'Climate'],
    body: [
      'Water has a very high **specific heat capacity** (4200 J/(kg °C)): it takes in a lot of heat before it gets hot. Car radiators and hot-water bottles use this. It also explains **sea breezes** in coastal towns such as Limbe and Kribi: by day the land heats up faster than the sea, warm air over the land rises, and cooler air flows in from the sea; at night the land cools faster and a **land breeze** blows out to sea.',
      '**Evaporation** cools: sweat takes heat from the skin as it evaporates, water in a clay pot stays cool because water seeping through the pot evaporates from its surface, and a refrigerator works by evaporating a special liquid inside its pipes.',
      'Trapped **air** is a poor conductor, so it is a good **insulator**: thatch, ceiling boards, woollen clothes and feathers all trap air. Shiny or white roofs reflect sunlight and keep houses cooler. A **vacuum flask** stops conduction and convection with its vacuum, radiation with its silvered walls, and evaporation with its stopper.',
      'The **greenhouse effect**: sunlight passes through the air and warms the Earth, which gives out infrared radiation; carbon dioxide, methane and water vapour absorb some of it and keep the Earth warm. Burning fuels and cutting down forests add carbon dioxide, so the Earth is warming: rains become less regular, droughts hit the Far North, floods are more frequent and Lake Chad has shrunk. Planting trees, using renewable energy and saving fuel all help.',
    ],
    figure: null,
    examples: [
      {
        q: 'A car radiator holds 5 kg of water. How much heat does the water absorb when it warms from 30 °C to 90 °C? (c = 4200 J/(kg °C))',
        steps: [
          'Q = mcΔθ = 5 × 4200 × (90 − 30).',
          '= 1 260 000 J = 1.26 MJ, carried away from the hot engine.',
        ],
      },
    ],
    tip: 'Explain each everyday effect by naming the process: **conduction**, **convection**, **radiation** or **evaporation**.',
    check: {
      q: 'Why does a breeze blow from the sea to the land during the day?',
      a: ['The land heats faster, warm air over it rises and cooler sea air moves in', 'The sea is warmer than the land by day', 'Wind always blows inland', 'Cold air rises over the land'],
      why: 'Land has a lower specific heat capacity than water, so it warms faster in sunshine and convection currents form.',
    },
    terms: [
      ['Sea breeze', 'A daytime wind from the sea to the land.'],
      ['Greenhouse effect', 'Warming of the Earth by gases that trap infrared radiation.'],
      ['Insulator', 'A material that does not conduct heat well.'],
    ],
  },
  {
    id: 'ph-stationary-1',
    unit: 'ph-waves',
    n: '3.3',
    title: 'Interference, stationary waves and resonance',
    minutes: 10,
    paper: 'Paper 2',
    tags: ['Stationary waves', 'Calculation'],
    body: [
      'When two waves meet, their displacements add (**superposition**). Where crest meets crest they reinforce (**constructive interference**); where crest meets trough they cancel (**destructive interference**). Two dippers in a ripple tank give lines of calm and rough water; two loudspeakers playing the same note give loud and quiet places in a room.',
      'When two identical waves travel in **opposite** directions, such as a wave and its reflection, they form a **stationary wave**. It has **nodes**, points that do not move, and **antinodes**, points of largest vibration, halfway between them. The distance between neighbouring nodes is **half a wavelength**. Energy is not carried along a stationary wave.',
      'A plucked string, as on a guitar or the **mvet** harp-zither, is fixed at both ends, so its ends are nodes. In its simplest vibration (the **fundamental**) the string is half a wavelength long: λ = 2L and f = v ÷ 2L. It can also vibrate at 2f, 3f and so on (**overtones**). The frequency rises when the string is shorter, tighter or lighter.',
      '**Resonance** happens when a body is made to vibrate at its own natural frequency: the vibrations grow large. A tuning fork held over a tube of air resonates when the air column is the right length, which is used to measure the speed of sound. Resonance tunes a radio to a station, but it can also shatter glass or shake bridges.',
    ],
    figure: 'stationary-wave',
    examples: [
      {
        q: 'A guitar string 0.65 m long vibrates in its fundamental mode at 196 Hz. Find the wavelength and the speed of the waves on the string.',
        steps: [
          'In the fundamental mode the string is half a wavelength: λ = 2 × 0.65 = 1.30 m.',
          'v = fλ = 196 × 1.30 = 255 m/s.',
        ],
      },
      {
        q: 'In a tube closed at one end, the first resonance with a 512 Hz tuning fork occurs when the air column is 16.5 cm long. Estimate the speed of sound (ignore the end correction).',
        steps: [
          'The first resonance occurs when the column is a quarter of a wavelength: λ = 4 × 0.165 = 0.66 m.',
          'v = fλ = 512 × 0.66 = 338 m/s.',
        ],
      },
    ],
    tip: 'Remember: **node to node** is half a wavelength; **node to the next antinode** is a quarter of a wavelength.',
    check: {
      q: 'The nodes of a stationary wave on a string are 20 cm apart. The wavelength is:',
      a: ['40 cm', '20 cm', '10 cm', '80 cm'],
      why: 'Neighbouring nodes are half a wavelength apart, so λ = 2 × 20 = 40 cm.',
    },
    terms: [
      ['Node', 'A point on a stationary wave that does not move.'],
      ['Antinode', 'A point of largest vibration on a stationary wave.'],
      ['Resonance', 'Large vibrations when a body is driven at its natural frequency.'],
    ],
  },
  {
    id: 'ph-sound-2',
    unit: 'ph-f4-sound',
    n: '4.2',
    title: 'Notes, echoes and ultrasound',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Sound', 'Calculation'],
    body: [
      'A musical note has three characteristics. **Pitch** depends on frequency: a high frequency gives a high note. **Loudness** depends on amplitude. **Quality** (timbre) depends on the overtones mixed with the fundamental, which is why a balafon and a guitar playing the same note sound different. On an oscilloscope, a taller trace means a louder sound and more waves on the screen mean a higher pitch. A noise has irregular vibrations; a note has regular ones.',
      'An **echo** is reflected sound. It is heard separately only if it returns at least 0.1 s after the original sound, so the reflecting surface must be at least about 17 m away. Sound travels at about **340 m/s** in air, 1500 m/s in water and 5000 m/s in steel, and a little faster in warm air than in cold air.',
      'To measure the speed of sound, stand a measured distance from a large wall, clap and time the echo (or clap in step with the echoes and time 20 claps): **speed = 2 × distance ÷ time**, because the sound goes there and back. In a large hall, many reflections (**reverberation**) blur speech, so curtains and soft seats are used to absorb sound.',
      '**Ultrasound** has frequencies above 20 000 Hz. Ships use it in **echo sounding** (sonar) to find the depth of the sea and shoals of fish; doctors use it to scan unborn babies safely; bats find their way with it. Very loud sound, from generators, motorbikes or loudspeakers, damages hearing over time.',
    ],
    figure: null,
    examples: [
      {
        q: 'A fishing boat sends an ultrasound pulse to the sea bed, and the echo returns 0.4 s later. Sound travels at 1500 m/s in sea water. How deep is the sea?',
        steps: [
          'Distance travelled = 1500 × 0.4 = 600 m, there and back.',
          'Depth = 600 ÷ 2 = 300 m.',
        ],
      },
      {
        q: 'A student 85 m from a wall claps and hears the echo 0.5 s later. Find the speed of sound.',
        steps: [
          'The sound travels 2 × 85 = 170 m.',
          'Speed = 170 ÷ 0.5 = 340 m/s.',
        ],
      },
    ],
    tip: 'For echoes the sound travels **there and back**: use **twice** the distance to the reflecting surface.',
    check: {
      q: 'Why does a whistle give a higher note than a drum?',
      a: ['Its vibrations have a higher frequency', 'It is louder', 'Its amplitude is larger', 'Sound travels faster from it'],
      why: 'Pitch depends only on frequency.',
    },
    terms: [
      ['Pitch', 'How high or low a note sounds; it depends on frequency.'],
      ['Echo', 'A reflected sound heard after the original.'],
      ['Ultrasound', 'Sound above 20 000 Hz, too high for humans to hear.'],
    ],
  },
  {
    id: 'ph-static-1',
    unit: 'ph-f4-static',
    n: '5.1',
    title: 'Electric charge, conductors and the electroscope',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Electrostatics', 'Induction'],
    body: [
      'Atoms contain positive **protons**, fixed in the nucleus, and negative **electrons** outside it, which can move. A body with equal numbers is neutral. When two different insulators are **rubbed** together, electrons move from one to the other: polythene rubbed with wool gains electrons and becomes **negative**; perspex or cellulose acetate rubbed with silk loses electrons and becomes **positive**.',
      '**Like charges repel and unlike charges attract**, and the force gets weaker as the charges move apart. A charged comb picks up small bits of paper because it induces opposite charges on the near side of the paper.',
      '**Conductors** let charge flow because they have free electrons: metals, graphite, the human body, damp air and the earth. **Insulators** do not: plastic, rubber, glass, dry air and dry wood. Connecting a body to the ground (**earthing**) lets its charge flow away. The unit of charge is the **coulomb** (C); one electron carries 1.6 × 10⁻¹⁹ C.',
      'A conductor can be charged by **induction**: hold a negative rod near a metal sphere, so electrons are pushed to the far side; touch the far side to earth the electrons away; remove the earth connection, then the rod. The sphere is left **positive**, opposite to the rod.',
      'The **gold-leaf electroscope** has a metal cap and rod with a thin gold leaf, inside a glass case. When charged, the leaf and rod repel and the leaf rises. To find the sign of a charge, bring the object near an electroscope with a known charge: if the leaf rises **further**, the charges are alike. Only **repulsion** proves that a body is charged, because a charged body also attracts uncharged ones.',
    ],
    figure: 'electroscope',
    examples: [
      {
        q: 'How many electrons must be added to a rod to give it a charge of −1.6 × 10⁻⁹ C?',
        steps: [
          'Number = total charge ÷ charge on one electron.',
          '= 1.6 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 1 × 10¹⁰ electrons.',
        ],
      },
    ],
    tip: 'Only **electrons** move when bodies are charged. Never say that positive charges moved from one insulator to the other.',
    check: {
      q: 'A negatively charged electroscope’s leaf rises further when a rod is brought near. The rod is:',
      a: ['Negatively charged', 'Positively charged', 'Uncharged', 'A conductor'],
      why: 'A like charge pushes more electrons down to the leaf, so it rises further.',
    },
    terms: [
      ['Induction', 'Charging a body without touching it, by moving its charges.'],
      ['Earthing', 'Connecting a body to the ground so charge can flow away.'],
      ['Electroscope', 'An instrument that detects electric charge.'],
    ],
  },
  {
    id: 'ph-static-2',
    unit: 'ph-f4-static',
    n: '5.2',
    title: 'Lightning, and the dangers and uses of static electricity',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Lightning', 'Applications'],
    body: [
      'In a thundercloud, ice and water particles rub together and charges separate; the base of the cloud usually becomes **negative** and induces a positive charge on the ground below. When the charge is large enough, the air becomes a conductor and a giant spark, **lightning**, flows. It heats the air so suddenly that it expands with a bang: **thunder**. Light arrives almost at once but sound takes about 3 s to travel 1 km.',
      'A **lightning conductor** is a set of pointed metal rods on top of a tall building, joined by a thick copper strip to a metal plate buried in damp earth. Charge flows safely to the ground, and charge leaking from the sharp points (**point action**) reduces the build-up.',
      'During a thunderstorm stay inside a building or a car, keep away from water and from appliances connected to the mains, and unplug the television. Outside, avoid tall isolated trees, hilltops, open fields and water.',
      '**Dangers** of static: sparks near fuel can cause explosions, so aircraft and tankers are earthed while being refuelled and tankers trail a chain on the road; static can damage electronic parts and give shocks from car doors; fine dust in flour mills can explode.',
      '**Uses**: in a **photocopier** or laser printer, a charged drum attracts toner in the pattern of the image; in **spray painting**, charged paint droplets are attracted evenly onto a car body; **electrostatic precipitators** in factory chimneys, such as those of cement works, charge smoke particles and collect them on plates so that cleaner air leaves the chimney.',
    ],
    figure: null,
    examples: [
      {
        q: 'You see a flash of lightning and hear the thunder 6 s later. How far away is the storm? (speed of sound = 340 m/s)',
        steps: [
          'The light arrives almost instantly, so the 6 s is the time taken by the sound.',
          'Distance = 340 × 6 = 2040 m, about 2 km.',
        ],
      },
    ],
    tip: 'For every use or danger of static electricity, explain it with charges **attracting**, **repelling** or **flowing to earth**.',
    check: {
      q: 'Why is an aircraft connected to the ground by a cable before it is refuelled?',
      a: ['So that static charge flows away and no spark can form', 'To hold the aircraft still', 'To pump the fuel faster', 'To charge its batteries'],
      why: 'Friction with the air and the moving fuel builds up charge; a spark near fuel vapour could cause an explosion.',
    },
    terms: [
      ['Lightning conductor', 'A metal rod and strip that lead lightning safely to earth.'],
      ['Point action', 'Leakage of charge from sharp points.'],
      ['Electrostatic precipitator', 'A device that removes smoke particles using electric charge.'],
    ],
  },
  {
    id: 'ph-circuits-2',
    unit: 'ph-electricity',
    n: '6.3',
    title: 'Series and parallel circuits: calculations',
    minutes: 11,
    paper: 'Paper 2 & 3',
    tags: ['Circuits', 'Calculation'],
    body: [
      'In a **series** circuit there is one path: the **current is the same** everywhere, the **p.d.s add up** to the supply (V = V₁ + V₂) and the resistances add (R = R₁ + R₂). If one lamp breaks, the whole circuit stops.',
      'In a **parallel** circuit each branch has the **same p.d.** as the supply, the **branch currents add up** to the supply current (I = I₁ + I₂), and the combined resistance is found from **1/R = 1/R₁ + 1/R₂**; it is always less than the smallest branch resistance. For two resistors, R = R₁R₂ ÷ (R₁ + R₂).',
      'The **e.m.f.** of a cell is the energy it gives to each coulomb of charge (1 V = 1 J/C); the **p.d.** across a component is the energy each coulomb changes into other forms there. Cells in series add their e.m.f.s: two 1.5 V cells in a torch give 3 V. Cells in parallel give the e.m.f. of one cell but last longer.',
      'Two resistors in series share the supply voltage in the ratio of their resistances: a **potential divider**. With a light-dependent resistor or a thermistor in place of one resistor, the output changes with light or temperature, which switches street lights on at dusk.',
      'Method: draw the circuit, find the total resistance, use I = V ÷ R for the supply current, then work out the share of current and p.d. in each part.',
    ],
    figure: 'series-parallel',
    examples: [
      {
        q: 'A 4 Ω and a 12 Ω resistor in parallel are connected in series with a 2 Ω resistor to a 10 V supply. Find the supply current and the current in the 4 Ω resistor.',
        steps: [
          'Parallel pair: R = 4 × 12 ÷ (4 + 12) = 3 Ω. Total resistance = 3 + 2 = 5 Ω.',
          'Supply current I = V ÷ R = 10 ÷ 5 = 2 A.',
          'p.d. across the 2 Ω resistor = 2 × 2 = 4 V, so the parallel pair has 10 − 4 = 6 V.',
          'Current in the 4 Ω resistor = 6 ÷ 4 = 1.5 A (and 0.5 A flows in the 12 Ω resistor).',
        ],
      },
      {
        q: 'Resistors of 2 Ω and 8 Ω are in series across a 20 V supply. Find the p.d. across each.',
        steps: [
          'Current = 20 ÷ (2 + 8) = 2 A.',
          'p.d. across 2 Ω = 2 × 2 = 4 V; across 8 Ω = 2 × 8 = 16 V. Together they make 20 V.',
        ],
      },
    ],
    tip: 'Check your answer: currents **into** a junction equal the currents **out**, and the p.d.s round a series loop add up to the **e.m.f.**',
    check: {
      q: 'Two identical lamps are connected in parallel across a 6 V battery. The p.d. across each lamp is:',
      a: ['6 V', '3 V', '12 V', '0 V'],
      why: 'Each parallel branch is connected directly across the supply.',
    },
    terms: [
      ['Electromotive force', 'The energy a source gives to each coulomb of charge.'],
      ['Series circuit', 'A circuit with only one path for the current.'],
      ['Parallel circuit', 'A circuit with branches, each across the same p.d.'],
    ],
  },
  {
    id: 'ph-domestic-1',
    unit: 'ph-f4-domestic',
    n: '7.2',
    title: 'Wiring a house safely',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Mains electricity', 'Safety'],
    body: [
      'Homes in Cameroon receive **alternating current** at about **220 V** and **50 Hz** from ENEO. A cable has three wires: the **live** wire (brown), at high voltage; the **neutral** wire (blue), close to 0 V; and the **earth** wire (green and yellow), for safety.',
      'House circuits, for lights and for sockets, are connected in **parallel** so that each appliance gets the full voltage and can be switched on its own. Each circuit is protected by a **fuse** or **circuit breaker** in the distribution board, and the **meter** records the energy used. **Switches and fuses go in the live wire**, so that an appliance is disconnected from the high voltage when it is switched off or the fuse melts.',
      'A **fuse** is a thin wire that melts if the current is larger than its rating; choose the rating just above the normal current (3 A, 5 A or 13 A). A **circuit breaker** switches off automatically and can be reset; an **earth-leakage breaker** switches off when current leaks to earth, for example through a person, and so protects life. Metal-cased appliances are **earthed**; plastic-cased ones are **double insulated** and need no earth wire.',
      'Dangers include damaged insulation, overloaded sockets and adaptors, wet hands, illegal connections and fallen power lines. Never pour water on an electrical fire. If someone gets a shock, **switch off the supply first**, or push them free with dry wood, before touching them, then call for help.',
    ],
    figure: 'three-pin-plug',
    examples: [
      {
        q: 'Which fuse, 3 A, 5 A or 13 A, should be fitted to a 1200 W iron on a 220 V supply?',
        steps: [
          'Normal current I = P ÷ V = 1200 ÷ 220 = 5.5 A.',
          'A 5 A fuse would melt at once, so use the next size up: 13 A.',
        ],
      },
      {
        q: 'A family uses a 100 W television for 5 hours a day and a 1500 W iron for 1 hour a week. Find the energy used in a week and its cost at 79 FCFA per kWh.',
        steps: [
          'Television: 0.1 kW × 5 h × 7 days = 3.5 kWh. Iron: 1.5 kW × 1 h = 1.5 kWh.',
          'Total = 5 kWh. Cost = 5 × 79 = 395 FCFA.',
        ],
      },
    ],
    tip: 'To choose a fuse, work out **I = P ÷ V** and pick the **next rating above** that current.',
    check: {
      q: 'Why is a lamp’s switch connected in the live wire?',
      a: ['So the lamp is not at high voltage when it is switched off', 'To save energy', 'So the fuse lasts longer', 'Because the neutral wire carries no current'],
      why: 'With the switch in the neutral wire, the lamp would stay connected to the live supply even when off.',
    },
    terms: [
      ['Live wire', 'The wire at high voltage in a mains cable.'],
      ['Earth wire', 'The safety wire that carries current to the ground in a fault.'],
      ['Circuit breaker', 'A switch that opens automatically when the current is too large.'],
    ],
  },
];
