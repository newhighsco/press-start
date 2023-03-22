const fs = require('fs')
// const path = require('path')
// const { promisify } = require('util')
// const writeFile = promisify(fs.writeFile)

// const makeDir = require('make-dir')

const DEFAULT_CACHE_DIR = '.netlify/cache'

module.exports = {
  onPreBuild: async ({ constants, inputs, utils }) => {
    console.log(DEFAULT_CACHE_DIR)

    const files = fs.readdirSync(DEFAULT_CACHE_DIR)

    files.forEach(file => {
      console.log(file)
    })

    // const { PUBLISH_DIR } = constants
    // const cacheManifestFileName = inputs.outputFile
    // const cacheManifestPath = path.join(PUBLISH_DIR, cacheManifestFileName)
    // console.log('Saving cache file manifest for debugging...')
    // const files = await utils.cache.list()
    // await makeDir(PUBLISH_DIR)
    // await writeFile(cacheManifestPath, JSON.stringify(files, null, 2))
    // console.log(`Cache file count: ${files.length}`)
    // console.log(`Cache manifest saved to ${cacheManifestPath}`)
    // console.log(`Cache manifest output: ${JSON.stringify(files, null, 2)}`)
  }
}
