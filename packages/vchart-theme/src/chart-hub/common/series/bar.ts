import type { ISeriesTheme, SeriesTypeEnum, SeriesTypeForThemeEnum } from '@visactor/vchart';

const bar: ISeriesTheme['bar'] = {
  barWidth: 8,
  // @ts-ignore
  barGapInGroup: 4, // FIXME: typeError
  label: {
    style: {
      fill: { type: 'palette', key: 'secondaryFontColor' }
    }
  }
};

const bar_horizontal: ISeriesTheme['bar'] = {
  // @ts-ignore
  stackCornerRadius: [0, 1, 1, 0], // FIXME: typeError
  label: {
    position: 'right',
    offset: 4
  }
};

const bar_vertical: ISeriesTheme['bar'] = {
  // @ts-ignore
  stackCornerRadius: [1, 1, 0, 0], // FIXME: typeError
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
