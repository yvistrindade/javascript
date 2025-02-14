/**
 * Service worker
 * @author Yvis trindade
 */

// Instalação (cache "armazenamento localstorage")
self.addEventListener('isntall', (event) => {
    event.waitUntil(
        caches.open('static')
        .then ((cache) => {
            cache.add('/')
            cache.add('/index.html')
            cache.add('/style.css')
            cache.add('/app.js')
            cache.add('/img/flex.png')
            cache.add('/img/calcflex.png')
            cache.add('/img/etanol.png')
            cache.add('/img/gasolina.png')
        })
    )
})

// Ativação
self.addEventListener('activate', (event) => {
    console.log("Ativando o service worker...", event)
    return self.clients.claim()
})

// Interceptação (solicitações https servindo em cache quando off-line)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if(response) {
                return response
            } else {
                return fetch(event.request)
            }
        })
    )
})