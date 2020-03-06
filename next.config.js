const path = require('path')
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const { PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require('next/constants')
const backlineNormalize = require('backline-normalize')

const nextConfig = {
  distDir: 'dist',
  poweredByHeader: false,
  env: {
    DISALLOW_ROBOTS: true
  }
}

module.exports = withPlugins(
  [
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        },
        [PHASE_PRODUCTION_BUILD + PHASE_EXPORT]: {
          cssLoaderOptions: {
            localIdentName: '[hash:base64:8]'
          }
        },
        sassLoaderOptions: {
          includePaths: [
            ...backlineNormalize.includePaths,
            path.join(__dirname, 'src/scss/settings')
          ]
        }
      }
    ]
  ],
  nextConfig
)
