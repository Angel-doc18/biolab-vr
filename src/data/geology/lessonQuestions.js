// Extra end-of-lesson questions for the Geology lessons, by lesson id. The
// correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Form 4, term 1 ----------
  'gl-universe-4': [
    Q('The age of the universe is estimated at about:', ['13.8 billion years', '4.6 billion years', '541 million years', '6,000 years'], 'From the Big Bang.'),
    Q('The red shift of distant galaxies shows that the universe is:', ['expanding', 'shrinking', 'not moving', 'flat'], 'Galaxies move apart.'),
    Q('Most of the mass of the solar nebula formed the:', ['Sun', 'Earth', 'Moon', 'asteroid belt'], 'It collapsed at the centre.'),
    Q('The inner planets are mainly:', ['rocky', 'gaseous', 'icy', 'liquid'], 'Mercury, Venus, Earth, Mars.'),
  ],
  'gl-earthshape-4': [
    Q('The Earth bulges at the equator because of its:', ['rotation', 'Moon', 'oceans', 'mountains'], 'Spinning flattens the poles.'),
    Q('The mean radius of the Earth is about:', ['6,371 km', '3,000 km', '12,742 km', '40,075 km'], '12,742 km is the diameter.'),
    Q('A ship disappears over the horizon hull first because the Earth is:', ['curved', 'flat', 'rotating fast', 'tilted'], 'Evidence of a round Earth.'),
    Q('The equatorial circumference of the Earth is about:', ['40,075 km', '6,378 km', '510 million km', '1,000 km'], 'Once round the equator.'),
  ],
  'gl-layers-4': [
    Q('Continental crust is rich in:', ['silicon and aluminium (SiAl)', 'nickel and iron', 'silicon and magnesium only', 'carbon'], 'Granitic.'),
    Q('The mantle extends to a depth of about:', ['2,900 km', '35 km', '6,371 km', '100 km'], 'Down to the core.'),
    Q('The core is made mainly of:', ['iron and nickel', 'granite', 'basalt', 'quartz'], 'NiFe.'),
    Q('The tectonic plates move on the:', ['asthenosphere', 'inner core', 'outer core', 'crust only'], 'A weak, plastic layer.'),
  ],
  'gl-seismic-4': [
    Q('The fastest seismic waves are:', ['P waves', 'S waves', 'surface waves', 'sound waves in air'], 'Primary waves arrive first.'),
    Q('The Moho separates the:', ['crust and mantle', 'mantle and core', 'outer and inner core', 'atmosphere and crust'], 'Discovered in 1909.'),
    Q('The Lehmann discontinuity separates the:', ['outer and inner core', 'crust and mantle', 'mantle and outer core', 'lithosphere and asthenosphere'], 'About 5,150 km.'),
    Q('Iron meteorites support the idea that the core is made of:', ['iron and nickel', 'granite', 'water', 'limestone'], 'Similar composition.'),
  ],
  'gl-spheres-4': [
    Q('The commonest gas in the atmosphere is:', ['nitrogen', 'oxygen', 'carbon dioxide', 'argon'], 'About 78%.'),
    Q('The biosphere includes:', ['all living things', 'only plants', 'only the oceans', 'only rocks'], 'Life and its zone.'),
    Q('Limestone and coal are ways in which the biosphere stores:', ['carbon', 'nitrogen only', 'salt', 'iron'], 'Part of the carbon cycle.'),
    Q('Volcanoes add gases to the:', ['atmosphere', 'inner core', 'biosphere only', 'mantle'], 'Water vapour, CO₂, SO₂.'),
  ],
  'gl-weathering-4': [
    Q('Exfoliation is caused by:', ['repeated heating and cooling of rock surfaces', 'acid rain only', 'tree roots', 'glaciers'], 'Outer layers peel off.'),
    Q('Limestone is dissolved by rainwater containing:', ['carbon dioxide', 'nitrogen', 'oxygen only', 'salt'], 'Carbonation.'),
    Q('Rusting of iron minerals in rock is:', ['oxidation', 'hydrolysis', 'frost action', 'exfoliation'], 'Gives red colours.'),
    Q('Chemical weathering is fastest in:', ['hot, wet climates', 'cold, dry climates', 'deserts at night', 'polar ice caps'], 'Southern Cameroon.'),
  ],
  'gl-mineraldef-4': [
    Q('The chemical formula of quartz is:', ['SiO₂', 'CaCO₃', 'NaCl', 'FeS₂'], 'Silicon dioxide.'),
    Q('Halite is the mineral name for:', ['rock salt (NaCl)', 'quartz', 'calcite', 'pyrite'], 'Common salt.'),
    Q('Granite is a rock because it is:', ['an aggregate of several minerals', 'a single mineral', 'organic', 'liquid'], 'Quartz, feldspar and mica.'),
    Q('The commonest group of rock-forming minerals is the:', ['silicates', 'sulphides', 'halides', 'native elements'], 'Silicon and oxygen.'),
  ],
  'gl-properties-4': [
    Q('The most reliable colour test for a mineral is its:', ['streak', 'surface colour', 'size', 'shape'], 'Powder colour.'),
    Q('Hematite gives a streak that is:', ['red-brown', 'white', 'yellow', 'green'], 'Iron oxide.'),
    Q('Quartz breaks with a curved, shell-like surface called:', ['conchoidal fracture', 'cleavage', 'streak', 'lustre'], 'No cleavage.'),
    Q('A mineral that fizzes with dilute hydrochloric acid is:', ['calcite', 'quartz', 'mica', 'feldspar'], 'Carbonate reaction.'),
  ],
  'gl-crystalline-4': [
    Q('Steno’s law states that the angles between corresponding faces of a mineral are:', ['constant', 'always 90°', 'random', 'zero'], 'Whatever the crystal size.'),
    Q('Opal is:', ['amorphous', 'cubic', 'hexagonal', 'tetragonal'], 'No regular structure.'),
    Q('Large crystals form when cooling is:', ['slow', 'fast', 'instant', 'absent'], 'Time to grow.'),
    Q('Crystal faces develop best when crystals grow:', ['freely in open space', 'crowded together', 'in glass', 'under ice'], 'Room to grow.'),
  ],
  'gl-symmetry-4': [
    Q('A cube has how many axes of symmetry in total?', ['13', '9', '3', '6'], '3 + 4 + 6.'),
    Q('A plane of symmetry divides a crystal into:', ['two mirror-image halves', 'three parts', 'a cube and a prism', 'unequal halves'], 'Mirror plane.'),
    Q('Halite and galena belong to the:', ['cubic system', 'hexagonal system', 'triclinic system', 'monoclinic system'], 'Three equal axes at 90°.'),
    Q('There are how many crystal systems?', ['seven', 'four', 'ten', 'three'], 'Cubic to triclinic.'),
  ],
  'gl-magma-4': [
    Q('Mount Cameroon is about how high?', ['4,095 m', '2,000 m', '8,848 m', '1,000 m'], 'Highest in West and Central Africa.'),
    Q('A composite volcano is built of:', ['alternating lava and ash layers', 'only runny lava', 'granite', 'limestone'], 'Strato-volcano.'),
    Q('Explosive eruptions are linked with magma that is:', ['sticky and rich in silica', 'runny and low in silica', 'cold', 'gas-free'], 'Gas is trapped.'),
    Q('Volcanic bombs and ash are:', ['pyroclastic material', 'intrusions', 'evaporites', 'fossils'], 'Fragments thrown out.'),
  ],
  'gl-intrusions-4': [
    Q('A laccolith:', ['domes up the overlying layers', 'cuts vertically across beds', 'flows on the surface', 'is a fault'], 'Lens-shaped.'),
    Q('Chilled margins of an intrusion are:', ['finer-grained because they cooled faster', 'coarser-grained', 'full of fossils', 'sedimentary'], 'Contact with cold rock.'),
    Q('The pinnacles of the Kapsiki area are:', ['volcanic necks', 'sills', 'sand dunes', 'coral reefs'], 'Solidified volcanic pipes.'),
    Q('A sill is described as:', ['concordant', 'discordant', 'extrusive', 'metamorphic'], 'Parallel to the layers.'),
  ],
  'gl-textures-4': [
    Q('A glassy texture forms by:', ['very rapid cooling', 'very slow cooling', 'deposition', 'metamorphism'], 'Obsidian.'),
    Q('Pumice floats because it is:', ['full of gas holes', 'made of wood', 'very dense', 'crystalline'], 'Vesicular.'),
    Q('Phaneritic means:', ['coarse-grained', 'fine-grained', 'glassy', 'banded'], 'Crystals visible.'),
    Q('Fine-grained igneous rocks usually formed:', ['at or near the surface', 'deep in the crust', 'in the core', 'from sediments'], 'Fast cooling.'),
  ],
  'gl-igneousclass-4': [
    Q('Ultrabasic rocks contain:', ['less than about 45% silica', 'more than 65% silica', 'only quartz', 'no iron'], 'Peridotite.'),
    Q('Diorite is a coarse-grained rock of:', ['intermediate composition', 'acid composition', 'ultrabasic composition', 'sedimentary origin'], 'Andesite is its fine equivalent.'),
    Q('Basic igneous rocks are usually:', ['dark and dense', 'light and less dense', 'pink', 'white'], 'Rich in iron and magnesium.'),
    Q('Much of the Cameroon Volcanic Line is made of:', ['basalt', 'granite', 'marble', 'sandstone'], 'Lava flows.'),
  ],

  // ---------- Form 4, terms 2 and 3 ----------
  'gl-sedcycle-4': [
    Q('When a river slows down, the first particles to be deposited are the:', ['coarsest and heaviest', 'finest', 'dissolved salts', 'organic matter'], 'Least energy to hold.'),
    Q('Material carried dissolved in water is transported in:', ['solution', 'traction', 'saltation', 'suspension'], 'Ions in the water.'),
    Q('Glacial till is usually:', ['poorly sorted', 'well sorted', 'rounded and uniform', 'crystalline'], 'Mixed sizes.'),
    Q('The Douala basin contains thick:', ['sediments', 'basalt flows only', 'granite batholiths', 'glaciers'], 'Laid down over millions of years.'),
  ],
  'gl-diagenesis-4': [
    Q('Diagenesis happens at:', ['low temperature and pressure', 'very high temperature', 'the core', 'the melting point'], 'Below metamorphism.'),
    Q('A common cement that colours sandstone red is:', ['iron oxide', 'silica', 'calcite', 'salt'], 'Hematite.'),
    Q('Compaction reduces a sediment’s:', ['pore space', 'age', 'grain hardness', 'colour'], 'Grains are pressed together.'),
    Q('A poorly cemented sandstone:', ['crumbles easily and can hold much water', 'is very hard', 'is impermeable', 'is glassy'], 'Weak and porous.'),
  ],
  'gl-clastic-4': [
    Q('Clastic rocks are classified mainly by:', ['grain size', 'colour', 'fossil content', 'age'], 'Conglomerate to shale.'),
    Q('Cross-bedding shows the:', ['direction of the current', 'age of the rock', 'temperature', 'mineral hardness'], 'Inclined layers.'),
    Q('Mud cracks show that sediment:', ['dried out in the sun', 'was deposited by a glacier', 'was metamorphosed', 'melted'], 'Exposure to air.'),
    Q('Graded bedding is:', ['coarse at the base and fine at the top', 'fine at the base', 'all one size', 'vertical'], 'Settling from one flow.'),
  ],
  'gl-chemorganic-4': [
    Q('Evaporites form in climates that are:', ['hot and dry', 'cold and wet', 'polar', 'humid and cool'], 'Evaporation exceeds inflow.'),
    Q('Travertine forms:', ['around springs from precipitated calcium carbonate', 'from coal', 'from volcanic ash', 'from sand'], 'A chemical limestone.'),
    Q('The first stage in the formation of coal is:', ['peat', 'anthracite', 'lignite', 'graphite'], 'Partly decayed plants.'),
    Q('All limestones are made mainly of:', ['calcite', 'quartz', 'halite', 'mica'], 'Calcium carbonate.'),
  ],
  'gl-agents-4': [
    Q('Confining pressure acts:', ['equally in all directions', 'in one direction only', 'only at the surface', 'only in liquids'], 'From the weight of rock.'),
    Q('The geothermal gradient is about:', ['25 to 30 °C per km', '1 °C per km', '500 °C per km', '0 °C'], 'Temperature rises with depth.'),
    Q('Low-grade metamorphism produces rocks such as:', ['slate', 'gneiss', 'granite', 'basalt'], 'Modest heat and pressure.'),
    Q('Metasomatism is a change caused by:', ['chemically active fluids', 'melting', 'erosion', 'deposition'], 'Ions added or removed.'),
  ],
  'gl-contactregional-4': [
    Q('The grade in a contact aureole is highest:', ['next to the intrusion', 'far from the intrusion', 'at the surface', 'everywhere the same'], 'Heat falls with distance.'),
    Q('Regional metamorphism takes place at:', ['converging plate boundaries during mountain building', 'river mouths', 'beaches', 'deserts'], 'Dynamothermal.'),
    Q('Mylonite forms by:', ['crushing in fault zones', 'evaporation', 'weathering', 'deposition'], 'Dynamic metamorphism.'),
    Q('Much of Cameroon’s Pan-African basement consists of:', ['schists and gneisses', 'coal', 'chalk', 'salt'], 'Regional metamorphism.'),
  ],
  'gl-foliation-4': [
    Q('Foliation is produced mainly by:', ['directed pressure', 'confining pressure only', 'evaporation', 'weathering'], 'Minerals line up.'),
    Q('Phyllite has a:', ['silky sheen from fine mica', 'glassy texture', 'pebbly texture', 'vesicular texture'], 'Between slate and schist.'),
    Q('Granoblastic texture means:', ['interlocking equal grains with no alignment', 'banded', 'glassy', 'clastic'], 'Non-foliated.'),
    Q('Slaty cleavage may cut across:', ['the original bedding', 'the core', 'the atmosphere', 'the water table'], 'Different origins.'),
  ],
  'gl-metaid-4': [
    Q('Marble can be scratched by a steel knife because calcite has hardness:', ['3', '7', '9', '10'], 'Softer than steel.'),
    Q('Quartzite breaks:', ['through the grains', 'round the grains', 'along mica flakes', 'into sheets'], 'Strongly recrystallised.'),
    Q('Garnet crystals are common in:', ['schist', 'sandstone', 'chalk', 'coal'], 'Medium to high grade.'),
    Q('Gneiss may form from:', ['shale or granite', 'coal only', 'salt', 'chalk only'], 'High-grade metamorphism.'),
  ],
  'gl-masswasting-4': [
    Q('The Gouache landslide in Bafoussam happened in:', ['2019', '1986', '1999', '2000'], 'October 2019.'),
    Q('Deforestation increases landslides because:', ['roots that bind the soil are removed', 'trees attract rain', 'trees make soil heavier', 'forest causes earthquakes'], 'Roots hold slopes.'),
    Q('A fast flow of water-saturated fine material is a:', ['mudflow', 'creep', 'rockfall', 'joint'], 'After heavy rain.'),
    Q('Retaining walls are built to:', ['hold back soil on slopes', 'store water', 'stop rivers', 'mark boundaries'], 'Slope protection.'),
  ],
  'gl-volcanichazards-4': [
    Q('About how many people died in the Lake Nyos disaster?', ['1,700', '37', '17,000', '170'], '21 August 1986.'),
    Q('The Lake Monoun gas release was in:', ['1984', '1986', '1999', '2019'], '37 people died.'),
    Q('A lahar is a:', ['volcanic mudflow', 'lava lake', 'gas cloud', 'crater'], 'Ash and water.'),
    Q('The gas released at Lake Nyos was:', ['carbon dioxide', 'oxygen', 'hydrogen', 'nitrogen'], 'From magma below.'),
  ],
  'gl-handspecimen-4': [
    Q('A hand lens usually magnifies about:', ['10 times', '1,000 times', '2 times', '100 times'], '×10.'),
    Q('When using acid on a specimen, you should wear:', ['goggles', 'sunglasses', 'no protection', 'gloves only'], 'Eye safety.'),
    Q('A medium-grained rock has crystals that are:', ['visible with a hand lens', 'visible from far away', 'never visible', 'glassy'], 'Between coarse and fine.'),
    Q('Unknown samples in the laboratory should never be:', ['tasted', 'described', 'drawn', 'labelled'], 'Safety.'),
  ],
  'gl-rockkey-4': [
    Q('A white, crystalline rock that fizzes with acid and has no fossils is:', ['marble', 'chalk', 'quartzite', 'granite'], 'Metamorphosed limestone.'),
    Q('Granite differs from gneiss because granite:', ['has no banding', 'is banded', 'is sedimentary', 'is glassy'], 'Igneous, not metamorphic.'),
    Q('A rock of pebbles in a sandy matrix is:', ['conglomerate', 'basalt', 'slate', 'marble'], 'Clastic, coarse.'),
    Q('A dichotomous key divides at each step into:', ['two choices', 'three choices', 'ten choices', 'no choices'], 'Dichotomous means two.'),
  ],

  // ---------- Form 5, term 1 ----------
  'gl-gceformat-5': [
    Q('A wrong answer in Paper 1:', ['scores zero but loses no marks', 'loses one mark', 'loses two marks', 'cancels the paper'], 'No penalty.'),
    Q('Paper 2 is made up of:', ['structured questions with diagrams and data', 'multiple-choice only', 'one essay', 'oral questions'], '2½ hours.'),
    Q('Form 4 topics in the GCE are:', ['examined along with Form 5 topics', 'never examined', 'optional', 'in a separate exam'], 'Two-year syllabus.'),
    Q('The date of each paper is found on the:', ['official GCE Board timetable', 'school calendar only', 'textbook cover', 'class register'], 'Check early.'),
  ],
  'gl-drawing-5': [
    Q('Geological drawings should be made in:', ['sharp pencil', 'red ink', 'felt marker', 'crayon'], 'Clear lines.'),
    Q('On a section, short dashes usually stand for:', ['shale', 'limestone', 'granite', 'sandstone'], 'Standard symbols.'),
    Q('Faults are usually drawn as:', ['heavy lines with half arrows showing movement', 'dotted circles', 'wavy lines', 'shaded areas'], 'Shows displacement.'),
    Q('An unconformity is drawn as:', ['a wavy line', 'a straight dashed line', 'a circle', 'an arrow'], 'An erosion surface.'),
  ],
  'gl-folds-5': [
    Q('Dip is measured with a:', ['clinometer', 'thermometer', 'barometer', 'hand lens'], 'Angle of slope.'),
    Q('Folds are produced by:', ['compression', 'tension', 'weathering', 'deposition'], 'Squeezing.'),
    Q('The line of greatest curvature of a fold is the:', ['hinge', 'limb', 'strike', 'outcrop'], 'Fold hinge.'),
    Q('A monocline is:', ['a single step-like bend in flat beds', 'a double fold', 'a fault', 'a dome'], 'One limb.'),
  ],
  'gl-faults-5': [
    Q('The block below an inclined fault plane is the:', ['footwall', 'hanging wall', 'hinge', 'limb'], 'You could stand on it.'),
    Q('A thrust is a:', ['low-angle reverse fault', 'normal fault', 'joint', 'fold'], 'Compression.'),
    Q('Columnar joints form in basalt by:', ['cooling and contraction', 'folding', 'deposition', 'faulting'], 'Hexagonal columns.'),
    Q('In a strike-slip fault the movement is:', ['horizontal', 'vertical only', 'circular', 'none'], 'Tear fault.'),
  ],
  'gl-principles-5': [
    Q('The principles of superposition and original horizontality were stated by:', ['Nicolaus Steno', 'Charles Darwin', 'Isaac Newton', 'Albert Einstein'], 'In 1669.'),
    Q('Lateral continuity allows geologists to:', ['match a bed across a valley', 'date a rock in years', 'measure hardness', 'find gold'], 'Beds extend sideways.'),
    Q('Matching beds of the same age in different places is called:', ['correlation', 'cementation', 'foliation', 'oxidation'], 'Uses fossils and marker beds.'),
    Q('A volcanic ash layer is useful as a:', ['marker bed', 'cap rock', 'aquifer', 'fold'], 'Laid down at one moment over a wide area.'),
  ],
  'gl-unconformities-5': [
    Q('A disconformity has:', ['parallel beds above and below an erosion surface', 'tilted beds below', 'igneous rock below', 'no gap'], 'Hard to spot.'),
    Q('A basal conglomerate often lies:', ['just above an unconformity', 'in the core', 'inside granite', 'on a fault plane'], 'Pebbles from the rocks below.'),
    Q('An angular unconformity shows that the older beds were:', ['tilted and eroded before the younger beds were laid down', 'never disturbed', 'deposited after the younger beds', 'molten'], 'Folding, erosion, deposition.'),
    Q('Cretaceous sediments in Cameroon rest on the basement with a:', ['nonconformity', 'disconformity', 'conformable contact', 'fault only'], 'Sediment on basement.'),
  ],
  'gl-fossilisation-5': [
    Q('Insects preserved in amber are an example of:', ['unaltered remains', 'casts', 'trace fossils', 'petrification'], 'Original material kept.'),
    Q('Leaves preserved as thin black films are:', ['carbonised', 'petrified', 'casts', 'moulds'], 'Carbon remains.'),
    Q('A cast forms when:', ['a mould is filled with minerals', 'a shell is frozen', 'a footprint is made', 'wood burns'], 'Copy of the shape.'),
    Q('Fossils are rarely found in igneous rocks because:', ['organisms are destroyed by the heat of magma', 'igneous rocks are too young', 'they are too soft', 'they float'], 'Molten origin.'),
  ],
  'gl-indexfossils-5': [
    Q('An index fossil should be:', ['easy to recognise and common', 'rare and hard to identify', 'long-lived', 'found in one place only'], 'Practical to use.'),
    Q('Ammonites have shells that are:', ['coiled with complex suture lines', 'straight and smooth', 'two-valved', 'made of wood'], 'Cephalopods.'),
    Q('Identical Mesosaurus fossils in Africa and South America support:', ['continental drift', 'the Big Bang', 'superposition', 'weathering'], 'The continents were once joined.'),
    Q('Oil geologists use microfossils because they:', ['survive in small borehole samples', 'are large', 'glow', 'are rare'], 'Foraminifera and pollen.'),
  ],
  'gl-eras-5': [
    Q('The Mesozoic era is divided into the:', ['Triassic, Jurassic and Cretaceous', 'Cambrian and Ordovician', 'Palaeogene and Neogene', 'Archaean and Proterozoic'], 'Three periods.'),
    Q('The half-life of carbon-14 is about:', ['5,730 years', '4,500 million years', '1 year', '1 million years'], 'Used for young remains.'),
    Q('The rocks dated most reliably by radiometric methods are:', ['igneous rocks', 'sandstones', 'conglomerates', 'soils'], 'Clock starts at crystallisation.'),
    Q('The current period is the:', ['Quaternary', 'Cretaceous', 'Permian', 'Cambrian'], 'Cenozoic era.'),
  ],
  'gl-milestones-5': [
    Q('The great coal forests grew in the:', ['Carboniferous', 'Cretaceous', 'Quaternary', 'Cambrian'], '"Coal-bearing".'),
    Q('The age of mammals is the:', ['Cenozoic', 'Mesozoic', 'Palaeozoic', 'Precambrian'], 'After the dinosaurs.'),
    Q('The South Atlantic opened in the:', ['Cretaceous', 'Cambrian', 'Quaternary', 'Archaean'], 'Africa separated from South America.'),
    Q('The Precambrian makes up about what share of geological time?', ['88%', '10%', '50%', '1%'], 'Most of Earth history.'),
  ],
  'gl-porosity-5': [
    Q('The unsaturated zone lies:', ['above the water table', 'below the water table', 'in the core', 'under the sea'], 'Pores hold air and water.'),
    Q('The water table falls in the dry season because:', ['less rain recharges the ground', 'the rock swells', 'the sea rises', 'plants stop growing'], 'Water drains away.'),
    Q('Unfractured granite has:', ['very low porosity', 'very high porosity', 'no minerals', 'large pores'], 'Interlocking crystals.'),
    Q('Water soaking into the ground is called:', ['infiltration', 'evaporation', 'condensation', 'deposition'], 'Recharge begins.'),
  ],
  'gl-aquifers-5': [
    Q('An unconfined aquifer is recharged:', ['directly by rain from above', 'only from the sea', 'by magma', 'never'], 'Open to the surface.'),
    Q('Pit latrines should be sited:', ['far from and downslope of wells', 'next to wells', 'upslope of wells', 'inside the recharge area'], 'Avoid pollution.'),
    Q('Over-pumping near the coast can cause:', ['salt water to enter the aquifer', 'more rain', 'earthquakes', 'volcanic eruptions'], 'Saltwater intrusion.'),
    Q('Shale usually acts as:', ['an aquiclude', 'an aquifer', 'a reservoir rock', 'a spring'], 'Impermeable.'),
  ],
  'gl-ores-5': [
    Q('Cassiterite is an ore of:', ['tin', 'iron', 'copper', 'aluminium'], 'Tin oxide.'),
    Q('Galena is an ore of:', ['lead', 'gold', 'zinc only', 'tin'], 'Lead sulphide.'),
    Q('Whether a deposit is an ore depends partly on:', ['the price of the metal', 'its colour', 'the weather', 'the season'], 'Profitability.'),
    Q('Open-pit mining is used for:', ['large, shallow deposits', 'deep narrow veins', 'oil', 'groundwater'], 'Opencast.'),
  ],
  'gl-fossilfuels-5': [
    Q('A typical source rock for oil is:', ['black, organic-rich shale', 'granite', 'quartzite', 'basalt'], 'Organic matter in mud.'),
    Q('The "oil window" refers to:', ['the depth and temperature range where oil forms', 'a window in a refinery', 'a type of trap', 'a reservoir rock'], 'About 2 to 5 km.'),
    Q('A salt dome can trap oil because salt is:', ['impermeable', 'porous', 'liquid', 'radioactive'], 'It seals beds.'),
    Q('Seismic surveys find oil traps by:', ['reflecting sound waves off rock layers', 'measuring rainfall', 'digging pits', 'testing streak'], 'Images underground.'),
  ],
  'gl-cameroonmap-5': [
    Q('Most of Cameroon’s surface rocks are:', ['Precambrian basement', 'recent alluvium', 'coral', 'salt'], 'Gneiss, schist, granite.'),
    Q('The Central Cameroon Shear Zone runs:', ['south-west to north-east', 'north to south', 'east to west', 'around the coast'], 'Same trend as the CVL.'),
    Q('Sedimentary basins on the map are found mainly:', ['along the coast and in the north', 'only in the East forest', 'on mountain tops', 'in the Ntem area'], 'Rio del Rey, Douala, Garoua, Chad.'),
    Q('A migmatite has been:', ['partly melted during high-grade metamorphism', 'deposited by rivers', 'erupted as lava', 'formed by evaporation'], 'Mixed rock.'),
  ],
  'gl-precambrian-5': [
    Q('The Ntem complex is found in the:', ['south of Cameroon', 'far north', 'coastal basin', 'Western Highlands only'], 'Around Ebolowa and Sangmélima.'),
    Q('The Archaean ended about:', ['2,500 Ma ago', '66 Ma ago', '541 Ma ago', '4,600 Ma ago'], 'Start of the Proterozoic.'),
    Q('Kyanite and garnet in the Yaoundé group show:', ['metamorphism at high pressure', 'evaporation', 'weathering', 'volcanic eruption'], 'Deep burial.'),
    Q('Granite inselbergs are common around:', ['Ngaoundéré and in the North', 'Douala', 'Limbe beach', 'Lake Chad shore'], 'Basement landforms.'),
  ],

  // ---------- Form 5, terms 2 and 3 ----------
  'gl-sedbasins-5': [
    Q('Cameroon’s sedimentary basins formed mainly in the:', ['Cretaceous', 'Archaean', 'Quaternary', 'Cambrian'], 'Opening of the South Atlantic.'),
    Q('The Rio del Rey basin is the eastern edge of the:', ['Niger delta', 'Congo craton', 'Lake Chad basin', 'Sahara'], 'Offshore, near Bakassi.'),
    Q('Natural gas is produced at Logbaba near:', ['Douala', 'Garoua', 'Maroua', 'Bertoua'], 'Douala basin.'),
    Q('The Lake Chad basin sediments are mainly:', ['Cenozoic', 'Archaean', 'Palaeozoic', 'Precambrian'], 'Young deposits.'),
  ],
  'gl-cvl-5': [
    Q('The Cameroon Volcanic Line is about how long?', ['1,600 km', '160 km', '16,000 km', '16 km'], 'Islands to the Adamawa.'),
    Q('Bioko and São Tomé belong to the CVL’s:', ['oceanic sector', 'continental sector', 'Benue trough', 'Congo craton'], 'Islands in the Gulf of Guinea.'),
    Q('Pozzolana is used to make:', ['cement', 'glass', 'fuel', 'fertiliser only'], 'Volcanic ash.'),
    Q('The CVL is unusual because it:', ['crosses from ocean to continent away from a plate boundary', 'is at a mid-ocean ridge', 'has no volcanoes', 'is made of limestone'], 'A puzzle for geologists.'),
  ],
  'gl-hydrocarbons-5': [
    Q('Commercial oil production in Cameroon began in the:', ['late 1970s', '1920s', '2010s', '1950s'], 'Rio del Rey fields.'),
    Q('The Chad-Cameroon pipeline is about how long?', ['1,070 km', '107 km', '10,700 km', '17 km'], 'Doba to Kribi.'),
    Q('Gas from offshore Kribi supplies a:', ['power plant', 'coal mine', 'gold mine', 'cement kiln only'], 'Kribi gas power plant.'),
    Q('Gas flaring means:', ['burning off unwanted gas at an oil field', 'storing gas', 'selling gas', 'drilling for water'], 'Wasteful and polluting.'),
  ],
  'gl-minerals-cmr-5': [
    Q('Fongo-Tongo in the West has deposits of:', ['bauxite', 'diamond', 'oil', 'salt'], 'Laterite.'),
    Q('Marble is quarried near Figuil at:', ['Bidzar', 'Mbalam', 'Mobilong', 'Akonolinga'], 'North Region.'),
    Q('Mercury pollution in Cameroon is linked to:', ['artisanal gold mining', 'cement making', 'tea farming', 'fishing'], 'Used to collect gold.'),
    Q('Mining companies must carry out an environmental impact assessment:', ['before mining begins', 'after closing', 'never', 'only if asked by villagers'], 'Required by law.'),
  ],
  'gl-mcq-5': [
    Q('If you are unsure of an item, you should:', ['eliminate, choose and mark it to revisit', 'leave it blank', 'pick the longest option', 'stop the paper'], 'No penalty for guessing.'),
    Q('Two options that mean the same thing are:', ['probably both wrong', 'both right', 'always the answer', 'misprints'], 'Only one answer can be correct.'),
    Q('Answer sheet changes should be:', ['erased completely', 'crossed out', 'left as two marks', 'written in ink'], 'One mark per item.'),
    Q('The words NOT and EXCEPT in a stem should be:', ['read with special care', 'ignored', 'crossed out', 'answered twice'], 'They reverse the question.'),
  ],
  'gl-quickfacts-5': [
    Q('Corundum has a Mohs hardness of:', ['9', '7', '5', '3'], 'Just below diamond.'),
    Q('The Cenozoic began:', ['66 Ma ago', '252 Ma ago', '541 Ma ago', '2.6 Ma ago'], 'After the end-Cretaceous extinction.'),
    Q('A reverse fault is caused by:', ['compression', 'tension', 'erosion', 'deposition'], 'Hanging wall up.'),
    Q('Sandstone metamorphoses into:', ['quartzite', 'marble', 'slate', 'gneiss only'], 'Very hard.'),
  ],
  'gl-blockdiagrams-5': [
    Q('A lava flow bakes:', ['only the bed below it', 'beds above and below', 'nothing', 'only the bed above'], 'It cooled before the next bed.'),
    Q('A dyke that cuts across a fault is:', ['younger than the fault', 'older than the fault', 'the same age', 'a sill'], 'Cross-cutting relationships.'),
    Q('When writing a history, start with the:', ['oldest event', 'youngest event', 'erosion today', 'soil'], 'Chronological order.'),
    Q('An erosion surface on a section is usually drawn as a:', ['wavy line', 'heavy straight line', 'dotted circle', 'row of crosses'], 'Unconformity.'),
  ],
  'gl-structured-5': [
    Q('"Compare" asks you to give:', ['similarities and differences', 'only a list', 'only a diagram', 'a definition'], 'Point by point.'),
    Q('A 3-mark "explain" question usually needs:', ['three linked points', 'one word', 'ten points', 'a long story'], 'Marks guide length.'),
    Q('"Calculate" answers should show:', ['formula, working and unit', 'only the answer', 'a drawing', 'nothing'], 'Method marks.'),
    Q('"State" requires:', ['a short answer without explanation', 'a full essay', 'a labelled diagram only', 'a calculation'], 'Brief.'),
  ],
  'gl-mock-5': [
    Q('The mock should be written:', ['under timed, silent conditions', 'at home with notes', 'in groups', 'without a time limit'], 'Like the real exam.'),
    Q('After the mock, you should record:', ['your marks for each topic', 'only your total', 'nothing', 'others’ marks'], 'Find weak areas.'),
    Q('A low mark in one topic means you should:', ['revise that topic next', 'give up', 'drop the subject', 'ignore it'], 'It is information.'),
    Q('The mock reproduces:', ['both GCE papers', 'only Paper 1', 'a practical only', 'an oral'], 'Papers 1 and 2.'),
  ],
  'gl-remediation-5': [
    Q('The most effective way to revise diagrams is to:', ['draw them from memory and check', 'only look at them', 'colour them', 'skip them'], 'Active recall.'),
    Q('Strong topics in final revision should be:', ['revised briefly', 'ignored completely', 'revised most', 'forgotten'], 'Keep them fresh.'),
    Q('On the day before the exam, you should:', ['rest and sleep well', 'stay awake all night', 'learn new topics', 'skip meals'], 'Be fresh.'),
    Q('Past papers should be practised:', ['under timed conditions and marked', 'without time limits', 'only by reading', 'once only'], 'Real practice.'),
  ],
};
