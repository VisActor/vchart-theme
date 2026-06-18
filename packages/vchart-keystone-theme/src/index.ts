import type { IInitVChartKeystoneThemeOption } from './interface';
import { VChartKeystoneThemeHelper } from './theme-helper';

export * from './common';
export * from './design-tokens';
export * from './interface';
export * from './theme-helper';
export * from './theme-map';
export * from './light';
export * from './dark';

export const initVChartKeystoneTheme = (options?: IInitVChartKeystoneThemeOption) => {
  const helper = new VChartKeystoneThemeHelper(options ?? {});
  helper.init();
  return helper;
};
