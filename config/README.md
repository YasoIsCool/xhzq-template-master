<!--
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 10:16:00
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-22 10:26:37
-->

### install.js

读取所有以 subapp 为前缀的文件夹中的 package.json 进行安装，并且跳过已安装的 node_modules

### start.js

读取所有以 subapp 为前缀的文件夹中的 package.json 并且根据各个服务的 port 进行启动

### bulid.js

读取所有以 subapp 为前缀的文件夹中的 package.json 并且跳过已安装的 node_modules 进行 build 打包
