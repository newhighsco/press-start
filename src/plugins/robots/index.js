const { writeFile } = require('fs-extra')
const { join } = require('path')
const urlJoin = require('url-join')

module.exports = (nextConfig = {}) => {
  nextConfig = Object.assign(
    {
      robotsFileName: 'robots.txt'
    },
    nextConfig
  )

  return Object.assign({}, nextConfig, {
    exportPathMap: async (...args) => {
      const {
        robotsDisallowAll,
        robotsFileName,
        sitemapFileName,
        sitemapHostName
      } = nextConfig
      const [defaultPathMap, { dev, outDir }] = args

      if (!dev) {
        const robots = ['User-agent: *']

        if (robotsDisallowAll) robots.push('Disallow: /')
        if (sitemapHostName)
          robots.push(`Sitemap: ${urlJoin(sitemapHostName, sitemapFileName)}`)

        await writeFile(join(outDir, robotsFileName), robots.join('\n'))
      }

      if (typeof nextConfig.exportPathMap === 'function') {
        return nextConfig.exportPathMap(...args)
      }

      return defaultPathMap
    }
  })
}
