import type { IInitVChartArcoThemeOption } from './interface';
import type { DataSchemeTokenMap, PaletteTokenMap } from '@visactor/vchart-theme-utils';
// eslint-disable-next-line no-duplicate-imports
import { VChartExtendThemeHelper } from '@visactor/vchart-theme-utils';
import { arcoDesignLight } from './light';
import { arcoDesignDark } from './dark';
import { getDataSchemeTokenMap, getPaletteTokenMap } from './common/token-map';

export class VChartArcoThemeHelper extends VChartExtendThemeHelper {
  themeModeAttribute = 'arco-theme';
  themeNamePrefix = 'arcoDesign';

  baseTheme = {
    light: arcoDesignLight,
    dark: arcoDesignDark
  };

  declare tokenMap: {
    dataScheme: DataSchemeTokenMap;
    palette: PaletteTokenMap;
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
