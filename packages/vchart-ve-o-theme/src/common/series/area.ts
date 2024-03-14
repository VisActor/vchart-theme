import type { ISeriesTheme } from '@visactor/vchart';

export const area: ISeriesTheme['area'] = {
  line: {
    style: {
      lineWidth: 2,
      curveType: 'monotone'
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
  area: {
    style: {
      stroke: {
        type: 'palette',
        key: 'backgroundColor'
      },
      fillOpacity: 1,
      fill: {
        gradient: 'linear',
        x0: 0.5,
        y0: 0,
        x1: 0.5,
        y1: 1,
        stops: [
          {
            offset: 0,
            opacity: 0.1
          },
          {
            offset: 1,
            opacity: 0
          }
        ]
      }
    }
  },
  label: {
    position: 'top',
    offset: 4,
    style: {
      fill: { type: 'palette', key: 'secondaryFontColor' }
    }
  },
  seriesMark: 'line'
};

export const area_stack: ISeriesTheme['area_stack'] = {
  area: {
    style: {
      fill: null,
      fillOpacity: 0.1
    }
  }
};
