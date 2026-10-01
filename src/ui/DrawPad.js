// Biological drawing pad: pencil strokes, ruled label lines and labels.
// Coordinates are stored in a 300 x 300 space so drawings scale anywhere.
import { useRef, useState } from 'react';
import { PanResponder, View } from 'react-native';
import Svg, { Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import { Ic, Input, P, T, V } from './kit';

const S = 300;

export function Drawing({ data, size = 140, grid }) {
  if (!data) return null;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${S} ${S}`}>
      <Rect width={S} height={S} fill="#ffffff" />
      {grid && <Rect width={S} height={S} fill="none" stroke="#e2efff" strokeWidth={2} />}
      {(data.strokes || []).map((d, i) => (
        <Path key={`s${i}`} d={d} stroke="#001e31" strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {(data.lines || []).map(([x1, y1, x2, y2], i) => (
        <Line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#001e31" strokeWidth={1.4} />
      ))}
      {(data.labels || []).map((l, i) => (
        <SvgText key={`t${i}`} x={l.x} y={l.y} fontSize={13} fill="#001e31">
          {l.text}
        </SvgText>
      ))}
    </Svg>
  );
}

export default function DrawPad({ initial, onChange, L }) {
  const [data, setData] = useState(initial || { strokes: [], lines: [], labels: [] });
  const [mode, setMode] = useState('pencil');
  const [live, setLiveState] = useState(null);
  const liveRef = useRef(null);
  const setLive = (v) => {
    liveRef.current = typeof v === 'function' ? v(liveRef.current) : v;
    setLiveState(liveRef.current);
  };
  const [pending, setPending] = useState(null);
  const [text, setText] = useState('');
  const box = useRef({ w: 1 });
  const st = useRef({});
  st.current.mode = mode;
  st.current.setLive = setLive;

  const commit = (next) => {
    setData(next);
    onChange?.(next);
  };
  const scale = (v) => Math.round((v / box.current.w) * S * 10) / 10;

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: (e) => {
        const x = scale(e.nativeEvent.locationX);
        const y = scale(e.nativeEvent.locationY);
        st.current.start = [x, y];
        st.current.last = null;
        st.current.origin = [e.nativeEvent.locationX, e.nativeEvent.locationY];
        if (st.current.mode === 'pencil') st.current.setLive({ d: `M${x} ${y}` });
        if (st.current.mode === 'line') st.current.setLive({ line: [x, y, x, y] });
        if (st.current.mode === 'label') setPending({ x, y });
      },
      onPanResponderMove: (e, g) => {
        const x = scale(st.current.origin[0] + g.dx);
        const y = scale(st.current.origin[1] + g.dy);
        if (st.current.mode === 'pencil') {
          // Skip points closer than 2.5 units so saved drawings stay small.
          const last = st.current.last || st.current.start;
          if (Math.hypot(x - last[0], y - last[1]) < 2.5) return;
          st.current.last = [x, y];
          st.current.setLive((l) => (l ? { d: `${l.d} L${x} ${y}` } : l));
        }
        if (st.current.mode === 'line') st.current.setLive({ line: [...st.current.start, x, y] });
      },
      onPanResponderRelease: () => {
        if (liveRef.current) st.current.finish(liveRef.current);
        st.current.setLive(null);
      },
    })
  ).current;

  st.current.finish = (l) => {
    if (l.d && l.d.includes('L')) commit({ ...data, strokes: [...data.strokes, l.d] });
    if (l.line) {
      const [x1, y1, x2, y2] = l.line;
      if (Math.hypot(x2 - x1, y2 - y1) > 6) commit({ ...data, lines: [...data.lines, l.line] });
    }
  };

  const undo = () => {
    const kinds = ['labels', 'lines', 'strokes'];
    for (const k of kinds) {
      if (data[k].length) {
        commit({ ...data, [k]: data[k].slice(0, -1) });
        return;
      }
    }
  };

  const Tool = ({ id, icon, label }) => (
    <P c={`flex-1 h-10 rounded-lg flex-row items-center justify-center gap-1 ${mode === id ? 'bg-primary-container' : 'bg-surface-container-low'}`} onPress={() => setMode(id)}>
      <Ic n={icon} s={18} c={mode === id ? 'on-primary' : 'primary-container'} />
      <T c={`font-label-md text-label-md ${mode === id ? 'text-on-primary' : 'text-primary-container'}`}>{label}</T>
    </P>
  );

  return (
    <V c="gap-space-sm">
      <V c="flex-row gap-2">
        <Tool id="pencil" icon="draw" label={L('Pencil', 'Crayon')} />
        <Tool id="line" icon="horizontal_rule" label={L('Label line', 'Trait')} />
        <Tool id="label" icon="title" label={L('Label', 'Légende')} />
        <P c="w-10 h-10 rounded-lg bg-surface-container-low items-center justify-center" onPress={undo} accessibilityLabel="Undo">
          <Ic n="undo" s={20} c="primary-container" />
        </P>
      </V>
      <View
        style={{ width: '100%', aspectRatio: 1, borderRadius: 12, overflow: 'hidden', backgroundColor: '#fff', borderWidth: 1, borderColor: '#d7eaff' }}
        onLayout={(e) => (box.current.w = e.nativeEvent.layout.width)}
        {...pan.panHandlers}
      >
        <Svg width="100%" height="100%" viewBox={`0 0 ${S} ${S}`} pointerEvents="none">
          {(data.strokes || []).map((d, i) => (
            <Path key={`s${i}`} d={d} stroke="#001e31" strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          ))}
          {live?.d && <Path d={live.d} stroke="#0369a1" strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round" />}
          {(data.lines || []).map(([x1, y1, x2, y2], i) => (
            <Line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#001e31" strokeWidth={1.4} />
          ))}
          {live?.line && <Line x1={live.line[0]} y1={live.line[1]} x2={live.line[2]} y2={live.line[3]} stroke="#0369a1" strokeWidth={1.4} />}
          {(data.labels || []).map((l, i) => (
            <SvgText key={`t${i}`} x={l.x} y={l.y} fontSize={13} fill="#001e31">
              {l.text}
            </SvgText>
          ))}
        </Svg>
      </View>
      {pending && (
        <V c="flex-row items-center gap-2">
          <Input c="flex-1 h-11 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Label text, e.g. cell wall', 'Légende, ex. paroi')} value={text} onChangeText={setText} autoFocus maxLength={30} />
          <P
            c="h-11 px-4 rounded-lg bg-primary-container items-center justify-center"
            onPress={() => {
              if (text.trim()) commit({ ...data, labels: [...data.labels, { x: pending.x, y: pending.y, text: text.trim() }] });
              setPending(null);
              setText('');
            }}
          >
            <T c="font-label-lg text-label-lg text-on-primary">{L('Add', 'Ajouter')}</T>
          </P>
        </V>
      )}
      <T c="font-body-sm text-body-sm text-on-surface-variant">
        {mode === 'pencil'
          ? L('Draw with one clean, continuous line. Do not shade.', 'Dessinez d’un trait net et continu. Pas d’ombrage.')
          : mode === 'line'
          ? L('Drag to rule a straight label line.', 'Glissez pour tracer un trait de légende droit.')
          : L('Tap where the label should go, then type it.', 'Touchez l’endroit de la légende, puis tapez-la.')}
      </T>
    </V>
  );
}
