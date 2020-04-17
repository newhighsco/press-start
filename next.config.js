const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')([
  '@newhighsco/chipset'
])
const withImages = require('next-images')
const withSitemap = require('@newhighsco/next-plugin-sitemap')
const withRobots = require('@newhighsco/next-plugin-robots')
const withSvgr = require('@newhighsco/next-plugin-svgr')
const withFonts = require('next-fonts')
const withVideos = require('next-videos')
const withCssOptions = require('./src/plugins/css-options')

const nextConfig = {
  experimental: {
    sassOptions: {
      implementation: require('sass')
    }
  },
  exportTrailingSlash: true,
  poweredByHeader: false,
  env: {
    SITE_URL: 'https://starter.newhighsco.re/',
    DISALLOW_ROBOTS: true
  },
  exportPathMap: defaultPathMap => {
    const customPathMap = {}
    const pathMap = Object.assign(customPathMap, defaultPathMap)
    const ignorePaths = []

    ignorePaths.map(path => delete pathMap[path])

    return pathMap
  }
}

module.exports = withPlugins(
  [
    [withTranspileModules],
    [
      withImages,
      {
        exclude: /\.svg$/,
        inlineImageLimit: 1
      }
    ],
    [
      withSvgr,
      {
        svgrOptions: {
          svgoConfig: {
            plugins: [{ prefixIds: false }]
          }
        }
      }
    ],
    [withCssOptions, { cssModulesOptions: { mode: 'local' } }],
    [withFonts],
    [withVideos],
    [withSitemap, { sitemap: { hostname: nextConfig.env.SITE_URL } }],
    [
      withRobots,
      { robots: { disallowPaths: nextConfig.env.DISALLOW_ROBOTS ? ['/'] : [] } }
    ]
  ],
  nextConfig
)
