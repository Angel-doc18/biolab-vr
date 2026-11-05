// History lessons for Form 3 (second part): British and French rule in
// Cameroon, the First World War, the peace settlement, the League of Nations,
// the dictators, the Second World War, the Brazzaville Conference, the United
// Nations and trusteeship, and the revision. Foundation lessons for the GCE
// course. Original text written for this app.

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

export const LESSONS_3B = [
  // ---------- 13. British Cameroons ----------
  L('hi-indirect-3', 'hi-f3-british-cmr', '13.1', 'British Cameroons and indirect rule', 12, ['Cameroon history'], [
    'Britain ruled its mandate **as part of Nigeria**: **Northern Cameroons** with the northern provinces of Nigeria, and **Southern Cameroons** as the Cameroons Province, with its headquarters at **Buea**.',
    'Britain used **indirect rule**, the system associated with **Lord Frederick Lugard**: ruling through **traditional rulers** organised as **native authorities**, with **native courts** to judge cases by customary law and **native treasuries** to collect taxes and pay for local services. British officers (district officers and residents) supervised them. Where there were no strong chiefs, as in parts of the forest, the British created chiefs or used councils of elders.',
    'Indirect rule was **cheap** (few British officials were needed) and kept traditional institutions, but it could make some chiefs unpopular agents of colonial demands.',
  ], 'hist3-british-rule', 'Indirect rule: the British behind, the chiefs in front.',
  ['Native authorities under indirect rule had their own courts and:', ['treasuries', 'armies', 'navies', 'universities'], 'For local taxes and services.'],
  [['Indirect rule', 'Colonial rule through traditional rulers and native authorities.'], ['Native authority', 'A traditional ruler or council used by the British to govern locally.'], ['District officer', 'A British official in charge of a district.']],
  [
    { q: 'Explain how indirect rule worked in Southern Cameroons.', steps: ['**Traditional rulers** became native authorities.', 'They ran **native courts** and **treasuries** under customary law.', '**British district officers** supervised them and made the final decisions.'] },
  ]),

  L('hi-neglect-3', 'hi-f3-british-cmr', '13.2', 'Economic policy and neglect in British Cameroons', 12, ['Cameroon history'], [
    'In **1924** the former German plantations around Mount Cameroon were sold at auction in London; most were **bought back by their German owners**, who ran them until the Second World War. Only in 1946 were they placed under the **Cameroon Development Corporation** (CDC).',
    'British Cameroons received **little investment**: few roads (some areas could be reached only on foot), few schools (most run by missions), and slow economic growth. Many posts in trade and the civil service were held by **Nigerians**, and the territory had little voice in Nigerian affairs.',
    'Because of this, historians often describe British policy as **neglect** (sometimes "benign neglect"). This neglect later fed the demand of Southern Cameroonians for **separation from Nigeria** and for reunification.',
  ], 'hist3-british-rule', 'British Cameroons: a backwater of Nigeria.',
  ['Why is British rule in Cameroons often called neglect?', ['it brought little investment, few roads and few schools', 'it gave too much money', 'it built a railway everywhere', 'it gave independence in 1922'], 'Slow development.'],
  [['Neglect', 'Failure to give proper care or investment.'], ['Auction', 'A public sale in which goods go to the highest bidder.']],
  [
    { q: 'Explain how neglect led to political demands in Southern Cameroons.', steps: ['The territory was **underdeveloped** and dominated by Nigerians in jobs and trade.', 'Southern Cameroonians felt **ignored** within Nigeria.', 'They began to demand **separation from Nigeria** and later **reunification** with French Cameroun.'] },
  ]),

  // ---------- 14. French Cameroun ----------
  L('hi-direct-3', 'hi-f3-french-cmr', '14.1', 'Direct rule and assimilation in French Cameroun', 12, ['Cameroon history'], [
    'France ruled its larger part of Cameroon **directly** through French officials: a **commissioner** in **Yaoundé** (the capital from **1921**), heads of regions (circonscriptions) and subdivisions. Chiefs were kept but became **auxiliaries** of the administration, appointed, paid and removed by French officials; many were not traditional rulers at all.',
    'The French policy was **assimilation**: in theory, Africans would become French in language, culture and law. Schools taught in **French**, and French culture was presented as superior. In practice very few became French **citizens**; most were "**subjects**". A small educated group, the **évolués**, worked as clerks, teachers and nurses.',
  ], 'hist3-french-rule', 'Direct rule: French officials governed; chiefs obeyed.',
  ['In French Cameroun, chiefs became:', ['auxiliaries of the French administration', 'independent kings', 'members of the League', 'British officials'], 'Appointed and removed by France.'],
  [['Direct rule', 'Colonial rule by the colonial power’s own officials.'], ['Assimilation', 'The French policy of making colonised people culturally French.'], ['Évolué', 'An African educated in French culture under colonial rule.']],
  [
    { q: 'Compare the place of chiefs under British indirect rule and French direct rule.', steps: ['British: chiefs were **native authorities** with their own courts and treasuries.', 'French: chiefs were **auxiliaries**, appointed and removed by French officials.', 'So chiefs had **more authority** in British Cameroons.'] },
  ]),

  L('hi-indigenat-3', 'hi-f3-french-cmr', '14.2', 'The indigénat, prestation and forced labour', 12, ['Cameroon history'], [
    'French rule had harsh features:\n- the **indigénat**: a code that allowed French administrators to punish "natives" with **fines or prison without trial**, for offences such as disrespect to an official or late payment of tax\n- **prestation**: compulsory **unpaid labour** on public works (roads, railways) for a number of days each year\n- **forced labour** for companies and the building of the railway\n- **forced cultivation** of cash crops (cocoa, coffee) and a **head tax**.',
    'France also invested more than Britain: the **railway reached Yaoundé in 1927**, roads and the port of Douala were improved, and the doctor **Eugène Jamot** led a great campaign against **sleeping sickness**. The indigénat and forced labour were abolished only in **1946**.',
  ], 'hist3-french-rule', 'Indigénat: punishment without trial. Prestation: labour without pay.',
  ['Prestation was:', ['compulsory unpaid labour on public works', 'a school prize', 'a trade duty', 'a mission'], 'Days of forced work each year.'],
  [['Indigénat', 'A code allowing administrative punishment of Africans without trial.'], ['Prestation', 'Compulsory unpaid labour on public works.']],
  [
    { q: 'Why did the indigénat cause resentment in French Cameroun?', steps: ['People could be **punished without trial**.', 'Punishments were for **small offences**, such as disrespect to an official.', 'It showed that Africans were treated as **subjects without rights**.'] },
  ]),

  // ---------- 15. Comparison ----------
  L('hi-compare-econ-3', 'hi-f3-compare-zones', '15.1', 'Comparing the British and French zones', 14, ['Cameroon history'], [
    'A comparison of the two zones under the mandate:\n- **administration**: British indirect rule through native authorities, as part of Nigeria; French direct rule from Yaoundé, with chiefs as auxiliaries\n- **policy**: British respect for local institutions; French assimilation\n- **infrastructure**: few roads in British Cameroons; in French Cameroun the railway to Yaoundé (1927), roads and the port of Douala\n- **agriculture**: plantations (German-owned until 1939) in the British zone; cocoa, coffee, bananas and timber, often by forced cultivation, in the French zone\n- **education**: mostly mission schools in English in the British zone; mission and state schools in French in the French zone\n- **harshness**: British rule was milder; French rule harsher, with the indigénat and prestation.',
    'Overall: French Cameroun received **more development** but under a far more **authoritarian** system; British Cameroons was **milder but neglected**.',
  ], 'hist3-compare', 'Compare under headings: administration, policy, infrastructure, education, harshness.',
  ['Which zone had the indigénat and prestation?', ['French Cameroun', 'British Cameroons', 'both', 'neither'], 'French rule was harsher.'],
  [['Comparison', 'An account of similarities and differences.'], ['Authoritarian', 'Demanding strict obedience to authority.']],
  [
    { q: 'Write the plan of an answer to "Compare British and French rule in Cameroon (1922 to 1945)".', steps: ['**Similarities**: both ruled as mandates, sent annual reports, used chiefs and exported cash crops.', '**Differences**: indirect against direct rule; neglect against more investment; milder against harsher (indigénat, prestation).', '**Conclusion**: the two systems left two different heritages.'] },
  ]),

  L('hi-dual-heritage-3', 'hi-f3-compare-zones', '15.2', 'The dual heritage of modern Cameroon', 12, ['Cameroon history'], [
    'Because Cameroon was ruled by two powers for about forty years, it inherited a **dual heritage**:\n- **languages**: **English** and **French** are the two official languages\n- **law**: **common law** (from Britain) in the anglophone regions and **civil law** (from France) elsewhere\n- **education**: two school systems with different examinations (the GCE and the French-style BEPC and Baccalauréat)\n- **administration** and political culture.',
    'This heritage is a source of **richness** (bilingualism opens Cameroon to the English- and French-speaking worlds) and sometimes of **tension**, as in debates about the place of the anglophone regions. Understanding its origin in the partition of 1916 and the mandate helps citizens build **national unity**.',
  ], 'hist3-compare', 'Two colonisers, two languages, two laws, two school systems.',
  ['The GCE examination in Cameroon is part of the heritage of:', ['British rule', 'French rule', 'German rule', 'Roman rule'], 'The anglophone system.'],
  [['Bilingualism', 'The use of two languages.'], ['Common law', 'The legal system that developed in England, based on court decisions.'], ['Civil law', 'A legal system based on written codes, as in France.']],
  [
    { q: 'Give three elements of the dual heritage of Cameroon.', steps: ['**Two official languages**: English and French.', '**Two legal systems**: common law and civil law.', '**Two school systems**: anglophone (GCE) and francophone (BEPC, Baccalauréat).'] },
  ]),

  // ---------- 16. First World War ----------
  L('hi-ww1-causes-3', 'hi-f3-ww1', '16.1', 'The causes of the First World War', 14, ['World history'], [
    'Historians group the **long-term causes** under four headings (often remembered as **MAIN**):\n- **Militarism**: European powers built huge armies and navies; Germany and Britain raced to build battleships\n- **Alliances**: Europe was divided into two armed camps, so a local quarrel could drag in all the great powers\n- **Imperialism**: rivalry for colonies (for example the Moroccan crises of 1905 and 1911)\n- **Nationalism**: pride and hostility between nations; Slav nationalism in the Balkans threatened Austria-Hungary; France wanted to recover **Alsace-Lorraine** lost to Germany in 1871.',
    '**Immediate cause**: on **28 June 1914**, **Archduke Franz Ferdinand**, heir to the throne of Austria-Hungary, was assassinated in **Sarajevo** (Bosnia) by **Gavrilo Princip**, a Bosnian Serb nationalist. Austria-Hungary declared war on **Serbia** (28 July); Russia supported Serbia; Germany declared war on Russia and France and invaded **Belgium**; Britain declared war on Germany on **4 August 1914**.',
  ], 'hist3-ww1', 'MAIN: militarism, alliances, imperialism, nationalism; then Sarajevo.',
  ['Britain entered the war on 4 August 1914 after Germany invaded:', ['Belgium', 'Spain', 'Italy', 'Sweden'], 'Britain had guaranteed Belgium’s neutrality.'],
  [['Militarism', 'The building up of strong armed forces and readiness to use them.'], ['Alliance', 'An agreement between countries to support each other.'], ['Assassination', 'The murder of an important person.']],
  [
    { q: 'Explain how the alliance system turned a local quarrel into a world war.', steps: ['Austria-Hungary attacked **Serbia** after Sarajevo.', '**Russia** supported Serbia; **Germany** supported Austria-Hungary and declared war on Russia and France.', 'When Germany invaded **Belgium**, **Britain** joined: the alliances pulled every great power in.'] },
  ]),

  L('hi-ww1-alliances-3', 'hi-f3-ww1', '16.2', 'The alliances, the fronts and the end of the war', 12, ['World history'], [
    '**The two camps**: the **Allies** (based on the **Triple Entente** of **Britain, France and Russia**), later joined by Italy (1915), Japan and the **United States** (1917); and the **Central Powers** (based on the **Triple Alliance** of Germany, Austria-Hungary and Italy, but Italy changed sides), joined by the **Ottoman Empire** and Bulgaria.',
    '**Fronts**: the **Western Front** in Belgium and France, with years of **trench warfare** and huge losses (the Somme, Verdun, 1916); the **Eastern Front** against Russia, which left the war after its revolution (1917); the Balkans, the Middle East and **Africa** (Togo, **Kamerun**, South-West Africa and East Africa). New weapons included machine guns, poison gas, tanks, aircraft and submarines.',
    'Weakened by the blockade and American troops, Germany signed an **armistice** on **11 November 1918**. About 9 to 10 million soldiers died.',
  ], 'hist3-ww1', 'Entente against Central Powers; trenches in the west; armistice 11 November 1918.',
  ['Which country changed sides and joined the Allies in 1915?', ['Italy', 'Germany', 'Austria-Hungary', 'Bulgaria'], 'It had been in the Triple Alliance.'],
  [['Trench warfare', 'Fighting from long ditches dug facing the enemy.'], ['Armistice', 'An agreement to stop fighting.'], ['Central Powers', 'Germany, Austria-Hungary, the Ottoman Empire and Bulgaria.']],
  [
    { q: 'List the two sides in the First World War.', steps: ['**Allies**: Britain, France, Russia, later Italy, Japan and the USA.', '**Central Powers**: Germany, Austria-Hungary, the Ottoman Empire and Bulgaria.'] },
  ]),

  // ---------- 17. Versailles ----------
  L('hi-paris1919-3', 'hi-f3-versailles', '17.1', 'The Paris Peace Conference', 12, ['World history'], [
    'The **Paris Peace Conference** opened in January 1919. It was dominated by the "**Big Three**": **Woodrow Wilson** (USA), **Georges Clemenceau** (France) and **David Lloyd George** (Britain); Vittorio Orlando of Italy also took part (the "Big Four"). The defeated countries were not allowed to negotiate.',
    'The leaders had different aims: **Wilson** wanted a fair peace based on his **Fourteen Points** (open diplomacy, freedom of the seas, self-determination of peoples, reduction of arms and a **League of Nations**); **Clemenceau** wanted to **punish** and weaken Germany so that it could never attack France again; **Lloyd George** wanted Germany punished but not destroyed, so that it could trade with Britain.',
    'The result was a series of treaties, the most important being the **Treaty of Versailles** with Germany, signed on **28 June 1919**.',
  ], 'hist3-versailles', 'Wilson fair, Clemenceau harsh, Lloyd George in between.',
  ['The leader who most wanted to punish Germany was:', ['Georges Clemenceau', 'Woodrow Wilson', 'Lloyd George', 'Orlando'], 'France had suffered greatly.'],
  [['Fourteen Points', 'Wilson’s programme for a fair peace.'], ['Self-determination', 'The right of a people to decide its own government.']],
  [
    { q: 'Compare the aims of Wilson and Clemenceau.', steps: ['**Wilson**: a **fair peace**, self-determination and a League of Nations.', '**Clemenceau**: **revenge and security**: a weak Germany that could not attack France again.'] },
  ]),

  L('hi-versailles-terms-3', 'hi-f3-versailles', '17.2', 'The terms of the Treaty of Versailles', 12, ['World history', 'Cameroon history'], [
    'Main **terms** of the Treaty of Versailles (28 June 1919):\n- **war guilt** (Article 231): Germany and its allies accepted responsibility for the war\n- **reparations**: Germany had to pay for war damage; the sum was fixed in 1921 at 132 billion gold marks\n- **disarmament**: an army of only **100 000** men, no air force, no submarines, a small navy, and the **Rhineland** demilitarised\n- **loss of land**: **Alsace-Lorraine** to France; land to Belgium, Denmark and the new Poland (the "Polish Corridor"); the Saar under the League for 15 years; union with Austria forbidden\n- **loss of colonies**: all German colonies, including **Kamerun**, became **mandates** of the League.',
    '**Effects**: Germans saw the treaty as a humiliating "**dictated peace**" (Diktat), which later helped **Hitler** rise to power. For **Cameroon**, the treaty confirmed the end of German rule and opened the mandate period.',
  ], 'hist3-versailles', 'Guilt, reparations, disarmament, lost land, lost colonies.',
  ['Under the Treaty of Versailles, the German army was limited to:', ['100 000 men', '1 million men', '10 000 men', 'no limit'], 'Disarmament.'],
  [['Reparations', 'Payments for war damage made by a defeated country.'], ['War guilt', 'Responsibility for causing the war.'], ['Diktat', 'A peace imposed without negotiation.']],
  [
    { q: 'Explain how the Treaty of Versailles affected Cameroon.', steps: ['Germany **lost all its colonies**, including Kamerun.', 'Kamerun was placed under the **League of Nations** as a **mandate**.', 'It was administered by **Britain and France**, confirming the partition.'] },
  ]),

  // ---------- 18. League of Nations ----------
  L('hi-league-organs-3', 'hi-f3-league', '18.1', 'The League of Nations: aims, organs and successes', 12, ['World history'], [
    'The **League of Nations**, proposed by Wilson and created by the peace treaties, began work on **10 January 1920**, with its headquarters in **Geneva** (Switzerland). **Aims**: to keep peace through **collective security** (members would act together against an aggressor), to settle disputes peacefully, to reduce armaments and to improve social and economic conditions.',
    '**Organs**: the **Assembly** (all members, one vote each); the **Council** (permanent members Britain, France, Italy, Japan, later Germany, and elected members); the **Secretariat**; the **Permanent Court of International Justice** at The Hague; and agencies such as the **International Labour Organisation**, the Health Organisation, the Refugees Commission and the **Permanent Mandates Commission**.',
    '**Successes** in the 1920s: it settled the dispute over the **Åland Islands** (1921) and the Greek-Bulgarian border clash (1925); it helped **refugees** and prisoners of war return home; it fought diseases and slavery; and the ILO improved working conditions.',
  ], 'hist3-league', 'Collective security, Geneva, Assembly and Council.',
  ['Collective security means that:', ['members act together against an aggressor', 'each country defends itself alone', 'there is no army anywhere', 'only the USA keeps peace'], 'The League’s key idea.'],
  [['Collective security', 'The idea that all members act together against an aggressor.'], ['Assembly', 'The body of all member states.'], ['Council', 'The smaller body of the great powers and elected members.']],
  [
    { q: 'Give three successes of the League of Nations.', steps: ['Settling the **Åland Islands** dispute (1921).', 'Helping **refugees and prisoners of war** return home.', 'The **ILO** and health work against disease.'] },
  ]),

  L('hi-league-failure-3', 'hi-f3-league', '18.2', 'Why the League of Nations failed', 14, ['World history'], [
    '**Weaknesses**:\n- the **United States** never joined, and Germany and the Soviet Union were absent for long periods\n- the League had **no army** of its own and relied on members, who often acted in their own interests\n- decisions needed **unanimity**, which made action slow\n- **sanctions** were weak and often not applied\n- it was linked to the unpopular Treaty of Versailles.',
    '**Failures in the 1930s**: **Japan** invaded **Manchuria** (China) in **1931**; the League condemned it, and Japan simply left the League (1933). **Italy** invaded **Abyssinia** (Ethiopia) in **1935**; the League imposed weak sanctions (not on oil), Britain and France did not close the Suez Canal, and Italy conquered the country (1936). Germany left in 1933 and rearmed. The League could not stop the Second World War (1939) and was replaced by the **United Nations** (it formally closed in 1946).',
  ], 'hist3-league', 'No USA, no army, weak sanctions: Manchuria and Abyssinia proved it.',
  ['The Abyssinian crisis showed the League’s weakness because:', ['its sanctions did not stop Italy', 'it sent a strong army', 'Italy left Africa', 'the USA intervened'], 'Oil was not banned.'],
  [['Sanctions', 'Penalties, such as trade bans, against a state.'], ['Unanimity', 'Agreement of all members.'], ['Aggression', 'An unprovoked attack.']],
  [
    { q: 'Explain why the Manchurian crisis weakened the League.', steps: ['Japan **invaded Manchuria** in 1931.', 'The League was **slow** and only **condemned** Japan.', 'Japan **left the League** and kept Manchuria, showing that aggression could succeed.'] },
  ]),

  // ---------- 19. Dictators ----------
  L('hi-fascism-3', 'hi-f3-totalitarian', '19.1', 'Mussolini and Fascism in Italy', 12, ['World history'], [
    'After the First World War, Italy suffered economic crisis, unemployment and fear of communism, and many Italians felt cheated by the peace settlement. **Benito Mussolini** founded the **Fascist** party, whose members, the "**Blackshirts**", used violence against opponents. After the **March on Rome** in **October 1922**, the king made Mussolini prime minister.',
    'Mussolini (called **Il Duce**, "the leader") built a **totalitarian** dictatorship: one party, banned opposition, censorship and propaganda, secret police, and control of youth and the economy. **Fascism** glorified the nation, the state, war and the leader.',
    'In foreign policy he wanted a new Roman empire: Italy conquered **Abyssinia** (1935 to 1936), helped Franco in Spain and allied with Hitler (the Rome-Berlin Axis, 1936).',
  ], 'hist3-dictators', 'Fascism: one party, one leader, nation above all.',
  ['Mussolini’s followers were called the:', ['Blackshirts', 'Redshirts', 'Brownshirts only', 'Free French'], 'Fascist militia.'],
  [['Fascism', 'An authoritarian, extreme nationalist system, as under Mussolini.'], ['Totalitarian', 'A system in which the state controls every part of life.'], ['Propaganda', 'Information spread to influence opinion.']],
  [
    { q: 'Give three features of a totalitarian state.', steps: ['**One party** and no legal opposition.', '**Censorship and propaganda** controlling information.', '**Secret police** and terror against opponents.'] },
  ]),

  L('hi-nazism-3', 'hi-f3-totalitarian', '19.2', 'Hitler, Nazism and the road to war', 14, ['World history'], [
    '**Adolf Hitler** led the **Nazi** party in Germany. The Great Depression (from 1929) caused mass unemployment, and many Germans hated the Treaty of Versailles. Hitler became chancellor on **30 January 1933** and quickly made himself dictator (the **Führer**). **Nazism** was a racist form of fascism: it claimed the superiority of an "Aryan" race, persecuted Jews (the Nuremberg Laws of 1935) and later carried out the **Holocaust**, the murder of about six million Jews.',
    '**Steps to war**: Germany left the League and rearmed (1933 to 1935); remilitarised the **Rhineland** (1936); united with **Austria** (the **Anschluss**, March 1938); took the **Sudetenland** of Czechoslovakia after the **Munich Agreement** (September 1938), when Britain and France followed a policy of **appeasement**; occupied the rest of Czechoslovakia (March 1939); signed a pact with the Soviet Union (August 1939); and invaded **Poland** on **1 September 1939**. Britain and France declared war on 3 September.',
    'Nazi Germany also demanded the **return of its former colonies**, including **Cameroon**.',
  ], 'hist3-dictators', 'Rhineland, Austria, Sudetenland, Czechoslovakia, Poland: five steps to war.',
  ['Appeasement means:', ['giving in to a dictator’s demands to avoid war', 'declaring war at once', 'collective security', 'decolonisation'], 'Britain’s policy at Munich.'],
  [['Nazism', 'The German form of fascism under Hitler, with racist ideology.'], ['Anschluss', 'The union of Germany and Austria in 1938.'], ['Appeasement', 'Giving in to an aggressor to avoid war.']],
  [
    { q: 'Explain why appeasement failed to prevent war.', steps: ['Each concession (Rhineland, Austria, Sudetenland) **encouraged Hitler** to demand more.', 'Germany **grew stronger** while Britain and France waited.', 'When Hitler invaded **Poland**, war came anyway, in 1939.'] },
  ]),

  // ---------- 20. Second World War ----------
  L('hi-ww2-course-3', 'hi-f3-ww2', '20.1', 'The Second World War: outbreak, theatres and end', 14, ['World history'], [
    '**Outbreak**: Germany invaded **Poland** on **1 September 1939**; Britain and France declared war on **3 September**. The two sides: the **Axis** (Germany, Italy, Japan) and the **Allies** (Britain, France, later the **Soviet Union** from 1941, the **United States** from December 1941, China and many others).',
    '**Main theatres**: in **Europe**, Germany conquered Poland, then France (June 1940) with **Blitzkrieg** ("lightning war"), but failed to defeat Britain, and invaded the Soviet Union (1941), where it was defeated at **Stalingrad** (1942 to 1943); in **North Africa**, the British won at **El Alamein** (1942); Allied forces landed in Normandy on **D-Day** (6 June 1944); in **Asia and the Pacific**, Japan attacked the US base at **Pearl Harbor** on **7 December 1941**.',
    '**End**: Germany surrendered on **8 May 1945**. After atomic bombs were dropped on **Hiroshima** (6 August) and **Nagasaki** (9 August), **Japan** surrendered (formally on 2 September 1945). The war killed some 60 million people.',
  ], 'hist3-ww2', 'Poland 1939, Pearl Harbor 1941, Stalingrad, D-Day 1944, surrender 1945.',
  ['The German "lightning war" tactic was called:', ['Blitzkrieg', 'Anschluss', 'Diktat', 'appeasement'], 'Fast attacks with tanks and aircraft.'],
  [['Axis', 'The alliance of Germany, Italy and Japan.'], ['Blitzkrieg', 'Fast war using tanks and aircraft together.'], ['Theatre of war', 'A region where fighting takes place.']],
  [
    { q: 'Explain why the United States entered the Second World War.', steps: ['**Japan attacked Pearl Harbor** on 7 December 1941.', 'The USA declared war on **Japan**.', '**Germany and Italy** then declared war on the USA, which joined the Allies in Europe too.'] },
  ]),

  L('hi-ww2-africa-3', 'hi-f3-ww2', '20.2', 'Africa, Cameroon and the Second World War', 12, ['World history', 'Cameroon history'], [
    'Africa made a great **contribution** to the Allied victory. Hundreds of thousands of African soldiers served in French forces (the **tirailleurs**, often called "Senegalese" riflemen whatever their origin) and in British forces (the **Royal West African Frontier Force**, including soldiers from Nigeria and the Cameroons, and the **King’s African Rifles**). They fought in Europe, North Africa, East Africa (where Ethiopia was freed from Italy in 1941) and Burma. Africa also supplied **rubber, timber, minerals, food and palm oil**, often through increased **forced labour**.',
    '**Cameroon**: after France’s defeat in June 1940, most French colonies followed the **Vichy** government, but on **27 August 1940** Colonel **Philippe Leclerc** arrived in Douala and rallied **French Cameroun** to **Free France** (de Gaulle). Cameroon became a Free French base, and Cameroonian soldiers fought with Leclerc in the Sahara and North Africa. In British Cameroons, the German planters were **interned** and their plantations confiscated.',
    'African soldiers returned home with new experiences and expectations, which encouraged **nationalism** after 1945.',
  ], 'hist3-ww2', 'Leclerc, Douala, 27 August 1940: Cameroun joins Free France.',
  ['On 27 August 1940, French Cameroun joined:', ['Free France', 'Vichy France', 'Nazi Germany', 'Italy'], 'Rallied by Leclerc.'],
  [['Free France', 'De Gaulle’s movement that continued the war against Germany after 1940.'], ['Vichy', 'The French government that collaborated with Germany from 1940 to 1944.'], ['Tirailleurs', 'African riflemen in the French army.']],
  [
    { q: 'Give three ways in which Africa contributed to the Allied victory.', steps: ['**Soldiers**: tirailleurs and the forces of the RWAFF and the King’s African Rifles.', '**Resources**: rubber, timber, minerals and food.', '**Bases**: territories such as French Cameroun served as Free French bases.'] },
  ]),

  // ---------- 21. Brazzaville ----------
  L('hi-brazzaville-3', 'hi-f3-brazzaville', '21.1', 'The Brazzaville Conference of 1944', 12, ['World history', 'Cameroon history'], [
    'From **30 January to 8 February 1944**, Free France held a conference at **Brazzaville** (French Equatorial Africa), opened by General **Charles de Gaulle**. It was supported by **Félix Éboué**, governor-general of French Equatorial Africa, born in French Guiana, who had rallied his territory to Free France in 1940. Africans helped France during the war, and France wanted to reward them and keep its empire.',
    '**Recommendations**: to abolish the **indigénat**; to end **forced labour** (within a few years); to give Africans **representation** in French assemblies and local assemblies; to develop **education**, health and the economy; to employ more Africans in the administration.',
    '**Limits**: the conference **rejected** any idea of **self-government** or independence "even in the distant future": the colonies were to remain within the French empire. No Africans took part as delegates.',
  ], 'hist3-brazzaville', 'Reforms yes, independence no.',
  ['The Brazzaville Conference rejected:', ['self-government and independence', 'the end of the indigénat', 'more schools', 'African representation'], 'France wanted to keep the empire.'],
  [['Representation', 'Having elected members who speak for you in an assembly.'], ['Reform', 'A change made to improve a system.']],
  [
    { q: 'Explain why France called the Brazzaville Conference.', steps: ['Africans had **helped Free France** in the war with soldiers and resources.', 'France wanted to **reward** them with reforms.', 'France also wanted to **keep its empire** at a time when the Atlantic Charter spoke of self-determination.'] },
  ]),

  L('hi-brazzaville-effects-3', 'hi-f3-brazzaville', '21.2', 'Brazzaville and political change in French Cameroun', 12, ['Cameroon history'], [
    'After Brazzaville, France carried out **reforms in 1946**: the **indigénat** was abolished; **forced labour** was ended by a law of April 1946; the people of the colonies became French citizens with some rights; and the French Union was created. French Cameroun (now a **trust territory**) elected **deputies** to the French National Assembly and a local assembly (the ARCAM).',
    'These changes allowed **political life** to grow: trade unions (the USCC, from 1944), associations and, in **1948**, the **Union des Populations du Cameroun (UPC)**, which demanded **reunification** and **independence**.',
    'So the Brazzaville Conference, though it rejected independence, opened the road that led to independence: once Africans could organise and vote, they demanded more.',
  ], 'hist3-brazzaville', 'Brazzaville opened the door that it had tried to keep closed.',
  ['The party founded in French Cameroun in 1948 that demanded independence was the:', ['UPC', 'CPNC', 'KNDP', 'ARCAM'], 'Union des Populations du Cameroun.'],
  [['Trade union', 'An organisation of workers that defends their interests.'], ['Deputy', 'An elected member of a national assembly.']],
  [
    { q: 'Assess the importance of the Brazzaville Conference for Cameroon.', steps: ['It led to the **1946 reforms**: no more indigénat or forced labour, elections and representation.', 'These reforms allowed **unions and parties** such as the UPC to form.', 'Although it **rejected independence**, it started the political changes that led to it.'] },
  ]),

  // ---------- 22. UN ----------
  L('hi-uno-organs-3', 'hi-f3-uno', '22.1', 'The founding and organs of the United Nations', 14, ['World history'], [
    'During the war, the Allies planned a new organisation: the **Atlantic Charter** (1941) of Roosevelt and Churchill spoke of peace and the right of peoples to choose their government. The **UN Charter** was signed at **San Francisco** on **26 June 1945** by 50 states (51 original members), and the UN came into existence on **24 October 1945** (UN Day). Its headquarters is in **New York**.',
    '**Aims**: to maintain international **peace and security**; to develop friendly relations based on equal rights and **self-determination**; to cooperate in solving economic, social and humanitarian problems; to promote **human rights** (the Universal Declaration of Human Rights, 1948).',
    '**Main organs**: the **General Assembly** (all members, one vote each); the **Security Council** (15 members, 5 **permanent members** with a **veto**: the USA, the Soviet Union (now Russia), China, Britain and France); the **Secretariat**, headed by the **Secretary-General**; the **International Court of Justice** at The Hague; the **Economic and Social Council**; and the **Trusteeship Council**. Specialised agencies include UNESCO, WHO, FAO and UNICEF. Cameroon joined the UN on 20 September 1960.',
  ], 'hist3-uno', 'Six organs: Assembly, Security Council, Secretariat, Court, ECOSOC, Trusteeship Council.',
  ['A permanent member of the Security Council can block a decision by using its:', ['veto', 'vote in the Assembly', 'army', 'court'], 'Five members have it.'],
  [['Veto', 'The right to block a decision.'], ['Secretary-General', 'The head of the UN Secretariat.'], ['Charter', 'The founding document of the UN.']],
  [
    { q: 'Name the five permanent members of the Security Council.', steps: ['The **United States**', '**Russia** (formerly the Soviet Union)', '**China**', '**Britain**', '**France**'] },
  ]),

  L('hi-un-league-3', 'hi-f3-uno', '22.2', 'The UN and the League of Nations compared', 12, ['World history'], [
    '**Similarities**: both were created after a world war to keep peace; both had an assembly of all members, a smaller council, a secretariat and an international court; both supervised dependent territories (mandates, then trust territories).',
    '**Differences**:\n- **membership**: the USA never joined the League; the UN has had all the great powers from the start and now almost every state (193 members)\n- **decisions**: the League’s Council needed unanimity; the UN Security Council decides by majority, but each permanent member has a veto\n- **force**: the League had no army; the UN can use **peacekeeping** forces provided by members\n- **scope**: the UN has many more agencies for health, education, food, children and development\n- **colonies**: the UN’s trusteeship system aimed at **independence**, and the UN supported decolonisation.',
    'The UN has had failures too (the veto often blocks action), but it has lasted far longer and done more than the League.',
  ], 'hist3-uno', 'Compare membership, decisions, force, scope and colonies.',
  ['Unlike the League, the UN can use:', ['peacekeeping forces provided by members', 'no forces at all', 'only letters', 'the Permanent Mandates Commission'], 'Blue helmets.'],
  [['Peacekeeping', 'Sending international forces to keep peace in conflict areas.']],
  [
    { q: 'Give three differences between the League of Nations and the UN.', steps: ['The **USA** was never in the League but has always been in the UN.', 'The League had **no army**; the UN has **peacekeeping** forces.', 'The League’s mandates had **no goal of independence**; the UN trusteeship aimed at **self-government or independence**.'] },
  ]),

  // ---------- 23. Trusteeship ----------
  L('hi-trust-3', 'hi-f3-trusteeship', '23.1', 'The trusteeship system and Cameroon', 12, ['Cameroon history', 'World history'], [
    'After the Second World War, the League’s mandates were replaced by the UN **International Trusteeship System**. On **13 December 1946** the UN approved trusteeship agreements for **French Cameroun** and the **British Cameroons**, with France and Britain as **administering authorities**.',
    '**Article 76** of the UN Charter set the objectives: to further peace and security; to promote the political, economic, social and educational **advancement** of the inhabitants; to promote their progressive development towards **self-government or independence**; and to encourage respect for **human rights**.',
    '**Supervision** was stronger than before: the **Trusteeship Council** examined annual reports, sent **visiting missions** to the territories (the first in **1949**) and received **petitions**, written or spoken, directly from the people. Nationalists such as **Ruben Um Nyobè** of the UPC appeared before the UN (1952) to demand reunification and independence.',
  ], 'hist3-trusteeship', 'Trusteeship added a clear goal: self-government or independence.',
  ['The goal of trusteeship set in Article 76 included:', ['progress towards self-government or independence', 'return to Germany', 'permanent French rule', 'annexation by Nigeria'], 'A promise of freedom.'],
  [['Trusteeship', 'UN supervision of a territory administered by a member state, aiming at self-government.'], ['Administering authority', 'The state responsible for a trust territory.'], ['Visiting mission', 'A UN team sent to inspect a trust territory.']],
  [
    { q: 'Explain how trusteeship helped Cameroonian nationalists.', steps: ['**Article 76** gave a legal basis for demanding independence.', '**Petitions and visiting missions** allowed complaints to reach the UN directly.', 'Leaders such as **Um Nyobè** spoke at the UN and gained international attention.'] },
  ]),

  L('hi-mandate-vs-trust-3', 'hi-f3-trusteeship', '23.2', 'Mandate and trusteeship compared', 12, ['Cameroon history'], [
    '**Similarities**: in both systems Britain and France administered Cameroon on behalf of an international organisation, reported to it every year, and had to respect freedom of religion and the welfare of the inhabitants.',
    '**Differences**:\n- **organisation**: the League of Nations, then the United Nations\n- **supervising body**: the Permanent Mandates Commission, then the **Trusteeship Council**\n- **goal**: well-being and development, then **self-government or independence**\n- **visits**: none, then regular **visiting missions**\n- **petitions**: only through the mandatory power, then **directly** to the UN, written or oral.',
    'The trusteeship system gave Cameroonians both a **promise** and a **platform**. French Cameroun became independent on **1 January 1960**; the British Cameroons decided their future by the **plebiscite** of **11 February 1961** (studied in Form 4).',
  ], 'hist3-trusteeship', 'Compare under headings: organisation, body, goal, visits, petitions.',
  ['Which feature belonged to trusteeship but not to the mandate?', ['UN visiting missions to the territory', 'annual reports', 'administration by Britain and France', 'freedom of religion'], 'The League could not visit.'],
  [['Similarity', 'A way in which two things are alike.'], ['Plebiscite', 'A vote of the people on an important question.']],
  [
    { q: 'Plan an answer: "Compare the mandate and trusteeship systems in Cameroon."', steps: ['Similarities: **administration by Britain and France, annual reports, protection of rights**.', 'Differences: **League against UN; Commission against Trusteeship Council; no goal against independence; no visits against visiting missions; petitions through the power against direct petitions**.', 'Conclusion: trusteeship was **stronger** and opened the way to **independence**.'] },
  ]),

  // ---------- 24. Revision ----------
  L('hi-review-3', 'hi-f3-review', '24.1', 'Revision of the year', 14, ['Revision'], [
    'Key points:\n- **the partition of Africa**: causes of the scramble; the Berlin Conference (1884 to 1885: effective occupation, notification); methods (treaties, trickery, companies, conquest); reactions (collaboration, resistance: Samori, Menelik at Adwa 1896, Maji Maji)\n- **German Kamerun** (1884 to 1916): the treaty of 12 July 1884; governors; plantations, forced labour and railways; mission schools; resistance (Bakweri, Manga Bell); the Kamerun campaign (Douala 1914, Yaoundé and Mora 1916)\n- **the mandate** (1916 to 1946): partition (1916, 1919); Article 22 and class B; British indirect rule and neglect; French direct rule, assimilation, indigénat and prestation; the dual heritage\n- **the world**: the First World War (MAIN, Sarajevo, 1914 to 1918); Versailles (1919); the League (1920, Manchuria 1931, Abyssinia 1935); Mussolini and Hitler; the Second World War (1939 to 1945) and Africa’s part; Brazzaville (1944); the UN (1945) and trusteeship (1946).',
    'Method: make a **timeline** from 1884 to 1946 and a table comparing **mandate and trusteeship**, and **British and French** rule.',
  ], 'hist3-review', 'One timeline (1884 to 1946) and two comparison tables revise the whole year.',
  ['Which event came last?', ['the trusteeship agreements (1946)', 'the Berlin Conference (1884 to 1885)', 'the Milner-Simon Declaration (1919)', 'the mandate confirmed (1922)'], '13 December 1946.'],
  [['Timeline', 'A line showing events in the order they happened.']],
  [
    { q: 'Build a short timeline of Cameroon from 1884 to 1946.', steps: ['**1884**: Germano-Duala treaty (12 July).', '**1914 to 1916**: Kamerun campaign; **1916**: partition.', '**1919**: Milner-Simon Declaration and Versailles; **1922**: mandates confirmed.', '**1940**: Free France in Douala; **1946**: trusteeship.'] },
  ]),

  L('hi-exam-3', 'hi-f3-review', '24.2', 'GCE Paper 1 and Paper 2: first practice', 12, ['Revision', 'Examination'], [
    'The GCE Ordinary Level History examination has **Paper 1** (multiple-choice questions) and **Paper 2** (essays in sections on Cameroon, Africa and the world). Form 3 is the first stage of preparation.',
    '**Paper 1 tips**: read the stem carefully; watch for words such as NOT and EXCEPT; eliminate wrong options; check dates (BC/AD, centuries); do not leave questions unanswered.',
    '**Paper 2 tips**: underline the **command word** (explain, describe, compare, assess, account for); plan before writing; write an **introduction** that defines the topic and gives the period; one paragraph per **point** with **evidence** (names, dates, places) and **explanation**; a **conclusion** that answers the question directly. Manage time: divide it by the number of questions.',
  ], 'hist-essay-chain', 'Paper 1: eliminate. Paper 2: plan, point, evidence, explain.',
  ['In Paper 1, a question that contains the word "NOT" asks you to choose:', ['the option that is false or does not apply', 'the true option', 'two options', 'no option'], 'Read the stem carefully.'],
  [['Command word', 'The key word of a question that says what to do.'], ['Stem', 'The question part of a multiple-choice item.']],
  [
    { q: 'Plan an essay: "Account for the defeat of the Germans in Cameroon during the First World War."', steps: ['Introduction: the Kamerun campaign, **1914 to 1916**.', 'Point 1: **outnumbered** by British, French and Belgian forces.', 'Point 2: the **naval blockade** cut off supplies.', 'Point 3: **attacked from several sides**; loss of Douala in 1914.', 'Conclusion: these factors ended German rule by **February 1916**.'] },
  ]),
];
