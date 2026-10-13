// English Language lessons for Form 4, term 1: family and social life, and
// economic life and occupations. Original text written for this app.
// **double asterisks** mark key terms; `examples` are worked examples.
// Phonetic symbols follow the International Phonetic Alphabet.

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

export const LESSONS_4A = [
  // ---------- Family and conflict ----------
  L('en-pronouns-4', 'en-f4-family', '1.1', 'Personal, possessive and relative pronouns', 12, ['Grammar'], [
    'A **pronoun** stands in place of a noun. **Personal pronouns** have a subject form and an object form:\n- subject: I, you, he, she, it, we, they ("**She** called her brother.")\n- object: me, you, him, her, it, us, them ("Her brother called **her**.").\nAfter a preposition use the object form: "between you and **me**", not "between you and I".',
    '**Possessive** words show ownership. Possessive adjectives come before a noun: my, your, his, her, its, our, their ("**my** book"). **Possessive pronouns** stand alone: mine, yours, his, hers, its, ours, theirs ("The book is **mine**."). "Its" (belonging to it) has no apostrophe; "it’s" means "it is".',
    '**Relative pronouns** begin a clause that tells us more about a noun:\n- **who** for people as the subject ("the uncle **who** settled the quarrel")\n- **whom** for people as the object, mainly in formal English ("the elder **whom** we consulted")\n- **whose** for possession ("the boy **whose** bicycle was stolen")\n- **which** for things and animals ("the land **which** caused the dispute")\n- **that** for people or things in a defining clause ("the rule **that** everyone must obey").',
  ], 'pronoun-types', 'To choose "who" or "whom", try he/him: if "him" fits, use "whom".',
  ['"The elder ___ advice we followed is very wise."', ['whose', 'who', 'whom', 'which'], 'The advice belongs to the elder.'],
  [['Pronoun', 'A word used in place of a noun.'], ['Possessive pronoun', 'A pronoun that shows ownership and stands alone: mine, yours, hers, ours, theirs.'], ['Relative pronoun', 'A pronoun that begins a clause describing a noun: who, whom, whose, which, that.']],
  [
    { q: 'Correct the pronouns: "Me and my brother visited our aunt. The present was for she and I."', steps: ['"Me and my brother" is the subject, so it must be "My brother and I".', '"For" is a preposition, so the object forms follow: "for her and me".', 'Correct sentence: **"My brother and I visited our aunt. The present was for her and me."**'] },
    { q: 'Join with a relative pronoun: "I met the woman. Her son is my classmate."', steps: ['"Her son" shows possession, so use "whose".', '**"I met the woman whose son is my classmate."**'] },
  ]),

  L('en-kinship-4', 'en-f4-family', '1.2', 'Kinship, disputes and mediation; listening for gist', 12, ['Vocabulary', 'Listening'], [
    '**Kinship** words name family relationships: parents, siblings, grandparents, uncle, aunt, cousin, nephew (your brother’s or sister’s son), niece (their daughter), in-laws (the family of your husband or wife), step-mother or step-father (a parent’s new spouse). The **extended family** includes all these relatives; the **nuclear family** is parents and their children.',
    'Families and communities sometimes face **disputes** (disagreements) over land, inheritance, money or behaviour. Useful words: quarrel, misunderstanding, grievance (a complaint), compromise (each side gives up something), **mediation** (a neutral person, the **mediator**, helps both sides agree), reconciliation (becoming friends again), and apology.',
    '**Listening for gist** means listening for the general idea, not every word. Before you listen, look at the title or question; while listening, note who is speaking, what the problem is and how it ends; after listening, sum it up in one sentence. Listening for **detail** comes later, when you need names, numbers or exact reasons.',
  ], 'pronoun-types', 'In a listening task, read the questions before the recording starts.',
  ['Your brother’s daughter is your:', ['niece', 'nephew', 'cousin', 'aunt'], 'Your brother’s son would be your nephew.'],
  [['Kinship', 'Relationship by blood or marriage.'], ['Mediation', 'Help from a neutral person to settle a dispute.'], ['Gist', 'The general meaning of what is heard or read.'], ['Compromise', 'An agreement in which each side gives up something.']],
  [
    { q: 'Give the gist of this dialogue in one sentence: "Mother: Why is the TV still on? Your exams start on Monday. Son: I was only resting. Mother: Then rest with your books. We agreed: no TV before your exams. Son: You are right, Mama. I will switch it off."', steps: ['Who? A mother and her son.', 'What problem? He is watching TV before his exams, against their agreement.', 'How does it end? He agrees to switch it off.', 'Gist: **A mother reminds her son of their agreement not to watch TV before his exams, and he agrees to stop.**'] },
  ]),

  L('en-vowels-4', 'en-f4-family', '1.3', 'Speech work: the vowels /iː/ and /ɪ/', 10, ['Speech work'], [
    'English has long and short vowel sounds. The **long vowel /iː/**, as in "seat", is said with the lips spread and the tongue high at the front, and it is held a little longer. The **short vowel /ɪ/**, as in "sit", is shorter and more relaxed.',
    '**Minimal pairs** are words that differ in only one sound. They show that the difference changes the meaning:\n- ship /ʃɪp/ – sheep /ʃiːp/\n- live /lɪv/ – leave /liːv/\n- fill /fɪl/ – feel /fiːl/\n- bit /bɪt/ – beat /biːt/\n- sin /sɪn/ – seen /siːn/.',
    'Spelling helps but is not a sure guide: /iː/ is often written ee, ea, ie or e (see, sea, field, these), and /ɪ/ is often written i or y (bit, gym). Some words surprise: "been" can be /biːn/, "women" has /ɪ/ in its first syllable, and "people" has /iː/.',
  ], 'vowel-pairs', 'Say each pair aloud and feel the difference in length.',
  ['Which word has the short vowel /ɪ/?', ['live (I live in Bamenda)', 'leave', 'feel', 'seen'], 'The others have the long vowel /iː/.'],
  [['Vowel', 'A speech sound made with the mouth open and the air flowing freely.'], ['Minimal pair', 'Two words that differ in only one sound.']],
  [
    { q: 'Sort these words by their vowel sound: meat, mitt, peel, pill, keen, kin.', steps: ['Long /iː/: **meat, peel, keen**.', 'Short /ɪ/: **mitt, pill, kin**.', 'They form three minimal pairs: meat–mitt, peel–pill, keen–kin.'] },
  ]),

  // ---------- Traditions and festivals ----------
  L('en-pastsimple-4', 'en-f4-festivals', '2.1', 'The simple past tense', 12, ['Grammar'], [
    'The **simple past** describes actions completed at a definite time in the past: "The chief **opened** the festival yesterday." Time expressions such as yesterday, last year, in 2019 and two days ago go with it.',
    '**Regular verbs** add -ed: dance → danced, celebrate → celebrated, carry → carried (y after a consonant becomes i), stop → stopped (a short final consonant is doubled).',
    '**Irregular verbs** must be learnt: go → went, bring → brought, see → saw, eat → ate, wear → wore, lead → led, sing → sang, begin → began, give → gave, take → took, come → came.',
    'Questions and negatives use "did" + the base form: "Did they dance?" "They **did not** dance." Never write "did danced" or "did not went".',
  ], 'ed-endings', 'After "did" or "did not", always use the base form of the verb.',
  ['"___ you watch the parade yesterday?"', ['Did', 'Do', 'Were', 'Have'], 'Questions in the simple past take "did" + the base form.'],
  [['Simple past', 'The tense for actions completed at a definite time in the past.'], ['Irregular verb', 'A verb whose past forms do not end in -ed.']],
  [
    { q: 'Put the verbs in brackets into the simple past: "Last year our village (hold) its festival. The dancers (wear) masks and the elders (bring) palm wine."', steps: ['hold → **held**', 'wear → **wore**', 'bring → **brought**', '"Last year our village **held** its festival. The dancers **wore** masks and the elders **brought** palm wine."'] },
  ]),

  L('en-festivals-4', 'en-f4-festivals', '2.2', 'Reading descriptive texts on Cameroonian festivals', 12, ['Reading', 'Vocabulary'], [
    'Cameroon has many traditional festivals, among them:\n- the **Ngondo** of the Sawa peoples, held on the banks of the Wouri in Douala, with a ritual in which a diver is believed to consult the ancestors under the water\n- the **Nguon** of the Bamoun people in Foumban, at which the people assess the Sultan’s rule\n- the **Lela** festival of Bali Nyonga in the North-West.\nCommon vocabulary: rite, ritual, ceremony, procession, regalia, mask, masquerade, drum, libation (a drink poured for the ancestors), elders, dignitaries.',
    'A **descriptive text** paints a picture in words. Look for sensory details (what is seen, heard, smelt, tasted and felt), adjectives and adverbs, and comparisons (similes such as "the drums sounded like thunder").',
    'Reading strategies: **skim** first for the general idea, **scan** for particular facts (names, dates), then read closely to answer questions in your own words. Work out the meaning of new words from the context.',
  ], 'ed-endings', 'Underline words that appeal to the senses when you read a description.',
  ['Reading quickly to find a particular date or name is called:', ['Scanning', 'Skimming', 'Summarising', 'Dictation'], 'Skimming is reading quickly for the general idea.'],
  [['Ritual', 'A set of actions done in a fixed way during a ceremony.'], ['Libation', 'A drink poured as an offering to the ancestors.'], ['Skimming', 'Reading quickly for the main idea.'], ['Scanning', 'Reading quickly to find particular information.']],
  [
    { q: 'Read: "The drums rolled like distant thunder as the masked dancers spun in the dust, their raffia skirts flashing in the evening sun." Pick out the sensory details.', steps: ['Hearing: **the drums rolled like distant thunder** (also a simile).', 'Sight: **masked dancers spun**, **raffia skirts flashing in the evening sun**.', 'Touch or feel: **in the dust**.'] },
  ]),

  L('en-edsound-4', 'en-f4-festivals', '2.3', 'Speech work: pronouncing the "-ed" ending', 10, ['Speech work'], [
    'The "-ed" ending of regular past tense verbs has three pronunciations, depending on the last sound of the base verb:\n- **/ɪd/** after /t/ or /d/: wanted, needed, decided, celebrated (an extra syllable)\n- **/t/** after the other **voiceless** sounds /p, k, f, s, ʃ, tʃ/: stopped, looked, laughed, danced, washed, watched\n- **/d/** after **voiced** sounds, including all vowels: played, begged, cleaned, lived, carried.',
    'To test whether a sound is voiced, put your fingers on your throat: you feel a buzz for voiced sounds such as /v/ and /z/, and no buzz for voiceless sounds such as /f/ and /s/.',
    'A common error is to add an extra syllable everywhere, saying "look-ed" or "danc-ed". Only verbs ending in /t/ or /d/ take the extra syllable.',
  ], 'ed-endings', 'Only a /t/ or /d/ sound before "-ed" adds a syllable.',
  ['In "danced", the "-ed" is pronounced:', ['/t/', '/d/', '/ɪd/', 'as a separate syllable "-ed"'], '"Dance" ends in the voiceless sound /s/.'],
  [['Voiced sound', 'A sound made while the vocal cords vibrate.'], ['Voiceless sound', 'A sound made without vibration of the vocal cords.']],
  [
    { q: 'Group these verbs by their "-ed" sound: hoped, planted, called, fixed, ended, cried.', steps: ['/t/: **hoped, fixed** (after /p/ and /s/).', '/ɪd/: **planted, ended** (after /t/ and /d/).', '/d/: **called, cried** (after /l/ and a vowel).'] },
  ]),

  // ---------- Description and the informal letter ----------
  L('en-adjectives-4', 'en-f4-informal', '3.1', 'Adjectives of description and their order', 12, ['Grammar'], [
    '**Adjectives** describe nouns: a **colourful** ceremony, a **proud** chief. They usually come before the noun, or after verbs such as be, seem and look ("The dancers were **graceful**.").',
    'When several adjectives come before a noun, English uses a usual **order**:\n- opinion (beautiful, ugly)\n- size (big, long)\n- age (old, new, ancient)\n- shape (round, square)\n- colour (red, black)\n- origin (Cameroonian, Bamoun)\n- material (wooden, cotton)\n- purpose (dancing, cooking)\n- then the noun: "a **beautiful old wooden** mask", "a **large round black** pot".',
    'Use adjectives with care: two or three well-chosen ones are better than a long list. Precise adjectives (scarlet, deafening, fragrant) make a description come alive.',
  ], 'adjective-order', 'Opinion first, material and purpose last, just before the noun.',
  ['Choose the correct order:', ['a lovely new blue dress', 'a blue lovely new dress', 'a new blue lovely dress', 'a lovely blue new dress'], 'Opinion, age, colour.'],
  [['Adjective', 'A word that describes a noun.'], ['Order of adjectives', 'The usual sequence of adjectives before a noun: opinion, size, age, shape, colour, origin, material, purpose.']],
  [
    { q: 'Put the adjectives in order: "a (wooden, small, beautiful, round) stool".', steps: ['Opinion: beautiful. Size: small. Shape: round. Material: wooden.', '**"a beautiful small round wooden stool"**'] },
  ]),

  L('en-conjunctions-4', 'en-f4-informal', '3.2', 'Coordinating conjunctions', 10, ['Grammar'], [
    '**Coordinating conjunctions** join words, phrases or clauses of equal importance. The seven are **for, and, nor, but, or, yet, so** (remember "FANBOYS"):\n- **and** adds: "We sang **and** danced."\n- **but** contrasts: "The road was long **but** we arrived early."\n- **or** gives a choice: "Will you come by bus **or** by taxi?"\n- **so** shows a result: "It rained, **so** the match was postponed."\n- **yet** shows an unexpected contrast; **for** gives a reason (formal); **nor** adds a negative.',
    'When a coordinating conjunction joins two complete sentences, put a comma before it: "The dancers were tired, **but** they continued."',
    'Do not start every sentence with "And" or "But" in formal writing, and do not join many clauses with "and" in one long sentence.',
  ], 'adjective-order', 'Remember FANBOYS: for, and, nor, but, or, yet, so.',
  ['"I wanted to go, ___ I had no money."', ['but', 'and', 'or', 'so'], 'The second clause contrasts with the first.'],
  [['Coordinating conjunction', 'A word that joins two parts of equal importance: for, and, nor, but, or, yet, so.']],
  [
    { q: 'Join each pair with a suitable coordinating conjunction: (a) The festival was cancelled. It rained heavily. (b) You can call me. You can send a message.', steps: ['(a) The rain is the cause: **"It rained heavily, so the festival was cancelled."**', '(b) A choice: **"You can call me or send a message."**'] },
  ]),

  L('en-informalletter-4', 'en-f4-informal', '3.3', 'Writing an informal letter', 14, ['Writing'], [
    'An **informal letter** is written to someone you know well: a relative or a friend. Its layout:\n- your **address**, top right, with the **date** below it\n- the **greeting** on the left: "Dear Uncle Paul," or "Dear Ngum,"\n- the **body** in paragraphs: an opening (greetings, news of the family), the main message, and a closing paragraph\n- the **closing** and your first name, at the bottom right: "Your loving nephew," / "Yours affectionately," then "Eric".\nThe receiver’s address is not written in an informal letter.',
    'The language is friendly and natural: contractions (I’m, we’ve) and personal questions are fine, but avoid slang, SMS spellings and Pidgin in a school composition.',
    'A letter describing a ceremony should tell the reader when and where it happened, who was there, what was seen, heard and eaten, and how you felt, in the order of events.',
  ], 'letter-informal', 'Check the five parts: address and date, greeting, body, closing, name.',
  ['In an informal letter, the date is written:', ['Under the writer’s address', 'Above the greeting on the left', 'After the signature', 'At the end of the body'], 'Address first, then the date below it.'],
  [['Informal letter', 'A letter to a relative or friend, in a friendly style.'], ['Greeting', 'The opening words of a letter, such as "Dear Ngum,".'], ['Closing', 'The words before the writer’s name, such as "Your loving friend,".']],
  [
    { q: 'Plan a letter to your aunt describing your village’s new yam festival.', steps: ['Paragraph 1: greetings and a short reason for writing.', 'Paragraph 2: when and where the festival took place, and who attended.', 'Paragraph 3: the ceremony itself: the rites, the dances, the food, in order.', 'Paragraph 4: how you felt, and an invitation to come next year.', 'Close with "Your loving niece," and your first name.'] },
  ]),

  // ---------- Careers ----------
  L('en-future-4', 'en-f4-careers', '4.1', 'The simple future: will and going to', 12, ['Grammar'], [
    '**Will + base form** is used:\n- for decisions made at the moment of speaking: "I’m thirsty. I **will** buy some water."\n- for predictions based on opinion: "I think you **will** pass."\n- for promises and offers: "I **will** help you with your CV."',
    '**Going to + base form** is used:\n- for plans already decided: "I **am going to** study nursing after school."\n- for predictions based on what we can see now: "Look at that traffic! We **are going to** be late."',
    'The **present continuous** also shows fixed arrangements: "I **am meeting** the manager at ten tomorrow." "Shall" is used with I and we in offers and suggestions: "Shall I open the window?"',
  ], 'future-forms', 'A plan made before speaking: "going to". A decision made now: "will".',
  ['"I have already decided. I ___ apply for the bank job."', ['am going to', 'will', 'shall to', 'going'], 'The plan was made before speaking.'],
  [['Simple future', 'The use of will or going to to talk about the future.'], ['Prediction', 'A statement about what is expected to happen.']],
  [
    { q: 'Complete with "will" or "going to": (a) "Careful! You ___ drop the plates." (b) "A: The phone is ringing. B: I ___ answer it."', steps: ['(a) We can see it about to happen: **are going to** drop.', '(b) A decision made now: **will** answer.'] },
  ]),

  L('en-jobs-4', 'en-f4-careers', '4.2', 'Jobs, advertisements and interviews', 12, ['Vocabulary', 'Speaking'], [
    'Vocabulary of work: a **profession** needs long training (doctor, lawyer, teacher, engineer, pharmacist); a **trade** is a skilled manual job (carpenter, mechanic, tailor, electrician, mason). Other words: employer, employee, salary (paid monthly), wages (paid daily or weekly), vacancy, applicant, qualification, experience, **curriculum vitae (CV)**, probation, promotion, retirement.',
    'A **job advertisement** gives the job title, the employer, the qualifications and experience required, the duties, the salary or benefits, and how and when to apply (the **deadline**).',
    'In a **job interview**: arrive early and dressed neatly, greet the panel politely, listen to each question, answer clearly with examples of your skills and experience, and ask a sensible question at the end. Common questions: "Tell us about yourself." "Why do you want this job?" "What are your strengths?"',
  ], 'future-forms', 'Answer interview questions with an example: "For instance, at school I…".',
  ['A list of a person’s education, skills and experience sent with a job application is a:', ['curriculum vitae (CV)', 'receipt', 'certificate of birth', 'memo'], 'It is often called a CV.'],
  [['Profession', 'A job that needs long training and qualifications.'], ['Trade', 'A skilled manual occupation.'], ['Curriculum vitae', 'A summary of a person’s education, skills and work experience.'], ['Deadline', 'The latest date by which something must be done.']],
  [
    { q: 'Give a good answer to the interview question "Why do you want to work in our pharmacy?"', steps: ['Show interest in the job and the employer.', 'Link your skills to the duties.', 'Sample answer: **"I enjoy helping people stay healthy, and your pharmacy is known for serving the community well. My good results in biology and my experience helping in my aunt’s shop prepare me for this work."**'] },
  ]),

  L('en-wordstress-4', 'en-f4-careers', '4.3', 'Speech work: word stress in long words', 10, ['Speech work'], [
    'In every English word of two or more syllables, one syllable is **stressed**: it is louder, longer and higher. Wrong stress can make a word hard to understand.',
    'Useful patterns:\n- words ending in -tion, -sion, -ic, -ical, -ian and -ity stress the syllable just before the ending: e-du-CA-tion, e-co-NO-mic, mu-SI-cian, e-lec-TRI-ci-ty\n- words ending in -eer and -ee stress the ending: en-gi-NEER, re-fe-REE, em-ploy-EE\n- many words ending in -ology and -ography stress -ol- and -og-: bi-O-lo-gy, pho-TO-gra-pher.',
    'Stress can move within a word family: PHO-to-graph, pho-TO-gra-pher, pho-to-GRA-phic; e-CO-no-my, e-co-NO-mic. Learn the stress with each new word.',
  ], 'stress-patterns', 'When you learn a word, learn which syllable is stressed.',
  ['In "electrician", the stress falls on:', ['e-lec-TRI-cian', 'E-lec-tri-cian', 'e-LEC-tri-cian', 'e-lec-tri-CIAN'], 'Words ending in "-ician" stress the syllable before the ending.'],
  [['Word stress', 'The greater force on one syllable of a word.'], ['Syllable', 'A unit of sound with one vowel sound.']],
  [
    { q: 'Mark the stressed syllable: accountant, mechanic, pharmacist, technician.', steps: ['ac-COUN-tant', 'me-CHA-nic (the -ic rule)', 'PHAR-ma-cist', 'tech-NI-cian (the -ician rule)'] },
  ]),

  // ---------- Business ----------
  L('en-presperfect-4', 'en-f4-business', '5.1', 'The present perfect and the simple past', 13, ['Grammar'], [
    'The **present perfect** (have/has + past participle) links the past to the present:\n- an action at an unstated time with a result now: "She **has opened** a shop." (It is open now.)\n- with **already, yet, just, ever, never**: "Have you **ever** sold online?"\n- with **for** and **since** for something that continues: "He **has run** his business **since** 2020 / **for** five years."',
    'The **simple past** is used for a finished action at a stated past time: "She **opened** a shop **last year**." Never use the present perfect with yesterday, last week, in 2019 or ago.',
    'Compare: "I **have lost** my purse." (I still cannot find it.) "I **lost** my purse yesterday, but I found it." (The story is finished.)',
  ], 'perfect-past', 'If the sentence names a finished time, use the simple past.',
  ['"He ___ in this market since he was a boy."', ['has worked', 'worked', 'works', 'was working'], '"Since" links the past to the present.'],
  [['Present perfect', 'have/has + past participle, linking a past action to the present.'], ['Past participle', 'The verb form used after have, such as sold, gone, taken.']],
  [
    { q: 'Correct the errors: (a) "I have bought this phone last week." (b) "She works here for ten years."', steps: ['(a) "Last week" is a finished time: **"I bought this phone last week."**', '(b) The action continues up to now: **"She has worked here for ten years."**'] },
  ]),

  L('en-money-4', 'en-f4-business', '5.2', 'Markets, budgets and banking; reading charts', 12, ['Vocabulary', 'Reading'], [
    'Vocabulary of trade: buyer, seller, customer, wholesale (selling in large quantities to traders), retail (selling in small quantities to the public), price, discount, bargain (to discuss the price), receipt, invoice, credit, debt, profit, loss, capital (money to start a business), turnover, savings, **budget** (a plan of income and spending), loan, interest, bank account, deposit, withdraw, mobile money.',
    'Small businesses in Cameroon often save through **njangi** (rotating savings groups) and take **microloans** from credit unions. Keeping records of what is bought and sold shows whether the business makes a profit.',
    'To read a **chart or table**: read the title, the labels on the axes and the units first; then find the highest and lowest values, the trend (rising, falling, steady) and any surprise. Use comparative language: "Sales in December were **twice as high as** in June."',
  ], 'perfect-past', 'Always read the title and the units of a chart before the numbers.',
  ['Selling goods in large quantities to other traders is:', ['wholesale', 'retail', 'barter', 'auction'], 'Retail is selling to the public in small quantities.'],
  [['Budget', 'A plan of expected income and spending.'], ['Capital', 'Money used to start or run a business.'], ['Wholesale', 'Selling goods in large quantities to traders.'], ['Njangi', 'A savings group in which members take turns to receive the money collected.']],
  [
    { q: 'A table shows a shop’s monthly profit: January 50 000 FCFA, February 40 000 FCFA, March 80 000 FCFA. Describe it in two sentences.', steps: ['Highest and lowest: March highest, February lowest.', 'Trend with comparisons: **"The profit fell from 50 000 FCFA in January to 40 000 FCFA in February. It then doubled to 80 000 FCFA in March, the best month."**'] },
  ]),

  L('en-clusters-4', 'en-f4-business', '5.3', 'Speech work: consonant clusters', 10, ['Speech work'], [
    'A **consonant cluster** is two or more consonant sounds together with no vowel between them: /str/ in street, /spl/ in splash, /mpt/ in tempt, /ksts/ in texts, /mpts/ in attempts.',
    'Speakers of many Cameroonian languages tend to break clusters by adding a vowel ("sitreet" for street) or by dropping a consonant ("tex" for texts, "attem" for attempts). Both make speech less clear.',
    'Practise slowly, then faster: str-eet, spr-ing, scr-een; ask-s, desk-s, tex-ts, prom-pts, thir-teenths. Clusters are especially important at the ends of plurals and past tenses: "markets" /ts/, "asked" /skt/.',
  ], 'consonant-clusters', 'Do not add a vowel between consonants in a cluster.',
  ['Which word begins with a three-consonant cluster?', ['spring', 'sing', 'pin', 'ring'], '/spr/: s, p, r.'],
  [['Consonant cluster', 'Two or more consonant sounds together without a vowel between them.']],
  [
    { q: 'Mark the clusters in: "The strong traders asked for receipts."', steps: ['strong: **/str/**', 'traders: **/tr/** and /dz/ at the end', 'asked: **/skt/**', 'receipts: **/ts/**'] },
  ]),

  // ---------- Travel ----------
  L('en-modals-4', 'en-f4-travel', '6.1', 'Modals of necessity, permission and advice', 12, ['Grammar'], [
    '**Modal verbs** are followed by the base form of a verb, with no "to" and no -s: "She **must go**", not "She must goes" or "She must to go".',
    'Their meanings:\n- **necessity or obligation**: must, have to ("Travellers **must** show their ID card.")\n- **no necessity**: need not, don’t have to ("You **need not** pay; it is free.")\n- **prohibition**: must not ("You **must not** feed the animals.")\n- **permission**: can, may (more formal) ("**May** I take a photograph?")\n- **advice**: should, ought to ("You **should** book early.").',
    '"Must not" and "need not" are very different: "You must not go" forbids it; "You need not go" leaves the choice to you.',
  ], 'modals-chart', 'Modal + base form: never add "to" or "-s".',
  ['"You ___ bring food; lunch is provided."', ['need not', 'must not', 'must', 'should'], 'There is no necessity, but it is not forbidden.'],
  [['Modal verb', 'A helping verb such as must, can, may or should that shows necessity, permission, ability or advice.'], ['Prohibition', 'Something that is not allowed.']],
  [
    { q: 'Write a sign for a national park using must, must not and may.', steps: ['Necessity: **"Visitors must stay with their guide."**', 'Prohibition: **"Visitors must not feed or touch the animals."**', 'Permission: **"Visitors may take photographs without flash."**'] },
  ]),

  L('en-phrasal-4', 'en-f4-travel', '6.2', 'Phrasal verbs of travel; discussing ecotourism', 12, ['Vocabulary', 'Speaking'], [
    'A **phrasal verb** is a verb + a particle (up, off, in, out, down) with its own meaning. Travel phrasal verbs:\n- **set off** (start a journey), **get on / get off** (a bus), **pick up** (collect someone), **drop off** (leave someone at a place), **check in / check out** (at a hotel or airport), **look around** (explore), **stop over** (break a journey), **get back** (return).',
    '**Ecotourism** is responsible travel to natural areas that protects the environment and benefits local people. Cameroon offers Mount Cameroon, the Korup and Campo-Ma’an forests, Waza National Park, the beaches and Lobé Falls at Kribi, and the crater lakes of the North-West.',
    'In a **group discussion**: take turns, listen and refer to what others said ("As Amina said…"), agree or disagree politely ("I see your point, but…"), give reasons and examples, and let a chairperson sum up.',
  ], 'modals-chart', 'Learn phrasal verbs in sentences, not alone.',
  ['"The bus will ___ us ___ at the junction." (leave us there)', ['drop … off', 'set … off', 'check … in', 'look … around'], '"Drop off" means leave someone at a place.'],
  [['Phrasal verb', 'A verb with a particle that together have a special meaning.'], ['Ecotourism', 'Tourism that protects nature and benefits local people.']],
  [
    { q: 'Disagree politely in a discussion with: "Tourists only bring problems to our parks."', steps: ['Acknowledge the speaker’s view.', 'Give your reason and an example.', '**"I understand your worry about litter, but well-managed tourists also bring money: guides and hotel workers near Waza earn their living from them."**'] },
  ]),

  L('en-politeintonation-4', 'en-f4-travel', '6.3', 'Speech work: intonation in questions and polite requests', 10, ['Speech work'], [
    '**Intonation** is the rise and fall of the voice. It shows whether we are asking, stating or requesting, and how polite we are.',
    'General patterns:\n- **yes/no questions** usually **rise** at the end: "Is this the bus to Bafoussam? ↗"\n- **wh-questions** (who, what, where, when, why, how) usually **fall**: "Where is the ticket office? ↘"\n- **statements and commands** fall: "The bus leaves at ten. ↘"\n- **polite requests** often rise gently: "Could you help me with my bag? ↗"',
    'A flat or falling tone on a request can sound rude or impatient. Polite forms also matter: "Could you…?", "Would you mind…?", "Excuse me, please…".',
  ], 'intonation', 'Yes/no questions go up; wh-questions go down.',
  ['"What time does the bus leave?" usually ends with:', ['A falling tone', 'A rising tone', 'A level tone', 'A whisper'], 'Wh-questions usually fall.'],
  [['Intonation', 'The rise and fall of the voice in speech.'], ['Wh-question', 'A question beginning with who, what, where, when, why or how.']],
  [
    { q: 'Mark rising (↗) or falling (↘) intonation: (a) "Can I pay by mobile money?" (b) "How much is the ticket?" (c) "Please wait here."', steps: ['(a) A yes/no question: **↗**', '(b) A wh-question: **↘**', '(c) A request in the form of a command: **↘**'] },
  ]),

  // ---------- Formal letters ----------
  L('en-adverbs-4', 'en-f4-inquiry', '7.1', 'Adverbs of time and frequency', 10, ['Grammar'], [
    '**Adverbs of time** say when: now, then, today, yesterday, soon, later, already, yet, recently. They usually go at the beginning or end of a clause: "**Yesterday** I wrote to the agency." "I will reply **soon**."',
    '**Adverbs of frequency** say how often: always, usually, often, sometimes, rarely, seldom, never. They go **before the main verb** but **after the verb "be"** and after the first auxiliary: "We **usually** travel by bus." "She is **always** on time." "I have **never** flown."',
    'In formal writing use precise expressions of time: "at your earliest convenience", "within two weeks", "by 15 March".',
  ], 'letter-formal', 'Frequency adverbs: before the main verb, after "be".',
  ['Choose the correct sentence.', ['They rarely miss a meeting.', 'They miss rarely a meeting.', 'Rarely they miss a meeting.', 'They miss a meeting rarely always.'], 'Before the main verb.'],
  [['Adverb of frequency', 'An adverb that says how often: always, usually, often, sometimes, never.'], ['Adverb of time', 'An adverb that says when: today, soon, already.']],
  [
    { q: 'Put the adverb in the right place: (a) "I am late." (never) (b) "We visit the coast." (often)', steps: ['(a) After "be": **"I am never late."**', '(b) Before the main verb: **"We often visit the coast."**'] },
  ]),

  L('en-formalletter-4', 'en-f4-inquiry', '7.2', 'The formal letter of inquiry', 14, ['Writing'], [
    'A **formal letter** is written to an organisation or to someone you do not know personally. Its layout:\n- your **address** at the top right, with the **date** below it\n- the **receiver’s title and address** on the left, below the date\n- the **greeting**: "Dear Sir," "Dear Madam," or "Dear Sir/Madam,"; or "Dear Mr Tabi," if you know the name\n- a **subject line**, often underlined: "Request for information on holiday tours"\n- the **body** in short paragraphs\n- the **closing**: "Yours faithfully," after Dear Sir/Madam; "Yours sincerely," after a name; then your signature and full name.',
    'The body of a **letter of inquiry**: the first paragraph states who you are and why you are writing; the next asks your questions clearly (dates, prices, conditions); the last thanks the reader and says you look forward to a reply.',
    'The language is polite and formal: no contractions, no slang. Useful phrases: "I am writing to inquire about…", "I would be grateful if you could…", "Kindly let me know…", "I look forward to hearing from you."',
  ], 'letter-formal', 'Dear Sir/Madam → Yours faithfully. Dear Mr Tabi → Yours sincerely.',
  ['A formal letter that begins "Dear Mrs Fon," should end:', ['Yours sincerely,', 'Yours faithfully,', 'Your loving daughter,', 'Cheers,'], 'A named reader takes "sincerely".'],
  [['Formal letter', 'A letter to an organisation or official, in a polite and impersonal style.'], ['Letter of inquiry', 'A letter that asks for information.'], ['Subject line', 'A short heading that states what a formal letter is about.']],
  [
    { q: 'Write the opening and closing paragraphs of a letter to a travel agency about a school trip to Kribi.', steps: ['Opening: **"I am writing on behalf of the Form 4 students of GBHS Mankon to inquire about a two-day educational trip to Kribi in April."**', 'Closing: **"I would be grateful for a prompt reply, as we must confirm our plans by 15 March. I look forward to hearing from you."**', 'Then: "Yours faithfully," signature and full name.'] },
  ]),
];
