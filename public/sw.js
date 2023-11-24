const staticCacheName = "site-static-v3";
const dynamicCacheName = "site-dynamic-v3";
const assets = [
  "/",
  "/index.html",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
  "/static/js/bundle.js",
  "https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins&family=Roboto&display=swap",
  "/header_logo.png",
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
  "https://fonts.gstatic.com/s/materialsymbolsrounded/v146/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190Fjzag.woff2",
  "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/logo256.png",
  "/logo384.png",
  "/logo512.png",
];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0].then(limitCacheSize(name, size)));
      }
    });
  });
};

//install service worker
this.addEventListener("install", (evt) => {
  //   console.log("Service worker has been installed");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("Caching shell assets");
      cache.addAll(assets);
    })
  );
});

//activate service worker
this.addEventListener("activate", (evt) => {
  //   console.log("Service worker has been activated");
  evt.waitUntil(
    caches.keys().then((keys) => {
      //   console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//fetch event
this.addEventListener("fetch", (evt) => {
  //   console.log("Fetch event", evt);
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(evt.request).then((fetchRes) => {
          return caches.open(dynamicCacheName).then((cache) => {
            cache.put(evt.request.url, fetchRes.clone());
            // limitCacheSize(dynamicCacheName, 1000);
            return fetchRes;
          });
        })
      );
    })
    //   .catch(() => caches.match("Fallback.html"))
  );
});
