import type { IContinuousLegendTheme } from '@visactor/vchart';

export const DEFAULT_CONTINUOUS_LEGEND_THEME: IContinuousLegendTheme = {
  orient: 'right',
  position: 'middle',
  padding: [12, 12],
  title: {
    visible: false,
    padding: 0,
    space: 12
  },
  startText: {
    space: 6
  },
  endText: {
    space: 6
  },
  handlerText: {
    space: 6
  }
};
