// The eleven GCE Ordinary Level Physics units. Each unit drives its syllabus
// row, its labelled 3D model (vr.parts, built in src/three/physModels.js), the
// unit quiz and the Paper 1 bank.
//
// Quiz convention: the correct option is written first in `a`; options are
// shuffled when shown.
import { UNITS_1 } from './units1';
import { UNITS_2 } from './units2';

export const GROUPS = [
  { id: 'mechanics', en: 'Mechanics and matter', fr: 'Mécanique et matière' },
  { id: 'heat', en: 'Heat, waves and light', fr: 'Chaleur, ondes et lumière' },
  { id: 'electricity', en: 'Electricity and the atom', fr: 'Électricité et atome' },
];

export const units = [...UNITS_1, ...UNITS_2];
