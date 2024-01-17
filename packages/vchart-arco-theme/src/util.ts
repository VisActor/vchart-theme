import { THEME_MODE_ATTRIBUTE } from './common/constants';

export * from '@visactor/vchart-theme-utils';

export const getCurrentMode = () =>
  document.body.hasAttribute(THEME_MODE_ATTRIBUTE) && document.body.getAttribute(THEME_MODE_ATTRIBUTE) === 'dark'
    ? 'dark'
    : 'light';

export const generateThemeName = (mode: 'light' | 'dark') => `arcoDesign${mode[0].toUpperCase()}${mode.slice(1)}`;
