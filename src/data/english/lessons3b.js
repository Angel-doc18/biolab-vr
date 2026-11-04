// English Language lessons for Form 3, sequences 3 to 6 (second part):
// disasters and the environment, tourism and parks, citizenship, customs and
// festivals, and media, community and technology. Original text written for
// this app. **double asterisks** mark key terms; `examples` are worked examples.

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

export const LESSONS_3B = [
  // ---------- 13. Disasters ----------
  L('en-future-3', 'en-f3-disasters', '13.1', 'The simple future with will and shall', 10, ['Grammar'], [
    'The **simple future** is formed with **will** (all persons) or **shall** (mainly with I and we, more formal) + the base form: "The rains will start in March." "We shall overcome." Short forms: I’ll, you’ll; negative: will not (won’t), shall not (shan’t).',
    'Uses: predictions ("There will be floods if we block the gutters"), promises ("I will help the victims"), decisions made now ("I’ll call the fire brigade!") and offers ("Shall I carry the water?"). In conditional sentences: "If you build on that slope, the house **will** collapse."',
    'Describing plans: "How will you spend your weekend?" "I will visit my aunt and help her clear the gutters."',
  ], 'future-forms', 'In "if" sentences, put will in the main clause, not after "if".',
  ['"If the dam breaks, the village ___ flooded."', ['will be', 'would been', 'is being', 'was'], 'A real condition about the future.'],
  [['Simple future', 'The tense formed with will or shall + base form.'], ['Prediction', 'A statement about what will happen.']],
  [
    { q: 'Correct: "If it will rain tomorrow, the road shall be flooded and we will not to travel."', steps: ['No "will" after "if": **If it rains tomorrow**', 'Prediction with "the road": **will be flooded**', 'No "to" after "will": **we will not travel**'] },
  ]),

  L('en-disasters-3', 'en-f3-disasters', '13.2', 'Natural disasters; causes and consequences of landslides', 12, ['Vocabulary', 'Reading', 'Writing'], [
    '**Natural disasters** include floods, droughts, landslides, earthquakes, volcanic eruptions, tornadoes (spinning columns of wind), hurricanes, tsunamis (giant sea waves), avalanches (masses of snow sliding down mountains) and blizzards (snowstorms with strong winds). In Cameroon, **Mount Cameroon** erupted in 1999 and 2000, landslides have struck parts of the West and North-West, and in 1986 a cloud of carbon dioxide from **Lake Nyos** killed about 1 700 people.',
    '**Landslides**: causes: heavy rain soaking steep slopes, cutting down trees whose roots hold the soil, building on unstable hills, digging at the foot of slopes, and earthquakes. Consequences: loss of life, destroyed houses, roads and farms, displaced families and blocked rivers.',
    'Prevention and protection: plant trees and grass on slopes, build terraces and drainage, avoid building on steep or loose land, and follow warnings from the authorities. Describing an incident: say what happened, where and when, its causes, its effects and what was done.',
  ], 'en3-disasters', 'Causes come before the event; consequences come after it.',
  ['A giant sea wave caused by an earthquake under the sea is a:', ['tsunami', 'tornado', 'blizzard', 'drought'], 'Tsunamis flood coasts.'],
  [['Natural disaster', 'A natural event that causes great damage and loss of life.'], ['Landslide', 'A mass of earth and rock sliding down a slope.']],
  [
    { q: 'Write two causes and two consequences of a landslide.', steps: ['Causes: **heavy rain on steep slopes**; **cutting down trees** whose roots hold the soil.', 'Consequences: **houses and farms are buried**; **people are killed or made homeless**.'] },
  ]),

  // ---------- 14. Waste management ----------
  L('en-phrasal-3', 'en-f3-waste', '14.1', 'Phrasal verbs about the environment; the diphthongs /ʊə/ and /əʊ/', 10, ['Grammar', 'Speech work'], [
    '**Phrasal verbs** about waste and the environment: pick up (lift from the ground), throw away (discard), cut down (fell trees; reduce), cut down on (use less), clean up (make clean), use up (finish), put out (extinguish a fire), give off (release smoke or gas), set up (start a club or project), turn off (switch off).',
    'Some phrasal verbs can be separated by the object: "Pick **the papers** up" or "Pick up the papers"; with a pronoun the object goes in the middle: "Pick **them** up" (not "pick up them").',
    'Speech work: **/ʊə/** (pure, cure, tour, poor in some accents) and **/əʊ/** (go, no, smoke, home, slogan). Compare: sure /ʃʊə/ – show /ʃəʊ/, tour /tʊə/ – toe /təʊ/.',
  ], 'en3-phrasal-waste', 'With a pronoun, always put it between the verb and the particle.',
  ['"These papers are dirty. Please throw ___."', ['them away', 'away them', 'them up', 'up them'], 'The pronoun goes in the middle.'],
  [['Phrasal verb', 'A verb + particle (up, down, away, off) with a special meaning.'], ['Diphthong', 'A vowel sound that glides from one vowel to another.']],
  [
    { q: 'Replace the words in bold with phrasal verbs: "Burning tyres **release** black smoke. We must **reduce** waste and **start** a recycling club."', steps: ['release → **give off**', 'reduce → **cut down on**', 'start → **set up**'] },
  ]),

  L('en-slogans-3', 'en-f3-waste', '14.2', 'Waste management; imperatives, slogans and posters', 12, ['Vocabulary', 'Reading', 'Writing'], [
    '**Waste management** is the collection, sorting, recycling and safe disposal of waste. Types of waste: **organic** or biodegradable (food remains, leaves) which can become compost; **plastic**, **paper**, **glass** and **metal**, which can often be recycled; and **toxic** waste (batteries, chemicals, used oil) which needs special treatment. The "three Rs": **reduce, reuse, recycle**.',
    '**Imperative statements** give instructions and are used on signs and posters: "Keep our school clean." "Do not burn plastic." "Put rubbish in the bin."',
    'A **slogan** is a short, catchy phrase that is easy to remember: "A clean school is a healthy school." "Bin it, don’t drop it." A **poster** has a bold heading or slogan, a simple picture, a few short points and the name of who made it. Attitudes: awareness, love for the environment and cleanliness.',
  ], 'en3-poster', 'A good slogan uses rhythm, rhyme or repetition.',
  ['Old batteries are an example of:', ['toxic waste', 'organic waste', 'compost', 'paper waste'], 'They contain harmful chemicals.'],
  [['Waste management', 'The collection, treatment and disposal of waste.'], ['Biodegradable', 'Able to rot away naturally.'], ['Slogan', 'A short, memorable phrase used to promote an idea.']],
  [
    { q: 'Write three slogans for a clean-environment campaign.', steps: ['"**Bin it, don’t drop it!**" (rhythm)', '"**Reduce, reuse, recycle!**" (repetition of sounds)', '"**A clean school is a healthy school.**" (repetition of "school")'] },
  ]),

  // ---------- 15. Tourism ----------
  L('en-movement-3', 'en-f3-tourism', '15.1', 'Prepositions of place and movement', 10, ['Grammar'], [
    '**Prepositions of movement** show direction: **across** (from one side to the other of a surface: across the river), **along** (following a line: along the beach), **through** (inside, from one end to the other: through the forest, through the tunnel), **into** and **out of** (entering and leaving), **onto** and **off** (to and from a surface), **over** (above, to the other side: over the bridge), **under**, **up** and **down** (a hill), **past** (beyond), **towards** (in the direction of) and **round** (in a circle).',
    '**Prepositions of place** show position: at, in, on, near, next to, beside, between, among, behind, in front of, opposite, above, below.',
    'Compare: "The tourists are **in** the museum" (place) and "The tourists walked **into** the museum" (movement).',
  ], 'en3-movement', 'Movement prepositions usually go with verbs of motion: walk, run, climb, swim, drive.',
  ['"The guide led us ___ the forest to the waterfall."', ['through', 'across', 'onto', 'off'], 'Inside the forest, from one side to the other.'],
  [['Preposition of movement', 'A word that shows the direction of movement.'], ['Preposition of place', 'A word that shows where something is.']],
  [
    { q: 'Complete: "We drove ___ the bridge, walked ___ the beach and then climbed ___ the hill to the monument."', steps: ['over the bridge → **over** (or across)', 'following the beach → **along**', 'to the top → **up**'] },
  ]),

  L('en-punctuation-3', 'en-f3-tourism', '15.2', 'Tourism, silent letters and punctuation; describing a monument', 12, ['Vocabulary', 'Writing', 'Speech work'], [
    'Words about **tourism**: tourist, tour guide, itinerary, attraction, monument, historic building, artefacts, wildlife, souvenir, hospitality, excursion, accommodation. Cameroon’s attractions include the Sultan’s Palace and museum in **Foumban**, the **Reunification Monument** in Yaoundé, the beaches of **Limbe** and **Kribi**, and its national parks.',
    'Silent letters: silent **t** in castle, listen, fasten, whistle, Christmas; and sounds that are often weakened to /ə/ in unstressed syllables.',
    '**Punctuation**: a capital letter for the first word of a sentence and for names (Foumban, the Sultan); a full stop (.), question mark (?) or exclamation mark (!) at the end; commas in lists and after introductory words ("However, …"); an apostrophe for possession (the Sultan’s palace) and short forms (it’s); quotation marks for direct speech, with the comma inside: "Welcome," said the guide. **Describing a monument**: its name and location, its history, what it looks like (shape, size, materials, colours) and why it is important.',
  ], 'en3-punctuation', 'Read your writing aloud: pauses usually need a comma or a full stop.',
  ['Which is punctuated correctly?', ['The Sultan’s palace is in Foumban.', 'the sultans palace is in foumban.', 'The Sultans’ palace, is in Foumban', 'The sultan’s Palace is in foumban'], 'Capitals for names; apostrophe for possession.'],
  [['Monument', 'A structure built to remember a person or an event.'], ['Artefact', 'An object made by people, especially of historical interest.']],
  [
    { q: 'Punctuate: "welcome to the reunification monument said the guide it was built to remember the reunification of cameroon"', steps: ['Capitals: Welcome, Reunification Monument, Cameroon.', 'Direct speech with comma inside the quotation marks.', '**"Welcome to the Reunification Monument," said the guide. "It was built to remember the reunification of Cameroon."**'] },
  ]),

  // ---------- 16. Parks ----------
  L('en-movement2-3', 'en-f3-parks', '16.1', 'More prepositions of place and movement', 10, ['Grammar'], [
    'More pairs that are often confused:\n- **in / into**: "The lions are in the park" (place); "The jeep drove into the park" (movement)\n- **on / onto**: "The bird is on the branch"; "The monkey jumped onto the branch"\n- **beside / besides**: beside = next to ("beside the river"); besides = in addition to ("Besides elephants, we saw giraffes")\n- **between / among**: two things or a group\n- **towards / from**: "The elephants moved towards the waterhole, away from the tourists."',
    'Prepositions are followed by a noun, a pronoun or an -ing form: "after watching the animals", never by a base verb.',
  ], 'en3-movement', 'Beside is a place; besides means "also".',
  ['"___ the lions, we also saw antelopes."', ['Besides', 'Beside', 'Between', 'Among'], '"Besides" means in addition to.'],
  [['Beside', 'Next to.'], ['Besides', 'In addition to.']],
  [
    { q: 'Choose: "The guide walked (beside/besides) us. (Beside/Besides) the guide, two rangers came. The jeep drove (in/into) the reserve."', steps: ['next to us → **beside**', 'in addition to → **Besides**', 'movement → **into**'] },
  ]),

  L('en-parks-3', 'en-f3-parks', '16.2', 'Parks and reserves; fauna and flora; Cameroon as a tourist destination', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'A **national park** or **reserve** is a protected area where plants and animals live in their natural habitat. The **fauna** is the animal life and the **flora** the plant life. In Cameroon: **Waza National Park** (Far North: elephants, giraffes, lions, antelopes), **Bénoué National Park** (North: hippopotamuses, antelopes), **Korup National Park** (South-West: one of Africa’s oldest rainforests), and the **Dja Faunal Reserve** (East and South: gorillas, chimpanzees; a UNESCO World Heritage Site). Famous African parks include the Serengeti in Tanzania and Kruger in South Africa.',
    'Parks protect **biodiversity**, attract tourists, create jobs for rangers and guides, and support research. Threats: **poaching**, bush fires, farming inside parks and deforestation.',
    'Writing short paragraphs on "**Cameroon, a tourist destination par excellence**": give a topic sentence, then facts about its parks, beaches, mountains, cultures and festivals, and conclude with a reason to visit. Visitors buy **souvenirs** (carvings, beads, baskets) that support local craftspeople.',
  ], 'en3-parks', 'Fauna for animals, flora for plants: f-a for animals.',
  ['Korup National Park is famous for its:', ['ancient rainforest', 'desert dunes', 'snow', 'savannah lions only'], 'It is in the South-West Region.'],
  [['Fauna', 'The animals of a region.'], ['Flora', 'The plants of a region.'], ['Biodiversity', 'The variety of plant and animal life in an area.']],
  [
    { q: 'Write a topic sentence and two supporting sentences on Cameroon as a tourist destination.', steps: ['Topic: "**Cameroon is a tourist destination par excellence.**"', 'Support 1: "Visitors can see elephants and giraffes in Waza National Park and gorillas in the Dja Reserve."', 'Support 2: "They can also enjoy the beaches of Kribi, climb Mount Cameroon and attend festivals such as the Ngondo."'] },
  ]),

  // ---------- 17. Humanitarian action ----------
  L('en-linking-3', 'en-f3-humanitarian', '17.1', 'Linking words for purpose and contrast; the sounds /ʃ/ and /ʒ/', 12, ['Grammar', 'Speech work'], [
    '**Purpose** (why something is done): **to**, **in order to**, **so as to** + base form ("They collected clothes **in order to** help refugees"); **so that** + clause ("They raised money **so that** the children could go to school"); **for** + noun ("for the victims").',
    '**Contrast**: **but**, **although / even though** + clause ("**Although** they were tired, they kept working"), **despite / in spite of** + noun or -ing ("**Despite** the rain, they continued"), **however** at the start of a sentence followed by a comma ("The camp was crowded. **However**, everyone received food."), **whereas / while** to compare ("Some gave money, **whereas** others gave time").',
    'Speech work: **/ʃ/** (shelter, nation, sure, machine) and **/ʒ/** (measure, pleasure, vision, usual, garage). Compare: mission /ˈmɪʃn/ and vision /ˈvɪʒn/.',
  ], 'en3-linking', 'Despite + noun; although + subject and verb.',
  ['"___ he had little money, he gave to the orphanage."', ['Although', 'Despite', 'In order to', 'So that'], 'A clause with subject and verb follows "although".'],
  [['Linking word', 'A word or phrase that joins ideas, such as although, however or so that.'], ['Purpose', 'The reason why something is done.']],
  [
    { q: 'Join the sentences: (a) "The volunteers worked all night. They wanted to finish the shelter." (purpose) (b) "The road was flooded. The aid trucks arrived." (contrast)', steps: ['(a) **"The volunteers worked all night in order to finish the shelter."**', '(b) **"Although the road was flooded, the aid trucks arrived."** or **"Despite the flooded road, the aid trucks arrived."**'] },
  ]),

  L('en-humanitarian-3', 'en-f3-humanitarian', '17.2', 'Volunteering and humanitarian action; refugees and asylum; a report', 12, ['Vocabulary', 'Reading', 'Writing'], [
    '**Humanitarian action** is help given to save lives and reduce suffering during crises such as wars, floods and epidemics: food, water, shelter, medical care and protection. It is done by governments, the Red Cross and other organisations, and by **volunteers** who give their time without pay. Values: kindness, outreach, responsibility and citizenship.',
    'A **refugee** is a person forced to flee their country because of war, violence or persecution; an **internally displaced person** flees but stays inside their own country; **asylum** is the protection a country gives to a refugee. Cameroon hosts refugees from neighbouring countries.',
    'A **report on humanitarian actions** (for example a visit to an orphanage) has a title, an introduction (who, when, where, why), the activities carried out, the results or observations, recommendations, and the writer’s name and date.',
  ], 'en3-report', 'In a report, use the past tense for what was done and the present for recommendations.',
  ['A person who flees home because of war but stays inside their own country is:', ['an internally displaced person', 'a refugee abroad', 'a tourist', 'an immigrant worker'], 'Refugees cross into another country.'],
  [['Humanitarian', 'Concerned with saving lives and reducing suffering.'], ['Refugee', 'A person forced to flee to another country for safety.'], ['Asylum', 'Protection given by a country to a refugee.']],
  [
    { q: 'Write the introduction of a report on your club’s visit to an orphanage.', steps: ['"**Report on the Health Club’s visit to the Sunshine Orphanage**"', '"On Saturday 8th February, twenty members of the Health Club visited the Sunshine Orphanage in Buea, at the request of the club patron."', '"The aim was to donate food and clothes and to spend time with the children."'] },
  ]),

  // ---------- 18. Child trafficking ----------
  L('en-patterns-3', 'en-f3-trafficking', '18.1', 'Sentence patterns: SV, SVO, SVC, SVA, SVOO and SVOC', 12, ['Grammar'], [
    'English sentences follow basic **patterns** made of S (subject), V (verb), O (object), C (complement) and A (adverbial):\n- **SV**: "The child disappeared."\n- **SVO**: "The police arrested the trafficker."\n- **SVC**: "The girl became a nurse." "She is safe." (C describes S)\n- **SVA**: "The children are at school." (A says where, when or how; it is needed)\n- **SVOO**: "The court gave the victim justice." (indirect object + direct object)\n- **SVOC**: "They elected her president." "The news made us sad." (C describes O).',
    'To find the pattern: find the verb, ask "who or what?" before it (subject) and "what or whom?" after it (object), then see if a word describes the subject or object (complement) or gives needed information about place or time (adverbial).',
  ], 'en3-sentence-patterns', 'A complement describes; an object receives.',
  ['"The judge declared the man guilty." The pattern is:', ['SVOC', 'SVOO', 'SVC', 'SVO'], '"Guilty" describes the object, "the man".'],
  [['Complement', 'A word or phrase that describes the subject or the object.'], ['Adverbial', 'A word or phrase that tells where, when or how, needed in some patterns.']],
  [
    { q: 'Give the pattern: (a) "The rescued children are safe." (b) "The nurse gave the girl medicine." (c) "The victims stayed in the shelter."', steps: ['(a) "safe" describes the subject → **SVC**', '(b) two objects: the girl, medicine → **SVOO**', '(c) "in the shelter" tells where and is needed → **SVA**'] },
  ]),

  L('en-trafficking-3', 'en-f3-trafficking', '18.2', 'Child trafficking and exploitation; the vowels /ʌ/ and /ɔː/; context clues', 12, ['Vocabulary', 'Speaking', 'Reading'], [
    '**Child trafficking** is recruiting, moving or keeping children by force, deceit or payment in order to **exploit** them: as domestic servants, street sellers, farm or mine workers, for begging, for sexual exploitation or forced marriage. Traffickers often promise schooling or good jobs in the city. **Child labour** is work that harms a child’s health or keeps them from school.',
    '**Safety measures**: never follow strangers who promise money or jobs far away; tell parents or teachers about suspicious offers; keep away from isolated places; know your rights; and report cases to the police or social services. Attitudes: caution, vigilance and alertness.',
    'Speech work: **/ʌ/** (cut, love, trust, money) and **/ɔː/** (caught, law, court, force, warn). Compare: cut – caught, done – dawn, shut – short. **Context clues** help with new words: "The children were **coerced**, forced against their will, to work" (the definition follows).',
  ], 'en3-safety', 'If an offer sounds too good to be true, ask a trusted adult first.',
  ['Traffickers often trick children by:', ['promising school or good jobs in the city', 'giving them free textbooks at school', 'sending them home', 'telling their parents the truth'], 'Deceit is a sign of trafficking.'],
  [['Trafficking', 'Moving or keeping people by force or deceit to exploit them.'], ['Exploitation', 'Using someone unfairly for one’s own benefit.'], ['Vigilance', 'Being watchful for danger.']],
  [
    { q: 'Use context clues: "The trafficker was apprehended; the police caught him at the border." What does "apprehended" mean?', steps: ['Clue: "the police caught him".', 'So **"apprehended" means arrested or caught by the police.**'] },
  ]),

  // ---------- 19. Customs and abuses ----------
  L('en-gerund-3', 'en-f3-customs', '19.1', 'The gerund; syllabification', 10, ['Grammar', 'Speech work'], [
    'A **gerund** is the -ing form of a verb used as a **noun**: as subject ("**Dancing** is part of our culture"), as object ("She enjoys **singing**"), after a preposition ("He is good at **drumming**"; "Thank you for **coming**"). Some verbs are followed by a gerund: enjoy, avoid, finish, stop, keep, mind, admit, deny, practise, suggest.',
    'Compare with the present participle in a continuous tense: "They are **dancing**" (verb). A gerund answers "what?": "What is part of our culture? Dancing."',
    '**Syllabification** is dividing a word into syllables, each with one vowel sound: cul-ture (2), tra-di-tion (3), cer-e-mo-ny (4), mar-riage (2), cus-tom (2). Knowing the syllables helps with spelling, stress and dividing words at the end of a line.',
  ], 'en3-gerund', 'After a preposition, always use the -ing form: "for coming", not "for come".',
  ['"We look forward to ___ the festival."', ['attending', 'attend', 'attended', 'be attending'], '"To" here is a preposition, so a gerund follows.'],
  [['Gerund', 'The -ing form of a verb used as a noun.'], ['Syllable', 'A part of a word with one vowel sound.']],
  [
    { q: 'Divide into syllables and count: initiation, festival, widowhood.', steps: ['in-i-ti-a-tion → **5** syllables', 'fes-ti-val → **3** syllables', 'wid-ow-hood → **3** syllables'] },
  ]),

  L('en-abuse-3', 'en-f3-customs', '19.2', 'Customs and cultural abuses; a letter to the police', 14, ['Vocabulary', 'Listening', 'Reading', 'Writing'], [
    '**Customs** are long-established ways of a community: naming ceremonies, initiation rites, traditional weddings and funerals, harvest festivals and greetings. Most build identity and unity. Some practices are **abuses** that violate **human dignity** and rights: early and forced marriage, breast ironing, female genital mutilation, cruel widowhood rites, denying girls education or inheritance, and violence against women and girls.',
    'Cameroon’s laws punish many of these: the Penal Code punishes forced marriage, assault and the abuse of children, and the Constitution guarantees equality. Victims and witnesses can report to the police, gendarmerie, social affairs services or a trusted teacher.',
    'A **letter to the police reporting a case of child abuse** is formal: your address and the date; "The Commissioner of Police, …"; "Dear Sir," or "Dear Madam,"; a subject line ("Report of a case of child abuse"); the facts (who, what, where, when, how you know); a request for action; "Yours faithfully," with your full name. Keep to the facts and keep the victim’s safety first.',
  ], 'letter-formal', 'In a report of abuse, give facts, not rumours.',
  ['Which is a cultural abuse?', ['Breast ironing', 'A naming ceremony', 'Traditional dancing', 'Greeting elders'], 'It harms girls and violates their rights.'],
  [['Custom', 'A traditional way of doing things in a community.'], ['Human dignity', 'The worth and respect every person is owed.'], ['Abuse', 'Cruel or harmful treatment of a person.']],
  [
    { q: 'Write the body of a letter reporting a girl kept from school to sell in the market.', steps: ['Facts: "**I write to report that a twelve-year-old girl in our quarter, Mile 2, is kept from school every day to sell groundnuts in the main market.**"', 'Evidence: "I have seen her in the market during school hours for the past three weeks."', 'Request: "I humbly request that your services look into the matter to protect her right to education."'] },
  ]),

  // ---------- 20. Festivals ----------
  L('en-speculation-3', 'en-f3-festivals', '20.1', 'Modals for speculation; the clusters /kr/ and /br/', 10, ['Grammar', 'Speech work'], [
    '**Speculating** means making a guess from evidence. About the **present**: must (almost sure), may, might, could (possible), can’t (almost sure not) + base form: "The drums are loud; the festival **must be** starting."',
    'About the **past**: modal + **have** + past participle: "The streets are wet; it **must have rained**." "They **might have gone** to the palace." "She **can’t have seen** the masquerade; she was in Douala."',
    'Speech work: **consonant clusters** join consonants without a vowel between them: **/kr/** (crowd, craft, cry, crown) and **/br/** (bride, bright, bring, brass). Do not add a vowel: say "crowd", not "ku-rowd".',
  ], 'en3-speculation', 'For the past, add "have" + past participle after the modal.',
  ['"The palace gates are open. The Fon ___ arrived." (almost sure)', ['must have', 'can’t have', 'mustn’t', 'shouldn’t'], 'Strong evidence about the past.'],
  [['Speculation', 'A guess based on evidence.'], ['Consonant cluster', 'Two or more consonant sounds together, as in "crowd".']],
  [
    { q: 'Speculate about the past: (a) "There are footprints of elephants." (b) "He was in class all day, so he ___ visited the museum."', steps: ['(a) **"Elephants must have passed here."**', '(b) **"He can’t have visited the museum."**'] },
  ]),

  L('en-festivals-3', 'en-f3-festivals', '20.2', 'Festivals of Cameroon; artefacts; a museum report', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'Popular **festivals** in Cameroon include the **Ngondo** of the Sawa peoples in Douala (with a ritual on the Wouri River), the **Nguon** of the Bamoun people in Foumban, the **Lela** of Bali Nyonga in the North-West, the **Fantasia** of the northern lamidates with horse riders, and the traditional dances of every region. Festivals celebrate history, harvest and unity, and show **tolerance** and **acceptance** of others.',
    '**Cultural artefacts** found in museums and palaces: masks, carved stools and thrones, drums, beaded calabashes, bronze and brass objects, royal regalia, spears, pottery and woven baskets. The palaces of the **Fon** (in the Grassfields) and the **Lamido** (in the north) keep many of them.',
    'A **report on a visit** to a museum or a chief’s palace: title; when, where and why you went; what you saw (in categories: dress, weapons, musical instruments); what you learnt; and a recommendation (for example that more students should visit).',
  ], 'en3-festivals', 'Group what you saw into categories to make your report clear.',
  ['The Fantasia, with horse riders, is a festival of the:', ['northern lamidates', 'coastal Sawa', 'forest of the East only', 'Bakweri'], 'It is held in the north.'],
  [['Artefact', 'An object made by people, often of historical or cultural interest.'], ['Fon', 'A traditional ruler in the Grassfields of the North-West and West.'], ['Lamido', 'A traditional ruler in the northern regions.']],
  [
    { q: 'List the artefacts you would see in a palace museum under three headings.', steps: ['Musical instruments: **drums, xylophones, flutes**', 'Royal objects: **thrones, beaded stools, caps, staffs**', 'Weapons: **spears, shields, knives**'] },
  ]),

  // ---------- 21. Celebrations ----------
  L('en-pronouns-3', 'en-f3-occasions', '21.1', 'Pronouns', 10, ['Grammar'], [
    'Kinds of **pronouns**:\n- **personal**: subject (I, you, he, she, it, we, they) and object (me, you, him, her, it, us, them)\n- **possessive**: mine, yours, his, hers, ours, theirs\n- **reflexive**: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves ("They enjoyed themselves")\n- **demonstrative**: this, that, these, those\n- **relative**: who, whom, whose, which, that\n- **interrogative**: who, what, which, whose\n- **indefinite**: someone, anybody, nothing, everyone.',
    'Common errors: "between you and **me**" (not I); "**themselves**" (not theirselves); "He and **I** went" (subject); "for him and **me**" (object). A pronoun must agree with the noun it replaces: "Each guest brought **his or her** gift" or, more simply, "All the guests brought **their** gifts."',
  ], 'en3-pronouns', 'Remove the other person to test: "for me" sounds right, so "for him and me".',
  ['"The Fon thanked my sister and ___."', ['me', 'I', 'myself', 'mine'], 'Object of "thanked": me.'],
  [['Reflexive pronoun', 'A pronoun ending in -self or -selves that refers back to the subject.'], ['Pronoun', 'A word used in place of a noun.']],
  [
    { q: 'Correct: "Me and him organised the party and the guests enjoyed theirselves."', steps: ['subject forms: **He and I** organised the party', 'reflexive: **themselves**', '"**He and I** organised the party and the guests enjoyed **themselves**."'] },
  ]),

  L('en-affixes-3', 'en-f3-occasions', '21.2', 'Word formation by affixation; an installation ceremony; planning a party', 12, ['Vocabulary', 'Reading', 'Writing'], [
    '**Affixation** forms new words by adding **prefixes** (at the front) or **suffixes** (at the end):\n- prefixes: un- (unhappy), dis- (disagree), in-/im-/il-/ir- (incorrect, impossible, illegal, irregular), re- (rebuild), mis- (misuse), pre- (prepare), co- (co-operate)\n- suffixes forming nouns: -ment (government), -ness (happiness), -tion (celebration), -ity (activity), -er/-or (organiser, visitor)\n- suffixes forming adjectives: -ful (joyful), -less (careless), -ous (famous), -able (enjoyable), -al (cultural)\n- suffixes forming verbs: -ise/-ize (organise), -en (widen); adverbs: -ly (happily).',
    'An **installation ceremony** officially places a new official or ruler in office, such as a new Regional Delegate, principal or Fon: speeches, the reading of the appointment, the handing over of symbols of office, songs, dances and a reception.',
    '**Planning an occasion** (for example a birthday party): purpose, date, time and place; guest list and invitations; programme of events; menu; budget; and sharing of tasks. Write the plan as a list or table so everyone knows their role.',
  ], 'en3-affixes', 'A suffix often changes the word class; a prefix usually changes the meaning.',
  ['The noun formed from "celebrate" is:', ['celebration', 'celebratement', 'celebrateness', 'celebrable'], 'celebrate + -ion (drop the e).'],
  [['Affix', 'A prefix or suffix added to a word.'], ['Prefix', 'An affix added at the beginning of a word.'], ['Suffix', 'An affix added at the end of a word.']],
  [
    { q: 'Form words: (a) noun from "appoint" (b) adjective from "joy" (c) opposite of "organised" (d) adverb from "careful"', steps: ['(a) **appointment** (-ment)', '(b) **joyful** (-ful)', '(c) **disorganised** (dis-)', '(d) **carefully** (-ly)'] },
  ]),

  // ---------- 22. Science and inventions ----------
  L('en-indefinite-3', 'en-f3-science', '22.1', 'Indefinite pronouns; the schwa /ə/', 10, ['Grammar', 'Speech work'], [
    '**Indefinite pronouns** refer to people or things in general: **somebody / someone / something**, **anybody / anyone / anything**, **nobody / no one / nothing**, **everybody / everyone / everything**, and each, either, neither, none, all, both, few, many, several.',
    'Use **some-** in positive statements ("Someone invented the wheel") and offers; **any-** in questions and negatives ("Did anyone see the experiment?" "I didn’t find anything"); **no-** with a positive verb ("Nobody knows", never "nobody doesn’t know"). Words with -one, -body and -thing, and each, either and neither, take a **singular** verb: "Everyone **has** a laboratory coat."',
    'Speech work: the **schwa /ə/** is the weak vowel in unstressed syllables: about /əˈbaʊt/, science /ˈsaɪəns/, computer /kəmˈpjuːtə/, apparatus /ˌæpəˈreɪtəs/, inventor /ɪnˈventə/.',
  ], 'en3-indefinite', 'Every-, some-, any- and no- words with -one or -body take a singular verb.',
  ['"___ has finished the experiment, so we can go." (all of them)', ['Everybody', 'Nobody', 'Anybody', 'Somebodies'], 'Everybody = all, with a singular verb.'],
  [['Indefinite pronoun', 'A pronoun that refers to people or things in general.'], ['Schwa', 'The weak vowel /ə/ heard in unstressed syllables.']],
  [
    { q: 'Correct: "Nobody don’t know who invented it, and everyone have a theory."', steps: ['no double negative: **Nobody knows**', 'singular verb: **everyone has**', '"**Nobody knows** who invented it, and **everyone has** a theory."'] },
  ]),

  L('en-inventions-3', 'en-f3-science', '22.2', 'Science, technology and inventions; imaginative writing', 12, ['Vocabulary', 'Reading', 'Writing'], [
    '**Science** is the study of the natural world by observation and experiment; **technology** applies science to make tools and solve problems. Famous scientists and inventors: **Isaac Newton** (laws of motion and gravity, 1687), **Alexander Graham Bell** (telephone, patented 1876), **Thomas Edison** (a practical electric light bulb, 1879), **Louis Pasteur** (vaccines and pasteurisation), **Marie Curie** (radioactivity; two Nobel Prizes), the **Wright brothers** (first powered aeroplane flight, 1903), and **Tim Berners-Lee** (the World Wide Web, 1989).',
    'Words: scientist, inventor, invention, discovery, experiment, laboratory, research, patent, innovation, device, prototype. An **invention** is something made for the first time (the telephone); a **discovery** is finding something that already existed (penicillin).',
    '**Imaginative writing** about an invention that does not yet exist: give it a name, describe what it looks like and how it works, who would use it and how it would change lives, and any dangers. Use the conditional: "My machine **would** turn plastic waste into building bricks."',
  ], 'en3-inventions', 'Invent: make something new. Discover: find something that was already there.',
  ['The first powered aeroplane flight was made in 1903 by:', ['the Wright brothers', 'Thomas Edison', 'Isaac Newton', 'Louis Pasteur'], 'At Kitty Hawk, in the United States.'],
  [['Invention', 'Something created for the first time.'], ['Discovery', 'Finding something that already existed.'], ['Innovation', 'A new idea, method or device.']],
  [
    { q: 'Write the opening of an imaginative piece about a new invention.', steps: ['Name and look: "**My invention, the Solar Satchel, is a school bag with a small solar panel on its flap.**"', 'How it works: "As students walk to school, the panel charges a battery inside."', 'Effect: "In the evening it would light a lamp so that children without electricity could study."'] },
  ]),

  // ---------- 23. ICT ----------
  L('en-reportq-3', 'en-f3-ict', '23.1', 'Reported questions', 12, ['Grammar'], [
    'When we report a **question**, it becomes a statement in word order, with no question mark and no do/does/did:\n- **wh- questions** keep the wh- word: "Where do you study?" he asked. → He asked me **where I studied**.\n- **yes/no questions** use **if** or **whether**: "Do you have internet?" she asked. → She asked **if I had** internet.',
    'The same changes as in reported statements apply: tenses move back (do → did, did → had done, will → would, can → could), pronouns change, and time words change (today → that day, tomorrow → the next day). Reporting verbs: ask, want to know, wonder, enquire.',
  ], 'en3-reported-questions', 'In a reported question, the subject comes before the verb.',
  ['"Can you send me the file?" she asked. Reported:', ['She asked if I could send her the file.', 'She asked could I send her the file?', 'She asked if can I send her the file.', 'She asked me to can send the file.'], '"If" + subject + verb, tense moved back.'],
  [['Reported question', 'A question told in reported speech, in statement word order.']],
  [
    { q: 'Report: "What website did you use yesterday?" the teacher asked.', steps: ['wh- word kept: what website', 'did use → **had used**; you → **I**; yesterday → **the day before**', '**The teacher asked what website I had used the day before.**'] },
  ]),

  L('en-ict-3', 'en-f3-ict', '23.2', 'ICT for study; the parts of a computer; an article or poem on the internet', 14, ['Vocabulary', 'Reading', 'Writing'], [
    '**ICT** (information and communication technology) includes computers, phones, the internet, projectors and printers. Words: access, back up, download, upload, e-mail, e-chat, e-commerce, e-learning, browser, search engine, password, virus, Wi-Fi, social media. The main parts of a desktop computer are the **monitor** (screen), **system unit** (with the processor and memory), **keyboard** and **mouse**; a **printer** and **speakers** are other common devices.',
    'The internet helps students research, take online courses, communicate with teachers and practise. Dangers: fake news, cyberbullying, addiction, online fraud and loss of privacy. Use it wisely: check sources, protect your password and personal data, and balance screen time with other activities.',
    'An **article** for a school magazine on "The influence of the internet on people today" has a **headline**, the writer’s name, an introduction that catches interest, a body with points (advantages and dangers) and a conclusion. A **poem** on the same topic uses images and rhythm: "A web of light across the land, / The world’s library in my hand."',
  ], 'en3-computer', 'Never share your password, even with a friend.',
  ['The part of a computer that shows text and pictures is the:', ['monitor', 'mouse', 'keyboard', 'system unit'], 'The monitor is the screen.'],
  [['ICT', 'Information and communication technology.'], ['Back up', 'To make a copy of data in case it is lost.'], ['Cyberbullying', 'Bullying through phones or the internet.']],
  [
    { q: 'Write a headline and introduction for an article on the internet.', steps: ['Headline: "**The Internet: A Blessing with a Warning**"', 'Introduction: "Twenty years ago few students in our town had seen a computer. Today many carry the internet in their pockets. It has changed how we learn and live, but it also brings dangers we must face."'] },
  ]),

  // ---------- 24. Media ----------
  L('en-wordclass-3', 'en-f3-media', '24.1', 'Nouns, verbs and adjectives; silent h and l', 10, ['Grammar', 'Speech work'], [
    'The same idea can appear in different **word classes**: a **noun** names (information, broadcast, honesty), a **verb** acts (inform, broadcast, report), an **adjective** describes (informative, honest, reliable). Many words change form: inform (v) – information (n) – informative (adj); rely (v) – reliability (n) – reliable (adj); credit (n) – credible (adj) – credibility (n). Some words are both a noun and a verb: "the report" / "to report".',
    'Speech work: silent **h** at the start of some words: hour, honest, honour, heir (so we say "an hour", "an honest reporter"). Silent **l** in talk, walk, chalk, half, calf, could, should, would, calm, palm.',
  ], 'en3-media', 'Check the word’s job in the sentence before choosing its form.',
  ['"The programme was very ___." (gives a lot of information)', ['informative', 'information', 'inform', 'informing'], 'An adjective is needed after "very".'],
  [['Word class', 'The grammatical group a word belongs to: noun, verb, adjective, adverb.'], ['Credible', 'Believable and trustworthy.']],
  [
    { q: 'Complete with the right form of "rely": (a) "A good newspaper is ___." (b) "We ___ on radio news." (c) "Check the ___ of your sources."', steps: ['(a) adjective → **reliable**', '(b) verb → **rely**', '(c) noun → **reliability**'] },
  ]),

  L('en-media-3', 'en-f3-media', '24.2', 'Television and the media; credibility of news; the multimedia centre', 12, ['Vocabulary', 'Listening', 'Reading', 'Writing'], [
    'The **media** are the means of mass communication: newspapers and magazines (print), radio and television (broadcast), and the internet and social media (digital). Words: broadcast, programme, channel, presenter, journalist, editor, headline, advert, viewer, listener, data, surf, hacker, blogger, viral.',
    'Television informs, educates and entertains, but too much TV can make young people **couch potatoes** (inactive), harm their studies and expose them to violence and bad examples. Families should choose programmes together and limit viewing time.',
    'Judging **credibility**: who produced the information? Is it dated and recent? Do other reliable sources report the same? Is there evidence, or only opinions and shocking headlines? Do not share before you check. A **school multimedia centre** has computers, internet access, projectors and printers; describe its equipment, the services it renders (research, typing, printing, e-learning) and its rules.',
  ], 'en3-check-news', 'Before you share news, ask: who says so, and how do they know?',
  ['A news report is more credible when:', ['several reliable sources confirm it with evidence', 'it has a shocking headline only', 'it is shared many times', 'it has no author'], 'Many shares do not make it true.'],
  [['Media', 'Means of mass communication such as radio, TV, newspapers and the internet.'], ['Credibility', 'The quality of being believable.'], ['Broadcast', 'To send out a programme on radio or television.']],
  [
    { q: 'A message on social media says the GCE has been cancelled. How do you check it?', steps: ['1. Look for the **source**: is it from the GCE Board or the Ministry?', '2. Check the **official website** or news on national radio and TV.', '3. Ask a **teacher**.', '4. **Do not share** it until it is confirmed.'] },
  ]),

  // ---------- 25. Science professions ----------
  L('en-quantifiers-3', 'en-f3-professions', '25.1', 'Quantifiers; the sounds /j/ and /dʒ/', 10, ['Grammar', 'Speech work'], [
    '**Quantifiers** tell us how much or how many:\n- with **countable** nouns: many, a few (some, positive), few (not many, negative), several, a number of, each, every\n- with **uncountable** nouns: much, a little (some, positive), little (not much), a great deal of, an amount of\n- with both: some, any, a lot of, lots of, plenty of, all, no, most, enough.',
    'Compare: "**A few** engineers came" (some, good) and "**Few** engineers came" (not many, disappointing). "Much" is used mainly in questions and negatives: "How much data do you have?" "We don’t have much time." In positive statements prefer "a lot of".',
    'Speech work: **/j/** (yes, yet, use, union, computer /kəmˈpjuːtə/) and **/dʒ/** (job, jet, engineer, gym, technology). Compare: yet – jet, yam – jam, year /jɪə/ – jeer /dʒɪə/.',
  ], 'en3-quantifiers', 'Count it? many, few. Measure it? much, little.',
  ['"There are ___ jobs for skilled technicians, so many are hired." (a positive idea)', ['a lot of', 'little', 'much', 'a little'], '"Jobs" is countable; "a lot of" fits a positive statement.'],
  [['Quantifier', 'A word that tells how much or how many.']],
  [
    { q: 'Choose: "(Much/Many) young people want ICT jobs, but there is (little/few) training in our town, so only (a few/a little) succeed."', steps: ['people (countable) → **Many**', 'training (uncountable, not much) → **little**', 'people (countable, some) → **a few**'] },
  ]),

  L('en-professions-3', 'en-f3-professions', '25.2', 'Professions in science and technology; lexical fields; writing about an ICT job', 12, ['Vocabulary', 'Reading', 'Writing'], [
    'Professions related to science and new technology: doctor, nurse, pharmacist, laboratory technician, engineer (civil, electrical, mechanical, software), computer programmer, network technician, web designer, data analyst, electrician, mobile phone repairer, telecommunications technician, meteorologist, geologist, veterinarian. They need training, skill, curiosity, honesty and respect for the dignity of clients.',
    'A **lexical field** is a group of words that belong to the same subject: the field of **health** (doctor, nurse, ward, patient, diagnosis, prescription); of **ICT** (hardware, software, network, data, password, download); of **engineering** (design, construction, bridge, circuit, machine).',
    'Writing about a **popular ICT job**, such as a mobile phone repairer: what the person does (diagnoses faults, replaces screens and batteries, installs software), the tools used, the skills and training needed, why the job is useful in the community, and its challenges.',
  ], 'en3-lexical-field', 'Group new words into lexical fields: they are easier to remember.',
  ['Which word belongs to the lexical field of ICT?', ['software', 'stethoscope', 'hoe', 'chalk'], 'Software runs on computers.'],
  [['Lexical field', 'A group of words that belong to the same subject.'], ['Technician', 'A skilled worker who installs and repairs equipment.']],
  [
    { q: 'Write a short paragraph about a mobile phone repairer.', steps: ['Topic sentence: "**A mobile phone repairer is one of the most useful workers in our community.**"', 'Work and tools: "He or she finds faults, replaces broken screens and batteries and installs software, using small screwdrivers, a soldering iron and a computer."', 'Value: "Thanks to repairers, people can keep their phones longer and save money."'] },
  ]),
];
