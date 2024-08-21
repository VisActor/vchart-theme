import type { IGlobalMarkThemeByName, IGlobalMarkThemeByType } from '@visactor/vchart';

export const markByType: IGlobalMarkThemeByType = {
  text: {
    style: {
      fontWeight: 'normal',
      fillOpacity: 1
    }
  }
};

export const markByName: IGlobalMarkThemeByName = {
  line: {
    style: {
      lineWidth: 2
    }
  },
  point: {
    style: {
      size: 8
    }
  }
};
