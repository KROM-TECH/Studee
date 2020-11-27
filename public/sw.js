const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';

const asset = [
    '/']
 
self.addEventListener('install', (evt) => {
    // console.log('service worker has been installed' )
  
    // console.log(evt);
    evt.waitUntil(
      caches.open(staticCacheName).then(cache => {
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
              limitCacheSize(dynamicCacheName, 15);
              return fetchRes;
            })
          });
        }).catch(() => {
          // if (evt.request.url.indexOf('.html') > -1) {
          //   return caches.match('/pages/fallback.html');
          // }
        })
      );
    }
  });