import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // fake browser DOM
    globals: true,
    setupFiles: ['./src/__tests__/setup.tsx'],
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'e2e'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        '.next/',
        '**/*.stories.*',
        '**/index.ts', // barrel exports
        'src/__tests__/',
        '**/*.config.*',
        'src/layout.tsx',
      ],
      include: ['src/**/*.{ts,tsx}'],
      thresholds: {
        // fail CI nếu coverage thấp
        lines: 80,
        functions: 80,
        branches: 70,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
