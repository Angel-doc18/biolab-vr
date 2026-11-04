// English Language lessons for Form 3 written for the 2026/2027 harmonised
// scheme: the points of its four modules not already taught in lessons3a.js
// and lessons3b.js. Original text written for this app. **double asterisks**
// mark key terms; `examples` are worked examples.

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

export const LESSONS_3C = [
  // ---------- Generations and gender equality ----------
  L('en-tensecontrast-3', 'en-f3-generations', '1.1', 'The simple present, the present continuous and the simple past', 12, ['Grammar'], [
    'The **simple present** is for habits, facts and permanent situations: "My grandmother **tells** stories every evening." The **present continuous** (am/is/are + -ing) is for actions happening now or around now, and for changing situations: "Young people **are spending** more time online these days." The **simple past** is for finished actions at a definite past time: "When my father **was** young, he **walked** ten kilometres to school."',
    'Signal words: simple present: always, usually, every day; present continuous: now, at the moment, these days, this year; simple past: yesterday, last year, in 1990, when he was young, ago. Stative verbs (know, like, believe, own, belong, understand) are not normally used in the continuous: "I **understand** my parents now", not "I am understanding".',
    'Contrasting generations often needs all three: "In the past, children **obeyed** without question. Today many **ask** why. This year our club **is discussing** how to bridge the gap."',
  ], 'en3-tense-contrast', 'Look for the signal word, then choose the tense.',
  ['"These days, more girls ___ engineering."', ['are studying', 'studied', 'study yesterday', 'were studying'], '"These days" signals a changing situation now.'],
  [['Stative verb', 'A verb for a state, not an action, such as know or belong.'], ['Simple past', 'The tense for actions finished at a definite past time.']],
  [
    { q: 'Put the verbs in the right tense: "When my mother (be) a girl, she (fetch) water every morning. Now she (own) a tap, and at the moment she (water) her garden."', steps: ['past state → **was**', 'past habit → **fetched**', 'stative verb now → **owns**', 'action now → **is watering**'] },
  ]),

  L('en-generations-3', 'en-f3-generations', '1.2', 'Personality adjectives; the generation gap and gender equality; /e/, /æ/ and word stress', 12, ['Vocabulary', 'Speaking', 'Speech work'], [
    '**Personality adjectives** describe character: kind, patient, honest, responsible, hard-working, respectful, generous, open-minded, stubborn, impatient, selfish, arrogant, shy, sociable, ambitious, reliable. Kinship and traditional values words: elders, ancestors, in-laws, extended family, respect, solidarity, hospitality, obedience.',
    'The **generation gap** is the difference in ideas and habits between older and younger people: music, dress, phones, marriage, careers. It can be bridged by listening, explaining, showing respect and learning from each other: elders bring wisdom, the young bring new skills. **Gender equality** means girls and boys have the same rights and chances: in school, at home (sharing chores), in jobs and in leadership.',
    'Speech work: **/e/** (men, bed, said, friend) and **/æ/** (man, bad, sad, hand); **/ɪ/** (live, fill) and **/iː/** (leave, feel). **Word stress**: reSPONsible, reSPECTful, PAtient, amBItious, SOciable. Words ending in -ity and -ic usually stress the syllable just before the ending: geneROSity, eQUALity, demoCRATic.',
  ], 'en3-personality', 'Back up a personality adjective with an action that proves it.',
  ['A person who listens to both sides before deciding is:', ['open-minded', 'stubborn', 'selfish', 'arrogant'], 'Open to other ideas.'],
  [['Generation gap', 'The difference in ideas and habits between older and younger people.'], ['Gender equality', 'Equal rights and chances for girls and boys, women and men.']],
  [
    { q: 'Write three sentences on how to bridge the generation gap in a family.', steps: ['"**Parents and children should talk calmly about their different ideas.**"', '"The young can teach elders to use phones, while elders share their wisdom and stories."', '"**When both sides show respect, the gap becomes a bridge.**"'] },
  ]),

  // ---------- Entrepreneurship ----------
  L('en-willgoing-3', 'en-f3-entrepreneur', '12.1', 'Will and going to', 10, ['Grammar'], [
    '**Will** + base form: decisions made at the moment of speaking ("I’ll lend you the money"), predictions based on opinion ("I think the shop will do well"), promises and offers ("We will deliver on Friday").',
    '**Be going to** + base form: plans and intentions already decided ("Next month I am going to open a phone-charging stall") and predictions from present evidence ("Look at those clouds: the market is going to be empty").',
    'Negatives: will not (won’t), am/is/are not going to. Questions: "Will you invest?" "Are you going to apply?"',
  ], 'future-forms', 'Already planned? Going to. Deciding now? Will.',
  ['"I have saved 50 000 FCFA. I ___ start a small poultry farm."', ['am going to', 'will be', 'went to', 'have gone to'], 'A plan already made.'],
  [['Intention', 'Something you plan to do.'], ['Prediction', 'A statement about what will happen.']],
  [
    { q: 'Choose will or going to: (a) "The phone is ringing." "I ___ answer it." (b) "She ___ sell school bags at the start of the year; she has already bought them."', steps: ['(a) decision now → **will** ("I’ll answer it")', '(b) a plan already made → **is going to**'] },
  ]),

  L('en-entrepreneur-3', 'en-f3-entrepreneur', '12.2', 'Youth entrepreneurship, budgeting and the letter of application', 14, ['Vocabulary', 'Writing'], [
    'Financial terms: capital (money to start a business), income, expenses, profit, loss, budget, savings, loan, interest, receipt, invoice, customer, supplier, market survey. A young **entrepreneur** starts small (a snack stall, phone repairs, tailoring), studies customers, keeps records of income and expenses, saves part of the profit and grows step by step. A **personal budget** lists expected income and planned spending, so expenses never exceed income.',
    'A **letter of inquiry** asks for information (prices, training, conditions); a **letter of application** asks for a job, an internship or a place on a course. Both are **formal**: your address and the date at the top right; the receiver’s title and address on the left; "Dear Sir," or "Dear Madam,"; a subject line ("Application for the post of sales assistant"); paragraphs: the post and where you saw it, your qualifications and qualities, your availability; "Yours faithfully," with your signature and full name.',
  ], 'letter-application', 'In an application, prove each quality with an example.',
  ['Money used to start a business is its:', ['capital', 'profit', 'loss', 'receipt'], 'Capital is the starting money.'],
  [['Entrepreneur', 'A person who starts and runs a business.'], ['Letter of application', 'A formal letter asking for a job or a place.'], ['Budget', 'A plan of income and spending.']],
  [
    { q: 'Write the middle paragraph of an application for a holiday job in a bookshop.', steps: ['Qualifications: "**I am a Form 3 student with good marks in English and Mathematics.**"', 'Qualities with proof: "I am reliable: I have managed my class’s savings club for a year without a single error."', 'Fit for the job: "I enjoy books and can help customers find what they need."'] },
  ]),

  // ---------- Conditionals and cause and effect ----------
  L('en-conditionals-3', 'en-f3-conditionals', '18.1', 'The zero and first conditionals', 12, ['Grammar'], [
    'The **zero conditional** states general truths and scientific facts: **If / When + present simple, present simple**. "If you **heat** water to 100 °C, it **boils**." "If people **burn** plastic, the air **becomes** toxic."',
    'The **first conditional** describes a real possibility in the future: **If + present simple, will + base form**. "If we **plant** trees on the slope, the soil **will stay** in place." "If it **rains** heavily tonight, the gutters **will overflow**." Never put will after "if": "If it will rain" is wrong.',
    '**Unless** means "if … not": "Unless we clear the gutters, the street will flood" (= If we do not clear them). The if-clause can come first (with a comma) or second (no comma): "The street will flood if we do not clear the gutters."',
  ], 'en3-conditionals', 'No will after if: the future goes in the main clause.',
  ['"If you ___ ice, it melts."', ['heat', 'will heat', 'heated', 'are heating'], 'Zero conditional: present + present.'],
  [['Zero conditional', 'If + present, present: for general truths.'], ['First conditional', 'If + present, will + base form: for real future possibilities.']],
  [
    { q: 'Complete with the correct form: (a) "If plants (not get) water, they (die)." (b) "If our club (collect) the plastic, the stream (be) cleaner next month."', steps: ['(a) a general truth → zero conditional: **do not get**, **die**', '(b) a real future possibility → first conditional: **collects**, **will be**'] },
  ]),

  L('en-causeeffect-3', 'en-f3-conditionals', '18.2', 'Clauses of cause and effect; proposing environmental solutions', 12, ['Grammar', 'Writing'], [
    '**Cause** (why): because, since, as + clause; because of, due to, owing to + noun. "The stream is polluted **because** people dump rubbish in it." "The road was closed **due to** the landslide." **Effect** (result): so + clause; therefore, as a result, consequently + new sentence (with a comma): "The trees were cut. **As a result**, the slope collapsed." Also "so … that": "The smoke was **so** thick **that** we could not see."',
    'Proposing **local environmental solutions**: identify the problem and its causes, suggest practical actions (clean-up campaigns, bins, tree planting, protecting water sources), and say who should act and what the result will be (using the first conditional). Structure: problem → causes → solutions → expected effects.',
  ], 'en3-cause-effect', 'Because of + noun; because + subject and verb.',
  ['"The farm flooded ___ the heavy rain."', ['because of', 'because', 'so', 'therefore'], 'A noun phrase follows "because of".'],
  [['Cause', 'The reason why something happens.'], ['Effect', 'The result of a cause.']],
  [
    { q: 'Join to show cause and effect: (a) "People throw plastic in the gutters. The gutters block." (b) "The river dried up. The farmers could not water their crops."', steps: ['(a) **"The gutters block because people throw plastic in them."**', '(b) **"The river dried up. As a result, the farmers could not water their crops."**'] },
  ]),

  // ---------- Subject-verb agreement ----------
  L('en-agreement-3', 'en-f3-agreement', '21.1', 'Subject-verb agreement', 12, ['Grammar'], [
    'The verb must **agree** with its subject in number: a singular subject takes a singular verb ("The nurse **works**"), a plural subject a plural verb ("The nurses **work**"). Find the **real subject**, ignoring words between it and the verb: "The box of masks **is** on the table" (box is singular). "The leaders of the club **are** here."',
    'Special cases:\n- **each, every, everyone, nobody, either, neither** take a singular verb: "Everyone **has** a role." "Neither of the boys **is** absent."\n- two subjects joined by **and** are plural: "Ali and Bih **are** ready."\n- with **or / either … or / neither … nor**, the verb agrees with the nearer subject: "Either the teacher or the students **are** wrong."\n- uncountable nouns are singular: "The information **is** correct." "Hygiene **is** important."\n- "There is / there are" agrees with the noun after it.',
  ], 'en3-agreement', 'Cross out the words between the subject and the verb, then check agreement.',
  ['"The list of health rules ___ on the notice board."', ['is', 'are', 'were', 'have'], 'The real subject is "list" (singular).'],
  [['Subject-verb agreement', 'Matching the verb to the number of its subject.']],
  [
    { q: 'Correct the agreement errors: "Each of the students have a mask. The news are good, and the doctor and the nurse is coming."', steps: ['"Each … has" (each is singular)', '"The news **is** good" (news is uncountable)', '"the doctor and the nurse **are** coming" (two subjects with and)'] },
  ]),

  L('en-digital-3', 'en-f3-agreement', '21.2', 'Health rules, digital hygiene and the impact of social media', 12, ['Vocabulary', 'Reading', 'Speaking'], [
    '**Health rules** protect the school community: wash hands with soap, keep toilets clean, cover your mouth when coughing, drink safe water, eat a balanced diet, sleep enough, exercise, and report illness. They are written with must, should and imperatives.',
    '**Digital hygiene** means healthy, safe habits online: strong passwords kept secret, privacy settings, updating apps, not opening unknown links, checking facts before sharing, limiting screen time, and switching off at night. **Social media** connects people, spreads useful information and helps small businesses, but it can also spread **fake news**, enable **cyberbullying**, waste study time and harm sleep and mental health.',
    'In a discussion on the impact of social media, give both sides with examples, then a balanced conclusion: "Used wisely, social media is a tool; used carelessly, it is a trap."',
  ], 'en3-digital-hygiene', 'Ask before you post: is it true, kind and necessary?',
  ['Which is a habit of good digital hygiene?', ['keeping your password secret', 'clicking every link', 'sharing news without checking', 'using one password everywhere and telling friends'], 'Protect your accounts.'],
  [['Digital hygiene', 'Safe and healthy habits when using phones and the internet.'], ['Cyberbullying', 'Bullying through phones or the internet.']],
  [
    { q: 'Give one advantage and one disadvantage of social media, with examples.', steps: ['Advantage: **it spreads useful information quickly**, for example vaccination dates shared by a health centre.', 'Disadvantage: **it spreads fake news**, for example false rumours about exam leaks.'] },
  ]),

  // ---------- National symbols and living together ----------
  L('en-livingtogether-3', 'en-f3-symbols', '26.1', 'National symbols and living together', 12, ['Vocabulary', 'Reading'], [
    'Respecting **national symbols** is a civic duty: the **flag** (green, red and yellow vertical bands with a yellow star), the **national anthem**, the **coat of arms**, the **seal** and the motto **"Peace – Work – Fatherland"**. Citizens stand during the anthem, never deface the flag, and protect public property.',
    '**Living together** (in French, **vivre-ensemble**) means peaceful coexistence among Cameroon’s many ethnic groups, regions, religions and its two official languages, English and French: tolerance, respect for differences, rejecting tribalism and hate speech, and working together for the common good. **Bilingualism** and **multiculturalism** are national values.',
    'Discussion phrases: "In my opinion…", "I agree because…", "I respect your view, but…", "We can all…". Hate speech online or in person damages living together; it should be refused and reported.',
  ], 'en3-living-together', 'Respect a different view even when you disagree with it.',
  ['Peaceful coexistence of different groups in one nation is called:', ['living together (vivre-ensemble)', 'tribalism', 'regionalism', 'segregation'], 'A national value.'],
  [['Living together', 'Peaceful coexistence and cooperation among different groups.'], ['Bilingualism', 'The use of two languages; in Cameroon, English and French.'], ['Hate speech', 'Words that attack people because of their group.']],
  [
    { q: 'Write two sentences encouraging living together in a school with students from many regions.', steps: ['"**Our school is a small Cameroon: we come from every region and speak many languages.**"', '"**Let us greet each other, work in mixed groups and refuse any word that insults another tribe.**"'] },
  ]),

  L('en-institutions-3', 'en-f3-symbols', '26.2', 'Public institutions and reporting civic injustices', 12, ['Vocabulary', 'Writing'], [
    'Words for **public institutions**: the Presidency, the Government (ministers), the National Assembly and the Senate (Parliament, which makes laws), the courts (the judiciary), councils and mayors (local government), regional councils, the police and the gendarmerie, public hospitals and schools. Citizens can bring problems to the right institution: a broken road to the council, a crime to the police, a court case to a lawyer or judge.',
    'Reporting a **civic injustice** (an unfair act against citizens, such as a demand for a bribe, an unpaid salary, or a public service refused): write a formal letter or complaint to the competent authority with the facts (what, where, when, who), the evidence, and a polite request for action. The **passive voice** is useful for facts when the doer is unknown or less important: "The water point **was broken** last month and **has not been repaired**."',
  ], 'letter-formal', 'In a complaint, state facts calmly; avoid insults.',
  ['The body that makes laws in Cameroon is:', ['Parliament (the National Assembly and the Senate)', 'the police', 'the council only', 'the hospital'], 'The legislature.'],
  [['Public institution', 'An official body that serves the public.'], ['Civic injustice', 'An unfair act against citizens by those who should serve them.']],
  [
    { q: 'Rewrite in the passive for a complaint letter: "Someone stole the school’s solar panels last week. Nobody has replaced them."', steps: ['"**The school’s solar panels were stolen last week.**"', '"**They have not been replaced.**"'] },
  ]),

  // ---------- Revision ----------
  L('en-revision-3', 'en-f3-gce', '31.1', 'Revision of the year’s grammar', 14, ['Grammar', 'Revision'], [
    'Form 3 grammar to revise: tenses (present simple and continuous, past simple, future with will, shall and going to); modals of ability, obligation and suggestion; zero and first conditionals; reported speech and reported questions; the active and passive voice; subject-verb agreement; articles including the zero article; comparatives and superlatives; relative, demonstrative, indefinite and reflexive pronouns; quantifiers; gerunds; linking words of purpose, contrast, cause and effect; sentence patterns; word formation by affixation.',
    'Revision method: for each point, write the rule in one line, two correct examples and one common mistake. Then practise sentence transformations: change tense, voice, direct to reported speech, and join sentences with linking words.',
  ], 'en3-revision-grammar', 'One rule, two examples, one common mistake: a revision card for each point.',
  ['"If it ___ tomorrow, the match will be cancelled."', ['rains', 'will rain', 'rained', 'is raining tomorrow will'], 'First conditional: if + present.'],
  [['Sentence transformation', 'Rewriting a sentence in a new form without changing its meaning.']],
  [
    { q: 'Transform: (a) "They will repair the road." (passive) (b) "‘I am tired,’ she said." (reported speech)', steps: ['(a) **"The road will be repaired."**', '(b) **"She said that she was tired."**'] },
  ]),

  L('en-gcepractice-3', 'en-f3-gce', '31.2', 'Answering comprehension, summary and composition tasks', 14, ['Reading', 'Writing', 'Revision'], [
    '**Comprehension**: read the passage twice; for each question, find the lines that answer it; answer in your own words unless asked to quote; give the meaning of words as used in the passage (context); for true/false questions, justify with evidence.',
    '**Summary**: underline the main points, leave out examples and repetitions, write in your own words in full sentences, and keep within the word limit.',
    '**Composition** (letters, narratives, arguments of about 150 to 180 words in Form 3): plan before writing; follow the right layout for letters; use paragraphs with topic sentences; vary sentences and vocabulary; check tenses, agreement and spelling at the end. Manage your time: share it according to the marks of each section.',
  ], 'en3-answering', 'Spend a few minutes planning: it saves marks and time.',
  ['In a comprehension answer, "in your own words" means:', ['explain the idea without copying the passage', 'copy the sentence exactly', 'write in French', 'leave it blank'], 'Show you understood.'],
  [['Comprehension', 'Understanding a passage and answering questions on it.'], ['Composition', 'A piece of extended writing such as a letter or essay.']],
  [
    { q: 'Plan a 150-word argumentative composition: "Mobile phones should be allowed in school."', steps: ['Introduction: state your position (for, with limits).', 'Body 1: research and learning apps. Body 2: contacting parents in emergencies.', 'Counter-point: distraction, answered by strict rules for use.', 'Conclusion: allow phones under clear school rules.'] },
  ]),
];
