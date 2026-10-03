// Every syllabus topic ("unit") across the sciences. Unit ids are unique across
// subjects (Biology keeps its original ids; the other subjects use a prefix), so
// progress, quiz scores and teacher assignments stay keyed by unit id alone.
//
// A unit that follows the MINESEC class syllabuses carries `form` (the class it
// is taught in, e.g. "Form 3") and `group` (its module). A unit may borrow the
// 3D model of another unit with `model`, or have none (`vr: null`).
import * as biology from './biology/units';
import * as chemistry from './chemistry/units';
import * as physics from './physics/units';
import * as humanbio from './humanbio/units';
import { CLASSES } from './subjects';

const MODULES = { biology, chemistry, physics, humanbio };

export const units = Object.entries(MODULES).flatMap(([subject, m]) => m.units.map((u) => ({ ...u, subject })));

const byId = new Map(units.map((u) => [u.id, u]));
export const unitById = (id) => byId.get(id);
export const unitsFor = (subject) => units.filter((u) => u.subject === subject);
export const groupsFor = (subject) => MODULES[subject]?.GROUPS || [];

// The classes a subject has topics for, in school order. Empty while a subject
// is still organised as one Ordinary Level course.
const ORDER = CLASSES.map((c) => c.id);
export const formsFor = (subject) => ORDER.filter((f) => unitsFor(subject).some((u) => u.form === f));
export const unitsForForm = (subject, form) => (form ? unitsFor(subject).filter((u) => u.form === form) : unitsFor(subject));

// The class whose topics a student sees first: their own class when the subject
// has topics for it, otherwise the nearest class that has.
export function formFor(subject, className) {
  const forms = formsFor(subject);
  if (!forms.length) return null;
  if (forms.includes(className)) return className;
  const i = ORDER.indexOf(className);
  if (i < 0) return forms[0];
  return [...forms].sort((a, b) => Math.abs(ORDER.indexOf(a) - i) - Math.abs(ORDER.indexOf(b) - i) || ORDER.indexOf(a) - ORDER.indexOf(b))[0];
}

// The key of the 3D model a unit shows (its own, or one it borrows).
export const modelOf = (unitId) => unitById(unitId)?.model || unitId;
export const hasModel = (unit) => !!unit?.vr;

// "Form 4, Topic 3" (or "Topic 3" for a subject not yet organised by class).
export const topicLabel = (unit, L) => `${unit?.form ? `${unit.form}, ` : ''}${L('Topic', 'Thème')} ${unit?.n ?? ''}`;
