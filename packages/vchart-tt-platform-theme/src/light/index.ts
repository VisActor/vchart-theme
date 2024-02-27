import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { SEMI_FONT_FAMILY } from '../common/constants';
import { series } from '../common/series';
import { component } from '../common/component';
import { markByName } from '../common/mark';

export const ttPlatformLight: ITheme = {
  name: 'ttPlatformLight',
  description: 'TT Platform - light',
  type: 'light',
  fontFamily: SEMI_FONT_FAMILY,
  colorScheme,
  series,
  component,
  markByName
};
