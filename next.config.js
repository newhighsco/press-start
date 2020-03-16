const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')([
  '@newhighsco/chipset'
])

const nextConfig = {
  exportTrailingSlash: true,
  poweredByHeader: false,
  env: {
    SITE_URL: 'https://newhighsco.re',
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

module.exports = withPlugins([withTranspileModules], nextConfig)
