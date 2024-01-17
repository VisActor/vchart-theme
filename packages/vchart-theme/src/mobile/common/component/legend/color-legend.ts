import type { IColorLegendTheme } from '@visactor/vchart-types';
import { DEFAULT_CONTINUOUS_LEGEND_THEME } from './continuous';

export const colorLegend: IColorLegendTheme = {
  horizontal: {
    ...DEFAULT_CONTINUOUS_LEGEND_THEME,
    rail: {
      width: 200,
      height: 8
    }
  },
  vertical: {
    ...DEFAULT_CONTINUOUS_LEGEND_THEME,
    rail: {
      width: 8,
      height: 200
    }
  }
};
