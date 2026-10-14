// Extra end-of-lesson questions for the A Level Biology lessons, by lesson id.
// The correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth, term 1 ----------
  'ab-microscopes-6': [
    Q('The resolution of a transmission electron microscope is about:', ['0.5 nm', '0.2 µm', '10 µm', '1 mm'], 'Electrons have a very short wavelength.'),
    Q('Living cells can be viewed with:', ['a light microscope', 'a transmission electron microscope', 'a scanning electron microscope', 'none of these'], 'Electron microscopes need a vacuum.'),
    Q('A structure seen only because of the way a specimen was prepared is an:', ['artefact', 'organelle', 'antigen', 'enzyme'], 'Not present in the living cell.'),
    Q('Images from a TEM are naturally:', ['black and white', 'in full colour', 'three-dimensional', 'moving'], 'Colour is added by computer.'),
  ],
  'ab-graticule-6': [
    Q('1 mm equals:', ['1000 µm', '100 µm', '10 µm', '1 000 000 µm'], 'And 1 µm = 1000 nm.'),
    Q('The eyepiece graticule scale is in:', ['arbitrary units until calibrated', 'micrometres always', 'millimetres', 'nanometres'], 'It must be calibrated.'),
    Q('A drawing 50 mm long of a 25 µm cell has a magnification of:', ['×2000', '×200', '×20 000', '×500'], '50 000 µm ÷ 25 µm.'),
    Q('An organelle 2 µm long is magnified ×5000. Its image is:', ['10 mm', '1 mm', '100 mm', '0.4 mm'], '2 × 5000 = 10 000 µm.'),
  ],
  'ab-carbs-6': [
    Q('α-glucose and β-glucose differ in the position of the –OH group on carbon:', ['1', '2', '4', '6'], 'Below the ring in α, above in β.'),
    Q('Lactose is made of:', ['glucose and galactose', 'two glucose units', 'glucose and fructose', 'fructose only'], 'Milk sugar.'),
    Q('Amylopectin is branched because of:', ['α-1,6 glycosidic bonds', 'β-1,4 bonds', 'peptide bonds', 'ester bonds'], 'Branch points.'),
    Q('Starch is a good storage compound because it is:', ['insoluble and does not affect water potential', 'soluble', 'a protein', 'easily diffused'], 'Compact and inert.'),
  ],
  'ab-lipids-6': [
    Q('Palm oil is liquid at room temperature mainly because it contains:', ['unsaturated fatty acids', 'only saturated fatty acids', 'proteins', 'glucose'], 'Kinked chains pack loosely.'),
    Q('Lipids release more energy per gram than carbohydrates because they contain:', ['more C–H bonds', 'more oxygen', 'nitrogen', 'phosphate'], 'Hydrogen-rich.'),
    Q('Oxidising fat produces metabolic water, useful to:', ['desert animals', 'fish only', 'plants in water', 'bacteria only'], 'For example camels.'),
    Q('Steroid hormones are made from:', ['cholesterol', 'glucose', 'amino acids only', 'nucleotides'], 'A lipid.'),
  ],
  'ab-foodtests-6': [
    Q('A positive iodine test for starch gives a:', ['blue-black colour', 'brick-red precipitate', 'purple colour', 'milky emulsion'], 'Iodine in potassium iodide.'),
    Q('The emulsion test uses:', ['ethanol, then water', 'iodine', 'Benedict’s solution', 'biuret reagent'], 'A milky white emulsion means lipid.'),
    Q('A colorimeter can make the Benedict’s test quantitative by measuring:', ['the colour remaining in the solution', 'the temperature', 'the mass of sugar directly', 'the pH'], 'Less blue means more sugar.'),
    Q('Sucrose is called non-reducing because it:', ['does not reduce copper(II) ions until hydrolysed', 'contains no glucose', 'is a polysaccharide', 'is a lipid'], 'Its reducing groups are joined.'),
  ],
  'ab-proteins-6': [
    Q('How many different amino acids are found in proteins of living things?', ['20', '4', '64', '100'], 'Each with a different R group.'),
    Q('Collagen is a:', ['fibrous protein with a triple helix', 'globular enzyme', 'carbohydrate', 'lipid'], 'In tendons and skin.'),
    Q('Hydrophobic interactions in tertiary structure involve:', ['non-polar R groups clustering away from water', 'peptide bonds', 'phosphate groups', 'glycosidic bonds'], 'Inside globular proteins.'),
    Q('Haem in haemoglobin is a:', ['prosthetic group containing iron', 'fatty acid', 'nucleotide', 'polysaccharide'], 'It binds oxygen.'),
  ],
  'ab-nucleic-6': [
    Q('Purines have:', ['two rings (adenine, guanine)', 'one ring', 'no rings', 'three rings'], 'Pyrimidines have one.'),
    Q('C–G pairs are held by:', ['three hydrogen bonds', 'two hydrogen bonds', 'one peptide bond', 'ionic bonds'], 'A–T has two.'),
    Q('Transfer RNA carries:', ['amino acids to the ribosome', 'the code out of the nucleus', 'ribosomes', 'glucose'], 'mRNA carries the code.'),
    Q('ATP contains the sugar:', ['ribose', 'deoxyribose', 'glucose', 'fructose'], 'Adenine, ribose, three phosphates.'),
  ],
  'ab-enzymeaction-6': [
    Q('The lock-and-key model was proposed by:', ['Fischer', 'Koshland', 'Mendel', 'Darwin'], 'Induced fit came from Koshland.'),
    Q('An enzyme-substrate complex forms when:', ['the substrate binds to the active site', 'the enzyme is denatured', 'products are released', 'the inhibitor binds'], 'A temporary complex.'),
    Q('Amylase in saliva is an:', ['extracellular enzyme', 'intracellular enzyme', 'inhibitor', 'antibody'], 'It works outside cells.'),
    Q('Enzymes are mostly:', ['globular proteins', 'fibrous proteins', 'lipids', 'carbohydrates'], 'A precise 3D shape.'),
  ],
  'ab-enzymefactors-6': [
    Q('Pepsin works best at a pH of about:', ['2', '7', '8', '11'], 'In the stomach.'),
    Q('Q₁₀ for most enzyme reactions below the optimum is about:', ['2', '10', '0.5', '100'], 'The rate roughly doubles per 10 °C.'),
    Q('The initial rate of reaction is found from:', ['the gradient at the start of the product-time curve', 'the final amount of product', 'the time to finish', 'the enzyme mass'], 'Before substrate runs low.'),
    Q('A low Km shows:', ['high affinity of the enzyme for its substrate', 'low affinity', 'a denatured enzyme', 'no activity'], 'Half Vmax at low [S].'),
  ],
  'ab-inhibition-6': [
    Q('Malonate inhibits succinate dehydrogenase:', ['competitively', 'non-competitively', 'irreversibly by denaturing it', 'not at all'], 'It resembles succinate.'),
    Q('Heavy metal ions such as mercury act as:', ['non-competitive inhibitors', 'competitive inhibitors', 'substrates', 'coenzymes'], 'They change the enzyme’s shape.'),
    Q('A non-competitive inhibitor changes Vmax by:', ['lowering it', 'raising it', 'not changing it', 'doubling it'], 'Fewer working enzymes.'),
    Q('End-product inhibition saves the cell:', ['resources by slowing a pathway when its product is plentiful', 'from all enzymes', 'water', 'oxygen'], 'Negative feedback.'),
  ],
  'ab-organelles-6': [
    Q('mRNA leaves the nucleus through:', ['nuclear pores', 'the nucleolus', 'lysosomes', 'the Golgi'], 'In the nuclear envelope.'),
    Q('Proteins made on the RER are transported to the Golgi in:', ['vesicles', 'mitochondria', 'chloroplasts', 'the nucleolus'], 'Membrane-bound sacs.'),
    Q('Liver cells have much smooth ER because it:', ['detoxifies drugs and makes lipids', 'makes proteins', 'photosynthesises', 'stores DNA'], 'No ribosomes.'),
    Q('The release of enzymes by fusion of vesicles with the membrane is:', ['exocytosis', 'endocytosis', 'osmosis', 'diffusion'], 'Secretion.'),
  ],
  'ab-organelles2-6': [
    Q('The fluid inside a mitochondrion is the:', ['matrix', 'stroma', 'cytosol', 'lumen of the ER'], 'Krebs cycle enzymes.'),
    Q('Grana are stacks of:', ['thylakoids', 'cristae', 'ribosomes', 'vesicles'], 'In chloroplasts.'),
    Q('Cilia and flagella contain microtubules in a:', ['9 + 2 arrangement', '3 + 3 arrangement', 'single ring', 'random pattern'], 'Part of the cytoskeleton.'),
    Q('Plant cells store carbohydrate mainly as:', ['starch', 'glycogen', 'cellulose only', 'lipid only'], 'Animal cells store glycogen.'),
  ],
  'ab-prokaryotes-6': [
    Q('The DNA of a prokaryote lies in the:', ['nucleoid', 'nucleus', 'nucleolus', 'mitochondrion'], 'No nuclear envelope.'),
    Q('Pili help bacteria to:', ['attach to surfaces and exchange DNA', 'swim', 'photosynthesise', 'make ATP'], 'Thin protein threads.'),
    Q('The order of reagents in Gram staining is:', ['crystal violet, iodine, alcohol, safranin', 'safranin, alcohol, iodine', 'iodine, safranin, crystal violet', 'alcohol only'], 'The counterstain comes last.'),
    Q('Penicillin acts best on bacteria that are:', ['Gram-positive, with thick peptidoglycan walls', 'Gram-negative', 'viruses', 'fungi'], 'It blocks wall building.'),
  ],
  'ab-endosymbiosis-6': [
    Q('A virus particle consists of:', ['nucleic acid in a protein coat', 'cytoplasm and a nucleus', 'ribosomes and a membrane', 'a cell wall'], 'Sometimes with an envelope.'),
    Q('The endosymbiotic theory was developed by:', ['Lynn Margulis', 'Charles Darwin', 'Robert Hooke', 'Louis Pasteur'], 'In the 1960s.'),
    Q('Chloroplasts are thought to descend from:', ['cyanobacteria', 'viruses', 'fungi', 'protoctists'], 'Photosynthetic bacteria.'),
    Q('Mitochondria divide by a process similar to:', ['binary fission', 'meiosis', 'budding of yeast', 'spore formation'], 'Like bacteria.'),
  ],
  'ab-fluidmosaic-6': [
    Q('A phospholipid bilayer is about:', ['7 nm thick', '7 µm thick', '7 mm thick', '0.7 nm thick'], 'Seen in electron micrographs.'),
    Q('Intrinsic proteins:', ['span the whole bilayer', 'sit only on the surface', 'are carbohydrates', 'are absent in animals'], 'Channels and carriers.'),
    Q('Which crosses a membrane most easily by simple diffusion?', ['oxygen', 'glucose', 'sodium ions', 'proteins'], 'Small and non-polar.'),
    Q('The membrane is described as "fluid" because:', ['its phospholipids and proteins can move sideways', 'it is liquid water', 'it has no structure', 'it dissolves easily'], 'A dynamic structure.'),
  ],
  'ab-transport-6': [
    Q('Fick’s law says the rate of diffusion increases with:', ['a larger area and a steeper gradient', 'a thicker barrier', 'a smaller area', 'a lower temperature'], 'Rate ∝ area × gradient ÷ thickness.'),
    Q('Channel proteins usually carry:', ['ions', 'large proteins', 'starch', 'whole cells'], 'Water-filled pores.'),
    Q('Phagocytosis is a form of:', ['endocytosis', 'exocytosis', 'osmosis', 'facilitated diffusion'], 'Engulfing solids.'),
    Q('Sodium-glucose co-transport occurs in the:', ['small intestine', 'alveoli', 'skin', 'bone'], 'Absorbing glucose.'),
  ],
  'ab-waterpotential-6': [
    Q('Water potential is measured in:', ['kilopascals', 'joules', 'moles', 'degrees'], 'A pressure unit.'),
    Q('Solute potential is always:', ['negative', 'positive', 'zero', 'equal to pressure potential'], 'Solutes lower water potential.'),
    Q('Red blood cells placed in pure water:', ['swell and burst', 'shrink', 'stay the same', 'become plasmolysed'], 'No wall to resist.'),
    Q('In the potato cylinder practical, the water potential of the tissue is found where the graph shows:', ['zero change in mass', 'the greatest gain', 'the greatest loss', 'the first reading'], 'No net movement.'),
  ],
  'ab-planttissue-6': [
    Q('Mesophyll tissue in leaves is a form of:', ['parenchyma', 'sclerenchyma', 'collenchyma', 'xylem'], 'Photosynthetic parenchyma.'),
    Q('The grit in guava fruit comes from:', ['sclereids (stone cells)', 'collenchyma', 'phloem', 'parenchyma'], 'Sclerenchyma.'),
    Q('Lignin can be detected with:', ['phloroglucinol and acid (red)', 'iodine', 'Benedict’s solution', 'biuret'], 'A stain for lignified walls.'),
    Q('Collenchyma is found mainly:', ['just below the epidermis of young stems', 'in the pith', 'in roots only', 'in xylem'], 'Supporting growing parts.'),
  ],
  'ab-vascular-6': [
    Q('Pits in xylem vessel walls allow water to:', ['move sideways between vessels', 'leave the plant', 'enter phloem', 'evaporate'], 'Unlignified areas.'),
    Q('Sieve tube elements have no:', ['nucleus', 'cytoplasm', 'cell membrane', 'cell wall'], 'Companion cells support them.'),
    Q('The pericycle and endodermis are found in the:', ['root', 'leaf', 'flower', 'stem epidermis'], 'Around the vascular cylinder.'),
    Q('Cambium lies:', ['between xylem and phloem', 'in the epidermis', 'in the pith', 'outside the cortex'], 'It divides to make new vascular tissue.'),
  ],
  'ab-epithelia-6': [
    Q('Cuboidal epithelium lines:', ['kidney tubules', 'alveoli', 'the trachea', 'the skin surface'], 'Secretion and absorption.'),
    Q('Goblet cells secrete:', ['mucus', 'antibodies', 'hormones', 'bile'], 'In columnar epithelium.'),
    Q('Ciliated epithelium in the oviduct moves:', ['the egg towards the uterus', 'sperm out', 'blood', 'urine'], 'Cilia beat in waves.'),
    Q('Epithelial cells rest on a:', ['basement membrane', 'cell wall', 'bone', 'cartilage'], 'A thin supporting layer.'),
  ],
  'ab-connective-6': [
    Q('Bone matrix is hard because it contains:', ['calcium phosphate', 'cellulose', 'keratin', 'chitin'], 'With collagen for toughness.'),
    Q('Cardiac muscle cells are joined by:', ['intercalated discs', 'tendons', 'synapses', 'plasmodesmata'], 'They pass excitation quickly.'),
    Q('Smooth muscle is:', ['involuntary and unstriated', 'voluntary and striated', 'branched and myogenic', 'multinucleate'], 'In gut walls.'),
    Q('A neutrophil is recognised by its:', ['lobed nucleus', 'round nucleus filling the cell', 'lack of nucleus', 'kidney-shaped nucleus'], 'Granular cytoplasm too.'),
  ],

  // ---------- Lower Sixth, term 2 ----------
  'ab-chloroplast-6': [
    Q('The primary pigment at the reaction centre is:', ['chlorophyll a', 'chlorophyll b', 'carotene', 'xanthophyll'], 'Accessory pigments pass energy to it.'),
    Q('Carotene appears:', ['orange', 'blue-green', 'purple', 'black'], 'An accessory pigment.'),
    Q('Pigments separate in chromatography because they differ in:', ['solubility in the solvent', 'colour only', 'mass only', 'temperature'], 'More soluble ones travel further.'),
    Q('The action spectrum shows:', ['the rate of photosynthesis at each wavelength', 'pigment colours', 'leaf structure', 'stomatal density'], 'It matches the absorption spectrum.'),
  ],
  'ab-lightdep-6': [
    Q('Photosystem II absorbs best at about:', ['680 nm', '700 nm', '550 nm', '400 nm'], 'PSI at 700 nm.'),
    Q('Protons build up during the light stage in the:', ['thylakoid space', 'stroma', 'cytoplasm', 'matrix'], 'Then flow out through ATP synthase.'),
    Q('Electrons lost from photosystem II are replaced from:', ['water', 'NADP', 'carbon dioxide', 'glucose'], 'Photolysis.'),
    Q('Cyclic photophosphorylation provides:', ['extra ATP for the Calvin cycle', 'oxygen', 'reduced NADP', 'glucose directly'], 'PSI only.'),
  ],
  'ab-calvin-6': [
    Q('RuBP contains how many carbon atoms?', ['5', '3', '6', '4'], 'Ribulose bisphosphate.'),
    Q('If CO₂ supply falls, the concentration of RuBP:', ['rises', 'falls', 'stays the same', 'becomes zero'], 'It is not being used.'),
    Q('Triose phosphate can be used to make:', ['glucose, starch, lipids and amino acids', 'water only', 'oxygen', 'ATP only'], 'The products of photosynthesis.'),
    Q('Calvin worked out the cycle using:', ['radioactive carbon', 'X-rays', 'electron microscopes only', 'fruit flies'], 'Around 1950.'),
  ],
  'ab-c4-6': [
    Q('Photorespiration occurs when rubisco reacts with:', ['oxygen', 'carbon dioxide', 'water', 'nitrogen'], 'Wasting energy.'),
    Q('In C4 plants, the Calvin cycle takes place in:', ['bundle sheath cells', 'mesophyll cells', 'guard cells', 'epidermal cells'], 'Isolated from oxygen.'),
    Q('Light intensity is inversely proportional to:', ['the square of the distance from the lamp', 'the distance', 'the temperature', 'the CO₂ level'], '1/d².'),
    Q('Greenhouse farmers add CO₂ because:', ['it is often the limiting factor in bright light', 'it cools plants', 'it kills pests', 'it adds water'], 'Raising the plateau.'),
  ],
  'ab-glycolysis-6': [
    Q('Hydrolysis of ATP releases about:', ['30.5 kJ mol⁻¹', '3050 kJ mol⁻¹', '0.3 kJ mol⁻¹', '2870 kJ mol⁻¹'], 'Small usable packets.'),
    Q('In glycolysis, glucose is split into two molecules of:', ['triose phosphate', 'citrate', 'acetyl CoA', 'RuBP'], 'Then oxidised to pyruvate.'),
    Q('Glycolysis produces how much reduced NAD per glucose?', ['2', '4', '10', '0'], 'One per triose phosphate.'),
    Q('ATP made directly in glycolysis is made by:', ['substrate-level phosphorylation', 'oxidative phosphorylation', 'photophosphorylation', 'chemiosmosis'], 'Directly from intermediates.'),
  ],
  'ab-krebs-6': [
    Q('The link reaction removes from pyruvate:', ['CO₂ and hydrogen', 'oxygen', 'ATP', 'water only'], 'Decarboxylation and dehydrogenation.'),
    Q('Citrate contains how many carbons?', ['6', '4', '5', '2'], 'Acetyl (2C) + oxaloacetate (4C).'),
    Q('The Krebs cycle takes place in the:', ['mitochondrial matrix', 'cristae', 'cytoplasm', 'stroma'], 'With the link reaction.'),
    Q('The main role of the Krebs cycle is to:', ['supply reduced NAD and FAD to the electron transport chain', 'make glucose', 'split water', 'make oxygen'], 'It makes little ATP directly.'),
  ],
  'ab-rq-6': [
    Q('Potassium hydroxide in a respirometer:', ['absorbs carbon dioxide', 'supplies oxygen', 'kills the seeds', 'measures temperature'], 'So movement shows O₂ uptake.'),
    Q('The RQ of protein is about:', ['0.9', '0.7', '1.0', '1.5'], 'Between fat and carbohydrate.'),
    Q('An RQ greater than 1 suggests:', ['some anaerobic respiration', 'only fat respiration', 'no respiration', 'photosynthesis'], 'Extra CO₂ without O₂ use.'),
    Q('A control tube with glass beads in a respirometer shows:', ['changes due to temperature or pressure, not respiration', 'the RQ', 'the seed mass', 'photosynthesis'], 'To correct readings.'),
  ],
  'ab-etc-6': [
    Q('Chemiosmosis was proposed by:', ['Peter Mitchell', 'Hans Krebs', 'Melvin Calvin', 'Gregor Mendel'], 'Proton gradients drive ATP synthesis.'),
    Q('Each reduced NAD yields about:', ['2.5 ATP', '10 ATP', '0.5 ATP', '38 ATP'], 'Reduced FAD about 1.5.'),
    Q('Cyanide stops aerobic respiration by:', ['blocking the last carrier of the electron transport chain', 'blocking glycolysis', 'destroying glucose', 'raising oxygen'], 'Electrons cannot reach oxygen.'),
    Q('The total ATP yield from one glucose in aerobic respiration is about:', ['30 to 32 (38 in older texts)', '2', '100', '6'], 'Most from oxidative phosphorylation.'),
  ],
  'ab-anaerobic-6': [
    Q('In alcoholic fermentation, pyruvate is first converted to:', ['ethanal and CO₂', 'lactate', 'citrate', 'glucose'], 'Then ethanal to ethanol.'),
    Q('Lactate is converted back to glucose mainly in the:', ['liver', 'brain', 'skin', 'kidney only'], 'Part of repaying the oxygen debt.'),
    Q('Bread rises because yeast produces:', ['carbon dioxide', 'oxygen', 'ethanol only', 'lactate'], 'Gas bubbles in the dough.'),
    Q('Yoghurt is made by bacterial:', ['lactate fermentation', 'alcoholic fermentation', 'photosynthesis', 'aerobic respiration only'], 'Lactic acid thickens milk.'),
  ],
  'ab-waterpath-6': [
    Q('Root hairs increase the:', ['surface area for water and ion uptake', 'thickness of the root', 'rate of photosynthesis', 'strength of the stem'], 'Many fine extensions.'),
    Q('Mineral ions are taken up by root hair cells mainly by:', ['active transport', 'osmosis', 'transpiration', 'diffusion only'], 'Against a concentration gradient.'),
    Q('Guttation is evidence of:', ['root pressure', 'translocation', 'photosynthesis', 'phloem loading'], 'Drops at leaf edges.'),
    Q('The symplast pathway passes through:', ['cytoplasm and plasmodesmata', 'cell walls only', 'xylem only', 'air spaces'], 'Cell to cell.'),
  ],
  'ab-cohesion-6': [
    Q('Adhesion is the attraction between water and:', ['the xylem walls', 'other water molecules', 'air', 'phloem sap'], 'Cohesion is water to water.'),
    Q('Evidence for tension in the xylem is that tree trunks:', ['shrink slightly in diameter when transpiration is fast', 'swell during the day', 'never change', 'grow faster at night'], 'Vessels are pulled inwards.'),
    Q('Wind increases transpiration by:', ['removing the moist air near the leaf', 'adding water vapour', 'closing stomata', 'cooling roots'], 'Steeper gradient.'),
    Q('Sunken stomata reduce water loss because:', ['humid air is trapped above them', 'they are larger', 'they open more', 'they are in the roots'], 'A smaller gradient.'),
  ],
  'ab-phloem-6': [
    Q('The main sugar carried in phloem is:', ['sucrose', 'glucose', 'starch', 'cellulose'], 'Non-reducing and soluble.'),
    Q('Translocation can occur:', ['both up and down the plant', 'only upwards', 'only downwards', 'only at night'], 'From any source to any sink.'),
    Q('At the sink, sucrose is:', ['unloaded and used or stored', 'loaded', 'made', 'converted to water'], 'Water then leaves the phloem.'),
    Q('The mass-flow hypothesis was proposed by:', ['Münch', 'Mitchell', 'Calvin', 'Krebs'], 'Pressure-flow.'),
  ],
  'ab-phloemevidence-6': [
    Q('Autoradiography detects:', ['radioactive substances', 'enzymes', 'starch', 'lignin'], 'For example labelled sugars.'),
    Q('Translocation speed of up to about 1 m per hour is evidence that:', ['it is far faster than diffusion alone', 'it is diffusion', 'the xylem is involved', 'it does not happen'], 'Supports bulk flow.'),
    Q('A puzzle for mass flow is the presence of:', ['sieve plates that would resist flow', 'sucrose in the sap', 'pressure in the sap', 'companion cells with nuclei'], 'Why have barriers?'),
    Q('Leaves above a ring of removed bark do not wilt because:', ['the xylem inside is not damaged', 'phloem carries water', 'roots stop working', 'stomata close'], 'Water still reaches them.'),
  ],
  'ab-doublecirc-6': [
    Q('In a single circulation, blood loses pressure in the:', ['gill capillaries', 'heart', 'veins only', 'aorta'], 'Before reaching the body.'),
    Q('Insects have:', ['an open circulation', 'a double circulation', 'a closed single circulation', 'no blood'], 'Blood bathes the organs.'),
    Q('Blood enters the left atrium from the:', ['pulmonary veins', 'vena cava', 'aorta', 'pulmonary artery'], 'Returning from the lungs.'),
    Q('The tendons holding the AV valves are the:', ['chordae tendineae', 'Purkyne fibres', 'semilunar valves', 'coronary arteries'], 'They stop the valves turning inside out.'),
  ],
  'ab-heart-6': [
    Q('The SAN is in the wall of the:', ['right atrium', 'left ventricle', 'aorta', 'septum'], 'The pacemaker.'),
    Q('The vagus nerve:', ['slows the heart', 'speeds the heart', 'starts each beat', 'carries blood'], 'Parasympathetic.'),
    Q('Adrenaline:', ['increases the heart rate', 'stops the heart', 'slows the heart', 'has no effect'], 'Fight or flight.'),
    Q('The heart rate is controlled by the cardiovascular centre in the:', ['medulla of the brain', 'cerebrum', 'spinal cord only', 'liver'], 'It sends sympathetic and vagus impulses.'),
  ],
  'ab-cardiaccycle-6': [
    Q('A heartbeat cycle at 75 beats per minute lasts about:', ['0.8 s', '1.5 s', '0.1 s', '8 s'], '60 ÷ 75.'),
    Q('The second heart sound ("dub") is caused by:', ['closing of the semilunar valves', 'closing of the AV valves', 'atrial contraction', 'blood entering the atria'], 'At the start of diastole.'),
    Q('The maximum pressure in the left ventricle at rest is about:', ['16 kPa (120 mm Hg)', '1.5 kPa', '50 kPa', '0 kPa'], 'Systolic pressure.'),
    Q('Cardiac output at rest is about:', ['5 dm³ per minute', '50 dm³ per minute', '0.5 dm³ per minute', '500 cm³ per hour'], 'Stroke volume × heart rate.'),
  ],
  'ab-ecg-6': [
    Q('The T wave shows:', ['recovery (repolarisation) of the ventricles', 'atrial contraction', 'excitation of the ventricles', 'valve closure'], 'After the QRS.'),
    Q('Standard ECG paper moves at:', ['25 mm per second', '1 mm per second', '100 mm per second', '5 mm per minute'], 'Used to calculate rate.'),
    Q('A resting heart rate above 100 per minute is called:', ['tachycardia', 'bradycardia', 'fibrillation', 'hypertension'], 'Too fast.'),
    Q('A heart attack (myocardial infarction) is caused by:', ['blockage of a coronary artery, killing part of the heart muscle', 'a fast heart rate', 'low blood sugar', 'a broken valve'], 'Muscle starved of oxygen.'),
  ],
  'ab-vessels-6': [
    Q('Capillary walls are made of:', ['one layer of endothelial cells', 'thick muscle', 'elastic tissue only', 'cartilage'], 'Short diffusion distance.'),
    Q('Excess tissue fluid returns to the blood through:', ['lymph vessels', 'arteries', 'the kidneys only', 'the lungs'], 'Lymph drains into veins.'),
    Q('Normal blood pressure in a young adult is about:', ['120/80 mm Hg', '200/150 mm Hg', '60/30 mm Hg', '12/8 mm Hg'], 'Systolic/diastolic.'),
    Q('Elastic tissue in artery walls:', ['stretches and recoils to smooth the flow', 'prevents backflow', 'makes blood cells', 'exchanges gases'], 'Maintains pressure in diastole.'),
  ],

  // ---------- Lower Sixth, term 3 ----------
  'ab-malaria-6': [
    Q('The stage of Plasmodium injected by a mosquito is the:', ['sporozoite', 'merozoite', 'gametocyte', 'zygote'], 'It goes to the liver.'),
    Q('Gametocytes fuse inside the:', ['mosquito’s gut', 'human liver', 'human blood', 'human skin'], 'Sexual reproduction in the vector.'),
    Q('ACT stands for:', ['artemisinin-based combination therapy', 'antibody cell treatment', 'active cholera test', 'anti-cholera toxin'], 'First-line malaria treatment.'),
    Q('A problem for malaria control is:', ['resistance of parasites to drugs and of mosquitoes to insecticides', 'too many vaccines', 'clean water', 'cold weather'], 'Use combined measures.'),
  ],
  'ab-cholera-hiv-6': [
    Q('Cholera kills mainly through:', ['dehydration from severe diarrhoea', 'fever', 'bleeding', 'paralysis'], 'Loss of water and salts.'),
    Q('HIV binds to the receptor:', ['CD4', 'insulin receptor', 'haemoglobin', 'CD8 only'], 'On T helper cells.'),
    Q('AIDS is the stage when:', ['the immune system fails and opportunistic infections appear', 'HIV first enters', 'antibodies first appear', 'the virus disappears'], 'T helper cells are very low.'),
    Q('Antiretroviral therapy:', ['keeps HIV levels low and prevents spread when effective', 'cures HIV completely', 'is a vaccine', 'kills mosquitoes'], 'Lifelong treatment.'),
  ],
  'ab-nonspecific-6': [
    Q('Histamine released in inflammation causes:', ['widening and leakiness of blood vessels', 'antibody production', 'clotting only', 'fever only'], 'Bringing defences to the site.'),
    Q('Stomach acid is a:', ['chemical barrier', 'physical barrier', 'specific defence', 'vaccine'], 'Kills many swallowed microbes.'),
    Q('Macrophages help the specific response by:', ['presenting antigens', 'making antibodies', 'killing infected cells directly', 'carrying oxygen'], 'Antigen-presenting cells.'),
    Q('A phagosome fuses with:', ['lysosomes', 'mitochondria', 'the nucleus', 'ribosomes'], 'Enzymes digest the pathogen.'),
  ],
  'ab-specific-6': [
    Q('T lymphocytes mature in the:', ['thymus', 'bone marrow', 'spleen', 'liver'], 'B cells in the bone marrow.'),
    Q('Cytokines are released by:', ['T helper cells', 'red blood cells', 'platelets', 'neutrophils only'], 'Chemical signals.'),
    Q('Clumping of pathogens by antibodies is:', ['agglutination', 'opsonisation', 'phagocytosis', 'neutralisation'], 'Easier for phagocytes.'),
    Q('Each lymphocyte recognises:', ['one specific antigen', 'all antigens', 'no antigens', 'only bacteria'], 'Receptors of one shape.'),
  ],
  'ab-vaccines-6': [
    Q('Antibodies in colostrum give a baby:', ['natural passive immunity', 'artificial active immunity', 'lifelong immunity', 'no protection'], 'Short-lived.'),
    Q('An attenuated vaccine contains:', ['weakened live pathogens', 'antibodies', 'antibiotics', 'dead white cells'], 'They cannot cause disease.'),
    Q('Smallpox was declared eradicated in:', ['1980', '1950', '2000', '1960'], 'Through vaccination.'),
    Q('Active immunity lasts longer than passive because:', ['memory cells are made', 'antibodies never break down', 'more antibodies are injected', 'it is faster'], 'Memory gives a secondary response.'),
  ],
  'ab-taxonomy-6': [
    Q('The taxon between order and genus is:', ['family', 'class', 'phylum', 'kingdom'], 'Order, family, genus.'),
    Q('The scientific name of maize is:', ['Zea mays', 'Theobroma cacao', 'Homo sapiens', 'Felis catus'], 'Genus Zea.'),
    Q('Scientific names are written in:', ['italics, or underlined by hand', 'capitals', 'bold only', 'any style'], 'Genus capitalised.'),
    Q('A mule cannot found a new species because it is:', ['sterile', 'too large', 'a hybrid of two families', 'a plant'], 'No fertile offspring.'),
  ],
  'ab-kingdoms-6': [
    Q('Fungal cell walls are made of:', ['chitin', 'cellulose', 'peptidoglycan', 'lignin'], 'Like insect exoskeletons.'),
    Q('Algae belong to the kingdom:', ['Protoctista', 'Plantae', 'Fungi', 'Prokaryotae'], 'In the five-kingdom system.'),
    Q('The three-domain system is based on:', ['ribosomal RNA sequences', 'colour', 'size', 'habitat'], 'Woese, 1990.'),
    Q('A good dichotomous key uses features that are:', ['easy to see and not variable', 'size and colour only', 'invisible', 'behavioural only'], 'Reliable features.'),
  ],
  'ab-paper1-6': [
    Q('The A Level Biology practical in 2026 was held:', ['11 to 15 May', 'in July', 'on 3 June', 'in December'], 'Before the written papers.'),
    Q('In data items, you should first read:', ['the axes and units', 'the last option', 'the title only', 'nothing'], 'Avoid misreading.'),
    Q('Lower Sixth topics are examined:', ['at the end of Upper Sixth with the rest of the course', 'never', 'only in Lower Sixth', 'only in the practical'], 'Keep good notes.'),
    Q('Glycolysis takes place in the:', ['cytoplasm', 'mitochondrial matrix', 'cristae', 'chloroplast'], 'A common trap.'),
  ],
  'ab-essay-6': [
    Q('Biological drawings should have:', ['clear continuous lines without shading', 'shading and colour', 'sketchy lines', 'labels on the drawing'], 'Pencil, clear outlines.'),
    Q('"Compare" requires:', ['similarities and differences, point by point', 'a description of one thing', 'a diagram only', 'a list of names'], 'Matched points.'),
    Q('A high-power drawing shows:', ['a few cells in detail', 'tissue outlines only', 'the whole organ', 'no cells'], 'Low-power plans show tissues.'),
    Q('In an essay on a pathway you should give:', ['the site, inputs and outputs of each stage in order', 'only definitions', 'unrelated facts', 'only a diagram'], 'A logical sequence.'),
  ],
};
