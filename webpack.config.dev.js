const { default: merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");
const commonConfig = require("./webpack.config");
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new ESLintPlugin({
      context: path.resolve(__dirname, "src"),
      extensions: [".js", ".ts"],
      exclude: ["node_modules"],
      fix: true,
      cache: true,
      emitWarning: true,
      failOnError: false,
    }),
  ],
});
