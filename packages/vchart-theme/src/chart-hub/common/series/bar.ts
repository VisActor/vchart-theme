import type { ISeriesTheme, SeriesTypeEnum, SeriesTypeForThemeEnum } from '@visactor/vchart';

const bar: ISeriesTheme['bar'] = {
  barWidth: 8,
  barGapInGroup: 4,
  label: {
    style: {
      fill: { type: 'palette', key: 'secondaryFontColor' }
    }
  }
};

const bar_horizontal: ISeriesTheme['bar'] = {
  stackCornerRadius: [0, 1, 1, 0],
  label: {
    position: 'right',
    offset: 4
  }
};

const bar_vertical: ISeriesTheme['bar'] = {
  stackCornerRadius: [1, 1, 0, 0],
  label: {
    position: 'top',
    offset: 4
  }
};

export const barTheme: Pick<
  ISeriesTheme,
  SeriesTypeEnum.bar | SeriesTypeForThemeEnum.bar_horizontal | SeriesTypeForThemeEnum.bar_vertical
> = {
  bar,
  bar_horizontal,
  bar_vertical
};
