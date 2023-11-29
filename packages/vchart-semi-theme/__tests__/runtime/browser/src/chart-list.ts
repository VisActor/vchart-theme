import type { IChartInfo } from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/interface';
import area from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/area';
import bar from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/bar';
import column from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/column';
import pie from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/pie';
import rose from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/rose';
import radar from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/radar';
import scatter from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/scatter';
import heatmap from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/heatmap';
import markArea from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/mark-area';
import markLine from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/mark-line';
import markPoint from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/mark-point';
import gauge from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/gauge';
import funnel from '../../../../../vchart-theme/__tests__/runtime/browser/test-page/charts/funnel';

export const charts: IChartInfo[] = [
  area,
  column,
  pie,
  bar,
  rose,
  radar,
  scatter,
  //heatmap,
  gauge,
  funnel,
  markArea,
  markLine,
  markPoint
];
