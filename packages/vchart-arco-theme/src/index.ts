import type { IInitVChartArcoThemeOption } from './interface';
import { VChartArcoThemeHelper } from './theme-helper';

export * from './common';
export * from './interface';
export * from './theme-helper';
export * from './theme-map';
export * from './light';
export * from './dark';

export const initVChartArcoTheme = (options?: IInitVChartArcoThemeOption) => {
  const helper = new VChartArcoThemeHelper(options ?? {});
  helper.init();
  return helper;
};
