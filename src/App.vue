<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import { i18n } from '@/i18n';
  import zhLocale from 'element-plus/lib/locale/lang/zh-cn';
  import commands from './services/commands';

  const locale = computed(() => {
    if (i18n.global.messages) {
      return i18n.global.messages[i18n.global.locale]?.el;
    } else {
      return zhLocale;
    }
  });

  onMounted(async () => {
    await commands.closeSplashscreen();
  });
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
