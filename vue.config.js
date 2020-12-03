module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'Studee',
      themeColor: '#6c63ff',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      assetsVersion:'2',
      manifestPath:'public/manifest.json',
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: './public/sw.js',
        exclude: ['_redirects'],
        // swDest: 'service-worker.js',
        // ...other Workbox options...
      }
    },

    chainWebpack: (config) => {

      // A, remove the plugin
      config.plugins.delete('prefetch')
    }
  }

