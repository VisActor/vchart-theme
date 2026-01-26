import type { ISeriesTheme } from '@visactor/vchart';

export const line: ISeriesTheme['line'] = {
  line: {
    style: {
      lineWidth: 2,
      curveType: 'monotone'
    }
  },
  point: {
    style: {
      visible: false,
      size: 12,
      lineWidth: 2,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowBlur: 3,
      stroke: { type: 'palette', key: 'whiteColors100' }
    }
  },
  label: {
    position: 'top',
    offset: 4
  }
};
