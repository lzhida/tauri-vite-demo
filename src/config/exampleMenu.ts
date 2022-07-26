/*
 * @Description: 示例菜单
 * @Author: zhidal
 * @Date: 2022-07-16 15:52:27
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-26 15:25:39
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
];
export default exampleMenu;
