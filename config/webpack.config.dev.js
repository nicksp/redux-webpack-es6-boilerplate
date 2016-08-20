const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// App files location
const PATHS = {
  app: path.resolve(__dirname, '../src/js'),
  styles: path.resolve(__dirname, '../src/styles'),
  build: path.resolve(__dirname, '../build')
};

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('development')
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
};

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      path.join(PATHS.app, 'main.js')
    ],
    vendor: ['react']
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/'
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          { loader: 'css', query: { sourceMap: true } },
          'postcss',
          { loader: 'sass', query: { outputStyle: 'expanded' } }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url',
        query: {
          limit: 8192
        }
      }
    ]
  },
  plugins: [
    // Shared code
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  postcss: function () {
    return [autoprefixer({
      browsers: ['last 2 versions']
    })];
  }
};
