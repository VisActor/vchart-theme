import type { ITheme } from '@visactor/vchart';
// eslint-disable-next-line no-duplicate-imports
import { ThemeManager } from '@visactor/vchart';
import type { IInitVChartSemiThemeOption } from './interface';
import { generateThemeName, getCurrentMode, observeAttribute, observeThemeSwitch } from './util';
import { generateVChartTTPlatformTheme } from './generator';
import { THEME_MODE_ATTRIBUTE } from './common/constants';

export * from './theme-map';
export * from './generator';
export * from './light';
export * from './dark';

export const initVChartTTPlatformTheme = (options?: IInitVChartSemiThemeOption) => {
  const {
    defaultMode,
    isWatchingMode = true,
    isWatchingThemeSwitch = false,
    themeManager = ThemeManager
  } = options ?? {};

  switchVChartSemiTheme(themeManager, false, defaultMode);

  if (isWatchingMode) {
    observeAttribute(document.body, THEME_MODE_ATTRIBUTE, () => switchVChartSemiTheme(themeManager));
  }
  if (isWatchingThemeSwitch) {
    observeThemeSwitch(() => {
      const mode = getCurrentMode();
      const cacheColorScheme = JSON.stringify(generateVChartTTPlatformTheme(mode).colorScheme);
      // 轮询直到监测到主题变化
      let times = 0;
      const timer = setInterval(() => {
        const theme = generateVChartTTPlatformTheme(mode);
        if (times > 50 || cacheColorScheme !== JSON.stringify(theme.colorScheme)) {
          switchVChartSemiTheme(themeManager, true, mode, theme);
          clearInterval(timer);
        }
        times++;
      }, 100);
    });
  }
};

export const switchVChartSemiTheme = (
  themeManager: typeof ThemeManager,
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
    themeManager.registerTheme(themeName, theme ?? generateVChartTTPlatformTheme(mode));
  }
  themeManager.setCurrentTheme(themeName);
};
