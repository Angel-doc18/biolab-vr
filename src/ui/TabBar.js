import { useEffect, useState } from 'react';
import { Animated, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ic, T, V } from './kit';
import { useL } from '../i18n';
import { useApp } from '../state/store';

export const TABS = [
  { name: 'Home', icon: 'home', en: 'Home', fr: 'Accueil' },
  { name: 'Learn', icon: 'menu_book', en: 'Learn', fr: 'Cours' },
  // the AI study space: a raised button in the middle of the bar
  { name: 'Study', icon: 'auto_awesome', en: 'Study', fr: 'Étude', center: true },
  { name: 'Lab', icon: 'biotech', en: 'Lab', fr: 'Labo' },
  { name: 'Exams', icon: 'assignment', en: 'Exams', fr: 'Examens' },
  { name: 'Me', icon: 'account_circle', en: 'Me', fr: 'Moi' },
];

// A teacher's own bar: their classes, the Assistant in the middle and the
// lessons as a library. The student Lab and Exams stay reachable from links.
export const TEACHER_TABS = [
  { name: 'Home', icon: 'home', en: 'Home', fr: 'Accueil' },
  { name: 'Classes', icon: 'groups', en: 'Classes', fr: 'Classes' },
  { name: 'Study', icon: 'auto_awesome', en: 'Assistant', fr: 'Assistant', center: true },
  { name: 'Learn', icon: 'local_library', en: 'Library', fr: 'Bibliothèque' },
  { name: 'Me', icon: 'account_circle', en: 'Me', fr: 'Moi' },
];

// A partner account is for inviting people: Home and Me only.
export const PARTNER_TABS = TABS.filter((t) => t.name === 'Home' || t.name === 'Me');

// A parent's bar: their children on Home, the Assistant for homework help,
// the lessons as a library, and Me.
export const PARENT_TABS = [
  { name: 'Home', icon: 'home', en: 'Home', fr: 'Accueil' },
  { name: 'Study', icon: 'auto_awesome', en: 'Assistant', fr: 'Assistant', center: true },
  { name: 'Learn', icon: 'local_library', en: 'Library', fr: 'Bibliothèque' },
  { name: 'Me', icon: 'account_circle', en: 'Me', fr: 'Moi' },
];

export const tabsFor = (role) => (role === 'teacher' ? TEACHER_TABS : role === 'parent' ? PARENT_TABS : role === 'partner' ? PARTNER_TABS : TABS);

// Bottom navigation (h-16). The active pill glides between tabs. `tabs` is the
// student set by default; the admin console passes its own.
export function TabBarView({ activeIndex, onSelect, tabs = TABS, centerLabel }) {
  const insets = useSafeAreaInsets();
  const L = useL();
  const [w, setW] = useState(0);
  const [x] = useState(() => new Animated.Value(activeIndex));
  useEffect(() => {
    Animated.spring(x, { toValue: activeIndex, useNativeDriver: true, stiffness: 300, damping: 30, mass: 1 }).start();
  }, [activeIndex, x]);
  const slot = w / tabs.length;
  return (
    <View
      style={{
        paddingBottom: insets.bottom,
        backgroundColor: 'rgba(255,255,255,0.97)',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: -1 },
        elevation: 8,
      }}
    >
      <View style={{ height: 64, paddingHorizontal: 4 }} onLayout={(e) => setW(e.nativeEvent.layout.width - 8)}>
        {w > 0 && activeIndex >= 0 && !tabs[activeIndex]?.center && (
          <Animated.View
            pointerEvents="none"
            style={{
              position: 'absolute',
              top: 8,
              left: 4 + slot / 2 - 24,
              width: 48,
              height: 28,
              borderRadius: 12,
              backgroundColor: '#e6ecfa',
              transform: [{ translateX: Animated.multiply(x, slot) }],
            }}
          />
        )}
        {/* a small amber mark, the colour of the 8 in the logo, over the active tab */}
        {w > 0 && activeIndex >= 0 && !tabs[activeIndex]?.center && (
          <Animated.View
            pointerEvents="none"
            style={{
              position: 'absolute',
              top: 0,
              left: 4 + slot / 2 - 10,
              width: 20,
              height: 3,
              borderBottomLeftRadius: 3,
              borderBottomRightRadius: 3,
              backgroundColor: '#FFB409',
              transform: [{ translateX: Animated.multiply(x, slot) }],
            }}
          />
        )}
        <V c="flex-1 flex-row items-center justify-around">
          {tabs.map((t, i) => {
            const on = i === activeIndex;
            if (t.center) {
              const label = centerLabel || L(t.en, t.fr);
              return (
                <Pressable
                  key={t.name}
                  onPress={() => onSelect(t.name, i)}
                  accessibilityRole="tab"
                  accessibilityLabel={label}
                  accessibilityState={{ selected: on }}
                  style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 4 }}
                >
                  <View
                    style={{
                      width: 54,
                      height: 54,
                      marginTop: -22,
                      borderRadius: 27,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#02287B',
                      borderWidth: 4,
                      borderColor: '#ffffff',
                      shadowColor: '#02287B',
                      shadowOpacity: 0.28,
                      shadowRadius: 10,
                      shadowOffset: { width: 0, height: 4 },
                      elevation: 6,
                    }}
                  >
                    <Ic n={t.icon} s={26} c="#FBAC02" fill />
                  </View>
                  <T c={`font-label-sm text-label-sm mt-0.5 ${on ? 'text-primary-container' : 'text-outline'}`} style={{ fontWeight: '700' }}>
                    {label}
                  </T>
                </Pressable>
              );
            }
            return (
              <Pressable
                key={t.name}
                onPress={() => onSelect(t.name, i)}
                accessibilityRole="tab"
                accessibilityLabel={L(t.en, t.fr)}
                accessibilityState={{ selected: on }}
                style={{ flex: 1, minHeight: 48, alignItems: 'center', justifyContent: 'center', paddingVertical: 4 }}
              >
                <V c="w-12 h-7 items-center justify-center">
                  <Ic n={t.icon} s={22} c={on ? 'primary-container' : 'outline'} />
                </V>
                <T c={`font-label-sm text-label-sm mt-0.5 ${on ? 'text-primary-container' : 'text-outline'}`} style={{ fontWeight: on ? '700' : '600' }}>
                  {L(t.en, t.fr)}
                </T>
              </Pressable>
            );
          })}
        </V>
      </View>
    </View>
  );
}

// Adapter for @react-navigation/bottom-tabs.
export default function TabBar({ state, navigation, tabs, centerLabel }) {
  return (
    <TabBarView
      tabs={tabs}
      centerLabel={centerLabel}
      // matched by name: a role's bar can leave out screens that still exist
      activeIndex={(tabs || TABS).findIndex((t) => t.name === state.routes[state.index]?.name)}
      onSelect={(name) => {
        const route = state.routes.find((r) => r.name === name);
        if (!route) return;
        const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
        if (state.routes[state.index]?.name !== name && !event.defaultPrevented) navigation.navigate(name);
      }}
    />
  );
}

// Same bar on stacked screens that keep the navigation visible in the design.
export function StaticTabBar({ active }) {
  const nav = useNavigation();
  const { user } = useApp();
  const tabs = tabsFor(user?.role);
  return <TabBarView tabs={tabs} activeIndex={tabs.findIndex((t) => t.name === active)} onSelect={(name) => nav.navigate('Main', { screen: name })} />;
}
