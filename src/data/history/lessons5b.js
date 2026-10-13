// History lessons for Form 5, terms 2 and 3: decolonisation in Africa,
// Pan-Africanism, the OAU and the African Union, and the GCE drills, the mock
// and remediation. Original text written for this app.

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

export const LESSONS_5B = [
  // ---------- Decolonisation ----------
  L('hi-decolfactors-5', 'hi-f5-decolonisation', '9.1', 'Why African nationalism grew after 1945', 15, ['African history'], [
    '**Internal factors**:\n- a Western-educated elite of teachers, lawyers and journalists who led parties\n- ex-servicemen of the Second World War\n- growing towns, trade unions and newspapers\n- economic grievances: low prices for crops, forced labour, land taken by settlers, racial discrimination\n- mass political parties, such as the CPP in the Gold Coast.',
    '**External factors**:\n- the **Second World War** weakened Britain and France and destroyed the idea that Europeans could not be beaten\n- the **Atlantic Charter** (1941) and the **UN Charter** supported self-determination; the UN trusteeship system aimed at independence\n- the **USA** and the **USSR** opposed old-style colonial empires\n- the independence of **India** (1947) and the Bandung Conference (1955) inspired Africans\n- **Pan-Africanism**, especially the Manchester Congress (1945).',
    'Once **Ghana** became independent in 1957, others followed quickly: in **1960**, called the "Year of Africa", seventeen African countries, including Cameroon, became independent.',
  ], 'hist-decolonisation', 'Sort causes into internal and external, and give one example of each.',
  ['1960 is called the "Year of Africa" because:', ['seventeen African countries became independent', 'the OAU was founded', 'the AU replaced the OAU', 'Ghana became independent'], 'Including Cameroon, Nigeria and most of French Africa.'],
  [['Decolonisation', 'The process by which colonies became independent.'], ['Self-determination', 'The right of a people to choose its own government.'], ['Elite', 'A small, influential group.']],
  [
    { q: 'Explain two internal and two external factors in the growth of African nationalism.', steps: ['Internal: **educated leaders who founded mass parties; economic grievances such as land seizure and forced labour.**', 'External: **the weakening of colonial powers in the Second World War; the support of the UN and of the superpowers for self-determination.**'] },
  ]),

  L('hi-decolcases-5', 'hi-f5-decolonisation', '9.2', 'Ghana, Algeria and Kenya: peaceful and armed roads', 16, ['African history'], [
    '**Ghana (Gold Coast)**, a peaceful transition: **Kwame Nkrumah** founded the **Convention People’s Party** (CPP) in 1949 and launched "**Positive Action**" (strikes and boycotts) in 1950. Though jailed, he won the 1951 elections and became Leader of Government Business. After further elections and negotiations, the Gold Coast became independent as **Ghana** on **6 March 1957**.',
    '**Algeria**, armed struggle: about a million European settlers (colons) and France’s view of Algeria as part of France blocked reform. The **FLN** began the war of independence on **1 November 1954**. After years of brutal fighting, **General de Gaulle** negotiated the **Évian Accords** (March 1962), and Algeria became independent on **5 July 1962**.\n**Kenya**, armed struggle: settlers held the fertile "White Highlands". The **Mau Mau** uprising began in 1952; the British declared a state of emergency and jailed **Jomo Kenyatta**. After the revolt was crushed, negotiations followed, and Kenya became independent on **12 December 1963**, with Kenyatta as leader.',
    'Why the difference? Where there were few European settlers (Ghana), Britain negotiated; where settlers held land and power (Algeria, Kenya), they resisted change, and Africans turned to arms.',
  ], 'hist-decolonisation', 'Ghana 1957 by negotiation; Algeria 1962 and Kenya 1963 after armed struggle.',
  ['"Positive Action" in the Gold Coast was:', ['a campaign of strikes and boycotts led by Nkrumah', 'a war against France', 'a British law', 'a UN resolution'], 'It was non-violent.'],
  [['Positive Action', 'Nkrumah’s 1950 campaign of strikes and non-violent protest.'], ['Settler colony', 'A colony with many permanent European settlers who owned land.'], ['State of emergency', 'A situation in which a government suspends normal laws.']],
  [
    { q: 'Compare the roads to independence of Ghana and Kenya.', steps: ['Similarity: **both were British colonies with strong nationalist leaders (Nkrumah, Kenyatta) who were jailed and later led their countries.**', 'Difference: **Ghana had few settlers and won independence through mass parties, elections and negotiation (1957); Kenya’s settlers held the best land, leading to the Mau Mau uprising and a state of emergency before independence (1963).**'] },
  ]),

  // ---------- Pan-Africanism ----------
  L('hi-panafricanism-5', 'hi-f5-panafrica', '10.1', 'The development of Pan-Africanism', 15, ['African history'], [
    '**Pan-Africanism** is the idea that Africans and people of African descent share a common destiny and should unite for freedom and progress. It began among people of African descent in the Americas and Europe:\n- **Henry Sylvester Williams** organised a Pan-African Conference in London (1900)\n- **W. E. B. Du Bois** organised Pan-African Congresses from 1919\n- **Marcus Garvey** founded the Universal Negro Improvement Association and preached "Africa for the Africans".',
    'The **Fifth Pan-African Congress** in **Manchester** (October **1945**) was a turning point: future leaders such as **Kwame Nkrumah** and **Jomo Kenyatta** demanded independence for Africa. Pan-Africanism moved to Africa itself: after Ghana’s independence, Nkrumah hosted conferences in **Accra** in 1958.',
    'Independent states disagreed on how to unite. The **Casablanca group** (including Ghana, Guinea and Mali) wanted rapid political union; the **Monrovia group** (including Nigeria, Liberia and Cameroon) preferred gradual cooperation between sovereign states. Their compromise produced the OAU.',
  ], 'hist-oau-au', 'From Williams, Du Bois and Garvey to Manchester 1945 and Accra 1958.',
  ['The Pan-African Congress that demanded independence in 1945 met in:', ['Manchester', 'Addis Ababa', 'Accra', 'Paris'], 'Nkrumah and Kenyatta attended.'],
  [['Pan-Africanism', 'The movement for the unity and freedom of Africans and people of African descent.'], ['Casablanca group', 'States that wanted rapid political union of Africa.'], ['Monrovia group', 'States that preferred gradual cooperation, including Cameroon.']],
  [
    { q: 'Explain the importance of the 1945 Manchester Congress.', steps: ['**It brought together future African leaders such as Nkrumah and Kenyatta.**', '**It demanded independence, not just reform.**', '**It shifted Pan-Africanism from the diaspora to Africa, where it guided the independence movements.**'] },
  ]),

  L('hi-oauau-5', 'hi-f5-panafrica', '10.2', 'The OAU (1963) and the African Union (2002)', 16, ['African history'], [
    'The **Organisation of African Unity** (OAU) was founded at **Addis Ababa** on **25 May 1963** by 32 independent states. Its aims: to promote unity and solidarity, defend sovereignty and territorial integrity, **eradicate colonialism** and improve the lives of Africans. Its organs included the **Assembly of Heads of State and Government**, the Council of Ministers, the General Secretariat and a Commission of Mediation, Conciliation and Arbitration; its **Liberation Committee** in Dar es Salaam supported liberation movements in southern Africa.',
    'Achievements: support for the end of colonial rule and of apartheid, the acceptance of colonial borders to limit conflict, and a common African voice at the UN. Weaknesses: the principle of **non-interference** stopped it acting against dictatorships and civil wars, it lacked money and power, and members were divided.',
    'The **African Union** replaced it: the Sirte Declaration (1999), the Constitutive Act (2000) and the launch in **Durban** on **9 July 2002**. New organs include the **AU Commission** (Addis Ababa), the **Pan-African Parliament**, the **Peace and Security Council** and an African Court. Unlike the OAU, the AU may **intervene** in a member state in grave circumstances (war crimes, genocide, crimes against humanity), and it promotes democracy, good governance and economic integration.',
  ], 'hist-oau-au', 'OAU: non-interference. AU: the right to intervene in grave circumstances.',
  ['A key difference between the AU and the OAU is that the AU:', ['may intervene in grave circumstances such as genocide', 'has no headquarters', 'excludes Ethiopia', 'was founded in 1963'], 'The OAU held strictly to non-interference.'],
  [['OAU', 'Organisation of African Unity, 1963 to 2002.'], ['AU', 'African Union, launched in 2002.'], ['Non-interference', 'The principle of not intervening in other states’ internal affairs.'], ['Apartheid', 'The system of racial segregation in South Africa until 1994.']],
  [
    { q: 'Assess the achievements and failures of the OAU.', steps: ['Achievements: **it helped end colonial rule and apartheid through its Liberation Committee and diplomacy, and it reduced border wars by accepting colonial boundaries.**', 'Failures: **non-interference let dictators abuse their people; it lacked funds and could not stop civil wars.**', 'Judgement: **it succeeded in its liberation mission but failed to protect Africans from their own governments, which is why the AU was created.**'] },
  ]),

  // ---------- Paper 1 ----------
  L('hi-mcq-5', 'hi-f5-paper1', '11.1', 'Strategy for History Paper 1', 13, ['Exam skills'], [
    'Paper 1 lasts **1½ hours** and tests precise knowledge: **dates**, **places**, **treaties**, **political actors** and **acronyms**. Strategy:\n- read the whole stem and predict the answer\n- eliminate options that are wrong in date, place or person\n- watch for **NOT** and **EXCEPT**\n- check the order of events when a question is about sequence\n- never leave a question blank.',
    'Common traps: confusing leaders who held the same post in turn (Mbida and Ahidjo as Prime Minister, Foncha and Muna as Vice-President), similar organisations (League of Nations and UN, OAU and AU, KNC and KNDP), and dates a year apart (1960 and 1961).',
    'Revise with **flashcards** (date on one side, event on the other), **acronym lists**, and timelines. Practise in timed sets of 25 questions.',
  ], 'hist-mcq-steps', 'Most wrong options are wrong in one detail: a date, a place or a person.',
  ['Which acronym belongs to Cameroon’s ruling party since 1985?', ['CPDM', 'CPP', 'FLN', 'KANU'], 'Cameroon People’s Democratic Movement.'],
  [['Acronym', 'A word formed from initial letters, such as UPC or OAU.'], ['Distractor', 'A wrong option designed to look correct.']],
  [
    { q: 'Answer and explain: "Which of the following was NOT a German governor of Kamerun? (A) Julius von Soden (B) Jesko von Puttkamer (C) Gustav Nachtigal (D) Theodor Seitz"', steps: ['Von Soden, von Puttkamer and Seitz were governors.', '**(C) Gustav Nachtigal**, the imperial commissioner who raised the flag in 1884 but was never governor.'] },
  ]),

  L('hi-dates-5', 'hi-f5-paper1', '11.2', 'Key dates and acronyms for revision', 15, ['Revision'], [
    'Cameroon after 1961:\n- **1 October 1961** reunification; **1 September 1966** CNU single party\n- **20 May 1972** referendum: United Republic of Cameroon\n- **6 November 1982** Paul Biya becomes President; **1984** Republic of Cameroon\n- **1985** CPDM; **1990** multi-party laws; **1992** first multi-party elections.',
    'World and Africa:\n- **1914 to 1918** First World War; **1919** Versailles; **1920** League of Nations\n- **1922** Mussolini; **1933** Hitler; **1939 to 1945** Second World War; **1945** UN\n- **1947** Truman Doctrine and Marshall Plan; **1948 to 1949** Berlin Blockade; **1949** NATO; **1955** Warsaw Pact; **1962** Cuban crisis; **1989** Berlin Wall falls; **1991** USSR ends\n- **1945** Manchester Congress; **1957** Ghana; **1962** Algeria; **1963** Kenya and the OAU; **2002** the AU.',
    'Acronyms: UPC, KNC, KNDP, KPP, CPNC, CNU, CPDM, SDF, ELECAM; League, UN, UNESCO, WHO; NATO, COMECON; CPP, FLN, KANU; OAU, AU.',
  ], 'hist-mcq-steps', 'Learn dates in pairs of cause and effect: Versailles 1919 and Hitler 1933.',
  ['Which came first?', ['the Truman Doctrine', 'the Warsaw Pact', 'the Cuban Missile Crisis', 'the fall of the Berlin Wall'], '1947, then 1955, 1962 and 1989.'],
  [['CNU', 'Cameroon National Union, the single party from 1966.'], ['CPDM', 'Cameroon People’s Democratic Movement, from 1985.'], ['KANU', 'Kenya African National Union, Kenyatta’s party.']],
  [
    { q: 'Expand these acronyms: UPC, KNDP, CPDM, FLN, NATO.', steps: ['**UPC: Union des Populations du Cameroun.**', '**KNDP: Kamerun National Democratic Party.**', '**CPDM: Cameroon People’s Democratic Movement.**', '**FLN: Front de Libération Nationale (Algeria).**', '**NATO: North Atlantic Treaty Organisation.**'] },
  ]),

  // ---------- Paper 2 ----------
  L('hi-essaylayout-5', 'hi-f5-paper2', '12.1', 'Essay layouts for Sections A, B and C', 15, ['Essay skills'], [
    'Every Paper 2 essay follows the same layout: an **introduction** with context and a direct answer, **body paragraphs** each with one point, precise evidence and explanation, and a **conclusion** with a judgement.',
    'Focus by section:\n- **Section A (Cameroon)**: precise names, dates and places from Cameroon’s history; link events in a **chain** (for example: trusteeship → nationalism → independence → plebiscite → reunification)\n- **Section B (Africa)**: compare cases (Ghana with Kenya), and use Pan-African and OAU/AU knowledge\n- **Section C (world)**: causes and consequences of wars and crises; the League and the UN; the Cold War blocs.',
    'For **multi-part** questions, answer each part separately and give more detail to the part with more marks. Build chronological chains with words such as "as a result", "this led to", "consequently", "by", "after".',
  ], 'hist-essay-chain', 'Chains of cause and effect turn a list of facts into an argument.',
  ['A chronological chain is best built with linking words such as:', ['"as a result" and "this led to"', '"once upon a time"', '"in my feeling"', '"the end"'], 'They show cause and effect.'],
  [['Chronological chain', 'A sequence of events linked by cause and effect.'], ['Multi-part question', 'A question in several parts, each with its own marks.']],
  [
    { q: 'Build a chain for "Explain how the First World War led to the partition of Cameroon".', steps: ['**War in Europe (1914) → Allied attack on German Kamerun → German defeat (1916).**', '**Britain and France occupied different parts → provisional Picot line (1916) → Milner-Simon Declaration (1919).**', '**Versailles took Germany’s colonies → League mandates (1922), confirming the partition.**'] },
  ]),

  L('hi-questiontypes-5', 'hi-f5-paper2', '12.2', 'Question types and how to answer them', 15, ['Essay skills'], [
    'Recognise the instruction:\n- **describe / outline / trace**: give the main events in order, with precise detail\n- **explain why / account for**: give causes, each in its own paragraph, and show how each led to the event\n- **what were the results / consequences / effects**: give effects (political, economic, social)\n- **how far / to what extent / assess**: give evidence for and against, then a judgement\n- **compare**: similarities and differences, point by point.',
    'Answer exactly what is asked. A question on the **causes** of the 1972 referendum does not want a description of the referendum day; a question on the **achievements** of the UN does not want its organs listed without comment.',
    'Use categories to organise causes and effects: **political**, **economic**, **social**, **military**, **external**. They help you avoid repetition and show the examiner a clear structure.',
  ], 'hist-essay-chain', 'Underline the instruction word, then plan to that instruction only.',
  ['"Assess the achievements of the UN" requires:', ['achievements weighed against limits, with a judgement', 'a list of organs only', 'a description of the San Francisco conference', 'only the failures'], 'Assess means judge.'],
  [['Assess', 'To weigh strengths and weaknesses and reach a judgement.'], ['Trace', 'To follow the development of something step by step.']],
  [
    { q: 'Plan "To what extent did the Treaty of Versailles cause the Second World War?"', steps: ['For: **resentment of reparations, war guilt and lost land helped Hitler win support and justified his expansion.**', 'Against: **the Depression, the League’s weakness, appeasement and Hitler’s own aims were also decisive.**', 'Judgement: **Versailles was a major long-term cause, but without the Depression and appeasement, war might not have come in 1939.**'] },
  ]),

  // ---------- Mock and remediation ----------
  L('hi-mock-5', 'hi-f5-mock', '13.1', 'Sitting the mock examination', 13, ['Exam skills'], [
    'The mock is a full rehearsal: Paper 1 (1½ hours) and Paper 2 (2½ hours) under official conditions. Arrive on time, read every instruction, and watch the clock.',
    'Plan your time for Paper 2 from the number of essays your paper requires. If, for example, it requires four essays, about 35 minutes each leaves ten minutes to read the paper and check your scripts. For each essay, take about five minutes to plan: thesis, points and evidence.',
    'For Paper 1, answer the easy questions first, mark the hard ones and return to them, and fill in every answer.',
  ], 'hist-final-term', 'Share time by the number of essays, and keep to the plan.',
  ['If Paper 2 requires four essays in 2½ hours, a sensible plan is:', ['about 35 minutes per essay plus time to read and check', 'one hour on the first essay', 'two hours planning', 'no plan'], 'Equal time for equal marks.'],
  [['Time budget', 'A plan for how long to spend on each part of a paper.']],
  [
    { q: 'Make a time budget for Paper 2 starting at 1:00 pm with four essays required.', steps: ['1:00 to 1:05 read the paper and choose questions.', '1:05 to 1:40, 1:40 to 2:15, 2:15 to 2:50, 2:50 to 3:25: one essay each.', '**3:25 to 3:30: check names, dates and question numbers.**'] },
  ]),

  L('hi-remediation-5', 'hi-f5-mock', '13.2', 'Post-mock remediation: common faults', 15, ['Exam skills'], [
    'The scheme lists the faults examiners see most often:\n- **misinterpreting the question**: writing about results when causes were asked\n- **confusing the League of Nations with the UN**: the League (1920, Geneva, mandates, no USA) is not the UN (1945, New York, trusteeship, Security Council veto)\n- **mischronology**: events in the wrong order or wrong dates (for example placing the Foumban Conference before the plebiscite)\n- **poor paragraph balance**: one long paragraph and several thin ones.',
    'Fixes:\n- underline the instruction and the topic in every question\n- make a two-column table "League / UN" and learn it\n- revise one master timeline every week\n- plan each essay with three or four points of similar weight.',
    'Rewrite your weakest mock essay using the corrections. Then write one timed essay each week until the GCE and check it against this list.',
  ], 'hist-final-term', 'League 1920 Geneva mandates; UN 1945 New York trusteeship.',
  ['"The Trusteeship Council of the League of Nations" is an error because:', ['the Trusteeship Council belonged to the UN', 'the League had a veto', 'the UN never existed', 'trusteeship began in 1884'], 'The League had the Permanent Mandates Commission.'],
  [['Mischronology', 'Placing events in the wrong order of time.'], ['Paragraph balance', 'Giving each main point similar, developed treatment.']],
  [
    { q: 'Correct this sentence: "After the Foumban Conference of 1960, the people voted in the plebiscite and the League of Nations organised reunification."', steps: ['Order and dates: **the plebiscite (11 February 1961) came before the Foumban Conference (July 1961).**', 'Organisation: **the UN, not the League, supervised the plebiscite.**', 'Correct version: **"After the UN-supervised plebiscite of 11 February 1961, leaders met at Foumban in July 1961, and reunification took effect on 1 October 1961."**'] },
  ]),
];
