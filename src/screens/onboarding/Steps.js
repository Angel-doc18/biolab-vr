// Shared pieces of the onboarding steps.
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import { BrandLogo, Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { nextStep, stepsFor } from '../../navigation/routes';

export function OnbHeader({ label, canBack = true }) {
  const insets = useSafeAreaInsets();
  const nav = useNavigation();
  return (
    <View style={{ paddingTop: insets.top, backgroundColor: 'rgba(255,255,255,0.96)', zIndex: 50, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, shadowOffset: { width: 0, height: 1 }, elevation: 2 }}>
      <V c="h-14 px-margin flex-row items-center justify-between">
        <View pointerEvents="none" style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
          <BrandLogo height={19} />
        </View>
        <V c="flex-row items-center">
          {canBack && nav.canGoBack() ? (
            <P c="w-11 h-11 -ml-1.5 items-center justify-center rounded-xl" onPress={() => nav.goBack()} accessibilityLabel="Go back">
              <Ic n="arrow_back" s={24} c="on-surface" />
            </P>
          ) : (
            <V c="w-1" />
          )}
        </V>
        {!!label && <T c="font-label-md text-label-md text-on-surface-variant">{label}</T>}
      </V>
    </View>
  );
}

// Thin progress line with "Step n of m" above it, worked out from the role's
// step list (or the short run being edited, `flow`).
export function StepBar({ screen, flow, pct: fixedPct, right: fixedRight }) {
  const { user } = useApp();
  const L = useL();
  const steps = stepsFor(user, flow).filter((s) => s !== 'SetupDone');
  const list = flow ? steps : ['Role', ...steps];
  const n = Math.max(1, list.indexOf(screen) + 1);
  const pct = fixedPct ?? Math.round((n / list.length) * 100);
  const right = fixedRight ?? L(`Step ${n} of ${list.length}`, `Étape ${n} sur ${list.length}`);
  return (
    <V c="w-full gap-1.5 pt-space-sm mb-space-md">
      <T c="font-label-md text-label-md text-on-surface-variant">{right}</T>
      <V c="w-full h-1 bg-surface-container rounded-full overflow-hidden">
        <V c="h-full bg-primary-container rounded-full" style={{ width: `${pct}%` }} />
      </V>
    </V>
  );
}

// A large answer button: side by side (flex), or `full` for one answer per
// row with its icon on the left.
export function Choice({ on, label, sub, onPress, icon, full }) {
  if (full) {
    return (
      <P
        c={`w-full min-h-[64px] px-space-md py-space-sm rounded-xl flex-row items-center gap-space-sm ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`}
        onPress={onPress}
        accessibilityRole="radio"
        accessibilityState={{ checked: on }}
        aria-checked={on}
        accessibilityLabel={sub ? `${label}, ${sub}` : label}
      >
        {!!icon && <Ic n={icon} s={24} c={on ? 'on-primary' : 'primary-container'} />}
        <V c="flex-1 gap-0.5">
          <T c={`font-label-lg text-label-lg ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
            {label}
          </T>
          {!!sub && <T c={`font-body-sm text-body-sm ${on ? 'text-on-primary' : 'text-on-surface-variant'}`}>{sub}</T>}
        </V>
        {on && <Ic n="check" s={22} c="on-primary" />}
      </P>
    );
  }
  return (
    <P
      c={`flex-1 min-h-[56px] px-space-sm py-2 rounded-xl items-center justify-center gap-0.5 ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
      aria-checked={on}
      accessibilityLabel={sub ? `${label}, ${sub}` : label}
    >
      {!!icon && <Ic n={icon} s={24} c={on ? 'on-primary' : 'primary-container'} />}
      <T c={`font-label-lg text-label-lg ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700', textAlign: 'center' }}>
        {label}
      </T>
      {!!sub && (
        <T c={`font-body-sm text-body-sm ${on ? 'text-on-primary' : 'text-on-surface-variant'}`} style={{ textAlign: 'center' }}>
          {sub}
        </T>
      )}
    </P>
  );
}

// A small toggle for lists of options (series, specialties).
export function Chip({ on, label, onPress }) {
  return (
    <P
      c={`px-3 h-10 rounded-full items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
      aria-checked={on}
      accessibilityLabel={label}
    >
      <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
        {label}
      </T>
    </P>
  );
}

// Moving on from a step: the next step of onboarding, or of the short run
// being edited (route.params.flow), or back to where that run started.
// `changes` are the answers just saved, so a step that no longer applies is
// skipped (the store's user updates a moment later).
export function useStepNav(screen) {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = useApp();
  const flow = route.params?.flow;
  const depth = route.params?.depth || 1;
  return {
    flow,
    advance: (changes = {}, params) => {
      const next = nextStep(user?.role || 'student', screen, { ...user, ...changes }, flow);
      if (next) navigation.navigate(next, flow ? { flow, depth: depth + 1 } : params);
      else navigation.pop(depth);
    },
  };
}

// One question per screen: progress, the question, the answers, Continue.
export function StepScreen({ screen, flow, title, sub, children, onContinue, busy, error, label, keyboard }) {
  const L = useL();
  const { user } = useApp();
  // In a short run the last step saves and returns; the others go on.
  const last = !!flow && !nextStep(user?.role || 'student', screen, user, flow);
  return (
    <Screen
      keyboard={keyboard}
      header={<OnbHeader />}
      footer={
        <V c="px-margin pt-space-sm" style={{ paddingBottom: 12 }}>
          <ErrorNote error={error} c="mb-space-sm" />
          <Cta variant="dark" icon={null} label={label || (last ? L('Save', 'Enregistrer') : L('Continue', 'Continuer'))} loading={busy} onPress={onContinue} />
        </V>
      }
    >
      <StepBar screen={screen} flow={flow} />
      <V c="gap-space-xs mb-space-lg">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{title}</T>
        {!!sub && (
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {sub}
          </T>
        )}
      </V>
      <V c="gap-space-md pb-space-lg">{children}</V>
    </Screen>
  );
}

// Marks onboarding complete on the server. Returns the updated user.
export function useFinishOnboarding() {
  const { updateMe } = useApp();
  return () => updateMe({ onboarded: true });
}

export function useStepLabels() {
  const L = useL();
  return {
    progress: L('Onboarding progress', 'Progression'),
    step: (n, total = 5) => L(`Step ${n} of ${total}`, `Étape ${n} sur ${total}`),
  };
}
