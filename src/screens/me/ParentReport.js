import { useState } from 'react';
import { Linking } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { PhoneField, Toggle, validPhone } from '../../ui/form';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { reportFromStats, reportText, shareReportPdf, whatsappUrl } from '../../lib/report';
import { Section } from '../tabs/Home';

const mask = (p) => (p ? `+237 ${p.slice(3, 6)} ••• ${p.slice(-3)}` : '');

function Choice({ on, label, onPress }) {
  return (
    <P c={`flex-1 h-10 items-center justify-center rounded-lg ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={onPress} accessibilityRole="radio" accessibilityState={{ checked: on }}>
      <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`}>{label}</T>
    </P>
  );
}

// The student shares their progress with a parent: a WhatsApp message, a PDF, or a
// code the parent uses to follow them from a parent account.
export default function ParentReport() {
  const { user, stats, progress, updateMe } = useApp();
  const L = useL();
  const [editing, setEditing] = useState(!user?.parentPhone);
  const [phone, setPhone] = useState(user?.parentPhone ? user.parentPhone.slice(3) : '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [code, setCode] = useState(null);
  const [toast, showToast] = useToast();
  const lang = user?.parentReportLang || 'en';
  const report = reportFromStats(user, stats, progress);
  const text = reportText(report, lang);
  const freq = user?.parentReportFreq || 'weekly';

  const save = async (fields, msg) => {
    setError(null);
    try {
      await updateMe(fields);
      if (msg) showToast(msg);
    } catch (e) {
      setError(e);
    }
  };
  const savePhone = async () => {
    if (!validPhone(phone)) return setError(L('Enter a 9 digit Cameroon number.', 'Entrez un numéro de 9 chiffres.'));
    setBusy(true);
    await save({ parentPhone: `237${phone}` }, L('Parent number saved', 'Numéro enregistré'));
    setBusy(false);
    setEditing(false);
  };
  const makeCode = async () => {
    setError(null);
    try {
      const r = await post('/v1/parent/link-code');
      setCode(r.code);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <V c="flex-1">
      <Screen bg="bg-surface" keyboard header={<StackHeader title={L('Reports to a parent', 'Rapports au parent')} avatar={false} />}>
        <V c="pt-space-md pb-space-xl gap-space-lg">
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Send your progress to a parent on WhatsApp. They need no app: the report opens as a message.', 'Envoyez votre progression à un parent sur WhatsApp. Il n’a besoin d’aucune application : le rapport s’ouvre comme un message.')}
          </T>

          <Section title={L('Parent or guardian', 'Parent ou tuteur')}>
            {editing ? (
              <V c="gap-space-sm">
                <PhoneField label={L('Their WhatsApp number', 'Son numéro WhatsApp')} value={phone} onChangeText={setPhone} />
                <Cta variant="dark" icon={null} label={L('Save number', 'Enregistrer le numéro')} loading={busy} onPress={savePhone} />
              </V>
            ) : (
              <V c="gap-space-xs">
                <T c="font-body-md text-body-md text-on-surface">{mask(user.parentPhone)}</T>
                <V c="flex-row gap-space-lg">
                  <P onPress={() => setEditing(true)} hitSlop={8}>
                    <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                      {L('Change number', 'Changer le numéro')}
                    </T>
                  </P>
                  <P onPress={makeCode} hitSlop={8}>
                    <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                      {L('Link a parent account', 'Lier un compte parent')}
                    </T>
                  </P>
                </V>
              </V>
            )}
            {code && (
              <V c="mt-space-sm p-space-md rounded-xl bg-surface-container-low gap-1">
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Parent link code, valid for 48 hours', 'Code parent, valable 48 heures')}</T>
                <V c="flex-row items-center justify-between">
                  <T c="font-headline-md text-headline-md text-on-surface tracking-widest" style={{ fontWeight: '700' }}>
                    {code}
                  </T>
                  <P
                    onPress={async () => {
                      await Clipboard.setStringAsync(code);
                      showToast(L('Code copied', 'Code copié'));
                    }}
                    hitSlop={8}
                  >
                    <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                      {L('Copy', 'Copier')}
                    </T>
                  </P>
                </V>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Your parent signs up as “Parent” in ScienceAid and enters this code to follow your progress.', 'Votre parent s’inscrit comme « Parent » dans ScienceAid et saisit ce code pour suivre votre progression.')}</T>
              </V>
            )}
          </Section>

          <Section title={L('The report your parent receives', 'Le rapport reçu par votre parent')}>
            <V c="bg-surface-container-lowest rounded-xl border border-surface-container p-space-md">
              <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
                {text.replace(/\*/g, '')}
              </T>
            </V>
          </Section>

          <Section title={L('Settings', 'Réglages')}>
            <V c="gap-space-md">
              <V c="gap-space-xs">
                <T c="font-label-lg text-label-lg text-on-surface">{L('Remind me to send it', 'Me rappeler de l’envoyer')}</T>
                <V c="flex-row gap-space-xs">
                  <Choice on={freq === 'weekly'} label={L('Fridays', 'Le vendredi')} onPress={() => save({ parentReportFreq: 'weekly' })} />
                  <Choice on={freq === 'mocks'} label={L('After papers', 'Après les épreuves')} onPress={() => save({ parentReportFreq: 'mocks' })} />
                  <Choice on={freq === 'monthly'} label={L('Monthly', 'Chaque mois')} onPress={() => save({ parentReportFreq: 'monthly' })} />
                </V>
              </V>
              <V c="gap-space-xs">
                <T c="font-label-lg text-label-lg text-on-surface">{L('Language of the report', 'Langue du rapport')}</T>
                <V c="flex-row gap-space-xs">
                  <Choice on={lang === 'en'} label="English" onPress={() => save({ parentReportLang: 'en' })} />
                  <Choice on={lang === 'fr'} label="Français" onPress={() => save({ parentReportLang: 'fr' })} />
                </V>
              </V>
              <V c="flex-row items-center justify-between gap-space-sm">
                <V c="flex-1">
                  <T c="font-label-lg text-label-lg text-on-surface">{L('Message my parent if I stop revising', 'Prévenir mon parent si j’arrête de réviser')}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{L('After 3 and 7 days without revision.', 'Après 3 et 7 jours sans révision.')}</T>
                </V>
                <Toggle on={!!user?.inactivityAlert} onPress={() => save({ inactivityAlert: !user?.inactivityAlert })} accessibilityLabel={L('Inactivity message', 'Message d’inactivité')} />
              </V>
            </V>
          </Section>

          <ErrorNote error={error} />
          <V c="gap-space-sm">
            <Cta variant="dark" icon={null} label={L('Send the report on WhatsApp', 'Envoyer le rapport sur WhatsApp')} onPress={() => Linking.openURL(whatsappUrl(user?.parentPhone, text)).catch(() => showToast(L('WhatsApp is not installed', 'WhatsApp n’est pas installé'), 'error'))} />
            <P
              c="items-center py-2"
              onPress={async () => {
                try {
                  await shareReportPdf(report, lang);
                } catch {
                  showToast(L('Could not create the PDF.', 'Impossible de créer le PDF.'), 'error');
                }
              }}
            >
              <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                {L('Download a printable PDF', 'Télécharger un PDF à imprimer')}
              </T>
            </P>
          </V>
        </V>
      </Screen>
      {toast}
    </V>
  );
}
