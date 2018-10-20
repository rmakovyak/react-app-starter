const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('./config/webpack.config.prod');
const paths = require('./config/paths');

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}

function build() {
  const compiler = webpack(config);
  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(
      stats.toString({
        chunks: false,
        colors: true,
      }),
    );
  });
}

fs.emptyDirSync(paths.appBuild);
copyPublicFolder();
build();
