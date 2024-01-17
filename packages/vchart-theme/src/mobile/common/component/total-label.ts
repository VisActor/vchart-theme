import type { ITotalLabelTheme } from '@visactor/vchart-types';
import { THEME_CONSTANTS } from '../constants';

export const totalLabel: ITotalLabelTheme = {
  visible: false,
  offset: 5,
  style: {
    fontSize: THEME_CONSTANTS.l4FontSize
    // lineHeight: THEME_CONSTANTS.l4LineHeight,
  }
};
