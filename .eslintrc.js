module.exports = {
  root: true,
  /* extends - предназначен для указания конфигурации, с помощью которой мы хотим расширить общую конфигурацию ESLint. */
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',

    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  /* env - это свойство, которое определяет среды, в которых JavaScript должен работать. */
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  rules: {
    // '@typescript-eslint/ban-ts-ignore': ['off'],
    // '@typescript-eslint/camelcase': ['off'],
    // '@typescript-eslint/explicit-function-return-type': ['off'],
    // '@typescript-eslint/interface-name-prefix': ['off'],
    // '@typescript-eslint/no-explicit-any': ['off'],
    // '@typescript-eslint/no-unused-expressions': ['off'],
    // '@typescript-eslint/no-var-requires': ['off'],
    // '@typescript-eslint/no-use-before-define': ['off'],
    // 'comma-dangle': ['error', 'always-multiline'],
    // '@typescript-eslint/explicit-module-boundary-types': ['off'],
    // 'no-async-promise-executor': ['off'],
    // 'no-empty-pattern': ['off'],
    // 'no-undef': ['error'],
    // 'no-var': ['error'],
    // 'object-curly-spacing': ['error', 'always'],
    semi: ['error', 'always'],
    // 'spaced-comment': ['off'],
    // 'no-prototype-builtins': ['off'],
    // 'sort-keys': ['off'],
    'space-before-function-paren': ['off'],
    // camelcase: 'off',
    // quotes: [2, 'single'],
    // indent: ['off'],
    // 'no-unused-vars': ['off'],
    // '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-untyped-public-signature': ['off'],
    '@typescript-eslint/space-in-parens': ['off'],
    'no-use-before-define': ['off'],
    'eslint no-void': ['off'],
    '@typescript-eslint/no-unneeded-ternary': ['off'],

    // 'prettier/prettier': ['error', { singleQuote: true }],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    quotes: [2, 'single'],
    camelcase: 'off',
    '@typescript-eslint/camelcase': ['off'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'latest', // "detect" automatically picks the version you have installed. ("detected")
    },
  },
  parser: '@typescript-eslint/parser',

  /**  */
  globals: {
    window: true,
    ActiveXObject: true,
  },

  /** parserOptions - позволяет задать параметры языку JavaScript, которые мы хотим поддерживать. */
  // parserOptions: {
  //   "ecmaVersion": 6
  // },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
