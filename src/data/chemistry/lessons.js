// Every Chemistry lesson. lessons12 holds Forms 1 and 2; lessons1 and lessons2 hold the first course; lessons3
// (Form 3) and lessons45 (Forms 4 and 5) add the MINESEC class topics it did not
// cover. Each class topic in units.js lists its lessons by id.
// Original text written for this app. **double asterisks** mark key terms.
import { LESSONS_12 } from './lessons12';
import { LESSONS_1 } from './lessons1';
import { LESSONS_2 } from './lessons2';
import { LESSONS_3 } from './lessons3';
import { LESSONS_45 } from './lessons45';

export const LESSONS = [...LESSONS_12, ...LESSONS_1, ...LESSONS_2, ...LESSONS_3, ...LESSONS_45];
