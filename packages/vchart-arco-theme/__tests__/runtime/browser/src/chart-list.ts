import type { IChartInfo } from './charts/interface';
import area from './charts/area';
import bar from './charts/bar';
import column from './charts/column';
import pie from './charts/pie';
import rose from './charts/rose';
import radar from './charts/radar';
import scatter from './charts/scatter';
import heatmap from './charts/heatmap';
import markArea from './charts/mark-area';
import markLine from './charts/mark-line';
import markPoint from './charts/mark-point';
import gauge from './charts/gauge';
import funnel from './charts/funnel';

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
  markPoint,
];
