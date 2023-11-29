import localConf from './vite.config.local';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

export default {
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
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill()
      ]
    }
  },
  resolve: {
    ...localConf?.resolve,
    alias: {
      ...localConf?.resolve?.alias
    }
  }
};
