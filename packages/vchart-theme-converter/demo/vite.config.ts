import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  resolve: {
    alias: {
      '@visactor/vchart-semi-theme': '/Users/bytedance/github/vchart-theme/packages/vchart-semi-theme/src/index.ts',
      '@visactor/vchart-theme-utils': '/Users/bytedance/github/vchart-theme/packages/vchart-theme-utils/src/index.ts'
    }
  }
});
