const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/poloski-sample/'
  }
} : {}


module.exports = {
  // ...routerBase,
  // router: {
  //   base: '/poloski-sample/'
  // },
  /*
  ** Headers of the page
  */
 plugins: [
  '~/plugins/components'
],
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
      accessToken: 'OFbQzrWDtL0QbKrD4NKc0wtt',
      cacheProvider: 'memory'
    }]
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
    loaders: [
      {
          test: /\.(scss|sass|css)$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }]
      },
      {
          test: /\.(png|jpe?g|gif|svg)$/,
          loader: 'url-loader',
          query: {
              limit: 1000,
              name: 'img/[name].[hash:7].[ext]'
          }
      },
      {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
              limit: 1000,
              name: 'fonts/[name].[hash:7].[ext]'
          }
      }
  ],
  }
}

