/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-23 10:21:00
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 14:55:56
 */
import Vue from "vue";
import router from "../router";
import store from "../store";
import App from "../App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

export function vueRender() {
  Vue.config.productionTip = false;

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#main-container");
  return;
}

/**
 * @name 提供render装载子应用方法
 * @param {Object} param0
 */
export default function render() {
  vueRender();
}
