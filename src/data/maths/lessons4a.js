// Mathematics lessons for Form 4, term 1: real numbers and errors, number
// bases, money, sets, inequalities and linear programming, the straight line,
// simultaneous equations, matrices, indices, surds and logarithms. Original
// text written for this app. **double asterisks** mark key terms; `examples`
// are worked examples. A column vector is written on one line, for example
// (3, 4), and a matrix row by row, for example [3 2; 1 4].

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

export const LESSONS_4A = [
  // ---------- Real numbers ----------
  L('ma-realsets-4', 'ma-f4-real', '1.1', 'Sets of numbers and the real number line', 12, ['Numbers'], [
    'Numbers are sorted into sets, each one inside the next:\n- **Natural numbers** ℕ = {0, 1, 2, 3, …}, the counting numbers (some books start at 1).\n- **Integers** ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}: the whole numbers and their negatives.\n- **Rational numbers** ℚ: every number that can be written as a fraction p/q of two integers with q ≠ 0, such as 3/4, −5 = −5/1, 0.25 = 1/4 and 0.333… = 1/3.\n- **Real numbers** ℝ: all the numbers on the number line.\nSo ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.',
    '**Irrational numbers** are real numbers that are not rational. They cannot be written as a fraction, and their decimals never end and never repeat: √2 = 1.414 213 …, √3, √5 and π = 3.141 592 … . The square root of a whole number that is not a perfect square is always irrational. On the other hand a **terminating** decimal (0.375 = 3/8) and a **recurring** decimal (0.272 727 … = 3/11) are always rational.',
    'To show that a recurring decimal is rational, call it x and multiply by a power of 10 that moves one block of repeating digits in front of the point, then subtract. For x = 0.444 …, 10x = 4.444 …, so 9x = 4 and x = 4/9.',
    'An **interval** is all the real numbers between two values. On the number line a filled dot means the end is included and an open circle means it is not:\n- −2 ≤ x < 3: filled dot at −2, open circle at 3, the segment between them shaded.\n- x > 1: open circle at 1 and an arrow going right.\nIn interval notation a square bracket includes the end and a round bracket excludes it, so −2 ≤ x < 3 is written [−2, 3). Many Cameroonian books write an excluded end with a reversed bracket: [−2, 3[.',
  ], 'number-sets', 'Every integer is rational (5 = 5/1), but not every rational number is an integer.',
  ['Which of these is a rational number?', ['0.121 212 …', '√3', 'π', '√10'], 'A recurring decimal can be written as a fraction: 0.1212 … = 12/99 = 4/33.'],
  [['Rational number', 'A number that can be written as p/q with p and q integers and q ≠ 0.'], ['Irrational number', 'A real number that cannot be written as a fraction; its decimal never ends or repeats.'], ['Real numbers', 'All the rational and irrational numbers: every point of the number line.'], ['Interval', 'The set of all real numbers between two given values.']],
  [
    { q: 'Write 0.363 636 … as a fraction in its lowest terms.', steps: ['Let x = 0.363 636 … . Two digits repeat, so multiply by 100: 100x = 36.363 6 …', 'Subtract: 100x − x = 36, so 99x = 36.', 'x = 36/99 = **4/11**.'] },
    { q: 'Sort these numbers: 7, −4, 2/5, √16, √11, 0.75.', steps: ['√16 = 4, so 7 and √16 are natural numbers (and also integers and rationals).', '−4 is an integer but not a natural number.', '2/5 and 0.75 = 3/4 are rational but not integers.', '√11 is **irrational**: 11 is not a perfect square.'] },
  ]),

  L('ma-approx-4', 'ma-f4-real', '1.2', 'Approximation, standard form and errors', 14, ['Numbers'], [
    'To **round**, look at the first digit you are dropping: 5 or more rounds up, less than 5 leaves the kept digit as it is.\n- **Decimal places** count the digits after the point: 7.0496 to 2 decimal places is 7.05.\n- **Significant figures** count from the first non-zero digit: 0.004 507 to 2 significant figures is 0.0045, and 30 459 to 3 significant figures is 30 500. Zeros that only hold place value must stay.',
    '**Standard form** writes a number as A × 10ⁿ with 1 ≤ A < 10 and n an integer: 386 000 = 3.86 × 10⁵ and 0.000 72 = 7.2 × 10⁻⁴. To multiply, multiply the A parts and add the powers, then adjust: (3 × 10⁴) × (5 × 10³) = 15 × 10⁷ = 1.5 × 10⁸.',
    'Before using a calculator, **estimate** by rounding each number to 1 significant figure: 48.7 × 0.212 ÷ 9.8 ≈ 50 × 0.2 ÷ 10 = 1. The calculator gives 1.05, so the answer is sensible.',
    'When a measurement is not exact:\n- **absolute error** = |measured value − exact value|\n- **relative error** = absolute error ÷ exact value\n- **percentage error** = relative error × 100 %.\nA measurement rounded to the nearest unit can be wrong by up to half a unit. A length of 12 cm to the nearest centimetre lies in 11.5 cm ≤ l < 12.5 cm: 11.5 cm is its **lower bound** and 12.5 cm its **upper bound**, and the greatest possible percentage error is 0.5 ÷ 12 × 100 ≈ 4.2 %.',
    'Bounds in calculations: the greatest sum or product uses both upper bounds; the greatest difference is upper bound − lower bound; the greatest quotient is upper bound ÷ lower bound.',
  ], null, 'Never round in the middle of a calculation: keep the full calculator value and round only the final answer.',
  ['(4 × 10⁵) × (6 × 10³) in standard form is:', ['2.4 × 10⁹', '24 × 10⁸', '2.4 × 10⁸', '10 × 10⁸'], '4 × 6 = 24 = 2.4 × 10 and 10⁵ × 10³ = 10⁸, giving 2.4 × 10⁹.'],
  [['Significant figure', 'A digit counted from the first non-zero digit of a number.'], ['Standard form', 'A × 10ⁿ with 1 ≤ A < 10 and n an integer.'], ['Absolute error', 'The size of the difference between a measured and an exact value.'], ['Percentage error', 'The error as a percentage of the exact value.'], ['Upper bound', 'The greatest value a rounded number could have had.']],
  [
    { q: 'A rectangle measures 8 cm by 5 cm, each to the nearest centimetre. Find the least and greatest possible area.', steps: ['Length: 7.5 ≤ l < 8.5. Width: 4.5 ≤ w < 5.5.', 'Least area = 7.5 × 4.5 = **33.75 cm²**.', 'Greatest area (upper bound) = 8.5 × 5.5 = **46.75 cm²**.'] },
    { q: 'A pupil weighs a 250 g packet and records 240 g. Find the percentage error.', steps: ['Absolute error = 250 − 240 = 10 g.', 'Relative error = 10 ÷ 250 = 0.04.', 'Percentage error = 0.04 × 100 = **4 %**.'] },
  ]),

  // ---------- Number bases ----------
  L('ma-baseconv-4', 'ma-f4-bases', '2.1', 'Place value in other bases and conversion', 12, ['Numbers'], [
    'In base ten the place values are powers of 10: units, tens, hundreds, thousands. In **base b** they are powers of b: 1, b, b², b³, …, and the digits go from 0 to b − 1. **Base two** (binary) uses only 0 and 1; **base five** uses 0 to 4; **base eight** (octal) uses 0 to 7. The base is written as a small number after the digits: 1101₂, 243₅, 157₈.',
    'From base b to base ten, multiply each digit by its place value and add:\n- 1101₂ = 1 × 8 + 1 × 4 + 0 × 2 + 1 × 1 = 13\n- 243₅ = 2 × 25 + 4 × 5 + 3 = 73\n- 157₈ = 1 × 64 + 5 × 8 + 7 = 111.',
    'From base ten to base b, divide again and again by b and write down each remainder, then read the remainders from the bottom up. For 45 in base two: 45 ÷ 2 = 22 r 1; 22 ÷ 2 = 11 r 0; 11 ÷ 2 = 5 r 1; 5 ÷ 2 = 2 r 1; 2 ÷ 2 = 1 r 0; 1 ÷ 2 = 0 r 1. Reading upwards gives **101101₂**.',
    'Between base two and base eight there is a shortcut, because 8 = 2³: group the binary digits in threes from the right and change each group. 101101₂ → 101 | 101 → 55₈ (check: 5 × 8 + 5 = 45). To change between two bases that are not ten, such as base five to base two, go through base ten.',
  ], 'base-conversion', 'Read the remainders from the **bottom** up.',
  ['157₈ in base ten is:', ['111', '157', '71', '119'], '1 × 64 + 5 × 8 + 7 = 111.'],
  [['Base', 'The number of different digits a number system uses, and the number its place values are powers of.'], ['Binary', 'Base two, using only the digits 0 and 1.'], ['Place value', 'The value of a position in a number: a power of the base.']],
  [
    { q: 'Convert 100 to base five.', steps: ['100 ÷ 5 = 20 r 0', '20 ÷ 5 = 4 r 0', '4 ÷ 5 = 0 r 4', 'Reading upwards: **400₅**. Check: 4 × 25 = 100.'] },
    { q: 'Convert 312₅ to base two.', steps: ['To base ten: 3 × 25 + 1 × 5 + 2 = 82.', '82 = 64 + 16 + 2.', 'So 82 = **1010010₂**.'] },
  ]),

  L('ma-basecalc-4', 'ma-f4-bases', '2.2', 'Calculating in bases two, five and eight', 12, ['Numbers'], [
    '**Addition** works column by column as in base ten, but you carry when a column total reaches the base. In base five, 4 + 3 = 7 = one five and 2, so write 2 and carry 1. For 1011₂ + 111₂: 1 + 1 = 10₂, write 0 carry 1; 1 + 1 + 1 = 11₂, write 1 carry 1; 0 + 1 + 1 = 10₂, write 0 carry 1; 1 + 1 = 10₂, write 10. The answer is 10010₂ (check: 11 + 7 = 18).',
    '**Subtraction**: when you borrow, you borrow one of the base, not ten. For 63₈ − 27₈: 3 − 7 is not possible, so borrow one eight: 3 + 8 = 11 and 11 − 7 = 4; then 5 − 2 = 3. The answer is 34₈ (check: 51 − 23 = 28 = 3 × 8 + 4).',
    '**Multiplication**: multiply as usual and change each product into the base. For 34₅ × 3₅: 4 × 3 = 12 = two fives and 2, so write 2 and carry 2; 3 × 3 + 2 = 11 = two fives and 1, so write 21. The answer is 212₅ (check: 19 × 3 = 57). In binary, multiplying is shifting and adding: 101₂ × 11₂ = 101 + 1010 = 1111₂ (5 × 3 = 15).',
    'To find an **unknown base**, write both sides in base ten and solve. If 23ₓ = 17, then 2x + 3 = 17 and x = 7. The base must be larger than every digit that appears.',
  ], null, 'Check every answer by changing the numbers into base ten.',
  ['In base five, 4₅ + 3₅ =', ['12₅', '7₅', '11₅', '13₅'], '4 + 3 = 7 = one five and 2.'],
  [['Carry', 'The amount passed to the next column when a column total reaches the base.'], ['Borrow', 'Taking one unit of the base from the next column to subtract.']],
  [
    { q: 'Work out 1101₂ × 101₂.', steps: ['1101 × 1 = 1101', '1101 × 0, shifted one place = 0', '1101 × 1, shifted two places = 110100', 'Add: 1101 + 110100 = **1000001₂**.', 'Check: 13 × 5 = 65 = 64 + 1.'] },
    { q: 'Find x if 132ₓ = 42.', steps: ['x² + 3x + 2 = 42', 'x² + 3x − 40 = 0', '(x + 8)(x − 5) = 0', 'A base is a positive whole number, so **x = 5**. Check: 25 + 15 + 2 = 42.'] },
  ]),

  // ---------- Financial arithmetic ----------
  L('ma-interest-4', 'ma-f4-finance', '3.1', 'Simple interest, compound interest and depreciation', 13, ['Numbers', 'Money'], [
    '**Simple interest** is paid only on the money first saved or borrowed, the **principal** P. For a rate of R % per year over T years, I = PRT/100, and the **amount** is A = P + I.',
    'With **compound interest**, each year’s interest is added to the principal, so the next year’s interest is earned on a larger sum. After n years, A = P(1 + R/100)ⁿ, and the compound interest is A − P. For 200 000 FCFA at 5 %:\n- year 1: interest 10 000, amount 210 000 FCFA\n- year 2: interest 10 500, amount 220 500 FCFA\n- year 3: interest 11 025, amount 231 525 FCFA.\nOver several years compound interest is always more than simple interest at the same rate.',
    'If interest is added every half-year at R % per year, use R/2 % for each half-year and 2n periods.',
    '**Depreciation** is the loss of value of things such as cars, motorbikes, machines and phones as they get older. If the value falls by R % each year, the value after n years is V = P(1 − R/100)ⁿ. Land and buildings usually gain value (they **appreciate**).',
  ], 'compound-interest', 'Compound growth multiplies by (1 + R/100) each year; depreciation multiplies by (1 − R/100).',
  ['A motorbike bought for 800 000 FCFA depreciates at 10 % a year. After 2 years it is worth:', ['648 000 FCFA', '640 000 FCFA', '720 000 FCFA', '960 000 FCFA'], '800 000 × 0.9 × 0.9 = 648 000.'],
  [['Principal', 'The sum of money first saved or borrowed.'], ['Simple interest', 'Interest paid on the principal only.'], ['Compound interest', 'Interest paid on the principal and on the interest already added.'], ['Depreciation', 'The fall in value of an item over time.']],
  [
    { q: 'Find the compound interest on 500 000 FCFA at 8 % per annum for 3 years.', steps: ['A = 500 000 × 1.08³', '1.08³ = 1.259 712, so A = 629 856 FCFA.', 'Compound interest = 629 856 − 500 000 = **129 856 FCFA**.', 'Simple interest would be 500 000 × 8 × 3 ÷ 100 = 120 000 FCFA, which is less.'] },
    { q: 'What principal amounts to 330 000 FCFA in 4 years at 2.5 % simple interest?', steps: ['A = P(1 + RT/100) = P(1 + 2.5 × 4/100) = 1.1P', '1.1P = 330 000', 'P = **300 000 FCFA**.'] },
  ]),

  L('ma-commerce-4', 'ma-f4-finance', '3.2', 'Tax, hire purchase and foreign exchange', 13, ['Numbers', 'Money'], [
    '**Value added tax (VAT)** is added to the price of most goods and services. In Cameroon the general rate is **19.25 %** (17.5 % plus a council surcharge). Price with VAT = price × 1.1925. To find the price before VAT, divide by 1.1925; do not take 19.25 % off the price with VAT.',
    '**Income tax** is charged on taxable income: the income left after allowances. Exercises give the rate for each **band** of income, and the tax is worked out band by band. For example, if in an exercise the first 2 000 000 FCFA is taxed at 10 % and the rest at 15 %, a taxable income of 2 600 000 FCFA pays 200 000 + 90 000 = 290 000 FCFA.',
    '**Hire purchase (HP)**: the buyer pays a **deposit**, takes the goods, and pays the rest in **instalments**.\n- HP price = deposit + all the instalments\n- extra cost = HP price − cash price, often given as a percentage of the cash price.',
    '**Foreign exchange**: the franc CFA (XAF) is tied to the euro at a fixed rate, **1 € = 655.957 FCFA**. The rates for other currencies, such as the US dollar or the naira, change every day, and banks sell a currency at a higher rate than they buy it. To change FCFA into euros, divide by 655.957; to change euros into FCFA, multiply.',
  ], null, 'Write the units (FCFA, €) on every line of a money calculation.',
  ['An item sells for 119 250 FCFA including VAT at 19.25 %. Its price before VAT is:', ['100 000 FCFA', '96 294 FCFA', '119 250 FCFA', '22 955 FCFA'], '119 250 ÷ 1.1925 = 100 000. Taking 19.25 % off 119 250 gives the wrong answer 96 294.'],
  [['VAT', 'Value added tax, a tax added to the price of goods and services.'], ['Hire purchase', 'Buying goods by paying a deposit and then instalments.'], ['Deposit', 'The first payment made when buying on hire purchase.'], ['Exchange rate', 'The value of one currency in terms of another.']],
  [
    { q: 'A fridge costs 238 500 FCFA including VAT at 19.25 %. Find the price before VAT and the VAT paid.', steps: ['Price before VAT = 238 500 ÷ 1.1925 = 200 000 FCFA.', 'VAT = 238 500 − 200 000 = **38 500 FCFA**.'] },
    { q: 'A television has a cash price of 180 000 FCFA. On HP the buyer pays a 25 % deposit and 10 monthly instalments of 15 000 FCFA. Find the HP price and the extra cost as a percentage of the cash price.', steps: ['Deposit = 25 % of 180 000 = 45 000 FCFA.', 'Instalments = 10 × 15 000 = 150 000 FCFA.', 'HP price = 195 000 FCFA; extra cost = 15 000 FCFA.', '15 000 ÷ 180 000 × 100 = **8.3 %** of the cash price.'] },
    { q: 'A trader changes 1 000 000 FCFA into euros. How many euros does the trader receive?', steps: ['1 000 000 ÷ 655.957 = 1 524.49', 'The trader receives about **1 524.49 €**.'] },
  ]),

  // ---------- Sets ----------
  L('ma-setops-4', 'ma-f4-sets', '4.1', 'Set notation and operations', 12, ['Sets'], [
    'A **set** is a well-defined collection of objects, its **elements**. We write 3 ∈ A for "3 is an element of A" and 7 ∉ A for "7 is not". A set can be listed, {2, 4, 6, 8}, or described, {x : x is an even number less than 10}. n(A) is the number of elements of A. The **empty set**, ∅ or { }, has no elements. Equal sets have the same elements; equivalent sets have the same number of elements.',
    'The **universal set** ξ holds every element being considered. A is a **subset** of B, written A ⊂ B, if every element of A is in B. A set with n elements has 2ⁿ subsets, counting ∅ and the set itself.',
    'The operations:\n- the **union** A ∪ B: the elements in A or B or both\n- the **intersection** A ∩ B: the elements in both A and B\n- the **complement** A′: the elements of ξ not in A\n- A and B are **disjoint** if A ∩ B = ∅.\nIn a **Venn diagram** the universal set is a rectangle and each set is a circle inside it.',
    'Counting with two sets: **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**. The intersection is taken away once because it was counted in both n(A) and n(B).',
  ], 'venn-three', 'Shade Venn diagrams in pencil: it makes complements and unions easy to check.',
  ['If n(A) = 12, n(B) = 9 and n(A ∩ B) = 4, then n(A ∪ B) is:', ['17', '21', '25', '13'], '12 + 9 − 4 = 17.'],
  [['Universal set', 'The set of all the elements under consideration, ξ.'], ['Subset', 'A set whose elements all belong to another set.'], ['Union', 'The set of elements in either set or both.'], ['Intersection', 'The set of elements common to both sets.'], ['Complement', 'The elements of the universal set not in a given set.']],
  [
    { q: 'ξ = {1, 2, …, 12}, A = {multiples of 2} and B = {multiples of 3}. List A ∩ B, A ∪ B and (A ∪ B)′.', steps: ['A = {2, 4, 6, 8, 10, 12} and B = {3, 6, 9, 12}.', 'A ∩ B = **{6, 12}**.', 'A ∪ B = **{2, 3, 4, 6, 8, 9, 10, 12}**.', '(A ∪ B)′ = **{1, 5, 7, 11}**.'] },
    { q: 'Of 60 farmers in a village, 38 grow maize, 30 grow beans and 5 grow neither. How many grow both?', steps: ['n(M ∪ B) = 60 − 5 = 55.', '55 = 38 + 30 − x', 'x = **13** farmers grow both.'] },
  ]),

  L('ma-venn3-4', 'ma-f4-sets', '4.2', 'Problems with three sets', 13, ['Sets'], [
    'Three overlapping circles divide the rectangle into **8 regions**. Fill them in this order:\n- the centre, in all three sets\n- the three regions in exactly two sets (subtract the centre from each "A and B" total)\n- the three regions in one set only (subtract everything else already in that circle)\n- the region outside all three circles.',
    'Learn the words:\n- "A only": A ∩ B′ ∩ C′\n- "A and B but not C": A ∩ B ∩ C′\n- "at least one": A ∪ B ∪ C\n- "none of them": (A ∪ B ∪ C)′\n- "exactly one": the sum of the three "only" regions.',
    'There is also a formula: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C).',
    'When a region is unknown, call it x, write every other region in terms of x, add all the regions and set the total equal to n(ξ).',
  ], 'venn-three', 'Always start filling a three-set Venn diagram from the middle.',
  ['How many regions does a three-set Venn diagram have, counting the region outside the circles?', ['8', '7', '6', '3'], '7 regions inside the circles and 1 outside.'],
  [['Region', 'One of the separate areas of a Venn diagram.'], ['Exactly one', 'In one of the sets and in neither of the others.']],
  [
    { q: 'Of 100 students, 45 take Biology, 40 Chemistry and 35 Physics; 15 take Biology and Chemistry, 12 Biology and Physics, 10 Chemistry and Physics, and 5 take all three. How many take none of them?', steps: ['Centre: 5.', 'Exactly two: B and C only 15 − 5 = 10; B and P only 12 − 5 = 7; C and P only 10 − 5 = 5.', 'Only one: B only 45 − 5 − 10 − 7 = 23; C only 40 − 5 − 10 − 5 = 20; P only 35 − 5 − 7 − 5 = 18.', 'Total in at least one: 5 + 10 + 7 + 5 + 23 + 20 + 18 = 88.', 'None: 100 − 88 = **12** students.'] },
    { q: 'At a market, 40 traders sell rice (R), oil (O) or sugar (S). 20 sell R, 18 sell O and 22 sell S; 8 sell R and O, 9 sell O and S, 10 sell R and S, x sell all three and 2 sell none. Find x.', steps: ['n(R ∪ O ∪ S) = 40 − 2 = 38.', '38 = 20 + 18 + 22 − 8 − 9 − 10 + x', '38 = 33 + x, so **x = 5**.', 'Check: R only 7, O only 6, S only 8, two sets 3, 4 and 5, centre 5: total 38.'] },
  ]),

  // ---------- Inequalities ----------
  L('ma-ineq1-4', 'ma-f4-inequalities', '5.1', 'Inequalities in one unknown', 12, ['Algebra'], [
    'The symbols are < (less than), ≤ (less than or equal to), > (greater than) and ≥ (greater than or equal to). In words: "at least 5" means x ≥ 5, "at most 5" means x ≤ 5, and "not more than 5" means x ≤ 5.',
    'Solve an inequality like an equation, with one important rule: **when you multiply or divide both sides by a negative number, reverse the inequality sign.** −2x > 6 gives x < −3.',
    'A double inequality is solved in one go: −3 < 2x + 1 ≤ 7. Subtract 1: −4 < 2x ≤ 6. Divide by 2: −2 < x ≤ 3. The integers in this range are −1, 0, 1, 2 and 3. On the number line, draw an open circle at −2, a filled dot at 3 and shade between them.',
    'An **absolute** (unconditional) inequality is true for every real value, such as x² + 1 > 0. A **conditional** inequality is true only for some values.',
    'For a **quadratic inequality**, factorise, find the roots and test the regions on the number line. (x − 1)(x − 4) < 0 holds between the roots: 1 < x < 4. (x − 1)(x − 4) > 0 holds outside them: x < 1 or x > 4.',
  ], 'number-line', 'Dividing by a negative number reverses the sign: −x > 2 means x < −2.',
  ['The integers that satisfy −1 < x ≤ 2 are:', ['0, 1, 2', '−1, 0, 1, 2', '0, 1', '−1, 0, 1'], '−1 is not included; 2 is.'],
  [['Inequality', 'A statement that one quantity is less than or greater than another.'], ['Absolute inequality', 'An inequality true for all real values of the unknown.'], ['Quadratic inequality', 'An inequality containing an x² term.']],
  [
    { q: 'Solve 5 − 2x ≥ 11 and show the answer on a number line.', steps: ['−2x ≥ 6', 'Divide by −2 and reverse the sign: **x ≤ −3**.', 'Draw a filled dot at −3 and an arrow to the left.'] },
    { q: 'Solve x² − x − 6 > 0.', steps: ['(x − 3)(x + 2) > 0, with roots −2 and 3.', 'Test x = 0: (−3)(2) = −6, which is not > 0, so the region between the roots fails.', 'Answer: **x < −2 or x > 3**.'] },
  ]),

  L('ma-ineq2-4', 'ma-f4-inequalities', '5.2', 'Inequalities in two unknowns: regions', 12, ['Algebra', 'Graphs'], [
    'An inequality in x and y, such as x + 2y ≤ 8, describes a **region** of the plane. Its **boundary** is the line x + 2y = 8: draw it **solid** for ≤ or ≥ (the line is included) and **broken** for < or > (it is not).',
    'To find which side is wanted, test a point that is not on the line, usually (0, 0). If it makes the inequality true, the region is on its side; if not, the region is on the other side.',
    'Read the instructions carefully. GCE questions usually ask you to **shade the unwanted region**, so that the required region is left clear and labelled R. Always say in a key what your shading means.',
    'For several inequalities, the required region satisfies all of them at once. Lines x = a are vertical and lines y = b are horizontal; x ≥ 0 is to the right of the y-axis and y ≥ 0 is above the x-axis.',
    'To find the inequalities of a region that is already drawn, find the equation of each boundary line, then test a point inside the region to choose the sign.',
  ], 'feasible-region', 'Test (0, 0) unless the boundary passes through the origin; then test a point such as (1, 0).',
  ['Which point satisfies both y > x and x + y < 4?', ['(1, 2)', '(2, 1)', '(3, 3)', '(0, 5)'], '(1, 2): 2 > 1 and 1 + 2 = 3 < 4.'],
  [['Boundary line', 'The line that separates the region of an inequality from the rest of the plane.'], ['Region', 'The set of points in the plane that satisfy an inequality.']],
  [
    { q: 'Show the region given by x ≥ 0, y ≥ 1 and x + 2y ≤ 8.', steps: ['Draw x = 0 (the y-axis), y = 1, and x + 2y = 8 through (0, 4) and (8, 0), all solid.', 'Test (0, 0) in x + 2y ≤ 8: 0 ≤ 8 is true, so keep the origin side.', 'y ≥ 1 is above y = 1, and x ≥ 0 is right of the y-axis.', 'The region is the triangle with vertices **(0, 1), (0, 4) and (6, 1)**.'] },
    { q: 'A region lies below the line through (0, 3) and (6, 0), including the line. Write its inequality.', steps: ['Gradient = −3/6 = −½ and the y-intercept is 3: y = −½x + 3, or x + 2y = 6.', 'The origin is in the region and 0 + 0 ≤ 6.', 'The inequality is **x + 2y ≤ 6**.'] },
  ]),

  L('ma-linprog-4', 'ma-f4-inequalities', '5.3', 'Linear programming', 14, ['Algebra', 'Graphs'], [
    '**Linear programming** finds the best possible result (the greatest profit or the least cost) when there are limits on land, money, time or workers. The method:\n- choose letters for the unknown quantities\n- write each condition as an inequality (a **constraint**)\n- draw the constraints and find the **feasible region**\n- write the **objective function** to be made greatest or least\n- work out its value at each vertex of the region and choose the best.',
    'The best value of a linear objective function always occurs at a **vertex** of the feasible region. A quick way to see which vertex is to slide a ruler parallel to a line such as 3x + 2y = 6 (a search line) across the region.',
    'When the unknowns must be whole numbers (people, buses, bags), check the whole-number points in the region nearest to the best vertex.',
  ], 'feasible-region', 'List every vertex with its coordinates and the value of the objective function in a small table.',
  ['In linear programming, the region that satisfies every constraint is the:', ['Feasible region', 'Objective function', 'Search line', 'Gradient'], 'The best solution is at one of its vertices.'],
  [['Constraint', 'A condition written as an inequality.'], ['Feasible region', 'The region whose points satisfy all the constraints.'], ['Objective function', 'The quantity to be made as large or as small as possible.']],
  [
    { q: 'A farmer has 6 hectares to plant with maize (x ha) and groundnuts (y ha). Maize needs 2 workers per hectare and groundnuts 1, and 8 workers are available. The profit is 300 000 FCFA per hectare of maize and 200 000 FCFA per hectare of groundnuts. How should the land be shared?', steps: ['Constraints: x ≥ 0, y ≥ 0, x + y ≤ 6 (land) and 2x + y ≤ 8 (workers).', 'Vertices of the region: (0, 0), (4, 0), (0, 6), and where x + y = 6 meets 2x + y = 8: subtracting gives x = 2, y = 4.', 'Profit P = 300 000x + 200 000y: at (4, 0) P = 1 200 000; at (2, 4) P = 1 400 000; at (0, 6) P = 1 200 000.', 'Plant **2 ha of maize and 4 ha of groundnuts** for the greatest profit, **1 400 000 FCFA**.'] },
  ]),

  // ---------- The straight line ----------
  L('ma-distmid-4', 'ma-f4-lines', '6.1', 'Distance, midpoint and gradient', 12, ['Geometry', 'Graphs'], [
    'For points A(x₁, y₁) and B(x₂, y₂):\n- **distance** AB = √((x₂ − x₁)² + (y₂ − y₁)²), from Pythagoras’ theorem\n- **midpoint** M = ((x₁ + x₂)/2, (y₁ + y₂)/2)\n- **gradient** m = (y₂ − y₁)/(x₂ − x₁), the rise divided by the run.',
    'A line going up to the right has a positive gradient; going down, a negative gradient. A horizontal line has gradient 0, and the gradient of a vertical line is not defined. The gradient is also the tangent of the angle the line makes with the positive x-axis.',
    'Three points are **collinear** (on one straight line) if the gradient from the first to the second equals the gradient from the second to the third.',
  ], 'straight-line', 'Keep the same order in the top and bottom of the gradient: (y₂ − y₁) with (x₂ − x₁).',
  ['The gradient of the line through (2, 5) and (6, −3) is:', ['−2', '2', '−1/2', '1/2'], '(−3 − 5)/(6 − 2) = −8/4.'],
  [['Gradient', 'The steepness of a line: rise divided by run.'], ['Midpoint', 'The point halfway between two points.'], ['Collinear', 'Lying on the same straight line.']],
  [
    { q: 'A is (−1, 3) and B is (5, −5). Find AB, the midpoint of AB and the gradient of AB.', steps: ['AB = √(6² + (−8)²) = √100 = **10**.', 'M = ((−1 + 5)/2, (3 − 5)/2) = **(2, −1)**.', 'm = (−5 − 3)/(5 − (−1)) = −8/6 = **−4/3**.'] },
    { q: 'Show that P(1, 1), Q(3, 5) and R(6, 11) are collinear.', steps: ['Gradient PQ = (5 − 1)/(3 − 1) = 2.', 'Gradient QR = (11 − 5)/(6 − 3) = 2.', 'The gradients are equal and Q is on both segments, so P, Q and R lie on **one straight line**.'] },
  ]),

  L('ma-lineeq-4', 'ma-f4-lines', '6.2', 'The equation of a straight line', 13, ['Geometry', 'Graphs'], [
    'Every straight line that is not vertical can be written **y = mx + c**, where m is the gradient and c the y-intercept (where it crosses the y-axis). To read m and c from an equation such as 2x + 3y = 12, make y the subject: y = −⅔x + 4.',
    'Forms of the equation:\n- **gradient and a point** (x₁, y₁): y − y₁ = m(x − x₁)\n- **two points**: find the gradient first, then use one of the points\n- **intercepts**: a line cutting the x-axis at (a, 0) and the y-axis at (0, b) is x/a + y/b = 1\n- vertical lines are x = k and horizontal lines y = k.',
    '**Parallel** lines have equal gradients: m₁ = m₂. **Perpendicular** lines have gradients whose product is −1: m₁ × m₂ = −1, so m₂ = −1/m₁. A line perpendicular to one of gradient 3 has gradient −1/3.',
  ], 'straight-line', 'For a perpendicular gradient: turn the fraction upside down and change its sign.',
  ['The line x/3 + y/5 = 1 cuts the y-axis at:', ['(0, 5)', '(0, 3)', '(5, 0)', '(3, 5)'], 'Put x = 0: y/5 = 1.'],
  [['y-intercept', 'The y-coordinate of the point where a line crosses the y-axis.'], ['Perpendicular', 'Meeting at a right angle.']],
  [
    { q: 'Find the equation of the line through (2, −1) and (4, 5).', steps: ['m = (5 − (−1))/(4 − 2) = 3', 'y − (−1) = 3(x − 2)', 'y + 1 = 3x − 6', '**y = 3x − 7**.'] },
    { q: 'Find the line through (3, 2) perpendicular to y = 3x − 7.', steps: ['m₁ = 3, so m₂ = −1/3.', 'y − 2 = −⅓(x − 3)', '3y − 6 = −x + 3', '**x + 3y = 9**.'] },
    { q: 'Find the equation of the line that cuts the axes at (4, 0) and (0, −2).', steps: ['x/4 + y/(−2) = 1', 'Multiply by 4: **x − 2y = 4**.', 'Check: (4, 0) gives 4 and (0, −2) gives 4.'] },
  ]),

  // ---------- Simultaneous equations ----------
  L('ma-simeq-4', 'ma-f4-simultaneous', '7.1', 'Elimination, substitution and graphs', 12, ['Algebra'], [
    'Two equations in two unknowns are **simultaneous** when the same pair of values must satisfy both. There are three methods.',
    '**Elimination**: multiply one or both equations so that one unknown has the same coefficient in both, then subtract (same signs) or add (opposite signs) to remove it. Solve for the other unknown and substitute back.',
    '**Substitution**: make one unknown the subject of one equation and put that expression into the other equation. It is quickest when one equation is already like y = 2x − 1.',
    '**Graphs**: draw both lines on the same axes; the solution is the point where they cross. Graphical answers are only as accurate as the drawing.',
    'If the lines are parallel the equations have **no solution**; if they are the same line there are **infinitely many** solutions.',
  ], 'simultaneous-graph', 'Always check your pair of values in the equation you did not use last.',
  ['Solve 2x + y = 9 and x − y = 3.', ['x = 4, y = 1', 'x = 3, y = 3', 'x = 5, y = −1', 'x = 2, y = 5'], 'Adding gives 3x = 12.'],
  [['Elimination', 'Removing one unknown by adding or subtracting equations.'], ['Substitution', 'Replacing an unknown by an equal expression.']],
  [
    { q: 'Solve by elimination: 3x + 4y = 18 and 5x − 2y = 4.', steps: ['Multiply the second equation by 2: 10x − 4y = 8.', 'Add: 13x = 26, so x = 2.', '3(2) + 4y = 18 gives y = 3.', '**x = 2, y = 3**. Check: 10 − 6 = 4.'] },
    { q: 'Solve by substitution: y = 2x − 1 and 3x + 2y = 12.', steps: ['3x + 2(2x − 1) = 12', '7x − 2 = 12, so x = 2.', 'y = 2(2) − 1 = 3.', '**x = 2, y = 3**.'] },
  ]),

  L('ma-simword-4', 'ma-f4-simultaneous', '7.2', 'Word problems with simultaneous equations', 12, ['Algebra'], [
    'To solve a word problem:\n- choose a letter for each unknown and say what it stands for, with units\n- turn two facts from the story into two equations\n- solve them\n- answer the question in words and check the answer against the story.',
    'Common types are costs of two items, ages now and in the past or future, the digits of a number, and a boat or a vehicle moving with or against a current or wind (the speeds add going with it and subtract going against it).',
  ], null, 'A check against the original words catches most mistakes in forming the equations.',
  ['The sum of two numbers is 30 and one is 4 more than the other. The smaller number is:', ['13', '17', '15', '26'], 'x + (x + 4) = 30, so x = 13.'],
  [['Simultaneous equations', 'Two or more equations that are true at the same time for the same values of the unknowns.']],
  [
    { q: 'At a market, 2 kg of rice and 3 kg of sugar cost 3 400 FCFA, and 5 kg of rice and 2 kg of sugar cost 4 100 FCFA. Find the price of 1 kg of each.', steps: ['2r + 3s = 3 400 and 5r + 2s = 4 100.', 'Multiply: 4r + 6s = 6 800 and 15r + 6s = 12 300.', 'Subtract: 11r = 5 500, so r = 500.', '2(500) + 3s = 3 400 gives s = 800.', 'Rice costs **500 FCFA** a kilogram and sugar **800 FCFA**.'] },
    { q: 'A father is 4 times as old as his son. In 5 years he will be 3 times as old. Find their ages.', steps: ['f = 4s and f + 5 = 3(s + 5).', '4s + 5 = 3s + 15, so s = 10 and f = 40.', 'The son is **10** and the father **40**. Check: in 5 years, 45 = 3 × 15.'] },
    { q: 'A boat goes 24 km downstream in 2 hours and returns upstream in 3 hours. Find its speed in still water and the speed of the current.', steps: ['Downstream: b + c = 24 ÷ 2 = 12. Upstream: b − c = 24 ÷ 3 = 8.', 'Adding: 2b = 20, so b = 10 and c = 2.', 'The boat goes at **10 km/h** and the current at **2 km/h**.'] },
  ]),

  // ---------- Matrices ----------
  L('ma-matops-4', 'ma-f4-matrices', '8.1', 'Matrices and their operations', 13, ['Numbers', 'Matrices'], [
    'A **matrix** is a rectangular array of numbers set out in rows and columns. A matrix with m rows and n columns has **order** m × n. In this app a matrix is written row by row with the rows separated by a semicolon: [3 2; 1 4] has first row 3 2 and second row 1 4. A square matrix has as many rows as columns; the **identity matrix** I = [1 0; 0 1]; the zero matrix has every entry 0.',
    '**Adding and subtracting**: only matrices of the same order, by adding or subtracting the entries in the same positions. **Multiplying by a number**: multiply every entry.',
    '**Multiplying two matrices** AB is possible only when the number of columns of A equals the number of rows of B. The entry in row i and column j of AB is found by multiplying row i of A by column j of B, pair by pair, and adding. A matrix of order m × n times one of order n × p gives order m × p. In general **AB ≠ BA**.',
    'Matrices store tables of information, such as the goods sold by shops, and multiplying by a column of prices gives the totals.',
  ], null, 'Say "row by column" each time you multiply.',
  ['If A is 2 × 3 and B is 3 × 1, then AB has order:', ['2 × 1', '3 × 3', '2 × 3', 'It cannot be found'], 'The inner numbers match (3); the outer ones give the order.'],
  [['Matrix', 'A rectangular array of numbers in rows and columns.'], ['Order', 'The number of rows and columns of a matrix, written rows × columns.'], ['Identity matrix', 'The square matrix with 1s on the leading diagonal and 0s elsewhere.']],
  [
    { q: 'A = [2 1; 3 4] and B = [1 0; −2 5]. Find AB and BA.', steps: ['AB, row 1: 2 × 1 + 1 × (−2) = 0 and 2 × 0 + 1 × 5 = 5.', 'AB, row 2: 3 × 1 + 4 × (−2) = −5 and 3 × 0 + 4 × 5 = 20.', 'AB = **[0 5; −5 20]**.', 'BA, row 1: 1 × 2 + 0 × 3 = 2 and 1 × 1 + 0 × 4 = 1; row 2: −2 × 2 + 5 × 3 = 11 and −2 × 1 + 5 × 4 = 18.', 'BA = [2 1; 11 18], which is not equal to AB.'] },
    { q: 'Shop P sells 10 bags of rice and 4 cans of oil; shop Q sells 6 bags and 9 cans. Rice is 18 000 FCFA a bag and oil 12 000 FCFA a can. Use matrices to find each shop’s takings.', steps: ['[10 4; 6 9] × (18 000, 12 000)', 'P: 10 × 18 000 + 4 × 12 000 = **228 000 FCFA**.', 'Q: 6 × 18 000 + 9 × 12 000 = **216 000 FCFA**.'] },
  ]),

  L('ma-matinv-4', 'ma-f4-matrices', '8.2', 'Determinant, inverse and simultaneous equations', 14, ['Numbers', 'Matrices'], [
    'For a 2 × 2 matrix A = [a b; c d], the **determinant** is **det A = ad − bc**.',
    'The **inverse** of A is A⁻¹ = (1/det A) × [d −b; −c a]: swap a and d, change the signs of b and c, and divide by the determinant. The matrix [d −b; −c a] is called the **adjoint** (or adjugate). Then A × A⁻¹ = A⁻¹ × A = I. A matrix with determinant 0 is **singular** and has no inverse.',
    'Two simultaneous equations ax + by = p and cx + dy = q can be written as one matrix equation A × (x, y) = (p, q), with A = [a b; c d] and (x, y), (p, q) column vectors. Multiplying both sides by A⁻¹ gives (x, y) = A⁻¹ × (p, q).',
  ], 'matrix-inverse', 'Check an inverse by multiplying: you must get [1 0; 0 1].',
  ['The determinant of [5 2; 3 1] is:', ['−1', '11', '1', '−11'], '5 × 1 − 2 × 3 = −1.'],
  [['Determinant', 'For [a b; c d], the number ad − bc.'], ['Inverse matrix', 'The matrix A⁻¹ with A × A⁻¹ = I.'], ['Singular matrix', 'A matrix whose determinant is 0; it has no inverse.'], ['Adjoint', 'For [a b; c d], the matrix [d −b; −c a].']],
  [
    { q: 'Find the inverse of A = [4 3; 2 2].', steps: ['det A = 4 × 2 − 3 × 2 = 2.', 'Adjoint = [2 −3; −2 4].', 'A⁻¹ = ½ × [2 −3; −2 4] = **[1 −1.5; −1 2]**.', 'Check: [4 3; 2 2] × [1 −1.5; −1 2] = [1 0; 0 1].'] },
    { q: 'Use matrices to solve 4x + 3y = 18 and 2x + 2y = 10.', steps: ['A = [4 3; 2 2] and A⁻¹ = [1 −1.5; −1 2].', 'x = 1 × 18 + (−1.5) × 10 = 3.', 'y = −1 × 18 + 2 × 10 = 2.', '**x = 3, y = 2**. Check: 12 + 6 = 18 and 6 + 4 = 10.'] },
    { q: 'For what value of k is [k 4; 3 6] singular?', steps: ['det = 6k − 12', '6k − 12 = 0', '**k = 2**.'] },
  ]),

  // ---------- Indices, surds, logarithms ----------
  L('ma-indices-4', 'ma-f4-surds', '9.1', 'The laws of indices and exponential equations', 13, ['Numbers', 'Algebra'], [
    'In aⁿ, a is the **base** and n the **index** (power). The laws of indices:\n- a^m × a^n = a^(m + n)\n- a^m ÷ a^n = a^(m − n)\n- (a^m)^n = a^(mn)\n- (ab)^n = a^n × b^n\n- a⁰ = 1 (for a ≠ 0)\n- a^(−n) = 1/a^n\n- a^(1/n) = ⁿ√a, and a^(m/n) = (ⁿ√a)^m.',
    'Examples: 2⁻³ = 1/8; 27^(1/3) = ∛27 = 3; 16^(3/4) = (⁴√16)³ = 2³ = 8; (4/9)^(−1/2) = (9/4)^(1/2) = 3/2. With a fractional index, take the root first: the numbers stay small.',
    'An **exponential equation** has the unknown in the index. Write both sides as powers of the same base and equate the indices: 2^(x + 1) = 32 = 2⁵, so x + 1 = 5 and x = 4; 9^x = 27 becomes 3^(2x) = 3³, so x = 3/2.',
    'Some equations become quadratics after a substitution: in 2^(2x) − 6 × 2^x + 8 = 0, let y = 2^x. Then y² − 6y + 8 = 0, so y = 2 or y = 4, giving x = 1 or x = 2.',
  ], 'laws-indices', 'Multiply: add the indices. Divide: subtract. Power of a power: multiply.',
  ['16^(−1/2) =', ['1/4', '−4', '4', '−8'], '√16 = 4, and the negative index gives the reciprocal.'],
  [['Index', 'The power to which a base is raised.'], ['Base', 'The number that is raised to a power.'], ['Exponential equation', 'An equation with the unknown in an index.']],
  [
    { q: 'Simplify (8a⁶b³)^(2/3).', steps: ['8^(2/3) = (∛8)² = 4', '(a⁶)^(2/3) = a⁴ and (b³)^(2/3) = b²', '= **4a⁴b²**.'] },
    { q: 'Solve 4^(x − 1) = 8.', steps: ['Write both sides as powers of 2: 2^(2x − 2) = 2³.', '2x − 2 = 3', '**x = 5/2**.'] },
  ]),

  L('ma-surds-4', 'ma-f4-surds', '9.2', 'Surds', 13, ['Numbers'], [
    'A **surd** is a root that is irrational, such as √2, √3 or ∛5. √9 = 3 is not a surd. Surds are left in the answer when an exact value is needed.',
    'Rules: √(ab) = √a × √b and √(a/b) = √a ÷ √b. To simplify, take out the largest square factor: √72 = √36 × √2 = 6√2. Like surds add and subtract like algebra: 3√2 + 5√2 = 8√2, and √12 + √27 = 2√3 + 3√3 = 5√3. But √a + √b is **not** √(a + b).',
    'Multiplying brackets: (2 + √3)(4 − √3) = 8 − 2√3 + 4√3 − 3 = 5 + 2√3. The pair (√a + √b)(√a − √b) = a − b has no surd left: the two brackets are **conjugates**.',
    '**Rationalising the denominator** removes the surd from the bottom of a fraction:\n- for a/√b, multiply top and bottom by √b: 6/√3 = 6√3/3 = 2√3\n- for a/(b + √c), multiply by the conjugate b − √c: 4/(3 − √5) = 4(3 + √5)/(9 − 5) = 3 + √5.',
  ], null, 'Learn the squares up to 15² = 225: they make simplifying surds quick.',
  ['(√5 + √2)(√5 − √2) =', ['3', '7', '√3', '5 − √2'], '5 − 2 = 3.'],
  [['Surd', 'An irrational root such as √2.'], ['Conjugate', 'For a + √b, the expression a − √b.'], ['Rationalise', 'Remove the surd from the denominator of a fraction.']],
  [
    { q: 'Simplify √48 − √12 + √75.', steps: ['√48 = 4√3, √12 = 2√3 and √75 = 5√3.', '4√3 − 2√3 + 5√3 = **7√3**.'] },
    { q: 'Rationalise (1 + √2)/(3 − √2).', steps: ['Multiply top and bottom by 3 + √2.', 'Top: (1 + √2)(3 + √2) = 3 + √2 + 3√2 + 2 = 5 + 4√2.', 'Bottom: 9 − 2 = 7.', 'Answer: **(5 + 4√2)/7**.'] },
  ]),

  L('ma-logs-4', 'ma-f4-surds', '9.3', 'Logarithms', 14, ['Numbers'], [
    'A **logarithm** is an index. If aˣ = N, then logₐ N = x: log₂ 8 = 3 because 2³ = 8. Logarithms to base 10, written simply log, are **common logarithms**: log 1000 = 3 and log 0.01 = −2. In any base, logₐ 1 = 0 and logₐ a = 1. The logarithm of 0 or of a negative number does not exist.',
    'The laws of logarithms follow from the laws of indices:\n- log (MN) = log M + log N\n- log (M/N) = log M − log N\n- log (Mⁿ) = n log M\n- change of base: logₐ N = log N ÷ log a.',
    'Logarithms solve equations with the unknown in the index when the bases cannot be made equal: 2ˣ = 10 gives x = log 10 ÷ log 2 = 1 ÷ 0.3010 ≈ 3.32. They also answer "how long?" questions: money at 5 % compound interest doubles when 1.05ⁿ = 2, n = log 2 ÷ log 1.05 ≈ 14.2, so after 15 whole years.',
    'In a **logarithmic equation**, combine the logarithms into one, remove the log, and solve. Reject any answer that would need the logarithm of a negative number or of 0.',
  ], 'laws-indices', 'log 2 ≈ 0.3010 and log 3 ≈ 0.4771 are worth remembering.',
  ['log 5 + log 20 =', ['2', '1', 'log 25', '100'], 'log (5 × 20) = log 100 = 2.'],
  [['Logarithm', 'The index to which a base must be raised to give a number.'], ['Common logarithm', 'A logarithm to base 10.'], ['Change of base', 'Rewriting logₐ N as log N ÷ log a.']],
  [
    { q: 'Without a calculator, evaluate log₃ 81 + log 0.01 + log₅ 1.', steps: ['log₃ 81 = 4 because 3⁴ = 81.', 'log 0.01 = −2 because 10⁻² = 0.01.', 'log₅ 1 = 0.', 'Total = **2**.'] },
    { q: 'Write 2 log 3 + log 4 − log 6 as a single logarithm.', steps: ['= log 9 + log 4 − log 6', '= log (9 × 4 ÷ 6)', '= **log 6**.'] },
    { q: 'Solve log₂ x + log₂ (x − 2) = 3.', steps: ['log₂ [x(x − 2)] = 3, so x(x − 2) = 2³ = 8.', 'x² − 2x − 8 = 0, so (x − 4)(x + 2) = 0.', 'x = −2 would need log₂ (−2), which does not exist, so **x = 4**.'] },
  ]),
];
