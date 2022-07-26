<!--
 * @Description: tauri store 示例
 * @Author: zhidal
 * @Date: 2022-07-26 15:25:55
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-26 16:07:17
-->

<template>
  <div>
    <div>
      <el-form>
        <el-form-item label="key">
          <el-input v-model="key"></el-input>
        </el-form-item>
        <el-form-item label="value">
          <el-input v-model="value"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="handleSave">保存配置</el-button>
    <el-button @click="handleLoad">加载配置</el-button>
    <el-button @click="handleSet">修改配置</el-button>
    <el-button @click="handleGet">获取配置</el-button>
    <el-button @click="handleHas">存在配置</el-button>
    <el-button @click="handleDelete">删除配置</el-button>
    <el-button @click="handleClear">清空配置</el-button>
    <el-button @click="handleOnChange">监听配置修改</el-button>
  </div>
</template>

<script setup lang="ts">
  import store from '@/services/store';
  import { ref } from 'vue';

  const key = ref('');
  const value = ref('');

  const handleSet = async () => {
    try {
      console.log('设置', store);
      const res = await store.set(key.value, value.value);
      console.log('修改配置: ', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGet = async () => {
    try {
      console.log('获取变量');
      const res = await store.get(key.value);
      value.value = res as string;
      console.log('获取配置 ', key.value, ': ', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoad = async () => {
    try {
      console.log('加载配置');
      await store.load();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = () => {
    console.log('保存配置');
    store.save();
  };

  const handleHas = async () => {
    try {
      console.log('是否存在配置');
      const res = await store.has(key.value);
      console.log(`配置 ${key.value} 存在: `, res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      console.log('删除配置');
      const res = await store.delete(key.value);
      console.log(`删除 ${key.value} 配置: `, res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = async () => {
    try {
      console.log('清空配置');
      const res = await store.clear();
      console.log('清空配置', res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = async () => {
    try {
      console.log('监听配置修改');
      store.onChange((key: string, value: any) => {
        console.log('监听配置修改 key: ', key, ' value: ', value);
      });
    } catch (error) {
      console.error(error);
    }
  };
</script>
<style lang="less" scoped></style>
