// A Level Chemistry lessons added for the 2026/2027 Lower Sixth physical
// chemistry scheme of work: quantum numbers and orbitals, the gaseous state,
// colligative properties, integrated rate laws and mechanisms, entropy and
// Gibbs free energy, the reaction quotient, hydrogen halides and the uses of
// halogens, and the Lower Sixth examination drills. Original text written for
// this app. R = 8.31 J K⁻¹ mol⁻¹.

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

export const LESSONS_L6B = [
  // ---------- Atomic structure ----------
  L('ac-atom-4', 'ac-atoms', '2.4', 'Quantum numbers, orbitals and filling rules', 15, ['Atomic structure'], [
    'Each electron in an atom is described by four **quantum numbers**:\n- **principal quantum number, n** = 1, 2, 3...: the shell; it fixes the main energy level and the size of the orbital\n- **azimuthal (angular momentum) quantum number, l** = 0 to n − 1: the sub-shell and its shape; l = 0 is s, 1 is p, 2 is d, 3 is f\n- **magnetic quantum number, mₗ** = −l to +l: the orientation of the orbital; a sub-shell has 2l + 1 orbitals (one s, three p, five d, seven f)\n- **spin quantum number, mₛ** = +½ or −½.\nA shell n holds at most **2n²** electrons: 2, 8, 18, 32.',
    'Shapes: an **s orbital** is **spherical** around the nucleus; each **p orbital** is **dumbbell-shaped**, with two lobes either side of the nucleus and a node at the nucleus; the three p orbitals, pₓ, p_y and p_z, lie along three axes at right angles.',
    'Filling rules:\n- **Aufbau principle**: electrons fill orbitals of lowest energy first: 1s, 2s, 2p, 3s, 3p, **4s, 3d**, 4p\n- **Pauli exclusion principle**: no two electrons in an atom have the same set of four quantum numbers, so an orbital holds two electrons of **opposite spin**\n- **Hund’s rule**: orbitals of equal energy are filled **singly with parallel spins** before any pairing (N: 2p³ has three unpaired electrons).\nExceptions: Cr is [Ar]3d⁵4s¹ and Cu is [Ar]3d¹⁰4s¹ (half-full and full d sub-shells are especially stable). Practical: **flame tests** show emission when excited electrons fall back: Li crimson, Na yellow-orange, K lilac, Ca brick-red, Ba apple-green, Cu blue-green.',
  ], 'ac-orbital-shapes', 'n shell, l shape, mₗ orientation, mₛ spin; 2n² per shell.',
  ['How many orbitals are there in the 3d sub-shell?', ['5', '3', '1', '7'], 'l = 2, so mₗ = −2 to +2.'],
  [['Principal quantum number', 'n, giving the shell and main energy level.'], ['Azimuthal quantum number', 'l, giving the sub-shell and the orbital shape.'], ['Hund’s rule', 'Equal-energy orbitals are filled singly with parallel spins first.'], ['Pauli exclusion principle', 'No two electrons share all four quantum numbers.']],
  [
    { q: 'Give the four quantum numbers of a 3p electron, and the electronic configuration of phosphorus (Z = 15).', steps: ['**For a 3p electron: n = 3; l = 1; mₗ = −1, 0 or +1; mₛ = +½ or −½.**', '**P: 1s² 2s² 2p⁶ 3s² 3p³.**', '**By Hund’s rule the three 3p electrons occupy separate orbitals with parallel spins: three unpaired electrons.**'] },
  ]),

  // ---------- The gaseous state ----------
  L('ac-gas-1', 'ac-gases', '3.1', 'Gas laws, partial pressures and molar masses', 16, ['Gases', 'Practical'], [
    'The ideal gas laws: **Boyle** (pV constant at fixed T), **Charles** (V ∝ T in kelvin at fixed p) and **Avogadro** (equal volumes contain equal numbers of molecules at the same T and p) combine into **pV = nRT**, with p in Pa, V in m³, T in K and R = 8.31 J K⁻¹ mol⁻¹. Since n = m/M, **M = mRT ÷ pV**.',
    '**Dalton’s law of partial pressures**: in a mixture of gases that do not react, the total pressure is the **sum of the partial pressures**, and each **partial pressure = mole fraction × total pressure**. Gas collected over water contains water vapour, so p(gas) = p(total) − p(water vapour).\n**Graham’s law of diffusion**: the rate of diffusion of a gas is inversely proportional to the square root of its molar mass, **rate ∝ 1/√M**. In a tube with cotton wool soaked in concentrated ammonia at one end and hydrochloric acid at the other, the white ring of ammonium chloride forms **nearer the HCl end**, because NH₃ (M = 17) diffuses faster than HCl (M = 36.5).',
    'Practical: the **Victor Meyer method** finds the relative molecular mass of a volatile liquid. A known mass of liquid is dropped into a heated tube, where it vaporises and pushes out an **equal volume of air**, collected and measured at room temperature and pressure (for example in a gas syringe). Then M = mRT/(pV), using room temperature and pressure for the displaced air.',
  ], 'ac-gas-laws', 'pV = nRT; p(partial) = x × p(total); rate ∝ 1/√M.',
  ['In an NH₃/HCl diffusion tube, the ratio of distances travelled (NH₃ : HCl) is about:', ['1.47 : 1', '1 : 1.47', '2.15 : 1', '1 : 1'], '√(36.5 ÷ 17) = 1.47.'],
  [['Partial pressure', 'The pressure a gas in a mixture would exert alone in the same volume.'], ['Dalton’s law', 'Total pressure equals the sum of the partial pressures.'], ['Graham’s law', 'Rate of diffusion is inversely proportional to the square root of molar mass.'], ['Victor Meyer method', 'A method of finding Mr of a volatile liquid from the volume of air it displaces.']],
  [
    { q: '0.20 g of a volatile liquid displaces 60 cm³ of air measured at 300 K and 100 kPa. Find its Mr.', steps: ['n = pV/RT = (100 000 × 60 × 10⁻⁶) ÷ (8.31 × 300) = 6 ÷ 2493 = **2.41 × 10⁻³ mol.**', 'M = m/n = 0.20 ÷ 2.41 × 10⁻³ = **83 g mol⁻¹.**'] },
  ]),

  L('ac-gas-2', 'ac-gases', '3.2', 'Kinetic theory and real gases', 15, ['Gases'], [
    'The **kinetic theory** explains gas behaviour with a model of an **ideal gas**:\n- molecules are in constant, **random**, straight-line motion\n- the **volume of the molecules** is negligible compared with the volume of the container\n- there are **no intermolecular forces**\n- collisions are **perfectly elastic**\n- the **average kinetic energy** is proportional to the **absolute temperature**.\nPressure results from molecules colliding with the container walls.',
    '**Real gases** deviate from ideal behaviour, especially at **high pressure** (molecules are close, so their own volume matters) and **low temperature** (molecules move slowly, so attractions matter). The **compressibility factor Z = pV/nRT** is 1 for an ideal gas. Attractions make Z < 1 (CO₂ at moderate pressure); molecular volume makes Z > 1 at very high pressure. Gases behave most ideally at **low pressure and high temperature**, and the smallest, least polar molecules (He, H₂) are the most nearly ideal.',
    'The **van der Waals equation** corrects the ideal gas equation: **(p + an²/V²)(V − nb) = nRT**. The term **an²/V²** adds back the pressure "lost" through attractions (a is larger for more strongly attracting gases, such as NH₃); **nb** subtracts the volume occupied by the molecules themselves. Real gases can be **liquefied** by compression only below their **critical temperature** (31 °C for CO₂).',
  ], 'ac-real-gas', 'Ideal: no volume, no attractions. Real: deviate at high p and low T.',
  ['Real gases behave most like ideal gases at:', ['low pressure and high temperature', 'high pressure and low temperature', 'high pressure only', 'low temperature only'], 'Molecules far apart and moving fast.'],
  [['Ideal gas', 'A gas that obeys pV = nRT exactly.'], ['Compressibility factor', 'Z = pV/nRT; 1 for an ideal gas.'], ['van der Waals equation', 'An equation of state correcting for molecular volume and attractions.'], ['Critical temperature', 'The temperature above which a gas cannot be liquefied by pressure alone.']],
  [
    { q: 'Explain why ammonia deviates from ideal behaviour more than nitrogen at the same conditions.', steps: ['**Ammonia molecules are polar and form hydrogen bonds; nitrogen has only weak London forces.**', '**Stronger attractions reduce the force of collisions with the walls, so pV/nRT falls below 1.**', '**So ammonia has a larger van der Waals constant a and deviates more.**'] },
  ]),

  // ---------- Colligative properties ----------
  L('ac-phase-3', 'ac-phase', '7.3', 'Colligative properties', 16, ['Phase equilibria', 'Practical'], [
    '**Colligative properties** of a solution of a non-volatile solute depend on the **number of solute particles**, not on their identity:\n- **lowering of vapour pressure** (Raoult’s law: the solvent’s vapour pressure falls in proportion to the mole fraction of solute)\n- **elevation of boiling point**: **ΔTb = Kb × m**\n- **depression of freezing point**: **ΔTf = Kf × m**\n- **osmotic pressure**: **π = cRT** (or πV = nRT).\nHere m is the **molality** (moles of solute per kilogram of solvent); Kb and Kf are constants for the solvent: for water **Kb = 0.52** and **Kf = 1.86 K kg mol⁻¹**.',
    'These properties are used to find **relative molecular masses**: **Mr = (Kf × mass of solute × 1000) ÷ (ΔTf × mass of solvent in g)**. Solvents with large constants give larger, more accurate changes (camphor, about 40 K kg mol⁻¹). Ionic solutes give more particles: NaCl gives about twice the expected effect, which reveals dissociation.',
    'Practical: determine the freezing-point depression constant of a solid organic solvent (such as naphthalene). Melt a weighed mass of the pure solvent and record its **cooling curve** (temperature every 30 s) to find its freezing point; repeat with a weighed mass of a solute of known Mr; find ΔTf from the plateaus and calculate Kf. Applications: antifreeze, preserving food with salt and sugar, osmosis in cells and **reverse osmosis** to purify water.',
  ], 'ac-colligative', 'Count the particles: ΔT = K × molality.',
  ['A solution of 0.10 mol of urea in 1 kg of water freezes at about:', ['−0.186 °C', '−1.86 °C', '0 °C', '+0.186 °C'], 'ΔTf = 1.86 × 0.10.'],
  [['Colligative property', 'A property depending only on the number of solute particles.'], ['Molality', 'Moles of solute per kilogram of solvent.'], ['Osmotic pressure', 'The pressure needed to stop osmosis into a solution.'], ['Cooling curve', 'A graph of temperature against time as a substance cools.']],
  [
    { q: '2.00 g of a non-electrolyte in 50.0 g of water lowers the freezing point by 0.744 K. Find its Mr (Kf = 1.86 K kg mol⁻¹).', steps: ['Molality m = ΔTf/Kf = 0.744 ÷ 1.86 = **0.400 mol kg⁻¹.**', 'Moles = 0.400 × 0.0500 kg = **0.0200 mol.**', 'Mr = 2.00 ÷ 0.0200 = **100.**'] },
  ]),

  // ---------- Kinetics ----------
  L('ac-kinetic-3', 'ac-kinetics', '8.3', 'Integrated rate laws, the Arrhenius equation and mechanisms', 18, ['Kinetics', 'Practical'], [
    '**Integrated rate laws** link concentration and time:\n- **zero order**: [A] = [A]₀ − kt: a **straight line of [A] against t** (gradient −k); half-life t½ = [A]₀/2k, which **falls** as the reaction proceeds\n- **first order**: ln[A] = ln[A]₀ − kt: a straight line of **ln[A] against t** (gradient −k); **t½ = ln 2/k = 0.693/k, constant**\n- **second order**: 1/[A] = 1/[A]₀ + kt: a straight line of **1/[A] against t** (gradient k); t½ = 1/(k[A]₀), which **rises** as the reaction proceeds.\nPlot the data three ways: the straight line reveals the order.',
    'The **Arrhenius equation**, k = A e^(−Ea/RT), or **ln k = ln A − Ea/RT**: a graph of ln k against 1/T has gradient **−Ea/R**. With rate constants at two temperatures: **ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂)**. A rise of 10 K roughly doubles many rates near room temperature.',
    'A **mechanism** is the sequence of steps; the slowest is the **rate-determining step**, and only species in or before it appear in the rate equation. For 2NO₂ + F₂ → 2NO₂F with rate = k[NO₂][F₂]: step 1, NO₂ + F₂ → NO₂F + F (slow); step 2, NO₂ + F → NO₂F (fast). Practicals: the **iodine clock** (H₂O₂ + 2I⁻ + 2H⁺ → I₂ + 2H₂O, with a little thiosulfate and starch; the time to the blue-black colour gives the rate, rate ∝ 1/t); and the decomposition of H₂O₂ with **manganese(IV) oxide** catalyst, following the volume of oxygen.',
  ], 'ac-first-order', 'Straight line of [A], ln[A] or 1/[A] against t gives the order.',
  ['For a first-order reaction with k = 0.0231 min⁻¹, the half-life is:', ['30 min', '43 min', '0.016 min', '0.693 min'], '0.693 ÷ 0.0231.'],
  [['Integrated rate law', 'An equation giving concentration as a function of time.'], ['Half-life', 'The time for the concentration of a reactant to halve.'], ['Arrhenius equation', 'k = A e^(−Ea/RT), linking rate constant and temperature.'], ['Rate-determining step', 'The slowest step of a mechanism.']],
  [
    { q: 'A rate constant doubles when the temperature rises from 298 K to 308 K. Calculate Ea.', steps: ['ln(k₂/k₁) = ln 2 = **0.693.**', '1/T₁ − 1/T₂ = 1/298 − 1/308 = **1.09 × 10⁻⁴ K⁻¹.**', 'Ea = R × 0.693 ÷ 1.09 × 10⁻⁴ = 8.31 × 0.693 ÷ 1.09 × 10⁻⁴ ≈ **5.3 × 10⁴ J mol⁻¹ = 53 kJ mol⁻¹.**'] },
  ]),

  // ---------- Entropy and Gibbs ----------
  L('ac-entropy-1', 'ac-entropy', '6.1', 'Entropy', 15, ['Thermodynamics'], [
    '**Entropy (S)** measures the **dispersal of energy and matter**: the number of ways the particles and their energy can be arranged. It is measured in **J K⁻¹ mol⁻¹**; standard entropies S° (at 298 K, 100 kPa) are always positive.\nEntropy increases:\n- from **solid to liquid to gas** (gases have by far the highest entropies)\n- with **temperature**\n- when the number of moles of **gas** increases in a reaction\n- when a solid **dissolves** or gases **mix**\n- with more complex molecules.',
    'The entropy change of a reaction: **ΔS°(system) = ΣS°(products) − ΣS°(reactants)**. The **second law of thermodynamics**: in any spontaneous change, the **total entropy** of the system and its surroundings **increases**. An exothermic reaction gives heat to the surroundings, increasing their entropy: **ΔS(surroundings) = −ΔH/T**.',
    'This explains why some endothermic changes happen spontaneously: dissolving ammonium nitrate in water cools the solution (ΔH positive) but greatly increases the disorder of the ions, so the total entropy rises.',
  ], 'ac-entropy-states', 'Gas ≫ liquid > solid; more moles of gas, more entropy.',
  ['Which change has a positive entropy change?', ['CaCO₃(s) → CaO(s) + CO₂(g)', 'H₂O(g) → H₂O(l)', 'N₂(g) + 3H₂(g) → 2NH₃(g)', 'NaCl(aq) → NaCl(s)'], 'A gas is produced from a solid.'],
  [['Entropy', 'A measure of the dispersal of energy and matter, J K⁻¹ mol⁻¹.'], ['Second law of thermodynamics', 'The total entropy increases in a spontaneous change.'], ['Standard entropy', 'The entropy of one mole of a substance at 298 K and 100 kPa.']],
  [
    { q: 'Calculate ΔS° for CaCO₃(s) → CaO(s) + CO₂(g). S° / J K⁻¹ mol⁻¹: CaCO₃ 93, CaO 40, CO₂ 214.', steps: ['ΔS° = (40 + 214) − 93 = **+161 J K⁻¹ mol⁻¹.**', '**Positive, as expected: a gas is formed from a solid.**'] },
  ]),

  L('ac-entropy-2', 'ac-entropy', '6.2', 'Gibbs free energy and feasibility', 16, ['Thermodynamics'], [
    'The **Gibbs free energy change** combines enthalpy and entropy: **ΔG = ΔH − TΔS** (in kJ mol⁻¹, so convert ΔS from J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹ by dividing by 1000; T in kelvin). A reaction is **feasible** (thermodynamically possible) when **ΔG is negative** (or zero at equilibrium).',
    'The signs decide:\n- ΔH negative, ΔS positive: **always feasible**\n- ΔH positive, ΔS negative: **never feasible**\n- ΔH negative, ΔS negative: feasible at **low** temperatures\n- ΔH positive, ΔS positive: feasible at **high** temperatures, above **T = ΔH/ΔS**.\n"Feasible" does not mean fast: a reaction with negative ΔG may be extremely slow because of a high **activation energy** (kinetic stability), like diamond turning to graphite.',
    '**Extracting metals**: reducing a metal oxide with carbon becomes feasible above a certain temperature because the reaction producing CO (2C + O₂ → 2CO) has a large positive ΔS (more moles of gas), so its ΔG becomes more negative as T rises. This is why iron ore is reduced in the blast furnace at high temperature, while very reactive metals such as aluminium must be extracted by electrolysis.',
  ], 'ac-gibbs', 'ΔG = ΔH − TΔS; feasible when ΔG < 0.',
  ['For a reaction with ΔH = +50 kJ mol⁻¹ and ΔS = +100 J K⁻¹ mol⁻¹, it becomes feasible above:', ['500 K', '50 K', '0.5 K', '5000 K'], 'T = 50 ÷ 0.100.'],
  [['Gibbs free energy change', 'ΔG = ΔH − TΔS; negative for a feasible reaction.'], ['Feasible', 'Thermodynamically possible (ΔG ≤ 0).'], ['Kinetic stability', 'Slowness of a feasible reaction due to a high activation energy.']],
  [
    { q: 'For CaCO₃ → CaO + CO₂, ΔH = +178 kJ mol⁻¹ and ΔS = +161 J K⁻¹ mol⁻¹. Is it feasible at 298 K? Above what temperature is it feasible?', steps: ['At 298 K: ΔG = 178 − 298 × 0.161 = 178 − 48 = **+130 kJ mol⁻¹: not feasible.**', 'Feasible when T > ΔH/ΔS = 178 ÷ 0.161 = **about 1100 K (about 830 °C).**', '**This is why limestone must be strongly heated in a lime kiln.**'] },
  ]),

  // ---------- Equilibria ----------
  L('ac-equil-3', 'ac-equilibrium', '1.3', 'The reaction quotient and equilibrium experiments', 16, ['Equilibria', 'Practical'], [
    'The **reaction quotient, Q**, has the same form as Kc (or Kp) but uses the concentrations at **any moment**, not necessarily at equilibrium:\n- **Q < K**: too little product; the reaction moves **forward** until Q = K\n- **Q > K**: too much product; the reaction moves **backward**\n- **Q = K**: the system is at equilibrium.',
    'This puts **Le Chatelier’s principle** on a quantitative footing. Adding a reactant lowers Q below K, so the position shifts right until Q equals K again; K itself does **not** change. Changing the pressure changes Qp only when the numbers of moles of gas differ on each side. **Only temperature changes K**: for an exothermic forward reaction, K falls as temperature rises; for an endothermic one, K rises. A catalyst changes neither K nor the position; it only brings equilibrium sooner.',
    'Practicals:\n- **esterification**: mix known amounts of ethanoic acid and ethanol with a little acid catalyst in a sealed flask; after about a week, titrate the remaining acid with standard NaOH (allowing for the catalyst); calculate Kc for CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (about 4 at room temperature)\n- **iron(III) thiocyanate**: Fe³⁺ + SCN⁻ ⇌ [Fe(SCN)]²⁺ (blood-red). Adding Fe³⁺ or SCN⁻ deepens the red colour; adding silver ions (which remove SCN⁻) lightens it, as the equilibrium shifts to restore Q = K.',
  ], 'ac-q-vs-k', 'Q < K: forward; Q > K: backward; only temperature changes K.',
  ['At a moment when Q is greater than K, the reaction:', ['moves backward towards the reactants', 'moves forward', 'is at equilibrium', 'stops completely'], 'Too much product.'],
  [['Reaction quotient', 'Q: the equilibrium expression evaluated with current concentrations.'], ['Position of equilibrium', 'The relative amounts of reactants and products at equilibrium.'], ['Le Chatelier’s principle', 'A system at equilibrium shifts to oppose a change imposed on it.']],
  [
    { q: '1.00 mol ethanoic acid and 1.00 mol ethanol reach equilibrium with 0.33 mol acid left. Calculate Kc.', steps: ['At equilibrium: acid 0.33, ethanol 0.33, ester 0.67, water 0.67 mol.', 'Kc = (0.67 × 0.67) ÷ (0.33 × 0.33) (the volume cancels).', '**Kc = 0.449 ÷ 0.109 ≈ 4.1.**'] },
  ]),

  // ---------- Halogens ----------
  L('ac-halogen-2', 'ac-halogens', '10.2', 'Hydrogen halides and the reducing power of halide ions', 15, ['Halogens', 'Practical'], [
    '**Hydrogen chloride** is made by warming solid sodium chloride with **concentrated sulfuric acid**: NaCl + H₂SO₄ → NaHSO₄ + HCl, giving steamy fumes that form a white smoke with ammonia. The hydrogen halides are all very soluble in water, giving acids; HCl, HBr and HI are **strong** acids, but HF is **weak** because the H–F bond is very strong. **Thermal stability** falls from HF to HI as the H–X bond weakens: a hot wire decomposes HI into violet iodine vapour.',
    'With concentrated sulfuric acid, the halides show different **reducing power**:\n- **chloride**: only HCl forms; Cl⁻ is too weak a reducing agent to reduce H₂SO₄\n- **bromide**: HBr forms, but some Br⁻ reduces the acid to **sulfur dioxide**, giving **orange-brown bromine** fumes: 2HBr + H₂SO₄ → Br₂ + SO₂ + 2H₂O\n- **iodide**: I⁻ reduces H₂SO₄ further, to SO₂, **sulfur** (yellow) and **hydrogen sulfide** (rotten-egg smell), giving **purple iodine** vapour and a black solid: 8HI + H₂SO₄ → 4I₂ + H₂S + 4H₂O.\nReducing power increases **Cl⁻ < Br⁻ < I⁻**: larger ions hold their outer electrons less tightly, so they lose them more easily.',
    'Pure HBr and HI are therefore made with **phosphoric(V) acid**, which is not an oxidising agent. Practical: warm small samples of NaCl, NaBr and NaI with concentrated sulfuric acid in a fume cupboard, with eye protection, and record the colours and smells.',
  ], 'ac-halide-acid', 'Cl⁻ < Br⁻ < I⁻ in reducing power.',
  ['Why can HI not be prepared from NaI and concentrated sulfuric acid?', ['iodide ions reduce the sulfuric acid, so iodine forms instead', 'HI does not dissolve in water', 'NaI does not react with acids', 'HI is a weak acid'], 'Use phosphoric acid instead.'],
  [['Hydrogen halide', 'A compound HX of hydrogen and a halogen.'], ['Reducing power', 'The tendency to give away electrons.'], ['Thermal stability', 'Resistance to decomposition on heating.']],
  [
    { q: 'Give the oxidation number change of sulfur when iodide reduces H₂SO₄ to H₂S, and state what this shows.', steps: ['**Sulfur goes from +6 in H₂SO₄ to −2 in H₂S: a change of 8.**', '**Bromide only reduces it to SO₂ (+4, a change of 2).**', '**So iodide is the much stronger reducing agent.**'] },
  ]),

  L('ac-halogen-3', 'ac-halogens', '10.3', 'Industrial uses of halogens and the analysis of bleach', 15, ['Halogens', 'Practical'], [
    'Chlorine is made by the **electrolysis of brine** (sodium chloride solution) in membrane cells, which also give hydrogen and sodium hydroxide. Uses of halogens and their compounds:\n- **water treatment**: chlorine (or sodium chlorate(I)) kills bacteria in drinking water through chloric(I) acid, HOCl, an important defence against **cholera** and typhoid\n- **bleach**: sodium chlorate(I), NaOCl, made from chlorine and cold dilute sodium hydroxide; it bleaches and disinfects\n- **PVC**, poly(chloroethene), from chloroethene, for water pipes, electrical insulation and flooring; burning PVC releases HCl and toxic dioxins\n- **fluoride** in toothpaste, **iodised salt** to prevent goitre, silver halides in photography, and halogenoalkanes as solvents and anaesthetics.',
    'Chlorine is toxic and bleach must never be mixed with acids (which release chlorine gas) or with ammonia-based cleaners.',
    'Practical: **finding the chlorate(I) content of a bleach** by iodometric titration. Dilute the bleach accurately; to a 25.0 cm³ portion add excess potassium iodide and dilute acid: **OCl⁻ + 2I⁻ + 2H⁺ → I₂ + Cl⁻ + H₂O**. Titrate the iodine with standard **sodium thiosulfate**, adding **starch** near the end point (blue-black to colourless): **I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻**. So **1 mol OCl⁻ ≡ 1 mol I₂ ≡ 2 mol S₂O₃²⁻**.',
  ], 'ac-halogen-uses', 'OCl⁻ → I₂ → 2 S₂O₃²⁻.',
  ['In the bleach titration, starch is added:', ['near the end point, when the iodine colour is pale', 'at the start', 'after the end point', 'never'], 'Too early, it binds iodine firmly.'],
  [['Brine', 'A concentrated solution of sodium chloride.'], ['Sodium chlorate(I)', 'NaOCl, the active substance in bleach.'], ['Iodometric titration', 'A titration of iodine released by an oxidising agent, using thiosulfate.'], ['PVC', 'Poly(chloroethene), a plastic made from chloroethene.']],
  [
    { q: '25.0 cm³ of diluted bleach liberates iodine that needs 20.0 cm³ of 0.100 mol dm⁻³ sodium thiosulfate. Find the concentration of OCl⁻.', steps: ['n(S₂O₃²⁻) = 0.0200 × 0.100 = **2.00 × 10⁻³ mol.**', 'n(OCl⁻) = ½ × 2.00 × 10⁻³ = **1.00 × 10⁻³ mol** in 25.0 cm³.', 'Concentration = 1.00 × 10⁻³ ÷ 0.0250 = **0.0400 mol dm⁻³** (of the diluted bleach).'] },
  ]),

  // ---------- Lower Sixth drills ----------
  L('ac-l6-paper1', 'ac-l6-papers', '11.1', 'The A Level Chemistry papers and multiple choice', 12, ['Examination'], [
    'GCE A Level **Chemistry (0715)**:\n- **Paper 1**: multiple choice, **1½ hours**\n- **Paper 2**: structured questions, **3 hours**: six compulsory questions, two each on physical, inorganic and organic chemistry\n- **practical** examination, held in May before the written papers (5 to 8 May in 2026).\nLower Sixth work (atomic structure, gases, energetics, kinetics, equilibria, periodicity, halogens, bonding and organic fundamentals) is examined with the Upper Sixth work at the end of the course.',
    'Multiple-choice technique for chemistry:\n- for calculations, work the answer out first, then match; check units and powers of ten\n- for trends, recall the explanation, not just the direction\n- for equations, check charges and atoms balance\n- eliminate options that break a rule (an ion with the wrong charge, an impossible quantum number set).',
    'Keep a formula sheet of your own: pV = nRT; ΔG = ΔH − TΔS; ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂); t½ = 0.693/k; ΔTf = Kf·m; partial pressure = mole fraction × total pressure.',
  ], 'ac-gce-0715', 'Work it out first; then match.',
  ['Which set of quantum numbers is impossible?', ['n = 2, l = 2', 'n = 2, l = 1', 'n = 3, l = 2', 'n = 1, l = 0'], 'l can be at most n − 1.'],
  [['Multiple choice', 'A question answered by choosing one option.'], ['Formula sheet', 'A personal summary of key equations.']],
  [
    { q: 'An item gives a gas of mass 0.64 g occupying 240 cm³ at room conditions (24 dm³ mol⁻¹). What is its Mr? Work it out before looking at the options.', steps: ['n = 0.240 ÷ 24 = **0.0100 mol.**', 'Mr = 0.64 ÷ 0.0100 = **64**, which could be SO₂.'] },
  ]),

  L('ac-l6-paper2', 'ac-l6-papers', '11.2', 'Structured questions: physical and inorganic chemistry', 14, ['Examination'], [
    'Paper 2 rewards clear working:\n- write the **equation** or **expression** first (Kc = ..., ΔG = ΔH − TΔS)\n- substitute with **units** and convert consistently (kJ and J; cm³, dm³ and m³; °C and K)\n- give answers to a sensible number of **significant figures** with units\n- for **Born-Haber and Hess cycles**, draw the cycle with every enthalpy labelled before calculating.',
    'Explanations: link trends to **structure and bonding** (nuclear charge, shielding, radius, charge density) and use precise words: "the ionisation energy decreases down Group II because the outer electrons are further from the nucleus and more shielded, outweighing the increased nuclear charge".',
    'Inorganic questions often combine **observations with equations**: state what is seen (colour, gas, precipitate) and give a balanced equation with state symbols.',
  ], 'ac-gce-0715', 'Equation, substitution, units, answer.',
  ['In ΔG = ΔH − TΔS, with ΔH in kJ mol⁻¹, ΔS must be in:', ['kJ K⁻¹ mol⁻¹', 'J K⁻¹ mol⁻¹', 'kJ mol⁻¹', 'K'], 'Divide J values by 1000.'],
  [['Significant figures', 'The meaningful digits in a measured or calculated value.'], ['State symbols', '(s), (l), (g) and (aq) in equations.']],
  [
    { q: 'Write a full answer: "Describe and explain what is seen when chlorine water is added to potassium bromide solution."', steps: ['**Observation: the colourless solution turns orange (yellow-orange).**', '**Equation: Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq).**', '**Explanation: chlorine is a stronger oxidising agent than bromine, so it oxidises bromide ions to bromine.**'] },
  ]),
];
