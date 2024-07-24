import type { IChartInfo } from '../interface';
import { areaSpec } from '../spec/area';
import { barGroupSpec } from '../spec/barGroup';
import { barGroupHorizontalSpec } from '../spec/barGroupHorizontal';
import { barStackedSpec } from '../spec/barStacked';
import { barStackedHorizontalSpec } from '../spec/barStackedHorizontal';
import { horizontalFunnelSpec } from '../spec/funnelHorizontal';
import { gaugeSpec } from '../spec/gauge';
import { horizontalBarSpec } from '../spec/horizontalBar';
import { indicatorSankeySpec } from '../spec/indicatorSankey';
import { lineSpec } from '../spec/line';
import { pieSpec } from '../spec/pie';
import { radarSpec } from '../spec/radar';
import { ringSpec } from '../spec/ring';
import { scatterSpec } from '../spec/scatter';
import { funnelSpec } from '../spec/funnel';
import { CombinationSpec } from '../spec/combination';

export const charts: IChartInfo[] = [
  {
    title: 'Line Chart',
    spec: lineSpec,
    fileName: 'line'
  },
  {
    title: 'Area Chart',
    spec: areaSpec,
    fileName: 'area'
  },
  {
    title: 'Grouped Bar Chart',
    spec: barGroupSpec,
    fileName: 'barGroup'
  },
  {
    title: 'Stacked Bar Chart',
    spec: barStackedSpec,
    fileName: 'barStacked'
  },
  {
    title: 'Horizontal Grouped Bar Chart',
    spec: barGroupHorizontalSpec,
    fileName: 'barGroupHorizontal'
  },
  {
    title: 'Horizontal Stacked Bar Chart',
    spec: barStackedHorizontalSpec,
    fileName: 'barStackedHorizontal'
  },
  {
    title: 'Pie Chart',
    spec: pieSpec,
    fileName: 'pie'
  },
  {
    title: 'Ring Chart',
    spec: ringSpec,
    fileName: 'ring'
  },
  {
    title: 'Gauge Chart',
    spec: gaugeSpec,
    fileName: 'gauge'
  },
  {
    title: 'Horizontal Bar Chart',
    spec: horizontalBarSpec,
    fileName: 'horizontalBar'
  },
  {
    title: 'Scatter Chart',
    spec: scatterSpec,
    fileName: 'scatter'
  },
  {
    title: 'Radar Chart',
    spec: radarSpec,
    fileName: 'radar'
  },
  {
    title: 'Indicator Sankey Chart',
    spec: indicatorSankeySpec,
    fileName: 'indicatorSankey',
    option: {
      enableHtmlAttribute: true
    }
  },
  {
    title: 'Horizontal Funnel',
    spec: horizontalFunnelSpec,
    fileName: 'funnelHorizontal'
  },
  {
    title: '漏斗图',
    spec: funnelSpec,
    fileName: 'funnel',
  },
  {
    title: '基础组合图',
    spec: CombinationSpec,
    fileName: 'combination',
  }
];
