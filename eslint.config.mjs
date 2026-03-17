// eslint.config.mjs
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';

const config = [
  ...nextVitals,
  prettier,

  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'node_modules/**',
      'next-env.d.ts',
      'coverage/**',
    ],
  },

  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
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
];

export default config;
