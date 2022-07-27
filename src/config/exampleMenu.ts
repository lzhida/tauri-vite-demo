/*
 * @Description: 示例菜单
 * @Author: zhidal
 * @Date: 2022-07-16 15:52:27
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-27 10:11:55
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
];
export default exampleMenu;
