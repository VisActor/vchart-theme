import type { ITheme } from '@visactor/vchart';
import { SeriesTypeEnum } from '@visactor/vchart';
import { toVChartLine, lineSeriesConverter } from './series/line';
import { merge } from '@visactor/vutils';
import { areaSeriesConverter } from './series/area';
import { barSeriesConverter, toVChartBar } from './series/bar';
import { pieSeriesConverter, toVChartPie } from './series/pie';
import { funnelSeriesConverter, toVChartFunnel } from './series/funnel';

const VCHART_SERIES_TYPES = Object.keys(SeriesTypeEnum);

const toEChartsConverter = {
  line: lineSeriesConverter,
  area: areaSeriesConverter,
  bar: barSeriesConverter,
  pie: pieSeriesConverter,
  funnel: funnelSeriesConverter
};

export const toVChartConverter = {
  line: toVChartLine,
  bar: toVChartBar,
  pie: toVChartPie,
  funnel: toVChartFunnel
};

export function convertSeries(series: ITheme['series'], theme: ITheme) {
  const result = {} as any;

  VCHART_SERIES_TYPES.forEach(type => {
    if (toEChartsConverter[type]) {
      if (type === 'area') {
        if (!result.line) {
          result.line = {};
        }
        result.line = merge(result.line, toEChartsConverter[type](series[type], theme));
      } else {
        // 这里后续可能存在问题：vchart series type 和 echarts series type 不一致
        result[type] = merge(result[type] ?? {}, toEChartsConverter[type](series[type], theme));
      }
    }
  });

  return result;
}
