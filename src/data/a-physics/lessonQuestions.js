// Extra questions for the end of A Level Physics lessons, so that every lesson
// ends with at least five questions on what it teaches (see src/lib/lessonQuiz.js).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'ap-circ-1': [
    Q('An angle of π radians is equal to:', ['180°', '90°', '360°', '57°'], '2π rad = 360°.'),
    Q('Water stays in a bucket swung in a vertical circle at the top of the circle only if:', ['v² ≥ rg', 'v² < rg', 'v = 0', 'The bucket is swung slowly'], 'At the top, gravity alone must not exceed the centripetal force needed.'),
  ],
  'ap-elec-2': [
    Q('Maximum power is delivered to an external load when its resistance:', ['Equals the internal resistance of the source', 'Is zero', 'Is very large', 'Is twice the internal resistance'], 'The efficiency is then only 50%.'),
    Q('On a graph of terminal p.d. V against current I for a cell, the gradient is:', ['−r, minus the internal resistance', 'The e.m.f.', 'The current', 'Zero'], 'V = E − Ir; the intercept is E.'),
  ],
  'ap-elec-3': [
    Q('An LDR is used in a street-light circuit because its resistance:', ['Changes with light intensity', 'Is always zero', 'Depends only on temperature', 'Never changes'], 'In the dark its resistance rises, changing the output of the potential divider.'),
    Q('In a metre bridge with R = 10 Ω, balance is found at l = 40.0 cm. Using X/R = l/(100 − l), X is:', ['6.7 Ω', '15 Ω', '4.0 Ω', '25 Ω'], 'X = 10 × 40 ÷ 60 = 6.7 Ω.'),
  ],
  'ap-matter-2': [
    Q('In a narrow glass capillary tube, mercury:', ['Is depressed below the outside level', 'Rises higher than water', 'Rises to the top', 'Behaves exactly like water'], 'Its cohesion is greater than its adhesion to glass.'),
    Q('Capillary rise is larger in:', ['Narrower tubes', 'Wider tubes', 'Tubes full of air', 'Tubes with detergent added'], 'h = 2γ cos θ/(ρgr): h is inversely proportional to r.'),
  ],
  'ap-ac-2': [
    Q('A conducting silicon diode drops about:', ['0.7 V', '7 V', '0.07 V', '1.4 V'], 'A bridge, with two diodes conducting, loses about 1.4 V.'),
    Q('The variation left in the output after smoothing is called the:', ['Ripple', 'Peak', 'Bias', 'Time constant'], 'A larger RC gives a smaller ripple.'),
  ],
  'ap-option-1': [
    Q('Doubling the wind speed increases the power available from the wind by a factor of:', ['8', '2', '4', '16'], 'P = ½ρAv³, so 2³ = 8.'),
    Q('Which of these is a renewable energy source?', ['Geothermal energy', 'Uranium', 'Natural gas', 'Coal'], 'Renewable sources are replenished naturally.'),
  ],
};
