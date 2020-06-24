/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-23 10:21:00
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 08:43:11
 */
/**
 * @author weilan
 * @time 2020.05.20
 * @name 无需服务端获取的微应用
 */

const noAuthApps = [
  {
    module: "xhzq-template-subapp",
    defaultRegister: true,
    devEntry: "//localhost:8080",
    depEntry: "http://localhost:8080/",
    routerBase: "/demo",
    data: [
      {
        id: "1",
        title: "demo",
        icon: "el-icon-monitor",
        children: [
          {
            id: "1-1",
            title: "demo",
            url: "/demo"
          }
        ]
      }
    ]
  }
];

export default noAuthApps;
