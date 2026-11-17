const CACHE_NAME = 'gestor-pro-v4-cache-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/html5-qrcode',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Evento de Instalación: Guarda los recursos esenciales en la caché local del navegador
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 Gestor Pro: Caché abierta con éxito.');
      return cache.addAll(ASSETS_TO_CACHE);
    }).catch(err => {
      console.error('❌ Error al precargar archivos en el Service Worker:', err);
    })
  );
  self.skipWaiting();
});

// Evento de Activación: Limpia cachés antiguas si se actualiza la versión de la app
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('🧹 Gestor Pro: Eliminando caché obsoleta:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clientsClaim();
});

// Evento Fetch (Estrategia Cache-First con fallback a Red): Garantiza funcionamiento 100% offline
self.addEventListener('fetch', (event) => {
  // Evitar interceptar solicitudes a APIs externas complejas como Firebase o AdMob
  if (event.request.url.includes('firestore.googleapis.com') || event.request.url.includes('pagead2.googlesyndication.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Devuelve el recurso guardado localmente y actualiza en segundo plano si hay red
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {
          // Silenciar error si no hay red en segundo plano
        });
        return cachedResponse;
      }

      // Si no está en caché, lo busca en la red
      return fetch(event.request).then((networkResponse) => {
        return networkResponse;
      }).catch(() => {
        // Fallback genérico en caso de fallo total sin conexión
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
