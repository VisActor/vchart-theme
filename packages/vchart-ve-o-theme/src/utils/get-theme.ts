import type { ThemeMode } from '@visactor/vchart-theme-utils';
import { ColorSchemeType } from '../interface';
import { specialDataScheme } from '../common/data-scheme';
import { veODesignLight } from '../light';
import { veODesignDark } from '../dark';
import { getColorScheme as getLightColorScheme } from '../light/color-scheme';
import { getColorScheme as getDarkColorScheme } from '../dark/color-scheme';

export const getTheme = (mode: ThemeMode, colorScheme: ColorSchemeType | string = ColorSchemeType.default) => {
  const scheme = specialDataScheme[colorScheme];
  const baseTheme = mode === 'light' ? veODesignLight : veODesignDark;
  const getColorScheme = mode === 'light' ? getLightColorScheme : getDarkColorScheme;
  if (scheme) {
    return {
      ...baseTheme,
      colorScheme: getColorScheme(scheme.colors)
    };
  }
  return baseTheme;
};
