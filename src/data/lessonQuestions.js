// Extra end-of-lesson questions, by lesson id, from each subject (see
// src/lib/lessonQuiz.js for how a lesson's questions are put together).
import { LESSON_QUESTIONS as BIOLOGY } from './biology/lessonQuestions';
import { LESSON_QUESTIONS as CHEMISTRY } from './chemistry/lessonQuestions';
import { LESSON_QUESTIONS as PHYSICS } from './physics/lessonQuestions';
import { LESSON_QUESTIONS as HUMANBIO } from './humanbio/lessonQuestions';
import { LESSON_QUESTIONS as A_PHYSICS } from './a-physics/lessonQuestions';
import { LESSON_QUESTIONS as A_CHEMISTRY } from './a-chemistry/lessonQuestions';
import { LESSON_QUESTIONS as COMPUTER } from './computer/lessonQuestions';
import { LESSON_QUESTIONS as GEOGRAPHY } from './geography/lessonQuestions';
import { LESSON_QUESTIONS as HOMEEC } from './homeec/lessonQuestions';

export const LESSON_QUESTIONS = { ...BIOLOGY, ...CHEMISTRY, ...PHYSICS, ...HUMANBIO, ...A_PHYSICS, ...A_CHEMISTRY, ...COMPUTER, ...GEOGRAPHY, ...HOMEEC };
