const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// App files location
const PATHS = {
  app: path.resolve(__dirname, '../src/js'),
  styles: path.resolve(__dirname, '../src/styles'),
  images: path.resolve(__dirname, '../src/images'),
  build: path.resolve(__dirname, '../build')
};

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
};

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: path.join(PATHS.app, 'main'),
    vendor: ['react']
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/'
  },
  stats: {
    colors: true
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    noParse: /\.min\.js$/,
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: [
            { loader: 'css', query: { sourceMap: true } },
            'postcss',
            { loader: 'sass', query: { outputStyle: 'compressed' } }
          ]
        })
      },
      {
        test: /\.css$/,
        include: PATHS.styles,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: ['css', 'postcss']
        })
      },
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'fonts/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: PATHS.images,
        to: 'images'
      }
    ]),
    // Shared code
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js'
    }),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.DedupePlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      sourceMap: false
    }),
    // This plugin moves all the CSS into a separate stylesheet
    new ExtractTextPlugin({
      filename: 'css/app.css',
      allChunks: true
    })
  ],
  postcss: function () {
    return [autoprefixer({
      browsers: ['last 2 versions']
    })];
  }
};
