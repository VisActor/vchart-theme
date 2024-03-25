import { VChartSemiThemeHelper } from '@visactor/vchart-semi-theme';
import { ttPlatformLight } from './light';
import { ttPlatformDark } from './dark';

export class VChartTTPlatformThemeHelper extends VChartSemiThemeHelper {
  static themeNamePrefix = 'ttPlatform';
  themeNamePrefix = VChartTTPlatformThemeHelper.themeNamePrefix;

  baseTheme = {
    light: ttPlatformLight,
    dark: ttPlatformDark
  };
}
