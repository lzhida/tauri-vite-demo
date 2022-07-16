<!--
 * @Description: 示例页面菜单
 * @Author: zhidal
 * @Date: 2022-07-16 15:47:49
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 16:06:36
-->

<template>
  <el-menu
    :default-active="$route.path"
    mode="horizontal"
    :ellipsis="false"
    :router="true"
  >
    <el-menu-item
      v-for="item in exampleMenu"
      :key="item.path"
      :index="item.path"
      >{{ item.label }}</el-menu-item
    >
  </el-menu>
</template>

<script setup lang="ts">
  import exampleMenu from '@/config/exampleMenu';
</script>
<style lang="less" scoped></style>
