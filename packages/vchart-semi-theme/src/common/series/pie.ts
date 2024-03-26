import type { ISeriesTheme } from '@visactor/vchart';

export const pie: ISeriesTheme['pie'] = {
  outerRadius: 1.0,
  innerRadius: 0.7,
  pie: {
    style: {
      padAngle: 0
    },
    state: {
      hover: {
        outerRadius: 1.02
      },
      selected: {
        outerRadius: 1.02
      }
    }
  },
  label: {
    visible: true,
    position: 'outside'
  }
};
