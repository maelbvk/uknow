// Production service worker is generated after next build with exact asset hashes.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('message',event=>{if(event.data?.type==='CHECK_OFFLINE')event.source?.postMessage({type:'OFFLINE_ERROR'});});
