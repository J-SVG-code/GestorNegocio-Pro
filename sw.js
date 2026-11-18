const CACHE_NAME = 'gestorpro-v4-cache';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/html5-qrcode',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Fase de Instalación: Guarda en caché los archivos principales y librerías CDN
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Fase de Activación: Limpia cachés antiguas si actualizas la versión de la app
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fase de Intercepción (Fetch): Estrategia Cache-First con respaldo de red
self.addEventListener('fetch', (event) => {
  // Evitar interceptar peticiones a Firebase o APIs externas que requieran internet en vivo
  if (event.request.url.includes('firestore.googleapis.com') || event.request.url.includes('pagead2.googlesyndication.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }).catch(() => {
          // Si falla la red y no está en caché, puedes retornar una página de respaldo offline si lo deseas
        });
      })
  );
});

