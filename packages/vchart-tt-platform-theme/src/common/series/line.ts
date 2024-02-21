import type { ISeriesTheme } from '@visactor/vchart';

export const line: ISeriesTheme['line'] = {
  line: {
    style: {
      lineWidth: 2
    }
  },
  point: {
    style: {
      symbolType: 'circle'
    }
  },
  label: {
    position: 'top',
    offset: 4
  }
};
