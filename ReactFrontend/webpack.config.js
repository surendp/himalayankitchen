var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const PATHS = {
  build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version)
};

module.exports = {
  entry: './app/index.js',

  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'app-bundle.js'
  },

  module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
			 test: /\.css?$/,
			 loader: 'style-loader!css-loader'
		 }
      ]
   },

   plugins: [new HtmlWebpackPlugin({
    template: 'app/public/index.html'
  })]
};
