// Every 3D model in one place: pick a subject, then the model of any topic.
import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { StaticTabBar } from '../../ui/TabBar';
import { SUBJECT_LOOK } from '../../ui/hub';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { modelOf, unitsFor } from '../../data/units';
import { subjectName } from '../../data/subjects';

export default function Models({ navigation, route }) {
  const { subjects, subject: current } = useApp();
  const L = useL();
  const lang = useLang();
  const [subject, setPicked] = useState(subjects.includes(route.params?.subject) ? route.params.subject : current);
  const tint = (SUBJECT_LOOK[subject] || SUBJECT_LOOK.biology).tint;

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('3D models', 'Modèles 3D')} subtitle={L('Turn, open and hear about every part', 'Tournez, ouvrez et écoutez chaque partie')} subtitleColor="on-surface-variant" avatar={false} />}>
        <V c="pt-space-md pb-space-xl gap-space-lg">
          {subjects.length > 1 && (
            <V c="flex-row flex-wrap gap-space-xs">
              {subjects.map((id) => {
                const on = id === subject;
                const l = SUBJECT_LOOK[id] || SUBJECT_LOOK.biology;
                return (
                  <P key={id} c="h-12 px-3 rounded-xl flex-row items-center gap-2 border-2" style={{ borderColor: on ? l.tint : '#e1e6eb', backgroundColor: on ? l.bg : '#ffffff' }} onPress={() => setPicked(id)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
                    <Ic n={l.icon} s={20} c={l.tint} fill />
                    <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: on ? '700' : '500' }}>
                      {subjectName(id, lang)}
                    </T>
                  </P>
                );
              })}
            </V>
          )}

          {unitsFor(subject).filter((u, i, all) => u.vr && all.findIndex((x) => x.vr && modelOf(x.id) === modelOf(u.id)) === i).map((u) => {
            const vr = lang === 'fr' && u.vr.fr ? { ...u.vr, ...u.vr.fr } : u.vr;
            return (
              <P key={u.id} c="bg-surface-container-lowest rounded-xl p-space-md flex-row items-center gap-space-sm shadow-sm border border-surface-container" onPress={() => navigation.navigate('Specimen', { unitId: u.id })} scale={0.99} accessibilityRole="button" accessibilityLabel={vr.title}>
                <V c="w-12 h-12 rounded-xl items-center justify-center" style={{ backgroundColor: `${tint}1f` }}>
                  <Ic n="view_in_ar" s={26} c={tint} />
                </V>
                <V c="flex-1 gap-0.5">
                  <T c="font-label-md text-label-md text-on-surface-variant">
                    {u.form ? `${u.form}, ` : ''}{L('Topic', 'Thème')} {u.n}: {u.short}
                  </T>
                  <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                    {vr.title}
                  </T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                    {u.vr.parts.map((p) => (lang === 'fr' && p.fr?.name) || p.name).join(', ')}
                  </T>
                </V>
                <Ic n="chevron_right" s={24} c="outline" />
              </P>
            );
          })}
        </V>
      </Screen>
      <StaticTabBar active="Learn" />
    </V>
  );
}
