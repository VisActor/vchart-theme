import type { ITheme as IVChartTheme } from '@visactor/vchart';
import { convertObjectColor, convertColorPlatte as convertColorPalette } from '../util/color';
import { isObject, merge } from '@visactor/vutils';
import { convertSeries, toVChartConverter } from './seriesConverter';
import { convertComponent, toVChartComponentConverter } from './componentConverter';
import { convertThemeTokenItem } from '../util/token';
import { convertToItemStyle } from './utils';
import { textStyleMap } from './convertMap';

export type IEChartsTheme = Record<string, any>;

export function vchartToEcharts(vchartTheme: IVChartTheme): IEChartsTheme {
  if (!vchartTheme) {
    return {};
  }

  let echartsTheme: IEChartsTheme = {};

  const { colorScheme, token, background, padding, mark = {}, series, component } = vchartTheme;

  // 1. 色板转换
  const color = convertColorPalette(colorScheme, token);
  if (color) {
    echartsTheme.color = color;
  }

  // 2. 基本转换
  if (background) {
    echartsTheme.backgroundColor = isObject(background) ? convertObjectColor(background, vchartTheme) : background;
  }

  // padding 效果不一致，暂不转换
  // if (padding) {
  //   const _padding = normalizePadding(padding as any);
  //   const grid = {};
  //   const direction = ['top', 'right', 'bottom', 'left'];
  //   _padding.forEach((pad, index) => {
  //     grid[direction[index]] = pad;
  //   });
  //   echartsTheme.grid = grid;
  // }

  /**
   *   2.1 textStyle
   * 目前已知会影响：数据标签、crosshair 标签、图例标签
   * 确认不会影响：标题、轴标签、tooltip 标签
   */
  echartsTheme.textStyle = {
    fontFamily: convertThemeTokenItem(vchartTheme.fontFamily, vchartTheme),
    ...convertToItemStyle(mark.text?.style, textStyleMap, vchartTheme)
  };

  // 3. 系列样式转换
  echartsTheme = merge(echartsTheme, convertSeries(series, vchartTheme));

  // 4. 组件转换
  echartsTheme = merge(echartsTheme, convertComponent(component, vchartTheme));

  return echartsTheme;
}

export function echartsToVChart(echartsTheme: IEChartsTheme, type: 'light' | 'dark' = 'light'): IVChartTheme {
  if (!echartsTheme) {
    return {};
  }

  const vchartTheme: IVChartTheme = { series: {}, component: {} };

  const { color, backgroundColor, textStyle } = echartsTheme;
  // 1. 色板转换
  vchartTheme.colorScheme = { default: { dataScheme: color } };
  // 2. 基本转换
  vchartTheme.type = type;
  vchartTheme.background = backgroundColor;
  vchartTheme.mark = {
    text: {
      style: textStyle
    }
  };

  // 3. 系列转换
  ['line', 'pie', 'bar', 'funnel'].forEach(series => {
    if (echartsTheme[series] && toVChartConverter[series]) {
      vchartTheme.series[series] = toVChartConverter[series](echartsTheme[series]);
      if (series === 'line') {
        vchartTheme.series.area = vchartTheme.series[series];
        // @ts-ignore
        delete vchartTheme.series.line.area;
      }
    }
  });

  // 4. 组件转换
  Object.values(toVChartComponentConverter).forEach(converter => {
    // @ts-ignore
    vchartTheme.component = { ...vchartTheme.component, ...converter(echartsTheme) };
  });

  return vchartTheme;
}
