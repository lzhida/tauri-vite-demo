<!--
 * @Description: IPC 通信示例
 * @Author: zhidal
 * @Date: 2022-07-18 14:10:23
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-20 15:16:52
-->

<template>
  <div>
    <el-button type="primary" @click="handleInvoke">调用invoke</el-button>
    <el-button type="primary" @click="handleAvaiablePorts">
      获取串口列表
    </el-button>
    <el-button type="primary" @click="handleOpen"> 创建串口 </el-button>
    <el-button type="primary" @click="handleClose"> 关闭串口 </el-button>
    <el-button type="primary" @click="handleWrite"> 写入串口 </el-button>
    <el-button type="primary" @click="handleRead"> 读取串口 </el-button>
    <el-button type="primary" @click="handleListen">
      添加读取串口监听
    </el-button>
    <div>
      <el-select v-model="path">
        <el-option v-for="item in pathList" :key="item" :value="item">
          {{ item }}
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { invoke } from '@tauri-apps/api/tauri';
  import { appWindow } from '@tauri-apps/api/window';
  import { ref } from 'vue';

  const path = ref('COM6');
  const baudRate = ref(9600);
  const readListen = ref<any>();
  const pathList = ref<any>([]);

  const handleInvoke = async () => {
    const res = await invoke('plugin:awesome|do_something');
    console.log('invoke', res);
  };

  const handleAvaiablePorts = async () => {
    const res = await invoke('plugin:serialport_handler|available_ports');
    console.log('串口列表 ', res);
    pathList.value = res;
  };

  const handleOpen = async () => {
    try {
      const res = await invoke('plugin:serialport_handler|open', {
        path: path.value,
        baudRate: baudRate.value,
      });
      console.log('open >>>', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = async () => {
    try {
      const res = await invoke('plugin:serialport_handler|close', {
        path: path.value,
      });
      console.log('关闭串口', res);
    } catch (error) {
      console.error(error);
    }
  };
  const handleWrite = async () => {
    try {
      const res = await invoke('plugin:serialport_handler|write', {
        path: path.value,
        value: 'TEST',
      });
      console.log('写入串口', res);
    } catch (error) {
      console.error(error);
    }
  };
  const handleRead = async () => {
    try {
      const res = await invoke('plugin:serialport_handler|read', {
        path: path.value,
      });
      console.log('读取串口', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleListen = async () => {
    try {
      if (readListen.value) {
        readListen.value();
      }
      readListen.value = await appWindow.listen(
        'serialport-read',
        ({ event, payload }) => {
          console.log('读取串口数据', event, payload);
        },
      );
    } catch (error) {
      console.error(error);
    }
  };
</script>
<style lang="less" scoped></style>
