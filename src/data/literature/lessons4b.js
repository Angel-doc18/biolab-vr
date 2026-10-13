// Literature in English lessons for Form 4, terms 2 and 3: sound and mood
// in poetry, the literary essay, African prose, characterization and style,
// and comparing texts before the promotional examinations. Passages are
// written for this app, or quoted briefly from public-domain classics.

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
  // ---------- Sound devices ----------
  L('li-sound-4', 'li-f4-soundpoems', '9.1', 'Rhyme, rhythm and the music of poetry', 14, ['Poetry', 'Literary devices'], [
    '**Rhyme** is the repetition of similar sounds, usually at the ends of lines:\n- **full rhyme**: day / way; **half rhyme** (slant rhyme): soul / all\n- **internal rhyme**: a rhyme inside a line\n- the **rhyme scheme** is shown with letters: each new end sound takes a new letter, so ABAB means lines 1 and 3 rhyme, and lines 2 and 4 rhyme.',
    '**Rhythm** is the pattern of stressed and unstressed syllables. A regular rhythm can suggest marching, galloping or a lullaby; free verse follows the rhythms of speech. Tennyson’s "Half a league, half a league, / Half a league onward" imitates the gallop of horses in a cavalry charge.',
    'Other sound devices:\n- **alliteration**: repeated initial consonants\n- **assonance**: repeated vowel sounds ("the rain in Spain")\n- **consonance**: repeated consonant sounds inside or at the end of words\n- **onomatopoeia**, **repetition** and the **refrain**.\nColeridge’s line "The fair breeze blew, the white foam flew" uses internal rhyme (blew, flew) and alliteration on f and b to make the ship’s speed feel joyful.',
  ], 'lit-sound-devices', 'Say what the sound does: speed, softness, harshness, music or emphasis.',
  ['Lines ending in "night, day, light, way" have the rhyme scheme:', ['ABAB', 'AABB', 'ABBA', 'ABCD'], 'night/light are A; day/way are B.'],
  [['Rhyme scheme', 'The pattern of end rhymes, shown with letters such as ABAB.'], ['Assonance', 'Repetition of vowel sounds in nearby words.'], ['Consonance', 'Repetition of consonant sounds, often inside or at the end of words.'], ['Internal rhyme', 'A rhyme within a single line.']],
  [
    { q: 'Work out the rhyme scheme of Wordsworth’s opening lines: "I wandered lonely as a cloud / That floats on high o’er vales and hills, / When all at once I saw a crowd, / A host, of golden daffodils".', steps: ['cloud (A), hills (B), crowd (A), daffodils (B).', '**The rhyme scheme is ABAB.** The simile "lonely as a cloud" also shows the speaker drifting alone before the joyful surprise of the flowers.'] },
  ]),

  L('li-mood-4', 'li-f4-soundpoems', '9.2', 'Tone, mood and complex imagery', 13, ['Poetry'], [
    '**Tone** and **mood** are different. Tone is the speaker’s attitude; mood is the atmosphere and the feeling the poem creates in the **reader**. A speaker may describe a war in a calm, factual tone, while the mood for the reader is one of horror.',
    'Complex imagery goes beyond a single comparison:\n- an **extended metaphor** develops one comparison over several lines or the whole poem\n- **juxtaposition** places contrasting images side by side\n- **symbols** carry ideas: a tiger may stand for the frightening power of creation\n- an **oxymoron** joins opposites: "bitter sweetness".\nBlake’s "Tyger Tyger, burning bright, / In the forests of the night" sets fire against darkness, creating a mood of awe and fear.',
    'Wilfred Owen opens his war poem "Dulce et Decorum Est" with "Bent double, like old beggars under sacks": the simile shows young soldiers made old and broken, and the mood is grim and pitiful. Always link imagery to the feeling it produces and to the poem’s meaning.',
  ], 'lit-sound-devices', 'Tone belongs to the speaker; mood belongs to the reader.',
  ['Mood in a poem is:', ['the atmosphere and the feeling it creates in the reader', 'the speaker’s attitude', 'the rhyme scheme', 'the title'], 'Tone is the speaker’s attitude; mood is the reader’s feeling.'],
  [['Mood', 'The atmosphere of a work and the feeling it creates in the reader.'], ['Extended metaphor', 'A metaphor developed over several lines or a whole work.'], ['Juxtaposition', 'Placing contrasting things side by side.'], ['Oxymoron', 'A figure that joins two opposite words.']],
  [
    { q: 'Explain the effect of the simile in "Bent double, like old beggars under sacks".', steps: ['The soldiers are compared to old beggars carrying heavy loads.', '**The simile strips the soldiers of glory: they are exhausted, bent and poor, which creates a grim, pitiful mood and challenges the idea that war is heroic.**'] },
  ]),

  // ---------- The literary essay ----------
  L('li-essayintro-4', 'li-f4-essay', '10.1', 'The introduction and the thesis statement', 13, ['Essay skills'], [
    'First **analyse the question**. Underline the key words: the instruction ("show how", "discuss", "to what extent", "compare", "examine") and the focus (a character, a theme, a technique). A question beginning "To what extent" wants a balanced judgement, not only agreement.',
    'A strong introduction is short and direct:\n- name the **title** (underlined in handwriting) and the **author**\n- give one sentence of context only if it helps\n- state your **thesis**: a clear answer to the question\n- preview the main points you will develop.\nAvoid long biographies, retelling the plot, and empty openings such as "In this essay I am going to write about…".',
    'A thesis statement takes a position that can be argued: "In Macbeth, Shakespeare shows that ambition without conscience destroys both the ambitious man and the order around him." The rest of the essay proves it, paragraph by paragraph.',
  ], 'lit-essay-plan', 'Answer the question in your first paragraph.',
  ['A good thesis statement:', ['takes a clear position that the essay will prove', 'retells the plot', 'lists the characters', 'asks the reader a question only'], 'It is an arguable answer.'],
  [['Thesis statement', 'A clear, arguable answer to the essay question.'], ['Instruction word', 'The word in a question that says what to do: discuss, show how, compare.'], ['To what extent', 'A question asking for a balanced judgement of how far something is true.']],
  [
    { q: 'Write an introduction for: "Show how ambition leads to destruction in Macbeth."', steps: ['Name the title and author, give the thesis, preview the points.', '**"In Macbeth, Shakespeare shows that ambition without moral restraint leads to destruction. Macbeth’s desire for the crown drives him to murder Duncan, his guilt and fear push him to further killings, and in the end his ambition destroys his marriage, his peace of mind and his life."**'] },
  ]),

  L('li-essaybody-4', 'li-f4-essay', '10.2', 'Body paragraphs, transitions and the conclusion', 14, ['Essay skills'], [
    'Each body paragraph develops **one point**:\n- a **topic sentence** that states the point and links it to the question\n- **evidence**: a short quotation or a precise reference\n- **explanation**: how the evidence proves the point, with comment on language where possible\n- a **link** back to the question.\nThis is often remembered as PEE (Point, Evidence, Explanation) or PEEL (with a Link).',
    '**Transitions** connect the paragraphs: to add (furthermore, moreover, in addition), to contrast (however, on the other hand, in contrast), to show result (consequently, as a result, therefore), to move in time (at first, later, finally). They show the examiner that your argument is building.',
    'The **conclusion** restates the thesis in fresh words, draws the points together and gives a final judgement. It must not introduce new evidence or retell the plot. In an examination, plan for about five minutes, write four to six paragraphs and keep a few minutes to check spelling, especially of characters’ names.',
  ], 'lit-essay-plan', 'One point per paragraph, and a link back to the question at the end of each.',
  ['"Furthermore" is a transition used to:', ['add a point', 'contrast two ideas', 'end the essay', 'quote a character'], 'It adds a further point.'],
  [['Topic sentence', 'The first sentence of a paragraph, stating its main point.'], ['PEEL', 'Point, Evidence, Explanation, Link: a pattern for paragraphs.'], ['Transition', 'A word or phrase that connects ideas or paragraphs.']],
  [
    { q: 'Write a body paragraph on Macbeth’s ambition using his words in Act 1, Scene 7: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o’erleaps itself".', steps: ['Point, evidence, explanation, link.', '**"Macbeth himself recognises that ambition is his only motive for murder. He admits that he has \'no spur\' except \'vaulting ambition, which o’erleaps itself\'. The image of a rider who jumps too high and falls on the other side foreshadows his downfall: his ambition will carry him past every limit and destroy him. In this way Shakespeare presents ambition as the root of Macbeth’s destruction."**'] },
  ]),

  // ---------- African prose ----------
  L('li-africancontext-4', 'li-f4-africanprose', '11.1', 'The background of African prose', 14, ['Prose', 'Context'], [
    'African prose grows from a long **oral tradition** of folktales, myths and storytelling, and from the experience of **colonialism**. Many writers educated in mission schools began, in the 1950s, to tell African stories from an African point of view. Chinua Achebe’s Things Fall Apart (1958) shows a proud Igbo society before and during the arrival of colonial rule and Christian missions.',
    'Cameroon has a rich place in this history. Ferdinand Oyono’s Houseboy (first published in French in 1956 as Une vie de boy) is told through the diary of a young servant in a colonial household, and Mongo Beti’s The Poor Christ of Bomba (1956) satirises a missionary’s campaign. Anglophone Cameroonian writers include the playwright Bole Butake, author of Lake God, and the novelist Linus Asong, author of The Crown of Thorns.',
    'After independence, many writers turned to **disillusionment** with the new rulers: corruption, abuse of power and the gap between rich and poor, as in Achebe’s A Man of the People (1966). When you study your prescribed text, place it in its period and society, note the author’s experience, and ask what the text is responding to.',
  ], 'lit-african-themes', 'Place the text in its time and society before judging its characters.',
  ['Ferdinand Oyono’s Houseboy is told through:', ['the diary of a young servant', 'a chorus', 'letters between two kings', 'a poem cycle'], 'Toundi’s diary gives a first-person view of colonial life.'],
  [['Colonialism', 'The rule of one country over another territory and its people.'], ['Disillusionment', 'Disappointment when hopes are not fulfilled, for example after independence.'], ['Oral tradition', 'Stories, songs and wisdom passed on by word of mouth.']],
  [
    { q: 'Explain why knowing the colonial context helps a reader of a novel in which a village teacher is beaten by a district officer.', steps: ['In the colonial period the district officer held power over local people, often with no legal check.', '**The context shows that the beating is not only a personal cruelty but an example of the injustice of the colonial system, which helps the reader see the writer’s criticism of that system.**'] },
  ]),

  L('li-africanthemes-4', 'li-f4-africanprose', '11.2', 'Core themes: tradition, governance and gender', 14, ['Prose', 'Themes'], [
    'Themes common in African prose, with questions to ask:\n- **tradition and modernity**: what is gained and lost when customs meet new ways?\n- **colonialism and its legacy**: how does foreign rule change people and societies?\n- **post-colonial governance**: how do leaders use power: corruption, abuse, hope?\n- **gender roles**: what does society expect of women and men, and does the text accept or question it?\n- **religion**, **education**, **the city and the village**, **family and generations**, **poverty and wealth**.',
    'A theme is shown, not stated. Trace it through:\n- **characters** who represent different positions\n- **events** that test them\n- **symbols** and settings, such as the village shrine and the city office\n- the **ending**, which shows what the writer suggests.',
    'Plan a theme essay by choosing three or four moments where the theme develops, each with evidence. Show change: "At first… later… by the end…". Avoid one-sided readings; many African writers show both the strengths and the limits of tradition.',
  ], 'lit-african-themes', 'Trace a theme through characters, events, symbols and the ending.',
  ['A novel that shows a woman refusing a forced marriage explores mainly:', ['gender roles', 'post-colonial elections', 'the weather', 'urban transport'], 'Society’s expectations of women are questioned.'],
  [['Tradition', 'Customs and beliefs passed down through generations.'], ['Modernity', 'New ways of life linked to schooling, cities, technology and new ideas.'], ['Patriarchy', 'A social system in which men hold most of the power.'], ['Legacy', 'Something handed down from the past, such as the effects of colonial rule.']],
  [
    { q: 'Plan three paragraphs on "tradition and modernity" for a novel in which a young chief-to-be studies in the city and returns to rule.', steps: ['Paragraph 1: **at first he rejects village customs as backward (his speech at his return).**', 'Paragraph 2: **a crisis, such as a land dispute, shows that the elders’ knowledge solves what his city methods cannot.**', 'Paragraph 3: **by the end he combines both, which suggests that the writer values a balance between tradition and modernity.**'] },
  ]),

  // ---------- Characterization and style ----------
  L('li-character-4', 'li-f4-style', '12.1', 'Protagonists, antagonists and methods of characterization', 14, ['Characterization'], [
    'Character roles: the **protagonist** (the central character), the **antagonist** (the character or force that opposes the protagonist), the **foil** (a character who contrasts with another to highlight their qualities) and the **confidant** (a trusted friend to whom a character reveals thoughts). Characters may be **round** (complex) or **flat** (one or two traits), **dynamic** or **static**.',
    'Writers reveal character in two ways. **Direct characterization**: the narrator tells us ("She was proud and quick to anger"). **Indirect characterization**: we infer from what the character **says**, **thinks**, **does**, how they **look**, and the **effect** they have on others. A useful memory word is STEAL: Speech, Thoughts, Effect on others, Actions, Looks.',
    'A **character sketch** in an essay gives the main traits, each with evidence; shows how the character changes; and explains the character’s **function**: what theme or idea the writer explores through them.',
  ], 'lit-characterization', 'STEAL: Speech, Thoughts, Effect on others, Actions, Looks.',
  ['"The children went quiet whenever the headmaster passed" reveals character through:', ['the effect on others', 'direct statement', 'the title', 'the rhyme scheme'], 'Others’ reactions tell us he is feared.'],
  [['Protagonist', 'The central character of a work.'], ['Antagonist', 'The character or force opposing the protagonist.'], ['Foil', 'A character who contrasts with another to highlight their qualities.'], ['Indirect characterization', 'Revealing character through speech, thoughts, actions, looks and effect on others.']],
  [
    { q: 'Write a short character sketch of Mama Ekei from the play extract in lesson 3.2.', steps: ['Trait 1 with evidence: **wise and far-sighted: she asks whether the road will bring "strangers who will buy our land for salt".**', 'Trait 2 with evidence: **dignified and firm: she answers Njika with a proverb-like saying, "Progress has a sweet mouth", and leaves.**', 'Function: **she voices the community’s fears, so through her the playwright questions whether development always benefits ordinary people.**'] },
  ]),

  L('li-proverbs-4', 'li-f4-style', '12.2', 'Proverbs, idioms, symbolism and style', 13, ['Style'], [
    'Proverbs are central to much African writing. Achebe’s narrator in Things Fall Apart famously compares proverbs to the palm oil with which words are eaten. In a novel or play, proverbs:\n- carry the **wisdom and values** of the community\n- give **authority** to a speaker, usually an elder\n- allow **indirect** criticism or advice\n- **characterize**: who uses proverbs well, and who cannot?',
    'Writers also use **local idioms**, translated expressions, Pidgin English and switches between languages to make dialogue realistic and to show the social position of characters. **Symbolism** may draw on local belief: a sacred python, a masquerade, a palm tree.',
    'An author’s **style** is how they write: diction (simple or ornate), sentence length, imagery, humour and irony, the use of dialogue, and **narrative techniques** such as **flashback** (a return to earlier events) and foreshadowing. To comment on style, give an example and its effect: "Short, simple sentences in the attack scene create speed and panic."',
  ], 'lit-characterization', 'Explain a proverb in two steps: its general meaning, then why it is used at that moment.',
  ['A flashback is:', ['a scene that returns to earlier events', 'a hint of the future', 'the final chapter', 'a type of rhyme'], 'It interrupts the order of events.'],
  [['Proverb', 'A short traditional saying that expresses a general truth.'], ['Flashback', 'A scene that returns to events before the main action.'], ['Style', 'The way a writer uses language and narrative techniques.'], ['Pidgin English', 'A contact language widely spoken in Cameroon, used in dialogue to show realism and social setting.']],
  [
    { q: 'An elder says to two quarrelling brothers: "When two elephants fight, it is the grass that suffers." Explain the proverb and its function.', steps: ['General meaning: **when powerful people quarrel, the weak around them are hurt.**', 'Function: **the elder warns the brothers indirectly that their dispute will harm their families, which shows his wisdom and the community’s value of peace.**'] },
  ]),

  // ---------- Comparing texts ----------
  L('li-compare-4', 'li-f4-review', '13.1', 'Comparing two texts', 14, ['Essay skills'], [
    'A comparison looks at **similarities** and **differences** between texts. Useful points of comparison: theme, characters, setting, structure (acts, chapters, stanzas), narrative point of view, style and tone, and the ending.',
    'Two ways to organise:\n- **point by point**: each paragraph discusses one aspect in both texts (recommended, because the comparison stays active)\n- **block**: everything on text A, then everything on text B, with a final comparison (easier, but often turns into two separate essays).\nConnectives of likeness: similarly, likewise, in the same way, both. Of contrast: whereas, while, however, in contrast, on the other hand.',
    'Keep the balance: give evidence from **both** texts in each paragraph, and end with a judgement of what the comparison reveals.',
  ], 'lit-compare', 'Point by point: both texts in every paragraph.',
  ['In a point-by-point comparison, each paragraph:', ['discusses one aspect in both texts', 'covers only one text', 'retells one plot', 'contains no evidence'], 'The comparison stays active.'],
  [['Point-by-point comparison', 'Organising a comparison so each paragraph covers both texts on one aspect.'], ['Block comparison', 'Writing about one text fully, then the other.'], ['Connective of contrast', 'A word that introduces a difference: whereas, however, in contrast.']],
  [
    { q: 'Compare the presentation of nature in "Harmattan" (lesson 5.1) and Wordsworth’s daffodils (lesson 9.1) in one paragraph.', steps: ['Similarity: both speakers find hope or joy in a sudden sight of flowers.', 'Difference: **"Harmattan" begins with a harsh, grey world of dust and illness and saves its hope for one "stubborn" flower, whereas Wordsworth’s speaker meets "a host, of golden daffodils", an image of abundance.**', 'Judgement: **both poems show nature restoring the spirit, but the African poem presents hope as hard-won, while Wordsworth’s is overflowing.**'] },
  ]),

  L('li-promo-4', 'li-f4-review', '13.2', 'Contextual short answers and timed essays', 14, ['Exam skills'], [
    'A **contextual question** gives an extract and asks short questions about it. Typical tasks: identify the speaker and the listener; say where and when the extract takes place; explain what happened just before or just after; explain the meaning of a line; comment on the language; say why the extract matters in the whole work. Answer in full sentences and keep each answer to the point.',
    'For **timed essays**:\n- read all the questions and choose the one you can prove best\n- spend about five minutes on a plan: thesis and three or four points with evidence\n- write the introduction, body paragraphs and conclusion\n- keep a few minutes to check names, spelling and tense.',
    'The Form 4 promotional examination prepares you for the GCE year. Use your character files, theme trackers and quotation banks to revise, and practise writing under time limits at least once a week.',
  ], 'lit-compare', 'Plan for five minutes: a planned essay is shorter, clearer and better marked.',
  ['In a contextual question, "the significance of the extract" means:', ['why it matters in the whole work', 'how many words it has', 'who printed the book', 'its font'], 'Link the extract to plot, character or theme.'],
  [['Contextual question', 'A question on an extract from a set text, testing understanding of its place and meaning.'], ['Significance', 'The importance of a passage for the plot, characters or themes.'], ['Essay plan', 'A short outline of thesis and points written before the essay.']],
  [
    { q: 'Answer contextual questions on the Njika and Mama Ekei extract (lesson 3.2): (1) Who speaks the line "Progress has a sweet mouth"? (2) What does it mean? (3) Why is the extract important?', steps: ['(1) **Mama Ekei, speaking to Njika.**', '(2) **Promises of progress sound pleasant, but they may hide harm, like a sweet mouth that hides bitter intentions.**', '(3) **It introduces the central conflict between development and tradition, and sets Mama Ekei up as the voice of the community’s doubts.**'] },
  ]),
];
