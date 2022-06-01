const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')([
  '@newhighsco/chipset',
  '@newhighsco/press-start'
])
const withSvgr = require('@newhighsco/next-plugin-svgr')
const withFonts = require('next-fonts')
const withVideos = require('next-videos')

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  generateBuildId: () => 'build',
  images: {
    formats: ['image/avif', 'image/webp']
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  poweredByHeader: false
}

module.exports = withPlugins(
  [
    [withTranspileModules],
    [withSvgr, { inlineImageLimit: -1 }],
    [withFonts],
    [withVideos, { assetDirectory: 'static' }]
  ],
  nextConfig
)
