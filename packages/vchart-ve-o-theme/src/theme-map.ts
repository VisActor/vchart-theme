import type { ITheme } from '@visactor/vchart';
import { allLightThemes } from './light';
import { allDarkThemes } from './dark';

export const allThemeMap = new Map([
  ...(allLightThemes.map(theme => [theme.name, theme]) as [string, ITheme][]),
  ...(allDarkThemes.map(theme => [theme.name, theme]) as [string, ITheme][])
]) as Map<string, ITheme>;
