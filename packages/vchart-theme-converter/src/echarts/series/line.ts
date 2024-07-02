import type { ITheme } from '@visactor/vchart';

import { covertThemeItem } from '../../util/token';
import { labelStyleMap, lineStyleMap } from '../convertMap';
import { convertToItemStyle } from '../utils';

export function lineSeriesConverter(lineSeries: ITheme['series']['line'], theme: ITheme) {
  if (!lineSeries) {
    return {};
  }
  const lineTheme = {} as any;
  const { line = {}, label = {}, point = {} } = lineSeries;
  if (line) {
    const { style = {} } = line;
    const lineStyle = convertToItemStyle(style, lineStyleMap, theme);
    if ('curveType' in style) {
      switch (style.curveType) {
        case 'monotone':
        case 'monotoneX':
        case 'monotoneY':
          lineTheme.smooth = true;
          break;
        case 'step':
          lineTheme.step = 'middle';
          break;
        case 'stepAfter':
          lineTheme.step = 'end';
          break;
        case 'stepBefore':
          lineTheme.step = 'start';
      }
    }
    lineTheme.lineStyle = lineStyle;
  }

  if (point) {
    const { style = {} } = point;
    const itemStyle = convertToItemStyle(style, lineStyleMap, theme);
    lineTheme.itemStyle = itemStyle;
    if ('symbolType' in style) {
      lineTheme.symbol = style.symbolType;
    }

    if ('size' in style) {
      const symbolSize = covertThemeItem(style.size, theme);
      lineTheme.symbolSize = symbolSize;
    }
  }

  if (label) {
    const { style = {}, position } = label;
    const echartsLabel = convertToItemStyle(style, labelStyleMap, theme);

    if (!style.fill) {
      echartsLabel.color = 'inherit';
    }
    echartsLabel.position = position;
    lineTheme.label = echartsLabel;
  }

  return lineTheme;
}
