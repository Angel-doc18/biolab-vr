// The CTO's keys: the five AI keys (Groq x2, Google Gemini x2, Mistral) that the
// tutor switches between when one is used up, and the Brevo key that sends the
// password reset emails. Add, replace (rotate), test or remove each one. A key
// is checked with its provider before it is saved and is never shown again in
// full: only its last 4 characters.
import { useState } from 'react';
import { Linking } from 'react-native';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { Field } from '../../ui/form';
import { useL } from '../../i18n';
import { post, put } from '../../api/adminClient';
import { Card, Loading, Pill, Section, Sheet, useAdminLoad } from './kit';

const WHERE = {
  groq: ['console.groq.com/keys', 'https://console.groq.com/keys'],
  gemini: ['aistudio.google.com/apikey', 'https://aistudio.google.com/apikey'],
  mistral: ['console.mistral.ai/api-keys', 'https://console.mistral.ai/api-keys'],
};
const time = (t) => new Date(t).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

function KeyCard({ k, L, onSet, onTest, onRemove, testing }) {
  const tone = !k.set ? 'muted' : k.resting ? (k.reason === 'refused' ? 'bad' : 'warn') : 'ok';
  const state = !k.set
    ? L('Not set', 'Non défini')
    : k.resting
      ? k.reason === 'refused'
        ? L('Refused by the provider', 'Refusée par le fournisseur')
        : `${k.reason === 'used up' ? L('Used up, resting until', 'Épuisée, repos jusqu’à') : L('Busy, resting until', 'Occupée, repos jusqu’à')} ${time(k.restUntil)}`
      : L('Ready', 'Prête');
  return (
    <Card>
      <V c="p-space-md gap-space-sm">
        <V c="flex-row items-center gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '700' }}>
            {k.label}
          </T>
          <Pill text={state} tone={tone} />
        </V>
        {k.set ? (
          <T c="font-body-sm text-body-sm text-on-surface-variant">
            {k.from === 'app' ? L('Set here', 'Définie ici') : L('Set on the server', 'Définie sur le serveur')} ({k.hint}).{' '}
            {k.ok + k.failed > 0 ? `${k.ok} ${L('answers', 'réponses')}, ${k.failed} ${L('failures since the server started', 'échecs depuis le démarrage')}.` : ''}
            {k.lastModel ? ` ${L('Last model', 'Dernier modèle')}: ${k.lastModel}.` : ''}
          </T>
        ) : (
          <P onPress={() => Linking.openURL(WHERE[k.provider][1]).catch(() => {})} hitSlop={6}>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {L('Get a free key at', 'Obtenez une clé gratuite sur')} <T c="font-body-sm text-body-sm text-primary-container" style={{ fontWeight: '700' }}>{WHERE[k.provider][0]}</T>
            </T>
          </P>
        )}
        <V c="flex-row flex-wrap gap-space-xs">
          <Cta variant="soft" icon={null} lead={k.set ? 'autorenew' : 'add'} h="h-10" label={k.set ? L('Replace', 'Remplacer') : L('Add key', 'Ajouter')} onPress={onSet} />
          {k.set && <Cta variant="soft" icon={null} lead="play_arrow" h="h-10" label={testing ? L('Testing...', 'Test...') : L('Test', 'Tester')} onPress={onTest} />}
          {k.set && k.from === 'app' && <Cta variant="soft" icon={null} lead="delete" h="h-10" label={L('Remove', 'Retirer')} onPress={onRemove} />}
        </V>
      </V>
    </Card>
  );
}

export default function AdminKeys() {
  const L = useL();
  const ai = useAdminLoad('/v1/admin/system/ai-keys');
  const mail = useAdminLoad('/v1/admin/system/email');
  const [toast, showToast] = useToast();
  const [sheet, setSheet] = useState(null); // { slot, label } | { brevo: true }
  const [value, setValue] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [testing, setTesting] = useState(null);
  const [sender, setSender] = useState(null); // { email, name } being edited
  const [testTo, setTestTo] = useState('');
  const [mailBusy, setMailBusy] = useState(false);
  const [mailError, setMailError] = useState(null);

  const keys = ai.data?.keys || [];
  const m = mail.data?.email;
  const replaceKey = (k) => ai.setData((d) => ({ ...d, keys: d.keys.map((x) => (x.id === k.id ? k : x)) }));

  const saveKey = async () => {
    setBusy(true);
    setError(null);
    try {
      if (sheet.brevo) {
        const r = await put('/v1/admin/system/email', { apiKey: value.trim() });
        mail.setData(() => r);
      } else {
        const r = await put(`/v1/admin/system/ai-keys/${sheet.slot}`, { key: value.trim() });
        replaceKey(r.key);
      }
      setSheet(null);
      setValue('');
      showToast(L('Key checked and saved', 'Clé vérifiée et enregistrée'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  const test = async (k) => {
    setTesting(k.id);
    try {
      const r = await post(`/v1/admin/system/ai-keys/${k.id}/test`, {});
      replaceKey(r.key);
      showToast(r.test.ok ? `${L('Works', 'Fonctionne')}: ${r.test.model}, ${r.test.ms} ms${r.test.note ? `. ${r.test.note}` : ''}` : r.test.error);
    } catch (e) {
      showToast(e.message);
    } finally {
      setTesting(null);
    }
  };
  const remove = async (k) => {
    try {
      const r = await put(`/v1/admin/system/ai-keys/${k.id}`, { key: '' });
      replaceKey(r.key);
      showToast(L('Removed', 'Retirée'));
    } catch (e) {
      showToast(e.message);
    }
  };
  const saveSender = async () => {
    setMailBusy(true);
    setMailError(null);
    try {
      const r = await put('/v1/admin/system/email', { senderEmail: sender.email.trim(), senderName: sender.name.trim() });
      mail.setData(() => r);
      setSender(null);
      showToast(L('Sender saved', 'Expéditeur enregistré'));
    } catch (e) {
      setMailError(e);
    } finally {
      setMailBusy(false);
    }
  };
  const sendTest = async () => {
    setMailBusy(true);
    setMailError(null);
    try {
      await post('/v1/admin/system/email/test', { to: testTo.trim() });
      showToast(L('Test email sent. Check the inbox (and spam).', 'E-mail de test envoyé. Vérifiez la boîte (et les spams).'));
    } catch (e) {
      setMailError(e);
    } finally {
      setMailBusy(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen keyboard header={<StackHeader title={L('AI keys and email', 'Clés IA et e-mail')} avatar={false} />}>
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <Section title={L('AI keys', 'Clés IA')}>
            <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
              {L(
                'The tutor tries these keys in this order (photos and documents start with Gemini). When a key is used up or refused, the next one answers at once, so the AI keeps working while any key is ready.',
                'Le tuteur essaie ces clés dans cet ordre (photos et documents d’abord avec Gemini). Quand une clé est épuisée ou refusée, la suivante répond aussitôt.'
              )}
            </T>
            {ai.busy && !ai.data ? (
              <Loading />
            ) : (
              keys.map((k) => (
                <KeyCard key={k.id} k={k} L={L} testing={testing === k.id} onSet={() => (setValue(''), setError(null), setSheet({ slot: k.id, label: k.label }))} onTest={() => test(k)} onRemove={() => remove(k)} />
              ))
            )}
            <ErrorNote error={ai.error} />
          </Section>

          <Section title={L('Email (Brevo)', 'E-mail (Brevo)')}>
            <Card>
              {!m ? (
                <Loading />
              ) : (
                <V c="p-space-md gap-space-sm">
                  <V c="flex-row items-center gap-space-sm">
                    <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '700' }}>
                      {L('Password reset emails', 'E-mails de réinitialisation')}
                    </T>
                    <Pill text={m.ready ? L('Ready', 'Prêt') : L('Not set up', 'Non configuré')} tone={m.ready ? 'ok' : 'muted'} />
                  </V>
                  <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                    {m.set ? `${L('API key', 'Clé API')}: ${m.from === 'app' ? L('set here', 'définie ici') : L('on the server', 'sur le serveur')} (${m.hint}). ` : `${L('No API key yet. Create one in Brevo: SMTP & API, API keys.', 'Pas encore de clé. Créez-en une dans Brevo : SMTP & API, clés API.')} `}
                    {m.senderEmail ? `${L('Sender', 'Expéditeur')}: ${m.senderName} <${m.senderEmail}>.` : L('No sender yet: use an address verified in Brevo (Senders, domains).', 'Pas d’expéditeur : utilisez une adresse vérifiée dans Brevo.')}
                  </T>
                  <V c="flex-row flex-wrap gap-space-xs">
                    <Cta variant="soft" icon={null} lead={m.set ? 'autorenew' : 'add'} h="h-10" label={m.set ? L('Replace key', 'Remplacer la clé') : L('Add key', 'Ajouter la clé')} onPress={() => (setValue(''), setError(null), setSheet({ brevo: true, label: 'Brevo' }))} />
                    <Cta variant="soft" icon={null} lead="edit" h="h-10" label={L('Sender', 'Expéditeur')} onPress={() => setSender({ email: m.senderEmail || 'no-reply@klass8.com', name: m.senderName || 'Klass8' })} />
                  </V>
                  {!!sender && (
                    <V c="gap-space-xs pt-space-xs">
                      <Field label={L('Sender email', 'E-mail de l’expéditeur')} value={sender.email} onChangeText={(t) => setSender((s) => ({ ...s, email: t }))} autoCapitalize="none" keyboardType="email-address" />
                      <Field label={L('Sender name', 'Nom de l’expéditeur')} value={sender.name} onChangeText={(t) => setSender((s) => ({ ...s, name: t }))} />
                      <Cta variant="dark" icon={null} h="h-12" label={L('Save the sender', 'Enregistrer l’expéditeur')} loading={mailBusy} onPress={saveSender} />
                    </V>
                  )}
                  {m.ready && (
                    <V c="gap-space-xs pt-space-xs">
                      <Field label={L('Send a test email to', 'Envoyer un e-mail de test à')} value={testTo} onChangeText={setTestTo} placeholder="name@gmail.com" autoCapitalize="none" keyboardType="email-address" />
                      <Cta variant="soft" icon={null} lead="send" h="h-11" label={L('Send test email', 'Envoyer le test')} loading={mailBusy} onPress={sendTest} />
                    </V>
                  )}
                  <ErrorNote error={mailError} />
                </V>
              )}
            </Card>
          </Section>

          <V c="flex-row gap-2 items-start px-space-xs">
            <Ic n="lock" s={16} c="outline" />
            <T c="font-body-sm text-body-sm text-on-surface-variant flex-1" style={{ lineHeight: 20 }}>
              {L('Keys are encrypted on the server and never shown again in full. Changes are written to the security log.', 'Les clés sont chiffrées sur le serveur et jamais réaffichées en entier. Les changements sont notés dans le journal de sécurité.')}
            </T>
          </V>
        </V>
      </Screen>

      <Sheet
        visible={!!sheet}
        onClose={() => !busy && setSheet(null)}
        icon="key"
        title={sheet ? `${sheet.label}: ${L('new key', 'nouvelle clé')}` : ''}
        text={L('Paste the key. It is tested with the provider first; if it is refused, nothing changes.', 'Collez la clé. Elle est d’abord testée chez le fournisseur ; si elle est refusée, rien ne change.')}
        action={L('Check and save', 'Vérifier et enregistrer')}
        onAction={saveKey}
        busy={busy}
        cancel={L('Cancel', 'Annuler')}
      >
        <Field label={L('API key', 'Clé API')} secure value={value} onChangeText={setValue} autoCapitalize="none" autoCorrect={false} />
        <ErrorNote error={error} />
      </Sheet>
      {toast}
    </V>
  );
}
