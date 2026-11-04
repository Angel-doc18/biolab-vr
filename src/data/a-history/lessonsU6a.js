// A Level History lessons (0760), Upper Sixth, Term 1: the examination, the
// UPC, autonomy and independence of French Cameroun, British Cameroons to the
// plebiscite, Foumban and reunification, the Second World War, the United
// Nations and the Cold War from 1945 to 1991.

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

export const LESSONS_HU6A = [
  // ---------- 1. The examination ----------
  L('ahi-exam-1', 'ahi-u6-exam', '1.1', 'The three papers and what earns marks', 16, ['Method'], [
    'The GCE Advanced Level History examination (0760) has three papers. In June 2026: **Paper 1**, 1½ hours, multiple-choice questions across the whole syllabus (Tuesday 2 June, morning); **Paper 2**, 3 hours (2 June, afternoon); **Paper 3**, 3 hours (Wednesday 3 June, morning). The essay papers cover Cameroon, Africa and world history; the scheme of work places Cameroon (Section A) in Paper 2 and drills the Africa and world sections for Papers 2 and 3.',
    'Essays are rewarded for:\n- **knowledge**: accurate, relevant and precise evidence\n- **analysis**: explaining causes, consequences and connections\n- **judgement**: weighing factors and reaching a supported conclusion\n- **communication**: a clear structure and argument.\nNarrative, however accurate, stays in the lower levels.',
    'The Upper Sixth year begins with a diagnostic review of Lower Sixth topics (the mandates, the dictatorships, the League) and the marking criteria. The scheme completes the syllabus by **week 22**, leaving the third term for Paper 1 drills, essay clinics, the mock and remediation.',
    'Organise revision by **themes across periods** as well as by topics: nationalism in Cameroon, Africa and the world; international organisations (League, UN, OAU, AU); and the superpowers. Examiners like answers that connect Cameroon to its African and world context.',
  ], 'ahi-gce-0760', 'Paper 1: precision. Papers 2 and 3: analysis and judgement.',
  ['An accurate essay that tells the story but never explains or judges will usually:', ['stay in the lower mark levels', 'earn full marks', 'fail completely', 'be marked as Paper 1'], 'Marks reward analysis and judgement.'],
  [['Mark levels', 'Bands of marks describing the quality of an answer.'], ['Analysis', 'Explaining how and why, not only what.']],
  [
    { q: 'Turn a narrative sentence into analysis: "In 1955 there were riots and the UPC was banned."', steps: ['Add cause: **the riots followed a campaign of meetings and a hard-line administration under Roland Pré.**', 'Add consequence: **the ban drove the UPC underground and into armed struggle.**', '**Analytical version: "The May 1955 riots gave the administration the pretext to ban the UPC, which pushed the movement from legal agitation to armed rebellion."**'] },
  ]),

  L('ahi-exam-2', 'ahi-u6-exam', '1.2', 'Command words, multi-part questions and chronological precision', 16, ['Method'], [
    'Command words:\n- **explain / account for**: give reasons and show how they worked\n- **examine**: look closely at the evidence and explain it\n- **assess / evaluate**: weigh importance or success and judge\n- **compare / contrast**: similarities and differences, point by point\n- **how far / to what extent**: argue for and against and reach a clear verdict\n- **discuss**: explore a statement from several angles and conclude.',
    'Multi-part questions ("Explain why … and assess …") contain two tasks. Plan both before writing; if marks are shown for each part, divide your time in proportion.',
    'Chronological precision: dates, sequences and periods must be right. An **anachronism** (the UPC fighting the Germans, the OAU acting in 1950) is a serious error. Stay inside the dates set: an essay on 1948 to 1955 should not drift into 1960.',
    'Learn the acronyms with their founders and dates: UPC (1948), KNC (1953), KPP (1953), KNDP (1955), OK (1957), CPNC (1960), CNU (1966), CPDM (1985), SDF (1990). Many Paper 1 options differ only by one of these.',
  ], 'ahi-command-words', 'Read the command word, the topic and the dates before anything else.',
  ['A question asks: "Explain why the UPC was banned in 1955 and assess the consequences." The answer must:', ['explain the reasons and assess the consequences', 'only explain the reasons', 'only describe the riots', 'only assess the consequences'], 'Two tasks, both required.'],
  [['Anachronism', 'Placing an event, idea or object in the wrong period.'], ['Command word', 'The word that says what the question asks you to do.']],
  [
    { q: 'Decode: "To what extent was the Second World War responsible for the growth of nationalism in Cameroon between 1945 and 1955?"', steps: ['Command: **to what extent: weigh the war against other factors.**', 'Topic: **the growth of nationalism in Cameroon.**', 'Dates: **1945 to 1955 only.**', 'Other factors to weigh: **trusteeship, trade unions, the 1946 reforms, the UPC’s leadership.**'] },
  ]),

  // ---------- 2. The UPC ----------
  L('ahi-upc-1', 'ahi-u6-upc', '2.1', 'The UPC: founding, leaders, programme and methods', 18, ['Cameroon history'], [
    'The **Union des Populations du Cameroun** was founded on **10 April 1948** in Douala by men trained in the trade unions. **Ruben Um Nyobè**, its secretary general, gave it its programme and strategy; **Félix-Roland Moumié** became president in 1952; **Ernest Ouandié** and **Abel Kingué** were vice-presidents. It created a women’s wing (**UDEFEC**, 1952) and a youth wing (**JDC**), and published newspapers such as La Voix du Cameroun.',
    'Its programme:\n- **reunification** of French Cameroun and British Cameroons\n- **independence**, with a fixed timetable\n- an end to colonial abuses and better living conditions\n- refusal to treat Cameroun as part of the French Union, since it was a UN trust territory.',
    'Methods: mass meetings, local committees across the south and west, newspapers, and above all **petitions to the UN** (thousands), using Article 76 as a legal argument. Um Nyobè spoke before the UN Fourth Committee in **December 1952** and returned in later years.',
    'The UPC first joined the **Rassemblement Démocratique Africain (RDA)**. When the RDA’s leader Houphouët-Boigny broke with the French communists and moved to cooperation with France, the UPC remained radical and was expelled from the RDA in 1955.',
  ], 'ahi-upc', 'Reunification, independence, petitions: Um Nyobè’s strategy used the UN against France.',
  ['The UPC’s main legal argument for independence came from:', ['Article 76 of the UN Charter on trust territories', 'the Treaty of Versailles', 'the Brazzaville Conference', 'the Berlin Act'], 'Trust territories were meant to progress towards self-government or independence.'],
  [['Petition', 'A request or complaint sent to an authority, here the UN.'], ['Mass party', 'A party organised among ordinary people, not only the élite.'], ['Reunification', 'Joining the French and British parts of Cameroon again.']],
  [
    { q: 'Explain why the UPC was able to mobilise so many Cameroonians between 1948 and 1955.', steps: ['Grievances: **land, forced labour until 1946, low prices and discrimination.**', 'Programme: **reunification and independence gave a clear, popular goal.**', 'Organisation: **local committees, women’s and youth wings, newspapers.**', 'International stage: **UN petitions and Um Nyobè’s speeches gave it prestige.**', 'Judgement: **organisation turned grievance into a movement.**'] },
  ]),

  L('ahi-upc-2', 'ahi-u6-upc', '2.2', 'French opposition, the riots of May 1955 and the ban', 17, ['Cameroon history'], [
    'The administration fought the UPC by pressure, arrests and **rival parties**: ESOCAM (1949) and the **Bloc Démocratique Camerounais** of Louis-Paul Aujoulat (1951). In April 1955 the Catholic bishops issued a pastoral letter warning the faithful against the UPC, accused of communism.',
    'High Commissioner **Roland Pré** (from December 1954) took a hard line. The UPC and its allies answered with a joint proclamation in **April 1955** demanding the end of trusteeship and elections to a constituent assembly. Tension rose until riots broke out between **22 and 30 May 1955** in Douala, Yaoundé, Nkongsamba, Mbanga and other towns; many were killed.',
    'On **13 July 1955** the UPC, UDEFEC and JDC were **banned**. Their leaders fled to British Cameroons (Kumba), from where the British expelled them in 1957. In **December 1956** part of the movement began an **armed struggle** in the Sanaga-Maritime forest, later spreading to the Bamileke region.',
    'Interpretations differ: for some historians the UPC was the authentic nationalist movement that forced the pace of independence; for others its radicalism and the violence that followed allowed France to hand power to moderates. Both views agree that the ban was a turning point.',
  ], 'ahi-upc-ban', 'Rival parties, Roland Pré, May 1955 riots, ban on 13 July 1955, maquis from December 1956.',
  ['After the ban of 1955, UPC leaders first took refuge in:', ['British Cameroons', 'Nigeria’s Northern Region', 'France', 'Ghana only'], 'They settled around Kumba until expelled in 1957.'],
  [['Maquis', 'An armed resistance hiding in forests or hills.'], ['Pastoral letter', 'A letter from bishops to the faithful.']],
  [
    { q: 'Assess the consequences of the ban on the UPC in 1955.', steps: ['Short-term: **leaders in exile, the movement underground.**', 'Violence: **armed struggle from 1956 and thousands of deaths in the years that followed.**', 'Political: **moderates (Mbida, then Ahidjo) led the road to independence.**', 'Long-term: **reunification, a UPC idea, still became national policy.**', 'Judgement: **the ban shaped who led independent Cameroon, but not what it became.**'] },
  ]),

  // ---------- 3. Autonomy and independence ----------
  L('ahi-autonomy-1', 'ahi-u6-autonomy', '3.1', 'The Loi-cadre, the 1956 elections and the Mbida government', 17, ['Cameroon history'], [
    'The **Loi-cadre Defferre** of **23 June 1956**, named after the minister for overseas France, Gaston Defferre, transformed French Africa: **universal suffrage**, a **single electoral college**, and wider powers for territorial assemblies with African-led executives.',
    'In Cameroun elections were held on **23 December 1956** for a **Legislative Assembly (ALCAM)**. The UPC, still banned, could not stand, and violence broke out in the Sanaga-Maritime as its armed wing began operations.',
    'The **statute of April 1957** made Cameroun a **State under trusteeship** with its own government. **André-Marie Mbida**, leader of the Démocrates Camerounais, became the first **Prime Minister** in May 1957, with **Ahmadou Ahidjo** as Deputy Prime Minister and Minister of the Interior.',
    'Mbida was cautious about early independence and reunification and harsh against the UPC. He clashed with the High Commissioner and lost the support of Ahidjo’s **Union Camerounaise**; he resigned in **February 1958**.',
  ], 'ahi-autonomy', 'Loi-cadre 1956, ALCAM December 1956, State under trusteeship 1957, Mbida.',
  ['The Loi-cadre of 1956 introduced in French Africa:', ['universal suffrage and a single electoral college', 'immediate independence', 'the indigénat', 'reunification'], 'It widened local self-government.'],
  [['Loi-cadre', 'A framework law allowing the government to reform by decree.'], ['Universal suffrage', 'The right of all adults to vote.']],
  [
    { q: 'Why did André-Marie Mbida’s government fall in 1958?', steps: ['Policy: **his caution on independence and reunification lost nationalist opinion.**', 'Coalition: **Ahidjo’s Union Camerounaise withdrew its support.**', 'French relations: **he clashed with the High Commissioner.**', 'Judgement: **he lost the coalition that made his government possible.**'] },
  ]),

  L('ahi-autonomy-2', 'ahi-u6-autonomy', '3.2', 'Ahidjo, the UN decision and independence on 1 January 1960', 17, ['Cameroon history'], [
    '**Ahmadou Ahidjo** became Prime Minister on **18 February 1958**. From a northern base, he adopted the goals of independence and reunification while working closely with France. Cameroun gained full internal self-government from January 1959.',
    '**Ruben Um Nyobè** was killed by French forces on **13 September 1958**. Some UPC members, such as Théodore Mayi Matip, accepted an amnesty and returned to legal politics; others fought on.',
    'In **March 1959** the UN General Assembly decided that trusteeship would end on **1 January 1960**, rejecting UPC demands for UN-supervised elections first. In **October 1959** the Assembly gave Ahidjo **full powers**. Cameroun became independent on **1 January 1960**; a constitution was approved by referendum in February, and on **5 May 1960** the National Assembly elected Ahidjo **President**. Agreements with France covered defence and cooperation.',
    'The rebellion continued: Félix Moumié was poisoned in Geneva and died in November 1960, and Ernest Ouandié was captured and executed in **January 1971**. Historians debate whether independence was won by the UPC’s struggle and then inherited by moderates, or negotiated by Ahidjo’s pragmatism.',
  ], 'ahi-road-1960', 'Ahidjo PM February 1958; UN decision March 1959; independence 1 January 1960; President 5 May 1960.',
  ['The UN decided in March 1959 that Cameroun would become independent:', ['on 1 January 1960, without new elections first', 'only after UN-supervised elections', 'together with Southern Cameroons', 'in 1961'], 'The UPC’s demand for elections was rejected.'],
  [['Full powers', 'Authority to govern by decree without the assembly.'], ['Amnesty', 'An official pardon for political offences.']],
  [
    { q: '"Independence in 1960 was granted to those who had not fought for it." Discuss.', steps: ['For: **the UPC was banned and its leaders killed; moderates took power with French support.**', 'Against: **Ahidjo adopted independence and reunification and negotiated them; the UN set the date.**', 'Complexity: **the UPC’s pressure forced the pace that moderates then used.**', 'Judgement: **the statement is partly true: the UPC set the agenda, but Ahidjo’s coalition delivered it.**'] },
  ]),

  // ---------- 4. British Cameroons to 1961 ----------
  L('ahi-britcam-1', 'ahi-u6-britishcam', '4.1', 'From the Eastern House crisis to a separate Southern Cameroons (1953 to 1958)', 17, ['Cameroon history'], [
    'Under the Nigerian constitutions of 1946 and 1951, Southern Cameroons sent members to the **Eastern House of Assembly** at Enugu. In **1953**, during a crisis in the Eastern Region, the Cameroonian members led by **E.M.L. Endeley** declared **"benevolent neutrality"**, then walked out and demanded a separate region.',
    'At the constitutional conferences of 1953 and 1954 Britain agreed. The **constitution of 1954** made Southern Cameroons a **quasi-federal territory** within Nigeria, with its own **House of Assembly** (first meeting in October 1954) and Executive Council; Endeley became **Leader of Government Business** and, in 1958, **Premier**.',
    'Northern Cameroons remained part of Nigeria’s Northern Region.',
    'The break of 1953 rested on grievances: Cameroonian interests neglected in Enugu, competition from Nigerian traders and clerks, and a growing sense of separate identity rooted in the mandate and trusteeship.',
  ], 'ahi-britishcam', '1953 benevolent neutrality; 1954 own House of Assembly; Endeley Premier in 1958.',
  ['In 1954 Southern Cameroons became:', ['a quasi-federal territory with its own House of Assembly', 'an independent state', 'part of French Cameroun', 'part of the Northern Region'], 'Still within Nigeria.'],
  [['Quasi-federal territory', 'A territory with its own institutions inside a federation, short of full regional status.'], ['Benevolent neutrality', 'The stand of Cameroonian members in the 1953 Eastern crisis.']],
  [
    { q: 'Explain why Southern Cameroons broke away from the Eastern Region in 1953 to 1954.', steps: ['Neglect: **Cameroonian interests counted for little in Enugu.**', 'Economic rivalry: **resentment of Nigerian dominance in trade and jobs.**', 'Identity: **mandate and trusteeship had created a separate status.**', 'Trigger: **the 1953 Eastern crisis and the walk-out.**', 'Judgement: **long-term grievances, triggered by the 1953 crisis.**'] },
  ]),

  L('ahi-britcam-2', 'ahi-u6-britishcam', '4.2', 'Parties, the plebiscite and the choices of 1961', 18, ['Cameroon history'], [
    'Parties and options:\n- **KNC** (Endeley, 1953) and **KPP** (N.N. Mbile and P.M. Kale): increasingly for association with Nigeria; they merged as the **CPNC** in 1960\n- **KNDP** (**John Ngu Foncha**, 1955): secession from Nigeria and reunification with Cameroun\n- **OK** (One Kamerun, Ndeh Ntumazah, 1957): immediate reunification, close to the UPC.',
    'The KNDP won the election of **January 1959** by 14 seats to 12, and Foncha became Premier. After the Mamfe conference of August 1959 failed to agree, the UN General Assembly fixed the **plebiscite questions in October 1959**: join independent **Nigeria**, or join the independent **Republic of Cameroon**. Independence on its own was not offered.',
    'Results of **11 February 1961**: **Southern Cameroons** voted **233,571** for Cameroon and **97,741** for Nigeria; **Northern Cameroons** voted **146,296** for Nigeria and **97,659** for Cameroon. In a first northern vote (November 1959) a majority had chosen to decide later; reforms of the local administration in the meantime helped the Nigerian side. Northern Cameroons joined Nigeria on **1 June 1961**; Cameroon’s case at the International Court of Justice was dismissed in 1963.',
    'Why the South chose Cameroon: fear of domination within Nigeria, the KNDP’s campaign, kinship and history shared with the French side. Why the North chose Nigeria: ties with the northern emirates and Islam, long administrative integration, and the administrative reforms after 1959.',
  ], 'ahi-plebiscite', 'Two questions, no independence option; South 233,571 to 97,741; North 146,296 to 97,659.',
  ['The option not offered in the plebiscite of 1961 was:', ['independence as a separate state', 'joining Nigeria', 'joining the Republic of Cameroon', 'none: all three were offered'], 'Britain and the UN judged it unviable.'],
  [['Plebiscite', 'A direct vote of the people on a single question of sovereignty.'], ['Secession', 'Withdrawal from a state or federation.']],
  [
    { q: 'Explain why Southern and Northern Cameroons voted differently in 1961.', steps: ['South: **fear of Nigerian domination, the KNDP’s reunification campaign, links with the French side.**', 'North: **emirate and Islamic ties with Northern Nigeria, long integration, reforms after 1959.**', 'The options: **no independence choice forced a binary vote.**', 'Judgement: **each territory voted by the ties that colonial administration had built.**'] },
  ]),

  // ---------- 5. Foumban and reunification ----------
  L('ahi-foumban-1', 'ahi-u6-foumban', '5.1', 'Bamenda, Foumban and the federal compromise', 17, ['Cameroon history'], [
    'After the plebiscite, Southern Cameroons parties met at **Bamenda** (June 1961) and agreed proposals for a **loose federation** with strong powers for the states.',
    'At the **Foumban Constitutional Conference** (**17 to 21 July 1961**) President **Ahidjo** presented a draft constitution based on the 1960 constitution of the Republic. The Southern Cameroons delegation (Foncha, Endeley, Muna and others) put forward its proposals; some were accepted, but the final framework kept most power at the federal level.',
    'Southern Cameroons delegates later complained that they had **too little time** to study the draft and that they negotiated as a small territory facing an independent state. The text was finalised in talks in Yaoundé in August and adopted as the federal constitution on **1 September 1961**.',
    'Interpretations: a pragmatic compromise that achieved reunification peacefully, or the absorption of a small state into a centralised one. Many Anglophone grievances of later decades trace their origins to Foumban.',
  ], 'ahi-foumban', 'Bamenda proposals (June), Foumban (17 to 21 July), constitution (1 September 1961).',
  ['The Foumban draft constitution was based on:', ['the 1960 constitution of the Republic of Cameroon', 'the Nigerian constitution', 'the British constitution', 'the 1884 treaty'], 'Presented by President Ahidjo.'],
  [['Federation', 'A state in which power is shared between a central government and member states.'], ['Compromise', 'An agreement in which each side gives up part of its demands.']],
  [
    { q: '"The Foumban Conference was a compromise between equals." How far do you agree?', steps: ['Against: **Ahidjo led an independent state and wrote the draft; Southern Cameroons was a trust territory with less leverage.**', 'For, partly: **bilingualism and two federated states were real concessions.**', 'Process: **little time to study the draft.**', 'Judgement: **a compromise, but between unequal partners.**'] },
  ]),

  L('ahi-foumban-2', 'ahi-u6-foumban', '5.2', 'The constitution of 1961 and the Federal Republic', 17, ['Cameroon history'], [
    'The **Federal Republic of Cameroon** came into being on **1 October 1961**, when British trusteeship over Southern Cameroons ended. It had two federated states: **East Cameroon** (capital Yaoundé) and **West Cameroon** (capital Buea).',
    'Institutions:\n- a **President** (Ahidjo) and a **Vice-President** (Foncha), who could not come from the same federated state\n- a **Federal Assembly** in which East Cameroon had far more seats than West Cameroon, in proportion to population\n- federal control of defence, foreign affairs, finance, nationality, security and higher education\n- each state with a Prime Minister and a House of Assembly; West Cameroon also kept a **House of Chiefs**\n- **English and French** as official languages.',
    '**Article 47** declared inadmissible any revision that impaired the unity and integrity of the Federation.',
    'In practice the federal government, with its control of money and security, dominated the states from the start. The constitution reunified the country but laid the ground for centralisation.',
  ], 'ahi-federation', 'Two states, a federal President and Vice-President, two official languages, Article 47.',
  ['West Cameroon’s capital in the federation was:', ['Buea', 'Bamenda', 'Yaoundé', 'Douala'], 'East Cameroon’s was Yaoundé.'],
  [['Federated state', 'A member state of a federation.'], ['Bilingualism', 'The official use of two languages.']],
  [
    { q: 'Assess the strengths and weaknesses of the 1961 federal constitution.', steps: ['Strengths: **peaceful reunification, bilingualism, recognition of two traditions.**', 'Weaknesses: **wide federal powers, West Cameroon’s small share of seats, dependence on federal money.**', 'Outcome: **centralisation and the unitary state by 1972.**', 'Judgement: **a constitution of unity more than of balance.**'] },
  ]),

  // ---------- 6. The Second World War ----------
  L('ahi-ww2-1', 'ahi-u6-ww2', '6.1', 'The causes of the Second World War', 18, ['World history'], [
    'Long-term causes: German anger at **Versailles** (lost territory, reparations, the war-guilt clause, Article 231); the failure of the **League** in Manchuria and Ethiopia; the **Depression**, which brought Hitler to power; and Hitler’s aims: to overturn Versailles, unite German speakers and conquer **living space** in the east.',
    '**Appeasement**: Britain (Chamberlain) and France gave way to avoid war, because of memories of 1914 to 1918, sympathy for some German grievances, military unreadiness and fear of communism. Hitler remilitarised the **Rhineland** (1936), annexed **Austria** (March 1938) and gained the **Sudetenland** at **Munich** (September 1938). When he seized **Prague** in March 1939, appeasement ended: Britain and France guaranteed Poland.',
    'The **Nazi-Soviet Pact** (**23 August 1939**) freed Hitler from the risk of war on two fronts and secretly divided Poland. Germany invaded Poland on **1 September 1939**; Britain and France declared war on **3 September**.',
    'Historians disagree. A.J.P. Taylor (1961) argued that Hitler was an opportunist exploiting weak opponents; Hugh Trevor-Roper and most later historians stress his long-term plan of conquest. A strong essay weighs Hitler’s intentions against the choices of other powers.',
  ], 'ahi-ww2-causes', 'Versailles, the League, the Depression, Hitler’s aims, appeasement, the Pact.',
  ['Appeasement ended when Hitler occupied:', ['Prague, in March 1939', 'the Rhineland, in 1936', 'Austria, in March 1938', 'the Sudetenland, in October 1938'], 'Britain and France then guaranteed Poland.'],
  [['Appeasement', 'Giving in to demands to avoid war.'], ['Remilitarisation', 'Bringing troops back into a demilitarised zone.']],
  [
    { q: '"The Second World War was Hitler’s war." How far do you agree?', steps: ['For: **his aims (Lebensraum, revising Versailles) and his decisions in 1936 to 1939 drove events.**', 'Others’ role: **appeasement, the League’s weakness and Stalin’s pact made war easier.**', 'Long-term: **Versailles and the Depression created the conditions.**', 'Judgement: **Hitler caused the war; others failed to stop him.**'] },
  ]),

  L('ahi-ww2-2', 'ahi-u6-ww2', '6.2', 'The course of the war, the Allied victory and the consequences', 18, ['World history'], [
    'Phases:\n- **Blitzkrieg** (1939 to 1941): Poland; Norway and Denmark (April 1940); the Low Countries and **France** (May to June 1940); the **Battle of Britain** (1940)\n- Axis expansion: the Balkans and North Africa; **Operation Barbarossa** against the USSR (**22 June 1941**); **Pearl Harbor** (**7 December 1941**) brought the USA into the war\n- **turning points** (1942 to 1943): **Midway** (June 1942), **El Alamein** (October to November 1942), **Stalingrad** (surrender in February 1943), Kursk (July 1943)\n- Allied victory: Italy (1943), **D-Day** (**6 June 1944**), the Soviet advance, Germany’s surrender (**8 May 1945**); the atomic bombs on **Hiroshima** (6 August) and **Nagasaki** (9 August) and Japan’s surrender (signed 2 September 1945).',
    'Why the Allies won: the vast industrial output of the USA and the manpower of the USSR; Axis mistakes (the invasion of the USSR, war with the USA, fighting on several fronts); Allied sea and air power; intelligence such as code-breaking.',
    'Consequences: tens of millions dead (most estimates exceed 60 million), including **six million Jews** murdered in the **Holocaust**; Europe ruined and divided; the USA and USSR as **superpowers**; the **United Nations**; the **Cold War**; the nuclear age; the Nuremberg trials; and weakened colonial powers, which hastened **decolonisation**.',
    'For Africa the war meant soldiers, resources and new ideas; its end opened the period of nationalism studied in Cameroon from 1945.',
  ], 'ahi-ww2', 'Blitzkrieg, Barbarossa, Pearl Harbor, Stalingrad, D-Day, the bombs: 1939 to 1945.',
  ['The battle often seen as the turning point on the Eastern Front was:', ['Stalingrad', 'Dunkirk', 'the Battle of Britain', 'Midway'], 'The German Sixth Army surrendered in February 1943.'],
  [['Superpower', 'A state with global military and economic power.'], ['Holocaust', 'The Nazi murder of six million Jews.'], ['Blitzkrieg', 'Fast attacks combining tanks and aircraft.']],
  [
    { q: 'Explain why the Allies won the Second World War.', steps: ['Resources: **US industry and Soviet manpower.**', 'Axis errors: **Barbarossa and the declaration of war on the USA.**', 'Strategy and technology: **sea and air power, code-breaking, the atomic bomb.**', 'Judgement: **once the war became global in 1941, Allied resources made defeat for the Axis likely.**'] },
  ]),

  // ---------- 7. The United Nations ----------
  L('ahi-uno-1', 'ahi-u6-uno', '7.1', 'From the Atlantic Charter to San Francisco: the Charter and the organs', 17, ['World history'], [
    'The road to the UN: the **Atlantic Charter** (14 August 1941), the Declaration by United Nations (1 January 1942), the Dumbarton Oaks talks (1944), Yalta (February 1945, which settled the Security Council voting formula), and the **San Francisco Conference** (April to June 1945). The **Charter** was signed on **26 June 1945** and came into force on **24 October 1945**. Headquarters: New York.',
    'Purposes: international peace and security, friendly relations based on equal rights and **self-determination**, international cooperation on economic, social and humanitarian problems, and respect for human rights.',
    'The six principal organs:\n- **General Assembly**: all members, one vote each\n- **Security Council**: five **permanent members** with a **veto** (China, France, the USSR (now Russia), the United Kingdom, the USA) and elected members (six, ten from 1965)\n- **Economic and Social Council**\n- **Trusteeship Council**\n- **International Court of Justice** (The Hague)\n- **Secretariat**, led by the Secretary-General.',
    'Lessons from the League: the great powers were members and given special responsibility (and the veto); the Security Council could order binding action, including military action, under chapter VII.',
  ], 'ahi-uno', 'Atlantic Charter, San Francisco, 26 June and 24 October 1945; six organs; five vetoes.',
  ['The UN organ that can take binding decisions on peace and security is the:', ['Security Council', 'General Assembly', 'Trusteeship Council', 'Secretariat'], 'Subject to the veto of its permanent members.'],
  [['Veto', 'The power of a permanent member to block a Security Council decision.'], ['Charter', 'The founding treaty of the UN.']],
  [
    { q: 'Compare the United Nations with the League of Nations.', steps: ['Membership: **the USA and USSR in the UN from the start; the USA never in the League.**', 'Powers: **binding Security Council decisions and forces against League recommendations.**', 'Weakness: **the veto replaced the League’s unanimity rule, but could still paralyse action.**', 'Judgement: **a stronger design, still dependent on great-power agreement.**'] },
  ]),

  L('ahi-uno-2', 'ahi-u6-uno', '7.2', 'Achievements and limits of the United Nations', 17, ['World history'], [
    'Peace and security: the UN force in **Korea** (1950 to 1953), possible because the USSR was boycotting the Security Council; the first peacekeeping force, **UNEF**, after the Suez crisis (1956); the large operation in the **Congo** (1960 to 1964), during which Secretary-General Dag Hammarskjöld died in a plane crash (1961); and peacekeeping in Cyprus from 1964.',
    'Decolonisation and rights: trusteeship (Cameroon included), the **Declaration on decolonisation** (Resolution 1514, 1960), the condemnation of apartheid, and the **Universal Declaration of Human Rights** (**10 December 1948**). Cameroon joined the UN on 20 September 1960.',
    'Welfare: specialised agencies such as the **WHO** (health; smallpox was declared eradicated in 1980), **UNICEF** (children), **UNESCO** (education, science and culture), the **FAO** (food and agriculture) and the refugee agency **UNHCR**.',
    'Limits: the **veto** paralysed the Security Council during the Cold War (it could not act over Hungary in 1956, Czechoslovakia in 1968 or Afghanistan in 1979); the UN depends on members for troops and money; great powers ignore it when it suits them. It has avoided another world war, but not many smaller wars.',
  ], 'ahi-un-record', 'Korea, Suez, Congo; decolonisation and human rights; agencies; the veto’s limits.',
  ['The UN could act in Korea in 1950 because:', ['the USSR was boycotting the Security Council', 'China voted for it', 'the veto had been abolished', 'the League ordered it'], 'A rare moment without a Soviet veto.'],
  [['Peacekeeping', 'Placing neutral UN forces between sides to keep a ceasefire.'], ['Specialised agency', 'An autonomous body working with the UN in one field.']],
  [
    { q: '"The United Nations has been more successful than the League of Nations." Discuss.', steps: ['For: **it survived, kept the great powers inside, ran peacekeeping, supported decolonisation and welfare.**', 'Against: **the veto blocked action in many Cold War crises; it depends on members.**', 'Context: **nuclear deterrence, not only the UN, prevented a world war.**', 'Judgement: **more successful and more lasting, but limited in the same way by great-power politics.**'] },
  ]),

  // ---------- 8. The Cold War to 1953 ----------
  L('ahi-coldwar1-1', 'ahi-u6-coldwar1', '8.1', 'The origins of the Cold War', 18, ['World history'], [
    'The wartime alliance hid deep differences. At **Yalta** (February 1945) the Allies agreed on zones in Germany, free elections in liberated Europe and the UN; at **Potsdam** (July to August 1945) disagreements over Germany and Poland surfaced, and Truman told Stalin of a powerful new weapon.',
    'Causes:\n- **ideology**: capitalism and liberal democracy against communism\n- **security**: the USSR, invaded twice in thirty years, wanted friendly governments in Eastern Europe\n- **expansion**: communist parties took power in Poland, Romania, Bulgaria and Hungary, and in Czechoslovakia (February 1948)\n- **economics**: US interest in open markets and European recovery\n- the **atomic bomb** and mutual fear.',
    'In February 1946 the diplomat George Kennan’s "Long Telegram" urged **containment** of Soviet expansion; on **5 March 1946** Churchill spoke at Fulton of an **Iron Curtain** from the Baltic to the Adriatic.',
    'Historians disagree: **orthodox** writers blamed Soviet expansion; **revisionists** blamed American economic ambitions; **post-revisionists** stress mutual misunderstanding and fear. An essay should explain why each view arose and judge between them.',
  ], 'ahi-coldwar-causes', 'Ideology, security, expansion, economics, the bomb; three schools of interpretation.',
  ['The policy of preventing the spread of communism was called:', ['containment', 'appeasement', 'détente', 'peaceful coexistence'], 'Proposed by George Kennan in 1946.'],
  [['Cold War', 'Rivalry between the superpowers short of direct war.'], ['Containment', 'Stopping the spread of communism.'], ['Iron Curtain', 'The division between communist Eastern Europe and the West.']],
  [
    { q: 'Assess the view that the USSR was mainly responsible for the Cold War.', steps: ['For: **Soviet control of Eastern Europe and the Czech coup of 1948.**', 'Against: **US economic aims and the atomic monopoly alarmed Stalin.**', 'Mutual: **misperception turned security measures into threats.**', 'Judgement: **shared responsibility, with Soviet actions in Europe as the most visible trigger.**'] },
  ]),

  L('ahi-coldwar1-2', 'ahi-u6-coldwar1', '8.2', 'Doctrines, plans, Berlin and Korea (1947 to 1953)', 18, ['World history'], [
    'The **Truman Doctrine** (**12 March 1947**) promised US support to free peoples resisting subjugation, starting with aid to Greece and Turkey. The **Marshall Plan** (announced June 1947) offered aid to rebuild Europe; about **13 billion dollars** flowed from 1948 to 1952. Stalin refused it for the Eastern bloc.',
    'The Soviet reply: the **Zhdanov doctrine** (September 1947) divided the world into two camps, the **Cominform** coordinated communist parties, and **COMECON** (January 1949) organised the Eastern bloc economies.',
    'Germany was the main battleground. When the Western powers introduced a new currency, the USSR blocked land routes to West Berlin: the **Berlin Blockade** (**24 June 1948 to 12 May 1949**), defeated by the **airlift**. Germany was divided into the Federal Republic and the German Democratic Republic (1949), and **NATO** was founded on **4 April 1949**.',
    'The Cold War spread: the USSR exploded its first atomic bomb (August 1949); the communists won in **China** (October 1949); North Korea invaded the South (**June 1950**), and a UN force under US command fought the North and, from late 1950, China. An armistice at the 38th parallel was signed in July 1953, four months after **Stalin’s death**.',
  ], 'ahi-coldwar1', 'Truman Doctrine, Marshall Plan, Cominform, COMECON, Berlin, NATO, China, Korea.',
  ['The Berlin Blockade was defeated by:', ['the Allied airlift of supplies', 'a Soviet withdrawal after one week', 'UN troops', 'the Berlin Wall'], 'Almost a year of flights.'],
  [['Airlift', 'Supplying a place by air when land routes are cut.'], ['Proxy war', 'A conflict in which great powers back opposing sides without fighting each other directly.']],
  [
    { q: 'Explain why the Cold War intensified between 1947 and 1953.', steps: ['Doctrines: **Truman Doctrine against the two-camps doctrine.**', 'Economics: **Marshall aid against COMECON divided Europe.**', 'Crises: **Berlin made the division of Germany permanent; NATO followed.**', 'Globalisation: **the Soviet bomb, China and Korea spread the conflict beyond Europe.**', 'Judgement: **each step by one side confirmed the other’s fears.**'] },
  ]),

  // ---------- 9. The Cold War to 1991 ----------
  L('ahi-coldwar2-1', 'ahi-u6-coldwar2', '9.1', 'Coexistence and crisis: Berlin, Cuba and Vietnam', 18, ['World history'], [
    'After Stalin’s death **Khrushchev** denounced Stalin’s crimes (1956) and spoke of **peaceful coexistence**: competition without nuclear war. Yet the **Warsaw Pact** (1955) answered NATO, and Soviet tanks crushed the **Hungarian** rising in 1956.',
    '**Berlin**: to stop East Germans fleeing to the West, the GDR built the **Berlin Wall** on **13 August 1961**.',
    '**Cuba**: after Castro’s revolution (1959) and the failed US-backed Bay of Pigs invasion (1961), the USSR placed nuclear missiles in Cuba. US spy planes found them in **October 1962**; Kennedy ordered a naval **quarantine**. After thirteen days the USSR withdrew the missiles in return for a US promise not to invade Cuba (and the quiet removal of US missiles from Turkey). A hotline and the Partial Test Ban Treaty (1963) followed.',
    '**Vietnam**: after the French defeat at Dien Bien Phu, the **Geneva Agreements** (1954) divided Vietnam at the **17th parallel**. The USA backed the South against the communist North and the Viet Cong, escalating from 1964 to 1965; the Tet Offensive (1968) turned American opinion. US forces left after the Paris agreements (1973), and **Saigon fell in April 1975**.',
  ], 'ahi-coldwar2', 'Coexistence, the Wall (1961), Cuba (1962), Vietnam (1954 to 1975).',
  ['The Cuban Missile Crisis ended when:', ['the USSR withdrew its missiles and the USA promised not to invade Cuba', 'the USA invaded Cuba', 'Cuba joined NATO', 'the UN occupied Cuba'], 'The USA also later removed missiles from Turkey.'],
  [['Peaceful coexistence', 'Khrushchev’s policy of competing with the West without war.'], ['Quarantine', 'Kennedy’s naval blockade of Cuba in 1962.']],
  [
    { q: 'Why did the Cuban Missile Crisis end peacefully?', steps: ['Leaders: **Kennedy and Khrushchev both feared nuclear war.**', 'Diplomacy: **the quarantine left time for negotiation; secret deals saved face.**', 'Terms: **a no-invasion pledge for Cuba and the removal of US missiles from Turkey.**', 'Judgement: **mutual fear of destruction made compromise rational.**'] },
  ]),

  L('ahi-coldwar2-2', 'ahi-u6-coldwar2', '9.2', 'Détente, the second Cold War and the collapse of the Soviet bloc', 18, ['World history'], [
    '**Détente** in the 1970s: the cost of the arms race, nuclear parity, the Sino-Soviet split and Vietnam pushed both sides to reduce tension. **SALT I** (1972) limited nuclear weapons; Nixon visited China (1972); the **Helsinki Final Act** (1975) recognised Europe’s borders and committed states to human rights.',
    'A **second Cold War** followed the Soviet invasion of **Afghanistan** (December 1979): Olympic boycotts, President Reagan’s arms build-up and the Strategic Defense Initiative (1983).',
    '**Gorbachev** (from March 1985) introduced **glasnost** (openness) and **perestroika** (restructuring), signed the INF Treaty (1987) and withdrew from Afghanistan (1989). He refused to use force to hold Eastern Europe: in **1989** communist governments fell in Poland, Hungary, East Germany, Czechoslovakia, Bulgaria and Romania; the **Berlin Wall** fell on **9 November 1989**. Germany reunited on **3 October 1990**, and the **USSR** dissolved in **December 1991**.',
    'Why it ended: the Soviet economy could not match the West; the arms race and Afghanistan drained it; Gorbachev’s reforms released forces he could not control; popular movements did the rest. Some historians credit Western pressure under Reagan; others stress Soviet internal collapse. In Africa, the end of superpower rivalry encouraged the democratic openings of 1990, Cameroon’s included.',
  ], 'ahi-coldwar-end', 'Détente, Afghanistan, Gorbachev, 1989, 1991.',
  ['Gorbachev’s policy of openness was called:', ['glasnost', 'perestroika', 'détente', 'containment'], 'Perestroika was restructuring.'],
  [['Détente', 'A relaxation of tension between the superpowers.'], ['Glasnost', 'Openness: freer discussion in the USSR.'], ['Perestroika', 'Restructuring of the Soviet economy and politics.']],
  [
    { q: 'Assess the reasons for the end of the Cold War.', steps: ['Soviet weakness: **a stagnant economy and the burden of Afghanistan and the arms race.**', 'Gorbachev: **reforms and his refusal to use force in Eastern Europe.**', 'Western pressure: **Reagan’s build-up raised the cost of competition.**', 'Peoples: **Solidarity and the crowds of 1989.**', 'Judgement: **internal Soviet decline was decisive; Gorbachev chose not to stop it by force.**'] },
  ]),
];
