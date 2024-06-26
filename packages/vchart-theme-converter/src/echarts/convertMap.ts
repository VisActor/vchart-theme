/**
 * File description:
 * 维护 vchart 到 echarts 的属性映射关系
 */

import { isObject, isString } from '@visactor/vutils';

export const attributeMap = {
  fill: 'color',
  fillOpacity: 'opacity',
  stroke: 'borderColor',
  strokeJoin: 'borderJoin',
  strokeCap: 'borderCap',
  lineWidth: 'borderWidth',
  lineDash: 'borderDash'
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
  ...attributeMap
};

export const postProcessors = {
  lineHeight: (lineHeight: string | number, context?: any) => {
    if (isString(lineHeight) && lineHeight.includes('%')) {
      return undefined;
    }
    return lineHeight;
  }
};
