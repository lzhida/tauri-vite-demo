<!--
 * @Description: 示例首页
 * @Author: zhidal
 * @Date: 2022-07-16 15:46:09
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 16:46:14
-->

<template>
  <div class="example_body">
    <example-menu></example-menu>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import ExampleMenu from './ExampleMenu.vue';
</script>
<style lang="less" scoped>
  .example_body {
    display: grid;
    grid-template-rows: auto 1fr;
  }
</style>
