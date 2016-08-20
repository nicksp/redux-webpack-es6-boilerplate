const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const DashboardPlugin = require('webpack-dashboard/plugin');
const config = require('./config/webpack.config.dev');

const app = express();
const compiler = webpack(config);

compiler.apply(new DashboardPlugin());

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, host, function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.info('==> 🚧  App is listening at http://%s:%s', host, port);
});
