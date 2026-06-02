import type { IChartInfo } from '@internal/chart-demo';
import {
  barSpec,
  areaSpec,
  areaSimpleSpec,
  multiAreaSpec,
  barGroupHorizontalSpec,
  barGroupSpec,
  benchmarkSpec,
  dualAxisBarSpec,
  barStackedSpec,
  funnelSpec,
  lineSpec,
  pieSpec,
  nestPieSpec,
  metricPieSpec,
  radarSpec,
  scatterSpec,
  wordCloudSpec
} from './chartSpec';

export interface IChartCategory {
  key: string;
  title: string;
  charts: IChartInfo[];
}

// 柱状图系列
export const barCharts: IChartInfo[] = [
  {
    title: '基础柱状图',
    spec: barSpec
  },
  {
    title: '分组柱状图',
    spec: barGroupSpec
  },
  {
    title: '堆叠柱状图&Hover总量',
    spec: barStackedSpec
  },
  {
    title: '带同行标杆柱状图',
    spec: benchmarkSpec
  },
  {
    title: '双轴图（金额/比率）',
    spec: dualAxisBarSpec
  }
];

// 条形图系列
export const barHorizontalCharts: IChartInfo[] = [
  {
    title: '水平分组条形图',
    spec: barGroupHorizontalSpec
  }
];

// 折线图系列
export const lineCharts: IChartInfo[] = [
  {
    title: '基础折线图',
    spec: lineSpec
  }
];

// 面积图系列
export const areaCharts: IChartInfo[] = [
  {
    title: '基础面积图',
    spec: areaSpec
  },
  {
    title: '迷你面积图',
    spec: areaSimpleSpec
  },
  {
    title: '多项面积图',
    spec: multiAreaSpec
  }
];

// 饼图系列
export const pieCharts: IChartInfo[] = [
  {
    title: '基础饼图',
    spec: pieSpec
  },
  {
    title: '定制标签的饼图',
    spec: nestPieSpec
  },
  {
    title: '中心指标饼图',
    spec: metricPieSpec
  }
];

// 散点图系列
export const scatterCharts: IChartInfo[] = [
  {
    title: '基础散点图',
    spec: scatterSpec
  }
];

// 词云系列
export const wordCloudCharts: IChartInfo[] = [
  {
    title: '基础词云',
    spec: wordCloudSpec
  }
];

// 雷达图系列
export const radarCharts: IChartInfo[] = [
  {
    title: '基础雷达图',
    spec: radarSpec
  }
];

// 漏斗图系列
export const funnelCharts: IChartInfo[] = [
  {
    title: '基础漏斗图',
    spec: funnelSpec
  }
];

// 所有图表分类
export const chartCategories: IChartCategory[] = [
  {
    key: 'pie',
    title: '饼图',
    charts: pieCharts
  },
  {
    key: 'bar',
    title: '柱状图',
    charts: barCharts
  },
  {
    key: 'bar_horizontal',
    title: '条形图',
    charts: barHorizontalCharts
  },
  {
    key: 'line',
    title: '折线图',
    charts: lineCharts
  },
  {
    key: 'area',
    title: '面积图',
    charts: areaCharts
  },
  {
    key: 'scatter',
    title: '散点图',
    charts: scatterCharts
  },
  {
    key: 'wordCloud',
    title: '词云',
    charts: wordCloudCharts
  },
  {
    key: 'radar',
    title: '雷达图',
    charts: radarCharts
  },
  {
    key: 'funnel',
    title: '漏斗图',
    charts: funnelCharts
  }
];

// 所有图表（向后兼容）
export const charts: IChartInfo[] = [
  ...barCharts,
  ...barHorizontalCharts,
  ...lineCharts,
  ...areaCharts,
  ...pieCharts,
  ...scatterCharts,
  ...wordCloudCharts,
  ...radarCharts,
  ...funnelCharts
];

// 根据分类 key 获取图表列表
export function getChartsByCategory(key: string): IChartInfo[] {
  const category = chartCategories.find(c => c.key === key);
  return category ? category.charts : charts;
}
