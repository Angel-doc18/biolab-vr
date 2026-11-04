// English Language lessons for Form 1, sequences 4 to 6: work and leisure;
// sport, neighbourhood, nature, careers and tourism; culture and human rights.
// Original text written for this app. **double asterisks** mark key terms;
// `examples` are worked examples.

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

export const LESSONS_1B = [
  // ---------- 16. Jobs ----------
  L('en-whq-1', 'en-f1-timetable', '7.3', 'Wh- questions; the weak vowel /ə/', 10, ['Grammar', 'Speech work'], [
    '**Wh- questions** ask for information, not just yes or no:\n- **who**: a person ("Who repairs shoes?" "A cobbler.")\n- **what**: a thing or action ("What does a mechanic do?")\n- **where**: a place; **when**: a time; **why**: a reason; **which**: a choice; **whose**: an owner; **how**: the way ("How do you become a pilot?"), and how much, how many, how old, how long.',
    'Word order: wh- word + auxiliary (do, does, is, can) + subject + verb: "Where **does** your mother **work**?" "What **are** you **doing**?" When "who" or "what" is the subject, there is no do: "Who **teaches** you English?"',
    'Speech work: **/ə/** (the "schwa") is a short, relaxed vowel heard in unstressed syllables: **a**bout, doct**or**, teach**er**, farm**er**, pol**i**ce, **a** banana /ə bəˈnɑːnə/. It can be written with any vowel letter. Saying it correctly makes English sound natural.',
  ], 'en1-wh-words', 'The schwa is never stressed: "TEACHer" is /ˈtiːtʃə/.',
  ['"___ does your father do?" "He is a carpenter."', ['What', 'Who', 'Where', 'Whose'], '"What does … do?" asks about a job.'],
  [['Wh- question', 'A question beginning with who, what, where, when, why, which, whose or how.'], ['Schwa', 'The weak vowel /ə/ heard in unstressed syllables.']],
  [
    { q: 'Write the questions for these answers: (a) "She works at the hospital." (b) "Because he likes children."', steps: ['(a) place → **"Where does she work?"**', '(b) reason → **"Why does he want to be a teacher?"** (or any question asking why)'] },
  ]),

  L('en-jobs-1', 'en-f1-professions', '12.2', 'Jobs and occupations: word formation, acronyms and abbreviations', 12, ['Vocabulary', 'Writing'], [
    'Many job nouns are formed by adding a **suffix** to a verb or noun:\n- **-er**: farm → farmer, teach → teacher, drive → driver, bake → baker\n- **-or**: act → actor, direct → director, inspect → inspector\n- **-ist**: piano → pianist, art → artist, journal → journalist, science → scientist\n- **-ian**: electric → electrician, music → musician, library → librarian\n- others: cook (a person who cooks), nurse, tailor, carpenter, mechanic, lawyer.',
    'An **abbreviation** is a short form of a word or phrase: Dr (Doctor), Mr, Mrs, St (Street), km, kg, etc. An **acronym** is a word made from first letters and said as a word, such as UNESCO; when we say each letter, as in GCE (General Certificate of Education) and CEO (Chief Executive Officer), it is called an initialism.',
    'Confusables: **work** is usually uncountable ("I have a lot of work"); **job** is countable ("She has a good job"). We say "go to work" and "look for a job". Writing about your **dream job**: name the job, what the person does, why you like it, and what you must do to get it (study, training, hard work).',
  ], 'en1-job-suffixes', 'Some jobs have no suffix: nurse, cook, chef and pilot.',
  ['A person who writes for a newspaper is a:', ['journalist', 'journaler', 'journalor', 'journalian'], 'journal + -ist.'],
  [['Suffix', 'Letters added to the end of a word to make a new word.'], ['Abbreviation', 'A shortened form of a word or phrase.'], ['Acronym', 'A word made from the first letters of other words.']],
  [
    { q: 'Write a short paragraph about your dream job.', steps: ['Name it: "My dream job is to become a **surgeon**."', 'What it involves: "A surgeon performs operations to save lives."', 'Why: "I want to help sick people in my village."', 'How: "I will work hard in science, pass the GCE and study medicine at university."'] },
  ]),

  // ---------- 17. Films ----------
  L('en-duration-1', 'en-f1-movies', '17.1', 'Prepositions of duration', 10, ['Grammar'], [
    'Prepositions of **duration** tell us how long something lasts:\n- **for** + a length of time: for two hours, for a week, for many years\n- **during** + an event or period (when something happens inside it): during the film, during the holidays, during the night\n- **from … to / until** + start and end: from 6 p.m. to 8 p.m., from Monday until Friday\n- **until (till)** + the end point: "The cinema stays open until midnight."\n- **throughout** + the whole period: "It rained throughout the festival."',
    'Do not mix them: "during two hours" is wrong; say "for two hours". "During" answers "when?"; "for" answers "how long?".',
  ], 'en1-duration', 'Ask "how long?" (for) or "when?" (during).',
  ['"She acted in that series ___ three years."', ['for', 'during', 'until', 'since'], '"For" + a length of time.'],
  [['Duration', 'The length of time something lasts.']],
  [
    { q: 'Complete: "The film lasted ___ two hours. ___ the film, nobody used a phone. We stayed in the hall ___ 10 p.m."', steps: ['length of time → **for** two hours', 'an event → **During** the film', 'the end point → **until** 10 p.m.'] },
  ]),

  L('en-seewatch-1', 'en-f1-movies', '17.2', 'See, look and watch; the film world; an interview', 12, ['Vocabulary', 'Listening', 'Speaking'], [
    '**See**: notice with your eyes, often without trying ("I saw a famous actor at the airport"; we also "see a film" at the cinema). **Look (at)**: turn your eyes towards something on purpose ("Look at this photo"). **Watch**: look at something that moves or changes, for some time ("watch television", "watch a football match").',
    'The **film world**: actor and actress, star or celebrity, director (who guides the actors), producer (who organises and pays for the film), script (the written words), scene, cast (all the actors), audience, cinema, film festival, series, episode. Some film stars are role models; others set bad examples. We should be **selective** and choose what we watch with care.',
    'An **interview** has an **interviewer** who asks questions and an **interviewee** who answers. Prepare open questions (wh- questions), greet the guest, listen to the answers, and thank the guest at the end:\nJournalist: Good evening. When did you start acting?\nStar: When I was twelve, in a school play.',
  ], 'en1-see-look-watch', 'You watch television, but you see a film at the cinema.',
  ['"We ___ the match on television last night."', ['watched', 'looked', 'saw at', 'looked at'], 'A match moves and lasts some time.'],
  [['Director', 'The person who guides the making of a film and the actors.'], ['Cast', 'All the actors in a film or play.'], ['Interviewee', 'The person who answers questions in an interview.']],
  [
    { q: 'Write three interview questions for a famous Cameroonian actor.', steps: ['"**How did you become an actor?**"', '"**Which film are you most proud of, and why?**"', '"**What advice would you give young people who want to act?**"'] },
  ]),

  // ---------- 18. Birthday ----------
  L('en-past-1', 'en-f1-culture', '16.1', 'The simple past tense', 12, ['Grammar'], [
    'The **simple past** describes actions finished at a definite time in the past: "We **celebrated** my birthday last Saturday." Time words: yesterday, last week, two days ago, in 2025, when I was small.',
    '**Regular verbs** add -ed: invite → invited, play → played, carry → carried, stop → stopped. **Irregular verbs** change: buy → bought, bring → brought, eat → ate, give → gave, sing → sang, make → made, come → came, go → went, have → had, cut → cut.',
    'Questions and negatives use **did** + the base form: "Did they bring gifts?" "We did not (didn’t) dance." Never say "did brought" or "didn’t went".',
  ], 'ed-endings', 'After "did", the verb goes back to its base form.',
  ['"My friends ___ me a nice present."', ['gave', 'gived', 'give', 'given'], 'give, gave, given.'],
  [['Simple past', 'The tense for actions completed at a definite time in the past.'], ['Irregular verb', 'A verb whose past form does not end in -ed.']],
  [
    { q: 'Put into the simple past: "Tina (turn) eleven. Her mother (make) a cake and her friends (sing) for her."', steps: ['turn → **turned** (regular)', 'make → **made** (irregular)', 'sing → **sang** (irregular)', '"Tina **turned** eleven. Her mother **made** a cake and her friends **sang** for her."'] },
  ]),

  L('en-birthday-1', 'en-f1-birthday', '18.2', 'Planning and budgeting a birthday party', 12, ['Vocabulary', 'Writing'], [
    'Words for a celebration: host, guests, invitation, menu, recipe (instructions for cooking a dish), ingredients, decorations, gifts or presents, cake, candles, music, toast.',
    'To **plan** a party: decide the date, place and number of guests; send invitations; plan the menu; share tasks; and make a **budget**, a list of what you will buy and its cost, so you do not spend more than you have. Add the costs to find the total and compare it with the money you have.',
    '**Describing a party** (guided descriptive writing): say when and where it was, who came, what you saw, heard and tasted, what happened in order, and how you felt. Use the simple past and descriptive adjectives: "The hall was bright with balloons and the smell of fried plantains filled the air."',
  ], 'en1-budget', 'A budget always ends with a total.',
  ['A list of the things you plan to buy and their cost is a:', ['budget', 'recipe', 'menu', 'receipt'], 'A menu lists the food to be served.'],
  [['Budget', 'A plan of how money will be spent.'], ['Recipe', 'Instructions and ingredients for making a dish.'], ['Host', 'The person who invites and receives guests.']],
  [
    { q: 'You have 15 000 FCFA. Cake 6 000, drinks 4 000, snacks 3 000, balloons 1 000. Can you afford the party?', steps: ['Total: 6 000 + 4 000 + 3 000 + 1 000 = **14 000 FCFA**.', '15 000 − 14 000 = **1 000 FCFA left**.', 'Yes: the budget is within the money available.'] },
  ]),

  // ---------- 19. Visiting places ----------
  L('en-directions2-1', 'en-f1-visits', '19.1', 'Asking for and giving directions', 10, ['Speaking', 'Grammar'], [
    'To **ask** the way politely, begin with "Excuse me": "Excuse me, how do I get to the National Museum?" "Could you tell me where the post office is, please?" "Is there a pharmacy near here?" Notice the word order in indirect questions: "Could you tell me where the post office **is**?" (not "where is the post office").',
    'To **give** directions, use imperatives and place words: "Go straight on." "Turn left at the traffic lights." "Take the second turning on the right." "Go past the church." "Cross the bridge." "It’s on your left, opposite the bank." End with a landmark and say how far: "It’s about five minutes’ walk."',
    'Listen carefully, repeat the directions to check ("So, I turn right at the roundabout?"), and thank the person: "Thank you very much."',
  ], 'en1-directions', 'Give directions in the order the person will meet the turnings.',
  ['"Could you tell me where the bank ___?"', ['is', 'is it', 'does', 'are'], 'In an indirect question, the verb comes after the subject.'],
  [['Directions', 'Instructions on how to get to a place.'], ['Landmark', 'A building or feature that helps you find your way.']],
  [
    { q: 'Turn into a polite indirect question: "Where is the bus station?"', steps: ['Start politely: "Excuse me, could you tell me …"', 'Put the subject before the verb: "where the bus station **is**"', '**"Excuse me, could you tell me where the bus station is, please?"**'] },
  ]),

  L('en-postcard-1', 'en-f1-visits', '19.2', 'Places to visit in Yaoundé; a postcard; the diphthong /aɪ/', 12, ['Reading', 'Writing', 'Speech work'], [
    'People visit places for many reasons: to see family, for holidays, for study, for business or out of curiosity. In **Yaoundé**, the capital, visitors can see the **Reunification Monument**, the **National Museum** (in the former presidential palace), Mount Fébé and the Mvog-Betsi Zoo. Attitudes: curiosity, discovery and respect for places and people.',
    'A **postcard** has a picture on one side. On the other side, the **message** goes on the left (date, greeting, a few sentences, a friendly closing and your name) and the **address** of the receiver goes on the right, under the stamp. Keep the message short: where you are, what you have seen, how you feel.',
    'Speech work: the diphthong **/aɪ/** glides from an open /a/ to /ɪ/: right, ride, five, Mike, by, high, buy, eye. Compare /aɪ/ with /eɪ/: bite – bait, lie – lay, my – may.',
  ], 'en1-postcard', 'A postcard message should fit on half a card: keep it short.',
  ['Which word has the diphthong /aɪ/?', ['buy', 'bay', 'bee', 'boy'], '"Buy" is said /baɪ/.'],
  [['Postcard', 'A card with a picture on one side, sent by post with a short message.'], ['Diphthong', 'A vowel sound that glides from one vowel to another.']],
  [
    { q: 'Write a postcard message from Yaoundé to your cousin Ndi.', steps: ['"Yaoundé, 14th February. Dear Ndi,"', '"Greetings from the capital! Today we visited the Reunification Monument and climbed to the top. Tomorrow we are going to the National Museum."', '"I wish you were here. See you soon. Love, Asong."'] },
  ]),

  // ---------- 20. Library ----------
  L('en-future-1', 'en-f1-library', '20.1', 'The future: will, shall and going to', 10, ['Grammar'], [
    '**Will** + base form is used for predictions, promises, offers and decisions made at the moment of speaking: "I **will** return the book tomorrow." "It **will** be sunny." "Wait, I**’ll** help you."',
    '**Shall** is used with I and we in questions to make offers and suggestions: "**Shall** I carry your bag?" "**Shall** we go to the library at break?"',
    '**Be going to** + base form is used for plans already made and for predictions from what we can see: "I **am going to** read this novel during the holidays." "Look at the sky; it**’s going to** rain." The negative: "I will not (won’t) be late." "She isn’t going to come."',
  ], 'future-forms', 'If you have already decided, use "going to"; if you decide now, use "will".',
  ['"I’ve bought the paint. I ___ paint my room on Saturday." (a plan)', ['am going to', 'shall', 'will be', 'went to'], 'A plan already made.'],
  [['Future', 'Time that has not yet come.'], ['Prediction', 'A statement about what will happen.']],
  [
    { q: 'Choose will, shall or going to: (a) "The phone is ringing." "I ___ answer it." (b) "___ we start?" (c) "We ___ visit Kribi next month; we have booked a hotel."', steps: ['(a) decision now → **will** ("I’ll answer it")', '(b) suggestion with "we" → **Shall**', '(c) a plan already made → **are going to**'] },
  ]),

  L('en-library-1', 'en-f1-library', '20.2', 'Using the library; antonyms; break-time activities', 10, ['Vocabulary', 'Reading'], [
    'A **library** is a place where books and other materials are kept for reading and borrowing. The **librarian** helps readers, records loans and keeps order. Books are arranged on **shelves** by subject; a **catalogue** (on cards or a computer) tells you where each book is. To **borrow** a book: choose it, take it to the desk, the librarian records it, and you must **return** it by the **due date**.',
    'Library rules: keep quiet, handle books carefully, do not eat or drink, do not tear or write in books, and return books on time. At **break time**, students can read in the library, play games, chat with friends, eat a snack or rest. Calmness and seriousness show respect for others.',
    '**Antonyms** are words of opposite meaning: borrow – lend, quiet – noisy, early – late, open – close, remember – forget, fiction – non-fiction, ancient – modern, careful – careless.',
  ], 'en1-library', 'Write down the due date when you borrow a book.',
  ['The antonym of "remember" is:', ['forget', 'recall', 'remind', 'repeat'], 'Antonyms are opposites.'],
  [['Librarian', 'A person in charge of a library.'], ['Catalogue', 'A list of all the books in a library and where to find them.'], ['Due date', 'The date by which a borrowed book must be returned.']],
  [
    { q: 'Put the steps for borrowing a library book in order: return it; find it on the shelf; read it; the librarian records it; look it up in the catalogue.', steps: ['1. Look it up in the **catalogue**.', '2. Find it on the **shelf**.', '3. The **librarian records** it.', '4. Read it.', '5. **Return** it by the due date.'] },
  ]),

  // ---------- 21. Sport ----------
  L('en-colour-1', 'en-f1-sports', '21.1', 'Adjectives of colour; the letter s said /s/ or /z/', 10, ['Grammar', 'Speech work'], [
    '**Adjectives of colour**: red, green, yellow, blue, black, white, brown, grey, orange, purple, pink. Shades: light blue, dark green, bright red. Colour adjectives go before the noun ("a **green** jersey") or after be ("The ball is **white**"). In a list of adjectives, colour comes after size and age: "a big old red bus".',
    'Our national colours are **green, red and yellow**: the flag has three vertical bands with a yellow star in the middle of the red band. The national football team wears these colours.',
    'Speech work: the letter **s** can be said **/s/** (sport, sister, bus, yes, basket) or **/z/** (jersey, cousin, music, busy, his, was, does). At the end of a word after a vowel or voiced sound it is often /z/: goals, fans, eyes.',
  ], 'en1-s-sounds', 'In a list of adjectives, put colour close to the noun.',
  ['In which word is s said /z/?', ['music', 'sport', 'basket', 'sun'], '"Music" is said /ˈmjuːzɪk/.'],
  [['Adjective of colour', 'An adjective that names a colour.'], ['Shade', 'A lighter or darker form of a colour.']],
  [
    { q: 'Put the adjectives in the right order: "a (yellow, new) jersey", "a (red, big) flag".', steps: ['Age before colour: **a new yellow jersey**.', 'Size before colour: **a big red flag**.'] },
  ]),

  L('en-sports-1', 'en-f1-sports', '18.2', 'Sport, fair play and holiday camps', 12, ['Vocabulary', 'Reading', 'Speaking'], [
    'Football words: pitch (field), goal, goalkeeper, defender, midfielder, striker, captain, coach, referee, linesman, whistle, penalty, corner kick, foul, red and yellow cards, jersey, boots, trophy, medal, fans, stadium, tournament. The **Africa Cup of Nations (AFCON)** brings together African national teams; Cameroon’s Indomitable Lions have won it five times.',
    '**Sportsmanship** and **fair play**: respect the rules, the referee and your opponents; do not cheat or fight; shake hands after the match, win or lose. Supporting the national team with joy is a sign of **patriotism**.',
    'A **holiday camp** is a place where young people spend part of the holidays doing sport, games, crafts, excursions and learning together. When you **describe a footballer** you admire, use adjectives of appearance and character: "My favourite footballer is tall and fast. He is humble, disciplined and generous to his community."',
  ], 'en1-football-pitch', 'A good description joins what a person looks like with what the person is like.',
  ['The player whose main job is to stop goals is the:', ['goalkeeper', 'striker', 'referee', 'coach'], 'The striker scores goals.'],
  [['Referee', 'The official who controls a match.'], ['Sportsmanship', 'Fair and polite behaviour in sport.'], ['Patriotism', 'Love for one’s country.']],
  [
    { q: 'Describe a footballer you admire in three sentences.', steps: ['Appearance: "My favourite player is **tall and strong**, with quick feet."', 'Skill: "He plays as a **striker** and scores many goals."', 'Character: "He is **humble and disciplined**, and he respects the referee."'] },
  ]),

  // ---------- 22. Neighbourhood ----------
  L('en-sentence-1', 'en-f1-neighbourhood', '22.1', 'The sentence: subject, verb and object; the consonants /f/ and /v/', 12, ['Grammar', 'Speech work'], [
    'A **sentence** is a group of words that makes complete sense. It begins with a capital letter and ends with a full stop (.), a question mark (?) or an exclamation mark (!). It has a **subject** (who or what the sentence is about) and a **predicate** (what is said about it), which contains a **verb**.',
    'The basic order in English is **Subject + Verb + Object**: "Our neighbour (S) sells (V) vegetables (O)." The **object** receives the action. Some sentences have no object: "The baby (S) is sleeping (V)." In the simple present, remember the -s with he, she and it: "My friend lives next door."',
    'Speech work: **/f/** and **/v/** are made with the top teeth on the bottom lip. /f/ is voiceless (fan, fine, phone, enough, leaf); /v/ is voiced (van, vine, very, leave, five). Compare: fan – van, fine – vine, fast – vast, leaf – leave, safe – save.',
  ], 'en1-sentence', 'Find the verb first; then ask "who or what?" before it to find the subject.',
  ['In "The children planted trees", the verb is:', ['planted', 'children', 'trees', 'the'], 'The verb is the action word.'],
  [['Subject', 'Who or what a sentence is about.'], ['Predicate', 'The part of a sentence that tells us about the subject.'], ['Object', 'The person or thing that receives the action.']],
  [
    { q: 'Label the subject, verb and object: "My new neighbour repairs bicycles."', steps: ['Verb (action): **repairs**', 'Who repairs? **My new neighbour** (subject)', 'Repairs what? **bicycles** (object)'] },
  ]),

  L('en-request-letter-1', 'en-f1-neighbourhood', '22.2', 'A neighbourhood’s needs and writing to an authority', 12, ['Vocabulary', 'Writing'], [
    'In a **neighbourhood** we meet new people, make friends and share facilities: roads, water points, street lights, markets, schools and playgrounds. Signs and notices guide us: "No parking", "One way", "Keep left", "School: drive slowly", "Do not dump refuse here". Values: friendliness, obedience to rules and respect.',
    'A **needs assessment list** names what a neighbourhood lacks, in order of importance: for example, a broken water point, no street lights, a road full of potholes, no dustbins. To ask for help, we write a **formal letter** to an authority such as the mayor.',
    'Layout of a formal letter: your address and the date at the top right; the receiver’s title and address on the left; "Dear Sir," or "Dear Madam,"; a subject line ("Request for street lights in Mile 4"); the body (who you are, the problem, its effects, your request); and "Yours faithfully," with your signature and full name. Use polite, formal language: "We humbly request …".',
  ], 'letter-formal', 'In a formal letter, never use slang or short forms like "can’t".',
  ['A formal letter that begins "Dear Sir," ends with:', ['Yours faithfully,', 'Your friend,', 'Love,', 'Bye for now,'], '"Yours faithfully" goes with "Dear Sir/Madam".'],
  [['Authority', 'A person or body with official power, such as a mayor or a council.'], ['Formal letter', 'A letter written in polite, official language to someone we do not know personally.']],
  [
    { q: 'Write the body of a letter to the mayor asking for a water point to be repaired.', steps: ['Who you are: "We are students living in the Ntamulung neighbourhood."', 'The problem: "The only water point in our quarter has been broken for two months, so families walk far to fetch water."', 'The request: "**We humbly request that you send workers to repair it.** We shall be very grateful."'] },
  ]),

  // ---------- 23. Nature ----------
  L('en-yesno-1', 'en-f1-nature', '23.1', 'Yes/no questions; the vowel letters and their short sounds', 10, ['Grammar', 'Speech work'], [
    'A **yes/no question** can be answered with yes or no. It begins with an auxiliary or a form of be, followed by the subject: "**Do** elephants live in Cameroon?" "**Is** the forest big?" "**Can** monkeys swim?" "**Did** you see the parrot?"',
    'Short answers repeat the auxiliary: "Yes, they do." "No, it isn’t." "Yes, they can." "No, I didn’t." Do not answer only "Yes" in writing when a full answer is asked for.',
    'Speech work: English has five **vowel letters**, a, e, i, o and u, but many more vowel **sounds**. Their short sounds are: **a** /æ/ (cat), **e** /e/ (bed), **i** /ɪ/ (sit), **o** /ɒ/ (hot), **u** /ʌ/ (sun). The other letters are consonants; y can be a vowel (gym, happy).',
  ], 'en1-short-vowels', 'Use the same auxiliary in the short answer as in the question.',
  ['"Are the trees tall?" The short answer is:', ['Yes, they are.', 'Yes, they do.', 'Yes, it is.', 'Yes, they have.'], 'The question uses "are".'],
  [['Yes/no question', 'A question that can be answered with yes or no.'], ['Vowel letter', 'One of the letters a, e, i, o and u.']],
  [
    { q: 'Make yes/no questions and give short answers: (a) "Gorillas live in the forest." (Yes) (b) "The river was clean." (No)', steps: ['(a) **"Do gorillas live in the forest?" "Yes, they do."**', '(b) **"Was the river clean?" "No, it wasn’t."**'] },
  ]),

  L('en-nature-1', 'en-f1-nature', '23.2', 'Nature, habitats and synonyms; short reports', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'Every plant and animal has a **habitat**, its natural home: the rainforest (gorillas, chimpanzees, elephants, parrots), the savannah (lions, giraffes, antelopes), rivers and lakes (fish, hippopotamuses, crocodiles), mountains (birds and many plants found nowhere else). Cameroon protects many of them in parks and reserves such as Waza National Park and the Dja Faunal Reserve.',
    'An **endangered** species is in danger of disappearing; an **extinct** one no longer exists anywhere. Threats: cutting down forests (deforestation), bush fires, poaching (illegal hunting) and pollution. We must **preserve** and **conserve** nature: plant trees, protect animals and keep rivers clean. The fight to save nature is "a war we must win".',
    '**Synonyms** are words with the same or nearly the same meaning: big – large, begin – start, protect – guard, preserve – conserve, home – habitat, kill – slay. A **short report** gives facts clearly: a title, what was observed, where and when, and a recommendation.',
  ], 'en1-habitats', 'Synonyms help you avoid repeating the same word.',
  ['Illegal hunting of wild animals is called:', ['poaching', 'farming', 'grazing', 'fishing'], 'Poaching endangers elephants and gorillas.'],
  [['Habitat', 'The natural home of a plant or animal.'], ['Extinct', 'No longer existing anywhere.'], ['Synonym', 'A word with the same or nearly the same meaning as another.']],
  [
    { q: 'Write a three-sentence report on the school garden.', steps: ['Title: **Report on the School Garden**', 'Facts: "On Monday, our class visited the school garden. We saw that many young trees were dry and the paths were full of rubbish."', 'Recommendation: "**We recommend that each class waters the trees once a week and keeps the paths clean.**"'] },
  ]),

  // ---------- 24. Careers ----------
  L('en-phrasal-1', 'en-f1-career', '24.1', 'Phrasal verbs', 10, ['Grammar', 'Vocabulary'], [
    'A **phrasal verb** is a verb with a small word (a preposition or adverb such as up, off, on, after, for) that together has a new meaning:\n- **give up**: stop trying ("Never give up your dreams.")\n- **look after**: take care of\n- **look for**: try to find\n- **find out**: discover\n- **turn on / turn off**: switch on / off\n- **wake up**: stop sleeping\n- **grow up**: become an adult ("I want to be a pilot when I grow up.")\n- **carry on**: continue.',
    'The meaning of a phrasal verb is often different from the meanings of its parts: "look up a word" means find it in a dictionary. Learn them in sentences.',
  ], 'en1-phrasal', 'Learn each phrasal verb with an example sentence.',
  ['"I want to ___ the truth." (discover)', ['find out', 'give up', 'look after', 'turn off'], '"Find out" means discover.'],
  [['Phrasal verb', 'A verb + a small word (up, on, off, after) with its own meaning.']],
  [
    { q: 'Replace the words in bold with a phrasal verb: "Please **take care of** your sister. Don’t **stop trying**; **continue** with your work."', steps: ['take care of → **look after**', 'stop trying → **give up**', 'continue → **carry on**'] },
  ]),

  L('en-career-1', 'en-f1-career', '24.2', 'Careers, success and gender equality; a class debate', 12, ['Vocabulary', 'Speaking', 'Listening'], [
    'Words about **careers** and **success**: ambition, goal, effort, hard work, determination, courage, talent, training, qualification, job satisfaction, promotion. Success comes from setting goals, working hard, learning from mistakes and asking for help. A successful family supports each member’s education and dreams.',
    '**Gender equality** means boys and girls, men and women have the same rights and chances: both can study science, become engineers, nurses, pilots or ministers, share housework and earn equal pay for equal work. **Gender discrimination** (treating someone unfairly because of their sex) holds back families and the country.',
    'In a **debate**, two sides argue about a **motion** (for example "Girls should do all the housework"). The **proposition** supports it and the **opposition** opposes it; a chairperson controls the debate and a timekeeper keeps time. Greet the house, state your side, give two or three reasons with examples, answer the other side politely, and conclude. Some young people feel sad or hopeless (**depression**); they should talk to a trusted adult.',
  ], 'en1-debate', 'In a debate, attack the argument, never the person.',
  ['In a debate, the person who keeps order is the:', ['chairperson', 'proposer', 'timekeeper', 'audience'], 'The timekeeper only watches the time.'],
  [['Gender equality', 'Equal rights and chances for males and females.'], ['Motion', 'The statement argued about in a debate.'], ['Determination', 'Firmly continuing to try despite difficulties.']],
  [
    { q: 'Give two points for the opposition on the motion "Girls should do all the housework."', steps: ['1. "**Housework is a life skill everyone needs**; boys will also live alone one day."', '2. "**If girls do all the housework, they have less time to study**, which is unfair and harms their future."'] },
  ]),

  // ---------- 25. Tourism ----------
  L('en-passive-1', 'en-f1-tourism', '25.1', 'The active and passive voice; the vowel /ʌ/', 12, ['Grammar', 'Speech work'], [
    'In the **active voice**, the subject does the action: "Many tourists **visit** Limbe." In the **passive voice**, the subject receives the action: "Limbe **is visited** by many tourists." The passive is formed with **be** (in the right tense) + the **past participle**, and the doer may follow "by".',
    'Tenses: present: "The falls **are visited** every year." past: "The museum **was built** long ago." "The tourists **were shown** the animals by the guide." The passive is useful when the doer is unknown or not important: "The road **was repaired** last year."',
    'Speech work: **/ʌ/** is a short open vowel, as in sun, cup, bus, mother, love, money, country (written u, o or ou). Compare: cup – cap, hut – hot, luck – lock, bun – ban.',
  ], 'passive-voice', 'The tense of "be" in the passive matches the tense of the active verb.',
  ['The passive of "The guide led the tourists" is:', ['The tourists were led by the guide.', 'The tourists led the guide.', 'The guide was led by the tourists.', 'The tourists are lead by the guide.'], 'Past passive: were + past participle.'],
  [['Active voice', 'The form in which the subject does the action.'], ['Passive voice', 'The form in which the subject receives the action.'], ['Past participle', 'The verb form used after have or be: visited, built, shown.']],
  [
    { q: 'Change into the passive: "People grow tea in Ndu."', steps: ['Object "tea" becomes the subject.', 'Present tense: is + past participle "grown".', '**"Tea is grown in Ndu."** ("by people" is left out because it adds nothing)'] },
  ]),

  L('en-tourism-1', 'en-f1-tourism', '25.2', 'Tourist sites in Cameroon; a formal letter; short poems', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'Cameroon is called "Africa in miniature" because it has nearly all of Africa’s landscapes. Tourist sites include: **Mount Cameroon** near Buea (the highest mountain in West and Central Africa), the beaches of **Limbe** and **Kribi**, the **Lobé Falls** near Kribi (which drop straight into the sea), **Waza National Park** in the Far North, the **Dja Faunal Reserve** (a UNESCO World Heritage Site), the Ekom-Nkam Falls, the Rhumsiki landscapes in the Mandara Mountains, and the chiefdoms and museums of Foumban and Bafut.',
    'Tourism words: tourist, tour guide, itinerary (a planned route and timetable), hotel, reservation, souvenir, excursion, hospitality (welcoming visitors warmly), attraction. Tourism brings jobs and money but sites must be kept clean and protected.',
    'Writing: a **formal letter** to a minister to encourage tourism follows the formal layout, gives reasons (jobs, foreign currency, pride) and suggestions (good roads, clean sites, advertising). A **short poem** about a tourist site uses lines and stanzas, vivid words and sometimes rhyme: "Mount Cameroon, so tall and grand, / You watch the sea and guard the land."',
  ], 'en1-tourist-sites', 'Name a site, say where it is and what visitors can see there.',
  ['Cameroon is called "Africa in miniature" because:', ['It has nearly all of Africa’s landscapes and climates', 'It is the smallest country in Africa', 'It has no forests', 'All Africans live there'], 'Coast, forest, savannah, mountains and the Sahel are all found there.'],
  [['Itinerary', 'A planned route and timetable for a journey.'], ['Hospitality', 'A friendly welcome given to guests and visitors.'], ['Souvenir', 'Something bought to remember a place.']],
  [
    { q: 'Write a two-day itinerary for visitors to Kribi.', steps: ['**Day 1**: 9 a.m. arrive and check in; 11 a.m. beach; 4 p.m. visit the Lobé Falls; 7 p.m. grilled fish dinner.', '**Day 2**: 8 a.m. boat trip on the Lobé River; 1 p.m. lunch; 3 p.m. buy souvenirs; 5 p.m. depart.'] },
  ]),

  // ---------- 26. Holidays and myths ----------
  L('en-prefix-1', 'en-f1-holiday', '26.1', 'Possessive adjectives; prefixes', 10, ['Grammar', 'Vocabulary'], [
    '**Possessive adjectives** (my, your, his, her, its, our, their) come before a noun and agree with the owner, not the thing owned: "Bih and **her** brothers", "Tanyi and **his** sisters", "the village and **its** customs".',
    'A **prefix** is added to the beginning of a word to change its meaning:\n- **un-**, **dis-**, **in-**, **im-**, **il-**, **ir-** mean "not": unhappy, unkind, dishonest, disagree, incorrect, impossible, impolite, illegal, irregular\n- **re-** means "again": rewrite, rebuild, return\n- **pre-** means "before": prepare, preview\n- **mis-** means "wrongly": misbehave, misspell.',
    'Use **im-** before p, b and m (impossible, impatient, immature), **il-** before l (illegal) and **ir-** before r (irresponsible).',
  ], 'en1-prefixes', 'A prefix never changes the spelling of the base word: dis + satisfied = dissatisfied.',
  ['The opposite of "legal" is:', ['illegal', 'unlegal', 'imlegal', 'dislegal'], 'il- before l.'],
  [['Prefix', 'Letters added to the beginning of a word to change its meaning.']],
  [
    { q: 'Form the opposites: kind, agree, patient, responsible, correct.', steps: ['kind → **unkind**', 'agree → **disagree**', 'patient → **impatient** (before p)', 'responsible → **irresponsible** (before r)', 'correct → **incorrect**'] },
  ]),

  L('en-myths-1', 'en-f1-culture', '16.3', 'Narrating an experience; local myths and legends', 12, ['Speaking', 'Reading', 'Writing'], [
    'To **narrate** an experience (such as a holiday in the village), tell what happened in **order** using the simple past and time words: first, then, next, after that, later, finally. Give details of who, where and when, what you saw and how you felt, and end with what you learnt.',
    'A **myth** is a traditional story that explains how something began: why the tortoise’s shell is cracked, where a people came from, or why a lake must not be fished. A **legend** is a story about a hero or event from the past that may be partly true. Myths and legends pass on a people’s beliefs and values, so we listen to them with respect, even when we do not believe every detail.',
    'Most narratives have a **beginning** (setting and characters), a **middle** (a problem or adventure) and an **end** (how it was solved). Cultural awareness means knowing and valuing the stories of our own people and those of others.',
  ], 'en1-narrative', 'Time words make the order of events clear to the reader.',
  ['A story that explains how something began, often with spirits or gods, is a:', ['myth', 'report', 'notice', 'recipe'], 'Legends are about heroes of the past.'],
  [['Narrate', 'To tell a story or describe events in order.'], ['Myth', 'A traditional story that explains the origin of something.'], ['Legend', 'A traditional story about a hero or past event that may be partly true.']],
  [
    { q: 'Write the beginning, middle and end of a short myth explaining why the tortoise’s shell is cracked.', steps: ['Beginning: "Long ago, Tortoise borrowed feathers from the birds to fly to a feast in the sky."', 'Middle: "He ate all the food, so the angry birds took back their feathers."', 'End: "Tortoise fell to the ground and his shell broke into pieces. **That is why its shell is cracked today.**"'] },
  ]),

  // ---------- 27. Culture and rights ----------
  L('en-transitive-1', 'en-f1-culture', '27.1', 'Transitive and intransitive verbs', 10, ['Grammar'], [
    'A **transitive** verb needs an **object** to complete its meaning: "The dancers **wore** masks." "The chief **opened** the festival." Ask "what?" or "whom?" after the verb: wore what? masks.',
    'An **intransitive** verb has no object: "The guests **arrived**." "The baby **slept**." "The drummers **danced** all night." (all night tells us when, not what).',
    'Some verbs can be both: "She **sang** a song" (transitive) / "She **sang** beautifully" (intransitive). Only transitive verbs can be made passive: "The festival was opened by the chief."',
  ], 'en1-transitive', 'Ask "what?" after the verb: if there is an answer, the verb is transitive.',
  ['Which verb is intransitive here: "The elders arrived early."', ['arrived', 'elders', 'early', 'the'], 'Arrived what? There is no answer, so no object.'],
  [['Transitive verb', 'A verb that takes an object.'], ['Intransitive verb', 'A verb that does not take an object.']],
  [
    { q: 'Say whether each verb is transitive or intransitive: (a) "They built a hut." (b) "The fire died." (c) "We celebrated the harvest."', steps: ['(a) built what? a hut → **transitive**', '(b) died what? no answer → **intransitive**', '(c) celebrated what? the harvest → **transitive**'] },
  ]),

  L('en-practices-1', 'en-f1-culture', '27.2', 'Good and harmful cultural practices; a debate on cultures', 12, ['Vocabulary', 'Speaking', 'Writing'], [
    '**Culture** is the way of life of a people: language, food, dress, music, dance, beliefs, festivals and customs. Words: tradition, custom, heritage, festival, ritual, chief, elders, masquerade, identity. Festivals such as the **Ngondo** of the Sawa people in Douala and the **Nguon** of the Bamoun people in Foumban celebrate culture and history.',
    '**Good practices** to keep: respect for elders, solidarity, hospitality, traditional dances and songs, local languages and crafts. **Harmful practices** violate human rights and must be abandoned: forced and early marriage, denying girls education, breast ironing, female genital mutilation, cruel widowhood rites and denying daughters or widows their inheritance. Cameroon’s laws protect children and women against these practices.',
    'In a **debate** on a motion such as "Foreign cultures are better than African cultures", show **tolerance**: every culture has good and bad sides. Give reasons, examples and respect for the other side. Be proud of your heritage while rejecting what harms people.',
  ], 'en1-practices', 'Ask of any custom: does it respect everyone’s dignity and rights?',
  ['Which practice violates the rights of the child?', ['Early forced marriage', 'Traditional dances', 'Respect for elders', 'Speaking a local language'], 'It denies the child education and free choice.'],
  [['Culture', 'The way of life of a people.'], ['Heritage', 'Traditions and values passed down from earlier generations.'], ['Tolerance', 'Accepting that others have different ways and beliefs.']],
  [
    { q: 'Write two sentences about a harmful cultural practice and why it should stop.', steps: ['Name it: "**Early forced marriage** is still practised in some communities."', 'Why it should stop: "It **denies girls their right to education and to choose their husband**, and it endangers their health."'] },
  ]),

  // ---------- 28. Cultural events ----------
  L('en-demonstratives-1', 'en-f1-events', '28.1', 'Adjectives of quality; demonstrative and distributive pronouns', 12, ['Grammar'], [
    '**Adjectives of quality** describe what a person or thing is like: beautiful, colourful, joyful, ancient, delicious, noisy. "A **colourful** dance", "a **delicious** meal".',
    '**Demonstratives** point to things: **this** (one, near), **these** (more than one, near), **that** (one, far), **those** (more than one, far). Before a noun they are demonstrative adjectives ("**this** mask"); standing alone they are pronouns ("**These** are our drums.").',
    '**Distributives** refer to members of a group one by one: **each** (every one separately: "Each of the dancers wore a mask"), **every** (all, one by one, before a singular noun: "Every guest received a gift"), **either** (one or the other of two), **neither** (not one and not the other of two). They take a **singular** verb: "Each of the girls **has** a role."',
  ], 'en1-demonstratives', 'This/these for near; that/those for far.',
  ['"___ of the two drums is broken; both work well."', ['Neither', 'Either', 'Each', 'Every'], 'Neither = not one and not the other.'],
  [['Demonstrative', 'A word that points to something: this, that, these, those.'], ['Distributive', 'A word that refers to members of a group one by one: each, every, either, neither.']],
  [
    { q: 'Choose the correct word: "(This/These) masks are old. (Each/Every) of the dancers (has/have) a costume."', steps: ['"masks" is plural and near → **These**', 'with "of the dancers" → **Each**', 'distributives take a singular verb → **has**'] },
  ]),

  L('en-homophones-1', 'en-f1-events', '28.2', 'Homophones and homonyms; planning and describing a cultural event', 12, ['Vocabulary', 'Writing'], [
    '**Homophones** sound the same but have different spellings and meanings: hear – here, see – sea, write – right, meat – meet, knew – new, their – there, flour – flower, pair – pear. **Homonyms** have the same spelling and sound but different meanings: bat (animal / for cricket), bank (for money / of a river), bark (of a dog / of a tree), match (game / for fire).',
    'Planning a **cultural event** (a traditional wedding, a baby shower, a cultural day): decide the purpose, date and place; list the people to invite and the activities (dances, food, speeches); share tasks; and prepare a **budget** with the details and cost of each item.',
    '**Writing about an event** you attended: introduce it (what, where, when), describe the main activities in order with sensory details and adjectives of quality, and give your feelings at the end: "It was the most colourful day of my holidays."',
  ], 'en1-homophones', 'Read your writing aloud slowly to catch homophone errors.',
  ['"The ___ of the tree is rough."', ['bark', 'barking', 'bank', 'back'], '"Bark" here means the outer layer of a tree.'],
  [['Homophone', 'A word that sounds like another but has a different spelling and meaning.'], ['Homonym', 'A word with the same spelling and sound as another but a different meaning.']],
  [
    { q: 'Choose the right homophones: "We will (meat/meet) at (their/there) house to (write/right) the invitations."', steps: ['to come together → **meet**', 'belonging to them → **their**', 'to put on paper → **write**'] },
  ]),

  // ---------- 29. Customs and regalia ----------
  L('en-noun-adj-1', 'en-f1-customs', '29.1', 'Forming adjectives from nouns', 10, ['Grammar', 'Vocabulary'], [
    'Many **adjectives** are formed from **nouns** by adding a suffix:\n- **-al**: culture → cultural, tradition → traditional, nation → national, music → musical\n- **-ful**: beauty → beautiful, help → helpful, colour → colourful, care → careful\n- **-ous**: danger → dangerous, fame → famous, courage → courageous\n- **-y**: noise → noisy, sun → sunny, dust → dusty\n- **-ic**: artist → artistic, history → historic\n- **-less**: care → careless, hope → hopeless.',
    'Spelling changes: y → i (beauty → beautiful), drop the e (fame → famous, noise → noisy), but keep the e in courageous. Check spellings in a dictionary.',
  ], 'en1-noun-adjective', 'Learn the noun and its adjective together: danger, dangerous.',
  ['The adjective from "fame" is:', ['famous', 'fameous', 'fameful', 'famy'], 'Drop the e and add -ous.'],
  [['Suffix', 'Letters added to the end of a word to make a new word.'], ['Adjective', 'A word that describes a noun.']],
  [
    { q: 'Form adjectives and use one in a sentence: colour, history, courage.', steps: ['colour → **colourful**; history → **historic**; courage → **courageous**', 'Sentence: "The dancers wore **colourful** costumes at the festival."'] },
  ]),

  L('en-regalia-1', 'en-f1-culture', '16.2', 'Customs, regalia and women’s rights; writing a poem', 12, ['Vocabulary', 'Reading', 'Writing'], [
    '**Customs** are long-established ways of doing things: greetings, naming ceremonies, traditional weddings, funerals, harvest festivals. **Regalia** are the special clothes and objects worn or carried on important occasions: the embroidered **toghu** of the North-West, caps and beads of chiefs, staffs and fly whisks. Traditional dances and songs celebrate identity and keep cultural ties alive.',
    'Some customs are **questionable** because they treat people unequally. In some places, widows and daughters were denied the right to inherit land. Cameroonian law recognises that daughters inherit from their parents as sons do and protects widows’ rights. Cultural values should respect everyone’s dignity and rights.',
    'A **poem** is written in **lines** grouped in **stanzas**. Poets use vivid words, repetition, rhyme (words ending with the same sound: land – hand) and images to share feelings and ideas. To write a short poem: choose your subject, list strong words about it, write two or three stanzas, and read it aloud to hear its rhythm.',
  ], 'en1-poem', 'Read your poem aloud: rhythm matters as much as rhyme.',
  ['A group of lines in a poem is a:', ['stanza', 'paragraph', 'chapter', 'scene'], 'A stanza is like a paragraph in a poem.'],
  [['Regalia', 'Special clothes and objects worn on important occasions.'], ['Stanza', 'A group of lines in a poem.'], ['Rhyme', 'The same sound at the end of words, such as land and hand.']],
  [
    { q: 'Write a four-line stanza on a daughter’s right to inherit land.', steps: ['"My father’s land is mine to keep,"', '"Where seeds I sow and harvests reap;"', '"A daughter too may hold the ground,"', '"Where equal rights and hope are found."', 'The lines rhyme in pairs: keep – reap, ground – found.'] },
  ]),
];
