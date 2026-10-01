import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { nextStep } from '../../navigation/routes';
import { OnbHeader, StepBar } from './Steps';
import { units } from '../../data/units';

const CLASSES = ['Form 3', 'Form 4', 'Form 5', 'Lower Sixth', 'Upper Sixth'];

function examYears() {
  const now = new Date();
  const first = now.getMonth() >= 5 ? now.getFullYear() + 1 : now.getFullYear();
  return [first, first + 1, first + 2];
}

export default function ExamClass({ navigation, route }) {
  const { user, updateMe } = useApp();
  const L = useL();
  const years = examYears();
  const [level, setLevel] = useState('O');
  const [year, setYear] = useState(user?.examYear || years[0]);
  const [cls, setCls] = useState(user?.className || 'Form 5');
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const yearLabel = (y, i) =>
    `June ${y} ${i === 0 ? L('(next exam series)', '(prochaine session)') : i === 1 ? L('(one year away)', '(dans un an)') : L('(two years away)', '(dans deux ans)')}`;

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      await updateMe({ level, examYear: year, className: cls });
      if (route.params?.fromSettings) navigation.goBack();
      else navigation.navigate(nextStep('student', 'ExamClass'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen header={<OnbHeader label={L('Syllabus', 'Programme')} />}>
      <StepBar pct={40} left={L('Onboarding progress', 'Progression')} right={L('Step 2 of 5', 'Étape 2 sur 5')} />
      <V c="items-start gap-space-xs mb-space-lg">
        <V c="flex-row items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container">
          <Ic n="tune" s={14} c="primary" />
          <T c="font-label-sm text-label-sm text-primary tracking-wide">{L('STEP 2 OF 5 · SYLLABUS', 'ÉTAPE 2 SUR 5 · PROGRAMME')}</T>
        </V>
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Select your exam & class', 'Votre examen et votre classe')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant">{L('Matched to the Cameroon GCE Board Biology syllabus.', 'Aligné sur le programme de biologie du GCE Board.')}</T>
      </V>

      <V c="gap-space-lg">
        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L('Target examination level', 'Niveau d’examen')}</T>
          {[
            { id: 'O', name: 'GCE O-Level', sub: L('Forms 3 to 5 · General Certificate of Education Ordinary Level', 'Form 3 à 5 · Ordinary Level'), badge: L('Available', 'Disponible') },
            { id: 'A', name: 'GCE A-Level', sub: L('Lower & Upper Sixth · Advanced Level', 'Lower et Upper Sixth · Advanced Level'), badge: L('Coming soon', 'Bientôt'), soon: true },
          ].map((o) => {
            const on = level === o.id;
            return (
              <P
                key={o.id}
                c={`flex-row items-start gap-space-md p-space-md rounded-xl shadow-sm ${on ? 'bg-surface-container' : 'bg-surface-container-low'} ${o.soon ? 'opacity-60' : ''}`}
                onPress={() => !o.soon && setLevel(o.id)}
                disabled={o.soon}
                accessibilityRole="radio"
                accessibilityState={{ checked: on, disabled: o.soon }}
              >
                <V c={`w-6 h-6 rounded-full items-center justify-center mt-0.5 ${on ? 'bg-primary' : 'bg-surface-variant'}`}>{on && <Ic n="check" s={16} c="on-primary" />}</V>
                <V c="flex-1">
                  <V c="flex-row items-center justify-between">
                    <T c={`font-headline-sm text-headline-sm ${on ? 'text-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
                      {o.name}
                    </T>
                    <V c={`px-2 py-0.5 rounded-full ${on ? 'bg-primary-fixed' : ''}`}>
                      <T c={`font-label-sm text-label-sm ${on ? 'text-on-primary-fixed' : 'text-on-surface-variant'}`}>{o.badge}</T>
                    </V>
                  </V>
                  <T c="font-body-sm text-body-sm text-on-surface-variant mt-1">{o.sub}</T>
                </V>
              </P>
            );
          })}
        </V>

        <V c="gap-space-xs">
          <T c="font-label-lg text-label-lg text-on-surface">{L('Target exam series', 'Session visée')}</T>
          <P c="w-full h-12 pl-space-md pr-space-md rounded-xl bg-surface-container flex-row items-center justify-between" onPress={() => setOpen((o) => !o)} scale={1}>
            <T c="font-body-md text-body-md text-on-surface">{yearLabel(year, years.indexOf(year) < 0 ? 0 : years.indexOf(year))}</T>
            <Ic n={open ? 'expand_less' : 'expand_more'} s={20} />
          </P>
          {open && (
            <V c="rounded-xl bg-surface-container-lowest shadow-md overflow-hidden">
              {years.map((y, i) => (
                <P key={y} c={`px-space-md py-3 ${y === year ? 'bg-surface-container-low' : ''}`} scale={1} onPress={() => (setYear(y), setOpen(false))}>
                  <T c={`font-body-md text-body-md ${y === year ? 'text-primary-container' : 'text-on-surface'}`}>{yearLabel(y, i)}</T>
                </P>
              ))}
            </V>
          )}
        </V>

        <V c="gap-space-sm">
          <V c="flex-row items-center justify-between">
            <T c="font-label-lg text-label-lg text-on-surface">{L('Current class', 'Classe actuelle')}</T>
            <T c="font-label-sm text-label-sm text-secondary">
              {cls} {L('selected', 'choisie')}
            </T>
          </V>
          <V c="flex-row flex-wrap gap-2">
            {CLASSES.map((k) => {
              const on = cls === k;
              return (
                <P key={k} c={`h-12 rounded-xl items-center justify-center ${on ? 'bg-primary-container shadow-sm' : 'bg-surface-container-low'}`} style={{ width: '31.8%' }} onPress={() => setCls(k)}>
                  <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: on ? '700' : '600' }}>
                    {k}
                  </T>
                </P>
              );
            })}
          </V>
        </V>

        <V c="p-space-md rounded-xl bg-surface-container-low flex-row items-center gap-space-md">
          <V c="w-10 h-10 rounded-full bg-secondary-fixed items-center justify-center">
            <Ic n="view_in_ar" s={22} c="on-secondary-fixed" />
          </V>
          <V c="flex-1">
            <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }}>
              {L('3D and practical coverage', 'Couverture 3D et TP')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Follows the structure of the GCE practical paper.', 'Suit la structure de l’épreuve pratique du GCE.')}</T>
          </V>
        </V>

        <V c="gap-space-sm">
          <V c="flex-row items-center justify-between">
            <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
              {L('Subjects', 'Matières')}
            </T>
            <T c="font-label-sm text-label-sm text-on-surface-variant uppercase">{L('1 active · 2 upcoming', '1 active · 2 à venir')}</T>
          </V>
          <V c="p-space-md rounded-xl bg-surface-container shadow-sm gap-space-sm">
            <V c="flex-row items-start justify-between">
              <V c="flex-row items-center gap-space-sm">
                <V c="w-10 h-10 rounded-xl bg-secondary-container items-center justify-center">
                  <Ic n="biotech" s={24} c="on-secondary-container" />
                </V>
                <V>
                  <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                    {L('Biology', 'Biologie')}
                  </T>
                  <T c="font-label-sm text-label-sm text-secondary">{L('Included', 'Incluse')}</T>
                </V>
              </V>
              <V c="w-6 h-6 rounded-full bg-secondary items-center justify-center">
                <Ic n="check" s={16} c="on-secondary" />
              </V>
            </V>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {units.length} {L('units with lessons, 3D specimens, virtual practicals and practice questions.', 'unités avec cours, spécimens 3D, TP virtuels et questions.')}
            </T>
            <V c="flex-row items-center gap-2 pt-1">
              {[
                ['science', L('Paper 3 practicals', 'TP épreuve 3')],
                ['offline_bolt', L('Offline ready', 'Hors ligne')],
              ].map(([i, t]) => (
                <V key={t} c="flex-row items-center gap-1 px-2 py-0.5 rounded-lg bg-surface-container-highest">
                  <Ic n={i} s={14} />
                  <T c="font-label-sm text-label-sm text-on-surface-variant">{t}</T>
                </V>
              ))}
            </V>
          </V>
          {[
            ['experiment', L('Chemistry', 'Chimie')],
            ['architecture', L('Physics', 'Physique')],
          ].map(([i, n]) => (
            <V key={n} c="p-space-md rounded-xl bg-surface-container-low opacity-60 flex-row items-start justify-between">
              <V c="flex-row items-center gap-space-sm">
                <V c="w-10 h-10 rounded-xl bg-surface-container-highest items-center justify-center">
                  <Ic n={i} s={24} />
                </V>
                <V>
                  <V c="flex-row items-center gap-space-xs">
                    <T c="font-headline-sm text-headline-sm text-on-surface">{n}</T>
                    <Ic n="lock" s={16} />
                  </V>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Coming soon', 'Bientôt disponible')}</T>
                </V>
              </V>
              <V c="px-2 py-0.5 rounded bg-surface-container-highest">
                <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Later', 'Plus tard')}</T>
              </V>
            </V>
          ))}
        </V>
        <ErrorNote error={error} />
        <V c="pt-space-md pb-8">
          <Cta label={L('Continue to school selection', 'Continuer vers l’école')} loading={busy} onPress={submit} />
        </V>
      </V>
    </Screen>
  );
}
