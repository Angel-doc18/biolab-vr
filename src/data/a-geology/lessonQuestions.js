// Extra questions for the end of the A Level Geology lessons (0755), so that
// every lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { QUESTIONS_U6 } from './lessonQuestionsU6';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth, Term 1 ----------
  'agl-method-1': [
    Q('Paper 1 of A Level Geology is:', ['multiple choice on the whole syllabus', 'a practical', 'an oral', 'coursework only'], '1½ hours.'),
    Q('Dilute HCl should be applied to a specimen:', ['one drop at a time, wearing eye protection', 'by pouring a beaker', 'after heating it', 'without any protection'], 'Safety.'),
    Q('Every field sample should be labelled with:', ['its locality and date', 'its price', 'its colour only', 'nothing'], 'So it can be traced.'),
    Q('The Upper Sixth adds to the course:', ['dating, applied geology and the geology of Cameroon', 'only crystals', 'only safety', 'only fossils'], 'Applied and regional.'),
  ],
  'agl-method-2': [
    Q('A mineral is:', ['a natural inorganic solid with a definite composition and ordered structure', 'any rock', 'a fossil', 'a glass'], 'Rocks are aggregates of minerals.'),
    Q('Coarse grain size in the specimen scale means crystals over about:', ['5 mm', '0.1 mm', '1 m', '0.01 mm'], 'Fine is under 1 mm.'),
    Q('Rounded grains held by cement point to a:', ['sedimentary rock', 'igneous rock', 'metamorphic rock', 'mineral'], 'Clastic texture.'),
    Q('Filled gas holes in a lava are:', ['amygdales', 'phenocrysts', 'porphyroblasts', 'ooids'], 'Often calcite or zeolite.'),
  ],
  'agl-symmetry-1': [
    Q('The law of constancy of interfacial angles was stated by:', ['Steno, in 1669', 'Bowen, in 1928', 'Barrow, in 1893', 'Wegener, in 1915'], 'Angles between faces are constant.'),
    Q('How many three-fold axes does a cube have?', ['4', '3', '6', '9'], 'Through opposite corners.'),
    Q('How many planes of symmetry does a cube have?', ['9', '3', '13', '6'], '3 axial and 6 diagonal.'),
    Q('Two-fold axes of a cube pass through:', ['the midpoints of opposite edges', 'opposite corners', 'face centres', 'the centre only'], '6 of them.'),
  ],
  'agl-symmetry-2': [
    Q('The intercepts 1, 1, 1 give the face:', ['(111)', '(100)', '(110)', '(222)'], 'An octahedron face.'),
    Q('The six faces of a cube form the form:', ['{100}', '{111}', '{110}', '{123}'], 'Equivalent faces.'),
    Q('A face with intercepts 2, 3, ∞ has indices:', ['(320)', '(230)', '(023)', '(326)'], '1⁄2, 1⁄3, 0 times 6.'),
    Q('Miller indices were introduced by:', ['W. H. Miller, in 1839', 'Steno', 'Bowen', 'Darcy'], 'Treatise on Crystallography.'),
  ],
  'agl-systems-1': [
    Q('Quartz and calcite belong to the:', ['trigonal (hexagonal) system', 'cubic system', 'monoclinic system', 'triclinic system'], 'A three-fold vertical axis.'),
    Q('Zircon crystallises in the:', ['tetragonal system', 'cubic system', 'triclinic system', 'monoclinic system'], 'a = b ≠ c, all 90°.'),
    Q('The minimum symmetry of the cubic system is:', ['four three-fold axes', 'one four-fold axis', 'one two-fold axis', 'a centre only'], 'Body diagonals.'),
    Q('Plagioclase and kyanite are:', ['triclinic', 'cubic', 'tetragonal', 'orthorhombic'], 'Lowest symmetry.'),
  ],
  'agl-systems-2': [
    Q('A penetration twin of fluorite consists of:', ['two interpenetrating cubes', 'thin parallel lamellae', 'a swallowtail', 'a single crystal'], 'Penetration.'),
    Q('Staurolite commonly forms:', ['cross-shaped penetration twins', 'swallowtail twins', 'no twins', 'cubes'], 'Fairy crosses.'),
    Q('Twinning can form:', ['during growth, transformation or deformation', 'only during weathering', 'only in fossils', 'only in glass'], 'Several causes.'),
    Q('A Carlsbad twin points to:', ['orthoclase', 'quartz', 'calcite', 'olivine'], 'A K-feldspar test.'),
  ],
  'agl-silicates-1': [
    Q('Single-chain silicates have the Si:O ratio:', ['1:3', '1:4', '1:2', '2:5'], 'SiO3.'),
    Q('Sheet silicates have the unit:', ['Si2O5', 'SiO4', 'SiO2', 'Si2O7'], 'Three oxygens shared.'),
    Q('Epidote, with paired tetrahedra, is a:', ['sorosilicate', 'nesosilicate', 'phyllosilicate', 'tectosilicate'], 'Si2O7.'),
    Q('In feldspars, the charge from replacing Si4+ by Al3+ is balanced by:', ['K+, Na+ or Ca2+', 'O2−', 'Fe3+ only', 'nothing'], 'Alkali and alkaline-earth ions.'),
  ],
  'agl-silicates-2': [
    Q('Olivine has:', ['no good cleavage', 'one perfect cleavage', 'two cleavages at 90°', 'three cleavages'], 'Isolated tetrahedra.'),
    Q('Mica splits into thin flakes because:', ['its sheets are held by weak bonds', 'it is very hard', 'it is a framework', 'it is a chain'], 'One perfect cleavage.'),
    Q('Quartz shows:', ['conchoidal fracture and no cleavage', 'perfect cleavage', 'two cleavages', 'cubic cleavage'], 'Strong framework.'),
    Q('Talc is soft because:', ['its sheets slide over each other', 'it is a framework', 'it is a chain silicate', 'it contains iron'], 'Hardness 1.'),
  ],
  'agl-mineralogy-1': [
    Q('Haematite gives a streak that is:', ['red-brown', 'black', 'white', 'yellow'], 'Diagnostic.'),
    Q('Galena has a specific gravity of about:', ['7.5', '2.65', '4.5', '1.0'], 'Very heavy.'),
    Q('A mineral that scratches glass but not quartz has hardness about:', ['6', '4', '8', '2'], 'Between 5.5 and 7.'),
    Q('Colour alone is unreliable because:', ['impurities can change it', 'all minerals are white', 'it never varies', 'it shows hardness'], 'Quartz comes in many colours.'),
  ],
  'agl-mineralogy-2': [
    Q('Forsterite and fayalite are the end members of the:', ['olivine series', 'plagioclase series', 'pyroxene series', 'mica series'], 'Mg2SiO4 to Fe2SiO4.'),
    Q('Albite is the sodium end member of:', ['plagioclase', 'olivine', 'garnet', 'amphibole'], 'NaAlSi3O8.'),
    Q('Calcite and aragonite are:', ['polymorphs of CaCO3', 'a solid solution', 'pseudomorphs', 'silicates'], 'Different structures.'),
    Q('Limonite in the cubic shape of pyrite is a:', ['pseudomorph', 'polymorph', 'twin', 'solid solution'], 'Replacement keeping shape.'),
  ],
  'agl-tectonics-1': [
    Q('The asthenosphere is:', ['a weak, partly molten layer below the lithosphere', 'the crust', 'the inner core', 'the atmosphere'], 'Plates move over it.'),
    Q('Melting beneath a ridge is mainly due to:', ['decompression of rising mantle', 'added water', 'friction', 'radioactivity in the crust'], 'Lower pressure lowers the melting point.'),
    Q('At subduction zones, melting is triggered by:', ['water released from the sinking slab', 'decompression', 'meteorites', 'ice'], 'Flux melting.'),
    Q('Transform margins usually have:', ['earthquakes but little volcanism', 'many volcanoes', 'deep trenches', 'new ocean floor'], 'Plates slide past.'),
  ],
  'agl-tectonics-2': [
    Q('The Curie temperature of magnetite is about:', ['580 °C', '100 °C', '1,200 °C', '0 °C'], 'Below it, magnetism is locked in.'),
    Q('A stripe boundary dated 4 million years lies 80 km from the ridge. The half rate is:', ['2 cm per year', '20 cm per year', '0.2 cm per year', '8 cm per year'], '80 km ÷ 4 Ma.'),
    Q('Benioff zones reach depths of about:', ['700 km', '7 km', '70 m', '7,000 km'], 'Deepest earthquakes.'),
    Q('The East Pacific Rise spreads:', ['faster than the Mid-Atlantic Ridge', 'slower than it', 'not at all', 'backwards'], 'Over 15 cm a year in places.'),
  ],
  'agl-bowen-1': [
    Q('Bowen published The Evolution of the Igneous Rocks in:', ['1928', '1669', '1856', '1963'], 'N. L. Bowen.'),
    Q('Biotite crystallises after:', ['amphibole', 'quartz', 'muscovite', 'K-feldspar'], 'Discontinuous series.'),
    Q('Basalt typically contains:', ['olivine, pyroxene and Ca-plagioclase', 'quartz and muscovite', 'K-feldspar and quartz', 'only biotite'], 'High-temperature minerals.'),
    Q('Goldich’s series shows that the first minerals to crystallise are:', ['the first to weather', 'the last to weather', 'never weathered', 'unaffected by climate'], 'Least stable at the surface.'),
  ],
  'agl-bowen-2': [
    Q('Pure diopside melts at about:', ['1,391 °C', '1,553 °C', '1,274 °C', '800 °C'], 'One end of the system.'),
    Q('The diopside-anorthite eutectic lies at about:', ['1,274 °C and 42% anorthite', '1,553 °C and 100% anorthite', '1,000 °C and 50%', '1,391 °C and 0%'], 'Bowen, 1915.'),
    Q('Early plagioclase crystals in a cooling melt are richer in:', ['anorthite than the melt', 'albite than the melt', 'quartz', 'iron'], 'The solid-solution loop.'),
    Q('Zoned plagioclase forms when:', ['early crystals do not fully react with the cooling melt', 'cooling is infinitely slow', 'there is no melt', 'the rock is metamorphosed'], 'Calcic cores, sodic rims.'),
  ],
  'agl-igneous-1': [
    Q('Under the IUGS scheme, intermediate rocks contain:', ['52 to 63% silica', '45 to 52%', 'over 63%', 'under 45%'], 'Diorite and andesite.'),
    Q('Dolerite is:', ['a medium-grained basic rock of dykes and sills', 'a coarse acid rock', 'a volcanic glass', 'a sandstone'], 'Hypabyssal.'),
    Q('An ophitic texture has:', ['pyroxene crystals enclosing plagioclase laths', 'gas holes', 'glass only', 'aligned micas'], 'Typical of dolerite.'),
    Q('Silica-rich igneous rocks tend to be:', ['pale and less dense', 'dark and dense', 'always glassy', 'olivine-rich'], 'Felsic.'),
  ],
  'agl-igneous-2': [
    Q('A rock cannot contain both:', ['quartz and feldspathoids', 'quartz and feldspar', 'biotite and quartz', 'plagioclase and pyroxene'], 'They react to form feldspar.'),
    Q('Before plotting on QAPF, the minerals Q, A and P are:', ['recalculated to total 100', 'multiplied by 2', 'left as they are with the dark minerals', 'ignored'], 'Normalise.'),
    Q('The CIPW norm is useful for:', ['fine-grained rocks whose minerals cannot be seen', 'fossils', 'maps', 'ores only'], 'Calculated from chemistry.'),
    Q('Granodiorite has more ___ than granite:', ['plagioclase relative to alkali feldspar', 'alkali feldspar', 'feldspathoid', 'olivine'], 'A plagioclase-rich field.'),
  ],
  'agl-differentiation-1': [
    Q('Partial melting of mantle peridotite yields:', ['basaltic magma', 'granite magma', 'carbonate melt only', 'no melt'], 'Low-melting fraction.'),
    Q('The basalt to rhyolite suite of one volcano can come from:', ['fractional crystallisation of a basaltic parent', 'weathering', 'sedimentation', 'metamorphism'], 'Differentiation.'),
    Q('Enclaves of dark rock in a granite may show:', ['magma mixing', 'sedimentation', 'faulting', 'folding'], 'Two magmas mingled.'),
    Q('A cumulate rock forms by:', ['crystals accumulating, often by settling', 'rapid quenching', 'evaporation', 'cementation'], 'Layered intrusions.'),
  ],
  'agl-differentiation-2': [
    Q('Viscosity of magma increases with:', ['higher silica and lower temperature', 'lower silica', 'higher temperature', 'more water only'], 'Rhyolite is sticky.'),
    Q('A lahar is:', ['a volcanic mudflow', 'a lava lake', 'an ash cloud', 'a gas release'], 'Debris and water.'),
    Q('Mount Cameroon’s 1999 lava flows moved:', ['down the southern flank towards the coast', 'into Lake Nyos', 'to the Far North', 'nowhere'], 'Hazard to settlements.'),
    Q('A volcanic hazard zoning map is used to:', ['plan land use and evacuation', 'find gold', 'date rocks', 'measure dip'], 'Risk management.'),
  ],

  // ---------- Lower Sixth, Term 2 ----------
  'agl-sediments-1': [
    Q('Filip Hjulström published his curve in:', ['1935', '1856', '1669', '1915'], 'Erosion, transport, deposition.'),
    Q('Grains bouncing along a river bed move by:', ['saltation', 'suspension', 'solution', 'traction only'], 'Short jumps.'),
    Q('A sieved sample is plotted as:', ['a cumulative grain-size curve', 'a pie chart of colours', 'a map', 'a stress-strain curve'], 'Measures sorting.'),
    Q('Rounding of grains increases with:', ['distance and time of transport', 'rapid burial', 'cementation', 'heat'], 'Abrasion.'),
  ],
  'agl-sediments-2': [
    Q('Compaction affects mainly:', ['muds', 'well-cemented sandstone', 'granite', 'glass'], 'Water squeezed out.'),
    Q('Glauconite growing in a marine sediment is:', ['an authigenic mineral', 'a detrital grain', 'a fossil', 'a cement only'], 'Formed in place.'),
    Q('Stylolites in limestone form by:', ['pressure solution', 'cementation', 'weathering', 'faulting'], 'Grains dissolve at contacts.'),
    Q('Diagenesis generally lowers:', ['porosity and permeability', 'grain hardness', 'grain size', 'fossil content'], 'Reservoir quality falls.'),
  ],
  'agl-environments-1': [
    Q('Silt grains measure:', ['1⁄256 to 1⁄16 mm', '1⁄16 to 2 mm', '2 to 4 mm', 'under 1⁄256 mm'], 'Wentworth.'),
    Q('A 1 mm grain has a phi value of:', ['0', '1', '−1', '2'], '−log2 1 = 0.'),
    Q('Arkose is a sandstone with:', ['over 25% feldspar', 'over 90% quartz', 'a muddy matrix', 'shells'], 'Immature.'),
    Q('A quartz arenite is:', ['a mature sandstone of over 90% quartz', 'a feldspar-rich sandstone', 'a limestone', 'a shale'], 'Long transport.'),
  ],
  'agl-environments-2': [
    Q('Symmetrical ripple marks are formed by:', ['waves', 'one-way currents', 'wind only', 'ice'], 'Oscillating water.'),
    Q('A coarsening-upward sequence capped by coal suggests:', ['a prograding delta', 'a deep ocean', 'a desert', 'a glacier'], 'Delta plain swamps.'),
    Q('Turbidites are deposited in:', ['deep marine settings', 'deserts', 'rivers only', 'lakes only'], 'Graded beds.'),
    Q('Way-up criteria help geologists:', ['tell the original top of beds in folded rocks', 'date rocks absolutely', 'find ore', 'measure porosity'], 'Graded beds, cross-beds.'),
  ],
  'agl-stratigraphy-1': [
    Q('Original horizontality means tilted beds:', ['were disturbed after deposition', 'were laid down tilted', 'are igneous', 'are oldest'], 'Steno.'),
    Q('A dyke cutting a sill is:', ['younger than the sill', 'older than the sill', 'the same age', 'undatable'], 'Cross-cutting.'),
    Q('William Smith used fossils to:', ['correlate beds across England', 'date rocks in years', 'find gold', 'explain folds'], 'Faunal succession.'),
    Q('Lateral continuity means a bed:', ['extends sideways until it thins or meets a barrier', 'is always vertical', 'is always thin', 'stops at a fossil'], 'Steno.'),
  ],
  'agl-stratigraphy-2': [
    Q('James Hutton described the unconformity at:', ['Siccar Point, Scotland', 'Lake Nyos', 'Mount Cameroon', 'the Grand Canyon only'], '1788.'),
    Q('Biostratigraphy correlates beds by:', ['their fossils', 'their colour', 'their thickness', 'their grain size'], 'Index fossils.'),
    Q('A volcanic ash layer is a good marker bed because:', ['it was laid down over a wide area in a geological instant', 'it is always thick', 'it has fossils', 'it never weathers'], 'Chronostratigraphy.'),
    Q('Overstep on a map shows:', ['an unconformity', 'a fault', 'a fold', 'a dyke'], 'Younger beds cross older outcrops.'),
  ],
  'agl-metamorphism-1': [
    Q('Lithostatic pressure increases by about:', ['0.03 GPa per km', '3 GPa per km', '0.3 GPa per metre', 'nothing'], 'About 0.3 kbar per km.'),
    Q('Metasomatism is metamorphism with:', ['a change in bulk composition through fluids', 'no fluids', 'only heat', 'melting'], 'Ions added or removed.'),
    Q('Directed stress mainly changes a rock’s:', ['texture, by aligning minerals', 'age', 'colour only', 'fossils'], 'Foliation.'),
    Q('Metamorphism begins at temperatures above about:', ['200 °C, beyond diagenesis', '0 °C', '1,200 °C', '25 °C'], 'Low grade.'),
  ],
  'agl-metamorphism-2': [
    Q('The width of a contact aureole increases with:', ['the size and temperature of the intrusion', 'the age of the country rock', 'rainfall', 'fossil content'], 'More heat.'),
    Q('Regional metamorphism occurs in:', ['mountain belts at convergent margins', 'small dykes', 'deserts', 'river beds'], 'Dynamothermal.'),
    Q('Fault breccia forms by:', ['brittle crushing near the surface', 'ductile shearing at depth', 'contact heating', 'evaporation'], 'Dynamic metamorphism.'),
    Q('Hydrothermal metamorphism is common at:', ['mid-ocean ridges', 'cratons', 'deserts', 'glaciers'], 'Seawater circulates through hot basalt.'),
  ],
  'agl-facies-1': [
    Q('Barrow’s zones were mapped in rocks that were originally:', ['mudrocks (pelites)', 'limestones', 'granites', 'basalts'], 'Pelitic.'),
    Q('After garnet, the next Barrovian zone is:', ['staurolite', 'biotite', 'chlorite', 'sillimanite'], 'Increasing grade.'),
    Q('Andalusite forms at:', ['low pressure', 'very high pressure', 'surface conditions only', 'the same as kyanite'], 'Al2SiO5 polymorph.'),
    Q('The Al2SiO5 triple point is at about:', ['500 °C and 0.4 GPa', '100 °C and 1 GPa', '1,000 °C and 0.1 GPa', '25 °C and 0 GPa'], 'All three stable together.'),
  ],
  'agl-facies-2': [
    Q('Greenschist facies basalt contains:', ['chlorite, epidote and actinolite', 'garnet and omphacite', 'glaucophane', 'orthopyroxene'], 'Green minerals.'),
    Q('Granulite facies forms at:', ['very high temperature', 'low temperature and high pressure', 'surface conditions', 'low grade'], 'Dry, hot deep crust.'),
    Q('Facies are named after assemblages in metamorphosed:', ['basalt', 'limestone', 'sandstone', 'coal'], 'Eskola’s convention.'),
    Q('A subduction zone P-T path produces:', ['blueschist then eclogite', 'hornfels', 'zeolite only', 'granulite only'], 'High pressure, low temperature.'),
  ],
  'agl-metarocks-1': [
    Q('Phyllite has:', ['a silky sheen from fine micas', 'coarse bands', 'no foliation', 'glass'], 'Between slate and schist.'),
    Q('A lineation is:', ['a linear fabric of elongate minerals', 'a fold hinge only', 'bedding', 'a fault'], 'Direction of stretching.'),
    Q('Inclusion trails in porphyroblasts can record:', ['the deformation history', 'the age in years', 'the protolith only', 'nothing'], 'Rotation during growth.'),
    Q('Slaty cleavage often lies at an angle to:', ['bedding', 'the surface', 'all joints', 'faults only'], 'Formed by later stress.'),
  ],
  'agl-metarocks-2': [
    Q('Quartzite differs from sandstone because it:', ['breaks across the grains', 'breaks around the grains', 'fizzes in acid', 'is soft'], 'Recrystallised quartz.'),
    Q('Basalt at very high pressure becomes:', ['eclogite', 'marble', 'slate', 'quartzite'], 'Garnet and omphacite.'),
    Q('Granite gneiss forms from:', ['metamorphosed granite', 'shale', 'limestone', 'coal'], 'Banded.'),
    Q('The parent of hornfels is often:', ['mudrock in a contact aureole', 'limestone in a mountain belt', 'sand on a beach', 'lava'], 'Baked.'),
  ],
  'agl-folds-1': [
    Q('Strike is given as:', ['a compass bearing', 'an angle of slope', 'a depth', 'an age'], 'Horizontal direction.'),
    Q('Apparent dip is always:', ['less than or equal to true dip', 'greater than true dip', 'zero', 'vertical'], 'tan formula.'),
    Q('Fast strain rates favour:', ['brittle failure', 'ductile flow', 'no deformation', 'melting'], 'Rocks snap.'),
    Q('A bed dipping 40° E seen in a NE–SW section shows an apparent dip of about:', ['31°', '40°', '45°', '20°'], 'tan 40 × sin 45.'),
  ],
  'agl-folds-2': [
    Q('A syncline has:', ['the youngest beds in its core', 'the oldest beds in its core', 'no core', 'igneous rock in its core'], 'A downfold.'),
    Q('An overturned fold has:', ['both limbs dipping the same way, one inverted', 'a vertical axial plane', 'parallel limbs only', 'no hinge'], 'Inverted limb.'),
    Q('An open fold has an interlimb angle of:', ['120° to 70°', '70° to 30°', 'under 30°', '180° to 120°'], 'Fleuty’s scale.'),
    Q('A monocline is:', ['a single step-like bend in otherwise flat beds', 'a tight fold', 'a fault', 'a dome'], 'One limb steep.'),
  ],
  'agl-faults-1': [
    Q('Columnar joints form in:', ['cooling basalt lava', 'limestone', 'shale', 'coal'], 'Contraction.'),
    Q('Heave is:', ['the horizontal displacement on a fault', 'the vertical displacement', 'the fault’s length', 'its age'], 'Throw is vertical.'),
    Q('Horsts are:', ['raised blocks between normal faults', 'sunken blocks', 'folds', 'volcanoes'], 'Block mountains.'),
    Q('Slickensides are:', ['polished, grooved surfaces on a fault plane', 'fossils', 'ripple marks', 'vesicles'], 'They show slip direction.'),
  ],
  'agl-faults-2': [
    Q('For a planar surface, structure contours are:', ['straight, parallel and evenly spaced', 'curved', 'circles', 'random'], 'Constant strike and dip.'),
    Q('Structure contours run parallel to the:', ['strike', 'dip direction', 'fault throw', 'section line'], 'Horizontal lines on the plane.'),
    Q('A bed crops out where:', ['its structure contour height equals the ground height', 'contours cross faults', 'beds are vertical only', 'it is covered'], 'The surface intersects the ground.'),
    Q('Structure contours 100 m apart vertically and 400 m apart on the map give a dip of about:', ['14°', '76°', '45°', '4°'], 'tan(dip) = 0.25.'),
  ],

  // ---------- Lower Sixth, Term 3 ----------
  'agl-fossils-1': [
    Q('The term taphonomy was coined by:', ['Ivan Efremov, in 1940', 'Darwin', 'Steno', 'Wegener'], 'Laws of burial.'),
    Q('A mammoth in permafrost is an example of:', ['unaltered remains', 'carbonisation', 'a trace fossil', 'replacement'], 'Frozen.'),
    Q('A dinosaur footprint is a:', ['trace fossil', 'body fossil', 'cast of bone', 'carbonised film'], 'Activity.'),
    Q('Pyritised fossils indicate a sea floor that was:', ['poorly oxygenated', 'well oxygenated', 'dry land', 'frozen'], 'Sulphate-reducing bacteria.'),
  ],
  'agl-fossils-2': [
    Q('Graptolites are index fossils for the:', ['Ordovician and Silurian', 'Jurassic', 'Quaternary', 'Precambrian'], 'Rapid evolution.'),
    Q('A biozone is defined by:', ['its fossil content', 'its colour', 'its thickness', 'its grain size'], 'Biostratigraphy.'),
    Q('Thick-shelled bivalves suggest:', ['a high-energy shore', 'deep still water', 'a desert', 'a cave'], 'Strong waves.'),
    Q('A derived fossil can mislead because it is:', ['older than the rock it is found in', 'younger than the rock', 'always broken', 'a trace fossil'], 'Reworked.'),
  ],
  'agl-maps-1': [
    Q('Horizontal beds on a map follow:', ['the topographic contours', 'straight lines', 'the rivers only', 'the faults'], 'Constant height.'),
    Q('Beds dipping downstream less steeply than the valley floor form Vs pointing:', ['upstream', 'downstream', 'sideways', 'nowhere'], 'The exception to the rule.'),
    Q('The three-point problem first finds:', ['a strike line from the middle height', 'the age of the bed', 'its thickness', 'its fossils'], 'Structure contour.'),
    Q('Older beds in the core of an eroded fold show:', ['an anticline', 'a syncline', 'a fault', 'a dyke'], 'Oldest in the core.'),
  ],
  'agl-maps-2': [
    Q('The first step in a cross-section is to:', ['draw the topographic profile', 'colour the beds', 'draw the fossils', 'write the history'], 'Ground surface first.'),
    Q('With VE = 3, a true dip of 20° is drawn at about:', ['47°', '20°', '60°', '7°'], 'tan(drawn) = 3 tan 20°.'),
    Q('A section needs:', ['a title, scales, orientation and a key', 'colours only', 'a photograph', 'nothing'], 'Complete.'),
    Q('Field notes for a locality include:', ['location, description, dip and strike, sketches and samples', 'only photos', 'only the date', 'only the rock name'], 'Evidence.'),
  ],
  'agl-clinics-1': [
    Q('A face with intercepts 1, 2, 2 has Miller indices:', ['(211)', '(122)', '(111)', '(100)'], 'Reciprocals 1, 1⁄2, 1⁄2.'),
    Q('A mineral with cleavages at 87° and 93° in a gabbro is:', ['augite', 'hornblende', 'biotite', 'quartz'], 'Pyroxene.'),
    Q('Watch for which words in multiple-choice stems?', ['"not" and "except"', '"the"', '"rock"', '"mineral"'], 'Reversed questions.'),
    Q('After a drill, each error should be:', ['classified and fixed at its cause', 'ignored', 'only counted', 'copied'], 'Targeted practice.'),
  ],
  'agl-clinics-2': [
    Q('A geological history is written:', ['oldest to youngest, with evidence for each event', 'youngest first', 'in any order', 'without evidence'], 'Order and proof.'),
    Q('Evidence that an intrusion is younger than its host includes:', ['a baked margin in the host and cross-cutting', 'fossils in the intrusion', 'bedding', 'ripple marks'], 'Contact effects.'),
    Q('The promotion examination covers:', ['the whole Lower Sixth', 'Term 3 only', 'the Upper Sixth', 'only maps'], 'Full year.'),
    Q('In a long question with a phase diagram, a candidate should:', ['trace the cooling path step by step with temperatures', 'only name the minerals', 'skip it', 'draw a map'], 'Show reasoning.'),
  ],
  ...QUESTIONS_U6,
};
