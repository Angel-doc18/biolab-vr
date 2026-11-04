// Literature in English lessons for Form 1, sequences 3 to 6: literature in
// other media, poems on culture, drama, and prose (short stories, fables, why
// stories and tales of character). Set books change with the national
// booklist, so each lesson teaches a method. Every poem, scene and story here
// was written for this app. **double asterisks** mark key terms; `examples`
// are worked examples.

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
  // ---------- 14. Literature and media ----------
  L('li-oxymoron-1', 'li-f1-media', '14.1', 'Oxymoron and poems about modern gadgets', 10, ['Literary devices', 'Poetry'], [
    'An **oxymoron** joins two words of opposite meaning in one phrase: "deafening silence", "bitter sweetness", "a wise fool", "my lonely crowd of friends". It surprises the reader and shows a contradiction in life.',
    'Poems about **communication and new technology** (the mobile phone, the radio, the newspaper, the earpiece) often show both sides: gadgets connect us and inform us, yet they can isolate us and waste time. A poem written for this lesson:\n"My phone, my lonely crowd of friends,\nA thousand voices, no one sends\nA hand to hold, a face to see;\nIt talks all day, but not to me."\nThe oxymoron "lonely crowd" and the **irony** of the last line show that a phone full of contacts can leave a person alone.',
  ], 'li1-oxymoron', 'An oxymoron sounds impossible: that is its point.',
  ['Which is an oxymoron?', ['a lonely crowd', 'a happy child', 'a tall building', 'a cold drink'], 'Lonely and crowd are opposites.'],
  [['Oxymoron', 'Two words of opposite meaning placed together.']],
  [
    { q: 'Explain the oxymoron "sweet sorrow" in a poem about leaving home for school.', steps: ['Sweet and sorrow are opposites.', 'Leaving is **sad** (sorrow), but it is also **hopeful**, because school brings a better future (sweet).', 'The oxymoron shows **mixed feelings** at the same moment.'] },
  ]),

  L('li-media-1', 'li-f1-media', '14.2', 'Literature in print, on radio and screen, and in performance', 12, ['Literature and media'], [
    'Literature reaches us through many **media**: **print** (books, magazines, newspapers), **audio** (radio drama, recorded stories, songs), **visual and audio-visual** (television series, films made from novels and plays) and **live performance** (theatre, poetry recitals, storytelling festivals).',
    'Each medium changes how a story is told: a book uses description and the narrator’s voice; a radio play uses voices, music and sound effects; a film uses images, camera angles and actors’ expressions; a stage play uses dialogue, movement, costume and lighting.',
    'Responding to a performance or film: say what it was and where you saw it; summarise the story briefly; comment on the actors, music, costumes and setting; say how it made you feel and what it taught; compare it with the written text if you have read it. Choose what you watch with **prudence**: not every film or online story has good values.',
  ], 'li1-media', 'When comparing a film with its book, ask what was added, cut or changed, and why.',
  ['In a radio play, the audience learns about the setting mainly through:', ['voices, music and sound effects', 'pictures', 'costumes they can see', 'stage lighting'], 'Radio is heard, not seen.'],
  [['Medium', 'A means of communication, such as print, radio, film or the stage.'], ['Performance', 'Presenting a literary work live to an audience.']],
  [
    { q: 'Write two sentences responding to a school performance of a folktale.', steps: ['What and where: "**Last Friday, Form 2 performed the tale of Tortoise and the Birds in the school hall.**"', 'Comment: "The actor playing Tortoise used a sly voice and funny gestures, and the drumming made the feast scene lively, so the moral about greed was clear and enjoyable."'] },
  ]),

  // ---------- 15. Culture poems ----------
  L('li-localcolour-1', 'li-f1-culture', '15.1', 'Local colour: culture in literature', 10, ['Literary devices'], [
    '**Local colour** is the use of details that belong to a particular place and culture: local words and greetings, foods (fufu, achu, ndolé), dress (toghu, kaba), objects (kola nut, calabash, talking drum), festivals, proverbs and beliefs. It makes the setting real and shows the reader the culture of the people.',
    'In a poem or story, local colour also expresses **identity** and pride in one’s roots, and it lets readers from other places learn about a culture.',
  ], 'li1-local-colour', 'Underline every word that tells you where the story takes place.',
  ['Which detail gives local colour to a story set in a Cameroonian village?', ['the elders sharing kola under the palaver tree', 'a train in the snow', 'a skyscraper', 'a winter coat'], 'Kola and the palaver tree belong to the setting.'],
  [['Local colour', 'Details of the customs, speech, dress and places of a particular region.'], ['Identity', 'A sense of who one is and where one belongs.']],
  [
    { q: 'List the local colour in: "At the Fon’s palace, the drums spoke, the women danced in their kabas, and the elders broke kola before the palm wine went round."', steps: ['The **Fon’s palace** (traditional rule)', 'The **drums** that "spoke" (talking drums)', '**Kabas** (traditional dress)', '**Kola** and **palm wine** (hospitality customs)'] },
  ]),

  L('li-heritage-1', 'li-f1-culture', '15.2', 'Poems on culture and heritage', 12, ['Poetry', 'Writing'], [
    '**Culture** is the way of life of a people: language, beliefs, music, art, food, marriage customs and festivals. Our **cultural heritage** is what we receive from our ancestors. Poems celebrate cultural objects (the kola nut, masks, drums), music and dance, and some also question practices such as forced marriage or excessive polygamy.',
    'A poem written for this lesson:\n"Break the kola, share the red,\nLet every visitor be fed;\nThe drum remembers what we were,\nThe dance remembers who we are."\nThe kola shows **hospitality**; "the drum remembers" and "the dance remembers" use **personification** and **repetition** to show that culture keeps a people’s memory and identity.',
    'Writing a short poem that celebrates African tradition: choose one custom or object, describe it with images, say what value it carries (hospitality, respect, unity), and end with what it means to you.',
  ], 'li1-local-colour', 'Say which value a custom carries: that turns description into meaning.',
  ['"The drum remembers what we were" suggests that:', ['music keeps a people’s history alive', 'drums have brains', 'the past is forgotten', 'drums are old'], 'Personification of the drum.'],
  [['Culture', 'The way of life of a people.'], ['Cultural heritage', 'The traditions and values passed down from ancestors.']],
  [
    { q: 'What does the kola nut stand for in the poem?', steps: ['In the poem, the kola is broken and shared with visitors.', 'So it stands for **hospitality, welcome and friendship**.'] },
  ]),

  // ---------- 16. Drama ----------
  L('li-drama-1', 'li-f1-drama', '16.1', 'What drama is: its features', 12, ['Drama'], [
    '**Drama** is literature written to be **performed** before an audience. Its features:\n- the **playwright** (writer) and the **cast** (list of characters)\n- **acts** and **scenes** (a new scene usually means a change of time or place)\n- **dialogue**: the story is told through what characters say\n- **stage directions**: instructions in italics or brackets about setting, movement, tone and sound, not spoken aloud\n- **conflict**, which drives the action, and **suspense**, which keeps the audience waiting to know what happens\n- **costume**, **props** and **lighting** on stage.',
    'Kinds of drama include **tragedy** (a sad ending), **comedy** (a happy ending with humour), and **ceremonial or civic drama** in traditional festivals and rituals.',
  ], 'lit-play-parts', 'Read stage directions carefully: they tell you what the audience sees.',
  ['The words in brackets that tell actors how to move are:', ['stage directions', 'dialogue', 'the cast list', 'the chorus'], 'They are not spoken.'],
  [['Playwright', 'A person who writes plays.'], ['Stage directions', 'Instructions in a play about setting, movement and tone.'], ['Suspense', 'Excitement or worry about what will happen next.']],
  [
    { q: 'Identify the features in this extract written for this lesson: "Scene 1. The chief’s courtyard at dawn. A drum sounds. (ELDER NJOH enters, leaning on a stick.) NJOH: The gods are angry. The rains have not come."', steps: ['**Scene 1** and the setting "the chief’s courtyard at dawn": the start of the play.', '"A drum sounds" and "(ELDER NJOH enters, leaning on a stick)": **stage directions**.', '"NJOH: The gods are angry…": **dialogue**, which also introduces the **conflict** (drought).'] },
  ]),

  L('li-opening-1', 'li-f1-drama', '16.2', 'Reading the opening scene of a play', 12, ['Drama', 'Literary elements'], [
    'The **opening scene** (the **exposition**) introduces the setting, the main characters and the problem. Before reading, learn about the **playwright** and the **background**: the society the play describes and the issue it raises (for example harmful customs, power, corruption).',
    'As you read the first scene, note:\n- **place and time setting** (a rural village, a palace, a market; morning, the dry season)\n- **who the main characters are** and their relationships (chief, elders, wives, children)\n- **the rulership structure** of the community (chief, council of elders, secret societies)\n- **the first sign of conflict**\n- **the mood**: suspense, fear, joy.',
    'Then write a short **summary** of the scene: who, where, what happens, and what problem begins.',
  ], 'lit-stage-conventions', 'The first scene plants the seeds of the conflict: look for them.',
  ['The opening scene of a play is usually called the:', ['exposition', 'climax', 'resolution', 'epilogue'], 'It sets things up.'],
  [['Exposition', 'The opening part of a plot that introduces setting, characters and the situation.'], ['Background', 'The social and historical situation from which a work comes.']],
  [
    { q: 'Summarise the opening scene: "In the palace courtyard, Chief Ekwe tells the elders that his daughter Mbong must marry the rich old trader Tanyi. Mbong, hiding behind a pillar, hears and runs away weeping."', steps: ['Who: Chief Ekwe, the elders and his daughter Mbong.', 'Where: the palace courtyard.', 'What: the chief announces a forced marriage; Mbong overhears and flees.', 'Problem: **the conflict between the father’s decision and the daughter’s freedom begins.**'] },
  ]),

  // ---------- 17. Drama and culture ----------
  L('li-pathos-1', 'li-f1-drama-culture', '17.1', 'Proverbs and pathos in drama', 10, ['Drama', 'Literary devices'], [
    'In African drama, elders often speak in **proverbs**, which add wisdom, authority and local colour: "A child who says his mother will not sleep will not sleep either." A character’s proverbs can show that they are wise, or that they use tradition to defend injustice.',
    '**Pathos** is the quality that makes the audience feel pity and sorrow: a widow driven from her husband’s land, a girl forced into marriage, a child punished unfairly. Pathos makes the audience care about the victims and question the customs that harm them.',
  ], 'li1-pathos', 'When a scene makes you feel sorry for a character, name it pathos and say what causes it.',
  ['A scene showing a weeping widow stripped of her farm creates:', ['pathos', 'humour', 'irony only', 'suspense only'], 'It makes the audience feel pity.'],
  [['Pathos', 'The quality that arouses pity or sorrow.'], ['Proverb', 'A short traditional saying expressing wisdom.']],
  [
    { q: 'Write a line of dialogue with a proverb for an elder who supports a girl’s education.', steps: ['Choose a proverb about planting for the future.', 'Elder: "**The yam you plant today feeds your grandchildren. Send the girl to school.**"', 'The proverb gives the elder authority and links education to the future.'] },
  ]),

  L('li-character-1', 'li-f1-drama-culture', '17.2', 'How characters are revealed; plays about questionable culture', 14, ['Drama', 'Characterisation'], [
    'Plays about **questionable culture** show conflicts between harmful customs and human rights: **gender discrimination** (denying girls school or inheritance), forced marriage, **female genital mutilation** and cruel rites. They raise **awareness** and call for change.',
    'We learn about a **character** through: what they **say**; what they **do**; how they **speak** (proud, gentle, harsh); what **other characters** say about them; and how they **change**. A **round** character changes and is complex; a **flat** character stays the same. The **protagonist** is the main character; the **antagonist** opposes them.',
    'To **compare and contrast** two characters (for example a cruel chief and a brave daughter), show what each wants, how each behaves, and how the playwright makes us judge them.',
  ], 'lit-characterization', 'Judge a character by actions more than words.',
  ['A character who stays the same from beginning to end is:', ['flat', 'round', 'the narrator', 'a chorus'], 'Round characters develop.'],
  [['Protagonist', 'The main character of a work.'], ['Antagonist', 'The character who opposes the protagonist.'], ['Gender discrimination', 'Unfair treatment because of a person’s sex.']],
  [
    { q: 'Contrast Chief Ekwe and his daughter Mbong in the forced-marriage scene.', steps: ['Chief Ekwe: **authoritarian and greedy**; he uses tradition to give his daughter to a rich man.', 'Mbong: **brave and independent**; she refuses and runs away to protect her future.', 'The contrast makes the audience **sympathise with Mbong and question the custom**.'] },
  ]),

  // ---------- 18. Plot in drama ----------
  L('li-plotstructure-1', 'li-f1-drama-plot', '18.1', 'Plot structure: exposition, rising action, climax, falling action and resolution', 12, ['Drama', 'Literary elements'], [
    'Most plays and stories follow a **plot structure**:\n1. **exposition**: setting, characters and situation are introduced\n2. **rising action**: complications build the conflict and suspense\n3. **climax**: the turning point, the moment of greatest tension\n4. **falling action**: the results of the climax unfold\n5. **resolution** (**denouement**): the conflict is settled and the story ends.',
    'Events are linked by **cause and effect**: each event leads to the next. Drawing a **plot pyramid** helps you remember the order of events in a set book.',
  ], 'lit-plot-pyramid', 'Find the climax first: it is the moment after which nothing can be the same.',
  ['The part of a plot after the climax, where results unfold, is the:', ['falling action', 'exposition', 'rising action', 'cast'], 'It leads to the resolution.'],
  [['Climax', 'The turning point of the plot.'], ['Denouement', 'The final resolution of a plot.'], ['Rising action', 'Events that build the conflict towards the climax.']],
  [
    { q: 'Place these events of the Mbong play on the plot pyramid: (a) Mbong runs to the mission school; (b) the court rules that no girl may be forced to marry; (c) the chief announces the marriage; (d) the villagers protest at the palace; (e) the chief apologises and Mbong returns to school.', steps: ['Exposition: **(c)** the chief announces the marriage.', 'Rising action: **(a)** Mbong flees; **(d)** the villagers protest.', 'Climax: **(b)** the court ruling.', 'Falling action and resolution: **(e)** the chief apologises and Mbong returns to school.'] },
  ]),

  L('li-dramatise-1', 'li-f1-drama-plot', '18.2', 'Protest and the rule of law; euphemism; dramatising a scene', 12, ['Drama', 'Literary devices'], [
    'Many plays end with **protest** against injustice and the triumph of the **rule of law**: no one, not even a chief, is above the law. Cameroon’s **Constitution**, the **African Charter on Human and Peoples’ Rights** and the **United Nations** conventions protect the rights of women and children.',
    'A **euphemism** is a gentle word used instead of a harsh or painful one: "passed away" (died), "the old man went to the village of the ancestors" (died), "she is expecting" (pregnant). Characters may use euphemisms out of respect, or to hide cruelty ("the cleansing" for a cruel rite).',
    '**Dramatising** a scene: choose roles, learn the lines, decide on movements, gestures and tone of voice from the stage directions, use simple props and costumes, and rehearse. Performing helps you understand characters’ feelings and the playwright’s message.',
  ], 'li1-euphemism', 'Ask why a character chooses a soft word: respect, or hiding the truth?',
  ['"The old man has joined the ancestors" is a euphemism for:', ['he has died', 'he has travelled', 'he has married', 'he is asleep'], 'A gentle way of saying died.'],
  [['Euphemism', 'A mild word or phrase used instead of a harsh one.'], ['Rule of law', 'The principle that everyone, including leaders, must obey the law.']],
  [
    { q: 'Why might a character call a harmful rite "the cleansing"?', steps: ['"The cleansing" sounds good and pure.', 'It **hides the cruelty of the rite** behind a pleasant name.', 'The playwright uses this euphemism to show how **people justify harmful customs**.'] },
  ]),

  // ---------- 19. Prose ----------
  L('li-prosetypes-1', 'li-f1-prose', '19.1', 'Kinds of prose; fiction and biography', 10, ['Prose'], [
    '**Prose** is ordinary written language in sentences and paragraphs. Kinds of prose:\n- **fiction** (invented stories): the **novel** (long, with many characters), the **short story** (short, few characters, one main event), the **fable**, the **fairy tale** and the **tall tale** (impossible exaggerations for fun)\n- **non-fiction** (true accounts): **biography** (a person’s life written by someone else), **autobiography** (written by the person themself), essays and reports.',
    'Before studying a set book, read a short **biography of the author**: where they come from and what they care about helps explain the book’s setting and themes. A collection of short stories from Cameroon will often draw on the oral tradition of the grassland and forest.',
  ], 'li1-prose-types', 'Fiction is invented; biography is true.',
  ['A book in which a footballer tells the story of his own life is:', ['an autobiography', 'a biography', 'a novel', 'a fable'], 'Written by the person themself.'],
  [['Fiction', 'Invented stories.'], ['Biography', 'A true account of a person’s life written by someone else.'], ['Short story', 'A short work of prose fiction with few characters and one main event.']],
  [
    { q: 'Classify: (a) the life of a national hero written by a historian; (b) a tale of a hunter who jumped over Mount Cameroon; (c) a 200-page story of a family across three generations.', steps: ['(a) **biography**', '(b) **tall tale** (impossible exaggeration)', '(c) **novel**'] },
  ]),

  L('li-outline-1', 'li-f1-prose', '19.2', 'The narrator and point of view; outlining the plot of a short story', 12, ['Prose', 'Literary elements'], [
    'The **narrator** is the voice telling the story. In the **first person**, a character tells it ("I saw…"), so we share their feelings but know only what they know. In the **third person**, an outside voice tells it ("Kiki and Toto ran…"), and may know what every character thinks.',
    'A story written for this lesson: "Mother Hen warned her chicks, Kiki and Toto, never to wander beyond the cassava field. The stubborn chicks laughed and chased a butterfly into the bush. There a hawk swooped. Toto hid under a log, but Kiki was caught. Toto ran home crying and never disobeyed again."',
    'To **outline** the plot, list the main events in order:\n1. Mother Hen warns her chicks\n2. the chicks disobey and enter the bush\n3. a hawk attacks; Kiki is caught\n4. Toto returns home and learns obedience.\nThe narrator is in the **third person**; the theme is **disobedience brings danger; respect the advice of parents.**',
  ], 'li1-plot-outline', 'An outline lists events only; leave description out.',
  ['In the story of the chicks, the narrator is:', ['third person', 'first person (Kiki)', 'first person (Toto)', 'the reader'], 'An outside voice tells the story.'],
  [['Narrator', 'The voice that tells a story.'], ['Third-person narrator', 'An outside voice telling the story using he, she and they.']],
  [
    { q: 'Rewrite the first event of the chick story in the first person, from Toto’s point of view.', steps: ['Change "Toto" to "I" and keep Toto’s feelings.', '"**Mother warned Kiki and me never to wander beyond the cassava field, but I only laughed.**"'] },
  ]),

  // ---------- 20. Pride ----------
  L('li-characterisation-1', 'li-f1-pride', '20.1', 'Characterisation: direct and indirect', 10, ['Characterisation'], [
    '**Characterisation** is how a writer shows what a character is like:\n- **direct**: the narrator tells us ("Ngong was lazy and proud.")\n- **indirect**: we work it out from what the character says, does, thinks and looks like, and from how others react ("Ngong slept until noon while his brothers weeded. ‘Farming is for slaves,’ he laughed.").',
    'When you describe a character, give a **trait** (lazy, proud, humble, wise), support it with **evidence** from the story, and explain how the evidence shows the trait.',
  ], 'lit-characterization', 'Trait, evidence, explanation: three parts for every character point.',
  ['"Kamga never let a beggar pass his door without food" shows Kamga is generous by:', ['indirect characterisation (his actions)', 'direct characterisation', 'a rhyme', 'the setting'], 'We infer it from what he does.'],
  [['Characterisation', 'The way a writer shows what a character is like.'], ['Trait', 'A quality of a character, such as honesty or pride.']],
  [
    { q: 'What trait is shown, and how: "When the river rose, Bih carried the old woman’s baskets across first, then went back for her own."', steps: ['Trait: **selflessness (kindness)**.', 'Evidence: she carries the old woman’s baskets first.', 'Method: **indirect** characterisation through action.'] },
  ]),

  L('li-pride-1', 'li-f1-pride', '20.2', 'Stories about laziness, pride and humility; writing a summary', 12, ['Prose'], [
    'Many tales show **human weaknesses**: waywardness (doing as one pleases), laziness, arrogance and pride, and how they lead to a fall; and they praise **humility**, alertness, focus and steadfastness. A story written for this lesson: "Ngong always did the opposite of what he was told. When the elders said ‘Plant before the rains,’ he waited. When they said ‘Keep your cows from the river in flood,’ he drove them there to drink. The river rose and carried his cows away. Ngong stood on the bank, at last silent."',
    'Characters: Ngong is **wayward, proud and foolish**; the elders are **wise**. The **irony** is that his "cleverness" ruins him. Theme: **pride and refusing advice lead to loss.**',
    'Writing a **summary** of a story: in a few sentences, say who the main character is, what problem or choice they face, what they do, and how it ends, in your own words.',
  ], 'li1-character-traits', 'In a summary, keep the beginning, the turning point and the ending.',
  ['What leads to Ngong’s loss?', ['his habit of refusing advice', 'bad luck only', 'the elders’ cruelty', 'his kindness'], 'His pride and waywardness.'],
  [['Waywardness', 'Behaving as one pleases and ignoring advice.'], ['Humility', 'Being modest and not proud.'], ['Arrogance', 'Pride that looks down on others.']],
  [
    { q: 'Summarise the Ngong story in two sentences.', steps: ['"**Ngong always did the opposite of the elders’ advice.**"', '"**When he drove his cows to the flooded river against their warning, he lost them all.**"'] },
  ]),

  // ---------- 21. Teamwork ----------
  L('li-fable-1', 'li-f1-teamwork', '21.1', 'Fables and personification in prose', 10, ['Prose', 'Literary devices'], [
    'In a **fable**, animals, plants or even parts of the body speak and act like people. This **personification** lets the storyteller criticise human behaviour safely and simply. Each animal often stands for a trait: the tortoise for cunning, the lion for power, the hare for speed and boastfulness, the ant for hard work, the elephant for strength.',
    'The **moral** of a fable is usually stated at the end: "So the animals learnt that…" or left for listeners to discover.',
  ], 'li1-fable', 'Ask what human type each animal stands for.',
  ['In fables, the ant usually stands for:', ['hard work and planning', 'laziness', 'pride', 'cruelty'], 'The ant stores food for the dry season.'],
  [['Fable', 'A short tale in which animals or things act like people to teach a moral.'], ['Moral', 'The lesson of a story.']],
  [
    { q: 'What human traits might these animals stand for in a fable: (a) the lion; (b) the tortoise; (c) the hare?', steps: ['(a) lion: **power and authority** (sometimes pride)', '(b) tortoise: **cunning and wit**', '(c) hare: **speed and boastfulness**'] },
  ]),

  L('li-teamwork-1', 'li-f1-teamwork', '21.2', 'Stories about conflict and team spirit; writing a short narrative', 12, ['Prose', 'Writing'], [
    'A story written for this lesson: "One day the Hands, the Feet and the Mouth quarrelled with the Stomach. ‘We work all day and you only eat,’ they complained. So the Hands refused to lift food, the Feet refused to walk to the farm, and the Mouth refused to chew. Soon all of them grew weak. Wise Ebai, the boy to whom they belonged, said: ‘Each of you needs the others.’ They made peace, and the body grew strong again."',
    'The **personified** body parts show the **conflict**; Ebai is **wise and peace-loving**. Theme: **a community is strong only when its members work together.** Values: peace, humility, team spirit and collaboration. Stories about tribal wars and quarrels in families teach the same lesson: conflicts are best solved by dialogue.',
    'Writing a **short narrative** on the importance of collaboration: plan a beginning (characters and setting), a problem (a quarrel or task too big for one), a turning point (they decide to work together) and an ending with a lesson. Use the past tense, some dialogue and time words.',
  ], 'li1-narrative-plan', 'Every narrative needs a problem: without one, nothing happens.',
  ['The lesson of the body-parts story is:', ['every member of a group needs the others', 'the stomach is lazy', 'hands are the strongest', 'quarrels are fun'], 'Unity and collaboration.'],
  [['Collaboration', 'Working together to achieve a goal.'], ['Narrative', 'A story told in order of events.']],
  [
    { q: 'Plan a short narrative titled "The Day Our Class Worked Together".', steps: ['Beginning: Form 1 B, the school’s dirty compound before visitors arrive.', 'Problem: the students quarrel about who should clean.', 'Turning point: the class prefect shares tasks and everyone joins in.', 'Ending and lesson: the compound shines and the class wins a prize; **together we achieve more.**'] },
  ]),

  // ---------- 22. Animal tales ----------
  L('li-whystory-1', 'li-f1-honesty', '22.1', 'Why stories', 10, ['Prose', 'Oral literature'], [
    'A **why story** (aetiological tale) explains, in an imaginative and often humorous way, why an animal, plant or natural thing is as it is: why the cat lives with people, why the bat flies at night, why the sky is far away. It usually follows a pattern:\n1. long ago, things were different\n2. a character does something (good or bad)\n3. a consequence follows\n4. "and that is why…" things are this way today.',
    'Why stories entertain, explain the world in the way of the oral tradition, and teach values, since the change is often a punishment or reward.',
  ], 'li1-why-story', 'Listen for the closing line: "And that is why…".',
  ['A why story usually ends with:', ['"And that is why…"', '"Once upon a time"', '"Yours faithfully"', '"The end of the chapter"'], 'It gives the explanation.'],
  [['Why story', 'A tale that explains why something in nature is as it is.']],
  [
    { q: 'Outline a why story explaining why the cat lives with people.', steps: ['Long ago, Cat lived in the forest and served the strongest animal.', 'Cat served Leopard, then Elephant, but each was defeated by someone stronger.', 'At last Cat saw a woman chase Elephant from her farm with fire.', '**And that is why the cat lives with people today.**'] },
  ]),

  L('li-honesty-1', 'li-f1-honesty', '22.2', 'Stories about honesty, stealing and breaking bounds', 12, ['Prose'], [
    'Tales about **life in the wild** and the **animal kingdom** often deal with stealing, breaking the rules of the community, and keeping family secrets. A story written for this lesson: "In the dry season, Squirrel found the village’s seed store unlocked. ‘No one will know,’ he whispered, and filled his cheeks every night. When the rains came, the people had no seed, and the whole forest went hungry, Squirrel too. When the truth came out, the animals banished him to the treetops, and that is why squirrels live high in the trees."',
    'Trace the **plot**: the temptation, the secret theft, the consequence for everyone, the discovery and the punishment. The story combines a **fable** with a **why story**. Theme: **dishonesty harms the whole community, including the thief.** Values: honesty and truth.',
  ], 'li1-character-traits', 'Note how one character’s secret act affects everyone.',
  ['Why does the whole forest go hungry?', ['Squirrel stole the seed meant for planting', 'there was no rain at all', 'the people were lazy', 'the store was burnt'], 'His theft affected everyone.'],
  [['Honesty', 'Truthfulness and fairness.'], ['Consequence', 'The result of an action.']],
  [
    { q: 'Trace the plot of the Squirrel story in four steps.', steps: ['1. **Temptation**: Squirrel finds the seed store unlocked.', '2. **Secret wrongdoing**: he steals seed every night.', '3. **Consequence**: there is no seed to plant and everyone goes hungry.', '4. **Punishment**: Squirrel is banished to the treetops.'] },
  ]),

  // ---------- 23. Responsibility ----------
  L('li-atmosphere-1', 'li-f1-responsibility', '23.1', 'Setting and atmosphere', 10, ['Prose', 'Literary elements'], [
    '**Setting** is where and when a story happens. **Atmosphere** is the mood a scene creates: gloomy, joyful, tense, peaceful, frightening. Writers create atmosphere through description of place, time of day, weather, light, sounds and smells.',
    'Compare: "The bar was dark and smoky; broken bottles crunched underfoot, and men shouted over the crackling radio" (a **gloomy, disorderly** atmosphere) and "The compound was bright with morning sun, children laughed, and the smell of fresh bread drifted from the kitchen" (a **peaceful, happy** atmosphere).',
  ], 'li1-atmosphere', 'Collect the descriptive words of a scene, then name the feeling they share.',
  ['"Thunder rolled, the lamp flickered and died, and a dog howled in the dark" creates an atmosphere that is:', ['frightening and tense', 'calm and joyful', 'funny', 'holy'], 'The details build fear.'],
  [['Atmosphere', 'The mood or feeling created in a scene.'], ['Setting', 'The time and place of the action.']],
  [
    { q: 'Describe the market at noon in two sentences with a busy, cheerful atmosphere.', steps: ['Sight and sound: "**At noon the market was a sea of colour, with traders calling out prices and children weaving between the stalls.**"', 'Smell and feeling: "The scent of roasting corn and fried puff-puff filled the air, and everyone seemed to be laughing."'] },
  ]),

  L('li-responsibility-1', 'li-f1-responsibility', '23.2', 'Stories about irresponsible behaviour', 12, ['Prose'], [
    'Stories about **irresponsibility** show characters who neglect their duties: drunkenness and **alcoholism**, wasting money, quarrels between husband and wife, and neglect of children. Writers use **pathos** (we pity the suffering family) and **irony** (the drunkard boasts of being a good father).',
    'A story written for this lesson: "Every Friday, Tabi collected his pay and walked past the school where his son’s fees were owed, straight into the bar. ‘I am the father of this house!’ he roared at night, stumbling against the door. One morning his son did not go to school; he went to sell firewood in the market. Tabi saw him there and, for the first time, felt shame."',
    'Tabi is **irresponsible and negligent**; the **contrast** between his boast and his son’s fate creates **irony** and **pathos**. Theme: **irresponsible parents rob their children’s future.** Values: responsibility, prudence and caution.',
  ], 'li1-cause-effect', 'Follow the chain: the bad habit, its effect on others, the turning point.',
  ['"I am the father of this house!" is ironic because:', ['Tabi does not behave like a responsible father', 'he is very wise', 'he pays the fees', 'it is true'], 'His words contradict his actions.'],
  [['Irresponsibility', 'Failing to take care of one’s duties.'], ['Negligent', 'Failing to give proper care or attention.']],
  [
    { q: 'Show the chain of cause and effect in the Tabi story.', steps: ['Cause: Tabi spends his pay on drink.', 'Effect: his son’s fees are not paid.', 'Further effect: the son leaves school to sell firewood.', 'Turning point: **seeing his son in the market, Tabi feels shame.**'] },
  ]),

  // ---------- 24. Greed ----------
  L('li-conflictcause-1', 'li-f1-greed', '24.1', 'Conflict and its causes in prose', 10, ['Prose', 'Literary elements'], [
    'Every story needs a **conflict**: between people (two co-wives, two brothers), between a person and society (a girl against a custom), between a person and nature (a farmer against drought), or within a person (a choice between greed and honesty).',
    'Conflicts in tales are often caused by **character traits**: jealousy, greed, selfishness, pride and ingratitude. To explain a conflict, name the two sides, what each wants, and the trait or situation that causes the clash.',
  ], 'li1-conflict-types', 'Name both sides and what each one wants.',
  ['A conflict between a woman and the custom that denies her land is a conflict between:', ['a person and society', 'two animals', 'a person and nature', 'two stanzas'], 'The custom is part of society.'],
  [['Conflict', 'A struggle between opposing forces.'], ['Jealousy', 'Unhappiness at another person’s good fortune.']],
  [
    { q: 'Identify the conflict: "Two brothers shared their father’s farm, but the elder moved the boundary stones at night to take more land."', steps: ['Sides: **the elder brother against the younger brother** (person against person).', 'Cause: **the elder brother’s greed**.', 'What each wants: the elder wants more land; the younger wants his fair share.'] },
  ]),

  L('li-greed-1', 'li-f1-greed', '24.2', 'Stories about jealousy, greed and gratitude', 12, ['Prose'], [
    'Many African tales explore **marriage** and its challenges, including the pain of **childlessness**, which brings social pressure, blame and **jealousy** between co-wives. Others show **greed**, **selfishness** and **ingratitude**, and reward **love**, **recognition** and **gratitude**.',
    'A story written for this lesson: "Old Mama Ekah, who had no children, gave her only necklace to Enanga, a young wife, to wear at her wedding. Enanga refused to return it. ‘An old woman needs no beads,’ she laughed. That night the beads tightened around Enanga’s neck until she ran, weeping, to Mama Ekah’s door. The old woman untied them gently and said, ‘Gratitude is the best ornament.’"',
    'Enanga is **selfish, greedy and ungrateful**; Mama Ekah is **generous and forgiving**. The magic of the necklace is typical of oral tales, and the **contrast** between the two women and Mama Ekah’s closing words create the moral: **be grateful to those who help you.**',
  ], 'li1-cause-effect', 'Write the moral in your own words, then find the line that shows it.',
  ['The moral of the necklace story is:', ['be grateful to those who help you', 'old women do not need beads', 'necklaces are dangerous', 'weddings are expensive'], 'Gratitude is the best ornament.'],
  [['Ingratitude', 'Failing to show thanks for kindness.'], ['Gratitude', 'Thankfulness.']],
  [
    { q: 'Contrast Enanga and Mama Ekah with one piece of evidence each.', steps: ['Enanga: **ungrateful and selfish**: she refuses to return the necklace and mocks the old woman ("An old woman needs no beads").', 'Mama Ekah: **generous and forgiving**: she lends her only necklace and later frees Enanga gently.'] },
  ]),

  // ---------- 25. Humility ----------
  L('li-moral-1', 'li-f1-humility', '25.1', 'Theme and moral lesson in prose', 10, ['Prose', 'Literary elements'], [
    'A story’s **theme** is its central idea about life; its **moral** is the lesson for behaviour. One story can have several themes: a tale of a proud prince and a humble servant may deal with **pride**, **service**, **power** and **fate**.',
    'To state a theme, write a sentence: "**True greatness comes from serving others.**" To give the moral, turn it into advice: "**Be humble and serve others.**" Support either with an event from the story.',
  ], 'li1-theme-moral', 'Theme: a statement. Moral: advice.',
  ['Which is a moral rather than a theme?', ['Always respect your elders.', 'Respect for elders keeps a community united.', 'The story is about elders.', 'Elders appear in chapter 2.'], 'A moral gives advice.'],
  [['Theme', 'The central idea about life in a work.'], ['Moral', 'A lesson about right behaviour.']],
  [
    { q: 'Give a theme and a moral for a story in which a selfish chief loses his throne to the servant he mistreated.', steps: ['Theme: **power used selfishly destroys the one who holds it.**', 'Moral: **treat everyone, even servants, with respect.**'] },
  ]),

  L('li-humility-1', 'li-f1-humility', '25.2', 'Stories about humility, service and fate', 12, ['Prose'], [
    'A story written for this lesson: "Fomba, the chief’s proud son, mocked Ngum, a slave boy who fetched water for the palace. When a terrible fever struck the land, Fomba hid in his room, but Ngum carried water and herbs to every sick house. When the old chief died, the elders, remembering who had served them, chose Ngum. Fomba, who had waited all his life to rule, bowed before the boy he had despised."',
    'The **contrast** between Fomba (proud, selfish, power-hungry) and Ngum (humble, serviceable, kind) drives the story. The **irony** is that the one born to rule loses power, while the servant gains it. Themes: **humility and service are rewarded; pride and power mongering lead to a fall.** Some tales also explore **fate** and **ancestral beliefs**: what the elders and ancestors decide.',
    'Writing a short narrative on the consequences of excessive pride: choose a proud character, show their pride in action, bring a test, and end with a fall that teaches the lesson.',
  ], 'lit-character-compare', 'In a contrast of two characters, compare them on the same points: actions, values, ending.',
  ['The irony in the story of Fomba and Ngum is that:', ['the servant becomes chief while the chief’s son loses power', 'the fever was mild', 'Ngum was proud', 'Fomba was kind'], 'The opposite of what was expected happens.'],
  [['Service', 'Helping others, especially without seeking reward.'], ['Fate', 'A power believed to decide future events.'], ['Power mongering', 'Seeking power for its own sake.']],
  [
    { q: 'Compare Fomba and Ngum on two points.', steps: ['Attitude: Fomba is **proud and mocking**; Ngum is **humble**.', 'Actions in the crisis: Fomba **hides**; Ngum **serves the sick**.', 'Ending: Fomba **bows**; Ngum **becomes chief**.'] },
  ]),

  // ---------- 26. Revenge ----------
  L('li-answer-1', 'li-f1-revenge', '26.1', 'Writing a literature answer: point, evidence, explanation', 12, ['Answering questions'], [
    'A good literature answer has three parts:\n- **Point**: a clear statement that answers the question ("Ewi is brave.")\n- **Evidence**: a short quotation or a precise reference to an event ("He walks alone into the enemy camp to rescue his brother.")\n- **Explanation**: how the evidence proves the point ("He risks his life for his family, which shows great courage.").',
    'Write about events in the **present tense** (the literary present): "Ewi fights", not "Ewi fought". Use the characters’ names, keep quotations short, and do not simply retell the story: every sentence should help answer the question.',
  ], 'li1-pee', 'Point, evidence, explanation: the explanation earns the marks.',
  ['In a literature answer, "He walks alone into the enemy camp" is the:', ['evidence', 'point', 'title', 'conclusion only'], 'It is a precise reference to the story.'],
  [['Point', 'A clear statement that answers the question.'], ['Evidence', 'A quotation or reference that supports a point.'], ['Literary present', 'The present tense used to write about events in a text.']],
  [
    { q: 'Turn this retelling into a point-evidence-explanation answer: "Ngum carried water to the sick."', steps: ['Point: "**Ngum is selfless.**"', 'Evidence: "During the fever, he carries water and herbs to every sick house."', 'Explanation: "He helps others at risk to himself and expects nothing, which shows his selflessness."'] },
  ]),

  L('li-revenge-1', 'li-f1-revenge', '26.2', 'Stories about revenge, war and forgiveness; revision of the year', 12, ['Prose', 'Revision'], [
    'Stories about **vengeance** and **tribal war** show how revenge creates a **cycle of violence**: one wrong leads to another until whole villages suffer. They praise **bravery** but also **forgiveness**, **peace** and **reconstruction**. A story written for this lesson: "When men from the next village burnt Ewi’s farm, Ewi swore revenge and burnt theirs. They replied by killing his goats; he replied by killing their cows. By the third rainy season both villages were hungry. Ewi’s grandmother called both chiefs under one tree. ‘Revenge is a hungry dog,’ she said, ‘the more you feed it, the bigger it grows.’ That day they planted peace trees side by side."',
    'Devices: the **repetition** of "he replied" shows the cycle; the grandmother’s **proverb** carries the moral; the ending shows **reconstruction**. Theme: **revenge only multiplies suffering; forgiveness ends it.**',
    '**Revision of the year**: the three genres (prose, drama, poetry); oral forms (tales, proverbs, riddles, songs); the elements (setting, plot, character, theme, point of view); the devices (simile, metaphor, personification, hyperbole, alliteration, irony, contrast, imagery, rhetorical question, allusion, oxymoron, euphemism, pathos); and the answer method (point, evidence, explanation).',
  ], 'li1-revenge', 'To revise, make a card for each device with a definition and your own example.',
  ['"Revenge is a hungry dog; the more you feed it, the bigger it grows" means:', ['each act of revenge makes the conflict worse', 'dogs should be fed', 'revenge makes you strong', 'hunger is good'], 'A proverb about the cycle of revenge.'],
  [['Vengeance', 'Punishment inflicted in return for a wrong.'], ['Forgiveness', 'Stopping feeling angry towards someone who wronged you.'], ['Reconstruction', 'Rebuilding after destruction.']],
  [
    { q: 'Answer with point, evidence and explanation: "How does the story show that revenge is harmful?"', steps: ['Point: **revenge only increases suffering on both sides.**', 'Evidence: farms, goats and cows are destroyed in turn until "both villages were hungry".', 'Explanation: each act of revenge provokes another, so the conflict grows until everyone suffers, as the grandmother’s proverb says.'] },
  ]),
];
