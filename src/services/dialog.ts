/*
 * @Description: tauri 目录
 * @Author: zhidal
 * @Date: 2022-07-15 15:47:39
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:29:44
 */

import type {
  MessageDialogOptions,
  OpenDialogOptions,
  SaveDialogOptions,
} from '@tauri-apps/api/dialog';
import dialog from '@tauri-apps/api/dialog';

/**
 * @description: 询问弹窗
 * @param {string} message
 * @param {string} options
 * @return {Promise<boolean>}
 */
function askDialog(
  message: string,
  options?: string | MessageDialogOptions,
): Promise<boolean> {
  return dialog.ask(message, options);
}

/**
 * @description: 确认弹窗
 * @param {string} message
 * @param {string} options
 * @return {Promise<boolean>}
 */
function confirmDialog(
  message: string,
  options?: string | MessageDialogOptions,
): Promise<boolean> {
  return dialog.confirm(message, options);
}

/**
 * @description: 消息弹窗
 * @param {string} message
 * @param {string | MessageDialogOptions} options
 * @return {Promise<void>}
 */
function messageDialog(
  message: string,
  options?: string | MessageDialogOptions,
): Promise<void> {
  return dialog.message(message, options);
}

/**
 * @description: 打开弹窗
 * @param {OpenDialogOptions} options
 * @return {Promise<string | string[] | null>}
 */
function openDialog(
  options?: OpenDialogOptions,
): Promise<string | string[] | null> {
  return dialog.open(options);
}

/**
 * @description: 保存弹窗
 * @param {SaveDialogOptions} options
 * @return {Promise<string>}
 */
function saveDialog(options?: SaveDialogOptions): Promise<string> {
  return dialog.save(options);
}

export { askDialog, confirmDialog, messageDialog, openDialog, saveDialog };
export default dialog;
