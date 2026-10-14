// A Level Biology lessons for Lower Sixth, term 1: microscopy, biological
// molecules, enzymes, cell ultrastructure, prokaryotes, membranes and
// transport, and plant and animal tissues. Original text written for this
// app. **double asterisks** mark key terms; `examples` are worked examples.

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

export const LESSONS_L6A = [
  // ---------- 1. Microscopy ----------
  L('ab-microscopes-6', 'ab-l6-microscopy', '1.1', 'Light and electron microscopes', 14, ['Cells', 'Microscopy'], [
    'A Level Biology studies life from molecules to ecosystems, with a heavy practical part: the A Level examination includes a practical paper, so laboratory skills count as much as theory.',
    '**Magnification** is how many times larger the image is than the object. **Resolution** (resolving power) is the ability to distinguish two points close together as separate. Increasing magnification without better resolution only gives a larger blur.\n- **light microscope**: uses light focused by glass lenses; resolution about **0.2 µm** (limited by the wavelength of light); useful magnification up to about ×1500; can view **living** cells in colour\n- **transmission electron microscope (TEM)**: a beam of electrons passes through a very thin section; resolution about **0.5 nm**; magnification ×500 000 or more; shows internal ultrastructure\n- **scanning electron microscope (SEM)**: electrons bounce off a coated surface; resolution about **10 nm**; gives **three-dimensional** images of surfaces.',
    'Electron microscopes need specimens in a **vacuum**, so cells must be dead, fixed and stained with heavy metals; images are black and white (colour is added by computer), and preparation can create **artefacts**.',
  ], 'light-microscope', 'Resolution, not magnification, limits what you can see.',
  ['Why can the TEM resolve ribosomes but the light microscope cannot?', ['electrons have a far shorter wavelength than light', 'the TEM uses brighter light', 'ribosomes are coloured', 'the TEM magnifies only ×1500'], 'Ribosomes (about 25 nm) are below the light microscope’s 0.2 µm limit.'],
  [['Magnification', 'How many times larger the image is than the object.'], ['Resolution', 'The ability to distinguish two close points as separate.'], ['Artefact', 'A structure seen in a prepared specimen that is not present in the living cell.']],
  [
    { q: 'Give two advantages of the TEM and two of the light microscope.', steps: ['**TEM: much higher resolution (about 0.5 nm) and magnification; shows organelle ultrastructure.**', '**Light microscope: living cells can be viewed; natural colour; simple, cheap preparation.**'] },
  ]),

  L('ab-graticule-6', 'ab-l6-microscopy', '1.2', 'Magnification calculations and the eyepiece graticule', 15, ['Cells', 'Microscopy'], [
    'The magnification equation: **magnification = image size ÷ actual size** (I = A × M). Always convert to the same units first: 1 mm = 1000 µm; 1 µm = 1000 nm.',
    'To measure cells, an **eyepiece graticule** (a scale in the eyepiece, in arbitrary units) is **calibrated** against a **stage micrometer** (a slide ruled in 0.01 mm = 10 µm divisions):\n- line up the two scales\n- count how many eyepiece units match a number of stage divisions\n- calculate the value of one eyepiece unit at that objective\n- measure the cell in eyepiece units and convert.\nRecalibrate for **every objective lens**, because the graticule stays the same size while the specimen image changes.',
    'Report sizes in **µm** for cells and organelles; give a sensible number of significant figures; state the magnification of drawings as "×400".',
  ], 'ab-graticule', 'Convert units first; recalibrate for each objective.',
  ['If 40 eyepiece units equal 10 stage divisions (each 10 µm), one eyepiece unit equals:', ['2.5 µm', '4 µm', '0.25 µm', '25 µm'], '10 × 10 µm = 100 µm; 100 ÷ 40 = 2.5 µm.'],
  [['Eyepiece graticule', 'A scale in the eyepiece used to measure specimens.'], ['Stage micrometer', 'A slide with an accurate scale (divisions of 0.01 mm) used to calibrate the graticule.'], ['Calibration', 'Finding the true value of one graticule unit at a given magnification.']],
  [
    { q: 'At ×400, one eyepiece unit = 2.5 µm. A cheek cell measures 24 eyepiece units. Find its actual size and the magnification of a 60 mm drawing of it.', steps: ['Actual size = 24 × 2.5 = **60 µm.**', 'Drawing = 60 mm = 60 000 µm.', 'Magnification = 60 000 ÷ 60 = **×1000.**'] },
  ]),

  // ---------- 2. Carbohydrates and lipids ----------
  L('ab-carbs-6', 'ab-l6-carbs', '2.1', 'Carbohydrates', 16, ['Biological molecules'], [
    '**Monosaccharides** are single sugar units with the formula (CH₂O)ₙ: trioses (3C), pentoses (5C: ribose, deoxyribose) and hexoses (6C: glucose, fructose, galactose). Glucose exists as two ring forms: **α-glucose** (the –OH on carbon 1 below the ring) and **β-glucose** (above the ring).',
    'Two monosaccharides join by a **condensation** reaction, releasing water and forming a **glycosidic bond**; **hydrolysis** (adding water) breaks it:\n- maltose = α-glucose + α-glucose (α-1,4 bond)\n- sucrose = glucose + fructose (non-reducing)\n- lactose = glucose + galactose.',
    '**Polysaccharides**:\n- **starch** (plant store): **amylose**, an unbranched helix of α-1,4-linked glucose, compact; and **amylopectin**, branched with α-1,6 bonds\n- **glycogen** (animal and fungal store): like amylopectin but **more branched**, giving many ends for rapid hydrolysis; stored in liver and muscle\n- **cellulose** (plant cell walls): **β-glucose** with every other unit inverted, forming **straight chains**; hydrogen bonds link parallel chains into **microfibrils** of great tensile strength.\nStarch and glycogen are insoluble, so they do not affect water potential.',
  ], 'ab-carbohydrates', 'α for storage (starch, glycogen); β for structure (cellulose).',
  ['Why is glycogen well suited to storing energy in animals?', ['it is compact, insoluble and highly branched for rapid release of glucose', 'it is soluble and raises water potential', 'it forms microfibrils', 'it contains nitrogen'], 'Many ends for enzymes to act on at once.'],
  [['Glycosidic bond', 'The bond joining two monosaccharides.'], ['Condensation', 'A reaction that joins molecules and releases water.'], ['Hydrolysis', 'A reaction that breaks a bond using water.'], ['Microfibril', 'A bundle of cellulose chains held by hydrogen bonds.']],
  [
    { q: 'Explain how the structure of cellulose suits its function.', steps: ['**β-glucose units with alternate units inverted form long straight chains.**', '**Hydrogen bonds between parallel chains bundle them into strong microfibrils.**', '**Microfibrils give the cell wall high tensile strength so cells can become turgid without bursting.**'] },
  ]),

  L('ab-lipids-6', 'ab-l6-carbs', '2.2', 'Lipids', 14, ['Biological molecules'], [
    'A **triglyceride** forms when one **glycerol** joins three **fatty acids** by **condensation**, forming three **ester bonds**.\n- **saturated** fatty acids have no C=C double bonds; chains pack closely, so animal fats are solid at room temperature\n- **unsaturated** fatty acids have one (mono-) or more (poly-) C=C bonds that **kink** the chain, so plant oils (palm oil, groundnut oil) are liquid.',
    'Functions of triglycerides:\n- **energy store**: about **37 to 39 kJ per gram**, more than twice carbohydrate (about 17 kJ/g), because of many C–H bonds\n- **insulation** (fat under the skin) and **protection** of organs\n- **metabolic water** when oxidised (camels, desert animals)\n- **buoyancy**.',
    'In a **phospholipid**, one fatty acid is replaced by a **phosphate group**. The molecule has a **hydrophilic** (water-loving) head and two **hydrophobic** tails, so in water phospholipids form a **bilayer**: the basis of all cell membranes. Other lipids include **cholesterol** (membranes, steroid hormones) and **waxes** (waterproof cuticles).',
  ], 'ab-lipids', 'Glycerol + 3 fatty acids; ester bonds.',
  ['Why are phospholipids able to form membranes?', ['their hydrophilic heads face water and hydrophobic tails face inwards', 'they are soluble in water', 'they have three fatty acids', 'they are made of glucose'], 'A self-assembling bilayer.'],
  [['Triglyceride', 'A lipid of glycerol and three fatty acids.'], ['Ester bond', 'The bond between glycerol and a fatty acid.'], ['Unsaturated', 'Containing one or more C=C double bonds.'], ['Hydrophobic', 'Repelled by water.']],
  [
    { q: 'How many water molecules are released when a triglyceride forms, and how many are needed to hydrolyse it?', steps: ['**Three ester bonds form, each releasing one water molecule: 3 molecules released.**', '**Hydrolysis needs 3 water molecules to break the 3 ester bonds.**'] },
  ]),

  L('ab-foodtests-6', 'ab-l6-carbs', '2.3', 'Biochemical tests and semi-quantitative methods', 15, ['Biological molecules', 'Practical'], [
    'Standard tests:\n- **reducing sugars** (all monosaccharides, maltose, lactose): heat with **Benedict’s solution** at about 80 °C; blue → green → yellow → orange → **brick-red** precipitate\n- **non-reducing sugars** (sucrose): first test with Benedict’s (negative); then boil a fresh sample with **dilute hydrochloric acid** to hydrolyse it, **neutralise** with sodium hydrogencarbonate, and test again: now positive\n- **starch**: **iodine** in potassium iodide turns from yellow-brown to **blue-black**\n- **lipids**: **emulsion test**: shake with **ethanol**, pour into water: a **milky white** emulsion\n- **proteins**: **biuret** reagent (sodium hydroxide + dilute copper sulfate): **purple (lilac)**.',
    'The Benedict’s test can be made **semi-quantitative**: use equal volumes and heating times, compare colours with a series of known glucose concentrations, or filter, dry and weigh the precipitate, or use a **colorimeter** to measure the remaining blue colour of the solution.',
    'Practical care: use a water bath rather than a flame; use the same volumes; record colours precisely; wear eye protection.',
  ], 'food-test-apparatus', 'Non-reducing sugar: acid, neutralise, then Benedict’s.',
  ['Why must the acid be neutralised before the second Benedict’s test?', ['Benedict’s solution works only in alkaline conditions', 'the acid turns it red', 'to cool the solution', 'to remove starch'], 'Neutralise with sodium hydrogencarbonate.'],
  [['Reducing sugar', 'A sugar that reduces copper(II) ions in Benedict’s solution.'], ['Emulsion test', 'The test for lipids using ethanol and water.'], ['Colorimeter', 'An instrument that measures how much light a solution absorbs.']],
  [
    { q: 'A solution gives no colour change with Benedict’s, but a brick-red precipitate after acid hydrolysis and neutralisation. What does it contain?', steps: ['**No reducing sugar at first.**', '**A non-reducing sugar, such as sucrose, was hydrolysed into reducing monosaccharides (glucose and fructose).**'] },
  ]),

  // ---------- 3. Proteins and nucleic acids ----------
  L('ab-proteins-6', 'ab-l6-proteins', '3.1', 'Amino acids and protein structure', 16, ['Biological molecules'], [
    'An **amino acid** has a central carbon atom bonded to an **amine group** (–NH₂), a **carboxyl group** (–COOH), a hydrogen atom and a variable **R group**. Twenty different R groups give twenty amino acids in living things. Two amino acids join by **condensation** to form a **peptide bond** (a dipeptide); many form a **polypeptide**.',
    'Levels of structure:\n- **primary**: the **sequence** of amino acids, coded by the gene\n- **secondary**: the chain coils into an **α-helix** or folds into a **β-pleated sheet**, held by **hydrogen bonds** between –NH and –C=O groups\n- **tertiary**: the whole chain folds into a specific **3D shape**, held by **hydrogen bonds**, **ionic bonds**, **disulfide bridges** (between cysteines) and **hydrophobic interactions**\n- **quaternary**: two or more polypeptides combined, sometimes with a non-protein **prosthetic group**: **haemoglobin** has four chains (2 α, 2 β), each with a **haem** group containing iron.',
    '**Globular** proteins (enzymes, antibodies, haemoglobin) are compact and soluble, with hydrophilic R groups outside. **Fibrous** proteins (**collagen**, keratin) are long, insoluble and strong: collagen is three chains wound into a triple helix, cross-linked into fibres, in tendons, bone and skin. Heat and extremes of pH **denature** proteins by breaking the bonds of tertiary structure.',
  ], 'ab-protein-levels', 'Primary sequence decides everything that follows.',
  ['Which bonds are broken when an enzyme is denatured by heat?', ['hydrogen, ionic and other bonds of tertiary structure', 'peptide bonds', 'glycosidic bonds', 'ester bonds'], 'The primary sequence remains.'],
  [['Peptide bond', 'The bond between two amino acids.'], ['Tertiary structure', 'The specific 3D folding of a polypeptide.'], ['Prosthetic group', 'A non-protein part bound to a protein, such as haem.'], ['Denaturation', 'Loss of a protein’s 3D shape and function.']],
  [
    { q: 'A change in one base of the haemoglobin gene replaces glutamic acid with valine. Explain why this can change the protein.', steps: ['**The primary structure changes by one amino acid.**', '**Valine has a hydrophobic R group, unlike glutamic acid, so the bonds and shape of the molecule change.**', '**In sickle-cell haemoglobin, molecules stick together at low oxygen, distorting red cells.**'] },
  ]),

  L('ab-nucleic-6', 'ab-l6-proteins', '3.2', 'Nucleotides, DNA and RNA', 15, ['Biological molecules'], [
    'A **nucleotide** has three parts: a **pentose sugar** (deoxyribose in DNA, ribose in RNA), a **phosphate group** and a nitrogenous **base**. Bases are **purines** (two rings: adenine, guanine) or **pyrimidines** (one ring: cytosine, thymine, uracil). Nucleotides join by **phosphodiester bonds** into a sugar-phosphate backbone.',
    '**DNA** (described by Watson and Crick in 1953, using Rosalind Franklin’s X-ray images):\n- two **antiparallel** polynucleotide strands wound into a **double helix**\n- bases pair by hydrogen bonds: **A with T** (two bonds), **C with G** (three bonds): **complementary base pairing**\n- so a purine always pairs with a pyrimidine, keeping the helix the same width.',
    '**RNA** is usually **single-stranded**, contains **ribose** and the base **uracil** instead of thymine:\n- **messenger RNA (mRNA)** carries the code from DNA to ribosomes\n- **transfer RNA (tRNA)** brings amino acids to the ribosome\n- **ribosomal RNA (rRNA)** forms part of ribosomes.\nATP is also a nucleotide: adenine, ribose and three phosphates.',
  ], 'dna-rna', 'A–T, C–G; RNA has U instead of T.',
  ['If 30% of the bases in a DNA molecule are adenine, the percentage of guanine is:', ['20%', '30%', '40%', '70%'], 'A = T = 30%, so C + G = 40%, G = 20%.'],
  [['Nucleotide', 'A sugar, a phosphate and a base.'], ['Complementary base pairing', 'A pairing with T (or U) and C with G.'], ['Antiparallel', 'Running in opposite directions.'], ['Phosphodiester bond', 'The bond linking nucleotides in a strand.']],
  [
    { q: 'Give three differences between DNA and RNA.', steps: ['**Sugar: deoxyribose in DNA, ribose in RNA.**', '**Bases: thymine in DNA, uracil in RNA.**', '**Strands: DNA is double-stranded; RNA is usually single-stranded and shorter.**'] },
  ]),

  // ---------- 4. Enzymes ----------
  L('ab-enzymeaction-6', 'ab-l6-enzymes', '4.1', 'How enzymes work', 14, ['Enzymes'], [
    '**Enzymes** are **globular proteins** that act as biological **catalysts**: they speed up reactions without being used up. Every reaction needs **activation energy** to start; an enzyme provides an alternative pathway with a **lower activation energy**, so reactions run fast at body temperature.',
    'The substrate binds to the **active site**, a small region whose shape and charge are complementary to the substrate, forming an **enzyme-substrate complex**; the products are released and the enzyme is free again.\n- **lock-and-key** model (Fischer): the active site has a fixed shape that fits only one substrate\n- **induced-fit** model (Koshland): the active site changes shape slightly as the substrate binds, putting strain on bonds and lowering activation energy. This explains why some enzymes act on a group of similar substrates.',
    'Enzymes are **specific**, work in small amounts, and can be **intracellular** (catalase in liver cells) or **extracellular** (amylase in saliva). The **turnover number** is the number of substrate molecules converted per second by one enzyme molecule: catalase handles millions.',
  ], 'ab-activation-energy', 'Lower activation energy; the active site fits the substrate.',
  ['Enzymes are specific because:', ['each active site is complementary to a particular substrate', 'they are carbohydrates', 'they work at any temperature', 'they are used up'], 'Shape and charge.'],
  [['Catalyst', 'A substance that speeds up a reaction without being used up.'], ['Activation energy', 'The energy needed to start a reaction.'], ['Active site', 'The region of an enzyme where the substrate binds.'], ['Induced fit', 'The change in active-site shape on substrate binding.']],
  [
    { q: 'Explain why one molecule of catalase can break down millions of hydrogen peroxide molecules.', steps: ['**The enzyme is not changed or used up in the reaction.**', '**After the products leave, the active site is free to bind another substrate molecule.**', '**Catalase has a very high turnover number.**'] },
  ]),

  L('ab-enzymefactors-6', 'ab-l6-enzymes', '4.2', 'Factors affecting enzyme activity; Vmax and Km', 16, ['Enzymes', 'Practical'], [
    'Factors:\n- **temperature**: raising it increases kinetic energy and collisions, so rate rises (Q₁₀ about 2 for each 10 °C) up to the **optimum** (about 37 °C for human enzymes); above it, bonds holding the tertiary structure break and the enzyme is **denatured**\n- **pH**: each enzyme has an optimum pH (pepsin about 2, salivary amylase about 7, trypsin about 8); other pH values change ionic and hydrogen bonding at the active site\n- **enzyme concentration**: with plenty of substrate, rate is proportional to enzyme concentration\n- **substrate concentration**: rate rises, then levels off when all active sites are occupied.',
    'The maximum rate is **Vmax**. The **Michaelis constant, Km**, is the substrate concentration at which the rate is **half of Vmax**. A **low Km** means the enzyme reaches half its maximum rate at low substrate concentration: it has a **high affinity** for its substrate.',
    'Practical: measure the **initial rate** (the gradient at the start of a product-time graph) at several substrate concentrations, keeping temperature, pH and enzyme concentration constant; plot rate against substrate concentration to find Vmax and Km. Catalase activity can be followed by the volume of oxygen collected per minute.',
  ], 'ab-enzyme-kinetics', 'Initial rate; Vmax at saturation; Km at half Vmax.',
  ['Why does the rate level off at high substrate concentration?', ['all active sites are occupied (enzyme is saturated)', 'the enzyme is denatured', 'the substrate runs out', 'the pH changes'], 'Enzyme concentration becomes limiting.'],
  [['Optimum', 'The condition at which an enzyme works fastest.'], ['Vmax', 'The maximum rate of an enzyme-catalysed reaction.'], ['Km', 'The substrate concentration giving half the maximum rate.'], ['Initial rate', 'The rate at the start of a reaction.']],
  [
    { q: 'An enzyme has Vmax = 40 µmol min⁻¹ and Km = 2 mmol dm⁻³. What is the rate at 2 mmol dm⁻³ substrate, and what does a smaller Km for a second enzyme mean?', steps: ['**At [S] = Km, the rate is Vmax ÷ 2 = 20 µmol min⁻¹.**', '**A smaller Km means the second enzyme reaches half its maximum rate at a lower substrate concentration: a higher affinity for the substrate.**'] },
  ]),

  L('ab-inhibition-6', 'ab-l6-enzymes', '4.3', 'Enzyme inhibition and control', 15, ['Enzymes'], [
    '- **Competitive inhibitors** have a shape similar to the substrate and bind to the **active site**, blocking it. The effect is reduced by raising substrate concentration: **Vmax is unchanged**, but **Km increases**. Example: malonate inhibits succinate dehydrogenase in the Krebs cycle\n- **Non-competitive inhibitors** bind **elsewhere** on the enzyme, changing the shape of the active site. Adding substrate does not help: **Vmax falls**. Examples: heavy metal ions such as mercury and lead; cyanide inhibits an enzyme of the respiratory chain.',
    '**Reversible** inhibitors bind loosely and can leave; **irreversible** inhibitors bind permanently (many nerve gases and some pesticides). Many drugs and pesticides work as enzyme inhibitors.',
    '**Allosteric** enzymes have a second site that regulates activity. In **end-product (feedback) inhibition**, the final product of a pathway inhibits an early enzyme of the same pathway. When the product is plentiful, the pathway slows; when it is used up, the pathway speeds up again: a form of **negative feedback** that saves resources.',
  ], 'ab-enzyme-kinetics', 'Competitive: same Vmax, higher Km. Non-competitive: lower Vmax.',
  ['Adding much more substrate overcomes:', ['competitive inhibition', 'non-competitive inhibition', 'denaturation', 'irreversible inhibition'], 'The substrate out-competes the inhibitor.'],
  [['Competitive inhibitor', 'An inhibitor that binds the active site, competing with the substrate.'], ['Non-competitive inhibitor', 'An inhibitor that binds elsewhere and changes the enzyme’s shape.'], ['End-product inhibition', 'Inhibition of an early enzyme by the final product of a pathway.']],
  [
    { q: 'A drug reduces an enzyme’s rate, but at very high substrate concentration the rate reaches the same maximum as without the drug. What kind of inhibitor is it? Explain.', steps: ['**A competitive inhibitor.**', '**At high substrate concentration, substrate molecules occupy almost all active sites, out-competing the inhibitor.**', '**So Vmax is reached again; only Km is raised.**'] },
  ]),

  // ---------- 5. Organelles ----------
  L('ab-organelles-6', 'ab-l6-organelles', '5.1', 'The nucleus and the endomembrane system', 15, ['Cells'], [
    'Under the electron microscope, eukaryotic cells show **membrane-bound organelles**:\n- **nucleus**: bounded by a **nuclear envelope** (double membrane) with **nuclear pores** through which mRNA leaves; contains **chromatin** (DNA and proteins) and a **nucleolus**, which makes rRNA and assembles ribosomes\n- **rough endoplasmic reticulum (RER)**: flattened sacs covered with **ribosomes**; proteins made there enter the cisternae and are transported\n- **smooth endoplasmic reticulum (SER)**: no ribosomes; makes **lipids** and **steroids**; detoxifies drugs in liver cells.',
    '- **ribosomes**: made of rRNA and protein; **80S** in the cytoplasm of eukaryotes (70S in prokaryotes, mitochondria and chloroplasts); free ribosomes make proteins for use in the cytoplasm\n- **Golgi apparatus**: a stack of flattened sacs that receives proteins in vesicles from the RER, **modifies** them (adding carbohydrate to make glycoproteins), **packages** them in vesicles and sends them to the membrane or to lysosomes\n- **lysosomes**: vesicles of **hydrolytic enzymes** that digest worn-out organelles and engulfed bacteria.',
    'The **secretion of a protein** (such as a digestive enzyme from the pancreas): DNA transcribed in the nucleus → mRNA through a nuclear pore → translated on ribosomes of the RER → protein carried in a vesicle to the Golgi → modified and packaged → secretory vesicle fuses with the cell membrane (**exocytosis**).',
  ], 'animal-cell', 'Nucleus → RER → Golgi → vesicle → membrane.',
  ['Which organelle adds carbohydrate to proteins to make glycoproteins?', ['the Golgi apparatus', 'the nucleolus', 'the mitochondrion', 'the lysosome'], 'Modification and packaging.'],
  [['Nuclear envelope', 'The double membrane around the nucleus, with pores.'], ['Rough ER', 'Endoplasmic reticulum with ribosomes, making and transporting proteins.'], ['Golgi apparatus', 'Stacked sacs that modify and package proteins.'], ['Exocytosis', 'Release of materials by fusion of vesicles with the cell membrane.']],
  [
    { q: 'Pancreatic cells that secrete enzymes have much RER and a large Golgi apparatus. Explain.', steps: ['**The enzymes are proteins made on ribosomes of the RER.**', '**The Golgi apparatus modifies and packages them into secretory vesicles.**', '**Large amounts of protein for secretion need much RER and Golgi.**'] },
  ]),

  L('ab-organelles2-6', 'ab-l6-organelles', '5.2', 'Mitochondria, chloroplasts and other structures', 14, ['Cells'], [
    '- **mitochondria**: double membrane; the inner membrane folds into **cristae** (large area for the electron transport chain and ATP synthase); the **matrix** holds enzymes of the Krebs cycle, circular DNA and 70S ribosomes. Site of **aerobic respiration**; numerous in active cells (muscle, sperm, root hair cells)\n- **chloroplasts**: double membrane; internal **thylakoids** stacked into **grana** (light-dependent stage), surrounded by **stroma** (Calvin cycle); contain DNA, 70S ribosomes and starch grains.',
    '- **centrioles**: pairs of hollow cylinders of microtubules near the nucleus of animal cells; organise the spindle in cell division\n- **cytoskeleton**: microtubules and microfilaments that support the cell, move organelles and allow movement (cilia and flagella have a "9 + 2" arrangement of microtubules)\n- **plant cell structures**: a **cellulose cell wall** (support, prevents bursting); a large permanent **vacuole** bounded by the **tonoplast** (stores cell sap, keeps the cell turgid); **plasmodesmata**, strands of cytoplasm through the walls linking neighbouring cells.',
    'Compare plant and animal cells: both have nucleus, ER, ribosomes, Golgi, mitochondria; plant cells add cell wall, chloroplasts, large vacuole and plasmodesmata; animal cells have centrioles and often microvilli, and store glycogen rather than starch.',
  ], 'plant-cell', 'Cristae for ATP; thylakoids for light; stroma for the Calvin cycle.',
  ['Why do sperm cells contain many mitochondria?', ['to supply ATP for swimming', 'to store food', 'to make proteins', 'to photosynthesise'], 'Movement needs energy.'],
  [['Cristae', 'Folds of the inner mitochondrial membrane.'], ['Thylakoid', 'A flattened membrane sac in a chloroplast.'], ['Tonoplast', 'The membrane around a plant vacuole.'], ['Plasmodesmata', 'Cytoplasmic links through plant cell walls.']],
  [
    { q: 'List three structures found in a palisade cell but not in a liver cell, and one found in a liver cell but not in the palisade cell.', steps: ['**Palisade cell only: cellulose cell wall, chloroplasts, large permanent vacuole (also plasmodesmata).**', '**Liver cell only: centrioles (and glycogen granules).**'] },
  ]),

  // ---------- 6. Prokaryotes ----------
  L('ab-prokaryotes-6', 'ab-l6-prokaryotes', '6.1', 'The prokaryotic cell and Gram staining', 14, ['Cells', 'Practical'], [
    '**Prokaryotes** (bacteria and archaea) are small (about 1 to 5 µm) with no membrane-bound organelles:\n- **nucleoid**: a single **circular DNA** molecule, not in a nucleus, with no histones\n- **plasmids**: small extra DNA circles, often carrying genes for antibiotic resistance\n- **70S ribosomes**\n- **cell wall** of **peptidoglycan (murein)**\n- some have a **capsule** (slime layer), **flagella** for movement and **pili** for attachment and exchanging DNA.',
    'Eukaryotes (protoctists, fungi, plants, animals) are larger (10 to 100 µm), with a nucleus, membrane-bound organelles, linear chromosomes with histones and 80S ribosomes.',
    '**Gram staining** separates bacteria by wall structure: stain with **crystal violet**, fix with **iodine**, wash with **alcohol**, counterstain with **safranin**.\n- **Gram-positive** bacteria have a **thick peptidoglycan** wall that keeps the violet stain: they look **purple**\n- **Gram-negative** bacteria have a thin wall and an outer lipid membrane; the violet is washed out and they take the red safranin: they look **pink**.\nThis matters in medicine: penicillin works best on Gram-positive bacteria.',
  ], 'ab-pro-eukaryote', 'Purple = Gram-positive (thick wall); pink = Gram-negative.',
  ['A bacterium appears pink after Gram staining. It is:', ['Gram-negative, with a thin wall and outer membrane', 'Gram-positive', 'a eukaryote', 'a virus'], 'The violet stain was washed out.'],
  [['Prokaryote', 'An organism whose cells have no nucleus.'], ['Plasmid', 'A small circle of DNA in a bacterium.'], ['Peptidoglycan', 'The polymer of the bacterial cell wall.'], ['Gram stain', 'A staining method that separates bacteria by wall type.']],
  [
    { q: 'Give four differences between a bacterium and a liver cell.', steps: ['**No nucleus (DNA in a nucleoid) versus a nucleus.**', '**Circular DNA and plasmids versus linear chromosomes.**', '**70S versus 80S ribosomes.**', '**Peptidoglycan cell wall versus no cell wall; no mitochondria or ER versus many membrane-bound organelles.**'] },
  ]),

  L('ab-endosymbiosis-6', 'ab-l6-prokaryotes', '6.2', 'Viruses and the endosymbiotic theory', 13, ['Cells', 'Evolution'], [
    '**Viruses** are not cells: they are particles of **nucleic acid** (DNA or RNA) inside a **protein coat** (capsid), sometimes with a lipid envelope. They have no cytoplasm, ribosomes or metabolism and can multiply only inside a **host cell**, so they are on the border of life. Examples: HIV, influenza, the tobacco mosaic virus, bacteriophages.',
    'The **endosymbiotic theory** (developed by Lynn Margulis in the 1960s) proposes that **mitochondria** and **chloroplasts** were once free-living prokaryotes engulfed by a larger cell, living inside it to mutual benefit, and passed on through the generations.',
    'Evidence:\n- mitochondria and chloroplasts have **two membranes** (the inner one like a bacterial membrane)\n- they contain **circular DNA** without histones and **70S ribosomes**, like bacteria\n- they **divide by a process like binary fission** and are not made by the cell from scratch\n- they are about the **size of bacteria**\n- their DNA and ribosomes resemble those of particular bacteria (mitochondria: aerobic bacteria; chloroplasts: cyanobacteria).',
  ], 'ab-pro-eukaryote', 'Two membranes, own circular DNA, 70S ribosomes: former bacteria.',
  ['Which feature of chloroplasts supports the endosymbiotic theory?', ['they have their own circular DNA and 70S ribosomes', 'they contain chlorophyll', 'they are green', 'they store starch'], 'Bacterial features.'],
  [['Virus', 'A non-cellular particle of nucleic acid in a protein coat.'], ['Capsid', 'The protein coat of a virus.'], ['Endosymbiotic theory', 'The idea that mitochondria and chloroplasts came from engulfed prokaryotes.']],
  [
    { q: 'Give three reasons why viruses are not considered cells.', steps: ['**They have no cytoplasm or cell membrane of their own.**', '**They have no ribosomes and no metabolism.**', '**They cannot reproduce outside a host cell.**'] },
  ]),

  // ---------- 7. Membranes ----------
  L('ab-fluidmosaic-6', 'ab-l6-membranes', '7.1', 'The fluid mosaic model', 14, ['Membranes'], [
    'The **fluid mosaic model** (Singer and Nicolson, 1972) describes membranes as:\n- a **phospholipid bilayer** about 7 nm thick, with hydrophilic heads facing the watery inside and outside and hydrophobic tails in the middle; the phospholipids move sideways, so the membrane is **fluid**\n- **proteins** scattered in it like the tiles of a **mosaic**: **intrinsic** proteins span the bilayer (channels and carriers), **extrinsic** proteins sit on the surface (enzymes, receptors)\n- **cholesterol** between phospholipids (in animal cells) regulating fluidity and stability\n- **glycoproteins** and **glycolipids** with carbohydrate chains on the outer surface (the glycocalyx) for **cell recognition**, receptors and cell adhesion.',
    'Functions of membranes: control what enters and leaves; compartmentalise the cell; hold enzymes in order (cristae, thylakoids); receive signals (hormone receptors); recognise self and non-self (antigens).',
    'The hydrophobic core stops ions and polar molecules (glucose, amino acids) from crossing freely; small non-polar molecules (oxygen, carbon dioxide) and lipid-soluble substances diffuse straight through.',
  ], 'ab-fluid-mosaic', 'Fluid: lipids move; mosaic: proteins scattered.',
  ['Glycoproteins on the cell surface mainly function in:', ['cell recognition and as receptors', 'storing energy', 'making ATP', 'photosynthesis'], 'They act as antigens and receptors.'],
  [['Fluid mosaic model', 'Membranes as a moving bilayer with scattered proteins.'], ['Intrinsic protein', 'A protein spanning the bilayer.'], ['Glycocalyx', 'The carbohydrate coat on the outer surface of a cell.']],
  [
    { q: 'Explain why oxygen crosses a membrane easily but glucose does not.', steps: ['**Oxygen is small and non-polar, so it dissolves in and diffuses through the hydrophobic core.**', '**Glucose is large and polar, so it is repelled by the hydrophobic core.**', '**Glucose must cross through specific carrier proteins.**'] },
  ]),

  L('ab-transport-6', 'ab-l6-membranes', '7.2', 'Diffusion, facilitated diffusion, active transport and bulk transport', 15, ['Membranes'], [
    '- **Diffusion**: the net movement of molecules from a higher to a lower concentration, down a gradient, without ATP. Rate increases with a steeper gradient, larger surface area, shorter distance and higher temperature (Fick’s law: rate ∝ area × difference in concentration ÷ thickness)\n- **Facilitated diffusion**: passive movement down a gradient through **channel proteins** (water-filled pores for ions) or **carrier proteins** (which change shape), for polar molecules such as glucose.',
    '- **Active transport**: movement **against** a concentration gradient using **carrier proteins** and energy from **ATP**. Example: the **sodium-potassium pump** moves 3 Na⁺ out and 2 K⁺ in for each ATP; root hair cells take up mineral ions from dilute soil water\n- **Co-transport**: a carrier moves one substance down its gradient and another against it (sodium-glucose co-transport in the small intestine).',
    '- **Bulk transport** moves large amounts in vesicles, using ATP: **endocytosis** (phagocytosis of solids, pinocytosis of liquids) and **exocytosis** (secretion of enzymes, hormones, mucus).\nCells with active transport have many mitochondria and many carrier proteins; respiratory poisons such as cyanide stop it.',
  ], 'ab-transport-modes', 'Down the gradient: passive; against it: active (ATP).',
  ['Cyanide stops the uptake of mineral ions by roots because:', ['it stops respiration, so no ATP for active transport', 'it blocks diffusion', 'it kills the cell wall', 'it closes the stomata'], 'Active transport needs ATP.'],
  [['Diffusion', 'Net movement down a concentration gradient.'], ['Facilitated diffusion', 'Passive transport through channel or carrier proteins.'], ['Active transport', 'Movement against a gradient using carriers and ATP.'], ['Co-transport', 'Coupled movement of two substances by one carrier.']],
  [
    { q: 'A cell keeps a higher potassium concentration inside than outside. Name the process and explain how it works.', steps: ['**Active transport (the sodium-potassium pump).**', '**A carrier protein binds K⁺ outside and Na⁺ inside; ATP changes its shape so it moves 2 K⁺ in and 3 Na⁺ out.**', '**Energy is needed because K⁺ moves against its concentration gradient.**'] },
  ]),

  L('ab-waterpotential-6', 'ab-l6-membranes', '7.3', 'Osmosis and water potential', 16, ['Membranes', 'Practical'], [
    '**Water potential (Ψ)** measures the tendency of water to move out of a system, in **kilopascals (kPa)**. Pure water at atmospheric pressure has **Ψ = 0**; any solute makes it **negative**. **Osmosis** is the net movement of water across a partially permeable membrane from a **higher** (less negative) to a **lower** (more negative) water potential.',
    'In plant cells: **Ψ = Ψs + Ψp**\n- **solute potential (Ψs)**: always negative, due to dissolved solutes\n- **pressure potential (Ψp)**: usually positive, the pressure of the wall pushing back on the protoplast.\nIn a dilute solution a plant cell takes in water and becomes **turgid**; in a concentrated one it loses water: the protoplast shrinks from the wall (**plasmolysis**). At **incipient plasmolysis**, Ψp = 0, so Ψ = Ψs. Animal cells have no wall: red blood cells burst (haemolysis) in pure water and shrink (crenation) in concentrated solutions.',
    'Practical: finding the Ψ of potato or **cassava tuber** tissue. Cut equal cylinders, weigh, place in sucrose solutions (0 to 1.0 mol dm⁻³) for a fixed time, blot and reweigh. Plot **percentage change in mass** against concentration. Where the line crosses **zero change**, the tissue has the **same water potential** as that solution; convert using a table of Ψ values for sucrose.',
  ], 'osmosis-cd', 'Water moves to the more negative water potential.',
  ['Cell A has Ψ = −400 kPa and cell B has Ψ = −700 kPa. Water moves:', ['from A to B', 'from B to A', 'in neither direction', 'only if both are animal cells'], 'From less negative to more negative.'],
  [['Water potential', 'The tendency of water to leave a system, in kPa; pure water is 0.'], ['Solute potential', 'The part of water potential due to solutes; always negative.'], ['Pressure potential', 'The part due to pressure, usually positive in plant cells.'], ['Plasmolysis', 'Shrinking of the protoplast away from the cell wall.']],
  [
    { q: 'A plant cell has Ψs = −900 kPa and Ψp = +500 kPa. It is placed in a solution of Ψ = −600 kPa. Will it gain or lose water?', steps: ['Cell Ψ = −900 + 500 = **−400 kPa.**', 'The solution (−600 kPa) is more negative than the cell (−400 kPa).', '**Water leaves the cell by osmosis.**'] },
  ]),

  // ---------- 8. Plant tissues ----------
  L('ab-planttissue-6', 'ab-l6-planttissues', '8.1', 'Parenchyma, collenchyma and sclerenchyma', 13, ['Tissues'], [
    'A **tissue** is a group of similar cells (with their intercellular material) performing a common function.\n- **parenchyma**: living, roughly spherical cells with **thin cellulose walls** and air spaces between them; packing tissue of cortex and pith; stores starch (cassava tubers), and becomes turgid to support herbaceous plants; in leaves it photosynthesises (mesophyll)\n- **collenchyma**: living, elongated cells with walls **thickened with extra cellulose at the corners**; strong yet flexible support in young stems and leaf stalks, just below the epidermis\n- **sclerenchyma**: **dead** cells with thick **lignified** walls; **fibres** (long, in bundles, giving strength: jute, sisal) and **sclereids** (short, stone cells: the grit in guava, the hard shell of nuts).',
    'Lignin is a hard polymer that makes walls rigid and waterproof; cells with fully lignified walls die because their contents are cut off.',
    'Recognising the three in a section: parenchyma has thin walls and large cells; collenchyma shows bright corner thickenings; sclerenchyma has very thick walls and small or no lumen, staining red with phloroglucinol and acid (a test for lignin).',
  ], 'ab-plant-tissues', 'Collenchyma: corners of cellulose; sclerenchyma: lignin, dead.',
  ['Which tissue gives flexible support to a young growing stem?', ['collenchyma', 'sclerenchyma', 'xylem only', 'cork'], 'Living, with cellulose thickening.'],
  [['Tissue', 'A group of similar cells performing a common function.'], ['Parenchyma', 'Thin-walled living packing and storage tissue.'], ['Collenchyma', 'Living support tissue with corner thickenings.'], ['Sclerenchyma', 'Dead, lignified support tissue: fibres and sclereids.']],
  [
    { q: 'Explain why sclerenchyma cells are dead at maturity.', steps: ['**Their walls become thickly lignified.**', '**Lignin is impermeable, so water and nutrients cannot reach the contents.**', '**The protoplast dies, leaving strong, empty supporting cells.**'] },
  ]),

  L('ab-vascular-6', 'ab-l6-planttissues', '8.2', 'Xylem and phloem; stems and roots', 15, ['Tissues', 'Practical'], [
    '**Xylem** carries water and mineral ions upwards and supports the plant:\n- **vessel elements**: dead, empty, lignified cells joined end to end with end walls broken down, forming continuous tubes; lignin in rings, spirals or with **pits** that let water move sideways\n- **tracheids**: narrower, tapering lignified cells; xylem parenchyma and fibres.',
    '**Phloem** carries organic solutes (sucrose, amino acids) both up and down:\n- **sieve tube elements**: living cells with no nucleus and little cytoplasm, joined end to end through perforated **sieve plates**\n- **companion cells**: with nucleus, dense cytoplasm and many mitochondria, linked by **plasmodesmata**; they keep the sieve tubes alive and load sugars.',
    'Distribution in a **dicotyledon**:\n- **stem**: vascular bundles in a **ring**, each with phloem towards the outside, xylem towards the centre and **cambium** between; cortex outside, pith inside; collenchyma under the epidermis\n- **root**: a central **vascular cylinder**: xylem in a **star** (X shape), phloem between the arms, surrounded by the **pericycle** and the **endodermis**; a wide cortex outside. Placing xylem centrally resists pulling forces; a ring of bundles in stems resists bending.',
  ], 'stem-section', 'Stem: bundles in a ring. Root: central xylem star.',
  ['In a dicot root, the phloem lies:', ['between the arms of the xylem star', 'outside the endodermis', 'in the pith', 'in a ring of bundles'], 'Inside the vascular cylinder.'],
  [['Vessel element', 'A dead lignified cell forming part of a xylem vessel.'], ['Sieve plate', 'A perforated end wall between sieve tube elements.'], ['Companion cell', 'A cell that supports a sieve tube element.'], ['Cambium', 'Dividing tissue between xylem and phloem.']],
  [
    { q: 'Give three ways in which xylem vessels are adapted to carry water.', steps: ['**No cell contents or end walls, so water flows freely in a continuous tube.**', '**Lignified walls resist collapse under tension and are waterproof.**', '**Pits allow water to move sideways between vessels.**'] },
  ]),

  // ---------- 9. Animal tissues ----------
  L('ab-epithelia-6', 'ab-l6-animaltissues', '9.1', 'Epithelial tissues', 13, ['Tissues'], [
    '**Epithelia** cover body surfaces and line cavities and tubes; the cells sit on a **basement membrane** and have little material between them.\n- **squamous** (pavement): flat, thin cells; lines **alveoli** and **capillaries**: short diffusion distance\n- **cuboidal**: cube-shaped cells; lines **kidney tubules** and glands; secretion and absorption\n- **columnar**: tall cells, often with **microvilli** (small intestine) for absorption, and **goblet cells** secreting mucus\n- **ciliated columnar**: with cilia that beat to move mucus (trachea, bronchi) or eggs (oviduct)\n- **stratified**: many layers; the outer layers wear away and are replaced from below: **skin** (keratinised), mouth, oesophagus.',
    'Each type fits its function: thin for diffusion, folded with microvilli for absorption, layered for protection, ciliated for movement of fluids.',
    'Practical: when drawing epithelium from a prepared slide, draw a few representative cells accurately with clear outlines, nucleus and basement membrane, label with ruled lines and state the magnification.',
  ], 'ab-animal-tissues', 'Thin to diffuse; tall to absorb; layered to protect.',
  ['Which epithelium lines the alveoli?', ['squamous', 'ciliated columnar', 'stratified', 'cuboidal'], 'Thin for gas exchange.'],
  [['Epithelium', 'A tissue covering surfaces and lining cavities.'], ['Basement membrane', 'The layer on which epithelial cells rest.'], ['Microvilli', 'Tiny finger-like folds of the cell membrane that increase surface area.'], ['Goblet cell', 'A mucus-secreting cell.']],
  [
    { q: 'Smokers’ airways lose their cilia. Explain the consequence.', steps: ['**Ciliated epithelium normally sweeps mucus and trapped dust and bacteria up to the throat.**', '**Without cilia, mucus collects in the airways.**', '**Smokers cough to remove it and suffer more infections such as bronchitis.**'] },
  ]),

  L('ab-connective-6', 'ab-l6-animaltissues', '9.2', 'Connective, muscle and nervous tissues', 15, ['Tissues', 'Practical'], [
    '**Connective tissues** have cells scattered in an extensive **matrix**:\n- **areolar**: loose tissue of collagen and elastic fibres binding organs\n- **adipose**: fat-storing cells; insulation and energy\n- **cartilage**: chondrocytes in a firm, flexible matrix (ends of bones, trachea rings)\n- **bone**: osteocytes in a hard matrix of calcium phosphate and collagen, arranged in Haversian systems\n- **blood**: cells (red cells without nuclei, white cells, platelets) in fluid plasma.',
    '**Muscle tissues**:\n- **skeletal (striated)**: long, multinucleate fibres with cross-striations; voluntary; moves bones\n- **smooth**: spindle-shaped cells with one nucleus, no striations; involuntary; in the gut, blood vessels and uterus\n- **cardiac**: striated, **branched** cells joined by **intercalated discs**; involuntary and **myogenic**; never tires.\n**Nervous tissue**: **neurones** (cell body, dendrites, axon) that carry impulses, supported by glial cells.',
    'Practical: a **blood smear** stained with Leishman’s stain shows many red cells (biconcave, no nucleus), a few **neutrophils** (lobed nucleus), **lymphocytes** (large round nucleus filling the cell) and **monocytes** (kidney-shaped nucleus).',
  ], 'blood-cells', 'Blood is a connective tissue; cardiac muscle is branched and myogenic.',
  ['A white blood cell with a large round nucleus filling most of the cell is a:', ['lymphocyte', 'neutrophil', 'red blood cell', 'platelet'], 'Neutrophils have lobed nuclei.'],
  [['Connective tissue', 'Tissue of cells in an extensive matrix.'], ['Intercalated disc', 'A junction between cardiac muscle cells.'], ['Haversian system', 'A unit of compact bone around a central canal.']],
  [
    { q: 'Compare skeletal and cardiac muscle in three ways.', steps: ['**Skeletal fibres are unbranched and multinucleate; cardiac cells are branched with one or two nuclei.**', '**Skeletal muscle is voluntary; cardiac muscle is involuntary and myogenic.**', '**Cardiac muscle has intercalated discs and does not fatigue; skeletal muscle tires.**'] },
  ]),
];
