// Form 5 Biology figures from the 2026/2027 harmonised scheme of work:
// homeostasis loops, nervous and hormonal control, vegetative propagation, cell
// division, DNA and RNA, crosses (incomplete dominance, sex, sex linkage),
// variation, evolution, pathogens, immunity, an antimicrobial test and the
// rules for biological drawings.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec } from './charts';

const O = '#33414d';

// ---------- a genetic cross (parents, gametes, offspring square) ----------
function crossSpec(title, { names, genotypes, left, top, cells, fills, ratio }) {
  const art = () => {
    const cell = (x, y, t) => (
      <G key={`${x}${y}`}>
        <Rect x={x} y={y} width={64} height={32} fill={fills[t] || '#ffffff'} stroke={O} strokeWidth={1} />
        <Txt x={x + 32} y={y + 20} size={9.5} weight="700">
          {t}
        </Txt>
      </G>
    );
    const gamete = (x, g) => (
      <G key={x}>
        <Circle cx={x} cy={70} r={14} fill="none" stroke={O} strokeWidth={0.8} />
        <Txt x={x} y={73.5} size={9} weight="700">
          {g}
        </Txt>
      </G>
    );
    return (
      <G>
        <Txt x={60} y={26} size={9.5} anchor="start">
          Parents
        </Txt>
        <Txt x={60} y={48} size={9.5} anchor="start">
          Genotypes
        </Txt>
        <Txt x={60} y={73} size={9.5} anchor="start">
          Gametes
        </Txt>
        <Txt x={60} y={140} size={9.5} anchor="start">
          Offspring
        </Txt>
        <Txt x={226} y={26} size={11}>
          {`${names[0]}        ×        ${names[1]}`}
        </Txt>
        <Txt x={226} y={48} size={12} weight="700">
          {`${genotypes[0]}    ×    ${genotypes[1]}`}
        </Txt>
        {gamete(168, left[0])}
        {gamete(200, left[1])}
        {gamete(252, top[0])}
        {gamete(284, top[1])}
        <Txt x={208} y={102} size={10} weight="700">
          {top[0]}
        </Txt>
        <Txt x={272} y={102} size={10} weight="700">
          {top[1]}
        </Txt>
        <Txt x={162} y={128} size={10} weight="700">
          {left[0]}
        </Txt>
        <Txt x={162} y={160} size={10} weight="700">
          {left[1]}
        </Txt>
        {cell(176, 108, cells[0])}
        {cell(240, 108, cells[1])}
        {cell(176, 140, cells[2])}
        {cell(240, 140, cells[3])}
        <Txt x={226} y={198} size={10.5}>
          {ratio}
        </Txt>
      </G>
    );
  };
  return { title, w: 360, h: 210, art, labels: [] };
}

// ---------- mitosis ----------
function Chrom({ x, y, r = 0, c = '#c8463d', split }) {
  return (
    <G transform={`rotate(${r} ${x} ${y})`}>
      {split ? (
        <Line x1={x} y1={y - 7} x2={x} y2={y + 7} stroke={c} strokeWidth={2.6} strokeLinecap="round" />
      ) : (
        <G>
          <Line x1={x - 2} y1={y - 8} x2={x - 2} y2={y + 8} stroke={c} strokeWidth={2.4} strokeLinecap="round" />
          <Line x1={x + 2} y1={y - 8} x2={x + 2} y2={y + 8} stroke={c} strokeWidth={2.4} strokeLinecap="round" />
          <Circle cx={x} cy={y} r={1.8} fill={O} />
        </G>
      )}
    </G>
  );
}
function MitosisArt() {
  const panel = (i, name, children, cell = true) => (
    <G key={name}>
      {cell && <Rect x={6 + i * 84} y={10} width={76} height={76} rx={6} fill="#f4f7fb" stroke={O} strokeWidth={1.1} />}
      {children}
      <Txt x={44 + i * 84} y={102} size={9} weight="700">
        {name}
      </Txt>
    </G>
  );
  return (
    <G>
      {panel(0, 'Interphase', (
        <G>
          <Circle cx={44} cy={48} r={20} fill="#efe6f7" stroke={O} strokeWidth={0.8} strokeDasharray="2 2" />
          <Path d="M34 44 q6 -8 12 0 t12 0 M32 54 q6 6 12 0 t10 2" fill="none" stroke="#c8463d" strokeWidth={1.2} />
        </G>
      ))}
      {panel(1, 'Prophase', (
        <G>
          <Circle cx={128} cy={48} r={22} fill="none" stroke={O} strokeWidth={0.6} strokeDasharray="2 3" />
          <Chrom x={118} y={42} r={20} />
          <Chrom x={136} y={44} r={-30} c="#3f6fb5" />
          <Chrom x={126} y={58} r={70} c="#2f7d4f" />
        </G>
      ))}
      {panel(2, 'Metaphase', (
        <G>
          <Line x1={212} y1={14} x2={212} y2={82} stroke="#9aa7b2" strokeWidth={0.8} strokeDasharray="3 2" />
          <Chrom x={212} y={34} r={90} />
          <Chrom x={212} y={48} r={90} c="#3f6fb5" />
          <Chrom x={212} y={62} r={90} c="#2f7d4f" />
          <Path d="M180 48 L212 34 M180 48 L212 48 M180 48 L212 62 M244 48 L212 34 M244 48 L212 48 M244 48 L212 62" stroke="#c4ccd3" strokeWidth={0.6} />
        </G>
      ))}
      {panel(3, 'Anaphase', (
        <G>
          {[34, 48, 62].map((y, k) => (
            <G key={y}>
              <Chrom x={276} y={y} r={90} split c={['#c8463d', '#3f6fb5', '#2f7d4f'][k]} />
              <Chrom x={316} y={y} r={90} split c={['#c8463d', '#3f6fb5', '#2f7d4f'][k]} />
            </G>
          ))}
          <Txt x={296} y={22} size={7.5}>
            pulled apart
          </Txt>
        </G>
      ))}
      {panel(4, 'Telophase', (
        <G>
          <Rect x={342} y={10} width={76} height={36} rx={6} fill="#f4f7fb" stroke={O} strokeWidth={1.1} />
          <Rect x={342} y={50} width={76} height={36} rx={6} fill="#f4f7fb" stroke={O} strokeWidth={1.1} />
          <Circle cx={380} cy={28} r={11} fill="#efe6f7" stroke={O} strokeWidth={0.8} />
          <Circle cx={380} cy={68} r={11} fill="#efe6f7" stroke={O} strokeWidth={0.8} />
        </G>
      ), false)}
    </G>
  );
}

// ---------- variation ----------
function VariationArt() {
  const bars = [3, 7, 14, 22, 26, 20, 12, 6, 2];
  const x0 = 30;
  const y0 = 130;
  return (
    <G>
      <Line x1={x0} y1={y0} x2={x0 + 170} y2={y0} stroke={O} strokeWidth={1.2} />
      <Line x1={x0} y1={y0} x2={x0} y2={y0 - 112} stroke={O} strokeWidth={1.2} />
      {bars.map((b, i) => (
        <Rect key={i} x={x0 + 4 + i * 18} y={y0 - b * 4} width={18} height={b * 4} fill="#9cc7ea" stroke={O} strokeWidth={0.6} />
      ))}
      <Txt x={x0 + 85} y={y0 + 16} size={9}>
        Height / cm (130 to 175)
      </Txt>
      <Txt x={x0 + 85} y={14} size={9.5} weight="700">
        Continuous: height
      </Txt>
      <Txt x={x0 - 12} y={y0 - 56} size={9} rotate={-90}>
        Number of students
      </Txt>
      <Line x1={250} y1={y0} x2={380} y2={y0} stroke={O} strokeWidth={1.2} />
      <Line x1={250} y1={y0} x2={250} y2={y0 - 112} stroke={O} strokeWidth={1.2} />
      <Rect x={272} y={y0 - 84} width={36} height={84} fill="#f2c94c" stroke={O} strokeWidth={0.8} />
      <Rect x={326} y={y0 - 36} width={36} height={36} fill="#f2c94c" stroke={O} strokeWidth={0.8} />
      <Txt x={290} y={y0 + 14} size={9}>
        can roll
      </Txt>
      <Txt x={344} y={y0 + 14} size={9}>
        cannot
      </Txt>
      <Txt x={315} y={14} size={9.5} weight="700">
        Discontinuous: tongue rolling
      </Txt>
    </G>
  );
}

// ---------- agar plate test of plant extracts ----------
function AgarArt() {
  const disc = (x, y, zone, name) => (
    <G key={name}>
      {zone > 0 && <Circle cx={x} cy={y} r={zone} fill="#fbfcf6" stroke="#9aa7b2" strokeWidth={0.6} strokeDasharray="2 2" />}
      <Circle cx={x} cy={y} r={7} fill="#ffffff" stroke={O} strokeWidth={1} />
    </G>
  );
  return (
    <G>
      <Circle cx={110} cy={100} r={88} fill="#e9dfb8" stroke={O} strokeWidth={1.6} />
      <Circle cx={110} cy={100} r={82} fill="none" stroke={O} strokeWidth={0.6} />
      {disc(80, 66, 24, 'garlic')}
      {disc(146, 80, 16, 'onion')}
      {disc(102, 146, 0, 'water')}
    </G>
  );
}

export const BIOLOGY_6 = {
  'feedback-temperature': cycleSpec('Keeping body temperature near 37 °C by negative feedback', ['Body temperature\nrises (exercise, heat)', 'Brain (hypothalamus)\ndetects the change', 'Sweating; skin vessels\nwiden (vasodilation)', 'More heat lost:\ntemperature falls', 'Back to 37 °C:\nresponse switched off'], { boxW: 116 }),
  'feedback-glucose': cycleSpec('Controlling blood glucose by negative feedback', ['Blood glucose rises\nafter a meal', 'Pancreas releases\ninsulin', 'Liver and muscles\nstore glycogen', 'Glucose falls; if too\nlow, glucagon released', 'Liver changes glycogen\nback to glucose'], { boxW: 116 }),
  'nervous-hormonal': columnsSpec('Nervous and hormonal control compared', [
    { head: 'Nervous', items: ['Electrical impulses', 'Travel along neurones', 'Very fast', 'Short-lived effect', 'Precise target', 'e.g. a reflex'] },
    { head: 'Hormonal', items: ['Chemical hormones', 'Carried in the blood', 'Slower', 'Longer-lasting effect', 'Many target organs', 'e.g. growth, puberty'] },
  ], { colW: 140 }),
  'vegetative-propagation': columnsSpec('Asexual reproduction in plants: vegetative propagation', [
    { head: 'Natural', items: ['Stem tubers: yam, Irish potato', 'Bulbs: onion', 'Corms: cocoyam', 'Rhizomes: ginger', 'Suckers: plantain, banana'] },
    { head: 'Artificial', items: ['Stem cuttings: cassava, sugar cane', 'Grafting: mango, orange', 'Layering: hibiscus, bougainvillea', 'Tissue culture: plantain'] },
  ], { colW: 168 }),
  'mitosis-stages': {
    title: 'The stages of mitosis (three chromosomes shown)',
    w: 424,
    h: 110,
    art: MitosisArt,
    labels: [],
    facts: [
      'Interphase: the cell grows and copies each chromosome; the copies stay joined.',
      'Prophase: the chromosomes coil up, become short and thick, and each is seen as two chromatids; the nuclear membrane breaks down.',
      'Metaphase: the chromosomes line up across the middle (the equator) of the spindle.',
      'Anaphase: the chromatids of each chromosome are pulled apart to opposite ends of the cell.',
      'Telophase: a nucleus forms at each end and the cell divides into two identical cells.',
    ],
  },
  'mitosis-meiosis': columnsSpec('Mitosis and meiosis compared', [
    { head: 'Mitosis', items: ['One division', 'Two daughter cells', 'Same number of chromosomes', 'Cells identical to parent', 'Growth, repair, asexual'] },
    { head: 'Meiosis', items: ['Two divisions', 'Four daughter cells', 'Half the chromosomes', 'Cells all different', 'Makes gametes'] },
  ], { colW: 150 }),
  'dna-rna': columnsSpec('DNA and RNA compared', [
    { head: 'DNA', items: ['Two strands (double helix)', 'Sugar: deoxyribose', 'Bases A, T, C, G', 'A pairs with T, C with G', 'Stays in the nucleus'] },
    { head: 'RNA', items: ['One strand', 'Sugar: ribose', 'Bases A, U, C, G', 'Uracil instead of thymine', 'Carries the code out'] },
  ], { colW: 150 }),
  'incomplete-dominance': crossSpec('Incomplete dominance: crossing two pink flowers', {
    names: ['Pink', 'Pink'],
    genotypes: ['RW', 'RW'],
    left: ['R', 'W'],
    top: ['R', 'W'],
    cells: ['RR', 'RW', 'RW', 'WW'],
    fills: { RR: '#f6c7bf', RW: '#fbe1ec', WW: '#ffffff' },
    ratio: '1 red : 2 pink : 1 white',
  }),
  'sex-determination': crossSpec('How the sex of a child is decided', {
    names: ['Mother', 'Father'],
    genotypes: ['XX', 'XY'],
    left: ['X', 'X'],
    top: ['X', 'Y'],
    cells: ['XX', 'XY', 'XX', 'XY'],
    fills: { XX: '#fbe1ec', XY: '#e6eef8' },
    ratio: '1 girl : 1 boy (a 50% chance each time)',
  }),
  'sex-linkage': crossSpec('Haemophilia: a carrier mother and a normal father', {
    names: ['Carrier mother', 'Normal father'],
    genotypes: ['XH Xh', 'XH Y'],
    left: ['XH', 'Xh'],
    top: ['XH', 'Y'],
    cells: ['XH XH', 'XH Y', 'XH Xh', 'Xh Y'],
    fills: { 'XH XH': '#e6f1df', 'XH Y': '#e6f1df', 'XH Xh': '#fff4d6', 'Xh Y': '#f8d7d4' },
    ratio: 'normal girl, normal boy, carrier girl, haemophiliac boy',
  }),
  'variation-graphs': {
    title: 'Continuous and discontinuous variation in a class',
    w: 400,
    h: 150,
    art: VariationArt,
    labels: [],
    facts: [
      'Continuous variation, such as height: the values form a smooth range with no clear groups, so they are shown as a histogram with most people near the middle.',
      'Discontinuous variation, such as tongue rolling: each person is in one clear group or another, with nothing in between, so it is shown as a bar chart.',
    ],
  },
  'natural-selection': flowSpec('Evolution by natural selection', ['Variation: individuals\nof a species differ', 'More young are born\nthan can survive', 'Struggle for food,\nspace and mates', 'The best adapted\nsurvive and breed', 'They pass on their\nuseful genes', 'Over many generations\nthe species changes'], { boxW: 112 }),
  'homologous-limbs': columnsSpec('Homologous structures: the same bones used for different jobs', [
    { head: 'Human arm\ngrasping', items: ['Humerus', 'Radius and ulna', 'Wrist bones', 'Five digits'] },
    { head: 'Bat wing\nflying', items: ['Humerus', 'Radius and ulna', 'Wrist bones', 'Five long digits'] },
    { head: 'Whale flipper\nswimming', items: ['Humerus', 'Radius and ulna', 'Wrist bones', 'Five digits in a paddle'] },
  ], { colW: 120 }),
  'pathogen-types': columnsSpec('The four kinds of pathogen', [
    { head: 'Viruses', items: ['Live only in cells', 'HIV/AIDS', 'Measles, polio', 'Ebola'] },
    { head: 'Bacteria', items: ['Cells, no nucleus', 'Cholera', 'Typhoid', 'Tuberculosis'] },
    { head: 'Fungi', items: ['Threads and spores', 'Ringworm', 'Athlete’s foot', 'Thrush'] },
    { head: 'Protoctists', items: ['Cells with a nucleus', 'Malaria', 'Amoebic dysentery', 'Sleeping sickness'] },
  ], { colW: 96 }),
  'immunity-types': columnsSpec('Kinds of immunity', [
    { head: 'Active natural', items: ['Made after an infection', 'Long-lasting'] },
    { head: 'Active artificial', items: ['Made after a vaccine', 'Long-lasting'] },
    { head: 'Passive natural', items: ['Antibodies from mother', 'Short-lived'] },
    { head: 'Passive artificial', items: ['Ready-made serum injected', 'Fast but short-lived'] },
  ], { colW: 114 }),
  'agar-diffusion': {
    title: 'Testing plant extracts on bacteria grown on agar',
    w: 220,
    h: 200,
    art: AgarArt,
    labels: [
      ['Garlic extract:\nwide clear zone', 240, 50, 80, 66],
      ['Onion extract:\nsmaller clear zone', 240, 100, 146, 80],
      ['Water (control):\nno clear zone', 240, 150, 102, 146],
      ['Bacteria growing\non agar', -14, 170, 50, 150],
    ],
  },
  'drawing-rules': flowSpec('Rules for a biological drawing', ['Sharp HB pencil;\nclean single lines', 'Large, in proportion,\nno shading', 'Labels on ruled lines\nthat do not cross', 'Labels in a column,\nlines touch the part', 'A title, the view\nand the magnification'], { boxW: 116 }),
};
