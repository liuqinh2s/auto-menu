const common = require("./webpack.common");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const config = require("../config");

module.exports = merge(common, {
  mode: "production",
  devtool: config.useSourceMap ? "source-map" : undefined,
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2017",
        minify: true,
      }),
    ],
  },
});
