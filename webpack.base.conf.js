const path = require('path')
const Purgecss = require("purgecss")
const purgecss = new Purgecss({
  content: ["./index.html"],
  css: ["./src/*.css"]
});
purgecss.purge()

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
      },
      {
        test: /\.png$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                quality: '65-90',
                speed: 4
              },
            }
          }
        ]
      }
    ]
  }
})