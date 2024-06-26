import type { ITheme } from '@visactor/vchart';
import { SeriesTypeEnum } from '@visactor/vchart';
import { lineSeriesConverter } from './series/line';
import { merge } from '@visactor/vutils';
import { areaSeriesConverter } from './series/area';

const VCHART_SERIES_TYPES = Object.keys(SeriesTypeEnum);

const seriesConverter = {
  line: lineSeriesConverter,
  area: areaSeriesConverter
};

export function convertSeries(series: ITheme['series'], theme: ITheme) {
  const result = {} as any;

  VCHART_SERIES_TYPES.forEach(type => {
    if (seriesConverter[type]) {
      // 这里后续可能存在问题：vchart series type 和 echarts series type 不一致
      if (type === 'area') {
        if (!result.line) {
          result.line = {};
        }
        result.line.areaStyle = seriesConverter[type](series[type], theme);
      } else {
        result[type] = merge(result[type] ?? {}, seriesConverter[type](series[type], theme));
      }
    }
  });

  return result;
}
