// eslint.config.mjs
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
  ...nextVitals,
  prettier,

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'node_modules/**',
    'next-env.d.ts',
    'coverage/**',
  ]),

  {
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      '@next/next/no-img-element': 'error',
      'react/react-in-jsx-scope': 'off', // React 17+ JSX transform
      'react/prop-types': 'off', // TypeScript thay thế
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',

      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'import/no-anonymous-default-export': 'warn',
    },
  },
]);
