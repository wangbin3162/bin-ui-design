import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import skipFormatting from 'eslint-config-prettier/flat'
import pluginOxlint from 'eslint-plugin-oxlint'

export default defineConfig([
  {
    name: 'bin-ui-design/files-to-lint',
    files: ['**/*.{vue,js,mjs,cjs,jsx,ts,mts,cts,tsx}']
  },

  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/es/**',
    '**/lib/**',
    '**/docs/**',
    '**/.pnpm-store/**',
    'demo/**',
    'ai-docs/**'
  ]),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-mutating-props': 'off'
    }
  },

  skipFormatting,
  ...pluginOxlint.configs['flat/recommended']
])
