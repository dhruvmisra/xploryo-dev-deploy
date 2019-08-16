importScripts('/xploryo-dev-deploy/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/xploryo-dev-deploy/_nuxt/13659d416dc96537cf28.js",
    "revision": "4766f1f146975f7bb0654fab09b55f41"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/2446bb64f6a104fc5c10.js",
    "revision": "b9b692ebedf2a73f7c69f7379da6aeb5"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/3b0b60f031d1d6d159b0.js",
    "revision": "8873c76c2e59d94e7c4c15c1d074f1d0"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/41498a3d942395b3927b.js",
    "revision": "29a293cd04f6c346151192a877053983"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/581a43dcc6204c191734.js",
    "revision": "b447f1a030ddee2eb72cd305b80405dc"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/71e3123410927bfc801a.js",
    "revision": "47fbb8b85233e8cb3c687247a9e4c606"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/87ac57985f9e932231e4.js",
    "revision": "2313d687348424ba43d2b57401fdface"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/aa6edf3aa962978878b7.js",
    "revision": "3e079320fabe090ef5e089dbfa38642a"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/b40e31eaf3e1a4d3d1d4.js",
    "revision": "c465af57de3d36ca3981f4cdf1138b6d"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/cdbdf10b9b2456d283d8.js",
    "revision": "4332b1aad2f23eff17537d84d05cadd7"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/d898c48c776ce19a2eb4.js",
    "revision": "cb4ec9a5c7d6196b26e54961a3ba7fcf"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/dc07ad18be127f28065f.js",
    "revision": "2b90ddf7caa6e40a410ba335c65c8425"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/ef161b5c053044865c86.js",
    "revision": "f7d598bab46f594b56819fcac5eb8dac"
  },
  {
    "url": "/xploryo-dev-deploy/_nuxt/f3acb3163de476bd0bc3.js",
    "revision": "7226f1929804456abb7363ec07bdd4ad"
  }
], {
  "cacheId": "Hawkeye",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/xploryo-dev-deploy/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/xploryo-dev-deploy/.*'), workbox.strategies.networkFirst({}), 'GET')
