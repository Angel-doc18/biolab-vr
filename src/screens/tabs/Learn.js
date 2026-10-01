import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Bar, Ic, P, T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { units } from '../../data/units';
import { lessonsFor } from '../../data/lessons';
import { labsForUnit } from '../../data/labs';
import { unitStatus } from '../../state/selectors';

const FILTERS = [
  { id: 'all', en: 'All', fr: 'Toutes' },
  { id: 'cyto', en: 'Cells & genetics', fr: 'Cellules et génétique' },
  { id: 'phys', en: 'Human & plant physiology', fr: 'Physiologie' },
  { id: 'eco', en: 'Ecology & health', fr: 'Écologie et santé' },
];

export default function Learn({ navigation }) {
  const { user, pro, progress, stats } = useApp();
  const L = useL();
  const [filter, setFilter] = useState('all');
  const list = units.filter((u) => filter === 'all' || u.group === filter);
  const mastered = units.filter((u) => (stats.unitPct[u.id] || 0) >= 85).length;
  const started = units.filter((u) => (stats.unitPct[u.id] || 0) > 0).length;
  const onTrack = stats.mastery >= 50;

  return (
    <Screen header={<TabHeader title={L('Learn syllabus', 'Programme')} subtitle={L('GCE Ordinary Level Biology', 'GCE O-Level Biologie')} />}>
      <V c="pb-space-lg">
        <V c="mt-space-md mb-space-sm p-1 bg-surface-container rounded-full flex-row items-center">
          <V c="flex-1 py-2 px-3 rounded-full bg-primary-container flex-row items-center justify-center gap-1.5 shadow-sm">
            <T c="font-label-md text-label-md text-on-primary" numberOfLines={1}>
              GCE O-Level
            </T>
            <T c="font-label-sm text-label-sm text-on-primary opacity-80" numberOfLines={1}>
              {L('Forms 3-5', 'Form 3-5')}
            </T>
          </V>
          <V c="flex-1 py-2 px-3 rounded-full flex-row items-center justify-center gap-1.5">
            <Ic n="lock" s={15} c="outline" />
            <T c="font-label-md text-label-md text-on-surface-variant">GCE A-Level</T>
            <V c="bg-surface-container-highest px-1.5 py-0.5 rounded-full">
              <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Soon', 'Bientôt')}</T>
            </V>
          </V>
        </V>

        <V c="mt-space-xs p-space-md bg-surface-container-lowest rounded-full shadow-sm">
          <V c="flex-row items-center justify-between mb-3">
            <V>
              <V c="flex-row items-center gap-1.5">
                <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{stats.mastery}%</T>
                <V c="bg-surface-container-low px-2 py-0.5 rounded-full">
                  <T c={`font-label-sm text-label-sm ${onTrack ? 'text-secondary' : 'text-primary-container'}`}>{started ? (onTrack ? L('ON TRACK', 'EN BONNE VOIE') : L('KEEP GOING', 'CONTINUEZ')) : L('NOT STARTED', 'À COMMENCER')}</T>
                </V>
              </V>
              <T c="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{L('Syllabus mastery', 'Maîtrise du programme')}</T>
            </V>
            <V c="items-end">
              <T c="font-label-md text-label-md text-primary-container">
                {mastered} {L('of', 'sur')} {units.length} {L('units mastered', 'unités maîtrisées')}
              </T>
              <T c="font-body-sm text-body-sm text-outline mt-0.5">
                {L('Target: June', 'Objectif : juin')} {user?.examYear || ''}
              </T>
            </V>
          </V>
          <Bar pct={stats.mastery} c="h-2.5 bg-surface-container-high" />
          <V c="mt-3 flex-row items-center justify-between pt-1">
            <V c="flex-row items-center gap-1">
              <Ic n="verified" s={16} c="secondary" />
              <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Cameroon GCE Board syllabus', 'Programme du GCE Board')}</T>
            </V>
            <T c="font-label-sm text-label-sm text-primary-container">{L('Paper 1, 2 & 3', 'Épreuves 1, 2 et 3')}</T>
          </V>
        </V>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16, marginTop: 16 }} contentContainerStyle={{ paddingHorizontal: 16, gap: 8, paddingVertical: 4 }}>
          {FILTERS.map((f) => {
            const on = filter === f.id;
            const count = f.id === 'all' ? units.length : units.filter((u) => u.group === f.id).length;
            return (
              <P key={f.id} c={`px-3.5 py-1.5 rounded-full ${on ? 'bg-primary-container shadow-sm' : 'bg-surface-container-low'}`} onPress={() => setFilter(f.id)}>
                <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface-variant'}`}>
                  {L(f.en, f.fr)} ({count})
                </T>
              </P>
            );
          })}
        </ScrollView>

        <V c="mt-space-md gap-space-sm">
          {list.map((u) => {
            const status = unitStatus(progress, stats.unitPct, u, pro);
            const pct = stats.unitPct[u.id] || 0;
            const locked = status === 'locked';
            const lessons = lessonsFor(u.id).length;
            const labs = labsForUnit(u.id).length;
            return (
              <P
                key={u.id}
                c={`p-space-md rounded-full ${locked ? 'bg-surface-container-low opacity-85' : 'bg-surface-container-lowest shadow-sm'}`}
                scale={0.99}
                onPress={() => navigation.navigate('Unit', { unitId: u.id })}
              >
                <V c="flex-row items-start justify-between gap-3">
                  <V c="flex-row items-center gap-3 flex-1">
                    <V c={`w-12 h-12 rounded-xl items-center justify-center ${locked ? 'bg-surface-container-high' : status === 'next' ? 'bg-surface-container' : 'bg-surface-container-low'}`}>
                      <Ic n={u.icon} s={26} c={locked ? 'outline' : status === 'mastered' ? 'secondary' : status === 'next' ? 'on-surface-variant' : 'primary-container'} />
                    </V>
                    <V c="flex-1">
                      <V c="flex-row items-center gap-1.5 flex-wrap">
                        <T c="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                          {L('Unit', 'Unité')} {u.n}
                        </T>
                        <V c={`px-2 py-0.5 rounded-full ${locked ? 'bg-surface-container-highest' : 'bg-surface-container-high'}`}>
                          <T c={`font-label-sm text-label-sm ${locked ? 'text-on-surface-variant' : 'text-primary-container'}`}>{u.papers}</T>
                        </V>
                      </V>
                      <T c="font-headline-sm text-headline-sm text-on-surface mt-0.5" numberOfLines={1}>
                        {u.short}
                      </T>
                    </V>
                  </V>
                  {locked ? (
                    <V c="w-8 h-8 rounded-full bg-surface-container-highest items-center justify-center">
                      <Ic n="lock" s={18} />
                    </V>
                  ) : (
                    <Ic n="chevron_right" s={20} c="outline" style={{ marginTop: 4 }} />
                  )}
                </V>
                <V c="mt-3 flex-row items-center justify-between flex-wrap gap-2 pt-1">
                  {locked ? (
                    <>
                      <V c="bg-surface-container-high px-2 py-0.5 rounded-full">
                        <T c="font-label-sm text-label-sm text-outline">{L('Premium · first lesson free', 'Premium · 1re leçon gratuite')}</T>
                      </V>
                      <T c="font-label-sm text-label-sm text-outline">{L('Term Pass 1,500 FCFA', 'Pass 1 500 FCFA')}</T>
                    </>
                  ) : (
                    <>
                      <V c="flex-row items-center gap-2">
                        {status === 'mastered' ? (
                          <V c="flex-row items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-full">
                            <Ic n="check_circle" s={14} c="secondary" />
                            <T c="font-label-sm text-label-sm text-secondary">
                              {L('Mastered', 'Maîtrisée')} {pct}%
                            </T>
                          </V>
                        ) : status === 'progress' ? (
                          <V c="flex-row items-center gap-1 bg-primary-container px-2 py-0.5 rounded-full">
                            <Ic n="pending" s={14} c="on-primary" />
                            <T c="font-label-sm text-label-sm text-on-primary">
                              {L('In progress', 'En cours')} {pct}%
                            </T>
                          </V>
                        ) : (
                          <V c="bg-surface-container px-2 py-0.5 rounded-full">
                            <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '500' }}>
                              {L('Up next', 'À venir')}
                            </T>
                          </V>
                        )}
                        {status !== 'next' && (
                          <V c="flex-row items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-full">
                            <Ic n="view_in_ar" s={13} c="primary-container" />
                            <T c="font-label-sm text-label-sm text-primary-container" style={{ fontWeight: '400' }}>
                              3D
                            </T>
                          </V>
                        )}
                      </V>
                      <T c="font-body-sm text-body-sm text-on-surface-variant">
                        {lessons} {L('lessons', 'leçons')}
                        {labs ? ` · ${labs} ${labs === 1 ? L('practical', 'TP') : L('practicals', 'TP')}` : ''} · {u.quiz.length} {L('questions', 'questions')}
                      </T>
                    </>
                  )}
                </V>
              </P>
            );
          })}
        </V>
      </V>
    </Screen>
  );
}
