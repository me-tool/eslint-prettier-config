/*
 * vue
 * plugin:eslint-plugin-vue
 * https://eslint.vuejs.org/user-guide/#installation
 */
module.exports = {
  env: {
    browser: true,
  },
  rules: {},
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        /**
         * https://github.com/vuejs/eslint-plugin-vue/issues/352
         * prettier 和 vue/script-indent 中，关于 <script> 标记内都为 indent 为 2，但是 eslint 希望为 0
         */
        indent: 'off',
      },
    },
  ],
};
