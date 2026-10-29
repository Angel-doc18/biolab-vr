// A Level English Language lessons (0730), Upper Sixth, Term 1: the third
// conditional and inversion, formal speeches, guided summary, phrasal verbs
// and idioms, business letters and memos, articles and editorials, word
// stress, and expository and argumentative essays. Original text written for
// this app; phonetic symbols follow the International Phonetic Alphabet.

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

export const LESSONS_EU6A = [
  // ---------- 1. Conditionals and inversion ----------
  L('aen-cond3-1', 'aen-u6-inversion', '1.1', 'The third and mixed conditionals', 17, ['Grammar'], [
    'The **third conditional** imagines a different past that did not happen, and its imagined result: **if + past perfect, would have + past participle**. "If the rains **had come** on time, the harvest **would have been** better." (They did not come on time.) **Could have** and **might have** show possibility.',
    '**Mixed conditionals** join different times. A past condition with a present result: "If I **had studied** medicine, I **would be** a doctor now." A present condition with a past result: "If she **were** more careful, she **would not have lost** her purse."',
    '**Wish** and **if only** follow the same backshift: "I wish I **had listened**" (regret about the past); "If only I **knew** the answer" (a present wish).',
    'Common errors: "would" in the if-clause ("If I would have known" is wrong), and "would of" for "would have". Diagnostic review: before this topic, revise Lower Sixth summary steps, active and passive, and cohesion, since Upper Sixth tasks combine them.',
  ], 'conditionals-all', 'Check what really happened: the third conditional always describes the opposite of the past facts.',
  ['"If he ___ the warning, he would not have crashed."', ['had heeded', 'heeded', 'would heed', 'has heeded'], 'If + past perfect.'],
  [['Third conditional', 'If + past perfect, would have + participle: an unreal past.'], ['Mixed conditional', 'A conditional that joins a past condition with a present result, or the reverse.'], ['Unreal past', 'An imagined past that is the opposite of what happened.']],
  [
    { q: 'Make one sentence: "The bridge collapsed. The engineers ignored the cracks."', steps: ['Imagine the opposite of the facts: they did not ignore the cracks.', 'If + past perfect, would not have + participle.', '**If the engineers had not ignored the cracks, the bridge would not have collapsed.**'] },
    { q: 'Write a mixed conditional: "I did not learn French as a child, so I cannot work as an interpreter now."', steps: ['Past condition (did not learn), present result (cannot work).', 'If + past perfect, would + base form.', '**If I had learnt French as a child, I could work as an interpreter now.**'] },
  ]),

  L('aen-inv-1', 'aen-u6-inversion', '1.2', 'Inversion for emphasis and in conditionals', 17, ['Grammar'], [
    'In formal English, **if** can be dropped and the auxiliary moved before the subject: **Had I known** (= if I had known), **Were I** you (= if I were you), **Should you** need help (= if you should need help). Never invert with "would".',
    'After **negative or limiting** words at the start of a sentence, the auxiliary comes before the subject, as in a question: **Never have I** seen..., **Rarely do** we..., **Seldom has** she..., **Little did he know**..., **Not only did** they win, but they also..., **Under no circumstances should** you..., **Not until** the results came out **did** we relax.',
    'Time expressions in pairs: **Hardly / Scarcely had** + subject + participle **when**...; **No sooner had** + subject + participle **than**.... "No sooner had the bell rung **than** the students rushed out."',
    'With **Only**: **Only then did** I understand; **Only after** the meeting **did** they agree. If there is no auxiliary, add **do, does** or **did**, and use the base form of the verb after it.',
  ], 'aen-inversion', 'After the negative word, write the sentence as a question, then add the full stop.',
  ['"Not until he lost his job ___ the value of savings."', ['did he understand', 'he understood', 'he did understand', 'understood he'], 'Inversion in the main clause after "Not until...".'],
  [['Inversion', 'Placing the auxiliary before the subject, as in a question.'], ['Negative adverbial', 'A word or phrase such as never, rarely or not only that can trigger inversion.'], ['Inverted conditional', 'A conditional without if, starting with had, were or should.']],
  [
    { q: 'Rewrite starting "Scarcely": "As soon as the minister arrived, the crowd began to sing."', steps: ['Scarcely had + subject + participle.', 'Use when for the second event.', '**Scarcely had the minister arrived when the crowd began to sing.**'] },
    { q: 'Rewrite starting "Should": "If you have any questions, contact the bursar."', steps: ['Drop if and put should first.', 'Use the base form after the subject.', '**Should you have any questions, contact the bursar.**'] },
  ]),

  // ---------- 2. Formal speeches ----------
  L('aen-addr-1', 'aen-u6-speech', '2.1', 'The parts of a formal address', 17, ['Writing'], [
    'An executive or formal address follows a fixed pattern: **protocol** (greetings in order of precedence), **introduction** (greeting the gathering, the occasion, the purpose), **body** (the main points, each signposted), **conclusion** (summary and call to action) and **closing** (thanks: "Thank you for your kind attention").',
    'Protocol depends on who is present: for example, "The Governor of the South West Region, the Senior Divisional Officer, the Mayor, traditional rulers, distinguished guests, ladies and gentlemen". Do not list every person by name; group them.',
    'Occasions shape the content: a **welcome address** greets guests and praises their visit; a **launch speech** presents a project and its benefits; a **prize-giving speech** reviews the year, thanks partners and challenges students; a **farewell speech** recalls shared moments.',
    'Keep paragraphs short, use the first person plural for unity, and repeat the key message. **Practice task (public orations):** write the full speech of a student president at a ceremony for social cohesion, about 400 words, with protocol and three signposted points.',
  ], 'speech-layout', 'Write the closing sentence first: it tells you where the whole speech must lead.',
  ['A welcome address mainly:', ['greets visitors and expresses the hosts’ pleasure at their presence', 'reports findings', 'records decisions', 'complains about a service'], 'Hospitality.'],
  [['Order of precedence', 'The ranking that decides who is greeted first.'], ['Welcome address', 'A speech greeting visitors to an event.'], ['Call to action', 'A closing appeal that asks the audience to do something.']],
  [
    { q: 'Write an introduction for a launch speech of a school solar-lamp project.', steps: ['Greet the gathering and name the occasion.', 'State the purpose in one sentence.', '**It is a great honour to welcome you to the launch of our solar-lamp project, which will light every classroom of our school.**'] },
    { q: 'Write a signpost for the second point of a speech on unity.', steps: ['Name the point and its order.', 'Keep it short and audible.', '**My second point concerns the role of young people in building bridges between our communities.**'] },
  ]),

  L('aen-rhet-1', 'aen-u6-speech', '2.2', 'Persuasive and emotive language', 16, ['Writing'], [
    '**Rhetorical questions** make listeners think: "How long shall we wait?" **Groups of three** (tricolon) give rhythm: "We will plan, we will build, we will succeed." **Anaphora** repeats the opening words of sentences for force.',
    '**Antithesis** sets opposites side by side: "not words but deeds". **Direct address** and **inclusive pronouns** (we, us, our) draw the audience in. **Vivid examples** and short stories make abstract ideas real.',
    '**Emotive language** stirs feelings (pride, pity, anger, hope) through word choice: "abandoned children" rather than "children without care". Use it with care: too much sounds false. **Appeals** may be to reason (facts and logic), to values (fairness, unity, patriotism) or to the speaker’s credibility.',
    'In an exam answer, name the device and explain its effect: "The rhetorical question challenges the audience to act."',
  ], 'aen-rhetoric', 'Use each device once or twice: a speech that is all devices sounds empty.',
  ['"We came, we saw, we conquered" is an example of:', ['a group of three', 'antithesis', 'a rhetorical question', 'an inversion'], 'A tricolon.'],
  [['Rhetorical device', 'A technique of language used to persuade or impress.'], ['Antithesis', 'Opposite ideas placed side by side for effect.'], ['Emotive language', 'Words chosen to stir the reader’s feelings.']],
  [
    { q: 'Rewrite with a group of three: "We need peace and we need unity."', steps: ['Add a third, related idea.', 'Keep the same pattern.', '**We need peace, we need unity, and we need hope.**'] },
    { q: 'Rewrite with antithesis: "Development needs work and should not rely on promises."', steps: ['Set two opposites in a short pattern.', 'Use "not... but".', '**Development needs not promises but work.**'] },
  ]),

  // ---------- 3. Guided summary ----------
  L('aen-gsum-1', 'aen-u6-summary', '3.1', 'Main ideas and supporting detail', 18, ['Summary'], [
    'Dense socio-economic passages mix **main ideas** with **supporting material**: examples, statistics, quotations, comparisons, restatements ("In other words..."), illustrations and the writer’s asides. Only main ideas answer a summary question.',
    'Test each sentence: does it make a **claim** about the topic (main idea), or does it **prove, illustrate or repeat** a claim (support)? "Rising food prices hurt poor families most" is a claim; "A bag of rice rose from 18 000 to 23 000 FCFA" proves it.',
    'Main ideas may be **implicit**: a paragraph of examples may lead to a point the writer never states in one sentence. Then you must express it yourself: "These examples show that small businesses depend on credit."',
    'In guided summaries, the question names the **aspect**: causes, effects, advantages, problems, solutions or the writer’s views. A main idea about another aspect does not count, however important it is.',
  ], 'aen-main-support', 'Ask "So what?" of each sentence: the answer is the main idea.',
  ['"For example, in Kumba alone, 40 shops closed" is:', ['supporting detail', 'a main idea', 'the thesis', 'a conclusion'], 'An example.'],
  [['Main idea', 'A claim that answers the question about the topic.'], ['Supporting detail', 'Material that proves, illustrates or repeats a main idea.'], ['Implicit idea', 'An idea suggested by the passage but not stated in one sentence.']],
  [
    { q: 'Find the main idea: "Taxi drivers raised fares. Market women raised prices. Even schools asked for more fees. All this followed the fuel price increase."', steps: ['The first three sentences are examples.', 'The last sentence gives the cause.', '**The fuel price increase raised the cost of many goods and services.**'] },
    { q: 'Which sentence is the claim? (a) "Youth unemployment fuels crime." (b) "Last year, 60 percent of those arrested were under 25."', steps: ['(b) gives a statistic.', 'It supports (a).', '**(a) is the claim; (b) is supporting evidence.**'] },
  ]),

  L('aen-gsum-2', 'aen-u6-summary', '3.2', 'Guided summary practice: one aspect, notes or prose', 18, ['Summary'], [
    'Step 1: underline the **aspect** and the **form** in the question: "In not more than 80 words of continuous prose, summarise the **effects** of rural exodus **on the villages**."',
    'Step 2: scan the whole passage for every point on that aspect; they may be scattered across paragraphs. Number them in the margin. Step 3: write each as a short note in your own words.',
    'Step 4: write the summary in the form asked: **note form** means numbered points without full sentences; **continuous prose** means connected sentences in one paragraph. Step 5: count the words and check each point once more against the passage.',
    '**Practice task (compressing analytical texts):** with a 400-word article on informal trade in Cameroon, write (a) the advantages of informal trade in note form, maximum 6 points, and (b) its problems in 70 words of continuous prose.',
  ], 'aen-summary-steps', 'Points on one aspect are often scattered: read to the end before you write.',
  ['"Summarise in note form" means:', ['short numbered points, not full sentences', 'one paragraph of continuous prose', 'a title', 'a table of figures'], 'As instructed.'],
  [['Aspect', 'The part of the topic a guided summary asks about.'], ['Continuous prose', 'Connected sentences forming a paragraph.'], ['Note form', 'Brief numbered points without full sentences.']],
  [
    { q: 'Turn these notes into prose of about 25 words: 1. villages lose young workers 2. farms abandoned 3. elders left alone.', steps: ['Join the points with connectives.', 'Keep to the facts given.', '**As young workers leave, villages lose their labour force, farms are abandoned, and elderly people are left without support. (19 words)**'] },
    { q: 'Write these sentences in note form: "Plastic bags block gutters, which leads to flooding. They also kill animals that swallow them."', steps: ['Keep each point, drop full sentences.', 'Number them.', '**1. Bags block gutters, causing floods. 2. Animals die from swallowing them.**'] },
  ]),

  // ---------- 4. Phrasal verbs and idioms ----------
  L('aen-phr-1', 'aen-u6-idioms', '4.1', 'Phrasal verbs: meanings and word order', 16, ['Vocabulary'], [
    'A **phrasal verb** is a verb + particle (adverb or preposition) whose meaning is often different from its parts: **give up** (stop trying), **put off** (postpone), **look after** (care for), **set up** (establish), **run out of** (have no more), **come across** (find by chance).',
    'Many have several meanings: **take off** (remove clothing; leave the ground; become successful; imitate); **make out** (see with difficulty; understand; pretend); **pick up** (lift; collect; learn informally; improve); **bring up** (raise a child; mention a subject).',
    '**Separable** phrasal verbs can take the object in the middle: "turn **the radio** off" or "turn off **the radio**"; a **pronoun must go in the middle**: "turn **it** off", never "turn off it". **Inseparable** ones keep the particle with the verb: "look **after** them", "come **across** it".',
    'In formal writing, a single word is often better: put off → **postpone**; find out → **discover**; carry out → **conduct**; go up → **increase**.',
  ], 'phrasal-meanings', 'Read the whole sentence: the context tells you which meaning of the phrasal verb is meant.',
  ['"The meeting has been put off until Friday." Put off means:', ['postponed', 'cancelled', 'discouraged', 'switched off'], 'Moved to a later time.'],
  [['Phrasal verb', 'A verb and a particle that together have a special meaning.'], ['Separable', 'A phrasal verb whose object can go between the verb and the particle.'], ['Particle', 'The adverb or preposition in a phrasal verb, such as up or off.']],
  [
    { q: 'Give the meaning of "take off" in each: (a) Her business really took off. (b) He took off his hat. (c) The plane took off late.', steps: ['(a) became successful.', '(b) removed.', '**(c) left the ground.**'] },
    { q: 'Make formal: "The police will look into the matter and find out who set it up."', steps: ['look into → investigate; find out → discover.', 'set up → organised.', '**The police will investigate the matter and discover who organised it.**'] },
  ]),

  L('aen-idiom-1', 'aen-u6-idioms', '4.2', 'Idioms and avoiding clichés', 15, ['Vocabulary'], [
    'An **idiom** is a fixed expression whose meaning cannot be worked out from its words: **bury the hatchet** (make peace), **a blessing in disguise** (a good thing that seemed bad), **cost an arm and a leg** (be very expensive), **once in a blue moon** (very rarely), **beat about the bush** (avoid the point), **turn a deaf ear** (refuse to listen).',
    'Paper 1 often tests idioms in context: read the sentence and choose the meaning that fits the situation, not the literal one.',
    'A **cliché** is an expression used so often that it has lost its force: "at the end of the day", "last but not least", "in this day and age", "since time immemorial", "as old as Methuselah". Examiners notice them in compositions.',
    'Replace clichés with **precise, fresh** language: "since time immemorial" → "for at least three generations"; "last but not least" → "finally"; "a bone of contention" → name the actual dispute.',
  ], 'aen-cliches', 'If you have read a phrase in a hundred essays, the examiner has read it in a thousand: say it your own way.',
  ['"Losing that job was a blessing in disguise." This means losing the job:', ['turned out to be good', 'was a disaster', 'was a religious event', 'was secret'], 'A hidden benefit.'],
  [['Idiom', 'A fixed expression whose meaning differs from the meanings of its words.'], ['Cliché', 'An overused expression that has lost its effect.'], ['Literal meaning', 'The basic meaning of the individual words.']],
  [
    { q: 'Rewrite without the cliché: "In this day and age, everybody has a phone."', steps: ['Replace the cliché with a precise time phrase.', 'Make the claim exact.', '**Today, most young people in our town own a mobile phone.**'] },
    { q: 'Explain in context: "The minister turned a deaf ear to the teachers’ complaints."', steps: ['Not a hearing problem.', 'He deliberately ignored them.', '**The minister refused to listen to the teachers’ complaints.**'] },
  ]),

  // ---------- 5. Business letters and memos ----------
  L('aen-bletter-1', 'aen-u6-letters', '5.1', 'Business letters and letters of complaint', 18, ['Writing'], [
    'A **business letter** has the writer’s address (or a letterhead), the date, references (Our ref / Your ref), the receiver’s title and address, the **salutation**, a **subject line** (Re: Delay in delivery of order No. 245), the body, the **complimentary close**, the signature, the writer’s name and position. In **block layout** every line starts at the left margin.',
    'Match the close to the salutation: **Dear Sir** or **Dear Sir/Madam** → **Yours faithfully**; **Dear Mr Fru** (named) → **Yours sincerely**.',
    'A **letter of complaint** (or grievance) has four parts: state the problem clearly; give the facts (dates, order numbers, what was promised and what happened); explain the effect; state the **remedy** you want and a reasonable deadline. Stay firm and courteous: anger weakens a case.',
    '**Practice task (business correspondence):** your school ordered 200 textbooks that arrived late and incomplete. Write a letter of complaint of about 300 words from the Principal to the supplier.',
  ], 'letter-formal', 'Facts persuade more than feelings: give the date, the number and the promise that was broken.',
  ['The line "Re: Faulty printer supplied on 3 March 2026" is the:', ['subject line', 'salutation', 'reference', 'complimentary close'], 'It names the topic.'],
  [['Subject line', 'A heading that states the topic of a formal letter.'], ['Block layout', 'A letter style in which every line starts at the left margin.'], ['Remedy', 'The action asked for to put a problem right.']],
  [
    { q: 'Write the opening paragraph of a complaint about a late order.', steps: ['State the purpose and the facts at once.', 'Give the order number and dates.', '**I am writing to complain about order No. 245, placed on 2 September and promised for 15 September, which has not yet been delivered.**'] },
    { q: 'State the remedy politely but firmly.', steps: ['Say what you want and by when.', 'Mention a consequence calmly.', '**I would be grateful if the books could be delivered by 30 September; otherwise, I shall have to ask for a full refund.**'] },
  ]),

  L('aen-memo-1', 'aen-u6-letters', '5.2', 'The internal memorandum', 15, ['Writing'], [
    'A **memorandum** (memo) is a short message **inside** an organisation: from the principal to staff, from a manager to a department. It has a heading block: **TO**, **FROM**, **DATE**, **SUBJECT** (or RE), often **CC** (copies to).',
    'It has **no salutation** ("Dear...") and **no complimentary close**; the writer may add initials or a signature at the end. The tone is direct and businesslike.',
    'Body: the **purpose** in the first sentence, then the details in short paragraphs or numbered points (what, when, where, who), then the **action** required and the deadline.',
    '**Practice task (corporate memos):** as the Vice Principal, write a memo to all class masters about the collection of report cards, giving the date, the procedure in three numbered points and the deadline.',
  ], 'aen-memo', 'The subject line should tell the reader the whole point in five to eight words.',
  ['Which does a memo usually lack?', ['a salutation such as "Dear Sir"', 'a subject', 'a date', 'the sender’s name'], 'It opens with the heading block.'],
  [['Memorandum', 'A short internal message within an organisation.'], ['CC', 'Copies sent to other people for information.'], ['Heading block', 'The To, From, Date and Subject lines of a memo.']],
  [
    { q: 'Write the heading block for a memo from the Principal to all staff about a fire drill on 12 March 2026.', steps: ['TO, FROM, DATE, SUBJECT, each on its own line.', 'Make the subject specific.', '**TO: All staff / FROM: The Principal / DATE: 5 March 2026 / SUBJECT: Fire drill on 12 March 2026**'] },
    { q: 'Write the first sentence of the memo.', steps: ['State the purpose immediately.', 'Include the key fact.', '**A fire drill will take place on Thursday 12 March at 10 am, and all staff are required to take part.**'] },
  ]),

  // ---------- 6. Articles and editorials ----------
  L('aen-edit-1', 'aen-u6-editorials', '6.1', 'Feature articles and editorials', 18, ['Writing'], [
    'A **feature article** explores a topic in depth for a newspaper or magazine: a **headline**, often a **standfirst** (a one-sentence summary under it), a **byline**, a **lead** that hooks the reader (an anecdote, a striking fact, a question), body paragraphs with subheadings, quotations from people involved, and an ending that echoes the opening.',
    'An **editorial** gives the **newspaper’s own opinion** on a current issue and is usually unsigned. Structure: the issue and the paper’s **stance**; the arguments with evidence; the opposing view fairly stated and answered; a **recommendation** or call to action.',
    'Both are written for the public: clear, correct, engaging, without jargon. An editorial must be **balanced** (fair to other views) yet **firm** (it takes a side).',
    '**Practice task (editorial comment):** write a 350-word editorial for a regional newspaper on "Overloaded taxis: a danger we must stop", with a clear stance and a call to action to the authorities.',
  ], 'aen-article-layout', 'Hook in the first line, stance by the end of the first paragraph.',
  ['An editorial differs from a news report because it:', ['gives the paper’s opinion and recommends action', 'only reports facts', 'is a letter', 'has no headline'], 'Opinion, not just news.'],
  [['Feature article', 'An in-depth newspaper or magazine piece on a topic.'], ['Standfirst', 'A short summary placed under a headline.'], ['Stance', 'The position a writer takes on an issue.']],
  [
    { q: 'Write a lead for a feature on women farmers.', steps: ['Open with a scene or a striking fact.', 'Lead into the topic.', '**At five every morning, while Bamenda is still asleep, Ma Ngwe is already on her farm, one of thousands of women who feed the North West.**'] },
    { q: 'Write the stance sentence for an editorial on school fees.', steps: ['Name the issue and take a side.', 'Keep it firm and fair.', '**This newspaper believes that the recent rise in school fees, however understandable, must be matched by better facilities for students.**'] },
  ]),

  L('aen-edit-2', 'aen-u6-editorials', '6.2', 'Headlines and balanced comment', 16, ['Writing'], [
    'Headlines use **short words**, the **present simple**, **no articles** and techniques such as **alliteration** ("Floods Force Families to Flee"), **questions** ("Is Our Water Safe?"), **puns** and **numbers** ("Five Ways to Save Data").',
    'A headline must be **accurate**: it should promise only what the article delivers. Sensational headlines damage trust.',
    '**Balanced comment** acknowledges other views ("Supporters of the ban argue that...") before answering them, uses evidence rather than insult, and keeps a measured tone with words such as **arguably**, **it is clear that**, **there is little doubt that**.',
    'Avoid **bias** markers: loaded words ("so-called experts"), sweeping claims ("everyone knows"), and quoting only one side.',
  ], 'aen-headlines', 'Write five headlines for every article, then keep the clearest one.',
  ['Which headline uses alliteration?', ['Bright Books for Bilingual Babies', 'Minister Visits School', 'Rain Expected Tomorrow', 'Prices Rise Again'], 'Repeated b sounds.'],
  [['Alliteration', 'The repetition of the same first sound in nearby words.'], ['Bias', 'An unfair preference for one side.'], ['Loaded word', 'A word with strong positive or negative associations.']],
  [
    { q: 'Make this headline shorter and stronger: "A Large Number of Students Have Been Successful in the GCE This Year".', steps: ['Drop articles and the perfect tense.', 'Use a short strong verb.', '**Record GCE Success for Students**'] },
    { q: 'Rewrite to remove bias: "So-called environmentalists want to stop all logging."', steps: ['Remove the loaded "so-called".', 'State the view fairly and exactly.', '**Environmental groups are calling for stricter limits on logging.**'] },
  ]),

  // ---------- 7. Word stress ----------
  L('aen-stress-1', 'aen-u6-stress', '7.1', 'Stress shift in derived words', 17, ['Speech work'], [
    'Every word of two or more syllables has a **primary stress**, said louder, longer and higher; long words may also have a **secondary stress**. In transcription, ˈ marks primary and ˌ secondary stress: /ˌedʒuˈkeɪʃn/. Some textbooks speak of a weaker third level, tertiary stress; questions mainly test where the primary stress falls.',
    'When a suffix is added, the stress may **shift**. Suffixes **-ic, -ical, -ity, -ion, -ian, -ious, -ial** put the stress on the syllable **just before** them: ˈphotograph → phoˈtography → ˌphotoˈgraphic; eˈlectric → eˌlecˈtricity; ˈpolitics → ˌpoliˈtician; ˈmystery → mysˈterious; ˈeducate → ˌeduˈcation; eˈconomy → ˌecoˈnomic.',
    'Suffixes **-ness, -ment, -ful, -less, -ly, -er** do not move the stress: ˈhappy → ˈhappiness; emˈploy → emˈployment.',
    'Stress changes vowel sounds: in phoˈtography the first o is weak /ə/, but in ˈphotograph it is full /əʊ/. Learning a word’s family with its stress helps both Paper 1 and clear speech.',
  ], 'aen-stress-shift', 'Find the suffix first: -ic, -ity, -ion or -ian means stress the syllable just before it.',
  ['Where is the primary stress in "economic"?', ['e-co-NO-mic', 'E-co-no-mic', 'e-CO-no-mic', 'e-co-no-MIC'], '-ic stresses the syllable before it.'],
  [['Primary stress', 'The strongest stress in a word.'], ['Secondary stress', 'A weaker stress before the primary stress in a long word.'], ['Stress shift', 'The movement of stress when a word changes form.']],
  [
    { q: 'Mark the stress: democrat, democracy, democratic.', steps: ['ˈdemocrat: first syllable.', 'deˈmocracy: before -cy, the second syllable.', '**ˌdemoˈcratic: before -ic, the third syllable.**'] },
    { q: 'Which word does not follow the -ion rule: (a) inforˈmation (b) ˈtelevision (c) reˈligion?', steps: ['-ion usually stresses the syllable before it.', 'Television is often stressed on the first syllable in British English.', '**(b) ˈtelevision is the common exception.**'] },
  ]),

  L('aen-stress-2', 'aen-u6-stress', '7.2', 'Noun-verb pairs, compounds and sentence stress', 16, ['Speech work'], [
    'In many two-syllable **noun and verb pairs**, the noun is stressed on the first syllable and the verb on the second: a ˈrecord / to reˈcord; a ˈpresent / to preˈsent; an ˈobject / to obˈject; a ˈprotest / to proˈtest; an ˈimport / to imˈport; a ˈcontract / to conˈtract; a ˈrebel / to reˈbel.',
    '**Compound nouns** are usually stressed on the first part: ˈblackboard, ˈgreenhouse, ˈclassroom, ˈtaxi driver. A noun phrase is stressed on the noun: a black ˈboard (any board that is black), a green ˈhouse (a house painted green).',
    'In a sentence, **content words** (nouns, main verbs, adjectives, adverbs) are stressed and **function words** (articles, prepositions, auxiliaries, pronouns) are usually weak: "I ˈwent to the ˈmarket on ˈSaturday."',
    '**Contrastive stress** moves the stress to the word that carries new or contrasting information: "I bought a ˈred dress" (not a blue one); "ˈI bought it" (not my sister). **Practice task (verbal presentation):** read a 150-word speech aloud, marking stressed words first, then record and compare.',
  ], 'stress-patterns', 'Nouns at the front, verbs at the back: ˈrecord (noun), reˈcord (verb).',
  ['In "The workers will proTEST tomorrow", protest is:', ['a verb', 'a noun', 'an adjective', 'an adverb'], 'Second-syllable stress: verb.'],
  [['Content word', 'A word that carries meaning, such as a noun or main verb, usually stressed.'], ['Function word', 'A grammatical word, such as an article or preposition, usually weak.'], ['Contrastive stress', 'Extra stress that marks new or contrasting information.']],
  [
    { q: 'Mark the stress: "They will (export) coffee; coffee is our main (export)."', steps: ['First export is a verb: exˈport.', 'Second is a noun.', '**They will exˈport coffee; coffee is our main ˈexport.**'] },
    { q: 'Where is the stress in "I didn’t say she stole it" if the meaning is "someone else said it"?', steps: ['The contrast is about who said it.', 'Stress that word.', '**"ˈI didn’t say she stole it."**'] },
  ]),

  // ---------- 8. Expository essays ----------
  L('aen-expo-1', 'aen-u6-expository', '8.1', 'Planning an expository essay', 17, ['Writing'], [
    'An **expository essay** explains: how something works, how something is done, what causes something, or what an idea means. It informs rather than persuades.',
    'Plan in four parts: an **introduction** that defines the topic and says what will be explained; **stages or aspects**, one per paragraph, in a logical order (time, cause to effect, simple to complex); **examples** that make each stage concrete; a **conclusion** that sums up and states why it matters.',
    'Define technical terms on first use ("fermentation, the process in which yeasts and bacteria break down the pulp, ..."). Keep the reader in mind: a general educated reader, not an expert.',
    'Useful structures: the present simple and the passive for processes ("The beans **are dried** in the sun"); sequence markers (**first, subsequently, once this is done, finally**); cause markers (**because, as a result, this leads to**).',
  ], 'aen-expository', 'Before writing, list the stages on one line each: if a stage needs two lines, split it.',
  ['An expository essay on "How a bill becomes law" should be organised:', ['in the order of the stages', 'by the writer’s opinions', 'as a dialogue', 'from the end to the beginning'], 'A process.'],
  [['Expository essay', 'An essay that explains a process, a system or an idea.'], ['Process', 'A series of stages that lead to a result.'], ['Definition', 'A statement of the exact meaning of a term.']],
  [
    { q: 'Write an introduction for "How cocoa beans become chocolate".', steps: ['Define the topic and set the scope.', 'Say what the essay will explain.', '**Chocolate begins as bitter beans in cocoa pods; this essay explains the stages that turn those beans into the sweet product sold in shops.**'] },
    { q: 'Order these stages: grinding, harvesting, drying, fermenting, roasting.', steps: ['Harvesting comes first.', 'Then fermenting and drying on the farm, roasting and grinding in the factory.', '**Harvesting, fermenting, drying, roasting, grinding.**'] },
  ]),

  L('aen-expo-2', 'aen-u6-expository', '8.2', 'Explaining a process in writing', 17, ['Writing'], [
    'Each body paragraph explains one stage: a topic sentence names it, the following sentences explain what happens and why, and an example or detail makes it clear. A link sentence leads to the next stage.',
    'Write **impersonally**: "The water **is filtered** to remove sand" rather than "You filter the water". Explain **reasons** with purpose phrases: **in order to**, **so that**, **to**.',
    'Technological and data workflows are explained the same way: "When a student pays fees by mobile money, the payment **is sent** to the operator, **which** then **credits** the school’s account; **as soon as** this is confirmed, the bursar’s system **records** the receipt."',
    '**Practice task (explaining workflows):** write a 400-word expository essay on "How a mobile money transfer works" or "How water is made safe to drink", with an introduction, four stages and a conclusion.',
  ], 'connectives-logic', 'Give the reason for every stage: "what" without "why" is only a list.',
  ['"The water is boiled ___ kill germs." Choose the purpose phrase.', ['in order to', 'although', 'whereas', 'despite'], 'Purpose.'],
  [['Purpose clause', 'A clause that gives the reason for an action, such as "in order to..."'], ['Impersonal style', 'Writing that focuses on actions, not on the writer or reader.'], ['Link sentence', 'A sentence that connects one paragraph to the next.']],
  [
    { q: 'Rewrite impersonally: "You put the clothes in soapy water and then you rub them."', steps: ['Use the passive.', 'Keep the sequence word.', '**The clothes are put in soapy water and then rubbed.**'] },
    { q: 'Add a purpose: "The seedlings are shaded."', steps: ['Ask why it is done.', 'Add "so that" or "to".', '**The seedlings are shaded so that the strong sun does not dry them out.**'] },
  ]),

  // ---------- 9. Argumentative essays ----------
  L('aen-refute-1', 'aen-u6-argumentative', '9.1', 'Refutation and avoiding fallacies', 17, ['Writing'], [
    'To **refute** is to show that an argument is wrong or weak. Methods: challenge the **facts** ("In fact, the figures show..."), the **logic** ("This does not follow, because..."), the **relevance** ("This is true but beside the point"), or the **consequences** ("This solution would create a worse problem").',
    'A refutation paragraph: state the opposing view fairly ("Some argue that..."), concede what is true ("Admittedly, ..."), then refute ("However, this overlooks..."), with evidence.',
    'Avoid **fallacies**: the **sweeping generalisation** ("All young people are lazy"), **attacking the person** instead of the argument, the **false choice** ("Either we ban phones or results will collapse"), the **slippery slope** (claiming one step must lead to disaster) and **appeals to popularity** ("Everyone thinks so").',
    'Transitional markers steer the reader: **admittedly, granted, it is true that** (concession); **however, nevertheless, on the contrary** (refutation); **therefore, it follows that, consequently** (conclusion).',
  ], 'aen-refutation', 'Refute the argument, never the person: name the weak point and prove it weak.',
  ['"Either we close all bars or crime will explode" is a:', ['false choice', 'fair conclusion', 'concession', 'statistic'], 'Other options exist.'],
  [['Refutation', 'Showing by reasoning that an argument is wrong or weak.'], ['Fallacy', 'An error in reasoning that makes an argument unsound.'], ['False choice', 'Presenting only two options when others exist.']],
  [
    { q: 'Refute: "Social media should be banned because it spreads fake news."', steps: ['Concede the true part.', 'Challenge the consequence: a ban punishes all users; better solutions exist.', '**Admittedly, social media spreads false stories; however, a ban would silence useful information too, whereas teaching media literacy would tackle the problem itself.**'] },
    { q: 'Identify the fallacy: "My opponent failed his driving test, so his views on road safety are worthless."', steps: ['It attacks the person.', 'It does not answer his argument.', '**An attack on the person (ad hominem).**'] },
  ]),

  L('aen-arg-2', 'aen-u6-argumentative', '9.2', 'A full argumentative essay under time', 18, ['Writing'], [
    'Under exam conditions, plan for a few minutes: write the **proposition** in your own words, decide your **stand**, list three reasons with one piece of evidence each, and note the main opposing view and your refutation.',
    'Structure: **introduction** (context, definitions, thesis); **two or three body paragraphs** (strong reason, weaker reason, strongest reason); a **refutation paragraph**; **conclusion** (restate, sum up, recommend).',
    'Style: formal register, varied sentence length, precise vocabulary, transitional markers, no clichés, and evidence that is accurate and relevant to Cameroon where possible.',
    '**Practice task (logical refutations):** in 60 minutes, write an essay on "Bilingualism is the key to national unity in Cameroon", including a refutation paragraph, then mark it against a checklist: thesis, paragraphing, evidence, refutation, conclusion, accuracy.',
  ], 'essay-structure', 'Decide your stand in the first five minutes and do not change it while writing.',
  ['The refutation paragraph is usually placed:', ['after the main arguments, before the conclusion', 'as the title', 'in the introduction only', 'after the conclusion'], 'Answer objections, then conclude.'],
  [['Proposition', 'The statement an argumentative essay must agree or disagree with.'], ['Stand', 'The position the writer takes on the proposition.'], ['Checklist', 'A list of points used to check a piece of work.']],
  [
    { q: 'Write a thesis for "Bilingualism is the key to national unity in Cameroon".', steps: ['Take a stand, possibly qualified.', 'Hint at the reasons.', '**Bilingualism is a key to national unity, because shared languages build trust, open opportunities and give every citizen a voice, though it must be joined by fair policies.**'] },
    { q: 'Write a conclusion of two sentences for that essay.', steps: ['Restate the thesis in new words.', 'End with a recommendation.', '**Speaking each other’s languages is the first step towards understanding each other. Schools, media and the state should therefore make bilingualism a daily practice, not just a policy.**'] },
  ]),
];
