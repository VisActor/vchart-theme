import type { IColorSchemeStruct, ITheme, IThemeColorScheme, ProgressiveDataScheme } from '@visactor/vchart';
import { arcoDesignDark } from './dark';
import { arcoDesignLight } from './light';
import { getDataSchemeTokenMap, getPaletteTokenMap } from './common/token-map';
import { generateDataScheme, generatePalette } from '@visactor/vchart-theme-utils';

const baseThemeMap = {
  light: arcoDesignLight,
  dark: arcoDesignDark
};

export const generateVChartArcoTheme = (
  mode: 'light' | 'dark',
  prefix?: string,
  chartContainer?: HTMLElement
): ITheme => {
  const baseTheme = baseThemeMap[mode];
  const { dataScheme, palette } = baseTheme.colorScheme.default as IColorSchemeStruct;
  const colorScheme: IThemeColorScheme = {
    default: {
      dataScheme: generateDataScheme(
        mode,
        getDataSchemeTokenMap(prefix),
        dataScheme as ProgressiveDataScheme<string>,
        chartContainer
      ),
      palette: generatePalette(mode, getPaletteTokenMap(prefix), palette, chartContainer)
    }
  };
  return {
    ...baseTheme,
    colorScheme
  };
};
