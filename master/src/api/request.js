/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-23 10:39:22
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-23 11:05:35
 */
/*
 * Created by GaoJiaPeng on 19/3/13.
 */
import axios from "axios";
// 创建axios实例
const service = axios.create({
  timeout: 10000 // ms请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    const Data = response;
    if (Data.status !== 200) {
      return Promise.reject();
    } else {
      return Data.data;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
