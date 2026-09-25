import { useCallback, useEffect, useState } from 'react'

const URL_STORAGE = 'biolab-vr:ai-proxy-url'
const PASSCODE_STORAGE = 'biolab-vr:ai-passcode'

// Falls back to a relative /api path, which works when the frontend is
// served from the same origin as the proxy (e.g. behind one reverse
// proxy, or during `npm run dev` with the Vite dev-server proxy in
// vite.config.js). Override at build time with VITE_AI_PROXY_URL if the
// server is deployed on a different domain.
const BUILD_DEFAULT = import.meta.env.VITE_AI_PROXY_URL || ''

/**
 * The real Anthropic API key never lives in the browser anymore — it
 * stays on the server (see /server). This hook only stores where that
 * server is (usually fine at the default) and, if the teacher set one,
 * the class passcode.
 */
export function useAIProxy() {
  const [proxyUrl, setProxyUrlState] = useState(BUILD_DEFAULT)
  const [passcode, setPasscodeState] = useState('')

  useEffect(() => {
    try {
      setProxyUrlState(localStorage.getItem(URL_STORAGE) || BUILD_DEFAULT)
      setPasscodeState(localStorage.getItem(PASSCODE_STORAGE) || '')
    } catch {}
  }, [])

  const setProxyUrl = useCallback((value) => {
    setProxyUrlState(value)
    try {
      localStorage.setItem(URL_STORAGE, value)
    } catch {}
  }, [])

  const setPasscode = useCallback((value) => {
    setPasscodeState(value)
    try {
      localStorage.setItem(PASSCODE_STORAGE, value)
    } catch {}
  }, [])

  return { proxyUrl, setProxyUrl, passcode, setPasscode, buildDefault: BUILD_DEFAULT }
}
