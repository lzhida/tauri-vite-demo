<!--
 * @Description: 更新设置
 * @Author: zhidal
 * @Date: 2022-08-01 19:05:00
 * @LastEditors: zhidal
 * @LastEditTime: 2022-08-01 19:12:53
-->

<template>
  <div>
    <el-button @click="handleCheckUpdate">检测更新</el-button>
    <el-button @click="handleInstallUpdate">安装更新</el-button>
    <el-button @click="handleOnListen">监听更新事件</el-button>
    <el-button @click="handleRemoveListen">移除更新事件监听</el-button>
    <el-button @click="handlerelaunch">重启应用</el-button>
  </div>
</template>

<script setup lang="ts">
  import updater from '@/services/updater';

  const handleCheckUpdate = async () => {
    try {
      console.log('检测更新');
      const res = await updater.checkUpdate();
      console.log('res', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInstallUpdate = async () => {
    try {
      console.log('安装更新');
      const res = await updater.installUpdate();
      console.log('res', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnListen = async () => {
    try {
      console.log('监听更新事件');
      const res = await updater.onUpdaterEvent();
      console.log('res', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveListen = async () => {
    try {
      console.log('移除更新事件监听');
      const res = await updater.removeListen();
      console.log('res', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handlerelaunch = async () => {
    try {
      console.log('重启应用');
      const res = await updater.relaunch();
      console.log('res', res);
    } catch (error) {
      console.error(error);
    }
  };
</script>
<style lang="less" scoped></style>
