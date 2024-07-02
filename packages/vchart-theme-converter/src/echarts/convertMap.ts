/**
 * File description:
 * 维护 vchart 到 echarts 的属性映射关系
 */

import { isString } from '@visactor/vutils';
import type { IGradientColor } from '../util/color';

export const attributeMap = {
  fill: 'color',
  fillOpacity: 'opacity',
  stroke: 'borderColor',
  strokeJoin: 'borderJoin',
  strokeCap: 'borderCap',
  lineWidth: 'borderWidth',
  lineDash: 'borderDash',
  cornerRadius: 'borderRadius'
};

export const textStyleMap = {
  ...attributeMap,
  stroke: 'textBorderColor',
  lineWidth: 'textBorderWidth',
  textAlign: 'align',
  textBaseline: 'baseline',
  shadowColor: 'textShadowColor',
  shadowBlur: 'textShadowBlur',
  shadowOffsetX: 'textShadowOffsetX',
  shadowOffsetY: 'textShadowOffsetY',
  background: 'backgroundColor',
  boundsPadding: 'padding'
  // not supported
  // 'rich': ,
  // 'tag': ,
  // 'verticalAlign': ,
  // 'borderColor': ,
  // 'borderWidth': ,
  // 'borderRadius': ,
};

export const lineStyleMap = {
  ...attributeMap,
  lineWidth: 'width',
  lineCap: 'cap',
  lineDash: 'type',
  lineJoin: 'join'
  // curveType:'type', curveType 在外层处理
};

export const areaStyleMap = {
  ...attributeMap
  // curveType:'type', curveType 在外层处理
};

export const symbolStyleMap = {
  ...attributeMap
};

export const axisLineStyleMap = {
  ...lineStyleMap,
  stroke: 'color'
};

export const labelStyleMap = {
  ...attributeMap,
  stroke: 'textBorderColor',
  lineWidth: 'textBorderWidth',
  strokeJoin: 'textBorderJoin',
  strokeCap: 'textBorderCap',
  lineDash: 'textBorderDash'
};

export const labelBackgroundStyleMap = {
  fill: 'backgroundColor',
  stroke: 'textBorderColor',
  lineWidth: 'borderWidth'
};

export const rectStyleMap = {
  ...attributeMap
  // curveType:'type', curveType 在外层处理
};

export const postProcessors = {
  lineHeight: (lineHeight: string | number, context?: any) => {
    if (isString(lineHeight) && lineHeight.includes('%')) {
      console.warn('[Converter] percent string `lineHeight` is not supported ');
      return undefined;
    }
    return lineHeight;
  },
  fill: (fill: Record<string, any>, itemStyle: Record<string, any>) => {
    if ('gradient' in (fill as IGradientColor)) {
      console.warn('[Converter] gradient color is not supported ');
      delete itemStyle.color;
      itemStyle.opacity = 0.1;
      return undefined;
    }
    return fill;
  }
};
