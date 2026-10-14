// Citizenship Education by class, following the 2026/2027 national
// harmonised schemes of work: rights, the family, local governance and social
// vices in Form 4; the State, government, democracy and international
// relations in Form 5. Each topic carries the term and sequence in which it is
// taught.
import { UNITS_4 } from './units4';
import { UNITS_5 } from './units5';

export const GROUPS = [
  { id: 'rights', en: 'Human rights', fr: 'Droits de l’homme' },
  { id: 'family', en: 'Family and child protection', fr: 'Famille et protection de l’enfant' },
  { id: 'governance', en: 'Local governance', fr: 'Gouvernance locale' },
  { id: 'vices', en: 'Social vices', fr: 'Fléaux sociaux' },
  { id: 'safety', en: 'Safety and digital citizenship', fr: 'Sécurité et citoyenneté numérique' },
  { id: 'state', en: 'The State and government', fr: 'L’État et le gouvernement' },
  { id: 'democracy', en: 'Democracy and integrity', fr: 'Démocratie et intégrité' },
  { id: 'international', en: 'International relations', fr: 'Relations internationales' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_4, ...UNITS_5];
