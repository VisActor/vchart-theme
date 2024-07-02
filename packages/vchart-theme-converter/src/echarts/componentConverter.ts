import type { ITheme } from '@visactor/vchart';
// FIXME:
import { ComponentTypeEnum } from '@visactor/vchart/esm/component/interface/type';
import { merge } from '@visactor/vutils';
import { axisConverter, toVChartAxis } from './component/axis';
import { titleConverter, toVChartTitle } from './component/title';
import { discreteLegendConverter, toVChartDiscreteLegend } from './component/discreteLegend';
import { toVChartTooltip, tooltipConverter } from './component/tooltip';
import { crosshairConverter, toVChartCrosshair } from './component/crosshair';

const VCHART_COMPONENT_TYPES = [...Object.keys(ComponentTypeEnum).filter(type => !type.includes('Axis')), 'axis'];

const componentConverter = {
  axis: axisConverter,
  title: titleConverter,
  discreteLegend: discreteLegendConverter,
  tooltip: tooltipConverter,
  cartesianCrosshair: crosshairConverter
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
