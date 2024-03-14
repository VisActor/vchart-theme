import type { ITheme } from '@visactor/vchart';
import { getColorScheme } from './color-scheme';
import { token } from '@visactor/vchart-arco-theme';
import { dataScheme } from '../common/data-scheme';
import { component } from '../common/component';
import { series } from '../common/series';
import { markByName } from '../common/mark';
import { getAllThemes } from '../utils/get-all-themes';

export const veODesignLight: ITheme = {
  name: 'veODesignLight',
  description: 'O Design - light',
  type: 'light',
  token,
  colorScheme: getColorScheme(dataScheme),
  component,
  series,
  markByName
};

export const allLightThemes = getAllThemes(veODesignLight, getColorScheme);
