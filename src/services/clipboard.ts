/*
 * @Description: tauri 剪切板
 * @Author: zhidal
 * @Date: 2022-07-15 16:04:03
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:29:58
 */

import clipboard from '@tauri-apps/api/clipboard';

/**
 * @description: 读取剪切板
 * @return {*}
 */
function readText(): Promise<string | null> {
  return clipboard.readText();
}

/**
 * @description: 写入剪切板
 * @param {string} text
 * @return {*}
 */
function writeText(text: string): Promise<void> {
  return clipboard.writeText(text);
}

export { readText, writeText };
export default clipboard;
