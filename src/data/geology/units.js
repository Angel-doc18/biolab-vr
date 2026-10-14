// Geology by class, following the 2026/2027 national harmonised schemes of
// work and the GCE O Level Geology (0555) papers: the Earth, minerals and
// rocks in Form 4; structures, time, resources and the geology of Cameroon in
// Form 5. Each topic carries the term and sequence in which it is taught.
import { UNITS_4 } from './units4';
import { UNITS_5 } from './units5';

export const GROUPS = [
  { id: 'earth', en: 'The Earth and its surface', fr: 'La Terre et sa surface' },
  { id: 'minerals', en: 'Minerals and crystals', fr: 'Minéraux et cristaux' },
  { id: 'rocks', en: 'Rocks', fr: 'Roches' },
  { id: 'practical', en: 'Practical work', fr: 'Travaux pratiques' },
  { id: 'structure', en: 'Structural geology', fr: 'Géologie structurale' },
  { id: 'history', en: 'Earth history', fr: 'Histoire de la Terre' },
  { id: 'resources', en: 'Water and resources', fr: 'Eau et ressources' },
  { id: 'cameroon', en: 'Geology of Cameroon', fr: 'Géologie du Cameroun' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_4, ...UNITS_5];
