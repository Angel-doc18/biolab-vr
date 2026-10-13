// Literature in English lessons for Form 4, term 1: the elements of
// literature, genres and figures of speech, studying a play, reading poems,
// and the novel. Set books change with the national booklist, so each lesson
// teaches a method for any prescribed text. Passages are written for this app,
// or quoted briefly from public-domain classics. **double asterisks** mark key
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

export const LESSONS_4A = [
  // ---------- The elements of literature ----------
  L('li-elements-4', 'li-f4-elements', '1.1', 'Plot, setting, character and theme', 13, ['Literary elements'], [
    'Every work of literature, whether a play, a novel or a poem, is built from a few basic elements. Knowing their names lets you discuss any set book precisely:\n- **plot**: the chain of events, linked by cause and effect\n- **setting**: the time, place and social world of the action\n- **character**: the people (or animals and spirits) who act and are acted upon\n- **theme**: a central idea that the work explores\n- **point of view**: who tells or presents the story\n- **style and tone**: how the writer uses language, and the attitude it shows.',
    'A plot is more than a list of events. "The chief died, and then the rains failed" is only a sequence. "The chief died, and the rains failed because the village had broken its oath" is a plot, because the events are linked by **cause**. Most plots move through five stages: exposition, rising action, climax, falling action and resolution.',
    'Setting works on three levels: **place** (a Grassfields village, a crowded city, a Scottish castle), **time** (the colonial period, the 1990s, a single night) and **social setting** (customs, beliefs, class and who holds power). A **theme** is a full idea, not a single word: "greed" is only a topic, while "greed destroys the people it promises to enrich" is a theme statement.',
  ], 'lit-elements', 'Write a theme as a sentence about life, not as one word.',
  ['Which of these is a theme statement?', ['Power corrupts those who hold it without limits.', 'Power', 'The king is crowned in Act II.', 'The novel is set in Bamenda.'], 'A theme is a full idea about life.'],
  [['Plot', 'The events of a story, linked by cause and effect.'], ['Setting', 'The time, place and social world in which the action happens.'], ['Theme', 'A central idea about life that a work explores.'], ['Social setting', 'The customs, beliefs, class and power structures of the world of the text.']],
  [
    { q: 'Read this passage written for this lesson. "When the rains failed for the third year, Mama Ngozi sold her last goat and sent her son to the city school. In the market at Kumba, people laughed: why waste money on books when the farms were dying? Ten years later, the same traders queued at his clinic." Identify the setting, the conflict and one possible theme.', steps: ['Setting: a farming community near Kumba, in a time of drought; the social setting is a village where education is doubted.', 'Conflict: Mama Ngozi’s choice against the opinion of the community (character against society).', 'A theme: **"Sacrifice for education can transform a family and the community that doubted it."**'] },
  ]),

  L('li-answering-4', 'li-f4-elements', '1.2', 'Reading closely and building a literature answer', 13, ['Essay skills'], [
    'Ordinary Level Literature tests two things: how well you **know** your set books, and how well you can **analyse** them. Knowing the story is only the starting point. Marks come from explaining **how** and **why** the writer creates meaning.',
    '**Close reading** of a passage:\n- read it twice, once for the sense and once for the detail\n- underline striking words, images, repetitions and changes of tone\n- ask what each choice suggests and how it makes the reader feel\n- link the passage to the whole work: what has happened before, and why the passage matters.',
    'A literature answer, short or long, follows one pattern: make a **point** that answers the question, give **evidence** (a short quotation or a precise reference to an incident), and **explain** how the evidence proves the point. Write about events in the **present tense** ("the hero refuses the bribe"), because a text happens each time it is read. Name the author by surname and underline titles in handwritten work.',
  ], 'lit-elements', 'Point, evidence, explanation: the explanation is where the marks are.',
  ['In a literature answer, events in the text are usually described in:', ['the present tense', 'the future tense', 'the past perfect only', 'any tense at random'], 'This is called the literary present.'],
  [['Close reading', 'Careful, detailed study of the words, images and effects of a passage.'], ['Evidence', 'A quotation or precise reference to the text that supports a point.'], ['Literary present', 'The present tense used to describe events in a literary work.']],
  [
    { q: 'Question on the Mama Ngozi passage: "What does the passage show about Mama Ngozi?" Compare a weak and a strong answer.', steps: ['Weak (retelling): "She sold her goat and sent her son to school." This only repeats the story.', 'Strong (point, evidence, explanation): **"Mama Ngozi is far-sighted and self-sacrificing. She sells \'her last goat\', and the word \'last\' shows that she gives up her only security so that her son can study. The ending proves her right, since the traders who mocked her later \'queued at his clinic\'."**'] },
  ]),

  // ---------- Genres and figures of speech ----------
  L('li-genres-4', 'li-f4-genres', '2.1', 'Drama, prose and poetry', 12, ['Genres'], [
    'Literature is divided into three main **genres**:\n- **drama**: written to be performed by actors, mostly in dialogue, divided into acts and scenes, with stage directions; kinds include tragedy, comedy, tragicomedy and farce\n- **prose**: ordinary written language in sentences and paragraphs, usually with a narrator; kinds include the novel, the novella and the short story, and non-fiction such as autobiography\n- **poetry**: language arranged in lines and often stanzas, using rhythm, sound and imagery in a concentrated way; kinds include the lyric, the narrative poem, the ballad, the sonnet, the elegy and free verse.',
    'African literature also grows from **oral literature**: folktales, myths, legends, proverbs, riddles, praise songs and dirges, performed and passed on by word of mouth. Many African plays, novels and poems borrow its forms, such as a storyteller who addresses the audience, songs inside a play, or call-and-response in a poem.',
    'Each genre is read differently. In drama there is usually no narrator, so you judge characters by what they say and do. In prose the narrator guides what we know and feel. In poetry every word, line break and sound counts, because the form is so compressed.',
  ], 'lit-genres', 'Drama is shown, prose is told, poetry is compressed.',
  ['A short story belongs to which genre?', ['prose', 'drama', 'poetry', 'oral literature only'], 'It is written in sentences and paragraphs with a narrator.'],
  [['Genre', 'A category of literature: drama, prose or poetry.'], ['Oral literature', 'Literature passed on by word of mouth: folktales, proverbs, songs, riddles.'], ['Novella', 'A work of prose fiction longer than a short story but shorter than a novel.']],
  [
    { q: 'Name the genre of each and give one feature that shows it: (1) "MBAH: (rising slowly) Who called for the elders?" (2) "The night was thick with crickets, and Ewane could not sleep." (3) "Rain on the zinc roof, / rain in my mother’s voice."', steps: ['(1) **Drama**: a character’s name before the speech and a stage direction in brackets.', '(2) **Prose**: a full sentence with a narrator telling us about Ewane.', '(3) **Poetry**: short lines divided by a line break (shown with /) and repetition of "rain".'] },
  ]),

  L('li-figures-4', 'li-f4-genres', '2.2', 'Figures of speech', 14, ['Literary devices'], [
    'A **figure of speech** uses words in a non-literal way to create an effect:\n- **simile**: a comparison using "like" or "as": "Her voice was as sharp as a cutlass."\n- **metaphor**: a direct comparison, saying one thing is another: "The market was a river of colour."\n- **personification**: giving human qualities to things or ideas: "The old lorry coughed up the hill."\n- **alliteration**: repetition of the same consonant sound at the start of nearby words: "Bright baskets bounce on busy backs."\n- **hyperbole**: deliberate exaggeration: "I have walked a thousand miles today."\n- **onomatopoeia**: words that imitate sounds: "buzz", "crack", "splash".',
    'Naming a device earns few marks. The marks come from its **effect**: what it makes the reader see, hear or feel, and how it supports the meaning. A useful sentence frame: "The writer uses [device] in [quotation] to suggest [meaning], which makes the reader feel [effect]."',
    'Other figures you will meet: **oxymoron** (two opposite words together: "a cruel kindness"), **apostrophe** (speaking to someone absent or to a thing: "O Death, where is your sting?"), **euphemism** (a gentle word for something unpleasant: "he passed away"), and **irony** (saying or showing the opposite of what is meant).',
  ], 'lit-genres', 'Always add the effect: device, quotation, meaning, effect.',
  ['"The sun smiled on the wedding guests" is an example of:', ['personification', 'a simile', 'onomatopoeia', 'hyperbole'], 'The sun is given a human action.'],
  [['Simile', 'A comparison using like or as.'], ['Metaphor', 'A direct comparison that says one thing is another.'], ['Personification', 'Giving human qualities to non-human things.'], ['Hyperbole', 'Deliberate exaggeration for effect.']],
  [
    { q: 'Identify the devices and comment on their effect: "The old lorry coughed and groaned up the hill like a tired grandfather."', steps: ['"coughed and groaned" is **personification**; "like a tired grandfather" is a **simile**.', 'Effect: **the lorry seems old, weak and struggling, so the reader feels both sympathy and amusement, and senses how slow and difficult the journey is.**'] },
    { q: 'Turn this simile into a metaphor: "His words were like poisoned arrows."', steps: ['Remove "like" and say the words are the arrows.', '**"His words were poisoned arrows."** The metaphor is stronger because it presents the comparison as a fact.'] },
  ]),

  // ---------- A play: Act I ----------
  L('li-playbackground-4', 'li-f4-playopening', '3.1', 'How a play is built, and why context matters', 13, ['Drama'], [
    'A play script has its own parts:\n- the **title** and often a **cast list** (dramatis personae), naming the characters and sometimes their relationships\n- **acts** (large divisions) and **scenes** (smaller ones, often a change of place or time)\n- **dialogue**: the words the characters speak, each line after the speaker’s name\n- **stage directions**: instructions, usually in italics or brackets, about setting, entrances and exits, movements, tone of voice, sound and lighting.',
    'Read a play as a **performance**. Imagine the stage, the costumes, the drums, the silences. Stage directions often reveal character: "(NJIKA paces nervously)" tells us more than a long description. Many African plays draw on oral performance, with songs, dances, drumming, a storyteller or a chorus, and ritual on stage; Wole Soyinka’s The Lion and the Jewel, for example, includes scenes told through dance and mime.',
    'The **context** of a play is its background: the author’s life and beliefs, the historical period, and the culture it shows. Find it in the introduction to your edition and in class notes. Use context only when it helps explain the text: for example, a play written soon after independence may question how the new leaders use power.',
  ], 'lit-play-parts', 'Read the stage directions as carefully as the speeches.',
  ['"(Exit MAMA EKEI, slowly.)" is:', ['a stage direction', 'a line of dialogue', 'the cast list', 'a scene title'], 'It tells the actor what to do.'],
  [['Stage directions', 'Instructions in a play script about setting, movement, tone and sound.'], ['Dramatis personae', 'The list of characters in a play.'], ['Act', 'A major division of a play, made up of scenes.'], ['Context', 'The background of a work: author, period, culture.']],
  [
    { q: 'Read this opening, written for this lesson, and say what the stage directions tell us. "(The compound of CHIEF FON NDAM. Drums in the distance. NJIKA, a young teacher in a pressed white shirt, paces nervously.)"', steps: ['Setting: a chief’s compound, a traditional place of authority; the drums suggest a ceremony or a meeting.', 'Character: the "pressed white shirt" marks Njika as modern and educated; pacing "nervously" shows he is anxious.', '**The directions place a modern young man inside a traditional space, which hints at a conflict between the new and the old.**'] },
  ]),

  L('li-exposition-4', 'li-f4-playopening', '3.2', 'Exposition and first impressions of characters', 14, ['Drama'], [
    'The **exposition** is the opening part of a play that gives the audience what it needs to follow the action: who the characters are, where and when we are, the situation, and the first signs of the conflict. Playwrights give it through dialogue, stage directions, a narrator or storyteller figure, and the entrances of characters.',
    'Watch how each major character is introduced. Ask:\n- what do they say, and how?\n- what do others say about them before or after they appear?\n- what do the stage directions say about their dress, movement and tone?\n- whom do they side with or oppose?\nFirst impressions may be confirmed or overturned later; note them so you can track change.',
    'Start a **character file** for each major character from Act I: name and status, relationships, three or four traits each with evidence, key quotations, and a line for how they change. These files become the core of your revision.',
  ], 'lit-play-parts', 'Note first impressions now; you will need them to show how characters change.',
  ['The exposition of a play mainly:', ['introduces the characters, situation and first conflict', 'resolves the main conflict', 'gives the moral of the story', 'is a list of props'], 'It prepares the audience.'],
  [['Exposition', 'The opening part of a work that introduces characters, setting and situation.'], ['Character file', 'Revision notes on one character: traits, evidence, quotations and changes.'], ['Entrance', 'The moment a character comes on stage.']],
  [
    { q: 'Read this extract written for this lesson, then answer. "NJIKA: The road will come whether the elders like it or not. MAMA EKEI: (setting down her basket) And what will it carry in, my son? Only lorries? Or also strangers who will buy our land for salt? NJIKA: Progress, Mama. Schools, clinics… MAMA EKEI: Progress has a sweet mouth. (Exit.)" (1) What conflict is introduced? (2) What is your first impression of Mama Ekei?', steps: ['(1) **A conflict between modern development (the road, supported by Njika) and the fears of the traditional community (the elders and Mama Ekei).**', '(2) **She is wise and suspicious of change: her questions warn that the road may bring exploitation ("buy our land for salt"), and her saying "Progress has a sweet mouth" suggests that promises can hide danger.**'] },
  ]),

  // ---------- Conflict and irony ----------
  L('li-conflict-4', 'li-f4-conflict', '4.1', 'Rising action and conflict', 13, ['Drama', 'Plot'], [
    'Most plots follow a pattern often drawn as a pyramid:\n- **exposition**: the situation is set up\n- **inciting incident**: the event that starts the main conflict\n- **rising action**: complications build tension\n- **climax**: the turning point of greatest tension\n- **falling action**: the consequences unfold\n- **resolution** or **denouement**: the outcome; in a tragedy this is the **catastrophe**.',
    '**Conflict** is the struggle that drives the plot:\n- **internal conflict**: a struggle inside a character’s mind, such as duty against desire, or guilt against ambition\n- **external conflict**: a struggle with something outside: another character, **society** (its laws or customs), **nature**, or fate and the supernatural.',
    'To write about conflict, say who is in conflict, what causes it, how it grows, and what it reveals about the characters and the themes. Act II of a play is usually where complications multiply and characters are forced to choose.',
  ], 'lit-plot-pyramid', 'Conflict drives the plot: find who wants what, and who or what stands in the way.',
  ['A character who wants to marry for love but fears disgracing her family faces:', ['an internal conflict', 'no conflict', 'a conflict with nature', 'the denouement'], 'The struggle is in her own mind.'],
  [['Inciting incident', 'The event that sets the main conflict in motion.'], ['Rising action', 'The complications that build tension towards the climax.'], ['Internal conflict', 'A struggle within a character’s mind.'], ['External conflict', 'A struggle between a character and an outside force.']],
  [
    { q: 'In the Njika and Mama Ekei play, the government sends surveyors to mark the road through the sacred grove, and Njika must choose between his job and his village. Label the conflicts.', steps: ['Njika against the elders: **external conflict, character against society**.', 'Njika torn between his job and his loyalty to the village: **internal conflict**.', 'The surveyors’ arrival is the **inciting incident** that turns a debate into a crisis.'] },
  ]),

  L('li-dramairony-4', 'li-f4-conflict', '4.2', 'Dramatic irony and character interaction', 13, ['Drama', 'Literary devices'], [
    '**Dramatic irony** occurs when the audience knows something that a character on stage does not. It creates **suspense** (we wait for the truth to come out), **pity** (we watch a character walk into danger), or **humour** (a character boasts about something we know is false).',
    'A famous example from Shakespeare’s Macbeth: King Duncan arrives at Macbeth’s castle and praises it, saying "This castle hath a pleasant seat", while the audience already knows that Macbeth and his wife plan to murder him there that night. In Romeo and Juliet, the audience knows Juliet is only drugged, but Romeo believes she is dead.',
    'Scenes of **interaction** between characters reveal them: a confrontation shows who is stronger, an alliance shows shared aims, a deception shows who is clever and who is trusting. Look at who speaks most, who gives orders, who is silent, and who changes their mind.',
  ], 'lit-plot-pyramid', 'Ask: what do we know here that the character does not?',
  ['Dramatic irony depends on:', ['the audience knowing more than a character', 'a character telling a lie to nobody', 'a happy ending', 'a song in the play'], 'The gap in knowledge is the key.'],
  [['Dramatic irony', 'When the audience knows something that a character does not.'], ['Suspense', 'Tense uncertainty about what will happen.'], ['Confrontation', 'A scene in which characters openly oppose each other.']],
  [
    { q: 'In a play written for this lesson, the audience has seen the messenger Tabe accept money from the land buyers. In the next scene the chief says: "Tabe, you are my most honest servant. Carry my answer to the buyers yourself." Explain the irony and its effect.', steps: ['The audience knows Tabe has been bribed; the chief does not, so calling him "my most honest servant" is **dramatic irony**.', 'Effect: **suspense and pity: we fear that the chief’s trust will be betrayed and that his answer will not reach the buyers honestly.**'] },
  ]),

  // ---------- African poems ----------
  L('li-poemstructure-4', 'li-f4-africanpoems', '5.1', 'Reading a poem: lines, stanzas and voice', 13, ['Poetry'], [
    'Approach a poem in steps: read it aloud; think about the **title**; ask who is speaking, to whom, and in what situation; then look at how it is built.',
    'Structure:\n- **lines** may be **end-stopped** (the sense ends with the line) or use **enjambment** (the sentence runs on to the next line)\n- **stanzas**: a couplet (2 lines), tercet (3), quatrain (4), sestet (6), octave (8)\n- poems may have a regular pattern or be in **free verse**, with no fixed rhyme or metre\n- a **caesura** is a pause inside a line.',
    'The **speaker** or **persona** is the voice of the poem. It may be the poet, but often it is an imagined character, such as a mother, a soldier or a river. Many African poems use oral forms: the **praise poem**, the **dirge** (a song of mourning), **repetition** and the **refrain**, and **call-and-response**.',
  ], 'lit-poem-parts', 'Never assume the "I" of a poem is the poet.',
  ['A poem with no regular rhyme or metre is written in:', ['free verse', 'a sonnet', 'a ballad', 'couplets only'], 'Free verse follows natural speech rhythms.'],
  [['Enjambment', 'When a sentence runs over from one line of poetry to the next.'], ['Persona', 'The voice or character who speaks in a poem.'], ['Refrain', 'A line or phrase repeated at intervals in a poem.'], ['Dirge', 'A song or poem of mourning.']],
  [
    { q: 'Read this poem written for this lesson, "Harmattan": "The harmattan comes like a thief at dawn, / grey dust on the mango leaves, / grey dust on my mother’s wrapper, / grey dust in the throat of the morning. // The river has forgotten its song; / the children cough between their laughter. / But see: on the dry branch of the kola, / one stubborn flower opens its red mouth." Describe its structure and voice.', steps: ['Two quatrains (four-line stanzas), in free verse.', 'The speaker is a member of the family ("my mother’s wrapper"), watching the dry season in a village.', 'The repetition of "grey dust" at the start of three lines builds the feeling that dust covers everything.'] },
  ]),

  L('li-tone-4', 'li-f4-africanpoems', '5.2', 'Tone, imagery and shifts in meaning', 14, ['Poetry'], [
    '**Tone** is the speaker’s attitude to the subject. Useful tone words: nostalgic, bitter, mocking, satirical, celebratory, mournful, defiant, hopeful, ironic, angry, tender, solemn. You find tone in **diction** (word choice), imagery, punctuation and rhythm.',
    '**Imagery** is language that appeals to the senses:\n- **visual** (sight), **auditory** (sound), **olfactory** (smell)\n- **gustatory** (taste), **tactile** (touch), **kinaesthetic** (movement).\nImages are often built with figures of speech: "the throat of the morning" is a metaphor and personification at once.',
    'Many poems contain a **shift**: a turn in thought or feeling. Signals include "but", "yet", "now", "still", a new stanza, a change of tense or pronoun, or a change of imagery from dark to light. Describe it precisely: "The tone shifts from weary to hopeful when…"',
  ], 'lit-poem-parts', 'Name the tone with a precise adjective, then prove it with words from the poem.',
  ['"The tone of the poem is bitter" describes:', ['the speaker’s attitude', 'the rhyme scheme', 'the reader’s age', 'the number of stanzas'], 'Tone is attitude.'],
  [['Tone', 'The speaker’s attitude towards the subject.'], ['Diction', 'The writer’s choice of words.'], ['Imagery', 'Language that appeals to the senses.'], ['Shift', 'A turn in the thought or feeling of a poem.']],
  [
    { q: 'In "Harmattan", describe the shift in tone and the imagery that creates it.', steps: ['Stanza 1 and the start of stanza 2: a weary, oppressive tone, built by grey, dry images and sounds of illness ("the children cough").', 'The shift comes at "But see:", which calls the reader to look.', '**The tone becomes hopeful: the red flower that "opens its red mouth" is a bright visual image and a personification of life refusing to give up.**'] },
  ]),

  // ---------- The novel: opening ----------
  L('li-pov-4', 'li-f4-novelopening', '6.1', 'Narrative point of view', 13, ['Prose'], [
    'The **narrator** is the voice that tells a story; the **point of view** is the position from which it is told:\n- **first person** ("I"): a character tells the story; we share their feelings closely but know only what they know\n- **third person omniscient** ("he", "she", "they"): an all-knowing narrator can enter any character’s mind and comment on events\n- **third person limited**: the narrator stays close to one character’s thoughts\n- **second person** ("you") is rare.',
    'Point of view shapes our sympathy and our knowledge. A first-person narrator may be **unreliable**: too young, too proud or too biased to see the truth, so the reader understands more than the narrator does. Mark Twain’s Huckleberry Finn, for example, is told by a boy whose innocent comments expose the cruelty of the adults around him.',
    'Questions to ask about any novel: Who narrates? How much do they know? Can we trust them? Whose thoughts are we shown, and whose are hidden? How does this make us feel about the characters?',
  ], 'lit-point-of-view', 'Ask who tells the story, how much they know, and whether we can trust them.',
  ['A narrator who can enter the minds of all the characters is:', ['omniscient', 'first person', 'unreliable', 'limited'], 'Omniscient means all-knowing.'],
  [['Narrator', 'The voice that tells a story.'], ['Point of view', 'The position from which a story is told.'], ['Omniscient narrator', 'An all-knowing narrator who can enter any character’s mind.'], ['Unreliable narrator', 'A narrator whose account cannot be fully trusted.']],
  [
    { q: 'Rewrite in the third person limited, keeping Ewane’s viewpoint: "I hid the letter under my mattress. If Papa found it, I was finished."', steps: ['Change "I" to "Ewane" or "he" and keep his thoughts.', '**"Ewane hid the letter under his mattress. If Papa found it, he was finished."** We still share Ewane’s fear, but through a narrator outside him.'] },
  ]),

  L('li-novelopening-4', 'li-f4-novelopening', '6.2', 'Reading the opening chapters', 13, ['Prose'], [
    'The first chapters of a novel do the work of exposition: they introduce the main characters, the setting, the narrator and the tone, and they plant the first conflicts and themes. Writers also use **foreshadowing**: hints of what is to come, such as a warning, a dream or an ominous image.',
    'Keep organised notes from the first page:\n- a **chapter summary** of three or four lines for each chapter\n- a **character file** for each major character\n- a **theme tracker**: each time a theme appears, note the chapter and the incident\n- a **quotation bank** of short, key quotations.',
    'Use the author’s background when it explains the novel. Charles Dickens, for example, was sent to work in a factory as a boy when his father was imprisoned for debt, and his novels show deep sympathy for poor and mistreated children. Biography never replaces the text: always return to what the novel itself shows.',
  ], 'lit-point-of-view', 'Summarise each chapter in three or four lines as soon as you finish it.',
  ['Foreshadowing is:', ['a hint of events to come', 'a flashback to the past', 'the climax', 'a list of characters'], 'It prepares the reader.'],
  [['Foreshadowing', 'A hint or warning of events to come.'], ['Chapter summary', 'A short note of the key events and significance of a chapter.'], ['Theme tracker', 'Notes recording where and how a theme appears in a text.']],
  [
    { q: 'Write a model chapter summary for this opening written for this lesson: "Chapter 1. Sixteen-year-old Ewane is sent from his village to live with his rich uncle in Douala. On the first night his uncle’s wife locks the food cupboard and says, \'In this house, everything has a price.\'"', steps: ['Events: **Ewane moves from the village to his uncle’s house in Douala.**', 'Significance: **the locked cupboard and the aunt’s words introduce the conflict and foreshadow how Ewane will be treated.**', 'Themes: **city against village; money and family duty.**'] },
  ]),

  // ---------- Motifs and symbols ----------
  L('li-motifs-4', 'li-f4-novelmiddle', '7.1', 'Character change, motifs, subplots and symbols', 14, ['Prose'], [
    'A **dynamic** character changes in an important way; a **static** character stays the same. To track change, note three moments: how the character is at the start, the **turning point** that changes them, and how they are at the end. Explain what causes the change.',
    'Three related devices:\n- a **symbol** is an object, person, place or event that stands for an idea beyond itself: a locked cupboard can stand for greed\n- a **motif** is an image, idea or situation that **recurs** through a work, such as rain, darkness or journeys, building meaning by repetition\n- a **subplot** is a secondary story running alongside the main plot, which may mirror it, contrast with it or provide comic relief.',
    'When you meet a symbol or motif, ask: Where does it appear? Does its meaning change? How does it connect to a theme? A motif of locked doors in a novel about greed, for instance, may build the idea that the rich shut others out.',
  ], 'lit-motif-symbol', 'A symbol stands for an idea; a motif keeps coming back.',
  ['A subplot is:', ['a secondary story alongside the main plot', 'the main conflict', 'the last chapter', 'the narrator'], 'It runs beside the main story.'],
  [['Dynamic character', 'A character who changes in an important way.'], ['Symbol', 'Something that stands for an idea beyond itself.'], ['Motif', 'A recurring image, idea or situation in a work.'], ['Subplot', 'A secondary story that runs alongside the main plot.']],
  [
    { q: 'In the Ewane novel, the locked cupboard appears in chapters 1, 5 and 11; in chapter 11 Ewane himself locks a cupboard against his younger cousin. What does this show?', steps: ['The cupboard is a **symbol** of greed and exclusion, and its return makes it a **motif**.', 'In chapter 11 the meaning shifts: **Ewane has become like his aunt, so the motif shows his negative change as a dynamic character.**'] },
  ]),

  L('li-quotes-4', 'li-f4-novelmiddle', '7.2', 'Choosing and using key quotations', 12, ['Essay skills'], [
    'A **key quotation** reveals a character, develops a theme, or marks a turning point. Short quotations are best: a phrase or a single line that you can remember exactly. Group your quotations by character and by theme in your quotation bank.',
    'Use quotations correctly:\n- copy the words **exactly**, in quotation marks\n- **embed** short quotations in your own sentence: Ewane’s aunt insists that "everything has a price"\n- always **explain** the quotation: what it shows and how\n- if you cannot remember the exact words, refer precisely to the incident: "When the aunt locks the cupboard on the first night…"',
    'Avoid long quotations that fill the page without analysis, and avoid quoting words that do not prove your point. One well-explained quotation is worth more than five unexplained ones.',
  ], 'lit-motif-symbol', 'Short, exact, embedded and explained.',
  ['Which sentence embeds a quotation correctly?', ['The aunt insists that "everything has a price", which reveals her greed.', '"Everything has a price." The aunt.', 'The aunt says something about price.', 'Quote: everything price aunt.'], 'The quotation is part of the student’s own sentence and is explained.'],
  [['Key quotation', 'A short quotation that reveals character, theme or a turning point.'], ['Embedding', 'Placing a short quotation inside your own sentence.'], ['Quotation bank', 'Revision notes of short key quotations grouped by character and theme.']],
  [
    { q: 'Improve this answer: "The aunt is greedy. \'In this house, everything has a price.\'"', steps: ['Embed the quotation and explain it.', '**"The aunt’s greed is clear from her first words to Ewane, \'In this house, everything has a price\': she treats even food for a child as something to be paid for, which shows that money matters more to her than family."**'] },
  ]),

  // ---------- Climax and resolution ----------
  L('li-climax-4', 'li-f4-novelending', '8.1', 'Climax, falling action and denouement', 13, ['Prose', 'Plot'], [
    'The **climax** is the turning point of greatest tension, where the main conflict comes to a head. The **falling action** shows its consequences, and the **denouement** (from the French for "untying") resolves the plot and shows the final situation of the characters.',
    'Kinds of ending:\n- **closed**: the conflicts are settled and loose ends tied up\n- **open**: some questions are left for the reader\n- **tragic**: the downfall or death of the main character\n- **comic**: reconciliation, marriage or celebration\n- **circular**: the end returns to the situation of the opening\n- **twist**: an unexpected turn that changes how we see what came before.\n**Poetic justice** is an ending in which good is rewarded and evil punished.',
    'To discuss an ending, ask: How is the main conflict resolved? Who wins and who loses? What has changed since the opening? Is the ending fair, and does the writer want it to feel fair?',
  ], 'lit-ending', 'Compare the ending with the opening: the difference shows what the story is about.',
  ['An ending that returns to the situation of the opening is:', ['circular', 'open', 'a twist', 'a subplot'], 'It comes full circle.'],
  [['Climax', 'The turning point of greatest tension in a plot.'], ['Denouement', 'The final unravelling that resolves the plot.'], ['Poetic justice', 'An ending in which good is rewarded and evil punished.'], ['Open ending', 'An ending that leaves questions unanswered.']],
  [
    { q: 'The Ewane novel ends with Ewane, now a successful trader, sending his young nephew back to the village without food for the journey. What kind of ending is this, and what does it suggest?', steps: ['It is a **circular** ending: Ewane now treats a child as his aunt once treated him.', '**It suggests that greed can be learned and passed on, and leaves an uncomfortable, open question about whether the cycle will ever be broken.**'] },
  ]),

  L('li-purpose-4', 'li-f4-novelending', '8.2', 'The author’s message and moral purpose', 13, ['Prose', 'Themes'], [
    'The **message** or **moral purpose** of a work is what the writer wants readers to understand, question or feel about life. Writers rarely state it directly; readers infer it from:\n- the **ending** and the fate of each character\n- the narrator’s comments and tone\n- the **title**, symbols and recurring motifs\n- **irony** and satire, which criticise in order to correct.',
    'Avoid reducing a rich work to a simple proverb. Instead of "the moral is that greed is bad", write "the novel suggests that greed is learned in families and repeated across generations, and it invites the reader to ask how the cycle can be broken." Words such as **suggests**, **invites us to question**, **exposes** and **celebrates** help you write about purpose with care.',
    'Remember that the writer is not the same as the narrator or the characters. A writer may give a villain the best speeches in order to show how persuasive evil can be.',
  ], 'lit-ending', 'Write "the writer suggests…", not "the moral is…".',
  ['Satire usually aims to:', ['criticise people or society in order to correct them', 'praise everything', 'tell a love story only', 'teach grammar'], 'It mocks to reform.'],
  [['Moral purpose', 'What a writer wants readers to understand or question about life.'], ['Satire', 'Writing that uses humour, irony or exaggeration to criticise.'], ['Infer', 'To work out a meaning that is not stated directly.']],
  [
    { q: 'Write one sentence on the author’s purpose in the Ewane novel.', steps: ['Use a careful verb and link to the ending.', '**"Through Ewane’s change from victim to oppressor, the writer exposes how the city’s worship of money corrupts family duty, and invites readers to question whether wealth is worth the loss of compassion."**'] },
  ]),
];
