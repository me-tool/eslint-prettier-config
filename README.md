# References

> 内容主要是来自下面的地址结合自身工作习惯

1. https://github.com/airbnb/javascript
2. https://github.com/scdt-china/eslint-config-scc
3. https://zhuanlan.zhihu.com/p/366141969

# VSCode

## VSCode Extension

> 为了统一代码格式规范，以及提升代码可读性，推荐安装如下插件
> 下面插件安装均可以在 VScode 自身的插件管理中找到

### 编辑器配置，必须

1.  Prettier
2.  ESLint
3.  EditorConfig for VS Code

### 辅助检查，建议

1.  Code Spell Checker
2.  Error Lens
3.  indent-rainbow
4.  TSLint(如果不使用 TS 可以不安装)

## VScode Settings

> 这里直接贴出对应的属性，可以在 setting 的图形化界面中显示

```json
{
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript, javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    // 会覆盖掉全局的设置
    // 可以针对语言设置不同的  brackets
    // "editor.language.brackets": [],
    // 可以指定 brackets 自定义颜色，因为默认 brackets 颜色是不开启的
    // "editor.language.colorizedBracketPairs": []
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json, jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true,
    "source.fixAll.markdownlint": true,
    "source.fixAll.stylelint": true,
    "source.fixAll.tslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.fontFamily": "Consolas",
  "editor.fontSize": 15,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true
}
```

# 如何使用该项目

## 项目中安装必要依赖

```bash
yarn add @me-tool/eslint-prettier-config --save-dev

#
yarn add eslint prettier husky lint-staged --save-dev
```

## 项目使用引用

```bash
yarn add
```
