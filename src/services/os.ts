/*
 * @Description: tauri os 模块
 * @Author: zhidal
 * @Date: 2022-07-16 11:51:27
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:27:23
 */

import os from '@tauri-apps/api/os';

/**
 * @description: 获取系统架构
 * @return {Promise<string>}
 */
function arch(): Promise<string> {
  return os.arch();
}

/**
 * @description: 获取系统平台
 * @return {Promise<string>}
 */
function platform(): Promise<string> {
  return os.platform();
}

/**
 * @description: 获取临时文件
 * @return {Promise<string>}
 */
function tempdir(): Promise<string> {
  return os.tempdir();
}

/**
 * @description: 获取系统标识符
 * @return {Promise<string>}
 */
function type(): Promise<string> {
  return os.type();
}

/**
 * @description: 获取系统内核版本
 * @return {Promise<string>}
 */
function version(): Promise<string> {
  return os.version();
}

/**
 * @description: 获取系统行结束换行符
 * @return {string}
 */
function EOL(): string {
  return os.EOL;
}

export { arch, EOL, platform, tempdir, type, version };
export default os;
