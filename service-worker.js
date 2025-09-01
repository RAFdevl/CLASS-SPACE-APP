// service-worker.js
self.addEventListener("install", e => {
  console.log("Service Worker Installed");
});

self.addEventListener("push", e => {
  const data = e.data?.json() || {};
  e.waitUntil(
    self.registration.showNotification(data.title || "Class Update", {
      body: data.body || "Ada informasi baru 🚀",
      icon: "/logo.png"
    })
  );
});
