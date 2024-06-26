import type { ITheme } from '@visactor/vchart';
import { covertThemeItem } from '../../util/token';
import { areaStyleMap } from '../convertMap';
import type { IGradientColor } from '../../util/color';

export function areaSeriesConverter(areaSeries: ITheme['series']['area'], theme: ITheme) {
  if (!areaSeries) {
    return {};
  }
  const areaStyle = {} as any;
  const { area = {} } = areaSeries;
  if (area) {
    const { style = {} } = area;
    for (const key in style) {
      if (areaStyleMap[key]) {
        areaStyle[areaStyleMap[key]] = covertThemeItem(style[key], theme);
        if (key === 'fill') {
          if ('gradient' in (style[key] as IGradientColor)) {
            console.warn('[Converter] gradient color is not supported ');
            delete areaStyle.color;
            areaStyle.opacity = 0.1;
          }
        }
      }
    }
  }

  return areaStyle;
}
