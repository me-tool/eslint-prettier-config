/*
 * Possible Errors
 * http://eslint.cn/docs/rules/#possible-errors
 */
module.exports = {
  rules: {
    'no-await-in-loop': 'error', // 禁止在循环中出现 await
    'no-console': 'off', // 禁止使用console
    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],
    'no-template-curly-in-string': 'error', // 禁止在常规字符串中出现模板字面量占位符语法
  },
};
