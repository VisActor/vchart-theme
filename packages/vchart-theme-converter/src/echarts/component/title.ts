import type { ITheme, ITitleTheme } from '@visactor/vchart';
import { labelStyleMap } from '../convertMap';
import { convertToItemStyle, convertToVChartGraphicStyle } from '../utils';
import type { IEChartsTheme } from '..';

export function toEChartsTitle(component: ITheme['component'], theme: ITheme) {
  if (!component) {
    return {};
  }

  const titleTheme = {} as any;
  const { title } = component;

  if (title) {
    const { textStyle: vchartTextStyle, subtextStyle: vchartSubTextStyle } = title;
    if (vchartTextStyle) {
      titleTheme.textStyle = convertToItemStyle(vchartTextStyle, labelStyleMap, theme);
    }

    if (vchartSubTextStyle) {
      titleTheme.subtextStyle = convertToItemStyle(vchartSubTextStyle, labelStyleMap, theme);
    }
  }

  return { title: titleTheme };
}

export function toVChartTitle(echartsTheme: IEChartsTheme): Partial<ITheme['component']> {
  if (!echartsTheme) {
    return {};
  }

  const { title: echartsTitle = {} } = echartsTheme;
  const title: ITitleTheme = {
    textStyle: convertToVChartGraphicStyle(echartsTitle.textStyle, labelStyleMap),
    subtextStyle: convertToVChartGraphicStyle(echartsTitle.subtextStyle, labelStyleMap)
  };

  return { title };
}
