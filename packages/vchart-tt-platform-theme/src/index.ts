import type { IInitVChartSemiThemeOption } from '@visactor/vchart-semi-theme';
import { VChartTTPlatformThemeHelper } from './theme-helper';

export * from './theme-helper';
export * from './theme-map';
export * from './light';
export * from './dark';

export const initVChartTTPlatformTheme = (options?: IInitVChartSemiThemeOption) => {
  const helper = new VChartTTPlatformThemeHelper(options ?? {});
  helper.init();
  return helper;
};
