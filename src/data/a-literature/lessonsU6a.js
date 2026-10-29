// A Level Literature in English lessons (0735), Upper Sixth, Term 1: tragic
// resolution and the tragic essay, style and commitment in African prose,
// modern poetry, the ending of the modern play, the anti-hero and the novel's
// ending, the anthology compared, and advanced context work. Quotations are
// short and public domain or written for this app.

const PAPER = { Drama: 'Written papers', Prose: 'Written papers', Poetry: 'Written papers', Essay: 'Written papers' };

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: PAPER[tags[0]] || 'All papers',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_LU6A = [
  // ---------- 1. Tragic resolution ----------
  L('ali-denouement-1', 'ali-u6-tragedy', '1.1', 'Acts IV and V: catastrophe, recognition and restored order', 18, ['Drama'], [
    'Diagnostic review: the year begins by re-testing Lower Sixth tools and reading examiners’ reports, which repeat one warning above all: **analyse, do not retell**.',
    'In Acts IV and V the **falling action** gathers pace: allies desert the hero, enemies unite, and signs of nature’s disorder multiply. A scene of **comic relief** or quiet pathos may come just before the end, sharpening the contrast.',
    'The **catastrophe** brings the hero’s fall and usually death. Often he reaches **anagnorisis**: Macbeth’s "Tomorrow, and tomorrow, and tomorrow" speech shows a man who has found life meaningless; Lear wakes to recognise Cordelia.',
    'Order is **restored**: a new ruler speaks the last lines, judges the dead, and promises healing. Ask what **philosophical message** the ending leaves: about ambition, justice, the cost of pride, the fragility of order.',
  ], 'ali-denouement', 'The last speech of a tragedy tells you how the play wants the hero judged: read it closely.',
  ['Who usually speaks the final lines of a Shakespearean tragedy?', ['the figure who restores order', 'the dead hero', 'the clown', 'the audience'], 'A new ruler or survivor.'],
  [['Catastrophe', 'The final disaster of a tragedy.'], ['Restoration of order', 'The return of lawful rule at the end of a tragedy.'], ['Anagnorisis', 'The hero’s recognition of the truth.']],
  [
    { q: 'What does "Tomorrow, and tomorrow, and tomorrow" reveal about the hero near the end?', steps: ['Repetition suggests weary, empty time.', 'Life seems meaningless to him.', '**It shows the despair of a man whose crimes have emptied his life of meaning.**'] },
    { q: 'Explain the function of a new ruler’s closing speech.', steps: ['It judges what has happened.', 'It promises renewal.', '**It restores order, guides the audience’s judgement of the dead, and closes the play on hope.**'] },
  ]),

  L('ali-tragic-essay-1', 'ali-u6-tragedy', '1.2', 'The tragic essay: a balanced argument on the flaw', 18, ['Essay'], [
    'Questions often ask how far the hero is **responsible** for his fall. A balanced answer weighs the **tragic flaw** (ambition, jealousy, pride, indecision) against **outside forces**: fate or the supernatural, manipulation by other characters, society and circumstance.',
    'Structure: thesis (a clear position: "largely responsible, though..."); paragraphs on the flaw with evidence; paragraphs on outside forces; a weighing paragraph; conclusion.',
    'Use the **whole play**: evidence from the beginning, the turning point and the end shows development.',
    'Avoid moralising ("he deserved it"); analyse how the play **creates sympathy** even for a guilty hero (soliloquies, suffering, recognition).',
  ], 'lit-essay-plan', 'Put your weighing word in the thesis: "largely", "partly", "chiefly". It makes your argument clear.',
  ['A balanced answer on the hero’s responsibility should:', ['weigh the flaw against outside forces', 'blame only the hero', 'blame only fate', 'retell the plot'], 'Balance.'],
  [['Tragic flaw', 'The trait that contributes to the hero’s downfall.'], ['Responsibility', 'How far the hero causes his own fall.'], ['Weighing', 'Judging the relative importance of causes.']],
  [
    { q: 'Write a thesis: "How far is the hero responsible for his own downfall?"', steps: ['Take a qualified position.', 'Name both sides.', '**The hero is largely responsible, since his ambition chooses murder, but the supernatural and his wife’s pressure push that ambition into action.**'] },
    { q: 'How does a play keep sympathy for a guilty hero?', steps: ['Inner suffering in soliloquies.', 'Recognition at the end.', '**By letting us hear his tormented conscience and witness his final recognition, the play makes us pity him even as we judge him.**'] },
  ]),

  // ---------- 2. African prose: style ----------
  L('ali-style-1', 'ali-u6-african-style', '2.1', 'Style in African prose: proverbs, Pidgin and the oral voice', 17, ['Prose'], [
    'Many African novelists **adapt English** to African experience: they weave in **proverbs**, **songs**, **folk tales**, **praise names**, **Pidgin** and **code-switching**, and rhythms of **oral storytelling**.',
    '**Proverbs** carry communal wisdom and judge events; a character’s skill with proverbs can mark eloquence and status. **Pidgin** and local registers give **realism**, show **social class** and create **humour** or intimacy.',
    'The **oral voice**: direct address to the reader, repetition, digressions, a communal "we". These choices challenge colonial ideas of what "proper" literature is.',
    'In analysis, quote the stylistic feature and explain its **effect**: on characterisation, on theme (tradition, identity), and on the reader.',
  ], 'ali-african-style', 'For any stylistic choice, say whose voice it gives the story and what that voice values.',
  ['Using Pidgin in dialogue mainly:', ['gives realism and shows social background', 'shows the writer’s errors', 'replaces the plot', 'adds rhyme'], 'Authentic voice.'],
  [['Code-switching', 'Moving between languages or registers.'], ['Oral tradition', 'Literature passed on by word of mouth.'], ['Register', 'The level and style of language used in a situation.']],
  [
    { q: 'Write an analytical sentence on a character who speaks in proverbs.', steps: ['Name the feature.', 'Explain its effect on character and theme.', '**His command of proverbs marks him as an elder of authority and roots his advice in the community’s shared wisdom.**'] },
    { q: 'Why might a narrator address the reader directly?', steps: ['It imitates a storyteller.', 'It draws the reader into the community.', '**Direct address recreates the intimacy of oral storytelling, making the reader part of the listening community.**'] },
  ]),

  L('ali-satire-1', 'ali-u6-african-style', '2.2', 'Satire, resolution and the writer’s commitment', 17, ['Prose'], [
    '**Satire** uses irony, exaggeration and humour to expose folly or vice: corrupt politicians, greedy elites, empty ceremonies. The **ironic narrator** says one thing and means another; **caricature** exaggerates a feature to mock it.',
    'The **resolution** of an African novel may be tragic (the hero destroyed by the system), ironic (the corrupt rewarded) or hopeful (a new generation). Ask what the ending **suggests about society**.',
    '**Commitment** (engagement) is the belief that literature should serve social and political change. Many African writers saw themselves as teachers or critics of their societies.',
    'In essays, connect style, ending and commitment: **how** the novel criticises, **what** it criticises, and **what** it hopes for.',
  ], 'ali-african-style', 'Ask of a satirical scene: who is mocked, by what device, and what should change?',
  ['A minister who builds himself a palace while hospitals lack drugs, described in admiring words, is an example of:', ['satire through irony', 'a sonnet', 'pathos only', 'a soliloquy'], 'Praise that condemns.'],
  [['Satire', 'Writing that criticises through humour, irony or exaggeration.'], ['Caricature', 'An exaggerated portrait for comic or critical effect.'], ['Commitment', 'The use of literature to serve social or political change.']],
  [
    { q: 'Explain how irony works in: "The honourable minister generously allowed the people to admire his new cars."', steps: ['"Honourable" and "generously" are praise.', 'The situation shows selfishness.', '**The admiring words mock the minister, exposing his vanity and the people’s poverty.**'] },
    { q: 'What might an ironic ending, where the corrupt are rewarded, suggest?', steps: ['Justice fails in the novel’s world.', 'The writer criticises society.', '**It suggests that the society rewards corruption, and implicitly calls the reader to change it.**'] },
  ]),

  // ---------- 3. Modern poetry ----------
  L('ali-freeverse-1', 'ali-u6-modern-poetry', '3.1', 'Reading free verse', 17, ['Poetry'], [
    '**Free verse** abandons regular metre and rhyme, but not form. Meaning is shaped by **line breaks**, **line length**, **stanza shape**, **repetition**, **syntax** and the rhythm of speech.',
    '**Enjambment** carries a sentence across a line break, creating momentum or surprise on the next line; **end-stopped** lines pause; a **caesura** breaks a line within itself.',
    'A short line isolates a word and gives it weight; a long line can suggest a rush or overflow of feeling; a single-word stanza can feel like a blow.',
    'In analysis, treat line breaks as choices: "By breaking the line after \'alone\', the poet leaves the word hanging, as isolated as the speaker."',
  ], 'ali-freeverse', 'Look at the last word of each line: in free verse, it is the poet’s strongest position.',
  ['In free verse, the main tool replacing metre is:', ['the line break', 'a strict rhyme scheme', 'iambic pentameter', 'the chorus'], 'Shaping by lines.'],
  [['Free verse', 'Verse without regular metre or rhyme.'], ['Enjambment', 'A sentence running over a line break.'], ['End-stopped line', 'A line that ends with a pause.']],
  [
    { q: 'Explain the effect of a one-word line, "Silence.", after long lines.', steps: ['It contrasts with the long lines.', 'It isolates the word.', '**The abrupt one-word line enacts the sudden silence, stopping the reader as the speaker is stopped.**'] },
    { q: 'What can enjambment add to a poem about running water?', steps: ['Sentences flow over line ends.', 'Form mirrors content.', '**The run-on lines imitate the unbroken flow of the water.**'] },
  ]),

  L('ali-modern-devices-1', 'ali-u6-modern-poetry', '3.2', 'Fragmentation, typography and the modern voice', 16, ['Poetry'], [
    'Modernist and contemporary poets use **fragmentation** (broken syntax, missing connectives, juxtaposed images) to mirror a broken world or mind; T. S. Eliot’s The Waste Land (1922) famously sets fragments side by side.',
    '**Typography and spacing**: gaps within lines, words scattered across the page, lower-case letters, unusual punctuation. Ask what each choice does to how we read: pace, emphasis, ambiguity.',
    'The **voice** is often **colloquial**, ironic or multiple; poems may shift between speakers without warning.',
    '**Imagism** sought exact images in few words; later poets mix registers (street language and myth). In analysis, connect the device to a theme: alienation, memory, identity, protest.',
  ], 'ali-freeverse', 'When a poem seems broken, ask what has been broken in the speaker’s world.',
  ['Fragmentation in a modern poem often suggests:', ['a broken world or a disordered mind', 'perfect harmony', 'a rhyme scheme', 'a happy ending'], 'Form mirrors theme.'],
  [['Fragmentation', 'Breaking a poem into disconnected pieces.'], ['Typography', 'The arrangement of words on the page.'], ['Juxtaposition', 'Placing contrasting things side by side.']],
  [
    { q: 'What is the effect of juxtaposing an image of a market with an image of a war grave?', steps: ['Ordinary life beside death.', 'The contrast provokes thought.', '**It shocks the reader into seeing how daily life continues beside unacknowledged loss.**'] },
    { q: 'Why might a poet write entirely in lower case?', steps: ['It removes hierarchy and formality.', 'It can suggest humility or casual speech.', '**Lower case can make the voice intimate and modest, rejecting the authority of formal language.**'] },
  ]),

  // ---------- 4. Modern drama: the ending ----------
  L('ali-resolution-1', 'ali-u6-modern-drama', '4.1', 'Climax and resolution in modern drama', 17, ['Drama'], [
    'The **climax** of a modern play may be a confrontation, a revelation, a death or a decision, often in a domestic space.',
    'Endings may be **closed** (the conflict resolved) or **open** (questions left for the audience). Many modern playwrights prefer open or ironic endings that make the audience judge.',
    'Ask how the ending **resolves the themes**: does the family survive, does truth win, does society change? What image is left on stage as the curtain falls?',
    'Evaluate the **efficiency** of the staging at the end: how lighting, sound, movement and silence convey meaning without words.',
  ], 'ali-theatre-space', 'The final stage image is the play’s last argument: describe it and say what it means.',
  ['An open ending in a modern play:', ['leaves the audience to judge unresolved questions', 'ties up every thread', 'is always happy', 'repeats Act I'], 'Unresolved.'],
  [['Climax', 'The point of greatest tension.'], ['Open ending', 'An ending that leaves questions unresolved.'], ['Final stage image', 'What the audience sees as the play ends.']],
  [
    { q: 'Interpret a final image: a mother alone at a table set for a family that has left.', steps: ['Empty places show absence.', 'The setting was meant for unity.', '**The empty table shows a family broken apart, leaving the mother alone with what remains of her hopes.**'] },
    { q: 'Why might a playwright prefer an open ending?', steps: ['The audience must think.', 'Real problems are unresolved.', '**It refuses easy comfort and pushes the audience to carry the question out of the theatre.**'] },
  ]),

  L('ali-space-1', 'ali-u6-modern-drama', '4.2', 'Space, light, sound and objects on stage', 16, ['Drama'], [
    '**Space**: where characters stand and how far apart shows relationships (closeness, power, isolation). A divided set (two rooms, inside and outside) can symbolise division.',
    '**Lighting**: time of day, mood, focus; a spotlight isolates, darkness hides, colour suggests emotion. **Sound**: offstage noises (a car, a gunshot, a crowd) bring the outside world in; music marks memory or mood.',
    '**Objects (props)** often become **symbols**: a letter, a photograph, a broken chair, a gun. Track when they appear and what happens to them.',
    'In essays, discuss staging as **meaning**: "The gradual dimming of the light across the final scene mirrors the dying hope of the family."',
  ], 'ali-theatre-space', 'Treat every object the playwright asks for as a possible symbol: why this object, here?',
  ['A gunshot heard offstage mainly:', ['brings an off-stage event into the scene and shocks the audience', 'shows the theatre’s size', 'replaces dialogue permanently', 'is a rhyme'], 'Sound effect.'],
  [['Proxemics', 'The meaning of distance between people on stage.'], ['Prop', 'An object used on stage.'], ['Offstage', 'Happening out of the audience’s sight.']],
  [
    { q: 'Interpret: two characters speak from opposite ends of the stage and never move closer.', steps: ['Distance on stage.', 'Emotional meaning.', '**The fixed distance shows an emotional gulf that their words never bridge.**'] },
    { q: 'How might a photograph on a mantelpiece work as a symbol?', steps: ['It recalls the past.', 'Characters react to it.', '**It can stand for a lost happier time that the family both clings to and cannot recover.**'] },
  ]),

  // ---------- 5. Novel: ending ----------
  L('ali-antihero-1', 'ali-u6-novel-end', '5.1', 'The anti-hero and the moral arc', 17, ['Prose'], [
    'An **anti-hero** is a protagonist who lacks conventional heroic virtues: weak, selfish, morally uncertain, or simply ordinary. Readers may sympathise while judging him.',
    'The **moral arc** traces how values change under pressure: from innocence to experience, from pride to humility, from loyalty to betrayal, or a refusal to change.',
    '**Psychological depth**: motives, desires, fears, guilt, self-deception. Novels show it through free indirect discourse, interior monologue, dreams and the gap between what a character says and does.',
    'In essays, show the arc with evidence from beginning, crisis and end, and explain how the narration shapes our judgement.',
  ], 'ali-antihero', 'Track what the character wants and what he learns: the gap is the arc.',
  ['A protagonist who is selfish and indecisive yet holds our interest is:', ['an anti-hero', 'a foil', 'a chorus', 'a narrator only'], 'Unheroic hero.'],
  [['Anti-hero', 'A protagonist without conventional heroic qualities.'], ['Interior monologue', 'The direct presentation of a character’s thoughts.'], ['Self-deception', 'Hiding the truth about oneself from oneself.']],
  [
    { q: 'Write a sentence on a character’s self-deception (invented novel).', steps: ['Name the gap between belief and reality.', 'Give evidence.', '**He tells himself he left his village to help his family, yet he never sends them money, revealing a self-deception that the narration quietly exposes.**'] },
    { q: 'Why might a novelist choose an anti-hero?', steps: ['Realism of ordinary flaws.', 'A challenge to the reader’s judgement.', '**An anti-hero reflects real human weakness and forces readers to examine their own easy judgements.**'] },
  ]),

  L('ali-novel-end-1', 'ali-u6-novel-end', '5.2', 'Climax, denouement and the meaning of an ending', 16, ['Prose'], [
    'The **climax** of a novel is the decisive confrontation or revelation; the **denouement** untangles its consequences; an **epilogue** may show the future.',
    'Endings can be **closed** (marriage, death, justice), **open**, **circular** (returning to the opening), **ironic** or **tragic**. Victorian novels often close with rewards and punishments; modern novels often leave doubt.',
    'Ask: which conflicts are resolved, which are not; what changes in the protagonist; what final image or sentence the author chooses; and how the ending **completes the themes**.',
    'Compare the opening and the final page: echoes and contrasts reveal the novel’s design.',
  ], 'lit-ending', 'Read the first and last paragraphs side by side: the novel’s shape appears at once.',
  ['A novel that ends where it began, with changed meaning, has a:', ['circular ending', 'linear exposition', 'subplot', 'prologue'], 'Return.'],
  [['Denouement', 'The resolution after the climax.'], ['Epilogue', 'A final section showing what happens later.'], ['Circular ending', 'An ending that returns to the opening situation or image.']],
  [
    { q: 'Interpret a circular ending: a hero returns to the same road where the novel began, now alone.', steps: ['Same place, changed situation.', 'Shows loss and change.', '**The repeated road measures how much he has lost, turning the hopeful journey of the opening into a solitary return.**'] },
    { q: 'What does a Victorian-style "rewards and punishments" ending suggest?', steps: ['Moral order is restored.', 'The novel affirms values.', '**It reassures readers that virtue is rewarded and vice punished, reflecting a confident moral view of society.**'] },
  ]),

  // ---------- 6. Anthology ----------
  L('ali-poem-themes-1', 'ali-u6-anthology', '6.1', 'Grouping the anthology by theme', 17, ['Poetry'], [
    'Build a **thematic matrix**: themes down one side (love, mortality, nature, war, time, identity, faith), poems across the top, and in each cell a quotation and a note on technique.',
    'Examples from public-domain poems: **love**, Shakespeare’s Sonnet 116 ("Love is not love / Which alters when it alteration finds"); **mortality**, Donne’s "Death, be not proud"; **nature**, Wordsworth’s "I wandered lonely as a cloud"; **war**, Owen’s "Dulce et Decorum Est"; **time and power**, Shelley’s "Ozymandias".',
    'Most poems belong to **more than one** theme: a war poem is also about youth and mortality; a nature poem about memory.',
    'Use the matrix to choose pairs for comparison quickly in the examination.',
  ], 'ali-poetry-themes', 'Fill every cell with a quotation, not a word: it becomes your revision bank.',
  ['Wilfred Owen’s "Dulce et Decorum Est" belongs mainly to the theme of:', ['war', 'love', 'nature', 'faith'], 'First World War.'],
  [['Thematic matrix', 'A grid linking poems to themes with evidence.'], ['Mortality', 'The fact that all must die.'], ['Anthology', 'A collection of poems by different writers.']],
  [
    { q: 'Place "Ozymandias" in two themes.', steps: ['A ruined statue of a tyrant.', 'Power and time.', '**Power and pride, and the destructive passage of time.**'] },
    { q: 'Write a matrix cell for Sonnet 116 under "love".', steps: ['A quotation.', 'A note on technique.', '**"Love is not love / Which alters when it alteration finds": the repetition of "love" and "alter" insists on love’s constancy.**'] },
  ]),

  L('ali-compare-poems-1', 'ali-u6-anthology', '6.2', 'The comparative poetry essay', 18, ['Essay'], [
    'Introduction: name both poems and poets, state the shared theme, and give a **comparative thesis** (the main likeness and the key difference).',
    'Body: **point by point** paragraphs on (1) the speaker and situation, (2) imagery and language, (3) form and structure, (4) tone and attitude; in each, evidence from **both** poems.',
    'Use **comparative connectives** (similarly, whereas, in contrast, both, unlike) and weigh: which difference matters most?',
    'Conclusion: answer the question, sum up the comparison, perhaps state which poem expresses the theme more powerfully and why. **Practice task:** compare how two anthology poems present death.',
  ], 'lit-compare', 'Give each poem a sentence in every paragraph: balance is marked.',
  ['A comparative thesis states:', ['the main likeness and the key difference', 'the plot of both poems', 'the poets’ birthdays', 'only one poem’s theme'], 'Argument.'],
  [['Comparative thesis', 'The argument stating how two texts are alike and different.'], ['Balance', 'Fair attention to each text.'], ['Weighing', 'Deciding which comparison matters most.']],
  [
    { q: 'Write a comparative thesis for Donne’s "Death, be not proud" and Owen’s "Dulce et Decorum Est".', steps: ['Shared theme: death.', 'Key difference: defiance through faith versus horror.', '**Both poems confront death, but Donne defies it with religious confidence, whereas Owen exposes its horror to destroy the lie of glorious death in war.**'] },
    { q: 'Write a comparative sentence on form.', steps: ['Donne: a sonnet; Owen: irregular stanzas.', 'Link form to attitude.', '**Donne’s controlled sonnet mirrors his calm faith, while Owen’s broken, irregular stanzas mirror the chaos of the gas attack.**'] },
  ]),

  // ---------- 7. Context workshops ----------
  L('ali-context-3', 'ali-u6-context', '7.1', 'Advanced context drills', 17, ['Exam'], [
    'Upper Sixth extracts test **precision under time**: identify, place, explain, evaluate, in answers scaled to the marks.',
    'Use a **four-part routine** for longer items: **place** (one sentence), **explain** (paraphrase the key lines), **analyse** (one device and its effect), **evaluate** (importance for plot, character or theme).',
    'Practise with **timed drills**: one extract, all questions, in a fixed time; then mark against a model and note what was missing.',
    'Common losses: wrong speaker, vague placing ("somewhere in the middle"), explaining without quoting, ignoring the mark allocation.',
  ], 'lit-context-steps', 'Look at the marks before you write: one mark, one fact; six marks, three developed points.',
  ['"Somewhere in the middle of the play" as placing an extract is:', ['too vague to earn marks', 'ideal', 'required', 'a full answer'], 'Precision.'],
  [['Mark allocation', 'The number of marks a question carries.'], ['Placing', 'Locating an extract exactly in the work.'], ['Evaluation', 'Judging the importance of an extract.']],
  [
    { q: 'Write a precise placing for an extract where a hero sees a dagger before a murder (Macbeth, Act 2).', steps: ['Name the act and the moment.', 'Link to what follows.', '**It is Act 2, Scene 1, just before Macbeth goes to murder Duncan, as he waits for the bell that signals the moment.**'] },
    { q: 'Give the four-part routine for a 6-mark extract question.', steps: ['Place and explain.', 'Analyse and evaluate.', '**Place the extract, explain its key lines, analyse one device, and evaluate its importance.**'] },
  ]),

  L('ali-citation-1', 'ali-u6-context', '7.2', 'Rapid citation and the quotation bank', 16, ['Exam'], [
    'A **quotation bank** holds short quotations (two to eight words) for each set text, organised by **character** and **theme**, with a note on technique and possible use.',
    'Learn quotations **actively**: write them from memory, test a partner, attach each to an argument.',
    'Cite **exactly**: wrong words weaken the point. If unsure of the exact words, **paraphrase** clearly and give a precise reference ("in his final speech").',
    '**Practice task:** build twenty quotation cards per set text and use them in a timed essay plan within ten minutes.',
  ], 'ali-context-answer', 'Short quotations are easier to remember and easier to embed: choose the two or three words that carry the meaning.',
  ['If you cannot remember a quotation exactly, you should:', ['paraphrase and give a precise reference', 'invent the words', 'skip the point', 'quote another text'], 'Honesty and precision.'],
  [['Quotation bank', 'A personal collection of short quotations organised for revision.'], ['Paraphrase', 'Restating in your own words.'], ['Reference', 'A precise indication of where something occurs in the text.']],
  [
    { q: 'Write a quotation-bank card for "I am not what I am".', steps: ['Speaker and context.', 'Theme and technique.', '**Iago, Act 1: theme of deception; paradox reveals his hidden identity; use for essays on appearance and reality.**'] },
    { q: 'Paraphrase with reference when unsure of words: Lady Macbeth calls on spirits to remove her feminine qualities.', steps: ['Give the content.', 'Give the place.', '**In Act 1, Scene 5, Lady Macbeth calls on dark spirits to strip her of womanly pity so she can act cruelly.**'] },
  ]),
];
