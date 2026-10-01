import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ic, T, V } from './kit';
import { useL } from '../i18n';

export const TABS = [
  { name: 'Home', icon: 'home', en: 'Home', fr: 'Accueil' },
  { name: 'Learn', icon: 'menu_book', en: 'Learn', fr: 'Cours' },
  { name: 'Lab', icon: 'biotech', en: 'Lab', fr: 'Labo' },
  { name: 'Exams', icon: 'assignment', en: 'Exams', fr: 'Examens' },
  { name: 'Me', icon: 'account_circle', en: 'Me', fr: 'Moi' },
];

// Bottom navigation (h-16). The active pill glides between tabs.
export function TabBarView({ activeIndex, onSelect }) {
  const insets = useSafeAreaInsets();
  const L = useL();
  const [w, setW] = useState(0);
  const x = useRef(new Animated.Value(activeIndex)).current;
  useEffect(() => {
    Animated.spring(x, { toValue: activeIndex, useNativeDriver: true, stiffness: 300, damping: 30, mass: 1 }).start();
  }, [activeIndex, x]);
  const slot = w / TABS.length;
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
        {w > 0 && activeIndex >= 0 && (
          <Animated.View
            pointerEvents="none"
            style={{
              position: 'absolute',
              top: 8,
              left: 4 + slot / 2 - 24,
              width: 48,
              height: 28,
              borderRadius: 12,
              backgroundColor: '#ecf4ff',
              transform: [{ translateX: Animated.multiply(x, slot) }],
            }}
          />
        )}
        <V c="flex-1 flex-row items-center justify-around">
          {TABS.map((t, i) => {
            const on = i === activeIndex;
            return (
              <Pressable
                key={t.name}
                onPress={() => onSelect(t.name, i)}
                accessibilityRole="tab"
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
export default function TabBar({ state, navigation }) {
  return (
    <TabBarView
      activeIndex={state.index}
      onSelect={(name, i) => {
        const route = state.routes[i];
        const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
        if (state.index !== i && !event.defaultPrevented) navigation.navigate(name);
      }}
    />
  );
}

// Same bar on stacked screens that keep the navigation visible in the design.
export function StaticTabBar({ active }) {
  const nav = useNavigation();
  return <TabBarView activeIndex={TABS.findIndex((t) => t.name === active)} onSelect={(name) => nav.navigate('Main', { screen: name })} />;
}
