import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { SEMI_FONT_FAMILY } from '../common/constants';
import { markByName } from '../common/mark';

export const semiDesignDark: ITheme = {
  name: 'semiDesignDark',
  description: 'Semi Design - dark',
  type: 'dark',
  fontFamily: SEMI_FONT_FAMILY,
  colorScheme,
  markByName
};
