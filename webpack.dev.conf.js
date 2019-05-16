const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  return merge(baseConfig(env), {
    devServer: {
      compress: true,
      inline: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: true,
        title: 'webpack-loader'
      })
    ]
  })
}