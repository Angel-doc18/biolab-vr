// Citizenship Education lessons for Form 5, term 1: the GCE examination, the
// State, the executive, Parliament, the judiciary, elections and ELECAM,
// political parties, and public administration and integrity. Original text
// written for this app.

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

export const LESSONS_5A = [
  // ---------- GCE blueprint ----------
  L('ci-gceformat-5', 'ci-f5-blueprint', '1.1', 'The GCE Citizenship Education examination', 12, ['Exam skills'], [
    'Ordinary Level **Citizenship Education** is GCE subject **0562**. On the June 2026 timetable:\n- **Paper 1** (1½ hours): multiple-choice questions on institutions, laws, rights, dates and acronyms\n- **Paper 2** (2½ hours): as the scheme of work sets out, **Section A** contains **compulsory structured questions and case studies** on national issues, and **Section B** contains **essays**.\nAlways follow the instructions printed on your paper.',
    'The Form 5 course covers the **State** and the **three arms of government**, **elections** and **political parties**, **public administration** and integrity, and **international cooperation** (the UN, the Commonwealth, La Francophonie, the AU and regional communities). Form 4 topics (human rights, the family and children, local governance, social vices and safety) are examined too.',
    'All theory is completed by week 13; term 3 is for Paper 1 and Paper 2 practice, the mock and remediation.',
  ], 'civ-gce-0562', 'Precise names of institutions, laws and dates earn marks.',
  ['Section A of Citizenship Paper 2 in the scheme is:', ['compulsory structured questions and case studies', 'optional essays', 'multiple choice', 'a project'], 'Section B is essays.'],
  [['Case study', 'A short real-life situation followed by questions.'], ['Structured question', 'A question in parts, each with its own marks.']],
  [
    { q: 'List the main Form 5 themes and one key institution for each.', steps: ['**The executive: the President of the Republic. The legislature: the National Assembly and the Senate. The judiciary: the Supreme Court and the Constitutional Council.**', '**Elections: ELECAM. Integrity: the CONAC.**', '**International: the UN, the Commonwealth, La Francophonie, the AU and the CEMAC.**'] },
  ]),

  L('ci-casestudy-5', 'ci-f5-blueprint', '1.2', 'Answering case studies', 14, ['Exam skills'], [
    'A **case study** describes a real-life situation (a council that fails to collect waste, a child forced to work, a disputed election) and asks questions about it. Method:\n- read the case twice and **underline** key facts\n- **identify** the civic issue: which right, duty, institution or law is involved?\n- answer each question **separately**, using facts from the case\n- **link** them to principles, laws and institutions (the Constitution, the Penal Code, the council, ELECAM, the Human Rights Commission)\n- for "what should be done", give **practical measures** and say **who** should take them.',
    'Avoid retelling the case, giving opinions without reasons, or answering with one word when the marks ask for explanation.',
    'Use the marks: 2 marks often means a point with an explanation or two short points.',
  ], 'civ-case-steps', 'Identify the issue, use the facts, link to laws and institutions, propose who should act.',
  ['When a case-study question asks "what should be done", you should give:', ['practical measures and who should take them', 'only a definition', 'a poem', 'the case again'], 'Concrete and specific.'],
  [['Civic issue', 'A problem concerning rights, duties, institutions or the law.'], ['Measure', 'A practical action taken to solve a problem.']],
  [
    { q: 'Case: "In a village, girls are often married at 14 and leave school." (a) Which rights are violated? (b) Suggest three measures.', steps: ['(a) **The right to education and protection from early and forced marriage (rights of the child).**', '(b) **Parents and chiefs: end the practice and keep girls in school; the State: enforce the Penal Code against forced marriage; schools and NGOs: run awareness campaigns and support girls’ education.**'] },
  ]),

  // ---------- The State ----------
  L('ci-statedef-5', 'ci-f5-state', '2.1', 'The State: definition and elements', 13, ['The State'], [
    'A **State** is an organised political community living on a defined territory under a government that exercises sovereignty. Its elements:\n- **territory**: land, territorial waters and air space within recognised borders\n- **population**: the people living there\n- **government**: the institutions that make, carry out and apply laws\n- **sovereignty**: supreme authority inside the territory (internal) and independence from other states (external).\n**Recognition** by other states and membership of international organisations confirm statehood.',
    'Forms of State:\n- **unitary**: one central government holds sovereignty; it may **decentralise** powers to regions and councils (Cameroon since 1972)\n- **federal**: the constitution divides powers between a federal government and **federated states**, each with its own institutions (Cameroon from 1961 to 1972; Nigeria; the USA).',
    'A **nation** is a community sharing a sense of common identity and destiny; a State may contain several peoples united as one nation.',
  ], 'civ-state', 'Territory, population, government, sovereignty.',
  ['External sovereignty means a State is:', ['independent of control by other states', 'ruled by another country', 'without borders', 'without a government'], 'Independence.'],
  [['State', 'An organised political community with territory, population, government and sovereignty.'], ['Sovereignty', 'Supreme authority within a territory and independence from outside control.'], ['Unitary State', 'A State with one central government holding sovereignty.'], ['Federal State', 'A State in which powers are shared between federal and state governments.']],
  [
    { q: 'Compare a unitary State and a federal State.', steps: ['**Unitary: one central government holds sovereignty; local authorities receive powers from it (Cameroon today).**', '**Federal: the constitution divides powers between a federal government and federated states, each with its own institutions (Cameroon 1961 to 1972).**'] },
  ]),

  L('ci-cameroonstate-5', 'ci-f5-state', '2.2', 'The evolution of the Cameroonian State', 14, ['The State'], [
    'Stages:\n- **1 January 1960**: independence of French Cameroun as the **Republic of Cameroon**\n- **1 October 1961**: reunification with Southern Cameroons as the **Federal Republic of Cameroon**\n- **20 May 1972**: after a referendum, the **United Republic of Cameroon**, a unitary State\n- **1984**: the name becomes the **Republic of Cameroon**\n- **18 January 1996**: a new constitution makes Cameroon a **decentralised unitary State**, creates the Senate, regions and the Constitutional Council.',
    'National symbols: the **flag** (green, red and yellow vertical stripes with a gold star), the **national anthem**, the **motto** "**Peace – Work – Fatherland**", the **coat of arms** and the seal. **English and French** are official languages of equal value, and the State promotes bilingualism and national languages.',
    'Citizens show respect for national symbols and for the institutions that represent the State.',
  ], 'civ-state', '1960 independence, 1961 federation, 1972 unitary, 1984 Republic of Cameroon, 1996 constitution.',
  ['The 1996 Constitution made Cameroon a:', ['decentralised unitary State', 'federation', 'monarchy', 'confederation'], 'With regions and councils.'],
  [['Constitution', 'The supreme law setting out how a State is organised.'], ['National symbols', 'The flag, anthem, motto, coat of arms and seal.'], ['Referendum', 'A direct vote by citizens on a question.']],
  [
    { q: 'Put in order and name each form of the State: 1972, 1960, 1996, 1961.', steps: ['**1960: Republic of Cameroon (independence).**', '**1961: Federal Republic of Cameroon (reunification).**', '**1972: United Republic of Cameroon (unitary).**', '**1996: decentralised unitary State (new constitution); the name Republic of Cameroon has been used since 1984.**'] },
  ]),

  // ---------- Executive ----------
  L('ci-president-5', 'ci-f5-executive', '3.1', 'The President of the Republic', 14, ['Government'], [
    'The **President of the Republic** is the **Head of State**. He is elected by **direct universal suffrage** for a **seven-year** term and may be re-elected.',
    'Main powers:\n- represents the State and ensures respect for the **Constitution** and the continuity of the State\n- **appoints the Prime Minister** and, on his proposal, the other members of the Government; defines the policy of the nation\n- is **head of the armed forces**\n- **promulgates laws** and may ask Parliament for a second reading or refer a law to the Constitutional Council\n- negotiates and ratifies **treaties**; accredits ambassadors\n- appoints to civil and military posts; exercises the **right of pardon**\n- may call a **referendum**, dissolve the National Assembly in conditions set by the Constitution, and declare a state of emergency.',
    'If the office becomes **vacant** (death, resignation or permanent incapacity), the **President of the Senate** acts as interim Head of State, and an election is organised within the period fixed by the Constitution.',
  ], 'civ-arms', 'Head of State: elected for 7 years, appoints the PM, heads the armed forces, promulgates laws.',
  ['Who acts as interim Head of State if the presidency becomes vacant?', ['the President of the Senate', 'the Prime Minister', 'the Chief Justice', 'the oldest minister'], 'Constitutional rule.'],
  [['Head of State', 'The person who represents the State; in Cameroon, the President of the Republic.'], ['Promulgate', 'To make a law officially come into force.'], ['Right of pardon', 'The power to reduce or cancel a sentence.']],
  [
    { q: 'State five powers of the President of the Republic.', steps: ['**Appoints the Prime Minister and members of the Government.**', '**Heads the armed forces.**', '**Promulgates laws.**', '**Negotiates and ratifies treaties.**', '**Exercises the right of pardon.**'] },
  ]),

  L('ci-government-5', 'ci-f5-executive', '3.2', 'The Prime Minister and the Government', 13, ['Government'], [
    'The **Prime Minister** is the **Head of Government**. Appointed by the President of the Republic, he **directs and coordinates** the Government’s action, ensures that laws are applied, exercises regulatory power (decrees and orders within his competence) and appoints to certain civil posts.',
    'The **Government** is made up of the Prime Minister, ministers, ministers delegate and secretaries of state. It **implements the policy of the nation** defined by the President. Each **ministry** manages a sector: finance, education, health, defence, territorial administration and so on.',
    'The Government is **responsible to the National Assembly**: deputies may question ministers, set up commissions of inquiry and, in conditions fixed by the Constitution, pass a **motion of censure**.\nIn the regions, the State is represented by **governors**, **prefects** (divisions) and **sub-prefects** (subdivisions), appointed officials who carry out government policy.',
  ], 'civ-arms', 'President: Head of State. Prime Minister: Head of Government.',
  ['The Government implements the policy of the nation defined by the:', ['President of the Republic', 'Senate', 'Supreme Court', 'political parties'], 'The PM coordinates its action.'],
  [['Head of Government', 'The person who directs the Government; in Cameroon, the Prime Minister.'], ['Motion of censure', 'A vote by parliament that can force a government to resign.'], ['Prefect', 'The State’s representative in a division.']],
  [
    { q: 'Distinguish between the President of the Republic and the Prime Minister.', steps: ['**The President is Head of State, elected by universal suffrage; the PM is Head of Government, appointed by the President.**', '**The President defines national policy; the PM coordinates the Government that implements it.**'] },
  ]),

  // ---------- Legislature ----------
  L('ci-parliament-5', 'ci-f5-legislature', '4.1', 'The National Assembly and the Senate', 14, ['Government'], [
    'Legislative power is exercised by **Parliament**, which has two houses (it is **bicameral**):\n- the **National Assembly**: **180** members (deputies) elected by direct universal suffrage for **five years**\n- the **Senate**: **100** senators, **10 per region**; in each region **7** are elected by indirect suffrage (by an electoral college of local and regional councillors) and **3** are appointed by the President; their term is five years. The Senate, provided for in 1996, first sat in **2013**, and it represents the regional and local authorities.',
    'Each house elects a **president** and a bureau and works through **committees** (finance, constitutional law, foreign affairs and others). Parliament meets in ordinary **sessions** each year, including the budget session.',
    'Members of Parliament enjoy **immunity** for opinions expressed in the exercise of their functions, so that they can speak freely.',
  ], 'civ-parliament', 'National Assembly: 180 elected deputies. Senate: 100 senators, 70 elected and 30 appointed.',
  ['How many senators does each region have?', ['10', '18', '7', '30'], '7 elected and 3 appointed.'],
  [['Bicameral', 'Having two legislative houses.'], ['Deputy', 'A member of the National Assembly.'], ['Senator', 'A member of the Senate.'], ['Parliamentary immunity', 'Protection of MPs from prosecution for opinions expressed in their duties.']],
  [
    { q: 'Compare the National Assembly and the Senate on membership and election.', steps: ['**National Assembly: 180 deputies, all elected directly by voters for five years.**', '**Senate: 100 senators, 10 per region; 70 elected indirectly by councillors and 30 appointed by the President, for five years.**'] },
  ]),

  L('ci-lawmaking-5', 'ci-f5-legislature', '4.2', 'Making laws, passing the budget and controlling the Government', 14, ['Government'], [
    'Functions of Parliament:\n- **making laws**: a **bill** may come from the Government or from members of Parliament; it is studied in committee, debated and voted by the National Assembly, then examined by the Senate, which may adopt or amend it; disagreements are settled by procedures set in the Constitution; the President then **promulgates** the law (he may ask for a second reading or refer it to the Constitutional Council)\n- **passing the budget**: Parliament votes the annual **finance law** authorising revenue and spending\n- **controlling the Government**: oral and written **questions** to ministers, **commissions of inquiry**, debates and, in the National Assembly, the possibility of a motion of censure\n- **ratifying** certain treaties and approving constitutional amendments.',
    'The **separation of powers** means the legislature makes laws, the executive applies them and the judiciary interprets them and settles disputes; each checks the others.',
    'Citizens follow Parliament through the media, write to their representatives and judge them at elections.',
  ], 'civ-parliament', 'Bill → committee → National Assembly → Senate → promulgation.',
  ['Parliament controls the Government mainly through:', ['questions to ministers and commissions of inquiry', 'arresting ministers', 'running ministries', 'appointing judges'], 'Oversight.'],
  [['Bill', 'A proposed law.'], ['Separation of powers', 'Dividing state power between the legislature, executive and judiciary.'], ['Finance law', 'The annual law adopting the budget.']],
  [
    { q: 'Describe the stages by which a bill becomes law in Cameroon.', steps: ['**The bill is tabled (by the Government or members) and studied in committee.**', '**It is debated and adopted by the National Assembly, then examined by the Senate.**', '**After final adoption, the President promulgates it and it is published, coming into force.**'] },
  ]),

  // ---------- Judiciary ----------
  L('ci-courts-5', 'ci-f5-judiciary', '5.1', 'The organisation of the courts', 15, ['Justice'], [
    'Ordinary courts, from lowest to highest:\n- **customary courts**: apply customary law, mainly in family, marriage, inheritance and land matters\n- **Courts of First Instance** (at subdivision level): minor offences and smaller civil claims\n- **High Courts** (at division level): serious crimes and larger civil cases\n- **Courts of Appeal** (one per region): hear appeals against lower courts\n- the **Supreme Court** (Yaoundé): the highest court, with a **judicial bench**, an **administrative bench** and an **audit bench**.',
    'Special and other courts: **administrative courts** in the regions, **military tribunals**, the **Special Criminal Court** (embezzlement of large public funds) and the **Constitutional Council**, which rules on the constitutionality of laws, conflicts between institutions, and disputes over presidential and parliamentary elections and referendums. Its 11 members serve a nine-year term.',
    'The President of the Republic **guarantees the independence of the judiciary** and appoints magistrates, assisted by the **Higher Judicial Council**.',
  ], 'civ-courts', 'Customary → First Instance → High Court → Court of Appeal → Supreme Court.',
  ['Which court hears appeals from the High Court in a region?', ['the Court of Appeal', 'the customary court', 'the Constitutional Council only', 'the municipal council'], 'One per region.'],
  [['Court of Appeal', 'A court that reviews decisions of lower courts.'], ['Supreme Court', 'The highest court of the judicial system.'], ['Constitutional Council', 'The body that rules on constitutional matters and national election disputes.']],
  [
    { q: 'Where would each case go first? (a) a dispute over a traditional marriage; (b) a petty theft; (c) a murder; (d) a challenge to the presidential election results.', steps: ['(a) **Customary court.**', '(b) **Court of First Instance.**', '(c) **High Court.**', '(d) **Constitutional Council.**'] },
  ]),

  L('ci-ruleoflaw-5', 'ci-f5-judiciary', '5.2', 'Judicial independence and the rule of law', 13, ['Justice'], [
    'The **rule of law** means that:\n- everyone, including leaders and officials, is **subject to the law**\n- laws are **public, clear** and applied **equally**\n- people are presumed **innocent** until proved guilty and have the right to a **fair trial** and a lawyer\n- disputes are settled by **independent courts**, not by force.',
    '**Judicial independence** means judges decide cases according to the law and the evidence, free from pressure by the executive, politicians, money or family. It is protected by rules on appointment, discipline and security of tenure, and by judges’ own integrity.',
    'Threats to the rule of law: corruption, political interference, delays in justice, mob justice, and ignorance of rights. Citizens support it by obeying the law, using the courts and refusing bribes and mob justice.',
  ], 'civ-courts', 'No one is above the law; judges answer only to the law.',
  ['"Mob justice" (punishing suspected thieves in the street) violates:', ['the rule of law and the right to a fair trial', 'nothing', 'the budget', 'tax law only'], 'Only courts may judge and punish.'],
  [['Rule of law', 'The principle that all are subject to clear laws applied by independent courts.'], ['Presumption of innocence', 'A person is innocent until proved guilty.'], ['Judicial independence', 'Judges decide free from outside pressure.']],
  [
    { q: 'A crowd catches a suspected thief and beats him. Explain why this is wrong and what should be done.', steps: ['**It violates the rule of law: the suspect is presumed innocent and has a right to a fair trial; only courts may punish.**', '**The crowd should hand the suspect to the police, who will investigate and bring him before a court.**'] },
  ]),

  // ---------- Elections ----------
  L('ci-voting-5', 'ci-f5-elections', '6.1', 'Voting: a right and a duty; democratic principles', 13, ['Democracy'], [
    'Voting is both a **civic right** (to choose leaders) and a **civic duty** (to take part in public life). In Cameroon, citizens aged **20** and above who are registered on the electoral lists may vote.',
    'Principles of democratic elections:\n- **universal suffrage**: all adult citizens may vote, without discrimination\n- **equal suffrage**: one person, one vote\n- **secret ballot**: each voter chooses alone in the booth (isoloir)\n- **free** elections without intimidation or vote buying\n- **transparency**: open procedures, observers, public counting and publication of results\n- **periodic** elections at fixed intervals.',
    'Cameroonians elect the President, deputies, municipal councillors and (indirectly) senators and regional councillors. Electoral offences such as vote buying, multiple voting and intimidation are punished by law.',
  ], 'civ-elections', 'Universal, equal, secret, free, transparent and periodic.',
  ['Voting alone in a booth protects the principle of:', ['the secret ballot', 'universal suffrage', 'periodic elections', 'party funding'], 'Free choice.'],
  [['Suffrage', 'The right to vote.'], ['Secret ballot', 'A vote cast privately so no one knows the choice.'], ['Electoral offence', 'A crime such as vote buying or multiple voting.']],
  [
    { q: 'Explain why the secret ballot and transparency are both needed for a fair election.', steps: ['**The secret ballot protects voters from pressure, so they vote freely.**', '**Transparency (open counting, observers, published results) lets everyone check that votes were counted correctly, so results are trusted.**'] },
  ]),

  L('ci-elecam-5', 'ci-f5-elections', '6.2', 'ELECAM: Elections Cameroon', 13, ['Democracy'], [
    '**Elections Cameroon** (ELECAM) is the independent body responsible for organising, managing and supervising elections and referendums. It was created by a law of **29 December 2006**, and the rules of elections are set out in the **Electoral Code** of **19 April 2012**.',
    'Structure: an **Electoral Board**, which supervises and ensures that the law is respected, and a **Directorate General of Elections**, which runs operations, with branches in regions, divisions and councils.',
    'Functions:\n- registering voters and keeping the **electoral lists**; issuing voter cards\n- organising polling stations, materials and staff\n- **counting** and announcing provisional results (final results of presidential and legislative elections are proclaimed by the Constitutional Council)\n- civic education of voters.',
  ], 'civ-elections', 'ELECAM organises; the Constitutional Council proclaims national results and settles disputes.',
  ['ELECAM was created by a law of:', ['2006', '1990', '1972', '2019'], '29 December 2006.'],
  [['ELECAM', 'Elections Cameroon, the body that organises elections.'], ['Electoral list', 'The register of citizens allowed to vote.'], ['Electoral Code', 'The law governing elections (2012).']],
  [
    { q: 'Describe three functions of ELECAM and one way citizens can help it.', steps: ['**Registering voters and keeping electoral lists.**', '**Organising polling stations and counting votes.**', '**Educating citizens about voting.**', '**Citizens can help by registering early, checking their names on the lists and voting peacefully.**'] },
  ]),

  // ---------- Political parties ----------
  L('ci-pluralism-5', 'ci-f5-parties', '7.1', 'From the single party to pluralism', 13, ['Democracy'], [
    'After **1966**, Cameroon became a **single-party** State under the Cameroon National Union (CNU), which became the CPDM in 1985. Other parties were not allowed.',
    'In **December 1990**, a package of **liberty laws** restored freedom of association, the press and public meetings and allowed the creation of **political parties**. New parties, such as the Social Democratic Front (SDF), were founded, and the first multi-party legislative and presidential elections took place in **1992**.',
    '**Political pluralism** means that several parties and opinions compete freely and peacefully for power through elections. It requires freedom of expression and association, fair rules and respect for the results.',
  ], 'civ-parties', 'Single party 1966 to 1990; liberty laws December 1990; first multi-party elections 1992.',
  ['Cameroon’s first multi-party elections after 1990 took place in:', ['1992', '1990', '1972', '2002'], 'Legislative and presidential.'],
  [['Political pluralism', 'Free competition between several parties and opinions.'], ['Liberty laws', 'The December 1990 laws restoring civil and political freedoms.']],
  [
    { q: 'Give two advantages of a multi-party system over a single-party system.', steps: ['**Citizens have a real choice of leaders and programmes.**', '**The opposition criticises and checks the government, encouraging accountability.**'] },
  ]),

  L('ci-partyroles-5', 'ci-f5-parties', '7.2', 'The role of political parties', 13, ['Democracy'], [
    'Political parties:\n- present **programmes** (manifestos) and **candidates** for election\n- **represent** citizens’ interests and opinions\n- carry out **civic education** and mobilise citizens to register and vote\n- form the **government** if they win, or the **opposition** if they lose, which criticises and proposes alternatives\n- train future leaders and link the people with institutions.',
    'Obligations: parties must respect the Constitution, national unity and territorial integrity; they may not be based on tribe or religion, use violence or receive illegal funding. They should practise internal democracy.',
    'Threats to democratic parties: vote buying, tribalism, violence, hate speech and personalisation of power. Citizens should judge parties by their programmes and conduct.',
  ], 'civ-parties', 'Programmes, candidates, representation, civic education, government or opposition.',
  ['A party manifesto is:', ['the programme a party promises to carry out', 'a voter’s card', 'a court judgment', 'the budget'], 'What it will do in power.'],
  [['Manifesto', 'A party’s programme and promises.'], ['Opposition', 'Parties not in government that criticise and offer alternatives.'], ['Hate speech', 'Speech that attacks or incites hatred against a group.']],
  [
    { q: 'Explain three functions of political parties in a democracy.', steps: ['**They offer voters a choice of programmes and candidates.**', '**They educate and mobilise citizens to take part in elections.**', '**In opposition, they hold the government accountable by criticising and proposing alternatives.**'] },
  ]),

  // ---------- Public administration ----------
  L('ci-publicservice-5', 'ci-f5-publicadmin', '8.1', 'The principles of public service', 13, ['Public administration'], [
    'The **public service** provides services to citizens (education, health, civil status, security). Its principles:\n- **neutrality**: officials serve all citizens equally, regardless of party, religion, ethnicity or region\n- **continuity**: essential services must run without interruption\n- **equality** of access for all users\n- **transparency**: rules, decisions and use of funds are open\n- **accountability**: officials answer for their actions and the resources they manage\n- **adaptability**: services improve to meet new needs.',
    'Civic morality for officials: honesty, punctuality, courtesy, respect for users, confidentiality and protecting public property.',
    'Professional misconduct includes absenteeism, demanding money for free services, favouritism and misuse of public vehicles and funds.',
  ], 'civ-integrity', 'Neutral, continuous, equal, transparent, accountable.',
  ['An official who serves only people from his own region violates:', ['neutrality and equality', 'continuity', 'transparency only', 'adaptability'], 'All citizens must be served equally.'],
  [['Neutrality', 'Treating all users equally, without bias.'], ['Continuity', 'Keeping essential public services running without interruption.'], ['Professional misconduct', 'Behaviour by an official that breaks the rules of their service.']],
  [
    { q: 'Give an example of a breach of each principle: neutrality, continuity, transparency.', steps: ['**Neutrality: refusing a service to a citizen because of his political party.**', '**Continuity: closing a health centre for days without notice.**', '**Transparency: refusing to publish how council funds were spent.**'] },
  ]),

  L('ci-anticorruption-5', 'ci-f5-publicadmin', '8.2', 'Fighting corruption and embezzlement', 14, ['Public administration'], [
    'Forms of misconduct: **corruption** (giving or receiving bribes), **embezzlement** of public funds, **favouritism** and **nepotism**, fraud in examinations and recruitment, and **money laundering** (disguising illegal money).',
    'Institutions:\n- the **CONAC** (National Anti-Corruption Commission, 2006): prevention, investigations and reports\n- **ANIF** (National Financial Investigation Agency): analyses suspicious financial transactions to fight **money laundering** and the financing of terrorism\n- the **Supreme State Audit** (CONSUPE), which audits public bodies\n- the **audit bench** of the Supreme Court and the regional audit courts\n- the **Special Criminal Court** (2011), which tries embezzlement of large public funds\n- ordinary courts, police and gendarmerie.',
    'Citizens fight corruption by refusing to pay or accept bribes, demanding receipts, reporting abuse through official channels, and supporting leaders of integrity.',
  ], 'civ-integrity', 'CONAC for corruption, ANIF for money laundering, the Special Criminal Court for embezzlement.',
  ['Disguising the illegal origin of money is:', ['money laundering', 'saving', 'tax payment', 'budgeting'], 'ANIF fights it.'],
  [['Embezzlement', 'Theft or misuse of funds entrusted to a person.'], ['Money laundering', 'Disguising the illegal origin of money.'], ['Nepotism', 'Favouring relatives in appointments.']],
  [
    { q: 'Explain the roles of three institutions that fight corruption and financial crime in Cameroon.', steps: ['**CONAC: prevents and investigates corruption and publishes reports.**', '**ANIF: tracks suspicious transactions to fight money laundering.**', '**Special Criminal Court: tries cases of embezzlement of large public funds.**'] },
  ]),
];
