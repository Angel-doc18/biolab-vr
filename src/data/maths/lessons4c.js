// Mathematics lessons for Form 4, term 3: trigonometry, solid figures,
// grouped data and probability, sequences, the Earth as a sphere, networks,
// and GCE Paper 1 and Paper 2 methods. Original text written for this app.
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

export const LESSONS_4C = [
  // ---------- Right-angled trigonometry ----------
  L('ma-sohcahtoa-4', 'ma-f4-trig1', '21.1', 'Pythagoras’ theorem and the trigonometric ratios', 13, ['Geometry', 'Trigonometry'], [
    'In a right-angled triangle the side opposite the right angle is the **hypotenuse**, the longest side. **Pythagoras’ theorem**: a² + b² = c², where c is the hypotenuse. Its converse is also true: if c² = a² + b², the angle opposite c is 90°. Useful whole-number triples are 3, 4, 5; 5, 12, 13; 8, 15, 17 and 7, 24, 25.',
    'For an acute angle θ, name the sides from θ: the **opposite**, the **adjacent** (next to θ, not the hypotenuse) and the hypotenuse. Then:\n- **sin θ = opposite ÷ hypotenuse**\n- **cos θ = adjacent ÷ hypotenuse**\n- **tan θ = opposite ÷ adjacent**\n(SOH CAH TOA), and tan θ = sin θ ÷ cos θ.',
    'To find a side, choose the ratio that contains the side you want and a side you know. To find an angle, use the inverse key: sin⁻¹, cos⁻¹ or tan⁻¹, with the calculator in **degree** mode.',
    'Exact values come from half of an equilateral triangle of side 2 and from an isosceles right-angled triangle:\n- sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3\n- sin 45° = cos 45° = 1/√2, tan 45° = 1\n- sin 60° = √3/2, cos 60° = ½, tan 60° = √3.',
  ], 'pythagoras', 'Label the sides opposite, adjacent and hypotenuse before choosing a ratio.',
  ['In a right-angled triangle, the side opposite the right angle is the:', ['Hypotenuse', 'Adjacent side', 'Opposite side', 'Base'], 'It is always the longest side.'],
  [['Hypotenuse', 'The side opposite the right angle in a right-angled triangle.'], ['Sine', 'Opposite ÷ hypotenuse.'], ['Cosine', 'Adjacent ÷ hypotenuse.'], ['Tangent', 'Opposite ÷ adjacent.']],
  [
    { q: 'In triangle ABC, angle B = 90°, AC = 13 cm and angle A = 32°. Find BC and AB.', steps: ['BC is opposite A: BC = 13 sin 32° = 13 × 0.5299 = **6.89 cm**.', 'AB is adjacent to A: AB = 13 cos 32° = 13 × 0.8480 = **11.02 cm**.', 'Check with Pythagoras: 6.89² + 11.02² ≈ 169 = 13².'] },
    { q: 'A ramp rises 1.2 m over a horizontal distance of 5 m. Find the angle it makes with the ground.', steps: ['tan θ = 1.2 ÷ 5 = 0.24', 'θ = tan⁻¹ 0.24 = **13.5°**.'] },
  ]),

  L('ma-elevation-4', 'ma-f4-trig1', '21.2', 'Angles of elevation and depression', 13, ['Geometry', 'Trigonometry'], [
    'The **angle of elevation** is the angle above the horizontal from an observer’s eye up to an object. The **angle of depression** is the angle below the horizontal down to an object.',
    'The angle of elevation of A from B equals the angle of depression of B from A: they are alternate angles between two parallel horizontal lines.',
    'Method: draw a sketch with a horizontal line, mark the right angle and the known values, then use the tangent (height and horizontal distance) or the sine or cosine. If the observer’s eye height is given, add it at the end.',
    'With two observations from two points in line with an object, there are two right-angled triangles sharing the same height: write the height in terms of the unknown distance in each and solve.',
  ], 'elevation-depression', 'Angles of depression are measured down from the horizontal, never from the vertical.',
  ['From a point 20 m from the foot of a tower, the angle of elevation of the top is 45°. The tower is:', ['20 m tall', '10 m tall', '28.3 m tall', '40 m tall'], 'tan 45° = 1, so the height equals the distance.'],
  [['Angle of elevation', 'The angle above the horizontal from the eye to an object.'], ['Angle of depression', 'The angle below the horizontal from the eye to an object.']],
  [
    { q: 'From the top of a cliff 80 m high, the angle of depression of a boat is 25°. How far is the boat from the foot of the cliff?', steps: ['The angle of elevation of the top from the boat is also 25°.', 'tan 25° = 80 ÷ d', 'd = 80 ÷ 0.4663 = **171.6 m**.'] },
    { q: 'A pupil whose eyes are 1.5 m above the ground stands 30 m from a flagpole and sees the top at an angle of elevation of 22°. Find the height of the pole.', steps: ['Height above eye level = 30 tan 22° = 30 × 0.4040 = 12.12 m.', 'Height of the pole = 12.12 + 1.5 = **13.6 m**.'] },
    { q: 'From two points A and B, 40 m apart on level ground in line with a tower, the angles of elevation of the top are 30° and 45°, B being nearer. Find the height of the tower.', steps: ['Let the height be h and the distance from B be x. At B: tan 45° = h/x, so x = h.', 'At A: tan 30° = h/(h + 40), so h = 0.5774(h + 40).', 'h − 0.5774h = 23.09, so 0.4226h = 23.09.', 'h = **54.6 m**.'] },
  ]),

  L('ma-bearings-4', 'ma-f4-trig1', '21.3', 'Bearings', 12, ['Geometry', 'Trigonometry'], [
    'A **three-figure bearing** is an angle measured **clockwise from north**: north is 000°, east 090°, south 180° and west 270°. Compass bearings such as N 40° E (= 040°) and S 30° W (= 210°) are also used.',
    'The **back bearing**, the bearing of A from B, is the bearing of B from A plus or minus 180°.',
    'To solve a problem, draw a north line at every point (they are parallel), mark the angles, and use alternate and co-interior angles to find the angles inside the triangle. Then use Pythagoras’ theorem and the ratios if there is a right angle, or the sine and cosine rules if not.',
  ], 'three-figure-bearings', 'Draw a north arrow at every point before you mark any angle.',
  ['The compass bearing S 30° W written as a three-figure bearing is:', ['210°', '150°', '030°', '240°'], 'From north, 180° clockwise to south, then 30° more towards west.'],
  [['Bearing', 'The direction of one point from another, measured clockwise from north in three figures.'], ['Back bearing', 'The bearing of the return journey, differing by 180°.']],
  [
    { q: 'A ship sails 30 km on a bearing of 060° and then 40 km on a bearing of 150°. How far is it from its start, and on what bearing?', steps: ['150° − 060° = 90°, so the two legs are at right angles.', 'Distance = √(30² + 40²) = **50 km**.', 'At the start, the angle between the first leg and the line to the ship: tan θ = 40/30, θ = 53.1°.', 'Bearing = 060° + 53.1° = **113.1°**.'] },
    { q: 'The bearing of a village V from a school S is 230°. Find the bearing of S from V.', steps: ['230° − 180° = **050°**.'] },
  ]),

  // ---------- Sine and cosine rules ----------
  L('ma-sinerule-4', 'ma-f4-trig2', '22.1', 'Obtuse angles and the sine rule', 13, ['Geometry', 'Trigonometry'], [
    'For an obtuse angle, **sin (180° − θ) = sin θ** and **cos (180° − θ) = −cos θ**. So sin 150° = sin 30° = 0.5 and cos 150° = −cos 30° = −0.866. The sine of an obtuse angle is positive and its cosine negative.',
    'In triangle ABC, side a is opposite angle A, side b opposite B and side c opposite C.',
    'The **sine rule**: **a/sin A = b/sin B = c/sin C**, or, to find an angle, sin A/a = sin B/b = sin C/c. Use it when you know two angles and a side, or two sides and an angle opposite one of them.',
    'When you find an angle from its sine there may be two answers, θ and 180° − θ (the **ambiguous case**). Keep the obtuse one only if the angles still add up to less than 180°.',
  ], 'sine-cosine-rule', 'A side and its opposite angle make a pair: if you know one complete pair, use the sine rule.',
  ['sin 130° equals:', ['sin 50°', 'cos 50°', '−sin 50°', 'sin 40°'], 'sin (180° − θ) = sin θ.'],
  [['Sine rule', 'a/sin A = b/sin B = c/sin C in any triangle.'], ['Ambiguous case', 'When two different triangles fit the given data.']],
  [
    { q: 'In triangle ABC, A = 48°, B = 62° and a = 9 cm. Find b and c.', steps: ['C = 180° − 48° − 62° = 70°.', 'b = 9 sin 62° ÷ sin 48° = 9 × 0.8829 ÷ 0.7431 = **10.69 cm**.', 'c = 9 sin 70° ÷ sin 48° = 9 × 0.9397 ÷ 0.7431 = **11.38 cm**.'] },
    { q: 'In triangle PQR, p = 7 cm, q = 5 cm and Q = 40°. Find angle P.', steps: ['sin P = 7 sin 40° ÷ 5 = 7 × 0.6428 ÷ 5 = 0.8999.', 'P = 64.2° or P = 180° − 64.2° = 115.8°.', 'Both fit, since 40° + 115.8° < 180°: **P = 64.2° or 115.8°**.'] },
  ]),

  L('ma-cosrule-4', 'ma-f4-trig2', '22.2', 'The cosine rule and the area of a triangle', 13, ['Geometry', 'Trigonometry'], [
    'The **cosine rule**: **a² = b² + c² − 2bc cos A** (and likewise for b² and c²). Use it to find a side when you know two sides and the angle between them, and to find an angle when you know all three sides: **cos A = (b² + c² − a²) ÷ 2bc**.',
    'If cos A comes out negative, A is obtuse. The largest angle is always opposite the longest side.',
    'The **area of a triangle** is ½ab sin C: half the product of two sides times the sine of the angle between them.',
    'Which rule? If you know a side and the angle opposite it, use the sine rule. Otherwise (two sides and the angle between them, or three sides), use the cosine rule.',
  ], 'sine-cosine-rule', 'With an obtuse angle, −2bc cos A becomes positive: the opposite side is longer.',
  ['A triangle has sides 3, 5 and 7. Its largest angle is:', ['120°', '90°', '60°', '150°'], 'cos θ = (9 + 25 − 49) ÷ 30 = −0.5.'],
  [['Cosine rule', 'a² = b² + c² − 2bc cos A in any triangle.'], ['Included angle', 'The angle between two given sides.']],
  [
    { q: 'Two roads leave a junction at an angle of 110°. One pupil walks 3 km along one road and another pupil 5 km along the other. How far apart are they?', steps: ['d² = 3² + 5² − 2 × 3 × 5 × cos 110°', 'cos 110° = −0.3420, so d² = 9 + 25 + 10.26 = 44.26.', 'd = **6.65 km**.'] },
    { q: 'A triangle has sides 5 cm, 7 cm and 8 cm. Find its largest angle and its area.', steps: ['The largest angle is opposite 8 cm: cos θ = (25 + 49 − 64) ÷ 70 = 0.1429.', 'θ = **81.8°**.', 'Area = ½ × 5 × 7 × sin 81.8° = **17.3 cm²**.'] },
  ]),

  // ---------- Trigonometric functions ----------
  L('ma-anyangle-4', 'ma-f4-trigfn', '23.1', 'Radians and the ratios of any angle', 14, ['Geometry', 'Trigonometry'], [
    'A **radian** is the angle at the centre of a circle subtended by an arc equal in length to the radius. 2π radians = 360°, so π rad = 180° and 1 rad ≈ 57.3°. To change degrees to radians multiply by π/180: 60° = π/3, 90° = π/2. With θ in radians, arc length = rθ and sector area = ½r²θ.',
    'On the **unit circle** (radius 1, centre the origin), the point at angle θ measured anticlockwise from the positive x-axis has coordinates (cos θ, sin θ), and tan θ = sin θ ÷ cos θ. This defines the ratios for any angle.',
    'The signs in the four **quadrants**:\n- 0° to 90°: all three ratios positive\n- 90° to 180°: only sine positive\n- 180° to 270°: only tangent positive\n- 270° to 360°: only cosine positive.\nThe size of the ratio is that of the related acute angle: 180° − θ in the second quadrant, θ − 180° in the third and 360° − θ in the fourth.',
    'The reciprocal ratios are **sec θ = 1/cos θ**, **cosec θ = 1/sin θ** and **cot θ = 1/tan θ**. Pythagoras’ theorem in the unit circle gives the identity **sin² θ + cos² θ = 1**; dividing it by cos² θ gives 1 + tan² θ = sec² θ, and by sin² θ gives 1 + cot² θ = cosec² θ.',
  ], null, 'Find the related acute angle first, then give it the sign of the quadrant.',
  ['In which quadrant is tan θ positive and sin θ negative?', ['The third', 'The first', 'The second', 'The fourth'], 'In the third quadrant sine and cosine are both negative, so their quotient is positive.'],
  [['Radian', 'The angle subtended at the centre by an arc equal to the radius.'], ['Unit circle', 'A circle of radius 1 centred at the origin.'], ['Quadrant', 'One of the four quarters of the plane made by the axes.'], ['Identity', 'An equation true for every value of the variable.']],
  [
    { q: 'Without a calculator, find sin 210°, cos 300° and tan 135°.', steps: ['210° is in the third quadrant: sin 210° = −sin 30° = **−½**.', '300° is in the fourth quadrant: cos 300° = cos 60° = **½**.', '135° is in the second quadrant: tan 135° = −tan 45° = **−1**.'] },
    { q: 'θ is obtuse and sin θ = 3/5. Find cos θ and tan θ.', steps: ['cos² θ = 1 − 9/25 = 16/25.', 'θ is in the second quadrant, where cosine is negative: cos θ = **−4/5**.', 'tan θ = (3/5) ÷ (−4/5) = **−3/4**.'] },
  ]),

  L('ma-triggraph-4', 'ma-f4-trigfn', '23.2', 'Graphs of trigonometric functions and simple equations', 13, ['Geometry', 'Trigonometry', 'Graphs'], [
    'For 0° ≤ x ≤ 360°:\n- **y = sin x** starts at 0, rises to 1 at 90°, returns to 0 at 180°, falls to −1 at 270° and returns to 0 at 360°\n- **y = cos x** starts at 1, is 0 at 90°, −1 at 180°, 0 at 270° and 1 at 360°: the sine curve moved 90° to the left\n- **y = tan x** is 0 at 0°, 1 at 45°, and has no value at 90° and 270°, where the graph runs off to infinity; it repeats every 180°.',
    'Sine and cosine repeat every 360° (their **period**). The graph of y = a sin x has the same shape stretched vertically: it rises to a and falls to −a, so its **amplitude** is a.',
    'To solve sin x = 0.5 for 0° ≤ x ≤ 360°, find the acute angle, 30°, then use the quadrants where sine is positive: x = 30° or x = 180° − 30° = 150°. On a graph, draw the line y = 0.5 and read where it crosses the curve.',
  ], 'trig-graphs', 'Sine is symmetrical about 90°, so its two solutions add up to 180°.',
  ['The amplitude of y = 4 sin x is:', ['4', '1', '360°', '8'], 'The graph rises to 4 and falls to −4.'],
  [['Period', 'The interval after which a graph repeats.'], ['Amplitude', 'The greatest height of a wave above its centre line.']],
  [
    { q: 'Solve 2 sin x − 1 = 0 for 0° ≤ x ≤ 360°.', steps: ['sin x = 0.5, so the acute angle is 30°.', 'Sine is positive in the first and second quadrants.', '**x = 30° or x = 150°**.'] },
    { q: 'Complete a table for y = 2 cos x at 0°, 60°, 90°, 120° and 180°.', steps: ['cos x: 1, 0.5, 0, −0.5, −1.', 'y = 2 cos x: **2, 1, 0, −1, −2**.', 'The graph has amplitude 2.'] },
    { q: 'Solve tan x = √3 for 0° ≤ x ≤ 90°.', steps: ['tan 60° = √3.', '**x = 60°**.'] },
  ]),

  // ---------- Solids ----------
  L('ma-prismcyl-4', 'ma-f4-solids', '24.1', 'Prisms, cylinders and pyramids', 13, ['Mensuration'], [
    'A **prism** has the same cross-section all along its length. **Volume = area of the cross-section × length**. Its surface area is the two end faces plus the rectangles round the sides, whose total area is the perimeter of the cross-section × the length.',
    'A cuboid has V = lbh and surface area 2(lb + bh + lh); a cube of side a has V = a³ and surface area 6a².',
    'A **cylinder** is a prism with a circular cross-section: V = πr²h; curved surface area = 2πrh; a closed cylinder has total surface area 2πr² + 2πrh, and one open at the top πr² + 2πrh. A pipe with outer radius R and inner radius r has volume π(R² − r²)h.',
    'A **pyramid** has volume **⅓ × base area × perpendicular height**. Its surface area is the base plus the triangular faces; find the slant height of each face with Pythagoras’ theorem.',
    '**Capacity**: 1 litre = 1 000 cm³, and 1 m³ = 1 000 litres.',
  ], 'prism-pyramid', 'Change every length to the same unit before you calculate.',
  ['A cuboid 5 cm by 4 cm by 3 cm has volume:', ['60 cm³', '47 cm³', '94 cm³', '12 cm³'], '5 × 4 × 3.'],
  [['Prism', 'A solid with the same cross-section all along its length.'], ['Cross-section', 'The shape of a cut made straight across a solid.'], ['Capacity', 'The amount a container holds, usually in litres.']],
  [
    { q: 'A water tank is a cylinder of diameter 1.4 m and height 2 m. How many litres does it hold? (π = 22/7)', steps: ['r = 0.7 m.', 'V = 22/7 × 0.7² × 2 = 3.08 m³.', '3.08 m³ = **3 080 litres**.'] },
    { q: 'A square-based pyramid has a base of side 10 cm and a vertical height of 12 cm. Find its volume and its total surface area.', steps: ['V = ⅓ × 100 × 12 = **400 cm³**.', 'Slant height of a face = √(12² + 5²) = 13 cm.', 'Each triangle = ½ × 10 × 13 = 65 cm²; four triangles = 260 cm².', 'Total surface area = 260 + 100 = **360 cm²**.'] },
    { q: 'A prism has a right-angled triangle with legs 6 cm and 8 cm as its cross-section, and is 20 cm long. Find its volume and surface area.', steps: ['Cross-section = ½ × 6 × 8 = 24 cm², so V = 24 × 20 = **480 cm³**.', 'The hypotenuse is 10 cm, so the perimeter is 24 cm and the side rectangles total 24 × 20 = 480 cm².', 'Surface area = 480 + 2 × 24 = **528 cm²**.'] },
  ]),

  L('ma-conesphere-4', 'ma-f4-solids', '24.2', 'Cones, spheres and composite solids', 13, ['Mensuration'], [
    'A **cone** with base radius r and height h has volume **⅓πr²h**. Its **slant height** is l = √(r² + h²), its curved surface area is **πrl**, and its total surface area is πrl + πr². Opened out, the curved surface is a sector of radius l whose arc length is 2πr.',
    'A **sphere** of radius r has volume **4/3 πr³** and surface area **4πr²**. A **hemisphere** has volume ⅔πr³, curved surface 2πr², and a solid hemisphere has total surface 3πr².',
    'A **frustum** is a cone with its top cut off parallel to the base: its volume is the large cone minus the small (similar) cone that was removed.',
    'For a composite solid, add or subtract the volumes of its parts; for its surface area, count only the faces on the outside. When a solid is melted and recast into another shape, its **volume stays the same**.',
  ], 'solid-formulas', 'Use the slant height l for the curved surface of a cone and the vertical height h for its volume.',
  ['A sphere has radius 6 cm. Its surface area is:', ['144π cm²', '36π cm²', '288π cm²', '48π cm²'], '4π × 36.'],
  [['Slant height', 'The distance from the vertex of a cone to the edge of its base.'], ['Hemisphere', 'Half of a sphere.'], ['Frustum', 'The part of a cone left when its top is cut off parallel to the base.']],
  [
    { q: 'A cone has radius 6 cm and height 8 cm. Find its slant height, volume and total surface area in terms of π.', steps: ['l = √(36 + 64) = 10 cm.', 'V = ⅓π × 36 × 8 = **96π cm³**.', 'Total surface area = π × 6 × 10 + π × 36 = **96π cm²**.'] },
    { q: 'A metal sphere of radius 3 cm is melted and recast into a cylinder of radius 2 cm. Find the height of the cylinder.', steps: ['Volume of the sphere = 4/3 π × 27 = 36π cm³.', 'π × 2² × h = 36π', '**h = 9 cm**.'] },
    { q: 'A toy is a hemisphere of radius 7 cm with a cone of the same radius and height 24 cm on top. Find its volume (π = 22/7).', steps: ['Hemisphere = ⅔ × 22/7 × 343 = 718.67 cm³.', 'Cone = ⅓ × 22/7 × 49 × 24 = 1 232 cm³.', 'Total ≈ **1 950.7 cm³**.'] },
  ]),

  // ---------- Statistics and probability ----------
  L('ma-grouped-4', 'ma-f4-stats', '25.1', 'Grouped data: mean, modal class and median class', 13, ['Statistics'], [
    'Large sets of data are grouped into **classes** in a frequency table. For whole-number data the class 30–34 has **class boundaries** 29.5 and 34.5, and its **class width** is 34.5 − 29.5 = 5. Its **mid-point** (class mark) is (30 + 34) ÷ 2 = 32.',
    'The **mean** of grouped data is estimated as **Σfx ÷ Σf**, where x is the mid-point of each class and f its frequency. It is only an estimate because the exact values are not known.',
    'The **modal class** has the highest frequency. The **median class** contains the middle value, the (n/2)th value when there are n values.',
    'A **histogram** shows grouped data with bars touching. With equal class widths the heights are the frequencies; with unequal widths plot **frequency density** = frequency ÷ class width, so that the area of each bar shows the frequency. A **frequency polygon** joins the mid-points of the tops of the bars.',
  ], 'ogive', 'Set the work out in a table with columns for x, f and fx.',
  ['For whole-number data, the class 10–19 has class boundaries:', ['9.5 and 19.5', '10 and 19', '10 and 20', '9 and 20'], 'The boundaries are halfway to the neighbouring classes.'],
  [['Class boundary', 'The value halfway between one class and the next.'], ['Class mark', 'The mid-point of a class.'], ['Modal class', 'The class with the highest frequency.'], ['Frequency density', 'Frequency ÷ class width.']],
  [
    { q: 'The masses (kg) of 40 pupils are: 30–34: 4; 35–39: 10; 40–44: 15; 45–49: 8; 50–54: 3. Estimate the mean and find the modal and median classes.', steps: ['Mid-points: 32, 37, 42, 47, 52.', 'Σfx = 4 × 32 + 10 × 37 + 15 × 42 + 8 × 47 + 3 × 52 = 128 + 370 + 630 + 376 + 156 = 1 660.', 'Mean ≈ 1 660 ÷ 40 = **41.5 kg**.', 'Modal class: **40–44** (15 pupils).', 'The median is the 20th value; the running totals are 4, 14, 29, so it lies in **40–44**.'] },
  ]),

  L('ma-ogive-4', 'ma-f4-stats', '25.2', 'Cumulative frequency, median and quartiles', 13, ['Statistics'], [
    'The **cumulative frequency** of a class is the running total of the frequencies up to the end of that class.',
    'To draw a **cumulative frequency curve (ogive)**, plot each cumulative frequency against the **upper class boundary** of its class, starting with 0 at the lower boundary of the first class, and join the points with a smooth S-shaped curve.',
    'From an ogive of n values:\n- the **median** is read at n/2\n- the **lower quartile** Q₁ at n/4 and the **upper quartile** Q₃ at 3n/4\n- the **interquartile range** is Q₃ − Q₁, and the semi-interquartile range is half of it\n- read across from the cumulative frequency to the curve, then down to the value.\nThe curve also answers questions such as "how many pupils weigh more than 45 kg?"',
    'The interquartile range measures the spread of the middle half of the data: a small value means the data are close together.',
  ], 'ogive', 'Plot at the upper class boundaries, not at the mid-points.',
  ['On the ogive of 120 values, the lower quartile is read at a cumulative frequency of:', ['30', '60', '90', '40'], 'n/4 = 30.'],
  [['Cumulative frequency', 'The running total of the frequencies.'], ['Ogive', 'The cumulative frequency curve.'], ['Quartile', 'A value that cuts off a quarter or three quarters of the data.'], ['Interquartile range', 'The upper quartile minus the lower quartile.']],
  [
    { q: 'For the masses of the 40 pupils (30–34: 4; 35–39: 10; 40–44: 15; 45–49: 8; 50–54: 3), make the cumulative frequency table and read the median and quartiles.', steps: ['Upper boundaries 34.5, 39.5, 44.5, 49.5, 54.5 with cumulative frequencies 4, 14, 29, 37, 40; start the curve at (29.5, 0).', 'Median at 20: about **41.5 kg**.', 'Q₁ at 10: about 38 kg. Q₃ at 30: about 45 kg.', 'Interquartile range ≈ 45 − 38 = **7 kg**. Readings from a hand-drawn curve may differ by a few tenths of a kilogram.'] },
  ]),

  L('ma-probability-4', 'ma-f4-stats', '25.3', 'Probability: combined and independent events', 13, ['Probability'], [
    'When outcomes are equally likely, **P(event) = number of favourable outcomes ÷ number of possible outcomes**. Every probability lies from 0 (impossible) to 1 (certain), and P(not A) = 1 − P(A). The **relative frequency** found by experiment (successes ÷ trials) estimates the probability.',
    '**Mutually exclusive** events cannot happen together: P(A or B) = P(A) + P(B). In general, P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
    '**Independent** events do not affect each other: **P(A and B) = P(A) × P(B)**.',
    'For two stages, list the outcomes in a **possibility space** (two dice give 6 × 6 = 36 outcomes) or draw a **tree diagram**: multiply along the branches, and add the results of different branches.',
  ], 'probability-scale', '"And" usually means multiply; "or" usually means add.',
  ['Two events cannot both happen. They are:', ['Mutually exclusive', 'Independent', 'Certain', 'Equally likely'], 'Then P(A or B) = P(A) + P(B).'],
  [['Mutually exclusive', 'Events that cannot happen at the same time.'], ['Independent events', 'Events where the outcome of one does not change the probability of the other.'], ['Possibility space', 'A table or list of all the possible outcomes.']],
  [
    { q: 'Two fair dice are thrown. Find the probability that the total is 8.', steps: ['There are 6 × 6 = 36 equally likely outcomes.', 'Totals of 8: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2), which is 5 outcomes.', 'P(total 8) = **5/36**.'] },
    { q: 'On a July day in Buea the probability of rain is 0.8, and the probability that a bus is late is 0.3, independently. Find the probability that it rains and the bus is not late, and that at least one of the two happens.', steps: ['P(rain and not late) = 0.8 × 0.7 = **0.56**.', 'P(neither) = 0.2 × 0.7 = 0.14.', 'P(at least one) = 1 − 0.14 = **0.86**.'] },
    { q: 'A bag holds 3 red and 5 blue balls. One is taken, replaced, and another taken. Find P(both red) and P(one of each colour).', steps: ['With replacement, P(R) = 3/8 and P(B) = 5/8 on both draws.', 'P(both red) = 3/8 × 3/8 = **9/64**.', 'P(one of each) = P(RB) + P(BR) = 15/64 + 15/64 = **15/32**.'] },
  ]),

  // ---------- Sequences ----------
  L('ma-ap-4', 'ma-f4-sequences', '26.1', 'Number patterns and arithmetic progressions', 13, ['Algebra', 'Sequences'], [
    'A **sequence** is a list of numbers in order, made by a rule. Its terms are T1, T2, T3, …, and a formula for the nth term, Tn, gives any term at once: Tn = 3n + 2 gives 5, 8, 11, 14, … .',
    'In an **arithmetic progression (AP)** each term is the previous term plus a fixed **common difference** d. With first term a: **Tn = a + (n − 1)d**.',
    'The **arithmetic mean** of a and b is (a + b)/2; when three numbers are in AP, the middle one is the mean of the other two.',
    'The **sum of the first n terms** is **Sn = n/2 [2a + (n − 1)d]**, or Sn = n/2 (a + l), where l is the last term. (Write the sum forwards and backwards and add: each pair of terms gives a + l.)',
    'APs describe savings that grow by a fixed amount each month, rows of seats in a hall, and salaries with a fixed yearly increase.',
  ], 'ap-gp', 'In Tn = a + (n − 1)d, the first term has no d added, so the nth term has (n − 1) of them.',
  ['The common difference of 17, 13, 9, 5, … is:', ['−4', '4', '13', '−17'], '13 − 17 = −4.'],
  [['Sequence', 'A list of numbers made by a rule.'], ['Arithmetic progression', 'A sequence with a constant difference between terms.'], ['Common difference', 'The fixed amount added to get the next term of an AP.']],
  [
    { q: 'The 3rd term of an AP is 11 and the 8th term is 31. Find a, d and the 20th term.', steps: ['a + 2d = 11 and a + 7d = 31.', 'Subtract: 5d = 20, so d = 4 and a = 3.', 'T20 = 3 + 19 × 4 = **79**.'] },
    { q: 'A hall has 20 seats in the first row, 22 in the second, 24 in the third and so on, for 25 rows. How many seats are there?', steps: ['a = 20, d = 2, n = 25.', 'S25 = 25/2 × (2 × 20 + 24 × 2) = 12.5 × 88', '= **1 100 seats**.'] },
    { q: 'How many terms of 5, 9, 13, … must be added to give 230?', steps: ['n/2 [10 + 4(n − 1)] = 230, so n(4n + 6) = 460.', '2n² + 3n − 230 = 0, so (2n + 23)(n − 10) = 0.', 'n cannot be negative, so **n = 10**.'] },
  ]),

  L('ma-gp-4', 'ma-f4-sequences', '26.2', 'Geometric progressions', 13, ['Algebra', 'Sequences'], [
    'In a **geometric progression (GP)** each term is the previous term multiplied by a fixed **common ratio** r = T2 ÷ T1. With first term a: **Tn = ar^(n − 1)**.',
    'The **geometric mean** of a and b is √(ab); when three positive numbers are in GP, the middle one is the geometric mean of the other two.',
    'The sum of the first n terms is **Sn = a(rⁿ − 1)/(r − 1)**, which is easier to use when r > 1, or Sn = a(1 − rⁿ)/(1 − r) when r < 1.',
    'GPs describe anything that grows or shrinks by a fixed percentage: a population growing by 3 % a year (r = 1.03), money at compound interest, a machine losing 20 % of its value a year (r = 0.8), bacteria doubling every hour (r = 2).',
  ], 'ap-gp', 'An AP adds the same number each time; a GP multiplies by the same number.',
  ['The geometric mean of 3 and 27 is:', ['9', '15', '81', '12'], '√(3 × 27) = √81.'],
  [['Geometric progression', 'A sequence with a constant ratio between terms.'], ['Common ratio', 'The fixed number each term is multiplied by in a GP.'], ['Geometric mean', 'For a and b, the number √(ab).']],
  [
    { q: 'Find the 7th term and the sum of the first 7 terms of 2, 6, 18, … .', steps: ['a = 2 and r = 3.', 'T7 = 2 × 3⁶ = **1 458**.', 'S7 = 2(3⁷ − 1)/(3 − 1) = 3⁷ − 1 = **2 186**.'] },
    { q: 'The 2nd term of a GP is 12 and the 5th term is 96. Find a and r.', steps: ['ar = 12 and ar⁴ = 96.', 'Divide: r³ = 8, so **r = 2**.', '**a = 6**.'] },
    { q: 'A town of 50 000 people grows by 4 % a year. What will its population be after 5 years?', steps: ['The populations form a GP with r = 1.04.', '50 000 × 1.04⁵ = 50 000 × 1.2167', '≈ **60 833** people.'] },
  ]),

  // ---------- The Earth as a sphere ----------
  L('ma-latlong-4', 'ma-f4-earth', '27.1', 'Latitude, longitude and time', 13, ['Geometry', 'Earth'], [
    'In calculations the Earth is treated as a sphere, usually of radius R = 6 400 km. A **great circle** is a circle on the surface whose centre is the centre of the Earth: the Equator, and every meridian together with the one opposite it. Any other circle, such as a parallel of latitude, is a **small circle**.',
    '**Latitude** is the angle north or south of the Equator, measured at the centre of the Earth; places of the same latitude lie on a **parallel of latitude**, and the poles are at 90° N and 90° S. **Longitude** is the angle east or west of the **Greenwich meridian** (0°), up to 180°. A position is given as (latitude, longitude): Yaoundé is at about (3.9° N, 11.5° E) and Douala at about (4.0° N, 9.7° E).',
    'For the difference in latitude (or longitude) of two places: subtract if they are on the same side of the Equator (or of Greenwich), add if they are on opposite sides.',
    'The Earth turns through 360° in 24 hours: **15° of longitude per hour**, or 1° every 4 minutes. Places east of Greenwich are **ahead** of Greenwich Mean Time (GMT); places west are behind. Local (sun) time = GMT + (longitude east ÷ 15) hours. Official clock times follow time zones instead: Cameroon uses GMT + 1, although sun time in Yaoundé is only about 46 minutes ahead of GMT.',
  ], 'latitude-longitude', 'East is ahead: add time going east, subtract going west.',
  ['A place is at 60° E. When it is noon there, the time at Greenwich is:', ['08:00', '16:00', '12:00', '04:00'], '60 ÷ 15 = 4 hours, and Greenwich is behind a place to its east.'],
  [['Great circle', 'A circle on the Earth whose centre is the centre of the Earth.'], ['Latitude', 'The angle north or south of the Equator.'], ['Longitude', 'The angle east or west of the Greenwich meridian.'], ['GMT', 'Greenwich Mean Time, the time on the 0° meridian.']],
  [
    { q: 'When it is 08:00 GMT, find the local sun time at Yaoundé (11.5° E) and at a place on 45° W.', steps: ['Yaoundé: 11.5 × 4 min = 46 min ahead: **08:46**.', '45° W: 45 ÷ 15 = 3 hours behind: **05:00**.'] },
    { q: 'Find the difference in latitude between Garoua (9.3° N) and Kribi (2.9° N), and between 20° N and 15° S.', steps: ['Same side of the Equator: 9.3° − 2.9° = **6.4°**.', 'Opposite sides: 20° + 15° = **35°**.'] },
  ]),

  L('ma-earthdist-4', 'ma-f4-earth', '27.2', 'Distances on the Earth’s surface', 13, ['Geometry', 'Earth'], [
    'Along a **great circle** (a meridian or the Equator), the distance is **θ/360 × 2πR**, where θ is the angle at the centre: the difference in latitude along a meridian, or the difference in longitude along the Equator. With R = 6 400 km, 1° is about 111.7 km. At sea, distances are given in **nautical miles**: 1 nautical mile is 1 minute of arc on a great circle, so 1° = 60 nautical miles.',
    'A **parallel of latitude** α is a small circle of radius **r = R cos α**. The distance along it between two places is **θ/360 × 2πR cos α**, where θ is their difference in longitude.',
    'The **shortest distance** between two places is along the great circle through them. Along a meridian this is the meridian itself. Two places whose longitudes differ by 180° lie on one great circle through a pole: in the same hemisphere, the angle at the centre is 180° minus the sum of their latitudes.',
  ], 'latitude-longitude', 'Along a parallel, multiply by cos(latitude); along a great circle, do not.',
  ['Which route between two places is the shortest?', ['The arc of the great circle through them', 'The parallel of latitude through them', 'Any meridian', 'The Equator'], 'A great circle has the largest possible radius, so its arc bends least.'],
  [['Nautical mile', 'The distance of 1 minute of arc along a great circle.'], ['Angular distance', 'The angle at the centre of the Earth between two places.']],
  [
    { q: 'Two towns are on the meridian 10° E at latitudes 3° N and 10° N. Find the distance between them along the meridian (R = 6 400 km, π = 3.142).', steps: ['Difference in latitude = 7°.', 'd = 7/360 × 2 × 3.142 × 6 400', '**d ≈ 782 km**.'] },
    { q: 'P is (60° N, 20° E) and Q is (60° N, 80° E). Find the distance PQ along the parallel of latitude.', steps: ['Difference in longitude = 60°.', 'Radius of the parallel = 6 400 cos 60° = 3 200 km.', 'd = 60/360 × 2 × 3.142 × 3 200 = **3 351 km**.'] },
    { q: 'Find the shortest distance between A(50° N, 30° E) and B(50° N, 150° W).', steps: ['The longitudes differ by 180°, so A and B lie on one great circle through the North Pole.', 'Angle at the centre = 180° − 50° − 50° = 80°.', 'd = 80/360 × 2 × 3.142 × 6 400 = **8 937 km**.'] },
  ]),

  // ---------- Networks ----------
  L('ma-networks-4', 'ma-f4-networks', '28.1', 'Networks: vertices, edges and traversability', 12, ['Geometry', 'Networks'], [
    'A **network** (or graph) is a set of points, called **vertices** or nodes, joined by lines called **edges** or arcs. The edges divide the plane into **regions**, counting the outside. Roads between towns, family trees, electricity lines and flight routes are networks.',
    'The **order** (degree) of a vertex is the number of edges that meet at it; a vertex is **odd** or **even** by its order. The orders of all the vertices add up to twice the number of edges, because every edge has two ends, so the number of odd vertices is always even.',
    'A connected network is **traversable** (it can be drawn in one stroke without repeating an edge) if it has **no odd vertices** (start anywhere and finish where you started) or **exactly two** (start at one odd vertex and finish at the other). The famous seven bridges of Königsberg have four odd vertices, so no walk crosses each bridge exactly once.',
    'For a connected network drawn without crossing edges, **V − E + R = 2** (vertices − edges + regions).',
    'Types of graph: a **null graph** has no edges; a **complete graph** joins every pair of vertices (n vertices give n(n − 1)/2 edges); a **directed graph** has arrows (one-way roads); a mixed graph has both kinds of edge; a **weighted graph** has numbers on its edges.',
  ], 'network-graph', 'Count the odd vertices first: 0 or 2 means the network can be traced in one stroke.',
  ['A network has exactly two odd vertices. To trace it in one stroke you must:', ['Start at one odd vertex and finish at the other', 'Start at an even vertex', 'Finish where you started', 'Lift the pen once'], 'Passing through a vertex uses two of its edges.'],
  [['Vertex', 'A point of a network where edges meet.'], ['Edge', 'A line joining two vertices.'], ['Order of a vertex', 'The number of edges meeting at it.'], ['Traversable', 'Able to be drawn in one stroke without repeating an edge.']],
  [
    { q: 'A network has vertices A, B, C, D and E, with edges AB, AC, BC, BD, CD and DE. Find the order of each vertex and decide whether it is traversable.', steps: ['Orders: A 2, B 3, C 3, D 3, E 1 (total 12 = 2 × 6 edges).', 'Odd vertices: B, C, D and E, so four odd vertices.', 'The network is **not traversable**.'] },
    { q: 'Check V − E + R = 2 for a square with both diagonals drawn, taking their crossing as a vertex.', steps: ['V = 5: the four corners and the centre.', 'E = 8: four sides and four half-diagonals.', 'R = 5: four triangles and the outside.', 'V − E + R = 5 − 8 + 5 = **2**.'] },
  ]),

  L('ma-routes-4', 'ma-f4-networks', '28.2', 'Shortest routes and flow diagrams', 12, ['Networks'], [
    'In a **weighted network** the numbers on the edges are distances, times or costs. To find the **shortest route**, start at the first vertex and label each vertex with the shortest total distance found so far; always continue from the vertex with the smallest label that is not yet fixed, and replace a label whenever a shorter way is found. When the destination is fixed, trace the route back.',
    'A network can also be stored in a table (a **route matrix**) whose entry in row i and column j is the number of direct roads from vertex i to vertex j.',
    'A **flow diagram** (flowchart) shows the steps of a process in order:\n- an **oval** for start and stop\n- a **rectangle** for an instruction\n- a **parallelogram** for input or output\n- a **diamond** for a decision, with a "yes" and a "no" branch\n- arrows showing the order.\nFlow diagrams set out a method, such as working out tax or deciding whether a quadratic has real roots.',
  ], 'network-graph', 'Write each new total beside the vertex and cross it out when you find a shorter one.',
  ['In a flow diagram, an instruction such as "Add 5 to x" is drawn in a:', ['Rectangle', 'Diamond', 'Oval', 'Circle'], 'Diamonds hold questions; ovals start and stop.'],
  [['Weighted network', 'A network with a number on each edge.'], ['Flow diagram', 'A diagram that shows the steps of a process in order with standard shapes.']],
  [
    { q: 'Roads join towns: A to B 7 km, A to C 3 km, C to B 2 km, B to D 4 km and C to D 8 km. Find the shortest route from A to D.', steps: ['From A: C = 3 and B = 7.', 'From C (smallest): B = 3 + 2 = 5, shorter than 7; D = 3 + 8 = 11.', 'From B: D = 5 + 4 = 9, shorter than 11.', 'The shortest route is **A → C → B → D, 9 km**.'] },
    { q: 'Describe a flow diagram that decides whether ax² + bx + c = 0 has real roots.', steps: ['Start (oval), then input a, b and c (parallelogram).', 'Work out D = b² − 4ac (rectangle).', 'Decision: is D ≥ 0? (diamond)', 'Yes: output "real roots". No: output "no real roots". Then stop (oval).'] },
  ]),

  // ---------- GCE practice ----------
  L('ma-paper1-4', 'ma-f4-gce', '29.1', 'Paper 1: multiple-choice methods', 11, ['Exam skills', 'Revision'], [
    'Paper 1 of GCE Ordinary Level Mathematics (0570) lasts **1½ hours** and is made of multiple-choice questions from the whole syllabus: numbers and bases, sets, indices and logarithms, algebra, coordinate geometry, mensuration, trigonometry, statistics and probability. It rewards speed and accuracy on short calculations.',
    'Methods that save time:\n- estimate first and cross out options of the wrong size\n- substitute the options into an equation instead of solving it\n- expand the options instead of factorising\n- compare algebraic expressions by trying a simple number such as x = 2\n- draw a quick sketch for every geometry question.',
    'Common traps: mixing units (cm and m, cm² and m²); forgetting to reverse an inequality when dividing by a negative number; writing (a + b)² = a² + b²; a calculator left in radian mode; rounding too early.',
    'Practise past questions in timed sets. Work out the time you have per question from the number of questions on the paper, and never leave a question blank.',
  ], 'gce-maths-papers', 'If a question takes too long, mark it, move on and come back at the end.',
  ['A question asks which value of x satisfies 3x − 7 = 2x + 5. The quickest method is to:', ['Solve it or substitute the options', 'Draw a graph', 'Use the quadratic formula', 'Use logarithms'], 'It is a simple linear equation: x = 12.'],
  [['Distractor', 'A wrong option in a multiple-choice question, often the result of a common mistake.']],
  [
    { q: 'Which of these is a factor of x² − x − 12? A: x − 4; B: x + 4; C: x − 3; D: x + 6.', steps: ['Use the factor theorem: for x − 4, put x = 4: 16 − 4 − 12 = 0.', 'The answer is **A**, without factorising fully.'] },
    { q: 'Estimate 0.0498 × 612 ÷ 2.97 quickly.', steps: ['≈ 0.05 × 600 ÷ 3 = 10.', 'Choose the option close to 10 (the exact value is 10.26).'] },
  ]),

  L('ma-paper2-4', 'ma-f4-gce', '29.2', 'Paper 2: setting out structured answers', 12, ['Exam skills', 'Revision'], [
    'Paper 2 (**2½ hours**) has structured questions in which **method marks** are given for correct working. Read the instructions on the paper about which questions to answer, and share your time according to the marks.',
    'Good setting out:\n- write the formula, then substitute the numbers, then calculate\n- one step per line, with the equals signs under each other\n- give units and the accuracy asked for (3 significant figures, 2 decimal places, the nearest degree)\n- in a geometry proof, give a reason after every statement.',
    'Graphs: use the scale given, label the axes, plot small neat crosses and draw smooth curves. In linear programming, shade as the question says and list the vertices. On a cumulative frequency curve, plot at the upper class boundaries and draw the lines you use to read the median and quartiles.',
    'Constructions: ruler and compasses only, with every arc left visible; measure to the nearest millimetre or degree.',
    'Check every answer: substitute solutions back, and ask whether the answer is sensible (a length cannot be negative and a probability cannot be greater than 1).',
  ], 'gce-maths-papers', 'Show the substituted formula: it can earn the method mark even if the arithmetic slips.',
  ['In a Paper 2 answer, which line can earn a method mark even if the final answer is wrong?', ['Area = ½ × 8 × 11 × sin 52°', 'Area = 34.7', 'Area = ?', 'I used a calculator'], 'The formula with the numbers substituted shows the method.'],
  [['Method mark', 'A mark given for a correct method, even if a later step is wrong.']],
  [
    { q: 'Set out the answer: find the area of triangle ABC with AB = 8 cm, AC = 11 cm and angle A = 52°, to 3 significant figures.', steps: ['Area = ½ × AB × AC × sin A', '= ½ × 8 × 11 × sin 52°', '= 44 × 0.7880 = 34.67 cm²', '= **34.7 cm²** (3 s.f.)'] },
  ]),
];
