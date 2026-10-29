// A Level Literature in English lessons (0735), Lower Sixth, Term 1: critical
// terms, Shakespeare's theatre and Act I, complication and themes, scansion,
// the turning point and character, African prose, metaphysical and early
// African verse, and the PEEL essay. Set books change, so lessons teach
// methods; quotations are short and public domain (Shakespeare, Donne) or
// written for this app.

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

export const LESSONS_LL6A = [
  // ---------- 1. Critical terms ----------
  L('ali-tragic-1', 'ali-l6-terms', '1.1', 'Aristotle and the terms of tragedy', 18, ['Terms'], [
    'Diagnostic start: the year opens with a test of O Level skills (identifying devices, writing an analytical paragraph, reading speed). A Level answers are marked for **analysis**, **argument** and **use of the text**, not for retelling the story.',
    'In the **Poetics** (4th century BC), Aristotle described tragedy as the imitation of a serious action that arouses **pity and fear**. Its key terms: **hamartia** (the hero’s error or flaw), **hubris** (excessive pride, a common hamartia), **peripeteia** (the reversal of fortune), **anagnorisis** (the hero’s recognition of the truth) and **catharsis** (the audience’s release of pity and fear).',
    'The **tragic hero** is usually of high rank, admirable but flawed, so that the audience can both respect and pity him; his fall is caused partly by his own choices.',
    'Use the terms **precisely** and **with evidence**: not just "Macbeth has hubris", but which words or actions show it and how they lead to his fall.',
  ], 'ali-tragic-terms', 'Name the term, show it in a quotation or event, then explain what it does to the hero or the audience.',
  ['The moment a tragic hero finally understands his mistake is:', ['anagnorisis', 'peripeteia', 'hubris', 'catharsis'], 'Recognition.'],
  [['Hamartia', 'The tragic hero’s error or flaw.'], ['Peripeteia', 'A sudden reversal of fortune.'], ['Catharsis', 'The release of pity and fear felt by the audience.']],
  [
    { q: 'Apply the terms to a summary: a proud general defies the gods, wins power, loses everything, and at last admits his folly; the audience leaves moved.', steps: ['Defying the gods: hubris, his hamartia.', 'Losing everything after winning: peripeteia; admitting folly: anagnorisis.', '**The audience’s feeling at the end is catharsis.**'] },
    { q: 'Improve: "The hero has a flaw."', steps: ['Name the flaw and the term.', 'Show its effect.', '**The hero’s hamartia is his ambition, which drives him to murder and leads directly to his downfall.**'] },
  ]),

  L('ali-stage-1', 'ali-l6-terms', '1.2', 'Soliloquy, aside, dramatic irony, pathos and foreshadowing', 17, ['Terms'], [
    'A **soliloquy** is a speech by a character **alone** on stage, revealing private thoughts and motives: Hamlet’s "To be, or not to be" weighs life against death. An **aside** is a short remark to the audience **while others are present** but cannot hear it.',
    '**Dramatic irony** arises when the **audience knows** something a character does not: we know the guest is planning murder while the host praises his loyalty. It creates tension and often pathos.',
    '**Pathos** is the quality that arouses **pity** or sorrow: an innocent character suffering, a child’s death, a hero’s lonely end.',
    '**Foreshadowing** hints at later events: the witches’ riddling words in Macbeth, "Fair is foul, and foul is fair", announce a world where appearances deceive.',
  ], 'lit-stage-conventions', 'Alone on stage → soliloquy; others present but deaf to it → aside.',
  ['A character whispers a cruel plan to the audience while his victim stands beside him. This is:', ['an aside', 'a soliloquy', 'a chorus', 'an epilogue'], 'Others are present.'],
  [['Soliloquy', 'A speech by a character alone on stage that reveals private thoughts.'], ['Aside', 'A brief remark to the audience that other characters do not hear.'], ['Dramatic irony', 'When the audience knows more than a character does.']],
  [
    { q: 'Explain the dramatic irony: a king says of a guest, "He is a loyal friend", and the audience has just heard the guest plan the king’s death.', steps: ['The audience knows the plan; the king does not.', 'His trust is misplaced.', '**The irony creates tension and pity, as we watch the king praise the man who will kill him.**'] },
    { q: 'How does "Fair is foul, and foul is fair" foreshadow the play?', steps: ['It reverses good and bad.', 'Later, characters who seem loyal are treacherous.', '**It warns the audience that in this play appearances will deceive and values will be overturned.**'] },
  ]),

  // ---------- 2. Shakespeare: context and Act I ----------
  L('ali-globe-1', 'ali-l6-shakespeare', '2.1', 'The Elizabethan and Jacobean theatre', 17, ['Drama'], [
    'Shakespeare (1564 to 1616) wrote under **Elizabeth I** (1558 to 1603) and **James I** (from 1603). His company performed at the **Globe** (built 1599), an open-air playhouse on the south bank of the Thames, and later also indoors at the Blackfriars.',
    'The **thrust stage** jutted into the yard, with the audience on three sides: **groundlings** standing in the yard for a penny, richer spectators in the **galleries**. Behind the stage, the **tiring house** held costumes and had doors for entrances; a **balcony** above served for upper scenes; a **trapdoor** for ghosts and graves.',
    'Plays were performed in **daylight** with **little scenery**: the words created time and place ("This castle hath a pleasant seat"). **Boys** played women’s roles. Costumes were rich; music and sound effects (thunder, trumpets) helped.',
    'Context matters for meaning: belief in the **divine right of kings** and the **great chain of being** (order in nature and society) makes regicide a crime against God and nature; James I’s interest in **witchcraft** gives the witches of Macbeth extra force.',
  ], 'ali-globe', 'When a scene is set by words alone, quote them: they show Shakespeare’s craft and the stage conditions at once.',
  ['Why do Shakespeare’s characters often describe the time of day and the place?', ['plays had little scenery and were performed in daylight', 'the audience was blind', 'the actors forgot their lines', 'it was required by law'], 'Spoken scenery.'],
  [['Groundlings', 'The poorest spectators, who stood in the yard.'], ['Thrust stage', 'A stage that extends into the audience on three sides.'], ['Divine right of kings', 'The belief that monarchs rule by God’s will.']],
  [
    { q: 'Explain why killing a king was especially shocking to Shakespeare’s audience.', steps: ['Kings were believed to rule by divine right.', 'The great chain of being linked social order to nature.', '**Regicide was seen as a sin against God that threw nature itself into disorder.**'] },
    { q: 'List three features of the Globe that affect how a scene is staged.', steps: ['Daylight and little scenery.', 'Thrust stage with audience close on three sides.', '**Words set the scene, soliloquies speak directly to a near audience, and the trapdoor or balcony serve special effects.**'] },
  ]),

  L('ali-exposition-1', 'ali-l6-shakespeare', '2.2', 'Reading Act I: exposition, mood and character', 18, ['Drama'], [
    'Act I sets out the **exposition**: the situation, the main characters, their relationships, and the seeds of conflict. Read it asking: **who** has power, **what** is wrong in this world, and **what** desire or threat will drive the action?',
    '**Mood** is created at once: storms, darkness, battles or celebrations; short urgent lines or slow formal speeches. The opening of Macbeth, with thunder, witches and riddles, creates unease before the hero appears.',
    '**Character positioning**: notice how a character is introduced. A hero praised by others before he enters (as Macbeth is called "brave" in battle reports) sets up expectations the play may overturn.',
    'Keep a **scene log**: for each scene of Act I, note its events, the key quotation, and what it introduces (a theme, a conflict, a trait).',
  ], 'lit-plot-pyramid', 'For each scene, write one line: what happens, one quotation, and why it matters.',
  ['The exposition of a play mainly:', ['introduces the characters, situation and conflict', 'resolves the conflict', 'is the most violent scene', 'gives the moral'], 'Act I.'],
  [['Exposition', 'The opening part of a play that sets out the situation and characters.'], ['Mood', 'The atmosphere a scene creates.'], ['Scene log', 'A record of each scene’s events, quotation and importance.']],
  [
    { q: 'Write a scene-log entry for an opening scene of thunder, witches and a riddle.', steps: ['Event: witches meet in a storm.', 'Quotation: "Fair is foul, and foul is fair".', '**Importance: creates a mood of disorder and introduces the theme of deceptive appearances.**'] },
    { q: 'Why does praising the hero before he appears matter?', steps: ['It builds expectation.', 'His later actions can contrast with it.', '**It makes his fall more striking, because we first see him as admirable.**'] },
  ]),

  // ---------- 3. Complication ----------
  L('ali-subplot-1', 'ali-l6-complication', '3.1', 'Complication and the subplot', 17, ['Drama'], [
    'In Act II the **complication** raises the conflict: a plan is carried out, a secret deepens, new obstacles appear. Track **cause and effect**: each event should lead to the next.',
    'A **subplot** is a secondary line of action. It may **mirror** the main plot (a second family torn apart, as Gloucester’s family parallels Lear’s in King Lear) or **contrast** with it (comic scenes that relieve or sharpen the tragedy).',
    'Characters who act as **foils** highlight the hero by contrast: Banquo hears the same prophecy as Macbeth but does not act on it.',
    'In an essay, show how the subplot **adds meaning**: it repeats a theme in another key, widens the play’s view of society, or prepares the ending.',
  ], 'ali-subplot', 'Ask of every subplot: what does it echo, and what does it change?',
  ['Gloucester’s story in King Lear mainly:', ['mirrors Lear’s story of a father deceived by his children', 'has no link to Lear', 'is a comic interlude', 'replaces the main plot'], 'Parallel plot.'],
  [['Complication', 'The development that raises conflict and stakes.'], ['Subplot', 'A secondary line of action in a play.'], ['Foil', 'A character whose contrast highlights another.']],
  [
    { q: 'Explain how Banquo acts as a foil to Macbeth.', steps: ['Both hear the witches’ prophecies.', 'Banquo is wary; Macbeth acts on ambition.', '**Banquo’s restraint makes Macbeth’s choice to murder appear more clearly his own.**'] },
    { q: 'Give two functions of a subplot in a tragedy.', steps: ['It can mirror the theme.', 'It can relieve or sharpen tension.', '**It repeats the main theme in another family or class, and it varies the pace with contrasting scenes.**'] },
  ]),

  L('ali-themes-1', 'ali-l6-complication', '3.2', 'Tracing a theme through the play', 16, ['Drama'], [
    'A **theme** is an idea the play explores, not a single word: not just "ambition" but "ambition that ignores moral limits destroys the self".',
    'Trace a theme with a **theme map**: list the scenes where it appears, a short quotation for each, and how it **develops** (introduced, tested, reversed, resolved).',
    'Themes are carried by **characters**, **language** (recurring images such as blood, sleep, darkness), **events** and **structure** (a repeated situation).',
    'Common tragic themes: ambition, power and corruption, appearance and reality, order and disorder, justice, loyalty and betrayal, fate and free will.',
  ], 'lit-theme-map', 'State a theme as a sentence about life: it turns description into argument.',
  ['Which is a theme stated as an idea?', ['Unchecked ambition destroys those who pursue it.', 'Ambition.', 'Act II, Scene 1.', 'Macbeth is a play.'], 'A full statement.'],
  [['Theme', 'A central idea explored in a work.'], ['Theme map', 'A record of where and how a theme appears and develops.'], ['Image pattern', 'A recurring image that develops a theme, such as blood.']],
  [
    { q: 'Turn "betrayal" into a thematic statement.', steps: ['Make it a claim about people or society.', 'Keep it arguable.', '**Betrayal by those closest to us causes deeper ruin than open enmity.**'] },
    { q: 'How can recurring images of blood develop a theme of guilt?', steps: ['Track where blood appears.', 'Note the change from honour to guilt.', '**Blood first marks battlefield honour, then becomes a stain of guilt that the murderers cannot wash away.**'] },
  ]),

  // ---------- 4. Scansion ----------
  L('ali-metre-1', 'ali-l6-scansion', '4.1', 'Feet, metre and scansion', 18, ['Poetry'], [
    '**Prosody** is the study of rhythm and sound in verse. **Scansion** marks each syllable as **stressed** (/) or **unstressed** (x) and divides the line into **feet**.',
    'The feet: **iamb** (x /: "be-LOW"), **trochee** (/ x: "GAR-den"), **anapaest** (x x /: "in-ter-VENE"), **dactyl** (/ x x: "BEAU-ti-ful"), **spondee** (/ /: "HEART-BREAK").',
    'Line lengths: **tetrameter** (four feet), **pentameter** (five), **hexameter** (six). **Iambic pentameter** has five iambs: "Shall I com-PARE thee TO a SUM-mer’s DAY?" (Sonnet 18), x / x / x / x / x /.',
    'Poets **vary** the metre for effect: a **trochaic** opening ("DOU-ble, DOU-ble") or a heavy **spondee** slows or stresses a line. Comment on a variation only when you can say what it does to meaning.',
  ], 'ali-feet', 'Say the line aloud naturally first; mark the stresses you hear, then look for the pattern.',
  ['"PRE-cious" has the stress pattern of:', ['a trochee', 'an iamb', 'an anapaest', 'a spondee'], 'Stressed, unstressed.'],
  [['Scansion', 'Marking stressed and unstressed syllables to find the metre.'], ['Foot', 'A unit of rhythm, such as an iamb.'], ['Iambic pentameter', 'A line of five iambs.']],
  [
    { q: 'Scan: "The CUR-few TOLLS the KNELL of PART-ing DAY" (Gray).', steps: ['Mark: x / x / x / x / x /.', 'Five iambs.', '**Iambic pentameter.**'] },
    { q: 'What is the effect of opening a line with a stressed syllable, "Double, double, toil and trouble"?', steps: ['The stresses fall first: trochaic.', 'It sounds like a chant.', '**The trochaic beat gives the witches’ spell a heavy, incantatory rhythm unlike the iambic speech of the nobles.**'] },
  ]),

  L('ali-stanza-1', 'ali-l6-scansion', '4.2', 'Blank verse, rhyme schemes and stanza forms', 16, ['Poetry'], [
    '**Blank verse** is unrhymed iambic pentameter: Shakespeare’s dramatic verse and Milton’s Paradise Lost. **Free verse** has no regular metre or rhyme; it relies on line breaks, repetition and rhythm of speech.',
    '**Rhyme schemes** are marked with letters: a quatrain rhyming abab, a couplet aa. **Internal rhyme** falls within a line; **half-rhyme** (pararhyme) almost rhymes (escaped / scooped).',
    'Stanza forms: **couplet** (2 lines), **tercet** (3), **quatrain** (4), **sestet** (6), **octave** (8). The **sonnet** has 14 lines: the **Petrarchan** sonnet divides into an octave and a sestet with a **volta** (turn); the **Shakespearean** sonnet has three quatrains and a final couplet (abab cdcd efef gg).',
    'In analysis, link form to meaning: a final couplet that resolves a problem, a broken stanza that mirrors grief, a regular rhyme that suggests control or irony.',
  ], 'lit-poetic-forms', 'Never just label a form: say what the form does to the poem’s meaning.',
  ['In a Petrarchan sonnet, the volta usually comes:', ['between the octave and the sestet', 'in the last word', 'in the title', 'after line 2'], 'The turn at line 9.'],
  [['Blank verse', 'Unrhymed iambic pentameter.'], ['Volta', 'The turn in argument or mood in a sonnet.'], ['Half-rhyme', 'An imperfect rhyme of similar sounds.']],
  [
    { q: 'Mark the rhyme scheme: day / temperate / May / date.', steps: ['day and May rhyme: a.', 'temperate and date rhyme: b.', '**abab.**'] },
    { q: 'Why might a sonnet end with a rhyming couplet?', steps: ['The couplet stands apart.', 'It can sum up or twist the argument.', '**It gives a memorable conclusion that resolves or overturns the problem of the quatrains.**'] },
  ]),

  // ---------- 5. Turning point ----------
  L('ali-turning-1', 'ali-l6-turning', '5.1', 'Act III: the turning point and the shift of power', 17, ['Drama'], [
    'In many five-act tragedies, **Act III** holds the **turning point**: the hero commits an irreversible act or makes a fatal mistake, and fortune begins to turn against him (**peripeteia**).',
    'Look for **shifts in power**: who gives orders, who obeys, who knows secrets. A character at the height of power may already be losing control (paranoia, isolation, new enemies).',
    'The action then **falls** towards the **catastrophe**. Signs of intensification: shorter speeches, broken verse lines, interruptions, rising violence, supernatural signs.',
    'In an essay, explain why the turning point is placed where it is and how it changes the audience’s sympathy.',
  ], 'lit-tragic-arc', 'Find the moment after which nothing can be undone: that is your turning point.',
  ['After the turning point of a tragedy, the action:', ['falls towards the catastrophe', 'returns to the start', 'becomes comic', 'stops'], 'Falling action.'],
  [['Turning point', 'The moment after which the hero’s fortune declines.'], ['Catastrophe', 'The final disaster of a tragedy.'], ['Falling action', 'The events between the turning point and the catastrophe.']],
  [
    { q: 'Why can the turning point come at the hero’s apparent height of power?', steps: ['Success can isolate and corrupt.', 'The act that secures power creates new enemies.', '**At the peak, his crimes begin to work against him, so triumph and fall coincide.**'] },
    { q: 'Name two signs of intensification in a scene.', steps: ['Language becomes broken or urgent.', 'Action speeds up.', '**Short, interrupted lines and a rapid series of entrances and violent events.**'] },
  ]),

  L('ali-character-1', 'ali-l6-turning', '5.2', 'How drama reveals character', 16, ['Drama'], [
    'Drama has no narrator, so character is revealed through **what a character says** (and how: verse or prose, formal or broken), **what they do**, **what others say about them**, **soliloquies** and **asides**, and **stage directions**.',
    'Compare **words and actions**: a character who speaks of loyalty while plotting betrayal shows hypocrisy; one who hesitates in words but acts boldly shows inner conflict.',
    'Watch **change**: is the character **dynamic** (changing under pressure) or **static**? Track key moments with quotations.',
    'In an essay on a character, avoid lists of adjectives. Build an **argument**: "Lady Macbeth’s strength is a mask that cracks", supported by evidence from beginning, middle and end.',
  ], 'lit-characterization', 'For every trait you claim, give a quotation and say where it comes in the play.',
  ['Without a narrator, a play reveals character mainly through:', ['speech, action and what others say', 'chapter headings', 'footnotes', 'the book cover'], 'Dramatic method.'],
  [['Characterisation', 'The way a writer reveals a character.'], ['Dynamic character', 'A character who changes under pressure.'], ['Hypocrisy', 'A gap between what someone says and what they do.']],
  [
    { q: 'Turn a list into an argument: "The villain is clever, cruel and lying."', steps: ['Find what links the traits.', 'Make a claim.', '**The villain’s intelligence is entirely put to the service of deception, which makes his cruelty all the more dangerous.**'] },
    { q: 'How can a switch from verse to prose reveal character?', steps: ['Verse often marks control or nobility.', 'Prose can show madness, low status or informality.', '**A noble character who drops into broken prose may be losing control of reason.**'] },
  ]),

  // ---------- 6. African prose ----------
  L('ali-narrative-1', 'ali-l6-african-prose', '6.1', 'Narrative technique in the African novel', 17, ['Prose'], [
    'Read the **context** first: the colonial past, independence (most African states in the 1950s and 1960s), the post-independence state, urbanisation, and the writer’s community. The context explains the questions the novel asks.',
    '**Narrative technique**: who narrates (first person, third person), how close the narration is to a character, the **structure** (chronological, flashbacks, parts), the **setting** (village, city, period) and the **time** span.',
    'Many African novels draw on **oral tradition**: proverbs, folk tales, songs, a communal voice. Note where the narrator speaks like a griot or storyteller.',
    'Process the opening chapters with a log: events, characters introduced, key quotation, and what each chapter sets up.',
  ], 'ali-narrative', 'Name the narrator in your first sentence about technique: everything else follows from who tells the story.',
  ['A narrator who speaks for a whole village as "we" is a:', ['communal narrator', 'omniscient narrator', 'unreliable narrator only', 'stage direction'], 'Collective voice.'],
  [['Narrative technique', 'The methods by which a story is told.'], ['Oral tradition', 'Stories, proverbs and songs passed on by word of mouth.'], ['Setting', 'The time, place and society of a story.']],
  [
    { q: 'Explain why a novel’s context matters in an essay.', steps: ['Context shapes the conflicts.', 'It explains attitudes and themes.', '**Knowing that a novel is set just after independence explains its anger at leaders who betray the people’s hopes.**'] },
    { q: 'What does a proverb add to an African novel’s narration?', steps: ['It roots the voice in oral culture.', 'It carries communal wisdom.', '**A proverb gives the narration the authority of shared tradition and comments on events with the community’s judgement.**'] },
  ]),

  L('ali-african-1', 'ali-l6-african-prose', '6.2', 'Protagonists, antagonists and themes in African prose', 17, ['Prose'], [
    'Follow the **protagonist’s path**: desire, obstacles, choices, change. The **antagonist** may be a person, a group, a system (colonial rule, a corrupt state) or the protagonist’s own weakness.',
    'Recurring themes: the **clash of cultures** (tradition and colonial or Western ways), **neo-colonial disillusionment** (independence betrayed by new elites), **alienation** (the educated returnee who belongs nowhere), **corruption** and **power**, the place of **women**, and **identity**.',
    'Show themes through **evidence**: a scene, a dialogue, a symbol, the narrator’s comment.',
    '**Practice task:** for your prescribed novel, write a one-paragraph PEEL answer on how the protagonist embodies one theme.',
  ], 'lit-african-themes', 'Name the system behind the person: in many African novels the real antagonist is a social order.',
  ['A character educated abroad who returns and feels he belongs nowhere illustrates:', ['alienation', 'catharsis', 'scansion', 'hubris'], 'Cut off.'],
  [['Protagonist', 'The main character.'], ['Antagonist', 'The person or force opposing the protagonist.'], ['Disillusionment', 'Disappointment when hopes prove false.']],
  [
    { q: 'Write a thematic statement on neo-colonial disillusionment.', steps: ['Name what was hoped for.', 'Say what happened.', '**Independence promised freedom and prosperity, but a new elite reproduced the greed and oppression of the colonial rulers.**'] },
    { q: 'How can a system be an antagonist?', steps: ['The obstacles come from rules and institutions.', 'No single villain explains the suffering.', '**When a corrupt administration blocks every honest effort, the state itself becomes the force the hero struggles against.**'] },
  ]),

  // ---------- 7. Metaphysical and early African verse ----------
  L('ali-conceit-1', 'ali-l6-metaphysical', '7.1', 'The metaphysical conceit', 17, ['Poetry'], [
    'The **metaphysical poets** of the early 17th century (John Donne, George Herbert, Andrew Marvell) wrote with **wit**, **argument** and surprising images drawn from science, geography and theology.',
    'A **conceit** is an extended, ingenious comparison between very unlike things. In "A Valediction: Forbidding Mourning", Donne compares two parted lovers to the two legs of a pair of **compasses**: one stays fixed while the other travels, and the fixed one leans after it and makes its circle "just".',
    'Metaphysical poems often **argue**: they address someone directly, reason step by step, and turn the argument at the end. Donne’s "Death, be not proud" argues against Death itself, ending "Death, thou shalt die".',
    'In analysis, explain **both sides** of the conceit (what is compared to what), **how far** it is developed, and **what it proves** in the poem’s argument.',
  ], 'ali-conceit', 'For a conceit, write two columns: the image and the idea; match each detail of one to the other.',
  ['In Donne’s compass conceit, the fixed foot represents:', ['the lover who stays behind', 'the lover who travels', 'Death', 'God'], 'She stays at the centre.'],
  [['Conceit', 'An extended, surprising comparison.'], ['Metaphysical poetry', '17th-century verse of wit, argument and learned imagery.'], ['Apostrophe', 'Addressing someone absent or something non-human.']],
  [
    { q: 'Explain the paradox "Death, thou shalt die".', steps: ['Death is spoken to as a person.', 'In Christian belief, the dead rise to eternal life.', '**If the soul lives for ever, death itself is defeated: Death "dies".**'] },
    { q: 'Write a sentence analysing the compass conceit.', steps: ['State both sides.', 'Say what it shows.', '**By comparing the lovers to compass legs, Donne argues that their love stays joined however far apart they move, since one always leans towards the other.**'] },
  ]),

  L('ali-voice-1', 'ali-l6-metaphysical', '7.2', 'Imagery clusters, persona and early African verse', 16, ['Poetry'], [
    'An **imagery cluster** is a group of related images (light and dark, water, journey, blood) that recur and build a meaning. List them and ask how they **change** across the poem.',
    'The **persona** is the speaking voice, which may differ from the poet. Notice **shifts**: from "I" to "we", from description to address, from calm to anger. A shift often marks the poem’s **turn**.',
    'Early African written verse often draws on **oral forms** (praise poems, call and response, drum rhythms), celebrates **heritage**, mourns loss, or asserts **identity**. The **Negritude** movement (Léopold Sédar Senghor, Aimé Césaire) affirmed Black African culture against colonial contempt.',
    'In your notes for each anthology poem: persona, addressee, situation, imagery clusters, form, tone, and the turn.',
  ], 'lit-poem-parts', 'Find the poem’s turn by following the voice: where does the speaker change tone or address?',
  ['A poem that moves from "I" to "we" may be showing:', ['a shift from personal to communal voice', 'a spelling error', 'a change of metre only', 'nothing'], 'Voice shift.'],
  [['Persona', 'The speaking voice of a poem.'], ['Imagery cluster', 'A group of related recurring images.'], ['Negritude', 'A movement affirming Black African culture and identity.']],
  [
    { q: 'How might water imagery change across a poem about exile?', steps: ['Early: the home river, life and memory.', 'Later: the sea that separates.', '**Water moves from a symbol of home and renewal to an image of distance and loss.**'] },
    { q: 'Write a note on persona and addressee for a praise poem to an ancestor.', steps: ['Persona: a descendant speaking for the family.', 'Addressee: the ancestor.', '**The persona speaks as a member of the lineage, addressing the ancestor directly in a tone of reverence.**'] },
  ]),

  // ---------- 8. The essay ----------
  L('ali-peel-1', 'ali-l6-essay', '8.1', 'PEEL paragraphs and the thesis', 18, ['Essay'], [
    'An A Level essay answers the **question set** with an **argument**. The **introduction** defines key terms of the question, places the text briefly, and states a **thesis**: your answer in one or two sentences.',
    'Each body paragraph follows **PEEL**: **Point** (a claim that answers the question), **Evidence** (a short quotation or precise reference), **Explanation** (analysis of how the evidence supports the point: words, images, structure, effect), **Link** (back to the question or on to the next point).',
    'Order paragraphs logically (from simple to complex, or a counter-view before your strongest point). The **conclusion** answers the question directly and sums up the argument; it adds no new evidence.',
    'Write in the **present tense** ("Macbeth hesitates"), name the author and title correctly, and spell the characters’ names exactly: examiners penalise errors.',
  ], 'ali-peel', 'Underline the key words of the question; use them in your thesis and in every Link.',
  ['The Link in a PEEL paragraph:', ['ties the point back to the question', 'adds a new quotation', 'retells the plot', 'names the publisher'], 'Relevance.'],
  [['Thesis', 'The essay’s central argument in answer to the question.'], ['PEEL', 'Point, Evidence, Explanation, Link.'], ['Literary present', 'Writing about events in a text in the present tense.']],
  [
    { q: 'Write a thesis for: "Discuss the role of ambition in the play."', steps: ['Answer with a position.', 'Hint at the reasons.', '**Ambition drives the action of the play, but the play presents it as a force that, once freed from conscience, destroys both its victims and the ambitious themselves.**'] },
    { q: 'Write a PEEL paragraph point and link on the witches.', steps: ['Point: a claim about their role.', 'Link: back to ambition.', '**Point: the witches awaken an ambition that is already present. Link: thus the play locates the source of evil in human desire as much as in the supernatural.**'] },
  ]),

  L('ali-quotes-1', 'ali-l6-essay', '8.2', 'Embedding quotations and avoiding plot-telling', 16, ['Essay'], [
    '**Embed** short quotations inside your own sentences: Macbeth’s mind is "full of scorpions", a vivid image of torment. Keep quotations to a few words; use a longer one only when you analyse it closely.',
    'Punctuate correctly: put the quoted words in quotation marks, copy them exactly, and when verse runs over a line break, mark the break with a slash: "Fair is foul, and foul is fair: / Hover through the fog and filthy air". Misquoting loses credit.',
    '**Plot-telling** summarises what happens; **analysis** explains **how** and **why**. Turn "Macbeth kills Duncan" into "The murder of Duncan, performed off stage, lets the audience imagine its horror through Macbeth’s guilt-stricken language."',
    'Use **literary meta-language** with care: imagery, juxtaposition, irony, tone, foreshadowing, structure, characterisation. Every term must be followed by its effect.',
  ], 'lit-analysis-vs-plot', 'If your sentence could be written by someone who has only read a summary, it is plot-telling.',
  ['Which sentence analyses rather than retells?', ['The repeated image of sleep shows how guilt destroys peace of mind.', 'Then he went to bed.', 'In Act II he kills the king.', 'The play has five acts.'], 'How and why.'],
  [['Embedded quotation', 'A short quotation worked into your own sentence.'], ['Plot-telling', 'Retelling events instead of analysing them.'], ['Meta-language', 'The technical vocabulary of literary analysis.']],
  [
    { q: 'Embed a quotation: the phrase "full of scorpions" describes Macbeth’s mind.', steps: ['Keep the quoted words short.', 'Add your analysis in the same sentence.', '**Macbeth’s confession that his mind is "full of scorpions" reveals a torment that power cannot calm.**'] },
    { q: 'Turn into analysis: "Lady Macbeth sleepwalks and washes her hands."', steps: ['Say what the action shows.', 'Link to a theme.', '**Her sleepwalking and endless hand-washing reveal that the guilt she once dismissed now breaks through her unconscious mind.**'] },
  ]),
];
