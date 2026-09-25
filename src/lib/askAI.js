/**
 * Calls our proxy server (see /server), never Anthropic directly. The
 * proxy holds the real API key, checks the class passcode if one is
 * configured, and rate-limits per device — see server/index.js.
 */
export async function askAI({ proxyUrl, passcode, question, history = [] }) {
  if (!navigator.onLine) {
    throw new Error('AI Mode needs an internet connection — you appear to be offline.')
  }

  const endpoint = `${proxyUrl.replace(/\/$/, '')}/api/ask`

  let response
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(passcode ? { 'x-app-passcode': passcode } : {})
      },
      body: JSON.stringify({
        question,
        history: history.map((h) => ({ role: h.role, content: h.content }))
      })
    })
  } catch {
    throw new Error(
      `Could not reach the AI server at ${endpoint}. Check that it's running and the proxy URL in settings is correct.`
    )
  }

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(data.error || 'Incorrect class passcode. Check AI Mode settings.')
    }
    if (response.status === 429) {
      throw new Error(data.error || 'Too many questions right now — try again in a bit.')
    }
    throw new Error(data.error || `AI server error (${response.status}).`)
  }

  return data.text || '(No response text returned.)'
}
