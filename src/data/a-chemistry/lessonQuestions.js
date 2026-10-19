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
  'ac-energy-2': [
    Q('The standard enthalpy of formation of an element in its standard state is:', ['Zero', 'Always positive', 'Always negative', 'Equal to its bond enthalpy'], 'Nothing is formed when an element is made from itself.'),
    Q('Using bond enthalpies, ΔH is approximately:', ['Σ(bonds broken) − Σ(bonds made)', 'Σ(bonds made) − Σ(bonds broken)', 'Σ(bonds broken) + Σ(bonds made)', 'Zero'], 'Breaking bonds takes in energy; making bonds gives it out.'),
  ],
  'ac-equil-1': [
    Q('A large value of Kc means that at equilibrium:', ['The mixture contains mostly products', 'The mixture contains mostly reactants', 'The reaction is very fast', 'No reaction has happened'], 'Kc says nothing about the rate.'),
    Q('The partial pressure of a gas in a mixture equals:', ['Its mole fraction × the total pressure', 'Its mass × the total pressure', 'The total pressure ÷ its moles', 'Its volume × the temperature'], 'Mole fraction = moles of the gas ÷ total moles of gas.'),
  ],
  'ac-redox-1': [
    Q('The oxidation number of oxygen in hydrogen peroxide, H₂O₂, is:', ['−1', '−2', '0', '+2'], 'Peroxides are an exception to the usual −2.'),
    Q('A reaction in which one element is both oxidised and reduced is called:', ['Disproportionation', 'Neutralisation', 'Hydrolysis', 'Polymerisation'], 'Chlorine with cold alkali is an example.'),
  ],
  'ac-org2-3': [
    Q('Phenylamine is a weaker base than ethylamine because:', ['The nitrogen lone pair is delocalised into the benzene ring', 'Phenylamine has no lone pair', 'Ethylamine is an acid', 'Phenylamine is ionic'], 'The lone pair is less available to accept a proton.'),
    Q('In solution, amino acids exist mainly as:', ['Zwitterions', 'Free radicals', 'Carbocations', 'Neutral molecules with no charges'], 'They carry ⁺H₃N– and –COO⁻ groups.'),
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
};
