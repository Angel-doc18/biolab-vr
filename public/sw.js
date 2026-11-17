// Klass8 web app service worker. It makes the app installable on a phone's home
// screen and opens it fast:
// - the page itself always comes from the network first, so a new version shows
//   at once; without a connection, the last copy opens instead;
// - the app's code and pictures (their names change with every version) are kept
//   after the first visit, and older copies of the code are dropped;
// - the API (/v1/) and the voice are never cached: they are always live.
const CACHE = 'klass8-app-v1';
const PAGE = '/app/';
const CODE = /^\/_expo\/static\/js\/web\/index-[a-f0-9]+\.js$/;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) if (key !== CACHE) await caches.delete(key);
      await self.clients.claim();
    })()
  );
});

async function keep(request, response) {
  const cache = await caches.open(CACHE);
  const path = new URL(request.url).pathname;
  // Only the newest copy of the app's code is kept (each is several MB).
  if (CODE.test(path)) {
    for (const old of await cache.keys()) {
      const p = new URL(old.url).pathname;
      if (CODE.test(p) && p !== path) await cache.delete(old);
    }
  }
  await cache.put(request, response);
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/v1/') || url.pathname.startsWith('/voice/') || url.pathname.startsWith('/download')) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          if (response.ok) await keep(new Request(PAGE), response.clone());
          return response;
        } catch {
          return (await caches.match(PAGE)) || Response.error();
        }
      })()
    );
    return;
  }

  if (url.pathname.startsWith('/_expo/static/') || url.pathname.startsWith('/assets/') || url.pathname.startsWith('/pwa/')) {
    event.respondWith(
      (async () => {
        const hit = await caches.match(request);
        if (hit) return hit;
        const response = await fetch(request);
        if (response.ok) await keep(request, response.clone());
        return response;
      })()
    );
  }
});
