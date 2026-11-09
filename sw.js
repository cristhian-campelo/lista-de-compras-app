// Troque a versão sempre que mudar fontes, ícones ou a biblioteca
const V = "compras-v3";

// Arquivos guardados na instalação. A biblioteca do Excel (xlsx.full.min.js, ~880 KB)
// NÃO entra aqui: é baixada e guardada só quando o usuário exporta a primeira planilha.
const FILES = ["./", "index.html", "manifest.webmanifest", "fonts/manrope-latin-500-normal.woff2", "fonts/manrope-latin-600-normal.woff2", "fonts/manrope-latin-800-normal.woff2", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;

  // Páginas: abre na hora pelo cache (rápido mesmo com sinal fraco no mercado)
  // e busca a versão nova em segundo plano para a próxima abertura.
  if (r.mode === "navigate") {
    e.respondWith(caches.open(V).then(async c => {
      const hit = await c.match("index.html");
      const net = fetch(r).then(res => { if (res.ok) c.put("index.html", res.clone()); return res; });
      if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
      return net;
    }));
    return;
  }

  // Demais arquivos: cache primeiro; o que vier da rede fica guardado para uso offline.
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(hit => hit || fetch(r).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(V).then(c => c.put(r, copy)); }
    return res;
  })));
});
