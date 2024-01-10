import type { ITheme } from '@visactor/vchart-types';
import { vScreenThemeList } from './v-screen';
import { legacyDarkTheme, legacyLightTheme } from './legacy';

export const allThemeMap = new Map([
  // 大屏主题
  ...([...vScreenThemeList].map(theme => [theme.name, theme]) as [string, ITheme][]),
  // 传统主题
  [legacyLightTheme.name, legacyLightTheme],
  [legacyDarkTheme.name, legacyDarkTheme]
  // new theme here
]) as Map<string, ITheme>;
