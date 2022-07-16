/*
 * @Description: tauri window 模块
 * @Author: zhidal
 * @Date: 2022-07-16 14:09:48
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:26:23
 */

import type { Monitor, WebviewWindow } from '@tauri-apps/api/window';
import window from '@tauri-apps/api/window';

/**
 * @description: 获取系统所有可以用的监视器
 * @return {Promise<Monitor[]>}
 */
function availableMonitors(): Promise<Monitor[]> {
  return window.availableMonitors();
}

/**
 * @description: 获取当前监视器
 * @return {Promise<Monitor | null>}
 */
function currentMonitor(): Promise<Monitor | null> {
  return window.currentMonitor();
}

/**
 * @description: 获取所有 webview
 * @return {WebviewWindow[]}
 */
function getAll(): WebviewWindow[] {
  return window.getAll();
}

/**
 * @description: 获取当前 webview
 * @return {WebviewWindow}
 */
function getCurrent(): WebviewWindow {
  return window.getCurrent();
}

/**
 * @description: 获取主要的监视器
 * @return {Promise<Monitor | null>}
 */
function primaryMonitor(): Promise<Monitor | null> {
  return window.primaryMonitor();
}

export {
  availableMonitors,
  currentMonitor,
  getAll,
  getCurrent,
  primaryMonitor,
};

export default window;
