// History lessons for Form 3 (first part): Africa in the nineteenth century,
// the scramble for Africa, the Berlin Conference, colonial conquest, African
// reactions, German Kamerun and its end, the partition and the mandate.
// Foundation lessons for the GCE course; the Form 4 and Form 5 lessons study
// the same events in more depth. Original text written for this app.

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

export const LESSONS_3A = [
  // ---------- 1. Africa in the nineteenth century ----------
  L('hi-africa1800s-3', 'hi-f3-africa19', '1.1', 'African states and societies in the nineteenth century', 12, ['African history'], [
    'The Form 3 course studies **modern history from about 1840**: the colonisation of Africa and Cameroon, the two world wars, the League of Nations and the United Nations. Paper 2 of the GCE has sections on **Cameroon**, **Africa** and the **world**, so the course moves between all three.',
    'In the early nineteenth century, most of Africa was ruled by **African states and societies**; Europeans held only a few coastal forts and trading posts (and the Cape in the south). Examples: the **Sokoto Caliphate** (from 1804) and **Bornu** in the savanna; the **Asante** kingdom in the Gold Coast; **Dahomey**; the **Zulu** kingdom of Shaka in the south; **Ethiopia**, which modernised under Tewodros and **Menelik II**; **Egypt** under Muhammad Ali; and in Cameroon the **fondoms** of the Grassfields, the **lamidats** of the north and the trading kings of the **Douala** coast.',
    'After the abolition of the slave trade, **legitimate trade** in palm oil, ivory, rubber and groundnuts grew. European merchants, missionaries and explorers became more and more active, which prepared the colonial conquest of the late nineteenth century.',
  ], 'hist3-africa1800s', 'Before 1880, Africa was ruled by Africans; Europeans were on the coasts.',
  ['In about 1850, European control in Africa was mainly limited to:', ['coastal forts and trading posts', 'the whole continent', 'the Sahara', 'the Congo forest'], 'Conquest came later.'],
  [['Legitimate trade', 'Trade in goods such as palm oil that replaced the slave trade.'], ['Caliphate', 'A state ruled by a caliph or Islamic leader.']],
  [
    { q: 'Name three African states of the nineteenth century and where they were.', steps: ['The **Sokoto Caliphate**, in present-day northern Nigeria.', 'The **Asante** kingdom, in present-day Ghana.', '**Ethiopia**, in the Horn of Africa, which remained independent.'] },
  ]),

  L('hi-explorers-3', 'hi-f3-africa19', '1.2', 'European explorers and missionaries in the interior', 12, ['African history'], [
    'In the nineteenth century, Europeans explored the interior of Africa, often guided and carried by Africans. They wanted to trace the great rivers, find trade opportunities, spread Christianity and fight the slave trade. Famous explorers: **Mungo Park** (the Niger, 1795 to 1806); **René Caillié**, the first European to reach **Timbuktu** and return (1828); **Richard and John Lander**, who traced the mouth of the Niger (1830); **Heinrich Barth**, a German who crossed the Sahara and visited the **Lake Chad** region and the Benue (1850 to 1855); and the Scottish missionary **David Livingstone**, who crossed southern and central Africa from the 1840s until his death in 1873.',
    'In Cameroon, explorers such as **Eugen Zintgraff** (in the Grassfields, 1889 to 1891) and missionaries such as the Baptists **Merrick** and **Saker** (1840s) opened the way inland.',
    'Effects: explorers’ maps and reports **revealed** Africa’s resources to Europe, aroused interest among traders and governments, and often prepared **treaties** and conquest.',
  ], 'hist3-explorers', 'Explorers drew the maps that conquerors later followed.',
  ['Which explorer visited the Lake Chad region and the Benue in the 1850s?', ['Heinrich Barth', 'Mungo Park', 'David Livingstone', 'Vasco da Gama'], 'A German scholar.'],
  [['Explorer', 'A person who travels to unknown places to learn about them.'], ['Interior', 'The inland part of a country, away from the coast.']],
  [
    { q: 'Explain how explorers helped to prepare the colonisation of Africa.', steps: ['They **mapped** rivers and routes into the interior.', 'Their reports **described** resources and trade opportunities.', 'They sometimes **signed treaties** with chiefs that later supported European claims.'] },
  ]),

  // ---------- 2. Scramble ----------
  L('hi-scramble-causes-3', 'hi-f3-scramble', '2.1', 'The causes of the scramble for Africa', 14, ['African history'], [
    'The **scramble for Africa** was the rapid division of almost the whole continent among European powers between about **1880 and 1914**. By 1914 only **Ethiopia** and **Liberia** were independent. Causes:\n- **economic**: European factories (the Industrial Revolution) needed **raw materials** (rubber, palm oil, cotton, minerals), **markets** for their goods and places to **invest** capital\n- **political**: **national prestige**; the rivalry of Britain, France, Germany, Italy, Portugal and Belgium; newly united **Germany** and Italy wanted colonies to show their power\n- **strategic**: protecting sea routes, for example to India through the **Suez Canal** (opened in 1869), which led Britain to occupy **Egypt** in 1882\n- **humanitarian and religious**: missionaries wanted to spread Christianity, and some claimed a "**civilising mission**" and a duty to end the slave trade\n- **social**: finding land for Europe’s growing population.',
  ], 'hist3-scramble', 'Remember the causes as economic, political, strategic and humanitarian.',
  ['By 1914, the only independent African states were:', ['Ethiopia and Liberia', 'Egypt and Mali', 'Cameroon and Nigeria', 'Ghana and Kenya'], 'All the rest were colonised.'],
  [['Imperialism', 'The policy of extending a country’s power by taking colonies.'], ['Civilising mission', 'The European claim that they had a duty to "civilise" Africans.'], ['Prestige', 'Respect and admiration gained from success.']],
  [
    { q: 'Explain two economic causes of the scramble for Africa.', steps: ['**Raw materials**: factories needed rubber, palm oil, cotton and minerals from Africa.', '**Markets**: Europe produced more goods than it could sell at home, so colonies became protected markets.'] },
  ]),

  L('hi-scramble-tools-3', 'hi-f3-scramble', '2.2', 'What made the scramble possible', 12, ['African history'], [
    '**Technology** gave Europeans new power:\n- **quinine**, from the bark of the cinchona tree, protected Europeans against **malaria**, which had made the interior deadly for them\n- **steamships** and later railways carried troops and goods up rivers and inland\n- the **Maxim gun** (machine gun) and modern rifles gave small European armies a huge advantage over African forces\n- the **telegraph** linked colonies with Europe.',
    '**Trigger events**: King **Leopold II** of Belgium set up companies to claim the **Congo** (from 1876); France occupied **Tunisia** (1881); Britain occupied **Egypt** (1882); in **1884** Germany, under **Bismarck**, suddenly claimed Togo, **Kamerun**, South-West Africa and East Africa. Fearing conflict, Bismarck called the **Berlin Conference**.',
  ], 'hist3-scramble-tools', 'Quinine kept Europeans alive; the Maxim gun made them win.',
  ['Quinine helped European expansion because it:', ['protected Europeans against malaria', 'made guns cheaper', 'was a trade good only', 'replaced ships'], 'Malaria had killed many explorers.'],
  [['Quinine', 'A medicine from cinchona bark used against malaria.'], ['Maxim gun', 'An early machine gun.']],
  [
    { q: 'Give three examples of technology that helped the conquest of Africa.', steps: ['**Quinine** against malaria.', '**Steamships and railways** for transport.', 'The **Maxim gun** and modern rifles in war.'] },
  ]),

  // ---------- 3. Berlin Conference ----------
  L('hi-berlin-3', 'hi-f3-berlin', '3.1', 'The Berlin Conference: aims, members and decisions', 14, ['African history'], [
    'The **Berlin West Africa Conference** met from **15 November 1884 to 26 February 1885**, called by the German chancellor **Otto von Bismarck**. Fourteen states attended: thirteen European states and the **United States**. **No African state was invited.**',
    '**Aims**: to settle disputes over the **Congo** and the Niger, to agree on **rules** for claiming African territory, and to avoid war between the European powers.',
    '**Main decisions** (the General Act of 26 February 1885):\n- **effective occupation**: a power claiming a coastal territory had to occupy it effectively (with officials or troops), not merely claim it\n- **notification**: a power had to **inform** the others of any new claim or protectorate\n- **free navigation** and free trade on the **Niger** and **Congo** rivers\n- recognition of the **Congo Free State** under King **Leopold II**\n- a promise to suppress the **slave trade** and improve the "moral and material well-being" of Africans.',
  ], 'hist3-berlin', 'Effective occupation plus notification: the rules of the race.',
  ['Under the Berlin rules, a power that claimed new territory had to:', ['notify the other powers and occupy it effectively', 'ask the Africans to vote', 'pay the UN', 'build a church first'], 'The two main rules.'],
  [['Effective occupation', 'Real control of a territory through officials or troops.'], ['Notification', 'Formal information to other powers about a new claim.'], ['General Act', 'The final agreement of the Berlin Conference.']],
  [
    { q: 'Why did Bismarck call the Berlin Conference?', steps: ['European rivalry over the **Congo** and the coasts threatened to cause **war**.', 'Germany had just claimed colonies and wanted **rules** that protected its interests.', 'Bismarck wanted Germany to appear as the **peacemaker** of Europe.'] },
  ]),

  L('hi-berlin-impact-3', 'hi-f3-berlin', '3.2', 'The impact of the Berlin Conference', 12, ['African history'], [
    'The conference did **not** itself divide Africa on a map, but its rules **speeded up** the scramble: to meet "effective occupation", powers rushed to sign treaties, send troops and set up administrations. Within twenty years almost all of Africa had been conquered.',
    '**Effects on Africa**:\n- **artificial boundaries** drawn in Europe, often with straight lines, which divided peoples (the Ewe between Togo and the Gold Coast; peoples on the Cameroon-Nigeria border) and grouped rivals together\n- the loss of African **sovereignty**\n- the brutal rule of Leopold’s **Congo Free State**, where forced rubber collection caused millions of deaths\n- the borders became those of many modern African states, a source of later disputes.',
  ], 'hist3-berlin-impact', 'Berlin did not draw the map; it started the race to draw it.',
  ['Many African boundaries drawn after 1885 were:', ['artificial lines that divided peoples', 'chosen by African peoples', 'following each ethnic group exactly', 'decided by the UN'], 'Drawn in Europe.'],
  [['Sovereignty', 'Supreme authority over a territory.'], ['Artificial boundary', 'A border drawn without regard to the peoples living there.']],
  [
    { q: 'Explain how the Berlin Conference speeded up the scramble.', steps: ['"**Effective occupation**" meant claims needed real control.', 'Powers rushed to **sign treaties and send troops** before others could.', 'So the **conquest** of the interior happened very quickly after 1885.'] },
  ]),

  // ---------- 4. Methods ----------
  L('hi-treaties-3', 'hi-f3-acquisition', '4.1', 'Treaties, trickery and chartered companies', 14, ['African history', 'Cameroon history'], [
    '**Treaties**: Europeans often began by signing "treaties of protection" or friendship with African rulers. In Cameroon, King Bell, King Akwa and other Douala chiefs signed the **Germano-Duala treaty** of **12 July 1884** with German firms. Many rulers signed hoping for trade, gifts or help against rivals.',
    '**Trickery**: treaties were often written in European languages that rulers could not read, explained wrongly by interpreters, or included clauses the rulers did not understand. For example, the **Rudd Concession** (1888) signed by King **Lobengula** of the Ndebele gave away mineral rights that he thought were limited, and was used to take his whole kingdom.',
    '**Chartered companies**: governments gave companies the right to trade and rule in their name: the **Royal Niger Company** (Nigeria), the British South Africa Company (Rhodesia), German companies in East Africa. **Boundary agreements** between European powers then fixed the borders (for example the Anglo-German agreements that fixed the Cameroon-Nigeria border).',
  ], 'hist3-acquisition', 'Treaty, trick, company, conquest: four roads to a colony.',
  ['The Rudd Concession of 1888 is an example of:', ['trickery in a colonial treaty', 'a fair trade agreement', 'African conquest of Europe', 'a UN decision'], 'Lobengula was misled.'],
  [['Treaty of protection', 'An agreement by which a ruler accepted the protection, and control, of a European power.'], ['Chartered company', 'A company given the right by its government to trade and govern a territory.']],
  [
    { q: 'Why did many African rulers sign treaties with Europeans?', steps: ['To get **trade, gifts and weapons**.', 'To obtain **protection** against African rivals or other Europeans.', 'Often they **did not understand** that they were giving away sovereignty.'] },
  ]),

  L('hi-conquest-3', 'hi-f3-acquisition', '4.2', 'Military conquest and divide and rule', 12, ['African history'], [
    'Where Africans refused, Europeans used **force**. Examples: the British conquered the **Asante** (Kumasi occupied in 1896, the last war in 1900), **Benin** (1897) and the **Sokoto Caliphate** (1903); the French defeated **Samori Touré** (1898) and conquered Dahomey (1892 to 1894); the Germans fought many campaigns in Kamerun, from the coast to the Grassfields and the north.',
    'Europeans won mainly because of **superior weapons** (machine guns, rifles, artillery), **steamships and telegraphs**, African **soldiers** recruited into colonial armies, and the policy of **divide and rule**: using the rivalries between African peoples to defeat them one by one.',
    'Conquest was followed by **punitive expeditions** that burned villages, imposed fines and taxes, and broke resistance.',
  ], 'hist3-conquest', 'Superior weapons plus African divisions explain most European victories.',
  ['"Divide and rule" means:', ['using rivalries among Africans to conquer them', 'giving each African an equal share', 'dividing Europe', 'ruling through the UN'], 'A colonial tactic.'],
  [['Conquest', 'Taking control of a territory by force.'], ['Punitive expedition', 'A military attack made to punish resistance.']],
  [
    { q: 'Give three reasons for European military success in Africa.', steps: ['**Superior weapons**: machine guns and artillery.', '**African soldiers** in colonial armies and African allies.', '**Divide and rule**: Africans were divided and fought separately.'] },
  ]),

  // ---------- 5. Reactions ----------
  L('hi-collaboration-3', 'hi-f3-reactions', '5.1', 'Collaboration', 12, ['African history', 'Cameroon history'], [
    'African reactions to European invasion ranged from **collaboration** to **armed resistance**; many rulers changed from one to the other.',
    '**Collaboration** means working with the Europeans. **Reasons**: to obtain **weapons, trade and wealth**; to get **protection** or help against African rivals; to keep one’s throne under the new rulers; or because resistance seemed hopeless.',
    '**Examples**: **Lewanika** of Barotseland (Zambia) accepted British protection; in Cameroon, the Fon **Galega I** of **Bali-Nyonga** allied with the German explorer Zintgraff, received guns and helped the Germans against neighbouring peoples; some Douala chiefs accepted German rule in 1884. Collaborators often gained in the short term, but lost their independence in the end.',
  ], 'hist3-reactions', 'Collaboration was a choice made for advantage or survival.',
  ['The Fon of which Grassfields kingdom allied with the Germans?', ['Bali-Nyonga', 'Mankon', 'Nso', 'Bafut'], 'Galega I and Zintgraff.'],
  [['Collaboration', 'Working with a foreign power, especially an occupier.'], ['Collaborator', 'A person who cooperates with an occupying power.']],
  [
    { q: 'Explain why the Fon of Bali-Nyonga collaborated with the Germans.', steps: ['He received **guns** and support.', 'He could use German help against **rival neighbours**.', 'He hoped to **keep and extend** his power under German rule.'] },
  ]),

  L('hi-resistance-africa-3', 'hi-f3-reactions', '5.2', 'Armed resistance in Africa and in Cameroon', 14, ['African history', 'Cameroon history'], [
    '**Examples in Africa**: **Samori Touré** fought the French in West Africa from 1882 until his capture in **1898**, with a well-organised army and workshops that made guns; **Menelik II** of Ethiopia defeated the Italians at **Adwa** on **1 March 1896**, keeping Ethiopia independent; the **Maji Maji** rising (1905 to 1907) united many peoples against the Germans in East Africa; Queen mother **Yaa Asantewaa** led the Asante against the British in 1900.',
    '**Examples in Cameroon**: **Lock Priso** of Hickory Town (Bonaberi) refused the 1884 treaty; the **Bakweri** under **Kuva Likenye** defeated a German force at Buea in **1891**; the Fon of **Mankon** fought Zintgraff in 1891; the **Bulu** (1899 to 1901) and **Nso** (1902 to 1906) took up arms; **Rudolf Duala Manga Bell** opposed the seizure of Duala land and was hanged with **Adolf Ngoso Din** on **8 August 1914**.',
    '**Why resistance usually failed**: European weapons, African divisions and the local, separate nature of the risings. **Why it mattered**: it showed the will of Africans to defend their freedom and inspired later nationalists.',
  ], 'hist3-resistance', 'Name each resister with a place, a date and an outcome.',
  ['Which resistance kept an African state independent?', ['Menelik II at Adwa (1896)', 'Samori Touré', 'the Maji Maji', 'Lock Priso'], 'Ethiopia stayed free.'],
  [['Resistance', 'Opposition, often armed, to an invader.'], ['Nationalist', 'A person who works for the freedom of their nation.']],
  [
    { q: 'Why did Menelik II succeed where most African resisters failed?', steps: ['He had built a **large army** with modern rifles and artillery.', 'Ethiopia was **united** under his rule.', 'He used **diplomacy** to buy weapons and divide his enemies.'] },
  ]),

  // ---------- 6. Annexation ----------
  L('hi-why-annex-3', 'hi-f3-annexation', '6.1', 'The road to annexation', 12, ['Cameroon history'], [
    'Before 1884, the Cameroon coast was a busy trading area. The **Douala** were **middlemen** between the interior and European traders, receiving a trade duty called **comey**. British traders and **Baptist missionaries** (from the 1840s) were active, and the Douala kings had signed anti-slave-trade treaties with Britain (1840 and 1841).',
    'Troubled by quarrels among chiefs and with traders, the Douala kings wrote to **Queen Victoria** (1879) and Prime Minister **Gladstone** (1881) asking Britain to **annex** their country. Britain **hesitated**, unwilling to bear the cost.',
    'Meanwhile German firms from Hamburg, especially **Woermann** and **Jantzen & Thormählen**, had built strong trade in Douala. Pressed by them, the German chancellor **Bismarck** decided to act and sent the explorer and consul **Gustav Nachtigal** to West Africa in 1884.',
  ], 'hist3-annexation', 'Britain was asked first but delayed; Germany acted.',
  ['The trade duty paid to Douala chiefs by European traders was called:', ['comey', 'jizya', 'tithe', 'prestation'], 'A source of their wealth.'],
  [['Annexation', 'The taking of a territory by a state, making it part of its possessions.'], ['Comey', 'A trade duty paid by European traders to Duala chiefs.']],
  [
    { q: 'Why did Britain lose the chance to annex Cameroon?', steps: ['The Douala kings **asked Britain first** (1879, 1881).', 'Britain **delayed** because of cost and official reluctance.', 'Germany **acted quickly** in July 1884, before the British consul arrived.'] },
  ]),

  L('hi-treaty-3', 'hi-f3-annexation', '6.2', 'The Germano-Duala treaty of 12 July 1884', 12, ['Cameroon history'], [
    'On **12 July 1884**, **King Bell** (Ndumbe Lobe Bell), **King Akwa** (Dika Mpondo Akwa) and other chiefs signed a treaty with the German firms, transferring sovereignty over their land. On **14 July**, **Gustav Nachtigal** hoisted the German flag. The British consul **Edward Hewett** arrived on **19 July**, too late; he became known as the "**too-late consul**".',
    'The kings wrote **conditions** into the treaty: the territory must not be handed to another power; existing treaties remained valid; the land and town sites of the Duala remained their property; the comey would still be paid; Duala customs would be respected; and they wished to keep their role as middlemen.',
    'Not all accepted: **Lock Priso** of Hickory Town refused and was attacked by German warships in December 1884. Britain gave up its claims and handed over **Victoria** in **1887**. The Germans later broke the conditions, which caused resistance.',
  ], 'hist3-annexation', '12 July signed, 14 July flag, 19 July too late.',
  ['The "too-late consul" was:', ['Edward Hewett', 'Gustav Nachtigal', 'Alfred Saker', 'Julius von Soden'], 'He arrived on 19 July 1884.'],
  [['Sovereignty', 'Supreme authority over a territory.'], ['Protectorate', 'A territory under the protection and control of a foreign power.']],
  [
    { q: 'Give four conditions the Douala kings attached to the 1884 treaty.', steps: ['The land must **not be given to another power**.', 'Their **land and town sites** would remain theirs.', 'The **comey** would continue to be paid.', 'Their **customs** would be respected (and they would remain **middlemen**).'] },
  ]),

  // ---------- 7. German administration ----------
  L('hi-governors-3', 'hi-f3-german-admin', '7.1', 'The German governors and the colonial state', 12, ['Cameroon history'], [
    'Kamerun was ruled by a **governor** responsible to Berlin. The governors were: **Julius von Soden** (1885 to 1891), Eugen von Zimmerer (1891 to 1895), **Jesko von Puttkamer** (1895 to 1907), Theodor Seitz (1907 to 1910), Otto Gleim (1910 to 1912) and **Karl Ebermaier** (1912 to 1916). In **1901** Puttkamer moved the capital from Douala to **Buea**.',
    'The colony was divided into **districts** (civil areas near the coast) and **military stations** in the interior, where conquest was still going on. The colonial army, the **Schutztruppe**, made up of African soldiers under German officers, conquered the interior: the Grassfields in the 1890s and 1900s, the north (Garoua 1901) and the east.',
    'In **1911**, after the Morocco crisis, France gave Germany a large area to the east and south, called **Neukamerun**, which returned to French Equatorial Africa after the First World War.',
  ], 'hist3-german-admin', 'Soden first, Puttkamer longest, Ebermaier last.',
  ['The German governor who ruled longest and moved the capital to Buea was:', ['Jesko von Puttkamer', 'Julius von Soden', 'Karl Ebermaier', 'Theodor Seitz'], '1895 to 1907.'],
  [['Governor', 'The official who rules a colony for the colonial power.'], ['Schutztruppe', 'The German colonial army.']],
  [
    { q: 'Put the German governors in order.', steps: ['**Julius von Soden** (1885 to 1891)', '**Eugen von Zimmerer** (1891 to 1895)', '**Jesko von Puttkamer** (1895 to 1907)', '**Theodor Seitz**, **Otto Gleim**, then **Karl Ebermaier** (1912 to 1916)'] },
  ]),

  L('hi-german-chiefs-3', 'hi-f3-german-admin', '7.2', 'The Germans and the traditional rulers', 12, ['Cameroon history'], [
    'The Germans did not have enough officials to rule everywhere directly. They used **traditional rulers** as **agents**: chiefs who accepted German rule collected the **head tax**, recruited **labour** for plantations, roads and porterage, kept order and judged minor cases. Chiefs who resisted were removed, exiled or killed, and replaced by more obedient ones.',
    'In the north, the Germans ruled through the **Lamibe**, leaving them much of their power. In the Grassfields, Fons such as those of **Bali-Nyonga** and Bamum (King **Njoya**) cooperated; in the forest, where there were no strong chiefs, the Germans appointed **paramount chiefs**.',
    'This system was cheap for the Germans, but it made many chiefs instruments of colonial demands, which damaged their relations with their people.',
  ], 'hist3-german-chiefs', 'Chiefs collected taxes and labour for the Germans.',
  ['Under German rule, chiefs who cooperated were used mainly to:', ['collect taxes and recruit labour', 'make laws in Berlin', 'command the navy', 'run the League'], 'Agents of the colonial state.'],
  [['Head tax', 'A tax paid by each adult man.'], ['Paramount chief', 'A chief placed above other chiefs, often appointed by the colonial power.']],
  [
    { q: 'Why did the Germans rule through traditional rulers?', steps: ['They had **too few German officials**.', 'Chiefs already had **authority** over their people.', 'It was **cheap**: chiefs collected taxes and labour for them.'] },
  ]),

  // ---------- 8. German economy ----------
  L('hi-plantations-3', 'hi-f3-german-economy', '8.1', 'Plantations, concessions and forced labour', 14, ['Cameroon history'], [
    'The Germans developed Kamerun for **export crops**. On the fertile volcanic soils around **Mount Cameroon**, they created large **plantations** of cocoa, rubber, bananas and oil palm, taking the land of the **Bakweri**, who were moved into **reserves**. These plantations later became the core of the **Cameroon Development Corporation** (CDC), created in 1946.',
    'In the south and east, huge **concessions** were given to companies such as the Gesellschaft Süd-Kamerun and the Gesellschaft Nordwest-Kamerun to collect rubber and ivory.',
    'Labour was the great problem: the Germans used **forced labour** and harsh recruitment of workers from the interior for the plantations, and imposed **porterage** (carrying loads on the head) for officials and companies. Many workers died of disease, overwork and poor food. A **head tax** forced people to earn money by working for Europeans.',
  ], 'hist3-german-economy', 'Plantations grew on Bakweri land with forced labour.',
  ['The people whose land was taken for the Mount Cameroon plantations were the:', ['Bakweri', 'Bassa', 'Bamum', 'Fulani'], 'They were moved to reserves.'],
  [['Plantation', 'A large farm growing one crop for export.'], ['Concession', 'Land or rights granted to a company to exploit.'], ['Reserve', 'Land set aside for Africans after their land was taken.']],
  [
    { q: 'Explain how the head tax helped the German plantations.', steps: ['People had to pay the tax in **money**.', 'To get money, they had to **work for wages** on plantations or for traders.', 'So the tax pushed people into the **colonial labour force**.'] },
  ]),

  L('hi-infrastructure-3', 'hi-f3-german-economy', '8.2', 'Railways, roads, ports and research', 12, ['Cameroon history'], [
    'To carry exports and troops, the Germans built **infrastructure**: the **Northern railway** from **Bonaberi** to **Nkongsamba** (completed in **1911**); the **Central railway** from Douala towards Yaoundé (begun by the Germans and completed to Yaoundé by the French in 1927); roads and bridges; and the ports of **Douala**, **Victoria** and **Kribi**. A telegraph line linked the main posts.',
    'In **1892** they founded the **botanic garden** at **Victoria** (Limbe) to test crops such as cocoa, rubber and oil palm for the plantations; it still exists.',
    'These works laid the base of Cameroon’s modern economy, but they were built mainly with **forced labour**, served **German economic interests** and left much of the interior undeveloped.',
  ], 'hist3-infrastructure', 'Every railway led from a plantation or forest to a port.',
  ['The Victoria botanic garden was founded in:', ['1892', '1884', '1911', '1946'], 'For crop research.'],
  [['Infrastructure', 'Basic structures such as roads, railways and ports.'], ['Botanic garden', 'A garden for the study and display of plants.']],
  [
    { q: 'Assess German infrastructure in Cameroon in two sentences.', steps: ['Positive: railways, roads and ports **laid the base** of the modern economy.', 'Negative: they were built with **forced labour** and mainly served **German exports**, not Cameroonians.'] },
  ]),

  // ---------- 9. German social policy ----------
  L('hi-german-schools-3', 'hi-f3-german-social', '9.1', 'Education in German Kamerun', 12, ['Cameroon history'], [
    'Most schools in Kamerun were run by **missions**: the **Basel Mission** (Protestant, from **1886**, taking over the Baptist work), the Catholic **Pallottine Fathers** (from **1890**), the **American Presbyterians** in the south (among the Bulu around Batanga, Efulan and Elat) and German Baptists. The first **government school** opened in **Douala** in **1888**, under the teacher **Theodor Christaller**, followed by others in Victoria, Yaoundé and Garoua.',
    'Schools taught reading, writing, arithmetic, religion and crafts; from **1910** the government required **German** to be taught in schools that received grants. Mission schools also wrote and taught local languages such as Duala and Bulu.',
    'Effects: a small class of **literate Cameroonians** grew (clerks, teachers, catechists, interpreters), who later played a role in nationalism. But education was limited, and much of the north had few schools.',
  ], 'hist3-german-social', 'Missions taught most pupils; the state opened the first school in 1888.',
  ['The first German government school opened in Douala in 1888 under:', ['Theodor Christaller', 'Alfred Saker', 'Gustav Nachtigal', 'Eugen Zintgraff'], 'A German teacher.'],
  [['Catechist', 'A teacher of the Christian religion.'], ['Mission school', 'A school run by a religious mission.']],
  [
    { q: 'Why were missions so important for education in German Kamerun?', steps: ['The government opened **only a few schools**.', 'Missions (Basel, Pallottine, Presbyterian) opened **many schools** across the south.', 'They also **wrote and taught local languages**.'] },
  ]),

  L('hi-german-health-3', 'hi-f3-german-social', '9.2', 'Health services and social change', 12, ['Cameroon history'], [
    'The Germans built **hospitals** in Douala, Victoria and other posts, and doctors studied tropical diseases such as malaria and **sleeping sickness**. Missions also ran dispensaries. These services were mainly meant to protect **Europeans** and to keep **workers** fit, and they reached few villages.',
    '**Social changes** under German rule: the growth of towns (Douala, Victoria, Buea, Kribi, Yaoundé); new crops and money; Christianity and Western dress; migration of workers to the plantations; the weakening of some traditional authorities. There were also great sufferings: forced labour, land loss and violent punishment.',
    'The German period lasted only about thirty years (1884 to 1916), but it created the borders of Cameroon, its first railways and plantations, and a first educated elite.',
  ], 'hist3-german-social', 'Thirty years of German rule left borders, railways, plantations and schools.',
  ['German health services were aimed mainly at:', ['protecting Europeans and keeping workers fit', 'all villages equally', 'training African doctors for independence', 'the League of Nations'], 'Colonial priorities.'],
  [['Sleeping sickness', 'A disease spread by the tsetse fly.'], ['Elite', 'A small group with education, wealth or power.']],
  [
    { q: 'Give two lasting legacies of German rule in Cameroon.', steps: ['The **borders** of Kamerun, which are close to those of modern Cameroon.', '**Railways, ports and plantations** that remain important today.'] },
  ]),

  // ---------- 10. Kamerun campaign ----------
  L('hi-kamerun-campaign-3', 'hi-f3-ww1-cmr', '10.1', 'The Kamerun campaign (1914 to 1916)', 12, ['Cameroon history', 'World history'], [
    'When the **First World War** began in August 1914, Britain and France attacked Germany’s colonies. Kamerun bordered British **Nigeria** and **French Equatorial Africa**, so it was invaded from several sides by **British, French and Belgian** forces, which included many African soldiers.',
    '**Main events**: an Allied force under the British **General Charles Dobell** captured **Douala** on **27 September 1914**; French forces under **General Joseph Aymerich** advanced from the east and south; Belgian troops came from the Congo; **Garoua** fell in June 1915; **Yaoundé** fell on **1 January 1916**. The Germans retreated into neutral **Spanish Guinea** (Rio Muni). The last German garrison, at **Mora** in the far north, surrendered on **18 February 1916**.',
  ], 'hist3-kamerun-campaign', 'Douala 1914, Yaoundé 1 January 1916, Mora 18 February 1916.',
  ['The British general who captured Douala in 1914 was:', ['Charles Dobell', 'Joseph Aymerich', 'Philippe Leclerc', 'Frederick Lugard'], 'On 27 September 1914.'],
  [['Campaign', 'A series of military operations in one area.'], ['Garrison', 'Troops stationed in a fort or town.']],
  [
    { q: 'Put these events of the Kamerun campaign in order: Yaoundé falls; Mora surrenders; Douala is captured; Garoua falls.', steps: ['**27 September 1914**: Douala captured.', '**June 1915**: Garoua falls.', '**1 January 1916**: Yaoundé falls.', '**18 February 1916**: Mora surrenders.'] },
  ]),

  L('hi-german-defeat-3', 'hi-f3-ww1-cmr', '10.2', 'Why the Germans lost Kamerun, and the cost of the war', 12, ['Cameroon history'], [
    '**Reasons for the German defeat**: the Germans were **outnumbered**; the British navy’s **blockade** cut them off from reinforcements and supplies from Germany; they ran short of **ammunition**; and they were attacked from **many directions** at once. The loss of Douala, the main port, was a heavy blow.',
    '**The cost for Cameroonians**: thousands were forced to work as **porters** for both armies; villages were burned and crops taken; hunger and disease spread. Cameroonians fought on **both sides**, in the German Schutztruppe and in the Allied forces.',
    'The defeat ended German rule. Britain and France now had to decide what to do with Kamerun, which led to its **partition**.',
  ], 'hist3-kamerun-campaign', 'Outnumbered, blockaded, short of ammunition, surrounded.',
  ['The naval blockade hurt the Germans because it:', ['stopped supplies and reinforcements from Germany', 'gave them more ships', 'ended the war in 1914', 'helped them escape'], 'They were cut off.'],
  [['Blockade', 'Cutting off an area from supplies, especially by sea.'], ['Neutral', 'Not taking part in a war.']],
  [
    { q: 'Give three reasons for the German defeat in Kamerun.', steps: ['They were **outnumbered** by British, French and Belgian forces.', 'The **blockade** cut off supplies from Germany.', 'They were **attacked from several sides** and lost their main port, Douala.'] },
  ]),

  // ---------- 11. Partition ----------
  L('hi-partition1916-3', 'hi-f3-partition', '11.1', 'The provisional partition of 1916', 12, ['Cameroon history'], [
    'Even before the fighting ended, Britain and France agreed in **1916** on a **provisional partition** of Kamerun, often called the **Picot line** after the French diplomat Georges Picot. France took about **four-fifths** of the territory, including **Douala** and **Yaoundé**; Britain took about **one-fifth**, in two separate strips along the Nigerian border (the future **Northern** and **Southern Cameroons**).',
    'France got the larger share partly because its troops had done much of the fighting in the east and south and because Britain wanted French support elsewhere in the war. The division was made by the Allies alone, without consulting the people of Cameroon.',
  ], 'hist3-partition', 'Four-fifths to France, one-fifth to Britain.',
  ['The provisional partition of 1916 gave France about:', ['four-fifths of Kamerun', 'one-fifth', 'half', 'none'], 'Including the main towns.'],
  [['Partition', 'The division of a territory between powers.'], ['Provisional', 'Temporary, until a final decision.']],
  [
    { q: 'Describe the two parts of Cameroon after 1916.', steps: ['**French Cameroun**: about **four-fifths**, with Douala and Yaoundé.', '**British Cameroons**: about **one-fifth**, in **two strips** along the Nigerian border (Northern and Southern Cameroons).'] },
  ]),

  L('hi-london1919-3', 'hi-f3-partition', '11.2', 'The Milner-Simon Declaration and the Treaty of Versailles', 12, ['Cameroon history', 'World history'], [
    'The partition was confirmed, with small changes, by the **Milner-Simon Declaration** signed in **London** on **10 July 1919** by the British colonial secretary Lord **Milner** and the French minister Henry **Simon**.',
    'By the **Treaty of Versailles** (28 June 1919), **Germany gave up all its colonies** (Article 119). The land Germany had gained in 1911 (**Neukamerun**) returned to French Equatorial Africa. The two parts of Cameroon were then placed under the **League of Nations** as **mandates**, confirmed on **20 July 1922**.',
    '**Consequences**: two different colonial powers, with different languages, laws, schools and systems of government, ruled Cameroon for over forty years. This is the origin of the **anglophone** and **francophone** heritage of modern Cameroon, and of the later movement for **reunification**.',
  ], 'hist3-partition', 'Partition 1916, confirmed 1919, mandates 1922.',
  ['The Milner-Simon Declaration was signed in:', ['London on 10 July 1919', 'Berlin in 1884', 'Versailles in 1916', 'Geneva in 1922'], 'It confirmed the boundary.'],
  [['Milner-Simon Declaration', 'The 1919 agreement confirming the Anglo-French boundary in Cameroon.'], ['Reunification', 'Joining again parts that had been divided.']],
  [
    { q: 'Explain how the partition still affects Cameroon today.', steps: ['Britain and France ruled their parts **differently for over forty years**.', '**English and French**, two legal systems and two school systems took root.', 'Modern Cameroon is **bilingual and bicultural** because of this history.'] },
  ]),

  // ---------- 12. Mandate ----------
  L('hi-article22-3', 'hi-f3-mandate', '12.1', 'Article 22 and the classes of mandate', 12, ['World history', 'Cameroon history'], [
    'After the war, the victors did not simply annex Germany’s colonies and the Arab lands of the Ottoman Empire. Under **Article 22** of the **Covenant of the League of Nations**, these territories became **mandates**, to be administered by "advanced nations" as "**a sacred trust of civilisation**", under League supervision.',
    'Mandates were grouped by their supposed level of development:\n- **class A**: former Turkish territories (Iraq, Syria, Lebanon, Palestine, Transjordan), considered close to independence\n- **class B**: most of Germany’s colonies in Central and East Africa: **Cameroon**, **Togo** (both divided between Britain and France), **Tanganyika** (Britain) and **Ruanda-Urundi** (Belgium)\n- **class C**: South-West Africa (under South Africa) and the Pacific islands, ruled almost as part of the mandatory power.',
  ], 'hist3-mandate', 'Class A near independence; class B like Cameroon; class C almost annexed.',
  ['Cameroon and Togo were mandates of class:', ['B', 'A', 'C', 'D'], 'Former German colonies in Africa.'],
  [['Mandate', 'A territory administered by a power on behalf of the League of Nations.'], ['Covenant', 'The founding agreement of the League of Nations.']],
  [
    { q: 'Compare class A and class B mandates.', steps: ['Class A (Iraq, Syria): **former Turkish lands**, considered **near independence**.', 'Class B (Cameroon, Togo): **former German African colonies**, with **no fixed date or goal of independence**.'] },
  ]),

  L('hi-classb-3', 'hi-f3-mandate', '12.2', 'Obligations of the mandatory powers in Cameroon', 12, ['Cameroon history'], [
    'Cameroon became a **class B mandate**, divided between Britain and France and confirmed on **20 July 1922**. The mandatory powers had to:\n- guarantee **freedom of conscience and religion**\n- forbid the **slave trade** and forced labour except for essential public works, and control the arms and liquor trade\n- not build military bases or raise local armies except for police and local defence\n- allow **equal trade** opportunities to all League members\n- promote the **well-being** of the inhabitants\n- send an **annual report** to the League’s **Permanent Mandates Commission**.',
    '**Weaknesses**: the Commission could not **visit** the territories; it depended on the reports of the mandatory powers themselves; petitions from inhabitants had to pass through those powers; and there was no stated goal of **independence**. In practice, Britain and France ruled their mandates much like colonies.',
  ], 'hist3-mandate', 'Annual reports, but no visits and no promise of independence.',
  ['The League body that examined reports on mandates was the:', ['Permanent Mandates Commission', 'Trusteeship Council', 'Security Council', 'General Assembly'], 'In Geneva.'],
  [['Mandatory power', 'A state administering a mandate.'], ['Permanent Mandates Commission', 'The League body that examined reports on mandates.']],
  [
    { q: 'Give three weaknesses of the mandate system.', steps: ['The Commission **could not visit** the territories.', 'It relied on **reports written by the mandatory powers**.', 'Class B mandates had **no stated goal of independence**.'] },
  ]),
];
