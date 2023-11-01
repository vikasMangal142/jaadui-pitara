let cacheData = "appV1";
this.addEventListener("install", (event) =>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/index.html',
                '/',
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
                '/static/js/bundle.js',
            ])
        })
    )
})

this.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp)
            {
                return resp
            }
        })
    )
})