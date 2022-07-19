/*
 * @Description: 路由配置文件
 * @Author: zhidal
 * @Date: 2022-04-07 17:38:03
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-18 14:11:33
 */
import HomePage from '@/views/HomePage.vue';
import { RouteRecordRaw } from 'vue-router';
import ExampleHome from '@/views/Example/ExampleHome.vue';
import ExampleWindow from '@/views/Example/ExampleWindow.vue';
import ExampleIPC from '@/views/Example/ExampleIPC.vue';
import { RouteName, RoutePath } from '@/enums/example';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: RoutePath.Home,
    name: RouteName.Home,
    component: ExampleHome,
    redirect: RoutePath.Window,
    children: [
      {
        path: RoutePath.Window,
        name: RouteName.Window,
        component: ExampleWindow,
      },
      {
        path: RoutePath.IPC,
        name: RouteName.IPC,
        component: ExampleIPC,
      },
    ],
  },
];
export default routes;
