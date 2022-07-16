/*
 * @Description: tauri updater 模块
 * @Author: zhidal
 * @Date: 2022-07-16 14:02:41
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:25:26
 */

import type { UpdateResult } from '@tauri-apps/api/updater';
import updater from '@tauri-apps/api/updater';

/**
 * @description: 检测是否有更新
 * @return {Promise<UpdateResult>}
 */
function checkUpdate(): Promise<UpdateResult> {
  return updater.checkUpdate();
}

/**
 * @description: 安装更新
 * @return {Promise<void>}
 */
function installUpdate(): Promise<void> {
  return updater.installUpdate();
}

export { checkUpdate, installUpdate };
export default updater;
