import { Ic, P, T, V } from './kit';

const pad = (n) => String(n).padStart(2, '0');
const twelve = (h, m) => `${((h + 11) % 12) + 1}:${pad(m)} ${h < 12 ? 'AM' : 'PM'}`;

function Btn({ icon, onPress, label }) {
  return (
    <P c="w-11 h-11 rounded-lg bg-surface-container-low items-center justify-center" onPress={onPress} accessibilityLabel={label}>
      <Ic n={icon} s={22} c="primary-container" />
    </P>
  );
}

// Hours and quarter hours with up and down buttons; value is "HH:MM".
export function TimePicker({ value, onChange }) {
  const [h, m] = value.split(':').map(Number);
  const set = (nh, nm) => onChange(`${pad((nh + 24) % 24)}:${pad((nm + 60) % 60)}`);
  return (
    <V c="flex-row items-center justify-center gap-space-md p-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant">
      <V c="items-center gap-1">
        <Btn icon="expand_less" onPress={() => set(h + 1, m)} label="Hour up" />
        <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
          {pad(h)}
        </T>
        <Btn icon="expand_more" onPress={() => set(h - 1, m)} label="Hour down" />
      </V>
      <T c="font-headline-md text-headline-md text-on-surface">:</T>
      <V c="items-center gap-1">
        <Btn icon="expand_less" onPress={() => set(h, m + 15 >= 60 ? 0 : m - (m % 15) + 15)} label="Minute up" />
        <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
          {pad(m)}
        </T>
        <Btn icon="expand_more" onPress={() => set(h, m % 15 ? m - (m % 15) : m - 15 < 0 ? 45 : m - 15)} label="Minute down" />
      </V>
      <T c="font-body-sm text-body-sm text-on-surface-variant">{twelve(h, m)}</T>
    </V>
  );
}
