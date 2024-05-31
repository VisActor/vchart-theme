import type { ISeriesTheme, SeriesTypeEnum, SeriesTypeForThemeEnum } from '@visactor/vchart';

export const area: Pick<
  ISeriesTheme,
  SeriesTypeEnum.area | SeriesTypeForThemeEnum.area_vertical | SeriesTypeForThemeEnum.area_horizontal
> = {
  area: {
    point: {
      style: {
        visible: false,
        size: 12,
        lineWidth: 2,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 3,
        stroke: { type: 'palette', key: 'whiteColors100' }
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
        fillOpacity: 0.25,
        lineWidth: 2
      },
      state: {
        selected: {
          fillOpacity: 0.5
        }
      }
    }
  }
};
