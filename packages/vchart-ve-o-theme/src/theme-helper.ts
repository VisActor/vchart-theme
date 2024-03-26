import type { ColorSchemeType, IInitVChartVeOThemeOption, IVeOThemeQueryOption } from './interface';
// eslint-disable-next-line no-duplicate-imports
import { VChartArcoThemeHelper } from '@visactor/vchart-arco-theme';
import { veODesignLight } from './light';
import { veODesignDark } from './dark';
import { getPaletteTokenMap } from './common/token-map';
import { getTheme } from './utils/get-theme';
import type { ITheme } from '@visactor/vchart';

export class VChartVeOThemeHelper extends VChartArcoThemeHelper {
  static themeNamePrefix = 'veODesign';
  themeNamePrefix = VChartVeOThemeHelper.themeNamePrefix;

  baseTheme = {
    light: veODesignLight,
    dark: veODesignDark
  };

  declare options: IInitVChartVeOThemeOption;

  constructor(options: IInitVChartVeOThemeOption) {
    super(options);

    const { prefix, colorScheme } = options;
    this.tokenMap = {
      palette: getPaletteTokenMap(prefix)
    };
    this._updateBaseTheme(colorScheme);
  }

  protected _updateBaseTheme(colorScheme?: ColorSchemeType | string) {
    this.baseTheme = {
      light: getTheme('light', colorScheme),
      dark: getTheme('dark', colorScheme)
    };
  }

  generateTheme(option?: IVeOThemeQueryOption, chartContainer?: HTMLElement): ITheme {
    this._updateBaseTheme(option?.colorScheme);
    return super.generateTheme(option, chartContainer);
  }

  switchVChartColorScheme(colorScheme: ColorSchemeType | string): void {
    this.switchVChartTheme(true, { colorScheme } as any);
  }
}
