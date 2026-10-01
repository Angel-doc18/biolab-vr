import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Pulse, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { nextStep } from '../../navigation/routes';
import { OnbHeader } from './Steps';

export default function Role({ navigation }) {
  const { user, updateMe } = useApp();
  const L = useL();
  const [role, setRole] = useState(user?.role || 'student');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const ROLES = [
    {
      id: 'student',
      icon: 'school',
      name: L('Student (GCE candidate)', 'Élève (candidat GCE)'),
      chip: L('Revision, labs and mocks', 'Révisions, TP et examens'),
      body: L('Preparing for GCE Ordinary Level Biology (Forms 3 to 5): theory, practicals and past-style questions.', 'Préparation du GCE O-Level Biologie (Form 3 à 5) : théorie, TP et questions type examen.'),
      foot: ['view_in_ar', L('3D specimens and virtual practicals included', 'Spécimens 3D et TP virtuels inclus')],
      label: L('Student', 'élève'),
    },
    {
      id: 'parent',
      icon: 'family_restroom',
      name: L('Parent or guardian', 'Parent ou tuteur'),
      chip: L('Weekly progress reports', 'Rapports hebdomadaires'),
      body: L('Follow your child’s revision time, syllabus progress and mock scores once they share their link code with you.', 'Suivez le temps de révision, la progression et les notes de votre enfant grâce à son code.'),
      foot: ['notifications_active', L('Alerts when revision stops', 'Alertes en cas d’inactivité')],
      label: L('Parent', 'parent'),
    },
    {
      id: 'teacher',
      icon: 'corporate_fare',
      name: L('Teacher or school admin', 'Enseignant ou administration'),
      chip: L('Classroom portal', 'Portail de classe'),
      body: L('Create classes with a join code, set practice work and see which units your class finds hardest.', 'Créez des classes avec un code, donnez des exercices et voyez les unités difficiles.'),
      foot: ['co_present', L('Cohort diagnostics for your class', 'Diagnostic de la classe')],
      label: L('Teacher', 'enseignant'),
    },
  ];

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      if (role !== user?.role) await updateMe({ role });
      navigation.navigate(nextStep(role, 'Role'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const current = ROLES.find((r) => r.id === role);
  return (
    <Screen header={<OnbHeader label={L('Your profile', 'Votre profil')} canBack={false} />}>
      <V c="w-full pt-space-xs pb-space-md">
        <V c="flex-row items-center justify-between gap-space-md mb-space-sm">
          <V c="flex-row items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container">
            <Pulse c="w-1.5 h-1.5 rounded-full bg-primary-container" />
            <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{L('Step 1 of 5 · Getting started', 'Étape 1 sur 5 · Début')}</T>
          </V>
        </V>
        <V c="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
          <V c="h-full bg-primary-container rounded-full" style={{ width: '20%' }} />
        </V>
      </V>
      <V c="w-full mb-space-lg">
        <V c="absolute -right-2 -top-3 w-16 h-16 rounded-full bg-secondary-fixed/30" />
        <V c="flex-row items-center gap-space-xs mb-space-xs">
          <T c="font-headline-lg text-headline-lg text-on-background tracking-tight">{L('Who are you?', 'Qui êtes-vous ?')}</T>
          <V c="w-6 h-6 rounded-full bg-secondary-container items-center justify-center">
            <Ic n="biotech" s={16} c="on-secondary-container" />
          </V>
        </V>
        <T c="font-body-md text-body-md text-on-surface-variant">
          {L('Choose your role so we can set up the right tools for you.', 'Choisissez votre rôle pour que nous préparions les bons outils.')}
        </T>
      </V>
      <V c="gap-space-md mb-space-lg" accessibilityRole="radiogroup">
        {ROLES.map((r) => {
          const on = r.id === role;
          return (
            <P
              key={r.id}
              c={`w-full p-space-md rounded-xl ${on ? 'bg-surface-container-low shadow-md' : 'bg-surface-container-lowest shadow-sm'}`}
              onPress={() => setRole(r.id)}
              accessibilityRole="radio"
              accessibilityState={{ checked: on }}
            >
              <V c="flex-row items-start justify-between gap-space-sm mb-space-sm">
                <V c="flex-row items-center gap-space-md flex-1">
                  <V c={`w-11 h-11 rounded-xl items-center justify-center ${on ? 'bg-primary-container shadow-sm' : 'bg-surface-container'}`} style={on && { transform: [{ scale: 1.05 }] }}>
                    <Ic n={r.icon} s={24} c={on ? 'on-primary' : 'primary-container'} />
                  </V>
                  <V c="flex-1">
                    <T c="font-headline-sm text-headline-sm text-on-surface" style={{ lineHeight: 20 }}>
                      {r.name}
                    </T>
                    <V c={`self-start flex-row items-center gap-1 mt-1 px-2 py-0.5 rounded-full ${on ? 'bg-secondary-container' : 'bg-surface-container'}`}>
                      {on && <V c="w-1.5 h-1.5 rounded-full bg-secondary" />}
                      <T c={`font-label-sm text-label-sm ${on ? 'text-on-secondary-container' : 'text-on-surface-variant'}`}>{r.chip}</T>
                    </V>
                  </V>
                </V>
                <V c={`w-7 h-7 rounded-full items-center justify-center ${on ? 'bg-secondary shadow-sm' : 'bg-surface-container'}`}>
                  {on && <Ic n="check" s={18} c="on-secondary" />}
                </V>
              </V>
              <T c="font-body-sm text-body-sm text-on-surface-variant pl-space-xs mb-space-sm">{r.body}</T>
              <V c="flex-row items-center gap-space-xs pl-space-xs">
                <Ic n={r.foot[0]} s={18} c={on ? 'secondary' : 'on-surface-variant'} />
                <T c={`font-label-md text-label-md ${on ? 'text-secondary' : 'text-on-surface-variant'}`}>{r.foot[1]}</T>
              </V>
            </P>
          );
        })}
      </V>
      <V c="flex-row items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low mb-space-lg">
        <V c="w-8 h-8 rounded-full bg-primary-fixed items-center justify-center">
          <Ic n="verified_user" s={18} c="primary-container" />
        </V>
        <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">
          {L('Content follows the Cameroon GCE Board Ordinary Level Biology syllabus.', 'Le contenu suit le programme de biologie O-Level du GCE Board.')}
        </T>
      </V>
      <ErrorNote error={error} c="mb-space-sm" />
      <V c="w-full items-center gap-space-sm pb-space-md">
        <Cta label={`${L('Continue as', 'Continuer comme')} ${current.label}`} loading={busy} onPress={submit} />
        <V c="flex-row items-center gap-1">
          <Ic n="info" s={14} c="outline" />
          <T c="font-body-sm text-body-sm text-outline">{L('Students can link a parent or teacher later.', 'Les élèves peuvent lier un parent ou un enseignant plus tard.')}</T>
        </V>
      </V>
    </Screen>
  );
}
