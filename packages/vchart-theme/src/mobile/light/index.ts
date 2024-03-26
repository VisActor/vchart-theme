import type { ITheme } from '@visactor/vchart-types';
import { component } from '../common/component';
import { markByName, markByType } from '../common/mark';
import { token } from '../common/constants';

export const mobileLightTheme: ITheme = {
  name: 'mobileLight',
  type: 'light',
  description: 'light theme for mobile devices',
  padding: 12,
  token,
  component,
  mark: markByType,
  markByName
};
