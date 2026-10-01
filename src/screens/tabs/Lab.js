import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Bar, Ic, P, T, V } from '../../ui/kit';
import { Pulse, Screen, TabHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { LABS } from '../../data/labs';
import { labLocked } from '../../data/plan';

const FILTERS = [
  { id: 'all', en: 'All practicals', fr: 'Tous les TP' },
  { id: 'cell', en: 'Cells & osmosis', fr: 'Cellules et osmose' },
  { id: 'nutrition', en: 'Biochemistry & nutrition', fr: 'Biochimie et nutrition' },
  { id: 'transport', en: 'Plant physiology', fr: 'Physiologie végétale' },
  { id: 'alevel', en: 'A-Level', fr: 'A-Level' },
];

export default function Lab({ navigation }) {
  const { pro, progress } = useApp();
  const L = useL();
  const [filter, setFilter] = useState('all');
  const ready = LABS.filter((l) => !l.soon);
  const done = ready.filter((l) => progress.labs[l.id]).length;
  const started = ready.filter((l) => !progress.labs[l.id] && progress.workbook.some((w) => w.labId === l.id)).length;
  const list = LABS.filter((l) => (filter === 'all' ? true : filter === 'alevel' ? l.soon : l.unit === filter && !l.soon));
  // Spotlight: the first practical not yet completed, else the most recent one.
  const spotlight = ready.find((l) => !progress.labs[l.id] && !labLocked(l.id, pro)) || ready[0];
  const others = list.filter((l) => l.id !== spotlight.id);
  const recorded = progress.workbook.filter((w) => w.labId === spotlight.id).length;

  const open = (l) => {
    if (l.soon) return;
    if (labLocked(l.id, pro)) navigation.navigate('Paywall');
    else navigation.navigate('LabRun', { labId: l.id });
  };

  return (
    <Screen header={<TabHeader />}>
      <V c="pt-space-sm pb-space-xs flex-row items-center justify-between">
        <V c="flex-row items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container">
          <Ic n="verified" s={14} c="primary" />
          <T c="font-label-sm text-label-sm text-primary uppercase tracking-wider">{L('GCE Paper 3 practicals', 'TP de l’épreuve 3')}</T>
        </V>
        <P c="flex-row items-center gap-1" onPress={() => navigation.navigate('Workbook')}>
          <Ic n="menu_book" s={16} c="secondary" />
          <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Workbook', 'Cahier')}</T>
        </P>
      </V>

      <V c="py-space-xs">
        <V c="flex-row gap-space-xs bg-surface-container-low p-space-sm rounded-xl">
          {[
            ['check_circle', 'secondary', done, L('Completed', 'Terminés')],
            ['timelapse', 'primary-container', started, L('In progress', 'En cours')],
            ['lock_clock', 'outline', ready.length - done - started, L('To do', 'À faire')],
          ].map(([i, col, n, label]) => (
            <V key={label} c="flex-1 items-center justify-center p-2 rounded-lg bg-surface-container-lowest shadow-sm">
              <V c="flex-row items-center gap-1">
                <Ic n={i} s={18} c={col} />
                <T c="font-headline-sm text-headline-sm text-on-surface">{n}</T>
              </V>
              <T c="font-label-sm text-label-sm text-on-surface-variant mt-0.5">{label}</T>
            </V>
          ))}
        </V>
      </V>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }} contentContainerStyle={{ paddingHorizontal: 16, gap: 4, paddingVertical: 10 }}>
        {FILTERS.map((f) => {
          const on = filter === f.id;
          return (
            <P key={f.id} c={`px-3.5 py-1.5 rounded-full ${on ? 'bg-primary-container shadow-sm' : 'bg-surface-container'}`} onPress={() => setFilter(f.id)}>
              <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface-variant'}`}>
                {L(f.en, f.fr)}
                {f.id === 'all' ? ` (${LABS.length})` : ''}
              </T>
            </P>
          );
        })}
      </ScrollView>

      {(filter === 'all' || filter === spotlight.unit) && (
        <V c="pt-space-xs pb-space-sm">
          <V c="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
            <V c="w-full h-44 bg-surface-container-low items-center justify-center">
              <V c="flex-row items-center gap-6">
                {(() => {
                  const m = spotlight.model(spotlight.control ?? 0, spotlight.slider.def);
                  const b = spotlight.model(spotlight.def, spotlight.slider.def);
                  return (
                    <>
                      <V c="w-28 h-28 rounded-full bg-surface-container-lowest items-center justify-center shadow-sm">{m.A.view}</V>
                      <Ic n="arrow_forward" s={20} c="outline" />
                      <V c="w-28 h-28 rounded-full bg-surface-container-lowest items-center justify-center shadow-sm">{b.B.view}</V>
                    </>
                  );
                })()}
              </V>
              <V c="absolute top-3 left-3 flex-row items-center gap-1.5">
                <V c="flex-row items-center gap-1 bg-surface-container-lowest/90 px-2.5 py-1 rounded-lg">
                  <Pulse c="w-2 h-2 rounded-full bg-secondary" />
                  <T c="font-label-sm text-label-sm text-primary">{L('Virtual microscope', 'Microscope virtuel')}</T>
                </V>
                {recorded > 0 && (
                  <V c="bg-secondary-container px-2 py-1 rounded-lg">
                    <T c="font-label-sm text-label-sm text-on-secondary-container">
                      {recorded} {L('recorded', 'notés')}
                    </T>
                  </V>
                )}
              </V>
              <V c="absolute bottom-3 right-3 bg-surface-container-lowest/95 px-2 py-1 rounded-lg items-end">
                <T c="font-label-sm text-label-sm text-primary-container">{spotlight.minutes} mins</T>
                <T c="font-label-sm text-label-sm text-secondary">{spotlight.level}</T>
              </V>
            </V>
            <V c="p-space-md gap-space-sm">
              <V>
                <T c="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  {L('Paper 3 · Unit', 'Épreuve 3 · Unité')} {spotlight.unitN}
                </T>
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {spotlight.title}
                </T>
              </V>
              <T c="font-body-md text-body-md text-on-surface-variant">{spotlight.desc}</T>
              <V c="bg-surface-container-low p-space-sm rounded-lg gap-1.5">
                <V c="flex-row items-center justify-between">
                  <T c="font-label-sm text-label-sm text-on-surface">{progress.labs[spotlight.id] ? L('Completed', 'Terminé') : recorded ? L('Started', 'Commencé') : L('Not started', 'Pas commencé')}</T>
                  <T c="font-label-sm text-label-sm text-primary-container">
                    {Math.min(6, recorded ? 6 : 0)}/6 {L('steps', 'étapes')}
                  </T>
                </V>
                <Bar pct={recorded ? 100 : 0} c="h-1.5 bg-surface-container" />
              </V>
              <V c="flex-row items-center justify-between pt-1">
                <V c="flex-row items-center gap-2 flex-1">
                  <V c="w-8 h-8 rounded-full bg-surface-container items-center justify-center">
                    <Ic n="science" s={18} c="primary" />
                  </V>
                  <T c="font-label-sm text-label-sm text-on-surface-variant flex-1">{L('GCE practical method', 'Méthode du GCE')}</T>
                </V>
                <P c="h-10 px-4 rounded-xl bg-primary-container flex-row items-center gap-1.5 shadow-sm" onPress={() => open(spotlight)}>
                  <T c="font-label-lg text-label-lg text-on-primary">{recorded ? L('Run again', 'Refaire') : L('Start practical', 'Commencer')}</T>
                  <Ic n="arrow_forward" s={18} c="on-primary" />
                </P>
              </V>
            </V>
          </V>
        </V>
      )}

      <V c="gap-space-sm pb-space-lg">
        <V c="flex-row items-center justify-between pt-2">
          <T c="font-headline-sm text-headline-sm text-on-surface">{L('Standard laboratory practicals', 'TP de laboratoire')}</T>
          <T c="font-label-sm text-label-sm text-on-surface-variant">
            {ready.length - done} {L('remaining', 'restants')}
          </T>
        </V>
        {others.map((l) => {
          const isDone = !!progress.labs[l.id];
          const locked = !l.soon && labLocked(l.id, pro);
          if (l.soon) {
            return (
              <V key={l.id} c="bg-surface-container-low rounded-xl p-space-md shadow-sm gap-space-sm">
                <V c="flex-row items-start gap-3">
                  <V c="w-12 h-12 rounded-xl bg-surface-container-highest items-center justify-center">
                    <Ic n="lock" s={24} c="primary-container" />
                  </V>
                  <V c="flex-1">
                    <V c="flex-row items-center gap-2 flex-wrap">
                      <T c="font-label-sm text-label-sm text-primary-container uppercase tracking-wider">GCE A-Level</T>
                      <V c="px-2 py-0.5 rounded-full bg-surface-container-highest">
                        <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Coming soon', 'Bientôt')}</T>
                      </V>
                    </V>
                    <T c="font-headline-sm text-headline-sm text-on-surface mt-0.5">{l.title}</T>
                    <T c="font-body-sm text-body-sm text-on-surface-variant mt-1">{l.desc}</T>
                  </V>
                </V>
              </V>
            );
          }
          return (
            <P key={l.id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm" scale={0.99} onPress={() => open(l)}>
              <V c="flex-row items-start gap-3">
                <V c={`w-12 h-12 rounded-xl items-center justify-center ${isDone ? 'bg-secondary/10' : 'bg-primary-fixed/50'}`}>
                  <Ic n={isDone ? 'task_alt' : l.icon} s={24} c={isDone ? 'secondary' : 'primary-container'} />
                </V>
                <V c="flex-1">
                  <V c="flex-row items-center gap-2 flex-wrap">
                    <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      {L('Paper 3 · Unit', 'Épreuve 3 · Unité')} {l.unitN}
                    </T>
                    <V c={`px-2 py-0.5 rounded-full ${isDone ? 'bg-secondary-container' : locked ? 'bg-surface-container-high' : 'bg-surface-container'}`}>
                      <T c={`font-label-sm text-label-sm ${isDone ? 'text-on-secondary-container' : locked ? 'text-outline' : 'text-primary'}`}>
                        {isDone ? L('Completed', 'Terminé') : locked ? 'Premium' : L('Ready to start', 'Prêt')}
                      </T>
                    </V>
                  </V>
                  <T c="font-headline-sm text-headline-sm text-on-surface mt-0.5" style={{ lineHeight: 21 }}>
                    {l.title}
                  </T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant mt-1">{l.desc}</T>
                </V>
              </V>
              <V c="flex-row items-center justify-between bg-surface-container-low/60 p-2.5 rounded-lg mt-1">
                <V c="flex-row items-center gap-3">
                  <V c="flex-row items-center gap-1">
                    <Ic n="schedule" s={16} />
                    <T c="font-label-sm text-label-sm text-on-surface-variant">{l.minutes} mins</T>
                  </V>
                  <V c="flex-row items-center gap-1">
                    <Ic n="signal_cellular_alt" s={16} c={l.level === 'Hard' ? 'primary-container' : 'on-surface-variant'} />
                    <T c={`font-label-sm text-label-sm ${l.level === 'Hard' ? 'text-primary-container' : 'text-on-surface-variant'}`}>{l.level}</T>
                  </V>
                </V>
                <V c={`flex-row items-center gap-1 h-8 px-3 rounded-lg ${isDone ? '' : 'bg-surface-container-highest'}`}>
                  <T c={`font-label-md text-label-md ${isDone ? 'text-secondary' : 'text-primary-container'}`}>
                    {isDone ? L('Run again', 'Refaire') : locked ? L('Unlock', 'Débloquer') : L('Begin lab', 'Commencer')}
                  </T>
                  <Ic n={isDone ? 'chevron_right' : locked ? 'lock_open' : 'play_arrow'} s={16} c={isDone ? 'secondary' : 'primary-container'} />
                </V>
              </V>
            </P>
          );
        })}
      </V>
      <V c="pb-space-lg items-center gap-1">
        <V c="flex-row items-center gap-1.5">
          <Ic n="verified_user" s={16} c="secondary" />
          <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Follows GCE Ordinary Level practical methods', 'Suit les méthodes pratiques du GCE')}</T>
        </V>
        <T c="font-body-sm text-body-sm text-outline text-center">{L('Every practical works offline.', 'Chaque TP fonctionne hors ligne.')}</T>
      </V>
    </Screen>
  );
}
