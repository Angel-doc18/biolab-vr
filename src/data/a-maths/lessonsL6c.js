// A Level Pure Mathematics lessons, Lower Sixth (part 3): matrices, linear
// systems, permutations and combinations, vectors, lines in space, limits and
// continuity, and the revision lessons. Original text written for this app.
// Matrices are written row by row: [a b; c d].

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Paper 1 and Paper 2',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_L6C = [
  // ---------- 15. Matrices ----------
  L('pm-mat-1', 'mm-l6-matrices', '15.1', 'Matrix operations, the identity and the transpose', 15, ['Matrices'], [
    'A **matrix** of order m × n has m rows and n columns. Matrices of the same order are added entrywise, and a scalar multiplies every entry. The product **AB** is defined when the number of columns of A equals the number of rows of B: each entry is a **row of A times a column of B**, and an (m × n) by (n × p) product has order m × p.',
    'Matrix multiplication is **associative**, (AB)C = A(BC), but **not commutative**: in general AB ≠ BA. With A = [1 2; 3 4] and B = [0 1; −1 2], AB = [−2 5; −4 11] while BA = [3 4; 5 6].',
    'The **identity matrix** I has 1s on the leading diagonal and 0s elsewhere, so AI = IA = A; the **zero matrix** has every entry 0. The **transpose** Aᵀ is formed by turning rows into columns: (Aᵀ)ᵢⱼ = Aⱼᵢ. A matrix with Aᵀ = A is **symmetric**. For products, **(AB)ᵀ = BᵀAᵀ**, with the order reversed.',
    'Matrices organise data and calculations: a 2 × 2 matrix represents a transformation of the plane (rotations, reflections, enlargements), and a system of linear equations can be written as a single matrix equation AX = B.',
  ], 'am-matrix', 'Row of the first times column of the second.',
  ['If A is 3 × 2 and B is 2 × 5, the order of AB is:', ['3 × 5', '2 × 2', '5 × 3', 'not defined'], 'Outer numbers.'],
  [['Order of a matrix', 'Its number of rows × number of columns.'], ['Identity matrix', 'A square matrix with 1s on the leading diagonal and 0s elsewhere.'], ['Transpose', 'The matrix formed by writing the rows as columns.']],
  [
    { q: 'For A = [2 1; 0 3] and B = [1 −1; 4 2], find AB, BA and (AB)ᵀ.', steps: ['AB = [2×1 + 1×4, 2×(−1) + 1×2; 0×1 + 3×4, 0×(−1) + 3×2] = **[6 0; 12 6]**.', 'BA = [1×2 + (−1)×0, 1×1 + (−1)×3; 4×2 + 2×0, 4×1 + 2×3] = **[2 −2; 8 10]**, so AB ≠ BA.', '(AB)ᵀ = **[6 12; 0 6]**, which equals BᵀAᵀ.'] },
    { q: 'Find x and y if [x 2; 3 y] + [1 x; y 4] = [5 6; 5 6].', steps: ['x + 1 = 5 gives x = 4; check 2 + x = 6 ✓.', '3 + y = 5 gives y = 2; check y + 4 = 6 ✓.', '**x = 4, y = 2**.'] },
  ]),

  L('pm-mat-2', 'mm-l6-matrices', '15.2', 'Determinants, cofactors and inverse matrices', 17, ['Matrices'], [
    'The **determinant** of [a b; c d] is **ad − bc**. For a 3 × 3 matrix, expand along the first row: det [a b c; d e f; g h i] = a(ei − fh) − b(di − fg) + c(dh − eg). Each bracket is a 2 × 2 **minor**; the **cofactor** is the minor with the sign from the pattern [+ − +; − + −; + − +].',
    'A matrix with **det A = 0** is **singular** and has no inverse; otherwise it is non-singular. For 2 × 2: **A⁻¹ = (1/(ad − bc)) [d −b; −c a]**: swap the diagonal entries, change the sign of the others, and divide by the determinant.',
    'For 3 × 3: find all nine cofactors, form the matrix of cofactors, transpose it to get the **adjugate** adj A, then **A⁻¹ = adj A ÷ det A**. Check by multiplying: AA⁻¹ = I. Useful facts: det(AB) = det A × det B, and **(AB)⁻¹ = B⁻¹A⁻¹**.',
    'Geometrically, |det A| for a 2 × 2 matrix is the area scale factor of its transformation; a zero determinant means the plane is squashed onto a line, so the transformation cannot be undone.',
  ], 'am-matrix', 'Cofactors, transpose (adjugate), divide by the determinant.',
  ['The inverse of [5 2; 7 3] is:', ['[3 −2; −7 5]', '[3 2; 7 5]', '[−3 2; 7 −5]', '[5 −2; −7 3]'], 'det = 15 − 14 = 1.'],
  [['Determinant', 'A number calculated from a square matrix; zero means the matrix has no inverse.'], ['Cofactor', 'A minor with the sign (−1)^(i + j).'], ['Adjugate', 'The transpose of the matrix of cofactors.']],
  [
    { q: 'Find the inverse of A = [1 2 3; 0 1 4; 5 6 0].', steps: ['det A = 1(0 − 24) − 2(0 − 20) + 3(0 − 5) = −24 + 40 − 15 = **1**.', 'Cofactors: row 1: −24, 20, −5; row 2: 18, −15, 4; row 3: 5, −4, 1. Transposing gives adj A = [−24 18 5; 20 −15 −4; −5 4 1].', '**A⁻¹ = [−24 18 5; 20 −15 −4; −5 4 1]** (dividing by det A = 1). Check: first row of A times first column of A⁻¹ = −24 + 40 − 15 = 1.'] },
    { q: 'For which value of k is [k 3; 4 6] singular?', steps: ['det = 6k − 12.', '6k − 12 = 0 gives **k = 2**.'] },
  ]),

  // ---------- 16. Linear systems ----------
  L('pm-sys-1', 'mm-l6-linear-systems', '16.1', 'Solving 3 × 3 systems by Gaussian elimination', 17, ['Matrices', 'Equations'], [
    'A system of three linear equations in x, y and z is written as an **augmented matrix**, the coefficients with the constants in a last column. **Elementary row operations** do not change the solutions: swap two rows; multiply a row by a non-zero number; add a multiple of one row to another.',
    '**Gaussian elimination**: use row operations to reach **echelon form**, with zeros below the leading diagonal: first clear x from rows 2 and 3 using row 1, then clear y from row 3 using row 2. The last row then gives z, and **back substitution** gives y and then x.',
    'The final form shows the type of system:\n- a row [0 0 a | b] with a ≠ 0: a **unique solution**\n- a row [0 0 0 | b] with b ≠ 0: **inconsistent**, no solution (0 = b is impossible)\n- a row [0 0 0 | 0]: **infinitely many solutions**, with one variable free (set z = t and express x and y in terms of t).',
    'Geometrically each equation is a **plane**: a unique solution is a single common point; infinitely many solutions means the planes share a line; no solution means they have no common point (for example, two parallel planes, or three planes forming a triangular prism).',
  ], 'am-gauss', 'Clear x from rows 2 and 3, then y from row 3, then back-substitute.',
  ['After elimination, the last row of an augmented matrix is [0 0 0 | 4]. The system:', ['has no solution', 'has one solution', 'has infinitely many solutions', 'has z = 4'], '0 = 4 is impossible.'],
  [['Augmented matrix', 'The matrix of coefficients with the column of constants attached.'], ['Echelon form', 'A form with zeros below the leading diagonal, ready for back substitution.'], ['Back substitution', 'Solving from the last equation upwards.']],
  [
    { q: 'Solve x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2.', steps: ['R2 − 2R1: −3y − z = −9. R3 − R1: y − 2z = −4.', 'From the second: y = 2z − 4; substituting: −3(2z − 4) − z = −9, so −7z = −21, **z = 3**; then **y = 2**.', 'From row 1: **x = 6 − 2 − 3 = 1**. Check in equation 3: 1 + 4 − 3 = 2 ✓.'] },
    { q: 'Show that x + y + z = 2, x + 2y + 3z = 5, 2x + 3y + 4z = 8 has no solution.', steps: ['R2 − R1: y + 2z = 3. R3 − 2R1: y + 2z = 4.', 'Subtracting these: 0 = 1, impossible.', 'So the system is **inconsistent**.'] },
  ]),

  L('pm-sys-2', 'mm-l6-linear-systems', '16.2', 'Cramer’s rule, the inverse matrix and consistency', 16, ['Matrices', 'Equations'], [
    'A system can be written **AX = B**. If det A ≠ 0, the unique solution is **X = A⁻¹B**: multiply both sides on the left by A⁻¹. This is efficient when the same A is used with several different right-hand sides.',
    '**Cramer’s rule** (det A ≠ 0): **x = det Aₓ ÷ det A**, y = det A_y ÷ det A, z = det A_z ÷ det A, where Aₓ is A with its x-column replaced by the constants B, and similarly for the others. For two equations ax + by = e, cx + dy = f: x = (ed − bf)/(ad − bc) and y = (af − ce)/(ad − bc).',
    'If **det A = 0**, there is no unique solution: the system is either **inconsistent** (no solution) or has **infinitely many** solutions, and elimination tells which. For x + 2y = 3 and 2x + 4y = k, det A = 0; the system is consistent only when k = 6 (the same line twice).',
    'Parameters: "for which values of a does the system have a unique solution?" means "for which a is det A ≠ 0?". Then examine the excluded values separately with elimination.',
  ], 'am-gauss', 'Unique solution exactly when det A ≠ 0.',
  ['For 2x + 3y = 7 and 4x + 6y = 14, the system has:', ['infinitely many solutions', 'no solution', 'exactly one solution', 'two solutions'], 'The second equation is twice the first.'],
  [['Cramer’s rule', 'Solving a system by ratios of determinants.'], ['Consistent system', 'A system with at least one solution.'], ['Inconsistent system', 'A system with no solution.']],
  [
    { q: 'Use Cramer’s rule to solve 3x + 2y = 7 and x − 4y = 7.', steps: ['det A = 3(−4) − 2(1) = **−14**.', 'det Aₓ = 7(−4) − 2(7) = −42, so x = −42 ÷ −14 = **3**.', 'det A_y = 3(7) − 7(1) = 14, so y = 14 ÷ −14 = **−1**. Check: 9 − 2 = 7 ✓.'] },
    { q: 'For which value of a does the system x + y + z = 1, x + 2y + az = 2, x + 3y + 4z = 3 fail to have a unique solution?', steps: ['det A = 1(8 − 3a) − 1(4 − a) + 1(3 − 2) = 8 − 3a − 4 + a + 1 = 5 − 2a.', 'det A = 0 when **a = 2.5**.', 'For every other value of a there is exactly one solution.'] },
  ]),

  // ---------- 17. Permutations and combinations ----------
  L('pm-comb-1', 'mm-l6-combinatorics', '17.1', 'Counting principles, factorials and permutations', 16, ['Combinatorics'], [
    'The **multiplication principle**: if one choice can be made in m ways and then another in n ways, together they can be made in mn ways. The **addition principle**: if a choice is either of type A (m ways) or type B (n ways), with no overlap, there are m + n ways.',
    '**n! = n(n − 1)(n − 2)…2 × 1**, with 0! = 1, is the number of arrangements of n different objects in a row. The number of **permutations** (ordered arrangements) of r objects chosen from n is **nPr = n!/(n − r)!**, so 6P2 = 30.',
    'Special cases:\n- **repeated objects**: n objects with p alike of one kind and q alike of another give n!/(p! q!) arrangements; BANANA has 6!/(3! 2!) = 60\n- **round a circle**: (n − 1)! arrangements, since rotating everyone gives the same arrangement\n- **two objects together**: treat them as one block, then multiply by 2! for their order\n- **two objects apart**: total arrangements minus those with them together.',
    'Restrictions on positions: fill the restricted places first. Even 4-digit numbers using the digits 1 to 7 without repetition: the last digit is 2, 4 or 6 (3 ways), then the other places 6 × 5 × 4 = 120, giving 360.',
  ], 'am-counting', 'Fill the restricted position first, then the rest.',
  ['The number of arrangements of the letters of LEVEL is:', ['30', '120', '60', '20'], '5!/(2! 2!): two Ls and two Es.'],
  [['Factorial', 'n! = n × (n − 1) × … × 1, with 0! = 1.'], ['Permutation', 'An ordered arrangement of objects.'], ['Multiplication principle', 'Independent choices multiply.']],
  [
    { q: 'In how many ways can 6 people sit in a row if A and B must sit together? If they must be apart?', steps: ['Together: treat AB as one block: 5! = 120 arrangements, × 2 for the order within the block = **240**.', 'All arrangements: 6! = 720.', 'Apart: 720 − 240 = **480**.'] },
    { q: 'How many 3-letter codes can be made from 26 letters (a) with repetition, (b) without?', steps: ['(a) 26 × 26 × 26 = **17 576**.', '(b) 26P3 = 26 × 25 × 24 = **15 600**.'] },
  ]),

  L('pm-comb-2', 'mm-l6-combinatorics', '17.2', 'Combinations and selections with conditions', 15, ['Combinatorics'], [
    'A **combination** is a selection in which order does not matter. The number of ways to choose r objects from n is **nCr = n!/(r!(n − r)!)**: each selection can be arranged in r! orders, so nCr = nPr ÷ r!. Symmetry: **nCr = nC(n − r)**, since choosing r to take is the same as choosing n − r to leave.',
    'Selections from groups multiply: choosing 2 boys from 5 and 1 girl from 4 gives 5C2 × 4C1 = 10 × 4 = 40 ways.',
    '**At least / at most**: either add the separate cases, or use the complement: (number with at least one) = (total) − (number with none). Check that cases do not overlap.',
    'Deciding between permutations and combinations: ask "does changing the order give a different outcome?" A president and secretary chosen from 10 (different roles): 10P2 = 90. A committee of 2 from 10 (no roles): 10C2 = 45.',
  ], 'am-counting', 'Does order matter? Yes: permutation. No: combination.',
  ['The number of ways to choose 4 books from 9 is:', ['126', '3024', '36', '24'], '9C4 = 9!/(4! 5!).'],
  [['Combination', 'A selection of objects in which order does not matter.'], ['Complement method', 'Counting what is wanted as the total minus what is not wanted.']],
  [
    { q: 'A committee of 5 is chosen from 6 men and 4 women. How many committees contain at least 2 women?', steps: ['Total committees: 10C5 = **252**.', 'With no women: 6C5 = 6; with exactly one woman: 4 × 6C4 = 4 × 15 = 60.', 'At least 2 women: 252 − 6 − 60 = **186**.'] },
    { q: 'In how many ways can a team of 11 be chosen from a squad of 15 if the captain must be included?', steps: ['The captain is fixed, so choose the other 10 from the remaining 14.', '14C10 = 14C4 = **1001**.'] },
  ]),

  // ---------- 18. Vectors ----------
  L('pm-vec-1', 'mm-l6-vectors', '18.1', 'Vectors, position vectors and unit vectors in two and three dimensions', 15, ['Vectors'], [
    'A **vector** has magnitude and direction. In three dimensions it is written as a column vector or with the unit vectors **i, j, k** along the x, y and z axes: a = a₁i + a₂j + a₃k. Its magnitude is **|a| = √(a₁² + a₂² + a₃²)**, and the **unit vector** in its direction is â = a ÷ |a|.',
    'The **position vector** of a point A is the vector OA = a from the origin. Then **AB = b − a**, and the distance AB = |b − a|. Vectors are **parallel** when one is a scalar multiple of the other; points A, B and C are **collinear** when AB is a multiple of AC.',
    'The point P dividing AB internally in the ratio **m : n** (AP : PB = m : n) has position vector **p = (na + mb)/(m + n)**; the mid-point is ½(a + b). The centroid of triangle ABC is ⅓(a + b + c).',
    'Vectors prove geometric results without coordinates: for example, the line joining the mid-points of two sides of a triangle is parallel to the third side and half its length, because ½(b + c) − ½(a + c) = ½(b − a).',
  ], 'am-vector-3d', 'AB = b − a: "end minus start".',
  ['The position vector of the point dividing AB in the ratio 3 : 1 is:', ['(a + 3b)/4', '(3a + b)/4', '(a + b)/4', '(a + b)/2'], 'p = (na + mb)/(m + n) with m = 3, n = 1.'],
  [['Position vector', 'The vector from the origin to a point.'], ['Unit vector', 'A vector of magnitude 1.'], ['Collinear', 'Lying on one straight line.']],
  [
    { q: 'A(1, 2, −1) and B(4, −1, 5). Find AB, its length and the unit vector in its direction.', steps: ['AB = b − a = **3i − 3j + 6k**.', '|AB| = √(9 + 9 + 36) = √54 = **3√6**.', 'Unit vector = (3i − 3j + 6k)/(3√6) = **(i − j + 2k)/√6**.'] },
    { q: 'Find the point P dividing AB (above) internally in the ratio 2 : 1.', steps: ['p = (1 × a + 2 × b)/3.', '= ((1, 2, −1) + (8, −2, 10))/3 = (9, 0, 9)/3.', 'P = **(3, 0, 3)**.'] },
  ]),

  L('pm-vec-2', 'mm-l6-vectors', '18.2', 'The scalar product, perpendicular vectors and angles', 16, ['Vectors'], [
    'The **scalar (dot) product** of a and b is **a·b = |a||b| cos θ**, where θ is the angle between them, and in components **a·b = a₁b₁ + a₂b₂ + a₃b₃**. It is a number, not a vector. Properties: a·b = b·a; a·(b + c) = a·b + a·c; a·a = |a|²; i·i = 1 and i·j = 0.',
    'Two non-zero vectors are **perpendicular exactly when a·b = 0**. This finds unknown components (for 2i + λj − k to be perpendicular to i + 3j + 2k: 2 + 3λ − 2 = 0, so λ = 0) and tests right angles in triangles.',
    'The **angle between two vectors** comes from **cos θ = a·b ÷ (|a||b|)**. A negative scalar product means an obtuse angle. To find angle ABC in a triangle, use the vectors **BA and BC**, both starting at B.',
    'The **component (projection)** of a in the direction of b is a·b̂ = a·b ÷ |b|. In mechanics, the work done by a force F moving through a displacement s is the scalar product F·s.',
  ], 'am-dot-angle', 'For angle ABC use BA and BC, both from B.',
  ['The angle between i + j and j + k is:', ['60°', '45°', '90°', '30°'], 'cos θ = 1/(√2 × √2) = ½.'],
  [['Scalar product', 'a·b = |a||b| cos θ = a₁b₁ + a₂b₂ + a₃b₃.'], ['Projection', 'The component of one vector in the direction of another.']],
  [
    { q: 'Find the angle between a = 2i + j − 2k and b = i − 4j + k.', steps: ['a·b = 2 − 4 − 2 = **−4**.', '|a| = 3, |b| = √18 = 3√2.', 'cos θ = −4 ÷ (9√2) = −0.314, so **θ = 108.3°** (obtuse, since a·b < 0).'] },
    { q: 'A(1, 0, 2), B(2, 1, 0) and C(0, 3, 1). Find angle ABC.', steps: ['BA = a − b = (−1, −1, 2); BC = c − b = (−2, 2, 1).', 'BA·BC = 2 − 2 + 2 = 2; |BA| = √6, |BC| = 3.', 'cos B = 2 ÷ (3√6) = 0.272, so **angle ABC = 74.2°**.'] },
  ]),

  // ---------- 19. Lines in space ----------
  L('pm-line3d-1', 'mm-l6-lines-space', '19.1', 'Equations of lines; intersecting, parallel and skew lines', 17, ['Vectors', 'Geometry'], [
    'The line through the point with position vector **a** in the direction **d** has vector equation **r = a + λd**, where each value of the parameter λ gives one point. The line through A and B is r = a + λ(b − a). In **Cartesian form**, r = (a₁, a₂, a₃) + λ(d₁, d₂, d₃) becomes (x − a₁)/d₁ = (y − a₂)/d₂ = (z − a₃)/d₃.',
    'Two lines in space are:\n- **parallel** if their direction vectors are multiples of each other\n- **intersecting** if there are values of λ and μ making all three components equal\n- **skew** if they are not parallel and do not intersect (only possible in three dimensions).',
    'To test for intersection: equate the components of r₁ = a + λd₁ and r₂ = b + μd₂, solve **two** of the three equations for λ and μ, then **check the third**. If it is satisfied, substitute to find the point of intersection; if not, the lines are skew (when not parallel).',
    'The **angle between two lines** is the angle between their direction vectors: cos θ = |d₁·d₂| ÷ (|d₁||d₂|), taking the modulus to give the acute angle. A **plane** through a point A with normal vector n has equation r·n = a·n, or in Cartesian form ax + by + cz = d, where n = ai + bj + ck.',
  ], 'am-skew-lines', 'Solve two component equations, then check the third.',
  ['The lines r = i + λ(2i − j + k) and r = 3j + μ(−4i + 2j − 2k) are:', ['parallel', 'skew', 'intersecting', 'the same line'], 'The second direction is −2 times the first.'],
  [['Vector equation of a line', 'r = a + λd: a point on the line plus multiples of a direction vector.'], ['Skew lines', 'Lines in space that are neither parallel nor intersecting.'], ['Parameter', 'The variable (λ or μ) whose values give the points of a line.']],
  [
    { q: 'Show that L₁: r = (1, 0, 2) + λ(1, 1, −1) and L₂: r = (3, 4, 0) + μ(1, 2, −1) intersect, and find the point.', steps: ['x: 1 + λ = 3 + μ; y: λ = 4 + 2μ. Subtracting: 1 = −1 − μ, so μ = −2 and λ = 0.', 'Check z: L₁ gives 2 − 0 = 2; L₂ gives 0 − (−2) = 2 ✓.', 'They intersect at **(1, 0, 2)**.'] },
    { q: 'Show that L₁ (above) and L₃: r = (3, 4, −2) + μ(1, 2, −1) are skew.', steps: ['The directions (1, 1, −1) and (1, 2, −1) are not multiples, so the lines are not parallel.', 'The x and y equations again give λ = 0, μ = −2.', 'z: L₁ gives 2, L₃ gives −2 + 2 = 0: 2 ≠ 0, so they do not meet: the lines are **skew**.'] },
  ]),

  L('pm-line3d-2', 'mm-l6-lines-space', '19.2', 'Shortest distances: the foot of the perpendicular and the common perpendicular', 17, ['Vectors', 'Geometry'], [
    '**Foot of the perpendicular** from a point P to the line r = a + λd: a general point of the line is F = a + λd. The vector PF is perpendicular to the line when **PF·d = 0**; this equation gives λ, hence F, and the **shortest distance** from P to the line is |PF|.',
    '**Shortest distance between two skew lines**: take general points P = a + λd₁ on the first and Q = b + μd₂ on the second. The segment PQ is shortest when it is perpendicular to **both** lines: **PQ·d₁ = 0 and PQ·d₂ = 0**. Solve these two equations for λ and μ; the shortest distance is |PQ|, along the **common perpendicular**.',
    'For parallel lines, the shortest distance is the distance from any point of one line to the other line, found with the foot of the perpendicular.',
    'Applications: the closest approach of two aircraft flying on straight paths, the shortest pipe joining two straight pipes that do not meet, and checking clearances in building frames.',
  ], 'am-foot-perp', 'Perpendicular to the line: (vector from the point)·(direction) = 0.',
  ['To find the foot F of the perpendicular from P to r = a + λd, you solve:', ['(a + λd − p)·d = 0', '(a + λd)·p = 0', 'λ = |d|', 'a·d = 0'], 'PF must be perpendicular to d.'],
  [['Foot of the perpendicular', 'The point of a line nearest to a given point.'], ['Common perpendicular', 'The segment perpendicular to both of two skew lines, along which their distance is shortest.']],
  [
    { q: 'Find the foot of the perpendicular from P(1, 1, 1) to the line r = (2, 0, 1) + λ(1, 1, 0), and the shortest distance.', steps: ['F = (2 + λ, λ, 1), so PF = (1 + λ, λ − 1, 0).', 'PF·(1, 1, 0) = 1 + λ + λ − 1 = 2λ = 0, so λ = 0 and **F = (2, 0, 1)**.', 'Distance |PF| = |(1, −1, 0)| = **√2**.'] },
    { q: 'Find the shortest distance between the x-axis, r = λ(1, 0, 0), and the line r = (0, 1, 1) + μ(0, 1, 0).', steps: ['P = (λ, 0, 0), Q = (0, 1 + μ, 1); PQ = (−λ, 1 + μ, 1).', 'PQ·(1, 0, 0) = −λ = 0 and PQ·(0, 1, 0) = 1 + μ = 0, so λ = 0, μ = −1.', 'PQ = (0, 0, 1), so the shortest distance is **1 unit**.'] },
  ]),

  // ---------- 20. Limits and continuity ----------
  L('pm-lim-1', 'mm-l6-limits', '20.1', 'Limits: one-sided limits and indeterminate forms', 16, ['Calculus'], [
    '**lim (x → a) f(x) = L** means that f(x) gets as close as we like to L when x is close enough to a (x ≠ a). The value f(a) itself does not matter, and need not even exist. The **left-hand limit** lim (x → a⁻) uses x < a and the **right-hand limit** lim (x → a⁺) uses x > a; **the limit exists only when both exist and are equal**.',
    'Evaluating limits: first **substitute**; if the result is a number, that is the limit (for continuous functions). If substitution gives the **indeterminate form 0/0**, simplify first:\n- factorise and cancel: lim (x → 2) (x² − 4)/(x − 2) = lim (x + 2) = 4\n- rationalise: lim (x → 0) (√(1 + x) − 1)/x = lim 1/(√(1 + x) + 1) = ½.',
    '**Standard limit**: with x in radians, **lim (x → 0) (sin x)/x = 1**. It follows that lim (sin kx)/x = k, lim (tan x)/x = 1 and lim (1 − cos x)/x² = ½.',
    'A quotient whose denominator tends to 0 while the numerator does not has no finite limit: 1/x² → +∞ as x → 0, and 1/x → +∞ from the right but −∞ from the left, so lim (x → 0) 1/x does not exist.',
  ], 'am-limits', 'Substitute first; if you get 0/0, factorise or rationalise.',
  ['lim (x → 1) (x³ − 1)/(x − 1) equals:', ['3', '1', '0', 'does not exist'], 'x³ − 1 = (x − 1)(x² + x + 1) → 3.'],
  [['Limit', 'The value a function approaches as x approaches a given value.'], ['One-sided limit', 'A limit taken with x approaching from one side only.'], ['Indeterminate form', 'An expression such as 0/0 whose limit cannot be found by substitution.']],
  [
    { q: 'Evaluate lim (x → 3) (x² − 9)/(x² − 5x + 6).', steps: ['Substitution gives 0/0. Factorise: (x − 3)(x + 3)/((x − 3)(x − 2)).', 'Cancel: (x + 3)/(x − 2).', 'Limit = 6/1 = **6**.'] },
    { q: 'Evaluate lim (x → 0) (sin 3x)/(2x).', steps: ['Write it as (3/2) × (sin 3x)/(3x).', 'As x → 0, 3x → 0 and (sin 3x)/(3x) → 1.', 'Limit = **3/2**.'] },
  ]),

  L('pm-lim-2', 'mm-l6-limits', '20.2', 'Limits at infinity and continuity', 16, ['Calculus'], [
    '**Limits at infinity**: for a rational function, divide numerator and denominator by the highest power of x in the denominator. lim (x → ∞) (2x² − x)/(5x² + 3) = lim (2 − 1/x)/(5 + 3/x²) = 2/5. If the numerator has the higher degree, the function grows without limit; if lower, the limit is 0. A finite limit L gives a **horizontal asymptote** y = L.',
    'A function f is **continuous at x = a** when three conditions hold: f(a) is defined, lim (x → a) f(x) exists, and **lim (x → a) f(x) = f(a)**. Informally, the graph can be drawn through x = a without lifting the pen. Polynomials, sin x, cos x and eˣ are continuous everywhere; rational functions are continuous except where the denominator is zero.',
    'Types of discontinuity:\n- **removable**: the limit exists but f(a) is undefined or different (a hole, as in (x² − 4)/(x − 2) at x = 2)\n- **jump**: the left and right limits differ (a step)\n- **infinite**: the function grows without bound (a vertical asymptote, as in 1/x at 0).',
    'Piecewise functions: to make f continuous at the join, set the left and right limits equal. Continuity matters later: the **intermediate value theorem** says that a function continuous on [a, b] with f(a) and f(b) of opposite signs has a root between a and b, the basis of locating roots numerically.',
  ], 'am-limits', 'Continuous at a: defined there, limit exists, and the two are equal.',
  ['lim (x → ∞) (3x + 7)/(x² + 1) equals:', ['0', '3', '∞', '7'], 'The denominator has the higher degree.'],
  [['Continuous function', 'A function whose limit at each point equals its value there.'], ['Horizontal asymptote', 'A line y = L that a graph approaches as x → ±∞.'], ['Removable discontinuity', 'A hole in a graph, where the limit exists but differs from the value or the value is missing.']],
  [
    { q: 'f(x) = x² + k for x < 1 and f(x) = 3x − 1 for x ≥ 1. Find k so that f is continuous at x = 1.', steps: ['Left-hand limit: 1 + k. Right-hand limit and f(1): 3 − 1 = 2.', 'For continuity, 1 + k = 2.', '**k = 1**.'] },
    { q: 'Show that x³ − 3x + 1 = 0 has a root between 0 and 1.', steps: ['f(0) = 1 > 0 and f(1) = 1 − 3 + 1 = −1 < 0.', 'f is a polynomial, so it is continuous on [0, 1].', 'The sign changes, so by the intermediate value theorem **there is a root between 0 and 1**.'] },
  ]),

  // ---------- 24. Revision ----------
  L('pm-l6-paper1', 'mm-l6-papers', '24.1', 'The A Level mathematics papers and Paper 1 drills', 13, ['Examination'], [
    'Pure Mathematics is examined within GCE **Pure Mathematics with Mechanics (0765)** and **Pure Mathematics with Statistics (0770)**. Each has three papers: **Paper 1** (1½ hours, multiple choice) and **Papers 2 and 3** (3 hours each, structured questions). In June 2026, Paper 1 of both subjects was sat on Thursday 11 June, and Papers 2 and 3 on Friday 12 June. Check your school’s past papers for how the questions are shared between pure and applied topics.',
    'Multiple-choice technique in mathematics:\n- work the answer out on rough paper, then match it\n- **test the options**: substitute a simple value such as x = 0, 1 or 2 into an identity or a general formula to eliminate wrong options\n- check the sign and the interval in inequalities and trigonometric equations\n- use the discriminant, the factor theorem or det = 0 rather than solving fully when only a condition is asked for.',
    'Lower Sixth topics to drill: quadratics and the discriminant, moduli, the factor and remainder theorems, partial fractions, logic and truth tables, lines and circles, logarithms, functions and inverses, sequences and series, the binomial theorem, radians and identities, matrices, counting, vectors, limits, derivatives and integrals.',
    'Practise in timed sets of 10 items, allowing a little over 2 minutes per item, and record the idea behind every mistake.',
  ], 'am-gce-maths', 'Test the options with a simple value of x.',
  ['An option for the expansion of (1 + x)⁻² is 1 − 2x + 3x². Testing with x = 0.1 gives:', ['1.0 − 0.2 + 0.03 = 0.83, close to 1/1.21 = 0.826, so it is plausible', 'a negative number, so it is wrong', 'exactly 1', 'no information'], 'A quick numerical check.'],
  [['Distractor', 'A wrong option written to catch a common mistake.']],
  [
    { q: 'Item: if (x − 2) is a factor of x³ − kx + 2, then k = A 3, B 5, C 4, D 1.', steps: ['f(2) = 8 − 2k + 2 = 0.', '10 = 2k, so k = 5.', '**Answer B**.'] },
  ]),

  L('pm-l6-paper2', 'mm-l6-papers', '24.2', 'Paper 2 practice: long answers, proofs and vectors', 15, ['Examination'], [
    'Long questions build in steps: an early part often gives a result to be used "hence" in a later part. If you cannot prove a given result, **use it anyway** in the next part: the later marks are still available.',
    'Setting out: write every line of working; state the method ("using the factor theorem", "by the remainder theorem", "expanding along the first row"); keep exact values (surds, π, fractions) unless a decimal answer is asked for; give angles in the unit asked (degrees or radians).',
    'Proofs: in induction, write the four parts (base case, assumption, step, conclusion); in identities, start from one side and finish at the other; in "show that" questions, the final line must match the given result exactly.',
    'Vectors and coordinate geometry: draw a sketch; label points; write vectors as b − a; check perpendicularity with the scalar product and intersection by checking the third equation.',
  ], 'am-induction', 'If you cannot prove part (a), still use its result in part (b).',
  ['A question says "show that x = 2 is a root, hence factorise f(x) fully". You should:', ['show f(2) = 0, then divide by (x − 2) and factorise the quadratic', 'factorise by guessing', 'use the quadratic formula on f(x)', 'only show f(2) = 0'], '"Hence" means use the previous part.'],
  [['Show that', 'A question giving the result, where every step of the working earns marks.']],
  [
    { q: 'Prove that Σ (r = 1 to n) r(r + 1) = ⅓n(n + 1)(n + 2), and hence find 1×2 + 2×3 + … + 20×21.', steps: ['Σ r(r + 1) = Σ r² + Σ r = ⅙n(n + 1)(2n + 1) + ½n(n + 1) = ⅙n(n + 1)(2n + 4) = **⅓n(n + 1)(n + 2)**.', 'Hence, with n = 20: ⅓ × 20 × 21 × 22.', '= **3080**.'] },
  ]),
];
