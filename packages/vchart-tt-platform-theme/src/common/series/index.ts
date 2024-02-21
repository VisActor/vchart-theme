import type { ISeriesTheme } from '@visactor/vchart';
import { bar } from './bar';
import { line } from './line';
import { pie } from './pie';
import { area } from './area';
import { radar } from './radar';

export const series: ISeriesTheme = {
  bar,
  line,
  pie,
  area,
  radar
};
