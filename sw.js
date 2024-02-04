// Definir el nombre del caché
const CACHE_NAME = 'mi-san-valentin-v2';
// Listar todos los recursos que queremos que se almacenen en caché
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/main.js',
    '/images/foto_final.jpg',
    '/manifest.json',
    '/images/icon-192x192.png', // Añade esta línea
    '/images/icon-512x512.png',  // Y esta línea
    '/images/foto_final.JPG' // Agrega esta línea

  ];
  

// Instalar el service worker y almacenar en caché todos los recursos de la app
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos en caché');
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta las peticiones y devuelve los recursos desde el caché si están disponibles, sino realiza una petición a la red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna el recurso si se encuentra en caché
        if (response) {
          return response;
        }
        // Si el recurso no está en caché, realiza una petición a la red
        return fetch(event.request);
      }
    )
  );
});

// Activar el service worker y limpiar los cachés antiguos
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Borrar los cachés que no se necesitan
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
