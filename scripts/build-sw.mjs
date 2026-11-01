import { readdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}
const files = (await walk("out")).filter(
  (p) => !p.endsWith("/sw.js") && !p.endsWith(".map"),
);
const digest = createHash("sha256");
for (const f of files) digest.update(await readFile(f));
const name = "uknow-" + digest.digest("hex").slice(0, 16);
const assets = files.map((f) => "/" + f.slice(4));
assets.push("/");
const script = `const CACHE=${JSON.stringify(name)};const ASSETS=${JSON.stringify(assets)};
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(ASSETS);await self.skipWaiting();})());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('uknow-')&&key!==CACHE)await caches.delete(key);await self.clients.claim();for(const client of await self.clients.matchAll())client.postMessage({type:'OFFLINE_READY'});})());});
self.addEventListener('message',event=>{if(event.data?.type==='CHECK_OFFLINE')event.waitUntil((async()=>{const cache=await caches.open(CACHE);const complete=(await Promise.all(ASSETS.map(a=>cache.match(a)))).every(Boolean);event.source?.postMessage({type:complete?'OFFLINE_READY':'OFFLINE_ERROR'});})());});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(url.origin!==self.location.origin||event.request.method!=='GET')return;event.respondWith((async()=>{const cache=await caches.open(CACHE);const hit=await cache.match(event.request,{ignoreSearch:true});if(hit)return hit;try{return await fetch(event.request);}catch{return new Response('Cette ressource n’est pas disponible hors ligne. Revenez à la bibliothèque.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});}})());});
`;
await writeFile("out/sw.js", script);
console.log(`Offline cache: ${assets.length} resources, ${name}`);
