// Form 5 Chemistry figures from the 2026/2027 harmonised scheme of work: Le
// Chatelier's principle, the Hofmann voltameter, how soap removes grease, the two
// kinds of polymerisation and the main forms of pollution.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec } from './charts';

const O = '#33414d';

// ---------- Hofmann voltameter ----------
function HofmannArt() {
  return (
    <G>
      {/* reservoir and stem */}
      <Path d="M150 20 Q150 6 162 6 Q174 6 174 20 L170 40 L170 150 L154 150 L154 40 Z" fill="#e3f1fb" stroke={O} strokeWidth={1.2} />
      {/* left tube: hydrogen, twice the volume */}
      <Rect x={60} y={30} width={26} height={170} rx={4} fill="#e3f1fb" stroke={O} strokeWidth={1.3} />
      <Rect x={61} y={31} width={24} height={80} fill="#ffffff" />
      <Line x1={60} y1={111} x2={86} y2={111} stroke="#3f7fc0" strokeWidth={1} />
      {/* right tube: oxygen */}
      <Rect x={238} y={30} width={26} height={170} rx={4} fill="#e3f1fb" stroke={O} strokeWidth={1.3} />
      <Rect x={239} y={31} width={24} height={40} fill="#ffffff" />
      <Line x1={238} y1={71} x2={264} y2={71} stroke="#3f7fc0" strokeWidth={1} />
      {/* taps */}
      <Rect x={66} y={18} width={14} height={12} fill="#c9d2da" stroke={O} strokeWidth={1} />
      <Rect x={244} y={18} width={14} height={12} fill="#c9d2da" stroke={O} strokeWidth={1} />
      {/* bottom connector */}
      <Path d="M73 200 L73 214 L251 214 L251 200" fill="none" stroke={O} strokeWidth={1.3} />
      <Path d="M154 150 L162 214 L170 150" fill="#e3f1fb" stroke={O} strokeWidth={1} />
      {/* electrodes */}
      <Rect x={69} y={168} width={8} height={26} fill="#5a6b78" />
      <Rect x={247} y={168} width={8} height={26} fill="#5a6b78" />
      {/* bubbles */}
      {[0, 1, 2, 3].map((i) => (
        <Circle key={`l${i}`} cx={73 + (i % 2 ? 3 : -3)} cy={160 - i * 12} r={2} fill="none" stroke={O} strokeWidth={0.7} />
      ))}
      {[0, 1].map((i) => (
        <Circle key={`r${i}`} cx={251 + (i % 2 ? 3 : -3)} cy={160 - i * 14} r={2} fill="none" stroke={O} strokeWidth={0.7} />
      ))}
      {/* battery */}
      <Line x1={73} y1={214} x2={73} y2={238} stroke={O} strokeWidth={1.1} />
      <Line x1={251} y1={214} x2={251} y2={238} stroke={O} strokeWidth={1.1} />
      <Line x1={73} y1={238} x2={150} y2={238} stroke={O} strokeWidth={1.1} />
      <Line x1={174} y1={238} x2={251} y2={238} stroke={O} strokeWidth={1.1} />
      {/* cell: the short thick plate (negative) is on the cathode side */}
      <Line x1={154} y1={232} x2={154} y2={244} stroke={O} strokeWidth={3} />
      <Line x1={168} y1={228} x2={168} y2={248} stroke={O} strokeWidth={2} />
      <Txt x={73} y={64} size={9} weight="700">
        H₂
      </Txt>
      <Txt x={251} y={56} size={9} weight="700">
        O₂
      </Txt>
    </G>
  );
}

// ---------- soap and grease ----------
function SoapArt() {
  const n = 12;
  return (
    <G>
      <Rect x={4} y={4} width={300} height={190} rx={6} fill="#e3f1fb" />
      <Circle cx={150} cy={100} r={44} fill="#f2d98a" stroke={O} strokeWidth={1} />
      {Array.from({ length: n }, (_, i) => {
        const a = (i * 2 * Math.PI) / n;
        const x1 = 150 + Math.cos(a) * 26;
        const y1 = 100 + Math.sin(a) * 26;
        const x2 = 150 + Math.cos(a) * 58;
        const y2 = 100 + Math.sin(a) * 58;
        return (
          <G key={i}>
            <Path d={`M${x1} ${y1} L${x2} ${y2}`} stroke={O} strokeWidth={1.6} />
            <Circle cx={x2 + Math.cos(a) * 5} cy={y2 + Math.sin(a) * 5} r={5} fill="#c8463d" stroke={O} strokeWidth={0.8} />
          </G>
        );
      })}
      {/* one soap molecule shown on its own */}
      <Path d="M236 30 L282 30" stroke={O} strokeWidth={1.6} />
      <Circle cx={287} cy={30} r={5} fill="#c8463d" stroke={O} strokeWidth={0.8} />
    </G>
  );
}

export const CHEMISTRY_5 = {
  'le-chatelier': columnsSpec('Le Chatelier’s principle: the equilibrium shifts to oppose a change', [
    { head: 'Change made', items: ['Add more reactant', 'Remove the product', 'Raise the pressure', 'Raise the temperature', 'Add a catalyst'] },
    { head: 'Equilibrium shifts', items: ['Towards the products', 'Towards the products', 'To fewer gas molecules', 'Endothermic direction', 'No shift; reached sooner'] },
  ], { colW: 150, arrow: true }),
  'hofmann-voltameter': {
    title: 'Electrolysis of acidified water in a Hofmann voltameter',
    w: 324,
    h: 252,
    art: HofmannArt,
    labels: [
      ['Hydrogen (twice\nthe volume)', -8, 70, 60, 70],
      ['Oxygen', 332, 52, 264, 52],
      ['Cathode (−)', -8, 182, 69, 182],
      ['Anode (+)', 332, 182, 255, 182],
      ['Dilute sulphuric\nacid', 332, 120, 264, 120],
      ['Reservoir', 214, 12, 172, 14],
    ],
  },
  'soap-action': {
    title: 'How soap lifts a drop of grease into water',
    w: 308,
    h: 198,
    art: SoapArt,
    labels: [
      ['Grease (oil)', -8, 100, 120, 100],
      ['Water-loving head\n(ionic, –COO⁻ Na⁺)', 312, 60, 287, 30],
      ['Oil-loving tail\n(hydrocarbon chain)', 312, 110, 258, 30],
      ['Water', 312, 170, 280, 170],
    ],
  },
  'polymer-types': columnsSpec('Addition and condensation polymerisation', [
    { head: 'Addition', items: ['Monomers have C=C', 'They add on to each other', 'No other product', 'Poly(ethene), PVC'] },
    { head: 'Condensation', items: ['Two kinds of monomer', 'They join, losing water', 'Water is the by-product', 'Nylon, polyester'] },
  ], { colW: 150 }),
  'pollution-effects': columnsSpec('Major forms of chemical pollution', [
    { head: 'Greenhouse\neffect', items: ['CO₂ from fuels', 'Methane: cattle, refuse', 'Global warming'] },
    { head: 'Ozone\ndepletion', items: ['CFCs: old fridges', 'Ozone layer thins', 'More UV: skin cancer'] },
    { head: 'Acid\nrain', items: ['SO₂, nitrogen oxides', 'Dissolve in rain', 'Harms stone, forests'] },
    { head: 'Eutrophication', items: ['Fertiliser, sewage', 'Algae bloom and die', 'Fish die: no oxygen'] },
  ], { colW: 100 }),
};
