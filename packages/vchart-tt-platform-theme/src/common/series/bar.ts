import type { ISeriesTheme } from '@visactor/vchart';

export const bar: ISeriesTheme['bar'] = {
  barMaxWidth: 60,
  label: {
    style: {
      fill: { type: 'palette', key: 'secondaryFontColor' }
    }
  }
};

export const bar_horizontal: ISeriesTheme['bar'] = {
  label: {
    position: 'right',
    offset: 4
  }
};

export const bar_vertical: ISeriesTheme['bar'] = {
  label: {
    position: 'top',
    offset: 4
  }
};
