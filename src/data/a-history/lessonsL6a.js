// A Level History lessons (0760), Lower Sixth, Term 1: evidence and causation,
// pre-colonial Cameroon, European penetration and the 1884 treaty, German
// rule and resistance, the Scramble and the Berlin Conference, the First World
// War and the partition, nineteenth-century Europe, and African resistance.
// Worked examples are essay plans and source evaluations, as in Papers 2 and 3.

const PAPER = { Method: 'All papers', Essay: 'Papers 2 and 3', Sources: 'Papers 2 and 3', MCQ: 'Paper 1' };

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: PAPER[tags[0]] || 'All papers',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_HL6A = [
  // ---------- 1. Evidence and method ----------
  L('ahi-method-1', 'ahi-l6-method', '1.1', 'Sources, bias and the historian’s questions', 18, ['Method'], [
    'Advanced Level History is marked for **argument and analysis**: you must explain why things happened, weigh how much each factor mattered and reach a judgement. O Level knowledge of treaties, dates and leaders is the starting point, not the answer. The year opens with a diagnostic test of that knowledge.',
    'Historians work from **evidence**. **Primary sources** were produced at the time: treaties (the Germano-Duala Treaty of 1884), letters (the Duala kings’ letters to Queen Victoria), newspapers, speeches, photographs, colonial reports to the League or the UN, and oral traditions recorded from those who lived through events. **Secondary sources** are later interpretations: textbooks, biographies and historians’ articles.',
    'Every source is questioned with the same four tests:\n- **Origin**: who made it, when and where?\n- **Purpose**: why was it made, and for whom?\n- **Content**: what does it say, and what does it leave out?\n- **Reliability**: is it one-sided, and is it **corroborated** by independent evidence?\nA biased source is still useful: a governor’s report shows what the administration wanted its government to believe.',
    '**Historiography** is the study of how interpretations change. German rule in Cameroon was praised by colonial writers for its railways and plantations; nationalist historians stress the seizure of land, forced labour and the executions of 1914. A strong answer shows that the past is **debated** and explains why historians disagree: different sources, different questions, different times.',
  ], 'ahi-sources', 'Origin, purpose, content, reliability: put all four questions to every source.',
  ['A report written by a colonial governor to his government is best described as:', ['a primary source, possibly shaped by its purpose', 'a secondary source', 'a neutral source', 'an oral tradition'], 'It dates from the time and was written to justify the administration.'],
  [['Primary source', 'Evidence produced at the time of the events.'], ['Secondary source', 'A later account that interprets the past.'], ['Corroboration', 'Confirming evidence by comparing it with independent sources.'], ['Historiography', 'The study of how historians have interpreted the past.']],
  [
    { q: 'Practise on this invented extract, written in the style of a plantation manager’s report of 1905: "The natives will not work unless compelled; firm measures are for their own good." Evaluate it as evidence.', steps: ['Origin: **a planter, an interested party who needed cheap labour.**', 'Purpose: **to justify compulsion to officials or investors.**', 'Content: **a sweeping generalisation with no evidence about the workers themselves.**', 'Value: **unreliable about Africans, but good evidence of the attitudes used to justify forced labour.**'] },
    { q: 'Two historians disagree: one says German rule "developed" Kamerun, the other that it "exploited" it. How should an essay use this?', steps: ['**State both views and what each emphasises (infrastructure and exports, against land seizure and coercion).**', '**Test each against evidence: who benefited from the railways and plantations?**', '**Reach your own judgement, for example that development served German interests first.**'] },
  ]),

  L('ahi-method-2', 'ahi-l6-method', '1.2', 'Chronology, causation, consequences and the 0760 papers', 17, ['Method'], [
    '**Chronology** is the skeleton of history. Keep a running timeline from 1806 (Modibo Adama’s flag) to 1990 (the liberty laws), and learn each date with its **causes and consequences**, not as a bare list. Many Paper 1 options differ only by a year or an acronym.',
    '**Causation**: distinguish **long-term causes** (built up over years), **short-term causes** (months before) and the **trigger** (the immediate cause). Sort them also by type: political, economic, social, ideological, military and personal. The best answers explain how causes **interact** (economic hardship making a political grievance explosive) and argue which mattered most.',
    '**Consequences** can be intended or unintended, immediate or long-term. The 1916 partition of Cameroon, a wartime convenience for Britain and France, created the English-speaking and French-speaking traditions that still shape the country.',
    'The GCE 0760 examination (June 2026 timetable): **Paper 1**, 1½ hours, multiple-choice questions across the syllabus (Tuesday 2 June, morning); **Paper 2**, 3 hours (2 June, afternoon) and **Paper 3**, 3 hours (Wednesday 3 June, morning), both essay papers. The Lower Sixth covers the history to 1945; the Upper Sixth adds 1945 to the 1990s and the examination drills.',
  ], 'ahi-causation', 'Long-term, short-term, trigger; then which mattered most, and why.',
  ['The event that sets off a crisis, such as a single treaty or assassination, is the:', ['trigger, or immediate cause', 'long-term cause', 'consequence', 'context'], 'The trigger is not the whole explanation.'],
  [['Chronology', 'The arrangement of events in the order they happened.'], ['Trigger', 'The immediate event that sets off a larger change.'], ['Unintended consequence', 'A result that the people involved did not plan.']],
  [
    { q: 'Classify the causes of the German annexation of Cameroon in 1884.', steps: ['Long-term: **decades of European trade and missions on the coast, and the Duala wish for protection.**', 'Short-term: **British delay over the Duala requests of 1879 and 1881, and Bismarck’s turn to colonies in 1884.**', 'Trigger: **the treaty of 12 July 1884, signed days before the British consul arrived.**', 'Judgement: **British hesitation turned a long process into a German success.**'] },
  ]),

  // ---------- 2. Pre-colonial Cameroon ----------
  L('ahi-precol-1', 'ahi-l6-precolonial', '2.1', 'The Lamidats of the North and the Fondoms of the Grassfields', 18, ['Cameroon history'], [
    'Northern Cameroon was transformed by the **Fulani (Fulbe) jihad** launched by Usman dan Fodio of Sokoto in 1804. In 1806 **Modibo Adama** received a flag to spread Islam in the land the Fulani called Fombina; his emirate, **Adamawa**, had its capital at Yola from 1841. Lamidats such as **Garoua, Ngaoundéré, Maroua and Rey-Bouba** were ruled by Fulani leaders who owed allegiance to Yola and, through it, to Sokoto.',
    'Government of a lamidat:\n- the **Lamido** held political and religious authority, advised by a council and served by officials\n- the **Alkali** judged by Islamic law (Sharia)\n- taxes included **zakat** (alms) and tribute from subject peoples\n- cavalry armies raided for slaves and cattle.\nMany non-Muslim peoples, especially in the Mandara hills, resisted from their strongholds.',
    'The **Grassfields** (the Bamenda plateau and Bamum) were organised into **fondoms**: Nso, Kom, Bafut, Bali-Nyonga, Bamum and many smaller ones. The **Fon** was a sacred ruler, but his power was balanced by **regulatory societies** such as the **Kwifon** (in Nso, Kom and Bafut), by councils of notables and by royal lineages. In Bamum, **Sultan Njoya** (who ruled from about 1886 until the French deposed him in 1931) created a script, wrote a history of his people and built the palace at Foumban.',
    'Comparison: both were **centralised states**, with rulers, officials and armies. The lamidats rested on Islam and conquest; the fondoms on sacred kingship, secret societies and lineage ties. Both later dealt with the Germans by treaty or by war, and both were used by colonial rulers as instruments of government.',
  ], 'ahi-precolonial', 'Lamidat: Lamido, Alkali, zakat, Sokoto. Fondom: Fon, Kwifon, notables, lineages.',
  ['The regulatory society that could check a Fon’s power in Nso, Kom and Bafut was the:', ['Kwifon', 'Ngondo', 'Alkali', 'Lukiko'], 'It enforced laws in the Fon’s name and could restrain him.'],
  [['Lamido', 'The ruler of a Fulani lamidat.'], ['Alkali', 'A judge applying Islamic law.'], ['Fon', 'The sacred ruler of a Grassfields kingdom.'], ['Kwifon', 'The regulatory society of many fondoms.']],
  [
    { q: 'Compare the political organisation of the Lamidats and the Fondoms.', steps: ['Similarity: **both were centralised, with a ruler, councils, officials and an army.**', 'Legitimacy: **the Lamido ruled through Islam and conquest under Sokoto; the Fon was a sacred ruler rooted in local lineages.**', 'Checks: **the Lamido answered to his council and to Yola; the Fon to the Kwifon and the notables.**', 'Judgement: **two different answers to the same problem of ruling large populations.**'] },
  ]),

  L('ahi-precol-2', 'ahi-l6-precolonial', '2.2', 'Forest societies, the Duala coast and the networks of trade', 17, ['Cameroon history'], [
    'In the southern forest, the **Beti** (Ewondo, Eton), **Bulu**, **Fang**, **Bassa** and **Maka** lived in **segmentary** (acephalous) societies: no ruler stood over the whole people. Heads of families and lineages governed, and **assemblies of elders** decided by consensus; initiation rites such as the **So** of the Beti marked adulthood.',
    'On the coast the **Duala** were organised in chiefdoms (Bell, Akwa, Deido) whose leaders met in the **Ngondo**. The slave trade gave way after the 1840s to "legitimate" trade in palm oil, palm kernels, ivory and rubber. The Duala were **middlemen**: they bought goods from the interior on credit ("trust") from European traders and kept the inland markets to themselves.',
    'Long-distance trade linked the regions:\n- in the north, Hausa and Fulani traders exchanged kola nuts, salt, cloth, horses and slaves\n- the Grassfields exported kola, iron goods and cloth, and imported salt and European goods through coastal middlemen\n- markets used currencies such as cowries, brass rods and manillas.',
    'Relations between peoples combined **trade, intermarriage and alliances** with **war, raids and tribute** (Fulani raids southwards, rivalries among Grassfields kingdoms). Colonial rule later redirected these networks towards the coast and Europe, but the routes and markets show that pre-colonial Cameroon was connected, not isolated.',
  ], 'ahi-trade-routes', 'Segmentary inland, middlemen on the coast, long-distance routes in between.',
  ['The Duala profited from coastal trade mainly as:', ['middlemen between European traders and the interior', 'plantation owners', 'cattle herders', 'mercenaries'], 'They guarded their monopoly of the inland markets.'],
  [['Segmentary society', 'A society organised by lineages, without a central ruler.'], ['Middleman', 'A trader who buys from one group to sell to another.'], ['Trust', 'Goods advanced on credit by European traders to coastal middlemen.']],
  [
    { q: '"Pre-colonial Cameroonian societies lived in isolation." How far do you agree?', steps: ['Against: **long-distance trade in kola, salt, cloth and slaves linked north, Grassfields and coast.**', 'Against: **alliances, intermarriage and shared markets connected neighbours.**', 'For, partly: **segmentary forest villages were small and largely self-governing.**', 'Judgement: **societies were politically separate but economically and socially connected.**'] },
  ]),

  // ---------- 3. Penetration and annexation ----------
  L('ahi-penetration-1', 'ahi-l6-penetration', '3.1', 'Traders, missionaries and consuls on the coast (1840 to 1884)', 18, ['Cameroon history'], [
    'Britain, which abolished its slave trade in 1807, signed **anti-slave-trade treaties** with the Duala kings in **1840 and 1841**, offering goods in return for ending the trade and opening "legitimate" commerce. British naval patrols and consuls followed: **John Beecroft** was consul for the Bights of Benin and Biafra from 1849.',
    'Missionaries came next. The Baptist Missionary Society sent the Jamaican **Joseph Merrick**, who opened a mission at **Bimbia** in 1844 and printed texts in the Isubu language, and **Alfred Saker**, who worked in Douala from 1845, translated the Bible into Duala and founded **Victoria** (Limbe) in **1858** for Baptists expelled from Spanish Fernando Po. Schools, printing and crafts made the missions a channel of British influence.',
    'Trade grew rapidly. British firms dominated until German companies arrived: **C. Woermann** (1868) and **Jantzen und Thormählen** (1875). To settle disputes over credit and prices, traders and chiefs set up a **Court of Equity** at Douala in **1856**.',
    'Faced with rivalries among chiefs, unrest and competition, the Duala kings asked **Queen Victoria** to annex their country in **1879 and 1881**. The British government hesitated: it preferred informal influence to the cost of a new colony. Meanwhile German traders lobbied Chancellor Bismarck, who in 1884 decided to support colonies.',
  ], 'ahi-penetration', 'Britain led on the coast for forty years, then hesitated at the decisive moment.',
  ['Victoria (Limbe) was founded in 1858 by:', ['Alfred Saker', 'Gustav Nachtigal', 'Joseph Merrick', 'Edward Hewett'], 'For Baptists expelled from Fernando Po.'],
  [['Legitimate trade', 'Trade in goods such as palm oil, replacing the slave trade.'], ['Consul', 'An official representing a state’s interests abroad.'], ['Court of Equity', 'A court of traders and chiefs that settled trade disputes in Douala.']],
  [
    { q: 'Why did Britain fail to annex Cameroon despite its early lead?', steps: ['Its lead: **treaties, missions, consuls and dominant trade since the 1840s.**', 'Its hesitation: **unwillingness to pay for a colony and a preference for informal influence.**', 'German speed: **Bismarck’s change of policy and secret instructions to Nachtigal in 1884.**', 'Judgement: **Britain lost Cameroon through delay, not through German strength on the coast.**'] },
  ]),

  L('ahi-penetration-2', 'ahi-l6-penetration', '3.2', 'The Germano-Duala Treaty of 12 July 1884: terms, resistance and results', 18, ['Cameroon history'], [
    'Agents of the German firms (Eduard Schmidt for Woermann and Johannes Voss for Jantzen und Thormählen) negotiated with **King Bell (Ndumbe Lobe)** and **King Akwa (Dika Mpondo)**. The treaty was signed on **12 July 1884**. On **14 July** the German envoy **Gustav Nachtigal**, arriving on the gunboat Möwe, raised the German flag. The British consul **Edward Hewett** came on 19 July, too late.',
    'Terms: the kings transferred **sovereignty, legislation and administration** of their country to the firms, which passed them to the German Empire. The Duala attached conditions: the **land of their towns and farms** would remain the property of its owners, existing agreements with other traders would be respected, and their customs would be kept.',
    'Resistance began at once. **Lock Priso** of Hickory Town (Bonaberi), who favoured Britain, refused the treaty; in **December 1884** German naval forces attacked Hickory Town and Joss Town. Rivalries among the Duala lineages, and resentment that the kings had sold the country, weakened King Bell’s authority.',
    'Results: Kamerun became a **German protectorate**, accepted by Britain in Anglo-German agreements of 1885 and 1886; the Baptist missions passed to the **Basel Mission** (1886) and Victoria to Germany (1887). The **Berlin Conference** recognised the claim, but conquering the interior took the Germans more than twenty years. The broken land clause became a grievance that ended in 1914 with the execution of Rudolf Duala Manga Bell.',
  ], 'ahi-treaty-1884', 'Signed 12 July, flag 14 July, Hewett 19 July; the land clause broken later.',
  ['The Duala condition that the Germans most clearly broke concerned:', ['the ownership of the land of their towns and farms', 'the right to elect the governor', 'German citizenship', 'the end of the slave trade'], 'The expropriation of Duala land led to Manga Bell’s execution.'],
  [['Protectorate', 'A territory under the protection and control of a foreign power.'], ['Sovereignty', 'Supreme authority over a territory.'], ['Annexation', 'The taking of a territory into another state’s possession.']],
  [
    { q: 'Assess the consequences of the Germano-Duala Treaty for Cameroon.', steps: ['Political: **the start of German rule and of Cameroon’s modern borders.**', 'Economic: **plantations, railways and the end of the Duala trading monopoly.**', 'Social: **land seizures, forced labour and resistance from 1884 to 1914.**', 'Judgement: **a treaty meant to protect Duala interests became the legal basis for taking them away.**'] },
  ]),

  // ---------- 4. German rule ----------
  L('ahi-german-1', 'ahi-l6-german', '4.1', 'German administration and the colonial economy', 18, ['Cameroon history'], [
    'The governors: **Julius von Soden** (1885 to 1891), Eugen von Zimmerer (1891 to 1895), **Jesko von Puttkamer** (1895 to 1907), Theodor Seitz (1907 to 1910), Otto Gleim (1910 to 1912) and Karl Ebermaier (1912 to 1916). The capital moved from Douala to **Buea** in 1901 and back to Douala in 1909. The territory was divided into districts and military stations, held by the **Schutztruppe**, the colonial army.',
    'Expansion inland: stations such as **Yaoundé** (1889) and the alliance of the explorer Eugen Zintgraff with the Fon of **Bali-Nyonga** (1889) opened the south and the Grassfields; the northern lamidats were conquered between 1899 and 1902. In 1911, after the second Moroccan (Agadir) crisis, France ceded to Germany a large area of French Equatorial Africa, "New Kamerun".',
    'The economy:\n- **concession companies** (Gesellschaft Süd-Kamerun, 1898; Nordwest-Kamerun, 1899) received huge areas for rubber and ivory\n- **plantations** of cocoa, rubber and palms on Mount Cameroon took Bakweri land and moved its people into reserves\n- **forced labour** and a head tax drove Africans to work on plantations, roads and railways\n- infrastructure: the port of Douala, the **Northern Railway** to Nkongsamba (1911), the Midland line towards Yaoundé, roads, and the **botanical garden** at Victoria (1892).',
    'Development or exploitation? Exports and infrastructure grew, but they served German companies; schools were run mostly by missions, and the system rested on coercion. Many porters and labourers died on the plantations and building sites.',
  ], 'ahi-german', 'Governors, stations, concessions, plantations, forced labour, railways.',
  ['The capital of German Kamerun from 1901 to 1909 was:', ['Buea', 'Douala', 'Yaoundé', 'Victoria'], 'On the slopes of Mount Cameroon.'],
  [['Concession company', 'A firm granted exclusive rights over a large territory.'], ['Expropriation', 'Taking property from its owners, usually by the state.'], ['Schutztruppe', 'The German colonial army.']],
  [
    { q: '"German rule developed Kamerun." How far do you agree?', steps: ['For: **railways, the port of Douala, plantations, exports and research at Victoria.**', 'Against: **land seizures, concessions, forced labour and deaths on the works.**', 'Whose benefit: **profits went to German firms; Cameroonians bore the cost.**', 'Judgement: **economic growth without development for the people: exploitation with infrastructure.**'] },
  ]),

  L('ahi-german-2', 'ahi-l6-german', '4.2', 'Resistance to German rule and why it failed', 17, ['Cameroon history'], [
    'Resistance came from every region:\n- the **Duala**: Lock Priso (1884)\n- the **Bakweri** under **Kuva Likenye** defeated a German force at Buea in **1891**, killing its commander, before being conquered in 1894\n- the **Bulu** rose in **1899 to 1901** against traders who took over their middleman trade\n- the **Lamido Zubeiru** of Yola fought the Germans until his defeat in 1901\n- the **Nso** were conquered in 1906 after fighting.',
    'In Douala the Germans planned from about 1910 to move the Duala from their riverside land to make way for a European town. **Rudolf Duala Manga Bell**, King of Bell, protested that this broke the 1884 treaty and petitioned the Reichstag. He was arrested and **hanged on 8 August 1914** with Adolf Ngoso Din. The same day **Martin-Paul Samba** was shot at Ebolowa, accused of plotting against the Germans.',
    'Why resistance failed:\n- **weapons**: rifles, artillery and machine guns against muskets and spears\n- **divide and rule**: allies such as Bali-Nyonga helped against their neighbours\n- **disunity**: each people fought separately\n- **resources**: the Schutztruppe could be reinforced and supplied.',
    'Results: harsher control and more forced labour, but also a memory of resistance. Manga Bell is honoured today as a national hero, and the Duala land question was carried into the mandate period.',
  ], 'ahi-resistance-cmr', 'Lock Priso, Kuva Likenye, the Bulu, Zubeiru, the Nso, Manga Bell.',
  ['Rudolf Duala Manga Bell was executed in 1914 for opposing:', ['the expropriation of Duala land', 'the 1884 treaty', 'British rule', 'the Brazzaville Conference'], 'He argued that the Germans had broken the treaty.'],
  [['Divide and rule', 'Using one group against another to control both.'], ['Petition', 'A formal written request to an authority.'], ['National hero', 'A person honoured as having served the nation.']],
  [
    { q: 'Why did resistance to German rule in Cameroon fail?', steps: ['Military: **firearms, artillery and machine guns of the Schutztruppe.**', 'Political: **divide and rule and alliances with rulers such as the Fon of Bali-Nyonga.**', 'African weaknesses: **peoples fought one at a time, never together.**', 'Judgement: **disunity mattered as much as weapons; even victories such as Buea 1891 were not followed up together.**'] },
  ]),

  // ---------- 5. The Scramble ----------
  L('ahi-scramble-1', 'ahi-l6-scramble', '5.1', 'Why Europe scrambled for Africa', 18, ['African history'], [
    'Before 1880 Europeans held mostly coastal footholds in Africa (apart from Algeria and the south). By 1914 almost the whole continent was partitioned; only **Ethiopia** and **Liberia** remained independent.',
    'Causes:\n- **economic**: raw materials for industry (cotton, rubber, palm oil, minerals), markets for manufactures, outlets for capital\n- **political**: national prestige and rivalry; newly united Germany and Italy wanted colonies; colonies were bargaining counters in European diplomacy\n- **strategic**: the Suez Canal (1869) and the route to India; Britain’s occupation of **Egypt in 1882**\n- **ideological and humanitarian**: missionaries, the campaign against the slave trade, the "civilising mission" and racist Social Darwinism\n- **enabling factors**: quinine against malaria, steamships, railways, the Maxim gun, and explorers such as Livingstone and Stanley.',
    'Triggers: France took **Tunisia** (1881), Britain occupied Egypt (1882), **King Leopold II** of Belgium pursued the Congo, and in 1884 Germany claimed Togo, Kamerun and South West Africa. Each move pushed the others to stake claims before rivals could.',
    'Historians disagree. J.A. Hobson (1902) and Lenin (1916) saw imperialism as driven by capital seeking profit; others stress European rivalry and prestige; Robinson and Gallagher argued that crises in Africa itself, above all in Egypt, drew Europeans in. A good essay weighs these explanations rather than listing causes.',
  ], 'ahi-scramble', 'Economic, political, strategic, ideological, plus the tools that made conquest possible.',
  ['Which event of 1882 helped set off the Scramble?', ['the British occupation of Egypt', 'the Berlin Conference', 'the Battle of Adwa', 'the Treaty of Versailles'], 'It alarmed France and widened the rivalry.'],
  [['Imperialism', 'The policy of extending a state’s rule over other peoples and territories.'], ['Social Darwinism', 'The false idea that races compete and the "fittest" should rule.'], ['Civilising mission', 'The European claim that colonial rule brought progress.']],
  [
    { q: 'Assess the view that economic motives were the main cause of the Scramble for Africa.', steps: ['For: **industrial demand for raw materials and markets; companies such as Woermann pushed for annexation.**', 'Against: **many colonies cost more than they earned; prestige and rivalry drove leaders such as Bismarck.**', 'Strategic and local crises: **Egypt and the Suez route drew Britain in.**', 'Judgement: **economic interests created pressure, but political rivalry turned it into a race.**'] },
  ]),

  L('ahi-scramble-2', 'ahi-l6-scramble', '5.2', 'The Berlin Conference and the partition of Africa', 17, ['African history'], [
    'The **Berlin West Africa Conference** met from **15 November 1884 to 26 February 1885**, called by **Bismarck** with French support. Fourteen states attended, including the United States and the Ottoman Empire. No African took part.',
    'The **Berlin Act** provided for:\n- free trade in the Congo basin and free navigation on the **Congo and Niger** rivers\n- the suppression of slavery and the slave trade\n- **effective occupation**: a power claiming a new coastal territory had to establish real authority there and **notify** the other powers\n- recognition of King Leopold’s association, which became the **Congo Free State**.',
    'The conference did **not** itself draw the map of Africa. It set rules for a partition that was carried out afterwards through **bilateral treaties** (Anglo-German agreements of 1886 and 1890, the Anglo-French settlement after Fashoda in 1898), treaties with African rulers and military conquest. Cameroon’s own borders were changed again in 1911 by "New Kamerun".',
    'Consequences: borders drawn in Europe cut across peoples and states; colonial economies were organised for export; Africans resisted in many places. The partition left the frontiers that most African states kept at independence.',
  ], 'ahi-berlin-act', 'Berlin set the rules; treaties and conquest drew the map.',
  ['The principle of effective occupation required a power claiming coastal territory to:', ['establish real authority there and notify the others', 'send missionaries only', 'pay Africans', 'ask the Pope'], 'Paper claims were not enough.'],
  [['Partition', 'The division of a territory between powers.'], ['Effective occupation', 'Real control on the ground, required for a claim to be recognised.'], ['Bilateral treaty', 'An agreement between two states.']],
  [
    { q: '"The Berlin Conference partitioned Africa." How far do you agree?', steps: ['For: **it legitimised the race and set its rules (effective occupation, notification).**', 'Against: **most borders were fixed later by bilateral treaties and conquest.**', 'Africa’s role: **African rulers fought, signed or played rivals off, shaping the outcome.**', 'Judgement: **Berlin organised the Scramble; it did not complete it.**'] },
  ]),

  // ---------- 6. The First World War and partition ----------
  L('ahi-ww1-1', 'ahi-l6-ww1', '6.1', 'The Kamerun campaign (1914 to 1916)', 17, ['Cameroon history', 'World history'], [
    'When war broke out in Europe in August 1914, Kamerun was a target for the Allies: its ports and wireless stations threatened Allied shipping, and Britain and France each hoped to gain territory. British forces from Nigeria, French forces from Equatorial Africa and Belgian troops from the Congo invaded from several sides.',
    'The campaign:\n- an Anglo-French force under General **Charles Dobell** took **Douala** on **27 September 1914**\n- **Garoua** in the north fell in June 1915\n- Allied columns, the French under General **Joseph Aymerich**, converged on **Yaoundé**, entered on **1 January 1916**\n- the German commander Carl Zimmermann withdrew most of his forces into neutral **Spanish Guinea (Rio Muni)**, where they were interned\n- **Mora** held out on its hill until **18 February 1916**.',
    'Cameroonians bore the burden: thousands were forced to serve as porters, food was requisitioned and villages suffered. Some followed the Germans into exile, among them the Ewondo chief **Charles Atangana**.',
    'Why the Germans lost: the Allied naval blockade cut off reinforcements; they were outnumbered and attacked from several directions; the loss of Douala deprived them of their main port.',
  ], 'ahi-ww1', 'Douala 27 September 1914, Yaoundé 1 January 1916, Mora 18 February 1916.',
  ['The German forces escaped internment by the Allies by crossing into:', ['Spanish Guinea (Rio Muni)', 'Nigeria', 'Chad', 'the Congo'], 'Spain was neutral.'],
  [['Blockade', 'Cutting off a territory from supplies by sea or land.'], ['Porter', 'A person who carries loads, often forced to in wartime.'], ['Internment', 'The confinement of enemy soldiers or civilians by a neutral or enemy state.']],
  [
    { q: 'Explain why the Allies conquered Kamerun by 1916.', steps: ['Naval power: **the blockade stopped German reinforcements.**', 'Numbers and direction: **British, French and Belgian forces attacked from the coast, Nigeria, Chad and the Congo.**', 'Early loss of Douala: **the Germans lost their main port in September 1914.**', 'Judgement: **isolation decided the campaign; German courage could only delay the end.**'] },
  ]),

  L('ahi-ww1-2', 'ahi-l6-ww1', '6.2', 'From partition to mandate (1916 to 1922)', 17, ['Cameroon history'], [
    'Even before the fighting ended, Britain and France agreed on a **provisional partition** on **4 March 1916**, often called the **Picot line** after the French diplomat Georges Picot. France took about **four-fifths** of the territory, including Douala and Yaoundé; Britain took two strips along the Nigerian border.',
    'At the peace conference, **Article 119** of the **Treaty of Versailles** (28 June 1919) required Germany to renounce all its overseas possessions. The **Milner-Simon Declaration** of **10 July 1919** fixed the Anglo-French boundary in Cameroon with small changes; New Kamerun returned to French Equatorial Africa.',
    'Article 22 of the League Covenant created **mandates**. Cameroon became a **class B mandate**, confirmed on **20 July 1922**: Britain and France governed it, but had to promote the well-being of the people, allow freedom of conscience and open trade, raise no armies there, and send annual reports to the **Permanent Mandates Commission**.',
    'Significance: the partition created two administrations, two languages and two legal traditions. What began as a military convenience in 1916 became the basis of the English-speaking and French-speaking Cameroons, and of the questions of reunification after 1945.',
  ], 'ahi-partition', '1916 Picot line; 1919 Versailles and Milner-Simon; 1922 mandate.',
  ['The Anglo-French boundary in Cameroon was fixed in July 1919 by the:', ['Milner-Simon Declaration', 'Berlin Act', 'Foumban Conference', 'Loi-cadre'], 'It adjusted the 1916 line slightly.'],
  [['Mandate', 'A territory governed by a League member on the League’s behalf.'], ['Permanent Mandates Commission', 'The League body that examined the mandatory powers’ reports.'], ['Provisional', 'Temporary, until a final decision.']],
  [
    { q: 'Assess the significance of the partition of Cameroon (1916 to 1922).', steps: ['Immediate: **it ended German rule and gave France the larger share.**', 'Institutional: **it placed two Cameroons under League supervision with different systems.**', 'Long-term: **it created two colonial cultures and made reunification a goal after 1945.**', 'Judgement: **one of the most consequential decisions in Cameroon’s history, taken in wartime without Cameroonians.**'] },
  ]),

  // ---------- 7. Nineteenth-century Europe ----------
  L('ahi-europe19-1', 'ahi-l6-europe19', '7.1', 'The Industrial Revolution and its consequences', 17, ['World history'], [
    'The **Industrial Revolution** began in **Britain** from about 1760: coal and iron, capital from trade and empire, an agricultural revolution that fed a growing population, stable government and sea power. Inventions mechanised production: the flying shuttle (1733), the spinning jenny (about 1764), Arkwright’s water frame (1769), **James Watt’s** improved steam engine (patented 1769), and railways such as the Liverpool to Manchester line (1830).',
    'Industry spread to Belgium, France, Germany (the Ruhr) and the United States. After 1870 a **second industrial revolution** brought steel (the Bessemer process, 1856), chemicals and electricity, and made Germany and the USA industrial leaders.',
    'Social effects:\n- **urbanisation** and crowded industrial towns\n- a new **working class**, long hours, low wages and child labour\n- reforms such as Britain’s Factory Act of 1833\n- **trade unions** and new ideas: liberalism, socialism, and Marx and Engels’ **Communist Manifesto** (1848).',
    'Link to Africa: industry needed **raw materials** (cotton, palm oil for soap and machine lubricants, rubber) and **markets**; steamships, railways, medicines and machine guns made conquest possible. The palm oil trade of the Duala coast and the German plantations on Mount Cameroon were part of this industrial economy.',
  ], 'ahi-europe19', 'Coal, iron, steam; towns, workers, unions; raw materials and markets overseas.',
  ['The Industrial Revolution encouraged imperialism mainly because industry needed:', ['raw materials and markets overseas', 'more farmers in Europe', 'fewer ships', 'an end to trade'], 'Palm oil, rubber and cotton came from the tropics.'],
  [['Industrial Revolution', 'The change from hand production to machine production in factories.'], ['Urbanisation', 'The growth of towns as people move from the countryside.'], ['Socialism', 'Ideas favouring collective ownership and workers’ interests.']],
  [
    { q: 'Explain how the Industrial Revolution contributed to the Scramble for Africa.', steps: ['Demand: **factories needed tropical raw materials such as palm oil and rubber.**', 'Markets and capital: **manufactures and investments sought outlets overseas.**', 'Means: **steamships, railways, quinine and the Maxim gun made conquest possible.**', 'Judgement: **industry supplied both the motive and the means.**'] },
  ]),

  L('ahi-europe19-2', 'ahi-l6-europe19', '7.2', 'Nationalism: 1848 and the unification of Italy and Germany', 18, ['World history'], [
    'In **1848** revolutions swept France, the Austrian Empire, the German and Italian states, demanding liberal constitutions and national unity. The German **Frankfurt Parliament** offered the crown to the King of Prussia, who refused it. Most revolutions were crushed by 1849: liberals were divided and armies stayed loyal to the old rulers.',
    'Italy: **Piedmont-Sardinia** led. Its Prime Minister **Count Camillo di Cavour** won French help (the Plombières agreement with Napoleon III, 1858) and defeated Austria in **1859**, gaining Lombardy; the central states joined by plebiscite in 1860, while Nice and Savoy went to France. **Garibaldi’s Thousand** conquered Sicily and Naples in 1860 and handed them to **Victor Emmanuel II**, proclaimed King of Italy in **1861**. Venice followed in 1866 and Rome in **1870**.',
    'Germany: Prussia led the customs union (**Zollverein**, 1834). **Otto von Bismarck**, Minister-President from 1862, promised to settle questions by "blood and iron". Wars against **Denmark (1864)**, **Austria (1866)** and **France (1870 to 1871)** united the German states; the **German Empire** was proclaimed at **Versailles** on **18 January 1871**, and France lost Alsace-Lorraine.',
    'Consequences: two new great powers; a bitter Franco-German rivalry; alliance systems that led towards 1914; and new states wanting colonies. Germany’s annexation of Kamerun in 1884 and Italy’s ambitions in Ethiopia both came from the nationalism that unified them.',
  ], 'ahi-unification', 'Italy: Cavour, Garibaldi, 1861, 1870. Germany: Bismarck, three wars, 1871.',
  ['The German Empire was proclaimed in 1871 in:', ['the Hall of Mirrors at Versailles', 'the Reichstag in Berlin', 'Frankfurt', 'Vienna'], 'A deliberate humiliation of France.'],
  [['Nationalism', 'The belief that a nation should have its own state.'], ['Zollverein', 'The German customs union led by Prussia.'], ['Realpolitik', 'Politics based on power and interests rather than ideals.']],
  [
    { q: 'Compare the roles of Cavour and Bismarck in unification.', steps: ['Similarity: **both used diplomacy and war, and both led the strongest state (Piedmont, Prussia).**', 'Difference: **Cavour needed French help and was overtaken by Garibaldi; Bismarck controlled events through Prussian power.**', 'Outcome: **Italy was unified by 1870 but weak; Germany by 1871 and strong.**', 'Judgement: **Bismarck shaped events; Cavour exploited them.**'] },
  ]),

  // ---------- 8. African resistance ----------
  L('ahi-resistance-1', 'ahi-l6-resistance', '8.1', 'Forms of resistance: Samori Touré and Behanzin', 18, ['African history'], [
    'Africans responded to conquest in many ways: **armed resistance**, diplomacy to gain time, flight and migration, passive resistance and religious movements. Some rulers **collaborated**, using Europeans against their rivals. Resistance and collaboration were often choices made by the same leader at different times.',
    '**Samori Touré** (about 1830 to 1900) built a Mandinka state on the upper Niger from the 1870s, with a disciplined army, firearms and blacksmiths who copied and repaired rifles. He fought the French from **1882**, signed treaties to gain time, then moved his whole state eastwards in the 1890s, laying waste the land behind him (**scorched earth**). He was captured on 29 September **1898** and died in exile in Gabon in 1900.',
    '**Behanzin**, King of **Dahomey** from 1889, inherited a centralised kingdom with a standing army that included women soldiers. He fought the French over the ports of Porto-Novo and Cotonou in 1890 and again from 1892, when a French force under Colonel Alfred Dodds advanced on his capital, Abomey. Behanzin burned it rather than surrender it, but gave himself up in **January 1894** and was exiled to Martinique.',
    'Both resisted longer than most because of organisation, firearms and leadership, but both lost to French artillery and machine guns, to African troops recruited by the French (the tirailleurs), and to rivals who allied with the invaders.',
  ], 'ahi-resistance', 'Samori: army, guns, scorched earth, 1882 to 1898. Behanzin: Dahomey, Abomey, 1894.',
  ['Samori Touré prolonged his resistance by:', ['moving his state eastwards and laying waste the land behind him', 'signing a permanent alliance with France', 'appealing to the League of Nations', 'surrendering his guns'], 'A scorched-earth strategy.'],
  [['Primary resistance', 'Armed resistance to conquest by existing African states.'], ['Collaboration', 'Cooperating with colonisers, often against local rivals.'], ['Scorched earth', 'Destroying anything useful to an advancing enemy.']],
  [
    { q: 'Why was Samori Touré able to resist the French for so long?', steps: ['Military: **a disciplined army, firearms and his own workshops.**', 'Strategy: **treaties to gain time and a scorched-earth retreat eastwards.**', 'Leadership and religion: **his authority and Islam united his followers.**', 'Judgement: **organisation delayed defeat for sixteen years, but could not overcome French resources.**'] },
  ]),

  L('ahi-resistance-2', 'ahi-l6-resistance', '8.2', 'Adwa (1896): why Ethiopia kept its independence', 18, ['African history'], [
    'Background: **Menelik II**, emperor from 1889, signed the **Treaty of Wuchale** with Italy (1889). Its **Article 17** said in Amharic that Ethiopia **could** use Italy in its foreign relations; the Italian text said it **must**, which made Ethiopia a protectorate. Menelik rejected the Italian reading and denounced the treaty.',
    'Preparation: Menelik won over his regional rulers, bought modern rifles and artillery through French and Russian contacts, and raised a very large army. The Italian commander, General Oreste Baratieri, had a much smaller force of Italian and Eritrean soldiers.',
    'On **1 March 1896** the Italian columns, separated in mountainous country, were defeated one by one at **Adwa**. Thousands were killed or captured. By the **Treaty of Addis Ababa** (October 1896) Italy annulled Wuchale and recognised Ethiopia’s independence, keeping only **Eritrea**.',
    'Significance: Adwa became a symbol of African dignity and inspired Pan-Africanists. Ethiopia joined the League of Nations in 1923; Italy’s desire for revenge led to Mussolini’s invasion in 1935.',
  ], 'ahi-adwa', 'Wuchale’s Article 17, modern arms, unity, mountains: Adwa, 1 March 1896.',
  ['After Adwa, Italy kept in the Horn of Africa only:', ['Eritrea', 'Ethiopia', 'Somaliland and Ethiopia', 'nothing at all'], 'The Treaty of Addis Ababa recognised Ethiopian independence.'],
  [['Protectorate', 'A state controlled by a stronger power, especially in foreign affairs.'], ['Annul', 'To declare a treaty no longer valid.']],
  [
    { q: 'Why did Ethiopia succeed in resisting European conquest when most of Africa did not?', steps: ['Arms: **Menelik bought modern rifles and artillery before the war.**', 'Unity and numbers: **regional rulers fought together in a large army.**', 'Geography and Italian errors: **mountains, separated columns and poor intelligence.**', 'Diplomacy: **rivalries between European powers let Ethiopia buy arms.**', 'Judgement: **preparation and unity, not luck, explain Adwa.**'] },
  ]),
];
