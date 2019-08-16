importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/13659d416dc96537cf28.js",
    "revision": "4766f1f146975f7bb0654fab09b55f41"
  },
  {
    "url": "/_nuxt/2446bb64f6a104fc5c10.js",
    "revision": "b9b692ebedf2a73f7c69f7379da6aeb5"
  },
  {
    "url": "/_nuxt/346c9f1c0bca11d06194.js",
    "revision": "5d6618767b6e9932d5fc66de83312326"
  },
  {
    "url": "/_nuxt/3b0b60f031d1d6d159b0.js",
    "revision": "8873c76c2e59d94e7c4c15c1d074f1d0"
  },
  {
    "url": "/_nuxt/581a43dcc6204c191734.js",
    "revision": "b447f1a030ddee2eb72cd305b80405dc"
  },
  {
    "url": "/_nuxt/71e3123410927bfc801a.js",
    "revision": "47fbb8b85233e8cb3c687247a9e4c606"
  },
  {
    "url": "/_nuxt/87ac57985f9e932231e4.js",
    "revision": "2313d687348424ba43d2b57401fdface"
  },
  {
    "url": "/_nuxt/aa6edf3aa962978878b7.js",
    "revision": "3e079320fabe090ef5e089dbfa38642a"
  },
  {
    "url": "/_nuxt/b40e31eaf3e1a4d3d1d4.js",
    "revision": "c465af57de3d36ca3981f4cdf1138b6d"
  },
  {
    "url": "/_nuxt/b4e972b2d11a490381d3.js",
    "revision": "54a08ee7d39cfbbc184594ed0bf0a94a"
  },
  {
    "url": "/_nuxt/cdbdf10b9b2456d283d8.js",
    "revision": "4332b1aad2f23eff17537d84d05cadd7"
  },
  {
    "url": "/_nuxt/d898c48c776ce19a2eb4.js",
    "revision": "cb4ec9a5c7d6196b26e54961a3ba7fcf"
  },
  {
    "url": "/_nuxt/ef161b5c053044865c86.js",
    "revision": "f7d598bab46f594b56819fcac5eb8dac"
  },
  {
    "url": "/_nuxt/f3acb3163de476bd0bc3.js",
    "revision": "7226f1929804456abb7363ec07bdd4ad"
  }
], {
  "cacheId": "Hawkeye",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
