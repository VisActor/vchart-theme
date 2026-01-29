import type { ISeriesTheme } from '@visactor/vchart';

export const funnel: ISeriesTheme['funnel'] = {
  funnel: {
    state: {
      selected: {
        fill: '#1966FF',
        stroke: '#3958E0',
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
      fill: { type: 'palette', key: 'whiteColors100' },
      fontSize: 12
    }
  }
};
