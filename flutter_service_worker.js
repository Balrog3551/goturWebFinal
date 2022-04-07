'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2f4bfb29479b3ffaa9dd7a8aeb1609d9",
"assets/assets/images/bulgur1.jpeg": "ce3dd5b3fec59c710b4e0f287b2ae082",
"assets/assets/images/bulgur2.jpeg": "3f396c8d0f7855775c931afe88436acf",
"assets/assets/images/bulgur3.jpeg": "acaa241c85cc7cbcb9200b1e8ed5d8a8",
"assets/assets/images/ekmek1.jpeg": "11b4f27d425db1ffa99a1caa99facc1d",
"assets/assets/images/ekmek10.jpeg": "2185e63269ab07b39450fb31d556be52",
"assets/assets/images/ekmek11.jpeg": "18ca89663d14e83be9955010f8d95a6d",
"assets/assets/images/ekmek12.jpeg": "7f44780a4faa62b0069ae5fd3b68a744",
"assets/assets/images/ekmek2.jpeg": "d72e05c7d602f8f1ff902399a5cd9b74",
"assets/assets/images/ekmek3.jpeg": "7d64567aad0dd900f626d2736d1dcdf7",
"assets/assets/images/ekmek4.jpeg": "d5d59a541697c04ed0222d9c86348a4f",
"assets/assets/images/ekmek5.jpeg": "72effe2f837e1940e60b14d2c1cdcfa8",
"assets/assets/images/ekmek6.jpeg": "a5cf75ee1988bf2ebfa4426de9813cd7",
"assets/assets/images/ekmek7.jpeg": "aebeead845b4c4dcc26fae00bff24e06",
"assets/assets/images/ekmek8.jpeg": "3f164c6028af6193dd46a92068dbbd47",
"assets/assets/images/ekmek9.jpeg": "526923383464b286eb92c1208659cca6",
"assets/assets/images/et1.jpeg": "11f5f202b818d01f22cefe10371d8418",
"assets/assets/images/et2.jpeg": "6cfe887e84f5312738f50024baea2cbe",
"assets/assets/images/et3.jpeg": "583c51502bb053d5eb4711790c24e67d",
"assets/assets/images/ev.png": "ed0858e2cc9b4be3253e8911a4dbe4be",
"assets/assets/images/f%25C4%25B1r%25C4%25B1n.jpeg": "85a190c7d6dac9586dc912f2ca3824a8",
"assets/assets/images/icecek1.jpeg": "83c02e5a5867852e45020c80ac40898a",
"assets/assets/images/icecek2.jpeg": "dc8a14475c1f886856c1fab04835ad09",
"assets/assets/images/icecek3.jpeg": "cd87bb2e300a7ee73171577a9b7bd18f",
"assets/assets/images/icecek4.jpeg": "e961e99bc89b0ea4072067aa9d01e417",
"assets/assets/images/indirim1.jpeg": "3e3eac475c29515f8e2b2d938ddb3291",
"assets/assets/images/indirim2.jpeg": "a211e87f6708869889c036c5c74626c0",
"assets/assets/images/indirim3.jpeg": "73edc849efecaa4c7b41182bd924a2e3",
"assets/assets/images/indirim4.jpeg": "33b0597a1976ade3f7d853d74a7c41ca",
"assets/assets/images/indirim5.jpeg": "8c68b13220f4abba96fd7ae6e1207b89",
"assets/assets/images/indirim7.jpeg": "a67b435a8c99be1d8c37ef009e195aff",
"assets/assets/images/makarna1.jpeg": "ad0aaaf3d81bb573bb9810ffb0f75f5a",
"assets/assets/images/makarna2.jpeg": "7afae6b272c9eff242e1fc228e2b35d3",
"assets/assets/images/makarna3.jpeg": "7a852599a0ea205bafa6b38dc454c73f",
"assets/assets/images/meyve1.jpeg": "160ff6716f16ac61f2c6026c0d325a48",
"assets/assets/images/meyve2.jpeg": "5f68655e17f3c4d8eee2ee50a6a15c0c",
"assets/assets/images/meyve3.jpeg": "9227db87991a15e905d062ce3ca22fe2",
"assets/assets/images/meyve4.jpeg": "ab5cffbb479af17bc5ad65314f029737",
"assets/assets/images/meyve5.jpeg": "76d2c3dcd5c558defd6df30c58ec3230",
"assets/assets/images/meyve6.jpeg": "8d1b410bc572c5c781ca855b2f3d8761",
"assets/assets/images/meyve7.jpeg": "a068300f123bb23b9771498769f8e5e7",
"assets/assets/images/meyve8.jpeg": "401139fe06ea9009bbed3898e38d77ed",
"assets/assets/images/pirin%25C3%25A71.jpeg": "fe53e2b85478768bb3be6ff8e97f716b",
"assets/assets/images/pirin%25C3%25A72.jpeg": "67959e6c4006ceb85a07ca27678ff92c",
"assets/assets/images/pirin%25C3%25A73.jpeg": "1c0c84016a8dfe00b41d4dff36dd5e66",
"assets/assets/images/reklam2.jpeg": "1392a22c84e805e5866b526e256f13e2",
"assets/assets/images/sebze.jpeg": "0af64c949bf9f134314cce6408fb3105",
"assets/assets/images/sebze1.jpeg": "3fe12db321ce046fb35354ea4cdc8402",
"assets/assets/images/sebze2.jpeg": "9a316acedfc1b92ce20b242d3787db67",
"assets/assets/images/sebze3.png": "794026952909f346ca66f1225599f2a5",
"assets/assets/images/sebze4.jpeg": "2164189d1dbdeb0eb7ad1fe1a39652c9",
"assets/assets/images/sebze5.jpeg": "344a8fb5db40bd3fa1435e19b0b210c7",
"assets/assets/images/sebze6.jpeg": "a54b35da698b085100a400b123b1e627",
"assets/assets/images/sebze7.jpeg": "0b28f2f55363ec9fb8b9d536b9825e90",
"assets/assets/images/sebze8.jpeg": "fd68a848a118fb3a8e6c1d52269c22fa",
"assets/assets/images/su.jpeg": "d3bce63433cdc8aad3cf1eba8fa402d8",
"assets/assets/images/su1.jpeg": "dbd1a0b3f47b647afc96c76fd4d86281",
"assets/assets/images/su10.jpeg": "c2bd84a0faad08d87d8976a102a450ec",
"assets/assets/images/su11.jpeg": "617bb52dd8763502710ea31a6fdc8881",
"assets/assets/images/su12.jpeg": "f94c283248eea983ee26d75efd5a2371",
"assets/assets/images/su2.jpeg": "a6dba151bc8ef3a7a35c486c15dca6bc",
"assets/assets/images/su3.jpeg": "3d93c3e956d313ba04c050956fcc0626",
"assets/assets/images/su4.jpeg": "72ece4b5cfee3bee11c301f1b49a03b3",
"assets/assets/images/su5.jpeg": "136f95fc096cd25be2b8125c6e65b883",
"assets/assets/images/su6.jpeg": "5391bf76ffaf3c43e22db398c4902827",
"assets/assets/images/su7.jpeg": "83f8a0b1999e1335591f51d9ba6208f6",
"assets/assets/images/su8.jpeg": "1ae1ca2545c76cd545ca1f21b16f16ea",
"assets/assets/images/su9.jpeg": "e488f39e5c4faf1c71b84f9bdeeb1ba2",
"assets/assets/images/temelgida.jpeg": "2fb2cf0b1825a26e08c671cbf0e4ed1e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "717c4394fb6a92de7a38bf34f44b4e54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b025b276f80e024276bc3ae9f4f65d77",
"/": "b025b276f80e024276bc3ae9f4f65d77",
"main.dart.js": "a5de85818bc053becf25b417d04e901e",
"manifest.json": "1d1ed6d6d3ce34adf07398f45b79360c",
"version.json": "0ca95a73c3cfec75684d9ecad18912f4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
