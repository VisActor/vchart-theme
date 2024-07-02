import type { ITheme } from '@visactor/vchart';
import { SeriesTypeEnum } from '@visactor/vchart';
import { lineSeriesConverter } from './series/line';
import { merge } from '@visactor/vutils';
import { areaSeriesConverter } from './series/area';
import { barSeriesConverter } from './series/bar';
import { pieSeriesConverter } from './series/pie';
import { funnelSeriesConverter } from './series/funnel';

const VCHART_SERIES_TYPES = Object.keys(SeriesTypeEnum);

const seriesConverter = {
  line: lineSeriesConverter,
  area: areaSeriesConverter,
  bar: barSeriesConverter,
  pie: pieSeriesConverter,
  funnel: funnelSeriesConverter
};

export function convertSeries(series: ITheme['series'], theme: ITheme) {
  const result = {} as any;

  VCHART_SERIES_TYPES.forEach(type => {
    if (seriesConverter[type]) {
      if (type === 'area') {
        if (!result.line) {
          result.line = {};
        }
        result.line = merge(result.line, seriesConverter[type](series[type], theme));
      } else {
        // 这里后续可能存在问题：vchart series type 和 echarts series type 不一致
        result[type] = merge(result[type] ?? {}, seriesConverter[type](series[type], theme));
      }
    }
  });

  return result;
}
