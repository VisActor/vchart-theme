import type { IColorSchemeStruct, ITheme, IThemeColorScheme, ProgressiveDataScheme } from '@visactor/vchart';
import { semiDesignDark } from './dark';
import { semiDesignLight } from './light';
import { dataSchemeTokenMap, paletteTokenMap } from './common/token-map';
import { generateDataScheme, generatePalette } from '@visactor/vchart-theme-utils';

const baseThemeMap = {
  light: semiDesignLight,
  dark: semiDesignDark
};

export const generateVChartSemiTheme = (mode: 'light' | 'dark', chartContainer?: HTMLElement): ITheme => {
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
