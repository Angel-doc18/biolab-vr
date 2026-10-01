import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Bar, C, Ic, P, Ring, T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { StaticTabBar } from '../../ui/TabBar';
import { SpecimenPreview } from '../../ui/previews';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { unitById } from '../../data/units';
import { lessonsFor } from '../../data/lessons';
import { labsForUnit } from '../../data/labs';
import { lessonLocked, labLocked } from '../../data/plan';
import { gradeFor, nextLesson } from '../../state/selectors';

export default function Unit({ navigation, route }) {
  const { pro, progress, stats } = useApp();
  const L = useL();
  const unit = unitById(route.params?.unitId || 'cell');
  const lessons = lessonsFor(unit.id);
  const labs = labsForUnit(unit.id);
  const [tab, setTab] = useState('lessons');
  const pct = stats.unitPct[unit.id] || 0;
  const next = nextLesson(progress, unit.id, pro);
  const quiz = progress.quiz[unit.id];
  const tip = (lessons.find((l) => !progress.lessons[l.id]) || lessons[0]).tip;
  const doneCount = lessons.filter((l) => progress.lessons[l.id]).length;

  const openLesson = (l, i) => {
    if (lessonLocked(unit.id, i, pro)) navigation.navigate('Paywall');
    else navigation.navigate('Lesson', { lessonId: l.id });
  };

  const TABS = [
    ['lessons', 'play_circle', `${L('Lessons', 'Leçons')} (${lessons.length})`],
    ['specimens', 'view_in_ar', `${L('3D specimen', 'Spécimen 3D')} (1)`],
    ['quiz', 'quiz', `${L('Practice quiz', 'Quiz')} (${unit.quiz.length})`],
    ...(labs.length ? [['labs', 'science', `${L('Practicals', 'TP')} (${labs.length})`]] : []),
  ];

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('Learn syllabus', 'Programme')} subtitle={`${L('Unit', 'Unité')} ${unit.n}`} />}>
        <V c="pt-space-md pb-space-sm gap-space-md">
          <V c="bg-surface-container-low rounded-xl p-space-md shadow-sm">
            <V c="flex-row items-start justify-between gap-space-sm">
              <V c="flex-1 pr-1">
                <V c="flex-row items-center gap-space-xs mb-1 flex-wrap">
                  <V c="bg-primary-container px-2 py-0.5 rounded-full">
                    <T c="font-label-sm text-label-sm text-on-primary uppercase tracking-wider">
                      {L('Unit', 'Unité')} {unit.n}
                    </T>
                  </V>
                  <V c="bg-surface-container-highest px-2 py-0.5 rounded-full">
                    <T c="font-label-sm text-label-sm text-primary">{unit.papers}</T>
                  </V>
                </V>
                <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight" style={{ lineHeight: 30 }}>
                  {unit.short}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant mt-1">{unit.title}</T>
              </V>
              <V c="items-center bg-surface-container-lowest p-2 rounded-xl shadow-sm">
                <Ring size={56} stroke={4} pct={pct} track="#E2EFFF" tint={C.secondary}>
                  <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700', lineHeight: 18 }}>
                    {pct}%
                  </T>
                </Ring>
                <T c="font-label-sm text-label-sm text-secondary mt-1 uppercase tracking-tight">{L('Mastery', 'Maîtrise')}</T>
              </V>
            </V>
            <V c="mt-space-sm pt-space-xs flex-row items-center justify-between">
              <V c="flex-row items-center gap-1.5">
                <Ic n="cloud_done" s={16} c="secondary" />
                <T c="font-label-sm text-label-sm text-secondary">{L('Stored on this phone', 'Sur ce téléphone')}</T>
              </V>
              <T c="font-label-sm text-label-sm text-on-surface-variant">
                {doneCount}/{lessons.length} {L('lessons read', 'leçons lues')}
              </T>
            </V>
          </V>

          <P c="rounded-xl overflow-hidden bg-surface-container shadow-md" onPress={() => navigation.navigate('Specimen', { unitId: unit.id })}>
            <V c="w-full h-52 bg-surface-container-high">
              <SpecimenPreview unitId={unit.id} />
              <V c="absolute inset-0" style={{ backgroundColor: 'rgba(22,51,72,0.35)' }} />
              <V c="absolute top-3 left-3 right-3 flex-row items-center justify-between">
                <V c="bg-surface-container-lowest/90 px-2.5 py-1 rounded-full flex-row items-center gap-1.5 shadow-sm">
                  <V c="w-2 h-2 rounded-full bg-secondary-container" />
                  <T c="font-label-sm text-label-sm text-on-surface">{L('Interactive 3D model', 'Modèle 3D interactif')}</T>
                </V>
                <V c="bg-primary-container px-2 py-0.5 rounded-full flex-row items-center gap-1 shadow-sm">
                  <Ic n="view_in_ar" s={14} c="on-primary" />
                  <T c="font-label-sm text-label-sm text-on-primary uppercase tracking-wider">VR</T>
                </V>
              </V>
              <V c="absolute bottom-3 left-3 right-3 gap-1.5">
                <T c="font-headline-sm text-headline-sm" style={{ color: '#fff', fontWeight: '700' }}>
                  {unit.vr.title}
                </T>
                <V c="flex-row items-center justify-between gap-2">
                  <T c="font-body-sm text-body-sm flex-1" style={{ color: 'rgba(255,255,255,0.9)' }} numberOfLines={2}>
                    {unit.vr.parts.map((p) => p.name).join(', ')}
                  </T>
                  <V c="bg-secondary px-3 py-1.5 rounded-lg flex-row items-center gap-1 shadow-sm">
                    <Ic n="touch_app" s={16} c="on-secondary" />
                    <T c="font-label-md text-label-md text-on-secondary">{L('Launch 3D', 'Ouvrir 3D')}</T>
                  </V>
                </V>
              </V>
            </V>
          </P>

          <P c="w-full h-[52px] bg-primary-container rounded-xl flex-row items-center justify-center gap-2 shadow-md" onPress={() => openLesson(next, lessons.indexOf(next))}>
            <T c="font-label-lg text-label-lg text-on-primary">
              {doneCount === lessons.length ? L('Review', 'Revoir') : doneCount ? L('Resume', 'Reprendre') : L('Start', 'Commencer')} {L('lesson', 'la leçon')} {next.n}
            </T>
            <Ic n="arrow_forward" s={20} c="on-primary" />
          </P>

          <V c="bg-surface-container-high rounded-xl p-space-md shadow-sm flex-row items-start gap-space-sm">
            <V c="w-9 h-9 rounded-xl bg-tertiary-container items-center justify-center shadow-sm">
              <Ic n="lightbulb" s={20} c="on-tertiary" />
            </V>
            <V c="flex-1">
              <T c="font-label-md text-label-md text-tertiary-container uppercase tracking-wider">{L('Examiner’s revision note', 'Note de l’examinateur')}</T>
              <T c="font-body-md text-body-md text-on-surface mt-0.5" style={{ lineHeight: 21 }}>
                {tip.split('**').map((s, i) => (
                  <T key={i} c="font-body-md text-body-md text-on-surface" style={i % 2 ? { fontWeight: '700' } : null}>
                    {s}
                  </T>
                ))}
              </T>
            </V>
          </V>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 4, paddingBottom: 4, paddingTop: 4 }}>
            {TABS.map(([id, icon, label]) => {
              const on = tab === id;
              return (
                <P key={id} c={`px-3.5 py-2 rounded-xl flex-row items-center gap-1.5 ${on ? 'bg-primary-container shadow-sm' : 'bg-surface-container'}`} onPress={() => setTab(id)}>
                  <Ic n={icon} s={16} c={on ? 'on-primary' : 'on-surface-variant'} />
                  <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface-variant'}`}>{label}</T>
                </P>
              );
            })}
          </ScrollView>

          {tab === 'lessons' && (
            <V c="gap-space-sm">
              {lessons.map((l, i) => {
                const done = !!progress.lessons[l.id];
                const locked = lessonLocked(unit.id, i, pro);
                const current = !done && !locked && l.id === next.id;
                return (
                  <P
                    key={l.id}
                    c={`bg-surface-container-lowest rounded-xl p-space-md flex-row items-center justify-between gap-space-sm ${current ? 'shadow-md' : 'shadow-sm'} ${!done && !current ? 'opacity-85' : ''}`}
                    onPress={() => openLesson(l, i)}
                  >
                    {current && <V c="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container" />}
                    <V c={`flex-row items-start gap-space-sm flex-1 ${current ? 'pl-1' : ''}`}>
                      <V
                        c={`w-10 h-10 rounded-xl items-center justify-center mt-0.5 ${done ? 'bg-secondary/10' : current ? 'bg-primary-container shadow-sm' : 'bg-surface-container'}`}
                      >
                        <Ic n={done ? 'check_circle' : current ? 'play_arrow' : locked ? 'lock' : 'lock_open'} s={20} c={done ? 'secondary' : current ? 'on-primary' : 'outline'} fill={done || current} />
                      </V>
                      <V c="flex-1">
                        <V c="flex-row items-center gap-1.5 flex-wrap">
                          {current ? (
                            <V c="bg-primary-container px-2 rounded-full">
                              <T c="font-label-sm text-label-sm text-on-primary uppercase">{L('Next up', 'Suivante')}</T>
                            </V>
                          ) : (
                            <T c={`font-label-sm text-label-sm uppercase ${done ? 'text-secondary' : 'text-outline'}`}>
                              {done ? L('Completed', 'Terminée') : locked ? 'Premium' : L('Up next', 'À venir')}
                            </T>
                          )}
                          <T c="text-outline" style={{ fontSize: 10 }}>
                            ·
                          </T>
                          <T c={`font-body-sm text-body-sm ${current ? 'text-primary-container' : 'text-on-surface-variant'}`}>{l.minutes} min</T>
                        </V>
                        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: current ? '700' : '600' }} numberOfLines={2}>
                          {L('Lesson', 'Leçon')} {l.n}: {l.title}
                        </T>
                        <V c="flex-row items-center gap-2 mt-1 flex-wrap">
                          {l.tags.map((tg, k) => (
                            <V key={tg} c={`flex-row items-center gap-1 px-2 py-0.5 rounded-full ${current && k === 0 ? 'bg-primary-fixed' : 'bg-surface-container'}`}>
                              <Ic n={k === 0 ? 'record_voice_over' : 'notes'} s={13} c={current && k === 0 ? 'primary' : 'on-surface-variant'} />
                              <T c={`font-label-sm ${current && k === 0 ? 'text-primary' : 'text-on-surface-variant'}`} style={{ fontSize: 11 }}>
                                {tg}
                              </T>
                            </V>
                          ))}
                        </V>
                      </V>
                    </V>
                    <V c={`w-10 h-10 items-center justify-center ${current ? 'rounded-xl bg-primary-container shadow-sm' : 'rounded-full'}`}>
                      <Ic n={done ? 'replay' : current ? 'chevron_right' : locked ? 'lock' : 'chevron_right'} s={current ? 20 : 22} c={current ? 'on-primary' : 'on-surface-variant'} />
                    </V>
                  </P>
                );
              })}
            </V>
          )}

          {tab === 'specimens' && (
            <V c="gap-space-sm">
              <V c="flex-row items-center justify-between">
                <V c="flex-row items-center gap-1.5">
                  <Ic n="view_in_ar" s={20} c="primary-container" />
                  <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                    {L('Featured 3D specimen', 'Spécimen 3D')}
                  </T>
                </V>
                <T c="font-label-sm text-label-sm text-secondary uppercase tracking-wider">{progress.models[unit.id] ? L('Viewed', 'Vu') : L('New', 'Nouveau')}</T>
              </V>
              <V c="flex-row gap-space-sm">
                {unit.vr.parts.slice(0, 2).map((p) => (
                  <P key={p.key} c="flex-1 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm" onPress={() => navigation.navigate('Specimen', { unitId: unit.id })}>
                    <V c="h-28 bg-surface-container-high">
                      <SpecimenPreview unitId={unit.id} />
                      <V c="absolute top-2 left-2 bg-inverse-surface/80 px-1.5 py-0.5 rounded flex-row items-center gap-0.5">
                        <Ic n="view_in_ar" s={12} c="secondary-container" />
                        <T c="font-label-sm text-label-sm text-inverse-on-surface">3D</T>
                      </V>
                    </V>
                    <V c="p-space-sm">
                      <T c="font-headline-sm text-headline-sm text-on-surface" numberOfLines={1}>
                        {p.name}
                      </T>
                      <T c="font-body-sm text-body-sm text-on-surface-variant mt-0.5" numberOfLines={1}>
                        {p.tag}
                      </T>
                      <V c="flex-row items-center justify-between mt-2 pt-1">
                        <T c="font-label-sm text-label-sm text-secondary uppercase">{L('Interactive', 'Interactif')}</T>
                        <Ic n="arrow_outward" s={18} c="primary-container" />
                      </V>
                    </V>
                  </P>
                ))}
              </V>
            </V>
          )}

          {tab === 'quiz' && (
            <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
              <T c="font-headline-sm text-headline-sm text-on-surface">{L('Unit practice quiz', 'Quiz de l’unité')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {unit.quiz.length} {L('multiple choice questions with worked explanations. Your best score counts toward unit mastery.', 'questions à choix multiples avec explications. Votre meilleur score compte pour la maîtrise.')}
              </T>
              {quiz?.best != null && (
                <T c="font-label-md text-label-md text-secondary">
                  {L('Best score', 'Meilleur score')}: {quiz.best}% · {quiz.attempts} {quiz.attempts === 1 ? L('attempt', 'essai') : L('attempts', 'essais')}
                </T>
              )}
              <P c="h-12 rounded-xl bg-primary-container flex-row items-center justify-center gap-2" onPress={() => navigation.navigate('Quiz', { unitId: unit.id })}>
                <Ic n="quiz" s={20} c="on-primary" />
                <T c="font-label-lg text-label-lg text-on-primary">{quiz?.best != null ? L('Try again', 'Recommencer') : L('Start quiz', 'Commencer le quiz')}</T>
              </P>
            </V>
          )}

          {tab === 'labs' && (
            <V c="gap-space-sm">
              {labs.map((l) => (
                <P key={l.id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex-row items-center gap-3" onPress={() => navigation.navigate(labLocked(l.id, pro) ? 'Paywall' : 'LabRun', { labId: l.id })}>
                  <V c="w-12 h-12 rounded-xl bg-primary-fixed/50 items-center justify-center">
                    <Ic n={l.icon} s={24} c="primary-container" />
                  </V>
                  <V c="flex-1">
                    <T c="font-headline-sm text-headline-sm text-on-surface">{l.title}</T>
                    <T c="font-body-sm text-body-sm text-on-surface-variant">
                      {l.minutes} min · {progress.labs[l.id] ? L('Completed', 'Terminé') : labLocked(l.id, pro) ? 'Premium' : L('Ready', 'Prêt')}
                    </T>
                  </V>
                  <Ic n="chevron_right" c="outline" />
                </P>
              ))}
            </V>
          )}

          <V c="bg-surface-container-low rounded-xl p-space-md shadow-sm mb-space-md gap-2">
            <V c="flex-row items-center justify-between">
              <T c="font-label-md text-label-md text-on-surface">{L('Diagnostic performance', 'Diagnostic')}</T>
              <T c="font-label-sm text-label-sm text-secondary">
                {quiz?.best != null ? `${L('Practice grade', 'Note estimée')}: ${gradeFor(quiz.best)}` : L('Take the quiz to see a grade', 'Faites le quiz')}
              </T>
            </V>
            <Bar pct={pct} c="h-2 bg-surface-container-highest" />
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {L('Mastery combines your best quiz score (70%) and lessons read (30%).', 'La maîtrise combine le meilleur score au quiz (70 %) et les leçons lues (30 %).')}
            </T>
          </V>
        </V>
      </Screen>
      <StaticTabBar active="Learn" />
    </V>
  );
}
