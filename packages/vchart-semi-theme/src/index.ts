import type { IInitVChartSemiThemeOption } from './interface';
import { VChartSemiThemeHelper } from './theme-helper';

export * from './interface';
export * from './theme-helper';
export * from './theme-map';
export * from './light';
export * from './dark';

export const initVChartSemiTheme = (options?: IInitVChartSemiThemeOption) => {
  const helper = new VChartSemiThemeHelper(options ?? {});
  helper.init();
  return helper;
};
