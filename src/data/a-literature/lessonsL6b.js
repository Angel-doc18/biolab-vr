// A Level Literature in English lessons (0735), Lower Sixth, Terms 2 and 3:
// modern drama and staging, narrative voice and the Victorian novel, symbol
// and character growth, Romantic and Victorian poetry, context questions,
// comparison of prose, and Paper 1 drills. Quotations are short and public
// domain (Wordsworth, Keats, Tennyson, Browning, Dickens) or written for this
// app.

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

export const LESSONS_LL6B = [
  // ---------- 9. Modern drama ----------
  L('ali-modern-1', 'ali-l6-modern-drama', '9.1', 'Features of modern drama', 17, ['Drama'], [
    'Modern drama (from the late 19th century: Ibsen, Chekhov, Shaw, then Miller, Williams, Soyinka and others) often turns from kings and battles to **ordinary people**, **families** and **social problems**: money, class, gender roles, guilt, political power.',
    'Its language is usually **prose dialogue** close to real speech; meaning often lies in **subtext** (what characters do not say), pauses and silences.',
    '**Realism** presents a believable room and everyday action; other modern forms break realism: **expressionism** (inner states shown on stage), **epic theatre** (Brecht: songs, placards, distance to make the audience think), the **theatre of the absurd** (Beckett: meaningless waiting, circular dialogue), and African drama drawing on **ritual**, **music**, **dance** and **masquerade**.',
    'Read the prescribed play with its **context**: the playwright’s life and country, the date, and the social issue it addresses.',
  ], 'ali-modern-drama', 'Listen for what is not said: in modern drama, silence and evasion carry meaning.',
  ['Subtext is:', ['the meaning beneath what characters actually say', 'a footnote', 'the stage directions only', 'the cast list'], 'Unspoken meaning.'],
  [['Realism', 'Drama that presents ordinary life convincingly.'], ['Subtext', 'Meaning implied but not stated in dialogue.'], ['Theatre of the absurd', 'Drama showing a world without clear meaning or purpose.']],
  [
    { q: 'Explain the subtext of: "Fine. Everything is fine," said with a shaking voice after bad news.', steps: ['The words deny trouble.', 'The voice reveals distress.', '**The character is hiding fear or pain, and the gap between words and tone shows it.**'] },
    { q: 'Give two ways modern drama differs from Shakespearean tragedy.', steps: ['Ordinary people versus nobles.', 'Prose dialogue versus blank verse.', '**Modern plays usually centre on ordinary families in prose, while Shakespeare’s tragedies centre on nobles speaking mostly verse.**'] },
  ]),

  L('ali-staging-1', 'ali-l6-modern-drama', '9.2', 'Reading stage directions and staging', 16, ['Drama'], [
    '**Stage directions** (usually in italics) describe the **set**, **lighting**, **sound**, **costume**, **movement** and **tone of voice**. In modern plays they can be long and full of meaning: a cramped room, a window onto the street, a clock ticking.',
    'Ask of each direction: **what does it show** (a character’s state, a social situation, a symbol) and **how would it work on stage**?',
    '**Pace** in a scene comes from short exchanges, interruptions, overlaps, entrances and exits. **Curtain** moments end acts on suspense or revelation.',
    'In essays, treat the play as **performance**: "On stage, the sudden blackout after the shot leaves the audience in the same confusion as the family."',
  ], 'ali-stage-directions', 'Read stage directions as carefully as dialogue: they are the playwright speaking directly.',
  ['A stage direction "She stands alone at the window, the room in darkness" mainly suggests:', ['isolation and longing', 'a party', 'a comic scene', 'nothing'], 'Visual meaning.'],
  [['Stage direction', 'An instruction in a play script about setting, action or speech.'], ['Blackout', 'A sudden switch-off of stage lights.'], ['Pace', 'The speed of action and dialogue in a scene.']],
  [
    { q: 'Interpret: "The clock ticks loudly. No one speaks."', steps: ['The sound fills the silence.', 'Time and tension are emphasised.', '**The ticking clock marks a painful, tense silence and suggests time running out.**'] },
    { q: 'How might lighting show a character’s inner state?', steps: ['Light can isolate or darken.', 'A spotlight can single out.', '**A single cold spotlight on a character can show isolation, while fading light can suggest despair.**'] },
  ]),

  // ---------- 10. The novel ----------
  L('ali-pov-1', 'ali-l6-novel', '10.1', 'Narrative voice and focalisation', 17, ['Prose'], [
    '**Narrative voice** is who tells the story; **focalisation** is whose perception we follow. They can differ: a third-person narrator may focalise through one character.',
    'Types: **first-person** (an "I" narrator, limited and often personal), **third-person omniscient** (knows all minds and comments freely), **third-person limited** (close to one character), **unreliable** narrator (biased, naive, deceived or lying), and **multiple narrators**.',
    '**Free indirect discourse** blends the narrator’s voice with a character’s thoughts: "She would not cry. Not here, not in front of them."',
    'Ask: what does the chosen voice **let us know**, what does it **hide**, and how does it shape our **sympathy**?',
  ], 'ali-focalization', 'Name the narrator, then ask what the reader cannot see from that position.',
  ['A narrator who knows the thoughts of every character is:', ['omniscient', 'first-person', 'unreliable only', 'limited'], 'All-knowing.'],
  [['Narrative voice', 'The voice that tells the story.'], ['Focalisation', 'The perspective through which events are perceived.'], ['Free indirect discourse', 'Narration that blends with a character’s thoughts.']],
  [
    { q: 'What is the effect of a child narrator in a story of war?', steps: ['The child understands little.', 'The reader understands more.', '**The innocent voice creates dramatic irony and makes the horror more painful, because we see what the child cannot.**'] },
    { q: 'Identify the technique: "He looked at the letter. Rejected again. What was the point?"', steps: ['Third-person narration.', 'The last sentences voice his thoughts.', '**Free indirect discourse, blending the narrator with the character’s despair.**'] },
  ]),

  L('ali-victorian-1', 'ali-l6-novel', '10.2', 'The Victorian and American novel in context', 16, ['Prose'], [
    'The **Victorian age** (1837 to 1901) saw industrialisation, crowded cities, child labour, debates over religion and science, and a growing reading public. Many novels appeared in **monthly or weekly instalments**, which encouraged suspense at each part’s end.',
    'Victorian novelists such as **Charles Dickens**, **the Brontës**, **George Eliot** and **Thomas Hardy** used **realism** to examine **class**, **poverty**, **education**, **marriage** and **morality**. Dickens opens Hard Times with a teacher’s cry, "Now, what I want is, Facts", attacking an education that kills imagination.',
    'American fiction (Hawthorne, Twain, later Steinbeck, Fitzgerald, Harper Lee) explores **freedom**, **race**, the **frontier**, the **American Dream** and its failures.',
    'Use context to **explain**, not to replace analysis: one sentence of background, then back to the text.',
  ], 'ali-victorian', 'Context earns marks only when it explains something in the text.',
  ['Many Victorian novels were published first in instalments, which encouraged:', ['cliffhanger endings to parts', 'shorter books', 'no plot', 'poetry'], 'Serial suspense.'],
  [['Realism', 'Fiction that depicts ordinary life and society faithfully.'], ['Instalment', 'One part of a work published in a series.'], ['American Dream', 'The ideal that anyone can succeed through effort.']],
  [
    { q: 'Use context in one sentence about a novel showing child workers in a factory.', steps: ['Name the historical fact.', 'Link it to the novel’s purpose.', '**Written when children still worked long hours in mills, the novel exposes their suffering to stir its readers’ consciences.**'] },
    { q: 'What does "Now, what I want is, Facts" suggest about the speaker?', steps: ['He values only facts.', 'He rejects feeling and imagination.', '**It presents a rigid, utilitarian teacher whose system Dickens satirises.**'] },
  ]),

  // ---------- 11. Symbol and character ----------
  L('ali-symbol-1', 'ali-l6-motifs', '11.1', 'Symbol, motif and allegory', 16, ['Prose'], [
    'A **symbol** is a concrete thing that stands for an idea: a locked gate (exclusion), a river (time, change), a burning house (destruction of a family). Its meaning comes from **context** and **repetition**.',
    'A **motif** is a recurring element (an image, phrase, object or situation) that develops a theme: repeated journeys, mirrors, rain at every death.',
    'An **allegory** is a whole narrative in which characters and events stand for ideas or real situations: Orwell’s Animal Farm retells the Russian Revolution through animals.',
    'In analysis, trace a symbol across the text: **where** it appears, how its meaning **changes**, and what it **adds** to the theme.',
  ], 'lit-motif-symbol', 'A symbol becomes convincing when you show it at least twice, in different moments.',
  ['A story in which each animal stands for a political leader is:', ['an allegory', 'a soliloquy', 'a sonnet', 'a subplot'], 'Extended symbolism.'],
  [['Symbol', 'A concrete thing that stands for an abstract idea.'], ['Motif', 'A recurring element that develops a theme.'], ['Allegory', 'A narrative whose characters and events stand for ideas.']],
  [
    { q: 'A novel shows rain at a funeral, at a betrayal and at a hero’s defeat. What is it?', steps: ['It recurs at moments of loss.', 'It develops a mood or theme.', '**A motif linking rain with grief and misfortune.**'] },
    { q: 'How could a closed door change meaning across a novel?', steps: ['At first: exclusion from a family.', 'At the end: the hero closes it himself.', '**It moves from a sign of rejection to a sign of the hero’s chosen independence.**'] },
  ]),

  L('ali-arc-1', 'ali-l6-motifs', '11.2', 'Character growth and moral development', 16, ['Prose'], [
    'A **character arc** traces how a character changes: what they want, what they believe, how events test them, and who they are at the end. A **dynamic** character changes; a **static** one does not.',
    '**Round** characters (complex, able to surprise) and **flat** characters (one or two traits) do different jobs: flat characters can be symbols or comic figures; round ones carry the moral argument.',
    'Moral development: a character may **grow** (from selfishness to compassion), **fall** (from innocence to corruption), or **refuse** to change. Identify the **turning moment** and the evidence.',
    'In essays, compare **early** and **late** evidence: a quotation from the beginning set against one from the end makes change visible.',
  ], 'ali-arc', 'Pair a quotation from the beginning with one from the end: change becomes evidence.',
  ['A character who moves from greed to generosity is:', ['dynamic', 'static', 'flat', 'a narrator'], 'Change.'],
  [['Character arc', 'The path of change a character follows.'], ['Round character', 'A complex character who can surprise the reader.'], ['Flat character', 'A character with one or two simple traits.']],
  [
    { q: 'Write a sentence showing a character’s growth with early and late evidence (invented novel).', steps: ['Early: he says he cares only for money.', 'Late: he gives his savings to a neighbour.', '**The man who once boasted that money was his only friend ends by giving his savings away, showing a transformation from greed to compassion.**'] },
    { q: 'Why might a novelist keep a minor character flat?', steps: ['Flat characters are quickly recognised.', 'They can stand for a type or idea.', '**A flat character can represent a social type, such as the corrupt official, without distracting from the main characters.**'] },
  ]),

  // ---------- 12. Romantic and Victorian poetry ----------
  L('ali-romantic-1', 'ali-l6-romantic', '12.1', 'The Romantic poets', 17, ['Poetry'], [
    'English **Romanticism** is usually dated from Wordsworth and Coleridge’s **Lyrical Ballads** (1798) to the 1830s. It reacted against the age of reason and the industrial city, valuing **nature**, **imagination**, **emotion**, **the individual**, **childhood** and **the common people**.',
    '**Wordsworth** sought "the spontaneous overflow of powerful feelings" in plain language ("I wandered lonely as a cloud"); **Coleridge** explored the supernatural; **Byron** and **Shelley** were rebels and political radicals ("Ozymandias" mocks a tyrant’s pride); **Keats** pursued beauty and sensation ("Season of mists and mellow fruitfulness").',
    'Typical features: **first-person meditation**, **nature as a source of feeling and moral truth**, the **sublime** (awe before vast nature), **odes** and **lyrics**, rich **sensory imagery**.',
    'In analysis, connect the poem’s imagery to its **idea**: nature restoring the troubled mind, beauty fading with time, power crumbling to dust.',
  ], 'ali-romantic', 'For any Romantic poem ask: what does nature give the speaker that society cannot?',
  ['"Ozymandias", in which a ruined statue mocks a tyrant’s pride, was written by:', ['Shelley', 'Donne', 'Shakespeare', 'Tennyson'], 'Romantic poet, 1818.'],
  [['Romanticism', 'A movement valuing nature, imagination and emotion.'], ['Sublime', 'A feeling of awe before vastness or power.'], ['Ode', 'A formal lyric addressed to or celebrating a subject.']],
  [
    { q: 'Analyse the imagery of "Season of mists and mellow fruitfulness".', steps: ['Mists: soft, hazy autumn light.', 'Mellow fruitfulness: ripeness, abundance, sound of m and l.', '**The soft sounds and images of ripeness present autumn as a season of gentle fulfilment, not of decay.**'] },
    { q: 'What idea does a ruined statue in the desert convey?', steps: ['Once a symbol of power.', 'Now broken and alone.', '**Human power and pride are temporary; time destroys even the greatest rulers’ works.**'] },
  ]),

  L('ali-tone-1', 'ali-l6-romantic', '12.2', 'Tone, mood and attitude; the Victorian dramatic monologue', 17, ['Poetry'], [
    '**Tone** is the speaker’s attitude (bitter, tender, ironic, admiring, mournful), shown by **word choice**, **rhythm** and **punctuation**. **Mood** is the atmosphere the poem creates for the reader. **Attitude** is the stance towards the subject or addressee.',
    'Describe tone **precisely** and **with evidence**: not "sad" but "resigned", "bitter", "nostalgic"; quote the words that create it.',
    'Victorian poets (Tennyson, Robert Browning, Elizabeth Barrett Browning, Christina Rossetti, Hopkins) wrote in an age of **faith and doubt**, **duty** and **change**. Tennyson’s "Ulysses" ends with heroic resolve: "To strive, to seek, to find, and not to yield."',
    'The **dramatic monologue** has one speaker addressing a silent listener and revealing more than he intends. In Browning’s "My Last Duchess" the Duke, showing a portrait ("That’s my last Duchess painted on the wall"), reveals his jealousy and cruelty.',
  ], 'ali-tone', 'Use a precise adjective for tone, then prove it with two words from the poem.',
  ['In a dramatic monologue, the speaker:', ['addresses a silent listener and reveals his character', 'talks to many speakers in turn', 'is always the poet', 'narrates in the third person'], 'Self-revelation.'],
  [['Tone', 'The speaker’s attitude shown by word choice.'], ['Mood', 'The atmosphere a poem creates.'], ['Dramatic monologue', 'A poem spoken by one character to a silent listener.']],
  [
    { q: 'Describe the tone of "To strive, to seek, to find, and not to yield."', steps: ['Four strong verbs in a row.', 'A final negative of refusal.', '**The tone is determined and heroic: the rhythm of the verbs builds a resolve that refuses defeat.**'] },
    { q: 'How does a dramatic monologue create irony?', steps: ['The speaker controls the words.', 'The reader sees past them.', '**The speaker unknowingly reveals faults, so the reader judges him differently from how he sees himself.**'] },
  ]),

  // ---------- 13. Context questions ----------
  L('ali-context-1', 'ali-l6-context', '13.1', 'Answering a context question', 17, ['Exam'], [
    'A **context question** gives an extract from a set play or novel and asks short questions. Typical tasks: **identify** the speaker and the addressee; **place** the extract (what has just happened, where); **explain** meanings of words or lines; **comment** on tone, character or imagery; state the **importance** of the extract.',
    'Answer **precisely**: name characters fully and correctly, place the event exactly ("just after the banquet scene, when..."), and use evidence from the extract.',
    'Match length to marks: one mark needs one precise fact; four marks need a developed point with evidence.',
    'Prepare by knowing **key scenes** and **key speeches**: who says them, to whom, when and why.',
  ], 'lit-context-steps', 'Read the questions before the extract, so you read with a purpose.',
  ['A 1-mark context question asking "Who is speaking?" needs:', ['the correct name', 'a paragraph of analysis', 'the whole plot', 'a quotation from another act'], 'Precision.'],
  [['Context question', 'Short questions on an extract from a set text.'], ['Addressee', 'The person spoken to.'], ['Significance', 'The importance of an extract for plot, character or theme.']],
  [
    { q: 'Write a model answer: "What has just happened before this extract?" (an extract where a guilty host sees a ghost at a feast).', steps: ['Name the previous event exactly.', 'Link it to the extract.', '**Just before, the host has ordered the murder of his friend, whose ghost now appears at the feast to haunt him.**'] },
    { q: 'How would you answer a 4-mark question on the tone of an extract?', steps: ['Name the tone precisely.', 'Give two quoted words and explain each.', '**State the tone, quote two words that create it, and explain how each conveys the attitude.**'] },
  ]),

  L('ali-context-2', 'ali-l6-context', '13.2', 'Context drills: placing, explaining, evaluating', 16, ['Exam'], [
    '**Placing**: build a **timeline** of the set text with the key scenes numbered; for each, know the speakers, the place and one quotation.',
    '**Explaining**: paraphrase difficult lines in modern English, then say what they **reveal**. For images, explain both the picture and the meaning.',
    '**Evaluating importance**: an extract may matter because it reveals a character trait, marks a turning point, foreshadows the end, develops a theme, or creates dramatic irony.',
    '**Practice task:** with a partner, test each other on twenty key quotations from your set play and novel: who, to whom, when, why it matters.',
  ], 'ali-context-answer', 'For "why is this extract important?", name at least two functions: character and theme, or plot and irony.',
  ['An extract that hints at the ending is important because it:', ['foreshadows later events', 'introduces the author', 'is the longest', 'has no dialogue'], 'Foreshadowing.'],
  [['Paraphrase', 'Restating a passage in your own words.'], ['Timeline', 'A list of key events in order.'], ['Function', 'What an extract does in the work.']],
  [
    { q: 'Paraphrase and explain: "I am not what I am" (Iago, Othello).', steps: ['Paraphrase: I am not what I seem to be.', 'It reveals his deceit.', '**Iago admits that his outward loyalty hides his true, treacherous self, preparing the audience for his deception.**'] },
    { q: 'Give two functions of an extract in which a hero first hears a prophecy.', steps: ['Plot: it starts the action.', 'Theme or character: it reveals ambition.', '**It sets the plot in motion and reveals the hero’s hidden ambition through his reaction.**'] },
  ]),

  // ---------- 14. Comparison ----------
  L('ali-compare-1', 'ali-l6-comparison', '14.1', 'Methods of comparison', 17, ['Prose'], [
    'Comparison looks for **similarities** and **differences** in **theme**, **character**, **setting**, **narrative technique** and **context** between two texts (for example an African and a non-African novel).',
    'Two methods: **point by point** (each paragraph compares both texts on one aspect: the stronger method) and **block** (one text, then the other, then a comparison: easier but less integrated).',
    'Use **comparative connectives**: similarly, likewise, in the same way; whereas, in contrast, on the other hand, unlike.',
    'Explain differences through **context**: a theme such as power is shaped by colonial history in one novel and by industrial class society in another.',
  ], 'lit-compare', 'Put both texts in every topic sentence: it forces true comparison.',
  ['The point-by-point method:', ['compares both texts in each paragraph', 'treats one text fully first', 'avoids differences', 'retells both plots'], 'Integrated.'],
  [['Point-by-point', 'Comparing texts aspect by aspect within each paragraph.'], ['Block method', 'Treating each text separately before comparing.'], ['Comparative connective', 'A word that shows likeness or difference.']],
  [
    { q: 'Write a comparative topic sentence on the theme of education in two novels.', steps: ['Name both texts’ treatment.', 'Show likeness or difference.', '**Both novels present education as a path to freedom, but whereas one celebrates it, the other shows how it alienates the hero from his people.**'] },
    { q: 'Choose a method for a 45-minute essay and justify it.', steps: ['Point by point integrates.', 'It earns credit for comparison throughout.', '**Point by point, because every paragraph then compares the texts directly.**'] },
  ]),

  L('ali-compare-2', 'ali-l6-comparison', '14.2', 'Writing a comparative paragraph', 16, ['Prose'], [
    'A comparative paragraph: a **topic sentence** naming both texts and the aspect; **evidence** from text A with analysis; a **connective**; **evidence** from text B with analysis; a **concluding sentence** that weighs the comparison.',
    'Keep the balance: roughly equal attention to each text.',
    'Go beyond "both have..." to **how** and **why** they differ: technique (first-person versus omniscient), tone (satirical versus tragic), context.',
    '**Practice task:** write one comparative paragraph on how the two prescribed novels present a parent figure.',
  ], 'ali-compare-plan', 'End each comparative paragraph by saying which difference matters most and why.',
  ['A comparative paragraph should give:', ['evidence from both texts', 'evidence from one text only', 'no evidence', 'only a summary'], 'Balance.'],
  [['Topic sentence', 'The sentence that states the paragraph’s point.'], ['Balance', 'Fair attention to each text.'], ['Weighing', 'Judging which similarity or difference matters most.']],
  [
    { q: 'Write a weighing sentence for a comparison of two fathers, one harsh and one absent.', steps: ['Name the shared effect.', 'Say what the difference shows.', '**Although one father is harsh and the other absent, both leave their sons without guidance, showing that neglect can take opposite forms.**'] },
    { q: 'Add a connective between two contrasting points.', steps: ['The points differ.', 'Use a contrast word.', '**In contrast**'] },
  ]),

  // ---------- 15. Papers ----------
  L('ali-l6-paper1', 'ali-l6-papers', '15.1', 'Paper 1 drills and the A Level papers', 17, ['Exam'], [
    'In the 2026 session, the GCE Board’s timetable listed **three** papers for A Level Literature in English (0735): **Paper 1**, 1½ hours (Thursday 11 June, afternoon); **Paper 2**, 3 hours (Friday 12 June, morning); and **Paper 3**, 3 hours (Friday 12 June, afternoon). The scheme of work describes Paper 1 as multiple choice on terms and unseen texts, and the written papers as covering **drama**, **prose** and **poetry**; read the instructions of each paper for its sections and choices.',
    'Paper 1 drills cover **literary terms**, **figures of speech**, **scansion**, **literary history**, **authors** and **set-book details** (plot milestones, characters, quotations).',
    'Method: read the stem fully, predict, eliminate distractors, choose; mark doubtful items and return; keep a steady pace.',
    'After each drill, record errors in a **glossary** of terms with definitions and examples.',
  ], 'ali-gce-papers', 'Learn terms with an example each: a definition alone is easy to confuse.',
  ['In 2026, how long was A Level Literature Paper 1?', ['1½ hours', '3 hours', '2 hours', '1 hour'], 'Thursday 11 June.'],
  [['Distractor', 'A wrong option designed to look possible.'], ['Glossary', 'A list of terms with their meanings.'], ['Set book', 'A text prescribed for study and examination.']],
  [
    { q: 'Plan a glossary entry for "dramatic irony".', steps: ['Definition.', 'Example from a set text or a known play.', '**Dramatic irony: the audience knows what a character does not; for example, a king praises a guest who plans to kill him.**'] },
    { q: 'How should you treat a question you are unsure of in Paper 1?', steps: ['Eliminate what is clearly wrong.', 'Mark it and come back.', '**Narrow the options, make a provisional choice, mark it, and return if time allows.**'] },
  ]),

  L('ali-figures-1', 'ali-l6-papers', '15.2', 'Figures of speech for Paper 1', 16, ['Terms'], [
    'Comparison: **simile** (like, as), **metaphor** (direct identification), **personification** (human qualities given to things), **conceit** (extended, ingenious comparison).',
    'Substitution: **metonymy** (a related thing for the whole: "the crown" for the king), **synecdoche** (part for whole: "all hands on deck").',
    'Emphasis and contrast: **hyperbole** (exaggeration), **litotes** (understatement by negation: "not bad"), **oxymoron** ("bitter-sweet"), **paradox** (a seeming contradiction with truth: "Death, thou shalt die"), **antithesis** (opposites balanced), **irony**.',
    'Sound: **alliteration** (repeated initial consonants), **assonance** (repeated vowel sounds), **consonance**, **onomatopoeia** (words imitating sounds), **rhyme**; and **enjambment** (a sentence running over a line break) and **caesura** (a pause within a line).',
  ], 'ali-figures', 'Group figures by function (comparison, substitution, emphasis, sound): the right group narrows the choice.',
  ['"All hands on deck" (hands meaning sailors) is:', ['synecdoche', 'simile', 'hyperbole', 'onomatopoeia'], 'Part for whole.'],
  [['Synecdoche', 'Naming a part for the whole.'], ['Paradox', 'A statement that seems contradictory but holds a truth.'], ['Caesura', 'A pause within a line of verse.']],
  [
    { q: 'Identify: "The crown has decided to raise taxes."', steps: ['The crown stands for the monarch or government.', 'A related thing replaces the whole.', '**Metonymy.**'] },
    { q: 'Identify both devices: "the buzzing bees in the bright, bare branches".', steps: ['Buzzing imitates the sound.', 'Repeated b sounds.', '**Onomatopoeia and alliteration.**'] },
  ]),
];
