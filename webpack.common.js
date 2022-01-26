const path = require("path")
const webpack = require("webpack")
// Plugins
// Will attach the JS files into the generated html
const HtmlWebPackPlugin = require("html-webpack-plugin")
// Minifier plugin - generate chunks
const TerserPlugin = require("terser-webpack-plugin")
// Bundle compressrion - deliver lighter chunks over the network
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  // Entry point where webpack start to chaning the imports and generate static JS file that ready to get attached
  entry: {
    index: "/src/index.js",
  },
  // Output folder which the build package will be exported
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    asyncChunks: true,
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-syntax-dynamic-import"],
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),

    new CompressionPlugin(),

    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
}
