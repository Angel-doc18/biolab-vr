// Physics lessons, units 7 to 11. Original text written for this app.
// **double asterisks** mark key terms (rendered bold).

export const LESSONS_2 = [
  // ---------------- Unit 7: Waves and sound ----------------
  {
    id: 'ph-waves-1',
    unit: 'ph-waves',
    n: '7.1',
    title: 'Wave properties and the wave equation',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Transverse and longitudinal', 'v = fλ'],
    body: [
      'A **wave** transfers energy from one place to another without transferring matter. The particles of the medium vibrate about fixed positions while the wave moves on.',
      'In a **transverse** wave the vibrations are at right angles to the direction of travel: water waves, waves on a rope and all electromagnetic waves. In a **longitudinal** wave the vibrations are along the direction of travel, making **compressions** and **rarefactions**: sound is longitudinal.',
      'The **amplitude** is the maximum displacement from the rest position. The **wavelength** λ is the distance between neighbouring crests (or compressions). The **frequency** f is the number of waves passing a point each second, in hertz (Hz). The **period** T = 1 ÷ f.',
      'The **wave equation**: **speed = frequency × wavelength**, v = fλ. For a given medium the speed is fixed, so a higher frequency means a shorter wavelength.',
    ],
    figure: 'transverse-wave',
    examples: [
      {
        q: 'A wave of frequency 5 Hz has a wavelength of 0.4 m. Find its speed, and the wavelength of a 10 Hz wave with the same speed.',
        steps: [
          'v = fλ = 5 × 0.4 = 2 m/s.',
          'At 10 Hz: λ = v ÷ f = 2 ÷ 10 = 0.2 m.',
        ],
      },
    ],
    tip: 'Measure wavelength from **crest to crest**, and amplitude from the **middle** (rest line) to a crest, not from crest to trough.',
    check: {
      q: 'Radio waves travel at 3 × 10⁸ m/s. A station broadcasts at 100 MHz. Its wavelength is:',
      a: ['3 m', '0.33 m', '30 m', '300 m'],
      why: 'λ = v ÷ f = 3 × 10⁸ ÷ 1 × 10⁸ = 3 m.',
    },
    terms: [
      ['Wavelength', 'The distance between neighbouring crests.'],
      ['Frequency', 'The number of waves passing a point each second.'],
      ['Amplitude', 'The maximum displacement from the rest position.'],
    ],
  },
  {
    id: 'ph-waves-2',
    unit: 'ph-waves',
    n: '7.2',
    title: 'Reflection, refraction and diffraction of waves',
    minutes: 8,
    paper: 'Paper 1, 2 & 3',
    tags: ['Ripple tank', 'Diffraction'],
    body: [
      'A **ripple tank** shows how water waves behave. A vibrating bar makes straight wavefronts, and a lamp above casts their shadows onto paper below.',
      '**Reflection**: waves bounce off a barrier with the angle of incidence equal to the angle of reflection. The speed, wavelength and frequency are unchanged.',
      '**Refraction**: when waves pass into shallower water they **slow down**, so their wavelength gets shorter. The **frequency stays the same**. If they meet the boundary at an angle, they change direction.',
      '**Diffraction**: waves spread out after passing through a gap or round an edge. Diffraction is most noticeable when the gap is about the same size as the wavelength. This is why you can hear sound round a corner: sound wavelengths are similar in size to doorways.',
    ],
    figure: 'transverse-wave',
    tip: 'For refraction, say **speed changes** and **wavelength changes** but **frequency stays the same**. For diffraction, compare the **gap width** with the wavelength.',
    check: {
      q: 'Which property of a water wave does not change when it moves into shallower water?',
      a: ['Frequency', 'Speed', 'Wavelength', 'Direction (at an angle)'],
      why: 'The frequency is set by the source. Speed falls, so wavelength falls too (v = fλ).',
    },
    terms: [
      ['Wavefront', 'A line joining points on the same crest of a wave.'],
      ['Refraction', 'Change in speed and direction of a wave entering a new medium.'],
      ['Diffraction', 'Spreading of waves through a gap or round an edge.'],
    ],
  },
  {
    id: 'ph-waves-3',
    unit: 'ph-f4-sound',
    n: '7.3',
    title: 'Sound',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Echoes', 'Ultrasound'],
    body: [
      'Sound is a **longitudinal** wave made by a vibrating object. It needs a **medium** (solid, liquid or gas) and cannot travel through a vacuum: a ringing bell in a jar goes silent as the air is pumped out.',
      'The speed of sound is about **340 m/s** in air, about 1500 m/s in water and faster still in solids. Light is so much faster that you see lightning before you hear thunder.',
      'An **echo** is reflected sound. To find the speed of sound, clap near a wall and time the echo: speed = 2 × distance to the wall ÷ time, because the sound travels there and back.',
      '**Pitch** depends on frequency and **loudness** on amplitude. Humans hear from about 20 Hz to 20 000 Hz. **Ultrasound** (above 20 000 Hz) is used for scanning unborn babies, finding flaws in metals and measuring sea depth (sonar).',
    ],
    figure: null,
    examples: [
      {
        q: 'Find the wavelength in air of a note of frequency 680 Hz. (speed of sound = 340 m/s)',
        steps: [
          'λ = v ÷ f = 340 ÷ 680 = 0.5 m.',
        ],
      },
    ],
    tip: 'In echo calculations remember the sound goes **there and back**: distance = speed × time **÷ 2**.',
    check: {
      q: 'A ship’s sonar pulse returns from the sea bed after 0.4 s. Sound travels at 1500 m/s in water. The depth is:',
      a: ['300 m', '600 m', '3750 m', '150 m'],
      why: 'Total distance = 1500 × 0.4 = 600 m; the depth is half: 300 m.',
    },
    terms: [
      ['Echo', 'A reflected sound wave.'],
      ['Pitch', 'How high or low a sound is; set by frequency.'],
      ['Ultrasound', 'Sound above the human hearing range, over 20 kHz.'],
    ],
  },

  // ---------------- Unit 8: Light ----------------
  {
    id: 'ph-light-1',
    unit: 'ph-light',
    n: '8.1',
    title: 'Reflection and plane mirrors',
    minutes: 7,
    paper: 'Paper 1, 2 & 3',
    tags: ['Law of reflection', 'Images'],
    body: [
      'Light travels in straight lines, shown by **rays**. Shadows and the pinhole camera are evidence of this.',
      'When light reflects from a smooth surface, the **angle of incidence equals the angle of reflection**. Both are measured from the **normal**, a line at 90° to the surface. The incident ray, reflected ray and normal lie in the same plane.',
      'The image in a **plane mirror** is **virtual** (it cannot be caught on a screen), **upright**, the **same size** as the object, **laterally inverted** (left and right swapped) and as far behind the mirror as the object is in front.',
      'A **periscope** uses two mirrors at 45° to see over obstacles. Rough surfaces reflect light in all directions (diffuse reflection), which is why we can see most objects from any angle.',
    ],
    figure: 'plane-mirror',
    tip: 'Always draw the **normal** before measuring angles, and add **arrows** to rays to show the direction the light travels.',
    check: {
      q: 'A ray hits a mirror making an angle of 30° with the mirror surface. The angle of reflection is:',
      a: ['60°', '30°', '90°', '120°'],
      why: 'Angles are measured from the normal: 90° − 30° = 60° incidence, so 60° reflection.',
    },
    terms: [
      ['Normal', 'A line at 90° to a surface where a ray meets it.'],
      ['Virtual image', 'An image that cannot be formed on a screen.'],
      ['Lateral inversion', 'Left and right swapped in a mirror image.'],
    ],
  },
  {
    id: 'ph-light-2',
    unit: 'ph-light',
    n: '8.2',
    title: 'Refraction and total internal reflection',
    minutes: 10,
    paper: 'Paper 1, 2 & 3',
    tags: ['Refractive index', 'Critical angle'],
    body: [
      '**Refraction** is the bending of light when it passes from one medium to another, because its speed changes. Entering a denser medium such as glass or water, light slows down and bends **towards the normal**; leaving it, light speeds up and bends **away from the normal**.',
      'The **refractive index** n = sin i ÷ sin r (Snell’s law), where i is in air. It also equals the speed of light in air ÷ the speed in the material. Glass has n ≈ 1.5 and water n ≈ 1.33.',
      'When light inside glass meets the surface at an angle greater than the **critical angle** c, none escapes: it is all reflected. This is **total internal reflection**. sin c = 1 ÷ n, so c ≈ 42° for glass.',
      '**Optical fibres** carry light, and so information, by total internal reflection; doctors use them in endoscopes to see inside the body. Prisms in binoculars use it too, and it makes diamonds sparkle.',
    ],
    figure: ['refraction-block', 'total-internal-reflection'],
    examples: [
      {
        q: 'A ray enters glass at an angle of incidence of 40° and is refracted at 25°. Find the refractive index and the critical angle of the glass.',
        steps: [
          'n = sin i ÷ sin r = sin 40° ÷ sin 25° = 0.643 ÷ 0.423 = 1.52.',
          'sin c = 1 ÷ n = 1 ÷ 1.52 = 0.658, so c = 41°.',
        ],
      },
    ],
    tip: 'Total internal reflection needs **two conditions**: light travelling from the denser medium towards the less dense one, and the angle of incidence **greater than the critical angle**.',
    check: {
      q: 'A material has a refractive index of 2.0. Its critical angle is:',
      a: ['30°', '60°', '45°', '90°'],
      why: 'sin c = 1 ÷ n = 0.5, so c = 30°.',
    },
    terms: [
      ['Refractive index', 'sin i ÷ sin r; how much a material slows light.'],
      ['Critical angle', 'The angle above which total internal reflection happens.'],
      ['Optical fibre', 'A glass fibre that carries light by total internal reflection.'],
    ],
  },
  {
    id: 'ph-light-3',
    unit: 'ph-light',
    n: '8.3',
    title: 'Lenses and the electromagnetic spectrum',
    minutes: 10,
    paper: 'Paper 1, 2 & 3',
    tags: ['Ray diagrams', 'EM spectrum'],
    body: [
      'A **converging (convex) lens** brings parallel rays to the **principal focus** F; the distance from the lens is the **focal length** f. In a ray diagram, a ray parallel to the axis passes through F, and a ray through the centre of the lens is not bent.',
      'An object far from the lens gives a **real, inverted, diminished** image (a camera, the eye). Between F and 2F, the image is real, inverted and magnified (a projector). Closer than F, the image is **virtual, upright and magnified**: the lens is a **magnifying glass**.',
      'White light is split into a **spectrum** by a prism (dispersion): red, orange, yellow, green, blue, indigo, violet. Violet is refracted most.',
      'Light is part of the **electromagnetic spectrum**: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays, in order of increasing frequency and decreasing wavelength. All travel at 3 × 10⁸ m/s in a vacuum. Uses include communication (radio, microwaves), remote controls (infrared), sterilising (ultraviolet) and medical imaging (X-rays).',
    ],
    figure: ['converging-lens', 'em-spectrum'],
    tip: 'Draw ray diagrams with a ruler and use **two rays** from the top of the object; where they meet is the top of the image. Learn the order of the spectrum.',
    check: {
      q: 'An object is placed closer to a converging lens than its focal length. The image is:',
      a: ['Virtual, upright and magnified', 'Real and inverted', 'Real and diminished', 'Virtual and diminished'],
      why: 'This is how a magnifying glass works; the image is on the same side as the object.',
    },
    terms: [
      ['Focal length', 'The distance from the lens to the principal focus.'],
      ['Real image', 'An image that can be formed on a screen.'],
      ['Dispersion', 'Splitting of white light into its colours.'],
    ],
  },

  // ---------------- Unit 9: Electricity ----------------
  {
    id: 'ph-electricity-1',
    unit: 'ph-electricity',
    n: '9.1',
    title: 'Charge, current and potential difference',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Static electricity', 'Current'],
    body: [
      'There are two kinds of **electric charge**, positive and negative. Like charges repel and unlike charges attract. Rubbing a polythene rod with a cloth transfers electrons, leaving the rod negatively charged; this is **static electricity**.',
      'An **electric current** is a flow of charge. In metal wires the charge is carried by **electrons**. **Current = charge ÷ time**, I = Q ÷ t, measured in **amperes** with an **ammeter** connected in **series**.',
      '**Potential difference** (p.d., voltage) is the energy transferred per unit charge between two points: V = W ÷ Q, in **volts** (1 V = 1 J/C), measured with a **voltmeter** connected in **parallel**. The **electromotive force (e.m.f.)** of a cell is the energy it gives to each coulomb.',
      'Conventional current flows from the positive terminal round the circuit to the negative terminal, though electrons actually flow the other way.',
    ],
    figure: 'circuit-symbols',
    examples: [
      {
        q: 'A current of 0.5 A flows for 2 minutes through a lamp with a p.d. of 6 V across it. Find the charge that passes and the energy changed.',
        steps: [
          'Q = It = 0.5 × 120 = 60 C.',
          'E = QV = 60 × 6 = 360 J.',
        ],
      },
    ],
    tip: 'Ammeters go in **series**, voltmeters in **parallel**. Remember Q = It: 1 coulomb is the charge carried by 1 A in 1 s.',
    check: {
      q: 'A charge of 30 C flows through a lamp in 1 minute. The current is:',
      a: ['0.5 A', '30 A', '1800 A', '2 A'],
      why: 'I = Q ÷ t = 30 ÷ 60 = 0.5 A.',
    },
    terms: [
      ['Current', 'The rate of flow of charge, in amperes.'],
      ['Potential difference', 'Energy transferred per coulomb, in volts.'],
      ['Coulomb', 'The unit of charge.'],
    ],
  },
  {
    id: 'ph-electricity-2',
    unit: 'ph-electricity',
    n: '9.2',
    title: 'Resistance, Ohm’s law and circuits',
    minutes: 10,
    paper: 'Paper 1, 2 & 3',
    tags: ['Ohm’s law', 'Series and parallel'],
    body: [
      '**Resistance** R = V ÷ I, in **ohms (Ω)**. **Ohm’s law**: the current through a metal conductor is proportional to the potential difference across it, provided the temperature stays constant. Its current-voltage graph is a straight line through the origin.',
      'A **filament lamp** does not obey Ohm’s law: as it heats up, its resistance increases, so its graph curves. The resistance of a wire is proportional to its **length** and inversely proportional to its **cross-sectional area**.',
      'In a **series** circuit the current is the same everywhere, the supply voltage is shared between the components, and the total resistance is the sum: R = R₁ + R₂.',
      'In a **parallel** circuit each branch gets the full supply voltage, the currents in the branches add up to the total, and the combined resistance is less than the smallest one: 1/R = 1/R₁ + 1/R₂. House lighting is wired in parallel so each lamp can be switched separately.',
    ],
    figure: ['series-parallel', 'ohm-apparatus'],
    examples: [
      {
        q: 'A torch lamp takes a current of 0.25 A from a 3 V battery. Find its resistance.',
        steps: [
          'R = V ÷ I = 3 ÷ 0.25 = 12 Ω.',
        ],
      },
    ],
    tip: 'Use **R = V ÷ I** carefully with the right values: in a series circuit, use the voltage across that component, not the whole supply.',
    check: {
      q: 'Resistors of 3 Ω and 6 Ω are connected in parallel. Their combined resistance is:',
      a: ['2 Ω', '9 Ω', '18 Ω', '4.5 Ω'],
      why: '1/R = 1/3 + 1/6 = 3/6, so R = 2 Ω.',
    },
    terms: [
      ['Resistance', 'Opposition to current, V ÷ I.'],
      ['Ohm’s law', 'Current is proportional to voltage at constant temperature.'],
      ['Parallel circuit', 'A circuit with more than one path for current.'],
    ],
  },
  {
    id: 'ph-electricity-3',
    unit: 'ph-f4-domestic',
    n: '9.3',
    title: 'Electrical power, cost and safety',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['kWh', 'Fuses'],
    body: [
      '**Electrical power P = VI**, in watts. Combined with V = IR, it can also be written P = I²R. Energy transferred = power × time: **E = VIt**.',
      'Electricity bills measure energy in **kilowatt-hours (kWh)**: one kWh is the energy used by a 1 kW appliance in 1 hour (3.6 million joules). **Cost = number of kWh × price per kWh**.',
      'Mains wiring has a **live** wire (brown), a **neutral** wire (blue) and an **earth** wire (green and yellow). A **fuse** in the live wire melts if the current is too large, breaking the circuit before the cable overheats. Choose a fuse rating just above the normal current.',
      'The **earth wire** connects a metal case to the ground: if a fault makes the case live, a large current flows to earth and blows the fuse, so the user is not electrocuted. Dangers include damaged insulation, overloaded sockets and water near electricity.',
    ],
    figure: null,
    examples: [
      {
        q: 'A 1.5 kW cooker is used for 2 hours a day for 30 days. Find the energy used and its cost at 79 FCFA per kWh.',
        steps: [
          'E = P × t = 1.5 kW × (2 × 30) h = 90 kWh.',
          'Cost = 90 × 79 = 7110 FCFA.',
        ],
      },
    ],
    tip: 'To choose a fuse, work out the normal current with **I = P ÷ V**, then pick the **next fuse value above** it.',
    check: {
      q: 'A 2.3 kW kettle runs on 230 V. The best fuse to use is:',
      a: ['13 A', '3 A', '5 A', '30 A'],
      why: 'I = P ÷ V = 2300 ÷ 230 = 10 A, so the next size up, 13 A, is right.',
    },
    terms: [
      ['Kilowatt-hour', 'The energy used by 1 kW for 1 hour.'],
      ['Fuse', 'A thin wire that melts if the current is too large.'],
      ['Earth wire', 'A safety wire connecting a metal case to the ground.'],
    ],
  },

  // ---------------- Unit 10: Magnetism ----------------
  {
    id: 'ph-magnetism-1',
    unit: 'ph-f5-magnets',
    n: '10.1',
    title: 'Magnets, fields and electromagnets',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Magnetic fields', 'Electromagnets'],
    body: [
      'A magnet has a **north pole** and a **south pole**. Like poles repel and unlike poles attract. Iron, steel, nickel and cobalt are **magnetic materials**. **Soft iron** magnetises easily and loses its magnetism easily; **steel** is hard to magnetise but keeps it, so it is used for permanent magnets.',
      'A **magnetic field** is the region where a magnetic force acts. Field lines go from **north to south** outside a magnet; they are closest where the field is strongest, near the poles. A plotting compass or iron filings show the pattern.',
      'A current in a wire produces a magnetic field of circles round the wire. A coil of wire (**solenoid**) carrying current has a field like a bar magnet.',
      'An **electromagnet** is a solenoid with a soft iron core. Its strength increases with **more current**, **more turns** and the iron core, and it can be switched off. Electromagnets are used in electric bells, relays, cranes for scrap iron and door locks.',
    ],
    figure: 'magnetic-field',
    tip: 'Repulsion is the only true test for a magnet: a magnet attracts both ends of an unmagnetised iron bar, but only **repels** another magnet.',
    check: {
      q: 'Why is soft iron used for the core of an electromagnet?',
      a: ['It magnetises strongly and loses its magnetism when the current stops', 'It keeps its magnetism permanently', 'It conducts electricity well', 'It is light'],
      why: 'The electromagnet must switch off when the current stops, so the core must lose its magnetism easily.',
    },
    terms: [
      ['Magnetic field', 'The region round a magnet where a magnetic force acts.'],
      ['Solenoid', 'A long coil of wire.'],
      ['Electromagnet', 'A magnet made by a current in a coil.'],
    ],
  },
  {
    id: 'ph-magnetism-2',
    unit: 'ph-magnetism',
    n: '10.2',
    title: 'The motor effect and the d.c. motor',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Fleming’s left-hand rule', 'Motor'],
    body: [
      'A wire carrying a current in a magnetic field experiences a **force**: this is the **motor effect**. The force is largest when the wire is at 90° to the field and zero when it is parallel to it.',
      '**Fleming’s left-hand rule** gives the direction: hold the thumb and first two fingers of the left hand at right angles; the first finger points along the **field** (N to S), the second finger along the **current**, and the thumb gives the **motion** (the force).',
      'In a **d.c. motor**, a coil sits between the poles of a magnet. The current flows in opposite directions along the two sides, so one side is pushed up and the other down, and the coil turns. A **split-ring commutator** reverses the current every half turn so the coil keeps turning the same way; **carbon brushes** connect it to the supply.',
      'The motor turns faster with **more current**, **more turns** on the coil or a **stronger magnet**. Reversing the current or the field reverses the direction of rotation.',
    ],
    figure: 'dc-motor',
    tip: 'Use the **left** hand for motors (Fleming’s left-hand rule) and explain the job of the **commutator**: it reverses the current every half turn.',
    check: {
      q: 'Which change would make a d.c. motor turn the opposite way?',
      a: ['Reversing the current', 'Using more turns of wire', 'Increasing the current', 'Using a stronger magnet'],
      why: 'Reversing the current (or the field) reverses the forces on the coil. The others change only the speed.',
    },
    terms: [
      ['Motor effect', 'The force on a current-carrying wire in a magnetic field.'],
      ['Commutator', 'A split ring that reverses the current in a motor coil.'],
      ['Fleming’s left-hand rule', 'Gives the direction of the force in the motor effect.'],
    ],
  },
  {
    id: 'ph-magnetism-3',
    unit: 'ph-magnetism',
    n: '10.3',
    title: 'Electromagnetic induction, generators and transformers',
    minutes: 10,
    paper: 'Paper 1, 2 & 3',
    tags: ['Induction', 'Transformers'],
    body: [
      'When the magnetic field through a coil **changes**, for example when a magnet moves in or out, an **e.m.f. is induced** and a current flows if the circuit is complete. This is **electromagnetic induction**. A bigger e.m.f. comes from faster movement, a stronger magnet or more turns.',
      'The induced current always flows in a direction that **opposes** the change that causes it (**Lenz’s law**). Pushing a north pole in makes the near end of the coil a north pole, which pushes back.',
      'An **a.c. generator** (alternator) turns a coil in a magnetic field, inducing an alternating e.m.f.; **slip rings** keep the coil connected to the circuit. Power stations, including hydroelectric stations, use generators.',
      'A **transformer** has two coils on a soft iron core. An alternating current in the primary coil makes a changing field that induces an e.m.f. in the secondary coil: **Vs ÷ Vp = Ns ÷ Np**. Step-up transformers raise the voltage for transmission so the current is small and less energy is wasted as heat in the cables; step-down transformers lower it for homes.',
    ],
    figure: 'transformer',
    examples: [
      {
        q: 'A transformer has 200 turns on its primary and 4000 on its secondary. Find the output voltage when 12 V a.c. is applied.',
        steps: [
          'Vs = Vp × Ns ÷ Np = 12 × 4000 ÷ 200.',
          '= 240 V: a step-up transformer.',
        ],
      },
    ],
    tip: 'Transformers work only with **a.c.**, because a changing field is needed. For an ideal transformer, power in = power out: **VpIp = VsIs**.',
    check: {
      q: 'A transformer steps 230 V down to 11.5 V. Its primary coil has 2000 turns. The secondary has:',
      a: ['100 turns', '40 000 turns', '200 turns', '1000 turns'],
      why: 'Ns = Np × Vs ÷ Vp = 2000 × 11.5 ÷ 230 = 100 turns.',
    },
    terms: [
      ['Electromagnetic induction', 'Producing an e.m.f. by changing a magnetic field.'],
      ['Generator', 'A device that turns kinetic energy into electrical energy.'],
      ['Transformer', 'A device that changes the voltage of an a.c. supply.'],
    ],
  },

  // ---------------- Unit 11: Atomic physics ----------------
  {
    id: 'ph-atomic-1',
    unit: 'ph-atomic',
    n: '11.1',
    title: 'The nuclear atom and isotopes',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Rutherford', 'Nuclide notation'],
    body: [
      'An atom has a tiny, dense, positively charged **nucleus** made of **protons** and **neutrons** (nucleons), with **electrons** orbiting far outside it. Almost all the atom is empty space.',
      'Evidence came from **Rutherford’s alpha-scattering experiment**: alpha particles fired at thin gold foil mostly passed straight through (so the atom is mostly empty), a few were deflected, and a very few bounced back (so the nucleus is small, dense and positive).',
      'An atom is written as ᴬ_Z X: Z is the **proton number** (atomic number) and A is the **nucleon number** (mass number). The number of neutrons is A − Z.',
      '**Isotopes** are atoms of the same element with the same number of protons but different numbers of neutrons, for example carbon-12 and carbon-14. Some isotopes are unstable and **radioactive**.',
    ],
    figure: null,
    tip: 'In nuclide notation the **top** number is the nucleon (mass) number and the **bottom** number is the proton number. Neutrons = top − bottom.',
    check: {
      q: 'How many neutrons are in a nucleus of ²³⁸₉₂U?',
      a: ['146', '92', '238', '330'],
      why: 'Neutrons = 238 − 92 = 146.',
    },
    terms: [
      ['Nucleon number', 'The number of protons plus neutrons.'],
      ['Proton number', 'The number of protons in the nucleus.'],
      ['Isotopes', 'Atoms with the same proton number but different numbers of neutrons.'],
    ],
  },
  {
    id: 'ph-atomic-2',
    unit: 'ph-atomic',
    n: '11.2',
    title: 'Alpha, beta and gamma radiation',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Radiation', 'Decay equations'],
    body: [
      '**Radioactive decay** is the random, spontaneous breakdown of unstable nuclei, giving out radiation. It cannot be changed by heating or chemical reactions.',
      '**Alpha (α)** particles are helium nuclei (2 protons, 2 neutrons). They are strongly ionising but stopped by paper or a few cm of air. **Beta (β)** particles are fast electrons from the nucleus; they are stopped by a few mm of aluminium. **Gamma (γ)** rays are electromagnetic waves; they are weakly ionising and only reduced by thick lead or concrete.',
      'In **alpha decay** the nucleon number falls by 4 and the proton number by 2. In **beta decay** a neutron becomes a proton and an electron, so the proton number rises by 1 and the nucleon number is unchanged. Gamma emission changes neither.',
      'Alpha and beta particles are **deflected** by electric and magnetic fields in opposite directions, because they have opposite charges; gamma rays are not deflected. Radiation is detected with a **Geiger-Muller tube** and counter. **Background radiation** comes from rocks, the air (radon), food, cosmic rays and medical uses.',
    ],
    figure: 'radiation-penetration',
    tip: 'In decay equations, check that the **top numbers** and the **bottom numbers** balance on both sides.',
    check: {
      q: '²¹⁴₈₂Pb decays by beta emission. The new nucleus is:',
      a: ['²¹⁴₈₃Bi', '²¹⁰₈₀Hg', '²¹⁴₈₁Tl', '²¹³₈₃Bi'],
      why: 'Beta decay leaves the nucleon number at 214 and raises the proton number from 82 to 83.',
    },
    terms: [
      ['Ionising', 'Able to knock electrons out of atoms, making ions.'],
      ['Alpha particle', 'A helium nucleus emitted in decay.'],
      ['Background radiation', 'Radiation from natural and man-made sources around us.'],
    ],
  },
  {
    id: 'ph-atomic-3',
    unit: 'ph-atomic',
    n: '11.3',
    title: 'Half-life, uses and safety',
    minutes: 9,
    paper: 'Paper 1, 2 & 3',
    tags: ['Half-life', 'Safety'],
    body: [
      'The **half-life** of a radioactive isotope is the time taken for **half** the nuclei in a sample to decay, or for the count rate to fall to half. It is the same whatever the starting amount: after one half-life ½ is left, after two ¼, after three ⅛.',
      'To find the half-life, plot count rate (after subtracting background) against time and read off the time for the count rate to halve, at two or three places.',
      'Uses depend on the type of radiation and the half-life: **gamma** to sterilise medical equipment and kill cancer cells; **beta** to monitor the thickness of paper; **alpha** in smoke detectors; short half-life gamma emitters as **medical tracers**; carbon-14 for **dating** ancient remains.',
      'Radiation can damage cells and cause cancer. Sources are handled with **tongs**, kept in **lead-lined boxes**, pointed away from people and used for the shortest possible time; workers wear film badges to measure their dose.',
    ],
    figure: ['decay-curve', 'halflife-apparatus'],
    examples: [
      {
        q: 'Iodine-131 has a half-life of 8 days. What mass remains of a 64 g sample after 32 days?',
        steps: [
          '32 days = 32 ÷ 8 = 4 half-lives.',
          '64 → 32 → 16 → 8 → 4 g remain.',
        ],
      },
    ],
    tip: 'In half-life calculations, count how many half-lives have passed and halve that many times. Always **subtract background** first.',
    check: {
      q: 'A source has a count rate of 800 per minute and a half-life of 2 hours. After 6 hours the count rate is:',
      a: ['100 per minute', '200 per minute', '400 per minute', '133 per minute'],
      why: '6 hours is three half-lives: 800 → 400 → 200 → 100.',
    },
    terms: [
      ['Half-life', 'The time for half the nuclei in a sample to decay.'],
      ['Tracer', 'A radioactive isotope followed through a system.'],
      ['Count rate', 'The number of decays detected per minute or second.'],
    ],
  },
];
