// 以下是和 airbnb 的 eslint 保持一致
module.exports = {
  arrowParens: 'always', // 箭头函数如果只有一个参数，添加括号
  endOfLine: 'lf', // 结束行形式
  bracketSpacing: true, // 是否保留对象内侧两端的空格，比如 { foo: bar } 和 {foo:bar} 的区别
  bracketSameLine: true,
  printWidth: 100,
  semi: true,
  quoteProps: 'as-needed', // 对象中的属性使用引号，"as-needed" 只对需要的属性加引号(默认值)
  singleQuote: true,
  jsxSingleQuote: true,
  // 行尾逗号,默认none,可选 none|es5|all
  // es5 包括es5中的数组、对象
  // all 包括函数对象等所有可选
  trailingComma: 'all',
  useTabs: false, // 插入空格而不是 tab
  tabWidth: 2,
  requirePragma: false, // 无需顶部注释即可格式化
  insertPragma: false, // 在已被 prettier 格式化的文件顶部加上标注
  vueIndentScriptAndStyle: true, // 是否对 Vue 文件中 <script> 和 <style> 标签内的代码应用缩进
  htmlWhitespaceSensitivity: 'ignore', // 空格敏感 https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
};
