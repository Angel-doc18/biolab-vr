// Literature in English lessons for Form 3 (first part): literature and its
// genres, figures of speech, African oral forms, the year's poems and oral
// performance. Every poem, tale and extract was written for this app. **double
// asterisks** mark key terms; `examples` are worked examples.

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

export const LESSONS_3A = [
  // ---------- 1. What literature is ----------
  L('li-define-3', 'li-f3-intro', '1.1', 'The definition, functions and importance of literature', 12, ['Literary terms'], [
    '**Literature** is the artistic use of language to tell stories, express feelings and ideas, and imagine other lives. It can be **oral** (tales, songs, proverbs and riddles performed by word of mouth) or **written** (novels, poems and plays in books). What makes it literature is the care with which words are chosen and arranged to move, delight or teach.',
    '**Functions** of literature:\n- to **entertain**: stories and songs give pleasure\n- to **educate**: tales teach morals and values such as honesty and respect\n- to **preserve culture and history**: songs and legends keep the memory of a people\n- to **criticise society**: writers expose corruption, injustice and harmful customs\n- to **express feelings**: love, grief, joy and anger find a voice\n- to **build language**: readers learn new words and ways of speaking.',
    '**Importance** for a student: literature helps you understand people different from yourself, think critically, write and speak better, and know your own cultural heritage.',
  ], 'li3-functions', 'Ask of any text: does it entertain, teach, remember, criticise or express?',
  ['A song sung at a funeral that recalls the life of the dead mainly serves to:', ['preserve memory and express grief', 'sell goods', 'give directions', 'test grammar'], 'Oral literature remembers and mourns.'],
  [['Literature', 'The artistic use of language, spoken or written, to tell, express and imagine.'], ['Oral literature', 'Literature performed and passed on by word of mouth.']],
  [
    { q: 'Give three functions of literature with an example of each.', steps: ['**Entertain**: a funny tortoise tale told at night.', '**Educate**: a fable that teaches children not to be greedy.', '**Criticise society**: a poem that mocks officials who take bribes.'] },
  ]),

  L('li-genres-3', 'li-f3-intro', '1.2', 'The three genres: prose, poetry and drama', 12, ['Literary terms', 'Genres'], [
    '**Prose** is continuous writing in sentences and paragraphs that tells a story: the **novel** (long, with many chapters), the **novella** and the **short story**. Its oral form is the tale.',
    '**Poetry** uses lines and **stanzas**, rhythm, sound and images, and says much in few words. Its oral forms are songs, chants, praise poems and lullabies.',
    '**Drama** is written to be **performed** by actors before an audience. It is made of **dialogue** and **stage directions**, and divided into **acts** and **scenes**. Its oral forms include masquerades, ritual performances and dramatised tales.',
    'The genres share **elements**: characters, setting, plot or situation, themes, language and style. A good reader first identifies the genre, then looks for these elements.',
  ], 'lit-genres', 'Paragraphs: prose. Lines and stanzas: poetry. Speakers’ names and stage directions: drama.',
  ['A text set out in lines grouped into stanzas is:', ['poetry', 'prose', 'drama', 'a report'], 'Stanzas mark poetry.'],
  [['Genre', 'A type or category of literature: prose, poetry or drama.'], ['Stanza', 'A group of lines in a poem.']],
  [
    { q: 'Say which genre each is: (a) "Chapter 3: The market" (b) "TANJONG: (whispering) Is anyone there?" (c) "The rain sings on the zinc, / the children dance below."', steps: ['(a) a chapter heading → **prose (a novel)**', '(b) a speaker’s name and a stage direction → **drama**', '(c) short lines with rhythm and images → **poetry**'] },
  ]),

  // ---------- 2. Simile, metaphor and personification ----------
  L('li-simile-3', 'li-f3-devices', '2.1', 'Simile and metaphor', 12, ['Literary devices'], [
    'A **simile** compares two different things **openly**, using **like** or **as**: "Her voice was **like** honey." "He ran **as** fast **as** a frightened antelope." A **metaphor** compares **directly**, saying that one thing **is** another: "Her voice **was** honey." "The market **is** a beehive."',
    'Both help the reader **see** and **feel** an idea by linking it to something familiar. To explain one, ask: (1) What two things are compared? (2) What quality do they share? "The market is a beehive": the market and a beehive are compared; both are crowded, busy and noisy.',
    'Examples written for this lesson: "The harmattan dust lay on the roofs like grey flour" (simile: thick, dry and pale). "Grandmother is the root of our family" (metaphor: she holds the family together and feeds it with wisdom).',
  ], 'li3-simile-metaphor', 'Like or as? Simile. No like or as? Look for a metaphor.',
  ['"The teacher’s words were a lamp in the dark" is a:', ['metaphor', 'simile', 'personification', 'riddle'], 'No like or as: a direct comparison.'],
  [['Simile', 'A comparison using like or as.'], ['Metaphor', 'A direct comparison saying one thing is another.']],
  [
    { q: 'Identify and explain: "The bus was an oven at noon."', steps: ['Device: **metaphor** (no like or as).', 'Compared: **the bus** and **an oven**.', 'Effect: the bus was **unbearably hot**; the reader feels the heat.'] },
  ]),

  L('li-personify-3', 'li-f3-devices', '2.2', 'Personification; answering a question on a device', 12, ['Literary devices', 'Writing'], [
    '**Personification** gives human qualities, feelings or actions to animals, objects, places or ideas: "The wind **whispered**." "The old house **groaned** in the storm." "Hunger **knocked** at every door." It makes the non-human lively and helps us feel its mood.',
    'In examinations you are often asked to **identify** a figure of speech and **explain** it. Use three steps:\n1. **Name** the device: "This is personification."\n2. **Quote** the words: "The river sang."\n3. **Explain** the effect: "The river is given a human voice, which shows that its sound is gentle and pleasant, and creates a peaceful atmosphere."',
    'Never just name the device; marks come from the explanation.',
  ], 'li1-pee', 'Name it, quote it, explain it: three steps, three chances of marks.',
  ['"The sun stared angrily at the dry fields" is:', ['personification', 'a simile', 'hyperbole', 'alliteration'], 'The sun is given a human look and feeling.'],
  [['Personification', 'Giving human qualities to non-human things.']],
  [
    { q: 'Answer: Identify and explain the device in "Fear crept into the room and sat beside the children."', steps: ['Name: **personification**.', 'Quote: "Fear crept into the room and sat beside the children."', 'Explain: **fear is given human actions** (creeping, sitting), which shows how it slowly fills the room and stays close to the children, creating **tension**.'] },
  ]),

  // ---------- 3. More figures of speech ----------
  L('li-hyperbole-3', 'li-f3-devices2', '3.1', 'Hyperbole, irony and contrast', 12, ['Literary devices'], [
    '**Hyperbole** is deliberate **exaggeration** for effect, not to deceive: "I have walked a thousand miles to school this week." "My bag weighs a tonne." It shows strong feeling or humour.',
    '**Irony** is a gap between what is said or expected and what is real. **Verbal irony**: saying the opposite of what you mean ("What a clever idea!" for a foolish plan). **Situational irony**: the opposite of what we expect happens (the fire station burns down; the police officer is the thief). **Dramatic irony**: the audience knows something a character does not (you will meet it in the play).',
    '**Contrast** places opposite things side by side to make both clearer: the rich man’s feast and the beggar’s empty bowl; the noisy city and the quiet village; the honest elder and the greedy chief.',
  ], 'lit-irony-types', 'Irony: expect one thing, get the opposite.',
  ['A doctor who never washes his hands is an example of:', ['situational irony', 'hyperbole', 'simile', 'alliteration'], 'We expect the opposite from a doctor.'],
  [['Hyperbole', 'Deliberate exaggeration for effect.'], ['Irony', 'A contrast between what is said or expected and what is real.'], ['Contrast', 'Placing opposites side by side.']],
  [
    { q: 'Identify the devices: (a) "I told you a million times." (b) A sign reading "Keep the town clean" stands in a heap of rubbish.', steps: ['(a) **hyperbole**: an exaggeration that shows impatience.', '(b) **situational irony**: the sign asks for cleanliness, but the place is dirty, which mocks people’s carelessness.'] },
  ]),

  L('li-alliteration-3', 'li-f3-devices2', '3.2', 'Alliteration, allusion, pathos and the rhetorical question', 12, ['Literary devices'], [
    '**Alliteration** repeats the same **consonant sound** at the start of nearby words: "**s**oft **s**ilver **s**and", "**b**ig **b**lack **b**ird". It creates music and can echo meaning (hissing s for wind or snakes).',
    '**Allusion** is a brief reference to a well-known person, story, place or event, often from the Bible, history or folklore: "He is a real Judas" (a betrayer); "strong as Samson"; "clever as Tortoise". It packs a whole story into a few words.',
    '**Pathos** is the quality that makes the reader feel **pity** or **sadness**: an orphan crying for a mother, a sick child without medicine. A **rhetorical question** is asked for effect, not for an answer: "Who will speak for the poor if we stay silent?" It makes the reader think.',
  ], 'lit-sound-devices', 'Hear it (alliteration), recognise it (allusion), feel it (pathos), think about it (rhetorical question).',
  ['"He betrayed his friend like Judas" contains:', ['an allusion', 'alliteration', 'hyperbole', 'personification'], 'Judas is a biblical betrayer.'],
  [['Alliteration', 'The repetition of the same consonant sound at the start of nearby words.'], ['Allusion', 'A brief reference to a well-known person, story or event.'], ['Pathos', 'The quality that arouses pity or sadness.'], ['Rhetorical question', 'A question asked for effect, not for an answer.']],
  [
    { q: 'Identify the device: (a) "Cold, cruel cutlass" (b) "Must children die before we build a clinic?"', steps: ['(a) **alliteration** of the hard c sound, which makes the weapon sound harsh.', '(b) **rhetorical question**: it needs no answer; it shocks the listener into action and adds **pathos**.'] },
  ]),

  // ---------- 4. Folktales, myths and legends ----------
  L('li-folktale-3', 'li-f3-oral', '4.1', 'Folktales: features and kinds', 12, ['Oral literature'], [
    '**Folktales** are stories passed on by word of mouth from generation to generation. Features: no known author (they belong to the community); an **opening formula** ("Once upon a time…", or a call such as "Story, story!" answered "Story!"); simple, often animal **characters** (Tortoise the trickster, Lion the strong, Hare the clever); **songs** and repetition; a **moral** at the end; and a **closing formula** ("And that is why…", "My story ends there").',
    'Kinds of tales: **trickster tales** (a weak but clever animal outwits stronger ones); **aetiological or "why" tales** (they explain why things are as they are: why the tortoise’s shell is cracked); **moral tales** (they warn against greed, pride or disobedience); **dilemma tales** (they end with a question for the audience to debate).',
    'A tale written for this lesson: Tortoise borrowed wings from the birds to attend a feast in the sky and called himself "All of You". When the hosts said "This food is for all of you", he ate it all. The angry birds took back their feathers, and Tortoise fell onto the rocks. That is why his shell is cracked. Moral: greed and trickery bring their own punishment.',
  ], 'li1-oral-tales', 'Look for the moral: it is usually the reason the tale is told.',
  ['The tale of Tortoise’s cracked shell is both a trickster tale and:', ['a why (aetiological) tale', 'a legend', 'a myth of creation', 'a praise poem'], 'It explains the shell.'],
  [['Folktale', 'A traditional story passed on orally.'], ['Trickster', 'A clever, cunning character who uses tricks.'], ['Aetiological tale', 'A tale that explains the origin of something.']],
  [
    { q: 'Name three features of the folktale in the lesson.', steps: ['An **animal trickster**: Tortoise.', 'A **trick and its punishment**: calling himself "All of You", then falling.', 'A **why ending and a moral**: why the shell is cracked; greed brings punishment.'] },
  ]),

  L('li-myth-3', 'li-f3-oral', '4.2', 'Myths and legends', 12, ['Oral literature'], [
    'A **myth** is a sacred or traditional story that explains **origins** and the workings of the world through gods, spirits and supernatural events: how the world was made, why the sky is far away, where death came from, why the rains come. Myths often support a people’s beliefs and rituals.',
    'A myth told in many African communities, retold here: long ago the sky was so close that people could touch it, and they tore off pieces to eat. One day a woman pounding grain kept hitting the sky with her long pestle. Annoyed, the sky rose far above the earth, where it stays today.',
    'A **legend** is a story about a **real or believed historical** person, place or event, made larger than life as it passes from mouth to mouth: heroes, warriors and the founders of peoples. For example, Bamum oral tradition tells how **Nchare Yen**, a prince who left his home with his followers, founded the Bamum kingdom around Foumban. Legends give a people pride and a sense of shared origin.',
  ], 'li3-myth-legend', 'Myth: why the world is so. Legend: what our heroes did.',
  ['A story about how the first rain came from a god’s tears is a:', ['myth', 'legend', 'riddle', 'proverb'], 'It explains an origin with the supernatural.'],
  [['Myth', 'A traditional story explaining origins through the supernatural.'], ['Legend', 'A traditional story about a historical person or event, exaggerated over time.']],
  [
    { q: 'Compare a myth and a legend under: characters, purpose, truth.', steps: ['Characters: myth → **gods, spirits, first humans**; legend → **heroes, founders, warriors**.', 'Purpose: myth → **explains origins and beliefs**; legend → **celebrates a people’s history and heroes**.', 'Truth: myth → **sacred, beyond history**; legend → **has a historical core, exaggerated**.'] },
  ]),

  // ---------- 5. Riddles and proverbs ----------
  L('li-riddle-3', 'li-f3-riddles', '5.1', 'Riddles', 10, ['Oral literature'], [
    'A **riddle** is a puzzling question or statement, often in the form of a metaphor, whose answer the listener must guess. Riddling is a game, usually among children and young people in the evening, with set rules: the asker gives the riddle, the others guess, and if they fail they may "buy" the answer with a forfeit.',
    'Riddles written for this lesson: "I have a head and a tail but no body" (a coin). "My house has no door, yet I live inside" (an egg; the chick). "I run all day but never leave my bed" (a river). "The more you take, the more you leave behind" (footsteps).',
    '**Functions**: riddles sharpen the mind and memory, train children to observe nature and everyday objects, teach new words and images, and bring people together in play. They use **metaphor** and **personification**, like poetry.',
  ], 'li1-proverbs-riddles', 'Read a riddle as a metaphor: what thing has these features?',
  ['"I run all day but never leave my bed." The answer is:', ['a river', 'a dog', 'a car', 'a child'], 'A river runs in its riverbed.'],
  [['Riddle', 'A puzzling question or statement whose answer must be guessed.']],
  [
    { q: 'Explain how the riddle "I have teeth but cannot eat" works.', steps: ['It describes an object with "teeth" in a **metaphor**.', 'The listener looks for a thing with teeth that is not alive: **a comb** (or a saw).', 'The riddle trains **observation** and **imagination**.'] },
  ]),

  L('li-proverb-3', 'li-f3-riddles', '5.2', 'Proverbs: features, meaning and use', 12, ['Oral literature'], [
    'A **proverb** is a short, traditional saying that expresses a general truth or piece of advice in vivid language. Features: brief and easy to remember; often a **metaphor** or image from nature and daily life; meaning more than it says; used with authority, mostly by elders.',
    'Proverbs that are widely known in Africa: "When two elephants fight, it is the grass that suffers" (the weak suffer when the powerful quarrel). "One finger cannot pick up a grain" (we need cooperation). "The child who is not embraced by the village will burn it down to feel its warmth" (a neglected child may turn against society). "A gift that closes the mouth also closes the eyes" (from this year’s novel: a bribe makes people blind to wrong).',
    '**Uses**: to advise and warn politely, to settle disputes, to persuade, to show wisdom and respect for tradition. In novels and plays, a character who speaks in proverbs is usually shown as wise, rooted in culture and respected; a writer may also use proverbs to state a theme.',
  ], 'li3-proverb-use', 'Turn the image into a lesson: what does the proverb say about people?',
  ['"One finger cannot pick up a grain" teaches:', ['cooperation', 'greed', 'laziness', 'pride'], 'We need one another.'],
  [['Proverb', 'A short traditional saying expressing a general truth or advice.']],
  [
    { q: 'Explain the proverb "When two elephants fight, it is the grass that suffers" and give a situation where it applies.', steps: ['Literal image: fighting elephants trample the grass beneath them.', 'Meaning: **when powerful people quarrel, ordinary people suffer**.', 'Situation: **two neighbouring families quarrel, and their children lose their friendship and peace**.'] },
  ]),

  // ---------- 6. Family and self-worth ----------
  L('li-selfworth-3', 'li-f3-poem-family', '6.1', 'The poem "My Name Is a House": pride, kinship and ambition', 14, ['Poetry'], [
    'A poem written for this lesson:\n"**My Name Is a House**\nMy name is a house my grandmother built,\neach letter a brick she carried from the stream.\nWhen strangers laugh at my dark skin,\nI stand in the doorway and do not move.\nLike David before the giant, I am small but not afraid.\nMy dreams are taller than the iroko tree;\nI will climb them, branch by patient branch.\nI carry my family like water on my head:\ncarefully, proudly, spilling none."',
    '**Subject**: a teenager’s identity. **Speaker**: a young person proud of their family and colour. **Meaning**: the name was "built" by the grandmother, so it holds the family’s love and labour (**kinship**); when mocked, the speaker stands firm (**self-respect**, **pride in one’s colour**); the speaker has big **ambitions** and will reach them patiently; the family is carried with care, so the speaker’s behaviour honours or shames them (**responsibility**).',
    '**Themes**: identity and self-worth; pride in African heritage; family and kinship; ambition and determination; responsibility. **Tone**: proud, calm and determined.',
  ], 'li3-poem-house', 'Ask what the main image stands for: here, the house is the family’s gift of identity.',
  ['"I carry my family like water on my head" shows that the speaker:', ['feels responsible for the family’s good name', 'wants to leave the family', 'sells water', 'is tired of the family'], 'Water on the head is carried carefully.'],
  [['Speaker', 'The voice that speaks in a poem.'], ['Kinship', 'Family relationship and the bonds it creates.'], ['Tone', 'The attitude of the speaker shown by the words.']],
  [
    { q: 'Write two sentences on the theme of self-worth in the poem, with evidence.', steps: ['Point: **the speaker refuses to be ashamed of who they are**.', 'Evidence: "When strangers laugh at my dark skin, / I stand in the doorway and do not move."', 'Explanation: standing firm in the doorway of the "house" (the name) shows **pride and self-respect** in the face of mockery.'] },
  ]),

  L('li-poemdevices-3', 'li-f3-poem-family', '6.2', 'Devices in "My Name Is a House"; writing about a whole poem', 12, ['Poetry', 'Literary devices', 'Writing'], [
    'Devices in the poem:\n- **metaphor**: "My name is a house" (identity as a shelter built by the family); "each letter a brick" (each part of the name carries effort)\n- **hyperbole**: "My dreams are taller than the iroko tree" (huge ambition)\n- **simile**: "like water on my head" (care and balance)\n- **allusion**: "Like David before the giant" (the Bible story of the small shepherd who defeated Goliath: courage against a stronger enemy)\n- **imagery** of building and climbing: progress step by step ("branch by patient branch").',
    'Writing about a whole poem: (1) the **subject** and **speaker**; (2) what happens or is said, stanza by stanza or idea by idea; (3) the **themes**; (4) the **devices** and their effect; (5) the **tone** and your **response**. Use short quotations and explain each one.',
  ], 'li2-poem-analysis', 'Every device you mention needs a quotation and an effect.',
  ['"Like David before the giant" suggests that the speaker:', ['faces mockery bravely, like the small David against Goliath', 'is a giant', 'is a shepherd', 'wants to fight with stones'], 'An allusion to courage.'],
  [['Imagery', 'Words that create pictures in the mind.'], ['Allusion', 'A reference to a well-known story, person or event.']],
  [
    { q: 'Explain the hyperbole in "My dreams are taller than the iroko tree".', steps: ['Device: **hyperbole** (and comparison).', 'The iroko is one of the tallest trees of the forest; dreams cannot really be measured.', 'Effect: the exaggeration shows the speaker’s **very great ambition**, and the next line ("I will climb them") shows **determination**.'] },
  ]),

  // ---------- 7. Mistakes and emotions ----------
  L('li-mistakes-3', 'li-f3-poem-choices', '7.1', 'The poem "If I Stumble": mistakes, parental pressure and determination', 12, ['Poetry'], [
    'A poem written for this lesson:\n"**If I Stumble**\nIf I stumble on the stony road,\ndo not call me a stone.\nMy father wants a doctor, my mother wants a lawyer;\nI want, first, to be allowed to fall and rise.\nMistakes are teachers with hard hands;\nthey slap, but they also show the way.\nSo I will rise, rub my knees, and walk on,\nwiser by one fall."',
    '**Meaning**: a young speaker asks adults not to judge them by one failure ("do not call me a stone": a fall does not make a person worthless). The parents’ dreams press on the child (**parental pressure**), but the child asks for the freedom to try, fail and learn. Mistakes hurt, yet they teach (**learning from shortcomings**). The speaker ends with **determination**: rise and continue, wiser.',
    'Devices: **alliteration** ("stumble on the stony road", s and st sounds that suggest difficulty); **wordplay** on "stone" (the road is stony, but the child is not a stone); **metaphor** and **personification** ("Mistakes are teachers with hard hands"); **contrast** between falling and rising. Tone: honest, hopeful and determined.',
  ], 'li3-poem-stumble', 'Track the movement of a poem: here, from falling to rising.',
  ['"Do not call me a stone" asks adults not to:', ['judge the speaker as worthless because of one failure', 'throw stones', 'build roads', 'call the doctor'], 'One fall is not the whole person.'],
  [['Parental pressure', 'Strong demands from parents about a child’s choices.'], ['Determination', 'Firmness of purpose; refusing to give up.']],
  [
    { q: 'Explain the metaphor "Mistakes are teachers with hard hands".', steps: ['Mistakes are compared to **teachers** who are strict.', '"Hard hands" means the lessons are **painful**.', 'Effect: mistakes **hurt but teach**, so the speaker accepts them as part of growing up.'] },
  ]),

  L('li-emotions-3', 'li-f3-poem-choices', '7.2', 'The poem "Anger, the Visitor": taming our emotions', 12, ['Poetry', 'Literary devices'], [
    'A poem written for this lesson:\n"**Anger, the Visitor**\nAnger knocks without a greeting,\npushes the door and sits in my chair.\nHe speaks with my mouth and breaks my plates,\nthen leaves me to sweep the pieces alone.\nNext time he knocks, I will count to ten,\noffer him water, and show him the road."',
    'The whole poem is an extended **personification**: anger is a rude visitor who enters without permission, takes the host’s place, speaks through the host and damages the home, then leaves the host to deal with the damage. The meaning: when we let anger control us, we say and do things that hurt others and ourselves, and **we** must repair the harm.',
    'The last two lines show **self-control**: counting to ten, calming down ("offer him water") and sending anger away. Theme: **taming our emotions**; **responsibility** for our actions. Tone: regretful, then calm and wise.',
  ], 'li1-personification', 'An extended personification keeps the same human picture through the whole poem.',
  ['"Then leaves me to sweep the pieces alone" suggests that after anger passes:', ['we must repair the harm it caused', 'the house is clean', 'the visitor returns to help', 'nothing happened'], 'We face the consequences.'],
  [['Extended personification', 'A personification developed through several lines or a whole poem.'], ['Self-control', 'The ability to control one’s emotions and actions.']],
  [
    { q: 'How does the speaker plan to deal with anger? Quote and explain.', steps: ['Quote: "I will count to ten, / offer him water, and show him the road."', 'Counting to ten: **pausing before reacting**.', 'Offering water and showing the road: **calming down and sending anger away politely**; the speaker has learned **self-control**.'] },
  ]),

  // ---------- 8. Money and honesty ----------
  L('li-money-3', 'li-f3-poem-economy', '8.1', 'The poem "The Coin Speaks": money, corruption and honesty', 14, ['Poetry'], [
    'A poem written for this lesson:\n"**The Coin Speaks**\nI am the coin in your pocket, small and round,\nyet I open doors that law has locked.\nI buy the silent judge, the absent nurse,\nthe road that was paid for but never built.\nIn honest hands I am bread and school fees;\nin greedy hands I am a thief with a smile.\nDo not blame me, citizen; ask whose hand holds me."',
    '**Speaker**: the coin itself (**personification**). **Meaning**: money is small, yet powerful; used for **bribery** it "opens doors that law has locked", buys judges who stay silent and nurses who do not come to work, and swallows public money for roads that are never built (**corruption**, **embezzlement**). Used honestly, the same money feeds families and pays school fees.',
    '**Themes**: corruption and its effects on society; honesty and **probity**; the right use of money; the responsibility of citizens. The last line moves the blame from money to **people**: money is a tool; our choices make it good or bad.',
  ], 'li3-poem-coin', 'When an object speaks in a poem, ask what the poet makes it confess.',
  ['"The silent judge" suggests a judge who:', ['has been bribed to say nothing against the guilty', 'cannot speak', 'is asleep', 'is retired'], 'Bought silence.'],
  [['Corruption', 'Dishonest behaviour by people in power, such as taking bribes.'], ['Embezzlement', 'Stealing money that one has been trusted to manage.'], ['Probity', 'Honesty and moral uprightness.']],
  [
    { q: 'Explain the irony in "the road that was paid for but never built".', steps: ['We expect money paid for a road to produce a road.', 'Instead **nothing was built**: the money was stolen.', 'The **irony** exposes **embezzlement** of public funds and makes the reader angry.'] },
  ]),

  L('li-corruption-3', 'li-f3-poem-economy', '8.2', 'Contrast in "The Coin Speaks"; composing a poem on the economy', 12, ['Poetry', 'Writing'], [
    'The poem is built on **contrast**: "small and round" against the great power to "open doors"; "honest hands" against "greedy hands"; "bread and school fees" against "a thief with a smile". The **metaphor** "a thief with a smile" shows corruption that looks friendly but robs the people. The final line is a **direct address** to the reader ("citizen"), which makes the poem a call to action.',
    '**Composing a poem on the economy** (a class project): (1) choose a subject (money, the market, prices, unemployment, corruption); (2) choose a speaker (yourself, a trader, a coin, a market stall); (3) list images and feelings; (4) use one or two devices you know (personification, contrast, a rhetorical question); (5) write 6 to 10 short lines and end with a strong idea; (6) read it aloud and improve it.',
  ], 'li1-write-poem', 'One clear speaker, two strong images and a final line that stays with the reader.',
  ['"A thief with a smile" suggests corruption that:', ['looks friendly but robs people', 'is easy to see', 'makes people laugh', 'helps the poor'], 'A hidden danger.'],
  [['Direct address', 'Speaking directly to the reader or to a person in the poem.']],
  [
    { q: 'Write the first four lines of a poem in which a market stall speaks about rising prices.', steps: ['Choose the speaker: **a market stall**.', '"**I am the stall at the corner of the market;**', '**each morning my tomatoes cost a little more.**', '**Mothers touch them, count their coins, and walk away;**', '**I watch empty baskets go home.**" (personification and pathos)'] },
  ]),

  // ---------- 9. Earth and health ----------
  L('li-earth-3', 'li-f3-poem-environment', '9.1', 'The poem "The River Asks": the environment', 14, ['Poetry'], [
    'A poem written for this lesson:\n"**The River Asks**\nI was a river once; children swam in me.\nNow plastic bottles ride my back like lazy kings,\nand the factory pours its poison in my mouth.\nThe forest that shaded me has gone to the sawmill;\nthe sun stares down and drinks me day by day.\nIn the north the sand is marching south.\nWho will plant a tree for me? Who will listen?"',
    '**Speaker**: the river (**personification**), which remembers a clean past and describes a polluted present. **Problems** named: **plastic pollution** ("bottles ride my back like lazy kings": a **simile** showing rubbish floating proudly, as if it owned the river); **industrial pollution** ("poison in my mouth"); **deforestation** ("gone to the sawmill"); **global warming** and drought ("the sun stares down and drinks me"); **desertification** ("the sand is marching south").',
    'The **rhetorical questions** at the end appeal to the reader to act. **Themes**: the destruction of the environment by human activity; the need to protect nature. **Tone**: sad (**pathos**) and pleading.',
  ], 'li3-poem-river', 'List each problem the poem names, then the device that presents it.',
  ['"The sun stares down and drinks me day by day" presents:', ['drought and evaporation as the sun drinking the river', 'a festival', 'a sunrise', 'a boat'], 'Personification of the sun.'],
  [['Desertification', 'The spread of desert into once fertile land.'], ['Global warming', 'The rise in the earth’s average temperature caused largely by human activity.']],
  [
    { q: 'Explain how the poet contrasts the past and the present of the river.', steps: ['Past: "I was a river once; children swam in me" → **clean, alive, joyful**.', 'Present: plastic, poison, no forest, drying up → **polluted and dying**.', 'Effect: the **contrast** creates **pathos** and shows how much has been lost through human carelessness.'] },
  ]),

  L('li-health-3', 'li-f3-poem-environment', '9.2', 'The poem "My Cousin": health, stigma and responsible choices', 12, ['Poetry'], [
    'A poem written for this lesson:\n"**My Cousin**\nThey say my cousin is “the sick one” now;\nthey move their chairs when she comes in.\nShe did not choose the virus in her blood;\nshe chooses, each morning, her medicine and her smile.\nLearn the facts, my friends, not the rumours:\nyou cannot catch it from a cup or a hug.\nWait, be wise, be tested, be kind."',
    '**Meaning**: the cousin lives with **HIV**. People avoid her because of **stigma** and **ignorance** ("they move their chairs"). The speaker defends her: she did not choose the illness, but she chooses courage (taking her treatment and smiling). The speaker corrects a false belief with a **fact**: HIV is **not** passed on by sharing a cup or by hugging.',
    'The last line gives advice for **responsible choices**: wait (delay sexual activity), be wise, know your status through testing, and be kind to people living with HIV. Health poems also treat **decency** and **safety**: decent dress and respectful behaviour protect dignity. Device: **pathos** (the pain of rejection). Tone: tender, then firm and instructive.',
  ], 'li1-tone', 'Notice where the tone changes: here, from sadness to firm advice.',
  ['"They move their chairs when she comes in" shows:', ['stigma: people reject her out of fear', 'good manners', 'a new seating plan', 'that the room is full'], 'Rejection based on ignorance.'],
  [['Stigma', 'Shame and rejection directed at a person because of a condition.'], ['Pathos', 'The quality that arouses pity or sadness.']],
  [
    { q: 'What message does the poem give about how to treat people living with HIV? Use evidence.', steps: ['Point: **we should treat them with kindness and learn the facts**.', 'Evidence: "Learn the facts, my friends, not the rumours: / you cannot catch it from a cup or a hug."', 'Explanation: the speaker attacks **ignorance and stigma** and calls the reader to **compassion**.'] },
  ]),

  // ---------- 10. Homeland and equality ----------
  L('li-homeland-3', 'li-f3-poem-nation', '10.1', 'The poem "Home": love for the homeland', 12, ['Poetry'], [
    'A poem written for this lesson:\n"**Home**\nFrom the beaches of Limbe to the sands of Kousseri,\nfrom the tea of Ndu to the forests of the East,\nyou are one mat with many colours, my country.\nI will not tear you with tribe or tongue;\nI will mend you with my work and my vote.\nHome, you are the song my mother hummed;\nI learn your words so I can sing them to my children."',
    'The speaker addresses the country directly as "you" (**apostrophe**). The first lines travel across Cameroon, from the coast in the south-west to the Far North and the East, to show its **diversity** (places, crops, landscapes). The **metaphor** "one mat with many colours" presents **unity in diversity**: many threads woven into one.',
    'The speaker promises to reject **tribalism** and division ("tribe or tongue") and to build the nation through **work** and **civic duty** ("my vote"). The last lines link the homeland to family and the future (the mother’s song, the speaker’s children). **Themes**: patriotism; national unity; civic responsibility. **Tone**: loving and committed.',
  ], 'li3-poem-home', 'A list of places in a poem often shows the size and variety of a land.',
  ['"One mat with many colours" suggests that the country is:', ['united, though made of many different peoples', 'poor', 'divided into enemies', 'made of cloth'], 'Unity in diversity.'],
  [['Apostrophe', 'Addressing an absent person, a thing or an idea directly.'], ['Patriotism', 'Love for and devotion to one’s country.']],
  [
    { q: 'Explain how the poem shows civic responsibility.', steps: ['Quote: "I will mend you with my work and my vote."', '"Mend" treats the country like a mat that can be torn and repaired (**metaphor**).', 'The speaker accepts the citizen’s **duty** to build the nation through **work** and **voting**, not division.'] },
  ]),

  L('li-equality-3', 'li-f3-poem-nation', '10.2', 'The poem "Equal Seats": gender equality', 12, ['Poetry'], [
    'A poem written for this lesson:\n"**Equal Seats**\nIn my grandfather’s house the girls ate last,\nand fetched the water while the boys read books.\nNow the classroom has two doors and one blackboard,\nand my sister’s hand rises as fast as mine.\nGive her the pen, the field, the seat at the council;\na bird cannot fly with one wing."',
    'The poem uses **contrast** between **then** (girls ate last and worked while boys studied: **gender bias**) and **now** (girls and boys share one blackboard; the sister answers as quickly as the brother: **equal opportunity**). The speaker, a brother, asks for equal chances for girls in education ("the pen"), work ("the field") and leadership ("the seat at the council").',
    'The final line works like a **proverb** and **metaphor**: a society, like a bird, needs both wings, women and men, to rise. **Themes**: gender equality; the education and empowerment of the girl child; change in society. **Tone**: respectful of the past but firm about the future.',
  ], 'li1-contrast', 'Find the turning word in a contrast poem: here, "Now".',
  ['"My sister’s hand rises as fast as mine" shows that:', ['girls are as able as boys in class', 'the sister is impatient', 'the brother is lazy', 'the class is noisy'], 'Equal ability.'],
  [['Gender equality', 'Equal rights and opportunities for women and men.'], ['Gender bias', 'Unfair treatment because of a person’s sex.']],
  [
    { q: 'Explain the last line, "a bird cannot fly with one wing".', steps: ['Image: a bird needs two wings to fly.', 'Meaning: **a society needs both women and men to progress**.', 'Effect: the proverb-like **metaphor** gives the poem a strong, memorable conclusion.'] },
  ]),

  // ---------- 11. Culture and technology ----------
  L('li-heritage-3', 'li-f3-poem-culture', '11.1', 'The poem "The Drum and the Phone": heritage and technology', 12, ['Poetry'], [
    'A poem written for this lesson:\n"**The Drum and the Phone**\nMy grandfather’s drum spoke across seven hills;\nmy phone speaks across seven seas.\nThe drum knew every name in the village;\nthe phone knows strangers better than my neighbour.\nIn the city my cousin streams the world all night;\nin our village the signal comes and goes like a shy guest.\nLet me keep both: the drum to remember who I am,\nthe phone to tell the world."',
    'The poem is built on **contrast** and **parallel lines**: the **drum** (tradition, community, identity: talking drums once sent messages between villages) and the **phone** (modern technology, global reach). Each has a weakness: the drum reaches only the hills; the phone connects us to strangers but can cut us off from neighbours.',
    'The **simile** "like a shy guest" shows the weak network in the village compared with the city: the **digital divide**. The ending refuses to choose: keep **cultural heritage** for identity and use **technology** to share it. **Themes**: tradition and modernity; cultural identity; the digital divide. **Tone**: thoughtful and balanced.',
  ], 'li3-poem-drum', 'In a contrast poem, list what each side gives and what each side lacks.',
  ['The drum in the poem is a symbol of:', ['tradition and cultural identity', 'noise', 'wealth', 'the city'], 'It "knew every name in the village".'],
  [['Digital divide', 'The gap between people who have good access to technology and those who do not.'], ['Heritage', 'The traditions and culture passed down from earlier generations.']],
  [
    { q: 'Explain the contrast in "The drum knew every name in the village; / the phone knows strangers better than my neighbour."', steps: ['The drum belongs to a **close community** where everyone is known.', 'The phone links us to **distant strangers** but may weaken ties with neighbours.', 'The **contrast** shows a loss that comes with modern technology.'] },
  ]),

  L('li-toosoon-3', 'li-f3-poem-culture', '11.2', 'The poem "Too Soon": harmful practices and culture', 12, ['Poetry'], [
    'A poem written for this lesson:\n"**Too Soon**\nShe was thirteen, with a school bag and a dream of nursing;\nthey gave her a wedding cloth instead.\nThe drums were loud, the dowry was counted,\nand nobody counted the books she left behind.\nCulture is a garden we must weed:\nkeep the songs, the greetings, the shared pot;\npull out the custom that steals a childhood."',
    'The poem attacks **early and forced marriage**, a harmful practice that ends a girl’s education and childhood and violates her rights. **Contrast**: the school bag and the dream against the wedding cloth; the loud drums of celebration against the silent loss. **Irony** and wordplay on "counted": the bride price is carefully counted, but no one counts the cost of her lost schooling.',
    'The **metaphor** "Culture is a garden we must weed" gives the poem’s balanced view: culture is valuable and should be kept (songs, greetings, sharing), but harmful customs must be removed. **Themes**: the rights of the girl child; culture and change; the value of education. **Tone**: sorrowful and protesting.',
  ], 'li1-protest', 'A protest poem names the wrong, shows its cost and calls for change.',
  ['"Pull out the custom that steals a childhood" refers to:', ['early marriage', 'greeting elders', 'singing songs', 'sharing food'], 'The harmful practice in the poem.'],
  [['Early marriage', 'Marriage of a child under 18, a violation of children’s rights.'], ['Dowry (bride price)', 'Goods or money given at a marriage.']],
  [
    { q: 'Explain the metaphor "Culture is a garden we must weed".', steps: ['A garden has useful plants and harmful weeds.', 'Culture has **good customs** (songs, greetings, sharing) and **harmful ones** (early marriage).', 'Meaning: **keep the good and remove the harmful**; the poem does not reject culture, it reforms it.'] },
  ]),

  // ---------- 12. Oral performance ----------
  L('li-performance-3', 'li-f3-performance', '12.1', 'The elements of oral performance', 12, ['Oral literature'], [
    'Oral literature lives in **performance**: it exists fully only when a performer and an audience meet. Elements:\n- the **performer**: storyteller, singer or griot, whose skill and voice give life to the text\n- the **audience**, which **participates**: answering calls ("Story, story!" "Story!"), joining the **chorus** of songs, clapping, laughing, commenting and even correcting the teller\n- the **occasion and setting**: evenings by the fire or in the moonlight, funerals, weddings, festivals, the naming of a child\n- **voice and tone**: loud or soft, fast or slow, imitating animals and characters\n- **gesture**, **facial expression** and **movement**: hands that show size, a face that shows fear, a dance step\n- **songs**, **music** and **props** (a drum, a stick, a calabash, a fly whisk).',
    'Because each performance is different, oral texts are **flexible**: a teller may shorten, lengthen or adapt a tale to the audience and the occasion.',
  ], 'li3-performance', 'Without an audience, there is no oral performance.',
  ['A teller who changes voice to sound like Lion and then like Tortoise is using:', ['voice to characterise', 'a stage direction', 'a chapter', 'a rhyme scheme'], 'Voice brings characters alive.'],
  [['Performance', 'The live presentation of oral literature before an audience.'], ['Audience participation', 'The active involvement of listeners through responses, songs and comments.'], ['Griot', 'A professional West African oral historian, poet and musician.']],
  [
    { q: 'Describe three ways an audience takes part in a tale told at night.', steps: ['**Responding to the opening call**: "Story, story!" "Story!"', '**Singing the chorus** of the songs inside the tale.', '**Reacting**: laughing, exclaiming or commenting on the characters’ actions.'] },
  ]),

  L('li-performtale-3', 'li-f3-performance', '12.2', 'Planning and performing a tale', 12, ['Oral literature', 'Speaking'], [
    'Steps to perform a tale in class:\n1. **Choose** a tale you know well (for example the tale of Tortoise and the feast in the sky).\n2. **Plan** the opening formula, the order of events, one song with a chorus for the class, and the closing formula with the moral.\n3. **Prepare** voices for the characters, gestures for key actions and one or two simple props.\n4. **Rehearse** aloud; time yourself (about three to five minutes).\n5. **Perform**: look at the audience, invite responses, use pauses before surprises.\n6. **Reflect**: ask the audience what the moral was and what they enjoyed.',
    'Criteria for judging a performance: clear and audible voice; expression (tone, gesture, face); involvement of the audience; correct order of events; a clear moral; confidence and respect for the time.',
  ], 'li3-perform-steps', 'Pause before the surprise: silence builds suspense.',
  ['Which is a good way to involve the audience?', ['teach them a short chorus to sing', 'turn your back on them', 'whisper so no one hears', 'read from a phone without looking up'], 'Participation is central.'],
  [['Rehearsal', 'Practising a performance before presenting it.'], ['Chorus', 'A repeated part of a song sung by a group.']],
  [
    { q: 'Plan the opening and the song of a short tale performance.', steps: ['Opening: "**Story, story!**" (class: "**Story!**") "**Once upon a time, when animals could talk…**"', 'Song with a chorus: Tortoise sings "**I am All of You, I am All of You**", and the class answers "**Kwa-kwa, All of You!**"', 'Gesture: spread the arms like wings when Tortoise flies.'] },
  ]),

  // ---------- 13. From oral to written ----------
  L('li-oralwritten-3', 'li-f3-storytelling', '13.1', 'From oral storytelling to written prose', 12, ['Prose', 'Oral literature'], [
    'Written prose grew from oral storytelling, but the two work differently:\n- **teller and author**: an oral tale belongs to the community and changes each time; a written story has a named **author** and a **fixed text**\n- **listener and reader**: the oral audience is present and responds; the reader is alone with the page and imagines everything\n- **performance and description**: the teller uses voice, gesture and song; the writer uses **description**, **dialogue** and **narration** to create the same effects\n- **length and form**: tales are usually short and episodic; novels are long, with chapters, many characters and complex plots\n- **memory and print**: tales live in memory; books can be stored, copied and studied.',
    'Many African writers bring oral features into the novel: proverbs, songs, folktales told by characters, and a narrator who speaks like a storyteller.',
  ], 'li3-oral-written', 'What the voice does in a tale, description does in a novel.',
  ['In a written story, the storyteller’s gestures are replaced by:', ['description in words', 'nothing', 'pictures only', 'songs'], 'The page must show what the body showed.'],
  [['Author', 'The person who writes a book.'], ['Fixed text', 'A text that stays the same each time it is read.']],
  [
    { q: 'Rewrite this told moment as written prose: (the teller widens the eyes and whispers) "Then Lion came."', steps: ['Replace the gesture and whisper with **description**.', '"**The forest fell silent. Even the crickets stopped singing. Then, slowly, from between the dark trees, Lion appeared.**"', 'The silence and the slow movement create the **suspense** the teller’s whisper created.'] },
  ]),

  L('li-narrator-3', 'li-f3-storytelling', '13.2', 'The narrator and point of view', 12, ['Prose'], [
    'The **narrator** is the voice that tells the story. It is not always the author. The **point of view** is the position from which the story is told.\n- **First-person** narration uses **I**/**we**: the narrator is a character in the story. We share their feelings, but we only know what they know ("I ran to the well, but it was empty.").\n- **Third-person** narration uses **he**/**she**/**they**: the narrator is outside the story. An **omniscient** (all-knowing) narrator knows the thoughts of every character; a **limited** third-person narrator follows one character closely.',
    'This year’s novel, "The Well at Ndoko", uses **third-person limited** narration that follows **Akwen**: we see events through her eyes, but the narrator can describe her and the village from outside.',
  ], 'lit-point-of-view', 'Look at the pronouns: I and we, or he, she and they.',
  ['"I hid behind the door and held my breath" is told in the:', ['first person', 'third person', 'second person only', 'stage directions'], 'The narrator says "I".'],
  [['Narrator', 'The voice that tells the story.'], ['Point of view', 'The position from which a story is told.'], ['Omniscient narrator', 'A narrator who knows everything, including all characters’ thoughts.']],
  [
    { q: 'Change to first-person narration: "Akwen lifted the bucket. It was lighter than she had hoped, and her heart sank."', steps: ['Replace Akwen/she/her with I/my.', '"**I lifted the bucket. It was lighter than I had hoped, and my heart sank.**"', 'The reader now shares Akwen’s feelings **directly**.'] },
  ]),
];
