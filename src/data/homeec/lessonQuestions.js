// Extra questions for the end of Home Economics lessons, so that every lesson
// ends with at least five questions on what it teaches (see src/lib/lessonQuiz.js).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'he-diet-2': [
    Q('Skipping breakfast is a bad habit because it:', ['Reduces concentration at school', 'Makes you taller', 'Prevents tooth decay', 'Adds iron to the blood'], 'The body and brain need energy in the morning.'),
    Q('Too many sugary drinks and sweets can lead to:', ['Tooth decay and obesity', 'Stronger bones', 'Better eyesight', 'More protein'], 'Water is the best drink.'),
    Q('Which meal has a food from each of the three groups?', ['Corn fufu with njama-njama and fish', 'Garri with sugar', 'Plain rice', 'Sweets and a soft drink'], 'Energy (fufu), body-building (fish) and protective (njama-njama).'),
  ],
  'he-cleaning-2': [
    Q('When cleaning, you should work:', ['From clean areas to dirty areas', 'From dirty areas to clean areas', 'Only on the floor', 'In any order'], 'This avoids spreading dirt into clean places.'),
    Q('Keeping a house clean helps furniture and equipment to:', ['Last longer', 'Break faster', 'Gather dust', 'Lose their value'], 'Dirt and pests damage them.'),
  ],
  'he-shopping-2': [
    Q('A "best before" date on food is about:', ['Quality', 'Safety', 'Price', 'Weight'], 'A "use by" date is about safety.'),
    Q('Buying something without planning, on a sudden wish, is:', ['Impulse buying', 'Budgeting', 'Saving', 'Comparing prices'], 'A shopping list helps avoid it.'),
  ],
  'he-childsafety-2': [
    Q('Plastic bags must be kept out of a young child’s reach because they can cause:', ['Suffocation', 'Burns', 'Electric shock', 'Falls'], 'A bag over the face stops breathing.'),
    Q('Bath water for a baby should be tested first with the:', ['Elbow', 'Toes', 'Tongue', 'Back of the head'], 'The elbow is more sensitive to heat than the hand.'),
  ],
};
