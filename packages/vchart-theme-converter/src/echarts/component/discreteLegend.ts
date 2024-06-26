import type { ITheme } from '@visactor/vchart';
import { IDiscreteLegendTheme } from '@visactor/vchart';
import { labelStyleMap, postProcessors, symbolStyleMap } from '../convertMap';
import { covertThemeItem } from '../../util/token';
import type { IPager } from '@visactor/vchart/esm/component/legend';

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
        legendTheme.textStyle = {};
        for (const key in labelStyle) {
          let style = covertThemeItem(labelStyle[key], theme);
          if (key === 'lineHeight') {
            style = postProcessors[key](style);
          }
          legendTheme.textStyle[labelStyleMap[key] ?? key] = style;
        }
      }

      if (shape) {
        const { style, space } = shape;
        legendTheme.itemStyle = {};
        for (const key in style) {
          const styleValue = covertThemeItem(style[key], theme);
          if (key === 'size') {
            legendTheme.itemWidth = styleValue;
            legendTheme.itemHeight = styleValue;
          } else if (key === 'symbolType') {
            legendTheme.icon = styleValue;
          } else {
            legendTheme.itemStyle[symbolStyleMap[key] ?? key] = styleValue;
          }
        }
      }

      if (pager) {
        const { textStyle, handler, space } = pager as IPager;
        legendTheme.pageButtonGap = space;
        if (textStyle) {
          for (const key in textStyle) {
            let style = covertThemeItem(textStyle[key], theme);
            if (key === 'lineHeight') {
              style = postProcessors[key](style);
            }
            legendTheme.pageTextStyle[labelStyleMap[key] ?? key] = style;
          }
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
