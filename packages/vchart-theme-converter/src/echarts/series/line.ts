import type { ITheme } from '@visactor/vchart';

import { covertThemeItem } from '../../util/token';
import { lineStyleMap, symbolStyleMap } from '../convertMap';

export function lineSeriesConverter(lineSeries: ITheme['series']['line'], theme: ITheme) {
  if (!lineSeries) {
    return {};
  }
  const result = {} as any;
  const { line = {}, label = {}, point = {} } = lineSeries;
  if (line) {
    result.lineStyle = {};
    const { style = {} } = line;
    for (const key in style) {
      if (key === 'curveType') {
        const curveType = style[key];
        switch (curveType) {
          case 'monotone':
          case 'monotoneX':
          case 'monotoneY':
            result.smooth = true;
            break;
          case 'step':
            result.step = 'middle';
            break;
          case 'stepAfter':
            result.step = 'end';
            break;
          case 'stepBefore':
            result.step = 'start';
        }
      } else {
        result.lineStyle[lineStyleMap[key]] = covertThemeItem(style[key], theme);
      }
    }
  }

  if (point) {
    result.itemStyle = {};
    const { style = {} } = point;
    for (const key in style) {
      const styleValue = style[key];
      if (key === 'symbolType') {
        result.symbol = styleValue;
      } else if (key === 'size') {
        const symbolSize = covertThemeItem(styleValue, theme);
        result.symbolSize = symbolSize;
      } else {
        const attr = symbolStyleMap[key];
        if (attr) {
          result.itemStyle[symbolStyleMap[key]] = covertThemeItem(styleValue, theme);
        }
      }
    }
  }

  return result;
}
