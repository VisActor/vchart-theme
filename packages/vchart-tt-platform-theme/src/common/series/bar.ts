import type { ISeriesTheme } from '@visactor/vchart';

export const bar: ISeriesTheme['bar'] = {
  barMaxWidth: 60,
  label: {
    position: 'top',
    offset: 4,
    style: {
      fill: { type: 'palette', key: 'secondaryFontColor' }
    }
  }
};
