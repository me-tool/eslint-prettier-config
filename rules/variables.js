/*
 * Variables
 * http://eslint.cn/docs/rules/#variables
 * https://github.dev/airbnb/javascript/packages/eslint-config-airbnb-base/rules/variables.js
 */
const confusingBrowserGlobals = require('confusing-browser-globals');
module.exports = {
  rules: {
    'init-declarations': 'off', // 声明时必须赋初值
    'no-label-var': 'error', // label 名不能与 var 声明的变量名相同
    // 禁用特定的全局变量
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
    ].concat(confusingBrowserGlobals),
    'no-shadow': 'error', // 禁止catch子句参数与外部作用域变量同名
    'no-undef-init': 'error', // 变量初始化时不能直接给它赋值为 undefined
    'no-undefined': 'off', // 不能使用 undefined
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }], // 禁止在变量定义之前使用它们
  },
};
