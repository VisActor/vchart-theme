import type { ISeriesTheme, SeriesTypeEnum, SeriesTypeForThemeEnum } from '@visactor/vchart';

const bar: ISeriesTheme['bar'] = {
  barMaxWidth: 16,
  barGapInGroup: 2,
  // barMinHeight: 2,
  bar: {
    style: {
      // @ts-ignore
      visible: datum => datum.value > 0 // 数据为0时隐藏柱子
      // outerBorder: {
      //   stroke: ['white', false, false, false],
      //   lineWidth: 1
      // }
    }
  }
};

const bar_horizontal: ISeriesTheme['bar'] = {
  // @ts-ignore
  stackCornerRadius: [0, 2, 2, 0], // FIXME: typeError
  label: {
    position: 'right',
    offset: 4
  }
};

const bar_vertical: ISeriesTheme['bar'] = {
  // @ts-ignore
  stackCornerRadius: [2, 2, 0, 0], // FIXME: typeError,
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
