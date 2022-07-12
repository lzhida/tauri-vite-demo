/*
 * @Description: api 请求
 * @Author: zhidal
 * @Date: 2022-07-12 11:01:35
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-12 11:06:30
 */

import { get } from './http';
import urls from './urls';

/**
 * @description: mock 测试链接
 * @param {any} data
 * @return {*}
 */
export async function testMock(data: any) {
  return await get(urls.testMock, data);
}
