import type { ITheme } from '@visactor/vchart';
import { labelStyleMap, postProcessors } from '../convertMap';
import { covertThemeItem } from '../../util/token';

export function titleConverter(component: ITheme['component'], theme: ITheme) {
  const titleTheme = {} as any;
  const { title } = component;

  if (title) {
    const { textStyle: vchartTextStyle, subtextStyle: vchartSubTextStyle } = title;
    if (vchartTextStyle) {
      const textStyle = {};
      for (const key in vchartTextStyle) {
        let style = covertThemeItem(vchartTextStyle[key], theme);
        if (key === 'lineHeight') {
          style = postProcessors[key](style);
        }
        textStyle[labelStyleMap[key] ?? key] = style;
      }
      titleTheme.textStyle = textStyle;
    }

    if (vchartSubTextStyle) {
      const subtextStyle = {};
      for (const key in vchartSubTextStyle) {
        let style = covertThemeItem(vchartSubTextStyle[key], theme);
        if (key === 'lineHeight') {
          style = postProcessors[key](style);
        }
        subtextStyle[labelStyleMap[key] ?? key] = style;
      }
      titleTheme.subtextStyle = subtextStyle;
    }
  }

  return { title: titleTheme };
}
