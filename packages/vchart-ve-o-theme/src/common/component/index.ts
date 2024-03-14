import type { IComponentTheme } from '@visactor/vchart';
import { axisTheme } from './axis';
import { tooltip } from './tooltip';
import { legendTheme } from './legend';
import { crosshair } from './crosshair';
import { markLine } from './mark-line';
import { markArea } from './mark-area';

export const component: IComponentTheme = {
  ...axisTheme,
  ...legendTheme,
  crosshair,
  tooltip,
  markLine,
  markArea
};
