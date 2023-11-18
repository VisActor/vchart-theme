import VChart from '@visactor/vchart';
import type { IInitVChartSemiThemeOption } from './interface';
import { generateThemeName, getCurrentMode, observeAttribute } from './util';
import { generateVChartSemiTheme } from './generator';

export * from './theme-map';
export * from './generator';
export * from './light';
export * from './dark';

export const initVChartSemiTheme = (
  options: IInitVChartSemiThemeOption = { isWatchingMode: true, isWatchingThemeSwitch: true }
) => {
  switchVChartSemiTheme(options?.defaultMode);

  if (options?.isWatchingMode) {
    observeAttribute(document.body, 'theme-mode', () => {
      switchVChartSemiTheme();
    });
  }
};

export const switchVChartSemiTheme = (mode?: 'light' | 'dark') => {
  if (!mode) {
    mode = getCurrentMode();
  }
  const themeName = generateThemeName(mode);
  if (!VChart.ThemeManager.themeExist(themeName)) {
    VChart.ThemeManager.registerTheme(themeName, generateVChartSemiTheme(mode));
  }
  VChart.ThemeManager.setCurrentTheme(themeName);
};
