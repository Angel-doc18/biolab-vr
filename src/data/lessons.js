// Every lesson across the sciences. A unit lists its lessons either by the
// lessons' own `unit` field or, when it shares lessons with another subject
// (Human Biology reuses the human Biology lessons), by `unit.lessonIds`.
import { LESSONS as BIOLOGY } from './biology/lessons';
import { LESSONS as CHEMISTRY } from './chemistry/lessons';
import { LESSONS as PHYSICS } from './physics/lessons';
import { LESSONS as HUMANBIO } from './humanbio/lessons';
import { LESSONS as A_CHEMISTRY } from './a-chemistry/lessons';
import { unitById } from './units';

export const LESSONS = [...BIOLOGY, ...CHEMISTRY, ...PHYSICS, ...HUMANBIO, ...A_CHEMISTRY];

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

// Plain text for narration (strips the ** markers).
export const plain = (s) => s.replace(/\*\*/g, '').replace(/\*/g, '');

// Lesson number as shown in a unit ("3.2"), so a shared lesson is numbered for
// the subject it is read in.
export function lessonNumber(unitId, lesson) {
  const unit = unitById(unitId);
  const i = lessonsFor(unitId).indexOf(lesson);
  return unit && i >= 0 ? `${unit.n}.${i + 1}` : lesson.n;
}
