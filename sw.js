/* EDC LV 2026 Planner — Service Worker
   Strategy:
   - App shell (HTML / JS / icon / manifest): cache-first, network refresh in background.
   - Google Fonts CSS + font files: stale-while-revalidate.
   - Supabase JS SDK from jsdelivr: cache-first (versioned URL, immutable).
   - Supabase REST/Realtime: network-only (live data, must not be cached).
*/

const VERSION = 'edc-lv-2026-v3';
const SHELL_CACHE = `${VERSION}-shell`;
const RUNTIME_CACHE = `${VERSION}-runtime`;

const SHELL_ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/icon.svg',
  '/manifest.webmanifest',
];

const SUPABASE_SDK = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      await cache.addAll(SHELL_ASSETS);
      // Pre-cache the Supabase SDK so the app loads offline
      try {
        const res = await fetch(SUPABASE_SDK, { mode: 'cors' });
        if (res.ok) await cache.put(SUPABASE_SDK, res.clone());
      } catch (_) { /* offline at install time — skip */ }
      self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Drop old versioned caches
      const keys = await caches.keys();
      await Promise.all(
        keys.filter(k => !k.startsWith(VERSION)).map(k => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

function isSupabaseAPI(url) {
  return /\.supabase\.co\//.test(url) || /\.supabase\.io\//.test(url);
}
function isGoogleFonts(url) {
  return /fonts\.(googleapis|gstatic)\.com/.test(url);
}
function isSupabaseSDK(url) {
  return url === SUPABASE_SDK || (/cdn\.jsdelivr\.net.*supabase-js/.test(url));
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = req.url;

  // Never cache Supabase API/realtime — live data only
  if (isSupabaseAPI(url)) {
    return; // let the browser handle it; offline → it'll fail naturally
  }

  // Supabase SDK from CDN — cache-first (versioned URL is immutable)
  if (isSupabaseSDK(url)) {
    event.respondWith(cacheFirst(req, RUNTIME_CACHE));
    return;
  }

  // Google Fonts — stale-while-revalidate
  if (isGoogleFonts(url)) {
    event.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
    return;
  }

  // Same-origin shell + assets — cache-first with background refresh
  if (new URL(url).origin === self.location.origin) {
    event.respondWith(cacheFirst(req, SHELL_CACHE));
    return;
  }
});

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) {
    // Background refresh, ignore failure
    fetch(request).then(res => { if (res.ok) cache.put(request, res.clone()); }).catch(() => {});
    return cached;
  }
  try {
    const res = await fetch(request);
    if (res.ok) cache.put(request, res.clone());
    return res;
  } catch (err) {
    // Final fallback for navigations — serve cached index.html
    if (request.mode === 'navigate') {
      const shell = await caches.match('/index.html');
      if (shell) return shell;
    }
    throw err;
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request).then(res => {
    if (res.ok) cache.put(request, res.clone());
    return res;
  }).catch(() => cached);
  return cached || network;
}

// Allow page to trigger SW update / skipWaiting
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
