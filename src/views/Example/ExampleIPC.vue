<!--
 * @Description: IPC 通信示例
 * @Author: zhidal
 * @Date: 2022-07-18 14:10:23
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-21 10:13:06
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
  import { ref } from 'vue';
  import SerialportHandler from '@/services/SerialportHandler';

  const path = ref('COM6');
  const baudRate = ref(9600);
  const pathList = ref<any>([]);
  const serialport = ref<SerialportHandler>();

  const handleInvoke = async () => {
    const res = await invoke('plugin:awesome|do_something');
    console.log('invoke', res);
  };

  const handleAvaiablePorts = async () => {
    try {
      const res = await SerialportHandler.available_ports();
      console.log('串口列表 ', res);
      pathList.value = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = async () => {
    try {
      const res = new SerialportHandler({
        path: path.value,
        baudRate: baudRate.value,
      });
      await res.open();
      serialport.value = res;
      console.log('open >>>', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = async () => {
    try {
      const res = await serialport.value?.close();
      console.log('关闭串口', res);
    } catch (error) {
      console.error(error);
    }
  };
  const handleWrite = async () => {
    try {
      const res = await serialport.value?.write('TEST');
      console.log('写入串口', res);
    } catch (error) {
      console.error(error);
    }
  };
  const handleRead = async () => {
    try {
      const res = await serialport.value?.read();
      console.log('读取串口', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleListen = async () => {
    try {
      const res = await serialport.value?.listen((data) => {
        console.log('读取设备信息', data);
      });
      console.log('监听串口数据', res);
    } catch (error) {
      console.error(error);
    }
  };
</script>
<style lang="less" scoped></style>
