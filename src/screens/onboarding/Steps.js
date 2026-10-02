// Shared pieces of the onboarding steps.
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Ic, Logo, P, T, V } from '../../ui/kit';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { ONBOARDING } from '../../navigation/routes';

export function OnbHeader({ label, canBack = true }) {
  const insets = useSafeAreaInsets();
  const nav = useNavigation();
  return (
    <View style={{ paddingTop: insets.top, backgroundColor: 'rgba(255,255,255,0.96)', zIndex: 50, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, shadowOffset: { width: 0, height: 1 }, elevation: 2 }}>
      <V c="h-16 px-margin flex-row items-center justify-between">
        <V c="flex-row items-center gap-space-sm">
          {canBack && nav.canGoBack() ? (
            <P c="w-11 h-11 items-center justify-center rounded-xl" onPress={() => nav.goBack()} accessibilityLabel="Go back">
              <Ic n="arrow_back" s={24} c="on-surface" />
            </P>
          ) : (
            <V c="w-1" />
          )}
          <V c="flex-row items-center gap-space-xs">
            <Logo size={30} />
            <T c="font-headline-sm text-headline-sm text-primary tracking-tight" style={{ fontWeight: '700' }}>
              BioSpatial
            </T>
          </V>
        </V>
        {!!label && <T c="font-label-md text-label-md text-on-surface-variant">{label}</T>}
      </V>
    </View>
  );
}

// Thin progress line with "Step n of m" above it, worked out from the role's step list.
export function StepBar({ screen, pct: fixedPct, right: fixedRight }) {
  const { user } = useApp();
  const L = useL();
  const list = ['Role', ...(ONBOARDING[user?.role] || ONBOARDING.student).filter((s) => s !== 'SetupDone')];
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
