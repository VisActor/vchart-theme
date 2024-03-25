import type { IChartInfo } from '@internal/chart-demo';
import {
  areaSpec,
  barGroupHorizontalSpec,
  barGroupSpec,
  barStackedHorizontalSpec,
  barStackedPercentSpec,
  barStackedSpec,
  funnelSpec,
  lineSpec,
  pieSpec,
  radarSpec
} from './chartSpec';

export const charts: IChartInfo[] = [
  {
    title: 'Grouped Bar Chart',
    spec: barGroupSpec
  },
  {
    title: 'Stacked Bar Chart',
    spec: barStackedSpec
  },
  {
    title: 'Horizontal Grouped Bar Chart',
    spec: barGroupHorizontalSpec
  },
  {
    title: 'Horizontal Stacked Bar Chart',
    spec: barStackedHorizontalSpec
  },
  {
    title: 'Stacked Percentage Bar Chart',
    spec: barStackedPercentSpec
  },
  {
    title: 'Line Chart',
    spec: lineSpec
  },
  {
    title: 'Area Chart',
    spec: areaSpec
  },
  {
    title: 'Pie Chart',
    spec: pieSpec
  },
  {
    title: 'Radar Chart',
    spec: radarSpec
  },
  {
    title: 'Funnel Chart',
    spec: funnelSpec
  }
];
