import type { ITheme } from '@visactor/vchart';
import { colorScheme } from './color-scheme';
import { markByName } from '../common/mark';
import { token } from '../common/token';
import { series } from '../common/series';
import { component } from '../common/component';

export const semiDesignLight: ITheme = {
  name: 'semiDesignLight',
  description: 'Semi Design - light',
  type: 'light',
  token,
  colorScheme,
  markByName,
  series,
  component
};
