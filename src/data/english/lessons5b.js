// English Language lessons for Form 5, terms 2 and 3: environment and public
// health; citizenship, integrity and youth protection; the digital age; and
// the GCE marathons, mock examinations and remediation. Original text written
// for this app. **double asterisks** mark key terms; `examples` are worked
// examples.

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
  // ---------- Climate and the passive ----------
  L('en-passive2-5', 'en-f5-climate', '8.1', 'The passive in all tenses and with modals', 13, ['Grammar'], [
    'The passive is always **be** (in the tense of the active verb) + **past participle**:\n- present simple: is/are cleaned; past simple: was/were cleaned\n- present continuous: is/are **being** cleaned; past continuous: was/were **being** cleaned\n- present perfect: has/have **been** cleaned; past perfect: had **been** cleaned\n- future: will **be** cleaned; modals: must/can/should **be** cleaned; perfect modals: should **have been** cleaned.',
    'Verbs with two objects can make two passives: "They gave the village a water tank" → "The village **was given** a water tank" or "A water tank **was given** to the village."',
    'Impersonal passives are common in reports: "It **is believed** that the forest is shrinking." "The rains **are expected** to start late." The passive is not possible with intransitive verbs (happen, arrive, die): "The accident happened", never "was happened".',
  ], 'passive-tenses', 'Keep the tense of the active verb; change only the form of "be".',
  ['The passive of "The council had closed the dump" is:', ['The dump had been closed by the council.', 'The dump was being closed by the council.', 'The dump has closed by the council.', 'The dump had closed the council.'], 'Past perfect passive: had been + past participle.'],
  [['Impersonal passive', 'A passive with "it", as in "It is believed that…".'], ['Intransitive verb', 'A verb with no object, which cannot be made passive.']],
  [
    { q: 'Change into the passive: (a) "They are clearing the gutters." (b) "We should recycle these bottles." (c) "People say that the river is polluted."', steps: ['(a) **"The gutters are being cleared."**', '(b) **"These bottles should be recycled."**', '(c) **"It is said that the river is polluted."** or **"The river is said to be polluted."**'] },
  ]),

  L('en-climate-5', 'en-f5-climate', '8.2', 'Climate vocabulary; listening to an environmental broadcast', 12, ['Vocabulary', 'Listening'], [
    'Vocabulary: **climate change**, **global warming**, greenhouse effect, greenhouse gases (carbon dioxide, methane), emissions, fossil fuels, carbon footprint, drought, flooding, rising sea levels, **soil erosion**, gullies, terracing, contour ploughing, desertification, **recycling**, upcycling, biodegradable, compost, renewable energy (solar, wind, hydro).',
    'In Cameroon, climate change shows in more irregular rains, longer dry seasons and the shrinking of Lake Chad in the north, and floods and landslides in towns such as Douala and Limbe. Plastic waste blocks drains and worsens flooding.',
    'Listening to a **radio broadcast**: before listening, predict the content from the title; while listening, note the main problem, causes, effects, figures and advice; after listening, check your notes against the questions and complete any gaps from memory.',
  ], 'passive-tenses', 'Note numbers and place names exactly: they are often asked.',
  ['Energy from the sun, wind and flowing water is:', ['renewable energy', 'fossil fuel', 'a greenhouse gas', 'nuclear waste'], 'It does not run out.'],
  [['Greenhouse effect', 'The warming of the Earth by gases that trap heat in the atmosphere.'], ['Carbon footprint', 'The amount of greenhouse gas a person or activity produces.'], ['Desertification', 'The spread of desert conditions into dry lands.']],
  [
    { q: 'Note-take: "Farmers in the Far North say the rains now start in July instead of May. Experts blame climate change and advise planting drought-resistant sorghum."', steps: ['Problem: **rains now start in July, not May (Far North)**.', 'Cause: **climate change**.', 'Advice: **plant drought-resistant sorghum**.'] },
  ]),

  L('en-sentencestress-5', 'en-f5-climate', '8.3', 'Speech work: sentence stress in warnings', 10, ['Speech work'], [
    'In a sentence, **content words** (nouns, main verbs, adjectives, adverbs, negatives such as not and never) are usually **stressed**; **function words** (articles, prepositions, pronouns, auxiliary verbs, conjunctions) are usually weak: "**Keep** the **children away** from the **river**."',
    'The speaker can put **contrastive stress** on any word to show what is important: "Do **NOT** burn the bush" (a strong warning); "Burn the **leaves**, not the trees."',
    'In long warnings of several clauses, each clause has its own main stress, with a short pause between clauses: "If the **river rises** | **leave** your **house** | and go to **higher ground**."',
  ], 'intonation', 'Stress the words that carry the message; weaken the small grammar words.',
  ['In "Never leave a fire unattended", which words carry stress?', ['never, leave, fire, unattended', 'a only', 'never only', 'every word equally'], 'Content words and negatives are stressed.'],
  [['Content word', 'A word that carries meaning: a noun, main verb, adjective or adverb.'], ['Function word', 'A grammar word such as an article, preposition or pronoun.'], ['Contrastive stress', 'Extra stress on a word to show contrast or importance.']],
  [
    { q: 'Mark the stressed words in "Do not drink water from the stream after heavy rain."', steps: ['Content words and the negative carry stress.', '"Do **NOT DRINK WATER** from the **STREAM** after **HEAVY RAIN**."'] },
  ]),

  // ---------- Public health and reported speech ----------
  L('en-reported2-5', 'en-f5-publichealth', '9.1', 'Reported speech: the full rules', 14, ['Grammar'], [
    'With a past reporting verb, **tenses move back**: present → past; present continuous → past continuous; present perfect and past simple → past perfect; will → would; can → could; may → might; must → had to. They do not move back when the reporting verb is in the present ("The doctor **says** you **are** well") or for facts still true ("She said that malaria **is** spread by mosquitoes").',
    '**Pronouns and possessives** change to fit the new speaker: "I will check **your** blood," the nurse told me → The nurse told me that **she** would check **my** blood. **Time and place words** change: now → then; today → that day; yesterday → the day before / the previous day; tomorrow → the next day / the following day; last week → the week before; ago → before; here → there; this → that.',
    '**Questions** become statements: wh-questions keep the question word ("When did the fever start?" → The doctor asked **when the fever had started**); yes/no questions take if or whether. **Commands and requests** take told/asked/advised + object + (not) to: "Don’t scratch the wound" → She told him **not to scratch** the wound.',
    'Choose precise **reporting verbs**: advised, warned, reminded, explained, insisted, suggested (+ -ing or that), promised, refused, admitted, denied.',
  ], 'reported-changes', 'Step 1: reporting verb. Step 2: tense back. Step 3: pronouns. Step 4: time and place.',
  ['"I saw the patient yesterday," the doctor said. In reported speech:', ['The doctor said that she had seen the patient the day before.', 'The doctor said that she saw the patient yesterday.', 'The doctor said that I had seen the patient the day before.', 'The doctor says she sees the patient yesterday.'], 'Past simple → past perfect; yesterday → the day before.'],
  [['Tense shift', 'Moving the verb one tense back in reported speech.'], ['Reporting verb', 'A verb that introduces reported speech, such as advised or warned.']],
  [
    { q: 'Report this dialogue in formal prose: Doctor: "How long have you had the cough?" Patient: "I have had it for two weeks." Doctor: "You must do a test tomorrow."', steps: ['**The doctor asked the patient how long he had had the cough.**', '**The patient replied that he had had it for two weeks.**', '**The doctor told him that he had to do a test the next day.**'] },
  ]),

  L('en-medical-5', 'en-f5-publichealth', '9.2', 'Medical vocabulary: procedures, tests and vaccination', 12, ['Vocabulary', 'Reading'], [
    'Vocabulary: consultation, symptom, diagnosis, **diagnostic test** (a rapid malaria test, an HIV test), prescription, dosage, side effect, injection, drip, ward, outpatient, inpatient, referral, **vaccination** or immunisation, booster dose, cold chain (keeping vaccines cool), epidemic, contact tracing, isolation, recovery, relapse.',
    'Public health measures in Cameroon include the Expanded Programme on Immunisation (EPI), which vaccinates children against diseases such as measles, polio and tetanus; free distribution of treated mosquito nets; and campaigns for HIV testing and treatment.',
    'Health texts often explain a disease under headings: causes, symptoms, transmission, treatment and prevention. When answering questions, find the right section first, then answer in your own words.',
  ], 'reported-changes', 'Learn health words in groups: causes, symptoms, treatment, prevention.',
  ['The amount of a medicine to be taken at a time is the:', ['dosage', 'prescription', 'symptom', 'ward'], 'The prescription states the dosage.'],
  [['Diagnosis', 'The identification of an illness from its signs and tests.'], ['Prescription', 'A doctor’s written order for medicine.'], ['Side effect', 'An unwanted effect of a medicine.'], ['Cold chain', 'The system that keeps vaccines cool from the factory to the patient.']],
  [
    { q: 'Read: "The patient tested positive for malaria. The doctor prescribed tablets twice a day for three days and warned that they might cause mild nausea." Find the diagnosis, the dosage and the side effect.', steps: ['Diagnosis: **malaria**.', 'Dosage: **tablets twice a day for three days**.', 'Side effect: **mild nausea**.'] },
  ]),

  // ---------- The expository essay ----------
  L('en-connectives-5', 'en-f5-expository', '10.1', 'Connectives of cause, result and sequence', 11, ['Writing', 'Grammar'], [
    '**Cause**: because (+ clause), because of / on account of / owing to / due to (+ noun): "Drains overflow **on account of** plastic waste."',
    '**Result**: so, therefore, consequently, as a result, thus, hence: "Plastic blocks the drains. **As a result**, streets flood."',
    '**Sequence**: first, to begin with, then, next, after that, subsequently, finally; **purpose**: so that, in order to: "Sort the waste **in order to** recycle it."',
    'Use a variety, place them correctly, and punctuate: "Consequently," at the start of a sentence; "; therefore," between two clauses.',
  ], 'connectives-logic', '"Because of" + noun; "because" + clause.',
  ['"The road was closed ___ the landslide."', ['owing to', 'because', 'so', 'therefore'], '"Owing to" is followed by a noun.'],
  [['Connective', 'A word or phrase that links ideas and shows how they are related.']],
  [
    { q: 'Join to show cause and result: "Many people throw rubbish into the gutters. Douala floods after heavy rain."', steps: ['**"Many people throw rubbish into the gutters; consequently, Douala floods after heavy rain."**', 'Or: **"Douala floods after heavy rain because of the rubbish that people throw into the gutters."**'] },
  ]),

  L('en-expository-5', 'en-f5-expository', '10.2', 'Writing an expository essay', 15, ['Writing'], [
    'An **expository essay** explains a topic clearly and objectively: how something works, how to do something, or the causes and effects of a problem. It uses facts, examples and logical order, not personal feelings.',
    'Plan for "How to manage waste pollution in an urban community":\n- introduction: define the problem and state what the essay will explain\n- body 1: reduce waste at the source (carry baskets, refuse plastic bags)\n- body 2: sort waste at home (food waste, plastics, metals, glass)\n- body 3: collection and disposal (council trucks, designated dumps, not gutters)\n- body 4: recycling and composting (plastic collectors, compost for gardens)\n- conclusion: sum up and stress everyone’s role.',
    'Style: the present simple, the third person or "we", topic sentences, connectives of sequence and result, and precise vocabulary. Avoid slang, exaggeration and long stories.',
  ], 'connectives-logic', 'Explain, do not argue: an expository essay informs.',
  ['An expository essay is written mainly to:', ['Explain and inform', 'Entertain with a story', 'Insult opponents', 'Describe one’s feelings'], 'It is objective and logical.'],
  [['Expository essay', 'An essay that explains a subject clearly and objectively.'], ['Objective', 'Based on facts rather than personal feelings.']],
  [
    { q: 'Write a topic sentence for the paragraph on sorting waste.', steps: ['State the main point of the paragraph clearly.', '**"The second step is to sort waste at home into food waste, plastics, metals and glass, so that each kind can be treated properly."**'] },
  ]),

  // ---------- Voting and determiners ----------
  L('en-determiners-5', 'en-f5-voting', '11.1', 'Quantitative determiners: each, every, either, neither, all', 12, ['Grammar'], [
    '**Each** and **every** go with singular nouns and singular verbs: "**Each** candidate **has** five minutes." "**Every** citizen **is** equal before the law." "Each" looks at members one by one (and can be used for two); "every" sees the whole group (three or more).',
    '**Either** (one or the other of two) and **neither** (not one and not the other) go with singular nouns: "You may vote at **either** station." "**Neither** answer **is** correct." With "of": "**Neither of** the candidates **was** present" (formal); "were" is common in speech. "Either … or" and "neither … nor" join two options: the verb agrees with the nearer subject.',
    '**All** goes with plural or uncountable nouns: "**All** voters **must** show an ID card." "**All** the money **was** counted." **Both** means the two together: "**Both** candidates spoke."',
  ], 'determiners', 'Each, every, either and neither take a singular verb.',
  ['"___ of my parents voted; they were both away."', ['Neither', 'Either', 'Both', 'All'], '"Neither" means not one and not the other.'],
  [['Determiner', 'A word before a noun that shows which or how many: each, every, all, some.'], ['Agreement', 'The verb matching its subject in number.']],
  [
    { q: 'Correct the errors: (a) "Every students have a voter’s card." (b) "Neither the chairman nor the members was ready."', steps: ['(a) "Every" + singular noun + singular verb: **"Every student has a voter’s card."**', '(b) The verb agrees with the nearer subject, "members": **"Neither the chairman nor the members were ready."**'] },
  ]),

  L('en-voting-5', 'en-f5-voting', '11.2', 'Voting and human rights; debating; open-ended questions', 12, ['Vocabulary', 'Speaking'], [
    'Vocabulary: constitution, citizen, **electorate**, **electoral register**, voter’s card, polling station, ballot paper, ballot box, candidate, campaign, manifesto, mandate (the authority given to elected leaders), turnout, **ELECAM** (Elections Cameroon, which organises elections), universal suffrage, human rights, the rule of law.',
    'In a **mock debate on civic roles**, prepare arguments, evidence and rebuttals; respect the chairperson and the time; use formal language ("I beg to differ…", "With all due respect…").',
    '**Open-ended questions** invite full answers: "What do you think young people can do to increase voter turnout?" "Why is voting a civic duty?" They are wh-questions, which usually **fall**; a gentle **rise** can sound friendlier and more inviting when encouraging someone to speak ("And what about you ↗?").',
  ], 'determiners', 'Ask open questions to get people talking; yes/no questions to check facts.',
  ['The percentage of registered voters who actually vote is the:', ['turnout', 'mandate', 'manifesto', 'register'], 'A low turnout weakens a mandate.'],
  [['Electorate', 'All the people entitled to vote.'], ['Manifesto', 'A public statement of a candidate’s or party’s plans.'], ['Mandate', 'The authority given to leaders by voters.'], ['Open-ended question', 'A question that cannot be answered with yes or no.']],
  [
    { q: 'Turn these into open-ended questions: (a) "Do you vote?" (b) "Is voting important?"', steps: ['(a) **"Why do you choose to vote, or not to vote?"**', '(b) **"In what ways can voting change a community?"**'] },
  ]),

  // ---------- Integrity and justice ----------
  L('en-complextags-5', 'en-f5-corruption', '12.1', 'Complex question tags', 12, ['Grammar'], [
    'Basic rule: a positive statement takes a negative tag, a negative statement a positive tag, using the same auxiliary or modal.',
    'Special cases:\n- negative words (never, nobody, nothing, hardly, seldom) make the statement negative: "He **never** takes bribes, **does he**?"\n- nobody, somebody, everybody, everyone take "they": "**Everyone** was honest, **weren’t they**?" "**Nobody** called, **did they**?"\n- nothing, something, everything take "it": "**Nothing** was stolen, **was it**?"\n- "there is/are" keeps "there": "**There is** a CONAC office in Yaoundé, **isn’t there**?"\n- "I am" → **aren’t I**; "Let’s" → **shall we**; imperatives → **will you / won’t you**: "Report it, **will you**?"\n- "used to" → **didn’t**: "He used to work here, **didn’t he**?"',
    'Intonation: a falling tag expects agreement; a rising tag really asks.',
  ], 'tags-special', 'Find the auxiliary, check whether the statement is negative, then match the pronoun.',
  ['"Nothing was taken from the office, ___?"', ['was it', 'wasn’t it', 'was they', 'didn’t it'], '"Nothing" is negative and takes "it".'],
  [['Question tag', 'A short question added to a statement to ask for confirmation.']],
  [
    { q: 'Add tags: (a) "Somebody reported the bribe, ___?" (b) "You hardly ever miss a meeting, ___?" (c) "Let’s tell the principal, ___?"', steps: ['(a) **"didn’t they?"**', '(b) "Hardly" is negative: **"do you?"**', '(c) **"shall we?"**'] },
  ]),

  L('en-integrity-5', 'en-f5-corruption', '12.2', 'Integrity, justice and anti-corruption; reading narratives of peace-building', 12, ['Vocabulary', 'Reading', 'Speech work'], [
    'Vocabulary: **integrity**, honesty, accountability, **transparency**, corruption, bribery, **embezzlement** (stealing funds one manages), fraud, nepotism (favouring relatives), tribalism, **xenophobia** (fear or hatred of foreigners), injustice, the judiciary, court of law, magistrate, prosecutor, defendant, verdict, appeal. **CONAC** (the National Anti-Corruption Commission) receives complaints about corruption.',
    'Narratives of **peace-building** show how communities overcome hatred or injustice through dialogue, truth-telling, forgiveness and fair institutions. When reading them, trace how the characters change and what lesson the writer wants readers to learn.',
    'Review of the "th" sounds in this vocabulary: **th**reat, **th**eft, au**th**ority, tru**th** have voiceless /θ/; **th**e, **th**ey, toge**th**er, o**th**ers have voiced /ð/.',
  ], 'tags-special', 'Accountability means leaders must explain how they used power and money.',
  ['Favouring one’s own relatives when giving jobs is:', ['nepotism', 'integrity', 'transparency', 'accountability'], 'It is a form of corruption.'],
  [['Accountability', 'Being responsible for one’s actions and able to explain them.'], ['Embezzlement', 'Stealing money one is trusted to manage.'], ['Nepotism', 'Favouring relatives, especially in giving jobs.'], ['Xenophobia', 'Fear or hatred of foreigners.']],
  [
    { q: 'Read: "When the treasurer was found to have taken the club’s funds, the members did not beat him. They asked him to repay in instalments and elected a new treasurer, and the club grew stronger." State the lesson.', steps: ['The members chose a fair, peaceful solution rather than violence.', 'Lesson: **injustice can be corrected through fair rules and accountability, not revenge**.'] },
  ]),

  // ---------- Substance abuse ----------
  L('en-phrasal2-5', 'en-f5-substances', '13.1', 'Phrasal verbs with more than one meaning', 11, ['Vocabulary', 'Grammar'], [
    'Many **phrasal verbs** have several meanings; the context decides which:\n- **take off**: remove (clothes); leave the ground (a plane); become successful quickly\n- **pick up**: lift; collect someone; learn without lessons ("pick up a language")\n- **go off**: explode or ring (an alarm); go bad (food)\n- **put off**: postpone; discourage ("The smell put me off.")\n- **turn down**: reduce (volume); refuse (an offer)\n- **break down**: stop working (a car); lose control of one’s feelings.',
    'In the context of youth protection: **give up** (stop a habit), **get into** (become involved in), **fall into** (bad company), **turn to** (go to for help), **get over** (recover from), **stay away from**, **look out for** (watch over), **speak out** (against abuse).',
    'Some phrasal verbs can be separated by the object ("Turn the music down"), but if the object is a pronoun it must go in the middle ("Turn **it** down", not "Turn down it").',
  ], 'phrasal-meanings', 'Read the whole sentence before deciding what a phrasal verb means.',
  ['"She turned down the offer of drugs." "Turned down" means:', ['refused', 'reduced the volume of', 'accepted', 'sold'], 'Here it means refuse.'],
  [['Phrasal verb', 'A verb with a particle that together have a special meaning.']],
  [
    { q: 'Give the meaning of "put off" in each sentence: (a) "The match was put off because of rain." (b) "His rude manner put me off."', steps: ['(a) **postponed**', '(b) **discouraged me / made me dislike him**'] },
  ]),

  L('en-drugsarticle-5', 'en-f5-substances', '13.2', 'Writing a magazine article on substance abuse', 15, ['Writing', 'Vocabulary'], [
    'Vocabulary: substance abuse, drug, stimulant, painkiller, **tramadol**, cannabis, alcohol, spirits, sachets of whisky, **addiction**, dependence, withdrawal symptoms, overdose, warning signs (falling grades, lateness, mood swings, new friends, stealing money), **peer counselling**, guidance counsellor, **rehabilitation**, relapse.',
    'Abuse of tramadol (a strong prescription painkiller) and of cheap alcohol sold in sachets is a serious problem among young people in Cameroon. It can cause seizures, liver and brain damage, accidents, school drop-out and crime.',
    'Plan the **school magazine article**: an eye-catching headline ("Tramadol: the Pill That Steals Your Future"); a by-line; an introduction that hooks the reader with a question, a fact or a short story; body paragraphs on what the substances are, why young people take them, the dangers, and how to say no and where to get help; a conclusion with a strong message. Address your readers directly and keep a serious, caring tone.',
  ], 'phrasal-meanings', 'Give readers practical help: who to talk to and how to say no.',
  ['Which is a warning sign of drug abuse in a student?', ['A sudden fall in grades and mood swings', 'Regular attendance', 'Good sleep', 'Joining the reading club'], 'Changes in behaviour can signal a problem.'],
  [['Substance abuse', 'Harmful use of drugs or alcohol.'], ['Dependence', 'A state in which the body or mind needs a drug to function.'], ['Relapse', 'Returning to drug use after stopping.']],
  [
    { q: 'Write a paragraph advising readers how to refuse drugs.', steps: ['Give practical, direct advice.', '**"Saying no is easier than you think. Be firm and short: \"No, thanks, I don’t do that.\" Walk away, choose friends who respect your choice, and talk to a counsellor or a trusted adult if someone keeps pressuring you."**'] },
  ]),

  // ---------- Argumentative composition ----------
  L('en-concessive-5', 'en-f5-argument', '14.1', 'Concessive conjunctions and connectors', 11, ['Grammar', 'Writing'], [
    '**Concession** admits a point and then shows that the main claim still holds:\n- **although / even though** + clause: "**Although** the law is clear, corruption continues."\n- **even if** + clause (a possible condition): "**Even if** the cost is high, we must act."\n- **despite / in spite of** + noun or -ing: "**Despite** the cost, we must act."\n- **nonetheless / nevertheless / however** link two sentences: "The plan is costly. **Nonetheless**, it is necessary."',
    '**Whereas** and **while** contrast two facts of equal weight: "Urban youths have internet access, **whereas** many rural youths do not."',
    'In argumentative writing, concession makes you sound fair and therefore more convincing: admit the strongest point of the other side, then answer it.',
  ], 'concession', 'Concede, then counter: "Although…, …".',
  ['"The fine is small. ___, it reminds people of the law."', ['Nevertheless', 'Because', 'Even if', 'Whereas'], 'It links two sentences and keeps the main point.'],
  [['Concession', 'Admitting a point that seems to go against one’s argument.'], ['Connector', 'A word or phrase that links sentences or ideas.']],
  [
    { q: 'Write a concession for the argument "Youth should be allowed to vote at 18".', steps: ['Admit the opposing point, then counter it.', '**"Although some 18-year-olds may lack experience, many already work, pay taxes and serve the nation, so they deserve a voice in choosing its leaders."**'] },
  ]),

  L('en-argument2-5', 'en-f5-argument', '14.2', 'Writing a strong argumentative composition', 15, ['Writing', 'Exam skills'], [
    'An **argumentative composition** for the GCE should show a clear position, logical organisation and convincing support.',
    'Steps:\n- **analyse the topic**: underline key words; decide whether you agree, disagree or partly agree\n- **brainstorm** points for and against; choose your three or four strongest\n- **plan** the paragraphs: introduction with thesis; one argument per paragraph with evidence; one paragraph of concession and rebuttal; conclusion\n- **write** with topic sentences, connectives and varied sentences\n- **check** grammar, spelling, punctuation and length.',
    'Persuasive support: facts and figures, examples from Cameroon, reasoning (cause and effect), expert opinion and rhetorical questions. Avoid generalisations ("everybody knows"), insults and irrelevant stories.',
  ], 'essay-structure', 'Plan for five minutes, write, then keep five minutes to check.',
  ['Which is the weakest kind of support in an argument?', ['"Everybody knows that…"', 'A relevant statistic', 'A real example from Cameroon', 'A clear chain of cause and effect'], 'Sweeping generalisations convince nobody.'],
  [['Brainstorm', 'To list ideas quickly before choosing the best.'], ['Generalisation', 'A broad statement that is not supported by evidence.']],
  [
    { q: 'Write the thesis and a counter-argument paragraph opening for "Mobile phones should be banned in secondary schools".', steps: ['Thesis: **"Mobile phones should be strictly controlled, not completely banned, in secondary schools."**', 'Counter-argument: **"Supporters of a total ban argue that phones distract students and spread exam fraud. While these dangers are real, phones can also be used for research and emergency calls if their use is well regulated."**'] },
  ]),

  // ---------- The digital age ----------
  L('en-conditional3-5', 'en-f5-digital', '15.1', 'The Type III conditional', 12, ['Grammar'], [
    'The **Type III conditional** imagines a different past that did not happen: **if + past perfect, would have + past participle**. "**If** he **had checked** the source, he **would not have shared** the fake news." (He did not check, so he shared it.)',
    'Other modals can replace would: could have, might have: "If I **had known** about the scholarship, I **might have applied**."',
    'Compare the three types:\n- Type I: If it rains, the match will be cancelled. (likely future)\n- Type II: If it rained, the match would be cancelled. (unlikely or imagined present/future)\n- Type III: If it had rained, the match would have been cancelled. (past that did not happen).\n**Mixed conditionals** combine a past condition with a present result: "If I **had learnt** coding, I **would have** a job now."',
  ], 'conditionals-all', 'Type III: had + past participle … would have + past participle.',
  ['"If they ___ a backup, they would not have lost the data."', ['had made', 'made', 'make', 'would make'], 'if + past perfect.'],
  [['Type III conditional', 'if + past perfect, would have + past participle: an unreal past.'], ['Mixed conditional', 'A conditional that combines a past condition with a present result, or the opposite.']],
  [
    { q: 'Write a Type III sentence about this: "She did not use two-factor authentication. Her account was hacked."', steps: ['Imagine the opposite past.', '**"If she had used two-factor authentication, her account would not have been hacked."**'] },
  ]),

  L('en-ai-5', 'en-f5-digital', '15.2', 'Artificial intelligence, search engines and the mass media', 12, ['Vocabulary', 'Reading', 'Speech work'], [
    'Vocabulary: **artificial intelligence (AI)**, algorithm, chatbot, machine learning, data, database, **search engine**, keyword, website, link, source, **data validation** (checking that data are complete, correct and sensible), verification, fact-checking, fake news, misinformation, **mass media** (radio, television, newspapers, the internet), broadcast, journalist, editor, audience.',
    'Texts on **data validation** explain steps such as: check that required fields are filled, that values are in the allowed range (an age cannot be 250), that formats are right (a date, a phone number), and that information comes from a reliable source. Read such texts by identifying each step and its purpose.',
    'Stress in **compound words**: compound nouns usually stress the first part: NEWS-paper, SEARCH en-gine, KEY-word, WEB-site, DATA-base, LAP-top. Compound adjectives often stress the second part: well-KNOWN, up-to-DATE, user-FRIENDly.',
  ], 'stress-patterns', 'Check every online claim against a second reliable source.',
  ['Checking that an entered age is between 0 and 120 is an example of:', ['data validation', 'hacking', 'phishing', 'broadcasting'], 'It catches impossible values.'],
  [['Artificial intelligence', 'Computer systems that perform tasks normally needing human intelligence.'], ['Algorithm', 'A set of step-by-step instructions to solve a problem.'], ['Misinformation', 'False or misleading information.']],
  [
    { q: 'Mark the stress: search engine, website, up-to-date, database.', steps: ['**SEARCH** engine', '**WEB**site', 'up-to-**DATE**', '**DA**tabase'] },
  ]),

  // ---------- GCE marathons, mocks and remediation ----------
  L('en-p1marathon-5', 'en-f5-gce', '16.1', 'Paper 1 mini-marathons', 11, ['Exam skills', 'Revision'], [
    'In Term 3, Paper 1 practice becomes timed "mini-marathons": short sets of multiple-choice questions done against the clock, marked at once and analysed. The scheme lists the areas: contextual **spelling**, **grammar correction**, **synonyms and antonyms**, **reading speed** and **sound patterns**.',
    'Speed techniques:\n- spelling: picture the word and check doubled letters and silent letters\n- grammar: find the subject and the time, then test each option\n- synonyms and antonyms: replace the word with each option in the sentence\n- sounds: say the words silently\n- reading: read the questions first, skim the passage, then scan for the answers.',
    'Keep an error log: each mistake, the correct answer and the rule. Review it before each new marathon.',
  ], 'gce-english-papers', 'An error log turns every mistake into a lesson.',
  ['Choose the correctly spelt word.', ['necessary', 'neccessary', 'necesary', 'neccesary'], 'One c, double s.'],
  [['Error log', 'A record of one’s mistakes and their corrections, kept for revision.']],
  [
    { q: 'Choose the word with a different vowel sound: (a) cook (b) book (c) food (d) look.', steps: ['cook, book and look have /ʊ/; food has /uː/.', 'Answer: **(c) food**.'] },
  ]),

  L('en-mockremedy-5', 'en-f5-gce', '16.2', 'The mock examination and post-mock remediation', 12, ['Exam skills', 'Revision'], [
    'The **institutional or regional mock** simulates Papers 1 and 2 under real conditions. Sit it as if it were the GCE: timed, silent, with the right materials.',
    'The scheme’s **post-mock clinics** target typical downfalls:\n- poor choice of vocabulary (vague words such as "nice", "thing", "stuff")\n- misaligned letter layouts (addresses, date, subject line in the wrong place)\n- incorrect question tags\n- faulty text operations in Section B (copying instead of summarising, exceeding the word limit).',
    'For each error, find the rule, write the correct form, and practise three similar items. Rewrite your weakest composition after correction.',
  ], 'mock-cycle', 'Rewrite your weakest composition: the second draft teaches the most.',
  ['Which word is too vague for a good composition?', ['nice', 'magnificent', 'courteous', 'spacious'], 'Choose precise words.'],
  [['Remediation', 'Targeted re-teaching and practice of the points where errors were made.']],
  [
    { q: 'Improve this sentence from a mock script: "The festival was nice and there were many things."', steps: ['Replace vague words with precise ones and add detail.', '**"The festival was colourful and lively, with masked dancers, drummers and stalls selling roasted fish."**'] },
  ]),

  L('en-p2optimise-5', 'en-f5-gce', '16.3', 'Paper 2: getting the most from Sections A and B', 12, ['Exam skills', 'Revision'], [
    '**Section A** (composition): know the formats thoroughly: narrative (a clear plot, vivid detail, a satisfying ending), argumentative (thesis, arguments, concession, conclusion), formal speech (protocol, body, call to action, thanks), letters (correct layout and register), articles (headline, by-line, engaging style). Choose the task you can develop best, plan, write and proofread.',
    '**Section B** (text-directed): guided summaries and language operations. For a summary, read the question, underline the relevant points only, write them in your own words in continuous prose, and keep to the word limit. Language operations may ask you to transform sentences (passive, reported speech, conditionals), explain words in context, or identify figures of speech.',
    'Time: divide the paper according to the marks, and keep the last ten minutes for checking spelling, punctuation and tense consistency.',
  ], 'gce-english-papers', 'In Section B, answer exactly what is asked, no more and no less.',
  ['In a guided summary, you should include:', ['Only the points the question asks for', 'Every detail in the passage', 'Your own opinions', 'Quotations of whole paragraphs'], 'Irrelevant points waste words.'],
  [['Text-directed task', 'A task based on a passage, such as a summary or language questions.'], ['Figure of speech', 'A use of language for special effect, such as a simile or metaphor.']],
  [
    { q: 'Transform as instructed: "The teacher said, \"The results will be published tomorrow.\"" (Begin: The teacher said that…)', steps: ['Reported speech, passive kept: will → would; tomorrow → the next day.', '**"The teacher said that the results would be published the next day."**'] },
  ]),
];
