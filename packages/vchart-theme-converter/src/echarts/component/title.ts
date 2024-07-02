import type { ITheme } from '@visactor/vchart';
import { labelStyleMap } from '../convertMap';
import { convertToItemStyle } from '../utils';

export function titleConverter(component: ITheme['component'], theme: ITheme) {
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
