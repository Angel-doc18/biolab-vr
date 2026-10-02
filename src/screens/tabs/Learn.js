import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Bar, Ic, P, T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { groupsFor, unitsFor } from '../../data/units';
import { lessonsFor } from '../../data/lessons';
import { labsForUnit } from '../../data/labs';
import { subjectById, subjectName } from '../../data/subjects';
import { unitStatus } from '../../state/selectors';

export default function Learn({ navigation }) {
  const { pro, progress, stats, subject } = useApp();
  const L = useL();
  const lang = useLang();
  const [filter, setFilter] = useState('all');
  const units = unitsFor(subject);
  const FILTERS = [{ id: 'all', en: 'All units', fr: 'Toutes' }, ...groupsFor(subject)];
  const active = FILTERS.some((f) => f.id === filter) ? filter : 'all';
  const list = units.filter((u) => active === 'all' || u.group === active);
  const mastered = units.filter((u) => (stats.unitPct[u.id] || 0) >= 85).length;

  return (
    <Screen header={<TabHeader switcher title={L('Syllabus', 'Programme')} subtitle={`GCE Ordinary Level ${subjectName(subject, lang)} (${subjectById(subject).code})`} />}>
      <V c="pb-space-lg">
        <V c="mt-space-md gap-1.5">
          <V c="flex-row items-end justify-between">
            <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
              {stats.mastery}% {L('mastered', 'maîtrisé')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {mastered} {L('of', 'sur')} {units.length} {L('units complete', 'unités terminées')}
            </T>
          </V>
          <Bar pct={stats.mastery} c="h-2 bg-surface-container-high" />
        </V>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16, marginTop: 20 }} contentContainerStyle={{ paddingHorizontal: 16, gap: 20 }}>
          {FILTERS.map((f) => {
            const on = active === f.id;
            return (
              <P key={f.id} c={`pb-1.5 ${on ? 'border-b-2 border-primary-container' : 'border-b-2 border-transparent'}`} onPress={() => setFilter(f.id)} scale={1} accessibilityRole="tab" accessibilityState={{ selected: on }}>
                <T c={`font-label-lg text-label-lg ${on ? 'text-on-surface' : 'text-on-surface-variant'}`} style={{ fontWeight: on ? '700' : '500' }}>
                  {L(f.en, f.fr)}
                </T>
              </P>
            );
          })}
        </ScrollView>

        <V c="mt-space-md bg-surface-container-lowest rounded-xl shadow-sm">
          {list.map((u, i) => {
            const status = unitStatus(progress, stats.unitPct, u, pro);
            const pct = stats.unitPct[u.id] || 0;
            const locked = status === 'locked';
            const lessons = lessonsFor(u.id).length;
            const labs = labsForUnit(u.id).length;
            const parts = [`${lessons} ${L('lessons', 'leçons')}`, labs ? `${labs} ${labs === 1 ? L('practical', 'TP') : L('practicals', 'TP')}` : null, `${u.quiz.length} ${L('questions', 'questions')}`].filter(Boolean);
            return (
              <P key={u.id} c={`p-space-md flex-row items-center gap-space-sm ${i ? 'border-t border-surface-container' : ''}`} scale={0.99} onPress={() => navigation.navigate('Unit', { unitId: u.id })}>
                <T c="font-headline-sm text-headline-sm text-on-surface-variant w-7" style={{ fontWeight: '700' }}>
                  {u.n}
                </T>
                <V c="flex-1 gap-1">
                  <T c={`font-label-lg text-label-lg ${locked ? 'text-on-surface-variant' : 'text-on-surface'}`} style={{ fontWeight: '700' }} numberOfLines={2}>
                    {u.short}
                  </T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{locked ? L('First lesson free, the rest with the full course', 'Première leçon gratuite, la suite avec le cours complet') : `${parts.join(', ')}${pct ? `. ${pct}% ${L('done', 'fait')}` : ''}`}</T>
                  {!locked && pct > 0 && <Bar pct={pct} fill={status === 'mastered' ? 'bg-secondary' : 'bg-primary-container'} c="h-1 bg-surface-container mt-1" />}
                </V>
                <Ic n={locked ? 'lock' : 'chevron_right'} s={20} c="outline" />
              </P>
            );
          })}
        </V>
      </V>
    </Screen>
  );
}
