/*
 * @Description: 日志模块
 * @Author: zhidal
 * @Date: 2022-07-27 09:46:24
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-27 11:15:46
 */

import { UnlistenFn } from '@tauri-apps/api/event';
import {
  attachConsole,
  debug,
  error,
  info,
  trace,
  warn,
} from 'tauri-plugin-log-api';

class Logger {
  #listener?: UnlistenFn;
  constructor(isShow = true) {
    if (isShow) {
      this.attachConsole();
    }
  }

  async attachConsole() {
    try {
      if (!this.#listener) {
        this.#listener = await attachConsole();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async debug(message: string) {
    return await debug(message);
  }

  async error(message: string) {
    return await error(message);
  }

  async info(message: string) {
    return await info(message);
  }

  async trace(message: string) {
    return await trace(message);
  }

  async warn(message: string) {
    return await warn(message);
  }

  unattachConsole() {
    if (this.#listener) {
      this.#listener();
      this.#listener = undefined;
    }
  }
}

const logger = new Logger();
export default logger;
