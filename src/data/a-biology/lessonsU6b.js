// A Level Biology lessons for Upper Sixth, terms 2 and 3: plant growth
// substances, gametogenesis, the menstrual cycle and early development,
// evolution and population genetics, ecosystems, sampling, human impact and
// conservation in Cameroon, then the GCE drills and mock. Original text
// written for this app.

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
  // ---------- 10. Plant hormones ----------
  L('ab-auxins-7', 'ab-u6-planthormones', '10.1', 'Auxins and tropisms', 15, ['Plant coordination', 'Practical'], [
    'A **tropism** is a growth movement of part of a plant in response to a **directional** stimulus: towards it (positive) or away (negative). Shoots are positively **phototropic** and negatively **gravitropic** (geotropic); roots are positively gravitropic.',
    '**Auxin** (indoleacetic acid, IAA) is made in shoot tips and moves down the shoot. It makes cells **elongate** by loosening cell walls (it stimulates proton pumping into the wall, activating enzymes that break cross-links). Key experiments on oat coleoptiles:\n- **Darwin** (1880): covering the tip stopped bending towards light, so the tip detects light\n- **Boysen-Jensen**: a stimulus passed through gelatine but not through mica, so it is a chemical\n- **Went** (1928): the substance collected from tips into agar blocks; an agar block placed on one side of a decapitated coleoptile made it bend, the amount of bending matching the amount of auxin.\nIn **unilateral light**, auxin moves to the **shaded side**; those cells elongate more, so the shoot bends **towards** the light.',
    'In roots, high auxin concentrations **inhibit** elongation, so in a horizontal root auxin collecting on the lower side slows growth there and the root bends **down**. Auxin also maintains **apical dominance** (the terminal bud suppresses side buds), stimulates roots on cuttings (rooting powders) and, in synthetic forms such as 2,4-D, acts as a selective weedkiller of broad-leaved weeds in maize and rice fields.',
  ], 'ab-phytohormones', 'Auxin goes to the shade; shaded cells elongate; the shoot bends to the light.',
  ['In Went’s experiment, an agar block with auxin placed on the left side of a decapitated coleoptile makes it bend:', ['to the right', 'to the left', 'not at all', 'downwards only'], 'The left side grows faster.'],
  [['Tropism', 'A directional growth response to a directional stimulus.'], ['Auxin', 'A plant hormone causing cell elongation.'], ['Apical dominance', 'Suppression of side buds by the terminal bud.'], ['Coleoptile', 'The protective sheath of a grass seedling’s shoot.']],
  [
    { q: 'Explain why a bean seedling on a windowsill bends towards the window.', steps: ['**Light comes from one side; auxin moves to the shaded side of the shoot tip.**', '**Cells on the shaded side elongate more.**', '**Uneven growth bends the shoot towards the light, helping photosynthesis.**'] },
  ]),

  L('ab-phytohormones-7', 'ab-u6-planthormones', '10.2', 'Other plant growth substances and photoperiodism', 15, ['Plant coordination'], [
    'Other growth substances:\n- **gibberellins**: stem elongation (dwarf varieties lack them); **seed germination**: in cereal grains, water triggers the embryo to release gibberellin, which makes the aleurone layer produce **amylase** to digest stored starch; used in brewing and to enlarge seedless grapes\n- **cytokinins**: promote **cell division** (with auxin, in tissue culture) and delay leaf ageing\n- **abscisic acid (ABA)**: a stress hormone; causes **stomatal closure** in drought and maintains seed and bud **dormancy**\n- **ethene** (ethylene): a gas that promotes **fruit ripening** and leaf fall; used to ripen bananas and plantains evenly for market.',
    'Commercial uses: rooting powders (auxin), weedkillers (synthetic auxins), seedless fruit (auxins, gibberellins), controlled ripening (ethene) and preventing early sprouting in storage.',
    '**Photoperiodism** is the response to the relative lengths of day and night, controlled by the pigment **phytochrome**. It has two forms: **Pr** absorbs red light (about 660 nm) and changes to **Pfr**; Pfr absorbs far-red light (about 730 nm) and changes back, and slowly reverts in darkness. Long nights leave little Pfr.\n- **short-day (long-night) plants** flower when the night is **longer** than a critical length\n- **long-day plants** flower when the night is **shorter** than a critical length.\nNear the equator, as in much of Cameroon, day length varies little, so flowering is often timed by rainfall and temperature instead.',
  ], 'ab-phytohormones', 'Gibberellin grows; ABA closes; ethene ripens; phytochrome times flowering.',
  ['Which hormone closes stomata when a plant is short of water?', ['abscisic acid', 'auxin', 'gibberellin', 'cytokinin'], 'A stress hormone.'],
  [['Gibberellin', 'A plant hormone causing stem elongation and germination.'], ['Abscisic acid', 'A plant hormone causing stomatal closure and dormancy.'], ['Phytochrome', 'A pigment that detects red and far-red light.'], ['Photoperiodism', 'Response to the relative lengths of day and night.']],
  [
    { q: 'A short-day plant is kept in long nights, but each night is interrupted by a flash of red light. It does not flower. Explain.', steps: ['**Red light converts Pr to Pfr.**', '**The flash restores Pfr in the middle of the night, so the plant "sees" two short nights.**', '**The uninterrupted dark period is now shorter than the critical length, so it does not flower.**'] },
  ]),

  // ---------- 11. Gametogenesis ----------
  L('ab-spermatogenesis-7', 'ab-u6-gametogenesis', '11.1', 'The testis and spermatogenesis', 14, ['Reproduction', 'Practical'], [
    'Each **testis** contains many coiled **seminiferous tubules**, where sperm are made, with **interstitial (Leydig) cells** between them that secrete **testosterone**. Large **Sertoli cells** in the tubule wall nourish and protect the developing sperm.',
    '**Spermatogenesis**, from the tubule wall towards the lumen:\n- **spermatogonia** (2n) divide by **mitosis** to keep up numbers\n- some grow into **primary spermatocytes** (2n)\n- **meiosis I** gives two **secondary spermatocytes** (n)\n- **meiosis II** gives four **spermatids** (n)\n- spermatids differentiate into **spermatozoa**: a head with the nucleus and **acrosome** (enzymes to penetrate the egg), a middle piece full of **mitochondria**, and a tail (flagellum).\nIt continues from puberty throughout life, millions each day, and is controlled by FSH, LH and testosterone.',
    'Practical: in a prepared section of testis, identify the tubules with layers of cells at different stages, sperm in the lumen, and interstitial cells between the tubules; draw a low-power plan and a high-power drawing of part of one tubule.',
  ], 'ab-gametogenesis', 'One primary spermatocyte gives four sperm.',
  ['Which cells in the testis secrete testosterone?', ['interstitial (Leydig) cells', 'Sertoli cells', 'spermatogonia', 'spermatids'], 'Between the tubules.'],
  [['Seminiferous tubule', 'A coiled tubule of the testis where sperm form.'], ['Spermatogonium', 'A diploid cell that divides by mitosis to start spermatogenesis.'], ['Acrosome', 'A cap of enzymes on the sperm head.'], ['Sertoli cell', 'A supporting cell in the tubule wall.']],
  [
    { q: 'How many sperm can 1000 primary spermatocytes produce, and how many chromosomes does each sperm have in humans?', steps: ['**Each primary spermatocyte gives 4 sperm: 4000 sperm.**', '**Each sperm is haploid: 23 chromosomes.**'] },
  ]),

  L('ab-oogenesis-7', 'ab-u6-gametogenesis', '11.2', 'The ovary and oogenesis', 15, ['Reproduction', 'Practical'], [
    '**Oogenesis**:\n- before birth, **oogonia** (2n) multiply by mitosis and grow into **primary oocytes** (2n), which begin meiosis I and **stop in prophase I**; a girl is born with all her primary oocytes, each in a **primary follicle**\n- from puberty, each month a few follicles develop under FSH; usually one becomes a mature **Graafian follicle**\n- the primary oocyte completes **meiosis I**, unequally: a large **secondary oocyte** (n) and a tiny **first polar body**\n- the secondary oocyte starts meiosis II and **stops at metaphase II**; it is released at **ovulation**\n- meiosis II is completed **only if a sperm enters**, giving the **ovum** and a **second polar body**.\nAfter ovulation the follicle becomes the **corpus luteum**, which secretes progesterone.',
    'Comparison with spermatogenesis:\n- one primary oocyte gives **one** functional gamete (cytoplasm and food reserves go to the egg); one primary spermatocyte gives **four**\n- oogenesis begins before birth, pauses for years and ends at the menopause; spermatogenesis is continuous from puberty\n- eggs are large and immobile; sperm small and mobile.',
    'Practical: in an ovary section, identify primary follicles near the edge, developing follicles with a fluid-filled cavity, possibly a Graafian follicle, and a corpus luteum; calculate magnification or actual sizes from a scale.',
  ], 'ab-gametogenesis', 'One primary oocyte gives one ovum and polar bodies.',
  ['At ovulation, the cell released is a:', ['secondary oocyte arrested at metaphase II', 'mature ovum', 'primary oocyte', 'polar body'], 'Meiosis II finishes after fertilisation.'],
  [['Primary oocyte', 'A diploid cell arrested in prophase I from before birth.'], ['Polar body', 'A small cell formed by unequal division in oogenesis.'], ['Graafian follicle', 'A mature follicle ready to release its oocyte.'], ['Corpus luteum', 'The structure formed from the follicle after ovulation.']],
  [
    { q: 'Give two reasons why oogenesis produces only one large ovum rather than four small ones.', steps: ['**Unequal divisions give almost all the cytoplasm to one cell.**', '**The ovum needs large food reserves and organelles to support the early embryo.**', '**The polar bodies simply carry away the extra chromosome sets.**'] },
  ]),

  // ---------- 12. Cycle and development ----------
  L('ab-menstrual-7', 'ab-u6-development', '12.1', 'Hormonal control of the menstrual cycle', 15, ['Reproduction'], [
    'The cycle lasts about **28 days**, coordinated by hormones from the **anterior pituitary** and the **ovary**:\n- **FSH** (follicle-stimulating hormone) makes follicles grow; the growing follicle secretes **oestrogen**\n- **oestrogen** repairs and thickens the **endometrium**; at low levels it inhibits FSH (negative feedback), but a **high** level around day 12 stimulates a **surge of LH** (positive feedback)\n- **LH** (luteinising hormone) causes **ovulation** about day 14 and turns the follicle into the **corpus luteum**\n- the corpus luteum secretes **progesterone** (and oestrogen), which maintains the endometrium and **inhibits FSH and LH**, so no new follicles develop\n- if there is no pregnancy, the corpus luteum degenerates after about 10 days; progesterone falls; the endometrium breaks down: **menstruation**; low progesterone lets FSH rise again.',
    'Hormonal **contraceptive pills** contain oestrogen and progesterone (or progesterone alone) that inhibit FSH and LH, preventing ovulation. **Fertility drugs** contain FSH and LH to stimulate ovulation.',
    'Reading hormone graphs: identify the peak of oestrogen before the LH surge, ovulation at the LH peak, and the rise of progesterone in the second half of the cycle.',
  ], 'menstrual-cycle', 'FSH → oestrogen → LH surge → ovulation → progesterone.',
  ['The LH surge is triggered by:', ['a high level of oestrogen (positive feedback)', 'falling progesterone', 'menstruation', 'FSH falling to zero'], 'About day 12 to 13.'],
  [['FSH', 'Follicle-stimulating hormone from the anterior pituitary.'], ['LH', 'Luteinising hormone, which triggers ovulation.'], ['Endometrium', 'The lining of the uterus.'], ['Positive feedback', 'A response that increases the original change.']],
  [
    { q: 'Explain why a woman does not ovulate while taking a combined pill.', steps: ['**The pill keeps oestrogen and progesterone levels high.**', '**These inhibit FSH and LH release from the pituitary (negative feedback).**', '**No follicle matures and no LH surge occurs, so there is no ovulation.**'] },
  ]),

  L('ab-fertilisation-7', 'ab-u6-development', '12.2', 'Fertilisation, early development and the placenta', 16, ['Reproduction', 'Development'], [
    '**Fertilisation** usually happens in the **oviduct**. Sperm undergo the **acrosome reaction**: enzymes digest a path through the cells and the zona pellucida around the secondary oocyte; one sperm membrane fuses with the oocyte; the zona hardens to block other sperm; meiosis II is completed and the nuclei fuse, forming a diploid **zygote**.',
    'Early development:\n- **cleavage**: rapid mitotic divisions without growth, making smaller and smaller cells; a solid ball, the **morula**\n- the **blastocyst** (blastula stage): a hollow ball with an outer **trophoblast** and an **inner cell mass** that will form the embryo\n- **implantation** into the endometrium about **7 days** after fertilisation\n- **gastrulation**: cells move to form three **germ layers**: **ectoderm** (skin, nervous system), **mesoderm** (muscle, bone, blood, kidneys) and **endoderm** (gut lining, lungs, liver).\nThe trophoblast secretes **hCG**, which keeps the corpus luteum alive so progesterone continues; pregnancy tests detect hCG in urine.',
    'The **placenta**, formed from trophoblast villi and the endometrium:\n- exchange: oxygen, glucose, amino acids, water and antibodies (IgG) pass to the fetus; carbon dioxide and urea pass to the mother, across a thin barrier with a large surface area and counter-flowing blood\n- the maternal and fetal blood do not mix, protecting the fetus from the mother’s blood pressure and from many pathogens and blood-group reactions\n- endocrine: after the first months it secretes **progesterone** and **oestrogen** itself\n- some harmful substances cross it: alcohol, nicotine, some drugs, HIV and rubella virus.',
  ], 'ab-early-development', 'Zygote → morula → blastocyst → implantation → gastrula.',
  ['hCG is important in early pregnancy because it:', ['keeps the corpus luteum secreting progesterone', 'causes ovulation', 'starts menstruation', 'forms the zygote'], 'It maintains the endometrium.'],
  [['Zygote', 'The diploid cell formed at fertilisation.'], ['Blastocyst', 'A hollow ball of cells that implants in the uterus.'], ['Germ layers', 'Ectoderm, mesoderm and endoderm formed at gastrulation.'], ['Placenta', 'The organ of exchange between mother and fetus.']],
  [
    { q: 'Give three ways in which the placenta is adapted for exchange.', steps: ['**Many villi give a large surface area.**', '**A thin barrier between fetal capillaries and maternal blood gives a short diffusion distance.**', '**Continuous flow of both bloods (in opposite directions) keeps steep concentration gradients.**'] },
  ]),

  // ---------- 13. Evolution ----------
  L('ab-evidence-7', 'ab-u6-evolution', '13.1', 'Evidence for evolution', 15, ['Evolution', 'Practical'], [
    '**Evolution** is the change in the inherited characteristics of populations over many generations. Evidence:\n- **fossils**: rocks show a sequence of life, simpler forms in older layers; **transitional** fossils such as *Archaeopteryx* (reptile features with feathers) and *Tiktaalik* (fish with limb-like fins)\n- **comparative anatomy**: **homologous structures**, such as the **pentadactyl limb** of humans, bats, whales and frogs, have the same basic bone plan adapted to different uses, showing common ancestry (divergent evolution); **analogous structures** (insect and bird wings) have similar functions but different origins (convergent evolution); **vestigial structures** (the human coccyx)\n- **embryology**: early vertebrate embryos look alike, with pharyngeal pouches and tails.',
    '- **biogeography**: isolated islands have unique species related to those of the nearest mainland, such as the finches of the Galápagos studied by Darwin; the crater lakes of Cameroon have fish found nowhere else\n- **molecular homology**: all life uses DNA, the same genetic code and ATP; the more closely related two species are, the fewer differences in their DNA and in proteins such as **cytochrome c** and haemoglobin. Humans and chimpanzees share about 98 to 99% of their DNA sequence.',
    'Natural selection (Darwin and Wallace, 1858-1859): individuals vary; more are born than survive; those with favourable inherited variations survive and reproduce more and pass them on; over many generations the population changes.',
  ], 'ab-evolution-evidence', 'Homologous: same plan, different use; common ancestry.',
  ['The forelimbs of a bat, a whale and a human are:', ['homologous structures', 'analogous structures', 'vestigial', 'unrelated'], 'Same pentadactyl plan.'],
  [['Homologous structures', 'Structures with the same basic plan from a common ancestor.'], ['Analogous structures', 'Structures with the same function but different origins.'], ['Transitional fossil', 'A fossil showing features of two groups.'], ['Natural selection', 'Greater survival and reproduction of better-adapted individuals.']],
  [
    { q: 'Cytochrome c of humans differs from that of a rhesus monkey in 1 amino acid and from a horse in 12. What does this suggest?', steps: ['**Fewer differences indicate a more recent common ancestor.**', '**Humans are more closely related to monkeys than to horses.**', '**This matches the classification based on anatomy.**'] },
  ]),

  L('ab-speciation-7', 'ab-u6-evolution', '13.2', 'Speciation', 15, ['Evolution'], [
    'A **species** is a group of organisms that can interbreed to produce fertile offspring. New species form when populations become **reproductively isolated**, so their gene pools evolve separately. Isolating mechanisms:\n- **geographical** (mountains, rivers, seas)\n- **ecological** (different habitats in the same area), **seasonal** (breeding at different times), **behavioural** (different courtship), **mechanical** (incompatible genitalia or flowers)\n- after mating: hybrid inviability or **hybrid sterility** (the mule).',
    '- **Allopatric speciation**: a population is divided by a **geographical barrier**; each part meets different selection pressures and mutations; eventually they can no longer interbreed even if reunited\n- **Sympatric speciation**: new species arise **in the same area**, through behavioural or ecological isolation, or suddenly by **polyploidy** in plants (bread wheat is hexaploid, from crosses of three ancestral grasses).',
    'A celebrated Cameroonian example: **Lake Barombi Mbo**, a small, isolated crater lake near Kumba, holds several species of **cichlid fish** found nowhere else. Genetic studies indicate that they descended from a single colonising ancestor **within the lake**, a strong case of **sympatric speciation**, probably through different diets and habitats leading to choosy mating.',
  ], 'ab-speciation', 'Isolation, then separate selection; allopatric needs a barrier, sympatric does not.',
  ['Polyploidy can create a new plant species instantly because:', ['the polyploid cannot produce fertile offspring with its parent species', 'it is always larger', 'it has no chromosomes', 'it is geographically isolated'], 'Reproductive isolation at once.'],
  [['Reproductive isolation', 'The inability of two populations to interbreed.'], ['Allopatric speciation', 'Speciation after geographical separation.'], ['Sympatric speciation', 'Speciation within the same area.'], ['Polyploidy', 'Having more than two sets of chromosomes.']],
  [
    { q: 'Suggest how two species of cichlid could arise in one crater lake.', steps: ['**Some fish feed on the bottom, others in open water, so they meet different selection pressures.**', '**Fish prefer mates that feed and live where they do, reducing gene flow.**', '**Over many generations the two groups diverge until they no longer interbreed: sympatric speciation.**'] },
  ]),

  // ---------- 14. Population genetics ----------
  L('ab-hardyweinberg-7', 'ab-u6-popgenetics', '14.1', 'The Hardy-Weinberg principle', 16, ['Evolution', 'Data analysis'], [
    'A **gene pool** is all the alleles of a population. For a gene with two alleles, dominant A (frequency **p**) and recessive a (frequency **q**):\n- **p + q = 1**\n- genotype frequencies: **p² (AA) + 2pq (Aa) + q² (aa) = 1**.\nThe **Hardy-Weinberg principle** states that allele and genotype frequencies stay **constant** from generation to generation if:\n- the population is **large**\n- mating is **random**\n- there is **no mutation**, **no migration** and **no selection**.\nA change in frequencies shows that evolution is occurring.',
    'Method: you can only see the recessive phenotype, so start from **q²**:\n- find q² = number of recessive individuals ÷ total\n- q = √q²; p = 1 − q\n- heterozygotes (carriers) = 2pq.',
    'Example: about 1 in 2500 babies in a population has cystic fibrosis (recessive). q² = 0.0004, q = 0.02, p = 0.98, carriers 2pq = 0.039, about **1 in 25** people.',
  ], 'ab-hardy-weinberg', 'Start from q²; q = √q²; carriers = 2pq.',
  ['In a population, 9% are homozygous recessive. The frequency of the recessive allele is:', ['0.3', '0.09', '0.7', '0.81'], '√0.09.'],
  [['Gene pool', 'All the alleles in a population.'], ['Allele frequency', 'The proportion of an allele among all alleles of that gene.'], ['Hardy-Weinberg principle', 'Allele frequencies stay constant without evolutionary forces.']],
  [
    { q: 'In a village, 16 of 400 people have a recessive condition. Find the percentage of carriers.', steps: ['q² = 16 ÷ 400 = **0.04**; q = **0.2**; p = **0.8.**', '2pq = 2 × 0.8 × 0.2 = **0.32.**', '**32% of the population are carriers (128 people).**'] },
  ]),

  L('ab-selection-7', 'ab-u6-popgenetics', '14.2', 'Types of natural selection', 15, ['Evolution'], [
    'Selection acts on phenotypes, changing allele frequencies:\n- **stabilising selection** favours the **average** phenotype, reducing variation; example: human birth mass, where very small and very large babies have lower survival\n- **directional selection** favours **one extreme**, shifting the mean; examples: bacteria becoming **resistant to antibiotics**, mosquitoes resistant to insecticides, Plasmodium resistant to chloroquine\n- **disruptive selection** favours **both extremes** against the average, which can split a population and lead to speciation.',
    '**Balanced polymorphism** keeps two alleles in a population. The sickle-cell allele (HbS) is harmful in homozygotes, yet common in malarial regions of Africa, including Cameroon, because **heterozygotes** (HbA HbS) are more resistant to severe malaria: **heterozygote advantage**. Where malaria is absent, HbS becomes rare.',
    '**Genetic drift** changes allele frequencies by chance, strongest in small populations; the **founder effect** (a new population started by a few individuals) and **bottlenecks** reduce genetic diversity. **Artificial selection** by breeders (maize, cattle, dogs) works the same way, with humans choosing which individuals breed.',
  ], 'ab-selection-types', 'Stabilising: the average; directional: one end; disruptive: both ends.',
  ['The spread of chloroquine-resistant malaria parasites is an example of:', ['directional selection', 'stabilising selection', 'disruptive selection', 'genetic drift only'], 'One extreme favoured by the drug.'],
  [['Stabilising selection', 'Selection favouring the average phenotype.'], ['Directional selection', 'Selection favouring one extreme.'], ['Heterozygote advantage', 'Greater fitness of heterozygotes than either homozygote.'], ['Genetic drift', 'Random change in allele frequencies.']],
  [
    { q: 'Explain how widespread use of an antibiotic leads to a resistant bacterial population.', steps: ['**A few bacteria carry a mutation (or plasmid) giving resistance.**', '**The antibiotic kills susceptible bacteria; resistant ones survive and multiply.**', '**The resistance allele increases in frequency each generation: directional selection.**'] },
  ]),

  // ---------- 15. Ecosystems ----------
  L('ab-energyflow-7', 'ab-u6-ecosystems', '15.1', 'Energy flow and productivity', 15, ['Ecology'], [
    'An **ecosystem** is a community of organisms interacting with its physical environment. Energy enters as light, captured by **producers**, and flows along **food chains** through **trophic levels**: producers → primary consumers (herbivores) → secondary consumers → tertiary consumers; **decomposers** and detritivores feed on dead matter at all levels.',
    '- **Gross primary productivity (GPP)**: the rate at which producers convert light energy into chemical energy\n- **net primary productivity (NPP) = GPP − R** (R: energy used by the plants’ respiration): energy available to herbivores. Tropical rainforests have among the highest NPP on land.\nAt each transfer, much energy is lost: as **heat from respiration**, in **undigested** material (faeces), in parts not eaten (roots, bones) and in excretion. On average only about **10%** (often 5 to 20%) passes to the next level. **Efficiency of transfer = energy at higher level ÷ energy at lower level × 100%**.',
    'Consequences: food chains are short (rarely more than 4 or 5 levels); top predators are few; **pyramids of energy** are always upright, though pyramids of numbers (one tree, many insects) or biomass (plankton) can be inverted. Eating plants directly feeds more people per hectare than feeding plants to livestock.',
  ], 'energy-pyramid', 'NPP = GPP − R; about 10% passes on.',
  ['Grass receives 20 000 kJ m⁻² year⁻¹ NPP; cattle obtain 2000. The efficiency of transfer is:', ['10%', '20%', '1%', '90%'], '2000 ÷ 20 000 × 100.'],
  [['Trophic level', 'A feeding position in a food chain.'], ['Gross primary productivity', 'The rate of energy capture by producers.'], ['Net primary productivity', 'GPP minus plant respiration.'], ['Efficiency of transfer', 'The percentage of energy passed to the next level.']],
  [
    { q: 'A plant community has GPP of 30 000 and respiration of 18 000 kJ m⁻² year⁻¹. Herbivores obtain 1200. Find NPP and the efficiency of transfer to herbivores.', steps: ['NPP = 30 000 − 18 000 = **12 000 kJ m⁻² year⁻¹.**', 'Efficiency = 1200 ÷ 12 000 × 100 = **10%.**'] },
  ]),

  L('ab-cycles-7', 'ab-u6-ecosystems', '15.2', 'The nitrogen and carbon cycles', 16, ['Ecology', 'Practical'], [
    'Nitrogen is needed for proteins and nucleic acids, but most organisms cannot use the **N₂** of the air (78%). The **nitrogen cycle**:\n- **nitrogen fixation**: N₂ → ammonium, by **Rhizobium** in the root nodules of legumes (groundnuts, beans, soya: a mutualism), free-living **Azotobacter**, cyanobacteria, by **lightning**, and industrially (Haber process for fertilisers)\n- **ammonification**: decomposers break down proteins, urea and dead matter, releasing **ammonium**\n- **nitrification** in aerated soil: **Nitrosomonas** oxidises ammonium to **nitrite**; **Nitrobacter** oxidises nitrite to **nitrate**, which plants absorb\n- **denitrification**: in **waterlogged, anaerobic** soils, bacteria such as Pseudomonas reduce nitrate to N₂, which is lost to the air.',
    'Farmers use the cycle: growing legumes in rotation, ploughing to aerate soil (favouring nitrifiers), draining waterlogged fields (reducing denitrification), and adding manure or fertiliser.',
    'The **carbon cycle**: CO₂ is fixed by photosynthesis; returned by respiration of plants, animals and decomposers; stored in fossil fuels, wood, soils and limestone; released by combustion. Deforestation and burning fossil fuels have raised atmospheric CO₂ from about 280 ppm before industry to over 420 ppm today, driving climate change. Practical: build a food web from organisms observed in a school micro-habitat, such as a hedge or pond.',
  ], 'ab-nitrogen-cycle', 'Fix, ammonify, nitrify, assimilate; denitrifiers return N₂.',
  ['Which bacteria convert nitrite to nitrate?', ['Nitrobacter', 'Nitrosomonas', 'Rhizobium', 'Pseudomonas'], 'The second step of nitrification.'],
  [['Nitrogen fixation', 'Conversion of nitrogen gas into ammonium or nitrate.'], ['Nitrification', 'Oxidation of ammonium to nitrite and nitrate.'], ['Denitrification', 'Reduction of nitrate to nitrogen gas.'], ['Ammonification', 'Release of ammonium from dead organic matter.']],
  [
    { q: 'Explain why groundnuts improve the soil for a maize crop the following year.', steps: ['**Groundnuts are legumes with Rhizobium in root nodules that fix nitrogen.**', '**When the roots and leftovers decompose, ammonium is released (ammonification).**', '**Nitrifying bacteria turn it into nitrate, which the maize absorbs to make proteins.**'] },
  ]),

  // ---------- 16. Sampling ----------
  L('ab-quadrats-7', 'ab-u6-sampling', '16.1', 'Quadrats and transects', 15, ['Ecology', 'Practical'], [
    'A **frame quadrat** (often 0.5 m × 0.5 m or 1 m × 1 m) samples plants and slow-moving animals.\n- **random sampling** avoids bias: lay two tapes at right angles and use random numbers for coordinates\n- **frequency**: the percentage of quadrats in which a species occurs\n- **density**: number of individuals per m² (total counted ÷ total area sampled)\n- **percentage cover**: the proportion of the quadrat area covered by a species, useful for grasses where individuals are hard to count\n- take enough quadrats that the running mean levels off.',
    'Where conditions change along a gradient (from shade to sun, from a path into a field, from a riverbank upwards), use systematic sampling along a **transect**:\n- **line transect**: record species touching a tape at regular intervals\n- **belt transect**: place quadrats at regular intervals along the line, recording abundance; plot kite diagrams.\nRecord **abiotic factors** at each point: light intensity (light meter), soil moisture, pH, temperature.',
    'Species **diversity** depends on both the number of species and how evenly individuals are spread among them; **Simpson’s index** D = 1 − Σ(n/N)² measures it (closer to 1: more diverse). Practical: measure the frequency and density of weeds such as Tridax or Chromolaena on the school campus, comparing trampled and untrampled areas.',
  ], 'ab-sampling', 'Random quadrats for an area; transects for a gradient.',
  ['A weed occurs in 12 of 40 quadrats. Its frequency is:', ['30%', '12%', '40%', '3.3%'], '12 ÷ 40 × 100.'],
  [['Quadrat', 'A square frame for sampling a known area.'], ['Frequency', 'The percentage of quadrats containing a species.'], ['Density', 'Number of individuals per unit area.'], ['Belt transect', 'Quadrats placed at intervals along a line.']],
  [
    { q: 'In 20 quadrats of 0.25 m², a total of 60 plants of a species are counted. Find the density.', steps: ['Area sampled = 20 × 0.25 = **5 m².**', 'Density = 60 ÷ 5 = **12 plants per m².**'] },
  ]),

  L('ab-markrecapture-7', 'ab-u6-sampling', '16.2', 'Mark-release-recapture and abiotic measurements', 14, ['Ecology', 'Practical'], [
    'For mobile animals (beetles, snails, grasshoppers, fish), use **mark-release-recapture**:\n- catch a sample, count it (n₁), mark each animal harmlessly (a dot of paint where predators cannot see it) and release them\n- after time for mixing, catch a second sample (n₂) and count the marked ones (m)\n- **Lincoln index**: estimated population **N = (n₁ × n₂) ÷ m**.',
    'Assumptions: marks do not harm the animals or make them easier to see; marked animals mix fully; no significant births, deaths, immigration or emigration between samples; marks are not lost; the second sample is random.',
    'Abiotic factors in a stream or pond: **temperature** (thermometer), **pH** (meter or indicator), **dissolved oxygen** (oxygen meter or chemical test) and **biochemical oxygen demand (BOD)**: the oxygen used by microorganisms over 5 days in the dark at 20 °C, a measure of organic pollution. Indicator species (stonefly nymphs in clean water; sludge worms and rat-tailed maggots in polluted water) also show water quality.',
  ], 'ab-sampling', 'N = n₁ × n₂ ÷ m.',
  ['60 beetles are marked; later 80 are caught, 12 marked. The estimated population is:', ['400', '152', '960', '48'], '60 × 80 ÷ 12.'],
  [['Mark-release-recapture', 'A method of estimating the size of a mobile population.'], ['Lincoln index', 'N = (n₁ × n₂) ÷ m.'], ['BOD', 'Biochemical oxygen demand: oxygen used by microbes in water.'], ['Indicator species', 'A species whose presence shows environmental conditions.']],
  [
    { q: 'Why would the Lincoln index overestimate a snail population if the paint marks wear off?', steps: ['**Some marked snails would be counted as unmarked in the second sample.**', '**m would be too small.**', '**Dividing by a smaller m gives too large an estimate of N.**'] },
  ]),

  // ---------- 17. Human impact ----------
  L('ab-biodiversity-7', 'ab-u6-humanimpact', '17.1', 'Biodiversity loss and conservation in Cameroon', 16, ['Ecology', 'Environment'], [
    'Cameroon is one of the most biodiverse countries in Africa, with rainforest, montane forest, savanna and Sahel. Threats:\n- **deforestation** for timber, farming (cocoa, oil palm, food crops), roads and settlements\n- **bushmeat hunting** and trade, affecting primates, pangolins and antelopes\n- mining, dams and pollution\n- invasive species and **climate change**.\nThreatened species include the **Cross River gorilla** (on the Cameroon-Nigeria border), the **drill**, forest **elephants**, and **Bannerman’s turaco**, a bird found only in the montane forests of the Bamenda Highlands such as Kilum-Ijim on Mount Oku.',
    'Conservation:\n- **protected areas**: Korup National Park (ancient rainforest), the **Dja Faunal Reserve** (a UNESCO World Heritage Site), Lobéké, Campo-Ma’an, Mount Cameroon National Park, and **Waza National Park** in the Far North savanna\n- **community forestry**, so local people benefit from protecting forests\n- laws against hunting protected species; anti-poaching patrols\n- **ex situ** conservation: seed banks, botanic gardens (Limbe Botanic Garden), wildlife centres (Limbe Wildlife Centre)\n- international agreements: CITES on trade in endangered species, the Convention on Biological Diversity.',
    '**Sustainable development** meets present needs without compromising future generations: selective logging with replanting, agroforestry (shade cocoa), certified timber, and ecotourism that funds parks.',
  ], 'ab-conservation', 'Protect habitats, involve communities, control trade.',
  ['Conserving seeds in a seed bank is an example of:', ['ex situ conservation', 'in situ conservation', 'deforestation', 'directional selection'], 'Outside the natural habitat.'],
  [['Biodiversity', 'The variety of species, genes and ecosystems.'], ['In situ conservation', 'Protecting species in their natural habitat.'], ['Ex situ conservation', 'Protecting species outside their habitat.'], ['Sustainable development', 'Meeting present needs without harming the future.']],
  [
    { q: 'Give two reasons why involving local communities helps protect a forest reserve.', steps: ['**People who earn income from the forest (ecotourism, sustainable harvesting) have reason to protect it.**', '**Local knowledge and patrols help detect illegal logging and poaching.**'] },
  ]),

  L('ab-pollution-7', 'ab-u6-humanimpact', '17.2', 'Eutrophication, water quality and climate change', 15, ['Ecology', 'Practical'], [
    '**Eutrophication** follows the enrichment of water with **nitrates and phosphates** from fertilisers, sewage and detergents:\n- algae grow rapidly (an **algal bloom**), covering the surface\n- light cannot reach submerged plants, which die\n- algae and plants die; **decomposers** multiply and use up **dissolved oxygen** (BOD rises)\n- fish and other animals **suffocate**.\nPrevention: applying fertiliser carefully, buffer strips of vegetation along rivers, treating sewage, phosphate-free detergents.',
    'Measuring water quality in a local stream (abiotic and biotic):\n- temperature, **pH**, **dissolved oxygen** and BOD\n- invertebrate indicator species and diversity.\nClean, fast streams have high oxygen and diverse invertebrates; polluted water near drains has low oxygen, few species and many tolerant ones.',
    '**Climate change**: rising concentrations of greenhouse gases (CO₂ from fossil fuels and deforestation, methane from cattle, rice fields and waste) trap more heat, raising global temperatures. Effects in Cameroon include irregular rainfall, drought and desertification in the Far North, the shrinking of Lake Chad, floods, and changes in the range of crops, pests and disease vectors. Responses: protecting and replanting forests, renewable energy (hydroelectricity, solar), efficient cooking stoves and adaptation of farming.',
  ], 'ab-eutrophication', 'Nutrients → bloom → death → decomposers use O₂ → fish die.',
  ['In eutrophication, the main cause of fish death is:', ['lack of dissolved oxygen used up by decomposers', 'poisonous nitrates', 'too much light', 'cold water'], 'High BOD.'],
  [['Eutrophication', 'Nutrient enrichment of water leading to oxygen depletion.'], ['Algal bloom', 'Rapid growth of algae in nutrient-rich water.'], ['Greenhouse gas', 'A gas that traps heat in the atmosphere.']],
  [
    { q: 'A stream below a farm has dissolved oxygen of 3 mg dm⁻³, and above it 9 mg dm⁻³. Suggest an explanation.', steps: ['**Fertiliser or animal waste from the farm enters the stream.**', '**Nutrients and organic matter feed decomposers, which use up oxygen.**', '**So oxygen is much lower below the farm: organic pollution and eutrophication.**'] },
  ]),

  // ---------- 18. Paper 1 ----------
  L('ab-u6mcq-7', 'ab-u6-paper1', '18.1', 'Paper 1 sprint technique', 12, ['Examination'], [
    'Paper 1 (multiple choice, 1½ hours) covers both years. Pace yourself evenly and answer every item.\n- read the stem fully; underline NOT, EXCEPT, MOST, LEAST\n- for genetics items, write the cross quickly in the margin\n- for data items, read axes, units and scales before the options\n- for calculation items (magnification, χ², Hardy-Weinberg, Lincoln index, efficiency), work it out before looking at the options, then match.',
    'Elimination: an option that is wrong in any part is wrong. Beware options that are true statements but do not answer the question.',
    'Mixed revision: alternate Lower and Upper Sixth topics in practice sets, so links between them (respiration and muscle; membranes and nerve impulses; enzymes and gene regulation) become clear.',
  ], 'ab-gce-0710', 'Work it out first, then match the options.',
  ['In a Hardy-Weinberg item, 1% of the population shows the recessive trait. The quickest first step is:', ['q = √0.01 = 0.1', 'p = 0.01', '2pq = 0.01', 'q = 0.01'], 'Start from q².'],
  [['Distractor', 'A wrong option designed to attract careless answers.']],
  [
    { q: 'An item asks: "Which change shortens during muscle contraction?" A: A band; B: myosin filament; C: I band; D: actin filament. Reason it out.', steps: ['**Filaments slide; neither actin nor myosin shortens.**', '**The A band equals the myosin length: unchanged.**', '**The I band (actin only) shortens: answer C.**'] },
  ]),

  L('ab-quickfacts-7', 'ab-u6-paper1', '18.2', 'Upper Sixth quick facts', 14, ['Examination'], [
    'Molecular genetics and inheritance:\n- semi-conservative replication (Meselson and Stahl); AUG start; UAA, UAG, UGA stop; code triplet, degenerate, universal\n- lac operon: repressor on operator without lactose\n- trisomy 21 Down; 47,XXY Klinefelter; 45,X Turner\n- PCR 95, 55, 72 °C; DNA moves to the positive electrode\n- 3 : 1; 9 : 3 : 3 : 1; test crosses 1 : 1 and 1 : 1 : 1 : 1; epistasis 9 : 3 : 4, 12 : 3 : 1, 9 : 7\n- χ² critical values 3.84, 5.99, 7.82 for 1, 2, 3 df.',
    'Control systems:\n- PCT reabsorbs all glucose; loop of Henle concentrates the medulla; ADH from the posterior pituitary inserts aquaporins\n- insulin (β cells) lowers glucose; glucagon (α cells) raises it\n- resting potential −70 mV; threshold −55 mV; peak +40 mV; saltatory conduction\n- Ca²⁺ triggers transmitter release and binds troponin in muscle; ATP detaches myosin.',
    'Reproduction, evolution, ecology:\n- FSH → oestrogen → LH surge → ovulation → progesterone; hCG keeps the corpus luteum\n- homologous structures; allopatric and sympatric speciation (Barombi Mbo cichlids)\n- p² + 2pq + q² = 1\n- about 10% energy transfer; NPP = GPP − R\n- Nitrosomonas then Nitrobacter; Rhizobium fixes; denitrifiers in waterlogged soil\n- Lincoln index N = n₁n₂/m.',
  ], 'ab-gce-0710', 'Numbers and names that Paper 1 tests again and again.',
  ['Which hormone is released from the posterior pituitary?', ['ADH', 'FSH', 'LH', 'insulin'], 'FSH and LH come from the anterior pituitary.'],
  [['Quick fact', 'A short, exact piece of knowledge often tested in multiple choice.']],
  [
    { q: 'Write a memory line for the PCR temperatures.', steps: ['**"Split, stick, stretch": 95 °C to split the strands, 55 °C for primers to stick, 72 °C for Taq to stretch the new strands.**'] },
  ]),

  // ---------- 19. Paper 2 ----------
  L('ab-crossnotation-7', 'ab-u6-paper2', '19.1', 'Setting out genetics problems', 15, ['Examination', 'Inheritance'], [
    'A full genetic cross earns marks at every step:\n- define the symbols (for example, "T = tall, t = dwarf")\n- parental **phenotypes** and **genotypes**\n- **gametes**, circled, each with one allele of each gene\n- a **Punnett square** or branching diagram\n- offspring **genotypes**, **phenotypes** and the **ratio** (or probability).\nFor sex-linked genes, write alleles as superscripts on X (X^H, X^h) and show Y with no allele.',
    'For the χ² test in Paper 2: state the null hypothesis; show a table of O, E, (O − E), (O − E)² and (O − E)²/E; give χ², the degrees of freedom and the critical value at p = 0.05; and write a conclusion in words relating to the genetics (fits the ratio, or suggests linkage or selection).',
    'For linkage questions, identify the parental (most common) and recombinant (least common) classes, calculate the recombination frequency and, with three genes, build the map from the distances.',
  ], 'ab-chi-table', 'Symbols, parents, gametes, square, offspring, ratio.',
  ['In a cross diagram, gametes should be shown as:', ['haploid, one allele of each gene, often circled', 'pairs of alleles', 'diploid cells', 'phenotypes'], 'Gametes carry one allele per gene.'],
  [['Genetic diagram', 'A set-out cross showing parents, gametes and offspring.'], ['Recombinant class', 'Offspring with new combinations of parental alleles.']],
  [
    { q: 'Set out the cross between a carrier woman and a man with haemophilia.', steps: ['**Parents: X^H X^h (carrier) × X^h Y (haemophilia).**', '**Gametes: X^H, X^h and X^h, Y.**', '**Offspring: X^H X^h carrier daughter; X^h X^h haemophiliac daughter; X^H Y normal son; X^h Y haemophiliac son.**', '**Each 1/4: half of daughters and half of sons affected.**'] },
  ]),

  L('ab-u6essay-7', 'ab-u6-paper2', '19.2', 'Structured essays on control systems and ecology', 15, ['Examination'], [
    'Essay plans that follow the biological sequence score best:\n- **the nephron**: glomerulus (ultrafiltration, pressure) → PCT (selective reabsorption, adaptations) → loop of Henle (counter-current, medulla) → DCT → collecting duct (ADH, aquaporins)\n- **the action potential**: resting potential (pump, leak) → threshold → depolarisation (Na⁺) → repolarisation (K⁺) → hyperpolarisation → refractory period → conduction (local currents, myelin)\n- **eutrophication**: nutrient input → bloom → light loss → death → decomposers → oxygen depletion → fish death → prevention.',
    'Data interpretation: describe the trend with figures and units, then explain it with biology; compare two curves at specific points; do not invent data.',
    'Diagrams in essays: a labelled nephron, synapse or sarcomere can replace a paragraph; keep it clear and refer to it in the text.',
  ], 'ab-nephron', 'Follow the sequence; quote the data; label the diagram.',
  ['When describing a graph in Paper 2, you should:', ['state the trend and quote values with units', 'give only the explanation', 'copy the axis labels', 'draw a new graph'], 'Describe, then explain.'],
  [['Essay plan', 'A short list of points in logical order written before the essay.']],
  [
    { q: 'Plan an answer: "Explain how the loop of Henle enables mammals to produce concentrated urine." (6 marks)', steps: ['**The ascending limb actively pumps Na⁺ and Cl⁻ into the medulla and is impermeable to water.**', '**The descending limb is permeable: water leaves by osmosis; the effect multiplies down the loop (counter-current).**', '**The medulla becomes very concentrated.**', '**The collecting duct passes through it; with ADH, water leaves by osmosis, concentrating the urine.**'] },
  ]),

  // ---------- 20. Mock and remediation ----------
  L('ab-u6mock-7', 'ab-u6-mock', '20.1', 'The mock GCE', 12, ['Examination'], [
    'The regional mock reproduces the GCE: **Paper 1** (multiple choice, 1½ hours), **Paper 2** (structured and essay questions, 3 hours) and the **practical** (Paper 3). Sit it under real conditions, then mark it with the scheme.',
    'Record marks by topic and by skill: recall, calculation, genetic crosses, data interpretation, essays, drawings and practical techniques. The pattern tells you where to spend the remaining weeks.',
    'Plan the Easter break: two weak topics per day with active recall (blank-page diagrams, worked problems) and one timed paper every few days.',
  ], 'ab-final-term', 'Diagnose by topic and by skill.',
  ['The most useful record of a mock is:', ['marks lost by topic and by skill', 'only the total', 'the time you finished', 'your neighbour’s score'], 'It guides revision.'],
  [['Mock examination', 'A practice examination under real conditions.'], ['Active recall', 'Retrieving knowledge from memory without notes.']],
  [
    { q: 'You lost most marks on χ² tests and drawings. Suggest a one-week plan.', steps: ['**Days 1 to 3: two χ² problems a day with full tables and conclusions.**', '**Days 4 and 5: drawings from slides or photographs, with labels and magnification.**', '**Days 6 and 7: a timed Paper 2 section mixing both skills; mark and correct.**'] },
  ]),

  L('ab-u6remediation-7', 'ab-u6-mock', '20.2', 'Common errors and final clinics', 14, ['Examination'], [
    'Errors seen most often:\n- genetic crosses without gametes, or gametes with two alleles of the same gene\n- χ² with the wrong degrees of freedom, or percentages instead of counts\n- confusing transcription and translation, or codon and anticodon\n- saying impulses are "chemical" along the axon (they are electrical; chemical only at synapses)\n- saying the filaments shorten in muscle (they slide)\n- in Hardy-Weinberg, taking √ of the dominant phenotype frequency (start from q²)\n- drawings with shading, sketchy lines or crossed labels.',
    'Final clinics: Hardy-Weinberg problems, homeostatic pathways (kidney, blood glucose, temperature), plant physiology (transpiration, translocation, hormones), and energy calculations.',
    'In the last days, sleep well, revise from your own summary sheets and diagrams, check your practical skills, and arrive early with equipment for every paper.',
  ], 'ab-final-term', 'Fix the classic errors before the GCE.',
  ['In Hardy-Weinberg problems you should start from:', ['q², the frequency of the recessive phenotype', 'p², the dominant phenotype', 'the heterozygotes', 'the total population'], 'Dominant phenotypes include heterozygotes.'],
  [['Remediation', 'Targeted correction of weak areas.']],
  [
    { q: 'Correct this answer: "In a population, 64% show the dominant phenotype, so p = √0.64 = 0.8."', steps: ['**The dominant phenotype includes both AA and Aa, so it is p² + 2pq, not p².**', '**Recessive phenotype = 36%: q² = 0.36, q = 0.6.**', '**So p = 1 − 0.6 = 0.4, not 0.8.**'] },
  ]),
];
