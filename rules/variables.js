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
    /**
     * 禁止出现未使用过的变量
     * 1. vars 默认值，检查所有包括全局变量
     * 2. args 默认值，在一个变量使用过之后，在他之前的不做检查之后仍会检查
     * 3. ignoreRestSiblings 默认值，用于进行属性 omit 和解构操作
     * 4. argsIgnorePattern 自定义，以下划线开头的不错检查
     */
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
  },
};
