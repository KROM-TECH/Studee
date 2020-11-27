module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'Studee',
      themeColor: '#6c63ff',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      assetsVersion:'1',
      manifestPath:'public/manifest.json',
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: './public/sw.js',
        // swDest: 'service-worker.js',
        // ...other Workbox options...
      }
    }
  }