// Every lesson across the subjects. A unit lists its lessons either by the
// lessons' own `unit` field or, when it shares lessons with another subject
// (Human Biology reuses the human Biology lessons), by `unit.lessonIds`.
import { LESSONS as BIOLOGY } from './biology/lessons';
import { LESSONS as CHEMISTRY } from './chemistry/lessons';
import { LESSONS as PHYSICS } from './physics/lessons';
import { LESSONS as HUMANBIO } from './humanbio/lessons';
import { LESSONS as A_BIOLOGY } from './a-biology/lessons';
import { LESSONS as A_CHEMISTRY } from './a-chemistry/lessons';
import { LESSONS as A_PHYSICS } from './a-physics/lessons';
import { LESSONS as COMPUTER } from './computer/lessons';
import { LESSONS as GEOGRAPHY } from './geography/lessons';
import { LESSONS as HOMEEC } from './homeec/lessons';
import { LESSONS as MATHS } from './maths/lessons';
import { LESSONS as ENGLISH } from './english/lessons';
import { LESSONS as FRENCH } from './french/lessons';
import { LESSONS as LITERATURE } from './literature/lessons';
import { LESSONS as HISTORY } from './history/lessons';
import { LESSONS as ECONOMICS } from './economics/lessons';
import { LESSONS as COMMERCE } from './commerce/lessons';
import { LESSONS as CITIZENSHIP } from './citizenship/lessons';
import { LESSONS as GEOLOGY } from './geology/lessons';
import { LESSONS as LOGIC } from './logic/lessons';
import { LESSONS as A_MATHS } from './a-maths/lessons';
import { LESSONS as A_MATHS_MECH } from './a-maths-mech/lessons';
import { LESSONS as A_MATHS_STAT } from './a-maths-stat/lessons';
import { LESSONS as A_FURTHER_MATHS } from './a-further-maths/lessons';
import { LESSONS as A_COMPUTER } from './a-computer/lessons';
import { LESSON_QUESTIONS } from './lessonQuestions';
import { unitById } from './units';

// Each lesson carries its own end-of-lesson questions (`quiz`) where extra ones
// have been written for it.
const withQuestions = (l) => (LESSON_QUESTIONS[l.id] ? { ...l, quiz: [...(l.quiz || []), ...LESSON_QUESTIONS[l.id]] } : l);
export const LESSONS = [...BIOLOGY, ...CHEMISTRY, ...PHYSICS, ...HUMANBIO, ...A_BIOLOGY, ...A_CHEMISTRY, ...A_PHYSICS, ...COMPUTER, ...GEOGRAPHY, ...HOMEEC, ...MATHS, ...ENGLISH, ...FRENCH, ...LITERATURE, ...HISTORY, ...ECONOMICS, ...COMMERCE, ...CITIZENSHIP, ...GEOLOGY, ...LOGIC, ...A_MATHS, ...A_MATHS_MECH, ...A_MATHS_STAT, ...A_FURTHER_MATHS, ...A_COMPUTER].map(withQuestions);

const byId = new Map(LESSONS.map((l) => [l.id, l]));
const byUnit = new Map();
for (const l of LESSONS) byUnit.set(l.unit, [...(byUnit.get(l.unit) || []), l]);

export const lessonById = (id) => byId.get(id);

export function lessonsFor(unitId) {
  const unit = unitById(unitId);
  if (unit?.lessonIds) return unit.lessonIds.map((id) => byId.get(id)).filter(Boolean);
  return byUnit.get(unitId) || [];
}
export const lessonIdsFor = (unitId) => lessonsFor(unitId).map((l) => l.id);
export const lessonCount = () => LESSONS.length;

// Plain text for narration (strips the ** and *italic* markers, reads a lone *
// as "times" and runs list lines together).
export const plain = (s) =>
  s
    .replace(/\*\*/g, '')
    .replace(/\*([^\s*](?:[^*]*[^\s*])?)\*/g, '$1')
    .replace(/ \* /g, ' times ')
    .replace(/:\n- /g, ': ')
    .replace(/\.\n- /g, '. ')
    .replace(/\n- /g, '; ')
    .replace(/([^.!?:;])\n/g, '$1. ')
    .replace(/\n/g, ' ');

// Lesson number as shown in a unit ("3.2"), so a shared lesson is numbered for
// the subject it is read in.
export function lessonNumber(unitId, lesson) {
  const unit = unitById(unitId);
  const i = lessonsFor(unitId).indexOf(lesson);
  return unit && i >= 0 ? `${unit.n}.${i + 1}` : lesson.n;
}
