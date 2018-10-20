const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./config/webpack.config.dev');
const paths = require('./config/paths');

const options = {
  contentBase: paths.appBuild,
  host: 'localhost',
  hot: true,
  stats: {
    colors: true,
  },
};

WebpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(3000, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:3000');
});
