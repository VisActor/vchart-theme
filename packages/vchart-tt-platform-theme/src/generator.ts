import type { IColorSchemeStruct, ITheme, IThemeColorScheme, ProgressiveDataScheme } from '@visactor/vchart';
import { ttPlatformDark } from './dark';
import { ttPlatformLight } from './light';
import { dataSchemeTokenMap, paletteTokenMap } from './common/token-map';
import { generateDataScheme, generatePalette } from '@visactor/vchart-theme-utils';

const baseThemeMap = {
  light: ttPlatformLight,
  dark: ttPlatformDark
};

export const generateVChartTTPlatformTheme = (mode: 'light' | 'dark', chartContainer?: HTMLElement): ITheme => {
  const baseTheme = baseThemeMap[mode];
  const { dataScheme, palette } = baseTheme.colorScheme.default as IColorSchemeStruct;
  const colorScheme: IThemeColorScheme = {
    default: {
      dataScheme: generateDataScheme(
        mode,
        dataSchemeTokenMap,
        dataScheme as ProgressiveDataScheme<string>,
        chartContainer
      ),
      palette: generatePalette(mode, paletteTokenMap, palette, chartContainer)
    }
  };
  return {
    ...baseTheme,
    colorScheme
  };
};
