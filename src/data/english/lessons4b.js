// English Language lessons for Form 4, terms 2 and 3: environment, well-being
// and health; citizenship and human rights; media and communication; and GCE
// practice. Original text written for this app. **double asterisks** mark key
// terms; `examples` are worked examples.

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

export const LESSONS_4B = [
  // ---------- Environment ----------
  L('en-passive-4', 'en-f4-environment', '8.1', 'The passive voice: present and past simple', 13, ['Grammar'], [
    'In the **active voice** the subject does the action: "Farmers **burn** the bush." In the **passive voice** the subject receives the action: "The bush **is burnt** by farmers."',
    'To form the passive: the object of the active sentence becomes the subject; use the verb **be** in the same tense + the **past participle**; the doer (agent) may follow "by":\n- present simple: am/is/are + past participle ("Waste **is collected** every Monday.")\n- past simple: was/were + past participle ("The trees **were cut down** last year.").',
    'Use the passive when the action is more important than the doer, or when the doer is unknown or obvious: "Plastic **is thrown** into the gutters." It is common in reports, notices and scientific writing. Leave out "by…" when it adds nothing ("by people", "by someone").',
  ], 'passive-voice', 'Keep the tense: "burn" (present) becomes "is burnt"; "burnt" (past) becomes "was burnt".',
  ['The passive of "The council collects the rubbish" is:', ['The rubbish is collected by the council.', 'The rubbish was collected by the council.', 'The council is collected by the rubbish.', 'The rubbish collects the council.'], 'Present simple: is + past participle.'],
  [['Active voice', 'The form in which the subject does the action.'], ['Passive voice', 'The form in which the subject receives the action: be + past participle.'], ['Agent', 'The doer of the action, introduced by "by" in a passive sentence.']],
  [
    { q: 'Change into the passive: (a) "People throw plastic into the river." (b) "The students planted fifty trees."', steps: ['(a) Object "plastic" becomes the subject; present simple passive: **"Plastic is thrown into the river."** ("by people" adds nothing.)', '(b) Past simple passive with a plural subject: **"Fifty trees were planted by the students."**'] },
  ]),

  L('en-ecovocab-4', 'en-f4-environment', '8.2', 'Vocabulary of the environment; reading expository articles', 12, ['Vocabulary', 'Reading'], [
    'Environmental vocabulary: **deforestation** (clearing forests), afforestation and reforestation (planting trees), erosion, desertification, **climate change**, global warming, greenhouse gases, carbon dioxide, emissions, pollution (of air, water, soil), biodegradable (able to rot naturally), non-biodegradable, waste management, landfill, **recycling**, reuse, reduce, sanitation, conservation.',
    'An **expository article** explains a subject: its causes, effects and solutions. It has a clear title, an introduction that states the issue, body paragraphs each with one point (often with facts or figures), and a conclusion.',
    'When reading an expository text, find the **main idea** of each paragraph (often in the first sentence), separate facts from opinions, and note **cause–effect** markers: because, as a result, leads to, therefore, consequently.',
  ], 'passive-voice', 'The three Rs of waste: reduce, reuse, recycle.',
  ['Material that can rot away naturally is:', ['biodegradable', 'non-biodegradable', 'recycled', 'toxic'], 'Banana leaves are biodegradable; plastic bags are not.'],
  [['Deforestation', 'The clearing of forests.'], ['Climate change', 'Long-term change in the Earth’s climate, now caused mainly by greenhouse gases.'], ['Biodegradable', 'Able to be broken down naturally by living things.'], ['Expository text', 'A text that explains or informs.']],
  [
    { q: 'Read: "Plastic bags block gutters. As a result, rainwater floods the streets of Douala." Identify the cause, the effect and the marker.', steps: ['Cause: **plastic bags block gutters**.', 'Effect: **rainwater floods the streets**.', 'Marker: **"As a result"**.'] },
  ]),

  L('en-silent-4', 'en-f4-environment', '8.3', 'Speech work: silent letters', 10, ['Speech work', 'Spelling'], [
    'Many English words contain **silent letters**: letters that are written but not pronounced. Common patterns:\n- silent **k** before n: knife, know, knee, knowledge\n- silent **w** before r: write, wrong, wrap\n- silent **b** after m: climb, bomb, thumb, plumber\n- silent **h**: hour, honest, exhaust, vehicle\n- silent **g** before n: sign, foreign, design\n- silent **t**: listen, castle, often (also said with /t/)\n- silent **p**: psychology, receipt, pneumonia.',
    'Silent letters are a major cause of spelling and pronunciation errors in the GCE. In environmental words: e**x**haust /ɪɡˈzɔːst/ (silent h), drou**gh**t /draʊt/ (gh silent), clim**b**, and ecolo**g**y, where every letter is sounded.',
    'Learn such words in groups, say them aloud correctly, and write them down to fix the spelling.',
  ], 'silent-letters', 'Say "receipt" as /rɪˈsiːt/: the p is silent.',
  ['In which word is the "b" silent?', ['plumber', 'number', 'rubber', 'timber'], 'b is silent after m at the end of a part of a word: plumb-er.'],
  [['Silent letter', 'A letter that is written but not pronounced.']],
  [
    { q: 'Underline the silent letters: knowledge, wrapper, honest, design, receipt.', steps: ['**k**nowledge', '**w**rapper', '**h**onest', 'desi**g**n', 'recei**p**t'] },
  ]),

  // ---------- Endangered species ----------
  L('en-comparison-4', 'en-f4-species', '9.1', 'Comparatives and superlatives', 12, ['Grammar'], [
    'The **comparative** compares two things; the **superlative** compares one with all the others in a group:\n- one syllable: tall → tall**er** → the tall**est**; big → bigger → the biggest\n- two syllables ending in -y: heavy → heav**ier** → the heav**iest**\n- longer adjectives: rare → rarer, but beautiful → **more** beautiful → the **most** beautiful; dangerous → more dangerous → the most dangerous.',
    '**Irregular** forms: good → better → best; bad → worse → worst; far → farther/further → farthest/furthest; little → less → least; much/many → more → most.',
    'Other patterns: "**as** big **as**" (equality), "**not as** fast **as**", "**less** common **than**". Never double the comparison: "more bigger" and "most tallest" are wrong.',
  ], 'comparison-forms', 'Never use "more" and "-er" together.',
  ['"The drill monkey is one of ___ animals in Cameroon."', ['the rarest', 'the most rare', 'rarer', 'the more rare'], 'One-syllable adjective: the -est form.'],
  [['Comparative', 'The form of an adjective that compares two things: taller, more beautiful.'], ['Superlative', 'The form that compares one with all others: tallest, most beautiful.']],
  [
    { q: 'Correct the errors: (a) "Mount Cameroon is more higher than Mount Oku." (b) "The gorilla is the most strongest ape."', steps: ['(a) **"Mount Cameroon is higher than Mount Oku."**', '(b) **"The gorilla is the strongest ape."**'] },
  ]),

  L('en-descriptive-4', 'en-f4-species', '9.2', 'Flora and fauna; writing a descriptive essay', 14, ['Vocabulary', 'Writing'], [
    'Vocabulary: **flora** (plants), **fauna** (animals), habitat, ecosystem, biodiversity, species, **endangered**, threatened, **extinct**, poaching, bushmeat, conservation, game reserve, sanctuary, ranger. Cameroon’s protected areas include Korup, Waza, Lobéké, Campo-Ma’an and Mbam and Djerem National Parks and the Dja Faunal Reserve; endangered animals include the Cross River gorilla, the drill, the forest elephant and the chimpanzee.',
    'A **descriptive essay** creates a clear picture. Plan it:\n- introduction: name the subject and give a general impression\n- body: appearance (size, colour, shape), habitat, food and behaviour, and the threats it faces, one aspect per paragraph\n- conclusion: why it matters and what should be done.',
    'Use precise adjectives and comparisons, sensory details and a variety of sentence beginnings. Keep to one tense (usually the present for an animal species).',
  ], 'comparison-forms', 'Describe in an order the reader can follow: from general to particular.',
  ['A species that no longer exists anywhere is:', ['extinct', 'endangered', 'endemic', 'protected'], 'Endangered species could still be saved.'],
  [['Biodiversity', 'The variety of living things in an area.'], ['Poaching', 'Illegal hunting of protected animals.'], ['Habitat', 'The natural home of a plant or animal.']],
  [
    { q: 'Write a strong opening sentence for an essay on the drill monkey.', steps: ['Name the subject, give an impression and a fact.', '**"With its jet-black face and bright red lower lip, the drill is one of the most striking and most endangered monkeys of Cameroon’s forests."**'] },
  ]),

  // ---------- Health ----------
  L('en-imperatives-4', 'en-f4-health', '10.1', 'Imperatives and modals of probability', 12, ['Grammar'], [
    'An **imperative** gives an order, instruction or advice. It uses the base form of the verb, usually without a subject: "**Wash** your hands with soap." "**Do not drink** untreated water." "**Always sleep** under a treated net." Add "please" for politeness; use "Let’s…" for suggestions ("Let’s clean the compound.").',
    '**Modals of probability** show how sure we are:\n- **must** (almost certain): "He has a high fever and shivers. It **must** be malaria."\n- **may / might / could** (possible): "It **might** be typhoid; do a test."\n- **can’t** (almost impossible): "It **can’t** be cholera; there is no diarrhoea."',
    'Health instructions should be short, clear and in a logical order, often numbered.',
  ], 'health-language', 'An imperative starts with the verb: "Boil", "Cover", "Wash".',
  ['"She has been vaccinated, so it ___ be measles."', ['can’t', 'must', 'might', 'should'], 'Being vaccinated makes it almost impossible.'],
  [['Imperative', 'The form of a verb used to give orders, instructions or advice.'], ['Modal of probability', 'A modal that shows how likely something is: must, may, might, could, can’t.']],
  [
    { q: 'Write three instructions to prevent cholera.', steps: ['**"Drink only boiled or treated water."**', '**"Wash your hands with soap after using the toilet and before eating."**', '**"Cover food and wash fruit and vegetables before eating them."**'] },
  ]),

  L('en-healthvocab-4', 'en-f4-health', '10.2', 'Diseases and prevention; listening to a health broadcast', 12, ['Vocabulary', 'Listening'], [
    'Vocabulary: **endemic** (always present in an area, like malaria in Cameroon), **epidemic** (a sudden outbreak affecting many people in an area), **pandemic** (spreading across countries and continents), infection, symptom, diagnosis, treatment, prevention, vaccine, immunity, contagious, transmission, carrier, outbreak, quarantine, hygiene, sanitation.',
    'Key facts:\n- **malaria** is spread by the bite of infected female Anopheles mosquitoes; prevent it with treated nets, clearing stagnant water and early treatment\n- **cholera** spreads through water and food contaminated by faeces; prevent it with clean water, toilets and hand-washing\n- **HIV** spreads through unprotected sex, infected blood and from mother to child; prevent it through abstinence or faithfulness, condoms, screening of blood and treatment of mothers. It is not spread by touching, sharing a classroom or mosquito bites.',
    'When **listening to a broadcast**, note the topic, the main warnings and advice, and any numbers or places. Write key words, not full sentences, then check your notes against the questions.',
  ], 'health-language', 'Note-taking while listening: key words, numbers and names only.',
  ['A sudden outbreak of a disease affecting many people in one area is:', ['an epidemic', 'a pandemic', 'endemic', 'a vaccine'], 'A pandemic spreads across countries.'],
  [['Endemic', 'Always present in a particular area.'], ['Epidemic', 'A sudden outbreak affecting many people in an area.'], ['Transmission', 'The passing of a disease from one person to another.'], ['Immunity', 'The body’s protection against a disease.']],
  [
    { q: 'Take notes from this broadcast: "Health officials in the Far North report 120 cases of cholera in Maroua this week. Residents are asked to boil drinking water and report any case of severe diarrhoea to the nearest health centre."', steps: ['Topic: **cholera outbreak, Maroua, Far North**.', 'Numbers: **120 cases this week**.', 'Advice: **boil drinking water; report severe diarrhoea to a health centre**.'] },
  ]),

  L('en-fallingintonation-4', 'en-f4-health', '10.3', 'Speech work: falling intonation in instructions and statements', 10, ['Speech work'], [
    'A **falling tone** (↘) on the main stressed word shows that a statement or instruction is complete, firm and certain. It is used for:\n- instructions and commands: "Wash your **hands**. ↘"\n- statements of fact: "Malaria is spread by **mosquitoes**. ↘"\n- wh-questions: "When did the fever **start**? ↘"',
    'The fall comes on the **last important word** of the group (the nucleus), not necessarily on the last word: "Take the **tablets** after meals ↘" stresses "tablets" if that is the new information.',
    'A rising tone on an instruction can make it sound unsure or like a question; a sharp fall can sound angry, so keep the voice calm and clear.',
  ], 'intonation', 'Fall on the key word to sound clear and confident.',
  ['Which is normally said with a falling tone?', ['"Boil the water before drinking it."', '"Is the water boiled?"', '"Boiled?"', '"You boiled it, didn’t you?" (asking)'], 'Instructions fall; yes/no questions and asking tags rise.'],
  [['Falling tone', 'A drop in the voice that shows completeness or certainty.'], ['Nucleus', 'The syllable in a tone group where the main change of pitch happens.']],
  [
    { q: 'Mark the main fall in: "Keep the medicine away from children."', steps: ['The key new information is "children".', '"Keep the medicine away from **children** ↘."'] },
  ]),

  // ---------- Rights and duties ----------
  L('en-articles-4', 'en-f4-rights', '11.1', 'Articles: a, an, the and the zero article', 12, ['Grammar'], [
    'The **indefinite articles a and an** go before singular countable nouns that are mentioned for the first time or are not specific. Choose by the **sound**, not the letter:\n- **a** before a consonant sound: a vote, a university (/j/), a one-party state (/w/)\n- **an** before a vowel sound: an election, an hour (silent h), an MP (/em/).',
    'The **definite article the** is used for something specific or already known, for unique things, and with some names:\n- "I read **a** report. **The** report was long."\n- the sun, the Constitution, the President, the government\n- the Wouri, the Atlantic Ocean, the Republic of Cameroon, the National Assembly.',
    'The **zero article** (no article) is used with plural and uncountable nouns used in general, and with most names of people, towns and countries: "**Women** have the right to vote." "**Education** is a right." "She lives in **Buea**."',
  ], 'articles-use', 'a or an depends on the first sound: "an honest man", "a useful law".',
  ['"She hopes to become ___ MP."', ['an', 'a', 'the', 'no article'], '"MP" begins with the vowel sound /e/.'],
  [['Indefinite article', 'a or an, used with a singular countable noun that is not specific.'], ['Definite article', 'the, used with something specific or known.'], ['Zero article', 'The use of no article, as with general plural or uncountable nouns.']],
  [
    { q: 'Fill in a, an, the or nothing: "___ honesty is ___ important value. ___ President of ___ Republic gave ___ speech on ___ radio."', steps: ['**(no article)** Honesty is **an** important value.', '**The** President of **the** Republic gave **a** speech on **the** radio.'] },
  ]),

  L('en-debate-4', 'en-f4-rights', '11.2', 'Rights, duties and equality; taking part in a debate', 12, ['Vocabulary', 'Speaking'], [
    'Vocabulary: constitution, citizen, **rights** (things every person is entitled to, such as life, education, health, freedom of expression and the right to vote at 20 in Cameroon), **duties** (obligations, such as obeying the law, paying taxes, respecting others and defending the nation), election, ballot, polling station, candidate, electorate, **gender equality**, discrimination, empowerment.',
    'A **debate** is a formal discussion of a motion, such as "Girls make better class prefects than boys." The **proposition** speaks for the motion and the **opposition** against it; a chairperson controls the time; the audience votes.',
    'Debating language:\n- opening: "Madam Chair, honourable judges, fellow students, I stand to support the motion that…"\n- points: "My first point is… Secondly… Finally…"\n- rebuttal: "My opponent claimed that…, but the facts show…"\n- closing: "For these reasons, I urge you to vote for the motion."\nSpeak clearly, give evidence and examples, and attack ideas, not people.',
  ], 'articles-use', 'Every right goes with a duty.',
  ['In a debate, the side that speaks against the motion is the:', ['opposition', 'proposition', 'chairperson', 'timekeeper'], 'The proposition supports the motion.'],
  [['Right', 'Something every person is entitled to.'], ['Duty', 'Something a citizen is expected or obliged to do.'], ['Motion', 'The statement that is debated.'], ['Rebuttal', 'An answer that shows the other side’s argument is wrong.']],
  [
    { q: 'Write a short rebuttal to: "Girls are too weak to be school prefects."', steps: ['Restate the claim fairly.', 'Answer it with reasons and an example.', '**"My opponent says that girls are too weak to lead. But leadership is about honesty, organisation and courage, not physical strength. Last year our head girl ran the cleaning campaign better than anyone before her."**'] },
  ]),

  L('en-thsounds-4', 'en-f4-rights', '11.3', 'Speech work: the "th" sounds /θ/ and /ð/', 10, ['Speech work'], [
    'The letters "th" spell two sounds, both made with the tip of the tongue lightly between the teeth:\n- **/θ/** is voiceless: think, three, thank, thin, birth, truth, health, method\n- **/ð/** is voiced: this, that, the, these, those, brother, father, together, breathe.',
    'Many speakers replace them with /t/, /d/, /f/ or /s/: "tink" for think, "dis" for this, "tree" for three. This can change the meaning: thin–tin, three–tree, though–dough, breathe–breed.',
    'Practise: put the tongue between the teeth and blow gently for /θ/; add the voice (a buzz) for /ð/. Note the pairs breath /θ/ (noun) and breathe /ð/ (verb), teeth /θ/ and teethe /ð/.',
  ], 'th-sounds', 'Feel your throat: /ð/ buzzes, /θ/ does not.',
  ['Which word begins with the voiceless /θ/?', ['thumb', 'they', 'then', 'though'], 'The others begin with voiced /ð/.'],
  [['Dental fricative', 'A sound made by forcing air between the tongue and the upper teeth, such as /θ/ and /ð/.']],
  [
    { q: 'Sort into /θ/ and /ð/: author, mother, path, clothing, theme, rhythm.', steps: ['/θ/: **author, path, theme**.', '/ð/: **mother, clothing, rhythm**.'] },
  ]),

  // ---------- Peace and tolerance ----------
  L('en-degree-4', 'en-f4-peace', '12.1', 'Adverbs of degree; conjunctions of concession and contrast', 12, ['Grammar'], [
    '**Adverbs of degree** say how much or to what extent: very, extremely, completely, highly, quite, rather, fairly, too, enough, almost, hardly. They usually go before the adjective or adverb they modify: "**extremely** important", "**highly** respected". "Enough" goes after: "old **enough**". "Hardly" is negative: "We could **hardly** hear him."',
    '**Concession** means admitting one fact while stating another that is surprising: **although**, **even though** (stronger), though, **despite / in spite of** (+ noun or -ing): "**Although** the two villages had fought, they made peace." "**Despite** their quarrel, they made peace."',
    '**Contrast** between two facts: **whereas**, while: "The elders wanted a ceremony, **whereas** the youths wanted a football match." Do not use "but" together with "although" in the same sentence.',
  ], 'concession', 'Never write "Although… but…".',
  ['"___ his injury, he finished the race."', ['Despite', 'Although', 'Whereas', 'Even though'], '"Despite" is followed by a noun.'],
  [['Adverb of degree', 'An adverb that says how much: very, extremely, hardly.'], ['Concession', 'Admitting a fact that contrasts with the main statement.'], ['Contrast', 'Showing how two things differ.']],
  [
    { q: 'Join with the word given: (a) "The rain was heavy. The peace march continued." (although) (b) "Bamenda is cool. Garoua is hot." (whereas)', steps: ['(a) **"Although the rain was heavy, the peace march continued."**', '(b) **"Bamenda is cool, whereas Garoua is hot."**'] },
  ]),

  L('en-narrative-4', 'en-f4-peace', '12.2', 'Reading a narrative; word stress in abstract nouns', 13, ['Reading', 'Speech work'], [
    'A **narrative** tells a story. Its parts: the **setting** (time and place), the **characters**, the **conflict** (problem), the **rising action**, the **climax** (turning point), and the **resolution** (how it ends). Stories of **reconciliation** show how people overcome a conflict through dialogue, forgiveness and compromise.',
    'Comprehension questions test: facts stated in the text, meanings of words in context, inferences (what the writer suggests), the writer’s purpose and the lesson (moral) of the story. Answer in full sentences and in your own words, quoting only when asked.',
    '**Abstract nouns** name ideas and feelings: peace, tolerance, forgiveness, unity, harmony, reconciliation, understanding. Stress patterns: TOL-er-ance, for-GIVE-ness, U-ni-ty, HAR-mo-ny, un-der-STAND-ing, re-con-ci-li-A-tion, co-ex-IST-ence.',
  ], 'concession', 'For "why" questions, look for the reason in the text, then explain it in your own words.',
  ['The part of a story where the problem is finally settled is the:', ['resolution', 'setting', 'climax', 'conflict'], 'The climax is the turning point before it.'],
  [['Narrative', 'A text that tells a story.'], ['Climax', 'The turning point of greatest tension in a story.'], ['Resolution', 'The part of a story in which the conflict is settled.'], ['Abstract noun', 'A noun that names an idea, quality or feeling.']],
  [
    { q: 'Read: "For years the two quarters would not share the spring. Then, during the dry season, Chief Nfor called both sides to his palace. After a long night of talk, they agreed to fetch water on alternate days." Identify the conflict, the climax and the resolution.', steps: ['Conflict: **the two quarters would not share the spring**.', 'Climax: **the meeting at the chief’s palace during the dry season**.', 'Resolution: **they agreed to fetch water on alternate days**.'] },
  ]),

  // ---------- Crime and reported speech ----------
  L('en-pastcont-4', 'en-f4-crime', '13.1', 'The past continuous and the past simple', 12, ['Grammar'], [
    'The **past continuous** (was/were + -ing) describes an action in progress at a time in the past: "At nine o’clock the boys **were playing** cards."',
    'With the **simple past**, it shows a longer action interrupted by a shorter one: "The thief **was climbing** the fence when the guard **saw** him." Use "while" or "as" with the longer action and "when" with the shorter one.',
    'Two actions in progress at the same time both take the past continuous: "While the police **were questioning** the suspect, his friends **were waiting** outside." A sequence of completed actions takes the simple past: "He **broke** the window, **took** the phone and **ran** away."',
  ], 'reported-speech', 'The interrupted (background) action: past continuous; the interruption: simple past.',
  ['"The lights went off while we ___ the news."', ['were watching', 'watched', 'are watching', 'have watched'], 'A longer action in progress, interrupted.'],
  [['Past continuous', 'was/were + -ing, for an action in progress in the past.']],
  [
    { q: 'Complete: "I (walk) home when a man (snatch) my bag."', steps: ['The longer action: **was walking**.', 'The short interruption: **snatched**.', '**"I was walking home when a man snatched my bag."**'] },
  ]),

  L('en-reported-4', 'en-f4-crime', '13.2', 'Reported speech and reporting verbs', 14, ['Grammar', 'Vocabulary'], [
    '**Direct speech** gives the speaker’s exact words in inverted commas: The suspect said, "I was at home." **Reported (indirect) speech** reports them without inverted commas: The suspect said **that he had been** at home.',
    'When the reporting verb is in the past, the tenses move back:\n- present simple → past simple; present continuous → past continuous\n- past simple and present perfect → past perfect\n- will → would; can → could; may → might; must → had to.\nPronouns and time and place words change too: I → he/she; now → then; today → that day; yesterday → the day before; tomorrow → the next day; here → there; this → that.',
    '**Reporting verbs** tell how something was said: said, told (someone), asked, explained, admitted, denied, claimed, warned, promised, ordered. Questions become statements: "Where were you?" → The judge **asked where he had been**. Yes/no questions take "if" or "whether". Commands use told/ordered + to: "Sit down!" → He **told him to sit down**.',
    'Vocabulary of crime and the law: suspect, accused, witness, evidence, alibi, magistrate, judge, lawyer, verdict, sentence, acquit, **juvenile delinquency** (crime by young people), **cybercrime** (crime using computers and the internet, such as scams and identity theft).',
  ], 'reported-speech', 'Move the tense one step back, then change the pronouns and the time words.',
  ['"Did you see the thief?" the police officer asked me. In reported speech:', ['The police officer asked me if I had seen the thief.', 'The police officer asked me did I see the thief.', 'The police officer asked me if I see the thief.', 'The police officer said me that I had seen the thief.'], 'A yes/no question takes "if"; the past simple becomes the past perfect.'],
  [['Direct speech', 'The exact words of a speaker, inside inverted commas.'], ['Reported speech', 'An account of what someone said, without their exact words.'], ['Reporting verb', 'A verb that introduces reported speech: said, told, asked, denied.'], ['Alibi', 'Evidence that an accused person was elsewhere when a crime happened.']],
  [
    { q: 'Report these words from a court case: (a) The witness said, "I saw the accused here yesterday." (b) The judge said to the boy, "Do not lie."', steps: ['(a) Tense back, pronoun, place and time: **"The witness said that she had seen the accused there the day before."**', '(b) A command: **"The judge told the boy not to lie."**'] },
  ]),

  // ---------- The argumentative essay ----------
  L('en-transitions-4', 'en-f4-essay', '14.1', 'Transitional markers for cohesion', 11, ['Writing', 'Grammar'], [
    '**Transitional markers** (linking words) join ideas and paragraphs so that writing flows (**cohesion**):\n- adding: furthermore, moreover, in addition, also, besides\n- contrast: however, on the other hand, nevertheless, in contrast\n- cause and result: therefore, consequently, as a result, thus\n- example: for example, for instance, such as\n- sequence: firstly, secondly, then, finally\n- conclusion: in conclusion, to sum up, all in all.',
    'Most sentence markers come at the start of a sentence followed by a comma: "**However**, the youths can help." "However" cannot join two sentences without a full stop or semicolon before it: "Corruption is common; **however**, it can be fought."',
    'Do not overuse them: one marker per sentence at most, and not at the start of every sentence.',
  ], 'essay-structure', 'Put a full stop or a semicolon before "however" when it links two clauses.',
  ['"Bribery is illegal. ___, it is still common in some offices."', ['However', 'Furthermore', 'Consequently', 'For example'], 'The second sentence contrasts with the first.'],
  [['Cohesion', 'The way the parts of a text are linked together.'], ['Transitional marker', 'A word or phrase that links ideas: however, therefore, moreover.']],
  [
    { q: 'Link with suitable markers: "Young people use social media. They can expose corruption online. They must check their facts first."', steps: ['Add a result and a contrast.', '**"Young people use social media; consequently, they can expose corruption online. However, they must check their facts first."**'] },
  ]),

  L('en-argument-4', 'en-f4-essay', '14.2', 'Planning and writing an argumentative essay', 15, ['Writing'], [
    'An **argumentative essay** tries to persuade the reader to accept a point of view on a debatable topic, such as "The role of youth in fighting corruption".',
    'Structure:\n- **introduction**: introduce the topic, define key words if needed, and state your position (thesis)\n- **body**: three or four paragraphs, each with a **topic sentence**, explanation, and evidence or an example from real life\n- one paragraph that states the **opposing view** and answers it (counter-argument)\n- **conclusion**: sum up the arguments and restate your position, perhaps with a recommendation.',
    'Persuasive techniques: facts and examples, logical reasons, rhetorical questions ("Who will build the nation if not the youth?"), and a confident but respectful tone. Avoid insults, exaggeration and personal stories without a point.',
    'Plan for five minutes before writing: list your points, choose the strongest three, and decide on the order. In the examination, keep to the length asked and leave time to check grammar and spelling.',
  ], 'essay-structure', 'One paragraph, one argument, one example.',
  ['The sentence in the introduction that states the writer’s position is the:', ['thesis statement', 'topic sentence of the conclusion', 'title', 'counter-argument'], 'The whole essay supports it.'],
  [['Argumentative essay', 'An essay that tries to persuade the reader of a point of view.'], ['Thesis statement', 'The sentence that states the writer’s position.'], ['Counter-argument', 'An opposing view that the writer answers.']],
  [
    { q: 'Plan an essay on "The youth can stop corruption in Cameroon".', steps: ['Thesis: young people can play a key part in fighting corruption.', 'Point 1: by refusing to give or take bribes in school and in daily life.', 'Point 2: by reporting corruption to CONAC and using social media responsibly.', 'Point 3: by becoming honest leaders in clubs, councils and later in government.', 'Counter-argument: "The youth have no power" is answered with examples of youth campaigns.', 'Conclusion: restate the thesis and call for action.'] },
  ]),

  // ---------- ICT ----------
  L('en-conditionals-4', 'en-f4-ict', '15.1', 'Conditional sentences: Types I and II', 12, ['Grammar'], [
    'A **conditional sentence** has an if-clause (the condition) and a main clause (the result).',
    '**Type I** (real or likely condition about the present or future): if + present simple, will + base form: "**If** you **click** this button, the file **will open**." "**If** it **rains**, the network **will be** weak."',
    '**Type II** (unreal or unlikely condition about the present or future): if + past simple, would + base form: "**If** I **had** a laptop, I **would learn** to code." With "be", use "were" for all persons in formal English: "**If I were** you, I **would change** my password."',
    'The if-clause can come first (with a comma) or second (no comma): "I would buy it if I had the money." "Unless" means "if not": "**Unless** you save your work, you **will lose** it."',
  ], 'conditionals', 'Never put "will" or "would" in the if-clause.',
  ['"If she ___ the password, she could open the file."', ['knew', 'knows', 'would know', 'will know'], 'Type II: if + past simple.'],
  [['Conditional sentence', 'A sentence with a condition (if-clause) and its result.'], ['Type I conditional', 'if + present, will + base form: a real possibility.'], ['Type II conditional', 'if + past, would + base form: an imagined situation.']],
  [
    { q: 'Complete: (a) "If you (download) unknown apps, your phone (get) a virus." (b) "If I (be) the minister, I (give) every school internet."', steps: ['(a) A real possibility, Type I: **download … will get**.', '(b) An imagined situation, Type II: **were … would give**.'] },
  ]),

  L('en-ictvocab-4', 'en-f4-ict', '15.2', 'ICT vocabulary; reading instructions; pronouncing technical terms', 12, ['Vocabulary', 'Reading', 'Speech work'], [
    'ICT vocabulary: **hardware** (the physical parts: processor, monitor, keyboard, mouse, printer), **software** (programs: operating system, word processor, browser, app), storage, file, folder, network, internet, Wi-Fi, download, upload, browser, search engine, email, attachment, password, **digital footprint** (the trail of data a person leaves online), backup, update, virus.',
    'An **instruction manual** gives steps in order, often numbered, using imperatives and sequence words: "First, switch on the computer. Next, double-click the icon. Then, type your name. Finally, click Save." Read all the steps before starting, follow them in order, and look at the diagrams.',
    'Stress in technical words: com-PU-ter, PRO-ces-sor, SOFT-ware, HARD-ware, KEY-board, IN-ter-net, DOWN-load (noun), down-LOAD (verb, also DOWN-load), tech-NO-lo-gy, di-GI-tal. In compound nouns the first part is usually stressed: KEY-board, PASS-word, LAP-top.',
  ], 'conditionals', 'In compound nouns, stress the first part: LAPtop, PASSword.',
  ['The program that lets you visit websites is a:', ['browser', 'printer', 'processor', 'monitor'], 'Examples: Chrome, Firefox.'],
  [['Hardware', 'The physical parts of a computer.'], ['Software', 'The programs that run on a computer.'], ['Digital footprint', 'The trail of data a person leaves online.'], ['Backup', 'A copy of files kept in case the originals are lost.']],
  [
    { q: 'Put these instructions for saving a document in order: "Click Save." "Type a file name." "Click File." "Choose a folder."', steps: ['1. **Click File.**', '2. **Choose a folder.**', '3. **Type a file name.**', '4. **Click Save.**'] },
  ]),

  // ---------- Social media ----------
  L('en-gerunds-4', 'en-f4-socialmedia', '16.1', 'Gerunds and infinitives', 12, ['Grammar'], [
    'A **gerund** is the -ing form used as a noun: "**Chatting** online is fun." An **infinitive** is to + base form: "I want **to learn** coding."',
    'Some verbs are followed by a gerund: enjoy, avoid, finish, mind, keep, suggest, admit, deny, practise, consider ("Avoid **sharing** your password."). Some are followed by an infinitive: want, decide, hope, plan, promise, agree, refuse, learn, need, afford ("She refused **to share** her password.").',
    'After prepositions use the gerund: "interested **in learning**", "good **at typing**", "before **posting**". Some verbs change meaning: "I stopped **posting** photos" (I no longer post them) vs "I stopped **to post** a photo" (I stopped in order to post one); "remember **to log out**" (do not forget) vs "I remember **logging out**" (I recall doing it).',
  ], 'gerund-infinitive', 'After a preposition, always use the -ing form.',
  ['"Think before ___ anything online."', ['posting', 'to post', 'post', 'posted'], 'After a preposition, use the gerund.'],
  [['Gerund', 'The -ing form of a verb used as a noun.'], ['Infinitive', 'The base form of a verb, often with "to".']],
  [
    { q: 'Choose the correct form: (a) "He admitted (to send / sending) the message." (b) "We agreed (to report / reporting) the bully."', steps: ['(a) "Admit" takes a gerund: **sending**.', '(b) "Agree" takes an infinitive: **to report**.'] },
  ]),

  L('en-article-4', 'en-f4-socialmedia', '16.2', 'Writing an article for a school magazine', 14, ['Writing', 'Vocabulary'], [
    'Vocabulary of safe ICT use: privacy settings, profile, followers, post, share, tag, comment, **cyberbullying** (repeated hurtful behaviour online), **phishing** (fake messages that try to steal passwords or money), scam, fake news, hacker, strong password, two-step verification, block, report.',
    'A **magazine article** informs and advises readers in a lively way. Its features:\n- a **headline** that catches attention ("Think Before You Click!")\n- the writer’s name (by-line)\n- an introduction that hooks the reader\n- body paragraphs with clear advice, examples and perhaps subheadings\n- a conclusion with a final message.',
    'Use a style that suits your readers (your fellow students): direct address ("you"), questions, short paragraphs, and a friendly but serious tone. Unlike a letter, an article has no address, greeting or closing.',
  ], 'gerund-infinitive', 'An article needs a headline and a by-line, not an address.',
  ['Which is the best headline for an article on cyberbullying?', ['Stop the Bully in Your Phone', 'Dear Students,', 'Yours faithfully', 'Composition'], 'A headline is short and catches attention.'],
  [['Headline', 'The title of a newspaper or magazine article.'], ['By-line', 'The line that gives the writer’s name.'], ['Phishing', 'Fake messages that try to steal passwords or money.']],
  [
    { q: 'Write an opening paragraph for an article titled "Your Password Is Your Key".', steps: ['Hook the reader with a question or a striking fact.', 'State what the article will do.', '**"Would you leave the key to your house on the school gate? Sharing your password is just as dangerous. In this article I will show you five simple ways to keep your accounts safe."**'] },
  ]),

  L('en-tagquestions-4', 'en-f4-socialmedia', '16.3', 'Question tags and their intonation', 11, ['Grammar', 'Speech work'], [
    'A **question tag** is a short question added to a statement: "You use WhatsApp, **don’t you**?" The rules:\n- a positive statement takes a negative tag; a negative statement takes a positive tag\n- the tag repeats the auxiliary or modal (is, are, can, will, have, did…), or uses do/does/did if there is none\n- the pronoun in the tag matches the subject.',
    'Examples: "She **can** code, **can’t she**?" "They **didn’t** reply, **did they**?" "He **posted** it, **didn’t he**?" Special cases: "I am late, **aren’t I**?" "Let’s go, **shall we**?" "Open the file, **will you**?" "Nobody called, **did they**?"',
    'Intonation: a **falling** tag (↘) means the speaker is fairly sure and expects agreement; a **rising** tag (↗) asks a real question. "You’ve changed your password, haven’t you ↘?" (I think so.) "You’ve changed your password, haven’t you ↗?" (I am not sure.)',
  ], 'intonation', 'Positive statement, negative tag; negative statement, positive tag.',
  ['"They have finished, ___?"', ['haven’t they', 'didn’t they', 'have they', 'don’t they'], 'The tag repeats "have" and is negative.'],
  [['Question tag', 'A short question added to the end of a statement.']],
  [
    { q: 'Add tags: (a) "Your brother blocked the scammer, ___?" (b) "You won’t share your code, ___?"', steps: ['(a) Positive past simple with no auxiliary: **"didn’t he?"**', '(b) Negative with "won’t": **"will you?"**'] },
  ]),

  // ---------- GCE ----------
  L('en-paper1-4', 'en-f4-gce', '17.1', 'Paper 1: multiple-choice skills', 11, ['Exam skills', 'Revision'], [
    'GCE Ordinary Level English Language (0530) Paper 1 lasts **1½ hours** and is made of multiple-choice questions. The scheme’s drills cover contextual **spelling**, **grammar** (tenses, agreement, pronouns, prepositions, question tags, conditionals), **vocabulary** (meanings in context, synonyms and antonyms, idioms), **sound patterns** (vowels, consonants, stress, rhyme, silent letters) and **reading comprehension**.',
    'Strategies:\n- read the whole sentence before choosing\n- for grammar, find the subject and the time of the action\n- for vocabulary, try each option in the sentence\n- for sounds, say the words quietly in your head\n- for reading, read the questions first, then the passage, then check each answer against the text.',
    'Never leave a blank: eliminate wrong options and choose the best one left.',
  ], 'gce-english-papers', 'For sound questions, say each word silently and listen to it.',
  ['"Neither the teacher nor the students ___ ready." Choose the correct verb.', ['were', 'was', 'is', 'be'], 'With neither … nor, the verb agrees with the nearer subject ("students").'],
  [['Synonym', 'A word with the same or nearly the same meaning.'], ['Antonym', 'A word with the opposite meaning.']],
  [
    { q: 'Choose the word that rhymes with "bread": (a) bead (b) said (c) bride (d) braid.', steps: ['bread /bred/; said /sed/ has the same vowel and ending.', 'Answer: **(b) said**.'] },
  ]),

  L('en-paper2-4', 'en-f4-gce', '17.2', 'Paper 2: composition and text-directed tasks', 12, ['Exam skills', 'Revision'], [
    'Paper 2 (**2 hours** on the 2026 timetable) has two sections in the scheme: **Section A**, a composition (narrative, argumentative or descriptive essay, formal or informal letter, speech, article), and **Section B**, text-directed tasks on a passage (summary and language work).',
    'Section A: read all the choices, pick the one you can develop best, plan for five minutes, use the correct format, and keep to the length. Marks go to content, organisation, expression (vocabulary and sentences) and accuracy (grammar, spelling, punctuation).',
    'Section B: read the passage twice; underline the points the question asks for; write them in your own words, in full sentences, without examples or repetition; keep to the word limit and say how many words you used if asked.',
  ], 'gce-english-papers', 'Keep ten minutes at the end to proofread.',
  ['In a summary, which of these should be left out?', ['Examples and repeated ideas', 'The main points', 'Your own words', 'Linking words'], 'A summary keeps only the essential points.'],
  [['Composition', 'An extended piece of writing such as an essay or a letter.'], ['Summary', 'A shortened version of a text giving only its main points.']],
  [
    { q: 'Summarise in one sentence: "Plastic bags are cheap and light, so traders give them out freely. But they block gutters, kill animals that swallow them and take hundreds of years to break down."', steps: ['Main points: plastic bags are given out freely; they block gutters, kill animals and last for centuries.', '**"Although plastic bags are cheap and freely given out, they block drains, kill animals and take centuries to break down."**'] },
  ]),
];
