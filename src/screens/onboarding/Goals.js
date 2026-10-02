import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { Toggle } from '../../ui/form';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { scheduleDailyReminder } from '../../lib/reminders';
import { OnbHeader, StepBar } from './Steps';

const pad = (n) => String(n).padStart(2, '0');
const twelve = (h, m) => `${((h + 11) % 12) + 1}:${pad(m)} ${h < 12 ? 'AM' : 'PM'}`;

export function TimePicker({ value, onChange }) {
  const [h, m] = value.split(':').map(Number);
  const set = (nh, nm) => onChange(`${pad((nh + 24) % 24)}:${pad((nm + 60) % 60)}`);
  const Btn = ({ icon, onPress, label }) => (
    <P c="w-9 h-9 rounded-lg bg-surface-container-low items-center justify-center" onPress={onPress} accessibilityLabel={label}>
      <Ic n={icon} s={20} c="primary-container" />
    </P>
  );
  return (
    <V c="flex-row items-center justify-center gap-space-md p-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant">
      <V c="items-center gap-1">
        <Btn icon="expand_less" onPress={() => set(h + 1, m)} label="Hour up" />
        <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
          {pad(h)}
        </T>
        <Btn icon="expand_more" onPress={() => set(h - 1, m)} label="Hour down" />
      </V>
      <T c="font-headline-md text-headline-md text-on-surface">:</T>
      <V c="items-center gap-1">
        <Btn icon="expand_less" onPress={() => set(h, m + 15 >= 60 ? 0 : m - (m % 15) + 15)} label="Minute up" />
        <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
          {pad(m)}
        </T>
        <Btn icon="expand_more" onPress={() => set(h, m % 15 ? m - (m % 15) : m - 15 < 0 ? 45 : m - 15)} label="Minute down" />
      </V>
      <T c="font-body-sm text-body-sm text-on-surface-variant">{twelve(h, m)}</T>
    </V>
  );
}

function Choice({ on, label, sub, onPress }) {
  return (
    <P c={`flex-1 py-space-sm px-1 rounded-xl items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={onPress} accessibilityRole="radio" accessibilityState={{ checked: on }}>
      <T c={`font-label-lg text-label-lg ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
        {label}
      </T>
      {!!sub && <T c={`font-body-sm text-body-sm ${on ? 'text-on-primary' : 'text-on-surface-variant'}`}>{sub}</T>}
    </P>
  );
}

export default function Goals({ navigation }) {
  const { user, updateMe, prefs } = useApp();
  const L = useL();
  const [grade, setGrade] = useState(user?.targetGrade || 'A');
  const [minutes, setMinutes] = useState(user?.dailyMinutes || 20);
  const [time, setTime] = useState(user?.reminderTime || '18:30');
  const [remind, setRemind] = useState(true);
  const [editTime, setEditTime] = useState(false);
  const [reports, setReports] = useState(Boolean(user?.parentPhone));
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const GRADES = [
    { id: 'A', sub: L('Distinction', 'Mention') },
    { id: 'B', sub: L('Credit', 'Crédit') },
    { id: 'C', sub: L('Pass', 'Admis') },
  ];

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      await updateMe({
        targetGrade: grade,
        dailyMinutes: minutes,
        reminderTime: time,
        parentReportFreq: 'weekly',
        inactivityAlert: reports && Boolean(user?.parentPhone),
      });
      const reminder = remind ? await scheduleDailyReminder(time, minutes, prefs.lang) : false;
      navigation.navigate('SetupDone', { reminder });
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen
      header={<OnbHeader />}
      footer={
        <V c="px-margin pt-space-sm" style={{ paddingBottom: 12 }}>
          <ErrorNote error={error} c="mb-space-sm" />
          <Cta variant="dark" icon={null} label={L('Finish', 'Terminer')} loading={busy} onPress={submit} />
        </V>
      }
    >
      <StepBar screen="Goals" />
      <V c="gap-space-xs mb-space-lg">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Your study plan', 'Votre plan d’étude')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant">{L('You can change all of this later in Settings.', 'Vous pourrez tout changer dans les réglages.')}</T>
      </V>

      <V c="gap-space-lg pb-space-lg">
        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L('Grade you are aiming for', 'Note visée')}</T>
          <V c="flex-row gap-space-xs" accessibilityRole="radiogroup">
            {GRADES.map((g) => (
              <Choice key={g.id} on={grade === g.id} label={`${L('Grade', 'Note')} ${g.id}`} sub={g.sub} onPress={() => setGrade(g.id)} />
            ))}
          </V>
        </V>

        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L('Time each day', 'Temps par jour')}</T>
          <V c="flex-row gap-space-xs" accessibilityRole="radiogroup">
            {[10, 20, 30, 45].map((m) => (
              <Choice key={m} on={minutes === m} label={`${m} min`} onPress={() => setMinutes(m)} />
            ))}
          </V>
        </V>

        <V c="gap-space-sm">
          <V c="flex-row items-center justify-between gap-space-sm">
            <V c="flex-1">
              <T c="font-label-lg text-label-lg text-on-surface">{L('Daily reminder', 'Rappel quotidien')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('A notification on this phone', 'Une notification sur ce téléphone')}</T>
            </V>
            <Toggle on={remind} onPress={() => setRemind((r) => !r)} accessibilityLabel={L('Daily reminder', 'Rappel quotidien')} />
          </V>
          {remind && (
            <P c="flex-row items-center justify-between px-space-md h-12 rounded-xl bg-surface-container-lowest border border-outline-variant" onPress={() => setEditTime((e) => !e)} scale={1}>
              <T c="font-body-md text-body-md text-on-surface">{L('Remind me at', 'Me rappeler à')}</T>
              <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                {time}
              </T>
            </P>
          )}
          {remind && editTime && <TimePicker value={time} onChange={setTime} />}
        </V>

        {!!user?.parentPhone && (
          <V c="flex-row items-center justify-between gap-space-sm">
            <V c="flex-1">
              <T c="font-label-lg text-label-lg text-on-surface">{L('Weekly report to my parent', 'Rapport hebdomadaire au parent')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Sent to your parent’s number, with a message if you stop revising for 3 days.', 'Envoyé au numéro de votre parent, avec un message après 3 jours sans révision.')}</T>
            </V>
            <Toggle on={reports} onPress={() => setReports((r) => !r)} accessibilityLabel={L('Weekly report to my parent', 'Rapport hebdomadaire au parent')} />
          </V>
        )}
      </V>
    </Screen>
  );
}
