import { BasePlugin } from '@visactor/vchart/esm/plugin/base/base-plugin';
import type { IChartPlugin, IChartPluginService } from '@visactor/vchart/esm/plugin/chart/interface';
import type { IBarMarkerSpec } from './interface';
import {
  registerChartPlugin,
  type IBarSeriesSpec,
  type IScatterSeriesSpec,
  type ISeriesSpec,
  type IVChart,
  type VChartRenderActionSource
} from '@visactor/vchart';
import { array } from '@visactor/vchart-theme-utils';

export class BarMarkerPlugin extends BasePlugin implements IChartPlugin {
  static readonly pluginType: 'chart' = 'chart';
  static readonly specKey = 'barMarker';
  static readonly type: string = 'BarMarkerPlugin';
  readonly type: string = 'BarMarkerPlugin';

  protected _vchart: IVChart;

  constructor() {
    super(BarMarkerPlugin.type);
  }

  onInit(service: IChartPluginService, chartSpec: any) {
    const { globalInstance } = service;
    this._vchart = globalInstance;
  }

  onAfterChartSpecTransform(service: IChartPluginService, chartSpec: any, actionSource: VChartRenderActionSource) {
    // 寻找 bar 系列
    const barSeriesList = chartSpec.series?.filter((s: ISeriesSpec) => s.type === 'bar') ?? [];
    if (barSeriesList.length === 0) {
      return;
    }

    const markerSpec = chartSpec[BarMarkerPlugin.specKey] as IBarMarkerSpec | undefined;
    const interactionTypes = ['element-highlight-by-key', 'element-highlight-by-group'];
    const scatterSeriesList: IScatterSeriesSpec[] = [];

    barSeriesList.forEach((series: IBarSeriesSpec) => {
      if (markerSpec?.visible === false) {
        return;
      }

      // 给 bar 系列添加交互
      if (!series.interactions) {
        series.interactions = [];
      }
      interactionTypes.forEach(type => {
        if (!series.interactions.find((i: any) => i.type === type)) {
          series.interactions.push({ type } as any);
        }
      });

      // 给 bar 系列加 dataKey
      const dataKey = [...new Set([].concat(array(series.xField), array(series.yField), array(series.seriesField)))];
      series.dataKey = dataKey;

      // 添加 marker（形式为 scatter 系列）
      scatterSeriesList.push({
        stack: true,
        ...(series as any),
        type: 'scatter',
        point: {
          ...markerSpec,
          style: {
            size: 0,
            lineWidth: 2,
            fill: 'white',
            fillOpacity: 1,
            stroke: null,
            ...markerSpec?.style
          },
          state: {
            dimension_hover: {
              size: 0
            },
            hover: {
              size: 10
            },
            highlight: {
              size: 10
            },
            ...markerSpec?.state
          }
        },
        tooltip: {
          visible: false
        },
        animationUpdate: {
          duration: 100
        },
        interactions: [
          {
            type: 'element-highlight-by-key'
          }
        ]
      });
    });

    scatterSeriesList.forEach((series: IScatterSeriesSpec) => {
      chartSpec.series.push(series);
    });
  }
}

export const registerBarMarker = () => {
  registerChartPlugin(BarMarkerPlugin);
};
