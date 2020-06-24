<!--
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-23 10:37:03
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 10:20:22
-->

# xhzq-template-master

基于 xhzq-vue-cli 的微前端主应用项目模板

# appConfig 配置参数说明

```js
 {
    module: "subapp-demo",                    // 模块名，和子应用目录名、package.js name 一致
    devEntry: "//localhost:9001",               // 开发环境子应用入口，为你运行时子应用ip+port
    depEntry: "http://",                        // 生产环境子应用入口，为线上地址
    routerBase: "/demo",                      // 子应用routerBase，此子应用的路由都会挂上此前缀
    data: [                                     // 子应用模块及菜单、路由数据
      {
        id: "1",
        title: "默认Demo页",                       // 一级菜单
        icon: "el-icon-box",                    // 图标
        children: [                             // 二级菜单
          {
            id: "1-1",
            title: "默认Demo1页",                  // 菜单名
            url: "/demo"               // 静态路由名
          },
           {
            id: "1-1",
            title: "默认Demo2页",                  // 菜单名
            url: "/demo/demo2"               // 静态路由名
          }
        ]
      }
    ]
  },
```
