/*
 * @Description:
 * @Author: zhidal
 * @Date: 2022-07-12 10:59:54
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-12 11:12:49
 */

import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

const instance = axios.create({
  // TODO: 修改 baseURL
  baseURL: 'http://127.0.0.1:3000',
  timeout: 60 * 1000,
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
