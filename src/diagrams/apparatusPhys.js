// Physics practical apparatus. Each art(state) draws the set-up as it is at that
// moment of the experiment, so the same drawing is the labelled diagram and the
// live view while the student takes readings.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { Beaker, CellSymbol, LampSymbol, Meter, O, ResistorSymbol, Stand, TestTube, Thermometer, WATER, Wire } from './kit';

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const RED = '#c8463d';
const BLUE = '#3f6fb5';
const deg = (a) => (a * Math.PI) / 180;

function Readout({ x, y, text, w = 70 }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={18} rx={3} fill="#1f2a33" />
      <Txt x={x + w / 2} y={y + 13} size={10} weight="700" fill="#9ef0b5">{text}</Txt>
    </G>
  );
}
function Arrow({ x1, y1, x2, y2, c = O, w = 1.4, size = 6 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}
// A dial meter with a needle: v from 0 to 1 across the scale.
function Dial({ x, y, r = 22, v = 0, letter, centre = false }) {
  const a = centre ? -60 + 120 * v : -60 + 120 * v;
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Path d={`M${x - r * 0.75} ${y + 2} A${r * 0.85} ${r * 0.85} 0 0 1 ${x + r * 0.75} ${y + 2}`} fill="none" stroke="#9aa3ab" strokeWidth={1} />
      <Line x1={x} y1={y + r * 0.35} x2={x + Math.sin(deg(a)) * r * 0.85} y2={y + r * 0.35 - Math.cos(deg(a)) * r * 0.85} stroke={RED} strokeWidth={1.6} />
      <Circle cx={x} cy={y + r * 0.35} r={2} fill={O} />
      {!!letter && <Txt x={x} y={y + r * 0.8} size={8} weight="700">{letter}</Txt>}
    </G>
  );
}

// ---------- pendulum ----------
function PendulumArt(s = {}) {
  const len = s.len ?? 60; // cm
  const L = 70 + len * 1.5;
  const a = deg(s.angle ?? 10);
  const bx = 160 + Math.sin(a) * L;
  const by = 26 + Math.cos(a) * L;
  return (
    <G>
      <Stand x={50} y={10} h={240} clampY={26} clampTo={152} />
      <Rect x={152} y={20} width={14} height={12} rx={2} fill="#b98b5e" stroke={O} strokeWidth={0.8} />
      <Line x1={160} y1={32} x2={160} y2={32 + L + 20} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="4 3" />
      <Path d={`M${160 - Math.sin(deg(10)) * L} ${26 + Math.cos(deg(10)) * L} A${L} ${L} 0 0 0 ${160 + Math.sin(deg(10)) * L} ${26 + Math.cos(deg(10)) * L}`} fill="none" stroke="#c4cbd2" strokeWidth={1} strokeDasharray="3 3" />
      <Line x1={160} y1={32} x2={bx} y2={by} stroke={O} strokeWidth={1.2} />
      <Circle cx={bx} cy={by} r={9} fill="#8d969f" stroke={O} strokeWidth={1.2} />
      <Readout x={196} y={40} text={s.reading || `l = ${len} cm`} w={84} />
    </G>
  );
}

// ---------- density ----------
function DensityArt(s = {}) {
  const vol = s.vol ?? 20;
  const top = 200 - 50 * 1.6 - vol * 1.6;
  return (
    <G>
      <Rect x={20} y={170} width={110} height={34} rx={4} fill="#d9dee3" stroke={O} strokeWidth={1.2} />
      <Rect x={34} y={162} width={82} height={8} fill="#a5adb5" stroke={O} strokeWidth={0.8} />
      <Readout x={40} y={180} text={`${(s.mass ?? 0).toFixed(1)} g`} />
      <Rect x={55} y={136} width={40} height={26} rx={5} fill={s.colour || '#8d969f'} stroke={O} strokeWidth={1} />
      <Rect x={190} y={30} width={50} height={174} fill="#f4f9fc" stroke={O} strokeWidth={1.4} />
      <Rect x={191.5} y={top} width={47} height={202 - top} fill={WATER} />
      {range(11, (i) => (
        <G key={i}>
          <Line x1={190} y1={200 - i * 16} x2={i % 5 ? 198 : 204} y2={200 - i * 16} stroke={O} strokeWidth={0.8} />
          {i % 2 === 0 && <Txt x={250} y={203 - i * 16} size={7} anchor="start">{i * 10}</Txt>}
        </G>
      ))}
      {vol > 0 && <Rect x={200} y={184 - Math.min(40, vol * 0.9)} width={30} height={Math.min(40, vol * 0.9)} rx={4} fill={s.colour || '#8d969f'} stroke={O} strokeWidth={0.8} />}
      <Rect x={182} y={202} width={66} height={6} fill="#c4cbd2" stroke={O} strokeWidth={0.8} />
    </G>
  );
}

// ---------- Hooke's law ----------
function HookeLiveArt(s = {}) {
  const load = s.load ?? 2;
  const ext = s.ext ?? 4; // cm
  const top = 30;
  const natural = 60;
  const len = natural + ext * 5;
  const coils = 16;
  const zig = range(coils * 2 + 1, (i) => `${i ? 'L' : 'M'}${i % 2 ? 150 : 140} ${top + 8 + (i * (len - 16)) / (coils * 2)}`).join(' ');
  const bottom = top + len;
  return (
    <G>
      <Stand x={50} y={10} h={240} clampY={26} clampTo={150} />
      <Line x1={145} y1={26} x2={145} y2={top + 8} stroke={O} strokeWidth={1.2} />
      <Path d={zig} fill="none" stroke={O} strokeWidth={1.4} />
      <Line x1={145} y1={bottom - 8} x2={145} y2={bottom + 4} stroke={O} strokeWidth={1.2} />
      <Line x1={145} y1={bottom + 4} x2={180} y2={bottom + 4} stroke={RED} strokeWidth={1.4} />
      <Rect x={135} y={bottom + 4} width={20} height={4} fill="#5f6b75" />
      {range(Math.max(0, Math.round(load)), (i) => (
        <Rect key={i} x={133} y={bottom + 8 + i * 7} width={24} height={6} rx={1.5} fill="#8d969f" stroke={O} strokeWidth={0.6} />
      ))}
      <Rect x={180} y={30} width={16} height={210} fill="#f7e8b5" stroke={O} strokeWidth={1} />
      {range(43, (i) => (
        <Line key={`r${i}`} x1={180} y1={30 + i * 5} x2={180 + (i % 2 ? 4 : 8)} y2={30 + i * 5} stroke={O} strokeWidth={0.6} />
      ))}
      <Readout x={208} y={40} text={`${load} N`} w={56} />
    </G>
  );
}

// ---------- moments ----------
function MomentsLiveArt(s = {}) {
  const x = s.x ?? 30; // cm from the pivot, known weight on the left
  const y = s.y ?? 20; // cm, unknown on the right
  const px = (cm) => 180 + cm * 3;
  return (
    <G>
      <Rect x={30} y={80} width={300} height={8} fill="#f2d675" stroke={O} strokeWidth={1.2} />
      {range(21, (i) => (
        <Line key={i} x1={30 + i * 15} y1={80} x2={30 + i * 15} y2={i % 2 ? 84 : 87} stroke={O} strokeWidth={0.6} />
      ))}
      <Polygon points="180,88 168,116 192,116" fill="#9aa3ab" stroke={O} strokeWidth={1.2} />
      <Rect x={150} y={116} width={60} height={6} fill="#7d868f" />
      <Line x1={px(-x)} y1={88} x2={px(-x)} y2={112} stroke={O} strokeWidth={1} />
      <Rect x={px(-x) - 11} y={112} width={22} height={22} rx={2} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Txt x={px(-x)} y={127} size={8} weight="700" fill="#ffffff">2 N</Txt>
      <Line x1={px(y)} y1={88} x2={px(y)} y2={108} stroke={O} strokeWidth={1} />
      <Circle cx={px(y)} cy={120} r={13} fill="#c87a4a" stroke={O} strokeWidth={1} />
      <Txt x={px(y)} y={124} size={9} weight="700" fill="#ffffff">?</Txt>
      <Readout x={140} y={140} text={`${x} cm | ${y.toFixed(1)} cm`} w={84} />
    </G>
  );
}

// ---------- trolley on a ramp ----------
function RampArt(s = {}) {
  const d = s.d ?? 60; // cm between the gates
  const x0 = 50;
  const y0 = 60;
  const ang = deg(12);
  const at = (cm) => [x0 + cm * 2.6 * Math.cos(ang), y0 + cm * 2.6 * Math.sin(ang)];
  const [g1x, g1y] = at(10);
  const [g2x, g2y] = at(10 + d);
  const [tx, ty] = at(s.pos ?? 0);
  return (
    <G>
      <Line x1={x0 - 10} y1={y0 - 2} x2={x0 + 280 * Math.cos(ang)} y2={y0 + 280 * Math.sin(ang)} stroke={O} strokeWidth={3} />
      <Rect x={20} y={y0} width={30} height={170 - y0} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Line x1={10} y1={170} x2={340} y2={170} stroke={O} strokeWidth={1.4} />
      <G transform={`rotate(12 ${tx} ${ty})`}>
        <Rect x={tx} y={ty - 16} width={34} height={12} rx={2} fill="#3f6fb5" stroke={O} strokeWidth={1} />
        <Circle cx={tx + 7} cy={ty - 3} r={3.5} fill={O} />
        <Circle cx={tx + 27} cy={ty - 3} r={3.5} fill={O} />
      </G>
      {[
        [g1x, g1y],
        [g2x, g2y],
      ].map(([gx, gy], i) => (
        <G key={i}>
          <Path d={`M${gx - 6} ${gy - 34} L${gx - 6} ${gy - 46} L${gx + 6} ${gy - 46} L${gx + 6} ${gy - 34}`} fill="none" stroke={RED} strokeWidth={2} />
          <Line x1={gx} y1={gy - 34} x2={gx} y2={gy} stroke={RED} strokeWidth={0.8} strokeDasharray="2 2" />
        </G>
      ))}
      <Readout x={96} y={136} text={s.reading || `${d} cm`} w={74} />
    </G>
  );
}

// ---------- pulley efficiency ----------
function PulleyLiveArt(s = {}) {
  const load = s.load ?? 4;
  return (
    <G>
      <Rect x={40} y={10} width={180} height={10} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Line x1={150} y1={20} x2={150} y2={30} stroke={O} strokeWidth={2} />
      <Circle cx={150} cy={50} r={20} fill="#dfe4e9" stroke={O} strokeWidth={1.4} />
      <Line x1={90} y1={20} x2={90} y2={150} stroke="#a0522d" strokeWidth={1.6} />
      <Path d="M90 150 A20 20 0 0 0 130 150" fill="none" stroke="#a0522d" strokeWidth={1.6} />
      <Line x1={130} y1={150} x2={130} y2={50} stroke="#a0522d" strokeWidth={1.6} />
      <Path d="M130 50 A20 20 0 0 1 170 50" fill="none" stroke="#a0522d" strokeWidth={1.6} />
      <Line x1={170} y1={50} x2={170} y2={150} stroke="#a0522d" strokeWidth={1.6} />
      <Circle cx={110} cy={150} r={20} fill="#dfe4e9" stroke={O} strokeWidth={1.4} />
      <Line x1={110} y1={170} x2={110} y2={182} stroke={O} strokeWidth={2} />
      {range(Math.max(1, Math.round(load / 2)), (i) => (
        <Rect key={i} x={96} y={182 + i * 8} width={28} height={7} rx={1.5} fill="#8d969f" stroke={O} strokeWidth={0.6} />
      ))}
      <Rect x={162} y={150} width={16} height={46} rx={3} fill="#f2d675" stroke={O} strokeWidth={1} />
      <Line x1={170} y1={196} x2={170} y2={214} stroke={O} strokeWidth={1.4} />
      <Readout x={196} y={150} text={s.reading || `${load} N`} w={60} />
    </G>
  );
}

// ---------- Boyle's law ----------
function BoyleArt(s = {}) {
  const vol = s.vol ?? 30; // cm³ of air, 0 to 50
  const air = vol * 3;
  const p = s.p ?? 100;
  return (
    <G>
      <Rect x={60} y={20} width={26} height={170} fill="#f4f9fc" stroke={O} strokeWidth={1.4} />
      <Rect x={61.5} y={22} width={23} height={air} fill="#eef5fb" />
      <Rect x={61.5} y={22 + air} width={23} height={166 - air} fill="#e3b04a" />
      {range(11, (i) => (
        <G key={i}>
          <Line x1={86} y1={22 + i * 15} x2={i % 5 ? 92 : 96} y2={22 + i * 15} stroke={O} strokeWidth={0.7} />
          {i % 2 === 0 && <Txt x={100} y={25 + i * 15} size={7} anchor="start">{i * 5}</Txt>}
        </G>
      ))}
      <Path d="M73 190 L73 214 L190 214 L190 170" fill="none" stroke={O} strokeWidth={5} />
      <Path d="M73 190 L73 214 L190 214 L190 170" fill="none" stroke="#e3b04a" strokeWidth={3} />
      <Rect x={176} y={130} width={28} height={40} rx={3} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Line x1={190} y1={130} x2={190} y2={110} stroke={O} strokeWidth={2} />
      <Dial x={190} y={84} r={28} v={Math.min(1, (p - 50) / 250)} letter="kPa" />
      <Line x1={204} y1={214} x2={250} y2={214} stroke={O} strokeWidth={4} />
      <Rect x={250} y={204} width={40} height={20} rx={4} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Readout x={226} y={40} text={`${p.toFixed(0)} kPa`} w={64} />
    </G>
  );
}

// ---------- specific heat capacity ----------
function ShcArt(s = {}) {
  const temp = s.temp ?? 22;
  return (
    <G>
      <Rect x={80} y={70} width={110} height={130} rx={8} fill="#f2e6c8" stroke={O} strokeWidth={1} />
      <Rect x={96} y={86} width={78} height={110} rx={4} fill={s.colour || '#b9c1c8'} stroke={O} strokeWidth={1.2} />
      <Rect x={112} y={40} width={12} height={110} rx={3} fill="#5f6b75" stroke={O} strokeWidth={1} />
      <Thermometer x={156} y={24} h={140} fill={Math.max(0.05, Math.min(1, (temp - 10) / 60))} />
      <Wire d="M118 40 L118 24 L40 24 L40 60 M118 24 L118 24" />
      <Rect x={20} y={60} width={40} height={30} rx={3} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Txt x={40} y={79} size={8} weight="700">12 V</Txt>
      <Readout x={206} y={60} text={`${temp.toFixed(1)} °C`} />
      <Readout x={206} y={86} text={s.time || '0 s'} />
    </G>
  );
}

// ---------- cooling curve ----------
function CoolingArt(s = {}) {
  const temp = s.temp ?? 90;
  const solid = Math.min(1, Math.max(0, s.solid ?? 0));
  return (
    <G>
      <Beaker x={70} y={90} w={130} h={120} level={0} />
      <TestTube x={118} y={40} w={34} h={160} fill="#f6efc9" level={0.42} />
      {solid > 0.02 &&
        range(Math.round(4 + solid * 30), (i) => (
          <Rect key={i} x={122 + ((i * 9) % 24)} y={186 - ((i * 13) % Math.max(6, solid * 52))} width={4} height={3} fill="#ffffff" stroke={O} strokeWidth={0.4} />
        ))}
      <Thermometer x={135} y={16} h={180} fill={Math.max(0.05, Math.min(1, (temp - 20) / 90))} />
      <Readout x={210} y={40} text={`${temp.toFixed(1)} °C`} />
    </G>
  );
}

// ---------- conduction along rods ----------
function RodArt(s = {}) {
  const fallen = s.fallen ?? 0;
  return (
    <G>
      <Rect x={10} y={40} width={110} height={10} rx={2} fill={s.colour || '#c87a4a'} stroke={O} strokeWidth={1} />
      {range(5, (i) => {
        const down = i < fallen;
        return <Circle key={i} cx={36 + i * 18} cy={down ? 118 : 56} r={4} fill="#f6f1df" stroke={O} strokeWidth={0.6} />;
      })}
      <Path d="M8 60 C2 52 6 40 14 34 C18 44 22 52 16 62 Z" fill="#f2a33d" opacity={0.9} />
      <Line x1={6} y1={124} x2={124} y2={124} stroke={O} strokeWidth={1} />
    </G>
  );
}

// ---------- ripple tank (seen from above) ----------
function RippleArt(s = {}) {
  const kind = s.kind || 'plane';
  const lam = s.lam ?? 12;
  const lines = [];
  for (let y = 10; y < 66; y += lam) lines.push(<Line key={`a${y}`} x1={10} y1={y} x2={110} y2={y} stroke={BLUE} strokeWidth={1.6} />);
  let after = null;
  if (kind === 'shallow') {
    const l2 = lam * 0.6;
    const out = [];
    for (let y = 72; y < 126; y += l2) out.push(<Line key={`b${y}`} x1={10} y1={y} x2={110} y2={y} stroke={BLUE} strokeWidth={1.6} />);
    after = (
      <G>
        <Rect x={10} y={70} width={100} height={56} fill="#cfe6f5" opacity={0.6} />
        {out}
      </G>
    );
  } else if (kind === 'narrow' || kind === 'wide') {
    const gap = kind === 'narrow' ? 10 : 50;
    const arcs = range(4, (i) => {
      const r = 8 + i * lam;
      return kind === 'narrow' ? (
        <Path key={i} d={`M${60 - r} ${70} A${r} ${r} 0 0 0 ${60 + r} 70`} fill="none" stroke={BLUE} strokeWidth={1.6} />
      ) : (
        <Path key={i} d={`M${60 - gap / 2 - 6} ${70 + r * 0.7} Q60 ${74 + r} ${60 + gap / 2 + 6} ${70 + r * 0.7}`} fill="none" stroke={BLUE} strokeWidth={1.6} />
      );
    });
    after = (
      <G>
        <Rect x={10} y={66} width={50 - gap / 2} height={6} fill={O} />
        <Rect x={60 + gap / 2} y={66} width={50 - gap / 2} height={6} fill={O} />
        {arcs}
      </G>
    );
  } else if (kind === 'barrier') {
    after = (
      <G>
        <Line x1={10} y1={110} x2={110} y2={70} stroke={O} strokeWidth={4} />
        {range(3, (i) => (
          <Line key={i} x1={14 + i * 22} y1={72 + i * 8} x2={60 + i * 22} y2={118} stroke="#7a9cc8" strokeWidth={1.4} />
        ))}
      </G>
    );
  }
  return (
    <G>
      <Rect x={8} y={6} width={104} height={124} fill="#eef5fb" stroke={O} strokeWidth={1} />
      {lines}
      {after}
    </G>
  );
}

// ---------- refraction through a block ----------
function RefractLiveArt(s = {}) {
  const i = deg(s.i ?? 40);
  const r = deg(s.r ?? 25);
  const ex = 140;
  const ey = 80;
  const inLen = 70;
  const sx = ex - Math.sin(i) * inLen;
  const sy = ey - Math.cos(i) * inLen;
  const depth = 100;
  const bx = ex + Math.tan(r) * depth;
  const by = ey + depth;
  return (
    <G>
      <Rect x={60} y={80} width={200} height={100} fill="#dcecf8" opacity={0.75} stroke={O} strokeWidth={1.6} />
      <Line x1={ex} y1={20} x2={ex} y2={150} stroke="#9aa3ab" strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={sx} y1={sy} x2={ex} y2={ey} stroke={RED} strokeWidth={2} />
      <Head x={ex - Math.sin(i) * 30} y={ey - Math.cos(i) * 30} dx={Math.sin(i)} dy={Math.cos(i)} size={6} fill={RED} />
      <Line x1={ex} y1={ey} x2={bx} y2={by} stroke={RED} strokeWidth={2} />
      <Line x1={bx} y1={by} x2={bx + Math.sin(i) * 50} y2={by + Math.cos(i) * 50} stroke={RED} strokeWidth={2} />
      <Path d={`M${ex} ${ey - 34} A34 34 0 0 0 ${ex - Math.sin(i) * 34} ${ey - Math.cos(i) * 34}`} fill="none" stroke={O} strokeWidth={1} />
      <Path d={`M${ex} ${ey + 40} A40 40 0 0 0 ${ex + Math.sin(r) * 40} ${ey + Math.cos(r) * 40}`} fill="none" stroke={O} strokeWidth={1} />
      <Readout x={190} y={14} text={`i = ${(s.i ?? 40).toFixed(0)}°`} w={64} />
    </G>
  );
}

// ---------- lens on an optical bench ----------
function LensBenchArt(s = {}) {
  const u = s.u ?? 30; // cm
  const v = s.v ?? 30;
  const k = 2.2;
  const ox = 20;
  const lx = ox + u * k;
  const sx = Math.min(372, lx + v * k);
  const imgH = Math.min(40, Math.max(6, (24 * v) / u));
  return (
    <G>
      <Rect x={10} y={150} width={370} height={10} fill="#f7e8b5" stroke={O} strokeWidth={1} />
      <Rect x={ox - 8} y={92} width={16} height={58} fill="#f2d675" stroke={O} strokeWidth={1} />
      <Line x1={ox} y1={104} x2={ox} y2={128} stroke={O} strokeWidth={2} />
      <Line x1={ox - 6} y1={110} x2={ox} y2={104} stroke={O} strokeWidth={2} />
      <Line x1={ox + 6} y1={110} x2={ox} y2={104} stroke={O} strokeWidth={2} />
      <Path d={`M${lx} 92 Q${lx + 10} 120 ${lx} 148 Q${lx - 10} 120 ${lx} 92 Z`} fill="#dcecf8" stroke={O} strokeWidth={1.2} />
      <Rect x={sx - 2} y={84} width={6} height={66} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Line x1={sx + 1} y1={120} x2={sx + 1} y2={120 + imgH * 0.6} stroke={s.sharp ? BLUE : '#9fb7d4'} strokeWidth={s.sharp ? 3 : 5} opacity={s.sharp ? 1 : 0.6} />
      <Line x1={ox} y1={104} x2={sx} y2={120 + imgH * 0.6} stroke={RED} strokeWidth={0.8} strokeDasharray="3 3" />
      <Readout x={140} y={20} text={`u = ${u} cm`} w={70} />
    </G>
  );
}

// ---------- current and voltage ----------
function OhmArt(s = {}) {
  const V = s.V ?? 0;
  const I = s.I ?? 0;
  const lamp = s.lamp;
  return (
    <G>
      <Wire d="M40 60 L40 30 L300 30 L300 60 M300 100 L300 130 L40 130 L40 100" />
      <Rect x={20} y={60} width={40} height={40} rx={3} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Txt x={40} y={84} size={8} weight="700">0-12 V</Txt>
      <Rect x={110} y={24} width={40} height={12} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Arrow x1={110} y1={42} x2={152} y2={18} w={1} size={5} />
      <Rect x={198} y={22} width={24} height={16} fill="#ffffff" />
      <Meter x={210} y={30} letter="A" />
      {lamp ? (
        <G>
          {I > 0.05 && <Circle cx={300} cy={80} r={10 + 10 * Math.min(1, I / 0.6)} fill="#ffe27a" opacity={0.5} />}
          <Rect x={290} y={60} width={20} height={40} fill="#ffffff" />
          <LampSymbol x={300} y={80} r={10} />
        </G>
      ) : (
        <G>
          <Rect x={290} y={60} width={20} height={40} fill="#ffffff" />
          <ResistorSymbol x={300} y={80} w={34} h={12} vertical />
        </G>
      )}
      <Wire d="M300 66 L340 66 L340 70 M340 90 L340 94 L300 94" />
      <Meter x={340} y={80} letter="V" />
      <Readout x={100} y={150} text={`${V.toFixed(2)} V`} />
      <Readout x={190} y={150} text={`${I.toFixed(3)} A`} />
    </G>
  );
}

// ---------- resistance of a wire ----------
function WireArt(s = {}) {
  const len = s.len ?? 50; // cm
  const x0 = 30;
  const clip = x0 + len * 3;
  const mid = (x0 + clip) / 2;
  return (
    <G>
      <Rect x={x0} y={120} width={300} height={14} fill="#f7e8b5" stroke={O} strokeWidth={1} />
      {range(11, (i) => (
        <G key={i}>
          <Line x1={x0 + i * 30} y1={120} x2={x0 + i * 30} y2={127} stroke={O} strokeWidth={0.7} />
          <Txt x={x0 + i * 30} y={146} size={7}>{i * 10}</Txt>
        </G>
      ))}
      <Line x1={x0} y1={116} x2={x0 + 300} y2={116} stroke="#7d868f" strokeWidth={1.4} />
      <Wire d={`M${x0} 116 L${x0} 40 L79 40 M101 40 L140 40 M200 40 L212 40 L212 16 L${clip} 16 L${clip} 108`} />
      <Path d={`M${clip - 6} 106 L${clip} 116 L${clip + 6} 106`} fill="none" stroke={RED} strokeWidth={2} />
      <Meter x={90} y={40} letter="A" />
      <Rect x={140} y={31} width={60} height={18} rx={3} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Txt x={170} y={44} size={8} weight="700">2 V</Txt>
      <Wire d={`M${x0} 84 L${mid - 11} 84 M${mid + 11} 84 L${clip} 84`} />
      <Meter x={mid} y={84} letter="V" />
      <Readout x={262} y={60} text={`${len} cm`} w={56} />
    </G>
  );
}

// ---------- lamps in series or parallel ----------
function LampsArt(s = {}) {
  const n = s.n ?? 2;
  const parallel = s.mode === 'parallel';
  const glow = s.glow ?? 0.5;
  return (
    <G>
      {parallel ? (
        <G>
          <Wire d={`M14 26 L106 26 M14 26 L14 120 L106 120 M106 26 L106 120`} />
          {range(n, (i) => {
            const x = 30 + i * (70 / Math.max(1, n - 1 || 1)) * (n > 1 ? 1 : 0) + (n === 1 ? 30 : 0);
            return (
              <G key={i}>
                <Wire d={`M${x} 26 L${x} 120`} />
                <Circle cx={x} cy={78} r={10 + 8 * glow} fill="#ffe27a" opacity={0.25 + 0.5 * glow} />
                <Rect x={x - 9} y={68} width={18} height={20} fill="#ffffff" />
                <LampSymbol x={x} y={78} r={8} />
              </G>
            );
          })}
        </G>
      ) : (
        <G>
          <Wire d="M14 26 L106 26 L106 120 L14 120 Z" />
          {range(n, (i) => {
            const y = 40 + i * (64 / Math.max(1, n));
            return (
              <G key={i}>
                <Circle cx={106} cy={y + 12} r={10 + 8 * glow} fill="#ffe27a" opacity={0.25 + 0.5 * glow} />
                <Rect x={96} y={y + 2} width={20} height={20} fill="#ffffff" />
                <LampSymbol x={106} y={y + 12} r={8} />
              </G>
            );
          })}
        </G>
      )}
      <Rect x={48} y={20} width={22} height={12} fill="#ffffff" />
      <CellSymbol x={58} y={26} />
    </G>
  );
}

// ---------- electromagnetic induction ----------
function InductionArt(s = {}) {
  const defl = s.defl ?? 0; // -1 to 1
  const mx = s.mx ?? 0; // 0 out, 1 inside
  return (
    <G>
      {range(8, (i) => (
        <Ellipse key={i} cx={60 + i * 8} cy={50} rx={4} ry={18} fill="none" stroke="#c87a4a" strokeWidth={2} />
      ))}
      <Rect x={2 + mx * 40} y={42} width={40} height={16} fill="none" />
      <Rect x={-8 + mx * 46} y={42} width={22} height={16} fill={RED} stroke={O} strokeWidth={0.8} />
      <Rect x={14 + mx * 46} y={42} width={22} height={16} fill={BLUE} stroke={O} strokeWidth={0.8} />
      <Txt x={3 + mx * 46} y={54} size={8} weight="700" fill="#ffffff">N</Txt>
      <Wire d="M60 68 L60 100 L90 100 M116 68 L116 100 L104 100" />
      <Circle cx={97} cy={112} r={20} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Line x1={97} y1={120} x2={97 + Math.sin(deg(defl * 55)) * 16} y2={120 - Math.cos(deg(defl * 55)) * 16} stroke={RED} strokeWidth={1.6} />
      <Line x1={97} y1={100} x2={97} y2={104} stroke={O} strokeWidth={1} />
      <Txt x={97} y={128} size={7} weight="700">G</Txt>
    </G>
  );
}

// ---------- half-life ----------
function HalfLifeArt(s = {}) {
  return (
    <G>
      <Rect x={20} y={80} width={40} height={60} rx={6} fill="#8d969f" stroke={O} strokeWidth={1.2} />
      <Rect x={30} y={70} width={20} height={12} rx={2} fill="#5f6b75" />
      <Txt x={40} y={114} size={8} weight="700" fill="#ffffff">Pa-234</Txt>
      <Rect x={100} y={96} width={90} height={22} rx={10} fill="#c4cbd2" stroke={O} strokeWidth={1.2} />
      <Rect x={92} y={98} width={10} height={18} rx={3} fill="#5f6b75" />
      <Wire d="M190 107 L230 107" />
      <Rect x={230} y={80} width={100} height={56} rx={4} fill="#d9dee3" stroke={O} strokeWidth={1.2} />
      <Readout x={240} y={92} text={s.reading || '0 counts/min'} w={80} />
      {range(5, (i) => (
        <Line key={i} x1={62} y1={100 + i * 3} x2={90} y2={100 + i * 3 + (i - 2) * 2} stroke="#2f7d4f" strokeWidth={0.8} strokeDasharray="2 3" />
      ))}
    </G>
  );
}

export const APPARATUS_PHYS = {
  'pendulum-apparatus': {
    title: 'A simple pendulum',
    w: 300,
    h: 260,
    art: PendulumArt,
    labels: [
      ['Clamp and split cork', 250, 14, 166, 24],
      ['Thread (length l to the\ncentre of the bob)', 250, 110, 168, 110],
      ['Bob', 250, 190, 172, 190],
      ['Fiducial mark: count\nswings as it passes', 40, 230, 158, 214],
    ],
  },
  'density-apparatus': {
    title: 'Measuring mass on a balance and volume by displacement',
    w: 290,
    h: 214,
    art: DensityArt,
    labels: [
      ['Object', 30, 120, 60, 140],
      ['Top-pan balance', 30, 214, 40, 204],
      ['Measuring cylinder:\nrise in level = volume', 280, 40, 238, 60],
      ['Read the bottom of\nthe meniscus at eye level', 280, 120, 238, 110],
    ],
  },
  'hooke-apparatus': {
    title: 'Measuring the extension of a spring',
    w: 290,
    h: 260,
    art: HookeLiveArt,
    labels: [
      ['Clamp stand', 14, 120, 48, 120],
      ['Spring', 110, 90, 140, 90],
      ['Pointer on the hanger', 260, 120, 178, 120],
      ['Slotted masses: 1 N each', 60, 200, 134, 126],
      ['Metre rule held vertical', 260, 230, 196, 230],
    ],
  },
  'moments-apparatus': {
    title: 'Balancing a metre rule to find an unknown weight',
    w: 360,
    h: 170,
    art: MomentsLiveArt,
    labels: [
      ['Metre rule balanced at\nits centre (50 cm)', 180, 30, 180, 80],
      ['Known weight: 2.0 N', 40, 150, 80, 128],
      ['Unknown object', 330, 150, 250, 124],
      ['Pivot (knife edge)', 330, 110, 192, 108],
    ],
  },
  'ramp-apparatus': {
    title: 'A trolley running down a ramp through two light gates',
    w: 340,
    h: 180,
    art: RampArt,
    labels: [
      ['Trolley released\nfrom rest', 40, 20, 56, 52],
      ['Light gates and timer', 180, 20, 132, 40],
      ['Ramp at a fixed angle', 290, 150, 250, 116],
      ['Block raising the ramp', 40, 186, 36, 160],
    ],
  },
  'pulley-apparatus': {
    title: 'Measuring the effort needed to lift loads with a pulley system',
    w: 270,
    h: 240,
    art: PulleyLiveArt,
    labels: [
      ['Fixed pulley', 240, 50, 170, 50],
      ['Moving pulley', 30, 120, 92, 140],
      ['Load (slotted masses)', 30, 220, 96, 200],
      ['Spring balance\nreads the effort', 240, 190, 178, 176],
    ],
  },
  'boyle-apparatus': {
    title: 'Boyle’s law: pressure and volume of trapped air',
    w: 300,
    h: 230,
    art: BoyleArt,
    labels: [
      ['Trapped air', 20, 40, 72, 40],
      ['Oil', 20, 170, 72, 170],
      ['Scale in cm³', 130, 20, 104, 30],
      ['Pressure gauge', 260, 110, 212, 92],
      ['Pump: forces oil up', 280, 234, 270, 214],
    ],
  },
  'shc-apparatus': {
    title: 'Measuring the specific heat capacity of a metal block',
    w: 300,
    h: 214,
    art: ShcArt,
    labels: [
      ['Power supply', 40, 110, 40, 90],
      ['Immersion heater', 60, 150, 112, 150],
      ['Metal block (1.0 kg)', 230, 180, 174, 180],
      ['Insulation cuts heat loss', 60, 214, 92, 196],
      ['Thermometer in a hole\nwith a drop of oil', 230, 140, 160, 130],
    ],
  },
  'cooling-apparatus': {
    title: 'Following the temperature as a liquid cools and solidifies',
    w: 290,
    h: 220,
    art: CoolingArt,
    labels: [
      ['Thermometer', 40, 30, 132, 30],
      ['Boiling tube of melted\nstearic acid', 40, 130, 118, 150],
      ['Beaker as an air jacket\n(even, slow cooling)', 250, 190, 198, 180],
    ],
  },
  'rod-small': { title: 'A heated rod with wax pins', w: 130, h: 130, art: RodArt, labels: [] },
  'ripple-small': { title: 'Ripple tank seen from above', w: 120, h: 136, art: RippleArt, labels: [] },
  'refraction-apparatus': {
    title: 'Tracing a ray through a glass block',
    w: 300,
    h: 230,
    art: RefractLiveArt,
    labels: [
      ['Ray box beam', 40, 30, 96, 30],
      ['Normal', 160, 6, 140, 24],
      ['Glass block on paper', 290, 160, 252, 160],
      ['Refracted ray', 290, 120, 176, 140],
    ],
  },
  'lens-apparatus': {
    title: 'Finding where a converging lens forms a sharp image',
    w: 390,
    h: 170,
    art: LensBenchArt,
    labels: [
      ['Illuminated object', 30, 70, 20, 94],
      ['Converging lens', 150, 76, 90, 96],
      ['Screen: move until\nthe image is sharp', 330, 60, 300, 90],
      ['Metre rule', 200, 176, 200, 160],
    ],
  },
  'ohm-apparatus': {
    title: 'Measuring current and voltage for a component',
    w: 380,
    h: 176,
    art: OhmArt,
    labels: [
      ['Variable resistor', 120, 6, 130, 24],
      ['Ammeter in series', 240, 6, 214, 20],
      ['Component tested', 270, 120, 292, 96],
      ['Voltmeter in parallel', 372, 120, 344, 92],
      ['Power supply', 40, 116, 40, 100],
    ],
  },
  'wire-apparatus': {
    title: 'Resistance of a wire against its length',
    w: 340,
    h: 160,
    art: WireArt,
    labels: [
      ['Resistance wire on a\nmetre rule', 100, 168, 100, 117],
      ['Crocodile clip moved\nalong the wire', 250, 168, 184, 112],
      ['Ammeter', 60, 12, 86, 30],
      ['Supply', 170, 66, 170, 49],
      ['Voltmeter across the\nlength in the circuit', 300, 100, 113, 84],
    ],
  },
  'lamps-small': { title: 'Lamps in a circuit', w: 120, h: 132, art: LampsArt, labels: [] },
  'induction-small': { title: 'A magnet and a coil', w: 140, h: 136, art: InductionArt, labels: [] },
  'halflife-apparatus': {
    title: 'Measuring the count rate of protactinium-234',
    w: 340,
    h: 160,
    art: HalfLifeArt,
    labels: [
      ['Source (in a sealed bottle)', 40, 160, 40, 140],
      ['Geiger-Muller tube', 145, 70, 145, 96],
      ['Counter (ratemeter)', 280, 60, 280, 80],
    ],
  },
};
