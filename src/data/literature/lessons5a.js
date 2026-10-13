// Literature in English lessons for Form 5, term 1: the GCE examination and
// set-book study, non-African drama and tragedy, poetic forms and comparison,
// characters across texts, context questions and metre. Passages are written
// for this app, or quoted briefly from public-domain classics such as
// Shakespeare, which many students meet as their non-African play.

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

export const LESSONS_5A = [
  // ---------- The GCE blueprint ----------
  L('li-gceformat-5', 'li-f5-blueprint', '1.1', 'The GCE Literature examination', 12, ['Exam skills'], [
    'Ordinary Level **Literature in English** is GCE subject **0535**. On the June 2026 timetable it is examined in two papers:\n- **Paper 1** (1½ hours): multiple-choice questions on literary terms, scansion, authors, plot and context\n- **Paper 2** (2½ hours): essays. As the scheme of work sets out, Paper 2 has **Section A (Drama)**, **Section B (Prose)** and **Section C (Poetry)**.\nAlways read the instructions printed on your paper for the number of questions to answer in each section.',
    'The set books are prescribed each year in the **MINESEC national booklist**: in the scheme, an African play, a non-African play, an African prose text, a non-African prose text and poems from the national anthology. Check your school’s list for the exact titles of your year.',
    'In Form 5 the scheme finishes all set books by the **end of term 2**. Term 3 is kept for Paper 1 drills, Paper 2 essay clinics, the **mock examination** and remediation before the GCE.',
  ], 'lit-gce-0535', 'Know the exact titles, authors and spellings of every set book on your list.',
  ['Paper 2 of GCE Literature tests mainly:', ['essay writing on drama, prose and poetry', 'multiple-choice terms only', 'grammar exercises', 'translation'], 'Paper 1 is multiple choice; Paper 2 is essays.'],
  [['Set book', 'A text prescribed for study and examination in a given year.'], ['National booklist', 'The official MINESEC list of prescribed books for each class.'], ['Mock examination', 'A practice examination under real conditions.']],
  [
    { q: 'Draw up a Form 5 study plan from the scheme.', steps: ['Term 1: the non-African play, the remaining anthology poems, character comparisons and context questions.', 'Term 2: stylistics (irony, satire, allegory) and the completion of every set book.', 'Term 3: **Paper 1 drills, Paper 2 essay clinics, the mock, remediation, then the GCE.**'] },
  ]),

  L('li-setbooks-5', 'li-f5-blueprint', '1.2', 'How to study a set book', 13, ['Study skills'], [
    'Read each set book **once straight through** for the story, then a second time slowly with notes. As you read the second time, keep:\n- a **reading log**: for each chapter or scene, what happens and why it matters\n- **character files** with traits, evidence and changes\n- **theme trackers** and a **quotation bank**\n- a **timeline** of key events, so you never confuse the order.',
    'Turn your notes into active revision: make flashcards (term on one side, definition on the other; character on one side, three traits and quotations on the other), test yourself from memory, and come back to each card after a few days. Testing yourself is far more effective than re-reading.',
    'Practise answering questions regularly: a context question on a key scene, a paragraph on a theme, a full timed essay every week or two. Your notes are only useful if you can use them under time pressure.',
  ], 'lit-gce-0535', 'Test yourself from memory; re-reading alone feels useful but teaches little.',
  ['The main purpose of a timeline of a set book is to:', ['remember the correct order of events', 'decorate your notes', 'count the pages', 'replace reading the book'], 'Order matters in context and essay answers.'],
  [['Reading log', 'Notes on each chapter or scene: events and significance.'], ['Active revision', 'Revising by testing yourself rather than only re-reading.'], ['Timeline', 'A list of key events in order.']],
  [
    { q: 'Write a reading-log entry for Macbeth, Act 1, Scene 3.', steps: ['Events: **Macbeth and Banquo meet the witches, who hail Macbeth as Thane of Cawdor and future king; Ross then tells him he has been made Thane of Cawdor.**', 'Significance: **the first prophecy comes true at once, which tempts Macbeth to believe the second; his aside about "horrible imaginings" shows that murder has already entered his mind.**', 'Key quotation: **"Why do I yield to that suggestion / Whose horrid image doth unfix my hair".**'] },
  ]),

  // ---------- Non-African drama ----------
  L('li-elizabethan-5', 'li-f5-playbackground', '2.1', 'Shakespeare and the conventions of his theatre', 14, ['Drama', 'Context'], [
    'William Shakespeare (1564 to 1616) wrote for the open-air playhouses of Elizabethan and Jacobean London, such as the Globe. There was little scenery and performances were in daylight, so the **language creates the setting**: characters say where they are and describe night, storms or castles. Women’s parts were played by boys.',
    'Conventions to recognise:\n- a **five-act** structure\n- **blank verse** (unrhymed iambic pentameter) for noble characters and serious moments; **prose** for servants, comedy, letters and madness\n- **rhyming couplets** to close a scene or mark a key line\n- the **soliloquy** and the **aside**\n- **comic relief**, the supernatural, disguise and mistaken identity.',
    'Context matters for meaning. Macbeth was written soon after James I came to the English throne; James was interested in witchcraft (he wrote a book on it, Daemonologie) and traced his ancestry to Banquo. Audiences believed that kings ruled by God’s will, so killing a king was a crime against God and nature, which explains the storms and disorder that follow Duncan’s murder.',
  ], 'lit-stage-conventions', 'A switch from verse to prose (or back) is a signal: ask why.',
  ['In Shakespeare’s plays, servants and comic characters usually speak in:', ['prose', 'blank verse', 'sonnets', 'Latin'], 'Prose marks lower status or a lighter mood.'],
  [['Blank verse', 'Unrhymed lines of iambic pentameter.'], ['Comic relief', 'A humorous scene that eases tension in a serious play.'], ['Aside', 'A short remark to the audience that other characters do not hear.'], ['Divine right of kings', 'The belief that a king’s authority comes directly from God.']],
  [
    { q: 'The witches open Macbeth with "Fair is foul, and foul is fair". Comment on the line.', steps: ['It is a **paradox** and an antithesis: good and bad are reversed.', 'It introduces the theme of **appearance and reality**: in this play things are not what they seem.', '**Spoken by witches in thunder and lightning, it sets a mood of disorder and evil from the first scene.**'] },
  ]),

  L('li-openingacts-5', 'li-f5-playbackground', '2.2', 'What the opening acts establish', 13, ['Drama'], [
    'The opening acts of a tragedy usually establish:\n- the **atmosphere** (Macbeth opens with witches, thunder and lightning)\n- the **hero’s reputation** before we meet him (a wounded captain praises "brave Macbeth" in battle)\n- the **temptation** or problem (the witches’ prophecies)\n- the first **fatal choice** and the forces around the hero (Lady Macbeth’s persuasion).',
    'Study each scene with four questions: What happens? What do we learn about the characters? Which quotation sums it up? Which dramatic technique is used (aside, soliloquy, dramatic irony, contrast)?',
    'Watch for **contrast** between characters: Banquo hears the same prophecies as Macbeth but does not act on them, so he is a **foil** who shows that Macbeth’s choice was free.',
  ], 'lit-stage-conventions', 'For each scene: events, characters, a quotation, a technique.',
  ['Banquo, who hears the prophecies but does not murder, acts in the play as:', ['a foil to Macbeth', 'the antagonist', 'the narrator', 'comic relief'], 'His restraint highlights Macbeth’s choice.'],
  [['Atmosphere', 'The mood created by setting, sound and language.'], ['Temptation', 'Something that encourages a character to do wrong.'], ['Foil', 'A character who contrasts with another to highlight their qualities.']],
  [
    { q: 'Analyse Macbeth’s aside in Act 1, Scene 4: "Stars, hide your fires; / Let not light see my black and deep desires."', steps: ['It is an **aside** in a **rhyming couplet** (fires / desires), so the audience alone hears his secret.', 'Imagery of **light and darkness**: he wants darkness to hide his "black and deep desires".', '**The lines show that Macbeth already wants to kill Duncan and knows it is evil, which creates dramatic irony as Duncan continues to trust him.**'] },
  ]),

  // ---------- Tragedy and soliloquy ----------
  L('li-hamartia-5', 'li-f5-tragedy', '3.1', 'Tragedy and the tragic hero', 14, ['Drama'], [
    'The Greek philosopher Aristotle described tragedy in his Poetics. Its key terms:\n- the **tragic hero**: a person of high status, admirable but not perfect\n- **hamartia**: the tragic flaw or error that leads to the fall\n- **hubris**: excessive pride, often a form of the flaw\n- **peripeteia**: a reversal of fortune\n- **anagnorisis**: the hero’s recognition of the truth, often too late\n- the **catastrophe**: the final disaster\n- **catharsis**: the release of pity and fear felt by the audience.',
    'Examples: Macbeth’s flaw is his **ambition**; Othello’s is the jealousy that makes him trust the wrong man; critics often read Okonkwo in Things Fall Apart as a tragic hero whose fear of looking weak drives him to violence. Modern drama has also made tragic heroes of ordinary people, such as Willy Loman in Arthur Miller’s Death of a Salesman.',
    'When you write about a tragic hero, show both sides: the qualities that make us admire the hero, and the flaw and choices that destroy them. Without admiration there is no pity, and without the flaw there is no tragedy.',
  ], 'lit-tragic-arc', 'Admire the hero, then trace the flaw: that tension is the heart of tragedy.',
  ['Anagnorisis is:', ['the moment the hero recognises the truth', 'the hero’s flaw', 'the audience’s emotional release', 'the opening scene'], 'Recognition, often too late to change anything.'],
  [['Tragic hero', 'An admirable person of high status whose flaw leads to their downfall.'], ['Hamartia', 'The tragic flaw or error of judgement.'], ['Hubris', 'Excessive pride that challenges limits.'], ['Catharsis', 'The release of pity and fear felt by the audience at a tragedy.']],
  [
    { q: 'Write a paragraph arguing that Macbeth is a tragic hero.', steps: ['Admiration: **at the start he is "brave Macbeth", a loyal warrior honoured by the king.**', 'Flaw and choice: **his "vaulting ambition", fed by the witches and his wife, drives him to murder Duncan.**', 'Recognition and fall: **by Act 5 he sees that life has become "a tale / Told by an idiot", and he dies in battle; we feel pity for the waste of a great man and fear at how ambition destroys him.**'] },
  ]),

  L('li-soliloquy-5', 'li-f5-tragedy', '3.2', 'Soliloquies, asides, pacing and subplots', 14, ['Drama'], [
    'Three kinds of speech:\n- a **soliloquy**: a character alone on stage speaks their thoughts aloud; it is assumed to be honest\n- an **aside**: a short remark to the audience that other characters on stage do not hear\n- a **monologue**: a long speech addressed to other characters.\nSoliloquies reveal **motives and inner conflict**, build closeness between character and audience, and often create dramatic irony.',
    '**Dramatic pacing** is the speed of the action. Short scenes, quick exchanges and many entrances speed it up and raise tension; long speeches slow it down for reflection. After Duncan’s murder in Macbeth, short broken lines and knocking at the gate create panic.',
    'A **subplot** runs beside the main plot. It may mirror the main plot (in King Lear, Gloucester, like Lear, misjudges his children), contrast with it, or offer comic relief. Ask how the subplot comments on the main action.',
  ], 'lit-tragic-arc', 'In a soliloquy, look for the conflict: the arguments for and against.',
  ['A speech made by a character alone on stage, revealing their thoughts, is:', ['a soliloquy', 'an aside', 'a dialogue', 'a chorus'], 'Solus means alone.'],
  [['Soliloquy', 'A speech by a character alone on stage, revealing their thoughts.'], ['Monologue', 'A long speech addressed to other characters.'], ['Dramatic pacing', 'The speed at which a play’s action moves.']],
  [
    { q: 'Comment on the opening of Macbeth’s soliloquy in Act 2, Scene 1: "Is this a dagger which I see before me, / The handle toward my hand?"', steps: ['It is a **soliloquy** just before the murder, so we hear his true state of mind.', 'The **questions** show confusion and fear; the vision of a dagger "handle toward my hand" seems to invite him to act.', '**The hallucination reveals his guilty imagination and inner conflict, and the audience waits in suspense for the murder.**'] },
  ]),

  // ---------- Resolution and themes ----------
  L('li-catastrophe-5', 'li-f5-denouement', '4.1', 'The final act: catastrophe and restored order', 13, ['Drama'], [
    'In the final act the plot lines are resolved:\n- the main conflict reaches its **catastrophe** in a tragedy, or its reconciliation in a comedy\n- subplots are completed\n- the prophecies, plans or secrets of earlier acts are fulfilled or exposed\n- often **order is restored** by a new figure of authority.',
    'In Macbeth, the prophecies are fulfilled in unexpected ways (Birnam Wood "comes" to Dunsinane as soldiers carry branches), Macbeth is killed by Macduff, and Malcolm is hailed as king. Malcolm’s final words call Macbeth and his wife "this dead butcher and his fiend-like queen", a judgement the audience may find too simple after seeing Macbeth’s inner struggle.',
    'To write about an ending in drama, ask: What is resolved, and what is left uneasy? Who speaks last, and with what authority? What has been restored or lost? How does the ending make the audience feel?',
  ], 'lit-theme-map', 'Who speaks last, and do you agree with them?',
  ['At the end of Macbeth, order is restored when:', ['Malcolm is hailed as king', 'Macbeth is crowned again', 'the witches return', 'Duncan wakes up'], 'The rightful heir takes the throne.'],
  [['Catastrophe', 'The final disaster of a tragedy.'], ['Restoration of order', 'The return of rightful authority at the end of a play.'], ['Resolution', 'The settling of the conflicts of a plot.']],
  [
    { q: 'Is Malcolm’s judgement of Macbeth as a "dead butcher" a fair summary? Plan an answer.', steps: ['Agree in part: **Macbeth murders Duncan, Banquo and Macduff’s family, so "butcher" fits his actions.**', 'Disagree in part: **his soliloquies show conscience, fear and despair, which a mere butcher would not feel.**', 'Judgement: **Malcolm speaks as a political victor; the audience, who has heard Macbeth’s thoughts, sees a more tragic figure.**'] },
  ]),

  L('li-themes-5', 'li-f5-denouement', '4.2', 'Mapping the themes of a play', 14, ['Drama', 'Themes'], [
    'A **theme map** links each theme to the evidence you need: the theme, the characters who carry it, the key scenes, two or three quotations, and what the play suggests about it. Separate **primary** themes (central to the whole play) from **secondary** themes (important in parts).',
    'Themes often found in drama: ambition, power and kingship, betrayal and loyalty, guilt and conscience, fate and free will, justice, appearance and reality, love and jealousy, the supernatural, order and disorder.',
    'Build each theme with quotations from different parts of the play, so you can show development. For appearance and reality in Macbeth: the witches’ "Fair is foul, and foul is fair" (1.1); Duncan’s "There’s no art / To find the mind’s construction in the face" (1.4); Lady Macbeth’s advice to "look like th’ innocent flower, / But be the serpent under’t" (1.5).',
  ], 'lit-theme-map', 'Spread your quotations for each theme across the beginning, middle and end.',
  ['A secondary theme is:', ['important in parts of the play but not central to the whole', 'the title', 'always about love', 'the most important theme'], 'Primary themes run through the whole.'],
  [['Theme map', 'Notes linking each theme to characters, scenes and quotations.'], ['Primary theme', 'A central idea that runs through a whole work.'], ['Secondary theme', 'An idea important in parts of a work.']],
  [
    { q: 'Write a theme statement and three pieces of evidence for "guilt" in Macbeth.', steps: ['Statement: **"Shakespeare shows that guilt cannot be escaped: it destroys sleep, peace and finally sanity."**', 'Evidence: **after the murder Macbeth hears a voice cry "Macbeth does murder sleep" (2.2); Banquo’s ghost appears at the banquet (3.4); Lady Macbeth sleepwalks crying "Out, damned spot!" (5.1).**'] },
  ]),

  // ---------- Comparing poems ----------
  L('li-forms-5', 'li-f5-comparepoems', '5.1', 'Poetic forms', 13, ['Poetry'], [
    'Recognise the main **forms**:\n- **sonnet**: 14 lines, usually iambic pentameter. The Petrarchan sonnet has an octave (8 lines) and a sestet (6) with a turn, the **volta**, at line 9; the Shakespearean sonnet has three quatrains and a final couplet, rhyming ABAB CDCD EFEF GG\n- **ode**: a formal poem of praise or address\n- **elegy**: a poem of mourning\n- **ballad**: a story poem, often in quatrains with a refrain\n- **lyric**: a short poem of personal feeling\n- **dramatic monologue**: a character speaks to a silent listener and reveals themselves, as in Robert Browning’s "My Last Duchess"\n- **free verse**: no regular rhyme or metre.',
    'African poetry also uses traditional forms: the **praise poem** (celebrating a chief, a hero or an ancestor), the **dirge**, **work songs** and **call-and-response**, and the poem as a **libation** or prayer to the ancestors.',
    'Form is part of meaning. A sonnet’s tight shape suits an argument that turns at the volta; free verse suits speech and freedom; a ballad’s refrain gives the feeling of song and tradition.',
  ], 'lit-poetic-forms', 'Always ask why the poet chose this form for this subject.',
  ['A Shakespearean sonnet ends with:', ['a rhyming couplet', 'a sestet', 'a refrain', 'a free-verse line'], 'Three quatrains, then a couplet: GG.'],
  [['Sonnet', 'A 14-line poem, usually in iambic pentameter.'], ['Volta', 'The turn in thought in a sonnet.'], ['Elegy', 'A poem of mourning.'], ['Dramatic monologue', 'A poem in which a character speaks to a silent listener.']],
  [
    { q: 'A poem of 14 lines rhymes ABBAABBA CDECDE, and its argument turns at line 9. What form is it?', steps: ['14 lines: a sonnet.', 'Octave plus sestet with a turn at line 9: **a Petrarchan sonnet.**'] },
  ]),

  L('li-comparepoems-5', 'li-f5-comparepoems', '5.2', 'Comparing two poems', 15, ['Poetry', 'Essay skills'], [
    'To compare two poems, first find the **link**: a shared theme (old age, war, nature, love, colonialism) or a contrast of style. Then compare, point by point:\n- speaker and situation\n- tone and mood\n- imagery and figures of speech\n- structure and form\n- sound\n- message.',
    'Use comparison connectives: both, similarly, likewise; whereas, while, in contrast, however. Give evidence from **both** poems in each paragraph.',
    'Two poems written for this lesson:\n- "Grandmother’s Hands": "Her hands are maps of seventy harvests, / cracked like the riverbed in March; / they have planted, pounded, buried, blessed. / Tonight they braid my hair / and every knot is a story."\n- "Old Man by the Road": "He sits where the lorries spit their dust, / his cane across his knees like a closed gate. / Nobody stops. Nobody asks / what wars he carried home, / what names he can no longer say."',
  ], 'lit-poetic-forms', 'Both poems in every paragraph, with a connective that names the relation.',
  ['Which connective introduces a contrast between two poems?', ['whereas', 'similarly', 'likewise', 'both'], 'Whereas marks a difference.'],
  [['Point of comparison', 'An aspect discussed in both texts: tone, imagery, form, theme.'], ['Link', 'The shared theme or feature that justifies comparing two poems.']],
  [
    { q: 'Compare the presentation of old age in "Grandmother’s Hands" and "Old Man by the Road".', steps: ['Both poems present an old person through physical details: hands and a cane.', 'Tone: **"Grandmother’s Hands" is tender and celebratory, spoken by a grandchild ("my hair"), whereas "Old Man by the Road" is lonely and accusing, spoken by an outside observer.**', 'Imagery: **the metaphor "maps of seventy harvests" honours a life of work, while the simile "like a closed gate" shows a life shut off and ignored.**', 'Sound and structure: **the alliterative list "planted, pounded, buried, blessed" fills the grandmother’s life with action, whereas the anaphora "Nobody… Nobody" stresses neglect.** Judgement: the first poem shows old age honoured within a family; the second criticises a society that forgets its elders.'] },
  ]),
];
