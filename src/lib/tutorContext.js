// What the tutor is told about the lesson or topic open on the student's screen,
// so that its answers keep to the student's class and lesson, and the questions
// the workspace offers to solve on the board.
import { lessonById, lessonNumber, lessonsFor, plain } from '../data/lessons';
import { unitById } from '../data/units';
import { subjectName } from '../data/subjects';

const CAP = 4800;

// "Physics, Form 5, topic 5: Describing Motion"
export function unitHeading(unit) {
  if (!unit) return '';
  return `${subjectName(unit.subject, 'en')}, ${unit.form ? `${unit.form}, ` : ''}topic ${unit.n}: ${unit.title}`;
}

function lessonText(lesson) {
  return [
    lesson.body.map(plain).join('\n'),
    lesson.terms?.length ? `Key terms: ${lesson.terms.map(([t, d]) => `${t}: ${d}`).join('; ')}` : '',
    ...(lesson.examples || []).map((e) => `Worked example: ${plain(e.q)} ${e.steps.map(plain).join(' ')}`),
    lesson.tip ? `Exam tip: ${plain(lesson.tip)}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

// { title, text } for the tutor: the lesson open on screen, or the whole topic.
export function contextFor({ lessonId, unitId } = {}) {
  const lesson = lessonId ? lessonById(lessonId) : null;
  const unit = unitById(unitId || lesson?.unit);
  if (lesson && unit) {
    return { title: `${unitHeading(unit)}. Lesson ${lessonNumber(unit.id, lesson)}: ${lesson.title}`, text: lessonText(lesson).slice(0, CAP), short: `${unit.short}: ${lesson.title}` };
  }
  if (unit) {
    const ls = lessonsFor(unit.id);
    const text = [`Topic focus: ${unit.focus}.`, `Lessons: ${ls.map((l) => l.title).join('; ')}.`, ...ls.map((l) => `${l.title}: ${l.body.map(plain).join(' ')}`)].join('\n');
    return { title: unitHeading(unit), text: text.slice(0, CAP), short: unit.short };
  }
  return null;
}

// A stable shuffle, so a quiz question's options are not always in the same order
// as in the data (where the correct option is written first).
function shuffled(list, seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619) >>> 0;
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    h = Math.imul(h ^ i, 16777619) >>> 0;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const asChoice = (q) => `${q.q}\n${shuffled(q.a, q.q).map((t, i) => `${'ABCD'[i]}. ${t}`).join('\n')}`;

// Questions from the lesson or topic that the student can send to the board:
// worked examples first (the calculations), then the lesson's check and some of
// the topic quiz.
export function questionsFor({ lessonId, unitId } = {}) {
  const lesson = lessonId ? lessonById(lessonId) : null;
  const unit = unitById(unitId || lesson?.unit);
  const out = [];
  const add = (text, kind) => {
    const t = text.trim();
    if (t && !out.some((x) => x.text === t)) out.push({ text: t, kind });
  };
  const lessons = lesson ? [lesson] : unit ? lessonsFor(unit.id) : [];
  for (const l of lessons) for (const e of l.examples || []) add(plain(e.q), 'example');
  if (lesson?.check) add(asChoice(lesson.check), 'check');
  for (const q of (unit?.quiz || []).slice(0, lesson ? 4 : 8)) add(asChoice(q), 'quiz');
  return out.slice(0, 12);
}
