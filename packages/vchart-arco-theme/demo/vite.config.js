import { defineConfig } from 'vite';
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
    alias: [{ find: '@', replacement: '/src' }],
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
