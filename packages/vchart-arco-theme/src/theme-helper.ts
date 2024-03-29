import type { IInitVChartArcoThemeOption } from './interface';
import type { DataSchemeTokenMap, PaletteTokenMap, ThemeMode } from '@visactor/vchart-theme-utils';
// eslint-disable-next-line no-duplicate-imports
import { VChartExtendThemeHelper } from '@visactor/vchart-theme-utils';
import { arcoDesignLight } from './light';
import { arcoDesignDark } from './dark';
import { getDataSchemeTokenMap, getPaletteTokenMap } from './common/token-map';
import type { ITheme } from '@visactor/vchart';

export class VChartArcoThemeHelper extends VChartExtendThemeHelper {
  static themeModeAttribute = 'arco-theme';
  static themeNamePrefix = 'arcoDesign';
  themeModeAttribute = VChartArcoThemeHelper.themeModeAttribute;
  themeNamePrefix = VChartArcoThemeHelper.themeNamePrefix;

  baseTheme: Record<ThemeMode, ITheme> = {
    light: arcoDesignLight,
    dark: arcoDesignDark
  };

  declare tokenMap: {
    dataScheme?: DataSchemeTokenMap;
    palette?: PaletteTokenMap;
  };

  declare options: IInitVChartArcoThemeOption;

  constructor(options: IInitVChartArcoThemeOption) {
    super(options);

    const { prefix } = options;
    this.tokenMap = {
      dataScheme: getDataSchemeTokenMap(prefix),
      palette: getPaletteTokenMap(prefix)
    };
  }
}
