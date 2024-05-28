import type { ITheme } from '@visactor/vchart-types';
import { vScreenThemeList } from './v-screen';
import { legacyDarkTheme, legacyLightTheme } from './legacy';
import { mobileDarkTheme, mobileLightTheme } from './mobile';
import { chartHubLightTheme } from './chart-hub';

export const allThemeMap = new Map([
  // 移动端主题
  [mobileLightTheme.name, mobileLightTheme],
  [mobileDarkTheme.name, mobileDarkTheme],
  // 传统主题
  [legacyLightTheme.name, legacyLightTheme],
  [legacyDarkTheme.name, legacyDarkTheme],
  // 大屏主题
  ...([...vScreenThemeList].map(theme => [theme.name, theme]) as [string, ITheme][]),
  // ChartHub 主题
  [chartHubLightTheme.name, chartHubLightTheme]
  // new theme here
]) as Map<string, ITheme>;
