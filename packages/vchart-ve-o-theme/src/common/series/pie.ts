import type { ISeriesTheme } from '@visactor/vchart';

export const pie: ISeriesTheme['pie'] = {
  outerRadius: 1.0,
  pie: {
    style: {
      padAngle: 0
    },
    state: {
      hover: {
        outerRadius: 1.05
      },
      selected: {
        outerRadius: 1.05
      }
    }
  },
  label: {
    visible: true,
    position: 'outside'
  }
};
