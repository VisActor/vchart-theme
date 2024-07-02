import type { ITheme } from '@visactor/vchart';
import { attributeMap, labelBackgroundStyleMap } from '../convertMap';
import { normalizePadding } from '@visactor/vutils';
import { convertToItemStyle } from '../utils';

export function crosshairConverter(component: ITheme['component'], theme: ITheme) {
  const axisPointerTheme = {
    type: 'shadow',
    trigger: 'axis',
    show: true
  } as any;

  const { crosshair } = component;

  if (crosshair) {
    const { xField, bandField } = crosshair;
    const baseConfig = bandField ?? xField;
    if (baseConfig) {
      const { line, label } = baseConfig;
      if (line) {
        const { style = {} } = line;
        const lineStyle = convertToItemStyle(style, attributeMap, theme);
        axisPointerTheme.lineStyle = lineStyle;
        axisPointerTheme.shadowStyle = lineStyle;
      }
      if (label) {
        const { style, visible, labelBackground } = label;
        let echartsLabel = {
          show: visible,
          ...convertToItemStyle(style, attributeMap, theme)
        } as any;

        if (labelBackground) {
          const { padding, style = {} } = labelBackground;
          echartsLabel.padding = normalizePadding(padding);

          echartsLabel = { ...echartsLabel, ...convertToItemStyle(style, labelBackgroundStyleMap, theme) };
        }
        axisPointerTheme.label = echartsLabel;
      }
    }
  }

  return { axisPointer: axisPointerTheme };
}
