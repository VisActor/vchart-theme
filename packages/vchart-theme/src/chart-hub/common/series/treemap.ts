import type { ISeriesTheme } from '@visactor/vchart';

export const treemap: ISeriesTheme['treemap'] = {
  gapWidth: 0,
  leaf: {
    style: {
      lineWidth: 2,
      stroke: { type: 'palette', key: 'whiteColors100' }
    },
    state: {
      hover: {
        fillOpacity: 0.8,
        lineWidth: 0
      }
    }
  },
  label: {
    style: {
      fill: { type: 'palette', key: 'whiteColors100' }
    }
  }
};
