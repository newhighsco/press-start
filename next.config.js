const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')([
  '@newhighsco/chipset'
])
const withImages = require('next-optimized-images')
const withSvgr = require('@newhighsco/next-plugin-svgr')
const withFonts = require('next-fonts')
const withVideos = require('next-videos')
const envConfig = require('./env.config')

const env = envConfig[process.env.VERCEL_GITHUB_COMMIT_REF] || envConfig.preview

const nextConfig = {
  poweredByHeader: false,
  env
}

module.exports = withPlugins(
  [
    [withTranspileModules],
    [
      withImages,
      {
        inlineImageLimit: -1,
        handleImages: ['jpeg', 'png', 'webp', 'gif', 'ico'],
        removeOriginalExtension: true
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
    [withVideos, { assetDirectory: 'static' }]
  ],
  nextConfig
)
