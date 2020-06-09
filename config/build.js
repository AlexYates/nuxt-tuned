// https://nuxtjs.org/api/configuration-build/
const build = {
  extend(config, { isDev, isClient }) {
    // https://nuxtjs.org/faq/extend-webpack#execute-eslint-on-every-webpack-build-in-dev-environment
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|ts|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      });
    }
  }
}

export default build
