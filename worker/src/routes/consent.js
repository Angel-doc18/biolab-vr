// Parental consent for students under 18 (Cameroon Law No. 2024/017).
//
// The student gives their birth month and year. Adults need nothing more. For a
// minor the student names a parent or guardian, who receives a link (by WhatsApp
// or SMS when a channel is configured; the app can also share it on WhatsApp).
// The link opens a page served here that explains what is processed and lets the
// parent approve or decline. Linking a child from a parent account in the app
// also counts as approval (see school.linkChild).
import { HttpError, clientIp, limit, now, ok, readJson } from '../lib/http.js';
import { publicUser, requireUser, isPro } from '../lib/auth.js';
import { int, phone, str } from '../lib/validate.js';
import { randomToken, sha256 } from '../lib/crypto.js';
import { sendNotice } from '../lib/messaging.js';
import { notify } from '../lib/notify.js';

const LINK_TTL = 7 * 86_400_000;

export function ageOn(year, month, at = new Date()) {
  let age = at.getUTCFullYear() - year;
  if (at.getUTCMonth() + 1 < month) age -= 1;
  return age;
}

const base = (request, env) => (env.PUBLIC_API_URL || new URL(request.url).origin).replace(/\/+$/, '');

async function newRequest(request, env, user, guardianName, guardianPhone) {
  const token = randomToken(32);
  const t = now();
  await env.DB.prepare(
    'INSERT INTO consent_requests (token_hash, user_id, guardian_name, guardian_phone, created_at, expires_at) VALUES (?, ?, ?, ?, ?, ?)'
  )
    .bind(await sha256(token), user.id, guardianName, guardianPhone, t, t + LINK_TTL)
    .run();
  return `${base(request, env)}/consent/${token}`;
}

// POST /v1/me/consent  { birthYear, birthMonth, guardianName?, guardianPhone? }
export async function requestConsent(request, env) {
  const user = await requireUser(request, env);
  const b = await readJson(request);
  const year = int(b.birthYear, 'Birth year', { min: new Date().getUTCFullYear() - 80, max: new Date().getUTCFullYear() - 8 });
  const month = int(b.birthMonth, 'Birth month', { min: 1, max: 12 });
  const age = ageOn(year, month);
  const t = now();

  if (user.role !== 'student' || age >= 18) {
    await env.DB.prepare("UPDATE users SET birth_year = ?, birth_month = ?, consent_status = 'not_needed', consent_at = NULL, updated_at = ? WHERE id = ?")
      .bind(year, month, t, user.id)
      .run();
    const fresh = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
    return ok({ status: 'not_needed', user: publicUser(fresh), pro: isPro(fresh) });
  }

  const guardianName = str(b.guardianName, 'Parent or guardian name', { min: 2, max: 80 });
  const guardianPhone = phone(b.guardianPhone, 'Parent or guardian phone');
  if (guardianPhone === user.phone) throw new HttpError(400, 'Enter your parent’s or guardian’s number, not your own.', 'invalid_input');
  await limit(env.OTP_LIMITER, `consent:${user.id}`, 'Please wait a minute before sending another request.');

  const keep = user.consent_status === 'granted' && user.parent_phone === guardianPhone;
  await env.DB.prepare('UPDATE users SET birth_year = ?, birth_month = ?, guardian_name = ?, parent_phone = ?, consent_status = ?, updated_at = ? WHERE id = ?')
    .bind(year, month, guardianName, guardianPhone, keep ? 'granted' : 'pending', t, user.id)
    .run();
  const fresh = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
  if (keep) return ok({ status: 'granted', user: publicUser(fresh), pro: isPro(fresh) });

  const link = await newRequest(request, env, fresh, guardianName, guardianPhone);
  const fr = fresh.lang === 'fr';
  const sentVia = await sendNotice(env, guardianPhone, {
    templateEnv: 'WHATSAPP_CONSENT_TEMPLATE',
    params: [fresh.name, link],
    lang: fresh.lang,
    text: fr
      ? `ScienceAid : ${fresh.name} s’est inscrit(e) pour réviser les sciences du GCE et vous indique comme parent ou tuteur. Lisez et répondez ici : ${link}`
      : `ScienceAid: ${fresh.name} registered to revise GCE sciences and named you as parent or guardian. Please read and reply here: ${link}`,
  }).catch(() => null);
  return ok({ status: 'pending', link, sentVia, user: publicUser(fresh), pro: isPro(fresh) });
}

// ---------- the page the parent opens ----------

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const TEXT = {
  en: {
    title: (n) => `Approve ${n}'s ScienceAid account`,
    intro: (n, where) => `${n}${where} created an account on ScienceAid, a revision app for the GCE Ordinary Level sciences, and gave this number as their parent or guardian. Because ${n} is under 18, the account needs your approval before we store their progress or let them use the tutor.`,
    whatH: 'What we keep',
    what: [
      'Name, phone number and, if given, email address',
      'Class, school and exam year',
      'Study progress: lessons read, quiz and mock scores, practical records',
      'Questions typed to the AI tutor, and answers or photos of written answers sent for marking',
    ],
    whyH: 'Why',
    why: 'To run the app, save progress across phones, mark answers and, if your child turns it on, send you a weekly report.',
    whoH: 'Who processes it',
    who: [
      'Cloudflare hosts the app’s data (servers outside Cameroon).',
      'Groq runs the AI tutor and marking (United States). Only the question or answer is sent, never the name or phone number.',
      'Fapshi handles mobile money payments if a pass is bought.',
    ],
    never: 'We do not sell data and the app shows no advertising.',
    rightsH: 'Your rights',
    rights: (mail) => `You can ask to see, correct or delete your child's data, and withdraw this approval at any time${mail ? ` by writing to ${mail}` : ''}. Deleting the account removes the personal data.`,
    approve: 'I approve',
    decline: 'I do not approve',
    approved: (n) => `Thank you. ${n}'s account is approved.`,
    declined: (n) => `You declined. ${n}'s progress will not be stored on our servers and the tutor stays off.`,
    gone: 'This link has expired or was already used. Ask your child to send a new request from the app.',
    other: 'Version française',
  },
  fr: {
    title: (n) => `Approuver le compte ScienceAid de ${n}`,
    intro: (n, where) => `${n}${where} a créé un compte sur ScienceAid, une application de révision des sciences du GCE Ordinary Level, et a donné ce numéro comme parent ou tuteur. Comme ${n} a moins de 18 ans, le compte doit être approuvé avant que nous enregistrions sa progression ou qu’il ou elle utilise le tuteur.`,
    whatH: 'Ce que nous conservons',
    what: [
      'Nom, numéro de téléphone et, s’il est donné, e-mail',
      'Classe, école et année d’examen',
      'Progression : leçons lues, notes des quiz et examens blancs, travaux pratiques',
      'Questions posées au tuteur IA, et réponses ou photos de réponses envoyées pour correction',
    ],
    whyH: 'Pourquoi',
    why: 'Pour faire fonctionner l’application, garder la progression d’un téléphone à l’autre, corriger les réponses et, si votre enfant l’active, vous envoyer un rapport chaque semaine.',
    whoH: 'Qui traite ces données',
    who: [
      'Cloudflare héberge les données (serveurs hors du Cameroun).',
      'Groq fait fonctionner le tuteur et la correction (États-Unis). Seule la question ou la réponse est envoyée, jamais le nom ni le numéro.',
      'Fapshi traite les paiements mobile money si un pass est acheté.',
    ],
    never: 'Nous ne vendons aucune donnée et l’application n’affiche aucune publicité.',
    rightsH: 'Vos droits',
    rights: (mail) => `Vous pouvez demander à voir, corriger ou supprimer les données de votre enfant, et retirer cette approbation à tout moment${mail ? ` en écrivant à ${mail}` : ''}. La suppression du compte efface les données personnelles.`,
    approve: 'J’approuve',
    decline: 'Je n’approuve pas',
    approved: (n) => `Merci. Le compte de ${n} est approuvé.`,
    declined: (n) => `Vous avez refusé. La progression de ${n} ne sera pas enregistrée sur nos serveurs et le tuteur reste désactivé.`,
    gone: 'Ce lien a expiré ou a déjà été utilisé. Demandez à votre enfant d’envoyer une nouvelle demande depuis l’application.',
    other: 'English version',
  },
};

function page(lang, title, body, status = 200) {
  const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><style>
body{margin:0;background:#f6f9fb;color:#0f1d2b;font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
main{max-width:620px;margin:0 auto;padding:28px 18px 48px}
h1{font-size:24px;line-height:1.25;margin:8px 0 14px}h2{font-size:16px;margin:22px 0 6px}
ul{padding-left:20px;margin:6px 0}li{margin:4px 0}p{margin:8px 0}
.brand{font-weight:700;color:#0369a1}.muted{color:#4d6072;font-size:14px}
form{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}
button{flex:1 1 200px;min-height:50px;border-radius:10px;font:600 16px system-ui,sans-serif;cursor:pointer}
.yes{background:#0369a1;color:#fff;border:0}.no{background:#fff;color:#0f1d2b;border:1px solid #c5d1db}
a{color:#0369a1}
</style></head><body><main><div class="brand">ScienceAid</div>${body}</main></body></html>`;
  return new Response(html, {
    status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'content-security-policy': "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
      'referrer-policy': 'no-referrer',
      'x-content-type-options': 'nosniff',
    },
  });
}

async function load(env, token) {
  const row = await env.DB.prepare('SELECT * FROM consent_requests WHERE token_hash = ?').bind(await sha256(token)).first();
  if (!row || row.decision || row.expires_at < now()) return null;
  const student = await env.DB.prepare('SELECT * FROM users WHERE id = ? AND deleted_at IS NULL').bind(row.user_id).first();
  return student ? { row, student } : null;
}

const pickLang = (url, student) => (url.searchParams.get('lang') === 'fr' || (!url.searchParams.get('lang') && student?.lang === 'fr') ? 'fr' : 'en');

// GET /consent/:token
export async function consentPage(request, env, token) {
  const url = new URL(request.url);
  const found = await load(env, token);
  const lang = pickLang(url, found?.student);
  const t = TEXT[lang];
  if (!found) return page(lang, 'ScienceAid', `<p>${esc(t.gone)}</p>`, 410);
  const { student } = found;
  const first = student.name.split(' ')[0];
  const where = [student.class_name, student.school_name].filter(Boolean).join(', ');
  const body = `<h1>${esc(t.title(student.name))}</h1>
<p>${esc(t.intro(first, where ? ` (${where})` : ''))}</p>
<h2>${esc(t.whatH)}</h2><ul>${t.what.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
<h2>${esc(t.whyH)}</h2><p>${esc(t.why)}</p>
<h2>${esc(t.whoH)}</h2><ul>${t.who.map((x) => `<li>${esc(x)}</li>`).join('')}</ul><p>${esc(t.never)}</p>
<h2>${esc(t.rightsH)}</h2><p>${esc(t.rights(env.SUPPORT_EMAIL))}</p>
<form method="post" action="/consent/${esc(token)}?lang=${lang}">
<button class="yes" name="decision" value="approve" type="submit">${esc(t.approve)}</button>
<button class="no" name="decision" value="decline" type="submit">${esc(t.decline)}</button>
</form>
<p class="muted"><a href="/consent/${esc(token)}?lang=${lang === 'fr' ? 'en' : 'fr'}">${esc(t.other)}</a></p>`;
  return page(lang, t.title(student.name), body);
}

// POST /consent/:token  (form: decision=approve|decline)
export async function consentDecision(request, env, token) {
  await limit(env.AUTH_LIMITER, `consent-page:${clientIp(request)}`, 'Too many attempts. Wait a minute and try again.');
  const url = new URL(request.url);
  const found = await load(env, token);
  const lang = pickLang(url, found?.student);
  const t = TEXT[lang];
  if (!found) return page(lang, 'ScienceAid', `<p>${esc(t.gone)}</p>`, 410);
  const form = await request.formData().catch(() => null);
  const decision = form?.get('decision');
  if (decision !== 'approve' && decision !== 'decline') return page(lang, 'ScienceAid', `<p>${esc(t.gone)}</p>`, 400);
  const { row, student } = found;
  const at = now();
  const approve = decision === 'approve';
  await env.DB.batch([
    env.DB.prepare('UPDATE consent_requests SET decision = ?, decided_at = ?, decided_via = ?, decided_ip_hash = ? WHERE token_hash = ?').bind(
      approve ? 'approved' : 'declined',
      at,
      'link',
      await sha256(`${clientIp(request)}:${env.JWT_SECRET || ''}`),
      row.token_hash
    ),
    env.DB.prepare('UPDATE users SET consent_status = ?, consent_at = ?, updated_at = ? WHERE id = ?').bind(approve ? 'granted' : 'refused', approve ? at : null, at, student.id),
  ]);
  const first = student.name.split(' ')[0];
  await notify(
    env,
    student.id,
    'account',
    approve ? (student.lang === 'fr' ? 'Compte approuvé' : 'Account approved') : student.lang === 'fr' ? 'Demande refusée' : 'Request declined',
    approve
      ? student.lang === 'fr'
        ? 'Votre parent a approuvé votre compte. Votre progression est maintenant enregistrée et le tuteur est disponible.'
        : 'Your parent approved your account. Your progress is now saved and the tutor is available.'
      : student.lang === 'fr'
      ? 'Votre parent n’a pas approuvé le compte. Parlez-en ensemble, puis envoyez une nouvelle demande si besoin.'
      : 'Your parent did not approve the account. Talk it over, then send a new request if needed.'
  ).catch(() => {});
  return page(lang, 'ScienceAid', `<h1>${esc(approve ? t.approved(first) : t.declined(first))}</h1>`);
}
