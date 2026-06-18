import type { ITheme } from '@visactor/vchart';
import { keystoneDesignDark } from './dark';
import { keystoneDesignLight } from './light';

export const allThemeMap = new Map([
  [keystoneDesignLight.name, keystoneDesignLight],
  [keystoneDesignDark.name, keystoneDesignDark]
]) as Map<string, ITheme>;
