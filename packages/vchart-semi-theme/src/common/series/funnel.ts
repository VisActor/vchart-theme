import type { ISeriesTheme } from '@visactor/vchart';

export const funnel: ISeriesTheme['funnel'] = {
  transform: {
    style: {
      fill: { type: 'palette', key: 'axisGridColor', a: 0.5 }
    }
  }
};
