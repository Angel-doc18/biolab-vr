// Mathematics figures for Form 5: the gradient of a curve, a histogram with
// unequal class widths, measures of spread, the sample space of two dice, a
// tree diagram without replacement, the angles of a regular hexagon, a truth
// table, the diagonal of a cuboid and the mock examination cycle. Graphs are
// drawn to scale.
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, cycleSpec } from './charts';
import { Arc, Axes, at, poly } from './maths2';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#2f7d4f';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

// ---------- the gradient of y = x² at (2, 4) ----------
function TangentArt() {
  const X = (x) => 40 + x * 50;
  const Y = (y) => 210 - y * 15;
  const curve = range(69, (i) => i * 0.05)
    .map((x, i) => `${i ? 'L' : 'M'}${X(x).toFixed(1)} ${Y(x * x).toFixed(1)}`)
    .join(' ');
  return (
    <G>
      <Axes ox={40} oy={210} ux={50} uy={15} x0={0} x1={4} y0={0} y1={12} />
      <Path d={curve} fill="none" stroke={BLUE} strokeWidth={2} />
      <Line x1={X(1)} y1={Y(0)} x2={X(3.2)} y2={Y(8.8)} stroke={RED} strokeWidth={1.8} />
      <Line x1={X(1.5)} y1={Y(2)} x2={X(3)} y2={Y(2)} stroke={GREEN} strokeWidth={1.5} strokeDasharray="5 3" />
      <Line x1={X(3)} y1={Y(2)} x2={X(3)} y2={Y(8)} stroke={GREEN} strokeWidth={1.5} strokeDasharray="5 3" />
      <Circle cx={X(2)} cy={Y(4)} r={4} fill={RED} />
      <Circle cx={X(1.5)} cy={Y(2)} r={2.8} fill={O} />
      <Circle cx={X(3)} cy={Y(8)} r={2.8} fill={O} />
      <Txt x={X(2) - 8} y={Y(4) - 6} size={9} anchor="end" weight="700" fill={RED}>
        (2, 4)
      </Txt>
      <Txt x={X(2.25)} y={Y(2) + 14} size={9} weight="700" fill={GREEN}>
        run = 1.5
      </Txt>
      <Txt x={X(3) + 6} y={Y(5) + 3} size={9} anchor="start" weight="700" fill={GREEN}>
        rise = 6
      </Txt>
      <Txt x={X(3.2) + 6} y={Y(8.8) + 4} size={9} anchor="start" weight="700" fill={RED}>
        tangent
      </Txt>
      <Txt x={X(3.4) + 6} y={Y(11.2)} size={9} anchor="start" weight="700" fill={BLUE}>
        y = x²
      </Txt>
      <Txt x={150} y={236} size={9.5} weight="700">
        gradient at (2, 4) = 6 ÷ 1.5 = 4
      </Txt>
    </G>
  );
}

// ---------- ages in a village survey ----------
function HistogramArt() {
  const X = (a) => 46 + a * 3.6;
  const Y = (d) => 180 - d * 32;
  const bars = [
    [0, 10, 3, 30],
    [10, 20, 4, 40],
    [20, 40, 2.5, 50],
    [40, 70, 1, 30],
  ];
  return (
    <G>
      {[1, 2, 3, 4].map((d) => (
        <G key={d}>
          <Line x1={X(0)} y1={Y(d)} x2={X(70)} y2={Y(d)} stroke="#e3e8ee" strokeWidth={1} />
          <Txt x={41} y={Y(d) + 3} size={8} anchor="end" fill={MUTED}>
            {`${d}`}
          </Txt>
        </G>
      ))}
      {bars.map(([a, b, d, f]) => (
        <G key={a}>
          <Rect x={X(a)} y={Y(d)} width={X(b) - X(a)} height={Y(0) - Y(d)} fill="#9cc0e8" stroke={O} strokeWidth={1.2} />
          <Txt x={(X(a) + X(b)) / 2} y={(Y(d) + Y(0)) / 2 + 4} size={10} weight="700">
            {`${f}`}
          </Txt>
        </G>
      ))}
      <Line x1={X(0)} y1={Y(0)} x2={X(70) + 8} y2={Y(0)} stroke={O} strokeWidth={1.3} />
      <Line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(4.5)} stroke={O} strokeWidth={1.3} />
      {[0, 10, 20, 30, 40, 50, 60, 70].map((a) => (
        <Txt key={a} x={X(a)} y={193} size={8} fill={MUTED}>
          {`${a}`}
        </Txt>
      ))}
      <Txt x={46} y={24} size={8.5} anchor="start" fill={MUTED}>
        frequency density (people per year of age)
      </Txt>
      <Txt x={172} y={212} size={8.5} fill={MUTED}>
        age (years)
      </Txt>
    </G>
  );
}

// ---------- the sample space of two dice ----------
function SampleSpaceArt() {
  const x0 = 80;
  const y0 = 50;
  const c = 30;
  return (
    <G>
      <Txt x={x0 + 3 * c} y={18} size={9.5} weight="700">
        first die
      </Txt>
      <Txt x={24} y={y0 + 3 * c} size={9.5} weight="700" rotate={-90}>
        second die
      </Txt>
      {range(6, (i) => (
        <G key={`h${i}`}>
          <Txt x={x0 + i * c + c / 2} y={y0 - 8} size={9.5} weight="700" fill={MUTED}>
            {`${i + 1}`}
          </Txt>
          <Txt x={x0 - 8} y={y0 + i * c + c / 2 + 4} size={9.5} anchor="end" weight="700" fill={MUTED}>
            {`${i + 1}`}
          </Txt>
        </G>
      ))}
      {range(36, (k) => {
        const i = k % 6;
        const j = Math.floor(k / 6);
        const s = i + j + 2;
        return (
          <G key={k}>
            <Rect x={x0 + i * c} y={y0 + j * c} width={c} height={c} fill={s === 8 ? '#fbe3a6' : '#ffffff'} stroke={O} strokeWidth={0.8} />
            <Txt x={x0 + i * c + c / 2} y={y0 + j * c + c / 2 + 4} size={10} weight={s === 8 ? '700' : '500'}>
              {`${s}`}
            </Txt>
          </G>
        );
      })}
      <Txt x={170} y={246} size={9}>
        5 of the 36 totals are 8: P(8) = 5/36
      </Txt>
    </G>
  );
}

// ---------- two sweets without replacement ----------
function TreeArt() {
  const S = [16, 105];
  const N = { R: [110, 55], G: [110, 155], RR: [210, 30], RG: [210, 80], GR: [210, 130], GG: [210, 180] };
  const edge = (a, b) => <Line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={O} strokeWidth={1.4} />;
  const node = (p, t) => (
    <G>
      <Circle cx={p[0]} cy={p[1]} r={10} fill={t === 'R' ? RED : GREEN} />
      <Txt x={p[0]} y={p[1] + 4} size={10} weight="700" fill="#ffffff">
        {t}
      </Txt>
    </G>
  );
  const p = (x, y, t) => (
    <Txt x={x} y={y} size={9} weight="700" fill={BLUE}>
      {t}
    </Txt>
  );
  const out = (y, t) => (
    <Txt x={228} y={y + 4} size={8.5} anchor="start">
      {t}
    </Txt>
  );
  return (
    <G>
      {edge(S, N.R)}
      {edge(S, N.G)}
      {edge(N.R, N.RR)}
      {edge(N.R, N.RG)}
      {edge(N.G, N.GR)}
      {edge(N.G, N.GG)}
      <Circle cx={S[0]} cy={S[1]} r={3} fill={O} />
      {node(N.R, 'R')}
      {node(N.G, 'G')}
      {node(N.RR, 'R')}
      {node(N.RG, 'G')}
      {node(N.GR, 'R')}
      {node(N.GG, 'G')}
      {p(56, 70, '5/8')}
      {p(56, 150, '3/8')}
      {p(158, 33, '4/7')}
      {p(158, 86, '3/7')}
      {p(158, 128, '5/7')}
      {p(158, 184, '2/7')}
      {out(30, 'RR: 5/8 × 4/7 = 20/56')}
      {out(80, 'RG: 5/8 × 3/7 = 15/56')}
      {out(130, 'GR: 3/8 × 5/7 = 15/56')}
      {out(180, 'GG: 3/8 × 2/7 = 6/56')}
      <Txt x={110} y={14} size={8.5} fill={MUTED}>
        first sweet
      </Txt>
      <Txt x={210} y={14} size={8.5} fill={MUTED}>
        second sweet
      </Txt>
    </G>
  );
}

// ---------- the angles of a regular hexagon ----------
function PolygonArt() {
  const V = range(6, (k) => at(95, 105, 72, 60 * k));
  const ext = at(V[1][0], V[1][1], 40, 120);
  const line = (a, b, c = O, w = 1.6, dash) => <Line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={c} strokeWidth={w} strokeDasharray={dash} />;
  const t = (y, s, bold) => (
    <Txt x={190} y={y} size={9} anchor="start" weight={bold ? '700' : '500'}>
      {s}
    </Txt>
  );
  return (
    <G>
      <Polygon points={poly(V)} fill="#e6eef8" stroke={O} strokeWidth={1.6} />
      {line(V[3], V[1], MUTED, 1, '4 3')}
      {line(V[3], V[0], MUTED, 1, '4 3')}
      {line(V[3], V[5], MUTED, 1, '4 3')}
      {line(V[1], ext, O, 1.2, '5 3')}
      <Arc cx={V[0][0]} cy={V[0][1]} r={16} a1={120} a2={240} c={RED} w={1.5} />
      <Arc cx={V[1][0]} cy={V[1][1]} r={18} a1={120} a2={180} c={GREEN} w={1.5} />
      <Txt x={V[0][0] - 30} y={V[0][1] - 9} size={9} weight="700" fill={RED}>
        120°
      </Txt>
      <Txt x={V[1][0] - 30} y={V[1][1] - 12} size={9} weight="700" fill={GREEN}>
        60°
      </Txt>
      {t(50, 'hexagon: n = 6', true)}
      {t(72, 'interior sum = (n − 2) × 180°')}
      {t(88, '= 4 × 180° = 720°')}
      {t(110, 'each interior angle = 120°')}
      {t(132, 'exterior angles add up to 360°')}
      {t(148, 'each exterior angle')}
      {t(164, '= 360° ÷ 6 = 60°')}
    </G>
  );
}

// ---------- a truth table ----------
function TruthTableArt() {
  const head = ['p', 'q', '~p', 'p ∧ q', 'p ∨ q', 'p ⇒ q', 'p ⇔ q'];
  const rows = [
    ['T', 'T', 'F', 'T', 'T', 'T', 'T'],
    ['T', 'F', 'F', 'F', 'T', 'F', 'F'],
    ['F', 'T', 'T', 'F', 'T', 'T', 'F'],
    ['F', 'F', 'T', 'F', 'F', 'T', 'T'],
  ];
  const w = 44;
  const h = 24;
  const x0 = 11;
  const y0 = 14;
  return (
    <G>
      {head.map((s, i) => (
        <G key={`h${i}`}>
          <Rect x={x0 + i * w} y={y0} width={w} height={h} fill="#e6eef8" stroke={O} strokeWidth={1} />
          <Txt x={x0 + i * w + w / 2} y={y0 + 16} size={9.5} weight="700">
            {s}
          </Txt>
        </G>
      ))}
      {rows.map((r, j) =>
        r.map((v, i) => (
          <G key={`${j}${i}`}>
            <Rect x={x0 + i * w} y={y0 + (j + 1) * h} width={w} height={h} fill="#ffffff" stroke={O} strokeWidth={1} />
            <Txt x={x0 + i * w + w / 2} y={y0 + (j + 1) * h + 16} size={10} weight="700" fill={v === 'T' ? GREEN : RED}>
              {v}
            </Txt>
          </G>
        ))
      )}
    </G>
  );
}

// ---------- the diagonal of a cuboid and its angle with the base ----------
function CuboidArt() {
  const P = { A: [40, 170], B: [200, 170], C: [260, 120], D: [100, 120], E: [40, 80], F: [200, 80], G: [260, 30], H: [100, 30] };
  const e = (a, b, c = O, w = 1.5, dash) => <Line x1={P[a][0]} y1={P[a][1]} x2={P[b][0]} y2={P[b][1]} stroke={c} strokeWidth={w} strokeDasharray={dash} />;
  const name = (k, dx, dy, anchor) => (
    <Txt x={P[k][0] + dx} y={P[k][1] + dy} size={9.5} anchor={anchor} weight="700">
      {k}
    </Txt>
  );
  return (
    <G>
      <Polygon points={poly([P.A, P.B, P.C, P.D])} fill="#e6eef8" />
      {['AB', 'BC', 'CG', 'GF', 'FB', 'AE', 'EF', 'EH', 'HG'].map((s) => (
        <G key={s}>{e(s[0], s[1])}</G>
      ))}
      {['AD', 'DC', 'DH'].map((s) => (
        <G key={s}>{e(s[0], s[1], MUTED, 1.1, '4 3')}</G>
      ))}
      {e('A', 'C', BLUE, 2)}
      {e('A', 'G', RED, 2.2)}
      {e('C', 'G', GREEN, 2.2)}
      <Arc cx={40} cy={170} r={40} a1={12.8} a2={32.5} c={RED} w={1.5} />
      <Txt x={92} y={152} size={10} italic weight="700" fill={RED}>
        θ
      </Txt>
      {name('A', -6, 10, 'end')}
      {name('B', 4, 14, 'start')}
      {name('C', 6, 10, 'start')}
      {name('D', -6, -4, 'end')}
      {name('E', -6, 4, 'end')}
      {name('F', 6, 12, 'start')}
      {name('G', 6, -2, 'start')}
      {name('H', -6, -2, 'end')}
      <Txt x={120} y={186} size={9} weight="700">
        8 cm
      </Txt>
      <Txt x={236} y={156} size={9} anchor="start" weight="700">
        6 cm
      </Txt>
      <Txt x={266} y={80} size={9} anchor="start" weight="700" fill={GREEN}>
        5 cm
      </Txt>
    </G>
  );
}

export const MATHS_3 = {
  'tangent-gradient': {
    title: 'The gradient of y = x² at (2, 4), from a tangent',
    w: 290,
    h: 242,
    art: TangentArt,
    labels: [],
    facts: ['The tangent touches the curve y = x² at (2, 4).', 'Two points on the tangent, (1.5, 2) and (3, 8), give a run of 1.5 and a rise of 6.', 'The gradient of the curve at (2, 4) is 6 ÷ 1.5 = 4.'],
  },
  'histogram-unequal': {
    title: 'A histogram with unequal class widths: ages in a village survey',
    w: 320,
    h: 218,
    art: HistogramArt,
    labels: [],
    facts: ['The classes are 0–10, 10–20, 20–40 and 40–70 years, with 30, 40, 50 and 30 people.', 'The heights are the frequency densities 3, 4, 2.5 and 1: frequency ÷ class width.', 'The area of each bar shows the number of people in that class.'],
  },
  'spread-measures': columnsSpec('Three measures of spread', [
    { head: 'Range', items: ['Largest − smallest', 'Quick to find', 'Changed by one extreme value'] },
    { head: 'Interquartile range', items: ['Q₃ − Q₁', 'Spread of the middle half', 'Not changed by extremes'] },
    { head: 'Standard deviation', items: ['√(Σ(x − mean)² ÷ n)', 'Uses every value', 'In the units of the data'] },
  ], { colW: 120 }),
  'sample-space': {
    title: 'The sample space for the total of two dice',
    w: 300,
    h: 252,
    art: SampleSpaceArt,
    labels: [],
    facts: ['Two dice give 6 × 6 = 36 equally likely outcomes.', 'The totals run from 2 to 12; a total of 7 is the most likely, with 6 outcomes.', 'Five outcomes give a total of 8, so P(8) = 5/36.'],
  },
  'tree-diagram': {
    title: 'Taking two sweets without replacement from 5 red and 3 green',
    w: 340,
    h: 200,
    art: TreeArt,
    labels: [],
    facts: ['The first sweet is red with probability 5/8 and green with probability 3/8.', 'After a red sweet, 4 red and 3 green are left, so the second branches are 4/7 and 3/7.', 'After a green sweet, 5 red and 2 green are left, so the second branches are 5/7 and 2/7.', 'Multiplying along the branches gives 20/56, 15/56, 15/56 and 6/56, which add up to 1.'],
  },
  'polygon-angles': {
    title: 'The angles of a regular hexagon',
    w: 330,
    h: 200,
    art: PolygonArt,
    labels: [],
    facts: ['From one vertex the hexagon splits into 4 triangles, so its interior angles add up to 4 × 180° = 720°.', 'Each interior angle of the regular hexagon is 720° ÷ 6 = 120°.', 'Each exterior angle is 360° ÷ 6 = 60°, and interior + exterior = 180°.'],
  },
  'truth-table': {
    title: 'The truth table of the logical connectives',
    w: 330,
    h: 150,
    art: TruthTableArt,
    labels: [],
    facts: ['p ∧ q (and) is true only when p and q are both true.', 'p ∨ q (or) is false only when both are false.', 'p ⇒ q (if … then) is false only when p is true and q is false.', 'p ⇔ q (if and only if) is true when p and q have the same truth value.'],
  },
  'cuboid-3d': {
    title: 'The diagonal AG of a cuboid and its angle θ with the base',
    w: 300,
    h: 196,
    art: CuboidArt,
    labels: [],
    facts: ['The base diagonal AC = √(8² + 6²) = 10 cm.', 'The space diagonal AG = √(10² + 5²) ≈ 11.2 cm.', 'AC is the projection of AG on the base, so tan θ = 5 ÷ 10 and θ ≈ 26.6°.'],
  },
  'mock-cycle': cycleSpec('Using a mock examination', ['Sit a full paper\nunder time limits', 'Mark it with\nthe scheme', 'Sort the errors\nby kind and topic', 'Re-learn and\npractise', 'Try similar\nquestions']),
};
