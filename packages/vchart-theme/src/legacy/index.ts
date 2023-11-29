import { colorLegend } from './legend/color-legend';
import { sizeLegend } from './legend/size-legend';
import type { ITheme } from '@visactor/vchart-types';

export const legacyTheme: ITheme = {
  name: 'legacy',
  description: 'legacy theme for simply legend style',
  component: {
    sizeLegend,
    colorLegend
  }
};
