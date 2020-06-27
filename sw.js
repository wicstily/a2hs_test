importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder.typicode.com/users'),
  workbox.strategies.cacheFirst()
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  })
)

workbox.precaching.precacheAndRoute([{"revision":"26a7fc119366a4104fcef9fcdf7ee33c","url":"css/main.css"},{"revision":"cdf3247958d576384ad532f11a2d1bf5","url":"index.html"},{"revision":"18845650d8953b6eff7a1ef6b254e764","url":"js/app.js"},{"revision":"764ee8b4a1ee854a4a11e3de9ea45eae","url":"workbox-1bbb3e0e.js"}]);