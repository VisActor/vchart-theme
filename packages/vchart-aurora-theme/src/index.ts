import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './common/color-scheme';
import { axis } from './common/component/axis';
import { axisPolar } from './common/component/polar-axis';

import { legend } from './common/component/legend';
import { token } from './common/token';
import { tooltip } from './common/component/tooltip';
import { crosshair } from './common/component/crosshair';
import { area } from './common/series/area';
import { barTheme as bar } from './common/series/bar';
import { line } from './common/series/line';
import { markByName } from './common/mark';
import { scatter } from './common/series/scatter';
import { pie } from './common/series/pie';
import { indicator } from './common/component/indicator';
import { funnel } from './common/series/funnel';
import { treemap } from './common/series/treemap';
import { gauge } from './common/series/gauge';
import { heatmap } from './common/series/heatmap';
import { markLine } from './common/component/mark-line';
import { markArea } from './common/component/mark-area';
import { markPoint } from './common/component/mark-point';
import { dataZoom } from './common/component/data-zoom';
import { scrollBar } from './common/component/scroll-bar';
import { radar } from './common/series/radar';

export const chartAuroraTheme: ITheme = {
  name: 'aurora',
  type: 'light',
  description: 'light theme for ChartHub.',
  colorScheme,
  token,
  component: {
    ...axis,
    ...legend,
    ...axisPolar,
    tooltip,
    crosshair,
    indicator,
    markLine,
    markArea,
    markPoint,
    dataZoom,
    scrollBar
  },
  series: {
    ...area,
    ...bar,
    ...gauge,
    line,
    scatter,
    pie,
    funnel,
    treemap,
    heatmap,
    radar
  },
  markByName
};
