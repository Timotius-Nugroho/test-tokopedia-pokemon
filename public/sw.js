let chaceData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(chaceData).then((chace) => {
      chace.addAll([
        "/static/js/main.chunk.js",
        "/static/js/vendors~main.chunk.js",
        "/static/js/bundle.js",
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
