const path = require('path');

module.exports = {
  entry: './src/server.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: { "fs": false }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
};