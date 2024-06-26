import type { ITheme as IVChartTheme } from '@visactor/vchart';
import { convertObjectColor, convertColorPlatte as convertColorPalette } from '../util/color';
import { isObject, merge } from '@visactor/vutils';
import { convertTextStyle } from './textStyleConverter';
import { convertSeries } from './seriesConverter';
import { convertComponent } from './componentConverter';

type IEChartsTheme = Record<string, any>;

export function VC2EC(vchartTheme: IVChartTheme): IEChartsTheme {
  if (!vchartTheme) {
    return {};
  }

  let echartsTheme: IEChartsTheme = {};

  const { colorScheme, token, background, mark = {}, series, component } = vchartTheme;

  // 1. 色板转换
  const color = convertColorPalette(colorScheme, token);
  if (color) {
    echartsTheme.color = color;
  }

  // 2. 基本转换
  if (background) {
    echartsTheme.backgroundColor = isObject(background) ? convertObjectColor(background, vchartTheme) : background;
  }

  /**
   *   2.1 textStyle
   * 目前已知会影响：数据标签、crosshair 标签、图例标签
   * 确认不会影响：标题、轴标签、tooltip 标签
   */
  echartsTheme.textStyle = convertTextStyle(mark.text?.style, vchartTheme);

  // 1.2 系列色板转换

  // 3. 系列样式转换
  echartsTheme = merge(echartsTheme, convertSeries(series, vchartTheme));

  // 4. 组件转换
  echartsTheme = merge(echartsTheme, convertComponent(component, vchartTheme));

  return echartsTheme;
}
