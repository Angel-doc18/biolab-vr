import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Easing, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Avatar, C, Ic, Logo, P, T, V } from './kit';
import { useApp } from '../state/store';
import { useL, useLang } from '../i18n';
import { LEVELS, subjectById, subjectName } from '../data/subjects';

const HEADER_SHADOW = { shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, shadowOffset: { width: 0, height: 1 }, elevation: 2 };

function Bell() {
  const nav = useNavigation();
  const { unread, auth } = useApp();
  const L = useL();
  if (auth.status !== 'authed') return null;
  return (
    <P c="w-11 h-11 items-center justify-center rounded-full" onPress={() => nav.navigate('Notifications')} accessibilityLabel={L('Notifications', 'Notifications')}>
      <Ic n="notifications" s={22} />
      {unread > 0 && <V c="absolute top-2.5 right-3 w-2 h-2 rounded-full bg-error" />}
    </P>
  );
}

function Me({ ring = 'secondary' }) {
  const nav = useNavigation();
  const { user } = useApp();
  return (
    <P c="pl-1" onPress={() => nav.navigate('Main', { screen: 'Me' })} accessibilityLabel="Profile">
      <Avatar name={user?.name} size={32} ring={ring} />
    </P>
  );
}

// The sciences a student takes, as text tabs under the tab header. Hidden when
// there is only one.
export function SubjectTabs() {
  const { user, subjects, subject, setSubject } = useApp();
  const lang = useLang();
  if (user?.role !== 'student' || subjects.length < 2) return null;
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 22 }}>
      {subjects.map((id) => {
        const on = id === subject;
        return (
          <P key={id} c={`pb-2 border-b-2 ${on ? 'border-primary-container' : 'border-transparent'}`} onPress={() => setSubject(id)} scale={1} accessibilityRole="tab" accessibilityState={{ selected: on }}>
            <T c={`font-label-lg text-label-lg ${on ? 'text-on-surface' : 'text-on-surface-variant'}`} style={{ fontWeight: on ? '700' : '500' }}>
              {subjectName(id, lang)}
            </T>
          </P>
        );
      })}
    </ScrollView>
  );
}

// Top bar of the five tab roots: logo and wordmark, notifications, profile, and
// (with `switcher`) the subject tabs.
export function TabHeader({ title = 'ScienceAid', subtitle, switcher }) {
  const insets = useSafeAreaInsets();
  const { subject } = useApp();
  const lang = useLang();
  const L = useL();
  const sub = subtitle ?? `GCE ${LEVELS[subjectById(subject).level].en} ${subjectName(subject, lang)}`;
  return (
    <View style={[{ paddingTop: insets.top, backgroundColor: 'rgba(255,255,255,0.96)', zIndex: 50 }, HEADER_SHADOW]}>
      <V c="h-14 px-margin flex-row items-center justify-between">
        <V c="flex-row items-center gap-space-xs flex-1 min-w-0">
          <Logo size={32} />
          <V c="ml-1 flex-1 min-w-0">
            <T c="font-headline-sm text-headline-sm text-primary-container tracking-tight" style={{ lineHeight: 18 }} numberOfLines={1}>
              {title}
            </T>
            <T c="font-label-sm text-label-sm text-on-surface-variant mt-0.5" style={{ fontWeight: '400', lineHeight: 12 }} numberOfLines={1}>
              {sub}
            </T>
          </V>
        </V>
        <V c="flex-row items-center gap-space-xs">
          <Bell />
          <Me />
        </V>
      </V>
      {switcher && <SubjectTabs />}
    </View>
  );
}

// Stack screens: back arrow, optional logo, title + subtitle, right slot.
export function StackHeader({ title, subtitle, subtitleColor = 'primary', logo = false, right, onBack, close, avatar = true, transparent }) {
  const insets = useSafeAreaInsets();
  const nav = useNavigation();
  const back = onBack || (() => (nav.canGoBack() ? nav.goBack() : nav.navigate('Main')));
  return (
    <View style={[{ paddingTop: insets.top, backgroundColor: transparent ? 'transparent' : 'rgba(255,255,255,0.96)', zIndex: 50 }, !transparent && HEADER_SHADOW]}>
      <V c="h-16 px-margin flex-row items-center justify-between gap-space-sm">
        <V c="flex-row items-center gap-space-sm flex-1 min-w-0">
          <P c="w-11 h-11 -ml-1.5 items-center justify-center rounded-xl" onPress={back} accessibilityLabel="Go back">
            <Ic n={close ? 'close' : 'arrow_back'} s={24} c="on-surface" />
          </P>
          {logo && <Logo size={30} />}
          <V c="flex-1 min-w-0">
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ lineHeight: 20 }} numberOfLines={1}>
              {title}
            </T>
            {!!subtitle && (
              <T c={`font-label-sm text-label-sm text-${subtitleColor} tracking-wide`} numberOfLines={1}>
                {subtitle}
              </T>
            )}
          </V>
        </V>
        <V c="flex-row items-center gap-space-xs">
          {right}
          {avatar && <Me ring="primary-fixed" />}
        </V>
      </V>
    </View>
  );
}

// Auth and onboarding bar: back, logo and wordmark, step title.
export function AuthHeader({ title, onBack, back = true, iosArrow }) {
  const insets = useSafeAreaInsets();
  const nav = useNavigation();
  return (
    <View style={[{ paddingTop: insets.top, backgroundColor: 'rgba(255,255,255,0.96)', zIndex: 50 }, HEADER_SHADOW]}>
      <V c="h-14 px-margin flex-row items-center justify-between">
        <V c="flex-row items-center gap-space-sm">
          {back ? (
            <P c="w-11 h-11 items-center justify-center rounded-xl" onPress={onBack || (() => nav.canGoBack() && nav.goBack())} accessibilityLabel="Go back">
              <Ic n={iosArrow ? 'arrow_back_ios_new' : 'arrow_back'} s={iosArrow ? 20 : 24} c="on-surface" />
            </P>
          ) : (
            <V c="w-2" />
          )}
          <Logo size={30} />
          <T c="font-headline-sm text-headline-sm text-on-surface tracking-tight ml-space-xs">ScienceAid</T>
        </V>
        <V c="flex-1 px-space-xs items-end">
          {!!title && (
            <T c="font-label-lg text-label-lg text-on-surface-variant" numberOfLines={1}>
              {title}
            </T>
          )}
        </V>
      </V>
    </View>
  );
}

export function Screen({ children, header, footer, scroll = true, bg = 'bg-surface-container-lowest', pad = 'px-margin', contentStyle, keyboard, refreshControl, scrollRef }) {
  const insets = useSafeAreaInsets();
  // Footers sit above the home indicator on every device.
  const foot = footer ? <View style={{ paddingBottom: insets.bottom, backgroundColor: '#ffffff' }}>{footer}</View> : null;
  const body = scroll ? (
    <ScrollView
      ref={scrollRef}
      style={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      refreshControl={refreshControl}
      contentContainerStyle={[{ paddingBottom: footer ? 16 : insets.bottom + 24 }, contentStyle]}
    >
      <V c={pad}>{children}</V>
    </ScrollView>
  ) : (
    <V c={`flex-1 ${pad}`}>{children}</V>
  );
  return (
    <V c={`flex-1 ${bg}`}>
      {header}
      {keyboard ? (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          {body}
          {foot}
        </KeyboardAvoidingView>
      ) : (
        <>
          {body}
          {foot}
        </>
      )}
    </V>
  );
}

// Primary 52px CTA. variant: primary (primary-container), dark (primary), soft, ghost.
export function Cta({ label, icon = 'arrow_forward', onPress, loading, disabled, variant = 'primary', c = '', h = 'h-[52px]', lead }) {
  const bg = { primary: 'bg-primary-container', dark: 'bg-primary', soft: 'bg-surface-container-low', white: 'bg-surface-container-lowest', teal: 'bg-secondary' }[variant];
  const fg = variant === 'soft' || variant === 'white' ? 'primary-container' : 'on-primary';
  return (
    <P
      c={`w-full ${h} ${bg} rounded-xl flex-row items-center justify-center gap-2 ${variant === 'soft' || variant === 'white' ? 'shadow-sm' : 'shadow-md'} ${c}`}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={C[fg]} />
      ) : (
        <>
          {lead && <Ic n={lead} s={19} c={variant === 'soft' ? 'tertiary' : fg} />}
          <T c={`font-label-lg text-label-lg text-${fg}`} style={{ fontWeight: '700' }}>
            {label}
          </T>
          {icon && <Ic n={icon} s={20} c={fg} />}
        </>
      )}
    </P>
  );
}

export function ErrorNote({ error, c = '' }) {
  if (!error) return null;
  return (
    <V c={`flex-row items-start gap-2 p-3 rounded-xl bg-error-container ${c}`}>
      <Ic n="error" s={18} c="on-error-container" />
      <T c="font-body-sm text-body-sm text-on-error-container flex-1">{typeof error === 'string' ? error : error.message}</T>
    </V>
  );
}

// Toast that slides in from the top for confirmations.
export function useToast() {
  const [msg, setMsg] = useState(null);
  const y = useRef(new Animated.Value(-80)).current;
  const timer = useRef(null);
  const show = (text, icon = 'check_circle') => {
    setMsg({ text, icon });
    clearTimeout(timer.current);
    Animated.spring(y, { toValue: 0, useNativeDriver: true, stiffness: 300, damping: 30 }).start();
    timer.current = setTimeout(() => Animated.timing(y, { toValue: -80, duration: 200, useNativeDriver: true }).start(() => setMsg(null)), 2600);
  };
  useEffect(() => () => clearTimeout(timer.current), []);
  const node = msg ? (
    <Animated.View pointerEvents="none" style={{ position: 'absolute', top: 70, left: 16, right: 16, zIndex: 100, transform: [{ translateY: y }] }}>
      <V c="flex-row items-center gap-2 p-space-sm px-space-md rounded-xl bg-inverse-surface shadow-md">
        <Ic n={msg.icon} s={18} c="secondary-fixed-dim" />
        <T c="font-body-sm text-body-sm text-inverse-on-surface flex-1">{msg.text}</T>
      </V>
    </Animated.View>
  ) : null;
  return [node, show];
}

export function Spinner({ c = 'py-10' }) {
  return (
    <V c={`items-center justify-center ${c}`}>
      <ActivityIndicator color={C['primary-container']} />
    </V>
  );
}

// Pulsing dot for a live recording or timer state.
export function Pulse({ c = 'w-2 h-2 rounded-full bg-secondary' }) {
  const o = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(o, { toValue: 0.35, duration: 900, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(o, { toValue: 1, duration: 900, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [o]);
  return (
    <Animated.View style={{ opacity: o }}>
      <V c={c} />
    </Animated.View>
  );
}
