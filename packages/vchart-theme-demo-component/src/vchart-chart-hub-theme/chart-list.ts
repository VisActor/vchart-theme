import type { IChartInfo } from '../interface';
import {
  areaSpec,
  barGroupHorizontalSpec,
  barGroupSpec,
  barStackedHorizontalSpec,
  barStackedSpec,
  lineSpec,
  ringSpec,
  pieSpec,
  radarSpec,
  gaugeSpec,
  horizontalBarSpec,
  scatterSpec,
  indicatorSankeySpec
} from './chartSpec';

export const charts: IChartInfo[] = [
  {
    title: 'Line Chart',
    spec: lineSpec
  },
  {
    title: 'Area Chart',
    spec: areaSpec
  },
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
    title: 'Pie Chart',
    spec: pieSpec
  },
  {
    title: 'Ring Chart',
    spec: ringSpec
  },
  {
    title: 'Gauge Chart',
    spec: gaugeSpec
  },
  {
    title: 'Horizontal Bar Chart',
    spec: horizontalBarSpec
  },
  {
    title: 'Scatter Chart',
    spec: scatterSpec
  },
  {
    title: 'Radar Chart',
    spec: radarSpec
  },
  {
    title: 'Indicator Sankey Chart',
    spec: indicatorSankeySpec,
    option: {
      enableHtmlAttribute: true
    }
  }
];
