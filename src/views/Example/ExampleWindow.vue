<!--
 * @Description: window 操作示例
 * @Author: zhidal
 * @Date: 2022-07-16 15:47:15
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 17:38:43
-->

<template>
  <div class="window_example">
    <el-button type="primary" @click="handleAvaiableMonitors">
      获取监视器列表
    </el-button>
    <el-button type="primary" @click="handleCurrentMonitor">
      获取当前监视器
    </el-button>
    <el-button type="primary" @click="handleGetAll">
      获取所有webview
    </el-button>
    <el-button type="primary" @click="handleGetCurrent">
      获取当前webview
    </el-button>
    <el-button type="primary" @click="handlePrimaryMonitor">
      获取主要监视器
    </el-button>
    <el-button type="primary" @click="handleAppWindow">
      获取当前窗口webview
    </el-button>
    <el-button type="primary" @click="handleListen"> 监听窗口事件 </el-button>
    <el-button type="primary" @click="handleLabel"> 窗口标签 </el-button>
    <el-button type="primary" @click="handleListeners">
      窗口listeners
    </el-button>
    <el-button type="primary" @click="handleCenter"> 窗口居中 </el-button>
    <el-button type="primary" @click="handleClose"> 窗口关闭 </el-button>
    <el-button type="primary" @click="handleEmit"> 窗口发送事件 </el-button>
    <el-button type="primary" @click="handleHide"> 窗口隐藏 </el-button>
    <el-button type="primary" @click="handleInnerPositiono">
      窗口内部位置
    </el-button>
  </div>
</template>

<script setup lang="ts">
  import {
    appWindow,
    availableMonitors,
    currentMonitor,
    getAll,
    getCurrent,
    primaryMonitor,
  } from '@tauri-apps/api/window';

  const handleAvaiableMonitors = async () => {
    const list = await availableMonitors();
    console.log('检测器列表', list);
  };

  const handleCurrentMonitor = async () => {
    const res = await currentMonitor();
    console.log('获取当前监视器: ', res);
  };

  const handleGetAll = async () => {
    const res = await getAll();
    console.log('获取所有webview: ', res);
  };

  const handleGetCurrent = async () => {
    const res = await getCurrent();
    console.log('获取当前webview: ', res);
  };

  const handlePrimaryMonitor = async () => {
    const res = await primaryMonitor();
    console.log('获取主要监视器: ', res);
  };

  const handleAppWindow = async () => {
    console.log('获取当前窗口的webview: ', appWindow);
  };

  const handleListen = async () => {
    console.log('添加窗口事件');
    appWindow.listen('my-window-event', ({ event, payload }) => {
      console.log('触发 my-window-event', event, payload);
    });
  };

  const handleLabel = () => {
    console.log('窗口标签: ', appWindow.label);
  };

  const handleListeners = () => {
    console.log('窗口 listeners: ', appWindow.listeners);
  };

  const handleCenter = async () => {
    const res = await appWindow.center();
    console.log('窗口居中: ', res);
  };

  const handleClose = async () => {
    const res = await appWindow.close();
    console.log('窗口关闭: ', res);
  };

  const handleEmit = async () => {
    const res = await appWindow.emit('my-window-event', { test: 'test' });
    console.log('窗口 emit: ', res);
  };

  const handleHide = async () => {
    const res = await appWindow.hide();
    console.log('窗口隐藏: ', res);
  };

  const handleInnerPositiono = async () => {
    const res = await appWindow.innerPosition();
    console.log('窗口内容位置: ', res);
  };
</script>
<style lang="less" scoped>
  .window_example {
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 8px;
  }
</style>
