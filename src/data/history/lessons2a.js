// History lessons for Form 2 (first part): the Middle Ages in Europe,
// feudalism, the Church and the Crusades, the Renaissance, the rise and the
// contributions of Islamic civilisation, the peopling and the centralised
// states of pre-colonial Cameroon, and the empires of Ghana, Mali and Songhai.
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

export const LESSONS_2A = [
  // ---------- 1. The Middle Ages ----------
  L('hi-middleages-2', 'hi-f2-middle-ages', '1.1', 'What the Middle Ages were', 12, ['Medieval Europe', 'Timelines'], [
    'The **Middle Ages** (the **medieval** period) is the period of European history between **ancient times** and **modern times**: roughly from the fall of the Western Roman Empire in **AD 476** to the fall of **Constantinople** in **1453** (some historians end it with Columbus in **1492**). Historians divide it into the **Early Middle Ages** (5th to 10th centuries), the **High Middle Ages** (11th to 13th centuries) and the **Late Middle Ages** (14th and 15th centuries).',
    'After Rome fell, western Europe was divided into **Germanic kingdoms** (Franks, Visigoths, Ostrogoths, Anglo-Saxons). Towns, trade and learning declined, and fewer written records were made, so the early period was once called the "**Dark Ages**". The **Christian Church** kept learning alive. In the east, the **Byzantine Empire** continued the Roman tradition.',
    'Between the eighth and eleventh centuries Europe also suffered new invasions: **Vikings** from Scandinavia (from about 793), **Magyars** from the east and Muslim raiders in the Mediterranean. In the same centuries Africa saw the rise of great empires such as Ghana and later Mali.',
  ], 'hist2-middle-ages', 'Middle Ages: between ancient Rome (476) and the modern age (about 1453 to 1492).',
  ['The word "medieval" refers to:', ['the Middle Ages', 'the Stone Age', 'modern times', 'ancient Egypt'], 'From Latin medium aevum.'],
  [['Middle Ages', 'The period of European history from about 476 to about 1453.'], ['Medieval', 'Belonging to the Middle Ages.']],
  [
    { q: 'How long did the Middle Ages last, from 476 to 1453?', steps: ['Both dates are AD, so **subtract**: 1453 − 476.', '= **977 years**, almost a thousand years.'] },
  ]),

  L('hi-charlemagne-2', 'hi-f2-middle-ages', '1.2', 'The Franks, Charlemagne and the Holy Roman Empire', 12, ['Medieval Europe'], [
    'The **Franks** built the strongest Germanic kingdom in Gaul (France). Their king **Clovis** became a Christian (about 496), which won him the support of the Church. In 732 the Frankish leader **Charles Martel** stopped a Muslim army at the battle of **Tours**.',
    '**Charlemagne** ("Charles the Great", king from 768 to 814) conquered much of western Europe. On Christmas Day **800**, Pope Leo III crowned him **emperor** in Rome. He divided his empire into counties ruled by **counts** and checked them with royal inspectors (missi dominici); he encouraged schools and the copying of books in monasteries (the "Carolingian Renaissance").',
    'After his death the empire was divided among his grandsons (Treaty of Verdun, 843), the beginning of France and Germany. In **962**, the German king **Otto I** was crowned emperor, founding the **Holy Roman Empire**, which lasted in some form until 1806.',
  ], 'hist2-charlemagne', 'Charlemagne: crowned 800, conquered, organised, educated.',
  ['Who crowned Charlemagne emperor in 800?', ['Pope Leo III', 'Otto I', 'Clovis', 'Charles Martel'], 'In Rome, on Christmas Day.'],
  [['Emperor', 'The ruler of an empire.'], ['Holy Roman Empire', 'The empire of German kings crowned by the Pope, from 962 to 1806.']],
  [
    { q: 'Give three achievements of Charlemagne.', steps: ['**Conquered** a large empire in western Europe.', '**Organised** it into counties with inspectors to control the counts.', '**Encouraged learning**: schools and the copying of books in monasteries.'] },
  ]),

  // ---------- 2. Feudalism ----------
  L('hi-feudal-2', 'hi-f2-feudalism', '2.1', 'The feudal system', 14, ['Medieval Europe', 'Society'], [
    '**Feudalism** was the political, military and social system of medieval Europe, based on **land** and **loyalty**. It grew from the ninth century because kings were too weak to protect their people from invaders (Vikings, Magyars), so local lords with soldiers and castles became powerful.',
    'The **feudal pyramid**:\n- the **king** owned all the land in theory and granted large estates (**fiefs**) to great lords\n- **lords** (nobles, barons and also bishops and abbots) swore loyalty to the king in a ceremony of **homage** and the **oath of fealty**, and provided knights for his army\n- **knights** (vassals of the lords) received smaller fiefs in return for military service\n- **peasants**, most of them **serfs**, worked the land; serfs were bound to the **manor** and could not leave without permission.',
    'Duties: the lord gave **land and protection**; the vassal gave **loyalty, military service** and advice; serfs gave **labour** (work on the lord’s land), part of their harvest and fees, and in return received protection and a plot to farm. Life centred on the **manor**: the lord’s house or castle, the village, the church, the mill and the fields.',
  ], 'hist2-feudal-pyramid', 'Land flows down the pyramid; loyalty and service flow up.',
  ['In feudalism, a vassal received land in exchange for:', ['loyalty and military service', 'money only', 'nothing', 'slaves'], 'The feudal bargain.'],
  [['Feudalism', 'A system in which land was given in exchange for loyalty and service.'], ['Fief', 'Land granted by a lord to a vassal.'], ['Serf', 'A peasant bound to a lord’s land.'], ['Manor', 'A lord’s estate with its village and fields.']],
  [
    { q: 'Explain the duties of a lord and a serf to each other.', steps: ['The **lord** gave the serf **protection** and a plot of land to farm.', 'The **serf** worked on the **lord’s land**, gave part of the **harvest** and paid fees.', 'The serf could **not leave** the manor without permission.'] },
  ]),

  L('hi-feudal-decline-2', 'hi-f2-feudalism', '2.2', 'The advantages and the decline of feudalism', 12, ['Medieval Europe'], [
    '**Advantages**: feudalism gave **protection** and **order** in a time of invasions and weak kings; it kept farming going on the manors; it gave everyone a known place and duty.',
    '**Disadvantages**: serfs had little freedom; lords often fought each other; power was divided, which weakened the kingdoms.',
    '**Decline** (from the fourteenth century):\n- the **Black Death** (1347 to 1351) killed about a third of Europe’s people; labour became scarce, so surviving peasants demanded wages and freedom\n- the growth of **towns** and **trade** (helped by the Crusades) and a **money economy**: lords wanted money, and serfs bought their freedom\n- **peasant revolts** (in France in 1358, in England in 1381)\n- new weapons, **gunpowder** and **cannon**, which broke castle walls, and paid professional armies, which replaced knights\n- **strong kings** who built national states, for example after the Hundred Years’ War (1337 to 1453) between England and France.',
  ], 'hist2-feudal-decline', 'When money and towns grew, land and loyalty mattered less.',
  ['How did the Black Death help to end serfdom?', ['labour became scarce, so peasants could demand wages and freedom', 'it killed only lords', 'it created more serfs', 'it ended trade forever'], 'Fewer workers, more bargaining power.'],
  [['Black Death', 'The plague that killed about a third of Europe’s people from 1347 to 1351.'], ['Money economy', 'An economy in which goods and labour are paid for with money.']],
  [
    { q: 'Give one economic, one military and one political cause of the decline of feudalism.', steps: ['Economic: the growth of **towns, trade and money**.', 'Military: **gunpowder and cannon** made castles and knights less important.', 'Political: **strong kings** built national states and paid armies.'] },
  ]),

  // ---------- 3. Church and Crusades ----------
  L('hi-church-2', 'hi-f2-church', '3.1', 'The Christian Church in the Middle Ages', 12, ['Medieval Europe', 'Religion'], [
    'The **Church** was the most powerful institution of medieval Europe. At its head was the **Pope** in Rome; below him were archbishops, **bishops** (who ruled dioceses) and parish **priests**. The Church collected a **tithe** (a tenth of income), owned great lands, ran courts and could **excommunicate** (exclude from the Church) even kings. In 1054 the Church split into the **Catholic** Church of the West and the **Orthodox** Church of the East.',
    '**Monks** and **nuns** lived in **monasteries** and **convents** under rules such as the **Rule of St Benedict** (about 529): prayer, work and study. They copied books by hand, kept schools and libraries, cared for the sick and the poor, and developed farming. From the twelfth century **universities** grew from cathedral schools (Bologna, Paris, Oxford).',
    'Popes and emperors often struggled for power, for example over who could appoint bishops (the Investiture Controversy: in 1077 the emperor Henry IV had to beg Pope Gregory VII for forgiveness at **Canossa**). The Church also built the great **cathedrals** of the Romanesque and Gothic styles.',
  ], 'hist2-church', 'The Church taught, healed, judged, owned land and even challenged kings.',
  ['A tenth of a person’s income paid to the Church was the:', ['tithe', 'fief', 'jizya', 'homage'], 'A Church tax.'],
  [['Pope', 'The head of the Catholic Church.'], ['Monastery', 'A community where monks live under a religious rule.'], ['Excommunication', 'Exclusion of a person from the Church.']],
  [
    { q: 'Explain three ways in which monasteries helped medieval society.', steps: ['**Learning**: monks copied and preserved books and ran schools.', '**Care**: they looked after the sick, travellers and the poor.', '**Farming**: they cleared land and improved agriculture.'] },
  ]),

  L('hi-crusades-2', 'hi-f2-church', '3.2', 'The Crusades: causes, events and effects', 14, ['Medieval Europe', 'Religion'], [
    'The **Crusades** were religious wars in which Christians from western Europe tried to win control of **Jerusalem** and the Holy Land from Muslim rulers. **Causes**: the Seljuk Turks controlled the Holy Land and threatened the Byzantine Empire, whose emperor asked for help; Pope **Urban II** called the First Crusade at **Clermont** in **1095**, promising forgiveness of sins; knights sought land, wealth and adventure; Italian merchant cities wanted trade.',
    '**Events**: the First Crusade captured **Jerusalem** in **1099** and set up crusader states. In **1187** the Muslim leader **Saladin** retook Jerusalem. Later crusades (the Third, led by Richard the Lionheart, and others) failed to recover it; the Fourth Crusade even attacked Christian Constantinople (1204). The last crusader stronghold, **Acre**, fell in **1291**.',
    '**Effects**: more **trade** between Europe and the East (spices, silk, sugar, cotton); growth of Italian cities such as Venice and Genoa; new knowledge from the Muslim world; many nobles died or sold land, which weakened feudalism; but also lasting **hostility** between Christians and Muslims and persecution of Jews.',
  ], 'hist2-crusades', 'Causes, events, effects: the Crusades failed in war but changed trade.',
  ['The First Crusade was called in 1095 by:', ['Pope Urban II', 'Saladin', 'Charlemagne', 'Otto I'], 'At Clermont in France.'],
  [['Crusade', 'A medieval religious war to win the Holy Land.'], ['Holy Land', 'The region of Jerusalem, sacred to Jews, Christians and Muslims.']],
  [
    { q: 'Give two positive and one negative effect of the Crusades.', steps: ['Positive: **trade** with the East increased; Europeans gained **new goods and knowledge**.', 'Negative: lasting **hostility** between Christians and Muslims.'] },
  ]),

  // ---------- 4. Renaissance ----------
  L('hi-renaissance-2', 'hi-f2-renaissance', '4.1', 'The Renaissance: rebirth of learning and art', 12, ['Medieval Europe', 'Ideas'], [
    'The **Renaissance** ("rebirth") was a great movement of art, learning and science that began in **Italy** in the fourteenth century and spread across Europe until the sixteenth century. Rich trading cities such as **Florence** and Venice, and families such as the **Medici**, paid artists and scholars.',
    '**Humanism**: scholars studied the Greek and Latin classics (many preserved and commented by Muslim scholars) and valued human ability, reason and observation. **Art**: artists studied the human body and perspective: **Leonardo da Vinci** (the Mona Lisa, notebooks of inventions), **Michelangelo** (the David, the ceiling of the **Sistine Chapel**), **Raphael**. **Science**: **Copernicus** (1543) argued that the **Earth moves round the Sun**; **Galileo** used the telescope to support him.',
    'The Renaissance ended the medieval way of thinking and prepared the modern world: the voyages of exploration, the scientific revolution and the Reformation (from 1517, when Martin Luther criticised the Church).',
  ], 'hist2-renaissance', 'Renaissance = rebirth of the classics, observation and the human being.',
  ['The idea that the Earth moves round the Sun was published in 1543 by:', ['Copernicus', 'Leonardo da Vinci', 'Gutenberg', 'Michelangelo'], 'A scientific revolution.'],
  [['Renaissance', 'The rebirth of learning and art in Europe, fourteenth to sixteenth centuries.'], ['Humanism', 'A movement that studied the classics and valued human ability.'], ['Perspective', 'A drawing method that shows depth.']],
  [
    { q: 'Explain why the Renaissance began in Italy.', steps: ['Italian cities were **rich from trade** with the East.', 'Rich families such as the **Medici** paid artists and scholars.', 'Italy had **Roman ruins and books** that inspired the study of the classics.'] },
  ]),

  L('hi-printing-2', 'hi-f2-renaissance', '4.2', 'Gutenberg’s printing press and its effects', 10, ['Medieval Europe', 'Inventions'], [
    'Around **1450**, **Johannes Gutenberg** of Mainz, Germany, developed a printing press with **movable metal type**, oil-based ink and a screw press. His famous Bible was printed about **1455**. (Printing with movable type had been invented earlier in China, but Gutenberg’s system spread rapidly in Europe.)',
    '**Effects**: books became **cheaper** and more numerous; **literacy** spread beyond monks and nobles; ideas of the Renaissance, new scientific discoveries and maps travelled quickly; the Bible was printed in local languages, which helped the **Reformation**; newspapers and pamphlets appeared later. Printing is one of the inventions that ended the Middle Ages.',
  ], 'hist2-printing', 'One press, thousands of copies: ideas could no longer be stopped.',
  ['Gutenberg’s printed Bible appeared about:', ['1455', '1095', '1324', '800'], 'In Mainz.'],
  [['Movable type', 'Separate letters that can be arranged and reused for printing.'], ['Literacy', 'The ability to read and write.']],
  [
    { q: 'Compare book production before and after Gutenberg.', steps: ['Before: books were **copied by hand** by monks: slow, rare and expensive.', 'After: books were **printed** in hundreds of copies: fast, cheaper and common.', 'Result: **knowledge spread** to many more people.'] },
  ]),

  // ---------- 5. Rise of Islam ----------
  L('hi-caliphates-2', 'hi-f2-islam', '5.1', 'The Prophet and the early caliphates', 14, ['Islam', 'World history'], [
    'Review: the Prophet **Muhammad** (about 570 to 632) received the revelation of the **Qur’an** from 610; the **Hijra** to Medina in **622** began the Islamic calendar; Islam rests on the **Five Pillars** (Shahada, Salat, Zakat, Sawm, Hajj).',
    'After Muhammad’s death the community was led by **caliphs** ("successors"):\n- the four **Rashidun** ("rightly guided") caliphs (632 to 661): **Abu Bakr**, **Umar**, **Uthman** (who had the Qur’an collected into one text) and **Ali**; Arab armies took Syria, Iraq, Persia and **Egypt**\n- the **Umayyad** caliphs (661 to 750), with their capital at **Damascus**: they conquered **North Africa** and, in **711**, **Spain**; their advance into France was stopped at **Tours** (732)\n- the **Abbasid** caliphs (750 to 1258), who founded **Baghdad** (762), a great centre of trade and learning, until the **Mongols** destroyed it in **1258**.',
    'A dispute over who should lead after Muhammad divided Muslims into **Sunni** and **Shia**. An Umayyad prince escaped to Spain, where **Cordoba** became one of the greatest cities of Europe.',
  ], 'hist2-caliphates', 'Rashidun (Medina), Umayyads (Damascus), Abbasids (Baghdad).',
  ['The caliph who had the Qur’an collected into one standard text was:', ['Uthman', 'Abu Bakr', 'Saladin', 'Harun al-Rashid'], 'The third caliph.'],
  [['Caliph', 'A successor of Muhammad as leader of the Muslim community.'], ['Caliphate', 'The state ruled by a caliph.']],
  [
    { q: 'Put the caliphates in order with their capitals.', steps: ['**Rashidun** (632 to 661): Medina (later Kufa).', '**Umayyad** (661 to 750): **Damascus**.', '**Abbasid** (750 to 1258): **Baghdad**.'] },
  ]),

  L('hi-islam-expansion-2', 'hi-f2-islam', '5.2', 'Why Islam spread so quickly', 12, ['Islam', 'Africa'], [
    'Within about a century of Muhammad’s death, Islam stretched from Spain to Central Asia. **Reasons**:\n- **religious unity** and enthusiasm among the Arabs, who had been divided tribes\n- the **weakness** of the **Byzantine** and **Persian** empires, exhausted by wars against each other\n- **military skill**: fast desert cavalry and able generals\n- relative **tolerance**: Jews and Christians ("people of the Book") could keep their faith if they paid a tax (**jizya**), and many people preferred Muslim rule to their former rulers\n- **trade**: Muslim merchants carried their faith along caravan and sea routes\n- the simple message of one God and the equality of believers.',
    'In **Africa**, Egypt was taken between 639 and 642 and North Africa by about 700; Berbers converted and joined the armies that entered Spain. Further south, Islam spread mainly **peacefully** through traders and scholars across the Sahara to Ghana, Mali, Songhai and Kanem-Bornu, and along the East African coast.',
  ], 'hist2-islam-expansion', 'Faith, weak neighbours, skill, tolerance and trade explain the spread.',
  ['Christians and Jews under early Muslim rule could keep their religion by paying the:', ['jizya', 'tithe', 'zakat only', 'fief'], 'A tax on non-Muslims.'],
  [['Jizya', 'A tax paid by non-Muslims under Muslim rule.'], ['People of the Book', 'Jews and Christians, who have holy scriptures.']],
  [
    { q: 'Explain how trade helped the spread of Islam in West Africa.', steps: ['Muslim **merchants** crossed the Sahara with caravans.', 'They settled in trading towns and built **mosques** and schools.', 'Local rulers and traders **converted**, which helped trade and gave them literate advisers.'] },
  ]),

  // ---------- 6. Islamic contributions ----------
  L('hi-islam-science-2', 'hi-f2-islam-contrib', '6.1', 'Islamic science, mathematics and medicine', 14, ['Islam', 'Legacy'], [
    'Under the Abbasids, the **House of Wisdom** in **Baghdad** gathered scholars who **translated** Greek, Persian and Indian books into Arabic and added their own discoveries. Many works of Aristotle and other Greeks reached Europe through Arabic translations, so Islamic scholars **preserved classical knowledge**.',
    '**Mathematics**: **al-Khwarizmi** (ninth century) wrote the book that gave us the word **algebra** (al-jabr), and the word algorithm comes from his name; the **Hindu-Arabic numerals** including **zero** reached Europe through Arab scholars. **Astronomy**: observatories and improved **astrolabes**. **Optics**: Ibn al-Haytham studied light and vision. **Chemistry**: distillation and laboratory methods.',
    '**Medicine**: hospitals (bimaristans) with wards and training; **al-Razi** described diseases such as smallpox and measles; **Ibn Sina** (Avicenna, 980 to 1037) wrote the **Canon of Medicine**, used in European universities for centuries. **Geography and history**: al-Idrisi’s world map (1154); the travels of **Ibn Battuta** (fourteenth century), who visited Mali; **Ibn Khaldun**’s study of history and society.',
  ], 'hist2-islam-contrib', 'Translate, preserve, discover: the three gifts of Islamic scholarship.',
  ['The word "algorithm" comes from the name of:', ['al-Khwarizmi', 'Ibn Sina', 'Ibn Battuta', 'Saladin'], 'A mathematician of Baghdad.'],
  [['House of Wisdom', 'A centre of translation and research in Abbasid Baghdad.'], ['Astrolabe', 'An instrument to measure the positions of stars.']],
  [
    { q: 'Explain how Islamic scholars helped the European Renaissance.', steps: ['They **translated and preserved** Greek works such as Aristotle’s.', 'They **added** new discoveries in mathematics, medicine and astronomy.', 'These books reached Europe through **Spain and Sicily**, feeding the rebirth of learning.'] },
  ]),

  L('hi-islam-culture-2', 'hi-f2-islam-contrib', '6.2', 'Islamic architecture, arts and cities', 12, ['Islam', 'Legacy'], [
    '**Architecture**: the **mosque** with its prayer hall, courtyard, **minaret** and **mihrab** (niche facing Mecca); famous buildings include the **Dome of the Rock** in Jerusalem (691), the Great Mosque of **Cordoba**, the **Alhambra** palace in **Granada** and, in Africa, the mosques of Kairouan, Cairo, Timbuktu (the Djinguereber) and the mud-brick Great Mosque of Djenné.',
    '**Arts**: because religious art avoids images of people, Islamic artists developed beautiful **calligraphy** (decorative writing of Qur’anic verses) and **arabesques** (geometric and plant patterns), as well as carpets, ceramics and metalwork. **Literature**: poetry and stories such as "The Thousand and One Nights".',
    '**Cities and trade**: Baghdad, Cairo, Cordoba and Fez were great cities with libraries, markets and universities (al-Azhar in Cairo; al-Qarawiyyin in Fez). Muslims learned **paper making** from Chinese prisoners after 751 and spread it to Europe. In West Africa, Islam brought **Arabic literacy**, schools and scholarship.',
  ], 'hist2-islam-culture', 'Minaret, mihrab, calligraphy, arabesque: words that mark Islamic art.',
  ['The niche in a mosque that shows the direction of Mecca is the:', ['mihrab', 'minaret', 'dome', 'courtyard'], 'Worshippers face it.'],
  [['Minaret', 'The tower of a mosque from which the call to prayer is made.'], ['Calligraphy', 'The art of beautiful writing.'], ['Arabesque', 'A decorative pattern of lines and plants.']],
  [
    { q: 'Explain why calligraphy and arabesques are so important in Islamic art.', steps: ['Islamic religious art **avoids images of people and animals**.', 'Artists decorated buildings with **Qur’anic verses** in beautiful writing (calligraphy).', 'And with **geometric and plant patterns** (arabesques), which express harmony.'] },
  ]),

  // ---------- 7. Peopling of Cameroon ----------
  L('hi-sao-2', 'hi-f2-peopling', '7.1', 'The first peoples of Cameroon: the forest peoples and the Sao', 12, ['Cameroon', 'Peoples'], [
    'Review: the **forest peoples** (Baka, Bakola-Bagyeli, Bedzan) are among the earliest inhabitants of the southern forests (Form 1).',
    'In the far north, the **Sao** civilisation developed around **Lake Chad** and along the **Logone** and **Chari** rivers, over many centuries until about the sixteenth century. The Sao lived in walled towns on mounds above the floodplain, farmed, fished and herded. They are famous for their **terracotta** (fired clay) figures and masks, pottery, and **bronze** and copper objects made by the lost-wax method; many have been found by archaeologists and are kept in museums. Their history is also known from oral tradition, which remembers them as giants.',
    'The Sao were gradually absorbed or pushed aside by the expansion of **Kanem-Bornu** (fourteenth to sixteenth centuries). The **Kotoko** people of the Logone and Chari region are considered their descendants.',
  ], 'hist2-sao', 'Sao: walled towns, terracotta and bronze near Lake Chad.',
  ['The people considered descendants of the Sao are the:', ['Kotoko', 'Duala', 'Bamileke', 'Beti'], 'Along the Logone and Chari.'],
  [['Terracotta', 'Fired clay used for figures and pottery.'], ['Lost-wax casting', 'A method of making metal objects from a wax model inside a clay mould.']],
  [
    { q: 'How do historians know about the Sao?', steps: ['**Archaeology**: terracotta figures, pottery, bronze objects and the remains of walled towns.', '**Oral tradition**: stories of the Sao passed on by the peoples of the region.', '**Written sources**: Arabic chronicles of Kanem-Bornu that mention wars against them.'] },
  ]),

  L('hi-migrations-2', 'hi-f2-peopling', '7.2', 'Ancient and recent migrations into Cameroon', 14, ['Cameroon', 'Migrations'], [
    'Cameroon was peopled by **successive waves** of migrants who met earlier inhabitants and mixed with them.\n- **Ancient migrations**: the **palaeo-Sudanese**, among the oldest groups of the north, such as the mountain peoples of the **Mandara** (Mafa, Mofu and others); the **Sudanese** peoples of the savanna (such as the Massa, Mundang, Tupuri, Mbum and Gbaya); the **first wave of Bantu** (such as the Duala, Bassa and Bakoko), who moved south and west towards the coast and the forest.\n- **Grassfields peoples** (Tikar, Bamum, Bamileke and the peoples of the North West), whose languages are related to Bantu, formed many kingdoms in the western highlands.\n- **Recent migrations**: the **neo-Sudanese**: the **Fulani** (Peuls), cattle herders who came from the west from the eighteenth century and conquered much of the north in the jihad of the early nineteenth century; the **Shuwa Arabs**, who settled near Lake Chad; and the **second Bantu wave**, the **Beti-Fang** (Ewondo, Eton, Bulu, Fang), who moved south-west from the north-east and crossed the **Sanaga** in the eighteenth and nineteenth centuries.',
    'Causes of these migrations: wars and pressure from other peoples (such as the Fulani jihad), the search for land, water and pasture, drought and population growth. Legends remember them: the Beti tell how they crossed the Sanaga on the back of a giant snake. These migrations explain the rich **diversity** of Cameroon (more than 250 ethnic groups) and its shared history.',
  ], 'hist2-peopling', 'Old Sudanese and Bantu first; Fulani, Shuwa Arabs and Beti-Fang later.',
  ['The Fulani and the Shuwa Arabs are grouped as:', ['neo-Sudanese (recent migrants)', 'palaeo-Sudanese', 'first-wave Bantu', 'forest peoples'], 'Recent migrations.'],
  [['Migration wave', 'A large movement of people at a particular time.'], ['Ethnic group', 'A people who share origins, language and culture.']],
  [
    { q: 'Explain one cause of the migration of the Beti-Fang across the Sanaga.', steps: ['In the eighteenth and nineteenth centuries, peoples of the north and east were under **pressure**, including from the **Fulani** advance.', 'The Beti-Fang moved **south-west in search of security and land**.', 'They crossed the **Sanaga** and settled in the forest of the Centre and South.'] },
  ]),

  // ---------- 8. Centralised states ----------
  L('hi-fondoms-2', 'hi-f2-cmr-states', '8.1', 'The fondoms of the western Grassfields', 14, ['Cameroon', 'Government'], [
    'The **western Grassfields** (the present West and North West regions) had many **centralised** kingdoms, called **fondoms** (or chiefdoms), such as **Bamum**, **Nso**, **Bafut**, **Bali-Nyonga**, **Kom**, Bandjoun and Bafoussam. Each was ruled by a **Fon** (Mfon, Fo), a sacred king believed to link the people to the ancestors. He was helped by a council of **notables**, the **queen mother**, and palace officials and servants.',
    '**Checks on power**: the **Kwifon** (called Ngumba in some places), a regulatory society of senior men, enforced laws, carried out the Fon’s decisions, kept order and could even check a bad Fon. Other secret and warrior societies had religious and military roles. Succession was usually decided by the kingmakers among the Fon’s sons.',
    '**Examples**: the **Bamum** kingdom was founded, by tradition, by **Nchare Yen** in the late fourteenth century; King **Njoya** (who ruled from about 1886 to 1933) invented the **Bamum script**, built a palace and promoted crafts in Foumban. **Nso** was founded, by tradition, by the princess **Ngonnso**. **Bali-Nyonga** was founded in the nineteenth century by Chamba migrants. Economy: farming, crafts (wood carving, brass casting, weaving, beadwork), markets and trade in kola, slaves and palm oil.',
  ], 'hist2-cmr-states', 'Fon at the top, Kwifon to enforce and check: power with limits.',
  ['The founder of Nso, according to tradition, was:', ['Princess Ngonnso', 'Nchare Yen', 'Modibo Adama', 'Njoya'], 'A woman founder.'],
  [['Fondom', 'A Grassfields kingdom ruled by a Fon.'], ['Kwifon', 'A regulatory society that enforces laws in many Grassfields kingdoms.'], ['Centralised society', 'A society with a supreme ruler and a hierarchy of officials.']],
  [
    { q: 'How was the power of a Grassfields Fon limited?', steps: ['The **Kwifon** enforced laws and could check a Fon who abused power.', 'A council of **notables** advised him.', 'Tradition and the **ancestors** set rules that even the Fon had to respect.'] },
  ]),

  L('hi-lamidats-2', 'hi-f2-cmr-states', '8.2', 'The Fulani lamidats of the north', 12, ['Cameroon', 'Government'], [
    'In the early nineteenth century, the **Fulani jihad** of **Usman dan Fodio** (from 1804) created the Sokoto Caliphate in present-day Nigeria. His follower **Modibo Adama** received a flag in 1806 to spread the jihad in the region later named **Adamawa** after him (Fombina, "the south"), with its capital at **Yola**. From about 1809 Fulani leaders conquered much of northern Cameroon and founded **lamidats**, such as those of **Garoua**, **Maroua** and **Ngaoundéré**.',
    'A **lamidat** was ruled by a **Lamido** (plural Lamibe), a Muslim ruler who owed loyalty to the Emir of Yola, who in turn obeyed the Sultan of Sokoto. The Lamido was helped by a council of notables and officials (in charge of the army, the treasury, justice and the court) and by district and village heads who collected taxes. **Islamic law** and Qur’anic schools spread.',
    'Economy: cattle herding, farming (often by subject peoples), trade and taxes; the lamidats also raided neighbouring peoples for slaves. Many peoples, especially in the Mandara mountains, resisted the Fulani and kept their independence.',
  ], 'hist2-lamidat', 'Sultan of Sokoto, Emir of Yola, Lamido: a chain of loyalty.',
  ['The Lamido owed loyalty to the:', ['Emir of Yola', 'Fon of Bafut', 'Pope', 'Oba of Benin'], 'Who obeyed the Sultan of Sokoto.'],
  [['Lamido', 'The ruler of a Fulani lamidat in northern Cameroon.'], ['Jihad', 'Here, a religious war to spread and reform Islam.']],
  [
    { q: 'Compare a Grassfields fondom and a Fulani lamidat under: ruler, religion, checks on power.', steps: ['Ruler: **Fon** (sacred king) / **Lamido** (Muslim ruler).', 'Religion: **traditional religion and ancestors** / **Islam**.', 'Checks: **Kwifon and notables** / **Emir of Yola, Sultan of Sokoto and Islamic law**.'] },
  ]),

  // ---------- 9. Ghana ----------
  L('hi-ghana-2', 'hi-f2-ghana', '9.1', 'The empire of Ghana: location, government and wealth', 14, ['Africa', 'Empires'], [
    'The empire of **Ghana** (called **Wagadu** by its people) was founded by the **Soninke** in the Sahel between the Senegal and Niger rivers (in present-day **Mauritania and Mali**, far north of modern Ghana). It was powerful from at least the eighth century to the eleventh century. "Ghana" was the title of the **king** (meaning war chief); the Arabs used it as the name of the country.',
    'The capital, **Koumbi Saleh**, was a twin town: one part for the king and his court, with sacred groves, and one part for **Muslim merchants**, with mosques. The king was the supreme judge and commander, helped by ministers (some of them literate Muslims) and governors of provinces. The Arab geographer **al-Bakri** (1068) described his court, his gold-decorated horses and his large army.',
    '**Wealth**: Ghana controlled the trade between the **gold** fields of the south (Wangara, Bambuk) and the **salt** caravans of the north. The king **taxed** every load of salt and copper entering and leaving, and kept all **gold nuggets** for himself (traders could keep only gold dust), so the price of gold stayed high.',
  ], 'hist2-sudanic-map', 'Ghana grew rich as the middleman between gold and salt.',
  ['Why did the king of Ghana keep all gold nuggets?', ['to control the supply and keep the price of gold high', 'because nuggets were useless', 'to give them to Rome', 'to build pyramids'], 'Economic control.'],
  [['Wagadu', 'The Soninke name for the empire of Ghana.'], ['Gold dust', 'Tiny pieces of gold used in trade.']],
  [
    { q: 'Explain two sources of the wealth of ancient Ghana.', steps: ['**Taxes** on the trade in **salt, copper and other goods** entering and leaving the empire.', 'Control of the **gold trade** from the southern gold fields, with the king keeping the nuggets.'] },
  ]),

  L('hi-ghana-decline-2', 'hi-f2-ghana', '9.2', 'The decline of Ghana', 10, ['Africa', 'Empires'], [
    'Ghana declined from the late eleventh century. **Causes**:\n- attacks by the **Almoravids**, Berber Muslim reformers from the Sahara, who took **Koumbi Saleh** in about **1076**\n- the shift of **trade routes** to the east, away from Ghana\n- **drought** and overgrazing, which made the Sahel drier\n- revolts of **vassal states** that wanted independence\n- the rise of rival kingdoms: **Sosso** under Sumanguru took the capital in about 1203, and soon **Mali** replaced them.',
    'Ghana’s greatness was remembered: when the Gold Coast became independent in **1957**, it took the name **Ghana** in honour of the ancient empire.',
  ], 'hist2-ghana-decline', 'Attack, drought, lost trade, revolts: Ghana fell to many blows.',
  ['The Almoravids who attacked Ghana were:', ['Berber Muslim reformers from the Sahara', 'Portuguese sailors', 'Romans', 'Bantu farmers'], 'In the eleventh century.'],
  [['Almoravids', 'A Berber Muslim movement that attacked Ghana in the eleventh century.'], ['Vassal state', 'A state that depends on and pays tribute to a stronger state.']],
  [
    { q: 'Sort the causes of Ghana’s decline into internal and external.', steps: ['External: **Almoravid attacks**; **rival kingdoms** (Sosso, Mali); **shift of trade routes**.', 'Internal: **revolts of vassals**; **drought and overgrazing** of the land.'] },
  ]),

  // ---------- 10. Mali ----------
  L('hi-sundiata-2', 'hi-f2-mali', '10.1', 'Sundiata Keita and the foundation of Mali', 12, ['Africa', 'Empires', 'Heroes'], [
    'The **Mandinka** (Malinke) kingdom of Mali was a small state when **Sumanguru Kante**, king of **Sosso**, conquered the region. According to the **Epic of Sundiata**, told by **griots**, **Sundiata Keita** was a disabled child who learned to walk, went into exile, then returned to lead the Mandinka. In about **1235** he defeated Sumanguru at the battle of **Kirina** and founded the **empire of Mali**.',
    'Sundiata (ruled about 1235 to 1255) made **Niani** his capital, conquered the gold fields and the trade towns of old Ghana, and organised the empire: provinces under governors, a large army, and laws remembered in the Manden Charter (Kurukan Fuga). He encouraged **farming** (cotton, rice) and trade. The rulers of Mali took the title **Mansa** ("king of kings").',
    'The Epic of Sundiata is still sung by griots: it teaches courage, perseverance and respect for destiny, and it is a key **oral source** for the history of Mali.',
  ], 'hist2-mali', 'Sundiata: the Lion of Mali who rose from weakness to victory.',
  ['Sundiata’s capital was:', ['Niani', 'Gao', 'Koumbi Saleh', 'Kano'], 'In the upper Niger valley.'],
  [['Mansa', 'The title of the rulers of Mali.'], ['Epic', 'A long story of a hero, sung or told.']],
  [
    { q: 'Which leadership qualities does the Epic of Sundiata praise?', steps: ['**Perseverance**: he learned to walk despite his disability.', '**Courage**: he returned from exile to fight a powerful king.', '**Organisation**: he united the Mandinka and built a lasting empire.'] },
  ]),

  L('hi-mansamusa-2', 'hi-f2-mali', '10.2', 'Mansa Musa, Timbuktu and the decline of Mali', 14, ['Africa', 'Empires'], [
    '**Mansa Musa** (ruled 1312 to 1337) brought Mali to its height: it stretched from the Atlantic to beyond the Niger bend and controlled the gold of West Africa and the towns of **Timbuktu**, **Gao** and Djenné. In **1324** he made a famous **pilgrimage** (hajj) to **Mecca** with thousands of followers and camels loaded with gold. In **Cairo** he gave away so much gold that its value fell there for years. Europeans heard of him: a Catalan map of 1375 shows him holding a gold nugget.',
    'He brought back scholars and the architect **as-Sahili**, who built mosques such as the **Djinguereber** in Timbuktu. Timbuktu became a great centre of **Islamic learning**, with the **Sankore** mosque-university and thousands of manuscripts. The traveller **Ibn Battuta** visited Mali in 1352 and 1353 and praised its safety and justice.',
    '**Decline**: weak successors and quarrels over succession, revolts of provinces, attacks by the **Mossi** and the **Tuareg** (who took Timbuktu in 1433), and the rise of **Songhai**. By the late fifteenth century Mali was a small kingdom again.',
  ], 'hist2-mansamusa', 'Mansa Musa: gold, pilgrimage and learning.',
  ['The architect who built the Djinguereber mosque for Mansa Musa was:', ['as-Sahili', 'Ibn Battuta', 'Sundiata', 'al-Bakri'], 'Brought back from the hajj.'],
  [['Hajj', 'The pilgrimage to Mecca.'], ['Manuscript', 'A book written by hand.']],
  [
    { q: 'Explain two results of Mansa Musa’s pilgrimage.', steps: ['Mali became **famous** in the Muslim world and in Europe as a land of gold.', 'He brought back **scholars and architects**, so Timbuktu grew as a centre of **Islamic learning**.'] },
  ]),

  // ---------- 11. Songhai ----------
  L('hi-sunniali-2', 'hi-f2-songhai', '11.1', 'Sunni Ali and Askia Muhammad', 14, ['Africa', 'Empires', 'Heroes'], [
    '**Songhai** grew around **Gao** on the river Niger. Its king **Sunni Ali** (also called Sonni Ali Ber, "the Great"; ruled **1464 to 1492**) was a brilliant military leader with a strong cavalry and a fleet of war canoes on the Niger. He took **Timbuktu** in **1468** and **Djenné** after a long siege (about 1473) and built the largest empire of West Africa. He kept traditional beliefs alongside Islam, and the Muslim scholars of Timbuktu disliked him.',
    '**Askia Muhammad** (Askia the Great, ruled **1493 to 1528**), a general, seized power after Sunni Ali’s death. A devout Muslim, he made a pilgrimage to Mecca (1496 to 1497). He was a great **organiser**: he divided the empire into **provinces** under governors, created a **professional army**, standardised weights and measures, encouraged trade, and supported Islamic law and the scholars of Timbuktu, Gao and Djenné.',
  ], 'hist2-songhai', 'Sunni Ali conquered; Askia Muhammad organised.',
  ['Askia Muhammad is remembered mainly as:', ['a great organiser and Muslim ruler', 'the founder of Ghana', 'a Portuguese explorer', 'a Roman emperor'], 'He organised the empire.'],
  [['Siege', 'Surrounding a town to force it to surrender.'], ['Professional army', 'An army of full-time paid soldiers.']],
  [
    { q: 'Compare Sunni Ali and Askia Muhammad.', steps: ['Sunni Ali: a **conqueror** who built the empire by war; kept **traditional beliefs** with Islam.', 'Askia Muhammad: an **organiser** who governed through provinces and a professional army; a **devout Muslim** who supported scholars.'] },
  ]),

  L('hi-askia-2', 'hi-f2-songhai', '11.2', 'The fall of Songhai and the decline of African empires', 12, ['Africa', 'Empires'], [
    'After Askia Muhammad, his sons fought over the throne, weakening Songhai. The sultan of **Morocco**, Ahmad al-Mansur, wanted the gold and salt mines of the Sahara. In **1591** a Moroccan army with **firearms** crossed the desert and defeated the much larger Songhai army at the battle of **Tondibi**. Gao and Timbuktu were occupied, and the empire broke up.',
    'General **factors in the decline of the African empires**:\n- **internal**: succession disputes, weak rulers, revolts of conquered peoples, huge size that was hard to control, conflicts between traditional religion and Islam\n- **external**: invasions (Almoravids against Ghana; Tuareg and Mossi against Mali; Morocco against Songhai), new **firearms**, and the shift of trade from the Sahara to the Atlantic coast after the arrival of the Europeans.',
  ], 'hist2-empire-decline', 'Empires fall from within and from without.',
  ['The Moroccan army won at Tondibi mainly because it had:', ['firearms', 'more soldiers', 'elephants', 'ships on the Niger'], 'Guns against spears and bows.'],
  [['Firearms', 'Guns and other weapons that use gunpowder.'], ['Succession dispute', 'A quarrel over who should become the next ruler.']],
  [
    { q: 'Explain how the arrival of Europeans on the coast helped the decline of the Sudanic empires.', steps: ['Europeans traded directly with **coastal peoples** for gold and other goods.', 'Trade **shifted from the Sahara to the Atlantic coast**.', 'The inland empires lost the **trade taxes** that had made them rich.'] },
  ]),
];
