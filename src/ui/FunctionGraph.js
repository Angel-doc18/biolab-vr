// A graph drawn from what the AI describes: curves from formulas (y = x² - 4x
// + 3, sin x) and labelled points, on axes with a clear scale, like a neat
// sketch on graph paper. The geometry is in lib/graphModel (shared with the PDF).
import { useState } from 'react';
import { View } from 'react-native';
import Svg, { Circle, G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import { PAD, fmt, graphModel } from '../lib/graphModel';

const INK = '#1f2933';
const GRID = '#e3e8ee';

export default function FunctionGraph({ graph, height = 250 }) {
  const [w, setW] = useState(0);
  const m = w > 0 ? graphModel(graph, w, height) : null;
  if (w > 0 && !m) return null;
  return (
    <View onLayout={(e) => setW(e.nativeEvent.layout.width)} style={{ width: '100%', minHeight: height }} accessibilityLabel={graph.title || 'Graph'}>
      {!!m && (
        <Svg width={w} height={height}>
          <Rect x={PAD.l} y={PAD.t} width={m.W} height={m.H} fill="#ffffff" />
          {m.xTicks.map((t) => (
            <G key={`x${t.v}`}>
              <Line x1={t.at} y1={PAD.t} x2={t.at} y2={PAD.t + m.H} stroke={GRID} strokeWidth={1} />
              <SvgText x={t.at} y={PAD.t + m.H + 14} fontSize={10} fill={INK} textAnchor="middle">
                {fmt(t.v)}
              </SvgText>
            </G>
          ))}
          {m.yTicks.map((t) => (
            <G key={`y${t.v}`}>
              <Line x1={PAD.l} y1={t.at} x2={PAD.l + m.W} y2={t.at} stroke={GRID} strokeWidth={1} />
              <SvgText x={PAD.l - 5} y={t.at + 3} fontSize={10} fill={INK} textAnchor="end">
                {fmt(t.v)}
              </SvgText>
            </G>
          ))}
          <Line x1={PAD.l} y1={m.axisY} x2={PAD.l + m.W} y2={m.axisY} stroke={INK} strokeWidth={1.4} />
          <Line x1={m.axisX} y1={PAD.t} x2={m.axisX} y2={PAD.t + m.H} stroke={INK} strokeWidth={1.4} />
          <SvgText x={PAD.l + m.W} y={PAD.t + m.H + 26} fontSize={11} fill={INK} textAnchor="end" fontWeight="bold">
            {graph.xLabel || 'x'}
          </SvgText>
          <SvgText x={PAD.l + 4} y={PAD.t + 10} fontSize={11} fill={INK} fontWeight="bold">
            {graph.yLabel || 'y'}
          </SvgText>
          {m.curves.map((c, i) => (
            <Path key={`f${i}`} d={c.d} stroke={c.colour} strokeWidth={2.4} fill="none" />
          ))}
          {m.points.map((p, i) => (
            <G key={`p${i}`}>
              <Circle cx={p.cx} cy={p.cy} r={4} fill="#c8463d" />
              {!!p.label && (
                <SvgText x={p.right ? p.cx - 6 : p.cx + 6} y={p.cy - 6} fontSize={10} fill={INK} fontWeight="bold" textAnchor={p.right ? 'end' : 'start'}>
                  {p.label}
                </SvgText>
              )}
            </G>
          ))}
        </Svg>
      )}
    </View>
  );
}
