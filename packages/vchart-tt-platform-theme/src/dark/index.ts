import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { series } from '../common/series';
import { component } from '../common/component';
import { markByName } from '../common/mark';
import { token } from '@visactor/vchart-semi-theme';

export const ttPlatformDark: ITheme = {
  name: 'ttPlatformDark',
  description: 'TT Platform - dark',
  type: 'dark',
  token,
  colorScheme,
  series,
  component,
  markByName
};
