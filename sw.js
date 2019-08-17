importScripts('/xploryo-dev-deploy/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/xploryo-dev-deploy/057f6a12a9c5a76714e3.js",
    "revision": "95ada1f70078aa4abe00a5b627efb4de"
  },
  {
    "url": "/xploryo-dev-deploy/063064fd321fa77a2122.js",
    "revision": "70f667e7024014d05c737c7320d66f93"
  },
  {
    "url": "/xploryo-dev-deploy/36a2161e0ad71e511044.js",
    "revision": "38dcacaeb5f69562fe7b96c3e07c4700"
  },
  {
    "url": "/xploryo-dev-deploy/381a9d569afd2cfc2e4a.js",
    "revision": "2cfc7f8090c911e8bbbebe21e061c588"
  },
  {
    "url": "/xploryo-dev-deploy/3aef18ecf57306ce059c.js",
    "revision": "a63c883b52f4a9e2b6739d81375ee1a9"
  },
  {
    "url": "/xploryo-dev-deploy/3ecc4eda108d2963dde3.js",
    "revision": "fb09d954a365ef794c53213c55815a30"
  },
  {
    "url": "/xploryo-dev-deploy/43ee04b027d57066a36e.js",
    "revision": "2678334a25f1b264ebcee43c79ffc531"
  },
  {
    "url": "/xploryo-dev-deploy/4855208a1e51130e7ce1.js",
    "revision": "ad2d1f81f6396245de27078175065878"
  },
  {
    "url": "/xploryo-dev-deploy/669f95182d555ce9a32c.js",
    "revision": "446e69f8062f07fad003eeab56276edb"
  },
  {
    "url": "/xploryo-dev-deploy/7483050fff13fd280fc3.js",
    "revision": "3433fe60396a315af06b901bb6d82b35"
  },
  {
    "url": "/xploryo-dev-deploy/8c959d047aa1dcf5d081.js",
    "revision": "a4b69c5be7d3c3684b7331b84379b679"
  },
  {
    "url": "/xploryo-dev-deploy/c68a969c7ca523cd0d9d.js",
    "revision": "c219d46b8a84a22ee8244ac6ed4961e1"
  },
  {
    "url": "/xploryo-dev-deploy/cc4bf645da6de8a4d856.js",
    "revision": "ef2ab0af2ee0e635490424bf053c16d2"
  },
  {
    "url": "/xploryo-dev-deploy/d8cff7eca7d8501c9e25.js",
    "revision": "3e5b3b0c9d977086b2791bc4d706d842"
  },
  {
    "url": "/xploryo-dev-deploy/d9fe208ec8e5ae9c5317.js",
    "revision": "3c07da4c01b8fb6d8142e4e801b95586"
  },
  {
    "url": "/xploryo-dev-deploy/dccbed0a1a4d7c0ce5db.js",
    "revision": "74e5e275ac042c4e617e56a59a09500e"
  },
  {
    "url": "/xploryo-dev-deploy/f20c0b94ba3453c286b0.js",
    "revision": "bf86c72cffe5168dbe18ba1712c39b5b"
  },
  {
    "url": "/xploryo-dev-deploy/f599316b4e95d7fe373b.js",
    "revision": "d8bc368f7998b6b43928f306dfdeeb67"
  }
], {
  "cacheId": "Hawkeye",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/xploryo-dev-deploy/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
