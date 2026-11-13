// Shared pieces of the admin console, drawn like the student side of the app:
// the same header with the K8 mark, white cards, icon circles and plain words.
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Modal, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { C, Ic, Logo, P, T, V } from '../../ui/kit';
import { Cta } from '../../ui/chrome';
import { get } from '../../api/adminClient';

export const date = (t) => (t ? new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '-');
export const phoneText = (p) => (p && /^237\d{9}$/.test(p) ? `+237 ${p.slice(3, 6)} ${p.slice(6, 8)} ${p.slice(8, 10)} ${p.slice(10)}` : p || '');
export function ago(t, L) {
  if (!t) return L('never', 'jamais');
  const days = Math.floor((Date.now() - t) / 86_400_000);
  if (days <= 0) return L('today', 'aujourd’hui');
  if (days === 1) return L('yesterday', 'hier');
  if (days < 30) return `${days} ${L('days ago', 'jours')}`;
  return date(t);
}
export const roleName = (role, L) => ({ student: L('Student', 'Élève'), parent: L('Parent', 'Parent'), teacher: L('Teacher', 'Enseignant') })[role] || role;

// Loads an admin list or figure; again when the screen comes back into view,
// when `path` changes, or when reload() is called.
export function useAdminLoad(path) {
  const [state, setState] = useState({ data: null, error: null, busy: true });
  const live = useRef(true);
  const load = useCallback(async () => {
    if (!path) return;
    setState((s) => ({ ...s, busy: true }));
    try {
      const data = await get(path);
      if (live.current) setState({ data, error: null, busy: false });
    } catch (error) {
      if (live.current) setState((s) => ({ ...s, error, busy: false }));
    }
  }, [path]);
  useEffect(() => {
    live.current = true;
    return () => {
      live.current = false;
    };
  }, []);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );
  const setData = useCallback((fn) => setState((s) => ({ ...s, data: fn(s.data) })), []);
  return { ...state, reload: load, setData };
}

const SHADOW = { shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, shadowOffset: { width: 0, height: 1 }, elevation: 2 };

// The top of each admin tab: the K8 mark, the page name and a short line under it.
export function AdminHeader({ title, subtitle, right }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[{ paddingTop: insets.top, backgroundColor: 'rgba(255,255,255,0.96)', zIndex: 50 }, SHADOW]}>
      <V c="h-14 px-margin flex-row items-center justify-between gap-space-sm">
        <V c="flex-row items-center gap-space-xs flex-1 min-w-0">
          <Logo size={32} />
          <V c="ml-1 flex-1 min-w-0">
            <T c="font-headline-sm text-headline-sm text-primary-container tracking-tight" style={{ lineHeight: 18 }} numberOfLines={1}>
              {title}
            </T>
            {!!subtitle && (
              <T c="font-label-sm text-label-sm text-on-surface-variant mt-0.5" style={{ fontWeight: '400', lineHeight: 12 }} numberOfLines={1}>
                {subtitle}
              </T>
            )}
          </V>
        </V>
        {right}
      </V>
    </View>
  );
}

// A titled part of a page, as on the student Home: the title, and a link on the right.
export function Section({ title, action, onAction, children }) {
  return (
    <V c="gap-space-xs">
      <V c="flex-row items-end justify-between gap-space-sm">
        <T c="font-headline-sm text-headline-sm text-on-surface flex-1" style={{ fontWeight: '700' }}>
          {title}
        </T>
        {!!action && (
          <P onPress={onAction} hitSlop={8}>
            <T c="font-label-md text-label-md text-primary-container">{action}</T>
          </P>
        )}
      </V>
      {children}
    </V>
  );
}

export function Card({ children, c = '' }) {
  return <V c={`bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container overflow-hidden ${c}`}>{children}</V>;
}

// A number that matters, with what it counts.
export function Stat({ icon, value, label, bg = '#e6eef7', tint = 'primary-container', onPress }) {
  return (
    <P c="w-[48.5%] bg-surface-container-lowest rounded-xl p-space-sm gap-1 shadow-sm border border-surface-container" style={{ minHeight: 104 }} onPress={onPress} disabled={!onPress} accessibilityLabel={`${value} ${label}`}>
      <V c="w-9 h-9 rounded-lg items-center justify-center" style={{ backgroundColor: bg }}>
        <Ic n={icon} s={20} c={tint} fill />
      </V>
      <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700', fontVariant: ['tabular-nums'] }} numberOfLines={1}>
        {value}
      </T>
      <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={2}>
        {label}
      </T>
    </P>
  );
}

// One line of a list: an icon or picture, what it is, a short line under it,
// and what is on the right (a label, a count or the arrow).
export function Row({ icon, iconBg = '#e6eef7', iconTint = 'primary-container', lead, title, sub, right, onPress, first, danger, badge }) {
  // A row that does nothing when tapped is plain, not a faded button.
  const Box = onPress ? P : V;
  return (
    <Box c={`flex-row items-center gap-space-sm px-space-md py-space-sm ${first ? '' : 'border-t border-surface-container'}`} style={{ minHeight: 60 }} {...(onPress ? { onPress, scale: 0.99 } : null)}>
      {lead}
      {!lead && !!icon && (
        <V c="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: danger ? '#fdecea' : iconBg }}>
          <Ic n={icon} s={21} c={danger ? 'error' : iconTint} />
        </V>
      )}
      <V c="flex-1 gap-0.5 min-w-0">
        <T c={`font-label-lg text-label-lg ${danger ? 'text-error' : 'text-on-surface'}`} style={{ fontWeight: '600' }} numberOfLines={2}>
          {title}
        </T>
        {!!sub && (
          <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={2}>
            {sub}
          </T>
        )}
      </V>
      {badge ? (
        <V c="min-w-6 h-6 px-2 rounded-full bg-error items-center justify-center">
          <T c="font-label-sm text-label-sm text-on-error" style={{ fontWeight: '700' }}>
            {badge}
          </T>
        </V>
      ) : null}
      {right}
      {!!onPress && !right && <Ic n="chevron_right" s={20} c="outline" />}
    </Box>
  );
}

const TONES = {
  ok: { bg: '#e3f4ec', fg: '#0f7b5a' },
  warn: { bg: '#fff3d6', fg: '#8a5a00' },
  bad: { bg: '#fdecea', fg: '#b3261e' },
  info: { bg: '#e6eef7', fg: '#02287b' },
  muted: { bg: '#eef1f6', fg: '#4e5b77' },
};
export function Pill({ text, tone = 'muted' }) {
  const t = TONES[tone] || TONES.muted;
  return (
    <V c="px-2.5 py-1 rounded-full self-start" style={{ backgroundColor: t.bg }}>
      <T c="font-label-sm text-label-sm" style={{ color: t.fg, fontWeight: '700' }} numberOfLines={1}>
        {text}
      </T>
    </V>
  );
}

// A row of filters to choose from, scrolling sideways on a narrow phone.
export function Chips({ items, value, onChange }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingVertical: 2 }}>
      {items.map(([id, label]) => {
        const on = value === id;
        return (
          <P key={id || 'all'} c={`h-9 px-4 rounded-full items-center justify-center ${on ? 'bg-primary' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => onChange(id)} accessibilityRole="button" accessibilityState={{ selected: on }}>
            <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '600' }}>
              {label}
            </T>
          </P>
        );
      })}
    </ScrollView>
  );
}

export function Empty({ icon = 'inbox', text }) {
  return (
    <V c="items-center gap-space-xs py-space-lg px-space-md">
      <V c="w-14 h-14 rounded-full bg-surface-container-low items-center justify-center">
        <Ic n={icon} s={28} c="outline" />
      </V>
      <T c="font-body-md text-body-md text-on-surface-variant text-center">{text}</T>
    </V>
  );
}

export function Loading() {
  return <ActivityIndicator color={C['primary-container']} style={{ marginVertical: 24 }} />;
}

// A sheet that slides up to confirm something that matters (blocking,
// deleting), with the action in plain words and a way back.
export function Sheet({ visible, onClose, icon = 'help', danger, title, text, action, onAction, busy, cancel = 'Cancel', children }) {
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
        <V c="bg-surface-container-lowest rounded-t-xl p-space-lg gap-space-md" style={{ paddingBottom: 24 + insets.bottom }}>
          <V c="w-12 h-12 rounded-full items-center justify-center" style={{ backgroundColor: danger ? '#fdecea' : '#e6eef7' }}>
            <Ic n={icon} s={26} c={danger ? 'error' : 'primary-container'} />
          </V>
          <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
            {title}
          </T>
          {!!text && <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>{text}</T>}
          {children}
          <V c="gap-space-sm">
            {danger ? (
              <P c="w-full h-[52px] rounded-xl bg-error items-center justify-center" onPress={onAction} disabled={busy}>
                {busy ? <ActivityIndicator color="#fff" /> : <T c="font-label-lg text-label-lg text-on-error" style={{ fontWeight: '700' }}>{action}</T>}
              </P>
            ) : (
              <Cta variant="dark" icon={null} label={action} loading={busy} onPress={onAction} />
            )}
            <Cta variant="soft" icon={null} label={cancel} onPress={onClose} disabled={busy} />
          </V>
        </V>
      </V>
    </Modal>
  );
}
