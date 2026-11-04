// A Level Geology lessons (0755), Lower Sixth, Term 1: the 0755 papers and
// safety, crystal symmetry and Miller indices, the crystal systems and
// twinning, silicate structures, physical mineralogy, plate mechanisms,
// Bowen’s series and phase diagrams, igneous classification, and magmatic
// differentiation with volcanic hazards.

const PAPER = { Method: 'All papers', Practical: 'Practical', MCQ: 'Paper 1' };

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: PAPER[tags[0]] || 'All papers',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_GLL6A = [
  // ---------- 1. Orientation ----------
  L('agl-method-1', 'agl-l6-method', '1.1', 'The 0755 examination and safe practice', 16, ['Method'], [
    'The GCE Advanced Level Geology examination (0755) has written papers and a practical. In 2026: **Paper 1**, 1½ hours, multiple choice on the whole syllabus (Thursday 4 June, morning); **Paper 2**, 3 hours (Thursday 4 June, afternoon); and the **practical examination** (Saturday 16 May). Read the cover of each paper for its sections and choices.',
    'The scheme of work gives Geology 6 to 8 periods a week in the Science series. The Lower Sixth builds the base: crystals and minerals, igneous, sedimentary and metamorphic rocks, structures and maps. The Upper Sixth adds dating, applied geology and the regional geology of Cameroon.',
    'Safety in the laboratory and the field:\n- wear eye protection when using acid or a hammer, and use only a drop of dilute HCl\n- never hammer towards people; keep away from the foot of loose cliffs and quarry faces\n- work in groups in the field and tell someone where you are going\n- label every sample with its locality and date.',
  ], 'agl-gce-0755', 'Paper 1 rewards precision; Paper 2 rewards explanation, maps and calculation; the practical rewards careful observation.',
  ['When was the 2026 A Level Geology practical examination?', ['Saturday 16 May', 'Thursday 4 June', 'Monday 8 June', 'Friday 12 June'], 'Before the written papers.'],
  [['Practical examination', 'The test of identification, map and laboratory skills.'], ['Locality', 'The exact place where a specimen or observation was taken.']],
  [
    { q: 'A student plans to test a rock for calcite in class. List the safe procedure.', steps: ['Put on **eye protection**.', 'Place the specimen on a tray and add **one drop of dilute HCl** with a dropper.', 'Watch for **effervescence** (fizzing of CO2): calcite fizzes strongly; dolomite only when powdered.', 'Wipe the specimen, wash hands, and record the result.'] },
  ]),
  L('agl-method-2', 'agl-l6-method', '1.2', 'Describing a hand specimen: the O Level base revised', 18, ['Practical'], [
    'A **mineral** is a naturally occurring inorganic solid with a definite chemical composition (or range) and an ordered internal structure. A **rock** is an aggregate of one or more minerals.',
    'A systematic hand-specimen description records:\n- **colour** (fresh and weathered surfaces)\n- **grain size**: coarse (over 5 mm), medium (1 to 5 mm), fine (under 1 mm), or glassy\n- **texture**: crystalline (interlocking) or clastic (grains cemented), foliated or not\n- **minerals** present and their proportions\n- **fossils** or structures (bedding, vesicles, banding)\n- then the **name** and the group (igneous, sedimentary, metamorphic).',
    'Interlocking crystals suggest an igneous or metamorphic rock; rounded grains with cement point to a sedimentary rock; aligned platy minerals point to a metamorphic rock.',
  ], 'agl-specimen', 'Describe first, name last: the description earns the marks even if the name is wrong.',
  ['A rock with interlocking, randomly oriented coarse crystals of quartz, feldspar and mica is most likely:', ['granite', 'sandstone', 'schist', 'basalt'], 'Coarse, crystalline, no foliation.'],
  [['Mineral', 'A natural inorganic solid with a definite composition and ordered structure.'], ['Texture', 'The size, shape and arrangement of the grains in a rock.']],
  [
    { q: 'Describe and name: grey, fine-grained, no visible crystals, many rounded holes, some filled with white calcite.', steps: ['Fine-grained, **crystalline** groundmass: volcanic igneous rock.', 'Rounded holes = **vesicles** from gas; filled ones = **amygdales**.', 'Dark colour suggests a **basic** rock.', '**Name: amygdaloidal basalt.**'] },
  ]),

  // ---------- 2. Symmetry and Miller indices ----------
  L('agl-symmetry-1', 'agl-l6-symmetry', '2.1', 'The crystal lattice and the elements of symmetry', 18, ['Minerals'], [
    'A **crystal** is a solid with a regular, repeating internal arrangement of atoms, the **lattice**, which shows outwardly as plane **faces**. Because faces reflect the lattice, the angle between corresponding faces of a mineral is always the same: Steno’s **law of constancy of interfacial angles** (1669).',
    'The **elements of symmetry**:\n- a **plane of symmetry** divides the crystal into two mirror-image halves\n- an **axis of symmetry** is a line about which a rotation brings the crystal into an identical position 2, 3, 4 or 6 times in one turn (two-, three-, four- and six-fold axes)\n- a **centre of symmetry** exists if every face has a similar parallel face on the opposite side.',
    'A **cube** has the full symmetry of the cubic system: **9 planes**, **13 axes** (3 four-fold through the face centres, 4 three-fold through opposite corners, 6 two-fold through opposite edge midpoints) and a **centre**. Crystals with fewer symmetry elements belong to lower systems.',
  ], 'agl-symmetry', 'Count axes by type: through faces, through corners, through edges.',
  ['How many axes of four-fold symmetry does a cube have?', ['3', '4', '6', '13'], 'One through each pair of opposite faces.'],
  [['Axis of symmetry', 'A line about which rotation repeats the crystal’s appearance.'], ['Centre of symmetry', 'A point through which every face has a matching parallel face.']],
  [
    { q: 'Write the symmetry of a cube in short form and check the total of axes.', steps: ['Four-fold axes: **3** (through face centres).', 'Three-fold axes: **4** (through body diagonals).', 'Two-fold axes: **6** (through edge midpoints).', '**3 + 4 + 6 = 13 axes**, with 9 planes and a centre.'] },
  ]),
  L('agl-symmetry-2', 'agl-l6-symmetry', '2.2', 'Crystallographic axes, parameters and Miller indices', 20, ['Minerals'], [
    'Crystal faces are described with reference to **crystallographic axes** a, b and c. The **parameters** of a face are its intercepts on the axes, measured in units of the axial lengths; the **axial ratio** a : b : c compares those unit lengths.',
    '**Miller indices** (hkl), devised by W. H. Miller in 1839, are found in three steps:\n- write the intercepts in unit lengths (∞ if the face is parallel to an axis)\n- take the **reciprocals**\n- clear fractions to the smallest whole numbers.\nA negative intercept gives a bar over the index (written here as −1).',
    'Examples on a cube: the face cutting a at 1 and parallel to b and c is **(100)**; an octahedron face cutting all three axes at 1 is **(111)**; a face cutting a and b at 1 and parallel to c is **(110)**. A **form** is a set of equivalent faces, written {hkl}: the six faces of a cube are {100}.',
  ], 'agl-miller', 'A zero in a Miller index always means "parallel to that axis".',
  ['A face with intercepts 1, 1, ∞ has Miller indices:', ['(110)', '(111)', '(100)', '(001)'], 'Reciprocals 1, 1, 0.'],
  [['Miller indices', 'Whole numbers (hkl) from the reciprocals of a face’s intercepts.'], ['Form', 'A set of crystal faces related by symmetry, written {hkl}.']],
  [
    { q: 'Find the Miller indices of a face with intercepts 2a, 3b and ∞c.', steps: ['Intercepts: **2, 3, ∞**.', 'Reciprocals: **1⁄2, 1⁄3, 0**.', 'Multiply by 6 to clear fractions: **3, 2, 0**.', '**Miller indices (320).**'] },
    { q: 'Find the indices of a face with intercepts a, −2b and 2c.', steps: ['Reciprocals: **1, −1⁄2, 1⁄2**.', 'Multiply by 2: **2, −1, 1**.', '**(2 −1 1)**, written with a bar over the 1 in the second place.'] },
  ]),

  // ---------- 3. Crystal systems and twins ----------
  L('agl-systems-1', 'agl-l6-systems', '3.1', 'The crystal systems and their axes', 20, ['Minerals'], [
    'Crystals are grouped by their axes and symmetry into **crystal systems** (32 classes in all):\n- **cubic**: three equal axes at 90° (halite, galena, pyrite, garnet, fluorite)\n- **tetragonal**: two equal axes and one different, all at 90° (zircon, cassiterite)\n- **orthorhombic**: three unequal axes at 90° (olivine, barite, topaz)\n- **hexagonal** and **trigonal**: three equal horizontal axes at 120° and a vertical axis (beryl is hexagonal; quartz and calcite trigonal)\n- **monoclinic**: three unequal axes, one angle not 90° (gypsum, orthoclase, augite, micas)\n- **triclinic**: three unequal axes, no right angles (plagioclase, kyanite).',
    'Each system has a characteristic **minimum symmetry**: four three-fold axes (cubic), one four-fold axis (tetragonal), three two-fold axes or planes (orthorhombic), one six-fold axis (hexagonal), one three-fold axis (trigonal), one two-fold axis or plane (monoclinic), and at most a centre (triclinic).',
    'The **contact goniometer** measures the angle between two faces. Because interfacial angles are constant, measured angles help identify a mineral even when its crystals are distorted.',
  ], 'geol-crystal-systems', 'Remember the order of falling symmetry: cubic, hexagonal and trigonal, tetragonal, orthorhombic, monoclinic, triclinic.',
  ['Gypsum, orthoclase and augite crystallise in the:', ['monoclinic system', 'cubic system', 'triclinic system', 'tetragonal system'], 'One angle is not 90°.'],
  [['Crystal system', 'A group of crystals with the same kind of axes and minimum symmetry.'], ['Goniometer', 'An instrument for measuring the angle between crystal faces.']],
  [
    { q: 'A crystal has three axes of different lengths, all at right angles, and three two-fold axes. Which system, and give an example.', steps: ['Three unequal axes at 90°: **orthorhombic**.', 'Three two-fold axes is its minimum symmetry: consistent.', '**Example: olivine or barite.**'] },
  ]),
  L('agl-systems-2', 'agl-l6-systems', '3.2', 'Twinning in crystals', 16, ['Minerals'], [
    'A **twin** is an intergrowth of two or more parts of the same mineral joined in a definite, symmetrical relationship described by a **twin law** (a twin plane or twin axis). Twinning arises during growth, during transformation between polymorphs, or by deformation.',
    'Types:\n- **contact twins**: two parts meet on a plane (the swallowtail twin of gypsum; the spinel-law twin)\n- **penetration twins**: the parts interpenetrate (the Carlsbad twin of orthoclase; interpenetrant cubes of fluorite; the cross twin of staurolite)\n- **repeated (polysynthetic) twins**: many thin parallel lamellae, giving fine striations on cleavage faces (the albite twinning of plagioclase).',
    'Twinning is a useful identification test: fine parallel striations separate **plagioclase** from orthoclase, and a Carlsbad twin is typical of **orthoclase**.',
  ], 'agl-twins', 'Striations on a feldspar cleavage face mean plagioclase.',
  ['The swallowtail twin is characteristic of:', ['gypsum', 'quartz', 'galena', 'olivine'], 'A contact twin.'],
  [['Twin law', 'The rule (plane or axis) relating the parts of a twinned crystal.'], ['Polysynthetic twinning', 'Repeated thin parallel twins, as in plagioclase.']],
  [
    { q: 'Two feldspar crystals are pink and white. The white one shows fine parallel lines on a cleavage face; the pink one is divided into two interpenetrating halves. Identify each.', steps: ['Fine parallel lines = **albite (polysynthetic) twinning**: the white crystal is **plagioclase**.', 'Two interpenetrating halves = **Carlsbad twin**: the pink crystal is **orthoclase**.'] },
  ]),

  // ---------- 4. Silicates ----------
  L('agl-silicates-1', 'agl-l6-silicates', '4.1', 'The SiO4 tetrahedron and its polymerisation', 20, ['Minerals'], [
    'Oxygen and silicon are the two most abundant elements in the crust, so most minerals are **silicates**. Their building block is the **SiO4 tetrahedron**: one Si4+ ion surrounded by four O2− ions, with a net charge of **4−**.',
    'Tetrahedra can share oxygens with neighbours (**polymerisation**). The more corners shared, the higher the Si:O ratio:\n- **nesosilicates**: isolated tetrahedra, SiO4 (olivine, garnet, zircon)\n- **sorosilicates**: pairs, Si2O7 (epidote)\n- **cyclosilicates**: rings, Si6O18 in beryl (beryl, tourmaline)\n- **inosilicates**: single chains, SiO3 (pyroxenes); double chains, Si4O11 (amphiboles)\n- **phyllosilicates**: sheets, Si2O5 (micas, clays, chlorite, talc)\n- **tectosilicates**: frameworks, SiO2 (quartz, feldspars, feldspathoids).',
    'Metal cations (Mg2+, Fe2+, Ca2+, Na+, K+, Al3+) sit between the tetrahedra and balance the charge. In feldspars some Si4+ is replaced by Al3+, and the charge is balanced by K+, Na+ or Ca2+.',
  ], 'agl-silicates', 'Ratio check: 1:4 isolated, 1:3 single chain, 4:11 double chain, 2:5 sheet, 1:2 framework.',
  ['Micas belong to which silicate group?', ['phyllosilicates', 'nesosilicates', 'tectosilicates', 'inosilicates'], 'Sheets of tetrahedra.'],
  [['Silica tetrahedron', 'An SiO4 group: one silicon bonded to four oxygens.'], ['Polymerisation', 'The linking of tetrahedra by shared oxygens.']],
  [
    { q: 'Explain why quartz is SiO2 although each tetrahedron has four oxygens.', steps: ['In a framework every oxygen is **shared by two tetrahedra**.', 'Each silicon therefore "owns" **4 × ½ = 2 oxygens**.', '**Formula SiO2**, and the framework is electrically neutral.'] },
  ]),
  L('agl-silicates-2', 'agl-l6-silicates', '4.2', 'How structure controls cleavage, hardness and weathering', 16, ['Minerals'], [
    'Bonds within the tetrahedra (Si–O) are strong; bonds through the metal cations are weaker. Minerals break along the weaker bonds, so **structure controls cleavage**:\n- **olivine** (isolated tetrahedra) has no good cleavage\n- **pyroxenes** (single chains) have two cleavages at about **87° and 93°**\n- **amphiboles** (double chains) have two cleavages at about **56° and 124°**\n- **micas** (sheets) have one perfect cleavage, splitting into thin flakes\n- **quartz** (a strong framework) has no cleavage and a conchoidal fracture.',
    'Strong frameworks are hard: quartz is 7 on the Mohs scale, while sheet silicates such as talc (1) are soft because the sheets slide past each other.',
    'Minerals with less polymerised structures that crystallise at high temperatures (olivine, pyroxene) tend to weather faster at the surface than highly polymerised quartz.',
  ], 'agl-silicate-ratio', 'Use cleavage angles to tell a pyroxene (about 90°) from an amphibole (about 60° and 120°).',
  ['A dark mineral with two cleavages meeting at about 124° is most likely:', ['an amphibole such as hornblende', 'a pyroxene such as augite', 'olivine', 'quartz'], 'Double-chain silicate.'],
  [['Cleavage', 'Breaking along planes of weak bonding in the structure.'], ['Conchoidal fracture', 'A curved, shell-like break typical of quartz and glass.']],
  [
    { q: 'Two dark prismatic minerals in a diorite: one has cleavages at near 90°, the other at about 60° and 120°. Identify them.', steps: ['About 90°: **single-chain inosilicate, a pyroxene (augite)**.', 'About 60° and 120°: **double-chain inosilicate, an amphibole (hornblende)**.'] },
  ]),

  // ---------- 5. Physical mineralogy ----------
  L('agl-mineralogy-1', 'agl-l6-mineralogy', '5.1', 'Identifying minerals by their physical properties', 18, ['Practical'], [
    'Physical properties used in identification:\n- **hardness** on the Mohs scale (1 talc, 2 gypsum, 3 calcite, 4 fluorite, 5 apatite, 6 orthoclase, 7 quartz, 8 topaz, 9 corundum, 10 diamond); fingernail about 2.5, copper coin about 3.5, steel knife and glass about 5.5\n- **streak**: colour of the powder on an unglazed porcelain plate (haematite red-brown, magnetite black, pyrite greenish-black)\n- **lustre**: metallic, vitreous (glassy), pearly, resinous, earthy\n- **cleavage and fracture**\n- **specific gravity**: quartz 2.65, calcite 2.71, barite 4.5, pyrite 5.0, galena 7.5\n- other tests: reaction with acid, magnetism, taste (halite), crystal form.',
    'Colour alone is unreliable: impurities colour quartz purple (amethyst), pink or smoky. Streak, hardness and cleavage are more diagnostic.',
    'The Mohs scale is a ranking, not an even scale: diamond is several times harder than corundum, although they are only one step apart.',
  ], 'geol-mohs', 'A mineral that scratches glass is harder than 5.5; one scratched by a fingernail is softer than 2.5.',
  ['A mineral is scratched by a knife but scratches a copper coin. Its hardness is about:', ['between 3.5 and 5.5', 'over 7', 'under 2.5', 'exactly 10'], 'Bracket it between the tools.'],
  [['Streak', 'The colour of a mineral’s powder.'], ['Specific gravity', 'The ratio of a mineral’s density to that of water.']],
  [
    { q: 'A heavy, silvery, metallic mineral in cubic crystals has a grey-black streak, three cleavages at 90° and hardness 2.5. Identify it.', steps: ['Metallic, cubic, three cleavages at right angles: **cubic cleavage**.', 'Very heavy (SG about 7.5), soft, grey streak.', '**Galena (PbS), the main ore of lead.**'] },
  ]),
  L('agl-mineralogy-2', 'agl-l6-mineralogy', '5.2', 'Isomorphism, polymorphism and pseudomorphism', 18, ['Minerals'], [
    '**Isomorphism** (solid solution): ions of similar size and charge substitute for one another in the same structure, giving a continuous series of compositions.\n- **olivine**: forsterite Mg2SiO4 to fayalite Fe2SiO4 (Mg2+ and Fe2+ swap)\n- **plagioclase**: albite NaAlSi3O8 to anorthite CaAl2Si2O8 (coupled substitution of Na+Si4+ by Ca2+Al3+).',
    '**Polymorphism**: the same composition crystallises with different structures under different conditions.\n- carbon: **diamond** (cubic, hardness 10, formed at high pressure) and **graphite** (hexagonal sheets, hardness 1 to 2)\n- CaCO3: **calcite** (trigonal) and **aragonite** (orthorhombic)\n- Al2SiO5: **andalusite**, **kyanite** and **sillimanite**, used to judge metamorphic pressure and temperature.',
    '**Pseudomorphism**: one mineral replaces another but keeps the original external shape, such as limonite (hydrated iron oxide) in the cubic form of pyrite.',
  ], 'agl-polymorphs', 'Same chemistry, different structure: polymorph. Same structure, varying chemistry: solid solution.',
  ['Diamond and graphite are:', ['polymorphs of carbon', 'a solid solution', 'pseudomorphs', 'twins'], 'Same element, different structures.'],
  [['Solid solution', 'A mineral series in which ions substitute continuously.'], ['Polymorph', 'One of two or more minerals with the same chemistry but different structures.'], ['Pseudomorph', 'A mineral that has replaced another and kept its shape.']],
  [
    { q: 'An olivine contains 80% forsterite and 20% fayalite. Write it and explain what it shows.', steps: ['Written **Fo80Fa20**, or simply Fo80.', 'Mg and Fe occupy the same sites in proportions 80 : 20.', 'Mg-rich olivines crystallise at higher temperatures: **Fo80 suggests an early, hot basaltic magma.**'] },
  ]),

  // ---------- 6. Plate mechanisms ----------
  L('agl-tectonics-1', 'agl-l6-tectonics', '6.1', 'What drives the plates', 18, ['Structure'], [
    'The **lithosphere** (crust and uppermost mantle, rigid) is broken into plates that move over the weak **asthenosphere**. Three forces are proposed:\n- **mantle convection**: heat from radioactive decay and the core drives slow convection in the solid mantle, dragging the plates\n- **ridge push**: young, hot lithosphere at a ridge stands high and slides downhill under gravity\n- **slab pull**: cold, dense lithosphere sinking at a subduction zone pulls the rest of the plate behind it.',
    'Plates attached to large subducting slabs (such as the Pacific plate) move fastest, so **slab pull** is thought to be the largest force, with ridge push second.',
    'At **divergent** margins basaltic magma rises from decompression melting of the mantle; at **convergent** margins water released from the sinking slab lowers the melting point of the overlying mantle, giving andesitic magmas; **transform** margins have earthquakes but little volcanism.',
  ], 'agl-plate-engine', 'Ridge push pushes from behind; slab pull pulls from in front.',
  ['Which force is thought to be the largest driver of plate motion?', ['slab pull', 'ridge push', 'tidal drag', 'the Earth’s rotation'], 'Fast plates have large subducting slabs.'],
  [['Lithosphere', 'The rigid outer layer of crust and uppermost mantle.'], ['Asthenosphere', 'The weak, partly molten layer of mantle beneath the lithosphere.'], ['Slab pull', 'The pull of a sinking plate edge on the rest of the plate.']],
  [
    { q: 'Explain why melting occurs beneath a mid-ocean ridge although the mantle there is no hotter than elsewhere.', steps: ['Mantle rises beneath the ridge, so the **pressure on it falls**.', 'Lower pressure **lowers the melting point** of the rock.', '**Decompression melting** produces basaltic magma at the ridge.'] },
  ]),
  L('agl-tectonics-2', 'agl-l6-tectonics', '6.2', 'Palaeomagnetism, sea-floor spreading and Benioff zones', 20, ['Structure'], [
    'When basalt cools below its **Curie temperature** (about 580 °C for magnetite), magnetic minerals record the direction of the Earth’s field. The field reverses at irregular intervals, so new ocean floor forms **magnetic stripes** of normal and reversed polarity that are **symmetrical about the ridge** (Vine and Matthews, 1963).',
    'Dating the stripes gives the **spreading rate**: rate = distance from ridge ÷ age. Rates range from about 2 cm a year (Mid-Atlantic Ridge, half rate about 1 to 2 cm) to over 15 cm a year (East Pacific Rise). The oldest ocean floor is only about 200 million years old.',
    'At subduction zones, earthquake foci define a **Benioff (Wadati-Benioff) zone** dipping beneath the overriding plate to depths of about 700 km, tracing the sinking slab.',
  ], 'agl-stripes', 'Half-rate: one side of the ridge. Full rate: both sides together.',
  ['Magnetic stripes on the ocean floor are:', ['symmetrical about the ridge', 'parallel to the continents only', 'random', 'found only on land'], 'Spreading on both sides.'],
  [['Curie temperature', 'The temperature below which a mineral can hold magnetism.'], ['Benioff zone', 'An inclined zone of earthquakes along a subducting slab.']],
  [
    { q: 'The boundary between two stripes dated 4.0 million years lies 80 km from the ridge axis. Find the half and full spreading rates in cm per year.', steps: ['Half rate = 80 km ÷ 4.0 Ma = **20 km per million years**.', '20 km = 2,000,000 cm, so **2 cm per year**.', 'Full rate (both plates) = **4 cm per year**.'] },
  ]),

  // ---------- 7. Bowen and phase diagrams ----------
  L('agl-bowen-1', 'agl-l6-bowen', '7.1', 'Bowen’s reaction series', 18, ['Petrology'], [
    'N. L. Bowen, in experiments summarised in **The Evolution of the Igneous Rocks** (1928), showed that minerals crystallise from a cooling basaltic magma in a definite order.',
    'Two branches run side by side:\n- the **discontinuous series**: olivine → pyroxene → amphibole → biotite; each mineral reacts with the melt to form the next, with a different structure\n- the **continuous series**: calcium-rich plagioclase → sodium-rich plagioclase, changing composition gradually within one structure.\nThe branches meet in the last minerals: **K-feldspar, muscovite and quartz**, at the lowest temperatures.',
    'Uses: it explains which minerals occur together (olivine with Ca-plagioclase in basalt; quartz with K-feldspar and Na-plagioclase in granite); how fractional crystallisation makes magmas richer in silica; and why minerals high in the series weather fastest (Goldich, 1938).',
  ], 'agl-bowen', 'Read the series top to bottom as falling temperature and rising silica.',
  ['Which mineral crystallises at the highest temperature in Bowen’s series?', ['olivine', 'biotite', 'quartz', 'muscovite'], 'The top of the discontinuous branch.'],
  [['Discontinuous series', 'Minerals that react with the melt to form new minerals of a different structure.'], ['Continuous series', 'Plagioclase changing gradually from calcic to sodic.']],
  [
    { q: 'Explain why olivine and quartz are almost never found together in an igneous rock.', steps: ['Olivine crystallises at the **highest temperatures** from silica-poor melt.', 'Quartz crystallises **last**, from silica-rich residual melt.', 'Any silica present early **reacts with olivine** to form pyroxene.', '**So they belong to different stages and melt compositions.**'] },
  ]),
  L('agl-bowen-2', 'agl-l6-bowen', '7.2', 'Phase diagrams: the eutectic and solid-solution systems', 22, ['Petrology'], [
    'A **binary phase diagram** plots temperature against composition for two components. The **liquidus** marks the temperature above which all is liquid; the **solidus** that below which all is solid.',
    'In the **diopside-anorthite** system (Bowen, 1915), pure diopside melts at about **1,391 °C** and pure anorthite at about **1,553 °C**. Mixtures melt at lower temperatures, down to the **eutectic** at about **1,274 °C** and about **42% anorthite**. A melt richer in anorthite than the eutectic crystallises anorthite first; its liquid moves along the liquidus towards the eutectic, where both minerals crystallise together until all is solid.',
    'In the **albite-anorthite** (plagioclase) system there is a complete **solid solution**: crystals form a loop between liquidus and solidus. Early crystals are richer in anorthite than the melt; if they are not removed, they react to become more sodic as cooling continues. Removed early, they leave zoning or a sodium-rich melt.',
  ], 'agl-eutectic', 'At the eutectic the melt composition stops changing: both minerals crystallise until no liquid is left.',
  ['A melt of 80% diopside and 20% anorthite starts to crystallise:', ['diopside first', 'anorthite first', 'both at once', 'nothing until 1,000 °C'], 'It lies on the diopside side of the eutectic.'],
  [['Liquidus', 'The line above which a system is wholly liquid.'], ['Solidus', 'The line below which a system is wholly solid.'], ['Eutectic', 'The lowest melting point of a mixture, where two minerals crystallise together.']],
  [
    { q: 'Trace the cooling of a melt of 70% anorthite and 30% diopside.', steps: ['It meets the liquidus at about **1,450 °C**, on the anorthite side.', '**Anorthite crystallises first**; the melt becomes richer in diopside.', 'The liquid composition moves down the liquidus to the **eutectic (about 1,274 °C, 42% anorthite)**.', 'There **diopside and anorthite crystallise together** until the melt is used up.'] },
  ]),

  // ---------- 8. Igneous classification ----------
  L('agl-igneous-1', 'agl-l6-igneous', '8.1', 'Silica content, grain size and texture', 18, ['Petrology'], [
    'Igneous rocks are classified first by **silica content** (IUGS limits): **ultrabasic** under 45%, **basic** 45 to 52%, **intermediate** 52 to 63%, **acid** over 63%. (Older books use 55% and 65% as the limits.) Silica-rich rocks are paler and less dense; silica-poor rocks are darker and denser.',
    'Then by **grain size**, which reflects **cooling rate**: coarse (**phaneritic**, plutonic), medium (hypabyssal, in dykes and sills), fine (**aphanitic**, volcanic), or **glassy** (cooled too fast for crystals, as obsidian).',
    'Textures: **porphyritic** (large phenocrysts in a finer groundmass: two stages of cooling), **vesicular** (gas holes), **amygdaloidal** (filled vesicles), **ophitic** (pyroxene enclosing plagioclase laths, typical of dolerite), **graphic** (quartz intergrown with feldspar).',
    'The common rocks: acid: **granite** (coarse), **rhyolite** (fine); intermediate: **diorite**, **andesite**; basic: **gabbro**, **dolerite** (medium), **basalt**; ultrabasic: **peridotite**.',
  ], 'agl-silica-scale', 'Grain size tells where it cooled; silica tells what magma it came from.',
  ['A fine-grained igneous rock with 50% silica is:', ['basalt', 'rhyolite', 'gabbro', 'andesite'], 'Basic and volcanic.'],
  [['Phaneritic', 'Coarse-grained, with crystals visible to the eye.'], ['Aphanitic', 'Fine-grained, with crystals too small to see.'], ['Phenocryst', 'A large crystal in a porphyritic rock.']],
  [
    { q: 'A rock has large white feldspar crystals set in a fine grey groundmass. Interpret its cooling history.', steps: ['Two crystal sizes: **porphyritic texture**.', 'Large crystals grew **slowly at depth** first.', 'The magma then rose and the rest **cooled quickly**, forming the fine groundmass.', '**Two-stage cooling, for example a porphyritic andesite.**'] },
  ]),
  L('agl-igneous-2', 'agl-l6-igneous', '8.2', 'The CIPW norm and the IUGS QAPF classification', 20, ['Petrology'], [
    'Fine-grained rocks cannot be named from visible minerals, so geologists use chemistry. The **CIPW norm** (Cross, Iddings, Pirsson and Washington, early 1900s) calculates an ideal set of minerals from a chemical analysis, so that rocks of different grain size can be compared.',
    'For coarse rocks with visible minerals, the **IUGS QAPF** diagram is the international standard. The modal percentages of **Q** (quartz), **A** (alkali feldspar), **P** (plagioclase) and **F** (feldspathoids) are recalculated to 100 and plotted on a double triangle: Q at the top apex, F at the bottom, A and P at the side corners. A rock contains either quartz or feldspathoids, never both.',
    'Fields in the upper triangle: **granite** (Q 20 to 60%, with both feldspars), **granodiorite** and **tonalite** (more plagioclase), **syenite** and **monzonite** (little quartz), **diorite** and **gabbro** (plagioclase-rich, little quartz; told apart by plagioclase composition and dark minerals).',
  ], 'agl-qapf', 'Recalculate Q, A and P to 100 before plotting: ignore the dark minerals.',
  ['QAPF stands for:', ['quartz, alkali feldspar, plagioclase, feldspathoid', 'quartz, augite, pyroxene, feldspar', 'quartz, amphibole, plagioclase, fluorite', 'none of these'], 'The IUGS scheme.'],
  [['CIPW norm', 'Ideal minerals calculated from a rock’s chemical analysis.'], ['Modal composition', 'The actual percentages of minerals in a rock.']],
  [
    { q: 'A coarse rock contains quartz 25%, alkali feldspar 30%, plagioclase 25% and biotite 20%. Name it.', steps: ['Ignore biotite; Q + A + P = **80%**.', 'Recalculate: Q = 25 ÷ 80 = **31%**, A = **38%**, P = **31%**.', 'Q between 20 and 60%, plagioclase ÷ (A + P) = 45%.', '**It plots in the granite field.**'] },
  ]),

  // ---------- 9. Differentiation and hazards ----------
  L('agl-differentiation-1', 'agl-l6-differentiation', '9.1', 'Magmatic differentiation', 18, ['Petrology'], [
    '**Partial melting** of mantle peridotite yields **basaltic** magma; partial melting of continental crust yields **granitic** magma. From one parent magma, **differentiation** can produce a range of rocks.',
    'Processes:\n- **fractional crystallisation**: early crystals (olivine, pyroxene, Ca-plagioclase) are removed by settling or by being left behind, so the remaining melt becomes richer in silica, Na and K\n- **crystal settling**: dense crystals sink to form **cumulate layers**, as in the Skaergaard intrusion of East Greenland (Wager and Deer)\n- **assimilation**: hot magma melts and absorbs country rock, changing its composition\n- **magma mixing**: two magmas mingle, giving disequilibrium crystals and blobs (enclaves) of one in the other.',
    'A suite such as basalt → andesite → dacite → rhyolite in one volcano can come from fractional crystallisation of a basaltic parent.',
  ], 'agl-differentiation', 'Removing early crystals takes Mg and Fe out of the melt and leaves it richer in silica.',
  ['Fractional crystallisation of a basaltic magma makes the remaining melt:', ['richer in silica, sodium and potassium', 'richer in magnesium', 'unchanged', 'cooler but identical'], 'Early minerals remove Mg, Fe and Ca.'],
  [['Differentiation', 'Processes that produce different magmas from one parent.'], ['Cumulate', 'A rock formed by crystals accumulating, usually by settling.'], ['Assimilation', 'The melting and incorporation of country rock into magma.']],
  [
    { q: 'A thick sill has an olivine-rich layer at its base and a quartz-bearing layer near its top. Explain.', steps: ['**Olivine crystallised first** and, being dense, **settled to the floor**.', 'The remaining melt became richer in silica as early minerals were removed.', 'The last melt, near the top, crystallised **quartz and feldspar**.', '**Fractional crystallisation with crystal settling.**'] },
  ]),
  L('agl-differentiation-2', 'agl-l6-differentiation', '9.2', 'Magma type, eruption style and volcanic hazard zoning', 18, ['Petrology'], [
    'Viscosity rises with **silica content** and falls with temperature. **Basaltic** magma (hot, low silica) is runny and releases gas easily: **effusive** eruptions with lava flows and fire fountains. **Andesitic** and **rhyolitic** magmas are viscous and trap gas: **explosive** eruptions with ash, pumice and pyroclastic flows.',
    'Hazards: lava flows, pyroclastic flows, ash falls, lahars (volcanic mudflows), volcanic gases (CO2, SO2), landslides and earthquakes.',
    '**Mount Cameroon**, a basaltic volcano, erupted in the 20th century and again in **1999** and **2000**; the 1999 flows moved down the southern flank towards the coast. A **hazard zoning map** combines past lava paths, slope and vent positions to mark zones of high, moderate and low risk, guiding land use, monitoring and evacuation plans.',
  ], 'agl-hazard-zones', 'More silica, more viscosity, more explosive.',
  ['Mount Cameroon’s eruptions are mostly:', ['effusive, with basaltic lava flows', 'highly explosive with pumice', 'mud eruptions', 'ice eruptions'], 'Runny basaltic magma.'],
  [['Viscosity', 'Resistance of a magma to flow.'], ['Lahar', 'A mudflow of volcanic debris and water.'], ['Hazard zoning', 'Mapping areas by their level of volcanic risk.']],
  [
    { q: 'A town lies 8 km downslope of a fissure on Mount Cameroon, in a valley that past flows followed. How should it be zoned, and why?', steps: ['Past lava flows follow **valleys**, and the town lies in one, below a vent.', 'Basaltic flows can travel several kilometres in days.', '**High-hazard zone**: plan evacuation routes, monitor the vent, avoid new building in the valley floor.'] },
  ]),
];
