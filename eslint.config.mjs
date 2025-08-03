import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, ts: tseslint, prettier: prettierPlugin },
    extends: ['js/recommended', 'ts/recommended'],
    languageOptions: { globals: globals.node },
    env: {
      node: true,
      jest: true,
    },

    rules: {
      'no-undef': 2,
      'no-shadow': 'off',
      'no-console': 'warn',
      'consistent-return': 'off',
      'import/prefer-default-export': 'off',
      'no-var-requires': 0,
      'no-param-reassign': 0,
      'explicit-function-return-type': 0,
      'class-name-casing': 0,
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'max-lines': [
        'warn',
        { max: 350, skipComments: true, skipBlankLines: true },
      ],
      'class-methods-use-this': 'off',
      camelcase: 'off',
      '@typescript-eslint/camelcase': 'off',
      'no-useless-constructor': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
      ],
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],
    },
  },
  {
    ignores: ['node_modules/*', 'dist/*', 'built/*'],
  },
]);
