'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eacdd99e14b00a2b5dbee4c715d21452",
"assets/AssetManifest.bin.json": "c3890a72b2fb3ab0b3301e64e70270c8",
"assets/AssetManifest.json": "13fd3d6ce52b406c3587e2e0b060cfbc",
"assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"assets/assets/bg/apartment_bg.jpg": "7dfedafd0cb395c3fb6480242ce05db9",
"assets/assets/bg/login.jpg": "ab05700b34a8e45d2910fb16d02e9946",
"assets/assets/bg/map.jpg": "1a239302dd0313db46a9d95c8f1c3bfb",
"assets/assets/bg/site.png": "d8e51e99a35f88c1ece62bcaf6339d0e",
"assets/assets/images/134.jpeg": "078fa3bfe704401e92f5c02006718081",
"assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"assets/assets/images/2071.jpg": "5f7b648f6b496e811acd6271a9e847ad",
"assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"assets/assets/images/7.png": "5d4465fffaa99f6a78024cc2d3c4759d",
"assets/assets/images/8.png": "9242bf59ae50ca21aec5aa123bea1632",
"assets/assets/images/home-satisfy.png": "3ad520aaec949e1d016807618f3ef051",
"assets/assets/images/home_banner_1.jpg": "a8e6579ca95d242596d68311ccf79a6a",
"assets/assets/images/home_banner_1.png": "32a571584bb3ea01f740a9d6836ad366",
"assets/assets/images/logo.png": "3c90f5d0aecbaf31ccd22c7fb82f8708",
"assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
"assets/assets/images/Receipt_324089.pdf": "99314c0a50f95fc550279cbb938739cf",
"assets/assets/images/Receipt_324090.pdf": "4efc9b37c7c70a8e2d7976c5007bf410",
"assets/assets/images/Receipt_R50002_202503.pdf": "2d6628197978ffd716064165473e9404",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/nodatafound.png": "248ef50c0361053ebe7269460031a4dc",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "1ee00d31df7d0b30bfafc1cf4922abf8",
"assets/fonts/MaterialIcons-Regular.otf": "66d9b59c7cab6510e00f25671636facf",
"assets/NOTICES": "2f3cd752588515d7c2f8bdfc26dee2c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"Brick-Home/.git/config": "c601caf24d66742782de13cc08efd3de",
"Brick-Home/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Brick-Home/.git/HEAD": "da435dbf5226711553bbde13767b256c",
"Brick-Home/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Brick-Home/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Brick-Home/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Brick-Home/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Brick-Home/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Brick-Home/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"Brick-Home/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Brick-Home/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Brick-Home/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Brick-Home/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Brick-Home/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Brick-Home/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Brick-Home/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"Brick-Home/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Brick-Home/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ed86bffc2d5584c7713cec0f3809204c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "269ced081fbfb5aed2d0d2f407371355",
"/": "269ced081fbfb5aed2d0d2f407371355",
"logo.png": "3c90f5d0aecbaf31ccd22c7fb82f8708",
"main.dart.js": "ed3c2a32cc8019e01d97e225a9253fcb",
"manifest.json": "44249681fe36f400cc94348e2423bc69",
"version.json": "2b04f4dd17f41ab45ea8ed44bfea692a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
