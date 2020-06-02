
// workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);
workbox.precaching.precacheAndRoute(['/'])
workbox.precaching.precacheAndRoute(['http://localhost:5000/giftCards'])
workbox.precaching.precacheAndRoute(['http://localhost:5000/users'])
// app-shell
workbox.routing.registerRoute("/", workbox.strategies.networkFirst());
workbox.routing.registerRoute("/giftCards", workbox.strategies.networkFirst());
workbox.routing.registerRoute("/UsersList", workbox.strategies.networkFirst());

