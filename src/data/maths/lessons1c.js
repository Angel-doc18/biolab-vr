// Mathematics lessons for Form 1, term 3: ratio, percentage and proportion,
// quadrilaterals, symmetry and coordinates, solid figures, collecting and
// displaying data. Original text written for this app, following the MINESEC
// Form 1 syllabus. **double asterisks** mark key terms; `examples` are worked
// examples.

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

export const LESSONS_1C = [
  // ---------- Ratio, percentage and proportion ----------
  L('ma-ratio-1', 'ma-f1-ratio', '11.1', 'Ratios and sharing in a given ratio', 12, ['Numbers', 'Money'], [
    'A **ratio** compares two quantities of the same kind, measured in the same unit. If a class has 18 boys and 24 girls, the ratio of boys to girls is 18 : 24, read "18 to 24". The order matters: the ratio of girls to boys is 24 : 18.',
    'Ratios are simplified like fractions, by dividing both parts by their HCF: 18 : 24 = 3 : 4. Change the quantities into the same unit first: 50 cm : 2 m = 50 cm : 200 cm = 1 : 4. A ratio a : b can also be written as the fraction a/b.',
    'To **share** an amount in a given ratio (figure):\n- add the parts to find the number of shares\n- divide the amount by this number to find one share\n- multiply one share by each part.\nTo share 12 000 FCFA in the ratio 2 : 3: there are 5 shares, one share is 12 000 ÷ 5 = 2400 FCFA, so the amounts are 4800 FCFA and 7200 FCFA. Check: 4800 + 7200 = 12 000.',
    'A ratio can have three parts: builders often mix cement, sand and gravel in the ratio 1 : 2 : 4 to make concrete.',
  ], 'mf1-ratio-bar', 'Always check that the shares add up to the amount you started with.',
  ['The ratio 45 cm : 1.5 m in its simplest form is:', ['3 : 10', '45 : 15', '3 : 1', '1 : 3'], '1.5 m = 150 cm, and 45 : 150 = 3 : 10.'],
  [['Ratio', 'A comparison of two quantities of the same kind, written a : b.'], ['Simplest form of a ratio', 'A ratio whose parts have no common factor except 1.'], ['Share', 'One of the equal parts an amount is divided into.']],
  [
    { q: 'Three friends share 45 000 FCFA in the ratio 2 : 3 : 4. How much does each get?', steps: ['Number of shares: 2 + 3 + 4 = 9.', 'One share = 45 000 ÷ 9 = 5000 FCFA.', 'They get **10 000, 15 000 and 20 000 FCFA**; check: the total is 45 000.'] },
    { q: 'Cement, sand and gravel are mixed in the ratio 1 : 2 : 4. How many wheelbarrows of sand and of gravel go with 6 wheelbarrows of cement?', steps: ['Cement is 1 part, so 1 part = 6 wheelbarrows.', 'Sand: 2 × 6 = **12 wheelbarrows**. Gravel: 4 × 6 = **24 wheelbarrows**.'] },
  ]),

  L('ma-percent-1', 'ma-f1-ratio', '11.2', 'Percentages', 12, ['Numbers', 'Money'], [
    '**Per cent** means "out of a hundred": 25% = 25/100 = 1/4 = 0.25. Useful ones to know: 50% = 1/2, 25% = 1/4, 75% = 3/4, 10% = 1/10, 20% = 1/5 and 33⅓% = 1/3.',
    'To change a fraction or a decimal into a percentage, multiply by 100: 3/5 × 100 = 60% and 0.07 × 100 = 7%. To write one quantity as a percentage of another, work out (part ÷ whole) × 100: a mark of 36 out of 45 is 36 ÷ 45 × 100 = 80%.',
    'To find a **percentage of a quantity**, change the percentage into a fraction or a decimal and multiply: 15% of 20 000 FCFA = 15/100 × 20 000 = 3000 FCFA.',
    'For an **increase** or a **decrease**, add or take away the percentage of the original amount. A price of 20 000 FCFA that rises by 15% becomes 20 000 + 3000 = 23 000 FCFA (figure). A short way: a rise of 15% multiplies by 1.15, and a fall of 15% multiplies by 0.85. Percentages are found on bills, in bank interest and in shop **discounts**.',
  ], 'mf1-percent-bar', 'The percentage is always of the original amount, not of the new one.',
  ['What is 30% of 4500 FCFA?', ['1350 FCFA', '150 FCFA', '1500 FCFA', '3150 FCFA'], '30/100 × 4500 = 1350.'],
  [['Percentage', 'A number out of 100, written with the sign %.'], ['Percentage increase', 'A rise worked out as a percentage of the original amount.'], ['Discount', 'A reduction in price.']],
  [
    { q: 'A shop gives a discount of 20% on a pair of shoes marked 12 500 FCFA. What is the new price?', steps: ['Discount = 20% of 12 500 = 0.2 × 12 500 = 2500 FCFA.', 'New price = 12 500 − 2500 = **10 000 FCFA**.'] },
    { q: 'In a school of 1200 pupils, 540 are girls. What percentage of the pupils are boys?', steps: ['Boys: 1200 − 540 = 660.', '660 ÷ 1200 × 100 = **55%**.'] },
  ]),

  L('ma-proportion-1', 'ma-f1-ratio', '11.3', 'Proportion and the coefficient of proportionality', 12, ['Numbers', 'Money'], [
    'Two quantities are **proportional** when one is always the same number of times the other. The price of exercise books is proportional to the number of books: 1 book costs 250 FCFA, 4 books cost 1000 FCFA and 10 books cost 2500 FCFA.',
    'In a **table of proportionality** you go from the first row to the second by multiplying by the same number, the **coefficient of proportionality** (figure). Here it is 250, the price of one book. To check whether a table is proportional, divide each number in the second row by the number above it: all the quotients must be equal.',
    'The **unitary method**: find the value of one unit, then multiply. If 6 m of cloth cost 9000 FCFA, then 1 m costs 1500 FCFA and 9 m cost 13 500 FCFA.',
    'A **map scale** is a proportion. On a map with a scale of 1 : 500 000, 1 cm on the map stands for 500 000 cm = 5 km on the ground, so 7 cm on the map stand for 35 km. Not everything is proportional: a child’s height is not proportional to their age, and a taxi fare with a fixed starting charge is not proportional to the distance.',
  ], 'mf1-proportion-table', 'In a proportional table, 0 in the first row always goes with 0 in the second; if it does not, the quantities are not proportional.',
  ['5 kg of sugar cost 4500 FCFA. At the same price, 8 kg cost:', ['7200 FCFA', '4508 FCFA', '900 FCFA', '36 000 FCFA'], '1 kg costs 900 FCFA, and 8 × 900 = 7200.'],
  [['Proportional quantities', 'Quantities where one is always the same multiple of the other.'], ['Coefficient of proportionality', 'The number that multiplies one quantity to give the other.'], ['Unitary method', 'Finding the value of one unit first, then multiplying.'], ['Scale', 'The ratio of a length on a map or plan to the real length.']],
  [
    { q: 'Is this table proportional? Fuel in litres: 2, 5, 8. Price in FCFA: 1680, 4200, 6720.', steps: ['1680 ÷ 2 = 840; 4200 ÷ 5 = 840; 6720 ÷ 8 = 840.', 'All the quotients are equal, so the table **is proportional**, with coefficient **840**, the price of 1 litre.'] },
    { q: 'Two villages are 6.5 cm apart on a map with a scale of 1 : 200 000. How far apart are they on the ground?', steps: ['1 cm on the map stands for 200 000 cm = 2 km.', '6.5 × 2 = **13 km**.'] },
  ]),

  // ---------- Quadrilaterals ----------
  L('ma-quads-1', 'ma-f1-quads', '12.1', 'Parallelograms and special quadrilaterals', 12, ['Geometry'], [
    'A **quadrilateral** has four sides, four vertices and two **diagonals**. Its angles add up to 360°, because a diagonal cuts it into two triangles.',
    'A **parallelogram** has its opposite sides parallel. Its properties:\n- its opposite sides are equal\n- its opposite angles are equal\n- its diagonals bisect each other (they cross at their midpoints)\n- the point where the diagonals cross is a centre of symmetry.',
    'Special parallelograms (figure):\n- **rectangle**: four right angles; its diagonals are equal\n- **rhombus**: four equal sides; its diagonals cross at right angles\n- **square**: both a rectangle and a rhombus, with four equal sides, four right angles and equal diagonals that cross at right angles.',
    'Other quadrilaterals:\n- **trapezium**: only one pair of parallel sides\n- **kite**: two pairs of equal adjacent sides; its diagonals cross at right angles, and one of them is a line of symmetry.',
  ], 'mf1-quads', 'A square is a special rectangle and a special rhombus, so everything true for them is also true for a square.',
  ['Three angles of a quadrilateral are 90°, 110° and 70°. The fourth angle is:', ['90°', '110°', '70°', '270°'], '360 − 90 − 110 − 70 = 90.'],
  [['Quadrilateral', 'A plane shape with four straight sides.'], ['Parallelogram', 'A quadrilateral with both pairs of opposite sides parallel.'], ['Rhombus', 'A parallelogram with four equal sides.'], ['Trapezium', 'A quadrilateral with only one pair of parallel sides.'], ['Kite', 'A quadrilateral with two pairs of equal adjacent sides.'], ['Diagonal', 'A segment joining two opposite vertices.']],
  [
    { q: 'ABCD is a parallelogram with ∠A = 65°. Find its other three angles.', steps: ['Opposite angles are equal, so ∠C = **65°**.', 'The four angles add up to 360°, so ∠B + ∠D = 360 − 130 = 230°.', '∠B = ∠D = **115°**.'] },
    { q: 'The diagonals of a quadrilateral bisect each other, are equal and cross at right angles. What is the quadrilateral?', steps: ['Diagonals that bisect each other: it is a parallelogram.', 'Equal diagonals: a rectangle. Diagonals at right angles: a rhombus.', 'It is both a rectangle and a rhombus, so it is a **square**.'] },
  ]),

  L('ma-quadarea-1', 'ma-f1-quads', '12.2', 'Perimeter and area of quadrilaterals', 12, ['Geometry', 'Mensuration'], [
    'The **perimeter** is the distance all the way round: add the four sides. For a rectangle P = 2(l + w); for a square or a rhombus P = 4s.',
    'The **area** is the surface covered, measured in square units (cm², m², hectares). The formulas (figure):\n- rectangle: A = l × w\n- square: A = s²\n- parallelogram: A = base × height, where the height is perpendicular to the base, not the slanting side\n- trapezium: A = ½ (a + b) × h, where a and b are the parallel sides and h is the distance between them\n- rhombus and kite: A = ½ × d₁ × d₂, half the product of the diagonals.',
    'Why the parallelogram formula works: cut a right-angled triangle off one end and move it to the other end; the parallelogram becomes a rectangle with the same base and the same height.',
    'Land is measured in square metres and **hectares**: 1 ha = 10 000 m², the area of a square 100 m by 100 m.',
  ], 'mf1-area-formulas', 'Before using a formula, check that all the lengths are in the same unit.',
  ['A rhombus has diagonals of 10 cm and 6 cm. Its area is:', ['30 cm²', '60 cm²', '16 cm²', '32 cm²'], 'A = ½ × 10 × 6.'],
  [['Area', 'The amount of surface a shape covers, in square units.'], ['Hectare', 'A unit of land area: 1 ha = 10 000 m².'], ['Height of a parallelogram', 'The perpendicular distance between a base and the opposite side.']],
  [
    { q: 'A classroom floor is 9 m long and 7 m wide. Tiles cost 4500 FCFA per square metre. Find the cost of tiling the floor.', steps: ['Area = 9 × 7 = 63 m².', 'Cost = 63 × 4500 = **283 500 FCFA**.'] },
    { q: 'A farm in the shape of a trapezium has parallel sides of 120 m and 80 m, which are 50 m apart. Find its area in hectares.', steps: ['A = ½ (120 + 80) × 50 = ½ × 200 × 50 = 5000 m².', '1 ha = 10 000 m², so the farm covers **0.5 ha**.'] },
  ]),

  // ---------- Symmetry and coordinates ----------
  L('ma-symmetry-1', 'ma-f1-symmetry', '13.1', 'Line symmetry', 12, ['Geometry', 'Transformations'], [
    'A shape has **line symmetry** when a straight line divides it into two halves that fit exactly on each other if the shape is folded along the line. The line is a **line of symmetry** (an axis of symmetry). Many things around us have one: a butterfly, a cocoa leaf, the front of a house, and the letters A, M and T.',
    'The **line symmetry** (reflection) with axis (D) moves each point M to its **image** M′ on the other side, so that (D) is the perpendicular bisector of [MM′]: M and M′ are the same distance from (D), and [MM′] is perpendicular to (D) (figure). A point on (D) is its own image.',
    'A line symmetry keeps lengths and angles: the image of a segment is a segment of the same length, the image of a circle is a circle with the same radius, and the image of a line is a line. The image is a mirror image, turned over.',
    'Numbers of lines of symmetry: an isosceles triangle has 1, an equilateral triangle 3, a rectangle 2, a rhombus 2, a square 4, a regular hexagon 6, and a circle has an endless number (every diameter). To draw the image of a point on squared paper, count the squares from the point to the axis and count the same number on the other side.',
  ], 'mf1-line-symmetry', 'Check a line of symmetry by imagining the fold: the two halves must match exactly, not just look alike.',
  ['How many lines of symmetry does an equilateral triangle have?', ['3', '1', '0', '6'], 'One through each vertex and the midpoint of the opposite side.'],
  [['Line of symmetry', 'A line that divides a shape into two halves that are mirror images.'], ['Image', 'The point or shape obtained after a symmetry.'], ['Reflection', 'Another name for a line symmetry.']],
  [
    { q: 'A and A′ are symmetric about the line (D), and A is 2.5 cm from (D). Find AA′.', steps: ['(D) is the perpendicular bisector of [AA′], so A′ is also 2.5 cm from (D).', 'AA′ = 2.5 + 2.5 = **5 cm**.'] },
    { q: 'Which of these capital letters have a line of symmetry: H, N, E, S, W?', steps: ['H has a vertical and a horizontal line; E has a horizontal line; W has a vertical line.', 'N and S have none.', 'So **H, E and W** have line symmetry.'] },
  ]),

  L('ma-pointsym-1', 'ma-f1-symmetry', '13.2', 'Point symmetry', 12, ['Geometry', 'Transformations'], [
    'The **point symmetry** (central symmetry) with centre O moves each point M to the point M′ such that O is the **midpoint** of [MM′] (figure). It is the same as a half turn, 180°, about O. The centre O is its own image.',
    'To construct the image of a point M, draw the half-line [MO) and mark M′ on it beyond O so that OM′ = OM; compasses with the point on O make this exact.',
    'A point symmetry keeps lengths and angles, and the image of a line is a line **parallel** to it. Unlike a line symmetry, it does not turn a shape over: the image is the same shape turned upside down.',
    'A shape has a **centre of symmetry** O when a half turn about O maps it onto itself: a parallelogram (its centre is where the diagonals cross), a circle (its centre) and the letters N, S and Z all have one. A rectangle, a rhombus and a square have both a centre of symmetry and lines of symmetry.',
  ], 'mf1-point-symmetry', 'O is always exactly halfway between a point and its image.',
  ['O is the centre of a point symmetry, M′ is the image of M, and OM = 3.5 cm. Then MM′ =', ['7 cm', '3.5 cm', '1.75 cm', '10.5 cm'], 'O is the midpoint of [MM′].'],
  [['Point symmetry', 'The symmetry that sends each point M to M′ so that the centre O is the midpoint of [MM′].'], ['Centre of symmetry', 'A point about which a half turn maps a shape onto itself.'], ['Half turn', 'A turn of 180°.']],
  [
    { q: 'Which of these shapes have a centre of symmetry: an isosceles triangle, a parallelogram, a kite, a regular hexagon?', steps: ['A parallelogram has one, where its diagonals cross; so has a regular hexagon, at its centre.', 'An isosceles triangle and a kite have none: no half turn fits them onto themselves.', 'So **the parallelogram and the regular hexagon**.'] },
    { q: 'O is a point not on the line (AB). The image of (AB) by the point symmetry with centre O is (A′B′). What can you say about (A′B′)?', steps: ['The image of a line by a point symmetry is a line parallel to it.', 'So **(A′B′) ∥ (AB)**, and A′B′ = AB.'] },
  ]),

  L('ma-coords-1', 'ma-f1-symmetry', '13.3', 'The Cartesian plane and coordinates', 12, ['Geometry', 'Graphs'], [
    'Two number lines drawn at right angles make a **Cartesian plane**: the horizontal **x-axis** and the vertical **y-axis** meet at the **origin** O, the point (0, 0). The plane is named after the French mathematician René Descartes.',
    'Every point has two **coordinates**, written (x, y) (figure): first the **abscissa** x, the distance across (to the right is positive, to the left negative), then the **ordinate** y, the distance up (up is positive, down negative). The point (3, −2) is 3 units to the right of O and 2 units down. The order matters: (3, −2) and (−2, 3) are different points.',
    'The axes cut the plane into four **quadrants**, numbered anticlockwise from the top right; in the first quadrant both coordinates are positive. A point on the x-axis has y = 0, and a point on the y-axis has x = 0. Before plotting, choose a **scale** that fits all the points on the page, for example 1 cm for 1 unit, and mark it on both axes.',
    'Symmetry on the plane: reflection in the y-axis changes (x, y) into (−x, y); reflection in the x-axis changes it into (x, −y); and the point symmetry with centre O changes it into (−x, −y).',
  ], 'cartesian-plane', 'x comes before y, as a comes before b: go across first, then up or down.',
  ['The point (−3, −5) lies in the:', ['Third quadrant', 'First quadrant', 'Second quadrant', 'Fourth quadrant'], 'Both coordinates are negative: to the left and down.'],
  [['Origin', 'The point (0, 0) where the axes cross.'], ['Abscissa', 'The x-coordinate of a point.'], ['Ordinate', 'The y-coordinate of a point.'], ['Quadrant', 'One of the four regions the axes divide the plane into.']],
  [
    { q: 'Plot A(1, 1), B(5, 1) and C(5, 4). Find the point D that makes ABCD a rectangle.', steps: ['[AB] is horizontal (y = 1) and [BC] is vertical (x = 5).', 'D must be above A and level with C, so x = 1 and y = 4.', '**D(1, 4)**; the rectangle is 4 units by 3 units.'] },
    { q: 'Give the images of P(4, −3) by reflection in the x-axis, by reflection in the y-axis and by the point symmetry with centre O.', steps: ['Reflection in the x-axis: **(4, 3)**.', 'Reflection in the y-axis: **(−4, −3)**.', 'Point symmetry with centre O: **(−4, 3)**.'] },
  ]),

  // ---------- Solid figures ----------
  L('ma-solids-1', 'ma-f1-solids', '14.1', 'Cubes, cuboids and cones: faces, edges and nets', 12, ['Mensuration'], [
    'A **solid** takes up space in three dimensions. Its flat surfaces are **faces**, the lines where two faces meet are **edges**, and the corners are **vertices**.',
    'A **cube** has 6 equal square faces, 12 equal edges and 8 vertices, like a die or a sugar cube. A **cuboid** has 6 rectangular faces in 3 equal pairs, 12 edges and 8 vertices, like a box of chalk, a brick or a carton of soap. Opposite faces of a cuboid are equal and parallel (figure).',
    'A right circular **cone** has a flat circular base, a curved surface and one vertex, the **apex**. Its **height** h is the distance from the apex straight down to the centre of the base; its **slant height** l is the distance from the apex to the edge of the base, along the curved surface. A funnel and an ice-cream cone have this shape.',
    'A **net** is a flat shape that folds up to make a solid. A cube has 11 different nets, each made of 6 squares, for example a cross shape. The net of a cuboid is 6 rectangles; the net of a cone is a sector of a circle (the curved surface) and a circle (the base). Cartons for packaging are made by cutting out and folding nets.',
  ], 'mf1-solids', 'In a sketch of a solid, draw the hidden edges as dashed lines.',
  ['How many edges does a cube have?', ['12', '6', '8', '24'], '4 round the top, 4 round the bottom and 4 upright.'],
  [['Face', 'A flat surface of a solid.'], ['Edge', 'A line where two faces of a solid meet.'], ['Vertex of a solid', 'A corner where edges meet.'], ['Net', 'A flat shape that folds up to make a solid.'], ['Slant height', 'The distance from the apex of a cone to the edge of its base.']],
  [
    { q: 'A model cube is made of wire, and each edge is 15 cm long. How much wire is needed?', steps: ['A cube has 12 edges.', '12 × 15 = **180 cm** of wire.'] },
    { q: 'A carton for soap measures 30 cm by 20 cm by 10 cm. Describe the faces of its net.', steps: ['A cuboid has 3 pairs of equal faces.', 'Top and bottom: 30 cm × 20 cm. Front and back: 30 cm × 10 cm. The two ends: 20 cm × 10 cm.', 'The net is 6 rectangles, **two of each size**.'] },
  ]),

  L('ma-volume-1', 'ma-f1-solids', '14.2', 'Volume, surface area and capacity', 14, ['Mensuration'], [
    'The **volume** of a solid is the amount of space it takes up, measured in cubic units: a cube 1 cm long, 1 cm wide and 1 cm high has a volume of 1 cm³. Other units are mm³ and m³, and 1 m³ = 100 × 100 × 100 cm³ = 1 000 000 cm³.',
    'For a **cuboid**, count the unit cubes: a cuboid 4 cm by 3 cm by 2 cm has 4 × 3 = 12 cubes in each layer and 2 layers, so 24 cm³ (figure). In general V = l × w × h, and for a **cube** V = s³.',
    'The **total surface area** is the area of the net: add the areas of all the faces. For a cuboid A = 2(lw + lh + wh); for a cube A = 6s².',
    '**Capacity** is the amount a container can hold, measured in litres (l) and millilitres (ml): 1 l = 1000 ml = 1000 cm³, so 1 ml = 1 cm³ and 1 m³ = 1000 l. A water tank 2 m by 1 m by 1.5 m has a volume of 3 m³, so it holds 3000 litres. In daily life "capacity" can also mean the number of places, as in a bus with a capacity of 70 seats.',
  ], 'mf1-volume-cubes', 'Change all the lengths into the same unit before multiplying.',
  ['A box measures 10 cm by 6 cm by 5 cm. Its volume is:', ['300 cm³', '21 cm³', '280 cm³', '60 cm³'], 'V = 10 × 6 × 5.'],
  [['Volume', 'The amount of space a solid takes up, in cubic units.'], ['Capacity', 'The amount a container can hold.'], ['Litre', 'A unit of capacity: 1 l = 1000 cm³.'], ['Total surface area', 'The sum of the areas of all the faces of a solid.']],
  [
    { q: 'A cuboid measures 8 cm by 5 cm by 3 cm. Find its volume and its total surface area.', steps: ['V = 8 × 5 × 3 = **120 cm³**.', 'A = 2(8 × 5 + 8 × 3 + 5 × 3) = 2(40 + 24 + 15) = 2 × 79 = **158 cm²**.'] },
    { q: 'How many cartons of soap 20 cm × 10 cm × 5 cm fit exactly into a box 60 cm × 40 cm × 20 cm, all placed the same way round?', steps: ['Along the length: 60 ÷ 20 = 3. Along the width: 40 ÷ 10 = 4. Up the height: 20 ÷ 5 = 4.', '3 × 4 × 4 = **48 cartons**.', 'Check with the volumes: 48 000 ÷ 1000 = 48.'] },
  ]),

  L('ma-cylinder-1', 'ma-f1-solids', '14.3', 'The right circular cylinder', 12, ['Mensuration'], [
    'A **right circular cylinder** has two equal circular **bases**, parallel to each other, and a **curved surface**. Its **axis** joins the centres of the two bases and is perpendicular to them; the length of the axis is the height h. Tins of tomatoes, oil drums and water pipes are cylinders.',
    'The **net** of a cylinder is a rectangle and two circles (figure). The rectangle wraps round to make the curved surface: its length is the circumference of a base, 2πr, and its width is the height h.',
    'So the **curved surface area** is 2πrh (the area of the rectangle), and the **total surface area** is 2πrh + 2πr² (the curved surface and the two bases). A tin with no lid needs 2πrh + πr².',
    'The **volume** is the area of the base times the height: V = πr²h. A drum of radius 35 cm and height 1 m (100 cm) holds 22/7 × 35 × 35 × 100 = 385 000 cm³, which is 385 litres.',
  ], 'mf1-cylinder-net', 'Use the radius, not the diameter, in every cylinder formula.',
  ['The curved surface area of a cylinder of radius 7 cm and height 5 cm is (π = 22/7):', ['220 cm²', '154 cm²', '770 cm²', '110 cm²'], '2 × 22/7 × 7 × 5 = 220.'],
  [['Cylinder', 'A solid with two equal parallel circular bases and a curved surface.'], ['Axis of a cylinder', 'The segment joining the centres of the two bases.'], ['Curved surface', 'The part of a cylinder or cone that is not flat.']],
  [
    { q: 'A tin of tomato paste has a radius of 3.5 cm and a height of 10 cm. Find the area of metal needed to make it, with a top and a bottom (π = 22/7).', steps: ['Curved surface: 2πrh = 2 × 22/7 × 3.5 × 10 = 220 cm².', 'Two bases: 2πr² = 2 × 22/7 × 3.5 × 3.5 = 77 cm².', 'Total: 220 + 77 = **297 cm²**.'] },
    { q: 'A round well has a radius of 0.7 m and holds water 3 m deep. How many litres of water are in the well (π = 22/7)?', steps: ['V = πr²h = 22/7 × 0.7 × 0.7 × 3 = 4.62 m³.', '1 m³ = 1000 litres, so the well holds **4620 litres**.'] },
  ]),

  // ---------- Collecting and displaying data ----------
  L('ma-data-1', 'ma-f1-statistics', '15.1', 'Collecting data: types, tallies and frequency tables', 12, ['Statistics'], [
    '**Statistics** is collecting, organising and presenting information, called **data**, so that it can be understood. Data can be collected:\n- with **questionnaires** and interviews, as in an opinion poll\n- by **observing** and counting, for example the vehicles passing a school gate\n- by **measuring**, for example rainfall or the heights of pupils\n- from **records** already kept, such as a school register or the reports of the national institute of statistics.',
    'A **census** asks every member of a population; a **sample** asks only some of them. Cameroon’s general population censuses, such as the one of 2005, aimed to count every person in the country.',
    'Kinds of data:\n- **qualitative** data are words or categories: favourite fruit, means of transport\n- **discrete** data are counts that only take whole-number values: the number of pupils, of goals, of children in a family\n- **continuous** data are measurements that can take any value in a range: height, mass, time, temperature.',
    'To organise data, make a **tally** (figure): one stroke for each item, with every fifth stroke drawn across the four before it to make a "gate" of five. Count the strokes to get the **frequency** of each value and write a **frequency table**. The total of the frequencies must equal the number of items collected.',
  ], 'mf1-tally', 'Tick each item in your list as you tally it, so that nothing is counted twice or missed.',
  ['The masses of new-born babies at a health centre are an example of:', ['Continuous data', 'Discrete data', 'A pictogram', 'A census'], 'Mass is measured and can take any value in a range.'],
  [['Data', 'Facts or numbers collected to be studied.'], ['Frequency', 'The number of times a value occurs.'], ['Tally', 'A count made with strokes, grouped in fives.'], ['Census', 'A survey of every member of a population.'], ['Sample', 'A part of a population that is surveyed.']],
  [
    { q: 'Twenty pupils give their means of transport: walk, walk, bus, bike, walk, taxi, walk, bus, walk, bike, walk, taxi, walk, walk, bus, walk, bike, walk, walk, taxi. Make a frequency table.', steps: ['Count each answer in turn, ticking it off the list.', 'Walk 11, bus 3, bike 3, taxi 3.', 'Check: 11 + 3 + 3 + 3 = **20**, the number of pupils.'] },
    { q: 'Say whether each is discrete or continuous: the number of mango trees on a farm, the rainfall at Debundscha in July, the time taken to run 100 m.', steps: ['The number of trees is a count, so it is **discrete**.', 'Rainfall is measured in millimetres, so it is **continuous**.', 'Time is measured, so it is **continuous**.'] },
  ]),

  L('ma-charts-1', 'ma-f1-statistics', '15.2', 'Pictograms and bar charts', 12, ['Statistics'], [
    'A **pictogram** (pictograph) shows data with small pictures. A **key** tells what one picture stands for, for example one sack = 4 bags of cocoa (figure). Part of a picture stands for part of the amount: half a sack is 2 bags. Pictograms are easy to read but not very exact.',
    'A **bar chart** shows each frequency as a bar. The rules:\n- all the bars have the same width, with equal gaps between them\n- the height (or length) of each bar is the frequency, read on a scale that starts at 0\n- both axes are labelled, and the chart has a title.\nThe bars can be drawn upright or across.',
    'To **read** a bar chart, go across from the top of a bar to the scale. Compare the bars to see the most and the least common values; the value with the highest frequency is the **mode**.',
    'Charts can mislead: a scale that does not start at 0 makes small differences look large. Always look at the scale before you compare.',
  ], 'mf1-pictogram', 'Choose a scale that uses most of the paper and is easy to read, such as 1, 2, 5 or 10 units for each square.',
  ['In a pictogram one symbol stands for 10 pupils. How many symbols show 35 pupils?', ['3½', '35', '5', '3'], '35 ÷ 10 = 3.5.'],
  [['Pictogram', 'A chart that shows data with small pictures.'], ['Key', 'The note that says what one picture stands for.'], ['Bar chart', 'A chart where the height of each bar shows a frequency.'], ['Mode', 'The value with the highest frequency.']],
  [
    { q: 'A cooperative sold 12 bags of cocoa on Monday, 18 on Tuesday and 6 on Wednesday. With a key of one symbol for 4 bags, how many symbols are drawn for each day?', steps: ['Monday: 12 ÷ 4 = **3** symbols.', 'Tuesday: 18 ÷ 4 = **4½** symbols.', 'Wednesday: 6 ÷ 4 = **1½** symbols.'] },
    { q: 'Describe how to draw a bar chart of: walk 11, bus 3, bike 3, taxi 3.', steps: ['Draw the axes; label the horizontal one "means of transport" and the upright one "number of pupils".', 'Choose a scale such as 1 square for 1 pupil, from 0 to 12.', 'Draw four bars of the same width with equal gaps, of heights 11, 3, 3 and 3, and add a title. The mode is "walk".'] },
  ]),

  L('ma-piechart-1', 'ma-f1-statistics', '15.3', 'Pie charts', 12, ['Statistics'], [
    'A **pie chart** is a circle cut into sectors, one for each value. The whole circle, 360°, stands for the total, and each **sector angle** is in proportion to its frequency: angle = (frequency ÷ total) × 360°. In the figure, 30 of the 60 pupils walk to school, so their sector is 30/60 × 360 = 180°.',
    'To draw a pie chart:\n- add the frequencies to find the total\n- work out each sector angle and check that the angles add up to 360°\n- draw a circle and one radius, measure the first angle from it with a protractor, then each next angle from the last line\n- label each sector, or give a key, and write a title.',
    'To **read** a pie chart, measure the angle of a sector and work backwards: frequency = angle ÷ 360 × total. In a pie chart of 60 pupils, a sector of 90° stands for 90 ÷ 360 × 60 = 15 pupils.',
    'Pie charts are good for showing how a whole is shared out, such as a family budget; bar charts are better for comparing exact frequencies.',
  ], 'bar-pie-chart', 'If the angles do not add up to exactly 360°, check your working before you draw.',
  ['In a pie chart of 72 people, the sector for one group of 24 people has an angle of:', ['120°', '24°', '72°', '100°'], '24/72 × 360 = 120.'],
  [['Pie chart', 'A circle divided into sectors to show how a total is shared.'], ['Sector angle', 'The angle at the centre of a sector of a pie chart.'], ['Total frequency', 'The sum of all the frequencies.']],
  [
    { q: 'A family spends its monthly income of 180 000 FCFA as follows: food 72 000, rent 45 000, school 36 000 and other things 27 000. Find the sector angles of a pie chart.', steps: ['Food: 72 000 ÷ 180 000 × 360 = 144°.', 'Rent: 45 000 ÷ 180 000 × 360 = 90°. School: 36 000 ÷ 180 000 × 360 = 72°.', 'Other things: 27 000 ÷ 180 000 × 360 = 54°.', 'Check: 144 + 90 + 72 + 54 = **360°**.'] },
    { q: 'In a pie chart of the favourite fruits of 40 pupils, the sector for mango is 135°. How many pupils chose mango?', steps: ['Frequency = angle ÷ 360 × total.', '135 ÷ 360 × 40 = **15 pupils**.'] },
  ]),
];
