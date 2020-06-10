// https://nuxtjs.org/api/configuration-build/
const build = {
  extend(config, { isDev, isClient }) {
    // https://nuxtjs.org/faq/extend-webpack#execute-eslint-on-every-webpack-build-in-dev-environment
    if (isDev) {
      if (isClient) {
        config.module.rules.push({
          enforce: 'pre',
          exclude: /(node_modules)/,
          loader: 'eslint-loader',
          options: {
            fix: true
          },
          test: /\.(js|ts|vue)$/
        })
      }
    }
  },
  // https://github.com/nuxt/nuxt.js/issues/2201#issuecomment-616691273
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '.',
      chunks: 'all',
      maxSize: 51200, // ~< 50kib chunks
    }
  }
}

export default build
