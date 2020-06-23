/*
 * @Descripttion: 读取文件夹并打包项目
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 09:05:52
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-23 14:01:15
 */

const fs = require("fs");
const path = require("path");
const util = require("util");
const sub_app_ath = path.resolve();
const sub_apps = fs
  .readdirSync(sub_app_ath)
  .filter(i => /^subapp|master/.test(i));

console.log(
  `即将开始移除node_modules的项目：${JSON.stringify(sub_apps)} ing...`
);

const exec = util.promisify(require("child_process").exec);
function build() {
  sub_apps.forEach(async i => {
    console.log(`${i} 开始移除,耗时较久请耐心等待...`);
    if (!fs.existsSync(`${i}/node_modules`)) {
      console.log(`${i} 应用未检测到node_modules目录，将跳过此应用`);
      return;
    }
    const { stdout, stderr } = await exec("rimraf node_modules", {
      cwd: path.resolve(i)
    });
    console.log(i, "success", stdout);
  });
}
build();

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
});
