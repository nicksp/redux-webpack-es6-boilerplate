var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// App files location
var dirs = {
  scripts: path.resolve(__dirname, 'src/js'),
  styles: path.resolve(__dirname, 'src/css'),
  html: path.resolve(__dirname, 'src/index.html'),
  build: path.resolve(__dirname, 'build')
};

module.exports = {
  entry: [
    path.resolve(dirs.scripts, 'main.js')
  ],
  output: {
    path: dirs.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: dirs.scripts,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
      { from: dirs.html }, // to: output.path
      { from: dirs.styles }
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: dirs.build,
    historyApiFallback: true
  },
  stats: {
    // Nice colored output
    colors: true
  },
  // Create sourcemaps for the bundle
  devtool: 'source-map'
};
