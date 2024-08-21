import type { ITheme } from '@visactor/vchart';
import type { IGradientColor } from '../util/color';
import { isObject } from '@visactor/vutils';
import { convertThemeTokenItem } from '../util/token';
import { postProcessors } from './convertMap';
import type { IEChartsTheme } from '.';

/**
 *  vchart => echarts 图元属性转换
 */
export function convertToItemStyle(
  vchartStyle: Record<string, any>,
  convertMap: Record<string, string>,
  theme: ITheme
) {
  if (!vchartStyle) {
    return {};
  }
  const itemStyle = {} as Record<string, any>;
  for (const key in vchartStyle) {
    let styleValue = convertThemeTokenItem(vchartStyle[key], theme);
    if (key === 'fill' && isObject(styleValue)) {
      styleValue = postProcessors.fill(styleValue, itemStyle);
    }
    if (key === 'lineHeight') {
      styleValue = postProcessors.lineHeight(styleValue);
    }
    itemStyle[convertMap[key] ?? key] = styleValue;
  }
  return itemStyle;
}

export function convertGradientColor(color: IGradientColor) {
  if (color.gradient === 'linear') {
    const { gradient, x0, x1, y0, y1, stops } = color;
    return {
      type: gradient,
      x: x0,
      y: y0,
      x2: x1,
      y2: y1,
      colorStops: stops
    };
  } else if (color.gradient === 'radial') {
    // TODO: vchart 还支持 x1/y1/r1，该如何匹配
    const { gradient, x0, r0, y0, stops } = color;
    return {
      type: gradient,
      x: x0,
      y: y0,
      r: r0,
      colorStops: stops
    };
  }

  // conical 渐变 echarts 不支持
  return {};
}

/**
 *  echarts => vchart 图元属性转换
 */

export function convertToVChartGraphicStyle(style: IEChartsTheme, convertMap: Record<string, string>) {
  const vchartStyle = {} as any;
  const map = reverseObject(convertMap);
  for (const key in style) {
    const vchartKey = map[key] ?? key;
    vchartStyle[vchartKey] = style[key];
  }
  return vchartStyle;
}

function reverseObject(obj: Record<string, string>) {
  const reversedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      reversedObj[obj[key]] = key;
    }
  }
  return reversedObj;
}
