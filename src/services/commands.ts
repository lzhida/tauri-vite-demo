/*
 * @Description: tauri 命令
 * @Author: zhidal
 * @Date: 2022-07-22 17:36:22
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-30 10:28:10
 */

import { invoke } from '@tauri-apps/api/tauri';

class Commands {
  /**
   * @description: 关闭加载屏幕
   * @return {Promise<void>}
   */
  async closeSplashscreen(): Promise<void> {
    try {
      console.log('关闭加载窗口');
      await invoke('close_splashscreen');
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @description: 切换控制台
   * @return {Promise<void>}
   */
  async toggleDevtools(): Promise<void> {
    return await invoke('toggle_devtools');
  }
}

const commands = new Commands();

export default commands;
