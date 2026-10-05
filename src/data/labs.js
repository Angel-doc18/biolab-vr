// Every virtual practical across the sciences. Lab ids are unique across subjects.
import { LABS as BIOLOGY, STEPS as BIOLOGY_STEPS } from './biology/labs';
import { LABS as CHEMISTRY } from './chemistry/labs';
import { LABS as PHYSICS } from './physics/labs';
import { LABS as HUMANBIO } from './humanbio/labs';
import { formsShown, unitById } from './units';

const tag = (list, subject) => list.map((l) => Object.assign(l, { subject }));

export const LABS = [...tag(BIOLOGY, 'biology'), ...tag(CHEMISTRY, 'chemistry'), ...tag(PHYSICS, 'physics'), ...tag(HUMANBIO, 'humanbio')];

export const labById = (id) => LABS.find((l) => l.id === id);
export const labsForUnit = (unitId) => LABS.filter((l) => l.unit === unitId || l.units?.includes(unitId));
export const labsFor = (subject) => LABS.filter((l) => l.subject === subject || l.subjects?.includes(subject));
// The topic a practical belongs to for this student in the subject they are
// studying. A practical can serve topics in several classes (and in both the
// Ordinary and Advanced Level courses); the one in the student's own class
// comes first.
export function labUnit(lab, className, subject = lab.subject) {
  const all = [lab.unit, ...(lab.units || [])].map(unitById).filter(Boolean);
  const units = all.some((u) => u.subject === subject) ? all.filter((u) => u.subject === subject) : all;
  for (const f of formsShown(units[0]?.subject || lab.subject, className)) {
    const u = units.find((x) => x.form === f);
    if (u) return u;
  }
  return units[0] || unitById(lab.unit);
}

// Method steps shown while a practical runs; each lab may give its own.
export const labSteps = (lang, lab) => {
  const steps = lab?.steps || BIOLOGY_STEPS;
  return steps[lang === 'fr' ? 'fr' : 'en'];
};
