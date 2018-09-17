const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const isProduction = process.env['NODE_ENV'] === 'production'

let plugins = [
  new CleanWebpackPlugin([
    'static/dist'
  ], {
    verbose: true
  }),
  new HtmlWebpackPlugin({
    chunks: ['configProject'],
    filename: 'configProject.html',
    template: './lib/pages/configProject/template.html'
  }),
  new HtmlWebpackPlugin({
    chunks: ['landing'],
    filename: 'index.html',
    template: './lib/pages/landing/template.html'
  })
]

if (isProduction) {
  plugins = plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
}

module.exports = {
  entry: {
    configProject: [ 'babel-polyfill', 'whatwg-fetch', './lib/pages/App.jsx' ],
    landing: [ 'babel-polyfill', 'whatwg-fetch', './lib/pages/App.jsx' ]
  },
  output: {
    path: path.join(__dirname, 'static', 'dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    modules: ['.', 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  devtool: isProduction ? '' : 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
          'eslint-loader',
          'react-proxy-loader?name=./[name]'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?publicPath=../&name=./[hash].[ext]'
      }
    ]
  },
  plugins: plugins
}
