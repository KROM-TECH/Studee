importScripts("/precache-manifest.9502cf4d9eea862b295d616a3d88eef2.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
importScripts('./precache.js') 

const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v2';

const asset = [precache]

self.addEventListener('install', (evt) => {
    // console.log('service worker has been installed' )
  
    // console.log(evt);
    evt.waitUntil(
      caches.open(staticCacheName).then(cache => {
        // console.log('caching stuff');
        cache.addAll(asset)
      }).catch((err)=>{
        console.log(err)
      })
    ); 
  
  })
  
  // cache size limit function
  const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
      cache.keys().then(keys => {
        if (keys.length > size) {
          cache.delete(keys[0]).then(limitCacheSize(name, size));
        }
      });
    });
  };
  
  // activate event
  
  self.addEventListener('activate', (evt) => {
    // console.log('service worker has been activated')
    evt.waitUntil(
      caches.keys().then(keys => {
        //console.log(keys);
        return Promise.all(keys
          .filter(key => key !== staticCacheName && key !== dynamicCacheName)
          .map(key => caches.delete(key))
        );
      })
    );
  
  })
  
  // fetch event
  self.addEventListener('fetch', evt => {
    if (evt.request.url.indexOf('firestore.googleapis.com') === -1) {
      evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
          return cacheRes || fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
              // check cached items size
              limitCacheSize(dynamicCacheName, 100000);
              return fetchRes;
            })
          });
        }).catch(() => {
          if (evt.request.url.indexOf('.html') > -1) {
            return caches.match('/pages/fallback.html');
          }
        })
      );
    }
  });

  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(precache);
  
//Background Sync
const backgroundSync = new workbox.backgroundSync.Plugin('myQueueName', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

// console.log(workbox.strategies)
// console.log(workbox.routing)
// Cache images:
workbox.routing.registerRoute(
 /\.(?:png|gif|jpg|jpeg|svg|js|css)$/,
 new workbox.strategies.CacheFirst({
   cacheName: "all",
   plugins: [
    backgroundSync,
     new workbox.expiration.Plugin({
       maxEntries: 60,
       maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
     })
   ]
 })
);

// Cache Google fonts:
workbox.routing.registerRoute(
 new RegExp("https://(.*)"),
 new workbox.strategies.CacheFirst({
   cacheName: "all",
   plugins: [
     new workbox.expiration.Plugin({
       maxEntries: 30,
       maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
     })
   ]
 })
);