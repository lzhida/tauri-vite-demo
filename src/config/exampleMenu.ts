/*
 * @Description: 示例菜单
 * @Author: zhidal
 * @Date: 2022-07-16 15:52:27
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-18 14:10:06
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
];
export default exampleMenu;
