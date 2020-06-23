/*
 * @Descripttion: 读取文件夹并安装依赖
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 09:05:52
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-23 10:25:36
 */

const fs = require("fs");
const path = require("path");
const util = require("util");
const sub_app_ath = path.resolve();
// 读取所有的subapp文件夹
const sub_apps = fs
  .readdirSync(sub_app_ath)
  .filter(i => /master|subapp/.test(i));

console.log(
  `即将进入所有模块并下载依赖：${JSON.stringify(
    sub_apps
  )} ing... 批量下载所有项目依赖`
);

const exec = util.promisify(require("child_process").exec);
// 选择执行语句
const registry = process.argv[2];
let registry_script = registry === "cnpm" ? "cnpm install" : "npm install";
/**
 * @Descripttion: 进行循环安装
 */
function install() {
  sub_apps.forEach(async i => {
    if (!fs.existsSync(`${i}/package.json`)) {
      console.log(`${i} 应用缺少package.json文件，将跳过此应用`);
      return false;
    }
    // 此处可改,是否跳过检测node_modules
    if (fs.existsSync(`${i}/node_modules`)) {
      console.log(`${i} 应用已检测到node_modules目录，将跳过此应用`);
      return false;
    }
    console.log(`${i} 开始下载，耗时较久请耐心等待...`);
    const { stdout, stderr } = await exec(registry_script, {
      cwd: path.resolve(i)
    });
    console.log(i, "success", stdout);
    console.error(i, "error", stderr);
  });
}
install();

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
});
