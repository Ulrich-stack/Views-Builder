const path = require("path");
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "bin"),
    filename: "app.js",
  },
  // plugins: [
  //   new MonacoEditorWebpackPlugin({
  //     languages: ['javascript', 'css', 'html', 'typescript', 'json']
  //   })
  // ],
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
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
				test: /\.ttf$/,
				type: 'asset/resource'
			}
    ],
  },
  plugins: [new MonacoWebpackPlugin()],
  resolve: {
    extensions: [".js", ".jsx"],
    // fallback: {
    //   'path': require.resolve('path-browserify'),
    //   'fs': false
    // }
  },
};
