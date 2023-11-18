import { isValidNumber } from '@visactor/vutils';

export const getTokenValue = <T>(token: string, defaultValue?: T, chartContainer?: HTMLElement): T | string => {
  const value = getComputedStyle(chartContainer ?? document.documentElement).getPropertyValue(token) || defaultValue;
  if (isValidNumber(value?.[0])) {
    return `rgba(${value})`;
  }
  return value;
};

export const getCurrentMode = () =>
  document.body.hasAttribute('theme-mode') && document.body.getAttribute('theme-mode') === 'dark' ? 'dark' : 'light';

export const generateThemeName = (mode: 'light' | 'dark') => `semiDesign${mode[0].toUpperCase()}${mode.slice(1)}`;

export const observeAttribute = (
  element: HTMLElement,
  attribute: string,
  callback: (mutation: MutationRecord) => void
) => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === attribute) {
        callback(mutation);
      }
    });
  });
  observer.observe(element, { attributes: true });
};
