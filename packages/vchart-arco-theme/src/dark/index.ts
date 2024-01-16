import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { ARCO_FONT_FAMILY } from '../common/constants';

export const arcoDesignDark: ITheme = {
  name: 'arcoDesignDark',
  description: 'Arco Design - dark',
  type: 'dark',
  fontFamily: ARCO_FONT_FAMILY,
  colorScheme
};
