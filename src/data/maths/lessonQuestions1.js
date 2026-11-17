// Extra end-of-lesson questions for the Mathematics Form 1 lessons, by lesson
// id. The correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const QUESTIONS_1 = {
  // ---------- Term 1 ----------
  'ma-numerals-1': [
    Q('The Roman numeral MCMLX stands for:', ['1960', '2160', '1940', '1560'], 'M = 1000, CM = 900, LX = 60.'),
    Q('Which number is written XIX in Roman numerals?', ['19', '21', '11', '9'], 'X + IX = 10 + 9.'),
    Q('In Egyptian numerals, the lotus flower stands for:', ['1000', '100', '10', '10 000'], 'A stroke is 1, a heel bone 10, a coil of rope 100.'),
    Q('The idea that makes Hindu-Arabic numerals so useful is:', ['Place value with a zero', 'Using letters', 'Repeating symbols up to nine times', 'Writing from right to left'], 'Ten digits are enough to write any number.'),
  ],
  'ma-placevalue-1': [
    Q('In 7 254 913, the value of the digit 2 is:', ['200 000', '2000', '20 000', '2 000 000'], 'The 2 is in the hundred thousands place.'),
    Q('Sixty thousand and eight written in figures is:', ['60 008', '6008', '600 008', '60 080'], '60 thousands and 8 units.'),
    Q('Which is true?', ['30 099 < 30 909', '30 909 < 30 099', '3 990 > 30 099', '30 099 = 30 909'], 'The hundreds digits are 0 and 9.'),
    Q('A telephone number is an example of:', ['A code read digit by digit', 'A quantity to be added', 'A Roman numeral', 'A fraction'], 'Its digits are never added up.'),
  ],
  'ma-bases-1': [
    Q('In base five, the place values from the right are:', ['1, 5, 25, 125', '1, 10, 100, 1000', '1, 2, 4, 8', '5, 10, 15, 20'], 'Each place is five times the place on its right.'),
    Q('101₂ in base ten is:', ['5', '101', '3', '6'], '4 + 0 + 1 = 5.'),
    Q('17 in base ten written in base two is:', ['10001₂', '10010₂', '1111₂', '10011₂'], '17 = 16 + 1.'),
    Q('Which of these cannot be a number in base five?', ['352', '234', '4', '1001'], 'The digit 5 never appears in base five.'),
  ],
  'ma-lines-1': [
    Q('The notation (AB) means:', ['The whole straight line through A and B', 'The segment from A to B', 'The length from A to B', 'The half-line starting at A'], 'Round brackets on both sides: it goes on for ever both ways.'),
    Q('3.5 m is equal to:', ['350 cm', '35 cm', '3500 cm', '0.35 cm'], '1 m = 100 cm.'),
    Q('The half-line that starts at A and passes through B is written:', ['[AB)', '(AB)', '[AB]', '(AB]'], 'The square bracket is at the starting point A.'),
    Q('A, B and C are collinear, with C between A and B. AC = 5 cm and CB = 2.5 cm. Then AB =', ['7.5 cm', '2.5 cm', '12.5 cm', '5 cm'], 'AB = AC + CB.'),
  ],
  'ma-midpoint-1': [
    Q('To construct a perpendicular bisector, the compass opening must be:', ['More than half of the segment', 'Less than half of the segment', 'Exactly the length of the segment only', 'Changed between the two ends'], 'Otherwise the arcs do not cross.'),
    Q('Every point on the perpendicular bisector of [AB] is:', ['Equidistant from A and B', 'On the segment [AB]', 'Nearer to A than to B', 'At A or at B'], 'This is the key property of the perpendicular bisector.'),
    Q('AB = 11 cm and M is the midpoint of [AB]. Then MB =', ['5.5 cm', '11 cm', '22 cm', '6 cm'], 'MB = AB ÷ 2.'),
    Q('M is on [AB], AM = 4 cm and MB = 6 cm. Then:', ['AB = 10 cm and M is not the midpoint', 'AB = 10 cm and M is the midpoint', 'AB = 2 cm', 'AB = 24 cm'], 'MA + MB = AB, but MA and MB are not equal.'),
  ],
  'ma-parallel-1': [
    Q('The symbol ∥ means:', ['Is parallel to', 'Is perpendicular to', 'Is equal to', 'Is a midpoint of'], 'The symbol ⊥ means "is perpendicular to".'),
    Q('(D) ∥ (L) and (L) ∥ (M). Then:', ['(D) ∥ (M)', '(D) ⊥ (M)', '(D) and (M) cross at one point', 'Nothing can be said'], 'Two lines parallel to a third line are parallel to each other.'),
    Q('Lines that cross at one point are called:', ['Secant lines', 'Parallel lines', 'Collinear lines', 'Equal lines'], 'Secant means "cutting".'),
    Q('To draw a perpendicular to a line through a point, you use:', ['The right-angle corner of a set square', 'Only a protractor with no ruler', 'A thermometer', 'Only the edge of a ruler'], 'The two short edges of the set square meet at 90°.'),
  ],
  'ma-naturals-1': [
    Q('Which number belongs to ℕ but not to ℕ*?', ['0', '1', '10', '−1'], 'ℕ* is ℕ without zero.'),
    Q('10⁵ =', ['100 000', '50', '10 000', '1 000 000'], '1 followed by five zeros.'),
    Q('Which property is shown by 9 × (4 + 6) = 9 × 4 + 9 × 6?', ['Distributive', 'Commutative', 'Associative', 'Identity'], 'The multiplication spreads over the addition.'),
    Q('Which number makes 37 + □ = 37 true?', ['0', '1', '37', '74'], '0 does not change a sum.'),
  ],
  'ma-integers-1': [
    Q('(−5) + (−3) =', ['−8', '8', '−2', '2'], 'Same signs: add the sizes and keep the minus.'),
    Q('The opposite of −9 is:', ['9', '−9', '0', '1/9'], 'It is the same distance from 0 on the other side.'),
    Q('−3 − 4 =', ['−7', '−1', '1', '7'], 'Start at −3 and move 4 to the left.'),
    Q('Which list is in ascending order?', ['−6, −2, 0, 4', '−2, −6, 0, 4', '0, −2, −6, 4', '4, 0, −2, −6'], 'The most negative number comes first.'),
  ],
  'ma-bodmas-1': [
    Q('(−8) × 5 =', ['−40', '40', '−13', '3'], 'Different signs give a negative answer.'),
    Q('(−42) ÷ (−6) =', ['7', '−7', '36', '−36'], 'The same signs give a positive answer.'),
    Q('20 − 12 ÷ 4 =', ['17', '2', '8', '−2'], 'Division first: 12 ÷ 4 = 3, then 20 − 3.'),
    Q('(−3)² =', ['9', '−9', '−6', '6'], '(−3) × (−3) = 9.'),
  ],
  'ma-time-1': [
    Q('How many seconds are there in 4 minutes?', ['240', '400', '24', '60'], '4 × 60 = 240.'),
    Q('Which of these years was NOT a leap year?', ['1900', '2000', '2024', '1996'], 'A century year must divide by 400 to be a leap year.'),
    Q('How many years are there from 200 BC to AD 300?', ['499', '500', '100', '501'], '200 + 300 − 1, because there is no year 0.'),
    Q('The year 2026 is in the:', ['21st century', '20th century', '2nd century', '26th century'], 'The 21st century runs from 2001 to 2100.'),
  ],
  'ma-clock-1': [
    Q('17:20 on the 12-hour clock is:', ['5:20 p.m.', '7:20 p.m.', '5:20 a.m.', '17:20 p.m.'], '17 − 12 = 5, and it is after noon.'),
    Q('A film starts at 19:45 and lasts 1 h 50 min. It ends at:', ['21:35', '20:35', '21:95', '21:15'], '19:45 + 2 h = 21:45, then 10 minutes back gives 21:35.'),
    Q('Just after midnight, 12:15 a.m. on the 24-hour clock is:', ['00:15', '12:15', '24:15', '00:45'], 'The day starts at 00:00.'),
    Q('When it is 15:00 in Yaoundé (UTC+1), the time in Accra (UTC+0) is:', ['14:00', '16:00', '15:00', '13:00'], 'Accra is 1 hour behind Yaoundé.'),
  ],
  'ma-temperature-1': [
    Q('Which temperature is the coldest?', ['−9 °C', '−2 °C', '0 °C', '3 °C'], 'The most negative reading is the coldest.'),
    Q('Pure water freezes at:', ['0 °C', '100 °C', '37 °C', '−10 °C'], 'And it boils at 100 °C at sea level.'),
    Q('A temperature of 25 °C written in kelvin is about:', ['298 K', '248 K', '25 K', '273 K'], 'K = °C + 273.'),
    Q('The temperature is 6 °C and falls by 10 degrees. It is now:', ['−4 °C', '4 °C', '−16 °C', '16 °C'], '6 − 10 = −4.'),
  ],
  'ma-angles-1': [
    Q('A right angle measures:', ['90°', '180°', '45°', '360°'], 'It is a quarter turn.'),
    Q('An angle of 72° is:', ['Acute', 'Obtuse', 'Right', 'Reflex'], 'It is less than 90°.'),
    Q('How many degrees are there in a full turn?', ['360°', '180°', '90°', '100°'], 'A half turn is 180°.'),
    Q('To draw a reflex angle of 300°, you can draw on the other side an angle of:', ['60°', '120°', '30°', '300°'], '360 − 300 = 60.'),
  ],
  'ma-anglefacts-1': [
    Q('The supplement of 64° is:', ['116°', '26°', '296°', '64°'], 'Supplementary angles add up to 180°.'),
    Q('Two angles at a point are 200° and x. Then x =', ['160°', '20°', '180°', '100°'], '360 − 200 = 160.'),
    Q('Two adjacent angles on a straight line are equal. Each one measures:', ['90°', '180°', '45°', '60°'], '180 ÷ 2 = 90.'),
    Q('Two lines cross and one angle is 125°. The angle next to it on the same straight line is:', ['55°', '125°', '235°', '65°'], '180 − 125 = 55.'),
  ],
  'ma-anglebisect-1': [
    Q('The bisector of an angle cuts it into:', ['Two equal angles', 'Two right angles only', 'Three equal angles', 'Two unequal angles'], 'To bisect is to cut into two equal parts.'),
    Q('The first arc of the construction of a bisector is drawn with the compass point on:', ['The vertex', 'The end of one arm', 'The midpoint of an arm', 'Any point inside the angle'], 'It cuts both arms at the same distance from the vertex.'),
    Q('Bisecting a straight angle gives two angles of:', ['90°', '180°', '45°', '60°'], '180 ÷ 2 = 90, so it gives a perpendicular.'),
    Q('Each half of an angle of 150° measures:', ['75°', '150°', '30°', '300°'], '150 ÷ 2 = 75.'),
  ],

  // ---------- Term 2 ----------
  'ma-factors-1': [
    Q('Which of these numbers is a square number?', ['49', '18', '24', '50'], '7 × 7 = 49.'),
    Q('The next triangular number after 1, 3, 6, 10 is:', ['15', '14', '12', '16'], 'Add 5 to 10.'),
    Q('Which number is neither prime nor composite?', ['1', '2', '9', '11'], '1 has only one factor.'),
    Q('The first three multiples of 7 are:', ['7, 14, 21', '1, 7, 49', '7, 17, 27', '1, 2, 7'], 'They are in the 7 times table.'),
  ],
  'ma-divisibility-1': [
    Q('Which number is divisible by 25?', ['3475', '3455', '3410', '3520'], 'Its last two digits, 75, are in the list 00, 25, 50, 75.'),
    Q('Which number is divisible by 9?', ['6372', '6371', '6374', '6370'], '6 + 3 + 7 + 2 = 18, a multiple of 9.'),
    Q('A number divisible by both 3 and 4 is always divisible by:', ['12', '7', '24', '9'], '12 = 3 × 4.'),
    Q('Which number is divisible by 50?', ['2350', '2325', '2305', '2375'], 'It ends in 50.'),
  ],
  'ma-hcflcm-1': [
    Q('The prime factorisation of 72 is:', ['2³ × 3²', '2² × 3³', '8 × 9', '2 × 3 × 12'], '72 = 2 × 2 × 2 × 3 × 3.'),
    Q('The HCF of 18 and 30 is:', ['6', '3', '90', '2'], '18 = 2 × 3² and 30 = 2 × 3 × 5; common primes: 2 × 3.'),
    Q('∛64 =', ['4', '8', '16', '21⅓'], '4 × 4 × 4 = 64.'),
    Q('Buses leave a park every 15 minutes and taxis every 20 minutes. If both leave together at 7:00, they next leave together at:', ['8:00', '7:35', '7:30', '7:20'], 'The LCM of 15 and 20 is 60 minutes.'),
  ],
  'ma-circle-1': [
    Q('A segment from the centre of a circle to the circle is a:', ['Radius', 'Chord', 'Secant', 'Arc'], 'All the radii of a circle are equal.'),
    Q('The region between a chord and an arc is a:', ['Segment', 'Sector', 'Radius', 'Diameter'], 'A sector is between two radii and an arc.'),
    Q('Two circles of radii 6 cm and 2 cm have centres 8 cm apart. They:', ['Touch from outside at one point', 'Cut at two points', 'Do not meet', 'Have the same centre'], '6 + 2 = 8, the distance between the centres.'),
    Q('A line that cuts a circle at two points is a:', ['Secant', 'Radius', 'Sector', 'Centre'], 'The part of it inside the circle is a chord.'),
  ],
  'ma-circumference-1': [
    Q('The area of a circle of radius 10 cm, with π = 3.14, is:', ['314 cm²', '62.8 cm²', '31.4 cm²', '100 cm²'], 'A = 3.14 × 10 × 10.'),
    Q('The circumference of a circle of radius 14 cm is (π = 22/7):', ['88 cm', '44 cm', '616 cm', '28 cm'], 'C = 2 × 22/7 × 14 = 88.'),
    Q('π is the circumference of a circle divided by its:', ['Diameter', 'Radius', 'Area', 'Chord'], 'C ÷ d = π for every circle.'),
    Q('A circle has a diameter of 28 cm. Its area is (π = 22/7):', ['616 cm²', '2464 cm²', '88 cm²', '154 cm²'], 'r = 14 cm and 22/7 × 14 × 14 = 616.'),
  ],
  'ma-fractions-1': [
    Q('Which fraction is a proper fraction?', ['5/8', '8/5', '9/9', '12/7'], 'Its numerator is smaller than its denominator.'),
    Q('19/4 written as a mixed number is:', ['4 3/4', '3 4/4', '4 1/4', '15 4/19'], '19 ÷ 4 = 4 remainder 3.'),
    Q('Which fraction is equivalent to 2/5?', ['8/20', '4/15', '5/2', '6/10'], 'Multiply top and bottom by 4.'),
    Q('Which is larger, 3/7 or 2/5?', ['3/7', '2/5', 'They are equal', 'It cannot be told'], 'Over 35: 15/35 and 14/35.'),
  ],
  'ma-fracops-1': [
    Q('1/2 + 1/3 =', ['5/6', '2/5', '2/6', '1/5'], '3/6 + 2/6 = 5/6.'),
    Q('The reciprocal of 3/8 is:', ['8/3', '3/8', '−3/8', '1/8'], 'Turn the fraction upside down.'),
    Q('4/9 ÷ 2/3 =', ['2/3', '8/27', '6/9', '3/2'], '4/9 × 3/2 = 12/18 = 2/3.'),
    Q('3/4 of 2000 FCFA is:', ['1500 FCFA', '500 FCFA', '2667 FCFA', '1200 FCFA'], '2000 ÷ 4 × 3 = 1500.'),
  ],
  'ma-decimals-1': [
    Q('0.37 written as a fraction is:', ['37/100', '37/10', '3/7', '37/1000'], 'The 7 is in the hundredths place.'),
    Q('Which fraction gives a terminating decimal?', ['7/20', '1/3', '5/6', '2/9'], '20 = 2² × 5 has no prime factors other than 2 and 5.'),
    Q('Which decimal is the largest?', ['0.6', '0.59', '0.509', '0.06'], '6 tenths is more than 5 tenths.'),
    Q('1/8 written as a decimal is:', ['0.125', '0.8', '0.18', '1.8'], '1 ÷ 8 = 0.125.'),
  ],
  'ma-decops-1': [
    Q('12.5 + 3.75 =', ['16.25', '15.125', '4.00', '16.3'], 'Line up the decimal points.'),
    Q('45.6 ÷ 100 =', ['0.456', '4.56', '4560', '0.0456'], 'Move the point two places to the left.'),
    Q('8.296 correct to 1 decimal place is:', ['8.3', '8.2', '8.29', '8.0'], 'The next digit is 9, so round up.'),
    Q('3 080 000 written in standard form is:', ['3.08 × 10⁶', '30.8 × 10⁵', '3.8 × 10⁶', '3.08 × 10⁵'], 'Move the point 6 places to the left.'),
  ],
  'ma-triangles-1': [
    Q('Each angle of an equilateral triangle is:', ['60°', '90°', '45°', '180°'], '180 ÷ 3 = 60.'),
    Q('A triangle with one angle of 110° is:', ['Obtuse-angled', 'Acute-angled', 'Right-angled', 'Equilateral'], '110° is an obtuse angle.'),
    Q('The two acute angles of a right-angled triangle add up to:', ['90°', '180°', '45°', '60°'], '180 − 90 = 90.'),
    Q('A triangle with no two sides equal is:', ['Scalene', 'Isosceles', 'Equilateral', 'Right-angled'], 'Its angles are all different too.'),
  ],
  'ma-trilines-1': [
    Q('The three medians of a triangle meet at the:', ['Centroid', 'Orthocentre', 'Vertex', 'Hypotenuse'], 'It is the centre of gravity of the triangle.'),
    Q('The point where the three perpendicular bisectors of a triangle meet is:', ['The same distance from the three vertices', 'Always a vertex', 'Always outside the triangle', 'The midpoint of a side'], 'It is the centre of the circle through the three vertices.'),
    Q('How many heights does a triangle have?', ['3', '1', '2', '6'], 'One from each vertex.'),
    Q('A median of a triangle joins a vertex to:', ['The midpoint of the opposite side', 'Another vertex', 'The orthocentre', 'The opposite side at right angles'], 'The segment at right angles is a height.'),
  ],
  'ma-triconstruct-1': [
    Q('To construct a triangle from its three sides, you need:', ['A ruler and compasses', 'Only a protractor', 'Only a set square', 'A thermometer'], 'The compasses give the third vertex.'),
    Q('A right-angled triangle has sides of 6 cm and 8 cm at the right angle. Its area is:', ['24 cm²', '48 cm²', '14 cm²', '28 cm²'], '½ × 6 × 8.'),
    Q('An equilateral triangle has a side of 7 cm. Its perimeter is:', ['21 cm', '14 cm', '49 cm', '7 cm'], '3 × 7.'),
    Q('Which three lengths can make a triangle?', ['4 cm, 5 cm and 7 cm', '2 cm, 2 cm and 5 cm', '1 cm, 3 cm and 5 cm', '3 cm, 4 cm and 9 cm'], '4 + 5 = 9 is more than 7.'),
  ],

  // ---------- Term 3 ----------
  'ma-ratio-1': [
    Q('The ratio 500 g : 2 kg in its simplest form is:', ['1 : 4', '500 : 2', '4 : 1', '1 : 400'], '2 kg = 2000 g, and 500 : 2000 = 1 : 4.'),
    Q('A class has 15 boys and 20 girls. The ratio of girls to boys is:', ['4 : 3', '3 : 4', '15 : 20', '20 : 35'], '20 : 15 = 4 : 3.'),
    Q('35 sweets are shared in the ratio 3 : 4. The larger share is:', ['20 sweets', '15 sweets', '28 sweets', '4 sweets'], '7 shares of 5: 4 × 5 = 20.'),
    Q('Concrete is mixed with cement, sand and gravel in the ratio 1 : 2 : 4. In 14 buckets of the mixture, the gravel is:', ['8 buckets', '4 buckets', '2 buckets', '7 buckets'], '7 shares of 2 buckets: 4 × 2 = 8.'),
  ],
  'ma-percent-1': [
    Q('0.45 written as a percentage is:', ['45%', '4.5%', '0.45%', '450%'], 'Multiply by 100.'),
    Q('A price of 8000 FCFA falls by 25%. The new price is:', ['6000 FCFA', '2000 FCFA', '7975 FCFA', '10 000 FCFA'], '25% of 8000 is 2000.'),
    Q('Write 7 out of 20 as a percentage:', ['35%', '7%', '20%', '14%'], '7 ÷ 20 × 100 = 35.'),
    Q('To increase an amount by 10%, multiply it by:', ['1.1', '0.1', '10', '0.9'], '100% + 10% = 110% = 1.1.'),
  ],
  'ma-proportion-1': [
    Q('3 pens cost 450 FCFA. At the same price, 7 pens cost:', ['1050 FCFA', '1350 FCFA', '150 FCFA', '3150 FCFA'], '1 pen costs 150 FCFA, and 7 × 150 = 1050.'),
    Q('On a map with a scale of 1 : 100 000, 1 cm stands for:', ['1 km', '100 m', '10 km', '100 km'], '100 000 cm = 1000 m = 1 km.'),
    Q('In a table of proportionality the first row is 2, 4, 6 and the second row is 10, 20, 30. The coefficient is:', ['5', '8', '2', '10'], '10 ÷ 2 = 5.'),
    Q('Which of these is NOT proportional?', ['A person’s height and their age', 'The cost of rice and its mass at a fixed price', 'Distance on a map and distance on the ground', 'The cost of books and their number at a fixed price'], 'People stop growing, so height is not a fixed multiple of age.'),
  ],
  'ma-quads-1': [
    Q('The diagonals of a rectangle are:', ['Equal and bisect each other', 'Always at right angles', 'Parallel', 'Never equal'], 'They cross at right angles only if it is a square.'),
    Q('A parallelogram with four equal sides is a:', ['Rhombus', 'Trapezium', 'Kite', 'Rectangle'], 'If its angles are also right angles, it is a square.'),
    Q('The angles of a quadrilateral add up to:', ['360°', '180°', '90°', '540°'], 'A diagonal cuts it into two triangles.'),
    Q('Which quadrilateral has only one pair of parallel sides?', ['A trapezium', 'A parallelogram', 'A rhombus', 'A square'], 'The others have two pairs.'),
  ],
  'ma-quadarea-1': [
    Q('The area of a square of side 12 cm is:', ['144 cm²', '48 cm²', '24 cm²', '120 cm²'], '12 × 12 = 144.'),
    Q('1 hectare is equal to:', ['10 000 m²', '1000 m²', '100 m²', '100 000 m²'], 'A square 100 m by 100 m.'),
    Q('A rectangle has an area of 48 m² and a length of 8 m. Its width is:', ['6 m', '40 m', '56 m', '384 m'], '48 ÷ 8 = 6.'),
    Q('The perimeter of a rhombus of side 6.5 cm is:', ['26 cm', '13 cm', '42.25 cm', '19.5 cm'], '4 × 6.5 = 26.'),
  ],
  'ma-symmetry-1': [
    Q('How many lines of symmetry does a circle have?', ['An endless number', '1', '2', '4'], 'Every diameter is a line of symmetry.'),
    Q('A point on the axis of a line symmetry:', ['Is its own image', 'Moves to the other side', 'Has no image', 'Moves to the origin'], 'Its distance from the axis is 0.'),
    Q('The image of a segment 5 cm long by a line symmetry is:', ['A segment 5 cm long', 'A segment 10 cm long', 'A point', 'A circle'], 'A line symmetry keeps lengths.'),
    Q('How many lines of symmetry does a rhombus (not a square) have?', ['2', '4', '1', '0'], 'Its two diagonals.'),
  ],
  'ma-pointsym-1': [
    Q('A point symmetry is the same as a turn of:', ['180°', '90°', '360°', '45°'], 'It is a half turn about the centre.'),
    Q('Which capital letter has a centre of symmetry?', ['Z', 'A', 'T', 'V'], 'A half turn fits Z onto itself.'),
    Q('The image of a line by a point symmetry is:', ['A line parallel to it', 'A line perpendicular to it', 'Always the same line', 'A circle'], 'A half turn keeps directions.'),
    Q('Where is the centre of symmetry of a parallelogram?', ['Where its diagonals cross', 'At a vertex', 'At the midpoint of a side', 'Outside the shape'], 'The diagonals bisect each other there.'),
  ],
  'ma-coords-1': [
    Q('The coordinates of the origin are:', ['(0, 0)', '(1, 1)', '(0, 1)', '(1, 0)'], 'The axes cross there.'),
    Q('The point (5, 0) lies:', ['On the x-axis', 'On the y-axis', 'At the origin', 'In the second quadrant'], 'Its y-coordinate is 0.'),
    Q('In the point (2, −7), the ordinate is:', ['−7', '2', '−5', '9'], 'The ordinate is the y-coordinate.'),
    Q('The image of (−1, 4) by reflection in the x-axis is:', ['(−1, −4)', '(1, 4)', '(1, −4)', '(4, −1)'], 'Reflection in the x-axis changes the sign of y.'),
  ],
  'ma-solids-1': [
    Q('How many vertices does a cuboid have?', ['8', '6', '12', '4'], 'Like the corners of a box.'),
    Q('The net of a cube is made of:', ['6 squares', '4 squares', '6 rectangles of different sizes', '8 triangles'], 'One square for each face.'),
    Q('The distance from the apex of a cone to the edge of its base is the:', ['Slant height', 'Height', 'Radius', 'Diameter'], 'The height goes straight down to the centre of the base.'),
    Q('The net of a cone is made of:', ['A sector of a circle and a circle', 'A rectangle and two circles', 'Two triangles', 'Six squares'], 'The sector folds round to make the curved surface.'),
  ],
  'ma-volume-1': [
    Q('A cube has edges of 3 cm. Its volume is:', ['27 cm³', '9 cm³', '54 cm³', '18 cm³'], '3 × 3 × 3.'),
    Q('2.5 litres is equal to:', ['2500 cm³', '250 cm³', '25 cm³', '25 000 cm³'], '1 litre = 1000 cm³.'),
    Q('1 m³ is equal to:', ['1000 litres', '100 litres', '10 litres', '1 litre'], '1 m³ = 1 000 000 cm³ = 1000 litres.'),
    Q('The total surface area of a cube with edges of 4 cm is:', ['96 cm²', '64 cm²', '16 cm²', '48 cm²'], '6 × 4 × 4 = 96.'),
  ],
  'ma-cylinder-1': [
    Q('The volume of a cylinder is found with:', ['πr²h', '2πrh', '2πr', 'πr²'], 'The area of the base times the height.'),
    Q('In the net of a cylinder, the length of the rectangle is:', ['The circumference of a base, 2πr', 'The height h', 'The radius r', 'The diameter only'], 'It wraps once round the base.'),
    Q('A cylinder has a radius of 7 cm and a height of 2 cm. Its volume is (π = 22/7):', ['308 cm³', '88 cm³', '154 cm³', '616 cm³'], '22/7 × 49 × 2 = 308.'),
    Q('Which object is a cylinder?', ['A tin of milk', 'A funnel', 'A brick', 'A football'], 'It has two equal circular ends.'),
  ],
  'ma-data-1': [
    Q('The number of children in a family is an example of:', ['Discrete data', 'Continuous data', 'Qualitative data', 'A sample'], 'It is a count.'),
    Q('Favourite fruit is an example of:', ['Qualitative data', 'Continuous data', 'Discrete data', 'A frequency'], 'Its values are words, not numbers.'),
    Q('Asking only 100 of the 2000 people in a town is a:', ['Sample', 'Census', 'Pictogram', 'Tally'], 'A census asks everybody.'),
    Q('The number of times a value occurs is its:', ['Frequency', 'Mode', 'Sample', 'Key'], 'It is written in the frequency table.'),
  ],
  'ma-charts-1': [
    Q('In a pictogram, the note that says what one picture stands for is the:', ['Key', 'Title', 'Axis', 'Tally'], 'Without the key, the pictogram cannot be read.'),
    Q('The value with the highest frequency is the:', ['Mode', 'Total', 'Key', 'Sample'], 'It has the tallest bar.'),
    Q('The scale of a bar chart should start at:', ['0', 'The smallest value', '1', 'The largest value'], 'Otherwise small differences look large.'),
    Q('One symbol stands for 6 bags. How many bags do 2½ symbols stand for?', ['15', '12', '8.5', '18'], '2.5 × 6 = 15.'),
  ],
  'ma-piechart-1': [
    Q('In a pie chart of 30 pupils, the angle for one pupil is:', ['12°', '30°', '360°', '6°'], '360 ÷ 30 = 12.'),
    Q('A sector of 60° in a pie chart of 90 people stands for:', ['15 people', '60 people', '30 people', '6 people'], '60 ÷ 360 × 90 = 15.'),
    Q('A pie chart is best for showing:', ['How a whole is shared out', 'Exact frequencies to compare', 'Changes over many years', 'A list of names'], 'Each sector is a share of the whole circle.'),
    Q('In a pie chart, half of the circle stands for:', ['Half of the total', '180 items', 'A quarter of the total', 'The mode only'], '180° is half of 360°.'),
  ],
};
