// The subjects the app teaches, Ordinary and Advanced Level: the sciences and
// mathematics, and other school subjects. Codes are the GCE Board subject codes;
// durations follow the Board's examination timetable. A subject with `classes`
// is offered only to those classes while its later classes are being written;
// one with `gce: false` (Home Economics) is a school subject that leads to a GCE
// paper of another name (`leadsTo`).
//
// Paper 2 practice layout per subject: Section A questions are compulsory;
// Section B offers `offered` questions of which `answer` are done. Every
// question is worth 20 marks. A subject without `p2` has no Paper 2 bank yet.
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
    available: true,
    en: 'Human Biology',
    fr: 'Biologie humaine',
    p1: { count: 50, minutes: 90 },
    p2: { minutes: 150, a: 3, b: { offered: 4, answer: 2 } },
  },
  { id: 'maths', code: '0570', level: 'O', en: 'Mathematics', fr: 'Mathématiques' },
  { id: 'addmaths', code: '0575', level: 'O', en: 'Additional Mathematics', fr: 'Mathématiques additionnelles' },
  {
    id: 'computer',
    code: '0595',
    level: 'O',
    available: true,
    classes: ['Form 1', 'Form 2', 'Form 3'],
    en: 'Computer Science',
    fr: 'Informatique',
    p1: { count: 50, minutes: 90 },
  },
  {
    id: 'geography',
    code: '0550',
    level: 'O',
    available: true,
    classes: ['Form 1', 'Form 2'],
    en: 'Geography',
    fr: 'Géographie',
    p1: { count: 50, minutes: 90 },
  },
  {
    id: 'homeec',
    level: 'O',
    gce: false,
    leadsTo: 'food',
    available: true,
    classes: ['Form 2'],
    en: 'Home Economics',
    fr: 'Économie sociale et familiale',
    p1: { count: 50, minutes: 90 },
  },
  { id: 'geology', code: '0555', level: 'O', en: 'Geology', fr: 'Géologie' },
  { id: 'food', code: '0540', level: 'O', en: 'Food and Nutrition', fr: 'Alimentation et nutrition' },

  // ---------- Advanced Level ----------
  { id: 'a-biology', code: '0710', level: 'A', en: 'Biology', fr: 'Biologie' },
  {
    id: 'a-chemistry',
    code: '0715',
    level: 'A',
    available: true,
    en: 'Chemistry',
    fr: 'Chimie',
    p1: { count: 50, minutes: 90 },
    // Three sections of two compulsory questions: 120 marks in 3 hours.
    p2: {
      minutes: 180,
      a: 6,
      aSlots: ['physical', 'physical', 'inorganic', 'inorganic', 'organic', 'organic'],
      b: { offered: 0, answer: 0 },
      sections: {
        physical: { en: 'Section A: physical and general chemistry', fr: 'Section A : chimie physique et générale' },
        inorganic: { en: 'Section B: inorganic chemistry', fr: 'Section B : chimie inorganique' },
        organic: { en: 'Section C: organic chemistry', fr: 'Section C : chimie organique' },
      },
      summary: {
        en: 'Six compulsory questions: two each on physical, inorganic and organic chemistry. 20 marks each.',
        fr: 'Six questions obligatoires : deux en chimie physique, deux en inorganique et deux en organique. 20 points chacune.',
      },
    },
  },
  {
    id: 'a-physics',
    code: '0780',
    level: 'A',
    available: true,
    en: 'Physics',
    fr: 'Physique',
    p1: { count: 50, minutes: 90 },
    // Section I: five short questions and one of two long ones; Section II: data
    // analysis; Section III: two of the four options. 100 marks in 3 hours.
    p2: {
      minutes: 180,
      groups: [
        { slot: 'short', count: 5, marks: 6 },
        { slot: 'long', offered: 2, answer: 1, marks: 20 },
        { slot: 'data', count: 1, marks: 20 },
        { slot: 'option', offered: 4, answer: 2, marks: 15 },
      ],
      sections: {
        short: { en: 'Section I: short questions', fr: 'Section I : questions courtes' },
        long: { en: 'Section I: long question', fr: 'Section I : question longue' },
        data: { en: 'Section II: data analysis', fr: 'Section II : analyse de données' },
        option: { en: 'Section III: options', fr: 'Section III : options' },
      },
      summary: {
        en: 'Section I: five short questions (30 marks) and one of two long questions (20); Section II: data analysis (20); Section III: two of the four options (15 each).',
        fr: 'Section I : cinq questions courtes (30 points) et une question longue sur deux (20) ; section II : analyse de données (20) ; section III : deux options sur quatre (15 chacune).',
      },
    },
  },
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

// The Ordinary Level subject each Advanced Level course builds on.
const BASE = { 'a-biology': 'biology', 'a-chemistry': 'chemistry', 'a-physics': 'physics' };
const advancedOf = (id) => Object.keys(BASE).find((a) => BASE[a] === id);

// The subjects a class can take. Sixth Form students take the open Advanced
// Level courses, and keep the Ordinary Level subject while its Advanced Level
// course is still being written.
export function subjectsForClass(className) {
  if (!classById(className)) return OPEN_SUBJECTS;
  const level = classLevel(className);
  const open = OPEN_SUBJECTS.filter((s) => s.level === level && (!s.classes || s.classes.includes(className)));
  if (level === 'O') return open;
  const waiting = OPEN_SUBJECTS.filter((s) => s.level === 'O' && advancedOf(s.id) && !OPEN_IDS.includes(advancedOf(s.id)));
  return [...waiting, ...open].sort((a, b) => (BASE[a.id] || a.id).localeCompare(BASE[b.id] || b.id));
}

// A list of subjects carried over to another class: Chemistry becomes A Level
// Chemistry on moving into the Sixth Form (and back again), and subjects the
// class cannot take are dropped.
export function subjectsInClass(list, className) {
  const allowed = subjectsForClass(className).map((s) => s.id);
  const moved = (list || []).map((id) => (allowed.includes(id) ? id : [advancedOf(id), BASE[id]].find((x) => x && allowed.includes(x)) || id));
  return allowed.filter((id) => moved.includes(id));
}

// The subjects a student takes, in the order offered to their class, never empty.
export function chosenSubjects(user) {
  const list = subjectsInClass(Array.isArray(user?.subjects) ? user.subjects : [], user?.className);
  return list.length ? list : [subjectsForClass(user?.className)[0]?.id || DEFAULT_SUBJECT];
}

// "Chemistry", or "A Level Chemistry" where both levels could be listed together.
export const subjectLabel = (id, lang) => {
  const s = subjectById(id);
  const name = lang === 'fr' ? s.fr : s.en;
  return s.level === 'A' ? `A Level ${name}` : name;
};

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

// The examination a subject is sat as, for headers: "GCE Ordinary Level (0595)",
// or, for a school subject that is not itself a GCE paper, the paper it leads to.
export function examLine(id, lang) {
  const s = subjectById(id);
  if (s.code) return `GCE ${LEVELS[s.level].en} (${s.code})`;
  const to = SUBJECTS.find((x) => x.id === s.leadsTo);
  if (!to) return lang === 'fr' ? 'Matière scolaire' : 'School subject';
  return lang === 'fr' ? `Mène au GCE ${LEVELS[to.level].short} ${to.fr} (${to.code})` : `Leads to GCE ${LEVELS[to.level].short} ${to.en} (${to.code})`;
}
