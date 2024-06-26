import type { ITextMarkSpec, ITheme } from '@visactor/vchart';
import { textStyleMap } from './convertMap';
import { covertThemeItem } from '../util/token';

export function convertTextStyle(textStyle: ITextMarkSpec, theme: ITheme) {
  const result = {
    fontFamily: covertThemeItem(theme.fontFamily, theme)
  };

  for (const key in textStyle) {
    result[textStyleMap[key] ?? key] = covertThemeItem(textStyle[key], theme);
  }

  return result;
}
