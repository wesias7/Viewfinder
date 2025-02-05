const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: "Viewfinder.js"
  },
  target: "node",
  node: {
    __dirname: false
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ],
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
};
