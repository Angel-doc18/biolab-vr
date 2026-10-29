// A Level English Language lessons (0730), Upper Sixth, Terms 2 and 3:
// advanced reported speech, concord, synthesis, technical and investigative
// reports, minutes, narrative, paper sprints, mocks and GCE clinics.
// Original text written for this app.

const PAPER = { 'Speech work': 'Paper 1', Writing: 'Written papers', Summary: 'Written papers' };

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

export const LESSONS_EU6B = [
  // ---------- 10. Advanced reported speech ----------
  L('aen-rep-3', 'aen-u6-reported', '10.1', 'Reporting verbs and their patterns', 17, ['Grammar'], [
    'Precise **reporting verbs** sum up what a speaker did, not only what they said. Each has a pattern:\n- **verb + to-infinitive**: agree, offer, promise, refuse, threaten ("He **refused to sign**.")\n- **verb + object + to-infinitive**: advise, ask, beg, encourage, invite, order, remind, urge, warn ("She **urged us to vote**.")\n- **verb + gerund**: admit, deny, recommend, suggest ("He **denied taking** the money.")\n- **verb + preposition + gerund**: apologise for, insist on, accuse someone of, blame someone for, congratulate someone on ("They **accused him of lying**.")',
    '**Suggest** and **recommend** also take **that** + subject + (should) + base form: "The lawyer **suggested that she (should) remain** silent." Never "suggested her to remain".',
    '**Let’s** is reported with **suggest**: "Let’s settle out of court" → He **suggested settling** out of court.',
    'Many verbs can also take **that** + clause: admit, deny, insist, promise, warn, complain, explain: "The clerk **admitted that he had signed** the false receipt."',
  ], 'aen-reporting-verbs', 'Learn each reporting verb with its pattern as one unit: "accuse someone of doing".',
  ['"You really must stay for dinner," she said to us. Using "insist":', ['She insisted on our staying for dinner.', 'She insisted us to stay for dinner.', 'She insisted to stay us for dinner.', 'She insisted staying for dinner us.'], 'Insist on + gerund (or insist that we stay).'],
  [['Reporting verb', 'A verb such as admit, deny or urge that introduces reported speech.'], ['Verb pattern', 'The structure that must follow a verb, such as to-infinitive or gerund.'], ['Testimony', 'A formal statement given as evidence, especially in court.']],
  [
    { q: 'Report with "threaten": "Pay me, or I will report you," the man said to the trader.', steps: ['Threaten + to-infinitive.', 'Keep the condition as an if-clause.', '**The man threatened to report the trader if he did not pay him.**'] },
    { q: 'Report with "congratulate": "Well done on your excellent results!" the principal said to Ngwa.', steps: ['Congratulate + object + on + gerund or noun.', 'Change "your" to "her" or "his".', '**The principal congratulated Ngwa on her excellent results.**'] },
  ]),

  L('aen-rep-4', 'aen-u6-reported', '10.2', 'Reporting mixed passages and testimony', 17, ['Grammar'], [
    'A passage may mix **statements, questions, commands and exclamations**. Report each with the right structure, vary the reporting verbs, and keep the tense changes consistent throughout.',
    '**Exclamations** become statements with a suitable verb: "What a terrible accident!" → He **exclaimed that it was** a terrible accident. **Yes** and **no** answers are reported with the verb: "Yes," he said → He **agreed** / He **said that he had**.',
    'Times, places and references shift with the new viewpoint: **tonight → that night**, **this morning → that morning**, **the day after tomorrow → two days later**, **here → there**, **these → those**.',
    '**Practice task (legal testimony):** turn a short courtroom dialogue between a lawyer and a witness (eight lines) into a reported account of about 150 words, as it might appear in a newspaper report of the trial.',
  ], 'reported-changes', 'Read the whole dialogue first: choose a reporting verb that shows each speaker’s purpose.',
  ['"What a brave girl!" the crowd shouted. Reported:', ['The crowd exclaimed that she was a very brave girl.', 'The crowd asked what a brave girl.', 'The crowd told what a brave girl she is.', 'The crowd said what a brave girl!'], 'An exclamation becomes a statement.'],
  [['Exclamation', 'A sentence expressing strong feeling, often with what or how.'], ['Viewpoint', 'The position in time and place from which events are told.'], ['Direct speech', 'The exact words of a speaker, in quotation marks.']],
  [
    { q: 'Report: Lawyer: "Where were you on the night of 3 May?" Witness: "I was at home. I did not go out."', steps: ['Question: asked + where + statement order + past perfect.', 'Answer: replied that + past perfect; deny or insist may fit.', '**The lawyer asked the witness where she had been on the night of 3 May. She replied that she had been at home and insisted that she had not gone out.**'] },
    { q: 'Report: "Please don’t send me to prison," the boy begged the judge.', steps: ['Beg + object + not to.', 'Change me to him.', '**The boy begged the judge not to send him to prison.**'] },
  ]),

  // ---------- 11. Concord ----------
  L('aen-agree-1', 'aen-u6-concord', '11.1', 'Concord: proximity, collectives and pronouns', 17, ['Grammar'], [
    '**Concord** means the verb agrees with its subject in number. With **either... or** and **neither... nor**, the verb agrees with the **nearer** subject (the rule of proximity): "Neither the principal nor the **teachers were** present"; "Either the students or the **teacher is** to blame."',
    '**Collective nouns** (committee, government, team, family, staff, jury) take a **singular** verb when the group acts as one unit ("The committee **has** decided") and, in British English, may take a plural verb when the members act separately ("The jury **are** arguing among themselves"). Be consistent with pronouns: "The team **has** won **its** match."',
    '**Indefinite pronouns** each, every, everyone, everybody, someone, nobody, either, neither are **singular**: "Each of the boys **has** a ticket"; "Everyone **is** welcome". **Both, few, many, several** are plural. **None** takes a singular verb in formal style ("None of the money **was** found") and either with plural nouns ("None of the students **was/were** late").',
    '**Together with, as well as, along with, in addition to** do not change the subject: "The minister, together with his aides, **has** arrived."',
  ], 'aen-concord', 'Cross out everything between the subject and the verb, then check the agreement.',
  ['"Neither the driver nor his passengers ___ hurt."', ['were', 'was', 'is', 'has been'], 'The nearer subject, passengers, is plural.'],
  [['Concord', 'Agreement between a subject and its verb in number.'], ['Rule of proximity', 'With either... or and neither... nor, the verb agrees with the nearer subject.'], ['Collective noun', 'A noun for a group, such as team or committee.']],
  [
    { q: 'Correct: "Every one of the candidates were given a number, and each of them have signed."', steps: ['Every one and each are singular.', 'were → was; have → has.', '**Every one of the candidates was given a number, and each of them has signed.**'] },
    { q: 'Correct: "The Principal, as well as the teachers, were at the gate."', steps: ['As well as does not change the subject.', 'The subject is the Principal (singular).', '**The Principal, as well as the teachers, was at the gate.**'] },
  ]),

  L('aen-agree-2', 'aen-u6-concord', '11.2', 'Concord: tricky subjects and separated verbs', 16, ['Grammar'], [
    '**The number of** + plural noun takes a **singular** verb ("The number of accidents **is** rising"); **a number of** (= several) takes a **plural** verb ("A number of roads **are** closed"). The same for **the majority of**: singular for the group as a whole, plural for its members in British usage.',
    'Nouns that look plural but are singular: **news**, **mathematics**, **physics**, **economics**, **politics** (as a subject), **measles**. Nouns that are always plural: **trousers**, **scissors**, **police**, **cattle**, **people**: "The police **are** investigating."',
    'Sums, distances and periods seen as one amount are singular: "Ten thousand francs **is** a lot"; "Five kilometres **is** too far to walk." Two nouns forming **one idea** take a singular verb: "Bread and butter **is** my breakfast"; "The secretary and treasurer **is** absent" (one person) but "The secretary and **the** treasurer **are** absent" (two people).',
    'Watch **separated** subjects and **inverted** sentences: "The quality of these roads **is** poor"; "There **are** many reasons"; "Here **comes** the bus"; "On the table **were** three envelopes."',
  ], 'determiners', 'Find the head noun: in "the box of books", the box is the subject.',
  ['"The number of candidates this year ___ higher than last year."', ['is', 'are', 'were', 'have been'], 'The number is singular.'],
  [['Head noun', 'The main noun of a noun phrase, which decides agreement.'], ['Plural-only noun', 'A noun with no singular form in use, such as trousers or cattle.'], ['Notional agreement', 'Agreement based on meaning rather than grammatical form, as in "Ten years is a long time".']],
  [
    { q: 'Choose: "Economics (is/are) a popular subject, but the economics of the project (is/are) unclear."', steps: ['As a school subject, economics is singular.', 'The second refers to costs and figures, usually treated as plural.', '**is, are.**'] },
    { q: 'Correct: "There is many reasons why the cattle is dying."', steps: ['Inverted sentence: the subject reasons is plural.', 'Cattle is always plural.', '**There are many reasons why the cattle are dying.**'] },
  ]),

  // ---------- 12. Synthesis ----------
  L('aen-syn-1', 'aen-u6-synthesis', '12.1', 'Changing register, tone and viewpoint', 17, ['Writing'], [
    'Text-directed tasks may ask you to rewrite a passage **for a different reader or purpose** while keeping its facts: a formal notice as a friendly message, a dialogue as a report, a first-person diary as a third-person account, a present-tense description as a past narrative.',
    'Decide the **target**: audience (who), purpose (why), form (what kind of text), person and tense. Then change systematically: **vocabulary** (commence → start), **sentence length**, **contractions**, **pronouns** (I → she), **tense**, **reported speech** for dialogue, and the **layout** of the new form.',
    'Keep all the **content** required; do not add opinions or facts not in the source. Change **tone** through word choice: neutral ("the fee has increased"), sympathetic ("we understand that the new fee is hard for many families"), urgent ("the fee must be paid by Friday").',
    '**Practice task (repurposing documents):** rewrite a 150-word formal circular from the Regional Delegation about a change to examination dates as (a) an announcement for the school assembly and (b) a message to parents on the school’s WhatsApp group.',
  ], 'aen-register-shift', 'List the facts of the source first; tick each one as it appears in your rewrite.',
  ['Rewriting a diary entry in the third person changes "I was worried" to:', ['She was worried.', 'I am worried.', 'You were worried.', 'We were worried.'], 'Person changes; facts stay.'],
  [['Synthesis', 'Combining or reshaping information into a new text.'], ['Target audience', 'The reader or listener a text is written for.'], ['Tone', 'The attitude a text expresses, such as neutral, warm or urgent.']],
  [
    { q: 'Rewrite for a friendly class message: "Students are hereby informed that the excursion has been cancelled owing to inclement weather."', steps: ['Simplify vocabulary: hereby informed, owing to, inclement.', 'Use a warmer tone and contractions.', '**Sorry, everyone: the trip is off because of the bad weather.**'] },
    { q: 'Rewrite as a formal notice: "Hey guys, bring your ID cards tomorrow or you can’t sit the test!"', steps: ['Remove slang; use the passive and full forms.', 'Keep the condition and the date.', '**Candidates are required to bring their identity cards tomorrow; those without them will not be admitted to the test.**'] },
  ]),

  L('aen-syn-2', 'aen-u6-synthesis', '12.2', 'Synthesis: combining and reshaping texts', 17, ['Writing'], [
    '**Combining** two short texts means selecting what the task needs from each, removing repetition, ordering the points logically and linking them into one smooth text: "According to the health report... The mayor’s statement adds that...".',
    'Watch for **contradictions** between sources: report both and attribute them ("The council says 200 families were affected; the Red Cross puts the figure at 350").',
    'A **timeline constraint** may require you to retell events in order, or from a given moment ("Write the account as the headmaster would give it the next morning"): change the tenses and time words to fit.',
    'Finish with a check: Does the text match the required **form, audience, purpose and length**? Is every fact from the sources? Is the register consistent from start to end?',
  ], 'register-scale', 'When sources disagree, name both sources rather than choosing one.',
  ['Two sources give different figures for the same flood. In your synthesis you should:', ['give both figures and say where each comes from', 'choose the larger figure', 'leave the figures out', 'invent an average'], 'Attribute each.'],
  [['Attribution', 'Naming the source of a piece of information.'], ['Contradiction', 'Two statements that cannot both be true.'], ['Timeline constraint', 'An instruction that fixes when, or in what order, events are told.']],
  [
    { q: 'Combine into one sentence: Source A: "The new market opens on Monday." Source B: "The council says the market has 400 stalls."', steps: ['Join the facts and attribute B.', 'Avoid repeating "market".', '**The new market, which the council says has 400 stalls, opens on Monday.**'] },
    { q: 'Retell as the headmaster speaking the next morning: "The fire starts at 8 pm. The watchman calls the firemen."', steps: ['Move to the past; adjust the time word.', 'Use the first person plural where suitable.', '**Last night, at 8 pm, a fire broke out, and our watchman immediately called the fire service.**'] },
  ]),

  // ---------- 13. Technical and investigative reports ----------
  L('aen-treport-1', 'aen-u6-reports', '13.1', 'Technical and laboratory reports', 18, ['Writing'], [
    'A **laboratory report** records an experiment: **title**; **aim** (what you set out to find); **materials and apparatus**; **method** (what was done, in order, in the past passive: "The solution **was heated** to 60 °C"); **results** (a table or graph with units); **discussion** (what the results mean, sources of error); **conclusion** (the answer to the aim).',
    'A **technical report** explains the state of a system or equipment for a decision: purpose, description of the system, problems found, options with costs, and a recommendation.',
    'Style: impersonal, precise and concise; numbers with **units**; no emotional words; past tense for what was done, present tense for what is generally true ("Copper **conducts** electricity").',
    '**Practice task (presenting findings):** write a laboratory report of about 300 words on an experiment from your science classes, or on a test of how quickly three kinds of soil drain water.',
  ], 'aen-lab-report', 'Write the conclusion as a direct answer to the aim: if the aim asks "which", the conclusion names one.',
  ['"The mixture was stirred for five minutes" belongs in the:', ['method', 'aim', 'conclusion', 'title'], 'What was done.'],
  [['Aim', 'The purpose of an experiment, stated at the start of a report.'], ['Method', 'The steps followed, usually in the past passive.'], ['Discussion', 'The part of a report that interprets results and notes errors.']],
  [
    { q: 'Rewrite for a method section: "We put 100 ml of water in each pot and then we timed it."', steps: ['Use the past passive; remove "we".', 'Keep the quantity and sequence.', '**100 ml of water was poured into each pot, and the time taken to drain was recorded.**'] },
    { q: 'Write a conclusion for the aim "To find which soil drains fastest", given sand 40 s, loam 95 s, clay 300 s.', steps: ['Answer the aim directly.', 'Support with the figure.', '**Sand drains fastest, taking 40 seconds compared with 95 seconds for loam and 300 seconds for clay.**'] },
  ]),

  L('aen-ireport-1', 'aen-u6-reports', '13.2', 'Investigative reports and audit findings', 17, ['Writing'], [
    'An **investigative report** answers a problem for someone in authority: theft of school property, a drop in results, complaints about the canteen, the state of the water supply. It follows the formal report layout: title, to, from, date, terms of reference, procedure, findings, conclusions, recommendations, signature.',
    '**Audit findings** compare what should be with what is: "The stock list records 120 chairs; 96 were counted." Present them under clear headings, with numbers, and separate **facts** from **explanations given** ("The storekeeper stated that...").',
    'Recommendations must be **specific, practical and assigned**: who should act, how, and by when. Number them to match the findings they answer.',
    '**Practice task (audit findings):** from given notes on a school store (records, counts, interviews), write a 400-word investigative report to the Principal.',
  ], 'aen-report-layout', 'Number findings and recommendations so that each recommendation clearly answers a finding.',
  ['"The storekeeper stated that the chairs had been lent to the church" is:', ['an explanation given, reported as such', 'a proven finding', 'a recommendation', 'the terms of reference'], 'Attribute statements to their source.'],
  [['Audit', 'An official check of records against reality.'], ['Discrepancy', 'A difference between two things that should match.'], ['Assigned recommendation', 'A recommendation that names who should act.']],
  [
    { q: 'Write a finding from: records 120 chairs, counted 96.', steps: ['State both figures and the difference.', 'Use the impersonal style.', '**The store register records 120 chairs, but only 96 were found, a shortfall of 24.**'] },
    { q: 'Write an assigned recommendation for that finding.', steps: ['Name who, what and when.', 'Keep it practical.', '**The Bursar should check the register against the store every month and report any shortfall to the Principal within a week.**'] },
  ]),

  // ---------- 14. Minutes ----------
  L('aen-min-1', 'aen-u6-minutes', '14.1', 'The format of minutes', 18, ['Writing'], [
    '**Minutes** are the official record of a meeting. Heading: the name of the body, the type of meeting, the **date, time and venue**: "Minutes of the ordinary meeting of the Debate Club held on Friday 13 February 2026 at 2 pm in Room 6."',
    '**Attendance**: present (with the chairperson and secretary named), **absent with apology**, absent without apology, and **in attendance** (people present who are not members). Some meetings check that a **quorum** (the minimum number of members) is present.',
    'Then the **agenda items** in order, each numbered with a heading: opening; **reading and adoption of the previous minutes** ("proposed by Fon Mary and seconded by Ndi Paul"); **matters arising**; the main items, each with a summary of the discussion and the **decision** or **resolution**; **any other business** (AOB); and **adjournment** ("The meeting was adjourned at 3.40 pm").',
    'The minutes end with spaces for the **secretary’s** and **chairperson’s** signatures; the chairperson signs once the minutes are adopted at the next meeting. **Action points** may be listed: who will do what, by when.',
  ], 'aen-minutes', 'Number the items exactly as they were on the agenda, so that the minutes can be checked against it.',
  ['"Proposed by Fon Mary and seconded by Ndi Paul" records:', ['how the previous minutes or a motion were adopted', 'the attendance', 'the venue', 'the adjournment'], 'A motion needs a proposer and a seconder.'],
  [['Minutes', 'The official written record of a meeting.'], ['Quorum', 'The minimum number of members needed for a valid meeting.'], ['Adjournment', 'The formal end, or postponement, of a meeting.']],
  [
    { q: 'Write the heading for minutes of the PTA executive meeting held on 20 January 2026 at 10 am in the school library.', steps: ['Name the body and the meeting type.', 'Give date, time and venue.', '**Minutes of the meeting of the PTA Executive held on Tuesday 20 January 2026 at 10 am in the school library.**'] },
    { q: 'Record an item on fees: the meeting agreed to keep fees unchanged; the treasurer will inform parents by letter.', steps: ['Summarise the decision in the past tense.', 'Add the action point.', '**4. School fees: After discussion, it was resolved that fees remain unchanged. Action: the Treasurer to inform parents by letter.**'] },
  ]),

  L('aen-min-2', 'aen-u6-minutes', '14.2', 'The language of minutes', 16, ['Writing'], [
    'Minutes are written in the **past tense**, the **third person** and **reported speech**: "The Chairperson **welcomed** members and **explained** that the meeting **had been called** to plan the sports day."',
    'They record **decisions**, not every word: summarise discussion briefly ("After a long discussion, members agreed that...") and record exactly what was **resolved**, with the names of proposers and seconders when a vote was taken.',
    'Useful phrases: **The meeting opened with a prayer at...**; **The minutes of the last meeting were read and adopted with one correction**; **Under matters arising, the secretary reported that...**; **It was resolved that...**; **There being no other business, the meeting was adjourned at...**.',
    '**Practice task (corporate records):** listen to (or read) a short club meeting dialogue and write its minutes of about 250 words, with attendance, four agenda items, two resolutions and the adjournment.',
  ], 'aen-minutes-language', 'Turn every spoken line into "The X said/proposed/reported that..." and cut what decided nothing.',
  ['"We shall meet again next Friday," the chairperson said. In minutes:', ['The Chairperson announced that the next meeting would take place the following Friday.', 'We shall meet again next Friday.', 'The Chairperson says we meet Friday.', 'Next Friday we meet, said the Chairperson.'], 'Reported speech, past tense, third person.'],
  [['Resolution', 'A formal decision taken by a meeting.'], ['Matters arising', 'Issues followed up from the previous minutes.'], ['Seconder', 'A member who supports a motion after it is proposed.']],
  [
    { q: 'Write in minute style: Treasurer: "We have 85 000 FCFA in the account and we spent 15 000 on balls."', steps: ['Third person, reported speech, past tense.', 'Keep the figures.', '**The Treasurer reported that the club had 85 000 FCFA in its account after spending 15 000 FCFA on balls.**'] },
    { q: 'Write the closing line of the minutes.', steps: ['Use the standard formula.', 'Give the time.', '**There being no other business, the meeting was adjourned at 4.15 pm.**'] },
  ]),

  // ---------- 15. Narrative ----------
  L('aen-narr-2', 'aen-u6-narrative', '15.1', 'Flashback, foreshadowing and plot', 18, ['Writing'], [
    'A **complex plot** need not follow strict time order. A **flashback** moves back to earlier events to explain the present: enter it with the **past perfect** for a sentence or two ("She **had been** only six when her father **had left** for the city"), continue in the simple past, then return clearly ("Now, twelve years later, ...").',
    '**Foreshadowing** hints at what is coming: a warning ignored, a strange sound, a detail that will matter later. It builds **suspense**, the reader’s eager uncertainty.',
    'A strong plot has **conflict** (a person against another, against nature, against society or against themselves), **rising action** that raises the stakes, a **climax**, and a **resolution** that follows from what came before rather than from luck.',
    'Open with a **hook**: start in the middle of action (in medias res), with a line of dialogue or with a striking image, then fill in the background by flashback.',
  ], 'aen-flashback', 'Mark the way in and the way out of a flashback with a clear time phrase.',
  ['"Little did she know that the bridge would not hold" is an example of:', ['foreshadowing', 'flashback', 'dialogue', 'resolution'], 'A hint of what is coming.'],
  [['Flashback', 'A scene that goes back to events before the main story.'], ['Foreshadowing', 'A hint of events that will happen later.'], ['In medias res', 'Starting a story in the middle of the action.']],
  [
    { q: 'Write two sentences that enter and leave a flashback about a grandmother’s farm.', steps: ['Enter with the past perfect.', 'Return with a clear time link and the simple past.', '**Years before, Ngoh had spent every holiday on her grandmother’s farm, where she had learnt to love the land. Now, standing before the bulldozers, she remembered every tree.**'] },
    { q: 'Write a foreshadowing sentence for a story about a market fire.', steps: ['Give a small, ominous detail.', 'Do not reveal the event.', '**Nobody paid attention to the smell of burning plastic drifting from the last row of stalls.**'] },
  ]),

  L('aen-narr-3', 'aen-u6-narrative', '15.2', 'Setting, sensory detail and dialogue', 17, ['Writing'], [
    'The **setting** (time, place, weather, social background) creates **atmosphere**: "The harmattan wind covered Maroua in grey dust, and the town seemed to hold its breath."',
    '**Show, don’t tell**: instead of "He was nervous", write "He wiped his palms on his trousers for the third time". Use **sensory detail**: sights, sounds, smells, tastes and textures, chosen for the mood, not piled up.',
    '**Dialogue** reveals character and moves the plot. Punctuation: each new speaker starts a new paragraph; punctuation goes inside the quotation marks: "Wait!" she shouted. "Where are you going?" Vary the reporting verbs (whispered, insisted, muttered) but do not overdo them.',
    '**Practice task (vivid narratives):** write a 450-word story beginning "The lights went out just as the results were being read", using one flashback, three senses and a short exchange of dialogue.',
  ], 'aen-narrative-arc', 'Choose one strong detail for each sense you use; three good details beat ten weak ones.',
  ['Which sentence shows rather than tells?', ['Her voice trembled and she would not look at us.', 'She was very sad.', 'She felt bad about it.', 'She was emotional.'], 'Actions reveal feeling.'],
  [['Setting', 'The time, place and conditions in which a story happens.'], ['Atmosphere', 'The mood a setting creates, such as tense or peaceful.'], ['Sensory detail', 'Description that appeals to sight, sound, smell, taste or touch.']],
  [
    { q: 'Rewrite to show, not tell: "The market was busy and noisy."', steps: ['Use sounds and sights.', 'Keep it to one or two sentences.', '**Traders shouted their prices over the hooting of taxis, while buyers squeezed between baskets of tomatoes and piles of second-hand shoes.**'] },
    { q: 'Punctuate: where is my phone asked Bih I left it here', steps: ['Question inside the quotation marks; new sentence for the second part.', 'Capital letters for each spoken sentence.', '**"Where is my phone?" asked Bih. "I left it here."**'] },
  ]),

  // ---------- 16. Paper sprints ----------
  L('aen-u6-paper1', 'aen-u6-papers', '16.1', 'Paper 1 speed work', 17, ['Exam'], [
    'Paper 1 (multiple choice, 1½ hours; in 2026 on Friday 5 June, morning) rewards speed with accuracy. Train in **timed blocks**: for example 20 items in 15 minutes, then correct at once and log the errors.',
    'Typical item types: **spelling** (choose the correct form), **grammar** (agreement, tense, conditionals, inversion, reported speech, prepositions: good **at**, interested **in**, insist **on**, accused **of**), **vocabulary** (meaning in context, idioms, phrasal verbs, opposites), **speech work** (sounds, stress, intonation) and **reading** (short passages, charts or notices).',
    'Speed tactics: answer the items you know first; for sound items, say the words silently; for stress items, find the suffix; for grammar items, find the subject and the time; eliminate two options before deciding.',
    'Keep a **personal error log** with the right answer and the rule; reread it before every drill and before the examination.',
  ], 'aen-gce-papers', 'An error log beats extra drills: the mistakes you repeat are the marks you can win back.',
  ['"She is interested ___ politics."', ['in', 'on', 'at', 'for'], 'Interested in.'],
  [['Timed block', 'A set of items done within a fixed time.'], ['Error log', 'A personal record of mistakes and the rules that correct them.'], ['Elimination', 'Removing options that are certainly wrong before choosing.']],
  [
    { q: 'Which word has a different vowel sound: blood, flood, food, mud?', steps: ['Blood /blʌd/, flood /flʌd/, mud /mʌd/.', 'Food /fuːd/.', '**Food.**'] },
    { q: 'Choose: "The police (is/are) investigating, and the news (is/are) worrying."', steps: ['Police is always plural.', 'News is singular.', '**are, is.**'] },
  ]),

  L('aen-u6-paper2', 'aen-u6-papers', '16.2', 'Written-paper sprints and coursework sign-off', 17, ['Exam'], [
    'The written papers (2¼ hours each; in 2026 Paper 2 on Friday 5 June, afternoon, and Paper 3 on Saturday 6 June, morning) reward correct **layouts**, well-built **paragraphs**, accurate language and relevance to the task.',
    'Sprint on layouts: in 10 minutes each, set out from memory a formal letter, a memo, a report, minutes and a speech opening; check them against your models. Then sprint on paragraphs: a topic sentence, development and a link, in five minutes.',
    'Examiners look for: the **form** asked for, the right **audience and register**, **organisation** into paragraphs, **accuracy** of grammar, spelling and punctuation, and **length** within the limits.',
    'Before the national examination, the school completes the **coursework sign-off**: your portfolio of written work is checked and signed. Make sure every piece is complete, dated and corrected.',
  ], 'aen-paper-plan', 'Practise layouts until you can write them without thinking, so all your thinking goes into content.',
  ['Which matters most in a functional writing task?', ['the form, audience and purpose stated in the question', 'using rare words', 'writing as much as possible', 'copying the question'], 'Answer the task set.'],
  [['Layout', 'The arrangement of parts on the page for a type of text.'], ['Relevance', 'How closely an answer keeps to the task.'], ['Portfolio', 'A collection of a student’s written work.']],
  [
    { q: 'In five minutes, list the parts of a formal report in order.', steps: ['Start with identification: title, to, from, date.', 'Then terms of reference, procedure, findings.', '**Conclusions, recommendations, name, position and signature.**'] },
    { q: 'Write a topic sentence for a paragraph on the benefits of school clubs.', steps: ['State one main idea clearly.', 'Leave room for development.', '**School clubs help students develop skills that classroom lessons alone cannot teach.**'] },
  ]),

  // ---------- 17. Mocks and clinics ----------
  L('aen-u6-mock', 'aen-u6-final', '17.1', 'The mock examination and remediation', 17, ['Exam'], [
    'Term 3 is given to examination practice. The **regional mock** reproduces the GCE: all papers, timed, under official conditions. Treat it as the real thing: arrive early, bring the right materials, follow every instruction.',
    'After the mock, **remediation** begins: sort your errors by kind and by paper, and work on the biggest groups first. Common problems: wrong address placement in formal letters, summaries far over or under the word limit, weak paragraphs without topic sentences, tense errors in reported speech, and agreement errors.',
    'Redo the questions you lost marks on, a week later, without looking at the corrections: if you can now do them, the learning has stuck.',
    'Look after yourself: regular sleep, meals and short breaks keep memory working better than all-night revision.',
  ], 'mock-cycle', 'Fix the cause, not the symptom: a misread question is fixed by reading habits, not by more facts.',
  ['After the mock, which should you work on first?', ['the kind of error that cost you most marks', 'the topic you like best', 'nothing', 'a new topic'], 'Biggest gain first.'],
  [['Mock examination', 'A full practice examination under real conditions.'], ['Remediation', 'Work to correct weaknesses shown by a test.'], ['Official conditions', 'The rules and timing of the real examination.']],
  [
    { q: 'You lost marks for a summary of 110 words when the limit was 80. Plan the remedy.', steps: ['The cause: including examples and repeating points.', 'Practise crossing out support and counting words.', '**Do three timed summaries, each checked for length and support removed, before the next practice paper.**'] },
    { q: 'Your formal letter put the receiver’s address after "Dear Sir". Correct the order.', steps: ['The receiver’s address comes before the salutation.', 'Then the salutation and subject line.', '**Writer’s address and date, receiver’s address, "Dear Sir", subject line, body.**'] },
  ]),

  L('aen-u6-clinic', 'aen-u6-final', '17.2', 'GCE clinics: layouts, summaries and transformations', 18, ['Exam'], [
    '**Section clinics** focus on the written tasks most often weak in mocks: composition layouts (margins, addresses, speech protocol, memo heading block, signatures), narrative organisation, summary length, and text-directed instructions.',
    '**Transformation clinics** drill the grammar that text-directed tasks use: active to passive, direct to reported speech, conditionals and inversion, joining sentences with relative clauses and concessive structures, and changing tense or person.',
    'Work from **past questions**: answer under time, compare with a model, and note one improvement for the next attempt. Focus on **following instructions exactly**: "in not more than 60 words", "in continuous prose", "as the class prefect".',
    'In the last days before the national examinations, review your error log and models, sleep well, and arrive early for each paper.',
  ], 'aen-common-errors', 'Underline every instruction word in a question: each one is a mark you can lose or win.',
  ['"In not more than 60 words" means:', ['60 words is the maximum', 'at least 60 words', 'exactly 60 words or nothing', 'about 100 words'], 'A maximum.'],
  [['Transformation', 'Rewriting a sentence in another structure without changing its meaning.'], ['Instruction word', 'A word in a question that tells you what to do or how.'], ['Model answer', 'A well-written answer used for comparison.']],
  [
    { q: 'Transform: "Although the bus broke down, we arrived on time." Begin: "Despite..."', steps: ['Despite + noun or gerund.', 'The bus broke down → the bus breaking down, or the breakdown of the bus.', '**Despite the breakdown of the bus, we arrived on time.**'] },
    { q: 'Transform: "The examiners marked the scripts." Begin: "The scripts..."', steps: ['Passive in the same tense: simple past.', 'Add the agent only if useful.', '**The scripts were marked by the examiners.**'] },
  ]),
];
