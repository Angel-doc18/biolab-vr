// Chemistry topic material first written as eleven GCE Ordinary Level units: each
// entry's labelled 3D model (vr.parts, built in src/three/chemModels.js keyed by the
// same id), its diagram and its quiz questions. The class topics in units.js are
// built from this bank.
//
// Quiz convention: the correct option is written first in `a`; options are
// shuffled when shown.

const part = (key, en, fr) => ({ key, ...en, fr });

const OLD = [
  {
    id: 'ch-matter',
    n: 1,
    group: 'matter',
    icon: 'grain',
    diagram: 'particles-states',
    ask: 'Why does a gas spread out faster than a liquid?',
    title: 'The Particulate Nature of Matter and Separation Techniques',
    short: 'Particles, States and Separation',
    focus: 'Kinetic theory, purity, filtration, distillation, chromatography',
    vr: {
      title: 'Particles in a Solid, a Liquid and a Gas',
      subtitle: 'How closely the particles are packed and how they move in each state of matter.',
      fr: { title: 'Particules d’un solide, d’un liquide et d’un gaz', subtitle: 'L’arrangement et le mouvement des particules dans chaque état de la matière.' },
      parts: [
        part(
          'solid',
          { name: 'Solid', tag: 'Fixed positions', list: 'Particles in a solid', title: 'Solid', desc: 'Particles are packed closely in a regular arrangement. They vibrate about fixed positions and cannot move past each other, so a solid has a fixed shape and a fixed volume.' },
          { name: 'Solide', tag: 'Positions fixes', list: 'Particules d’un solide', title: 'Solide', desc: 'Les particules sont serrées et rangées régulièrement. Elles vibrent autour de positions fixes : le solide a une forme et un volume propres.' }
        ),
        part(
          'liquid',
          { name: 'Liquid', tag: 'Close but moving', list: 'Particles in a liquid', title: 'Liquid', desc: 'Particles are still close together but irregularly arranged. They slide past each other, so a liquid flows and takes the shape of its container while keeping a fixed volume.' },
          { name: 'Liquide', tag: 'Proches mais mobiles', list: 'Particules d’un liquide', title: 'Liquide', desc: 'Les particules restent proches mais en désordre. Elles glissent les unes sur les autres : le liquide coule et prend la forme du récipient, avec un volume fixe.' }
        ),
        part(
          'gas',
          { name: 'Gas', tag: 'Far apart, fast', list: 'Particles in a gas', title: 'Gas', desc: 'Particles are far apart and move quickly and randomly in all directions. A gas fills its whole container and is easily compressed because there is a lot of space between the particles.' },
          { name: 'Gaz', tag: 'Éloignées, rapides', list: 'Particules d’un gaz', title: 'Gaz', desc: 'Les particules sont éloignées et se déplacent vite et au hasard. Le gaz occupe tout le récipient et se comprime facilement.' }
        ),
      ],
    },
    quiz: [
      { q: 'Which state of matter has particles that vibrate about fixed positions?', a: ['Solid', 'Liquid', 'Gas', 'Plasma'], why: 'In a solid the particles are held in a regular lattice and can only vibrate. In liquids and gases they move from place to place.' },
      { q: 'The spreading of a smell through a room is an example of:', a: ['Diffusion', 'Condensation', 'Sublimation', 'Filtration'], why: 'Gas particles move randomly and spread from where they are concentrated to where they are less concentrated.' },
      { q: 'Which gas diffuses fastest at the same temperature?', a: ['Hydrogen (Mr = 2)', 'Oxygen (Mr = 32)', 'Carbon dioxide (Mr = 44)', 'Chlorine (Mr = 71)'], why: 'Lighter particles move faster at the same temperature, so the gas with the smallest relative molecular mass diffuses fastest.' },
      { q: 'A pure substance melts:', a: ['At one sharp, fixed temperature', 'Over a wide range of temperatures', 'At a temperature that depends on how much there is', 'Only when it is heated very slowly'], why: 'Impurities lower the melting point and make the substance melt over a range. A sharp melting point is a test of purity.' },
      { q: 'Sand can be separated from salt solution by:', a: ['Filtration', 'Chromatography', 'Simple distillation', 'Fractional distillation'], why: 'Sand is insoluble and stays on the filter paper as the residue; the salt solution passes through as the filtrate.' },
      { q: 'Pure water can be obtained from sea water by:', a: ['Simple distillation', 'Filtration', 'Crystallisation', 'Chromatography'], why: 'The water boils off, is cooled in the condenser and collected as the distillate. The salt stays behind in the flask.' },
      { q: 'Ethanol (b.p. 78 °C) is separated from water (b.p. 100 °C) by:', a: ['Fractional distillation', 'Filtration', 'Decanting', 'Using a separating funnel'], why: 'The two liquids mix completely but have different boiling points, so a fractionating column is used to separate them.' },
      { q: 'In paper chromatography the dyes separate because they:', a: ['Have different solubilities in the solvent and attraction to the paper', 'Have different colours', 'Have different boiling points', 'React with the paper'], why: 'A dye that is more soluble in the solvent and less attracted to the paper travels further up the paper.' },
      { q: 'The change from a solid directly to a gas is called:', a: ['Sublimation', 'Evaporation', 'Melting', 'Condensation'], why: 'Iodine and solid carbon dioxide (dry ice) sublime when heated, without becoming liquid.' },
      { q: 'When a liquid boils at constant pressure, its temperature:', a: ['Stays constant until all of it has boiled', 'Keeps rising steadily', 'Falls', 'Rises then falls'], why: 'The energy supplied is used to overcome the forces between particles (latent heat), not to raise the temperature.' },
    ],
  },
  {
    id: 'ch-atoms',
    n: 2,
    group: 'matter',
    icon: 'blur_circular',
    diagram: 'atom-structure',
    ask: 'How do I work out the electron arrangement of an element from its atomic number?',
    title: 'Atomic Structure and the Periodic Table',
    short: 'Atoms and the Periodic Table',
    focus: 'Protons, neutrons, electrons, isotopes, groups and periods',
    vr: {
      title: 'A Sodium Atom: Nucleus and Electron Shells',
      subtitle: 'Eleven protons and twelve neutrons in the nucleus, and the 2, 8, 1 arrangement of the electrons.',
      fr: { title: 'Un atome de sodium : noyau et couches électroniques', subtitle: 'Onze protons et douze neutrons dans le noyau, et la répartition 2, 8, 1 des électrons.' },
      parts: [
        part(
          'nucleus',
          { name: 'Nucleus', tag: '11 p, 12 n', list: 'Nucleus (protons and neutrons)', title: 'Nucleus', desc: 'The tiny, dense centre of the atom. Sodium has 11 protons (positive, the atomic number) and 12 neutrons (no charge). Mass number = protons + neutrons = 23.' },
          { name: 'Noyau', tag: '11 p, 12 n', list: 'Noyau (protons et neutrons)', title: 'Noyau', desc: 'Le centre minuscule et dense de l’atome. Le sodium a 11 protons (positifs, le numéro atomique) et 12 neutrons. Nombre de masse = 23.' }
        ),
        part(
          'shell1',
          { name: 'First shell', tag: '2 electrons', list: 'First electron shell', title: 'First Shell', desc: 'The shell nearest the nucleus holds at most 2 electrons. It fills first.' },
          { name: 'Première couche', tag: '2 électrons', list: 'Première couche', title: 'Première couche', desc: 'La couche la plus proche du noyau contient au plus 2 électrons. Elle se remplit en premier.' }
        ),
        part(
          'shell2',
          { name: 'Second shell', tag: '8 electrons', list: 'Second electron shell', title: 'Second Shell', desc: 'The second shell holds up to 8 electrons. In sodium it is full.' },
          { name: 'Deuxième couche', tag: '8 électrons', list: 'Deuxième couche', title: 'Deuxième couche', desc: 'La deuxième couche contient jusqu’à 8 électrons. Elle est pleine dans le sodium.' }
        ),
        part(
          'outer',
          { name: 'Outer electron', tag: 'Group I', list: 'Single outer electron', title: 'Outer Shell Electron', desc: 'Sodium has one electron in its outer shell, so it is in Group I. It loses this electron easily to form the Na⁺ ion, which is why sodium is so reactive. The number of shells (3) gives the period.' },
          { name: 'Électron externe', tag: 'Groupe I', list: 'Électron de la couche externe', title: 'Électron de valence', desc: 'Le sodium a un seul électron externe : il est dans le groupe I. Il le perd facilement pour former Na⁺. Ses 3 couches donnent sa période.' }
        ),
      ],
    },
    quiz: [
      { q: 'The atomic number of an element is the number of:', a: ['Protons in the nucleus', 'Neutrons in the nucleus', 'Protons plus neutrons', 'Electrons in the outer shell'], why: 'Every atom of an element has the same number of protons. The mass number is protons plus neutrons.' },
      { q: 'An atom of chlorine-35 has 17 protons. How many neutrons does it have?', a: ['18', '17', '35', '52'], why: 'Neutrons = mass number − atomic number = 35 − 17 = 18.' },
      { q: 'Isotopes of an element have the same number of protons but a different number of:', a: ['Neutrons', 'Electrons', 'Protons', 'Shells'], why: 'Isotopes have the same atomic number but different mass numbers, so they differ only in neutrons. Their chemical properties are the same.' },
      { q: 'The electron arrangement of magnesium (atomic number 12) is:', a: ['2, 8, 2', '2, 10', '2, 8, 1, 1', '8, 4'], why: 'Shells fill in order: 2 in the first, 8 in the second, then the remaining 2 in the third.' },
      { q: 'Elements in the same group of the Periodic Table have the same:', a: ['Number of outer shell electrons', 'Number of shells', 'Mass number', 'Number of neutrons'], why: 'The outer electrons decide how an element reacts, which is why elements in a group have similar chemical properties.' },
      { q: 'Going down Group I, the metals become:', a: ['More reactive', 'Less reactive', 'Harder', 'Less able to conduct electricity'], why: 'The outer electron is further from the nucleus and more shielded, so it is lost more easily.' },
      { q: 'Going down Group VII (the halogens), reactivity:', a: ['Decreases', 'Increases', 'Stays the same', 'First rises then falls'], why: 'Halogens react by gaining an electron. Larger atoms attract the extra electron less strongly, so fluorine is the most reactive.' },
      { q: 'The noble gases are unreactive because they:', a: ['Have a full outer shell of electrons', 'Have no electrons', 'Are metals', 'Have very large nuclei'], why: 'A full outer shell is a stable arrangement, so they do not need to gain, lose or share electrons.' },
      { q: 'Chlorine has two isotopes, ³⁵Cl (75%) and ³⁷Cl (25%). Its relative atomic mass is:', a: ['35.5', '36', '35', '37'], why: 'Ar = (35 × 75 + 37 × 25) ÷ 100 = (2625 + 925) ÷ 100 = 35.5.' },
      { q: 'A typical property of transition metals is that they:', a: ['Form coloured compounds', 'Are soft and float on water', 'Have only one oxidation state', 'Do not conduct electricity'], why: 'Transition metals such as copper and iron form coloured compounds, have more than one oxidation state and are often used as catalysts.' },
    ],
  },
  {
    id: 'ch-bonding',
    n: 3,
    group: 'matter',
    icon: 'hub',
    diagram: 'ionic-bonding',
    ask: 'Why does sodium chloride conduct electricity when molten but not when solid?',
    title: 'Chemical Bonding and the Structure of Substances',
    short: 'Bonding and Structure',
    focus: 'Ionic, covalent and metallic bonding; giant and simple structures',
    vr: {
      title: 'Sodium Chloride: a Giant Ionic Lattice',
      subtitle: 'Sodium and chloride ions held in a regular three-dimensional lattice by strong electrostatic forces.',
      fr: { title: 'Chlorure de sodium : un réseau ionique géant', subtitle: 'Ions sodium et chlorure maintenus dans un réseau régulier par de fortes forces électrostatiques.' },
      parts: [
        part(
          'na',
          { name: 'Sodium ion, Na⁺', tag: 'Lost 1 electron', list: 'Sodium ions', title: 'Sodium Ion (Na⁺)', desc: 'A sodium atom (2, 8, 1) loses its outer electron to become a positive ion with the stable arrangement 2, 8. Each Na⁺ is surrounded by six Cl⁻ ions.' },
          { name: 'Ion sodium, Na⁺', tag: 'A perdu 1 électron', list: 'Ions sodium', title: 'Ion sodium (Na⁺)', desc: 'L’atome de sodium (2, 8, 1) perd son électron externe et devient un ion positif de structure stable 2, 8. Chaque Na⁺ est entouré de six ions Cl⁻.' }
        ),
        part(
          'cl',
          { name: 'Chloride ion, Cl⁻', tag: 'Gained 1 electron', list: 'Chloride ions', title: 'Chloride Ion (Cl⁻)', desc: 'A chlorine atom (2, 8, 7) gains one electron to become a negative ion with the arrangement 2, 8, 8. Chloride ions are larger than sodium ions.' },
          { name: 'Ion chlorure, Cl⁻', tag: 'A gagné 1 électron', list: 'Ions chlorure', title: 'Ion chlorure (Cl⁻)', desc: 'L’atome de chlore (2, 8, 7) gagne un électron et devient un ion négatif 2, 8, 8. Les ions chlorure sont plus gros que les ions sodium.' }
        ),
        part(
          'lattice',
          { name: 'Ionic bonds', tag: 'Strong attraction', list: 'Electrostatic attraction in the lattice', title: 'Ionic Bonding in the Lattice', desc: 'The strong electrostatic attraction between oppositely charged ions acts in all directions. A lot of energy is needed to break the lattice, so sodium chloride has a high melting point (801 °C). It conducts only when molten or dissolved, when the ions are free to move.' },
          { name: 'Liaisons ioniques', tag: 'Forte attraction', list: 'Attraction électrostatique', title: 'Liaison ionique dans le réseau', desc: 'La forte attraction entre ions de charges opposées s’exerce dans toutes les directions : le point de fusion est élevé (801 °C). Le composé ne conduit que fondu ou dissous, quand les ions peuvent se déplacer.' }
        ),
      ],
    },
    quiz: [
      { q: 'An ionic bond is formed by:', a: ['The transfer of electrons from a metal to a non-metal', 'The sharing of a pair of electrons', 'A sea of delocalised electrons', 'The sharing of protons'], why: 'The metal atom loses electrons to become a positive ion and the non-metal gains them to become a negative ion. The ions attract each other.' },
      { q: 'A covalent bond is:', a: ['A shared pair of electrons', 'An attraction between ions', 'A transfer of protons', 'A bond only found in metals'], why: 'Non-metal atoms share pairs of electrons so that each gets a full outer shell.' },
      { q: 'The formula of the compound formed between calcium (Ca²⁺) and chloride (Cl⁻) ions is:', a: ['CaCl₂', 'CaCl', 'Ca₂Cl', 'Ca₂Cl₂'], why: 'Two Cl⁻ ions are needed to balance the charge on one Ca²⁺ ion.' },
      { q: 'Simple molecular substances such as water have low melting points because:', a: ['The forces between molecules are weak', 'The covalent bonds are weak', 'They contain ions', 'They are giant structures'], why: 'Melting only overcomes the weak intermolecular forces; the strong covalent bonds inside the molecules are not broken.' },
      { q: 'Why does graphite conduct electricity but diamond does not?', a: ['Graphite has delocalised electrons between its layers', 'Diamond has free ions', 'Graphite is a metal', 'Diamond has weaker covalent bonds'], why: 'Each carbon in graphite forms three bonds, leaving one electron free to move. In diamond all four outer electrons are used in bonds.' },
      { q: 'Diamond is very hard because:', a: ['Each carbon atom is joined to four others by strong covalent bonds in a giant structure', 'It is made of layers that slide', 'It has weak forces between molecules', 'It contains metal ions'], why: 'Breaking diamond means breaking many strong covalent bonds, which is why it is used in cutting tools.' },
      { q: 'Metals conduct electricity because they have:', a: ['Delocalised electrons that can move', 'Free ions in a solution', 'Shared pairs of electrons', 'No electrons'], why: 'Metallic bonding is the attraction between positive metal ions and a sea of delocalised electrons that move when a voltage is applied.' },
      { q: 'How many covalent bonds are there in a molecule of methane, CH₄?', a: ['4', '1', '2', '8'], why: 'Carbon has four outer electrons and shares one pair with each of the four hydrogen atoms.' },
      { q: 'Sodium chloride conducts electricity:', a: ['When molten or dissolved in water', 'Only as a solid', 'Never', 'Only when cold'], why: 'In the solid the ions are fixed in the lattice. When molten or dissolved the ions are free to move and carry charge.' },
      { q: 'An oxygen molecule, O₂, contains:', a: ['A double covalent bond', 'A single covalent bond', 'A triple covalent bond', 'An ionic bond'], why: 'Each oxygen atom needs two more electrons, so the atoms share two pairs of electrons.' },
    ],
  },
  {
    id: 'ch-moles',
    n: 4,
    group: 'matter',
    icon: 'calculate',
    diagram: 'covalent-bonding',
    ask: 'How do I calculate the mass of product from a balanced equation?',
    title: 'Formulae, Equations and the Mole Concept',
    short: 'Formulae, Equations and Moles',
    focus: 'Balancing equations, moles, molar mass, gas volumes, concentration',
    vr: {
      title: 'Simple Molecules: Water, Carbon Dioxide and Methane',
      subtitle: 'Count the atoms in each molecule to write its formula and work out its relative molecular mass.',
      fr: { title: 'Molécules simples : eau, dioxyde de carbone et méthane', subtitle: 'Comptez les atomes de chaque molécule pour écrire sa formule et calculer sa masse moléculaire relative.' },
      parts: [
        part(
          'water',
          { name: 'Water, H₂O', tag: 'Mr = 18', list: 'Water molecule', title: 'Water (H₂O)', desc: 'One oxygen atom bonded to two hydrogen atoms. Mr = 16 + 2 × 1 = 18, so one mole of water has a mass of 18 g. The molecule is bent (angle about 104.5°).' },
          { name: 'Eau, H₂O', tag: 'Mr = 18', list: 'Molécule d’eau', title: 'Eau (H₂O)', desc: 'Un atome d’oxygène lié à deux atomes d’hydrogène. Mr = 16 + 2 × 1 = 18 : une mole d’eau a une masse de 18 g. La molécule est coudée (environ 104,5°).' }
        ),
        part(
          'co2',
          { name: 'Carbon dioxide, CO₂', tag: 'Mr = 44', list: 'Carbon dioxide molecule', title: 'Carbon Dioxide (CO₂)', desc: 'One carbon atom joined to two oxygen atoms by double bonds, in a straight line. Mr = 12 + 2 × 16 = 44. One mole of any gas occupies 24 dm³ at room temperature and pressure.' },
          { name: 'Dioxyde de carbone, CO₂', tag: 'Mr = 44', list: 'Molécule de CO₂', title: 'Dioxyde de carbone (CO₂)', desc: 'Un atome de carbone lié à deux atomes d’oxygène par des doubles liaisons, en ligne droite. Mr = 12 + 2 × 16 = 44. Une mole de gaz occupe 24 dm³ à température et pression ambiantes.' }
        ),
        part(
          'methane',
          { name: 'Methane, CH₄', tag: 'Mr = 16', list: 'Methane molecule', title: 'Methane (CH₄)', desc: 'One carbon atom bonded to four hydrogen atoms arranged as a tetrahedron (angles 109.5°). Mr = 12 + 4 × 1 = 16. Methane is the main gas in natural gas.' },
          { name: 'Méthane, CH₄', tag: 'Mr = 16', list: 'Molécule de méthane', title: 'Méthane (CH₄)', desc: 'Un atome de carbone lié à quatre atomes d’hydrogène en tétraèdre (109,5°). Mr = 12 + 4 × 1 = 16. C’est le principal gaz du gaz naturel.' }
        ),
      ],
    },
    quiz: [
      { q: 'What is the relative molecular mass of CaCO₃? (Ca = 40, C = 12, O = 16)', a: ['100', '68', '84', '116'], why: 'Mr = 40 + 12 + 3 × 16 = 100.' },
      { q: 'How many moles are in 8 g of oxygen gas, O₂? (O = 16)', a: ['0.25', '0.5', '2', '4'], why: 'Moles = mass ÷ molar mass = 8 ÷ 32 = 0.25 mol.' },
      { q: 'The volume of 2 moles of any gas at room temperature and pressure is:', a: ['48 dm³', '24 dm³', '22.4 dm³', '12 dm³'], why: 'One mole of gas occupies 24 dm³ at r.t.p., so 2 moles occupy 48 dm³.' },
      { q: 'Which equation is balanced?', a: ['2H₂ + O₂ → 2H₂O', 'H₂ + O₂ → H₂O', 'H₂ + 2O₂ → 2H₂O', '2H₂ + 2O₂ → H₂O'], why: 'Both sides have 4 hydrogen atoms and 2 oxygen atoms.' },
      { q: 'What mass of sodium hydroxide (Mr = 40) is needed to make 250 cm³ of a 0.1 mol/dm³ solution?', a: ['1.0 g', '4.0 g', '10 g', '0.4 g'], why: 'Moles = 0.1 × 0.25 = 0.025 mol; mass = 0.025 × 40 = 1.0 g.' },
      { q: 'A compound contains 75% carbon and 25% hydrogen by mass. Its empirical formula is: (C = 12, H = 1)', a: ['CH₄', 'CH₃', 'C₂H₆', 'CH₂'], why: 'C: 75 ÷ 12 = 6.25; H: 25 ÷ 1 = 25. Ratio 6.25 : 25 = 1 : 4, so CH₄.' },
      { q: 'One mole of a substance contains:', a: ['6 × 10²³ particles', '6 × 10⁻²³ particles', '12 particles', '24 particles'], why: 'This number is the Avogadro constant, about 6.02 × 10²³ per mole.' },
      { q: 'In CaCO₃ → CaO + CO₂, what mass of CaO is made from 50 g of CaCO₃? (CaCO₃ = 100, CaO = 56)', a: ['28 g', '56 g', '50 g', '22 g'], why: '50 g is 0.5 mol of CaCO₃, which makes 0.5 mol of CaO: 0.5 × 56 = 28 g.' },
      { q: 'The state symbol (aq) means the substance is:', a: ['Dissolved in water', 'A liquid', 'A gas', 'A solid'], why: 'aq stands for aqueous: in solution in water. (l) is liquid, (g) gas and (s) solid.' },
      { q: 'The formula of aluminium oxide (Al³⁺, O²⁻) is:', a: ['Al₂O₃', 'AlO', 'Al₃O₂', 'AlO₃'], why: 'Two Al³⁺ (total +6) balance three O²⁻ (total −6).' },
    ],
  },
  {
    id: 'ch-acids',
    n: 5,
    group: 'reactions',
    icon: 'science',
    diagram: 'titration',
    ask: 'How do I choose a method to prepare a soluble salt?',
    title: 'Acids, Bases and Salts',
    short: 'Acids, Bases and Salts',
    focus: 'pH, neutralisation, preparing salts, titration',
    vr: {
      title: 'Titration Apparatus: Burette and Conical Flask',
      subtitle: 'Adding acid from a burette to a measured volume of alkali until the indicator changes colour.',
      fr: { title: 'Appareil de titrage : burette et erlenmeyer', subtitle: 'Ajout d’acide à la burette à un volume connu de base jusqu’au virage de l’indicateur.' },
      parts: [
        part(
          'burette',
          { name: 'Burette', tag: 'Reads to 0.05 cm³', list: 'Burette with acid', title: 'Burette', desc: 'A long graduated tube that delivers a measured volume of acid. Read it at eye level from the bottom of the meniscus, before and after the titration; the difference is the titre.' },
          { name: 'Burette', tag: 'Lecture à 0,05 cm³', list: 'Burette d’acide', title: 'Burette', desc: 'Tube gradué qui délivre un volume mesuré d’acide. On lit le bas du ménisque à hauteur des yeux, avant et après : la différence est le volume versé.' }
        ),
        part(
          'tap',
          { name: 'Tap', tag: 'Controls the flow', list: 'Burette tap', title: 'Tap', desc: 'Lets the acid run in quickly at first and then drop by drop near the end-point, while the flask is swirled.' },
          { name: 'Robinet', tag: 'Règle le débit', list: 'Robinet de la burette', title: 'Robinet', desc: 'Permet de verser vite au début puis goutte à goutte près de l’équivalence, en agitant l’erlenmeyer.' }
        ),
        part(
          'flask',
          { name: 'Conical flask', tag: 'Alkali + indicator', list: 'Conical flask with alkali', title: 'Conical Flask', desc: 'Contains 25.0 cm³ of alkali measured with a pipette, plus a few drops of indicator. Its shape lets you swirl without spilling.' },
          { name: 'Erlenmeyer', tag: 'Base + indicateur', list: 'Erlenmeyer avec la base', title: 'Erlenmeyer', desc: 'Contient 25,0 cm³ de base mesurés à la pipette et quelques gouttes d’indicateur. Sa forme permet d’agiter sans renverser.' }
        ),
        part(
          'stand',
          { name: 'Stand and white tile', tag: 'See the colour change', list: 'Clamp stand and white tile', title: 'Clamp Stand and White Tile', desc: 'The clamp holds the burette upright. The white tile under the flask makes the colour change at the end-point easy to see.' },
          { name: 'Support et carreau blanc', tag: 'Voir le virage', list: 'Support et carreau blanc', title: 'Support et carreau blanc', desc: 'La pince maintient la burette verticale. Le carreau blanc sous l’erlenmeyer rend le virage de couleur facile à voir.' }
        ),
      ],
    },
    quiz: [
      { q: 'A solution with a pH of 1 is:', a: ['Strongly acidic', 'Weakly acidic', 'Neutral', 'Strongly alkaline'], why: 'pH below 7 is acidic; the lower the number, the stronger the acid. pH 7 is neutral and above 7 alkaline.' },
      { q: 'Acid + alkali → salt + water is called:', a: ['Neutralisation', 'Oxidation', 'Decomposition', 'Displacement'], why: 'The H⁺ ions from the acid react with the OH⁻ ions from the alkali to form water: H⁺ + OH⁻ → H₂O.' },
      { q: 'Which gas is given off when an acid reacts with a carbonate?', a: ['Carbon dioxide', 'Hydrogen', 'Oxygen', 'Chlorine'], why: 'Acid + carbonate → salt + water + carbon dioxide. The gas turns limewater milky.' },
      { q: 'Which gas is produced when zinc reacts with dilute hydrochloric acid?', a: ['Hydrogen', 'Carbon dioxide', 'Chlorine', 'Oxygen'], why: 'Metal + acid → salt + hydrogen. Hydrogen burns with a squeaky pop.' },
      { q: 'Phenolphthalein is pink in alkali and in acid it is:', a: ['Colourless', 'Red', 'Blue', 'Yellow'], why: 'Methyl orange is yellow in alkali and red in acid; phenolphthalein is pink in alkali and colourless in acid.' },
      { q: 'An insoluble salt such as barium sulphate is best prepared by:', a: ['Precipitation, mixing two soluble salts', 'Titration', 'Adding excess metal to acid', 'Heating the solid'], why: 'Mixing solutions of a soluble barium salt and a soluble sulphate forms a precipitate, which is filtered, washed and dried.' },
      { q: 'Sodium oxide dissolves in water to give an alkaline solution. Sodium oxide is a:', a: ['Basic oxide', 'Acidic oxide', 'Neutral oxide', 'Amphoteric oxide'], why: 'Metal oxides are generally basic. Non-metal oxides such as SO₂ and CO₂ are acidic.' },
      { q: 'An oxide that reacts with both acids and alkalis, such as aluminium oxide, is:', a: ['Amphoteric', 'Neutral', 'Basic only', 'Acidic only'], why: 'Aluminium oxide and zinc oxide are amphoteric.' },
      { q: '25.0 cm³ of 0.10 mol/dm³ NaOH is neutralised by 20.0 cm³ of HCl. The concentration of the HCl is:', a: ['0.125 mol/dm³', '0.10 mol/dm³', '0.080 mol/dm³', '0.25 mol/dm³'], why: 'Moles NaOH = 0.10 × 0.025 = 0.0025 = moles HCl (1 : 1). Concentration = 0.0025 ÷ 0.020 = 0.125 mol/dm³.' },
      { q: 'Which of these salts is insoluble in cold water?', a: ['Lead(II) chloride', 'Sodium chloride', 'Potassium nitrate', 'Ammonium sulphate'], why: 'All sodium, potassium and ammonium salts and all nitrates are soluble. Lead(II) chloride is insoluble in cold water.' },
    ],
  },
  {
    id: 'ch-redox',
    n: 6,
    group: 'reactions',
    icon: 'bolt',
    diagram: 'electrolysis',
    ask: 'How do I predict the products of electrolysis of a solution?',
    title: 'Redox Reactions and Electrolysis',
    short: 'Redox and Electrolysis',
    focus: 'Oxidation and reduction, electrolytes, electrode products, electroplating',
    vr: {
      title: 'An Electrolysis Cell',
      subtitle: 'A d.c. supply drives ions to the electrodes, where they gain or lose electrons.',
      fr: { title: 'Une cellule d’électrolyse', subtitle: 'Une alimentation continue pousse les ions vers les électrodes, où ils gagnent ou perdent des électrons.' },
      parts: [
        part(
          'anode',
          { name: 'Anode (+)', tag: 'Oxidation', list: 'Anode, positive electrode', title: 'Anode', desc: 'The positive electrode. Negative ions (anions) are attracted to it and lose electrons, which is oxidation. In concentrated sodium chloride solution, chlorine gas is given off here: 2Cl⁻ → Cl₂ + 2e⁻.' },
          { name: 'Anode (+)', tag: 'Oxydation', list: 'Anode, électrode positive', title: 'Anode', desc: 'L’électrode positive. Les anions y perdent des électrons : c’est une oxydation. Avec une solution concentrée de chlorure de sodium, il s’y dégage du chlore : 2Cl⁻ → Cl₂ + 2e⁻.' }
        ),
        part(
          'cathode',
          { name: 'Cathode (−)', tag: 'Reduction', list: 'Cathode, negative electrode', title: 'Cathode', desc: 'The negative electrode. Positive ions (cations) gain electrons here, which is reduction. From sodium chloride solution, hydrogen is given off because H⁺ is discharged more easily than Na⁺: 2H⁺ + 2e⁻ → H₂.' },
          { name: 'Cathode (−)', tag: 'Réduction', list: 'Cathode, électrode négative', title: 'Cathode', desc: 'L’électrode négative. Les cations y gagnent des électrons : c’est une réduction. Avec le chlorure de sodium en solution, il s’y dégage de l’hydrogène.' }
        ),
        part(
          'electrolyte',
          { name: 'Electrolyte', tag: 'Ions free to move', list: 'Electrolyte solution', title: 'Electrolyte', desc: 'A molten ionic compound or an ionic solution. It conducts because its ions move: cations towards the cathode and anions towards the anode.' },
          { name: 'Électrolyte', tag: 'Ions mobiles', list: 'Solution électrolytique', title: 'Électrolyte', desc: 'Un composé ionique fondu ou une solution ionique. Il conduit parce que ses ions se déplacent vers les électrodes.' }
        ),
        part(
          'supply',
          { name: 'd.c. supply', tag: 'Pushes electrons', list: 'Battery (d.c. supply)', title: 'Direct Current Supply', desc: 'The battery pumps electrons from the anode round the external circuit to the cathode. In the wires the current is carried by electrons; in the electrolyte it is carried by ions.' },
          { name: 'Alimentation continue', tag: 'Pousse les électrons', list: 'Pile (courant continu)', title: 'Alimentation continue', desc: 'La pile fait circuler les électrons de l’anode vers la cathode par le circuit extérieur. Dans les fils, ce sont des électrons ; dans l’électrolyte, des ions.' }
        ),
      ],
    },
    quiz: [
      { q: 'Oxidation is:', a: ['Loss of electrons', 'Gain of electrons', 'Loss of oxygen', 'Gain of hydrogen'], why: 'Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons).' },
      { q: 'In the reaction CuO + H₂ → Cu + H₂O, the copper(II) oxide is:', a: ['Reduced', 'Oxidised', 'A catalyst', 'Neutralised'], why: 'Copper(II) oxide loses oxygen to become copper, so it is reduced. Hydrogen is oxidised to water.' },
      { q: 'During electrolysis, positive ions move towards the:', a: ['Cathode', 'Anode', 'Battery', 'Salt bridge'], why: 'Opposite charges attract: cations go to the negative electrode, the cathode.' },
      { q: 'What is formed at the cathode when molten lead(II) bromide is electrolysed?', a: ['Lead', 'Bromine', 'Hydrogen', 'Oxygen'], why: 'Pb²⁺ + 2e⁻ → Pb at the cathode; bromide ions form bromine at the anode.' },
      { q: 'Electrolysis of dilute sulphuric acid with inert electrodes gives:', a: ['Hydrogen at the cathode and oxygen at the anode', 'Oxygen at the cathode and hydrogen at the anode', 'Sulphur at the anode', 'Only hydrogen'], why: 'Water is effectively decomposed: two volumes of hydrogen at the cathode and one volume of oxygen at the anode.' },
      { q: 'To electroplate a spoon with silver, the spoon should be the:', a: ['Cathode, in a solution of a silver salt', 'Anode, in a solution of a silver salt', 'Cathode, in water', 'Anode, in sulphuric acid'], why: 'Silver ions gain electrons at the cathode and deposit as silver metal on the spoon. The anode is pure silver.' },
      { q: 'Solid sodium chloride does not conduct electricity because:', a: ['Its ions cannot move', 'It has no ions', 'It is covalent', 'Its electrons are fixed in bonds'], why: 'The ions are held in the lattice. Melting or dissolving lets them move.' },
      { q: 'The oxidation number of sulphur in SO₂ is:', a: ['+4', '+2', '−2', '+6'], why: 'Each oxygen is −2, so 2 × (−2) = −4; sulphur must be +4 to make the molecule neutral.' },
      { q: 'In the purification of copper by electrolysis, impure copper is used as the:', a: ['Anode', 'Cathode', 'Electrolyte', 'Cell'], why: 'Copper dissolves from the impure anode and pure copper is deposited on the cathode; impurities fall as anode sludge.' },
      { q: 'An oxidising agent is a substance that:', a: ['Accepts electrons and is itself reduced', 'Gives away electrons', 'Is always oxygen', 'Is itself oxidised'], why: 'An oxidising agent oxidises something else by taking its electrons, so it is reduced.' },
    ],
  },
  {
    id: 'ch-energy',
    n: 7,
    group: 'reactions',
    icon: 'speed',
    diagram: 'rate-graph',
    ask: 'Why does a catalyst speed up a reaction without being used up?',
    title: 'Energy Changes, Rates of Reaction and Equilibrium',
    short: 'Energy, Rates and Equilibrium',
    focus: 'Exothermic and endothermic, collision theory, catalysts, reversible reactions',
    vr: {
      title: 'Measuring a Rate: Marble Chips and Acid',
      subtitle: 'Carbon dioxide from marble chips and hydrochloric acid is collected in a gas syringe and measured against time.',
      fr: { title: 'Mesurer une vitesse : marbre et acide', subtitle: 'Le dioxyde de carbone dégagé par le marbre et l’acide chlorhydrique est recueilli dans une seringue à gaz.' },
      parts: [
        part(
          'flask',
          { name: 'Reaction flask', tag: 'Acid + marble', list: 'Conical flask', title: 'Reaction Flask', desc: 'Contains hydrochloric acid and marble chips (calcium carbonate): CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. The bung keeps the gas from escaping.' },
          { name: 'Flacon réactionnel', tag: 'Acide + marbre', list: 'Erlenmeyer', title: 'Flacon réactionnel', desc: 'Contient l’acide chlorhydrique et le marbre (carbonate de calcium) : CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Le bouchon retient le gaz.' }
        ),
        part(
          'chips',
          { name: 'Marble chips', tag: 'Surface area', list: 'Marble chips', title: 'Marble Chips', desc: 'Smaller chips of the same total mass have a larger surface area, so there are more collisions per second and the reaction is faster.' },
          { name: 'Éclats de marbre', tag: 'Surface de contact', list: 'Éclats de marbre', title: 'Éclats de marbre', desc: 'Des éclats plus petits, pour la même masse, offrent une plus grande surface : plus de collisions par seconde, réaction plus rapide.' }
        ),
        part(
          'syringe',
          { name: 'Gas syringe', tag: 'Volume of CO₂', list: 'Gas syringe', title: 'Gas Syringe', desc: 'The plunger is pushed out as gas is produced. Reading the volume every 30 seconds gives a graph of volume against time; its gradient is the rate.' },
          { name: 'Seringue à gaz', tag: 'Volume de CO₂', list: 'Seringue à gaz', title: 'Seringue à gaz', desc: 'Le piston est repoussé par le gaz. On lit le volume toutes les 30 secondes : la pente de la courbe volume-temps est la vitesse.' }
        ),
      ],
    },
    quiz: [
      { q: 'An exothermic reaction:', a: ['Gives out heat to the surroundings', 'Takes in heat from the surroundings', 'Has no energy change', 'Only happens when heated strongly'], why: 'Combustion and neutralisation are exothermic: the temperature of the surroundings rises. ΔH is negative.' },
      { q: 'Increasing the temperature increases the rate of reaction mainly because:', a: ['More particles have energy equal to or above the activation energy', 'The particles become larger', 'The activation energy increases', 'There are fewer collisions'], why: 'Particles move faster, collide more often and, more importantly, a greater fraction of collisions have enough energy to react.' },
      { q: 'A catalyst increases the rate of a reaction by:', a: ['Providing a route with lower activation energy', 'Raising the temperature', 'Increasing the concentration', 'Being used up in the reaction'], why: 'A catalyst is unchanged in mass and chemically at the end of the reaction.' },
      { q: 'Which change would NOT increase the rate of reaction between zinc and hydrochloric acid?', a: ['Using larger lumps of zinc', 'Using more concentrated acid', 'Warming the acid', 'Adding a little copper(II) sulphate as a catalyst'], why: 'Larger lumps have a smaller surface area, so the rate falls.' },
      { q: 'Breaking chemical bonds:', a: ['Takes in energy', 'Gives out energy', 'Involves no energy', 'Always releases light'], why: 'Bond breaking is endothermic and bond making is exothermic. The overall energy change is the difference.' },
      { q: 'The symbol ⇌ in an equation shows that the reaction:', a: ['Is reversible', 'Is very fast', 'Needs a catalyst', 'Is exothermic'], why: 'For example N₂ + 3H₂ ⇌ 2NH₃: the products can react to form the reactants again.' },
      { q: 'In the Haber process the catalyst is:', a: ['Iron', 'Vanadium(V) oxide', 'Platinum', 'Nickel'], why: 'Iron is used for ammonia. Vanadium(V) oxide is used in the Contact process for sulphuric acid.' },
      { q: 'On a graph of gas volume against time, the reaction is fastest where:', a: ['The curve is steepest, at the start', 'The curve is flat, at the end', 'The curve crosses 50 cm³', 'The line is horizontal'], why: 'The rate is the gradient. It is greatest at the start, when the concentration of reactants is highest.' },
      { q: 'Dissolving ammonium nitrate in water makes the solution colder. The process is:', a: ['Endothermic', 'Exothermic', 'A combustion', 'A neutralisation'], why: 'Heat is taken in from the water, so the temperature falls.' },
      { q: 'Increasing the pressure of a reacting gas mixture increases the rate because:', a: ['The particles are closer together, so collisions are more frequent', 'The activation energy is lowered', 'The particles move faster', 'A catalyst forms'], why: 'Higher pressure means more gas particles in the same volume, which has the same effect as a higher concentration.' },
    ],
  },
  {
    id: 'ch-metals',
    n: 8,
    group: 'elements',
    icon: 'factory',
    diagram: 'blast-furnace',
    ask: 'Why is aluminium extracted by electrolysis but iron is not?',
    title: 'Metals: Reactivity, Extraction and Corrosion',
    short: 'Metals and the Reactivity Series',
    focus: 'Reactivity series, displacement, extraction of iron and aluminium, rusting',
    vr: {
      title: 'The Blast Furnace for Extracting Iron',
      subtitle: 'Iron ore is reduced by carbon monoxide in a tall furnace blown with hot air.',
      fr: { title: 'Le haut fourneau : extraction du fer', subtitle: 'Le minerai de fer est réduit par le monoxyde de carbone dans un grand four soufflé à l’air chaud.' },
      parts: [
        part(
          'charge',
          { name: 'Charge', tag: 'Ore, coke, limestone', list: 'Raw materials loaded at the top', title: 'The Charge', desc: 'Haematite (Fe₂O₃), coke (carbon) and limestone (CaCO₃) are added at the top. Coke burns to give heat and carbon monoxide, the reducing agent.' },
          { name: 'Charge', tag: 'Minerai, coke, calcaire', list: 'Matières premières en haut', title: 'La charge', desc: 'Hématite (Fe₂O₃), coke (carbone) et calcaire (CaCO₃) sont chargés en haut. Le coke brûle et donne la chaleur et le monoxyde de carbone, le réducteur.' }
        ),
        part(
          'air',
          { name: 'Hot air blast', tag: 'Tuyeres', list: 'Hot air blown in near the base', title: 'Hot Air Blast', desc: 'Hot air blown in near the bottom makes the coke burn: C + O₂ → CO₂. The CO₂ then reacts with more coke: CO₂ + C → 2CO. The furnace reaches about 1500 °C.' },
          { name: 'Air chaud', tag: 'Tuyères', list: 'Air chaud soufflé en bas', title: 'Soufflage d’air chaud', desc: 'L’air chaud fait brûler le coke : C + O₂ → CO₂, puis CO₂ + C → 2CO. La température atteint environ 1500 °C.' }
        ),
        part(
          'reduction',
          { name: 'Reduction zone', tag: 'CO reduces Fe₂O₃', list: 'Zone where iron oxide is reduced', title: 'Reduction of the Ore', desc: 'Carbon monoxide removes oxygen from the iron ore: Fe₂O₃ + 3CO → 2Fe + 3CO₂. The iron oxide is reduced and the carbon monoxide is oxidised.' },
          { name: 'Zone de réduction', tag: 'CO réduit Fe₂O₃', list: 'Zone de réduction', title: 'Réduction du minerai', desc: 'Le monoxyde de carbone enlève l’oxygène du minerai : Fe₂O₃ + 3CO → 2Fe + 3CO₂.' }
        ),
        part(
          'slag',
          { name: 'Slag', tag: 'Removes sand', list: 'Molten slag tapped off', title: 'Slag', desc: 'Limestone decomposes to calcium oxide, which reacts with sand (silicon dioxide) to form slag: CaO + SiO₂ → CaSiO₃. The slag floats on the iron and is tapped off.' },
          { name: 'Laitier', tag: 'Élimine le sable', list: 'Laitier fondu', title: 'Laitier', desc: 'Le calcaire donne de l’oxyde de calcium qui réagit avec le sable : CaO + SiO₂ → CaSiO₃. Le laitier flotte sur la fonte et est évacué.' }
        ),
        part(
          'iron',
          { name: 'Molten iron', tag: 'Tapped at the bottom', list: 'Molten iron', title: 'Molten Iron', desc: 'Dense molten iron collects at the bottom and is run off. This "pig iron" contains about 4% carbon and is made into steel by blowing oxygen through it.' },
          { name: 'Fonte liquide', tag: 'Coulée en bas', list: 'Fer fondu', title: 'Fer fondu', desc: 'Le fer fondu, dense, s’accumule au fond et est coulé. Cette fonte contient environ 4 % de carbone et sert à fabriquer l’acier.' }
        ),
      ],
    },
    quiz: [
      { q: 'Which metal is most reactive?', a: ['Potassium', 'Iron', 'Copper', 'Gold'], why: 'Order of reactivity: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au.' },
      { q: 'When an iron nail is placed in copper(II) sulphate solution:', a: ['Copper is deposited and the blue colour fades', 'Nothing happens', 'Iron is deposited on the copper', 'Hydrogen is given off'], why: 'Iron is more reactive than copper and displaces it: Fe + CuSO₄ → FeSO₄ + Cu.' },
      { q: 'Aluminium is extracted by electrolysis rather than by heating with carbon because:', a: ['Aluminium is more reactive than carbon', 'Carbon is too expensive', 'Aluminium ore is a liquid', 'Electrolysis is cheaper for every metal'], why: 'Carbon can only reduce oxides of metals below it in the reactivity series.' },
      { q: 'Rusting of iron needs:', a: ['Both oxygen (air) and water', 'Oxygen only', 'Water only', 'Carbon dioxide only'], why: 'Nails kept in dry air or in boiled water (no air) do not rust.' },
      { q: 'Galvanising protects iron by coating it with:', a: ['Zinc', 'Tin', 'Copper', 'Paint'], why: 'Zinc is more reactive, so it corrodes instead of the iron even if the coating is scratched (sacrificial protection).' },
      { q: 'The purpose of limestone in the blast furnace is to:', a: ['Remove sandy impurities as slag', 'Reduce the iron ore', 'Provide heat', 'Act as a catalyst'], why: 'Limestone gives calcium oxide, which reacts with silicon dioxide to form slag.' },
      { q: 'An alloy is:', a: ['A mixture of a metal with another element', 'A pure metal', 'A compound of two non-metals', 'An ore'], why: 'Brass (copper and zinc) and steel (iron and carbon) are alloys. Alloys are usually harder than the pure metals.' },
      { q: 'Which metal reacts with cold water to give hydrogen and an alkaline solution?', a: ['Sodium', 'Copper', 'Zinc', 'Lead'], why: '2Na + 2H₂O → 2NaOH + H₂. Zinc and iron react only with steam; copper does not react.' },
      { q: 'Cryolite is used in the extraction of aluminium to:', a: ['Lower the melting point of the electrolyte', 'Reduce the aluminium oxide', 'Make the anodes', 'Absorb oxygen'], why: 'Aluminium oxide melts at over 2000 °C. Dissolving it in molten cryolite lets electrolysis run at about 950 °C, saving energy.' },
      { q: 'Metals are good conductors of heat and electricity because they have:', a: ['Delocalised electrons', 'Strong covalent bonds', 'Ions free in solution', 'Small atoms'], why: 'The mobile electrons carry charge and transfer energy through the metal.' },
    ],
  },
  {
    id: 'ch-nonmetals',
    n: 9,
    group: 'elements',
    icon: 'air',
    diagram: 'gas-preparation',
    ask: 'How is ammonia made in the Haber process?',
    title: 'Non-metals, Air and Water',
    short: 'Non-metals, Air and Water',
    focus: 'Hydrogen, oxygen, nitrogen and ammonia, sulphur, chlorine, carbon, air and water',
    vr: {
      title: 'The Haber Process: Nitrogen, Hydrogen and Ammonia',
      subtitle: 'N₂ + 3H₂ ⇌ 2NH₃, shown as molecules.',
      fr: { title: 'Le procédé Haber : diazote, dihydrogène et ammoniac', subtitle: 'N₂ + 3H₂ ⇌ 2NH₃, représenté par des molécules.' },
      parts: [
        part(
          'n2',
          { name: 'Nitrogen, N₂', tag: 'Triple bond', list: 'Nitrogen molecule', title: 'Nitrogen (N₂)', desc: 'Nitrogen makes up about 78% of the air. Its two atoms are held by a very strong triple bond, which is why nitrogen is unreactive and the Haber process needs a catalyst.' },
          { name: 'Diazote, N₂', tag: 'Triple liaison', list: 'Molécule de diazote', title: 'Diazote (N₂)', desc: 'Le diazote représente environ 78 % de l’air. Sa triple liaison très solide le rend peu réactif : le procédé Haber a besoin d’un catalyseur.' }
        ),
        part(
          'h2',
          { name: 'Hydrogen, H₂', tag: 'From natural gas', list: 'Hydrogen molecules', title: 'Hydrogen (H₂)', desc: 'Hydrogen for the Haber process is made from natural gas (methane) and steam. Three molecules of hydrogen react with one of nitrogen.' },
          { name: 'Dihydrogène, H₂', tag: 'Du gaz naturel', list: 'Molécules de dihydrogène', title: 'Dihydrogène (H₂)', desc: 'Le dihydrogène est fabriqué à partir du méthane et de la vapeur d’eau. Trois molécules de H₂ réagissent avec une de N₂.' }
        ),
        part(
          'nh3',
          { name: 'Ammonia, NH₃', tag: 'Pyramidal', list: 'Ammonia molecules', title: 'Ammonia (NH₃)', desc: 'One nitrogen bonded to three hydrogens, with a lone pair on the nitrogen that gives a pyramid shape. Conditions: about 450 °C, 200 atmospheres and an iron catalyst. Ammonia is used to make fertilisers such as ammonium nitrate.' },
          { name: 'Ammoniac, NH₃', tag: 'Pyramidal', list: 'Molécules d’ammoniac', title: 'Ammoniac (NH₃)', desc: 'Un azote lié à trois hydrogènes, avec un doublet libre : forme pyramidale. Conditions : 450 °C, 200 atmosphères, catalyseur au fer. L’ammoniac sert à fabriquer des engrais.' }
        ),
      ],
    },
    quiz: [
      { q: 'About what percentage of dry air is oxygen?', a: ['21%', '78%', '1%', '0.04%'], why: 'Dry air is about 78% nitrogen, 21% oxygen, 0.9% argon and 0.04% carbon dioxide.' },
      { q: 'The test for oxygen is that it:', a: ['Relights a glowing splint', 'Gives a squeaky pop with a lighted splint', 'Turns limewater milky', 'Bleaches damp litmus paper'], why: 'Hydrogen pops, carbon dioxide turns limewater milky and chlorine bleaches damp litmus paper.' },
      { q: 'Ammonia gas turns damp red litmus paper:', a: ['Blue', 'Colourless', 'Yellow', 'Green'], why: 'Ammonia is the only common alkaline gas.' },
      { q: 'In the Contact process, sulphur dioxide is converted to sulphur trioxide using a catalyst of:', a: ['Vanadium(V) oxide', 'Iron', 'Nickel', 'Manganese(IV) oxide'], why: '2SO₂ + O₂ ⇌ 2SO₃ at about 450 °C with vanadium(V) oxide.' },
      { q: 'Chlorine is added to drinking water to:', a: ['Kill bacteria', 'Remove hardness', 'Add minerals', 'Improve the taste'], why: 'Chlorine kills disease-causing bacteria. Filtration removes solid particles first.' },
      { q: 'Acid rain is caused mainly by:', a: ['Sulphur dioxide and nitrogen oxides', 'Carbon monoxide', 'Methane', 'Ozone'], why: 'These gases dissolve in rainwater to form acids that damage buildings, forests and lakes.' },
      { q: 'Carbon monoxide is poisonous because it:', a: ['Combines with haemoglobin and stops it carrying oxygen', 'Is an acidic gas', 'Causes acid rain', 'Destroys the ozone layer'], why: 'It forms from incomplete combustion of fuels, so stoves and engines need good ventilation.' },
      { q: 'Which fertiliser contains the highest percentage of nitrogen? (N = 14, H = 1, O = 16, S = 32)', a: ['Ammonium nitrate, NH₄NO₃ (35%)', 'Ammonium sulphate, (NH₄)₂SO₄ (21%)', 'Potassium chloride, KCl (0%)', 'Calcium phosphate (0%)'], why: 'NH₄NO₃: 28 ÷ 80 × 100 = 35%. (NH₄)₂SO₄: 28 ÷ 132 × 100 = 21%.' },
      { q: 'Anhydrous copper(II) sulphate is used to test for water. The colour change is:', a: ['White to blue', 'Blue to white', 'Pink to blue', 'Yellow to green'], why: 'Anhydrous cobalt(II) chloride paper turns from blue to pink with water.' },
      { q: 'Carbon dioxide can be collected by downward delivery because it is:', a: ['Denser than air', 'Less dense than air', 'Very soluble in water', 'Coloured'], why: 'The dense gas sinks to the bottom of the gas jar and pushes the air out upwards.' },
    ],
  },
  {
    id: 'ch-organic',
    n: 10,
    group: 'elements',
    icon: 'polyline',
    diagram: 'organic-structures',
    ask: 'How do I tell an alkene from an alkane in the laboratory?',
    title: 'Organic Chemistry: Hydrocarbons, Alcohols and Polymers',
    short: 'Organic Chemistry',
    focus: 'Homologous series, alkanes, alkenes, alcohols, acids, esters, polymers, crude oil',
    vr: {
      title: 'Ethane, Ethene and Ethanol',
      subtitle: 'Ball-and-stick models of three two-carbon compounds and their functional groups.',
      fr: { title: 'Éthane, éthène et éthanol', subtitle: 'Modèles moléculaires de trois composés à deux carbones et de leurs groupes fonctionnels.' },
      parts: [
        part(
          'ethane',
          { name: 'Ethane, C₂H₆', tag: 'Alkane, saturated', list: 'Ethane molecule', title: 'Ethane (an Alkane)', desc: 'Only single C-C and C-H bonds: the molecule is saturated. Alkanes (CₙH₂ₙ₊₂) are fairly unreactive apart from burning and substitution with chlorine in sunlight.' },
          { name: 'Éthane, C₂H₆', tag: 'Alcane saturé', list: 'Molécule d’éthane', title: 'Éthane (un alcane)', desc: 'Uniquement des liaisons simples : molécule saturée. Les alcanes (CₙH₂ₙ₊₂) sont peu réactifs, sauf la combustion et la substitution par le chlore à la lumière.' }
        ),
        part(
          'ethene',
          { name: 'Ethene, C₂H₄', tag: 'Alkene, C=C', list: 'Ethene molecule', title: 'Ethene (an Alkene)', desc: 'Contains a carbon to carbon double bond, so it is unsaturated. Alkenes (CₙH₂ₙ) decolourise bromine water and add hydrogen, water or other molecules across the double bond. Ethene polymerises to poly(ethene).' },
          { name: 'Éthène, C₂H₄', tag: 'Alcène, C=C', list: 'Molécule d’éthène', title: 'Éthène (un alcène)', desc: 'Contient une double liaison carbone-carbone : il est insaturé. Les alcènes décolorent l’eau de brome et donnent des réactions d’addition. L’éthène se polymérise en polyéthène.' }
        ),
        part(
          'ethanol',
          { name: 'Ethanol, C₂H₅OH', tag: 'Alcohol, -OH', list: 'Ethanol molecule', title: 'Ethanol (an Alcohol)', desc: 'The -OH (hydroxyl) group makes it an alcohol. Ethanol is made by fermenting sugar with yeast or by adding steam to ethene. It burns cleanly and is oxidised to ethanoic acid (vinegar).' },
          { name: 'Éthanol, C₂H₅OH', tag: 'Alcool, -OH', list: 'Molécule d’éthanol', title: 'Éthanol (un alcool)', desc: 'Le groupe -OH (hydroxyle) en fait un alcool. L’éthanol est obtenu par fermentation du sucre ou par hydratation de l’éthène. Il s’oxyde en acide éthanoïque (vinaigre).' }
        ),
      ],
    },
    quiz: [
      { q: 'The general formula of the alkanes is:', a: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₁OH'], why: 'Methane CH₄, ethane C₂H₆, propane C₃H₈. Alkenes are CₙH₂ₙ and alcohols CₙH₂ₙ₊₁OH.' },
      { q: 'Bromine water is decolourised by:', a: ['Ethene', 'Ethane', 'Methane', 'Ethanoic acid'], why: 'The double bond in an alkene reacts with bromine in an addition reaction. Alkanes do not react.' },
      { q: 'Members of a homologous series have:', a: ['The same functional group and general formula', 'The same boiling point', 'The same molecular formula', 'The same number of carbon atoms'], why: 'Successive members differ by CH₂ and show a gradual change in physical properties.' },
      { q: 'Crude oil is separated into fractions by:', a: ['Fractional distillation', 'Cracking', 'Filtration', 'Chromatography'], why: 'The fractions have different boiling ranges and condense at different heights in the column.' },
      { q: 'Cracking long-chain alkanes produces:', a: ['Shorter alkanes and alkenes', 'Only longer alkanes', 'Alcohols', 'Carbon dioxide and water'], why: 'Cracking breaks large molecules into more useful petrol-sized alkanes and alkenes for plastics.' },
      { q: 'Ethanol is made by fermentation of glucose using:', a: ['Yeast', 'An iron catalyst', 'Concentrated sulphuric acid', 'Sunlight'], why: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂, at about 30 °C without air.' },
      { q: 'An alcohol reacts with a carboxylic acid to form:', a: ['An ester and water', 'An alkene', 'A salt and hydrogen', 'A polymer only'], why: 'Ethanol + ethanoic acid ⇌ ethyl ethanoate + water, with a little concentrated sulphuric acid as catalyst. Esters smell fruity.' },
      { q: 'Poly(ethene) is formed by:', a: ['Addition polymerisation of ethene', 'Condensation of ethanol', 'Fermentation', 'Cracking'], why: 'Many ethene molecules join together by opening their double bonds.' },
      { q: 'Compounds with the same molecular formula but different structures are called:', a: ['Isomers', 'Isotopes', 'Allotropes', 'Polymers'], why: 'Butane and methylpropane are both C₄H₁₀ but have different structural formulae.' },
      { q: 'Complete combustion of methane produces:', a: ['Carbon dioxide and water', 'Carbon monoxide and water', 'Carbon and hydrogen', 'Methanol'], why: 'CH₄ + 2O₂ → CO₂ + 2H₂O. Incomplete combustion, with too little oxygen, produces carbon monoxide and soot.' },
    ],
  },
  {
    id: 'ch-analysis',
    n: 11,
    group: 'elements',
    icon: 'biotech',
    diagram: 'cation-tests',
    ask: 'How do I tell iron(II) from iron(III) ions?',
    title: 'Qualitative Analysis: Testing for Ions and Gases',
    short: 'Qualitative Analysis',
    focus: 'Tests for cations, anions and gases; flame tests',
    vr: {
      title: 'Hydroxide Precipitates of Metal Ions',
      subtitle: 'The colour of the precipitate formed with sodium hydroxide solution identifies the metal ion.',
      fr: { title: 'Précipités d’hydroxydes métalliques', subtitle: 'La couleur du précipité formé avec la soude identifie l’ion métallique.' },
      parts: [
        part(
          'cu',
          { name: 'Copper(II), Cu²⁺', tag: 'Blue precipitate', list: 'Copper(II) hydroxide', title: 'Copper(II) Ions', desc: 'Sodium hydroxide gives a light blue precipitate of copper(II) hydroxide, insoluble in excess. With aqueous ammonia the precipitate dissolves in excess to give a deep blue solution.' },
          { name: 'Cuivre(II), Cu²⁺', tag: 'Précipité bleu', list: 'Hydroxyde de cuivre(II)', title: 'Ions cuivre(II)', desc: 'La soude donne un précipité bleu clair d’hydroxyde de cuivre(II), insoluble dans un excès. Avec l’ammoniac, il se dissout en excès en donnant une solution bleu foncé.' }
        ),
        part(
          'fe2',
          { name: 'Iron(II), Fe²⁺', tag: 'Green precipitate', list: 'Iron(II) hydroxide', title: 'Iron(II) Ions', desc: 'A green precipitate of iron(II) hydroxide, insoluble in excess. On standing in air it slowly turns brown at the surface as it is oxidised to iron(III).' },
          { name: 'Fer(II), Fe²⁺', tag: 'Précipité vert', list: 'Hydroxyde de fer(II)', title: 'Ions fer(II)', desc: 'Un précipité vert d’hydroxyde de fer(II), insoluble en excès. À l’air, il brunit lentement en surface en s’oxydant en fer(III).' }
        ),
        part(
          'fe3',
          { name: 'Iron(III), Fe³⁺', tag: 'Red-brown precipitate', list: 'Iron(III) hydroxide', title: 'Iron(III) Ions', desc: 'A red-brown precipitate of iron(III) hydroxide, insoluble in excess sodium hydroxide.' },
          { name: 'Fer(III), Fe³⁺', tag: 'Précipité rouille', list: 'Hydroxyde de fer(III)', title: 'Ions fer(III)', desc: 'Un précipité brun-rouge d’hydroxyde de fer(III), insoluble dans un excès de soude.' }
        ),
        part(
          'zn',
          { name: 'Zinc, Zn²⁺', tag: 'White, dissolves', list: 'Zinc hydroxide', title: 'Zinc Ions', desc: 'A white precipitate that dissolves in excess sodium hydroxide to give a colourless solution (zinc hydroxide is amphoteric). It also dissolves in excess ammonia, which distinguishes zinc from aluminium.' },
          { name: 'Zinc, Zn²⁺', tag: 'Blanc, se dissout', list: 'Hydroxyde de zinc', title: 'Ions zinc', desc: 'Un précipité blanc qui se dissout dans un excès de soude (hydroxyde amphotère). Il se dissout aussi dans un excès d’ammoniac, ce qui le distingue de l’aluminium.' }
        ),
      ],
    },
    quiz: [
      { q: 'Sodium hydroxide solution gives a green precipitate with a solution containing:', a: ['Iron(II) ions', 'Iron(III) ions', 'Copper(II) ions', 'Zinc ions'], why: 'Fe²⁺ green, Fe³⁺ red-brown, Cu²⁺ light blue, Zn²⁺ and Al³⁺ white.' },
      { q: 'A white precipitate forms with sodium hydroxide and dissolves in excess. With ammonia it forms a white precipitate that does NOT dissolve in excess. The ion is:', a: ['Aluminium', 'Zinc', 'Calcium', 'Copper(II)'], why: 'Both Al(OH)₃ and Zn(OH)₂ dissolve in excess NaOH, but only zinc hydroxide dissolves in excess ammonia.' },
      { q: 'Adding dilute nitric acid and silver nitrate to a solution gives a white precipitate. The solution contains:', a: ['Chloride ions', 'Iodide ions', 'Sulphate ions', 'Carbonate ions'], why: 'Silver chloride is white, silver bromide cream and silver iodide yellow.' },
      { q: 'The test for sulphate ions uses:', a: ['Dilute hydrochloric acid and barium chloride: white precipitate', 'Silver nitrate: yellow precipitate', 'Limewater: milky', 'Sodium hydroxide: blue precipitate'], why: 'Barium sulphate is an insoluble white precipitate. The acid removes carbonate ions, which would also give a precipitate.' },
      { q: 'A substance fizzes with dilute acid and the gas turns limewater milky. It contains:', a: ['Carbonate ions', 'Chloride ions', 'Nitrate ions', 'Sulphate ions'], why: 'Carbonates react with acids to give carbon dioxide.' },
      { q: 'A lilac flame in a flame test shows the presence of:', a: ['Potassium', 'Sodium', 'Calcium', 'Copper'], why: 'Sodium gives yellow, potassium lilac, calcium brick red and copper blue-green.' },
      { q: 'On warming with sodium hydroxide, a substance gives a gas that turns damp red litmus blue. The substance contains:', a: ['Ammonium ions', 'Nitrate ions only', 'Sodium ions', 'Chloride ions'], why: 'Ammonium salts release ammonia gas when warmed with alkali.' },
      { q: 'Which gas bleaches damp litmus paper?', a: ['Chlorine', 'Hydrogen', 'Oxygen', 'Ammonia'], why: 'Chlorine turns damp blue litmus red and then bleaches it white.' },
      { q: 'A flame test giving a persistent yellow-orange flame indicates:', a: ['Sodium', 'Potassium', 'Copper', 'Lithium'], why: 'Sodium is a common contaminant, so a bright yellow flame is easy to recognise.' },
      { q: 'Nitrate ions are identified by warming with sodium hydroxide and aluminium foil, which gives:', a: ['Ammonia gas', 'Nitrogen dioxide only', 'Hydrogen only', 'A white precipitate'], why: 'The nitrate is reduced to ammonia, which turns damp red litmus blue.' },
    ],
  },
];

// The topic material above, by its original id: 3D model descriptions, diagrams and
// quiz questions that the class topics in units.js draw from.
export const BANK = Object.fromEntries(OLD.map((u) => [u.id, u]));
