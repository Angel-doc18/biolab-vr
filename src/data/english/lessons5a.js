// English Language lessons for Form 5, term 1: family dynamics, social life
// and identity; economic life, careers and digital commerce. Original text
// written for this app. **double asterisks** mark key terms; `examples` are
// worked examples. Phonetic symbols follow the International Phonetic Alphabet.

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
  // ---------- Associations and conflict ----------
  L('en-relative-5', 'en-f5-associations', '1.1', 'Defining and non-defining relative clauses', 13, ['Grammar'], [
    'A **defining relative clause** identifies which person or thing we mean; without it the sentence is incomplete or means something else. It has **no commas**, and "that" may replace who or which: "The association **that meets on Sundays** helps widows." When the relative pronoun is the object, it can be left out: "The elder (whom/that) we consulted was fair."',
    'A **non-defining relative clause** adds extra information about a noun already identified. It is placed **between commas**, it can never begin with "that", and the relative pronoun cannot be left out: "Mr Tanyi, **who chairs our njangi**, settled the quarrel." "Buea, **which is the capital of the South-West Region**, lies at the foot of Mount Cameroon."',
    'Other relative words: **whose** (possession), **where** (place: "the hall where we meet"), **when** (time: "the day when the dispute ended") and **why** (reason: "the reason why they quarrelled"). In formal English a preposition can come before whom or which: "the committee **to which** we reported".',
  ], 'relative-clauses', 'If you can remove the clause and the sentence still identifies the person or thing, use commas.',
  ['Which sentence is punctuated correctly?', ['My mother, who is a nurse, works in Limbe.', 'My mother who is a nurse, works in Limbe.', 'My mother, that is a nurse, works in Limbe.', 'My mother who is a nurse works, in Limbe.'], 'I have only one mother, so the clause is non-defining and needs two commas.'],
  [['Defining relative clause', 'A clause that identifies which person or thing is meant; it has no commas.'], ['Non-defining relative clause', 'A clause that adds extra information about a noun already identified; it is placed between commas.']],
  [
    { q: 'Join with a relative clause and decide on the commas: (a) "The youths repaired the bridge. They belong to our association." (b) "Kumba is a busy town. It is known for its market."', steps: ['(a) The clause tells us which youths: defining, no commas. **"The youths who belong to our association repaired the bridge."**', '(b) Kumba is already identified: non-defining, commas, no "that". **"Kumba, which is known for its market, is a busy town."**'] },
  ]),

  L('en-associations-5', 'en-f5-associations', '1.2', 'Civic associations and peer mediation; listening to debates', 12, ['Vocabulary', 'Listening'], [
    'Community life in Cameroon is organised through **associations**: njangis (savings groups), cultural and development associations, youth clubs, parent–teacher associations (PTAs), cooperatives and religious groups. Vocabulary: member, membership fee, executive, chairperson, secretary, treasurer, minutes (the written record of a meeting), agenda, by-laws, quorum, motion, consensus.',
    'Disputes in schools and communities can be settled by **peer mediation** (trained students help classmates resolve conflicts), **arbitration** (a neutral person or panel hears both sides and decides), negotiation and dialogue. Useful words: grievance, impartial, neutral, settlement, reconciliation, verdict, appeal. Social networks (online and offline) can spread both cooperation and conflict.',
    'When **listening to a debate**, note each speaker’s position, main arguments and evidence, and how the other side answers. Listen for signpost words (firstly, however, in conclusion) and for the final decision or vote.',
  ], 'relative-clauses', 'In a listening test, write the speaker’s side before the arguments.',
  ['The written record of what was said and decided at a meeting is the:', ['minutes', 'agenda', 'quorum', 'by-laws'], 'The agenda is the list of topics planned before the meeting.'],
  [['Association', 'A group of people organised for a shared purpose.'], ['Arbitration', 'Settling a dispute by a neutral person or panel who decides.'], ['Quorum', 'The smallest number of members needed for a meeting to make valid decisions.'], ['Impartial', 'Not favouring either side.']],
  [
    { q: 'Note-take this extract: "The proposer argued that land disputes should be settled by the chief, because he knows the history of every family. The opposer replied that a chief may be related to one side, so a neutral court is fairer."', steps: ['Proposer: **disputes should go to the chief; he knows family history**.', 'Opposer: **a neutral court is fairer; the chief may be related to one side**.'] },
  ]),

  L('en-listintonation-5', 'en-f5-associations', '1.3', 'Speech work: intonation in lists, choices and compound sentences', 10, ['Speech work'], [
    'In a **list**, the voice usually **rises** on each item to show that more is coming, and **falls** on the last item to show that the list is complete: "We need rice ↗, oil ↗, salt ↗ and sugar ↘."',
    'In an **alternative question** with a closed choice, the voice rises on the first option and falls on the last: "Shall we meet on Saturday ↗ or Sunday ↘?" If the voice rises at the end ("tea or coffee ↗?"), it becomes a yes/no question meaning "Would you like something to drink?"',
    'In **compound sentences** the first clause often ends with a slight rise, and the last clause falls: "We cleaned the hall ↗, and the elders arranged the chairs ↘." This helps the listener follow longer sentences.',
  ], 'intonation', 'A rise says "more is coming"; a fall says "I have finished".',
  ['In "Do you want rice or yams ↘?" with a fall on "yams", the speaker:', ['Offers a choice between the two', 'Asks if you want any food at all', 'Gives an order', 'Is angry'], 'A final fall closes the choice.'],
  [['Alternative question', 'A question that offers a choice between options.'], ['Tone group', 'A stretch of speech with one main change of pitch.']],
  [
    { q: 'Mark the intonation: "Bring your ID card, your receipt and a pen."', steps: ['Each item before the last rises: **ID card ↗, receipt ↗**.', 'The last item falls: **pen ↘**.'] },
  ]),

  // ---------- Identity and migration ----------
  L('en-pastperfect-5', 'en-f5-identity', '2.1', 'The past perfect and the simple past', 12, ['Grammar'], [
    'The **past perfect** (had + past participle) shows that one past action happened **before** another past action or time: "When we reached the village, the ceremony **had** already **begun**." The later action takes the simple past.',
    'It is common with **when, after, before, by the time, already, never … before** and in reported speech: "By 2010 most of his age-mates **had moved** to Douala." "She **had never left** her village before she came to Yaoundé."',
    'If the order of events is already clear from "before" or "after", the simple past is also acceptable: "After he finished school, he left for Douala." But with "when", the tense changes the meaning: "When I arrived, she **left**" (she left after I arrived); "When I arrived, she **had left**" (she left before I arrived).',
  ], 'past-perfect-timeline', 'Ask: which happened first? That action takes "had".',
  ['"By the time the police arrived, the thieves ___."', ['had escaped', 'escaped already tomorrow', 'have escaped', 'escape'], 'The escape happened before the police arrived.'],
  [['Past perfect', 'had + past participle, for an action completed before another past action.']],
  [
    { q: 'Combine into one sentence using the past perfect: "He sold his farm. Then he moved to the city."', steps: ['The sale happened first.', '**"He had sold his farm before he moved to the city."** or **"After he had sold his farm, he moved to the city."**'] },
  ]),

  L('en-migration-5', 'en-f5-identity', '2.2', 'Heritage, migration and peer pressure; analysing articles', 12, ['Vocabulary', 'Reading'], [
    'Vocabulary: **heritage** (traditions, monuments and values handed down), culture, custom, identity, mother tongue, diaspora, **migration**, migrant, rural exodus (mass movement from villages), urbanisation, emigrate (leave one’s country), immigrate (come into a country), integration, assimilation, **peer pressure**, conformity, role model.',
    'Articles on **urban migration** usually discuss push factors (lack of jobs, schools and electricity in villages, insecurity), pull factors (jobs, education, services in towns), effects on villages (ageing population, abandoned farms) and on towns (slums, unemployment, pressure on water and transport), and solutions.',
    'To **analyse an article**: identify the writer’s main claim, the evidence used (facts, figures, examples), the tone (neutral, critical, hopeful), and whether opinions are supported. Distinguish fact ("Douala’s population has grown fast") from opinion ("Young people are foolish to leave the village").',
  ], 'past-perfect-timeline', 'Ask of every claim: is it a fact, or an opinion? What evidence supports it?',
  ['A person who leaves his or her own country to live in another is said to:', ['emigrate', 'immigrate', 'integrate', 'migrate within the country'], 'Emigrate: go out of; immigrate: come into.'],
  [['Heritage', 'Traditions, monuments and values handed down from the past.'], ['Rural exodus', 'A mass movement of people from villages to towns.'], ['Peer pressure', 'Influence from people of one’s own age to behave as they do.'], ['Fact', 'A statement that can be checked and proved.'], ['Opinion', 'A statement of what someone thinks or believes.']],
  [
    { q: 'Fact or opinion? (a) "Many young people leave villages to look for work." (b) "Village life is boring."', steps: ['(a) It can be checked with surveys: **a fact**.', '(b) It is a personal judgement: **an opinion**.'] },
  ]),

  L('en-longshort-5', 'en-f5-identity', '2.3', 'Speech work: the vowels /ʊ/ and /uː/', 10, ['Speech work'], [
    'The **short vowel /ʊ/** (as in "book") is short and relaxed with lightly rounded lips. The **long vowel /uː/** (as in "food") is held longer with the lips more rounded and pushed forward.',
    'Minimal pairs:\n- full /fʊl/ – fool /fuːl/\n- pull /pʊl/ – pool /puːl/\n- look /lʊk/ – Luke /luːk/\n- should /ʃʊd/ – shoed /ʃuːd/.',
    'Spelling is a poor guide: "oo" is /ʊ/ in book, good, foot, wood, but /uː/ in food, school, moon, pool; /uː/ is also spelt u-e (rule), ue (blue), ew (new), ou (soup) and o (do, move). Learn each word with its sound. The same long–short contrast appears in /ɒ/ (cot) and /ɔː/ (caught).',
  ], 'vowels-u', 'Round and push the lips forward for the long /uː/.',
  ['Which word has the short vowel /ʊ/?', ['wood', 'moon', 'soup', 'blue'], 'The others have long /uː/.'],
  [['Long vowel', 'A vowel sound held longer, such as /uː/ and /iː/.'], ['Short vowel', 'A shorter, more relaxed vowel, such as /ʊ/ and /ɪ/.']],
  [
    { q: 'Sort these words by their vowel: put, rule, cook, school, could, new.', steps: ['/ʊ/: **put, cook, could**.', '/uː/: **rule, school, new**.'] },
  ]),

  // ---------- Speech writing ----------
  L('en-persuasive-5', 'en-f5-speech', '3.1', 'Rhetorical devices and persuasive language', 12, ['Writing', 'Vocabulary'], [
    'Speeches use **rhetorical devices** to hold attention and persuade:\n- **repetition** and the **rule of three**: "We need jobs, we need schools, we need peace."\n- **rhetorical questions**: "Can a nation grow if its youth are idle?"\n- **direct address**: "You, the youth of this nation…"\n- **inclusive pronouns**: "we", "our", "together"\n- **contrast**: "not by words, but by deeds".',
    '**Transitional devices** guide listeners: firstly, secondly, furthermore, moreover, on the other hand, however, finally, in conclusion. In a speech they matter even more than in an essay, because listeners cannot read back.',
    '**Emotive and persuasive adjectives** create feeling and urgency: vital, urgent, shameful, heartbreaking, remarkable, unacceptable, inspiring, priceless. Use them with evidence; too many sound exaggerated.',
  ], 'speech-layout', 'Use the rule of three: three examples stick in the memory.',
  ['"Can a nation grow if its youth are idle?" is a:', ['rhetorical question', 'command', 'simile', 'request for information'], 'It makes listeners think; no answer is expected.'],
  [['Rhetorical device', 'A technique used to persuade or impress an audience.'], ['Rhetorical question', 'A question asked for effect, not for an answer.'], ['Emotive language', 'Words chosen to stir the feelings of the audience.']],
  [
    { q: 'Rewrite to make it persuasive: "Young people should take part in community work."', steps: ['Add direct address, inclusive pronouns and the rule of three.', '**"Fellow youths, our communities need our hands, our ideas and our energy. Let us roll up our sleeves and build the future we want."**'] },
  ]),

  L('en-speechwriting-5', 'en-f5-speech', '3.2', 'Writing a formal speech', 14, ['Writing'], [
    'Layout of a **formal speech**:\n- **protocol**: address the audience in order of importance: "The Chairman of the occasion, the Divisional Officer, distinguished guests, fellow youths, ladies and gentlemen,"\n- **introduction**: greet, introduce yourself if needed, and state the purpose: "I am honoured to speak to you today on…"\n- **body**: two to four points in paragraphs, each with explanation and examples, linked by transitions\n- **conclusion**: sum up, make an appeal or call to action\n- **closing**: "Thank you for your kind attention." Some speeches end with a slogan or wish: "Long live the youth! Long live Cameroon!"',
    'Style: the first and second persons (I, we, you), a respectful but lively tone, short sentences mixed with longer ones, and rhetorical devices. A speech has no address, date or signature.',
    'Before writing, note the **occasion** (a youth summit, a prize-giving day, a farewell), the **audience** and the **purpose** (to inform, to persuade, to thank, to welcome).',
  ], 'speech-layout', 'Check: protocol, introduction, body, conclusion, thanks.',
  ['A speech is different from a letter because it:', ['Begins with protocol addressed to an audience and ends with thanks', 'Has an address and a date', 'Ends with "Yours faithfully"', 'Has a subject line'], 'It is written to be delivered.'],
  [['Protocol', 'The formal greeting of the important people present, in order of rank.'], ['Call to action', 'An appeal to the audience to do something.']],
  [
    { q: 'Write the protocol and opening sentence of a speech by the head boy at a youth summit on civic integration.', steps: ['Protocol: **"The Chairman of the occasion, the Mayor of Buea, distinguished guests, fellow youths, ladies and gentlemen,"**', 'Purpose: **"It is a great honour to speak to you today about how we, the youth, can help to build a united and peaceful nation."**'] },
  ]),

  // ---------- Entrepreneurship ----------
  L('en-modals2-5', 'en-f5-enterprise', '4.1', 'Modals of obligation and probability', 12, ['Grammar'], [
    'Modals of **obligation and advice**:\n- **must**: strong obligation from the speaker ("I must pay my workers on time.")\n- **have to**: obligation from rules or circumstances ("Traders have to pay council taxes.")\n- **should / ought to**: advice or what is right ("You ought to keep receipts.")\n- **must not**: prohibition; **don’t have to / needn’t**: no obligation.',
    'Modals of **probability** show how sure we are:\n- **must**: logical certainty ("Sales are high; the new advert must be working.")\n- **should**: expected ("The goods should arrive tomorrow.")\n- **may / might / could**: possible ("Prices may rise next month.")\n- **can’t / couldn’t**: almost impossible ("He can’t be bankrupt; he just bought a truck.").',
    'For the past: must have + past participle (certain), might have + past participle (possible), should have + past participle (it was right but did not happen): "You **should have saved** some money."',
  ], 'modals-meaning', 'The same modal can show obligation or probability: read the context.',
  ['"The lights are off. They must have gone home." This expresses:', ['A confident guess about the past', 'An obligation in the past', 'Permission', 'A threat'], '"Must have" + past participle shows a logical conclusion.'],
  [['Obligation', 'Something that must be done.'], ['Logical conclusion', 'A confident deduction from evidence.']],
  [
    { q: 'Choose and explain: (a) "You (must / might) register your business; the law requires it." (b) "The price (must / might) fall if many traders sell maize."', steps: ['(a) A legal requirement: **must** (obligation).', '(b) Only a possibility: **might** (probability).'] },
  ]),

  L('en-finance-5', 'en-f5-enterprise', '4.2', 'Business vocabulary; interpreting charts of returns', 12, ['Vocabulary', 'Reading'], [
    'Vocabulary of enterprise: entrepreneur, start-up, business plan, capital, loan, interest, collateral (property pledged for a loan), investment, **return on investment**, revenue, expenses, profit margin, cash flow, break-even, shareholder, dividend, market research, competitor, brand, credit union, microfinance.',
    'To **interpret a chart** of business results: read the title, axes and units; describe the overall trend (rose sharply, increased steadily, fluctuated, levelled off, declined); give the highest and lowest values with figures; compare (twice as much, a third of); and suggest a reason only if the data support it.',
    'Language of change: rise, increase, grow, climb; fall, decrease, drop, decline; peak, reach a high of; steadily, sharply, slightly, dramatically.',
  ], 'modals-meaning', 'Quote figures from the chart: "rose from 2 million to 5 million FCFA".',
  ['A property pledged to a bank as security for a loan is:', ['collateral', 'a dividend', 'revenue', 'a brand'], 'The bank can take it if the loan is not repaid.'],
  [['Entrepreneur', 'A person who starts and runs a business, taking financial risks.'], ['Return on investment', 'The gain from an investment compared with its cost.'], ['Cash flow', 'The movement of money into and out of a business.']],
  [
    { q: 'A chart shows a cooperative’s profit: 2022: 1.2 million FCFA; 2023: 1.8 million; 2024: 3.6 million. Describe it.', steps: ['Trend: **profit rose every year**.', 'Figures and comparison: **it rose by half from 2022 to 2023, then doubled to 3.6 million FCFA in 2024, its highest level.**'] },
  ]),

  L('en-finstress-5', 'en-f5-enterprise', '4.3', 'Speech work: stress in long financial words', 10, ['Speech work'], [
    'Many financial words are long, and their stress follows patterns:\n- -tion: in-FLA-tion, tran-SAC-tion, in-ves-ti-GA-tion\n- -ic, -ical: e-co-NO-mic, e-co-NO-mi-cal\n- -ity: pro-fit-a-BI-li-ty, li-a-BI-li-ty\n- -ment: in-VEST-ment, a-GREE-ment (stress stays on the verb).',
    'Some words change stress between noun and verb: an IN-crease (noun) – to in-CREASE (verb); a RE-cord – to re-CORD; an EX-port – to ex-PORT; an IM-port – to im-PORT.',
    'Stress the right syllable and weaken the others: in "accountant" /əˈkaʊntənt/, the first and last vowels are the weak /ə/ (schwa).',
  ], 'stress-patterns', 'Noun on the first syllable, verb on the second: an EXport, to exPORT.',
  ['In the verb "to export", the stress falls on:', ['ex-PORT', 'EX-port', 'both syllables', 'neither syllable'], 'The noun is EX-port; the verb is ex-PORT.'],
  [['Schwa', 'The weak, unstressed vowel /ə/, as in the first sound of "about".']],
  [
    { q: 'Mark the stress: profitability, transaction, increase (verb), record (noun).', steps: ['pro-fit-a-**BI**-li-ty', 'tran-**SAC**-tion', 'in-**CREASE**', '**RE**-cord'] },
  ]),

  // ---------- Job applications ----------
  L('en-conditionals12-5', 'en-f5-jobs', '5.1', 'Conditionals of Types I and II in context', 11, ['Grammar'], [
    '**Type I** (a real possibility): if + present simple, will/can/may + base form. "If you **apply** early, you **will have** a better chance." "If the interview **goes** well, they **may offer** you the post."',
    '**Type II** (an imagined or unlikely situation): if + past simple, would/could/might + base form. "If I **had** more experience, I **would apply** for the manager’s post." "If I **were** you, I **would rewrite** the CV." Use "were" for all persons in formal English.',
    'In formal letters, inversion is sometimes used: "**Should** you require further information, please contact me." (= If you should require…). "Unless" means "if not": "Unless you sign the form, it will not be accepted."',
  ], 'conditionals-all', 'Type I: likely. Type II: imagined. Never put "will" or "would" after "if".',
  ['"___ you require any further details, please do not hesitate to contact me."', ['Should', 'Would', 'Will', 'Had'], 'A formal inverted condition.'],
  [['Inversion', 'Putting the verb before the subject, as in "Should you need…".']],
  [
    { q: 'Complete: (a) "If I (get) the job, I (buy) my mother a phone." (b) "If I (be) the director, I (pay) interns."', steps: ['(a) A real possibility, Type I: **get … will buy**.', '(b) An imagined situation, Type II: **were … would pay**.'] },
  ]),

  L('en-application-5', 'en-f5-jobs', '5.2', 'The CV and the letter of application', 15, ['Writing', 'Vocabulary'], [
    'A **curriculum vitae (CV)** sets out, under clear headings: personal details (name, address, telephone, email); a short profile; education and qualifications (most recent first, with dates); work experience and voluntary work; skills (languages, computer skills); interests; and **referees** (two people, with permission, who can describe your character and work).',
    'A **letter of application** follows the formal letter layout: your address and the date, the employer’s title and address, "Dear Sir/Madam," a subject line ("Application for the post of sales assistant"), the body, "Yours faithfully," your signature and full name. If a CV is enclosed, write "Encl.: CV" at the bottom.',
    'The body has three or four paragraphs:\n- the post you are applying for and where you saw it ("advertised in Cameroon Tribune of 3 May 2026")\n- your relevant qualifications and skills\n- your experience and qualities, with examples\n- your availability for interview and a polite close.\nKeep it to one page, formal, positive and free of errors.',
  ], 'letter-application', 'Match every skill you mention to a duty in the advertisement.',
  ['In a CV, education is usually listed:', ['With the most recent qualification first', 'In alphabetical order', 'Without dates', 'Starting from nursery school only'], 'Employers look first at your latest level.'],
  [['Referee', 'A person who agrees to describe an applicant’s character and abilities.'], ['Covering letter', 'A letter sent with a CV that explains why the applicant suits the job.'], ['Enclosure', 'A document sent with a letter, shown as "Encl."']],
  [
    { q: 'Write the first paragraph of an application for "Sales assistant, Bafoussam supermarket", advertised in a newspaper.', steps: ['State the post and the source of the advertisement.', '**"I wish to apply for the post of sales assistant advertised in Cameroon Tribune of 3 May 2026. I have just completed my GCE Ordinary Level and I am keen to start a career in retail."**'] },
  ]),

  // ---------- Digital commerce ----------
  L('en-perfectcont-5', 'en-f5-ecommerce', '6.1', 'The present perfect continuous', 11, ['Grammar'], [
    'The **present perfect continuous** (have/has been + -ing) describes an activity that started in the past and is still going on, or has just stopped with a visible result: "She **has been selling** phones online **for** two years." "Your eyes are red; you **have been staring** at the screen."',
    'It emphasises the **duration** of the activity, often with for, since and how long: "How long **have you been using** mobile money?"',
    'Compare with the present perfect simple, which emphasises the **result** or the number: "I **have been writing** emails all morning" (the activity) vs "I **have written** ten emails" (the result). Verbs of state (know, own, believe) are not used in continuous forms: "I have known her for years", not "I have been knowing".',
  ], 'perfect-continuous', 'Duration: have been + -ing. Result or number: have + past participle.',
  ['"I ___ this app since January."', ['have been using', 'am using', 'use', 'have been use'], 'An activity from the past continuing now, with "since".'],
  [['Present perfect continuous', 'have/has been + -ing, for an activity continuing up to now.'], ['Stative verb', 'A verb describing a state, such as know or own, not normally used in continuous forms.']],
  [
    { q: 'Choose the better form: (a) "She (has sold / has been selling) twenty phones this week." (b) "We (have waited / have been waiting) for the delivery since Monday."', steps: ['(a) A number, a result: **has sold**.', '(b) The duration of an activity still going on: **have been waiting**.'] },
  ]),

  L('en-ecommerce-5', 'en-f5-ecommerce', '6.2', 'Mobile money, e-commerce and online safety', 12, ['Vocabulary', 'Reading'], [
    'Vocabulary: **e-commerce**, online shop, cart, checkout, delivery, **mobile money**, transfer, withdrawal, transaction, transaction fee, PIN, OTP (one-time password), **two-factor authentication**, encryption, **phishing**, scam, fraud, identity theft, verified account, customer service.',
    'An **instruction brochure** on account security usually: explains a danger, gives numbered steps ("1. Open Settings. 2. Tap Security. 3. Turn on two-step verification."), and warns: "Never share your PIN or the code you receive by SMS, even with someone who says they work for the operator."',
    'Some words used in money and technology contain **silent letters**: **k**nowledge, **w**rite (a review), recei**p**t, de**b**t, desi**g**n, colum**n**. Say them correctly: /ˈnɒlɪdʒ/, /raɪt/, /rɪˈsiːt/, /det/, /dɪˈzaɪn/, /ˈkɒləm/.',
  ], 'perfect-continuous', 'Nobody genuine will ever ask for your PIN.',
  ['A code sent to your phone that can be used only once is an:', ['OTP (one-time password)', 'IP address', 'URL', 'app'], 'It is used for two-factor authentication.'],
  [['Mobile money', 'A service for sending, receiving and storing money with a mobile phone.'], ['Two-factor authentication', 'A login that needs a password and a second proof, such as a code.'], ['Phishing', 'Fake messages that try to steal passwords or money.']],
  [
    { q: 'Read: "Dear customer, your account will be blocked today. Send your PIN to 6xx xxx xxx to keep it open." List three signs that it is a scam.', steps: ['It creates **false urgency** ("blocked today").', 'It **asks for your PIN**, which genuine services never do.', 'It comes from an **unknown private number** and does not use your name.'] },
  ]),

  // ---------- Formal register ----------
  L('en-register-5', 'en-f5-directed', '7.1', 'Register and adverbs of degree and qualification', 12, ['Grammar', 'Writing'], [
    '**Register** is the level of formality of language. **Formal register** is used in official letters, reports, speeches and essays: complete sentences, no contractions or slang, precise vocabulary, a polite and impersonal tone. **Informal register** is used with friends and family.',
    'Formal equivalents: get → obtain, receive; buy → purchase; ask → inquire, request; help → assist; enough → sufficient; tell → inform; need → require; start → commence; end → conclude; about → concerning, regarding.',
    '**Adverbs of degree and qualification** soften or strengthen a statement: slightly, fairly, rather, somewhat, quite, considerably, highly, extremely, entirely. They help to avoid over-strong claims in formal writing: "The proposal is **largely** acceptable, but the budget is **somewhat** high."',
  ], 'register-scale', 'Read your letter as if you were the director receiving it.',
  ['The formal word for "buy" is:', ['purchase', 'grab', 'pick up', 'get'], 'Formal register prefers precise, often longer words.'],
  [['Register', 'The level of formality of a piece of language.'], ['Formal register', 'Polite, complete and impersonal language for official purposes.'], ['Qualification', 'Softening or limiting a statement, as with "fairly" or "largely".']],
  [
    { q: 'Rewrite formally: "Hi, I wanna know if you’ve got any jobs going. Pls tell me soon."', steps: ['Remove slang and contractions; use formal words.', '**"I am writing to inquire whether there are any vacancies in your company. I would be grateful for an early reply."**'] },
  ]),

  L('en-businessletter-5', 'en-f5-directed', '7.2', 'Section A clinic: business letters and analytical descriptions', 14, ['Writing', 'Exam skills'], [
    'A **business inquiry letter** asks a company for information or a service. Content plan: introduce yourself or your organisation; state exactly what you want to know (prices, quantities, delivery, terms of payment); give any deadline; thank the reader. Typical faults the examiners note: wrong layout, missing subject line, the wrong closing, informal language and vague questions.',
    'An **analytical description** explains how something is organised or works: a market, a factory, a farm, a process. Plan it from the general to the particular: overview, then parts or stages, then how they connect, then a judgement. Use precise vocabulary and sequence words (first, then, meanwhile, finally) and the present simple.',
    'Clinic checklist for Section A: right format for the task, purpose clear in the first paragraph, one idea per paragraph, formal register where needed, varied sentences, and careful proofreading.',
  ], 'letter-formal', 'In an inquiry, number your questions so the reply can answer each one.',
  ['A business inquiry letter should state the questions:', ['Clearly and precisely, perhaps numbered', 'Vaguely, to be polite', 'At the end after the signature', 'Only in the subject line'], 'Clear questions get clear answers.'],
  [['Inquiry', 'A request for information.'], ['Analytical description', 'A description that explains how the parts of something work together.']],
  [
    { q: 'Write the questions paragraph of an inquiry to a furniture company about desks for a school.', steps: ['Ask precise, numbered questions.', '**"I would be grateful if you could tell me: 1. the unit price of a two-seater desk; 2. any discount for an order of 100 desks; 3. the time needed for delivery to Ebolowa; 4. your terms of payment."**'] },
  ]),
];
