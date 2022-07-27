/*
 * @Description: 路由配置文件
 * @Author: zhidal
 * @Date: 2022-04-07 17:38:03
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-27 10:13:16
 */
import HomePage from '@/views/HomePage.vue';
import { RouteRecordRaw } from 'vue-router';
import ExampleHome from '@/views/Example/ExampleHome.vue';
import ExampleWindow from '@/views/Example/ExampleWindow.vue';
import ExampleIPC from '@/views/Example/ExampleIPC.vue';
import ExampleStore from '@/views/Example/ExampleStore.vue';
import ExampleLog from '@/views/Example/ExampleLog.vue';
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
      {
        path: RoutePath.Store,
        name: RouteName.Store,
        component: ExampleStore,
      },
      {
        path: RoutePath.Log,
        name: RouteName.Log,
        component: ExampleLog,
      },
    ],
  },
];
export default routes;
