'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4be5902e20dbeff95da4bf393ab79db2",
"version.json": "b0a2c87b57f6646cb3a59698fb9fc619",
"index.html": "2b83a86947092ba1e02c3c4f2fb9d3fd",
"/": "2b83a86947092ba1e02c3c4f2fb9d3fd",
"main.dart.js": "0265013968fe9614f070b1e3c518cd97",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6c60ee61c63ef93d69deed5dd2ef0349",
"assets/AssetManifest.json": "5590b970bb08f77f782c434182a729ec",
"assets/NOTICES": "dc055e1443ea8c42270ecc23ace269f6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "7fca0bf73bca1ff14c25d64b8ebb7fb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c7612169532eee5f8f3ec2d94cfc6b00",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "86b36cedc72428a9577e5327aa30508a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4008601a7665102dfa765629812092de",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "688e4c4202045f4a4fd9755a72ab20cb",
"assets/fonts/MaterialIcons-Regular.otf": "f4b2eed42c36660481d2f4c5172a2581",
"assets/assets/images/google_developer.jpeg": "9a200ffdb25b4edb8656baca076b81b3",
"assets/assets/icons/xcode.png": "651833f53ba0e1c76587d4aee018ca5e",
"assets/assets/icons/roadradar.png": "37cfd75ce95dd76e37de257bc365ea5e",
"assets/assets/icons/github.svg": "1aaa94fed687feb4615a364d1125e15c",
"assets/assets/icons/compose.png": "cd3d9adfc439bd16419ea4a771e34176",
"assets/assets/icons/monify.png": "de6ed324dfcdd353c1ccf9f451c54de0",
"assets/assets/icons/flutter.png": "613047849d53f7c441f01e6a93654ee9",
"assets/assets/icons/x.png": "c019bd434e5489eb40e386b60cf045c9",
"assets/assets/icons/github.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/icons/mail.svg": "918f5b210687901f63905b1b77aec467",
"assets/assets/icons/gcp.png": "4cf9956e68dcb4451f8599bf3bb3643d",
"assets/assets/icons/aws.png": "f5b8cc63d6e00ce63fe0e9a13a720d8d",
"assets/assets/icons/vscode.png": "fb0606c0442708d638b88b3c17d0f43f",
"assets/assets/icons/studio.png": "3c2cad22f9c6ea748a2d5dc4ec7abc43",
"assets/assets/icons/inst.svg": "39229cae3f5fe282b71352d8768186b7",
"assets/assets/icons/leetcode.png": "b12e1d4ca253068eba7947f7a7644d36",
"assets/assets/icons/logo1.png": "103545d57bf937ea777be976baf9e3b1",
"assets/assets/icons/springboot.png": "936936c0875e100aafab83b776373330",
"assets/assets/icons/caret.png": "6a18d4cc0ac85afd5bc4659a8c3e4a31",
"assets/assets/icons/profile_pic.jpg": "8e37944c20f8dc7b68fd98c85bd857e8",
"assets/assets/icons/intellij.png": "c1acb2798b4405679aa2fbbbcfeeff9e",
"assets/assets/icons/logo.png": "14ac3c92c5a44201c0cad0d11413c0a9",
"assets/assets/icons/logo2.png": "afb51a59130dc2060defa75d0d5c242d",
"assets/assets/icons/linkedin.png": "fae1a2e121b562d22bc6fcac22f8703d",
"assets/assets/icons/twitter.svg": "e875fbd19800bb8964b21a69a7b21dfe",
"assets/assets/icons/flashchat.png": "547c7d4f8b122a83bd02a04c7ddfd1b8",
"assets/assets/icons/dart.png": "cf221db767f28df91b9dfcaf449adf88",
"assets/assets/icons/mongodb.png": "2c86793dd14baab3578d6fb9820eeafb",
"assets/assets/icons/kotlin.png": "23885beaeb8acd1ca8b3e897d6e78ce1",
"assets/assets/icons/nodejs.png": "836d218f9c24170d07018b313dcb162e",
"assets/assets/animations/mobile.gif": "ba1d8687aeff9888e88d18ab96555900",
"assets/assets/animations/web.gif": "127cf060cf4767b4f8b6284a33e92303",
"assets/assets/animations/backend.gif": "55946a24e891dbb46e7a4558816cac80",
"assets/assets/animations/intro_animation.riv": "a61dfb298b1099ae5160671ef3cf7249",
"assets/assets/animations/button.riv": "98fb3790157b98b6798ae0ed8bdd5fd7",
"assets/assets/animations/experience.gif": "f2cd5a109a00a3221adf7eae1f4576cf",
"assets/assets/animations/grid_animation.riv": "196fd50b78575453100115518a3457dd",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
