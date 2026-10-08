// Form 4 Chemistry lessons added from the 2026/2027 harmonised scheme of work:
// naming hydrocarbons, isomers, and the reactions and tests of alkanes and
// alkenes. They sit beside the MINESEC Form 4 lessons. Original text written for
// this app. **double asterisks** mark key terms.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Paper 1 & 2',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_F4 = [
  L(
    'ch-naming-1',
    'ch-organic',
    '8.2',
    'Naming alkanes and alkenes, isomers, and how to test for a double bond',
    14,
    ['Organic', 'Practical'],
    [
      'Organic compounds are named by the **IUPAC** system. The first part of the name tells the number of carbon atoms in the longest chain:\n- 1 carbon: **meth-**\n- 2: **eth-**\n- 3: **prop-**\n- 4: **but-**\n- 5: **pent-**\n- 6: **hex-**\nThe ending tells the family: **-ane** for alkanes (only single bonds) and **-ene** for alkenes (one C=C double bond).',
      'So CH₄ is methane, C₂H₆ ethane, C₃H₈ propane, C₄H₁₀ butane and C₅H₁₂ pentane. For alkenes from four carbons on, a number shows where the double bond starts: **but-1-ene** has it between carbons 1 and 2, and **but-2-ene** between carbons 2 and 3. Number the chain from the end nearer the double bond.',
      '**Structural isomers** are compounds with the **same molecular formula** but **different structures**. Butane, C₄H₁₀, has two:\n- **butane**: a straight chain of four carbons\n- **2-methylpropane**: a chain of three carbons with a CH₃ branch (a **methyl** group) on carbon 2\nPentane, C₅H₁₂, has three isomers: pentane, 2-methylbutane and 2,2-dimethylpropane. Branched isomers have **lower boiling points**, because their molecules cannot pack as closely.',
      'To name a branched alkane:\n- find the **longest chain** and name it\n- name the branch (methyl for CH₃)\n- give the branch the **lowest possible number**\nFor example, a three-carbon chain with a methyl group on carbon 2 is 2-methylpropane.',
      'Reactions of **alkanes**: they are fairly unreactive, but they burn.\n- In plenty of air they burn completely: CH₄ + 2O₂ → CO₂ + 2H₂O.\n- In too little air, combustion is incomplete. It forms poisonous **carbon monoxide** and black **soot** (carbon). This is why a charcoal stove or generator must never be used in a closed room.\n- With chlorine or bromine they react only in **ultraviolet light** (sunlight), by **substitution**: a hydrogen atom is replaced by a halogen atom, CH₄ + Cl₂ → CH₃Cl + HCl.',
      '**Practical: testing for unsaturation.** Shake a little of each hydrocarbon with a few drops of **bromine water**:\n- an **alkene** turns it from **orange to colourless**, because bromine adds across the double bond\n- an **alkane** leaves it orange\nAcidified **potassium manganate(VII)** does the same job: an alkene turns it from **purple to colourless**, while an alkane leaves it purple.',
      '**Practical: models.** Build methane, ethane, propane and butane with a molecular model kit (or balls of clay and sticks). Each carbon has four bonds and each hydrogen one. Try to build a second molecule with four carbons: you will make 2-methylpropane.',
    ],
    'butane-isomers',
    'When drawing displayed formulae, check that **every carbon has exactly four bonds** and every hydrogen one. Count the atoms at the end to check the molecular formula.',
    ['Butane and 2-methylpropane are structural isomers because they have:', ['The same molecular formula but different structures', 'Different molecular formulae', 'The same structure', 'Different numbers of carbon atoms'], 'Both are C₄H₁₀; one has a straight chain and the other a branch.'],
    [
      ['IUPAC name', 'The systematic name of a compound, built from the length of the chain and the family ending.'],
      ['Structural isomers', 'Compounds with the same molecular formula but different structural formulae.'],
      ['Substitution reaction', 'A reaction in which one atom or group is replaced by another, as when chlorine replaces hydrogen in an alkane.'],
      ['Unsaturated', 'Having a C=C double bond, so it can undergo addition reactions.'],
      ['Incomplete combustion', 'Burning in too little oxygen, giving carbon monoxide and soot.'],
    ],
    [
      {
        q: 'Name CH₃CH₂CH₂CH₃ and draw its isomer.',
        steps: ['It has a chain of 4 carbons and only single bonds, so it is butane.', 'Its isomer has 3 carbons in the chain with a CH₃ on carbon 2: CH₃CH(CH₃)CH₃.', 'This isomer is 2-methylpropane; both are C₄H₁₀.'],
      },
      {
        q: 'Write the equation for the complete combustion of propane, C₃H₈.',
        steps: ['Products: carbon dioxide and water.', 'Balance carbon: 3CO₂. Balance hydrogen: 4H₂O.', 'Oxygen needed: 3 × 2 + 4 = 10 atoms, so 5O₂.', 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.'],
      },
    ]
  ),
];
