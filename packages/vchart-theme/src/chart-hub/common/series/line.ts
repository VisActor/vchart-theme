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
      visible: false
    }
  },
  label: {
    position: 'top',
    offset: 4,
    style: {
      fill: { type: 'palette', key: 'secondaryFontColor' }
    }
  }
};
