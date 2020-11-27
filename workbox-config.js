module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{css,ico,png,svg,html,js,json,txt}"
  ],
  "swDest": "dist/sw.js",
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|jpeg|svg|json)$/,
    handler: 'StaleWhileRevalidate'
  }]
};