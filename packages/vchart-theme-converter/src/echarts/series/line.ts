import type { ITheme } from '@visactor/vchart';

import { convertThemeTokenItem } from '../../util/token';
import { areaStyleMap, labelStyleMap, lineStyleMap, symbolStyleMap } from '../convertMap';
import type { IEChartsTheme } from '..';
import { convertToItemStyle, convertToVChartGraphicStyle } from '../utils';

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
      const symbolSize = convertThemeTokenItem(style.size, theme);
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

export function toVChartLine(lineSeries: IEChartsTheme): ITheme['series']['line'] {
  if (!lineSeries) {
    return {};
  }

  const { lineStyle = {}, areaStyle = {}, itemStyle = {}, labelStyle = {} } = lineSeries;
  const { symbol = 'circle', symbolSize, smooth, step, showSymbol } = lineSeries;

  const line = {
    style: {
      ...convertToVChartGraphicStyle(lineStyle, lineStyleMap),
      curveType:
        smooth === true
          ? 'monotone'
          : (step => {
              switch (step) {
                case 'middle':
                  return 'step';
                case 'end':
                  return 'stepAfter';
                case 'start':
                  return 'stepBefore';
                default:
                  return 'linear';
              }
            })(step)
    }
  };

  const area = {
    style: {
      ...convertToVChartGraphicStyle(areaStyle, areaStyleMap),
      curveType:
        smooth === true
          ? 'monotone'
          : (step => {
              switch (step) {
                case 'middle':
                  return 'step';
                case 'end':
                  return 'stepAfter';
                case 'start':
                  return 'stepBefore';
                default:
                  return 'linear';
              }
            })(step)
    }
  };

  const point = {
    visible: showSymbol,
    style: {
      ...convertToVChartGraphicStyle(itemStyle, symbolStyleMap),
      symbolType: symbol === 'emptyCircle' ? 'circle' : symbol,
      fill: symbol === 'emptyCircle' ? 'white' : null,
      stroke: symbol === 'emptyCircle' ? null : undefined,
      size: symbolSize
    }
  };

  const label = {
    position: labelStyle?.position,
    style: {
      ...convertToVChartGraphicStyle(labelStyle, labelStyleMap)
    }
  };
  // @ts-ignore
  return { line, point, label, area };
}