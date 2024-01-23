import type { ITheme } from '@visactor/vchart-types';
import { vScreenThemeList } from './v-screen';
import { legacyDarkTheme, legacyLightTheme } from './legacy';
import { mobileDarkTheme, mobileLightTheme } from './mobile';

export const allThemeMap = new Map([
  // 移动端主题
  [mobileLightTheme.name, mobileLightTheme],
  [mobileDarkTheme.name, mobileDarkTheme],
  // 传统主题
  [legacyLightTheme.name, legacyLightTheme],
  [legacyDarkTheme.name, legacyDarkTheme],
  // 大屏主题
  ...([...vScreenThemeList].map(theme => [theme.name, theme]) as [string, ITheme][])
  // new theme here
]) as Map<string, ITheme>;
