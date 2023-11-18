import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { SEMI_FONT_FAMILY } from '../common/constants';

export const semiDesignLight: ITheme = {
  name: 'semiDesignLight',
  description: 'Semi Design - light',
  type: 'light',
  fontFamily: SEMI_FONT_FAMILY,
  colorScheme
};
