/*
 * @Descripttion: 公共工具类
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-23 10:21:00
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 08:53:25
 */
/**
 * 跨应用路由跳转
 * @param {String} href url地址
 * @param {Object} stateObj 状态参数 可以通过history.state读取
 * @param {String} title 标题 暂时没有用
 */
function routerGo(href = "/", title = null, stateObj = {}) {
  window.history.pushState(stateObj, title, href);
}

export {
  routerGo // 跨应用路由跳转
};
