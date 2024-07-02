import type { ITokenKey, IColorKey, ITheme as IVChartTheme, IColorSchemeStruct, ITheme } from '@visactor/vchart';
import { Color, isValid } from '@visactor/vutils';

export function tokenOrPaletteToValue(object: ITokenKey | IColorKey, theme: IVChartTheme) {
  if (object.type === 'palette') {
    const { colorScheme } = theme;
    if (colorScheme) {
      const { palette } = (colorScheme.default ?? {}) as IColorSchemeStruct;
      if (palette) {
        let color = (palette[object.key] ?? object.default) as string;
        if (object.a) {
          color = new Color(color).setOpacity(object.a).toRGBA();
        }
        if (object.l) {
          color = new Color(color).brighter(object.l).toRGBA();
        }
        return color;
      }
    }
  } else if (object.type === 'token') {
    const { token } = theme;
    if (token) {
      return token[object.key];
    }
  }
  return undefined;
}

export function isTokenOrPalette(value: ITokenKey | IColorKey | any): boolean {
  return value?.type === 'palette' || value?.type === 'token';
}

export function convertThemeTokenItem(vchartStyle: ITokenKey | IColorKey | any, theme: ITheme) {
  if (!isValid(vchartStyle)) {
    return;
  }
  return isTokenOrPalette(vchartStyle) ? tokenOrPaletteToValue(vchartStyle, theme) : vchartStyle;
}
