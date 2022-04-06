/*
 * Best Practices
 * http://eslint.cn/docs/rules/#best-practices
 * https://github.dev/airbnb/javascript/packages/eslint-config-airbnb-base/rules/best-practices.js
 */
module.exports = {
  rules: {
    'accessor-pairs': 'off', // 在对象中使用 getter/setter
    'block-scoped-var': 'error', // 块语句中使用var
    complexity: ['error', 6], // 循环复杂度，考虑最小原则拆分，每个块的复杂度不能超过 6
    'consistent-return': 'off', // 总是指定返回值或隐式返回 undefined
    curly: 'error', // 强制所有控制语句使用一致的括号风格，常见会在 if 等块状语言添加 {}
    'default-case': 'error', // switch语句最后必须有default
    'dot-location': ['error', 'property'], // 要求对象属性和点操作符在同一行
    'dot-notation': ['error'], // 使用点操作符替代中括号，如果属性名称是变量不会受到影响
    eqeqeq: 'error', // 要求使用 === 和 !==
    'guard-for-in': 'error', // for in循环要用if语句过滤
    'no-alert': 'warn', // 禁止使用 alert confirm prompt
    'no-caller': 'warn', // 禁止使用 arguments.caller 或 arguments.callee
    'no-div-regex': 'warn', // 不能使用看起来像除法的正则表达式/=foo/
    'no-else-return': 'error', // 如果if语句里面有 return, 后面不能跟 else 语句
    'no-empty-function': 'error', // 禁止出现空函数
    'no-eq-null': 'error', // 禁止对 null 使用 == 或 != 运算符
    'no-eval': 'error', // 禁止使用eval
    // note 存在争议
    'no-extend-native': ['error', { exceptions: ['Object'] }], // 禁止扩展 native 对象, Object 除外
    'no-extra-bind': 'error', // 禁止不必要的 .bind() 调用
    'no-extra-label': 'error', // 禁用不必要的标签
    'no-floating-decimal': 'error', // 禁止省略浮点数中的 0
    'no-implicit-coercion': ['error', { allow: ['!!', '~'] }], // 禁止短符号进行实现类型转换，排出 !!foo 和 ~foo.indexOf(".")
    'no-implied-eval': 'error', // 禁止使用隐式eval
    'no-invalid-this': 'error', //禁止无效的this，只能用在构造器，类，对象字面量
    'no-iterator': 'error', // 禁止使用 __iterator__ 属性
    'no-labels': 'error', // 禁止使用 label
    'no-lone-blocks': 'error', // 禁止不必要的嵌套块
    'no-loop-func': 'error', // 禁止在循环语句中出现包含不安全引用的函数声明
    // 禁止使用魔术数字，魔术数字是在代码中多次出现的没有明确含义的数字，它最好由命名常量取代
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }], // 禁止使用多个空格
    'no-multi-str': 'error', // 字符串不能用\换行
    'no-new': 'error', // 禁止在使用 new 构造一个实例后不赋值, new Person();
    'no-new-func': 'error', // 禁止使用 new Function
    'no-new-wrappers': 'error', // 禁止使用 new 创建包装实例，new String/new Boolean/new Number
    'no-octal-escape': 'error', //禁止使用八进制转义序列
    'no-param-reassign': ['error', { props: true }], // 禁止对函数参数再赋值，对参数的任何属性的修改
    'no-proto': 'error', // 禁止使用 __proto__ 属性
    // 禁止使用对象的某些属性
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-return-assign': 'error', // return 语句中不能有赋值表达式
    'no-return-await': 'error', // 禁用不必要的 return await
    'no-script-url': 'error', // 禁止使用javascript:void(0)
    'no-self-compare': 'error', // 不能比较自身
    'no-sequences': 'error', // 禁用逗号操作符
    'no-throw-literal': 'error', // 禁止抛出字面量错误 throw "error";
    'no-unmodified-loop-condition': 'error', // 禁用一成不变的循环条件, 防止死循环
    'no-unused-expressions': 'error', // 禁止无用表达式
    'no-useless-call': 'error', // 禁止不必要的 .call() 和 .apply()
    'no-useless-concat': 'error', // 禁止没有必要的字符拼接
    'no-useless-return': 'error', // 禁止多余的 return 语句
    'no-void': 'error', // 禁用void操作符
    // 禁用警告注释，不区分大小写，但是区分完整性
    'no-warning-comments': [
      'off',
      {
        terms: ['todo', 'fixme', 'note', 'bug', 'hack', 'info', 'tag', '!', '???', '?'],
        location: 'start',
      },
    ],
    'prefer-named-capture-group': 'off', // 建议在正则表达式中使用命名捕获组
    // 要求使用 Error 对象作为 Promise 拒绝的原因, 且允许调用不带参数的 Promise.reject()
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    radix: 'error', // parseInt 必须指定第二个参数
    'require-await': 'error', // 禁止使用不带 await 表达式的 async 函数
    'require-unicode-regexp': 'off', // 强制在 RegExp 上使用 u 标志
    'vars-on-top': 'error', // var 必须放在作用域顶部
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }], // 需要把立即执行的函数包裹起来
    yoda: 'error', // 禁止尤达条件(字面量在先而变量在第二的位置), if ("red" === color){}
  },
};
