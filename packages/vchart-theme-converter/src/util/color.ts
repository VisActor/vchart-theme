import type {
  IColorSchemeStruct,
  ITheme as IVChartTheme,
  ProgressiveDataScheme,
  DataSchemeItem,
  ColorScheme,
  IColorKey
} from '@visactor/vchart';
import { isArray, isObject, isString } from '@visactor/vutils';
import { tokenOrPaletteToValue } from './token';

export function convertColorPlatte(colorScheme: IVChartTheme['colorScheme'], token: IVChartTheme['token']): string[] {
  if (!colorScheme) {
    return [];
  }
  // process default
  const { default: defaultColorScheme } = colorScheme;
  if (defaultColorScheme) {
    if (isArray(defaultColorScheme)) {
      // 简单数组配置
      if (!isProgressiveDataScheme(defaultColorScheme)) {
        if (isColorStringArray(defaultColorScheme)) {
          return defaultColorScheme;
        }
        // 处理 palette
        return [];
      }
      // 渐进色板配置
      // ECharts 暂时不支持渐进式色板配置，这里简单取第一项的值
      return (defaultColorScheme as ProgressiveDataScheme<string>)[0].scheme;
    }
  }

  if (isObject(defaultColorScheme)) {
    const { dataScheme } = defaultColorScheme as IColorSchemeStruct;
    if (dataScheme) {
      if (isArray(dataScheme)) {
        // 简单数组配置
        if (!isProgressiveDataScheme(dataScheme)) {
          if (isColorStringArray(dataScheme)) {
            return dataScheme;
          }
          // 处理 palette
          return [];
        }
        // 渐进色板配置
        // ECharts 暂时不支持渐进式色板配置，这里简单取第一项的值
        return (dataScheme as ProgressiveDataScheme<string>)[0].scheme;
      }
    }
  }

  // TODO: 支持不同系列配置不同色板
  return [];
}

function isProgressiveDataScheme(
  dataScheme: IColorSchemeStruct['dataScheme'] | ColorScheme
): dataScheme is ProgressiveDataScheme<DataSchemeItem> {
  return Array.prototype.every.call(dataScheme, color => color.scheme);
}

function isColorStringArray(colorArr: string[] | DataSchemeItem[]): colorArr is string[] {
  return Array.prototype.every.call(colorArr, color => isString(color));
}

// TODO: 引入 vrender 类型？
export type IGradientColor = { gradient: 'linear' | 'radial' | 'conical'; [key: string]: any };

export function convertObjectColor(color: IColorKey | IGradientColor, theme: IVChartTheme) {
  if ('gradient' in color) {
    // TODO: 处理渐变色
    return color;
  }
  return tokenOrPaletteToValue(color, theme);
}
