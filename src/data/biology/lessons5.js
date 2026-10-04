// Form 5 Biology lessons for the topics of the MINESEC Form 5 syllabus that the
// first lessons did not cover: seeds and germination, rearing farm animals,
// classical and modern biotechnology, coordination in plants, chromosomes and
// alleles, puberty and family planning, STIs and HIV/AIDS, hormones, the brain
// and sense organs, ecological factors, pollution and conservation. Original
// text written for this app. **double asterisks** mark key terms (rendered bold)
// and *single asterisks* scientific names (italics). `examples` are worked
// examples.

export const LESSONS_5 = [
  // ---------------- Reproduction in plants ----------------
  {
    id: 'bi-seed-1',
    unit: 'reproduction',
    n: '1.2',
    title: 'Seeds, fruits, dispersal and germination',
    minutes: 10,
    paper: 'Paper 2 & 3',
    tags: ['Dispersal', 'Germination'],
    body: [
      'After fertilisation the **ovule** becomes the **seed** and the **ovary** becomes the **fruit**. A bean seed has a tough coat (**testa**), a scar where it was attached (**hilum**), a tiny pore (**micropyle**) and an embryo made of a young root (**radicle**), a young shoot (**plumule**) and two seed leaves (**cotyledons**) that store food. A maize grain is a fruit and a seed joined together, with one cotyledon and a food store called the endosperm.',
      'Seeds are **dispersed** away from the parent plant, which reduces competition for light, water and minerals and lets the plant colonise new places. **Wind**: light seeds with wings or hairs, such as those of the African tulip tree and the silk-cotton (kapok) tree. **Animals**: juicy fruits such as mango, guava and pawpaw are eaten and the seeds pass out in droppings; hooked fruits such as those of blackjack (*Bidens*) catch on fur and clothes. **Water**: the fibrous, air-filled husk of the coconut floats. **Self (explosive)**: the pods of beans and the fruits of the castor oil plant dry, split and throw out their seeds.',
      'A seed needs **water**, **oxygen** and a **suitable temperature** to germinate. Water activates enzymes and softens the testa; oxygen is needed for respiration; enzymes work best when warm. Most seeds do not need light. During **germination** the seed absorbs water and swells, enzymes digest the stored starch, protein and fat into soluble food, the radicle bursts out first and grows down, then the plumule grows up.',
      'In **epigeal** germination, as in the bean, the cotyledons are carried above the ground and turn green. In **hypogeal** germination, as in maize, the food store stays below the ground. **Growth** is a permanent increase in size and dry mass; it is often measured as the height of a seedling or its dry mass, and plotted against time it gives an S-shaped curve.',
    ],
    figure: null,
    examples: [
      {
        q: 'A farmer sowed 25 maize grains on wet cotton wool and 18 germinated. Calculate the percentage germination.',
        steps: [
          'Percentage germination = number germinated ÷ number sown × 100.',
          '= 18 ÷ 25 × 100 = 72%.',
        ],
      },
    ],
    tip: 'In a germination experiment, change **only one condition** in each tube and keep a **control** with water, air and warmth. Boiled, cooled water is used to remove oxygen, with oil on top to keep air out.',
    check: {
      q: 'Why is it an advantage for a plant to disperse its seeds far away?',
      a: ['The young plants do not compete with the parent for light, water and minerals', 'The seeds grow faster in the dark', 'Seeds only germinate far from the parent', 'It increases pollination'],
      why: 'Seedlings under the parent would be shaded and short of water and minerals. Dispersal also lets the species spread.',
    },
    terms: [
      ['Dispersal', 'The spreading of seeds and fruits away from the parent plant.'],
      ['Germination', 'The start of growth of a seed into a seedling.'],
      ['Cotyledon', 'A seed leaf, which often stores food.'],
    ],
  },

  // ---------------- Rearing farm animals ----------------
  {
    id: 'bi-rearing-1',
    unit: 'bi-f5-rearing',
    n: '2.1',
    title: 'Poultry farming',
    minutes: 10,
    paper: 'Paper 2',
    tags: ['Poultry', 'Calculation'],
    body: [
      'Poultry farming is one of the quickest ways to produce protein and income in Cameroon. **Broilers** are reared for meat and reach market weight of about 2 kg in six to eight weeks. **Layers** are kept for eggs and start laying at about 18 to 20 weeks. Local breeds are hardier but grow more slowly.',
      'A poultry house should be dry, well ventilated, protected from rain, predators and thieves, and have enough space (about 10 broilers per square metre). In the **deep litter** system, the floor is covered with wood shavings or rice husks that soak up droppings. Layers may also be kept in **battery cages**. Day-old chicks are kept for the first two to three weeks in a **brooder**, a warm area heated by lamps or a stove, because they cannot yet control their body temperature.',
      'Birds need clean water at all times and a feed suited to their age: **starter** feed rich in protein for chicks, **grower** or **finisher** feed later, and **layer mash** rich in calcium for laying hens. The **feed conversion ratio** (FCR) measures how efficiently feed becomes meat: it is the mass of feed eaten divided by the mass gained. A lower FCR means more profit.',
      'Health care is essential. Birds are **vaccinated** against Newcastle disease, Gumboro disease and others on a fixed schedule. **Coccidiosis**, a protozoan disease spread through wet litter, causes bloody droppings and is prevented by dry litter and drugs in the water. Good hygiene includes a footbath at the door, cleaning and disinfecting the house between batches, and removing dead birds at once.',
    ],
    figure: null,
    examples: [
      {
        q: '100 broilers ate 400 kg of feed and gained 200 kg in mass. Calculate the FCR.',
        steps: [
          'FCR = mass of feed eaten ÷ mass gained.',
          '= 400 ÷ 200 = 2.0. Each kilogram of meat needed 2 kg of feed.',
        ],
      },
      {
        q: 'Feed comes in 50 kg bags costing 15 000 FCFA. What is the feed cost for this batch?',
        steps: [
          'Number of bags = 400 ÷ 50 = 8 bags.',
          'Cost = 8 × 15 000 = 120 000 FCFA, which the farmer compares with the sale price of the birds.',
        ],
      },
    ],
    tip: 'For management questions, cover **housing, feeding, water, health and hygiene**, and give a reason for each practice.',
    check: {
      q: 'Why must the litter in a poultry house be kept dry?',
      a: ['Wet litter spreads diseases such as coccidiosis', 'Wet litter is too heavy', 'Dry litter feeds the birds', 'Wet litter makes the birds grow too fast'],
      why: 'Coccidia and bacteria multiply in wet droppings, and ammonia from wet litter harms the birds’ lungs.',
    },
    terms: [
      ['Broiler', 'A chicken reared for meat.'],
      ['Brooder', 'A heated area where young chicks are kept warm.'],
      ['Feed conversion ratio', 'Mass of feed eaten divided by mass gained.'],
    ],
  },
  {
    id: 'bi-rearing-2',
    unit: 'bi-f5-rearing',
    n: '2.2',
    title: 'Rearing pigs and cattle',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Pigs', 'Cattle'],
    body: [
      '**Pigs** grow fast and a sow can have two litters of 8 to 12 piglets a year. Common breeds are the Large White and Landrace and their crosses with local pigs. Pigs are kept in clean, dry **pens** with a concrete floor that slopes for drainage, shade, and a wallow or water to keep cool, because pigs cannot sweat. They eat maize, brans, kitchen waste and protein feeds; they convert feed into meat efficiently.',
      'Piglets are given **iron injections** soon after birth to prevent anaemia, and are weaned at about eight weeks. Pigs are dewormed regularly. **African swine fever** is a virus disease with no vaccine that kills almost all infected pigs; it is controlled by keeping pigs confined, not feeding uncooked pork scraps, and isolating new animals.',
      '**Cattle** in Cameroon include the **Gudali** and the **Red and White Fulani (Mbororo)** zebu breeds of the Adamawa plateau, the North West and the north. Most are kept on open pasture; in **transhumance**, herders move with their cattle between dry-season and rainy-season pastures. Ranches improve production with fenced paddocks, improved grasses, rotational grazing and crossbreeding.',
      'Cattle are **ruminants**: microbes in the rumen digest the cellulose in grass. They need plenty of water, salt licks and extra feed in the dry season. Their health is protected by **dipping or spraying** against ticks, which spread tick-borne diseases, by vaccination against diseases such as black quarter, and by controlling tsetse flies, which spread trypanosomiasis.',
      '**Intensive** systems give fast growth and high output but need money, feed and strict hygiene; **extensive** systems are cheaper but give slower growth and more disease and losses.',
    ],
    figure: null,
    tip: 'When comparing systems, give an advantage and a disadvantage of each: **intensive** (high output, high cost) and **extensive** (low cost, low output).',
    check: {
      q: 'Why do pigs need a wallow or water in hot weather?',
      a: ['Pigs cannot sweat, so they cool down in mud or water', 'Mud is their main food', 'Water kills ticks', 'Wallowing makes them grow fat'],
      why: 'Pigs have very few sweat glands. Evaporation of water or mud from the skin cools them.',
    },
    terms: [
      ['Ruminant', 'A herbivore whose stomach includes a rumen, such as a cow.'],
      ['Transhumance', 'Seasonal movement of herds between pastures.'],
      ['Weaning', 'Changing young animals from milk to solid food.'],
    ],
  },

  // ---------------- Classical biotechnology ----------------
  {
    id: 'bi-biotech-1',
    unit: 'bi-f5-biotech',
    n: '3.1',
    title: 'Fermenting cassava, maize and millet',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Fermentation', 'Local foods'],
    body: [
      '**Biotechnology** is the use of living organisms, especially microorganisms, to make useful products. **Classical biotechnology** has been practised for thousands of years in making bread, beer, wine, cheese and fermented foods. It relies on **fermentation**: the breakdown of sugars by microorganisms without oxygen, producing acids, alcohol and gases.',
      '**Cassava** roots contain substances that release poisonous **cyanide**. To make **water fufu**, **miondo** and **bobolo**, the roots are peeled and soaked in water for several days (**retting**). Microorganisms soften the roots and break down most of the cyanide. The soft paste is pounded, wrapped in leaves and boiled. **Garri** is made by grating cassava, leaving the pulp to ferment in bags for a few days, pressing out the liquid, then sieving and roasting it dry. Fermentation makes cassava safer, gives it flavour and helps it keep longer.',
      '**Beer** from maize, sorghum or millet, such as the corn beer **sha’a** of the Centre region and **bili-bili** of the north, is made by **malting**: the grain is soaked and allowed to sprout, which makes enzymes (amylase) that turn the stored starch into sugar. The sprouted grain is dried, ground and boiled with water; **yeast** then ferments the sugar into **ethanol** and carbon dioxide. **Palm wine** forms when wild yeasts ferment the sugary sap of palms.',
      'In **bread** making, yeast in the dough ferments sugar, producing carbon dioxide bubbles that make the dough rise; baking kills the yeast and drives off the ethanol. Other transformations turn maize and soya into animal feed and flour, and sugar cane into sugar.',
    ],
    figure: null,
    tip: 'Write the yeast fermentation equation: **glucose → ethanol + carbon dioxide** (+ a little energy), C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.',
    check: {
      q: 'Why is maize allowed to sprout before it is used to brew corn beer?',
      a: ['Germinating grain makes enzymes that turn starch into sugar for the yeast', 'Sprouting kills harmful bacteria', 'Sprouting adds alcohol', 'Yeast can only ferment starch'],
      why: 'Yeast cannot use starch directly. Amylase made during germination changes the starch into sugar that yeast can ferment.',
    },
    terms: [
      ['Biotechnology', 'Using living organisms to make useful products.'],
      ['Fermentation', 'Breakdown of sugars by microorganisms without oxygen.'],
      ['Malting', 'Allowing grain to germinate so that its starch is turned into sugar.'],
    ],
  },
  {
    id: 'bi-biotech-2',
    unit: 'bi-f5-biotech',
    n: '3.2',
    title: 'From milk, meat and hides, and preserving farm produce',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Dairy', 'Preservation'],
    body: [
      '**Yoghurt** is made by heating milk to kill unwanted microbes, cooling it to about 40 °C and adding a little yoghurt containing **lactic acid bacteria**. Kept warm for several hours, the bacteria turn lactose into **lactic acid**, which makes the milk proteins thicken and gives the sour taste. The acid also stops harmful bacteria growing.',
      '**Cheese** is made by souring milk with bacteria and adding **rennet**, an enzyme that clots the milk proteins into a solid **curd**. The liquid **whey** is drained off, and the curd is salted, pressed and often left to ripen. **Butter** is made by **churning** cream until the fat droplets join together.',
      'Meat is turned into **sausages** and **ham** by mincing or curing with salt and spices, sometimes with smoking. Salt draws water out of the meat and of any bacteria, so they cannot grow. **Hides** and skins are turned into **leather** by **tanning** with tannins from tree bark or with mineral salts, which stops the skin proteins from rotting and makes them soft and durable. Leather crafts are an important trade in the north, for example around Maroua.',
      'Much fruit and vegetable produce rots before it reaches market. Turning it into longer-lasting products adds value and reduces waste: tomatoes into **paste**, fruits into **juices** and jams, cassava, potatoes and maize into **flour**. Preservation methods work by stopping microorganisms: **heating** and sealing (canning, bottling), **drying** and smoking, adding **salt** or **sugar**, making food **acidic**, and keeping it **cold**.',
    ],
    figure: null,
    tip: 'For each preservation method, state **how** it stops microorganisms: removing water, killing them with heat, or slowing their enzymes with cold.',
    check: {
      q: 'Why does yoghurt keep longer than fresh milk?',
      a: ['Its lactic acid stops most harmful bacteria growing', 'It contains no bacteria at all', 'It has more water', 'It contains alcohol'],
      why: 'The low pH produced by lactic acid bacteria prevents most spoilage bacteria from multiplying.',
    },
    terms: [
      ['Curd', 'The solid part of clotted milk used to make cheese.'],
      ['Rennet', 'An enzyme that clots milk proteins.'],
      ['Tanning', 'Treating hides so that they become leather and do not rot.'],
    ],
  },

  // ---------------- Coordination in plants ----------------
  {
    id: 'bi-tropism-1',
    unit: 'bi-f5-coord',
    n: '4.1',
    title: 'Tropisms, nastic and tactic movements',
    minutes: 10,
    paper: 'Paper 2 & 3',
    tags: ['Tropisms', 'Experiments'],
    body: [
      'Plants respond to stimuli, though more slowly than animals. A **tropism** is a **growth** response of part of a plant to a stimulus that comes from **one direction**. Growth towards the stimulus is **positive**, and away from it is **negative**.',
      '**Phototropism** is the response to light: shoots are positively phototropic, so leaves get more light for photosynthesis. **Geotropism** is the response to gravity: roots are positively geotropic, growing down into soil and water, and shoots are negatively geotropic. **Hydrotropism** is growth of roots towards water, and **thigmotropism** is the response to touch, as when the tendrils of passion fruit or beans coil round a support. Pollen tubes grow towards the ovule by **chemotropism**.',
      'Phototropism is shown by growing seedlings in a box with light entering through one slit: after a few days the shoots bend towards the slit. Seedlings in a box lit from above, or turned slowly on a **clinostat**, grow straight and are the **control**. Geotropism is shown by laying seedlings on their side: the roots bend down and the shoots up. On a slowly rotating clinostat, gravity acts equally on all sides and the root grows straight out.',
      'A **nastic** movement is a response whose direction does not depend on the direction of the stimulus. The leaflets of the sensitive plant, *Mimosa pudica*, fold when touched because cells at their base suddenly lose turgor; many flowers open in the morning and close at night.',
      'A **tactic** movement (taxis) is the movement of a **whole organism** towards or away from a stimulus: *Euglena* swims towards light, and sperm swim towards chemicals released by the egg.',
    ],
    figure: 'phototropism',
    tip: 'Name tropisms with both the **stimulus** and the **direction**: "positively phototropic" means growing **towards** light.',
    check: {
      q: 'Why are roots positively geotropic?',
      a: ['Growing down takes them into the soil for anchorage, water and minerals', 'They need light', 'They are pulled down by their weight only', 'They avoid water'],
      why: 'Growing towards gravity anchors the plant and brings the roots into contact with water and minerals.',
    },
    terms: [
      ['Tropism', 'A directional growth response of a plant to a stimulus.'],
      ['Nastic movement', 'A plant response that does not depend on the direction of the stimulus.'],
      ['Taxis', 'Movement of a whole organism towards or away from a stimulus.'],
    ],
  },
  {
    id: 'bi-auxin-1',
    unit: 'bi-f5-coord',
    n: '4.2',
    title: 'Auxins, other plant hormones and horticulture',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Auxins', 'Horticulture'],
    body: [
      'Plant responses are controlled by **plant hormones** (growth regulators). **Auxin** is made in the tips of shoots and roots and spreads back from the tip. In shoots it makes cells **elongate**.',
      'When a shoot is lit from one side, auxin moves to the **shaded side**. The cells there elongate more, so the shoot bends towards the light. If the tip is cut off or covered with foil, the shoot does not bend, which shows that the tip detects light and makes auxin. In a root lying on its side, auxin collects on the **lower side**, where high auxin **slows** root cell growth, so the upper side grows faster and the root bends down.',
      'Other plant hormones: **gibberellins** make stems elongate and seeds germinate, and are used to make larger seedless grapes. **Cytokinins** promote cell division. **Abscisic acid** causes leaf fall, keeps seeds dormant and closes stomata in drought. **Ethylene**, a gas, makes fruits ripen: placing ripe bananas or avocados with unripe ones in a closed bag speeds ripening.',
      'Synthetic auxins are used in **horticulture**, the growing of fruits, vegetables and ornamental plants. **Rooting powder** helps stem cuttings form roots; sprays make fruit set without pollination; and **selective weedkillers** kill broad-leaved weeds in maize or rice fields by making them grow too fast.',
      'Horticulturists propagate good varieties by **cuttings**, **layering**, **budding** and **grafting**, joining a shoot (scion) of a good mango, avocado or orange variety onto a hardy rootstock. Nurseries, flower gardens and vegetable gardens provide food, income and beautiful, healthy surroundings.',
    ],
    figure: null,
    tip: 'Auxin has **opposite effects** in shoots and roots: high auxin **speeds up** elongation in shoots but **slows** it in roots.',
    check: {
      q: 'A seedling with its tip covered by foil is lit from one side. What happens?',
      a: ['It grows straight up because the tip cannot detect the light', 'It bends towards the light faster', 'It bends away from the light', 'It stops growing completely'],
      why: 'The tip detects the light and produces auxin. Covered, it cannot respond to the direction of light, so growth is even.',
    },
    terms: [
      ['Auxin', 'A plant hormone that controls cell elongation.'],
      ['Grafting', 'Joining a shoot of one plant onto the rooted stem of another.'],
      ['Horticulture', 'Growing fruits, vegetables and ornamental plants.'],
    ],
  },

  // ---------------- Genetics ----------------
  {
    id: 'bi-chrom-1',
    unit: 'genetics',
    n: '5.2',
    title: 'The human karyotype, crossing over and cancer',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Chromosomes', 'Karyotype'],
    body: [
      'The genetic information of a cell is stored in the **sequence of bases** of its **DNA**. Each chromosome is one long DNA molecule carrying hundreds of **genes**; each gene sits at a fixed position, its **locus**. Chromosomes come in **homologous pairs**, one from each parent, carrying genes for the same characteristics.',
      'A **karyotype** is a picture of all the chromosomes of a cell, arranged in pairs by size and shape. A normal human karyotype has **46 chromosomes**: 22 pairs of **autosomes** and one pair of **sex chromosomes**, XX in a female and XY in a male. A karyotype can show chromosome anomalies: in **Down syndrome** there are three copies of chromosome 21, making 47 chromosomes.',
      'During **meiosis**, homologous chromosomes pair up and swap sections. This **crossing over** makes new combinations of alleles on each chromosome. Each pair is also shared out independently into the gametes. Then, at **fertilisation**, any one of millions of different sperm can join with the egg. These three processes explain why brothers and sisters, apart from identical twins, are all different.',
      'Mitosis normally happens only when the body needs new cells. **Cancer** is a disorder of cell division: a cell divides out of control and forms a lump, a **tumour**, that can spread to other parts of the body. Cancers are caused by mutations, made more likely by tobacco smoke, strong sunlight, some chemicals, radiation and some viruses: hepatitis B can lead to liver cancer, and HPV to cancer of the cervix, which vaccination now helps to prevent.',
      'Genetic conditions such as albinism and sickle cell disease are caused by genes, not by curses or witchcraft. People living with them deserve the same respect and opportunities as everyone else.',
    ],
    figure: 'chromosome-dna',
    tip: 'Give **three sources** of variation in sexual reproduction: **crossing over**, **independent assortment** of chromosomes in meiosis, and **random fertilisation**.',
    check: {
      q: 'How many autosomes are there in a human body cell?',
      a: ['44', '46', '23', '22'],
      why: 'There are 46 chromosomes: 22 pairs (44) of autosomes and one pair of sex chromosomes.',
    },
    terms: [
      ['Karyotype', 'The chromosomes of a cell arranged in pairs.'],
      ['Crossing over', 'Exchange of sections between homologous chromosomes in meiosis.'],
      ['Tumour', 'A mass of cells formed by uncontrolled cell division.'],
    ],
  },
  {
    id: 'bi-allele-1',
    unit: 'genetics',
    n: '5.5',
    title: 'Codominance, blood groups, sickle cell and albinism',
    minutes: 10,
    paper: 'Paper 2',
    tags: ['Genetic crosses', 'Calculation'],
    body: [
      'When two alleles are both fully expressed in a heterozygote, they are **codominant**. The **ABO blood groups** are controlled by three alleles: **IA** and **IB** are codominant, and both are dominant to **IO**. Genotypes IA IA and IA IO give group A, IB IB and IB IO give group B, IA IB gives group AB, and IO IO gives group O. Blood groups matter in transfusion and can help in, but cannot alone settle, questions of parentage.',
      '**Sickle cell anaemia** is caused by a recessive allele, **HbS**, which makes abnormal haemoglobin. People with **HbS HbS** have red cells that become sickle-shaped when oxygen is low, block small vessels and are destroyed quickly, causing painful crises and anaemia. **Carriers** (**HbA HbS**) are usually healthy and have some protection against malaria, which is why the allele is common in West and Central Africa. Couples can have a **genotype test** before marriage and receive genetic counselling.',
      '**Albinism** is caused by a recessive allele that prevents the making of **melanin**. People with albinism (aa) have very pale skin, hair and eyes, poor eyesight and a high risk of skin cancer, so they need protection from the sun. Two carriers (Aa) with normal skin can have a child with albinism.',
      'Variation in a population comes from the different alleles people carry and from the environment. Each person’s genotype is unique, which is the basis of the great **diversity** of the human race.',
    ],
    figure: 'sickle-cross',
    examples: [
      {
        q: 'Two carriers of the sickle cell allele (HbA HbS × HbA HbS) plan a family. What is the chance that a child has sickle cell anaemia?',
        steps: [
          'Gametes of each parent: HbA or HbS.',
          'Offspring: 1 HbA HbA : 2 HbA HbS : 1 HbS HbS.',
          'Chance of HbS HbS (sickle cell anaemia) = 1 in 4, or 25%, for each child. Half the children are likely to be carriers.',
        ],
      },
      {
        q: 'A man of blood group A (IA IO) and a woman of group B (IB IO) have children. Which blood groups are possible?',
        steps: [
          'Gametes: man IA or IO; woman IB or IO.',
          'Offspring: IA IB (AB), IA IO (A), IB IO (B), IO IO (O).',
          'All four groups are possible, each with a chance of 1 in 4.',
        ],
      },
    ],
    tip: 'Set out every cross in full: **parental phenotypes, genotypes, gametes, Punnett square, offspring genotypes, phenotypes and ratio**. Marks are given for each line.',
    check: {
      q: 'A child has blood group O. Which parent genotypes are impossible?',
      a: ['A father with genotype IA IB', 'A father with genotype IA IO', 'A mother with genotype IB IO', 'A mother with genotype IO IO'],
      why: 'A group O child (IO IO) needs an IO allele from each parent. A parent with IA IB has no IO allele to pass on.',
    },
    terms: [
      ['Codominance', 'When both alleles in a heterozygote are fully expressed.'],
      ['Carrier', 'A heterozygous person who carries a recessive allele without showing its effect.'],
      ['Genetic counselling', 'Advice to people about the chance of passing on a genetic condition.'],
    ],
  },

  // ---------------- Human reproduction and family planning ----------------
  {
    id: 'bi-puberty-1',
    unit: 'bi-f5-humanrepro',
    n: '6.2',
    title: 'Pregnancy, birth, growth and puberty',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Pregnancy', 'Puberty'],
    body: [
      'Gametes are made by meiosis: **sperm** in the testes from puberty onwards (**spermatogenesis**) and **eggs** in the ovaries (**oogenesis**), one egg usually being released each month. During sexual intercourse, sperm are deposited in the vagina and swim through the cervix and uterus into the oviducts. If an egg is present, one sperm may fertilise it, forming a **zygote**.',
      'The zygote divides as it moves down the oviduct, and after about a week the ball of cells **implants** in the thick lining of the uterus. The **placenta** develops, linked to the embryo by the **umbilical cord**. Oxygen, glucose, amino acids and antibodies diffuse from the mother’s blood to the fetus, and carbon dioxide and urea pass back, but the two bloods do not mix. The fetus floats in **amniotic fluid**, which protects it from knocks. Alcohol, nicotine, many drugs and some viruses can cross the placenta and harm it.',
      'Pregnancy lasts about **40 weeks**. At **birth**, the muscles of the uterus contract strongly, the cervix widens and the baby is pushed out, usually head first, followed by the placenta (the afterbirth). Antenatal care, a healthy diet and delivery with a trained health worker protect mother and baby. Breast milk gives the baby nutrients and antibodies; vaccinations and growth monitoring protect the child through infancy and childhood.',
      '**Puberty** is the stage when the sex organs mature, usually between 10 and 16 years, controlled by hormones. In **girls**, oestrogen causes the breasts to develop, the hips to widen and **menstruation** to begin. In **boys**, testosterone causes the voice to deepen, facial and body hair to grow, the muscles and shoulders to broaden and the testes to start making sperm. Both have a **growth spurt**, grow pubic and underarm hair, may get acne, and experience new feelings. Being able to make a baby does not mean being ready to care for one.',
    ],
    figure: 'placenta',
    tip: 'When describing the placenta, list what passes **to the fetus** (oxygen, food, antibodies) and what passes **to the mother** (carbon dioxide, urea), and say that the bloods **do not mix**.',
    check: {
      q: 'Why should a pregnant woman not drink alcohol or smoke?',
      a: ['Alcohol and nicotine cross the placenta and harm the fetus', 'They make the baby grow too big', 'They stop the placenta forming', 'They improve the baby’s immunity'],
      why: 'Harmful substances in the mother’s blood can diffuse across the placenta, reducing growth and damaging development.',
    },
    terms: [
      ['Implantation', 'Attachment of the embryo to the lining of the uterus.'],
      ['Placenta', 'The organ through which a fetus exchanges substances with its mother.'],
      ['Puberty', 'The stage of life when the sex organs mature.'],
    ],
  },
  {
    id: 'bi-family-1',
    unit: 'bi-f5-humanrepro',
    n: '6.3',
    title: 'Family planning and early pregnancy',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Family planning', 'Life skills'],
    body: [
      '**Family planning** means deciding how many children to have and when, so that each child can be well fed, cared for and educated, and the mother’s health is protected by spacing births. Methods of **birth control** (contraception) prevent pregnancy.',
      '**Natural methods**: **abstinence** is the only method that is completely reliable and also prevents STIs. The calendar (rhythm) method avoids sex around the time of ovulation but often fails because cycles vary, and withdrawal is unreliable. **Barrier methods**: the male and female **condom** stop sperm reaching the egg and also protect against STIs, including HIV, if used correctly every time. **Hormonal methods**: the pill, injections and implants stop ovulation; they are very reliable but give no protection against STIs and may have side effects. The **intrauterine device** (IUD) is placed in the uterus by a health worker. **Permanent methods**, for people who want no more children, are cutting the sperm ducts (vasectomy) or the oviducts (tubal ligation).',
      '**Early pregnancy** is pregnancy in a girl who is still a teenager. Causes include lack of information, peer pressure, poverty, sexual exploitation by older men, drugs and alcohol, and early marriage. Consequences include ending education, a difficult birth because the pelvis is not fully grown, fistula, anaemia, low birth weight and poverty. **Unsafe abortion**, often attempted in secret, can cause bleeding, infection, infertility and death, and in Cameroon abortion is restricted by law.',
      'Early pregnancy is prevented by **delaying sex**, good information on reproductive health, open talk with parents and teachers, staying in school, refusing gifts in exchange for sex, and reporting abuse. Any girl who becomes pregnant should get antenatal care early.',
    ],
    figure: null,
    tip: 'When comparing contraceptive methods, state for each whether it **also protects against STIs**. Only abstinence and condoms do.',
    check: {
      q: 'Which contraceptive method also protects against HIV?',
      a: ['The condom', 'The pill', 'The IUD', 'The contraceptive injection'],
      why: 'A condom forms a barrier to body fluids. Hormonal methods and the IUD only prevent pregnancy.',
    },
    terms: [
      ['Contraception', 'Methods used to prevent pregnancy.'],
      ['Family planning', 'Deciding the number and spacing of children.'],
      ['Early pregnancy', 'Pregnancy in a teenage girl.'],
    ],
  },

  // ---------------- STIs and HIV/AIDS ----------------
  {
    id: 'bi-sti-1',
    unit: 'bi-f5-sti',
    n: '7.1',
    title: 'Sexually transmitted infections',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['STIs', 'Prevention'],
    body: [
      '**Sexually transmitted infections** (STIs) are passed on mainly through sexual contact. Many have no signs at first, especially in women, so infected people can pass them on without knowing.',
      '**Gonorrhoea** is caused by a bacterium. Signs in men are a burning feeling when passing urine and a discharge of pus from the penis; women may have a discharge or no signs. **Chlamydia**, also bacterial, often has no signs. Untreated, both can spread to the oviducts and cause **infertility** and ectopic pregnancy, and can infect a baby’s eyes at birth. **Syphilis**, caused by a bacterium, starts with a painless sore (chancre), followed weeks later by a rash; years later it can damage the heart, brain and nerves, and it can pass to the fetus. These bacterial STIs are **cured with antibiotics** if treated early.',
      '**Genital herpes** is caused by a virus that produces painful blisters that come and go; it cannot be cured, but drugs control it. **Candidiasis** (thrush) is caused by a yeast-like fungus, *Candida*, causing itching and a thick white discharge; it is treated with antifungal medicine. **Trichomoniasis** is caused by a protozoan, *Trichomonas*, giving an itchy, smelly discharge; it is treated with drugs such as metronidazole.',
      'STIs are prevented by **abstinence**, **faithfulness** to one uninfected partner and correct use of **condoms**. Anyone with signs should go to a health centre, not buy drugs in the street, take the full treatment, avoid sex until cured, and make sure their partner is treated too, or they will be re-infected. STIs also make it easier to catch and pass on HIV.',
    ],
    figure: null,
    tip: 'For each STI give the **type of organism**. It tells you the treatment: **bacteria** are cured with antibiotics, **viruses** can only be controlled, **fungi** need antifungal drugs.',
    check: {
      q: 'Why should both partners be treated when one has an STI?',
      a: ['Otherwise the untreated partner re-infects the treated one', 'Treatment works only in pairs', 'The drugs are cheaper for two', 'One partner is always the cause'],
      why: 'If only one is treated, the infection passes back again the next time they have sex.',
    },
    terms: [
      ['STI', 'An infection spread mainly through sexual contact.'],
      ['Chancre', 'The painless sore of early syphilis.'],
      ['Infertility', 'Inability to have children.'],
    ],
  },
  {
    id: 'bi-aids-1',
    unit: 'bi-f5-sti',
    n: '7.3',
    title: 'HIV/AIDS: testing, treatment and living positively',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['HIV/AIDS', 'Treatment'],
    body: [
      'After infection with HIV, a person may have a short illness like flu, then no signs for many years. Antibodies to HIV may take up to about three months to appear in the blood; during this **window period**, a test can be negative even though the person is infected, so the test is repeated later.',
      'Signs of **AIDS** include long-lasting fever, diarrhoea and cough, severe weight loss, thrush in the mouth, skin rashes and infections such as **tuberculosis** and pneumonia that a healthy immune system would control.',
      'There is no cure and no vaccine yet, but **antiretroviral drugs** (ARVs) stop the virus multiplying. Taken every day for life, they keep the amount of virus very low, let the immune system recover and allow people to live long, healthy lives. A person whose virus level is kept undetectable by treatment does not pass HIV on through sex. ARVs given to pregnant and breastfeeding mothers prevent most **mother-to-child** transmission.',
      '**Living positively** with HIV means taking ARVs regularly, eating a balanced diet, treating other infections early, avoiding alcohol and smoking, using condoms, and getting support from family, friends and support groups.',
      '**Stigma** and discrimination against people living with HIV are wrong and harmful: they stop people from being tested or taking treatment openly. HIV is not caught by hugging, sharing food, toilets or classrooms. In Cameroon, HIV testing and treatment are offered at health centres, where test results are kept **confidential**.',
    ],
    figure: null,
    tip: 'Explain why ARVs must be taken **every day**: stopping lets the virus multiply again and may make it **resistant** to the drugs.',
    check: {
      q: 'Why might an HIV test be negative soon after infection?',
      a: ['Antibodies have not yet appeared in the window period', 'The virus has been cured', 'HIV cannot be detected', 'The test kills the virus'],
      why: 'Many tests detect antibodies, which take some weeks to be made, so a test is repeated after the window period.',
    },
    terms: [
      ['ARVs', 'Antiretroviral drugs that stop HIV multiplying.'],
      ['Window period', 'The time after infection before a test can detect HIV.'],
      ['Living positively', 'Living a healthy, active life with HIV.'],
    ],
  },

  // ---------------- The endocrine system ----------------
  {
    id: 'bi-hormone-1',
    unit: 'bi-f5-endocrine',
    n: '8.3',
    title: 'Hormones of the menstrual cycle and hormonal disorders',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Menstrual cycle', 'Disorders'],
    body: [
      'The **menstrual cycle** lasts about 28 days and is controlled by four hormones. Day 1 is the start of **menstruation**, when the lining of the uterus breaks down and leaves the body. **FSH** (follicle-stimulating hormone) from the **pituitary gland** makes an egg mature in a follicle in the ovary. The follicle makes **oestrogen**, which rebuilds the uterus lining.',
      'Around day 14, a surge of **LH** (luteinising hormone) from the pituitary causes **ovulation**, the release of the egg. The empty follicle becomes the **corpus luteum**, which makes **progesterone** to keep the lining thick and ready for an embryo. If no pregnancy follows, the corpus luteum breaks down, progesterone falls and menstruation begins again. If pregnancy follows, progesterone stays high, first from the corpus luteum and then from the placenta, and menstruation stops.',
      'Menstruation starts at puberty and stops at **menopause**, usually between 45 and 55 years, when the ovaries stop releasing eggs. Lower oestrogen after menopause can cause hot flushes and weaker bones. Good menstrual hygiene, with clean pads changed regularly, washing and a balanced diet rich in iron, protects health.',
      '**Hormonal disorders** follow from too much or too little of a hormone. Too little **thyroxine** in babies causes stunted growth and learning difficulty (cretinism); in adults it causes tiredness and weight gain. Lack of **iodine** makes the thyroid swell into a **goitre**, prevented by **iodised salt**. Too much thyroxine causes weight loss, nervousness and bulging eyes. Too little **growth hormone** in childhood causes **dwarfism**, too much causes **gigantism**. Too little **insulin** causes **diabetes mellitus**, and too little **ADH** causes **diabetes insipidus**, with large amounts of dilute urine.',
    ],
    figure: 'menstrual-cycle',
    tip: 'Learn the cycle as a sequence: **FSH** → egg matures and **oestrogen** rises → **LH** surge → **ovulation** → **progesterone** from the corpus luteum.',
    check: {
      q: 'Which hormone causes ovulation?',
      a: ['LH', 'FSH', 'Progesterone', 'Insulin'],
      why: 'A sudden surge of luteinising hormone from the pituitary about halfway through the cycle releases the egg.',
    },
    terms: [
      ['Ovulation', 'Release of an egg from the ovary.'],
      ['Corpus luteum', 'The structure formed from the empty follicle, which makes progesterone.'],
      ['Goitre', 'Swelling of the thyroid gland, often from lack of iodine.'],
    ],
  },

  // ---------------- Modern biotechnology ----------------
  {
    id: 'bi-modbio-1',
    unit: 'bi-f5-modbio',
    n: '9.1',
    title: 'Gene technology: making human insulin',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Genetic engineering', 'Insulin'],
    body: [
      '**Modern biotechnology** uses knowledge of **DNA** to change the genes of organisms. **Genetic engineering** (gene technology) is the transfer of a gene from one organism into another, so that the receiving organism makes a new product.',
      'People with type 1 diabetes need **insulin**. It was once extracted from the pancreas of cattle and pigs, which was costly and sometimes caused reactions. Today human insulin is made by bacteria. The **human insulin gene** is cut out of human DNA using **restriction enzymes**, which cut at particular base sequences and leave "sticky ends". A **plasmid**, a small ring of bacterial DNA, is cut open with the same enzyme. The gene is inserted into the plasmid and sealed with the enzyme **DNA ligase**, forming **recombinant DNA**.',
      'The plasmids are taken up by bacteria, which are then grown in huge, sterile **fermenters** with nutrients, oxygen and the right temperature and pH. As the bacteria multiply, each copy carries the gene and makes human insulin. Preparing and growing the organisms is the **upstream** stage; extracting and purifying the product is the **downstream** stage. Plasmids and viruses used to carry genes into cells are called **vectors**; carrying a gene into a bacterium with a virus is called **transduction**.',
      'Other products of gene technology include human growth hormone, vaccines such as the hepatitis B vaccine, and crops engineered to resist pests or to contain more vitamins. People debate genetically modified organisms: benefits include higher yields and cheaper medicines, while concerns include effects on wild species and the control of seeds by large companies.',
    ],
    figure: null,
    tip: 'Describe the steps in order: **cut** the gene with a restriction enzyme, **insert** it into a plasmid with ligase, **put** the plasmid into bacteria, **grow** them in a fermenter, **extract** the insulin.',
    check: {
      q: 'Why are the human gene and the plasmid cut with the same restriction enzyme?',
      a: ['So that they have matching sticky ends that join together', 'So that the gene is destroyed', 'So that the bacteria die', 'So that the plasmid makes insulin without the gene'],
      why: 'The same enzyme leaves complementary sticky ends on both, so the gene fits into the opened plasmid.',
    },
    terms: [
      ['Genetic engineering', 'Transferring a gene from one organism to another.'],
      ['Plasmid', 'A small ring of DNA in a bacterium, used as a vector.'],
      ['Restriction enzyme', 'An enzyme that cuts DNA at a particular base sequence.'],
    ],
  },
  {
    id: 'bi-modbio-2',
    unit: 'bi-f5-modbio',
    n: '9.2',
    title: 'DNA fingerprinting and monoclonal antibodies',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['DNA fingerprinting', 'Medicine'],
    body: [
      'Except for identical twins, every person’s DNA is unique. A **DNA fingerprint** (DNA profile) is a pattern of bands that shows some of these differences. DNA is taken from blood, saliva, hair roots, semen or skin; a tiny sample can be copied many times by the **polymerase chain reaction** (PCR).',
      'The DNA is cut into fragments with **restriction enzymes**. The fragments are separated by size by **gel electrophoresis**: an electric current pulls the negatively charged DNA through a gel, and small fragments move furthest. The bands are made visible, giving a pattern like a barcode.',
      'In **paternity testing**, every band in a child’s DNA fingerprint must match a band of either the mother or the father. Bands not from the mother must all be found in the true father. In **forensic science**, DNA left at a crime scene is compared with that of suspects; a match is strong evidence, and a non-match can prove a person innocent. DNA is also used to identify victims of disasters and to trace family lineage and relationships.',
      '**Monoclonal antibodies** are identical antibodies made by a clone of cells, produced by fusing an antibody-making lymphocyte with a cancer cell so that it divides endlessly. Each recognises one antigen. They are used in **pregnancy tests** (detecting the hormone hCG in urine), in rapid tests for diseases such as malaria and HIV, and in **cancer therapy**, where they attach to antigens on cancer cells and mark them for destruction or carry drugs or radioactive substances straight to them, sparing healthy cells.',
    ],
    figure: null,
    tip: 'In a paternity question, first cross out the child’s bands that match the **mother**; every remaining band must match the **father**.',
    check: {
      q: 'Why do small DNA fragments move further in gel electrophoresis?',
      a: ['They pass through the gel more easily', 'They have a positive charge', 'They are heavier', 'They dissolve in the gel'],
      why: 'All DNA fragments are pulled towards the positive electrode, but small ones slip through the pores of the gel faster.',
    },
    terms: [
      ['DNA fingerprint', 'A pattern of DNA bands unique to an individual.'],
      ['Gel electrophoresis', 'Separating DNA fragments by size using an electric current.'],
      ['Monoclonal antibodies', 'Identical antibodies produced by a clone of cells.'],
    ],
  },

  // ---------------- The nervous system and sense organs ----------------
  {
    id: 'bi-brain-1',
    unit: 'nervous',
    n: '10.2',
    title: 'The brain, rest and the effects of drugs',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Brain', 'Drugs'],
    body: [
      'The **brain** is protected by the skull and surrounding membranes and fluid. The **cerebrum** controls thinking, memory, learning, speech and voluntary movements, and receives information from the senses. The **cerebellum** coordinates movement and balance. The **medulla oblongata** controls automatic activities such as breathing and heart rate. The **hypothalamus** controls body temperature, thirst and the pituitary gland. The **spinal cord** carries impulses between the brain and the body and controls many reflexes.',
      'The **autonomic nervous system** controls internal organs without our awareness. Its **sympathetic** part prepares the body for action, speeding up the heart and breathing; its **parasympathetic** part calms the body, slowing the heart and helping digestion.',
      'A **simple reflex** is inborn, such as blinking or pulling away from a hot object. A **conditioned reflex** is learned through repeated experience: Pavlov’s dogs learned to salivate at the sound of a bell that came before food. Many daily skills, such as typing and riding a bicycle, involve conditioned reflexes.',
      '**Nervous fatigue** follows long study or work without breaks, lack of sleep, stress and noise; signs are poor concentration, headaches and irritability. Teenagers need about 8 to 10 hours of **sleep**. Regular rest, exercise and breaks during study keep the nervous system healthy.',
      '**Drugs** change the way the nervous system works. **Alcohol** is a depressant: it slows reactions, impairs judgement and coordination and, over time, damages the brain and liver. **Nicotine** in cigarettes is addictive. **Cannabis**, misused painkillers such as **tramadol**, and other drugs cause addiction, mental illness, poor school work and accidents. Toxic substances such as lead, mercury and pesticides also damage nerves. Saying no to drugs and seeking help for addiction protect health.',
    ],
    figure: null,
    tip: 'Give a function for each part of the brain using an example: the **cerebellum** lets you walk along a narrow plank without falling.',
    check: {
      q: 'Which part of the brain is affected when a drunk person cannot walk in a straight line?',
      a: ['Cerebellum', 'Medulla oblongata', 'Hypothalamus', 'Spinal cord'],
      why: 'The cerebellum coordinates movement and balance, and alcohol depresses its activity.',
    },
    terms: [
      ['Cerebrum', 'The largest part of the brain, controlling thought and voluntary actions.'],
      ['Conditioned reflex', 'A reflex learned by repeated association.'],
      ['Depressant', 'A drug that slows down the nervous system.'],
    ],
  },
  {
    id: 'bi-sense-1',
    unit: 'nervous',
    n: '10.4',
    title: 'The ear, defects of the eye and ear, and their hygiene',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Ear', 'Eye defects'],
    body: [
      'The **ear** has three parts. The **outer ear** (pinna and ear canal) collects sound waves and directs them to the **eardrum**, which vibrates. In the air-filled **middle ear**, three tiny bones, the **ossicles** (hammer, anvil and stirrup), pass and amplify the vibrations to the oval window. The **Eustachian tube** joins the middle ear to the throat and keeps the air pressure equal on both sides of the eardrum. In the fluid-filled **inner ear**, the **cochlea** contains sensory hair cells that turn vibrations into nerve impulses, carried by the **auditory nerve** to the brain. The **semicircular canals** detect movement of the head and help balance.',
      '**Eye defects**: in **short sight** (myopia) distant objects are blurred because the image forms in front of the retina; it is corrected with a **diverging (concave)** lens. In **long sight** (hypermetropia) near objects are blurred because the image would form behind the retina; it is corrected with a **converging (convex)** lens. Older people lose the ability to focus on near objects (presbyopia) and need reading glasses. A **cataract** is a cloudy lens, treated by surgery. **Glaucoma** is raised pressure in the eye that can cause blindness if not treated early.',
      'Infections also harm the eyes: **conjunctivitis** ("Apollo") is a contagious inflammation of the membrane covering the eye; **trachoma** can scar the cornea; and **river blindness**, spread by blackflies near fast rivers, is controlled with the drug ivermectin. Lack of **vitamin A** causes night blindness.',
      '**Deafness** may be caused by blocked ear canals, a damaged eardrum, middle ear infections, loud noise or age; hearing aids can help some people. **Hygiene of the eye and ear**: read in good light, do not rub the eyes or share towels, wash hands often, wear goggles when welding or grinding, eat foods rich in vitamin A, never push sharp objects into the ears, keep the volume of earphones low, avoid loud noise and get ear infections treated quickly.',
    ],
    figure: 'ear',
    tip: 'For eye defects, give **where the image forms** and the **lens that corrects it**: short sight, in front of the retina, diverging lens.',
    check: {
      q: 'Why do your ears "pop" when a car climbs a steep hill?',
      a: ['The Eustachian tube opens to make the air pressure equal on both sides of the eardrum', 'The cochlea fills with air', 'The ossicles break', 'The pinna changes shape'],
      why: 'Air pressure falls with height. Swallowing opens the Eustachian tube and lets the pressures balance.',
    },
    terms: [
      ['Cochlea', 'The part of the inner ear that turns vibrations into nerve impulses.'],
      ['Myopia', 'Short sight, corrected with a diverging lens.'],
      ['Eustachian tube', 'The tube joining the middle ear to the throat.'],
    ],
  },

  // ---------------- Ecology, pollution and conservation ----------------
  {
    id: 'bi-factors-1',
    unit: 'ecology',
    n: '11.2',
    title: 'Ecological factors and relationships',
    minutes: 10,
    paper: 'Paper 2 & 3',
    tags: ['Ecological factors', 'Sampling'],
    body: [
      'The **environment** is everything around an organism. A **habitat** is the place where it lives; a **population** is all the members of one species in an area; a **community** is all the populations living together; and an **ecosystem** is a community together with its non-living environment. An organism’s **ecological niche** is its role: what it eats, what eats it and how it uses its habitat.',
      '**Abiotic factors** are the non-living conditions: light, temperature, rainfall and humidity, wind, the pH and mineral content of the soil, and altitude. They explain why rainforest covers the south of Cameroon while savanna and Sahel grasslands cover the drier north, and why vegetation changes up the slopes of Mount Cameroon.',
      '**Biotic factors** are the effects of other living things: food supply, predators, parasites and disease, **competition** for food, light or space (between members of the same species or of different species), and the activities of people. Organisms also affect their environment: trees shade the ground and add humus, and earthworms change the soil.',
      'Organisms in an ecosystem depend on each other. In **symbiosis** two species live closely together. In **mutualism** both benefit: *Rhizobium* bacteria get food from bean roots and give them nitrogen compounds, and lichens are an alga and a fungus living as one. In **commensalism** one benefits and the other is unaffected, as when cattle egrets feed on insects disturbed by grazing cattle. In **parasitism** one benefits and the host is harmed.',
      'Populations are estimated by **sampling**. For plants, a square frame called a **quadrat** is placed at random several times, the plants inside are counted, and the mean per quadrat is scaled up to the whole area.',
    ],
    figure: null,
    examples: [
      {
        q: 'Ten 1 m² quadrats placed at random in a 200 m² school field contained a total of 45 daisy plants. Estimate the population.',
        steps: [
          'Mean number per quadrat = 45 ÷ 10 = 4.5 plants per m².',
          'Estimated population = 4.5 × 200 = 900 plants.',
        ],
      },
    ],
    tip: 'Quadrats must be placed **at random** and the sample must be **large** (many quadrats); explain that this avoids bias and gives a more reliable mean.',
    check: {
      q: 'Which of these is a biotic factor?',
      a: ['Competition for food', 'Soil pH', 'Light intensity', 'Rainfall'],
      why: 'Biotic factors come from living organisms. The others are physical, non-living conditions.',
    },
    terms: [
      ['Abiotic factor', 'A non-living condition of the environment.'],
      ['Biotic factor', 'An effect of living organisms on the environment.'],
      ['Ecological niche', 'The role of a species in its ecosystem.'],
    ],
  },
  {
    id: 'bi-pollution-1',
    unit: 'ecology',
    n: '11.5',
    title: 'Pollution, waste management and the law',
    minutes: 10,
    paper: 'Paper 1 & 2',
    tags: ['Pollution', 'Waste'],
    body: [
      '**Pollution** is the release of harmful substances or energy into the environment by human activity. A **pollutant** is any such substance, for example smoke, sewage, plastics, pesticides or noise.',
      '**Air pollution**: burning fuels releases **carbon dioxide**, which adds to global warming, **carbon monoxide**, which is poisonous, **sulphur dioxide** and **nitrogen oxides**, which form **acid rain** that damages plants, buildings and lakes, and soot that harms the lungs. Burning refuse and bushes adds smoke and poisonous gases. **Water pollution**: sewage spreads cholera and typhoid; fertilisers and detergents cause **eutrophication**; oil spills kill sea life; and mining, including artisanal gold mining in the East region, releases mud and mercury into rivers. **Land pollution**: plastic bags and bottles do not rot, block gutters and cause flooding, and kill animals that swallow them; pesticides such as DDT build up along food chains and harm top predators. **Noise** from generators, vehicles and loudspeakers damages hearing and causes stress.',
      '**Waste management** follows the rule **reduce, reuse, recycle**: buy and throw away less, reuse containers, and recycle paper, glass, metals and plastics. Wastes should be sorted at source; **biodegradable** wastes can be composted or used for biogas; solid wastes should be collected and taken to controlled **landfills**; liquid wastes should go to septic tanks or treatment works; and factories should treat their effluents and filter their smoke.',
      'The **law** protects the environment. Cameroon’s 1996 framework law on environmental management makes polluters responsible for the damage they cause (the polluter pays), requires environmental impact studies before large projects and sets penalties for polluting. The sale of thin non-biodegradable plastic bags is banned. Every citizen can help by not littering, sorting waste and reporting illegal dumping.',
    ],
    figure: null,
    tip: 'For each pollutant give its **source**, its **effect** and one **control**. For example: sulphur dioxide from burning fuels causes acid rain; it is reduced by filtering factory smoke.',
    check: {
      q: 'Why are plastic bags a serious problem in towns?',
      a: ['They are not biodegradable and block gutters, causing floods', 'They rot too quickly', 'They add nutrients to the soil', 'They absorb carbon dioxide'],
      why: 'Decomposers cannot break plastics down, so they build up, block drains and harm animals that swallow them.',
    },
    terms: [
      ['Pollutant', 'A harmful substance released into the environment.'],
      ['Biodegradable', 'Able to be broken down by decomposers.'],
      ['Acid rain', 'Rain made acidic by sulphur dioxide and nitrogen oxides in the air.'],
    ],
  },
  {
    id: 'bi-conserve-1',
    unit: 'ecology',
    n: '11.6',
    title: 'Conservation in Cameroon',
    minutes: 9,
    paper: 'Paper 1 & 2',
    tags: ['Conservation', 'Biodiversity'],
    body: [
      '**Conservation** is the protection and wise use of natural resources, wild species and their habitats, so that they last for future generations. Cameroon is often called "Africa in miniature" because it has rainforest, mountains, savanna and Sahel, with a very rich **biodiversity** (variety of living things).',
      'Conservation matters because ecosystems give us food, clean water, timber, fuel and fertile soil; forests store carbon and help control the climate and rainfall; wild plants give medicines, such as the bark of *Prunus africana* from Mount Cameroon used to treat prostate disease; and wildlife attracts tourists and supports jobs. Each species also has value in itself.',
      'The main threats are **deforestation** for farms, timber and settlements, **poaching** and the bushmeat trade, which threaten gorillas, chimpanzees, elephants and pangolins, overfishing, bush fires, pollution and climate change.',
      '**In situ** conservation protects species where they live. Cameroon’s protected areas include **national parks** such as **Korup** (one of Africa’s oldest rainforests), **Waza** (savanna with elephants and giraffes), Lobéké, Bénoué and Campo Ma’an, and the **Dja Faunal Reserve**, a UNESCO World Heritage Site. **Game reserves** and hunting seasons control hunting. **Ex situ** conservation protects species away from their habitats: **zoos** such as the Mvog-Betsi zoo in Yaoundé, sanctuaries and wildlife centres such as the Limbe Wildlife Centre, **botanical gardens** such as the Limbe Botanic Garden, founded in 1892, and seed banks. **Flower gardens** and school gardens also conserve plants.',
      'Everyone can help: planting trees, using fuel-efficient stoves, not buying products of endangered animals, avoiding bush fires, practising sustainable farming and fishing, and joining school environment clubs.',
    ],
    figure: null,
    tip: 'Distinguish **in situ** conservation (in the natural habitat: national parks, reserves) from **ex situ** conservation (outside it: zoos, botanical gardens, seed banks), with a Cameroonian example of each.',
    check: {
      q: 'Which is an example of ex situ conservation?',
      a: ['The Limbe Botanic Garden', 'Korup National Park', 'The Dja Faunal Reserve', 'Waza National Park'],
      why: 'A botanical garden keeps plants away from their natural habitats. Parks and reserves protect species where they live.',
    },
    terms: [
      ['Conservation', 'Protection and wise use of natural resources and wildlife.'],
      ['Biodiversity', 'The variety of living things in an area.'],
      ['Poaching', 'Illegal hunting of protected animals.'],
    ],
  },
];
