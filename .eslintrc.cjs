module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  overrides: [],
  extends: ['plugin:vue/vue3-recommended', '@vue/eslint-config-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: 0,
    'vue/multi-word-component-names': 0
  }
}
