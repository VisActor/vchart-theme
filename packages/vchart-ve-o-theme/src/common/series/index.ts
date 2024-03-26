import type { ISeriesTheme } from '@visactor/vchart';
import { bar } from './bar';
import { line } from './line';
import { pie } from './pie';
import { area, area_stack } from './area';
import { radar } from './radar';
import { scatter } from './scatter';

export const series: ISeriesTheme = {
  bar,
  line,
  pie,
  area,
  area_stack,
  radar,
  scatter
};
