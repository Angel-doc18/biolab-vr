import { View } from 'react-native';
import { C, R, SH, alpha } from '../theme';
import { Btn, Icon, Row, T } from './ui';

// Deterministic shuffle so options keep their order across re-renders
// but differ per question/attempt (the correct answer is authored first).
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return h >>> 0;
}
export function shuffled(options, seed) {
  let s = hash(seed) || 1;
  const rand = () => ((s = Math.imul(s ^ (s >>> 15), 2246822507) ^ Math.imul(s ^ (s >>> 13), 3266489909)) >>> 0) / 4294967296;
  const idx = options.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx; // idx[displayPos] = authored index (0 = correct)
}

export const LETTERS = ['A', 'B', 'C', 'D'];

// Mastery Practice option row (3D Cell VR screen design).
export function PracticeOption({ letter, text, state, onPress }) {
  if (state === 'correct') {
    return (
      <Row style={{ padding: 12, borderRadius: R.xl, backgroundColor: alpha('secondary-container', 0.4), alignItems: 'flex-start', gap: 10, boxShadow: SH.sm }}>
        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: C.secondary, alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
          <Icon name="check" size={14} color={C['on-secondary']} />
        </View>
        <View style={{ flex: 1, minWidth: 0 }}>
          <T v="body-sm" w={600} c="on-secondary-container">{letter}. {text}</T>
          <Row style={{ gap: 4, marginTop: 4 }}>
            <Icon name="check_circle" size={13} color={C.secondary} />
            <T v="label-sm" size={11} w={600} c="secondary" style={{ letterSpacing: 0 }}>Correct · GCE Model Answer (2 Marks)</T>
          </Row>
        </View>
      </Row>
    );
  }
  if (state === 'wrong') {
    return (
      <Row style={{ padding: 12, borderRadius: R.xl, backgroundColor: alpha('error-container', 0.6), alignItems: 'flex-start', gap: 10 }}>
        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: C.error, alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
          <Icon name="close" size={14} color={C['on-error']} />
        </View>
        <View style={{ flex: 1, minWidth: 0 }}>
          <T v="body-sm" w={600} c="on-error-container">{letter}. {text}</T>
          <T v="label-sm" size={11} w={600} c="error" style={{ letterSpacing: 0, marginTop: 4 }}>Your answer · 0 Marks</T>
        </View>
      </Row>
    );
  }
  return (
    <Btn disabled={state === 'locked'} onPress={onPress} style={{ width: '100%', padding: 12, borderRadius: R.xl, backgroundColor: C.surface, flexDirection: 'row', alignItems: 'flex-start', gap: 10 }}>
      <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: C['surface-container-highest'], alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
        <T v="label-sm" c="on-surface-variant" style={{ letterSpacing: 0 }}>{letter}</T>
      </View>
      <T v="body-sm" style={{ flex: 1 }}>{text}</T>
    </Btn>
  );
}
