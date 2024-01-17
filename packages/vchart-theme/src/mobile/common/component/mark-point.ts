import type { IMarkPointTheme } from '@visactor/vchart-types';

export const markPoint: IMarkPointTheme = {
  itemLine: {
    decorativeLine: {
      visible: false
    },
    startSymbol: {
      size: 5,
      visible: true
    }
  },
  itemContent: {
    offsetY: -50
  }
};
