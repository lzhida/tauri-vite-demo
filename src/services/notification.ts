/*
 * @Description: tauri notification 模块
 * @Author: zhidal
 * @Date: 2022-07-16 11:45:51
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:27:40
 */

import { Permission, Options } from '@tauri-apps/api/notification';
import notification from '@tauri-apps/api/notification';

/**
 * @description: 检测是否有权限发送通知
 * @return {Promise<boolean>}
 */
function isPermissionGranted(): Promise<boolean> {
  return notification.isPermissionGranted();
}

/**
 * @description: 请求发送通知的权限
 * @return {Promise<Permission>}
 */
function requestPermission(): Promise<Permission> {
  return notification.requestPermission();
}

/**
 * @description: 发送通知
 * @param {string | Options} options
 * @return {void}
 */
function sendNotification(options: string | Options): void {
  return notification.sendNotification(options);
}

export { isPermissionGranted, requestPermission, sendNotification };
export default notification;
