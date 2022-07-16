/*
 * @Description: tauri process 模块
 * @Author: zhidal
 * @Date: 2022-07-16 12:02:20
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:27:10
 */

import process from '@tauri-apps/api/process';

/**
 * @description: 退出应用
 * @param {number} exitCode
 * @return {Promise<void>}
 */
function exit(exitCode: number): Promise<void> {
  return process.exit(exitCode);
}

/**
 * @description: 重启应用
 * @return {Promise<void>}
 */
function relaunch(): Promise<void> {
  return process.relaunch();
}

export { exit, relaunch };
export default process;
