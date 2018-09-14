const path = require('path')
const autoprefixer = require('autoprefixer')
const stylusMixins = require('stylus-mixins')
const responsiveGrid = require('responsive-grid')
const poststylus = require('poststylus')

const stylusLoaders = () => ([
  {
    loader: require.resolve('css-loader'),
    options: {
      minimize: true,
      modules: true,
      localIdentName: '[local]'
    }
  },
  {
    loader: require.resolve('stylus-loader'),
    options: {
      use: [
        stylusMixins(),
        responsiveGrid(),
        poststylus([ autoprefixer ])
      ],
      import: [
        '~stylus-mixins/index.styl',
        '~responsive-grid/index.styl',
        path.resolve(__dirname, '../stylus/_______settings/index.styl')
      ]
    }
  }
])

module.exports = stylusLoaders
