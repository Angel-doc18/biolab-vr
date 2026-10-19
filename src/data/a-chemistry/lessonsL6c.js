// A Level Chemistry lessons added for the 2026/2027 Lower Sixth organic
// chemistry scheme of work: stereoisomerism and polarimetry, alkanes in the
// laboratory, alkenes (preparation, electrophilic addition, oxidation and
// polymers), arenes (the structure of benzene and electrophilic substitution)
// and the review of organic routes. Original text written for this app.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Paper 1 and Paper 2',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_L6C = [
  // ---------- Stereoisomerism ----------
  L('ac-org1-5', 'ac-organic1', '11.2', 'Stereoisomerism: E/Z and optical isomers', 16, ['Organic chemistry', 'Practical'], [
    '**Stereoisomers** have the same structural formula but a different arrangement of atoms in space.\n**Geometric (E/Z) isomerism** arises from **restricted rotation** about a C=C bond, when **each** carbon of the double bond carries **two different groups**. Using the **Cahn-Ingold-Prelog priority rules**, give each group on each carbon a priority by **atomic number** of the first atom attached (higher atomic number, higher priority; if equal, look at the next atoms):\n- **Z** (zusammen, together): the two higher-priority groups are on the **same side**\n- **E** (entgegen, opposite): they are on **opposite sides**.\nFor simple cases, cis usually corresponds to Z and trans to E (cis-but-2-ene is (Z)-but-2-ene). E/Z works where cis/trans fails, such as when all four groups are different.',
    '**Optical isomerism** arises when a carbon atom carries **four different groups**: a **chiral centre** (asymmetric carbon). The molecule and its mirror image cannot be superimposed: they are **enantiomers**. Enantiomers have identical physical and chemical properties except that they rotate **plane-polarised light** by equal angles in **opposite** directions, and they may act differently in the body. A 50 : 50 mixture, a **racemic mixture**, is optically inactive. Examples: butan-2-ol, 2-hydroxypropanoic acid (lactic acid) and all amino acids except glycine.',
    'Practical: a **polarimeter** has a light source, a **polariser**, a tube of solution and a rotatable **analyser**; the angle through which the analyser must be turned to restore the light measures the rotation. A glucose solution rotates the plane to the right (**dextrorotatory**) and a fructose solution to the left (**laevorotatory**), which is why these sugars were once called dextrose and laevulose.',
  ], 'ac-optical', 'Z = same side (zusammen); a chiral centre has four different groups.',
  ['Which compound shows optical isomerism?', ['butan-2-ol, CH₃CH(OH)CH₂CH₃', 'propan-2-ol, CH₃CH(OH)CH₃', 'ethanol', 'propanone'], 'C2 carries H, OH, CH₃ and C₂H₅.'],
  [['Stereoisomers', 'Isomers with the same structure but a different arrangement in space.'], ['E/Z isomerism', 'Isomerism from restricted rotation about C=C, named by group priorities.'], ['Chiral centre', 'A carbon atom bonded to four different groups.'], ['Racemic mixture', 'An equal mixture of two enantiomers; optically inactive.']],
  [
    { q: 'Name the isomer of CH₃CBr=CHCH₃ in which the Br and the CH₃ on the other double-bond carbon are on the same side.', steps: ['Number from the end giving Br the lower number: Br is on C2, so the name is 2-bromobut-2-ene.', 'On C2: Br (atomic number 35) outranks CH₃ (carbon, 6). On C3: CH₃ outranks H.', '**The two higher-priority groups (Br and CH₃) are on the same side: (Z)-2-bromobut-2-ene.**'] },
  ]),

  // ---------- Alkanes in practice ----------
  L('ac-org1-6', 'ac-organic1', '11.6', 'Alkanes: naming, preparation and reactions in practice', 15, ['Organic chemistry', 'Practical'], [
    'Naming **branched alkanes**: find the longest chain; number from the end nearer the first branch; name and number each branch; list branches alphabetically with di-, tri- for repeats. Examples: CH₃CH(CH₃)CH₂CH₃ is **2-methylbutane**; C(CH₃)₄ is **2,2-dimethylpropane**; CH₃CH₂CH(CH₃)CH₂CH₂CH₃ is **3-methylhexane**. Branching lowers boiling points because molecules pack less closely, reducing London forces.',
    'Alkanes are unreactive (strong, non-polar σ bonds) but burn and undergo free-radical substitution. Combustion: for complete combustion CₙH₂ₙ₊₂ + (3n + 1)/2 O₂ → nCO₂ + (n + 1)H₂O. Gas volumes react in the ratio of moles (Avogadro): 10 cm³ of propane, C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, needs 50 cm³ of oxygen and gives 30 cm³ of carbon dioxide (with water condensed). Free-radical substitution gives a **mixture** of products, so it is a poor way to make a single pure halogenoalkane.',
    'Practical: **methane** is made in the laboratory by heating anhydrous **sodium ethanoate with soda lime** (sodium hydroxide and calcium oxide): **CH₃COONa + NaOH → CH₄ + Na₂CO₃**, a **decarboxylation** that removes CO₂ from the acid salt. The gas is collected over water; it burns with a clean blue flame and does not decolourise bromine water.',
  ], 'ac-alkane-reactions', 'Longest chain, lowest numbers, alphabetical branches.',
  ['The IUPAC name of (CH₃)₂CHCH₂CH₃ is:', ['2-methylbutane', '3-methylbutane', 'pentane', '2-ethylpropane'], 'Longest chain four carbons; methyl on carbon 2.'],
  [['Branched alkane', 'An alkane whose carbon chain has side branches.'], ['Decarboxylation', 'Removal of carbon dioxide from a carboxylic acid or its salt.'], ['Soda lime', 'A mixture of sodium hydroxide and calcium oxide.']],
  [
    { q: '20 cm³ of butane is burned in 200 cm³ of oxygen. Find the final gas volume at room temperature (water condensed).', steps: ['C₄H₁₀ + 6½O₂ → 4CO₂ + 5H₂O.', '**Oxygen used = 20 × 6.5 = 130 cm³; left over = 70 cm³.**', '**CO₂ formed = 20 × 4 = 80 cm³.**', '**Final volume = 70 + 80 = 150 cm³.**'] },
  ]),

  // ---------- Alkenes ----------
  L('ac-alkene-1', 'ac-alkenes', '13.2', 'Alkenes: preparation and electrophilic addition', 17, ['Organic chemistry', 'Practical'], [
    'The C=C double bond is one **σ bond** and one **π bond**, formed by sideways overlap of p orbitals above and below the plane. The π bond is weaker and more exposed, so alkenes are far more reactive than alkanes; it also prevents **rotation**, giving E/Z isomers. Naming: the chain is numbered to give the double bond the lowest number (but-1-ene, but-2-ene).\nPractical: **ethene** is made by **dehydrating ethanol**: heat with excess **concentrated sulfuric acid** at about 170 °C, or pass ethanol vapour over heated **aluminium oxide** (or porcelain); collect over water.',
    '**Electrophilic addition** reactions:\n- **hydrogen**, with a **nickel** catalyst at about 150 °C: alkanes (hardening vegetable oils into margarine)\n- **halogens**: dihalogenoalkanes; bromine is decolourised (the test for C=C)\n- **hydrogen halides**: halogenoalkanes\n- **steam**, with a phosphoric acid catalyst at about 300 °C and 60 atm: alcohols (industrial ethanol).',
    'Mechanism with HBr: the π electrons attack the δ+ hydrogen, the H–Br bond breaks heterolytically, and a **carbocation** forms; Br⁻ then attacks the positive carbon. With unsymmetrical alkenes, **Markovnikov’s rule**: hydrogen adds to the carbon that already has more hydrogens, because this route passes through the **more stable carbocation** (tertiary > secondary > primary, stabilised by the electron-releasing alkyl groups). So propene + HBr gives mainly **2-bromopropane**.',
  ], 'ac-markovnikov', 'π electrons attack; the more stable carbocation decides the product.',
  ['The major product of HBr with propene is:', ['2-bromopropane', '1-bromopropane', '1,2-dibromopropane', 'propane'], 'Via the more stable secondary carbocation.'],
  [['Electrophilic addition', 'Addition to C=C initiated by an electron-pair acceptor.'], ['Carbocation', 'An ion with a positively charged carbon atom.'], ['Markovnikov’s rule', 'H adds to the carbon of C=C that already has more hydrogens.'], ['Dehydration', 'Removal of water from a molecule.']],
  [
    { q: 'Draw out in words the mechanism of HBr adding to ethene.', steps: ['**A curly arrow goes from the C=C π bond to the H of H–Br; another from the H–Br bond to Br.**', '**This forms the CH₃CH₂⁺ carbocation and Br⁻.**', '**A curly arrow from a lone pair on Br⁻ to the positive carbon forms bromoethane.**'] },
  ]),

  L('ac-alkene-2', 'ac-alkenes', '13.3', 'Oxidation of alkenes and addition polymers', 16, ['Organic chemistry', 'Practical'], [
    'Oxidation with **potassium manganate(VII)**:\n- **cold, dilute** (acidified) KMnO₄: mild oxidation adds two –OH groups, forming a **diol** (ethene → ethane-1,2-diol); the **purple** colour disappears, a test for C=C\n- **hot, concentrated** acidified KMnO₄: harsh oxidation **breaks the double bond**: a =CH₂ end becomes CO₂ and water, a =CHR end becomes a carboxylic acid RCOOH, and a =CR₂ end becomes a ketone. Identifying the products reveals the position of the double bond (but-2-ene gives two molecules of ethanoic acid).',
    '**Addition polymerisation**: the π bonds open and many monomers join into a long saturated chain. Draw the **repeat unit** with the side groups and continuation bonds.\n- **low-density poly(ethene), LDPE**: made at very high pressure and about 200 °C with a trace of oxygen as a free-radical initiator; chains are **branched**, pack loosely; soft, used for bags and film\n- **high-density poly(ethene), HDPE**: made at low pressure with **Ziegler-Natta** catalysts; chains are **linear**, pack closely; stronger, higher melting, used for bottles, crates and pipes\n- **PVC**, poly(chloroethene): rigid pipes, window frames; with plasticisers, flexible cable insulation.',
    'Addition polymers are unreactive and **not biodegradable**, so waste plastics persist in drains, rivers and farmland; burning them releases toxic gases (HCl from PVC). Reduction, re-use and recycling are essential.',
  ], 'ac-polymers', 'Cold dilute KMnO₄ makes diols; hot concentrated breaks C=C.',
  ['Hot concentrated acidified KMnO₄ converts but-2-ene into:', ['two molecules of ethanoic acid', 'butane-2,3-diol', 'butanone', 'carbon dioxide only'], 'The C=C is cleaved.'],
  [['Addition polymerisation', 'Joining of unsaturated monomers into a long chain without loss of atoms.'], ['Repeat unit', 'The smallest part of a polymer that repeats.'], ['LDPE', 'Low-density, branched poly(ethene).'], ['HDPE', 'High-density, linear poly(ethene).']],
  [
    { q: 'Hot concentrated KMnO₄ oxidises an alkene C₄H₈ to propanoic acid and carbon dioxide. Identify the alkene.', steps: ['**CO₂ comes from a =CH₂ end.**', '**Propanoic acid, CH₃CH₂COOH, comes from a =CH–CH₂CH₃ end.**', '**The alkene is CH₂=CH–CH₂CH₃: but-1-ene.**'] },
  ]),

  // ---------- Arenes ----------
  L('ac-arene-1', 'ac-arenes', '14.1', 'The structure and stability of benzene', 15, ['Organic chemistry'], [
    '**Kekulé** proposed (1865) that benzene, C₆H₆, is a ring of alternating single and double bonds. The evidence contradicts this:\n- all six C–C bonds have the **same length, 0.139 nm**, between C–C (0.154 nm) and C=C (0.134 nm)\n- benzene does **not** decolourise bromine water and resists addition\n- its **enthalpy of hydrogenation** is −208 kJ mol⁻¹, while three C=C bonds (as in cyclohexene, −120 each) would give −360 kJ mol⁻¹: benzene is about **152 kJ mol⁻¹ more stable** than the Kekulé structure (the **delocalisation** or resonance energy).',
    'The **delocalised model**: each carbon is sp² hybridised, forming three σ bonds at 120° in a planar hexagon; the remaining p orbital on each carbon overlaps sideways with both neighbours, forming a continuous **ring of six delocalised π electrons** above and below the plane. It is drawn as a hexagon with a circle inside. Because addition would destroy this stable π system, benzene prefers **substitution**, which keeps the ring.',
    'Naming monosubstituted benzenes: **chlorobenzene** (C₆H₅Cl), **nitrobenzene** (C₆H₅NO₂), **methylbenzene** (C₆H₅CH₃), **phenol** (C₆H₅OH), **benzoic acid** (C₆H₅COOH), **phenylamine** (C₆H₅NH₂). Benzene is **carcinogenic**: schools use methylbenzene instead, always in a fume cupboard, away from flames.',
  ], 'ac-benzene-energy', 'Equal bonds and 152 kJ mol⁻¹ of extra stability: delocalised electrons.',
  ['The C–C bond length in benzene is:', ['between a single and a double bond (0.139 nm)', 'equal to a single bond', 'equal to a double bond', 'alternately long and short'], 'All six bonds are identical.'],
  [['Delocalisation', 'Spreading of π electrons over several atoms.'], ['Kekulé structure', 'A ring of alternating single and double bonds proposed for benzene.'], ['Resonance energy', 'The extra stability of benzene compared with the Kekulé structure.'], ['Arene', 'A hydrocarbon containing a benzene ring.']],
  [
    { q: 'Use enthalpies of hydrogenation to calculate the delocalisation energy of benzene: cyclohexene −120 kJ mol⁻¹; benzene −208 kJ mol⁻¹.', steps: ['Expected for three C=C: 3 × (−120) = **−360 kJ mol⁻¹.**', 'Actual: **−208 kJ mol⁻¹.**', 'Difference: 360 − 208 = **152 kJ mol⁻¹ more stable** than the Kekulé structure.'] },
  ]),

  L('ac-arene-2', 'ac-arenes', '14.2', 'Electrophilic substitution: nitration and halogenation', 16, ['Organic chemistry'], [
    'Benzene reacts by **electrophilic substitution**: an electrophile attacks the electron-rich ring, a hydrogen is replaced, and the delocalised system is restored. General mechanism:\n- the electrophile E⁺ is generated\n- a pair of π electrons from the ring forms a bond to E⁺, giving a positively charged intermediate in which the delocalisation is partly broken\n- the C–H bond breaks, its electrons return to the ring and H⁺ is lost, **restoring aromatic stability**.',
    '**Nitration**: benzene with a **nitrating mixture** of concentrated nitric and concentrated sulfuric acids at **below 55 °C** (higher temperatures give dinitrobenzene). Sulfuric acid generates the electrophile, the **nitronium ion**: HNO₃ + 2H₂SO₄ → **NO₂⁺** + H₃O⁺ + 2HSO₄⁻. Product: **nitrobenzene**, used to make dyes, drugs and explosives (via phenylamine).',
    '**Halogenation**: benzene with chlorine or bromine needs a **halogen carrier** (Lewis acid catalyst): **FeCl₃, AlCl₃, FeBr₃** or iron filings, at room temperature, without UV light. The catalyst polarises the halogen to make the electrophile: Cl₂ + FeCl₃ → **Cl⁺** + FeCl₄⁻; after substitution FeCl₄⁻ + H⁺ → FeCl₃ + HCl, regenerating the catalyst. Product: **chlorobenzene**. Compare: with UV light and no catalyst, methylbenzene is substituted on the CH₃ group by a free-radical mechanism instead.',
  ], 'ac-nitration', 'Make E⁺; ring attacks; lose H⁺; ring restored.',
  ['In the nitration of benzene, the electrophile is:', ['the nitronium ion, NO₂⁺', 'nitric acid', 'H⁺', 'HSO₄⁻'], 'Generated by concentrated sulfuric acid.'],
  [['Electrophilic substitution', 'Replacement of H on an aromatic ring by an electrophile.'], ['Nitronium ion', 'NO₂⁺, the electrophile in nitration.'], ['Halogen carrier', 'A Lewis acid catalyst such as FeCl₃ that polarises the halogen.'], ['Lewis acid', 'An electron-pair acceptor.']],
  [
    { q: 'Explain why benzene undergoes substitution rather than addition with bromine.', steps: ['**Addition would permanently destroy the delocalised π system and its 152 kJ mol⁻¹ of extra stability.**', '**Substitution replaces one H but restores the delocalised ring.**', '**So the substitution product is energetically favoured.**'] },
  ]),

  // ---------- Organic review ----------
  L('ac-l6-routes', 'ac-l6-papers', '15.3', 'Organic pathways: alkanes, alkenes and arenes', 15, ['Organic chemistry', 'Examination'], [
    'Key Lower Sixth conversions, with reagents and conditions:\n- alkane → halogenoalkane: Cl₂ or Br₂, **UV light** (free-radical substitution)\n- ethanol → ethene: concentrated H₂SO₄ at 170 °C, or Al₂O₃ heated (dehydration)\n- alkene → alkane: H₂, Ni catalyst, about 150 °C\n- alkene → dihalogenoalkane: Br₂ at room temperature\n- alkene → halogenoalkane: HBr (Markovnikov)\n- alkene → alcohol: steam, H₃PO₄ catalyst, 300 °C, 60 atm\n- alkene → diol: cold dilute KMnO₄\n- alkene → polymer: high pressure (LDPE) or Ziegler-Natta catalyst (HDPE)\n- benzene → nitrobenzene: conc. HNO₃ + conc. H₂SO₄, below 55 °C\n- benzene → chlorobenzene: Cl₂ with FeCl₃ or AlCl₃.',
    'In Paper 2, organic questions often ask for: the **type of reaction** (substitution, addition, elimination), the **mechanism** with curly arrows and partial charges, **reagents and conditions**, the **structure** of products, and **isomers** (structural, E/Z, optical).',
    'Practise by building a flow chart: start from ethane, ethene and benzene, and connect each product by an arrow labelled with the reagent and conditions. Then plan two-step syntheses, such as ethanol to 1,2-dibromoethane (dehydrate, then add bromine).',
  ], 'ac-organic-routes', 'Every arrow needs a reagent, conditions and a reaction type.',
  ['Which reagent and condition convert propene into propan-2-ol?', ['steam with a phosphoric acid catalyst at high temperature and pressure', 'Br₂ in UV light', 'H₂ with nickel', 'conc. HNO₃'], 'Hydration by electrophilic addition.'],
  [['Synthetic route', 'A sequence of reactions converting one compound into another.'], ['Reagent', 'A substance used to bring about a reaction.'], ['Conditions', 'Temperature, pressure, catalyst and solvent of a reaction.']],
  [
    { q: 'Plan a two-step synthesis of 1,2-dibromoethane from ethanol.', steps: ['**Step 1: dehydrate ethanol to ethene with concentrated H₂SO₄ at 170 °C (or heated Al₂O₃).**', '**Step 2: add bromine to ethene at room temperature: electrophilic addition gives CH₂BrCH₂Br.**'] },
  ]),
];
