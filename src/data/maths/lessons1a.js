// Mathematics lessons for Form 1, term 1: numerals and bases, points and
// lines, natural numbers and integers, time and temperature, angles. Original
// text written for this app, following the MINESEC Form 1 syllabus.
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

export const LESSONS_1A = [
  // ---------- Numbers and numerals ----------
  L('ma-numerals-1', 'ma-f1-numerals', '1.1', 'Egyptian, Roman and Hindu-Arabic numerals', 12, ['Numbers'], [
    'A **number** is an idea of how many; a **numeral** is the symbol we write for it. People have written numbers in many ways. The syllabus studies three systems: Egyptian, Roman and Hindu-Arabic numerals.',
    'The ancient **Egyptians** (from about 3000 BC) used one picture for each power of ten:\n- a stroke for 1\n- a heel bone (an arch) for 10\n- a coil of rope for 100\n- a lotus flower for 1000\n- a raised finger for 10 000\n- a tadpole for 100 000\n- a kneeling man with raised arms for 1 000 000.\nA symbol was repeated up to nine times and the values were added, so the order did not matter: 3 coils, 4 arches and 2 strokes make 342.',
    '**Roman numerals** use seven letters: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Letters written from large to small are added: XVII = 10 + 5 + 1 + 1 = 17. A smaller letter written before a larger one is subtracted, but only in six pairs: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900. No letter is repeated more than three times in a row, so 40 is XL, not XXXX. Roman numerals are still seen on clock faces, in chapter numbers and in the names of kings and popes.',
    '**Hindu-Arabic numerals** are the ten digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 that we use today. They were invented in India and carried to Europe by Arab scholars. Their great idea is **place value** with a **zero**: a digit is worth more as it moves to the left, so ten symbols are enough to write any number, and calculating is easy.',
  ], 'mf1-numerals', 'To write a number in Roman numerals, split it into thousands, hundreds, tens and units first: 1994 = 1000 + 900 + 90 + 4 = M CM XC IV = MCMXCIV.',
  ['Which number does the Roman numeral CDXLIX stand for?', ['449', '651', '429', '1449'], 'CD = 400, XL = 40 and IX = 9.'],
  [['Numeral', 'A symbol or group of symbols that stands for a number.'], ['Digit', 'One of the ten symbols 0 to 9 of the Hindu-Arabic system.'], ['Place value', 'The value a digit has because of its position in a number.'], ['Roman numeral', 'A number written with the letters I, V, X, L, C, D and M.']],
  [
    { q: 'Write 2748 in Roman numerals.', steps: ['Split it up: 2748 = 2000 + 700 + 40 + 8.', '2000 = MM, 700 = DCC, 40 = XL and 8 = VIII.', 'So 2748 = **MMDCCXLVIII**.'] },
    { q: 'An Egyptian scribe drew 2 lotus flowers, 5 coils of rope, 1 heel bone and 6 strokes. What number is this?', steps: ['2 lotus flowers = 2 × 1000 = 2000.', '5 coils of rope = 5 × 100 = 500; 1 heel bone = 10; 6 strokes = 6.', 'Total: 2000 + 500 + 10 + 6 = **2516**.'] },
  ]),

  L('ma-placevalue-1', 'ma-f1-numerals', '1.2', 'Place value and large numbers', 12, ['Numbers'], [
    'In a Hindu-Arabic number each place is worth **ten times** the place on its right: units, tens, hundreds, thousands, ten thousands, hundred thousands, millions, and so on. In 52 708 the 5 is worth 50 000, the 2 is worth 2000, the 7 is worth 700, the 0 keeps the tens place empty and the 8 is worth 8. In **expanded form**: 52 708 = 50 000 + 2000 + 700 + 8.',
    'To read a large number, split its digits into groups of three from the right. Each group is a **period**: units, thousands, millions, billions (figure). Many books leave a small space between the periods, others a comma: 27 914 600 or 27,914,600. It is read "twenty-seven million, nine hundred and fourteen thousand, six hundred".',
    'To compare two whole numbers, the one with more digits is larger. If they have the same number of digits, compare the digits from the left until two of them differ. The signs < (is less than) and > (is greater than) point to the smaller number: 9 807 < 10 012 and 4 562 > 4 526. Numbers written from the smallest to the largest are in **ascending order**; from the largest to the smallest, in **descending order**.',
    'Numbers carry information in daily life. A telephone number such as 677 12 34 56, a car number plate or a candidate number is a **code**: it is read digit by digit and never added. A meter reading, a price or the population of a town is a **quantity**: there, place value matters.',
  ], 'mf1-periods', 'Write a large number in a place-value table before reading it, and put 0 in every empty place.',
  ['In 4 063 215, the digit 6 is worth:', ['60 000', '6000', '600 000', '6'], 'Counting from the right: units, tens, hundreds, thousands, ten thousands.'],
  [['Period', 'A group of three places: units, thousands, millions, billions.'], ['Expanded form', 'A number written as the sum of the values of its digits.'], ['Ascending order', 'From the smallest to the largest.'], ['Descending order', 'From the largest to the smallest.']],
  [
    { q: 'Write 1 305 270 in words and say what each 0 does.', steps: ['Split it into periods: 1 | 305 | 270.', 'Read each period: **one million, three hundred and five thousand, two hundred and seventy**.', 'The first 0 keeps the ten thousands place empty; the last 0 keeps the units place empty.'] },
    { q: 'Arrange in ascending order: 45 210, 45 102, 405 120, 4 521.', steps: ['4 521 has only 4 digits, so it is the smallest; 405 120 has 6 digits, so it is the largest.', 'Compare 45 210 and 45 102: the hundreds digits are 2 and 1, so 45 102 < 45 210.', 'Order: **4 521 < 45 102 < 45 210 < 405 120**.'] },
  ]),

  L('ma-bases-1', 'ma-f1-numerals', '1.3', 'Counting in base ten and in other bases', 12, ['Numbers'], [
    'We count in **base ten** because we group in tens: ten units make a ten, ten tens make a hundred, and the digits go from 0 to 9. Objects can be grouped in other sizes too: eggs and pencils are often sold in dozens (twelves), and minutes are grouped in sixties to make hours.',
    'In **base five** we group in fives. The places are units, fives, twenty-fives (5 × 5) and one hundred and twenty-fives (5 × 5 × 5), and only the digits 0 to 4 are used. Twenty-three oranges packed in bags of five give 4 full bags and 3 left over (figure), so 23 in base five is 43₅. The small 5 written after the number names the base.',
    'In **base two** (binary) we group in twos. The places are 1, 2, 4, 8, 16, 32, … and only the digits 0 and 1 are used. Computers and phones store every number in binary, because a tiny electric switch is either off (0) or on (1).',
    'To change a number in base b into base ten, multiply each digit by its place value and add: 213₅ = 2 × 25 + 1 × 5 + 3 = 58. To change from base ten into base b, divide again and again by b and read the remainders from the bottom up.',
  ], 'mf1-bases', 'A digit can never be equal to or bigger than its base: 5 never appears in base five, and 2 never appears in base two.',
  ['What is 34₅ in base ten?', ['19', '34', '17', '7'], '3 × 5 + 4 = 19.'],
  [['Base', 'The size of the groups used in counting; it is also the number of digits the system uses.'], ['Binary', 'Base two, using only the digits 0 and 1.'], ['Remainder', 'What is left over when one number does not divide another exactly.']],
  [
    { q: 'Change 38 into base five.', steps: ['38 ÷ 5 = 7 remainder 3', '7 ÷ 5 = 1 remainder 2', '1 ÷ 5 = 0 remainder 1', 'Read the remainders upwards: 38 = **123₅**. Check: 25 + 10 + 3 = 38.'] },
    { q: 'Change 10110₂ into base ten.', steps: ['The place values from the right are 1, 2, 4, 8 and 16.', '1 × 16 + 0 × 8 + 1 × 4 + 1 × 2 + 0 × 1', '= 16 + 4 + 2 = **22**.'] },
  ]),

  // ---------- Points, lines and constructions ----------
  L('ma-lines-1', 'ma-f1-lines', '2.1', 'Points, lines, segments and half-lines', 12, ['Geometry'], [
    'A **point** marks a position and has no size. It is named with a capital letter and drawn as a small cross or dot: the point A.',
    'A **straight line** goes on for ever in both directions. Through two different points A and B there is exactly one straight line, written **(AB)**. A line can also be named with one letter in brackets, such as (D) or (L).',
    'A **line segment** is the part of a line between two **end points**. The segment from A to B is written **[AB]**, and its length is written AB without brackets, for example AB = 6 cm. A **half-line** (or ray) starts at one point and goes on for ever in one direction: **[AB)** starts at A and passes through B, while **(AB]** starts at B and passes through A.',
    'Points that lie on the same straight line are **collinear**. Lengths are measured in metres (m), kilometres and parts of a metre: 1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm. To change to a smaller unit, multiply; to change to a larger unit, divide.',
  ], 'lines-notation', 'The brackets tell you where the figure stops: a square bracket means it stops at that point, a round bracket means it goes on for ever.',
  ['How many straight lines can be drawn through two different points?', ['Exactly one', 'Two', 'None', 'As many as you like'], 'Two points fix one straight line.'],
  [['Line segment', 'The part of a line between two end points, written [AB].'], ['Half-line', 'A part of a line that starts at a point and goes on for ever in one direction.'], ['Collinear points', 'Points that lie on the same straight line.'], ['End point', 'A point where a segment or half-line starts or stops.']],
  [
    { q: 'A, B and C are collinear, with B between A and C. AB = 4.5 cm and BC = 3.7 cm. Find AC in millimetres.', steps: ['B is between A and C, so AC = AB + BC = 4.5 + 3.7 = 8.2 cm.', '1 cm = 10 mm, so AC = 8.2 × 10 = **82 mm**.'] },
    { q: 'A fence is 2.35 km long. Write this length in metres and in centimetres.', steps: ['1 km = 1000 m: 2.35 × 1000 = **2350 m**.', '1 m = 100 cm: 2350 × 100 = **235 000 cm**.'] },
  ]),

  L('ma-midpoint-1', 'ma-f1-lines', '2.2', 'The midpoint and the perpendicular bisector', 12, ['Geometry', 'Construction'], [
    'The **midpoint** M of a segment [AB] is the point of [AB] that is the same distance from A and from B. A point M lies on [AB] exactly when MA + MB = AB. If, as well, MA = MB, then M is the midpoint, and MA = MB = AB ÷ 2. The other way round: if M is the midpoint of [AB], then MA = MB = AB ÷ 2.',
    'To find the midpoint with a ruler, measure AB and mark half of it from A. A more exact way uses compasses (figure):\n- Open the compasses to more than half of AB.\n- With the point on A, draw an arc above [AB] and another below it.\n- Without changing the opening, do the same from B.\n- The arcs cross at two points P and Q. Join them: the line (PQ) cuts [AB] at its midpoint M.',
    'The line (PQ) is the **perpendicular bisector** of [AB]: it passes through the midpoint of [AB] and is perpendicular to it. Every point on it is the same distance from A and from B (it is **equidistant** from A and B), and every point that is equidistant from A and B lies on it. That is why the arcs work: P and Q were each drawn at the same distance from A and from B.',
    'Surveyors and builders use the same idea with a rope instead of compasses, for example to find the spot halfway between two boundary stones.',
  ], 'mf1-perp-bisector', 'Keep the compass opening the same for all four arcs; if it slips, start again.',
  ['M is the midpoint of [PQ] and PM = 4.3 cm. Then PQ =', ['8.6 cm', '4.3 cm', '2.15 cm', '12.9 cm'], 'PQ = 2 × PM.'],
  [['Midpoint', 'The point of a segment that is the same distance from both ends.'], ['Perpendicular bisector', 'The line through the midpoint of a segment, perpendicular to it.'], ['Equidistant', 'At the same distance from two points or two lines.'], ['Arc', 'A part of a circle.']],
  [
    { q: 'M is a point of [AB] with AM = 3.8 cm and AB = 7.6 cm. Is M the midpoint of [AB]?', steps: ['M is on [AB], so MB = AB − AM = 7.6 − 3.8 = 3.8 cm.', 'MA = MB = 3.8 cm, so **M is the midpoint** of [AB].'] },
    { q: 'P is a point on the perpendicular bisector of [AB], and PA = 5 cm. Find PB.', steps: ['Every point of the perpendicular bisector is equidistant from A and B.', 'So **PB = PA = 5 cm**.'] },
  ]),

  L('ma-parallel-1', 'ma-f1-lines', '2.3', 'Parallel and perpendicular lines', 12, ['Geometry', 'Construction'], [
    'Two lines in a plane either cross at one point (they are **secant**, or intersecting) or never meet (they are **parallel**). We write (D) ∥ (L) for "(D) is parallel to (L)". Railway lines, the two edges of a ruler and the lines in an exercise book are parallel.',
    'Two lines that cross at a right angle (90°) are **perpendicular**; we write (D) ⊥ (L). A small square drawn at the crossing marks the right angle. The word **orthogonal** also means "at right angles": in space two lines can be orthogonal without meeting, like the bottom edge of a classroom wall and an upright edge of the opposite wall.',
    'Three properties for lines in a plane (figure):\n- If two lines are both parallel to a third line, they are parallel to each other.\n- If two lines are both perpendicular to the same line, they are parallel to each other.\n- If a line is perpendicular to one of two parallel lines, it is perpendicular to the other one too.',
    'Constructions with a ruler and a set square:\n- **Perpendicular through a point P**: lay one short edge of the set square along the line, slide it until the other short edge touches P, then draw along that edge.\n- **Parallel through a point P**: lay one edge of the set square on the line and hold a ruler firmly against another edge; slide the set square along the ruler until its first edge reaches P, then draw.',
  ], 'mf1-parallel', 'A perpendicular needs the right-angle corner of the set square; a parallel needs the set square to slide along a ruler.',
  ['(D) ⊥ (L) and (L) ⊥ (M). What can you say about (D) and (M)?', ['(D) ∥ (M)', '(D) ⊥ (M)', 'They meet at 45°', 'Nothing at all'], 'Two lines perpendicular to the same line are parallel.'],
  [['Parallel lines', 'Lines in a plane that never meet.'], ['Perpendicular lines', 'Lines that cross at a right angle.'], ['Secant lines', 'Lines that cross at one point.'], ['Set square', 'A triangular drawing instrument with a right angle.']],
  [
    { q: '(AB) ∥ (CD) and (EF) ⊥ (AB). What is the angle between (EF) and (CD)?', steps: ['A line perpendicular to one of two parallel lines is perpendicular to the other.', 'So (EF) ⊥ (CD): the angle is **90°**.'] },
    { q: 'Describe how to draw the line through P parallel to (L) with a ruler and a set square.', steps: ['Lay one edge of the set square along (L).', 'Hold a ruler firmly against a second edge of the set square.', 'Slide the set square along the ruler until its first edge passes through P.', 'Draw along that edge: this line is **parallel to (L)**.'] },
  ]),

  // ---------- Natural numbers and integers ----------
  L('ma-naturals-1', 'ma-f1-integers', '3.1', 'The set ℕ: order, powers and properties', 12, ['Numbers'], [
    'The **natural numbers** are the counting numbers together with zero: ℕ = {0, 1, 2, 3, 4, …}. Without zero the set is written ℕ* = {1, 2, 3, …}. We write 7 ∈ ℕ ("7 belongs to ℕ") and 0 ∉ ℕ* ("0 does not belong to ℕ*"). Every natural number has a next one, so ℕ has no largest element.',
    'A **power** is a short way of writing a repeated multiplication: 2 × 2 × 2 × 2 × 2 = 2⁵, read "2 to the power 5". The 2 is the base and the 5 is the **index** (or exponent): 2⁵ = 32. a² is read "a squared" and a³ "a cubed"; a¹ = a, and 10³ = 10 × 10 × 10 = 1000.',
    'Addition and multiplication in ℕ have useful **properties** (figure):\n- **commutative**: the order does not matter: 7 + 5 = 5 + 7 and 4 × 9 = 9 × 4\n- **associative**: the grouping does not matter: (8 + 6) + 4 = 8 + (6 + 4) and (2 × 9) × 5 = 2 × (9 × 5)\n- **identity**: 0 does not change a sum (9 + 0 = 9) and 1 does not change a product (9 × 1 = 9)\n- **distributive**: multiplication spreads over addition: 6 × (10 + 3) = 6 × 10 + 6 × 3 = 78.',
    'Subtraction and division are not always possible in ℕ: 3 − 8 has no answer in ℕ, and 7 ÷ 2 is not a natural number. This is one reason for the integers in the next lesson.',
  ], 'mf1-properties', 'Use the properties to calculate in your head: 4 × 37 × 25 = 37 × (4 × 25) = 37 × 100 = 3700.',
  ['3⁴ =', ['81', '12', '7', '64'], '3 × 3 × 3 × 3 = 81.'],
  [['ℕ', 'The set of natural numbers 0, 1, 2, 3, …'], ['Power', 'A number multiplied by itself a number of times, such as 2⁵.'], ['Index', 'The small raised number that tells how many times the base is multiplied.'], ['Distributive property', 'a × (b + c) = a × b + a × c.']],
  [
    { q: 'Work out 2³ × 5², and write 10 000 as a power of 10.', steps: ['2³ = 8 and 5² = 25.', '8 × 25 = **200**.', '10 000 = 10 × 10 × 10 × 10 = **10⁴**.'] },
    { q: 'Use the distributive property to work out 7 × 98 in your head.', steps: ['98 = 100 − 2.', '7 × 98 = 7 × 100 − 7 × 2 = 700 − 14 = **686**.'] },
  ]),

  L('ma-integers-1', 'ma-f1-integers', '3.2', 'Integers and the number line', 12, ['Numbers'], [
    'Some quantities go below zero: 3 degrees below zero is written −3 °C, a debt of 2000 FCFA can be written −2000 FCFA, and a point 5 m below sea level is at −5 m. The **integers** are the natural numbers and their negatives: ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}. Every natural number is an integer, so ℕ ⊂ ℤ.',
    'On the **integral number line** the positive integers go to the right of 0 and the negative integers to the left, equally spaced. A number is smaller than every number to its right: −5 < −2 < 0 < 3. The **opposite** of 4 is −4; a number and its opposite are the same distance from 0, on different sides.',
    'To **add** on the number line, start at the first number and move right for a positive number, left for a negative one: −2 + 5 = 3 (figure). The rules:\n- same signs: add the sizes and keep the sign: (−6) + (−9) = −15\n- different signs: subtract the smaller size from the larger and keep the sign of the larger: (−8) + 3 = −5.',
    'To **subtract** a number, add its opposite: 5 − 8 = 5 + (−8) = −3, and 5 − (−8) = 5 + 8 = 13.',
  ], 'number-line', 'Two minus signs side by side, as in 5 − (−8), become a plus.',
  ['(−7) + 4 =', ['−3', '3', '−11', '11'], 'Different signs: 7 − 4 = 3, and the larger size (7) is negative.'],
  [['Integer', 'A whole number: positive, negative or zero.'], ['ℤ', 'The set of integers.'], ['Opposite', 'The number at the same distance from 0 on the other side: the opposite of 6 is −6.'], ['Negative number', 'A number less than zero.']],
  [
    { q: 'A diver is 12 m below the surface of the sea and rises 5 m, then goes down 9 m. Where is the diver now?', steps: ['Start at −12.', 'Rise 5 m: −12 + 5 = −7.', 'Go down 9 m: −7 − 9 = −16.', 'The diver is **16 m below** the surface (−16 m).'] },
    { q: 'Arrange in ascending order: 3, −8, 0, −1, 5, −12.', steps: ['On the number line the most negative number is the furthest to the left.', '**−12 < −8 < −1 < 0 < 3 < 5**.'] },
  ]),

  L('ma-bodmas-1', 'ma-f1-integers', '3.3', 'Multiplying and dividing integers; the order of operations', 12, ['Numbers'], [
    'To **multiply or divide** two integers, work with the sizes, then decide the sign:\n- the same signs give a positive answer: 6 × 3 = 18 and (−6) × (−3) = 18\n- different signs give a negative answer: (−6) × 3 = −18 and 18 ÷ (−3) = −6.',
    'In a calculation with several operations everyone must get the same answer, so the **order of operations** is fixed (figure): first **B**rackets, then **O**rders (powers), then **D**ivision and **M**ultiplication from left to right, then **A**ddition and **S**ubtraction from left to right. The first letters spell **BODMAS**.',
    'Examples:\n- 6 + 4 × 3 = 6 + 12 = 18, not 30\n- 20 − 12 ÷ 4 = 20 − 3 = 17\n- (3 − 7) × 2² = (−4) × 4 = −16\n- 24 ÷ 4 × 2 = 6 × 2 = 12, working from left to right (not 24 ÷ 8).',
    'A power of a negative number needs brackets: (−3)² = (−3) × (−3) = 9, but −3² means −(3²) = −9.',
  ], 'mf1-bodmas', 'Write one line for each step and underline the part you will work out next.',
  ['(−5) × (−4) ÷ 2 =', ['10', '−10', '40', '−40'], '(−5) × (−4) = 20, then 20 ÷ 2 = 10.'],
  [['Order of operations', 'The agreed order for working out a calculation: brackets, powers, × and ÷, then + and −.'], ['BODMAS', 'Brackets, Orders, Division, Multiplication, Addition, Subtraction.'], ['Product', 'The answer to a multiplication.'], ['Quotient', 'The answer to a division.']],
  [
    { q: 'Work out 18 − 3 × (2 − 7).', steps: ['Brackets: 2 − 7 = −5.', 'Multiplication: 3 × (−5) = −15.', 'Subtraction: 18 − (−15) = 18 + 15 = **33**.'] },
    { q: 'Work out (−2)³ + 40 ÷ (−8).', steps: ['Power: (−2)³ = (−2) × (−2) × (−2) = −8.', 'Division: 40 ÷ (−8) = −5.', 'Addition: −8 + (−5) = **−13**.'] },
  ]),

  // ---------- Time and temperature ----------
  L('ma-time-1', 'ma-f1-time', '4.1', 'Units of time and historical time', 12, ['Numbers', 'Time'], [
    'The units of time are: 60 seconds (s) = 1 minute (min); 60 minutes = 1 hour (h); 24 hours = 1 day; 7 days = 1 week; 365 days = 1 year, or 366 days in a **leap year**; 10 years = 1 decade; 100 years = 1 **century**; 1000 years = 1 millennium.',
    'A year is a leap year when its number divides exactly by 4 (2024, 2028), except the century years, which must divide by 400: 2000 was a leap year but 1900 was not. In a leap year February has 29 days instead of 28.',
    'Historical dates are counted from the year 1, the traditional year of the birth of Jesus (figure). Years after it are written **AD** (Anno Domini), as in AD 1960. Years before it are written **BC** (before Christ) and count backwards: 500 BC is earlier than 100 BC. There is **no year 0**: 1 BC is followed by AD 1. So to find the number of years from a BC date to an AD date, add the two numbers and take away 1: from 500 BC to AD 2026 is 500 + 2026 − 1 = 2525 years.',
    'The **1st century AD** is the years AD 1 to AD 100, the 2nd century is AD 101 to 200, and so on: the 19th century is 1801 to 1900, and the 21st century began in 2001. A quick rule: take the number of hundreds and add 1, so 1884 is in the 19th century. A year ending in 00, such as 1900, is the last year of its century.',
  ], 'mf1-bc-ad', 'Draw a quick timeline before calculating with BC and AD dates.',
  ['How many days are there in 4 weeks and 3 days?', ['31', '43', '28', '34'], '4 × 7 + 3 = 31.'],
  [['Leap year', 'A year of 366 days, with 29 days in February.'], ['Century', 'A period of 100 years.'], ['Decade', 'A period of 10 years.'], ['BC and AD', 'Before Christ and Anno Domini: the years before and after the year 1.']],
  [
    { q: 'Change 3 h 25 min into minutes, and 500 seconds into minutes and seconds.', steps: ['3 h = 3 × 60 = 180 min, so 3 h 25 min = 180 + 25 = **205 min**.', '500 ÷ 60 = 8 remainder 20, so 500 s = **8 min 20 s**.'] },
    { q: 'Rome was founded in 753 BC. How many years passed between the founding of Rome and AD 1960, when East Cameroon became independent?', steps: ['One date is BC and the other AD, so add them and take away 1, because there is no year 0.', '753 + 1960 − 1 = **2712 years**.'] },
  ]),

  L('ma-clock-1', 'ma-f1-time', '4.2', 'The 12-hour and 24-hour clocks, durations and time zones', 12, ['Numbers', 'Time'], [
    'On the **12-hour clock** the day is split into two halves: **a.m.** from midnight to noon and **p.m.** from noon to midnight. 7:30 a.m. is in the morning; 7:30 p.m. is in the evening.',
    'On the **24-hour clock** the hours run from 00 to 23 and the time is written with four digits (figure): 07:30 is 7:30 a.m. and 19:30 is 7:30 p.m. Bus companies, airports and phones use it because it cannot be confused. To change:\n- a.m. times keep their hours (write a 0 in front if needed): 9:05 a.m. = 09:05, but just after midnight 12:20 a.m. = 00:20\n- p.m. times: add 12 to the hours, except between noon and 1 p.m.: 4:15 p.m. = 16:15 and 12:40 p.m. = 12:40\n- from the 24-hour clock, take 12 from any hour above 12 and write p.m.: 21:50 = 9:50 p.m.',
    'To find a **duration**, count up to the next whole hour, then the whole hours, then the minutes left. From 08:40 to 13:15: 08:40 to 09:00 is 20 min, 09:00 to 13:00 is 4 h and 13:00 to 13:15 is 15 min, so the total is 4 h 35 min.',
    'The Earth turns once in 24 hours, so the time of day is not the same all over the world. The world is divided into **time zones** measured from UTC, the reference time of the Greenwich meridian in London. Cameroon uses UTC+1, one hour ahead of UTC. Places further east are ahead: Nairobi (UTC+3) is 2 hours ahead of Yaoundé and Beijing (UTC+8) is 7 hours ahead. Places further west are behind: Accra (UTC+0) is 1 hour behind.',
  ], 'mf1-clock24', 'For another time zone, find the difference between the two UTC numbers, then add it going east or take it away going west.',
  ['What is 8:45 p.m. on the 24-hour clock?', ['20:45', '08:45', '18:45', '22:45'], 'Add 12 to the hours: 8 + 12 = 20.'],
  [['a.m. and p.m.', 'Before noon and after noon on the 12-hour clock.'], ['24-hour clock', 'A way of telling the time with hours from 00 to 23.'], ['Time zone', 'A region of the Earth that uses the same clock time.'], ['UTC', 'Coordinated Universal Time, the reference time for the world.']],
  [
    { q: 'A train leaves Douala at 07:10 and reaches Yaoundé at 11:25. How long is the journey?', steps: ['07:10 to 11:10 is 4 h.', '11:10 to 11:25 is 15 min.', 'The journey takes **4 h 15 min**.'] },
    { q: 'A match in Beijing (UTC+8) starts at 20:00 Beijing time. What time is it then in Yaoundé (UTC+1)?', steps: ['Beijing is 8 − 1 = 7 hours ahead of Yaoundé.', '20:00 − 7 h = **13:00** in Yaoundé, that is 1 p.m.'] },
  ]),

  L('ma-temperature-1', 'ma-f1-time', '4.3', 'Temperature and its units', 10, ['Numbers'], [
    '**Temperature** tells how hot or cold something is. It is measured with a **thermometer**, usually in **degrees Celsius** (°C). On the Celsius scale pure water freezes at 0 °C and boils at 100 °C at sea level, and a healthy human body is at about 37 °C.',
    'Temperatures below freezing are negative, so integers are used: −5 °C is 5 degrees below zero. A thermometer is like an upright number line (figure): a higher reading is a larger number, so −2 °C is warmer than −9 °C.',
    'A **rise** in temperature is added and a **fall** is taken away. The **change** between two temperatures is the higher one minus the lower one: from −4 °C to 9 °C the rise is 9 − (−4) = 13 degrees. In Cameroon, Maroua in the Far North often passes 40 °C in March and April, while nights near the top of Mount Cameroon can fall below 0 °C.',
    'Other units: scientists use the **kelvin** (K), with K = °C + 273 (to the nearest degree), so water freezes at 273 K. Some countries use **degrees Fahrenheit** (°F): water freezes at 32 °F and boils at 212 °F, and °F = °C × 9/5 + 32.',
  ], 'mf1-thermometer', 'For a change in temperature always work out higher − lower; the answer is the number of degrees between the two.',
  ['The temperature was −3 °C at 5 a.m. and 8 °C at noon. By how much did it rise?', ['11 degrees', '5 degrees', '−11 degrees', '8 degrees'], '8 − (−3) = 11.'],
  [['Thermometer', 'An instrument that measures temperature.'], ['Degree Celsius', 'The usual unit of temperature: water freezes at 0 °C and boils at 100 °C.'], ['Kelvin', 'The scientific unit of temperature: K = °C + 273.'], ['Freezing point', 'The temperature at which a liquid turns into a solid: 0 °C for water.']],
  [
    { q: 'Water boils at 100 °C. Write this temperature in kelvin and in degrees Fahrenheit.', steps: ['Kelvin: 100 + 273 = **373 K**.', 'Fahrenheit: 100 × 9/5 + 32 = 180 + 32 = **212 °F**.'] },
    { q: 'A freezer is at −18 °C. A bottle of water at 25 °C is put inside. By how many degrees must the water cool to reach the temperature of the freezer?', steps: ['Change = higher − lower = 25 − (−18).', '25 + 18 = **43 degrees**.'] },
  ]),

  // ---------- Angles ----------
  L('ma-angles-1', 'ma-f1-angles', '5.1', 'Naming, measuring and drawing angles', 12, ['Geometry'], [
    'An **angle** is made by two half-lines with the same starting point, the **vertex**. The half-lines are its **arms**. The angle with arms [BA) and [BC) is written ∠ABC (or ABC with a small hat over the B), the vertex always in the middle. An angle measures an amount of turning.',
    'Angles are measured in **degrees** (°). A full turn is 360°, a half turn 180° and a quarter turn 90°. The types of angle are:\n- **acute**: less than 90°\n- **right**: exactly 90°\n- **obtuse**: between 90° and 180°\n- **straight**: exactly 180°\n- **reflex**: between 180° and 360°.',
    'To **measure** an angle with a protractor (figure): put the centre of the protractor on the vertex; turn it so that its 0° line lies along one arm; then read where the other arm crosses the scale, using the scale that starts at 0° on your first arm. A protractor has two scales, one going clockwise and one anticlockwise; reading the wrong one gives 180° minus the right answer.',
    'To **draw** an angle of 65° at a point B of a line: put the centre on B with 0° on the line, mark a dot at 65° on the scale that starts from your line, and join B to the dot. A reflex angle such as 290° is drawn by making 360° − 290° = 70° on the other side.',
  ], 'mf1-protractor', 'Estimate first: if the angle is clearly acute, your reading must be less than 90°.',
  ['The two scales of a protractor show 40° and 140°, and the angle is clearly obtuse. The angle is:', ['140°', '40°', '180°', '100°'], 'An obtuse angle is more than 90°.'],
  [['Angle', 'The amount of turning between two half-lines from the same point.'], ['Vertex', 'The common starting point of the two arms of an angle.'], ['Protractor', 'An instrument for measuring and drawing angles.'], ['Reflex angle', 'An angle between 180° and 360°.']],
  [
    { q: 'Classify these angles: 15°, 90°, 179°, 180°, 200° and 345°.', steps: ['15° is **acute** and 90° is a **right** angle.', '179° is **obtuse** and 180° is a **straight** angle.', '200° and 345° are **reflex**.'] },
    { q: 'What angle do the hands of a clock make at 3 o’clock, and at 5 o’clock?', steps: ['The 12 numbers share 360°, so from one number to the next is 360 ÷ 12 = 30°.', 'At 3 o’clock the hands are 3 numbers apart: 3 × 30 = **90°**, a right angle.', 'At 5 o’clock: 5 × 30 = **150°**, an obtuse angle.'] },
  ]),

  L('ma-anglefacts-1', 'ma-f1-angles', '5.2', 'Angles on a line, at a point and vertically opposite', 12, ['Geometry'], [
    'Two angles are **adjacent** when they have the same vertex and share one arm, lying on opposite sides of it.',
    '**Angles on a straight line** add up to 180° (figure). If two adjacent angles make a straight line, one is 180° minus the other: 130° and 50°. Two angles that add up to 180° are **supplementary**; two angles that add up to 90° are **complementary**.',
    '**Angles at a point** add up to 360°, a full turn: 120° + 95° + 145° = 360°.',
    'When two straight lines cross they make four angles. The angles opposite each other are **vertically opposite**, and they are **equal**. If one angle is 70°, the angle opposite it is also 70°, and each of the other two is 180° − 70° = 110°.',
  ], 'mf1-angle-facts', 'Write the reason after each step: "angles on a straight line", "angles at a point" or "vertically opposite angles".',
  ['The complement of 35° is:', ['55°', '145°', '325°', '35°'], 'Complementary angles add up to 90°.'],
  [['Adjacent angles', 'Angles with the same vertex and a common arm.'], ['Supplementary angles', 'Two angles that add up to 180°.'], ['Complementary angles', 'Two angles that add up to 90°.'], ['Vertically opposite angles', 'The equal, opposite angles made when two lines cross.']],
  [
    { q: 'Four angles at a point are 90°, 65°, 80° and x. Find x.', steps: ['Angles at a point add up to 360°.', '90 + 65 + 80 = 235.', 'x = 360 − 235 = **125°**.'] },
    { q: 'Two straight lines cross. One of the four angles is 38°. Find the other three.', steps: ['The angle vertically opposite 38° is **38°**.', 'Each angle next to it is on a straight line with it: 180 − 38 = **142°**.', 'The four angles are 38°, 142°, 38° and 142°; check: they add up to 360°.'] },
  ]),

  L('ma-anglebisect-1', 'ma-f1-angles', '5.3', 'Bisecting an angle', 10, ['Geometry', 'Construction'], [
    'The **bisector** of an angle is the half-line from the vertex that cuts the angle into two equal angles. The bisector of an angle of 70° makes two angles of 35°.',
    'To construct the bisector of ∠ABC with compasses (figure):\n- With the point of the compasses on B, draw an arc that cuts [BA) at P and [BC) at Q.\n- With the point on P, draw an arc inside the angle; with the same opening and the point on Q, draw an arc that crosses it at R.\n- Draw the half-line [BR): it is the bisector.',
    'Why it works: BP = BQ and PR = QR, so the two halves of the figure fit exactly on each other when it is folded along [BR). Every point of the bisector is the same distance from the two arms of the angle.',
    'You can also bisect with a protractor: measure the angle, halve it and mark that angle from one arm. The compass method is more exact and needs no measuring. Bisecting a straight angle (180°) gives a right angle, so it is a way to draw a perpendicular at a point of a line with compasses only.',
  ], 'mf1-angle-bisector', 'Make the first arc large enough to cut both arms clearly; small arcs give a wobbly bisector.',
  ['The bisector of an angle of 128° makes, with each arm, an angle of:', ['64°', '128°', '32°', '52°'], 'Half of 128° is 64°.'],
  [['Bisector of an angle', 'The half-line from the vertex that cuts an angle into two equal angles.'], ['Construct', 'To draw exactly with a ruler and compasses.'], ['Compasses', 'An instrument for drawing circles and arcs.']],
  [
    { q: 'The bisector of ∠AOB is [OD), and ∠AOD = 27°. Find ∠AOB and say what type of angle it is.', steps: ['The bisector cuts the angle into two equal halves, so ∠DOB = 27° too.', '∠AOB = 27 + 27 = **54°**, an **acute** angle.'] },
    { q: 'An angle of 90° is bisected, then each half is bisected again. What angles do you get?', steps: ['The first bisector gives two angles of 90 ÷ 2 = 45°.', 'Bisecting each 45° angle gives four angles of **22.5°**.'] },
  ]),
];
