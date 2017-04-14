const { join } = require('path');
const webpack = require('webpack');

const config = {
  entry: join(__dirname, 'src', 'main.js'),
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  }
};

if (process.env.NODE_ENV === 'production') {
  delete config.devtool;

  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    })
  ];
}

module.exports = config;
