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
};
