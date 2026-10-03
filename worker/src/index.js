// ScienceAid API (Cloudflare Worker + D1).
import { HttpError, json, now } from './lib/http.js';
import * as auth from './routes/auth.js';
import * as me from './routes/me.js';
import * as school from './routes/school.js';
import * as billing from './routes/billing.js';
import * as ai from './routes/ai.js';
import * as admin from './routes/admin.js';
import { paymentsConfigured } from './lib/providers.js';
import { channels, sendNotice } from './lib/messaging.js';
import * as consent from './routes/consent.js';
import * as models from './routes/models.js';
import * as voice from './routes/voice.js';
import { notify } from './lib/notify.js';
import { aiProvider } from './lib/ai.js';

const ID = '([A-Za-z0-9-]{8,64})';
const routes = [
  ['GET', '/v1/health', (req, env) => json({ ok: true, ai: aiProvider(env), messaging: channels(env), payments: paymentsConfigured(env), voices: voice.voiceChoices(env) })],
  ['POST', '/v1/voice', voice.speak],
  ['POST', '/v1/me/consent', consent.requestConsent],
  ['GET', '/consent/([A-Za-z0-9_-]{40,64})', consent.consentPage],
  ['POST', '/consent/([A-Za-z0-9_-]{40,64})', consent.consentDecision],
  ['POST', '/v1/ai/report', ai.report],
  ['GET', '/v1/models/([a-z]{3,20})/link', models.modelLink],
  ['GET', '/v1/models/([a-z]{3,20})\\.glb', models.modelFile],
  ['POST', '/v1/auth/register', auth.register],
  ['POST', '/v1/auth/login', auth.login],
  ['POST', '/v1/auth/refresh', auth.refresh],
  ['POST', '/v1/auth/logout', auth.logout],
  ['POST', '/v1/auth/otp/send', auth.sendVerifyOtp],
  ['POST', '/v1/auth/otp/verify', auth.verifyOtp],
  ['POST', '/v1/auth/password/forgot', auth.forgotPassword],
  ['POST', '/v1/auth/password/reset', auth.resetPassword],
  ['POST', '/v1/auth/password/change', auth.changePassword],
  ['GET', '/v1/me', me.getMe],
  ['PATCH', '/v1/me', me.patchMe],
  ['DELETE', '/v1/me', me.deleteMe],
  ['GET', '/v1/me/progress', me.getProgress],
  ['PUT', '/v1/me/progress', me.putProgress],
  ['GET', '/v1/me/report', me.myReport],
  ['GET', '/v1/me/classes', school.myClasses],
  ['GET', '/v1/me/assignments', school.myAssignments],
  ['GET', '/v1/notifications', me.listNotifications],
  ['POST', '/v1/notifications/read', me.markNotifications],
  ['DELETE', '/v1/notifications', me.clearNotifications],
  ['GET', '/v1/schools', school.searchSchools],
  ['POST', '/v1/schools', school.createSchool],
  ['GET', '/v1/classes', school.listMyClasses],
  ['POST', '/v1/classes', school.createClass],
  ['POST', '/v1/classes/join', school.joinClass],
  ['GET', `/v1/classes/${ID}`, school.classDetail],
  ['POST', `/v1/classes/${ID}/assignments`, school.createAssignment],
  ['POST', `/v1/assignments/${ID}/complete`, school.completeAssignment],
  ['POST', '/v1/parent/link-code', school.createLinkCode],
  ['POST', '/v1/parent/link', school.linkChild],
  ['GET', '/v1/parent/children', school.myChildren],
  ['GET', '/v1/billing/plans', billing.plans],
  ['POST', '/v1/billing/pay', billing.initiatePayment],
  ['GET', '/v1/billing/payments', billing.listPayments],
  ['GET', `/v1/billing/payments/${ID}`, billing.getPayment],
  ['POST', '/v1/billing/fapshi-webhook', billing.fapshiWebhook],
  ['POST', '/v1/billing/redeem', billing.redeemVoucher],
  ['POST', '/v1/billing/licence-request', billing.licenceRequest],
  ['GET', '/v1/ai/quota', ai.aiQuota],
  ['POST', '/v1/ai/ask', ai.ask],
  ['POST', '/v1/ai/mark', ai.mark],
  ['POST', '/v1/ai/explain', ai.explain],
  ['POST', '/v1/admin/vouchers', admin.createVouchers],
  ['GET', '/v1/admin/licence-requests', admin.listLicenceRequests],
].map(([method, path, handler]) => [method, new RegExp(`^${path}$`), handler]);

// Browsers are only allowed from the origins listed in ALLOWED_ORIGINS (the web
// preview during development). The mobile app is not a browser and needs no CORS.
function corsHeaders(request, env) {
  const origin = request.headers.get('origin');
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((o) => o.trim()).filter(Boolean);
  if (!origin || !allowed.includes(origin)) return null;
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-headers': 'authorization, content-type',
    'access-control-allow-methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'access-control-max-age': '600',
    vary: 'Origin',
  };
}

async function handle(request, env) {
  const url = new URL(request.url);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204 });
  for (const [method, pattern, handler] of routes) {
    const match = url.pathname.match(pattern);
    if (match && method === request.method) return handler(request, env, ...match.slice(1));
  }
  return json({ error: 'Not found.', code: 'not_found' }, 404);
}

// Daily at 17:00 UTC (18:00 in Cameroon).
async function scheduled(env) {
  const day = 86_400_000;
  // Inactivity alerts to parents who approved the account, on day 3 and day 7 of a break.
  if (channels(env).length) {
    const { results } = await env.DB.prepare(
      `SELECT u.id, u.name, u.parent_phone, u.parent_report_lang, p.last_active FROM users u JOIN progress p ON p.user_id = u.id
       WHERE u.role = 'student' AND u.deleted_at IS NULL AND u.inactivity_alert = 1 AND u.parent_phone IS NOT NULL
         AND u.consent_status IN ('granted', 'not_needed') AND p.last_active IS NOT NULL`
    ).all();
    for (const s of results) {
      const idle = Math.floor((now() - s.last_active) / day);
      if (idle !== 3 && idle !== 7) continue;
      const fr = s.parent_report_lang === 'fr';
      const sent = await sendNotice(env, s.parent_phone, {
        templateEnv: 'WHATSAPP_ALERT_TEMPLATE',
        params: [s.name, String(idle)],
        lang: s.parent_report_lang,
        text: fr
          ? `ScienceAid : ${s.name} n'a pas révisé depuis ${idle} jours. Une courte séance aujourd'hui aide à rester prêt pour l'examen.`
          : `ScienceAid: ${s.name} has not revised for ${idle} days. A short session today keeps exam preparation on track.`,
      }).catch(() => null);
      if (!sent) console.error('inactivity_alert_failed');
    }
  }
  // Weekly report reminders on Fridays.
  if (new Date().getUTCDay() === 5) {
    const { results } = await env.DB.prepare(
      "SELECT id FROM users WHERE role = 'student' AND deleted_at IS NULL AND parent_report_freq = 'weekly' AND parent_phone IS NOT NULL"
    ).all();
    for (const s of results) {
      await notify(env, s.id, 'report', 'Weekly report ready', 'Your weekly progress report is ready to share with your parent.');
    }
    const { results: links } = await env.DB.prepare('SELECT parent_id, student_id FROM parent_links').all();
    for (const l of links) {
      await notify(env, l.parent_id, 'report', 'Weekly report ready', 'A new weekly progress report is available for your child.', { studentId: l.student_id });
    }
  }
}

export default {
  async fetch(request, env) {
    let response;
    try {
      response = await handle(request, env);
    } catch (err) {
      if (err instanceof HttpError) response = json({ error: err.message, code: err.code }, err.status);
      else {
        console.error('unhandled', err?.stack || err);
        response = json({ error: 'Something went wrong. Please try again.', code: 'server_error' }, 500);
      }
    }
    const cors = corsHeaders(request, env);
    if (!cors) return response;
    const headers = new Headers(response.headers);
    for (const [k, v] of Object.entries(cors)) headers.set(k, v);
    return new Response(response.body, { status: response.status, headers });
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(scheduled(env));
  },
};
