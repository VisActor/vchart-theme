import type { IGlobalMarkThemeByName } from '@visactor/vchart';

export const markByName: IGlobalMarkThemeByName = {
  bar: {
    style: {
      opacity: 1
    },
    state: {
      hover: {
        opacity: 0.8
      }
    }
  },
  point: {
    style: {
      size: 8
    },
    state: {
      hover: {
        size: 12
      }
    }
  }
};
