import type { ITheme } from '@visactor/vchart';
import { attributeMap, labelStyleMap } from '../convertMap';
import { convertToItemStyle } from '../utils';

export function funnelSeriesConverter(funnelSeries: ITheme['series']['funnel'], theme: ITheme) {
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
