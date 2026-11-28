// The CTO's keys: the five AI keys (Groq x2, Google Gemini x2, Mistral) that the
// tutor switches between when one is used up, and the email senders for the
// password reset codes: Gmail (free, with an app password) and Brevo. Add,
// replace (rotate), test or remove each one. A key
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
  const google = useAdminLoad('/v1/admin/system/google');
  const [gId, setGId] = useState(null); // the Client ID being edited
  const [gBusy, setGBusy] = useState(false);
  const [gError, setGError] = useState(null);
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
  const [gmail, setGmail] = useState(null); // { address, password } being edited
  const [gmailBusy, setGmailBusy] = useState(false);
  const [gmailError, setGmailError] = useState(null);

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
  const saveGoogle = async (id) => {
    setGBusy(true);
    setGError(null);
    try {
      const r = await put('/v1/admin/system/google', { clientId: id.trim() });
      google.setData(() => r);
      setGId(null);
      showToast(id.trim() ? L('Google sign-in is on', 'La connexion Google est activée') : L('Google sign-in is off', 'La connexion Google est désactivée'));
    } catch (e) {
      setGError(e);
    } finally {
      setGBusy(false);
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
  const saveGmail = async () => {
    setGmailBusy(true);
    setGmailError(null);
    try {
      const r = await put('/v1/admin/system/email/gmail', { address: gmail.address.trim(), appPassword: gmail.password.replace(/\s+/g, '') });
      mail.setData(() => r);
      setGmail(null);
      showToast(L('Gmail checked with Google and saved', 'Gmail vérifié avec Google et enregistré'));
    } catch (e) {
      setGmailError(e);
    } finally {
      setGmailBusy(false);
    }
  };
  const removeGmail = async () => {
    setGmailBusy(true);
    setGmailError(null);
    try {
      const r = await put('/v1/admin/system/email/gmail', { address: '' });
      mail.setData(() => r);
      showToast(L('Gmail removed', 'Gmail retiré'));
    } catch (e) {
      setGmailError(e);
    } finally {
      setGmailBusy(false);
    }
  };
  const sendTest = async () => {
    setMailBusy(true);
    setMailError(null);
    try {
      const r = await post('/v1/admin/system/email/test', { to: testTo.trim() });
      showToast(`${L('Test email sent', 'E-mail de test envoyé')}${r.via ? ` (${r.via === 'gmail' ? 'Gmail' : 'Brevo'})` : ''}. ${L('Check the inbox (and spam).', 'Vérifiez la boîte (et les spams).')}`);
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

          <Section title={L('Email for password reset', 'E-mail de réinitialisation')}>
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
                    {m.via === 'gmail'
                      ? `${L('Codes are sent with Gmail from', 'Les codes partent avec Gmail depuis')} ${m.gmail?.address}.${m.brevoReady ? ` ${L('If Gmail fails, Brevo sends them.', 'Si Gmail échoue, Brevo les envoie.')}` : ''}`
                      : m.via === 'brevo'
                        ? `${L('Codes are sent with Brevo from', 'Les codes partent avec Brevo depuis')} ${m.senderEmail}.`
                        : L('Set up Gmail (free) or Brevo below. "Forgot password?" appears on the Log in screen as soon as one works.', 'Configurez Gmail (gratuit) ou Brevo ci-dessous. « Mot de passe oublié ? » apparaît sur l’écran de connexion dès que l’un fonctionne.')}
                  </T>
                  {m.ready && (
                    <V c="gap-space-xs pt-space-xs">
                      <Field label={L('Send a test email to', 'Envoyer un e-mail de test à')} value={testTo} onChangeText={setTestTo} placeholder="name@gmail.com" autoCapitalize="none" keyboardType="email-address" />
                      <Cta variant="soft" icon={null} lead="send" h="h-11" label={L('Send test email', 'Envoyer le test')} loading={mailBusy} onPress={sendTest} />
                    </V>
                  )}
                  {!sender && <ErrorNote error={mailError} />}
                </V>
              )}
            </Card>
            {!!m && (
              <Card>
                <V c="p-space-md gap-space-sm">
                  <V c="flex-row items-center gap-space-sm">
                    <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '700' }}>
                      {L('Gmail (free)', 'Gmail (gratuit)')}
                    </T>
                    <Pill text={m.gmail?.ready ? L('On', 'Activé') : L('Off', 'Désactivé')} tone={m.gmail?.ready ? 'ok' : 'muted'} />
                  </V>
                  {m.gmail?.ready ? (
                    <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                      {`${m.gmail.address}. ${L('App password', 'Mot de passe d’application')} ${m.gmail.from === 'app' ? L('set here', 'défini ici') : L('on the server', 'sur le serveur')} (${m.gmail.hint}). ${L('Emails come from this address; Gmail sends about 500 a day.', 'Les e-mails viennent de cette adresse ; Gmail en envoie environ 500 par jour.')}`}
                    </T>
                  ) : (
                    <V c="gap-1.5">
                      {[
                        [L('1. Use a Gmail account for Klass8, for example klass8.app@gmail.com. The codes come from this address.', '1. Utilisez un compte Gmail pour Klass8, par exemple klass8.app@gmail.com. Les codes viennent de cette adresse.')],
                        [L('2. On that account, turn on 2-Step Verification:', '2. Sur ce compte, activez la validation en deux étapes :'), 'myaccount.google.com/security', 'https://myaccount.google.com/security'],
                        [L('3. Create an app password named Klass8. Google shows 16 letters:', '3. Créez un mot de passe d’application nommé Klass8. Google affiche 16 lettres :'), 'myaccount.google.com/apppasswords', 'https://myaccount.google.com/apppasswords'],
                        [L('4. Enter the address and the 16 letters here. Klass8 checks them with Google before saving. Your normal Gmail password does not work here.', '4. Saisissez ici l’adresse et les 16 lettres. Klass8 les vérifie avec Google avant d’enregistrer. Votre mot de passe Gmail habituel ne marche pas ici.')],
                      ].map(([text, link, url]) => (
                        <T key={text} c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                          {text}
                          {link ? (
                            <T c="font-body-sm text-body-sm text-primary-container" style={{ fontWeight: '700' }} onPress={() => Linking.openURL(url)}>
                              {` ${link}`}
                            </T>
                          ) : null}
                        </T>
                      ))}
                    </V>
                  )}
                  {gmail === null ? (
                    <V c="flex-row flex-wrap gap-space-xs">
                      <Cta variant="soft" icon={null} lead={m.gmail?.set ? 'edit' : 'add'} h="h-10" label={m.gmail?.set ? L('Change', 'Modifier') : L('Set up Gmail', 'Configurer Gmail')} onPress={() => (setGmailError(null), setGmail({ address: m.gmail?.address || '', password: '' }))} />
                      {!!m.gmail?.address && <Cta variant="soft" icon={null} lead="block" h="h-10" label={L('Remove', 'Retirer')} loading={gmailBusy} onPress={removeGmail} />}
                    </V>
                  ) : (
                    <V c="gap-space-xs pt-space-xs">
                      <Field label={L('Gmail address', 'Adresse Gmail')} value={gmail.address} onChangeText={(t) => setGmail((g) => ({ ...g, address: t }))} placeholder="klass8.app@gmail.com" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" />
                      <Field
                        label={L('App password (16 letters)', 'Mot de passe d’application (16 lettres)')}
                        value={gmail.password}
                        onChangeText={(t) => setGmail((g) => ({ ...g, password: t }))}
                        placeholder={m.gmail?.set ? L('Leave empty to keep the saved one', 'Laisser vide pour garder l’actuel') : 'abcd efgh ijkl mnop'}
                        secure
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                      <V c="flex-row gap-space-xs">
                        <V c="flex-1">
                          <Cta variant="dark" icon={null} h="h-11" label={L('Check and save', 'Vérifier et enregistrer')} loading={gmailBusy} onPress={saveGmail} />
                        </V>
                        <V c="flex-1">
                          <Cta variant="soft" icon={null} h="h-11" label={L('Cancel', 'Annuler')} onPress={() => (setGmail(null), setGmailError(null))} />
                        </V>
                      </V>
                    </V>
                  )}
                  <ErrorNote error={gmailError} />
                </V>
              </Card>
            )}
            <Card>
              {!m ? (
                <Loading />
              ) : (
                <V c="p-space-md gap-space-sm">
                  <V c="flex-row items-center gap-space-sm">
                    <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '700' }}>
                      Brevo
                    </T>
                    <Pill text={m.brevoReady ? L('On', 'Activé') : L('Off', 'Désactivé')} tone={m.brevoReady ? 'ok' : 'muted'} />
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
                      <ErrorNote error={mailError} />
                    </V>
                  )}
                </V>
              )}
            </Card>
          </Section>

          <Section title={L('Sign in with Google', 'Connexion avec Google')}>
            <Card>
              {!google.data ? (
                <Loading />
              ) : (
                <V c="p-space-md gap-space-sm">
                  <V c="flex-row items-center gap-space-sm">
                    <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '700' }}>
                      {L('Google Client ID', 'Client ID Google')}
                    </T>
                    <Pill text={google.data.google.clientId ? L('On', 'Activée') : L('Off', 'Désactivée')} tone={google.data.google.clientId ? 'ok' : 'muted'} />
                  </V>
                  <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                    {google.data.google.clientId
                      ? `${google.data.google.clientId.slice(0, 18)}... ${L('People can sign up and log in with Google on the web and in the app.', 'On peut s’inscrire et se connecter avec Google sur le web et dans l’application.')}`
                      : L('Create a "Web application" OAuth client in Google Cloud (APIs & Services, Credentials) with https://klass8.com as an authorised JavaScript origin, then paste its Client ID here. It is public, not a secret.', 'Créez un client OAuth « Application Web » dans Google Cloud (API et services, Identifiants) avec https://klass8.com comme origine JavaScript autorisée, puis collez son Client ID ici. Il est public, ce n’est pas un secret.')}
                  </T>
                  {gId === null ? (
                    <V c="flex-row flex-wrap gap-space-xs">
                      <Cta variant="soft" icon={null} lead={google.data.google.clientId ? 'edit' : 'add'} h="h-10" label={google.data.google.clientId ? L('Change', 'Modifier') : L('Add Client ID', 'Ajouter le Client ID')} onPress={() => setGId(google.data.google.clientId || '')} />
                      {!!google.data.google.clientId && google.data.google.from === 'app' && <Cta variant="soft" icon={null} lead="block" h="h-10" label={L('Turn off', 'Désactiver')} loading={gBusy} onPress={() => saveGoogle('')} />}
                    </V>
                  ) : (
                    <V c="gap-space-xs">
                      <Field label={L('Client ID', 'Client ID')} value={gId} onChangeText={setGId} placeholder="1234567890-abc123.apps.googleusercontent.com" autoCapitalize="none" autoCorrect={false} />
                      <V c="flex-row gap-space-xs">
                        <V c="flex-1">
                          <Cta variant="dark" icon={null} h="h-11" label={L('Save', 'Enregistrer')} loading={gBusy} onPress={() => saveGoogle(gId)} />
                        </V>
                        <V c="flex-1">
                          <Cta variant="soft" icon={null} h="h-11" label={L('Cancel', 'Annuler')} onPress={() => (setGId(null), setGError(null))} />
                        </V>
                      </V>
                    </V>
                  )}
                  <ErrorNote error={gError || google.error} />
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
