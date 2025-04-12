const { default: merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
});
