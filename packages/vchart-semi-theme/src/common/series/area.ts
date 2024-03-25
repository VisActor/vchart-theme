import type { ISeriesTheme } from '@visactor/vchart';

export const area: ISeriesTheme['area'] = {
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
            opacity: 0.2
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
