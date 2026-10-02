// Step 3 of the Lab: the practicals for one topic, each with its apparatus, so
// a student sees what they are about to do before opening it.
import { Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { StaticTabBar } from '../../ui/TabBar';
import { StepLine, SUBJECT_LOOK } from '../../ui/hub';
import { Diagram } from '../../diagrams';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { unitById } from '../../data/units';
import { labsForUnit } from '../../data/labs';
import { labLocked } from '../../data/plan';
import { subjectName } from '../../data/subjects';

export default function LabList({ navigation, route }) {
  const { pro, progress } = useApp();
  const L = useL();
  const lang = useLang();
  const unit = unitById(route.params?.unitId);
  const labs = labsForUnit(unit.id);
  const tint = (SUBJECT_LOOK[unit.subject] || SUBJECT_LOOK.biology).tint;
  const open = (l) => navigation.navigate(labLocked(l.id, pro) ? 'Paywall' : 'LabRun', { labId: l.id });

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={`${L('Topic', 'Thème')} ${unit.n}: ${unit.short}`} subtitle={`${subjectName(unit.subject, lang)}, ${L('practicals', 'travaux pratiques')}`} subtitleColor="on-surface-variant" avatar={false} />}>
        <V c="pt-space-md pb-space-xl gap-space-lg">
          <StepLine step={L('Step 3 of 3', 'Étape 3 sur 3')} text={L('Choose a practical', 'Choisissez un TP')} />
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Inside each practical: the apparatus explained aloud, the method step by step, your own readings or results, and what they mean.', 'Dans chaque TP : le matériel expliqué à voix haute, la méthode pas à pas, vos mesures ou résultats et leur signification.')}
          </T>

          {labs.map((l) => {
            const done = !!progress.labs[l.id];
            const locked = labLocked(l.id, pro);
            return (
              <V key={l.id} c="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container overflow-hidden">
                {!!l.diagram && (
                  <P c="items-center justify-center p-space-sm bg-surface-container-lowest" onPress={() => open(l)} scale={1}>
                    <Diagram id={l.diagram} caption={false} maxHeight={190} />
                  </P>
                )}
                <V c="p-space-md gap-space-sm border-t border-surface-container">
                  <V c="gap-1">
                    <T c="font-label-md text-label-md text-on-surface-variant">
                      {l.kind !== 'readings' ? L('Compare and explain', 'Comparer et expliquer') : l.plot ? L('Take readings, table and graph', 'Mesures, tableau et graphique') : L('Take readings and work out the result', 'Mesures et calcul du résultat')}, {l.minutes} min{done ? `. ${L('Done', 'Fait')}` : ''}
                    </T>
                    <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                      {l.title}
                    </T>
                    <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 21 }}>
                      {l.desc}
                    </T>
                  </V>
                  <P c="h-12 rounded-xl flex-row items-center justify-center gap-2" style={{ backgroundColor: tint }} onPress={() => open(l)}>
                    <Ic n={locked ? 'lock' : done ? 'replay' : 'experiment'} s={20} c="on-primary" />
                    <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                      {locked ? L('Full course', 'Cours complet') : done ? L('Do it again', 'Refaire le TP') : L('Start this practical', 'Commencer ce TP')}
                    </T>
                  </P>
                </V>
              </V>
            );
          })}
        </V>
      </Screen>
      <StaticTabBar active="Lab" />
    </V>
  );
}
