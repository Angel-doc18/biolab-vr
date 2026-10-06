// Computer Science by class, following the MINESEC annual progression schemes for
// Forms 1, 2 and 3 (Computer Science / ICT, first cycle). Each topic carries the
// term in which it is taught, so class tests can follow the school year.
import { UNITS_1 } from './units1';
import { UNITS_2 } from './units2';
import { UNITS_3 } from './units3';

export const GROUPS = [
  { id: 'systems', en: 'Computer systems and hardware', fr: 'Systèmes informatiques et matériel' },
  { id: 'software', en: 'Software, files and operating systems', fr: 'Logiciels, fichiers et systèmes d’exploitation' },
  { id: 'tools', en: 'Applied tools', fr: 'Outils d’application' },
  { id: 'networks', en: 'Networks and the Internet', fr: 'Réseaux et Internet' },
  { id: 'data', en: 'Data representation and problem solving', fr: 'Représentation des données et algorithmique' },
  { id: 'society', en: 'Computers, health and society', fr: 'Informatique, santé et société' },
];

export const units = [...UNITS_1, ...UNITS_2, ...UNITS_3];
