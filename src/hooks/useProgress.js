import { useCallback, useEffect, useState } from 'react'

const DB_NAME = 'biolab-vr'
const DB_VERSION = 1
const STORE = 'progress'

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'topicId' })
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function getAllRecords() {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly')
    const req = tx.objectStore(STORE).getAll()
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function putRecord(record) {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).put(record)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

/**
 * Tracks per-topic study progress (visited + best quiz score) in
 * IndexedDB, so it survives full offline use and app restarts.
 * Falls back to in-memory only state if IndexedDB is unavailable
 * (e.g. some locked-down school lab browsers) rather than crashing.
 */
export function useProgress() {
  const [records, setRecords] = useState({})
  const [ready, setReady] = useState(false)
  const [persistent, setPersistent] = useState(true)

  useEffect(() => {
    let cancelled = false
    if (!('indexedDB' in window)) {
      setPersistent(false)
      setReady(true)
      return
    }
    getAllRecords()
      .then((rows) => {
        if (cancelled) return
        const byId = Object.fromEntries(rows.map((r) => [r.topicId, r]))
        setRecords(byId)
        setReady(true)
      })
      .catch(() => {
        if (!cancelled) {
          setPersistent(false)
          setReady(true)
        }
      })
    return () => {
      cancelled = true
    }
  }, [])

  const markVisited = useCallback(
    (topicId) => {
      setRecords((prev) => {
        const existing = prev[topicId] || { topicId, visited: false, bestScore: null, attempts: 0 }
        if (existing.visited) return prev
        const next = { ...existing, visited: true }
        if (persistent) putRecord(next).catch(() => {})
        return { ...prev, [topicId]: next }
      })
    },
    [persistent]
  )

  const recordQuizScore = useCallback(
    (topicId, score, total) => {
      setRecords((prev) => {
        const existing = prev[topicId] || { topicId, visited: true, bestScore: null, attempts: 0 }
        const pct = Math.round((score / total) * 100)
        const next = {
          ...existing,
          visited: true,
          attempts: existing.attempts + 1,
          bestScore: existing.bestScore === null ? pct : Math.max(existing.bestScore, pct)
        }
        if (persistent) putRecord(next).catch(() => {})
        return { ...prev, [topicId]: next }
      })
    },
    [persistent]
  )

  return { records, ready, persistent, markVisited, recordQuizScore }
}
