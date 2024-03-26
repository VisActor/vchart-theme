import type { IInitVChartVeOThemeOption } from './interface';
import { VChartVeOThemeHelper } from './theme-helper';

export * from './plugin';
export * from './common';
export * from './interface';
export * from './theme-helper';
export * from './theme-map';
export * from './utils/get-theme';

export * from './light';
export * from './dark';

export const initVChartVeOTheme = (options?: IInitVChartVeOThemeOption) => {
  const helper = new VChartVeOThemeHelper(options ?? {});
  helper.init();
  return helper;
};
