import { IColorKey, ITheme, ITokenKey } from '@visactor/vchart';
import type { IGradientColor } from '../util/color';
import { covertThemeItem } from '../util/token';

export function convertGradientColor(color: IGradientColor) {
  if (color.gradient === 'linear') {
    const { gradient, x0, x1, y0, y1, stops } = color;
    return {
      type: gradient,
      x: x0,
      y: y0,
      x2: x1,
      y2: y1,
      colorStops: stops
    };
  } else if (color.gradient === 'radial') {
    // TODO: vchart 还支持 x1/y1/r1，该如何匹配
    const { gradient, x0, r0, y0, stops } = color;
    return {
      type: gradient,
      x: x0,
      y: y0,
      r: r0,
      colorStops: stops
    };
  }

  // conical 渐变 echarts 不支持
  return {};
}
