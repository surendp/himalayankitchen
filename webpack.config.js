var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

const PATHS = {
  build: path.join(__dirname, 'src', 'main', 'resources', 'static')
};

module.exports = {
  entry: ['./src/main/js/react/index.js', './src/main/js/vue/src/main.js'],

  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.vue?$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: {
      poll: true
    },
    open: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/main/resources/templates/index.html'
    }),
    new VueLoaderPlugin()
  ],

  resolve: {
    alias: {
      static: path.resolve(__dirname, 'src', 'main', 'resources', 'static'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.jsx', '.vue']
  }
};