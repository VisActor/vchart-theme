import type { ISeriesTheme } from '@visactor/vchart';

export const funnel: ISeriesTheme['funnel'] = {
  funnel: {
    state: {
      selected: {
        strokeOpacity: 0.2,
        lineWidth: 4
      }
    }
  },
  outerLabel: {
    style: {
      fontSize: 12
    },
    line: {
      style: {
        lineWidth: 2
      }
    }
  },
  label: {
    style: {
      fontSize: 12
    }
  }
};
