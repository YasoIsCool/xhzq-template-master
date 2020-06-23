/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 09:05:52
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-23 10:37:19
 */

const { port } = require("./package");

module.exports = {
  // publicPath: './',
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      "/Bing": {
        target: "https://cn.bing.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/Bing": ""
        }
      }
    }
  }
};
