/*
 * @Description: 常用工具
 * @Author: zhidal
 * @Date: 2022-04-24 17:29:07
 * @LastEditors: zhidal
 * @LastEditTime: 2022-06-27 11:00:50
 */

/**
 * @description: 休眠指定时间
 * @param {number} delay 延迟 delay 秒
 * @return {Promise}
 */
export function sleep(delay: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay * 1000));
}
