// Building blocks for the "choose, then go deeper" screens: subject cards,
// shortcut tiles, topic cards and the step line that tells a first-time user
// where they are (subject, then topic, then subtopic).
import { Bar, Ic, P, T, V } from './kit';

// How each science looks wherever it appears.
export const SUBJECT_LOOK = {
  biology: { icon: 'biotech', tint: '#2f7d4f', bg: '#e6f2ea' },
  chemistry: { icon: 'science', tint: '#7a4bb3', bg: '#efe8f8' },
  physics: { icon: 'bolt', tint: '#1f6fb2', bg: '#e4eef8' },
  humanbio: { icon: 'cardiology', tint: '#b8433f', bg: '#f8e7e6' },
  computer: { icon: 'computer', tint: '#37474f', bg: '#e6eaed' },
  geography: { icon: 'public', tint: '#9a6a12', bg: '#f6eddb' },
  homeec: { icon: 'restaurant', tint: '#b0466f', bg: '#f7e4ec' },
  // Advanced Level: the same colour as the Ordinary Level subject, a deeper shade.
  'a-biology': { icon: 'genetics', tint: '#24613d', bg: '#dcebe1' },
  'a-chemistry': { icon: 'experiment', tint: '#5e3591', bg: '#e6dcf4' },
  'a-physics': { icon: 'electric_bolt', tint: '#17548a', bg: '#d9e6f4' },
};
const look = (id) => SUBJECT_LOOK[id] || SUBJECT_LOOK.biology;

export function SubjectIcon({ id, size = 48 }) {
  const l = look(id);
  return (
    <V c="items-center justify-center rounded-xl" style={{ width: size, height: size, backgroundColor: l.bg }}>
      <Ic n={l.icon} s={Math.round(size * 0.55)} c={l.tint} fill />
    </V>
  );
}

// "Step 1 of 3" above the instruction, so nobody is lost.
export function StepLine({ step, text }) {
  return (
    <V c="gap-0.5">
      <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
        {step}
      </T>
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
        {text}
      </T>
    </V>
  );
}

// items: [{ id, name, code, line, pct, current }]
export function SubjectGrid({ items, onPick, manage, onManage, currentLabel }) {
  return (
    <V c="flex-row flex-wrap justify-between gap-y-space-sm">
      {items.map((s) => {
        const l = look(s.id);
        return (
          <P
            key={s.id}
            c={`w-[48.5%] bg-surface-container-lowest rounded-xl p-space-md gap-space-sm shadow-sm ${s.current ? 'border-2' : 'border border-surface-container'}`}
            style={s.current ? { borderColor: l.tint } : null}
            onPress={() => onPick(s.id)}
            accessibilityRole="button"
            accessibilityLabel={`${s.name}. ${s.line}`}
          >
            <V c="flex-row items-start justify-between">
              <SubjectIcon id={s.id} />
              <Ic n="arrow_forward" s={22} c={l.tint} />
            </V>
            <V c="gap-0.5">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }} numberOfLines={2}>
                {s.name}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">{s.code}</T>
            </V>
            <T c="font-body-sm text-body-sm text-on-surface" numberOfLines={2}>
              {s.line}
            </T>
            {s.pct != null && (
              <V c="gap-1">
                <V c="h-1.5 rounded-full bg-surface-container overflow-hidden">
                  <V c="h-full rounded-full" style={{ width: `${Math.max(3, s.pct)}%`, backgroundColor: l.tint }} />
                </V>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{s.pctLabel}</T>
              </V>
            )}
            {s.current && !!currentLabel && (
              <T c="font-label-md text-label-md" style={{ color: l.tint, fontWeight: '700' }}>
                {currentLabel}
              </T>
            )}
          </P>
        );
      })}
      {!!manage && (
        <P c="w-[48.5%] rounded-xl p-space-md gap-space-sm border-2 border-dashed border-outline-variant items-start justify-center" style={{ minHeight: 150 }} onPress={onManage} accessibilityRole="button">
          <V c="w-12 h-12 rounded-xl bg-surface-container-low items-center justify-center">
            <Ic n="add" s={26} c="primary-container" />
          </V>
          <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
            {manage}
          </T>
        </P>
      )}
    </V>
  );
}

// Big shortcut tiles. items: [{ icon, title, sub, onPress, tint? }]
export function TileGrid({ items, columns = 2 }) {
  const w = columns === 3 ? 'w-[31.5%]' : 'w-[48.5%]';
  return (
    <V c="flex-row flex-wrap justify-between gap-y-space-sm">
      {items.map((t) => (
        <P key={t.title} c={`${w} bg-surface-container-lowest rounded-xl p-space-sm gap-space-xs shadow-sm border border-surface-container`} style={{ minHeight: 112 }} onPress={t.onPress} accessibilityRole="button" accessibilityLabel={t.title}>
          <V c="w-11 h-11 rounded-xl items-center justify-center" style={{ backgroundColor: t.bg || '#e6eef7' }}>
            <Ic n={t.icon} s={24} c={t.tint || 'primary-container'} fill />
          </V>
          <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={2}>
            {t.title}
          </T>
          {!!t.sub && (
            <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={2}>
              {t.sub}
            </T>
          )}
        </P>
      ))}
    </V>
  );
}

// One topic (unit) in a list: its number, name, what is inside, progress.
export function TopicCard({ n, title, sub, pct, done, tint = '#1f6fb2', onPress, locked }) {
  return (
    <P c="bg-surface-container-lowest rounded-xl p-space-md flex-row items-center gap-space-sm shadow-sm border border-surface-container" onPress={onPress} scale={0.99} accessibilityRole="button" accessibilityLabel={`${n}. ${title}`}>
      <V c="w-11 h-11 rounded-xl items-center justify-center" style={{ backgroundColor: done ? tint : '#eef2f6' }}>
        {done ? (
          <Ic n="check" s={22} c="on-primary" />
        ) : (
          <T c="font-headline-sm text-headline-sm" style={{ fontWeight: '700', color: tint }}>
            {n}
          </T>
        )}
      </V>
      <V c="flex-1 gap-1">
        <T c={`font-label-lg text-label-lg ${locked ? 'text-on-surface-variant' : 'text-on-surface'}`} style={{ fontWeight: '700' }} numberOfLines={2}>
          {title}
        </T>
        {!!sub && <T c="font-body-sm text-body-sm text-on-surface-variant">{sub}</T>}
        {pct > 0 && (
          <V c="h-1 rounded-full bg-surface-container overflow-hidden mt-0.5">
            <V c="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: tint }} />
          </V>
        )}
      </V>
      <Ic n={locked ? 'lock' : 'chevron_right'} s={24} c="outline" />
    </P>
  );
}

export { Bar };
