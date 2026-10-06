// Extra questions for the end of Chemistry lessons, so that every lesson ends with
// at least five questions on what it teaches (see src/lib/lessonQuiz.js).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'ch-intro-1': [
    Q('A wrong reading caused by looking at a scale from above or below is called:', ['A parallax error', 'A meniscus', 'A standard error', 'A burette error'], 'Read with your eye level with the bottom of the meniscus.'),
    Q('Which apparatus is used to move a small amount of a solid?', ['A spatula', 'A pipette', 'A thermometer', 'A tripod'], 'A pipette measures liquids; a tripod holds apparatus over the burner.'),
  ],
  'ch-mixtures-1': [
    Q('An element is a substance that:', ['Cannot be broken down into anything simpler by chemical means', 'Contains two kinds of atom', 'Can be separated by filtering', 'Is always a liquid'], 'Iron, copper, oxygen and carbon are elements.'),
    Q('Which of these is a mixture?', ['Palm wine', 'Water', 'Common salt', 'Copper'], 'Water and salt are compounds; copper is an element.'),
  ],
  'ch-airpoll-1': [
    Q('Acid rain forms when sulphur dioxide and nitrogen oxides:', ['Dissolve in rain water', 'Are absorbed by trees', 'Freeze in clouds', 'React with sand'], 'The acidic solution damages crops, buildings and roofing sheets.'),
    Q('Planting trees helps reduce air pollution because trees:', ['Take in carbon dioxide and trap dust', 'Give out carbon monoxide', 'Burn easily', 'Make acid rain'], 'Trees remove carbon dioxide during photosynthesis.'),
  ],
  'ch-acidreact-1': [
    Q('Acids react with magnesium to give a salt and:', ['Hydrogen gas', 'Carbon dioxide', 'Oxygen', 'Chlorine'], 'Carbonates, not metals, give carbon dioxide.'),
    Q('Hydrogen gas is identified because it:', ['Burns with a squeaky pop', 'Turns limewater milky', 'Relights a glowing splint', 'Bleaches litmus'], 'Hold a lighted splint at the mouth of the tube.'),
  ],
  'ch-rust-1': [
    Q('Rust is:', ['Hydrated iron(III) oxide', 'Iron sulphide', 'Zinc oxide', 'Copper carbonate'], 'It is brown and flaky and falls off the iron.'),
    Q('A bicycle chain is protected from rusting by:', ['Oiling or greasing it', 'Painting it thickly', 'Washing it in salt water', 'Leaving it in the rain'], 'Paint would crack on moving parts; oil keeps air and water away.'),
  ],
  'ch-atoms-3': [
    Q('Sodium reacts with water to form:', ['Sodium hydroxide and hydrogen', 'Sodium chloride and oxygen', 'Sodium oxide only', 'Hydrochloric acid'], '2Na + 2H₂O → 2NaOH + H₂.'),
    Q('Going down Group I, the reactivity of the alkali metals:', ['Increases', 'Decreases', 'Stays the same', 'First rises then falls'], 'The outer electron is further from the nucleus and is lost more easily.'),
    Q('Argon is used to fill light bulbs because it:', ['Does not react with the hot filament', 'Burns brightly', 'Is coloured', 'Is very reactive'], 'Noble gases are unreactive.'),
    Q('Which is a typical property of transition metals?', ['They form coloured compounds and are often catalysts', 'They are soft with low melting points', 'They are all gases', 'They have only one valency'], 'Iron is the catalyst in the Haber process.'),
  ],
  'ch-bonding-1': [
    Q('When a sodium atom forms an ion, it:', ['Loses one electron to form Na⁺', 'Gains one electron to form Na⁻', 'Shares an electron', 'Loses its nucleus'], 'It then has the arrangement 2, 8, like neon.'),
    Q('Ionic compounds have high melting points because:', ['A lot of energy is needed to overcome the strong attractions between the ions', 'Their molecules are very small', 'They contain no ions', 'They are liquids'], 'The lattice holds many strong electrostatic attractions.'),
  ],
  'ch-bonding-3': [
    Q('Graphite is soft and slippery because:', ['Its layers are held by weak forces and slide over each other', 'Each carbon atom is bonded to four others', 'It is a metal', 'It contains water'], 'It is used as a lubricant and in pencils.'),
    Q('Metals can be hammered into shape because:', ['Layers of ions can slide without breaking the metallic bonding', 'They have no electrons', 'Their atoms share covalent bonds', 'They are liquids'], 'The sea of delocalised electrons holds the layers together as they slide.'),
  ],
  'ch-nonmetals-1': [
    Q('In the laboratory, oxygen is made by decomposing hydrogen peroxide with:', ['A manganese(IV) oxide catalyst', 'Iron filings', 'Limewater', 'Copper(II) sulphate'], 'The catalyst speeds up the decomposition.'),
    Q('A catalytic converter changes carbon monoxide and nitrogen oxides into:', ['Carbon dioxide and nitrogen', 'Sulphur dioxide and water', 'Methane', 'Ozone'], 'These products are much less harmful.'),
  ],
  'ch-nonmetals-2': [
    Q('Aluminium sulphate is added during water treatment to:', ['Make small particles clump together and settle', 'Kill bacteria', 'Make the water hard', 'Add colour'], 'Chlorine kills the bacteria later.'),
    Q('Temporary hardness of water is removed by:', ['Boiling', 'Adding chlorine', 'Filtering through sand', 'Freezing'], 'Boiling decomposes calcium hydrogencarbonate.'),
  ],
  'ch-moles-1': [
    Q('When balancing an equation, you may change:', ['The numbers in front of the formulae', 'The small numbers inside the formulae', 'The symbols of the elements', 'Nothing at all'], 'Changing a formula would make it a different substance.'),
    Q('Ions that appear unchanged on both sides of an equation are called:', ['Spectator ions', 'Cations', 'Molecules', 'Catalysts'], 'They are left out of the ionic equation.'),
  ],
  'ch-moles-2': [
    Q('What is the relative formula mass of CaCO₃? (Ca = 40, C = 12, O = 16)', ['100', '68', '56', '84'], '40 + 12 + 3 × 16 = 100.'),
    Q('What volume does 0.5 mol of carbon dioxide occupy at room temperature and pressure?', ['12 dm³', '24 dm³', '6 dm³', '48 dm³'], '0.5 × 24 = 12 dm³.'),
  ],
  'ch-redox-2': [
    Q('At the anode, negative ions:', ['Lose electrons (oxidation)', 'Gain electrons (reduction)', 'Become metals', 'Stop moving'], 'The anode is the positive electrode.'),
    Q('In the electrolysis of molten lead(II) bromide, the red-brown fumes at the anode are:', ['Bromine', 'Lead', 'Hydrogen', 'Oxygen'], 'Lead forms at the cathode.'),
  ],
  'ch-redox-3': [
    Q('Electrolysis of brine gives chlorine at the anode, hydrogen at the cathode and:', ['Sodium hydroxide in the solution', 'Sodium metal', 'Oxygen', 'Hydrochloric acid'], 'All three products are useful.'),
    Q('When copper(II) sulphate solution is electrolysed with copper electrodes, the anode:', ['Gets thinner as copper goes into solution', 'Gets thicker', 'Gives off oxygen', 'Turns into silver'], 'The cathode gains the same mass of copper.'),
  ],
  'ch-titration-1': [
    Q('Concentration in mol/dm³ is calculated as:', ['Moles ÷ volume in dm³', 'Mass × volume', 'Volume ÷ moles', 'Moles × molar mass'], 'Change cm³ to dm³ by dividing by 1000 first.'),
    Q('What is the concentration of 0.5 mol of solute dissolved to make 2 dm³ of solution?', ['0.25 mol/dm³', '1.0 mol/dm³', '2.5 mol/dm³', '4.0 mol/dm³'], '0.5 ÷ 2 = 0.25 mol/dm³.'),
  ],
  'ch-analysis-2': [
    Q('Silver nitrate solution gives a cream precipitate with:', ['Bromide ions', 'Chloride ions', 'Iodide ions', 'Sulphate ions'], 'Chloride gives white and iodide yellow.'),
    Q('Dilute nitric acid, not hydrochloric acid, is added before silver nitrate in the halide test because:', ['Hydrochloric acid would add chloride ions', 'Nitric acid is cheaper', 'Hydrochloric acid is an alkali', 'Nitric acid colours the precipitate'], 'Added chloride would give a false white precipitate.'),
  ],
  'ch-analysis-3': [
    Q('Which gas relights a glowing splint?', ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Ammonia'], 'Hydrogen pops with a lighted splint.'),
    Q('Limewater turns milky with carbon dioxide because:', ['Insoluble calcium carbonate forms', 'The gas bleaches it', 'Hydrogen is produced', 'The limewater boils'], 'Limewater is calcium hydroxide solution.'),
    Q('Sulphur dioxide turns acidified potassium manganate(VII):', ['From purple to colourless', 'From colourless to purple', 'From orange to green', 'From blue to red'], 'Acidified dichromate(VI) turns from orange to green.'),
  ],
  'ch-matter-3': [
    Q('The start line in paper chromatography is drawn in pencil because:', ['Pencil does not dissolve in the solvent', 'Ink is too expensive', 'Pencil is a locating agent', 'Pencil makes the dyes move faster'], 'Ink would itself separate and spoil the chromatogram.'),
    Q('Impurities in a substance:', ['Lower its melting point and make it melt over a range', 'Raise its melting point', 'Make it melt sharply', 'Have no effect'], 'A pure substance has a sharp melting point.'),
  ],
  'ch-acids-3': [
    Q('Which of these salts is insoluble in water?', ['Barium sulphate', 'Sodium chloride', 'Potassium nitrate', 'Ammonium sulphate'], 'All sodium, potassium and ammonium salts and all nitrates are soluble.'),
    Q('To make copper(II) sulphate from copper(II) oxide and dilute sulphuric acid, excess oxide is added so that:', ['All the acid reacts', 'More acid forms', 'The solution stays acidic', 'No salt forms'], 'The unreacted oxide is filtered off afterwards.'),
    Q('Sodium chloride is prepared from sodium hydroxide and hydrochloric acid by:', ['Titration, then crystallisation', 'Precipitation', 'Adding excess solid and filtering', 'Distillation'], 'Both reactants are solutions, so the exact volumes are found by titration.'),
  ],
  'ch-matter-2': [
    Q('In filtration, the liquid that passes through the filter paper is the:', ['Filtrate', 'Residue', 'Distillate', 'Solvent front'], 'The solid left on the paper is the residue.'),
    Q('In simple distillation, the thermometer bulb is placed level with the side arm to:', ['Measure the temperature of the vapour leaving', 'Heat the liquid', 'Cool the condenser', 'Stop the boiling'], 'This shows when the pure liquid is distilling.'),
  ],
  'ch-organic-2': [
    Q('The general formula of the alkenes is:', ['CnH2n', 'CnH2n+2', 'CnH2n+1OH', 'CnH2n-2'], 'CnH2n+2 is the alkanes.'),
    Q('Most plastics cause litter problems because they are:', ['Non-biodegradable', 'Soluble in rain', 'Made from plants', 'Melted by sunlight'], 'Microorganisms cannot break them down.'),
  ],
  'ch-organic-3': [
    Q('Wine turns to vinegar when its ethanol is:', ['Oxidised to ethanoic acid by bacteria in air', 'Reduced to ethane', 'Polymerised', 'Fermented back into sugar'], 'Vinegar is a dilute solution of ethanoic acid.'),
    Q('Esters are used in perfumes and flavourings because they:', ['Have sweet smells', 'Are strong acids', 'Are alkalis', 'Are polymers'], 'They form from an alcohol and a carboxylic acid.'),
  ],
  'ch-energy-3': [
    Q('Heating blue hydrated copper(II) sulphate gives:', ['White anhydrous copper(II) sulphate and water', 'Black copper oxide only', 'Copper metal', 'A blue gas'], 'Adding water turns it blue again and releases heat.'),
    Q('A catalyst in a reversible reaction:', ['Helps equilibrium to be reached sooner without changing its position', 'Shifts the equilibrium to the right', 'Shifts it to the left', 'Stops the reaction'], 'It speeds up the forward and backward reactions equally.'),
    Q('About 450 °C is used in the Haber process because it is:', ['A compromise between a good yield and a fast rate', 'The temperature that gives the highest yield', 'The melting point of iron', 'The boiling point of ammonia'], 'A lower temperature gives more ammonia but too slowly.'),
  ],
  'ch-metals-1': [
    Q('Brass is an alloy of:', ['Copper and zinc', 'Iron and carbon', 'Copper and tin', 'Aluminium and iron'], 'Bronze is copper and tin; steel is iron and carbon.'),
    Q('Stainless steel is used for cutlery because it:', ['Does not rust', 'Is very soft', 'Conducts no heat', 'Is very light'], 'It contains chromium and nickel.'),
  ],
  'ch-nonmetals-3': [
    Q('In the Haber process, ammonia is made from:', ['Nitrogen and hydrogen', 'Nitrogen and oxygen', 'Ammonium chloride and water', 'Sulphur and oxygen'], 'N₂ + 3H₂ ⇌ 2NH₃.'),
    Q('Most ammonia is used to make:', ['Fertilisers', 'Glass', 'Petrol', 'Cement'], 'Ammonium nitrate and ammonium sulphate supply nitrogen to crops.'),
    Q('Ammonium fertilisers should not be mixed with lime on a farm because:', ['Ammonia gas is lost', 'The lime becomes acidic', 'The soil becomes waterlogged', 'The fertiliser explodes'], 'An alkali drives ammonia out of ammonium salts.'),
    Q('Heating limestone in a lime kiln gives:', ['Quicklime (calcium oxide) and carbon dioxide', 'Slaked lime and oxygen', 'Cement and water', 'Calcium and carbon'], 'CaCO₃ → CaO + CO₂.'),
    Q('Slaked lime (calcium hydroxide) is used by farmers to:', ['Neutralise acidic soils', 'Make soil more acidic', 'Kill weeds', 'Store water'], 'It is a base.'),
  ],
};
