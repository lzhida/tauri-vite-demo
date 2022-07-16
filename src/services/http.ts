/*
 * @Description: tauri http 模块
 * @Author: zhidal
 * @Date: 2022-07-16 11:20:45
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:27:54
 */

import {
  FetchOptions,
  Response,
  ClientOptions,
  Client,
} from '@tauri-apps/api/http';
import http from '@tauri-apps/api/http';

/**
 * @description: 使用默认客户端执行一次 http 请求
 * @param {string} url
 * @param {FetchOptions} options
 * @return {Promise<Response<T>>}
 */
function fetch<T>(url: string, options?: FetchOptions): Promise<Response<T>> {
  return http.fetch(url, options);
}

/**
 * @description: 使用指定配置创建新的客户端
 * @param {ClientOptions} options
 * @return {Promise<Client>}
 */
function getClient(options?: ClientOptions): Promise<Client> {
  return http.getClient(options);
}

export { fetch, getClient };
export default http;
