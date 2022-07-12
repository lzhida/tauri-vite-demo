import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

/**
 * @description: 获取环境变量
 * @param {*} mode
 * @param {*} target
 * @return {*}
 */
const getEnvFn = (mode: string, target: string): string => {
  return loadEnv(mode, process.cwd())[target];
};

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js', // 解决 vue-i18n 控制台警告
      },
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteMockServe({
        mockPath: './src/mock', // 存放在 mock 目录下
        localEnabled: getEnvFn(mode, 'VITE_USE_MOCK') === '1', // 开发打包开关
        prodEnabled: getEnvFn(mode, 'VITE_USE_CHUNK_MOCK') === '1', // 生产打包开关
        supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
        watchFiles: true, // 监视文件更改
      }),
    ],
  });
