import type { ISeriesTheme } from '@visactor/vchart';

export const line: ISeriesTheme['line'] = {
  line: {
    style: {
      lineWidth: 2
    }
  },
  point: {
    style: {
      symbolType: 'circle',
      size: 0
    },
    state: {
      hover: {
        size: 10
      },
      dimension_hover: {
        size: 10
      }
    }
  },
  label: {
    position: 'top',
    offset: 4,
    style: {
      fill: { type: 'palette', key: 'secondaryFontColor' }
    }
  }
};
