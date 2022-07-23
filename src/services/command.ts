/*
 * @Description: tauri 命令
 * @Author: zhidal
 * @Date: 2022-07-22 17:36:22
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-22 17:40:48
 */

import { invoke } from '@tauri-apps/api/tauri';
async function closeSplashscreen(): Promise<void> {
  try {
    console.log('关闭加载窗口');
    await invoke('close_splashscreen');
  } catch (error) {
    console.error(error);
  }
}

export { closeSplashscreen };
