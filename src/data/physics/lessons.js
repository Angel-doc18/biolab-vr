// Physics lessons. lessons12.js holds Forms 1 and 2. The first thirty-three were written for the eleven GCE
// Ordinary Level units (lessons1.js and lessons2.js); lessons3.js, lessons4.js
// and lessons5.js add the lessons for the MINESEC Form 3, 4 and 5 topics they did
// not cover. Each lesson's `unit` is the class topic it belongs to. Original text
// written for this app. **double asterisks** mark key terms.
// figure: a key in src/diagrams (a labelled diagram), a list of keys, or null.
import { LESSONS_12 } from './lessons12';
import { LESSONS_1 } from './lessons1';
import { LESSONS_2 } from './lessons2';
import { LESSONS_3 } from './lessons3';
import { LESSONS_4 } from './lessons4';
import { LESSONS_5 } from './lessons5';

export const LESSONS = [...LESSONS_12, ...LESSONS_1, ...LESSONS_2, ...LESSONS_3, ...LESSONS_4, ...LESSONS_5];
