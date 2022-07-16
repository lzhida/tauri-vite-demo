<!--
 * @Description: 首页
 * @Author: zhidal
 * @Date: 2022-07-12 10:27:22
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 16:37:54
-->

<template>
  <div class="home_page">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <el-button @click="handleClick">tauri api 示例</el-button>
  </div>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
  import router from '@/router';

  const handleClick = () => {
    console.log('进入示例页面');
    router.push('example');
  };
</script>
<style lang="less" scoped>
  .home_page {
    padding-top: 60px;
    text-align: center;
  }
</style>
