import type { ITheme } from '@visactor/vchart';
// FIXME:
import { ComponentTypeEnum } from '@visactor/vchart/esm/component/interface/type';
import { merge } from '@visactor/vutils';
import { toEChartsAxis, toVChartAxis } from './component/axis';
import { toEChartsTitle, toVChartTitle } from './component/title';
import { toEChartsLegend, toVChartDiscreteLegend } from './component/discreteLegend';
import { toVChartTooltip, toEChartsTooltip } from './component/tooltip';
import { toEChartsAxisPointer, toVChartCrosshair } from './component/crosshair';

const VCHART_COMPONENT_TYPES = [...Object.keys(ComponentTypeEnum).filter(type => !type.includes('Axis')), 'axis'];

const componentConverter: Record<string, any> = {
  axis: toEChartsAxis,
  title: toEChartsTitle,
  discreteLegend: toEChartsLegend,
  tooltip: toEChartsTooltip,
  cartesianCrosshair: toEChartsAxisPointer
};

export const toVChartComponentConverter = {
  axis: toVChartAxis,
  discreteLegend: toVChartDiscreteLegend,
  title: toVChartTitle,
  crosshair: toVChartCrosshair,
  tooltip: toVChartTooltip
};

export function convertComponent(component: ITheme['component'], theme: ITheme) {
  if (!component) {
    return {};
  }

  let result = {} as any;

  VCHART_COMPONENT_TYPES.forEach(type => {
    if (componentConverter[type]) {
      result = merge(result, componentConverter[type](component, theme));
    }
  });

  return result;
}
