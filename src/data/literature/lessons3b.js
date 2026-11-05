// Literature in English lessons for Form 3 (second part): the elements of
// prose, the novel "The Well at Ndoko", the language and structure of drama,
// the play "The Boundary Stone" and the revision of the year. The novel, the
// play and every extract were written for this app. **double asterisks** mark
// key terms; `examples` are worked examples.

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
  // ---------- 14. Plot ----------
  L('li-plot-3', 'li-f3-plot', '14.1', 'Plot structure and conflict', 12, ['Prose'], [
    'The **plot** is the sequence of events in a story and the way they are linked by cause and effect. A traditional plot has five stages:\n1. **exposition**: introduces the characters, the setting and the situation\n2. **rising action**: complications and conflicts build up tension\n3. **climax**: the turning point, the moment of greatest tension\n4. **falling action**: the results of the climax unfold\n5. **resolution** (**denouement**): the conflict is settled and the story ends.',
    'Plot grows from **conflict**, a struggle between opposing forces: **character against character** (two rivals), **character against society** (a citizen against corruption), **character against nature** (a village against drought) and **internal conflict** (a character torn between two choices).',
  ], 'lit-plot-pyramid', 'Find the climax first: everything before it rises, everything after it falls.',
  ['The moment in a story when the hero finally faces the villain is usually the:', ['climax', 'exposition', 'resolution', 'title'], 'The point of greatest tension.'],
  [['Plot', 'The sequence of events in a story, linked by cause and effect.'], ['Climax', 'The turning point of greatest tension.'], ['Denouement', 'The final settling of the conflict.']],
  [
    { q: 'Put these events of a tale in plot order and name each stage: (a) Tortoise falls and cracks his shell. (b) Tortoise borrows feathers and flies to the feast. (c) Tortoise lives in the forest with the birds. (d) Tortoise eats all the food.', steps: ['**(c)** exposition: the characters and setting', '**(b)** rising action: the trick begins', '**(d)** climax: the greedy trick succeeds and angers the birds', '**(a)** falling action and resolution: the punishment and the "why" ending'] },
  ]),

  L('li-suspense-3', 'li-f3-plot', '14.2', 'Suspense, foreshadowing and flashback', 12, ['Prose', 'Literary devices'], [
    '**Suspense** is the excitement and anxiety a reader feels while waiting to know what will happen. Writers create it with danger, mysteries, short tense sentences, delays and chapter endings at a moment of tension (a **cliffhanger**).',
    '**Foreshadowing** is a hint of what will happen later: dark clouds before a disaster, a warning that is ignored, an object mentioned early that becomes important. **Flashback** interrupts the present story to show an earlier event: a character remembers the day the well was dug.',
    'A **chronological** plot tells events in the order they happened; a **non-linear** plot moves backwards and forwards in time using flashbacks.',
  ], 'li3-plot-devices', 'A detail that seems small early in a story may be foreshadowing.',
  ['"Akwen remembered the day her grandfather had first lowered a bucket into the new well" is a:', ['flashback', 'foreshadowing', 'climax', 'resolution'], 'It goes back to an earlier time.'],
  [['Suspense', 'Anxious excitement about what will happen next.'], ['Foreshadowing', 'A hint of later events.'], ['Flashback', 'A scene from an earlier time inserted into the present story.']],
  [
    { q: 'Explain the foreshadowing: in chapter 1 of "The Well at Ndoko", Akwen notices fresh tyre marks of a heavy truck near the dry stream.', steps: ['The tyre marks seem like a small detail.', 'Later, Mr Ekwe’s **water tanker** arrives to sell water.', 'The detail **foreshadows** his arrival and hints that someone is preparing to profit from the drought.'] },
  ]),

  // ---------- 15. Setting ----------
  L('li-setting-3', 'li-f3-setting', '15.1', 'Temporal, spatial and social setting', 12, ['Prose'], [
    'The **setting** is the time and place of a story, and the society around the characters.\n- **Temporal setting** (time): the period or era (colonial times, the present day), the season (the dry season), the time of day (dawn, midnight), and how long the story lasts.\n- **Spatial setting** (place): the country, town or village, and particular places (a classroom, a market, a well, a council office).\n- **Social setting**: the customs, beliefs, social classes and problems of the community (a farming village, a strict boarding school).',
    'Setting is revealed through **description**, **dialogue** (characters mention places and times) and details of daily life. In a good novel, setting is not decoration: it shapes the **characters** and causes the **conflict**. In "The Well at Ndoko", the long dry season and a single village well create the water crisis on which the whole plot depends.',
  ], 'li3-setting', 'Ask when, where and among whom the story happens.',
  ['"The council office in town, with its long queue and broken fan" is part of the:', ['spatial setting', 'temporal setting', 'climax', 'narrator'], 'It describes a place.'],
  [['Temporal setting', 'The time in which a story takes place.'], ['Spatial setting', 'The place in which a story takes place.'], ['Social setting', 'The customs and society surrounding the characters.']],
  [
    { q: 'Identify the temporal and spatial setting: "Before dawn, in the cold of January, Akwen and Tita joined the line of girls and boys at the old well of Ndoko."', steps: ['Temporal: **before dawn, in January** (the dry season).', 'Spatial: **the old well of Ndoko**, a village.', 'Social: children fetching water before school, a **shared village resource**.'] },
  ]),

  L('li-atmosphere-3', 'li-f3-setting', '15.2', 'Setting, atmosphere and local colour', 12, ['Prose'], [
    '**Atmosphere** (or **mood**) is the feeling a setting creates: peaceful, joyful, gloomy, tense, frightening. Writers create it through descriptive details of light, sound, weather and colour. "The sun hung like a hot coin over the cracked fields; no bird sang" creates a **heavy, hopeless** atmosphere.',
    '**Local colour** is the detail that makes a setting belong to a real culture: food (fufu and eru, roasted plantains), dress (a kaba, a toghu), sounds (a town crier’s gong, the market noise), customs and the way people speak (proverbs, greetings). Local colour makes the story believable and helps the reader see a particular community.',
    'When you analyse setting in a passage: (1) name the time and place; (2) quote two or three details; (3) say what atmosphere they create; (4) say how the setting affects the characters or the plot.',
  ], 'li1-atmosphere', 'Describe the atmosphere with one adjective, then prove it with a detail.',
  ['"Laughter, the smell of roasting corn and the beat of drums filled the square" creates an atmosphere of:', ['joy and celebration', 'fear', 'sadness', 'boredom'], 'Happy sounds and smells.'],
  [['Atmosphere', 'The mood or feeling created by a setting.'], ['Local colour', 'Details of a particular place and culture that make a setting real.']],
  [
    { q: 'Analyse the atmosphere: "The tanker’s engine roared into the silent village. Dust rose. Mothers counted their coins in their palms."', steps: ['Details: the **roaring engine** breaks the silence; dust; mothers **counting coins**.', 'Atmosphere: **tense and anxious**; the people fear the price of water.', 'Effect: the setting prepares the reader for the conflict with Mr Ekwe.'] },
  ]),

  // ---------- 16. Characters ----------
  L('li-protagonist-3', 'li-f3-character', '16.1', 'Protagonist, antagonist and kinds of character', 12, ['Prose'], [
    'The **protagonist** is the main character whose struggle we follow (in "The Well at Ndoko", **Akwen**). The **antagonist** opposes the protagonist (**Mr Ekwe**). The antagonist may also be a force, such as drought or a harmful custom.',
    'Kinds of character:\n- **main (major)** characters are central to the plot; **minor** characters support it\n- **round** characters are complex, with several traits, like real people; **flat** characters have one simple trait\n- **dynamic** characters change and grow during the story (Tita, who moves from temptation to honesty); **static** characters stay the same\n- a **foil** is a character whose contrast with another highlights that character’s qualities (Tita’s weakness at first makes Akwen’s firmness clearer).',
  ], 'li3-protagonist', 'The protagonist wants something; the antagonist stands in the way.',
  ['A character who learns from mistakes and changes by the end is:', ['dynamic', 'static', 'flat', 'minor'], 'Dynamic characters develop.'],
  [['Protagonist', 'The main character of a story.'], ['Antagonist', 'The character or force that opposes the protagonist.'], ['Foil', 'A character who contrasts with another to highlight their qualities.']],
  [
    { q: 'Classify Akwen and Mr Ekwe in "The Well at Ndoko".', steps: ['Akwen: **protagonist**, **main**, **round** (brave but sometimes afraid and tired).', 'Mr Ekwe: **antagonist**, **main**; mostly greedy, but he changes a little at the end (he apologises), so he is not completely flat.', 'Their **conflict** (person against person) drives the plot.'] },
  ]),

  L('li-characterise-3', 'li-f3-character', '16.2', 'How writers reveal character; the character sketch', 14, ['Prose', 'Writing'], [
    '**Characterisation** is the way a writer creates and reveals characters. **Direct** characterisation: the narrator tells us ("Mr Ekwe was a greedy man"). **Indirect** characterisation: we work it out from the character’s **speech**, **actions**, **thoughts**, **appearance**, **what others say** about them and how others **react** to them. Even **names** can suggest character.',
    'A **character sketch** describes a character’s role and traits with evidence. Structure: (1) who the character is and their role; (2) two or three traits, each in its own paragraph, with **point, evidence, explanation**; (3) how the character changes (if at all) and what they represent.',
    'Example points for Akwen: she is **courageous** (she confronts Mr Ekwe in his store); **caring** (she nurses her sick father); a **leader** (she proposes the petition and is chosen as youth representative).',
  ], 'lit-characterization', 'Every trait needs proof from the text.',
  ['"Tita looked at the notes in his hand, then at the petition, and could not sleep" reveals his character through:', ['his actions and inner conflict', 'direct description', 'his name only', 'the setting'], 'Indirect characterisation.'],
  [['Characterisation', 'The way a writer creates and reveals characters.'], ['Character sketch', 'A description of a character’s role and traits with evidence.']],
  [
    { q: 'Write one paragraph of a character sketch showing that Akwen is courageous.', steps: ['Point: **Akwen is courageous**.', 'Evidence: in chapter 8 she enters Mr Ekwe’s store at night and, when caught, says, "The water belongs to Ndoko, not to your tanker."', 'Explanation: although she is young and afraid, she stands up to a rich and powerful man for the good of the village.'] },
  ]),

  // ---------- 17. Themes ----------
  L('li-theme-3', 'li-f3-theme', '17.1', 'Theme, subject and moral; finding themes', 12, ['Prose'], [
    'The **subject** is what a text is about (water, a quarrel, a school). A **theme** is a central idea about life that the text explores through that subject ("Greed destroys community", "Young people can change their society"). A **moral** is a direct lesson about right and wrong, common in fables ("Do not be greedy").',
    'Ways to find themes:\n- the **title** (what does "The Well at Ndoko" point to?)\n- the main **conflict** and how it is resolved\n- what **changes** in the characters\n- **repeated** words, images and ideas\n- what characters **say** about life, especially in proverbs\n- the **ending**: what is rewarded and what is punished.',
    'State a theme as a full idea, not one word: not just "corruption", but "corruption harms the poor most".',
  ], 'li3-theme-find', 'A theme is a sentence about life, not a single word.',
  ['Which is a theme rather than a subject?', ['Courage can defeat injustice.', 'a village well', 'a water tanker', 'the dry season'], 'A theme is an idea about life.'],
  [['Theme', 'A central idea about life explored in a text.'], ['Subject', 'What a text is about.'], ['Moral', 'A direct lesson about right and wrong.']],
  [
    { q: 'Turn these subjects into themes: (a) bribery (b) family (c) the environment.', steps: ['(a) "**Bribery blinds people to what is right.**"', '(b) "**A united family can survive any crisis.**"', '(c) "**When we destroy nature, we destroy ourselves.**"'] },
  ]),

  L('li-themeessay-3', 'li-f3-theme', '17.2', 'Writing a paragraph on a theme', 12, ['Prose', 'Writing'], [
    'A paragraph on a theme follows **point, evidence, explanation** (PEE):\n- **Point**: state the theme and how the text presents it.\n- **Evidence**: refer to an event or give a short quotation.\n- **Explanation**: show how the evidence develops the theme and what the writer wants us to think.\nFinish with a link to the wider message or to another part of the text.',
    'Useful phrases: "The writer explores the theme of…", "This is shown when…", "This suggests that…", "Through this character, the writer criticises…", "The message is that…". Write in the **present tense** about the events of a text ("Akwen proposes a petition").',
  ], 'li1-theme-moral', 'Write about events in a book in the present tense.',
  ['In a literature paragraph, events of the novel are usually described in the:', ['present tense', 'future tense', 'past perfect only', 'imperative'], '"Akwen confronts Mr Ekwe."'],
  [['PEE', 'Point, evidence, explanation: a structure for literature answers.']],
  [
    { q: 'Write a PEE paragraph on the theme of greed in "The Well at Ndoko".', steps: ['Point: "**The writer shows that greed harms the whole community.**"', 'Evidence: "**Mr Ekwe raises the price of water while children fall sick from drinking from the stream.**"', 'Explanation: "**His profit is built on the suffering of the poor, which makes the reader condemn greed and value sharing.**"'] },
  ]),

  // ---------- 18. The novel: opening ----------
  L('li-novelbg-3', 'li-f3-novel-opening', '18.1', '"The Well at Ndoko": setting, narration and characters', 14, ['Prose', 'Novel'], [
    '"**The Well at Ndoko**" is a short novel written for this app, in twelve chapters. It is set in the present day in **Ndoko**, a farming village, during the **long dry season**, with scenes in the council office in town. It is told in the **third person**, following the protagonist closely.',
    '**Characters**:\n- **Akwen**, 15, a Form 3 student: brave, caring, a natural leader (protagonist)\n- **Tita**, 13, her brother: lively, easily tempted, later honest (dynamic)\n- **Pa Fonkem**, their father, a farmer and carpenter who speaks in proverbs\n- **Ma Sirri**, their mother, a vegetable seller: hard-working and practical\n- **Mr Ekwe**, a rich trader who sells water from a tanker (antagonist)\n- **Chief Mbaku**, the village head, at first weak, later just\n- **Mr Tanyi**, a teacher and patron of the school Youth Club\n- **Madam Ayamba**, an honest council officer.',
    'The **title** names the centre of the story: the village well, which stands for the shared life of the community.',
  ], 'li3-ndoko-characters', 'Before reading the chapters, learn who is who.',
  ['The patron of the school Youth Club in the novel is:', ['Mr Tanyi', 'Mr Ekwe', 'Pa Fonkem', 'Chief Mbaku'], 'He teaches civic action.'],
  [['Novel', 'A long work of prose fiction divided into chapters.'], ['Patron', 'A teacher who supervises and supports a club.']],
  [
    { q: 'Explain why the title "The Well at Ndoko" is suitable.', steps: ['The **well** is where the conflict begins (it dries up).', 'It is the **shared resource** that Mr Ekwe exploits and the villagers fight to restore.', 'It **symbolises** the life and unity of the community, so the title points to the main theme.'] },
  ]),

  L('li-novelch1-3', 'li-f3-novel-opening', '18.2', 'Chapters 1 to 4: the exposition', 14, ['Prose', 'Novel'], [
    '**Chapter 1**: before dawn, Akwen and Tita walk two kilometres to the village well. The water is low and muddy. Akwen notices fresh tyre marks of a heavy truck near the dry stream (**foreshadowing**). **Chapter 2**: the well dries up completely. Mr Ekwe arrives with a water tanker and sells water at 500 francs a bucket. Families who cannot pay drink from the dirty stream.',
    '**Chapter 3**: at school, Mr Tanyi teaches the Youth Club about the right to clean water and how citizens can ask public authorities for help. Akwen proposes that the club ask the council for a **borehole**. **Chapter 4**: Chief Mbaku calls a village meeting. Mr Ekwe offers to sell water more cheaply if the village "forgets this borehole talk", and gives gifts to some elders, who accept. Pa Fonkem warns: "A gift that closes the mouth also closes the eyes."',
    'These chapters form the **exposition** and the beginning of the **rising action**: they introduce the setting, the characters and the central conflict (the community against drought and greed).',
  ], 'li3-ndoko-plot1', 'In the opening chapters, note who wants what: that is the conflict.',
  ['Mr Ekwe’s gifts to the elders are meant to:', ['stop them from supporting the borehole', 'thank them for water', 'celebrate the harvest', 'pay school fees'], 'A bribe to protect his business.'],
  [['Exposition', 'The opening part of a plot that introduces characters, setting and situation.'], ['Borehole', 'A deep, narrow well drilled to reach underground water.']],
  [
    { q: 'Explain Pa Fonkem’s proverb "A gift that closes the mouth also closes the eyes" in its context.', steps: ['Context: the elders have just accepted Mr Ekwe’s gifts at the meeting.', 'Meaning: **a bribe silences people (closes the mouth) and makes them blind to wrongdoing (closes the eyes)**.', 'It shows Pa Fonkem’s **wisdom** and introduces the theme of **corruption**.'] },
  ]),

  // ---------- 19. The novel: crisis ----------
  L('li-novelch5-3', 'li-f3-novel-crisis', '19.1', 'Chapters 5 to 8: the rising action and the climax', 14, ['Prose', 'Novel'], [
    '**Chapter 5**: the Youth Club writes a **petition** and collects signatures from house to house. Mr Ekwe offers Tita money to steal the petition. Tita takes the money and hides it, but cannot bring himself to steal the petition, and lies awake at night (**internal conflict**). **Chapter 6**: children fall ill with diarrhoea from the stream water, and Pa Fonkem is struck down by **typhoid**. Akwen nurses him; the family’s savings go to medicine, while Mr Ekwe raises his price (**pathos**).',
    '**Chapter 7**: Madam Ayamba, a council officer, visits Ndoko after receiving the petition. She reveals that money for a Ndoko borehole was approved two years ago and paid to a contractor, but no work was ever done. **Chapter 8** (**climax**): Akwen and Tita find the contractor’s signboard hidden in Mr Ekwe’s store: **he was the contractor**. Mr Ekwe catches them, but Tita stands up to him; Akwen says, "The water belongs to Ndoko, not to your tanker." The Youth Club brings the chief and the villagers, and the truth comes out at a public meeting in the market square.',
  ], 'li3-ndoko-plot2', 'Mark the turning point: after the signboard is found, nothing can stay the same.',
  ['The discovery in chapter 8 reveals that Mr Ekwe:', ['took the borehole money without doing the work', 'is Akwen’s uncle', 'owns the school', 'is a council officer'], 'He profited twice: from the contract and from selling water.'],
  [['Petition', 'A formal written request signed by many people.'], ['Rising action', 'The events that build tension towards the climax.']],
  [
    { q: 'Why is chapter 8 the climax of the novel?', steps: ['It is the moment of **greatest tension**: the children are caught in Mr Ekwe’s store.', 'It is the **turning point**: the hidden truth about the borehole money is revealed.', 'After it, the conflict moves towards **resolution** (falling action).'] },
  ]),

  L('li-novelconflict-3', 'li-f3-novel-crisis', '19.2', 'Kinds of conflict in "The Well at Ndoko"', 12, ['Prose', 'Novel'], [
    'The novel contains every main kind of **conflict**:\n- **character against nature**: the village against the **drought** that dries the well\n- **character against character**: **Akwen** against **Mr Ekwe**\n- **character against society**: the Youth Club against **corruption** and the silence of some elders\n- **internal conflict**: **Tita** torn between the money and his loyalty to his sister and village.',
    'The conflicts are linked: the drought (nature) gives Mr Ekwe his chance to profit (character), his bribes spread corruption (society), and his money tempts Tita (internal). Resolving the human conflicts allows the village to solve the natural one: the borehole defeats the drought.',
  ], 'li1-conflict-types', 'List every conflict, then show how one causes the next.',
  ['Tita’s struggle over the money is an example of:', ['internal conflict', 'conflict with nature', 'comedy', 'flashback'], 'A struggle inside his mind.'],
  [['Internal conflict', 'A struggle within a character’s own mind.'], ['External conflict', 'A struggle between a character and an outside force.']],
  [
    { q: 'Show how the conflict with nature leads to the conflict between characters.', steps: ['Nature: the **drought dries the well**.', 'This creates a **need for water** that Mr Ekwe exploits with his tanker.', 'Akwen opposes his greed, so the natural crisis becomes a **conflict between characters**.'] },
  ]),

  // ---------- 20. The novel: resolution ----------
  L('li-novelend-3', 'li-f3-novel-resolution', '20.1', 'Chapters 9 to 12: the falling action and the resolution', 14, ['Prose', 'Novel'], [
    '**Chapter 9**: Madam Ayamba reports the case to the mayor. Mr Ekwe is ordered to refund the borehole money and complete the work, and the matter is sent to court. **Chapter 10**: while the drilling goes on, the village does community work with the Youth Club, digging trenches and carrying pipes. Ashamed, Mr Ekwe lends his tanker free of charge to carry water to the sick.',
    '**Chapter 11**: Pa Fonkem recovers. Tita confesses that he once kept Mr Ekwe’s money and gives it to the water fund; the family forgives him. **Chapter 12** (**resolution**): the borehole opens as the first rains fall. Chief Mbaku sets up a water committee with Akwen as youth representative, and Mr Ekwe apologises publicly. The novel ends with Akwen writing in her diary: "Water belongs to everyone; so does the duty to protect it."',
    'The ending **rewards** honesty, courage and cooperation and **punishes** greed, but it also leaves room for **forgiveness** and change.',
  ], 'li3-ndoko-plot3', 'At the end, ask what is rewarded and what is punished: that shows the message.',
  ['The borehole opening "as the first rains fall" suggests:', ['a new beginning and hope for the village', 'another disaster', 'that the borehole is useless', 'that the drought will last forever'], 'Rain and water mean renewal.'],
  [['Falling action', 'The events after the climax that lead to the resolution.'], ['Resolution', 'The ending, where the conflict is settled.']],
  [
    { q: 'How does the resolution show justice and forgiveness?', steps: ['Justice: Mr Ekwe must **refund the money**, finish the work and face the court.', 'Forgiveness: the village accepts his **public apology**, and the family forgives Tita.', 'Message: wrongdoing must be corrected, but people can **change and be forgiven**.'] },
  ]),

  L('li-novelthemes-3', 'li-f3-novel-resolution', '20.2', 'Themes, characters and devices of the novel', 14, ['Prose', 'Novel', 'Writing'], [
    '**Themes**: **civic responsibility** (citizens, even young ones, can demand their rights through petitions and public meetings); **corruption and greed** (the misuse of public money and bribes harm the poor); **the power of community** (the borehole is built by everyone together); **family solidarity** (the family supports Pa Fonkem and forgives Tita); **justice and forgiveness**; **water and health** (dirty water causes disease).',
    '**Characters** to know: Akwen (courageous, caring, a leader); Tita (tempted, then honest: dynamic); Mr Ekwe (greedy, cunning, finally ashamed); Pa Fonkem (wise, uses proverbs); Chief Mbaku (weak at first, then just); Madam Ayamba (honest public servant).',
    '**Devices**: **symbolism** (the well = community life; the tanker = greed; the diary = Akwen’s voice and growth); **foreshadowing** (the tyre marks); **proverbs** (Pa Fonkem); **pathos** (the sick children); **irony** (the man paid to bring water to Ndoko is the one selling it at a high price); **contrast** (Akwen’s honesty and Mr Ekwe’s greed).',
  ], 'li3-ndoko-themes', 'Link each theme to a character and an event.',
  ['The man paid to build the borehole is the man selling water. This is:', ['irony', 'alliteration', 'a simile', 'a riddle'], 'The opposite of what we expect.'],
  [['Symbolism', 'The use of objects, people or events to stand for ideas.'], ['Civic responsibility', 'The duties of a citizen towards the community.']],
  [
    { q: 'Explain the symbolism of the water tanker.', steps: ['The tanker brings water, but only to those who can pay.', 'It **symbolises greed**: a shared need turned into private profit.', 'When Mr Ekwe lends it free in chapter 10, it becomes a sign of his **shame and change**.'] },
  ]),

  // ---------- 21. Drama terms ----------
  L('li-dramaterms-3', 'li-f3-drama-terms', '21.1', 'The core terms of drama', 12, ['Drama'], [
    'Drama is literature written to be **performed**. Key terms:\n- **playwright** (or dramatist): the writer of the play\n- **cast**: the actors who play the characters; the **cast list** (dramatis personae) names the characters at the start\n- **actor**: a person who plays a role; **director**: the person who guides the actors in a production\n- **audience**: the people who watch\n- **stage**: where the play is performed; **props** (objects) and **costumes** help to create the world of the play.',
    'Kinds of speech:\n- **dialogue**: conversation between characters, the main way a play tells its story\n- **monologue**: a long speech by one character to others on stage\n- **soliloquy**: a speech by a character alone on stage, speaking their thoughts aloud\n- **aside**: a short remark to the audience that the other characters on stage do not hear.',
  ], 'li3-speech-types', 'Who hears the speech? That decides whether it is a dialogue, monologue, soliloquy or aside.',
  ['A character turns to the audience and says, "If only they knew the truth!" while the others do not hear. This is:', ['an aside', 'a dialogue', 'a monologue', 'a stage direction'], 'Only the audience hears it.'],
  [['Playwright', 'The writer of a play.'], ['Soliloquy', 'A speech by a character alone on stage, revealing their thoughts.'], ['Aside', 'A remark to the audience unheard by other characters.']],
  [
    { q: 'Say what each is: (a) Pa Ndoh and Pa Ebot argue across the farm. (b) Elder Mafor speaks for a long time to the villagers about peace. (c) Tanjong, alone at night, asks himself what to do.', steps: ['(a) **dialogue**: conversation between characters', '(b) **monologue**: one character speaks at length to others', '(c) **soliloquy**: a character alone speaks their thoughts'] },
  ]),

  L('li-soliloquy-3', 'li-f3-drama-terms', '21.2', 'Dialogue, monologue and soliloquy in use', 12, ['Drama'], [
    '**Dialogue** moves the plot forward, reveals character through how people speak, and shows conflict. A short exchange written for this lesson: "PA NDOH: You moved my stone in the night! PA EBOT: Your stone? That stone has stood there since my grandfather’s time." In two lines we see the conflict and the pride of both men.',
    'A **soliloquy** reveals a character’s **true thoughts and feelings**, which they may hide from others. From "The Boundary Stone": "TANJONG (alone, under the moon): Father says Ewube is now my enemy. But who helped me with Mathematics when I was sick? Must I lose a friend because two old men cannot share a hill?" The audience understands his **inner conflict** and sympathises with him.',
    'A **monologue** is often used for persuasion, judgement or storytelling, as when Elder Mafor speaks to the whole village.',
  ], 'li2-monologue', 'A soliloquy is honest: a character alone has no one to deceive.',
  ['Tanjong’s soliloquy mainly shows:', ['his inner conflict between his father and his friend', 'the price of land', 'his anger at school', 'the weather'], 'His private thoughts.'],
  [['Dialogue', 'Conversation between characters.'], ['Monologue', 'A long speech by one character to others.']],
  [
    { q: 'What does the dialogue "You moved my stone in the night!" / "Your stone? That stone has stood there since my grandfather’s time." reveal?', steps: ['The **conflict**: each man claims the land.', 'Their **characters**: both are proud and quick to accuse.', 'The **theme**: inheritance and pride lead to quarrels.'] },
  ]),

  // ---------- 22. Acts, scenes and stage directions ----------
  L('li-acts-3', 'li-f3-drama-structure', '22.1', 'Acts and scenes: the layout of a dramatic text', 12, ['Drama'], [
    'A play is divided into **acts**, the main parts, and each act into **scenes**. A new scene usually begins when the **place** or **time** changes. Short plays may have only one act; "The Boundary Stone" has **three acts**: Act One (exposition), Act Two (rising action) and Act Three (climax and resolution).',
    'The layout of a dramatic text:\n- the **title** and the **cast list** (characters, often with a short description)\n- the act and scene headings ("ACT ONE, Scene 1")\n- a **stage direction** describing the setting at the start of each scene\n- each **speech** preceded by the speaker’s **name** (often in capitals) and a colon\n- **stage directions** inside speeches, in brackets or italics.',
    'When you quote a play, give the act and scene: "(Act Two, Scene 3)".',
  ], 'lit-play-parts', 'Act for the big movement of the story; scene for each change of place or time.',
  ['In a play script, what comes before each speech?', ['the name of the character who speaks', 'the page number', 'the chapter title', 'a question mark'], 'So actors and readers know who speaks.'],
  [['Act', 'A main division of a play.'], ['Scene', 'A smaller division of an act, usually in one place and time.'], ['Cast list', 'The list of characters at the start of a play.']],
  [
    { q: 'Lay out this moment as a play script: Ewube meets Tanjong at school and asks if he is still her friend; he says yes.', steps: ['Heading: **ACT ONE, Scene 2. (The school yard at break time.)**', '**EWUBE**: (softly) Are you still my friend, Tanjong?', '**TANJONG**: (looking around) Yes. Whatever our fathers say.'] },
  ]),

  L('li-stagedir-3', 'li-f3-drama-structure', '22.2', 'Stage directions and what they tell us', 12, ['Drama'], [
    '**Stage directions** are the playwright’s instructions, not spoken aloud. They tell readers and actors:\n- the **setting**: "(A hillside farm at dawn. A grey stone stands at the edge of a maize field.)"\n- **entrances and exits**: "(Enter PA NDOH with a hoe.)" "(Exit TANJONG.)"\n- **actions** and **movements**: "(He kicks the stone.)"\n- **tone** and **feeling**: "(angrily)", "(whispering)", "(laughing)"\n- **sound and light**: "(Drums in the distance. The lights fade.)"',
    'When you analyse a scene, stage directions are **evidence**: they show character, mood and conflict even when no one speaks. "(PA EBOT turns his back without answering.)" shows pride and refusal to talk.',
  ], 'li3-stage-directions', 'Read the stage directions as carefully as the speeches.',
  ['"(The lights fade. Drums in the distance.)" is a stage direction about:', ['sound and lighting', 'a character’s speech', 'the cast list', 'the title'], 'Effects that create atmosphere.'],
  [['Stage direction', 'An instruction in a play about setting, action, tone or effects.'], ['Exit', 'A direction that a character leaves the stage.']],
  [
    { q: 'What do these stage directions reveal? "(PA NDOH bends, touches the stone, then straightens slowly, his face hard.)"', steps: ['**Action**: he examines the stone closely.', '**Feeling**: "his face hard" shows growing **anger and suspicion**.', '**Plot**: the moment prepares the accusation that starts the conflict.'] },
  ]),

  // ---------- 23. The play: title and Act One ----------
  L('li-playtitle-3', 'li-f3-play-act1', '23.1', '"The Boundary Stone": title, cast and background', 12, ['Drama', 'Play'], [
    '"**The Boundary Stone**" is a play in three acts written for this app. It is set in a present-day farming village on a hillside. Its theme is **conflict resolution and social harmony**.',
    '**Cast**:\n- **Pa Ndoh**, a farmer: proud and quick-tempered\n- **Ma Ndoh**, his wife: loyal but quick to repeat rumours\n- **Ewube**, their daughter, 14: calm, intelligent, a peacemaker\n- **Pa Ebot**, the neighbouring farmer: stubborn and proud of his ancestors\n- **Tanjong**, his son, 14: loyal friend of Ewube, torn between duty and friendship\n- **Elder Mafor**, head of the elders’ council: wise and patient\n- **Foreman Baiye**, leader of the road workers: talkative and comic\n- **Constable Atem**, a police officer; villagers and market women.',
    '**Title**: the boundary stone marks where one family’s farm ends and the other’s begins. It is the **literal** cause of the quarrel and a **symbol** of the division between the families and of the "walls" people build in their hearts.',
  ], 'li3-boundary-cast', 'A title can work twice: as a real object and as a symbol.',
  ['The character described as "talkative and comic" is:', ['Foreman Baiye', 'Elder Mafor', 'Pa Ebot', 'Ewube'], 'He brings humour and, later, the truth.'],
  [['Symbol', 'An object, person or event that stands for an idea.'], ['Boundary', 'A line that marks the edge of a piece of land.']],
  [
    { q: 'Explain the significance of the title "The Boundary Stone".', steps: ['Literally, the **stone** marks the border between two farms, and its movement starts the conflict.', 'Symbolically, it stands for **division**: pride and suspicion separate the families.', 'At the end, the peace plant beside the stone turns a sign of division into a sign of **reconciliation**.'] },
  ]),

  L('li-playact1-3', 'li-f3-play-act1', '23.2', 'Act One: the exposition', 14, ['Drama', 'Play'], [
    '**Act One, Scene 1** (a hillside farm at dawn): Pa Ndoh finds that the boundary stone has moved two metres into his maize field. He accuses Pa Ebot, who arrives and denies it angrily. Each man swears by his ancestors. **Scene 2** (the school yard): Ewube and Tanjong, classmates and friends, have heard their fathers shouting. They agree that the quarrel is foolish. **Scene 3** (the two homes, side by side on the stage): each father forbids his child to speak to the other family.',
    'An extract: "PA NDOH: (pointing at the stone) Two metres, Ebot! Two metres of my father’s land, swallowed in one night! PA EBOT: (folding his arms) A man who cannot count his own steps should not count his neighbour’s."',
    'Act One is the **exposition**: it presents the setting, the characters, their pride, and the **conflict** that will grow. The split stage in Scene 3 (two homes at once) shows **parallel** scenes and the **contrast** between the stubborn fathers and their unhappy children.',
  ], 'li3-boundary-plot', 'In Act One, list the characters, the setting and the problem.',
  ['"Swallowed in one night" is an example of:', ['metaphor (and hyperbole)', 'alliteration', 'an aside', 'a soliloquy'], 'Land cannot really be swallowed.'],
  [['Exposition', 'The opening part of a play that introduces characters, setting and conflict.'], ['Parallel scenes', 'Two scenes shown side by side to compare them.']],
  [
    { q: 'What does Pa Ebot’s reply "A man who cannot count his own steps should not count his neighbour’s" show about him?', steps: ['He answers with a **proverb-like insult**, not an explanation.', 'He is **proud** and refuses to examine the stone.', 'His reply **worsens the conflict** instead of solving it.'] },
  ]),

  // ---------- 24. The play: Act Two ----------
  L('li-playact2-3', 'li-f3-play-act2', '24.1', 'Act Two: rumours, dramatic irony and the soliloquy', 14, ['Drama', 'Play'], [
    '**Act Two, Scene 1** (the market): Ma Ndoh and Pa Ebot’s sister exchange insults; market women spread rumours that "Ebot uses medicine to move stones". **Scene 2** (the farm road): Foreman Baiye and his road workers, widening the road, joke: "We shifted that grey stone to make room for the culvert. We will put it back when the cement is dry." They forget. The audience now knows the truth, but the families do not: **dramatic irony**.',
    '**Scene 3** (night): **Tanjong’s soliloquy** reveals his inner conflict between obeying his father and keeping his friendship with Ewube. **Scene 4** (the farms): Pa Ebot’s goats break into Pa Ndoh’s maize. Pa Ndoh calls **Constable Atem** and threatens to take the matter "to the end". The conflict nears violence.',
    'Act Two is the **rising action**. The dramatic irony creates tension and sadness: the audience watches the families fight over something neither of them did.',
  ], 'li3-irony-stone', 'Dramatic irony: the audience knows, the characters do not.',
  ['Why is Act Two, Scene 2 an example of dramatic irony?', ['the audience learns who moved the stone, but the families do not', 'the workers sing a song', 'it takes place at night', 'it is very short'], 'The audience knows more than the characters.'],
  [['Dramatic irony', 'When the audience knows something the characters do not.'], ['Rumour', 'Unchecked information that spreads from person to person.']],
  [
    { q: 'How does dramatic irony in Act Two affect the audience?', steps: ['The audience knows the **road workers** moved the stone.', 'Watching the families quarrel and insult each other, the audience feels **tension** and wants to tell them the truth.', 'The irony shows that the quarrel comes from **pride and suspicion**, not from a real wrong.'] },
  ]),

  L('li-playconflict-3', 'li-f3-play-act2', '24.2', 'Conflict and language style in the play', 12, ['Drama', 'Play', 'Literary devices'], [
    '**Conflict** in the play: **family against family** (Ndoh against Ebot); **child against parent** (Ewube and Tanjong against their fathers’ orders); **internal** (Tanjong’s soliloquy); and **pride against truth**.',
    '**Language style**:\n- **proverbs**, which show the elders’ wisdom or are turned into weapons: "When two elephants fight, it is the grass that suffers" (said by Ewube about herself and Tanjong)\n- **insults** and **hyperbole** in the quarrel ("swallowed in one night")\n- **humour** from Foreman Baiye, which relieves tension\n- **dramatic irony** in the road workers’ scene\n- **contrast** between the shouting fathers and the calm, reasonable children\n- **soliloquy** for inner thoughts.',
    'When you discuss language style, give the device, quote it, and say what it shows about character or theme.',
  ], 'li3-language-style', 'Language shows character: who shouts, who jokes, who speaks in proverbs?',
  ['Foreman Baiye’s jokes mainly serve to:', ['relieve tension and later reveal the truth', 'start the quarrel', 'insult the elders', 'end the play'], 'Comic relief with a purpose.'],
  [['Comic relief', 'A humorous moment that relieves tension in a serious work.'], ['Language style', 'The way a writer uses words: devices, tone and kinds of speech.']],
  [
    { q: 'Explain Ewube’s use of the proverb "When two elephants fight, it is the grass that suffers".', steps: ['The **elephants** are the two proud fathers; the **grass** is the children.', 'Meaning: **the children suffer from a quarrel they did not cause**.', 'Effect: it shows Ewube’s **wisdom** and states a theme of the play: quarrels harm the innocent.'] },
  ]),

  // ---------- 25. The play: Act Three ----------
  L('li-playact3-3', 'li-f3-play-act3', '25.1', 'Act Three: climax and resolution', 14, ['Drama', 'Play'], [
    '**Act Three, Scene 1** (the elders’ meeting under the meeting tree): Elder Mafor hears the case. Both fathers shout and refuse to listen; Pa Ndoh raises his walking stick (**climax**). At that moment Ewube and Tanjong arrive with **Foreman Baiye**, who confesses, embarrassed, that his workers moved the stone for the road culvert and forgot to put it back.',
    '**Scene 2** (the farm, evening): Elder Mafor leads everyone to the stone. The workers return it to its place. The two fathers, ashamed, apologise to each other and to their children. Together they plant a **peace plant** beside the stone; in many Grassfields cultures this plant is a traditional sign of peace. Elder Mafor ends the play: "A boundary stone divides farms; let it never divide hearts."',
    'The **resolution** comes through **truth, dialogue and mediation**, not force, and the children, not the adults, bring the truth.',
  ], 'li3-mediation', 'The resolution answers the conflict raised in Act One.',
  ['The truth reaches the elders’ meeting through:', ['Ewube and Tanjong bringing Foreman Baiye', 'Constable Atem’s investigation', 'Pa Ebot’s confession', 'a letter from the council'], 'The children act as peacemakers.'],
  [['Mediation', 'Helping two sides in a dispute to reach agreement.'], ['Reconciliation', 'Restoring friendly relations after a quarrel.']],
  [
    { q: 'Explain Elder Mafor’s final line: "A boundary stone divides farms; let it never divide hearts."', steps: ['A boundary is **necessary** to separate farms.', 'But it must not become a reason for **hatred** between neighbours.', 'The line sums up the **theme**: settle disputes peacefully and keep human relationships above property.'] },
  ]),

  L('li-playanalysis-3', 'li-f3-play-act3', '25.2', 'Analysing the play: plot, characters, themes and style', 14, ['Drama', 'Play', 'Writing'], [
    '**Plot development**: exposition (Act One: the moved stone and the quarrel) → rising action (Act Two: rumours, dramatic irony, the goats, the constable) → climax (Act Three, Scene 1: the raised stick and the confession) → resolution (Scene 2: the stone returned and the peace plant).',
    '**Themes**: peaceful **conflict resolution** through dialogue and mediation; **pride** and **suspicion** as causes of conflict; the danger of **rumours**; **friendship** that crosses family quarrels; the **wisdom of the young**; respect for **traditional institutions** (the elders’ council).',
    '**Characters**: Ewube (calm, wise, a peacemaker); Tanjong (loyal, torn, courageous in the end); Pa Ndoh and Pa Ebot (proud, stubborn, finally humble: dynamic); Elder Mafor (wise mediator); Foreman Baiye (comic, careless, honest when it counts). **Style**: proverbs, dramatic irony, soliloquy, contrast, humour and symbolism (the stone and the peace plant).',
  ], 'li3-boundary-themes', 'For any question on the play, link theme, character and an event.',
  ['The peace plant in the play is a symbol of:', ['reconciliation between the families', 'a new boundary', 'the road project', 'the harvest'], 'A sign of peace.'],
  [['Plot development', 'How the events of a play or story move from beginning to end.']],
  [
    { q: 'Show how the play presents the danger of rumours.', steps: ['Point: **rumours make the conflict worse**.', 'Evidence: in Act Two, the market women say that "Ebot uses medicine to move stones".', 'Explanation: the false story spreads suspicion and anger, while the audience knows the road workers moved the stone, so the playwright warns us to **check facts before we judge**.'] },
  ]),

  // ---------- 26. Revision ----------
  L('li-revision-3', 'li-f3-revision', '26.1', 'Review of the year', 14, ['Revision'], [
    'Term 1: **literature** (definition, functions, importance) and the **genres**; figures of speech: **simile, metaphor, personification, hyperbole, irony, contrast, alliteration, allusion, pathos, rhetorical question**; oral forms: **folktales, myths, legends, riddles, proverbs**; the poems and their themes (self-worth, mistakes and emotions, money and honesty, the environment and health, homeland and equality, culture and technology).',
    'Term 2: **oral performance** (performer, audience participation, tone, gesture, occasion); from oral to written prose; the **narrator** and point of view; **plot** (exposition to resolution), suspense, foreshadowing, flashback; **setting** (temporal, spatial, social), atmosphere; **characters** (protagonist, antagonist, round, flat, dynamic, static) and characterisation; **themes**; the novel "The Well at Ndoko".',
    'Term 3: **drama** terms (playwright, cast, dialogue, monologue, soliloquy, aside); acts, scenes and stage directions; the play "The Boundary Stone": title, plot, conflict, characters, themes and language style.',
  ], 'li3-year-map', 'Make one revision card for each term; test yourself with a friend.',
  ['Which is NOT a figure of speech?', ['stage direction', 'hyperbole', 'allusion', 'personification'], 'A stage direction is part of a play’s layout.'],
  [['Revision', 'Studying again what has been learned, to remember it.']],
  [
    { q: 'Make a revision card for "conflict" using both set texts of the year.', steps: ['Definition: **a struggle between opposing forces**.', 'Novel: **Akwen against Mr Ekwe** (character against character); the village against drought (nature).', 'Play: **Ndoh against Ebot** (family against family); Tanjong’s soliloquy (internal).'] },
  ]),

  L('li-answering-3', 'li-f3-revision', '26.2', 'Answering structural, theme and context questions', 14, ['Revision', 'Writing'], [
    'End-of-sequence and end-of-year papers ask **structural questions** on the set texts, on **themes**, and on **figures of speech**.\n- **Knowledge questions** ("Who is Madam Ayamba?"): answer briefly and exactly.\n- **Device questions**: name the device, quote it, explain its effect.\n- **Theme and character questions**: use **point, evidence, explanation**, in paragraphs.\n- **Context questions** on an extract: say who is speaking, to whom, where and when (what has just happened), explain the meaning of the lines, and say what they reveal about character or theme.',
    'Tips: read the question twice and underline the key words (identify, explain, describe, compare); give evidence for every point; write in the present tense about the texts; manage your time by the marks; check spelling of characters’ names.',
  ], 'lit-context-steps', 'Who speaks, to whom, where, what it means, what it shows.',
  ['In a context question, "Who is speaking and to whom?" asks you to:', ['identify the speaker and the listener of the extract', 'name the author', 'give the price of the book', 'write a poem'], 'Situate the extract.'],
  [['Context question', 'A question on an extract that asks about its situation, meaning and importance.'], ['Structural question', 'A short, structured question that tests knowledge and understanding of a text.']],
  [
    { q: 'Answer the context question: "A gift that closes the mouth also closes the eyes." (a) Who says this? (b) In what situation? (c) What does it reveal?', steps: ['(a) **Pa Fonkem**, Akwen’s father.', '(b) At the **village meeting in chapter 4**, after some elders accept Mr Ekwe’s gifts.', '(c) It reveals his **wisdom** and introduces the theme of **corruption**: bribes silence people and blind them to wrong.'] },
  ]),
];
