// History lessons for Form 2 (second part): the forest kingdoms of Benin and
// Oyo, Kongo and Great Zimbabwe, the societies and arts of pre-colonial Africa,
// pre-Columbian America, the European voyages of exploration, Africa’s
// contacts with the world, the transatlantic slave trade and its abolition,
// the coastal and forest societies of Cameroon, the first missionaries, and
// the revision of the year. Original text written for this app.

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

export const LESSONS_2B = [
  // ---------- 12. Benin and Oyo ----------
  L('hi-benin-2', 'hi-f2-forest-kingdoms', '12.1', 'The kingdom of Benin', 12, ['Africa', 'Kingdoms'], [
    'The kingdom of **Benin** was founded by the **Edo** people in the forest of present-day **southern Nigeria** (not the modern Republic of Benin). Its king, the **Oba**, was a sacred ruler, helped by chiefs of the palace and of the town, and by hereditary kingmakers. The Oba **Ewuare the Great** (fifteenth century) expanded the kingdom and rebuilt **Benin City**, surrounding it with huge **walls and moats** (earthworks thousands of kilometres long in total).',
    'Craftsmen were organised in **guilds** that served the palace: brass casters, ivory and wood carvers, weavers and blacksmiths. The famous **Benin Bronzes** (brass plaques and heads made by the lost-wax method) recorded the history of the kings, their warriors and their visitors, including the Portuguese, who arrived about **1485** and traded in pepper, ivory, cloth and later slaves.',
    'In **1897** a British **punitive expedition** burned Benin City, exiled the Oba and took thousands of bronzes to Europe; many are still in European museums, and some have recently been returned to Nigeria.',
  ], 'hist2-benin-oyo', 'Benin: the Oba, the walls, the guilds and the bronzes.',
  ['The Benin Bronzes were made by:', ['guilds of brass casters using the lost-wax method', 'Portuguese sailors', 'British soldiers', 'Arab traders'], 'Royal craftsmen.'],
  [['Oba', 'The king of Benin.'], ['Guild', 'An organisation of craftsmen of the same trade.'], ['Punitive expedition', 'A military attack made to punish.']],
  [
    { q: 'Explain why the Benin Bronzes are important historical sources.', steps: ['They show **kings, warriors, ceremonies and visitors** such as the Portuguese.', 'They record events of the kingdom’s **history** in pictures.', 'They prove the **high skill** of Benin’s craftsmen centuries ago.'] },
  ]),

  L('hi-oyo-2', 'hi-f2-forest-kingdoms', '12.2', 'The Oyo empire and the Yoruba cities', 14, ['Africa', 'Kingdoms', 'Government'], [
    'The **Yoruba** of south-western Nigeria lived in many city-states, each with its king. They regard **Ile-Ife** as their sacred place of origin, where, by tradition, **Oduduwa** founded the first kingdom; Ife is famous for its naturalistic **bronze and terracotta heads**. In the savanna north of the forest, **Oyo** became the most powerful Yoruba state, especially in the seventeenth and eighteenth centuries, thanks to its **cavalry** and trade.',
    'Government of Oyo, a system of **checks and balances**:\n- the **Alafin**, the king, sacred and powerful\n- the **Oyo Mesi**, a council of seven nobles led by the **Bashorun**, which chose the Alafin and could force a tyrant to commit suicide\n- the **Ogboni**, a society of elders and priests, which balanced the Oyo Mesi\n- the army under its commander, the Are-Ona-Kakanfo, who lived outside the capital.',
    'Oyo declined in the early nineteenth century because of internal conflicts and the Fulani jihad (the loss of Ilorin), and was abandoned in the 1830s. **Comparison**: the savanna empires (Ghana, Mali, Songhai) grew from the trans-Saharan trade and Islam; the forest kingdoms (Benin, Oyo) grew from farming, crafts and later trade with the Atlantic coast, with sacred kings checked by councils.',
  ], 'hist2-oyo-government', 'Alafin, Oyo Mesi, Ogboni: each could check another.',
  ['The leader of the Oyo Mesi was the:', ['Bashorun', 'Alafin', 'Oba', 'Mansa'], 'He could challenge the king.'],
  [['Alafin', 'The king of Oyo.'], ['Checks and balances', 'A system in which each part of government limits the others.'], ['Oyo Mesi', 'The council of nobles of Oyo.']],
  [
    { q: 'Show how the government of Oyo prevented abuse of power.', steps: ['The **Oyo Mesi** chose the Alafin and could reject a tyrant.', 'The **Ogboni** balanced the power of the Oyo Mesi.', 'The army commander lived **outside the capital**, so he could not easily seize power.'] },
  ]),

  // ---------- 13. Kongo and Zimbabwe ----------
  L('hi-kongo-2', 'hi-f2-kongo-zimbabwe', '13.1', 'The kingdom of Kongo and Queen Nzinga', 14, ['Africa', 'Kingdoms', 'Heroes'], [
    'The kingdom of **Kongo** grew from the fourteenth century south of the lower **Congo River** (in parts of present-day Angola, the DR Congo and the Republic of Congo). Its king, the **Manikongo**, ruled from **Mbanza Kongo** through provincial governors; the economy was based on farming, iron working, weaving of raffia cloth and trade, with **nzimbu** shells as money.',
    'The Portuguese navigator **Diogo Cão** reached Kongo in **1483**. The king converted to Christianity, and King **Nzinga Mbemba**, called **Afonso I** (ruled 1509 to 1543), welcomed priests and schools. But the Portuguese slave trade spread violence; Afonso wrote letters to the king of Portugal **protesting against the slave trade**. Kongo was weakened by wars and slave raids and declined after the seventeenth century.',
    'To the south, **Queen Nzinga** (Njinga Mbande, about 1583 to 1663), ruler of **Ndongo** and **Matamba**, was a skilled diplomat and warrior who resisted the Portuguese for decades. She is remembered as one of Africa’s great heroines.',
  ], 'hist2-kongo-zimbabwe', 'Afonso I protested; Nzinga resisted.',
  ['Kongo used which shells as money?', ['nzimbu', 'cowries only', 'conch', 'oyster'], 'Collected on the coast.'],
  [['Manikongo', 'The king of Kongo.'], ['Diplomacy', 'Managing relations between states by negotiation.']],
  [
    { q: 'Why did King Afonso I write to the king of Portugal?', steps: ['Portuguese traders were **capturing and enslaving** his people, even nobles.', 'The trade caused **disorder and wars** in his kingdom.', 'He asked Portugal to **send teachers and priests, not slave traders**.'] },
  ]),

  L('hi-zimbabwe-2', 'hi-f2-kongo-zimbabwe', '13.2', 'Great Zimbabwe', 12, ['Africa', 'Kingdoms'], [
    '**Great Zimbabwe** is a ruined stone city in present-day **Zimbabwe**, built between about the **eleventh and fifteenth centuries** by ancestors of the **Shona** people. "Zimbabwe" means "houses of stone". Its **Great Enclosure** has walls more than 10 metres high, built of granite blocks fitted **without mortar**, and a solid conical tower. At its height perhaps 10 000 to 18 000 people lived there.',
    'Its wealth came from **cattle**, farming and **long-distance trade**: gold and ivory were carried to the port of **Sofala** and the **Swahili coast**, and exchanged for cloth, glass beads and porcelain; **Chinese porcelain** and Persian pottery have been found in the ruins.',
    'The city declined in the fifteenth century, probably because of overpopulation, exhausted soils and wood, and the shift of the gold trade northwards to the **Mutapa** state. European colonists once claimed that Africans could not have built it, but archaeologists proved that it is an **African achievement**. In **1980** the country took the name **Zimbabwe**.',
  ], 'hist2-zimbabwe', 'Houses of stone, built by Africans, rich from gold and trade.',
  ['Great Zimbabwe’s walls were built:', ['of granite blocks without mortar', 'of concrete', 'of mud brick', 'of wood'], 'Dry-stone building.'],
  [['Dry-stone wall', 'A wall of stones fitted together without mortar.'], ['Enclosure', 'An area surrounded by a wall.']],
  [
    { q: 'What evidence shows that Great Zimbabwe traded with distant lands?', steps: ['**Chinese porcelain** and Persian pottery found in the ruins.', '**Glass beads** from the Indian Ocean trade.', 'Its gold and ivory went to **Sofala** and the **Swahili coast**.'] },
  ]),

  // ---------- 14. African societies and arts ----------
  L('hi-precolonial-economy-2', 'hi-f2-africa-society', '14.1', 'Land, economy and government in pre-colonial Africa', 14, ['Africa', 'Society'], [
    '**Land tenure**: in most African societies land was **communal**: it belonged to the community or lineage, and the chief or lineage head held it **in trust** and gave families the right to use it. Land could not usually be sold to outsiders.',
    '**Economy**: farming (shifting cultivation in the forest, grain in the savanna), herding, fishing, hunting, crafts (iron working, weaving, pottery, carving) and **trade**: local markets on fixed days, regional trade and long-distance trade (trans-Saharan, Indian Ocean). Exchange was by **barter** and with **currencies** such as cowrie shells, iron bars, copper and brass rings (manillas), cloth and salt.',
    '**Government** took many forms, which disproves the myth that Africa had no political organisation:\n- **centralised states**: empires and kingdoms with kings, councils, officials, armies and taxes (Mali, Benin, Oyo, the Grassfields fondoms)\n- **stateless or segmentary societies**, governed by **lineage heads**, **councils of elders**, **age grades** and **secret societies** (the Igbo of Nigeria; the Beti and Bassa of Cameroon)\nWomen played important roles as queen mothers, traders, farmers and in women’s societies.',
  ], 'hist2-africa-society', 'Centralised or segmentary: two African ways of governing.',
  ['Communal land tenure means that land:', ['belongs to the community and is used by families', 'is sold freely to anyone', 'belongs to foreigners', 'has no owner and no rules'], 'Held in trust.'],
  [['Land tenure', 'The system of rights to hold and use land.'], ['Segmentary society', 'A society governed by lineages and elders without a central ruler.'], ['Age grade', 'A group of people of similar age with shared duties.']],
  [
    { q: 'Give two examples that disprove the myth that pre-colonial Africa had no government.', steps: ['**Centralised states** such as Mali and Oyo had kings, councils, officials, armies and taxes.', '**Segmentary societies** such as the Igbo or the Beti governed themselves through **elders, councils and age grades**.'] },
  ]),

  L('hi-african-arts-2', 'hi-f2-africa-society', '14.2', 'African arts: forms, materials, uses and symbols', 12, ['Africa', 'Culture'], [
    '**African art** includes sculpture, masks, metalwork, pottery, textiles, beadwork, architecture, music and dance. **Forms**: **court (palace) art** for kings (thrones, crowns, staffs, regalia); **sacred art** for religion and rituals (masks, shrine figures, ancestor figures); **everyday art** (pots, stools, baskets, cloth).',
    '**Materials**: wood, clay (the **Nok terracottas** of Nigeria, more than 2 000 years old; the Sao terracottas of Cameroon), bronze and brass (Ife, Benin, Bamum), ivory, iron, beads, raffia and cotton.',
    '**Uses and symbolism**: art shows power (a Fon’s beaded throne, the leopard as a royal symbol), honours ancestors, educates through masked performances, keeps order (masks of regulatory societies), marks rites of passage and records history (Benin plaques). **Cameroon** is famous for the art of the **Grassfields** (Bamum and Bamileke thrones, masks and beaded figures, the brass work of Foumban), the Sao terracottas and the carvings of the forest peoples.',
  ], 'hist2-african-arts', 'Ask of any object: who made it, from what, for what, and what does it mean?',
  ['A beaded throne made for a Fon is an example of:', ['court art', 'everyday art', 'tourist art only', 'rock art'], 'Art of power.'],
  [['Regalia', 'The symbols of royal power, such as crowns and thrones.'], ['Symbolism', 'The use of images or objects to stand for ideas.']],
  [
    { q: 'Explain three uses of masks in African societies.', steps: ['**Religious**: they represent spirits or ancestors in rituals.', '**Social control**: masks of regulatory societies enforce rules.', '**Rites of passage and festivals**: they appear at initiations and funerals.'] },
  ]),

  // ---------- 15. Pre-Columbian America ----------
  L('hi-maya-2', 'hi-f2-americas', '15.1', 'The Maya, the Aztecs and the Inca', 14, ['World history', 'Americas'], [
    'Before Europeans arrived, America had great civilisations:\n- the **Maya** of southern Mexico and Central America (classic period about AD 250 to 900): city-states with stone pyramid-temples (Tikal, Chichén Itzá), a **writing** system of glyphs, a precise **calendar**, advanced **astronomy** and the concept of **zero**\n- the **Aztecs** of central Mexico, who founded their capital **Tenochtitlan** on an island in a lake in **1325** and built a tribute empire; they practised farming on floating gardens (chinampas) and human sacrifice in their religion\n- the **Inca** of the **Andes** mountains of South America (fifteenth century), with their capital **Cusco**: a well-organised empire with about 40 000 kilometres of roads, terraced farming, stone cities such as **Machu Picchu**, and **quipu** (knotted cords) for records.',
    'These peoples grew **maize**, potatoes, beans, tomatoes, cocoa and many other crops that later spread to the whole world, including Africa (cassava, maize, groundnuts and cocoa came to Africa from America).',
  ], 'hist2-americas', 'Maya: writing and calendar. Aztecs: Tenochtitlan. Inca: roads and Machu Picchu.',
  ['Which crop came to Africa from America?', ['cassava', 'sorghum', 'yams', 'oil palm'], 'Also maize, groundnuts and cocoa.'],
  [['Pre-Columbian', 'Belonging to America before Columbus arrived in 1492.'], ['Quipu', 'Knotted cords used by the Inca for records.']],
  [
    { q: 'Compare the Maya, Aztecs and Inca under: region, capital or city, achievement.', steps: ['Maya: **southern Mexico and Central America**; Tikal; **writing and calendar**.', 'Aztecs: **central Mexico**; **Tenochtitlan**; floating gardens and a tribute empire.', 'Inca: **the Andes**; **Cusco**; roads, terraces and Machu Picchu.'] },
  ]),

  L('hi-aztec-inca-2', 'hi-f2-americas', '15.2', 'The Spanish conquest of America', 12, ['World history', 'Americas'], [
    'After **Columbus** reached the Caribbean in **1492**, Spanish conquerors (**conquistadors**) attacked the American empires. **Hernán Cortés** landed in Mexico in 1519 and, with Native American allies who hated the Aztecs, took Tenochtitlan in **1521**. **Francisco Pizarro** captured the Inca emperor Atahualpa in **1532** and conquered the Inca empire.',
    'Reasons for the Spanish victory: **diseases** brought from Europe (smallpox, measles), against which Native Americans had no immunity, killed millions; Spanish **steel weapons, guns and horses**; **allies** among peoples oppressed by the Aztecs; and divisions within the Inca empire (a civil war).',
    'Consequences: the collapse of the native population; Spanish and Portuguese colonies; **silver** mines and plantations worked by forced labour; and, as native workers died, the growth of the **transatlantic slave trade**, which brought millions of Africans to America.',
  ], 'hist2-conquest', 'Disease, steel and allies explain how a few hundred Spaniards won.',
  ['The Aztec capital fell to Cortés in:', ['1521', '1492', '1532', '1325'], 'With his native allies.'],
  [['Conquistador', 'A Spanish conqueror of America.'], ['Immunity', 'The body’s ability to resist a disease.']],
  [
    { q: 'Explain how the conquest of America led to the transatlantic slave trade.', steps: ['Native Americans **died in great numbers** from diseases and forced labour.', 'The colonists needed **workers** for mines and plantations.', 'They brought **enslaved Africans** across the Atlantic to replace them.'] },
  ]),

  // ---------- 16. Explorations ----------
  L('hi-motives-2', 'hi-f2-explorations', '16.1', 'Why Europeans explored: motives and means', 12, ['World history', 'Explorations'], [
    '**Motives** of the voyages of exploration (fifteenth and sixteenth centuries), often summed up as "**God, gold and glory**":\n- **economic**: to find **gold**, ivory and slaves in Africa and a **sea route to India** for **spices** (pepper, cloves, cinnamon), avoiding the Muslim and Venetian middlemen of the Mediterranean, especially after the Ottomans took Constantinople (1453)\n- **religious**: to spread **Christianity** and to find the legendary Christian king **Prester John**\n- **political**: national pride, rivalry between Portugal and Spain, and empire\n- **scientific curiosity**, encouraged by the Renaissance.',
    '**Means**: the **caravel**, a light ship with triangular (lateen) sails that could sail against the wind; the magnetic **compass** (from China); the **astrolabe** and quadrant to find latitude; better **maps** (portolan charts); and royal support, especially from Portugal’s **Prince Henry the Navigator** (1394 to 1460), who gathered sailors, map makers and shipbuilders.',
  ], 'hist2-motives', 'God, gold, glory: and the caravel, compass and astrolabe to get there.',
  ['The astrolabe helped sailors to find:', ['their latitude from the stars', 'gold', 'fish', 'the time of day only'], 'Navigation by the stars.'],
  [['Caravel', 'A light, fast sailing ship used by the Portuguese.'], ['Latitude', 'The distance north or south of the equator.']],
  [
    { q: 'Why did Europeans want a sea route to India?', steps: ['They wanted **spices** to preserve and flavour food.', 'The land routes were controlled by **Muslim and Venetian middlemen**, who made spices expensive.', 'A **sea route round Africa** would let them buy spices directly and cheaply.'] },
  ]),

  L('hi-voyages-2', 'hi-f2-explorations', '16.2', 'The great voyages and the first Europeans in Cameroon', 14, ['World history', 'Explorations', 'Cameroon'], [
    'Milestones: the Portuguese passed **Cape Bojador** (1434), reached the Gold Coast (1471) and the **Cameroon coast** (about **1472**, with **Fernão do Pó**), and the Congo (**Diogo Cão**, 1483). **Bartolomeu Dias** rounded the **Cape of Good Hope** (1488). **Vasco da Gama** reached **India** by sea (1498). For Spain, **Christopher Columbus** reached the **Caribbean** (1492), believing he was in Asia. **Pedro Álvares Cabral** reached Brazil (1500). Ferdinand **Magellan**’s expedition made the first voyage **round the world** (1519 to 1522).',
    'On the **Cameroon coast**, the Portuguese named the Wouri estuary **Rio dos Camarões** after its prawns. They traded with coastal peoples for **ivory**, pepper and later **slaves**, and set up trading posts on the islands (Fernando Po, São Tomé). They were followed by the **Dutch** (seventeenth century), then the **British** and the **French**, and in the nineteenth century the **Germans**.',
    '**Consequences of the voyages**: new trade routes and European empires; the exchange of plants and animals between continents; the destruction of American civilisations; and the beginning of the **transatlantic slave trade**.',
  ], 'hist2-voyages', 'Learn the voyages as a timeline from 1434 to 1522.',
  ['Who sailed round the Cape of Good Hope in 1488?', ['Bartolomeu Dias', 'Vasco da Gama', 'Columbus', 'Magellan'], 'The southern tip of Africa.'],
  [['Trading post', 'A settlement set up for trade.'], ['Circumnavigation', 'Sailing all the way round the world.']],
  [
    { q: 'Put in order: Columbus reaches America; Portuguese on the Cameroon coast; Vasco da Gama reaches India; Dias rounds the Cape.', steps: ['**About 1472**: Portuguese on the Cameroon coast.', '**1488**: Dias rounds the Cape.', '**1492**: Columbus reaches America.', '**1498**: Vasco da Gama reaches India.'] },
  ]),

  // ---------- 17. Contacts with the world ----------
  L('hi-eastafrica-2', 'hi-f2-contacts', '17.1', 'The Swahili coast and the Indian Ocean trade', 14, ['Africa', 'Trade'], [
    'For more than a thousand years the coast of **East Africa** traded across the **Indian Ocean** with Arabia, Persia, India and China. Ships called **dhows** sailed with the **monsoon winds**: towards Africa in one season and back in the other.',
    'Trading towns grew into **Swahili city-states**: **Kilwa**, **Mombasa**, **Malindi**, **Zanzibar**, Lamu and **Sofala**. Their people mixed African (Bantu) and Arab and Persian ancestry and culture. They spoke **Swahili**, a Bantu language with many Arabic words, adopted **Islam** and built stone mosques and houses. Exports: **gold** (from Zimbabwe through Sofala), **ivory**, timber, rhinoceros horn, and slaves; imports: cloth, beads, porcelain, glass and spices. Kilwa minted its own coins. The Chinese admiral **Zheng He** visited the coast with great fleets in the early fifteenth century.',
    'From **1498** the **Portuguese** (Vasco da Gama) arrived, attacked the cities and tried to control the trade; later the **Omani Arabs** drove them out, and in the nineteenth century **Zanzibar** became a centre of the clove plantations and of a cruel slave trade. Similarly, **West Africa** and the **Sudan** had contacts with the **Arab world** through the trans-Saharan trade, which brought Islam, Arabic writing and a mixing of peoples and cultures.',
  ], 'hist2-swahili', 'Monsoon winds, dhows, Swahili towns: Africa’s window on the Indian Ocean.',
  ['The ships used in the Indian Ocean trade were:', ['dhows', 'caravels', 'galleys', 'canoes only'], 'Sailing ships with triangular sails.'],
  [['Monsoon', 'A seasonal wind that changes direction during the year.'], ['Swahili', 'The Bantu language and culture of the East African coast.'], ['City-state', 'A city that governs itself as an independent state.']],
  [
    { q: 'Explain how the monsoon winds shaped the Indian Ocean trade.', steps: ['From about November to March the wind blows **from Asia towards Africa**.', 'From about April to September it blows **from Africa towards Asia**.', 'Traders **sailed with one monsoon and returned with the next**, so the trade followed the seasons.'] },
  ]),

  L('hi-cmr-first-contact-2', 'hi-f2-contacts', '17.2', 'Cameroon’s first contacts with Europe and the origin of its name', 12, ['Cameroon', 'Trade'], [
    'Cameroon’s first contacts with the outside world came through the **trans-Saharan routes** in the north (via Kanem-Bornu) and from the fifteenth century through the **Atlantic coast**. The **coastal peoples** (Duala, Bakweri, Isubu of Bimbia, Batanga and others) traded with European ships: they supplied ivory, palm oil, pepper and slaves, which they obtained from the interior, and received cloth, iron bars, guns, gunpowder, alcohol, salt, beads and mirrors. **Trade posts** and ships anchored in the estuaries. Contact also produced people of mixed descent and new words, foods and goods.',
    '**The name Cameroon**:\n- the Portuguese called the Wouri estuary **Rio dos Camarões** ("river of prawns"), about 1472\n- the name spread to the coast and the mountain (in Spanish **Camarones**, in English the **Cameroons**)\n- the Germans used **Kamerun** for their colony from **1884**\n- after the First World War the territory was divided into French **Cameroun** and the British **Cameroons**\n- today: the **Republic of Cameroon** (in French, République du Cameroun).',
  ], 'hist2-cmr-name', 'Camarões, Cameroons, Kamerun, Cameroun, Cameroon: one name, many rulers.',
  ['The German form of the name Cameroon was:', ['Kamerun', 'Cameroun', 'Camarones', 'Camarões'], 'From 1884.'],
  [['Coastal trade', 'Trade between coastal peoples and foreign ships.'], ['Métissage', 'The mixing of peoples and cultures.']],
  [
    { q: 'Trace the evolution of the name Cameroon from the fifteenth century to today.', steps: ['About 1472: Portuguese **Rio dos Camarões**.', 'English **Cameroons**; German **Kamerun** (1884).', 'French **Cameroun** and British **Cameroons** after 1916.', 'Today: **Cameroon**.'] },
  ]),

  // ---------- 18. Slave trade ----------
  L('hi-triangular-2', 'hi-f2-slave-trade', '18.1', 'The origins and the triangular trade', 14, ['Africa', 'Slave trade'], [
    'Slavery existed in many societies, but the **transatlantic slave trade** was unique in its scale and cruelty. It began in the fifteenth century when the Portuguese took Africans to Europe and to the sugar plantations of Atlantic islands. After 1492, the **plantations** (sugar, tobacco, cotton, coffee) and mines of the **Americas** needed huge numbers of workers, and the native population had collapsed, so Europeans turned to Africa. Between the sixteenth and the nineteenth centuries about **12 million** Africans were shipped across the Atlantic; more than a million died on the voyage.',
    'The **triangular trade**:\n1. ships left **Europe** (Liverpool, Bristol, Nantes, Lisbon) with **manufactured goods**: cloth, guns, gunpowder, iron bars, alcohol, beads\n2. on the **African coast** they exchanged them for **captives**, supplied by African middlemen and rulers\n3. the **Middle Passage**: captives were chained and packed tightly in ships to the **Americas**, a voyage of several weeks with hunger, disease and death\n4. in the Americas they were **sold** to plantation owners, and the ships returned to Europe with **sugar, cotton, tobacco and rum**.',
    '**How captives were obtained**: wars and raids between states, kidnapping, punishment for crimes or debts, and tribute. In **Cameroon**, slaves were shipped from **Douala**, **Bimbia** (near Limbe, now a memorial site) and other points of the coast.',
  ], 'hist2-triangular', 'Goods to Africa, captives to America, plantation goods to Europe.',
  ['Which side of the triangle was the Middle Passage?', ['Africa to the Americas', 'Europe to Africa', 'Americas to Europe', 'Africa to Asia'], 'The voyage of the captives.'],
  [['Triangular trade', 'Trade between Europe, Africa and the Americas.'], ['Middle Passage', 'The voyage of enslaved Africans across the Atlantic.'], ['Plantation', 'A large farm growing one crop for export.']],
  [
    { q: 'Describe conditions on the Middle Passage.', steps: ['Captives were **chained** and packed **tightly** below deck.', 'There was little **air, food and water**, and diseases spread quickly.', 'Many **died** or resisted by revolts and refusing to eat.'] },
  ]),

  L('hi-slave-effects-2', 'hi-f2-slave-trade', '18.2', 'The effects of the transatlantic slave trade', 12, ['Africa', 'Slave trade'], [
    '**Effects on Africa**:\n- the loss of millions of young, strong men and women: **depopulation** in many regions\n- **wars**, raids and **insecurity**, as states fought to capture people to sell\n- the decline of local **crafts** and farming, replaced by imported goods and the trade in people\n- the strengthening of some coastal states and middlemen, and the destruction of others\n- deep **human suffering** and racist ideas that were later used to justify colonial rule.',
    '**Effects on the Americas**: a large **African diaspora** (Brazil, the Caribbean, the United States) whose labour built the plantation economies; African cultures influenced music, religion, food and language.',
    '**Effects on Europe**: great profits for ports, bankers and plantation owners, which helped to finance the **Industrial Revolution**.',
  ], 'hist2-slave-effects', 'Africa lost people; America gained labour; Europe gained capital.',
  ['The African diaspora means:', ['people of African descent living outside Africa', 'African kings', 'a kind of ship', 'an African language'], 'The result of the slave trade.'],
  [['Diaspora', 'A people scattered far from their homeland.'], ['Depopulation', 'A large fall in the number of people in an area.']],
  [
    { q: 'Explain two ways in which the slave trade harmed Africa’s development.', steps: ['It removed millions of **young workers**, so farming and crafts declined.', 'It caused **wars and insecurity**, so trade, farming and learning suffered.'] },
  ]),

  // ---------- 19. Abolition ----------
  L('hi-abolition-causes-2', 'hi-f2-abolition', '19.1', 'Why the slave trade was abolished', 14, ['Africa', 'Slave trade'], [
    '**Humanitarian and religious causes**: Christian groups such as the **Quakers** and evangelicals, and thinkers of the Enlightenment, argued that slavery was cruel and against human rights. In Britain, **Granville Sharp**, **Thomas Clarkson** and **William Wilberforce** led the campaign; former slaves such as **Olaudah Equiano** (whose autobiography appeared in 1789) told the truth about it.',
    '**Resistance of the enslaved**: revolts on ships and plantations, escape, and above all the **Haitian Revolution** (1791 to 1804), led by **Toussaint Louverture**, in which enslaved people defeated their masters and created the first free black republic.',
    '**Economic causes**: the **Industrial Revolution** made Britain less dependent on slave plantations; factories needed **raw materials** (palm oil, cotton, rubber) and **markets** in Africa rather than captives; economists such as **Adam Smith** argued that free labour was more productive. **Main laws**: Denmark (1792, in force 1803); **Britain abolished the slave trade in 1807** and **slavery in 1833**; the United States banned the import of slaves in 1808 and abolished slavery in **1865**; France abolished slavery finally in **1848**; Brazil in 1888.',
  ], 'hist2-abolition', 'Humanitarian voices, the revolt of the enslaved and new economic needs ended the trade.',
  ['The first free black republic, created by a revolution of the enslaved, was:', ['Haiti (1804)', 'Liberia', 'Sierra Leone', 'Brazil'], 'Led by Toussaint Louverture.'],
  [['Abolition', 'The official ending of a practice such as slavery.'], ['Abolitionist', 'A person who campaigned to end slavery.']],
  [
    { q: 'Give one humanitarian, one economic and one political reason for the abolition of the slave trade.', steps: ['Humanitarian: campaigners such as **Wilberforce and Equiano** showed its cruelty.', 'Economic: the **Industrial Revolution** needed raw materials and markets, not slaves.', 'Political: **revolts** such as the Haitian Revolution made slavery dangerous for the masters.'] },
  ]),

  L('hi-abolition-cmr-2', 'hi-f2-abolition', '19.2', 'Enforcing abolition on the Cameroon coast', 12, ['Cameroon', 'Slave trade'], [
    'After 1807 Britain sent a naval squadron (the **West Africa Squadron**) to stop slave ships, freed captives and settled many of them in **Freetown** (Sierra Leone). Britain signed **anti-slave-trade treaties** with African rulers, offering gifts and trade in exchange for ending the trade.',
    'On the Cameroon coast, the Duala kings **King Akwa** and **King Bell** signed such treaties with Britain in **1840** and **1841**, promising to stop selling slaves in return for yearly gifts. The rulers of **Bimbia** also made agreements. The British naval base on **Fernando Po** (Clarence, now Malabo) watched the coast.',
    'In place of slaves, the coast developed "**legitimate trade**" in **palm oil**, palm kernels and ivory, needed by British factories for soap, candles and machine oil. The Duala remained powerful **middlemen** in this new trade. But slavery inside Africa continued for decades, and the new trade relations prepared the way for missionaries and, later, for colonial rule.',
  ], 'hist2-abolition-timeline', 'Treaties, patrols and palm oil replaced the trade in people.',
  ['What did the Duala kings receive for signing anti-slave-trade treaties?', ['yearly gifts and trade', 'nothing', 'British citizenship', 'colonies in Europe'], 'An incentive to stop.'],
  [['Legitimate trade', 'Trade in goods such as palm oil that replaced the slave trade.'], ['Treaty', 'A formal agreement between states or rulers.']],
  [
    { q: 'Explain why palm oil became important after abolition.', steps: ['British **factories** needed palm oil for **soap, candles and lubricants**.', 'Coastal rulers needed a **new source of income** after the slave trade ended.', 'So palm oil became the main **legitimate trade** of the coast.'] },
  ]),

  // ---------- 20. Coastal and forest societies ----------
  L('hi-duala-2', 'hi-f2-coastal-societies', '20.1', 'The Duala: a coastal society', 12, ['Cameroon', 'Society'], [
    'The **Duala** (Douala) are a **Sawa** (coastal) people who settled on both banks of the **Wouri** estuary. Their society was organised in **lineages** descended from common ancestors; by the nineteenth century the main lineages had their own **kings** and quarters: the **Bell** (Bonanjo), the **Akwa** (Bonaku), the **Deido** (Bonebela) and the people of Bonaberi. The kings’ power depended on wealth from trade and the support of lineage heads and councils.',
    '**Economy**: fishing, canoe building and above all **trade**: the Duala were **middlemen** who controlled the trade between European ships and the peoples of the interior (the Abo, Bakoko, Bassa and others), first in slaves and ivory, later in palm oil. They kept the interior peoples from reaching the coast directly.',
    '**Culture and religion**: belief in God (Loba), the ancestors and the water spirits (**Miengu**); the **Ngondo**, the traditional assembly of the Sawa peoples, settled disputes and is celebrated today as a great cultural festival on the Wouri. The Duala were among the first in Cameroon to receive missionaries and Western schooling.',
  ], 'hist2-duala', 'Lineages, kings, middlemen and the Ngondo.',
  ['The Duala lineage whose quarter is Bonanjo is the:', ['Bell', 'Akwa', 'Deido', 'Bassa'], 'King Bell’s lineage.'],
  [['Lineage', 'A group descended from a common ancestor.'], ['Sawa', 'The coastal peoples of Cameroon.']],
  [
    { q: 'Why did the Duala try to stop interior peoples from trading directly with Europeans?', steps: ['As **middlemen** they bought from the interior and sold to Europeans at a **profit**.', 'Direct trade would have **ended their profits** and their power.', 'So they **controlled the routes** along the rivers to the coast.'] },
  ]),

  L('hi-bassa-beti-2', 'hi-f2-coastal-societies', '20.2', 'The Bassa and the Beti: forest societies', 12, ['Cameroon', 'Society'], [
    'The **Bassa** live between the Sanaga and the Nyong rivers, from the coast towards the Centre; the **Beti** (Ewondo, Eton, Bulu, Fang and related groups) live in the forest of the Centre and South. Both were **segmentary (stateless) societies**: there was no central king. Each **lineage** or **clan** was led by its elders and the heads of large households; villages were independent, and alliances were made by marriage and agreements.',
    '**Government**: disputes were settled by **councils of elders** and by palavers; leadership went to men who were wealthy, generous, wise or brave (among the Beti, a big man called **nkukuma**). Among the **Bassa**, the **Mbog**, the traditional religious and judicial institution, maintained moral order and justice.',
    '**Economy and culture**: shifting cultivation (cassava, plantains, groundnuts, cocoyams), hunting, fishing, iron working and trade with the coast. Initiation rites marked the passage to adulthood: the **So** for Beti young men and the **Mevungu** for Beti women. Belief in a creator God (**Zambe** among the Beti), the ancestors and protective spirits.',
  ], 'hist2-duala-beti', 'No king, but elders, councils and lineages kept order.',
  ['A Beti "big man" whose leadership came from wealth and generosity was called:', ['nkukuma', 'Fon', 'Lamido', 'Oba'], 'Leadership by merit and wealth.'],
  [['Palaver', 'A traditional meeting to discuss and settle a dispute.'], ['Clan', 'A group of related lineages.']],
  [
    { q: 'Compare the Duala and the Beti under: type of society, leaders, economy.', steps: ['Type: Duala, **lineages with kings**; Beti, **segmentary (no central ruler)**.', 'Leaders: Duala **kings and lineage heads**; Beti **elders and big men**.', 'Economy: Duala **fishing and middleman trade**; Beti **farming, hunting and iron working**.'] },
  ]),

  // ---------- 21. Missionaries ----------
  L('hi-merrick-2', 'hi-f2-missionaries', '21.1', 'Joseph Merrick and the arrival of the Baptists', 12, ['Cameroon', 'Missions'], [
    'The first Christian missionaries to settle in Cameroon came from the **Baptist Missionary Society (BMS)** of London, which had a base on **Fernando Po** (Bioko) and wanted to work among freed slaves and coastal peoples after abolition.',
    '**Joseph Merrick**, a Jamaican missionary of African descent, arrived in **1843** and in **1844** opened a mission at **Bimbia**, among the Isubu people. He built a school, set up a **printing press**, and translated parts of the Bible and a grammar into the **Isubu** language. He travelled inland to preach. Worn out by illness, he died at sea in 1849.',
    'Other Jamaican Christians, such as **Joseph Jackson Fuller**, also worked in the mission. The arrival of black missionaries from Jamaica, descendants of enslaved Africans, linked the African diaspora with Cameroon.',
  ], 'hist2-missionaries', 'Merrick at Bimbia: school, press and the first translations.',
  ['Joseph Merrick translated parts of the Bible into the language of the:', ['Isubu of Bimbia', 'Fulani', 'Bamum', 'Shuwa Arabs'], 'At Bimbia.'],
  [['Missionary', 'A person sent to spread a religion.'], ['Printing press', 'A machine for printing books and papers.']],
  [
    { q: 'Why is Joseph Merrick important in the history of Cameroon?', steps: ['He opened one of the first **Christian missions** in Cameroon (Bimbia, 1844).', 'He started a **school** and a **printing press**.', 'He was among the first to **write and print** in a Cameroonian language (Isubu).'] },
  ]),

  L('hi-saker-2', 'hi-f2-missionaries', '21.2', 'Alfred Saker, Victoria and the effects of the early missions', 14, ['Cameroon', 'Missions'], [
    '**Alfred Saker**, an English missionary of the BMS, arrived in 1844 and in **1845** founded the **Bethel** mission in **Douala** (in Akwa town). He opened schools, taught crafts such as brick making and carpentry, and translated the **Bible** into the **Duala** language (the New Testament by 1862, the whole Bible by **1872**). In **1858**, when the Spanish Catholic authorities of Fernando Po expelled the Protestant missionaries, Saker bought land from the king of Bimbia and founded **Victoria** (today **Limbe**) as a home for the Christians who had to leave the island.',
    '**Positive effects** of the early missions: **schools** and **literacy**; the writing and printing of Cameroonian languages (Isubu, Duala); new skills and crafts; health care; opposition to the slave trade and to some harmful practices.',
    '**Negative effects**: some missionaries **condemned African customs**, religion and art as pagan; divisions between Christians and non-Christians; and the missions, by opening the coast and asking for protection, helped to prepare the way for **colonial rule** (the Germans annexed Cameroon in 1884). After 1884 the German Basel Mission (1886) and Catholic Pallottine Fathers (1890) took over much of the work.',
  ], 'hist2-mission-effects', 'Saker: Bethel (1845), Victoria (1858), the Duala Bible (1872).',
  ['Victoria (now Limbe) was founded by Alfred Saker in:', ['1858', '1845', '1884', '1914'], 'For Christians expelled from Fernando Po.'],
  [['Translation', 'Putting a text from one language into another.'], ['Pagan', 'A word once used by missionaries for followers of traditional religions.']],
  [
    { q: 'Give two positive and two negative effects of the early missions in Cameroon.', steps: ['Positive: **schools and literacy**; **writing and printing** of Cameroonian languages.', 'Negative: **condemnation of African customs**; they helped **prepare colonial rule**.'] },
  ]),

  // ---------- 22. Revision ----------
  L('hi-review-2', 'hi-f2-review', '22.1', 'Revision: medieval Europe, African kingdoms and pre-colonial Cameroon', 14, ['Revision'], [
    'Key points of the year:\n- **Medieval Europe** (476 to 1453): Charlemagne (800); feudalism (fiefs, lords, knights, serfs) and its decline (Black Death, towns); the Church, monasteries and the Crusades (1095 to 1291); the Renaissance and printing (about 1450)\n- **Islamic civilisation**: the caliphates (Rashidun, Umayyad, Abbasid); expansion to North Africa and Spain; contributions to science, medicine and art\n- **African empires and kingdoms**: Ghana (Koumbi Saleh, gold and salt, Almoravids 1076); Mali (Sundiata at Kirina, Mansa Musa 1324, Timbuktu); Songhai (Sunni Ali, Askia Muhammad, Tondibi 1591); Benin and Oyo; Kongo and Queen Nzinga; Great Zimbabwe\n- **contacts and the slave trade**: the voyages (1472 to 1522); the Swahili coast; the triangular trade; abolition (1807, 1833) and the Douala treaties (1840 and 1841)\n- **Cameroon**: the peopling (Sao, Sudanese, Bantu, Fulani, Beti-Fang); fondoms and lamidats; the Duala, Bassa and Beti; the missionaries Merrick and Saker.',
    '**Comparisons**: medieval Europe and Africa both had kings who rewarded loyalty, powerful religious institutions (the Church, Islam, traditional religion) and long-distance trade; in the fourteenth century, while Europe suffered the Black Death, Mali was at the height of its wealth.',
  ], 'hist2-review', 'Compare the same century in Europe, Africa and Cameroon.',
  ['Which happened in the fourteenth century?', ['Mansa Musa’s pilgrimage and the Black Death', 'the founding of Rome', 'the Punic Wars', 'Cameroon’s independence'], '1324 and 1347 to 1351.'],
  [['Comparison', 'Looking at the similarities and differences between things.']],
  [
    { q: 'Compare feudal Europe and the empire of Mali under: ruler, source of wealth, religion.', steps: ['Ruler: Europe, **kings and lords**; Mali, the **Mansa**.', 'Wealth: Europe, **land and farming by serfs**; Mali, **gold and trade taxes**.', 'Religion: Europe, the **Christian Church**; Mali, **Islam** with traditional beliefs.'] },
  ]),

  L('hi-exampractice-2', 'hi-f2-review', '22.2', 'Answering history questions: structural and essay', 12, ['Revision', 'Examination'], [
    'Form 2 history papers include **multiple-choice**, **structural** and short **essay** questions, as well as timelines and maps.\n- **Structural questions** ("Give two causes of…", "Name the king who…"): answer briefly, one point per line, using precise names and dates.\n- **Essay questions** ("Explain the factors that led to the decline of Songhai"): write an introduction (define the topic and give the period), then one paragraph per **point**, each with **evidence** (names, dates, events) and an **explanation**, and a short conclusion.\n- **Command words**: *describe* (say what happened), *explain* (give reasons), *compare* (similarities and differences), *assess* (judge the importance).',
    'Tips: plan before writing; use the vocabulary of the course (fief, caliph, lamidat, middleman, abolition); check that dates are in the right century; manage your time.',
  ], 'hist-essay-chain', 'One point, one paragraph: point, evidence, explanation.',
  ['A question that says "compare" asks for:', ['similarities and differences', 'a list of dates only', 'a drawing', 'one word'], 'Both sides.'],
  [['Command word', 'The key word of a question that says what to do.'], ['Essay', 'A structured piece of writing that develops an argument.']],
  [
    { q: 'Plan an essay: "Explain three reasons for the decline of the empire of Mali."', steps: ['Introduction: Mali (thirteenth to fifteenth centuries), greatest under Mansa Musa.', 'Paragraph 1: **weak successors and succession disputes** after Mansa Musa.', 'Paragraph 2: **attacks by the Mossi and the Tuareg** (Timbuktu taken in 1433).', 'Paragraph 3: **the rise of Songhai**, which took its trade towns.', 'Conclusion: internal weakness and external pressure ended Mali’s greatness.'] },
  ]),
];
