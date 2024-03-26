import type { IMarkLineTheme } from '@visactor/vchart-types';

export const markLine: IMarkLineTheme = {
  startSymbol: {
    visible: false,
    size: 10
  },
  endSymbol: {
    visible: true,
    size: 10
  },
  label: {
    refY: 5,
    labelBackground: {
      padding: {
        top: 2,
        bottom: 2,
        right: 4,
        left: 4
      }
    }
  }
};
