// Labelled diagrams drawn the way examiners expect: clean outlines, and every
// label on a ruled line that ends on the structure it names. Labels sit in
// columns beside (or above and below) the drawing so the lines do not cross.
//
// A diagram spec: { title, w, h, art: () => <svg elements>, labels: [[text, tx, ty, px, py], ...] }
// (tx, ty) is where the label text sits; (px, py) is the point it names. A label
// left of its point is right-aligned, one right of it left-aligned, and one
// directly above or below it (tx === px) is centred with the line running
// vertically. Omit (px, py) for a caption with no line. "\n" starts a new line.
import { View } from 'react-native';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';

export const INK = '#1f2933';
const RULE = '#3d4852';
const SIZE = 10.5;

function Label({ text, tx, ty, px, py, size = SIZE }) {
  const lines = String(text).split('\n');
  const step = size * 1.3;
  const height = (lines.length - 1) * step;
  const none = px == null;
  const vertical = !none && Math.abs(tx - px) < 1;
  const anchor = none || vertical ? 'middle' : tx < px ? 'end' : 'start';
  const top = ty - height / 2;
  let x0 = tx;
  let y0 = ty;
  if (vertical) y0 = py > ty ? ty + height / 2 + size * 0.55 : ty - height / 2 - size * 0.85;
  else if (!none) x0 = tx < px ? tx + 3 : tx - 3;
  return (
    <G>
      {!none && <Line x1={x0} y1={y0} x2={px} y2={py} stroke={RULE} strokeWidth={0.8} />}
      {!none && <Circle cx={px} cy={py} r={1.6} fill={RULE} />}
      {lines.map((t, i) => (
        <SvgText key={i} x={tx} y={top + i * step + size * 0.35} fontSize={size} fill={INK} fontFamily="Inter_500Medium" textAnchor={anchor}>
          {t}
        </SvgText>
      ))}
    </G>
  );
}

// Approximate width of a label in drawing units (Inter at this size).
const textWidth = (t, size) => t.length * size * 0.56;

// The drawing's frame, grown where labels reach past it so none are clipped.
function frame(w, h, list) {
  let x0 = 0;
  let x1 = w;
  let y0 = 0;
  let y1 = h;
  for (const [text, tx, ty, px, py, size = SIZE] of list) {
    const lines = String(text).split('\n');
    const wide = Math.max(...lines.map((l) => textWidth(l, size)));
    const tall = lines.length * size * 1.25;
    const centred = px == null || Math.abs(tx - px) < 1;
    if (centred) {
      x0 = Math.min(x0, tx - wide / 2);
      x1 = Math.max(x1, tx + wide / 2);
    } else if (tx < px) x0 = Math.min(x0, tx - wide);
    else x1 = Math.max(x1, tx + wide);
    y0 = Math.min(y0, ty - tall / 2);
    y1 = Math.max(y1, ty + tall / 2);
  }
  return { x: x0 - 3, y: y0 - 2, w: x1 - x0 + 6, h: y1 - y0 + 4 };
}

export function DiagramView({ spec, maxHeight, labels = true }) {
  if (!spec) return null;
  const { w, h, art, labels: list = [] } = spec;
  const f = labels ? frame(w, h, list) : { x: 0, y: 0, w, h };
  return (
    <View style={{ width: '100%', aspectRatio: f.w / f.h, maxHeight, alignSelf: 'center' }}>
      <Svg width="100%" height="100%" viewBox={`${f.x} ${f.y} ${f.w} ${f.h}`}>
        {art()}
        {labels && list.map(([text, tx, ty, px, py, size], i) => <Label key={i} text={text} tx={tx} ty={ty} px={px} py={py} size={size} />)}
      </Svg>
    </View>
  );
}

// Plain text inside a drawing (axis titles, symbols, captions), not a label.
export function Txt({ x, y, children, size = 10, anchor = 'middle', fill = INK, weight = '500', rotate, italic }) {
  return (
    <SvgText x={x} y={y} fontSize={size} fill={fill} fontFamily={weight === '700' ? 'Inter_700Bold' : 'Inter_500Medium'} fontStyle={italic ? 'italic' : 'normal'} textAnchor={anchor} transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}>
      {children}
    </SvgText>
  );
}

// Arrow head at (x, y) pointing in direction (dx, dy).
export function Head({ x, y, dx, dy, size = 6, fill = INK }) {
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const bx = x - ux * size;
  const by = y - uy * size;
  const px = -uy * size * 0.5;
  const py = ux * size * 0.5;
  return <Path d={`M${x} ${y} L${bx + px} ${by + py} L${bx - px} ${by - py} Z`} fill={fill} />;
}
