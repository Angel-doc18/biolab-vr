// Geology lessons for Form 4, term 1: the origin and shape of the Earth, its
// internal structure and external spheres, minerals and their properties,
// crystallography, magma and igneous rocks. Original text written for this
// app, with Cameroonian examples.

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
  // ---------- Origin of the Earth ----------
  L('gl-universe-4', 'gl-f4-origin', '1.1', 'The origin of the universe and the Solar System', 14, ['Earth science'], [
    'The **Big Bang theory** states that the universe began about **13.8 billion years** ago from an extremely hot, dense state and has been expanding and cooling ever since. Evidence: galaxies moving apart (the red shift of their light) and the faint **cosmic microwave background** radiation left over from the early universe.',
    'The **nebular hypothesis** (first proposed by Kant and Laplace) explains the **Solar System**: a huge rotating cloud of gas and dust (a **nebula**) collapsed under **gravity**. Most of the matter gathered at the centre to form the **Sun**; the rest flattened into a spinning disc in which dust and gas clumped together (**accretion**) to form **planets**, moons and asteroids. The inner planets (Mercury, Venus, Earth, Mars) are rocky; the outer giants are mainly gas and ice.',
    'The Earth formed about **4.6 billion years** ago. Early on it was largely molten; heavy iron and nickel sank to form the **core**, lighter material rose to form the **mantle** and **crust** (differentiation), and gases released by volcanoes formed an early atmosphere, from which water condensed into the first oceans.',
  ], 'geol-origin', 'Universe 13.8 billion years; Earth 4.6 billion years.',
  ['The planets formed in the solar nebula by:', ['accretion of dust and gas in a spinning disc', 'splitting from the Sun', 'erosion', 'metamorphism'], 'Particles stuck together and grew.'],
  [['Big Bang', 'The theory that the universe began from a hot, dense state about 13.8 billion years ago.'], ['Nebula', 'A cloud of gas and dust in space.'], ['Accretion', 'The growth of a body by particles sticking together.'], ['Differentiation', 'The separation of the early Earth into layers by density.']],
  [
    { q: 'Explain why the Earth has a dense iron core and a light rocky crust.', steps: ['**The early Earth was hot and largely molten.**', '**Dense iron and nickel sank towards the centre under gravity, forming the core.**', '**Lighter silicate material rose, forming the mantle and, at the top, the crust.**'] },
  ]),

  L('gl-earthshape-4', 'gl-f4-origin', '1.2', 'The shape, size and dimensions of the Earth', 13, ['Earth science'], [
    'The Earth is not a perfect sphere but an **oblate spheroid**: slightly flattened at the poles and bulging at the equator, because of its rotation. Its more exact shape, following mean sea level, is called the **geoid**.',
    'Dimensions:\n- equatorial radius about **6,378 km**; polar radius about **6,357 km**; mean radius about **6,371 km**\n- equatorial circumference about **40,075 km**\n- surface area about 510 million km², of which about **71%** is covered by water.',
    'Evidence that the Earth is round: the **curved shadow** of the Earth on the Moon during a lunar eclipse; ships disappearing **hull first** over the horizon; the horizon widening as one climbs higher; photographs from space; and the possibility of travelling round the world.',
  ], 'geol-origin', 'Oblate spheroid: flattened at the poles, wider at the equator.',
  ['About what fraction of the Earth’s surface is covered by water?', ['71%', '29%', '50%', '90%'], 'Oceans dominate.'],
  [['Oblate spheroid', 'A sphere flattened at the poles.'], ['Geoid', 'The true shape of the Earth, following mean sea level.'], ['Circumference', 'The distance round a circle or sphere.']],
  [
    { q: 'The equatorial radius is 6,378 km and the polar radius 6,357 km. By how much is the Earth flattened, and why?', steps: ['Difference = 6,378 − 6,357 = **21 km.**', '**Rotation produces an outward effect strongest at the equator, so the Earth bulges there and is flattened at the poles.**'] },
  ]),

  // ---------- Interior ----------
  L('gl-layers-4', 'gl-f4-interior', '2.1', 'The layers of the Earth', 15, ['Earth science'], [
    'The Earth is made of concentric layers:\n- **crust**: the thin outer layer. **Continental crust** is 30 to 70 km thick, granitic, rich in silicon and aluminium (**SiAl**), density about 2.7. **Oceanic crust** is 5 to 10 km thick, basaltic, rich in silicon and magnesium (**SiMa**), density about 3.0\n- **mantle**: from the base of the crust to about **2,900 km**; hot, dense silicate rock rich in iron and magnesium\n- **core**: from 2,900 km to the centre at about **6,371 km**; mainly iron and nickel (**NiFe**), sometimes called the **barysphere** (the heavy sphere). The **outer core** is **liquid**; the **inner core** (from about 5,150 km) is **solid** because of the enormous pressure.',
    'By mechanical behaviour:\n- the **lithosphere**: the rigid crust plus the uppermost mantle, about 100 km thick, broken into **tectonic plates**\n- the **asthenosphere**: below it, a weaker, partly molten, **plastic** zone of the upper mantle on which the plates move.',
    'Temperature and pressure increase with depth; the centre is estimated at over 5,000 °C.',
  ], 'geol-interior', 'Crust (SiAl, SiMa), mantle to 2,900 km, liquid outer core, solid inner core.',
  ['Which layer is liquid?', ['the outer core', 'the inner core', 'the continental crust', 'the lithosphere'], 'The inner core is solid under pressure.'],
  [['Crust', 'The thin outer rocky layer of the Earth.'], ['SiAl', 'Continental crust rich in silicon and aluminium.'], ['SiMa', 'Oceanic crust rich in silicon and magnesium.'], ['Asthenosphere', 'The weak, plastic layer of the upper mantle.']],
  [
    { q: 'Compare continental and oceanic crust.', steps: ['**Thickness: continental 30 to 70 km; oceanic 5 to 10 km.**', '**Composition: continental granitic (SiAl); oceanic basaltic (SiMa).**', '**Density: continental lighter (about 2.7); oceanic denser (about 3.0).**'] },
  ]),

  L('gl-seismic-4', 'gl-f4-interior', '2.2', 'Discontinuities and seismic evidence', 14, ['Earth science'], [
    'We cannot drill to the core; the deepest borehole reached about 12 km. Our knowledge comes mainly from **seismic waves** produced by earthquakes:\n- **P waves** (primary): compressional, fastest, travel through **solids and liquids**\n- **S waves** (secondary): shear, slower, travel only through **solids**.\nWaves change speed and direction (**refract**) where the rock properties change.',
    'Discontinuities (boundaries):\n- the **Mohorovičić discontinuity** (Moho), discovered in 1909: between **crust and mantle**, where seismic waves speed up\n- the **Gutenberg discontinuity**, at about **2,900 km**: between **mantle and core**; S waves stop here, showing that the **outer core is liquid**\n- the **Lehmann discontinuity**, at about 5,150 km: between the liquid outer core and the solid inner core.',
    'Because S waves cannot cross the liquid outer core, and P waves are bent by it, there is a **shadow zone** on the far side of the Earth from an earthquake where direct waves are not recorded. Other evidence: meteorites (some are iron-nickel, like the core), the Earth’s average density (about 5.5, far higher than surface rocks) and the magnetic field (generated by the moving liquid outer core).',
  ], 'geol-interior', 'S waves stop at the core: the outer core is liquid.',
  ['S waves do not pass through the outer core because it is:', ['liquid', 'solid', 'too hot to measure', 'made of granite'], 'Shear waves need a solid.'],
  [['P wave', 'A fast compressional seismic wave that travels through solids and liquids.'], ['S wave', 'A slower shear wave that travels only through solids.'], ['Discontinuity', 'A boundary inside the Earth where properties change.'], ['Shadow zone', 'An area where direct seismic waves are not recorded.']],
  [
    { q: 'The Earth’s average density is about 5.5 g/cm³, but crustal rocks are about 2.7. What does this suggest?', steps: ['**The interior must be much denser than the crust.**', '**A dense iron-nickel core (about 10 to 13 g/cm³) explains the high average density.**'] },
  ]),

  // ---------- Spheres ----------
  L('gl-spheres-4', 'gl-f4-spheres', '3.1', 'The atmosphere, hydrosphere and biosphere', 13, ['Earth science'], [
    'The Earth has four interacting spheres:\n- the **lithosphere**: the rigid outer rock layer\n- the **atmosphere**: the envelope of gases (about 78% nitrogen, 21% oxygen, small amounts of argon, carbon dioxide and water vapour), layered into troposphere, stratosphere and above\n- the **hydrosphere**: all water: oceans (about 97%), ice, rivers, lakes and groundwater\n- the **biosphere**: all living things and the zone where they live.',
    'Interactions: rain (hydrosphere) and oxygen and carbon dioxide (atmosphere) weather rocks; plants and animals (biosphere) break and alter rocks and form soil; rivers and the sea erode, transport and deposit sediment; volcanoes add gases to the atmosphere; and living things store carbon in limestone, coal and oil.',
    'These exchanges form great cycles, such as the **water cycle**, the **rock cycle** and the **carbon cycle**, that shape the Earth’s surface over time.',
  ], 'geol-spheres', 'Four spheres interact: rock, air, water and life.',
  ['Most of the Earth’s water is found in the:', ['oceans', 'rivers', 'clouds', 'lakes'], 'About 97%.'],
  [['Atmosphere', 'The layer of gases around the Earth.'], ['Hydrosphere', 'All the water on and near the Earth’s surface.'], ['Biosphere', 'All living things and the zone where they live.']],
  [
    { q: 'Give one example of each sphere acting on rocks.', steps: ['**Atmosphere: oxygen oxidises iron minerals, turning rocks red.**', '**Hydrosphere: rivers erode valleys and deposit sand.**', '**Biosphere: tree roots widen cracks; burrowing animals mix soil.**'] },
  ]),

  L('gl-weathering-4', 'gl-f4-spheres', '3.2', 'Mechanical and chemical weathering', 14, ['Earth science'], [
    '**Weathering** is the breakdown of rocks **in place** at or near the surface.\n**Mechanical (physical) weathering** breaks rocks without changing their minerals:\n- **exfoliation**: repeated heating and cooling makes outer layers peel off (common on granite inselbergs in the North)\n- **frost action**: water freezing in cracks expands (on very high mountains)\n- **salt crystal growth** in dry areas\n- **biological**: roots widening cracks, burrowing animals.',
    '**Chemical weathering** changes the minerals:\n- **solution** and **carbonation**: rainwater containing carbon dioxide dissolves limestone\n- **hydrolysis**: water reacts with feldspar to form clay\n- **oxidation**: iron minerals rust, giving red soils\n- **hydration**: minerals absorb water and swell.',
    'In the hot, humid south of Cameroon, **chemical weathering** is intense and produces deep, red **lateritic** soils; in the hot, dry north, **mechanical** weathering is more important. The products of weathering form soils and the sediments of sedimentary rocks.',
  ], 'geol-spheres', 'Mechanical breaks; chemical changes.',
  ['Feldspar changing into clay by reaction with water is:', ['hydrolysis (chemical weathering)', 'exfoliation', 'frost action', 'deposition'], 'A mineral change.'],
  [['Weathering', 'The breakdown of rocks in place at the surface.'], ['Exfoliation', 'The peeling of rock layers due to heating and cooling.'], ['Hydrolysis', 'Chemical reaction of minerals with water.'], ['Laterite', 'A red, iron- and aluminium-rich soil formed by intense weathering.']],
  [
    { q: 'Explain why soils in southern Cameroon are often deep and red.', steps: ['**High temperatures and heavy rainfall speed chemical weathering, so rocks decay to great depth.**', '**Iron minerals are oxidised, giving red iron oxides, and soluble minerals are washed out, leaving iron- and aluminium-rich laterite.**'] },
  ]),

  // ---------- Minerals ----------
  L('gl-mineraldef-4', 'gl-f4-minerals', '4.1', 'What is a mineral?', 12, ['Mineralogy'], [
    'A **mineral** is a **naturally occurring**, **inorganic**, **solid** substance with a **definite chemical composition** (or a limited range) and an orderly **crystalline** structure. Examples: quartz (SiO₂), calcite (CaCO₃), halite (NaCl), feldspar, mica, pyrite, hematite.',
    'A **rock** is a natural aggregate of one or more minerals (granite contains quartz, feldspar and mica). Minerals are the building blocks of rocks.',
    'The commonest rock-forming minerals are **silicates** (quartz, feldspars, micas, pyroxenes, amphiboles, olivine); others are carbonates (calcite), oxides (hematite, magnetite), sulphides (pyrite, galena) and halides (halite). An **ore mineral** is one from which a useful metal can be extracted profitably.',
  ], 'geol-mohs', 'Natural, inorganic, solid, definite composition, crystalline.',
  ['Which is NOT a mineral?', ['coal', 'quartz', 'calcite', 'halite'], 'Coal is organic and has no definite composition.'],
  [['Mineral', 'A naturally occurring inorganic solid with definite composition and crystal structure.'], ['Rock', 'A natural aggregate of minerals.'], ['Silicate', 'A mineral containing silicon and oxygen.']],
  [
    { q: 'Explain why ice in a glacier can be called a mineral but water cannot.', steps: ['**Ice is natural, inorganic, solid, has a definite composition (H₂O) and a crystalline structure.**', '**Liquid water is not solid and has no crystal structure, so it is not a mineral.**'] },
  ]),

  L('gl-properties-4', 'gl-f4-minerals', '4.2', 'Identifying minerals by their properties', 15, ['Mineralogy'], [
    'Physical properties used to identify minerals:\n- **colour**: useful but unreliable, because impurities change it (quartz can be clear, pink or smoky)\n- **streak**: the colour of the **powder**, obtained by rubbing on unglazed porcelain; reliable (hematite gives a red-brown streak; pyrite a greenish-black streak)\n- **lustre**: how the surface reflects light: **metallic** (pyrite, galena) or non-metallic: **vitreous** (glassy, quartz), pearly, silky, greasy, **earthy**\n- **hardness**: resistance to scratching, measured on the **Mohs scale**\n- **cleavage**: splitting along flat planes of weakness (mica in sheets, calcite in rhombs); **fracture**: irregular or **conchoidal** (curved) breaking, as in quartz\n- **specific gravity**: density relative to water (quartz 2.65; galena about 7.5).',
    'The **Mohs scale**: 1 talc, 2 gypsum, 3 calcite, 4 fluorite, 5 apatite, 6 orthoclase feldspar, 7 quartz, 8 topaz, 9 corundum, 10 diamond. Simple tools: fingernail about 2.5, copper coin about 3.5, steel knife or glass about 5.5, streak plate about 6.5.',
    'Other tests: calcite **fizzes** with dilute hydrochloric acid; magnetite is **magnetic**; halite tastes salty (never taste unknown minerals in the laboratory).',
  ], 'geol-mohs', 'Colour misleads; streak, hardness and cleavage identify.',
  ['A mineral scratches glass but is scratched by topaz. Its hardness is about:', ['7', '3', '10', '1'], 'Between 5.5 and 8: quartz.'],
  [['Streak', 'The colour of a mineral’s powder.'], ['Lustre', 'The way a mineral’s surface reflects light.'], ['Mohs scale', 'A scale of hardness from 1 (talc) to 10 (diamond).'], ['Specific gravity', 'Density compared with water.']],
  [
    { q: 'A shiny gold-coloured mineral gives a greenish-black streak and is harder than a knife. Is it gold or pyrite?', steps: ['**Gold gives a gold-yellow streak and is soft (about 2.5 to 3), easily scratched by a knife.**', '**A greenish-black streak and hardness above the knife (about 6 to 6.5) indicate pyrite ("fool’s gold").**'] },
  ]),

  // ---------- Crystallography ----------
  L('gl-crystalline-4', 'gl-f4-crystals', '5.1', 'Crystalline and amorphous matter', 12, ['Crystallography'], [
    'In a **crystalline** substance, atoms are arranged in an orderly, **repeating three-dimensional pattern** (the crystal lattice). When there is space to grow, crystals develop flat **faces** at definite angles (Steno’s law: the angles between corresponding faces of a mineral are constant).',
    '**Amorphous** substances have **no** regular internal arrangement: volcanic **glass** (obsidian), opal and amber. They have no cleavage and break with curved (conchoidal) surfaces.',
    'Crystal size depends on **cooling rate** and space: slow cooling of magma or slow evaporation gives large crystals; rapid cooling gives small crystals or glass.',
  ], 'geol-crystal-systems', 'Orderly atoms: crystalline. No order: amorphous (glass).',
  ['Obsidian is amorphous because:', ['lava cooled too quickly for crystals to form', 'it contains fossils', 'it is metamorphic', 'it is a sediment'], 'Natural glass.'],
  [['Crystal lattice', 'The repeating 3D arrangement of atoms in a crystal.'], ['Amorphous', 'Having no regular internal structure.'], ['Crystal face', 'A flat surface of a crystal.']],
  [
    { q: 'Explain why granite has large crystals and basalt small ones.', steps: ['**Granite cooled slowly deep underground, giving crystals time to grow large.**', '**Basalt lava cooled quickly at the surface, so only small crystals formed.**'] },
  ]),

  L('gl-symmetry-4', 'gl-f4-crystals', '5.2', 'Elements of symmetry and crystal systems', 15, ['Crystallography'], [
    'Elements of crystal symmetry:\n- a **plane of symmetry** divides a crystal into two halves that are mirror images\n- an **axis of symmetry** is a line about which the crystal can be rotated to show the same appearance 2, 3, 4 or 6 times in a full turn (two-fold, three-fold, four-fold or six-fold axes)\n- a **centre of symmetry** exists when every face has an identical parallel face on the opposite side.\nA **cube** has 9 planes, 13 axes (3 four-fold, 4 three-fold, 6 two-fold) and a centre of symmetry.',
    'Crystals are grouped into **seven crystal systems** by their axes:\n- **cubic (isometric)**: three equal axes at right angles (halite, galena, garnet, pyrite)\n- **tetragonal**: two equal axes and one different, all at right angles (zircon)\n- **hexagonal**: three equal horizontal axes at 120° and a vertical axis of different length (beryl, quartz is often grouped with trigonal)\n- the others: trigonal, orthorhombic, monoclinic and triclinic.',
    'Recognising symmetry helps identify minerals from their crystal shapes in hand specimens and models.',
  ], 'geol-crystal-systems', 'Planes mirror, axes rotate, the centre inverts.',
  ['A cube has how many planes of symmetry?', ['9', '3', '13', '6'], '3 parallel to faces and 6 diagonal.'],
  [['Plane of symmetry', 'A plane dividing a crystal into mirror-image halves.'], ['Axis of symmetry', 'A line about which a crystal repeats its appearance when rotated.'], ['Centre of symmetry', 'A point through which every face has an identical opposite face.'], ['Crystal system', 'A group of crystals defined by their axes.']],
  [
    { q: 'Describe the axes of symmetry of a cube.', steps: ['**3 four-fold axes, through the centres of opposite faces.**', '**4 three-fold axes, through opposite corners.**', '**6 two-fold axes, through the midpoints of opposite edges: 13 axes in all.**'] },
  ]),

  // ---------- Magma ----------
  L('gl-magma-4', 'gl-f4-magma', '6.1', 'Magma, lava and volcanoes', 14, ['Igneous petrology'], [
    '**Magma** is molten rock, with dissolved gases and crystals, formed below the surface where rocks partly melt (at plate boundaries and hot spots). When magma reaches the surface it is called **lava**. Rocks formed from magma are **igneous** rocks.',
    'Extrusive (volcanic) features:\n- **lava flows**; runny basaltic lava flows far, sticky acid lava builds steep domes\n- **volcanic cones**: **shield** volcanoes (gentle slopes of runny lava), **composite** or strato-volcanoes (alternating lava and ash layers, steep), and cinder cones\n- **craters**, **calderas** (large collapsed craters) and crater lakes; **pyroclastic** material (ash, bombs).',
    '**Mount Cameroon** (about 4,095 m), the highest point in West and Central Africa, is an active volcano that erupted in **1999** and **2000**, sending lava flows towards the coast. It belongs to the **Cameroon Volcanic Line**, which also includes Manengouba, the Bamboutos and Oku mountains and crater lakes such as Nyos and Barombi Mbo.',
  ], 'volcano-features', 'Magma underground; lava at the surface.',
  ['A volcano with gentle slopes built of runny basaltic lava is a:', ['shield volcano', 'composite volcano', 'batholith', 'dyke'], 'Lava spreads far.'],
  [['Magma', 'Molten rock below the surface.'], ['Lava', 'Molten rock that reaches the surface.'], ['Composite volcano', 'A volcano built of alternating lava and ash layers.'], ['Caldera', 'A large crater formed by collapse.']],
  [
    { q: 'Why do some volcanoes erupt explosively while others pour out lava quietly?', steps: ['**Runny, low-silica (basaltic) magma lets gas escape easily: quiet eruptions and long lava flows.**', '**Sticky, high-silica magma traps gas, which builds pressure and causes explosive eruptions with ash.**'] },
  ]),

  L('gl-intrusions-4', 'gl-f4-magma', '6.2', 'Intrusive igneous bodies', 14, ['Igneous petrology'], [
    'Magma that cools **below the surface** forms **intrusive** (plutonic) igneous rocks and bodies:\n- **batholith**: a huge mass, often granite, many kilometres across, formed deep in the crust; exposed when overlying rocks are eroded\n- **laccolith**: a lens-shaped body that pushes up the overlying layers into a dome; it is **concordant** at its base\n- **sill**: a thin sheet injected **parallel** to the rock layers (**concordant**)\n- **dyke**: a thin sheet that **cuts across** the rock layers (**discordant**), often nearly vertical\n- **volcanic neck (plug)**: magma solidified in the pipe of an old volcano.',
    '**Concordant** bodies follow the layering; **discordant** bodies cut across it.\nRocks next to an intrusion are baked by its heat, forming a **contact metamorphic aureole**; the intrusion’s edges cool faster and are finer-grained (**chilled margins**).',
    'Erosion may expose intrusions as landforms: dykes form wall-like ridges, necks form steep pinnacles (as in the Kapsiki area of the Mandara Mountains), and batholiths form domes and inselbergs.',
  ], 'volcano-features', 'Sill: parallel (concordant). Dyke: cuts across (discordant).',
  ['A sheet of igneous rock cutting vertically across horizontal sandstone beds is a:', ['dyke', 'sill', 'laccolith', 'lava flow'], 'Discordant.'],
  [['Batholith', 'A very large intrusive igneous mass.'], ['Sill', 'A concordant sheet intrusion parallel to the layers.'], ['Dyke', 'A discordant sheet intrusion cutting across the layers.'], ['Concordant', 'Following the existing layers.']],
  [
    { q: 'How could you tell a sill from a lava flow buried between sedimentary layers?', steps: ['**A sill bakes the rocks both above and below it, because it intruded between them while hot.**', '**A lava flow bakes only the rock beneath it; the layer above was deposited later on its cooled, often weathered and vesicular top.**'] },
  ]),

  // ---------- Igneous rocks ----------
  L('gl-textures-4', 'gl-f4-igneous', '7.1', 'Igneous textures', 13, ['Igneous petrology'], [
    'Texture describes the size, shape and arrangement of crystals and depends mainly on the **cooling rate**:\n- **phaneritic** (coarse-grained): crystals visible to the naked eye; slow cooling deep underground (granite, gabbro)\n- **aphanitic** (fine-grained): crystals too small to see without a lens; rapid cooling at or near the surface (basalt, rhyolite)\n- **porphyritic**: large crystals (**phenocrysts**) in a fine-grained groundmass; two stages of cooling (slow, then fast)\n- **glassy**: no crystals; very rapid cooling (obsidian)\n- **vesicular**: full of gas holes (pumice, scoria).',
    'Texture therefore tells the **history** of a rock: where and how fast it cooled.',
    'Use a hand lens: if you can easily see interlocking crystals, the rock is coarse-grained; if not, it is fine-grained.',
  ], 'geol-igneous-class', 'Coarse = slow and deep; fine = fast and shallow.',
  ['Large feldspar crystals in a fine grey groundmass show a:', ['porphyritic texture', 'glassy texture', 'phaneritic texture only', 'clastic texture'], 'Two stages of cooling.'],
  [['Phaneritic', 'Coarse-grained, with visible crystals.'], ['Aphanitic', 'Fine-grained, crystals too small to see.'], ['Phenocryst', 'A large crystal in a finer groundmass.'], ['Vesicular', 'Full of gas holes.']],
  [
    { q: 'Explain the history of a porphyritic rock.', steps: ['**Large crystals grew first while the magma cooled slowly underground.**', '**The magma then rose and cooled quickly, so the rest crystallised as a fine groundmass around them.**'] },
  ]),

  L('gl-igneousclass-4', 'gl-f4-igneous', '7.2', 'Classifying igneous rocks', 15, ['Igneous petrology'], [
    'Igneous rocks are classified by **texture** (grain size) and **chemical composition** (silica content):\n- **acid (felsic)**: more than about 65% silica; light-coloured; quartz, feldspar, mica: **granite** (coarse), **rhyolite** (fine)\n- **intermediate**: about 55 to 65% silica: **diorite** (coarse), **andesite** (fine)\n- **basic (mafic)**: about 45 to 55% silica; dark, heavy; plagioclase, pyroxene, olivine: **gabbro** (coarse), **basalt** (fine)\n- **ultrabasic**: less than 45% silica; mainly olivine and pyroxene: **peridotite**.',
    'Pairs with the same composition but different textures: granite and rhyolite; gabbro and basalt. In general, acid rocks are lighter in colour and density; basic rocks are darker and denser.',
    'In Cameroon, **granites** are widespread in the Precambrian basement (for example in the West, Adamawa and North regions), while **basalts** form much of the Cameroon Volcanic Line, such as the lava flows of Mount Cameroon.',
  ], 'geol-igneous-class', 'Granite and rhyolite are acid; gabbro and basalt are basic.',
  ['A dark, coarse-grained igneous rock with plagioclase and pyroxene is:', ['gabbro', 'granite', 'rhyolite', 'basalt'], 'Basic and coarse.'],
  [['Acid (felsic)', 'Igneous rock with more than about 65% silica.'], ['Basic (mafic)', 'Igneous rock with about 45 to 55% silica, rich in iron and magnesium.'], ['Granite', 'A coarse-grained acid igneous rock.'], ['Basalt', 'A fine-grained basic igneous rock.']],
  [
    { q: 'Complete the table for coarse and fine textures: acid, basic.', steps: ['**Acid: coarse = granite; fine = rhyolite.**', '**Basic: coarse = gabbro; fine = basalt.**'] },
  ]),
];
