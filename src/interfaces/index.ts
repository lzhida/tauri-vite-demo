/*
 * @Description: 接口文件
 * @Author: zhidal
 * @Date: 2022-05-07 09:52:49
 * @LastEditors: zhidal
 * @LastEditTime: 2022-05-07 10:14:23
 */

import { Language } from 'element-plus/lib/locale';

/**
 * @description: 语言选择接口
 */
export interface LanguageOptions {
  el: Language;
  [key: string]: any;
}

/**
 * @description: 语言对象接口
 */
export interface LanguageObject {
  [key: string]: LanguageOptions;
}
