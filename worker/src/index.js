// BioSpatial VR — Ask AI proxy on Cloudflare Workers.
// The app never holds the Anthropic key: it posts questions here, and this
// Worker adds the key (a Worker secret), a biology-only system prompt and
// per-device rate limiting before forwarding to the Messages API.

const SYSTEM_PROMPT = `You are a patient, encouraging Biology tutor for a secondary school student preparing for the Cameroon GCE Biology examination (O-Level and A-Level).

Give clear, detailed, exam-relevant explanations:
- Use language a teenage student can follow, but don't oversimplify to the point of being wrong.
- Structure longer answers with short paragraphs or a bulleted list when that helps.
- Where relevant, mention the correct scientific term (in bold with **asterisks**) alongside a plain-language explanation.
- If the question relates to one of the app's units, you can mention it by name so the student knows they can explore it in 3D, but don't force a connection.
- If a question is outside secondary school Biology, politely redirect to biology topics — don't answer unrelated subjects.
- Keep answers focused: enough depth to help with exam prep, without padding.

The app's units are: Cell Ultrastructure; Nutrition & Enzymes; Transport Systems; Gaseous Exchange; Osmoregulation & Excretion; Coordination & Nervous System; Locomotion; Reproduction; Genetics; Ecology & Parasitology.`;

const json = (body, status = 200, extra = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...extra },
  });

function corsHeaders(request, env) {
  const origin = request.headers.get('origin');
  if (!origin) return {}; // native mobile app: no CORS needed
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (!allowed.includes('*') && !allowed.includes(origin)) return {};
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type, x-app-passcode',
    vary: 'origin',
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(request, env);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (url.pathname === '/api/health') return json({ ok: true, configured: Boolean(env.ANTHROPIC_API_KEY) }, 200, cors);
    if (url.pathname !== '/api/ask' || request.method !== 'POST') return json({ error: 'Not found.' }, 404, cors);

    if (!env.ANTHROPIC_API_KEY) {
      return json({ error: 'The AI server is not configured yet (missing API key).' }, 503, cors);
    }
    if (env.APP_PASSCODE && request.headers.get('x-app-passcode') !== env.APP_PASSCODE) {
      return json({ error: 'Incorrect or missing class passcode.' }, 401, cors);
    }

    // CF-Connecting-IP is set by Cloudflare's edge and cannot be spoofed by the client.
    const ip = request.headers.get('cf-connecting-ip') || 'unknown';
    if (env.ASK_LIMITER) {
      const { success } = await env.ASK_LIMITER.limit({ key: ip });
      if (!success) return json({ error: 'Too many questions from this device right now. Try again in a minute.' }, 429, cors);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON body.' }, 400, cors);
    }
    const { question, history } = body || {};
    if (!question || typeof question !== 'string' || question.length > 2000) {
      return json({ error: 'Missing or invalid "question".' }, 400, cors);
    }

    // Keep only well-formed recent turns, then make the list start with a user turn.
    let turns = Array.isArray(history)
      ? history
          .filter((h) => h && (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string' && h.content.length <= 8000)
          .slice(-10)
      : [];
    while (turns.length && turns[0].role !== 'user') turns = turns.slice(1);
    const messages = [...turns, { role: 'user', content: question }];

    try {
      const upstream = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: env.ANTHROPIC_MODEL || 'claude-sonnet-5',
          max_tokens: 2048,
          system: SYSTEM_PROMPT,
          messages,
        }),
        signal: AbortSignal.timeout(60000),
      });

      if (!upstream.ok) {
        console.error('Anthropic API error', upstream.status, await upstream.text().catch(() => ''));
        return json({ error: 'The AI service returned an error. Try again shortly.' }, 502, cors);
      }

      const data = await upstream.json();
      const text = (data.content || [])
        .filter((b) => b.type === 'text')
        .map((b) => b.text)
        .join('\n');
      return json({ text: text || '(No response text returned.)' }, 200, cors);
    } catch (err) {
      console.error('Proxy error', err);
      return json({ error: 'Server could not reach the AI service.' }, 500, cors);
    }
  },
};
