const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')([
  '@newhighsco/chipset',
  '@newhighsco/press-start'
])
const withImages = require('next-optimized-images')
const withSvgr = require('@newhighsco/next-plugin-svgr')
const withFonts = require('next-fonts')
const withVideos = require('next-videos')

const nextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    disableStaticImages: true
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
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
    [withSvgr],
    [withFonts],
    [withVideos, { assetDirectory: 'static' }]
  ],
  nextConfig
)
