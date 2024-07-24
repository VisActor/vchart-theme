import type { ITheme } from '@visactor/vchart';
import { SeriesTypeEnum } from '@visactor/vchart';
import { merge } from '@visactor/vutils';
import { toVChartLine, toEChartsLine } from './series/line';
import { toEChartsArea } from './series/area';
import { toEChartsBar, toVChartBar } from './series/bar';
import { toEChartsPie, toVChartPie } from './series/pie';
import { toEChartsFunnel, toVChartFunnel } from './series/funnel';

const VCHART_SERIES_TYPES = Object.keys(SeriesTypeEnum);

const toEChartsConverter = {
  line: toEChartsLine,
  area: toEChartsArea,
  bar: toEChartsBar,
  pie: toEChartsPie,
  funnel: toEChartsFunnel
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
