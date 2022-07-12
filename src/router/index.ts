/*
 * @Description: 路由
 * @Author: zhidal
 * @Date: 2022-04-07 17:35:41
 * @LastEditors: zhidal
 * @LastEditTime: 2022-05-06 16:05:14
 */

import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory('/'),

  routes: routes,
});

export default router;
