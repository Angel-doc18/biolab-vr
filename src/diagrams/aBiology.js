// A Level Biology figures for Lower Sixth: microscopy, biological molecules,
// enzyme kinetics drawn from the Michaelis-Menten equation, the fluid mosaic
// membrane, organelles and tissues, photosynthesis and respiration, transport
// in plants, the heart's conduction, the cardiac cycle and ECG drawn to scale,
// immunity, the five kingdoms and the GCE papers (0710).
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const RED = '#c8463d';
const BLUE = '#1f6fb2';
const GREEN = '#2e7d32';
const GREY = '#6b7a88';
const line = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

function Axes({ x0, y0, x1, y1, xTicks, yTicks, xLabel, yLabel }) {
  return (
    <G>
      <Line x1={x0} y1={y0} x2={x1} y2={y0} stroke={O} strokeWidth={1.2} />
      <Line x1={x0} y1={y0} x2={x0} y2={y1} stroke={O} strokeWidth={1.2} />
      {xTicks.map(([x, t]) => (
        <G key={`x${t}`}>
          <Line x1={x} y1={y0} x2={x} y2={y0 + 4} stroke={O} strokeWidth={1} />
          <Txt x={x} y={y0 + 15} size={8.5}>
            {t}
          </Txt>
        </G>
      ))}
      {yTicks.map(([y, t]) => (
        <G key={`y${t}`}>
          <Line x1={x0 - 4} y1={y} x2={x0} y2={y} stroke={O} strokeWidth={1} />
          <Txt x={x0 - 7} y={y + 3} size={8.5} anchor="end">
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={(x0 + x1) / 2} y={y0 + 30} size={9} weight="700">
        {xLabel}
      </Txt>
      <Txt x={x0 - 34} y={(y0 + y1) / 2} size={9} weight="700" rotate={-90}>
        {yLabel}
      </Txt>
    </G>
  );
}

// ---------- enzyme kinetics ----------
// v = Vmax [S] / (Km + [S]). No inhibitor: Vmax 100, Km 2. Competitive: Vmax
// 100, Km 6. Non-competitive: Vmax 50, Km 2. [S] from 0 to 20 arbitrary units.
const KX = (s) => 60 + s * 12;
const KY = (v) => 180 - v * 1.5;
function KineticsArt() {
  const curve = (vmax, km) => {
    const pts = [];
    for (let s = 0; s <= 20.001; s += 0.25) pts.push([KX(s), KY((vmax * s) / (km + s))]);
    return line(pts);
  };
  return (
    <G>
      <Axes x0={60} y0={180} x1={300} y1={20} xTicks={[0, 5, 10, 15, 20].map((s) => [KX(s), s])} yTicks={[0, 25, 50, 75, 100].map((v) => [KY(v), v])} xLabel="Substrate concentration / arbitrary units" yLabel="Rate (% of Vmax)" />
      <Line x1={60} y1={KY(100)} x2={300} y2={KY(100)} stroke={GREY} strokeWidth={0.9} strokeDasharray="4 3" />
      <Line x1={60} y1={KY(50)} x2={KX(2)} y2={KY(50)} stroke={GREY} strokeWidth={0.9} strokeDasharray="4 3" />
      <Line x1={KX(2)} y1={KY(50)} x2={KX(2)} y2={180} stroke={GREY} strokeWidth={0.9} strokeDasharray="4 3" />
      <Path d={curve(100, 2)} stroke={O} strokeWidth={2} fill="none" />
      <Path d={curve(100, 6)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Path d={curve(50, 2)} stroke={RED} strokeWidth={2} fill="none" />
      <Txt x={304} y={KY(100) + 3} size={8.5} anchor="start" weight="700">
        Vmax
      </Txt>
      <Txt x={KX(2)} y={194} size={8.5} weight="700" fill={GREY}>
        Km
      </Txt>
      <Txt x={300} y={58} size={8.5} anchor="end" weight="700">
        no inhibitor
      </Txt>
      <Txt x={KX(13)} y={KY(68) + 14} size={8.5} anchor="start" weight="700" fill={BLUE}>
        competitive
      </Txt>
      <Txt x={KX(13)} y={KY(43) + 14} size={8.5} anchor="start" weight="700" fill={RED}>
        non-competitive
      </Txt>
    </G>
  );
}

// ---------- activation energy ----------
function ActivationArt() {
  const hump = (peak) => `M30 120 L80 120 C110 120 120 ${peak} 150 ${peak} C180 ${peak} 190 150 220 150 L280 150`;
  return (
    <G>
      <Line x1={24} y1={176} x2={290} y2={176} stroke={O} strokeWidth={1.2} />
      <Line x1={24} y1={176} x2={24} y2={14} stroke={O} strokeWidth={1.2} />
      <Head x={24} y={14} dx={0} dy={-1} size={6} fill={O} />
      <Head x={290} y={176} dx={1} dy={0} size={6} fill={O} />
      <Txt x={14} y={95} size={9} weight="700" rotate={-90}>
        Energy
      </Txt>
      <Txt x={157} y={192} size={9} weight="700">
        Progress of reaction
      </Txt>
      <Path d={hump(30)} stroke={GREY} strokeWidth={2} fill="none" strokeDasharray="5 3" />
      <Path d={hump(78)} stroke={GREEN} strokeWidth={2.2} fill="none" />
      <Line x1={150} y1={120} x2={150} y2={33} stroke={GREY} strokeWidth={1.2} />
      <Head x={150} y={33} dx={0} dy={-1} size={5} fill={GREY} />
      <Line x1={164} y1={120} x2={164} y2={81} stroke={GREEN} strokeWidth={1.2} />
      <Head x={164} y={81} dx={0} dy={-1} size={5} fill={GREEN} />
      <Line x1={80} y1={120} x2={170} y2={120} stroke={O} strokeWidth={0.8} strokeDasharray="2 3" />
    </G>
  );
}

// ---------- the fluid mosaic membrane ----------
const HEADS = [94, 104, 134, 144, 164, 174, 184, 194, 204, 244];
function Phospholipid({ x, top }) {
  const hy = top ? 64 : 116;
  const t1 = top ? 68 : 112;
  const t2 = top ? 88 : 92;
  return (
    <G>
      <Path d={`M${x - 2} ${t1} L${x - 2} ${t2} M${x + 2} ${t1} L${x + 2} ${t2}`} stroke="#b58b4a" strokeWidth={1.3} />
      <Circle cx={x} cy={hy} r={4.2} fill="#7fb3e0" stroke={O} strokeWidth={0.8} />
    </G>
  );
}
function MembraneArt() {
  return (
    <G>
      {HEADS.map((x) => (
        <G key={x}>
          <Phospholipid x={x} top />
          <Phospholipid x={x} />
        </G>
      ))}
      {/* channel protein: two halves with a pore between */}
      <Rect x={109} y={50} width={9} height={80} rx={4} fill="#c9a3d6" stroke={O} strokeWidth={0.9} />
      <Rect x={122} y={50} width={9} height={80} rx={4} fill="#c9a3d6" stroke={O} strokeWidth={0.9} />
      {/* cholesterol among the tails */}
      <Rect x={151} y={74} width={7} height={26} rx={3} fill="#f2c94c" stroke={O} strokeWidth={0.8} />
      {/* extrinsic protein on the inner surface */}
      <Ellipse cx={205} cy={130} rx={15} ry={9} fill="#9fd3a8" stroke={O} strokeWidth={0.9} />
      {/* glycoprotein with its carbohydrate chain */}
      <Rect x={214} y={52} width={22} height={76} rx={8} fill="#c9a3d6" stroke={O} strokeWidth={0.9} />
      <Path d="M225 52 L225 38 M225 42 L216 30 M225 40 L234 28 M216 30 L212 22" stroke={GREEN} strokeWidth={1.6} fill="none" />
      {[[225, 38], [216, 30], [234, 28], [212, 22]].map(([x, y]) => (
        <Circle key={`${x}${y}`} cx={x} cy={y} r={2.6} fill={GREEN} />
      ))}
    </G>
  );
}

// ---------- the cardiac cycle (left side), to scale ----------
// Time 0 to 0.8 s; pressure 0 to 16 kPa.
const CX = (t) => 50 + t * 300;
const CY = (p) => 180 - p * 9.4;
const ATRIUM = [[0, 0.5], [0.05, 1.5], [0.1, 0.8], [0.15, 0.5], [0.3, 1.0], [0.42, 1.3], [0.47, 0.6], [0.6, 0.7], [0.8, 0.6]];
const VENTRICLE = [[0, 0.3], [0.05, 1.2], [0.1, 1.0], [0.12, 4], [0.15, 10.7], [0.2, 15], [0.25, 16], [0.3, 15], [0.36, 11], [0.4, 6], [0.45, 0.5], [0.5, 0.2], [0.8, 0.3]];
const AORTA = [[0, 11.5], [0.15, 10.7], [0.2, 15.2], [0.25, 16.1], [0.3, 15.3], [0.36, 12], [0.38, 11.3], [0.4, 12.1], [0.6, 11.7], [0.8, 11.2]];
const EVENTS = [
  { n: 1, t: 0.11, p: 1.6, dx: -9, dy: -8 },
  { n: 2, t: 0.15, p: 10.7, dx: -10, dy: -2 },
  { n: 3, t: 0.36, p: 12, dx: 10, dy: -8 },
  { n: 4, t: 0.45, p: 0.8, dx: 9, dy: -9 },
];
function CardiacArt() {
  const path = (pts) => line(pts.map(([t, p]) => [CX(t), CY(p)]));
  return (
    <G>
      <Axes x0={50} y0={180} x1={290} y1={20} xTicks={[0, 0.2, 0.4, 0.6, 0.8].map((t) => [CX(t), t])} yTicks={[0, 4, 8, 12, 16].map((p) => [CY(p), p])} xLabel="Time / s" yLabel="Pressure / kPa" />
      <Path d={path(AORTA)} stroke={RED} strokeWidth={2} fill="none" />
      <Path d={path(VENTRICLE)} stroke={O} strokeWidth={2} fill="none" />
      <Path d={path(ATRIUM)} stroke={BLUE} strokeWidth={2} fill="none" />
      <Txt x={CX(0.6)} y={CY(11.7) - 7} size={8.5} weight="700" fill={RED}>
        Aorta
      </Txt>
      <Txt x={CX(0.43) + 6} y={CY(5)} size={8.5} weight="700" anchor="start">
        Left ventricle
      </Txt>
      <Txt x={CX(0.65)} y={CY(0.7) - 6} size={8.5} weight="700" fill={BLUE}>
        Left atrium
      </Txt>
      {EVENTS.map((e) => (
        <G key={e.n}>
          <Circle cx={CX(e.t) + e.dx} cy={CY(e.p) + e.dy} r={6} fill="#ffffff" stroke={O} strokeWidth={1} />
          <Txt x={CX(e.t) + e.dx} y={CY(e.p) + e.dy + 3} size={7.5} weight="700">
            {e.n}
          </Txt>
        </G>
      ))}
      {[['1 AV valves close', 20, 228], ['2 Semilunar valves open', 176, 228], ['3 Semilunar valves close', 20, 242], ['4 AV valves open', 176, 242]].map(([t, x, y]) => (
        <Txt key={t} x={x} y={y} size={8.5} anchor="start">
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- the ECG ----------
function beat(x0) {
  return [
    [x0, 80], [x0 + 15, 80], [x0 + 20, 74], [x0 + 25, 72], [x0 + 30, 74], [x0 + 35, 80], [x0 + 45, 80], [x0 + 48, 84], [x0 + 52, 30], [x0 + 56, 90], [x0 + 60, 80],
    [x0 + 75, 80], [x0 + 82, 72], [x0 + 88, 66], [x0 + 94, 72], [x0 + 100, 80], [x0 + 150, 80],
  ];
}
function EcgArt() {
  return (
    <G>
      <Rect x={10} y={14} width={320} height={96} fill="#fdf1f0" stroke="#e7b9b4" strokeWidth={0.8} />
      <Path d={line([...beat(20), ...beat(170).slice(1)])} stroke={O} strokeWidth={1.8} fill="none" />
      <Txt x={45} y={66} size={10} weight="700">
        P
      </Txt>
      <Txt x={82} y={36} size={10} weight="700">
        R
      </Txt>
      <Txt x={64} y={96} size={10} weight="700">
        Q
      </Txt>
      <Txt x={80} y={102} size={10} weight="700">
        S
      </Txt>
      <Txt x={108} y={60} size={10} weight="700">
        T
      </Txt>
      <Line x1={72} y1={20} x2={222} y2={20} stroke={RED} strokeWidth={1.2} />
      <Head x={222} y={20} dx={1} dy={0} size={5} fill={RED} />
      <Head x={72} y={20} dx={-1} dy={0} size={5} fill={RED} />
      <Txt x={147} y={34} size={8.5} weight="700" fill={RED}>
        one beat: 0.8 s
      </Txt>
      <Txt x={170} y={128} size={8.5}>
        P: atria excited   QRS: ventricles excited   T: ventricles recover
      </Txt>
    </G>
  );
}

export const A_BIOLOGY = {
  // ---------- Lower Sixth ----------
  'ab-graticule': flowSpec('Calibrating an eyepiece graticule', ['Line up the\ngraticule with the\nstage micrometer', 'Count eyepiece\nunits matching\nstage divisions', 'One stage\ndivision\n= 10 µm', 'One eyepiece unit\n= stage length ÷\neyepiece units', 'Measure the cell\nin eyepiece\nunits', 'Recalibrate for\neach objective'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-carbohydrates': columnsSpec('Carbohydrates', [
    { head: 'Monosaccharides', items: ['glucose (α, β)', 'fructose', 'galactose', 'ribose'] },
    { head: 'Disaccharides', items: ['maltose: glc + glc', 'sucrose: glc + fru', 'lactose: glc + gal', 'glycosidic bond'] },
    { head: 'Polysaccharides', items: ['starch: α, helix', 'glycogen: α,', 'highly branched', 'cellulose: β, straight'] },
  ], { colW: 118 }),
  'ab-lipids': columnsSpec('Lipids', [
    { head: 'Triglyceride', items: ['glycerol +', '3 fatty acids', '3 ester bonds', 'energy store'] },
    { head: 'Saturated or\nunsaturated', items: ['no C=C: solid fats', 'C=C kinks:', 'liquid oils', '(palm, groundnut)'] },
    { head: 'Phospholipid', items: ['phosphate head:', 'hydrophilic', 'two tails:', 'hydrophobic'] },
  ], { colW: 118 }),
  'ab-protein-levels': flowSpec('Levels of protein structure', ['Primary:\nsequence of\namino acids', 'Secondary:\nα-helix, β-sheet\n(H bonds)', 'Tertiary: 3D\nfolding (H, ionic,\ndisulfide bonds)', 'Quaternary:\nseveral chains\n(haemoglobin)'], { perRow: 2, boxW: 130, boxH: 58 }),
  'ab-enzyme-kinetics': {
    title: 'Rate against substrate concentration, with inhibitors',
    w: 340,
    h: 216,
    art: KineticsArt,
    labels: [],
    facts: [
      'The curves follow rate = Vmax × [S] ÷ (Km + [S]).',
      'Without inhibitor (Vmax 100, Km 2), the rate rises steeply and levels off at Vmax when all active sites are occupied; Km is the substrate concentration giving half of Vmax.',
      'A competitive inhibitor raises Km (here to 6) but the same Vmax is reached at high substrate concentration.',
      'A non-competitive inhibitor lowers Vmax (here to 50) whatever the substrate concentration.',
    ],
  },
  'ab-activation-energy': {
    title: 'Enzymes lower the activation energy',
    w: 300,
    h: 200,
    art: ActivationArt,
    labels: [
      ['Without enzyme', 214, 34, 162, 32],
      ['With enzyme', 230, 74, 176, 82],
      ['Reactants', 52, 108, 52, 120],
      ['Products', 250, 136, 250, 150],
    ],
    facts: [
      'Both reactions start from the same reactants and end with the same products.',
      'The activation energy is the rise from the reactants to the top of the curve.',
      'With an enzyme the peak is much lower, so many more molecules have enough energy to react at body temperature.',
    ],
  },
  'ab-organelles': columnsSpec('Organelles and their jobs', [
    { head: 'Make and send', items: ['nucleus: DNA', 'RER: proteins', 'SER: lipids', 'Golgi: package'] },
    { head: 'Energy', items: ['mitochondria:', 'respiration', 'chloroplasts:', 'photosynthesis'] },
    { head: 'Others', items: ['lysosomes: digest', 'ribosomes: 80S', 'centrioles: spindle', 'vacuole: cell sap'] },
  ], { colW: 116 }),
  'ab-pro-eukaryote': columnsSpec('Prokaryotic and eukaryotic cells', [
    { head: 'Prokaryote', items: ['no nucleus: nucleoid', 'circular DNA, plasmids', '70S ribosomes', 'peptidoglycan wall', '1 to 5 µm'] },
    { head: 'Eukaryote', items: ['nucleus', 'linear chromosomes', '80S ribosomes', 'membrane organelles', '10 to 100 µm'] },
  ], { colW: 150 }),
  'ab-fluid-mosaic': {
    title: 'The fluid mosaic model of the membrane',
    w: 340,
    h: 182,
    art: MembraneArt,
    labels: [
      ['Phospholipid\nbilayer', 80, 58, 94, 64],
      ['Channel\nprotein', 80, 100, 109, 100],
      ['Glycoprotein', 258, 26, 230, 30],
      ['Hydrophilic\nhead', 258, 58, 248, 64],
      ['Hydrophobic\ntails', 258, 92, 246, 84],
      ['Cholesterol', 154, 150, 154, 100],
      ['Extrinsic protein', 205, 174, 205, 139],
    ],
    facts: [
      'Two layers of phospholipids: hydrophilic heads face the water on each side; hydrophobic tails face inwards.',
      'Proteins float in the bilayer like tiles in a mosaic: channel proteins span it; extrinsic proteins sit on a surface.',
      'Cholesterol between the tails regulates fluidity; glycoproteins carry carbohydrate chains used in cell recognition.',
    ],
  },
  'ab-transport-modes': columnsSpec('Crossing membranes', [
    { head: 'Passive', items: ['diffusion', 'facilitated diffusion', 'osmosis', 'no ATP; down', 'the gradient'] },
    { head: 'Active', items: ['carrier pumps', 'against the gradient', 'uses ATP', 'Na⁺/K⁺ pump'] },
    { head: 'Bulk', items: ['endocytosis', 'exocytosis', 'in vesicles', 'uses ATP'] },
  ], { colW: 116 }),
  'ab-plant-tissues': columnsSpec('Plant tissues', [
    { head: 'Parenchyma', items: ['living, thin walls', 'packing, storage'] },
    { head: 'Collenchyma', items: ['living, corners', 'thickened', 'flexible support'] },
    { head: 'Sclerenchyma', items: ['dead, lignified', 'fibres, sclereids'] },
    { head: 'Xylem, phloem', items: ['xylem: water,', 'dead vessels', 'phloem: sugars,', 'sieve tubes'] },
  ], { colW: 102 }),
  'ab-animal-tissues': columnsSpec('Animal tissues', [
    { head: 'Epithelial', items: ['squamous: alveoli', 'cuboidal: kidney', 'columnar: gut', 'ciliated: trachea'] },
    { head: 'Connective', items: ['blood, bone', 'cartilage', 'adipose', 'areolar'] },
    { head: 'Muscle', items: ['skeletal: striated', 'smooth: gut', 'cardiac: branched,', 'myogenic'] },
    { head: 'Nervous', items: ['neurones', 'glial cells'] },
  ], { colW: 104 }),
  'ab-light-reactions': flowSpec('The light-dependent stage', ['Light excites\nelectrons in\nphotosystem II', 'Photolysis:\n2H₂O → 4H⁺\n+ 4e⁻ + O₂', 'Electron chain\npumps H⁺ into the\nthylakoid space', 'Photosystem I:\nNADP becomes\nreduced NADP', 'H⁺ through ATP\nsynthase:\nADP → ATP'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-calvin-cycle': cycleSpec('The Calvin cycle in the stroma', ['RuBP (5C)\n+ CO₂', '2 GP (3C),\nby rubisco', 'GP reduced to\nTP (ATP and\nreduced NADP)', 'One TP in six\nleaves to make\nglucose, starch', 'Five TP in six\nregenerate\nRuBP (ATP)'], { boxW: 112, boxH: 54 }),
  'ab-respiration-overview': flowSpec('Aerobic respiration of one glucose', ['Glycolysis\n(cytoplasm):\nnet 2 ATP', 'Link reaction\n(matrix):\n2 acetyl CoA', 'Krebs cycle\n(matrix): 2 ATP,\n4 CO₂', 'Electron chain\n(cristae): about\n26 to 28 ATP'], { perRow: 2, boxW: 130, boxH: 58 }),
  'ab-krebs': cycleSpec('The Krebs cycle in the mitochondrial matrix', ['Acetyl CoA (2C)\n+ oxaloacetate\n(4C)', 'Citrate (6C)', '5C compound;\nCO₂ and reduced\nNAD released', '4C compound;\nCO₂ and reduced\nNAD released', 'Oxaloacetate;\nATP, reduced FAD\nand NAD made'], { boxW: 112, boxH: 54, centre: 'Two turns per glucose' }),
  'ab-etc': flowSpec('Oxidative phosphorylation', ['Reduced NAD\nand FAD give H\nto the chain', 'H → H⁺ + e⁻;\nelectrons pass\nalong carriers', 'Energy pumps H⁺\ninto the inter-\nmembrane space', 'H⁺ flow back\nthrough ATP\nsynthase: ATP', 'O₂ accepts\nelectrons and H⁺:\nwater forms'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-anaerobic': columnsSpec('Anaerobic respiration', [
    { head: 'Yeast and plants', items: ['pyruvate →', 'ethanal + CO₂', '→ ethanol', '2 ATP per glucose'] },
    { head: 'Mammalian muscle', items: ['pyruvate →', 'lactate', 'oxygen debt later', '2 ATP per glucose'] },
  ], { colW: 150 }),
  'ab-water-pathways': flowSpec('Water from soil to air', ['Soil water\n(highest Ψ)', 'Root hair\ncell: osmosis', 'Cortex: apoplast\nand symplast', 'Endodermis:\nCasparian strip\n→ symplast', 'Xylem: cohesion\nand tension', 'Leaf: evaporation\nthrough stomata\n(lowest Ψ)'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-mass-flow': flowSpec('Mass flow in the phloem', ['Source (leaf):\nsucrose loaded\nby co-transport', 'Water enters by\nosmosis: high\npressure', 'Sap flows along\nthe sieve tubes', 'Sink (root, fruit):\nsucrose\nunloaded', 'Water leaves:\nlow pressure'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-heart-conduction': flowSpec('Conduction of the heartbeat', ['SAN in the\nright atrium\nfires', 'Wave spreads\nover the atria:\nthey contract', 'AVN delays\nit about 0.1 s', 'Bundle of His\ndown the\nseptum', 'Purkyne fibres\nup the ventricle\nwalls', 'Ventricles\ncontract from\nthe apex up'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-cardiac-cycle': {
    title: 'Pressure changes in the left side of the heart',
    w: 340,
    h: 250,
    art: CardiacArt,
    labels: [],
    facts: [
      'The graph is drawn to scale for one cycle of 0.8 s; pressure in kPa (16 kPa is about 120 mm Hg).',
      '1: ventricular pressure rises above atrial pressure, so the atrioventricular valve closes.',
      '2: ventricular pressure exceeds aortic pressure, so the semilunar valve opens and blood is ejected; aortic pressure peaks at about 16 kPa.',
      '3: ventricular pressure falls below aortic pressure, so the semilunar valve closes (the notch in the aorta curve).',
      '4: ventricular pressure falls below atrial pressure, so the atrioventricular valve opens and the ventricle fills.',
    ],
  },
  'ab-ecg': {
    title: 'A normal electrocardiogram',
    w: 340,
    h: 136,
    art: EcgArt,
    labels: [],
    facts: [
      'The P wave shows excitation spreading over the atria.',
      'The QRS complex shows excitation spreading through the ventricles.',
      'The T wave shows the recovery of the ventricles.',
      'The time from one R peak to the next is one heartbeat; 0.8 s gives 75 beats per minute.',
    ],
  },
  'ab-immune-response': columnsSpec('The specific immune response', [
    { head: 'Humoral (B cells)', items: ['antigen selects', 'a B cell clone', 'plasma cells:', 'antibodies', 'memory B cells'] },
    { head: 'Cell-mediated\n(T cells)', items: ['T helper: cytokines', 'T killer: destroys', 'infected cells', 'memory T cells'] },
  ], { colW: 150 }),
  'ab-five-kingdoms': treeSpec('The five kingdoms', 'Living organisms', [
    { name: 'Prokaryotae', items: ['no nucleus', 'bacteria'] },
    { name: 'Protoctista', items: ['mostly single', 'eukaryotic cells', 'Amoeba, algae'] },
    { name: 'Fungi', items: ['chitin walls', 'external', 'digestion'] },
    { name: 'Plantae', items: ['cellulose', 'walls,', 'chlorophyll'] },
    { name: 'Animalia', items: ['no cell walls', 'heterotrophs'] },
  ], { colW: 86 }),
  'ab-gce-0710': columnsSpec('GCE A Level Biology (0710)', [
    { head: 'Paper 1', items: ['multiple choice', '1½ hours'] },
    { head: 'Paper 2', items: ['structured and', 'essay questions', '3 hours'] },
    { head: 'Paper 3', items: ['practical', 'held in May'] },
  ], { colW: 112 }),
};
