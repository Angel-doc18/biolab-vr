import { useState } from 'react';
import { T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { examLabel, subjectName } from '../../data/subjects';
import { OnbHeader } from './Steps';

export default function SetupDone({ navigation, route }) {
  const { user, updateMe, subjects } = useApp();
  const L = useL();
  const lang = useLang();
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
      // A student chooses how to start next: the free month, or a paid plan.
      if (to === 'Plans') navigation.reset({ index: 0, routes: [{ name: 'Paywall', params: { start: true } }] });
      else navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
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
          user?.examYear ? `${examLabel(user, L)}: ${subjects.map((id) => subjectName(id, lang)).join(', ')}. ${L('Aiming for grade', 'Note visée')} ${user?.targetGrade || 'A'}.` : null,
          reminder ? `${L('Daily reminder at', 'Rappel quotidien à')} ${user?.reminderTime || '18:30'}.` : null,
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
          <Cta variant="dark" icon={null} label={L('Continue', 'Continuer')} loading={busy} onPress={() => finish(role === 'student' ? 'Plans' : null)} />
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
