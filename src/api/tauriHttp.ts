/*
 * @Description: tauri http 模块 用于跨域请求
 * @Author: zhidal
 * @Date: 2022-07-30 10:14:52
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-30 10:17:56
 */

import axios, { AxiosRequestConfig } from 'axios';
import axiosTauriAdapter from 'axios-tauri-adapter';
import qs from 'qs';
import config from './config';

const instance = axios.create({
  // TODO: 修改 baseURL
  baseURL: config.tauriUrl,
  timeout: 60 * 1000,
  adapter: axiosTauriAdapter,
});

enum ContentType {
  Form = 'application/x-www-form-urlencoded;charset=UTF-8',
}

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    // TODO: 添加拦截
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  },
);

function get(url: string, data: any, config = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params: data, ...config })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function post(
  url: string,
  data: any,
  config?: AxiosRequestConfig<any>,
): Promise<any> {
  return new Promise((resolve, reject) => {
    let newData = data;
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...config?.headers,
    };

    if (ContentType.Form.includes(headers['Content-Type'])) {
      newData = qs.stringify(data);
    }
    instance
      .post(url, newData, {
        ...config,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { get, post };
