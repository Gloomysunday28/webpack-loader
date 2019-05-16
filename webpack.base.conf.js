const path = require('path')

module.exports = (env) => ({
  entry: './src/index.js',
  devtool: env === 'development' ? 'cheap-module-eval-source-map' : '',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules','./loader/'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: `babel-loader?cacheDirectory`,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: `style-loader!css-loader!martin-loader?lala`,
      }
    ]
  }
})