// Outgoing messages to phones: login codes, parent consent requests and alerts.
//
// Channels are tried in order and the first one configured and working is used:
//   1. WhatsApp Cloud API (approved templates; cheapest for codes in Cameroon)
//   2. Orange SMS API (Orange Cameroon, reaches all networks)
//   3. Africa's Talking SMS
//   4. Twilio SMS
// Nothing pretends to work: with no channel configured the caller gets a clear
// "not configured" error, and /v1/health lists which channels are live.
import { HttpError } from './http.js';

const intl = (phone) => `+${String(phone).replace(/\D/g, '')}`;

// ---------- configuration ----------
const wa = (env) => Boolean(env.WHATSAPP_TOKEN && env.WHATSAPP_PHONE_ID);
const orange = (env) => Boolean(env.ORANGE_CLIENT_ID && env.ORANGE_CLIENT_SECRET && env.ORANGE_SENDER);
const at = (env) => Boolean(env.AT_USERNAME && env.AT_API_KEY);
const twilio = (env) => Boolean(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN && env.TWILIO_FROM);

export const smsConfigured = (env) => orange(env) || at(env) || twilio(env);
export const messagingConfigured = (env) => wa(env) || smsConfigured(env);
export const channels = (env) => [wa(env) && 'whatsapp', orange(env) && 'orange_sms', at(env) && 'africastalking_sms', twilio(env) && 'twilio_sms'].filter(Boolean);

// ---------- WhatsApp Cloud API ----------
async function waSend(env, to, template, lang, components) {
  const res = await fetch(`https://graph.facebook.com/${env.WHATSAPP_API_VERSION || 'v21.0'}/${env.WHATSAPP_PHONE_ID}/messages`, {
    method: 'POST',
    headers: { authorization: `Bearer ${env.WHATSAPP_TOKEN}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: intl(to).slice(1),
      type: 'template',
      template: { name: template, language: { code: lang === 'fr' ? 'fr' : env.WHATSAPP_LANG || 'en' }, components },
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error('whatsapp_failed', res.status, body.slice(0, 200));
    throw new Error(`whatsapp_${res.status}`);
  }
}

const textParams = (values) => values.map((text) => ({ type: 'text', text: String(text).slice(0, 1000) }));

// ---------- SMS providers ----------
let orangeToken = { value: null, until: 0 };
async function orangeSend(env, to, text) {
  if (!orangeToken.value || Date.now() > orangeToken.until) {
    const r = await fetch('https://api.orange.com/oauth/v3/token', {
      method: 'POST',
      headers: {
        authorization: 'Basic ' + btoa(`${env.ORANGE_CLIENT_ID}:${env.ORANGE_CLIENT_SECRET}`),
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      body: 'grant_type=client_credentials',
    });
    if (!r.ok) throw new Error(`orange_token_${r.status}`);
    const t = await r.json();
    orangeToken = { value: t.access_token, until: Date.now() + (Number(t.expires_in) - 120) * 1000 };
  }
  const sender = intl(env.ORANGE_SENDER);
  const res = await fetch(`https://api.orange.com/smsmessaging/v1/outbound/${encodeURIComponent(`tel:${sender}`)}/requests`, {
    method: 'POST',
    headers: { authorization: `Bearer ${orangeToken.value}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      outboundSMSMessageRequest: {
        address: `tel:${intl(to)}`,
        senderAddress: `tel:${sender}`,
        ...(env.ORANGE_SENDER_NAME ? { senderName: env.ORANGE_SENDER_NAME.slice(0, 11) } : {}),
        outboundSMSTextMessage: { message: text },
      },
    }),
  });
  if (!res.ok) {
    if (res.status === 401) orangeToken = { value: null, until: 0 };
    throw new Error(`orange_${res.status}`);
  }
}

async function atSend(env, to, text) {
  const host = env.AT_USERNAME === 'sandbox' ? 'api.sandbox.africastalking.com' : 'api.africastalking.com';
  const res = await fetch(`https://${host}/version1/messaging`, {
    method: 'POST',
    headers: { apiKey: env.AT_API_KEY, accept: 'application/json', 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ username: env.AT_USERNAME, to: intl(to), message: text, ...(env.AT_SENDER_ID ? { from: env.AT_SENDER_ID } : {}) }),
  });
  if (!res.ok) throw new Error(`africastalking_${res.status}`);
  const data = await res.json().catch(() => ({}));
  const r = data?.SMSMessageData?.Recipients?.[0];
  // 100 processed, 101 sent, 102 queued
  if (!r || ![100, 101, 102].includes(Number(r.statusCode))) throw new Error(`africastalking_status_${r?.statusCode ?? 'none'}`);
}

async function twilioSend(env, to, text) {
  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`, {
    method: 'POST',
    headers: {
      authorization: 'Basic ' + btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`),
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ To: intl(to), From: env.TWILIO_FROM, Body: text }),
  });
  if (!res.ok) throw new Error(`twilio_${res.status}`);
}

async function sendSmsText(env, to, text) {
  const providers = [orange(env) && orangeSend, at(env) && atSend, twilio(env) && twilioSend].filter(Boolean);
  for (const p of providers) {
    try {
      await p(env, to, text);
      return true;
    } catch (e) {
      console.error('sms_provider_failed', e.message);
    }
  }
  return false;
}

// ---------- public API ----------

// A 6 digit login or reset code. Returns the channel used.
export async function sendCode(env, phone, code, lang = 'en') {
  if (!messagingConfigured(env)) throw new HttpError(503, 'Code delivery is not set up yet. Please try again later.', 'messaging_unavailable');
  if (wa(env)) {
    try {
      // Authentication template: the code goes in the body and in the copy-code button.
      await waSend(env, phone, env.WHATSAPP_CODE_TEMPLATE || 'login_code', lang, [
        { type: 'body', parameters: textParams([code]) },
        { type: 'button', sub_type: 'url', index: '0', parameters: textParams([code]) },
      ]);
      return 'whatsapp';
    } catch {
      // fall through to SMS
    }
  }
  const text =
    lang === 'fr'
      ? `BioSpatial VR : votre code est ${code}. Il expire dans 10 minutes. Ne le partagez avec personne.`
      : `BioSpatial VR: your code is ${code}. It expires in 10 minutes. Do not share it with anyone.`;
  if (await sendSmsText(env, phone, text)) return 'sms';
  throw new HttpError(502, 'We could not send the code. Please try again in a minute.', 'messaging_failed');
}

// A message that has an approved WhatsApp utility template and a plain SMS form.
// template: env key holding the template name; params: ordered body values.
export async function sendNotice(env, phone, { templateEnv, params = [], text, lang = 'en' }) {
  if (!messagingConfigured(env)) return null;
  const template = env[templateEnv];
  if (wa(env) && template) {
    try {
      await waSend(env, phone, template, lang, [{ type: 'body', parameters: textParams(params) }]);
      return 'whatsapp';
    } catch {
      // fall through to SMS
    }
  }
  return (await sendSmsText(env, phone, text)) ? 'sms' : null;
}
