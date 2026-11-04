// Literature in English lessons for Form 1 (first file): introducing
// literature, oral tales, proverbs and songs, and poetry on family, success,
// faith, conflict, trade, poverty, nature, protest, patriotism and peace. Set
// books change with the national booklist, so each lesson teaches a method.
// Every poem and passage here was written for this app. **double asterisks**
// mark key terms; `examples` are worked examples.

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

export const LESSONS_1A = [
  // ---------- 1. Introducing literature ----------
  L('li-genres-1', 'li-f1-intro', '1.1', 'What literature is; oral and written literature; the three genres', 10, ['Genres'], [
    '**Literature** is the art of using words imaginatively to tell stories, express feelings and share ideas, so that readers and listeners enjoy and learn from them. It entertains, teaches values, keeps a people’s history and culture alive, and helps us understand ourselves and others.',
    '**Oral literature** is passed on by word of mouth: folktales, myths, legends, proverbs, riddles, songs and chants told around the fire or at ceremonies. **Written literature** is set down in books, magazines and online. Much African written literature grew out of the oral tradition.',
    'Literature has three main **genres**:\n- **prose**: writing in sentences and paragraphs that tells a story (short stories, novels, fables)\n- **drama**: writing meant to be acted on a stage, told through dialogue (plays)\n- **poetry**: writing in lines and stanzas that uses rhythm, sound and images to express feelings.',
  ], 'lit-genres', 'Ask of any text: is it told, acted or sung? That points to its genre.',
  ['A play written to be acted belongs to the genre of:', ['drama', 'prose', 'poetry', 'oral riddles'], 'Drama is performed.'],
  [['Literature', 'Imaginative writing or speech that tells stories, expresses feelings and shares ideas.'], ['Genre', 'A kind or category of literature, such as prose, drama or poetry.'], ['Oral literature', 'Literature passed on by word of mouth.']],
  [
    { q: 'Say which genre each belongs to: (a) a tortoise story told by a grandmother; (b) a novel; (c) a lullaby; (d) a play staged at the school festival.', steps: ['(a) an oral folktale → **prose** (oral prose)', '(b) a novel → **prose**', '(c) a lullaby → **poetry** (oral poetry)', '(d) a play → **drama**'] },
  ]),

  L('li-elements-1', 'li-f1-intro', '1.2', 'The elements of literature: setting, plot, character and theme', 12, ['Literary elements'], [
    'Every story, play or poem is built from a few **elements**:\n- **setting**: where and when the action happens (a village, a market, a school; the rainy season, long ago)\n- **plot**: the events in order, usually a beginning, a middle with a problem, and an end\n- **character**: the people, animals or spirits who act\n- **theme**: the main idea or lesson about life.',
    'Read this short passage written for this lesson: "Long ago, in a village at the foot of a great hill, lived a boy called Ndi who never listened to his mother. One evening she warned him not to climb the old mango tree. Ndi laughed and climbed it anyway. A branch broke, and he lay in bed for a month. When he could walk again, he listened."',
    'Setting: a village, long ago, in the evening. Characters: Ndi and his mother. Plot: the warning, the disobedience, the fall, the lesson. Theme: **children should listen to the advice of their parents.**',
  ], 'lit-elements', 'Setting answers "where and when?", plot "what happens?", theme "what does it teach?".',
  ['In the passage about Ndi, the theme is:', ['children should listen to their parents’ advice', 'mango trees are tall', 'the village is at the foot of a hill', 'Ndi lay in bed'], 'The theme is the lesson about life.'],
  [['Setting', 'The time and place of a story.'], ['Plot', 'The series of events in a story.'], ['Character', 'A person, animal or being who acts in a story.'], ['Theme', 'The main idea or lesson of a work.']],
  [
    { q: 'Identify the elements in: "During the dry season, greedy Hare stole the yams Tortoise had stored. The animals held a court under the baobab, found Hare guilty and banished him from the forest."', steps: ['Setting: the forest, under the baobab, in the dry season.', 'Characters: Hare, Tortoise and the animals.', 'Plot: Hare steals, the animals hold a court, Hare is banished.', 'Theme: **greed and theft are punished.**'] },
  ]),

  // ---------- 2. Oral tales ----------
  L('li-tales-1', 'li-f1-oral', '2.1', 'Kinds of oral tales', 12, ['Oral literature'], [
    'African oral prose includes many kinds of tales:\n- **folktales**: traditional stories of ordinary people, animals and spirits, told for pleasure and to teach\n- **myths**: stories that explain how the world, a people or a custom began, often with gods or spirits\n- **legends**: stories of heroes and great deeds of the past that may be partly true\n- **fables**: short tales in which animals act like people to teach a **moral**\n- **fairy tales**: magical stories with spirits, giants and wonders\n- **why stories**: humorous tales that explain a trait or natural fact (why the tortoise’s shell is cracked, why people die and do not return)\n- **noodle-head (numbskull) stories**: tales of fools whose greed, disobedience or folly ruins them.',
    'Oral tales are told by a **storyteller**, often with songs the audience joins, gestures, mime and changes of voice. Each storyteller may retell a tale differently, so tales change over time. They teach values such as obedience, honesty, generosity and courage, and warn against greed, pride and laziness.',
    'To **retell** a tale: introduce the setting and characters, tell the events in order, use dialogue and repetition, and end with the moral.',
  ], 'li1-oral-tales', 'A myth explains a beginning; a legend praises a hero; a fable teaches a moral.',
  ['A tale explaining why women do not grow beards is a:', ['why story', 'legend', 'praise song', 'biography'], 'Why stories explain traits.'],
  [['Folktale', 'A traditional story passed on orally.'], ['Myth', 'A story that explains an origin, often with gods or spirits.'], ['Legend', 'A story of a hero of the past that may be partly true.'], ['Fable', 'A short tale, often with animals, that teaches a moral.']],
  [
    { q: 'Classify: (a) a story of how the first king of a people crossed a river; (b) Tortoise tricks the birds and loses his feathers; (c) how the first man and woman came from a sacred lake.', steps: ['(a) a hero of the past → **legend**', '(b) animals teaching a lesson → **fable** (also a why story if it explains the cracked shell)', '(c) the origin of people → **myth**'] },
  ]),

  L('li-figures-1', 'li-f1-oral', '2.2', 'Figures of speech in tales', 12, ['Literary devices'], [
    '**Figures of speech** (literary devices) make language vivid:\n- **simile**: a comparison with "like" or "as": "The hunter ran like the wind."\n- **metaphor**: a direct comparison: "The chief is a lion."\n- **personification**: giving human qualities to things or animals: "The river sang all night."\n- **hyperbole**: deliberate exaggeration: "She cried a river of tears."\n- **alliteration**: repeating the first consonant sound: "big brown bush buck"\n- **irony**: the opposite of what is said or expected: the "wise" hare who is fooled by the tortoise\n- **humour**: what makes us laugh, often used to criticise gently.',
    'Storytellers use these devices to hold the audience’s attention, to make characters memorable and to make the moral strong. When you meet a device, name it, quote it and say what it shows.',
  ], 'li1-figures', 'Simile has "like" or "as"; metaphor does not.',
  ['"Tortoise’s mouth was a market, never quiet" uses a:', ['metaphor', 'simile', 'alliteration', 'irony'], 'A direct comparison without "like" or "as".'],
  [['Figure of speech', 'An expression that uses words in a special, non-literal way for effect.'], ['Simile', 'A comparison using "like" or "as".'], ['Metaphor', 'A direct comparison without "like" or "as".'], ['Hyperbole', 'Deliberate exaggeration.']],
  [
    { q: 'Name the device and say what it shows: (a) "The elephant’s footsteps shook the whole world." (b) "The moon smiled at the travellers." (c) "Sly Spider spun silky stories."', steps: ['(a) **hyperbole**: shows the elephant’s great size and power', '(b) **personification**: makes the night seem friendly and safe', '(c) **alliteration** of "s": makes the line musical and stresses Spider’s slyness'] },
  ]),

  // ---------- 3. Proverbs and songs ----------
  L('li-proverbs-1', 'li-f1-oral-poetry', '3.1', 'Proverbs, riddles, tongue twisters and tall tales', 12, ['Oral literature'], [
    'A **proverb** is a short traditional saying that carries wisdom: "One finger cannot pick up a grain" (unity is strength); "The child who washes his hands eats with elders" (good behaviour earns respect); "When two elephants fight, it is the grass that suffers" (the weak suffer in the quarrels of the powerful). Elders use proverbs to advise, warn and settle disputes. To **interpret** a proverb, say its literal meaning, then its lesson for life.',
    'A **riddle** is a puzzling question with a clever answer: "I have a house with no door. What am I?" (an egg). "My father’s cows are many but have only one herdsman." (the stars and the moon). Riddles train quick thinking and observation.',
    'A **tongue twister** repeats similar sounds to test speech: "Red lorry, yellow lorry." A **tall tale** tells impossible exaggerations for fun: a hunter so fast he caught his own shadow. **Superstitions** are beliefs not based on reason (for example that an owl’s cry brings bad news); literature records them as part of culture.',
  ], 'li1-proverbs-riddles', 'Interpret a proverb in two steps: the picture, then the lesson.',
  ['"When two elephants fight, it is the grass that suffers" means:', ['the weak suffer when the powerful quarrel', 'elephants eat grass', 'grass is strong', 'fighting is fun'], 'Literal picture, then the lesson.'],
  [['Proverb', 'A short traditional saying that expresses wisdom.'], ['Riddle', 'A puzzling question with a clever hidden answer.'], ['Superstition', 'A belief not based on reason or evidence.']],
  [
    { q: 'Interpret the proverb: "A single broom stick cannot sweep the compound."', steps: ['Literal meaning: one stick alone cannot sweep; many tied together can.', 'Lesson: **people achieve more when they work together; unity is strength.**'] },
  ]),

  L('li-songs-1', 'li-f1-oral-poetry', '3.2', 'Lullabies, dirges, praise songs and incantations', 12, ['Oral literature', 'Poetry'], [
    'Oral **poetry** is sung or chanted:\n- **lullaby**: a soft, repetitive song to calm a baby to sleep\n- **dirge**: a song of mourning at a funeral (a written one is an **elegy**)\n- **praise song (panegyric)**: praises a chief, hero, ancestor or family, often performed by a **praise singer** or **griot** (a storyteller, musician and keeper of history)\n- **work song**: sung by farmers, fishermen or builders to keep rhythm while working\n- **serenade**: a love song\n- **incantation** and **invocation**: words chanted to call on spirits or powers in rituals such as libation.',
    'Oral poetry relies on **sound and rhythm**: repetition, call and response (a leader sings a line, the group answers), refrains, drums and clapping. A lullaby written for this lesson:\n"Sleep, my little one, sleep,\nThe moon is round, the night is deep;\nMama is near, Papa is near,\nSleep, my little one, have no fear."',
    'Repetition ("sleep"), rhyme (sleep – deep, near – fear) and a gentle rhythm make the song soothing.',
  ], 'li1-oral-songs', 'Ask who sings it, when, and why: the purpose tells you the kind of song.',
  ['A song sung by a group of women pounding grain together is a:', ['work song', 'dirge', 'lullaby', 'incantation'], 'It keeps the rhythm of the work.'],
  [['Lullaby', 'A soft song to calm a baby to sleep.'], ['Dirge', 'A song of mourning.'], ['Panegyric', 'A poem or song of praise.'], ['Griot', 'A West African storyteller, musician and keeper of history.']],
  [
    { q: 'Why is call and response used in a work song?', steps: ['The leader sings a line and the group answers.', 'It **keeps everyone working to the same rhythm** and makes the work feel lighter.', 'It also **builds unity**, because everyone takes part.'] },
  ]),

  // ---------- 4. Family poems ----------
  L('li-poem-1', 'li-f1-family', '12.1', 'Reading a poem: title, lines, stanzas, rhyme and the speaker', 12, ['Poetry'], [
    'A **poem** is written in **lines** grouped into **stanzas**. It uses **rhythm** (a beat), often **rhyme** (words ending with the same sound) and **images** to express feelings and ideas in few words. The **speaker** (persona) is the voice in the poem; the **poet** is the writer. The **title** often gives the subject.',
    'How to read a poem:\n1. read the title and guess the subject\n2. read the poem twice, once aloud\n3. ask who is speaking, to whom, and about what\n4. note striking words, images and devices\n5. decide the mood (how it makes you feel) and the theme (what it teaches).',
    'The **rhyme scheme** is shown with letters: a poem whose lines end "night, sea, light, free" has the scheme **abab**.',
  ], 'lit-poem-parts', 'Always read a poem aloud at least once: you will hear its rhythm.',
  ['Lines ending "home, door, roam, floor" have the rhyme scheme:', ['abab', 'aabb', 'abba', 'abcd'], 'home and roam rhyme (a); door and floor rhyme (b).'],
  [['Stanza', 'A group of lines in a poem.'], ['Speaker', 'The voice that speaks in a poem.'], ['Rhyme scheme', 'The pattern of rhymes at the ends of lines, shown with letters.']],
  [
    { q: 'Find the rhyme scheme and the speaker: "I wake before the cock can crow, / I fetch the water, sweep the floor; / Wherever Mama’s footsteps go, / I follow her from door to door."', steps: ['crow (a), floor (b), go (a), door (b) → **abab**', 'The speaker is **a child** ("I") who helps and follows the mother.'] },
  ]),

  L('li-family-1', 'li-f1-family', '12.2', 'Poems about the family and a mother’s love; metaphor and allusion', 12, ['Poetry'], [
    'Poems about the **family** celebrate love, unity, care, prayer and the roles of parents, children and elders. Read this poem written for this lesson:\n"My mother is a shady tree,\nHer branches stretch to shelter me;\nWhen storms of hunger shake our home,\nHer arms become a mighty dome.\nLike Ruth, she never leaves our side,\nHer love is wide, her love is wide."',
    'Devices: **metaphor** ("My mother is a shady tree"; "her arms become a mighty dome") shows protection; "storms of hunger" is a metaphor for hard times; "Like Ruth" is a **simile** and a **biblical allusion** to Ruth, who stayed loyal to her family; the **repetition** "her love is wide" stresses the main feeling. The **mood** is warm and grateful; the **theme** is **a mother’s love protects the family in hard times.**',
    'Writing your own short poem about the family: choose one member, think of one picture (a metaphor) for that person, write two stanzas of four lines, and end with a line that sums up your feeling.',
  ], 'li1-poem-family', 'Explain a metaphor by saying what the two things have in common.',
  ['In "My mother is a shady tree", the mother is compared to a tree because both:', ['give shelter and protection', 'are tall and green', 'grow in forests', 'have roots and leaves'], 'Think of what a shady tree does.'],
  [['Allusion', 'A reference to a well-known story, person or text.'], ['Mood', 'The feeling a poem creates in the reader.'], ['Repetition', 'Saying a word or line again for emphasis.']],
  [
    { q: 'Explain the metaphor "storms of hunger shake our home".', steps: ['Hunger is compared to a storm.', 'Both are strong, frightening and threaten the home.', 'So the line shows **how hard times attack the family, as a storm attacks a house.**'] },
  ]),

  // ---------- 5. Success poems ----------
  L('li-rhetorical-1', 'li-f1-success', '13.1', 'Rhetorical questions and allusion', 10, ['Literary devices'], [
    'A **rhetorical question** is asked for effect, not for an answer. It makes readers think and agree: "Who reaps a harvest without sowing?" "Can a lazy child expect to pass?" The expected answer is obvious, so the question persuades.',
    'An **allusion** is a brief reference to a well-known person, place, event or text. **Biblical allusions** refer to the Bible ("as patient as Job", "a Good Samaritan"); **historical allusions** refer to history ("like the heroes of reunification"); others refer to famous stories or sayings. An allusion packs a whole story into a few words.',
  ], 'li1-allusion', 'If a question in a poem needs no answer, it is rhetorical: ask what it persuades you to believe.',
  ['"Who has climbed a palm tree by standing still?" is a rhetorical question suggesting that:', ['success needs effort', 'palm trees are tall', 'standing is good', 'climbing is dangerous'], 'The obvious answer is "no one".'],
  [['Rhetorical question', 'A question asked for effect, not for an answer.'], ['Biblical allusion', 'A reference to a person or story from the Bible.']],
  [
    { q: 'Explain the allusion: "He was a Good Samaritan to the injured stranger."', steps: ['It refers to the Bible story of the Samaritan who helped a wounded stranger others ignored.', 'So the man is **kind and helpful to a stranger in need**.'] },
  ]),

  L('li-success-1', 'li-f1-success', '13.2', 'Poems about growing up and the secret of success', 12, ['Poetry', 'Writing'], [
    'Poems about **growing up** describe the stages of life, the challenges of competition and the values that lead to success: hard work, endurance, discipline, prayer and humility. A poem written for this lesson:\n"The farmer does not sleep at dawn,\nHe greets the hoe before the sun;\nWho ever ate a yam unsown?\nThe race is won by those who run."',
    'Devices: "greets the hoe" is **personification** showing eagerness; "Who ever ate a yam unsown?" is a **rhetorical question** meaning nothing comes without effort; the last line is like a **proverb**. Theme: **success comes from early, steady hard work.**',
    'Writing a poem titled "The secret of success": decide your message, choose two or three images (the farmer, the climber, the student), use a rhetorical question and a repeated line, and arrange your ideas in stanzas. Then **recite** it with expression, pausing at the ends of lines.',
  ], 'li1-write-poem', 'One strong image is better than many weak ones.',
  ['"The race is won by those who run" suggests that:', ['success goes to those who make the effort', 'only athletes succeed', 'running is unhealthy', 'races are unfair'], 'A proverb-like line about effort.'],
  [['Recitation', 'Saying a poem aloud from memory with expression.'], ['Endurance', 'The ability to keep going through difficulty.']],
  [
    { q: 'Write two lines with a rhetorical question about hard work.', steps: ['Choose an image: a student and exams.', 'Line 1: "**The book unopened keeps its light;**"', 'Line 2 (rhetorical question): "**Who passes when they sleep all night?**"'] },
  ]),

  // ---------- 6. Faith poems ----------
  L('li-personification-1', 'li-f1-faith', '14.1', 'Personification', 10, ['Literary devices'], [
    '**Personification** gives human qualities, feelings or actions to animals, objects, places or ideas: "The wind wept over the graves." "Hope knocked at the door." "The old church watched the village grow."',
    'Effects: it makes descriptions vivid, helps readers feel the mood, and makes abstract ideas (death, hope, faith) easier to picture. Explain it by saying what human action is given and what it suggests: "The wind wept" suggests sadness and mourning.',
  ], 'li1-personification', 'Look for verbs that only people do: smile, weep, whisper, watch, call.',
  ['"Death crept into the house" gives death the human action of:', ['creeping quietly like a person', 'singing', 'shining', 'growing'], 'It makes death seem secret and frightening.'],
  [['Personification', 'Giving human qualities to non-human things or ideas.']],
  [
    { q: 'Identify and explain: "The church bell called the faithful to prayer."', steps: ['Human action given: **calling** people.', 'It suggests the bell is like a person **inviting** the community, making the scene warm and religious.'] },
  ]),

  L('li-faith-1', 'li-f1-faith', '14.2', 'Poems about mystery and faith; answering guided questions', 12, ['Poetry', 'Answering questions'], [
    'Religious poems express **wonder** at the mystery of God and creation, **faith**, prayer, humility and obedience. Literature also teaches **respect** for people of every religion. A poem written for this lesson:\n"Who hung the stars above the hill?\nWho tells the restless sea, be still?\nI do not know, yet I believe:\nThe hand that gives can also grieve."',
    'Guided questions on a poem usually ask: what the poem is about (subject); who is speaking; what a line means; which device is used and its effect; the mood or tone; and the lesson (theme). Answer in full sentences and support each answer with words from the poem in quotation marks.',
    'For the poem above: subject: the wonders of creation and belief in God; device: rhetorical questions and personification of the sea ("restless"); mood: wonder and calm faith.',
  ], 'li1-guided-questions', 'Quote briefly: a few words from the poem are enough evidence.',
  ['In "Who tells the restless sea, be still?", the sea is:', ['personified as restless', 'compared with "like"', 'exaggerated', 'not described'], 'Restless is a human feeling.'],
  [['Subject matter', 'What a poem is about.'], ['Guided questions', 'Questions that lead the reader through a poem step by step.']],
  [
    { q: 'Answer the guided question: "What is the speaker’s attitude to the mysteries of nature?"', steps: ['Point: the speaker is **humble and full of faith**.', 'Evidence: "I do not know, yet I believe".', 'Explanation: the speaker admits not understanding, but trusts God anyway.'] },
  ]),

  // ---------- 7. Conflict poems ----------
  L('li-tone-1', 'li-f1-conflict', '15.1', 'Tone and humour', 10, ['Literary devices'], [
    '**Tone** is the poet’s attitude to the subject, shown by word choice: angry, bitter, sad, tender, joyful, mocking (sarcastic), serious (solemn), humorous. **Mood** is the feeling created in the reader. A poem can have a humorous tone but a serious message.',
    '**Humour** makes us laugh through funny situations, exaggeration and witty words. Poets use it to criticise bad behaviour gently: laughing at a quarrelsome neighbour can make readers see their own faults.',
  ], 'li1-tone', 'To name the tone, list three strong words from the poem and ask what attitude they share.',
  ['A poem that laughs at a boastful man has a tone that is:', ['mocking and humorous', 'tender and sad', 'solemn and holy', 'frightened'], 'It mocks his boasting.'],
  [['Tone', 'The writer’s attitude to the subject.'], ['Humour', 'The quality that makes something funny.']],
  [
    { q: 'Name the tone: "Mr Big Mouth shouts all day, / His words like goats run every way; / He insults kings, he insults fowls, / Then hides indoors when thunder growls."', steps: ['Strong words: "Big Mouth", "like goats run every way", "hides indoors".', 'They make fun of a man who insults others but is a coward.', 'Tone: **mocking and humorous**, criticising loud, disrespectful people.'] },
  ]),

  L('li-conflict-1', 'li-f1-conflict', '15.2', 'Poems about conflict and resolving it', 12, ['Poetry', 'Literary elements'], [
    '**Conflict** is a struggle. **External** conflict is between a character and another person, society or nature; **internal** conflict happens in a character’s mind. Poems about life’s challenges show quarrels, insults, abuse, and even the confusion of falling in love, and how people overcome them.',
    '**Conflict resolution** means settling disputes peacefully: listening, apologising, forgiving, compromising and seeking the help of elders or mediators. Literature often contrasts the harm of fighting with the peace that follows reconciliation. A poem written for this lesson:\n"We threw our words like stones at noon,\nBy dusk we sat beneath one moon;\nMy sister’s hand found mine again,\nAnd laughter fell like gentle rain."',
    'The **similes** "like stones" (insults hurt) and "like gentle rain" (laughter refreshes) contrast conflict and peace.',
  ], 'li1-conflict-types', 'Name the two sides of a conflict and what they want.',
  ['A girl torn between telling the truth and protecting her friend faces:', ['internal conflict', 'conflict with nature', 'no conflict', 'conflict with society only'], 'The struggle is inside her mind.'],
  [['Conflict', 'A struggle between opposing forces.'], ['Internal conflict', 'A struggle within a character’s mind.'], ['Reconciliation', 'Becoming friends again after a quarrel.']],
  [
    { q: 'In the poem above, how is the conflict resolved?', steps: ['Conflict: the sisters quarrel ("threw our words like stones").', 'Resolution: at dusk they sit together and hold hands again.', 'The **image of laughter "like gentle rain"** shows that peace has returned.'] },
  ]),

  // ---------- 8. Trade poems ----------
  L('li-contrast-1', 'li-f1-trade', '16.1', 'Contrast', 10, ['Literary devices'], [
    '**Contrast** places opposite ideas, images or characters side by side to make each stand out: rich and poor, heavy and light, the best and the worst teacher, the hard-working hawker and the idle youth.',
    'Effects: contrast sharpens the message, shows conflict and helps the reader judge. When you find a contrast, name the two opposites and say what the poet wants us to see.',
  ], 'li1-contrast', 'Look for opposite pairs of words: they often carry the poem’s message.',
  ['"Her basket is heavy, her purse is light" contrasts:', ['the hard work of trade with its small reward', 'two baskets', 'two colours', 'morning and night'], 'Heavy and light are opposites.'],
  [['Contrast', 'Putting opposite things side by side for effect.']],
  [
    { q: 'Explain the contrast: "The idle boy sleeps in the shade; / The hawker’s feet are never stayed."', steps: ['Opposites: the **idle** boy who **sleeps** and the **hawker** who never **stops**.', 'The contrast **praises the hawker’s hard work and criticises idleness**.'] },
  ]),

  L('li-trade-1', 'li-f1-trade', '16.2', 'Poems about work, trade and business', 12, ['Poetry'], [
    'Poems about **trade** describe hawkers, market women, small shopkeepers and young people choosing their futures. They show the values of hard work, independence, **self-employment** and **entrepreneurship**, and sometimes the hardships: heat, dust, cheating customers and small profits. A poem written for this lesson:\n"Groundnuts, groundnuts! hot and sweet!\nShe sings her song from street to street;\nThe sun is hot, the road is long,\nBut school fees ride upon her song."',
    'Devices: the opening cry imitates a real hawker (**local colour**); **repetition** of "groundnuts"; a **contrast** between the hardship ("the sun is hot, the road is long") and the purpose; the **metaphor** "school fees ride upon her song" shows that her selling pays for education. Theme: **small trade, done with courage, builds a family’s future.**',
  ], 'li1-contrast', 'Ask what the worker’s effort is for: that is often the theme.',
  ['"School fees ride upon her song" means that:', ['her selling pays for school', 'school fees can sing', 'she rides a bicycle', 'school is free'], 'A metaphor linking her work to education.'],
  [['Self-employment', 'Working for oneself rather than for an employer.'], ['Entrepreneurship', 'Starting and running a business and taking its risks.']],
  [
    { q: 'What does the poem show about the hawker?', steps: ['Point: she is **hard-working and determined**.', 'Evidence: "The sun is hot, the road is long, / But school fees ride upon her song."', 'Explanation: despite heat and distance, she keeps selling to pay for school.'] },
  ]),

  // ---------- 9. Poverty poems ----------
  L('li-irony-1', 'li-f1-poverty', '17.1', 'Irony', 10, ['Literary devices'], [
    '**Irony** is a contrast between what is said or expected and what really is:\n- **verbal irony**: saying the opposite of what you mean ("What a clever plan!" about a foolish one)\n- **situational irony**: the opposite of what we expect happens (the farmer who feeds the town goes hungry)\n- **dramatic irony**: the audience knows something a character does not.',
    'Irony makes readers think and often criticises injustice: it shows that the world is not as it should be.',
  ], 'lit-irony-types', 'Ask: is this the opposite of what we would expect? If yes, it is probably irony.',
  ['A fire station that burns down is an example of:', ['situational irony', 'simile', 'personification', 'alliteration'], 'The opposite of what is expected.'],
  [['Irony', 'A contrast between what is said or expected and what actually is.'], ['Situational irony', 'When the opposite of what is expected happens.']],
  [
    { q: 'Explain the irony: "The farmer fills the city’s bowls, / And brings home empty calabash holes."', steps: ['Expected: the one who grows food should have food.', 'Reality: the farmer feeds the city but goes home with nothing.', 'This **situational irony** criticises the **injustice that leaves farmers poor**.'] },
  ]),

  L('li-poverty-1', 'li-f1-poverty', '17.2', 'Poems about poverty and farming; summarising a poem', 12, ['Poetry', 'Writing'], [
    'Poems about **poverty** show suffering, survival and the struggle to make a living, and often call for solutions: hard work, farming, sharing and fair treatment. Poems about **agriculture** praise farming as noble work that feeds the nation.',
    'A poem written for this lesson:\n"Our roof lets in the evening rain,\nOur pot is cold, our stomachs plain;\nYet Papa’s cutlass meets the morn,\nAnd in the valley grows our corn."\nSummary: **a poor family suffers from a leaking roof and hunger, but the father’s hard work on the farm brings hope.**',
    'How to **summarise** a poem: read it carefully; find the subject, what happens or is described, and the change or message; then write two or three sentences in your own words, without quoting the whole poem and without adding ideas that are not there.',
  ], 'li1-summary-poem', 'A summary of a poem tells what it is about and what it means, in your own words.',
  ['Which is the best summary of "Our roof lets in the evening rain…"?', ['A poor family suffers, but the father’s farm work brings hope.', 'It rains in the evening.', 'Papa has a cutlass.', 'Corn is yellow.'], 'It covers the whole poem briefly.'],
  [['Summary', 'A short account of the main ideas in your own words.'], ['Poverty alleviation', 'Reducing poverty.']],
  [
    { q: 'Summarise in one sentence: "The market women rise at three, / They carry yams to Kumba’s quay; / By noon their backs are bent like reeds, / By night they count the coins for needs."', steps: ['Subject: market women.', 'What happens: they work from early morning, carry heavy loads and earn little.', 'Summary: **market women work long and hard for a small income to meet their needs.**'] },
  ]),

  // ---------- 10. Nature poems ----------
  L('li-imagery-1', 'li-f1-nature', '18.1', 'Imagery: pictures in words', 10, ['Literary devices'], [
    '**Imagery** is language that creates pictures in the mind and appeals to the **senses**:\n- sight: "the golden sunset over the lake"\n- sound: "the thunder roared", "crickets chirping"\n- smell: "the smell of roasting corn"\n- taste: "the bitter kola"\n- touch: "the rough bark", "the cold river".',
    'Imagery helps readers experience a scene and feel its mood. When you comment on an image, name the sense it appeals to and say what feeling or idea it creates.',
  ], 'li1-imagery', 'Underline adjectives and verbs: they usually carry the images.',
  ['"The cold, wet clay between my toes" appeals mainly to:', ['touch', 'sight', 'smell', 'hearing'], 'Cold and wet are felt.'],
  [['Imagery', 'Language that creates pictures and appeals to the senses.']],
  [
    { q: 'Identify the senses: "The forest hums with bees at noon, / The guava’s scent, the river’s tune."', steps: ['"hums with bees" → **sound**', '"the guava’s scent" → **smell**', '"the river’s tune" → **sound**', 'Together they create a **peaceful, living forest**.'] },
  ]),

  L('li-nature-1', 'li-f1-nature', '18.2', 'Poems about nature and the dangers of drugs', 12, ['Poetry'], [
    'Nature poems celebrate the **beauty** of forests, rivers, mountains and animals, and call for their **protection** and **preservation** against bush fires, deforestation and pollution. They often use personification ("the forest breathes") and imagery of colour and sound.',
    'Other poems warn young people against **drugs**, alcohol and **juvenile delinquency** (crime by young people), showing their effects: broken health, lost education, violence and prison. A poem written for this lesson:\n"He bought the smoke to feel a king,\nIt sold his voice, it sold his wing;\nNow in the dark his mother cries\nFor all the stars that left his eyes."',
    'The **irony** (buying smoke to feel powerful, but losing everything) and the **metaphors** ("sold his wing", "stars that left his eyes") show how drugs steal a young person’s freedom and dreams. The tone is **sad and warning**.',
  ], 'li1-imagery', 'Ask what the poet wants young readers to do after reading.',
  ['"The stars that left his eyes" suggests he has lost his:', ['hopes and brightness', 'eyesight only', 'money', 'friends'], 'A metaphor for dreams and joy.'],
  [['Juvenile delinquency', 'Crime or bad behaviour by young people.'], ['Preservation', 'Keeping something safe from harm or destruction.']],
  [
    { q: 'What is the message of the drugs poem above?', steps: ['The young man takes drugs to feel powerful.', 'Instead, drugs take away his voice, freedom and hopes, and his mother suffers.', 'Message: **drugs destroy young people’s lives; avoid them.**'] },
  ]),

  // ---------- 11. Protest poems ----------
  L('li-message-1', 'li-f1-protest', '19.1', 'The poet’s message and point of view', 10, ['Poetry', 'Literary elements'], [
    'The **message** is what the poet wants readers to understand, feel or do. The **point of view** is the position from which the poem is spoken:\n- **first person**: the speaker says "I" or "we" and shares personal experience\n- **third person**: the speaker describes others ("he", "she", "they") from outside.',
    'To find the poet’s attitude, look at word choice: words like "cruel", "shame" and "wicked" show disapproval; "brave", "pure" and "proud" show approval. A protest poem often speaks for a victim who cannot speak.',
  ], 'lit-point-of-view', 'Words of praise or blame reveal the poet’s side.',
  ['"I am the girl they tried to hide" is spoken from the:', ['first-person point of view', 'third-person point of view', 'narrator outside the poem', 'audience'], '"I" shows first person.'],
  [['Message', 'What the writer wants readers to understand or do.'], ['Point of view', 'The position from which a story or poem is told.']],
  [
    { q: 'What is the point of view and the poet’s attitude in: "They burned the forest for a field, / And left the hills no shade, no shield"?', steps: ['"They" describes others → **third person**.', 'Word choice: "burned", "no shade, no shield" shows loss.', 'The poet **disapproves of destroying the forest**.'] },
  ]),

  L('li-protest-1', 'li-f1-protest', '19.2', 'Poems that protest against abuse and pollution', 12, ['Poetry'], [
    '**Protest poems** speak out against injustice: harmful cultural practices (breast ironing, forced marriage, cruel widowhood rites), **human rights abuses** (torture, cruelty), and the neglect of the environment that brings **pollution** and diseases such as **cholera**. Some describe **civil disobedience**, peaceful refusal to obey unjust rules.',
    'A poem written for this lesson, in a girl’s voice:\n"Do not press my growing chest\nWith stones made hot by fear;\nMy body is not yours to test,\nMy future must be clear."\nThe **first-person** voice gives the victim a voice; the **imperative** "Do not press" is a strong protest; the theme is **a girl’s body and future must be respected.**',
    'Another poem might describe streets choked with rubbish where cholera spreads, calling for **hygiene**, care and responsible waste disposal.',
  ], 'li1-protest', 'In a protest poem, find who is wronged, who does wrong, and what the poet demands.',
  ['The line "My body is not yours to test" shows that the speaker:', ['demands respect for her body', 'enjoys the practice', 'agrees with the abusers', 'is a doctor'], 'It is a protest.'],
  [['Protest poem', 'A poem that speaks out against injustice.'], ['Human rights abuse', 'Treatment that violates a person’s basic rights.']],
  [
    { q: 'What does the poet demand in "Do not press my growing chest…"?', steps: ['Who is wronged: a young girl.', 'What is done: breast ironing with hot stones.', 'Demand: **that this harmful practice stop and that her body and future be respected.**'] },
  ]),

  // ---------- 12. Patriotic poems ----------
  L('li-patriotic-1', 'li-f1-patriotism', '20.1', 'Patriotic poems and historical allusion', 10, ['Poetry', 'Literary devices'], [
    '**Patriotic poems** express love for one’s country, its land, people, flag and history, and call citizens to unity, hard work and sacrifice. Cameroon’s motto, "**Peace – Work – Fatherland**", and its national colours (green, red and yellow) often appear in such poems.',
    'A **historical allusion** refers to a real event or person from history, such as independence, reunification or national heroes, and reminds readers of shared memories. Poems on **belonging** and **girl-child education** also express vision for the nation: "Educate a girl, and you build a nation."',
  ], 'li1-allusion', 'In patriotic poems, look for the land, the people, the flag and the call to action.',
  ['Cameroon’s national motto is:', ['Peace, Work, Fatherland', 'Unity, Freedom, Justice', 'One People, One Goal', 'God, Nation, Family'], '"Paix, Travail, Patrie".'],
  [['Patriotism', 'Love for and loyalty to one’s country.'], ['Historical allusion', 'A reference to a real historical event or person.']],
  [
    { q: 'Explain the line: "Our flag is green like Kribi’s hills, / And red with blood that freedom spills."', steps: ['"green like Kribi’s hills" is a **simile** linking the flag to the beauty of the land.', '"red with blood that freedom spills" is a **historical allusion** to the sacrifices made for independence.', 'The lines express **pride and gratitude to those who fought for the country**.'] },
  ]),

  L('li-celebrate-1', 'li-f1-patriotism', '20.2', 'Writing a poem that celebrates your country or village', 12, ['Writing', 'Poetry'], [
    'Steps to write a celebration poem:\n1. choose the subject: your country, village, school or a leader you admire\n2. list images: hills, rivers, markets, festivals, foods, people at work\n3. choose one or two devices: a simile, a metaphor, a repeated line\n4. write two or three stanzas of four lines; rhyme is optional\n5. end with a line of hope, pride or a call to action.',
    'A model written for this lesson:\n"My village sleeps between two streams,\nIts drums awake the farmers’ dreams;\nIts kola shared, its elders wise,\nMy village wears the morning skies."\nIt uses **personification** ("sleeps", "wears"), **local colour** (drums, kola, elders) and **rhyme** (streams – dreams, wise – skies).',
  ], 'li1-write-poem', 'Write about what you know: real details make a poem come alive.',
  ['"My village wears the morning skies" is an example of:', ['personification', 'simile', 'rhetorical question', 'oxymoron'], 'The village is given a human action.'],
  [['Local colour', 'Details of the customs, places and speech of a particular region.']],
  [
    { q: 'Write a closing line of hope for a poem about Cameroon.', steps: ['Choose a strong image: the rising sun.', 'Add a call to unity.', 'Model: "**One land, one sun, we rise as one.**"'] },
  ]),

  // ---------- 13. Peace poems ----------
  L('li-theme-1', 'li-f1-peace', '21.1', 'Theme and moral', 10, ['Literary elements'], [
    'The **theme** is the central idea a work explores, written as a full statement about life: "Corruption destroys trust in a community." The **moral** is a lesson about right behaviour: "Do not take bribes." Fables and folktales state morals clearly; poems and plays usually leave the reader to find the theme.',
    'To find the theme: ask what the work is about (topic: corruption), then what it says about it (idea: corruption brings suffering to the poor), and write that as one sentence.',
  ], 'li1-theme-moral', 'Topic in one word; theme in one sentence; moral as advice.',
  ['Which is a theme statement?', ['Greed can destroy friendship.', 'Greed', 'Do not be greedy!', 'The story has two friends.'], 'A full idea about life.'],
  [['Theme', 'The central idea about life in a work.'], ['Moral', 'A lesson about right behaviour.']],
  [
    { q: 'Give the topic, theme and moral of a poem about a corrupt official whose village road is never built.', steps: ['Topic: **corruption**.', 'Theme: **corruption robs communities of development.**', 'Moral: **leaders should be honest and serve the people.**'] },
  ]),

  L('li-peace-1', 'li-f1-peace', '21.2', 'Poems about corruption, suffering and peace', 12, ['Poetry'], [
    'Many poems criticise **corruption** (bribery, embezzlement, favouritism), **inequality** and the **suffering** of the poor, and praise **peace**, honesty (**probity**) and living together. A poem written for this lesson:\n"The money for the bridge went where?\nInto a car, a house, a chair;\nThe children wade the river still;\nCan honour drown? It surely will."',
    'Devices: **rhetorical questions** ("went where?", "Can honour drown?") accuse the corrupt official; the **list** "a car, a house, a chair" shows the stolen money’s waste; the **contrast** between the official’s comfort and the children wading the river creates **pathos**. Theme: **corruption makes the innocent suffer.**',
  ], 'lit-theme-map', 'A list in a poem often shows excess or waste.',
  ['In the poem, the children "wade the river still" because:', ['the bridge money was stolen', 'they like swimming', 'the river is dry', 'it is a holiday'], 'Corruption has a victim.'],
  [['Corruption', 'Dishonest use of power for personal gain.'], ['Probity', 'Complete honesty and integrity.'], ['Pathos', 'The quality that makes readers feel pity.']],
  [
    { q: 'How does the poet show disapproval of the official?', steps: ['Point: the poet **accuses** the official.', 'Evidence: the rhetorical question "The money for the bridge went where?"', 'Explanation: the question exposes theft and invites readers to condemn it, while the image of children wading shows the cost.'] },
  ]),
];
