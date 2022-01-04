module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'no-undef': 2,
    'vue/max-attributes-per-line': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/script-setup-uses-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@components/.*']
      }
    ],
    'vue/html-self-closing': [
      'warn',
      {
        'slot': 'ignore'
      }
    ]
  },
}
