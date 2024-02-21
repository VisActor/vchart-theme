import type { IComponentTheme } from '@visactor/vchart';
import { axisTheme } from './axis';
import { tooltip } from './tooltip';
import { legendTheme } from './legend';

export const component: IComponentTheme = {
  ...axisTheme,
  ...legendTheme,
  tooltip
};
