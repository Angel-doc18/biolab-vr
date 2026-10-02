// The GCE Ordinary Level sciences covered by the app. Codes are the GCE Board
// subject codes; durations follow the Board's examination timetable.
//
// Paper 2 practice layout per subject: Section A questions are compulsory;
// Section B offers `offered` questions of which `answer` are done. Every
// question is worth 20 marks.

export const SUBJECTS = [
  {
    id: 'biology',
    code: '0510',
    available: true,
    en: 'Biology',
    fr: 'Biologie',
    p1: { count: 50, minutes: 90 },
    p2: { minutes: 120, a: 3, aSlots: ['variety', 'plants', 'ecology'], b: { offered: 4, answer: 2 } },
  },
  {
    id: 'chemistry',
    code: '0515',
    en: 'Chemistry',
    fr: 'Chimie',
    p1: { count: 50, minutes: 90 },
    p2: { minutes: 120, a: 3, b: { offered: 2, answer: 2 } },
  },
  {
    id: 'physics',
    code: '0580',
    en: 'Physics',
    fr: 'Physique',
    p1: { count: 50, minutes: 90 },
    p2: { minutes: 150, a: 3, b: { offered: 3, answer: 2 } },
  },
  {
    id: 'humanbio',
    code: '0565',
    en: 'Human Biology',
    fr: 'Biologie humaine',
    p1: { count: 50, minutes: 90 },
    p2: { minutes: 150, a: 3, b: { offered: 4, answer: 2 } },
  },
];

// Subjects open to students and teachers. A subject is switched on once its
// lessons, 3D models and papers are complete.
export const OPEN_SUBJECTS = SUBJECTS.filter((s) => s.available);
export const SUBJECT_IDS = SUBJECTS.map((s) => s.id);
const OPEN_IDS = OPEN_SUBJECTS.map((s) => s.id);
export const DEFAULT_SUBJECT = 'biology';
export const subjectById = (id) => SUBJECTS.find((s) => s.id === id) || SUBJECTS[0];
export const subjectName = (id, lang) => {
  const s = subjectById(id);
  return lang === 'fr' ? s.fr : s.en;
};

// The subjects a student takes, in registry order, never empty.
export function chosenSubjects(user) {
  const list = Array.isArray(user?.subjects) ? user.subjects.filter((s) => OPEN_IDS.includes(s)) : [];
  return list.length ? OPEN_IDS.filter((s) => list.includes(s)) : [DEFAULT_SUBJECT];
}

export const minutesLabel = (m, L) => {
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (!h) return `${r} min`;
  return r ? `${h} h ${r}` : `${h} ${h === 1 ? L('hour', 'heure') : L('hours', 'heures')}`;
};
