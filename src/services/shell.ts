/*
 * @Description: tauri shell 模块
 * @Author: zhidal
 * @Date: 2022-07-16 12:05:57
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:26:55
 */

import shell from '@tauri-apps/api/shell';

/**
 * @description: 使用系统默认程序或指定程序打开 url 或 path
 * @param {string} path
 * @param {string} openWith
 * @return {*}
 */
function open(path: string, openWith?: string): Promise<void> {
  return shell.open(path, openWith);
}

export { open };
export default shell;
