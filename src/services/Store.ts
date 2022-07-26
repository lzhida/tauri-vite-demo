/*
 * @Description: tauri store 封装
 * @Author: zhidal
 * @Date: 2022-07-26 12:07:19
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-26 16:14:26
 */

import { Store as tauriStore } from 'tauri-plugin-store-api';

class Store {
  store: tauriStore;
  constructor() {
    this.store = new tauriStore('config.json');
    this.load();
  }

  async clear() {
    return await this.store.clear();
  }

  async delete(key: string) {
    return await this.store.delete(key);
  }

  async get(key: string) {
    return await this.store.get(key);
  }

  async has(key: string) {
    return await this.store.has(key);
  }

  async load() {
    try {
      await this.store.load();
    } catch (error) {
      if (String(error).includes('os error 2')) {
        await this.defaults();
        return await this.save();
      }
    }
  }

  async onChange(cb: (key: string, value: any) => void) {
    return this.store.onChange(cb);
  }

  async onKeyChange(key: string, cb: (value: any) => void) {
    return this.store.onKeyChange(key, cb);
  }

  async save() {
    return await this.store.save();
  }

  async set(key: string, value: any) {
    return await this.store.set(key, value);
  }

  async defaults() {
    try {
      await this.set('test', 'test');
    } catch (error) {
      console.error(error);
    }
  }
}

const store = new Store();
export default store;
