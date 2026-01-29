import type { ISeriesTheme } from '@visactor/vchart';

export const pie: ISeriesTheme['pie'] = {
  outerRadius: 0.8,
  innerRadius: 0,
  pie: {
    style: {
      padAngle: 0,
      stroke: '#fff',
      lineWidth: 2,
      lineJoin: 'round'
    },
    state: {
      hover: {
        outerRadius: 0.85,
        lineWidth: 2
      },
      selected: {
        outerRadius: 0.85,
        lineWidth: 2
      }
    }
  },
  label: {
    visible: true,
    position: 'outside'
  }
};
