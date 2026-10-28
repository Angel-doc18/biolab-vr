// The requests the tutor's explanations are made from, in one place, so a lesson
// screen and the offline download ask the server for exactly the same thing and
// share the copy kept on the phone.
import { plain } from '../data/lessons';
import { labSteps } from '../data/labs';
import { DIAGRAMS, partsOf } from '../diagrams';

// A lesson: one part per paragraph and per worked example (at most 16).
export function lessonTeaching(lesson) {
  const items = [
    ...lesson.body.map(plain),
    ...(lesson.examples || []).map((e) => `Worked example. ${plain(e.q)} Steps: ${e.steps.map((s, j) => `(${j + 1}) ${plain(s)}`).join(' ')}`),
  ].slice(0, 16);
  const context = `Exam tip: ${plain(lesson.tip)} Key terms: ${(lesson.terms || []).map(([t, d]) => `${t}: ${d}`).join('; ')}`.slice(0, 2000);
  return { items, context };
}

export const lessonRequest = (lesson, unit) => ({ kind: 'lesson', subject: unit.subject, title: lesson.title, ...lessonTeaching(lesson) });

// A diagram: one part per named label, then its facts. Null when it has nothing to teach.
export function diagramRequest(id, subject) {
  const spec = DIAGRAMS[id];
  const items = spec ? partsOf(spec) : [];
  return items.length ? { kind: 'diagram', subject, title: spec.title, items } : null;
}

// A practical: one part per step of its method.
export const practicalRequest = (lab, lang) => ({ kind: 'practical', subject: lab.subject, title: lab.title, items: lab.method || labSteps(lang, lab), context: lab.objective });
