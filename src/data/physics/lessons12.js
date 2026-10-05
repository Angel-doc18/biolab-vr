// Physics lessons for Forms 1 and 2 (the Physics and Technology part of the
// MINESEC Science and Technology syllabus, first cycle). Written for younger
// readers: short paragraphs and everyday Cameroonian examples. Original text
// written for this app. **double asterisks** mark key terms (rendered bold).
// `examples` are worked examples.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Class work',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_12 = [
  // ======================= Form 1 =======================
  L('ph-science-1', 'ph-f1-science', '1.1', 'What science is and how scientists work', 8, ['Science'], [
    '**Science** is a way of finding out about the world by **observing**, **measuring** and **testing ideas**. Its main branches are **Biology** (living things), **Chemistry** (substances and how they change) and **Physics** (matter, energy, forces and motion). Physics explains why a ball falls, how a radio works and how electricity reaches our homes.',
    'Scientists use **skills**: they observe with their senses, measure with instruments, record results in tables and drawings, look for patterns and explain what they find. They also need good **attitudes**: curiosity, patience, honesty about results, respect for other people’s ideas and the will to work as a team.',
    'Science leads to many **careers**. Physics prepares students to become engineers (civil, electrical, mechanical), doctors and radiographers, pilots, telecommunication technicians, teachers, meteorologists who forecast the weather and technicians who repair machines and phones.',
    'A scientist starts by **observing** something, for example that wet clothes dry faster on sunny days. This raises a **question** that can be investigated with an experiment and careful measurements.',
  ], null, 'When asked to name a scientific skill, choose one that is a **process**: observing, measuring, recording, classifying, predicting or explaining.',
  ['Which of these is studied in Physics?', ['How electricity flows in a circuit', 'How plants make food', 'How diseases spread', 'How rocks are classified'], 'Physics deals with energy, electricity, forces and motion.'],
  [['Science', 'Finding out about the world by observing, measuring and testing ideas.'], ['Physics', 'The study of matter, energy, forces and motion.'], ['Observation', 'Using the senses, or instruments, to notice and record what happens.']],
  [
    { q: 'Amina notices that her phone gets warm while charging. Write one question she could investigate and one measurement she would need.', steps: ['A testable question: **Does the phone get warmer when it charges for longer?**', 'She would measure the **temperature** of the phone with a thermometer at regular **times**, using a clock.', 'She should keep everything else the same, such as the charger and the room, so the test is fair.'] },
  ]),

  L('ph-labsafety-1', 'ph-f1-science', '1.2', 'Basic equipment and safety in the Physics laboratory', 8, ['Safety', 'Apparatus'], [
    'The Physics laboratory has instruments for measuring: a **metre rule** and a **30 cm ruler** for length, a **tape** for long distances, a **balance** for mass, a **measuring cylinder** for volume, a **thermometer** for temperature, a **stopwatch** for time and a **protractor** for angles. There are also burners, lighters, cells, wires, lamps and magnets.',
    'Follow the **safety rules**. Walk, never run, in the laboratory. Do not eat or drink there. Follow the teacher’s instructions and report every accident. Keep water away from electrical apparatus, never touch a socket or bare wire, and switch off and unplug apparatus before changing any connection.',
    'Hot objects look the same as cold ones, so let apparatus cool before touching it and use a holder or tongs. Glass breaks easily: pick up broken glass with a brush and pan, never with your fingers. **Mercury** from a broken thermometer is poisonous: keep away and call the teacher.',
    'At the end of a practical, switch off the gas and electricity, return all apparatus to its place, clean the bench and wash your hands.',
  ], 'lab-apparatus', 'Safety questions often ask for a **reason**: say what could go wrong (a burn, a shock, a cut, poisoning) and how the rule prevents it.',
  ['Why should you switch off the supply before changing the wires in a circuit?', ['To avoid an electric shock or a short circuit', 'To save the bulb', 'To make the circuit work faster', 'To cool the room'], 'Changing connections while the current flows can give a shock or cause sparks.'],
  [['Metre rule', 'A one-metre ruler marked in centimetres and millimetres.'], ['Stopwatch', 'An instrument that measures time.'], ['Safety rule', 'An instruction that prevents accidents in the laboratory.']]),

  L('ph-measuring-1', 'ph-f1-measure', '2.1', 'Units and measuring length and time', 9, ['Measurement'], [
    'To **measure** something is to compare it with a standard amount called a **unit**. Scientists everywhere use the **SI units**: the **metre (m)** for length, the **kilogram (kg)** for mass and the **second (s)** for time. Smaller and larger units are made with prefixes: 1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm.',
    'Length is measured with a ruler, a metre rule or a tape. Place the zero of the scale exactly at one end of the object, keep the ruler along the object and read the other end with your **eye directly above the mark**. Looking from the side gives a wrong reading called a **parallax error**. A rule with a worn end should be read from the 1 cm mark and 1 cm subtracted.',
    'Time is measured with a clock or a **stopwatch**, in seconds, minutes and hours: 1 min = 60 s and 1 h = 60 min = 3600 s. When timing something short, such as one swing of a pendulum, time **many** swings and divide, to reduce the error.',
    'Every measurement has some uncertainty. Repeating a measurement several times and taking the **average** gives a more reliable result.',
  ], null, 'Always write the **unit** after a measurement: 25 is not an answer, 25 cm is.',
  ['A worn ruler is placed with the object starting at the 1.0 cm mark and ending at the 7.5 cm mark. The length of the object is:', ['6.5 cm', '7.5 cm', '8.5 cm', '1.0 cm'], 'Length = 7.5 − 1.0 = 6.5 cm.'],
  [['SI unit', 'One of the standard units used by scientists everywhere, such as the metre.'], ['Parallax error', 'A wrong reading caused by looking at a scale from the side.'], ['Average', 'The sum of several readings divided by the number of readings.']],
  [
    { q: 'A pupil times 20 swings of a pendulum and gets 36 s. Find the time for one swing.', steps: ['Timing many swings reduces the error from starting and stopping the watch.', 'Time for one swing = 36 ÷ 20.', '= **1.8 s**.'] },
    { q: 'Convert 2.4 km into metres, and 450 cm into metres.', steps: ['1 km = 1000 m, so 2.4 km = 2.4 × 1000 = **2400 m**.', '1 m = 100 cm, so 450 cm = 450 ÷ 100 = **4.5 m**.'] },
  ]),

  L('ph-measuring-2', 'ph-f1-measure', '2.2', 'Mass, weight and volume', 10, ['Measurement', 'Practical'], [
    '**Mass** is the amount of matter in a body. It is measured with a **balance** in grams (g) or kilograms (kg): 1 kg = 1000 g. A body’s mass is the same everywhere, on Earth or on the Moon.',
    '**Weight** is the **pull of gravity** on a body. It is a force, measured in **newtons (N)** with a **spring balance**. On Earth, each kilogram weighs about **10 N**, so **weight = mass × 10**. On the Moon, gravity is about one sixth as strong, so things weigh less there, although their mass has not changed. In daily life people say "weight" when they mean mass, as when buying 2 kg of rice.',
    '**Volume** is the space a body takes up, measured in cubic centimetres (cm³) or cubic metres (m³); 1 litre = 1000 cm³. The volume of a liquid is read from a **measuring cylinder** at the bottom of the meniscus. The volume of a regular solid is **length × width × height**.',
    'An **irregular solid**, such as a stone, is lowered into a measuring cylinder partly filled with water. The water level rises; the **rise in level** equals the volume of the stone. This is the **displacement method**. **Density** compares how heavy materials are for their size: density = **mass ÷ volume**. Iron is denser than wood, which is why an iron nail sinks and a block of wood floats.',
  ], 'density-apparatus', 'Do not mix up mass and weight: **mass in kg** (balance), **weight in N** (spring balance), weight = mass × 10 on Earth.',
  ['A stone is lowered into a measuring cylinder and the water rises from 50 cm³ to 68 cm³. The volume of the stone is:', ['18 cm³', '68 cm³', '50 cm³', '118 cm³'], 'Volume = 68 − 50 = 18 cm³.'],
  [['Mass', 'The amount of matter in a body, measured in kilograms.'], ['Weight', 'The pull of gravity on a body, measured in newtons.'], ['Displacement method', 'Finding the volume of a solid from the rise in water level.']],
  [
    { q: 'A bag of cement has a mass of 50 kg. Find its weight on Earth (10 N per kg) and its mass on the Moon.', steps: ['Weight on Earth = mass × 10 = 50 × 10 = **500 N**.', 'Mass does not depend on gravity, so its mass on the Moon is still **50 kg**.'] },
    { q: 'A stone of mass 54 g raises the water in a cylinder from 40 cm³ to 60 cm³. Find its volume and its density.', steps: ['Volume = 60 − 40 = **20 cm³**.', 'Density = mass ÷ volume = 54 ÷ 20.', '= **2.7 g/cm³**.'] },
  ]),

  L('ph-states-1', 'ph-f1-states', '3.1', 'Solids, liquids and gases', 8, ['States of matter'], [
    'Everything around us is **matter**, and matter exists in three **states**: **solid**, **liquid** and **gas**. A stone, a table and ice are solids; water, palm oil and kerosene are liquids; air, steam and cooking gas are gases.',
    'A **solid** has a fixed shape and a fixed volume, because its particles are packed closely and only vibrate in place. A **liquid** has a fixed volume but takes the shape of its container: its particles are close together but can slide past each other. A **gas** has no fixed shape or volume: its particles are far apart and move quickly in all directions, so it spreads to fill any container and can be squashed.',
    'Heating and cooling change the state of a substance. Ice **melts** to water, water **boils** to steam, and steam **condenses** back to water on a cold surface. While ice is melting, the temperature stays at **0 °C** until all the ice has melted: the heat is used to change the state.',
    'This is why ice keeps things cold. Fish packed in ice in an **insulated box** stays cold on a hot market day, because the melting ice takes in heat from the fish while the box slows heat flowing in from outside. In the same way, water in a clay pot stays cool as some water seeps out and **evaporates** from the surface, taking heat away.',
  ], 'particles-states', 'Describe each state using **shape**, **volume** and **how the particles are arranged and move**.',
  ['Which property belongs to a liquid?', ['It has a fixed volume but takes the shape of its container', 'It has a fixed shape', 'It fills any container completely', 'It cannot flow'], 'Liquids flow but cannot be squashed into a smaller volume.'],
  [['Solid', 'A state of matter with a fixed shape and volume.'], ['Liquid', 'A state of matter with a fixed volume that takes the shape of its container.'], ['Gas', 'A state of matter with no fixed shape or volume.']],
  [
    { q: 'A pupil heats crushed ice and records its temperature every minute: −4, −2, 0, 0, 0, 0, 3, 7 °C. Explain the readings.', steps: ['From −4 to 0 °C the **ice warms up**.', 'The temperature then **stays at 0 °C** for several minutes: the ice is **melting**, and the heat is used to change solid to liquid.', 'Once all the ice has melted, the **water warms up** (3, then 7 °C).'] },
  ]),

  L('ph-services-1', 'ph-f1-states', '3.2', 'Using services wisely: labels, meters and safety', 8, ['Consumer science'], [
    'Products we buy carry **labels** with important information: the name, the quantity (mass in g or kg, volume in mL or L), the ingredients, how to use and store the product, warnings and the **expiry date**. Medicines come with a **leaflet** giving the correct dose. Always read the label before using a product, and never use medicine after its expiry date.',
    'Electrical appliances have a **rating plate** that gives the voltage (220 V in Cameroon) and the **power** in watts (W). A 2000 W iron uses energy much faster than a 10 W energy-saving lamp. Gas bottles show their mass of gas, and must be kept upright, away from flames, in a ventilated place.',
    '**Meters** measure what a household uses. The **electricity meter** counts electrical energy in **kilowatt-hours (kWh)**, also called units; ENEO bills customers for these units. The **water meter** counts the volume of water used in cubic metres. Reading the meter at the start and end of a month shows how much was used.',
    'Using services **wisely** saves money and resources: switch off lamps and appliances not in use, fix dripping taps, use energy-saving lamps, close the fridge door quickly and do not leave the gas burning without a pot on it.',
  ], null, 'Usage = **final meter reading − first meter reading**. Cost = usage × price per unit.',
  ['An electricity meter reads 4250 units on 1 March and 4370 units on 1 April. How many units were used in March?', ['120', '8620', '4370', '4250'], 'Units used = 4370 − 4250 = 120 kWh.'],
  [['Expiry date', 'The date after which a product should not be used.'], ['Rating plate', 'The label on an appliance giving its voltage and power.'], ['Kilowatt-hour', 'The unit of electrical energy used on electricity bills.']],
  [
    { q: 'A family uses 120 units of electricity in a month. If one unit costs 79 FCFA, what is the cost?', steps: ['Cost = units used × price per unit.', '= 120 × 79.', '= **9480 FCFA**.'] },
  ]),

  L('ph-insulation-1', 'ph-f1-insulation', '4.1', 'Conductors and insulators of heat and electricity', 9, ['Insulation'], [
    'A **thermal conductor** lets heat pass through it easily: metals such as copper, aluminium and iron are good conductors. A **thermal insulator** lets heat pass through slowly: wood, plastic, rubber, cloth, wool, cork, foam and still **air** are good insulators.',
    'We use conductors where heat must flow quickly: pots and pans are made of aluminium or steel. We use insulators where heat must be kept in or out: pot handles of wood or plastic, oven gloves, blankets, cool boxes lined with foam and flasks with a vacuum. Ceiling boards and thatch keep houses cool under hot iron roofs.',
    'An **electrical conductor** lets an electric current pass: all metals, graphite (pencil lead) and impure water. An **electrical insulator** does not: plastic, rubber, dry wood, glass and porcelain. Electric wires are made of **copper**, covered with **plastic** insulation; plugs and switches have plastic cases.',
    'Insulation protects us from **electric shock**. Never touch electrical apparatus with wet hands, never use cables with damaged insulation, and keep children away from sockets. Electricians wear rubber gloves and boots and use tools with insulated handles.',
  ], 'conductivity-apparatus', 'For "why is this material used" questions, name the **property** (conductor or insulator, of heat or of electricity) and link it to the **job**.',
  ['Why is a cooking pot made of aluminium but its handle made of plastic?', ['Aluminium conducts heat to the food; plastic insulates the hand', 'Both are good conductors', 'Plastic conducts heat well', 'Aluminium is an insulator'], 'The pot must pass heat to the food; the handle must stay cool.'],
  [['Thermal conductor', 'A material that lets heat pass easily.'], ['Thermal insulator', 'A material that lets heat pass only slowly.'], ['Electrical insulator', 'A material that does not let an electric current pass.']],
  [
    { q: 'A pupil tests materials in a circuit with a cell and a lamp. The lamp lights with a steel key and a pencil lead, but not with a rubber band or a plastic pen. Classify the materials.', steps: ['The lamp lights, so the circuit is complete: **steel** and **graphite (pencil lead)** are **electrical conductors**.', 'The lamp stays off: **rubber** and **plastic** are **electrical insulators**.'] },
  ]),

  L('ph-energytypes-1', 'ph-f1-energy', '5.1', 'Why we need energy: its forms and sources', 9, ['Energy'], [
    '**Energy** is the ability to do work. Our bodies need energy from food to move, grow and keep warm. Homes need energy to cook, light rooms, iron clothes and run radios and phones; transport and factories need it too. Energy is measured in **joules (J)**.',
    'Energy exists in different **forms**: **chemical energy** stored in food, fuels and batteries; **heat (thermal) energy**; **electrical energy**; **light energy**; **sound energy**; **kinetic energy** of moving things; and **potential energy** stored in a raised object or a stretched spring.',
    '**Sources** of energy in Cameroon include the **Sun** (solar energy for drying crops and solar panels), **firewood** and **charcoal**, **fossil fuels** such as petrol, diesel, kerosene and cooking gas, and **flowing water** used in hydroelectric dams. Almost all of this energy came originally from the Sun.',
    'Energy must be used **safely**. Fuels can cause fires and burns; smoke and fumes harm health; electricity can give shocks. Store fuels away from flames, cook in ventilated places and follow the notices on electrical appliances.',
  ], 'energy-chain', 'Name energy forms precisely: say **chemical** energy (not "battery energy") and **kinetic** energy (not "moving energy").',
  ['A stretched catapult has:', ['Potential (elastic) energy', 'Light energy', 'Sound energy', 'No energy'], 'Energy is stored in the stretched rubber and becomes kinetic energy of the stone.'],
  [['Energy', 'The ability to do work, measured in joules.'], ['Kinetic energy', 'The energy a body has because it is moving.'], ['Chemical energy', 'Energy stored in substances such as food, fuels and batteries.']],
  [
    { q: 'Name the energy form at each stage: a woman eats garri, walks to the market and lifts a basket on to her head.', steps: ['Garri contains **chemical energy**.', 'Walking uses it as **kinetic energy** (and some heat).', 'The raised basket has **potential energy** because of its height.'] },
  ]),

  L('ph-energyuse-1', 'ph-f1-energy', '5.2', 'Energy changes and using energy economically', 8, ['Energy'], [
    'Energy cannot be made or destroyed; it changes from one form to another. A torch changes **chemical → electrical → light** energy, with some heat. A radio changes electrical energy into **sound**. A kerosene lamp changes chemical energy into **light and heat**. A fan changes electrical energy into **kinetic** energy.',
    'In every change some energy becomes **heat** that is not useful: an ordinary filament lamp gets hot and gives out more heat than light. Energy-saving and LED lamps waste less, so they give the same light for less electricity.',
    'The **power** of an appliance tells how fast it uses energy, in **watts (W)**: 1 W = 1 joule per second. A 1000 W heater uses ten times as much energy every second as a 100 W one. Appliances that heat, such as irons, kettles and cookers, have the highest power.',
    'To save energy and money: switch off what you are not using, use LED lamps, iron many clothes at once, cover pots while cooking, use an improved stove that burns less wood, and use sunlight to dry clothes and food. Using less fuel also means less smoke and less carbon dioxide.',
  ], null, 'Write energy changes as a chain with arrows, starting with the energy **put in** and ending with the **useful** energy out (and the wasted heat).',
  ['In an electric fan, the useful energy change is:', ['Electrical → kinetic', 'Kinetic → electrical', 'Chemical → light', 'Sound → electrical'], 'The motor turns the blades; some energy is also wasted as heat and sound.'],
  [['Energy change', 'The changing of energy from one form to another.'], ['Power', 'How fast energy is used, measured in watts.'], ['Wasted energy', 'Energy changed into forms that are not useful, usually heat.']],
  [
    { q: 'Write the energy chain for a phone being charged by a solar panel and then playing music.', steps: ['The panel changes **light energy → electrical energy**.', 'The phone battery stores it as **chemical energy**.', 'When music plays: **chemical → electrical → sound** energy, with some heat wasted.'] },
  ]),

  L('ph-heatflow-1', 'ph-f1-heatflow', '6.1', 'How heat travels: conduction, convection and radiation', 10, ['Heat'], [
    'Heat always flows from a **hotter** place to a **colder** place. It travels in three ways. In **conduction**, heat passes through a **solid** from particle to particle without the material moving: the handle of a metal spoon left in hot soup becomes hot. Metals conduct heat best.',
    'In **convection**, a **liquid or gas** carries the heat as it moves. Warm water or air expands, becomes less dense and **rises**; cooler water or air sinks to take its place, forming a **convection current**. This is how water in a pot heats evenly, how smoke rises up a chimney and how sea breezes blow on the coast.',
    'In **radiation**, heat travels as invisible waves (infrared) and needs **no material** at all, so it can cross empty space. This is how the Sun’s heat reaches the Earth and how you feel the warmth of a fire from a distance. **Dull black** surfaces absorb and give out radiation best; **shiny white or silver** surfaces reflect it.',
    'We use these ideas every day. **Solar dryers** with black surfaces dry cocoa, coffee and cassava faster. A **solar cooker** uses shiny reflectors to focus sunlight on a black pot. Houses painted white and roofs with ceilings stay cooler. Wearing light-coloured clothes in the sun keeps you cool.',
  ], 'heat-transfer', 'Match each way to its medium: **conduction in solids**, **convection in liquids and gases**, **radiation through empty space**.',
  ['Why are solar water heaters painted black?', ['Black surfaces absorb the Sun’s radiation well', 'Black reflects heat', 'Black is a conductor of electricity', 'Black stops convection'], 'Good absorbers of radiation warm up fastest in sunlight.'],
  [['Conduction', 'The flow of heat through a solid from particle to particle.'], ['Convection', 'The flow of heat by the movement of a liquid or gas.'], ['Radiation', 'The flow of heat as waves, which needs no material.']],
  [
    { q: 'Explain the three ways heat travels when soup cooks in a metal pot on a wood fire.', steps: ['**Radiation**: the fire’s heat reaches the pot and the cook’s face through the air.', '**Conduction**: heat passes through the metal base of the pot into the soup.', '**Convection**: the warm soup at the bottom rises and cooler soup sinks, so all of it heats up.'] },
  ]),

  L('ph-forcef1-1', 'ph-f1-force', '7.1', 'Forces and their effects', 9, ['Forces'], [
    'A **force** is a **push or a pull**. Forces are measured in **newtons (N)** with a **spring balance** (newton meter). We cannot see a force, but we can see what it does.',
    'Some forces need **contact**: your hand pushing a door, a rope pulling a goat, **friction** between a ball and the ground, and **air resistance** on a moving bicycle. Other forces act **at a distance**, without touching: **gravity** pulls everything towards the Earth (this pull is the weight), and a **magnet** attracts iron from a short distance.',
    'A force can **start** a body moving, **stop** it, make it go **faster** or **slower**, change its **direction**, or change its **shape** (squashing a ball of clay, stretching a spring). Forces cannot change the mass of a body.',
    '**Friction** opposes motion between surfaces. It is useful: it lets our shoes grip the ground and lets brakes stop a car. It can also be a nuisance: it wears out parts of machines and wastes energy as heat, which is why moving parts are oiled.',
  ], 'forces-car', 'For "effects of a force", give **specific** examples: a goalkeeper **stops** the ball; a footballer **changes its direction** with a header.',
  ['A footballer heads the ball and changes its direction. This shows a force can:', ['Change the direction of motion', 'Change the mass of a ball', 'Make the ball invisible', 'Turn the ball into energy'], 'The force from the head changes the ball’s direction.'],
  [['Force', 'A push or a pull, measured in newtons.'], ['Friction', 'A force between surfaces in contact that opposes motion.'], ['Gravity', 'The force that pulls bodies towards the Earth.']],
  [
    { q: 'For each case, name the force and say whether it acts by contact or at a distance: (a) a mango falling, (b) a cyclist braking, (c) a magnet picking up pins.', steps: ['(a) **Gravity**: at a distance.', '(b) **Friction** between the brake blocks and the wheel: contact.', '(c) **Magnetic force**: at a distance.'] },
  ]),

  L('ph-movingf1-1', 'ph-f1-force', '7.2', 'Describing motion, speed and finding the way', 9, ['Motion'], [
    'A body is in **motion** when its **position changes** with time compared with a fixed point. A taxi moving along a road, a falling mango and a turning fan are all moving. A body is at **rest** when its position does not change.',
    'The **speed** of a body tells how far it travels in a given time: **speed = distance ÷ time**. If distance is in metres and time in seconds, speed is in **metres per second (m/s)**; for long journeys we use **kilometres per hour (km/h)**. Rearranging gives distance = speed × time and time = distance ÷ speed.',
    'Travel needs planning. **Timetables** for trains (CAMRAIL), buses and planes give departure and arrival times; the difference is the journey time. A **road map** shows towns, roads and distances, and its scale lets you work out how far you will travel.',
    'A **compass** has a small magnetised needle that points **north-south**. Holding a compass flat and turning the map until its north matches the needle lets you find the right direction to travel, even in a forest or on a farm far from roads.',
  ], null, 'Write the formula first, then the numbers with units: speed = distance ÷ time = 150 km ÷ 3 h = 50 km/h.',
  ['A bus travels at 60 km/h for 3 hours. How far does it travel?', ['180 km', '20 km', '63 km', '57 km'], 'Distance = speed × time = 60 × 3 = 180 km.'],
  [['Motion', 'A change of position with time.'], ['Speed', 'The distance travelled in a unit of time.'], ['Compass', 'An instrument with a magnetised needle that points north-south.']],
  [
    { q: 'A CAMRAIL train leaves Yaoundé at 18:10 and reaches Ngaoundéré at 08:10 the next morning, a distance of about 620 km. Find the journey time and the average speed.', steps: ['From 18:10 to 08:10 the next day is **14 hours**.', 'Average speed = distance ÷ time = 620 ÷ 14.', '≈ **44 km/h**.'] },
  ]),

  L('ph-soundear-1', 'ph-f1-health', '8.1', 'Sound, musical instruments and the ear', 10, ['Sound', 'Health'], [
    'Every sound is made by something **vibrating**: a drum skin, a guitar string, the air in a flute, our **vocal cords**. The vibrations pass through the air to our ears. Sound needs a **medium** (a solid, liquid or gas); it cannot travel through a vacuum. In air it travels at about **340 m/s**.',
    'Sounds differ in **loudness** and **pitch**. A bigger vibration gives a **louder** sound. Faster vibrations give a **higher pitch**. On a guitar or a local harp, shorter, tighter and thinner strings give higher notes. Musical instruments are **string** (guitar, harp), **wind** (flute, trumpet) or **percussion** (drums, balafon, maracas).',
    'The **ear** collects sound. The **outer ear** (pinna and ear canal) funnels the sound to the **eardrum**, which vibrates. Three tiny bones in the **middle ear** pass the vibrations to the **cochlea** in the inner ear, which sends messages along the auditory nerve to the brain.',
    'Loud **noise** damages hearing, sometimes for life. Noise levels are measured in **decibels (dB)**: normal talk is about 60 dB, but nightclubs and loud speakers can pass 100 dB. Keep earphone volume low, take breaks, stand away from loudspeakers and wear ear protection near loud machines. Never push sharp objects into the ear.',
  ], 'ear', 'Link pitch to **how fast** something vibrates and loudness to **how big** the vibration is.',
  ['A drummer wants a higher-pitched sound from a drum. He should:', ['Tighten the drum skin', 'Hit it harder', 'Loosen the skin', 'Hit it more softly'], 'A tighter skin vibrates faster, giving a higher pitch. Hitting harder only makes it louder.'],
  [['Vibration', 'A fast to-and-fro movement.'], ['Pitch', 'How high or low a sound is.'], ['Decibel', 'The unit used to measure how loud a sound is.']],
  [
    { q: 'You see lightning and hear the thunder 3 s later. How far away was the lightning? (Speed of sound in air = 340 m/s.)', steps: ['Light arrives almost at once, so the sound took **3 s** to reach you.', 'Distance = speed × time = 340 × 3.', '= **1020 m**, about 1 km away.'] },
  ]),

  L('ph-bodytemp-1', 'ph-f1-health', '8.2', 'Body temperature, the clinical thermometer and sport', 9, ['Health', 'Thermometer'], [
    'The healthy human body stays at about **37 °C**. A temperature above about **37.5 °C** is a **fever**, often a sign of an infection such as malaria. A temperature below about 35 °C (hypothermia) is also dangerous.',
    'Body temperature is measured with a **clinical thermometer**. Its scale runs only from about **35 °C to 42 °C**, the range of body temperatures, so it can be read precisely. A narrow **kink (constriction)** in the tube stops the liquid falling back when the thermometer is removed, so the reading can be read later. It is shaken to reset it. Digital thermometers are also common.',
    'To use one: clean it, shake it down, place the bulb under the tongue or in the armpit for the time stated, then read it with the scale at eye level. Clean it again after use. Never test hot drinks with a clinical thermometer: it would break.',
    'Our bodies need **exercise**. Sport strengthens the heart, lungs, muscles and bones, helps control body mass and reduces stress. Good **posture** matters too: sit upright with the back supported, lift heavy loads by bending the knees rather than the back, and avoid sleeping in twisted positions. During sport, drink water to replace what is lost as sweat.',
  ], 'clinical-thermometer', 'Know the clinical thermometer’s **range (35 to 42 °C)** and the job of its **constriction**.',
  ['Why does a clinical thermometer have a short range of 35 °C to 42 °C?', ['Body temperatures fall in that range, so it can be read more precisely', 'Mercury freezes below 35 °C', 'It is cheaper', 'It measures boiling water'], 'A short range spreads the scale out so small changes can be seen.'],
  [['Fever', 'A body temperature above normal, about 37.5 °C or more.'], ['Clinical thermometer', 'A thermometer for measuring body temperature.'], ['Posture', 'The way the body is held when sitting, standing or lying.']],
  [
    { q: 'A child’s temperature is 39.2 °C. By how much is it above normal, and what should the parents do?', steps: ['Normal is about 37 °C, so the child’s temperature is 39.2 − 37 = **2.2 °C above normal**.', 'This is a **fever**: give plenty to drink, keep the child lightly dressed and take the child to a health centre for a test, since fever is often caused by malaria.'] },
  ]),

  L('ph-warming-1', 'ph-f1-climate', '9.1', 'Radiation, the greenhouse effect and climate change', 10, ['Environment'], [
    'We are always exposed to a small amount of **background radiation** from rocks, soil, the air, space and even food. At this low level it is harmless. Larger doses of radiation, and **toxic waste** such as used batteries, old chemicals and waste from factories and hospitals, are dangerous: they must be collected and treated by trained people, never dumped in rivers or burned in the open.',
    'Sunlight passes through the atmosphere and warms the ground. The warm ground gives out heat (infrared radiation). Some gases in the air, the **greenhouse gases** (carbon dioxide, methane and water vapour), absorb part of this heat and send it back down, keeping the Earth warm enough for life. This is the **greenhouse effect**.',
    'Burning fuels, bush fires and cutting down forests add extra carbon dioxide; rubbish dumps and some farming add methane. More greenhouse gas traps more heat, so the Earth’s average temperature rises: this is **global warming**. It leads to **climate change**: less regular rains, longer droughts in the north, floods, hotter days and rising sea levels. Lake Chad has shrunk greatly.',
    'Everyone can help. **Plant trees** and protect forests, stop bush burning, use fuel and electricity carefully, use improved stoves and solar energy, do not burn tyres and plastics, and support industries that manage their waste properly.',
  ], 'greenhouse-effect', 'Explain the greenhouse effect in order: sunlight **in**, ground **warms**, heat given **out**, greenhouse gases **trap** some of it.',
  ['Which activity increases the greenhouse effect?', ['Bush burning', 'Planting trees', 'Using solar panels', 'Walking to school'], 'Burning releases carbon dioxide and destroys plants that would take it in.'],
  [['Greenhouse effect', 'The warming of the Earth by gases that trap heat given out by the ground.'], ['Global warming', 'The rise in the average temperature of the Earth.'], ['Background radiation', 'The low-level radiation that is always around us.']],
  [
    { q: 'Give two causes and two effects of global warming in Cameroon.', steps: ['Causes: **burning fuels and bush fires** release carbon dioxide; **cutting down forests** leaves fewer trees to take it in.', 'Effects: **irregular rains and longer dry seasons** that harm farming in the north; **floods** and hotter days elsewhere.'] },
  ]),

  L('ph-tools-1', 'ph-f1-tech', '10.1', 'Simple machines and common tools', 10, ['Technology', 'Machines'], [
    'A **machine** makes work easier. In a simple machine a small force, the **effort**, overcomes a large force, the **load**. A **lever** turns about a point called the **pivot** (fulcrum). The further the effort is from the pivot compared with the load, the smaller the effort needed, but the effort must move through a **greater distance**.',
    'Levers are everywhere: a crowbar, a bottle opener, a wheelbarrow, scissors, pliers and even your forearm. A **pulley** changes the direction of a force and, with several wheels, reduces the effort. A **ramp** (inclined plane) lets a heavy drum be rolled up into a truck with less force. **Gears** change the speed and turning force of wheels, as on a bicycle.',
    'Each common **tool** has a job. A **screwdriver** turns screws; a **tester screwdriver** has a small lamp that glows on a live wire. **Saws** cut wood (wood saw) or metal (hacksaw). A **hammer** drives nails; **pliers** grip, bend and cut wire; **sandpaper** smooths surfaces; **glue** joins materials; a **spirit level** checks that a surface is horizontal; a **tape** measures.',
    'Use tools safely: choose the right tool for the job, keep blades sharp and covered, hold work firmly, keep fingers away from the cutting edge and put tools away after use.',
  ], 'lever-classes', 'With levers: **long distance from pivot = small force**. A small effort far from the pivot can balance a big load close to it.',
  ['Why does a long spanner loosen a tight nut more easily than a short one?', ['The effort is further from the pivot', 'It is heavier', 'It is made of steel', 'It grips better'], 'Further from the pivot, the same push has a bigger turning effect.'],
  [['Effort', 'The force applied to a machine.'], ['Load', 'The force the machine overcomes.'], ['Pivot', 'The point about which a lever turns.']],
  [
    { q: 'A pupil uses a plank as a lever. A load of 600 N is 0.5 m from the pivot. What effort is needed 1.5 m from the pivot to balance it?', steps: ['For balance, effort × its distance = load × its distance.', 'Effort × 1.5 = 600 × 0.5 = 300.', 'Effort = 300 ÷ 1.5 = **200 N**, a third of the load, because it is three times further from the pivot.'] },
  ]),

  L('ph-upkeep-1', 'ph-f1-tech', '10.2', 'Care and maintenance, simple repairs and technical drawing', 9, ['Technology'], [
    'Tools and machines last longer with good **care and maintenance**. **Clean** them after use to remove dust, mud and rust. **Lubricate** moving parts with oil or grease, such as bicycle chains, door hinges and sewing machines, to reduce friction and keep out water. Store tools in a dry place and keep blades sharp.',
    'When something stops working, find the fault step by step, starting with the **simplest** causes. For a **torch** that does not light: check the cells are in the right way round and not flat, then check the bulb (is the filament broken?), then the switch and the metal contacts, which may be rusty and need cleaning with sandpaper.',
    'Some useful things can be made at home: a **water filter** from a bucket with layers of gravel, coarse sand, fine sand and charcoal (the water must still be boiled before drinking), and **biogas** from animal dung and kitchen waste in a sealed container.',
    '**Technical drawing** shows the exact shape and size of an object so that it can be made. It uses a sharp pencil, a ruler, a set square and a compass. Lines are drawn neatly, measurements (**dimensions**) are written in millimetres, and a **scale** is stated: at 1 : 10, 1 cm on the paper stands for 10 cm on the object.',
  ], null, 'When describing a repair, list the checks **in order from the simplest**, and say what you would see if each part were at fault.',
  ['A door hinge squeaks. The best maintenance is to:', ['Put a little oil on the hinge', 'Paint the door', 'Hit the hinge with a hammer', 'Wet it with water'], 'Oil reduces friction between the moving parts and stops the squeak.'],
  [['Lubrication', 'Putting oil or grease on moving parts to reduce friction.'], ['Fault', 'Something wrong that stops a device working.'], ['Scale', 'The ratio between the size of a drawing and the real object.']],
  [
    { q: 'A table top is 1.2 m long and 0.8 m wide. Find its size on a drawing to a scale of 1 : 20.', steps: ['Convert to centimetres: 1.2 m = 120 cm and 0.8 m = 80 cm.', 'At 1 : 20, divide each by 20: 120 ÷ 20 = 6 cm and 80 ÷ 20 = 4 cm.', 'The drawing is **6 cm by 4 cm**.'] },
  ]),

  // ======================= Form 2 =======================
  L('ph-method-1', 'ph-f2-method', '1.1', 'The scientific method: variables, fair tests and graphs', 10, ['Scientific method'], [
    'The **scientific method** is the way scientists find answers. They **observe**, ask a **question**, suggest a **hypothesis** (a possible answer that can be tested), plan and carry out an **experiment**, **record** and **analyse** the results, draw a **conclusion** and **communicate** what they found. If the results do not support the hypothesis, they change it and test again.',
    'An experiment has **variables**, things that can change. The **independent variable** is the one you choose to change. The **dependent variable** is the one you measure. The **controlled variables** are kept the same so the test is **fair**.',
    'Results are recorded in a **table** with headings and units. They are then shown on a **graph**: the independent variable goes on the horizontal axis and the dependent variable on the vertical axis. Choose a scale that uses most of the paper, plot the points neatly and draw a smooth line or curve through them.',
    'A **conclusion** says what the results show, for example "the higher the ramp, the faster the car". Repeating the experiment and getting similar results makes the conclusion more **reliable**.',
  ], 'scientific-method', 'In planning questions, always name **all three** kinds of variable: what you change, what you measure and what you keep the same.',
  ['A pupil tests whether the mass on a spring changes how far it stretches. Which must be kept the same?', ['The spring used', 'The mass hung on it', 'The stretch', 'Nothing'], 'The spring is a controlled variable; the mass is changed and the stretch is measured.'],
  [['Hypothesis', 'A possible explanation that can be tested by experiment.'], ['Independent variable', 'The variable the experimenter changes.'], ['Dependent variable', 'The variable that is measured.']],
  [
    { q: 'Plan a fair test of the hypothesis "seeds germinate faster in warm places".', steps: ['**Change** (independent): the temperature, for example a cool room and a warm room.', '**Measure** (dependent): the number of days until the seeds germinate.', '**Keep the same** (controlled): the type and number of seeds, the amount of water and the light.', 'Repeat with several seeds in each place and compare the average times.'] },
  ]),

  L('ph-calc-1', 'ph-f2-method', '1.2', 'Using measurements: area, volume and density', 10, ['Measurement'], [
    'Measurements become useful when we **calculate** with them. The **area** of a rectangle is **length × width**, in m² or cm²; the area of a triangle is ½ × base × height; the area of a circle is π × radius² (π ≈ 3.14).',
    'The **volume** of a cuboid is **length × width × height**, in m³ or cm³. The volume of a cylinder, such as a water tank, is π × radius² × height. Remember: 1 m³ = 1000 litres and 1 litre = 1000 cm³.',
    '**Density** tells how much mass is packed into each unit of volume: **density = mass ÷ volume**, in g/cm³ or kg/m³. Water has a density of **1 g/cm³** (1000 kg/m³). A material less dense than water floats on it; a denser one sinks. This is why palm oil floats on water.',
    'Density helps to identify materials and check purity: pure gold has a density of about 19.3 g/cm³, so a "gold" ring with a much lower density is not pure gold. Builders use density to work out the mass of sand or concrete they need.',
  ], null, 'Before calculating, put all measurements in **the same units** (all cm, or all m).',
  ['A block of wood has a density of 0.6 g/cm³. Placed in water it will:', ['Float, because it is less dense than water', 'Sink, because it is denser than water', 'Dissolve', 'Stay at the bottom'], 'Water has a density of 1 g/cm³ and 0.6 is less than 1.'],
  [['Area', 'The size of a surface, measured in square units.'], ['Volume', 'The space a body takes up, measured in cubic units.'], ['Density', 'Mass per unit volume.']],
  [
    { q: 'A rectangular water tank is 2 m long, 1.5 m wide and 1 m high. How many litres does it hold when full?', steps: ['Volume = 2 × 1.5 × 1 = **3 m³**.', '1 m³ = 1000 litres.', 'The tank holds 3 × 1000 = **3000 litres**.'] },
    { q: 'A metal block 5 cm × 2 cm × 2 cm has a mass of 158 g. Find its density and say whether it could be iron (7.9 g/cm³).', steps: ['Volume = 5 × 2 × 2 = **20 cm³**.', 'Density = 158 ÷ 20 = **7.9 g/cm³**.', 'This matches iron, so the block **could be iron**.'] },
  ]),

  L('ph-changestate-1', 'ph-f2-heatstate', '2.1', 'Temperature and changes of state', 10, ['Heat', 'Change of state'], [
    '**Temperature** tells how hot or cold a body is. It is measured with a **thermometer**, usually in degrees Celsius (°C). A liquid-in-glass thermometer works because the liquid (alcohol or mercury) **expands** up the narrow tube when it is warmed. The Celsius scale is fixed by two points: pure ice melts at **0 °C** and pure water boils at **100 °C** at normal pressure.',
    'Substances change state when heated or cooled. **Melting**: solid to liquid at the **melting point**. **Freezing** (solidification): liquid to solid. **Vaporisation**: liquid to gas, by **boiling** at the boiling point or by **evaporation** at the surface at any temperature. **Condensation**: gas or vapour to liquid. **Liquefaction**: turning a gas into a liquid by cooling or compressing it. **Sublimation**: solid straight to gas, as with naphthalene balls and iodine.',
    'During a change of state the **temperature stays constant**, even though heat is still being supplied. Heating ice until it boils gives a graph with two flat parts: one at 0 °C while it melts and one at 100 °C while it boils. The heat is used to free the particles, not to make them move faster.',
    'Evaporation **cools**: sweat evaporating from the skin takes heat from the body, and water in a clay pot stays cool. Evaporation is faster when it is warm, windy, dry and when the surface area is large, which is why clothes dry quickly when spread out on a windy, sunny day.',
  ], 'heating-curve', 'Describe a heating curve section by section: **rising** parts (one state warming) and **flat** parts (changing state at a fixed temperature).',
  ['Why does sweating cool the body?', ['Evaporating sweat takes heat from the skin', 'Sweat is cold water from the fridge', 'Sweat reflects sunlight', 'Sweat stops blood flow'], 'The liquid needs heat to evaporate and takes it from the body.'],
  [['Melting point', 'The temperature at which a solid turns to liquid.'], ['Boiling point', 'The temperature at which a liquid boils.'], ['Condensation', 'The change from gas or vapour to liquid.']],
  [
    { q: 'Water at 20 °C is heated until it has boiled for 5 minutes. Describe the temperature readings.', steps: ['The temperature **rises** from 20 °C as the water warms up.', 'At **100 °C** the water **boils**.', 'While it boils, the temperature **stays at 100 °C**: the heat changes water into steam instead of raising the temperature.'] },
  ]),

  L('ph-materials-1', 'ph-f2-materials', '3.1', 'Permeability, solubility and insulating materials', 9, ['Materials'], [
    'Materials are chosen for a job because of their **properties**. A **permeable** material lets water (or air) pass through it: sand, gravel, cloth, paper and sandy soil. An **impermeable** material does not: plastic, glass, metal, rubber and clay when packed tightly.',
    'Impermeable materials make **raincoats, umbrellas, roofs, water tanks and pond linings**. Permeable materials are used where water must drain or be filtered: gravel round the base of a well, sand in a water filter, sandy soils for crops that dislike waterlogging.',
    'A **soluble** substance dissolves in a liquid (sugar, salt and coffee in water); an **insoluble** one does not (sand, chalk, plastic). Some substances dissolve in other solvents: grease and paint dissolve in kerosene or thinner, not in water. Knowing what dissolves helps with cleaning, cooking and choosing building materials that will not wash away.',
    '**Insulation** also depends on materials. Thermal insulators (wood, plastic, foam, wool, trapped air) slow down heat flow; electrical insulators (plastic, rubber, glass, porcelain) stop current. Cool boxes, flasks, oven gloves, cable coverings and the handles of electricians’ tools all use insulators.',
  ], 'conductivity-apparatus', 'When choosing a material, name **the property it needs** (impermeable, insoluble, insulating) and why.',
  ['Which material should be used to line a fish pond so that water does not soak away?', ['Plastic sheeting or packed clay', 'Gravel', 'Sand', 'Cloth'], 'They are impermeable, so the water stays in the pond.'],
  [['Permeable', 'Letting water or air pass through.'], ['Impermeable', 'Not letting water pass through.'], ['Soluble', 'Able to dissolve in a liquid.']],
  [
    { q: 'Equal volumes of water are poured on to sand, garden soil and clay in three funnels. After 5 minutes, 40 cm³, 25 cm³ and 5 cm³ have drained through. Which is most permeable, and which would be best for a pond?', steps: ['Most water passed through the **sand** (40 cm³), so sand is the **most permeable**.', 'Least passed through the **clay** (5 cm³): it is nearly impermeable.', 'Clay is best for lining a **pond** because it holds the water.'] },
  ]),

  L('ph-heatelec-1', 'ph-f2-heatelec', '4.1', 'Expansion, the bimetallic strip and the effects of electricity', 10, ['Heat', 'Electricity'], [
    'Most materials **expand** when heated and **contract** when cooled, because their particles move more and take up more room. Gases expand most, then liquids, then solids. Engineers allow for this: **gaps** are left between railway lines and in bridges; electric wires are hung with some sag; concrete roads have joints filled with tar.',
    'Expansion is also useful. A metal lid stuck on a glass jar can be loosened by warming it in hot water. Liquid-in-glass thermometers work by expansion. A **bimetallic strip** is made of two metals, such as brass and iron, joined together. When heated, the brass expands more, so the strip **bends** with the brass on the outside. It is used in **thermostats** (in irons, ovens, water heaters) and **fire alarms** to switch a circuit on or off at a set temperature.',
    'An electric current has effects on materials. The **heating effect**: current through a thin, high-resistance wire makes it hot, as in irons, kettles and cookers, and the filament of a lamp glows white hot. A **fuse** is a thin wire that **melts** and breaks the circuit if too much current flows, protecting the wiring from overheating and fire.',
    '**Lightning** is a giant spark of electricity between clouds and the ground. It can kill and start fires. During a storm stay indoors, unplug appliances and keep away from tall trees, open fields, water and metal fences. A **lightning conductor**, a metal rod on top of a building joined by a thick strip to a plate in the ground, leads the charge safely to earth.',
  ], 'bimetallic-strip', 'For a bimetallic strip, always say **which metal expands more** and that it ends up on the **outside** of the curve.',
  ['A bimetallic strip of brass and iron is cooled below room temperature. It bends:', ['With the iron on the outside, because brass contracts more', 'With the brass on the outside', 'Not at all', 'Into a circle'], 'Brass changes length more than iron, so on cooling it becomes the shorter, inner side.'],
  [['Expansion', 'The increase in size of a body when it is heated.'], ['Thermostat', 'A device that keeps a temperature steady by switching a heater on and off.'], ['Fuse', 'A thin wire that melts to break a circuit when the current is too large.']],
  [
    { q: 'Explain how a bimetallic thermostat keeps an electric iron at a steady temperature.', steps: ['The heater current passes through **contacts** held closed by the bimetallic strip.', 'As the iron gets hot, the strip **bends** because one metal expands more, and the contacts **open**: the heater switches **off**.', 'As the iron cools, the strip straightens, the contacts close and the heater comes **on** again. This repeats, keeping the temperature nearly steady.'] },
  ]),

  L('ph-renewable-1', 'ph-f2-renewable', '5.1', 'Renewable and non-renewable energy', 10, ['Energy'], [
    'People need energy for cooking, lighting, transport, farming and industry, and the need grows as towns grow. Energy sources are either **non-renewable** or **renewable**. **Non-renewable** sources are used up and cannot be replaced in a human lifetime: **fossil fuels** (crude oil, natural gas, coal) and nuclear fuel. Burning fossil fuels also releases carbon dioxide and smoke.',
    '**Renewable** sources are replaced naturally and will not run out. **Water (hydroelectric) energy**: falling or flowing water turns turbines in dams such as Song Loulou, Edéa, Lom Pangar and Memve’ele, which supply most of Cameroon’s electricity. **Wind energy**: moving air turns wind turbines and windmills.',
    '**Solar energy**: solar panels change sunlight into electricity, and solar water heaters and dryers use the Sun’s heat. It is ideal for villages far from the grid and for the sunny north. **Biomass**: wood, crop waste and animal dung can be burned or used to make **biogas**. **Geothermal energy**: heat from hot rocks underground, found near volcanic areas.',
    'Renewable sources cause less pollution, but some depend on the weather (no sun at night, little wind on calm days) and need storage in batteries. Wood is only renewable if trees are **replanted** as fast as they are cut.',
  ], 'energy-chain', 'Classify sources by asking: **will it run out?** Fossil fuels will; sunlight, wind and flowing water will not.',
  ['Why is solar energy useful for a health centre in a remote village?', ['It needs no fuel deliveries and the Sun will not run out', 'It works best at night', 'It is a fossil fuel', 'It produces smoke for heating'], 'Solar panels and batteries can power lights and a vaccine fridge far from the grid.'],
  [['Renewable energy', 'Energy from sources that are replaced naturally.'], ['Fossil fuel', 'A fuel formed over millions of years from the remains of living things.'], ['Biogas', 'A fuel gas made from rotting animal dung and plant waste.']],
  [
    { q: 'Classify each as renewable or non-renewable and give one advantage of each renewable one: cooking gas, solar panels, the Lom Pangar dam, firewood from a managed plantation.', steps: ['Cooking gas: **non-renewable** (a fossil fuel).', 'Solar panels: **renewable**; no fuel cost and no smoke.', 'Lom Pangar dam (hydroelectric): **renewable**; large amounts of electricity without burning fuel.', 'Firewood from a replanted plantation: **renewable**; available locally, as long as trees are replanted.'] },
  ]),

  L('ph-exchange-1', 'ph-f2-renewable', '5.2', 'Energy exchanges and flow charts', 9, ['Energy'], [
    'Energy is never created or destroyed; it only changes from one form to another. This is the **principle of conservation of energy**. Each change can be shown on a **flow chart**: boxes for each form of energy, joined by arrows.',
    'Examples: a **torch**: chemical → electrical → light (+ heat). A **hydroelectric station**: potential energy of water in the dam → kinetic energy of moving water → electrical energy. A **gas cooker**: chemical → heat. A **radio**: electrical → sound. A **solar panel**: light → electrical. **Photosynthesis**: light → chemical energy stored in food.',
    'In real changes, not all the energy becomes the form we want. The rest, usually **heat** and sometimes sound, is **wasted**. The **efficiency** of a device compares the useful energy out with the energy put in: efficiency = useful energy out ÷ energy in × 100%.',
    'A device with high efficiency wastes little energy. An LED lamp changes more of its electrical energy into light than an old filament lamp does, so it is more efficient and cheaper to run.',
  ], 'energy-chain', 'Check a flow chart: the total energy out (useful + wasted) must **equal** the energy in.',
  ['A lamp takes in 100 J of electrical energy and gives out 20 J of light. How much energy is wasted as heat?', ['80 J', '20 J', '120 J', '0 J'], 'Energy is conserved: 100 − 20 = 80 J of heat.'],
  [['Conservation of energy', 'Energy cannot be made or destroyed, only changed from one form to another.'], ['Flow chart', 'A diagram showing energy changes as boxes joined by arrows.'], ['Efficiency', 'The fraction of the energy put in that becomes useful energy.']],
  [
    { q: 'A motor takes in 500 J of electrical energy and gives out 350 J of kinetic energy. Find the energy wasted and the efficiency.', steps: ['Wasted energy = 500 − 350 = **150 J** (as heat and sound).', 'Efficiency = useful out ÷ energy in × 100% = 350 ÷ 500 × 100%.', '= **70%**.'] },
  ]),

  L('ph-circuitf2-1', 'ph-f2-electricity', '6.1', 'Electric circuits, current and safety', 10, ['Electricity'], [
    '**Sources of electricity** include dry cells and batteries (chemical energy), generators in power stations and in homes (kinetic energy), and solar panels (light). In Cameroon, homes are supplied at about **220 V** by ENEO.',
    'An electric **current** is a flow of charge around a **complete circuit**. A simple circuit has a cell, a switch, a lamp and connecting wires. When the switch is **closed**, the circuit is complete and the lamp lights; when it is **open**, there is a gap and no current flows. Circuits are drawn with standard **symbols**.',
    'Current is measured in **amperes (A)** with an **ammeter** connected **in series**. Materials that let current pass are **conductors** (metals, graphite); those that do not are **insulators** (plastic, rubber, glass, dry wood).',
    'Lamps can be joined in **series** (one after another in a single loop): if one breaks, all go out, and each extra lamp makes them dimmer. In **parallel**, each lamp has its own path: if one breaks, the others stay on, and each can have its own switch. House lighting is wired in parallel. **Safety**: never overload a socket with many adaptors, never touch bare wires, and keep water away from electrical things.',
  ], 'circuit-symbols', 'Series = **one path**; parallel = **separate paths**. Say what happens when one lamp breaks.',
  ['Christmas lights all go out when one lamp breaks. They are connected in:', ['Series', 'Parallel', 'A short circuit', 'No circuit'], 'In series there is only one path, so one broken lamp breaks the whole circuit.'],
  [['Electric current', 'A flow of electric charge, measured in amperes.'], ['Ammeter', 'An instrument that measures current, connected in series.'], ['Parallel circuit', 'A circuit in which each component has its own path.']],
  [
    { q: 'A torch has two cells, a switch and a lamp in series. It does not light when switched on. List the checks to find the fault.', steps: ['Check the **cells**: are they the right way round (+ to −) and not flat?', 'Check the **lamp**: is the filament broken? Try it in another torch.', 'Check the **switch** and the metal **contacts**: clean any rust so they conduct.', 'The circuit must be **complete** for current to flow.'] },
  ]),

  L('ph-rays-1', 'ph-f2-light', '7.1', 'Light: sources, rays and shadows', 10, ['Light'], [
    'A **luminous** body gives out its own light: the Sun, a lamp, a candle flame, a firefly. A **non-luminous** body is seen only because it **reflects** light into our eyes: the Moon, people, books. Light is a form of energy and travels at about **300 000 km/s**, far faster than sound.',
    'Materials are **transparent** (let light through clearly: clear glass, water), **translucent** (let some light through but not a clear image: frosted glass, thin paper) or **opaque** (let no light through: wood, metal, the body).',
    'Light travels in **straight lines** (rectilinear propagation). A **ray** is the path of light, drawn as a line with an arrow; a **beam** is a bundle of rays, which may be **parallel**, **diverging** (spreading out) or **converging** (coming together). A **pinhole camera** uses this: rays from the object pass through a tiny hole and form an **upside-down** image on the screen.',
    'An opaque object in the path of light casts a **shadow**. A small (point) source gives a sharp, totally dark shadow, the **umbra**. A large (extended) source gives an umbra surrounded by a partly lit **penumbra**. An **eclipse of the Sun** happens when the Moon passes between the Sun and the Earth and its shadow falls on the Earth; an **eclipse of the Moon** when the Earth’s shadow falls on the Moon.',
  ], 'shadow-formation', 'Shadows prove that light travels in **straight lines**. Draw the edge rays with a ruler, from the edges of the source past the edges of the object.',
  ['During an eclipse of the Moon:', ['The Earth is between the Sun and the Moon', 'The Moon is between the Sun and the Earth', 'The Sun is between the Earth and the Moon', 'The Moon gives out its own light'], 'The Earth’s shadow falls on the Moon.'],
  [['Luminous', 'Giving out its own light.'], ['Umbra', 'The region of total shadow.'], ['Penumbra', 'The region of partial shadow around the umbra.']],
  [
    { q: 'A pinhole camera is 10 cm long and makes an image 2 cm tall of a tree 20 m away. How tall is the tree?', steps: ['Image height ÷ object height = image distance ÷ object distance.', 'Object distance = 20 m = 2000 cm, so 2 ÷ height = 10 ÷ 2000.', 'Height = 2 × 2000 ÷ 10 = **400 cm = 4 m**.'] },
  ]),

  L('ph-speedf2-1', 'ph-f2-motion', '8.1', 'Speed and distance-time graphs', 10, ['Motion'], [
    'Motion is described with **distance** (how far, in m or km) and **time** (how long, in s or h). **Average speed = total distance ÷ total time**. A taxi from Bamenda to Bafoussam does not move at the same speed all the way; the average speed is found from the whole journey.',
    '**Instantaneous speed** is the speed at one moment, shown on a car’s **speedometer**. To change km/h to m/s, divide by 3.6: 72 km/h = 20 m/s. To change m/s to km/h, multiply by 3.6.',
    'A **distance-time graph** shows how distance changes with time. A **straight sloping line** means **constant speed**; the **steeper** the line, the **faster** the motion. A **horizontal line** means the body is **at rest**. A curve that gets steeper shows the body speeding up.',
    'The **speed** is the **slope (gradient)** of a distance-time graph: choose two points on the straight line and divide the change in distance by the change in time.',
  ], 'distance-time', 'For a graph question, first say what each **part** shows (moving or at rest, faster or slower), then calculate from the slope.',
  ['A car travels at 90 km/h. What is this in m/s?', ['25 m/s', '324 m/s', '90 m/s', '15 m/s'], 'Divide by 3.6: 90 ÷ 3.6 = 25 m/s.'],
  [['Average speed', 'Total distance divided by total time.'], ['Instantaneous speed', 'The speed at a particular moment.'], ['Gradient', 'The slope of a graph line: rise divided by run.']],
  [
    { q: 'A cyclist rides 6 km in 20 minutes, rests for 10 minutes, then rides 4 km in 10 minutes. Find the average speed for the whole trip in km/h.', steps: ['Total distance = 6 + 4 = **10 km**.', 'Total time = 20 + 10 + 10 = 40 min = 40 ÷ 60 = **2/3 h**.', 'Average speed = 10 ÷ (2/3) = **15 km/h**. The rest time counts in the total time.'] },
  ]),

  L('ph-forcesf2-1', 'ph-f2-motion', '8.2', 'Forces at a distance and contact forces', 9, ['Forces'], [
    'Some forces act **at a distance**, without touching. **Gravity** pulls all bodies towards one another; the Earth’s pull on a body is its **weight**, about 10 N for each kilogram. **Magnetic forces** act between magnets and on iron and steel: like poles repel and unlike poles attract. **Electric (electrostatic) forces** act between charged bodies: a rubbed plastic comb picks up bits of paper.',
    '**Contact forces** need touching. **Friction** acts where surfaces rub and opposes motion; rough surfaces give more friction. **Air resistance** (drag) is friction from the air, which is why lorries and racing cars are streamlined. **Tension** is the pull in a stretched rope or string. The **normal reaction** is the push of a surface on a body resting on it.',
    '**Upthrust** is the upward push of a liquid (or gas) on a body in it. A body **floats** when the upthrust equals its weight before it is completely under the water. Canoes and ships float because they push aside a lot of water; a stone sinks because its weight is greater than the upthrust on it.',
    'Several forces usually act together. If they balance, a body at rest stays at rest and a moving body keeps the same speed in a straight line. If they do not balance, the body speeds up, slows down or changes direction.',
  ], 'magnetic-field', 'Sort forces into two groups: **at a distance** (gravity, magnetic, electric) and **contact** (friction, air resistance, tension, upthrust, normal reaction).',
  ['A canoe floats on the Wouri river. The upward force on it is:', ['Upthrust from the water', 'Friction', 'Gravity', 'Magnetism'], 'Upthrust balances the weight of the canoe and its load.'],
  [['Upthrust', 'The upward push of a liquid or gas on a body in it.'], ['Air resistance', 'Friction from the air on a moving body.'], ['Tension', 'The pulling force in a stretched rope or string.']],
  [
    { q: 'A crate of mass 20 kg rests on a floor. Name the two forces on it and find their sizes. (10 N per kg.)', steps: ['**Weight** (gravity) acts downwards: 20 × 10 = **200 N**.', 'The **normal reaction** of the floor acts upwards.', 'The crate is at rest, so the forces balance: the reaction is also **200 N**.'] },
  ]),

  L('ph-liquidp-1', 'ph-f2-health', '9.1', 'Pressure in liquids, blood pressure and muscle stress', 10, ['Pressure', 'Health'], [
    '**Pressure** is the force acting on each unit of area. In a liquid, pressure **increases with depth**, because there is more liquid above pushing down. At any depth it acts **equally in all directions**. Water spurts out fastest from the lowest hole in a tall can; dams are built thicker at the bottom; divers feel the pressure on their ears in deep water.',
    'About **60%** of the human body is water, and our blood is a liquid pumped under pressure by the heart. **Blood pressure** is measured with a **sphygmomanometer** and written as two numbers, such as **120/80 mmHg**: the higher number when the heart beats, the lower one between beats. Persistent high blood pressure (**hypertension**) strains the heart and blood vessels and can lead to stroke; less salt, regular exercise, a healthy weight and no smoking help prevent it.',
    'Blood pressure in the feet is higher than in the head when we stand, because of the depth of blood above. Nurses take blood pressure on the upper arm, roughly level with the heart.',
    '**Muscle stress**: holding the same posture for a long time, such as bending over a phone or carrying heavy loads badly, keeps muscles of the neck and shoulders tight. This can cause pain and **tension headaches** that do not come from the head itself. Sitting upright, taking breaks, stretching and enough sleep relieve it.',
  ], 'liquid-pressure', 'Pressure in a liquid depends on **depth** (and the liquid’s density), not on the shape of the container.',
  ['Why are dams thicker at the bottom than at the top?', ['Water pressure increases with depth', 'The top carries more water', 'Fish need room', 'To save cement at the bottom'], 'The deepest water pushes hardest on the wall.'],
  [['Pressure', 'Force per unit area.'], ['Blood pressure', 'The pressure of blood on the walls of the arteries.'], ['Hypertension', 'Blood pressure that stays too high.']],
  [
    { q: 'Explain why a hole near the bottom of a full water tank leaks faster than a hole near the top.', steps: ['Pressure in a liquid **increases with depth**.', 'The bottom hole has more water above it, so the **pressure there is greater**.', 'Greater pressure pushes the water out **faster**.'] },
  ]),

  L('ph-eye-1', 'ph-f2-health', '9.2', 'The eye, lenses and eye defects', 10, ['Light', 'Health'], [
    'The **eye** works like a camera. Light enters through the clear **cornea**, passes through the **pupil** (whose size is controlled by the coloured **iris**) and is focused by the **lens** on to the **retina** at the back. The retina sends messages along the **optic nerve** to the brain. The image on the retina is upside down; the brain interprets it the right way up.',
    'A **lens** is a curved piece of glass or plastic that bends light. A **converging (convex) lens** is thicker in the middle; it brings parallel rays together at a point called the **focus**, as when a magnifying glass focuses sunlight. A **diverging (concave) lens** is thinner in the middle and spreads rays out.',
    'In **short sight** (myopia), a person sees near things clearly but distant things are blurred: the eye focuses light **in front of** the retina. It is corrected with **diverging** lenses. In **long sight**, distant things are clear but near things are blurred: light focuses **behind** the retina. It is corrected with **converging** lenses. Older people often need reading glasses because their eye lens becomes less flexible.',
    'Care for your eyes: never look straight at the Sun, read in good light, rest your eyes from screens, protect them from dust and chemicals, and see an eye specialist if your sight is blurred. Spectacles must be prescribed after an eye test, not borrowed.',
  ], 'eye', 'Short sight: **near is clear**, use a **diverging** lens. Long sight: **far is clear**, use a **converging** lens.',
  ['A pupil can read a book clearly but cannot read the blackboard from the back of the class. She needs:', ['Diverging (concave) lenses', 'Converging (convex) lenses', 'Plane glass', 'Sunglasses'], 'She is short-sighted: distant objects are blurred.'],
  [['Retina', 'The light-sensitive layer at the back of the eye.'], ['Converging lens', 'A lens, thicker in the middle, that brings rays together.'], ['Short sight', 'An eye defect in which distant objects look blurred.']],
  [
    { q: 'Grandfather reads the newspaper at arm’s length but sees the football field clearly. What defect does he have and how is it corrected?', steps: ['He sees **far** objects clearly but **near** ones are blurred: this is **long sight**.', 'Light from near objects focuses **behind** the retina.', 'It is corrected with **converging (convex)** reading glasses.'] },
  ]),

  L('ph-sun-1', 'ph-f2-climate', '10.1', 'The Sun’s radiation, the atmosphere and winds', 10, ['Environment'], [
    'The Sun sends out energy as **radiation**: visible light, infrared (heat) and **ultraviolet (UV)**. Charged particles and high-energy **cosmic radiation** also reach the Earth from the Sun and space. The **atmosphere** protects us from most of the harmful part.',
    'High in the atmosphere, the **ozone layer** absorbs most of the Sun’s UV. Too much UV causes sunburn, eye damage (cataracts) and skin cancer. Chemicals called **CFCs**, once used in old fridges and aerosol sprays, destroy ozone, so they have been banned; choose aerosols labelled CFC-free. Higher still is the **ionosphere**, a layer of charged particles that **reflects radio waves**, allowing long-distance radio. Solar storms disturb it and can interrupt radio and satellite signals.',
    'The ground absorbs sunlight and gives out heat, and **greenhouse gases** trap some of it. Cutting and burning forests releases carbon dioxide and removes the trees that would take it in, adding to the greenhouse effect and wasting the energy stored in the wood.',
    'Uneven heating of the Earth makes **air move**: warm air rises and cooler air flows in, giving **winds**. In Cameroon, the moist **south-west monsoon** from the Atlantic brings the rainy season, while the dry, dusty **harmattan** blows from the Sahara in the dry season, mainly in the north. Weather stations measure temperature with thermometers and humidity with a **hygrometer**.',
  ], 'greenhouse-effect', 'Do not confuse the layers: the **ozone layer** absorbs UV; the **ionosphere** reflects radio waves.',
  ['Why should we avoid aerosols containing CFCs?', ['CFCs destroy the ozone layer that absorbs UV', 'CFCs make rain acidic', 'CFCs are radioactive', 'CFCs cool the Sun'], 'Less ozone lets more harmful UV reach the ground.'],
  [['Ultraviolet radiation', 'Invisible radiation from the Sun that can burn skin and damage eyes.'], ['Ozone layer', 'A layer of the upper atmosphere that absorbs most UV radiation.'], ['Ionosphere', 'A high layer of charged particles that reflects radio waves.']],
  [
    { q: 'Explain why the harmattan in Maroua is dry and dusty while the monsoon in Douala is wet.', steps: ['The **harmattan** blows from the **Sahara desert** over dry land, so it carries little water vapour but much dust.', 'The **monsoon** blows from the **Atlantic Ocean**, picking up water vapour over the sea.', 'When the moist air rises over the land and cools, the vapour condenses and falls as **rain**.'] },
  ]),

  L('ph-rainfall-1', 'ph-f2-climate', '10.2', 'Rainfall in Cameroon and the heat of the soil', 9, ['Environment'], [
    'Rainfall in Cameroon varies greatly from place to place. It is heaviest on the coast and highest around **Mount Cameroon**: **Debundscha** receives about 10 000 mm a year, one of the wettest places in the world, because moist sea winds rise up the mountain, cool and drop their water. Douala gets about 4000 mm. Rainfall **decreases** towards the north: Garoua gets about 1000 mm and the Far North around Kousseri less than 600 mm.',
    'The **length of the rainy season** also changes: the south has two rainy seasons, while the north has one short season. This decides which crops grow where and when farmers plant.',
    'Soil **absorbs heat** from the Sun during the day and **gives it out** at night. Dark, dry soil heats up quickly; wet soil heats more slowly because water needs a lot of heat to warm up. Bare soil in the dry season can become very hot, killing soil organisms and drying out seeds.',
    'Bare soil exposed to sun and heavy rain is damaged: the sun dries and cracks it, and rain washes away the fertile topsoil (**erosion**). Covering soil with plants or **mulch**, planting trees and ploughing across slopes protect it. When choosing building materials and sites, people consider rainfall and heat: steep roofs shed heavy rain, thick earth walls keep houses cool, and houses should not be built where floods occur.',
  ], 'water-cycle', 'Explain heavy rain on Mount Cameroon in three steps: **moist sea air**, **rises up the mountain and cools**, **vapour condenses into rain**.',
  ['Why does soil covered with mulch lose less water in the dry season?', ['The mulch shades the soil and slows evaporation', 'Mulch adds rain', 'Mulch makes the soil hotter', 'Mulch is a metal'], 'Covered soil stays cooler and moister, and is protected from erosion.'],
  [['Rainfall', 'The amount of rain that falls, measured in millimetres.'], ['Erosion', 'The washing or blowing away of topsoil.'], ['Mulch', 'A covering of leaves, grass or straw laid on the soil.']],
  [
    { q: 'A rain gauge in a school in Bertoua collects 180 mm in May, 150 mm in June and 120 mm in July. Find the total and the average monthly rainfall.', steps: ['Total = 180 + 150 + 120 = **450 mm**.', 'Average = 450 ÷ 3 = **150 mm per month**.'] },
  ]),

  L('ph-project-1', 'ph-f2-tech', '11.1', 'Carrying out a project; maintenance and repairs', 10, ['Technology'], [
    'A **project** is a planned piece of work that solves a real problem or meets a need. Its stages are: **identify the need** (for example, a leaking water pipe in the school); **look for solutions** and choose one; **study its feasibility**: the materials, tools, people, time and **cost estimate** needed; make a **design** with drawings and a work plan; **carry it out**; **test** it and add the **finishing touches**; and finally **report** on it.',
    '**Maintenance** keeps things working. **Preventive maintenance** is done before a breakdown: cleaning, oiling, tightening screws and checking parts regularly, as with a school’s water pump or a family motorbike. **Corrective maintenance** (repair) is done after something breaks.',
    'Repairs follow a method: **observe** the fault and ask how it happened; **check the simplest causes first**; take the object apart carefully, keeping parts in order; replace or repair the faulty part; reassemble and **test**. Switch off and unplug electrical items before opening them, and leave mains wiring to qualified electricians.',
    'A **dripping tap** usually needs a new rubber **washer**: turn off the water supply, unscrew the tap head, replace the worn washer and screw it back. A **leaking pipe joint** may need new thread tape. Fixing leaks quickly saves water and money.',
  ], null, 'List project stages **in order** and give a concrete example for each stage.',
  ['In a project, the feasibility study answers the question:', ['Can we do it with the money, materials, people and time we have?', 'What colour should it be?', 'Who will open it?', 'Has it already been finished?'], 'A project that is not feasible must be changed before work starts.'],
  [['Project', 'A planned piece of work that solves a problem or meets a need.'], ['Cost estimate', 'A calculation of the money a project will need.'], ['Preventive maintenance', 'Care given regularly to stop breakdowns.']],
  [
    { q: 'A class plans to make 4 hand-washing stations. Each needs a 20-litre bucket with tap (3500 FCFA), a stand (2000 FCFA) and soap for a term (1500 FCFA). Find the cost estimate.', steps: ['Cost of one station = 3500 + 2000 + 1500 = **7000 FCFA**.', 'For 4 stations: 4 × 7000 = **28 000 FCFA**.', 'Adding about 10% for unexpected costs gives a budget of about **30 800 FCFA**.'] },
  ]),

  L('ph-devices-1', 'ph-f2-tech', '11.2', 'How common appliances and telecommunication devices work', 10, ['Technology'], [
    'Many appliances use simple physics. A **thermostat** in an iron, oven or water heater uses a **bimetallic strip** that bends as it warms and opens the heater circuit, keeping the temperature steady. A **liquid-in-glass thermometer** uses the expansion of a liquid. Gases expand greatly when heated, which is why tyres are not pumped too hard before a long hot journey and aerosol cans must not be thrown into a fire.',
    '**Electrical meters** measure electricity: an **ammeter** measures current in amperes, a **voltmeter** measures voltage in volts, and the household **energy meter** counts kilowatt-hours used.',
    'A **radio** station turns sound into an electrical signal and sends it out as **radio waves** from a transmitter mast. The radio’s **aerial** picks up the waves; the **tuner** selects one station by its frequency; the circuits recover the signal and the **loudspeaker** turns it back into sound. CRTV and other stations broadcast on different frequencies.',
    'A **mobile phone** is a small radio transmitter and receiver. Its **microphone** changes your voice into an electrical signal, which is sent as radio waves (microwaves) to the nearest **mast** (base station) of the network. The network passes it to the mast nearest the other phone, whose **loudspeaker** turns it back into sound. Phones need charged **batteries**; keep them dry, use the right charger and do not charge them on beds or near heat.',
  ], 'em-spectrum', 'For a communication device, trace the signal: **sound → electrical signal → radio waves → electrical signal → sound**.',
  ['The part of a radio that selects one station from many is the:', ['Tuner', 'Loudspeaker', 'Battery', 'Case'], 'The tuner picks out the frequency of the chosen station.'],
  [['Transmitter', 'A device that sends out signals as radio waves.'], ['Aerial (antenna)', 'A wire or rod that sends or receives radio waves.'], ['Base station', 'A mast that links mobile phones to the network.']],
  [
    { q: 'Describe the path of your voice when you call a friend on a mobile phone.', steps: ['The **microphone** changes your voice (sound) into an **electrical signal**.', 'The phone sends it as **radio waves (microwaves)** to the nearest **mast**.', 'The network carries it to the mast nearest your friend, which sends radio waves to their phone.', 'Their phone changes the signal back, and its **loudspeaker** turns it into **sound**.'] },
  ]),
];
