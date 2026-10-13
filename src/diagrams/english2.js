// English Language figures for Form 5: relative clauses, a past perfect time
// line, the vowels /ʊ/ and /uː/, speech layout, modal meanings, the letter of
// application, the present perfect continuous, register, passive tenses,
// reported speech changes, connectives, determiners, special question tags,
// phrasal verbs with several meanings and the three conditionals.
import { Circle, G, Line } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';

// ---------- the order of two past events ----------
function TimelineArt() {
  const y = 92;
  return (
    <G>
      <Line x1={20} y1={y} x2={318} y2={y} stroke={O} strokeWidth={1.6} />
      <Head x={322} y={y} dx={1} dy={0} size={7} fill={O} />
      <Txt x={24} y={y + 18} size={9} anchor="start" fill={MUTED} weight="700">
        PAST
      </Txt>
      <Line x1={296} y1={y - 8} x2={296} y2={y + 8} stroke={O} strokeWidth={1.6} />
      <Txt x={296} y={y + 22} size={9} fill={MUTED} weight="700">
        NOW
      </Txt>
      <Circle cx={110} cy={y} r={6} fill={RED} />
      <Circle cx={210} cy={y} r={6} fill={BLUE} />
      <Txt x={110} y={y - 34} size={9.5} weight="700" fill={RED}>
        1st: the bus left
      </Txt>
      <Txt x={110} y={y - 20} size={9} fill={RED}>
        past perfect: had left
      </Txt>
      <Txt x={210} y={y + 26} size={9.5} weight="700" fill={BLUE}>
        2nd: we arrived
      </Txt>
      <Txt x={210} y={y + 40} size={9} fill={BLUE}>
        simple past: arrived
      </Txt>
      <Txt x={170} y={148} size={10} weight="700">
        When we arrived, the bus had left.
      </Txt>
    </G>
  );
}

export const ENGLISH_2 = {
  'relative-clauses': columnsSpec('Defining and non-defining relative clauses', [
    { head: 'Defining', items: ['Says which one is meant', 'No commas', '"that" is allowed', 'The boy who won is here.'] },
    { head: 'Non-defining', items: ['Adds extra information', 'Between commas', 'Never "that"', 'Buea, which is cool, is lovely.'] },
  ], { colW: 170 }),
  'past-perfect-timeline': {
    title: 'The past perfect: the earlier of two past events',
    w: 340,
    h: 160,
    art: TimelineArt,
    labels: [],
    facts: ['Two events happened in the past: first the bus left, then we arrived.', 'The earlier event takes the past perfect, "had left".', 'The later event takes the simple past, "arrived".'],
  },
  'vowels-u': columnsSpec('Minimal pairs: short /ʊ/ and long /uː/', [
    { head: 'Short /ʊ/', items: ['full', 'pull', 'look', 'should', 'good'] },
    { head: 'Long /uː/', items: ['fool', 'pool', 'Luke', 'shoed', 'food'] },
  ], { colW: 112 }),
  'speech-layout': flowSpec('The layout of a formal speech', ['Protocol\ngreet the audience', 'Introduction\nstate the purpose', 'Body\ntwo to four points', 'Conclusion\ncall to action', 'Closing\nthank the audience'], { boxW: 108 }),
  'modals-meaning': columnsSpec('Modals of obligation and probability', [
    { head: 'Obligation and advice', items: ['must: strong obligation', 'have to: a rule requires it', 'should, ought to: advice', 'needn’t: no obligation'] },
    { head: 'Probability', items: ['must: almost certain', 'should: expected', 'may, might, could: possible', 'can’t: almost impossible'] },
  ], { colW: 170 }),
  'letter-application': flowSpec('The letter of application', ['Your address\nand the date', 'Employer’s title\nand address', 'Dear Sir/Madam,\nand subject line', 'The post and\nwhere advertised', 'Qualifications,\nskills, experience', 'Availability,\nYours faithfully'], { perRow: 3, boxW: 110 }),
  'perfect-continuous': columnsSpec('Present perfect continuous or simple?', [
    { head: 'have been + -ing', items: ['Stresses the activity', 'and how long it lasted', '"I have been typing all day."'] },
    { head: 'have + past participle', items: ['Stresses the result', 'or how many', '"I have typed ten pages."'] },
  ], { colW: 168 }),
  'register-scale': columnsSpec('Informal and formal register', [
    { head: 'Informal', items: ['get', 'buy', 'ask', 'help', 'start', 'Thanks a lot!'] },
    { head: 'Formal', items: ['obtain', 'purchase', 'inquire', 'assist', 'commence', 'I am most grateful.'] },
  ], { colW: 140 }),
  'passive-tenses': columnsSpec('The passive in each tense', [
    { head: 'Tense', items: ['present simple', 'present continuous', 'present perfect', 'past simple', 'past perfect', 'future, modals'] },
    { head: 'Passive form', items: ['is cleaned', 'is being cleaned', 'has been cleaned', 'was cleaned', 'had been cleaned', 'will / must be cleaned'] },
  ], { colW: 140 }),
  'reported-changes': columnsSpec('What changes in reported speech', [
    { head: 'Direct', items: ['am, is, are', 'did, have done', 'will, can, must', 'now, today', 'yesterday, tomorrow', 'here, this'] },
    { head: 'Reported', items: ['was, were', 'had done', 'would, could, had to', 'then, that day', 'the day before, the next day', 'there, that'] },
  ], { colW: 156 }),
  'connectives-logic': columnsSpec('Connectives of logic and sequence', [
    { head: 'Cause', items: ['because + clause', 'because of + noun', 'on account of', 'owing to, due to'] },
    { head: 'Result', items: ['so, therefore', 'consequently', 'as a result', 'thus, hence'] },
    { head: 'Sequence', items: ['first, to begin with', 'then, next', 'subsequently', 'finally'] },
  ], { colW: 120 }),
  determiners: columnsSpec('Each, every, either, neither, all', [
    { head: 'Singular noun and verb', items: ['each candidate has', 'every voter is', 'either station is open', 'neither answer is right'] },
    { head: 'Plural or uncountable', items: ['all voters must', 'all the money was', 'both candidates spoke', 'neither of them was'] },
  ], { colW: 168 }),
  'tags-special': columnsSpec('Special question tags', [
    { head: 'Statement', items: ['Nobody called,', 'Everyone came,', 'Nothing was lost,', 'There is a fee,', 'I am late,', 'Let’s go,'] },
    { head: 'Tag', items: ['did they?', 'didn’t they?', 'was it?', 'isn’t there?', 'aren’t I?', 'shall we?'] },
  ], { colW: 140 }),
  'phrasal-meanings': columnsSpec('One phrasal verb, several meanings', [
    { head: 'take off', items: ['remove clothes', 'leave the ground (a plane)'] },
    { head: 'put off', items: ['postpone', 'discourage'] },
    { head: 'turn down', items: ['lower the volume', 'refuse an offer'] },
  ], { colW: 120 }),
  'conditionals-all': columnsSpec('The three conditionals', [
    { head: 'Type I: likely', items: ['if + present', 'will + base form', 'If it rains, we will stay in.'] },
    { head: 'Type II: imagined', items: ['if + past', 'would + base form', 'If it rained, we would stay in.'] },
    { head: 'Type III: unreal past', items: ['if + past perfect', 'would have + participle', 'If it had rained,', 'we would have stayed in.'] },
  ], { colW: 150 }),
};
