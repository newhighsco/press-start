const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')([
  '@newhighsco/chipset'
])
const withCssOptions = require('./src/plugins/css-options')

const nextConfig = {
  exportTrailingSlash: true,
  poweredByHeader: false,
  env: {
    SITE_URL: 'https://newhighsco.re',
    DISALLOW_ROBOTS: true
  },
  exportPathMap: defaultPathMap => {
    const customPathMap = { '/404.html': { page: '404' } }
    const pathMap = Object.assign(customPathMap, defaultPathMap)
    const ignorePaths = ['/404', '/index']

    ignorePaths.map(path => delete pathMap[path])

    return pathMap

    // TODO: robots.txt and sitemap.xml
  }
}

module.exports = withPlugins(
  [
    [withTranspileModules],
    [withCssOptions, { cssModulesOptions: { mode: 'local' } }]
  ],
  nextConfig
)
