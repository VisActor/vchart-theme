import type { ISeriesTheme, SeriesTypeEnum, SeriesTypeForThemeEnum } from '@visactor/vchart';

export const area: Pick<
  ISeriesTheme,
  SeriesTypeEnum.area | SeriesTypeForThemeEnum.area_vertical | SeriesTypeForThemeEnum.area_horizontal
> = {
  area: {
    point: {
      style: {
        visible: false
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
  },
  area_horizontal: {
    seriesMark: 'line',
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
    },
    point: {
      style: {
        visible: false
      }
    }
  }
};
