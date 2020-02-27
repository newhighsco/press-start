const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const { PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require('next/constants')

const nextConfig = { poweredByHeader: false }

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
        }
      }
    ]
  ],
  nextConfig
)
