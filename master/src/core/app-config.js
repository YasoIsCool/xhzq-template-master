/*
 * @Descripttion: 无需服务端获取的微应用
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-23 10:21:00
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 10:21:36
 */

const noAuthApps = [
  {
    module: "xhzq-template-subapp",
    devEntry: "//localhost:9001",
    depEntry: "http://",
    routerBase: "/demo",
    data: [
      {
        id: "1",
        title: "默认页",
        icon: "el-icon-box",
        children: [
          {
            id: "1-1",
            title: "默认Demo1页", // 菜单名
            url: "/demo" // 静态路由名
          },
          {
            id: "1-2",
            title: "默认Demo2页", // 菜单名
            url: "/demo/demo2" // 静态路由名
          }
        ]
      }
    ]
  }
];

export default noAuthApps;
