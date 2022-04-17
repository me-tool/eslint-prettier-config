/*
 * Possible Errors
 * http://eslint.cn/docs/rules/#possible-errors
 */
module.exports = {
  rules: {
    'no-await-in-loop': 'error', // 禁止在循环中出现 await
    'no-console': 'off', // 禁止使用console
    'no-extra-parens': 'error', // 禁止非必要的括号
    'no-template-curly-in-string': 'error', // 禁止在常规字符串中出现模板字面量占位符语法
  },
};
