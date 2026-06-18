import type { ITheme } from '@visactor/vchart';
import type { IThemeQueryOption, ThemeMode } from '@visactor/vchart-theme-utils';
// eslint-disable-next-line no-duplicate-imports
import { VChartExtendThemeHelper } from '@visactor/vchart-theme-utils';
import { keystoneDesignDark } from './dark';
import { keystoneDesignLight } from './light';
import type { IInitVChartKeystoneThemeOption } from './interface';

export class VChartKeystoneThemeHelper extends VChartExtendThemeHelper {
  static themeModeAttribute = 'theme-mode';
  static themeNamePrefix = 'keystoneDesign';
  themeModeAttribute = VChartKeystoneThemeHelper.themeModeAttribute;
  themeNamePrefix = VChartKeystoneThemeHelper.themeNamePrefix;

  baseTheme: Record<ThemeMode, ITheme> = {
    light: keystoneDesignLight,
    dark: keystoneDesignDark
  };

  tokenMap = {};

  generateTheme(option?: IThemeQueryOption): ITheme {
    const mode = option?.mode ?? this.getCurrentMode();
    return this.baseTheme[mode];
  }

  declare options: IInitVChartKeystoneThemeOption;

  constructor(options: IInitVChartKeystoneThemeOption) {
    super(options);
  }
}
