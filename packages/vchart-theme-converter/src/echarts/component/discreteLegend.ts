import type { ITheme } from '@visactor/vchart';
import { labelStyleMap, symbolStyleMap } from '../convertMap';
import { covertThemeItem } from '../../util/token';
import type { IPager } from '@visactor/vchart/esm/component/legend';
import { convertToItemStyle } from '../utils';

export function discreteLegendConverter(component: ITheme['component'], theme: ITheme) {
  const legendTheme = {
    type: 'scroll'
  } as any;
  const { discreteLegend } = component;
  if (discreteLegend) {
    const { item, orient, padding, pager } = discreteLegend;
    if (orient) {
      if (orient === 'left' || orient === 'right') {
        legendTheme.orient = 'vertical';
      } else {
        legendTheme.orient = 'horizontal';
      }
      legendTheme[orient] = orient;
    }
    if (padding) {
      legendTheme.padding = padding;
    }

    if (item) {
      const { label, shape, spaceCol, spaceRow, align } = item;
      if (align) {
        legendTheme.align = align;
      }

      if (spaceCol) {
        legendTheme.itemGap = spaceCol;
      }

      if (label) {
        const { space, style: labelStyle } = label;
        legendTheme.textStyle = convertToItemStyle(labelStyle, labelStyleMap, theme);
      }

      if (shape) {
        const { style, space } = shape;
        legendTheme.itemStyle = convertToItemStyle(style, symbolStyleMap, theme);
        if ('size' in style) {
          legendTheme.itemWidth = legendTheme.itemStyle.size;
          legendTheme.itemHeight = legendTheme.itemStyle.size;
        }
        if ('symbolType' in style) {
          legendTheme.icon = legendTheme.itemStyle.symbolType;
        }
      }

      if (pager) {
        const { textStyle, handler, space } = pager as IPager;
        legendTheme.pageButtonGap = space;
        if (textStyle) {
          legendTheme.pageTextStyle = convertToItemStyle(textStyle, labelStyleMap, theme);
        }

        if (handler) {
          const { space, preShape, nextShape, style = {}, state = {} } = handler;
          legendTheme.pageButtonItemGap = space;
          legendTheme.pageIcons = {
            horizontal: [preShape, nextShape],
            vertical: [preShape, nextShape]
          };
          legendTheme.pageIconColor = covertThemeItem(style.fill, theme);
          legendTheme.pageIconInactiveColor = covertThemeItem(state.disable.fill, theme);
        }
      }
    }
  }

  return { legend: legendTheme };
}
