module.exports = {
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['prettier', 'import', 'vue'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:prettier/recommended',
    // 'plugin:vue/vue3-recommended', // Vue.js 3.x.
    'plugin:vue/recommended', // Vue.js 2.x.

    /*
     *  以下为自定义规则，原则是，推荐的 rules 不做修改，只针对未声明的进行配置
     * "off" or 0 - 关闭规则
     * "warn" or 1 - 将规则视为一个警告（不会影响退出码）
     * "error" or 2 - 将规则视为一个错误 (退出码为1)
     */
    ...[
      './rules/best-practices',
      './rules/es6',
      './rules/imports',
      './rules/node',
      './rules/possible-errors',
      './rules/strict',
      './rules/stylistic',
      './rules/variables',
      './rules/vue',
    ].map(require.resolve),
  ],
  parserOptions: {
    ecmaVersion: 2020,
    /*
     * sourceType 有两个值，script 和 module
     * 对于 ES6+ 的语法和用 import / export 的语法必须用 module
     */
    sourceType: 'module',
  },
};
