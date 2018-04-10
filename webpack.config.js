var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const PATHS = {
  build: path.join(__dirname, 'src', 'main','resources','static')
};

module.exports = {
  entry: './src/main/js/index.js',

  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
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
		     },
         {
              test: /\.(png|jpg|gif|jpeg)$/,
              loader: 'file-loader'
         }
      ]
   },

   devServer: {
     historyApiFallback: true,
   },

   plugins: [new HtmlWebpackPlugin({
    template: 'src/main/resources/templates/index.html'
  })]
};
