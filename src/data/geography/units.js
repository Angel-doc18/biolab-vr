// Geography by class, following the MINESEC harmonised Geography schemes for
// Forms 1 and 2 (competency-based approach). Each topic carries the term in
// which it is taught, so class tests can follow the school year.
import { UNITS_1 } from './units1';
import { UNITS_2 } from './units2';

export const GROUPS = [
  { id: 'earth', en: 'The Earth in space and map skills', fr: 'La Terre dans l’espace et la lecture de cartes' },
  { id: 'physical', en: 'The physical environment', fr: 'Le milieu physique' },
  { id: 'human', en: 'Population and settlement', fr: 'Population et peuplement' },
  { id: 'economic', en: 'Economic activities and resources', fr: 'Activités économiques et ressources' },
  { id: 'environment', en: 'Environment and sustainable development', fr: 'Environnement et développement durable' },
];

export const units = [...UNITS_1, ...UNITS_2];
