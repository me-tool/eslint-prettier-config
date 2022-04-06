/*
 * ECMAScript 6
 * http://eslint.cn/docs/rules/#ecmascript-6
 * https://github.dev/airbnb/javascript/packages/eslint-config-airbnb-base/rules/es6.js
 */
module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    'arrow-body-style': 'error', // 要求箭头函数体是否使用大括号，当大括号是可以省略的，强制不使用它们 (默认)
    'arrow-parens': 'error', // 箭头函数用小括号括起来, (默认) 要求在所有情况下使用圆括号将参数括起来
    'arrow-spacing': 'error', // 强制箭头函数的箭头前后使用一致的空格, (默认) 前后都带有空格
    'brace-style': ['error', '1tbs'], // 大括号风格
    'generator-star-spacing': ['error', { before: false, after: true }], // 构造函数中 * 的前后空格，function* generator() {}
    'no-confusing-arrow': ['error', { allowParens: true }], // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-duplicate-imports': 'error', // 禁止重复模块导入
    'no-restricted-imports': ['off', { paths: [], patterns: [] }], // 禁止使用指定的 import 加载的模块
    'no-useless-computed-key': 'error', // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 'error', // 禁用不必要的构造函数
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': [
      'error',
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
    ],
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
    // 要求回调函数使用箭头函数，禁止使用命名的函数作为回调函数或函数参数，禁止在回调中使用 this 属性
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
    // 优先使用数组和对象解构
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: false },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-numeric-literals': 'error', // 禁用 parseInt() 和 Number.parseInt() 去转换二进制，八进制等
    'prefer-reflect': 'off', // 首选Reflect的方法
    'prefer-rest-params': 'error', // 要求使用剩余参数而不是 arguments
    'prefer-spread': 'error', // 要求使用剩余参数而不是 arguments
    'prefer-template': 'error', // 要求使用模板字面量而非字符串连接
    'rest-spread-spacing': ['error', 'never'], // 要求 generator 函数内有 yield
    'sort-imports': ['off'], // 强制模块内的 import 排序，这个被 import 插件替代
    'symbol-description': 'error', // 要求 symbol 描述
    'template-curly-spacing': 'error', // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'yield-star-spacing': ['error', 'after'], // 强制在 yield* 表达式中 * 周围使用空格
  },
};
