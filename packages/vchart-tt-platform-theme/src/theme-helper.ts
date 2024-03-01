import { VChartSemiThemeHelper } from '@visactor/vchart-semi-theme';
import { ttPlatformLight } from './light';
import { ttPlatformDark } from './dark';
import { dataSchemeTokenMap, paletteTokenMap } from './common/token-map';

export class VChartTTPlatformThemeHelper extends VChartSemiThemeHelper {
  themeModeAttribute = 'theme-mode';
  themeNamePrefix = 'ttPlatform';

  baseTheme = {
    light: ttPlatformLight,
    dark: ttPlatformDark
  };

  tokenMap = {
    dataScheme: dataSchemeTokenMap,
    palette: paletteTokenMap
  };
}
