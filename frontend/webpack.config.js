const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    host: 'localhost',
    port: 8090
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      enforce: 'pre',
      exclude: [/node_modules/],
      use: 'standard-loader',
    }, {
      test: [/\.js$/, /\.jsx$/],
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-object-assign',
          "@babel/plugin-transform-runtime"
        ]
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.styl$/,
      use: ['style-loader', 'css-loader', 'stylus-native-loader']
    }, {
      test: /\.(jpg|png|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/', // assets/ is in output.path
        limit: 2000
      }
    }]
  }
};