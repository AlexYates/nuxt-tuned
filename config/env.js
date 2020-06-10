// https://nuxtjs.org/api/configuration-env/
const env = {
  NUXT_ENV: process.env.NUXT_ENV || process.env.NODE_ENV || 'development',
  BRANCH: process.env.BRANCH || 'unknown'
}

export default env
