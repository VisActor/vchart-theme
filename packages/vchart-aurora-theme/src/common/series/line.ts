import type { ISeriesTheme } from '@visactor/vchart';

export const line: ISeriesTheme['line'] = {
  line: {
    style: {
      lineWidth: 2,
      curveType: 'monotone',
      stroke: {
        gradient: 'linear',
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 0,
        stops: [
          {
            offset: 0,
            opacity: 0.7
          },
          {
            offset: 1,
            opacity: 1
          }
        ]
      }
    }
  },
  point: {
    style: {
      visible: false,
      size: 12,
      lineWidth: 2,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowBlur: 3,
      stroke: '#fff'
    },
    state: {
      dimension_hover: {
        visible: true
      }
    }
  },
  label: {
    position: 'top',
    offset: 4
  }
};
