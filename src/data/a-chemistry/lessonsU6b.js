// A Level Chemistry lessons added for the 2026/2027 Upper Sixth physical
// chemistry scheme of work: weak bases and salt hydrolysis, buffer calculations,
// calculated titration curves, the solubility product and the common ion
// effect, cell diagrams, the Nernst equation, cell thermodynamics, Faraday's
// laws, kinetics experiments and mechanisms, and the Upper Sixth revision
// lessons. Original text written for this app.

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

export const LESSONS_U6B = [
  // ---------- Acid-base equilibria ----------
  L('ac-acid-3', 'ac-acidbase', '2.3', 'Weak bases, Kb and the hydrolysis of salts', 16, ['Acids and bases', 'Practical'], [
    'A **weak base** such as ammonia accepts protons from water only partly: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, with **Kb = [NH₄⁺][OH⁻] ÷ [NH₃]** and **pKb = −log Kb**. Assuming [NH₄⁺] = [OH⁻] and little ionisation, **[OH⁻] = √(Kb × c)**; then pOH = −log[OH⁻] and **pH = 14 − pOH** at 298 K. For any conjugate pair **Ka × Kb = Kw**, so **pKa + pKb = 14**: the weaker the acid, the stronger its conjugate base.',
    '**Kw depends on temperature.** The ionisation of water is endothermic, so Kw rises with temperature: 1.0 × 10⁻¹⁴ mol² dm⁻⁶ at 25 °C but about 5.5 × 10⁻¹⁴ at 50 °C, when pure water has pH 6.63. The water is still **neutral**, because [H⁺] still equals [OH⁻]; only the pH value of neutrality has changed.',
    '**Salt hydrolysis**: the ions of some salts react with water and change the pH:\n- salt of a **strong acid and a strong base** (NaCl, KNO₃): neither ion reacts, so the solution is **neutral**\n- salt of a **weak acid and a strong base** (CH₃COONa, Na₂CO₃): the anion takes H⁺ from water, CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻, so the solution is **alkaline**\n- salt of a **strong acid and a weak base** (NH₄Cl, (NH₄)₂SO₄): the cation gives H⁺ to water, NH₄⁺ ⇌ NH₃ + H⁺, so the solution is **acidic**; this is why ammonium fertilisers make soils more acidic\n- salt of a weak acid and a weak base (CH₃COONH₄): the pH depends on the relative sizes of Ka and Kb.',
    'Practical: a **pH meter** is calibrated with buffer solutions of pH 4.00 and 7.00, rinsing the electrode with distilled water between solutions. Diluting a **strong acid** tenfold raises its pH by **1 unit**; diluting a **weak acid** tenfold raises it by only about **0.5 unit**, because [H⁺] = √(Ka × c) and a larger fraction of the acid ionises as it is diluted.',
  ], 'ac-salt-hydrolysis', 'For a salt, ask which ion comes from a weak partner: that ion reacts with water.',
  ['A solution of ammonium chloride is:', ['acidic, because NH₄⁺ donates protons to water', 'neutral', 'alkaline, because Cl⁻ accepts protons', 'alkaline, because NH₄⁺ releases OH⁻'], 'NH₄⁺ is the conjugate acid of a weak base.'],
  [['Kb', 'The base dissociation constant, [BH⁺][OH⁻] ÷ [B].'], ['pKb', '−log Kb; the smaller it is, the stronger the base.'], ['Salt hydrolysis', 'Reaction of the ions of a salt with water, changing the pH.']],
  [
    { q: 'Calculate the pH of 0.10 mol dm⁻³ ammonia (Kb = 1.8 × 10⁻⁵ mol dm⁻³) at 298 K.', steps: ['[OH⁻] = √(Kb × c) = √(1.8 × 10⁻⁵ × 0.10) = **1.34 × 10⁻³ mol dm⁻³**.', 'pOH = −log(1.34 × 10⁻³) = **2.87**.', 'pH = 14.00 − 2.87 = **11.13**.'] },
    { q: 'Calculate the pH of 0.10 mol dm⁻³ sodium ethanoate. Ka(CH₃COOH) = 1.74 × 10⁻⁵ mol dm⁻³; Kw = 1.0 × 10⁻¹⁴ mol² dm⁻⁶.', steps: ['Kb(CH₃COO⁻) = Kw ÷ Ka = 1.0 × 10⁻¹⁴ ÷ 1.74 × 10⁻⁵ = **5.75 × 10⁻¹⁰ mol dm⁻³**.', '[OH⁻] = √(5.75 × 10⁻¹⁰ × 0.10) = **7.58 × 10⁻⁶ mol dm⁻³**, so pOH = 5.12.', 'pH = 14.00 − 5.12 = **8.88**: alkaline, as expected for the salt of a weak acid.'] },
  ]),

  L('ac-acid-4', 'ac-acidbase', '2.4', 'Buffer calculations and finding Ka by half-neutralisation', 17, ['Acids and bases', 'Buffers', 'Practical'], [
    'Taking logarithms of Ka = [H⁺][A⁻] ÷ [HA] gives the **Henderson-Hasselbalch equation**, **pH = pKa + log([A⁻] ÷ [HA])**. Both species are in the same volume, so **mole ratios** can replace concentration ratios. A buffer works best when [A⁻] and [HA] are about equal (pH within about 1 unit of pKa), so choose a weak acid whose pKa is close to the pH wanted.',
    'Adding a small amount of strong acid or alkali to a buffer: work in **moles**. Added H⁺ turns an equal number of moles of A⁻ into HA; added OH⁻ turns HA into A⁻. Then put the new mole ratio into the equation. The **buffer capacity**, the amount of acid or alkali it can absorb, is greater when both concentrations are larger. Diluting a buffer with water hardly changes its pH, because the ratio stays the same.',
    'A **basic buffer** such as ammonia with ammonium chloride holds the pH near 9 to 10. Use pKa of the ammonium ion, 14.00 − 4.75 = 9.25, in **pH = 9.25 + log([NH₃] ÷ [NH₄⁺])**.',
    'Practicals:\n- **testing a buffer**: mix equal volumes of 0.10 mol dm⁻³ ethanoic acid and 0.10 mol dm⁻³ sodium ethanoate; add 1 cm³ of 0.10 mol dm⁻³ HCl, then of NaOH, to this buffer and to distilled water, reading the pH each time; the water changes by several units, the buffer by a few hundredths\n- **Ka of ethanoic acid by half-neutralisation**: titrate 25.0 cm³ of the acid with NaOH (phenolphthalein) to find the titre V; add exactly V ÷ 2 of the NaOH to a fresh 25.0 cm³ of acid; the mixture contains equal amounts of HA and A⁻, so its measured **pH = pKa**.',
  ], 'ac-buffer-test', 'Buffer sums: change the moles first, then put the new ratio into pH = pKa + log([A⁻] ÷ [HA]).',
  ['At half-neutralisation of a weak acid, the pH equals:', ['pKa', '7', 'pKw', '14 − pKa'], '[HA] = [A⁻], so the log term is zero.'],
  [['Henderson-Hasselbalch equation', 'pH = pKa + log([A⁻] ÷ [HA]).'], ['Buffer capacity', 'The amount of acid or alkali a buffer can absorb with little change in pH.'], ['Half-neutralisation', 'The point at which half of a weak acid has been neutralised, so that pH = pKa.']],
  [
    { q: 'A buffer contains 0.10 mol of ethanoic acid and 0.10 mol of sodium ethanoate in 1.00 dm³ (pKa = 4.76). Find the pH after adding 0.010 mol of HCl.', steps: ['H⁺ + CH₃COO⁻ → CH₃COOH: ethanoate falls to **0.09 mol** and ethanoic acid rises to **0.11 mol**.', 'pH = 4.76 + log(0.09 ÷ 0.11) = 4.76 − 0.09 = **4.67**.', 'The same acid in 1.00 dm³ of water gives [H⁺] = 0.010 mol dm⁻³, **pH 2.0**: a fall of 5 units instead of 0.09.'] },
    { q: 'A half-neutralised solution of a weak acid has pH 3.75. Find Ka.', steps: ['At half-neutralisation pH = pKa, so **pKa = 3.75**.', 'Ka = antilog(−3.75) = **1.8 × 10⁻⁴ mol dm⁻³** (the value for methanoic acid).'] },
  ]),

  L('ac-acid-5', 'ac-acidbase', '2.5', 'Calculating a titration curve: weak acid with strong base', 17, ['Acids and bases', 'Titration', 'Practical'], [
    'Every point on a pH curve can be calculated. For 25.0 cm³ of 0.100 mol dm⁻³ ethanoic acid titrated with 0.100 mol dm⁻³ NaOH (Ka = 1.74 × 10⁻⁵ mol dm⁻³):\n- **at the start**: weak acid alone, [H⁺] = √(Ka × c), pH **2.88**\n- **before equivalence**: a buffer of HA and A⁻, pH = pKa + log(n(A⁻) ÷ n(HA)); half-way, at 12.5 cm³, pH = pKa = **4.76**\n- **at equivalence** (25.0 cm³): only sodium ethanoate, 0.0500 mol dm⁻³, which hydrolyses: pH **8.73**\n- **after equivalence**: excess OH⁻ decides the pH; at 30.0 cm³, [OH⁻] = 0.000500 mol ÷ 0.0550 dm³ = 9.1 × 10⁻³ mol dm⁻³, pH **11.96**.',
    'The steep section (here about pH 7 to 11) is where the indicator must change colour. **Phenolphthalein** (8.3 to 10.0) changes inside it; **methyl orange** (3.1 to 4.4) would change during the buffer region, far too early. The **volume at equivalence** depends only on the amounts of acid and base, not on their strengths: 25.0 cm³ of 0.100 mol dm⁻³ HCl and 25.0 cm³ of 0.100 mol dm⁻³ ethanoic acid each need 25.0 cm³ of 0.100 mol dm⁻³ NaOH.',
    'Practical: in a **potentiometric titration** a pH meter, or a pH probe with a data logger, replaces the indicator. Add the alkali 1 cm³ at a time, then 0.1 to 0.2 cm³ at a time near the end point, stirring and reading the pH after each addition. Plot pH against volume: the equivalence point is the middle of the steepest part, and the pH at half that volume gives pKa. The method also works for coloured or cloudy solutions in which an indicator cannot be seen.',
    'A **diprotic** acid or base gives **two** steep sections, one for each proton. Sodium carbonate titrated with HCl shows CO₃²⁻ → HCO₃⁻ near pH 8.3 (phenolphthalein) and then HCO₃⁻ → CO₂ + H₂O near pH 4 (methyl orange), the second needing the same volume of acid again.',
  ], 'ac-weak-titration', 'Four regions, four methods: √(Ka × c), the buffer equation, salt hydrolysis, then excess OH⁻.',
  ['At the equivalence point of ethanoic acid with NaOH, the pH is above 7 because:', ['the ethanoate ions react with water to form OH⁻', 'excess NaOH is present', 'ethanoic acid is a strong acid', 'sodium ions are acidic'], 'Salt hydrolysis.'],
  [['Potentiometric titration', 'A titration followed with a pH meter instead of an indicator.'], ['End point', 'The volume at which the indicator changes colour; it should match the equivalence point.'], ['Diprotic acid', 'An acid that can donate two protons per molecule.']],
  [
    { q: 'Calculate the pH after 20.0 cm³ of 0.100 mol dm⁻³ NaOH has been added to 25.0 cm³ of 0.100 mol dm⁻³ ethanoic acid (pKa = 4.76).', steps: ['n(OH⁻) added = 0.00200 mol, forming **0.00200 mol of CH₃COO⁻**.', 'n(CH₃COOH) left = 0.00250 − 0.00200 = **0.00050 mol**.', 'pH = 4.76 + log(0.00200 ÷ 0.00050) = 4.76 + 0.60 = **5.36**.'] },
  ]),

  // ---------- Solubility product ----------
  L('ac-sol-1', 'ac-solubility', '3.1', 'Solubility product: expressions and calculations', 16, ['Equilibrium', 'Ksp', 'Practical'], [
    'In a **saturated** solution of a sparingly soluble ionic solid, the solid is in dynamic equilibrium with its ions. For PbI₂(s) ⇌ Pb²⁺(aq) + 2I⁻(aq), the **solubility product** is **Ksp = [Pb²⁺][I⁻]²**: each concentration is raised to the power of its coefficient, and the solid does not appear. Ksp is constant at a given temperature. Values at 298 K:\n- AgCl: Ksp = [Ag⁺][Cl⁻] = 1.8 × 10⁻¹⁰ mol² dm⁻⁶\n- BaSO₄: Ksp = [Ba²⁺][SO₄²⁻] = 1.1 × 10⁻¹⁰ mol² dm⁻⁶\n- AgI: Ksp = [Ag⁺][I⁻] = 8.3 × 10⁻¹⁷ mol² dm⁻⁶\n- PbI₂: Ksp = [Pb²⁺][I⁻]² = 7.1 × 10⁻⁹ mol³ dm⁻⁹.',
    '**From solubility to Ksp and back.** If the molar solubility is s mol dm⁻³:\n- for AB salts (AgCl, BaSO₄): Ksp = s², so s = √Ksp\n- for AB₂ or A₂B salts (PbI₂, Ca(OH)₂, Ag₂CrO₄): Ksp = s × (2s)² = **4s³**, so s = ∛(Ksp ÷ 4).\nTo convert g dm⁻³ into mol dm⁻³, divide by the molar mass. Ksp values can be compared directly only for salts of the same type; otherwise compare the calculated solubilities.',
    'Practical: **Ksp of calcium hydroxide**. Shake solid Ca(OH)₂ with distilled water, leave it to settle at a steady temperature and filter; the filtrate must be clear. Titrate 25.0 cm³ portions with standard hydrochloric acid. The titre gives [OH⁻]; then [Ca²⁺] = ½[OH⁻] and **Ksp = [Ca²⁺][OH⁻]²**. Keep the temperature constant: unusually, calcium hydroxide is **less** soluble in hot water than in cold.',
    'Very small Ksp values have practical uses. Barium ions are toxic, yet a suspension of **barium sulfate** is swallowed as a "barium meal" to show the gut on X-rays: so little dissolves that the body does not absorb harmful amounts of Ba²⁺.',
  ], 'ac-ksp-expressions', 'Write the equilibrium first: the coefficients become the powers, and they also multiply s.',
  ['The Ksp expression for silver chromate, Ag₂CrO₄, is:', ['[Ag⁺]²[CrO₄²⁻]', '[Ag⁺][CrO₄²⁻]', '[2Ag⁺][CrO₄²⁻]', '[Ag₂CrO₄]'], 'Two silver ions per formula unit.'],
  [['Saturated solution', 'A solution in equilibrium with undissolved solute.'], ['Molar solubility', 'The number of moles of solute that dissolve in 1 dm³ of saturated solution.'], ['Solubility product', 'Ksp, the product of the ion concentrations in a saturated solution, each raised to the power of its coefficient.']],
  [
    { q: 'Ksp of AgCl is 1.8 × 10⁻¹⁰ mol² dm⁻⁶ at 298 K. Find its solubility in mol dm⁻³ and in g dm⁻³ (M = 143.5 g mol⁻¹).', steps: ['Ksp = s², so s = √(1.8 × 10⁻¹⁰) = **1.34 × 10⁻⁵ mol dm⁻³**.', 'Mass = 1.34 × 10⁻⁵ × 143.5 = **1.9 × 10⁻³ g dm⁻³**.'] },
    { q: '25.0 cm³ of saturated calcium hydroxide solution needs 22.0 cm³ of 0.050 mol dm⁻³ HCl. Find Ksp.', steps: ['n(HCl) = 0.0220 × 0.050 = 1.10 × 10⁻³ mol = n(OH⁻) in 25.0 cm³.', '[OH⁻] = 1.10 × 10⁻³ ÷ 0.0250 = **0.0440 mol dm⁻³**, so [Ca²⁺] = **0.0220 mol dm⁻³**.', 'Ksp = 0.0220 × (0.0440)² = **4.3 × 10⁻⁵ mol³ dm⁻⁹**.'] },
  ]),

  L('ac-sol-2', 'ac-solubility', '3.2', 'The common ion effect and predicting precipitation', 16, ['Equilibrium', 'Ksp', 'Practical'], [
    'The **common ion effect**: a sparingly soluble salt is **less soluble** in a solution that already contains one of its ions. In 0.10 mol dm⁻³ NaCl, [Cl⁻] stays at about 0.10 mol dm⁻³, so the solubility of AgCl becomes s = Ksp ÷ 0.10 = 1.8 × 10⁻⁹ mol dm⁻³, about 7000 times less than in pure water. This is Le Chatelier’s principle: extra Cl⁻ pushes AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq) to the left.',
    '**Predicting precipitation**: calculate the **ionic product** (IP), written like Ksp but using the concentrations present **after mixing**:\n- IP greater than Ksp: the solution is supersaturated and a **precipitate forms** until IP falls to Ksp\n- IP equal to Ksp: the solution is just saturated\n- IP less than Ksp: **no precipitate**.\nMixing dilutes both solutions: equal volumes halve each concentration.',
    '**Selective precipitation**: the least soluble salt precipitates first. Adding silver nitrate drop by drop to a solution 0.010 mol dm⁻³ in both Cl⁻ and I⁻ precipitates yellow **AgI** (Ksp 8.3 × 10⁻¹⁷) once [Ag⁺] passes 8.3 × 10⁻¹⁵ mol dm⁻³, long before white AgCl starts at 1.8 × 10⁻⁸ mol dm⁻³. The same idea separates metal ions in qualitative analysis. In soap making, sodium chloride is added to **salt out** the soap: the extra Na⁺ lowers its solubility.',
    'Practical demonstration: add concentrated hydrochloric acid drop by drop to a **saturated sodium chloride** solution. White crystals of NaCl appear, because the extra Cl⁻ raises the ionic product [Na⁺][Cl⁻] above its saturation value. Wear eye protection and work in a fume cupboard: concentrated HCl is corrosive and gives off fumes.',
  ], 'ac-precipitation', 'Dilute first, then compare the ionic product with Ksp.',
  ['Equal volumes of 2.0 × 10⁻⁴ mol dm⁻³ AgNO₃ and 2.0 × 10⁻⁴ mol dm⁻³ NaCl are mixed (Ksp of AgCl 1.8 × 10⁻¹⁰ mol² dm⁻⁶). A precipitate:', ['forms, because the ionic product 1.0 × 10⁻⁸ exceeds Ksp', 'does not form', 'forms only when heated', 'forms only of sodium nitrate'], 'Each concentration halves to 1.0 × 10⁻⁴ mol dm⁻³.'],
  [['Common ion effect', 'The fall in solubility of a salt in a solution that already contains one of its ions.'], ['Ionic product', 'The product of the ion concentrations actually present, written like the Ksp expression.'], ['Selective precipitation', 'Precipitating one ion before another by using their different Ksp values.']],
  [
    { q: 'Will a precipitate form when 10 cm³ of 1.0 × 10⁻⁵ mol dm⁻³ AgNO₃ is mixed with 10 cm³ of 1.0 × 10⁻⁵ mol dm⁻³ NaCl? Ksp(AgCl) = 1.8 × 10⁻¹⁰ mol² dm⁻⁶.', steps: ['After mixing, [Ag⁺] = [Cl⁻] = **5.0 × 10⁻⁶ mol dm⁻³**.', 'IP = (5.0 × 10⁻⁶)² = **2.5 × 10⁻¹¹ mol² dm⁻⁶**.', 'IP is less than Ksp, so **no precipitate forms**.'] },
    { q: 'Find the solubility of PbI₂ (Ksp 7.1 × 10⁻⁹ mol³ dm⁻⁹) in 0.10 mol dm⁻³ KI.', steps: ['[I⁻] ≈ 0.10 mol dm⁻³ (the iodide from PbI₂ is negligible).', 'Ksp = s × (0.10)², so s = 7.1 × 10⁻⁹ ÷ 0.010 = **7.1 × 10⁻⁷ mol dm⁻³**.', 'In pure water s = 1.2 × 10⁻³ mol dm⁻³, so the common ion lowers it about **1700 times**.'] },
  ]),

  // ---------- Electrochemistry ----------
  L('ac-redox-3', 'ac-redox', '4.3', 'Cell diagrams, measuring E° and ranking reducing power', 16, ['Electrochemistry', 'Practical'], [
    'A **cell diagram** describes a cell in one line: **Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)**. A single line | is a **phase boundary**; the double line || is the **salt bridge**. By convention the **oxidation** half-cell (the negative electrode) is written on the **left** and the **reduction** half-cell on the **right**, with the electrodes on the outside. Species in the same phase are separated by a comma and need a platinum electrode: Pt(s) | Fe²⁺(aq), Fe³⁺(aq). Then **E°cell = E°(right) − E°(left)**.',
    'The **standard hydrogen electrode** is written Pt(s) | H₂(g) | H⁺(aq). To measure a standard electrode potential, connect the half-cell to a SHE through a salt bridge and a **high-resistance voltmeter**, so that almost no current flows and the full e.m.f. is read. Standard conditions are 298 K, 100 kPa for gases and 1.00 mol dm⁻³ for ions. Because the SHE is awkward to use, a **secondary reference electrode** of known potential, such as the calomel electrode, is often used instead.',
    'E° values are **not** multiplied when a half-equation is multiplied: E° is a property of the electrode, not of the amount reacting. To find the overall reaction, reverse the half-equation with the more negative E°, multiply so that the electrons cancel, and add.\nLimits of E° predictions: a positive E°cell shows that a reaction is feasible, but it may be **too slow** to observe because of a high activation energy, and concentrations that are not standard change the potentials (the Nernst equation).',
    'Practical: join pairs of metals (Mg, Zn, Fe, Pb, Cu), each dipping into a 1.0 mol dm⁻³ solution of its own ions, with a salt bridge of filter paper soaked in saturated KNO₃, and read the voltages; or place each metal in solutions of the other metals’ ions and record which are displaced. Both give the same order of **reducing power**: Mg > Zn > Fe > Pb > Cu. A Daniell cell built this way reads close to 1.10 V.',
  ], 'ac-cell-diagram', 'Right minus left: E°cell = E°(right) − E°(left), with reduction on the right.',
  ['In the cell Mg(s) | Mg²⁺(aq) || Ag⁺(aq) | Ag(s), E°cell is (Mg²⁺/Mg −2.37 V; Ag⁺/Ag +0.80 V):', ['+3.17 V', '+1.57 V', '−3.17 V', '+3.97 V'], '0.80 − (−2.37); E° is not doubled for 2Ag⁺.'],
  [['Cell diagram', 'A shorthand one-line description of an electrochemical cell.'], ['Phase boundary', 'The surface between two phases, shown by a single vertical line.'], ['High-resistance voltmeter', 'A voltmeter that draws almost no current, so it reads the cell e.m.f.']],
  [
    { q: 'Write the overall equation and E°cell for Mg(s) | Mg²⁺(aq) || Ag⁺(aq) | Ag(s).', steps: ['Left (oxidation): Mg → Mg²⁺ + 2e⁻. Right (reduction): Ag⁺ + e⁻ → Ag, doubled so that the electrons cancel.', 'Overall: **Mg + 2Ag⁺ → Mg²⁺ + 2Ag**.', 'E°cell = E°(right) − E°(left) = 0.80 − (−2.37) = **+3.17 V** (not doubled).'] },
  ]),

  L('ac-electro-1', 'ac-electro', '7.1', 'The Nernst equation: cells away from standard conditions', 17, ['Electrochemistry', 'Practical'], [
    'Electrode potentials change with concentration. For a half-cell **Ox + ze⁻ ⇌ Red**, the **Nernst equation** at 298 K is **E = E° + (0.059 ÷ z) log([Ox] ÷ [Red])**, where z is the number of electrons in the half-equation. Its general form is E = E° + (RT ÷ zF) ln([Ox] ÷ [Red]); at 298 K, 2.303RT ÷ F = 0.059 V. Pure solids and liquids are left out of the ratio.',
    'For a **metal in a solution of its ions**, Mᶻ⁺ + ze⁻ ⇌ M, the equation becomes **E = E° + (0.059 ÷ z) log[Mᶻ⁺]**. Diluting the ions makes E **less positive**: the equilibrium shifts to the left, releasing electrons. For Cu²⁺/Cu (z = 2), E falls by 0.0295 V for every tenfold dilution: 0.34 V at 1.0 mol dm⁻³, 0.31 V at 0.10 and 0.28 V at 0.010 mol dm⁻³. Raising [Ox] makes an oxidising agent stronger; this is why manganate(VII) is used in strongly acidic solution.',
    'A **concentration cell** has the same half-cell on both sides at different concentrations. Cu(s) | Cu²⁺(0.010 mol dm⁻³) || Cu²⁺(1.0 mol dm⁻³) | Cu(s) has E°cell = 0, yet its e.m.f. is 0.0295 × 2 = **0.059 V**; current flows until the two concentrations become equal. In the same way, a working cell’s e.m.f. falls as it discharges and its concentrations change.',
    'Practical: set up Zn(s) | Zn²⁺(1.0 mol dm⁻³) || Cu²⁺(aq) | Cu(s) with copper(II) sulfate at 1.0, 0.10, 0.010 and 0.0010 mol dm⁻³, made by serial dilution. Plot the cell e.m.f. against log[Cu²⁺]: a straight line of gradient close to **0.030 V** confirms the Nernst equation for a two-electron change.',
  ], 'ac-nernst-plot', 'Dilute the oxidised form and E goes down; concentrate it and E goes up.',
  ['Diluting the solution in a Cu²⁺/Cu half-cell makes its electrode potential:', ['less positive', 'more positive', 'unchanged', 'exactly zero'], 'E = E° + 0.0295 log[Cu²⁺].'],
  [['Nernst equation', 'E = E° + (0.059 ÷ z) log([Ox] ÷ [Red]) at 298 K.'], ['Concentration cell', 'A cell of two identical half-cells at different concentrations.'], ['Non-standard conditions', 'Concentrations, pressures or temperatures different from the standard values.']],
  [
    { q: 'Calculate the e.m.f. of Zn(s) | Zn²⁺(1.0 mol dm⁻³) || Cu²⁺(0.010 mol dm⁻³) | Cu(s). E°: Zn²⁺/Zn −0.76 V; Cu²⁺/Cu +0.34 V.', steps: ['E(Cu²⁺/Cu) = 0.34 + (0.059 ÷ 2) log(0.010) = 0.34 + 0.0295 × (−2) = **0.281 V**.', 'E(Zn²⁺/Zn) = **−0.76 V** (standard).', 'E(cell) = 0.281 − (−0.76) = **1.04 V**, less than the standard 1.10 V.'] },
    { q: 'Find E for Fe³⁺/Fe²⁺ (E° = +0.77 V) when [Fe³⁺] = 0.10 mol dm⁻³ and [Fe²⁺] = 1.0 mol dm⁻³.', steps: ['z = 1: E = 0.77 + 0.059 log(0.10 ÷ 1.0).', 'E = 0.77 − 0.059 = **0.71 V**.'] },
  ]),

  L('ac-electro-2', 'ac-electro', '7.2', 'Cell e.m.f., Gibbs free energy and equilibrium constants', 16, ['Electrochemistry', 'Thermodynamics'], [
    'The electrical work a cell can do equals the fall in Gibbs free energy: **ΔG° = −zFE°cell**, where z is the number of moles of electrons transferred in the equation and **F = 96 500 C mol⁻¹**, the Faraday constant. The answer is in J mol⁻¹; divide by 1000 for kJ mol⁻¹. For the Daniell cell (z = 2, E° = +1.10 V): ΔG° = −2 × 96 500 × 1.10 = **−212 kJ mol⁻¹**.',
    'Since also ΔG° = −RT ln K, **ln K = zFE° ÷ RT**, or at 298 K **log K = zE° ÷ 0.059**. So:\n- E°cell positive, ΔG° negative, K greater than 1: feasible\n- E°cell zero, ΔG° zero, K equal to 1\n- E°cell negative, ΔG° positive, K less than 1.\nEven E° = +0.30 V with z = 2 gives K of about 10¹⁰, so a reaction with E°cell above about +0.3 V goes essentially to completion.',
    'The **temperature coefficient** of a cell links it to entropy: **ΔS° = zF × (dE°/dT)**, and then **ΔH° = ΔG° + TΔS°**. Measuring E° at several temperatures therefore gives all three thermodynamic quantities for the cell reaction. A cell whose e.m.f. falls as it warms has a negative ΔS°.',
    'Limits: like E°cell, ΔG° and K tell us whether a reaction is feasible and how far it goes, not **how fast** it goes. A cell also delivers less than its e.m.f. once current flows, because of its internal resistance.',
  ], 'ac-ecell-dg-k', 'Positive E°, negative ΔG°, K greater than 1: three ways of saying the same thing.',
  ['A cell reaction with E°cell = +0.50 V must have:', ['ΔG° negative and K greater than 1', 'ΔG° positive and K less than 1', 'ΔG° equal to zero', 'K equal to 1'], 'ΔG° = −zFE°.'],
  [['Faraday constant', 'The charge on one mole of electrons, 96 500 C mol⁻¹.'], ['Temperature coefficient', 'The change in a cell’s e.m.f. per kelvin, dE°/dT.']],
  [
    { q: 'Calculate ΔG° and K at 298 K for Zn + Cu²⁺ → Zn²⁺ + Cu (E°cell = +1.10 V).', steps: ['ΔG° = −zFE° = −2 × 96 500 × 1.10 = **−2.12 × 10⁵ J mol⁻¹ = −212 kJ mol⁻¹**.', 'ln K = −ΔG° ÷ RT = 212 300 ÷ (8.31 × 298) = **85.7**.', 'K = e raised to 85.7 ≈ **1.6 × 10³⁷**: the reaction goes to completion.'] },
    { q: 'For a cell with z = 2, E° falls by 5.0 × 10⁻⁴ V for each 1 K rise. Find ΔS°.', steps: ['dE°/dT = **−5.0 × 10⁻⁴ V K⁻¹**.', 'ΔS° = zF × dE°/dT = 2 × 96 500 × (−5.0 × 10⁻⁴) = **−96.5 J K⁻¹ mol⁻¹**.'] },
  ]),

  L('ac-electro-3', 'ac-electro', '7.3', 'Faraday’s laws of electrolysis', 17, ['Electrochemistry', 'Practical'], [
    'In electrolysis, the amount of product depends on the **charge** passed: **Q = It** (coulombs = amperes × seconds). One mole of electrons carries **F = 96 500 C**, so moles of electrons = Q ÷ F. The Faraday constant is the Avogadro constant times the charge on one electron: **F = L × e**, about 6.02 × 10²³ × 1.60 × 10⁻¹⁹ C.',
    '**Faraday’s first law**: the mass of a substance liberated at an electrode is proportional to the quantity of electricity passed. **Faraday’s second law**: the same quantity of electricity liberates amounts of different substances in inverse proportion to the charges on their ions; 1 mol of electrons deposits 1 mol of Ag (from Ag⁺), ½ mol of Cu (from Cu²⁺) and ⅓ mol of Al (from Al³⁺). Cells joined in **series** carry the same current, so the same charge passes through each.',
    'Method for calculations:\n- Q = I × t, with t in seconds\n- moles of electrons = Q ÷ 96 500\n- moles of product from the electrode half-equation (Cu²⁺ + 2e⁻ → Cu: divide by 2; 4OH⁻ → O₂ + 2H₂O + 4e⁻: divide by 4)\n- mass = moles × M, or gas volume = moles × 22.4 dm³ at s.t.p. (24.0 dm³ at room temperature and pressure).',
    'Practical: **finding the Faraday constant**. Clean, dry and weigh two copper electrodes; electrolyse copper(II) sulfate solution at a steady current of about 0.2 A, kept constant with a rheostat and ammeter, for a measured time; wash the cathode in water and then propanone, let it dry and reweigh it. The cathode gains copper and the anode loses about the same mass. F = Q ÷ (2 × moles of Cu deposited), and L = F ÷ e. The same laws govern copper refining, electroplating, anodising aluminium and the extraction of aluminium and sodium.',
  ], 'ac-electrolysis-copper', 'Charge first (Q = It), then moles of electrons, then the half-equation ratio.',
  ['The charge needed to deposit 1 mol of copper from Cu²⁺ ions is:', ['193 000 C', '96 500 C', '48 250 C', '289 500 C'], 'Two moles of electrons.'],
  [['Faraday’s first law', 'The mass liberated is proportional to the charge passed.'], ['Faraday’s second law', 'For the same charge, the moles liberated are inversely proportional to the charge on the ion.'], ['Coulomb', 'The charge passed by a current of 1 A in 1 s.']],
  [
    { q: 'A current of 0.50 A is passed through copper(II) sulfate solution for 30 minutes. Find the mass of copper deposited (Cu = 63.5).', steps: ['Q = 0.50 × 1800 = **900 C**; moles of electrons = 900 ÷ 96 500 = **9.33 × 10⁻³ mol**.', 'Cu²⁺ + 2e⁻ → Cu: moles of Cu = **4.66 × 10⁻³ mol**.', 'Mass = 4.66 × 10⁻³ × 63.5 = **0.296 g**.'] },
    { q: 'In a class experiment, 0.200 A for 40.0 minutes deposits 0.158 g of copper. Calculate F and the Avogadro constant (e = 1.60 × 10⁻¹⁹ C).', steps: ['Q = 0.200 × 2400 = **480 C**; moles of Cu = 0.158 ÷ 63.5 = 2.49 × 10⁻³ mol.', 'Moles of electrons = 2 × 2.49 × 10⁻³ = 4.98 × 10⁻³ mol, so **F = 480 ÷ 4.98 × 10⁻³ = 9.64 × 10⁴ C mol⁻¹**.', 'L = F ÷ e = 9.64 × 10⁴ ÷ 1.60 × 10⁻¹⁹ = **6.0 × 10²³ mol⁻¹**.'] },
  ]),

  // ---------- Kinetics ----------
  L('ac-kinetic-4', 'ac-kinetics', '8.4', 'Kinetics experiments and deducing mechanisms', 18, ['Kinetics', 'Practical'], [
    'Two experimental approaches:\n- **initial rates**: run the reaction several times with different starting concentrations and measure the rate at the very start, often with a **clock reaction** (the time t for a fixed small amount of product to form, so rate ∝ 1/t)\n- **continuous monitoring**: follow one reaction mixture over time by colorimetry, gas volume, conductivity or **sampling and titrating**.\nIn the **isolation method**, every reactant except one is in large excess, so only that one’s concentration changes noticeably and its order can be found on its own (a pseudo-order).',
    'Practical: the **acid-catalysed hydrolysis of methyl ethanoate**, CH₃COOCH₃ + H₂O → CH₃COOH + CH₃OH. At intervals, pipette 5 cm³ of the mixture into ice-cold water to **quench** it and titrate with NaOH. The titre Vt measures the acid catalyst plus the ethanoic acid formed; after a long time the final titre is V∞. **(V∞ − Vt) is proportional to the ester left.** A straight line of ln(V∞ − Vt) against time, or a constant half-life, shows the reaction is **first order** in the ester; water is in large excess, so it is pseudo-first order.',
    'Deducing mechanisms: the rate equation contains only the species in the **rate-determining step** and any steps before it.\n- **iodination of propanone** in acid, CH₃COCH₃ + I₂ → CH₃COCH₂I + HI: rate = k[CH₃COCH₃][H⁺], **zero order in I₂**, so iodine reacts only after the slow step, and H⁺ acts as a catalyst in it\n- **hydrolysis of 2-bromo-2-methylpropane**: rate = k[(CH₃)₃CBr], so the slow step is ionisation to a carbocation (SN1); for bromoethane, rate = k[CH₃CH₂Br][OH⁻], one step involving both species (SN2).\nA proposed mechanism must add up to the overall equation and agree with the rate equation.',
    'Practical: **temperature and the Arrhenius equation**. Mix sodium thiosulfate solution and dilute HCl in a flask over a cross drawn on paper at five temperatures between about 20 °C and 60 °C, and time how long the cross takes to disappear: S₂O₃²⁻ + 2H⁺ → S + SO₂ + H₂O. Since rate ∝ 1/t, plot **ln(1/t) against 1/T** with T in kelvin: the gradient is −Ea/R. Work in a well-ventilated room, because sulfur dioxide is released.',
  ], 'ac-arrhenius-plot', 'Only the species up to and including the slow step appear in the rate equation.',
  ['The iodination of propanone is zero order in iodine. This shows that:', ['iodine is not involved in the rate-determining step', 'iodine is a catalyst', 'the reaction does not need iodine', 'iodine reacts in the slowest step'], 'It reacts in a fast step after the slow one.'],
  [['Clock reaction', 'A reaction timed until a sudden visible change, giving an initial rate.'], ['Isolation method', 'Using a large excess of all reactants but one to find the order in that one.'], ['Quenching', 'Stopping the reaction in a sample, for example by cooling or diluting it.'], ['Pseudo-first order', 'First order in practice because the other reactants are in large excess.']],
  [
    { q: 'In the hydrolysis of methyl ethanoate, (V∞ − Vt) is 30.0 cm³ at 0 min, 15.0 cm³ at 25 min and 7.5 cm³ at 50 min. Find the order and k.', steps: ['(V∞ − Vt) halves every **25 min**: a constant half-life.', 'So the reaction is **first order** in the ester.', 'k = 0.693 ÷ 25 = **0.028 min⁻¹**.'] },
    { q: 'The cross disappears in 80 s at 293 K and in 16 s at 323 K. Estimate Ea.', steps: ['ln(1/t) is **−4.38** at 293 K and **−2.77** at 323 K; 1/T is **3.413 × 10⁻³** and **3.096 × 10⁻³ K⁻¹**.', 'Gradient = (−2.77 − (−4.38)) ÷ ((3.096 − 3.413) × 10⁻³) = 1.61 ÷ (−3.17 × 10⁻⁴) = **−5.08 × 10³ K**.', 'Ea = −gradient × R = 5.08 × 10³ × 8.31 = **4.2 × 10⁴ J mol⁻¹, about 42 kJ mol⁻¹**.'] },
  ]),

  // ---------- Upper Sixth revision ----------
  L('ac-u6-formulae', 'ac-u6-papers', '14.1', 'The physical chemistry formula matrix', 14, ['Examination'], [
    'Equilibria and acids:\n- Kc from equilibrium concentrations; Kp from partial pressures, with p(A) = x(A) × p(total)\n- pH = −log[H⁺]; Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K; pH + pOH = 14\n- weak acid: [H⁺] = √(Ka × c); weak base: [OH⁻] = √(Kb × c); Ka × Kb = Kw\n- buffer: pH = pKa + log([A⁻] ÷ [HA])\n- solubility: AB salts s = √Ksp; AB₂ salts s = ∛(Ksp ÷ 4).',
    'Electrochemistry:\n- E°cell = E°(right) − E°(left) = E°(reduction) − E°(oxidation)\n- Nernst: E = E° + (0.059 ÷ z) log([Ox] ÷ [Red]) at 298 K\n- ΔG° = −zFE°; ΔG° = −RT ln K; ΔS° = zF(dE°/dT)\n- Q = It; moles of electrons = Q ÷ F; F = 96 500 C mol⁻¹ = L × e.',
    'Energetics and kinetics:\n- ΔG = ΔH − TΔS, with ΔS in kJ K⁻¹ mol⁻¹ when ΔH is in kJ mol⁻¹\n- rate = k[A]ᵐ[B]ⁿ; first-order half-life t½ = 0.693 ÷ k\n- straight lines: [A] against t (zero order), ln[A] against t (first order), 1/[A] against t (second order)\n- Arrhenius: ln k = ln A − Ea ÷ RT; the gradient of ln k against 1/T is −Ea ÷ R; ln(k₂ ÷ k₁) = (Ea ÷ R)(1/T₁ − 1/T₂).',
    'The commonest lost marks: log used where ln is needed, or the reverse; temperature in °C instead of K; J and kJ mixed; concentrations not recalculated after mixing; E° doubled when a half-equation is doubled; pH given to too many decimal places (two is usual); and the units of K, Ksp and k left out.',
  ], 'ac-formula-matrix', 'Write the formula, then the numbers substituted, then the answer with its unit.',
  ['In the Arrhenius plot of ln k against 1/T, the gradient equals:', ['−Ea ÷ R', 'Ea ÷ R', '−Ea × R', 'ln A'], 'ln k = ln A − Ea/RT.'],
  [['Formula matrix', 'A one-page summary of the formulae used across a subject.']],
  [
    { q: 'Hydrochloric acid and ethanoic acid (Ka 1.74 × 10⁻⁵ mol dm⁻³) are each diluted from 0.10 to 0.0010 mol dm⁻³. Compare the changes in pH.', steps: ['HCl: pH 1.00 → **3.00**, a rise of 2 units.', 'Ethanoic acid: √(1.74 × 10⁻⁵ × 0.10) gives pH 2.88; √(1.74 × 10⁻⁵ × 0.0010) = 1.32 × 10⁻⁴ gives pH **3.88**, a rise of only 1 unit.', 'The weak acid’s pH changes by half as much, because more of it ionises as it is diluted.'] },
  ]),

  L('ac-u6-paper1', 'ac-u6-papers', '14.2', 'Paper 1 sprint: buffers, solubility, cells and orders', 13, ['Examination'], [
    'Paper 1 is **multiple choice** and lasts 1½ hours. Physical chemistry items are short calculations or questions about graphs. Work the answer out before reading the options, watch units and powers of ten, and use estimates to rule options out: √(1.8 × 10⁻¹⁰) must be about 10⁻⁵, not 10⁻¹⁰.',
    'Quick checks that save time:\n- a buffer with equal [HA] and [A⁻] has pH = pKa, and diluting it barely changes the pH\n- for AB salts, a smaller Ksp means less soluble; for salts of different types, compare s, not Ksp\n- doubling [A] multiplies the rate by 2 if first order in A, by 4 if second order and by 1 if zero order\n- a positive E°cell means a negative ΔG° and K greater than 1.',
    'Graph items: identify the order from the shape of concentration-time or rate-concentration graphs; locate the half-neutralisation and equivalence points on titration curves; choose the indicator whose range lies within the vertical section; read Ea from the gradient of an Arrhenius plot.',
    'Practise in timed sets of 10 items in 18 minutes, then mark them and write down, for every wrong answer, the idea you missed. Return to those ideas in the lessons before the next set.',
  ], 'ac-gce-0715', 'Estimate the size of the answer before choosing an option.',
  ['Diluting an ethanoate buffer with an equal volume of water makes its pH:', ['stay almost the same', 'fall by 1', 'rise by 1', 'become 7'], 'The ratio [A⁻] ÷ [HA] is unchanged.'],
  [['Distractor', 'A wrong option written to catch a common mistake.']],
  [
    { q: 'Item: the solubility of BaSO₄ (Ksp 1.1 × 10⁻¹⁰ mol² dm⁻⁶) is about: A 1.0 × 10⁻⁵, B 1.1 × 10⁻¹⁰, C 5.5 × 10⁻¹¹, D 1.2 × 10⁻²⁰ mol dm⁻³.', steps: ['s = √Ksp = √(1.1 × 10⁻¹⁰) ≈ 1.05 × 10⁻⁵ mol dm⁻³.', '**Answer A.** B is Ksp itself, C halves it and D squares it: each option catches a common slip.'] },
  ]),

  L('ac-u6-paper2', 'ac-u6-papers', '14.3', 'Paper 2 clinic: Nernst, Arrhenius and kinetics data', 15, ['Examination'], [
    'Paper 2 lasts 3 hours and has six compulsory structured questions: two physical, two inorganic and two organic. Physical chemistry questions usually combine a definition, a calculation in several steps and an explanation. Marks are awarded for each correct step, so set out the method even if the final answer goes wrong.',
    'Data-handling routine for kinetics:\n- tabulate the derived quantity (ln[A], 1/[A], 1/T, ln k) with units and sensible significant figures\n- choose scales that use more than half the grid, and label each axis with the quantity and its unit\n- draw the best straight line and find the gradient from a large triangle, not from two rows of the table\n- state the conclusion: the order, k with its unit, or Ea in kJ mol⁻¹.',
    'Electrochemistry routine: write both half-equations with their E° values; decide which is reduced (the more positive); give E°cell = E°(right) − E°(left); if concentrations are not standard, apply the Nernst equation to each half-cell first; then link to ΔG° = −zFE° if asked. State the direction of electron flow in the external circuit and the polarity of each electrode.',
    'Derivations often asked: the Henderson-Hasselbalch equation from Ka; the first-order half-life from ln([A]₀ ÷ [A]) = kt (put [A] = [A]₀ ÷ 2 to get t½ = ln 2 ÷ k); and log K = zE° ÷ 0.059 from ΔG° = −zFE° and ΔG° = −RT ln K.',
  ], 'ac-first-order', 'Take a gradient from a large triangle on the best-fit line, never from two table rows.',
  ['From ln([A]₀ ÷ [A]) = kt, the half-life of a first-order reaction is:', ['ln 2 ÷ k', 'k ÷ ln 2', '1 ÷ k[A]₀', '[A]₀ ÷ 2k'], 'Put [A] = [A]₀ ÷ 2.'],
  [['Best-fit line', 'The straight line that passes as close as possible to all the plotted points.']],
  [
    { q: 'Derive the expression for the half-life of a first-order reaction.', steps: ['Integrated rate law: **ln([A]₀ ÷ [A]) = kt**.', 'At t = t½, [A] = [A]₀ ÷ 2, so ln 2 = k × t½.', '**t½ = ln 2 ÷ k = 0.693 ÷ k**, independent of [A]₀.'] },
    { q: 'For the cell Pt(s) | Fe²⁺(1.0 mol dm⁻³), Fe³⁺(0.010 mol dm⁻³) || Ag⁺(1.0 mol dm⁻³) | Ag(s), with E° Fe³⁺/Fe²⁺ +0.77 V and Ag⁺/Ag +0.80 V, find the e.m.f.', steps: ['E(Fe³⁺/Fe²⁺) = 0.77 + 0.059 log(0.010 ÷ 1.0) = 0.77 − 0.118 = **0.652 V**.', 'E(cell) = E(right) − E(left) = 0.80 − 0.652 = **+0.15 V**.', 'Electrons flow through the wire from the platinum electrode to the silver electrode, which is positive.'] },
  ]),
];
