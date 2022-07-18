<!--
 * @Description: window 操作示例
 * @Author: zhidal
 * @Date: 2022-07-16 15:47:15
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-18 10:54:57
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
    <el-button type="primary" @click="handleInnerSize">
      窗口内部大小
    </el-button>
    <el-button type="primary" @click="handleIsDecorated">
      窗口装饰状态
    </el-button>
    <el-button type="primary" @click="handleIsFullscreen">
      窗口是否全屏
    </el-button>
    <el-button type="primary" @click="handleIsMaximized">
      窗口是否最大化
    </el-button>
    <el-button type="primary" @click="handleIsResizable">
      窗口是否可以调整大小
    </el-button>
    <el-button type="primary" @click="handleIsVisible">
      窗口是否可见
    </el-button>
    <el-button type="primary" @click="handleMaximize"> 窗口最大化 </el-button>
    <el-button type="primary" @click="handleMinimize"> 窗口最小化 </el-button>
    <!-- <el-button type="primary" @click="handleOnCloseRequested">
      窗口监听关闭请求
    </el-button> -->
    <!-- <el-button type="primary" @click="handleOnFileDropEvent">
      窗口监听文件拖拽事件
    </el-button> -->
    <!-- <el-button type="primary" @click="handleOnFocusChanged">
      窗口监听焦点改变
    </el-button> -->
    <el-button type="primary" @click="handleOnce"> 窗口监听一次事件 </el-button>
    <el-button type="primary" @click="handleOuterPosition">
      窗口外部位置
    </el-button>
    <el-button type="primary" @click="handleOuterSize">
      窗口外部大小
    </el-button>
    <el-button type="primary" @click="handleRequestUserAttention">
      请求用户注意
    </el-button>
    <el-button type="primary" @click="handleScaleFactor"> 窗口比例 </el-button>
    <el-button type="primary" @click="handleSetAlwaysOnTop">
      总是在最上面
    </el-button>
    <el-button type="primary" @click="handleSetCursorGrab">
      SetCursorGrab
    </el-button>
    <el-button type="primary" @click="handleSetCursorIcon">
      设置游标图标
    </el-button>
    <el-button type="primary" @click="handleSetCursorPosition">
      设置游标位置
    </el-button>
    <el-button type="primary" @click="handleSetCursorVisible">
      设置游标可见
    </el-button>
    <el-button type="primary" @click="handleSetDecorations">
      设置侧栏和边框
    </el-button>
    <el-button type="primary" @click="handleSetFocus"> 设置焦点 </el-button>
    <el-button type="primary" @click="handleSetFullscreen">
      设置全屏
    </el-button>
    <el-button type="primary" @click="handleSetIcon"> 设置图标 </el-button>
    <el-button type="primary" @click="handleSetMaxSize"> 设置最大值 </el-button>
    <el-button type="primary" @click="handleSetMinSize"> 设置最小值 </el-button>
    <el-button type="primary" @click="handleSetPosition"> 设置位置 </el-button>
    <el-button type="primary" @click="handleSetResizable">
      设置可移动性
    </el-button>
    <el-button type="primary" @click="handleSetSize"> 设置大小 </el-button>
    <el-button type="primary" @click="handleSetSkipTaskbar">
      设置任务栏图标
    </el-button>
    <el-button type="primary" @click="handleSetTitle"> 设置标题 </el-button>
    <el-button type="primary" @click="handleShow"> 设置显示 </el-button>
    <el-button type="primary" @click="handleStartDragging">
      开始拖拽
    </el-button>
    <el-button type="primary" @click="handleTheme"> 主题 </el-button>
    <el-button type="primary" @click="handleToggleMaximize">
      切换最大化
    </el-button>
    <el-button type="primary" @click="handleUnmaximize"> 取消最大化 </el-button>
    <el-button type="primary" @click="handleUnminimize"> 取消最小化 </el-button>
    <el-button type="primary" @click="handleGetByLabel">
      通过标签获取窗口
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
    LogicalPosition,
    LogicalSize,
    primaryMonitor,
    WebviewWindow,
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

  const handleInnerSize = async () => {
    const res = await appWindow.innerSize();
    console.log('窗口内容大小', res);
  };

  const handleIsDecorated = async () => {
    const res = await appWindow.isDecorated();
    console.log('窗口装饰状态', res);
  };

  const handleIsFullscreen = async () => {
    const res = await appWindow.isFullscreen();
    console.log('窗口是否全屏', res);
  };

  const handleIsMaximized = async () => {
    const res = await appWindow.isMaximized();
    console.log('窗口是否最大化', res);
  };

  const handleIsResizable = async () => {
    const res = await appWindow.isResizable();
    console.log('窗口是否可以调整大小', res);
  };

  const handleIsVisible = async () => {
    const res = await appWindow.isVisible();
    console.log('窗口是否可见', res);
  };

  const handleMaximize = async () => {
    const res = await appWindow.maximize();
    console.log('窗口最大化', res);
  };

  const handleMinimize = async () => {
    const res = await appWindow.minimize();
    console.log('窗口最小化', res);
  };

  // TODO: 接口不可用
  // const handleOnCloseRequested = async () => {
  //   const res = await appWindow?.onCloseRequested(async (event: any) => {
  //     console.log('监听关闭请求');
  //     event.preventDefault();
  //   });

  //   console.log('窗口监听关闭请求', res);
  // };

  // TODO: 接口不可用
  // const handleOnFileDropEvent = async () => {
  //   const res = await appWindow.onFileDropEvent((event: any) => {
  //     console.log('监听到文件拖拽事件', event);
  //   });

  //   console.log('监听文件拖拽事件', res);
  // };

  const handleOnce = async () => {
    const res = await appWindow.once<null>('once-event', (event) => {
      console.log('once event', event);
    });
    console.log('监听一次事件', res);
    res();
  };

  const handleOuterPosition = async () => {
    const res = await appWindow.outerPosition();
    console.log('窗口外部位置', res);
  };

  const handleOuterSize = async () => {
    const res = await appWindow.outerSize();
    console.log('窗口外部大小', res);
  };

  const handleRequestUserAttention = async () => {
    const res = await appWindow.requestUserAttention(1);
    console.log('窗口请求用户注意', res);
  };

  const handleScaleFactor = async () => {
    const res = await appWindow.scaleFactor();
    console.log('窗口比例', res);
  };

  const handleSetAlwaysOnTop = async () => {
    const res = await appWindow.setAlwaysOnTop(false);
    console.log('窗口一直在上层', res);
  };

  const handleSetCursorGrab = async () => {
    const res = await appWindow.setCursorGrab(true);
    console.log('setCursorGrab', res);
  };

  const handleSetCursorIcon = async () => {
    const res = await appWindow.setCursorIcon('help');
    console.log('设置光标图标', res);
  };

  const handleSetCursorPosition = async () => {
    const res = await appWindow.setCursorPosition(
      new LogicalPosition(600, 300),
    );
    console.log('设置光标位置', res);
  };

  const handleSetCursorVisible = async () => {
    const res = await appWindow.setCursorVisible(true);
    console.log('设置光标可见性', res);
  };

  const handleSetDecorations = async () => {
    const res = await appWindow.setDecorations(false);
    console.log('设置窗口边框', res);
  };

  const handleSetFocus = async () => {
    const res = await appWindow.setFocus();
    console.log('设置窗口焦点', res);
  };

  const handleSetFullscreen = async () => {
    const res = await appWindow.setFullscreen(true);
    console.log('设置全屏', res);
  };

  const handleSetIcon = async () => {
    const res = await appWindow.setIcon('/tauri/awesome.png');
    console.log('设置图标', res);
  };

  const handleSetMaxSize = async () => {
    const res = await appWindow.setMaxSize(new LogicalSize(600, 500));
    console.log('设置窗口最大值', res);
  };

  const handleSetMinSize = async () => {
    const res = await appWindow.setMinSize(new LogicalSize(600, 500));
    console.log('设置窗口最小值', res);
  };

  const handleSetPosition = async () => {
    const res = await appWindow.setPosition(new LogicalPosition(600, 500));
    console.log('设置窗口位置', res);
  };

  const handleSetResizable = async () => {
    const res = await appWindow.setResizable(false);
    console.log('设置可移动性', res);
  };

  const handleSetSize = async () => {
    const res = await appWindow.setSize(new LogicalSize(600, 500));
    console.log('设置窗口大小', res);
  };

  const handleSetSkipTaskbar = async () => {
    const res = await appWindow.setSkipTaskbar(true);
    console.log('设置任务栏窗口', res);
  };

  const handleSetTitle = async () => {
    const res = await appWindow.setTitle('tauri 标题');
    console.log('设置标题', res);
  };

  const handleShow = async () => {
    const res = await appWindow.show();
    console.log('显示窗口', res);
  };

  const handleStartDragging = async () => {
    const res = await appWindow.startDragging();
    console.log('开始拖拽', res);
  };

  const handleTheme = async () => {
    const res = await appWindow.theme();
    console.log('窗口主题', res);
  };

  const handleToggleMaximize = async () => {
    const res = await appWindow.toggleMaximize();
    console.log('切换最大化', res);
  };

  const handleUnmaximize = async () => {
    const res = await appWindow.unmaximize();
    console.log('取消最大化', res);
  };

  const handleUnminimize = async () => {
    const res = await appWindow.unminimize();
    console.log('窗口最小化', res);
  };

  const handleGetByLabel = async () => {
    const res = await WebviewWindow.getByLabel('main');
    console.log('根据标签获取窗口', res);
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
