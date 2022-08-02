/*
 * @Description: tauri 更新
 * @Author: zhidal
 * @Date: 2022-08-01 17:32:53
 * @LastEditors: zhidal
 * @LastEditTime: 2022-08-01 19:03:43
 */

import {
  checkUpdate,
  installUpdate,
  onUpdaterEvent,
} from '@tauri-apps/api/updater';
import { relaunch } from '@tauri-apps/api/process';
import { UnlistenFn } from '@tauri-apps/api/event';

class Updater {
  #listen?: UnlistenFn;
  async checkUpdate() {
    return await checkUpdate();
  }

  async installUpdate() {
    return await installUpdate();
  }

  async onUpdaterEvent() {
    const unlisten = await onUpdaterEvent(({ error, status }) => {
      console.log('Update event', error, status);
    });
    this.#listen = unlisten;
  }

  async relaunch() {
    await relaunch();
  }

  async removeListen() {
    if (this.#listen) {
      this.#listen();
      this.#listen = undefined;
    }
  }
}

const updater = new Updater();
export default updater;
