import type { ISeriesTheme } from '@visactor/vchart';

export const scatter: ISeriesTheme['scatter'] = {
  point: {
    style: {
      symbolType: 'circle',
      fillOpacity: 0.35,
      lineWidth: 1,
      size: 8,
      stroke: null
    }
  },
  label: {
    position: 'top'
  }
};
