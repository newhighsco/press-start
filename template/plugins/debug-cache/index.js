const fs = require('fs')
const path = require('path')

function listFilesSync(dir) {
  let fileList = []
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file)

    if (fs.lstatSync(fullPath).isDirectory()) {
      fileList = fileList.concat(listFilesSync(fullPath))
    } else {
      fileList.push(fullPath)
    }
  })
  return fileList
}

function fileAndSize(file) {
  return {
    file,
    size: fs.statSync(file).size
  }
}
module.exports = {
  onPreBuild: async ({ constants, inputs, utils }) => {
    const dirs = await utils.cache.list()

    console.log('Cached directory count', dirs.length)

    dirs.forEach(dir => {
      const files = listFilesSync(dir)
      const filesAndSizes = files.map(fileAndSize)

      console.log(dir, files.length)
      console.log(JSON.stringify(filesAndSizes, null, 2))
    })
  }
}
