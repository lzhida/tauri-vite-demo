/*
 * @Description: tauri tauri 模块
 * @Author: zhidal
 * @Date: 2022-07-16 12:08:47
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:25:40
 */

import { InvokeArgs } from '@tauri-apps/api/tauri';
import tauri from '@tauri-apps/api/tauri';

/**
 * @description: 将设备文件路径转换成 webview 可以加载的 url
 * @param {string} filePath 文件路径
 * @param {string} protocol 协议
 * @return {string}
 */
function convertFileSrc(filePath: string, protocol: string): string {
  return tauri.convertFileSrc(filePath, protocol);
}

/**
 * @description: 发送一个消息到后端
 * @param {string} cmd
 * @param {InvokeArgs} args
 * @return {*}
 */
function invoke<T>(cmd: string, args?: InvokeArgs): Promise<T> {
  return tauri.invoke(cmd, args);
}

/**
 * @description: 将回调函数转换成后端可以调用的字符串
 * @param {function} callback
 * @param {boolean} once
 * @return {number}
 */
function transformCallback(
  callback?: (response: any) => void,
  once?: boolean,
): number {
  return tauri.transformCallback(callback, once);
}

export { convertFileSrc, invoke, transformCallback };
export default tauri;
