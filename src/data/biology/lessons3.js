// Form 3 Biology lessons for the topics of the MINESEC Form 3 syllabus that the
// first lessons did not cover: water and cellular exchanges, classification, life
// cycles, crop and animal yield, diet and disease, HIV/AIDS and responsible
// behaviour, social insects, compost and fertilisers. Original text written for
// this app. **double asterisks** mark key terms (rendered bold). `examples` are
// worked examples.

export const LESSONS_3 = [
  // ---------------- Cells, water and cellular exchanges ----------------
  {
    id: 'bi-water-1',
    unit: 'cell',
    n: '1.3',
    title: 'Water: properties, uses and the water cycle',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Water', 'Cycles'],
    body: [
      'Water makes up about **70%** of the human body and up to 90% of a juicy fruit. It is a compound of hydrogen and oxygen (H₂O) that is liquid at the temperatures where most organisms live.',
      'Water is a very good **solvent**. Reactions in cells take place in solution, and blood plasma, lymph, urine and xylem sap all carry substances dissolved in water. Water is also a **raw material** of photosynthesis and the medium for digestion, which breaks food down by adding water (hydrolysis).',
      'Water takes in a lot of heat before its temperature rises, so the bodies of organisms and large lakes change temperature slowly. When water **evaporates** it carries heat away: this is how sweating cools us and transpiration cools leaves. Ice is less dense than liquid water and floats, so fish survive under frozen ponds. Water molecules also stick together, which lets a continuous column of water be pulled up the xylem.',
      'In the **water cycle**, the sun evaporates water from seas, rivers and soil, and plants add water vapour by **transpiration**. The vapour rises, cools and **condenses** into clouds, then falls as **precipitation** (rain). Rain soaks into the soil (**infiltration**) or flows over the surface (**run-off**) back to rivers and the sea. The cycle maintains itself with no beginning and no end, driven by the sun.',
      'The idea of a **cycle** is used across the sciences: carbon and nitrogen are recycled through living things in the same way, the stages of a life cycle return to the egg, and in mathematics a circle has no starting point. Cutting down forests breaks the water cycle locally, giving less rain and drier soils.',
    ],
    figure: 'water-cycle',
    tip: 'In the water cycle, name both **evaporation** (from water and soil) and **transpiration** (from leaves). Many answers forget that plants put water back into the air.',
    check: {
      q: 'Which property of water explains why sweating cools the body?',
      a: ['Evaporation of water takes heat away', 'Water is a good solvent', 'Ice floats on water', 'Water is transparent'],
      why: 'Changing liquid water into vapour needs heat energy, which is taken from the skin.',
    },
    terms: [
      ['Solvent', 'A liquid in which other substances dissolve.'],
      ['Transpiration', 'Loss of water vapour from the leaves of a plant.'],
      ['Precipitation', 'Water falling from clouds as rain, hail or snow.'],
    ],
  },
  {
    id: 'bi-exchange-1',
    unit: 'cell',
    n: '1.5',
    title: 'Diffusion, active transport and water in plants',
    minutes: 10,
    paper: 'Paper 2 & 3',
    tags: ['Practical', 'Cellular exchange'],
    body: [
      '**Diffusion** is the net movement of particles from where they are more concentrated to where they are less concentrated. It needs no energy from the cell. Oxygen diffuses from the alveoli into the blood, and carbon dioxide diffuses into a leaf through the stomata. Diffusion is faster when the gradient is steep, the surface is large, the distance is short and the temperature is high.',
      'Some molecules, such as glucose, are too large or too charged to pass through the membrane itself. They diffuse through special carrier or channel proteins in the membrane. This is **facilitated diffusion**: it still follows the gradient and still needs no energy.',
      '**Active transport** moves substances **against** a concentration gradient, from low to high concentration, using carrier proteins and **energy from respiration**. Root hair cells take in mineral ions such as nitrate this way, and the villi absorb glucose this way. Poisons that stop respiration also stop active transport.',
      'Cells are compared with the solution around them. In a **hypotonic** solution (more dilute than the cell) water enters by osmosis; in a **hypertonic** solution (more concentrated) water leaves; in an **isotonic** solution there is no net movement. This is why drips given in hospital are isotonic with blood.',
      'Water enters the root by osmosis and is pushed up a little by **root pressure**, which is why drops of water appear at leaf edges on cool mornings. Most water is pulled up by **transpiration**. **Turgor pressure** keeps soft stems upright; when water is lost faster than it is taken in, cells become flaccid and the plant **wilts**. A plant cell that loses still more water becomes **plasmolysed**.',
    ],
    figure: 'osmosis-cd',
    examples: [
      {
        q: 'A potato strip weighed 5.0 g. After 30 minutes in a sugar solution it weighed 5.6 g. Find the percentage change in mass and say what this shows about the solution.',
        steps: [
          'Change in mass = 5.6 − 5.0 = +0.6 g.',
          'Percentage change = 0.6 ÷ 5.0 × 100 = +12%.',
          'The strip gained water by osmosis, so the sugar solution was hypotonic (more dilute) compared with the potato cells.',
        ],
      },
      {
        q: 'Another strip changed from 5.0 g to 4.3 g in a stronger solution. Find the percentage change.',
        steps: [
          'Change in mass = 4.3 − 5.0 = −0.7 g.',
          'Percentage change = −0.7 ÷ 5.0 × 100 = −14%.',
          'The strip lost water, so this solution was hypertonic to the cells.',
        ],
      },
    ],
    tip: 'Always say what moves: in **osmosis** it is water, in **diffusion** and **active transport** it can be any particle. For active transport, say **against the concentration gradient** and **uses energy from respiration**.',
    check: {
      q: 'Why do root hair cells contain many mitochondria?',
      a: ['To release energy for the active transport of mineral ions', 'To carry out photosynthesis', 'To store water', 'To make the cell wall'],
      why: 'Active uptake of ions against the gradient needs energy, which mitochondria release by aerobic respiration.',
    },
    terms: [
      ['Active transport', 'Movement of a substance against its concentration gradient, using energy from respiration.'],
      ['Hypotonic', 'More dilute than the cell contents.'],
      ['Wilting', 'Drooping of a plant when its cells lose turgor.'],
    ],
  },

  // ---------------- Classification ----------------
  {
    id: 'bi-classify-1',
    unit: 'bi-f3-classify',
    n: '2.1',
    title: 'Classifying living things',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Kingdoms', 'Binomial names'],
    body: [
      'There are millions of kinds of living things. **Classification** places them in groups using features they share, so that they are easier to study and name. Grouping by shared features is used in other fields too: chemists group elements in the Periodic Table and librarians group books by subject.',
      'The groups form a ladder from large to small: **kingdom, phylum, class, order, family, genus, species**. A **species** is a group of organisms that can interbreed to produce fertile offspring. Members of a genus are closely related species.',
      'Each species has a **binomial** (two-part) Latin name, first used by Carl Linnaeus. The first word is the **genus** with a capital letter, the second the **species** with a small letter, printed in italics or underlined when handwritten: *Homo sapiens* (people), *Zea mays* (maize), *Manihot esculenta* (cassava), *Theobroma cacao* (cocoa) and *Anopheles gambiae* (a malaria mosquito). The same name is used everywhere, whatever the local name.',
      'Living things are placed in **five kingdoms**. **Prokaryotes** (bacteria) are single cells with no true nucleus. **Protoctists** are mostly single cells with a nucleus, such as Amoeba, Plasmodium and algae. **Fungi**, such as mushrooms and moulds, are made of hyphae with walls of chitin and feed on dead matter. **Plants** are many-celled, have chlorophyll and cellulose walls and make their own food. **Animals** are many-celled, have no cell walls and feed on other organisms.',
      '**Viruses** are not placed in any kingdom. They are not cells: they are a strand of DNA or RNA inside a protein coat and can only reproduce inside the cells of other organisms.',
    ],
    figure: 'classification-key',
    tip: 'When writing a binomial name, give the genus a **capital letter** and the species a **small letter**, and underline both words in handwritten answers.',
    check: {
      q: 'Which pair of organisms is most closely related?',
      a: ['Two species in the same genus', 'Two species in the same kingdom', 'Two species in the same class', 'Two species in the same phylum'],
      why: 'The smaller the group two species share, the more features they have in common.',
    },
    terms: [
      ['Species', 'Organisms that can interbreed to produce fertile offspring.'],
      ['Binomial name', 'The two-part Latin name of a species: genus then species.'],
      ['Prokaryote', 'An organism whose cell has no true nucleus, such as a bacterium.'],
    ],
  },
  {
    id: 'bi-classify-2',
    unit: 'bi-f3-classify',
    n: '2.2',
    title: 'Plant and animal groups and using keys',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Keys', 'Arthropods', 'Vertebrates'],
    body: [
      'The plant kingdom includes **mosses** (small, no true roots, spores), **ferns** (roots, stems and leaves called fronds, spores on the underside of the leaves), **conifers** (seeds in cones) and **flowering plants** (seeds inside fruits). Flowering plants are **monocotyledons**, such as maize, rice and oil palm, with one seed leaf and parallel leaf veins, or **dicotyledons**, such as beans, cocoa and mango, with two seed leaves and net-veined leaves.',
      'Animals without a backbone are **invertebrates**. **Annelids** such as earthworms have soft, ringed bodies. **Molluscs** such as snails have a soft body, usually in a shell. **Arthropods** have an exoskeleton and jointed legs: **insects** (three body parts, six legs, usually wings), **arachnids** such as spiders and ticks (two body parts, eight legs), **crustaceans** such as crabs and shrimps (two pairs of antennae), and **myriapods** such as millipedes (many segments with legs).',
      'Animals with a backbone are **vertebrates**. **Fish** have scales, fins and gills. **Amphibians** such as frogs have moist skin and lay eggs in water. **Reptiles** such as lizards and snakes have dry, scaly skin and lay eggs with leathery shells. **Birds** have feathers and lay hard-shelled eggs. **Mammals** have hair, and feed their young on milk from mammary glands. Birds and mammals keep a constant body temperature.',
      'A **dichotomous key** identifies an organism through a series of steps, each giving a choice between two contrasting descriptions. For example: 1a has six legs, go to 2; 1b has eight legs, it is an arachnid. Good keys use features that can be seen easily, such as the number of legs, never features such as size or colour that vary within a species.',
    ],
    figure: null,
    tip: 'When you make a key, write each step as a **pair of opposite statements** about one feature (wings present / wings absent), and end every branch with one name.',
    check: {
      q: 'A small animal has two body parts and eight legs. To which group does it belong?',
      a: ['Arachnids', 'Insects', 'Crustaceans', 'Myriapods'],
      why: 'Spiders, scorpions and ticks are arachnids. Insects have three body parts and six legs.',
    },
    terms: [
      ['Invertebrate', 'An animal without a backbone.'],
      ['Arthropod', 'An invertebrate with an exoskeleton and jointed legs.'],
      ['Dichotomous key', 'A key that gives a choice between two descriptions at each step.'],
    ],
  },

  // ---------------- Life cycles and adaptations ----------------
  {
    id: 'bi-lifecycle-1',
    unit: 'bi-f3-lifecycles',
    n: '3.1',
    title: 'Insect life cycles: mosquito, housefly and grasshopper',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Metamorphosis', 'Vectors'],
    body: [
      'A **life cycle** is the series of stages an organism passes through from egg to adult and back to egg. Insects change form as they grow; this is **metamorphosis**. Their exoskeleton cannot stretch, so they grow by **moulting** (shedding it) several times.',
      'In **complete metamorphosis** there are four stages: **egg, larva, pupa, adult**. The larva feeds and grows; inside the pupa its body is rebuilt into the adult. Mosquitoes, houseflies, beetles and butterflies develop this way. The larva and adult often eat different food and live in different places, so they do not compete.',
      'The **mosquito** lays eggs on stagnant water: Anopheles eggs float singly and Culex eggs form rafts. The larvae (wrigglers) live in the water, feeding on tiny organisms, and come to the surface to breathe air. The comma-shaped pupa also breathes at the surface. After about 10 days in warm weather an adult emerges. Only the **female** sucks blood, which she needs to make eggs, and in doing so Anopheles passes on malaria.',
      'The **housefly** lays eggs on rotting refuse, faeces and dung. The white, legless larvae (maggots) feed there, then form a brown puparium from which the adult fly emerges. Adult flies carry germs of cholera, typhoid and dysentery on their bodies to uncovered food.',
      'In **incomplete metamorphosis** there are three stages: **egg, nymph, adult**. The **nymph** looks like a small adult without wings and becomes more adult-like at each moult. Grasshoppers, cockroaches and termites develop this way.',
    ],
    figure: 'insect-life-cycles',
    tip: 'Name the stages **in order** and state the type of metamorphosis. A pupa is only found in **complete** metamorphosis; a nymph only in **incomplete** metamorphosis.',
    check: {
      q: 'Which insect develops through a nymph stage?',
      a: ['Cockroach', 'Housefly', 'Mosquito', 'Butterfly'],
      why: 'Cockroaches show incomplete metamorphosis: egg, nymph, adult. The others have larva and pupa stages.',
    },
    terms: [
      ['Metamorphosis', 'A change of body form during the life cycle.'],
      ['Larva', 'The feeding young stage in complete metamorphosis.'],
      ['Nymph', 'A young insect that looks like a small wingless adult.'],
    ],
  },
  {
    id: 'bi-lifecycle-2',
    unit: 'bi-f3-lifecycles',
    n: '3.2',
    title: 'Adaptations and using life cycles',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Adaptation', 'Pest control'],
    body: [
      'An **adaptation** is a feature that helps an organism survive and reproduce where it lives. A fish has a streamlined body, fins and gills. A bird has hollow bones, feathers and wings for flight. Cacti in dry places have leaves reduced to spines and thick stems that store water. Water lilies have air spaces that keep their leaves floating.',
      'Knowing a life cycle shows the **weakest stage** at which a harmful organism can be attacked. Mosquitoes are controlled by draining or covering stagnant water, clearing blocked gutters and old tyres, spreading oil on water to suffocate larvae, and keeping fish that eat larvae. Adults are kept away with treated nets, screens and repellents.',
      'Houseflies are controlled by removing their breeding places: refuse is kept in covered bins, latrines are covered and food is kept covered. Weevils in stored grain are controlled by drying the grain well, cleaning stores and keeping grain in airtight containers so that the eggs and larvae die.',
      'Knowing life cycles also raises **production**. Farmers time the planting of maize so that it flowers in the rainy season. Fish farmers stock ponds with young fish of the right size. Beekeepers and silk farmers manage the stages of their insects to collect honey, wax and silk.',
    ],
    figure: null,
    tip: 'For a control question, link each method to the **stage** it targets: draining water stops the **larvae**, nets protect against the **adults**.',
    check: {
      q: 'Why does spreading a thin film of oil on stagnant water kill mosquito larvae?',
      a: ['The larvae cannot reach the air to breathe', 'Oil is poisonous food', 'The water becomes too hot', 'Oil kills only the adults'],
      why: 'Larvae and pupae breathe air at the surface. The oil film blocks their breathing tubes and openings.',
    },
    terms: [
      ['Adaptation', 'A feature that helps an organism survive in its environment.'],
      ['Vector', 'An organism that carries a pathogen from one host to another.'],
      ['Breeding site', 'A place where an organism lays eggs and its young develop.'],
    ],
  },

  // ---------------- Crop and farm animal yield ----------------
  {
    id: 'bi-yield-1',
    unit: 'bi-f3-yield',
    n: '4.1',
    title: 'Mineral nutrients and deficiencies in crops',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Minerals', 'Crop yield'],
    body: [
      'Besides water, carbon dioxide and light, plants need **mineral ions** from the soil. The main ones, needed in large amounts, are nitrogen, phosphorus and potassium (**N, P, K**), with magnesium, calcium and sulphur. Iron, zinc and others are needed in tiny amounts.',
      '**Nitrogen** (as nitrate or ammonium) is used to make amino acids, proteins and chlorophyll. Lack of it gives **stunted growth** and **yellow older leaves**. **Magnesium** is part of the chlorophyll molecule; lack of it makes leaves yellow between the veins. **Phosphorus** is needed for roots and energy transfer; lack of it gives poor roots and purplish leaves. **Potassium** helps flowering, fruiting and resistance to disease; lack of it gives brown, scorched leaf edges. **Calcium** builds cell walls; in tomatoes, lack of it causes dark rotting at the bottom of the fruit.',
      'The effect of each mineral can be shown by a **water culture experiment**. Seedlings are grown in bottles of solution, each lacking one mineral, with one bottle containing all of them as the **control**. The bottles are covered to keep light out of the solution, and air is bubbled through to supply the roots with oxygen. After a few weeks the plants are compared.',
      'Farmers prevent deficiencies by adding manure or fertiliser, rotating crops with legumes, liming acid soils and not burning crop remains. Knowing the deficiency signs helps a farmer add the right nutrient instead of wasting money on the wrong one.',
    ],
    figure: null,
    tip: 'In a water culture answer, name the **control** (complete solution) and explain why the roots are kept **dark** (to stop algae growing) and **aerated** (roots respire).',
    check: {
      q: 'Why are the leaves of a magnesium-deficient plant yellow?',
      a: ['Magnesium is needed to make chlorophyll', 'Magnesium makes the leaves too wet', 'Magnesium is needed to make cellulose', 'Magnesium stops photosynthesis'],
      why: 'Without magnesium the plant cannot make enough chlorophyll, so the leaves lose their green colour.',
    },
    terms: [
      ['Deficiency', 'A shortage of a nutrient, which causes visible signs.'],
      ['Chlorosis', 'Yellowing of leaves caused by lack of chlorophyll.'],
      ['Water culture', 'Growing plants in solutions of known minerals instead of soil.'],
    ],
  },
  {
    id: 'bi-yield-2',
    unit: 'bi-f3-yield',
    n: '4.2',
    title: 'Feeding farm animals and making animal feed',
    minutes: 10,
    paper: 'Paper 2',
    tags: ['Animal feed', 'Calculation'],
    body: [
      'Farm animals need a **balanced ration**: energy foods, protein, minerals, vitamins and clean water. **Energy** feeds include maize, cassava chips and wheat or rice bran. **Protein** feeds include soya bean cake, groundnut cake, cottonseed cake, fish meal and blood meal. **Minerals** come from bone meal, oyster shell and salt, and **vitamins** from a premix.',
      'Different animals and ages need different rations. Broiler chicks need feed with about **22% protein** for fast growth, layers need about **16% protein** with plenty of **calcium** for eggshells, and growing pigs need about 16 to 18% protein. Cattle, sheep and goats can live mainly on grass, because microbes in the rumen digest cellulose, but they need salt licks and extra feed in the dry season.',
      'Signs of a poor ration include slow growth, poor egg laying, thin-shelled eggs, weak legs (rickets from lack of calcium, phosphorus or vitamin D) and feather pecking. Animals fed only on cassava peels or kitchen waste grow slowly because these foods are low in protein.',
      'A farmer can mix a feed of a chosen protein content from two ingredients using the **Pearson square**. Write the target protein in the centre, the protein of each ingredient on the left, and subtract across the diagonals (ignoring signs). The two answers are the parts of each ingredient to mix.',
    ],
    figure: null,
    examples: [
      {
        q: 'Maize contains 9% protein and soya bean meal 44%. How much of each is needed to make 100 kg of broiler feed with 20% protein?',
        steps: [
          'Parts of maize = 44 − 20 = 24. Parts of soya = 20 − 9 = 11. Total = 35 parts.',
          'Maize = 24 ÷ 35 × 100 kg = 68.6 kg. Soya = 11 ÷ 35 × 100 kg = 31.4 kg.',
          'Check: (68.6 × 9% + 31.4 × 44%) = 6.2 + 13.8 = 20 kg of protein in 100 kg, which is 20%.',
        ],
      },
    ],
    tip: 'In a Pearson square, the target value must lie **between** the protein contents of the two ingredients, or no mixture can reach it.',
    check: {
      q: 'Why is oyster shell added to the feed of laying hens?',
      a: ['It supplies calcium for eggshells', 'It supplies protein for growth', 'It supplies energy', 'It adds fibre'],
      why: 'Each eggshell is mostly calcium carbonate, so layers need far more calcium than other birds.',
    },
    terms: [
      ['Ration', 'The food given to an animal in a day.'],
      ['Concentrate', 'A feed rich in energy or protein, such as maize or soya cake.'],
      ['Premix', 'A mixture of vitamins and minerals added to feed in small amounts.'],
    ],
  },

  // ---------------- Nutrition and good health ----------------
  {
    id: 'bi-diet-1',
    unit: 'bi-f3-diet',
    n: '5.2',
    title: 'Daily needs and the energy value of a meal',
    minutes: 10,
    paper: 'Paper 2',
    tags: ['Energy', 'Calculation'],
    body: [
      'The energy in food is measured in **kilojoules (kJ)**. One gram of **carbohydrate** releases about **17 kJ**, one gram of **protein** about **17 kJ** and one gram of **fat** about **37 kJ** when respired. Fat is the richest energy store, so oily foods such as fried plantains and groundnuts are high in energy.',
      'Daily needs depend on **age, sex, body size, activity and condition**. An active teenage boy may need about 11 000 to 12 000 kJ a day and a girl of the same age about 9 000 kJ, because boys usually have more muscle. A farmer, a builder or a footballer needs more than a person who sits all day. Pregnant and breastfeeding women need extra energy, protein, **iron** and **calcium**. Girls and women need more iron than men to replace blood lost in menstruation.',
      'Children need more protein for their size than adults, because they are growing. Elderly people need less energy but still need protein, calcium and vitamins.',
      'Local meals can be improved cheaply. Adding beans, groundnuts, eggs or fish to a starchy meal of cassava, plantain or maize raises its protein. Adding green vegetables such as eru, njama njama or okra adds iron, vitamins and fibre. Fruits such as oranges, mangoes and pawpaw supply vitamin C. Using less oil and sugar helps prevent obesity.',
    ],
    figure: null,
    examples: [
      {
        q: 'A plate of fufu and eru contains 150 g of carbohydrate, 20 g of protein and 25 g of fat. Calculate its energy value.',
        steps: [
          'Carbohydrate: 150 × 17 = 2 550 kJ.',
          'Protein: 20 × 17 = 340 kJ. Fat: 25 × 37 = 925 kJ.',
          'Total = 2 550 + 340 + 925 = 3 815 kJ, about one third of the daily need of an active teenage boy.',
        ],
      },
      {
        q: 'A student needs 9 000 kJ a day. Breakfast gave 2 100 kJ and lunch 3 815 kJ. How much energy should supper provide?',
        steps: [
          'Energy so far = 2 100 + 3 815 = 5 915 kJ.',
          'Supper = 9 000 − 5 915 = 3 085 kJ.',
        ],
      },
    ],
    tip: 'Show the energy of each food class separately, then add. Use **17 kJ/g** for carbohydrate and protein and **37 kJ/g** for fat unless the question gives other values.',
    check: {
      q: 'Why does a pregnant woman need extra iron?',
      a: ['To make more red blood cells for herself and the baby', 'To make her bones lighter', 'To reduce her need for protein', 'To store more fat'],
      why: 'Iron is part of haemoglobin. Her blood volume increases and the fetus builds its own blood.',
    },
    terms: [
      ['Kilojoule (kJ)', 'The unit used to measure the energy in food.'],
      ['Energy value', 'The energy released when a food is respired.'],
      ['Malnutrition', 'Ill health caused by a diet with too little, too much or the wrong balance of nutrients.'],
    ],
  },

  // ---------------- Diseases of crops, animals and humans ----------------
  {
    id: 'bi-disease-1',
    unit: 'bi-f3-disease',
    n: '6.1',
    title: 'Diseases and pests of crops and farm animals',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Crops', 'Livestock', 'Pests'],
    body: [
      'Crop diseases reduce harvests and income. **Black pod** of cocoa, common in the South West and Centre regions, is caused by *Phytophthora*, a fungus-like organism that spreads by spores in wet weather; infected pods turn brown and rot. **Late blight** of potatoes and tomatoes in the western highlands is caused by *Phytophthora infestans*. **Corn smut** is a fungus that forms grey swellings on maize cobs. **Cassava mosaic disease** is caused by a virus carried by whiteflies, giving twisted, yellow-patterned leaves.',
      'Plant diseases are controlled by removing and burning infected parts, spraying fungicides (such as copper compounds on cocoa), planting resistant varieties and clean cuttings, spacing and pruning to let air through, and rotating crops.',
      '**Newcastle disease** is a virus disease of poultry that can kill a whole flock; birds gasp, twist their necks and have green diarrhoea. It is prevented by **vaccination**. **Black quarter** (blackleg) is a bacterial disease of young cattle with painful swollen legs, also prevented by vaccination.',
      '**Pests** are animals that damage crops, stored food or livestock. **Weevils** eat stored maize and beans, **ticks** and **lice** suck the blood of animals and spread diseases, and **jiggers** burrow into the feet of people and pigs. **Weeds** compete with crops for light, water and minerals. Pests are controlled by clean storage, dipping and spraying animals, weeding, and biological control.',
    ],
    figure: null,
    tip: 'For each disease give the **cause** (virus, bacterium, fungus), the **sign** and one **control**. Antibiotics do not work against viruses such as Newcastle disease: vaccination prevents it.',
    check: {
      q: 'Which control method prevents Newcastle disease in chickens?',
      a: ['Vaccination', 'Spraying a fungicide', 'Weeding', 'Giving antibiotics after infection'],
      why: 'Newcastle disease is caused by a virus. Vaccines make the birds immune before they meet it.',
    },
    terms: [
      ['Pest', 'An organism that damages crops, stored food or animals.'],
      ['Fungicide', 'A chemical that kills fungi.'],
      ['Resistant variety', 'A crop variety that is not easily harmed by a disease.'],
    ],
  },
  {
    id: 'bi-disease-2',
    unit: 'bi-f3-disease',
    n: '6.2',
    title: 'Malaria, cholera and dysentery, and safe medicines',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Human disease', 'Hygiene'],
    body: [
      '**Malaria** is caused by the protozoan *Plasmodium* and spread by the bite of an infected female **Anopheles** mosquito. Signs are fever with shivering, headache, joint pains and vomiting; severe malaria in young children can kill within days. A **rapid diagnostic test** at a health centre confirms it, and it is treated with the full course of the prescribed drugs. Prevention: sleep under insecticide-treated nets, remove stagnant water and clear bushes near houses.',
      '**Cholera** is caused by a bacterium in water or food contaminated with faeces. It causes sudden, severe watery diarrhoea that can kill by **dehydration** within hours. The urgent treatment is **oral rehydration solution** (ORS), clean water with salt and sugar, and medical care. **Dysentery** is diarrhoea with blood, caused by bacteria (bacillary dysentery) or by the protozoan *Entamoeba* (amoebic dysentery).',
      'These diseases are prevented by drinking **treated water** (boiled, filtered or chlorinated), washing hands with soap after using the toilet and before eating, using latrines, covering food and washing fruits and vegetables. Towns treat water by settling, filtering and chlorinating it before supply.',
      '**Junk food**, high in sugar, salt and fat but low in vitamins and fibre, harms health over time. **Self-medication** with tablets bought from street sellers is dangerous: the drugs may be fake, expired or wrongly stored, the dose may be wrong, and incomplete treatment helps germs become **resistant**. Medicines should come from a pharmacy with a prescription from a health worker.',
    ],
    figure: 'water-treatment',
    tip: 'For cholera, explain that death is caused by **dehydration**, and that ORS works by replacing the **water and salts** lost.',
    check: {
      q: 'Why are mosquito nets treated with insecticide?',
      a: ['To kill or repel mosquitoes that land on the net', 'To make the net stronger', 'To kill Plasmodium in the blood', 'To keep the sleeper warm'],
      why: 'The insecticide kills mosquitoes that touch the net, protecting the sleeper and reducing mosquito numbers.',
    },
    terms: [
      ['Dehydration', 'Dangerous loss of water from the body.'],
      ['Oral rehydration solution', 'Water with salt and sugar given to replace fluid lost in diarrhoea.'],
      ['Self-medication', 'Taking medicines without advice from a health worker.'],
    ],
  },

  // ---------------- HIV/AIDS, STIs and Ebola ----------------
  {
    id: 'bi-hiv-1',
    unit: 'bi-f3-hiv',
    n: '7.1',
    title: 'How HIV, STIs and Ebola spread',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['HIV/AIDS', 'Transmission'],
    body: [
      '**HIV** (human immunodeficiency virus) attacks white blood cells called lymphocytes, which defend the body. Over several years, without treatment, the immune system becomes so weak that other infections such as TB and pneumonia take hold. This late stage is **AIDS** (acquired immune deficiency syndrome).',
      'HIV is found in **blood, semen, vaginal fluids and breast milk**. It spreads in three ways:\n- **unprotected sexual intercourse** with an infected person\n- **infected blood**: shared needles, razor blades, unsterilised instruments\n- **from mother to child** during pregnancy, birth or breastfeeding',
      'HIV is **not** spread by shaking hands, hugging, sharing food or plates, mosquito bites or sitting in the same class.',
      '**Sexually transmitted infections** (STIs) such as gonorrhoea, syphilis and chlamydia spread through unprotected sex. They can cause pain, discharge and sores, but many have no signs at first. Untreated STIs can cause **infertility**, and the sores make HIV infection easier.',
      '**Ebola virus disease** causes high fever, weakness, vomiting, diarrhoea and sometimes bleeding. It kills many of those infected. It spreads through direct contact with:\n- the **blood and body fluids** of a sick person\n- the body of someone who has died of it, for example when washing the body\n- infected bushmeat, such as bats and monkeys',
      'Because people with HIV can look healthy for years, the only way to know one’s status is an **HIV test**, which is confidential at health centres.',
    ],
    figure: null,
    tip: 'When asked how HIV spreads, give the **three routes**: sexual contact, blood, and mother to child. Also be ready to say how it is **not** spread.',
    check: {
      q: 'Which of these does NOT spread HIV?',
      a: ['Sharing a plate of food', 'Sharing a razor blade', 'Unprotected sex', 'Breastfeeding by an untreated mother'],
      why: 'HIV is not passed on by food, saliva in normal contact or touch. It needs blood, sexual fluids or breast milk.',
    },
    terms: [
      ['HIV', 'The virus that weakens the immune system and leads to AIDS.'],
      ['STI', 'An infection passed on through sexual contact.'],
      ['Transmission', 'The passing of a disease from one person to another.'],
    ],
  },
  {
    id: 'bi-hiv-2',
    unit: 'bi-f3-hiv',
    n: '7.2',
    title: 'Saying no: responsible behaviour and getting care',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Life skills', 'Prevention'],
    body: [
      'Some behaviours put young people at high risk of HIV, STIs and early pregnancy: having sex early, having several partners, unprotected sex, accepting money or gifts for sex, idling in risky places, and using alcohol or drugs, which weaken judgement. Unsafe abortion after an unwanted pregnancy can cause infertility or death.',
      'The safest choice for a young person is **abstinence**: delaying sex. Being **faithful** to one uninfected partner and using a **condom** correctly every time reduce the risk for those who are sexually active. Never share needles, razor blades or toothbrushes. Avoid touching the blood or body fluids of the sick without gloves, and follow health advice during an Ebola outbreak, including safe burials.',
      '**Assertiveness** is the skill of saying no clearly and firmly without being rude: "No. I have decided to wait." Keep away from situations where you could be pressured, choose friends who respect your decisions, and talk to a trusted adult, teacher or health worker if someone pressures or threatens you.',
      'Anyone who has been exposed to a risk, or has signs of an STI, should go to a **health centre** early, take the full treatment and tell their partner. People living with HIV should be treated with respect: stigma makes others afraid to be tested. Healthy friendships are built on respect, honesty and caring.',
    ],
    figure: null,
    tip: 'In life-skills questions, give **practical actions** a young person can take, such as saying no, avoiding risky situations, getting tested and completing treatment.',
    check: {
      q: 'Which is the best response to a friend who keeps pressuring you to have sex?',
      a: ['Say no firmly and talk to a trusted adult', 'Agree so that you keep the friendship', 'Accept a gift first', 'Keep the pressure secret'],
      why: 'Clear refusal protects your health, and a trusted adult can help if the pressure continues.',
    },
    terms: [
      ['Abstinence', 'Choosing not to have sex.'],
      ['Assertiveness', 'Stating your decision clearly and firmly while respecting others.'],
      ['Stigma', 'Unfair negative attitudes towards a group of people.'],
    ],
  },

  // ---------------- Social insects ----------------
  {
    id: 'bi-social-1',
    unit: 'bi-f3-social',
    n: '8.1',
    title: 'Honey bees and honey production',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Social insects', 'Apiculture'],
    body: [
      'Honey bees are **social insects**: they live in large colonies where different members, called **castes**, do different jobs. A colony may hold 20 000 to 60 000 bees in a hive or a hollow tree.',
      'The **queen** is the only fertile female. She mates with drones once, early in life, and then lays up to 1 500 eggs a day. **Workers** are sterile females. Young workers clean the cells, feed the larvae and build the wax comb; older workers guard the hive and collect nectar, pollen and water. **Drones** are males that develop from unfertilised eggs; their only job is to mate with a new queen.',
      'Bees go through complete metamorphosis: egg, larva, pupa, adult. All larvae are fed royal jelly at first; a larva fed royal jelly throughout becomes a new **queen**. Workers make **honey** from flower **nectar**, adding enzymes and fanning their wings to evaporate water, then seal it in wax cells as food for the colony.',
      'A worker that finds food performs a **dance** on the comb. The waggle dance shows other workers the direction of the food from the sun and, by its speed, the distance. Bees benefit farmers by **pollinating** coffee, cocoa, beans, fruit trees and wild plants, which increases yields.',
      '**Apiculture** (beekeeping) uses hives that can be opened to take honey without destroying the colony. It gives honey, beeswax and income: the white honey of Oku in the North West is known across the country. Beekeepers wear protective clothing and use smoke to calm the bees.',
    ],
    figure: null,
    tip: 'When describing castes, give **each caste and its job**. Remember that workers are **female** and drones are **male**.',
    check: {
      q: 'Which bees collect nectar and pollen?',
      a: ['Older workers', 'Drones', 'The queen', 'Larvae'],
      why: 'Workers change jobs as they age: inside the hive first, then foraging outside.',
    },
    terms: [
      ['Caste', 'A group of individuals with a particular job in a colony.'],
      ['Apiculture', 'Keeping bees for honey and wax.'],
      ['Royal jelly', 'A rich food made by workers and fed to young larvae and queens.'],
    ],
  },
  {
    id: 'bi-social-2',
    unit: 'bi-f3-social',
    n: '8.2',
    title: 'Termites and the interdependence of organisms',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Termites', 'Relationships'],
    body: [
      '**Termites** are social insects that live in nests in wood, underground or in tall mounds of soil found in many parts of Cameroon. A colony is started by a **king and queen**, which stay together for life. The queen becomes huge and lays thousands of eggs a day. Termites go through incomplete metamorphosis: egg, nymph, adult.',
      '**Workers** build and repair the nest, collect food and feed the others. **Soldiers** have large heads and jaws, or squirt sticky liquid, to defend the colony. Winged **reproductives** (flying termites) leave the nest in swarms at the start of the rainy season to start new colonies; many are collected and eaten as a rich source of protein and fat.',
      'Termites feed on wood, dead grass and leaves. They cannot digest cellulose themselves: **microorganisms in their gut** do it for them, and some termites grow fungus gardens in their nests. Both partners benefit, so this is **mutualism**.',
      'Termites recycle dead plant matter and their tunnels mix and aerate the soil. Some kinds, however, damage buildings, furniture, books and crops. Using termite-resistant wood and treating foundations protect houses.',
      'All organisms depend on others: plants supply food and oxygen, animals pollinate flowers and spread seeds, decomposers recycle nutrients. Relationships include **mutualism** (both benefit), **commensalism** (one benefits, the other is not affected), **parasitism** (one benefits, the host is harmed), **predation** and **competition**. Removing one species can upset this balance.',
    ],
    figure: null,
    tip: 'Give an example for each type of relationship and state **who benefits** and **who is harmed**.',
    check: {
      q: 'Termites and the microorganisms in their gut show which relationship?',
      a: ['Mutualism', 'Parasitism', 'Predation', 'Competition'],
      why: 'The microbes get food and shelter; the termites get the products of cellulose digestion. Both benefit.',
    },
    terms: [
      ['Mutualism', 'A relationship in which both species benefit.'],
      ['Interdependence', 'The way organisms in an ecosystem depend on each other.'],
      ['Commensalism', 'A relationship in which one species benefits and the other is not affected.'],
    ],
  },

  // ---------------- Compost and fertilisers ----------------
  {
    id: 'bi-compost-1',
    unit: 'bi-f3-soil',
    n: '9.1',
    title: 'Making compost and organic manure',
    minutes: 8,
    paper: 'Paper 1 & 2',
    tags: ['Compost', 'Soil'],
    body: [
      '**Compost** is made when decomposers, mainly bacteria and fungi helped by earthworms and insects, break down plant and animal wastes into dark, crumbly **humus**. Farm manure is the dung and urine of animals mixed with their bedding.',
      'To build a compost heap, choose a shaded place and loosen the soil at the bottom so water drains away. Pile layers of plant material (grass, leaves, crop remains, kitchen peels), a thin layer of animal dung or old compost to add decomposers, and a little soil or ash. Keep the heap **moist** but not soaking, cover it against heavy rain, and **turn** it every two or three weeks to let in **air**.',
      'The decomposers respire and the heap becomes warm, up to 60 °C in the middle, which kills many weed seeds and pathogens. After two to three months the compost is ready. Plastics, glass, metal and diseased plants should not be added.',
      'Compost and manure supply nitrogen, phosphorus and potassium slowly as they decay. They also improve the **soil structure**, binding particles into crumbs that hold water in sandy soils and let air into clay soils, and they feed earthworms and other soil organisms. Composting turns household and market waste into a useful product instead of litter.',
    ],
    figure: null,
    tip: 'Explain each step of compost making with a **reason**: turning lets in **oxygen** for aerobic decomposers; keeping it moist lets the **enzymes** of the decomposers work.',
    check: {
      q: 'Why does the inside of a compost heap become hot?',
      a: ['Decomposers release heat as they respire', 'The sun heats it from below', 'Chemicals in the waste burn', 'Earthworms produce electricity'],
      why: 'Respiration by huge numbers of bacteria and fungi releases heat, which builds up inside the heap.',
    },
    terms: [
      ['Compost', 'Decayed plant and animal waste used to fertilise soil.'],
      ['Humus', 'Dark organic matter in soil formed from decayed material.'],
      ['Decomposer', 'An organism that breaks down dead matter.'],
    ],
  },
  {
    id: 'bi-fert-1',
    unit: 'bi-f3-soil',
    n: '9.2',
    title: 'Organic and inorganic fertilisers',
    minutes: 10,
    paper: 'Paper 2',
    tags: ['Fertilisers', 'Calculation'],
    body: [
      '**Organic fertilisers** come from living things: compost, farm manure, poultry droppings and **green manure**, a legume crop such as mucuna ploughed in while green. **Inorganic fertilisers** are made in factories: **urea**, ammonium sulphate, single superphosphate and compound fertilisers such as **NPK 20-10-10**.',
      'Organic fertilisers are cheap or free, improve soil structure and water holding, feed soil organisms and release nutrients slowly, but they are bulky, their nutrient content is low and uncertain, and they act slowly. Inorganic fertilisers act fast and have a known nutrient content, but they cost money, do not improve soil structure and are easily misused.',
      'The numbers on a fertiliser bag give the percentage by mass of nitrogen (N), phosphate (P₂O₅) and potash (K₂O). Applying the right amount at the right time, for example near the roots of maize a few weeks after planting, saves money.',
      'Too much inorganic fertiliser harms the environment. Nitrates wash into rivers and lakes and cause **eutrophication**: algae multiply, die and decay, and the decomposers use up the oxygen so fish die. Nitrates in wells make drinking water unsafe for babies. Long use of ammonium fertilisers makes soil **acidic**, which farmers correct with lime. Fertiliser should never be spread just before heavy rain or close to streams.',
    ],
    figure: null,
    examples: [
      {
        q: 'How many kilograms of nitrogen are in a 50 kg bag of NPK 20-10-10?',
        steps: [
          'Nitrogen is 20% of the mass.',
          'Mass of N = 20 ÷ 100 × 50 kg = 10 kg.',
        ],
      },
      {
        q: 'Urea contains 46% nitrogen. A farmer needs to give a field 23 kg of nitrogen. What mass of urea is needed?',
        steps: [
          'Mass of urea × 46 ÷ 100 = 23 kg.',
          'Mass of urea = 23 × 100 ÷ 46 = 50 kg, one bag.',
        ],
      },
    ],
    tip: 'When comparing fertilisers, give **one advantage and one disadvantage of each** type; a list of advantages of one type only earns half the marks.',
    check: {
      q: 'Which is a disadvantage of inorganic fertilisers?',
      a: ['They can wash into water and cause eutrophication', 'They act very slowly', 'They improve soil structure', 'Their nutrient content is unknown'],
      why: 'Soluble nitrates and phosphates are easily washed out of soil into rivers and lakes.',
    },
    terms: [
      ['Organic fertiliser', 'A fertiliser from living things, such as manure or compost.'],
      ['Inorganic fertiliser', 'A fertiliser made in a factory, such as urea or NPK.'],
      ['Eutrophication', 'Over-enrichment of water with nutrients, leading to loss of oxygen.'],
    ],
  },
];
