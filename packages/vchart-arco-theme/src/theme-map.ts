import type { ITheme } from '@visactor/vchart';
import { arcoDesignLight } from './light';
import { arcoDesignDark } from './dark';

export const allThemeMap = new Map([
  // arco design 主题
  [arcoDesignLight.name, arcoDesignLight],
  [arcoDesignDark.name, arcoDesignDark]
]) as Map<string, ITheme>;
