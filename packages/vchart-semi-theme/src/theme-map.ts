import type { ITheme } from '@visactor/vchart-types';
import { semiDesignLight } from './light';
import { semiDesignDark } from './dark';

export const allThemeMap = new Map([
  // semi design 主题
  [semiDesignLight.name, semiDesignLight],
  [semiDesignDark.name, semiDesignDark]
]) as Map<string, ITheme>;
