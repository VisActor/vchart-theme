import type { ICrosshairTheme, ITheme } from '@visactor/vchart';
import { attributeMap, labelBackgroundStyleMap, lineStyleMap } from '../convertMap';
import { normalizePadding } from '@visactor/vutils';
import { convertToItemStyle, convertToVChartGraphicStyle } from '../utils';
import type { IEChartsTheme } from '..';

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

export function toVChartCrosshair(echartsTheme: IEChartsTheme): Partial<ITheme['component']> {
  if (!echartsTheme) {
    return {};
  }

  const { tooltip = {} } = echartsTheme;
  const { axisPointer } = tooltip;
  // 无法等价转换
  const crosshair: ICrosshairTheme = {
    categoryField: {
      line: { style: convertToVChartGraphicStyle(axisPointer?.lineStyle, lineStyleMap) }
    }
  };

  return { crosshair };
}
