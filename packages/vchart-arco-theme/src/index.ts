import type { ITheme } from '@visactor/vchart';
// eslint-disable-next-line no-duplicate-imports
import { ThemeManager } from '@visactor/vchart';
import type { IInitVChartArcoThemeOption } from './interface';
import { generateThemeName, getCurrentMode, observeAttribute } from './util';
import { generateVChartArcoTheme } from './generator';

export * from './theme-map';
export * from './generator';
export * from './light';
export * from './dark';

export const initVChartArcoTheme = (options?: IInitVChartArcoThemeOption) => {
  const { defaultMode, isWatchingMode = true, prefix, themeManager = ThemeManager } = options ?? {};

  switchVChartArcoTheme(themeManager, prefix, false, defaultMode);

  if (isWatchingMode) {
    observeAttribute(document.body, 'arco-theme', () => switchVChartArcoTheme(themeManager, prefix));
  }
};

export const switchVChartArcoTheme = (
  themeManager: typeof ThemeManager,
  prefix?: string,
  force?: boolean,
  mode?: 'light' | 'dark',
  theme?: ITheme
) => {
  if (!mode) {
    mode = getCurrentMode();
  }
  const themeName = generateThemeName(mode);
  if (!force && themeManager.getCurrentTheme() === themeName) {
    return;
  } else if (force) {
    themeManager.removeTheme(themeName);
  }
  if (!themeManager.themeExist(themeName)) {
    themeManager.registerTheme(themeName, theme ?? generateVChartArcoTheme(mode, prefix));
  }
  themeManager.setCurrentTheme(themeName);
};
