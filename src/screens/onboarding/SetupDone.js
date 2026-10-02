import { useState } from 'react';
import { P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { OnbHeader } from './Steps';

export default function SetupDone({ navigation, route }) {
  const { user, updateMe } = useApp();
  const L = useL();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const reminder = route.params?.reminder;
  const role = user?.role || 'student';
  const first = (user?.name || '').split(' ')[0];

  const finish = async (to) => {
    setBusy(true);
    setError(null);
    try {
      if (!user?.onboarded) await updateMe({ onboarded: true });
      navigation.reset({ index: to ? 1 : 0, routes: [{ name: 'Main' }, ...(to ? [{ name: to }] : [])] });
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const lines =
    role === 'student'
      ? [
          [user?.className, user?.schoolName].filter(Boolean).join(', '),
          user?.examYear ? `${L('GCE Biology, June', 'GCE Biologie, juin')} ${user.examYear}, ${L('aiming for grade', 'note visée')} ${user?.targetGrade || 'A'}.` : null,
          reminder ? `${L('Daily reminder at', 'Rappel quotidien à')} ${user?.reminderTime || '18:30'}.` : null,
          user?.consentStatus === 'pending' ? L('Your parent has not approved your account yet. Until they do, your progress stays on this phone and the tutor is not available.', 'Votre parent n’a pas encore approuvé votre compte. En attendant, votre progression reste sur ce téléphone et le tuteur n’est pas disponible.') : null,
        ]
      : role === 'parent'
      ? [L('Link each of your children with the code shown in their app. Reports arrive every week.', 'Liez chaque enfant avec le code affiché dans son application. Les rapports arrivent chaque semaine.')]
      : [user?.schoolName, L('Students join your class with its code, from registration or from their profile.', 'Les élèves rejoignent votre classe avec son code, à l’inscription ou depuis leur profil.')];

  return (
    <Screen
      header={<OnbHeader canBack={false} />}
      footer={
        <V c="px-margin pt-space-sm gap-space-xs" style={{ paddingBottom: 12 }}>
          <ErrorNote error={error} c="mb-space-sm" />
          <Cta variant="dark" icon={null} label={role === 'student' ? L('Start learning', 'Commencer') : L('Continue', 'Continuer')} loading={busy} onPress={() => finish()} />
          {role === 'student' && (
            <P c="items-center py-2" onPress={() => finish('Paywall')} hitSlop={8}>
              <T c="font-label-md text-label-md text-primary-container">{L('See the full course prices', 'Voir les prix du cours complet')}</T>
            </P>
          )}
        </V>
      }
    >
      <V c="pt-space-xl gap-space-md">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          {L('You are set up', 'C’est prêt')}, {first}.
        </T>
        <V c="gap-space-xs">
          {lines.filter(Boolean).map((l) => (
            <T key={l} c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {l}
            </T>
          ))}
        </V>
      </V>
    </Screen>
  );
}
