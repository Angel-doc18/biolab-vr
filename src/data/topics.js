// Topic catalog, aligned to the WAEC/GCE Biology syllabus core sections.
// Each topic drives: the sidebar entry, the specimen card, the 3D scene
// picked in Scene3D (via MODELS[topic.id]), the label leader-lines, and
// the quiz. `labels[].part` must match the part keys used inside that
// topic's model component so clicking a 3D part highlights the right
// label in the side panel.

export const topics = [
  {
    id: 'cell-structure',
    title: 'The Cell',
    system: 'cellular',
    summary:
      'The basic structural and functional unit of all living organisms. Compare plant and animal cell organelles and their functions.',
    hasModel: true,
    labels: [
      { part: 'nucleus', text: 'Nucleus — controls cell activities, holds genetic material' },
      { part: 'mitochondrion', text: 'Mitochondrion — site of respiration, releases energy' },
      { part: 'membrane', text: 'Cell membrane — controls what enters and leaves the cell' },
      { part: 'vacuole', text: 'Vacuole — stores cell sap, maintains turgor pressure' }
    ],
    quiz: [
      { q: 'Which organelle is described as the "powerhouse of the cell"?', options: ['Nucleus', 'Mitochondrion', 'Ribosome', 'Vacuole'], answer: 1 },
      { q: 'A large permanent vacuole is typically found in:', options: ['Animal cells only', 'Plant cells', 'Bacteria only', 'Red blood cells'], answer: 1 },
      { q: 'What controls the movement of substances in and out of a cell?', options: ['Cell wall', 'Nucleus', 'Cell membrane', 'Cytoplasm'], answer: 2 },
      { q: 'Which structure contains the chromosomes?', options: ['Cytoplasm', 'Nucleus', 'Mitochondrion', 'Cell membrane'], answer: 1 },
      { q: 'The jelly-like substance where most cell activities take place is the:', options: ['Cytoplasm', 'Nucleolus', 'Cell wall', 'Chloroplast'], answer: 0 },
      { q: 'A rigid structure that gives plant cells their fixed shape is the:', options: ['Cell membrane', 'Nucleus', 'Cell wall', 'Vacuole'], answer: 2 },
      { q: 'Which organelle in plant cells traps light energy for photosynthesis?', options: ['Mitochondrion', 'Chloroplast', 'Nucleus', 'Vacuole'], answer: 1 },
      { q: 'Respiration in a cell mainly takes place in the:', options: ['Nucleus', 'Vacuole', 'Mitochondrion', 'Cell wall'], answer: 2 },
      { q: 'Which of these is found in an animal cell but NOT typically in a plant cell?', options: ['Cell wall', 'Large permanent vacuole', 'Small or absent vacuole', 'Chloroplast'], answer: 2 },
      { q: 'The property of the cell membrane that lets it control which molecules pass through is called:', options: ['Rigidity', 'Selective permeability', 'Photosynthesis', 'Respiration'], answer: 1 }
    ]
  },
  {
    id: 'circulatory-system',
    title: 'Circulatory System',
    system: 'circulatory',
    summary:
      'The heart, blood vessels and blood work together to transport oxygen, nutrients and waste around the body.',
    hasModel: true,
    labels: [
      { part: 'heart', text: 'Heart — muscular pump that drives blood around the body' },
      { part: 'atrium', text: 'Atrium — upper chamber that receives blood into the heart' },
      { part: 'ventricle', text: 'Ventricle — lower chamber that pumps blood out of the heart' },
      { part: 'artery', text: 'Artery — carries oxygenated blood away from the heart' },
      { part: 'vein', text: 'Vein — carries deoxygenated blood back to the heart' }
    ],
    quiz: [
      { q: 'Which blood vessel carries blood away from the heart?', options: ['Vein', 'Artery', 'Capillary', 'Vena cava'], answer: 1 },
      { q: 'Which chamber of the heart pumps oxygenated blood to the body?', options: ['Right atrium', 'Left atrium', 'Right ventricle', 'Left ventricle'], answer: 3 },
      { q: 'The upper chambers of the heart that receive incoming blood are called:', options: ['Ventricles', 'Atria', 'Valves', 'Arteries'], answer: 1 },
      { q: 'Which blood vessels have thin, permeable walls allowing exchange with tissues?', options: ['Arteries', 'Veins', 'Capillaries', 'Aorta'], answer: 2 },
      { q: 'Veins have valves mainly to:', options: ['Speed up blood flow', 'Prevent backflow of blood', 'Add oxygen to blood', 'Filter waste'], answer: 1 },
      { q: 'The main component of blood that carries oxygen is:', options: ['Platelets', 'Plasma', 'Red blood cells', 'White blood cells'], answer: 2 },
      { q: 'Which type of blood vessel has the thickest, most muscular walls?', options: ['Vein', 'Artery', 'Capillary', 'Venule'], answer: 1 },
      { q: 'White blood cells mainly function to:', options: ['Carry oxygen', 'Clot blood', 'Fight infection', 'Transport nutrients'], answer: 2 },
      { q: 'The heartbeat sound is produced mainly by:', options: ['Blood flowing through arteries', 'Closing of heart valves', 'Contraction of the diaphragm', 'Expansion of the lungs'], answer: 1 },
      { q: 'A human "double circulation" means blood passes through the heart:', options: ['Once per full circuit of the body', 'Twice per full circuit of the body', 'Only through the lungs', 'Only through the body tissues'], answer: 1 }
    ]
  },
  {
    id: 'respiratory-system',
    title: 'Respiratory System',
    system: 'respiratory',
    summary: 'Gas exchange in the lungs — how oxygen enters and carbon dioxide leaves the bloodstream.',
    hasModel: true,
    labels: [
      { part: 'trachea', text: 'Trachea — windpipe carrying air to the bronchi' },
      { part: 'bronchus', text: 'Bronchus — branch of the trachea leading into each lung' },
      { part: 'lung', text: 'Lung — organ where gas exchange takes place' },
      { part: 'alveoli', text: 'Alveoli — tiny air sacs where gas exchange occurs' },
      { part: 'diaphragm', text: 'Diaphragm — muscle that drives breathing movements' }
    ],
    quiz: [
      { q: 'Gas exchange in the lungs takes place in the:', options: ['Trachea', 'Bronchus', 'Alveoli', 'Larynx'], answer: 2 },
      { q: 'The tube that carries air from the throat down into the chest is the:', options: ['Oesophagus', 'Trachea', 'Bronchiole', 'Alveolus'], answer: 1 },
      { q: 'Each bronchus divides repeatedly into smaller tubes called:', options: ['Alveoli', 'Bronchioles', 'Capillaries', 'Villi'], answer: 1 },
      { q: 'During inhalation, the diaphragm:', options: ['Relaxes and moves up', 'Contracts and moves down', 'Stops moving', 'Pushes air out'], answer: 1 },
      { q: 'Alveoli are adapted for efficient gas exchange mainly because they:', options: ['Have thick walls', 'Have a large surface area and thin walls', 'Contain muscle tissue', 'Store oxygen'], answer: 1 },
      { q: 'Oxygen moves from the alveoli into the blood by the process of:', options: ['Active transport', 'Diffusion', 'Osmosis', 'Filtration'], answer: 1 },
      { q: 'The gas that is breathed out in a higher concentration than it is breathed in is:', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], answer: 2 },
      { q: 'Which structure prevents food from entering the trachea while swallowing?', options: ['Epiglottis', 'Diaphragm', 'Larynx', 'Bronchiole'], answer: 0 },
      { q: 'The lungs are protected within the chest by the:', options: ['Vertebrae', 'Rib cage', 'Pelvis', 'Skull'], answer: 1 },
      { q: 'Alveoli are surrounded by a dense network of:', options: ['Muscle fibres', 'Capillaries', 'Nerve cells', 'Cartilage rings'], answer: 1 }
    ]
  },
  {
    id: 'digestive-system',
    title: 'Digestive System',
    system: 'digestive',
    summary: 'How food is broken down, absorbed and used by the body, from ingestion to egestion.',
    hasModel: true,
    labels: [
      { part: 'oesophagus', text: 'Oesophagus — muscular tube that pushes food to the stomach' },
      { part: 'stomach', text: 'Stomach — churns food, begins protein digestion' },
      { part: 'liver', text: 'Liver — produces bile to help digest fats' },
      { part: 'small-intestine', text: 'Small intestine — main site of digestion and absorption' },
      { part: 'large-intestine', text: 'Large intestine — absorbs water, forms faeces' }
    ],
    quiz: [
      { q: 'Where does most digestion and absorption of food occur?', options: ['Stomach', 'Large intestine', 'Small intestine', 'Oesophagus'], answer: 2 },
      { q: 'The wave-like muscle movement that pushes food along the gut is called:', options: ['Digestion', 'Peristalsis', 'Absorption', 'Egestion'], answer: 1 },
      { q: 'Bile, which helps digest fats, is produced by the:', options: ['Pancreas', 'Stomach', 'Liver', 'Small intestine'], answer: 2 },
      { q: 'The stomach begins the digestion of which nutrient using pepsin?', options: ['Carbohydrates', 'Proteins', 'Fats', 'Vitamins'], answer: 1 },
      { q: 'The inner wall of the small intestine has finger-like projections called:', options: ['Villi', 'Alveoli', 'Cilia', 'Papillae'], answer: 0 },
      { q: 'Villi increase the efficiency of the small intestine mainly by:', options: ['Producing more enzymes', 'Increasing surface area for absorption', 'Killing bacteria', 'Storing undigested food'], answer: 1 },
      { q: 'The main function of the large intestine is to:', options: ['Digest proteins', 'Absorb water and form faeces', 'Produce bile', 'Absorb glucose'], answer: 1 },
      { q: 'Undigested waste is finally removed from the body through the process of:', options: ['Excretion', 'Egestion', 'Secretion', 'Respiration'], answer: 1 },
      { q: 'Which organ produces enzymes and also regulates blood sugar?', options: ['Liver', 'Pancreas', 'Stomach', 'Gall bladder'], answer: 1 },
      { q: 'Food is pushed from the mouth to the stomach through the:', options: ['Trachea', 'Oesophagus', 'Ureter', 'Bronchus'], answer: 1 }
    ]
  },
  {
    id: 'excretory-system',
    title: 'Excretory System',
    system: 'excretory',
    summary: 'The kidney and nephron — how the body removes metabolic waste and regulates water balance.',
    hasModel: true,
    labels: [
      { part: 'kidney', text: 'Kidney — filters blood and produces urine' },
      { part: 'nephron', text: 'Nephron — the functional filtering unit of the kidney' },
      { part: 'ureter', text: 'Ureter — tube carrying urine from kidney to bladder' },
      { part: 'bladder', text: 'Bladder — stores urine before it leaves the body' }
    ],
    quiz: [
      { q: 'The functional unit of the kidney is the:', options: ['Nephron', 'Neuron', 'Alveolus', 'Villus'], answer: 0 },
      { q: 'The main waste product removed by the kidneys, formed from excess amino acids, is:', options: ['Carbon dioxide', 'Urea', 'Bile', 'Glucose'], answer: 1 },
      { q: 'Urine travels from the kidney to the bladder through the:', options: ['Urethra', 'Ureter', 'Oesophagus', 'Aorta'], answer: 1 },
      { q: 'The bladder is best described as an organ that:', options: ['Filters blood', 'Produces urine', 'Stores urine temporarily', 'Produces bile'], answer: 2 },
      { q: 'Excretion is defined as the removal from the body of:', options: ['Undigested food', 'Metabolic waste products', 'Excess water only', 'Sweat only'], answer: 1 },
      { q: 'Which organ, besides the kidney, also excretes waste (carbon dioxide)?', options: ['Liver', 'Lungs', 'Stomach', 'Pancreas'], answer: 1 },
      { q: 'The skin excretes waste mainly in the form of:', options: ['Urine', 'Bile', 'Sweat', 'Saliva'], answer: 2 },
      { q: 'Blood enters the kidney to be filtered through the:', options: ['Renal artery', 'Renal vein', 'Ureter', 'Urethra'], answer: 0 },
      { q: 'Useful substances such as glucose that are filtered out are returned to the blood by:', options: ['Filtration', 'Reabsorption', 'Egestion', 'Secretion'], answer: 1 },
      { q: 'Urine finally leaves the body through the:', options: ['Ureter', 'Urethra', 'Bile duct', 'Trachea'], answer: 1 }
    ]
  },
  {
    id: 'reproductive-system',
    title: 'Reproduction',
    system: 'reproductive',
    summary: 'Structures and processes of sexual reproduction in flowering plants, using the flower as the model organ.',
    hasModel: true,
    labels: [
      { part: 'petal', text: 'Petal — often brightly coloured, attracts pollinators' },
      { part: 'sepal', text: 'Sepal — protects the flower bud before it opens' },
      { part: 'anther', text: 'Anther — produces pollen grains, the male gametes' },
      { part: 'stigma', text: 'Stigma — receives pollen during pollination' },
      { part: 'ovary', text: 'Ovary — contains ovules that develop into seeds after fertilisation' }
    ],
    quiz: [
      { q: 'In a flower, pollen is produced by the:', options: ['Stigma', 'Anther', 'Ovary', 'Sepal'], answer: 1 },
      { q: 'The female part of a flower that receives pollen is the:', options: ['Anther', 'Filament', 'Stigma', 'Sepal'], answer: 2 },
      { q: 'Sepals mainly function to:', options: ['Attract insects', 'Produce pollen', 'Protect the flower bud', 'Receive pollen'], answer: 2 },
      { q: 'The transfer of pollen from anther to stigma is called:', options: ['Fertilisation', 'Pollination', 'Germination', 'Dispersal'], answer: 1 },
      { q: 'After fertilisation, the ovary of a flower typically develops into the:', options: ['Seed', 'Fruit', 'Petal', 'Root'], answer: 1 },
      { q: 'After fertilisation, an ovule develops into a:', options: ['Fruit', 'Seed', 'Petal', 'Stigma'], answer: 1 },
      { q: 'Flowers pollinated by insects are usually:', options: ['Small and dull-coloured', 'Large, colourful and scented', 'Scentless', 'Without petals'], answer: 1 },
      { q: 'Wind-pollinated flowers typically produce:', options: ['Large amounts of light, dry pollen', 'Sticky nectar only', 'Very few pollen grains', 'Brightly coloured petals'], answer: 0 },
      { q: 'The male reproductive part of a flower, made up of anther and filament, is called the:', options: ['Carpel', 'Stamen', 'Pistil', 'Stigma'], answer: 1 },
      { q: 'Fertilisation in a flowering plant occurs when a pollen nucleus fuses with:', options: ['A petal cell', 'An egg cell (ovule)', 'A stigma cell', 'A sepal cell'], answer: 1 }
    ]
  },
  {
    id: 'genetics',
    title: 'Genetics & Variation',
    system: 'genetics',
    summary: 'How traits pass from parents to offspring, and the sources of variation within a species.',
    hasModel: true,
    labels: [
      { part: 'chromosome', text: 'Chromosome — thread-like structure carrying genes' },
      { part: 'dna', text: 'DNA — the molecule that carries genetic information, shaped as a double helix' },
      { part: 'gene', text: 'Gene — a section of DNA that codes for a particular characteristic' },
      { part: 'allele', text: 'Allele — an alternative form of a gene' }
    ],
    quiz: [
      { q: 'Genes are carried on structures called:', options: ['Ribosomes', 'Chromosomes', 'Mitochondria', 'Vacuoles'], answer: 1 },
      { q: 'DNA is best described as a molecule shaped like a:', options: ['Single strand', 'Double helix', 'Flat sheet', 'Ring only'], answer: 1 },
      { q: 'A section of DNA that codes for a particular characteristic is called a:', options: ['Chromosome', 'Gene', 'Nucleotide', 'Allele pair'], answer: 1 },
      { q: 'Alternative forms of the same gene are called:', options: ['Alleles', 'Genotypes', 'Phenotypes', 'Chromosomes'], answer: 0 },
      { q: 'An organism with two identical alleles for a trait is described as:', options: ['Heterozygous', 'Homozygous', 'Hybrid', 'Recessive'], answer: 1 },
      { q: 'A characteristic that is masked when a dominant allele is present is called:', options: ['Dominant', 'Recessive', 'Codominant', 'Mutant'], answer: 1 },
      { q: 'Variation caused by environmental factors rather than genes is called:', options: ['Genetic variation', 'Continuous variation only', 'Environmental (acquired) variation', 'Mutation'], answer: 2 },
      { q: 'A sudden change in the DNA sequence of a gene is called a:', options: ['Mutation', 'Mitosis', 'Fertilisation', 'Crossing over'], answer: 0 },
      { q: 'Human body cells normally contain how many chromosomes?', options: ['23', '46', '92', '12'], answer: 1 },
      { q: 'Sex cells (gametes) are produced by a type of cell division called:', options: ['Mitosis', 'Meiosis', 'Fertilisation', 'Binary fission'], answer: 1 }
    ]
  },
  {
    id: 'ecology',
    title: 'Ecology',
    system: 'ecology',
    summary: 'Relationships between organisms and their environment — ecosystems, food chains and nutrient cycles.',
    hasModel: true,
    labels: [
      { part: 'producer', text: 'Producer — organism that makes its own food, e.g. a green plant' },
      { part: 'primary-consumer', text: 'Primary consumer — herbivore that feeds directly on producers' },
      { part: 'secondary-consumer', text: 'Secondary consumer — carnivore that feeds on primary consumers' },
      { part: 'decomposer', text: 'Decomposer — breaks down dead matter, recycling nutrients' }
    ],
    quiz: [
      { q: 'In a food chain, green plants are classified as:', options: ['Producers', 'Primary consumers', 'Decomposers', 'Predators'], answer: 0 },
      { q: 'An organism that feeds directly on producers is called a:', options: ['Secondary consumer', 'Primary consumer', 'Decomposer', 'Predator only'], answer: 1 },
      { q: 'Organisms such as bacteria and fungi that break down dead organic matter are called:', options: ['Producers', 'Consumers', 'Decomposers', 'Predators'], answer: 2 },
      { q: 'The amount of energy available generally decreases as you move up a food chain because:', options: ['Energy is created at each level', 'Energy is lost as heat at each level', 'Producers store all the energy', 'Consumers do not use energy'], answer: 1 },
      { q: 'A network of interconnected food chains in a habitat is called a:', options: ['Food web', 'Food pyramid', 'Ecosystem cycle', 'Population'], answer: 0 },
      { q: 'All the members of one species living in the same area at the same time form a:', options: ['Community', 'Population', 'Ecosystem', 'Habitat'], answer: 1 },
      { q: 'The place where an organism normally lives is called its:', options: ['Niche', 'Habitat', 'Population', 'Biome'], answer: 1 },
      { q: 'Decomposers are important in an ecosystem mainly because they:', options: ['Produce oxygen', 'Recycle nutrients back into the soil', 'Hunt other animals', 'Photosynthesise'], answer: 1 },
      { q: 'A pyramid of numbers/energy in an ecosystem is typically widest at the:', options: ['Top (top predators)', 'Base (producers)', 'Middle only', 'It is always uniform'], answer: 1 },
      { q: 'The continuous movement of carbon between living things and the environment is called the:', options: ['Water cycle', 'Nitrogen cycle', 'Carbon cycle', 'Rock cycle'], answer: 2 }
    ]
  }
]

export const getTopic = (id) => topics.find((t) => t.id === id)
