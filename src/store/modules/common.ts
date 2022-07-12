/*
 * @Description: 通用数据
 * @Author: zhidal
 * @Date: 2022-07-01 14:23:11
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-01 14:28:04
 */

import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCommonStore = defineStore('common', () => {
  const testData = ref('');

  const setTestData = (value: string) => {
    testData.value = value;
  };
  return {
    testData,
    setTestData,
  };
});

export { useCommonStore };
