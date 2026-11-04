// Literature in English lessons for Form 2 (second file): a play about
// the transatlantic slave trade, a village novel about hard work and success,
// and making associations between literature and life. Set books change with
// the national booklist, so each lesson teaches a method. The scenes,
// passages and characters (the coastal village of Mbonjo; the farming village
// of Nkwamba) were written for this app. **double asterisks** mark key terms;
// `examples` are worked examples.

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

export const LESSONS_2B = [
  // ---------- 15. Drama: background ----------
  L('li-background-2', 'li-f2-drama-intro', '10.1', 'The historical background of a play: the transatlantic slave trade', 14, ['Drama', 'Background'], [
    'To understand a historical play, first learn its **background**. From the sixteenth to the nineteenth century, European traders carried millions of Africans across the Atlantic as slaves. This **transatlantic slave trade** formed a **triangle**:\n1. ships left **Europe** with manufactured goods (cloth, guns, alcohol, beads, mirrors)\n2. in **Africa** they exchanged them for captives, sold by traders and some local rulers\n3. captives were carried across the Atlantic to the **Americas** (the **Middle Passage**) to work on plantations\n4. ships returned to Europe with sugar, cotton, tobacco and coffee.',
    'The Cameroon coast took part: captives were shipped from places such as **Bimbia**, near Limbe, now a heritage site. Many died in the crowded ships. Britain **abolished** the slave trade in **1807** and slavery in its colonies in **1833**, and other countries followed during the nineteenth century.',
    'A play on this subject explores **human rights abuse**, greed, complicity, resistance and the dignity of the enslaved. Knowing the history helps you understand the characters’ choices and the playwright’s **concerns**.',
  ], 'li2-triangular-trade', 'Before reading a historical play, list three facts about its period.',
  ['On the second side of the triangle, ships carried:', ['enslaved Africans to the Americas', 'sugar to Europe', 'guns to Africa', 'tourists to Africa'], 'The Middle Passage.'],
  [['Transatlantic slave trade', 'The trade in enslaved Africans across the Atlantic, from the sixteenth to the nineteenth century.'], ['Middle Passage', 'The voyage of enslaved Africans across the Atlantic.'], ['Abolition', 'The official ending of a practice such as the slave trade.']],
  [
    { q: 'Give the three sides of the triangular trade with what was carried on each.', steps: ['Europe to Africa: **manufactured goods** (cloth, guns, alcohol).', 'Africa to the Americas: **enslaved Africans** (the Middle Passage).', 'Americas to Europe: **plantation goods** (sugar, cotton, tobacco).'] },
  ]),

  L('li-dramafeatures-2', 'li-f2-drama-intro', '10.2', 'Tragedy and comedy; hero, main and minor characters', 12, ['Drama'], [
    'Plays are often classed as:\n- **tragedy**: serious, ending in suffering or the fall of the hero, often through a fault such as pride or greed\n- **comedy**: light, with humour and a happy ending\n- **tragicomedy**: a mixture of both.',
    'The **hero** or **heroine** is the main male or female character whom the audience follows and often admires; the **villain** opposes and harms them. **Main characters** are central to the plot; **minor characters** appear less and help the action (servants, messengers, villagers).',
    'An opening scene written for this lesson, from the play "The Shore of Mbonjo": "(The beach at dawn. A ship’s mast on the horizon. CHIEF DIBO sits on a carved stool; ELDER MOKI stands beside him. NANJE, a young fisherman, runs in.) NANJE: Chief, the white men’s ship has come again! MOKI: And it will leave heavier than it came." The setting (a coastal village), the main characters (Chief Dibo, Nanje) and the threat (the slave ship) are introduced at once.',
  ], 'li2-drama-terms', 'Ask whose fate the play follows: that is the main character.',
  ['"And it will leave heavier than it came" suggests that the ship will:', ['take captives away', 'bring more goods', 'sink', 'carry fish'], 'A hint of the slave trade.'],
  [['Tragedy', 'A serious play ending in suffering or the fall of the hero.'], ['Comedy', 'A light play with humour and a happy ending.'], ['Minor character', 'A character with a small part who supports the plot.']],
  [
    { q: 'Identify the setting, the main characters and the conflict in the opening of "The Shore of Mbonjo".', steps: ['Setting: **the beach of Mbonjo at dawn**, with a ship on the horizon.', 'Main characters: **Chief Dibo** and **Nanje**; Elder Moki is a minor character who warns.', 'Conflict: the **slave ship’s return** threatens the village.'] },
  ]),

  // ---------- 16. Deceit and complicity ----------
  L('li-dramairony-2', 'li-f2-complicity', '11.1', 'Dramatic irony and contrast in drama', 10, ['Drama', 'Literary devices'], [
    '**Dramatic irony** occurs when the **audience knows something a character does not**. It creates tension and makes the audience want to warn the character. For example, the audience has seen the trader count chains in his cabin, but the chief believes the trader has come only to buy palm oil.',
    '**Contrast** between characters (a greedy chief and an honest elder, a cruel captain and a kind sailor) helps the audience judge them and see the playwright’s values.',
  ], 'lit-irony-types', 'Dramatic irony depends on what the audience has already seen.',
  ['The audience knows the gifts are a trick, but the chief thinks they are friendship. This is:', ['dramatic irony', 'verbal irony', 'a simile', 'a monologue'], 'The audience knows more.'],
  [['Dramatic irony', 'When the audience knows something a character does not.']],
  [
    { q: 'Explain the dramatic irony: CAPTAIN HALE (smiling): "Chief, these mirrors are gifts from my king, who loves your people." (Earlier, the audience saw him tell his sailors: "Mirrors are cheap; men are not.")', steps: ['The chief hears only kind words and sees gifts.', 'The audience knows the captain values the people only as merchandise.', 'The **dramatic irony** creates **tension** and exposes the captain’s **deceit**.'] },
  ]),

  L('li-complicity-2', 'li-f2-complicity', '11.2', 'Scenes of deceit and complicity in the slave trade', 12, ['Drama'], [
    'Plays about the slave trade show the **tricks** of traders (gifts of gin, cloth, mirrors and guns; false promises of friendship; encouraging wars between villages to obtain captives) and the **complicity** of some local rulers who sold their own people for goods. They condemn **human rights abuse**, **corruption** and short-sighted greed, and praise characters who defend **humanity**.',
    'A scene written for this lesson:\n"CHIEF DIBO (stroking a bolt of red cloth): Ten guns, twenty bottles, and this cloth. For that, take the troublemakers from the hill village.\nELDER MOKI: Chief, today the hill village, tomorrow our own sons.\nCHIEF DIBO: Moki, you are old. The sea is wide and hungry; better it eats strangers than us."\nThe chief is **myopic** (short-sighted) and **greedy**; Moki is **wise**; the **metaphor** "the sea is wide and hungry" shows the endless demand for captives. The contrast warns that **those who sell others will one day be sold**.',
  ], 'li2-tricks', 'Name the trick, then its result for the community.',
  ['Elder Moki’s line "today the hill village, tomorrow our own sons" warns that:', ['the trade will soon take the chief’s own people', 'the hill village is rich', 'the sons are lazy', 'trade is good'], 'He foresees the consequences.'],
  [['Complicity', 'Taking part with others in a wrong.'], ['Myopic', 'Short-sighted; unable to see future consequences.']],
  [
    { q: 'Contrast Chief Dibo and Elder Moki in this scene.', steps: ['Chief Dibo: **greedy and myopic**; he trades people for "ten guns, twenty bottles".', 'Elder Moki: **wise and humane**; he warns of the future.', 'The contrast makes the audience **condemn the chief’s complicity**.'] },
  ]),

  // ---------- 17. Captives ----------
  L('li-monologue-2', 'li-f2-captives', '12.1', 'Dialogue and monologue', 10, ['Drama'], [
    '**Dialogue** is the conversation between characters; it moves the plot and shows relationships and conflict. A **monologue** is a long speech by one character to others or to the audience; a **soliloquy** is a speech by a character alone, revealing private thoughts.',
    'A monologue written for this lesson, spoken by NANJE in chains: "They tied my hands, but not my eyes. I saw the chief take bottles for my brothers. I saw my mother run along the sand. The sea is cold tonight, but my anger is warm. One day this chain will be a story we tell our children: the story of how we broke it." It reveals Nanje’s **suffering**, **anger** and **hope**, and creates **pathos**.',
  ], 'li2-monologue', 'A monologue lets us inside a character’s mind.',
  ['A long speech by one character is a:', ['monologue', 'dialogue', 'stage direction', 'chorus'], 'One speaker.'],
  [['Dialogue', 'Conversation between characters.'], ['Monologue', 'A long speech by one character.'], ['Soliloquy', 'A speech by a character alone on stage, revealing thoughts.']],
  [
    { q: 'What does the line "The sea is cold tonight, but my anger is warm" reveal?', steps: ['A **contrast** between the cold sea and warm anger.', 'It shows Nanje’s **determination and refusal to accept slavery**, despite his suffering.'] },
  ]),

  L('li-captives-2', 'li-f2-captives', '12.2', 'Rivalry, conflict and the treatment of captives', 12, ['Drama'], [
    'Conflict in the play grows from **rivalry** (chiefs competing for traders’ goods), **deceit** and **ignorance** (villagers who do not know where the ships go). Scenes of captives chained in the barracoon (a holding pen) or in the ship’s hold show **cruelty** and create strong **pathos**. Some characters feel **disillusionment** when they discover the truth about the traders.',
    'Values the playwright promotes: love, respect for human life, and **forgiveness** that does not forget injustice. **Dramatising** these scenes in class helps students understand the fear and dignity of the captives.',
  ], 'li1-conflict-types', 'Identify the two sides of each conflict and what each wants.',
  ['A holding pen where captives were kept before shipping was a:', ['barracoon', 'market stall', 'palace', 'school'], 'Captives waited there for the ships.'],
  [['Rivalry', 'Competition between people or groups.'], ['Disillusionment', 'The disappointment of discovering the truth about something once believed good.']],
  [
    { q: 'Explain how the chief becomes disillusioned, in a scene where his own son is taken.', steps: ['Before: Chief Dibo believes the traders are friends who bring gifts.', 'Event: the traders seize his **own son** with the captives.', 'After: he realises he has been **deceived**: **disillusionment** and tragic regret.'] },
  ]),

  // ---------- 18. Mystery ----------
  L('li-suspense-2', 'li-f2-mystery', '13.1', 'Suspense and atmosphere on stage', 10, ['Drama'], [
    '**Suspense** is anxious waiting to know what will happen. Playwrights create it through: hints and warnings (**foreshadowing**), a secret the audience shares, a race against time, a character in danger, and delays before a revelation.',
    'On stage, **atmosphere** is created by **stage directions**: lighting (darkness, torches, moonlight), sound (drums, wind, silence), setting (a forest shrine at night) and the actors’ movements and voices. A dark, drum-filled scene in a sacred forest creates an atmosphere of **mystery and fear**.',
  ], 'li1-atmosphere', 'Read stage directions as if you were the lighting and sound team.',
  ['"(Darkness. A single drum beats slowly. A figure in white appears.)" creates:', ['mystery and suspense', 'comedy', 'boredom', 'a market scene'], 'Stage effects build tension.'],
  [['Suspense', 'Anxious uncertainty about what will happen.'], ['Foreshadowing', 'A hint of what will happen later.']],
  [
    { q: 'Write a stage direction that creates suspense before a secret meeting.', steps: ['Lighting and time: "**(Night. The shrine is lit by one torch that flickers in the wind.)**"', 'Sound and movement: "**(Far away, a horn sounds three times. NANJE freezes and listens.)**"'] },
  ]),

  L('li-secret-2', 'li-f2-mystery', '13.2', 'Mystery and secret societies in African drama', 12, ['Drama'], [
    'Many African plays include **secret societies** (groups whose rites are hidden from outsiders), **mystical** characters such as priests and priestesses, oracles and masquerades. They represent the community’s spiritual power and traditions. In the play, PRIESTESS EBOTE consults the ancestors and warns the chief; the secret society meets at night to plan resistance.',
    'Such scenes create **mystery** and **suspense** and show beliefs. A good reader asks: does the playwright show these forces as protecting the community, as dangerous, or both? Violence or cruelty done in their name may also be questioned. Attitudes: awareness, prudence and caution.',
  ], 'lit-stage-conventions', 'Note who in the play respects the priestess and who ignores her.',
  ['In the play, Priestess Ebote’s warning to the chief mainly creates:', ['foreshadowing and suspense', 'humour', 'a market', 'a flashback'], 'Her warning hints at disaster.'],
  [['Secret society', 'A group whose rites and knowledge are kept from outsiders.'], ['Oracle', 'A priest or shrine through which the gods or ancestors are believed to speak.']],
  [
    { q: 'Why might the playwright let the chief ignore the priestess’s warning?', steps: ['Ignoring the warning shows the chief’s **pride and greed**.', 'It creates **dramatic irony**: the audience expects disaster.', 'It prepares for his **tragic fall** later.'] },
  ]),

  // ---------- 19. Resistance ----------
  L('li-heroine-2', 'li-f2-resistance', '14.1', 'The hero or heroine and character development', 10, ['Drama', 'Characterisation'], [
    'The **hero** (or **heroine**) is the central character whose struggle the audience follows. In a play about resistance, the hero is often an ordinary person who becomes extraordinary: Nanje begins as a fisherman who fears the chief and ends as the leader of the captives’ escape.',
    'This change is **character development**: a **round** (dynamic) character changes through experience; a **flat** (static) character does not. To trace development, compare the character at the beginning, at the turning point and at the end, with evidence for each stage.',
  ], 'lit-characterization', 'Beginning, turning point, end: three snapshots show development.',
  ['Nanje, who begins fearful and ends as a leader, is a:', ['round (developing) character', 'flat character', 'minor character', 'narrator'], 'He changes.'],
  [['Hero', 'The main character, often admired, whose struggle the story follows.'], ['Character development', 'The change in a character through the work.']],
  [
    { q: 'Trace Nanje’s development in three stages.', steps: ['Beginning: a **fearful young fisherman** who only reports the ship.', 'Turning point: chained, he speaks his **monologue of anger and hope**.', 'End: he **leads the escape** and becomes a hero of resistance.'] },
  ]),

  L('li-rebellion-2', 'li-f2-resistance', '14.2', 'Scenes of resistance and rebellion', 12, ['Drama'], [
    'History records many forms of **resistance** to the slave trade: escapes, revolts on ships, communities that hid or protected people, and later abolitionists in Europe and America. Plays dramatise **revolt** and **rebellion** to show that the enslaved were not passive victims but fought for **justice** and **dignity**.',
    'A scene written for this lesson: "(The barracoon at night. NANJE loosens the rope of the gate with a fish bone.) NANJE (whispering): Brothers, sisters, the tide is low and the moon is hidden. Hold hands: if one falls, we lift him. (They slip out. A guard stirs.) PRIESTESS EBOTE (from the darkness): Run, children of Mbonjo. The ancestors cover you." Suspense, **pathos** and **unity** combine: the escape succeeds through courage and solidarity.',
  ], 'li2-resistance', 'Resistance in drama often depends on unity: look for it.',
  ['In the escape scene, "if one falls, we lift him" shows:', ['solidarity among the captives', 'fear', 'betrayal', 'greed'], 'Unity in resistance.'],
  [['Resistance', 'Opposition to oppression.'], ['Rebellion', 'An organised rising against authority.'], ['Solidarity', 'Unity and mutual support.']],
  [
    { q: 'How does the scene create suspense?', steps: ['The darkness and whispering show **danger**.', '"A guard stirs" is a **moment of threat** that makes the audience fear discovery.', 'The priestess’s voice gives **relief and hope** as they escape.'] },
  ]),

  // ---------- 20. Ending and performance ----------
  L('li-ending-2', 'li-f2-ending', '15.1', 'How a play ends: resolution, self-realisation and lessons', 12, ['Drama'], [
    'The **ending** resolves the main conflict and reveals the play’s lessons. Elements to look for:\n- **self-realisation**: a character finally sees the truth (Chief Dibo, his son taken, admits his greed)\n- **dreams and their interpretation**: a dream may foreshadow events or reveal fears\n- **violence**, physical or verbal, and its cost\n- the final images and words, which often carry the **theme**.',
    'Ending of "The Shore of Mbonjo" written for this lesson: "CHIEF DIBO (alone on the empty beach, holding the red cloth): I sold the sea my brothers, and the sea took my son. (He lets the cloth fall into the waves.) Let the tide carry this shame away, and let our children remember." The **symbol** of the cloth (the price of betrayal) being thrown away shows his **remorse**. Lessons: **greed destroys the greedy; human dignity has no price; history must be remembered.**',
  ], 'lit-plot-pyramid', 'Last images and last words often hold the theme.',
  ['When Chief Dibo throws the red cloth into the sea, the cloth symbolises:', ['the price of his betrayal', 'wealth he wants to keep', 'a fishing net', 'a gift to the sea'], 'He rejects what he was paid.'],
  [['Self-realisation', 'The moment a character recognises the truth about themselves.'], ['Remorse', 'Deep regret for a wrong one has done.']],
  [
    { q: 'State two lessons of "The Shore of Mbonjo" with evidence.', steps: ['**Greed destroys the greedy**: the chief who sold others loses his own son.', '**History must be remembered**: "let our children remember".'] },
  ]),

  L('li-performance-2', 'li-f2-ending', '15.2', 'Acting and stage performance; responding to a play', 12, ['Drama', 'Performance'], [
    'Performing a play brings it to life. **Acting skills**: voice (**projection**, clear diction, tone and pace), facial expression, gesture, posture and movement; staying in character; reacting to others. **Staging**: the set and props (a stool, chains, a boat), costumes, lighting, sound and music. A **director** guides the rehearsals and the **blocking** (where actors stand and move).',
    'Responding to a play you have watched: name it and where it was performed; summarise the story briefly; comment on the acting, staging and music; say how the performance made you feel and what it taught you; relate its issues to real life (for example modern **human trafficking**).',
  ], 'li2-acting', 'Speak to the back of the hall: projection is the first rule of acting.',
  ['Planning where actors stand and move on stage is called:', ['blocking', 'casting', 'scripting', 'printing'], 'The director blocks each scene.'],
  [['Projection', 'Speaking loudly and clearly enough for the whole audience.'], ['Blocking', 'The planned positions and movements of actors on stage.'], ['Director', 'The person who guides the performance of a play.']],
  [
    { q: 'Give an actor playing Chief Dibo three pieces of advice for his final speech.', steps: ['Voice: speak **slowly and quietly**, but project, to show broken pride.', 'Gesture: **look at the red cloth** before letting it fall.', 'Movement: stand **alone at the edge of the stage**, facing the "sea", to show isolation.'] },
  ]),

  // ---------- 21. The novel ----------
  L('li-novel-2', 'li-f2-novel', '4.1', 'Reading a novel: chapters, narrator, setting and plot', 12, ['Prose'], [
    'A **novel** is a long work of prose fiction, divided into **chapters**, with a main plot and sometimes **subplots**, many characters and a developed setting. Before reading, learn about the **author**: their background often shapes the setting and **concerns** of the novel.',
    'While reading, keep **chapter notes**: the main events, new characters, the setting, any important quotation, and the theme each chapter develops. Note the **narrator** (first or third person) and whether events are told in order (**chronology**) or with **flashbacks**.',
    'Opening of a novel written for this lesson, "The Hoe and the Harvest": "In Nkwamba, where the hills fold into one another like the hands of praying elders, Pa Ekane woke before the cocks. His son Tasong was already at the door with two hoes, one for each of them." The third-person narrator, the **simile** of the hills, and the image of father and son introduce the setting (a hill village), the main characters, and the themes of **hard work** and **family unity**.',
  ], 'li2-novel', 'One page of notes per chapter is worth a second reading at exam time.',
  ['A secondary story running alongside the main plot of a novel is a:', ['subplot', 'stanza', 'monologue', 'chorus'], 'Novels often have subplots.'],
  [['Novel', 'A long work of prose fiction divided into chapters.'], ['Subplot', 'A secondary line of story in a novel or play.'], ['Chapter', 'A main division of a novel.']],
  [
    { q: 'Make chapter notes for the opening of "The Hoe and the Harvest".', steps: ['Setting: **Nkwamba**, a hill village, at dawn.', 'Characters: **Pa Ekane** and his son **Tasong**.', 'Event: father and son prepare to go to the farm together.', 'Themes introduced: **hard work** and **family unity**; device: simile of the hills.'] },
  ]),

  L('li-values-2', 'li-f2-novel', '4.2', 'Respect, unity and the transmission of values', 12, ['Prose'], [
    'Many African novels show how **values** are passed from the old to the young: respect for elders, hard work, honesty, unity of the family and hospitality. Elders teach through example, proverbs and stories; the young learn by watching and working beside them.',
    'A passage written for this lesson: "‘A family is like the three stones of the hearth,’ Pa Ekane told his children. ‘Take one away, and the pot falls.’ That evening Tasong carried water for his sister Ajua without being asked, and his mother Mama Lum smiled into the fire." The **proverb** teaches **unity**, and Tasong’s action shows the value being **transmitted**. The **local colour** of the hearth roots the lesson in village life.',
  ], 'lit-theme-map', 'Look for a teaching moment followed by an action: that is transmission.',
  ['"A family is like the three stones of the hearth" teaches the value of:', ['family unity', 'cooking skills', 'building', 'wealth'], 'A proverb about unity.'],
  [['Transmission of values', 'Passing values from one generation to the next.'], ['Local colour', 'Details of the customs and places of a region.']],
  [
    { q: 'How does the passage show that Tasong has learnt his father’s lesson?', steps: ['The lesson: family members must support one another, like the three hearth stones.', 'The action: Tasong **carries water for his sister without being asked**.', 'So the value of unity has been **passed on**.'] },
  ]),

  // ---------- 22. Flashback ----------
  L('li-flashback-2', 'li-f2-flashback', '5.1', 'Chronology and flashback', 10, ['Prose', 'Narrative technique'], [
    '**Chronology** is the order of events in time. Most stories follow it, but writers sometimes use a **flashback**: the narration jumps back to earlier events, often through a character’s memory ("Tasong remembered the year the rains failed…"). A flashback explains a character’s present feelings or decisions. **Foreshadowing** does the opposite: it hints at future events.',
    'Signals of a flashback: a change to the past perfect ("had been"), phrases such as "he remembered", "years before", "long ago", or a dream. When you write about the plot, put events back in time order and say where the writer chose to break the order and why.',
  ], 'li2-flashback', 'Ask why the writer breaks the time order at this point.',
  ['"Years before, when Pa Ekane had been a boy, his father lost the land" is a:', ['flashback', 'foreshadowing', 'climax', 'stage direction'], 'It jumps back in time.'],
  [['Chronology', 'The order of events in time.'], ['Flashback', 'A scene that returns to earlier events.']],
  [
    { q: 'Why might the novelist place the flashback about the lost land just before Tasong inherits the farm?', steps: ['It shows the **pain the family suffered** when land was lost.', 'It explains why **Pa Ekane values the land** so much.', 'It makes Tasong’s inheritance more **meaningful** for the reader.'] },
  ]),

  L('li-land-2', 'li-f2-flashback', '5.2', 'Land, inheritance and the fireside story', 12, ['Prose'], [
    'In village novels, **land** is life: it feeds the family, links the living to the ancestors and passes from one generation to the next through **inheritance**. Elders gather the family around the **fireside** to tell stories that carry communal values.',
    'A passage written for this lesson: "That night the family sat around the fire. Pa Ekane took a handful of soil and let it run through his fingers. ‘This soil is our treasure,’ he said. ‘Gold leaves the hand that spends it; the soil stays and feeds your children’s children.’ Ajua asked, ‘And will the farm be Tasong’s alone?’ The fire crackled, and no one answered." The **metaphor** ("this soil is our treasure"), the **contrast** with gold and the unanswered question **foreshadow** a conflict about **inheritance and gender**.',
  ], 'li1-local-colour', 'An unanswered question in a novel is often a seed of conflict.',
  ['Ajua’s unanswered question foreshadows a conflict about:', ['who inherits the land', 'the weather', 'school fees', 'a festival'], 'Inheritance and gender.'],
  [['Inheritance', 'Property passed down from parents to children.'], ['Fireside story', 'A story told by elders around the evening fire.']],
  [
    { q: 'Explain the contrast between gold and soil in Pa Ekane’s words.', steps: ['Gold "leaves the hand that spends it": wealth that is used up.', 'Soil "stays and feeds your children’s children": lasting value.', 'The contrast teaches that **land and farming give lasting security**.'] },
  ]),

  // ---------- 23. Hospitality ----------
  L('li-empathy-2', 'li-f2-hospitality', '6.1', 'Empathy: understanding characters’ feelings', 10, ['Prose', 'Reading skills'], [
    '**Empathy** is understanding and sharing another person’s feelings by imagining their situation. Good readers feel with characters: Tasong’s grief at his father’s sickbed, Ajua’s frustration at being left out, Mama Lum’s worry. Writers build empathy through pathos, inner thoughts, dialogue and small details (a trembling hand, an untouched meal).',
    'When writing about a character with empathy, describe what they feel, explain why, and say how the writer makes the reader share the feeling.',
  ], 'li2-empathy', 'Imagine yourself in the character’s place, then find the words that put you there.',
  ['A writer builds empathy for a grieving character mainly through:', ['their thoughts, actions and small details of their suffering', 'a list of dates', 'the cover', 'the page number'], 'We share their feelings.'],
  [['Empathy', 'Understanding and sharing another’s feelings.']],
  [
    { q: 'How does this sentence create empathy: "Mama Lum set the plate before Pa Ekane, then took it away again, still full"?', steps: ['The full plate shows Pa Ekane is **too ill to eat**.', 'Mama Lum’s repeated action shows her **silent worry**.', 'The small detail makes the reader **share her sorrow**.'] },
  ]),

  L('li-hospitality-2', 'li-f2-hospitality', '6.2', 'Hospitality and a dying father’s words; chapter summaries', 12, ['Prose', 'Writing'], [
    '**Hospitality** in village life means welcoming visitors with food, water and a seat, even when one is poor. In the novel, the family receives travellers and neighbours generously, showing **continuity** of tradition. A turning point comes when Pa Ekane falls ill and speaks his last words.',
    'A passage written for this lesson: "Pa Ekane called his children to the mat. ‘Tasong, the hoe is yours, but the harvest belongs to all. Ajua, you have your mother’s eyes and my stubbornness; go to school and come back to teach. Feed every stranger who knocks.’ He closed his eyes, and outside the rain began." The last words give **direction** to the rest of the novel; the rain is a **symbol** of blessing and grief; the scene creates **pathos**.',
    'A **chapter summary**: in three to five sentences, give the main events, any change in characters or relationships, and the theme the chapter develops. Do not copy sentences from the book.',
  ], 'li2-chapter-summary', 'A chapter summary answers: what happened, what changed, why it matters.',
  ['"The hoe is yours, but the harvest belongs to all" means that:', ['Tasong must work the farm but share its fruits', 'Tasong owns everything alone', 'the hoe is broken', 'no one should farm'], 'Responsibility and sharing.'],
  [['Hospitality', 'A generous welcome to guests and strangers.'], ['Chapter summary', 'A brief account of the main events and changes in a chapter.']],
  [
    { q: 'Write a three-sentence summary of the deathbed chapter.', steps: ['"**Pa Ekane, seriously ill, calls his children to give them his last instructions.**"', '"He gives Tasong the farm but asks him to share the harvest, and tells Ajua to go to school and return to teach."', '"His death, marked by the falling rain, leaves the family with a duty of hard work, sharing and hospitality."'] },
  ]),

  // ---------- 24. Inheritance and gender ----------
  L('li-character2-2', 'li-f2-inheritance', '7.1', 'Main and minor characters', 10, ['Prose', 'Characterisation'], [
    '**Main characters** are central to the plot and usually change (Tasong, Ajua, Mama Lum). **Minor characters** appear less and serve a purpose: to help or block the hero, to show a contrast, to carry a theme or to add local colour (the jealous Uncle Mbah, the kind chief, the market women).',
    'To discuss a minor character, ask what they add: Uncle Mbah’s attempt to seize the farm creates conflict and shows **greed**; the chief’s fair judgement shows **good leadership**.',
  ], 'li2-main-minor', 'Ask why the writer needed this minor character at all.',
  ['A jealous uncle who tries to seize the family farm mainly serves to:', ['create conflict and show greed', 'tell the story', 'end the novel', 'describe the weather'], 'His role in the plot.'],
  [['Main character', 'A central character whose story the work follows.'], ['Minor character', 'A character with a smaller role who supports the plot or themes.']],
  [
    { q: 'Classify and explain: Tasong, Uncle Mbah, the market woman who sells Ajua her first school bag.', steps: ['**Tasong**: main character, the hero who inherits the farm.', '**Uncle Mbah**: minor character who creates the **inheritance conflict** and shows greed.', '**The market woman**: minor character who adds **local colour** and shows kindness towards Ajua’s education.'] },
  ]),

  L('li-gender-2', 'li-f2-inheritance', '7.2', 'Inheritance, vision and gender roles in the novel', 12, ['Prose'], [
    'Village novels explore **gender roles**: what work and rights a community gives to men and to women. Some customs allow only sons to inherit land; novels often question this **gender bias**. Cameroonian law gives daughters the same right to inherit as sons.',
    'A passage written for this lesson: "When Uncle Mbah came to claim the farm, Tasong called the family before Chief Nyambe. ‘My father gave me the hoe,’ he said, ‘but the land feeds Ajua as it feeds me. Let it be written in both our names.’ The chief, a man of vision, nodded: ‘The ancestors planted for daughters too.’" Tasong shows **initiative**, **fairness** and **vision**; the chief’s judgement supports **equality**; the conflict with Uncle Mbah is resolved through **collective progress** rather than greed.',
  ], 'li2-main-minor', 'Note who in the novel challenges a custom and how the community responds.',
  ['Tasong’s request to write the land in both names shows:', ['fairness and respect for his sister’s rights', 'greed', 'fear', 'laziness'], 'He rejects gender bias.'],
  [['Gender roles', 'The work and behaviour a society expects of men and women.'], ['Gender bias', 'Unfair treatment based on sex.'], ['Vision', 'Wise planning for the future.']],
  [
    { q: 'How does the chief’s answer support the theme of equality?', steps: ['Quotation: "The ancestors planted for daughters too."', 'It uses **tradition itself** to defend the daughter’s rights.', 'So the novel suggests that **fair customs can include women**.'] },
  ]),

  // ---------- 25. Community work ----------
  L('li-concrete-2', 'li-f2-community', '8.1', 'Concrete and abstract; imagination and reality', 10, ['Prose', 'Reading skills'], [
    '**Concrete** words name things we can see, touch, hear, smell or taste (hoe, river, bread, drum). **Abstract** words name ideas, qualities and feelings (generosity, hope, unity, grief). Writers make abstract ideas vivid through concrete images: generosity becomes "a basket that is never empty".',
    'A novel is **fiction**, a work of **imagination**, but it reflects **reality**: real customs, problems and values. Distinguish **imaginary events** (invented by the writer) from **factual** background (real history, real places) and ask what truth the fiction shows.',
  ], 'li2-concrete', 'Turn every abstract idea in your essay into a concrete example from the text.',
  ['Which word is abstract?', ['generosity', 'basket', 'river', 'hoe'], 'An idea, not a thing.'],
  [['Concrete', 'Naming something that can be perceived by the senses.'], ['Abstract', 'Naming an idea, quality or feeling.'], ['Fiction', 'Invented stories.']],
  [
    { q: 'Find the abstract idea and its concrete image: "Unity in Nkwamba was a rope of a hundred strands."', steps: ['Abstract idea: **unity**.', 'Concrete image: **a rope of a hundred strands**: many weak threads become strong together.'] },
  ]),

  L('li-community-2', 'li-f2-community', '8.2', 'Community work and volunteering in the novel', 12, ['Prose'], [
    'Novels of village life often celebrate **community work**: repairing roads and bridges, building a school or clinic, clearing farms together. The proverb "**many hands make work light**" expresses the idea that shared work is easier and builds unity. Characters who give back to the community (volunteering, outreach, sharing their success) show **selflessness**, love and generosity.',
    'A passage written for this lesson: "When the rains broke the bridge, Tasong rang the old bell. By noon fifty villagers stood in the river, passing stones from hand to hand. Chief Nyambe carried a stone too. ‘A chief who only watches,’ he laughed, ‘is a roof without a house.’ By sunset the bridge stood again." The image of hands passing stones and the chief’s **humorous metaphor** show **collective effort** and **good leadership**.',
  ], 'li1-narrative-plan', 'Look for the image that shows many people acting as one.',
  ['"A chief who only watches is a roof without a house" means that:', ['a leader must work with the people', 'roofs are useless', 'chiefs should build houses', 'watching is good'], 'A metaphor about leadership.'],
  [['Community work', 'Unpaid work done together for the good of a community.'], ['Selflessness', 'Concern for others more than oneself.']],
  [
    { q: 'How does the passage illustrate "many hands make work light"?', steps: ['Fifty villagers pass stones **from hand to hand**.', 'A broken bridge is rebuilt **in one day**.', 'Shared effort makes a big task possible and builds **unity**.'] },
  ]),

  // ---------- 26. Success ----------
  L('li-heroic-2', 'li-f2-success', '9.1', 'The successful hero and the novel’s message', 12, ['Prose'], [
    'Many novels end by **celebrating success**: the hard-working hero prospers, and the community shares the joy. The hero is often **charismatic** (inspiring others) and **determined**. The ending confirms the **theme**: **hard work, unity and fairness bring success**.',
    'A passage written for this lesson: "Ten harvests later, Nkwamba’s coffee won the regional prize. Tasong stood before the crowd with Ajua, now the village teacher. ‘Our father taught us that the harvest belongs to all,’ he said, and the whole village answered with one song." The ending ties back to the father’s words (**circular structure**), shows Ajua’s success through education, and celebrates **collective success** rather than individual pride.',
  ], 'lit-theme-map', 'Check whether the last chapter echoes the first: many novels end where they began.',
  ['Tasong’s words at the prize-giving echo:', ['his father’s last words', 'Uncle Mbah’s greed', 'a market song', 'nothing'], 'A circular structure.'],
  [['Charismatic', 'Able to attract and inspire others.'], ['Circular structure', 'When the ending echoes the beginning of a work.']],
  [
    { q: 'State the theme of "The Hoe and the Harvest" with two pieces of evidence.', steps: ['Theme: **hard work, unity and fairness bring lasting success.**', 'Evidence 1: father and son farm together from the first chapter.', 'Evidence 2: the shared prize and Ajua’s success at the end, "the harvest belongs to all".'] },
  ]),

  L('li-review-novel-2', 'li-f2-success', '9.2', 'Reviewing the plot and characterisation of a novel', 12, ['Prose', 'Revision'], [
    'To **review a novel**:\n1. draw a **plot pyramid**: exposition, rising action, climax, falling action, resolution\n2. list the **main characters** with two traits each and evidence\n3. note the **minor characters** and their purpose\n4. list the **themes** with key events and quotations\n5. note the **devices** and narrative techniques (flashback, foreshadowing, local colour, symbols).',
    'For "The Hoe and the Harvest": exposition: father and son at the farm; rising action: the father’s illness and Uncle Mbah’s claim; climax: the judgement before Chief Nyambe; falling action: the land shared and the bridge rebuilt; resolution: the regional prize.',
  ], 'lit-plot-pyramid', 'Revise a novel with one page each for plot, characters and themes.',
  ['In the review of "The Hoe and the Harvest", the climax is:', ['the judgement before Chief Nyambe', 'the opening at dawn', 'the prize-giving', 'the bridge repair'], 'The turning point of the conflict.'],
  [['Review', 'A summary and assessment of a whole work.'], ['Characterisation', 'How a writer presents characters.']],
  [
    { q: 'Give two traits of Tasong with evidence.', steps: ['**Hard-working**: he is "already at the door with two hoes" before dawn.', '**Fair**: he asks for the land to be written in his and Ajua’s names.'] },
  ]),

  // ---------- 27. Literature and life ----------
  L('li-associations-2', 'li-f2-associations', '27.1', 'Linking literature to personal experience and real life', 12, ['Responding to literature'], [
    'Making **associations** means connecting a text with:\n- **yourself** (text-to-self): "Like Ajua, I had to fight to stay in school."\n- **other texts** (text-to-text): "Both the poem about the housemaid and the play about Mbonjo show people treated as property."\n- **the world** (text-to-world): "The slave trade in the play reminds us of human trafficking today."',
    'Associations deepen understanding and help you write personal responses. They must still be **supported** by the text: name the event or quotation, then make the link. Different readers make different associations because of their experiences, so respect other readers’ responses.',
  ], 'li2-associations', 'Make the link explicit: "This reminds me of… because…".',
  ['"The play about the slave trade reminds me of news reports on human trafficking" is a:', ['text-to-world association', 'text-to-self association', 'summary', 'rhyme'], 'It links the text to the world.'],
  [['Association', 'A connection between a text and oneself, another text or the world.']],
  [
    { q: 'Make a text-to-text association between "The Hoe and the Harvest" and a Form 1 tale about the quarrel of the body parts.', steps: ['Both show that **a community is strong only when its members work together**.', 'Evidence: the villagers rebuild the bridge "hand to hand"; the body parts grow weak when they refuse to cooperate.'] },
  ]),

  L('li-revision-2', 'li-f2-associations', '27.2', 'Revision: poetry, drama, recitation and dramatisation', 12, ['Revision'], [
    'Revise the year by genre:\n- **poetry**: structure, run-on lines, diction and register, symbols, signal words, alliteration and assonance, paradox, satire, imagery, contrast; how to write about a whole poem and a personal response\n- **drama**: background, tragedy and comedy, hero and minor characters, dialogue and monologue, dramatic irony, suspense, foreshadowing, resolution, acting\n- **prose**: chapters, narrator, chronology and flashback, empathy, concrete and abstract, main and minor characters, theme.',
    '**Recitation**: learn the poem, understand every line, pause at punctuation (not at every line end), vary pace and volume, and keep eye contact. **Dramatisation**: assign roles, read the stage directions, rehearse blocking, project your voice. Every answer still follows **point, evidence, explanation**.',
  ], 'li1-pee', 'Make one revision card per term, with a definition and an example for each term.',
  ['When reciting a poem with run-on lines, you should pause:', ['at the punctuation, not at every line end', 'after every word', 'at the end of every line always', 'never'], 'Follow the sense.'],
  [['Recitation', 'Speaking a poem from memory with expression.'], ['Dramatisation', 'Acting out a story or scene.']],
  [
    { q: 'Write a point-evidence-explanation answer: "How is Chief Dibo different at the end of the play?"', steps: ['Point: **he changes from greedy to remorseful.**', 'Evidence: "I sold the sea my brothers, and the sea took my son," and he throws away the red cloth.', 'Explanation: he admits his guilt and rejects the price of his betrayal.'] },
  ]),
];
