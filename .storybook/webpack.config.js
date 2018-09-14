const stylusLoaders = require('../src/utils/stylus-loaders')

module.exports = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [ require.resolve('style-loader'), ...stylusLoaders() ]
      },
      {
        test: /\.svg$/,
        loader: require.resolve('svg-react-loader')
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff(2)?)$/,
        use: [ 'file-loader' ]
      }
    ]
  }
}
