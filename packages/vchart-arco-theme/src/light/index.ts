import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { ARCO_FONT_FAMILY } from '../common/constants';

export const semiDesignLight: ITheme = {
  name: 'semiDesignLight',
  description: 'Semi Design - light',
  type: 'light',
  fontFamily: ARCO_FONT_FAMILY,
  colorScheme
};
