// For a partner account: who they invite for (themselves, a school, or a
// business or group), and the school or organisation's name if there is one.
import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { Field } from '../../ui/form';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { nextStep } from '../../navigation/routes';
import { OnbHeader, StepBar } from './Steps';

export default function PartnerKind({ navigation }) {
  const { user, updateMe } = useApp();
  const L = useL();
  const [kind, setKind] = useState(user?.partnerKind || 'person');
  const [org, setOrg] = useState(user?.schoolName || '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const KINDS = [
    { id: 'person', icon: 'person', name: L('Just me', 'Moi seul'), body: L('I tell friends, classmates and families about Klass8.', 'Je parle de Klass8 à des amis, camarades et familles.') },
    { id: 'school', icon: 'school', name: L('A school', 'Une école'), body: L('A school, its staff or its PTA bringing its students.', 'Une école, son personnel ou son APE qui amène ses élèves.') },
    { id: 'business', icon: 'storefront', name: L('A business or group', 'Une entreprise ou un groupe'), body: L('A shop, a church, an association or a study centre.', 'Une boutique, une église, une association ou un centre de répétition.') },
  ];
  const submit = async () => {
    if (kind !== 'person' && org.trim().length < 2) return setError(kind === 'school' ? L('Write the name of the school.', 'Écrivez le nom de l’école.') : L('Write the name of the business or group.', 'Écrivez le nom de l’entreprise ou du groupe.'));
    setBusy(true);
    setError(null);
    try {
      await updateMe({ partnerKind: kind, schoolName: kind === 'person' ? null : org.trim() });
      navigation.navigate(nextStep('partner', 'PartnerKind'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Screen
      keyboard
      header={<OnbHeader />}
      footer={
        <V c="px-margin pt-space-sm" style={{ paddingBottom: 12 }}>
          <ErrorNote error={error} c="mb-space-sm" />
          <Cta variant="dark" icon={null} label={L('Continue', 'Continuer')} loading={busy} onPress={submit} />
        </V>
      }
    >
      <StepBar screen="PartnerKind" />
      <V c="gap-space-xs mb-space-lg">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Who are you inviting for?', 'Pour qui invitez-vous ?')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant">{L('You get a promo code. Each time someone who joined with it pays, you earn a share.', 'Vous recevez un code promo. À chaque paiement d’une personne inscrite avec, vous gagnez une part.')}</T>
      </V>
      <V c="gap-space-sm" accessibilityRole="radiogroup">
        {KINDS.map((k) => {
          const on = k.id === kind;
          return (
            <P key={k.id} c={`w-full p-space-md rounded-xl flex-row items-center gap-space-sm ${on ? 'bg-surface-container-low border-2 border-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => setKind(k.id)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
              <V c="w-11 h-11 rounded-full bg-surface-container items-center justify-center">
                <Ic n={k.icon} s={22} c="primary-container" />
              </V>
              <V c="flex-1 gap-0.5">
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {k.name}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                  {k.body}
                </T>
              </V>
              <V c={`w-6 h-6 rounded-full items-center justify-center ${on ? 'bg-primary-container' : 'border-2 border-outline-variant'}`}>{on && <Ic n="check" s={16} c="on-primary" />}</V>
            </P>
          );
        })}
      </V>
      {kind !== 'person' && <Field c="mt-space-lg" label={kind === 'school' ? L('Name of the school', 'Nom de l’école') : L('Name of the business or group', 'Nom de l’entreprise ou du groupe')} value={org} onChangeText={setOrg} maxLength={120} />}
    </Screen>
  );
}
