import type { ISeriesTheme } from '@visactor/vchart';

export const gauge: ISeriesTheme = {
  gauge: {
    // FIXME: 不生效
    outerRadius: 0.8,
    innerRadius: 0.6,
    // FIXME: 不生效
    segment: {
      style: {
        fill: 'red',
        fillOpacity: 1,
        cornerRadius: 100
      }
    }
  },
  gaugePointer: {
    pin: { visible: false },
    pinBackground: { visible: false },
    pointer: { visible: false }
  }
};
