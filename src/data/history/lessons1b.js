// History lessons for Form 1 (second part): Roman society, Judaism and
// Christianity, the fall of Rome, ancient China, early Cameroon (the land, the
// forest peoples, the Bantu migration), Hanno, the trans-Saharan and coastal
// trades, Traditional African Religion, Islam and the revision of the year.
// Original text written for this app. **double asterisks** mark key terms;
// `examples` are worked examples.

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

export const LESSONS_1B = [
  // ---------- 15. Roman society ----------
  L('hi-roman-classes-1', 'hi-f1-roman-society', '15.1', 'Roman social classes, slavery and the Pax Romana', 12, ['Rome', 'Society'], [
    'Roman society was divided into classes: **senators** and **patricians** (rich, noble families who held high office); **equestrians** (wealthy businessmen); **plebeians** (ordinary citizens: farmers, craftsmen, shopkeepers, many of them poor); **freedmen** (former slaves); and **slaves**, who had no rights. Slaves, often prisoners of war, worked in houses, mines, fields and workshops; some were trained as **gladiators**. In AD 212 citizenship was extended to almost all free people of the empire.',
    'The family was led by the father (**paterfamilias**), who had great power over his household. To keep the poor of the city calm, emperors gave free grain and entertainment, "**bread and circuses**".',
    'The **Pax Romana** ("Roman peace") lasted about two centuries, from Augustus (27 BC) to about AD 180. The empire stretched from Britain to Egypt and from Spain to Mesopotamia, including the whole of North Africa. Peace allowed trade, travel on Roman roads and the spread of Latin, Roman law and cities.',
  ], 'hist1-roman-classes', 'From top to bottom: senators, equestrians, plebeians, freedmen, slaves.',
  ['"Bread and circuses" refers to:', ['free food and entertainment given to keep the city poor calm', 'a farming method', 'a Roman god', 'a kind of road'], 'A way to prevent unrest.'],
  [['Patrician', 'A member of the old noble families of Rome.'], ['Plebeian', 'An ordinary Roman citizen.'], ['Pax Romana', 'The long peace of the Roman Empire, about 27 BC to AD 180.']],
  [
    { q: 'Give two advantages of the Pax Romana for the people of the empire.', steps: ['**Safe travel and trade** on roads and seas, so goods moved across the empire.', '**Growth of cities**, law and the Latin language, which united many peoples.'] },
  ]),

  L('hi-roman-engineering-1', 'hi-f1-roman-society', '15.2', 'Roman engineering and law', 12, ['Rome', 'Legacy'], [
    'The Romans were great **engineers**. They built about 80 000 kilometres of paved **roads** (the first great one was the Appian Way, 312 BC) to move armies and trade; **aqueducts**, channels and arched bridges that carried water from the hills to towns, public baths and fountains; **bridges**, harbours and walls. They used **concrete** and the **arch** and **dome** to build large structures: the **Colosseum** in Rome (opened AD 80), an amphitheatre for about 50 000 spectators, the domed **Pantheon** and the circus for chariot races.',
    '**Roman law** grew from the Twelve Tables to a large body of laws and legal ideas: a person is innocent until proved guilty; laws should be written and apply to all citizens; contracts must be respected. Roman law is the basis of the legal systems of many countries, including the civil law used in French-speaking Cameroon.',
    'Rome also left **Latin** (the mother of French, Spanish, Italian, Portuguese and Romanian, and the source of many English words) and the **Julian calendar**, introduced by Julius Caesar in 46 BC, the basis of the calendar we use.',
  ], 'hist1-roman-engineering', 'Roads, aqueducts, arches and law: the Roman toolkit.',
  ['An aqueduct is:', ['a channel or bridge that carries water', 'a road for chariots', 'a temple', 'a ship'], 'Water engineering.'],
  [['Aqueduct', 'A structure that carries water over a long distance.'], ['Amphitheatre', 'An oval open-air building with rising rows of seats.'], ['Civil law', 'A legal system based on written codes, descended from Roman law.']],
  [
    { q: 'Explain why Roman roads were important for the empire.', steps: ['**Armies** could move quickly to defend the frontiers or stop revolts.', '**Traders** carried goods across the empire.', '**Messages and officials** travelled fast, so Rome could govern distant provinces.'] },
  ]),

  // ---------- 16. Judaism and Christianity ----------
  L('hi-judaism-1', 'hi-f1-christianity', '16.1', 'Judaism: Abraham, Moses and the Torah', 12, ['Religion', 'World history'], [
    '**Judaism** is the religion of the Jewish people and one of the oldest **monotheistic** religions (belief in one God). Its history began in the Middle East, in the land later called **Palestine** or Israel, with **Abraham**, whom Jews, Christians and Muslims honour as the father of believers. God made a **covenant** (agreement) with Abraham and his descendants.',
    'According to the Bible, the Hebrews later lived in Egypt, where they were oppressed, until **Moses** led them out (the **Exodus**). On **Mount Sinai** Moses received the **Ten Commandments**, the moral laws of Judaism ("You shall not kill", "You shall not steal", "Honour your father and your mother"). Later kings David and Solomon ruled from **Jerusalem**, where Solomon built the first **Temple**.',
    'Pillars of Judaism: belief in one God; the **Torah** (the Law, the first five books of the Hebrew Bible); the **synagogue** as a house of prayer and study; the **Sabbath** (day of rest from Friday evening to Saturday evening); and the hope for the **Messiah**, a saviour sent by God. Judaism gave the world the Ten Commandments and the idea of one God, which Christianity and Islam share.',
  ], 'hist1-judaism', 'Abraham the covenant, Moses the Law, Jerusalem the Temple.',
  ['The Jewish day of rest is the:', ['Sabbath', 'Ramadan', 'Sunday only', 'Hajj'], 'From Friday evening to Saturday evening.'],
  [['Monotheism', 'Belief in one God.'], ['Covenant', 'A solemn agreement, here between God and his people.'], ['Torah', 'The Law: the first five books of the Hebrew Bible.']],
  [
    { q: 'Give three teachings of the Ten Commandments that are still important in society.', steps: ['"**You shall not kill**": respect for human life.', '"**You shall not steal**": respect for property.', '"**Honour your father and your mother**": respect within the family.'] },
  ]),

  L('hi-christianity-1', 'hi-f1-christianity', '16.2', 'The rise and spread of Christianity', 14, ['Religion', 'Rome'], [
    '**Christianity** began in **Judea** (Palestine), then part of the Roman Empire, with **Jesus of Nazareth**, born about the beginning of the Christian era in **Bethlehem**. Jesus preached love of God and neighbour, forgiveness and care for the poor. His followers believed he was the **Messiah** (Christ) and the Son of God. He was crucified in Jerusalem under the Roman governor **Pontius Pilate** (about AD 30). His disciples, the **apostles**, and especially **Paul**, spread the faith across the empire. The holy book is the **Bible** (the Old and New Testaments).',
    '**Persecution**: Christians refused to worship the emperor and the Roman gods, so emperors such as **Nero** (AD 64) and **Diocletian** (AD 303) persecuted them; many died as **martyrs**. Yet the faith grew. In **AD 313**, the emperor **Constantine** issued the **Edict of Milan**, allowing Christians to worship freely; in **AD 380**, **Theodosius** made Christianity the **official religion** of the empire.',
    '**Christianity in Africa**: it spread early to **Egypt** (the Coptic Church of Alexandria), to **North Africa** (great thinkers such as Tertullian and **St Augustine** of Hippo, AD 354 to 430) and to **Axum** (King Ezana, fourth century), where the Ethiopian Orthodox Church still lives. It reached Cameroon much later, with missionaries from the nineteenth century.',
  ], 'hist1-judeo-christian', 'Jesus (about AD 30), persecution, Constantine (313), Theodosius (380).',
  ['The Edict of Milan in AD 313:', ['allowed Christians to worship freely', 'banned Christianity', 'founded Rome', 'ended the Olympic Games'], 'Issued by Constantine.'],
  [['Messiah', 'The saviour promised by God; in Greek, Christ.'], ['Martyr', 'A person killed for their faith.'], ['Apostle', 'One of the first messengers of Jesus.']],
  [
    { q: 'Explain why the Romans persecuted the early Christians.', steps: ['Christians **refused to worship the emperor** and the Roman gods, which seemed disloyal.', 'They met **secretly**, which caused suspicion and rumours.', 'Emperors used them as **scapegoats** for disasters, such as the fire of Rome under Nero.'] },
  ]),

  // ---------- 17. Fall of Rome ----------
  L('hi-rome-decline-1', 'hi-f1-rome-fall', '17.1', 'Why the Western Roman Empire fell', 14, ['Rome', 'World history'], [
    'From the third century AD the Roman Empire faced many problems:\n- **political**: civil wars, assassinated emperors and **corruption** in the government\n- **economic**: heavy **taxes**, inflation (coins with less silver), falling trade and the decline of farming\n- **military**: an empire **too large to defend**, attacks on all the frontiers, and armies full of foreign **mercenaries** with little loyalty to Rome\n- **social**: dependence on slaves, the poverty of many citizens, and a loss of public spirit.',
    'Emperor **Diocletian** divided the administration; after the death of **Theodosius** in **AD 395** the empire was split for good into a **Western** half (capital Rome, later Ravenna) and an **Eastern** half (capital **Constantinople**, founded by Constantine). Germanic peoples crossed the frontiers, some pushed by the **Huns** from Asia: the **Visigoths** under Alaric **sacked Rome in AD 410**; the **Vandals** took Roman Africa (Carthage, 439) and sacked Rome in 455.',
    'In **AD 476** the Germanic leader **Odoacer** deposed the last western emperor, the boy **Romulus Augustulus**. This date marks the **fall of the Western Roman Empire** and, for many historians, the beginning of the Middle Ages.',
  ], 'hist1-rome-fall', 'Inside problems weakened Rome; outside invaders finished it.',
  ['Constantinople was the capital of the:', ['Eastern Roman (Byzantine) Empire', 'Western Roman Empire', 'Greek city-state of Sparta', 'kingdom of Kush'], 'Founded by Constantine.'],
  [['Mercenary', 'A soldier paid to fight for a foreign country.'], ['Inflation', 'A general rise in prices that reduces the value of money.'], ['Sack', 'To plunder and destroy a captured city.']],
  [
    { q: 'Give two internal and two external causes of the fall of the Western Roman Empire.', steps: ['Internal: **heavy taxes and economic decline**; **civil wars and corruption**.', 'External: **invasions by Germanic peoples** (Visigoths, Vandals); **pressure from the Huns**.'] },
  ]),

  L('hi-rome-legacy-1', 'hi-f1-rome-fall', '17.2', 'The Byzantine Empire and the legacy of Rome', 12, ['Rome', 'Legacy'], [
    'The **Eastern Roman Empire**, later called the **Byzantine Empire**, survived for almost a thousand years after 476, with its capital at **Constantinople** (today Istanbul). Emperor **Justinian** (527 to 565) collected Roman laws into a great code. The empire was a centre of Christianity (the Orthodox Church), learning and trade until Constantinople fell to the **Ottoman Turks** in **1453**.',
    'The **legacy of Rome** to the world:\n- **law**: Roman law and the idea of written laws for all citizens\n- **language**: Latin and the languages that came from it, including French\n- **government**: the words senate, republic, citizen and dictator\n- **engineering and architecture**: roads, bridges, arches, domes and concrete\n- the **calendar** (the months July and August are named after Julius Caesar and Augustus)\n- the spread of **Christianity** across Europe and North Africa.',
    'In Africa, Roman rule left ruins of cities, theatres and aqueducts in Tunisia, Algeria, Libya and Egypt, such as Leptis Magna in Libya.',
  ], 'hist1-rome-legacy', 'Look around you: law, French, July, arches and the calendar all come from Rome.',
  ['The months July and August are named after:', ['Julius Caesar and Augustus', 'two Greek gods', 'two Egyptian pharaohs', 'two Chinese emperors'], 'A Roman legacy.'],
  [['Byzantine Empire', 'The Eastern Roman Empire, capital Constantinople, until 1453.'], ['Legacy', 'Something handed down from the past.']],
  [
    { q: 'Show how Rome’s legacy can be seen in Cameroon today.', steps: ['**French**, an official language, comes from **Latin**.', 'Cameroon’s **civil law** (in the French-speaking regions) grew from **Roman law**.', 'Words such as **Senate** and **Republic** name Cameroon’s own institutions.'] },
  ]),

  // ---------- 18. China ----------
  L('hi-china-1', 'hi-f1-china', '18.1', 'The dynasties of ancient China', 12, ['China', 'World history'], [
    'Chinese civilisation grew along the **Yellow River** (Huang He) and the **Yangtze River**, whose valleys gave fertile soil for millet and rice. Its history is told through **dynasties**:\n- **Shang** (about 1600 to 1046 BC): bronze work and the first Chinese **writing**, on **oracle bones** used to ask the ancestors questions\n- **Zhou** (about 1046 to 256 BC): the idea of the **Mandate of Heaven** (heaven gives power to a just ruler); the age of the thinker **Confucius** (551 to 479 BC), who taught respect for parents and elders, good conduct and loyalty to a just ruler\n- **Qin** (221 to 206 BC): **Qin Shi Huang** united China, became the first emperor, standardised writing, money and weights, linked walls into an early **Great Wall**, and was buried with the **terracotta army**\n- **Han** (206 BC to AD 220): a long golden age, the exam-trained civil service, and trade along the **Silk Road**.',
    'The **Silk Road** was a network of trade routes linking China with Central Asia, India, Persia and the Mediterranean. Silk, porcelain and tea went west; horses, glass, gold and ideas (such as Buddhism) came east.',
  ], 'hist1-china', 'Shang writing, Zhou Confucius, Qin unity, Han Silk Road.',
  ['The first emperor of a united China was:', ['Qin Shi Huang', 'Confucius', 'Augustus', 'Ezana'], 'In 221 BC.'],
  [['Dynasty', 'A series of rulers from the same family.'], ['Mandate of Heaven', 'The Chinese belief that heaven gives the right to rule to a just ruler.'], ['Silk Road', 'The trade routes linking China with the West.']],
  [
    { q: 'Explain how Qin Shi Huang strengthened China.', steps: ['He **united** the warring states into one empire (221 BC).', 'He **standardised** writing, coins, weights and measures, which helped government and trade.', 'He **joined walls** in the north to protect China against invaders.'] },
  ]),

  L('hi-inventions-china-1', 'hi-f1-china', '18.2', 'Chinese inventions that changed the world', 12, ['China', 'Legacy'], [
    'China gave the world the "**Four Great Inventions**":\n- **paper**: improved around **AD 105** by the court official **Cai Lun**, using bark, hemp and rags; it spread to the Islamic world and Europe centuries later\n- **printing**: woodblock printing (the oldest dated printed book, the Diamond Sutra, is from AD 868) and later movable type invented by **Bi Sheng** in the eleventh century\n- the **compass**: a magnetised needle that points north and south, used first for direction-finding on land and later by sailors\n- **gunpowder**: discovered by alchemists, first used for fireworks and later for weapons.',
    'Other achievements: **silk** (made from the cocoons of silkworms, a secret for centuries), **porcelain** (fine pottery, called "china" in English), the wheelbarrow, the **seismograph** of Zhang Heng (AD 132) to detect earthquakes, acupuncture, and the cultivation of tea.',
    'These inventions spread along trade routes and changed the world: paper and printing spread knowledge; the compass helped long sea voyages; gunpowder changed warfare.',
  ], 'hist1-china-inventions', 'Four Great Inventions: paper, printing, compass, gunpowder.',
  ['In English, fine porcelain is often called:', ['china', 'papyrus', 'bronze', 'terracotta'], 'Named after its country of origin.'],
  [['Seismograph', 'An instrument that detects earthquakes.'], ['Movable type', 'Separate letters or characters that can be arranged for printing.']],
  [
    { q: 'Choose one Chinese invention and explain how it affects your life as a student.', steps: ['**Paper**: exercise books and textbooks are printed on paper.', 'With **printing**, many copies of a book can be made cheaply.', 'So knowledge reaches **many students**, not only a few scribes.'] },
  ]),

  // ---------- 19. Land of early Cameroon ----------
  L('hi-cmr-zones-1', 'hi-f1-cameroon-land', '19.1', 'The geographical framework of early Cameroon', 12, ['Cameroon', 'Geography'], [
    'Cameroon stretches about 1 200 kilometres from the Atlantic coast to Lake Chad and has almost every landscape and climate of Africa, so it is often called "**Africa in miniature**". Its main zones:\n- the **coastal lowlands**, with mangroves around the estuaries of the Wouri and the Rio del Rey, and **Mount Cameroon**, an active volcano of about 4 000 metres\n- the **southern plateau** with the dense **equatorial forest** (South, Centre, East and Littoral), hot and wet all year\n- the **western highlands** (the Grassfields), high plateaus and volcanic mountains covered with grassland and good soils\n- the **Adamawa plateau**, a high savanna and a water tower from which rivers flow north and south\n- the **northern savanna** and the **Benue lowlands**\n- the **Sahel** near **Lake Chad**, with the **Mandara mountains**: short rains and a long dry season.',
    'Rivers such as the **Sanaga**, the **Wouri**, the Nyong, the **Benue** and the Logone gave water, fish and routes for movement.',
  ], 'hist1-cmr-zones', 'From the coast to Lake Chad: mangrove, forest, highlands, Adamawa, savanna, Sahel.',
  ['The zone with high plateaus and grassland in the west is the:', ['western highlands (Grassfields)', 'Sahel', 'coastal lowlands', 'equatorial forest'], 'Volcanic mountains and plateaus.'],
  [['Ecological zone', 'An area with its own climate, vegetation and animals.'], ['Estuary', 'The wide mouth of a river where it meets the sea.']],
  [
    { q: 'Name three ecological zones of Cameroon from south to north.', steps: ['**Equatorial forest** in the south.', '**Adamawa plateau and northern savanna** in the centre-north.', '**Sahel** near Lake Chad in the far north.'] },
  ]),

  L('hi-cmr-lifeways-1', 'hi-f1-cameroon-land', '19.2', 'How the environment shaped ways of life', 12, ['Cameroon'], [
    'Each environment offered different resources, so early peoples developed different **ways of life**:\n- **coast and rivers**: fishing, salt making, canoe building and trade by water\n- **equatorial forest**: hunting, gathering, and later farming in clearings (yams, plantains, oil palm, cocoyams), with houses of wood, bark and raffia\n- **western highlands**: dense populations of farmers on fertile volcanic soils (maize later, beans, cocoyams), crafts such as wood carving, iron working and weaving, and strong kingdoms (fondoms)\n- **savanna and Sahel**: grain farming (sorghum, millet), herding of cattle, horses and later trade with North Africa.',
    'The environment also shaped **settlement**: people settled near water and good soils and avoided areas with sleeping sickness or poor land. Over time, migrations and trade linked the zones, and the peoples of Cameroon exchanged goods, ideas and techniques.',
  ], 'hist1-lifeways', 'Ask what each environment offers: water, forest, soil or grass.',
  ['In the savanna and Sahel, early peoples mainly:', ['grew grain and herded cattle', 'fished in mangroves', 'grew cocoa in the forest', 'mined coal'], 'Open grassland suits them.'],
  [['Way of life', 'The usual activities and customs of a people.'], ['Settlement', 'A place where people live permanently.']],
  [
    { q: 'Compare the ways of life of a coastal people and a savanna people.', steps: ['Coastal: **fishing, salt making, canoes**, trade by water.', 'Savanna: **sorghum and millet farming, cattle herding**, trade by land.', 'The difference comes from the **resources of each environment**.'] },
  ]),

  // ---------- 20. Forest peoples ----------
  L('hi-pygmies-1', 'hi-f1-pygmies', '20.1', 'The first inhabitants: the forest peoples and their way of life', 14, ['Cameroon', 'Peoples'], [
    'Historians consider the **forest peoples** often called **Pygmies** to be among the **earliest inhabitants** of Cameroon and Central Africa, living in the forest long before the Bantu farmers arrived. Today many prefer to be called by the names of their own peoples. In Cameroon they include the **Baka** (in the **East** and **South** regions), the **Bakola** and **Bagyeli** (in the South, around **Kribi** and **Lolodorf**), and the **Bedzan** (around Ngambe-Tikar, between the Centre and the Adamawa).',
    'Their **original way of life**: they were **hunter-gatherers** who lived from the forest. Men hunted with nets, spears, bows and traps; women gathered fruits, nuts, mushrooms, honey, roots and leaves and caught small fish. They lived in small **bands** of related families and moved between **camps** of dome-shaped huts made of branches and leaves.',
    'Their society was largely **equal**: decisions were taken together, and food was **shared**. They have a deep knowledge of **forest plants and medicines**, animals and seasons, and a rich culture of **music** (polyphonic singing), dance and storytelling.',
  ], 'hist1-forest-peoples', 'Name them by their peoples: Baka, Bakola-Bagyeli, Bedzan.',
  ['The Baka live mainly in Cameroon’s:', ['East and South regions', 'Far North', 'Littoral', 'Grassfields'], 'In the equatorial forest.'],
  [['Hunter-gatherer', 'A person who lives by hunting and gathering wild food.'], ['Band', 'A small group of related families that live and move together.'], ['Polyphonic', 'Music with several voices singing different parts together.']],
  [
    { q: 'Describe the division of work in a traditional Baka band.', steps: ['**Men**: hunting with nets, spears and traps; collecting honey.', '**Women**: gathering fruits, nuts, roots and leaves; fishing in streams; building huts.', 'Food was **shared** among all the families of the band.'] },
  ]),

  L('hi-pygmies-today-1', 'hi-f1-pygmies', '20.2', 'Forest peoples today: contributions, challenges and rights', 12, ['Cameroon', 'Citizenship'], [
    'The forest peoples **contributed** to the history of Cameroon: they knew the forest and guided newcomers, traded meat, honey and forest products with Bantu farmers for iron tools, salt and crops, and kept knowledge of medicinal plants that still helps science.',
    '**Challenges today**: the loss of their forests through **logging**, mining, plantations and protected areas from which they may be excluded; pressure to settle in roadside villages; poor access to **schools**, health care and identity papers; and **discrimination** and mockery because of their size or way of life.',
    'As citizens, they have the **same rights** as all Cameroonians: education, health, land and respect for their culture. Cameroon celebrates the **International Day of the World’s Indigenous Peoples** (9 August). Respecting minorities and rejecting discrimination builds national unity.',
  ], 'hist1-forest-rights', 'Equal citizens: same rights, respect for a different culture.',
  ['A major threat to the forest peoples’ way of life is:', ['the destruction of the forest by logging and plantations', 'too much rain', 'the harmattan', 'the sea'], 'Their home is shrinking.'],
  [['Indigenous peoples', 'The first peoples of a land, with their own cultures.'], ['Discrimination', 'Unfair treatment of a person because of the group they belong to.']],
  [
    { q: 'Suggest two ways to protect the rights of the forest peoples.', steps: ['**Protect their access to the forest** and land, and include them in decisions about forest use.', '**Provide schools and health care** that respect their culture and language.', 'Fight **discrimination** through education and the law.'] },
  ]),

  // ---------- 21. Bantu migration ----------
  L('hi-bantu-origin-1', 'hi-f1-bantu', '21.1', 'The origin, causes and routes of the Bantu migration', 14, ['Cameroon', 'Africa', 'Migrations'], [
    'The **Bantu** are a large family of peoples in Central, Eastern and Southern Africa who speak related languages, called **Bantu languages** (from **ntu**, "person"; **ba-ntu**, "people"). Comparing these languages and archaeological finds, historians place the **Bantu homeland** near the present **Cameroon-Nigeria borderland**, in the region of the Benue and Cross rivers and the Grassfields. From there, Bantu-speaking farmers began to spread about **3 000 to 5 000 years ago**, slowly, over many centuries.',
    '**Causes**: **population growth** among farming peoples and the need for **new farmland**; the **drying of the Sahara**, which pushed peoples south; the search for better hunting, fishing and grazing; conflicts; and later, **iron tools**, which made it easier to clear the forest.',
    '**Routes**: one stream moved **south through the equatorial forest** (through southern Cameroon, Gabon and the Congo basin) to Angola; another moved **east along the northern edge of the forest** to the **Great Lakes** region of East Africa, then south. By about AD 1000 to 1500 Bantu-speaking peoples had reached most of Southern Africa. In Cameroon, peoples such as the Duala, Bassa, Beti (Ewondo, Bulu, Eton) and Maka speak Bantu languages; the languages of the Grassfields peoples are closely related to them.',
  ], 'hist1-bantu', 'Bantu = people; homeland near the Cameroon-Nigeria border; two main streams.',
  ['Historians mainly use which sources to trace the Bantu migration?', ['languages and archaeology', 'newspapers', 'photographs', 'radio recordings'], 'Linguistic and archaeological sources.'],
  [['Migration', 'The movement of people from one place to settle in another.'], ['Bantu languages', 'A family of more than 400 related African languages.']],
  [
    { q: 'Explain how the study of languages helps historians trace the Bantu migration.', steps: ['Bantu languages share **similar words** (ntu for person, words for farming and iron).', 'The **greatest variety** of Bantu languages is near the Cameroon-Nigeria border, which suggests it is the **oldest area**.', 'Languages further away are **more alike**, showing a later and faster spread.'] },
  ]),

  L('hi-bantu-effects-1', 'hi-f1-bantu', '21.2', 'The effects of the Bantu migration', 12, ['Cameroon', 'Africa', 'Migrations'], [
    'The Bantu migration was one of the greatest movements of people in history. **Effects**:\n- the spread of **farming** (yams, oil palm, later bananas and plantains) and of **iron working** across Central, Eastern and Southern Africa\n- the spread of **Bantu languages**, now spoken by hundreds of millions of people, such as **Swahili**, Zulu, Kikongo, Lingala and, in Cameroon, **Duala**, Bassa, **Ewondo** and **Bulu**\n- the founding of **villages**, chiefdoms and later kingdoms\n- the **mixing** of peoples and cultures, and the absorption or displacement of hunter-gatherers such as the forest peoples, who sometimes adopted Bantu languages\n- the clearing of forests and changes to the environment.',
    'In Cameroon the Bantu migration helps to explain why the peoples of the south and centre share related languages and customs. It reminds us that the peoples of Cameroon have **common roots**, a reason for national unity.',
  ], 'hist1-bantu-effects', 'The Bantu carried three things: crops, iron and languages.',
  ['Which is a Bantu language of East Africa?', ['Swahili', 'Arabic', 'Fulfulde', 'Hausa'], 'Widely spoken in East Africa.'],
  [['Iron working', 'Making tools and weapons by smelting and forging iron.'], ['Cultural mixing', 'The blending of customs when peoples meet.']],
  [
    { q: 'Give three effects of the Bantu migration on Africa.', steps: ['**Farming and iron working** spread to new regions.', '**Bantu languages** became the main languages of Central, Eastern and Southern Africa.', '**New societies** formed, and peoples and cultures mixed.'] },
  ]),

  // ---------- 22. Hanno ----------
  L('hi-carthage-1', 'hi-f1-hanno', '22.1', 'Carthage, a Phoenician city of Africa', 12, ['Africa', 'Trade'], [
    'The **Phoenicians** were a seafaring people of the eastern Mediterranean (present-day Lebanon), famous for trade, purple dye and the **alphabet**, from which the Greek and Latin alphabets came. They founded trading posts around the Mediterranean.',
    'According to tradition, Phoenicians from the city of **Tyre** founded **Carthage** in **814 BC** on the coast of present-day **Tunisia**, in North Africa. Carthage grew into a great **trading power** with a strong navy, controlling trade in the western Mediterranean and along the Atlantic coasts of Africa and Spain.',
    'Carthage clashed with Rome in the **Punic Wars** (264 to 146 BC). Its general **Hannibal** invaded Italy, but Carthage was finally **destroyed by Rome in 146 BC**. Long before that, Carthaginian sailors explored the coasts of Africa.',
  ], 'hist1-carthage', 'Tyre founded Carthage; Rome destroyed it.',
  ['The Phoenicians gave the world:', ['the alphabet that led to Greek and Latin letters', 'hieroglyphics', 'paper', 'the compass'], 'A great contribution.'],
  [['Phoenicians', 'A seafaring trading people of the eastern Mediterranean.'], ['Trading post', 'A settlement set up for trade.']],
  [
    { q: 'Why did Carthage become rich and powerful?', steps: ['A **good harbour** on the Mediterranean coast.', 'A strong **navy** and skilled **traders** inherited from the Phoenicians.', 'Control of **trade routes** in the western Mediterranean and along Africa’s Atlantic coast.'] },
  ]),

  L('hi-hanno-1', 'hi-f1-hanno', '22.2', 'The voyage of Hanno and the "Chariot of the Gods"', 14, ['Cameroon', 'Sources'], [
    'In about the **fifth century BC** (traditionally around **500 BC**), the Carthaginian **Hanno the Navigator** led a large fleet through the Strait of Gibraltar and south along the **Atlantic coast of West Africa**, to found colonies and explore. His report, inscribed in a temple at Carthage, survives in a short Greek version called the **Periplus of Hanno**.',
    'Near the end of the voyage, Hanno described a coast with fires at night and "a very high mountain" with flames reaching the sky, which he called the "**Chariot of the Gods**" (Theon Ochema). Most historians think this was **Mount Cameroon** in **eruption**, the only very high active volcano on that coast. He also described hairy wild people whom his interpreters called "gorillas"; the word **gorilla** comes from this account.',
    'As a **source**, the Periplus is precious: it may be the **oldest written record** that mentions the coast of Cameroon. But it must be used with care: it is very short, it was translated and copied, and historians disagree on how far Hanno really sailed. Its value lies in showing that the Cameroon coast was known to the Mediterranean world long before the Portuguese arrived (about 1472).',
  ], 'hist1-hanno', 'A source can be precious and uncertain at the same time.',
  ['Why do most historians link the "Chariot of the Gods" to Mount Cameroon?', ['it is the only very high active volcano on that coast', 'Hanno named it Cameroon', 'it is in Tunisia', 'Hanno lived there'], 'A burning high mountain.'],
  [['Periplus', 'A sailor’s record of a coastal voyage.'], ['Eruption', 'The outburst of lava, ash and gas from a volcano.']],
  [
    { q: 'Give one strength and one weakness of the Periplus of Hanno as a historical source.', steps: ['Strength: it may be the **oldest written record** mentioning the Cameroon coast.', 'Weakness: it is **very short**, survives only in a **Greek translation**, and its places are **hard to identify**.', 'Historians must **compare** it with geography and other evidence.'] },
  ]),

  // ---------- 23. Trans-Saharan trade ----------
  L('hi-transsaharan-1', 'hi-f1-saharan', '23.1', 'Routes, caravans and towns of the trans-Saharan trade', 12, ['Africa', 'Trade'], [
    'The **trans-Saharan trade** linked **North Africa** with the lands south of the Sahara (the "Sudan", the land of the black people, in Arabic). It grew greatly after the **camel** came into wide use in the Sahara (from about the third and fourth centuries AD): camels carry heavy loads and can go many days without water.',
    'Traders travelled in **caravans** of hundreds or thousands of camels, guided by desert **Berbers** such as the **Tuareg**, from **oasis** to oasis. Main routes: from Morocco through **Sijilmasa** and the salt mines of **Taghaza** to **Timbuktu** and the Niger; from Tunisia and Libya to **Gao** and the Hausa cities such as **Kano**; and an eastern route from **Tripoli** through the **Fezzan** to **Kanem** and the **Lake Chad** region, which linked the far north of present-day Cameroon to the trade.',
    'Great trading towns grew at the edges of the desert, where goods changed hands: Timbuktu, Gao, Kano, Agadez and the towns of Kanem-Bornu.',
  ], 'hist1-trans-saharan', 'Follow a caravan: North Africa, oasis, salt mines, Timbuktu or Lake Chad.',
  ['An oasis is:', ['a place in the desert with water and trees', 'a sea port', 'a mountain', 'a salt mine'], 'Caravans rested there.'],
  [['Caravan', 'A group of traders travelling together, often with camels.'], ['Oasis', 'A fertile place with water in a desert.'], ['Berbers', 'The native peoples of North Africa and the Sahara.']],
  [
    { q: 'How was the Lake Chad region linked to the trans-Saharan trade?', steps: ['An **eastern route** ran from **Tripoli** through the **Fezzan** desert.', 'It reached **Kanem** and the shores of **Lake Chad**.', 'So peoples of the **far north of Cameroon** were connected to North Africa through trade.'] },
  ]),

  L('hi-goldsalt-1', 'hi-f1-saharan', '23.2', 'Gold, salt and the effects of the trade', 12, ['Africa', 'Trade'], [
    '**Goods from the north**: **salt** (cut in slabs from mines such as Taghaza), cloth, copper, glass beads, horses, books, dates and later weapons. **Goods from the south**: **gold** (from Bambuk, Bure and later the Akan forests), ivory, kola nuts, leather, cotton cloth and, sadly, **slaves**. Salt was vital in hot lands to keep people and animals healthy and to preserve food, so it was sometimes worth its weight in gold.',
    '**Effects of the trade**:\n- the rise of great **empires** that controlled and taxed the trade: **Ghana**, **Mali**, **Songhai** and **Kanem-Bornu**\n- the growth of **cities** and markets\n- the spread of **Islam**, Arabic writing and learning (Timbuktu became a famous centre of scholarship)\n- cultural exchange in clothing, architecture and food\n- the **trans-Saharan slave trade**, which caused suffering for centuries.',
  ], 'hist1-saharan-effects', 'Salt down, gold up, and with them Islam, cities and empires.',
  ['Why was salt so valuable in West Africa?', ['people and animals needed it in the heat, and it preserved food', 'it was used to make paper', 'it was used as fuel', 'it was used to build houses'], 'A necessity of life.'],
  [['Empire', 'A large state that rules over many peoples.'], ['Kola nut', 'A nut chewed as a stimulant and given as a sign of friendship.']],
  [
    { q: 'Explain how the trans-Saharan trade helped the rise of empires.', steps: ['Rulers **taxed** the goods passing through their lands.', 'The wealth paid for **armies** and administration.', 'Control of trade towns and gold fields made states such as **Mali** and **Kanem-Bornu** powerful.'] },
  ]),

  // ---------- 24. Coastal trade ----------
  L('hi-barter-1', 'hi-f1-coast', '24.1', 'Barter and trade among the coastal peoples', 12, ['Cameroon', 'Trade'], [
    'Long before the Europeans came, the peoples of the Cameroon coast and its hinterland traded with each other. **Coastal peoples** (fishing peoples such as the Duala, Bakweri, Malimba, Batanga and others along the estuaries) produced **fish** (fresh, dried or smoked), **salt** made from sea water, canoes and shells. **Hinterland peoples** of the forest and the highlands produced **food crops** (yams, plantains, cocoyams), palm oil, **iron tools**, pottery, ivory, kola and other forest products.',
    'Most exchanges were by **barter**: goods exchanged directly for other goods ("a basket of smoked fish for a bundle of plantains"). Barter needs a **double coincidence of wants**: each side must want what the other offers. Over time, some goods were used as **money**: salt, iron bars, cloth, beads and cowrie shells. Markets met on fixed days, and **rivers** (the Wouri, Mungo, Sanaga and Dibamba) served as routes for canoes.',
  ], 'hist1-coastal-trade', 'Barter works only when each side wants what the other has.',
  ['The "double coincidence of wants" means that in barter:', ['each side must want what the other offers', 'goods must be doubled', 'two markets are needed', 'money is used'], 'A difficulty of barter.'],
  [['Barter', 'Exchanging goods directly for other goods.'], ['Hinterland', 'The land behind a coast or river.'], ['Commodity money', 'Goods such as salt or iron bars used as money.']],
  [
    { q: 'Role-play: write a short barter exchange between a coastal fisher and a farmer from the hinterland.', steps: ['Fisher: "**I have three smoked fish. Do you have plantains?**"', 'Farmer: "**Yes. I will give you one bunch of plantains for your three fish.**"', 'Fisher: "**Add a little palm oil and we agree.**" Both get what they need: a **double coincidence of wants**.'] },
  ]),

  L('hi-coastal-groups-1', 'hi-f1-coast', '24.2', 'Middlemen and the first European sailors', 12, ['Cameroon', 'Trade'], [
    'Groups who lived at key points of the rivers and the coast became **middlemen**: they bought goods from the hinterland and sold them to other peoples, keeping a profit and controlling who could trade. Over time, the **Duala** of the Wouri estuary became famous middlemen; later they used this position in trade with Europeans.',
    'The first Europeans on the coast were the **Portuguese**. Around **1472**, the navigator **Fernão do Pó** (Fernando Po) reached the island that later bore his name (today Bioko). Portuguese sailors entering the Wouri estuary saw great numbers of prawns and named it **Rio dos Camarões**, "**river of prawns**", from which the name **Cameroon** comes.',
    'Pre-colonial coastal trade shows that the peoples of Cameroon had their own trading networks, markets and forms of money before contact with Europe.',
  ], 'hist1-coast-to-europe', 'Middlemen stand between producers and buyers, and profit from both.',
  ['The name Cameroon comes from the Portuguese "Rio dos Camarões", meaning:', ['river of prawns', 'river of gold', 'land of fire', 'mountain of kings'], 'Named about 1472.'],
  [['Middleman', 'A trader who buys from producers and sells to others for profit.'], ['Estuary', 'The mouth of a river where it meets the sea.']],
  [
    { q: 'Why did the position of the Duala on the Wouri estuary help them become middlemen?', steps: ['The estuary was where **river routes from the hinterland met the sea**.', 'Goods had to **pass through their area**.', 'They could **buy, resell and control** trade between the interior and outsiders.'] },
  ]),

  // ---------- 25. Traditional African Religion ----------
  L('hi-tar-beliefs-1', 'hi-f1-tar', '25.1', 'The beliefs of Traditional African Religion', 12, ['Cameroon', 'Religion'], [
    '**Traditional African Religion** (TAR) is the religion practised by the peoples of Africa before Christianity and Islam, and still alive today. Its main beliefs:\n- one **Supreme Being**, the **creator** of the world, known by many names in Cameroon’s languages (for example **Zambe** among the Beti and **Loba** among the Duala), usually seen as far above daily life\n- **lesser spirits** and divinities linked to nature: water, forests, hills, rivers and the earth\n- the **ancestors**, the "living dead", who watch over their families, punish wrongdoing and link the living to the spirit world; in many Grassfields societies the **skulls** of ancestors are kept and honoured\n- **mystical forces**, used for good (healing, protection) or evil (witchcraft, which is condemned).',
    'There is no single holy book: beliefs are passed on through **oral tradition**, rituals, songs, proverbs and myths.',
  ], 'hist1-tar', 'Supreme Being above, spirits around, ancestors close to the family.',
  ['In Traditional African Religion, the ancestors are believed to:', ['watch over the family and link it to the spirit world', 'have disappeared completely', 'be foreign gods', 'live in the sea only'], 'The living dead.'],
  [['Supreme Being', 'The one creator God above all spirits.'], ['Ancestors', 'Dead members of the family who are honoured and consulted.'], ['Divinity', 'A god or spirit.']],
  [
    { q: 'Explain the place of the ancestors in Traditional African Religion.', steps: ['They are dead members of the family who are believed to **live on as spirits**.', 'They **protect** the family and **punish** those who break customs.', 'They are **honoured** with libations and offerings and act as **intermediaries** with God.'] },
  ]),

  L('hi-tar-values-1', 'hi-f1-tar', '25.2', 'Sacred places, specialists, rites and values', 12, ['Cameroon', 'Religion'], [
    '**Sacred places**: shrines, **sacred forests**, rivers, rocks and hills where rituals are held and which are protected (sacred forests have preserved many trees and animals). **Specialists**: priests and priestesses, **diviners** (who discover hidden causes and the will of the spirits), **traditional healers** (who use herbs and plants) and, in kingdoms, the **Fon** or chief, who also has religious duties.',
    '**Rites and festivals**: **rites of passage** mark birth and naming, initiation into adulthood, marriage and death (funerals and the later "cry-die" celebrations); **libations** (pouring drinks for the ancestors); sacrifices; harvest festivals. The **Ngondo** festival of the Sawa (coastal) peoples, held on the Wouri at Douala, honours the ancestors and the water spirits (**Miengu**).',
    '**Values** taught by TAR: respect for elders and ancestors, **solidarity** and hospitality, honesty, respect for **nature** and sacred places, the importance of the community over the individual.',
  ], 'hist1-tar-values', 'Rites of passage mark the big steps of life: birth, adulthood, marriage, death.',
  ['Pouring drink on the ground for the ancestors is called a:', ['libation', 'pilgrimage', 'sermon', 'baptism'], 'A common ritual.'],
  [['Rite of passage', 'A ceremony marking a change in a person’s life.'], ['Libation', 'Pouring a drink as an offering to spirits or ancestors.'], ['Diviner', 'A specialist who seeks hidden knowledge from the spirits.']],
  [
    { q: 'Give two ways in which Traditional African Religion protected the environment.', steps: ['**Sacred forests** could not be cut, so trees and animals were preserved.', 'Some **rivers, animals and plants** were respected as sacred and not destroyed.', 'Respect for **nature** was taught as a value.'] },
  ]),

  // ---------- 26. Islam ----------
  L('hi-islam-origin-1', 'hi-f1-islam', '26.1', 'The foundation of Islam', 12, ['Religion', 'World history'], [
    '**Islam** ("submission to God") is a monotheistic religion founded in **Arabia** in the seventh century AD. Its Prophet, **Muhammad**, was born in about **AD 570** in **Mecca**, a trading city. In about **610**, while praying in a cave near Mecca, he received the first revelation from God (Allah) through the angel Jibril (Gabriel). He preached one God and justice for the poor, but many Meccans opposed him.',
    'In **622** Muhammad and his followers moved to **Medina**: this migration, the **Hijra** (Hegira), marks **year 1 of the Islamic calendar**. In 630 he returned to Mecca, which became the holy city of Islam, and he died in **632**. His successors, the **caliphs**, led the Muslim community.',
    'The holy book is the **Qur’an**. The **Five Pillars of Islam** are: the **Shahada** (declaration of faith: there is no god but God, and Muhammad is his messenger); **Salat** (prayer five times a day, facing Mecca); **Zakat** (giving alms to the poor); **Sawm** (fasting during the month of **Ramadan**); and the **Hajj** (pilgrimage to Mecca at least once, for those who can). Muslims pray in a **mosque**.',
  ], 'hist1-islam', 'Mecca (570), revelation (610), Hijra (622), death (632).',
  ['Year 1 of the Islamic calendar is the year of the:', ['Hijra, AD 622', 'birth of Muhammad', 'first revelation', 'Hajj'], 'The move to Medina.'],
  [['Hijra', 'Muhammad’s migration from Mecca to Medina in 622.'], ['Caliph', 'A successor of Muhammad as leader of the Muslim community.'], ['Five Pillars', 'The five basic duties of a Muslim.']],
  [
    { q: 'List the Five Pillars of Islam with one sentence each.', steps: ['**Shahada**: declaring faith in one God and his Prophet.', '**Salat**: praying five times a day.', '**Zakat**: giving alms to the poor.', '**Sawm**: fasting in Ramadan.', '**Hajj**: making the pilgrimage to Mecca if possible.'] },
  ]),

  L('hi-islam-africa-1', 'hi-f1-islam', '26.2', 'The spread of Islam in Africa and its contributions', 14, ['Religion', 'Africa', 'Cameroon'], [
    '**Spread**: Arab armies took **Egypt** between 639 and 642 and **North Africa** by about 700; many Berbers became Muslims. From North Africa, Islam crossed the Sahara mainly **peacefully**, carried by **traders** and **scholars** along the trans-Saharan routes. Rulers of **Ghana**, **Mali** (Mansa Musa’s famous pilgrimage to Mecca in 1324) and **Songhai** adopted Islam. Around the **Lake Chad** region, a ruler of **Kanem** converted in the eleventh century, and Kanem-Bornu became a Muslim state whose influence reached the far north of present-day Cameroon.',
    'In the nineteenth century, the **Fulani jihad** led by **Usman dan Fodio** (from 1804) spread Islam further; his follower **Modibo Adama** conquered the Adamawa region (from about 1809) and founded **lamidats** ruled by Lamibe in northern Cameroon, such as those of Ngaoundéré, Garoua and Maroua.',
    '**Contributions of Islam**: Arabic **writing** and literacy in Africa (the manuscripts of Timbuktu); schools and universities (al-Qarawiyyin in Fez, founded by **Fatima al-Fihri** in 859); **science** (algebra from al-Khwarizmi, astronomy, medicine with Ibn Sina); **architecture** (mosques such as the Djinguereber in Timbuktu and the great mosques of northern Cameroon); trade networks; and values of charity, prayer and brotherhood.',
  ], 'hist1-islam-africa', 'North Africa by armies, the Sahara by traders, northern Cameroon by Kanem and the jihad.',
  ['Islam spread across the Sahara mainly through:', ['traders and scholars', 'Roman armies', 'Portuguese ships', 'the Bantu migration'], 'Peacefully, through trade.'],
  [['Jihad', 'A struggle in the cause of God; here, a religious war to spread and reform Islam.'], ['Lamidat', 'A Fulani state in northern Cameroon ruled by a Lamido.']],
  [
    { q: 'Trace how Islam reached northern Cameroon.', steps: ['From **Arabia** to **Egypt and North Africa** in the seventh century.', 'Across the **Sahara with traders** to Kanem; a **Kanem ruler converted** in the eleventh century, and Kanem-Bornu spread its influence south.', 'In the nineteenth century, the **Fulani jihad** of Usman dan Fodio and **Modibo Adama** founded the lamidats of northern Cameroon.'] },
  ]),

  // ---------- 27. Revision: ancient worlds ----------
  L('hi-review-ancient-1', 'hi-f1-review-ancient', '27.1', 'Revision of the ancient civilisations', 14, ['Revision'], [
    'Key points to revise:\n- **early man**: Africa the cradle of mankind (Toumaï, Lucy); Palaeolithic hunting and gathering; the Neolithic Revolution (farming, villages, pottery)\n- **Egypt**: the Nile; unification (about 3100 BC); pharaohs and social classes; religion and mummies; hieroglyphics, the calendar, pyramids; decline and foreign rule (to 30 BC)\n- **Kush and Axum**: Meroe and iron, the Kandake; Axum, coins, stelae and Christianity under Ezana\n- **Greece**: city-states, Athens and Sparta, democracy, philosophers, the Olympic Games and Greek science\n- **Rome**: founding (753 BC), Republic (509 BC), Empire (27 BC), Pax Romana, engineering and law, fall (AD 476)\n- **China**: dynasties, Confucius, the Great Wall, the Silk Road and the four great inventions.',
    'Method: build a **timeline** of the main dates; make a **comparison table** (government, religion, achievements) for Egypt, Greece, Rome and China; practise calculating periods between BC and AD dates.',
  ], 'hist1-ancient-map', 'One timeline and one comparison table revise the whole of the ancient world.',
  ['Which civilisation built the Parthenon?', ['Greece (Athens)', 'Egypt', 'Rome', 'China'], 'On the Acropolis.'],
  [['Comparison table', 'A table that compares several things under the same headings.']],
  [
    { q: 'Compare Egypt and Rome under: type of ruler, a great building, a lasting legacy.', steps: ['Ruler: Egypt, the **pharaoh** (a god-king); Rome, **consuls** then **emperors**.', 'Building: Egypt, the **pyramids**; Rome, the **Colosseum**.', 'Legacy: Egypt, the **365-day calendar**; Rome, **law and Latin**.'] },
  ]),

  L('hi-review-religions-1', 'hi-f1-review-ancient', '27.2', 'Revision of the religions studied this year', 12, ['Revision', 'Religion'], [
    'This year you studied several religions:\n- **polytheistic** religions of Egypt, Greece and Rome (many gods)\n- **Traditional African Religion** (a Supreme Being, spirits and ancestors)\n- three **monotheistic** religions, which all honour **Abraham**:\n  - **Judaism**: Moses and the Ten Commandments; holy book: the **Torah**; place of worship: the **synagogue**; holy city: **Jerusalem**\n  - **Christianity**: Jesus, the Messiah; holy book: the **Bible**; place of worship: the **church**; spread in the Roman Empire and early to Egypt, North Africa and Axum\n  - **Islam**: the Prophet Muhammad; holy book: the **Qur’an**; place of worship: the **mosque**; holy city: **Mecca**; the Five Pillars.',
    'In Cameroon, people of many religions live together. **Religious tolerance** means respecting other people’s beliefs, places of worship and festivals, and rejecting hatred and discrimination because of religion.',
  ], 'hist1-religions-compare', 'Three monotheistic faiths, three books: Torah, Bible, Qur’an.',
  ['Which holy book belongs to Islam?', ['the Qur’an', 'the Torah', 'the Book of the Dead', 'the Iliad'], 'Revealed to Muhammad.'],
  [['Religious tolerance', 'Respect for the beliefs and practices of other religions.']],
  [
    { q: 'Compare Judaism, Christianity and Islam under: founder or prophet, holy book, place of worship.', steps: ['Judaism: **Abraham and Moses**; **Torah**; **synagogue**.', 'Christianity: **Jesus**; **Bible**; **church**.', 'Islam: **Muhammad**; **Qur’an**; **mosque**.'] },
  ]),

  // ---------- 28. Revision: early Cameroon and examination ----------
  L('hi-review-cameroon-1', 'hi-f1-review-cameroon', '28.1', 'Revision of early Cameroon', 12, ['Revision', 'Cameroon'], [
    'Key points:\n- **the land**: "Africa in miniature": coast and mangroves, forest, western highlands, Adamawa, savanna and Sahel; ways of life shaped by each zone\n- **the Neolithic in Cameroon**: Shum Laka (near Bamenda) and Obobogo (near Yaoundé)\n- **the forest peoples**: the Baka, Bakola-Bagyeli and Bedzan, the earliest inhabitants; hunting and gathering; their rights today\n- **the Bantu migration**: homeland near the Cameroon-Nigeria border; causes; routes; effects (farming, iron, languages)\n- **Hanno**: about 500 BC; the "Chariot of the Gods", probably Mount Cameroon\n- **trade**: the trans-Saharan route to Lake Chad; coastal barter; middlemen; the Portuguese and "Rio dos Camarões" (about 1472)\n- **religion**: Traditional African Religion and the arrival of Islam in the north.',
  ], 'hist1-cameroon-review', 'Tell the story of early Cameroon in order: land, first peoples, migrants, contacts.',
  ['Obobogo, an early village site with pottery about 3 000 years old, is near:', ['Yaoundé', 'Garoua', 'Limbe', 'Kousseri'], 'In the Centre region.'],
  [['Mind map', 'A diagram that links ideas around a central topic.']],
  [
    { q: 'Make a mind map of early Cameroon with four branches.', steps: ['Centre: **Early Cameroon**.', 'Branch 1: **the land** (zones, rivers, Mount Cameroon).', 'Branch 2: **the peoples** (forest peoples, Bantu).', 'Branch 3: **contacts and trade** (Hanno, Sahara, coast, Portuguese).', 'Branch 4: **religion** (TAR, Islam).'] },
  ]),

  L('hi-exam-1', 'hi-f1-review-cameroon', '28.2', 'Answering history questions in the examination', 12, ['Revision', 'Examination'], [
    'History papers for Form 1 contain several kinds of questions:\n- **multiple-choice questions** (MCQs): read the stem and **all** the options; cross out those that are clearly wrong; choose the best one\n- **short-answer and structural questions**: answer exactly what is asked (define, list, explain, compare); give one idea per point; use the key words of the course\n- **timeline questions**: place dates in order, remembering that BC dates count down; calculate periods correctly\n- **map work**: give every map a **title**, a **key** and a **north arrow**; label neatly\n- **source questions**: say what the source is, who made it and when, what it tells us, and how reliable it is.',
    'Tips: manage your time according to the marks; write in full sentences; when asked to "explain", give a reason ("because…"); check dates and spellings of names at the end.',
  ], 'hist-mcq-steps', 'Read every option before choosing an answer.',
  ['When a question asks you to "explain", you should:', ['give reasons, with "because"', 'only list words', 'draw a picture', 'copy the question'], 'Explanations give causes or reasons.'],
  [['Structural question', 'A short, structured question in several parts.'], ['Key', 'The box on a map that explains its symbols.']],
  [
    { q: 'Answer the structural question: (a) Define the Neolithic Revolution. (b) Give two of its consequences.', steps: ['(a) The **change from hunting and gathering to farming and herding**, which began about 10 000 years ago.', '(b) **Settled villages** (sedentarisation); a **food surplus** that let the population grow (also pottery and new crafts).'] },
  ]),
];
