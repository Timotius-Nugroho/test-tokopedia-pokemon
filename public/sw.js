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
        "/static/js/2.69b15f08.chunk.js",
        "/static/js/main.e0d8495f.chunk.js",
        "/favicon.ico",
        "/manifest.json",
        "/icon.png",
        "/pokeBanner.jpeg",
        "/samplePoke.png",
        "/index.html",
        "/logo192.png",
        "/logo512.png",
        "/",
        "/users",
        "/detail",
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
