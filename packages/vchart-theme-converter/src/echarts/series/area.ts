import type { ITheme } from '@visactor/vchart';
import { areaStyleMap } from '../convertMap';
import { convertToItemStyle } from '../utils';

export function toEChartsArea(areaSeries: ITheme['series']['area'], theme: ITheme) {
  if (!areaSeries) {
    return {};
  }
  const areaTheme = {} as any;
  const { area, line } = areaSeries;
  if (area) {
    const { style = {} } = area;
    const areaStyle = convertToItemStyle(style, areaStyleMap, theme);
    const curveType = line?.style?.curveType ?? style.curveType;
    if (curveType) {
      switch (curveType) {
        case 'monotone':
        case 'monotoneX':
        case 'monotoneY':
          areaTheme.smooth = true;
          break;
        case 'step':
          areaTheme.step = 'middle';
          break;
        case 'stepAfter':
          areaTheme.step = 'end';
          break;
        case 'stepBefore':
          areaTheme.step = 'start';
      }
    }
    areaTheme.areaStyle = areaStyle;
  }
  return areaTheme;
}
