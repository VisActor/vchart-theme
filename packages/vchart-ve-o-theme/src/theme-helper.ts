import type { IInitVChartVeOThemeOption } from './interface';
// eslint-disable-next-line no-duplicate-imports
import { VChartArcoThemeHelper } from '@visactor/vchart-arco-theme';
import { veODesignLight } from './light';
import { veODesignDark } from './dark';
import { getDataSchemeTokenMap, getPaletteTokenMap } from './common/token-map';

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

    const { prefix } = options;
    this.tokenMap = {
      dataScheme: getDataSchemeTokenMap(prefix),
      palette: getPaletteTokenMap(prefix)
    };
  }
}
