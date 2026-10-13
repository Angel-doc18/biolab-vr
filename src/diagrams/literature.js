// Literature in English figures for Forms 4 and 5: the elements of
// literature, genres, the parts of a play and a poem, the plot pyramid,
// narration, symbols and motifs, endings, sound devices, the essay, African
// themes, characterization, comparison, the GCE papers, stage conventions,
// tragedy, theme maps, poetic forms, context questions, metre, irony and the
// GCE year.
import { Circle, G, Line } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const ACCENT = '#8a3b5c';

// ---------- the plot pyramid ----------
function PlotPyramidArt() {
  const base = 160;
  const pts = [[20, base], [70, base], [170, 44], [270, 140], [320, base]];
  return (
    <G>
      <Line x1={20} y1={base} x2={320} y2={base} stroke={MUTED} strokeWidth={1} strokeDasharray="3 3" />
      {pts.slice(1).map(([x, y], i) => (
        <Line key={i} x1={pts[i][0]} y1={pts[i][1]} x2={x} y2={y} stroke={ACCENT} strokeWidth={2.4} />
      ))}
      <Circle cx={70} cy={base} r={4.5} fill={ACCENT} />
      <Circle cx={170} cy={44} r={5.5} fill={ACCENT} />
      <Txt x={170} y={30} size={10} weight="700" fill={O}>
        Climax: the turning point
      </Txt>
      <Txt x={100} y={104} size={9.5} anchor="end" fill={O}>
        Rising action
      </Txt>
      <Txt x={92} y={117} size={8.5} anchor="end" fill={MUTED}>
        tension builds
      </Txt>
      <Txt x={236} y={88} size={9.5} anchor="start" fill={O}>
        Falling action
      </Txt>
      <Txt x={244} y={101} size={8.5} anchor="start" fill={MUTED}>
        consequences
      </Txt>
      <Txt x={42} y={177} size={9.5} fill={O}>
        Exposition
      </Txt>
      <Txt x={112} y={192} size={9} fill={ACCENT} weight="700">
        Inciting incident
      </Txt>
      <Line x1={70} y1={165} x2={100} y2={182} stroke={ACCENT} strokeWidth={1} />
      <Txt x={292} y={177} size={9.5} fill={O}>
        Resolution
      </Txt>
      <Txt x={292} y={190} size={8.5} fill={MUTED}>
        (denouement)
      </Txt>
    </G>
  );
}

export const LITERATURE = {
  // ---------- Form 4 ----------
  'lit-elements': treeSpec('The elements of a literary work', 'A literary work', [
    { name: 'Plot', items: ['events linked', 'by cause', 'and effect'] },
    { name: 'Setting', items: ['place', 'time', 'social world'] },
    { name: 'Character', items: ['who acts', 'and is', 'acted upon'] },
    { name: 'Theme', items: ['a central idea', 'written as', 'a full sentence'] },
  ], { colW: 92 }),
  'lit-genres': columnsSpec('The three genres', [
    { head: 'Drama', items: ['written to be performed', 'dialogue', 'acts and scenes', 'stage directions'] },
    { head: 'Prose', items: ['sentences, paragraphs', 'a narrator', 'chapters', 'novel, short story'] },
    { head: 'Poetry', items: ['lines and stanzas', 'rhythm and sound', 'compressed imagery', 'sonnet, ballad, free verse'] },
  ], { colW: 120 }),
  'lit-play-parts': columnsSpec('How a play script is built', [
    { head: 'Cast list', items: ['dramatis personae', 'who appears', 'their relationships'] },
    { head: 'Acts, scenes', items: ['large divisions', 'smaller divisions', 'new place or time'] },
    { head: 'Dialogue', items: ['the spoken lines', 'speaker’s name', 'before each speech'] },
    { head: 'Stage directions', items: ['in italics or ( )', 'setting, movement', 'tone, sound, light'] },
  ], { colW: 92 }),
  'lit-plot-pyramid': {
    title: 'The plot pyramid',
    w: 340,
    h: 200,
    art: PlotPyramidArt,
    labels: [],
    facts: ['The exposition introduces the characters, setting and situation; the inciting incident starts the main conflict.', 'Tension builds through the rising action to the climax, the turning point.', 'The falling action shows the consequences, and the resolution (denouement) settles the outcome; in a tragedy it is the catastrophe.'],
  },
  'lit-poem-parts': columnsSpec('Reading a poem', [
    { head: 'Structure', items: ['lines, stanzas', 'enjambment', 'caesura', 'free or regular'] },
    { head: 'Voice', items: ['the speaker', '(persona)', 'to whom?', 'in what situation?'] },
    { head: 'Tone', items: ['the speaker’s', 'attitude', 'shown by diction', 'and imagery'] },
    { head: 'Imagery', items: ['sight, sound', 'smell, taste', 'touch, movement', 'figures of speech'] },
  ], { colW: 92 }),
  'lit-point-of-view': columnsSpec('Who tells the story?', [
    { head: 'First person', items: ['"I" tells it', 'close to feelings', 'knows only', 'what "I" knows', 'may be unreliable'] },
    { head: 'Third limited', items: ['"he", "she"', 'stays with', 'one character’s', 'thoughts'] },
    { head: 'Third omniscient', items: ['"he", "she", "they"', 'all-knowing', 'enters any mind', 'may comment'] },
  ], { colW: 120 }),
  'lit-motif-symbol': columnsSpec('Symbol, motif and subplot', [
    { head: 'Symbol', items: ['stands for', 'an idea', 'a locked cupboard', '= greed'] },
    { head: 'Motif', items: ['recurs through', 'the work', 'rain, darkness,', 'journeys'] },
    { head: 'Subplot', items: ['a second story', 'that mirrors,', 'contrasts or', 'relieves'] },
  ], { colW: 112 }),
  'lit-ending': columnsSpec('Kinds of ending', [
    { head: 'Closed', items: ['all settled'] },
    { head: 'Open', items: ['questions left'] },
    { head: 'Tragic', items: ['downfall, death'] },
    { head: 'Comic', items: ['reconciliation'] },
    { head: 'Circular', items: ['back to start'] },
  ], { colW: 74 }),
  'lit-sound-devices': columnsSpec('Sound devices', [
    { head: 'Device', items: ['rhyme', 'rhythm', 'alliteration', 'assonance', 'consonance', 'onomatopoeia'] },
    { head: 'Example', items: ['day / way', 'half a league, half a league', 'bright baskets bounce', 'the rain in Spain', 'pitter-patter', 'buzz, crack, splash'] },
  ], { colW: 158 }),
  'lit-essay-plan': flowSpec('The literary essay', ['Introduction:\ntitle, author, thesis', 'Body 1:\npoint, evidence,\nexplanation', 'Body 2 and 3:\nlinked by\ntransitions', 'Conclusion:\nfinal judgement'], { boxW: 112, boxH: 60, note: 'Plan for about five minutes before writing.' }),
  'lit-african-themes': treeSpec('Themes in African prose', 'Common themes', [
    { name: 'Tradition and\nmodernity', items: ['culture clash', 'change and loss', 'city and village'] },
    { name: 'Colonialism\nand after', items: ['foreign rule', 'independence', 'disillusionment'] },
    { name: 'Power and\nsociety', items: ['corruption', 'gender roles', 'poverty, wealth'] },
  ], { colW: 112 }),
  'lit-characterization': columnsSpec('How writers reveal character', [
    { head: 'Direct', items: ['the narrator', 'states the trait:', '"She was proud."'] },
    { head: 'Indirect (STEAL)', items: ['Speech', 'Thoughts', 'Effect on others', 'Actions', 'Looks'] },
  ], { colW: 150 }),
  'lit-compare': columnsSpec('Comparing two texts', [
    { head: 'Compare', items: ['theme', 'characters', 'setting', 'structure', 'narration', 'style, ending'] },
    { head: 'Likeness', items: ['both', 'similarly', 'likewise', 'in the same way'] },
    { head: 'Contrast', items: ['whereas', 'while', 'however', 'in contrast'] },
  ], { colW: 104 }),

  // ---------- Form 5 ----------
  'lit-gce-0535': columnsSpec('GCE Literature in English (0535)', [
    { head: 'Paper 1 (1½ h)', items: ['multiple choice', 'literary terms', 'scansion', 'authors, plot', 'context'] },
    { head: 'Paper 2 (2½ h)', items: ['essays', 'A: Drama', 'B: Prose', 'C: Poetry'] },
  ], { colW: 150 }),
  'lit-stage-conventions': columnsSpec('Shakespeare’s stage conventions', [
    { head: 'Language', items: ['blank verse', 'prose for servants', 'couplets end scenes'] },
    { head: 'Speech', items: ['soliloquy', 'aside', 'dialogue'] },
    { head: 'Structure', items: ['five acts', 'comic relief', 'the supernatural'] },
  ], { colW: 112 }),
  'lit-tragic-arc': flowSpec('The tragic arc', ['Tragic hero\nadmired, high status', 'Hamartia\nthe tragic flaw', 'Peripeteia\nreversal of fortune', 'Anagnorisis\nrecognition', 'Catastrophe\nthe final fall', 'Catharsis\npity and fear'], { perRow: 3, boxW: 116 }),
  'lit-theme-map': treeSpec('Mapping a theme: guilt in Macbeth', 'Theme: guilt', [
    { name: 'Characters', items: ['Macbeth', 'Lady Macbeth'] },
    { name: 'Key scenes', items: ['2.2 after the murder', '3.4 the banquet', '5.1 sleepwalking'] },
    { name: 'Quotations', items: ['"Macbeth does', 'murder sleep"', '"Out, damned spot!"'] },
  ], { colW: 116 }),
  'lit-poetic-forms': columnsSpec('Poetic forms', [
    { head: 'Fixed forms', items: ['sonnet: 14 lines', 'ballad: story, refrain', 'ode: formal praise', 'elegy: mourning'] },
    { head: 'Open forms', items: ['free verse', 'lyric: personal feeling', 'dramatic monologue'] },
    { head: 'African forms', items: ['praise poem', 'dirge', 'call-and-response', 'work song'] },
  ], { colW: 120 }),
  'lit-character-compare': columnsSpec('Comparing characters across texts', [
    { head: 'Ask of each', items: ['starting point', 'key choices', 'influences', 'consequences', 'end point'] },
    { head: 'Then judge', items: ['growth or decline?', 'what the contrast', 'reveals about', 'each writer’s view'] },
  ], { colW: 150 }),
  'lit-context-steps': flowSpec('Answering a context question', ['Speaker and\naddressee', 'Immediate\nsetting', 'Just before\nand just after', 'Meaning in\nyour own words', 'Language,\ntone, irony', 'Significance\nin the whole work'], { perRow: 3, boxW: 112 }),
  'lit-metre': columnsSpec('Metrical feet', [
    { head: 'Foot', items: ['iamb', 'trochee', 'anapaest', 'dactyl', 'spondee'] },
    { head: 'Stress', items: ['x /', '/ x', 'x x /', '/ x x', '/ /'] },
    { head: 'Example', items: ['be-LOW', 'TI-ger', 'un-der-STAND', 'MUR-mur-ing', 'HEART-BREAK'] },
  ], { colW: 104 }),
  'lit-irony-types': columnsSpec('Kinds of irony', [
    { head: 'Verbal', items: ['says the opposite', 'of what is meant', 'sarcasm', 'understatement'] },
    { head: 'Situational', items: ['the outcome', 'is the opposite', 'of what was', 'expected'] },
    { head: 'Dramatic', items: ['the audience', 'knows what', 'a character', 'does not'] },
  ], { colW: 112 }),
  'lit-mcq-steps': flowSpec('Paper 1: answering an item', ['Read the\nwhole stem', 'Predict the\nanswer', 'Watch for\nNOT, EXCEPT', 'Eliminate\nwrong options', 'Choose the\nmost precise'], { perRow: 3, boxW: 108 }),
  'lit-analysis-vs-plot': columnsSpec('Plot-telling or analysis?', [
    { head: 'Plot-telling', items: ['what happens', '"Then Macbeth', 'sees a dagger."', 'few marks'] },
    { head: 'Analysis', items: ['how and why', '"The dagger reveals', 'his guilty mind."', 'answers the question'] },
  ], { colW: 156, arrow: true }),
  'lit-final-term': flowSpec('The final term before the GCE', ['Paper 1\ndrills', 'Paper 2\nessay clinics', 'Mock\nexamination', 'Correction and\nremediation', 'The GCE\n(0535)'], { perRow: 3, boxW: 108 }),
};
