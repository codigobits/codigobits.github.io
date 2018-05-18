/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5f823c38cbb4896be7c3edac85d923c5"
  },
  {
    "url": "app/1/index.html",
    "revision": "f3d30fb6dd2e259938e17c597ba326a2"
  },
  {
    "url": "app/2/index.html",
    "revision": "d4799b4c228893c96e8c082d6cc2fcbe"
  },
  {
    "url": "app/3/index.html",
    "revision": "0fc667a842eb31cec40eee610443b635"
  },
  {
    "url": "app/index.html",
    "revision": "18edd12feb707bc57e44caf3ce46b507"
  },
  {
    "url": "assets/css/0.styles.4961e7e9.css",
    "revision": "e9a0080e4aa8a1b6d7e81d8a0c555613"
  },
  {
    "url": "assets/img/cover.2cbe8fd9.png",
    "revision": "2cbe8fd967087dc0576827f8599d5d7f"
  },
  {
    "url": "assets/img/cover.6a8a61c9.jpeg",
    "revision": "6a8a61c93452e756e742827bc9a56e81"
  },
  {
    "url": "assets/img/demo.b6ccc67b.png",
    "revision": "b6ccc67b840abc1037ba1905ee1e4162"
  },
  {
    "url": "assets/img/gifbg.b6ca5c8f.gif",
    "revision": "b6ca5c8f2d67f5c69c07e2b90541f663"
  },
  {
    "url": "assets/img/gui.f88fbbf6.jpeg",
    "revision": "f88fbbf673efb2347235544b2fc9a3c6"
  },
  {
    "url": "assets/img/localcertificate.d64f7526.png",
    "revision": "d64f7526711fc3f0abb6c8cb57f4ce1e"
  },
  {
    "url": "assets/img/menu.67927e58.jpeg",
    "revision": "67927e58d97f9a98ccbf434745ce3bda"
  },
  {
    "url": "assets/img/multimonitor.68293a6a.png",
    "revision": "68293a6aa647824cace0b01ec954243e"
  },
  {
    "url": "assets/img/opacity.3206247d.gif",
    "revision": "3206247d6c4b74424bfff110430b374d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/settings.2866708e.png",
    "revision": "2866708e07a6097fd3bdba98944ed30d"
  },
  {
    "url": "assets/img/systray.abade31d.jpeg",
    "revision": "abade31d0b30b74a116603aad2f212f9"
  },
  {
    "url": "assets/img/testmode.07ce3274.png",
    "revision": "07ce3274e1a11478e31e08ae40184b54"
  },
  {
    "url": "assets/img/testmodeoff.c835d1b4.png",
    "revision": "c835d1b4f2745e77cb153bc4db258fd7"
  },
  {
    "url": "assets/img/tiles.0164ed0f.png",
    "revision": "0164ed0f440d34f9f43f3ddbbcafd9bd"
  },
  {
    "url": "assets/img/watermark.3510d7b0.png",
    "revision": "3510d7b07460e76667bf327a96f4d9ab"
  },
  {
    "url": "assets/img/watermarkoff.49ed9d46.png",
    "revision": "49ed9d46ac52f21224263e23bd7e1f47"
  },
  {
    "url": "assets/img/win8customizer1.51c8bd34.jpeg",
    "revision": "51c8bd34db5e2ce00079b54344f64bdb"
  },
  {
    "url": "assets/js/2.40d438a0.js",
    "revision": "43c4d7199b9ebec2f8c6ec7b0d8477b3"
  },
  {
    "url": "assets/js/3.97da9028.js",
    "revision": "913c669ddd209380dc49ba133f809d30"
  },
  {
    "url": "assets/js/4.9dbd8e34.js",
    "revision": "8754063e4034b049adbc3df50717cc29"
  },
  {
    "url": "assets/js/5.11421f30.js",
    "revision": "deec1a9071ac8c877c495ae379928068"
  },
  {
    "url": "assets/js/6.0acede6d.js",
    "revision": "0dd8dfba3cd52ff5bda551e21c0803e3"
  },
  {
    "url": "assets/js/7.dd417127.js",
    "revision": "85e03b930fe12ce03e0bb5920a69d076"
  },
  {
    "url": "assets/js/8.a990c063.js",
    "revision": "1eb85791265294b34329b3213d759054"
  },
  {
    "url": "assets/js/9.1d91cc01.js",
    "revision": "a1bc1103edfdbf1e37b3459b7f119490"
  },
  {
    "url": "assets/js/app.9a2f863e.js",
    "revision": "845a3e9ddd4e839684c3b4ccbc2a6e31"
  },
  {
    "url": "assets/js/vendors~docsearch.4d04db72.js",
    "revision": "214166d45d6f511ce5ab958f6b3b0d43"
  },
  {
    "url": "brand.jpg",
    "revision": "2ecce62392dcd209b1a44fe45016e618"
  },
  {
    "url": "cbcalibri.png",
    "revision": "625a680a80ff5135dd6bd5be3e745b7e"
  },
  {
    "url": "es/index.html",
    "revision": "83dc20c10f0601182980299645dd0e0a"
  },
  {
    "url": "image/img2x.png",
    "revision": "7f2de0c3a81a8b64f6895f50b11cb62f"
  },
  {
    "url": "image/img3x.png",
    "revision": "bfc471b463c16c7a9e622a48b528c8d0"
  },
  {
    "url": "image/img4x.png",
    "revision": "d8832668fe049db90e7d0dc8cb506005"
  },
  {
    "url": "image/img6x.png",
    "revision": "1521a1f53da39d52cc58d51f1a91d48a"
  },
  {
    "url": "index.html",
    "revision": "5adbb5096059b4aa8f78bdea39b86acd"
  },
  {
    "url": "logo.min.png",
    "revision": "03431ab3b233c782d87ec9b00ca0faf2"
  },
  {
    "url": "support.html",
    "revision": "2745479633bbc72f338811c059e861e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
