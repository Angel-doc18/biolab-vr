// GCE Advanced Level Information and Communication Technology (0796) by class:
// the Lower Sixth and Upper Sixth topics of the 2026/2027 harmonised scheme of
// work. Unit ids start with "ait-".
import { UNITS_L6 } from './unitsL6';
import { UNITS_U6 } from './unitsU6';

export const GROUPS = [
  { id: 'hardware', en: 'Computer hardware and environments', fr: 'Matériel et environnements informatiques' },
  { id: 'software', en: 'System software', fr: 'Logiciels système' },
  { id: 'networks', en: 'Networks and communication', fr: 'Réseaux et communication' },
  { id: 'systems', en: 'Information systems and development', fr: 'Systèmes d’information et développement' },
  { id: 'data', en: 'Databases', fr: 'Bases de données' },
  { id: 'applications', en: 'Applications, the web and simulation', fr: 'Applications, web et simulation' },
  { id: 'programming', en: 'Programming', fr: 'Programmation' },
  { id: 'security', en: 'Security, law and society', fr: 'Sécurité, droit et société' },
  { id: 'emerging', en: 'Emerging technologies', fr: 'Technologies émergentes' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_L6, ...UNITS_U6];
