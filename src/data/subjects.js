// The GCE sciences and mathematics, Ordinary and Advanced Level. Codes are the
// GCE Board subject codes; durations follow the Board's June 2026 examination
// timetable.
//
// Paper 2 practice layout per subject: Section A questions are compulsory;
// Section B offers `offered` questions of which `answer` are done. Every
// question is worth 20 marks.
//
// A subject is switched on (`available`) once its lessons, practicals, 3D models
// and papers are complete; until then it is listed as being written.

export const SUBJECTS = [
  // ---------- Ordinary Level ----------
  {
    id: 'biology',
    code: '0510',
    level: 'O',
    available: true,
    en: 'Biology',
    fr: 'Biologie',
    p1: { count: 50, minutes: 90 },
    p2: { minutes: 150, a: 3, aSlots: ['variety', 'plants', 'ecology'], b: { offered: 4, answer: 2 } },
  },
  {
    id: 'chemistry',
    code: '0515',
    level: 'O',
    available: true,
    en: 'Chemistry',
    fr: 'Chimie',
    p1: { count: 50, minutes: 90 },
    p2: { minutes: 150, a: 3, b: { offered: 2, answer: 2 } },
  },
  {
    id: 'physics',
    code: '0580',
    level: 'O',
    available: true,
    en: 'Physics',
    fr: 'Physique',
    p1: { count: 50, minutes: 90 },
    p2: { minutes: 150, a: 3, b: { offered: 3, answer: 2 } },
  },
  {
    id: 'humanbio',
    code: '0565',
    level: 'O',
    en: 'Human Biology',
    fr: 'Biologie humaine',
    p1: { count: 50, minutes: 90 },
    p2: { minutes: 150, a: 3, b: { offered: 4, answer: 2 } },
  },
  { id: 'maths', code: '0570', level: 'O', en: 'Mathematics', fr: 'Mathématiques' },
  { id: 'addmaths', code: '0575', level: 'O', en: 'Additional Mathematics', fr: 'Mathématiques additionnelles' },
  { id: 'computer', code: '0595', level: 'O', en: 'Computer Science', fr: 'Informatique' },
  { id: 'geology', code: '0555', level: 'O', en: 'Geology', fr: 'Géologie' },
  { id: 'food', code: '0540', level: 'O', en: 'Food and Nutrition', fr: 'Alimentation et nutrition' },

  // ---------- Advanced Level ----------
  { id: 'a-biology', code: '0710', level: 'A', en: 'Biology', fr: 'Biologie' },
  { id: 'a-chemistry', code: '0715', level: 'A', en: 'Chemistry', fr: 'Chimie' },
  { id: 'a-physics', code: '0780', level: 'A', en: 'Physics', fr: 'Physique' },
  { id: 'a-maths-mech', code: '0765', level: 'A', en: 'Pure Mathematics with Mechanics', fr: 'Mathématiques pures et mécanique' },
  { id: 'a-maths-stat', code: '0770', level: 'A', en: 'Pure Mathematics with Statistics', fr: 'Mathématiques pures et statistiques' },
  { id: 'a-further-maths', code: '0775', level: 'A', en: 'Further Mathematics', fr: 'Mathématiques approfondies' },
  { id: 'a-computer', code: '0795', level: 'A', en: 'Computer Science', fr: 'Informatique' },
  { id: 'a-ict', code: '0796', level: 'A', en: 'Information and Communication Technology', fr: 'Technologies de l’information et de la communication' },
  { id: 'a-geology', code: '0755', level: 'A', en: 'Geology', fr: 'Géologie' },
  { id: 'a-food', code: '0740', level: 'A', en: 'Food Science and Nutrition', fr: 'Science alimentaire et nutrition' },
];

export const LEVELS = {
  O: { en: 'Ordinary Level', fr: 'Ordinary Level', short: 'O Level' },
  A: { en: 'Advanced Level', fr: 'Advanced Level', short: 'A Level' },
};

// Subjects open to students and teachers.
export const OPEN_SUBJECTS = SUBJECTS.filter((s) => s.available);
export const SUBJECT_IDS = SUBJECTS.map((s) => s.id);
export const OPEN_IDS = OPEN_SUBJECTS.map((s) => s.id);
export const DEFAULT_SUBJECT = 'biology';
export const subjectById = (id) => SUBJECTS.find((s) => s.id === id) || SUBJECTS[0];
export const subjectName = (id, lang) => {
  const s = subjectById(id);
  return lang === 'fr' ? s.fr : s.en;
};
export const subjectsForLevel = (level) => SUBJECTS.filter((s) => s.level === level);

// The subjects a student takes, in registry order, never empty.
export function chosenSubjects(user) {
  const list = Array.isArray(user?.subjects) ? user.subjects.filter((s) => OPEN_IDS.includes(s)) : [];
  return list.length ? OPEN_IDS.filter((s) => list.includes(s)) : [DEFAULT_SUBJECT];
}

// Secondary school classes. Form 5 sits the Ordinary Level and Upper Sixth the
// Advanced Level in June of the current school year.
export const CLASSES = [
  { id: 'Form 1', level: 'O', yearsToExam: 4 },
  { id: 'Form 2', level: 'O', yearsToExam: 3 },
  { id: 'Form 3', level: 'O', yearsToExam: 2 },
  { id: 'Form 4', level: 'O', yearsToExam: 1 },
  { id: 'Form 5', level: 'O', yearsToExam: 0 },
  { id: 'Lower Sixth', level: 'A', yearsToExam: 1 },
  { id: 'Upper Sixth', level: 'A', yearsToExam: 0 },
];
export const classById = (id) => CLASSES.find((c) => c.id === id);
export const classLevel = (id) => classById(id)?.level || 'O';
export const userLevel = (user) => (classById(user?.className) ? classLevel(user.className) : user?.level === 'A' ? 'A' : 'O');

// The June that ends the current school year (the school year starts in September).
export function firstExamYear(now = new Date()) {
  return now.getMonth() >= 5 ? now.getFullYear() + 1 : now.getFullYear();
}
export const examYearFor = (classId, now) => firstExamYear(now) + (classById(classId)?.yearsToExam ?? 0);

// "GCE O Level, June 2027" for the student's own exam.
export function examLabel(user, L) {
  const level = LEVELS[userLevel(user)].short;
  return user?.examYear ? `GCE ${level}, ${L('June', 'juin')} ${user.examYear}` : `GCE ${level}`;
}

export const minutesLabel = (m, L) => {
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (!h) return `${r} min`;
  return r ? `${h} h ${r}` : `${h} ${h === 1 ? L('hour', 'heure') : L('hours', 'heures')}`;
};
