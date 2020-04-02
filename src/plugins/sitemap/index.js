const { createWriteStream } = require('fs')
const { SitemapStream } = require('sitemap')
const { join } = require('path')

module.exports = (nextConfig = {}) => {
  nextConfig = Object.assign(
    {
      sitemapFileName: 'sitemap.xml'
    },
    nextConfig
  )

  return Object.assign({}, nextConfig, {
    exportPathMap: async (...args) => {
      const {
        sitemapFileName,
        sitemapHostName,
        sitemapIgnorePaths
      } = nextConfig
      const [defaultPathMap, { dev, outDir }] = args
      const pathMap = defaultPathMap
      const ignorePaths = ['/404', '/index'].concat(sitemapIgnorePaths)

      ignorePaths.map(path => delete pathMap[path])

      const paths = Object.keys(pathMap)

      if (!dev && sitemapHostName && paths.length) {
        const sitemap = new SitemapStream({
          hostname: sitemapHostName
        })
        const writeStream = createWriteStream(join(outDir, sitemapFileName))

        sitemap.pipe(writeStream)

        paths.map(path => sitemap.write({ url: path }))

        sitemap.end()
      }

      if (typeof nextConfig.exportPathMap === 'function') {
        return nextConfig.exportPathMap(...args)
      }

      return defaultPathMap
    }
  })
}
