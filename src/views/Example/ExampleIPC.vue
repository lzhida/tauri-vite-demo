<!--
 * @Description: IPC 通信示例
 * @Author: zhidal
 * @Date: 2022-07-18 14:10:23
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-22 10:39:03
-->

<template>
  <div class="example_window">
    <div>
      <el-form>
        <el-form-item label="串口">
          <el-select v-model="path">
            <el-option v-for="item in pathList" :key="item" :value="item">
              {{ item }}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="波特率">
          <el-select v-model="baudRate">
            <el-option v-for="item in baudRateList" :key="item" :value="item">
              {{ item }}
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="example_btn">
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
    </div>
  </div>
</template>

<script setup lang="ts">
  import { invoke } from '@tauri-apps/api/tauri';
  import { ref } from 'vue';
  import SerialportHandler from '@/services/SerialportHandler';

  const path = ref('COM6');
  const baudRate = ref(115200);
  const pathList = ref<any>([]);
  const baudRateList = ref([9600, 115200]);
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
        // encoding: 'gbk',
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
<style lang="less" scoped>
  .example_window {
    display: grid;
    padding: 8px;
  }

  .example_btn {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-gap: 8px;
    :deep(button) {
      margin-left: 0;
    }
  }
</style>
