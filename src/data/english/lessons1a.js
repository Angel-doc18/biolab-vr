// English Language lessons for Form 1, sequences 1 to 3: daily basic needs,
// family life and relationships, and living a healthy lifestyle. Original
// text written for this app. **double asterisks** mark key terms; `examples`
// are worked examples. Phonetic symbols follow the International Phonetic
// Alphabet.

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

export const LESSONS_1A = [
  // ---------- 1. Greetings ----------
  L('en-greetings-1', 'en-f1-introductions', '1.1', 'Greetings, introductions and making acquaintances', 10, ['Speaking', 'Listening'], [
    'We **greet** people to show respect and friendliness. The greeting depends on the time of day and on the person:\n- **formal** (to teachers, elders, officials): "Good morning, Sir." "Good afternoon, Madam." "Good evening, Doctor."\n- **informal** (to friends and classmates): "Hello!" "Hi, Brenda!" "How are you?"\nThe usual reply to "How are you?" is "I am fine, thank you. And you?" The formal greeting "How do you do?" is answered with the same words.',
    'To **introduce yourself**, give your name and something about you: "Good morning. My name is Ewane Paul. I am eleven years old and I am in Form 1 B." To **introduce someone else**: "Mum, this is my classmate, Aïcha. Aïcha, this is my mother." People then say "Nice to meet you" or "Pleased to meet you".',
    'A person you have met but do not know well is an **acquaintance**. Good manners when meeting people: look at the person, smile, speak clearly, use titles (Sir, Madam, Mr, Mrs, Miss, Dr) for adults, and **listen** to the other person without interrupting.',
  ], 'en1-greetings', 'Use "Good night" only when you are leaving or going to bed, not as a greeting.',
  ['At 4 p.m. you meet your principal. You say:', ['Good afternoon, Sir.', 'Good night, Sir.', 'Hi, man!', 'Good morning, Sir.'], 'Afternoon runs from midday until about 6 p.m.'],
  [['Greeting', 'Words used to welcome someone when you meet.'], ['Acquaintance', 'A person you know slightly.'], ['Introduction', 'Telling people who you are, or who another person is.']],
  [
    { q: 'Write a short dialogue in which Kum introduces his new friend Fadimatou to his father.', steps: ['Kum: "Good evening, Papa. This is my new classmate, Fadimatou."', 'Father: "Good evening, Fadimatou. Pleased to meet you."', 'Fadimatou: "Good evening, Sir. Nice to meet you too."', 'Note the formal greeting to the father and the use of "Sir".'] },
  ]),

  L('en-imperatives-1', 'en-f1-class-rules', '6.1', 'Imperatives for requests; filling in an information sheet', 10, ['Grammar', 'Writing'], [
    'An **imperative** sentence gives an order, an instruction or a request. It begins with the base form of the verb and has no subject: "Sit down." "Open your books." "Pass me the salt." The **negative imperative** begins with "Do not" or "Don’t": "Don’t run in the corridor."',
    'To make a **polite request**, add "please" or use a question: "Please lend me your ruler." "Could you open the window, please?" "Would you mind closing the door?" Politeness shows **courtesy**, an important attitude in daily life.',
    'An **information sheet** (or form) asks for details about you. Read each heading carefully and write clearly in capital letters when asked:\n- Surname (family name): NJI\n- First name(s): GRACE MBONE\n- Date of birth: 14/03/2014\n- Place of birth: BAMENDA\n- Sex: F\n- Class: FORM 1 A\n- Parent’s or guardian’s telephone number\n- Signature.',
  ], 'en1-info-sheet', 'Never leave a box empty: write "None" or "N/A" (not applicable) if it does not apply to you.',
  ['Which is a negative imperative?', ['Don’t throw papers on the floor.', 'Throw the papers away.', 'He doesn’t throw papers.', 'Are you throwing papers?'], 'It begins with "Don’t" + the base form.'],
  [['Imperative', 'A sentence that gives an order, instruction or request, beginning with a verb.'], ['Surname', 'The family name.'], ['Courtesy', 'Polite and respectful behaviour.']],
  [
    { q: 'Make these orders polite: (a) "Give me your pen." (b) "Stop the noise."', steps: ['(a) "Could you give me your pen, please?" or "Please give me your pen."', '(b) "Please stop making noise." or "Would you mind stopping the noise?"', 'Adding "please" or turning the order into a question makes it polite.'] },
  ]),

  // ---------- 2. Family types ----------
  L('en-present-1', 'en-f1-chores', '3.1', 'The simple present tense', 12, ['Grammar'], [
    'The **simple present tense** is used for:\n- **habits** and routines: "I wake up at 5.30 every morning."\n- **general facts** and truths: "Water boils at 100 °C." "Cameroon has ten regions."\n- **permanent situations**: "My family lives in Kumba."',
    'Form: use the **base form** of the verb with I, you, we and they ("They **play**"). With **he, she and it** (and a singular noun) add **-s**: "She **plays**", "My mother **cooks**". Spelling rules:\n- verbs ending in -s, -sh, -ch, -x, -o add **-es**: pass → passes, wash → washes, watch → watches, go → goes\n- a consonant + y becomes **-ies**: carry → carries, cry → cries (but play → plays)\n- "have" becomes **has**.',
    'Time words that often go with the simple present: every day, every Sunday, always, usually, often, sometimes, never, on Mondays.',
  ], 'en1-present-simple', 'Ask yourself: is the subject he, she or it? If yes, the verb needs -s.',
  ['"My brother ___ football every evening."', ['plays', 'play', 'playing', 'is play'], '"My brother" = he, so the verb takes -s.'],
  [['Simple present tense', 'The tense for habits, facts and permanent situations.'], ['Base form', 'The verb with no ending, as in the dictionary: go, eat, play.']],
  [
    { q: 'Put the verbs in brackets in the simple present: "My father (wake) up early. He (wash) his face and (go) to the farm. My sisters (help) him."', steps: ['father = he: wake → **wakes**', 'he: wash → **washes** (ends in -sh)', 'he: go → **goes** (ends in -o)', 'sisters = they: help → **help**', '"My father **wakes** up early. He **washes** his face and **goes** to the farm. My sisters **help** him."'] },
  ]),

  L('en-vowels-a-1', 'en-f1-family-tree', '2.3', 'Family members, types of family and origins; the vowels /æ/ and /ɑː/', 12, ['Vocabulary', 'Speech work'], [
    'A **family** is a group of people related by blood, marriage or adoption. Types of family:\n- **nuclear family**: father, mother and their children\n- **extended family**: the nuclear family plus grandparents, uncles, aunts, cousins, nephews and nieces\n- **single-parent family**: one parent with the children\n- **foster or adoptive family**: parents who care for a child who is not born to them.',
    'When we describe where a person comes from, we use words such as **region** (Cameroon has ten regions, for example the South-West and the Far North), **division**, **village**, **tribe** or ethnic group, and **nationality** ("I am Cameroonian"). We should speak of all tribes with respect.',
    'Speech work: the short vowel **/æ/**, as in "cat" /kæt/, is said with the mouth open and the tongue low at the front. The long vowel **/ɑː/**, as in "car" /kɑː/, is said further back in the mouth and held longer. Compare: hat – heart, cat – cart, pack – park, match – march. /ɑː/ is often written **ar** (father is an exception: "a" alone).',
  ], 'en1-family-types', 'Say "hat" and "heart" one after the other and feel your tongue move back.',
  ['Which word has the long vowel /ɑː/?', ['father', 'family', 'man', 'happy'], '"Father" is said /ˈfɑːðə/.'],
  [['Nuclear family', 'Parents and their children.'], ['Extended family', 'The nuclear family together with other relatives.'], ['Nationality', 'The country a person belongs to.']],
  [
    { q: 'Sort these words by their vowel: cart, cap, park, pack, hard, had.', steps: ['/æ/: **cap, pack, had**.', '/ɑː/: **cart, park, hard**.', 'Notice that the "ar" spellings have /ɑː/.'] },
  ]),

  // ---------- 3. Classroom ----------
  L('en-present2-1', 'en-f1-chores', '3.2', 'More on the simple present: questions and negatives', 10, ['Grammar'], [
    'To make a **question** in the simple present, use **do** or **does** before the subject, then the base form:\n- "Do you sit near the window?" "Yes, I do." / "No, I don’t."\n- "Does your teacher give homework every day?" "Yes, she does."\nWith "be" there is no do: "Is the classroom clean?" "Are the windows open?"',
    'To make the **negative**, use **do not (don’t)** or **does not (doesn’t)** + base form: "I don’t like noise." "Our class doesn’t have a fan." Never add -s after "does": say "She doesn’t write", not "She doesn’t writes".',
    'Wh- questions follow the same pattern: "Where do you keep your books?" "What time does the bell ring?"',
  ], 'en1-present-questions', 'Only one -s is needed: it goes on "does", not on the main verb.',
  ['Which question is correct?', ['Does he live near the school?', 'Does he lives near the school?', 'Do he live near the school?', 'He does lives near the school?'], '"Does" + subject + base form.'],
  [['Auxiliary verb', 'A helping verb such as do, does, is or can.'], ['Negative', 'A sentence that says something is not true, often with "not".']],
  [
    { q: 'Change into a question and a negative: "The prefect rings the bell at 7 a.m."', steps: ['Question: **"Does the prefect ring the bell at 7 a.m.?"**', 'Negative: **"The prefect does not (doesn’t) ring the bell at 7 a.m."**', '"Rings" loses its -s because "does" carries it.'] },
  ]),

  L('en-classroom-1', 'en-f1-school', '5.2', 'Describing a classroom; the consonants /b/ and /d/', 12, ['Vocabulary', 'Writing', 'Speech work'], [
    'Things found in a classroom: chalkboard (or blackboard, whiteboard), chalk, duster, teacher’s table and chair, desks, benches, cupboard, notice board, timetable, wall clock, map, windows, doors, ceiling fan, waste basket and, in some schools, a computer and projector.',
    'When you **describe** a classroom, move in an order (from the door to the front, or from the front to the back) and say what is there and where: "Our classroom is large and bright. As you enter, the teacher’s table is on the left, in front of the chalkboard. There are twenty desks in four rows. A map of Cameroon hangs on the back wall." Use the simple present and "there is / there are".',
    'Speech work: **/b/** and **/d/** are both voiced consonants that stop the air for a moment. For /b/ the lips close (bag, bench, book); for /d/ the tip of the tongue touches the ridge behind the top teeth (desk, door, duster). Compare: bad – dad, bare – dare, bye – die, bump – dump.',
  ], 'en1-classroom', 'Use "there is" for one thing and "there are" for more than one.',
  ['"___ two windows on the left wall."', ['There are', 'There is', 'It is', 'They is'], '"Windows" is plural.'],
  [['Chalkboard', 'A dark board written on with chalk.'], ['Description', 'Words that paint a picture of a person, place or thing.']],
  [
    { q: 'Describe the classroom in the picture in three sentences, using "there is", "there are" and a preposition.', steps: ['"**There is** a chalkboard on the front wall."', '"**There are** six desks in three rows **in front of** the board."', '"The teacher’s table is **near** the door."'] },
  ]),

  // ---------- 4. Permission ----------
  L('en-can-may-1', 'en-f1-permission', '4.1', 'Modal verbs: can, could and may', 10, ['Grammar'], [
    'The **modal verbs** can, could and may help another verb. They never take -s, and the verb after them is in the **base form**: "She can sing" (not "She cans sing" or "She can sings").',
    'Uses:\n- **ability**: "I can ride a bicycle." "My grandfather could run fast when he was young." (could = past ability)\n- **permission**: "Can I go out, please?" (everyday) "May I come in?" (more formal and polite) "Could I borrow your book?" (polite)\n- **possibility**: "It may rain this afternoon."',
    'Negatives: cannot (can’t), could not (couldn’t), may not. "You may not use your phone in class." means it is **not allowed**.',
  ], 'en1-permission', 'Never put "to" after can, could or may: "I can swim", not "I can to swim".',
  ['"___ I use the toilet, please?" (formal)', ['May', 'Must', 'Shall', 'Will'], '"May I …?" is the most formal way to ask.'],
  [['Modal verb', 'A helping verb such as can, could or may that adds ability, permission or possibility.'], ['Permission', 'Being allowed to do something.']],
  [
    { q: 'Say what each sentence expresses: (a) "Can you speak French?" (b) "May I sit here?" (c) "I could read when I was four."', steps: ['(a) **ability** (a question about a skill)', '(b) **permission** (formal request)', '(c) **past ability**'] },
  ]),

  L('en-permission-1', 'en-f1-permission', '4.2', 'Asking for, giving and refusing permission', 10, ['Speaking', 'Reading'], [
    'To **ask for permission**: "May I …?", "Could I …?", "Can I …?", "Do you mind if I …?", "Is it all right if I …?". Add "please" and say why if needed: "May I go to the library, please? I need a dictionary."',
    'To **give** permission: "Yes, of course." "Certainly." "Go ahead." "No problem." To **refuse** politely, say sorry and give a reason: "I’m sorry, you can’t go now. The test starts in five minutes." "I’m afraid not."',
    'In a dialogue, each speaker’s name is followed by a colon, and the words spoken come after it, without quotation marks:\nNkeng: Excuse me, Madam. May I fetch water for the class?\nTeacher: Yes, you may. Come back quickly.\nThis shows **politeness** and **responsibility**: asking first and keeping your word.',
  ], 'en1-permission', 'Answer "Do you mind if I …?" with "No, not at all" to give permission.',
  ['"Do you mind if I open the window?" To give permission, you say:', ['No, not at all.', 'Yes, I mind.', 'Yes, of course I mind.', 'Never.'], '"No, I don’t mind" means you allow it.'],
  [['Dialogue', 'A conversation written down, showing who says what.'], ['Refuse', 'To say no.']],
  [
    { q: 'Write a three-line dialogue in which Bih asks her mother for permission to visit a friend, and her mother agrees on one condition.', steps: ['Bih: Mama, may I visit Ngozi this afternoon, please?', 'Mother: Yes, you may, but come back before 6 p.m.', 'Bih: Thank you, Mama. I will be back on time.'] },
  ]),

  // ---------- 5. Shopping ----------
  L('en-countable-1', 'en-f1-market', '13.1', 'Countable and uncountable nouns; a, an, some and any', 12, ['Grammar'], [
    '**Countable nouns** name things we can count. They have a singular and a plural: one mango, two mangoes; a bag, three bags. **Uncountable nouns** name things we cannot count one by one, such as substances and ideas: rice, sugar, water, oil, salt, money, bread, information, advice. They have no plural ("informations" is wrong).',
    'Words of quantity:\n- **a / an** + a singular countable noun: a tomato, an orange ("an" before a vowel sound)\n- **some** + plurals or uncountables in positive sentences: some eggs, some milk\n- **any** in questions and negatives: "Is there any oil?" "We don’t have any onions."\n- **many** + plurals, **much** + uncountables: many oranges, much salt\n- to count uncountables, use a measure: a bag of rice, a litre of oil, a loaf of bread, a bottle of water.',
    '**Plurals** of countable nouns usually add -s (book → books) or -es after s, sh, ch and x (bus → buses, dish → dishes, box → boxes).',
  ], 'en1-countable', 'If you cannot put a number in front of the noun, it is uncountable: "two rices" is impossible.',
  ['Which is correct?', ['some advice', 'an advice', 'two advices', 'many advices'], '"Advice" is uncountable.'],
  [['Countable noun', 'A noun with a singular and a plural form.'], ['Uncountable noun', 'A noun for something that cannot be counted, with no plural.']],
  [
    { q: 'Complete the shopping list with a, an, some or any: "I need ___ pineapple, ___ egg and ___ flour. Is there ___ palm oil at home?"', steps: ['pineapple (countable, consonant sound) → **a**', 'egg (vowel sound) → **an**', 'flour (uncountable) → **some**', 'question → **any**', '"I need **a** pineapple, **an** egg and **some** flour. Is there **any** palm oil at home?"'] },
  ]),

  L('en-directions-1', 'en-f1-shopping', '5.2', 'Finding the way to the shop; opposites; the consonants /s/ and /z/', 12, ['Vocabulary', 'Reading', 'Speech work'], [
    'Words for **directions**: turn left, turn right, go straight on, go past, cross the road, take the first turning, at the junction, at the roundabout, next to, opposite, between, on the corner. Many come in **opposite pairs (antonyms)**: left – right, up – down, in – out, near – far, enter – exit, push – pull, open – closed, cheap – expensive.',
    'When reading a passage such as "The way to the supermarket", follow the route with your finger on a map. Look for the starting point, each turning in order, and the landmarks (a church, a pharmacy, a petrol station) that help you know where you are.',
    'Speech work: **/s/** (as in "sun", "price") is voiceless; **/z/** (as in "zoo", "prize") is voiced: you can feel your throat buzz. Compare: sip – zip, bus – buzz, price – prize, rice – rise, loose – lose. The letter s is often said /z/ between vowels and at the end of words: "rose", "nose", "is", "his".',
  ], 'en1-street-map', 'Touch your throat: it buzzes for /z/ but not for /s/.',
  ['The opposite of "expensive" is:', ['cheap', 'costly', 'dear', 'rich'], 'Antonyms have opposite meanings.'],
  [['Antonym', 'A word opposite in meaning to another word.'], ['Landmark', 'A building or object that is easy to see and helps you find your way.']],
  [
    { q: 'Using the map, give directions from the school to the market.', steps: ['"Leave the school and **turn right** onto Main Road."', '"**Go straight on** and **go past** the pharmacy."', '"**Take the first turning on the left.** The market is **on your right, opposite** the church."'] },
  ]),

  // ---------- 6. Family tree ----------
  L('en-adjectives-1', 'en-f1-descriptions', '4.1', 'Descriptive adjectives', 10, ['Grammar'], [
    'An **adjective** describes a noun. **Descriptive adjectives** tell us what a person or thing is like:\n- size: tall, short, big, small\n- appearance: beautiful, handsome, slim, plump\n- character: kind, honest, generous, hard-working, patient, strict\n- age: young, old, elderly\n- colour: brown, black, grey.',
    'Position: an adjective usually comes **before** the noun ("a **generous** uncle") or **after a linking verb** such as be, look or seem ("My aunt is **generous**." "Grandpa looks **tired**."). Adjectives do not take -s: "two tall boys", not "two talls boys".',
    'When several adjectives come before a noun, opinion comes before facts: "a **kind old** woman", "a **beautiful long** dress".',
  ], 'en1-adjectives', 'Choose adjectives that are precise: "generous" says more than "nice".',
  ['Which sentence is correct?', ['My cousins are very kind.', 'My cousins are very kinds.', 'My kinds cousins are.', 'My cousins very kind are.'], 'Adjectives never take -s.'],
  [['Adjective', 'A word that describes a noun.'], ['Linking verb', 'A verb such as be, look or seem that joins a subject to a description.']],
  [
    { q: 'Improve this description with adjectives: "My grandmother is a woman. She has hair and a smile."', steps: ['Add character: "My grandmother is a **kind, hard-working** woman."', 'Add appearance: "She has **short grey** hair and a **warm** smile."'] },
  ]),

  L('en-familytree-1', 'en-f1-family-tree', '2.2', 'The family tree and family solidarity; the sounds /t/, /d/, /θ/ and /ð/', 12, ['Vocabulary', 'Writing', 'Speech work'], [
    'A **family tree** is a diagram of a family across generations. The oldest generation (grandparents) is at the top; lines join married couples, and lines going down join parents to their children. Brothers and sisters (**siblings**) are drawn side by side. Useful words: generation, ancestor, descendant, sibling, cousin, in-law, late (dead): "my late grandfather".',
    '**Family solidarity** means members support each other, especially in hard times such as illness or the death of a loved one ("when sorrow strikes"): relatives visit, comfort the bereaved, help with money, food and work, and care for orphans. Values: kindness, sympathy, sharing and unity.',
    'Speech work: "th" has two sounds, made with the tongue between the teeth. **/θ/** is voiceless (think, three, mouth, birthday); **/ð/** is voiced (this, mother, brother, they). Do not replace them with /t/ and /d/: tin – thin, tree – three, den – then, dare – there.',
  ], 'en1-family-tree', 'Put the tip of your tongue between your teeth and blow gently for /θ/.',
  ['In a family tree, siblings are drawn:', ['Side by side on the same level', 'One above the other', 'At the top', 'In a separate tree'], 'They belong to the same generation.'],
  [['Generation', 'All the people born at about the same time in a family.'], ['Sibling', 'A brother or sister.'], ['Solidarity', 'Unity and support among a group.']],
  [
    { q: 'From the family tree, answer: who is Joy’s aunt, and who are Joy’s cousins?', steps: ['Joy’s parents are Peter and Ruth.', 'Ruth’s sister is Clara, so **Clara is Joy’s aunt**.', 'Clara’s children, **Ben and Eno, are Joy’s cousins**.'] },
  ]),

  // ---------- 7. Rules ----------
  L('en-prep-time-1', 'en-f1-timetable', '7.2', 'Prepositions of time: at, on and in', 10, ['Grammar'], [
    '**At** is used for exact times and some fixed expressions: at 7 o’clock, at noon, at midnight, at night, at the weekend, at break time.',
    '**On** is used for days and dates: on Monday, on Sunday morning, on 20th May, on my birthday, on Christmas Day.',
    '**In** is used for longer periods: in the morning, in the afternoon, in the evening, in May, in 2026, in the rainy season, in the first term. Note: we say "in the morning" but "at night", and "on Monday morning" (a particular day).',
  ], 'en1-prep-time', 'Think of size: at for a point, on for a day, in for anything longer.',
  ['"Lessons end ___ 2.30 p.m."', ['at', 'on', 'in', 'by'], '"At" for clock times.'],
  [['Preposition', 'A word such as at, on or in that shows the relation between a noun and other words.']],
  [
    { q: 'Complete the class rules: "Arrive ___ 7.15 a.m. Clean the classroom ___ Fridays. Do your homework ___ the evening."', steps: ['clock time → **at** 7.15 a.m.', 'days → **on** Fridays', 'part of the day → **in** the evening'] },
  ]),

  L('en-rules-1', 'en-f1-class-rules', '6.2', 'Rules at home and at school', 10, ['Vocabulary', 'Writing'], [
    '**Rules** tell us what we must and must not do. They protect people and help a home or school to run smoothly. Words: rule, regulation, discipline, punishment, reward, obey, disobey, permission, responsibility, prudence (being careful), precaution.',
    'Rules are often written as **imperatives** or with **must / must not**:\n- Home: "Wash your plate after eating." "Do not open the door to strangers." "Be home before dark."\n- School: "Wear the correct uniform." "Raise your hand before you speak." "You must not cheat in tests."',
    'Writing rules: give the list a title, number the rules, keep each rule short, and begin each with a verb or "Do not". You may add the reason: "Switch off lights when you leave a room, to save electricity."',
  ], 'en1-rules', 'A good rule is short, clear and easy to obey.',
  ['Which is written correctly as a rule?', ['Do not eat in the library.', 'Eating in the library was nice.', 'Library eat no.', 'Maybe you eat in the library.'], 'A negative imperative.'],
  [['Discipline', 'Respect for rules and self-control.'], ['Obey', 'To do what a rule or person tells you.'], ['Precaution', 'Something done in advance to prevent harm.']],
  [
    { q: 'Write three rules for your home, each with a reason.', steps: ['1. **Keep matches out of the reach of children**, to prevent fires.', '2. **Do not leave the tap running**, to save water.', '3. **Greet visitors politely**, to show respect.'] },
  ]),

  // ---------- 8. Furniture ----------
  L('en-prep-place-1', 'en-f1-school', '5.1', 'Prepositions of place', 10, ['Grammar'], [
    '**Prepositions of place** tell us where something is: in (inside), on (touching the top or a surface), under (below), above or over (higher than, not touching), behind (at the back of), in front of, next to or beside, between (two things), among (more than two), opposite (facing), near.',
    'Examples in a home: "The clothes are **in** the wardrobe." "The clock is **on** the wall." "The cat is sleeping **under** the bed." "A fan hangs **above** the table." "The chair is **between** the bed and the cupboard."',
    'Be careful: **between** is for two things; **among** is for a group: "The house is among the trees." **On** a chair (a hard seat) but **in** an armchair (a deep, soft seat).',
  ], 'en1-prep-place', 'Draw the scene if you are unsure: the picture tells you the preposition.',
  ['"The ball is ___ the box." (inside it)', ['in', 'on', 'under', 'behind'], '"In" means inside.'],
  [['Preposition of place', 'A word that shows where something is.']],
  [
    { q: 'Describe the room: a lamp stands on a table; the table is next to the bed; a mat lies under the bed; a mirror hangs above the table.', steps: ['"There is a lamp **on** the table."', '"The table is **next to** the bed."', '"A mat lies **under** the bed."', '"A mirror hangs **above** the table."'] },
  ]),

  L('en-furniture-1', 'en-f1-furniture', '8.2', 'Household furniture; the vowels /e/ and /eɪ/', 10, ['Vocabulary', 'Speech work', 'Writing'], [
    '**Furniture** (an uncountable noun: "a piece of furniture") means the movable things in a home: bed, mattress, wardrobe, chest of drawers, dressing table, table, chair, stool, sofa or settee, armchair, cupboard, bookshelf, bench. Each room has its own: a bed in the bedroom, a sofa in the sitting room, a cupboard in the kitchen.',
    'Describing a room with furniture keeps it **orderly**: "In my bedroom, the bed is against the wall, under the window. My wardrobe stands opposite the bed, and my study table is next to it."',
    'Speech work: **/e/** is a short pure vowel (bed, pen, shelf, desk); **/eɪ/** is a **diphthong**, a glide from /e/ towards /ɪ/ (table, day, pain, eight). Compare: pen – pain, wet – wait, let – late, men – main, sell – sail.',
  ], 'en1-vowels-e', 'A diphthong moves: your jaw closes a little as you say /eɪ/.',
  ['Which word has the diphthong /eɪ/?', ['wait', 'wet', 'west', 'went'], '"Wait" is said /weɪt/.'],
  [['Furniture', 'The movable things used in a room, such as beds, tables and chairs.'], ['Diphthong', 'A vowel sound that glides from one vowel to another.']],
  [
    { q: 'Correct the mistakes: "We bought new furnitures for the sitting room: a sofa and two armchair."', steps: ['"Furniture" is uncountable, so it has no plural: say "new furniture" or "three pieces of furniture".', '"two armchair" needs a plural: "two armchairs".', 'Correct: **"We bought new furniture for the sitting room: a sofa and two armchairs."**'] },
  ]),

  // ---------- 9. Appliances ----------
  L('en-articles-1', 'en-f1-professions', '12.1', 'Articles: a, an and the', 10, ['Grammar'], [
    'The **indefinite articles** a and an are used with a singular countable noun mentioned for the first time, or when we mean any one: "We bought **a** fan." "She is **a** nurse." Use **an** before a vowel sound: an iron, an oven, an hour (h is silent); but **a** before a consonant sound: a university, a uniform (they begin with the sound /j/).',
    'The **definite article** the is used when the listener knows which one we mean: something already mentioned ("We bought a fan. **The** fan is very quiet."), the only one ("**the** sun", "**the** moon"), and with some names: the Wouri, the Atlantic Ocean, the Republic of Cameroon.',
    'No article is used with plural or uncountable nouns in general ("Fridges use electricity."), with most names of people, towns and countries ("Bertoua", "Cameroon"), and with meals and many places in fixed phrases ("at school", "after breakfast").',
  ], 'articles-use', 'Choose a or an by the first sound, not the first letter.',
  ['"An" is correct in:', ['an hour', 'an uniform', 'an house', 'an university'], '"Hour" begins with a vowel sound because h is silent.'],
  [['Indefinite article', 'A or an: used with one thing not yet identified.'], ['Definite article', 'The: used when it is clear which thing is meant.']],
  [
    { q: 'Fill in a, an or the: "My aunt has ___ blender and ___ electric oven. ___ oven is in ___ kitchen."', steps: ['first mention, consonant sound → **a** blender', 'first mention, vowel sound → **an** electric oven', 'already mentioned → **The** oven', 'the kitchen of that house → **the** kitchen'] },
  ]),

  L('en-appliances-1', 'en-f1-appliances', '9.2', 'Household appliances and safety', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'An **appliance** is a machine used in the home, usually powered by electricity or gas: refrigerator (fridge) and freezer to keep food cold, gas cooker and oven to cook and bake, electric iron to press clothes, blender to mix and grind, kettle to boil water, washing machine, fan to cool a room, television and radio, rice cooker, microwave oven.',
    'Using appliances **safely** (prudence and attention):\n- never touch switches or plugs with wet hands\n- do not put many plugs on one socket\n- switch off and unplug the iron after use\n- for a gas cooker: check that the tube is not cracked, light the match before you open the gas, turn off the gas at the cylinder after cooking, and never leave a pot cooking alone.',
    'If you **smell gas**: do not light a match or switch on a light; turn off the cylinder, open the windows and doors, leave the room and call an adult.',
  ], 'en1-appliances', 'Read the instructions that come with a new appliance before you use it.',
  ['If you smell gas in the kitchen, you must not:', ['Strike a match', 'Open the windows', 'Turn off the cylinder', 'Call an adult'], 'A flame can make the gas explode.'],
  [['Appliance', 'A machine used in the home.'], ['Socket', 'The place in a wall into which a plug is put.']],
  [
    { q: 'Write two sentences on the function of each appliance: a fridge and a blender.', steps: ['Fridge: "**A fridge keeps food and drinks cold. It stops food from going bad quickly.**"', 'Blender: "**A blender mixes or grinds food. We use it to make fruit juice and to grind tomatoes and pepper.**"'] },
  ]),

  // ---------- 10. Meals ----------
  L('en-relative-1', 'en-f1-meals', '10.1', 'Relative pronouns: who and which', 10, ['Grammar'], [
    'A **relative pronoun** joins two sentences and tells us more about a noun:\n- **who** for people: "I thanked the woman. She cooked the meal." → "I thanked the woman **who** cooked the meal."\n- **which** for things and animals: "Bring the plate. It is on the table." → "Bring the plate **which** is on the table."\n- **that** can replace who or which in many sentences: "the plate **that** is on the table".',
    'Put the relative pronoun **right after** the noun it describes, and do not repeat the noun or a pronoun: "the boy who **he** broke the cup" is wrong; say "the boy who broke the cup".',
  ], 'en1-who-which', 'People take "who"; things and animals take "which".',
  ['"The cake ___ we ate was delicious."', ['which', 'who', 'whose', 'what'], '"Cake" is a thing.'],
  [['Relative pronoun', 'A word such as who or which that begins a clause describing a noun.']],
  [
    { q: 'Join with who or which: (a) "This is the cook. He prepared the wedding meal." (b) "We used the plates. They were washed yesterday."', steps: ['(a) the cook is a person: **"This is the cook who prepared the wedding meal."**', '(b) plates are things: **"We used the plates which were washed yesterday."**'] },
  ]),

  L('en-meals-1', 'en-f1-meals', '10.2', 'Meals, cutlery, table manners and weddings', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'The meals of the day are **breakfast** (morning), **lunch** (midday) and **supper or dinner** (evening). **Cutlery** means knives, forks and spoons; **crockery** means plates, bowls, cups and dishes. To **set the table**: put the plate in the middle, the fork on the left, the knife (blade facing the plate) and the spoon on the right, the glass above the knife, and a serviette (napkin) beside the fork.',
    '**Table manners**: wash your hands before eating, wait until everyone is served or the eldest begins, chew with your mouth closed, do not talk with food in your mouth, do not reach across others ("Please pass the salt"), and thank the cook.',
    'At a **wedding**, the **bride** and **bridegroom** exchange vows and rings before guests; the best man and the bridesmaids help them. Words: ceremony, reception, guests, gifts, toast, wedding cake. Values: harmony, respect, love and sharing. When you describe a wedding, follow the order of events: the arrival, the ceremony, the reception and the end.',
  ], 'en1-table-setting', 'When in doubt, use your cutlery from the outside in.',
  ['The fork is placed:', ['on the left of the plate', 'on the right of the plate', 'in the glass', 'under the plate'], 'The knife and spoon go on the right.'],
  [['Cutlery', 'Knives, forks and spoons.'], ['Crockery', 'Plates, cups, bowls and dishes.'], ['Bride', 'A woman on her wedding day.']],
  [
    { q: 'Describe a wedding in four sentences using time words.', steps: ['"**First**, the bride and bridegroom arrived at the church with their families."', '"**Then** they exchanged vows and rings in front of the guests."', '"**After the ceremony**, everyone went to the reception, where a delicious meal was served."', '"**Finally**, the couple cut the cake and the guests danced late into the night."'] },
  ]),

  // ---------- 11. Waste disposal ----------
  L('en-linking-1', 'en-f1-waste', '11.1', 'Action verbs and linking verbs; the sounds of the plural ending', 12, ['Grammar', 'Speech work'], [
    'An **action verb** names something a person or thing does: sweep, burn, collect, throw, recycle. A **linking verb** does not show action; it joins the subject to a word that describes or names it: be (am, is, are, was, were), become, seem, look, feel, smell, taste. "The gutter **is** full." "The street **looks** clean." "The water **smells** bad."',
    'A test: if you can replace the verb with "is" and the sentence still makes sense, it is a linking verb: "The bins seem full" → "The bins are full".',
    'Speech work: the plural (and the -s of verbs) has **three** pronunciations:\n- **/s/** after voiceless sounds /p, t, k, f/: cups, cats, books, roofs\n- **/z/** after voiced sounds and vowels: bags, bins, drums, trees\n- **/ɪz/** after /s, z, ʃ, tʃ, dʒ/: buses, roses, dishes, matches, bridges.',
  ], 'en1-plural-sounds', 'An extra syllable /ɪz/ is added only after hissing and buzzing sounds.',
  ['In which word is the plural ending said /ɪz/?', ['matches', 'bins', 'cups', 'trees'], '"Match" ends in /tʃ/, so add /ɪz/.'],
  [['Action verb', 'A verb that names an action.'], ['Linking verb', 'A verb that joins the subject to a description of it.']],
  [
    { q: 'Sort the plurals by their ending sound: drums, sacks, boxes, tins, bottles, brushes.', steps: ['/s/: **sacks** (after /k/)', '/z/: **drums, tins, bottles** (after voiced sounds)', '/ɪz/: **boxes, brushes** (after /s/ and /ʃ/)'] },
  ]),

  L('en-waste-1', 'en-f1-waste', '11.2', 'Waste disposal and drafting a notice', 12, ['Vocabulary', 'Reading', 'Writing'], [
    '**Waste** is anything we throw away: food remains, paper, plastic bottles and bags, tins, broken glass. Good **waste disposal**: put rubbish in a dustbin with a lid, sort it (plastic, paper, food waste), reduce, reuse and recycle, and let the council truck collect it. Bad practices: littering, dumping in gutters and streams, and burning plastic. Waste blocks gutters, causes floods and breeds flies, mosquitoes and rats.',
    'Keeping the community clean needs **participation**: neighbours organise clean-up campaigns, clear gutters and plant flowers. Values: cleanliness, responsibility and civic spirit.',
    'A **notice** gives information to many people. It has: a **title** (often in capital letters), **what** is happening, **where**, **when** (date and time), **who** should come or act, and **who issues** the notice (name and position, with the date). Keep it short and clear.',
  ], 'en1-notice', 'Write the title of a notice in capital letters so it catches the eye.',
  ['Which detail must a notice for a clean-up campaign include?', ['The date, time and place', 'A long story', 'The weather last year', 'Nothing'], 'People must know when and where to come.'],
  [['Waste disposal', 'Getting rid of rubbish safely.'], ['Recycle', 'To make used materials into new products.'], ['Notice', 'A short written announcement for the public.']],
  [
    { q: 'Draft a notice calling Form 1 students to clean the school compound on Saturday 14th March from 8 a.m.', steps: ['Title: **CLEAN-UP CAMPAIGN**', 'Body: "All Form 1 students are invited to clean the school compound on Saturday 14th March, from 8 a.m. Bring a cutlass, a broom or a hoe."', 'Signed: "Class prefect, Form 1 A", with the date of writing.'] },
  ]),

  // ---------- 12. Pollution ----------
  L('en-maymight-1', 'en-f1-pollution', '12.1', 'Modals of possibility and probability', 10, ['Grammar'], [
    'Modal verbs show how sure we are:\n- **must**: almost certain it is true: "The river must be polluted; the fish are dying."\n- **may, might, could**: possible: "The water may (might) contain germs." (might is a little less sure)\n- **can’t**: almost certain it is not true: "That can’t be clean water; it is brown."',
    'They are followed by the base form ("may contain", not "may contains"). For the future, "may" and "might" are also used: "It might rain tomorrow."',
  ], 'en1-probability', 'Must and can’t are opposites: one says "surely yes", the other "surely no".',
  ['"The tap is dry. The water ___ be cut." (almost sure)', ['must', 'can’t', 'mustn’t', 'shouldn’t'], 'The evidence makes us almost sure.'],
  [['Possibility', 'Something that may happen or be true.'], ['Probability', 'How likely something is.']],
  [
    { q: 'Choose must, might or can’t: (a) "Those people are wearing masks; the air ___ be polluted." (b) "Take an umbrella; it ___ rain." (c) "He ___ be the thief; he was with me all day."', steps: ['(a) strong evidence → **must**', '(b) only possible → **might**', '(c) impossible → **can’t**'] },
  ]),

  L('en-pollution-1', 'en-f1-pollution', '12.2', 'Air and water pollution; confusables', 12, ['Vocabulary', 'Reading'], [
    '**Pollution** is making the air, water or land dirty and harmful. **Air pollution** comes from smoke from vehicles, factories, burning rubbish and tyres, and dust; it causes coughing, asthma and eye problems. **Water pollution** comes from rubbish, sewage and chemicals dumped into rivers and wells; dirty water spreads cholera, typhoid and diarrhoea.',
    'To keep air and water safe: do not burn plastic, plant trees, keep vehicles in good condition, boil or filter drinking water, keep wells covered and far from toilets, and never throw waste into streams. Attitudes: civic responsibility, hygiene and awareness.',
    '**Confusables** are words that look or sound alike but differ in meaning:\n- **breath** /breθ/ (noun): "Take a deep breath." / **breathe** /briːð/ (verb): "We breathe air."\n- **born** (given birth): "I was born in 2014." / **borne** (carried, endured): "The disease is borne by water."\n- **lose** (stop having) / **loose** (not tight).',
  ], 'en1-confusables', 'Breathe has an -e at the end, like the verb has an action.',
  ['"Cholera is a water-___ disease."', ['borne', 'born', 'bone', 'borned'], 'It is carried by water.'],
  [['Pollution', 'Making the environment dirty and harmful.'], ['Confusables', 'Words that are easily mixed up.']],
  [
    { q: 'Choose the right word: "When the air is polluted, it is hard to (breath/breathe). Hold your (breath/breathe) when you pass the burning dump."', steps: ['After "to", a verb is needed: **breathe**.', 'After "your", a noun is needed: **breath**.'] },
  ]),

  // ---------- 13. Food ----------
  L('en-plurals-1', 'en-f1-food', '13.1', 'Forming the plural of nouns', 12, ['Grammar'], [
    'Most nouns add **-s**: plate → plates, bean → beans. Nouns ending in **s, ss, sh, ch, x** add **-es**: bus → buses, glass → glasses, dish → dishes, peach → peaches.',
    'Other rules:\n- consonant + **y** → **-ies**: baby → babies, berry → berries (but vowel + y adds -s: day → days, key → keys)\n- many nouns in **-f / -fe** → **-ves**: knife → knives, leaf → leaves, loaf → loaves, wife → wives (but roof → roofs, chief → chiefs)\n- some nouns in **-o** add **-es**: potato → potatoes, tomato → tomatoes, mango → mangoes (but radio → radios, photo → photos).',
    '**Irregular plurals**: child → children, man → men, woman → women, tooth → teeth, foot → feet, mouse → mice, person → people. **Same in both**: sheep, fish (usually), deer.',
  ], 'en1-plural-rules', 'When unsure, check a dictionary: it lists irregular plurals.',
  ['The plural of "loaf" is:', ['loaves', 'loafs', 'loafes', 'loaf'], '-f becomes -ves.'],
  [['Plural', 'The form of a noun meaning more than one.'], ['Irregular plural', 'A plural that does not end in -s or -es.']],
  [
    { q: 'Write the plurals: potato, knife, baby, woman, box, key.', steps: ['potato → **potatoes**', 'knife → **knives**', 'baby → **babies**', 'woman → **women**', 'box → **boxes**', 'key → **keys** (vowel + y)'] },
  ]),

  L('en-hygiene-1', 'en-f1-food-budget', '14.1', 'Eating habits, drinking water and food hygiene; a questionnaire', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'Good **eating habits**: eat three meals a day and do not skip breakfast; eat a **balanced diet** (energy foods such as rice, cassava and plantains; body-building foods such as beans, fish, eggs and meat; protective foods such as fruit and vegetables); eat less sugar, salt and oily food; do not overeat.',
    '**Water**: the body needs plenty of clean water every day, more when it is hot or after sport; many health workers advise about six to eight glasses for a young person. Drink boiled, filtered or treated water.',
    '**Food hygiene**: wash hands with soap before cooking and eating; wash fruit and vegetables; cover food from flies and dust; cook meat and fish well; keep raw and cooked food apart; do not eat food that smells bad. A **questionnaire** is a list of questions; answer each one honestly and completely, ticking boxes or writing short answers.',
  ], 'en1-food-hygiene', 'A balanced plate has energy food, body-building food and fruit or vegetables.',
  ['Fish, beans and eggs are mainly:', ['body-building foods', 'energy foods only', 'protective foods only', 'drinks'], 'They are rich in protein.'],
  [['Balanced diet', 'Meals that contain the right amounts of each kind of food.'], ['Food hygiene', 'Keeping food clean and safe to eat.'], ['Questionnaire', 'A list of questions used to collect information.']],
  [
    { q: 'Answer this questionnaire item in a full sentence: "How often do you eat fruit, and which ones?"', steps: ['Give the frequency: "I eat fruit **almost every day**."', 'Give examples: "I usually eat **bananas, oranges and pawpaw**."'] },
  ]),

  // ---------- 14. Home accidents ----------
  L('en-possessive-1', 'en-f1-family-tree', '2.1', 'Possessive adjectives and pronouns; plural nouns with -s', 10, ['Grammar'], [
    '**Possessive adjectives** come before a noun: my, your, his, her, its, our, their. "This is **my** brother. **His** name is Ayuk." "Ngozi loves **her** grandmother." **Possessive pronouns** stand alone, without a noun: mine, yours, his, hers, ours, theirs. "This bag is **mine**; that one is **hers**."',
    'With nouns we use **’s** for one owner (my father’s farm) and **s’** for plural owners ending in -s (my parents’ house). Irregular plurals take ’s: the children’s room. Most nouns form the **plural with -s**: brother → brothers, aunt → aunts, cousin → cousins, uncle → uncles; nouns ending in s, sh, ch or x add -es: box → boxes, church → churches.',
    'Common mistakes: "its" (belonging to it) has no apostrophe ("The bird hurt its wing"); "it’s" means "it is". "Theirs" and "yours" never take an apostrophe.',
  ], 'en1-possessives', 'If you can say "it is" instead, write "it’s"; otherwise write "its".',
  ['"Is this first-aid box ___?" (belongs to you)', ['yours', 'your', 'your’s', 'you'], 'A possessive pronoun, no apostrophe.'],
  [['Possessive adjective', 'A word before a noun that shows ownership: my, your, her.'], ['Possessive pronoun', 'A word that stands alone and shows ownership: mine, yours, hers.']],
  [
    { q: 'Correct the sentence: "The dog bit it’s tail and the children cried. The fault was their’s."', steps: ['"it’s" should be **its** (belonging to the dog).', '"their’s" should be **theirs** (no apostrophe).', '"The dog bit **its** tail and the children cried. The fault was **theirs**."'] },
  ]),

  L('en-accidents-1', 'en-f1-accidents', '14.2', 'Home accidents, prevention and first aid', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'Common **home accidents**: burns and scalds (from fire, hot water and oil), cuts (from knives and broken glass), falls (from wet floors, stairs and ladders), electric shocks (from bad wires and wet hands), poisoning (from medicines, kerosene and chemicals kept in drink bottles) and choking (from small objects).',
    '**Prevention**: keep pot handles turned inwards, keep matches, knives and medicines out of children’s reach, wipe wet floors, repair bad wires, never keep kerosene in drink bottles, and watch small children.',
    'Simple **first aid**: for a burn, cool it under clean running water for about ten minutes; for a small cut, press on it with a clean cloth to stop the bleeding, then cover it; for an electric shock, switch off the power before touching the person; for poisoning, take the person and the container to a health centre at once. Show sympathy and call an adult or a health worker.',
  ], 'en1-accidents', 'Never touch someone who is still in contact with electricity.',
  ['For a burn, the first thing to do is:', ['Cool it under clean running water', 'Rub palm oil on it', 'Cover it with sand', 'Prick the blister'], 'Cooling reduces the damage and pain.'],
  [['Scald', 'A burn caused by hot liquid or steam.'], ['First aid', 'Help given to an injured person before a health worker arrives.'], ['Prevention', 'Stopping something from happening.']],
  [
    { q: 'Write a short paragraph about a home accident and how it could have been prevented.', steps: ['What happened: "Last Sunday, my little brother pulled a pot of hot water from the stove and scalded his arm."', 'First aid: "My mother cooled his arm under running water and took him to the health centre."', 'Prevention: "**The accident could have been prevented if the pot handle had been turned inwards and he had been kept out of the kitchen.**"'] },
  ]),

  // ---------- 15. Doctor ----------
  L('en-frequency-1', 'en-f1-doctor', '15.1', 'Adverbs of frequency and making suggestions', 10, ['Grammar'], [
    '**Adverbs of frequency** tell us how often something happens, from most to least often: always (100%), usually, often, sometimes, rarely or seldom, never (0%).',
    'Position: they come **before the main verb** ("I **always** wash my hands") but **after "be"** ("She is **never** late") and after the first auxiliary ("You should **always** finish your medicine"). "Sometimes" can also begin a sentence.',
    'To **make suggestions**: "Let’s go to the hospital." "Why don’t you see a doctor?" "You should drink more water." "How about resting for a while?" (+ -ing) To reply: "That’s a good idea." "OK, let’s do that."',
  ], 'en1-frequency', 'Picture a scale from always to never and place each adverb on it.',
  ['Which sentence is correct?', ['I usually take my medicine after meals.', 'I take usually my medicine after meals.', 'Usually I my medicine take after meals.', 'I take my medicine usually after meals always.'], 'Before the main verb.'],
  [['Adverb of frequency', 'A word that says how often something happens.'], ['Suggestion', 'An idea offered for someone to consider.']],
  [
    { q: 'Put the adverb in the right place: (a) "He is late for school." (never) (b) "We visit the dentist." (rarely)', steps: ['(a) after "is": **"He is never late for school."**', '(b) before the main verb: **"We rarely visit the dentist."**'] },
  ]),

  L('en-doctor-1', 'en-f1-illnesses', '11.2', 'At the doctor’s: ailments, medicines and hospital departments', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'Common **ailments** (illnesses): headache, stomach ache, toothache, fever, cough, catarrh (a runny nose), malaria, typhoid, diarrhoea. At the doctor’s, the patient describes the **symptoms** ("I have a headache and a high temperature"), the doctor examines and may send the patient for a test at the **laboratory**, then writes a **prescription**, and the patient collects the medicine at the **pharmacy**.',
    '**Hospital departments**: outpatients (for patients who go home the same day), emergency or casualty, paediatrics (children), maternity (mothers and babies), surgery (operations), dentistry (teeth), ophthalmology (eyes), laboratory, pharmacy, radiology (X-rays).',
    'Modern medicine is tested and given in measured doses; some **traditional medicines** are useful, but doses are not measured. Medicines sold on the **roadside** may be fake, expired or spoilt by the sun: buy from a pharmacy. Writing: an **informal letter** to a friend about common health problems at school has your address and the date at the top right, a greeting ("Dear Nfor,"), paragraphs, and a friendly ending ("Your friend, Lum").',
  ], 'en1-hospital', 'Always finish the medicine your doctor prescribed, even if you feel better.',
  ['A sick child is treated in the:', ['paediatric department', 'maternity', 'dentistry', 'mortuary'], 'Paediatrics is the care of children.'],
  [['Symptom', 'A sign of illness, such as fever or pain.'], ['Prescription', 'A doctor’s written instruction for medicine.'], ['Paediatrics', 'The branch of medicine for children.']],
  [
    { q: 'Write the opening paragraph of an informal letter to a friend about malaria at your school.', steps: ['Address and date at the top right; greeting: "Dear Ayuk,"', 'Opening: "I hope you and your family are well. Here in school, many students have been ill with malaria this month."', 'Lead into the body: "Let me tell you what causes it and how we protect ourselves."'] },
  ]),
];
