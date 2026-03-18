import type { ISeriesTheme, SeriesTypeEnum, SeriesTypeForThemeEnum } from '@visactor/vchart';

export const area: Pick<
  ISeriesTheme,
  SeriesTypeEnum.area | SeriesTypeForThemeEnum.area_vertical | SeriesTypeForThemeEnum.area_horizontal
> = {
  area: {
    seriesMark: 'line',
    point: {
      style: {
        visible: false,
        size: 12,
        lineWidth: 2,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 3,
        stroke: '#fff'
      },
      state: {
        dimension_hover: {
          visible: true
        }
      }
    },
    line: {
      style: {
        curveType: 'monotone',
        lineWidth: 2
      }
    },
    area: {
      style: {
        fill: {
          gradient: 'linear',
          x0: 0,
          y0: 0,
          x1: 0,
          y1: 1,
          stops: [
            {
              offset: 0,
              opacity: 0.7
            },
            {
              offset: 1,
              opacity: 0
            }
          ]
        }
      }
    }
  }
};
