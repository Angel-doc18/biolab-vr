// Extra questions for the end of A Level Chemistry lessons, so that every lesson
// ends with at least five questions on what it teaches (see src/lib/lessonQuiz.js).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'ac-mole-2': [
    Q('The limiting reactant is the one that:', ['Is used up first and decides how much product forms', 'Is in excess', 'Acts as a catalyst', 'Has the largest Mr'], 'Find it before calculating the theoretical yield.'),
    Q('Atom economy is calculated as:', ['Mass of desired product ÷ total mass of all products × 100', 'Actual yield ÷ theoretical yield × 100', 'Moles of product ÷ moles of reactant', 'Mass of reactants ÷ mass of products'], 'The second option is percentage yield.'),
  ],
  'ac-mole-3': [
    Q('Titres are concordant when they agree within:', ['0.10 cm³', '1.0 cm³', '5 cm³', '0.5 dm³'], 'Average the concordant titres only.'),
    Q('No separate indicator is needed in a potassium manganate(VII) titration because:', ['Purple MnO₄⁻ is reduced to almost colourless Mn²⁺, so the first permanent pink shows the end point', 'Mn²⁺ is deep purple', 'The solution turns blue at the end', 'Starch is already present'], 'The reagent acts as its own indicator.'),
    Q('Starch is the indicator in titrations of:', ['Iodine with thiosulphate', 'Sodium hydroxide with hydrochloric acid', 'Manganate(VII) with iron(II)', 'Silver nitrate with chloride'], 'Starch gives a blue-black colour with iodine.'),
  ],
  'ac-atom-1': [
    Q('Which particle is not deflected in an electric field?', ['The neutron', 'The proton', 'The electron', 'An alpha particle'], 'Neutrons carry no charge.'),
    Q('Which particle has a relative mass of about 1/1840?', ['The electron', 'The proton', 'The neutron', 'An alpha particle'], 'Protons and neutrons each have a relative mass of about 1.'),
  ],
  'ac-atom-2': [
    Q('In beta (β⁻) decay, the atomic number:', ['Increases by 1', 'Decreases by 2', 'Stays the same', 'Decreases by 1'], 'A neutron becomes a proton; the mass number is unchanged.'),
    Q('Which radiation is reduced only by thick lead or concrete?', ['Gamma rays', 'Alpha particles', 'Beta particles', 'Cathode rays'], 'Alpha is stopped by paper and beta by a few mm of aluminium.'),
    Q('Carbon-14 is used to:', ['Date once-living material', 'Treat the thyroid', 'Sterilise medical equipment', 'Detect smoke'], 'Its half-life is 5730 years.'),
  ],
  'ac-bond-1': [
    Q('In a dative (coordinate) bond:', ['Both shared electrons come from the same atom', 'Electrons are transferred completely', 'No electrons are shared', 'Three electrons are shared'], 'NH₃ donates its lone pair to H⁺ in NH₄⁺.'),
    Q('Which molecule is non-polar although its bonds are polar?', ['CO₂', 'HCl', 'H₂O', 'NH₃'], 'Its two bond dipoles point in opposite directions and cancel.'),
    Q('The melting points of sodium, magnesium and aluminium rise in that order because:', ['The number of delocalised electrons per atom increases', 'The atoms get larger', 'They become non-metals', 'Their ions become negative'], 'More delocalised electrons and smaller, more charged ions give stronger metallic bonding.'),
  ],
  'ac-org1-1': [
    Q('Successive members of a homologous series differ by:', ['CH₂', 'CH₃', 'C₂H₄', 'H₂O'], 'They share a functional group and general formula.'),
    Q('Ethanol and methoxymethane (both C₂H₆O) are isomers of which type?', ['Functional group isomers', 'Chain isomers', 'Optical isomers', 'Geometric isomers'], 'One is an alcohol and the other an ether.'),
  ],
  'ac-org1-2': [
    Q('In recrystallisation, the impure solid is first dissolved in:', ['The minimum of hot solvent', 'A large volume of cold solvent', 'Concentrated acid', 'Any amount of water'], 'Using the minimum means most of it crystallises on cooling.'),
    Q('Anhydrous magnesium sulphate is added to an organic liquid to:', ['Dry it by removing water', 'Neutralise it', 'Colour it', 'Make it boil'], 'The liquid is then filtered off and redistilled.'),
    Q('Steam distillation is used to separate:', ['Volatile substances that do not mix with water, such as essential oils', 'Salt from water', 'Two gases', 'Ions in solution'], 'They distil at below 100 °C with the steam.'),
    Q('Washing an organic product with sodium hydrogencarbonate solution removes:', ['Acidic impurities', 'Water', 'Alkenes', 'Halogens'], 'The acid reacts and goes into the aqueous layer.'),
  ],
  'ac-org1-3': [
    Q('Crude oil is separated into fractions by:', ['Fractional distillation', 'Cracking', 'Filtration', 'Electrolysis'], 'The fractions have different boiling ranges.'),
    Q('Alkanes are fairly unreactive because:', ['Their C–C and C–H bonds are strong and non-polar', 'They are ionic', 'They contain double bonds', 'They contain oxygen'], 'They react mainly by burning and free-radical substitution.'),
  ],
  'ac-org1-4': [
    Q('The general formula of the alkynes is:', ['CₙH₂ₙ₋₂', 'CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙHₙ'], 'Ethyne is C₂H₂.'),
    Q('Ethyne is used in welding because:', ['It burns in oxygen with a very hot flame', 'It does not burn', 'It is unreactive', 'It is a liquid at room temperature'], 'The oxy-ethyne (oxy-acetylene) flame.'),
  ],
  'ac-org2-1': [
    Q('Heating a halogenoalkane with ethanolic KCN gives:', ['A nitrile with one more carbon atom', 'An alcohol', 'An alkene', 'An amine'], 'CN⁻ is the nucleophile.'),
    Q('The triiodomethane test is positive for:', ['Ethanol', 'Methanol', 'Propan-1-ol', '2-methylpropan-2-ol'], 'Ethanol contains the CH₃CH(OH)– group.'),
    Q('Alcohols react with PCl₅ to give:', ['A chloroalkane and steamy fumes of HCl', 'An ester', 'An alkene', 'Hydrogen'], 'A test for the –OH group.'),
  ],
  'ac-org2-2': [
    Q('Esters are hydrolysed completely by:', ['Heating with aqueous sodium hydroxide', 'Cold water', 'Concentrated sulfuric acid alone', 'Bromine water'], 'The carboxylate salt forms, so the reaction cannot reverse.'),
    Q('Saponification is:', ['The alkaline hydrolysis of fats and oils to make soap', 'The making of esters', 'Fermentation', 'Cracking'], 'Palm oil and palm kernel oil are used in Cameroon.'),
    Q('Acidified dichromate(VI) turns from orange to green when warmed with:', ['Aldehydes', 'Ketones', 'Carboxylic acids', 'Esters'], 'Aldehydes are oxidised to acids.'),
    Q('Nitriles are hydrolysed, by heating with dilute acid, to:', ['Carboxylic acids', 'Alcohols', 'Aldehydes', 'Amines'], 'R–CN → R–COOH.'),
  ],
  'ac-org2-3': [
    Q('Addition polymers differ from condensation polymers because they form:', ['Without losing any small molecule', 'With loss of water', 'Only from amino acids', 'Only in living things'], 'The C=C bonds simply open.'),
    Q('All the amino acids in proteins except glycine are:', ['Chiral', 'Gases', 'Strong acids', 'Insoluble in water'], 'Glycine’s R group is H.'),
    Q('Proteins are hydrolysed back to amino acids by:', ['Heating with acid, or by enzymes', 'Cooling', 'Adding ethanol', 'UV light'], 'The peptide links break.'),
    Q('Phenylamine is a weaker base than ethylamine because:', ['The nitrogen lone pair is delocalised into the benzene ring', 'Phenylamine has no lone pair', 'Ethylamine is an acid', 'Phenylamine is ionic'], 'The lone pair is less available to accept a proton.'),
    Q('In solution, amino acids exist mainly as:', ['Zwitterions', 'Free radicals', 'Carbocations', 'Neutral molecules with no charges'], 'They carry ⁺H₃N– and –COO⁻ groups.'),
  ],
  'ac-energy-2': [
    Q('The standard enthalpy of formation of an element in its standard state is:', ['Zero', 'Always positive', 'Always negative', 'Equal to its bond enthalpy'], 'Nothing is formed when an element is made from itself.'),
    Q('Using bond enthalpies, ΔH is approximately:', ['Σ(bonds broken) − Σ(bonds made)', 'Σ(bonds made) − Σ(bonds broken)', 'Σ(bonds broken) + Σ(bonds made)', 'Zero'], 'Breaking bonds takes in energy; making bonds gives it out.'),
  ],
  'ac-equil-1': [
    Q('A large value of Kc means that at equilibrium:', ['The mixture contains mostly products', 'The mixture contains mostly reactants', 'The reaction is very fast', 'No reaction has happened'], 'Kc says nothing about the rate.'),
    Q('The partial pressure of a gas in a mixture equals:', ['Its mole fraction × the total pressure', 'Its mass × the total pressure', 'The total pressure ÷ its moles', 'Its volume × the temperature'], 'Mole fraction = moles of the gas ÷ total moles of gas.'),
  ],
  'ac-acid-1': [
    Q('In NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, water acts as:', ['An acid, because it donates a proton', 'A base', 'A catalyst', 'An oxidising agent'], 'It gives H⁺ to ammonia.'),
    Q('A weak acid with Ka = 1.0 × 10⁻⁴ mol dm⁻³ at 0.010 mol dm⁻³ has a pH of:', ['3.0', '2.0', '4.0', '6.0'], '[H⁺] = √(1.0 × 10⁻⁶) = 1.0 × 10⁻³.'),
  ],
  'ac-acid-2': [
    Q('Human blood is buffered at about pH 7.4 mainly by:', ['Carbonic acid and hydrogencarbonate ions', 'Hydrochloric acid and chloride ions', 'Ammonia and ammonium ions', 'Sulfuric acid'], 'H₂CO₃ ⇌ H⁺ + HCO₃⁻.'),
    Q('An indicator changes colour over a range of about:', ['pKin ± 1', 'pKin ± 5', 'exactly pH 7', '0.01 pH unit'], 'The two coloured forms must be in a visible ratio.'),
  ],
  'ac-redox-1': [
    Q('The oxidation number of oxygen in hydrogen peroxide, H₂O₂, is:', ['−1', '−2', '0', '+2'], 'Peroxides are an exception to the usual −2.'),
    Q('A reaction in which one element is both oxidised and reduced is called:', ['Disproportionation', 'Neutralisation', 'Hydrolysis', 'Polymerisation'], 'Chlorine with cold alkali is an example.'),
  ],
  'ac-mech-2': [
    Q('SN2 reactions are typical of:', ['Primary halogenoalkanes', 'Tertiary halogenoalkanes', 'Alkenes', 'Arenes'], 'Tertiary halogenoalkanes react by SN1.'),
    Q('The electrophile in the nitration of benzene is:', ['NO₂⁺', 'NO₃⁻', 'H₂SO₄', 'OH⁻'], 'It is made from concentrated nitric and sulphuric acids.'),
  ],
  'ac-halogen-1': [
    Q('Chlorine kills bacteria in drinking water because it forms:', ['Chloric(I) acid, HClO', 'Sodium chloride', 'Hydrogen gas', 'Chlorofluorocarbons'], 'Cl₂ + H₂O ⇌ HCl + HClO.'),
    Q('Which hydrogen halide decomposes most easily on heating?', ['HI', 'HF', 'HCl', 'HBr'], 'The H–X bond gets weaker down the group.'),
  ],
  'ac-group4-1': [
    Q('SiCl₄ is hydrolysed by water but CCl₄ is not because:', ['Silicon has empty 3d orbitals that can accept a lone pair from water', 'Carbon is a metal', 'CCl₄ is ionic', 'Silicon atoms are smaller than carbon atoms'], 'Carbon cannot expand its octet.'),
    Q('Which Group IV element is a metalloid?', ['Germanium', 'Carbon', 'Lead', 'Tin'], 'Carbon and silicon are non-metals; tin and lead are metals.'),
  ],
  'ac-kinetic-2': [
    Q('A plot of ln k against 1/T gives a straight line of gradient:', ['−Ea/R', 'Ea/R', '−R/Ea', 'A'], 'From k = A e^(−Ea/RT).'),
    Q('Lead poisons the catalyst in a catalytic converter because it:', ['Binds strongly to the catalyst surface', 'Raises the activation energy of combustion', 'Adds oxygen to the exhaust', 'Melts the converter'], 'Reactants can no longer adsorb on the blocked surface.'),
  ],
  'ac-society-2': [
    Q('Burning PVC is especially harmful because it releases:', ['HCl and toxic dioxins', 'Only water vapour', 'Oxygen', 'Pure carbon'], 'Controlled incinerators are needed.'),
    Q('Photochemical smog forms when nitrogen oxides and hydrocarbons react in:', ['Sunlight', 'Darkness', 'Water', 'Soil'], 'It produces ground-level ozone.'),
  ],
  // ---------- Lower Sixth, 2026/2027 scheme additions ----------
  'ac-atom-4': [
    Q('The maximum number of electrons in the shell n = 3 is:', ['18', '8', '32', '9'], '2n² = 18.'),
    Q('A p orbital is shaped like a:', ['dumbbell with two lobes', 'sphere', 'ring', 'cube'], 'Along x, y or z.'),
    Q('Hund’s rule says the three 2p electrons of nitrogen are:', ['in separate orbitals with parallel spins', 'all paired in one orbital', 'in the 3s orbital', 'in two orbitals'], 'Singly before pairing.'),
    Q('Sodium gives a flame colour of:', ['yellow-orange', 'lilac', 'brick-red', 'apple-green'], 'Electrons falling back emit that light.'),
  ],
  'ac-gas-1': [
    Q('A gas collected over water at 101 kPa, with water vapour pressure 3 kPa, has a partial pressure of:', ['98 kPa', '104 kPa', '101 kPa', '3 kPa'], 'Subtract the water vapour.'),
    Q('In R = 8.31 J K⁻¹ mol⁻¹, pressure must be in:', ['pascals', 'kilopascals', 'atmospheres', 'mm Hg'], 'And volume in m³.'),
    Q('The white ring in the NH₃/HCl tube is:', ['ammonium chloride', 'sodium chloride', 'ammonia', 'chlorine'], 'NH₃ + HCl → NH₄Cl.'),
    Q('A gas with M = 64 diffuses compared with oxygen (M = 32):', ['about 0.71 times as fast', 'twice as fast', 'half as fast', 'at the same rate'], '√(32 ÷ 64).'),
  ],
  'ac-gas-2': [
    Q('Pressure of a gas is caused by:', ['molecules colliding with the container walls', 'molecules attracting each other', 'the weight of molecules', 'heat from the walls'], 'Kinetic theory.'),
    Q('At very high pressure, real gases have Z greater than 1 because:', ['the volume of the molecules becomes significant', 'attractions increase', 'molecules stop moving', 'temperature falls'], 'Less free space.'),
    Q('The van der Waals constant a is large for:', ['strongly attracting molecules such as NH₃', 'helium', 'hydrogen', 'neon'], 'It corrects for attractions.'),
    Q('CO₂ cannot be liquefied by pressure above about:', ['31 °C', '100 °C', '0 °C', '−78 °C'], 'Its critical temperature.'),
  ],
  'ac-phase-3': [
    Q('Colligative properties depend on:', ['the number of solute particles', 'the identity of the solute', 'the colour of the solution', 'the shape of the container'], 'Not on the kind of particle.'),
    Q('Molality is measured in:', ['mol kg⁻¹', 'mol dm⁻³', 'g dm⁻³', 'kg mol⁻¹'], 'Moles per kilogram of solvent.'),
    Q('Sodium chloride lowers the freezing point about twice as much as glucose at the same molality because:', ['it gives two ions per formula unit', 'it is heavier', 'it is covalent', 'it reacts with water'], 'More particles.'),
    Q('Reverse osmosis is used to:', ['purify water by forcing it through a membrane', 'make salt', 'raise boiling points', 'measure Kf'], 'Desalination.'),
  ],
  'ac-kinetic-3': [
    Q('For a zero-order reaction, a straight line is obtained by plotting:', ['[A] against time', 'ln[A] against time', '1/[A] against time', 'rate against 1/T'], 'Gradient −k.'),
    Q('For a second-order reaction, a straight line is obtained by plotting:', ['1/[A] against time', '[A] against time', 'ln[A] against time', '[A]² against time'], 'Gradient k.'),
    Q('The half-life of a second-order reaction:', ['increases as the concentration falls', 'is constant', 'decreases as the concentration falls', 'is zero'], 't½ = 1/(k[A]₀).'),
    Q('In the iodine clock, the rate of reaction is taken as proportional to:', ['1/t, where t is the time for the blue-black colour', 't', 't²', 'the starch concentration'], 'A fixed amount of iodine forms each time.'),
  ],
  'ac-entropy-1': [
    Q('Dissolving ammonium nitrate in water is spontaneous although endothermic because:', ['the entropy increases greatly', 'it releases heat', 'it forms a gas', 'it is catalysed'], 'Ions become dispersed.'),
    Q('ΔS(surroundings) for a reaction at temperature T equals:', ['−ΔH/T', 'ΔH/T', 'ΔH × T', 'ΔG/T'], 'Heat given out raises the surroundings’ entropy.'),
    Q('Standard entropies of substances are:', ['always positive', 'zero for elements', 'negative for solids', 'equal for all gases'], 'Unlike standard enthalpies of formation.'),
    Q('For N₂(g) + 3H₂(g) → 2NH₃(g), ΔS of the system is:', ['negative', 'positive', 'zero', 'impossible to predict'], 'Four moles of gas become two.'),
  ],
  'ac-entropy-2': [
    Q('Before using ΔG = ΔH − TΔS with ΔH in kJ, ΔS in J K⁻¹ mol⁻¹ must be:', ['divided by 1000', 'multiplied by 1000', 'left unchanged', 'squared'], 'Consistent units.'),
    Q('A reaction with ΔH positive and ΔS negative is:', ['never feasible', 'always feasible', 'feasible at high T', 'feasible at low T'], 'Both terms make ΔG positive.'),
    Q('Diamond is kinetically stable with respect to graphite because:', ['the activation energy for conversion is very high', 'ΔG is positive', 'it is a liquid', 'ΔH is zero'], 'Feasible but extremely slow.'),
    Q('Aluminium is extracted by electrolysis rather than carbon reduction because:', ['reduction of its oxide by carbon is not feasible at practical temperatures', 'carbon is too expensive', 'aluminium is a liquid', 'aluminium oxide is soluble'], 'Al is very reactive.'),
  ],
  'ac-equil-3': [
    Q('If Q is less than K, the reaction:', ['moves forward to make more products', 'moves backward', 'is at equilibrium', 'stops'], 'Q rises towards K.'),
    Q('Adding a catalyst to a system at equilibrium:', ['does not change K or the position', 'increases K', 'shifts the position to the right', 'decreases K'], 'It only speeds up both directions.'),
    Q('Adding silver ions to the Fe³⁺/SCN⁻ equilibrium makes the red colour:', ['paler, because SCN⁻ is removed', 'deeper', 'unchanged', 'turn blue'], 'The equilibrium shifts left.'),
    Q('For an endothermic forward reaction, raising the temperature:', ['increases K', 'decreases K', 'leaves K unchanged', 'makes K zero'], 'Only temperature changes K.'),
  ],
  'ac-halogen-2': [
    Q('Iodide ions with concentrated sulfuric acid produce a gas with a smell of rotten eggs:', ['hydrogen sulfide', 'sulfur dioxide', 'hydrogen chloride', 'chlorine'], 'Sulfur reduced to −2.'),
    Q('HBr is best prepared from NaBr using:', ['phosphoric(V) acid', 'concentrated sulfuric acid', 'nitric acid', 'water'], 'A non-oxidising acid.'),
    Q('Hydrogen chloride forms a white smoke with:', ['ammonia', 'water', 'oxygen', 'sodium hydroxide solution'], 'Ammonium chloride.'),
    Q('Down Group VII, the thermal stability of HX:', ['decreases', 'increases', 'stays the same', 'first rises then falls'], 'The H–X bond weakens.'),
  ],
  'ac-halogen-3': [
    Q('Chlorine is manufactured by:', ['electrolysis of brine', 'heating salt', 'reacting HCl with water', 'distilling sea water'], 'Hydrogen and NaOH are by-products.'),
    Q('Iodised salt helps to prevent:', ['goitre', 'malaria', 'cholera', 'anaemia'], 'Iodine is needed for thyroid hormones.'),
    Q('In the bleach titration, the number of moles of thiosulfate per mole of OCl⁻ is:', ['2', '1', '0.5', '4'], 'Through I₂.'),
    Q('Bleach must not be mixed with acids because:', ['toxic chlorine gas is released', 'it explodes', 'it turns blue', 'it becomes water'], 'OCl⁻ + Cl⁻ + 2H⁺ → Cl₂ + H₂O.'),
  ],
  'ac-l6-paper1': [
    Q('Paper 1 of A Level Chemistry lasts:', ['1½ hours', '3 hours', '2½ hours', '45 minutes'], 'Multiple choice.'),
    Q('Before choosing an option in a calculation item, you should:', ['work out the answer yourself', 'pick the largest number', 'guess', 'skip it'], 'Then match.'),
    Q('ΔTf = Kf × m uses m as:', ['molality', 'mass', 'molarity', 'moles of solvent'], 'mol kg⁻¹.'),
    Q('The half-life of a first-order reaction is:', ['0.693/k', 'k/0.693', '1/(k[A]₀)', '[A]₀/2k'], 'Constant.'),
  ],
  'ac-l6-paper2': [
    Q('A good Hess’s law answer begins by:', ['drawing the cycle with all enthalpy changes labelled', 'writing the answer', 'adding all numbers', 'guessing signs'], 'Method marks.'),
    Q('Trends in ionisation energy should be explained using:', ['nuclear charge, distance and shielding', 'colour', 'mass only', 'density'], 'Structure and bonding.'),
    Q('Inorganic observations should include:', ['colours, gases and precipitates with a balanced equation', 'only the product name', 'opinions', 'the price of chemicals'], 'What is seen and why.'),
    Q('Answers to calculations should be given:', ['to a sensible number of significant figures with units', 'with as many digits as possible', 'without units', 'as fractions only'], 'Precision and units.'),
  ],
  // ---------- Lower Sixth organic scheme additions ----------
  'ac-org1-5': [
    Q('E/Z isomerism requires:', ['restricted rotation and two different groups on each C of C=C', 'a chiral centre', 'a benzene ring', 'free rotation'], 'Each carbon needs two different groups.'),
    Q('In the CIP rules, priority is decided first by:', ['the atomic number of the attached atom', 'the size of the group', 'the number of hydrogens', 'alphabetical order'], 'Higher atomic number, higher priority.'),
    Q('A racemic mixture is optically inactive because:', ['the rotations of the two enantiomers cancel', 'it has no chiral centre', 'it absorbs all light', 'it is a gas'], 'Equal amounts rotate in opposite directions.'),
    Q('Which amino acid has no chiral centre?', ['glycine', 'alanine', 'serine', 'valine'], 'Its R group is H.'),
  ],
  'ac-org1-6': [
    Q('Branching lowers the boiling point of an alkane because:', ['the molecules pack less closely, so London forces are weaker', 'branched molecules are heavier', 'branching adds hydrogen bonds', 'branched alkanes are ionic'], 'Smaller contact area.'),
    Q('Heating sodium ethanoate with soda lime gives:', ['methane', 'ethane', 'ethene', 'ethanol'], 'Decarboxylation.'),
    Q('Complete combustion of 10 cm³ of propane needs:', ['50 cm³ of oxygen', '30 cm³ of oxygen', '10 cm³ of oxygen', '100 cm³ of oxygen'], 'C₃H₈ + 5O₂.'),
    Q('Free-radical substitution is a poor way to make one pure halogenoalkane because:', ['it gives a mixture of substituted products', 'it needs no light', 'it is too slow', 'it gives only alkenes'], 'Further substitution occurs.'),
  ],
  'ac-alkene-1': [
    Q('Ethene can be made by passing ethanol vapour over heated:', ['aluminium oxide', 'nickel', 'iron', 'copper'], 'Dehydration.'),
    Q('Hydrogenation of an alkene needs:', ['a nickel catalyst at about 150 °C', 'UV light', 'concentrated sulfuric acid', 'iron(III) chloride'], 'Used to harden oils.'),
    Q('In the addition of HBr, the first step forms:', ['a carbocation and a bromide ion', 'a free radical', 'a bromonium ion only', 'an alkane'], 'Heterolytic fission of H–Br.'),
    Q('The π bond is weaker than the σ bond because:', ['sideways overlap of p orbitals is less effective', 'it has more electrons', 'it is ionic', 'it is longer than the molecule'], 'Less overlap.'),
  ],
  'ac-alkene-2': [
    Q('Cold dilute KMnO₄ added to an alkene turns:', ['from purple to colourless', 'from colourless to purple', 'from orange to green', 'blue'], 'A test for C=C.'),
    Q('A =CR₂ end of an alkene is oxidised by hot concentrated KMnO₄ to a:', ['ketone', 'carboxylic acid', 'carbon dioxide', 'diol'], 'No hydrogen on that carbon.'),
    Q('LDPE is made using:', ['very high pressure and an oxygen initiator', 'Ziegler-Natta catalysts at low pressure', 'UV light only', 'nickel'], 'Free-radical polymerisation.'),
    Q('Burning PVC waste releases:', ['hydrogen chloride and toxic dioxins', 'only water', 'oxygen', 'nitrogen'], 'Harmful to health.'),
  ],
  'ac-arene-1': [
    Q('Kekulé proposed his benzene structure in:', ['1865', '1953', '1900', '1800'], 'Alternating single and double bonds.'),
    Q('The delocalisation energy of benzene is about:', ['152 kJ mol⁻¹', '360 kJ mol⁻¹', '208 kJ mol⁻¹', '120 kJ mol⁻¹'], '360 − 208.'),
    Q('C₆H₅OH is named:', ['phenol', 'benzyl alcohol', 'phenylamine', 'benzoic acid'], 'An OH on the ring.'),
    Q('In benzene, the delocalised electrons come from:', ['one p orbital on each of the six carbons', 'the C–H bonds', 'lone pairs', 'hydrogen atoms'], 'Six π electrons.'),
  ],
  'ac-arene-2': [
    Q('A halogen carrier for chlorinating benzene is:', ['aluminium chloride', 'nickel', 'UV light', 'sodium hydroxide'], 'A Lewis acid.'),
    Q('The intermediate in electrophilic substitution is:', ['positively charged', 'negatively charged', 'a free radical', 'neutral'], 'The ring has lost two π electrons to E.'),
    Q('Nitrobenzene is used to make:', ['dyes and drugs through phenylamine', 'fertilisers only', 'bleach', 'soap'], 'An important intermediate.'),
    Q('Chlorine with methylbenzene in UV light without a catalyst substitutes:', ['the methyl group by free radicals', 'the ring', 'nothing', 'both at once'], 'Different conditions, different mechanism.'),
  ],
  'ac-l6-routes': [
    Q('The reagent and condition to convert ethane to chloroethane are:', ['chlorine in UV light', 'HCl at room temperature', 'chlorine with FeCl₃', 'steam'], 'Free-radical substitution.'),
    Q('Ethene to ethane-1,2-diol uses:', ['cold dilute KMnO₄', 'hot concentrated KMnO₄', 'steam', 'H₂ and Ni'], 'Mild oxidation.'),
    Q('Benzene to nitrobenzene uses:', ['conc. HNO₃ and conc. H₂SO₄ below 55 °C', 'dilute HNO₃', 'NO₂ gas', 'HCl'], 'The nitrating mixture.'),
    Q('Ethanol to ethene is a:', ['dehydration (elimination)', 'hydration', 'substitution', 'oxidation'], 'Water is removed.'),
  ],
  // ---------- Upper Sixth physical chemistry scheme additions ----------
  'ac-acid-3': [
    Q('For a conjugate acid-base pair at 298 K, pKa + pKb equals:', ['14', '7', '1', '0'], 'Ka × Kb = Kw.'),
    Q('At 50 °C, pure water has a pH of about 6.6. It is:', ['still neutral, because [H⁺] = [OH⁻]', 'acidic', 'alkaline', 'impure'], 'Kw is larger when the water is hot.'),
    Q('A solution of sodium carbonate is:', ['alkaline', 'acidic', 'neutral', 'a buffer at pH 7'], 'CO₃²⁻ accepts protons from water.'),
    Q('Diluting a strong acid tenfold raises its pH by:', ['1 unit', '0.5 unit', '10 units', 'nothing'], '[H⁺] falls tenfold.'),
  ],
  'ac-acid-4': [
    Q('A buffer works best when:', ['[HA] and [A⁻] are about equal', 'only HA is present', 'the acid is strong', 'the solution is very dilute'], 'Its pH is then close to pKa.'),
    Q('Adding 0.010 mol of NaOH to a buffer of 0.10 mol HA and 0.10 mol A⁻ changes the amounts to:', ['0.09 mol HA and 0.11 mol A⁻', '0.11 mol HA and 0.09 mol A⁻', '0.10 mol of each', '0.09 mol of each'], 'OH⁻ turns HA into A⁻.'),
    Q('The pKa of the ammonium ion is about:', ['9.25', '4.75', '7.00', '14.0'], '14.00 − 4.75.'),
    Q('To find Ka by half-neutralisation, you add to a fresh portion of the acid:', ['half the volume of alkali needed to neutralise it', 'the full volume of alkali', 'twice that volume', 'no alkali'], 'Then [HA] = [A⁻].'),
  ],
  'ac-acid-5': [
    Q('The pH at the start of the titration of 0.100 mol dm⁻³ ethanoic acid is about:', ['2.9', '1.0', '4.8', '7.0'], '√(Ka × c).'),
    Q('After the equivalence point, the pH is decided by:', ['the excess hydroxide ions', 'the ethanoic acid left', 'the indicator', 'the buffer ratio'], 'All the acid has reacted.'),
    Q('In a potentiometric titration, the equivalence point is:', ['the middle of the steepest part of the curve', 'always where the pH is 7', 'the first reading', 'where pH = pKa'], 'The greatest gradient.'),
    Q('Sodium carbonate titrated with hydrochloric acid shows:', ['two steep sections', 'one steep section at pH 7', 'no steep section', 'three steep sections'], 'CO₃²⁻ → HCO₃⁻ → CO₂.'),
  ],
  'ac-sol-1': [
    Q('The units of Ksp for PbI₂ are:', ['mol³ dm⁻⁹', 'mol² dm⁻⁶', 'mol dm⁻³', 'no units'], 'Three concentration terms are multiplied.'),
    Q('For an AB₂ salt with molar solubility s, Ksp equals:', ['4s³', 's²', '2s²', 's³'], 's × (2s)².'),
    Q('Calcium hydroxide is unusual because its solubility:', ['falls as the temperature rises', 'rises with temperature', 'does not depend on temperature', 'is unlimited'], 'Keep the temperature constant in the experiment.'),
    Q('Barium sulfate can be swallowed for X-ray images because:', ['so little dissolves that toxic Ba²⁺ is not absorbed', 'barium compounds are not toxic', 'it dissolves completely', 'it is a gas'], 'Its Ksp is very small.'),
  ],
  'ac-sol-2': [
    Q('A precipitate forms when:', ['the ionic product exceeds Ksp', 'the ionic product is less than Ksp', 'Ksp is zero', 'the solution is diluted'], 'The solution is supersaturated.'),
    Q('Adding Ag⁺ slowly to a mixture of Cl⁻ and I⁻ ions first precipitates:', ['silver iodide', 'silver chloride', 'both together', 'neither'], 'AgI has the smaller Ksp.'),
    Q('Concentrated HCl added to saturated sodium chloride solution:', ['precipitates sodium chloride', 'dissolves more salt', 'gives off chlorine', 'has no effect'], 'The common ion is Cl⁻.'),
    Q('Mixing equal volumes of two solutions changes each concentration by a factor of:', ['one half', 'two', 'one quarter', 'one'], 'The volume doubles.'),
  ],
  'ac-redox-3': [
    Q('In a cell diagram, the double vertical line represents:', ['the salt bridge', 'a phase boundary', 'the voltmeter', 'the electrode'], 'A single line is a phase boundary.'),
    Q('A high-resistance voltmeter is used so that:', ['almost no current flows and the e.m.f. is measured', 'the cell recharges', 'the reaction speeds up', 'no salt bridge is needed'], 'Current would lower the reading.'),
    Q('By convention, the half-cell on the left of a cell diagram is where:', ['oxidation occurs', 'reduction occurs', 'no reaction occurs', 'hydrogen is always made'], 'It is the negative electrode.'),
    Q('A positive E°cell may still give no visible reaction because:', ['the reaction may be very slow', 'E° values are unreliable', 'the reaction is endothermic', 'electrons cannot move'], 'Feasibility is not rate.'),
  ],
  'ac-electro-1': [
    Q('At 298 K, the Nernst factor 2.303RT ÷ F equals about:', ['0.059 V', '0.59 V', '8.31 V', '96 500 V'], 'It is then divided by z.'),
    Q('A concentration cell has a standard e.m.f. of:', ['0 V', '1.10 V', '0.059 V', '−0.76 V'], 'Both half-cells are the same.'),
    Q('Raising [H⁺] makes acidified manganate(VII):', ['a stronger oxidising agent', 'a weaker oxidising agent', 'a reducing agent', 'no different'], 'H⁺ is on the oxidised side of the half-equation.'),
    Q('For Cu²⁺/Cu, each tenfold dilution of the Cu²⁺ changes E by:', ['−0.0295 V', '−0.059 V', '+0.059 V', '−0.34 V'], '0.059 ÷ 2.'),
  ],
  'ac-electro-2': [
    Q('In ΔG° = −zFE°, z is:', ['the number of moles of electrons transferred', 'the charge on the anion', 'the number of half-cells', 'the temperature'], 'Taken from the balanced equation.'),
    Q('At 298 K, log K equals:', ['zE° ÷ 0.059', '0.059 ÷ zE°', 'zFE°', 'E° ÷ z'], 'From ΔG° = −RT ln K.'),
    Q('A cell reaction with E°cell = 0 has an equilibrium constant of:', ['1', '0', 'infinity', '−1'], 'ΔG° = 0.'),
    Q('ΔS° of a cell reaction can be found from:', ['the change of E° with temperature', 'the mass of the electrodes', 'the colour of the solutions', 'the current alone'], 'ΔS° = zF(dE°/dT).'),
  ],
  'ac-electro-3': [
    Q('Q = It gives the charge in:', ['coulombs', 'amperes', 'volts', 'faradays'], 'With I in amperes and t in seconds.'),
    Q('The same charge passes through solutions of Ag⁺ and Cu²⁺ in series. The ratio of moles of Ag to Cu deposited is:', ['2 : 1', '1 : 2', '1 : 1', '1 : 4'], 'Faraday’s second law.'),
    Q('During the electrolysis of copper(II) sulfate with copper electrodes, the anode:', ['loses mass as copper dissolves', 'gains mass', 'gives off oxygen', 'is unchanged'], 'Cu → Cu²⁺ + 2e⁻.'),
    Q('The volume of oxygen at s.t.p. released by 0.020 mol of electrons is:', ['0.112 dm³', '0.224 dm³', '0.448 dm³', '0.056 dm³'], 'Four moles of electrons per mole of O₂.'),
  ],
  'ac-kinetic-4': [
    Q('The isolation method uses:', ['a large excess of every reactant except one', 'equal amounts of every reactant', 'no catalyst', 'a single temperature only'], 'Only one concentration changes noticeably.'),
    Q('Samples from a reacting mixture are quenched by:', ['running them into ice-cold water', 'heating them', 'adding a catalyst', 'shaking them'], 'This stops the reaction before titrating.'),
    Q('The hydrolysis of 2-bromo-2-methylpropane is first order overall. Its mechanism is:', ['SN1, through a carbocation', 'SN2, in one step', 'free-radical substitution', 'electrophilic addition'], 'Only the halogenoalkane is in the slow step.'),
    Q('In the thiosulfate and acid experiment, the cross disappears because:', ['a precipitate of sulfur forms', 'the solution turns blue', 'a gas bubbles off', 'the acid is used up'], 'S₂O₃²⁻ + 2H⁺ → S + SO₂ + H₂O.'),
  ],
  'ac-u6-formulae': [
    Q('pH + pOH at 298 K equals:', ['14', '7', '1', '10'], 'From Kw.'),
    Q('The Faraday constant equals:', ['L × e', 'L ÷ e', 'R × T', 'e ÷ L'], '6.02 × 10²³ × 1.60 × 10⁻¹⁹ C.'),
    Q('A pH value is usually given to:', ['two decimal places', 'no decimal places', 'five decimal places', 'one significant figure'], 'For example pH 4.76.'),
    Q('Concentrations must be recalculated after two solutions are mixed because:', ['the total volume increases', 'the number of moles changes', 'the temperature changes', 'the solutes react with water'], 'Mixing dilutes both.'),
  ],
  'ac-u6-paper1': [
    Q('Doubling the concentration of a reactant that is zero order:', ['does not change the rate', 'doubles the rate', 'quadruples the rate', 'halves the rate'], 'Its power is 0.'),
    Q('To compare the solubilities of AgCl and Ag₂CrO₄ you should compare:', ['their molar solubilities calculated from Ksp', 'their Ksp values directly', 'their colours', 'their molar masses'], 'They are different types of salt.'),
    Q('In a solubility item, an option equal to Ksp itself is usually:', ['a distractor', 'the answer', 'the unit', 'a misprint'], 'Solubility needs a square or cube root.'),
    Q('A sharp colour change at about pH 9 suits a titration of:', ['a weak acid with a strong base', 'a strong acid with a weak base', 'a weak acid with a weak base', 'no titration'], 'The steep part lies above 7.'),
  ],
  'ac-u6-paper2': [
    Q('A gradient should be found from:', ['a large triangle on the best-fit line', 'two neighbouring rows of the table', 'the first and last points always', 'the intercept'], 'This is the most precise method.'),
    Q('An axis label should give:', ['the quantity and its unit', 'only the unit', 'only the symbol', 'only the scale'], 'For example 1/T / K⁻¹.'),
    Q('In an electrochemistry answer, the electrons flow:', ['through the wire from the negative electrode to the positive electrode', 'through the salt bridge', 'through the wire from positive to negative', 'in both directions'], 'Ions carry the charge in the salt bridge.'),
    Q('An Arrhenius gradient of −5000 K gives Ea of about:', ['42 kJ mol⁻¹', '5000 kJ mol⁻¹', '0.6 kJ mol⁻¹', '42 J mol⁻¹'], '5000 × 8.31 J mol⁻¹.'),
  ],
  // ---------- Upper Sixth organic chemistry scheme additions ----------
  'ac-halo-2': [
    Q('An E1 elimination passes through:', ['a carbocation', 'a single transition state only', 'a free radical', 'a carbanion'], 'Like SN1, its slow step is ionisation.'),
    Q('In the hydrolysis experiment, the halide ion is detected by:', ['silver nitrate, which forms a precipitate', 'bromine water', 'Tollens’ reagent', 'litmus'], 'AgCl white, AgBr cream, AgI yellow.'),
    Q('In the preparation of 2-chloro-2-methylpropane, sodium hydrogencarbonate solution is used to:', ['remove acid from the organic layer', 'dry the product', 'make the reaction faster', 'form the chloride'], 'CO₂ is given off, so release the pressure.'),
    Q('Elimination from 2-bromobutane gives mainly:', ['but-2-ene', 'but-1-ene', 'butane', 'butan-2-ol'], 'The more substituted alkene.'),
  ],
  'ac-alcohol-2': [
    Q('Fermentation stops at about 15% ethanol because:', ['the yeast is killed by the ethanol', 'the sugar runs out at once', 'the temperature rises to 100 °C', 'oxygen enters'], 'Distillation is needed for stronger solutions.'),
    Q('The industrial hydration of ethene uses:', ['a phosphoric acid catalyst at about 300 °C and 60 atm', 'yeast at 35 °C', 'nickel at 150 °C', 'UV light'], 'A fast, continuous process.'),
    Q('Lucas reagent is:', ['zinc chloride in concentrated hydrochloric acid', 'acidified potassium dichromate', 'ammoniacal silver nitrate', 'iodine in sodium hydroxide'], 'It turns alcohols into chloroalkanes.'),
    Q('Small alcohols mix with water because:', ['they form hydrogen bonds with water molecules', 'they are ionic', 'they are very heavy', 'they react with water'], 'The –OH group hydrogen bonds.'),
  ],
  'ac-phenol-1': [
    Q('The pKa of phenol is about:', ['10', '4.8', '16', '1'], 'Weaker than carboxylic acids, stronger than ethanol.'),
    Q('Phenol reacts with bromine water more easily than benzene because:', ['the oxygen lone pair makes the ring richer in electrons', 'phenol is a gas', 'benzene has no electrons', 'bromine water is a catalyst'], 'The ring is activated.'),
    Q('Phenol dissolves in sodium hydroxide solution because:', ['it forms soluble sodium phenoxide', 'it is a base', 'it is non-polar', 'it gives off carbon dioxide'], 'An acid-base reaction.'),
    Q('Neutral iron(III) chloride gives a violet colour with:', ['phenol', 'ethanol', 'ethanoic acid', 'propanone'], 'A test for phenols.'),
  ],
  'ac-carbonyl-2': [
    Q('The product of HCN with ethanal is:', ['2-hydroxypropanenitrile', 'propanenitrile', 'ethanoic acid', 'ethanol'], 'One more carbon, with –OH and –CN on the same carbon.'),
    Q('HCN addition to ethanal gives a racemic mixture because:', ['the planar C=O is attacked equally from both sides', 'HCN is optically active', 'the product has no chiral centre', 'only one side can be attacked'], 'Equal amounts of the two enantiomers.'),
    Q('NaBH₄ acts by supplying:', ['hydride ions, H⁻, which act as nucleophiles', 'protons', 'free radicals', 'electrophiles'], 'H⁻ attacks the δ+ carbon.'),
    Q('The 2,4-DNPH derivative is recrystallised and its melting point measured to:', ['identify the particular aldehyde or ketone', 'make it explode', 'find its colour', 'remove the carbonyl group'], 'Compare with data tables.'),
  ],
  'ac-carboxylic-1': [
    Q('In the ethanoate ion, the two C–O bonds are:', ['the same length, because the charge is delocalised', 'one single and one double', 'both double bonds', 'both longer than single bonds'], 'Delocalisation over both oxygens.'),
    Q('Carboxylic acids react with carbonates to give:', ['a salt, water and carbon dioxide', 'an ester', 'hydrogen only', 'an alcohol'], 'The fizzing is a test for –COOH.'),
    Q('Which carboxylic acid also gives a silver mirror with Tollens’ reagent?', ['methanoic acid', 'ethanoic acid', 'propanoic acid', 'benzoic acid'], 'It has an aldehyde-like H–C=O.'),
    Q('In a back-titration, the substance being analysed reacts with:', ['a known excess of a standard reagent', 'exactly enough reagent', 'an indicator only', 'nothing'], 'The excess is then titrated.'),
  ],
  'ac-acyl-1': [
    Q('Acyl chlorides react faster than carboxylic acids with water because:', ['the carbonyl carbon is more δ+ and Cl⁻ leaves easily', 'they are ionic', 'they contain no oxygen', 'they are bases'], 'Both O and Cl withdraw electrons.'),
    Q('The equilibrium constant Kc for making ethyl ethanoate from the acid and alcohol is about:', ['4', '1000', '0.01', '1'], 'About two-thirds converts from 1 : 1.'),
    Q('Crude ethyl ethanoate is washed with sodium carbonate solution to:', ['remove acids', 'remove water', 'add sweetness', 'make more ester'], 'Release the CO₂ pressure.'),
    Q('Phenols are best turned into esters by reacting them with:', ['an acyl chloride', 'a carboxylic acid', 'an aldehyde', 'an alkane'], 'Phenols react only slowly with acids.'),
  ],
  'ac-synth-1': [
    Q('A primary alcohol is oxidised to an aldehyde, rather than an acid, by:', ['distilling the aldehyde off as it forms', 'heating under reflux', 'adding NaBH₄', 'cooling in ice'], 'It leaves before further oxidation.'),
    Q('The only common way to put a functional group on an alkane is:', ['free-radical substitution with a halogen in UV light', 'adding water', 'oxidising with dichromate', 'adding HBr'], 'Alkanes are otherwise unreactive.'),
    Q('Three steps of 70% yield each give an overall yield of about:', ['34%', '70%', '210%', '50%'], '0.70 × 0.70 × 0.70.'),
    Q('An acyl chloride reacts with ammonia to give:', ['an amide', 'an ester', 'an amine', 'an aldehyde'], 'Addition-elimination.'),
  ],
  'ac-amine-1': [
    Q('Ethylamine is a stronger base than ammonia because:', ['the ethyl group releases electrons towards the nitrogen', 'it has more hydrogen atoms', 'it is a gas', 'its lone pair is delocalised'], 'The +I effect.'),
    Q('Amides are not basic because:', ['the nitrogen lone pair is delocalised towards the C=O group', 'they have no nitrogen', 'they are ionic', 'they are strong acids'], 'The lone pair is less available.'),
    Q('Heating a halogenoalkane with ammonia gives a mixture of amines because:', ['the amine formed is itself a nucleophile and reacts further', 'ammonia is an electrophile', 'the reaction is reversible', 'the halogenoalkane decomposes'], 'Use excess ammonia to favour the primary amine.'),
    Q('Benzenediazonium chloride is coupled with phenol in:', ['alkaline solution, below 10 °C', 'concentrated acid at 100 °C', 'ethanol under reflux', 'the gas phase'], 'Phenoxide ions couple readily.'),
  ],
  'ac-aminoacid-1': [
    Q('In strongly acidic solution, glycine exists as:', ['⁺H₃NCH₂COOH', 'H₂NCH₂COO⁻', '⁺H₃NCH₂COO⁻', 'H₂NCH₂COOH'], 'The carboxylate is protonated.'),
    Q('Amino acids have high melting points because:', ['they exist as zwitterions with strong ionic attractions', 'they are polymers', 'they contain metal ions', 'they are very heavy'], 'Ionic lattice.'),
    Q('The baseline of a chromatogram is drawn in pencil because:', ['graphite does not dissolve in the solvent', 'ink is too expensive', 'pencil is easier to see', 'ink reacts with ninhydrin'], 'Ink would run with the solvent.'),
    Q('Two different amino acids can form how many different dipeptides?', ['2', '1', '3', '4'], 'Gly-Ala and Ala-Gly.'),
  ],
  'ac-polymer-2': [
    Q('Nylon-6,6 is so called because:', ['each monomer has six carbon atoms', 'it has six amide links', 'it melts at 66 °C', 'it was the sixth nylon'], 'Hexane-1,6-diamine and hexanedioic acid.'),
    Q('In the nylon rope trick, the nylon forms:', ['where the two liquid layers meet', 'at the bottom of the beaker', 'in the air', 'only when heated'], 'The monomers meet at the interface.'),
    Q('DNA is a condensation polymer of:', ['nucleotides', 'amino acids', 'glucose', 'ethene'], 'Joined by phosphodiester links.'),
    Q('To find the monomers of a polyester you should:', ['break each ester link and add back water', 'remove all oxygen atoms', 'count the carbon atoms only', 'add hydrogen to every C=C'], 'Hydrolysis in reverse of condensation.'),
  ],
  'ac-spec-1': [
    Q('The base peak in a mass spectrum is:', ['the tallest peak, set to 100%', 'the peak with the largest m/z', 'always the molecular ion', 'the smallest peak'], 'The most abundant ion.'),
    Q('A molecule containing one chlorine atom shows M and M+2 peaks in the ratio:', ['3 : 1', '1 : 1', '1 : 3', '2 : 1'], '³⁵Cl : ³⁷Cl.'),
    Q('A loss of 15 from the molecular ion shows the loss of:', ['a CH₃ group', 'an OH group', 'a water molecule', 'a COOH group'], 'CH₃ has mass 15.'),
    Q('Only positive ions are detected in a mass spectrometer, so the neutral fragments:', ['do not appear in the spectrum', 'give the base peak', 'give the M+1 peak', 'appear as negative peaks'], 'They are not deflected or detected.'),
  ],
  'ac-spec-2': [
    Q('A bond absorbs infrared radiation only if its vibration:', ['changes the dipole of the molecule', 'breaks the bond', 'produces light', 'involves a metal'], 'This is why N₂ and O₂ do not absorb.'),
    Q('The O–H absorption of a carboxylic acid is:', ['very broad, from 2500 to 3300 cm⁻¹', 'sharp near 1700 cm⁻¹', 'near 2200 cm⁻¹', 'absent'], 'Strong hydrogen bonding broadens it.'),
    Q('A sharp peak near 2250 cm⁻¹ suggests:', ['a C≡N group', 'an O–H group', 'a C–O bond', 'a C=C bond'], 'Nitriles absorb near 2200 to 2260 cm⁻¹.'),
    Q('Infrared radiation is absorbed in the atmosphere by:', ['carbon dioxide, water vapour and methane', 'nitrogen and oxygen', 'argon only', 'ozone only'], 'Greenhouse gases.'),
  ],
  'ac-spec-3': [
    Q('Samples for ¹H NMR are dissolved in CDCl₃ because:', ['it contains no ordinary hydrogen atoms to give a signal', 'it is coloured', 'it reacts with the sample', 'it is cheap'], 'Deuterium does not show in ¹H NMR.'),
    Q('An aldehyde proton, –CHO, appears at about:', ['9 to 10 ppm', '1 ppm', '4 ppm', '0 ppm'], 'Far from TMS.'),
    Q('An ethyl group gives in ¹H NMR:', ['a triplet (3H) and a quartet (2H)', 'two singlets', 'a doublet only', 'a septet'], 'CH₃ next to CH₂ and CH₂ next to CH₃.'),
    Q('The number of peaks in the ¹³C NMR spectrum of propanone is:', ['2', '3', '1', '6'], 'Two equivalent CH₃ carbons and one C=O.'),
  ],
  'ac-synth-2': [
    Q('Grignard reagents must be made in dry ether because:', ['water destroys them', 'ether is a catalyst', 'water makes them explode', 'they need oxygen'], 'They react with water to give alkanes.'),
    Q('A Grignard reagent with carbon dioxide, followed by acid, gives:', ['a carboxylic acid with one more carbon', 'an alcohol', 'an alkane', 'a ketone'], 'Dry ice is the CO₂ source.'),
    Q('Reduction of a nitrile with LiAlH₄ gives:', ['a primary amine', 'a carboxylic acid', 'an alcohol', 'an amide'], 'R–CN → R–CH₂NH₂.'),
    Q('Friedel-Crafts reactions form a C–C bond between:', ['a benzene ring and an alkyl or acyl group', 'two alkenes', 'two alcohols', 'an amine and an acid'], 'With an AlCl₃ catalyst.'),
  ],
  'ac-u6-org1': [
    Q('Which molecule shows optical isomerism?', ['2-hydroxypropanoic acid', 'propanoic acid', 'propan-2-ol', 'ethanoic acid'], 'C2 carries H, OH, CH₃ and COOH.'),
    Q('Alkene + HBr is an example of:', ['electrophilic addition', 'nucleophilic substitution', 'free-radical substitution', 'addition-elimination'], 'The π electrons attack H⁺.'),
    Q('A yellow precipitate with iodine in sodium hydroxide shows:', ['a CH₃CO– or CH₃CH(OH)– group', 'a phenol', 'a C=C bond', 'a carboxylic acid'], 'Triiodomethane forms.'),
    Q('Which is the strongest acid?', ['ethanoic acid', 'phenol', 'water', 'ethanol'], 'pKa 4.76.'),
  ],
  'ac-u6-org2': [
    Q('The first piece of evidence to read in a structure question is usually:', ['the molecular formula and Mr', 'the boiling point', 'the colour', 'the price'], 'Then the spectra.'),
    Q('A curly arrow should start at:', ['a lone pair or a bond', 'an atom’s nucleus', 'a positive charge', 'empty space'], 'It shows where the electron pair comes from.'),
    Q('In ¹H NMR, a peak that disappears on shaking with D₂O shows:', ['an O–H or N–H proton', 'a CH₃ group', 'an aromatic proton', 'TMS'], 'Exchange with deuterium.'),
    Q('Recrystallisation purifies a solid by:', ['dissolving it in the minimum of hot solvent and letting it crystallise on cooling', 'heating it until it melts', 'distilling it', 'adding a catalyst'], 'Impurities stay in solution.'),
  ],
};
