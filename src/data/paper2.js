// Paper 2 (structured questions) for every subject. Each subject's bank holds
// 20-mark questions with full mark schemes; a paper draws its compulsory Section A
// questions and the Section B choice from the bank, following the layout in
// subjects.js. Question ids are unique across subjects.
import { PAPER2 as BIOLOGY } from './biology/paper2';
import { PAPER2 as CHEMISTRY } from './chemistry/paper2';
import { PAPER2 as PHYSICS } from './physics/paper2';
import { PAPER2 as HUMANBIO, SHARED as HUMANBIO_SHARED } from './humanbio/paper2';
import { PAPER2 as A_CHEMISTRY } from './a-chemistry/paper2';
import { PAPER2 as A_PHYSICS } from './a-physics/paper2';
import { subjectById } from './subjects';

const ALL = [...BIOLOGY, ...CHEMISTRY, ...PHYSICS, ...HUMANBIO, ...A_CHEMISTRY, ...A_PHYSICS];
const byId = new Map(ALL.map((q) => [q.id, q]));

const BANKS = {
  biology: BIOLOGY,
  chemistry: CHEMISTRY,
  physics: PHYSICS,
  // Human Biology adds its own Section A questions to the human Biology questions.
  humanbio: [...HUMANBIO, ...HUMANBIO_SHARED.map((id) => byId.get(id)).filter(Boolean)],
  'a-chemistry': A_CHEMISTRY,
  'a-physics': A_PHYSICS,
};

export const bankFor = (subject) => BANKS[subject] || [];
export const p2ById = (id) => byId.get(id);
export const questionMarks = (q) => q.parts.reduce((a, p) => a + p.marks, 0);
export const paper2Config = (subject) => subjectById(subject).p2;
export const paper2Total = (subject) => {
  const c = paper2Config(subject);
  if (c?.groups) return c.groups.reduce((t, g) => t + g.marks * (g.count ?? g.answer), 0);
  return c ? 20 * (c.a + c.b.answer) : 0;
};

const shuffle = (a) => a.map((x) => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);

// Section A: one question per slot when the subject defines slots (a slot may
// repeat, as in A Level Chemistry's two questions per section), otherwise a
// spread across units. Section B: the questions offered for choice.
// A paper laid out in groups (A Level Physics): each group is either compulsory
// (`count` questions) or a choice (`offered`, of which `answer` are done).
// Compulsory questions go in `a`, offered ones in `b`, in group order.
const groupSize = (g) => g.count ?? g.offered;
function drawGroups(c, bank) {
  const a = [];
  const b = [];
  for (const g of c.groups) {
    const ids = shuffle(bank.filter((q) => q.slot === g.slot)).slice(0, groupSize(g)).map((q) => q.id);
    (g.count ? a : b).push(...ids);
  }
  return { a, b };
}

function draw(c, bank) {
  if (c.groups) return drawGroups(c, bank);
  const poolA = shuffle(bank.filter((q) => q.section === 'A'));
  let a;
  if (c.aSlots) {
    a = [];
    for (const slot of c.aSlots) {
      const q = poolA.find((x) => x.slot === slot && !a.includes(x));
      if (q) a.push(q);
    }
  } else {
    a = [];
    for (const q of poolA) if (a.length < c.a && !a.some((x) => x.unit === q.unit)) a.push(q);
    for (const q of poolA) if (a.length < c.a && !a.includes(q)) a.push(q);
  }
  const b = shuffle(bank.filter((q) => q.section === 'B')).slice(0, c.b.offered);
  return { a: a.map((q) => q.id), b: b.map((q) => q.id) };
}
const complete = (c, p) =>
  c.groups
    ? c.groups.every((g) => [...p.a, ...p.b].filter((id) => byId.get(id)?.slot === g.slot).length === groupSize(g))
    : p.a.length === c.a && p.b.length === c.b.offered;

// unitIds: the topics a student has covered so far. Their paper uses only those
// topics when they can fill a paper laid out like the exam; otherwise it is the
// full exam paper.
export function paper2Covers(subject, unitIds) {
  const c = paper2Config(subject);
  if (!c) return false;
  if (!unitIds) return true;
  const bank = bankFor(subject).filter((q) => unitIds.includes(q.unit));
  if (c.groups) return c.groups.every((g) => bank.filter((q) => q.slot === g.slot).length >= groupSize(g));
  const need = (slot) => c.aSlots.filter((s) => s === slot).length;
  const slotsOk = !c.aSlots || c.aSlots.every((slot) => bank.filter((q) => q.section === 'A' && q.slot === slot).length >= need(slot));
  return slotsOk && bank.filter((q) => q.section === 'A').length >= c.a && bank.filter((q) => q.section === 'B').length >= c.b.offered;
}
export function buildPaper2(subject, unitIds) {
  const c = paper2Config(subject);
  if (unitIds && paper2Covers(subject, unitIds)) {
    const p = draw(c, bankFor(subject).filter((q) => unitIds.includes(q.unit)));
    if (complete(c, p)) return p;
  }
  return draw(c, bankFor(subject));
}
