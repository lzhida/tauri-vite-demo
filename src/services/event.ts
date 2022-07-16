/*
 * @Description: tauri event 事件
 * @Author: zhidal
 * @Date: 2022-07-15 16:40:12
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:29:25
 */

import type { EventCallback, UnlistenFn } from '@tauri-apps/api/event';
import tauriEvent from '@tauri-apps/api/event';

/**
 * @description: 发送一个事件到后端
 * @param {string} event
 * @param {unknown} payload
 * @return {Promise<void>}
 */
function emit(event: string, payload: unknown): Promise<void> {
  return tauriEvent.emit(event, payload);
}

/**
 * @description: 监听后端事件
 * @param {string} event
 * @param {EventCallback} handler
 * @return {Promise<UnlistenFn>}
 */
function listen<T>(
  event: string,
  handler: EventCallback<T>,
): Promise<UnlistenFn> {
  return tauriEvent.listen(event, handler);
}

/**
 * @description: 监听一次后端事件
 * @param {string} event
 * @param {EventCallback} handler
 * @return {Promise<UnlistenFn>}
 */
function once<T>(
  event: string,
  handler: EventCallback<T>,
): Promise<UnlistenFn> {
  return tauriEvent.listen(event, handler);
}

export { emit, listen, once };
const event = tauriEvent;
export default event;
