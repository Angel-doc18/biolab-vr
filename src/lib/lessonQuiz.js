// The questions at the end of a lesson. A lesson ends with its own questions
// (`quiz` on the lesson), its check question, and the questions of its topic quiz
// that are about what it teaches: each topic question goes to the lesson of that
// topic whose text it matches best. Every lesson ends with 5 to 10 questions.
import { units } from '../data/units';
import { lessonsFor } from '../data/lessons';

export const MIN_QUESTIONS = 5;
export const MAX_QUESTIONS = 10;

const STOP = new Set(
  'the a an and or of to in is are be by for with on as at it its this that from which what when how why do does can into than more most less their they them these those not no all any each other your you we our was were has have had will would about also only same such one two three per out up so if then there here very'.split(' ')
);
const words = (s) =>
  String(s)
    .toLowerCase()
    .replace(/\*\*/g, '')
    .replace(/[^a-z0-9éèàç₀-₉²³ ]+/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
const textOf = (l) => [l.title, l.title, ...l.body, ...(l.terms || []).map((t) => t.join(' ')), ...(l.examples || []).map((e) => `${e.q} ${e.steps.join(' ')}`), l.tip].join(' ');

let assigned = null; // lesson id -> questions from topic quizzes
function build() {
  const map = new Map();
  for (const u of units) {
    const ls = lessonsFor(u.id);
    if (!ls.length) continue;
    const bags = ls.map((l) => {
      const m = new Map();
      for (const w of words(textOf(l))) m.set(w, (m.get(w) || 0) + 1);
      return m;
    });
    for (const q of u.quiz) {
      const qw = words(`${q.q} ${q.a[0]} ${q.why}`);
      let best = 0;
      let bestScore = -1;
      bags.forEach((b, i) => {
        let s = 0;
        for (const w of qw) if (b.has(w)) s += 1 + Math.log(b.get(w));
        if (s > bestScore) {
          bestScore = s;
          best = i;
        }
      });
      const id = ls[best].id;
      map.set(id, [...(map.get(id) || []), q]);
    }
  }
  return map;
}

export function lessonQuiz(lesson) {
  if (!assigned) assigned = build();
  const out = [];
  const seen = new Set();
  const add = (q) => {
    if (q && !seen.has(q.q)) {
      seen.add(q.q);
      out.push(q);
    }
  };
  (lesson.quiz || []).forEach(add);
  add(lesson.check);
  (assigned.get(lesson.id) || []).forEach(add);
  return out.slice(0, MAX_QUESTIONS);
}
