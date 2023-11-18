import type {
  IColorSchemeStruct,
  IProgressiveDataSchemeCase,
  ITheme,
  IThemeColorScheme,
  ProgressiveDataScheme
} from '@visactor/vchart';
import { semiDesignDark } from './dark';
import { semiDesignLight } from './light';
import { dataSchemeTokenMap, paletteTokenMap } from './common/token-map';
import { getTokenValue } from './util';
import { isObject } from '@visactor/vutils';

const baseThemeMap = {
  light: semiDesignLight,
  dark: semiDesignDark
};

export const generateVChartSemiTheme = (mode: 'light' | 'dark', chartContainer?: HTMLElement): ITheme => {
  const baseTheme = baseThemeMap[mode];
  const colorScheme: IThemeColorScheme = {
    default: {
      dataScheme: generateDataScheme(mode, chartContainer),
      palette: generatePalette(mode, chartContainer)
    }
  };
  return {
    ...baseTheme,
    colorScheme
  };
};

/** 生成数据色板 */
const generateDataScheme = (mode: 'light' | 'dark', chartContainer?: HTMLElement): ProgressiveDataScheme<string> => {
  const baseTheme = baseThemeMap[mode];
  return dataSchemeTokenMap.map((item, i) => {
    const { scheme } = (baseTheme.colorScheme.default as IColorSchemeStruct).dataScheme[
      i
    ] as IProgressiveDataSchemeCase<string>;
    return {
      ...item,
      scheme: item.scheme.map((token, j) => getTokenValue(token, scheme?.[j], chartContainer))
    };
  });
};

/** 生成语义色板 */
const generatePalette = (mode: 'light' | 'dark', chartContainer?: HTMLElement): any => {
  const baseTheme = baseThemeMap[mode];
  const newPalette = {};
  Object.keys(paletteTokenMap).forEach(key => {
    const token = isObject(paletteTokenMap[key]) ? paletteTokenMap[key][mode] : paletteTokenMap[key];
    newPalette[key] = getTokenValue(
      token,
      (baseTheme.colorScheme.default as IColorSchemeStruct).palette[key],
      chartContainer
    );
  });
  return newPalette;
};
