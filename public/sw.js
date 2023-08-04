// // service-worker.js
// const VERSION = "v1";
// const CACHE_NAME = `react-tunes-${VERSION}`;
// const urlsToCache = [
//   "/",
//   "/index.html",
//   "/public/index.html"
//   // Add other URLs or assets you want to cache
//   // ,
//   // "/index.tsx",
//   // "/index.scss",
//   // "/App.tsx",
//   // "/logo.svg",
// ];

// self.addEventListener("install", (event) => {
//     event.waitUntil(
//       caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
//     );
//   });
  
//   self.addEventListener("activate", (event) => {
//       event.waitUntil(
//         (async () => {
//           const names = await caches.keys();
//           await Promise.all(
//             names.map((name) => {
//               if (name !== CACHE_NAME) {
//                 return caches.delete(name);
//               }
//             })
//           );
//           await clients.claim();
//         })()
//       );
//     });
  
//     self.addEventListener("fetch", (event) => {
//       event.respondWith(
//         caches
//           .match(event.request)
//           .then((response) => response || fetch(event.request))
//       );
//     });
  