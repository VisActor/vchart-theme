import type { ITheme } from '@visactor/vchart';
import { veODesignLight } from './light';
import { veODesignDark } from './dark';

export const allThemeMap = new Map([
  // arco design 主题
  [veODesignLight.name, veODesignLight],
  [veODesignDark.name, veODesignDark]
]) as Map<string, ITheme>;
