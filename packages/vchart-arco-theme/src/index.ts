import type { ITheme } from '@visactor/vchart';
// eslint-disable-next-line no-duplicate-imports
import VChart from '@visactor/vchart';
import type { IInitVChartArcoThemeOption } from './interface';
import { generateThemeName, getCurrentMode, observeAttribute } from './util';
import { generateVChartArcoTheme } from './generator';

export * from './theme-map';
export * from './generator';
export * from './light';
export * from './dark';

export const initVChartArcoTheme = (options?: IInitVChartArcoThemeOption) => {
  const { defaultMode, isWatchingMode = true } = options ?? {};

  switchVChartArcoTheme(false, defaultMode);

  if (isWatchingMode) {
    observeAttribute(document.body, 'arco-theme', () => switchVChartArcoTheme());
  }
};

export const switchVChartArcoTheme = (force?: boolean, mode?: 'light' | 'dark', theme?: ITheme) => {
  if (!mode) {
    mode = getCurrentMode();
  }
  const themeName = generateThemeName(mode);
  if (!force && VChart.ThemeManager.getCurrentTheme() === themeName) {
    return;
  } else if (force) {
    VChart.ThemeManager.removeTheme(themeName);
  }
  if (!VChart.ThemeManager.themeExist(themeName)) {
    VChart.ThemeManager.registerTheme(themeName, theme ?? generateVChartArcoTheme(mode));
  }
  VChart.ThemeManager.setCurrentTheme(themeName);
};
