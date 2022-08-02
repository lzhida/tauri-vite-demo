/*
 * @Description: 示例菜单
 * @Author: zhidal
 * @Date: 2022-07-16 15:52:27
 * @LastEditors: zhidal
 * @LastEditTime: 2022-08-01 19:04:36
 */

import { RouteName, RoutePath } from '@/enums/example';

const exampleMenu = [
  {
    path: RoutePath.Window,
    label: RouteName.Window,
  },
  {
    path: RoutePath.IPC,
    label: RouteName.IPC,
  },
  {
    path: RoutePath.Store,
    label: RouteName.Store,
  },
  {
    path: RoutePath.Log,
    label: RouteName.Log,
  },
  {
    path: RoutePath.Update,
    label: RouteName.Update,
  },
];
export default exampleMenu;
