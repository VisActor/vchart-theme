import type { ISeriesTheme } from '@visactor/vchart';

export const radar: ISeriesTheme['radar'] = {
  line: {
    style: {
      lineWidth: 1
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
  area: {
    visible: true
  },
  label: {
    position: 'top',
    offset: 4
  }
};
