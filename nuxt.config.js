export default {
  server: {
    port: 1997, // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Ofaloo Agentcenter - Vendez et mettez en location vos propriétés sur Ofaloo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [{ src: 'https://use.fontawesome.com/releases/v5.14.0/js/all.js' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/pc.css' },
      { rel: 'stylesheet', href: '/assets/css/bulma.css' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=B612',
      },
      { rel: 'stylesheet', href: '/assets/css/global.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/directive.js',
    '@/plugins/linkformat.js',
    '@/plugins/utilities.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
    '@nuxtjs/moment',
  ],
  moment: {
    timezone: true,
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  auth: {
    plugins: ['@/plugins/auth.js'],
    localStorage: false,
    rewriteRedirects: true,
    resetOnError: true,
    redirect: {
      login: '/ofalooagent/connexion',
      logout: false,
      callback: false,
      home: false,
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          maxAge: 18000,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'agent/login', method: 'post' },
          logout: { url: 'agent/logout', method: 'get' },
          user: { url: 'user/agent', method: 'get' },
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://ofalooback.herokuapp.com/api/',
    credentials: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
