<!--
 * @Description: IPC 通信示例
 * @Author: zhidal
 * @Date: 2022-07-18 14:10:23
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-19 09:33:24
-->

<template>
  <div>
    <el-button type="primary" @click="handleInvoke">调用invoke</el-button>
    <el-button type="primary" @click="handleAvaiablePorts"
      >获取串口列表</el-button
    >
  </div>
</template>

<script setup lang="ts">
  import { invoke } from '@tauri-apps/api/tauri';

  const handleInvoke = async () => {
    const res = await invoke('plugin:awesome|do_something');
    console.log('invoke', res);
  };

  const handleAvaiablePorts = async () => {
    const res = await invoke('plugin:serialport_handler|avaiable_ports');
    console.log('串口列表 ', res);
  };
</script>
<style lang="less" scoped></style>
