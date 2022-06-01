const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')([
  '@newhighsco/chipset',
  '@newhighsco/press-start'
])
const withSvgr = require('@newhighsco/next-plugin-svgr')
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
  poweredByHeader: false,
  webpack: config => {
    config.module.rules.push({
      test: /\.(txt|xml|woff(2)?)$/,
      use: 'file-loader'
    })

    return config
  }
}

module.exports = withPlugins(
  [[withTranspileModules], [withSvgr, { inlineImageLimit: -1 }], [withVideos]],
  nextConfig
)
