// Literature in English lessons for Form 2 (first file): genres reviewed,
// oral tradition, praise singers, and poetry on children, parents,
// school, memories, trade and colonialism, markets, the environment, justice,
// unity, technology and culture. Set books change with the national booklist,
// so each lesson teaches a method. Every poem and passage here was written
// for this app. **double asterisks** mark key terms; `examples` are worked
// examples.

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

export const LESSONS_2A = [
  // ---------- 1. Genres reviewed ----------
  L('li-compare-genres-2', 'li-f2-review', '1.1', 'Comparing prose, drama and poetry', 12, ['Genres'], [
    'The three genres share the **elements** of literature (setting, character, theme) but differ in form:\n- **prose** tells a story in sentences and paragraphs, usually through a **narrator**, and can describe thoughts and places at length\n- **drama** shows a story through **dialogue** and action on a stage, with **stage directions**, acts and scenes, and no narrator\n- **poetry** expresses feelings and ideas in **lines and stanzas**, with rhythm, sound and images, in few words.',
    'To compare and contrast them, ask: how is the story told (narrator, dialogue, speaker)? How is it arranged (paragraphs and chapters, acts and scenes, lines and stanzas)? How does it reach us (read, performed, recited)?',
  ], 'li2-genres-compare', 'One question sorts the genres: who tells it, and how?',
  ['A work with no narrator, told through dialogue and stage directions, is:', ['drama', 'prose', 'poetry', 'a biography'], 'The characters speak for themselves.'],
  [['Genre', 'A kind of literature: prose, drama or poetry.'], ['Narrator', 'The voice that tells a prose story.']],
  [
    { q: 'How would the event "a girl refuses to marry an old man" be presented in each genre?', steps: ['Prose: a narrator tells what happens and what the girl thinks.', 'Drama: the girl and her father argue on stage in **dialogue**, with stage directions for their movements.', 'Poetry: a speaker (perhaps the girl) expresses her feelings in a few vivid **lines and stanzas**.'] },
  ]),

  L('li-literal-2', 'li-f2-review', '1.2', 'Literal and underlying meaning', 12, ['Reading skills'], [
    'The **literal meaning** is what the words say on the surface. The **underlying** (figurative or deeper) meaning is what the writer suggests through images, symbols and context. Good readers look for both.',
    'Example written for this lesson: "The old drum hangs silent on the wall; / Its skin is cracked, its voice is small." Literally, an old drum is no longer played. Underneath, the drum may stand for a **culture that is being forgotten**: no one plays the old music any more.',
    'To find the underlying meaning: notice what seems odd if read only literally; ask what the thing could stand for; check the title and the rest of the poem; then state the deeper idea in one sentence.',
  ], 'li2-literal', 'If a line seems strange literally, it usually has a deeper meaning.',
  ['"The ladder of education has no top step" literally speaks of a ladder; its deeper meaning is that:', ['learning never ends', 'ladders are dangerous', 'schools have stairs', 'education is easy'], 'The ladder is a metaphor.'],
  [['Literal meaning', 'The surface meaning of the words.'], ['Underlying meaning', 'The deeper meaning suggested by the words.']],
  [
    { q: 'Give the literal and underlying meaning of: "Our house has many rooms but one roof."', steps: ['Literal: a house with many rooms under one roof.', 'Underlying: **a family or nation with many different members or groups, united under one protection.**'] },
  ]),

  // ---------- 2. Oral tradition ----------
  L('li-oraltrad-2', 'li-f2-oral', '2.1', 'The storyteller, the audience and recounting tales', 12, ['Oral literature'], [
    'In oral literature, the **storyteller** performs: changing voices for characters, using gestures and mime, pausing for suspense and singing songs that the **audience** answers. The audience is active: they respond, laugh, sing the refrain and sometimes question the teller. A tale may open with a formula ("Story, story!" "Story come!") and close with a moral.',
    'Kinds of tales reviewed: **folktales**, **myths** (origins), **legends** (heroes), **fables** (animals and morals) and **why stories**; with **proverbs** and **dirges**. Each community in Cameroon and Africa has its own tales, so comparing them builds **cultural awareness** and respect.',
    '**Recounting** a tale in writing: give it a title; set the scene ("Long ago, when animals could talk…"); introduce the characters; tell events in order with dialogue; include the song if there is one; end with the moral.',
  ], 'li1-oral-tales', 'Keep the song: it is part of the tale, not decoration.',
  ['In a storytelling session, the audience usually:', ['answers songs and reacts to the tale', 'stays silent and still', 'leaves early', 'writes notes only'], 'Oral literature is participatory.'],
  [['Storyteller', 'The person who performs a tale.'], ['Refrain', 'A line or song repeated during a tale or poem.']],
  [
    { q: 'Write an opening and closing for a recounted fable.', steps: ['Opening: "**Long ago, when the animals could still talk, Tortoise and Hare lived beside the same stream.**"', 'Closing with the moral: "**And so the animals learnt that slow and steady wins the race.**"'] },
  ]),

  L('li-pathos-2', 'li-f2-oral', '2.2', 'Pathos, humour and other devices in oral literature', 10, ['Literary devices'], [
    'Oral literature uses the same devices as written literature: **simile**, **metaphor**, **personification**, **irony**, **alliteration**, **hyperbole**, **contrast** and **allusion**. Two effects are especially strong:\n- **humour**: tricks, foolish characters and funny songs make the audience laugh and remember the lesson\n- **pathos**: an orphan mistreated by a stepmother, or a dirge for a dead hero, makes the audience feel pity and sorrow.',
    'A storyteller may move from humour to pathos in one tale, for example when a playful hare is finally caught and the audience suddenly pities him.',
  ], 'li1-figures', 'Ask how the tale made the audience feel: laughter or pity.',
  ['A tale in which an orphan girl is made to fetch water at night while her stepsisters rest mainly creates:', ['pathos', 'humour', 'satire', 'paradox'], 'We pity the orphan.'],
  [['Pathos', 'The quality that arouses pity or sorrow.'], ['Humour', 'The quality that makes something funny.']],
  [
    { q: 'Identify the devices: "Tortoise’s belly was as big as a market drum, and still he cried, ‘I am starving!’"', steps: ['"as big as a market drum": **simile** (and hyperbole).', 'A huge belly and "I am starving": **irony** that creates **humour**.', 'The humour exposes his **greed**.'] },
  ]),

  // ---------- 3. Praise singers ----------
  L('li-beliefs-2', 'li-f2-praise', '3.1', 'Beliefs and superstitions in literature', 10, ['Oral literature'], [
    'Cultural **beliefs** explain the world: ancestors watch over the living, certain animals bring messages, and some places are sacred. **Superstitions** are beliefs without evidence: that an owl’s hoot announces a death, or that whistling at night calls spirits. Some beliefs protect nature (sacred forests that may not be cut); others can harm (accusing a person of witchcraft).',
    'Literature records these beliefs to show the "African mind" and setting, and sometimes questions them. When you meet a belief in a text, describe it, explain its effect on the characters, and say whether the writer approves or questions it.',
  ], 'li2-beliefs', 'Separate the belief from the writer’s attitude to it.',
  ['A sacred forest that the community may not cut is a belief that:', ['protects nature', 'harms nature', 'has no effect', 'is a scientific law'], 'Some beliefs conserve the environment.'],
  [['Superstition', 'A belief not based on reason or evidence.'], ['Sacred', 'Holy and set apart, to be respected.']],
  [
    { q: 'A story shows villagers blaming an old widow for a drought. What is the writer probably doing?', steps: ['The belief: drought is caused by witchcraft.', 'Its effect: an innocent widow is accused and suffers.', 'The writer is probably **questioning a harmful belief** and creating **pathos** for the widow.'] },
  ]),

  L('li-praisesinger-2', 'li-f2-praise', '3.2', 'The praise singer and songs in local languages', 12, ['Oral literature', 'Poetry'], [
    'Traditional rulers in Cameroon (the **Fon** in the Grassfields, the **Sultan** in Foumban, the **Lamido** in the north, chiefs elsewhere) are honoured by **praise singers**. Praise poetry (panegyric) lists the ruler’s ancestors, victories, wisdom and generosity in **praise names** (metaphors) and repetition, often to drums.',
    'A praise song written for this lesson:\n"Hail, leopard of the seven hills!\nYour shadow feeds the hungry fields;\nYour fathers fought, your fathers won,\nYou are the rain, you are the sun."\nDevices: **metaphors** ("leopard of the seven hills", "you are the rain"), **repetition** ("your fathers"), **hyperbole** (his shadow feeds the fields). The tone is admiring.',
    '**Songs in local languages** keep identity and history alive. When you translate one, keep its meaning and rhythm rather than every word.',
  ], 'li2-praise-song', 'Praise names are metaphors: explain what quality each one praises.',
  ['"You are the rain" praises the ruler as:', ['the giver of life and plenty', 'a cold man', 'a cause of floods', 'a sad person'], 'Rain brings life to crops.'],
  [['Praise singer', 'A performer who honours a ruler or hero in song.'], ['Praise name', 'A metaphorical title that praises a person’s qualities.']],
  [
    { q: 'Write two praise lines for a generous village headmistress.', steps: ['Choose metaphors for generosity and wisdom.', '"**Mother of a hundred lamps, you light our minds;**"', '"**Your open hand is a river that never dries.**"'] },
  ]),

  // ---------- 4. Poems on children ----------
  L('li-structure-2', 'li-f2-children', '16.1', 'The structure of a poem; punctuation and run-on lines', 12, ['Poetry'], [
    'A poem’s **structure** is how it is arranged: the number of stanzas and lines, the rhyme scheme, the rhythm, and how ideas move from stanza to stanza (for example a problem in stanza 1 and a solution in stanza 3).',
    '**Punctuation** guides the reading. An **end-stopped line** ends with punctuation and a pause. A **run-on line** (**enjambment**) carries the sense into the next line without a pause:\n"She sweeps the floor before the sun\nhas lifted its head above the hill"\nEnjambment can show speed, breathlessness or a continuous action, and it surprises the reader at the line break.',
  ], 'li2-enjambment', 'Read to the punctuation, not to the end of the line.',
  ['In "She sweeps the floor before the sun / has lifted its head above the hill", the first line is:', ['a run-on line', 'end-stopped', 'a refrain', 'a title'], 'The sentence continues.'],
  [['Structure', 'The arrangement of a poem in lines, stanzas and ideas.'], ['Enjambment', 'A line whose sense runs on into the next line.'], ['End-stopped line', 'A line that ends with punctuation and a pause.']],
  [
    { q: 'Why might a poet about a tired housemaid use many run-on lines?', steps: ['Run-on lines keep the reader moving without rest.', 'This copies **her endless work without rest**.', 'The structure supports the theme of **child exploitation**.'] },
  ]),

  L('li-children-2', 'li-f2-children', '16.2', 'Poems on welcoming babies and protecting children', 12, ['Poetry'], [
    'Some poems **celebrate** the birth of a child: naming ceremonies and **baby showers**, with songs, gifts and blessings that show a community’s joy. Others **condemn** the maltreatment of children: housemaids overworked and beaten, children abandoned by irresponsible parents. Together they contrast **responsible parenthood** with neglect.',
    'A poem written for this lesson, in a housemaid’s voice:\n"I wash the plates I cannot fill,\nI rock the child who sleeps in silk;\nMadam, my mother sent me here\nto learn to read, not count my fear."\nThe **contrast** (the maid washes plates she cannot eat from; the employer’s child sleeps in silk) and the **pathos** of the last lines condemn **child labour** and show the maid’s lost right to **education**.',
  ], 'li2-children', 'Find the contrast between how one child is treated and how another is treated.',
  ['"To learn to read, not count my fear" shows that the maid:', ['was promised education but is mistreated', 'enjoys counting', 'is a teacher', 'is happy'], 'Her right to school is denied.'],
  [['Baby shower', 'A celebration to welcome a coming or newborn baby.'], ['Child labour', 'Work that harms a child’s health or keeps the child from school.'], ['Responsible parenthood', 'Caring for, protecting and educating one’s children.']],
  [
    { q: 'Write two lines celebrating the birth of a baby.', steps: ['Choose images of joy and hope.', '"**The drums announce a brand-new name,**"', '"**And every hearth is warm with flame.**"'] },
  ]),

  // ---------- 5. Poems on parents ----------
  L('li-diction-2', 'li-f2-parents', '17.1', 'Diction and register', 10, ['Poetry'], [
    '**Diction** is the writer’s choice of words. **Register** is the level of formality: formal ("my esteemed father"), informal ("my old man"), solemn and religious ("thou", "behold"), technical ("screen", "data"), or local (Pidgin or local-language words). The words chosen create **tone**: "abandoned" sounds harsher than "left", "whispered" softer than "said".',
    'When you comment on diction, quote the word, say what it suggests, and explain its effect on the tone or meaning.',
  ], 'li2-diction', 'Ask why the poet chose this word and not a simpler one.',
  ['Choosing "glued" in "her eyes are glued to the screen" suggests that:', ['she cannot look away from the phone', 'she used glue', 'the screen is broken', 'she is reading a book'], 'Diction creates the image.'],
  [['Diction', 'A writer’s choice of words.'], ['Register', 'The level of formality of language suited to a situation.']],
  [
    { q: 'Comment on the diction: "The new mothers scroll and scroll, / while babies cry from bowl to bowl."', steps: ['"scroll and scroll": modern, technical word, **repeated** to show endless phone use.', '"cry from bowl to bowl": hungry babies moving from empty bowl to empty bowl.', 'The diction creates a **critical tone** towards parents distracted by phones.'] },
  ]),

  L('li-parents-2', 'li-f2-parents', '17.2', 'Poems on changing parents, faith and teenage longing', 12, ['Poetry'], [
    'Some poems **contrast** parents of the past (always present, telling stories at the fire) with some parents of today, distracted by phones and business. Others praise the **power of God** and the comfort of faith, or explore **teenage cravings**: first love, the wish for freedom, the pull of friends, and the need for **self-control** and advice.',
    'A poem written for this lesson:\n"My grandmother’s stories filled the night;\nmy mother’s phone is the only light.\nI do not ask for gifts or gold,\njust half an hour of stories told."\nThe **contrast** of past and present, the **metaphor** "the only light" and the simple request create a **gentle, longing tone**. The theme: **children need their parents’ time more than gifts.**',
  ], 'li1-contrast', 'Look for a past-and-present contrast: it often carries the message.',
  ['The speaker in "My grandmother’s stories filled the night" wants:', ['time and attention from the mother', 'a new phone', 'gold', 'to sleep alone'], 'Half an hour of stories.'],
  [['Contrast', 'Putting opposite things side by side for effect.'], ['Self-control', 'The ability to control one’s feelings and actions.']],
  [
    { q: 'State the theme of the poem above in one sentence and support it.', steps: ['Theme: **children need their parents’ time more than gifts.**', 'Support: "I do not ask for gifts or gold, / just half an hour of stories told."'] },
  ]),

  // ---------- 6. Poems on school ----------
  L('li-paradox-2', 'li-f2-school', '18.1', 'Paradox', 10, ['Literary devices'], [
    'A **paradox** is a statement that seems to contradict itself but contains a truth: "The more I learn, the less I know" (learning shows how much remains unknown); "Less is more"; "You must lose sleep to win your dreams".',
    'A paradox makes readers stop and think. To explain one, state the apparent contradiction, then the truth it reveals.',
  ], 'li2-paradox', 'A paradox sounds false at first and true on second thought.',
  ['"The child who is not embraced by the village will burn it down to feel its warmth" is a paradox because:', ['destroying the village seems the opposite of wanting its warmth, yet rejection breeds violence', 'it rhymes', 'it is a question', 'it is about fire only'], 'Contradiction with a truth.'],
  [['Paradox', 'A statement that seems self-contradictory but reveals a truth.']],
  [
    { q: 'Explain the paradox: "Our failures are our best teachers."', steps: ['Apparent contradiction: failure seems bad, yet it is called the best teacher.', 'Truth: **we often learn more from our mistakes than from easy success.**'] },
  ]),

  L('li-school-2', 'li-f2-school', '18.2', 'Poems on academic battles and the school system', 12, ['Poetry'], [
    'Poems about school describe exams as **battles**, praise **determination**, discipline and hard work, and criticise problems in the school system: overcrowded classes, lack of books, and corruption such as buying marks or admissions.',
    'A poem written for this lesson:\n"My pen, my spear; my book, my shield;\nI march at dawn to the exam field.\nSome buy their victory with a note;\nI win mine slowly, quote by quote."\nThe extended **metaphor** of war (pen as spear, book as shield, exam field) shows the struggle of study; the **contrast** with those who "buy their victory" criticises **corruption**; the tone is proud and determined. Theme: **honest hard work is the true path to success.**',
  ], 'li2-paradox', 'When one metaphor is carried through several lines, call it an extended metaphor.',
  ['"Some buy their victory with a note" criticises:', ['bribery for marks', 'writing notes in class', 'buying books', 'music'], '"Note" here is a banknote.'],
  [['Extended metaphor', 'A metaphor developed over several lines.'], ['Determination', 'Firmness of purpose.']],
  [
    { q: 'How does the poet show pride in honest effort?', steps: ['Point: the speaker is **proud of winning honestly**.', 'Evidence: "I win mine slowly, quote by quote."', 'Explanation: "slowly" admits the effort, and the contrast with those who buy victory shows the speaker’s integrity.'] },
  ]),

  // ---------- 7. School memories ----------
  L('li-assonance-2', 'li-f2-memories', '19.1', 'Alliteration and assonance', 10, ['Literary devices', 'Poetry'], [
    '**Sound devices** make poems musical:\n- **alliteration**: repetition of the same **consonant** sound at the start of nearby words ("**b**right **b**ells **b**eat")\n- **assonance**: repetition of the same **vowel** sound in nearby words ("the r**ai**n in the l**a**ne", "s**ee** the gr**ee**n tr**ee**s")\n- **rhyme**: matching end sounds; **onomatopoeia**: words that imitate sounds (ding, crack, buzz).',
    'Effects: sound devices create rhythm, link ideas, make lines memorable and create mood: long vowels (oo, ee) can sound slow and sad; short sharp consonants (k, t) can sound quick or harsh.',
  ], 'lit-sound-devices', 'Read the line aloud and listen for the repeated sound.',
  ['"Old bones groan alone" repeats the vowel sound in:', ['old, bones, groan, alone (assonance)', 'the letter b only', 'no words', 'a rhyme scheme only'], 'The long o sound repeats.'],
  [['Alliteration', 'Repetition of consonant sounds at the start of nearby words.'], ['Assonance', 'Repetition of vowel sounds in nearby words.']],
  [
    { q: 'Name the sound devices: "The school bell’s silver song / swept sleepy students along."', steps: ['"s" sounds in school, silver, song, swept, sleepy, students: **alliteration**.', '"song" and "along": **rhyme**.', 'The soft "s" sounds create a **gentle, musical** memory.'] },
  ]),

  L('li-memories-2', 'li-f2-memories', '19.2', 'Poems on the alma mater, friendship and childhood', 12, ['Poetry', 'Writing'], [
    'Poems of **golden moments** celebrate the **alma mater** (one’s former school), teachers, friendship and **camaraderie**, souvenirs, family gatherings and the funny incidents of childhood. Their tone is often **nostalgic** (longing for the past) and **humorous**, and they can also express **remorse** for past mistakes.',
    'A poem written for this lesson:\n"Dear old school beneath the hill,\nyour mango trees remember still\nthe day I hid the duster, and\nthe whole class stood with lifted hand."\nThe **personification** ("your mango trees remember") and the funny incident create a warm, humorous nostalgia.',
    'Writing about childhood memories: choose one vivid moment, describe the place and people with sensory details, include a feeling (joy, embarrassment, regret), and end with what the memory means now.',
  ], 'lit-sound-devices', 'One small, vivid moment makes a better memory poem than a list of events.',
  ['A poem that longs for the happy days of primary school has a tone that is:', ['nostalgic', 'angry', 'threatening', 'scientific'], 'Nostalgia.'],
  [['Alma mater', 'One’s former school or university.'], ['Nostalgia', 'A longing for the past.'], ['Camaraderie', 'Friendship and trust among a group.']],
  [
    { q: 'Explain the humour in the poem above.', steps: ['The speaker hid the teacher’s duster as a prank.', 'The whole class had to stand with hands raised as punishment.', 'Remembering it now makes the speaker smile: **humour mixed with nostalgia.**'] },
  ]),

  // ---------- 8. Trade and colonialism ----------
  L('li-histallusion-2', 'li-f2-trade', '20.1', 'Historical allusion and colonialism in poetry', 12, ['Literary devices', 'Poetry'], [
    '**Colonialism** is the rule of one country over another territory. Cameroon was a German colony (Kamerun) from 1884, then divided between Britain and France after the First World War; French Cameroon became independent in 1960 and Southern British Cameroons joined it in 1961. Colonialism brought roads and schools but also forced labour, **exploitation** of resources and loss of land.',
    'Poems use **historical allusion** to remember this past: references to the Germans, forced labour, independence and **reunification**. Some poems criticise exploitation and **greed**; others call for **sacrifice** and **service** to the nation ("my duty to the flag").',
  ], 'li2-colonial', 'Name the historical event an allusion refers to, then say why the poet recalls it.',
  ['Cameroon was a German colony from:', ['1884', '1960', '1972', '1807'], 'The German protectorate began in 1884.'],
  [['Colonialism', 'The rule of one country over another territory and its people.'], ['Historical allusion', 'A reference to a real event or person from history.']],
  [
    { q: 'Explain the allusion: "They built the railway with our fathers’ backs."', steps: ['It refers to **forced labour** under colonial rule, when Africans were made to build railways and roads.', 'The image of "our fathers’ backs" creates **pathos** and condemns **exploitation**.'] },
  ]),

  L('li-buyam-2', 'li-f2-trade', '20.2', 'Poems on petty trade and duty to the nation', 12, ['Poetry'], [
    'A **buyam sellam** (Cameroon Pidgin) is a trader who buys goods, often foodstuffs, and resells them for a small profit. Poems about such traders praise **business acumen**, **industry** and entrepreneurship, and show the hard life of the market.',
    'A poem written for this lesson:\n"She buys the plantains at the farm,\nshe sells them in the town by noon;\nher profit fits inside her palm,\nher dreams are wider than the moon."\nThe **contrast** between the small profit ("fits inside her palm") and the big dreams ("wider than the moon", a **hyperbole**) shows her courage and hope.',
    'Patriotic poems ask citizens to serve the country honestly: pay taxes, protect public property, work hard and refuse corruption.',
  ], 'li1-allusion', 'Measure the trader’s reward against her effort and dreams.',
  ['"Her dreams are wider than the moon" is an example of:', ['hyperbole', 'onomatopoeia', 'a riddle', 'a stage direction'], 'A deliberate exaggeration.'],
  [['Buyam sellam', 'In Cameroon Pidgin, a trader who buys goods to resell them.'], ['Business acumen', 'Skill and good judgement in business.']],
  [
    { q: 'What does the poem show about the trader?', steps: ['Point: she is **hard-working and hopeful**.', 'Evidence: she travels from farm to town "by noon"; "her dreams are wider than the moon".', 'Explanation: her small profit does not stop her ambition.'] },
  ]),

  // ---------- 9. Markets ----------
  L('li-imagery2-2', 'li-f2-markets', '21.1', 'Imagery of the market and the village', 10, ['Literary devices'], [
    'Market and village poems rely on **imagery**: the colours of fruit, the smell of smoked fish, the noise of bargaining, the dust of the road, the touch of cool morning air. Together the images create the **atmosphere**: busy and joyful, or tired and poor.',
    'A **contrast** between village and city is common: the village is quiet, green and slow but poor in money; the city is fast and rich but crowded and lonely.',
  ], 'li1-imagery', 'Group the images by sense to describe the atmosphere.',
  ['"Smoked fish and pepper sting the air" appeals to:', ['smell and touch', 'sight only', 'hearing only', 'taste only'], 'Smell and a stinging feeling.'],
  [['Imagery', 'Language that appeals to the senses.'], ['Atmosphere', 'The mood created by a description.']],
  [
    { q: 'Write one image for each sense about a village market.', steps: ['Sight: "**tomatoes piled like red hills**"', 'Sound: "**traders calling prices like songs**"', 'Smell: "**the smoke of roasting corn**"', 'Touch: "**the cool clay pots**"; Taste: "**sweet ripe pawpaw**"'] },
  ]),

  L('li-markets-2', 'li-f2-markets', '21.2', 'Poems on markets, poverty and new ways of shopping', 12, ['Poetry'], [
    'Poems about **markets** celebrate commerce and community; poems about **poverty** describe hardship and call for hard work, industry and fair trade; newer poems describe **online shopping**, where goods are ordered by phone.',
    'A poem written for this lesson:\n"Grandmother walked ten miles to sell her yams;\nmy sister sells her cakes by phone.\nOne road was dust, one road is light,\nbut both are paved with work alone."\nThe **contrast** between old and new ways of trading, the **metaphors** "one road was dust, one road is light" and the closing idea show that **hard work is needed in every age**.',
  ], 'li1-contrast', 'Find the line that both sides of a contrast have in common.',
  ['"Both are paved with work alone" means that:', ['success in any age needs hard work', 'roads are made of work', 'phones build roads', 'grandmother was lazy'], 'The shared truth of the contrast.'],
  [['Commerce', 'The buying and selling of goods.'], ['Online shopping', 'Buying goods over the internet or by phone.']],
  [
    { q: 'How is the past contrasted with the present?', steps: ['Past: grandmother **walked ten miles** to sell yams on a dusty road.', 'Present: the sister **sells cakes by phone**.', 'Link: both depend on **hard work**.'] },
  ]),

  // ---------- 10. Environment ----------
  L('li-symbol-2', 'li-f2-environment', '22.1', 'Symbols', 10, ['Literary devices'], [
    'A **symbol** is an object, person, colour or action that stands for an idea beyond itself: a dove for peace, a seedling for hope, a broken chain for freedom, a felled tree for destruction, an empty bottle for wasted life, white for purity, darkness for evil or ignorance.',
    'Unlike a simile or metaphor, a symbol is not stated as a comparison: the object simply appears, and its repeated importance tells the reader to look for its deeper meaning. To explain a symbol, say what it is in the text, then what it stands for, and why.',
  ], 'li2-symbols', 'If an object keeps coming back in a poem, ask what it stands for.',
  ['In a poem about freedom, a broken chain is most likely a symbol of:', ['liberation', 'poverty', 'marriage', 'farming'], 'Chains broken means freedom.'],
  [['Symbol', 'An object or action that stands for an idea.']],
  [
    { q: 'Explain the symbol: a poem ends, "In the burnt field, one green shoot stood."', steps: ['Literally, a single plant survives a fire.', 'It is a **symbol of hope and renewal** after destruction.'] },
  ]),

  L('li-environment-2', 'li-f2-environment', '22.2', 'Poems on deforestation, climate change and alcoholism', 12, ['Poetry'], [
    'Environmental poems condemn **deforestation**, bush fires and pollution and warn of **climate change**: hotter seasons, irregular rains, floods and droughts. They call for **sensitisation**, preservation and tree planting. Other poems warn against **alcoholism**, which destroys health, families and savings.',
    'A poem written for this lesson:\n"The forest weeps for its fallen sons,\nthe river coughs on plastic stones;\nwho will plant, if none remain\nto pray beneath the trees for rain?"\nDevices: **personification** (the forest weeps, the river coughs), **metaphor** (trees as "fallen sons"), a **rhetorical question** and the **symbol** of prayer for rain. The tone is mournful and warning.',
  ], 'li2-symbols', 'Note how personification makes nature suffer like a person.',
  ['"The river coughs on plastic stones" suggests that the river is:', ['choked by plastic pollution', 'healthy', 'a person with a cold', 'full of fish'], 'Personification of pollution.'],
  [['Deforestation', 'Clearing forests without replanting.'], ['Climate change', 'Long-term change in the Earth’s weather patterns.'], ['Sensitisation', 'Making people aware of a problem.']],
  [
    { q: 'What does the rhetorical question at the end suggest?', steps: ['"Who will plant, if none remain…?"', 'If the forest and its people are destroyed, no one will be left to restore it.', 'It warns that **destroying nature threatens our own future**.'] },
  ]),

  // ---------- 11. Justice ----------
  L('li-satire-2', 'li-f2-justice', '23.1', 'Satire', 10, ['Literary devices'], [
    '**Satire** uses humour, irony, exaggeration and mockery to criticise people, institutions or society, with the aim of **correcting** them. A satirical poem may pretend to praise a corrupt official ("Our honest chief, who counts the village money twice: once for us and once for himself") so that readers laugh and see the truth.',
    'Satire differs from simple insult because it targets a **vice** (corruption, injustice, hypocrisy) and wants change. To identify satire, find what is mocked, the method (irony, exaggeration) and the lesson.',
  ], 'li2-satire', 'Satire laughs at a fault in order to cure it.',
  ['A poem that praises a judge "who weighs justice on a scale of banknotes" is satirising:', ['corruption in the courts', 'honest judges', 'banks', 'weighing scales'], 'Ironic praise exposes bribery.'],
  [['Satire', 'Writing that uses humour and irony to criticise faults.'], ['Hypocrisy', 'Pretending to have virtues one does not have.']],
  [
    { q: 'Explain the satire: "Our minister loves the poor so much / he keeps their road money safe in his house."', steps: ['What is mocked: a minister who **steals** money meant for a road.', 'Method: **ironic praise** ("loves the poor so much", "keeps it safe").', 'Lesson: leaders who claim to serve the poor while robbing them must be exposed.'] },
  ]),

  L('li-justice-2', 'li-f2-justice', '23.2', 'Poems on laws, injustice, child abuse and power', 12, ['Poetry'], [
    'Poems on **justice** praise good laws, the rule of law, **equality** (the same rights for all) and **equity** (fair treatment according to need), and condemn **injustice**: favouritism, discrimination, torture, child abuse and the abuse of power. Satire, irony and pathos are their main tools.',
    'A poem written for this lesson:\n"The law is a net with holes so wide\nthe big fish swim from side to side;\nonly the small ones, thin and slow,\nare caught and dried for the market show."\nThe **extended metaphor** of the law as a fishing net shows that **the powerful escape punishment while the poor are punished**. The tone is bitter and satirical.',
  ], 'li1-protest', 'In an extended metaphor, explain each part: the net, the big fish, the small fish.',
  ['In the poem, the "big fish" stand for:', ['powerful people who escape the law', 'real fish', 'fishermen', 'judges who are fair'], 'Part of the extended metaphor.'],
  [['Equality', 'The same rights and chances for all.'], ['Equity', 'Fair treatment that takes people’s needs into account.'], ['Injustice', 'Unfair treatment.']],
  [
    { q: 'What is the theme of "The law is a net with holes so wide"?', steps: ['The net (law) lets big fish (the powerful) escape and catches small fish (the poor).', 'Theme: **when justice favours the powerful, the poor suffer.**'] },
  ]),

  // ---------- 12. Unity ----------
  L('li-signal-2', 'li-f2-ethnicity', '24.1', 'Tone and attitude signal words', 10, ['Poetry', 'Reading skills'], [
    '**Signal words** reveal the writer’s attitude: words of approval (noble, brave, sweet, proud), disapproval (shameful, greedy, wicked, sadly), doubt (perhaps, they say), and emphasis (surely, never, always). **Moral signal words** show what the writer thinks is right or wrong.',
    'To describe the tone of a poem: collect the strongest signal words, decide what attitude they share, and name the tone precisely: bitter, mocking, hopeful, mournful, admiring, warning.',
  ], 'li2-signal-words', 'Three strong words are enough to prove a tone.',
  ['"Shamefully they closed their doors to the stranger" shows an attitude of:', ['disapproval', 'admiration', 'neutrality', 'joy'], '"Shamefully" signals blame.'],
  [['Signal word', 'A word that reveals the writer’s attitude.'], ['Tone', 'The writer’s attitude to the subject.']],
  [
    { q: 'Name the tone and prove it: "Proud hills, brave rivers, noble land, / we hold your future in our hand."', steps: ['Signal words: proud, brave, noble.', 'They all show admiration and love.', 'Tone: **admiring and patriotic**.'] },
  ]),

  L('li-unity-2', 'li-f2-ethnicity', '24.2', 'Poems on tribalism, regionalism and good governance', 12, ['Poetry'], [
    'Poems on **ethnicity** and **regionalism** criticise prejudice: judging people by their tribe or region, claims of cultural superiority, and insulting labels. They call for **social cohesion**, respect and **living together** in a country of over 250 ethnic groups, and they attack **bad governance** (corruption, favouritism, neglect) that divides citizens.',
    'A poem written for this lesson:\n"You call me ‘that one from the hills’,\nI call you ‘that one from the coast’;\nyet when the floods destroyed your fields,\nmy hills gave shelter to you most."\nThe **contrast** between insulting labels and real help, and the **irony** that the despised neighbour is the one who helps, show the foolishness of tribal prejudice. The tone moves from bitter to reconciling.',
  ], 'li2-signal-words', 'Look for the moment that turns prejudice upside down.',
  ['The irony in the poem is that:', ['the person insulted is the one who gives shelter', 'the floods were small', 'both live on the coast', 'nobody helps'], 'The despised neighbour helps.'],
  [['Tribalism', 'Unfair favour or hostility based on tribe.'], ['Social cohesion', 'Unity and cooperation among the groups of a society.'], ['Good governance', 'Honest, fair and effective leadership.']],
  [
    { q: 'State the theme of the poem and give evidence.', steps: ['Theme: **tribal and regional prejudice is foolish, because all citizens need one another.**', 'Evidence: "yet when the floods destroyed your fields, / my hills gave shelter to you most."'] },
  ]),

  // ---------- 13. Technology ----------
  L('li-progress-2', 'li-f2-technology', '25.1', 'Poems on science, technology and the internet', 12, ['Poetry'], [
    'Poems on **science and technology** celebrate progress and **innovation**: the internet that brings libraries into villages, mobile money, solar lamps, and medical discoveries. Wise poems also show the risks: addiction, false information, cyberbullying and loss of face-to-face friendship. They encourage **research**, **caution** and **prudence**.',
    'A poem written for this lesson:\n"A library without walls or keys\nnow opens in my palm;\nbut who will teach my thumb to stop,\nmy restless eyes to calm?"\nThe **metaphor** "a library without walls" praises the internet; the **rhetorical question** and the **personification** of the "restless eyes" warn of addiction. The poem is **balanced**: admiring and cautious.',
  ], 'li1-media', 'A balanced poem shows benefits and dangers: find both.',
  ['"A library without walls or keys" praises the internet because it:', ['gives free access to knowledge everywhere', 'has no books', 'is locked', 'is a building'], 'A metaphor of open knowledge.'],
  [['Innovation', 'A new idea, method or device.'], ['Prudence', 'Careful good judgement.']],
  [
    { q: 'Which lines show the danger of the internet?', steps: ['"but who will teach my thumb to stop, / my restless eyes to calm?"', 'They show **difficulty in stopping**, a sign of **addiction**.'] },
  ]),

  L('li-response-2', 'li-f2-technology', '25.2', 'Writing a personal response to a poem', 12, ['Writing', 'Poetry'], [
    'A **personal response** shows how a poem affects you and why. Steps:\n1. say briefly what the poem is about\n2. describe your reaction: what you liked, what moved, surprised or troubled you\n3. support each reaction with words from the poem\n4. connect the poem to your own experience or to real life\n5. say whether you agree with the poet’s message, and why.',
    'Use "I" in a personal response, but still give evidence: "I found the last two lines disturbing because the question ‘who will teach my thumb to stop?’ reminded me how hard it is to put my own phone down."',
  ], 'li2-response', 'Every feeling needs a reason from the text.',
  ['In a personal response, each reaction should be supported by:', ['words from the poem', 'the poet’s address', 'a dictionary', 'nothing'], 'Evidence matters even in personal writing.'],
  [['Personal response', 'A reader’s own reaction to a text, supported with evidence.']],
  [
    { q: 'Write a three-sentence personal response to the internet poem.', steps: ['What it is about: "**The poem praises the internet as a library in the palm but warns of addiction.**"', 'Reaction with evidence: "I liked the image of \'a library without walls or keys\' because it is true that I can read anything on a phone."', 'Agreement: "I agree with the warning, because I sometimes scroll for hours instead of revising."'] },
  ]),

  // ---------- 14. Culture ----------
  L('li-preserve-2', 'li-f2-culture', '26.1', 'Poems on vanishing and preserved cultures', 12, ['Poetry'], [
    'Some poems mourn cultures that are being **erased**: young people who no longer speak their mother tongue, festivals replaced by imported celebrations, sacred objects sold to tourists. Others celebrate **preservation**: village festivals, museums, cultural artefacts and the teaching of local languages, and call for **sensitisation** and love of one’s identity.',
    'A poem written for this lesson:\n"My grandfather’s tongue sleeps in a drawer;\nI wake it only at funerals.\nAt the festival the drums still speak,\nbut fewer of us understand."\nThe **metaphor** of the language sleeping in a drawer, the **irony** of using it only at funerals, and the **personified** drums that "still speak" create a mournful tone. Theme: **a culture dies when its young stop using it.**',
  ], 'li1-local-colour', 'Ask what is being lost, and who is responsible for keeping it.',
  ['"My grandfather’s tongue sleeps in a drawer" means that:', ['the mother tongue is no longer used', 'grandfather is asleep', 'a tongue is in a drawer', 'the drawer is locked'], 'A metaphor for a forgotten language.'],
  [['Preservation', 'Keeping something safe from loss.'], ['Mother tongue', 'The first language a person learns at home.']],
  [
    { q: 'Suggest two ways the speaker could help preserve the culture.', steps: ['**Speak the mother tongue at home** and learn it from elders.', '**Take part in festivals** and learn the meaning of the drums and songs.'] },
  ]),

  L('li-poemanalysis-2', 'li-f2-culture', '26.2', 'Writing about a whole poem', 14, ['Writing', 'Poetry'], [
    'To write about a whole poem, organise your answer:\n1. **subject**: what the poem is about, in one sentence\n2. **speaker and situation**: who speaks, to whom, where\n3. **structure**: stanzas, rhyme, run-on lines, how the ideas move\n4. **devices**: two or three devices, each quoted and explained\n5. **tone and mood**: with signal words\n6. **theme**: the central idea, as a sentence\n7. **your response**: what the poem means to you.',
    'Keep quotations short, explain every device you name, and link everything to the theme. A good paragraph on a device: "The poet personifies the drums, which \'still speak\'. This shows that the culture is still alive in its music, even though few young people understand it."',
  ], 'li2-poem-analysis', 'Never name a device without explaining its effect.',
  ['When writing about a whole poem, you should always link the devices to:', ['the theme', 'the price of the book', 'the poet’s age', 'the font'], 'Devices serve the meaning.'],
  [['Analysis', 'Careful examination of the parts of a text and how they create meaning.']],
  [
    { q: 'Outline an answer on the poem "My grandfather’s tongue sleeps in a drawer".', steps: ['Subject: the loss of a mother tongue and culture.', 'Speaker: a young person who uses the language only at funerals.', 'Devices: metaphor (tongue in a drawer), irony (only at funerals), personification (drums still speak).', 'Tone: mournful. Theme: **a culture dies when its young stop using it.** Response: it made me want to learn my own language.'] },
  ]),
];
