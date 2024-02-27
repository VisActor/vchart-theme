import { THEME_MODE_ATTRIBUTE, THEME_NAME_PREFIX } from './common/constants';

export * from '@visactor/vchart-theme-utils';

export const getCurrentMode = () =>
  document.body.hasAttribute(THEME_MODE_ATTRIBUTE) && document.body.getAttribute(THEME_MODE_ATTRIBUTE) === 'dark'
    ? 'dark'
    : 'light';

export const generateThemeName = (mode: 'light' | 'dark') =>
  `${THEME_NAME_PREFIX}${mode[0].toUpperCase()}${mode.slice(1)}`;
