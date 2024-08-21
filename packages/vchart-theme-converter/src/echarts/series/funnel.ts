import type { ISeriesTheme, ITheme } from '@visactor/vchart';
import { attributeMap, labelStyleMap } from '../convertMap';
import { convertToItemStyle, convertToVChartGraphicStyle } from '../utils';

export function toEChartsFunnel(funnelSeries: ISeriesTheme['funnel'], theme: ITheme) {
  if (!funnelSeries) {
    return {};
  }
  const funnelStyle = {} as any;
  const { funnel, label } = funnelSeries;

  if (funnel) {
    const { style = {} } = funnel;
    funnelStyle.itemStyle = convertToItemStyle(style, attributeMap, theme);
  }

  if (label) {
    const { style = {} } = label;
    const echartsLabel = convertToItemStyle(style, labelStyleMap, theme);
    if (!style.fill) {
      echartsLabel.color = 'inherit';
    }
    echartsLabel.position = 'inside';
    funnelStyle.label = echartsLabel;
  }
  return funnelStyle;
}

export function toVChartFunnel(funnelSeries: any): ISeriesTheme['funnel'] {
  if (!funnelSeries) {
    return {};
  }
  const { itemStyle, label: echartsLabel } = funnelSeries;
  const funnel = {
    style: {
      ...convertToVChartGraphicStyle(itemStyle, attributeMap)
    }
  } as any;

  const label = {
    visible: echartsLabel?.show ?? false,
    style: {
      ...convertToVChartGraphicStyle(echartsLabel, labelStyleMap)
    }
  };

  return { funnel, label };
}
