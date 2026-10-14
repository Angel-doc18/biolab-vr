// Citizenship Education lessons for Form 5, terms 2 and 3: international
// cooperation and diplomacy, the UN and the Commonwealth, La Francophonie and
// African alliances, and the GCE drills, the mock and remediation. Original
// text written for this app.

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
  // ---------- International cooperation ----------
  L('ci-bilateral-5', 'ci-f5-cooperation', '9.1', 'Bilateral and multilateral cooperation', 13, ['International relations'], [
    '**International cooperation** is working together with other countries and organisations for mutual benefit.\n- **Bilateral** cooperation is between **two** countries: for example, Cameroon and China (roads, stadiums, the Kribi port), Cameroon and France or Germany (training, development projects), Cameroon and Nigeria (border commission).\n- **Multilateral** cooperation involves **several** countries, usually through **international organisations**: the UN and its agencies, the African Union, the CEMAC, the World Bank, the African Development Bank.',
    'Forms of **aid** and cooperation:\n- **financial**: grants (not repaid) and loans (repaid with interest)\n- **technical**: experts, training, scholarships and technology transfer\n- **humanitarian**: emergency food, shelter and health care in crises\n- **military** and security cooperation, and **cultural** and educational exchanges.',
    'Benefits: development projects, skills, trade and investment, security and peace. Risks: debt, dependence and conditions imposed by lenders; good governance helps ensure aid is used well.',
  ], 'civ-cooperation', 'Bilateral: two countries. Multilateral: many, through organisations.',
  ['A loan from the World Bank is an example of:', ['multilateral cooperation', 'bilateral cooperation', 'domestic trade', 'a tax'], 'The World Bank has many member states.'],
  [['Bilateral', 'Between two countries.'], ['Multilateral', 'Among several countries, often through organisations.'], ['Technical cooperation', 'Sharing experts, training and technology.'], ['Humanitarian aid', 'Emergency help in crises.']],
  [
    { q: 'Classify: (a) a Chinese-built stadium in Cameroon; (b) UNICEF vaccines; (c) a scholarship from Germany; (d) World Food Programme rations for displaced persons.', steps: ['(a) **Bilateral (financial and technical).**', '(b) **Multilateral (UN agency).**', '(c) **Bilateral (technical and educational).**', '(d) **Multilateral humanitarian aid.**'] },
  ]),

  L('ci-diplomacy-5', 'ci-f5-cooperation', '9.2', 'Diplomacy, embassies and consulates', 13, ['International relations'], [
    '**Diplomacy** is the conduct of relations between states by negotiation and dialogue. It aims to protect national interests, promote trade and cooperation, settle disputes peacefully and help citizens abroad. Cameroon’s foreign policy is managed by the **Ministry of External Relations** under the President.',
    'Missions abroad:\n- an **embassy**, in a foreign capital, headed by an **ambassador**, represents Cameroon to that government\n- between Commonwealth countries, it is called a **high commission**, headed by a **high commissioner**\n- a **consulate**, often in a large city, helps citizens abroad (passports, civil status, protection) and issues **visas** to foreigners.\nDiplomats enjoy **immunities** under international law (the Vienna Convention of 1961) so that they can work freely.',
    'Peaceful settlement in practice: the **Bakassi** dispute between Cameroon and Nigeria was settled by the **International Court of Justice** in **2002** and the **Greentree Agreement** of 2006, a model of resolving a border conflict through law and diplomacy.',
  ], 'civ-cooperation', 'Embassy (ambassador), high commission (Commonwealth), consulate (citizens and visas).',
  ['The Bakassi dispute between Cameroon and Nigeria was settled by the:', ['International Court of Justice and the Greentree Agreement', 'a war', 'the League of Nations', 'a football match'], 'Judgment of 2002, agreement of 2006.'],
  [['Diplomacy', 'Managing relations between states by negotiation.'], ['Ambassador', 'The head of an embassy.'], ['Consulate', 'An office that serves citizens abroad and issues visas.'], ['Diplomatic immunity', 'Legal protection that lets diplomats work freely.']],
  [
    { q: 'Explain how the Bakassi case shows the value of diplomacy.', steps: ['**Instead of war, Cameroon took the border dispute to the International Court of Justice, which ruled in 2002.**', '**The Greentree Agreement (2006), with UN support, organised Nigeria’s peaceful withdrawal, preserving peace between neighbours.**'] },
  ]),

  // ---------- UN and Commonwealth ----------
  L('ci-unorgans-5', 'ci-f5-un', '10.1', 'The United Nations and Cameroon', 14, ['International relations'], [
    'The **United Nations** (UN), founded in **1945**, works for peace, security, development and human rights. Its principal organs: the **General Assembly** (all members), the **Security Council** (5 permanent members with a veto and 10 elected), the **Economic and Social Council**, the **International Court of Justice**, the **Secretariat** (headed by the Secretary-General) and the **Trusteeship Council** (which supervised trust territories such as the Cameroons).',
    'Specialised agencies and programmes active in Cameroon: **UNICEF** (children), **WHO** (health), **UNESCO** (education, science, culture), **FAO** (food and agriculture), **WFP** (food aid), **UNHCR** (refugees), **UNDP** (development), **ILO** (labour).',
    'Cameroon was admitted to the UN in **September 1960**. It benefits from aid, technical support, humanitarian help and a voice in world affairs, and it contributes through its membership dues, by sending personnel to peacekeeping missions and by ratifying UN conventions.',
  ], 'civ-un', 'Cameroon joined the UN in 1960; trusteeship links its history to the UN.',
  ['Which UN agency helps refugees in Cameroon?', ['UNHCR', 'UNESCO', 'ILO', 'FAO'], 'High Commissioner for Refugees.'],
  [['Specialised agency', 'A UN body working in a particular field.'], ['Peacekeeping', 'UN forces helping to keep peace in conflict areas.'], ['Secretary-General', 'The head of the UN Secretariat.']],
  [
    { q: 'Give three benefits Cameroon draws from UN membership.', steps: ['**Health and child programmes from WHO and UNICEF, such as vaccination campaigns.**', '**Humanitarian help for refugees and displaced persons from UNHCR and WFP.**', '**A voice in world affairs and support for peaceful settlement of disputes.**'] },
  ]),

  L('ci-commonwealth-5', 'ci-f5-un', '10.2', 'Cameroon and the Commonwealth', 13, ['International relations'], [
    'The **Commonwealth of Nations** is a voluntary association of independent countries, most of them former territories of the British Empire, though some (such as Mozambique, Rwanda, Gabon and Togo) have no such history. Its secretariat is in **London**, and the British monarch is its symbolic head.',
    'Cameroon joined on **1 November 1995**, reflecting its anglophone heritage from the British Cameroons. Shared values: **democracy**, **human rights**, the **rule of law**, good governance and development.',
    'Benefits for Cameroon: scholarships and training, technical assistance, election observation, trade and cultural links, participation in the **Commonwealth Games** and youth programmes, and a forum with countries across the world. Members are expected to respect the Commonwealth’s values.',
  ], 'civ-un', 'Cameroon joined the Commonwealth on 1 November 1995.',
  ['Cameroon joined the Commonwealth in:', ['1995', '1960', '1961', '2002'], 'On 1 November 1995.'],
  [['Commonwealth', 'A voluntary association of independent countries, most formerly linked to Britain.'], ['High commission', 'An embassy between Commonwealth countries.']],
  [
    { q: 'Explain why Cameroon belongs to both the Commonwealth and La Francophonie.', steps: ['**Cameroon’s history combines British and French rule, giving it anglophone and francophone regions.**', '**Membership of both reflects its bilingual, bicultural identity and gives access to two networks of cooperation.**'] },
  ]),

  // ---------- Francophonie and Africa ----------
  L('ci-oif-5', 'ci-f5-francophonie', '11.1', 'La Francophonie', 12, ['International relations'], [
    'The **International Organisation of La Francophonie** (OIF) brings together states and governments that share the **French language**. It began in **1970** as an agency for cultural and technical cooperation and became the OIF; it is headed by a **Secretary-General** and holds regular summits of heads of state.',
    'Aims: promoting the French language and **cultural and linguistic diversity**; peace, **democracy** and human rights; education and training; sustainable development and economic cooperation. Its operators include a university agency and the TV5Monde channel.',
    'Cameroon is a member and takes part in its programmes: scholarships, support for education and the media, election observation and cultural events such as the Francophonie Games.',
  ], 'civ-alliances', 'OIF: the French-speaking community of states, founded in 1970.',
  ['La Francophonie brings together states that share the:', ['French language', 'English language', 'same currency', 'same religion'], 'OIF.'],
  [['OIF', 'International Organisation of La Francophonie.'], ['Linguistic diversity', 'The existence of many languages, valued and protected.']],
  [
    { q: 'Give two aims of La Francophonie and one benefit for Cameroon.', steps: ['**Aims: promoting the French language and cultural diversity; supporting peace and democracy.**', '**Benefit: scholarships, training and cultural exchanges for Cameroonians.**'] },
  ]),

  L('ci-africanalliances-5', 'ci-f5-francophonie', '11.2', 'African alliances: the AU, the CEMAC and ECOWAS', 14, ['International relations'], [
    'The **African Union** (AU), launched in **2002** to replace the OAU, has its headquarters in **Addis Ababa**. It works for African unity, peace and security (the Peace and Security Council), democracy, human rights and development, and may intervene in member states in grave circumstances such as genocide. Cameroon is a founding member.',
    'Regional communities:\n- the **CEMAC** (Economic and Monetary Community of Central Africa): Cameroon, the Central African Republic, Chad, Congo, Equatorial Guinea and Gabon; a common currency (the franc CFA issued by the BEAC, headquartered in Yaoundé), a common market and free movement\n- **ECCAS**, the wider Economic Community of Central African States, of which Cameroon is also a member\n- **ECOWAS** (Economic Community of West African States, 1975), Cameroon’s western neighbours’ bloc; Cameroon is **not** a member but cooperates with it, notably on security in the Gulf of Guinea and the Lake Chad basin.',
    'Benefits of integration: larger markets, stronger joint voice, cooperation against insecurity (Boko Haram, piracy) and shared infrastructure.',
  ], 'civ-alliances', 'AU for the continent; CEMAC and ECCAS for Central Africa; ECOWAS for West Africa.',
  ['Cameroon is a member of the:', ['CEMAC and ECCAS, not ECOWAS', 'ECOWAS only', 'European Union', 'no regional bloc'], 'Central African communities.'],
  [['African Union', 'The continental organisation of African states (2002).'], ['CEMAC', 'Economic and Monetary Community of Central Africa.'], ['ECCAS', 'Economic Community of Central African States.']],
  [
    { q: 'Explain two benefits Cameroon gains from the CEMAC.', steps: ['**A common currency managed by the BEAC, which eases trade among members.**', '**A larger regional market for Cameroonian goods and cooperation on security and infrastructure.**'] },
  ]),

  // ---------- Paper 1 ----------
  L('ci-mcq-5', 'ci-f5-paper1', '12.1', 'Paper 1 strategy', 12, ['Exam skills'], [
    'Paper 1 lasts **1½ hours** and tests precise knowledge: institutions and their powers, numbers (180 deputies, 100 senators), dates (UDHR 1948, UNCRC 1989, UN membership 1960, Commonwealth 1995), acronyms and types of courts. Strategy:\n- read the whole stem and predict the answer\n- eliminate options wrong in a name, number or date\n- watch for **NOT** and **EXCEPT**\n- never leave a question blank.',
    'Common traps: National Assembly and Senate; Head of State and Head of Government; decentralisation and deconcentration; refugee and internally displaced person; bilateral and multilateral; Court of Appeal and Supreme Court.',
    'Revise with flashcards and timed sets of 25 questions, then correct every mistake.',
  ], 'civ-acronyms', 'Most traps are look-alike pairs: learn the exact difference.',
  ['Who is the Head of Government in Cameroon?', ['the Prime Minister', 'the President of the Republic', 'the President of the Senate', 'the Chief Justice'], 'The President is Head of State.'],
  [['Stem', 'The question part of a multiple-choice item.']],
  [
    { q: 'Answer and explain: "Which of the following is NOT an organ of the United Nations? (A) Security Council (B) General Assembly (C) Pan-African Parliament (D) International Court of Justice"', steps: ['The Security Council, General Assembly and ICJ are UN organs.', '**(C) The Pan-African Parliament belongs to the African Union.**'] },
  ]),

  L('ci-acronyms-5', 'ci-f5-paper1', '12.2', 'Key acronyms, numbers and dates', 14, ['Revision'], [
    'Acronyms:\n- **UDHR** Universal Declaration of Human Rights; **UNCRC** UN Convention on the Rights of the Child; **ACRWC** African Charter on the Rights and Welfare of the Child\n- **ELECAM** Elections Cameroon; **CONAC** National Anti-Corruption Commission; **ANIF** National Financial Investigation Agency; **CONSUPE** Supreme State Audit\n- **MINAS** Social Affairs; **MINPROFF** Women’s Empowerment and the Family; **ANTIC** ICT agency; **IDP** internally displaced person\n- **UN, AU, OIF, CEMAC, ECCAS, ECOWAS, UNICEF, WHO, UNESCO, UNHCR**.',
    'Numbers: National Assembly **180**; Senate **100** (10 per region: 7 elected, 3 appointed); President’s term **7 years**; deputies and senators **5 years**; voting age **20**; a child is under **18**.',
    'Dates: UDHR **1948**; Banjul Charter **1981**; UNCRC **1989**; ACRWC **1990**; liberty laws **1990**; Constitution **1996**; ELECAM law **2006**; Electoral Code **2012**; Senate first sat **2013**; decentralisation code **2019**; UN membership **1960**; Commonwealth **1995**; AU **2002**.',
  ], 'civ-acronyms', 'Learn acronyms with their full names, not only the letters.',
  ['What does ANIF fight?', ['money laundering and the financing of terrorism', 'road accidents', 'malaria', 'illiteracy'], 'Financial intelligence.'],
  [['Acronym', 'A word formed from initial letters, such as ELECAM.']],
  [
    { q: 'Expand and explain: CONAC, ELECAM, UNCRC.', steps: ['**CONAC: National Anti-Corruption Commission, which fights corruption.**', '**ELECAM: Elections Cameroon, which organises elections.**', '**UNCRC: UN Convention on the Rights of the Child (1989), which protects children’s rights.**'] },
  ]),

  // ---------- Paper 2 ----------
  L('ci-sectiona-5', 'ci-f5-paper2', '13.1', 'Section A: structured questions and case studies', 14, ['Exam skills'], [
    'Section A is **compulsory**. Structured questions ask you to **define**, **state**, **explain** or **suggest**; case studies give a national situation and ask you to analyse it.',
    'Method for each part:\n- **define** with key words (decentralisation: "transfer of powers and resources from the State to elected regional and local authorities")\n- **state**: short, precise points\n- **explain**: point + reason or example\n- **suggest measures**: practical action + who acts (the council, ELECAM, parents, the State).',
    'Use correct institutional names and laws, and examples from Cameroon. Keep to the marks: do not write an essay for a 2-mark part.',
  ], 'civ-case-steps', 'Define with key words; explain with reasons; suggest with actors.',
  ['A correct definition of decentralisation must mention:', ['the transfer of powers and resources to elected local authorities', 'moving the capital', 'abolishing the State', 'appointing governors'], 'Key words earn the mark.'],
  [['Define', 'Give the precise meaning using key words.'], ['Suggest', 'Propose practical actions.']],
  [
    { q: 'Case: "Rubbish piles up in a market and the council says it has no money." (a) Which authority is responsible? (b) Suggest three measures.', steps: ['(a) **The council (municipality), which is responsible for markets and waste.**', '(b) **Traders pay market fees honestly so the council can fund cleaning; the council organises regular collection and human investment days; the council seeks FEICOM support or partners for waste trucks.**'] },
  ]),

  L('ci-essays-5', 'ci-f5-paper2', '13.2', 'Section B: writing Citizenship essays', 14, ['Exam skills'], [
    'Section B essays deal with civic responsibilities, the organs of government or international relations. Structure:\n- **introduction**: define key terms and state your main answer\n- **body**: one point per paragraph, each explained with laws, institutions and Cameroonian examples\n- **conclusion**: sum up and give a judgement or recommendation.',
    'Typical questions: "Explain the functions of Parliament in Cameroon"; "Discuss the role of ELECAM in strengthening democracy"; "Examine the benefits of Cameroon’s membership of the Commonwealth"; "What measures can be taken to fight juvenile delinquency?"',
    'For "discuss" or "examine", consider strengths and limits before concluding. Plan for about five minutes, and check names and numbers before you finish.',
  ], 'civ-case-steps', 'Define, explain one point per paragraph, conclude with a judgement.',
  ['An essay asking you to "discuss" requires:', ['strengths and limits, then a conclusion', 'only a definition', 'a list of acronyms', 'a diagram only'], 'Balanced analysis.'],
  [['Examine', 'Look closely at a topic and explain it fully.'], ['Recommendation', 'A suggestion for action.']],
  [
    { q: 'Plan an essay on "Discuss the role of ELECAM in strengthening democracy in Cameroon".', steps: ['Introduction: **ELECAM (2006) is the independent body that organises elections under the 2012 Electoral Code.**', 'Body: **voter registration and lists; organising polls and counting; civic education; limits such as low registration, logistics and public trust.**', 'Conclusion: **ELECAM is central to free elections; its impact depends on independence, resources and citizens’ participation.**'] },
  ]),

  // ---------- Mock and remediation ----------
  L('ci-mock-5', 'ci-f5-mock', '14.1', 'Sitting the mock examination', 12, ['Exam skills'], [
    'The mock is a full rehearsal: Paper 1 (1½ hours) and Paper 2 (2½ hours) under official conditions, with no notes.',
    'For Paper 2, begin with the **compulsory Section A**, then the essays. Share time by marks, plan each essay for a few minutes, and keep time at the end to check institutional names, numbers and dates.',
    'For Paper 1, move steadily, mark doubtful items and return to them, and never leave a blank.',
  ], 'civ-final-term', 'Section A first; time by marks; check names and numbers.',
  ['In Citizenship Paper 2, it is sensible to start with:', ['the compulsory Section A', 'the hardest essay', 'the last page', 'any random question'], 'Secure the compulsory marks.'],
  [['Time budget', 'A plan for time spent on each part of a paper.']],
  [
    { q: 'Make a time plan for Paper 2 (2½ hours) with Section A worth half the marks and two essays.', steps: ['Reading: 5 minutes.', 'Section A: about 70 minutes.', '**Two essays: about 35 minutes each; final check: about 5 minutes.**'] },
  ]),

  L('ci-remediation-5', 'ci-f5-mock', '14.2', 'Post-mock remediation: common mistakes', 14, ['Exam skills', 'Revision'], [
    'The scheme names the mistakes examiners see most often:\n- **confusing the National Assembly with the Senate**: the National Assembly has 180 deputies elected directly; the Senate has 100 senators (70 elected indirectly, 30 appointed) and represents the regional and local authorities\n- **misrepresenting the rule of law**: it means everyone, including leaders, is subject to the law applied by independent courts, not "the government does what it wants" or "the strongest decides"\n- **misinterpreting human rights conventions**: know which text says what (UDHR 1948, Banjul Charter 1981, UNCRC 1989, ACRWC 1990) and that a child is under 18\n- **defining decentralisation poorly**: it is the transfer of powers and resources to **elected** regional and local authorities, not deconcentration to appointed governors.',
    'Fix: write the correct definition of each confused term ten times in your own words, make comparison tables, and rewrite your weakest mock answer.',
    'Then practise one case study and one essay each week until the GCE, checking against this list.',
  ], 'civ-final-term', 'Learn the exact differences between look-alike terms.',
  ['Giving powers to appointed governors is:', ['deconcentration, not decentralisation', 'decentralisation', 'federalism', 'the rule of law'], 'Decentralisation goes to elected bodies.'],
  [['Remediation', 'Correcting the weaknesses found in an examination.']],
  [
    { q: 'Correct this answer: "Decentralisation is when the President appoints governors to rule the regions."', steps: ['**This describes deconcentration: governors are appointed representatives of the State.**', '**Correct definition: decentralisation is the transfer by the State of powers and resources to elected regional and local authorities (regional councils and councils) that enjoy administrative and financial autonomy.**'] },
  ]),
];
