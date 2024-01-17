import type { ITheme } from '@visactor/vchart-types';
import { component } from '../common/component';
import { markByName, markByType } from '../common/mark';

export const mobileDarkTheme: ITheme = {
  name: 'mobileDark',
  type: 'dark',
  description: 'dark theme for mobile devices',
  padding: 12,
  component,
  mark: markByType,
  markByName
};
