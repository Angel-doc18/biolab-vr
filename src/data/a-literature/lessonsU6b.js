// A Level Literature in English lessons (0735), Upper Sixth, Terms 2 and 3:
// narrative architecture compared, drama from Shakespeare to the modern
// stage, literary history for Paper 1, unseen poetry, critical theory, the
// chief examiners' advice, and the final essay clinics and mock.

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

export const LESSONS_LU6B = [
  // ---------- 8. Narrative architecture ----------
  L('ali-distance-1', 'ali-u6-narrative', '8.1', 'Narrative distance, immersion and alienation', 17, ['Prose'], [
    '**Narrative distance** is how close the narration stands to a character’s mind. **Close** narration (first person, free indirect discourse) **immerses** us in feelings; **distant** narration (an external, ironic narrator) lets us judge.',
    'Writers move the distance on purpose: zooming in at moments of crisis, pulling back for irony or summary. A cold, detached voice can produce **alienation**, making the reader feel the character’s isolation or forcing critical thought.',
    'Structure and time also shape distance: **flashbacks**, **frame narratives**, **multiple narrators** and **non-linear order** change what we know and when.',
    'In seminars, compare the two novelists: which voice, what distance, what structure, and to what effect on the themes?',
  ], 'ali-distance', 'Mark where the narration zooms in and where it pulls back: the shifts reveal the author’s intentions.',
  ['Free indirect discourse usually creates:', ['closeness to a character’s mind', 'great distance', 'a stage effect', 'a rhyme'], 'Immersion.'],
  [['Narrative distance', 'How close the narration is to a character’s thoughts.'], ['Immersion', 'Drawing the reader into a character’s experience.'], ['Frame narrative', 'A story told inside another story.']],
  [
    { q: 'Why might a novelist narrate a death in a flat, distant voice?', steps: ['The voice withholds emotion.', 'The reader feels the coldness.', '**The detached voice can make the death more shocking and suggest a world indifferent to suffering.**'] },
    { q: 'Compare: novel A has a first-person narrator; novel B an omniscient one. Effect on sympathy?', steps: ['A: intimacy but limited view.', 'B: wider view and judgement.', '**Novel A draws us into one mind and its biases, while Novel B lets us weigh several characters and judge them more coolly.**'] },
  ]),

  L('ali-narr-compare-1', 'ali-u6-narrative', '8.2', 'Comparing the novelists’ narrative styles', 17, ['Prose'], [
    'Compare **narrative architecture** on five axes: **voice** (who speaks), **focalisation** (whose view), **distance**, **structure and time**, **style** (register, imagery, humour, proverbs).',
    'Explain differences through **purpose and context**: an African novelist using a communal voice to restore an oral culture; a Victorian narrator using omniscience to judge a whole society.',
    'Write paragraphs that weigh effects: which method creates more sympathy, more irony, more urgency?',
    '**Practice task:** a 45-minute essay: "Compare the ways the two novelists use narrative voice to present their main characters."',
  ], 'lit-compare', 'Always end a comparison paragraph with "so what": why the difference matters.',
  ['Comparing "focalisation" in two novels compares:', ['whose perception the reader follows', 'the length of chapters', 'the cover art', 'the publishers'], 'Point of view.'],
  [['Narrative architecture', 'The overall design of how a story is told.'], ['Axis of comparison', 'One aspect along which two texts are compared.'], ['Purpose', 'What a writer aims to achieve with a choice.']],
  [
    { q: 'Write a weighing sentence comparing a communal and an omniscient narrator.', steps: ['Name the effect of each.', 'Judge.', '**The communal "we" makes the village’s tragedy a shared loss, whereas the omniscient narrator’s distance turns the city’s suffering into an indictment of a whole class.**'] },
    { q: 'List the five axes of comparison for narrative.', steps: ['Voice and focalisation.', 'Distance, structure and style.', '**Voice, focalisation, distance, structure and time, style.**'] },
  ]),

  // ---------- 9. Drama compared ----------
  L('ali-drama-evolution-1', 'ali-u6-drama-synthesis', '9.1', 'From Shakespearean tragedy to modern theatre', 17, ['Drama'], [
    '**Shakespearean tragedy**: noble heroes, five acts, blank verse with prose for low or mad characters, a bare stage with spoken scenery, the supernatural, and order restored at the end.',
    '**Modern drama**: ordinary people (Arthur Miller argued in 1949 that an ordinary man is as fit a subject for tragedy as a king), prose dialogue, fewer acts, detailed stage directions, realism or deliberate breaks from it, and often open or ironic endings.',
    'Continuity: both explore **power**, **guilt**, **family**, **self-deception**, and both use **dramatic irony**, **symbol** and **conflict**.',
    'Explain changes through **context**: the theatre building (open daylight stage versus lit indoor stage), the audience, and society (monarchy and divine order versus democracy, class and the individual).',
  ], 'ali-drama-evolution', 'Compare like with like: hero with hero, ending with ending, language with language.',
  ['Who argued that the common man can be a tragic hero?', ['Arthur Miller', 'Shakespeare', 'Aristotle', 'Dickens'], 'Tragedy and the Common Man.'],
  [['Five-act structure', 'The division of a play into five acts.'], ['Realism', 'Drama that presents ordinary life convincingly.'], ['Continuity', 'What stays the same across periods.']],
  [
    { q: 'Write a comparative sentence on heroes.', steps: ['Shakespeare: noble.', 'Modern: ordinary.', '**Whereas Shakespeare’s hero falls from a throne, the modern hero falls within a small house, yet both are destroyed by their own illusions.**'] },
    { q: 'Explain one difference through context.', steps: ['Daylight stage versus lit indoor stage.', 'Effect on scenery and language.', '**Shakespeare’s bare daylight stage required spoken scenery, while modern lighting and sets allow the stage itself to create mood.**'] },
  ]),

  L('ali-dialogue-1', 'ali-u6-drama-synthesis', '9.2', 'Dialogue, pace and conflict compared', 16, ['Drama'], [
    '**Dialogue**: Shakespeare uses soliloquies, long formal speeches and quick **stichomythia** (alternating single lines in argument); modern plays use broken everyday speech, pauses, silences and **subtext**.',
    '**Pace**: a scene speeds up with short lines, interruptions, entrances; slows with monologues and silences. Compare how each play builds to its crisis.',
    '**Conflict**: Shakespearean conflict is often public and political (kingdoms, wars) as well as inner; modern conflict is often domestic and social (family, money, class, gender).',
    '**Practice task:** compare one tense exchange from each set play, analysing line length, interruption and what is left unsaid.',
  ], 'ali-drama-evolution', 'Count the lines in a tense exchange: rhythm on the page is pace on the stage.',
  ['Rapid alternating single lines of dialogue are called:', ['stichomythia', 'soliloquy', 'aside', 'prologue'], 'Greek term.'],
  [['Stichomythia', 'Rapid exchange of single lines.'], ['Subtext', 'Meaning beneath the spoken words.'], ['Domestic conflict', 'Conflict within a family or household.']],
  [
    { q: 'What does an interrupted line suggest in a quarrel?', steps: ['One speaker cuts off another.', 'Power and emotion.', '**It shows rising anger and a struggle for control of the conversation.**'] },
    { q: 'Compare silence in Shakespeare and in modern drama.', steps: ['Shakespeare fills silence with verse.', 'Modern drama uses pauses as meaning.', '**Shakespeare’s characters speak their feelings in verse, while modern characters often reveal them through what they cannot say.**'] },
  ]),

  // ---------- 10. Literary history ----------
  L('ali-history-1', 'ali-u6-mcq', '10.1', 'Periods and movements of English and African literature', 17, ['Terms'], [
    '**Medieval**: Chaucer, The Canterbury Tales (late 14th century). **Elizabethan and Jacobean** (1558 to 1625): Shakespeare, Marlowe, Jonson. **Metaphysical** poets (17th century): Donne, Herbert, Marvell; **Milton**, Paradise Lost (1667).',
    '**Augustan or Neoclassical** (about 1700 to 1750): Pope, Swift; reason, satire, heroic couplets. **Romantic** (1798 to about 1832): Wordsworth, Coleridge, Byron, Shelley, Keats. **Victorian** (1837 to 1901): Dickens, the Brontës, Eliot, Hardy, Tennyson, Browning.',
    '**Modernism** (early 20th century): Eliot, Joyce, Woolf; fragmentation and experiment. **Post-war and contemporary** writing; **postcolonial** literature: Achebe (Things Fall Apart, 1958), Ngugi wa Thiong’o, Wole Soyinka (Nobel Prize 1986), Derek Walcott, and Cameroonian writers such as Mongo Beti, Ferdinand Oyono and Bate Besong.',
    'For Paper 1, learn each period with **dates**, **three writers**, **one key feature** and **one work**.',
  ], 'ali-periods', 'One card per period: dates, three writers, one feature, one work.',
  ['Paradise Lost was written by:', ['John Milton', 'John Donne', 'William Blake', 'Alexander Pope'], '1667.'],
  [['Neoclassicism', 'A movement valuing reason, order and classical models.'], ['Modernism', 'Early 20th-century experiment in form and voice.'], ['Postcolonial literature', 'Writing that responds to colonial rule and its aftermath.']],
  [
    { q: 'Order these: Romantic, Metaphysical, Victorian, Modernist.', steps: ['Metaphysical: 17th century.', 'Romantic: from 1798; Victorian: 1837 to 1901.', '**Metaphysical, Romantic, Victorian, Modernist.**'] },
    { q: 'Make a period card for the Victorian age.', steps: ['Dates and writers.', 'Feature and work.', '**1837 to 1901; Dickens, Hardy, Tennyson; social realism and faith-doubt debates; Hard Times.**'] },
  ]),

  L('ali-u6-paper1', 'ali-u6-mcq', '10.2', 'Paper 1 sprint: terms, history and unseen parameters', 16, ['Exam'], [
    'In 2026, Paper 1 of A Level Literature in English (0735) lasted **1½ hours** (Thursday 11 June, afternoon). The scheme prepares it with multiple-choice drills on **literary history**, **classical terminology** and the **basic parameters of unseen texts** (speaker, tone, form, devices).',
    'Sprints: 20 items in a short fixed time, then immediate correction; track your **accuracy** and **speed**; repeat weak categories.',
    'For unseen extracts in multiple choice: read the passage first for gist, then each stem; check every answer against the words of the passage.',
    'Keep the **glossary** and **period cards** up to date; reread them before every drill.',
  ], 'lit-mcq-steps', 'Check every unseen-text answer against a word in the passage; if you cannot point to one, reconsider.',
  ['For an unseen extract in a multiple-choice item, you should:', ['check your answer against the passage’s words', 'rely on memory of other texts', 'guess quickly', 'skip it always'], 'Evidence.'],
  [['Sprint', 'A short timed set of practice questions.'], ['Accuracy', 'The proportion of correct answers.'], ['Gist', 'The general meaning of a passage.']],
  [
    { q: 'An item asks the tone of an extract ending "and still the rain fell, endless, grey". Choose: hopeful, monotonous and sad, angry, comic.', steps: ['"Endless" and "grey" suggest dullness and sorrow.', 'No hope or anger.', '**Monotonous and sad.**'] },
    { q: 'How should you use your results after a sprint?', steps: ['Group errors by category.', 'Drill the weakest category.', '**List errors by type (terms, history, unseen) and practise the weakest type before the next sprint.**'] },
  ]),

  // ---------- 11. Unseen poetry ----------
  L('ali-unseen-1', 'ali-u6-unseen', '11.1', 'A method for unseen poetry', 18, ['Poetry'], [
    '**First reading**: the literal situation. Who speaks, to whom, where, when, about what? Read the title and any date.',
    '**Second reading**: theme and attitude. What is the poem really about? What is the **tone**, and does it **shift**? Mark the **turn**.',
    '**Third reading**: method. **Structure** (stanzas, line lengths, order of ideas), **imagery** (clusters, figures), **sound** (alliteration, assonance, rhyme, rhythm), **form** (sonnet, free verse), **diction** (formal, colloquial, archaic).',
    'Then **plan**: a thesis answering the question, and three or four paragraphs moving from meaning to method to effect. Every device you mention must be tied to **meaning**.',
  ], 'ali-unseen', 'Three readings, three questions: what happens, what it means, how it is made.',
  ['On the first reading of an unseen poem you mainly establish:', ['the literal situation and speaker', 'the poet’s biography', 'the metre of every line', 'the publisher'], 'Literal sense.'],
  [['Unseen poem', 'A poem not studied before the examination.'], ['Diction', 'The choice of words.'], ['Turn', 'The point where a poem’s tone or argument shifts.']],
  [
    { q: 'Apply the first reading to a short poem in which an old woman addresses her empty house at dusk.', steps: ['Speaker: an old woman.', 'Addressee and situation: her house, at evening.', '**An elderly speaker talks to her empty home at nightfall, suggesting loneliness after her family has gone.**'] },
    { q: 'What questions guide the second reading?', steps: ['Theme and attitude.', 'Tone and its shifts.', '**What is it really about, what is the speaker’s attitude, and where does the tone change?**'] },
  ]),

  L('ali-unseen-2', 'ali-u6-unseen', '11.2', 'Writing the unseen poetry answer', 17, ['Poetry'], [
    'Open with a **thesis** that answers the question and names the poem’s central concern and effect: "The poem presents ageing as a slow loss of voice, through images of fading light and a rhythm that gradually breaks down."',
    'Organise by **ideas**, not by device lists: each paragraph makes a point about meaning, supported by two or three methods with short quotations.',
    'Handle **ambiguity** honestly: offer a reading and, where useful, an alternative ("this may also suggest...").',
    '**Practice task:** without notes, analyse an unfamiliar poem in 45 minutes; then compare with a model answer and list one improvement.',
  ], 'ali-unseen', 'If a paragraph begins with a device ("There is alliteration..."), rewrite it to begin with an idea.',
  ['Paragraphs in an unseen poetry answer are best organised by:', ['ideas about meaning', 'a list of devices', 'line numbers only', 'the poet’s biography'], 'Argument.'],
  [['Ambiguity', 'The possibility of more than one meaning.'], ['Interpretation', 'A reasoned reading of a text’s meaning.'], ['Device list', 'A list of techniques without analysis, which earns little credit.']],
  [
    { q: 'Rewrite to begin with an idea: "There is a simile in line 3."', steps: ['State what the poem suggests.', 'Then name the simile and its effect.', '**The speaker feels trapped by routine, an idea the simile in line 3, comparing her days to "beads on a string", makes concrete.**'] },
    { q: 'How do you handle an ambiguous final line?', steps: ['Offer one reading with evidence.', 'Acknowledge another.', '**Give the most convincing reading with evidence, then note briefly that the line may also suggest a second meaning.**'] },
  ]),

  // ---------- 12. Critical theory ----------
  L('ali-theory-1', 'ali-u6-theory', '12.1', 'Feminist and Marxist readings', 17, ['Essay'], [
    '**Feminist criticism** asks how a text presents **gender**: what roles, choices and voices women and men have; how **patriarchy** (male-dominated power) shapes lives; whether the text reinforces or challenges it. A feminist reading of a tragedy might ask whether a powerful woman is shown as monstrous because she breaks gender norms.',
    '**Marxist criticism** asks about **class**, **money**, **labour** and **ideology** (the beliefs that make a social order seem natural). Who owns, who works, who benefits? A Marxist reading of a Victorian novel might show how charity hides structural poverty.',
    'Use theory as a **lens**, not a label: "From a feminist perspective, the play’s silencing of the queen..." followed by evidence and analysis.',
    'Avoid jargon without meaning; one well-applied critical idea is worth more than a list of theorists.',
  ], 'ali-theories', 'Ask the theory’s key question of one scene, and answer it with evidence.',
  ['A reading focused on who owns property and who labours is:', ['Marxist', 'feminist', 'metaphysical', 'Romantic'], 'Class and economics.'],
  [['Feminist criticism', 'Analysis of how texts present gender and power.'], ['Marxist criticism', 'Analysis of class, money and ideology in texts.'], ['Ideology', 'Beliefs that make a social order seem natural.']],
  [
    { q: 'Write a feminist-reading sentence on a woman who is called "mad" for refusing an arranged marriage (invented novel).', steps: ['Name the gender norm.', 'Show how the text treats her.', '**Labelling her "mad" for refusing the marriage shows how a patriarchal community turns a woman’s independence into illness, a judgement the novel invites us to question.**'] },
    { q: 'Write a Marxist-reading sentence on a rich man’s public charity.', steps: ['Name the class relation.', 'Show the ideology.', '**His public generosity disguises the wages he refuses his workers, presenting inequality as kindness.**'] },
  ]),

  L('ali-theory-2', 'ali-u6-theory', '12.2', 'Postcolonial readings', 17, ['Essay'], [
    '**Postcolonial criticism** studies how texts represent **empire**, **colonised peoples**, **resistance**, **identity**, **language** and **power** after independence.',
    'Key ideas: **othering** (presenting the colonised as alien or inferior); **voice** (who is allowed to speak); **hybridity** (mixed cultures and identities); **writing back** (African and Caribbean writers answering European portrayals). Chinua Achebe’s essay on Conrad’s Heart of Darkness (1975) criticised its dehumanising image of Africans.',
    'A postcolonial reading of a non-African text may ask who is silent or stereotyped; of an African text, how it restores history, language and dignity, or how it criticises new elites.',
    '**Practice task:** apply one critical lens to each set book in a short paragraph, then choose the most illuminating for your essays.',
  ], 'ali-theories', 'Ask who speaks and who is spoken about: voice is at the heart of postcolonial reading.',
  ['"Writing back" refers to:', ['writers from former colonies answering colonial portrayals', 'writing letters', 'rewriting the plot', 'editing'], 'Response to empire.'],
  [['Othering', 'Presenting a group as alien or inferior.'], ['Hybridity', 'The mixing of cultures and identities.'], ['Writing back', 'Answering colonial literature from the colonised perspective.']],
  [
    { q: 'Write a postcolonial-reading sentence on a novel in which African characters never speak.', steps: ['Name the silence.', 'Explain its effect.', '**By giving its African characters no speech, the novel denies them humanity and reduces them to background, a silence postcolonial critics expose.**'] },
    { q: 'How might an African novel "write back"?', steps: ['It tells history from inside.', 'It uses local language and forms.', '**It retells colonial encounters from the colonised community’s point of view, in an English shaped by its own languages and proverbs.**'] },
  ]),

  // ---------- 13. Examiners' advice ----------
  L('ali-examiners-1', 'ali-u6-reports', '13.1', 'What chief examiners keep criticising', 17, ['Exam'], [
    'Recurring weaknesses named in examiners’ reports and in the scheme: **vagueness** (claims without evidence), **weak paragraphing** (no clear point), **plot-telling**, **misspelt names** of characters and authors, **lack of explicit textual citation**, **unbalanced comparisons**, and **not answering the question set**.',
    'Fixes: underline the question’s key words and use them in every paragraph; one point per paragraph with evidence; quotations short and exact; check names; balance comparisons; end each paragraph with a link.',
    'Self-mark with a checklist after each practice essay.',
    '**Practice task:** rewrite one of your weakest past paragraphs using the checklist.',
  ], 'ali-examiners', 'A checklist turns examiners’ complaints into your daily routine.',
  ['Which weakness does a paragraph that summarises events show?', ['plot-telling', 'balance', 'precise citation', 'relevance'], 'Retelling.'],
  [['Vagueness', 'General claims without precise evidence.'], ['Relevance', 'Direct focus on the question set.'], ['Checklist', 'A list of points used to check one’s work.']],
  [
    { q: 'Rewrite a vague claim: "The author uses a lot of good imagery."', steps: ['Name a specific image.', 'Explain its effect.', '**The recurring image of "cracked earth" presents the drought as a wound in the land, mirroring the community’s suffering.**'] },
    { q: 'Write a five-point essay checklist.', steps: ['Question and structure.', 'Evidence and accuracy.', '**Key words used; one point per paragraph; short exact quotations; names spelt correctly; each paragraph linked to the question.**'] },
  ]),

  L('ali-master-1', 'ali-u6-reports', '13.2', 'Master files of transverse themes', 16, ['Exam'], [
    'A **master file** links **transverse themes** (power, love, death, identity, justice, betrayal, the individual and society, tradition and change, women’s roles, corruption) to **every set book**: drama, prose and poetry.',
    'For each theme and text: a one-line argument, two short quotations, one technique, and one context point.',
    'Use the file to plan **comparisons** and to answer unfamiliar essay questions by adapting known material.',
    'By the close of Term 2, every set book must be covered and the master file complete; the school signs off syllabus coverage before the national examination.',
  ], 'lit-theme-map', 'A theme with evidence from every text is a ready-made essay plan.',
  ['A transverse theme is one that:', ['appears across several set books', 'appears in one line', 'is only in poetry', 'is the title'], 'Cross-cutting.'],
  [['Master file', 'A revision file linking themes to every set text.'], ['Transverse theme', 'A theme that runs across several texts.'], ['Syllabus coverage', 'Completion of all required texts and topics.']],
  [
    { q: 'Write a master-file entry: theme "power", one play.', steps: ['A one-line argument.', 'Technique and context.', '**Power corrupts once it escapes moral limits; imagery of blood and sleeplessness; written for a king who feared regicide.**'] },
    { q: 'How can a master file help with an unexpected question?', steps: ['Questions often combine themes.', 'Adapt prepared evidence.', '**It lets you quickly find evidence for the theme the question names and reorganise it into a fresh argument.**'] },
  ]),

  // ---------- 14. Final weeks ----------
  L('ali-u6-essays', 'ali-u6-final', '14.1', 'Essay clinics: bold openings, embedded quotations, meta-language', 17, ['Essay'], [
    'A **bold thesis opening** answers the question in the first two sentences, without throat-clearing ("Since time immemorial...") or biography.',
    '**Embed** short quotations fluidly and **analyse** them; never leave a quotation to speak for itself.',
    'Use **literary meta-language** with command: juxtaposition, irony, foreshadowing, characterisation, imagery, motif, structure, tone; each term followed by its **effect**.',
    'Timing: plan each essay quickly, keep to your time per question, and leave a few minutes to check names and quotations. In 2026, Papers 2 and 3 lasted 3 hours each (Friday 12 June).',
  ], 'lit-essay-plan', 'Read your first sentence aloud: if it does not answer the question, cut it.',
  ['Which is a bold thesis opening?', ['The play presents ambition not as a crime but as a sickness that spreads.', 'Shakespeare was born in 1564.', 'Since time immemorial, people have been ambitious.', 'This essay will talk about ambition.'], 'Direct answer.'],
  [['Thesis opening', 'A first sentence that states the argument.'], ['Throat-clearing', 'Empty opening sentences that delay the argument.'], ['Command of terms', 'Using technical terms precisely and with their effect.']],
  [
    { q: 'Rewrite: "In this essay I will discuss the theme of love in the poems."', steps: ['Replace announcement with argument.', 'State the position.', '**Both poems present love as a force that outlasts time, but one celebrates its constancy while the other mourns what time destroys.**'] },
    { q: 'Add effect to: "The writer uses juxtaposition."', steps: ['Name what is juxtaposed.', 'Explain the effect.', '**By juxtaposing the wedding feast with the funeral procession, the writer exposes how quickly joy turns to grief.**'] },
  ]),

  L('ali-u6-mock', 'ali-u6-final', '14.2', 'The mock and final remediation', 16, ['Exam'], [
    'The **regional mock** (week 25) simulates all the papers under official conditions and timings. Treat it as the real examination.',
    'After the mock, correct persistent errors named in the scheme: **misspelt character names**, **missing explicit citations**, **unbalanced poetry comparisons**, and plot-telling.',
    'Final revision: quotation banks, master files, period cards, glossary; one timed essay per set text; one unseen poem.',
    'The national written phase follows: arrive early, read every instruction, plan each answer, and keep to time.',
  ], 'mock-cycle', 'Fix the habit, not just the essay: misspelt names and missing quotations are habits.',
  ['A persistent error the scheme names for post-mock remediation is:', ['misspelling characters’ names', 'too much analysis', 'perfect timing', 'balanced comparison'], 'Accuracy.'],
  [['Mock', 'A full practice examination.'], ['Remediation', 'Targeted work on weaknesses.'], ['Official conditions', 'The timing and rules of the real examination.']],
  [
    { q: 'Plan the last week of revision for Literature.', steps: ['One text per day with a timed plan.', 'Daily quotation review; rest.', '**Monday play, Tuesday African novel, Wednesday non-African novel, Thursday poetry and unseen, Friday glossary and master file; review quotations daily and sleep well.**'] },
    { q: 'How do you correct a habit of unbalanced poetry comparison?', steps: ['Check each paragraph for both poems.', 'Use a two-column plan.', '**Plan in two columns and make sure every paragraph has evidence from both poems before writing.**'] },
  ]),
];
