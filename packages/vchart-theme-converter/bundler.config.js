/**
 * @type {Partial<import('@dp/bundler').Config>}
 */
module.exports = {
  formats: ['cjs', 'es', 'umd'],
  outputDir: {
    es: 'esm',
    cjs: 'cjs',
    umd: 'build'
  },
  name: 'VChartThemeConverter',
  umdOutputFilename: 'index'
};
