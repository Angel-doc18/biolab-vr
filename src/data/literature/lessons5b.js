// Literature in English lessons for Form 5: comparing characters, context
// questions and metre (term 1), stylistics (term 2), and the GCE drills, mock
// and remediation (terms 2 and 3). Passages are written for this app, or
// quoted briefly from public-domain classics.

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

export const LESSONS_5B = [
  // ---------- Comparing characters ----------
  L('li-moralgrowth-5', 'li-f5-characters', '6.1', 'Moral growth, downfall and choice', 14, ['Characterization', 'Essay skills'], [
    'To compare characters across texts, use the same questions for each:\n- **starting point**: what are they like at the beginning?\n- **choices**: what key decisions do they make, and why?\n- **influences**: which people, beliefs or pressures shape them?\n- **consequences**: what do their choices lead to?\n- **end point**: have they grown, fallen, or stayed the same?\n- **purpose**: what does the writer show through them?',
    'Some characters show **moral growth**: they learn from suffering or mistakes. Pip in Charles Dickens’s Great Expectations begins as a boy ashamed of his humble home and his loyal friend Joe, and ends humbled and grateful. Others show **moral decline** and a downfall: Macbeth moves from loyal soldier to tyrant.',
    'The richest comparisons pair characters who face **similar situations** but choose differently, or who travel in **opposite directions**. Always end with a judgement: what does the comparison reveal about the writers’ views of responsibility, society or human nature?',
  ], 'lit-character-compare', 'Compare characters by their choices, not only their traits.',
  ['A character who learns from mistakes and becomes more just shows:', ['moral growth', 'a downfall', 'no change', 'comic relief'], 'Growth is an ethical change for the better.'],
  [['Moral growth', 'A character’s development towards greater wisdom or goodness.'], ['Moral decline', 'A character’s fall into greater wrongdoing.'], ['Point of comparison', 'An aspect used to compare two characters, such as their choices.']],
  [
    { q: 'Plan a comparison of Pip (Great Expectations) and Macbeth as characters changed by ambition.', steps: ['Similarity: **both are driven by ambition for higher status: Pip to become a gentleman, Macbeth to become king.**', 'Difference in choices and consequences: **Pip’s ambition makes him a snob but he never commits violence, and suffering humbles him; Macbeth murders to gain and keep power, and each crime hardens him.**', 'Judgement: **Dickens presents ambition as a moral danger that can be corrected by love and loss, whereas Shakespeare presents it as a destructive force once conscience is overruled.**'] },
  ]),

  L('li-representation-5', 'li-f5-characters', '6.2', 'Socio-cultural representation', 14, ['Themes', 'Context'], [
    '**Representation** is the way a text portrays groups of people: women and men, elders and youth, the rich and the poor, rulers and the ruled, colonisers and the colonised, believers and non-believers. Ask:\n- who has a **voice** and who is silent?\n- who holds **power**, and how is it used?\n- are characters shown as **stereotypes** or as complex individuals?\n- does the writer **endorse** or **criticise** the society shown?',
    'Compare representation across African and non-African texts. Lady Macbeth calls on spirits to "unsex me here", rejecting the gentleness expected of women in her world, yet she is finally broken by guilt. In many African novels, women in a patriarchal village are confined to domestic roles, but writers often show their strength, wit and resistance within those limits.',
    'Avoid judging a text only by today’s values. First describe what the society of the text expects, then show how the writer presents it: accepting, questioning or exposing it.',
  ], 'lit-character-compare', 'First describe the society’s expectations, then judge how the writer treats them.',
  ['A stereotype in literature is:', ['a simplified, fixed image of a group', 'a fully developed character', 'a stage direction', 'a rhyme scheme'], 'Stereotypes flatten individuals.'],
  [['Representation', 'The way a text portrays a group of people.'], ['Stereotype', 'A simplified, fixed image of a group.'], ['Endorse', 'To approve or support a view.']],
  [
    { q: 'Write a topic sentence comparing the representation of a powerful woman in Macbeth and in an African novel in which a market woman leads a tax protest.', steps: ['Name both, the aspect, and the relation.', '**"Both Lady Macbeth and the market leader challenge what their societies expect of women, but whereas Lady Macbeth uses her power in secret to plan a murder and is destroyed by it, the market woman uses hers openly for her community and is presented as a heroine."**'] },
  ]),

  // ---------- Context questions ----------
  L('li-contextq-5', 'li-f5-context', '7.1', 'The method for context questions', 14, ['Exam skills'], [
    'A **context question** gives an extract from a set book and asks short questions. Work through it with a checklist:\n- **speaker** and **addressee**: who speaks, to whom?\n- **immediate setting**: where and when in the play or novel?\n- **before**: what happens just before the extract?\n- **after**: what happens just after?\n- **meaning**: explain particular words or lines in your own words\n- **language**: comment on imagery, irony or tone\n- **significance**: why the extract matters for plot, character or theme.',
    'Answer **each part separately** and precisely. If asked what happens before, give the immediate event, not the whole story. Use the characters’ names correctly and spelt correctly.',
    'Marks are lost by: misnaming the speaker or addressee, retelling too much, explaining meaning by repeating the words of the extract, and forgetting to explain significance.',
  ], 'lit-context-steps', 'Speaker, addressee, setting, before, after, meaning, significance.',
  ['In a context question, "what happens immediately after" asks for:', ['the next event in the text', 'the ending of the book', 'the author’s next book', 'a summary of the whole plot'], 'Only the immediate next event.'],
  [['Addressee', 'The person a speech is spoken to.'], ['Immediate setting', 'The exact place and moment of an extract in the text.'], ['Significance', 'Why an extract matters in the whole work.']],
  [
    { q: 'Extract: "If it were done when ’tis done, then ’twere well / It were done quickly." (Macbeth, Act 1, Scene 7). Answer: speaker, addressee and setting; before; after; significance.', steps: ['Speaker and setting: **Macbeth, alone on stage in a soliloquy, at his castle at Inverness while Duncan dines inside.**', 'Before: **Duncan has arrived as a guest, and Lady Macbeth has urged Macbeth to murder him that night.**', 'After: **Lady Macbeth enters; he tells her "We will proceed no further in this business", but she persuades him to go on.**', 'Significance: **the soliloquy shows Macbeth’s conscience and doubts, which makes his final choice to murder more tragic.**'] },
  ]),

  L('li-contextpractice-5', 'li-f5-context', '7.2', 'Context practice on a prose extract', 14, ['Exam skills', 'Prose'], [
    'The same method works for prose. In a novel, the "speaker" may be the narrator or a character in dialogue; the setting includes the chapter and the situation; the significance often links to a theme or to a turning point in a character’s development.',
    'Read this extract written for this lesson: "\'You call this a school fee?\' the Principal said, pushing the envelope back across the desk. \'Your father knows the price of a place in Form One.\' Ngum looked at the envelope, then at the photograph of the President on the wall behind him. \'My father knows the price,\' she said quietly. \'He sent the official fee.\'"',
    'Look for what is **implied**: the Principal does not say "bribe", but "the price of a place" suggests it. Look for **irony**: the official photograph of the head of state hangs over a corrupt act. And look at how **character** is revealed through short, quiet speech.',
  ], 'lit-context-steps', 'Explain what is implied, not only what is said.',
  ['In the extract, the Principal’s words "the price of a place" imply:', ['a demand for a bribe', 'the official school fee', 'a gift for Ngum', 'a refund'], 'He rejects the official fee and hints at more money.'],
  [['Implied meaning', 'Meaning suggested without being stated directly.'], ['Irony', 'A contrast between appearance and reality, or between what is said and what is meant.']],
  [
    { q: 'Answer: (1) Who is speaking to whom? (2) What does the photograph add? (3) What does Ngum’s reply reveal about her? (4) Which theme does the extract develop?', steps: ['(1) **The Principal speaks to Ngum, a girl seeking a place in Form One, in his office.**', '(2) **Irony: the symbol of state authority looks down on a corrupt demand, suggesting that corruption reaches the heart of public institutions.**', '(3) **She is calm, honest and brave: she repeats his words back to him and insists on the "official fee".**', '(4) **Corruption in education, and integrity in the face of it.**'] },
  ]),

  // ---------- Poetry synthesis ----------
  L('li-poetrymatrix-5', 'li-f5-poetryseminar', '8.1', 'A comparison matrix for all the poems', 13, ['Poetry', 'Study skills'], [
    'A **comparison matrix** is a table with one row per prescribed poem and columns for: poet, speaker and situation, theme, tone, key images, form and structure, sound devices, and one key line. Filling it forces you to know every poem, and it shows at a glance which poems can be compared.',
    'Group the poems by **theme** (for example nature, death, love, war, colonialism, identity, childhood) and by **style** (free verse and regular forms; bitter and celebratory tones). An examination question asking you to compare two poems on a theme then becomes a matter of choosing the best pair.',
    'For each pair you may use, prepare one similarity and two differences, each with evidence. Revise the matrix by covering a column and reciting it from memory.',
  ], 'lit-metre', 'Prepare pairs: one similarity and two differences, each with a quotation.',
  ['A comparison matrix has one row for each:', ['poem', 'stanza', 'word', 'rhyme'], 'Each row records one poem.'],
  [['Comparison matrix', 'A table comparing several texts under the same headings.'], ['Pairing', 'Choosing two poems that can be compared on a theme or style.']],
  [
    { q: 'Fill one row of the matrix for "Old Man by the Road" (lesson 5.2).', steps: ['Speaker: **an observer by a roadside.** Theme: **the neglect of the old.** Tone: **sad and accusing.**', 'Images: **lorries that "spit their dust"; a cane "like a closed gate".** Form: **one free-verse stanza.** Sound: **anaphora "Nobody… Nobody".**', 'Key line: **"what names he can no longer say".**'] },
  ]),

  L('li-scansion-5', 'li-f5-poetryseminar', '8.2', 'Metre and scansion', 15, ['Poetry'], [
    '**Metre** is a regular pattern of stressed (/) and unstressed (x) syllables. The unit is the **foot**:\n- **iamb** x / (da-DUM): be-LOW\n- **trochee** / x (DUM-da): TI-ger\n- **anapaest** x x / (da-da-DUM): un-der-STAND\n- **dactyl** / x x (DUM-da-da): MUR-mur-ing\n- **spondee** / / (DUM-DUM): HEART-BREAK.',
    'The number of feet gives the line length: monometer (1), dimeter (2), trimeter (3), **tetrameter** (4), **pentameter** (5), hexameter (6). So "iambic pentameter" is five iambs, the metre of Shakespeare’s blank verse and his sonnets: "Shall I compare thee to a summer’s day?"',
    '**Scansion** means marking the stresses to find the metre. Read the line naturally, mark the stressed syllables, then divide the line into feet. Metre creates effect: Byron’s anapaests in "The Assyrian came down like the wolf on the fold" gallop like an attacking army, while Blake’s trochees in "Tyger Tyger, burning bright" beat like a drum. A change in the pattern often marks emphasis.',
  ], 'lit-metre', 'Read aloud, mark the stresses, then count the feet.',
  ['"Tyger Tyger, burning bright" begins with which foot?', ['trochee', 'iamb', 'anapaest', 'spondee'], 'TY-ger: stressed then unstressed.'],
  [['Metre', 'A regular pattern of stressed and unstressed syllables.'], ['Foot', 'The basic unit of metre, such as an iamb or a trochee.'], ['Iambic pentameter', 'A line of five iambs.'], ['Scansion', 'Marking the stresses of a line to find its metre.']],
  [
    { q: 'Scan "Shall I compare thee to a summer’s day?"', steps: ['Mark the stresses: shall I / com-PARE / thee TO / a SUM- / mer’s DAY.', 'Five feet, each unstressed then stressed: **iambic pentameter.**'] },
    { q: 'Scan "The Assyrian came down like the wolf on the fold".', steps: ['Read it with the poem’s beat: the As-SYR- / ian came DOWN / like the WOLF / on the FOLD.', 'Four feet, each two unstressed and one stressed: **anapaestic tetrameter**, which gives a galloping, attacking rhythm.'] },
  ]),

  // ---------- Stylistics ----------
  L('li-irony-5', 'li-f5-stylistics', '9.1', 'The kinds of irony', 14, ['Literary devices'], [
    '**Irony** is a gap between appearance and reality, or between what is said and what is meant:\n- **verbal irony**: saying the opposite of what one means; **sarcasm** is bitter verbal irony; **understatement** makes something seem smaller than it is\n- **situational irony**: the outcome is the opposite of what was expected\n- **dramatic irony**: the audience knows what a character does not\n- **cosmic irony** (irony of fate): fate seems to mock human plans.',
    'In Macbeth, Duncan says of the traitor Cawdor that "There’s no art / To find the mind’s construction in the face", and at that very moment Macbeth, who will betray him, enters: the audience feels the irony. The witches’ promise that "none of woman born" shall harm Macbeth is fulfilled ironically when Macduff reveals he was "from his mother’s womb / Untimely ripped".',
    'When you identify irony, explain both sides of the gap (what seems and what is) and the effect: humour, suspense, pity or criticism.',
  ], 'lit-irony-types', 'Name both sides of the gap: what seems, and what is.',
  ['A fire station that burns down is an example of:', ['situational irony', 'dramatic irony', 'verbal irony', 'a simile'], 'The outcome is the opposite of what we expect.'],
  [['Verbal irony', 'Saying the opposite of what one means.'], ['Situational irony', 'An outcome opposite to what was expected.'], ['Sarcasm', 'Bitter verbal irony meant to mock or wound.'], ['Understatement', 'Presenting something as less important than it is.']],
  [
    { q: 'Identify the irony: after the flood destroys the market, the councillor says, "Well, at least the streets are clean now."', steps: ['He says something positive about a disaster, so it is **verbal irony**, close to sarcasm.', '**The effect is bitter humour that highlights the council’s failure to protect the market.**'] },
  ]),

  L('li-satire-5', 'li-f5-stylistics', '9.2', 'Satire, allegory, tragicomedy and narrative layers', 14, ['Literary devices', 'Style'], [
    '**Satire** criticises people, institutions or society through humour, irony and exaggeration, in order to correct them. Its tools include **caricature** (exaggerated features), **parody** (mocking imitation), **sarcasm**, **understatement** and **bathos** (a sudden drop from the grand to the ridiculous). Gentle satire smiles at folly; harsh satire attacks vice.',
    'An **allegory** is a story in which characters and events stand for ideas or real situations: George Orwell’s Animal Farm uses farm animals to tell the story of a revolution betrayed by its leaders. A **tragicomedy** mixes serious and comic elements, so we laugh and are disturbed at once.',
    '**Narrative layers** shape how a story reaches us:\n- a **frame story** contains another story told inside it\n- a **flashback** returns to earlier events\n- **multiple narrators** give different views of the same events\n- a **diary** or **letters** (an epistolary novel) give private, first-person views.\nAlways ask why the writer chose this structure.',
  ], 'lit-irony-types', 'Satire mocks in order to correct: say what is being criticised.',
  ['A story in which farm animals stand for the leaders of a revolution is:', ['an allegory', 'a sonnet', 'a frame story', 'a tragicomedy only'], 'Characters stand for real people and ideas.'],
  [['Satire', 'Writing that criticises through humour, irony and exaggeration.'], ['Allegory', 'A story whose characters and events stand for ideas or real situations.'], ['Tragicomedy', 'A work that mixes tragic and comic elements.'], ['Frame story', 'A story that contains another story told within it.']],
  [
    { q: 'Explain the satire in this sentence written for this lesson: "The Minister for Roads arrived by helicopter to open the new road, because the new road could not yet carry his car."', steps: ['Situational irony: the minister cannot use the road he is opening.', '**The writer satirises officials who celebrate unfinished projects for publicity, exposing the gap between official ceremony and reality.**'] },
  ]),

  // ---------- Paper 1 ----------
  L('li-mcq-5', 'li-f5-paper1', '10.1', 'Strategy for Paper 1', 13, ['Exam skills'], [
    'Paper 1 lasts **1½ hours**. As the scheme describes, its multiple-choice questions test literary terminology, scansion, authors, plot occurrences and context identification. Strategy:\n- read the **whole stem** and predict the answer before looking at the options\n- **eliminate** options that are clearly wrong\n- watch for **NOT** and **EXCEPT** in the stem\n- if two options seem right, choose the one that answers the stem most precisely\n- never leave a question blank.',
    'For **context items** ("Who says…?", "To whom…?", "What happens next…?"), you need precise knowledge of every set book: names, spellings, relationships and the order of events. For **author items**, know the full name of the author of each set book and of each anthology poem.',
    'For **scansion items**, read the line aloud in your head, mark the stresses, and count the feet. For **terminology items**, learn the definitions exactly: options are often close (simile and metaphor, aside and soliloquy, tone and mood).',
  ], 'lit-mcq-steps', 'Predict, then eliminate: do not let the options lead you.',
  ['When a stem says "All of the following are figures of speech EXCEPT", you choose:', ['the option that is not a figure of speech', 'the best figure of speech', 'any option', 'the longest option'], 'EXCEPT reverses the task.'],
  [['Stem', 'The question part of a multiple-choice item.'], ['Distractor', 'A wrong option designed to look plausible.'], ['Elimination', 'Removing options that cannot be correct.']],
  [
    { q: 'Answer and explain: "Is this a dagger which I see before me?" is spoken by: (A) Banquo (B) Macbeth (C) Lady Macbeth (D) Duncan', steps: ['It opens Macbeth’s soliloquy in Act 2, Scene 1, just before the murder.', '**(B) Macbeth.**'] },
    { q: 'Answer: "The furrow followed free" mainly shows: (A) onomatopoeia (B) alliteration (C) a simile (D) personification', steps: ['The f sound is repeated at the start of "furrow", "followed" and "free".', '**(B) alliteration.**'] },
  ]),

  L('li-terms-5', 'li-f5-paper1', '10.2', 'High-frequency literary terms', 15, ['Literary devices', 'Exam skills'], [
    'Terms of **language**:\n- **allusion**: a reference to a well-known person, event or text\n- **anaphora**: repetition at the start of successive lines or clauses\n- **antithesis**: contrasting ideas in balanced phrases\n- **apostrophe**: addressing someone absent, or a thing\n- **euphemism**, **hyperbole**, **litotes** (understatement by denying the opposite: "not bad")\n- **metonymy**: naming something by a thing closely linked to it ("the crown" for the king)\n- **synecdoche**: a part for the whole ("all hands on deck")\n- **oxymoron**, **paradox**, **pun**, **rhetorical question**.',
    'Terms of **structure and drama**: prologue and **epilogue**, exposition, climax, denouement, **flashback**, foreshadowing, aside, soliloquy, **chorus**, **catharsis**, **hubris**, **hamartia**, comic relief, dramatic irony.',
    'Terms of **effect**: **pathos** (the quality that arouses pity), **bathos** (an anticlimax from the serious to the trivial), **tone**, **mood**, **atmosphere**, **suspense**.',
  ], 'lit-mcq-steps', 'Learn each term with one clear example of your own.',
  ['"The pen is mightier than the sword", where pen means writing and sword means war, uses:', ['metonymy', 'onomatopoeia', 'alliteration', 'a simile'], 'Each thing is named by something closely linked to it.'],
  [['Allusion', 'A reference to a well-known person, event or text.'], ['Metonymy', 'Naming something by a thing closely associated with it.'], ['Synecdoche', 'Using a part to stand for the whole.'], ['Pathos', 'The quality in a work that arouses pity.']],
  [
    { q: 'Name the device in each: (1) "He is not the cleverest boy in the class." (meaning he is rather slow) (2) "Death, be not proud." (3) "Is this the way to treat a guest?"', steps: ['(1) **Litotes** (understatement by denial).', '(2) **Apostrophe** (addressing Death as a person).', '(3) **Rhetorical question** (asked for effect, not for an answer).'] },
  ]),

  // ---------- Paper 2 ----------
  L('li-plottelling-5', 'li-f5-paper2', '11.1', 'From plot-telling to analysis', 14, ['Essay skills'], [
    '**Plot-telling** means retelling what happens instead of answering the question. It is the most common reason for low marks. Analysis explains **how** and **why**: what an event shows about a character, how a technique creates an effect, what the writer suggests about a theme.',
    'Use the **"so what?" test**: after every sentence about an event, ask "so what?" and write the answer. Use analytical verbs: suggests, reveals, highlights, emphasises, exposes, symbolises, foreshadows, contrasts, challenges.',
    'Mention events briefly and only as evidence. One sentence of narrative should be followed by two or three of explanation.',
  ], 'lit-analysis-vs-plot', 'After every event you mention, ask "so what?" and answer it.',
  ['Which sentence is analysis rather than plot-telling?', ['Macbeth’s hallucination of a dagger reveals how guilt is already corrupting his mind.', 'Then Macbeth sees a dagger.', 'After that he goes to Duncan’s room.', 'The scene happens at night.'], 'It explains what the event shows.'],
  [['Plot-telling', 'Retelling events without analysing them.'], ['Analytical verb', 'A verb that explains meaning or effect: suggests, reveals, exposes.']],
  [
    { q: 'Turn into analysis: "Banquo sees the witches too. He does not kill anyone. Later Macbeth has him murdered."', steps: ['Keep the events brief; explain their meaning.', '**"Banquo hears the same prophecies but refuses to act on them, which shows that Macbeth’s crimes come from his own choice rather than fate. Macbeth’s decision to murder him reveals his growing fear and insecurity: the honest Banquo is a living reminder of the man Macbeth could have been."**'] },
  ]),

  L('li-sections-5', 'li-f5-paper2', '11.2', 'Essay blueprints for drama, prose and poetry', 15, ['Essay skills', 'Exam skills'], [
    'Every Paper 2 essay follows one architecture: an introduction with a **thesis**, three or four body paragraphs (point, evidence, explanation, link), and a conclusion with a final judgement. What changes is the focus of each section.',
    'Focus by section:\n- **Section A (Drama)**: remember the play is performed: dialogue, stage action, entrances, soliloquies, dramatic irony, the effect on the audience\n- **Section B (Prose)**: narration and point of view, characterization, structure (chapters, flashbacks), setting and symbolism\n- **Section C (Poetry)**: language, imagery, form, structure and sound as well as meaning; quote precisely and comment on single words.',
    'Question types: a **character** question, a **theme** question, a **technique** question ("How does the writer create suspense…?"), a **"to what extent"** question needing a balanced answer, and questions based on an extract. Answer the question as set: if it asks about two characters, every paragraph must deal with them.',
  ], 'lit-analysis-vs-plot', 'Same architecture for every section; change the focus to suit the genre.',
  ['In a Section A drama essay, it is especially important to discuss:', ['dialogue, stage action and the effect on the audience', 'only the narrator’s comments', 'only the rhyme scheme', 'the cover illustration'], 'Plays are written for performance.'],
  [['Essay architecture', 'The structure of an essay: introduction, body paragraphs, conclusion.'], ['Technique question', 'A question asking how a writer creates an effect.']],
  [
    { q: 'Write a blueprint for: "How does Shakespeare create a sense of evil in Macbeth?"', steps: ['Thesis: **"Shakespeare creates evil through the supernatural, through imagery of darkness and blood, and through the effects of the Macbeths’ crimes on nature."**', 'Paragraphs: **(1) the witches and the paradox "Fair is foul"; (2) the imagery of darkness ("Stars, hide your fires") and blood; (3) Lady Macbeth’s call to the spirits; (4) the disorder in nature after the murder.**', 'Conclusion: **evil in the play is both a supernatural force and a human choice, which makes it more frightening.**'] },
  ]),

  // ---------- Mock and remediation ----------
  L('li-mock-5', 'li-f5-mock', '12.1', 'Sitting the mock examination', 13, ['Exam skills'], [
    'The mock is a full rehearsal: Paper 1 (1½ hours) and Paper 2 (2½ hours) under official conditions, with no notes. Treat it as the real GCE: prepare the night before, arrive early, bring pens, and watch the clock.',
    'For Paper 2, share the time out according to the number of essays the paper asks for. If it requires three essays, for example, about 45 minutes each leaves 15 minutes to read the paper and check your scripts. Within each essay: about five minutes to plan, the rest to write, and a minute or two to check names and spelling.',
    'For Paper 1, move steadily: answer the questions you know first, mark the ones you are unsure of, and return to them. Never leave a blank.',
  ], 'lit-final-term', 'Divide your time before you begin, and keep to it.',
  ['If Paper 2 requires three essays in 2½ hours, a sensible plan is:', ['about 45 minutes per essay plus time to read and check', 'one hour on the first essay and the rest on the others', '2 hours on planning', 'no plan at all'], 'Equal time for equal marks.'],
  [['Time budget', 'A plan for how much time to spend on each part of a paper.'], ['Official conditions', 'Exam rules: silence, no notes, a fixed time.']],
  [
    { q: 'Make a time budget for Paper 2 if three essays are required and the paper starts at 1:00 pm.', steps: ['1:00 to 1:10: read the paper, choose questions.', '1:10 to 1:55 essay 1; 1:55 to 2:40 essay 2; 2:40 to 3:25 essay 3.', '**3:25 to 3:30: check names, spelling and that every answer is numbered correctly.**'] },
  ]),

  L('li-remediation-5', 'li-f5-mock', '12.2', 'Post-mock remediation', 14, ['Exam skills', 'Essay skills'], [
    'After the mock, study your corrected scripts. The scheme lists the errors examiners see most often:\n- **lack of critical terminology**: writing "the writer uses words to show" instead of naming the device\n- **misattributing characters**: giving a line or an action to the wrong character\n- **weak paragraph transitions**: points that do not connect\n- **misspelling characters’ names**, which suggests careless reading.',
    'Fixes:\n- learn the high-frequency terms and use them precisely\n- revise the timeline and the "who says what to whom" for each set book\n- practise transitions between paragraphs\n- make a spelling list of every character and place name, and test yourself.',
    'Rewrite your weakest mock answer using the corrections. Then write one new timed essay a week until the GCE, each time checking it against this list.',
  ], 'lit-final-term', 'Rewrite your weakest answer: correction becomes learning only when you redo it.',
  ['"The writer uses words to show the character is sad" lacks:', ['critical terminology', 'a character name', 'a full stop', 'length'], 'Name the device: imagery, tone, diction.'],
  [['Remediation', 'Correcting weaknesses found in an examination.'], ['Misattribution', 'Giving a line or action to the wrong character.'], ['Critical terminology', 'The precise vocabulary of literary analysis.']],
  [
    { q: 'Correct this paragraph: "In the play Mcbeth, Banquo says \'Is this a dagger\'. This shows he is scared. Then they kill the king."', steps: ['Spelling: **Macbeth**; the title should be underlined in handwriting.', 'Misattribution: **it is Macbeth, not Banquo, who says "Is this a dagger which I see before me?" in a soliloquy.**', 'Rewrite with terminology and analysis: **"In Macbeth’s soliloquy before the murder, the hallucination of a dagger reveals his guilty imagination, and the rhetorical questions show his fear and confusion."**'] },
  ]),
];
