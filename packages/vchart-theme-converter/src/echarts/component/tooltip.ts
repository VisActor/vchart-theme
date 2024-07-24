import type { ITheme, ITooltipTheme } from '@visactor/vchart';
import { convertThemeTokenItem } from '../../util/token';
import { normalizePadding } from '@visactor/vutils';
import type { IEChartsTheme } from '..';

export function toEChartsTooltip(component: ITheme['component'], theme: ITheme) {
  const tooltipTheme = {} as any;

  const { tooltip } = component;

  if (tooltip) {
    const { panel, shape, titleLabel, keyLabel, valueLabel, spaceRow } = tooltip;
    if (panel) {
      const { padding, backgroundColor, border = {}, shadow } = panel;
      tooltipTheme.padding = normalizePadding(padding);
      tooltipTheme.backgroundColor = convertThemeTokenItem(backgroundColor, theme);
      tooltipTheme.borderColor = convertThemeTokenItem(border.color, theme);
      tooltipTheme.borderRadius = convertThemeTokenItem(border.radius, theme);
      tooltipTheme.borderWidth = convertThemeTokenItem(border.width, theme);
      tooltipTheme.shadowColor = convertThemeTokenItem(shadow?.color, theme);
      tooltipTheme.shadowBlur = convertThemeTokenItem(shadow?.blur, theme);
      tooltipTheme.shadowOffsetX = convertThemeTokenItem(shadow?.x, theme);
      tooltipTheme.shadowOffsetY = convertThemeTokenItem(shadow?.y, theme);
    }

    if (keyLabel) {
      const textStyle = {} as any;
      const { fontSize, fontFamily, fontColor } = keyLabel;
      textStyle.fontSize = convertThemeTokenItem(fontSize, theme);
      textStyle.fontFamily = convertThemeTokenItem(fontFamily, theme);
      textStyle.fontColor = convertThemeTokenItem(fontColor, theme);

      tooltipTheme.textStyle = textStyle;
    }
  }

  return { tooltip: tooltipTheme };
}

export function toVChartTooltip(echartsTheme: IEChartsTheme): Partial<ITheme['component']> {
  if (!echartsTheme) {
    return {};
  }

  const { tooltip: echartsTooltip = {} } = echartsTheme;

  const tooltip: ITooltipTheme = {
    panel: {
      padding: echartsTooltip.padding,
      backgroundColor: echartsTooltip.backgroundColor,
      border: {
        color: echartsTooltip.borderColor,
        radius: echartsTooltip.borderRadius,
        width: echartsTooltip.borderWidth
      },
      // @ts-ignore
      shadow: {
        color: echartsTooltip?.shadowColor,
        blur: echartsTooltip?.shadowBlur,
        x: echartsTooltip?.shadowOffsetX,
        y: echartsTooltip?.shadowOffsetY
      }
    }
    // TODO: label 无法等价转换
  };

  return { tooltip };
}
