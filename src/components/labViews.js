import Svg, { Circle, Ellipse, G, Path, Polygon, Rect } from 'react-native-svg';

const lerp = (a, b, t) => a + (b - a) * t;
function mixHex(a, b, t) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ch = (s) => [(s >> 16) & 255, (s >> 8) & 255, s & 255];
  const [r1, g1, b1] = ch(pa);
  const [r2, g2, b2] = ch(pb);
  const h = (x) => Math.round(x).toString(16).padStart(2, '0');
  return `#${h(lerp(r1, r2, t))}${h(lerp(g1, g2, t))}${h(lerp(b1, b2, t))}`;
}
// Interpolate two SVG paths with identical command structure.
function mixPath(a, b, t) {
  const na = a.match(/-?\d+(\.\d+)?/g).map(Number);
  const nb = b.match(/-?\d+(\.\d+)?/g).map(Number);
  let i = 0;
  return a.replace(/-?\d+(\.\d+)?/g, () => {
    const v = lerp(na[i], nb[i], t);
    i++;
    return v.toFixed(1);
  });
}

// ---------- Osmosis: Allium cepa epidermal cell (paths from the design) ----------
const TURGID = 'M42,48 C70,38 135,35 160,42 C175,70 174,130 162,150 C135,160 65,165 46,152 C35,130 35,75 42,48 Z';
const PLASMO = 'M72,70 C100,55 130,68 140,82 C148,110 135,135 125,142 C98,150 75,138 65,120 C60,95 62,80 72,70 Z';

// p: 0 = fully turgid, 1 = fully plasmolysed
export function OnionCell({ p = 0 }) {
  const plas = p > 0.3;
  return (
    <Svg viewBox="0 0 200 200" width="100%" height="100%">
      <Polygon points="30,35 170,25 185,160 35,175" fill={mixHex('#e0f2fe', '#f8fafc', p)} stroke="#0284c7" strokeLinejoin="round" strokeWidth={6} />
      {plas ? (
        <Polygon points="34,39 166,29 181,156 39,171" fill="#fed7aa" fillOpacity={0.35 * p} />
      ) : (
        <Polygon points="34,39 166,29 181,156 39,171" fill="#f0fdf4" stroke="#006a61" strokeDasharray="3,2" strokeWidth={2.5} />
      )}
      <Path
        d={mixPath(TURGID, PLASMO, p)}
        fill={mixHex('#bbf7d0', '#fbcfe8', p)}
        fillOpacity={lerp(0.85, 0.9, p)}
        stroke={mixHex('#0d9488', '#be185d', p)}
        strokeWidth={lerp(3, 3.5, p)}
        strokeDasharray={plas ? '2,2' : undefined}
      />
      <Ellipse cx={lerp(95, 102, p)} cy={lerp(95, 105, p)} rx={lerp(35, 22, p)} ry={lerp(25, 18, p)} fill={mixHex('#c084fc', '#9333ea', p)} fillOpacity={lerp(0.35, 0.6, p)} />
      <Circle cx={lerp(80, 98, p)} cy={lerp(85, 98, p)} r={lerp(4, 4, p)} fill={mixHex('#7e22ce', '#581c87', p)} fillOpacity={lerp(0.6, 1, p)} />
      <Circle cx={lerp(110, 112, p)} cy={lerp(100, 108, p)} r={lerp(5, 3.5, p)} fill={mixHex('#7e22ce', '#581c87', p)} fillOpacity={lerp(0.5, 1, p)} />
      <Circle cx={lerp(95, 94, p)} cy={lerp(115, 112, p)} r={lerp(3.5, 3, p)} fill={mixHex('#7e22ce', '#581c87', p)} fillOpacity={lerp(0.7, 1, p)} />
      <Circle cx={lerp(152, 124, p)} cy={lerp(70, 94, p)} r={lerp(9, 7, p)} fill="#0369a1" fillOpacity={lerp(0.85, 1, p)} />
      <Circle cx={lerp(150, 123, p)} cy={lerp(69, 93, p)} r={lerp(3, 2, p)} fill="#ffffff" fillOpacity={0.7} />
      {plas ? (
        <G fill="none" stroke="#ea580c" strokeLinecap="round" strokeWidth={2}>
          <Path d="M70,65 L55,52 M56,58 L55,52 L61,53" />
          <Path d="M142,135 L158,145 M152,146 L158,145 L157,139" />
        </G>
      ) : (
        <G fill="none" stroke="#0284c7" strokeLinecap="round" strokeWidth={2}>
          <Path d="M15,90 L28,90 M24,86 L28,90 L24,94" />
          <Path d="M185,110 L172,110 M176,106 L172,110 L176,114" />
        </G>
      )}
    </Svg>
  );
}

// ---------- Food tests: test tube in the optical field ----------
export function TestTube({ color = '#2563eb', precipitate }) {
  return (
    <Svg viewBox="0 0 200 200" width="100%" height="100%">
      <Rect x={0} y={0} width={200} height={200} fill="#f8fafc" />
      <Path d="M78,20 L122,20 L122,150 A22,22 0 0 1 78,150 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth={4} />
      <Path d="M81,80 L119,80 L119,150 A19,19 0 0 1 81,150 Z" fill={color} fillOpacity={0.85} />
      {precipitate && <Path d="M82,152 L118,152 A18,18 0 0 1 82,152 Z" fill={precipitate} />}
      <Path d="M86,86 L86,145" stroke="#ffffff" strokeOpacity={0.55} strokeWidth={4} strokeLinecap="round" />
      <Rect x={72} y={14} width={56} height={8} rx={4} fill="#cbd5e1" />
    </Svg>
  );
}

// ---------- Enzyme: spotting tile, one iodine well per minute ----------
// fractions[i] = starch remaining in the sample taken at minute i+1 (null = not yet sampled)
export function SpottingTile({ fractions }) {
  return (
    <Svg viewBox="0 0 200 200" width="100%" height="100%">
      <Rect x={20} y={20} width={160} height={160} rx={18} fill="#ffffff" stroke="#cbd5e1" strokeWidth={4} />
      {fractions.map((f, i) => {
        const cx = 50 + (i % 3) * 50;
        const cy = 50 + Math.floor(i / 3) * 50;
        return (
          <G key={i}>
            <Circle cx={cx} cy={cy} r={17} fill="#f1f5f9" stroke="#e2e8f0" strokeWidth={2} />
            {f != null && <Circle cx={cx} cy={cy} r={13} fill={mixHex('#b45309', '#1e1b4b', f)} />}
          </G>
        );
      })}
    </Svg>
  );
}

export { mixHex };
