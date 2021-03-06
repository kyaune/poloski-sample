const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/poloski-sample/'
  }
} : {}


module.exports = {
  // ...routerBase,
  /*
  ** Headers of the page
  */
 
  head: {
    title: 'poloski',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      {rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Cormorant'}
    ]
  },
  css : [
    '~assets/css/reset.css'
  ],
  modules: [
    ['storyblok-nuxt', {
      accessToken: process.env.NODE_ENV == 'production' ? 'skJo0XBurx4vsMnUvrn4bQtt' : '5n6Vr9MAdUOntHfmqMm7Qwtt',
      cacheProvider: 'memory'
    }]
  ],
  plugins: [
    '~/plugins/components'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  }
}

