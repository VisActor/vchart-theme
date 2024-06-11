import { colorLegend } from './legend/color-legend';
import { sizeLegend } from './legend/size-legend';
import type { ITheme } from '@visactor/vchart';

export const legacyLightTheme: ITheme = {
  name: 'legacyLight',
  description: 'legacy light theme for simply legend style',
  type: 'light',
  component: {
    sizeLegend,
    colorLegend
  }
};

export const legacyDarkTheme: ITheme = {
  name: 'legacyDark',
  description: 'legacy dark theme for simply legend style',
  type: 'dark',
  component: {
    sizeLegend,
    colorLegend
  }
};
