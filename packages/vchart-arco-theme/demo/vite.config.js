import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgrPlugin from '@arco-plugins/vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    https: !!process.env.HTTPS,
    open: true,
  },
  define: {
    __DEV__: true,
    __VERSION__: JSON.stringify(require('../package.json').version),
  },
  resolve: {
    alias: {
      '@': '/src',
      '@visactor/vchart-arco-theme': path.resolve(__dirname, '../src/index.ts'),
      '@visactor/vchart-theme-utils': path.resolve(
        __dirname,
        '../../vchart-theme-utils/src/index.ts'
      ),
    },
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {},
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
