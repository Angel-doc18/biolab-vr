// The subjects the app covers (ids match the app's subjects.js). O: Ordinary
// Level (Forms 1 to 5); A: Advanced Level (Lower and Upper Sixth). `gce: false`
// marks a school subject that is not itself a GCE paper.
//
// The app owns the list of subjects. The server accepts any well-formed id, so
// a subject added to the app can be chosen and saved without a server release;
// this table only gives the names of the subjects it knows.
export const SUBJECTS = {
  biology: { en: 'Biology', fr: 'biologie', level: 'O' },
  chemistry: { en: 'Chemistry', fr: 'chimie', level: 'O' },
  physics: { en: 'Physics', fr: 'physique', level: 'O' },
  humanbio: { en: 'Human Biology', fr: 'biologie humaine', level: 'O' },
  maths: { en: 'Mathematics', fr: 'mathématiques', level: 'O' },
  addmaths: { en: 'Additional Mathematics', fr: 'mathématiques additionnelles', level: 'O' },
  computer: { en: 'Computer Science', fr: 'informatique', level: 'O' },
  geography: { en: 'Geography', fr: 'géographie', level: 'O' },
  homeec: { en: 'Home Economics', fr: 'économie sociale et familiale', level: 'O', gce: false },
  food: { en: 'Food and Nutrition', fr: 'alimentation et nutrition', level: 'O' },
  english: { en: 'English Language', fr: 'anglais', level: 'O' },
  french: { en: 'French', fr: 'français', level: 'O' },
  literature: { en: 'Literature in English', fr: 'littérature anglaise', level: 'O' },
  history: { en: 'History', fr: 'histoire', level: 'O' },
  economics: { en: 'Economics', fr: 'économie', level: 'O' },
  commerce: { en: 'Commerce', fr: 'commerce', level: 'O' },
  citizenship: { en: 'Citizenship Education', fr: 'éducation à la citoyenneté', level: 'O' },
  geology: { en: 'Geology', fr: 'géologie', level: 'O' },
  logic: { en: 'Logic', fr: 'logique', level: 'O' },
  'a-biology': { en: 'Biology', fr: 'biologie', level: 'A' },
  'a-chemistry': { en: 'Chemistry', fr: 'chimie', level: 'A' },
  'a-physics': { en: 'Physics', fr: 'physique', level: 'A' },
  'a-geology': { en: 'Geology', fr: 'géologie', level: 'A' },
};
export const SUBJECT_IDS = Object.keys(SUBJECTS);
// Most subjects one student may take.
export const MAX_SUBJECTS = 20;

// Lower-case letters and single hyphens, such as "geology" or "a-physics".
const ID = /^[a-z]+(?:-[a-z]+)*$/;
export const isSubjectId = (id) => typeof id === 'string' && id.length <= 32 && ID.test(id);
export const subjectOr = (id, fallback = 'biology') => (isSubjectId(id) ? id : fallback);

// A subject the server has no name for yet is named from its id:
// "a-further-maths" becomes "Further Maths" at Advanced Level.
const nameOf = (id) => {
  const known = SUBJECTS[id];
  if (known) return known;
  const level = id.startsWith('a-') ? 'A' : 'O';
  const words = (level === 'A' ? id.slice(2) : id).split('-');
  return { en: words.map((w) => w[0].toUpperCase() + w.slice(1)).join(' '), level };
};
// "GCE Ordinary Level Physics"
export const subjectTitle = (id) => {
  const s = nameOf(subjectOr(id));
  if (s.gce === false) return `Secondary school ${s.en}`;
  return `GCE ${s.level === 'A' ? 'Advanced' : 'Ordinary'} Level ${s.en}`;
};

// A clean list of subject ids: well-formed, without repeats, in the order given.
export const cleanSubjects = (list) => [...new Set(list.filter(isSubjectId))].slice(0, MAX_SUBJECTS);

// Stored as a comma-separated list on the user; accounts made before subjects
// existed took Biology.
export const userSubjects = (u) => {
  const list = cleanSubjects((u?.subjects || '').split(','));
  return list.length ? list : u?.role === 'student' ? ['biology'] : [];
};
