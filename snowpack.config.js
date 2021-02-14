const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-react-refresh',
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          config.plugins.push(new CleanWebpackPlugin())
          return config
        }
      }
    ]
  ],
  devOptions: {
    open: 'none'
  },
  packageOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  routes: [
    /* ... */
  ],
  alias: {
    /* ... */
  }
}