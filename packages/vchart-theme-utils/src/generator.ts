import type { IProgressiveDataSchemeCase, ProgressiveDataScheme } from '@visactor/vchart';
import { getTokenValue } from './utils';
import type { DataSchemeTokenMap, PaletteTokenMap } from './interface';

/** 生成数据色板 */
export const generateDataScheme = (
  mode: 'light' | 'dark',
  tokenMap: DataSchemeTokenMap,
  baseDataScheme: ProgressiveDataScheme<any>,
  chartContainer?: HTMLElement
): ProgressiveDataScheme<string> => {
  return (
    tokenMap?.map((item, i) => {
      const { scheme } = baseDataScheme[i] as IProgressiveDataSchemeCase<string>;
      return {
        ...item,
        scheme: item.scheme.map((token, j) => {
          return getTokenValue(typeof token === 'object' ? token[mode] : token, scheme?.[j], chartContainer);
        })
      };
    }) ?? baseDataScheme
  );
};

/** 生成语义色板 */
export const generatePalette = (
  mode: 'light' | 'dark',
  tokenMap: PaletteTokenMap,
  basePalette: Record<string, any>,
  chartContainer?: HTMLElement
): Record<string, any> => {
  if (tokenMap) {
    const newPalette = {};
    Object.keys(tokenMap).forEach(key => {
      const token = typeof tokenMap[key] === 'object' ? tokenMap[key][mode] : tokenMap[key];
      newPalette[key] = getTokenValue(token, basePalette[key], chartContainer);
    });
    return newPalette;
  }
  return basePalette;
};
