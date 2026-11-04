// English Language lessons for Form 3 (first part): family
// and social life, the world of business, and health. Original text written
// for this app. **double asterisks** mark key terms; `examples` are worked
// examples. Phonetic symbols follow the International Phonetic Alphabet.

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

export const LESSONS_3A = [
  // ---------- 1. Discipline ----------
  L('en-obligation-3', 'en-f3-discipline', '2.1', 'Modals of ability and obligation', 12, ['Grammar'], [
    '**Ability**: **can** (present), **could** (past), **be able to** (all tenses): "She can play the piano." "I could swim at six." "You will be able to drive when you are eighteen."',
    '**Obligation**:\n- **must**: strong obligation, often from the speaker or a rule: "You must respect your teachers."\n- **have to**: obligation from outside (a rule, a situation): "We have to wear uniforms." Past: **had to**; future: **will have to**\n- **should / ought to**: advice or a duty: "You should apologise."\n- **must not (mustn’t)**: it is forbidden: "You mustn’t cheat."\n- **don’t have to / needn’t**: it is not necessary: "You don’t have to come on Saturday."',
    'Do not confuse **mustn’t** (forbidden) with **don’t have to** (not necessary). Modals are followed by the base form, with no -s and no "to" (except have to and ought to).',
  ], 'en3-modals-obligation', '"Mustn’t" says no; "don’t have to" says you may choose.',
  ['"You ___ run in the laboratory; it is dangerous."', ['mustn’t', 'don’t have to', 'needn’t', 'can'], 'It is forbidden.'],
  [['Obligation', 'Something you must do.'], ['Modal verb', 'A helping verb such as must, should or can that adds meaning to the main verb.']],
  [
    { q: 'Choose must, mustn’t or don’t have to: (a) "You ___ bring a calculator; the school provides one." (b) "Students ___ leave the campus without permission." (c) "You ___ obey the class rules."', steps: ['(a) not necessary → **don’t have to**', '(b) forbidden → **mustn’t**', '(c) a strong duty → **must**'] },
  ]),

  L('en-spelling-3', 'en-f3-discipline', '2.2', 'Spelling rules, plural markers and the vowels /ɪ/ and /iː/; the informal letter', 12, ['Spelling', 'Speech work', 'Writing'], [
    'Useful **spelling rules**:\n- "i before e except after c" when the sound is /iː/: believe, field, but receive, ceiling\n- drop the final silent e before a vowel suffix: hope → hoping, make → making (keep it before a consonant: hopeful)\n- double the final consonant of a short word after a short vowel: stop → stopped, run → running\n- y after a consonant becomes i: happy → happiness, carry → carried.',
    '**Plural markers**: -s (books), -es (churches, boxes), -ies (stories), -ves (knives), irregular forms (men, children, feet) and words that do not change (sheep). Numbers and words such as "many", "several" and "these" also mark the plural.',
    'Speech work: **/ɪ/** (short: sit, ship, live) and **/iː/** (long: seat, sheep, leave). **The informal letter**: your address at the top right with the date below; the greeting on the left ("Dear Mbah,"); an opening paragraph asking about the reader; the body in paragraphs; a closing paragraph; and a friendly ending ("Yours sincerely" or "Your friend") with your first name.',
  ], 'letter-informal', 'Write the date in full in letters: 3rd September 2026.',
  ['Which word is spelt correctly?', ['believe', 'beleive', 'belive', 'beleeve'], '"i before e" when the sound is /iː/ and there is no c before it.'],
  [['Plural marker', 'An ending or word that shows a noun is plural.'], ['Informal letter', 'A friendly letter to someone you know well.']],
  [
    { q: 'Correct the spelling: "We are hopeing to recieve the storys tomorrow."', steps: ['hope + ing: drop the e → **hoping**', 'after c: ei → **receive**', 'consonant + y → ies: **stories**', '"We are **hoping** to **receive** the **stories** tomorrow."'] },
  ]),

  // ---------- 2. Study skills ----------
  L('en-zero-article-3', 'en-f3-study', '3.1', 'The zero article', 10, ['Grammar'], [
    'The **zero article** means using no article at all. We use it with:\n- **plural and uncountable nouns used in general**: "Books are useful." "Knowledge is power." "Hard work brings success."\n- **most names** of people, towns, countries and continents: Mbah, Buea, Cameroon, Africa\n- **meals, days, months and languages**: "after lunch", "on Monday", "in June", "She speaks French."\n- places used for their **main purpose**: go to school, go to church, be in hospital, go to bed ("She is in hospital" means she is a patient).',
    'Compare: "I go to **school** at 7 a.m." (to study) and "My father went to **the school** to see the principal" (to the building). "**Life** is short" (life in general) but "**the life** of a farmer" (a particular life).',
  ], 'en3-zero-article', 'General idea: no article. Particular one: "the".',
  ['"___ honesty is the best policy."', ['No article', 'The', 'A', 'An'], 'An abstract noun used in general.'],
  [['Zero article', 'Using no article before a noun.'], ['Abstract noun', 'A noun for an idea or quality, such as honesty or knowledge.']],
  [
    { q: 'Correct the articles: "The education is important. My brother is in the hospital as a patient and he goes to the church on Sundays."', steps: ['education in general → **Education** is important.', 'as a patient → **in hospital**', 'for worship → **to church**'] },
  ]),

  L('en-paragraph-3', 'en-f3-study', '3.2', 'Study skills, school clubs and the good paragraph', 12, ['Reading', 'Writing'], [
    'Good **study skills**: plan a timetable; study in a quiet, bright place; read actively by underlining and making notes; use a dictionary; revise a little every day; ask questions; take short breaks; and sleep well before tests. **Co-curricular activities** (clubs such as debate, journalism, science, health and sports) build confidence, team spirit, creativity and research skills.',
    'A good **paragraph** has:\n- a **topic sentence** that states the main idea\n- **supporting sentences** with explanations, examples and details\n- a **concluding sentence** that rounds off the idea.\nIt has **unity** (one idea), **coherence** (ideas in a logical order joined with linking words) and **adequate development** (enough detail).',
    'A **word star** (or mind map) helps you plan: write the topic in the middle and draw lines to related words and ideas before you write.',
  ], 'en3-paragraph', 'Underline your topic sentence: if you cannot find it, the reader cannot either.',
  ['The sentence that introduces the main idea of a paragraph is the:', ['topic sentence', 'concluding sentence', 'supporting sentence', 'heading'], 'It is usually the first sentence.'],
  [['Topic sentence', 'The sentence that states the main idea of a paragraph.'], ['Coherence', 'The logical connection of ideas in a text.'], ['Co-curricular activity', 'An activity outside the classroom that supports learning, such as a club.']],
  [
    { q: 'Write a paragraph on the benefits of a debate club.', steps: ['Topic sentence: "**Joining a debate club has many benefits for students.**"', 'Support: "It improves their speaking skills and confidence. Members also learn to research topics and to argue with facts and respect."', 'Conclusion: "**For these reasons, every student should join a debate club.**"'] },
  ]),

  // ---------- 3. Love and etiquette ----------
  L('en-frequency-3', 'en-f3-love', '4.1', 'Adverbs of frequency; synonyms', 10, ['Grammar', 'Vocabulary'], [
    '**Adverbs of frequency** say how often: always, usually, normally, often, sometimes, occasionally, seldom, rarely, hardly ever, never. They go **before the main verb** ("We always share our food"), **after "be"** ("He is seldom angry") and **after the first auxiliary** ("She has never missed a family meeting"). Phrases such as "every day", "once a week" and "twice a month" usually go at the end.',
    '**Synonyms** are words with similar meanings: love – affection, help – assist, kind – caring, quarrel – argue, support – back up. Synonyms help us avoid repetition, but they are not always exactly the same: "big" and "large" fit most contexts, but we say "a big brother", not "a large brother".',
  ], 'en3-frequency-synonyms', 'Choose the synonym that fits the context, not just the dictionary.',
  ['"She has ___ forgotten my birthday." (not once)', ['never', 'always', 'sometimes', 'often'], 'After the auxiliary "has".'],
  [['Adverb of frequency', 'A word that tells how often something happens.'], ['Synonym', 'A word with the same or nearly the same meaning as another.']],
  [
    { q: 'Put the adverb in the right place: (a) "My father is calm." (usually) (b) "We visit our grandmother." (once a month)', steps: ['(a) after "is": **"My father is usually calm."**', '(b) a phrase goes at the end: **"We visit our grandmother once a month."**'] },
  ]),

  L('en-context-3', 'en-f3-love', '4.2', 'Meaning of words in context; love, support and table etiquette', 12, ['Reading', 'Vocabulary', 'Listening'], [
    'To find the **meaning of a word in context**, use clues in the passage: a **definition** given nearby ("an orphan, a child whose parents have died"), a **synonym** or **antonym** ("She was not timid but bold"), an **example**, or the general sense of the sentence. Then test your meaning by putting it in place of the word.',
    '**Love** in a family is shown by sharing, caring for the sick and elderly, encouraging one another, forgiving and spending time together. Support is practical (money, food, help with work) and emotional (listening, comforting).',
    '**Table etiquette**: wait to be served or for the eldest to begin; use cutlery properly; chew quietly with the mouth closed; do not talk with food in your mouth; ask for things to be passed; keep elbows off the table; and when you finish, place your knife and fork together on the plate and thank the cook.',
  ], 'en3-context-clues', 'Replace the word with your guess: if the sentence still makes sense, your guess is probably right.',
  ['"He was so generous that he gave away half his salary." "Generous" means:', ['willing to give', 'angry', 'poor', 'lazy'], 'The rest of the sentence explains it.'],
  [['Context', 'The words and sentences around a word that help explain it.'], ['Etiquette', 'The rules of polite behaviour.']],
  [
    { q: 'Find the meaning from context: "The old man was frail; he could hardly lift a cup or walk to the door."', steps: ['Clues: could hardly lift a cup, could hardly walk.', 'These show weakness.', '**"Frail" means weak, physically delicate.**'] },
  ]),

  // ---------- 4. Teenage problems ----------
  L('en-compare-3', 'en-f3-teenage', '5.1', 'Comparatives and superlatives; compound words', 12, ['Grammar', 'Vocabulary'], [
    '**Comparatives** compare two things; **superlatives** compare three or more:\n- one-syllable adjectives add -er, -est: tall, taller, the tallest; big, bigger, the biggest\n- two-syllable adjectives ending in y: happy, happier, the happiest\n- longer adjectives use **more / most**: difficult, more difficult, the most difficult\n- irregular: good, better, best; bad, worse, worst; far, farther/further, farthest/furthest; little, less, least; much/many, more, most.',
    'Use **than** after comparatives ("She is older than her brother") and **the** before superlatives ("the most serious problem"). Never double them: "more taller" and "most tallest" are wrong. Equal comparison: "as … as" ("He is as tall as his father").',
    '**Compound words** join two words: classroom, football, homework, teenage, self-control, mother-in-law, peer pressure. They may be written as one word, with a hyphen, or as two words.',
  ], 'en3-comparison', 'Two things: -er or more. Three or more: -est or most.',
  ['"Adolescence is ___ period of change in life." (great)', ['the greatest', 'the most great', 'greater', 'the greater'], 'A superlative with "the".'],
  [['Comparative', 'The form of an adjective used to compare two things.'], ['Superlative', 'The form of an adjective used to compare three or more things.'], ['Compound word', 'A word formed by joining two words.']],
  [
    { q: 'Correct: "Puberty is more harder for some teenagers than for others, and it is the most fastest period of growth."', steps: ['"more harder" → **harder**', '"the most fastest" → **the fastest**', '"Puberty is **harder** for some teenagers than for others, and it is **the fastest** period of growth."'] },
  ]),

  L('en-puberty-3', 'en-f3-teenage', '5.2', 'Puberty and teenage problems; a debate and a four-paragraph essay', 12, ['Vocabulary', 'Speaking', 'Writing'], [
    '**Puberty** is the stage when a child’s body becomes an adult’s, usually between about 8 and 14 years of age. Changes include growth spurts, the voice deepening in boys, the start of menstruation in girls, body hair, pimples and strong emotions. Common **teenage problems**: mood swings, peer pressure, conflicts with parents, drugs and alcohol, early relationships and pregnancy, and low self-esteem.',
    'Healthy responses: talk to parents, teachers or counsellors; choose good friends; practise **self-control** and **abstinence**; keep busy with studies, sports and clubs; and respect your body and others. Attitudes: awareness, prudence and respect.',
    'A **four-paragraph essay** on "Possible solutions to puberty crises": (1) **introduction**: define puberty and state the problem; (2) and (3) **body**: one main solution in each paragraph with explanation and examples; (4) **conclusion**: sum up and give advice. In a **debate**, the proposition argues for the motion and the opposition against it.',
  ], 'en3-essay-plan', 'Plan all four paragraphs before you start writing.',
  ['Peer pressure is:', ['influence from people of your own age to act in a certain way', 'pressure from the weather', 'a school rule', 'pressure from teachers only'], 'It can be positive or negative.'],
  [['Puberty', 'The stage of life when a child’s body develops into an adult’s.'], ['Self-control', 'The ability to control one’s feelings and actions.'], ['Peer pressure', 'Influence from people of the same age.']],
  [
    { q: 'Plan a four-paragraph essay: "How teenagers can cope with puberty".', steps: ['Para 1: what puberty is; why it can be difficult.', 'Para 2: **talk to trusted adults** (parents, counsellors) about changes and feelings.', 'Para 3: **choose good friends and stay busy** with studies, sports and clubs.', 'Para 4: conclusion: puberty is normal; with support and self-control it can be a positive time.'] },
  ]),

  // ---------- 5. Violence ----------
  L('en-suggest-3', 'en-f3-violence', '6.1', 'Making suggestions with modals; the sounds /ts/ and /s/', 10, ['Grammar', 'Speech work'], [
    'Ways to **make suggestions**:\n- **should / could / might**: "We should report it." "You could talk to the counsellor."\n- **Let’s** + base form: "Let’s form a peace club."\n- **Why don’t we / you** + base form: "Why don’t we invite a police officer to speak?"\n- **How about / What about** + -ing: "How about organising a campaign?"\n- **Shall we** + base form?: "Shall we write to the principal?"',
    'Replies: "That’s a good idea." "I agree." "I’m not sure that will work, because …"',
    'Speech work: **/ts/** at the end of words (cats, gets, shirts, it’s) contrasts with **/s/** (kiss, bus, face). Compare: hits – hiss, mats – mass, lets – less. Pronounce the /t/ clearly before the /s/.',
  ], 'en3-suggestions', 'After "how about", use the -ing form.',
  ['"How about ___ a peace march?"', ['organising', 'organise', 'to organise', 'organised'], '"How about" + -ing.'],
  [['Suggestion', 'An idea or plan put forward for others to consider.']],
  [
    { q: 'Make three suggestions to reduce violence in your school, using different structures.', steps: ['"**We should** create a peace club."', '"**Let’s** invite a police officer to talk to us."', '"**How about** organising sports competitions to bring students together?"'] },
  ]),

  L('en-report-3', 'en-f3-violence', '6.2', 'Youth, violence and safety; writing a report', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'Words about **crime and violence**: crime, criminal, violence, assault, theft, robbery, weapon, gun, machete, gang, militia, victim, witness, suspect, police, arrest, court, chaos. Causes of youth violence include drugs, bad company, violent films and games, poverty, family problems and the easy availability of weapons.',
    'Prevention: guidance and counselling, clubs and sports, controlling weapons, good examples at home, and reporting threats to teachers, parents or the police. Attitudes: prudence, attention and sensitisation of the community.',
    'A **report** gives facts in an organised way: a **title** ("Report on violence in our school"); an **introduction** (who asked for it, why and when); **findings** (what happened, causes, effects), often under subheadings; **recommendations** (what should be done); and the writer’s **name, position and date**.',
  ], 'en3-report', 'Keep a report factual: say what you saw, not what you imagine.',
  ['A person suspected of a crime but not yet proved guilty is a:', ['suspect', 'witness', 'victim', 'judge'], 'The court decides if the suspect is guilty.'],
  [['Report', 'An organised, factual account of an event or situation.'], ['Victim', 'A person harmed by a crime or accident.'], ['Recommendation', 'A suggestion about what should be done.']],
  [
    { q: 'Write the recommendations part of a report on fights in your school.', steps: ['"**We recommend that:**"', '"1. a peace and discipline club be created;"', '"2. every fight be reported to the discipline master at once;"', '"3. the guidance counsellor talk to each class once a term."'] },
  ]),

  // ---------- 6. Business ----------
  L('en-reported-3', 'en-f3-business', '10.1', 'Reported speech', 12, ['Grammar'], [
    '**Direct speech** gives the speaker’s exact words in quotation marks: "I am opening a shop," said Ayuk. **Reported (indirect) speech** reports them without quotation marks: Ayuk said that he was opening a shop.',
    'Changes when the reporting verb is in the past (said, told):\n- **tenses move back**: present → past (am → was), past → past perfect (sold → had sold), will → would, can → could\n- **pronouns** change to fit the speaker: I → he/she, we → they, my → his/her\n- **time and place words** change: now → then, today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that.',
    'Use **say** without an object ("She said that …") and **tell** with an object ("She told me that …").',
  ], 'en3-reported-speech', 'Say something; tell somebody.',
  ['"I sold my goods yesterday," the trader said. Reported:', ['The trader said that he had sold his goods the day before.', 'The trader said that I sold my goods yesterday.', 'The trader told that he sells his goods.', 'The trader said he sold his goods tomorrow.'], 'Past → past perfect; yesterday → the day before.'],
  [['Direct speech', 'The exact words of a speaker, in quotation marks.'], ['Reported speech', 'An account of what someone said, without quotation marks.']],
  [
    { q: 'Report: "We will open a bakery here next month," the women said.', steps: ['will → **would**; we → **they**', 'here → **there**; next month → **the following month**', '**The women said that they would open a bakery there the following month.**'] },
  ]),

  L('en-narrative-3', 'en-f3-business', '10.2', 'Business and occupations; the vowels /ɒ/ and /ə/; the narrative essay', 12, ['Vocabulary', 'Speech work', 'Writing'], [
    'Words about **business**: trade, commerce, industry, entrepreneur, enterprise, capital, profit, loss, customer, supplier, market, advertisement, partnership, business acumen (skill in business), hard work. Occupations: trader, banker, accountant, mechanic, tailor, engineer, doctor, lawyer, farmer.',
    'Speech work: **/ɒ/** is a short rounded vowel (shop, job, profit, office); **/ə/** is the weak schwa in unstressed syllables: about /əˈbaʊt/, account /əˈkaʊnt/, doctor /ˈdɒktə/, business /ˈbɪznəs/.',
    'The **writing process**: (1) plan: brainstorm and outline; (2) draft; (3) revise (improve ideas and order); (4) edit (grammar, spelling, punctuation); (5) write the final copy. A **narrative essay** tells a story: an introduction that sets the scene, a series of events in time order leading to a climax, and a conclusion, usually in the past tense with dialogue and description.',
  ], 'en3-writing-process', 'In a narrative, the climax is the most exciting moment: build up to it.',
  ['Which word has the short vowel /ɒ/?', ['job', 'joke', 'jug', 'June'], '"Job" is said /dʒɒb/.'],
  [['Entrepreneur', 'A person who starts and runs a business.'], ['Narrative essay', 'An essay that tells a story.'], ['Climax', 'The most exciting or important point of a story.']],
  [
    { q: 'Outline a narrative essay titled "How I started my small business".', steps: ['Introduction: the holidays, little money, an idea to sell roasted groundnuts.', 'Events: borrowing 5 000 FCFA, buying groundnuts, roasting and packing, selling at the motor park.', 'Climax: a rainstorm soaks the stock on a market day.', 'Conclusion: lessons learnt, the profit made and plans for next year.'] },
  ]),

  // ---------- 7. Banking ----------
  L('en-passive-3', 'en-f3-banking', '11.1', 'The active and passive voice', 12, ['Grammar'], [
    'In the **active voice** the subject does the action ("The bank **grants** loans"); in the **passive voice** the subject receives it ("Loans **are granted** by the bank"). The passive is formed with **be** in the tense of the active verb + the **past participle**.',
    'Tenses: simple present: is/are paid; present continuous: is being paid; simple past: was/were paid; present perfect: has/have been paid; future: will be paid; with modals: must be paid, can be paid.',
    'Use the passive when the doer is unknown, obvious or less important ("Taxes must be paid on time"), and in formal and scientific writing. With verbs that have two objects, either can become the subject: "The bank gave **him** a loan" → "**He** was given a loan."',
  ], 'passive-tenses', 'Keep the tense of the active verb when you form "be".',
  ['The passive of "The cashier has counted the money" is:', ['The money has been counted by the cashier.', 'The money has counted the cashier.', 'The money was count by the cashier.', 'The cashier has been counted.'], 'Present perfect passive: has been + past participle.'],
  [['Passive voice', 'The form in which the subject receives the action.'], ['Past participle', 'The verb form used after "have" and "be": paid, given, counted.']],
  [
    { q: 'Change into the passive: (a) "Customers deposit money every day." (b) "The manager will open a new branch."', steps: ['(a) present: **"Money is deposited by customers every day."**', '(b) future: **"A new branch will be opened by the manager."**'] },
  ]),

  L('en-summary-3', 'en-f3-banking', '11.2', 'Banks, money and saving; writing a summary', 14, ['Vocabulary', 'Reading', 'Writing'], [
    'Words about **banking and money**: bank, account (savings account, current account), deposit, withdraw, loan, interest, cheque, ATM, mobile money, income, expenditure, budget, savings, debt, tax, tax evasion. Banks keep money safe, lend to businesses and families, and help people make payments. In Cameroon, mobile money services also let people send and save money by phone.',
    'Good money habits: make a **budget**, spend less than you earn, save a part of every income, avoid unnecessary debt, and keep your PIN secret.',
    'Writing a **summary** (for example in about 150 words): (1) read the passage carefully to understand it; (2) underline the main points and leave out examples, repetitions and details; (3) write the points in your own words, in full sentences joined with linking words; (4) count the words and check that the meaning has not changed. Do not add your own opinions.',
  ], 'en3-summary', 'A summary keeps the ideas but changes the words.',
  ['To take money out of your bank account is to:', ['withdraw', 'deposit', 'invest', 'borrow'], 'To put money in is to deposit.'],
  [['Summary', 'A short account of the main points of a passage.'], ['Interest', 'Money paid for borrowing money, or earned on savings.'], ['Budget', 'A plan for spending money.']],
  [
    { q: 'Summarise in one sentence: "Banks keep people’s money safe from thieves and fire. They also lend money to traders and farmers so that they can grow their businesses. In addition, banks help people pay bills and transfer money."', steps: ['Main points: keep money safe; lend to businesses; help with payments.', 'Leave out details such as "thieves and fire".', '**Banks keep money safe, lend to businesses and help people make payments.**'] },
  ]),

  // ---------- 8. Time management ----------
  L('en-telltime-3', 'en-f3-time', '14.1', 'Telling the time and writing numbers', 10, ['Grammar', 'Vocabulary'], [
    '**Telling the time**: 7.00 seven o’clock; 7.05 five past seven; 7.15 a quarter past seven; 7.30 half past seven; 7.45 a quarter to eight; 7.50 ten to eight. We can also say the digits: "seven forty-five". For the 24-hour clock: 19.30 is "nineteen thirty" (7.30 p.m.). a.m. is before midday and p.m. after.',
    '**Numbers in words**: 21 twenty-one (hyphen); 105 one hundred and five; 1 250 one thousand two hundred and fifty; 2 000 000 two million. Ordinals: first, second, third, twenty-fifth. Ages: a teenager (13 to 19), a quadragenarian (40s), an octogenarian (80s), a centenarian (100 or more).',
  ], 'en3-time', 'Past the hour up to 30 minutes; to the next hour after 30.',
  ['9.40 is said:', ['twenty to ten', 'twenty past nine', 'forty to nine', 'half past nine'], '40 minutes past = 20 minutes to the next hour.'],
  [['a.m.', 'Before midday.'], ['p.m.', 'After midday.'], ['Octogenarian', 'A person in their eighties.']],
  [
    { q: 'Write in words: (a) 6.15 (b) 14.50 (c) 3 405', steps: ['(a) **a quarter past six**', '(b) **ten to three in the afternoon** (fourteen fifty)', '(c) **three thousand four hundred and five**'] },
  ]),

  L('en-timemanage-3', 'en-f3-time', '14.2', 'Managing time; time bandits', 12, ['Reading', 'Writing'], [
    '**Time management** means planning how to use time well. Steps: list your tasks; set **priorities** (do the most important and urgent first); make a **timetable** for study, rest and chores; break big tasks into small steps; avoid putting things off (**procrastination**); and review your plan each week.',
    '**Time bandits** are things that steal our time: endless chatting and social media, too much television, poor planning, untidiness (searching for lost things), and saying yes to everything. Being **punctual** (on time) and **assiduous** (steady and hard-working) shows duty consciousness and respect for others.',
    'Writing short paragraphs on the **advantages of effective time management**: less stress, better results, more free time, a good reputation, and meeting deadlines. Begin each paragraph with a clear topic sentence.',
  ], 'en3-timetable', 'Do the hardest important task first, while your mind is fresh.',
  ['Putting off tasks until later is called:', ['procrastination', 'punctuality', 'assiduity', 'planning'], 'It wastes time.'],
  [['Priority', 'Something that is more important and must be done first.'], ['Procrastination', 'Delaying or putting off tasks.'], ['Punctual', 'On time.']],
  [
    { q: 'Write a paragraph on one advantage of time management.', steps: ['Topic sentence: "**Good time management reduces stress.**"', 'Support: "When students plan their revision, they do not need to rush the night before an exam. They sleep well and remember more."', 'Conclusion: "Planning time therefore brings peace of mind and better marks."'] },
  ]),

  // ---------- 9. Agriculture ----------
  L('en-continuous-3', 'en-f3-agriculture', '15.1', 'The present continuous tense; silent p and b', 10, ['Grammar', 'Speech work'], [
    'The **present continuous** (am/is/are + verb-ing) describes actions happening **now** ("The farmers are harvesting cocoa"), temporary situations ("My uncle is working in Kumba this year") and fixed future plans ("We are planting maize next week"). Spelling: make → making, plant → planting, dig → digging, lie → lying.',
    'Verbs of state (know, like, love, want, believe, own, seem) are not usually used in the continuous: "I know the answer", not "I am knowing".',
    'Speech work: some letters are **silent**:\n- silent **b** after m and before t: climb, lamb, tomb, debt, doubt\n- silent **p** at the start before s, n or t: psychology, pneumonia, receipt (silent p in the middle).',
  ], 'silent-letters', 'Look for "now", "at the moment" or "Look!": they call for the present continuous.',
  ['"Listen! The children ___ in the farm."', ['are singing', 'sing', 'sang', 'sings'], 'An action happening now.'],
  [['Present continuous', 'The tense for actions in progress now, formed with am/is/are + -ing.'], ['Silent letter', 'A letter that is written but not pronounced.']],
  [
    { q: 'Put the verbs in the correct tense: "At the moment my father (spray) the cocoa farm while my mother (dry) the beans."', steps: ['"At the moment" → present continuous.', 'spray → **is spraying**', 'dry → **is drying**'] },
  ]),

  L('en-process-3', 'en-f3-agriculture', '15.2', 'Forms of agriculture; describing a process', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'Forms of **agriculture**: crop farming (food crops such as maize, cassava and plantains; **cash crops** such as cocoa, coffee, cotton, rubber, tea and bananas); **pisciculture** (fish farming); **aviculture** (rearing birds such as poultry); **horticulture** (fruit, vegetables and flowers); apiculture (bee-keeping); and livestock rearing. Cameroon is one of Africa’s major cocoa producers.',
    '**Describing a process** (for example growing and marketing cocoa): give the stages in order with sequence words (first, next, then, after that, finally) and often the **passive voice**: "First, the seeds are planted in a nursery. After about six months, the seedlings are transplanted to the farm. The trees are weeded and sprayed. When the pods ripen, they are harvested, broken open, and the beans are fermented and dried before they are sold to buyers."',
    'Attitudes: hard work, effort and business acumen. A good farmer keeps records of costs and sales to know the profit.',
  ], 'en3-process', 'Use the passive in a process: the focus is on what is done, not who does it.',
  ['Keeping bees for honey is called:', ['apiculture', 'aviculture', 'pisciculture', 'horticulture'], 'Apis is Latin for bee.'],
  [['Cash crop', 'A crop grown mainly for sale.'], ['Pisciculture', 'Fish farming.'], ['Aviculture', 'The rearing of birds such as poultry.']],
  [
    { q: 'Rewrite these steps as a paragraph using sequence words and the passive: plant seeds; transplant seedlings; weed and spray; harvest pods; ferment and dry beans; sell.', steps: ['"**First**, the seeds **are planted** in a nursery.', '**Then** the seedlings **are transplanted** to the farm, **where** they **are weeded** and **sprayed**.', '**When** the pods ripen, they **are harvested**.', '**Next**, the beans **are fermented** and **dried**, and **finally** they **are sold**."'] },
  ]),

  // ---------- 10. Transport ----------
  L('en-whq-3', 'en-f3-transport', '16.1', 'Wh- questions; the diphthongs /eɪ/ and /aɪ/; homophones', 10, ['Grammar', 'Speech work', 'Vocabulary'], [
    '**Wh- questions** ask for information: what, which, who, whom, whose, where, when, why, how, how long, how far, how much, how many, how often. Order: wh- word + auxiliary + subject + verb ("How long does the journey take?"). If the wh- word is the subject, there is no auxiliary ("Who drives the bus?").',
    'Speech work: **/eɪ/** (train, plane, safe, day) and **/aɪ/** (bike, ride, flight, high). Compare: lane – line, plate – plight, wait – white.',
    '**Homophones** about travel: plane – plain, road – rode, fare (price of a journey) – fair, brake (to stop) – break, sail – sale, weight – wait.',
  ], 'en3-transport', 'Check the spelling of homophones by their meaning: a fare is paid; a fair is visited.',
  ['"The bus ___ to Bamenda is 5 000 FCFA."', ['fare', 'fair', 'fear', 'far'], 'The price of a journey is the fare.'],
  [['Homophone', 'A word that sounds like another but has a different meaning and spelling.'], ['Fare', 'The money paid for a journey.']],
  [
    { q: 'Write wh- questions for the answers: (a) "By train." (b) "About four hours." (c) "Because the road is bad."', steps: ['(a) **How did you travel?**', '(b) **How long does the journey take?**', '(c) **Why did you not go by bus?**'] },
  ]),

  L('en-transport-3', 'en-f3-transport', '16.2', 'Means of transport and road safety; the formal letter and editing', 14, ['Speaking', 'Reading', 'Writing'], [
    '**Means of transport**: road (cars, buses, taxis, motorbikes, lorries), rail (trains run by CAMRAIL between Douala, Yaoundé and Ngaoundéré), water (canoes, ferries, ships at the ports of Douala and Kribi) and air (aeroplanes at airports such as Douala and Yaoundé-Nsimalen). Each has advantages (speed, cost, capacity) and disadvantages (accidents, delays, pollution).',
    '**Road safety**: obey traffic lights and signs, use pedestrian crossings, wear helmets and seat belts, do not overload vehicles, never drink and drive, and keep vehicles in good condition. Attitudes: caution, diligence and prudence.',
    'A **formal letter** (for example to the Mayor about a dangerous road): your address and the date at the top right; the receiver’s title and address on the left; "Dear Sir," or "Dear Madam,"; an underlined subject line; the body in paragraphs (purpose, details, request); "Yours faithfully," with your signature and full name. **Edit** it before the final copy: check spelling, grammar, punctuation, paragraphing and politeness.',
  ], 'letter-formal', 'Edit in two readings: one for meaning, one for mistakes.',
  ['A formal letter that begins "Dear Sir," ends with:', ['Yours faithfully,', 'Yours lovingly,', 'Bye,', 'Your friend,'], '"Yours faithfully" when you do not know the receiver’s name.'],
  [['Means of transport', 'A way of travelling or carrying goods, such as road, rail, water or air.'], ['Editing', 'Checking and correcting a piece of writing.']],
  [
    { q: 'Edit this sentence from a formal letter: "i am writting to complain about the bad road wich cause many accident."', steps: ['capital I: **I**', 'writing (one t): **writing**', 'which: **which**', 'subject–verb agreement: **causes**; plural: **accidents**', '**"I am writing to complain about the bad road, which causes many accidents."**'] },
  ]),

  // ---------- 11. Health and hygiene ----------
  L('en-demonstrative-3', 'en-f3-diseases', '19.1', 'Demonstrative pronouns', 10, ['Grammar'], [
    '**Demonstrative pronouns** point to things and stand alone: **this** (singular, near), **these** (plural, near), **that** (singular, far), **those** (plural, far). "**This** is my vaccination card." "**Those** are the new mosquito nets."',
    'When the same words come before a noun, they are **demonstrative adjectives**: "**This** card is mine." They agree in number with the noun: "this disease", "these diseases".',
    'We also use them for time: "**this** week" (now), "**that** year" (in the past), and to refer back to an idea: "Wash your hands often. **This** prevents many diseases."',
  ], 'en1-demonstratives', 'Near: this, these. Far: that, those.',
  ['"___ are the symptoms we studied yesterday." (pointing to the board far away)', ['Those', 'This', 'These', 'That'], 'Plural and far.'],
  [['Demonstrative pronoun', 'A pronoun that points to something: this, that, these, those.']],
  [
    { q: 'Choose this, that, these or those: "(Pointing to tablets in your hand) ___ are for malaria. (Pointing to a poster across the room) ___ poster explains how HIV spreads."', steps: ['plural, near → **These**', 'singular, far → **That**'] },
  ]),

  L('en-diseases-3', 'en-f3-diseases', '19.2', 'Hygiene, infectious diseases, immunisation and sex education', 14, ['Vocabulary', 'Listening', 'Reading', 'Writing'], [
    '**Infectious diseases** spread from person to person or through water, food, air, insects or body fluids: malaria (mosquitoes), cholera and typhoid (dirty water and food), tuberculosis and whooping cough (coughing), polio and measles, and HIV. Many are prevented by **immunisation** (vaccination): Cameroon’s Expanded Programme on Immunisation protects children against diseases such as polio, measles, whooping cough, diphtheria and tetanus.',
    '**HIV** (the virus that causes AIDS) spreads through unprotected sex, infected blood and sharp objects, and from mother to child; it is **not** spread by shaking hands, sharing a classroom or mosquito bites. Prevention: abstinence, faithfulness, not sharing needles or blades, and testing. **Sex education** helps young people understand their bodies, delay sex, respect others and protect their health.',
    'Writing about a disease: give its **cause**, how it **spreads**, its **signs and symptoms** (fever, cough, diarrhoea, rash), its **treatment** and its **prevention**. Attitudes: awareness, prudence and safety.',
  ], 'en3-diseases', 'Hygiene and vaccines prevent more diseases than medicines cure.',
  ['Which is NOT a way HIV spreads?', ['Shaking hands', 'Unprotected sex', 'Sharing infected needles', 'From mother to child'], 'Casual contact does not spread HIV.'],
  [['Immunisation', 'Protection against a disease, usually by a vaccine.'], ['Infectious disease', 'A disease that can spread from one person to another.'], ['Abstinence', 'Choosing not to have sex.']],
  [
    { q: 'Write a paragraph on the signs, spread and prevention of cholera.', steps: ['Cause and spread: "**Cholera is caused by germs in dirty water and food.**"', 'Signs: "It causes severe watery diarrhoea and vomiting, which quickly dry out the body."', 'Prevention: "We can prevent it by drinking boiled or treated water, washing hands with soap and keeping toilets clean."'] },
  ]),

  // ---------- 12. Food and health ----------
  L('en-relative-3', 'en-f3-nutrition', '20.1', 'Relative pronouns; the sounds /s/ and /z/', 10, ['Grammar', 'Speech work'], [
    '**Relative pronouns** begin a clause that describes a noun: **who** (people, subject), **whom** (people, object, formal), **whose** (possession), **which** (things and animals), **that** (people or things in defining clauses), and **where** (places) and **when** (times) as relative adverbs.',
    'Examples: "The doctor **who** treated me is kind." "The nurse **whom** we thanked was smiling." "The girl **whose** mother is a dietician eats well." "Fruits, **which** contain vitamins, protect the body." "This is the market **where** we buy vegetables."',
    'Speech work: **/s/** (salt, rice, price) and **/z/** (zinc, nose, eggs). The letter s between vowels is often /z/: rose, choose, music. The noun "use" ends in /s/ but the verb "to use" ends in /z/.',
  ], 'pronoun-types', 'Use "whose" for possession: never "who’s" (= who is).',
  ['"The farmer ___ yams we bought lives nearby."', ['whose', 'who', 'which', 'who’s'], 'The yams belong to the farmer.'],
  [['Relative pronoun', 'A word that begins a clause describing a noun.'], ['Relative clause', 'A clause that tells us more about a noun.']],
  [
    { q: 'Join with a relative pronoun: (a) "This is the hospital. I was born there." (b) "I met a boy. His father is a cook."', steps: ['(a) a place → **"This is the hospital where I was born."**', '(b) possession → **"I met a boy whose father is a cook."**'] },
  ]),

  L('en-food-classes-3', 'en-f3-nutrition', '20.2', 'Classes of food and health; cognates; picture writing', 12, ['Vocabulary', 'Speaking', 'Writing'], [
    'The **classes of food**: **carbohydrates** (rice, maize, cassava, yams, bread) give energy; **proteins** (beans, groundnuts, fish, eggs, meat, milk) build and repair the body; **fats and oils** (palm oil, butter, avocado) give energy and warmth; **vitamins** and **minerals** (fruits, vegetables, salt in small amounts) protect the body; **water** and **roughage** (fibre) help digestion. A **balanced diet** contains all of them in the right amounts.',
    'Poor diet causes **malnutrition**: kwashiorkor (lack of protein), obesity (too much food and fat), anaemia (lack of iron) and scurvy (lack of vitamin C).',
    '**Cognates** are words that look alike and mean the same in two languages, such as English and French: hospital – hôpital, banana – banane, protein – protéine, vitamin – vitamine. Beware of **false friends**: "library" is not "librairie" (a bookshop). In **picture writing**, describe what you see in an order (foreground, background), then say what the picture teaches.',
  ], 'en3-classes-food', 'Fill half your plate with vegetables and fruit.',
  ['Kwashiorkor is caused by a lack of:', ['protein', 'water', 'fat', 'sugar'], 'Protein builds the body.'],
  [['Balanced diet', 'A diet with the right amounts of all classes of food.'], ['Malnutrition', 'Poor health caused by a bad diet.'], ['Cognate', 'A word that looks and means the same in two languages.']],
  [
    { q: 'Classify: plantain, beans, palm oil, oranges, fish, cassava.', steps: ['Carbohydrates: **plantain, cassava**', 'Proteins: **beans, fish**', 'Fats and oils: **palm oil**', 'Vitamins: **oranges**'] },
  ]),
];
