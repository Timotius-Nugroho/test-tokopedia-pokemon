let chaceData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(chaceData).then((chace) => {
      chace.addAll([
        "/static/js/main.chunk.js",
        "/static/js/vendors~main.chunk.js",
        "/static/js/bundle.js",
        "/static/css/2.28bb0c3d.chunk.css",
        "/static/css/main.1a1c6baa.chunk.css",
        "/static/js/2.0686aabf.chunk.js",
        "/static/js/main.3a41c041.chunk.js",
        "/favicon.ico",
        "/manifest.json",
        "/icon.png",
        "/pokeBanner.jpeg",
        "/index.html",
        "/logo192.png",
        "/logo512.png",
        "/",
        "/users",
        "/detail",
        "/my-poke",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request)
        .then((res) => {
          if (res) {
            return res;
          }
          let requestUrl = event.request.clone();
          fetch(requestUrl);
        })
        .catch((err) => {
          console.log("ERR" + err);
        })
    );
  }
});
