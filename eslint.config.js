import { defineConfig } from 'eslint/config'

import stylistic from '@stylistic/eslint-plugin'
import tslint from 'typescript-eslint'

export default defineConfig([
  {
    name: 'Common Configuration',
    plugins: {
      'typescript-eslint': tslint,
      '@stylistic': stylistic,
    },
    extends: [
      tslint.configs.recommended,
      tslint.configs.stylistic,
      stylistic.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tslint.parser,
      parserOptions: {},
    },
    rules: {},
  },
  {
    name: 'Generated GraphQL Types',
    files: ['src/graphql/types.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-types': 'off',
    },
  },
])
