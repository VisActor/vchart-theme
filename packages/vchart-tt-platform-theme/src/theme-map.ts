import type { ITheme } from '@visactor/vchart';
import { ttPlatformLight } from './light';
import { ttPlatformDark } from './dark';

export const allThemeMap = new Map([
  // 定制主题
  [ttPlatformLight.name, ttPlatformLight],
  [ttPlatformDark.name, ttPlatformDark]
]) as Map<string, ITheme>;
