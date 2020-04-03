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
      const { robotsDisallowAll, robotsFileName, sitemap = {} } = nextConfig
      const [defaultPathMap, { dev, outDir }] = args

      if (!dev) {
        const robots = ['User-agent: *']

        if (robotsDisallowAll) robots.push('Disallow: /')
        if (sitemap)
          robots.push(`Sitemap: ${urlJoin(sitemap.hostname, sitemap.filename)}`)

        await writeFile(join(outDir, robotsFileName), robots.join('\n'))
      }

      if (typeof nextConfig.exportPathMap === 'function') {
        return nextConfig.exportPathMap(...args)
      }

      return defaultPathMap
    }
  })
}
