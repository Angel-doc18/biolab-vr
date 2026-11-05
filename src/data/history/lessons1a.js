// History lessons for Form 1 (first part): the study of history, early man,
// the Neolithic, ancient Egypt, Kush and Axum, Greece and the beginnings of
// Rome. Original text written for this app. **double asterisks** mark key
// terms; `examples` are worked examples. Dates of the distant past are
// approximate, as in standard histories.

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

export const LESSONS_1A = [
  // ---------- 1. Introduction to history ----------
  L('hi-define-1', 'hi-f1-history', '1.1', 'What history is and why we study it', 12, ['The study of history'], [
    '**History** is the study of the human past: what people did, thought and made, and how societies changed over time. It is based on **evidence** (sources), not on guesses. The person who studies history is a **historian**.',
    'Key words: an **event** is something important that happened (the unification of Egypt, the arrival of the Portuguese); **chronology** is the order of events in time; a **civilisation** is an advanced way of life of a people, with organised government, cities, writing, religion, arts and techniques; a **relic** (or artefact) is an object left from the past (a pot, a tool, a mask).',
    'Why study history? It helps us to know our **identity** (where our family and people come from), to understand the **present** (why things are as they are), to learn **lessons** from past successes and mistakes, to respect other peoples and cultures, and to think critically about evidence. Africa has a long and rich history, from the first humans to great kingdoms.',
  ], 'hist1-why-history', 'History asks: what happened, when, why, and how do we know?',
  ['Which is a relic?', ['an old clay pot found in the ground', 'a new phone', 'a weather forecast', 'a song on the radio today'], 'An object left from the past.'],
  [['History', 'The study of the human past based on evidence.'], ['Chronology', 'The order of events in time.'], ['Civilisation', 'An advanced way of life with government, towns, writing, religion and arts.']],
  [
    { q: 'Give three reasons why a Form 1 student should study history.', steps: ['To know **who we are**: the origins of our family and people.', 'To understand **the present**: for example why Cameroon has two official languages.', 'To **learn lessons** from the past and respect other cultures.'] },
  ]),

  L('hi-timeline-1', 'hi-f1-history', '1.2', 'Measuring time: BC and AD, centuries and the periods of history', 14, ['The study of history', 'Timelines'], [
    'Many countries count years from the traditional date of the birth of Jesus. Years **after** it are **AD** (Anno Domini, "in the year of the Lord") or **CE** (Common Era). Years **before** it are **BC** ("Before Christ") or **BCE** (Before the Common Era). BC years count **backwards**: 500 BC is earlier than 100 BC. There is **no year 0**: 1 BC is followed directly by AD 1.',
    'Units of time: a **decade** = 10 years; a **century** = 100 years; a **millennium** = 1 000 years. The 1st century AD is AD 1 to 100; the 19th century is 1801 to 1900; the 21st century is 2001 to 2100. Quick rule: for AD years, take the hundreds and add one (1884 → 18 + 1 = 19th century). In BC, the 5th century BC is 500 to 401 BC.',
    'Calculating: between two AD dates or two BC dates, **subtract** (1961 − 1884 = 77 years; 753 − 509 = 244 years). Between a BC date and an AD date, **add** and subtract 1, because there is no year 0 (from 50 BC to AD 50 = 50 + 50 − 1 = 99 years). Historians divide the past into **periods**: prehistory (before writing), ancient history, the Middle Ages, and modern and contemporary times. In Africa, prehistory is known through archaeology and oral tradition, and history continues through oral and written sources.',
  ], 'hist1-timeline', 'BC counts down to 1 BC, AD counts up from AD 1: there is no year 0.',
  ['In which century is the year 1472?', ['15th century', '14th century', '16th century', '47th century'], '14 + 1 = 15.'],
  [['BC / BCE', 'Years before the traditional birth of Jesus, counted backwards.'], ['AD / CE', 'Years after the traditional birth of Jesus.'], ['Century', 'A period of 100 years.'], ['Prehistory', 'The period before writing.']],
  [
    { q: 'How many years passed between the founding of Rome (753 BC) and the fall of the Western Roman Empire (AD 476)?', steps: ['One date is BC and the other AD, so **add** them: 753 + 476 = 1 229.', 'Subtract 1 because there is no year 0: 1 229 − 1 = **1 228 years**.'] },
  ]),

  // ---------- 2. Sources ----------
  L('hi-sources-1', 'hi-f1-sources', '2.1', 'Kinds of historical sources', 12, ['The study of history', 'Sources'], [
    'A **source** is anything that gives information about the past. **Primary sources** come from the time being studied: letters, diaries, treaties, photographs, tools, buildings, eyewitness accounts. **Secondary sources** were produced later by people who studied primary sources: textbooks, history books, documentaries.',
    'Kinds of sources:\n- **written**: inscriptions, papyrus scrolls, books, letters, newspapers, archives\n- **oral**: tales, songs, praise poems, genealogies and the memories of elders\n- **archaeological and material**: bones, tools, pots, coins, ruins, rock paintings, studied by **archaeologists** who dig carefully at sites\n- **visual** and **sound** sources: paintings, photographs, films, recordings\n- **linguistic** sources: the study of languages shows how peoples are related and how they moved (for example the Bantu languages).',
    'Places that keep sources: **museums**, **archives**, libraries and palaces (for example the royal palace museum at Foumban).',
  ], 'hist1-sources', 'Ask of any source: was it made at the time (primary) or later (secondary)?',
  ['A photograph of the first day of independence taken on that day is a:', ['primary source', 'secondary source', 'legend', 'myth'], 'Made at the time.'],
  [['Primary source', 'A source made at the time being studied.'], ['Secondary source', 'A source made later about the past.'], ['Archaeologist', 'A person who studies the past by digging up and examining remains.']],
  [
    { q: 'Classify these sources: (a) a stone axe found at a Neolithic site (b) your history textbook (c) a song about a chief sung for generations.', steps: ['(a) **primary, archaeological** (made by Neolithic people)', '(b) **secondary, written** (written recently)', '(c) **oral tradition** (primary for the community’s memory, though it may change over time)'] },
  ]),

  L('hi-oraltradition-1', 'hi-f1-sources', '2.2', 'Oral tradition, the family tree and judging sources', 12, ['The study of history', 'Sources'], [
    '**Oral tradition** is knowledge of the past passed on by word of mouth: stories of migrations and founders, lists of chiefs, praise songs, proverbs and genealogies. In many African societies, specialists such as **griots**, court historians and elders kept this memory. It is very important for African history because many societies did not use writing.',
    'A **family (genealogical) tree** shows the generations of a family: grandparents, parents, children and their links. Building one is a small historical enquiry: you ask elders questions, record their answers and check them with other relatives.',
    '**Judging sources**: every source must be examined. Ask: Who made it? When? Why? Was the author there? Do other sources agree? Oral tradition can change over time (details are forgotten or added, and some stories praise one family), and written sources can be one-sided too. Historians **compare** several kinds of sources (**cross-checking**) to get closer to the truth.',
  ], 'hist1-oral-check', 'One source is a clue; several sources that agree are evidence.',
  ['Why do historians compare oral tradition with archaeology?', ['to check details that may have changed over time', 'because oral tradition is always false', 'to avoid listening to elders', 'because archaeology is never useful'], 'Cross-checking.'],
  [['Oral tradition', 'Knowledge of the past passed on by word of mouth.'], ['Genealogy', 'The record of a family’s ancestors and descendants.'], ['Cross-checking', 'Comparing several sources to test their reliability.']],
  [
    { q: 'Plan three questions to ask your grandparent for your family tree, and say how you would check the answers.', steps: ['"**What were the names of your parents and grandparents?**"', '"**Where did our family live before, and why did it move?**"', '"**How many brothers and sisters did you have?**"', 'Check: compare the answers with **another relative**, and with any **written records** such as birth certificates.'] },
  ]),

  // ---------- 3. Early man ----------
  L('hi-cradle-1', 'hi-f1-earlyman', '3.1', 'Africa, the cradle of mankind', 14, ['Early man', 'Africa'], [
    'Scientists who study human origins (palaeontologists and archaeologists) have found the oldest fossils of human ancestors, the **hominids**, in Africa. That is why Africa is called **the cradle of mankind**. Important finds include **Toumaï** (*Sahelanthropus tchadensis*), about **seven million years** old, found in **Chad** in 2001; **Lucy** (*Australopithecus afarensis*), about **3.2 million years** old, found at Hadar in **Ethiopia** in 1974; and fossils and tools at **Olduvai Gorge** in Tanzania.',
    'Main stages of human evolution: **Australopithecus** (walked upright, small brain); **Homo habilis**, "handy man" (about two million years ago; made the first simple stone tools); **Homo erectus**, "upright man" (larger brain, better tools, used fire, and was the first to spread out of Africa into Asia and Europe); **Homo sapiens**, "wise man", modern humans (in Africa about 300 000 years ago, then across the world).',
    'Every culture also has **myths of creation** that tell how the first people came into the world. They are important cultural sources, but scientific evidence for human origins comes from fossils, tools and genetics.',
  ], 'hist1-early-man', 'Each stage on the chart: a bigger brain and better tools.',
  ['The first hominids to spread out of Africa were:', ['Homo erectus', 'Australopithecus', 'Homo habilis only', 'the Romans'], 'About 1.8 million years ago.'],
  [['Hominid', 'A member of the human family, including our extinct ancestors.'], ['Fossil', 'The preserved remains or traces of a living thing from long ago.'], ['Homo sapiens', 'Modern human beings.']],
  [
    { q: 'Give two pieces of evidence that Africa is the cradle of mankind.', steps: ['**Toumaï**, about seven million years old, found in **Chad**.', '**Lucy**, about 3.2 million years old, found in **Ethiopia**; also the tools and fossils of **Olduvai Gorge** in Tanzania.', 'The oldest fossils and tools of every early stage are found in **Africa**.'] },
  ]),

  L('hi-paleolithic-1', 'hi-f1-earlyman', '3.2', 'The Old Stone Age: tools, food, shelter and fire', 12, ['Early man'], [
    'The **Palaeolithic** or **Old Stone Age** is the longest period of human history, from the first stone tools (more than two million years ago) to about 10 000 years ago. People made tools by striking stones to produce sharp edges: **pebble tools**, then **hand axes**, scrapers, spear points and blades. They also used wood, bone and skins.',
    'Way of life: they were **hunters and gatherers**, collecting fruits, roots, honey and insects, fishing and hunting animals. They were **nomads**, moving in small groups (bands) after food and water, and sheltered in **caves**, rock shelters and huts of branches.',
    'The control of **fire**, probably by *Homo erectus* about one million years ago, changed life: fire gave warmth and light, cooked food (making it easier to eat), kept wild animals away and allowed people to gather and talk at night. Late in the period, people painted and engraved animals on rock walls and buried their dead, signs of art and belief.',
  ], 'hist1-stone-tools', 'Old Stone Age: chipped stone, hunting, gathering and moving.',
  ['Palaeolithic people sheltered mainly in:', ['caves, rock shelters and huts of branches', 'brick houses', 'castles', 'apartment blocks'], 'They moved often.'],
  [['Palaeolithic', 'The Old Stone Age, when people lived by hunting and gathering.'], ['Hunter-gatherer', 'A person who lives by hunting animals and gathering wild food.'], ['Nomad', 'A person who moves from place to place.']],
  [
    { q: 'Explain three ways in which fire improved the life of early man.', steps: ['**Cooking**: food became safer and easier to eat.', '**Protection**: fire kept wild animals away at night.', '**Warmth and light**: people could live in colder places and meet in the evening.'] },
  ]),

  // ---------- 4. Neolithic ----------
  L('hi-neolithic-1', 'hi-f1-neolithic', '4.1', 'The Neolithic Revolution', 12, ['Early man', 'Neolithic'], [
    'The **Neolithic** or **New Stone Age** began about 10 000 years ago in the Middle East and later in Africa. Its great change, the **Neolithic Revolution**, was the beginning of **farming** (growing crops such as wheat, barley, sorghum, millet and yams) and **herding** (the **domestication** of animals such as goats, sheep and cattle).',
    'Consequences:\n- **sedentarisation**: people settled in permanent **villages** near their fields\n- **food surplus**: more food than needed, which allowed the population to grow\n- new **tools and crafts**: polished stone axes and hoes, grinding stones, **pottery** for storing and cooking, weaving\n- **division of labour**: some people became craftsmen, traders or leaders\n- **property** and **social differences**, and later chiefdoms and states.',
    'The Neolithic prepared the way for the first civilisations, such as Egypt, which grew where farming produced large surpluses.',
  ], 'hist1-neolithic', 'Farming changed everything: food, homes, work and society.',
  ['A food surplus means:', ['more food than people need at once', 'no food at all', 'only meat', 'imported food'], 'Surplus allowed growth.'],
  [['Neolithic Revolution', 'The change from hunting and gathering to farming and herding.'], ['Domestication', 'Taming plants and animals for human use.'], ['Sedentarisation', 'Settling permanently in one place.']],
  [
    { q: 'Show how farming led to the growth of villages.', steps: ['Farmers had to **stay near their fields** to plant, weed and harvest.', 'They built **permanent houses** close together for safety and cooperation.', 'A **food surplus** fed more people, so villages **grew**.'] },
  ]),

  L('hi-neolithic-cmr-1', 'hi-f1-neolithic', '4.2', 'Neolithic sites in Africa and in Cameroon', 12, ['Neolithic', 'Cameroon'], [
    'In Africa, **rock paintings** in the Sahara (for example in the Tassili n’Ajjer mountains of Algeria) show people herding cattle when the Sahara was green, between about 9 000 and 4 000 years ago. As the Sahara dried, people moved towards the Nile valley, the Lake Chad basin and the savanna. Farming developed in the **Nile valley**, in the savanna of West Africa (sorghum, millet, rice) and on the edges of the forest (yams, oil palm).',
    'In **Cameroon**, archaeologists have studied:\n- **Shum Laka**, a rock shelter near **Bamenda** in the Grassfields, where people lived over many thousands of years; burials there are about 8 000 and 3 000 years old\n- **Obobogo**, near **Yaoundé**, where pottery and polished stone tools about 3 000 years old show early village life\n- many other sites with pottery, grinding stones and stone axes, and later furnaces of the **Iron Age**.',
    'These finds show that the peoples of Cameroon took part in the great changes of the Neolithic.',
  ], 'hist1-cmr-sites', 'Pottery and polished axes are the signatures of Neolithic villages.',
  ['Shum Laka is a famous archaeological site in the:', ['Grassfields near Bamenda', 'Sahel near Lake Chad', 'Littoral near Douala', 'East near Bertoua'], 'A rock shelter.'],
  [['Rock art', 'Paintings and engravings made on rock surfaces in the past.'], ['Iron Age', 'The period when people made tools of iron.']],
  [
    { q: 'What do rock paintings of cattle in the Sahara tell historians?', steps: ['The Sahara was once **green** with grass and water.', 'People **herded cattle** there.', 'When it **dried**, people moved to wetter areas such as the Nile valley and the Lake Chad basin.'] },
  ]),

  // ---------- 5. Egypt and the Nile ----------
  L('hi-nile-1', 'hi-f1-egypt', '5.1', 'Egypt, the gift of the Nile', 12, ['Ancient Egypt', 'Africa'], [
    'Ancient Egypt grew in north-east Africa along the **Nile**, the longest river in Africa, which flows **north** from the highlands of East Africa and Ethiopia to the **Mediterranean Sea**. Around Egypt lie deserts, so life depended on the narrow green strip along the river. The Greek historian **Herodotus** called Egypt "**the gift of the Nile**".',
    'Each year the Nile **flooded** (from about June to September), covering the fields with rich black **silt**. When the waters went down, farmers planted wheat, barley, flax and vegetables. They used **basin irrigation** (fields surrounded by banks to hold water) and the **shaduf** (a bucket on a pole) to lift water. The river was also a highway for boats carrying people, stone and goods.',
    'Egypt had two lands: **Upper Egypt** in the south (the narrow valley, upstream) and **Lower Egypt** in the north (the **delta**, where the Nile divides into branches before reaching the sea). South of Egypt, rapids called **cataracts** blocked boats and marked the border with Kush.',
  ], 'hist1-nile', 'Upper Egypt is in the south because the Nile flows north.',
  ['Silt left by the flood was important because it:', ['made the soil fertile', 'blocked the river', 'was used as money', 'killed crops'], 'Fertile farmland.'],
  [['Delta', 'The flat land where a river divides into branches before entering the sea.'], ['Silt', 'Fine fertile soil carried and left by water.'], ['Cataract', 'A stretch of rapids in a river.']],
  [
    { q: 'Explain why Herodotus called Egypt "the gift of the Nile".', steps: ['Egypt is surrounded by **desert** with little rain.', 'The Nile’s **floods** gave water and fertile **silt** for farming.', 'The river was a **transport route**; without the Nile there would be no Egyptian civilisation.'] },
  ]),

  L('hi-unification-1', 'hi-f1-egypt', '5.2', 'The unification of Egypt and its great periods', 12, ['Ancient Egypt'], [
    'Before 3100 BC, Upper and Lower Egypt were separate kingdoms. Around **3100 BC**, **Narmer** (also called **Menes**), a king of Upper Egypt, conquered Lower Egypt and **united** the two lands. He wore the **double crown** (the white crown of Upper Egypt and the red crown of Lower Egypt) and founded the **first dynasty**, with its capital at **Memphis**.',
    'Historians divide Egyptian history into periods:\n- the **Old Kingdom** (about 2686 to 2181 BC): the age of the **pyramids** (the Great Pyramid of Khufu at Giza, about 2560 BC)\n- the **Middle Kingdom** (about 2055 to 1650 BC): order restored, trade and irrigation works\n- the **New Kingdom** (about 1550 to 1070 BC): Egypt’s greatest power and empire, with pharaohs such as Hatshepsut, Thutmose III, Akhenaten, Tutankhamun and Ramses II, and the capital at **Thebes**.\nBetween them were periods of weakness and division called **intermediate periods**.',
  ], 'hist1-egypt-periods', 'Old Kingdom: pyramids. Middle Kingdom: order. New Kingdom: empire.',
  ['The double crown showed that the pharaoh ruled:', ['both Upper and Lower Egypt', 'Egypt and Rome', 'Kush only', 'the sea'], 'The two lands united.'],
  [['Unification', 'Joining separate parts into one state.'], ['Dynasty', 'A series of rulers from the same family.']],
  [
    { q: 'How long ago was Egypt united, counting from 2026?', steps: ['Egypt was united in about **3100 BC**.', 'BC and AD dates: 3100 + 2026 = 5 126, minus 1 for the missing year 0 = **about 5 125 years ago**.', 'So Egypt is one of the **oldest states** in the world.'] },
  ]),

  // ---------- 6. Pharaohs and society ----------
  L('hi-pharaoh-1', 'hi-f1-pharaohs', '6.1', 'The pharaoh and the government of Egypt', 12, ['Ancient Egypt', 'Government'], [
    'The **pharaoh** was the absolute ruler of Egypt. Egyptians believed he was a **god on earth**, the son of the sun god Ra and the living Horus. He owned the land, made laws, commanded the army, directed great works and led the most important religious rituals. His duty was to keep **Maat**: order, justice and harmony.',
    '**Symbols of power**: the double crown; the **crook** (a shepherd’s staff: he guides his people) and the **flail** (he protects and punishes); the **false beard**; the **cobra** (uraeus) on the crown; the throne. The word pharaoh means "great house", the palace. Some women ruled as pharaoh, most famously **Hatshepsut**.',
    'Government: the **vizier**, the chief minister, ran the administration and justice; governors (**nomarchs**) ruled the provinces (nomes); **scribes** kept records of land, harvests and taxes; priests and generals served the king. Peasants paid **taxes** in grain and worked on royal projects. Power passed from father to son in **dynasties**.',
    'Many traditional rulers in Cameroon (Fons, Lamibe, chiefs) also have symbols of authority, such as thrones, staffs, caps, horns and sacred objects, which command respect.',
  ], 'hist1-pharaoh-power', 'Symbols of power show what a ruler claims to do: guide, protect, judge.',
  ['The vizier was:', ['the pharaoh’s chief minister', 'a god', 'a slave', 'a foreign king'], 'He ran the government.'],
  [['Pharaoh', 'The king of ancient Egypt, believed to be divine.'], ['Vizier', 'The chief minister of the pharaoh.'], ['Absolute ruler', 'A ruler with unlimited power.']],
  [
    { q: 'Explain the meaning of the crook and the flail held by the pharaoh.', steps: ['The **crook** is a shepherd’s staff: the pharaoh **guides and cares** for his people like a shepherd.', 'The **flail** was used to thresh grain or drive animals: he **protects and punishes**.', 'Together they show his **power and duty** as ruler.'] },
  ]),

  L('hi-society-egypt-1', 'hi-f1-pharaohs', '6.2', 'Egyptian society and daily life', 12, ['Ancient Egypt', 'Society'], [
    'Egyptian society was a **class society** shaped like a pyramid:\n- at the top, the **pharaoh** and the royal family\n- the **nobles**, high officials and the **priests**\n- the **scribes**, who could read and write\n- **soldiers**, **craftsmen** (stone masons, carpenters, potters, goldsmiths) and **traders**\n- the great mass of **peasants**, who farmed the land\n- at the bottom, **slaves**, often prisoners of war.',
    'Daily life: peasants worked in the fields according to the three seasons (flood, planting, harvest). During the flood, many worked on royal building projects. They paid **taxes** in grain, counted by scribes. Houses were of mud brick; bread and beer were the basic food. Children helped their parents; the sons of officials went to schools for scribes. Women could own property and run businesses, which was unusual in the ancient world.',
  ], 'hist1-egypt-pyramid', 'Read the social pyramid from top to bottom: fewer people, more power.',
  ['The largest group in Egyptian society was the:', ['peasants', 'priests', 'nobles', 'pharaohs'], 'The base of the pyramid.'],
  [['Class society', 'A society divided into ranked social groups.'], ['Social hierarchy', 'The ranking of groups from the most to the least powerful.']],
  [
    { q: 'Describe a year in the life of an Egyptian peasant.', steps: ['**Flood season**: the fields are under water; the peasant works on royal projects such as temples.', '**Planting season**: when the water goes down, they plough and sow in the silt.', '**Harvest season**: they reap the grain and give part as **tax**, recorded by a scribe.'] },
  ]),

  // ---------- 7. Egyptian religion ----------
  L('hi-gods-1', 'hi-f1-egypt-religion', '7.1', 'The gods of Egypt and the role of priests', 12, ['Ancient Egypt', 'Religion'], [
    'Egyptian religion was **polytheistic**: people worshipped many gods, often shown with animal heads. Main gods: **Ra** (or Re), the sun god and creator; **Amun**, king of the gods, later joined with Ra as Amun-Ra; **Osiris**, god of the dead and the afterlife; **Isis**, his wife, goddess of magic and motherhood; **Horus**, their son, the falcon god, protector of the pharaoh; **Anubis**, the jackal god of embalming; **Thoth**, god of writing and wisdom; **Hathor**, goddess of love and music.',
    'Gods lived in **temples** (for example Karnak and Luxor at Thebes). **Priests** served them: they washed, dressed and fed the god’s statue each day, performed festivals and rituals, and kept knowledge of writing, astronomy and medicine. They became very rich and powerful.',
    'Religion touched every part of daily life: people prayed to household gods, wore amulets for protection and celebrated festivals. For a short time the pharaoh **Akhenaten** (about 1350 BC) tried to make the sun disc **Aten** the only god, but after him the old gods returned.',
  ], 'hist1-egypt-gods', 'Learn each god with one job: Ra the sun, Osiris the dead, Anubis embalming.',
  ['The falcon god who protected the pharaoh was:', ['Horus', 'Anubis', 'Thoth', 'Zeus'], 'Son of Osiris and Isis.'],
  [['Polytheism', 'Belief in many gods.'], ['Temple', 'A building where a god is worshipped.'], ['Amulet', 'A small charm worn for protection.']],
  [
    { q: 'Give three duties of Egyptian priests.', steps: ['**Caring for the god’s statue** in the temple every day.', '**Leading rituals and festivals**.', '**Keeping knowledge**: writing, astronomy and medicine.'] },
  ]),

  L('hi-mummy-1', 'hi-f1-egypt-religion', '7.2', 'Life after death: mummies, tombs and pyramids', 14, ['Ancient Egypt', 'Religion'], [
    'Egyptians believed in **life after death**. The soul needed the body to survive in the afterlife, so the body was preserved by **mummification**, which took about **70 days**: (1) the body was washed; (2) the brain and most internal organs were removed (the organs were dried and kept in **canopic jars**; the heart was left in place); (3) the body was covered in **natron** salt for about 40 days to dry it; (4) it was oiled, packed and wrapped in linen bandages with amulets; (5) a mask was placed on the face and the mummy put in a coffin.',
    'In the **judgement of the dead**, the god Anubis weighed the person’s **heart** against the **feather of Maat** (truth). A heart light with good deeds allowed the soul to live forever in the fields of the afterlife; a heavy heart was eaten by a monster. The **Book of the Dead** contained spells to help the dead.',
    'Tombs were filled with food, furniture, jewels and models of servants for the afterlife. Old Kingdom pharaohs were buried in **pyramids** (the Great Pyramid of **Khufu** at Giza, about 2560 BC, was the tallest building in the world for almost 4 000 years); New Kingdom pharaohs in hidden tombs in the **Valley of the Kings** (the tomb of **Tutankhamun** was found nearly intact in 1922).',
  ], 'hist1-mummy', 'Mummification: wash, remove, dry, wrap, bury, about 70 days.',
  ['The organs removed during mummification were kept in:', ['canopic jars', 'pyramids', 'papyrus scrolls', 'baskets of grain'], 'Protected by gods.'],
  [['Mummification', 'Preserving a dead body by drying and wrapping it.'], ['Natron', 'A natural salt used to dry bodies.'], ['Afterlife', 'Life after death.']],
  [
    { q: 'Put these steps of mummification in order: wrap in linen; remove the organs; dry with natron; wash the body; place in a coffin.', steps: ['1. **wash the body**', '2. **remove the organs**', '3. **dry with natron**', '4. **wrap in linen**', '5. **place in a coffin**'] },
  ]),

  // ---------- 8. Achievements ----------
  L('hi-writing-egypt-1', 'hi-f1-egypt-achievements', '8.1', 'Hieroglyphics, papyrus and the scribes', 12, ['Ancient Egypt', 'Achievements'], [
    'By about 3200 BC Egyptians had invented **hieroglyphics** ("sacred carvings"), a writing system of more than 700 signs. Some signs stood for things, others for sounds. Hieroglyphs were carved on temples and tombs; for daily records scribes used a faster, simpler script called **hieratic**.',
    'They wrote with reed pens and ink on **papyrus**, a paper made from reeds that grew along the Nile: the stems were cut into strips, laid crosswise, pressed and dried into sheets that could be joined into scrolls. The word "paper" comes from "papyrus".',
    '**Scribes** trained for years. They kept records of taxes, harvests, laws and religious texts, and some rose to high office. For centuries after Egypt’s fall no one could read hieroglyphs, until the **Rosetta Stone** (found in 1799), which carried the same text in hieroglyphic, demotic and Greek, allowed the French scholar **Jean-François Champollion** to decipher them in **1822**.',
  ], 'hist1-writing', 'Hieroglyphs for temples, hieratic for daily records, papyrus to write on.',
  ['The Rosetta Stone helped scholars because it had the same text in:', ['three scripts, including Greek', 'one script only', 'English', 'pictures without words'], 'Greek could be read.'],
  [['Hieroglyphics', 'The picture writing of ancient Egypt.'], ['Papyrus', 'A writing material made from Nile reeds.'], ['Scribe', 'A trained writer and record keeper.']],
  [
    { q: 'Explain why writing was important for the Egyptian state.', steps: ['Scribes recorded **taxes and harvests**, so the state could collect wealth.', 'Laws and orders could be **sent across the country**.', 'Religious and scientific knowledge was **preserved** for later generations.'] },
  ]),

  L('hi-science-egypt-1', 'hi-f1-egypt-achievements', '8.2', 'Science, technology, medicine and architecture', 12, ['Ancient Egypt', 'Achievements'], [
    '**Mathematics**: Egyptians used a decimal number system, fractions and **geometry** to measure fields after the floods, calculate areas and volumes, and plan buildings. **Astronomy**: they observed the stars and the rising of the star Sirius, which announced the flood, and created a **calendar of 365 days** (12 months of 30 days plus 5 extra days), the ancestor of ours.',
    '**Medicine**: Egyptian doctors examined patients, set broken bones, treated wounds and used hundreds of remedies from plants and minerals; papyrus texts such as the Edwin Smith papyrus describe treatments. Their knowledge of the body grew partly from mummification.',
    '**Technology and architecture**: irrigation (canals, basins, the shaduf); stone building with ramps, levers and copper tools; the **pyramids**, temples, **obelisks** and the **Great Sphinx**; boats of wood and papyrus; glass, jewellery, painting and sculpture. These achievements show that Africans created one of the world’s great early civilisations, which influenced Greece and later the whole world.',
  ], 'hist1-egypt-achievements', 'Match each achievement to a need: the flood gave rise to the calendar and geometry.',
  ['Why did Egyptians need geometry?', ['to measure fields again after each flood and to build', 'to play games only', 'to write poems', 'to sail to Rome'], 'Practical mathematics.'],
  [['Obelisk', 'A tall four-sided stone pillar with a pointed top.'], ['Astronomy', 'The study of the stars and planets.']],
  [
    { q: 'Compare the Egyptian calendar with ours.', steps: ['Egyptian: **365 days**, 12 months of 30 days plus 5 extra days.', 'Ours: **365 days** (366 in a leap year), 12 months of different lengths.', 'Ours developed from the Egyptian calendar through the **Romans** (the Julian calendar).'] },
  ]),

  // ---------- 9. Decline ----------
  L('hi-decline-egypt-1', 'hi-f1-egypt-decline', '9.1', 'The causes of Egypt’s decline', 12, ['Ancient Egypt'], [
    '**Internal causes**:\n- **weak rulers** and **succession disputes** between rival members of royal families\n- the growing **power and wealth of priests and nobles**, who challenged the pharaoh\n- the huge **cost of monuments**, wars and temples, which exhausted the treasury and the workers\n- **low floods** and poor harvests at some times, causing famine and unrest\n- **division** of the country between rival rulers in the intermediate periods.',
    '**External causes**: foreign **invasions**. The **Hyksos** from western Asia conquered the north (about 1650 BC) with horse-drawn chariots and bronze weapons; later the **Assyrians** (671 BC), the **Persians** (525 BC), the Greeks under **Alexander the Great** (332 BC) and finally the **Romans** (30 BC) conquered Egypt.',
  ], 'hist1-egypt-decline', 'Sort causes into two boxes: inside Egypt and outside Egypt.',
  ['Which is an internal cause of decline?', ['quarrels over the succession', 'the Persian invasion', 'Alexander’s conquest', 'the Roman conquest'], 'It came from inside Egypt.'],
  [['Succession dispute', 'A quarrel over who should become the next ruler.'], ['Invasion', 'The entry of a foreign army to conquer a country.']],
  [
    { q: 'Explain how the cost of building monuments could weaken Egypt.', steps: ['Pyramids and temples needed **huge amounts of stone, food and labour**.', 'Taxes and forced work made **peasants poor and unhappy**.', 'The treasury was **emptied**, leaving less money for the army and for irrigation.'] },
  ]),

  L('hi-legacy-egypt-1', 'hi-f1-egypt-decline', '9.2', 'Foreign rule and the legacy of Egypt', 12, ['Ancient Egypt', 'Legacy'], [
    'The rulers of Egypt changed many times in its last millennium: the **Kushites** from the south ruled as the **25th dynasty** (about 744 to 656 BC); then came the Assyrians, the Persians, **Alexander the Great** (332 BC), who founded **Alexandria**, and the **Ptolemies**, a Greek dynasty. The last of them, Queen **Cleopatra VII**, died in **30 BC**, and Egypt became a province of **Rome**.',
    'The **legacy** of ancient Egypt: the 365-day calendar; mathematics and geometry; medicine; writing and paper (papyrus); monumental architecture (pyramids, obelisks, columns); art; ideas about the afterlife and kingship; and the knowledge kept in the great **Library of Alexandria**. Greek writers such as Herodotus visited Egypt and admired its learning, and Greek tradition says that Pythagoras studied there. Egypt is part of the **African heritage** that every African can be proud of.',
  ], 'hist1-invaders-timeline', 'Put the foreign rulers on a timeline: Kushites, Assyrians, Persians, Greeks, Romans.',
  ['Who founded Alexandria?', ['Alexander the Great', 'Narmer', 'Cleopatra', 'Ramses II'], 'In 331 BC.'],
  [['Legacy', 'Something handed down from the past.'], ['Province', 'A territory ruled as part of an empire.']],
  [
    { q: 'Name three parts of Egypt’s legacy that we still use or see today.', steps: ['The **365-day calendar**, through the Romans.', 'The word **paper**, from papyrus, and the idea of writing on paper.', '**Monuments** such as the pyramids, which still attract visitors from the whole world.'] },
  ]),

  // ---------- 10. Kush and Axum ----------
  L('hi-kush-1', 'hi-f1-kush', '10.1', 'Kush (Nubia): Kerma, Napata, Meroe and iron working', 14, ['Africa', 'Kush'], [
    '**Kush**, also called **Nubia**, lay south of Egypt along the Upper Nile, in present-day **Sudan**. It was rich in **gold**, ivory, ebony and incense and traded them with Egypt. Its first great centre was **Kerma** (from about 2500 BC). After a period of Egyptian rule, Kush became powerful again with its capital at **Napata**; under King **Piye** the Kushites conquered Egypt and ruled it as the **25th dynasty** (about 744 to 656 BC), until the Assyrians drove them out.',
    'The capital later moved south to **Meroe**, which became a great centre of **iron working**: large heaps of slag (waste from smelting) can still be seen there. Iron tools and weapons helped farming and war. Meroe developed its own **Meroitic script**, built many small **pyramids**, and was ruled at times by powerful queens called **Kandake** (Candace), such as **Amanirenas**, who fought the Romans about 25 BC.',
    '**Traditional iron smelting**, practised in Meroe and in many parts of Africa, including Cameroon: iron ore is broken and heated with **charcoal** in a clay **furnace**; bellows blow air to raise the heat; the iron collects as a spongy lump (a bloom), which the **blacksmith** hammers on an anvil to make hoes, knives, spears and arrowheads. Meroe declined in the fourth century AD and was conquered by **Axum**.',
  ], 'hist1-iron-smelting', 'Ore plus charcoal plus air in a furnace: iron.',
  ['The capital of Kush that became famous for iron working was:', ['Meroe', 'Memphis', 'Thebes', 'Athens'], 'Slag heaps remain.'],
  [['Kandake', 'A queen of Kush.'], ['Smelting', 'Heating ore to extract metal.'], ['Slag', 'Waste left after smelting.']],
  [
    { q: 'Explain two reasons for the importance of iron in Kush.', steps: ['**Iron tools** (hoes, axes) made farming and clearing land easier, so more food was produced.', '**Iron weapons** made the army strong.', 'Iron goods were also **traded**, bringing wealth to Meroe.'] },
  ]),

  L('hi-axum-1', 'hi-f1-kush', '10.2', 'The kingdom of Axum', 12, ['Africa', 'Axum'], [
    '**Axum** (Aksum) was a kingdom in the highlands of present-day **Ethiopia and Eritrea**, powerful from about the first to the seventh century AD. Through its port **Adulis** on the Red Sea it traded with Egypt, Arabia, India and the Roman world: it exported ivory, gold, incense and animals and imported cloth, glass, wine and metals.',
    'Achievements: Axum was one of the first African states to issue its own **coins** (gold, silver and bronze); it developed the **Ge’ez** script, still used in the Ethiopian church; and it raised huge carved stone **stelae** (obelisks), some over 20 metres high, to mark royal tombs.',
    'In the fourth century AD, King **Ezana** (about AD 330 to 360) adopted **Christianity**, making Axum one of the first Christian kingdoms in the world. Ezana also conquered **Meroe**. The Ethiopian Orthodox Church continues this ancient tradition. Kush and Axum show that the Upper Nile and the Horn of Africa had rich civilisations linked to the wider world.',
  ], 'hist1-kush-axum', 'Kush: iron and queens. Axum: coins, stelae and early Christianity.',
  ['Axum’s port on the Red Sea was:', ['Adulis', 'Alexandria', 'Carthage', 'Douala'], 'Its gateway to world trade.'],
  [['Stela (plural stelae)', 'A tall carved stone monument.'], ['Ge’ez', 'The ancient script and language of Axum and Ethiopia.']],
  [
    { q: 'Compare Kush and Axum under: location, famous product, religion.', steps: ['Location: Kush on the **Upper Nile (Sudan)**; Axum in the **Ethiopian highlands**.', 'Famous for: Kush, **iron** of Meroe; Axum, **coins and stelae**.', 'Religion: Kush, **gods related to Egyptian ones**; Axum, **Christianity** from King Ezana.'] },
  ]),

  // ---------- 11. Greek city-states ----------
  L('hi-polis-1', 'hi-f1-greece', '11.1', 'The geography of Greece and the city-state', 12, ['Greece', 'World history'], [
    'Ancient Greece lay in south-eastern Europe, on a rocky peninsula and many islands in the Aegean and Mediterranean Seas. **Mountains** and **seas** divided the land into small valleys and islands. Good farmland was scarce, so many Greeks became **sailors**, traders and colonists, founding cities around the Mediterranean.',
    'Because of this geography, Greece was never one country in ancient times. It was made of hundreds of independent **city-states**, each called a **polis**: a city and the farmland around it, with its own government, laws, army and gods. A typical polis had an **acropolis** (a fortified hill with temples) and an **agora** (the market and meeting place). The citizens of different city-states shared the Greek **language**, religion and the Olympic Games.',
    'City-states had different kinds of government: **monarchy** (rule by a king), **aristocracy** or **oligarchy** (rule by a few rich families), **tyranny** (rule by one man who seized power) and **democracy** (rule by the citizens).',
  ], 'hist1-polis', 'Mountains and sea made many small Greek states instead of one big one.',
  ['Rule by a few rich families is called:', ['oligarchy', 'democracy', 'monarchy', 'anarchy'], 'Oligos = few.'],
  [['Polis', 'A Greek city-state.'], ['Acropolis', 'The fortified hill of a Greek city, with temples.'], ['Agora', 'The market and public meeting place of a Greek city.']],
  [
    { q: 'Explain how geography led to the creation of city-states in Greece.', steps: ['**Mountains** separated valleys, making travel difficult.', '**Seas and islands** divided the people further.', 'Each community developed **its own government**: a polis.'] },
  ]),

  L('hi-athens-sparta-1', 'hi-f1-greece', '11.2', 'Athens and Sparta compared', 12, ['Greece', 'World history'], [
    '**Sparta**, in the south (the Peloponnese), was a **military** state. Boys left home at seven to train as soldiers in a hard system of education; adult men lived in barracks and served in the army. Sparta had **two kings**, a council of elders and an assembly. Most of the work was done by **helots**, state slaves. Spartan women were trained in sport and ran the households and estates.',
    '**Athens**, in Attica, became a **democracy** and a centre of trade, the arts and learning. Boys of citizen families learned reading, writing, music, poetry and sport; girls were mostly educated at home. Athens had a strong **navy** and a busy port, Piraeus.',
    'United, the Greeks defeated the invading **Persian Empire** at **Marathon** (490 BC) and **Salamis** (480 BC). Later Athens and Sparta fought each other in the **Peloponnesian War** (431 to 404 BC), which Sparta won, weakening all the Greek states.',
  ], 'hist1-athens-sparta', 'Sparta: soldiers and discipline. Athens: democracy and learning.',
  ['The state slaves who farmed for Spartan citizens were the:', ['helots', 'plebeians', 'scribes', 'griots'], 'They greatly outnumbered the Spartans.'],
  [['Helot', 'A state slave in Sparta.'], ['Peloponnesian War', 'The war between Athens and Sparta, 431 to 404 BC.']],
  [
    { q: 'Compare the education of boys in Athens and Sparta.', steps: ['**Sparta**: boys left home at seven for **military training**, discipline and endurance.', '**Athens**: boys studied **reading, writing, music, poetry and sport**.', 'Sparta aimed to make **soldiers**; Athens aimed to make **well-rounded citizens**.'] },
  ]),

  // ---------- 12. Democracy ----------
  L('hi-democracy-1', 'hi-f1-democracy', '12.1', 'Athenian democracy', 12, ['Greece', 'Government'], [
    '**Democracy** ("rule by the people") began in **Athens** with the reforms of **Cleisthenes** in about **508 BC**. It was a **direct democracy**: citizens did not elect representatives to make laws; they voted on laws themselves.',
    'Institutions:\n- the **Assembly** (Ekklesia): all male citizens over 18 could attend, speak and vote on laws, war and peace\n- the **Council of 500** (Boule): citizens chosen by lot for one year prepared the business of the Assembly\n- the **law courts**: large juries of citizens chosen by lot judged cases\n- **officials**, mostly chosen by lot; ten **generals** (strategoi) were elected\n- **ostracism**: citizens could vote to exile a dangerous politician for ten years.',
    '**Limits**: only adult male **citizens** (men born of Athenian parents) could take part, perhaps a fifth of the population. **Women**, **slaves** and **foreigners** (metics) had no political rights. Even so, Athens gave the world the idea that ordinary citizens can govern themselves, an idea that inspires modern democracies, including Cameroon’s elections.',
  ], 'hist1-athens-democracy', 'Direct democracy: citizens vote on laws themselves.',
  ['Ostracism allowed Athenian citizens to:', ['exile a dangerous politician for ten years', 'elect a king', 'free slaves', 'choose the Olympic winners'], 'A vote written on pottery pieces (ostraka).'],
  [['Direct democracy', 'A system in which citizens vote on laws themselves.'], ['Citizen', 'A member of a state with political rights.'], ['Ostracism', 'Voting to send a person into exile.']],
  [
    { q: 'Compare Athenian democracy with democracy in Cameroon today.', steps: ['Athens: **direct** (citizens voted on laws); Cameroon: **representative** (citizens elect deputies and senators who make laws).', 'Athens: only **adult male citizens** voted; Cameroon: **all citizens aged 20 and above**, women and men, can vote.', 'Both rest on the idea that **power comes from the people**.'] },
  ]),

  L('hi-philosophers-1', 'hi-f1-democracy', '12.2', 'The Golden Age and the great philosophers', 12, ['Greece', 'Ideas'], [
    'The 5th century BC, especially under **Pericles** (who led Athens from about 461 to 429 BC), was the **Golden Age** of Athens. With wealth from trade and its empire, Athens built the **Parthenon** on the Acropolis, supported theatre (the tragedies of Sophocles, the comedies of Aristophanes), sculpture and learning.',
    '**Philosophy** means "love of wisdom": the search for truth by reason. **Socrates** (about 470 to 399 BC) taught by asking questions to make people think (the **Socratic method**); accused of corrupting the youth, he was condemned to drink poison. His student **Plato** wrote dialogues about justice and the ideal state and founded the **Academy**. Plato’s student **Aristotle** studied logic, politics, biology and ethics, founded the **Lyceum** and taught the young **Alexander the Great**.',
  ], 'hist1-philosophers', 'Socrates taught Plato; Plato taught Aristotle; Aristotle taught Alexander.',
  ['Philosophy means:', ['love of wisdom', 'love of money', 'rule by the people', 'study of stars only'], 'Philo = love, sophia = wisdom.'],
  [['Philosophy', 'The search for wisdom and truth through reason.'], ['Golden Age', 'A period of great achievement and prosperity.']],
  [
    { q: 'Explain the Socratic method with an example.', steps: ['Socrates asked a series of **questions** instead of giving answers.', 'Example: "What is courage?" "Not running away." "Is a soldier who retreats to fight better later a coward?"', 'The questions show that our first ideas are incomplete and help us **think more clearly**.'] },
  ]),

  // ---------- 13. Greek legacy ----------
  L('hi-olympics-1', 'hi-f1-greek-legacy', '13.1', 'The Olympic Games, myths and literature', 12, ['Greece', 'Legacy'], [
    'The ancient **Olympic Games** were held every four years at **Olympia**, in honour of **Zeus**, from (by tradition) **776 BC**. Events included running, wrestling, boxing, the pentathlon and chariot races. A sacred truce allowed athletes to travel safely. Winners received a crown of olive leaves and great honour. The games were banned in AD 393 and revived as the **modern Olympic Games** in **1896** in Athens by **Pierre de Coubertin**.',
    '**Mythology**: the Greeks believed in many gods who lived on **Mount Olympus**: **Zeus** (king of the gods), Hera, Poseidon (the sea), Athena (wisdom), Apollo (the sun, music), Aphrodite (love), Ares (war). Myths of gods and heroes (Heracles, Achilles, Odysseus) are still told in books and films.',
    '**Literature**: **Homer**’s epics, the **Iliad** (the Trojan War) and the **Odyssey** (the journey home of Odysseus); the plays of the Athenian theatre; and history: **Herodotus**, the "father of history", wrote about the Persian Wars and the peoples he visited, including the Egyptians.',
  ], 'hist1-olympics', 'Ancient Olympics: 776 BC at Olympia. Modern Olympics: 1896 at Athens.',
  ['The prize for an ancient Olympic winner was:', ['a crown of olive leaves', 'a gold medal', 'a car', 'money only'], 'Honour mattered most.'],
  [['Epic', 'A long poem about heroes and great deeds.'], ['Mythology', 'The collection of myths of a people.']],
  [
    { q: 'Compare the ancient and the modern Olympic Games.', steps: ['Ancient: held at **Olympia**, for **Zeus**, from 776 BC; only free Greek men competed.', 'Modern: held in a **different city** each time, from 1896; **women and men** from all nations compete.', 'Both are held **every four years** and celebrate peace through sport.'] },
  ]),

  L('hi-greek-science-1', 'hi-f1-greek-legacy', '13.2', 'Greek science, architecture and the spread of Greek culture', 12, ['Greece', 'Legacy'], [
    'Greek thinkers looked for natural explanations of the world. **Pythagoras** worked on numbers and geometry (Pythagoras’ theorem); **Euclid**, at Alexandria, wrote a famous book on geometry; **Archimedes** discovered principles of floating bodies and levers; **Hippocrates**, the "father of medicine", taught that illness has natural causes; his **Hippocratic Oath** still guides doctors.',
    '**Architecture**: temples with columns (Doric, Ionic and Corinthian styles), such as the Parthenon; theatres built into hillsides; these styles are copied in many public buildings today.',
    '**Alexander the Great** (356 to 323 BC), king of Macedonia, conquered the Persian Empire, Egypt and lands as far as India. He spread Greek language and culture and founded many cities, the most famous being **Alexandria** in Egypt, with its great **Library** and lighthouse. This mixing of Greek, Egyptian and Asian cultures is called the **Hellenistic** age.',
  ], 'hist1-greek-legacy', 'One name per field: Pythagoras maths, Hippocrates medicine, Herodotus history.',
  ['The "father of medicine" was:', ['Hippocrates', 'Archimedes', 'Euclid', 'Homer'], 'The Hippocratic Oath.'],
  [['Hellenistic', 'The period after Alexander, when Greek culture mixed with others.'], ['Theorem', 'A rule in mathematics that has been proved.']],
  [
    { q: 'How did Alexander the Great spread Greek culture?', steps: ['His **conquests** created a huge empire from Greece to Egypt and India.', 'He founded **new cities** with Greek settlers, such as Alexandria.', '**Greek** became the common language of trade and learning in these lands.'] },
  ]),

  // ---------- 14. Rome ----------
  L('hi-romefound-1', 'hi-f1-rome', '14.1', 'The founding of Rome and the Roman Republic', 12, ['Rome', 'World history'], [
    '**Rome** stands on seven hills by the river **Tiber** in central **Italy**, a peninsula in the Mediterranean. According to **legend**, it was founded in **753 BC** by **Romulus**, one of twin brothers (Romulus and Remus) who had been abandoned as babies and raised by a **she-wolf**. Archaeology shows that villages on the hills joined into a town in the 8th century BC. At first Rome was ruled by **kings**.',
    'In **509 BC** the Romans expelled their last king and founded the **Republic** (res publica, "the public thing"). Each year citizens elected two **consuls** to lead the government and the army; the **Senate**, made up of former officials from rich families, advised them and controlled finance and foreign policy; assemblies of citizens voted on laws; **tribunes** protected the plebeians. In an emergency a **dictator** could rule for six months.',
    'Society was divided between **patricians** (old noble families) and **plebeians** (ordinary citizens), who struggled for equal rights; in about 450 BC the laws were written down in the **Twelve Tables**.',
  ], 'hist1-roman-republic', 'Two consuls, one Senate, citizen assemblies and tribunes: the Republic shared power.',
  ['In the Roman Republic, the officials who protected the plebeians were the:', ['tribunes', 'consuls', 'pharaohs', 'helots'], 'They could block unfair laws.'],
  [['Republic', 'A state without a king, governed by elected officials.'], ['Consul', 'One of the two chief officials of the Roman Republic.'], ['Senate', 'The council of the Roman state.']],
  [
    { q: 'Why did the Romans elect two consuls for one year only?', steps: ['After expelling their king, the Romans **feared that one man would take all power**.', '**Two** consuls could check each other.', '**One year** in office meant power could not last too long.'] },
  ]),

  L('hi-republic-empire-1', 'hi-f1-rome', '14.2', 'From Republic to Empire: the Punic Wars, Caesar and Augustus', 12, ['Rome', 'World history'], [
    'Rome conquered all of Italy, then fought **Carthage**, the great Phoenician power of North Africa, in the three **Punic Wars** (264 to 146 BC). The Carthaginian general **Hannibal** crossed the Alps with elephants and defeated the Romans in Italy, but Rome won in the end and **destroyed Carthage in 146 BC**. Rome then dominated the Mediterranean, including North Africa, Greece and later Egypt.',
    'Conquest brought wealth but also problems: rich generals with private armies fought civil wars. **Julius Caesar** conquered Gaul, became dictator and was assassinated in **44 BC** by senators who feared he would become king. His adopted son **Octavian** defeated his rivals (including Mark Antony and Cleopatra) and in **27 BC** became the first emperor with the title **Augustus**. The Republic became the **Roman Empire**, ruled by emperors.',
  ], 'hist1-rome-timeline', 'Kings (753 BC), Republic (509 BC), Empire (27 BC).',
  ['Carthage was destroyed by Rome in:', ['146 BC', 'AD 476', '753 BC', '27 BC'], 'At the end of the Third Punic War.'],
  [['Punic Wars', 'Three wars between Rome and Carthage, 264 to 146 BC.'], ['Emperor', 'The ruler of an empire.'], ['Empire', 'A large state made up of many conquered lands under one ruler.']],
  [
    { q: 'Put in order: Augustus becomes emperor; Rome founded; Republic begins; Carthage destroyed; Caesar killed.', steps: ['**753 BC** Rome founded (legend)', '**509 BC** Republic begins', '**146 BC** Carthage destroyed', '**44 BC** Caesar killed', '**27 BC** Augustus becomes emperor'] },
  ]),
];
