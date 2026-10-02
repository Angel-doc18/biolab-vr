import { Ic, P, T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { labsFor, labUnitN } from '../../data/labs';
import { labLocked } from '../../data/plan';
import { subjectName } from '../../data/subjects';
import { Diagram } from '../../diagrams';
import { Section } from './Home';

export default function Lab({ navigation }) {
  const { pro, progress, subject } = useApp();
  const L = useL();
  const lang = useLang();
  const LABS = labsFor(subject);
  if (!LABS.length) return <Screen header={<TabHeader switcher title={L('Practicals', 'Travaux pratiques')} />} />;
  const done = LABS.filter((l) => progress.labs[l.id]).length;
  // The first practical not yet completed, else the first one.
  const next = LABS.find((l) => !progress.labs[l.id] && !labLocked(l.id, pro)) || LABS[0];
  const recorded = progress.workbook.filter((w) => w.labId === next.id).length;

  const open = (l) => {
    if (labLocked(l.id, pro)) navigation.navigate('Paywall');
    else navigation.navigate('LabRun', { labId: l.id });
  };

  // The practical's labelled apparatus, or its two conditions side by side.
  const preview = (() => {
    if (next.diagram) return <Diagram id={next.diagram} caption={false} maxHeight={220} />;
    if (next.kind === 'readings') return next.view?.(next.input?.def ?? 0, 0, []) || null;
    const a = next.model(next.control ?? 0, next.slider.def);
    const b = next.model(next.def, next.slider.def);
    return (
      <V c="flex-row items-center gap-6">
        <V c="w-28 h-28 rounded-full bg-surface-container-lowest items-center justify-center">{a.A.view}</V>
        <Ic n="arrow_forward" s={20} c="outline" />
        <V c="w-28 h-28 rounded-full bg-surface-container-lowest items-center justify-center">{b.B.view}</V>
      </V>
    );
  })();

  return (
    <Screen header={<TabHeader switcher title={L('Practicals', 'Travaux pratiques')} subtitle={`GCE ${subjectName(subject, lang)}, ${L('Paper 3 methods', 'méthodes de l’épreuve 3')}`} />}>
      <V c="gap-space-lg pt-space-md pb-space-xl">
        <V c="flex-row items-end justify-between">
          <T c="font-body-md text-body-md text-on-surface-variant">
            {done} {L('of', 'sur')} {LABS.length} {L('practicals completed', 'TP terminés')}
          </T>
          <P onPress={() => navigation.navigate('Workbook')} hitSlop={8}>
            <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
              {L('Lab workbook', 'Cahier de TP')}
            </T>
          </P>
        </V>

        <Section title={progress.labs[next.id] ? L('Practise again', 'Refaire') : L('Next practical', 'Prochain TP')}>
          <V c="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <P c="w-full bg-surface-container-lowest items-center justify-center p-space-sm" style={{ minHeight: 160 }} onPress={() => open(next)} scale={1}>
              {preview}
            </P>
            <V c="p-space-md gap-space-sm">
              <V c="gap-1">
                <T c="font-label-md text-label-md text-on-surface-variant">
                  {L('Unit', 'Unité')} {labUnitN(next)}, {next.minutes} min{recorded ? `, ${L('recorded', 'noté')} ${recorded}×` : ''}
                </T>
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {next.title}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant">{next.desc}</T>
              </V>
              <P c="h-12 rounded-xl bg-primary-container items-center justify-center" onPress={() => open(next)}>
                <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                  {recorded ? L('Run it again', 'Refaire le TP') : L('Start practical', 'Commencer le TP')}
                </T>
              </P>
            </V>
          </V>
        </Section>

        <Section title={L('All practicals', 'Tous les TP')}>
          <V c="bg-surface-container-lowest rounded-xl shadow-sm">
            {LABS.map((l, i) => {
              const isDone = !!progress.labs[l.id];
              const locked = labLocked(l.id, pro);
              return (
                <P key={l.id} c={`p-space-md flex-row items-center gap-space-sm ${i ? 'border-t border-surface-container' : ''}`} scale={0.99} onPress={() => open(l)}>
                  <V c="flex-1 gap-0.5">
                    <T c={`font-label-lg text-label-lg ${locked ? 'text-on-surface-variant' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
                      {l.title}
                    </T>
                    <T c="font-body-sm text-body-sm text-on-surface-variant">
                      {L('Unit', 'Unité')} {labUnitN(l)}, {l.minutes} min
                      {isDone ? `. ${L('Done', 'Fait')}` : locked ? `. ${L('Full course', 'Cours complet')}` : ''}
                    </T>
                  </V>
                  <Ic n={isDone ? 'check' : locked ? 'lock' : 'chevron_right'} s={20} c={isDone ? 'secondary' : 'outline'} />
                </P>
              );
            })}
          </V>
        </Section>
      </V>
    </Screen>
  );
}
