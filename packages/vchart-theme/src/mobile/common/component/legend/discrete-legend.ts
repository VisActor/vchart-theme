import type { IDiscreteLegendTheme } from '@visactor/vchart-types';

export const discreteLegend: IDiscreteLegendTheme = {
  orient: 'top',
  position: 'middle',
  padding: [12, 12],
  title: {
    visible: false,
    padding: 0,
    space: 12
  },
  item: {
    visible: true,
    spaceCol: 10,
    spaceRow: 6,
    padding: 2,
    shape: {
      space: 6
    },
    label: {
      space: 6
    }
  }
};
