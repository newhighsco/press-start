const absoluteUrlRegEx = /^\w[\w-.+]+:/ // http://regexr.com/3fhfg

module.exports = (url) => {
  return absoluteUrlRegEx.exec(url)
}
