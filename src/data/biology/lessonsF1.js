// Form 1 Biology lessons from the harmonised scheme of work used in many schools:
// biology and the microscope, cells, classification, the five kingdoms and
// ecology. They sit beside the MINESEC Form 1 topics in lessons12.js. Original
// text written for this app. **double asterisks** mark key terms and *single
// asterisks* scientific names (italics). `examples` are worked examples.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Class work',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_F1 = [
  // ---------- Biology, the laboratory and the microscope ----------
  L('bi-branches-1', 'bi-f1-microscope', '2.1', 'What biology is: its branches, its uses, plants and animals', 8, ['Introduction'], [
    '**Biology** is the study of living things. The word comes from two Greek words: *bios*, life, and *logos*, study. Biology is a large subject, so it is divided into **branches**. **Botany** is the study of plants, **zoology** the study of animals and **microbiology** the study of tiny living things (micro-organisms) such as bacteria and some fungi. Other branches include **anatomy** (the structure of the body), **ecology** (living things and their surroundings) and **genetics** (how features are passed on).',
    'Biology is useful in many jobs. In **medicine**, doctors, nurses and laboratory technicians use it to find and treat diseases; a technician looks at a drop of blood under a microscope to see the malaria parasite. In **agriculture**, it helps farmers choose better seeds, fight pests and keep animals healthy. In **public health**, it explains vaccination, clean water and hygiene. It also helps us **protect the environment** and its plants and animals.',
    'The two largest groups of living things are **plants** and **animals**. A green plant **makes its own food** from carbon dioxide and water, using the energy of sunlight, in **photosynthesis**: it is **autotrophic**. An animal cannot make its food; it must eat plants or other animals: it is **heterotrophic**.',
    'Plants and animals differ in other ways too. Most animals **move from place to place** (locomotion); plants stay fixed, although parts of them bend towards light. Animals respond **quickly**, using nerves and muscles; plants respond **slowly**. Animals usually stop growing when they are adult, while plants keep growing at the tips of their roots and shoots all their lives. Plant cells have a **cell wall** and green **chloroplasts**; animal cells have neither.',
  ], null, 'When asked to compare a plant and an animal, give the difference **in pairs**: "a plant makes its own food, **while** an animal eats ready-made food".',
  ['A goat is described as heterotrophic because it:', ['Feeds on food made by other living things', 'Makes its own food from sunlight', 'Has a cell wall', 'Does not move'], 'Heterotrophic means "feeding on others". Only green plants (and some bacteria) make their own food.'],
  [['Botany', 'The study of plants.'], ['Zoology', 'The study of animals.'], ['Autotrophic', 'Able to make its own food, as green plants do by photosynthesis.'], ['Heterotrophic', 'Obtaining food by eating other living things or their products.']],
  [
    { q: 'Give four differences between a mango tree and a goat.', steps: ['**Feeding:** the mango tree makes its own food by photosynthesis; the goat eats grass and leaves.', '**Movement:** the mango tree stays in one place; the goat moves from place to place.', '**Response:** the tree responds slowly (its shoots bend towards light); the goat responds quickly, for example running from a dog.', '**Growth:** the tree keeps growing at its tips all its life; the goat stops growing when it is adult.'] },
  ]),

  L('bi-labsafety-1', 'bi-f1-microscope', '2.2', 'Biology apparatus and safety in the laboratory', 7, ['Apparatus', 'Safety'], [
    'Biologists use simple apparatus. A **hand lens** (magnifying glass) makes small things such as an insect’s legs look larger, usually about 5 to 10 times. **Forceps** pick up small specimens, a **scalpel** or blade cuts them, a **mounting needle** handles thin specimens and a **dropper** (pipette) adds drops of liquid. **Petri dishes** hold small living things or growing seeds, and **beakers**, **test tubes** and **measuring cylinders** hold and measure liquids. A **microscope** shows things too small to see with the eye alone.',
    'To use a hand lens, hold it close to your eye and bring the specimen towards it until it is clear. Do not move the lens back and forth in front of the specimen. **Never look at the Sun** through a hand lens.',
    'The laboratory is safe only when everyone follows the **rules**: never eat, drink or taste anything; wash your hands after handling specimens, soil or chemicals; carry scalpels with the blade pointing down and cut **away** from your fingers; wear gloves when handling dead animals or soil; report every cut, spill or breakage to the teacher at once; and put broken glass and used specimens in the containers the teacher shows you, not in the sink.',
    'Living specimens must be treated with care. Return small animals such as snails or insects to where they were found after observing them, and do not collect more than you need.',
  ], null, 'Safety questions usually ask for a rule **and** its reason: "wash your hands after handling soil, **because** it may contain germs".',
  ['Which instrument is best for looking at the legs of a housefly in the field?', ['A hand lens', 'A scalpel', 'A measuring cylinder', 'A dropper'], 'A hand lens magnifies about 5 to 10 times and is easy to carry outside.'],
  [['Hand lens', 'A convex lens held in the hand that magnifies small objects.'], ['Specimen', 'A living thing, or part of one, that is studied.'], ['Scalpel', 'A small, very sharp knife used to cut specimens.']],
  [
    { q: 'Give three safety rules to follow when dissecting a dead rat, with a reason for each.', steps: ['**Wear gloves**, because the dead animal may carry germs.', '**Cut away from your fingers**, with the scalpel held firmly, so that a slip does not cut you.', '**Wash your hands and the apparatus** with soap and water afterwards, and put the remains in the bin the teacher shows you, so that germs do not spread.'] },
  ]),

  L('bi-microscope-1', 'bi-f1-microscope', '2.3', 'The light microscope: its parts and how to look after it', 9, ['Microscope'], [
    'Most cells are far too small to see with the eye. The first microscopes were made about four hundred years ago. In **1665** the English scientist **Robert Hooke** looked at a thin slice of cork and saw tiny boxes, which he named **cells**. A few years later the Dutchman **Antonie van Leeuwenhoek**, using microscopes he made himself, was the first to see bacteria and other tiny living things in water. Today’s **electron microscope**, first built in the 1930s, magnifies far more than a light microscope.',
    'A school **light microscope** has two sets of lenses. The **eyepiece** (ocular lens) is at the top, where you look. The **objective lenses** are fixed to a **revolving nosepiece** just above the specimen: usually a **low-power** (×4 or ×10), a **medium-power** (×10 or ×40) and a **high-power** objective (×40 or ×100). The **body tube** holds the lenses apart.',
    'The specimen on its **glass slide** lies on the **stage**, held by **stage clips** over a hole. Light from the **mirror** or **lamp** below passes up through the **condenser** and the **diaphragm**, which controls how much light enters. The **coarse adjustment knob** moves the lenses (or the stage) a lot, for first focusing; the **fine adjustment knob** moves them a little, for sharp focusing. The **arm** is for carrying and the heavy **base** keeps it steady.',
    'Look after the microscope: **carry it upright with two hands**, one holding the arm and the other under the base; set it down away from the edge of the bench; clean the lenses only with **lens tissue**; never point the mirror at the Sun, which can damage the eye; and after use, turn the low-power objective into place and cover the microscope.',
  ], 'light-microscope', 'Learn the parts in two groups: the **optical parts** (eyepiece, objectives, condenser, mirror or lamp) that carry light and magnify, and the **mechanical parts** (stage, clips, knobs, arm, base, nosepiece) that hold and move.',
  ['Which part is used to bring a specimen into sharp focus at high power?', ['The fine adjustment knob', 'The coarse adjustment knob', 'The stage clips', 'The diaphragm'], 'The fine adjustment moves the lens only a little, so the specimen can be focused without the objective hitting the slide.'],
  [['Eyepiece', 'The lens at the top of a microscope, nearest the eye.'], ['Objective lens', 'The lens just above the specimen; a microscope has several of different powers.'], ['Diaphragm', 'The part that controls how much light passes up through the specimen.']],
  [
    { q: 'State the function of (a) the stage clips, (b) the mirror, (c) the coarse adjustment knob, (d) the revolving nosepiece.', steps: ['(a) **Stage clips** hold the slide firmly in place on the stage.', '(b) The **mirror** reflects light up through the specimen.', '(c) The **coarse adjustment knob** moves the lens or stage a large distance, to find the specimen and focus it roughly.', '(d) The **revolving nosepiece** holds the objective lenses and turns to change from one magnification to another.'] },
  ]),

  L('bi-slide-1', 'bi-f1-microscope', '2.4', 'Using a microscope: focusing, magnification and making a slide', 10, ['Microscope', 'Practical', 'Calculation'], [
    'To **focus**: turn the low-power objective into place, put the slide on the stage with the specimen over the hole and clip it. **Looking from the side**, use the coarse knob to bring the objective close to the slide without touching it. Then, looking through the eyepiece, turn the coarse knob the other way so the lens moves **away** from the slide until the specimen appears, and sharpen it with the fine knob. To see more detail, centre the specimen, turn the next objective into place and use **only the fine knob**.',
    'The **total magnification** is the magnification of the eyepiece **multiplied by** that of the objective: **magnification = eyepiece × objective**. With a ×10 eyepiece and a ×40 objective, the specimen looks **400 times** larger (×400).',
    'A **temporary slide** is made like this: put the specimen, which must be very thin, on a clean slide and add a drop of water. Hold a **coverslip** at an angle at the edge of the drop and lower it slowly with a mounting needle, so that no **air bubbles** are trapped; bubbles look like circles with thick black rims. Soak up extra water with filter paper. A **stain** makes parts easier to see: **iodine solution** for plant cells such as onion skin, **methylene blue** for animal cells such as cells scraped from inside the cheek.',
    'A good first specimen is a small letter "e" cut from a newspaper. Under the microscope it appears **upside down and back to front**, and when you move the slide to the left, the image moves to the right. This is normal for a light microscope.',
  ], null, 'Always show the multiplication in magnification questions, and write the answer with a times sign: "10 × 40 = **×400**".',
  ['A microscope has a ×15 eyepiece and a ×10 objective. The total magnification is:', ['×150', '×25', '×5', '×1.5'], 'Total magnification = eyepiece × objective = 15 × 10 = 150.'],
  [['Total magnification', 'Eyepiece magnification multiplied by objective magnification.'], ['Coverslip', 'A very thin square of glass placed over a specimen on a slide.'], ['Stain', 'A dye that colours parts of a specimen so they can be seen clearly.']],
  [
    { q: 'A microscope has a ×10 eyepiece and objectives of ×4, ×10 and ×40. Find the three total magnifications.', steps: ['Total magnification = eyepiece × objective.', 'Low power: 10 × 4 = **×40**.', 'Medium power: 10 × 10 = **×100**.', 'High power: 10 × 40 = **×400**.'] },
    { q: 'A total magnification of ×600 is obtained with a ×15 eyepiece. What objective is in use?', steps: ['Total magnification = eyepiece × objective, so objective = total ÷ eyepiece.', '600 ÷ 15 = 40.', 'The **×40 objective** is in use.'] },
    { q: 'A pupil draws a hibiscus leaf. The drawing is 12 cm long and the real leaf is 8 cm long. What is the magnification of the drawing?', steps: ['Magnification of a drawing = length of the drawing ÷ real length.', '12 ÷ 8 = 1.5.', 'The drawing is **×1.5**, so it is one and a half times as long as the leaf.'] },
  ]),

  // ---------- Cells and levels of organisation ----------
  L('bi-cells-1', 'bi-f1-cells', '3.1', 'Plant and animal cells', 10, ['Cells', 'Practical'], [
    'Every living thing is made of one or more **cells**. The **cell theory** states that the cell is the basic unit of **structure** and **function** of all living things, and that new cells come only from cells that already exist, when a cell divides.',
    'An **animal cell**, such as a cell from the lining of your cheek, has three main parts. The **cell membrane** is a thin layer around the cell that controls what goes in and out. The **cytoplasm** is a jelly-like substance where most of the cell’s chemical reactions take place. The **nucleus** controls the activities of the cell and carries the **chromosomes**, which hold the instructions passed on from parents. The cytoplasm also contains tiny **mitochondria**, where food is broken down to release energy (respiration), and small **vacuoles**.',
    'A **plant cell**, such as a cell from a leaf, has all these parts and three more. A **cell wall** made of **cellulose** surrounds the membrane; it is strong and gives the cell a fixed shape. A large central **vacuole** is filled with **cell sap**, a solution of sugars and salts that keeps the cell firm. **Chloroplasts** contain the green pigment **chlorophyll**, which traps light for **photosynthesis**. Chloroplasts are found only in the green parts of a plant, so a cell from an onion bulb or a root has none.',
    'Plant cells usually look regular, like boxes, because of their walls; animal cells have no wall and are rounder or irregular in shape. Plant cells store food as **starch** grains; animal cells store it as **glycogen** and fat. You can see these differences with onion skin stained with iodine and cheek cells stained with methylene blue.',
  ], 'plant-cell', 'Compare cells in a table with two columns, and say "**present**" or "**absent**" for the cell wall, large vacuole and chloroplasts.',
  ['Which part is found in a leaf cell but not in a cheek cell?', ['Chloroplast', 'Nucleus', 'Cell membrane', 'Cytoplasm'], 'Animal cells have a nucleus, membrane and cytoplasm too, but never chloroplasts.'],
  [['Cell membrane', 'The thin layer around a cell that controls what enters and leaves.'], ['Nucleus', 'The part of a cell that controls its activities and carries the chromosomes.'], ['Cell wall', 'The strong cellulose layer outside the membrane of a plant cell.'], ['Chloroplast', 'A structure containing chlorophyll, where photosynthesis takes place.']],
  [
    { q: 'Give three structural differences between a plant cell and an animal cell, and state one feature they share.', steps: ['A plant cell has a **cellulose cell wall**; an animal cell has none.', 'A plant cell has a **large permanent vacuole** with cell sap; an animal cell has only small, temporary vacuoles, if any.', 'A green plant cell has **chloroplasts**; an animal cell has none.', 'Both have a **nucleus**, **cytoplasm** and a **cell membrane** (and mitochondria).'] },
  ]),

  L('bi-levels-1', 'bi-f1-cells', '3.2', 'From cells to organisms: levels of organisation', 8, ['Cells', 'Organisation'], [
    'Some living things, such as *Amoeba*, bacteria and yeast, are a **single cell** that does everything needed for life: they are **unicellular**. Most plants and animals are **multicellular**: they are made of millions of cells that share the work.',
    'In a multicellular organism, cells are **specialised**: their shape suits their job. A **red blood cell** has no nucleus and is shaped like a disc pressed in on both sides, so it can carry plenty of oxygen. A **nerve cell** is very long and carries messages. A **root hair cell** has a long thin outgrowth that takes in water from the soil. A **sperm cell** has a tail for swimming. A **palisade cell** in a leaf is packed with chloroplasts for photosynthesis.',
    'Cells are organised in **levels**. A group of similar cells doing the same job is a **tissue**, for example muscle tissue or the xylem tissue that carries water in a plant. Several tissues working together form an **organ**, such as the heart, the stomach, a leaf or a root. Organs working together for one main function form an **organ system**: the mouth, stomach and intestines make up the **digestive system**; the heart and blood vessels make up the **circulatory system**. All the systems together make the **organism**.',
    'So the order is: **cell → tissue → organ → organ system → organism**. Each level depends on the one below it: if heart muscle cells are damaged, the heart (organ) pumps badly and the whole circulatory system suffers.',
  ], null, 'Learn the order with an example from each level: **muscle cell → muscle tissue → heart → circulatory system → human**.',
  ['A leaf is an example of:', ['An organ', 'A cell', 'A tissue', 'An organ system'], 'A leaf contains several tissues (epidermis, palisade, xylem and phloem) working together, so it is an organ.'],
  [['Tissue', 'A group of similar cells that carry out the same function.'], ['Organ', 'A structure made of several tissues working together.'], ['Organ system', 'A group of organs working together for one main function.'], ['Unicellular', 'Made of only one cell.']],
  [
    { q: 'Arrange these in order from the simplest level to the most complex: stomach, human, muscle cell, digestive system, muscle tissue.', steps: ['The simplest level is the **cell**: muscle cell.', 'Similar cells form a **tissue**: muscle tissue.', 'Tissues form an **organ**: stomach.', 'Organs form an **organ system**: digestive system; the systems form the **organism**: human.', 'Order: **muscle cell → muscle tissue → stomach → digestive system → human**.'] },
  ]),

  // ---------- Classification ----------
  L('bi-classify-1', 'bi-f1-classify', '4.1', 'Why living things are classified, and how they are named', 9, ['Classification'], [
    'There are millions of kinds of living things. To study them, biologists put them into groups according to the features they share. This is **classification**, and the science of naming and classifying living things is **taxonomy**. Classification makes it easier to identify a living thing, to learn about many organisms at once and to see how they are related.',
    'Local names cause confusion: one plant may have several names in different languages, and one name may be used for different plants. In the 18th century the Swedish scientist **Carolus Linnaeus** introduced a system in which every kind of organism has a **scientific name** of two parts, used all over the world. This is **binomial nomenclature** ("two names").',
    'The first part of the name is the **genus** and the second is the **species**. Maize is *Zea mays*; cocoa is *Theobroma cacao*; cassava is *Manihot esculenta*; the mosquito that carries malaria is *Anopheles gambiae*; and humans are *Homo sapiens*.',
    'The rules: the genus name begins with a **capital letter** and the species name with a **small letter**; the name is printed in *italics*; when handwritten, each part is **underlined separately**. After the first use, the genus may be shortened to its first letter: *Z. mays*.',
  ], null, 'Write scientific names carefully in an exam: **capital** for the genus, **small** for the species, and **underline each word separately** when handwriting.',
  ['Which shows the scientific name of maize written correctly in print?', ['*Zea mays*', '*zea Mays*', '*Zea Mays*', 'ZEA MAYS'], 'The genus takes a capital letter and the species a small letter; the whole name is in italics.'],
  [['Classification', 'Putting living things into groups according to their shared features.'], ['Binomial nomenclature', 'Naming each kind of organism with two names: genus and species.'], ['Genus', 'The first part of a scientific name; a group of closely related species.']],
  [
    { q: 'A pupil writes the name of the cocoa plant as "theobroma Cacao". Correct it and state the rules broken.', steps: ['The correct form is ***Theobroma cacao*** (underlined separately when handwritten).', 'Rule 1: the **genus** (Theobroma) must begin with a **capital** letter.', 'Rule 2: the **species** (cacao) must begin with a **small** letter.'] },
  ]),

  L('bi-ranks-1', 'bi-f1-classify', '4.2', 'The seven ranks of classification and using a key', 9, ['Classification', 'Keys'], [
    'Living things are classified in a series of groups, from the largest to the smallest: **Kingdom**, **Phylum**, **Class**, **Order**, **Family**, **Genus** and **Species**. A sentence helps to remember them: "**K**ing **P**hilip **C**ame **O**ver **F**or **G**ood **S**oup".',
    'A **kingdom** contains a huge number of organisms that share only a few features. As you go down the ranks, each group is smaller and its members are **more alike**. A **species** is a group of organisms so alike that they can **breed together** and produce young that can also breed.',
    'Humans are classified as: Kingdom **Animalia**, Phylum **Chordata**, Class **Mammalia**, Order **Primates**, Family **Hominidae**, Genus ***Homo***, Species ***sapiens***. Organisms in the same genus are also in the same family, order, class, phylum and kingdom.',
    'To identify an organism, biologists use a **dichotomous key**. Each step gives **two** choices about a clear feature, such as "has wings" or "has no wings". You choose the one that fits and follow it to the next step, until you reach the name.',
  ], 'classification-key', 'In a key, use features you can **see**, such as the number of legs or wings, never colour or size alone, which can vary.',
  ['Which rank contains organisms that are most alike?', ['Species', 'Kingdom', 'Class', 'Phylum'], 'The groups get smaller and their members more similar from kingdom down to species.'],
  [['Kingdom', 'The largest group in classification.'], ['Species', 'A group of organisms that can breed together to produce fertile young.'], ['Dichotomous key', 'A key in which each step offers a choice of two descriptions.']],
  [
    { q: 'Use this key to identify an animal that has six legs and two pairs of wings. Key: 1 (a) six legs → go to 2; (b) eight legs → spider. 2 (a) one pair of wings → housefly; (b) two pairs of wings → go to 3. 3 (a) wings covered in scales → butterfly; (b) wings clear → dragonfly. The animal has clear wings.', steps: ['Step 1: it has **six legs**, so go to 2.', 'Step 2: it has **two pairs of wings**, so go to 3.', 'Step 3: its wings are **clear**, so the animal is a **dragonfly**.'] },
  ]),

  // ---------- The five kingdoms ----------
  L('bi-kingdoms-1', 'bi-f1-kingdoms', '5.1', 'The five kingdoms: Monera, Protoctista and Fungi', 10, ['Classification', 'Micro-organisms'], [
    'Living things are placed in **five kingdoms**: **Monera** (bacteria), **Protoctista** (also called Protista), **Fungi**, **Plantae** (plants) and **Animalia** (animals).',
    '**Monera** are the **bacteria**. Each is a single, very small cell with a cell wall but **no true nucleus**. Some are useful: they decay dead things and return nutrients to the soil, turn milk into yoghurt and fix nitrogen in the root nodules of beans and groundnuts. Others cause diseases such as **cholera**, **typhoid** and **tuberculosis**.',
    '**Protoctista** are mostly single cells **with a nucleus**. ***Amoeba*** lives in ponds; it has no fixed shape and moves by pushing out **pseudopodia** ("false feet"), which also flow around food to take it in. ***Paramecium*** is slipper-shaped and covered with tiny hairs, **cilia**, which beat to move it and sweep food into its oral groove. Both remove extra water with a **contractile vacuole** and reproduce by splitting in two (**binary fission**). *Plasmodium*, which causes malaria, is also a protoctist.',
    '**Fungi** do not make their own food. They are made of thread-like **hyphae** (together called a **mycelium**) which release enzymes onto dead matter and absorb the digested food. They reproduce by **spores**. Examples are the **bread mould** *Rhizopus*, **mushrooms** and **yeast**. Fungi decay dead matter, yeast is used to make bread rise and to brew, and the antibiotic **penicillin** comes from a fungus; but fungi also cause ringworm and athlete’s foot and spoil food.',
  ], 'protists', 'For *Amoeba* and *Paramecium*, learn **how each moves** (pseudopodia, cilia), **how each feeds** and **how each reproduces** (binary fission).',
  ['*Paramecium* moves by means of:', ['Cilia', 'Pseudopodia', 'Hyphae', 'Spores'], '*Paramecium* is covered with cilia that beat together; *Amoeba* moves with pseudopodia.'],
  [['Pseudopodium', 'A "false foot": a part of the cytoplasm pushed out by *Amoeba* to move and feed.'], ['Cilia', 'Tiny hairs on the surface of a cell that beat to cause movement.'], ['Hypha', 'One of the fine threads that make up the body of a fungus.'], ['Binary fission', 'Reproduction by one cell splitting into two.']],
  [
    { q: 'Compare *Amoeba* and *Paramecium* under three headings: shape, movement and feeding.', steps: ['**Shape:** *Amoeba* has no fixed shape; *Paramecium* has a fixed slipper shape.', '**Movement:** *Amoeba* moves by pseudopodia; *Paramecium* by the beating of cilia.', '**Feeding:** *Amoeba* surrounds food with pseudopodia to form a food vacuole; *Paramecium* sweeps food into its oral groove with cilia, where a food vacuole forms.'] },
  ]),

  L('bi-kingdoms-2', 'bi-f1-kingdoms', '5.2', 'The five kingdoms: plants and animals', 10, ['Classification'], [
    'The **plant kingdom** contains organisms that make their food by photosynthesis. **Mosses** are small plants of damp places with no true roots (they hold on with **rhizoids**) and reproduce by spores. **Ferns** have true roots, an underground stem and large leaves called **fronds**; their spores form in brown patches (**sori**) under the leaves. **Conifers** such as pines bear **seeds in cones**. **Flowering plants** bear **seeds inside fruits**; they include **monocotyledons** (one seed leaf, such as maize and palms) and **dicotyledons** (two seed leaves, such as beans and mango).',
    'The **animal kingdom** is divided into **invertebrates**, which have no backbone, and **vertebrates**, which have one. Important invertebrate groups are the **arthropods**, which have **jointed legs** and a hard outer skeleton (insects with **six** legs, spiders with **eight**, millipedes, crabs); the **molluscs**, with a soft body often inside a shell (snails); and the **annelids**, worms with a body in rings (earthworms).',
    'There are five classes of vertebrates. **Fish** live in water, breathe with **gills** and have scales and fins. **Amphibians**, such as frogs, have a **moist skin** and lay eggs in water, where the young (tadpoles) live. **Reptiles**, such as lizards, snakes, crocodiles and tortoises, have a **dry, scaly skin** and lay **shelled eggs on land**. **Birds** have **feathers**, a beak and wings and lay hard-shelled eggs. **Mammals** have **hair** and feed their young on **milk** from mammary glands; most give birth to live young.',
    'Birds and mammals keep their body temperature steady (**warm-blooded**); fish, amphibians and reptiles take on the temperature of their surroundings (**cold-blooded**). A bat flies but is a mammal, because it has hair and suckles its young.',
  ], null, 'To place an animal, check its **key features**, not where it lives: a whale lives in the sea but breathes air and feeds its young on milk, so it is a mammal.',
  ['A spider is not an insect because it has:', ['Eight legs', 'Jointed legs', 'A hard outer skeleton', 'No backbone'], 'Insects and spiders are both arthropods with jointed legs and no backbone; insects have six legs and spiders eight.'],
  [['Invertebrate', 'An animal without a backbone.'], ['Vertebrate', 'An animal with a backbone.'], ['Arthropod', 'An invertebrate with jointed legs and a hard outer skeleton.'], ['Frond', 'The large leaf of a fern.']],
  [
    { q: 'Name the vertebrate class of each animal and give one reason: (a) crocodile, (b) frog, (c) bat, (d) tilapia.', steps: ['(a) Crocodile: **reptile**, because it has a dry, scaly skin and lays shelled eggs on land.', '(b) Frog: **amphibian**, because it has a moist skin and its eggs and tadpoles develop in water.', '(c) Bat: **mammal**, because it has hair and feeds its young on milk.', '(d) Tilapia: **fish**, because it breathes with gills and has fins and scales.'] },
  ]),

  // ---------- Introduction to ecology ----------
  L('bi-ecology-1', 'bi-f1-ecology', '6.1', 'Habitats, populations and the factors around them', 10, ['Ecology', 'Practical', 'Calculation'], [
    '**Ecology** is the study of living things and their **environment**. The part of the Earth where life is found, on land, in water and in the air, is the **biosphere**. The place where an organism lives is its **habitat**: a pond, the soil under a log or a cocoa farm.',
    'All the organisms of **one kind** living in a habitat form a **population**, for example all the tilapia in a pond. All the populations of **different kinds** living together form a **community**. A community together with its non-living surroundings is an **ecosystem**, such as a forest, a lake or a savanna.',
    'Living things are affected by two kinds of factors. **Abiotic factors** are non-living: light, temperature, water, humidity, wind and the type of soil. **Biotic factors** come from other living things: food, predators, competition, disease and the activities of people. They can be measured: temperature with a **thermometer**, rainfall with a **rain gauge**, the water in soil by weighing a sample before and after drying it.',
    'It is usually impossible to count every plant in a field, so we take samples with a **quadrat**, a square frame often 1 m by 1 m. Quadrats are placed **at random**, the plants of one kind inside each are counted, and the **average per quadrat** is multiplied up to the whole area.',
  ], 'quadrat-apparatus', 'Population estimate = **average number per quadrat × (area of the field ÷ area of one quadrat)**. Place the quadrats at random, so you do not choose only the crowded spots.',
  ['All the goats of one kind living in a village form a:', ['Population', 'Community', 'Ecosystem', 'Habitat'], 'A population is all the organisms of one species in an area; a community includes all the species there.'],
  [['Habitat', 'The place where an organism lives.'], ['Population', 'All the organisms of one species living in an area.'], ['Community', 'All the populations of different species living in an area.'], ['Abiotic factor', 'A non-living part of the environment, such as light or temperature.']],
  [
    { q: 'Five 1 m² quadrats placed at random in a school field of 200 m² contain 4, 6, 3, 5 and 2 goat weed plants. Estimate the number of goat weed plants in the field.', steps: ['Total counted = 4 + 6 + 3 + 5 + 2 = 20 plants.', 'Average per quadrat = 20 ÷ 5 = 4 plants per m².', 'The field has 200 m², so the estimate = 4 × 200 = **800 plants**.'] },
  ]),

  L('bi-food-1', 'bi-f1-ecology', '6.2', 'Food chains, food webs and the flow of energy', 9, ['Ecology', 'Feeding relationships'], [
    'Almost all energy in an ecosystem comes from the **Sun**. Green plants trap it in photosynthesis and store it in food, so they are the **producers**. Animals are **consumers**: a **herbivore** that eats plants is a **primary consumer**, a **carnivore** that eats herbivores is a **secondary consumer**, and one that eats other carnivores is a **tertiary consumer**.',
    'A **food chain** shows who eats whom, with arrows pointing from the food to the feeder, in the direction the **energy flows**. In the savanna: grass → grasshopper → lizard → hawk. In a pond: algae → tadpole → fish → kingfisher.',
    'Most animals eat more than one kind of food and are eaten by more than one kind of animal, so food chains link together into a **food web**. If one population changes, others in the web change too: if snakes are killed, the rats they ate increase and eat more of the farmers’ grain.',
    '**Decomposers**, mainly bacteria and fungi, break down dead plants and animals and their waste, returning nutrients to the soil for plants to use again. Only about **one tenth** of the energy at one level passes to the next; the rest is used in moving and keeping warm, or lost in waste. That is why food chains rarely have more than four or five links.',
  ], 'food-web', 'In a food chain, the arrow means "**is eaten by**" and shows the direction of **energy flow**. The chain always starts with a **producer**.',
  ['In the chain grass → grasshopper → lizard → hawk, the secondary consumer is the:', ['Lizard', 'Grasshopper', 'Grass', 'Hawk'], 'The grasshopper eats the producer (primary consumer); the lizard eats the grasshopper (secondary consumer).'],
  [['Producer', 'A green plant that makes food by photosynthesis.'], ['Consumer', 'An animal that eats other organisms.'], ['Decomposer', 'An organism, such as a bacterium or fungus, that breaks down dead matter.'], ['Food web', 'A network of linked food chains in an ecosystem.']],
  [
    { q: 'In a food web, maize is eaten by grasshoppers and rats; grasshoppers are eaten by birds; rats are eaten by snakes and owls. Write two food chains and state the effect of killing all the snakes.', steps: ['Chain 1: **maize → grasshopper → bird**.', 'Chain 2: **maize → rat → snake** (or maize → rat → owl).', 'Without snakes, fewer rats are eaten, so the **rat population increases** at first.', 'More rats eat more maize, so the **maize crop falls**, and the owls have more food, so they may increase.'] },
  ]),
];
