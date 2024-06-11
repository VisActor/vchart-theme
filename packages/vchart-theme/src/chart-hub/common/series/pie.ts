import type { ISeriesTheme } from '@visactor/vchart';

export const pie: ISeriesTheme['pie'] = {
  outerRadius: 0.8,
  innerRadius: 0.54,
  pie: {
    style: {
      padAngle: 0,
      stroke: '#fff',
      lineWidth: 2
    },
    state: {
      hover: {
        lineWidth: 0
      },
      selected: {
        lineWidth: 0
      }
    }
  },
  label: {
    visible: true,
    position: 'outside',
    style: {
      fill: null
    }
  }
};
