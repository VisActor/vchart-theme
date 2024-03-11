import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { markByName } from '../common/mark';
import { token } from '../common/token';

export const semiDesignLight: ITheme = {
  name: 'semiDesignLight',
  description: 'Semi Design - light',
  type: 'light',
  token,
  colorScheme,
  markByName
};
