// Commerce by class, following the 2026/2027 national harmonised schemes of
// work: the foundations (wants, production, retail and wholesale trade,
// documents, business units and the aids to trade) in Form 3; home trade,
// documents and calculations in Form 4; the aids to trade
// and foreign trade in Form 5. Each topic carries the term and sequence in
// which it is taught.
import { UNITS_3 } from './units3';
import { UNITS_4 } from './units4';
import { UNITS_5 } from './units5';

export const GROUPS = [
  { id: 'production', en: 'Commerce and production', fr: 'Commerce et production' },
  { id: 'trade', en: 'Home trade', fr: 'Commerce intérieur' },
  { id: 'documents', en: 'Business documents', fr: 'Documents commerciaux' },
  { id: 'calculations', en: 'Commercial calculations', fr: 'Calculs commerciaux' },
  { id: 'aids', en: 'Aids to trade', fr: 'Auxiliaires du commerce' },
  { id: 'foreign', en: 'Foreign trade', fr: 'Commerce extérieur' },
  { id: 'business', en: 'Business units', fr: 'Entreprises' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_3, ...UNITS_4, ...UNITS_5];
