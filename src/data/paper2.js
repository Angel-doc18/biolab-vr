// Paper 2 (structured questions) for every subject. Each subject's bank holds
// 20-mark questions with full mark schemes; a paper draws its compulsory Section A
// questions and the Section B choice from the bank, following the layout in
// subjects.js. Question ids are unique across subjects.
import { PAPER2 as BIOLOGY } from './biology/paper2';
import { PAPER2 as CHEMISTRY } from './chemistry/paper2';
import { PAPER2 as PHYSICS } from './physics/paper2';
import { PAPER2 as HUMANBIO, SHARED as HUMANBIO_SHARED } from './humanbio/paper2';
import { subjectById } from './subjects';

const ALL = [...BIOLOGY, ...CHEMISTRY, ...PHYSICS, ...HUMANBIO];
const byId = new Map(ALL.map((q) => [q.id, q]));

const BANKS = {
  biology: BIOLOGY,
  chemistry: CHEMISTRY,
  physics: PHYSICS,
  // Human Biology adds its own Section A questions to the human Biology questions.
  humanbio: [...HUMANBIO, ...HUMANBIO_SHARED.map((id) => byId.get(id)).filter(Boolean)],
};

export const bankFor = (subject) => BANKS[subject] || BIOLOGY;
export const p2ById = (id) => byId.get(id);
export const questionMarks = (q) => q.parts.reduce((a, p) => a + p.marks, 0);
export const paper2Config = (subject) => subjectById(subject).p2;
export const paper2Total = (subject) => {
  const c = paper2Config(subject);
  return 20 * (c.a + c.b.answer);
};

const shuffle = (a) => a.map((x) => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);

// Section A: one question per slot when the subject defines slots, otherwise a
// spread across units. Section B: the questions offered for choice.
export function buildPaper2(subject) {
  const c = paper2Config(subject);
  const bank = bankFor(subject);
  const poolA = shuffle(bank.filter((q) => q.section === 'A'));
  let a;
  if (c.aSlots) {
    a = c.aSlots.map((slot) => poolA.find((q) => q.slot === slot)).filter(Boolean);
  } else {
    a = [];
    for (const q of poolA) if (a.length < c.a && !a.some((x) => x.unit === q.unit)) a.push(q);
    for (const q of poolA) if (a.length < c.a && !a.includes(q)) a.push(q);
  }
  const b = shuffle(bank.filter((q) => q.section === 'B')).slice(0, c.b.offered);
  return { a: a.map((q) => q.id), b: b.map((q) => q.id) };
}
