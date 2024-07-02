import type { ITheme } from '@visactor/vchart';
import { covertThemeItem } from '../../util/token';
import { attributeMap, labelStyleMap, postProcessors } from '../convertMap';
import { IGradientColor } from '../../util/color';
import { isNumber, isObject } from '@visactor/vutils';
import { convertToItemStyle } from '../utils';

export function pieSeriesConverter(pieSeries: ITheme['series']['pie'], theme: ITheme) {
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
