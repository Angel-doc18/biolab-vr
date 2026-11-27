// The CTO's keys: the five AI keys (Groq x2, Google Gemini x2, Mistral) that the
// tutor switches between when one is used up, and the Brevo key that sends the
// password reset emails. Add, replace (rotate), test or remove each one. A key
// is checked with its provider before it is saved and is never shown again in
// full: only its last 4 characters.
import { useState } from 'react';
import { Linking } from 'react-native';
import { Bar, Ic, P, T, V } from '../../ui/kit';
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
const num = (n) => Number(n || 0).toLocaleString('en-GB');
const ago = (t, L) => {
  const m = Math.round((Date.now() - t) / 60000);
  return m < 1 ? L('just now', 'à l’instant') : m < 60 ? `${m} min ${L('ago', '')}`.trim() : `${L('at', 'à')} ${time(t)}`;
};
// Where to get a key, and what to know about a second one.
const TIPS = {
  groq: { en: 'A second Groq key must come from another Groq account to add free requests.', fr: 'Une deuxième clé Groq doit venir d’un autre compte Groq pour ajouter des requêtes gratuites.' },
  gemini: {
    en: 'Keys from the same Google project share one allowance: make the second key in a new project (AI Studio, Create API key, Create in new project) or with another Google account.',
    fr: 'Les clés d’un même projet Google partagent une seule allocation : créez la deuxième dans un nouveau projet (AI Studio, Create API key, nouveau projet) ou avec un autre compte Google.',
  },
  mistral: { en: 'Choose the free Experiment plan; a new key can take a few minutes to start working.', fr: 'Choisissez le plan gratuit Experiment ; une nouvelle clé peut mettre quelques minutes à fonctionner.' },
};

// Each key: is it working, how much has it done today, how much is left.
function KeyCard({ k, L, onSet, onTest, onRemove, testing }) {
  const t = k.today || {};
  const lim = t.limits || {};
  const tone = !k.set ? 'muted' : k.resting ? (k.reason === 'refused' || k.reason === 'used up' ? 'bad' : 'warn') : 'ok';
  const state = !k.set
    ? L('Not set', 'Non définie')
    : k.resting
      ? k.reason === 'refused'
        ? L('Refused', 'Refusée')
        : k.reason === 'used up'
          ? `${L('Used up for today, back at', 'Épuisée pour aujourd’hui, retour à')} ${time(k.restUntil)}`
          : `${L('Busy, back at', 'Occupée, retour à')} ${time(k.restUntil)}`
      : L('Working', 'Fonctionne');
  const left = lim['remaining-requests'] && lim['limit-requests'];
  const tokensLeft = lim['remaining-tokens'] && lim['limit-tokens'];
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
          <>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {k.from === 'app' ? L('Set here', 'Définie ici') : L('Set on the server', 'Définie sur le serveur')} ({k.hint})
              {t.lastAt ? `. ${L('Last used', 'Dernière utilisation')} ${ago(t.lastAt, L)}` : ''}
              {t.lastModel ? `, ${t.lastModel}` : ''}.
            </T>
            <V c="flex-row flex-wrap gap-x-space-md gap-y-1">
              <Stat value={num(t.requests)} label={L('requests today', 'requêtes aujourd’hui')} />
              <Stat value={num(t.tokens)} label={L('tokens today', 'jetons aujourd’hui')} />
              <Stat value={num(t.failures)} label={L('failures today', 'échecs aujourd’hui')} warn={t.failures > 0} />
              {t.avgMs != null && <Stat value={`${(t.avgMs / 1000).toFixed(1)} s`} label={L('average answer', 'réponse moyenne')} />}
            </V>
            {!!left && (
              <V c="gap-1">
                <T c="font-body-sm text-body-sm text-on-surface">
                  {L('Requests left today', 'Requêtes restantes aujourd’hui')}: <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '700' }}>{num(lim['remaining-requests'])}</T> {L('of', 'sur')} {num(lim['limit-requests'])}
                </T>
                <Bar pct={(100 * Number(lim['remaining-requests'])) / Number(lim['limit-requests'])} c="h-1.5 bg-surface-container" fill={Number(lim['remaining-requests']) / Number(lim['limit-requests']) < 0.15 ? 'bg-error' : 'bg-secondary'} />
              </V>
            )}
            {!!tokensLeft && (
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {L('Tokens left this minute', 'Jetons restants cette minute')}: {num(lim['remaining-tokens'])} {L('of', 'sur')} {num(lim['limit-tokens'])}
              </T>
            )}
            {!left && k.provider === 'gemini' && t.requests > 0 && (
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Google does not report what is left; when the day’s allowance runs out it shows here as used up.', 'Google n’indique pas ce qui reste ; quand l’allocation du jour est épuisée, elle s’affiche ici.')}</T>
            )}
            {!!(k.lastError || t.lastError) && (k.resting || t.failures > 0) && (
              <T c="font-body-sm text-body-sm text-error" style={{ lineHeight: 19 }}>
                {L('Last problem', 'Dernier problème')}: {k.lastError || t.lastError}
              </T>
            )}
          </>
        ) : (
          <V c="gap-1">
            <P onPress={() => Linking.openURL(WHERE[k.provider][1]).catch(() => {})} hitSlop={6}>
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {L('Get a free key at', 'Obtenez une clé gratuite sur')} <T c="font-body-sm text-body-sm text-primary-container" style={{ fontWeight: '700' }}>{WHERE[k.provider][0]}</T>
              </T>
            </P>
            <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
              {L(TIPS[k.provider].en, TIPS[k.provider].fr)}
            </T>
          </V>
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

function Stat({ value, label, warn }) {
  return (
    <V c="flex-row items-baseline gap-1">
      <T c={`font-label-lg text-label-lg ${warn ? 'text-error' : 'text-on-surface'}`} style={{ fontWeight: '800' }}>
        {value}
      </T>
      <T c="font-body-sm text-body-sm text-on-surface-variant">{label}</T>
    </V>
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
        if (r.test && !r.test.ok) {
          setSheet(null);
          setValue('');
          showToast(`${L('Saved. The test could not finish', 'Enregistrée. Le test n’a pas pu finir')}: ${r.test.error}`);
          return;
        }
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
                'The AI spreads its work over every key that works (Groq first for speed, Gemini first for photos and documents). If a key is slow, another is asked at the same time and the first answer is used. A key that is used up for the day or refused rests while the others answer. The counts below are for today and start again at midnight (UTC).',
                'L’IA répartit son travail sur toutes les clés qui fonctionnent (Groq d’abord pour la vitesse, Gemini d’abord pour les photos et documents). Si une clé est lente, une autre est interrogée en même temps et la première réponse est utilisée. Une clé épuisée pour la journée ou refusée se repose pendant que les autres répondent. Les chiffres ci-dessous sont ceux d’aujourd’hui et repartent à zéro à minuit (UTC).'
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
