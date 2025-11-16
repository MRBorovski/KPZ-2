const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');
const globals = require('globals');
module.exports = [
  { ignores: ['**/*.cjs', 'dist', 'node_modules'] }, // ігноруємо конфіги CJS
  js.configs.recommended, // базові правила JS
  ...tseslint.configs.recommended, // базові правила TS
  prettier, // вимикає правила, що конфліктують із Prettier
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: { ...globals.node },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-unused-vars': 'warn',
    },
  },
];
