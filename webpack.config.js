const path = require('path');

module.exports = {
  entry: "./frontend/todo_redux.jsx",
  output: {
    path: path.resolve(__dirname, 'app','assets','javascripts'),
    filename: "bundle.js"
  },
  module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", "*" ]
    },
    devtool: 'source-map',
};
