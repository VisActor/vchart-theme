import type { ITheme } from '@visactor/vchart';
// FIXME:
import { ComponentTypeEnum } from '@visactor/vchart/esm/component/interface/type';
import { merge } from '@visactor/vutils';
import { axisConverter } from './component/axis';
import { titleConverter } from './component/title';
import { discreteLegendConverter } from './component/discreteLegend';
import { tooltipConverter } from './component/tooltip';

const VCHART_COMPONENT_TYPES = [...Object.keys(ComponentTypeEnum).filter(type => !type.includes('Axis')), 'axis'];

const componentConverter = {
  axis: axisConverter,
  title: titleConverter,
  discreteLegend: discreteLegendConverter,
  tooltip: tooltipConverter
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
