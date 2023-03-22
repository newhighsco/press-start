const fs = require('fs')

module.exports = {
  onPreBuild: async ({ constants, inputs, utils }) => {
    const files = await utils.cache.list()

    console.log('Cached file count', files.length)

    files.forEach(file => {
      const { size } = fs.statSync(file)

      console.log(file, size)
    })
  }
}
