import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { SEMI_FONT_FAMILY } from '../common/constants';
import { series } from '../common/series';
import { component } from '../common/component';

export const ttPlatformDark: ITheme = {
  name: 'ttPlatformDark',
  description: 'TT Platform - dark',
  type: 'dark',
  fontFamily: SEMI_FONT_FAMILY,
  colorScheme,
  series,
  component
};
