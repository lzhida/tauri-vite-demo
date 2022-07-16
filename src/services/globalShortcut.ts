/*
 * @Description: tauri 全局快捷键
 * @Author: zhidal
 * @Date: 2022-07-16 11:02:53
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:28:06
 */

import { ShortcutHandler } from '@tauri-apps/api/globalShortcut';
import globalshortcut from '@tauri-apps/api/globalShortcut';

/**
 * @description: 检测快捷键是否被注册
 * @param {string} shortcut
 * @return {Promise<boolean>}
 */
function isRegistered(shortcut: string): Promise<boolean> {
  return globalshortcut.isRegistered(shortcut);
}

/**
 * @description: 注册快捷键
 * @param {string} shortcut
 * @param {ShortcutHandler} handler
 * @return {Promise<void>}
 */
function register(shortcut: string, handler: ShortcutHandler): Promise<void> {
  return globalshortcut.register(shortcut, handler);
}

/**
 * @description: 注册所有快捷键
 * @param {string} shortcuts
 * @param {ShortcutHandler} handler
 * @return {Promise<void>}
 */
function registerAll(
  shortcuts: string[],
  handler: ShortcutHandler,
): Promise<void> {
  return globalshortcut.registerAll(shortcuts, handler);
}

/**
 * @description: 取消注册过的快捷键
 * @param {string} shortcut
 * @return {Promise<void>}
 */
function unregister(shortcut: string): Promise<void> {
  return globalshortcut.unregister(shortcut);
}

/**
 * @description: 取消所有注册的快捷键
 * @return {Promise<void>}
 */
function unregisterAll(): Promise<void> {
  return globalshortcut.unregisterAll();
}

export { isRegistered, register, registerAll, unregister, unregisterAll };
export default globalshortcut;
