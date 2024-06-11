import type { ITheme } from '@visactor/vchart';
import { component } from '../common/component';
import { markByName, markByType } from '../common/mark';
import { token } from '../common/constants';

export const mobileDarkTheme: ITheme = {
  name: 'mobileDark',
  type: 'dark',
  description: 'dark theme for mobile devices',
  padding: 12,
  token,
  component,
  mark: markByType,
  markByName
};
