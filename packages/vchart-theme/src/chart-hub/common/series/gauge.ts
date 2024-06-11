import type { ISeriesTheme } from '@visactor/vchart';

export const gauge: ISeriesTheme = {
  circularProgress: {
    // FIXME: not work
    // radius: 1,
    // innerRadius: 0.1,
    progress: {
      style: {
        cornerRadius: 100,
        fill: { type: 'palette', key: 'bandColor' }
      }
    },
    track: {
      interactive: false,
      style: {
        cornerRadius: 100,
        fill: '#DCDEE1',
        fillOpacity: 1
      }
    }
  },
  gaugePointer: {
    pin: { visible: false },
    pinBackground: { visible: false },
    pointer: { visible: false }
  }
};
