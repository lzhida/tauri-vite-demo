<!--
 * @Description: 日志示例
 * @Author: zhidal
 * @Date: 2022-07-27 10:12:11
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-27 11:16:13
-->

<template>
  <div>
    <el-button @click="handleAttachConsole">添加到控制台</el-button>
    <el-button @click="handleUnattachConsole">取消添加到控制台</el-button>
    <el-button @click="handleDebug">发送 debug 消息</el-button>
    <el-button @click="handleError">发送 error 消息</el-button>
    <el-button @click="handleInfo">发送 info 消息</el-button>
    <el-button @click="handleTrace">发送 trace 消息</el-button>
    <el-button @click="handleWarn">发送 warn 消息</el-button>
  </div>
</template>

<script setup lang="ts">
  import logger from '@/services/logger';
  const handleAttachConsole = () => {
    console.log('日志附加到控制台');
    logger.attachConsole();
  };

  const handleUnattachConsole = () => {
    console.log('取消日志附加到控制台');
    logger.unattachConsole();
  };

  const handleInfo = () => {
    console.log('info 消息');
    logger.info('发送 info 消息到日志');
  };

  const handleDebug = () => {
    console.log('debug 消息');
    logger.debug('发送 debug 消息到日志');
  };

  const handleError = () => {
    console.log('error 消息');
    logger.error('发送 error 消息到日志');
  };

  const handleTrace = () => {
    console.log('trace 消息');
    logger.trace('发送 tarce 消息到日志');
  };

  const handleWarn = () => {
    console.log('warn 消息');
    logger.warn('发送 warn 消息到日志');
  };
</script>
<style lang="less" scoped></style>
