// Mathematics lessons for Form 1, term 2: factors, multiples and primes, the
// circle, fractions, decimals and standard form, triangles. Original text
// written for this app, following the MINESEC Form 1 syllabus.
// **double asterisks** mark key terms; `examples` are worked examples.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Class work',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_1B = [
  // ---------- Factors, multiples and primes ----------
  L('ma-factors-1', 'ma-f1-factors', '6.1', 'Factors, multiples, primes and number patterns', 12, ['Numbers'], [
    'Numbers can be shown as patterns of dots (figure). **Even** numbers (0, 2, 4, 6, …) make two equal rows; **odd** numbers (1, 3, 5, 7, …) always leave one dot over. **Square numbers** 1, 4, 9, 16, 25, … make squares, and **triangular numbers** 1, 3, 6, 10, 15, … make triangles. Twelve dots make a rectangle 1 by 12, 2 by 6 or 3 by 4.',
    'A **factor** (or divisor) of a number divides it exactly: the factors of 12 are 1, 2, 3, 4, 6 and 12. They come in pairs whose product is 12: 1 × 12, 2 × 6 and 3 × 4. A **multiple** of a number is in its times table: the multiples of 12 are 12, 24, 36, 48, … . So 3 is a factor of 12, and 12 is a multiple of 3.',
    'A **prime number** has exactly two factors, 1 and itself: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, … . A number with more than two factors is **composite**, for example 9 = 3 × 3. The number 1 has only one factor, so it is neither prime nor composite, and 2 is the only even prime.',
    'To find the primes up to 50, use the **sieve of Eratosthenes**: write the numbers 2 to 50; keep 2 and cross out every other multiple of 2; keep 3 and cross out its other multiples; do the same with 5 and with 7. The 15 numbers left are the primes up to 50.',
  ], 'mf1-dot-patterns', 'To find all the factors of a number, try 1, 2, 3, … and stop when the divisor times itself is bigger than the number.',
  ['How many factors does 18 have?', ['6', '4', '5', '3'], '1, 2, 3, 6, 9 and 18.'],
  [['Factor', 'A whole number that divides another exactly.'], ['Multiple', 'A number in the times table of another.'], ['Prime number', 'A number with exactly two factors, 1 and itself.'], ['Composite number', 'A number with more than two factors.']],
  [
    { q: 'List the factors of 36 and say whether 36 is a square number.', steps: ['The factor pairs are 1 × 36, 2 × 18, 3 × 12, 4 × 9 and 6 × 6.', 'Factors: **1, 2, 3, 4, 6, 9, 12, 18 and 36**.', '6 × 6 = 36, so 36 is a **square number**; like every square number it has an odd number of factors (9).'] },
    { q: 'Which of 51, 53, 57 and 59 are prime?', steps: ['51 = 3 × 17, so it is composite.', '57 = 3 × 19, so it is composite.', '53 and 59 do not divide by 2, 3, 5 or 7, and 8 × 8 = 64 is already too big, so **53 and 59 are prime**.'] },
  ]),

  L('ma-divisibility-1', 'ma-f1-factors', '6.2', 'Tests of divisibility', 10, ['Numbers'], [
    'A **test of divisibility** tells you whether a number divides exactly, without doing the division (figure). A whole number is divisible by:\n- **2** if its last digit is even (0, 2, 4, 6 or 8)\n- **3** if the sum of its digits is divisible by 3\n- **4** if its last two digits make a number divisible by 4\n- **5** if its last digit is 0 or 5\n- **6** if it is divisible by both 2 and 3\n- **10** if its last digit is 0.',
    'Also, a number is divisible by:\n- **12** if it is divisible by both 3 and 4\n- **25** if its last two digits are 00, 25, 50 or 75\n- **50** if its last two digits are 00 or 50\n- **100** if its last two digits are 00.',
    'For example, 7 236 is divisible by 2 (it ends in 6), by 3 (7 + 2 + 3 + 6 = 18) and by 4 (36 = 4 × 9), so it is divisible by 6 and by 12 as well; it is not divisible by 5 or by 10.',
    'Why the test for 3 works: 10, 100, 1000, … are each 1 more than a multiple of 3 (9, 99, 999, …), so a number and the sum of its digits leave the same remainder when divided by 3. The same reasoning gives the test for 9: the sum of the digits is divisible by 9.',
  ], 'mf1-divisibility', 'For 6 and 12, use two tests together: 6 = 2 × 3 and 12 = 3 × 4.',
  ['Which of these numbers is divisible by 6?', ['7 314', '7 315', '7 316', '7 322'], '7 314 is even and 7 + 3 + 1 + 4 = 15 is divisible by 3.'],
  [['Divisible', 'Able to be divided exactly, with no remainder.'], ['Test of divisibility', 'A quick rule that shows whether one number divides another.'], ['Digit sum', 'The sum of the digits of a number: the digit sum of 471 is 12.']],
  [
    { q: 'Is 4 572 divisible by 3, by 4, by 6 and by 12?', steps: ['Digit sum: 4 + 5 + 7 + 2 = 18, divisible by 3: **yes for 3**.', 'Last two digits: 72 = 4 × 18: **yes for 4**.', 'Even and divisible by 3: **yes for 6**. Divisible by 3 and by 4: **yes for 12** (4 572 = 12 × 381).'] },
    { q: 'The number 4d5 has a missing digit d. Which values of d make it divisible by both 3 and 5?', steps: ['It ends in 5, so it is divisible by 5 whatever d is.', 'For 3, the digit sum 4 + d + 5 = 9 + d must be a multiple of 3.', 'So **d = 0, 3, 6 or 9**, giving 405, 435, 465 and 495.'] },
  ]),

  L('ma-hcflcm-1', 'ma-f1-factors', '6.3', 'Prime factorisation, HCF, LCM and roots', 14, ['Numbers'], [
    'Every composite number can be written as a product of primes in only one way: its **prime factorisation**. Use a factor tree or divide again and again by primes: 360 = 2 × 180 = 2 × 2 × 90 = … = 2 × 2 × 2 × 3 × 3 × 5 = 2³ × 3² × 5.',
    'The **HCF** (highest common factor) of two numbers is the largest number that divides both. Write each number as a product of primes and take each **common** prime with its **lowest** power: 24 = 2³ × 3 and 36 = 2² × 3², so the HCF is 2² × 3 = 12 (figure).',
    'The **LCM** (lowest common multiple) is the smallest number that both divide. Take **every** prime that appears, with its **highest** power: the LCM of 24 and 36 is 2³ × 3² = 72. For any two numbers, HCF × LCM = the product of the two numbers: 12 × 72 = 24 × 36 = 864. The HCF answers questions about the largest equal groups; the LCM answers questions about when things happen together again.',
    '**Square and cube roots** by prime factors: when every power in the factorisation is even, the number is a perfect square, and halving the powers gives its square root: 576 = 2⁶ × 3², so √576 = 2³ × 3 = 24. When every power divides by 3, the number is a perfect cube: 1728 = 2⁶ × 3³, so ∛1728 = 2² × 3 = 12.',
  ], 'mf1-hcf-venn', 'HCF: common primes, lowest powers. LCM: all the primes, highest powers.',
  ['The LCM of 6 and 10 is:', ['30', '60', '2', '16'], '6 = 2 × 3 and 10 = 2 × 5, so the LCM is 2 × 3 × 5.'],
  [['Prime factorisation', 'A number written as a product of prime numbers.'], ['HCF', 'The highest common factor: the largest number that divides all the given numbers.'], ['LCM', 'The lowest common multiple: the smallest number that all the given numbers divide.'], ['Square root', 'The number that, multiplied by itself, gives the given number: √49 = 7.'], ['Cube root', 'The number that, used three times in a product, gives the given number: ∛27 = 3.']],
  [
    { q: 'A trader has 84 oranges and 126 mangoes to put into identical bags, with nothing left over and as many bags as possible. How many bags are there, and what is in each?', steps: ['84 = 2² × 3 × 7 and 126 = 2 × 3² × 7.', 'HCF = 2 × 3 × 7 = 42, so there are **42 bags**.', 'Each bag holds 84 ÷ 42 = **2 oranges** and 126 ÷ 42 = **3 mangoes**.'] },
    { q: 'Find √324 using prime factors.', steps: ['324 = 2 × 162 = 2 × 2 × 81 = 2² × 3⁴.', 'Every power is even, so halve them: √324 = 2 × 3² = **18**.'] },
  ]),

  // ---------- The circle ----------
  L('ma-circle-1', 'ma-f1-circle', '7.1', 'Parts of a circle and the positions of two circles', 12, ['Geometry'], [
    'A **circle** is the set of all the points at the same distance from a fixed point, its **centre** O. That distance is the **radius** r. The circle is the curved line itself; the flat region inside it, together with the circle, is a **disc**.',
    'The parts of a circle (figure):\n- **radius**: a segment from the centre to the circle\n- **chord**: a segment joining two points of the circle\n- **diameter**: a chord through the centre; d = 2r, and it is the longest chord\n- **arc**: a part of the circle between two of its points\n- **sector**: the region between two radii and an arc, like a slice of cake\n- **segment**: the region between a chord and an arc\n- **secant**: a line that cuts the circle at two points\n- **circumference**: the length of the whole circle.',
    'To draw a circle of radius 4 cm, open the compasses to 4 cm against a ruler, put the point on the centre and turn the pencil all the way round without changing the opening.',
    'Two circles with centres O and O′ and radii r and r′ (r bigger than or equal to r′) are placed according to the distance OO′ between their centres:\n- OO′ > r + r′: each is outside the other and they do not meet\n- OO′ = r + r′: they touch from outside at one point\n- r − r′ < OO′ < r + r′: they cut each other at two points\n- OO′ = r − r′: they touch from inside\n- OO′ < r − r′: one is inside the other.',
  ], 'mf1-circle-parts', 'Compare the distance between the centres with the sum and with the difference of the radii.',
  ['The longest chord of a circle is:', ['A diameter', 'A radius', 'An arc', 'A secant'], 'A diameter passes through the centre.'],
  [['Centre', 'The fixed point that every point of a circle is the same distance from.'], ['Radius', 'The distance, or a segment, from the centre to the circle.'], ['Diameter', 'A chord through the centre, twice the radius.'], ['Chord', 'A segment joining two points of a circle.'], ['Sector', 'The region between two radii and an arc.'], ['Segment of a circle', 'The region between a chord and an arc.']],
  [
    { q: 'Two circles have radii of 5 cm and 3 cm, and their centres are 6 cm apart. How are they placed?', steps: ['Sum of the radii: 5 + 3 = 8 cm. Difference: 5 − 3 = 2 cm.', '6 is between 2 and 8, so the circles **cut each other at two points**.'] },
    { q: 'A chord [AB] of a circle is 8 cm long. Can the radius of the circle be 3 cm?', steps: ['The longest chord is a diameter, so the diameter is at least 8 cm.', 'A radius of 3 cm gives a diameter of only 6 cm, shorter than the chord.', 'So **no**: the radius must be at least 4 cm.'] },
  ]),

  L('ma-circumference-1', 'ma-f1-circle', '7.2', 'The circumference and area of a circle', 12, ['Geometry', 'Mensuration'], [
    'Measure the circumference C and the diameter d of any round object (a tin, a plate, a bicycle wheel) and divide: you always get a little more than 3. This number is **π** (the Greek letter pi): C ÷ d = π = 3.14159… . In calculations we use π ≈ 3.14 or π ≈ 22/7.',
    '**Circumference**: C = πd = 2πr. A wheel of radius 35 cm has a circumference of 2 × 22/7 × 35 = 220 cm, so it moves 220 cm forward each time it turns once.',
    '**Area**: A = πr². To see why, cut a disc into many thin sectors and lay them top to tail (figure). They make a shape close to a rectangle whose length is half the circumference, πr, and whose width is the radius r. Its area is πr × r = πr².',
    'A circumference is a length (cm, m); an area is in square units (cm², m²), and 1 m² = 10 000 cm². Use the radius in A = πr²: if you are given the diameter, halve it first.',
  ], 'mf1-circle-area', 'Choose π = 22/7 when the radius is a multiple of 7, and π = 3.14 otherwise.',
  ['The circumference of a circle of radius 10 cm, with π = 3.14, is:', ['62.8 cm', '31.4 cm', '314 cm', '628 cm'], 'C = 2 × 3.14 × 10 = 62.8.'],
  [['Pi (π)', 'The circumference of any circle divided by its diameter, about 3.14 or 22/7.'], ['Circumference', 'The length of the whole circle: C = 2πr.'], ['Area of a circle', 'The surface inside a circle: A = πr².'], ['Square centimetre', 'The area of a square 1 cm by 1 cm, written cm².']],
  [
    { q: 'The round lid of a water tank has a diameter of 1.4 m. Find its area (π = 22/7).', steps: ['r = 1.4 ÷ 2 = 0.7 m.', 'A = πr² = 22/7 × 0.7 × 0.7 = 22/7 × 0.49.', 'A = 22 × 0.07 = **1.54 m²**.'] },
    { q: 'A bicycle wheel has a radius of 35 cm. How many complete turns does it make on a road 1.1 km long?', steps: ['Circumference = 2 × 22/7 × 35 = 220 cm = 2.2 m.', '1.1 km = 1100 m.', 'Number of turns = 1100 ÷ 2.2 = **500**.'] },
  ]),

  // ---------- Fractions ----------
  L('ma-fractions-1', 'ma-f1-fractions', '8.1', 'Kinds of fractions, equivalent fractions and order', 12, ['Numbers'], [
    'A **fraction** such as 3/4 names part of a whole: the **denominator** 4 tells into how many equal parts the whole is cut, and the **numerator** 3 how many of the parts are taken. A fraction is also a division: 3/4 = 3 ÷ 4. Numbers that can be written as a fraction of two integers, with a bottom that is not zero, form the set ℚ of **rational numbers**: 3/4, −2/5 and 7 = 7/1 are all rational.',
    'Kinds of fraction:\n- **proper** fraction: the numerator is smaller than the denominator (5/8)\n- **improper** fraction: the numerator is equal or bigger (11/4)\n- **mixed number**: a whole number and a proper fraction (2 3/4).\nTo change 11/4 into a mixed number: 11 ÷ 4 = 2 remainder 3, so 11/4 = 2 3/4. To change back: 2 × 4 + 3 = 11, so 2 3/4 = 11/4.',
    '**Equivalent fractions** have the same value: 1/2 = 2/4 = 4/8 (figure). Multiply or divide the numerator and the denominator by the same non-zero number. A fraction is in its **lowest terms** when its numerator and denominator have no common factor except 1: divide both by their HCF, so 18/24 = 3/4 (the HCF is 6).',
    'To **compare** fractions, write them with a common denominator, best the LCM of the denominators. To compare 5/6 and 7/9 use 18: 15/18 and 14/18, so 5/6 > 7/9. Of two fractions with the same numerator, the one with the smaller denominator is larger: 2/5 > 2/7.',
  ], 'fraction-bars', 'Always give a final answer in its lowest terms.',
  ['24/36 in its lowest terms is:', ['2/3', '4/6', '12/18', '3/4'], 'Divide both by the HCF, 12.'],
  [['Numerator', 'The top number of a fraction: how many parts are taken.'], ['Denominator', 'The bottom number of a fraction: how many equal parts make the whole.'], ['Equivalent fractions', 'Fractions with the same value, such as 1/2 and 4/8.'], ['Mixed number', 'A whole number and a proper fraction, such as 2 3/4.'], ['Rational number', 'A number that can be written as a fraction of two integers.']],
  [
    { q: 'Arrange 5/6, 3/4, 7/9 and 2/3 in descending order.', steps: ['The LCM of 6, 4, 9 and 3 is 36.', '5/6 = 30/36, 3/4 = 27/36, 7/9 = 28/36 and 2/3 = 24/36.', 'Descending order: **5/6, 7/9, 3/4, 2/3**.'] },
    { q: 'Write 2 5/7 as an improper fraction, and 29/6 as a mixed number.', steps: ['2 5/7 = (2 × 7 + 5)/7 = **19/7**.', '29 ÷ 6 = 4 remainder 5, so 29/6 = **4 5/6**.'] },
  ]),

  L('ma-fracops-1', 'ma-f1-fractions', '8.2', 'Adding, subtracting, multiplying and dividing fractions', 14, ['Numbers'], [
    '**Adding and subtracting**: write the fractions with a common denominator (best the LCM), then add or subtract the numerators: 2/3 + 1/4 = 8/12 + 3/12 = 11/12, and 5/6 − 3/8 = 20/24 − 9/24 = 11/24. With mixed numbers, add the whole numbers and the fractions separately, or change them into improper fractions first.',
    '**Multiplying**: multiply the numerators together and the denominators together, simplifying first if you can: 2/3 × 3/4 = 6/12 = 1/2. The figure shows this as an area: take 3/4 of a rectangle, then 2/3 of that part. "Of" means multiply: 2/5 of 60 = 2/5 × 60 = 24.',
    '**Dividing**: to divide by a fraction, multiply by its **reciprocal** (the fraction turned upside down): 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8. The reciprocal of 2/5 is 5/2, and the reciprocal of 7 is 1/7.',
    'Change mixed numbers into improper fractions before multiplying or dividing: 1 1/2 × 2 2/3 = 3/2 × 8/3 = 24/6 = 4.',
  ], 'mf1-fraction-area', 'Never add the denominators: 1/2 + 1/3 is 5/6, not 2/5.',
  ['3/4 − 1/6 =', ['7/12', '2/10', '1/2', '5/12'], '9/12 − 2/12 = 7/12.'],
  [['Common denominator', 'A denominator that all the fractions in a calculation can be written with.'], ['Reciprocal', 'The number you multiply by to get 1: the reciprocal of 2/5 is 5/2.'], ['Simplify', 'To divide the numerator and the denominator by a common factor.']],
  [
    { q: 'A farmer plants 3/8 of a field with maize and 1/3 with beans. What fraction of the field is left?', steps: ['Planted: 3/8 + 1/3 = 9/24 + 8/24 = 17/24.', 'Left: 1 − 17/24 = **7/24** of the field.'] },
    { q: 'How many pieces of cloth 3/4 m long can be cut from 7 1/2 m?', steps: ['7 1/2 = 15/2.', '15/2 ÷ 3/4 = 15/2 × 4/3 = 60/6 = 10.', '**10 pieces**.'] },
  ]),

  // ---------- Decimals and standard form ----------
  L('ma-decimals-1', 'ma-f1-decimals', '9.1', 'Decimal fractions and recurring decimals', 12, ['Numbers'], [
    'A **decimal fraction** has a denominator of 10, 100, 1000, … and is written with a **decimal point**: 7/10 = 0.7, 37/100 = 0.37 (figure: 37 squares out of 100) and 5/1000 = 0.005. After the point the places are tenths, hundredths and thousandths.',
    '**Decimal to fraction**: write the digits over the right power of ten and simplify: 0.65 = 65/100 = 13/20 and 2.4 = 24/10 = 12/5.',
    '**Fraction to decimal**: divide the numerator by the denominator: 3/8 = 3 ÷ 8 = 0.375. Some divisions stop, and the decimal **terminates** (1/4 = 0.25); this happens when the denominator, in lowest terms, has no prime factors other than 2 and 5. Others never stop and a block of digits repeats: 2/3 = 0.666… and 5/11 = 0.454 545… . These are **recurring** decimals, written with a dot over the repeating digits, or as "0.6 recurring".',
    'To compare decimals, line up the points and compare the digits from the left: 0.508 > 0.45 because 5 tenths are more than 4 tenths. Zeros added at the end after the point do not change a decimal: 0.5 = 0.50 = 0.500.',
  ], 'mf1-hundred-square', 'To compare decimals, first give them all the same number of decimal places.',
  ['0.04 written as a fraction in its lowest terms is:', ['1/25', '4/10', '1/4', '2/5'], '0.04 = 4/100 = 1/25.'],
  [['Decimal fraction', 'A fraction with a denominator of 10, 100, 1000, … written with a decimal point.'], ['Terminating decimal', 'A decimal that stops, such as 0.375.'], ['Recurring decimal', 'A decimal in which a block of digits repeats for ever, such as 0.454 545 …'], ['Decimal point', 'The dot that separates the whole number from the tenths.']],
  [
    { q: 'Change 7/20 and 5/6 into decimals.', steps: ['7/20 = 35/100 = **0.35**; it terminates because 20 = 2² × 5.', '5/6 = 5 ÷ 6 = 0.8333… = **0.83 recurring**, because 6 has the prime factor 3.'] },
    { q: 'Arrange 0.7, 0.07, 0.707 and 0.077 in ascending order.', steps: ['Write them all with 3 decimal places: 0.700, 0.070, 0.707, 0.077.', 'Ascending order: **0.07, 0.077, 0.7, 0.707**.'] },
  ]),

  L('ma-decops-1', 'ma-f1-decimals', '9.2', 'Calculating with decimals, decimal places and standard form', 14, ['Numbers'], [
    '**Adding and subtracting**: line up the decimal points, fill empty places with zeros and work as with whole numbers: 12.5 + 3.75 = 16.25, and 8 − 2.36 = 8.00 − 2.36 = 5.64.',
    '**Multiplying**: multiply without the points, then count the decimal places in the question; the answer has that many. For 3.7 × 0.4: 37 × 4 = 148, with two decimal places, so 1.48. Multiplying by 10, 100 or 1000 moves the point 1, 2 or 3 places to the right: 2.35 × 100 = 235.',
    '**Dividing**: make the divisor a whole number by multiplying both numbers by the same power of 10: 12.6 ÷ 0.3 = 126 ÷ 3 = 42. Dividing by 10, 100 or 1000 moves the point to the left: 45.6 ÷ 100 = 0.456.',
    '**Rounding to decimal places** (d.p.): look at the next digit; 5 or more rounds up. So 5.2846 is 5.28 to 2 d.p. and 5.285 to 3 d.p.',
    '**Standard form** writes a number as A × 10ⁿ with 1 ≤ A < 10 and n a whole number (figure): 45 000 = 4.5 × 10⁴ and 352.7 = 3.527 × 10². It is used for very large numbers, such as the distance from the Earth to the Sun, about 1.5 × 10⁸ km.',
  ], 'mf1-standard-form', 'Check a decimal answer with a rough estimate: 3.7 × 0.4 is about 4 × 0.4 = 1.6, so 1.48 is sensible.',
  ['2.35 × 100 =', ['235', '23.5', '0.0235', '2350'], 'Move the point two places to the right.'],
  [['Decimal place', 'A place after the decimal point: tenths are the first decimal place.'], ['Standard form', 'A number written as A × 10ⁿ with 1 ≤ A < 10.'], ['Estimate', 'A rough answer found with rounded numbers, used to check a calculation.']],
  [
    { q: 'A customer buys 3.5 m of cloth at 1800 FCFA a metre and pays with a 10 000 FCFA note. How much change do they get?', steps: ['Cost: 3.5 × 1800 = 6300 FCFA.', 'Change: 10 000 − 6300 = **3700 FCFA**.'] },
    { q: 'Write 352.7 and 6 040 000 in standard form.', steps: ['352.7: move the point 2 places to the left to get 3.527, so 352.7 = **3.527 × 10²**.', '6 040 000: move the point 6 places to the left to get 6.04, so 6 040 000 = **6.04 × 10⁶**.'] },
  ]),

  // ---------- Triangles ----------
  L('ma-triangles-1', 'ma-f1-triangles', '10.1', 'Kinds of triangles and the angle sum', 12, ['Geometry'], [
    'A **triangle** has three vertices, three sides and three angles. Triangle ABC is written △ABC; the side opposite the vertex A is [BC].',
    'By their sides, triangles are:\n- **scalene**: no two sides equal\n- **isosceles**: two equal sides; the angles opposite them, the base angles, are equal\n- **equilateral**: three equal sides; each angle is 60°.\nBy their angles: **acute-angled** (all three angles acute), **right-angled** (one right angle; the side opposite it is the **hypotenuse**) or **obtuse-angled** (one obtuse angle).',
    '**The angles of a triangle add up to 180°.** Tear the three corners off a paper triangle and put them side by side: they make a straight angle (figure). So the third angle of a triangle is 180° minus the other two.',
    'It follows that a triangle cannot have two right angles, or a right angle and an obtuse angle; the two acute angles of a right-angled triangle add up to 90°; and each angle of an equilateral triangle is 180° ÷ 3 = 60°.',
  ], 'mf1-angle-sum', 'Mark equal sides with the same small dashes and equal angles with the same arcs on your sketch.',
  ['A right-angled triangle has one angle of 35°. Its third angle is:', ['55°', '145°', '35°', '65°'], '180 − 90 − 35 = 55.'],
  [['Scalene triangle', 'A triangle with no two sides equal.'], ['Isosceles triangle', 'A triangle with two equal sides and two equal base angles.'], ['Equilateral triangle', 'A triangle with three equal sides and three angles of 60°.'], ['Hypotenuse', 'The side opposite the right angle in a right-angled triangle.']],
  [
    { q: 'In the isosceles triangle PQR, PQ = PR and ∠P = 52°. Find ∠Q and ∠R.', steps: ['The base angles ∠Q and ∠R are equal.', 'Together they make 180 − 52 = 128°.', '∠Q = ∠R = 128 ÷ 2 = **64°**.'] },
    { q: 'The angles of a triangle are 40°, 65° and x. Find x and name the type of triangle.', steps: ['x = 180 − 40 − 65 = **75°**.', 'All three angles are acute and all are different, so it is an **acute-angled scalene** triangle.'] },
  ]),

  L('ma-trilines-1', 'ma-f1-triangles', '10.2', 'Heights, medians and perpendicular bisectors of a triangle', 12, ['Geometry', 'Construction'], [
    'A **height** (or altitude) of a triangle is the segment from a vertex perpendicular to the opposite side, or to that side made longer. Every triangle has three heights, and the three heights (made longer if needed) meet at one point, the **orthocentre** H (figure).',
    'A **median** joins a vertex to the **midpoint** of the opposite side. The three medians meet at one point, the **centroid** G, the centre of gravity: a cardboard triangle balances on a pencil point placed at G.',
    'The **perpendicular bisector** of a side passes through its midpoint at right angles. The three perpendicular bisectors meet at one point O, which is the same distance from the three vertices, so the circle with centre O through one vertex passes through all three (the circumscribed circle).',
    'To construct the height from A with a set square, lay one short edge of the set square along [BC], slide it until the other short edge passes through A, and draw from A down to [BC]. In an obtuse-angled triangle, two of the heights fall outside the triangle, on sides made longer.',
  ], 'mf1-triangle-lines', 'In a right-angled triangle, two of the heights are sides of the triangle, so the orthocentre is the vertex of the right angle.',
  ['The segment from a vertex of a triangle perpendicular to the opposite side is a:', ['Height', 'Median', 'Perpendicular bisector', 'Diameter'], 'Heights are drawn with a set square.'],
  [['Height (altitude)', 'The segment from a vertex perpendicular to the opposite side.'], ['Median', 'The segment from a vertex to the midpoint of the opposite side.'], ['Orthocentre', 'The point where the three heights of a triangle meet.'], ['Centroid', 'The point where the three medians meet; the centre of gravity.']],
  [
    { q: 'In △ABC, M is the midpoint of [BC] and BC = 9 cm, so [AM] is a median. Find BM.', steps: ['M is the midpoint of [BC], so BM = MC.', 'BM = 9 ÷ 2 = **4.5 cm**.'] },
    { q: 'In △DEF the angle at E is 90°. Where is the orthocentre?', steps: ['[ED] is perpendicular to [EF], so [ED] is the height from D and [EF] is the height from F.', 'These two heights meet at E, so the orthocentre is **the vertex E**.'] },
  ]),

  L('ma-triconstruct-1', 'ma-f1-triangles', '10.3', 'Constructing triangles; perimeter and area', 14, ['Geometry', 'Construction'], [
    'A triangle can be constructed exactly when you know:\n- its three sides\n- two sides and the angle between them\n- one side and the two angles at its ends.',
    '**Three sides**, for example AB = 6 cm, AC = 5 cm and BC = 4 cm (figure): draw [AB] 6 cm long; open the compasses to 5 cm and draw an arc from A; open them to 4 cm and draw an arc from B; the arcs cross at C; join [AC] and [BC]. This is only possible when each side is shorter than the sum of the other two (the **triangle inequality**).',
    '**Two sides and the angle between them**: draw one side, measure the angle at one end with a protractor, mark the second side along that arm and join the ends. **One side and two angles**: draw the side and the two angles at its ends; the arms cross at the third vertex.',
    'The **perimeter** of a triangle is the sum of its three sides. Its **area** is half the base times the height: A = ½ × b × h, where h is the height drawn to that base. Any side can be the base, as long as you use the height that goes with it. In a right-angled triangle the two sides at the right angle are a base and its height: with 6 cm and 8 cm, A = ½ × 6 × 8 = 24 cm².',
  ], 'mf1-construct-triangle', 'Leave your construction arcs on the drawing: they show how you found the vertices.',
  ['A triangle has a base of 9 cm and a height of 4 cm. Its area is:', ['18 cm²', '36 cm²', '13 cm²', '26 cm²'], '½ × 9 × 4 = 18.'],
  [['Construction', 'An exact drawing made with a ruler, compasses and protractor.'], ['Triangle inequality', 'Each side of a triangle is shorter than the sum of the other two.'], ['Perimeter', 'The total length of the sides of a shape.'], ['Base and height', 'A side of a triangle and the perpendicular distance to it from the opposite vertex.']],
  [
    { q: 'Can a triangle be drawn with sides of 3 cm, 4 cm and 8 cm?', steps: ['The two shorter sides add up to 3 + 4 = 7 cm.', '7 cm is less than 8 cm, so the arcs drawn from the ends of the 8 cm side never meet.', '**No**, this triangle cannot be drawn.'] },
    { q: 'A triangular plot of land has a base of 24 m and a height of 15 m. Land costs 5000 FCFA per square metre. What is the plot worth?', steps: ['Area = ½ × 24 × 15 = 180 m².', 'Value = 180 × 5000 = **900 000 FCFA**.'] },
  ]),
];
