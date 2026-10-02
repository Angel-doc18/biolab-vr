// Laboratory apparatus drawn in the conventional way for practical diagrams:
// glassware in section with its liquid, stands, meters and circuit symbols.
// Every piece takes its position and size; liquids take a fill colour and level.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';

export const O = '#33414d';
export const GLASS = '#f4f9fc';
export const WATER = '#cfe6f5';

export function Beaker({ x, y, w = 60, h = 70, fill = WATER, level = 0.6, children }) {
  const top = y + h * (1 - level);
  return (
    <G>
      <Rect x={x + 2} y={top} width={w - 4} height={y + h - top - 2} fill={fill} />
      {children}
      <Path d={`M${x - 4} ${y} L${x} ${y + 4} L${x} ${y + h - 4} Q${x} ${y + h} ${x + 4} ${y + h} L${x + w - 4} ${y + h} Q${x + w} ${y + h} ${x + w} ${y + h - 4} L${x + w} ${y}`} fill="none" stroke={O} strokeWidth={1.6} />
    </G>
  );
}

export function TestTube({ x, y, w = 18, h = 70, fill = WATER, level = 0.5, precipitate, layer }) {
  const r = w / 2;
  const top = y + (h - r) * (1 - level);
  return (
    <G>
      {level > 0 && <Path d={`M${x + 1.5} ${top} L${x + w - 1.5} ${top} L${x + w - 1.5} ${y + h - r} A${r - 1.5} ${r - 1.5} 0 0 1 ${x + 1.5} ${y + h - r} Z`} fill={fill} />}
      {layer && <Rect x={x + 1.5} y={top - 6} width={w - 3} height={6} fill={layer} />}
      {precipitate && <Path d={`M${x + 1.5} ${y + h - r - 6} L${x + w - 1.5} ${y + h - r - 6} L${x + w - 1.5} ${y + h - r} A${r - 1.5} ${r - 1.5} 0 0 1 ${x + 1.5} ${y + h - r} Z`} fill={precipitate} />}
      <Path d={`M${x} ${y} L${x} ${y + h - r} A${r} ${r} 0 0 0 ${x + w} ${y + h - r} L${x + w} ${y}`} fill="none" stroke={O} strokeWidth={1.4} />
    </G>
  );
}

export function ConicalFlask({ x, y, w = 70, h = 80, fill = WATER, level = 0.35, bung, children }) {
  const neck = w * 0.26;
  const cx = x + w / 2;
  const ny = y + h * 0.3;
  const liquidTop = y + h * (1 - level);
  const half = (yy) => (yy <= ny ? neck / 2 : neck / 2 + ((yy - ny) / (y + h - ny)) * (w / 2 - neck / 2));
  return (
    <G>
      <Path d={`M${cx - half(liquidTop)} ${liquidTop} L${cx + half(liquidTop)} ${liquidTop} L${x + w} ${y + h} L${x} ${y + h} Z`} fill={fill} />
      {children}
      <Path d={`M${cx - neck / 2} ${y} L${cx - neck / 2} ${ny} L${x} ${y + h} L${x + w} ${y + h} L${cx + neck / 2} ${ny} L${cx + neck / 2} ${y}`} fill="none" stroke={O} strokeWidth={1.6} strokeLinejoin="round" />
      {bung && <Rect x={cx - neck / 2 - 2} y={y - 10} width={neck + 4} height={12} rx={2} fill="#8a6a4f" stroke={O} strokeWidth={1} />}
    </G>
  );
}

export function Stand({ x, y, h = 200, clampY, clampTo }) {
  return (
    <G>
      <Rect x={x - 30} y={y + h} width={70} height={9} rx={2} fill="#a5adb5" stroke={O} strokeWidth={1} />
      <Rect x={x - 2.5} y={y} width={5} height={h} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      {clampY != null && (
        <G>
          <Rect x={x - 5} y={clampY - 5} width={10} height={10} fill="#8d969f" stroke={O} strokeWidth={1} />
          <Rect x={x + 5} y={clampY - 2} width={(clampTo ?? x + 40) - x - 5} height={4} fill="#a5adb5" stroke={O} strokeWidth={0.8} />
        </G>
      )}
    </G>
  );
}

// level: fraction of the burette still full of liquid.
export function Burette({ x, y, h = 160, w = 12, fill = WATER, level = 0.8 }) {
  const body = h - 26;
  const top = y + body * (1 - level);
  return (
    <G>
      <Rect x={x} y={top} width={w} height={y + body - top} fill={fill} />
      <Rect x={x} y={y} width={w} height={body} fill="none" stroke={O} strokeWidth={1.3} />
      {Array.from({ length: 11 }, (_, i) => (
        <Line key={i} x1={x} y1={y + 6 + i * ((body - 12) / 10)} x2={x + (i % 5 ? 4 : 7)} y2={y + 6 + i * ((body - 12) / 10)} stroke={O} strokeWidth={0.7} />
      ))}
      <Rect x={x + w / 2 - 2} y={y + body} width={4} height={10} fill={fill} stroke={O} strokeWidth={0.9} />
      <Rect x={x - 5} y={y + body + 3} width={w + 10} height={4} rx={1.5} fill="#5f6b75" />
      <Path d={`M${x + w / 2 - 2} ${y + body + 10} L${x + w / 2 - 1} ${y + h} L${x + w / 2 + 1} ${y + h} L${x + w / 2 + 2} ${y + body + 10}`} fill={fill} stroke={O} strokeWidth={0.9} />
    </G>
  );
}

// open: fraction of the barrel the plunger has been pushed out by the gas.
export function GasSyringe({ x, y, len = 120, d = 22, open = 0.3 }) {
  const gas = len * open;
  return (
    <G>
      <Rect x={x} y={y} width={len} height={d} fill={GLASS} stroke={O} strokeWidth={1.4} />
      {Array.from({ length: 11 }, (_, i) => (
        <Line key={i} x1={x + 8 + i * ((len - 16) / 10)} y1={y} x2={x + 8 + i * ((len - 16) / 10)} y2={y + (i % 5 ? 5 : 8)} stroke={O} strokeWidth={0.7} />
      ))}
      <Rect x={x + 6 + gas} y={y + 2} width={6} height={d - 4} fill="#8d969f" stroke={O} strokeWidth={0.8} />
      <Rect x={x + 12 + gas} y={y + d / 2 - 2} width={len * 0.9} height={4} fill="#a5adb5" stroke={O} strokeWidth={0.6} />
      <Rect x={x + 12 + gas + len * 0.9} y={y - 4} width={5} height={d + 8} fill="#8d969f" stroke={O} strokeWidth={0.8} />
    </G>
  );
}

// fill: fraction of the scale reached by the liquid column.
export function Thermometer({ x, y, h = 120, fill = 0.4 }) {
  const col = (h - 16) * fill;
  return (
    <G>
      <Rect x={x - 3.5} y={y} width={7} height={h - 8} rx={3.5} fill="#ffffff" stroke={O} strokeWidth={1.1} />
      <Rect x={x - 1.2} y={y + h - 10 - col} width={2.4} height={col + 4} fill="#c8463d" />
      <Circle cx={x} cy={y + h - 5} r={6} fill="#c8463d" stroke={O} strokeWidth={1.1} />
    </G>
  );
}

export function Bunsen({ x, y, flame = '#6a8fd8', h = 70 }) {
  return (
    <G>
      {flame && <Path d={`M${x} ${y - 46} C${x - 12} ${y - 22} ${x - 10} ${y - 4} ${x} ${y} C${x + 10} ${y - 4} ${x + 12} ${y - 22} ${x} ${y - 46} Z`} fill={flame} opacity={0.85} />}
      <Rect x={x - 6} y={y} width={12} height={h - 12} fill="#c4cbd2" stroke={O} strokeWidth={1.1} />
      <Rect x={x - 22} y={y + h - 12} width={44} height={10} rx={3} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Rect x={x + 6} y={y + h - 26} width={14} height={5} fill="#a5adb5" stroke={O} strokeWidth={0.8} />
    </G>
  );
}

export function Ruler({ x, y, len = 160, vertical = false, divisions = 10, labels = true, unit = '' }) {
  const ticks = Array.from({ length: divisions + 1 }, (_, i) => i);
  return vertical ? (
    <G>
      <Rect x={x} y={y} width={16} height={len} fill="#f7e8b5" stroke={O} strokeWidth={1} />
      {ticks.map((i) => (
        <G key={i}>
          <Line x1={x} y1={y + (i * len) / divisions} x2={x + (i % 5 ? 5 : 9)} y2={y + (i * len) / divisions} stroke={O} strokeWidth={0.8} />
          {labels && i % 2 === 0 && <Txt x={x + 12} y={y + (i * len) / divisions + 3} size={6.5} anchor="middle">{`${i}${i === divisions ? unit : ''}`}</Txt>}
        </G>
      ))}
    </G>
  ) : (
    <G>
      <Rect x={x} y={y} width={len} height={14} fill="#f7e8b5" stroke={O} strokeWidth={1} />
      {ticks.map((i) => (
        <Line key={i} x1={x + (i * len) / divisions} y1={y} x2={x + (i * len) / divisions} y2={y + (i % 5 ? 4 : 7)} stroke={O} strokeWidth={0.8} />
      ))}
    </G>
  );
}

// Circuit symbols.
export function Meter({ x, y, r = 11, letter }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Txt x={x} y={y + 4} size={11} weight="700">{letter}</Txt>
    </G>
  );
}
export function CellSymbol({ x, y }) {
  return (
    <G>
      <Line x1={x - 3} y1={y - 11} x2={x - 3} y2={y + 11} stroke={O} strokeWidth={1.6} />
      <Line x1={x + 3} y1={y - 6} x2={x + 3} y2={y + 6} stroke={O} strokeWidth={3} />
    </G>
  );
}
export function ResistorSymbol({ x, y, w = 30, h = 11, vertical }) {
  return vertical ? <Rect x={x - h / 2} y={y - w / 2} width={h} height={w} fill="#ffffff" stroke={O} strokeWidth={1.4} /> : <Rect x={x - w / 2} y={y - h / 2} width={w} height={h} fill="#ffffff" stroke={O} strokeWidth={1.4} />;
}
export function LampSymbol({ x, y, r = 9 }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Line x1={x - r * 0.7} y1={y - r * 0.7} x2={x + r * 0.7} y2={y + r * 0.7} stroke={O} strokeWidth={1.2} />
      <Line x1={x - r * 0.7} y1={y + r * 0.7} x2={x + r * 0.7} y2={y - r * 0.7} stroke={O} strokeWidth={1.2} />
    </G>
  );
}
export function Wire({ d }) {
  return <Path d={d} fill="none" stroke={O} strokeWidth={1.3} strokeLinejoin="round" />;
}

// Small spheres for bubbles, beads and particles.
export function Bubbles({ points, r = 2.2, fill = '#ffffff' }) {
  return (
    <G>
      {points.map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={r} fill={fill} stroke={O} strokeWidth={0.6} />
      ))}
    </G>
  );
}

export function Pond({ x, y, w, h }) {
  return <Ellipse cx={x + w / 2} cy={y + h / 2} rx={w / 2} ry={h / 2} fill={WATER} stroke={O} strokeWidth={1} />;
}
