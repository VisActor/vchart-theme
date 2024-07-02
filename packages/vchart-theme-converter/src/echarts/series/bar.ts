import type { ITheme } from '@visactor/vchart';
import { attributeMap, labelStyleMap } from '../convertMap';
import { convertToItemStyle, convertToVChartGraphicStyle } from '../utils';

export function barSeriesConverter(barSeries: ITheme['series']['bar'], theme: ITheme) {
  if (!barSeries) {
    return {};
  }
  const barTheme = {} as any;
  const { bar, label, barWidth, barMinWidth, barMaxWidth, barBackground } = barSeries;

  if (bar) {
    const { style = {} } = bar;
    barTheme.itemStyle = convertToItemStyle(style, attributeMap, theme);
  }

  if (barBackground) {
    const { style = {} } = barBackground;
    barTheme.backgroundStyle = convertToItemStyle(style, attributeMap, theme);
  }

  barTheme.barWidth = barWidth;
  barTheme.barMinWidth = barMinWidth;
  barTheme.barMaxWidth = barMaxWidth;

  // @ts-ignore
  const { barGapInGroup } = barSeries;
  barTheme.barCategoryGap = barGapInGroup;

  if (label) {
    const { style = {}, position } = label;
    const echartsLabel = convertToItemStyle(style, labelStyleMap, theme);
    barTheme.label = echartsLabel;
    if (position) {
      echartsLabel.position = labelPositionMap[position] ?? position;
    }
  }
  return barTheme;
}

const labelPositionMap = {
  'inside-top': 'insideTop',
  'inside-bottom': 'insideBottom',
  'inside-right': 'insideRight',
  'inside-left': 'insideLeft',
  'top-right': 'topRight',
  'top-left': 'topLeft',
  'bottom-right': 'bottomRight',
  'bottom-left': 'bottomLeft'
};

export function toVChartBar(barSeries: any): ITheme['series']['bar'] {
  if (!barSeries) {
    return {};
  }
  const { itemStyle, labelStyle, barWidth, barMinWidth, barMaxWidth } = barSeries;
  const bar = {
    barWidth: barWidth,
    barMinWidth: barMinWidth,
    barMaxWidth: barMaxWidth,
    style: {
      ...convertToVChartGraphicStyle(itemStyle, attributeMap)
    }
  } as any;

  const label = {
    position: labelStyle?.position ?? 'inside',
    style: {
      ...convertToVChartGraphicStyle(labelStyle, labelStyleMap)
    }
  };
  return { bar, label };
}
