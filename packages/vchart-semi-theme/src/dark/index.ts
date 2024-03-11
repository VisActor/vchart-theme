import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { markByName } from '../common/mark';
import { token } from '../common/token';

export const semiDesignDark: ITheme = {
  name: 'semiDesignDark',
  description: 'Semi Design - dark',
  type: 'dark',
  token,
  colorScheme,
  markByName
};
