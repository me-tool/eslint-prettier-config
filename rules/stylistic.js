/*
 * Stylistic Issues
 * http://eslint.cn/docs/rules/#stylistic-issues
 * https://github.dev/airbnb/javascript/packages/eslint-config-airbnb-base/rules/style.js
 */ module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'], // 是否允许非空数组里面有多余的空格
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }], // 属性强制(小)驼峰法命名
    // 要求或禁止末尾逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': ['error', { before: false, after: true }], // 逗号前后的空格
    // 逗号风格，换行时在行尾
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    'computed-property-spacing': ['error', 'never'], // 禁止在计算属性中使用空格
    'consistent-this': ['error', 'that'], // 如果指定 this 的别名只能是 that
    'eol-last': 'error', // 非空文件末尾至少存在一行空行，(默认) 强制使用换行 (LF)
    'func-call-spacing': ['error', 'never'], // 要求或禁止在函数标识符和其调用之间有空格
    'func-names': 'warn', // 函数表达式必须有名字, 但是在属性或者是闭包的时候往往不需要，Airbnb 是 warn
    'func-style': ['off', 'expression'], // todo:enable 函数风格，(默认) 要求使用函数表达式而不是函数声明
    'id-length': 'off', // 变量名长度
    'id-match': 'off', // 要求标识符匹配特定的正则表达式
    'implicit-arrow-linebreak': ['error', 'beside'], // 强制隐式返回的箭头函数体的位置
    //缩进风格
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],
    'jsx-quotes': ['off', 'prefer-double'], // 强制在 JSX 属性中一致地使用双引号或单引号
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 要求在对象字面量的冒号和值之间存在至少有一个空格
    'keyword-spacing': 'error', // 强制关键字周围空格的一致性
    'linebreak-style': ['error', 'unix'], // Unix 表示 LF，Windows 表示 CRLF
    'lines-around-comment': 'off', // 行前/行后备注
    'max-depth': ['off', 4], //嵌套块深度
    //字符串最大长度
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // 强制最大行数
    'max-lines': ['off', { max: 300, skipBlankLines: true, skipComments: true }],
    // 强制函数最大代码行数
    'max-lines-per-function': [
      'off',
      { max: 50, skipBlankLines: true, skipComments: true, IIFEs: true },
    ],
    'max-nested-callbacks': 'off', //回调嵌套深度
    'max-params': ['off', 3], // 函数最多只能有3个参数
    'max-statements': ['off', 10], // 函数内最多有几个声明
    'max-statements-per-line': ['off', { max: 1 }], // 强制每一行中所允许的最大语句数量
    'multiline-comment-style': 'error', // 强制对多行注释使用特定风格
    'multiline-ternary': ['off', 'never'], // 要求或禁止在三元操作数中间换行
    // 要求构造函数首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],
    'new-parens': 'error', //new时必须加小括号
    'newline-after-var': 'error', //变量声明后是否需要空一行
    'no-array-constructor': 'error', // 禁止使用数组构造器
    'no-bitwise': 'off', // 禁止使用按位运算符
    'no-continue': 'off', // 禁止使用continue
    'no-inline-comments': 'off', // 禁止行内备注
    'no-lonely-if': 'error', // 禁止 else 语句内只有 if 语句
    // 禁止混合使用不同的操作符, 防止逻辑混乱
    'no-mixed-operators': [
      'error',
      {
        // the list of arithmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-multi-assign': 'error', // 禁止连续赋值
    'no-multiple-empty-lines': ['error', { max: 1 }], // 禁止出现多行空行
    'no-negated-condition': 'off', // 禁用否定的表达式
    'no-nested-ternary': 'error', // 禁用嵌套的三元表达式
    'no-new-object': 'error', //禁止使用new Object()
    'no-plusplus': 'off', // 禁止使用++，--
    // 禁用特定的语法
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
      // note: 以下存在争议
      // {
      //   message: 'require is not recommended, use import instead.',
      //   selector: "CallExpression[callee.name='require']",
      // },
      // {
      //   "selector": "CallExpression[callee.type='MemberExpression'] MemberExpression[property.name=/^(copyWithin|fill|pop|push|reverse|shift|sort|splice|unshift)$/]",
      //   "message": "DO NOT CALL MUTATING FUNCTION, THANKS."
      // },
      {
        message: 'Import the source file first.',
        selector:
          "JSXOpeningElement[name.name='img'] JSXAttribute[name.name='src'][value.expression.type!=/^(Identifier|CallExpression)$/]",
      },
    ],
    'no-tabs': 'error', // 禁用 tab
    'no-ternary': 'off', // 禁止使用三目运算符
    'no-trailing-spaces': 'error', // 禁用行尾空格
    // 标识符不能以_开头或结尾
    'no-underscore-dangle': [
      'error',
      { allow: [], allowAfterThis: false, allowAfterSuper: false, enforceInMethodNames: true },
    ],
    'no-unneeded-ternary': 'error', // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-whitespace-before-property': 'error', // 禁止对象字面量中空格
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }], // 强制单个语句的位置
    // 强制大括号内换行符的一致性
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      },
    ],
    'object-curly-spacing': ['error', 'always'], // 要求花括号内有空格 (除了 {})
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }], // 强制将对象的属性放在不同的行上
    'one-var': ['error', 'never'], // 强制函数中的变量要么一起声明要么分开声明
    'one-var-declaration-per-line': ['error', 'always'], // 要求或禁止在变量声明周围换行
    'operator-assignment': ['error', 'always'], // 要求或禁止尽可能地简化赋值操作
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }], // 强制操作符使用一致的换行符
    // 要求或禁止块内填充
    'padded-blocks': [
      'error',
      { blocks: 'never', classes: 'never', switches: 'never' },
      {
        allowSingleLineBlocks: true,
      },
    ],
    // 要求或禁止在语句间填充空行
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: ['var', 'const', 'let', 'class'],
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        next: 'export',
        prev: '*',
      },
    ],
    'prefer-object-spread': 'error', // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }], // 对象字面量中的属性名是否强制双引号
    /*
     * 尽量能使用单引号，
     * "avoidEscape": true，允许 "a string containing 'single' quotes" 的写法
     * "allowTemplateLiterals": false，禁止 const a = `abc` 的写法
     */
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    semi: ['error', 'always'], // 要求或禁止使用分号代替 ASI, always (默认) 要求在语句末尾使用分号
    'semi-spacing': ['error', { after: true, before: false }], //分号前后空格
    'semi-style': ['error', 'last'], // 强制分号的位置
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }], // 要求对象属性按序排列
    'sort-vars': 'off', // 要求同一个声明块中的变量按顺序排列
    'space-before-blocks': 'error', // 强制在块之前使用一致的空格
    // 要求在参数的 ( 前面有一个空格
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'space-in-parens': ['error', 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': 'error', // 要求操作符周围有空格
    'space-unary-ops': ['error', { words: true, nonwords: false, overrides: {} }], //一元运算符的前/后要不要加空格
    // 强制在注释中 // 或 /* 使用一致的空格, // 或 /* 后面必须跟随至少一个空白
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],
    'switch-colon-spacing': ['error', { after: true, before: false }], // 强制在 switch 的冒号左右有空格
    'template-tag-spacing': ['error', 'never'], // 要求或禁止在模板标记和它们的字面量之间有空格
    'unicode-bom': ['error', 'never'], // 要求或禁止 Unicode 字节顺序标记 (BOM)
    'wrap-regex': 'off', // 正则表达式字面量用小括号包起来
  },
};
