// Every syllabus unit across the sciences. Unit ids are unique across subjects
// (Biology keeps its original ids; the other subjects use a prefix), so progress,
// quiz scores and teacher assignments stay keyed by unit id alone.
import * as biology from './biology/units';
import * as chemistry from './chemistry/units';
import * as physics from './physics/units';
import * as humanbio from './humanbio/units';

const MODULES = { biology, chemistry, physics, humanbio };

export const units = Object.entries(MODULES).flatMap(([subject, m]) => m.units.map((u) => ({ ...u, subject })));

const byId = new Map(units.map((u) => [u.id, u]));
export const unitById = (id) => byId.get(id);
export const unitsFor = (subject) => units.filter((u) => u.subject === subject);
export const groupsFor = (subject) => MODULES[subject]?.GROUPS || [];
