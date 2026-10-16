/*
  Service worker : fait fonctionner le site comme une application
  (lancement hors connexion, notifications de rappel).
  Après une mise à jour du site, change le numéro de VERSION.
*/
var VERSION = "mon-francais-v6";
var NB_UNITES = 30; // unites/u01.js … u30.js
var FICHIERS = ["./", "index.html", "style.css", "app.js", "contenu.js", "regles.js", "illustrations.js", "config.js",
  "manifest.webmanifest", "icones/icone-192.png", "icones/badge-96.png"];
for (var n = 1; n <= NB_UNITES; n++) FICHIERS.push("unites/u" + (n < 10 ? "0" : "") + n + ".js");

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FICHIERS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Réseau d'abord (pour avoir toujours la dernière version), cache si hors connexion.
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(fetch(req).then(function (rep) {
    var copie = rep.clone();
    caches.open(VERSION).then(function (c) { c.put(req, copie); });
    return rep;
  }).catch(function () {
    return caches.match(req).then(function (r) { return r || caches.match("index.html"); });
  }));
});

self.addEventListener("push", function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "Mon français", {
    body: d.body || "C’est l’heure de ton français !",
    icon: "icones/icone-192.png",
    badge: "icones/badge-96.png",
    tag: d.tag || "rappel",
    data: { url: d.url || "./" }
  }));
});

self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  var url = new URL((e.notification.data && e.notification.data.url) || "./", self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (liste) {
    for (var i = 0; i < liste.length; i++) if ("focus" in liste[i]) { liste[i].navigate(url); return liste[i].focus(); }
    return self.clients.openWindow(url);
  }));
});
