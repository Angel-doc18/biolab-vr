// Form 3 Physics lessons for the topics of the MINESEC Form 3 syllabus that the
// first lessons did not cover: laboratory safety and instruments, density in use,
// pressure and boiling, springs, energy sources, levers and machines, lens images
// and the electromagnetic spectrum. Original text written for this app.
// **double asterisks** mark key terms (rendered bold). `examples` are worked
// examples.

export const LESSONS_3 = [
  {
    id: 'ph-lab-1',
    unit: 'ph-measure',
    n: '1.3',
    title: 'Laboratory safety, instruments, mass and weight',
    minutes: 9,
    paper: 'Paper 1, 2 & 3',
    tags: ['Safety', 'Instruments'],
    body: [
      'Practical work uses apparatus that can hurt if it is misused: hot liquids and Bunsen burners, glass, mains electricity, heavy masses and springs under tension. Follow the teacher’s instructions, never eat or drink in the laboratory, tie back long hair, wear **goggles** when heating or stretching springs and wires, report breakages and spills at once, and switch off and unplug apparatus before changing a circuit.',
      '**Hazard signs** warn of danger: a **flame** (flammable), a **skull and crossbones** (toxic), liquid eating into a hand and a surface (**corrosive**), an **exclamation mark** (harmful or irritant), a **lightning flash** (high voltage) and the **trefoil** (radiation). The same signs appear on chemical bottles, fuel stations and electricity poles.',
      'Choose the right instrument: a **balance** measures mass in kilograms or grams, a **newton meter** (spring balance) measures weight and other forces in newtons, a **measuring cylinder** measures the volume of a liquid in cm³, a **thermometer** measures temperature in °C, and a **stopwatch** measures time in seconds. Each instrument has a range and a smallest division; record readings to that precision, and set an electronic balance to zero before weighing.',
      '**Mass** is the amount of matter in a body; it is measured in kilograms and is the same everywhere. **Weight** is the pull of gravity on the mass, measured in newtons: **W = mg**, where g is about **10 N/kg** on Earth and 1.6 N/kg on the Moon. Heating a body does not change its mass; it expands, so its volume grows and its density falls.',
    ],
    figure: null,
    examples: [
      {
        q: 'A bag of rice has a mass of 5 kg. Find its weight on Earth (g = 10 N/kg) and on the Moon (g = 1.6 N/kg).',
        steps: [
          'On Earth: W = mg = 5 × 10 = 50 N.',
          'On the Moon: W = 5 × 1.6 = 8 N.',
          'Its mass is still 5 kg in both places; only the pull of gravity changes.',
        ],
      },
    ],
    tip: 'Never write a measured value without its **unit**, and record it to the **smallest division** of the instrument, for example 24.5 °C for a thermometer read to 0.5 °C.',
    check: {
      q: 'Which instrument measures weight?',
      a: ['A newton meter', 'A beam balance', 'A measuring cylinder', 'A stopwatch'],
      why: 'Weight is a force, measured in newtons with a newton meter. A balance measures mass.',
    },
    terms: [
      ['Mass', 'The amount of matter in a body, in kilograms.'],
      ['Weight', 'The force of gravity on a mass, in newtons.'],
      ['Hazard sign', 'A symbol that warns of a particular danger.'],
    ],
  },
  {
    id: 'ph-density-2',
    unit: 'ph-f3-density',
    n: '2.2',
    title: 'Using density: floating, sinking and choosing materials',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Density', 'Calculation'],
    body: [
      '**Density = mass ÷ volume**, measured in kg/m³ or g/cm³ (1 g/cm³ = 1000 kg/m³). Some densities in kg/m³: air 1.2, cork 240, wood 600 to 900, ice 920, water 1000, sea water 1030, aluminium 2700, steel 7900, copper 8900, lead 11 300 and gold 19 300.',
      '**Relative density** is the density of a substance divided by the density of water; it has no unit. A regular solid’s volume is found from its dimensions, an irregular solid’s by **displacement** of water, and a liquid’s density by weighing a measured volume of it.',
      'An object **floats** in a liquid if its average density is less than the liquid’s, and **sinks** if it is greater. A steel ship floats because the air inside its hull makes its average density low; a life jacket traps air; oil floats on water, which is why oil spills spread over the sea; hot air is less dense than cold air, so a hot-air balloon rises.',
      'Engineers choose materials by density: light **aluminium** for aircraft and window frames, dense **lead** for weights and for shields against radiation, and heavy concrete for the foundations of buildings and bridges.',
      'Heating a substance increases its volume but not its mass, so its **density falls**. Water is unusual: it is densest at **4 °C**, so ice forms on the top of a pond and the water below stays liquid for fish.',
    ],
    figure: null,
    examples: [
      {
        q: 'A metal cube of side 2 cm has a mass of 21.6 g. Find its density and suggest the metal.',
        steps: [
          'Volume = 2 × 2 × 2 = 8 cm³.',
          'Density = 21.6 ÷ 8 = 2.7 g/cm³ = 2700 kg/m³.',
          'This matches aluminium.',
        ],
      },
      {
        q: 'A classroom is 10 m long, 8 m wide and 3 m high. The density of air is 1.2 kg/m³. What mass of air does it hold?',
        steps: [
          'Volume = 10 × 8 × 3 = 240 m³.',
          'Mass = density × volume = 1.2 × 240 = 288 kg, more than the mass of three adults.',
        ],
      },
    ],
    tip: 'Keep units consistent: grams with cm³ gives g/cm³; kilograms with m³ gives kg/m³. Multiply g/cm³ by 1000 to get kg/m³.',
    check: {
      q: 'A liquid has a density of 1.2 g/cm³. Will a solid of density 1.1 g/cm³ float in it?',
      a: ['Yes, because it is less dense than the liquid', 'No, because it is denser than water', 'No, solids always sink', 'Only if it is hollow'],
      why: 'Floating depends on comparing the densities of the object and the liquid it is in.',
    },
    terms: [
      ['Density', 'Mass per unit volume.'],
      ['Relative density', 'Density of a substance divided by the density of water.'],
      ['Displacement', 'Finding a volume from the liquid an object pushes aside.'],
    ],
  },
  {
    id: 'ph-boiling-1',
    unit: 'ph-pressure',
    n: '3.3',
    title: 'Atmospheric pressure, boiling point and the weather',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Atmosphere', 'Boiling point'],
    body: [
      'The air above us presses on everything: **atmospheric pressure** at sea level is about **100 000 Pa** (101 kPa), equal to the pressure of a column of mercury 760 mm high. It falls as we go higher, because there is less air above: at the summit of Mount Cameroon (4095 m) it is only about 60% of its sea-level value.',
      'Water boils when the pressure of its vapour equals the pressure around it. So the **boiling point depends on pressure**: where pressure is low, water boils below 100 °C (about 86 °C on the summit of Mount Cameroon) and food cooks slowly; where pressure is high, as in a **pressure cooker**, water boils at about 120 °C and food cooks quickly.',
      'Air pressure also explains everyday effects: when you suck through a **straw** you lower the pressure in your mouth and the atmosphere pushes the drink up; a **syringe** and a rubber sucker work the same way; your ears "pop" as a car climbs because the pressure outside changes.',
      'Pressure is linked to the **weather**. Falling pressure usually brings cloud, wind and rain, because air rises in low-pressure areas, cools and its water vapour condenses; rising or high pressure usually brings dry, settled weather. Weather stations record pressure in hectopascals (1 hPa = 100 Pa; about 1013 hPa at sea level), using an **aneroid barometer**. An aircraft’s altimeter is a barometer marked in heights.',
    ],
    figure: 'barometer',
    examples: [
      {
        q: 'The density of mercury is 13 600 kg/m³. What pressure is exerted by a column of mercury 0.76 m high? (g = 10 N/kg)',
        steps: [
          'p = ρgh = 13 600 × 10 × 0.76.',
          '= 103 360 Pa, about 1.0 × 10⁵ Pa: the pressure of the atmosphere at sea level.',
        ],
      },
      {
        q: 'On a mountain a barometer reads 600 mm of mercury. Find the atmospheric pressure there.',
        steps: [
          'p = ρgh = 13 600 × 10 × 0.600 = 81 600 Pa.',
          'This is lower than at sea level, so water boils below 100 °C there.',
        ],
      },
    ],
    tip: 'Explain a change in boiling point through pressure: **lower pressure, lower boiling point**; **higher pressure, higher boiling point**.',
    check: {
      q: 'Why do beans take longer to cook in an open pot high on a mountain?',
      a: ['Water boils at a lower temperature there', 'The fire is less hot', 'Beans are harder there', 'Water boils at a higher temperature there'],
      why: 'The lower air pressure lowers the boiling point, so the food cooks at a lower temperature.',
    },
    terms: [
      ['Atmospheric pressure', 'The pressure caused by the weight of the air above.'],
      ['Barometer', 'An instrument that measures atmospheric pressure.'],
      ['Boiling point', 'The temperature at which a liquid boils; it depends on pressure.'],
    ],
  },
  {
    id: 'ph-hooke-2',
    unit: 'ph-f3-elastic',
    n: '4.2',
    title: 'Springs at work: investigating and using Hooke’s law',
    minutes: 10,
    paper: 'Paper 2 & 3',
    tags: ['Practical', 'Calculation'],
    body: [
      'To investigate a spring, hang it from a clamp beside a metre rule with a pointer on its end, and record its **original length**. Add masses 100 g at a time (each adds about 1 N), read the new length each time and work out the **extension**. Take readings again as the masses are removed: if the spring returns to its original length, the **elastic limit** was not passed.',
      'A graph of extension against load that is a straight line through the origin shows that the spring obeys **Hooke’s law**; the **spring constant** k = load ÷ extension. Rubber bands and nylon thread do not give straight lines: rubber stretches easily at first and then becomes stiff, and copper wire becomes **plastic** and stays stretched.',
      'Two identical springs side by side (in **parallel**) share the load, so each stretches **half** as much; two springs end to end (in **series**) each carry the full load, so the total extension **doubles**.',
      'A stretched or compressed spring stores **elastic potential energy**, equal to the area under its force-extension graph: **E = ½Fe** while Hooke’s law is obeyed. A catapult changes this energy into the kinetic energy of the stone. Springs are used in spring balances, mattresses, door closers, car suspensions and the shock absorbers of motorbikes.',
    ],
    figure: 'hooke-apparatus',
    examples: [
      {
        q: 'A spring of natural length 20 cm stretches to 23 cm with a 6 N load. Find k, and its length with a 10 N load (within the limit of proportionality).',
        steps: [
          'Extension = 23 − 20 = 3 cm = 0.03 m, so k = F ÷ e = 6 ÷ 0.03 = 200 N/m.',
          'With 10 N: e = F ÷ k = 10 ÷ 200 = 0.05 m = 5 cm.',
          'New length = 20 + 5 = 25 cm.',
        ],
      },
      {
        q: 'How much energy is stored in the spring when the 6 N load stretches it by 3 cm?',
        steps: [
          'E = ½Fe = ½ × 6 × 0.03.',
          '= 0.09 J.',
        ],
      },
    ],
    tip: 'Extension is always measured from the **unstretched length**, not from the previous reading.',
    check: {
      q: 'Two identical springs side by side support a load. Compared with one spring, the extension is:',
      a: ['Halved', 'Doubled', 'The same', 'Four times as big'],
      why: 'Each spring carries half the load, so each stretches half as much.',
    },
    terms: [
      ['Spring constant', 'The force needed per unit extension of a spring.'],
      ['Elastic limit', 'The largest load after which a spring still returns to its length.'],
      ['Elastic potential energy', 'Energy stored in a stretched or squashed object.'],
    ],
  },
  {
    id: 'ph-sources-1',
    unit: 'ph-f3-work',
    n: '5.3',
    title: 'Energy sources in Cameroon and energy conversions',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Energy resources', 'Efficiency'],
    body: [
      'Energy exists in many forms: **kinetic**, gravitational and elastic **potential**, **chemical**, **thermal**, **electrical**, **light**, **sound** and **nuclear**. Devices convert energy from one form to another: a torch changes chemical energy into electrical energy and then into light and heat; a radio changes electrical energy into sound; a green plant changes light energy into chemical energy.',
      'Most of Cameroon’s electricity comes from **hydroelectric** dams: Song Loulou, Edéa and Nachtigal on the Sanaga, Lagdo on the Bénoué and Memve’ele on the Ntem, with the Lom Pangar dam storing water to keep the Sanaga flowing in the dry season. Thermal power stations burn natural gas (at Kribi) or diesel. **Solar** power stations at Maroua and Guider and solar panels on homes and street lights use the strong sunshine of the north. Firewood and charcoal remain the main cooking fuels, and **biogas** can be made from animal dung.',
      '**Renewable** sources (water, sun, wind, biomass) are replaced naturally; **non-renewable** ones (coal, oil, natural gas, uranium) will run out. Hydroelectricity is clean in use but floods land and falls in the dry season; fossil fuels are reliable but release carbon dioxide; solar energy is free and clean but needs sunshine and batteries; firewood is cheap but causes deforestation and smoky kitchens.',
      'No device is perfect: **efficiency = useful energy out ÷ total energy in × 100%**. Saving energy means switching off lights and appliances, using LED bulbs and improved cooking stoves, and insulating cooking pots.',
    ],
    figure: null,
    examples: [
      {
        q: 'A 60 W filament lamp gives out 3 W of light. Find its efficiency and the energy it wastes each minute.',
        steps: [
          'Efficiency = 3 ÷ 60 × 100% = 5%.',
          'Energy supplied in 60 s = 60 × 60 = 3600 J; light given out = 3 × 60 = 180 J.',
          'Wasted (as heat) = 3600 − 180 = 3420 J. An LED lamp giving the same light uses far less energy.',
        ],
      },
    ],
    tip: 'When describing a conversion, list the forms of energy **in order** and name the wasted form, usually **heat** to the surroundings.',
    check: {
      q: 'Which energy conversion happens in a solar panel?',
      a: ['Light energy to electrical energy', 'Electrical energy to light', 'Chemical energy to electrical energy', 'Heat to sound'],
      why: 'Solar cells change the energy of sunlight directly into electrical energy.',
    },
    terms: [
      ['Renewable resource', 'An energy source that is replaced naturally.'],
      ['Non-renewable resource', 'An energy source that will run out.'],
      ['Efficiency', 'Useful energy out as a percentage of energy put in.'],
    ],
  },
  {
    id: 'ph-machines-2',
    unit: 'ph-energy',
    n: '6.2',
    title: 'Levers, inclined planes, wheels and gears',
    minutes: 10,
    paper: 'Paper 2',
    tags: ['Machines', 'Calculation'],
    body: [
      'A **lever** is a rigid bar that turns about a pivot (fulcrum). In a **first-class** lever the pivot is between the effort and the load (crowbar, see-saw, scissors, pliers). In a **second-class** lever the load is between the pivot and the effort (wheelbarrow, nutcracker, bottle opener), so the effort is always less than the load. In a **third-class** lever the effort is between the pivot and the load (the forearm, tweezers, a fishing rod): the effort is larger than the load, but the load moves further and faster.',
      'A lever balances when **effort × its distance from the pivot = load × its distance from the pivot** (the principle of moments, ignoring the weight of the lever and friction).',
      'An **inclined plane** lets a smaller force raise a load: VR = length of the slope ÷ height raised. Ramps for loading lorries and roads that wind up hills use this. A **screw jack** is an inclined plane wound round a cylinder. In a **wheel and axle**, such as the windlass over a well, VR = radius of the wheel ÷ radius of the axle. In **gears**, VR = number of teeth on the driven gear ÷ number of teeth on the driving gear.',
      'On a building site you can see machines at work: wheelbarrows, crowbars, pulley hoists and cranes, ramps, and the gears of a concrete mixer. For every machine, **MA = load ÷ effort**, **VR = distance moved by effort ÷ distance moved by load**, and **efficiency = MA ÷ VR × 100%**.',
    ],
    figure: 'lever-classes',
    examples: [
      {
        q: 'A crowbar 1.2 m long has its pivot 0.2 m from the load. What effort at the end of the bar lifts a 600 N load?',
        steps: [
          'Effort arm = 1.2 − 0.2 = 1.0 m; load arm = 0.2 m.',
          'Effort × 1.0 = 600 × 0.2, so effort = 120 N.',
          'MA = 600 ÷ 120 = 5.',
        ],
      },
      {
        q: 'A man pushes a 500 N barrel up a plank 4 m long onto a lorry 1 m high, using a force of 160 N. Find the efficiency.',
        steps: [
          'Useful work out = load × height = 500 × 1 = 500 J.',
          'Work put in = effort × distance = 160 × 4 = 640 J.',
          'Efficiency = 500 ÷ 640 × 100% = 78%.',
        ],
      },
    ],
    tip: 'Find **MA from the forces** and **VR from the distances** (or the design), then efficiency = MA ÷ VR × 100%.',
    check: {
      q: 'Which lever has the effort between the pivot and the load?',
      a: ['The human forearm lifting a weight', 'A wheelbarrow', 'A crowbar', 'A pair of scissors'],
      why: 'The biceps pulls between the elbow (pivot) and the hand (load): a third-class lever.',
    },
    terms: [
      ['Fulcrum', 'The pivot about which a lever turns.'],
      ['Mechanical advantage', 'Load divided by effort.'],
      ['Velocity ratio', 'Distance moved by the effort divided by distance moved by the load.'],
    ],
  },
  {
    id: 'ph-lens-2',
    unit: 'ph-light',
    n: '7.4',
    title: 'Images formed by lenses and optical instruments',
    minutes: 10,
    paper: 'Paper 2 & 3',
    tags: ['Ray diagrams', 'Calculation'],
    body: [
      'A **converging (convex)** lens is thicker in the middle; it acts like a set of small prisms that bend rays towards the axis. A **diverging (concave)** lens is thinner in the middle and spreads rays out. Rays parallel to the axis meet at the **principal focus** F of a converging lens; the **focal length** f is the distance from the centre of the lens to F.',
      'To find an image, draw two of three rays from the top of the object: a ray **parallel to the axis** refracts through F; a ray through the **optical centre** goes straight on; a ray **through F** comes out parallel. The image is where the rays meet.',
      'For a converging lens: an object **beyond 2F** gives a real, inverted, diminished image (the camera and the eye); at **2F**, a real, inverted image of the same size; **between F and 2F**, a real, inverted, magnified image (a projector); **inside F**, a virtual, upright, magnified image on the same side as the object (a **magnifying glass**).',
      'The **lens formula** is 1/f = 1/u + 1/v (u = object distance, v = image distance, positive for real images), and the **magnification** m = v ÷ u = image height ÷ object height. In the **eye**, the lens forms a real, inverted, diminished image on the retina; short sight is corrected with a diverging lens and long sight with a converging lens.',
    ],
    figure: 'converging-lens',
    examples: [
      {
        q: 'An object stands 30 cm from a converging lens of focal length 10 cm. Find the position and nature of the image.',
        steps: [
          '1/v = 1/f − 1/u = 1/10 − 1/30 = 2/30, so v = 15 cm on the other side of the lens.',
          'm = v ÷ u = 15 ÷ 30 = 0.5.',
          'The image is real, inverted and half the size of the object.',
        ],
      },
    ],
    tip: 'Draw rays with a **ruler**, put **arrows** on them, and draw a virtual image and the rays that only seem to come from it with **dashed** lines.',
    check: {
      q: 'A projector throws a large, real image onto a screen. Where must the slide be?',
      a: ['Between F and 2F', 'Inside F', 'Exactly at F', 'Beyond 2F'],
      why: 'An object between F and 2F gives a real, inverted, magnified image beyond 2F.',
    },
    terms: [
      ['Principal focus', 'The point where rays parallel to the axis meet after the lens.'],
      ['Real image', 'An image that can be formed on a screen.'],
      ['Virtual image', 'An image that rays only appear to come from.'],
    ],
  },
  {
    id: 'ph-spectrum-2',
    unit: 'ph-light',
    n: '7.5',
    title: 'Dispersion, colour and the uses and dangers of electromagnetic waves',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Spectrum', 'Health'],
    body: [
      'A glass **prism** refracts light at both faces. White light is split (**dispersed**) into a **spectrum**: red, orange, yellow, green, blue, indigo and violet. Violet is bent most because it slows down most in glass. A rainbow is dispersion of sunlight by raindrops. An object looks red because it reflects red light and absorbs the other colours.',
      'Light is one part of the **electromagnetic spectrum**: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays, in order of decreasing wavelength and increasing frequency and energy. All are transverse waves that travel at **3 × 10⁸ m/s** in a vacuum and carry energy.',
      'Uses: **radio waves** for radio and television broadcasts; **microwaves** for mobile phones, satellite links and cooking; **infrared** for TV remote controls, night-vision cameras and toasters; **visible light** for seeing and optical fibres; **ultraviolet** for sterilising water and checking banknotes, whose hidden marks glow; **X-rays** for photographs of bones and airport security; **gamma rays** for killing cancer cells and sterilising medical equipment.',
      'Infrared is **detected** by its heating effect, for example with a thermometer whose bulb is blackened; ultraviolet by fluorescent materials that glow and by photographic film; X-rays by photographic film. The waves of higher frequency are **dangerous**: ultraviolet causes sunburn, skin cancer and cataracts, while X-rays and gamma rays damage cells and can cause cancer, so radiographers stand behind lead screens and patients receive the smallest dose needed.',
    ],
    figure: 'em-spectrum',
    examples: [
      {
        q: 'Green light has a wavelength of 5 × 10⁻⁷ m. Find its frequency.',
        steps: [
          'f = v ÷ λ = 3 × 10⁸ ÷ (5 × 10⁻⁷).',
          '= 6 × 10¹⁴ Hz.',
        ],
      },
    ],
    tip: 'Learn the order of the spectrum and remember that **all** electromagnetic waves travel at the **same speed** in a vacuum; only their wavelength and frequency differ.',
    check: {
      q: 'Which electromagnetic waves do TV remote controls use?',
      a: ['Infrared', 'Ultraviolet', 'X-rays', 'Gamma rays'],
      why: 'The remote sends coded pulses of infrared to a detector in the television.',
    },
    terms: [
      ['Dispersion', 'The splitting of white light into its colours.'],
      ['Spectrum', 'The band of colours, or of waves, in order of wavelength.'],
      ['Electromagnetic wave', 'A transverse wave that travels at 3 × 10⁸ m/s in a vacuum.'],
    ],
  },
];
