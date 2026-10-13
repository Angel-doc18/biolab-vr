// Mathematics lessons for Form 4, term 2: algebraic processes, quadratic
// equations and graphs, variation, the equation of a circle and the circle
// theorems, vectors, transformations, enlargement and similarity, and loci and
// constructions. Original text written for this app. **double asterisks**
// mark key terms; `examples` are worked examples. A column vector is written
// on one line, for example (3, 4), and a matrix row by row, for example
// [3 2; 1 4].

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

export const LESSONS_4B = [
  // ---------- Algebraic processes ----------
  L('ma-expand-4', 'ma-f4-algebra', '10.1', 'Expanding brackets and special products', 12, ['Algebra'], [
    'To **expand** is to multiply out brackets. a(b + c) = ab + ac. With two brackets, every term of the first multiplies every term of the second: (a + b)(c + d) = ac + ad + bc + bd.',
    'Three special products are used again and again:\n- (a + b)² = a² + 2ab + b²\n- (a − b)² = a² − 2ab + b²\n- (a + b)(a − b) = a² − b².\nA common mistake is to write (a + b)² = a² + b²: the middle term 2ab must not be forgotten.',
    'A bracket of three terms works the same way: (x + 2)(x² − 3x + 1) = x³ − 3x² + x + 2x² − 6x + 2 = x³ − x² − 5x + 2. Two products give the sum and difference of cubes: (a + b)(a² − ab + b²) = a³ + b³ and (a − b)(a² + ab + b²) = a³ − b³.',
    'Special products make some arithmetic quick: 103² = (100 + 3)² = 10 000 + 600 + 9 = 10 609, and 49 × 51 = (50 − 1)(50 + 1) = 2 500 − 1 = 2 499.',
  ], null, '(a + b)² has three terms: a², 2ab and b².',
  ['(x + 4)² =', ['x² + 8x + 16', 'x² + 16', 'x² + 4x + 16', '2x + 8'], 'a² + 2ab + b² with a = x and b = 4.'],
  [['Expand', 'Multiply out the brackets of an expression.'], ['Perfect square', 'An expression of the form (a + b)² or (a − b)².']],
  [
    { q: 'Expand and simplify (3x − 2)(2x + 5) − (x − 4)².', steps: ['(3x − 2)(2x + 5) = 6x² + 15x − 4x − 10 = 6x² + 11x − 10', '(x − 4)² = x² − 8x + 16', 'Subtract: 6x² + 11x − 10 − x² + 8x − 16 = **5x² + 19x − 26**.'] },
    { q: 'Use a special product to work out 998².', steps: ['998² = (1 000 − 2)²', '= 1 000 000 − 4 000 + 4', '= **996 004**.'] },
  ]),

  L('ma-factor-4', 'ma-f4-algebra', '10.2', 'Factorisation', 14, ['Algebra'], [
    '**Factorising** is the reverse of expanding: writing an expression as a product. Always look first for a **common factor**: 6x²y − 9xy² = 3xy(2x − 3y).',
    '**Grouping** works for four terms: ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y). For example x³ − 2x² + 3x − 6 = x²(x − 2) + 3(x − 2) = (x² + 3)(x − 2).',
    'The **difference of two squares**: a² − b² = (a − b)(a + b). So 25x² − 49 = (5x − 7)(5x + 7), and 2x² − 18 = 2(x² − 9) = 2(x − 3)(x + 3). A **perfect square** trinomial: x² − 10x + 25 = (x − 5)².',
    '**Quadratic trinomials**:\n- x² + bx + c: find two numbers whose product is c and sum is b. x² + x − 12: 4 and −3, so (x + 4)(x − 3).\n- ax² + bx + c with a ≠ 1: find two numbers whose product is ac and sum is b, split the middle term and group. 6x² − x − 2: ac = −12, the numbers are −4 and 3; 6x² − 4x + 3x − 2 = 2x(3x − 2) + 1(3x − 2) = (2x + 1)(3x − 2).',
    'The sum and difference of two cubes: a³ − b³ = (a − b)(a² + ab + b²) and a³ + b³ = (a + b)(a² − ab + b²). So x³ − 8 = (x − 2)(x² + 2x + 4).',
  ], null, 'After factorising, expand your answer in your head to check it.',
  ['Factorise x² − 10x + 25.', ['(x − 5)²', '(x + 5)²', '(x − 5)(x + 5)', '(x − 25)(x + 1)'], 'A perfect square: 25 = 5² and 10 = 2 × 5.'],
  [['Factorise', 'Write an expression as a product of factors.'], ['Difference of two squares', 'a² − b², which factorises as (a − b)(a + b).']],
  [
    { q: 'Factorise completely 3x² − 12x − 36.', steps: ['Common factor 3: 3(x² − 4x − 12).', 'Two numbers with product −12 and sum −4: −6 and 2.', '= **3(x − 6)(x + 2)**.'] },
    { q: 'Factorise 4x² + 4x − 15.', steps: ['ac = −60: the numbers 10 and −6 have product −60 and sum 4.', '4x² + 10x − 6x − 15 = 2x(2x + 5) − 3(2x + 5)', '= **(2x − 3)(2x + 5)**.'] },
    { q: 'Simplify (x² − 9)/(x² + x − 6).', steps: ['Top: (x − 3)(x + 3). Bottom: (x + 3)(x − 2).', 'Cancel the common factor (x + 3).', '= **(x − 3)/(x − 2)**.'] },
  ]),

  L('ma-polynomial-4', 'ma-f4-algebra', '10.3', 'Completing the square, polynomials and the factor theorem', 14, ['Algebra'], [
    '**Completing the square** rewrites x² + bx as (x + b/2)² − (b/2)². So x² + 6x + 2 = (x + 3)² − 9 + 2 = (x + 3)² − 7. With a number in front of x², take it out first: 2x² − 8x + 3 = 2(x² − 4x) + 3 = 2[(x − 2)² − 4] + 3 = 2(x − 2)² − 5. The completed form shows the least value at once: (x + 3)² − 7 is least, −7, when x = −3.',
    'A **polynomial** in x is a sum of terms axⁿ where each power n is a whole number. Its **degree** is the highest power: 4x³ − 2x² + x − 7 has degree 3 (a cubic). Degree 1 is linear and degree 2 quadratic.',
    'The **remainder theorem**: when a polynomial f(x) is divided by (x − a), the remainder is f(a). The **factor theorem**: (x − a) is a factor of f(x) exactly when f(a) = 0. For a divisor (ax − b), use f(b/a).',
    'To factorise a cubic, try x = ±1, ±2, ±3, … (factors of the constant term) until f(a) = 0. Then (x − a) is a factor: divide it out by long division or by comparing coefficients, and factorise the quadratic that is left.',
  ], 'completing-square', 'Half the coefficient of x, square it, add it and take it away again.',
  ['The degree of 5x⁴ − x² + 3 is:', ['4', '5', '2', '3'], 'The degree is the highest power of x.'],
  [['Polynomial', 'A sum of terms in whole-number powers of x.'], ['Degree', 'The highest power of the variable in a polynomial.'], ['Remainder theorem', 'Dividing f(x) by (x − a) leaves the remainder f(a).'], ['Factor theorem', '(x − a) is a factor of f(x) if and only if f(a) = 0.']],
  [
    { q: 'Factorise f(x) = x³ − 2x² − 5x + 6 and solve f(x) = 0.', steps: ['f(1) = 1 − 2 − 5 + 6 = 0, so (x − 1) is a factor.', 'Comparing coefficients: x³ − 2x² − 5x + 6 = (x − 1)(x² − x − 6).', 'x² − x − 6 = (x − 3)(x + 2).', 'f(x) = **(x − 1)(x − 3)(x + 2)**, so x = 1, 3 or −2.'] },
    { q: 'When x³ + kx² − 4 is divided by (x + 2) the remainder is 4. Find k.', steps: ['f(−2) = −8 + 4k − 4', '−12 + 4k = 4', '**k = 4**.'] },
  ]),

  // ---------- Quadratic equations ----------
  L('ma-quadsolve-4', 'ma-f4-quadeq', '11.1', 'Solving by factorisation and by completing the square', 12, ['Algebra'], [
    'A **quadratic equation** can be written ax² + bx + c = 0 with a ≠ 0. It has at most two **roots** (solutions).',
    'By **factorisation**: make one side 0, factorise, and use the fact that if A × B = 0 then A = 0 or B = 0. x² + 2x − 15 = 0 gives (x + 5)(x − 3) = 0, so x = −5 or x = 3. Never divide both sides by x: x² = 5x becomes x(x − 5) = 0, so x = 0 or x = 5, and dividing by x would lose x = 0.',
    'By **completing the square**, which works even when the quadratic does not factorise: x² − 6x + 4 = 0 → x² − 6x = −4 → (x − 3)² = −4 + 9 = 5 → x − 3 = ±√5 → x = 3 ± √5, that is 5.24 or 0.76 to 2 decimal places. If a ≠ 1, divide every term by a first.',
  ], 'quadratic-roots', 'Make one side zero before you factorise.',
  ['Solve (x + 3)(2x − 1) = 0.', ['x = −3 or x = ½', 'x = 3 or x = −½', 'x = −3 or x = 1', 'x = 3 or x = 2'], 'Set each bracket equal to 0.'],
  [['Quadratic equation', 'An equation that can be written ax² + bx + c = 0 with a ≠ 0.'], ['Root', 'A value of the unknown that satisfies an equation.']],
  [
    { q: 'Solve 3x² − 5x − 2 = 0.', steps: ['ac = −6: the numbers −6 and 1.', '3x² − 6x + x − 2 = 3x(x − 2) + 1(x − 2) = (3x + 1)(x − 2)', '**x = −1/3 or x = 2**.'] },
    { q: 'Solve 2x² + 8x − 3 = 0 by completing the square, to 2 decimal places.', steps: ['Divide by 2: x² + 4x − 1.5 = 0, so x² + 4x = 1.5.', '(x + 2)² = 1.5 + 4 = 5.5', 'x + 2 = ±√5.5 = ±2.345', '**x = 0.35 or x = −4.35**.'] },
  ]),

  L('ma-quadformula-4', 'ma-f4-quadeq', '11.2', 'The quadratic formula and the nature of the roots', 13, ['Algebra'], [
    'Completing the square on ax² + bx + c = 0 gives the **quadratic formula**: **x = (−b ± √(b² − 4ac)) / 2a**. It solves every quadratic equation, so use it whenever factorising is not quick.',
    'Method: make one side 0; write down a, b and c with their signs; put negative values in brackets when you substitute; work out b² − 4ac first; then find the two roots.',
    'The **discriminant** b² − 4ac tells you the nature of the roots without solving:\n- b² − 4ac > 0: two different real roots (rational if it is a perfect square)\n- b² − 4ac = 0: two equal (repeated) roots\n- b² − 4ac < 0: no real roots.',
    'To **form an equation** with roots p and q, write (x − p)(x − q) = 0, which is x² − (p + q)x + pq = 0. For ax² + bx + c = 0, the sum of the roots is −b/a and their product is c/a.',
  ], 'quadratic-roots', 'Work out b² − 4ac on its own first: most errors come from signs inside it.',
  ['The equation x² − 4x + 4 = 0 has:', ['Two equal roots', 'Two different roots', 'No real roots', 'Three roots'], 'b² − 4ac = 16 − 16 = 0.'],
  [['Quadratic formula', 'x = (−b ± √(b² − 4ac)) / 2a, the roots of ax² + bx + c = 0.'], ['Discriminant', 'b² − 4ac, which shows the nature of the roots.'], ['Repeated root', 'A root that occurs twice, when b² − 4ac = 0.']],
  [
    { q: 'Solve 2x² − 3x − 4 = 0, giving the roots to 2 decimal places.', steps: ['a = 2, b = −3, c = −4', 'b² − 4ac = 9 + 32 = 41', 'x = (3 ± √41)/4 = (3 ± 6.403)/4', '**x = 2.35 or x = −0.85**.'] },
    { q: 'Find k if x² + kx + 9 = 0 has equal roots.', steps: ['Equal roots: b² − 4ac = 0.', 'k² − 36 = 0', '**k = 6 or k = −6**.'] },
    { q: 'Form the equation whose roots are ½ and −3.', steps: ['(x − ½)(x + 3) = 0', 'Multiply by 2: (2x − 1)(x + 3) = 0', '**2x² + 5x − 3 = 0**.'] },
  ]),

  L('ma-quadword-4', 'ma-f4-quadeq', '11.3', 'Problems leading to quadratic equations', 13, ['Algebra'], [
    'Many problems about areas, numbers, speeds and prices lead to a quadratic equation. The steps:\n- say what x stands for, with units\n- form the equation from the facts\n- rearrange it to the form ax² + bx + c = 0 and solve\n- **reject** a root that cannot fit the situation, such as a negative length or a fraction of a person, and say why\n- answer the question and check it.',
    'Typical situations are rectangles, paths and borders, consecutive numbers, journeys where a faster speed saves time, and right-angled triangles (Pythagoras’ theorem).',
  ], null, 'A length, a speed and a number of people cannot be negative: say so when you reject a root.',
  ['A square of side x cm has an area of 3x cm². The side is:', ['3 cm', '0 cm or 3 cm', '9 cm', '√3 cm'], 'x² = 3x gives x = 0 or x = 3, and a side cannot be 0.'],
  [['Consecutive numbers', 'Whole numbers that follow each other; consecutive odd numbers differ by 2.']],
  [
    { q: 'A rectangular garden is 4 m longer than it is wide. A path 1 m wide runs all round the outside, and the garden and path together cover 96 m². Find the size of the garden.', steps: ['Let the width be x m: the garden is x by (x + 4), and with the path (x + 2) by (x + 6).', '(x + 2)(x + 6) = 96, so x² + 8x − 84 = 0.', '(x + 14)(x − 6) = 0. A width cannot be −14, so x = 6.', 'The garden is **6 m by 10 m**. Check: 8 × 12 = 96.'] },
    { q: 'The product of two consecutive odd numbers is 143. Find them.', steps: ['x(x + 2) = 143, so x² + 2x − 143 = 0.', '(x + 13)(x − 11) = 0', 'The numbers are **11 and 13**, or **−13 and −11**.'] },
    { q: 'A bus travels 120 km. If its speed were 10 km/h greater, the journey would take 1 hour less. Find its speed.', steps: ['120/x − 120/(x + 10) = 1', 'Multiply by x(x + 10): 120(x + 10) − 120x = x(x + 10), so x² + 10x − 1 200 = 0.', '(x + 40)(x − 30) = 0, and a speed cannot be negative.', 'The speed is **30 km/h**. Check: 4 h at 30 km/h, 3 h at 40 km/h.'] },
  ]),

  // ---------- Quadratic graphs ----------
  L('ma-parabola-4', 'ma-f4-quadgraph', '12.1', 'Drawing quadratic graphs', 13, ['Algebra', 'Graphs'], [
    'The graph of y = ax² + bx + c is a smooth curve called a **parabola**. When a > 0 it opens upwards and has a **minimum** point; when a < 0 it opens downwards and has a **maximum** point.',
    'Make a table of values. For y = x² − 2x − 3:\n- x: −2, −1, 0, 1, 2, 3, 4\n- y: 5, 0, −3, −4, −3, 0, 5.\nPlot the points with the scale given and join them with one smooth curve, not with straight segments.',
    'The key features:\n- the **y-intercept** is (0, c)\n- the **x-intercepts** are the roots of ax² + bx + c = 0\n- the **axis of symmetry** is the line x = −b/2a\n- the **turning point** lies on the axis of symmetry; in the completed form y = a(x − h)² + k it is (h, k).',
  ], 'parabola', 'The table should be symmetrical about the turning point: use it to check your values.',
  ['The turning point of y = x² + 4x + 1 is:', ['(−2, −3)', '(2, 13)', '(−2, 5)', '(4, 1)'], 'x = −4/2 = −2, and y = 4 − 8 + 1 = −3.'],
  [['Parabola', 'The curve that is the graph of a quadratic function.'], ['Turning point', 'The highest or lowest point of a curve.'], ['Axis of symmetry', 'The line that divides the parabola into two mirror halves.']],
  [
    { q: 'For y = x² − 2x − 3, find the axis of symmetry, the turning point and the intercepts.', steps: ['Axis: x = −b/2a = 2/2 = 1.', 'Turning point: y = 1 − 2 − 3 = −4, so **(1, −4)**, a minimum.', 'y-intercept **(0, −3)**; x-intercepts from (x − 3)(x + 1) = 0: **(−1, 0) and (3, 0)**.'] },
    { q: 'Find the greatest value of y = 5 + 4x − x².', steps: ['y = −(x² − 4x) + 5 = −[(x − 2)² − 4] + 5', 'y = 9 − (x − 2)²', 'The greatest value is **9**, when x = 2.'] },
  ]),

  L('ma-graphsolve-4', 'ma-f4-quadgraph', '12.2', 'Solving equations with graphs', 13, ['Algebra', 'Graphs'], [
    'The roots of ax² + bx + c = 0 are the x-coordinates of the points where the graph of y = ax² + bx + c crosses the x-axis (where y = 0). Read them as accurately as the scale allows.',
    'One graph can solve many equations. Rearrange the new equation so that one side is the function already drawn; the other side is a line to draw on the same axes. With y = x² − 2x − 3 drawn:\n- x² − 2x − 3 = 2: draw y = 2\n- x² − 3x − 1 = 0: rewrite as x² − 2x − 3 = x − 2 and draw y = x − 2.\nThe solutions are the x-coordinates where the line meets the curve.',
    'To find where a line meets a curve without a graph, set the two expressions for y equal, solve the quadratic, then find each y. A line can meet a parabola in two points, in one point (it is a **tangent**) or not at all.',
  ], 'parabola', 'Whatever you add to or take from the equation, the drawn function must stay exactly the same on one side.',
  ['The graph of y = x² meets the line y = 4 where:', ['x = −2 and x = 2', 'x = 4 only', 'x = 16', 'x = 2 only'], 'x² = 4.'],
  [['Point of intersection', 'A point on both graphs, whose coordinates satisfy both equations.']],
  [
    { q: 'Find where the line y = x + 1 meets the curve y = x² − 1.', steps: ['x² − 1 = x + 1, so x² − x − 2 = 0.', '(x − 2)(x + 1) = 0', 'x = 2 gives y = 3; x = −1 gives y = 0.', 'The points are **(2, 3) and (−1, 0)**.'] },
    { q: 'With the graph of y = x² − 2x − 3 drawn, which line solves x² − 4x + 1 = 0?', steps: ['Write x² − 4x + 1 = 0 as x² − 2x − 3 = 2x − 4.', 'Check: x² − 2x − 3 − 2x + 4 = x² − 4x + 1.', 'Draw **y = 2x − 4** and read the x-coordinates where it meets the curve.'] },
  ]),

  // ---------- Variation ----------
  L('ma-vardirect-4', 'ma-f4-variation', '13.1', 'Direct and inverse variation', 12, ['Algebra'], [
    'y **varies directly** as x (y ∝ x) when y = kx for a constant k, the **constant of variation**. Doubling x doubles y, and the graph of y against x is a straight line through the origin. y can also vary as a power or root: y ∝ x² means y = kx², and y ∝ √x means y = k√x.',
    'The method is always the same: write the equation with k, substitute the given pair of values to find k, write the formula, then use it.',
    'y **varies inversely** as x (y ∝ 1/x) when y = k/x, so that xy = k stays constant. Doubling x halves y. The graph is a curve that comes closer and closer to the axes without meeting them. The time to finish a job varies inversely as the number of workers.',
    'A **scale drawing** is an example of direct variation: on a plan with scale 1 : 100, 1 cm stands for 100 cm = 1 m, so a room 5 m by 4 m is drawn 5 cm by 4 cm. Areas change by the square of the scale.',
  ], 'direct-inverse', 'Find k first, then write the full formula before answering.',
  ['If y ∝ 1/x, which of these stays the same?', ['xy', 'x + y', 'y/x', 'y − x'], 'y = k/x means xy = k.'],
  [['Direct variation', 'y = kx: the two quantities increase in the same ratio.'], ['Inverse variation', 'y = k/x: as one quantity increases, the other decreases in the same ratio.'], ['Constant of variation', 'The fixed number k in a variation.']],
  [
    { q: 'The distance d m that a stone falls varies as the square of the time t s. It falls 20 m in 2 s. How far does it fall in 5 s, and how long does it take to fall 80 m?', steps: ['d = kt², so 20 = 4k and k = 5: d = 5t².', 't = 5: d = 5 × 25 = **125 m**.', '80 = 5t², so t² = 16 and **t = 4 s**.'] },
    { q: 'y varies inversely as x², and y = 8 when x = 2. Find y when x = 4.', steps: ['y = k/x², so 8 = k/4 and k = 32.', 'y = 32/16 = **2**.'] },
  ]),

  L('ma-varjoint-4', 'ma-f4-variation', '13.2', 'Joint and partial variation', 12, ['Algebra'], [
    'In **joint variation** one quantity varies as a product of others. The volume of a cylinder varies jointly as r² and h: V = kr²h. Variation can also be combined: "y varies directly as x and inversely as z" means y = kx/z.',
    'To see the effect of changes, put them into the formula. If y = kx²/z and x is doubled while z is halved, y is multiplied by 2² ÷ ½ = 8.',
    'In **partial variation** one part of a quantity is fixed and the other part varies. The cost of hiring a hall for a party is a fixed charge plus an amount for each guest: C = a + bn. There are two constants, so two pairs of values are needed, giving two simultaneous equations.',
  ], 'direct-inverse', 'Partial variation always needs two pairs of values and two simultaneous equations.',
  ['If y = kx/z and both x and z are doubled, y is:', ['Unchanged', 'Doubled', 'Halved', 'Multiplied by 4'], '2x/2z = x/z.'],
  [['Joint variation', 'Variation as the product of two or more quantities.'], ['Partial variation', 'A quantity made of a fixed part and a varying part.']],
  [
    { q: 'The cost C FCFA of making n school uniforms is partly constant and partly varies as n. 20 uniforms cost 170 000 FCFA and 50 cost 380 000 FCFA. Find the cost of 80 uniforms.', steps: ['C = a + bn: 170 000 = a + 20b and 380 000 = a + 50b.', 'Subtract: 30b = 210 000, so b = 7 000 and a = 30 000.', 'C = 30 000 + 7 000n. For n = 80: C = **590 000 FCFA**.'] },
    { q: 'y varies directly as x and inversely as the square of z. y = 6 when x = 3 and z = 2. Find y when x = 10 and z = 5.', steps: ['y = kx/z², so 6 = 3k/4 and k = 8.', 'y = 8 × 10 ÷ 25 = **3.2**.'] },
  ]),

  // ---------- Equation of a circle ----------
  L('ma-circleeq-4', 'ma-f4-circleeq', '14.1', 'Circles with centre the origin or (a, b)', 12, ['Geometry', 'Graphs'], [
    'A circle is the set of all points at a fixed distance r, the **radius**, from a fixed point, the **centre**. If P(x, y) is on the circle with centre the origin, Pythagoras’ theorem gives **x² + y² = r²**.',
    'For a circle with centre C(a, b), the distance from P(x, y) to C is r, so **(x − a)² + (y − b)² = r²**. Watch the signs: the centre (2, −1) gives (x − 2)² + (y + 1)².',
    'A point (p, q) is on the circle if it satisfies the equation. It is **inside** if (p − a)² + (q − b)² < r² and **outside** if (p − a)² + (q − b)² > r².',
    'When the ends of a diameter are given, the centre is their midpoint and the radius is half the distance between them.',
  ], 'circle-equation', 'The numbers in the brackets have the opposite signs to the coordinates of the centre.',
  ['Which point lies on the circle x² + y² = 169?', ['(5, 12)', '(10, 10)', '(13, 1)', '(7, 6)'], '25 + 144 = 169.'],
  [['Radius', 'The distance from the centre of a circle to any point on it.'], ['Centre', 'The fixed point from which every point of a circle is the same distance.']],
  [
    { q: 'Find the equation of the circle with centre (−3, 4) that passes through (1, 1).', steps: ['r² = (1 − (−3))² + (1 − 4)² = 16 + 9 = 25', '**(x + 3)² + (y − 4)² = 25**.'] },
    { q: 'A diameter joins A(1, 2) and B(7, 10). Find the equation of the circle.', steps: ['Centre = midpoint of AB = (4, 6).', 'Radius = ½ × √(6² + 8²) = ½ × 10 = 5.', '**(x − 4)² + (y − 6)² = 25**.'] },
  ]),

  L('ma-circlegen-4', 'ma-f4-circleeq', '14.2', 'The expanded form: finding the centre and radius', 12, ['Geometry', 'Graphs'], [
    'Expanding (x − a)² + (y − b)² = r² gives x² + y² − 2ax − 2by + (a² + b² − r²) = 0. So the equation of a circle has x² and y² with **equal** coefficients and no xy term.',
    'To find the centre and radius from the expanded form, complete the square in x and in y. x² + y² + 4x − 6y − 3 = 0 becomes (x + 2)² − 4 + (y − 3)² − 9 − 3 = 0, that is (x + 2)² + (y − 3)² = 16: centre (−2, 3) and radius 4. If x² and y² have a coefficient other than 1, divide the whole equation by it first.',
    'A shortcut: x² + y² + 2gx + 2fy + c = 0 has centre (−g, −f) and radius √(g² + f² − c).',
    'To find where a circle cuts the x-axis, put y = 0 and solve the quadratic in x; for the y-axis, put x = 0.',
  ], 'circle-equation', 'Halve each coefficient of x and y and change its sign to get the centre.',
  ['The centre of x² + y² + 6x − 2y = 0 is:', ['(−3, 1)', '(3, −1)', '(6, −2)', '(−6, 2)'], 'Halve the coefficients 6 and −2 and change their signs.'],
  [['Completing the square', 'Rewriting x² + bx as (x + b/2)² − (b/2)².']],
  [
    { q: 'Find the centre and radius of 2x² + 2y² − 8x + 12y − 6 = 0.', steps: ['Divide by 2: x² + y² − 4x + 6y − 3 = 0.', '(x − 2)² − 4 + (y + 3)² − 9 − 3 = 0', '(x − 2)² + (y + 3)² = 16', 'Centre **(2, −3)**, radius **4**.'] },
    { q: 'Where does the circle x² + y² − 10x − 2y + 16 = 0 cut the x-axis?', steps: ['Put y = 0: x² − 10x + 16 = 0.', '(x − 2)(x − 8) = 0', 'At **(2, 0) and (8, 0)**.'] },
  ]),

  // ---------- Circle measures and theorems ----------
  L('ma-circlemeasure-4', 'ma-f4-circle1', '15.1', 'Parts of a circle, arcs, sectors and segments', 13, ['Geometry'], [
    'The parts of a circle:\n- the **diameter** is a chord through the centre, twice the radius\n- the **circumference** is the distance round, 2πr\n- a **chord** joins two points of the circle; a **secant** is a line that cuts it in two points\n- an **arc** is part of the circumference (minor or major)\n- a **sector** is the region between two radii and an arc\n- a **segment** is the region between a chord and an arc\n- a **tangent** touches the circle at one point\n- **concentric** circles share a centre; the region between two of them is a ring (**annulus**).',
    'For an angle θ at the centre:\n- **arc length** = θ/360 × 2πr\n- **sector area** = θ/360 × πr²\n- **segment area** = sector area − area of the triangle = θ/360 × πr² − ½r² sin θ.\nThe ring between radii R and r has area π(R² − r²).',
    'Chord properties: the perpendicular from the centre to a chord bisects it, and equal chords are the same distance from the centre.',
  ], 'circle-theorems', 'The fraction θ/360 tells you what part of the whole circle you have.',
  ['The region between a chord and its arc is a:', ['Segment', 'Sector', 'Radius', 'Tangent'], 'A sector is bounded by two radii and an arc.'],
  [['Chord', 'A straight line joining two points on a circle.'], ['Arc', 'Part of the circumference of a circle.'], ['Sector', 'The region between two radii and an arc.'], ['Segment', 'The region between a chord and an arc.'], ['Annulus', 'The ring between two concentric circles.']],
  [
    { q: 'A sector has radius 14 cm and angle 135°. Find its arc length, perimeter and area (π = 22/7).', steps: ['Arc = 135/360 × 2 × 22/7 × 14 = 33 cm.', 'Perimeter = 33 + 14 + 14 = **61 cm**.', 'Area = 135/360 × 22/7 × 196 = **231 cm²**.'] },
    { q: 'A chord subtends 60° at the centre of a circle of radius 10 cm. Find the area of the minor segment (π = 3.142).', steps: ['Sector = 60/360 × 3.142 × 100 = 52.37 cm²', 'Triangle = ½ × 10 × 10 × sin 60° = 43.30 cm²', 'Segment = 52.37 − 43.30 = **9.07 cm²**.'] },
  ]),

  L('ma-circlethm1-4', 'ma-f4-circle1', '15.2', 'Angle theorems', 13, ['Geometry'], [
    '**The angle at the centre**: the angle that an arc subtends at the centre is **twice** the angle it subtends at any point on the rest of the circumference. To see why, join the point on the circumference to the centre: this makes two isosceles triangles, and each exterior angle at the centre is twice a base angle.',
    '**Angles in the same segment** are equal: angles at the circumference that stand on the same arc are each half of the same angle at the centre.',
    '**The angle in a semicircle** is a right angle: the angle at the centre on a diameter is 180°, and half of that is 90°. The converse is useful too: the hypotenuse of a right-angled triangle is a diameter of the circle through its three vertices.',
    'In a geometry proof give a reason for every statement, for example "angle at centre = twice angle at circumference" or "angles in the same segment".',
  ], 'circle-theorems', 'Look for the arc each angle stands on: that tells you which theorem to use.',
  ['C and D are on the same arc and angle ACB = 40°. Angle ADB is:', ['40°', '80°', '140°', '20°'], 'Angles in the same segment are equal.'],
  [['Subtend', 'An arc or chord subtends the angle formed at a point by lines from its ends.'], ['Same segment', 'The same part of a circle cut off by a chord.']],
  [
    { q: 'O is the centre and angle AOB = 130° on the minor arc AB. Find angle ACB, with C on the major arc, and angle ADB, with D on the minor arc.', steps: ['Angle ACB = ½ × 130° = **65°** (angle at centre is twice the angle at the circumference).', 'The reflex angle AOB = 360° − 130° = 230° stands on the major arc.', 'Angle ADB = ½ × 230° = **115°**.', 'ACBD is a cyclic quadrilateral: 65° + 115° = 180°.'] },
    { q: 'AB is a diameter, C is on the circle and angle CAB = 35°. Find angle CBA.', steps: ['Angle ACB = 90° (angle in a semicircle).', 'Angle CBA = 180° − 90° − 35° = **55°**.'] },
  ]),

  L('ma-cyclic-4', 'ma-f4-circle2', '16.1', 'Cyclic quadrilaterals', 12, ['Geometry'], [
    'A **cyclic quadrilateral** has all four vertices on a circle (the points are **concyclic**).',
    'Its **opposite angles add up to 180°** (they are supplementary). The two angles at the centre standing on the two arcs add up to 360°, and each angle of the quadrilateral is half of one of them.',
    'An **exterior angle** of a cyclic quadrilateral equals the **interior opposite angle**: both are supplementary to the same interior angle.',
    'The converse: if a pair of opposite angles of a quadrilateral add up to 180°, it is cyclic. A rectangle is always cyclic; a parallelogram that is not a rectangle never is.',
  ], 'cyclic-tangent', 'Check that the four vertices really are on the circle before using cyclic quadrilateral facts.',
  ['Which quadrilateral can always be drawn with its four vertices on a circle?', ['A rectangle', 'A rhombus', 'A trapezium', 'A kite'], 'Its opposite angles are 90° + 90° = 180°.'],
  [['Cyclic quadrilateral', 'A quadrilateral whose four vertices lie on a circle.'], ['Concyclic', 'Lying on the same circle.']],
  [
    { q: 'PQRS is cyclic, angle P = 3x + 10 and angle R = 2x − 5. Find x and angle P.', steps: ['P and R are opposite: (3x + 10) + (2x − 5) = 180.', '5x + 5 = 180, so x = 35.', 'Angle P = 3 × 35 + 10 = **115°**.'] },
    { q: 'ABCD is cyclic and DC is produced to E. Angle ABC = 98°. Find angle ADE.', steps: ['Angle ADC = 180° − 98° = 82° (opposite angles of a cyclic quadrilateral).', 'Angle ADE = 180° − 82° = **98°** (angles on a straight line).', 'It equals the interior opposite angle ABC, as the theorem says.'] },
  ]),

  L('ma-tangent-4', 'ma-f4-circle2', '16.2', 'Tangents, the alternate segment and intersecting chords', 14, ['Geometry'], [
    'A **tangent** touches a circle at exactly one point, the **point of contact**. The tangent is **perpendicular to the radius** at the point of contact.',
    'From a point P outside the circle, the two tangents PA and PB are **equal in length**. The line OP from the centre bisects angle APB and angle AOB, and angle APB + angle AOB = 180°, because OAPB has two right angles.',
    '**The alternate segment theorem**: the angle between a tangent and a chord through the point of contact equals the angle that the chord subtends in the **alternate segment** (the segment on the other side of the chord).',
    '**Intersecting chords**: if chords AB and CD meet at X, then AX × XB = CX × XD. This holds whether X is inside the circle or outside it (on the chords produced). For a tangent PT and a line from P cutting the circle at A and B: PT² = PA × PB.',
  ], 'cyclic-tangent', 'Whenever a tangent meets a radius, mark the right angle at once.',
  ['A tangent 8 cm long is drawn from a point 10 cm from the centre. The radius is:', ['6 cm', '2 cm', '18 cm', '12.8 cm'], 'The radius meets the tangent at 90°: √(10² − 8²) = 6.'],
  [['Tangent', 'A line that touches a circle at one point.'], ['Point of contact', 'The point where a tangent touches a circle.'], ['Alternate segment', 'The segment on the other side of a chord from the angle between the chord and the tangent.']],
  [
    { q: 'PA and PB are tangents from P to a circle with centre O, and angle APB = 50°. Find angle AOB and angle OAB.', steps: ['Angles OAP and OBP are 90° (tangent ⊥ radius).', 'Angle AOB = 360° − 90° − 90° − 50° = **130°**.', 'OA = OB, so triangle OAB is isosceles: angle OAB = (180° − 130°) ÷ 2 = **25°**.'] },
    { q: 'TA is a tangent at A, AB is a chord and C is on the major arc. The angle between the tangent and the chord, TAB, is 70°. Find angle ACB.', steps: ['By the alternate segment theorem, angle ACB = angle TAB.', 'Angle ACB = **70°**.'] },
    { q: 'From P outside a circle, a line meets the circle at A and B with PA = 4 cm and AB = 5 cm. Find the length of the tangent PT.', steps: ['PB = 4 + 5 = 9 cm.', 'PT² = PA × PB = 4 × 9 = 36.', '**PT = 6 cm**.'] },
  ]),

  // ---------- Vectors ----------
  L('ma-vecbasic-4', 'ma-f4-vectors', '17.1', 'Vectors and their components', 13, ['Geometry', 'Vectors'], [
    'A **vector** has both size and direction, like a displacement, a velocity or a force. A **scalar** has size only, like a mass or a time. A vector is written AB with an arrow over it, as a bold letter **a**, or on paper as a letter with a line under it.',
    'A **column vector** gives the x-component and the y-component. In this app it is written on one line, (3, 4); on paper write the 3 above the 4 in tall brackets. With the unit vectors **i** = (1, 0) and **j** = (0, 1), (3, 4) = 3i + 4j.',
    'The **position vector** of the point A(x, y) is OA = (x, y). The vector from A to B is **AB = OB − OA**.',
    'Vectors are added and subtracted component by component. Multiplying by a number k changes the length k times, and reverses the direction if k is negative. Equal vectors have the same components; −a has the same length as a and the opposite direction.',
    'The **magnitude** (length) of (x, y) is |(x, y)| = √(x² + y²). Its direction is the angle θ with the positive x-axis, where tan θ = y/x. A **unit vector** has magnitude 1: a ÷ |a|.',
  ], 'vector-triangle', 'AB = OB − OA: "end minus start".',
  ['The vector from A(1, 4) to B(3, 1) is:', ['(2, −3)', '(−2, 3)', '(4, 5)', '(2, 3)'], 'Subtract A from B.'],
  [['Vector', 'A quantity with size and direction.'], ['Scalar', 'A quantity with size only.'], ['Position vector', 'The vector from the origin to a point.'], ['Magnitude', 'The length of a vector.'], ['Unit vector', 'A vector of magnitude 1.']],
  [
    { q: 'A is (2, −1) and B is (5, 3). Find AB, |AB| and the angle AB makes with the x-axis.', steps: ['AB = (5 − 2, 3 − (−1)) = **(3, 4)** = 3i + 4j.', '|AB| = √(9 + 16) = **5**.', 'tan θ = 4/3, so **θ = 53.1°**.'] },
    { q: 'a = 2i − 3j and b = −i + 5j. Find 3a − 2b and its magnitude.', steps: ['3a = 6i − 9j and 2b = −2i + 10j.', '3a − 2b = **8i − 19j**.', '|3a − 2b| = √(64 + 361) = √425 ≈ **20.6**.'] },
  ]),

  L('ma-vecgeom-4', 'ma-f4-vectors', '17.2', 'Vector geometry: parallel, collinear and dividing a line', 13, ['Geometry', 'Vectors'], [
    'The **triangle law**: AB + BC = AC. To find a vector in a figure, go from the start to the end along any route of known vectors.',
    'Two vectors are **parallel** when one is a multiple of the other: p = kq. Three points A, B and C are **collinear** when AB = k BC: the vectors are parallel and share the point B.',
    'The midpoint M of AB has position vector OM = ½(OA + OB). A point P dividing AB in the ratio m : n has OP = (n OA + m OB)/(m + n); equivalently AP = m/(m + n) × AB.',
    '**The midpoint theorem**: the line joining the midpoints of two sides of a triangle is parallel to the third side and half its length. Vectors prove it in two lines (see the first example).',
  ], 'vector-triangle', 'Write every vector in terms of the given vectors a and b before comparing them.',
  ['If PQ = 3 QR, then P, Q and R are:', ['Collinear', 'Perpendicular', 'The vertices of a right-angled triangle', 'All the same distance from O'], 'Parallel vectors through a common point lie on one line.'],
  [['Triangle law', 'AB + BC = AC: going round two sides equals going along the third.'], ['Collinear', 'Lying on one straight line.']],
  [
    { q: 'OA = a and OB = b. M is the midpoint of AB and N the midpoint of OA. Find AB, OM and NM in terms of a and b. What does NM show?', steps: ['AB = b − a.', 'OM = OA + ½AB = a + ½(b − a) = ½(a + b).', 'ON = ½a, so NM = OM − ON = **½b**.', 'NM = ½ OB: NM is parallel to OB and half as long, which is the midpoint theorem.'] },
    { q: 'A is (1, 2) and B is (7, 11). Find P on AB with AP : PB = 1 : 2.', steps: ['AB = (6, 9), so AP = ⅓AB = (2, 3).', 'OP = OA + AP = (1, 2) + (2, 3) = **(3, 5)**.'] },
    { q: 'Show that A(1, 1), B(3, 4) and C(7, 10) are collinear.', steps: ['AB = (2, 3) and BC = (4, 6) = 2(2, 3).', 'BC = 2AB: they are parallel and share B, so **A, B and C are collinear**.'] },
  ]),

  L('ma-vecdot-4', 'ma-f4-vectors', '17.3', 'The scalar product and the angle between vectors', 12, ['Geometry', 'Vectors'], [
    'The **scalar product** (dot product) of a = (a₁, a₂) and b = (b₁, b₂) is **a · b = a₁b₁ + a₂b₂**. The result is a number, not a vector.',
    'It is also a · b = |a| |b| cos θ, where θ is the angle between the vectors. So **cos θ = a · b ÷ (|a| |b|)**.',
    'Two non-zero vectors are **perpendicular** exactly when a · b = 0, because cos 90° = 0. For the unit vectors, i · i = j · j = 1 and i · j = 0.',
    'The scalar product finds the angles of a triangle from coordinates and shows quickly whether two lines are perpendicular.',
  ], 'vector-triangle', 'A negative scalar product means the angle between the vectors is obtuse.',
  ['(1, 2) · (4, −2) =', ['0', '6', '(4, −4)', '8'], '4 − 4 = 0, so the vectors are perpendicular.'],
  [['Scalar product', 'a · b = a₁b₁ + a₂b₂ = |a| |b| cos θ.']],
  [
    { q: 'Find the angle between a = 3i + 4j and b = 5i − 12j.', steps: ['a · b = 15 − 48 = −33.', '|a| = 5 and |b| = 13.', 'cos θ = −33/65 = −0.508', '**θ = 120.5°**.'] },
    { q: 'Find k if (2, k) is perpendicular to (3, −6).', steps: ['2 × 3 + k × (−6) = 0', '6 − 6k = 0', '**k = 1**.'] },
  ]),

  // ---------- Transformations ----------
  L('ma-isometry-4', 'ma-f4-transform', '18.1', 'Translation, reflection and rotation', 13, ['Geometry', 'Transformations'], [
    'A transformation maps an **object** to an **image**. An **isometry** keeps lengths, angles and area, so the image is congruent to the object. Translations, reflections and rotations are isometries.',
    'A **translation** moves every point by the same vector (a, b): (x, y) → (x + a, y + b). The orientation is unchanged. Describe it fully as "a translation by the vector (a, b)".',
    'A **reflection** in a mirror line puts each image point the same distance behind the line, along a perpendicular to it. Points on the mirror are **invariant** (they do not move), and the orientation is reversed. In the x-axis (x, y) → (x, −y); in the y-axis (−x, y); in y = x (y, x); in y = −x (−y, −x). The mirror line is the perpendicular bisector of any object point and its image.',
    'A **rotation** needs a centre, an angle and a direction (anticlockwise is positive). About the origin: 90° anticlockwise (x, y) → (−y, x); 90° clockwise (x, y) → (y, −x); 180° (x, y) → (−x, −y). The centre is where the perpendicular bisectors of AA′ and BB′ meet.',
    'In **successive transformations** apply the first, then apply the second to the image. The order usually matters.',
  ], 'transformations', 'To describe a transformation fully, name it and give every detail: the vector, the mirror line, or the centre, angle and direction.',
  ['Under a translation, which of these changes?', ['The position', 'The lengths', 'The angles', 'The orientation'], 'Every point moves, but the shape stays the same size and the same way round.'],
  [['Isometry', 'A transformation that keeps lengths and angles.'], ['Invariant point', 'A point that is its own image.'], ['Orientation', 'The way round a shape is, clockwise or anticlockwise.']],
  [
    { q: 'Triangle ABC has A(1, 1), B(4, 1) and C(1, 3). Find its image under (a) a reflection in y = x, (b) a rotation of 90° clockwise about the origin.', steps: ['(a) Swap the coordinates: **A′(1, 1), B′(1, 4), C′(3, 1)**. A is invariant because it lies on y = x.', '(b) (x, y) → (y, −x): **A″(1, −1), B″(1, −4), C″(3, −1)**.'] },
    { q: 'P(2, 3) is reflected in the x-axis and the image is reflected in the y-axis. Describe the single transformation that does both.', steps: ['(2, 3) → (2, −3) → (−2, −3).', 'In general (x, y) → (−x, −y).', 'This is a **rotation of 180° about the origin**.'] },
  ]),

  L('ma-matrixtrans-4', 'ma-f4-transform', '18.2', 'Transformations with matrices', 14, ['Geometry', 'Transformations', 'Matrices'], [
    'A 2 × 2 matrix M maps a point P, written as a column vector, to M × P. The first column of M is the image of (1, 0) and the second column the image of (0, 1). So to find the matrix of a transformation, find where (1, 0) and (0, 1) go.',
    'Matrices to know:\n- reflection in the x-axis [1 0; 0 −1]; in the y-axis [−1 0; 0 1]\n- reflection in y = x [0 1; 1 0]; in y = −x [0 −1; −1 0]\n- rotation about O of 90° anticlockwise [0 −1; 1 0]; 180° [−1 0; 0 −1]; 90° clockwise [0 1; −1 0]\n- enlargement with centre O and scale factor k [k 0; 0 k].',
    'A **shear** keeps one line invariant and slides points parallel to it. With the x-axis invariant and shear factor k, [1 k; 0 1] maps (x, y) to (x + ky, y). A shear does not change area. A **stretch** parallel to the x-axis with factor k is [k 0; 0 1], and parallel to the y-axis [1 0; 0 k]; it multiplies area by k.',
    'For "A then B", the single matrix is **BA**: the transformation done first is written on the right. The **determinant** is the area scale factor; a negative determinant means the orientation is reversed. A singular matrix (determinant 0) squashes every point onto one line: [1 2; 2 4] maps (x, y) to (x + 2y, 2x + 4y), and every image lies on y = 2x.',
  ], 'transformations', 'Find a matrix by asking: where does (1, 0) go, and where does (0, 1) go?',
  ['Which matrix keeps the x-axis invariant and moves (0, 1) to (3, 1)?', ['[1 3; 0 1]', '[3 0; 0 1]', '[1 0; 3 1]', '[0 1; 1 0]'], 'It is a shear with factor 3; the second column is the image of (0, 1).'],
  [['Matrix operator', 'A matrix that performs a transformation by multiplication.'], ['Shear', 'A transformation that slides points parallel to an invariant line, by an amount in proportion to their distance from it.'], ['Stretch', 'A transformation that multiplies distances from an invariant line by a factor.']],
  [
    { q: 'Find the image of the triangle A(1, 0), B(3, 0), C(3, 2) under the shear [1 2; 0 1], and state its area.', steps: ['(x, y) → (x + 2y, y)', '**A′(1, 0), B′(3, 0), C′(7, 2)**.', 'The x-axis is invariant and the determinant is 1, so the area stays ½ × 2 × 2 = **2 square units**.'] },
    { q: 'Find the single matrix for a reflection in the x-axis followed by a rotation of 90° anticlockwise about O, and describe it.', steps: ['X = [1 0; 0 −1] and R = [0 −1; 1 0].', 'X is done first, so the matrix is RX = [0 −1; 1 0] × [1 0; 0 −1] = [0 1; 1 0].', 'This is a **reflection in the line y = x**.'] },
  ]),

  // ---------- Enlargement and similarity ----------
  L('ma-enlarge-4', 'ma-f4-enlarge', '19.1', 'Enlargement', 12, ['Geometry', 'Transformations'], [
    'An **enlargement** has a **centre** C and a **scale factor** k. Each image point P′ is on the line through C and P, with CP′ = k × CP.',
    'The scale factor decides the image:\n- k > 1: the image is larger\n- 0 < k < 1: the image is smaller (it is still called an enlargement)\n- k < 0: the image is on the other side of the centre and upside down; k = −1 is a half turn.',
    'To find the centre, join two pairs of corresponding points and extend the lines: they meet at the centre. The scale factor is image length ÷ object length.',
    'With centre the origin, (x, y) → (kx, ky), and the matrix is [k 0; 0 k]. With centre C(a, b), the image is P′ = C + k × CP.',
    'Lengths are multiplied by k and areas by k²; angles do not change, so the image is **similar** to the object.',
  ], 'enlargement', 'Measure every distance from the centre, never from a corner of the shape.',
  ['A triangle of area 6 cm² is enlarged with scale factor 3. The image has area:', ['54 cm²', '18 cm²', '9 cm²', '162 cm²'], 'The area scale factor is 3² = 9.'],
  [['Centre of enlargement', 'The fixed point from which distances are multiplied.'], ['Scale factor', 'The number by which lengths are multiplied.']],
  [
    { q: 'Enlarge the triangle A(2, 1), B(4, 1), C(2, 4) with centre (0, 0) and scale factor −½.', steps: ['(x, y) → (−½x, −½y)', '**A′(−1, −0.5), B′(−2, −0.5), C′(−1, −2)**.', 'The image is half the size, upside down, on the other side of the origin.'] },
    { q: 'Enlarge P(5, 4) with centre C(1, 2) and scale factor 3.', steps: ['CP = (5 − 1, 4 − 2) = (4, 2).', 'CP′ = 3 × (4, 2) = (12, 6).', 'P′ = (1 + 12, 2 + 6) = **(13, 8)**.'] },
  ]),

  L('ma-similar-4', 'ma-f4-enlarge', '19.2', 'Similar figures: lengths, areas and volumes', 13, ['Geometry'], [
    '**Similar** figures have the same shape: corresponding angles are equal and corresponding lengths are in the same ratio k.',
    'Two triangles are similar if:\n- two angles of one equal two angles of the other\n- the three pairs of sides are in the same ratio\n- two pairs of sides are in the same ratio and the angles between them are equal.\nA line drawn parallel to one side of a triangle cuts off a smaller similar triangle, and divides the other two sides in the same ratio (the **Thales property**).',
    'If lengths are in the ratio k, **areas** are in the ratio k² and **volumes** in the ratio k³. Similar solid objects of the same material have masses in the ratio k³. Work backwards with roots: an area ratio of 16 : 25 means a length ratio of 4 : 5 and a volume ratio of 64 : 125.',
  ], 'enlargement', 'Lengths k, areas k², volumes k³.',
  ['Two similar cylinders have heights 3 cm and 6 cm. The ratio of their volumes is:', ['1 : 8', '1 : 2', '1 : 4', '1 : 6'], '(1 : 2)³ = 1 : 8.'],
  [['Similar', 'Having the same shape, with corresponding lengths in the same ratio.'], ['Area scale factor', 'The square of the length scale factor.'], ['Volume scale factor', 'The cube of the length scale factor.']],
  [
    { q: 'In triangle ABC, DE is parallel to BC with D on AB and E on AC. AD = 4 cm, DB = 6 cm and DE = 5 cm. Find BC.', steps: ['DE ∥ BC, so triangles ADE and ABC are similar.', 'AB = 10 cm, so k = 10 ÷ 4 = 2.5.', 'BC = 2.5 × 5 = **12.5 cm**.'] },
    { q: 'Two similar bottles have surface areas 180 cm² and 405 cm². The smaller holds 320 ml. Find the capacity of the larger.', steps: ['Area ratio 180 : 405 = 4 : 9, so the length ratio is 2 : 3.', 'Volume ratio 8 : 27.', 'Capacity = 320 × 27 ÷ 8 = **1 080 ml**.'] },
  ]),

  // ---------- Loci and constructions ----------
  L('ma-construct-4', 'ma-f4-loci', '20.1', 'Constructions with ruler and compasses', 14, ['Geometry', 'Construction'], [
    'Use a ruler (as a straight edge) and a pair of compasses, with a sharp pencil. Leave every construction arc on the page: the examiner looks for them.',
    'The basic constructions:\n- the **perpendicular bisector** of AB: equal arcs from A and from B above and below the line; join the two crossings\n- the **bisector of an angle**: an arc from the vertex cutting both arms, then equal arcs from those two points; join the vertex to their crossing\n- a **perpendicular** from a point to a line, and at a point on a line\n- a **parallel** to a line through a given point.',
    'Special angles: **60°** (an arc from the vertex, then the same radius from where it cuts the line: this is an equilateral triangle), **30°** (bisect 60°), **90°** (a perpendicular), **45°** (bisect 90°), and 120° = 2 × 60°.',
    'Triangles can be constructed from three sides, from two sides and the angle between them, or from two angles and a side. To divide a segment AB into n equal parts, draw a ray from A, step off n equal lengths along it with the compasses, join the last mark to B, and draw parallels through the other marks.',
    'The **circumcircle** of a triangle passes through its three vertices: its centre is where the perpendicular bisectors of the sides meet. The **incircle** touches the three sides: its centre is where the angle bisectors meet, and its radius is the perpendicular distance from that centre to a side.',
  ], 'loci', 'Keep the compasses at the same setting for each pair of arcs.',
  ['Which construction finds the centre of the circle through three given points?', ['The perpendicular bisectors of the lines joining them', 'The bisectors of the angles', 'A line parallel to one side', 'An angle of 60°'], 'The centre must be the same distance from all three points.'],
  [['Perpendicular bisector', 'The line at right angles to a segment through its midpoint.'], ['Angle bisector', 'The line that divides an angle into two equal angles.'], ['Circumcircle', 'The circle through the three vertices of a triangle.'], ['Incircle', 'The circle that touches the three sides of a triangle.']],
  [
    { q: 'Construct triangle PQR with PQ = 7 cm, angle QPR = 60° and PR = 5 cm, then its circumcircle. What should QR and the radius measure?', steps: ['Draw PQ = 7 cm. At P construct 60° and mark PR = 5 cm; join QR.', 'Construct the perpendicular bisectors of PQ and PR; they meet at O.', 'With centre O and radius OP, draw the circle through P, Q and R.', 'By the cosine rule QR = √(49 + 25 − 35) = √39 ≈ **6.2 cm**, and the radius = QR ÷ (2 sin 60°) ≈ **3.6 cm**: your measurements should be close to these.'] },
  ]),

  L('ma-loci-4', 'ma-f4-loci', '20.2', 'Loci in two dimensions', 12, ['Geometry', 'Construction'], [
    'A **locus** (plural loci) is the set of all the points that satisfy a condition; it is often the path of a moving point.',
    'The basic loci:\n- a fixed distance from a point: a **circle**\n- a fixed distance from a line: **two parallel lines** (round a line segment, two parallel lines joined by semicircles)\n- the same distance from two points: the **perpendicular bisector** of the line joining them\n- the same distance from two crossing lines: the **bisectors** of the angles between them\n- the points P from which a segment AB is seen at 90°: the **circle on AB as diameter**.',
    'Conditions with "less than" or "more than" give regions, not lines: "less than 3 cm from A" is the inside of a circle. When there are several conditions, the answer is where the loci or regions overlap.',
    'Loci answer real questions: the area a tethered goat can graze, the coverage of a radio mast, the boundary that is the same distance from two villages.',
  ], 'loci', 'Draw each condition in a different colour, then look for where they overlap.',
  ['A goat is tied by a 4 m rope to a post in an open field. The region it can graze is:', ['A circle of radius 4 m and its inside', 'A square of side 4 m', 'A line 4 m long', 'Two parallel lines'], 'Every point it reaches is at most 4 m from the post.'],
  [['Locus', 'The set of all points that satisfy a given condition.']],
  [
    { q: 'Two villages A and B are 8 km apart. A borehole is to be the same distance from A and from B, and within 5 km of A. Where can it be?', steps: ['The same distance from A and B: the perpendicular bisector of AB, through the midpoint M, 4 km from each village.', 'Within 5 km of A: inside the circle of radius 5 km about A.', 'The bisector meets that circle √(5² − 4²) = 3 km on each side of M.', 'The borehole can be anywhere on the bisector **within 3 km of M**.'] },
  ]),
];
