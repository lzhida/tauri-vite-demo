/*
 * @Description: 路由配置文件
 * @Author: zhidal
 * @Date: 2022-04-07 17:38:03
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-12 10:28:49
 */
import HomePage from '@/views/HomePage.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
];
export default routes;
