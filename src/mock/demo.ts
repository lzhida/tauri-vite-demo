/*
 * @Description: demo
 * @Author: zhidal
 * @Date: 2022-05-26 15:27:49
 * @LastEditors: zhidal
 * @LastEditTime: 2022-05-26 17:22:13
 */

import { MockMethod } from 'vite-plugin-mock';
import urls from '@/api/urls';

export default [
  // 查询详情
  {
    url: urls.testMock,
    timeout: 1000,
    method: 'get',
    response({ query }: any) {
      return {
        id: parseInt(query.id),
        name: '@cname',
        email: '@email',
        bio: '@cparagraph',
        createdAt: '@datetime',
        updatedAt: '@now',
      };
    },
  },
] as MockMethod[];
