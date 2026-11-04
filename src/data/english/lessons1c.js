// English Language lessons for Form 1 written for the 2026/2027 harmonised
// scheme: the points of the five modules not already taught by the lessons in
// lessons1a.js and lessons1b.js. Original text written for this app.
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

export const LESSONS_1C = [
  // ---------- 1. Introductions ----------
  L('en-tobe-1', 'en-f1-introductions', '1.2', 'The verbs "to be" and "to have"; subject pronouns; numbers 1 to 50; the sound /h/', 12, ['Grammar', 'Speech work'], [
    'The **subject pronouns** are I, you, he, she, it, we, you (plural) and they. In the simple present, **to be** is: I **am**; you **are**; he, she, it **is**; we, you, they **are**. Short forms: I’m, you’re, he’s, she’s, it’s, we’re, they’re. Negative: I am not (I’m not), she is not (isn’t), they are not (aren’t). Question: "Are you new here?" "Yes, I am."',
    '**To have** is: I, you, we, they **have**; he, she, it **has**. "I have a brother." "She has two sisters." Negative: "I don’t have a phone." "He doesn’t have a ruler." Question: "Do you have a pen?" "Does she have a bag?"',
    '**Numbers 1 to 50**: one, two, three … ten; eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty; twenty-one … thirty, forty (no u), fifty. Write numbers above twenty with a hyphen: thirty-seven. Speech work: **/h/** is a breath sound at the start of words: house, happy, head, hello, have. It is **silent** in hour, honest, honour and heir, so we say "an hour", "an honest boy".',
  ], 'en1-greetings', 'Never drop the h in "house" or add one to "hour".',
  ['"My friends ___ from Bamenda."', ['are', 'is', 'am', 'has'], '"Friends" = they, so "are".'],
  [['Subject pronoun', 'A pronoun used as the subject: I, you, he, she, it, we, they.'], ['Short form', 'A shortened form of words, such as I’m for I am.']],
  [
    { q: 'Complete the introduction: "Hello! My name ___ Ngum. I ___ eleven. I ___ two sisters and one brother. My brother ___ fourteen."', steps: ['name = it → **is**', 'I → **am**', 'I (have) → **have**', 'my brother = he → **is**', '"My name **is** Ngum. I **am** eleven. I **have** two sisters and one brother. My brother **is** fourteen."'] },
  ]),

  // ---------- 3. Chores ----------
  L('en-chores-1', 'en-f1-chores', '3.3', 'Household chores, object pronouns and the endings /s/, /z/ and /ɪz/', 12, ['Vocabulary', 'Grammar', 'Speech work'], [
    '**Household chores** are the daily tasks of a home: sweeping the floor and the compound, washing plates and clothes, fetching water, cooking, ironing, making the bed, feeding animals, weeding the garden, taking out the rubbish. Sharing them fairly among boys and girls teaches **responsibility** and **cooperation**.',
    '**Object pronouns** receive the action: me, you, him, her, it, us, them. "Mama asked **me** to sweep." "I helped **her** with the cooking." "Wash **them** carefully." Use them after verbs and prepositions: "for **him**", "with **us**".',
    'Speech work: the **-s** or **-es** of the third person singular is pronounced like the plural: **/s/** after voiceless sounds (cooks, sweeps, laughs); **/z/** after voiced sounds and vowels (cleans, irons, feeds, dries); **/ɪz/** after /s/, /z/, /ʃ/, /tʃ/ and /dʒ/ (washes, fixes, catches, judges). Examples: she cooks /kʊks/, he cleans /kliːnz/, she washes /ˈwɒʃɪz/.',
  ], 'en1-plural-sounds', 'Say the verb and feel the last sound before you add -s.',
  ['"My sister washes the plates." The ending of "washes" is said:', ['/ɪz/', '/s/', '/z/', 'silent'], 'After /ʃ/, the ending is /ɪz/.'],
  [['Chore', 'A routine task done in the home.'], ['Object pronoun', 'A pronoun that receives the action: me, him, her, us, them.']],
  [
    { q: 'Replace the nouns in brackets with object pronouns: "I help (my mother). She thanks (my brother and me). We feed (the goats) every evening."', steps: ['my mother → **her**', 'my brother and me → **us**', 'the goats → **them**', '"I help **her**. She thanks **us**. We feed **them** every evening."'] },
  ]),

  // ---------- 4. Descriptions ----------
  L('en-describe-1', 'en-f1-descriptions', '4.2', 'Describing appearance respectfully; the vowels /æ/ and /e/', 12, ['Vocabulary', 'Writing', 'Speech work'], [
    'Words for **physical appearance**:\n- height: tall, short, of medium height\n- build: slim, thin, well-built, plump, of medium build\n- hair: short, long, curly, kinky, straight, plaited, braided, shaved, bald\n- complexion: dark, light, brown\n- face: round, oval; a wide smile; a scar on the left cheek\n- clothes: what the person was wearing.',
    'Describe people **respectfully**: use neutral words (plump, not "fat and ugly") and avoid mocking anyone’s body. A **missing person** description must be accurate: name, age, height, build, complexion, hair, clothes, where and when last seen, and who to contact.',
    'Speech work: **/æ/** is an open vowel, as in man, bad, hat, cap; **/e/** is a mid vowel, as in men, bed, pen, set. Compare: man – men, bad – bed, pan – pen, sat – set, had – head.',
  ], 'en1-adjectives', 'Describe from top to bottom: hair, face, build, then clothes.',
  ['Which description is respectful?', ['"She is plump and has a friendly smile."', '"She is fat and ugly."', '"She looks like a barrel."', '"Nobody likes her face."'], 'Use neutral, kind words.'],
  [['Complexion', 'The colour and appearance of the skin of the face.'], ['Build', 'The size and shape of a person’s body.']],
  [
    { q: 'Write a missing-person description of a boy called Eyong, 10, last seen at the market.', steps: ['Name, age and height: "**Eyong Tabi, 10 years old, about 1.3 metres tall.**"', 'Appearance: "He is slim, with a dark complexion and short, kinky hair."', 'Clothes and place: "He was wearing a blue school uniform and was last seen at the Central Market on Saturday afternoon."', 'Contact: "Please call his parents or the nearest police station."'] },
  ]),

  // ---------- 5. School ----------
  L('en-campus-1', 'en-f1-school', '5.3', 'The school campus: buildings, directions and word stress', 12, ['Vocabulary', 'Speaking', 'Speech work'], [
    'A secondary school campus includes: classrooms, the **principal’s office**, the staffroom, the secretariat, the library, **laboratories**, the computer room, the workshop, the canteen, the infirmary (sick bay), the playground or football field, the assembly ground with the flag post, dormitories in boarding schools, and **latrines** or toilets.',
    'Giving directions on campus: "From the gate, walk straight to the flag post. The library is **behind** the staffroom, **next to** the computer room. The infirmary is **opposite** the canteen." Use there is / there are to describe: "There are four laboratories. There is a big field behind the classrooms." Knowing the campus helps you move **safely** (fire exits, the assembly point).',
    'Speech work: **word stress** in long words. One syllable is stronger than the others: LIbrary, laBOratory (British English), comPUter, inFIRmary, PRINcipal, canTEEN. Learn the stress with the word, and check a dictionary, where it is shown by a mark (ˈ) before the stressed syllable.',
  ], 'en1-classroom', 'Clap the syllables of a word: the loudest clap is the stress.',
  ['In "computer", the stressed syllable is:', ['the second: com-PU-ter', 'the first: COM-pu-ter', 'the last: com-pu-TER', 'none'], '/kəmˈpjuːtə/.'],
  [['Campus', 'The grounds and buildings of a school.'], ['Infirmary', 'The room where sick students are cared for.'], ['Word stress', 'The extra force on one syllable of a word.']],
  [
    { q: 'Give directions from the gate to the library, which is behind the staffroom.', steps: ['"**Enter by the main gate and walk straight to the flag post.**"', '"Turn left and go past the staffroom."', '"**The library is behind the staffroom, next to the computer room.**"'] },
  ]),

  // ---------- 6. Class rules ----------
  L('en-stationery-1', 'en-f1-class-rules', '6.3', 'Stationery and the uniform; irregular plurals; silent letters', 12, ['Vocabulary', 'Grammar', 'Speech work'], [
    '**Stationery** means writing and drawing materials: exercise books, notebooks, pens, pencils, a ruler, an eraser, a sharpener, a geometry set, crayons, a calculator. **Textbooks** are the books prescribed for each subject. The **school uniform** (shirt or blouse, trousers, shorts or skirt, school badge, shoes) must be worn neatly according to the rules.',
    '**Irregular plurals** do not add -s: child → children, man → men, woman → women, tooth → teeth, foot → feet, mouse → mice, person → people. Some nouns stay the same: sheep, fish, deer. Some are always plural: scissors, trousers, glasses ("These scissors are sharp").',
    'Speech work: **silent letters** are written but not pronounced: **w** in write, wrong, answer; **k** in know, knife, knee; **b** in climb, thumb; **h** in hour, honest; **l** in walk, talk, half; **t** in listen, castle. Learn the spelling and the sound together.',
  ], 'en1-rules', 'Say "trousers ARE" and "scissors ARE": they are always plural.',
  ['The plural of "tooth" is:', ['teeth', 'tooths', 'teeths', 'toothes'], 'An irregular plural.'],
  [['Stationery', 'Writing and drawing materials such as pens and paper.'], ['Irregular plural', 'A plural that does not end in -s or -es.'], ['Silent letter', 'A letter written but not pronounced.']],
  [
    { q: 'Correct the sentence: "The childs wrote their answers with new pen and the womans checked there exercise books."', steps: ['childs → **children**', 'new pen → **new pens** (more than one child)', 'womans → **women**', 'there → **their** (belonging to them)', '"The **children** wrote their answers with new **pens** and the **women** checked **their** exercise books."'] },
  ]),

  // ---------- 7. Timetable ----------
  L('en-timetable-1', 'en-f1-timetable', '7.1', 'Telling the time; days, subjects and ordinal numbers; a study plan', 12, ['Vocabulary', 'Grammar'], [
    '**Telling the time**: 7.00 seven o’clock; 7.10 ten past seven; 7.15 a quarter past seven; 7.30 half past seven; 7.45 a quarter to eight; 7.50 ten to eight. We can also say the digits: "seven fifty". a.m. means before midday; p.m. after midday. Questions: "What time is it?" "What time does the bell ring?"',
    '**Days**: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (always with a capital letter). **School subjects**: English Language, French, Mathematics, History, Geography, Biology, Chemistry, Physics, Citizenship, Computer Science, Literature, Sports. **Ordinal numbers** show order: first (1st), second (2nd), third (3rd), fourth (4th), fifth (5th) … twentieth (20th), twenty-first (21st). "English is our **first** lesson on Monday."',
    'A **personal study plan** shares your time after school: rest and lunch, chores, homework (hardest subject first), revision of the day’s lessons, and enough sleep. Keep to it, and adjust it before tests.',
  ], 'en1-timetable', 'Up to half past, say "past"; after half past, say "to" the next hour.',
  ['7.45 is said:', ['a quarter to eight', 'a quarter past seven', 'seven to a quarter', 'half past seven'], '45 minutes past = 15 minutes to eight.'],
  [['Ordinal number', 'A number showing order: first, second, third.'], ['Timetable', 'A table showing what happens at each time.']],
  [
    { q: 'Read the timetable line and answer: "Tuesday: 7.30 English, 8.30 Mathematics, 9.30 History, 10.30 break." (a) What is the second lesson? (b) When does break start?', steps: ['(a) Second lesson: **Mathematics**.', '(b) Break starts at **half past ten**.'] },
  ]),

  // ---------- 8. Weather ----------
  L('en-continuous-1', 'en-f1-weather', '8.1', 'The present continuous tense', 10, ['Grammar'], [
    'The **present continuous** describes actions happening **now** or around now: "It **is raining**." "The farmers **are planting** maize this week." Form: **am / is / are + verb-ing**. Negative: "It isn’t raining." Question: "Is the wind blowing?" "Yes, it is."',
    'Spelling of -ing: most verbs add -ing (rain → raining); drop a final silent e (shine → shining); double a short final consonant after a short vowel (run → running, sit → sitting).',
    'Compare with the simple present (habits and facts): "It **rains** a lot in Douala" (fact) and "It **is raining** in Douala now" (at this moment). Time words for the present continuous: now, at the moment, today, this week, Look! Listen!',
  ], 'en1-present-simple', 'If you can add "now", use the present continuous.',
  ['"Listen! The wind ___ the trees."', ['is shaking', 'shakes', 'shook', 'shaken'], 'An action happening now.'],
  [['Present continuous', 'The tense for actions in progress, formed with am/is/are + -ing.']],
  [
    { q: 'Choose the simple present or present continuous: (a) "In the dry season it (not rain) much." (b) "Look outside: the sun (shine)."', steps: ['(a) a general fact → **does not rain**', '(b) happening now → **is shining**'] },
  ]),

  L('en-weather-1', 'en-f1-weather', '8.2', 'Weather and seasons in Cameroon; intonation in exclamations', 12, ['Vocabulary', 'Speaking', 'Speech work'], [
    'Cameroon has a **dry season** and a **rainy season**. In the south, the rains fall roughly from March to November, broken in some areas by a short dry spell in July and August; the coast and the western highlands are among the wettest places in Africa. In the north, the rainy season is shorter (about June to September), and in the dry season the **harmattan**, a dry, dusty wind from the Sahara, brings cool mornings and hazy skies.',
    'Weather words: sunny, hot, warm, cool, cold, cloudy, windy, foggy, misty, humid, stormy, a shower, a downpour, thunder, lightning, a drought, a flood. Adapting to the weather: light clothes and water in the heat; umbrellas and raincoats in the rains; planting at the start of the rains; protecting crops from floods.',
    'Speech work: **exclamations** express strong feelings: "What a hot day!" "How heavy the rain is!" "Look at that lightning!" The voice usually **falls** at the end, with strong stress on the key word (HOT, HEAVY).',
  ], 'en1-weather', 'In an exclamation, stress the feeling word and let your voice fall.',
  ['The dry, dusty wind from the Sahara in northern Cameroon is the:', ['harmattan', 'monsoon', 'typhoon', 'breeze'], 'It blows in the dry season.'],
  [['Season', 'A part of the year with typical weather.'], ['Harmattan', 'A dry, dusty north-east wind from the Sahara.'], ['Exclamation', 'A sentence expressing strong feeling, ending with "!".']],
  [
    { q: 'Write a short weather report for a rainy day in Buea.', steps: ['"**Today in Buea it is cloudy and cool.**"', '"Heavy rain is falling and thunder is rolling over Mount Cameroon."', '"Carry an umbrella and avoid crossing flooded streams."'] },
  ]),

  // ---------- 9. Wildlife ----------
  L('en-comparatives-1', 'en-f1-wildlife', '9.1', 'Comparatives of superiority; linking /r/', 10, ['Grammar', 'Speech work'], [
    'We use **comparatives** to compare two things:\n- short adjectives add **-er … than**: tall → taller, fast → faster, big → bigger (double the consonant), heavy → heavier (y → i)\n- longer adjectives use **more … than**: dangerous → more dangerous, beautiful → more beautiful\n- irregular: good → better, bad → worse.\n"An elephant is **bigger than** a buffalo." "A crocodile is **more dangerous than** a lizard."',
    'Speech work: **linking /r/**. In British English the r at the end of a word is usually silent ("far", "more"), but it is pronounced when the next word begins with a vowel: "far away" /fɑːr əˈweɪ/, "more animals", "bigger elephants". This links the words smoothly in fluent speech.',
  ], 'en1-comparatives', 'Never say "more bigger": use one way of comparing, not both.',
  ['"A giraffe is ___ than a zebra."', ['taller', 'more tall', 'tallest', 'tall'], 'Short adjective + -er.'],
  [['Comparative', 'The form of an adjective used to compare two things.'], ['Linking /r/', 'An /r/ sound joining a word ending in r to a word beginning with a vowel.']],
  [
    { q: 'Compare: (a) a lion and a cat (strong); (b) a gorilla and a monkey (heavy); (c) a snake and a frog (dangerous).', steps: ['(a) **A lion is stronger than a cat.**', '(b) **A gorilla is heavier than a monkey.** (y → i)', '(c) **A snake is more dangerous than a frog.**'] },
  ]),

  L('en-wildlife-1', 'en-f1-wildlife', '9.2', 'Domestic and wild animals; protecting wildlife', 12, ['Vocabulary', 'Speaking', 'Writing'], [
    '**Domestic animals** live with people and are kept for food, work or company: goats, sheep, cows, pigs, chickens, ducks, dogs, cats, horses (in the north). **Wild animals** live in nature: elephants, gorillas, chimpanzees, lions, giraffes, antelopes, buffaloes, crocodiles, pangolins, parrots. Cameroon protects many of them in parks and reserves such as **Waza**, **Bénoué**, **Korup** and the **Dja**.',
    'Threats to wildlife: **poaching** (illegal hunting), cutting down forests, bush fires and the trade in bushmeat and ivory. Protection: respect the law on protected species, report poachers, plant trees, and never keep wild animals as pets.',
    '**Animal cruelty** (beating, starving or overloading animals, cruel traps) is wrong. Arguments against it: animals feel pain; healthy, well-treated animals work and produce better; kindness to animals shows respect for life.',
  ], 'en1-habitats', 'A good argument gives a reason and an example.',
  ['Which is a wild animal protected in Cameroon’s forests?', ['the gorilla', 'the goat', 'the hen', 'the dog'], 'Gorillas live in the Dja and other forests.'],
  [['Domestic animal', 'An animal kept by people.'], ['Wild animal', 'An animal that lives in nature.'], ['Animal cruelty', 'Causing unnecessary pain or suffering to animals.']],
  [
    { q: 'Give two reasons why we should not beat donkeys or horses that carry loads.', steps: ['1. **They feel pain and fear**, just as people do.', '2. **Well-treated animals are healthier and work better**, so cruelty harms their owners too.'] },
  ]),

  // ---------- 10. Hygiene ----------
  L('en-must-1', 'en-f1-hygiene', '10.1', 'Must and should; the vowels /iː/ and /ɪ/', 10, ['Grammar', 'Speech work'], [
    '**Must** expresses strong obligation or a rule: "You **must** wash your hands after using the toilet." **Must not (mustn’t)** forbids: "You mustn’t share toothbrushes." **Should** gives advice: "You **should** brush your teeth twice a day." **Should not (shouldn’t)**: "You shouldn’t bite your nails." After these modals, use the base form, with no -s and no "to".',
    'Speech work: the long vowel **/iː/** (teeth, clean, feet, sheet, keep) and the short vowel **/ɪ/** (skin, lip, fit, fish). Compare: feet – fit, sheep – ship, heel – hill, leave – live.',
  ], 'modals-chart', 'Must for rules, should for advice.',
  ['"You ___ drink dirty water." (forbidden)', ['mustn’t', 'should', 'must', 'can'], 'It is forbidden.'],
  [['Obligation', 'Something you must do.'], ['Advice', 'A suggestion about what is best to do.']],
  [
    { q: 'Write two hygiene rules with "must" and two pieces of advice with "should".', steps: ['Rules: "**You must wash your hands with soap after using the toilet.**" "**You must not share razors.**"', 'Advice: "**You should take a bath every day.**" "**You should cut your nails short.**"'] },
  ]),

  L('en-bodyhygiene-1', 'en-f1-hygiene', '10.2', 'Personal hygiene: handwashing, the hygiene kit and the body', 12, ['Vocabulary', 'Reading'], [
    '**Personal hygiene** is keeping the body clean to stay healthy: bathe daily, wash and comb your hair, brush your teeth in the morning and at night, cut your nails, wear clean clothes, and wash your hands often. A **hygiene kit** contains soap, a toothbrush and toothpaste, a towel, a comb, a nail cutter, and for girls sanitary pads.',
    '**Handwashing** in steps: (1) wet your hands with clean running water; (2) apply soap; (3) scrub palms, backs, between the fingers and under the nails for at least **20 seconds**; (4) rinse well; (5) dry with a clean towel or in the air. Wash before eating or cooking, after using the toilet, after playing, and after touching animals or rubbish.',
    'Body parts for health talk: head, hair, face, eyes, ears, nose, mouth, teeth, neck, chest, stomach, back, arms, hands, fingers, nails, legs, knees, feet, toes, skin. Good hygiene prevents diseases such as **cholera**, **typhoid**, diarrhoea and skin infections.',
  ], 'en1-handwashing', 'Hum "Happy Birthday" twice while you scrub: that is about 20 seconds.',
  ['Hands should be washed:', ['before eating and after using the toilet', 'only on Sundays', 'only when they look dirty', 'never'], 'Germs are often invisible.'],
  [['Personal hygiene', 'Keeping the body clean to stay healthy.'], ['Hygiene kit', 'The personal items used to keep clean.']],
  [
    { q: 'Put the handwashing steps in order: rinse, apply soap, dry, wet your hands, scrub for 20 seconds.', steps: ['1. **Wet your hands.**', '2. **Apply soap.**', '3. **Scrub for 20 seconds.**', '4. **Rinse.**', '5. **Dry.**'] },
  ]),

  // ---------- 11. Illnesses ----------
  L('en-waswere-1', 'en-f1-illnesses', '11.1', 'Was and were; aches and pains; pronouncing stomach and headache', 10, ['Grammar', 'Speech work'], [
    'The simple past of **to be**: I, he, she, it **was**; you, we, they **were**. "I **was** ill yesterday." "We **were** at the clinic." Negative: wasn’t, weren’t. Question: "Were you absent?" "Yes, I was."',
    'Expressions of ache and pain: "I have a headache / a stomach ache / a toothache / a backache / an earache." "My leg hurts." "I feel dizzy." "I have a fever (a high temperature)." "I have been coughing for three days."',
    'Speech work: "**stomach**" is /ˈstʌmək/: the ch is said /k/ and the last vowel is the weak /ə/. "**Headache**" is /ˈhedeɪk/: ache is said /eɪk/, with /k/, not /tʃ/. Similarly: ache, aching, chemist, character.',
  ], 'en1-hospital', 'In "ache", "stomach" and "chemist", ch is /k/.',
  ['"___ your parents at home when you fell ill?"', ['Were', 'Was', 'Is', 'Did'], '"Parents" = they, past: were.'],
  [['Symptom', 'A sign of illness, such as fever or pain.'], ['Ache', 'A continuous, dull pain.']],
  [
    { q: 'Tell the nurse what happened, using was/were: "Last night I ___ very hot. My brothers ___ asleep, so my mother ___ the one who gave me water."', steps: ['I → **was**', 'my brothers → **were**', 'my mother → **was**'] },
  ]),

  // ---------- 13. Market ----------
  L('en-market-1', 'en-f1-market', '13.2', 'At the market: prices, bargaining and change; the consonants /b/ and /p/', 12, ['Speaking', 'Vocabulary', 'Speech work'], [
    'Cameroon uses the **CFA franc (FCFA)**, shared with the other countries of the Central African Economic and Monetary Community (CEMAC). Coins include 25, 50, 100 and 500 francs; notes include 500, 1 000, 2 000, 5 000 and 10 000 francs.',
    'Market phrases: asking the price: "How much is this pineapple?" "How much are the tomatoes?"; **bargaining** politely: "That is too expensive for me. Can you reduce it a little?" "I will give you 600." "Let us meet at 700."; buying: "I’ll take two heaps, please."; checking **change**: "I gave you 1 000; my change is 300." Thank the seller even if you do not buy.',
    'Speech work: **/b/** is voiced (beans, bread, buy, bag); **/p/** is voiceless with a puff of air (pepper, plantain, price, pay). Compare: buy – pie, bin – pin, bat – pat, cab – cap. Hold a sheet of paper in front of your mouth: it moves for /p/.',
  ], 'en1-countable', 'Always check your change before you leave the stall.',
  ['A pineapple costs 450 FCFA. You give 500. Your change is:', ['50 FCFA', '150 FCFA', '950 FCFA', '45 FCFA'], '500 − 450 = 50.'],
  [['Bargaining', 'Discussing to agree on a lower price.'], ['Change', 'The money returned when you pay more than the price.']],
  [
    { q: 'Write a short market dialogue with bargaining.', steps: ['Buyer: "**Good morning, Mama. How much is a heap of tomatoes?**"', 'Seller: "Five hundred francs, my child."', 'Buyer: "**That is a bit much. Can you give it to me for four hundred?**"', 'Seller: "Let us say four hundred and fifty." Buyer: "**All right, thank you.**"'] },
  ]),

  // ---------- 14. Food and budget ----------
  L('en-mealbudget-1', 'en-f1-food-budget', '14.2', 'Planning meals on a budget; will; saving pocket money; stress in compound nouns', 12, ['Vocabulary', 'Writing', 'Speech work'], [
    'A **balanced** meal plan includes energy foods (rice, cassava, plantains, maize), body-building foods (beans, groundnuts, eggs, fish) and protective foods (fruit and green vegetables). Cheap, nutritious choices: beans, groundnuts, eggs, small fish, garden eggs, huckleberry (njama-njama) and seasonal fruit.',
    'Talking about plans with **will**: "On Monday I **will** cook rice and beans." "I **will** save 200 francs every week." Negative: won’t. **Saving** part of your pocket money (in a box or a savings account) helps you buy school things or meet emergencies.',
    'Speech work: **compound nouns** are two words used as one: market-day, classroom, toothbrush, football, schoolbag, pocket money. The **main stress usually falls on the first part**: MARket-day, CLASSroom, TOOTHbrush, POCKet money.',
  ], 'en1-meal-budget', 'Cheap food can be nutritious: beans and eggs build the body.',
  ['In "toothbrush", the main stress falls on:', ['TOOTH', 'brush', 'both equally', 'neither'], 'Compound nouns usually stress the first part.'],
  [['Budget', 'A plan for spending money.'], ['Saving', 'Keeping money for later use.']],
  [
    { q: 'Plan two meals for a family for 3 000 FCFA.', steps: ['Meal 1 (lunch): rice 800, beans 500, palm oil 200 = **1 500 FCFA**.', 'Meal 2 (supper): plantains 600, eggs 500, vegetables 300 = **1 400 FCFA**.', 'Total: 1 500 + 1 400 = **2 900 FCFA**, leaving 100 FCFA. Both meals are balanced.'] },
  ]),

  // ---------- 15. National symbols ----------
  L('en-symbols-1', 'en-f1-symbols', '15.1', 'The national symbols of Cameroon; civic duties; the vowel /ɔː/', 12, ['Vocabulary', 'Reading', 'Speech work'], [
    'The **national symbols** of Cameroon are:\n- the **flag**: three vertical bands, green, red and yellow, with a five-pointed yellow star in the middle of the red band\n- the **national anthem**, sung in English ("O Cameroon, Thou Cradle of our Fathers") and in French\n- the **coat of arms** and the **seal**\n- the **motto**: "**Peace – Work – Fatherland**" ("Paix – Travail – Patrie").\nNational Day is celebrated on **20 May**.',
    'Citizens show **respect** for the symbols: standing still during the anthem and the raising of the flag, never damaging the flag, and singing the anthem with dignity. **Civic duties** include obeying the law, respecting public property, paying taxes as adults, and defending the country.',
    'Speech work: **/ɔː/** is a long rounded vowel: law, four, door, sport, born, all, call. Compare /ɔː/ with /ɒ/: caught – cot, port – pot, short – shot.',
  ], 'en1-symbols', 'Stand still, face the flag and stop talking when the anthem plays.',
  ['Cameroon’s National Day is celebrated on:', ['20 May', '1 January', '11 February', '1 October'], '20 May commemorates the 1972 referendum.'],
  [['National symbols', 'The emblems that represent a country, such as its flag and anthem.'], ['Motto', 'A short phrase expressing a country’s ideals.'], ['Civic duty', 'A responsibility of a citizen.']],
  [
    { q: 'Describe the flag of Cameroon in two sentences.', steps: ['"**The flag of Cameroon has three vertical bands of green, red and yellow.**"', '"**A five-pointed yellow star stands in the middle of the red band.**"'] },
  ]),

  L('en-thezero-1', 'en-f1-symbols', '15.2', '"The" or no article; simple conjunctions', 10, ['Grammar'], [
    'Use **the** for something unique or already known: "**the** flag of Cameroon", "**the** national anthem", "**the** President", "**the** Atlantic Ocean", "**the** sun". Use **no article** for names of countries and towns ("Cameroon", "Yaoundé"), languages ("English"), abstract ideas in general ("**Patriotism** is a virtue"), and general plurals ("**Citizens** must obey the law").',
    '**Simple conjunctions** join words and sentences:\n- **and** adds: "We sing the anthem **and** salute the flag."\n- **but** contrasts: "The flag is old, **but** we respect it."\n- **or** gives a choice: "Speak English **or** French."\n- **so** shows a result: "It was National Day, **so** we marched."\n- **because** gives a reason: "We stand **because** we respect the anthem."',
  ], 'articles-use', 'Ask: is there only one, or do we both know which one? Then use "the".',
  ['"___ English and French are the official languages of Cameroon."', ['No article', 'The', 'A', 'An'], 'Languages take no article.'],
  [['Conjunction', 'A word that joins words or sentences: and, but, or, so, because.'], ['Zero article', 'Using no article before a noun.']],
  [
    { q: 'Join with and, but, or so: (a) "It rained. We marched on National Day." (b) "I was tired. I went to bed early."', steps: ['(a) contrast → **"It rained, but we marched on National Day."**', '(b) result → **"I was tired, so I went to bed early."**'] },
  ]),

  // ---------- 17. ICT ----------
  L('en-manner-1', 'en-f1-ict', '17.1', 'Adverbs of manner; simple instructions', 10, ['Grammar'], [
    '**Adverbs of manner** tell us **how** something is done. Most are formed by adding **-ly** to an adjective: careful → carefully, quick → quickly, quiet → quietly, safe → safely, gentle → gently (le → ly), easy → easily (y → ily). Irregular: good → **well**, fast → **fast**, hard → **hard**.',
    'They usually come after the verb or after the object: "Type **carefully**." "She uses the computer **well**." In **instructions**, use imperatives with adverbs and sequence words: "First, press the power button **gently**. Then wait **patiently** for the computer to start. Finally, type your password **carefully**."',
  ], 'en1-manner', 'An adjective describes a noun; an adverb of manner describes a verb.',
  ['"He plays football very ___."', ['well', 'good', 'goodly', 'better'], '"Good" is an adjective; its adverb is "well".'],
  [['Adverb of manner', 'A word that tells how an action is done.'], ['Instruction', 'A sentence telling someone what to do, often in the imperative.']],
  [
    { q: 'Turn the adjectives in brackets into adverbs: "Hold the phone (careful). Speak (clear) and (polite)."', steps: ['careful → **carefully**', 'clear → **clearly**', 'polite → **politely**'] },
  ]),

  L('en-ict-1', 'en-f1-ict', '17.2', 'Computers, smartphones and safe browsing; stress in technology words', 12, ['Vocabulary', 'Reading', 'Speech work'], [
    '**Computer hardware** is the physical equipment: the monitor (screen), the system unit or laptop, the keyboard, the mouse, the printer and the speakers. **Software** is the programs. A **smartphone** combines a phone, a camera and a small computer. **Browsing** the internet with a **browser** lets you search for information, read, learn and communicate.',
    '**Online safety**: never share your password, home address or photos with strangers; do not meet people you know only online; tell a trusted adult if something online frightens or upsets you; think before you post, because posts can stay forever; check information with reliable sources; and limit screen time.',
    'Speech work: stress in technology words: comPUter, KEYboard, MOnitor, INternet, SOFTware, BROWser, PASSword, deVICE, appliCAtion. Words ending in -tion stress the syllable just before it: appliCAtion, inforMAtion.',
  ], 'en1-ict', 'Your password is like your toothbrush: never share it.',
  ['To keep safe online, you should:', ['tell a trusted adult if a stranger asks to meet you', 'share your password with new friends', 'post your address', 'accept every friend request'], 'Protect yourself.'],
  [['Hardware', 'The physical parts of a computer.'], ['Software', 'The programs that run on a computer.'], ['Browser', 'A program used to visit websites.']],
  [
    { q: 'Write three rules for safe internet use at school.', steps: ['1. **Never share your password or personal details.**', '2. **Use only websites your teacher approves for research.**', '3. **Tell a teacher at once if you see anything upsetting.**'] },
  ]),

  // ---------- 18. Sports ----------
  L('en-irregular-1', 'en-f1-sports', '18.1', 'The simple past of irregular verbs; reporting a sporting event; the vowel /æ/', 12, ['Grammar', 'Writing', 'Speech work'], [
    'Many common verbs have **irregular** past forms: go → went, see → saw, win → won, run → ran, come → came, take → took, give → gave, get → got, eat → ate, sing → sang, fall → fell, throw → threw, catch → caught, lose → lost, beat → beat. Regular verbs add -ed: play → played, score → scored, kick → kicked.',
    'A **report on a sporting event** answers: what (the match or competition), where and when, who played, what happened in order (goals, key moments), the result, and the reaction of the crowd: "On Saturday, Form 1 A **played** Form 1 B on the school field. Ndi **scored** in the tenth minute, but Form 1 B **won** 2-1. The crowd **sang** and **cheered** until the end."',
    'Speech work: **/æ/** in sports words: match, track, bat, catch, champion, captain. Do not confuse it with /ʌ/ (much, cup, run) or /ɑː/ (start, march).',
  ], 'en1-irregular-past', 'Learn irregular verbs in threes: go, went, gone.',
  ['The past tense of "catch" is:', ['caught', 'catched', 'cought', 'catch'], 'catch, caught, caught.'],
  [['Irregular verb', 'A verb whose past form does not end in -ed.'], ['Report', 'A factual account of an event.']],
  [
    { q: 'Put the verbs into the simple past: "Our team (go) to the stadium. We (see) the match and our school (win) 3-0."', steps: ['go → **went**', 'see → **saw**', 'win → **won**', '"Our team **went** to the stadium. We **saw** the match and our school **won** 3-0."'] },
  ]),

  // ---------- 19. Revision ----------
  L('en-integration-1', 'en-f1-revision', '19.1', 'Integration tasks of the five modules', 14, ['Writing', 'Speaking'], [
    'Each module ends with an **integration task** that uses its language in a real situation:\n- module 1: write a **descriptive profile** of a family member (name, relationship, appearance, character, chores)\n- module 2: draft **classroom rules** in the imperative and present a plan of the campus or a study timetable\n- module 3: design a **health poster** (title, picture, two or three short rules with must and should)\n- module 4: act a **market dialogue** that keeps to a budget of 5 000 FCFA, with bargaining and change\n- module 5: write a **short report** of a cultural festival in the simple past.',
    'For every task: read the instruction twice, plan before writing, use the grammar and vocabulary of the module, check spelling and punctuation, and present your work neatly or speak clearly.',
  ], 'en1-integration', 'Underline the key words in the task: who, what, how long.',
  ['A market dialogue on a budget of 5 000 FCFA should show:', ['prices, bargaining and the change', 'only greetings', 'only the weather', 'nothing about money'], 'It practises module 4.'],
  [['Integration task', 'A real-life task that uses the skills of a whole module.']],
  [
    { q: 'Write a short festival report (module 5 task).', steps: ['What, where, when: "**Last December, I attended the Ngondo festival in Douala.**"', 'Events in the past tense: "Dancers in sanjas moved to the drums, and canoes raced on the Wouri."', 'Ending: "**It was the most colourful day of my holidays.**"'] },
  ]),

  L('en-revision-1', 'en-f1-revision', '19.2', 'Revision of the year’s grammar and sounds', 14, ['Grammar', 'Speech work', 'Revision'], [
    '**Grammar of the year**: to be and to have; subject, object and possessive pronouns; the simple present (habits) and its questions and negatives; adjectives and their order; prepositions of place and time; there is / there are; imperatives; irregular plurals; wh- questions; the present continuous (now); comparatives; must and should; was and were; articles (a, an, the, no article); quantifiers (much, many, a lot of, some, any); countable and uncountable nouns; will; conjunctions; adverbs of manner; the simple past, regular and irregular.',
    '**Sounds of the year**: /h/; voiced and voiceless "th"; the endings /s/, /z/, /ɪz/; /æ/ and /e/; word stress; silent letters; the schwa /ə/; intonation in exclamations; linking /r/; /iː/ and /ɪ/; ch as /k/; -er and -or; /b/ and /p/; compound noun stress; /ɔː/; the -ed endings /t/, /d/, /ɪd/; /æ/ in sports words.',
    'Revise with past questions, short daily practice and by speaking English with classmates. In the examination, read each question carefully and manage your time.',
  ], 'en1-short-vowels', 'Revise a little every day: ten minutes daily beats three hours the night before.',
  ['Which sentence is correct?', ['She doesn’t like cold water.', 'She don’t like cold water.', 'She doesn’t likes cold water.', 'She not like cold water.'], '"Doesn’t" + base form.'],
  [['Revision', 'Studying again what has been learnt.']],
  [
    { q: 'Correct three mistakes: "Yesterday my brother go to the market and buyed two fishes."', steps: ['go → **went** (simple past)', 'buyed → **bought** (irregular)', 'fishes → **fish** (usual plural)', '"Yesterday my brother **went** to the market and **bought** two **fish**."'] },
  ]),
];
