// English Language lessons for Form 2 (first part): daily routines, personal
// hygiene and school life; shopping, community trade and basic needs.
// Original text written for this app. **double asterisks** mark key terms;
// `examples` are worked examples. Phonetic symbols follow the International
// Phonetic Alphabet.

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

export const LESSONS_2A = [
  // ---------- 1. Daily routine ----------
  L('en-routine-2', 'en-f2-routines', '1.1', 'The simple present for daily routines; telling the time', 12, ['Grammar', 'Speaking'], [
    'A **routine** is what you do regularly, in the same order: wake up, take a bath, dress, eat breakfast, walk to school, attend lessons, come home, do homework, help at home, eat supper and go to bed. We describe routines in the **simple present**.',
    'With **he, she, it** (and one person or thing) the verb takes **-s**: "Ayuk wakes up at 5.30." Add **-es** after -s, -sh, -ch, -x and -o: washes, catches, fixes, goes, does. Consonant + y becomes **-ies**: study → studies, carry → carries. **Have** becomes **has**. Negatives and questions use **do/does** + the base form: "I don’t take the bus." "Does she walk to school?" "Yes, she does."',
    '**Telling the time**: 6.00 six o’clock; 6.05 five past six; 6.15 a quarter past six; 6.30 half past six; 6.45 a quarter to seven; 6.50 ten to seven. We can also say the numbers: "six forty-five". Use **a.m.** for the morning and **p.m.** for the afternoon and evening.',
  ], 'en2-routine', 'Say "he, she, it" and remember the -s.',
  ['"My sister ___ the dishes after supper."', ['washes', 'wash', 'washs', 'washing'], 'After -sh, add -es.'],
  [['Routine', 'The things you do regularly, in the same order.'], ['Simple present', 'The tense for habits, routines and facts.']],
  [
    { q: 'Write Manka’s morning routine from these notes: 5.30 wake up; 5.45 sweep the compound; 6.15 bath; 6.45 breakfast; 7.00 leave for school.', steps: ['Use the simple present with -s for "Manka" (she).', '"Manka **wakes up** at half past five. At a quarter to six she **sweeps** the compound."', '"She **takes** a bath at a quarter past six and **eats** breakfast at a quarter to seven."', '"At seven o’clock she **leaves** for school."'] },
  ]),

  L('en-frequency-2', 'en-f2-routines', '1.2', 'Adverbs of frequency and their position', 10, ['Grammar'], [
    '**Adverbs of frequency** say how often something happens. From most to least often: **always** (every time), **usually**, **often**, **sometimes**, **seldom** or **rarely**, **never** (not at all).',
    'Position: (1) **before the main verb**: "I **always** brush my teeth." "We **often** play football." (2) **after the verb be**: "He is **never** late." "They are **usually** tired on Fridays." (3) after the first auxiliary: "I have **never** seen snow." "Sometimes" can also begin a sentence: "**Sometimes** we eat rice."',
    'Questions: "How often do you go to the market?" Answers: "Every day." "Once a week." "Twice a month." "Three times a year." These expressions usually go at the end of the sentence.',
  ], 'en1-frequency', 'Main verb? Adverb before it. Verb be? Adverb after it.',
  ['Choose the correct sentence.', ['She is always kind.', 'She always is kind.', 'Always she is kind.', 'She is kind always is.'], 'After "be".'],
  [['Adverb of frequency', 'A word that says how often: always, usually, often, sometimes, seldom, never.']],
  [
    { q: 'Put the adverb in the right place: (a) "I walk to school." (usually) (b) "My father is at home on Mondays." (never) (c) "We have eaten snails." (often)', steps: ['(a) before the main verb: **"I usually walk to school."**', '(b) after be: **"My father is never at home on Mondays."**', '(c) after the auxiliary: **"We have often eaten snails."**'] },
  ]),

  // ---------- 2. Schedules ----------
  L('en-timeprep-2', 'en-f2-timetable', '2.1', 'Prepositions of time: at, on and in', 10, ['Grammar'], [
    '**At** for clock times and points of time: at 6 o’clock, at noon, at midnight, at night, at the weekend, at break time, at Christmas (the holiday period).',
    '**On** for days and dates: on Monday, on Tuesday morning, on 20 May, on my birthday, on Christmas Day, on the first day of school.',
    '**In** for longer periods: in the morning, in the afternoon, in the evening; in March; in the rainy season; in 2026; in the 21st century; in two weeks (the future). No preposition before **this, next, last, every**: "I will travel next week." "We have Sports every Friday."',
  ], 'en1-prep-time', 'Small time, at; day or date, on; big time, in.',
  ['"School resumes ___ September."', ['in', 'on', 'at', 'by'], 'In + month.'],
  [['Preposition of time', 'A word such as at, on or in that shows when something happens.']],
  [
    { q: 'Complete: "Our school opens ___ September. Lessons start ___ 7.30 ___ the morning, and we have Sports ___ Wednesday afternoon. The holidays begin ___ Christmas."', steps: ['month → **in** September', 'clock time → **at** 7.30', 'part of the day → **in** the morning', 'a particular day → **on** Wednesday afternoon', 'the holiday period → **at** Christmas'] },
  ]),

  L('en-schedule-2', 'en-f2-timetable', '2.2', 'Reading a schedule and writing a routine timeline', 12, ['Reading', 'Writing'], [
    'A **schedule** or **timetable** shows activities and the times they happen, in columns or rows. To read it, find the day or the time, then follow the line or column to the activity. Questions about schedules use "What time…?", "When…?" and "What happens at…?": "What time does the Health Club meet?" "It meets at 3 p.m. on Thursdays."',
    'A **routine timeline** puts activities in order along a line, from the earliest to the latest. When you turn it into a paragraph, use **sequence words**: first, next, then, after that, later, finally. Keep the simple present for routines: "First I wake up at 5.30. Then I fetch water. After that I take a bath. Finally I leave for school at 7.00."',
  ], 'en2-schedule', 'Read across for the activity and down for the time.',
  ['Which word comes last in a sequence?', ['finally', 'first', 'next', 'then'], 'Finally ends the list of steps.'],
  [['Schedule', 'A plan that shows activities and their times.'], ['Sequence word', 'A word that shows order: first, then, after that, finally.']],
  [
    { q: 'Turn this Saturday timeline into four sentences: 6.00 wake up; 7.00 wash clothes; 10.00 go to the market; 4.00 p.m. play football.', steps: ['"**First**, I wake up at six o’clock."', '"**Then** I wash my clothes at seven."', '"**After that**, I go to the market at ten."', '"**Finally**, I play football at four in the afternoon."'] },
  ]),

  // ---------- 3. Personal hygiene ----------
  L('en-presentcont-2', 'en-f2-hygiene', '3.1', 'The simple present and the present continuous', 12, ['Grammar'], [
    'The **simple present** is for habits and routines: "I **bathe** every morning." "She **brushes** her teeth twice a day." Signal words: every day, always, usually, on Mondays.',
    'The **present continuous** is for actions happening **now**: am/is/are + verb-**ing**. "I **am combing** my hair." "They **are washing** their uniforms." Signal words: now, right now, at the moment, look!, listen!. Spelling: take → taking (drop e); swim → swimming (double the consonant); lie → lying.',
    'Compare: "Bih usually **washes** her clothes on Saturday, but today she **is helping** her mother in the farm." Verbs such as like, know, want and need are not normally used in the continuous: "I **want** a towel", not "I am wanting".',
  ], 'en2-simple-continuous', 'Every day? Simple present. Right now? Present continuous.',
  ['"At the moment the boys ___ the toilets."', ['are cleaning', 'clean', 'cleans', 'cleaned'], '"At the moment" signals now.'],
  [['Present continuous', 'am/is/are + -ing: for actions happening now.']],
  [
    { q: 'Choose the tense: "Every evening Etah (wash) his feet before bed. Look! Now he (dry) them with a towel."', steps: ['"every evening" → habit → **washes**', '"Look! Now" → happening now → **is drying**'] },
  ]),

  L('en-hygiene-2', 'en-f2-hygiene', '3.2', 'Words for personal hygiene; explaining hygiene practices', 12, ['Vocabulary', 'Speaking', 'Writing'], [
    '**Personal hygiene** is keeping your body clean to stay healthy. Words: bathe or take a bath, soap, sponge, towel, toothbrush, toothpaste, comb, nail cutter, deodorant, clean underwear, sanitary pad, wash, scrub, rinse, dry, trim, brush.',
    'Good practices: bathe every day with soap and water; brush your teeth in the morning and at night; wash your hands with soap after using the toilet and before eating; keep your nails short and clean; comb or brush your hair; wear clean clothes and change underwear daily; do not share towels or toothbrushes.',
    'To **explain** a practice, say what to do and why, using **because** or **so that**: "Wash your hands before eating **because** dirty hands carry germs." "Keep your nails short **so that** dirt cannot hide under them." Poor hygiene can cause body odour, skin infections, tooth decay, diarrhoea and worms.',
  ], 'en2-hygiene', 'Always give the reason: what to do, and why.',
  ['Why should you not share a toothbrush?', ['it can pass germs from one mouth to another', 'it makes the brush too clean', 'it wastes toothpaste', 'brushes are expensive only'], 'Germs pass easily.'],
  [['Personal hygiene', 'Keeping your body clean to stay healthy.'], ['Germ', 'A tiny living thing that can cause disease.']],
  [
    { q: 'Explain two hygiene practices to a Form 1 student, with reasons.', steps: ['"**Wash your hands with soap after using the toilet, because** germs from the toilet can make you sick."', '"**Brush your teeth every morning and night so that** your teeth stay strong and your breath stays fresh."'] },
  ]),

  // ---------- 4. Sanitation ----------
  L('en-sanitation-2', 'en-f2-sanitation', '4.1', 'Sanitation at home and at school', 12, ['Vocabulary', 'Reading', 'Speaking'], [
    '**Sanitation** means keeping our surroundings clean and getting rid of waste safely. Words: latrine, toilet, flush, gutter, drain, refuse (rubbish), dustbin, refuse dump, compost pit, disinfectant, broom, rake, wheelbarrow, stagnant water, flies, mosquitoes, cholera, typhoid.',
    'Good practices: sweep the house and the compound every day; put rubbish in a covered dustbin and empty it regularly; clean toilets and latrines with water and disinfectant; keep gutters open so water flows away; cover drinking water; cut the grass and fill holes where water collects; never urinate or throw rubbish in the open.',
    'Poor sanitation brings **flies** (which carry germs to food), **mosquitoes** (which breed in stagnant water and spread malaria) and diseases such as **cholera** and **typhoid**. At school, the Health Club and the class prefects can organise clean-up days.',
  ], 'en2-sanitation', 'A clean compound is a healthy compound.',
  ['Mosquitoes breed in:', ['stagnant water', 'clean dry floors', 'covered pots', 'sunlight'], 'Remove standing water.'],
  [['Sanitation', 'Keeping surroundings clean and disposing of waste safely.'], ['Stagnant water', 'Water that does not flow.']],
  [
    { q: 'Give three sanitation rules for your classroom, each with a reason.', steps: ['"**Sweep the classroom every morning, because** dust and rubbish attract flies."', '"**Put papers in the dustbin, so that** the floor stays clean."', '"**Empty the dustbin every day, because** a full bin smells and spreads germs."'] },
  ]),

  L('en-vowels-2', 'en-f2-sanitation', '4.2', 'The short vowel /æ/ and the long vowel /ɑː/', 10, ['Speech work'], [
    '**/æ/** is a short vowel: open your mouth wide, spread the lips a little and say it quickly: cat, hat, bag, man, map, sad, black, hand, cap, pack, ham.',
    '**/ɑː/** is a long vowel: open the mouth, keep the tongue low and back and hold the sound: car, far, park, heart, father, calm, half, palm, glass, class, laugh, aunt. Common spellings: **ar** (car, farm), **al** (calm, half), **a** before s, th or f in many words (glass, path, after), and some others (heart, laugh, aunt).',
    '**Minimal pairs** are two words that differ in one sound: cat /kæt/ and cart /kɑːt/; hat /hæt/ and heart /hɑːt/; ham /hæm/ and harm /hɑːm/; pack /pæk/ and park /pɑːk/; cap /kæp/ and carp /kɑːp/. Say them aloud and listen for the length.',
  ], 'en2-a-vowels', 'Long /ɑː/: hold it. Short /æ/: cut it quick.',
  ['Which word has the long vowel /ɑː/?', ['park', 'pack', 'pan', 'pat'], 'Park /pɑːk/.'],
  [['Minimal pair', 'Two words that differ in only one sound, such as cat and cart.'], ['Long vowel', 'A vowel sound held longer, marked ː.']],
  [
    { q: 'Sort into /æ/ and /ɑː/: hand, farm, black, father, sad, half.', steps: ['/æ/ (short): **hand, black, sad**', '/ɑː/ (long): **farm, father, half**'] },
  ]),

  // ---------- 5. School life ----------
  L('en-schoolvocab-2', 'en-f2-schoollife', '5.1', 'The people and places of a secondary school', 12, ['Vocabulary', 'Reading'], [
    '**People**: the **principal** heads the school; the **vice-principals** help run it; the **discipline master or mistress** keeps order; the **bursar** manages fees and money; the **librarian** runs the library; teachers, the school nurse, the guidance counsellor, the secretary, the cook, the watchman and the cleaners. Students: the senior prefect, class prefects and class monitors.',
    '**Places**: classrooms, the staffroom, the principal’s office, the library, the laboratory, the computer room, the canteen, the sick bay or infirmary, the dormitories in a boarding school, the assembly ground, the sports field and the toilets.',
    '**School life** also includes **co-curricular activities**: clubs (Health, Journalism, Debate, Science, Environment), sports, choir and cultural groups. They build skills, friendship and confidence. Describe what happens with the simple present: "The Debate Club meets on Wednesdays. Members argue about topics such as the use of phones in school."',
  ], 'en2-school-staff', 'Each staff member has a role: know who to go to for what.',
  ['A student who is sick at school should first go to the:', ['sick bay', 'library', 'bursar’s office', 'canteen'], 'The school nurse is there.'],
  [['Bursar', 'The person who manages a school’s money.'], ['Co-curricular activity', 'An activity beside class lessons, such as a club or sport.']],
  [
    { q: 'Who would you see for each problem? (a) paying fees (b) borrowing a novel (c) a fight in the class', steps: ['(a) **the bursar**', '(b) **the librarian**', '(c) **the class prefect, then the discipline master or mistress**'] },
  ]),

  L('en-myschool-2', 'en-f2-schoollife', '5.2', 'Describing my school in a paragraph', 12, ['Writing'], [
    'A good **descriptive paragraph** has three parts: a **topic sentence** that gives the main idea ("My school is a large and friendly place"); **supporting sentences** that give details (buildings, people, clubs, what you like); and a **concluding sentence** that rounds off the idea ("I am proud to be a student there").',
    'Use the simple present, adjectives (large, modern, quiet, green, busy), prepositions of place (next to, behind, opposite, in front of) and linking words (also, in addition, but). Keep to one main idea in each paragraph and check spelling and full stops at the end.',
  ], 'en3-paragraph', 'Topic sentence first; details next; a closing sentence last.',
  ['The sentence that gives the main idea of a paragraph is the:', ['topic sentence', 'concluding sentence', 'title', 'date'], 'It usually comes first.'],
  [['Topic sentence', 'The sentence that states the main idea of a paragraph.'], ['Concluding sentence', 'The last sentence, which rounds off the idea.']],
  [
    { q: 'Write a five-sentence paragraph about your school.', steps: ['Topic sentence: "**My school, Government Bilingual High School, is a large and friendly place.**"', 'Details: "It has twelve classrooms, a library and a laboratory. The sports field is behind the main block."', '"I belong to the Journalism Club, which meets every Thursday."', 'Concluding sentence: "**I am proud to be a student of this school.**"'] },
  ]),

  // ---------- 6. School safety ----------
  L('en-safetyrules-2', 'en-f2-safety', '6.1', 'School safety rules and the fire drill', 12, ['Vocabulary', 'Speaking'], [
    'Safety rules protect everyone. They are written in the **imperative** (the base form of the verb, no subject), often with **always** and **never**: "**Walk**, do not run, in the corridors." "**Always** wear goggles in the laboratory." "**Never** touch a broken electric wire." "**Do not** play near the gate."',
    '**The fire drill**: when the alarm or bell rings, stop work, leave your bags, walk out quickly and calmly in a single line, follow the teacher, go to the **assembly point**, and wait while the teacher counts the class. Never go back inside until you are told it is safe.',
    'Other safety areas: the **laboratory** (no eating, no tasting, report spills), the **road** at the gate (use the crossing, look left, right and left again), the **sports field** (warm up, no fighting) and **bullying** (report it to a teacher, a prefect or the guidance counsellor).',
  ], 'en2-fire-drill', 'Safety rules start with a verb: walk, wear, report, never.',
  ['In a fire drill, after leaving the classroom you go to the:', ['assembly point', 'library', 'canteen', 'dormitory'], 'The teacher counts everyone there.'],
  [['Imperative', 'The form of a verb used for commands and instructions.'], ['Assembly point', 'The safe place where people gather in an emergency.']],
  [
    { q: 'Write four safety rules for the laboratory in the imperative.', steps: ['"**Always** listen to the teacher’s instructions."', '"**Never** taste or smell chemicals directly."', '"**Wear** goggles and a lab coat."', '"**Report** any spill or broken glass at once."'] },
  ]),

  L('en-safetynotice-2', 'en-f2-safety', '6.2', 'Reading and writing a safety notice', 12, ['Reading', 'Writing'], [
    'A **notice** gives short, important information to many people. Its parts: the **name of the school or organisation**, the **title** in capital letters (SAFETY NOTICE, NOTICE), the **date**, the **message** in short clear sentences or points, and the **writer’s name and position** at the bottom (for example "The Discipline Master").',
    'When you **read** a notice, find who it is for, what it asks you to do, and when. When you **write** one, keep it short, use the imperative or "must", put the most important rule first and make sure the date and the writer are clear. A notice is not a letter: there is no "Dear…" and no "Yours…".',
  ], 'en1-notice', 'Who, what, when, and who wrote it: the four things a notice must show.',
  ['A notice is signed with the writer’s:', ['name and position', 'favourite food', 'home address only', 'age'], 'So readers know who gave the information.'],
  [['Notice', 'A short written message giving important information to many people.']],
  [
    { q: 'Write a short safety notice about the new pedestrian crossing at the school gate.', steps: ['Title: **SAFETY NOTICE**, school name and date.', 'Message: "**All students must use the new crossing at the gate. Look left, right and left again before crossing. Do not play near the road.**"', 'Signed: **The Discipline Master**.'] },
  ]),

  // ---------- 7. Asking prices ----------
  L('en-politeprice-2', 'en-f2-prices', '7.1', 'Asking for prices and making polite requests', 12, ['Speaking', 'Grammar'], [
    'Asking the price: "How much **is** this bag?" (one thing) "How much **are** these tomatoes?" (more than one) "How much does it cost?" "What is the price of a kilo of beans?" Answers: "It’s 1 500 francs." "They’re 100 francs each." "A kilo is 800 francs."',
    'Polite requests: "**Could you** show me that blue shirt, **please**?" "**Can I** try it on?" "**Do you have** a smaller size?" "**I’d like** two loaves of bread, please." Polite words: please, thank you, excuse me, sorry. A polite customer greets the seller first: "Good morning, Ma. How much is the rice?"',
    'Shop words: customer, seller or shopkeeper, price, cost, cheap, expensive, change, receipt, size, quantity, stock ("out of stock" means none is left).',
  ], 'en2-polite-shopping', 'Greet first, ask politely, thank at the end.',
  ['"How much ___ the oranges?"', ['are', 'is', 'am', 'does'], '"Oranges" is plural.'],
  [['Polite request', 'A courteous way of asking, such as "Could you …, please?"'], ['Out of stock', 'Not available because none is left.']],
  [
    { q: 'Make this dialogue polite: "Give me bread. How much?" "300." "Take."', steps: ['Customer: "**Good morning. I’d like a loaf of bread, please. How much is it?**"', 'Seller: "**It’s 300 francs.**"', 'Customer: "**Here you are. Thank you.**"'] },
  ]),

  L('en-numbers-2', 'en-f2-prices', '7.2', 'Money words and amounts in words', 10, ['Vocabulary', 'Writing'], [
    'Cameroon uses the **CFA franc** (written **FCFA** or F). Money comes in **coins** (for example 25, 50 and 100 francs) and **notes** (for example 1 000, 2 000, 5 000 and 10 000 francs). Money words: cash, coin, note, price, change, balance, receipt, wallet, purse, savings, mobile money.',
    'Writing amounts in **words**: 350 three hundred and fifty; 1 200 one thousand two hundred; 2 750 two thousand seven hundred and fifty; 15 000 fifteen thousand; 100 000 one hundred thousand; 1 000 000 one million. In British English we put **and** before the tens: "three hundred **and** fifty". "Thousand", "hundred" and "million" take no -s after a number: five thousand, not five thousands.',
  ], 'en2-money-words', 'No -s on "thousand" after a number: two thousand francs.',
  ['1 500 francs in words is:', ['one thousand five hundred francs', 'one thousands five hundreds francs', 'fifteen thousand francs', 'one hundred and fifty francs'], 'No -s after a number.'],
  [['Change', 'Money given back when you pay more than the price.'], ['Receipt', 'A paper that proves you have paid.']],
  [
    { q: 'You buy rice for 1 750 francs and pay with a 2 000-franc note. Write the change in figures and words.', steps: ['2 000 − 1 750 = **250**', 'In words: **two hundred and fifty francs**'] },
  ]),

  // ---------- 8. Bargaining ----------
  L('en-bargain-2', 'en-f2-bargain', '8.1', 'Bargaining politely in the market', 12, ['Speaking', 'Vocabulary'], [
    '**Bargaining** means discussing a price until buyer and seller agree. In many Cameroonian markets it is normal for foodstuffs, clothes and crafts, but not for fixed-price goods in supermarkets or chemists.',
    'Buyer’s phrases: "How much is it?" "That’s a bit expensive." "Can you reduce it, please?" "Will you take 1 000 francs?" "What is your last price?" "If I buy two, can you give me a better price?" "OK, I’ll take it." Seller’s phrases: "It’s good quality." "I can give it to you for 1 200." "That is my last price." "Add a little." "Thank you, come again."',
    'Rules of polite bargaining: greet the seller, smile, do not insult the goods or the seller, make a fair offer, and keep your word once you agree. If you cannot agree, say "Thank you, maybe next time" and move on.',
  ], 'en2-bargain', 'Offer fairly and keep your word once you agree.',
  ['"What is your last price?" asks the seller to:', ['give the lowest price they will accept', 'raise the price', 'close the shop', 'give it free'], 'The final, lowest offer.'],
  [['Bargain', 'To discuss a price until both sides agree; also, something bought cheaply.']],
  [
    { q: 'Complete the bargaining dialogue: Seller: "The basin is 2 000 francs." Buyer: ___ Seller: "I can take 1 800." Buyer: ___', steps: ['Buyer: "**That’s a bit expensive. Can you reduce it, please? Will you take 1 500?**"', 'Buyer: "**Let’s agree on 1 700.**" (Seller agrees.) "**OK, I’ll take it. Thank you.**"'] },
  ]),

  L('en-pastreg-2', 'en-f2-bargain', '8.2', 'The simple past of regular verbs and the sounds of -ed', 12, ['Grammar', 'Speech work'], [
    'The **simple past** tells about finished actions at a past time: yesterday, last week, two days ago, in 2024. **Regular verbs** add **-ed**: ask → asked, want → wanted, offer → offered, accept → accepted, order → ordered, deliver → delivered. Spelling: verbs ending in e add -d (reduce → reduced, arrive → arrived); consonant + y → -ied (carry → carried, try → tried); one short vowel + one consonant → double it (stop → stopped, shop → shopped).',
    'Negatives and questions use **did** + the base form: "I **did not (didn’t) want** it." "**Did** you **ask** the price?" "Yes, I did."',
    'The **-ed** ending has three sounds: **/ɪd/** after t and d (wanted, needed, accepted); **/t/** after voiceless sounds such as p, k, s, sh, ch, f (stopped, asked, washed, reached, laughed); **/d/** after voiced sounds and vowels (offered, ordered, carried, cleaned).',
  ], 'ed-endings', 'Only t and d add a syllable: want-ed, need-ed.',
  ['The -ed of "ordered" is said:', ['/d/', '/t/', '/ɪd/', 'silent'], 'After a voiced sound.'],
  [['Regular verb', 'A verb whose past tense ends in -ed.'], ['Simple past', 'The tense for actions finished in the past.']],
  [
    { q: 'Put into the simple past: "Yesterday my mother (shop) at the market. She (ask) the price of beans and (try) to bargain. The seller (accept) her offer."', steps: ['shop → **shopped** (double p)', 'ask → **asked** (/t/)', 'try → **tried** (y → ied)', 'accept → **accepted** (/ɪd/)'] },
  ]),

  // ---------- 9. Quantities ----------
  L('en-countable-2', 'en-f2-quantities', '9.1', 'Countable and uncountable nouns; containers and measures', 12, ['Grammar', 'Vocabulary'], [
    '**Countable nouns** can be counted and have a plural: an orange, two oranges; a plantain, three plantains; an egg, a dozen eggs. **Uncountable nouns** cannot be counted one by one and have no plural: rice, salt, sugar, oil, water, flour, money, bread, information, advice. Use a singular verb with them: "The rice **is** cheap today."',
    'To count uncountable things we use **containers and measures**: a bag of rice, a cup of rice, a bottle of oil, a litre of kerosene, a kilo of meat, a loaf of bread, a bar of soap, a packet of salt, a tin of tomato paste, a glass of water. Market goods also come in a **bunch** (bananas, plantains), a **heap** (tomatoes, pepper), a **basket**, a **bundle** (firewood, vegetables), a **tray** (eggs) and a **crate** (drinks).',
  ], 'en2-containers', 'Count the container, not the rice: two bags of rice.',
  ['Which is correct?', ['two bags of rice', 'two rices', 'two rice bags of', 'a rices'], 'Rice is uncountable.'],
  [['Countable noun', 'A noun that can be counted: one egg, two eggs.'], ['Uncountable noun', 'A noun with no plural, such as rice or water.']],
  [
    { q: 'Write a shopping list with a container or measure for each: oil, bread, soap, bananas, tomatoes.', steps: ['**a bottle of** oil', '**two loaves of** bread', '**a bar of** soap', '**a bunch of** bananas', '**a heap of** tomatoes'] },
  ]),

  L('en-quantifiers-2', 'en-f2-quantities', '9.2', 'Some, any, much, many, a few and a little', 12, ['Grammar'], [
    '**Some** is used in positive sentences and in offers and requests: "I bought **some** fish." "Would you like **some** tea?" **Any** is used in negatives and questions: "There isn’t **any** salt." "Do you have **any** onions?"',
    '**Many** and **a few** go with countable nouns: "How **many** eggs?" "I have **a few** coins." **Much** and **a little** go with uncountable nouns: "How **much** money?" "Add **a little** oil." "Much" is used mostly in questions and negatives: "We don’t have **much** time." In positive sentences we usually say **a lot of** (for both): "There is a lot of rice." "There are a lot of people."',
    '**A few / a little** (positive: some, enough) and **few / little** (negative: not enough): "I have **a few** friends here" (good). "**Few** people came" (disappointing).',
  ], 'en3-quantifiers', 'How many for things you count; how much for things you measure.',
  ['"There aren’t ___ tomatoes left."', ['any', 'some', 'much', 'a little'], 'Negative + countable: any.'],
  [['Quantifier', 'A word that tells how much or how many: some, any, much, many, a few, a little.']],
  [
    { q: 'Classify these market items for "How much" or "How many": beans, mangoes, palm oil, onions, salt, avocados.', steps: ['**How much**: beans (sold by the cup or kilo), palm oil, salt', '**How many**: mangoes, onions, avocados', 'Example: "How much palm oil do we need?" "How many mangoes did you buy?"'] },
  ]),

  // ---------- 10. Basic needs ----------
  L('en-pastirreg-2', 'en-f2-needs', '10.1', 'Irregular verbs of buying and selling in the simple past', 12, ['Grammar'], [
    '**Irregular verbs** do not add -ed in the past. Verbs used in trade: buy → **bought**; sell → **sold**; pay → **paid**; spend → **spent**; cost → **cost**; give → **gave**; take → **took**; bring → **brought**; get → **got**; find → **found**; lose → **lost**; keep → **kept**; lend → **lent**; owe → owed (regular).',
    'Do not confuse **bought** (from buy) with **brought** (from bring): "I **bought** the bread and **brought** it home."',
    'In negatives and questions, use **did** + the **base form**, never the past form: "Did you **buy** it?" (not "Did you bought"). "She didn’t **pay** the full price." "How much did it **cost**?" "It **cost** 500 francs."',
  ], 'en2-trade-verbs', 'After did, go back to the base form.',
  ['"How much did the shoes ___?"', ['cost', 'costed', 'costs', 'costing'], 'After did: base form.'],
  [['Irregular verb', 'A verb whose past form does not end in -ed, such as buy, bought.']],
  [
    { q: 'Correct the errors: "Yesterday I buyed rice and payed 2 000 francs. Did you brought the bag?"', steps: ['buyed → **bought**', 'payed → **paid**', 'Did you brought → **Did you bring** (base form after did)'] },
  ]),

  L('en-basicneeds-2', 'en-f2-needs', '10.2', 'Basic needs and wants; a guided narrative of a market day', 14, ['Vocabulary', 'Writing'], [
    '**Basic needs** are things people cannot live well without: food, clean water, shelter (a house), clothing, health care, education and safety. **Wants** are things we would like but can live without: a new phone, sweets, expensive shoes. A family that plans well spends on needs first and saves a little before buying wants.',
    'A **guided narrative** tells a story from given points, usually in about **100 to 120 words**. Plan it: (1) the beginning: who, where, when ("Last Saturday my aunt and I went to Mile 17 market"); (2) the events in order, in the **simple past**, with time connectors (first, then, later, after that); (3) the end and how you felt ("We came home tired but happy"). Use quantity words and the market vocabulary you know.',
  ], 'en2-needs-wants', 'Needs before wants; plan the story before you write it.',
  ['Which is a want, not a need?', ['a new video game', 'drinking water', 'a place to sleep', 'medicine when sick'], 'You can live without it.'],
  [['Basic need', 'Something necessary for life, such as food or shelter.'], ['Want', 'Something we would like but do not need to live.']],
  [
    { q: 'Write the opening and two event sentences of a narrative: "A day at the market with my mother".', steps: ['Beginning: "**Last Saturday, my mother and I went to the main market early in the morning.**"', 'Event 1: "**First, we bought two bags of rice and a bottle of oil.**"', 'Event 2: "**Then my mother bargained for a bunch of plantains, and the seller reduced the price.**"'] },
  ]),
];
