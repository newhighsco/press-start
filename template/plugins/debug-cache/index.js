const fs = require('fs')
const path = require('path')

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
    }
  })

  return arrayOfFiles
}

module.exports = {
  onPreBuild: async ({ constants, inputs, utils }) => {
    const files = await utils.cache.list()

    console.log('Cached folder count', files.length)

    files.forEach(file => {
      console.log(111, file)

      const all = getAllFiles(file)

      all.forEach(a => {
        const { size } = fs.statSync(a)

        console.log(222, a, size)
      })
    })
  }
}
