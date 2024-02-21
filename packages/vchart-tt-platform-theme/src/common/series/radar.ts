import type { ISeriesTheme } from '@visactor/vchart';

export const radar: ISeriesTheme['radar'] = {
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
  area: {
    state: {
      // The style in the hover state of the area
      hover: {
        fillOpacity: 0.5
      }
    }
  }
};
