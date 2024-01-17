import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { ARCO_FONT_FAMILY } from '../common/constants';

export const arcoDesignLight: ITheme = {
  name: 'arcoDesignLight',
  description: 'Arco Design - light',
  type: 'light',
  fontFamily: ARCO_FONT_FAMILY,
  colorScheme
};
