/*
 * Node.js and CommonJS
 * http://eslint.cn/docs/rules/#nodejs-and-commonjs
 * https://github.dev/airbnb/javascript/packages/eslint-config-airbnb-base/rules/node.js
 */ module.exports = {
  env: {
    // 例如 nodejs 中的 global, process 等
    node: true,
  },
  rules: {
    'callback-return': 'error', // 规定格式回调函数格式("err", "callback", "cb", "next")，且出现错误的时候必须使用 return callback(err) 的形式
    'handle-callback-err': 'off', //nodejs 处理错误
    'no-mixed-requires': ['off', false], // 声明时不能混用声明类型
    'no-new-require': 'error', // 禁止使用new require
    'no-path-concat': 'off', // node中不能使用 __dirname 或 __ filename做路径拼接
    'no-process-env': 'off', // 禁止使用 process.env
    'no-process-exit': 'off', // 禁止使用 process.exit()
    'no-restricted-modules': 'off', // 如果禁用了指定模块，使用就会报错
    'no-sync': 'off', // 禁止使用同步方法
  },
};
