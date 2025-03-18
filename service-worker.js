
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("InfoPets")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/script.js",
         ,
        ]),
      ),
  );
});
const cacheName = 'InfoPets';

self.addEventListener('fetch', (event) => {
  // Check if this is a navigation request
  if (event.request.mode === 'navigate') {
    // Open the cache
    event.respondWith(caches.open(cacheName).then(async (cache) => {
      // Go to the network first
      try {
        const fetchedResponse = await fetch(event.request.url);
        cache.put(event.request, fetchedResponse.clone());
        return fetchedResponse;
      } catch {
        return await cache.match(event.request.url);
      }
    }));
  } else {
    return;
  }
});