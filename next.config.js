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

const nextConfig = {
  poweredByHeader: false,
  env: {
    SITE_URL: 'https://starter.newhighsco.re/',
    DISALLOW_ROBOTS: JSON.parse(process.env.DISALLOW_ROBOTS || false)
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
    [withFonts],
    [withVideos, { assetDirectory: 'static' }],
    [withSitemap, { sitemap: { hostname: nextConfig.env.SITE_URL } }],
    [
      withRobots,
      {
        robots: {
          disallowPaths: nextConfig.env.DISALLOW_ROBOTS ? ['/'] : []
        }
      }
    ]
  ],
  nextConfig
)
