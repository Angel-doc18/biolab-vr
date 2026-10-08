// Form 4 Chemistry figures from the 2026/2027 harmonised scheme of work: the two
// isomers of butane (C₄H₁₀) drawn as displayed formulae.
import { G, Line } from 'react-native-svg';
import { Txt } from './Diagram';

const O = '#33414d';
const S = 30; // grid unit

// A displayed formula from carbon positions (grid units) and C–C bonds. Each
// carbon gets hydrogens on the sides not taken by its bonds, up and down first,
// so that every carbon has four bonds.
const DIRS = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];
function Displayed({ x0, y0, carbons, bonds }) {
  const at = ([c, r]) => [x0 + c * S, y0 + r * S];
  const out = [];
  bonds.forEach(([a, b], i) => {
    const [x1, y1] = at(carbons[a]);
    const [x2, y2] = at(carbons[b]);
    const len = Math.hypot(x2 - x1, y2 - y1);
    const ux = (x2 - x1) / len;
    const uy = (y2 - y1) / len;
    out.push(<Line key={`b${i}`} x1={x1 + ux * 8} y1={y1 + uy * 8} x2={x2 - ux * 8} y2={y2 - uy * 8} stroke={O} strokeWidth={1.4} />);
  });
  carbons.forEach((c, i) => {
    const [x, y] = at(c);
    const used = bonds
      .filter(([a, b]) => a === i || b === i)
      .map(([a, b]) => {
        const o = carbons[a === i ? b : a];
        return [Math.sign(o[0] - c[0]), Math.sign(o[1] - c[1])];
      });
    const free = DIRS.filter(([dc, dr]) => !used.some(([uc, ur]) => uc === dc && ur === dr));
    free.slice(0, 4 - used.length).forEach(([dc, dr], k) => {
      const hx = x + dc * S;
      const hy = y + dr * S;
      out.push(<Line key={`h${i}-${k}l`} x1={x + dc * 8} y1={y + dr * 8} x2={hx - dc * 7} y2={hy - dr * 7} stroke={O} strokeWidth={1.2} />);
      out.push(
        <Txt key={`h${i}-${k}`} x={hx} y={hy + 3.5} size={10}>
          H
        </Txt>
      );
    });
    out.push(
      <Txt key={`c${i}`} x={x} y={y + 4} size={11} weight="700">
        C
      </Txt>
    );
  });
  return <G>{out}</G>;
}

function ButaneArt() {
  return (
    <G>
      <Displayed x0={40} y0={50} carbons={[[0, 0], [1, 0], [2, 0], [3, 0]]} bonds={[[0, 1], [1, 2], [2, 3]]} />
      <Txt x={85} y={170} size={10} weight="700">
        butane
      </Txt>
      <Txt x={85} y={183} size={9}>
        straight chain, b.p. about 0 °C
      </Txt>
      <Displayed x0={230} y0={50} carbons={[[0, 0], [1, 0], [2, 0], [1, 2]]} bonds={[[0, 1], [1, 2], [1, 3]]} />
      <Txt x={260} y={170} size={10} weight="700">
        2-methylpropane
      </Txt>
      <Txt x={260} y={183} size={9}>
        branched, b.p. about −12 °C
      </Txt>
    </G>
  );
}

export const CHEMISTRY_4 = {
  'butane-isomers': {
    title: 'The two structural isomers of C₄H₁₀',
    w: 340,
    h: 192,
    art: ButaneArt,
    labels: [],
    facts: [
      'Butane: the four carbon atoms are joined in one straight chain.',
      '2-methylpropane: three carbons form a chain and the fourth is a branch on the middle carbon.',
      'Both have the molecular formula C₄H₁₀ but different structures, so they are structural isomers. The branched one has the lower boiling point.',
    ],
  },
};
