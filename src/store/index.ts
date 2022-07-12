/*
 * @Description: store 配置
 * @Author: zhidal
 * @Date: 2022-07-02 11:59:18
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-02 11:59:20
 */
import type { App } from 'vue';
import { createPinia } from 'pinia';
import { useCommonStore } from './modules/common';

// 应用数据接口
export interface IAppStore {
  useCommonStore: ReturnType<typeof useCommonStore>;
}

// 应用数据实例
const appStore: IAppStore = {} as IAppStore;
const store = createPinia();

/**
 * @description: 注册Store
 * @return {*}
 */
const registerStore = (): void => {
  appStore.useCommonStore = useCommonStore(store);
};

/**
 * @description: 加载Store
 * @param {App} app
 * @return {*}
 */
const useStore = (app: App): void => {
  app.use(store);
};

export { appStore, registerStore, useStore };

export default store;
