const attendanceApp = "attendance-app-v1"
const assets = [
  "/",
  "login-mobile.html",
  "style.css",
  "app.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(attendanceApp).then(cache => {
      cache.addAll(assets)
    })
  )
});
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })