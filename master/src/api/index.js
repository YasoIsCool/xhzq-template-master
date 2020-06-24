/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-23 10:38:55
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 11:08:12
 */
import service from "./request";
import noAuthApps from "@/core/app-config";
const getBingHpImageApi = params =>
  service({
    url: "/Bing/HPImageArchive.aspx",
    method: "get",
    params
  });
const getAppConfigsApi = () =>
  new Promise(reject => {
    reject(noAuthApps);
  });
export {
  getBingHpImageApi, // 1获取菜单数据接口
  getAppConfigsApi
};
