import type { ITheme } from '@visactor/vchart';
import { attributeMap, labelStyleMap } from '../convertMap';
import { isNumber } from '@visactor/vutils';
import { convertToVChartGraphicStyle, convertToItemStyle } from '../utils';

export function toEChartsPie(pieSeries: ITheme['series']['pie'], theme: ITheme) {
  if (!pieSeries) {
    return {};
  }
  const pieTheme = {} as any;
  const { pie, label, innerRadius, outerRadius } = pieSeries;

  const innerRadiusPercent = isNumber(innerRadius) ? `${innerRadius * 100}%` : undefined;
  const outerRadiusPercent = isNumber(outerRadius) ? `${outerRadius * 100}%` : undefined;

  pieTheme.radius = [innerRadiusPercent, outerRadiusPercent];

  if (pie) {
    const { style = {} } = pie;
    pieTheme.itemStyle = convertToItemStyle(style, attributeMap, theme);
  }

  if (label) {
    const { style = {}, position } = label;
    const echartsLabel = convertToItemStyle(style, labelStyleMap, theme);

    if (!style.fill) {
      echartsLabel.color = 'inherit';
    }
    echartsLabel.position = position;
    pieTheme.label = echartsLabel;
  }
  return pieTheme;
}

export function toVChartPie(pieSeries: any): ITheme['series']['pie'] {
  if (!pieSeries) {
    return {};
  }
  const { itemStyle, label: echartsLabel } = pieSeries;
  const pie = {
    style: {
      ...convertToVChartGraphicStyle(itemStyle, attributeMap)
    }
  } as any;

  const label = {
    visible: echartsLabel?.show ?? true,
    position: echartsLabel?.position ?? 'outside',
    style: {
      ...convertToVChartGraphicStyle(echartsLabel, labelStyleMap)
    }
  };
  // outerRadius: 0.9 echarts 默认值
  return { pie, label, outerRadius: 0.9 };
}
