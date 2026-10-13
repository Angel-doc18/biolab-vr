// Geography by class, following the MINESEC harmonised Geography schemes for
// Forms 1, 2, 4 and 5. Each topic carries the term in which it is taught, so
// class tests can follow the school year.
import { UNITS_1 } from './units1';
import { UNITS_2 } from './units2';
import { UNITS_4 } from './units4';
import { UNITS_5 } from './units5';

export const GROUPS = [
  { id: 'earth', en: 'The Earth in space and map skills', fr: 'La Terre dans l’espace et la lecture de cartes' },
  { id: 'physical', en: 'The physical environment', fr: 'Le milieu physique' },
  { id: 'human', en: 'Population and settlement', fr: 'Population et peuplement' },
  { id: 'economic', en: 'Economic activities and resources', fr: 'Activités économiques et ressources' },
  { id: 'environment', en: 'Environment and sustainable development', fr: 'Environnement et développement durable' },
];

export const units = [...UNITS_1, ...UNITS_2, ...UNITS_4, ...UNITS_5];
