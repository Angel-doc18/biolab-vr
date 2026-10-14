// A Level Biology lessons for Lower Sixth, term 2: photosynthesis,
// respiration, transport in plants and the mammalian heart and circulation.
// Original text written for this app.

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
  // ---------- 10. Light-dependent stage ----------
  L('ab-chloroplast-6', 'ab-l6-lightstage', '10.1', 'Chloroplasts and photosynthetic pigments', 14, ['Photosynthesis', 'Practical'], [
    'Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, using light energy absorbed by chlorophyll. It has two stages: the **light-dependent** stage in the **thylakoid membranes** and the **light-independent** stage (Calvin cycle) in the **stroma**.',
    'Pigments in the thylakoid membranes, arranged in **photosystems** (light-harvesting clusters funnelling energy to a **reaction centre**):\n- **chlorophyll a** (blue-green): the primary pigment at the reaction centre\n- **chlorophyll b** (yellow-green), **carotene** (orange) and **xanthophylls** (yellow): accessory pigments that widen the range of wavelengths absorbed.\nThe **absorption spectrum** shows which wavelengths the pigments absorb (peaks in blue-violet and red); the **action spectrum** shows the rate of photosynthesis at each wavelength. The two match closely, showing the pigments drive photosynthesis.',
    'Practical: **paper (or thin-layer) chromatography**. Grind a green leaf with propanone, spot the extract repeatedly on a line near the bottom of the paper, stand it in solvent below the spot, and let the solvent rise. Pigments separate by solubility. **Rf = distance moved by pigment ÷ distance moved by solvent front**; carotene runs nearly with the front, chlorophyll b the least.',
  ], 'leaf-section', 'Absorption spectrum matches action spectrum.',
  ['A pigment moves 4.2 cm while the solvent front moves 6.0 cm. Its Rf is:', ['0.70', '1.43', '0.42', '2.5'], '4.2 ÷ 6.0.'],
  [['Photosystem', 'A cluster of pigments around a reaction centre.'], ['Absorption spectrum', 'A graph of light absorbed by a pigment at each wavelength.'], ['Action spectrum', 'A graph of the rate of photosynthesis at each wavelength.'], ['Rf value', 'Pigment distance ÷ solvent distance in chromatography.']],
  [
    { q: 'Explain why plants with only chlorophyll a would photosynthesise less in shade.', steps: ['**Accessory pigments absorb wavelengths that chlorophyll a absorbs poorly.**', '**They pass the energy on to the reaction centre.**', '**Without them, less of the available light would be used, lowering the rate.**'] },
  ]),

  L('ab-lightdep-6', 'ab-l6-lightstage', '10.2', 'The light-dependent stage', 16, ['Photosynthesis'], [
    '**Non-cyclic photophosphorylation** uses both photosystems:\n- light excites electrons in **photosystem II** (reaction centre absorbs best at 680 nm); they pass along an **electron transport chain** in the thylakoid membrane\n- electrons lost by PSII are replaced by **photolysis** of water: **2H₂O → 4H⁺ + 4e⁻ + O₂**; the oxygen is released as a by-product\n- energy from the electron chain pumps protons into the **thylakoid space**\n- electrons reach **photosystem I** (700 nm), are excited again and finally reduce **NADP** to **reduced NADP** (NADPH).',
    '**Cyclic photophosphorylation** uses **PSI only**: excited electrons return to PSI through the electron chain, pumping protons. It makes **ATP only**, no reduced NADP and no oxygen; it supplies extra ATP for the Calvin cycle.',
    'ATP is made by **chemiosmosis**: protons accumulate in the thylakoid space and flow back to the stroma through **ATP synthase**, which combines ADP and phosphate. Products passed to the Calvin cycle: **ATP and reduced NADP**.',
  ], 'ab-light-reactions', 'Water is split, oxygen released; ATP and NADPH go to the stroma.',
  ['The source of the oxygen given off in photosynthesis is:', ['water', 'carbon dioxide', 'glucose', 'chlorophyll'], 'Photolysis splits water.'],
  [['Photolysis', 'The splitting of water by light energy.'], ['Photophosphorylation', 'Making ATP using light energy.'], ['Chemiosmosis', 'ATP synthesis driven by a proton gradient across a membrane.'], ['Reduced NADP', 'NADP carrying hydrogen, used in the Calvin cycle.']],
  [
    { q: 'Compare cyclic and non-cyclic photophosphorylation.', steps: ['**Non-cyclic: PSII and PSI; photolysis; makes ATP, reduced NADP and oxygen.**', '**Cyclic: PSI only; no photolysis; makes ATP only.**', '**Both make ATP by chemiosmosis through ATP synthase.**'] },
  ]),

  // ---------- 11. Calvin cycle ----------
  L('ab-calvin-6', 'ab-l6-calvin', '11.1', 'The Calvin cycle', 16, ['Photosynthesis'], [
    'The **light-independent stage** (Calvin cycle) takes place in the **stroma**:\n- **carbon fixation**: CO₂ combines with the 5-carbon **ribulose bisphosphate (RuBP)**, catalysed by **rubisco**, forming an unstable 6C compound that splits into two molecules of the 3-carbon **glycerate 3-phosphate (GP)**\n- **reduction**: GP is reduced to **triose phosphate (TP)**, using **ATP** and **reduced NADP** from the light stage\n- **regeneration**: most TP (5 out of every 6) is used to regenerate RuBP, using more ATP.',
    'Six turns of the cycle fix six CO₂ and give enough TP to make one hexose (glucose). TP and GP are used to make **glucose, sucrose, starch, cellulose**, **amino acids** (with nitrates) and **lipids** (glycerol and fatty acids).',
    'If light is switched off, ATP and reduced NADP stop being made: GP accumulates and RuBP falls. If CO₂ is reduced, RuBP accumulates and GP falls. These changes, followed with radioactive carbon by Calvin and his team (around 1950), revealed the cycle.',
  ], 'ab-calvin-cycle', 'Fix (RuBP + CO₂ → 2 GP), reduce (GP → TP), regenerate RuBP.',
  ['When the light is switched off, the concentration of GP:', ['rises, because it is no longer reduced to TP', 'falls', 'stays the same', 'becomes zero at once'], 'No ATP or reduced NADP for reduction.'],
  [['RuBP', 'Ribulose bisphosphate, the 5C carbon dioxide acceptor.'], ['Rubisco', 'The enzyme that fixes carbon dioxide to RuBP.'], ['GP', 'Glycerate 3-phosphate, the first product of fixation.'], ['TP', 'Triose phosphate, the 3C sugar made by reducing GP.']],
  [
    { q: 'How many turns of the Calvin cycle, and how many ATP and reduced NADP, are needed to make one glucose molecule?', steps: ['**6 turns (one CO₂ fixed per turn).**', '**12 GP reduced to 12 TP: 12 ATP and 12 reduced NADP.**', '**10 TP regenerate 6 RuBP using 6 ATP: total 18 ATP and 12 reduced NADP; 2 TP make glucose.**'] },
  ]),

  L('ab-c4-6', 'ab-l6-calvin', '11.2', 'C4 plants and limiting factors', 15, ['Photosynthesis', 'Practical'], [
    'Rubisco can also react with **oxygen** (photorespiration), wasting energy, especially in hot, bright conditions. **C4 plants** of the tropics, such as **maize**, **sugar cane** and **sorghum**, avoid this:\n- in **mesophyll** cells, **PEP carboxylase** (which has no affinity for oxygen) fixes CO₂ onto phosphoenolpyruvate, forming **oxaloacetate**, a 4-carbon compound (hence C4), then malate\n- malate passes to **bundle sheath** cells arranged in a ring around the veins (**Kranz anatomy**), where it releases CO₂ at high concentration around rubisco\n- the Calvin cycle runs in the bundle sheath, isolated from oxygen.\nC3 plants include beans, rice, cocoa and most trees.',
    'The rate of photosynthesis depends on **light intensity**, **CO₂ concentration** and **temperature**. The **principle of limiting factors** (Blackman): the rate is limited by the factor nearest its minimum value. On a graph, where the curve levels off, another factor is limiting; raising it raises the plateau.',
    'Practical with **Elodea** (pondweed): count bubbles or measure the volume of gas collected per minute at different distances from a lamp (light intensity ∝ 1/d²), with sodium hydrogencarbonate to supply CO₂ and a water bath to keep temperature constant. Greenhouses raise CO₂, light and temperature to increase crop yields.',
  ], 'limiting-factors', 'C4: PEP carboxylase concentrates CO₂ for rubisco.',
  ['Moving a lamp from 10 cm to 20 cm from the pondweed changes light intensity by a factor of:', ['¼', '½', '2', '4'], 'Intensity ∝ 1/d².'],
  [['C4 plant', 'A plant that first fixes carbon dioxide into a 4-carbon compound.'], ['Kranz anatomy', 'Bundle sheath cells in a ring round the veins of C4 leaves.'], ['Limiting factor', 'The factor in shortest supply that limits the rate.'], ['Photorespiration', 'The wasteful reaction of rubisco with oxygen.']],
  [
    { q: 'Explain why maize grows faster than beans in hot, sunny weather.', steps: ['**Maize is a C4 plant; PEP carboxylase fixes CO₂ even when stomata are partly closed.**', '**CO₂ is concentrated around rubisco in bundle sheath cells, reducing photorespiration.**', '**So maize fixes carbon more efficiently at high light and temperature.**'] },
  ]),

  // ---------- 12. Glycolysis and Krebs ----------
  L('ab-glycolysis-6', 'ab-l6-respiration', '12.1', 'ATP and glycolysis', 15, ['Respiration'], [
    '**ATP** (adenosine triphosphate) is the universal energy currency: its hydrolysis to ADP and phosphate releases about 30.5 kJ mol⁻¹ in small, usable amounts. It is made by **substrate-level phosphorylation** (directly in reactions) and by **oxidative phosphorylation** (chemiosmosis).',
    '**Glycolysis** in the **cytoplasm** splits glucose (6C) into two **pyruvate** (3C):\n- **phosphorylation**: glucose receives two phosphates from **2 ATP**, forming hexose bisphosphate\n- **lysis**: it splits into two **triose phosphate**\n- **oxidation**: each TP loses hydrogen to **NAD**, forming reduced NAD, and makes **2 ATP** by substrate-level phosphorylation, ending as pyruvate.\nPer glucose: **4 ATP made, 2 used: net 2 ATP**, plus **2 reduced NAD** and 2 pyruvate. Glycolysis needs no oxygen.',
    'If oxygen is present, pyruvate enters the mitochondrial matrix by active transport for the link reaction and Krebs cycle; if not, it is converted to lactate or ethanol.',
  ], 'ab-respiration-overview', 'Glycolysis: net 2 ATP, 2 NADH, 2 pyruvate, in the cytoplasm.',
  ['How many ATP molecules are used at the start of glycolysis?', ['2', '4', '1', '0'], 'To phosphorylate glucose.'],
  [['ATP', 'Adenosine triphosphate, the energy currency of cells.'], ['Glycolysis', 'The splitting of glucose into two pyruvate in the cytoplasm.'], ['Substrate-level phosphorylation', 'ATP made directly from a reaction intermediate.'], ['NAD', 'A coenzyme that carries hydrogen.']],
  [
    { q: 'Why is glycolysis thought to be an ancient pathway?', steps: ['**It occurs in the cytoplasm of almost all organisms, prokaryotic and eukaryotic.**', '**It needs no oxygen or organelles.**', '**So it probably evolved before oxygen and mitochondria appeared.**'] },
  ]),

  L('ab-krebs-6', 'ab-l6-respiration', '12.2', 'The link reaction and the Krebs cycle', 16, ['Respiration'], [
    'The **link reaction** in the **mitochondrial matrix**: pyruvate (3C) is **decarboxylated** (loses CO₂) and **dehydrogenated** (reduces NAD), forming an acetyl group (2C) that joins **coenzyme A** to make **acetyl CoA**. Per glucose: 2 CO₂ and 2 reduced NAD.',
    'The **Krebs cycle** (citric acid or tricarboxylic acid cycle), also in the matrix:\n- acetyl CoA (2C) combines with **oxaloacetate** (4C) to form **citrate** (6C)\n- citrate is decarboxylated and dehydrogenated to a 5C compound (CO₂ and reduced NAD released)\n- then to a 4C compound (CO₂, reduced NAD)\n- the 4C compound is converted back to oxaloacetate, producing **1 ATP** (substrate level), **1 reduced FAD** and **1 more reduced NAD**.\nPer turn: **2 CO₂, 3 reduced NAD, 1 reduced FAD, 1 ATP**. Two turns per glucose.',
    'The cycle produces little ATP directly; its main job is to strip hydrogen from the carbon skeleton onto NAD and FAD, which carry it to the electron transport chain. Fatty acids (via acetyl CoA) and amino acids can also enter the cycle.',
  ], 'ab-krebs', 'Per turn: 2 CO₂, 3 NADH, 1 FADH₂, 1 ATP.',
  ['Per glucose, how many CO₂ molecules are released in the link reaction and Krebs cycle together?', ['6', '2', '4', '3'], '2 from the link reaction + 4 from two turns.'],
  [['Link reaction', 'Conversion of pyruvate to acetyl CoA in the matrix.'], ['Decarboxylation', 'Removal of carbon dioxide.'], ['Dehydrogenation', 'Removal of hydrogen.'], ['Oxaloacetate', 'The 4C acceptor of the Krebs cycle.']],
  [
    { q: 'Count the reduced coenzymes made per glucose from glycolysis to the end of the Krebs cycle.', steps: ['**Glycolysis: 2 reduced NAD.**', '**Link reaction: 2 reduced NAD.**', '**Krebs cycle (2 turns): 6 reduced NAD and 2 reduced FAD.**', '**Total: 10 reduced NAD and 2 reduced FAD.**'] },
  ]),

  L('ab-rq-6', 'ab-l6-respiration', '12.3', 'Respiratory substrates and the respiratory quotient', 14, ['Respiration', 'Practical'], [
    'The **respiratory quotient (RQ) = volume of CO₂ produced ÷ volume of O₂ used**.\n- **carbohydrate**: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O; RQ = 6/6 = **1.0**\n- **lipid**: about **0.7** (fats have little oxygen and much hydrogen, so need more O₂)\n- **protein**: about **0.9**\n- an RQ above 1 suggests some anaerobic respiration (extra CO₂ without O₂).',
    'Energy values per gram: lipid about 37 to 39 kJ, carbohydrate and protein about 17 kJ; most energy comes from oxidising hydrogen atoms to water, so hydrogen-rich lipids release most.',
    'Practical: a **respirometer** with germinating seeds (or small animals) in a sealed tube, with **potassium hydroxide** to absorb CO₂, connected to a capillary tube with a coloured liquid. As O₂ is used, the liquid moves towards the tube: this measures **O₂ uptake**. Repeat with water instead of KOH: the movement then shows O₂ used minus CO₂ produced. From the two, find CO₂ produced and the RQ. Use a control tube with glass beads and a water bath to keep temperature constant.',
  ], 'respiration-apparatus', 'RQ: carbohydrate 1.0, protein 0.9, lipid 0.7.',
  ['Seeds use 2.0 cm³ of O₂ and release 1.4 cm³ of CO₂. The RQ is:', ['0.7, suggesting lipid respiration', '1.4', '1.0', '0.9, protein only'], '1.4 ÷ 2.0 = 0.7.'],
  [['Respiratory quotient', 'CO₂ produced ÷ O₂ used.'], ['Respirometer', 'Apparatus measuring gas exchange in respiration.'], ['Respiratory substrate', 'A molecule respired to release energy.']],
  [
    { q: 'With KOH, the liquid moves 25 mm in 10 min; with water, 5 mm in the same direction. Calculate the RQ (capillary of uniform bore).', steps: ['**With KOH: O₂ uptake ∝ 25 mm.**', '**With water: O₂ used − CO₂ released ∝ 5 mm, so CO₂ released ∝ 25 − 5 = 20 mm.**', '**RQ = 20 ÷ 25 = 0.8: a mixture of substrates.**'] },
  ]),

  // ---------- 13. ETC and anaerobic ----------
  L('ab-etc-6', 'ab-l6-oxphos', '13.1', 'Oxidative phosphorylation', 16, ['Respiration'], [
    'Reduced NAD and reduced FAD deliver hydrogen to the **electron transport chain** on the **inner mitochondrial membrane** (cristae):\n- the hydrogen atoms split into **protons (H⁺)** and **electrons**\n- electrons pass along a chain of **carriers** at successively lower energy levels\n- the energy released is used to **pump protons** from the matrix into the **intermembrane space**, building an electrochemical gradient\n- protons flow back into the matrix through **ATP synthase**, which makes ATP from ADP and phosphate: **chemiosmosis** (proposed by Peter Mitchell)\n- at the end of the chain, **oxygen** is the **final electron acceptor**: it combines with electrons and protons to form **water**.',
    'Without oxygen, electrons cannot leave the chain; reduced NAD is not reoxidised, and the Krebs cycle and link reaction stop. Cyanide blocks the last carrier and so stops aerobic respiration.',
    'ATP yield: each reduced NAD gives about 2.5 ATP and each reduced FAD about 1.5, so one glucose yields about **30 to 32 ATP** in total; older textbooks quote a theoretical **38**. Compare with **2** from anaerobic respiration.',
  ], 'ab-etc', 'Protons pumped out, flow back through ATP synthase; oxygen accepts electrons.',
  ['What is the role of oxygen in aerobic respiration?', ['the final electron acceptor, forming water', 'to split glucose', 'to make CO₂', 'to activate glycolysis'], 'At the end of the electron transport chain.'],
  [['Electron transport chain', 'A series of carriers on the inner mitochondrial membrane.'], ['ATP synthase', 'The enzyme that makes ATP as protons flow through it.'], ['Oxidative phosphorylation', 'ATP synthesis using energy from electron transport.']],
  [
    { q: 'Explain why mitochondria with many cristae suit active cells.', steps: ['**Cristae increase the area of inner membrane.**', '**More electron transport chains and ATP synthase molecules fit in.**', '**So more ATP can be made by oxidative phosphorylation.**'] },
  ]),

  L('ab-anaerobic-6', 'ab-l6-oxphos', '13.2', 'Anaerobic respiration', 13, ['Respiration', 'Practical'], [
    'Without oxygen, cells regenerate **NAD** so that glycolysis can continue, making **2 ATP** per glucose:\n- **alcoholic fermentation** (yeast, plant roots in waterlogged soil): pyruvate → **ethanal** + CO₂; ethanal is reduced to **ethanol** by reduced NAD\n- **lactate fermentation** (mammalian muscle, some bacteria): pyruvate is reduced to **lactate** by reduced NAD, catalysed by lactate dehydrogenase.',
    'In muscles during hard exercise, lactate builds up and the pH falls, causing fatigue. Afterwards, extra oxygen is needed to oxidise lactate back to pyruvate (in the liver, much is converted back to glucose): the **oxygen debt**, shown by continued fast breathing.',
    'Uses: yeast fermentation makes bread rise (CO₂) and produces alcohol in palm wine, beer and fuel ethanol; bacterial lactate fermentation makes yoghurt. Practical: set up **fermentation tubes** with yeast in glucose solution under a layer of oil; collect CO₂ (test with limewater) and compare rates at different temperatures or sugars.',
  ], 'ab-anaerobic', 'Regenerate NAD so glycolysis can go on: 2 ATP only.',
  ['Why must yeast convert pyruvate to ethanol without oxygen?', ['to regenerate NAD so glycolysis can continue', 'to make more ATP from ethanol', 'to use up CO₂', 'to make oxygen'], 'NAD is needed for glycolysis.'],
  [['Fermentation', 'Anaerobic respiration producing ethanol or lactate.'], ['Oxygen debt', 'Extra oxygen needed after exercise to remove lactate.'], ['Lactate', 'The product of anaerobic respiration in muscle.']],
  [
    { q: 'Compare aerobic and anaerobic respiration of one glucose in yeast.', steps: ['**Aerobic: complete oxidation to CO₂ and water; about 30 to 32 ATP; uses mitochondria.**', '**Anaerobic: ethanol and CO₂; 2 ATP; in the cytoplasm only.**', '**Much energy remains in ethanol in anaerobic respiration.**'] },
  ]),

  // ---------- 14. Transpiration ----------
  L('ab-waterpath-6', 'ab-l6-transpiration', '14.1', 'Water uptake by roots', 15, ['Transport in plants'], [
    'Water moves through the plant down a **water potential gradient**: soil water (less negative) → root cells → xylem → leaves → air (very negative). **Root hair cells** give a large surface area; mineral ions are taken up by **active transport**, lowering the water potential of the root cells so water follows by osmosis.',
    'Across the cortex, water takes three pathways:\n- **apoplast**: through the **cell walls** and spaces between cells, without crossing membranes (the main route)\n- **symplast**: through the **cytoplasm**, cell to cell via **plasmodesmata**\n- **vacuolar**: through vacuoles and cytoplasm.\nAt the **endodermis**, the **Casparian strip** of waterproof **suberin** blocks the apoplast, forcing water and ions into the symplast. The cells can then control which ions enter the xylem.',
    '**Root pressure**: endodermal cells actively pump ions into the xylem, lowering its water potential; water follows by osmosis, pushing a column a short way up. Evidence: **guttation** (drops at leaf edges in humid nights), sap oozing from cut stumps, and its dependence on respiration (stopped by cyanide or lack of oxygen).',
  ], 'ab-water-pathways', 'Apoplast blocked by the Casparian strip; root pressure is active.',
  ['The Casparian strip forces water to:', ['enter the symplast at the endodermis', 'stay in the apoplast', 'leave the root', 'enter the phloem'], 'Suberin is waterproof.'],
  [['Apoplast', 'The pathway through cell walls and spaces.'], ['Symplast', 'The pathway through cytoplasm and plasmodesmata.'], ['Casparian strip', 'A band of suberin in endodermal walls.'], ['Root pressure', 'Pressure pushing water up the xylem from the roots.']],
  [
    { q: 'Explain why waterlogged soil can make crops wilt even though water is plentiful.', steps: ['**Waterlogged soil lacks oxygen, so root cells respire poorly.**', '**Less ATP means less active uptake of ions and less root pressure.**', '**Water uptake falls, and roots may die, so the plant wilts.**'] },
  ]),

  L('ab-cohesion-6', 'ab-l6-transpiration', '14.2', 'Transpiration and the cohesion-tension theory', 16, ['Transport in plants', 'Practical'], [
    '**Transpiration** is the loss of water vapour from the aerial parts of a plant, mainly through **stomata**. Water evaporates from the walls of mesophyll cells into the air spaces and diffuses out down the water potential gradient.',
    'The **cohesion-tension theory**:\n- loss of water from leaves lowers the water potential of mesophyll cells, which draw water from the xylem\n- water molecules **cohere** (hydrogen bonds), forming a continuous column, and **adhere** to the lignified xylem walls\n- the column is pulled up under **tension** (negative pressure) by transpiration, the **transpiration pull**; xylem vessels narrow slightly when transpiration is fast (measured in tree trunks).\nFactors: **light** (stomata open), **temperature** (faster evaporation), **humidity** (lower humidity steepens the gradient), **wind** (removes the moist air layer), leaf area and cuticle.',
    '**Stomatal opening**: in light, guard cells actively take up **K⁺ ions**; their water potential falls, water enters by osmosis, they become turgid, and because the inner walls are thicker and cellulose microfibrils run radially, they bend apart. **Xerophytes** (plants of dry places, such as those of the far north of Cameroon) reduce water loss with thick waxy cuticles, sunken stomata, hairs, rolled leaves, spines or few stomata. A **potometer** measures water uptake: cut the shoot under water, seal joints, record the movement of an air bubble per minute.',
  ], 'potometer-apparatus', 'Evaporation pulls; cohesion holds the column together.',
  ['Transpiration rate is highest when it is:', ['hot, dry, windy and bright', 'cold, humid and still', 'dark and humid', 'cold and dark'], 'Steep gradient, stomata open.'],
  [['Transpiration', 'Loss of water vapour from the leaves and stems.'], ['Cohesion', 'Attraction between water molecules by hydrogen bonds.'], ['Tension', 'A pulling (negative) pressure in the xylem.'], ['Xerophyte', 'A plant adapted to dry conditions.']],
  [
    { q: 'An air bubble moves 36 mm in 3 minutes along a potometer capillary of radius 0.5 mm. Calculate the rate of water uptake.', steps: ['Volume = πr²l = 3.14 × 0.5² × 36 = **28.3 mm³** in 3 min.', 'Rate = 28.3 ÷ 3 = **9.4 mm³ per minute.**'] },
  ]),

  // ---------- 15. Translocation ----------
  L('ab-phloem-6', 'ab-l6-translocation', '15.1', 'Phloem loading and mass flow', 15, ['Transport in plants'], [
    '**Translocation** moves organic solutes, mainly **sucrose** and **amino acids**, in the **phloem** from **sources** (photosynthesising leaves; storage organs in spring) to **sinks** (roots, growing tips, fruits, seeds, storage tubers). It can go up or down.',
    '**Loading at the source**: companion cells pump **protons (H⁺)** out using ATP; protons diffuse back in through **co-transport proteins**, carrying **sucrose** with them against its gradient; sucrose passes through plasmodesmata into the sieve tube. Companion cells therefore have many mitochondria.',
    'The **mass-flow (pressure-flow) hypothesis** (Münch):\n- sucrose loading lowers the water potential in the sieve tube at the source, so water enters by osmosis from the xylem, raising the **hydrostatic pressure**\n- at the sink, sucrose is unloaded and used or stored; water leaves, lowering the pressure\n- sap flows **in bulk** from high to low pressure along the sieve tubes, through the sieve plates.',
  ], 'ab-mass-flow', 'Load sucrose, water follows, pressure pushes sap to the sink.',
  ['Why do companion cells contain many mitochondria?', ['to supply ATP for actively loading sucrose', 'to photosynthesise', 'to make cellulose', 'to store starch'], 'Proton pumping needs ATP.'],
  [['Translocation', 'Movement of organic solutes in the phloem.'], ['Source', 'A region where sugars are made or released.'], ['Sink', 'A region where sugars are used or stored.'], ['Mass flow', 'Bulk flow of sap down a pressure gradient.']],
  [
    { q: 'A cassava tuber is a sink in the growing season but a source when it sprouts. Explain.', steps: ['**While growing, sucrose arriving in the phloem is converted to starch and stored: a sink.**', '**When it sprouts, starch is hydrolysed to sugars that are loaded into the phloem.**', '**They are carried to the growing shoots, so the tuber is now a source.**'] },
  ]),

  L('ab-phloemevidence-6', 'ab-l6-translocation', '15.2', 'Evidence for translocation in phloem', 14, ['Transport in plants', 'Data analysis'], [
    'Evidence that phloem carries sugars:\n- **ringing experiments**: removing a ring of bark (with its phloem) from a woody stem causes the bark **above** the ring to swell with sugars, while the parts below are starved; xylem (inside) still carries water, so leaves do not wilt\n- **aphid stylets**: aphids push their mouthparts into a single sieve tube; when the aphid is cut away, sap **exudes** from the stylet under pressure for hours. Analysis shows sucrose and amino acids\n- **radioactive tracers**: a leaf given ¹⁴CO₂ makes labelled sugars; **autoradiography** shows the label in the phloem, moving towards sinks.',
    'Evidence for mass flow: sap is under pressure; the concentration of sucrose is higher near sources than sinks; the rate (up to about 1 m per hour) is far faster than diffusion.',
    'Objections: **sieve plates** would resist flow (why have them?); different solutes may move at **different rates** or **in opposite directions** in the same tissue; companion cells use much ATP, suggesting active processes along the route. Mass flow is the best-supported model, but it may not be the whole story.',
  ], 'ab-mass-flow', 'Ringing, aphids and tracers show phloem carries sugars.',
  ['After ringing a stem, the bark swells just above the ring because:', ['sugars moving down in the phloem cannot pass the ring', 'water collects in the xylem', 'roots push sap up', 'the plant grows new leaves'], 'Phloem is removed with the bark.'],
  [['Ringing', 'Removing a ring of bark and phloem from a stem.'], ['Autoradiography', 'Detecting a radioactive label using photographic film.'], ['Stylet', 'The piercing mouthpart of an aphid.']],
  [
    { q: 'Explain how aphid stylets provide evidence for mass flow.', steps: ['**Sap flows out of a cut stylet for a long time.**', '**This shows the contents of sieve tubes are under positive pressure.**', '**Pressure-driven bulk flow is what the mass-flow hypothesis predicts.**'] },
  ]),

  // ---------- 16. The heart ----------
  L('ab-doublecirc-6', 'ab-l6-heart', '16.1', 'Circulatory systems', 13, ['Transport in mammals'], [
    'Large, active animals need a **mass transport** system because diffusion alone is too slow over long distances.\n- **open** circulation (insects): blood bathes the organs in a body cavity\n- **closed** circulation (vertebrates, earthworms): blood stays in vessels.\nIn a **single** circulation (fish), blood passes through the heart **once** per circuit: heart → gills → body → heart. Pressure falls in the gill capillaries, so flow to the body is slow.',
    'Mammals and birds have a **double** circulation: blood passes through the heart **twice** per circuit:\n- the **pulmonary** circulation: right ventricle → lungs → left atrium\n- the **systemic** circulation: left ventricle → body → right atrium.\nBlood returning from the lungs is pumped again at high pressure to the body, delivering oxygen fast enough for a high metabolic rate and constant body temperature, while the lungs receive blood at lower pressure that does not damage their delicate capillaries.',
    'Practical: in a dissection of a sheep, goat or pig heart, identify the thick-walled left ventricle, the thinner right ventricle, the atria, the tricuspid and bicuspid valves with their tendons (chordae tendineae), the semilunar valves at the base of the aorta and pulmonary artery, and the coronary arteries on the surface.',
  ], 'heart-section', 'Twice through the heart: lungs at low pressure, body at high.',
  ['Why is the wall of the left ventricle thicker than that of the right?', ['it pumps blood at higher pressure round the whole body', 'it pumps more blood each beat', 'it pumps to the lungs', 'it contains the pacemaker'], 'Both ventricles pump the same volume.'],
  [['Double circulation', 'A system in which blood passes through the heart twice per circuit.'], ['Pulmonary circulation', 'The circuit to and from the lungs.'], ['Systemic circulation', 'The circuit to and from the body.']],
  [
    { q: 'Give two advantages of a double circulation over a single one.', steps: ['**Blood is repumped after the lungs, so it reaches the body at high pressure and flows fast.**', '**The pulmonary circuit can run at lower pressure, protecting the lung capillaries.**'] },
  ]),

  L('ab-heart-6', 'ab-l6-heart', '16.2', 'Control of the heartbeat', 14, ['Transport in mammals'], [
    'Cardiac muscle is **myogenic**: the heartbeat starts within the heart, without nerve impulses.\n- the **sinoatrial node (SAN)**, the **pacemaker** in the wall of the right atrium, sends out waves of excitation at regular intervals\n- the wave spreads over both **atria**, which contract (atrial systole)\n- a band of non-conducting fibrous tissue between atria and ventricles stops it, except at the **atrioventricular node (AVN)**, which **delays** it by about 0.1 s so the atria empty completely first\n- the excitation passes down the **bundle of His** in the septum to the apex and up the walls through **Purkyne fibres**\n- the ventricles contract **from the apex upwards**, squeezing blood into the arteries.',
    'The rate set by the SAN is adjusted by the autonomic nervous system from the **cardiovascular centre** in the medulla: **sympathetic** nerves (and adrenaline) speed it up; the **vagus** (parasympathetic) nerve slows it. Receptors sensing blood pressure and CO₂ concentration feed back to this centre.',
    'If the SAN fails, an **artificial pacemaker** can be implanted to stimulate the heart electrically.',
  ], 'ab-heart-conduction', 'SAN → atria → AVN (delay) → bundle of His → Purkyne fibres.',
  ['The delay at the AVN ensures that:', ['the atria have emptied before the ventricles contract', 'the ventricles contract first', 'the valves stay open', 'the heart beats faster'], 'About 0.1 s.'],
  [['Myogenic', 'Contracting without nervous stimulation.'], ['Sinoatrial node', 'The pacemaker of the heart.'], ['Atrioventricular node', 'The node that delays and passes on excitation to the ventricles.'], ['Purkyne fibres', 'Conducting fibres in the ventricle walls.']],
  [
    { q: 'Explain why the ventricles contract from the apex upwards and why this matters.', steps: ['**The bundle of His carries excitation down the septum to the apex first.**', '**Purkyne fibres then spread it up the ventricle walls.**', '**So blood is squeezed upwards towards the exits into the aorta and pulmonary artery.**'] },
  ]),

  // ---------- 17. Cardiac cycle ----------
  L('ab-cardiaccycle-6', 'ab-l6-cardiaccycle', '17.1', 'The cardiac cycle', 16, ['Transport in mammals', 'Data analysis'], [
    'One cycle lasts about **0.8 s** at 75 beats per minute:\n- **atrial systole** (about 0.1 s): atria contract, topping up the ventricles\n- **ventricular systole** (about 0.3 s): ventricles contract; ventricular pressure rises above atrial pressure, so the **atrioventricular valves close** (first sound, "lub"); when it exceeds the pressure in the aorta and pulmonary artery, the **semilunar valves open** and blood is ejected\n- **diastole** (about 0.4 s): the ventricles relax; when their pressure falls below the arterial pressure, the **semilunar valves close** (second sound, "dub"); when it falls below atrial pressure, the AV valves open and the ventricles fill passively.',
    'Pressures in the left side: ventricle rises from near 0 to about **16 kPa (120 mm Hg)**; aorta varies between about **10.7 and 16 kPa (80 to 120 mm Hg)**, its elastic walls smoothing the flow; atrium stays low (below about 1.5 kPa). Valves open and close only because of pressure differences.',
    '**Cardiac output = stroke volume × heart rate**. At rest: about 70 cm³ × 72 beats per minute ≈ **5 dm³ per minute**; in exercise it can rise four- or five-fold. Practical: measure pulse rate and blood pressure (with a sphygmomanometer) before, during and after exercise, and plot recovery.',
  ], 'ab-cardiac-cycle', 'Valves follow pressure: AV closes first, semilunar opens, then closes.',
  ['The semilunar valve in the aorta closes when:', ['pressure in the ventricle falls below pressure in the aorta', 'the atria contract', 'ventricular pressure is highest', 'the AV valves close'], 'Blood tries to flow back.'],
  [['Systole', 'Contraction of a heart chamber.'], ['Diastole', 'Relaxation of the heart.'], ['Stroke volume', 'The volume of blood pumped by a ventricle per beat.'], ['Cardiac output', 'The volume pumped per minute: stroke volume × heart rate.']],
  [
    { q: 'An athlete’s heart rate is 50 beats per minute and cardiac output 5.0 dm³ per minute at rest. Find the stroke volume and explain the difference from an untrained person (70 cm³).', steps: ['Stroke volume = 5000 cm³ ÷ 50 = **100 cm³.**', '**Training enlarges and strengthens the ventricles, so each beat pumps more blood and the same output needs fewer beats.**'] },
  ]),

  L('ab-ecg-6', 'ab-l6-cardiaccycle', '17.2', 'The electrocardiogram', 13, ['Transport in mammals', 'Data analysis'], [
    'An **electrocardiogram (ECG)** records the electrical activity of the heart from electrodes on the skin:\n- **P wave**: excitation (depolarisation) spreading over the **atria**\n- **QRS complex**: excitation spreading through the **ventricles** (it hides the atrial recovery)\n- **T wave**: **recovery** (repolarisation) of the ventricles.\nThe P–R interval includes the delay at the AVN.',
    'Heart rate from an ECG: measure the time between two R peaks (one beat); **rate = 60 ÷ time per beat in seconds**. Standard ECG paper moves at 25 mm per second.',
    'Abnormal ECGs reveal disease: a very fast rate (**tachycardia**, over 100 per minute at rest), a slow rate (**bradycardia**, below 60, normal in some athletes), irregular beats (**fibrillation**: no clear P waves, chaotic QRS) or changes after a **heart attack** (myocardial infarction), when part of the muscle dies after a coronary artery is blocked.',
  ], 'ab-ecg', 'P atria, QRS ventricles, T recovery.',
  ['The QRS complex on an ECG shows:', ['excitation spreading through the ventricles', 'contraction of the atria', 'closing of the valves', 'recovery of the atria'], 'Ventricular depolarisation.'],
  [['ECG', 'A recording of the electrical activity of the heart.'], ['Depolarisation', 'The electrical excitation that triggers contraction.'], ['Fibrillation', 'Rapid, uncoordinated contraction of heart muscle.']],
  [
    { q: 'On an ECG, R peaks are 20 mm apart and the paper moves at 25 mm per second. Find the heart rate.', steps: ['Time per beat = 20 ÷ 25 = **0.8 s.**', 'Rate = 60 ÷ 0.8 = **75 beats per minute.**'] },
  ]),

  L('ab-vessels-6', 'ab-l6-cardiaccycle', '17.3', 'Blood vessels and tissue fluid', 15, ['Transport in mammals'], [
    'Blood vessels:\n- **arteries**: thick walls with much **elastic tissue** (stretches and recoils, smoothing the pressure) and **smooth muscle** (controls diameter, especially in arterioles); small lumen; high, pulsing pressure\n- **veins**: thin walls, little elastic tissue, a **large lumen** and **valves**; low pressure; blood is helped back by contracting skeletal muscles\n- **capillaries**: walls of a single layer of **endothelium** (squamous), about 7 µm wide, so red cells pass in single file; slow flow and short diffusion distance for exchange.',
    '**Tissue fluid** forms at the arterial end of capillaries, where the **hydrostatic pressure** of the blood is greater than the **osmotic pull** of the plasma proteins: water and small solutes (glucose, ions, oxygen) are pushed out; large proteins and cells stay in. At the venous end, hydrostatic pressure has fallen below the osmotic pull, so much fluid returns, carrying CO₂ and wastes. The excess drains into **lymph** vessels and back to the veins.',
    'Blood pressure is measured as systolic/diastolic, normally about **120/80 mm Hg**. High blood pressure (**hypertension**), common in adults in Cameroon as elsewhere, increases the risk of strokes and heart disease; it is linked to salt, obesity, inactivity, alcohol and smoking, and controlled by diet, exercise and medicines.',
  ], 'blood-vessels', 'Pressure pushes fluid out at the arterial end; proteins pull it back.',
  ['Why does fluid leave capillaries at the arterial end?', ['hydrostatic pressure is higher than the osmotic pull of plasma proteins', 'veins suck it out', 'proteins leave the blood', 'red cells push it out'], 'Ultrafiltration.'],
  [['Endothelium', 'The single layer of cells lining blood vessels.'], ['Tissue fluid', 'Fluid bathing cells, formed from plasma.'], ['Lymph', 'Excess tissue fluid returned through lymph vessels.'], ['Hypertension', 'Persistently high blood pressure.']],
  [
    { q: 'Explain why a lack of protein in the diet (kwashiorkor) causes swelling (oedema).', steps: ['**Low plasma protein lowers the osmotic pull of the blood.**', '**Less tissue fluid returns to the capillaries at the venous end.**', '**Fluid accumulates in the tissues, causing swelling, especially of the abdomen and legs.**'] },
  ]),
];
