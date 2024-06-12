import type { IChartInfo } from '../interface';
import { areaSpec } from '../spec/area';
import { barGroupSpec } from '../spec/barGroup';
import { barGroupHorizontalSpec } from '../spec/barGroupHorizontal';
import { barStackedSpec } from '../spec/barStacked';
import { barStackedHorizontalSpec } from '../spec/barStackedHorizontal';
import { gaugeSpec } from '../spec/gauge';
import { horizontalBarSpec } from '../spec/horizontalBar';
import { indicatorSankeySpec } from '../spec/indicatorSankey';
import { lineSpec } from '../spec/line';
import { pieSpec } from '../spec/pie';
import { radarSpec } from '../spec/radar';
import { ringSpec } from '../spec/ring';
import { scatterSpec } from '../spec/scatter';

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
