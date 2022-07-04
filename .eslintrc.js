module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended', // eslint推荐的规则集
    'plugin:vue/vue3-recommended', // vue3基本规则集
    'plugin:@typescript-eslint/recommended', //typescript的规则集
    'plugin:prettier/recommended', // 解决eslint 和 prettier的冲突
  ],
  // 新增，解析vue文件
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // 检查 require 导入
    '@typescript-eslint/no-explicit-any': 'off', // 检查 any 类型
    // 检查 Vue 组件名多单词
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: [],
      },
    ],
  },
};
