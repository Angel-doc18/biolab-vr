import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Pulse, Screen } from '../../ui/chrome';
import { PhoneField, Toggle, validPhone } from '../../ui/form';
import { AnimalCell } from '../../ui/art';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { scheduleDailyReminder } from '../../lib/reminders';
import { OnbHeader, StepBar } from './Steps';
import { units } from '../../data/units';
import { lessonCount } from '../../data/lessons';

const pad = (n) => String(n).padStart(2, '0');
const twelve = (h, m) => `${((h + 11) % 12) + 1}:${pad(m)} ${h < 12 ? 'AM' : 'PM'}`;

export function TimePicker({ value, onChange, L }) {
  const [h, m] = value.split(':').map(Number);
  const set = (nh, nm) => onChange(`${pad((nh + 24) % 24)}:${pad((nm + 60) % 60)}`);
  const Btn = ({ icon, onPress, label }) => (
    <P c="w-9 h-9 rounded-lg bg-surface-container-low items-center justify-center" onPress={onPress} accessibilityLabel={label}>
      <Ic n={icon} s={20} c="primary-container" />
    </P>
  );
  return (
    <V c="flex-row items-center justify-center gap-space-md p-space-sm rounded-xl bg-surface-container-lowest shadow-sm">
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

export default function Goals({ navigation }) {
  const { user, updateMe, prefs } = useApp();
  const L = useL();
  const [grade, setGrade] = useState(user?.targetGrade || 'A');
  const [minutes, setMinutes] = useState(user?.dailyMinutes || 20);
  const [time, setTime] = useState(user?.reminderTime || '18:30');
  const [editTime, setEditTime] = useState(false);
  const [reports, setReports] = useState(true);
  const [parentPhone, setParentPhone] = useState(user?.parentPhone ? user.parentPhone.replace(/^237/, '') : '');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const GRADES = [
    { id: 'A', sub: L('Top grade', 'Meilleure note'), icon: 'school', tag: L('Distinction', 'Mention') },
    { id: 'B', sub: L('Strong pass', 'Très bien'), icon: 'check', tag: L('Credit', 'Crédit') },
    { id: 'C', sub: L('Pass', 'Passable'), icon: 'done', tag: L('Pass', 'Admis') },
  ];

  const submit = async () => {
    if (reports && parentPhone && !validPhone(parentPhone)) {
      setError(L('Enter your parent’s 9 digit number, or turn reports off.', 'Entrez le numéro du parent (9 chiffres) ou désactivez.'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await updateMe({
        targetGrade: grade,
        dailyMinutes: minutes,
        reminderTime: time,
        parentPhone: reports && parentPhone ? `237${parentPhone}` : null,
        parentReportFreq: 'weekly',
        inactivityAlert: reports && Boolean(parentPhone),
      });
      const reminder = await scheduleDailyReminder(time, minutes, prefs.lang);
      navigation.navigate('SetupDone', { reminder });
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen keyboard header={<OnbHeader label={L('Study goals', 'Objectifs')} />}>
      <StepBar pct={80} left={L('Onboarding progress', 'Progression')} right={L('Steps 4 & 5 of 5', 'Étapes 4 et 5 sur 5')} />
      <V c="gap-space-xs mb-space-lg">
        <V c="self-start flex-row items-center gap-1.5 px-space-sm py-1 bg-surface-container-high rounded-full">
          <Pulse />
          <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{L('Goals & offline pack', 'Objectifs et contenu hors ligne')}</T>
        </V>
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Set your target & get offline ready', 'Fixez votre objectif')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant">{L('Choose your daily revision pace. Your starter pack is already on this phone.', 'Choisissez votre rythme quotidien. Votre contenu est déjà sur ce téléphone.')}</T>
      </V>

      <V c="gap-space-sm mb-space-lg">
        <V c="flex-row items-center justify-between">
          <T c="font-headline-sm text-headline-sm text-on-surface">{L('Target GCE Biology grade', 'Note visée')}</T>
          <T c="font-label-sm text-label-sm text-secondary">{L('Aim high', 'Visez haut')}</T>
        </V>
        <V c="flex-row gap-space-sm">
          {GRADES.map((g) => {
            const on = grade === g.id;
            return (
              <P key={g.id} c={`flex-1 items-center justify-center p-space-md rounded-xl shadow-sm ${on ? 'bg-primary' : 'bg-surface-container-low'}`} onPress={() => setGrade(g.id)} scale={0.95}>
                <T c={`font-headline-md text-headline-md ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
                  {L('Grade', 'Note')} {g.id}
                </T>
                <T c={`font-label-sm text-label-sm mt-0.5 ${on ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>{g.sub}</T>
                <V c="mt-1 flex-row items-center gap-0.5">
                  <Ic n={g.icon} s={14} c={on ? 'primary-fixed-dim' : 'on-surface-variant'} />
                  <T c={`font-label-sm ${on ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`} style={{ fontSize: 10 }}>
                    {g.tag}
                  </T>
                </V>
              </P>
            );
          })}
        </V>
      </V>

      <V c="gap-space-sm mb-space-lg">
        <V c="flex-row items-center justify-between">
          <T c="font-headline-sm text-headline-sm text-on-surface">{L('Daily study goal', 'Objectif quotidien')}</T>
          <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Little and often works best', 'Peu mais souvent')}</T>
        </V>
        <V c="flex-row gap-space-xs">
          {[10, 20, 30, 45].map((m) => {
            const on = minutes === m;
            return (
              <P key={m} c={`flex-1 py-space-sm px-1 rounded-xl items-center ${on ? 'bg-primary shadow-sm' : 'bg-surface-container-low'}`} onPress={() => setMinutes(m)}>
                <T c={`font-label-lg text-label-lg ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: on ? '700' : '600' }}>
                  {m} min
                </T>
              </P>
            );
          })}
        </V>
        <V c="mt-space-xs p-space-md rounded-xl bg-surface-container-low gap-space-sm">
          <V c="flex-row items-center justify-between">
            <V c="flex-row items-center gap-space-sm flex-1">
              <V c="w-10 h-10 rounded-full bg-surface-container-high items-center justify-center">
                <Ic n="alarm" s={22} c="primary" />
              </V>
              <V c="flex-1">
                <T c="font-label-lg text-label-lg text-on-surface">{L('Daily revision alarm', 'Rappel quotidien')}</T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('A reminder on this phone', 'Une notification sur ce téléphone')}</T>
              </V>
            </V>
            <P c="px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-sm flex-row items-center gap-1.5" onPress={() => setEditTime((e) => !e)} scale={0.95}>
              <Ic n="schedule" s={18} c="secondary" />
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {time}
              </T>
            </P>
          </V>
          {editTime && <TimePicker value={time} onChange={setTime} L={L} />}
        </V>
      </V>

      <V c="p-space-md rounded-xl bg-surface-container-low shadow-sm gap-space-md mb-space-lg">
        <V c="flex-row items-start justify-between gap-space-sm">
          <V c="flex-row items-center gap-space-sm flex-1">
            <V c="w-10 h-10 rounded-full bg-secondary-container items-center justify-center">
              <Ic n="chat" s={22} c="on-secondary-container" />
            </V>
            <V c="flex-1">
              <T c="font-label-lg text-label-lg text-on-surface">{L('Weekly parent progress', 'Rapport hebdomadaire au parent')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Share your report on WhatsApp each week', 'Partagez votre rapport sur WhatsApp chaque semaine')}</T>
            </V>
          </V>
          <Toggle on={reports} onPress={() => setReports((r) => !r)} accessibilityLabel="Weekly parent reports" />
        </V>
        <V style={{ opacity: reports ? 1 : 0.4 }} pointerEvents={reports ? 'auto' : 'none'} c="gap-1">
          <PhoneField value={parentPhone} onChangeText={setParentPhone} bg="bg-surface-container-lowest" placeholder={L("Parent's WhatsApp number", 'Numéro WhatsApp du parent')} />
          <T c="font-body-sm text-body-sm text-on-surface-variant px-1">
            {L('Used for your weekly report and an SMS if you stop revising for 3 days.', 'Pour le rapport et un SMS après 3 jours sans révision.')}
          </T>
        </V>
      </V>

      <V c="gap-space-sm mb-space-xl">
        <V c="flex-row items-center justify-between">
          <T c="font-headline-sm text-headline-sm text-on-surface">{L('Offline pack', 'Contenu hors ligne')}</T>
          <V c="px-2 py-0.5 rounded-full bg-secondary-fixed">
            <T c="font-label-sm text-label-sm text-on-secondary-fixed">{L('No data needed', 'Sans données')}</T>
          </V>
        </V>
        <V c="p-space-md rounded-xl bg-surface-container-low shadow-sm gap-space-md">
          <V c="flex-row items-center justify-between">
            <V c="flex-row items-center gap-space-sm">
              <V c="w-11 h-11 rounded-xl bg-surface-container-high items-center justify-center">
                <Ic n="download_done" s={24} c="primary" />
              </V>
              <V>
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Starter offline pack', 'Pack de démarrage')}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Built into the app', 'Intégré à l’application')}</T>
              </V>
            </V>
            <V c="px-2.5 py-1 rounded-full bg-secondary-container">
              <T c="font-label-sm text-label-sm text-on-secondary-container">{L('Installed', 'Installé')}</T>
            </V>
          </V>
          <V c="flex-row gap-space-sm items-center bg-surface-container-lowest p-space-sm rounded-xl">
            <V c="w-14 h-14 rounded-lg bg-surface-container overflow-hidden">
              <AnimalCell />
            </V>
            <V c="flex-1">
              <T c="font-label-md text-label-md text-on-surface" numberOfLines={1}>
                {units.length} {L('units', 'unités')} · {lessonCount()} {L('lessons', 'leçons')}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                {L('3D models, labs and practice questions', 'Modèles 3D, TP et questions')}
              </T>
            </V>
          </V>
          <V c="gap-1.5 pt-space-xs">
            <V c="flex-row items-center justify-between">
              <V c="flex-row items-center gap-1.5">
                <Ic n="check_circle" s={16} c="secondary" />
                <T c="font-label-sm text-label-sm text-secondary">{L('Ready on this device', 'Prêt sur cet appareil')}</T>
              </V>
              <T c="font-label-sm text-label-sm text-secondary uppercase tracking-wider">{L('Ready offline', 'Hors ligne')}</T>
            </V>
            <V c="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <V c="h-full w-full bg-secondary rounded-full" />
            </V>
          </V>
        </V>
      </V>
      <ErrorNote error={error} c="mb-space-sm" />
      <V c="gap-space-md pt-space-xs pb-8">
        <Cta label={L('Complete setup & enter app', 'Terminer et entrer')} loading={busy} onPress={submit} />
        <P c="w-full items-center py-2" onPress={() => navigation.navigate('SetupDone', { reminder: false })}>
          <T c="font-label-md text-label-md text-on-surface-variant">{L('Later in Settings', 'Plus tard dans les paramètres')}</T>
        </P>
      </V>
    </Screen>
  );
}
