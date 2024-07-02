import type { ITheme } from '@visactor/vchart';
import { covertThemeItem } from '../../util/token';
import { normalizePadding } from '@visactor/vutils';

export function tooltipConverter(component: ITheme['component'], theme: ITheme) {
  const tooltipTheme = {} as any;

  const { tooltip } = component;

  if (tooltip) {
    const { panel, shape, titleLabel, keyLabel, valueLabel, spaceRow } = tooltip;
    if (panel) {
      const { padding, backgroundColor, border = {}, shadow } = panel;
      tooltipTheme.padding = normalizePadding(padding);
      tooltipTheme.backgroundColor = covertThemeItem(backgroundColor, theme);
      tooltipTheme.borderColor = covertThemeItem(border.color, theme);
      tooltipTheme.borderRadius = covertThemeItem(border.radius, theme);
      tooltipTheme.borderWidth = covertThemeItem(border.width, theme);
      tooltipTheme.shadowColor = covertThemeItem(shadow?.color, theme);
      tooltipTheme.shadowBlur = covertThemeItem(shadow?.blur, theme);
      tooltipTheme.shadowOffsetX = covertThemeItem(shadow?.x, theme);
      tooltipTheme.shadowOffsetY = covertThemeItem(shadow?.y, theme);
    }

    if (keyLabel) {
      const textStyle = {} as any;
      const { fontSize, fontFamily, fontColor } = keyLabel;
      textStyle.fontSize = covertThemeItem(fontSize, theme);
      textStyle.fontFamily = covertThemeItem(fontFamily, theme);
      textStyle.fontColor = covertThemeItem(fontColor, theme);

      tooltipTheme.textStyle = textStyle;
    }
  }

  return { tooltip: tooltipTheme };
}
