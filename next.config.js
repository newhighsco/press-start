const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')([
  '@newhighsco/chipset'
])
const withImages = require('next-images')
const withCssOptions = require('./src/plugins/css-options')
const withSitemap = require('./src/plugins/sitemap')
const withRobots = require('./src/plugins/robots')

const nextConfig = {
  exportTrailingSlash: true,
  poweredByHeader: false,
  env: {
    SITE_URL: 'https://start.newhighsco.re/',
    DISALLOW_ROBOTS: true
  },
  exportPathMap: defaultPathMap => {
    const customPathMap = { '/404.html': { page: '404' } }
    const pathMap = Object.assign(customPathMap, defaultPathMap)
    const ignorePaths = ['/404', '/index']

    ignorePaths.map(path => delete pathMap[path])

    return pathMap
  }
}

module.exports = withPlugins(
  [
    [withTranspileModules],
    [withImages, { inlineImageLimit: 1 }],
    [withCssOptions, { cssModulesOptions: { mode: 'local' } }],
    [withSitemap, { sitemapHostName: nextConfig.env.SITE_URL }],
    [withRobots, { robotsDisallowAll: nextConfig.env.DISALLOW_ROBOTS }]
  ],
  nextConfig
)
