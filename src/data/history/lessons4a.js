// History lessons for Form 4, term 1: pre-colonial Cameroon, the German
// annexation and rule, the First World War in Cameroon and the partition,
// the mandate era, the Second World War and the UN trusteeship. Original text
// written for this app. **double asterisks** mark key terms; `examples` are
// worked examples.

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

export const LESSONS_4A = [
  // ---------- Pre-colonial Cameroon ----------
  L('hi-lamidats-4', 'hi-f4-precolonial', '1.1', 'The Fulani Lamidats of the North', 14, ['Cameroon history'], [
    'Fulani (Fulbe) cattle herders had moved into northern Cameroon over many generations. In the early nineteenth century the **jihad** (holy war) of **Usman dan Fodio**, which began in Hausaland in 1804, reached the region. In 1806 **Modibo Adama** received a flag from Usman dan Fodio to spread Islam in the land called Fombina, later named **Adamawa** after him, with its capital at **Yola**. His followers founded **Lamidats** such as Garoua, Maroua, Ngaoundéré, Rey Bouba, Tibati and Banyo.',
    'Political organisation was **centralised**:\n- the Emir of Yola (the Lamido Fombina) owed allegiance to the Sultan of **Sokoto**\n- each Lamidat was ruled by a **Lamido** (plural Lamibé), chosen from the founding family\n- he was assisted by a council of officials: a chief minister (Waziri), an army leader (Kaigama), and a judge (**Alkali**) who applied Islamic law (**Sharia**)\n- district and village heads (Lawan, Djaoro) collected taxes and kept order.',
    'Society was **hierarchical**: the Fulani ruling families, free Muslims, conquered non-Muslim peoples, and slaves. The economy rested on **cattle rearing**, farming (much of it done by subject peoples), crafts such as leatherwork and weaving, **long-distance trade** with Kano and across the Sahara, and taxes such as **zakat** and tribute, including slaves taken in raids. Islam shaped law, education (Koranic schools) and daily life.',
  ], 'hist-precolonial', 'Lamidats were centralised Islamic states linked to Yola and Sokoto.',
  ['The judge in a Lamidat who applied Islamic law was the:', ['Alkali', 'Kaigama', 'Fon', 'Kwifon'], 'The Alkali judged cases by Sharia.'],
  [['Jihad', 'A holy war to spread or purify Islam.'], ['Lamido', 'The ruler of a Fulani Lamidat (plural Lamibé).'], ['Sharia', 'Islamic law.'], ['Zakat', 'An Islamic tax or alms on wealth.']],
  [
    { q: 'Explain why the Lamidats are described as centralised states.', steps: ['There was a single ruler (the Lamido) with authority over a defined territory.', 'He ruled through appointed officials (Waziri, Kaigama, Alkali) and district heads who collected taxes.', '**Authority flowed from the top: from Sokoto to Yola to each Lamido, with one law (Sharia), a tax system and an army.**'] },
  ]),

  L('hi-fondoms-4', 'hi-f4-precolonial', '1.2', 'The Fondoms of the Grassfields', 14, ['Cameroon history'], [
    'The western highlands, or **Grassfields**, were organised into kingdoms called **Fondoms**: Bafut, Nso, Kom, Mankon, Bali-Nyonga and many others, as well as the Bamileke chiefdoms and the kingdom of the **Bamum**, whose King Njoya created a script for his people at the end of the nineteenth century.',
    'Political organisation:\n- the **Fon** was the political, judicial and religious head, seen as sacred and as the link with the ancestors\n- a successor was usually chosen among the Fon’s sons by kingmakers\n- the **Kwifon** (called Ngumba in some Fondoms and Ngwerong in Nso) was a regulatory society that enforced laws and decisions, and could check or even remove a Fon who abused power\n- councils of **notables**, quarter heads and palace servants (**nchindas**) helped to govern; military societies defended the Fondom.',
    'Society was organised in lineages, with titles and secret societies that gave status. The economy was based on **farming** (women grew most food crops), **crafts** (wood carving, bronze casting, pottery, weaving, iron work) and **trade** in kola nuts, palm oil, salt, cloth and, before abolition, slaves, through periodic markets linking the Grassfields with the coast and the North.',
  ], 'hist-precolonial', 'Remember the Kwifon: it enforced the Fon’s laws but could also check the Fon.',
  ['In Grassfields Fondoms, a Fon who abused power could be checked by:', ['the Kwifon', 'the Alkali', 'the Sultan of Sokoto', 'the German governor'], 'The regulatory society limited the Fon’s power.'],
  [['Fondom', 'A Grassfields kingdom ruled by a Fon.'], ['Kwifon', 'The regulatory society of a Fondom that enforced laws and could check the Fon.'], ['Nchinda', 'A palace servant or messenger of the Fon.'], ['Kingmaker', 'A notable who helps choose a new ruler.']],
  [
    { q: 'Compare the power of a Fon with that of a Lamido.', steps: ['Both were sacred or religious leaders as well as political rulers, and both governed with councils.', 'The Lamido ruled under Islamic law and owed allegiance to Yola and Sokoto.', '**The Fon ruled by tradition and ancestral authority, and his power was balanced by the Kwifon, which could restrain him.**'] },
  ]),

  L('hi-segmentary-4', 'hi-f4-precolonial', '1.3', 'Segmentary societies of the forest zone', 13, ['Cameroon history'], [
    'Many peoples of the southern forest, such as the **Beti** (Ewondo, Eton), **Bulu**, **Fang**, **Bassa** and **Maka**, lived in **segmentary** (or acephalous, "headless") societies. There was **no central ruler** over the whole people. Authority belonged to the heads of families, lineages and villages, and important decisions were taken by **assemblies of elders**, usually by consensus.',
    'Social organisation:\n- people belonged to **patrilineal clans** (descent through the father)\n- initiation rites, such as the **So** of the Beti, marked the passage to adulthood\n- disputes were settled by elders, with oaths and ordeals\n- there was no standing army and no tribute to a king.\nOn the coast, the **Duala** were organised under chiefs (Bell, Akwa, Deido) whose power grew through trade, and the **Ngondo** assembly brought the coastal Sawa peoples together.',
    'The economy was based on **shifting cultivation** of crops such as cassava, plantains and yams, hunting, fishing and gathering, and on trade in ivory, palm products and rubber with the coast. The Duala acted as **middlemen** between the interior and European traders.',
  ], 'hist-precolonial', 'Segmentary means authority is spread among lineages, not held by one ruler.',
  ['In a segmentary society, decisions were usually taken by:', ['an assembly of elders', 'a Lamido', 'a Fon and the Kwifon', 'a colonial governor'], 'Authority was shared among family and lineage heads.'],
  [['Segmentary society', 'A society without a central ruler, organised by lineages.'], ['Acephalous', 'Literally "headless": without a single political head.'], ['Patrilineal', 'Tracing descent through the father.'], ['Middleman', 'A trader who buys from one group and sells to another.']],
  [
    { q: 'Give three differences between the Lamidats and the segmentary societies.', steps: ['Ruler: **a Lamido with officials, against no central ruler (elders and lineage heads).**', 'Law: **Islamic law (Sharia) judged by the Alkali, against customary law settled by elders.**', 'Army and taxes: **a standing army and taxes such as zakat, against no army and no tribute.**'] },
  ]),

  // ---------- The annexation ----------
  L('hi-scramble-4', 'hi-f4-annexation', '2.1', 'Traders, missionaries and the scramble for Cameroon', 14, ['Cameroon history'], [
    'Portuguese sailors reached the Wouri estuary in 1472 and, seeing many prawns, called it Rio dos Camarões (river of prawns), from which the name Cameroon comes. For centuries the coast traded with Europeans, including in slaves. After Britain abolished the slave trade in 1807, its navy patrolled the coast and signed anti-slave-trade treaties with Duala kings from 1840. "Legitimate trade" in **palm oil**, ivory and rubber grew, and the Duala controlled it as **middlemen**, receiving a duty called **comey** from European traders.',
    '**Missionaries** came in the 1840s: Jamaican and British Baptists such as Joseph Merrick and **Alfred Saker**, who worked in Douala and founded **Victoria** in 1858. They opened schools, translated the Bible into Duala and spread Western education.',
    'Why the scramble? The Douala kings, troubled by trade quarrels and rivalries, wrote to **Queen Victoria** (1879) and to Prime Minister **Gladstone** (1881) asking Britain to annex their country. Britain **hesitated**, unwilling to bear the cost. France was active in nearby Gabon. In 1884 the German chancellor **Bismarck**, pressed by Hamburg merchants such as **Adolph Woermann**, sent the explorer **Gustav Nachtigal** to West Africa. The Berlin Conference (1884 to 1885) then set rules for European claims in Africa.',
  ], 'hist-annexation', 'Britain was invited first, but delayed; Germany acted.',
  ['Who founded Victoria (Limbe) in 1858?', ['Alfred Saker', 'Gustav Nachtigal', 'King Bell', 'Edward Hewett'], 'The Baptist missionary moved there from Fernando Po.'],
  [['Comey', 'A trade duty paid by European traders to Duala chiefs.'], ['Legitimate trade', 'Trade in goods such as palm oil that replaced the slave trade.'], ['Scramble for Africa', 'The rush of European powers to claim African territory in the late nineteenth century.']],
  [
    { q: 'Explain why Britain lost Cameroon to Germany in 1884.', steps: ['Britain was invited by the Douala kings (1879, 1881) but delayed because of cost and official reluctance.', 'Germany acted quickly: Bismarck sent Nachtigal, and German firms signed a treaty with the kings on 12 July 1884.', '**The British consul Hewett arrived on 19 July 1884, after the German flag had been raised, so Britain was too late.**'] },
  ]),

  L('hi-treaty1884-4', 'hi-f4-annexation', '2.2', 'The Germano-Duala Treaty of 12 July 1884', 14, ['Cameroon history'], [
    'On **12 July 1884**, **King Bell** (Ndumbe Lobe Bell), **King Akwa** (Dika Mpondo Akwa) and other chiefs signed a treaty with Eduard Schmidt of the Woermann firm and Johannes Voss of **Jantzen & Thormählen**, transferring sovereignty over their land. On 14 July **Gustav Nachtigal**, arriving on the gunboat Möwe, hoisted the German flag. The British consul **Edward Hewett** arrived on 19 July: he became known as the "too-late consul".',
    'The kings attached **conditions** to the treaty, including:\n- the territory must not be handed to any third power\n- existing treaties of friendship and trade remained valid\n- the land cultivated by the Duala and the sites of their towns would remain their property\n- the comey would continue to be paid to the kings\n- Duala customs would be respected\n- the Duala wished to keep their role as middlemen in trade.',
    'Not all accepted the treaty. **Lock Priso** of Hickory Town (Bonaberi) refused and supported Britain; in December 1884 German warships attacked his town. Britain gave up its claims, handing over Victoria in 1887, and the Germans soon broke the conditions by taking land and ending the middleman trade, which later caused resistance.',
  ], 'hist-annexation', 'Learn the date, the signatories and at least four conditions of the 1884 treaty.',
  ['One condition the Douala kings set in 1884 was that:', ['their land and town sites would remain their property', 'they would pay German taxes', 'they would leave the coast', 'Britain would rule the interior'], 'The kings tried to protect land and trade.'],
  [['Annexation', 'The taking of a territory by a state, making it part of its possessions.'], ['Sovereignty', 'Supreme authority over a territory.'], ['Protectorate', 'A territory under the protection and control of a foreign power.']],
  [
    { q: 'Give three reasons why King Bell and King Akwa signed the 1884 treaty.', steps: ['**They hoped for European protection and help in settling trade disputes and rivalries among Duala chiefs.**', '**They wanted to keep their trade and middleman position, which they wrote into the conditions.**', '**They received gifts and payments from the German firms.**'] },
  ]),

  // ---------- German rule ----------
  L('hi-germanadmin-4', 'hi-f4-germanrule', '3.1', 'German administration and economic exploitation', 15, ['Cameroon history'], [
    'German governors: **Julius von Soden** (1885 to 1891), Eugen von Zimmerer (1891 to 1895), **Jesko von Puttkamer** (1895 to 1907), Theodor Seitz (1907 to 1910), Otto Gleim (1910 to 1912) and Karl Ebermaier (1912 to 1916). The governor ruled with district officers and military stations in the interior, backed by a colonial army, the **Schutztruppe**. In 1901 Puttkamer moved the capital to **Buea**. In 1911 a Franco-German treaty enlarged the colony with land called Neukamerun.',
    'Economic exploitation:\n- **plantations** of cocoa, rubber, bananas and oil palm on the fertile land around **Mount Cameroon**, after taking Bakweri land\n- huge **concessions** to companies such as the Gesellschaft Süd-Kamerun and the Gesellschaft Nordwest-Kamerun\n- **forced labour** and labour recruitment for plantations, roads, railways and **porterage**, often with brutal treatment\n- a head tax, collected through chiefs.',
    'Infrastructure and services: the **Northern railway** from Bonaberi to Nkongsamba (completed in 1911), the Central railway from Douala towards Yaoundé, roads, the ports of Douala, Victoria and Kribi, and the Victoria botanic garden (1892). Missions (Basel, Pallottine Catholic, American Presbyterian) ran most schools; the first government school opened in Douala in 1888. These projects served German economic interests first.',
  ], 'hist-german-rule', 'Pair each German achievement with its cost to Cameroonians.',
  ['The Northern railway built by the Germans ran from Bonaberi to:', ['Nkongsamba', 'Yaoundé', 'Garoua', 'Maroua'], 'It was completed in 1911.'],
  [['Schutztruppe', 'The German colonial army.'], ['Concession', 'Land or rights granted to a company to exploit.'], ['Forced labour', 'Work imposed on people against their will, often unpaid.'], ['Porterage', 'Carrying loads on the head, often imposed on Africans.']],
  [
    { q: 'Assess German economic policy in Cameroon in two balanced paragraphs (outline).', steps: ['Positive results: **railways, roads, ports, plantations and the botanic garden laid the base of the modern economy.**', 'Negative results: **land was seized, labour was forced and brutal, and profits went to German companies.**', 'Judgement: **the policy developed Cameroon’s economy mainly for German benefit and at a heavy human cost.**'] },
  ]),

  L('hi-resistance-4', 'hi-f4-germanrule', '3.2', 'Resistance to German rule', 15, ['Cameroon history'], [
    'Causes of resistance: loss of **land**, **forced labour**, taxes, brutality, the breaking of the 1884 conditions, and the end of the Duala **middleman** trade as the Germans pushed inland.',
    'Major resistances:\n- **Douala**: Lock Priso opposed the annexation in 1884. Later **Rudolf Duala Manga Bell**, King of Bell, opposed the German plan (1910 to 1914) to expropriate the Duala from their land on the Joss plateau; he petitioned the German parliament, was arrested and hanged with Adolf Ngoso Din on **8 August 1914**\n- **Bakweri**: led by **Kuva Likenye**, they defeated a German force at Buea in 1891, killing its commander von Gravenreuth; the Germans returned and took Buea in 1894\n- **Mankon**: in 1891 the Fon of Mankon fought the explorer **Eugen Zintgraff** and his Bali allies\n- **Bulu** (1899 to 1901) and **Nso** (1902 to 1906) also took up arms; **Martin-Paul Samba** was executed in August 1914.',
    'Why the resistances failed: the Germans had modern weapons such as machine guns; African groups were divided and some (such as Bali) allied with the Germans; resistance was local rather than united. Consequences: land loss, reserves for the Bakweri, punitive expeditions, but also a memory of resistance that later inspired nationalists.',
  ], 'hist-german-rule', 'For each resistance: who, where, when, why, and the outcome.',
  ['Rudolf Duala Manga Bell was hanged in August 1914 for opposing:', ['the expropriation of Duala land', 'the 1884 treaty', 'the British', 'the plebiscite'], 'He led the protest against the land seizure.'],
  [['Expropriation', 'Taking property away from its owners, especially land, by the state.'], ['Punitive expedition', 'A military campaign to punish resistance.'], ['Reserve', 'Land set aside for Africans after their land was taken.']],
  [
    { q: 'Explain why most resistance to German rule failed.', steps: ['**Military: German machine guns and trained troops overwhelmed spears and old guns.**', '**Division: Cameroonian peoples fought separately, and some, such as Bali, helped the Germans.**', '**Organisation: resistances were local and short, so the Germans could defeat them one by one.**'] },
  ]),

  // ---------- The First World War ----------
  L('hi-campaign-4', 'hi-f4-ww1cameroon', '4.1', 'The Kamerun campaign (1914 to 1916)', 14, ['Cameroon history', 'World history'], [
    'When the **First World War** broke out in August 1914, Britain and France decided to seize Germany’s colonies, their ports and wireless stations. Kamerun bordered British Nigeria and French Equatorial Africa, so it was attacked from several sides by **British, French and Belgian** forces, including many African soldiers.',
    'Course of the war:\n- early German successes, such as at Garoua and Nsanakang (August and September 1914)\n- an Allied naval and land force under the British **General Charles Dobell** captured **Douala on 27 September 1914**\n- French forces under **General Joseph Aymerich** advanced from the east and south; Belgian troops came from the Congo\n- Garoua fell in June 1915, and **Yaoundé** on 1 January 1916\n- the Germans retreated into neutral **Spanish Guinea** (Rio Muni); the last garrison, at **Mora**, surrendered on 18 February 1916.',
    'Why the Germans lost: they were outnumbered, cut off from Germany by the Allied naval blockade, short of ammunition, and attacked from many directions. For Cameroonians the war meant forced porterage, destroyed villages, hunger and disease; Cameroonians fought on both sides.',
  ], 'hist-ww1-cameroon', 'Douala 1914, Yaoundé 1 January 1916, Mora February 1916.',
  ['Douala was captured by Allied forces on:', ['27 September 1914', '1 January 1916', '12 July 1884', '18 February 1916'], 'Under General Dobell.'],
  [['Blockade', 'Cutting off an area from supplies, especially by sea.'], ['Garrison', 'Troops stationed in a fort or town.'], ['Neutral', 'Not taking part in a war.']],
  [
    { q: 'Give four reasons for the German defeat in Cameroon.', steps: ['**They were outnumbered by British, French and Belgian forces.**', '**The naval blockade cut off reinforcements and supplies from Germany.**', '**They ran short of ammunition and supplies.**', '**They were attacked from several directions at once, from Nigeria, the sea, French Equatorial Africa and the Congo.**'] },
  ]),

  L('hi-partition-4', 'hi-f4-ww1cameroon', '4.2', 'The partition of Cameroon (1916 to 1919)', 13, ['Cameroon history'], [
    'Even before the fighting ended, Britain and France agreed in **1916** on a **provisional partition**, often called the **Picot line** after the French diplomat Georges Picot. France took about **four-fifths**, including Douala and Yaoundé; Britain took about **one-fifth**, in two separate strips along the Nigerian border.',
    'The boundary was confirmed with small changes by the **Milner-Simon Declaration** of **10 July 1919**. By the **Treaty of Versailles** (1919), Germany gave up all its colonies, and the land Germany had gained in 1911 (Neukamerun) returned to French Equatorial Africa. In **1922** the League of Nations confirmed the two parts as mandates under Britain and France.',
    'Consequences: Cameroon was divided between two powers with different languages, laws, systems of education and administration. This division is the origin of the **anglophone and francophone** heritage of modern Cameroon, and of the later question of reunification.',
  ], 'hist-ww1-cameroon', 'Partition 1916 (Picot), confirmed 1919 (Milner-Simon), mandates 1922.',
  ['The Milner-Simon Declaration of 1919:', ['confirmed the Anglo-French boundary in Cameroon', 'created the UPC', 'ended the plebiscite', 'began German rule'], 'It fixed the partition line.'],
  [['Partition', 'The division of a territory between powers.'], ['Picot line', 'The provisional Anglo-French partition line of 1916.'], ['Milner-Simon Declaration', 'The 1919 agreement confirming the Anglo-French boundary.']],
  [
    { q: 'Explain how the partition of 1916 to 1919 still affects Cameroon today.', steps: ['Britain and France ruled their parts differently for over forty years.', 'English and French, two legal systems and two school systems took root.', '**Modern Cameroon is bilingual and bicultural, and debates about the place of the anglophone regions go back to this partition.**'] },
  ]),

  // ---------- The mandate era ----------
  L('hi-mandatesystem-4', 'hi-f4-mandate', '5.1', 'The mandate system of the League of Nations', 13, ['Cameroon history', 'World history'], [
    'Article 22 of the **Covenant of the League of Nations** placed former German and Turkish territories under **mandate**: they were to be administered by "advanced nations" as "a sacred trust of civilisation". Mandates were classed **A**, **B** or **C** by their supposed level of development.',
    'Cameroon became a **class B** mandate, divided between Britain and France and confirmed on **20 July 1922**. The mandatory power had to:\n- guarantee freedom of conscience and religion\n- forbid the slave trade and control the arms and liquor trade\n- not raise armies of local people except for police and local defence\n- allow equal trade opportunities to all League members\n- send an **annual report** to the **Permanent Mandates Commission**.',
    'Weaknesses: the Commission could not visit the territories and depended on the reports of the mandatory powers; petitions from inhabitants had to pass through those powers; and for class B mandates there was no stated goal of independence.',
  ], 'hist-mandate-compare', 'Class B, 1922, annual reports to the Permanent Mandates Commission.',
  ['Under the mandate, the mandatory powers had to report every year to the:', ['Permanent Mandates Commission', 'UN Trusteeship Council', 'OAU', 'German Reichstag'], 'The League’s supervising body.'],
  [['Mandate', 'A territory administered by a power on behalf of the League of Nations.'], ['Covenant', 'The founding agreement of the League of Nations.'], ['Permanent Mandates Commission', 'The League body that examined reports on mandates.']],
  [
    { q: 'Give three weaknesses of the mandate system.', steps: ['**The Commission could not visit the territories.**', '**It relied on reports written by the mandatory powers themselves.**', '**Class B mandates such as Cameroon had no stated goal of self-government or independence.**'] },
  ]),

  L('hi-indirectrule-4', 'hi-f4-mandate', '5.2', 'British rule: indirect rule in British Cameroons', 14, ['Cameroon history'], [
    'Britain administered its mandate **as part of Nigeria**: Northern Cameroons with the northern provinces, and Southern Cameroons as the Cameroons Province, with its headquarters at **Buea**. It used **indirect rule**, the system associated with Lord **Frederick Lugard**: ruling through **traditional rulers** organised as **native authorities**, with native courts and native treasuries. Where there were no strong chiefs, as in parts of the forest, the British created chiefs or councils.',
    'Economic policy: in **1924** the former German plantations were sold at auction in London, and most were bought back by their **German** owners, who ran them until 1939. Development was slow: few roads and schools, little investment, and many posts in trade and the civil service were held by Nigerians.',
    'Assessment: indirect rule was cheap and respected traditional institutions, but British Cameroons was **neglected**, treated as a backwater of Nigeria. This neglect fed later demands for separation from Nigeria.',
  ], 'hist-mandate-compare', 'Indirect rule: ruling through native authorities, cheaply.',
  ['In 1924, most former German plantations in British Cameroons were:', ['bought back by their German owners', 'given to the Douala kings', 'turned into a French colony', 'abandoned'], 'They were auctioned in London.'],
  [['Indirect rule', 'Colonial rule through traditional rulers and native authorities.'], ['Native authority', 'A traditional ruler or council used by the British to govern locally.'], ['Neglect', 'Failure to give proper care or investment.']],
  [
    { q: 'Give two advantages and two disadvantages of indirect rule in British Cameroons.', steps: ['Advantages: **it was cheap to run, and it preserved traditional rulers and customs.**', 'Disadvantages: **it strengthened some chiefs at the expense of their people, and it left the territory underdeveloped and dependent on Nigeria.**'] },
  ]),

  L('hi-assimilation-4', 'hi-f4-mandate', '5.3', 'French rule: assimilation and the indigénat', 14, ['Cameroon history'], [
    'France ruled its larger part of Cameroon **directly**, from a capital moved to **Yaoundé** in 1921. Its policy of **assimilation** aimed in theory to turn Africans into French people in language and culture; in practice very few became French citizens. Most people were "subjects", and a small educated group were called **évolués**. Chiefs became auxiliaries of the administration, appointed and removed by French officials.',
    'Harsh features:\n- the **indigénat**: a code that let administrators punish "natives" with fines or prison **without trial**\n- **prestation**: compulsory unpaid labour on public works each year\n- forced cultivation of cash crops and a head tax.',
    'Economic and social output: the railway reached **Yaoundé in 1927**, roads and ports were built, and cocoa, coffee, bananas and timber were exported. The doctor **Eugène Jamot** led a major campaign against sleeping sickness. Compared with British Cameroons, French Cameroun received more investment but under a far more authoritarian system.',
  ], 'hist-mandate-compare', 'Assimilation, the indigénat and prestation: direct and authoritarian rule.',
  ['The indigénat allowed French officials to:', ['punish Africans without trial', 'give Africans the vote', 'end forced labour', 'create federations'], 'It was abolished in 1946.'],
  [['Assimilation', 'The French policy of making colonised people culturally French.'], ['Indigénat', 'A code allowing administrative punishment of Africans without trial.'], ['Prestation', 'Compulsory unpaid labour on public works.'], ['Évolué', 'An African educated in French culture under colonial rule.']],
  [
    { q: 'Compare British and French rule in Cameroon under the mandate.', steps: ['Method: **the British ruled indirectly through native authorities; the French ruled directly, using chiefs as auxiliaries.**', 'Policy: **the British largely left local culture alone; the French aimed at assimilation.**', 'Development: **French Cameroun received more roads, railways and health campaigns, while British Cameroons was neglected; but French rule was harsher, with the indigénat and prestation.**'] },
  ]),

  // ---------- Between the wars ----------
  L('hi-colonialclaims-4', 'hi-f4-interwar', '6.1', 'Fascism, Nazism, the failing League and German claims', 14, ['World history', 'Cameroon history'], [
    'Between the wars, **dictatorships** rose in Europe: **Benito Mussolini** took power in Italy in 1922, and **Adolf Hitler** became German chancellor in January 1933. The **League of Nations** failed to stop aggression: Japan invaded Manchuria (1931) and Italy invaded Ethiopia (1935), and the League’s sanctions were weak. The United States had never joined, and the League had no army of its own.',
    'Nazi Germany demanded the **return of its former colonies**, including Cameroon. In British Cameroons, German planters who had bought back their plantations in 1924 were again powerful, and Nazi groups were active among them. In French Cameroun, fear of a German return led to pro-French organisations such as the **Jeunesse Camerounaise Française** (JEUCAFRA), founded in 1938.',
    'These events show how Cameroon’s fate depended on European politics. They also gave Cameroonians a first experience of political organisation, which later fed nationalism.',
  ], 'hist-interwar', 'Link the European crisis to Cameroon: German colonial claims and the reaction to them.',
  ['Why did Nazi Germany take an interest in Cameroon in the 1930s?', ['It wanted its former colonies back', 'It wanted to free Cameroon', 'It had bought the UPC', 'It ruled Cameroon already'], 'Colonial claims were part of Nazi policy.'],
  [['Fascism', 'An authoritarian, extreme nationalist system, as under Mussolini.'], ['Nazism', 'The German form of fascism under Hitler, with racist ideology.'], ['Sanctions', 'Penalties, such as trade bans, against a state.']],
  [
    { q: 'Explain how events in Europe in the 1930s affected Cameroon.', steps: ['**Nazi Germany demanded the return of its colonies, including Cameroon.**', '**In British Cameroons, German planters and Nazi groups gained influence.**', '**In French Cameroun, fear of German return led to organisations such as JEUCAFRA, an early form of political organisation.**'] },
  ]),

  L('hi-freefrance-4', 'hi-f4-interwar', '6.2', 'Cameroon in the Second World War', 14, ['Cameroon history', 'World history'], [
    'France was defeated by Germany in June 1940. Most French colonies followed the **Vichy** government, which collaborated with Germany, but **General Charles de Gaulle** called on the French to continue the fight as **Free France**. On **27 August 1940**, **Colonel Philippe Leclerc** arrived in Douala and rallied French Cameroun to Free France.',
    'Cameroon’s contribution: it became a base for Free France; Cameroonian soldiers served in Free French forces; rubber, timber and food were supplied for the war effort, often through increased forced labour. In British Cameroons, the Germans were **interned** and their plantations confiscated; after the war they were run by the **Cameroon Development Corporation (CDC)**, created in 1946.',
    'Effects: the **Brazzaville Conference** (1944) promised French Africa reforms, which led in 1946 to the end of forced labour and the indigénat and to African representation in French assemblies. Ex-servicemen, the **Atlantic Charter** (1941) and the creation of the UN all encouraged demands for freedom after 1945.',
  ], 'hist-interwar', 'Leclerc, Douala, 27 August 1940: French Cameroun joins Free France.',
  ['On 27 August 1940, French Cameroun was rallied to Free France by:', ['Colonel Philippe Leclerc', 'Marshal Pétain', 'General Dobell', 'Gustav Nachtigal'], 'He arrived in Douala.'],
  [['Free France', 'De Gaulle’s movement that continued the war against Germany after 1940.'], ['Vichy', 'The French government that collaborated with Germany from 1940 to 1944.'], ['Interned', 'Held in confinement as enemy nationals during a war.']],
  [
    { q: 'Explain how the Second World War encouraged nationalism in Cameroon.', steps: ['**Cameroonian soldiers fought for freedom and returned expecting change.**', '**The war effort increased hardship and forced labour, causing resentment.**', '**The Brazzaville Conference, the Atlantic Charter and the new UN raised hopes of self-government.**'] },
  ]),

  // ---------- UN trusteeship ----------
  L('hi-trusteeship-4', 'hi-f4-trusteeship', '7.1', 'The United Nations trusteeship system', 14, ['Cameroon history', 'World history'], [
    'After the Second World War the League was replaced by the **United Nations**. On **13 December 1946** the UN approved trusteeship agreements placing French and British Cameroons under the **International Trusteeship System**, with France and Britain as **administering authorities**.',
    'Article 76 of the UN Charter set the objectives of trusteeship:\n- to further international peace and security\n- to promote the political, economic, social and educational advancement of the inhabitants\n- to promote their **progressive development towards self-government or independence**\n- to encourage respect for human rights.',
    'Supervision was stronger than under the League: the **Trusteeship Council** examined annual reports, sent **visiting missions** to the territories (the first in 1949) and received **petitions**, written and even spoken in New York. Nationalists such as **Ruben Um Nyobè** used these channels, appearing before the UN in 1952 to demand reunification and independence.',
  ], 'hist-mandate-trust', 'Trusteeship added a clear goal: self-government or independence.',
  ['Under trusteeship, a new right for the people of Cameroon was to:', ['send petitions directly to the UN', 'elect the French president', 'join the League of Nations', 'leave the UN'], 'Petitions could be written or oral.'],
  [['Trusteeship', 'UN supervision of a territory administered by a member state, aiming at self-government.'], ['Administering authority', 'The state responsible for a trust territory.'], ['Visiting mission', 'A UN team sent to inspect a trust territory.'], ['Petition', 'A formal request or complaint sent to an authority.']],
  [
    { q: 'Explain how trusteeship helped Cameroonian nationalists.', steps: ['**Article 76 promised progress towards self-government or independence, giving nationalists a legal basis for their demands.**', '**Petitions and visiting missions let them bring complaints directly to the UN.**', '**Leaders such as Um Nyobè addressed the UN, gaining international attention.**'] },
  ]),

  L('hi-mandatetrust-4', 'hi-f4-trusteeship', '7.2', 'Mandate and trusteeship compared', 13, ['Cameroon history'], [
    'Similarities: in both systems Britain and France administered Cameroon on behalf of an international organisation, reported to it each year, and had to respect freedom of religion and the welfare of the people.',
    'Differences:\n- **organisation**: the League of Nations, then the United Nations\n- **supervising body**: the Permanent Mandates Commission, then the **Trusteeship Council**\n- **goal**: well-being and development, then **self-government or independence**\n- **visits**: none, then regular **visiting missions**\n- **petitions**: only through the mandatory power, then **directly** to the UN, written or oral\n- **local troops**: limited to police and defence, then allowed to contribute to international peace.',
    'The stronger trusteeship system encouraged nationalism, because it gave Cameroonians both a promise and a platform. Within about fifteen years, both trust territories had ended their status: French Cameroun by independence in 1960, and the British Cameroons by the plebiscite of 1961.',
  ], 'hist-mandate-trust', 'Compare under headings: organisation, body, goal, visits, petitions.',
  ['Which feature belonged to trusteeship but not to the mandate?', ['regular UN visiting missions to the territory', 'annual reports', 'administration by Britain and France', 'freedom of religion'], 'The League’s Commission could not visit.'],
  [['Similarity', 'A way in which two things are alike.'], ['Trust territory', 'A territory under the UN trusteeship system.']],
  [
    { q: 'Answer the question "Compare the mandate system with the trusteeship system" in a plan.', steps: ['Paragraph 1, similarities: **administration by Britain and France, annual reports, protection of rights.**', 'Paragraph 2, differences: **the supervising body, the goal of independence, visiting missions, direct petitions.**', 'Conclusion: **trusteeship was stronger and more favourable to Cameroonians, and it opened the way to independence and reunification.**'] },
  ]),
];
