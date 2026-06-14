/* AI For Ghana — Service Worker (offline support) */
const CACHE = 'aig-v2';
const CORE = [
  '/', '/learning-center', '/quiz', '/certificate',
  '/slide-to-video', '/teleprompter',
  '/quizzes.js', '/manifest.webmanifest',
  '/icon-192.png', '/icon-512.png'
];
/* Files that change often — always try the network first */
const NETWORK_FIRST = /\/(resources\.js|quizzes\.js|prompts\.js)(\?|$)/;

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(CORE.map(u => c.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Pages + data files: network-first, fall back to cache
  if (req.mode === 'navigate' || NETWORK_FIRST.test(req.url)) {
    e.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const c = await caches.open(CACHE);
        c.put(req, fresh.clone());
        return fresh;
      } catch (err) {
        return (await caches.match(req)) ||
               (req.mode === 'navigate' ? (await caches.match('/learning-center')) || (await caches.match('/')) : Response.error());
      }
    })());
    return;
  }

  // Everything else: cache-first, then network (and cache the result)
  e.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const fresh = await fetch(req);
      if (fresh && (fresh.ok || fresh.type === 'opaque')) {
        const c = await caches.open(CACHE);
        c.put(req, fresh.clone());
      }
      return fresh;
    } catch (err) {
      return cached || Response.error();
    }
  })());
});
