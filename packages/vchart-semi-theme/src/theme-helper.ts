import type { IInitVChartSemiThemeOption } from './interface';
import type { IThemeQueryOption } from '@visactor/vchart-theme-utils';
// eslint-disable-next-line no-duplicate-imports
import { VChartExtendThemeHelper } from '@visactor/vchart-theme-utils';
import { semiDesignLight } from './light';
import { semiDesignDark } from './dark';
import { dataSchemeTokenMap, paletteTokenMap } from './common/token-map';
import { observeThemeSwitch } from './util';

export class VChartSemiThemeHelper extends VChartExtendThemeHelper {
  static themeModeAttribute = 'theme-mode';
  static themeNamePrefix = 'semiDesign';
  themeModeAttribute = VChartSemiThemeHelper.themeModeAttribute;
  themeNamePrefix = VChartSemiThemeHelper.themeNamePrefix;

  baseTheme = {
    light: semiDesignLight,
    dark: semiDesignDark
  };

  tokenMap = {
    dataScheme: dataSchemeTokenMap,
    palette: paletteTokenMap
  };

  declare options: IInitVChartSemiThemeOption;

  init() {
    super.init();

    const { isWatchingThemeSwitch = false } = this.options ?? {};

    if (isWatchingThemeSwitch) {
      observeThemeSwitch(() => {
        const mode = this.getCurrentMode();
        const option: IThemeQueryOption = { mode };
        const cacheColorScheme = JSON.stringify(this.generateTheme(option).colorScheme);
        // 轮询直到监测到主题变化
        let times = 0;
        const timer = setInterval(() => {
          const theme = this.generateTheme(option);
          if (times > 50 || cacheColorScheme !== JSON.stringify(theme.colorScheme)) {
            this.switchVChartTheme(true, option, theme);
            clearInterval(timer);
          }
          times++;
        }, 100);
      });
    }
  }
}
