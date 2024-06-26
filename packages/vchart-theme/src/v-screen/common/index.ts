import type { ITheme } from '@visactor/vchart';
import { markByName } from './mark';
import { axis } from './component/axis';
import { crosshair } from './component/crosshair';
import { tooltip } from './component/tooltip';
import { getColorScheme } from './color-scheme';
import { bar } from './series/bar';
import { area } from './series/area';

export const getVScreenCommonTheme = (name: string, description: string, dataScheme: string[]): ITheme => ({
  name,
  description,
  type: 'dark',
  colorScheme: getColorScheme(dataScheme),
  markByName,
  // @ts-ignore
  series: {
    ...bar,
    ...area
  },
  component: {
    ...axis,
    crosshair,
    tooltip
  }
});
