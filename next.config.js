const path = require('path')
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const { PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require('next/constants')
const backlineNormalize = require('backline-normalize')

const nextConfig = {
  exportTrailingSlash: true,
  poweredByHeader: false,
  env: {
    SITE_URL: 'https://newhighsco.re',
    DISALLOW_ROBOTS: true
  },
  exportPathMap: (defaultPathMap, { dev, outDir }) => {
    const customPathMap = {}
    const pathMap = Object.assign(customPathMap, defaultPathMap)
    const ignorePaths = []

    ignorePaths.map(path => delete pathMap[path])

    return pathMap
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
            path.join(__dirname, 'src/styles')
          ]
        }
      }
    ]
  ],
  nextConfig
)
