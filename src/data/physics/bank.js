// Physics topic material first written as eleven GCE Ordinary Level units
// (units1.js and units2.js): each entry's labelled 3D model (vr.parts, built in
// src/three/physModels.js keyed by the same id), its diagram and its quiz
// questions. The class topics in units.js are built from this bank.
import { UNITS_1 } from './units1';
import { UNITS_2 } from './units2';

export const BANK = Object.fromEntries([...UNITS_1, ...UNITS_2].map((u) => [u.id, u]));
