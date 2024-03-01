import type { IInitVChartSemiThemeOption } from './interface';
import { VChartExtendThemeHelper } from '@visactor/vchart-theme-utils';
import { semiDesignLight } from './light';
import { semiDesignDark } from './dark';
import { dataSchemeTokenMap, paletteTokenMap } from './common/token-map';
import { observeThemeSwitch } from './util';

export class VChartSemiThemeHelper extends VChartExtendThemeHelper {
  themeModeAttribute = 'theme-mode';
  themeNamePrefix = 'semiDesign';

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
        const cacheColorScheme = JSON.stringify(this.generateTheme(mode).colorScheme);
        // 轮询直到监测到主题变化
        let times = 0;
        const timer = setInterval(() => {
          const theme = this.generateTheme(mode);
          if (times > 50 || cacheColorScheme !== JSON.stringify(theme.colorScheme)) {
            this.switchVChartTheme(true, mode, theme);
            clearInterval(timer);
          }
          times++;
        }, 100);
      });
    }
  }
}
