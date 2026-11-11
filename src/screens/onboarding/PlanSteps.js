// A student's study plan: target grade, time each day, reminder. One question
// per screen, also opened from Settings as a short run (flow 'plan').
import { useState } from 'react';
import { T, V } from '../../ui/kit';
import { Toggle } from '../../ui/form';
import { TimePicker } from '../../ui/TimePicker';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { cancelDailyReminder, scheduleDailyReminder } from '../../lib/reminders';
import { STUDY_TIME_ROWS, nearestStudyTime, studyTimeLabel } from '../../lib/studyTime';
import { Choice, StepScreen, useStepNav } from './Steps';

function useSave(screen) {
  const { updateMe } = useApp();
  const { flow, advance } = useStepNav(screen);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const run = async (fn) => {
    setBusy(true);
    setError(null);
    try {
      await fn(updateMe, advance);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  return { flow, busy, error, run };
}

export function Grade() {
  const { user } = useApp();
  const L = useL();
  const [grade, setGrade] = useState(user?.targetGrade || 'A');
  const { flow, busy, error, run } = useSave('Grade');
  const GRADES = [
    { id: 'A', sub: L('The top grade', 'La meilleure note') },
    { id: 'B', sub: L('A strong pass', 'Une bonne note') },
    { id: 'C', sub: L('A pass', 'La moyenne') },
  ];
  return (
    <StepScreen
      screen="Grade"
      flow={flow}
      title={L('Which grade are you aiming for?', 'Quelle note visez-vous ?')}
      sub={L('You can change it later in Settings.', 'Vous pourrez la changer plus tard dans les réglages.')}
      onContinue={() =>
        run(async (updateMe, advance) => {
          await updateMe({ targetGrade: grade });
          advance({ targetGrade: grade });
        })
      }
      busy={busy}
      error={error}
    >
      <V c="gap-space-sm" accessibilityRole="radiogroup">
        {GRADES.map((g) => (
          <Choice full key={g.id} icon="emoji_events" on={grade === g.id} label={`${L('Grade', 'Note')} ${g.id}`} sub={g.sub} onPress={() => setGrade(g.id)} />
        ))}
      </V>
    </StepScreen>
  );
}

export function StudyTime() {
  const { user } = useApp();
  const L = useL();
  const [minutes, setMinutes] = useState(() => nearestStudyTime(user?.dailyMinutes));
  const { flow, busy, error, run } = useSave('StudyTime');
  return (
    <StepScreen
      screen="StudyTime"
      flow={flow}
      title={L('How long will you study each day?', 'Combien de temps étudierez-vous par jour ?')}
      sub={L('This is your daily goal. Little and often works best.', 'C’est votre objectif quotidien. Un peu chaque jour, c’est le mieux.')}
      onContinue={() =>
        run(async (updateMe, advance) => {
          await updateMe({ dailyMinutes: minutes });
          advance({ dailyMinutes: minutes });
        })
      }
      busy={busy}
      error={error}
    >
      <V c="gap-space-xs" accessibilityRole="radiogroup">
        {STUDY_TIME_ROWS.map((row) => (
          <V key={row[0]} c="flex-row gap-space-xs">
            {row.map((m) => (
              <Choice key={m} on={minutes === m} label={studyTimeLabel(m)} onPress={() => setMinutes(m)} />
            ))}
          </V>
        ))}
      </V>
    </StepScreen>
  );
}

export function Reminder() {
  const { user, prefs, savePrefs } = useApp();
  const L = useL();
  const [remind, setRemind] = useState(prefs.reminder !== false);
  const [time, setTime] = useState(user?.reminderTime || '18:30');
  const [reports, setReports] = useState(Boolean(user?.parentPhone) && user?.inactivityAlert !== false);
  const { flow, busy, error, run } = useSave('Reminder');

  const submit = () =>
    run(async (updateMe, advance) => {
      const changes = { reminderTime: time, parentReportFreq: 'weekly', inactivityAlert: reports && Boolean(user?.parentPhone) };
      await updateMe(changes);
      savePrefs({ reminder: remind });
      let scheduled = false;
      if (remind) scheduled = await scheduleDailyReminder(time, user?.dailyMinutes || 60, prefs.lang);
      else await cancelDailyReminder();
      advance(changes, { reminder: scheduled });
    });

  return (
    <StepScreen
      screen="Reminder"
      flow={flow}
      title={L('When should we remind you to study?', 'Quand voulez-vous un rappel pour étudier ?')}
      sub={L('A notification on this phone each day at this time.', 'Une notification sur ce téléphone chaque jour à cette heure.')}
      onContinue={submit}
      busy={busy}
      error={error}
      label={flow ? null : L('Finish', 'Terminer')}
    >
      <V c="flex-row items-center justify-between gap-space-sm p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant">
        <T c="font-label-lg text-label-lg text-on-surface flex-1">{L('Daily reminder', 'Rappel quotidien')}</T>
        <Toggle on={remind} onPress={() => setRemind((r) => !r)} accessibilityLabel={L('Daily reminder', 'Rappel quotidien')} />
      </V>
      {remind && <TimePicker value={time} onChange={setTime} />}
      {!!user?.parentPhone && (
        <V c="flex-row items-center justify-between gap-space-sm p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant">
          <V c="flex-1 gap-0.5">
            <T c="font-label-lg text-label-lg text-on-surface">{L('Weekly report to my parent', 'Rapport hebdomadaire au parent')}</T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Sent to your parent’s number, with a message if you stop revising for 3 days.', 'Envoyé au numéro de votre parent, avec un message après 3 jours sans révision.')}</T>
          </V>
          <Toggle on={reports} onPress={() => setReports((r) => !r)} accessibilityLabel={L('Weekly report to my parent', 'Rapport hebdomadaire au parent')} />
        </V>
      )}
    </StepScreen>
  );
}
