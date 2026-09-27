import { Image, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { C, S, R, SH, HEADER_H, NAV_H, alpha } from '../theme';
import { Btn, Dot, Icon, Row, T } from './ui';

export const TABS = [
  { id: 'curriculum', label: 'Curriculum', icon: 'menu_book' },
  { id: 'cell', label: '3D Cell VR', icon: 'view_in_ar' },
  { id: 'lab', label: 'Virtual Lab', icon: 'science' },
  { id: 'exam', label: 'Exam Arena', icon: 'school' },
];

// bg-surface-container-lowest/90 + backdrop-blur-xl
function Frosted({ style, children }) {
  if (Platform.OS === 'ios') {
    return (
      <BlurView intensity={40} tint="light" style={style}>
        <View style={[StyleSheet.absoluteFill, { backgroundColor: alpha('surface-container-lowest', 0.9) }]} />
        {children}
      </BlurView>
    );
  }
  return <View style={[style, { backgroundColor: alpha('surface-container-lowest', 0.95) }]}>{children}</View>;
}

export function AppHeader({ section, onAskAI, onProfile }) {
  const insets = useSafeAreaInsets();
  return (
    <Frosted style={[styles.header, { paddingTop: insets.top, boxShadow: '0px 1px 8px rgba(0,0,0,0.04)' }]}>
      <View style={{ height: HEADER_H, paddingHorizontal: S.md, justifyContent: 'center' }}>
        <Row style={{ justifyContent: 'space-between', gap: S.xs }}>
          <Row style={{ gap: S.sm, flex: 1, minWidth: 0 }}>
            <View style={styles.logoBox}>
              <Image source={require('../../assets/img/logo.png')} style={{ height: 32, width: 32 }} resizeMode="contain" accessibilityLabel="BioSpatial VR Minimal Icon Logo" />
            </View>
            <View style={{ flex: 1, minWidth: 0 }}>
              <Row style={{ gap: 6 }}>
                <T v="headline-sm" numberOfLines={1} style={{ flexShrink: 1 }}>BioSpatial VR</T>
                <View style={[styles.pill, { backgroundColor: C['surface-container-high'] }]}>
                  <T v="label-sm" c="on-surface-variant" upper>Cameroon GCE</T>
                </View>
              </Row>
              <Row style={{ gap: S.sm, marginTop: 2 }}>
                <T v="label-md" c="primary" w={600} numberOfLines={1} style={{ flexShrink: 1 }}>{section}</T>
                <Row style={[styles.pill, { gap: 4, backgroundColor: alpha('secondary-container', 0.4) }]}>
                  <Dot size={6} color="secondary" />
                  <T v="label-sm" c="on-secondary-container" numberOfLines={1}>Offline Ready (Syncd)</T>
                </Row>
              </Row>
            </View>
          </Row>
          <Row style={{ gap: S.sm, flexShrink: 0 }}>
            <Btn accessibilityLabel="Ask AI" onPress={onAskAI} style={styles.askBtn}>
              <Icon name="auto_awesome" size={18} color={C['on-surface-variant']} />
            </Btn>
            <Btn accessibilityLabel="Profile" onPress={onProfile} style={styles.avatarBox}>
              <Image source={require('../../assets/img/profile.jpg')} style={{ width: 32, height: 32, borderRadius: 16 }} />
            </Btn>
          </Row>
        </Row>
      </View>
    </Frosted>
  );
}

export function BottomNav({ active, onChange }) {
  const insets = useSafeAreaInsets();
  return (
    <Frosted style={[styles.nav, { paddingBottom: insets.bottom, boxShadow: '0px -2px 12px rgba(0,0,0,0.04)' }]}>
      <Row style={{ justifyContent: 'space-around', height: NAV_H, paddingHorizontal: S.xs }}>
        {TABS.map((t) => {
          const on = t.id === active;
          return (
            <Btn
              key={t.id}
              accessibilityRole="tab"
              accessibilityState={{ selected: on }}
              onPress={() => onChange(t.id)}
              style={[styles.tab, on && { backgroundColor: C['primary-container'], boxShadow: SH.sm }]}
            >
              <Icon name={t.icon} size={22} color={on ? C['on-primary'] : C['on-surface-variant']} />
              <T v="label-sm" w={on ? 700 : 600} c={on ? 'on-primary' : 'on-surface-variant'} style={{ lineHeight: 11 }}>
                {t.label}
              </T>
            </Btn>
          );
        })}
      </Row>
    </Frosted>
  );
}

// <main class="pt-20 pb-24"> + inner "px-space-md space-y-space-md pb-space-xl"
export function Screen({ children, scrollRef, gap = S.md, bottomPad = S.xl, scrollEnabled = true }) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      ref={scrollRef}
      scrollEnabled={scrollEnabled}
      style={{ flex: 1, backgroundColor: C.surface }}
      contentContainerStyle={{
        paddingTop: HEADER_H + insets.top,
        paddingBottom: 96 + insets.bottom + bottomPad,
        paddingHorizontal: S.md,
        gap,
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}

// Common card: white surface, rounded, shadow-sm.
export function Card({ radius = R['3xl'], pad = S.md, shadow = SH.sm, style, children }) {
  return (
    <View style={[{ backgroundColor: C['surface-container-lowest'], borderRadius: radius, padding: pad, boxShadow: shadow }, style]}>
      {children}
    </View>
  );
}

export function Pill({ bg = 'surface-container-high', c = 'on-surface-variant', w = 600, upper, children, style, icon, iconSize = 14, dot, px = 8, py = 2, v = 'label-sm' }) {
  return (
    <Row style={[{ paddingHorizontal: px, paddingVertical: py, borderRadius: R.full, backgroundColor: C[bg] || bg, gap: 4, alignSelf: 'flex-start' }, style]}>
      {dot && <Dot size={6} color={dot} />}
      {icon && <Icon name={icon} size={iconSize} color={C[c] || c} />}
      <T v={v} c={c} w={w} upper={upper}>{children}</T>
    </Row>
  );
}

const styles = StyleSheet.create({
  header: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50, overflow: 'hidden' },
  nav: { position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 50, overflow: 'hidden' },
  logoBox: {
    width: 36, height: 36, borderRadius: R.xl, overflow: 'hidden', backgroundColor: C['surface-container-low'],
    alignItems: 'center', justifyContent: 'center', padding: 2,
  },
  pill: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: R.full, flexShrink: 0 },
  askBtn: {
    minHeight: 44, minWidth: 44, height: 40, paddingHorizontal: 10, borderRadius: R.full,
    backgroundColor: C['surface-container-low'], alignItems: 'center', justifyContent: 'center',
  },
  avatarBox: { minHeight: 44, minWidth: 44, alignItems: 'center', justifyContent: 'center' },
  tab: {
    alignItems: 'center', justifyContent: 'center', gap: 4, paddingVertical: 6, paddingHorizontal: 12,
    borderRadius: R.full, minHeight: 44, minWidth: 44,
  },
});
