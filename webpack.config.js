var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

var plugins = [];

if (process.env.NODE_ENV === 'production'){
    plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ];
}

module.exports = {
  node: {
    fs: "empty"
  },
  entry: './src-dev/App.js',
  output: {
    path: path.join(__dirname, "/dist-dev"),
    filename: 'app.js'
  },
  
  plugins: plugins,
  resolve: {
    alias: {
        './conf' : __dirname + '/conf-' + process.env.NODE_ENV
    },
    extensions: ["", ".js", ".jsx", ".css"]
  },
  module: {
    /*preLoaders: [
      { test: /\.js$/, loader: "transform?envify" },
    ],*/
    
    loaders:[
      //{ test: /jquery\.js$/, loader: 'expose?$' },
      //{ test: /jquery\.js$/, loader: 'expose?jQuery' },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
	        plugins: ['transform-runtime'],
	        presets: ['es2015', 'stage-0', 'react'],
	    }
      },
    ]
  },
  devtool: process.env.NODE_ENV !== "production" ? 'source-map' : "#"
};