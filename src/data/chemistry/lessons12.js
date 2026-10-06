// Chemistry lessons for Forms 1 and 2 (the Chemistry part of the MINESEC Science
// and Technology syllabus, first cycle). Written for younger readers: short
// paragraphs and everyday Cameroonian examples. Original text written for this
// app. **double asterisks** mark key terms (rendered bold). `examples` are worked
// examples.

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
  L('ch-intro-1', 'ch-f1-intro', '1.1', 'What chemistry is and the tools of the laboratory', 8, ['Apparatus', 'Measurement'], [
    '**Chemistry** is the study of **matter**: what substances are made of, what they are like and how they change into new substances. Cooking food, making soap from palm oil, rusting of a bicycle and the burning of cooking gas are all chemistry.',
    'Chemists work in a **laboratory** with special equipment called **apparatus**. Liquids are held in **beakers**, **conical flasks** and **test tubes**. Solids are moved with a **spatula**. A **filter funnel** holds filter paper, an **evaporating dish** is used to heat a solution until the water goes off, and a **Bunsen burner** standing under a **tripod and gauze** gives the heat.',
    'Chemistry depends on careful **measurement**. Mass is measured with a **balance** in grams (g) or kilograms (kg). Volume of a liquid is measured with a **measuring cylinder**, or more accurately with a **pipette** or **burette**, in cubic centimetres (cm³) or cubic decimetres (dm³). Temperature is measured with a **thermometer** in degrees Celsius (°C), and time with a **stopwatch** in seconds (s).',
    'Liquid in a narrow tube curves at its surface; this curve is the **meniscus**. Read the volume at the **bottom of the meniscus**, with your eye level with it. Looking from above or below gives a wrong reading, called a **parallax error**.',
  ], 'lab-apparatus', 'Remember the units: **mass in g**, **volume in cm³**, **temperature in °C** and **time in s**. 1 dm³ = 1000 cm³ and 1 kg = 1000 g.',
  ['Which apparatus measures the volume of a liquid?', ['A measuring cylinder', 'A balance', 'A thermometer', 'A tripod'], 'A balance measures mass and a thermometer measures temperature; a tripod only holds apparatus.'],
  [['Apparatus', 'The equipment used to carry out experiments.'], ['Meniscus', 'The curved surface of a liquid in a narrow tube.'], ['Parallax error', 'A wrong reading caused by looking at a scale from the side.']],
  [
    { q: 'A measuring cylinder holds 250 cm³ of water. How many dm³ is this?', steps: ['1 dm³ = 1000 cm³, so divide the volume in cm³ by 1000.', '250 ÷ 1000 = 0.25.', 'The volume is **0.25 dm³**.'] },
    { q: 'The bottom of a meniscus lies between the 40 and 50 cm³ marks, on the third of the small lines, and each small line stands for 2 cm³. What is the volume?', steps: ['Start from the lower big mark: 40 cm³.', 'Three small lines above it: 3 × 2 = 6 cm³.', 'Volume = 40 + 6 = **46 cm³**, read at the bottom of the meniscus with the eye level.'] },
  ]),

  L('ch-safety-1', 'ch-f1-intro', '1.2', 'Working safely: rules, hazard signs and the Bunsen burner', 8, ['Safety'], [
    'A laboratory is safe only when everyone follows the **rules**. Never eat, drink or taste anything in the laboratory. Wear **goggles** when heating or using acids and alkalis, tie back long hair and keep bags off the benches. Follow the teacher’s instructions and report every accident or breakage at once.',
    'Containers carry **hazard signs** that warn of danger. A **flammable** substance (for example kerosene or alcohol) catches fire easily, so keep it away from flames. A **corrosive** substance (concentrated acids and caustic soda) burns the skin and eats into materials. A **toxic** substance is a poison. An **irritant** or **harmful** substance causes itching, rashes or illness. An **oxidising** substance makes other things burn more fiercely.',
    'The **Bunsen burner** burns gas mixed with air. With the **air hole closed**, the gas burns with a **luminous yellow flame**: it is quite cool, wavy and leaves black soot on apparatus, but it is easy to see, so use it while the burner is not in use. With the **air hole open**, the gas burns completely with a **non-luminous blue flame**, which is much hotter and clean. This is the flame used for heating.',
    'To light a burner: close the air hole, hold a lit splint above the tube, then turn on the gas. Afterwards open the air hole to get the blue flame. When heating a test tube, hold it with a holder, slope it, heat gently near the top of the liquid and point the open end away from people.',
  ], null, 'For "explain the difference" questions on the Bunsen flame, compare **air hole**, **colour**, **heat** and **soot**.',
  ['Why is the blue flame used for heating rather than the yellow flame?', ['It is hotter and does not leave soot', 'It is easier to see', 'It uses no gas', 'It is cooler and safer'], 'With the air hole open the gas burns completely, giving more heat and no soot.'],
  [['Hazard sign', 'A symbol on a container that warns of a danger.'], ['Corrosive', 'Able to burn the skin and destroy materials.'], ['Non-luminous flame', 'The hot blue flame of a Bunsen burner with its air hole open.']],
  [
    { q: 'A pupil smells gas near a Bunsen burner that will not light. What should she do, in order?', steps: ['Turn off the gas tap at once, so no more gas escapes.', 'Do not strike any match; open the windows so the gas spreads out and leaves the room.', 'Tell the teacher, who will check the tubing and the tap before anyone tries again.'] },
  ]),

  L('ch-change-1', 'ch-f1-change', '2.1', 'Physical and chemical changes', 9, ['Changes'], [
    'Substances change all the time. Some changes are **physical changes**: no new substance is formed and the change is usually **easy to reverse**. Ice melting to water, water boiling to steam, candle wax melting and sugar dissolving in tea are physical changes. The substance changes its state or form, but it is still the same substance.',
    'Other changes are **chemical changes**: one or more **new substances** are formed, and the change is usually **permanent**. Burning firewood, cooking an egg, rusting of iron, souring of milk and the ripening of plantain are chemical changes. Signs of a chemical change include a **colour change**, a **gas** given off, **heat or light** produced, or a new **solid** appearing.',
    'Heating is a good way to see the difference. **Ice** melts and **candle wax** melts; when they cool they become solid again (physical). **Iodine** crystals turn straight into a purple vapour and back to crystals on a cold surface: this is **sublimation**, also physical.',
    'But **sugar** heated strongly melts, turns brown and then black, giving off steam: the black solid is **carbon**, a new substance (chemical). Green **copper(II) carbonate** turns into black **copper(II) oxide** and gives off carbon dioxide (chemical). **Magnesium** ribbon burns with a dazzling white light to leave a white powder, **magnesium oxide** (chemical).',
  ], 'particles-states', 'To decide, ask two questions: **Is a new substance formed?** and **Can it be easily reversed?** A chemical change forms a new substance and is hard to reverse.',
  ['Which of these is a chemical change?', ['Firewood burning', 'Shea butter melting in the sun', 'Water evaporating from a puddle', 'Salt dissolving in water'], 'Burning forms ash, smoke, carbon dioxide and water, which are new substances.'],
  [['Physical change', 'A change in which no new substance is formed.'], ['Chemical change', 'A change in which one or more new substances are formed.'], ['Sublimation', 'A change from solid straight to gas, or gas straight to solid.']],
  [
    { q: 'Classify each change and give a reason: (a) cassava fermenting to make bobolo, (b) palm oil going solid in the cold harmattan, (c) a match burning.', steps: ['(a) Fermenting cassava: **chemical**. Microbes turn the starch into new substances, which changes the smell and taste for good.', '(b) Palm oil going solid: **physical**. It is still palm oil and melts again when it is warmed.', '(c) A match burning: **chemical**. Heat, light and new substances (ash, smoke, gases) are produced and it cannot be reversed.'] },
  ]),

  L('ch-mixtures-1', 'ch-f1-mixtures', '3.1', 'Elements, compounds and mixtures', 9, ['Classification'], [
    'Every substance is either **pure** or a **mixture**. A pure substance has only one kind of matter in it. Pure substances are either **elements** or **compounds**.',
    'An **element** is a substance that cannot be broken down into anything simpler by chemical means. Iron, copper, oxygen, carbon and sulphur are elements. A **compound** is made when two or more elements **join chemically**. Water is a compound of hydrogen and oxygen; common salt is a compound of sodium and chlorine. A compound has **new properties**, different from the elements that make it, and always the **same composition**.',
    'A **mixture** contains two or more substances that are **not chemically joined**. Each keeps its own properties, the amounts can vary, and the parts can be separated by **physical methods**. Air, sea water, garri soaked in water, soil and palm wine are mixtures. Mixtures can be solid in solid (sand and salt), solid in liquid (salt water), liquid in liquid (water and kerosene) or gas in gas (air).',
    'A classic experiment shows the difference. Iron filings and yellow sulphur powder stirred together form a **mixture**: a magnet still pulls out the iron. When the mixture is **heated**, it glows and forms a black solid, **iron(II) sulphide**, a **compound**. The magnet no longer attracts it, because the iron is now chemically joined to the sulphur.',
  ], null, 'Compare mixtures and compounds on four points: **joined or not**, **properties**, **composition** and **how they are separated**.',
  ['Which is a compound?', ['Common salt (sodium chloride)', 'Air', 'Palm wine', 'Sand and water'], 'Salt is sodium and chlorine joined chemically in a fixed ratio. The others are mixtures.'],
  [['Element', 'A substance that cannot be split into simpler substances by chemical means.'], ['Compound', 'Two or more elements chemically joined in a fixed ratio.'], ['Mixture', 'Two or more substances together but not chemically joined.']],
  [
    { q: 'A pupil heats a mixture of iron filings and sulphur. Give two observations that show a compound has formed.', steps: ['The mixture **glows red** and keeps glowing even after the burner is removed: heat is given out by a reaction.', 'A **black solid** forms that is **not attracted by a magnet**, unlike the iron in the mixture.', 'Both show a new substance, iron(II) sulphide, with new properties: a compound.'] },
  ]),

  L('ch-separate-1', 'ch-f1-mixtures', '3.2', 'Separating mixtures', 10, ['Separation', 'Practical'], [
    'Because the parts of a mixture are not joined chemically, they can be separated using differences in their **physical properties**: size, density, magnetism, solubility and boiling point.',
    '**Sieving** separates solids of different sizes (sand and stones). **Winnowing** uses moving air to blow away light chaff from grains of rice or beans. A **magnet** removes iron from other solids. **Decanting** means carefully pouring off a liquid from a solid that has settled at the bottom.',
    '**Filtration** separates an **insoluble solid** from a liquid: muddy water poured through filter paper leaves the mud as the **residue** and lets the clear liquid, the **filtrate**, pass through. **Evaporation** gets a dissolved solid back from its solution by heating off the water; to get good **crystals**, heat only until the solution is saturated and then let it cool slowly (**crystallisation**).',
    '**Simple distillation** gets the **liquid** back from a solution: the liquid boils, its vapour is cooled in a **condenser** and collected as the **distillate**. A **separating funnel** separates two liquids that do not mix, such as palm oil and water. **Chromatography** separates coloured substances such as the dyes in ink. **Sublimation** separates a solid that sublimes, such as iodine or ammonium chloride, from one that does not.',
  ], 'filtration', 'Name the method **and** the property it uses, for example "a magnet, because iron is magnetic and sand is not".',
  ['Which method gives pure water from sea water?', ['Simple distillation', 'Filtration', 'Evaporation to dryness', 'Using a magnet'], 'Distillation boils off the water and condenses it, leaving the salt behind. Evaporation keeps the salt and loses the water.'],
  [['Filtrate', 'The clear liquid that passes through filter paper.'], ['Residue', 'The solid left on the filter paper.'], ['Distillate', 'The liquid collected after distillation.']],
  [
    { q: 'Describe how to obtain dry salt, clean sand and iron filings from a mixture of all three.', steps: ['Pass a **magnet** over the dry mixture to remove the **iron filings**.', 'Add **water** to what is left and stir: the salt dissolves but the sand does not.', '**Filter**: the **sand** stays on the filter paper as the residue; rinse it with a little water and dry it.', '**Evaporate** the filtrate (salt solution) in an evaporating dish to get the **salt**.'] },
  ]),

  L('ch-water-1', 'ch-f1-water', '4.1', 'Water: sources, tests and purification', 9, ['Water'], [
    'Water comes from **rain**, **rivers**, **lakes**, **springs**, **wells** and **boreholes**, and from the sea. We use it for drinking, cooking, washing, farming, building and in factories. Water is an excellent **solvent**: it dissolves so many substances that it is called the **universal solvent**.',
    'Two tests show that a liquid **contains water**: it turns white **anhydrous copper(II) sulphate** blue, and blue **cobalt(II) chloride paper** pink. To show that the water is **pure**, check that it boils at exactly **100 °C** and freezes at **0 °C** at normal pressure. Salt water boils above 100 °C.',
    'Natural water carries **impurities**: mud and sand (suspended solids), dissolved salts and **germs** that cause diseases such as **cholera**, **typhoid** and **dysentery**. At home, water can be made safe by letting it **settle**, **filtering** it through a clean cloth or a sand filter and then **boiling** it, or by adding **water purification tablets**. Store it in a clean, covered container.',
    'Towns get treated water from works such as those of CAMWATER. Water from a river is **screened** to remove large objects, **alum** is added so fine particles clump together and **settle** in a sedimentation tank, then it is **filtered** through beds of sand and gravel and **chlorine** is added to kill germs, before it is pumped to homes.',
  ], 'water-treatment', 'Learn the treatment stages **in order**: screening, sedimentation (with alum), filtration, chlorination, storage.',
  ['Which test shows that water is pure?', ['It boils at exactly 100 °C', 'It turns anhydrous copper(II) sulphate blue', 'It looks clear', 'It has no smell'], 'The copper(II) sulphate test shows only that water is present; a fixed boiling point of 100 °C shows it is pure.'],
  [['Solvent', 'A liquid that dissolves other substances.'], ['Chlorination', 'Adding chlorine to water to kill germs.'], ['Anhydrous', 'Without water.']],
  [
    { q: 'A well near a latrine gives clear water. Explain why it may still be unsafe and how to make it safe at home.', steps: ['Clear water can still carry **germs** from the latrine; they are too small to see.', 'Filter it first if it has any solids, then **boil** it for a few minutes to kill the germs (or add purification tablets as directed).', 'Let it cool and store it in a **clean, covered** container. In future, dig wells at least 30 m away from latrines.'] },
  ]),

  L('ch-air-1', 'ch-f1-air', '5.1', 'The gases in air and how we measure oxygen', 9, ['Air', 'Practical'], [
    'Air is a **mixture** of gases. Dry air contains about **78% nitrogen**, **21% oxygen**, **0.9% argon** and other noble gases, and about **0.04% carbon dioxide**. Air also carries **water vapour**, whose amount changes with the weather, and dust.',
    '**Oxygen** is the **active part** of the air: it is used up when things burn, when iron rusts and when living things respire. **Nitrogen** is the main **inactive part**: it does not support burning. Test for oxygen: it **relights a glowing splint**. Test for carbon dioxide: it turns **limewater milky**.',
    'The percentage of oxygen can be measured. 100 cm³ of air is pushed back and forth between two **syringes** over **heated copper**. The copper turns black as it combines with the oxygen to form copper(II) oxide. When the apparatus has cooled, about **79 cm³** of gas is left, so about 21 cm³ of oxygen, **21%**, was removed.',
    'A simpler experiment uses a **candle** floating on water under an upturned jar. As the candle burns, it uses up oxygen; the water rises into the jar and the candle goes out. This shows that air contains an active part that is used up in burning, although the candle does not remove all of the oxygen.',
  ], 'oxygen-in-air', 'In calculations, oxygen used = **starting volume − final volume**, then percentage = oxygen used ÷ starting volume × 100.',
  ['Why is the apparatus allowed to cool before the final volume is read?', ['Hot gas takes up more space, so the reading would be too large', 'Copper only works when cold', 'Oxygen comes back when hot', 'To make the copper shiny again'], 'Gases expand when heated, so readings are compared at the same (room) temperature.'],
  [['Active part of air', 'Oxygen, the part used in burning, rusting and respiration.'], ['Limewater', 'Calcium hydroxide solution; it turns milky with carbon dioxide.'], ['Inactive part of air', 'Mainly nitrogen, which does not support burning.']],
  [
    { q: 'In the syringe experiment, 80 cm³ of air is passed over hot copper. After cooling, 63 cm³ of gas is left. Find the percentage of oxygen in this sample.', steps: ['Oxygen used = 80 − 63 = **17 cm³**.', 'Percentage = 17 ÷ 80 × 100.', '= **21.25%**, close to the expected 21%.'] },
  ]),

  L('ch-airpoll-1', 'ch-f1-air', '5.2', 'Air pollution and how to reduce it', 8, ['Pollution', 'Environment'], [
    'Air is **polluted** when harmful substances are added to it. The main pollutants come from **burning**: fuels in vehicles, generators and factories, refuse, tyres and the bush.',
    '**Carbon monoxide** comes from fuels burning in too little air: charcoal stoves and generators used in closed rooms have killed many people. It has no colour or smell and stops the blood carrying oxygen. **Sulphur dioxide** and **nitrogen oxides** from engines and factories dissolve in rain to form **acid rain**, which damages crops, forests, buildings and roofing sheets.',
    '**Smoke and dust** irritate the eyes and cause coughs, asthma and other lung diseases. Too much **carbon dioxide** from burning fuels and cutting down forests traps heat and contributes to **global warming**. Chemicals sprayed on farms can also drift in the air.',
    'Pollution can be reduced: never run a generator or charcoal stove indoors, keep engines well serviced, avoid burning refuse, tyres and the bush, **plant trees**, which take in carbon dioxide and trap dust, and use cleaner energy such as solar power where possible.',
  ], 'air-composition', 'For each pollutant, give its **source**, its **effect** and one **way to reduce it**.',
  ['Why is it dangerous to sleep in a closed room with a burning charcoal stove?', ['Carbon monoxide builds up and poisons the blood', 'It makes too much oxygen', 'The charcoal turns into water', 'Nitrogen is used up'], 'In a closed room the charcoal burns in too little air, making carbon monoxide.'],
  [['Pollutant', 'A harmful substance released into the environment.'], ['Acid rain', 'Rain made acidic by dissolved sulphur dioxide and nitrogen oxides.'], ['Carbon monoxide', 'A poisonous gas made when fuels burn in too little air.']],
  [
    { q: 'A town has many old cars, open refuse burning and few trees. Suggest three actions the council could take to clean the air, with a reason for each.', steps: ['Organise **refuse collection** and ban open burning: burning plastic and rubber gives off smoke and poisonous gases.', 'Encourage **vehicle servicing** and check exhaust smoke: well-tuned engines burn fuel more completely, making less carbon monoxide and soot.', '**Plant trees** along roads: they trap dust and take in carbon dioxide.'] },
  ]),

  L('ch-acidsbase-1', 'ch-f1-acids', '6.1', 'Acids, bases and indicators', 9, ['Acids and bases'], [
    '**Acids** are found in many foods: **citric acid** in lemons and oranges, **ethanoic acid** in vinegar and **lactic acid** in sour milk. Weak acids taste **sour**. Strong laboratory acids such as **hydrochloric**, **sulphuric** and **nitric acid** are corrosive and must never be tasted.',
    '**Bases** are the chemical opposites of acids. A base that dissolves in water is called an **alkali**. Wood ash, soap, toothpaste and limewater are alkaline; caustic soda (sodium hydroxide) is a strong alkali. Alkalis feel **soapy** on the skin and are also corrosive when strong.',
    'An **indicator** changes colour depending on whether a solution is acidic or alkaline. **Litmus** turns **red in acids** and **blue in alkalis**. Indicators can be made from coloured plants: crush **hibiscus (folere)** flowers, red cabbage or bougainvillea in water or alcohol and filter. The coloured extract changes colour in acids and alkalis.',
    'The **pH scale** runs from **0 to 14**. A **neutral** solution such as pure water has **pH 7**. Below 7 is **acidic**, and the lower the number, the stronger the acid. Above 7 is **alkaline**, and the higher the number, the stronger the alkali. **Universal indicator** shows the pH by its colour: red for strong acids, green for neutral, purple for strong alkalis.',
  ], 'ph-scale', 'Remember: **pH below 7 acid, 7 neutral, above 7 alkali**. Litmus: **acid red, alkali blue**.',
  ['A solution turns universal indicator purple. Its pH is about:', ['13', '7', '4', '1'], 'Purple shows a strong alkali, at the top of the scale.'],
  [['Alkali', 'A base that dissolves in water.'], ['Indicator', 'A substance that changes colour in acids and alkalis.'], ['pH', 'A number from 0 to 14 that shows how acidic or alkaline a solution is.']],
  [
    { q: 'Arrange these by pH, lowest first, and say whether each is acidic, neutral or alkaline: soap solution (pH 10), lemon juice (pH 2), pure water (pH 7), vinegar (pH 4).', steps: ['Lemon juice, pH 2: **strongly acidic**.', 'Vinegar, pH 4: **weakly acidic**.', 'Pure water, pH 7: **neutral**.', 'Soap solution, pH 10: **alkaline**.'] },
  ]),

  L('ch-acidreact-1', 'ch-f1-acids', '6.2', 'Neutralisation and other reactions of acids', 9, ['Acids and bases'], [
    'When an acid reacts with a base, they cancel each other out to form a **salt** and **water**. This reaction is called **neutralisation**: acid + base → salt + water. For example, hydrochloric acid + sodium hydroxide → sodium chloride + water.',
    'Neutralisation is used every day. **Indigestion tablets** contain a weak base that neutralises extra stomach acid. A **bee sting** is acidic and can be soothed with a little baking soda, while a **wasp sting** is alkaline and can be soothed with vinegar. Farmers add **lime** to **acidic soils** so crops grow better. Toothpaste is alkaline to neutralise the acids made by bacteria on teeth.',
    'Acids react with **carbonates** to give a salt, water and **carbon dioxide**: the mixture **fizzes**. Vinegar poured on limestone or baking soda fizzes for this reason, and the gas turns limewater milky.',
    'Acids also react with many **metals** such as magnesium, zinc and iron, giving a salt and **hydrogen** gas. Hydrogen burns with a **squeaky pop** when a lighted splint is held at the mouth of the tube. This is why acidic foods should not be stored in tins or iron pots for a long time.',
  ], 'gas-preparation', 'Learn the three word equations: **acid + base → salt + water**, **acid + carbonate → salt + water + carbon dioxide**, **acid + metal → salt + hydrogen**.',
  ['Dilute acid is added to marble chips (calcium carbonate). The gas given off:', ['Turns limewater milky', 'Relights a glowing splint', 'Burns with a squeaky pop', 'Turns litmus blue'], 'Acid + carbonate gives carbon dioxide, which turns limewater milky.'],
  [['Neutralisation', 'The reaction of an acid with a base to form a salt and water.'], ['Salt', 'A compound formed when the hydrogen of an acid is replaced by a metal.'], ['Effervescence', 'Fizzing caused by a gas being given off.']],
  [
    { q: 'Complete the word equations: (a) sulphuric acid + magnesium → ?, (b) hydrochloric acid + calcium carbonate → ?', steps: ['(a) Acid + metal → salt + hydrogen: **magnesium sulphate + hydrogen**.', '(b) Acid + carbonate → salt + water + carbon dioxide: **calcium chloride + water + carbon dioxide**.', 'The salt takes its first name from the metal and its second from the acid: sulphuric gives sulphate, hydrochloric gives chloride.'] },
  ]),

  L('ch-solutions-1', 'ch-f1-solutions', '7.1', 'Solutions, suspensions and solubility', 10, ['Solutions', 'Practical'], [
    'When sugar is stirred into water it seems to disappear: it has **dissolved**. The sugar is the **solute**, the water is the **solvent** and the clear mixture is a **solution**. A solution is clear (it may be coloured) and the solute does not settle out or get caught by filter paper.',
    'Some solids do not dissolve: they are **insoluble**. Shaking chalk or mud with water makes a cloudy **suspension**; the particles slowly **settle** and can be **filtered** off. Water is the commonest solvent, but others are used too: **kerosene** removes grease, **alcohol** dissolves iodine and **propanone** removes nail varnish.',
    'A solution that can dissolve no more solute at a given temperature is **saturated**. The **solubility** of a substance is the greatest mass that dissolves in **100 g of water** at a stated temperature. For most solids, solubility **increases** as the temperature rises. Solids dissolve faster when they are **crushed**, when the mixture is **stirred** and when it is **warm**.',
    'When a hot saturated solution **cools**, the solvent can hold less solute, so the extra comes out as **crystals**. Gases behave the other way: they are **less soluble** in warm water. A warm soft drink goes flat quickly, and fish in warm, still water can run short of oxygen.',
  ], 'solubility-apparatus', 'In solubility sums, always scale to **100 g of water**: solubility = mass dissolved ÷ mass of water × 100.',
  ['A pupil dissolves as much salt as possible in water at 25 °C, then adds more salt. What happens to the extra salt?', ['It stays undissolved, because the solution is saturated', 'It dissolves completely', 'It turns into water', 'It evaporates'], 'A saturated solution cannot dissolve any more solute at that temperature.'],
  [['Solute', 'The substance that dissolves.'], ['Saturated solution', 'A solution that can dissolve no more solute at that temperature.'], ['Solubility', 'The mass of solute that dissolves in 100 g of water at a stated temperature.']],
  [
    { q: '12 g of a salt is the most that dissolves in 40 g of water at 30 °C. What is its solubility at 30 °C?', steps: ['Solubility is given per 100 g of water.', '12 g in 40 g of water, so in 100 g: 12 ÷ 40 × 100.', 'Solubility = **30 g per 100 g of water** at 30 °C.'] },
    { q: 'The solubility of potassium nitrate is 110 g per 100 g of water at 60 °C and 32 g at 20 °C. A saturated solution in 100 g of water is cooled from 60 °C to 20 °C. What mass of crystals forms?', steps: ['At 60 °C the water holds 110 g.', 'At 20 °C it can hold only 32 g.', 'Crystals formed = 110 − 32 = **78 g**.'] },
  ]),

  L('ch-elements-1', 'ch-f1-elements', '8.1', 'Metals and non-metals', 9, ['Elements'], [
    'There are over a hundred **elements**. They are the simple substances from which everything is made. About three quarters of them are **metals**, such as iron, copper, aluminium, gold, zinc and sodium. The rest are **non-metals**, such as carbon, sulphur, oxygen, nitrogen and chlorine.',
    'Metals are usually:\n- **shiny** when freshly cut\n- **good conductors** of heat and electricity\n- **malleable**: they can be hammered into sheets\n- **ductile**: they can be drawn into wires\n- **strong** and **dense**\n- **sonorous**: they make a ringing sound\nAlmost all metals are solids at room temperature. **Mercury** is a liquid.',
    'Non-metals are usually **dull** and **poor conductors** (insulators). When solid they are **brittle**: they break into pieces when hit. Many are **gases** (oxygen, nitrogen, chlorine), one is a liquid (**bromine**), and some are solids (carbon, sulphur, phosphorus). **Graphite**, a form of carbon, is an exception: it conducts electricity.',
    'These properties explain the uses of metals:\n- **copper** for electric wires\n- **aluminium** for cooking pots, window frames and roofing (ALUCAM at Edéa produces it)\n- **iron and steel** for building and tools\n- **gold** for jewellery',
    'Non-metals have uses too:\n- **sulphur** for making sulphuric acid and for hardening (vulcanising) rubber\n- **carbon** as charcoal fuel and as pencil "lead"\n- **chlorine** for treating water',
  ], 'conductivity-apparatus', 'When asked why a metal is used for a job, link the use to a **property**: wires need conductivity and ductility; pots need conductivity of heat and no rusting.',
  ['A grey solid is brittle, does not conduct electricity and burns with a blue flame. It is most likely:', ['A non-metal such as sulphur', 'A metal such as iron', 'Mercury', 'Aluminium'], 'Brittleness and not conducting are properties of non-metals.'],
  [['Malleable', 'Able to be hammered into thin sheets without breaking.'], ['Ductile', 'Able to be drawn out into wires.'], ['Brittle', 'Breaking into pieces when hit.']],
  [
    { q: 'Element X is shiny, bends without breaking and lights the bulb in a circuit tester. Element Y is a yellow powder that does not light the bulb. Classify X and Y and give a reason for each.', steps: ['X is a **metal**: it is shiny, malleable (bends without breaking) and conducts electricity.', 'Y is a **non-metal**: it is a dull powder and is an insulator.', 'Y could be **sulphur**, which is yellow.'] },
  ]),

  // ======================= Form 2 =======================
  L('ch-symbols-1', 'ch-f2-formulae', '1.1', 'Atoms, molecules and chemical symbols', 9, ['Symbols'], [
    'All matter is made of tiny particles called **atoms**. An **element** contains only one kind of atom. Atoms often join together in groups called **molecules**: an oxygen molecule is two oxygen atoms joined (O₂), and a water molecule is two hydrogen atoms joined to one oxygen atom (H₂O).',
    'Each element has a **symbol** of one or two letters. The first letter is always a **capital** and the second is **small**: C for carbon, Ca for calcium, Cl for chlorine. Some symbols come from **Latin** names: Na for sodium (natrium), K for potassium (kalium), Fe for iron (ferrum), Cu for copper (cuprum) and Ag for silver (argentum).',
    'The first twenty elements, in order, are: hydrogen H, helium He, lithium Li, beryllium Be, boron B, carbon C, nitrogen N, oxygen O, fluorine F, neon Ne, sodium Na, magnesium Mg, aluminium Al, silicon Si, phosphorus P, sulphur S, chlorine Cl, argon Ar, potassium K and calcium Ca.',
    'A **chemical formula** shows the elements in a substance and how many atoms of each there are. The small number written after a symbol counts the atoms just before it: CO₂ has one carbon atom and two oxygen atoms. A number in front counts whole molecules: 3H₂O means three water molecules.',
  ], 'periodic-table', 'Write symbols with a **capital first letter and a small second letter**. Co is cobalt, but CO is carbon monoxide.',
  ['How many atoms are there altogether in one molecule of glucose, C₆H₁₂O₆?', ['24', '3', '12', '18'], '6 carbon + 12 hydrogen + 6 oxygen = 24 atoms.'],
  [['Atom', 'The smallest particle of an element.'], ['Molecule', 'Two or more atoms chemically joined.'], ['Chemical formula', 'Symbols and numbers that show the atoms in a substance.']],
  [
    { q: 'Name the elements in calcium carbonate, CaCO₃, and count the atoms of each.', steps: ['Ca is **calcium**: no number after it, so **1** atom.', 'C is **carbon**: **1** atom.', 'O is **oxygen**, followed by 3: **3** atoms.', 'Total = 1 + 1 + 3 = **5 atoms** in one formula unit.'] },
    { q: 'How many hydrogen atoms are shown in 2H₂SO₄?', steps: ['One H₂SO₄ has **2** hydrogen atoms.', 'The 2 in front means two units: 2 × 2.', '= **4 hydrogen atoms**.'] },
  ]),

  L('ch-formula-1', 'ch-f2-formulae', '1.2', 'Valency and writing formulae', 10, ['Formulae'], [
    'The **valency** of an element is its **combining power**: the number of hydrogen atoms, or their equal, that one atom can combine with. Hydrogen has valency **1**. In water (H₂O), oxygen holds two hydrogens, so oxygen has valency **2**. In ammonia (NH₃) nitrogen has valency 3, and in methane (CH₄) carbon has valency 4.',
    'Common valencies: **1**: H, Na, K, Ag, Cl, Br, I. **2**: O, Mg, Ca, Zn, Ba, Cu, Fe in iron(II). **3**: Al, N, Fe in iron(III). **4**: C, Si. Some metals have more than one valency, shown by a Roman numeral: **copper(II)**, **iron(III)**.',
    'Some groups of atoms stay together through reactions and act like one atom. These are **radicals**: hydroxide **OH** (1), nitrate **NO₃** (1), hydrogencarbonate **HCO₃** (1), ammonium **NH₄** (1), carbonate **CO₃** (2), sulphate **SO₄** (2) and phosphate **PO₄** (3).',
    'To write a formula: write the symbols, write each valency above, then **swap them over** and write each as a small number after the other symbol. Simplify if both numbers can be divided, leave out any 1, and put brackets around a radical when there is more than one of it.',
  ], null, 'Check every formula: valency × number of atoms must be **equal on both sides**. In Al₂O₃: 3 × 2 = 6 and 2 × 3 = 6.',
  ['What is the formula of sodium carbonate? (Na valency 1, CO₃ valency 2)', ['Na₂CO₃', 'NaCO₃', 'Na(CO₃)₂', 'NaCO'], 'Swap the valencies: Na₂(CO₃)₁, written Na₂CO₃.'],
  [['Valency', 'The combining power of an atom or radical.'], ['Radical', 'A group of atoms that acts as a single unit in compounds.'], ['Roman numeral', 'Shows the valency of a metal with more than one valency, as in iron(III).']],
  [
    { q: 'Write the formula of aluminium oxide.', steps: ['Symbols: Al and O. Valencies: Al = 3, O = 2.', 'Swap them: Al takes 2, O takes 3.', 'Formula = **Al₂O₃**. Check: 2 × 3 = 6 and 3 × 2 = 6.'] },
    { q: 'Write the formula of calcium hydroxide.', steps: ['Symbols: Ca and OH. Valencies: Ca = 2, OH = 1.', 'Swap: Ca takes 1, OH takes 2.', 'OH is a radical and there are two of them, so use brackets: **Ca(OH)₂**.'] },
    { q: 'Write the formula of magnesium oxide.', steps: ['Valencies: Mg = 2, O = 2.', 'Swapping gives Mg₂O₂.', 'Both numbers divide by 2, so simplify: **MgO**.'] },
  ]),

  L('ch-equations-1', 'ch-f2-equations', '2.1', 'Writing and balancing chemical equations', 10, ['Equations'], [
    'A **chemical reaction** turns **reactants** (the starting substances) into **products** (the new substances). The signs that a reaction has happened include a change of colour, a gas given off, a solid forming (a **precipitate**), and heat or light given out.',
    'A **word equation** names the substances: magnesium + oxygen → magnesium oxide. The arrow means "react to form". A **symbol equation** uses formulae: 2Mg + O₂ → 2MgO. **State symbols** show the state of each substance: (s) solid, (l) liquid, (g) gas and (aq) dissolved in water.',
    'In a reaction, atoms are **rearranged**, never created or destroyed, so the total mass stays the same. A correct equation must therefore be **balanced**: the number of atoms of each element must be the same on both sides.',
    'To balance an equation: first write the **correct formulae**, which must never be changed. Then count the atoms of each element on each side, and put **numbers in front** of formulae until the counts match. Balance the elements that appear in only one substance on each side first, and leave elements that appear on their own, such as O₂ or H₂, until last.',
  ], 'balancing-equation', 'Never change the small numbers inside a formula to balance an equation. Change only the **big numbers in front**.',
  ['Which equation is balanced?', ['2Na + Cl₂ → 2NaCl', 'Na + Cl₂ → NaCl', 'Na + Cl → NaCl₂', '2Na + Cl₂ → NaCl'], 'Two sodium and two chlorine atoms on each side.'],
  [['Reactant', 'A substance present at the start of a reaction.'], ['Product', 'A new substance formed in a reaction.'], ['Balanced equation', 'An equation with the same number of each kind of atom on both sides.']],
  [
    { q: 'Balance: H₂ + O₂ → H₂O', steps: ['Count: left H = 2, O = 2; right H = 2, O = 1.', 'Oxygen is short on the right, so put 2 in front of H₂O: H₂ + O₂ → 2H₂O. Now right H = 4, O = 2.', 'Hydrogen is now short on the left, so put 2 in front of H₂: **2H₂ + O₂ → 2H₂O**.', 'Check: 4 H and 2 O on each side.'] },
    { q: 'Balance the burning of methane (cooking gas is similar): CH₄ + O₂ → CO₂ + H₂O', steps: ['Carbon: 1 on each side, already balanced.', 'Hydrogen: 4 on the left, 2 on the right, so write 2H₂O.', 'Oxygen on the right is now 2 (in CO₂) + 2 (in 2H₂O) = 4, so write 2O₂ on the left.', 'Balanced: **CH₄ + 2O₂ → CO₂ + 2H₂O**.'] },
  ]),

  L('ch-burning-1', 'ch-f2-oxygen', '3.1', 'Burning in air and oxygen; putting out fires', 9, ['Oxygen', 'Combustion'], [
    'Burning, or **combustion**, is a reaction of a substance with **oxygen** that gives out **heat and light**. Substances burn much more brightly in pure oxygen than in air, because air is only one fifth oxygen. Oxygen can be prepared in the laboratory from hydrogen peroxide with a catalyst and collected over water.',
    'When elements burn, they form **oxides**. **Magnesium** burns with a dazzling white flame to give white magnesium oxide. **Carbon** (charcoal) glows red and forms carbon dioxide. **Sulphur** burns with a blue flame giving choking **sulphur dioxide**. **Iron** wool burns with sparks to give black iron oxide.',
    'Oxides of **metals** are **basic**: those that dissolve, such as sodium oxide, give **alkaline** solutions. Oxides of **non-metals**, such as carbon dioxide and sulphur dioxide, dissolve in water to give **acidic** solutions; they turn blue litmus red.',
    'A fire needs three things, the **fire triangle**: **fuel**, **oxygen** and **heat**. Remove any one and the fire goes out. Water cools a wood or paper fire. A fire blanket, sand or a carbon dioxide extinguisher cuts off oxygen. Turning off the gas cuts off the fuel. **Never** throw water on burning oil or an electrical fire: the oil spreads, and water conducts electricity.',
  ], 'oxygen-preparation', 'For fire-fighting questions, say **which side of the fire triangle** each method removes.',
  ['A pan of palm oil catches fire. The best action is to:', ['Turn off the heat and cover the pan with a damp cloth or lid', 'Pour water on it', 'Carry it outside quickly', 'Fan the flames'], 'Covering cuts off oxygen; water would make the burning oil spread.'],
  [['Combustion', 'Burning: a reaction with oxygen that gives out heat and light.'], ['Oxide', 'A compound of an element with oxygen.'], ['Fire triangle', 'The three things a fire needs: fuel, oxygen and heat.']],
  [
    { q: 'Sulphur and magnesium are each burned in oxygen and the products are shaken with water containing litmus. Predict and explain the colours.', steps: ['Sulphur is a **non-metal**: it forms sulphur dioxide, an **acidic** oxide, so the litmus turns **red**.', 'Magnesium is a **metal**: it forms magnesium oxide, a **basic** oxide; the little that dissolves gives an alkaline solution, so the litmus turns **blue**.'] },
  ]),

  L('ch-rust-1', 'ch-f2-oxygen', '3.2', 'Rusting and how to prevent it', 8, ['Rusting', 'Practical'], [
    '**Rusting** is the slow reaction of **iron** with **oxygen and water** to form brown, flaky **rust** (hydrated iron(III) oxide). Rust falls off and exposes fresh iron underneath, so rusting goes on until the iron is eaten through. Only iron and steel rust; other metals **corrode** in their own ways.',
    'An experiment with four test tubes shows what is needed. Iron nails are put in: (1) air and water, (2) **boiled water** with a layer of oil on top (no air), (3) **dry air** with anhydrous calcium chloride to absorb moisture (no water) and (4) **salt water**. After a few days, the nails in tubes 1 and 4 have rusted, with tube 4 the worst; the nails in tubes 2 and 3 have not.',
    'So iron needs **both water and oxygen** to rust. **Salt** speeds it up, which is why cars and roofs rust faster in Douala, Limbe and Kribi near the sea. **Acid rain** speeds it up too.',
    'Rusting is prevented by keeping air and water away: **painting** (gates, bridges), **oiling or greasing** (machine parts, bicycle chains), **coating with plastic** (dish racks), **galvanising**, which is coating with **zinc** ("zinc" roofing sheets), and **tin-plating** (food tins). Zinc protects iron even when scratched, because zinc reacts first.',
  ], 'rusting-tubes', 'In the four-tube experiment, say what each tube **removes**: boiled water and oil remove **air**; calcium chloride removes **water**.',
  ['Why is the water in one tube boiled before the nail is added?', ['To remove dissolved air', 'To kill germs', 'To make the water salty', 'To make the nail hot'], 'Boiling drives out the dissolved air; the oil layer stops air dissolving again.'],
  [['Rust', 'Hydrated iron(III) oxide, formed when iron reacts with water and oxygen.'], ['Galvanising', 'Coating iron with zinc to stop it rusting.'], ['Corrosion', 'The slow wearing away of a metal by reaction with substances around it.']],
  [
    { q: 'Explain why a bicycle left near the beach at Limbe rusts faster than one kept indoors in Maroua.', steps: ['Rusting needs **water and oxygen**: near the sea the air is damp and spray reaches the metal, while Maroua is dry.', 'Sea spray contains **salt**, which speeds up rusting.', 'So the Limbe bicycle has more water and salt on it, and rusts faster. Oiling the chain and painting the frame would protect it.'] },
  ]),

  L('ch-atomf2-1', 'ch-f2-atom', '4.1', 'Inside the atom', 10, ['Atomic structure'], [
    'Atoms are made of even smaller particles. In the centre is a tiny, heavy **nucleus** containing **protons** (positive charge) and **neutrons** (no charge). Around the nucleus, **electrons** (negative charge, almost no mass) move in **shells**. This picture is called the **Bohr model**.',
    'A proton and a neutron each have a mass of about **1 unit**; an electron is about 1840 times lighter. An atom is **neutral** because it has the **same number of protons and electrons**.',
    'The **atomic number** (Z) is the number of **protons**; each element has its own. The **mass number** (A) is the number of **protons plus neutrons**. So **neutrons = A − Z**. An atom is written with A at the top and Z at the bottom of the symbol: sodium-23 has Z = 11 and A = 23.',
    'Electrons fill shells from the inside out: the **first shell** holds up to **2**, the **second** up to **8**, and for the first twenty elements the **third** holds up to **8** before the fourth begins. This **electron arrangement** is written with dots: sodium (11 electrons) is **2.8.1** and calcium (20) is **2.8.8.2**.',
  ], 'atom-structure', 'Use the three rules: **protons = Z**, **electrons = Z** (neutral atom), **neutrons = A − Z**. Then fill shells 2, 8, 8, 2.',
  ['An atom of aluminium has atomic number 13. Its electron arrangement is:', ['2.8.3', '2.8.2.1', '2.11', '8.2.3'], 'Fill the shells in order: 2, then 8, then the last 3.'],
  [['Nucleus', 'The tiny centre of an atom, containing protons and neutrons.'], ['Atomic number', 'The number of protons in an atom.'], ['Mass number', 'The number of protons plus neutrons in an atom.']],
  [
    { q: 'Chlorine-35 has atomic number 17. Find the numbers of protons, electrons and neutrons, and the electron arrangement.', steps: ['Protons = atomic number = **17**.', 'Electrons = protons in a neutral atom = **17**.', 'Neutrons = mass number − atomic number = 35 − 17 = **18**.', 'Electrons in shells: 2, then 8, then 7: **2.8.7**.'] },
    { q: 'An atom has 19 electrons and 20 neutrons. Find its atomic number and mass number, and name it.', steps: ['Atomic number = protons = electrons = **19**.', 'Mass number = protons + neutrons = 19 + 20 = **39**.', 'Element 19 is **potassium**, K.'] },
  ]),

  L('ch-familiesf2-1', 'ch-f2-periodic', '5.1', 'The Periodic Table: periods, groups and families', 10, ['Periodic Table'], [
    'In the **Periodic Table** the elements are arranged in order of **atomic number**. The horizontal rows are **periods** and the vertical columns are **groups**. **Metals** are on the **left** and in the middle; **non-metals** are on the **right**.',
    'The **period number** equals the number of **electron shells**. The **group number** equals the number of **electrons in the outer shell**. Sodium, 2.8.1, has three shells and one outer electron, so it is in **Period 3, Group I**. Elements in the same group have the same number of outer electrons, so they have **similar chemical properties**: they form a **family**.',
    '**Group I**, the **alkali metals** (lithium, sodium, potassium), are soft metals that react with water to give hydrogen and an alkaline solution. They become **more reactive going down** the group: potassium reacts so violently that the hydrogen catches fire. They are stored under oil.',
    '**Group VII**, the **halogens** (fluorine, chlorine, bromine, iodine), are coloured, poisonous non-metals; they become **less reactive going down**. **Group 0**, the **noble gases** (helium, neon, argon), have **full outer shells**, so they are **unreactive**. Helium fills balloons, neon glows in signs and argon fills light bulbs.',
  ], 'periodic-table', 'From an electron arrangement: **number of shells = period**, **last number = group** (a full shell means Group 0).',
  ['An element has the electron arrangement 2.8.6. It is in:', ['Period 3, Group VI', 'Period 6, Group III', 'Period 2, Group VIII', 'Period 3, Group II'], 'Three shells give Period 3; six outer electrons give Group VI. It is sulphur.'],
  [['Period', 'A horizontal row of the Periodic Table.'], ['Group', 'A vertical column of elements with the same number of outer electrons.'], ['Noble gases', 'The unreactive elements of Group 0, with full outer shells.']],
  [
    { q: 'Element Q has atomic number 19. Find its group and period, say what family it belongs to and predict how it reacts with water compared with sodium.', steps: ['Electron arrangement of 19 electrons: **2.8.8.1**.', 'Four shells give **Period 4**; one outer electron gives **Group I**: it is an **alkali metal** (potassium).', 'Alkali metals get more reactive down the group, and Q is below sodium, so Q reacts **more violently** with water, giving hydrogen and an alkaline solution.'] },
  ]),

  L('ch-purity-1', 'ch-f2-purity', '6.1', 'States of matter, purity and further separation', 10, ['States of matter', 'Purity'], [
    'Matter exists as **solid**, **liquid** or **gas**. In a **solid**, the particles are packed closely in a regular pattern and only **vibrate**, so a solid has a fixed shape and volume. In a **liquid**, the particles are close but **slide past one another**, so a liquid flows and takes the shape of its container. In a **gas**, the particles are far apart and move **fast in all directions**, so a gas fills any container and can be squashed.',
    'Changes of state: **melting** (solid to liquid), **freezing** (liquid to solid), **evaporation** and **boiling** (liquid to gas), **condensation** (gas to liquid) and **sublimation** (solid straight to gas). Heating gives the particles more energy so they move faster and further apart.',
    'A **pure** substance melts and boils at **fixed temperatures**. **Impurities** lower the melting point and spread it over a range, and raise the boiling point. Pure water melts at 0 °C and boils at 100 °C; salty water freezes below 0 °C and boils above 100 °C. A pure dye gives **one spot** on a chromatogram.',
    'Two more separation methods: **fractional distillation** separates liquids that mix but have different boiling points, such as **alcohol** (78 °C) and **water** (100 °C), using a **fractionating column**. Refineries such as SONARA at Limbe use it to separate crude oil into petrol, kerosene, diesel and other fractions. **Centrifuging** spins a mixture very fast so that fine solids collect at the bottom; it separates blood cells from plasma.',
  ], 'fractional-distillation', 'To show purity, quote a **sharp melting point** or a **fixed boiling point**, or a **single spot** on a chromatogram.',
  ['A sample of a solid melts over the range 76 to 80 °C. The pure solid melts at 81 °C. The sample is:', ['Impure, because it melts lower and over a range', 'Pure, because it melts', 'Pure, because 80 °C is close to 81 °C', 'A gas'], 'Impurities lower the melting point and spread it over a range.'],
  [['Melting point', 'The temperature at which a solid turns into a liquid.'], ['Fractional distillation', 'Separating liquids with different boiling points using a fractionating column.'], ['Centrifuging', 'Spinning a mixture fast so that solids collect at the bottom.']],
  [
    { q: 'Three liquids are tested. A boils at exactly 100 °C, B boils at 103 °C and C boils gradually from 78 °C to 100 °C. Which is pure water, and what could B and C be?', steps: ['**A** boils at a fixed 100 °C: **pure water**.', '**B** boils above 100 °C: water with a **dissolved solid**, such as salt water.', '**C** boils over a range starting at 78 °C: a **mixture of alcohol and water**, which could be separated by fractional distillation.'] },
  ]),

  L('ch-heatf2-1', 'ch-f2-heat', '7.1', 'Fuels, energy and the action of heat on compounds', 10, ['Energy', 'Practical'], [
    'A **fuel** is a substance that releases useful **energy** when it burns. Fuels used in Cameroon include **firewood** and **charcoal**, **kerosene**, **cooking gas** (butane), **petrol** and **diesel**. Burning a fuel is an **exothermic** reaction: it gives out heat. A good fuel gives a lot of heat, burns without much smoke, is easy to store and is affordable.',
    'Energy sources can be **renewable** (they do not run out): the sun, wind, flowing water (the dams at Edéa, Song Loulou and Lom Pangar), and wood from replanted trees. Or **non-renewable**: **fossil fuels** such as crude oil, natural gas and coal, which took millions of years to form and will run out.',
    'Heat breaks some compounds down into simpler substances: this is **thermal decomposition**. Limestone (calcium carbonate) heated strongly gives **quicklime** (calcium oxide) and **carbon dioxide**, the reaction used to make lime and cement. Green copper(II) carbonate turns into black copper(II) oxide. Potassium manganate(VII) gives off **oxygen**.',
    'Blue **copper(II) sulphate crystals** contain water chemically held in the crystal, called **water of crystallisation**. Heating drives it off and leaves a **white powder**; adding water turns it blue again and gives out heat. The mass lost on heating is the mass of water driven off, so heating is continued until the mass stops changing (**heating to constant mass**).',
  ], 'crucible-heating', 'Thermal decomposition always means **one substance → two or more simpler substances**, caused by heat.',
  ['When limestone is heated strongly, it loses mass because:', ['Carbon dioxide gas escapes', 'It gains oxygen', 'It melts', 'Water is added'], 'Calcium carbonate → calcium oxide + carbon dioxide, and the gas leaves the crucible.'],
  [['Fuel', 'A substance burned to release useful energy.'], ['Thermal decomposition', 'Breaking down a compound by heating it.'], ['Water of crystallisation', 'Water chemically held inside a crystal.']],
  [
    { q: 'A crucible with blue copper(II) sulphate crystals weighs 25.0 g; the empty crucible weighs 20.0 g. After heating to constant mass it weighs 23.2 g. Find the mass of the crystals, the mass of water lost and the percentage of water in the crystals.', steps: ['Mass of crystals = 25.0 − 20.0 = **5.0 g**.', 'Mass of water lost = 25.0 − 23.2 = **1.8 g**.', 'Percentage of water = 1.8 ÷ 5.0 × 100 = **36%**.'] },
  ]),

  L('ch-electricityf2-1', 'ch-f2-electricity', '8.1', 'Electricity and materials: electrolysis', 10, ['Electrolysis', 'Practical'], [
    'A **conductor** lets electricity pass; an **insulator** does not. Metals and graphite conduct as **solids** without changing. Plastic, rubber, dry wood and glass are insulators. Some substances do not conduct as solids but do when **melted** or **dissolved in water**: salt, acids and alkalis. These are **electrolytes**, and the electricity **breaks them down**.',
    'Breaking down a substance with electricity is **electrolysis**. Two rods, the **electrodes**, dip into the electrolyte and are joined to a battery. The electrode joined to the positive terminal is the **anode** (+); the one joined to the negative terminal is the **cathode** (−). Sugar solution and kerosene are **non-electrolytes**: they do not conduct.',
    'In the **electrolysis of water** made conducting with a little sulphuric acid, bubbles of **hydrogen** form at the **cathode** and **oxygen** at the **anode**. The volume of hydrogen is **twice** the volume of oxygen, matching the formula H₂O. Hydrogen pops with a lighted splint; oxygen relights a glowing splint.',
    'In the electrolysis of **copper(II) sulphate** solution, pink **copper** is deposited on the cathode and the blue colour fades. Electrolysis is used in **electroplating**: the object to be coated is made the **cathode** in a solution of the plating metal, for example plating spoons with silver or steel with chromium. It is also used to extract reactive metals: **aluminium** is extracted from its oxide at Edéa using cheap hydroelectric power.',
  ], 'electrolysis', 'Remember **PANIC**: Positive is Anode, Negative Is Cathode. Metals and hydrogen form at the **cathode**.',
  ['To silver-plate a copper spoon, the spoon should be:', ['The cathode, in a solution of a silver salt', 'The anode, in salt water', 'The cathode, in sugar solution', 'Left out of the circuit'], 'Silver is deposited on the cathode, so the object to be plated is the cathode.'],
  [['Electrolyte', 'A substance that conducts electricity when molten or dissolved and is broken down by it.'], ['Anode', 'The positive electrode.'], ['Cathode', 'The negative electrode.']],
  [
    { q: 'In the electrolysis of acidified water, 30 cm³ of hydrogen is collected. What volume of oxygen is collected at the same time, and at which electrode?', steps: ['Water is H₂O: two hydrogen to one oxygen, so the volume of hydrogen is **twice** that of oxygen.', 'Oxygen = 30 ÷ 2 = **15 cm³**.', 'Oxygen is given off at the **anode** (+); hydrogen at the cathode (−).'] },
  ]),
];
