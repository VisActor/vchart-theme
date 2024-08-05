import type { IThemeColorScheme } from '@visactor/vchart';
import { palette } from './palette';

export const getColorScheme = (dataScheme: string[]): IThemeColorScheme => ({
  default: {
    dataScheme,
    palette
  }
});
