const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "bin"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /\/node_modules\//,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
