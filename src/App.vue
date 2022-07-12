<template>
  <el-config-provider :locale="locale">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </el-config-provider>
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HelloWorld from './components/HelloWorld.vue';
  import { computed } from 'vue';
  import { i18n } from '@/i18n';
  import zhLocale from 'element-plus/lib/locale/lang/zh-cn';

  const locale = computed(() => {
    if (i18n.global.messages) {
      return i18n.global.messages[i18n.global.locale]?.el;
    } else {
      return zhLocale;
    }
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
