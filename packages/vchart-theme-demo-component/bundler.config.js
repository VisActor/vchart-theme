/**
 * @type {Partial<import('@internal/bundler').Config>}
 */
module.exports = {
  formats: ['cjs', 'es'],
  outputDir: {
    es: 'esm',
    cjs: 'cjs'
  }
};
