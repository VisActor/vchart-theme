import type { ITokenKey, IColorKey, ITheme as IVChartTheme, IColorSchemeStruct, ITheme } from '@visactor/vchart';
import { isValid } from '@visactor/vutils';

export function tokenOrPaletteToValue(object: ITokenKey | IColorKey, theme: IVChartTheme) {
  if (object.type === 'palette') {
    const { colorScheme } = theme;
    if (colorScheme) {
      const { palette } = (colorScheme.default ?? {}) as IColorSchemeStruct;
      if (palette) {
        return palette[object.key] ?? object.default;
      }
      // TODO: 处理 l（亮度）/a（透明度）
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

export function covertThemeItem(vchartStyle: ITokenKey | IColorKey | any, theme: ITheme) {
  if (!isValid(vchartStyle)) {
    return;
  }
  return isTokenOrPalette(vchartStyle) ? tokenOrPaletteToValue(vchartStyle, theme) : vchartStyle;
}
