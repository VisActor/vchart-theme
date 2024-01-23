import type { ITheme } from '@visactor/vchart';
// eslint-disable-next-line no-duplicate-imports
import VChart from '@visactor/vchart';
import type { IInitVChartSemiThemeOption } from './interface';
import { generateThemeName, getCurrentMode, observeAttribute, observeThemeSwitch } from './util';
import { generateVChartSemiTheme } from './generator';
import { THEME_MODE_ATTRIBUTE } from './common/constants';

export * from './theme-map';
export * from './generator';
export * from './light';
export * from './dark';

export const initVChartSemiTheme = (options?: IInitVChartSemiThemeOption) => {
  const { defaultMode, isWatchingMode = true, isWatchingThemeSwitch = false } = options ?? {};

  switchVChartSemiTheme(false, defaultMode);

  if (isWatchingMode) {
    observeAttribute(document.body, THEME_MODE_ATTRIBUTE, () => switchVChartSemiTheme());
  }
  if (isWatchingThemeSwitch) {
    observeThemeSwitch(() => {
      const mode = getCurrentMode();
      const cacheColorScheme = JSON.stringify(generateVChartSemiTheme(mode).colorScheme);
      // 轮询直到监测到主题变化
      let times = 0;
      const timer = setInterval(() => {
        const theme = generateVChartSemiTheme(mode);
        if (times > 50 || cacheColorScheme !== JSON.stringify(theme.colorScheme)) {
          switchVChartSemiTheme(true, mode, theme);
          clearInterval(timer);
        }
        times++;
      }, 100);
    });
  }
};

export const switchVChartSemiTheme = (force?: boolean, mode?: 'light' | 'dark', theme?: ITheme) => {
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
    VChart.ThemeManager.registerTheme(themeName, theme ?? generateVChartSemiTheme(mode));
  }
  VChart.ThemeManager.setCurrentTheme(themeName);
};
