/* eslint-disable */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-jsx',
    'standard'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'promise', 'import'
  ],
  'rules': {
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["off"],
    'react/jsx-no-undef': 'off',
    'react/jsx-tag-spacing': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/self-closing-comp': 'off',
    'no-useless-constructor': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'space-before-function-paren': 'warn'
  }
}
