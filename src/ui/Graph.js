// Results graph for practicals: points plotted on labelled axes with sensible
// scales, a line of best fit (optionally through the origin) and a key when
// several series are compared.
import { View } from 'react-native';
import Svg, { Circle, G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';

const INK = '#1f2933';
const GRID = '#dfe5ea';
export const SERIES_COLOURS = ['#0369a1', '#c8463d', '#2e7d32', '#7a4fb3', '#c27c0e'];

// Least squares line y = m x + c, or y = m x when through the origin.
export function fitLine(points, origin = false) {
  const n = points.length;
  if (n < 2) return null;
  if (origin) {
    const sxx = points.reduce((a, p) => a + p.x * p.x, 0);
    if (!sxx) return null;
    return { m: points.reduce((a, p) => a + p.x * p.y, 0) / sxx, c: 0 };
  }
  const mx = points.reduce((a, p) => a + p.x, 0) / n;
  const my = points.reduce((a, p) => a + p.y, 0) / n;
  const sxx = points.reduce((a, p) => a + (p.x - mx) ** 2, 0);
  if (!sxx) return null;
  const m = points.reduce((a, p) => a + (p.x - mx) * (p.y - my), 0) / sxx;
  return { m, c: my - m * mx };
}

// A tick step of 1, 2 or 5 times a power of ten giving about five divisions.
function niceStep(span) {
  const raw = span / 5 || 1;
  const p = 10 ** Math.floor(Math.log10(raw));
  const f = raw / p;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * p;
}
const fmt = (v, step) => {
  const dp = step >= 1 ? 0 : Math.min(3, Math.ceil(-Math.log10(step)));
  return v.toFixed(dp);
};

export default function Graph({ series, xLabel, yLabel, fit, xMax, yMax, curve, height = 230 }) {
  const all = series.flatMap((s) => s.points);
  const X0 = 46;
  const Y0 = 12;
  const W = 266;
  const H = 168;
  const xTop = Math.max(xMax || 0, ...all.map((p) => p.x), 1e-9);
  const yTop = Math.max(yMax || 0, ...all.map((p) => p.y), 1e-9);
  const xs = niceStep(xTop);
  const ys = niceStep(yTop);
  const xEnd = Math.ceil(xTop / xs) * xs;
  const yEnd = Math.ceil(yTop / ys) * ys;
  const px = (x) => X0 + (x / xEnd) * W;
  const py = (y) => Y0 + H - (y / yEnd) * H;
  const xt = Array.from({ length: Math.round(xEnd / xs) + 1 }, (_, i) => i * xs);
  const yt = Array.from({ length: Math.round(yEnd / ys) + 1 }, (_, i) => i * ys);
  return (
    <View style={{ width: '100%', aspectRatio: 320 / 236, maxHeight: height }}>
      <Svg width="100%" height="100%" viewBox="0 0 320 236">
        <Rect x={X0} y={Y0} width={W} height={H} fill="#ffffff" />
        {xt.map((v) => (
          <G key={`x${v}`}>
            <Line x1={px(v)} y1={Y0} x2={px(v)} y2={Y0 + H} stroke={GRID} strokeWidth={0.7} />
            <SvgText x={px(v)} y={Y0 + H + 13} fontSize={9} fill={INK} textAnchor="middle" fontFamily="Inter_500Medium">
              {fmt(v, xs)}
            </SvgText>
          </G>
        ))}
        {yt.map((v) => (
          <G key={`y${v}`}>
            <Line x1={X0} y1={py(v)} x2={X0 + W} y2={py(v)} stroke={GRID} strokeWidth={0.7} />
            <SvgText x={X0 - 5} y={py(v) + 3} fontSize={9} fill={INK} textAnchor="end" fontFamily="Inter_500Medium">
              {fmt(v, ys)}
            </SvgText>
          </G>
        ))}
        <Line x1={X0} y1={Y0 + H} x2={X0 + W} y2={Y0 + H} stroke={INK} strokeWidth={1.2} />
        <Line x1={X0} y1={Y0} x2={X0} y2={Y0 + H} stroke={INK} strokeWidth={1.2} />
        <SvgText x={X0 + W / 2} y={Y0 + H + 30} fontSize={10} fill={INK} textAnchor="middle" fontFamily="Inter_700Bold">
          {xLabel}
        </SvgText>
        <SvgText x={12} y={Y0 + H / 2} fontSize={10} fill={INK} textAnchor="middle" fontFamily="Inter_700Bold" transform={`rotate(-90 12 ${Y0 + H / 2})`}>
          {yLabel}
        </SvgText>
        {series.map((s, si) => {
          const colour = s.colour || SERIES_COLOURS[si % SERIES_COLOURS.length];
          const pts = [...s.points].sort((a, b) => a.x - b.x);
          const line = fit ? fitLine(pts, fit === 'origin') : null;
          return (
            <G key={s.name || si}>
              {line && pts.length >= 2 && (
                <Line
                  x1={px(fit === 'origin' ? 0 : pts[0].x)}
                  y1={py(Math.max(0, line.m * (fit === 'origin' ? 0 : pts[0].x) + line.c))}
                  x2={px(pts[pts.length - 1].x)}
                  y2={py(Math.max(0, line.m * pts[pts.length - 1].x + line.c))}
                  stroke={colour}
                  strokeWidth={1.4}
                />
              )}
              {curve && pts.length >= 2 && <Path d={pts.map((p, i) => `${i ? 'L' : 'M'}${px(p.x)} ${py(p.y)}`).join(' ')} fill="none" stroke={colour} strokeWidth={1.4} />}
              {pts.map((p, i) => (
                <G key={i}>
                  <Line x1={px(p.x) - 3.5} y1={py(p.y) - 3.5} x2={px(p.x) + 3.5} y2={py(p.y) + 3.5} stroke={colour} strokeWidth={1.4} />
                  <Line x1={px(p.x) - 3.5} y1={py(p.y) + 3.5} x2={px(p.x) + 3.5} y2={py(p.y) - 3.5} stroke={colour} strokeWidth={1.4} />
                </G>
              ))}
            </G>
          );
        })}
        {series.length > 1 &&
          series.map((s, si) => (
            <G key={`k${si}`}>
              <Circle cx={X0 + 10} cy={Y0 + 10 + si * 13} r={3.5} fill={s.colour || SERIES_COLOURS[si % SERIES_COLOURS.length]} />
              <SvgText x={X0 + 18} y={Y0 + 13.5 + si * 13} fontSize={9} fill={INK} fontFamily="Inter_500Medium">
                {s.name}
              </SvgText>
            </G>
          ))}
      </Svg>
    </View>
  );
}
