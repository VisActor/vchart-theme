import type { ISizeLegendTheme } from '@visactor/vchart';
import { DEFAULT_CONTINUOUS_LEGEND_THEME } from './continuous';

export const sizeLegend: ISizeLegendTheme = {
  horizontal: {
    ...DEFAULT_CONTINUOUS_LEGEND_THEME,
    rail: {
      width: 200,
      height: 4
    }
  },
  vertical: {
    ...DEFAULT_CONTINUOUS_LEGEND_THEME,
    rail: {
      width: 4,
      height: 200
    }
  }
};
