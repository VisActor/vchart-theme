import type { ITheme } from '@visactor/vchart';
import { colorScheme, colorList, barColorList, nestColorList } from './common/color-scheme';

import { legend, lineLegend } from './common/component/legend';
import { token } from './common/token';
import { tooltip } from './common/component/tooltip';
import { barCrosshair, lineCrosshair } from './common/component/crosshair';
import { area } from './common/series/area';
import { barTheme as bar } from './common/series/bar';
import { line } from './common/series/line';
import { scatter } from './common/series/scatter';
import { pie } from './common/series/pie';
import { funnel } from './common/series/funnel';
import { treemap } from './common/series/treemap';
import { gauge } from './common/series/gauge';
import { heatmap } from './common/series/heatmap';
import { radar } from './common/series/radar';

export const chartAuroraTheme: ITheme = {
  name: 'aurora',
  type: 'light',
  description: 'light theme for Aurora.',
  colorScheme,
  component: {
    ...legend,
    tooltip
  },
  chart: {
    line: {
      component: {
        crosshair: lineCrosshair,
        ...lineLegend
      }
    },
    area: {
      component: {
        crosshair: lineCrosshair,
        ...lineLegend
      }
    },
    bar: {
      component: {
        crosshair: barCrosshair
      },
      colorScheme: {
        default: {
          dataScheme: barColorList
        }
      }
    }
  },
  series: {
    pie,
    ...bar,
    ...area,
    line
  }
};

export { colorList, nestColorList };

export const allThemeMap = new Map([[chartAuroraTheme.name, chartAuroraTheme]]) as Map<string, ITheme>;
