// Literature in English figures for Form 3: the functions of literature,
// simile and metaphor, myths and legends, using proverbs, the year's poems,
// oral performance, oral and written narrative, plot devices, setting,
// protagonist and antagonist, finding themes, the novel "The Well at Ndoko",
// kinds of speech in drama, stage directions, the play "The Boundary Stone"
// and a map of the year. All texts are written for this app.
import { columnsSpec, flowSpec, treeSpec } from './charts';

export const LITERATURE_F3 = {
  'li3-functions': treeSpec('The functions of literature', 'Literature', [
    { name: 'Entertain', items: ['stories', 'songs', 'humour'] },
    { name: 'Educate', items: ['morals', 'values', 'warnings'] },
    { name: 'Preserve', items: ['culture', 'history', 'memory'] },
    { name: 'Criticise', items: ['corruption', 'injustice', 'bad customs'] },
    { name: 'Express', items: ['love, grief', 'joy, anger'] },
  ], { colW: 84 }),
  'li3-simile-metaphor': columnsSpec('Simile or metaphor?', [
    { head: 'Simile\n(like, as)', items: ['Her voice was like honey.', 'as fast as an antelope', 'dust like grey flour'] },
    { head: 'Metaphor\n(is, was)', items: ['Her voice was honey.', 'The market is a beehive.', 'The bus was an oven.'] },
  ], { colW: 156 }),
  'li3-myth-legend': columnsSpec('Folktale, myth or legend?', [
    { head: 'Folktale', items: ['animal characters', 'a trickster', 'a moral', 'entertains, teaches'] },
    { head: 'Myth', items: ['gods and spirits', 'origins of things', 'sacred beliefs', 'why the sky is far'] },
    { head: 'Legend', items: ['heroes, founders', 'a historical core', 'exaggerated', 'Nchare Yen'] },
  ], { colW: 116 }),
  'li3-proverb-use': flowSpec('Explaining a proverb', ['Read the\nimage', 'Find the\nlesson behind it', 'Say when\nit applies', 'Say what it shows\nabout the speaker'], { boxW: 112, perRow: 2 }),
  'li3-poem-house': columnsSpec('"My Name Is a House"', [
    { head: 'Words in the poem', items: ['a house my grandmother built', 'I stand in the doorway', 'taller than the iroko', 'like water on my head', 'like David before the giant'] },
    { head: 'Device and idea', items: ['metaphor: identity', 'image: self-respect', 'hyperbole: ambition', 'simile: care', 'allusion: courage'] },
  ], { colW: 160, arrow: true }),
  'li3-poem-stumble': flowSpec('The movement of "If I Stumble"', ['The fall:\n"stony road"', 'The pressure:\ndoctor or lawyer', 'The lesson:\nteachers with\nhard hands', 'The rise:\nwiser by one fall'], { boxW: 112, perRow: 2 }),
  'li3-poem-coin': columnsSpec('Contrast in "The Coin Speaks"', [
    { head: 'Greedy hands', items: ['the silent judge', 'the absent nurse', 'the road never built', 'a thief with a smile'] },
    { head: 'Honest hands', items: ['bread', 'school fees', 'a family fed', 'probity'] },
  ], { colW: 150 }),
  'li3-poem-river': columnsSpec('Problems in "The River Asks"', [
    { head: 'Line', items: ['plastic bottles', 'poison in my mouth', 'gone to the sawmill', 'the sun drinks me', 'the sand is marching'] },
    { head: 'Problem', items: ['plastic pollution', 'industrial pollution', 'deforestation', 'drought, warming', 'desertification'] },
  ], { colW: 150, arrow: true }),
  'li3-poem-home': treeSpec('"Home": unity in diversity', 'One mat with many colours', [
    { name: 'Places', items: ['Limbe', 'Kousseri', 'Ndu', 'the East'] },
    { name: 'Promise', items: ['no tribalism', 'work', 'vote'] },
    { name: 'Feeling', items: ['a mother’s song', 'love for country'] },
  ], { colW: 112 }),
  'li3-poem-drum': columnsSpec('"The Drum and the Phone"', [
    { head: 'The drum', items: ['seven hills', 'knows every name', 'tradition', 'identity'] },
    { head: 'The phone', items: ['seven seas', 'knows strangers', 'technology', 'weak village signal'] },
  ], { colW: 150 }),
  'li3-performance': treeSpec('The elements of oral performance', 'Performance', [
    { name: 'Performer', items: ['voice, tone', 'gesture', 'face, movement'] },
    { name: 'Audience', items: ['responses', 'chorus', 'clapping'] },
    { name: 'Occasion', items: ['fireside', 'funerals', 'festivals'] },
    { name: 'Extras', items: ['songs', 'drums', 'props'] },
  ], { colW: 96 }),
  'li3-perform-steps': flowSpec('Performing a tale', ['Choose a tale\nyou know', 'Plan opening,\nsong, moral', 'Prepare voices\nand gestures', 'Rehearse:\n3 to 5 minutes', 'Perform and\ninvolve the class', 'Reflect on\nthe moral'], { boxW: 108 }),
  'li3-oral-written': columnsSpec('Oral tale and written story', [
    { head: 'Oral tale', items: ['the community', 'changes each time', 'an audience present', 'voice, gesture, song', 'kept in memory'] },
    { head: 'Written story', items: ['a named author', 'a fixed text', 'a reader alone', 'description, dialogue', 'kept in print'] },
  ], { colW: 150, arrow: true }),
  'li3-plot-devices': columnsSpec('Handling time and tension', [
    { head: 'Suspense', items: ['danger, mystery', 'short sentences', 'cliffhangers'] },
    { head: 'Foreshadowing', items: ['a hint of', 'what will come', 'tyre marks, ch. 1'] },
    { head: 'Flashback', items: ['a scene from', 'the past', 'a memory'] },
  ], { colW: 116 }),
  'li3-setting': treeSpec('Setting', 'When, where and among whom', [
    { name: 'Temporal\n(time)', items: ['era', 'season', 'time of day'] },
    { name: 'Spatial\n(place)', items: ['village, town', 'well, market', 'office'] },
    { name: 'Social', items: ['customs', 'beliefs', 'problems'] },
  ], { colW: 112 }),
  'li3-protagonist': columnsSpec('Kinds of character', [
    { head: 'By role', items: ['protagonist', 'antagonist', 'main, minor', 'foil'] },
    { head: 'By depth', items: ['round: many sides', 'flat: one trait'] },
    { head: 'By change', items: ['dynamic: changes', 'static: stays'] },
  ], { colW: 120 }),
  'li3-theme-find': flowSpec('Finding a theme', ['Read the\ntitle', 'Study the\nmain conflict', 'See what\nchanges', 'Note repeated\nideas', 'Look at the\nending', 'State the idea\nas a sentence'], { boxW: 106 }),
  'li3-ndoko-characters': treeSpec('"The Well at Ndoko": characters', 'Ndoko village', [
    { name: 'Akwen’s family', items: ['Akwen (15)', 'Tita (13)', 'Pa Fonkem', 'Ma Sirri'] },
    { name: 'Opponent', items: ['Mr Ekwe,', 'water seller'] },
    { name: 'Leaders', items: ['Chief Mbaku', 'Mr Tanyi', 'Madam Ayamba'] },
  ], { colW: 112 }),
  'li3-ndoko-plot1': columnsSpec('Chapters 1 to 4: the exposition', [
    { head: 'What happens, chapter by chapter', items: ['Chapter 1: the well is low; tyre marks', 'Chapter 2: the well dries; Ekwe’s tanker', 'Chapter 3: the club asks for a borehole', 'Chapter 4: the meeting; Ekwe’s gifts'] },
  ], { colW: 250 }),
  'li3-ndoko-plot2': columnsSpec('Chapters 5 to 8: rising action and climax', [
    { head: 'What happens, chapter by chapter', items: ['Chapter 5: the petition; Tita tempted', 'Chapter 6: children sick; typhoid', 'Chapter 7: money paid, no work done', 'Chapter 8 (climax): the signboard'] },
  ], { colW: 250 }),
  'li3-ndoko-plot3': columnsSpec('Chapters 9 to 12: the resolution', [
    { head: 'What happens, chapter by chapter', items: ['Chapter 9: Ekwe must refund and build', 'Chapter 10: community work; tanker free', 'Chapter 11: Pa Fonkem well; Tita confesses', 'Chapter 12: the borehole opens with rain'] },
  ], { colW: 250 }),
  'li3-ndoko-themes': treeSpec('Themes of "The Well at Ndoko"', 'Water belongs to everyone', [
    { name: 'Civic duty', items: ['the petition', 'the meeting'] },
    { name: 'Greed', items: ['the tanker', 'the bribes'] },
    { name: 'Community', items: ['shared work', 'the borehole'] },
    { name: 'Forgiveness', items: ['Tita', 'Mr Ekwe'] },
  ], { colW: 96 }),
  'li3-speech-types': columnsSpec('Who hears the speech?', [
    { head: 'Dialogue', items: ['two or more', 'characters talk'] },
    { head: 'Monologue', items: ['one speaks', 'to others'] },
    { head: 'Soliloquy', items: ['one speaks', 'alone on stage'] },
    { head: 'Aside', items: ['to the audience;', 'others do not hear'] },
  ], { colW: 92 }),
  'li3-stage-directions': columnsSpec('What stage directions tell us', [
    { head: 'Setting', items: ['(A hillside farm', 'at dawn.)'] },
    { head: 'Movement', items: ['(Enter PA NDOH.)', '(Exit TANJONG.)'] },
    { head: 'Tone', items: ['(angrily)', '(whispering)'] },
    { head: 'Effects', items: ['(Drums.)', '(Lights fade.)'] },
  ], { colW: 92 }),
  'li3-boundary-cast': treeSpec('"The Boundary Stone": cast', 'A hillside village', [
    { name: 'The Ndoh family', items: ['Pa Ndoh', 'Ma Ndoh', 'Ewube (14)'] },
    { name: 'The Ebot family', items: ['Pa Ebot', 'Tanjong (14)'] },
    { name: 'Others', items: ['Elder Mafor', 'Foreman Baiye', 'Constable Atem'] },
  ], { colW: 112 }),
  'li3-boundary-plot': flowSpec('The plot of "The Boundary Stone"', ['Act One:\nthe stone has moved;\nthe quarrel', 'Act Two:\nrumours, the goats,\nthe constable', 'Act Three:\nthe meeting and\nthe confession', 'The end:\nthe stone back,\nthe peace plant'], { boxW: 118, perRow: 2 }),
  'li3-irony-stone': columnsSpec('Dramatic irony in Act Two', [
    { head: 'The families think', items: ['the neighbour', 'moved the stone', 'by night'] },
    { head: 'The audience knows', items: ['road workers moved it', 'for a culvert', 'and forgot'] },
  ], { colW: 150 }),
  'li3-language-style': columnsSpec('Language style in the play', [
    { head: 'Device', items: ['proverbs', 'hyperbole', 'comic relief', 'dramatic irony', 'soliloquy'] },
    { head: 'Example', items: ['two elephants fight', 'swallowed in one night', 'Foreman Baiye', 'the road workers', 'Tanjong at night'] },
  ], { colW: 150, arrow: true }),
  'li3-mediation': flowSpec('How the quarrel is settled', ['The elders’\nmeeting', 'Shouting:\nthe raised stick', 'The children bring\nForeman Baiye', 'The truth:\nthe road workers', 'Apologies and\nthe peace plant'], { boxW: 112 }),
  'li3-boundary-themes': treeSpec('Themes of "The Boundary Stone"', 'Never divide hearts', [
    { name: 'Resolution', items: ['dialogue', 'mediation'] },
    { name: 'Causes', items: ['pride', 'rumours'] },
    { name: 'The young', items: ['friendship', 'wisdom'] },
    { name: 'Tradition', items: ['elders’ council', 'peace plant'] },
  ], { colW: 96 }),
  'li3-year-map': columnsSpec('Form 3 Literature: the year', [
    { head: 'Term 1', items: ['literature, genres', 'figures of speech', 'tales, myths, legends', 'riddles, proverbs', 'twelve poems'] },
    { head: 'Term 2', items: ['oral performance', 'narrator', 'plot, setting', 'characters, themes', 'the novel'] },
    { head: 'Term 3', items: ['drama terms', 'acts, scenes', 'stage directions', 'the play', 'revision'] },
  ], { colW: 122 }),
};
