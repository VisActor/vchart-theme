import * as path from 'path';
import localConf from './vite.config.local';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: localConf.port || 3000,
    https: !!process.env.HTTPS,
    open: true
  },
  define: {
    __DEV__: true,
    __VERSION__: JSON.stringify(require('../../../package.json').version)
  },
  plugins: [react(), svgr()],
  resolve: {
    ...localConf?.resolve,
    alias: {
      ...localConf?.resolve?.alias
      //'@visactor/vutils-extension': path.resolve(__dirname, '../../../../vutils-extension/src/index.ts')
    }
  }
});
